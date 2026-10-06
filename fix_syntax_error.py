import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix the syntax error: remove the dangling body.light-mode
css = re.sub(r'body\.light-mode\s*/\* Also ensure.*?\*/', '', css, flags=re.DOTALL)

# Just to be completely sure there are no other dangling body.light-mode words without braces:
css = re.sub(r'body\.light-mode\s+(?=/\* ---)', '', css, flags=re.DOTALL)

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)
