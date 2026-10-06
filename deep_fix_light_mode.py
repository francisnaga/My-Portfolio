import re

with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# I will append overrides to ensure the light mode is fully fixed.
light_mode_fixes = """
/* --- Light Mode Deep Fixes --- */
body.light-mode .logo {
    color: var(--text-primary) !important;
}

body.light-mode .nav-links a {
    color: var(--text-secondary) !important;
}
body.light-mode .nav-links a:hover {
    color: var(--text-primary) !important;
}

/* Fix the washed out cards */
body.light-mode .glass-reflection {
    background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%) !important;
    pointer-events: none;
    z-index: 1; /* Keep it below text if possible, or just lower opacity */
}

body.light-mode .card-content, 
body.light-mode .card-visual, 
body.light-mode .card-meta {
    position: relative;
    z-index: 2; /* Keep text above the reflection */
}

/* Fix the glowing blobs (card-glow) entirely in light mode */
body.light-mode .card-glow {
    display: none !important; /* The blobs look like smudges in light mode, remove them for a clean Apple look */
}

/* Fix SVG colors in cards */
body.light-mode .bento-item .service-icon {
    opacity: 0.9;
}

body.light-mode .bento-item {
    background: rgba(255, 255, 255, 0.7) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
}
body.light-mode .bento-item:hover {
    background: #ffffff !important;
    border-color: rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important;
}

body.light-mode .giant-title {
    color: #1d1d1f !important;
}

body.light-mode .section-subtitle, 
body.light-mode .about-desc p {
    color: #424245 !important;
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write(light_mode_fixes)

