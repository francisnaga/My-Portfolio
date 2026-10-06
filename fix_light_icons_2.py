import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove the rule from fix_hero_and_readme.py that forces ALL light mode icons to be dark
css = re.sub(r'/\* --- Fix Free Consultation Icon & General Service Icons in Light Mode ---\s*\*/\s*body\.light-mode \.service-icon\s*\{[^}]*\}', '', css, flags=re.DOTALL)

# Just to be extremely thorough, let's remove any other stray rules setting body.light-mode .service-icon to #1d1d1f
css = re.sub(r'body\.light-mode \.service-icon\s*\{\s*color:\s*#1d1d1f;?\s*\}', '', css)

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)
