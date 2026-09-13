import re
import sys
from html.parser import HTMLParser

class TagValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
        self.errors = []
    
    def handle_starttag(self, tag, attrs):
        if tag.lower() not in self.void_tags:
            self.stack.append((tag.lower(), self.getpos()))
            
    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self.void_tags:
            return
        if not self.stack:
            self.errors.append(f'Unexpected closing tag </{tag}> at {self.getpos()}')
            return
        last_tag, pos = self.stack.pop()
        if last_tag != tag:
            self.errors.append(f'Mismatched tag: expected </{last_tag}> (opened at {pos}), found </{tag}> at {self.getpos()}')

def verify(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    validator = TagValidator()
    validator.feed(content)
    if validator.stack:
        for tag, pos in validator.stack:
            validator.errors.append(f'Unclosed tag <{tag}> opened at {pos}')

    print('=== HTML Tag Verification ===')
    print('Errors count:', len(validator.errors))
    for e in validator.errors[:10]:
        print(' ', e)

    # Strip script and style blocks for math check
    body_no_scripts = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', content, flags=re.IGNORECASE)
    body_no_scripts = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '', body_no_scripts, flags=re.IGNORECASE)

    # Count $$ first
    double_dollars = len(re.findall(r'\$\$', body_no_scripts))
    # Replace $$ with empty to count single $
    no_double = re.sub(r'\$\$', '', body_no_scripts)
    single_dollars = len(re.findall(r'\$', no_double))
    
    print('=== MathJax Delimiters (excluding <script>/<style>) ===')
    print(f'Single $ count: {single_dollars} (even: {single_dollars % 2 == 0})')
    print(f'Double $$ count: {double_dollars} (even: {double_dollars % 2 == 0})')
    
    # Check for multiline single-dollar formulas
    # Replace all $$...$$ with placeholder
    temp_body = re.sub(r'\$\$[\s\S]*?\$\$', '', body_no_scripts)
    # Check if any single $ spans across newline
    multiline_single_dollars = re.findall(r'\$([^\$\n]*\n[^\$]*)\$', temp_body)
    print(f'Multiline single-dollar formulas count: {len(multiline_single_dollars)}')
    for m in multiline_single_dollars[:5]:
        print('  Sample:', repr(m[:80]))

    # Check forbidden commands
    print('=== Forbidden Macro Audit ===')
    for pattern in [r'\\boldsymbol', r'\\!\\\$', r'\\text\{[\u4e00-\u9fa5]+?\}', r'\\\\mathbf']:
        matches = re.findall(pattern, content)
        print(f'Pattern "{pattern}": {len(matches)} matches')
        if matches:
            print('  Samples:', matches[:3])

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else 'ch7_2_projection_least_squares.html'
    verify(target)
