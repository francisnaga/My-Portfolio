import re

# 1. Update apple-overrides.css
with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the entire light mode section
light_mode_regex = r'/\* --- Light Mode --- \*/.*'

polished_light_mode_css = """/* --- Light Mode --- */
body.light-mode {
    --bg-color: #f5f5f7;
    --card-bg: #ffffff;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --accent-color: #1d1d1f;
    --border-color: rgba(0, 0, 0, 0.08);
}

/* Light Mode Overrides */
body.light-mode .hero-bg, 
body.light-mode .hero::before {
    background: radial-gradient(circle at 50% 0%, rgba(0,0,0,0.03) 0%, transparent 60%);
}

body.light-mode .text-gradient {
    background: linear-gradient(135deg, #1d1d1f 0%, #86868b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

body.light-mode .bento-item {
    background: rgba(255, 255, 255, 0.6) !important;
    border: 1px solid rgba(0, 0, 0, 0.06) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

body.light-mode .bento-item:hover {
    background: rgba(255, 255, 255, 0.8) !important;
    border-color: rgba(0, 0, 0, 0.1) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
}

body.light-mode .glass-reflection {
    background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 40%);
}

body.light-mode .card-glow {
    opacity: 0.1; /* Reduce glow intensity in light mode */
}

body.light-mode .header {
    background: rgba(245, 245, 247, 0.7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

body.light-mode .nav-links a {
    color: var(--text-primary);
}

body.light-mode .btn-link {
    background-color: #1d1d1f;
    color: #ffffff !important;
}

body.light-mode .btn-link:hover {
    background-color: #333336;
}

body.light-mode .modal {
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

body.light-mode .modal-header {
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

body.light-mode .btn-email {
    background: rgba(0,0,0,0.04) !important;
    border-color: rgba(0,0,0,0.1) !important;
}

body.light-mode .btn-email:hover {
    background: rgba(0,0,0,0.08) !important;
}

body.light-mode .btn-email-small {
    background: rgba(0,0,0,0.05) !important;
    border-color: rgba(0,0,0,0.1) !important;
}

body.light-mode .btn-email-small:hover {
    background: rgba(0,0,0,0.08) !important;
}

body.light-mode .noise-overlay {
    opacity: 0.03; /* Softer noise in light mode */
}
"""

css = re.sub(light_mode_regex, polished_light_mode_css, css, flags=re.DOTALL)
with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 2. Update interactive-bg.js to support light mode orbs
with open('interactive-bg.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Make orb colors dynamic based on theme
# We will just inject a line in the loop to override the color if light-mode is active.
loop_update = """
    const isLight = document.body.classList.contains('light-mode');
    
    orbs.forEach((orb, i) => {
"""

js = js.replace('orbs.forEach((orb, i) => {', loop_update)

draw_update = """
        // Determine color based on theme
        let orbColor = orb.color;
        if (isLight) {
            if (i === 0) orbColor = 'rgba(0, 0, 0, 0.04)';
            if (i === 1) orbColor = 'rgba(50, 50, 50, 0.03)';
            if (i === 2) orbColor = 'rgba(100, 100, 100, 0.02)';
        }

        // Draw orb
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orbColor);
"""

js = js.replace("""        // Draw orb
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);""", draw_update)

with open('interactive-bg.js', 'w', encoding='utf-8') as f:
    f.write(js)
