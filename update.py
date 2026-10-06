import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update logo
html = html.replace('<a href="#" class="logo">Naga.</a>', '<a href="#" class="logo">Naga Digital.</a>')

# Update title
html = html.replace('<title>Naga | Digital Craftsman</title>', '<title>Naga Digital.</title>')

# Update footer copyright
html = html.replace('&copy; 2026 Naga.', '&copy; 2026 Naga Digital.')

# Inject Intro Loader right after <body>
loader_html = """
    <!-- Intro Loader -->
    <div id="intro-loader" class="loader-overlay">
        <div class="loader-text-container">
            <span class="loader-text typing-effect">Naga Digital.</span>
        </div>
    </div>
"""
html = html.replace('<body>', '<body>\n' + loader_html)

# Inject Canvas for interactive 3D hero
canvas_html = """
        <section class="hero section">
            <canvas id="hero-canvas" class="hero-interactive-bg"></canvas>"""
html = html.replace('<section class="hero section">', canvas_html)

# Remove card-bg-icon completely from all cards for a cleaner Apple aesthetic
html = re.sub(r'<div class="card-bg-icon">.*?</div>', '', html, flags=re.DOTALL)

# Inject script before </body>
html = html.replace('</body>', '    <script src="interactive-bg.js"></script>\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update apple-overrides.css
css_addition = """

/* --- Intro Loader --- */
.loader-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: #000000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.loader-overlay.fade-out {
    opacity: 0;
    pointer-events: none;
}

.loader-text {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: #ffffff;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid rgba(255,255,255,0.75);
    animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: rgba(255,255,255,0.75); }
}

/* --- Hero Interactive Canvas --- */
.hero-interactive-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0;
    pointer-events: none; /* Let clicks pass through to content */
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)
