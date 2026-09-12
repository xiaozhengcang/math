import re

with open('ch7_2_projection_least_squares.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all <script>...</script> blocks
html_no_scripts = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)

# Now count $$
dd = re.findall(r'\$\$', html_no_scripts)
print(f"Non-script count of '$$': {len(dd)}")

# Remove $$...$$
no_dd = re.sub(r'\$\$.*?\$\$', '', html_no_scripts, flags=re.DOTALL)
sd = re.findall(r'\$', no_dd)
print(f"Non-script count of single '$': {len(sd)}")
