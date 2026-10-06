import re

# 1. Update README.md
readme_content = """# Naga Digital | Professional Developer Portfolio

A high-performance, premium portfolio website showcasing mobile and web development services. Designed with a sleek, Apple-inspired aesthetic featuring frosted glass effects, fluid animations, and a seamless Light/Dark mode toggle.

## 🚀 Features

- **Premium UI/UX:** Frosted glass navigation, interactive bento-box service cards, and dynamic gradient glows.
- **Dark & Light Modes:** Flawless transition between a sleek dark aesthetic and a clean, bright light mode.
- **Fully Responsive:** Optimized for both desktop and mobile experiences with bespoke touch-friendly layouts.
- **Vanilla Performance:** Built purely with HTML, CSS, and JavaScript for zero-dependency blazing fast load times.

## 🛠 Tech Stack
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Backdrop Filters)
- JavaScript (Vanilla DOM manipulation, Intersection Observer)

## 👤 About Naga
Providing premium digital solutions to elevate your business from idea to scale. From mobile app development to website design, Python automation, and Google Business setup.

*Built for high conversion and premium client experiences.*
"""
with open('README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)


# 2. Update index.html chips
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_chips = """<div class="hero-chips fade-in delay-2" style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem;">
                    <span class="chip">Ads</span>
                    <span class="chip">Tech Support</span>
                </div>"""

new_chips = """<div class="hero-chips fade-in delay-2" style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; max-width: 600px; margin-left: auto; margin-right: auto;">
                    <span class="chip">Web Dev</span>
                    <span class="chip">Mobile Apps</span>
                    <span class="chip">UI/UX</span>
                    <span class="chip">Automation</span>
                    <span class="chip">SEO</span>
                    <span class="chip">Tech Support</span>
                    <span class="chip">Ads</span>
                </div>"""

html = html.replace(old_chips, new_chips)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 3. Update apple-overrides.css with styling fixes
css_additions = """
/* --- Fix Hero Centering & Blue Accent --- */
.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
}

.text-gradient {
    background: linear-gradient(135deg, #0070F3, #3291FF) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
}

/* --- Fix Loader Light Mode Text --- */
body.light-mode .loader-text {
    color: #1d1d1f !important;
    border-right-color: #0070F3 !important;
}

/* --- Fix Free Consultation Icon & General Service Icons in Light Mode --- */
body.light-mode .service-icon {
    color: #1d1d1f; /* Ensure stroke="currentColor" icons are dark in light mode */
}
/* Ensure the hover state still overrides it */
body.light-mode .service-card:hover .service-icon {
    color: transparent !important; /* Let the gradient show */
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)
