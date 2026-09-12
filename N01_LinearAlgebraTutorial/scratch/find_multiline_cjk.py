import re

with open('ch7_2_projection_least_squares.html', 'r', encoding='utf-8') as f:
    content = f.read()

m_dd = re.finditer(r'\$\$(.*?)\$\$', content, flags=re.DOTALL)
for m in m_dd:
    text = m.group(1)
    if re.search(r'[\u4e00-\u9fa5]', text):
        start_line = content[:m.start()].count('\n') + 1
        print(f"Line {start_line}: {repr(text.strip())}")
