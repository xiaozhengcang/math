import re

with open('ch7_2_projection_least_squares.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_double = False
for idx, line in enumerate(lines, 1):
    # check for $$
    # count $$ in line
    dds = line.count('$$')
    if dds % 2 != 0:
        in_double = not in_double
    if not in_double:
        # line without $$
        temp = re.sub(r'\$\$.*?\$\$', '', line)
        s_count = temp.count('$')
        if s_count % 2 != 0:
            print(f"Line {idx} has odd number of '$' ({s_count}): {line.strip()}")
