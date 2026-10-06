import re

# 1. Update style.css header
with open('style.css', 'r', encoding='utf-8') as f:
    style_css = f.read()

new_header_css = """.header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 100;
    background: rgba(12, 12, 12, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}"""

style_css = re.sub(r'\.header\s*\{[^}]*\}', new_header_css, style_css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(style_css)


# 2. Update apple-overrides.css light mode header
with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    apple_css = f.read()

new_light_header = """body.light-mode .header {
    background: rgba(245, 245, 247, 0.85) !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
}"""

apple_css += "\n" + new_light_header

# Also add the mobile-only-contacts CSS
mobile_contacts_css = """
@media (max-width: 768px) {
    .mobile-only-contacts {
        display: flex !important;
    }
    .header {
        padding: 1rem 0 !important;
    }
}
"""
apple_css += "\n" + mobile_contacts_css

with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(apple_css)


# 3. Inject mobile contacts into index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

mobile_contacts_html = """
                <div class="mobile-only-contacts" style="display: none; flex-direction: column; gap: 1rem; margin-top: 2rem; width: 100%;">
                    <a href="https://wa.me/2349130436032" target="_blank" class="btn-whatsapp-small" aria-label="WhatsApp" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: #fff; padding: 0.8rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 1rem; transition: transform 0.2s ease, opacity 0.2s ease;">
                        <svg viewBox="0 0 448 512" fill="currentColor" style="width: 20px; height: 20px;"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        WhatsApp Me
                    </a>
                    <a href="mailto:francisnaga@icloud.com" class="btn-email-small" aria-label="Email" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.8rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 1rem; transition: background 0.2s ease;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email Me
                    </a>
                </div>
"""

# Insert right before the closing </div> of <div class="nav-links">
# The structure is:
#             <div class="nav-links">
#                 <a href="#work">Work</a>
#                 <a href="#about">About</a>
#                 <a href="#contact" class="btn-link">Let's Talk</a>
#                 <button id="theme-toggle" ...>
#                     <svg ...></svg>
#                     <svg ...></svg>
#                 </button>
#             </div>

# Since this is tricky with regex, we can just find </button>\n            </div>
html = html.replace('</button>\n\n            </div>', '</button>\n' + mobile_contacts_html + '            </div>')
html = html.replace('</button>\n            </div>', '</button>\n' + mobile_contacts_html + '            </div>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
