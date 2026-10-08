import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Update Inkto Card accent color to match the Blue logo
    # The current color is #BF5AF2 (Purple). We'll change it to a vibrant Blue.
    html = re.sub(r'(<!-- Project 5: Inkto -->.*?<article class=".*?service-card" style="--delay: 0\.5s; --service-color: )#[a-fA-F0-9]+(;")', r'\1#2563EB\2', html, flags=re.DOTALL)

    # 2. Hand-craft an SVG that perfectly mimics the provided Inkto logo
    # Blue pen nib morphing into 3 horizontal speed lines.
    inkto_logo_svg = '''<svg class="service-icon brand-icon" viewBox="0 0 100 100" fill="currentColor">
    <!-- Top horizontal line -->
    <path d="M42 35 L75 35 A5 5 0 0 1 75 45 L48 45" />
    <!-- Middle horizontal line -->
    <path d="M52 50 L75 50 A5 5 0 0 1 75 60 L48 60" />
    <!-- Bottom horizontal line -->
    <path d="M46 65 L70 65 A5 5 0 0 1 70 75 L42 75" />
    
    <!-- Pen Nib Body -->
    <path d="M40 33 L25 45 L15 68 L28 60 L42 75 C45 65 52 50 48 45 C44 40 43 36 40 33 Z" />
    
    <!-- Cutout / Slit in the nib to make it look like a fountain pen -->
    <path d="M15 68 L32 53" stroke="var(--card-bg)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="33" cy="52" r="4" fill="var(--card-bg)" />
</svg>'''

    # Minify the SVG for injection
    inkto_logo_svg_min = re.sub(r'\s+', ' ', inkto_logo_svg).replace('> <', '><')
    
    # Replace the existing Inkto SVG (which was a generic pen/document)
    html = re.sub(r'(<!-- Project 5: Inkto -->.*?<div class="card-visual">).*?(</div>)', r'\1\n                            ' + inkto_logo_svg_min + r'\n                        \2', html, flags=re.DOTALL)

    # Also update the modal to mention it's an Android app natively, based on user comment
    html = html.replace('AI-powered legal document platform that scans', 'Android app and AI-powered legal platform that scans')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
