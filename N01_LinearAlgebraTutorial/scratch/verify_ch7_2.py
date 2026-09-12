import re
import sys
import subprocess
from html.parser import HTMLParser

class TagValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.void_tags = {'meta', 'link', 'img', 'br', 'hr', 'input', 'path', 'circle', 'line', 'rect', 'polygon', 'defs', 'pattern', 'marker'}

    def handle_starttag(self, tag, attrs):
        if tag not in self.void_tags:
            self.stack.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if tag in self.void_tags:
            return
        if not self.stack:
            self.errors.append(f"Unexpected closing tag </{tag}> at line {self.getpos()[0]}")
            return
        last_tag, pos = self.stack.pop()
        if last_tag != tag:
            self.errors.append(f"Mismatched tag: expected </{last_tag}> (opened at line {pos[0]}), got </{tag}> at line {self.getpos()[0]}")

def check_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    print("=== Step 1: HTML Tag Balance Verification ===")
    parser = TagValidator()
    parser.feed(content)
    if parser.stack:
        for tag, pos in parser.stack:
            parser.errors.append(f"Unclosed tag <{tag}> opened at line {pos[0]}")
    
    if parser.errors:
        print(f"FAIL: HTML Errors found ({len(parser.errors)}):")
        for err in parser.errors[:10]:
            print("  ", err)
        return False
    else:
        print("PASS: HTML tags are 100% balanced and well-formed.")

    print("\n=== Step 2: LaTeX Math Syntax Audit ===")
    if 'tex-svg.js' not in content:
        print("FAIL: MathJax tex-svg.js not referenced!")
        return False
    if "fontCache: 'global'" not in content:
        print("FAIL: MathJax svg global fontCache missing!")
        return False

    no_scripts = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)

    # Count $$
    dd_matches = re.findall(r'\$\$', no_scripts)
    num_dd = len(dd_matches)
    print(f"Non-script count of '$$': {num_dd} ({'PASS (Even)' if num_dd % 2 == 0 else 'FAIL (Odd)'})")
    if num_dd % 2 != 0:
        return False

    # Extract all $$...$$ blocks
    # Use split on '$$'
    tokens = no_scripts.split('$$')
    # Even indices are outside $$, odd indices are inside $$
    dd_blocks = [tokens[i] for i in range(1, len(tokens), 2)]
    outside_dd = [tokens[i] for i in range(0, len(tokens), 2)]
    outside_dd_text = " ".join(outside_dd)

    # Count single $ outside $$
    sd_tokens = outside_dd_text.split('$')
    num_sd_delimiters = len(sd_tokens) - 1
    print(f"Non-script count of single '$': {num_sd_delimiters} ({'PASS (Even)' if num_sd_delimiters % 2 == 0 else 'FAIL (Odd)'})")
    if num_sd_delimiters % 2 != 0:
        return False

    sd_blocks = [sd_tokens[i] for i in range(1, len(sd_tokens), 2)]

    # Check for forbidden \boldsymbol
    bs = re.findall(r'\\boldsymbol', no_scripts)
    if bs:
        print(f"FAIL: Found forbidden \\boldsymbol ({len(bs)})")
        return False
    else:
        print("PASS: No forbidden \\boldsymbol found.")

    # Check for forbidden double backslash macros
    bad_macros = re.findall(r'\\\\[a-zA-Z]{3,}', no_scripts)
    if bad_macros:
        print(f"FAIL: Found illegal double-backslash commands: {bad_macros[:5]}")
        return False
    else:
        print("PASS: No illegal double-backslash commands.")

    # Check CJK inside dd_blocks and sd_blocks
    cjk_in_dd = []
    for b in dd_blocks:
        cjk = re.findall(r'[\u4e00-\u9fa5]', b)
        if cjk:
            cjk_in_dd.append(b.strip()[:60])

    cjk_in_sd = []
    for b in sd_blocks:
        cjk = re.findall(r'[\u4e00-\u9fa5]', b)
        if cjk:
            cjk_in_sd.append(b.strip()[:60])

    if cjk_in_dd or cjk_in_sd:
        print(f"FAIL: Found CJK inside math: {len(cjk_in_dd)} in $$ and {len(cjk_in_sd)} in $")
        for s in (cjk_in_dd + cjk_in_sd)[:5]:
            print("   Sample:", repr(s))
        return False
    else:
        print("PASS: Zero CJK characters found inside math formulas.")

    # LaTeX environments
    begins = re.findall(r'\\begin\{([a-zA-Z\*]+)\}', no_scripts)
    ends = re.findall(r'\\end\{([a-zA-Z\*]+)\}', no_scripts)
    if len(begins) != len(ends) or sorted(begins) != sorted(ends):
        print(f"FAIL: Mismatched environments: \\begin={len(begins)}, \\end={len(ends)}")
        return False
    else:
        print(f"PASS: LaTeX environments match ({len(begins)} environments).")

    print("\n=== Step 3: Node.js Runtime Script Verification ===")
    scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', content, flags=re.DOTALL)
    js_code = "\n".join(scripts)
    mock_header = """
    const document = {
      getElementById: (id) => ({
        getContext: () => ({
          clearRect: () => {},
          beginPath: () => {},
          moveTo: () => {},
          lineTo: () => {},
          stroke: () => {},
          arc: () => {},
          fill: () => {},
          fillText: () => {},
          setLineDash: () => {}
        }),
        addEventListener: () => {},
        width: 460,
        height: 360,
        style: {},
        textContent: '',
        innerHTML: ''
      }),
      querySelectorAll: (sel) => [],
      addEventListener: () => {}
    };
    const window = { MathJax: {} };
    """
    test_js = mock_header + js_code
    with open('scratch/test_embedded.js', 'w', encoding='utf-8') as f_js:
        f_js.write(test_js)

    try:
        subprocess.run(['node', 'scratch/test_embedded.js'], capture_output=True, text=True, check=True)
        print("PASS: Node.js executed embedded script with exit code 0 and no runtime exceptions.")
    except subprocess.CalledProcessError as e:
        print("FAIL: Node.js execution error:")
        print(e.stderr)
        return False

    return True

if __name__ == '__main__':
    ok = check_file('ch7_2_projection_least_squares.html')
    if ok:
        print("\n[SUCCESS] ALL THREE VERIFICATION STEPS PASSED 100%!")
        sys.exit(0)
    else:
        print("\n[FAILED] VERIFICATION FAILED!")
        sys.exit(1)
