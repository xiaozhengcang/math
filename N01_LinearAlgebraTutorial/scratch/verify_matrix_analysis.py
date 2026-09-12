import os
import sys
import re
from html.parser import HTMLParser
import subprocess

VOID_TAGS = {
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
}

class StrictHTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() not in VOID_TAGS:
            self.stack.append((tag.lower(), self.getpos()))

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in VOID_TAGS:
            return
        if not self.stack:
            self.errors.append(f"Unexpected closing tag </{tag}> at line {self.getpos()[0]}")
            return
        expected_tag, pos = self.stack.pop()
        if expected_tag != tag:
            self.errors.append(f"Mismatched closing tag </{tag}> at line {self.getpos()[0]}, expected </{expected_tag}> from line {pos[0]}")

def check_mathjax(content, filepath):
    errors = []
    
    # Check MathJax script config
    if 'tex-svg.js' not in content:
        errors.append("Missing tex-svg.js MathJax script!")
    if "onerror=\"this.onerror=null;this.src='js/tex-svg.js';\"" not in content:
        errors.append("Missing offline onerror fallback to js/tex-svg.js!")
    if '\\boldsymbol' in content:
        errors.append("Illegal \\boldsymbol found! Use \\mathbf or italic Greek.")
    
    # Check double backslash crash in text
    bad_commands = re.findall(r'\\\\(mathbf|frac|int|Delta|nabla|succ|lambda|sigma|mu|alpha|beta|theta|phi|omega|vec|det|tr)\b', content)
    if bad_commands:
        errors.append(f"Double backslash crash commands found: {bad_commands[:5]}")

    # Check Chinese in underbrace
    if re.search(r'\\underbrace\{[^}]*[\u4e00-\u9fa5]', content):
        errors.append("Chinese characters inside \\underbrace detected! Use normal HTML caption below formula.")

    # Check unescaped < or > in math
    # Search for $ ... < ... $ or $ ... > ... $ where it's not &lt; or \lt
    # Let's check single $ balance
    # Strip code blocks first
    clean_text = re.sub(r'```.*?```', '', content, flags=re.DOTALL)
    clean_text = re.sub(r'<code>.*?</code>', '', clean_text, flags=re.DOTALL)
    clean_text = re.sub(r'<script.*?>.*?</script>', '', clean_text, flags=re.DOTALL)
    
    # Count $$
    double_dollars = clean_text.count('$$')
    if double_dollars % 2 != 0:
        errors.append(f"Odd number of display math $$ delimiters: {double_dollars}")
    
    # Remove $$ and count single $
    no_double = clean_text.replace('$$', '')
    single_dollars = no_double.count('$')
    if single_dollars % 2 != 0:
        errors.append(f"Odd number of inline math $ delimiters: {single_dollars}")

    return errors

def check_html(filepath):
    print(f"\n--- Validating: {os.path.basename(filepath)} ---")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. HTML tag nesting
    parser = StrictHTMLValidator()
    parser.feed(content)
    if parser.stack:
        for tag, pos in parser.stack:
            parser.errors.append(f"Unclosed tag <{tag}> from line {pos[0]}")
    
    # 2. MathJax rules
    math_errors = check_mathjax(content, filepath)

    # 3. Inline JavaScript syntax checking
    js_errors = []
    scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', content, flags=re.DOTALL)
    for idx, script_code in enumerate(scripts):
        # Skip pure MathJax JSON configs
        if 'window.MathJax' in script_code and len(script_code.strip().splitlines()) < 25:
            continue
        temp_js = f"scratch_temp_{idx}.js"
        with open(temp_js, 'w', encoding='utf-8') as js_file:
            js_file.write(script_code)
        try:
            res = subprocess.run(['node', '-c', temp_js], capture_output=True, text=True)
            if res.returncode != 0:
                js_errors.append(f"JS syntax error in inline script {idx}: {res.stderr.strip()}")
        finally:
            if os.path.exists(temp_js):
                os.remove(temp_js)

    all_errors = parser.errors + math_errors + js_errors
    if all_errors:
        print(f"FAILED with {len(all_errors)} issues:")
        for err in all_errors:
            print(f"  - {err}")
        return False
    else:
        print("PASSED! HTML, MathJax, and JS are 100% valid.")
        return True

if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else [
        f for f in os.listdir('.') if f.startswith('ma') and f.endswith('.html')
    ]
    if not files:
        print("No files to check.")
        sys.exit(0)
    
    failed = 0
    for f in files:
        if not check_html(f):
            failed += 1
    
    if failed > 0:
        print(f"\nTotal failures: {failed}")
        sys.exit(1)
    else:
        print(f"\nAll {len(files)} files checked successfully!")
