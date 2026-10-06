import re

# 1. Update apple-overrides.css with vibrant card hover and fixed nav text colors
css_additions = """
/* --- Light Mode Nav Text Fix --- */
body.light-mode .header a:not(.btn-link):not(.logo) {
    color: #1d1d1f !important;
}
body.light-mode .header a:not(.btn-link):not(.logo):hover {
    color: #000000 !important;
}
body.light-mode .header .logo {
    color: #1d1d1f !important;
}
body.light-mode .header .btn-link {
    background: #1d1d1f !important;
    color: #ffffff !important;
}
body.light-mode .header .btn-link:hover {
    background: #000000 !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
}
body.light-mode .mobile-toggle .bar {
    background-color: #1d1d1f !important;
}

/* --- Vibrant Service Cards (Both Modes) --- */
.service-card {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
}
.service-card:hover {
    transform: translateY(-8px) !important;
    border-color: rgba(99, 102, 241, 0.5) !important; /* Indigo glow */
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15) !important;
}

body.light-mode .service-card:hover {
    border-color: rgba(99, 102, 241, 0.8) !important;
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25), 0 0 15px rgba(236, 72, 153, 0.2) !important; /* Indigo & Pink glow */
}

/* Give icons inside cards a gradient pop on hover */
.service-card:hover .service-icon {
    background: linear-gradient(135deg, #6366f1, #ec4899) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
    transform: scale(1.1);
    transition: all 0.3s ease;
}

/* --- Contact Form Styling --- */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
}
.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color 0.3s ease, background 0.3s ease;
}
.contact-form textarea {
    min-height: 120px;
    resize: vertical;
}
.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(255,255,255,0.05);
}
.btn-submit {
    background: var(--text-primary);
    color: var(--bg-color);
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
}
.btn-submit:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

body.light-mode .contact-form input,
body.light-mode .contact-form textarea {
    background: rgba(0,0,0,0.03);
    border-color: rgba(0,0,0,0.1);
}
body.light-mode .contact-form input:focus,
body.light-mode .contact-form textarea:focus {
    border-color: #6366f1;
    background: rgba(0,0,0,0.05);
}
"""

with open('apple-overrides.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_additions)


# 2. Inject Contact Form into index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

form_html = """
                <form class="contact-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Message sent! I will get back to you shortly.');">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" placeholder="How can I help you?" required></textarea>
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
"""

# Find the contact section text and insert the form directly below it
# Currently it says: <p class="contact-subtitle fade-in delay-1">Interested in working together? Drop me a note below, or reach out directly:<br><strong>francisnaga@icloud.com</strong> | <strong>+234 913 043 6032</strong></p>
# Then it has the contact-buttons div.
# We will insert the form before the contact-buttons div.

# We'll use a precise regex or string replace.
target_str = '<div class="contact-buttons fade-in delay-2">'
replacement_str = form_html + '\n                ' + target_str

html = html.replace(target_str, replacement_str)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
