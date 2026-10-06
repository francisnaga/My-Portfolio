import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Kill the smudgy glow in light mode
css = re.sub(r'body\.light-mode \.card-glow\s*\{[^}]*\}', 'body.light-mode .card-glow { display: none !important; }', css)
css = re.sub(r'body\.light-mode \.service-card:hover \.card-glow\s*\{[^}]*\}', '', css)

# 2. Remove all previous messy icon hover blocks
# Remove the specific comments I added before
css = re.sub(r'/\* --- Fix SVG Icon Hover Bug.*?\*/', '', css, flags=re.DOTALL)
css = re.sub(r'/\* Give icons inside cards a gradient pop on hover \*/', '', css)
css = re.sub(r'/\* Ensure the hover state still overrides it \*/', '', css)

# Remove the actual blocks
css = re.sub(r'\.service-card:hover \.service-icon\s*(,\s*body\.light-mode \.service-card:hover \.service-icon\s*)?\{[^}]*\}', '', css)
css = re.sub(r'body\.light-mode \.service-card:hover \.service-icon\s*\{[^}]*\}', '', css)

# 3. Add the pristine icon hover logic
new_icon_hover = """
/* --- Clean Icon Hover --- */
.service-card:hover .service-icon {
    background: transparent !important;
    -webkit-text-fill-color: initial !important;
    -webkit-background-clip: initial !important;
    filter: drop-shadow(0 0 12px currentColor) brightness(1.2) !important;
    transform: scale(1.1) !important;
    transition: all 0.3s ease !important;
}
/* In light mode, ensure non-brand icons are dark initially so they are visible */
body.light-mode .service-icon:not(.brand-icon) {
    color: #1d1d1f !important; 
}
"""
css += new_icon_hover

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)
