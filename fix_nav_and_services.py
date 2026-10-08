import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Fix Navigation Menu
    # Ensure Services and Work are both present
    # Current state might have just Work and About
    nav_links_match = re.search(r'<div class="nav-links">(.*?)<a href="#contact" class="btn-link">', html, flags=re.DOTALL)
    if nav_links_match:
        nav_content = nav_links_match.group(1)
        new_nav_content = '\n                <a href="#services">Services</a>\n                <a href="#work">Work</a>\n                <a href="#about">About</a>\n                \n                '
        html = html.replace(nav_links_match.group(0), f'<div class="nav-links">{new_nav_content}<a href="#contact" class="btn-link">')

    # 2. Adjust Services Grid Hierarchy
    # Primary: 01 (Mobile), 02 (Web), 03 (AI)
    # Secondary: 04 (Python), 06 (Google), 08 (Tech Support), 09 (Business Launch)
    # Strategy: 10 (Free Consultation)
    
    # AI Tools (03) -> make span-2
    html = re.sub(r'(<!-- 03 AI Tools & Chatbots -->\s*<article class="bento-item) service-card', r'\1 span-2 service-card', html)

    # Business Launch (09) -> make span-1 (remove span-2)
    html = re.sub(r'(<!-- 09 Business Launch Package -->\s*<article class="bento-item) span-2 service-card', r'\1 service-card', html)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
