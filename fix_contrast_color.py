import re

css_additions = """
/* --- Fix Let's Talk Button Shape --- */
.btn-link {
    padding: 0.7rem 1.5rem !important;
    border-radius: 50px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    font-size: 0.85rem !important;
    transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.btn-link:hover {
    transform: translateY(-2px) !important;
}

/* --- Fix Text Contrast --- */
.intro-text strong {
    color: var(--text-primary) !important;
    font-weight: 700 !important;
}

/* --- Make Card Colors Pop (Light & Dark) --- */
/* Override the previous display:none in light mode */
body.light-mode .card-glow {
    display: block !important;
    opacity: 0.1 !important; 
    filter: blur(50px) !important;
    background: var(--service-color) !important;
    width: 200px !important;
    height: 200px !important;
}

/* Dark mode default pop increase */
.card-glow {
    opacity: 0.2 !important;
}

/* Extreme pop on hover for both modes */
.service-card:hover .card-glow {
    opacity: 0.5 !important;
    transform: translate(-50%, -50%) scale(1.6) !important;
    filter: blur(60px) !important;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
body.light-mode .service-card:hover .card-glow {
    opacity: 0.3 !important;
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)
