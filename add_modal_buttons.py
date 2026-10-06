import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# The buttons HTML to insert after the price paragraph
buttons_html = """
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="https://wa.me/2349130436032" target="_blank" class="btn-whatsapp-small" aria-label="WhatsApp" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: #fff; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 0.95rem; transition: transform 0.2s ease, opacity 0.2s ease;">
                    <svg viewBox="0 0 448 512" fill="currentColor" style="width: 18px; height: 18px;"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                    WhatsApp
                </a>
                <a href="mailto:francisnaga@icloud.com" class="btn-email-small" aria-label="Email" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; transition: background 0.2s ease;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email
                </a>
            </div>"""

# Replace all instances of the modal quote paragraph with the paragraph + buttons
html = re.sub(
    r'(<p class="modal-price">.*?Message me to get an exact quote\.</p>)',
    r'\1\n' + buttons_html,
    html,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Add some hover effects to apple-overrides.css
css_addition = """
/* Modal Contact Buttons Hover Effects */
.btn-whatsapp-small:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}
.btn-email-small:hover {
    background: rgba(255, 255, 255, 0.12) !important;
}

body.light-mode .btn-email-small {
    background: rgba(0,0,0,0.05) !important;
    border-color: rgba(0,0,0,0.1) !important;
}

body.light-mode .btn-email-small:hover {
    background: rgba(0,0,0,0.08) !important;
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)
