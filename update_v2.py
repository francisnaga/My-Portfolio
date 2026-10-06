import re

# --- 1. UPDATE index.html ---
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Contact Form
form_regex = r'<form action="https://formspree.io/f/YOUR_FORM_ID".*?</form>'
direct_contact_html = """
                <div class="direct-contact-wrapper" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
                    <a href="https://wa.me/2349130436032" target="_blank" class="btn-whatsapp" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: #fff; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; text-decoration: none; font-size: 1.1rem; transition: transform 0.3s ease;">
                        <svg viewBox="0 0 448 512" fill="currentColor" style="width: 24px; height: 24px;"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        WhatsApp Me
                    </a>
                    <a href="mailto:francisnaga@icloud.com" class="btn-email" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--text-primary); padding: 1rem 2rem; border-radius: 12px; font-weight: 500; text-decoration: none; font-size: 1.1rem; transition: background 0.3s ease;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email Me
                    </a>
                </div>
"""
html = re.sub(form_regex, direct_contact_html, html, flags=re.DOTALL)

# Replace Footer Socials
socials_regex = r'<div class="socials">.*?</div>'
socials_html = """<div class="socials" style="display: flex; gap: 1.5rem;">
                <a href="https://x.com/francisnaga" target="_blank" aria-label="X (Twitter)" style="color: var(--text-secondary); transition: color 0.3s ease;"><svg viewBox="0 0 512 512" fill="currentColor" style="width: 20px; height: 20px;"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                <a href="https://github.com/francisnaga" target="_blank" aria-label="GitHub" style="color: var(--text-secondary); transition: color 0.3s ease;"><svg viewBox="0 0 496 512" fill="currentColor" style="width: 20px; height: 20px;"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
            </div>"""
html = re.sub(socials_regex, socials_html, html, flags=re.DOTALL)

# Inject Theme Toggle Button in Navigation
theme_btn_html = """
                <a href="#contact" class="btn-link">Let's Talk</a>
                <button id="theme-toggle" aria-label="Toggle Light Mode" style="background: transparent; border: none; cursor: pointer; color: var(--text-primary); margin-left: 1rem; display: flex; align-items: center; justify-content: center;">
                    <svg id="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    <svg id="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; display: none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
"""
html = html.replace('<a href="#contact" class="btn-link">Let\'s Talk</a>', theme_btn_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# --- 2. UPDATE apple-overrides.css ---
with open('apple-overrides.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix loader text animation
css = css.replace('.loader-text {\n    font-family: \'Playfair Display\', serif;', '.loader-text {\n    display: inline-block;\n    font-family: \'Playfair Display\', serif;')

# Add Light Mode Variables and Overrides
light_mode_css = """
/* --- Light Mode --- */
body.light-mode {
    --bg-main: #f5f5f7;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --border-color: rgba(0, 0, 0, 0.1);
}

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
    background: rgba(255, 255, 255, 0.7) !important;
    border: 1px solid rgba(0, 0, 0, 0.05) !important;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
}

body.light-mode .bento-item:hover {
    background: rgba(255, 255, 255, 0.9) !important;
    border-color: rgba(0, 0, 0, 0.1) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
}

body.light-mode .glass-reflection {
    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 40%);
}

body.light-mode .header {
    background: rgba(245, 245, 247, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

body.light-mode .nav-links a {
    color: var(--text-primary);
}

body.light-mode .btn-link {
    background-color: #1d1d1f;
    color: #fff !important;
}

body.light-mode .btn-link:hover {
    background-color: #333336;
}

body.light-mode .modal {
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .btn-email {
    background: rgba(0,0,0,0.03) !important;
    border-color: rgba(0,0,0,0.1) !important;
}

body.light-mode .btn-email:hover {
    background: rgba(0,0,0,0.06) !important;
}
"""
with open('apple-overrides.css', 'w', encoding='utf-8') as f:
    f.write(css + light_mode_css)

# --- 3. UPDATE interactive-bg.js ---
with open('interactive-bg.js', 'r', encoding='utf-8') as f:
    js = f.read()

theme_js = """

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            
            if (isLight) {
                localStorage.setItem('theme', 'light');
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                localStorage.setItem('theme', 'dark');
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        });
    }
});
"""

with open('interactive-bg.js', 'w', encoding='utf-8') as f:
    f.write(js + theme_js)
