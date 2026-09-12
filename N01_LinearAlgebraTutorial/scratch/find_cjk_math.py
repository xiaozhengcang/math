import re

with open('ch7_2_projection_least_squares.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines, 1):
    m_dd = re.findall(r'\$\$(.*?)\$\$', line)
    for m in m_dd:
        if re.search(r'[\u4e00-\u9fa5]', m):
            print(f"Line {idx} ($$): {m.strip()[:100]}")
    # Single dollars on this line
    temp = re.sub(r'\$\$.*?\$\$', '', line)
    m_sd = re.findall(r'\$([^\$]+?)\$', temp)
    for m in m_sd:
        if re.search(r'[\u4e00-\u9fa5]', m):
            print(f"Line {idx} ($): {m.strip()[:100]}")
