import re

# 1. Update index.html to remove the dots from the chips
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the chips HTML
old_chips = """<div class="hero-chips fade-in delay-2">
                    <span class="chip chip-ads">
                        <span class="chip-dot"></span> Ads
                    </span>
                    <span class="chip chip-tech">
                        <span class="chip-dot"></span> Tech Support
                    </span>
                </div>"""
new_chips = """<div class="hero-chips fade-in delay-2" style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem;">
                    <span class="chip">Ads</span>
                    <span class="chip">Tech Support</span>
                </div>"""

html = html.replace(old_chips, new_chips)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Add refined CSS overrides for chips and loader to apple-overrides.css
css_additions = """
/* --- Refined Premium Tags --- */
.chip {
    padding: 0.4rem 0.8rem !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px !important;
    font-size: 0.75rem !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    font-weight: 500 !important;
    color: var(--text-primary) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
}
body.light-mode .chip {
    background: rgba(0, 0, 0, 0.03) !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
}

/* --- Loader Fixes --- */
.loader-text {
    font-family: var(--font-heading) !important;
    letter-spacing: -0.03em !important;
    font-weight: 600 !important;
}
body.light-mode #intro-loader {
    background: #f5f5f7 !important;
    color: #1d1d1f !important;
}
body.light-mode .loader-text {
    border-right-color: #1d1d1f !important;
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)
