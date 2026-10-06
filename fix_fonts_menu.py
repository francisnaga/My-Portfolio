import re

# 1. Update style.css fonts
with open('style.css', 'r', encoding='utf-8') as f:
    style_css = f.read()

# Replace fonts with Apple/Google native system stacks
style_css = re.sub(
    r"--font-heading:.*?;", 
    '--font-heading: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;', 
    style_css
)
style_css = re.sub(
    r"--font-body:.*?;", 
    '--font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;', 
    style_css
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(style_css)


# 2. Add Light Mode Mobile Menu Fixes
mobile_menu_fix = """
/* --- Light Mode Mobile Menu Fix --- */
@media (max-width: 768px) {
    body.light-mode .nav-links {
        background: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(25px) !important;
        -webkit-backdrop-filter: blur(25px) !important;
        border-left: 1px solid rgba(0,0,0,0.1) !important;
        box-shadow: -10px 0 40px rgba(0,0,0,0.1) !important;
    }
    body.light-mode .nav-links a {
        color: #1d1d1f !important;
    }
    body.light-mode .nav-links a:hover {
        color: #000000 !important;
        background: rgba(0,0,0,0.05) !important;
    }
}
"""
with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write(mobile_menu_fix)


# 3. Clean up index.html by removing old font imports
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Inter.*?rel="stylesheet">', '', html, flags=re.DOTALL)
html = html.replace('<!-- Importing Playfair Display (Serif) and Inter (Sans) -->', '<!-- Using Native Apple/Google System Fonts -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
