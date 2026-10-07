import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. SEO Metadata
    new_head = """<title>Naga Digital | Web & Mobile App Development, Lagos Nigeria</title>
    <meta name="description" content="Naga Digital builds websites, mobile apps, and AI tools for Nigerian businesses. Web development, app development, and growth services from idea to launch.">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Naga Digital | Web & Mobile App Development, Lagos Nigeria">
    <meta property="og:description" content="Naga Digital builds websites, mobile apps, and AI tools for Nigerian businesses.">
    <meta property="og:image" content="https://placehold.co/1200x630/161616/888888?text=Naga+Digital">
    <meta property="og:url" content="https://francisnaga.site">
    <meta property="og:type" content="website">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Naga Digital",
      "image": "https://placehold.co/1200x630/161616/888888?text=Naga+Digital",
      "url": "https://francisnaga.site",
      "telephone": "+2349130436032",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      },
      "description": "Web development, mobile app development, and AI tools for Nigerian businesses."
    }
    </script>
    <link rel="stylesheet" href="style.css">"""
    
    # Replace the old title, desc, and link rel
    html = re.sub(r'<title>.*?</title>\s*<meta name="description".*?>\s*<link rel="stylesheet" href="style.css">', new_head, html, flags=re.DOTALL)


    # 2. Extract Services
    # We will just remove 05 (Facebook Ads) and 07 (WhatsApp Business) from the HTML
    html = re.sub(r'<!-- 05 Facebook & Social Ads -->.*?</article>', '', html, flags=re.DOTALL)
    html = re.sub(r'<!-- 07 WhatsApp Business Setup -->.*?</article>', '', html, flags=re.DOTALL)
    
    # Let's adjust spans for the remaining items so they look good in the grid
    # Make Web (02), Mobile (01), AI (03) the top tier
    # Actually, the grid will naturally reflow. We can just leave their spans as is, or explicitly set them.
    # We will leave the CSS grid to handle the reflow since bento grids are robust.

    # 3. New #work Section
    work_section = """
        <section id="work" class="section">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Selected Work</h2>
                    <p class="section-subtitle">A showcase of recent products and platforms.</p>
                </div>
                
                <div class="bento-grid">
                    <!-- Project 1: NCB Finance -->
                    <article class="bento-item span-2 service-card" style="--delay: 0.1s; --service-color: #D4AF37;" onclick="openModal('modal-work-01')" fade-up>
                        <div class="card-visual" style="padding:0;">
                            <img src="https://placehold.co/600x400/161616/888888?text=NCB+Finance" alt="NCB Finance" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
                        </div>
                        <div class="card-content">
                            <div class="card-meta">Fintech / Web</div>
                            <h3 class="giant-title">NCB Finance</h3>
                            <p class="card-hover-desc">Invoicing and payments platform for Nigerian freelancers and businesses. FIRS compliant with Paystack integration.</p>
                        </div>
                        <div class="card-glow"></div>
                        <div class="glass-reflection"></div>
                    </article>

                    <!-- Project 2: Vantage -->
                    <article class="bento-item service-card" style="--delay: 0.2s; --service-color: #0070F3;" onclick="openModal('modal-work-02')" fade-up>
                        <div class="card-visual" style="padding:0;">
                            <img src="https://placehold.co/600x400/161616/888888?text=Vantage" alt="Vantage" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
                        </div>
                        <div class="card-content">
                            <div class="card-meta">SaaS</div>
                            <h3 class="giant-title">Vantage</h3>
                            <p class="card-hover-desc">Premium job application tracker built for job seekers to monitor pipelines.</p>
                        </div>
                        <div class="card-glow"></div>
                        <div class="glass-reflection"></div>
                    </article>

                    <!-- Project 3: NairaLens -->
                    <article class="bento-item service-card" style="--delay: 0.3s; --service-color: #3DDC84;" onclick="openModal('modal-work-03')" fade-up>
                        <div class="card-visual" style="padding:0;">
                            <img src="https://placehold.co/600x400/161616/888888?text=NairaLens" alt="NairaLens" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
                        </div>
                        <div class="card-content">
                            <div class="card-meta">Finance Data</div>
                            <h3 class="giant-title">NairaLens</h3>
                            <p class="card-hover-desc">Nigerian financial transparency platform with BNPL comparisons and live rates.</p>
                        </div>
                        <div class="card-glow"></div>
                        <div class="glass-reflection"></div>
                    </article>
                    
                    <!-- Project 4: Classync -->
                    <article class="bento-item span-2 service-card" style="--delay: 0.4s; --service-color: #FF453A;" onclick="openModal('modal-work-04')" fade-up>
                        <div class="card-visual" style="padding:0;">
                            <img src="https://placehold.co/600x400/161616/888888?text=Classync" alt="Classync" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
                        </div>
                        <div class="card-content">
                            <div class="card-meta">EdTech / PWA</div>
                            <h3 class="giant-title">Classync</h3>
                            <p class="card-hover-desc">Edtech PWA for Nigerian university students with custom approval workflows.</p>
                        </div>
                        <div class="card-glow"></div>
                        <div class="glass-reflection"></div>
                    </article>

                    <!-- Project 5: Inkto -->
                    <article class="bento-item span-3 service-card" style="--delay: 0.5s; --service-color: #BF5AF2;" onclick="openModal('modal-work-05')" fade-up>
                        <div class="card-visual" style="padding:0;">
                            <img src="https://placehold.co/1200x400/161616/888888?text=Inkto" alt="Inkto" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
                        </div>
                        <div class="card-content">
                            <div class="card-meta">AI / Legal Tech</div>
                            <h3 class="giant-title">Inkto</h3>
                            <p class="card-hover-desc">AI-powered legal document platform that transcribes handwritten documents to DOCX using Gemini AI.</p>
                        </div>
                        <div class="card-glow"></div>
                        <div class="glass-reflection"></div>
                    </article>
                </div>
            </div>
        </section>
"""
    # Insert work section before about section
    html = html.replace('<section id="about" class="section about-section">', work_section + '\n        <section id="about" class="section about-section">')

    # 4. Testimonials Section
    testimonials_section = """
        <section id="testimonials" class="section testimonials-section">
            <div class="container max-width-small">
                <div class="section-header fade-up" style="text-align: center; margin-bottom: 3rem;">
                    <h2 class="section-title">Client Feedback</h2>
                    <p class="section-subtitle">What they say about working with me.</p>
                </div>
                
                <div class="testimonial-grid" style="display: flex; flex-direction: column; gap: 2rem;">
                    <div class="testimonial-card fade-up" style="background: var(--card-bg); padding: 2rem; border-radius: 20px; border: 1px solid var(--border-color);">
                        <p style="font-size: 1.1rem; font-style: italic; color: var(--text-primary); margin-bottom: 1.5rem;">"Naga Digital completely transformed how we handle our legal documents. Inkto saves our firm countless hours of manual transcription. Francis delivered an incredibly smart, reliable solution."</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-weight: bold;">P</div>
                            <div>
                                <h4 style="margin: 0; font-size: 1rem;">Principal Partner</h4>
                                <span style="font-size: 0.85rem; color: var(--text-secondary);">Law Firm (Inkto Client)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-card fade-up" style="background: var(--card-bg); padding: 2rem; border-radius: 20px; border: 1px solid var(--border-color);">
                        <p style="font-size: 1.1rem; font-style: italic; color: var(--text-primary); margin-bottom: 1.5rem;">"Professional, fast, and built exactly what we needed. Highly recommended for anyone looking to build a serious digital product."</p>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-weight: bold;">C</div>
                            <div>
                                <h4 style="margin: 0; font-size: 1rem;">Startup Founder</h4>
                                <span style="font-size: 0.85rem; color: var(--text-secondary);">Recent Client</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""
    # Insert testimonials before contact section
    html = html.replace('<section id="contact" class="section contact-section">', testimonials_section + '\n        <section id="contact" class="section contact-section">')

    # 5. Update Email and Footer
    html = html.replace('francisnaga@icloud.com', 'hello@francisnaga.site')
    
    linkedin_svg = '<a href="https://linkedin.com/in/francisnaga" target="_blank" aria-label="LinkedIn" style="color: var(--text-secondary); transition: color 0.3s ease;"><svg viewBox="0 0 448 512" fill="currentColor" style="width: 20px; height: 20px;"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>'
    
    # Insert LinkedIn next to GitHub
    html = html.replace('aria-label="GitHub"', 'aria-label="GitHub"') # safety
    html = html.replace('aria-label="GitHub"', 'aria-label="GitHub" style="color: var(--text-secondary); transition: color 0.3s ease;"') # fix missing style if any, actually let's just insert before the closing div
    html = re.sub(r'(<a href="https://github.*?</a>)', r'\1\n                ' + linkedin_svg, html)

    # Insert legitimacy line
    legitimacy_html = '<div class="legitimacy" style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.5rem;">Lagos, Nigeria | Operating since 2023</div>'
    html = html.replace('<div class="copyright">&copy; 2026 Naga Digital.</div>', '<div class="copyright">&copy; 2026 Naga Digital.</div>\n            ' + legitimacy_html)


    # 6. Add Work Modals and remove 05, 07 modals
    html = re.sub(r'<div class="modal" id="modal-05">.*?</div>\s*</div>', '', html, flags=re.DOTALL) # wait, modal has a nested div.
    # Better to just use regex that stops at the next modal
    html = re.sub(r'<div class="modal" id="modal-05">.*?(?=<div class="modal" id="modal-06">)', '', html, flags=re.DOTALL)
    html = re.sub(r'<div class="modal" id="modal-07">.*?(?=<div class="modal" id="modal-08">)', '', html, flags=re.DOTALL)
    
    work_modals = """
    <!-- Work Modals -->
    <div class="modal" id="modal-work-01">
        <div class="modal-header">
            <h3 class="modal-title">NCB Finance</h3>
            <button class="modal-close" aria-label="Close modal" onclick="closeModals()">✕</button>
        </div>
        <div class="modal-body">
            <img src="https://placehold.co/600x300/161616/888888?text=NCB+Finance+Screenshot" alt="NCB Finance Preview" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
            <p>Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. Features FIRS/NRS e-invoicing compliance, a dark luxury fintech aesthetic (Playfair Display + DM Sans, warm gold accents), and Paystack integration.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Next.js</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Supabase</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Paystack</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">TypeScript</span>
            </div>
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" target="_blank" class="btn-email-small" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; width: 100%;">
                    Visit Live Site
                </a>
            </div>
        </div>
    </div>

    <div class="modal" id="modal-work-02">
        <div class="modal-header">
            <h3 class="modal-title">Vantage</h3>
            <button class="modal-close" aria-label="Close modal" onclick="closeModals()">✕</button>
        </div>
        <div class="modal-body">
            <img src="https://placehold.co/600x300/161616/888888?text=Vantage+Screenshot" alt="Vantage Preview" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
            <p>Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to seamlessly track pipelines and manage interviews.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Next.js</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Supabase</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Tailwind</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Framer Motion</span>
            </div>
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" target="_blank" class="btn-email-small" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; width: 100%;">
                    Visit Live Site
                </a>
            </div>
        </div>
    </div>

    <div class="modal" id="modal-work-03">
        <div class="modal-header">
            <h3 class="modal-title">NairaLens</h3>
            <button class="modal-close" aria-label="Close modal" onclick="closeModals()">✕</button>
        </div>
        <div class="modal-body">
            <img src="https://placehold.co/600x300/161616/888888?text=NairaLens+Screenshot" alt="NairaLens Preview" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
            <p>Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Next.js</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Supabase</span>
            </div>
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" target="_blank" class="btn-email-small" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; width: 100%;">
                    Visit Live Site
                </a>
            </div>
        </div>
    </div>

    <div class="modal" id="modal-work-04">
        <div class="modal-header">
            <h3 class="modal-title">Classync</h3>
            <button class="modal-close" aria-label="Close modal" onclick="closeModals()">✕</button>
        </div>
        <div class="modal-body">
            <img src="https://placehold.co/600x300/161616/888888?text=Classync+Screenshot" alt="Classync Preview" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
            <p>Edtech PWA for Nigerian university students featuring Student, Rep, and Admin roles along with a full custom approval workflow.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Next.js</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">PWA</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Supabase</span>
            </div>
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" target="_blank" class="btn-email-small" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; width: 100%;">
                    Visit Live Site
                </a>
            </div>
        </div>
    </div>

    <div class="modal" id="modal-work-05">
        <div class="modal-header">
            <h3 class="modal-title">Inkto</h3>
            <button class="modal-close" aria-label="Close modal" onclick="closeModals()">✕</button>
        </div>
        <div class="modal-body">
            <img src="https://placehold.co/600x300/161616/888888?text=Inkto+Screenshot" alt="Inkto Preview" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
            <p>AI-powered legal document platform that scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">React Native</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Supabase</span>
                <span class="chip" style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">Gemini AI</span>
            </div>
            <div class="modal-contact-buttons" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <a href="#" target="_blank" class="btn-email-small" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; text-decoration: none; font-size: 0.95rem; width: 100%;">
                    Visit Live Site
                </a>
            </div>
        </div>
    </div>
    """
    html = html.replace('<!-- Modals -->', '<!-- Modals -->\n' + work_modals)

    # 7. Add Navigation Link for Work
    nav_link = '<li><a href="#services">Services</a></li>\n                    <li><a href="#work">Work</a></li>'
    html = html.replace('<li><a href="#services">Services</a></li>', nav_link)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
