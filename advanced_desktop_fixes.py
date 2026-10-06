import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix 1: Remove raw email and phone from contact text
old_contact = """<p class="contact-text fade-up stagger-1">Interested in working together? Drop me a note below, or reach out directly:<br>
                <a href="mailto:francisnaga@icloud.com" style="color: var(--text-primary); text-decoration: none; font-weight: 500;">francisnaga@icloud.com</a> &nbsp;|&nbsp; 
                <a href="tel:+2349130436032" style="color: var(--text-primary); text-decoration: none; font-weight: 500;">+234 913 043 6032</a></p>"""

new_contact = """<p class="contact-text fade-up stagger-1">Interested in working together? Drop me a note below, or reach out using the buttons.</p>"""

# If the exact multiline string doesn't match, we can use regex
if old_contact in html:
    html = html.replace(old_contact, new_contact)
else:
    # Fallback regex just in case
    html = re.sub(r'<p class="contact-text[^>]*>Interested in working together\? Drop me a note below, or reach out directly:<br>.*?</p>', new_contact, html, flags=re.DOTALL)


# Fix 2: Inject modal descriptions into service cards for desktop hover
# Find all modals and extract their ID (e.g., '01') and paragraph text
modals = re.findall(r'<div class="modal" id="modal-(\d+)">(.*?)</div>\s*</div>', html, re.DOTALL)
# Wait, the modal structure is:
# <div class="modal" id="modal-01"> ... <div class="modal-body">\s*<p>(.*?)</p>
for match in re.finditer(r'<div class="modal" id="modal-(\d+)">(.*?)<div class="modal-body">\s*<p>(.*?)</p>', html, re.DOTALL):
    card_id = match.group(1)
    desc_text = match.group(3).strip()
    
    # Now find the corresponding card: onclick="openModal('modal-01')"
    # Inside it, find <h3 class="giant-title">...</h3> and append the description paragraph
    # We'll use a regex replacement function for this specific card
    card_pattern = re.compile(rf'(onclick="openModal\(\'modal-{card_id}\'\)".*?<h3 class="giant-title"[^>]*>.*?</h3>)', re.DOTALL)
    
    def inject_desc(m):
        return m.group(1) + f'\n                            <p class="card-hover-desc">{desc_text}</p>'
    
    # Make sure we don't inject multiple times if run twice
    if f'<p class="card-hover-desc">{desc_text}</p>' not in html:
        html = card_pattern.sub(inject_desc, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 3. Add CSS for Hover Details and fix the Icon Hover Bug definitely
css_additions = """
/* --- Fix SVG Icon Hover Bug (Absolute Override) --- */
.service-card:hover .service-icon,
body.light-mode .service-card:hover .service-icon {
    background: transparent !important;
    -webkit-background-clip: border-box !important;
    -webkit-text-fill-color: #0070F3 !important; /* Force the text-fill to blue instead of transparent or initial */
    color: #0070F3 !important; 
    filter: drop-shadow(0 0 10px rgba(0, 112, 243, 0.5)) !important;
}

/* --- Desktop Service Card Hover Details --- */
.card-hover-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-top: 1rem;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    line-height: 1.5;
}

/* Only enable the hover expansion on desktop devices (laptops/desktops) */
@media (min-width: 1024px) {
    .service-card:hover .card-hover-desc {
        opacity: 1;
        max-height: 150px; /* Expand to fit text */
        margin-top: 1rem;
    }
    
    /* Slightly lift the whole content block up on hover for a parallax feel */
    .service-card:hover .card-content {
        transform: translateY(-5px);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-content {
        transition: transform 0.4s ease;
    }
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)
