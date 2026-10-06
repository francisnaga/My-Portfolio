import re

# 1. Update apple-overrides.css with styling fixes for the icon hover bug
css_additions = """
/* --- Fix SVG Icon Hover Bug (Overrides previous text-clip hack) --- */
.service-card:hover .service-icon,
body.light-mode .service-card:hover .service-icon {
    background: transparent !important;
    -webkit-text-fill-color: initial !important;
    color: #0070F3 !important; /* Premium Vercel Blue Accent */
    filter: drop-shadow(0 0 10px rgba(0, 112, 243, 0.5)) !important;
    transform: scale(1.1) !important;
    transition: all 0.3s ease !important;
}

/* Also ensure the brand icons with specific inline colors don't get overwritten 
   unintentionally when NOT hovered in light mode */
body.light-mode .service-icon:not(.brand-icon) {
    color: #1d1d1f !important;
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)
