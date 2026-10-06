import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove the rule that forces light mode icons to be dark grey
css = re.sub(r'/\* In light mode, ensure non-brand icons are dark initially so they are visible \*/\s*body\.light-mode \.service-icon:not\(\.brand-icon\)\s*\{[^}]*\}', '', css, flags=re.DOTALL)
css = re.sub(r'body\.light-mode \.service-icon:not\(\.brand-icon\)\s*\{[^}]*\}', '', css)

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)
