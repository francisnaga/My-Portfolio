import re

# 1. Update style.css (or apple-overrides.css) for Animations
css_addition = """
/* --- Scroll Animations --- */
.fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
}

.fade-up.visible {
    opacity: 1;
    transform: translateY(0);
}

.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }
"""
with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)

# 2. Update interactive-bg.js to include IntersectionObserver
js_addition = """
// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
});
"""
with open('interactive-bg.js', 'a', encoding='utf-8') as f:
    f.write(js_addition)

# 3. Update index.html to add the classes
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add fade-up to section headers
html = html.replace('<div class="section-header">', '<div class="section-header fade-up">')
html = html.replace('<div class="about-title">', '<div class="about-title fade-up">')
html = html.replace('<div class="about-desc">', '<div class="about-desc fade-up stagger-1">')
html = html.replace('<h2 class="contact-title">Start a project</h2>', '<h2 class="contact-title fade-up">Start a project</h2>')
html = html.replace('<p class="contact-text">', '<p class="contact-text fade-up stagger-1">')
html = html.replace('<div class="direct-contact-wrapper"', '<div class="direct-contact-wrapper fade-up stagger-2"')

# Add fade-up and stagger to bento items based on their --delay variable
# e.g., --delay: 0s -> stagger-1, 0.1s -> stagger-2
html = re.sub(r'(<article class="bento-item[^>]*?)>', r'\1 fade-up">', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
