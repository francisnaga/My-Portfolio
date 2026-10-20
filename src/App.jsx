import React, { useState, useEffect, useCallback } from 'react';
import Logo from './components/Logo';
import { whatsappLink, EMAIL } from './lib/contact';

const INKTO_SCREENSHOTS = [
  {
    src: '/projects/inkto/01-home-dashboard.png',
    title: 'Home & Recents',
    desc: 'Live scan feed, fast action tray, and categorized document cards.',
  },
  {
    src: '/projects/inkto/02-handwritten-scan.png',
    title: 'Camera Scanner',
    desc: 'Perspective warp correction and real-time edge boundary detection.',
  },
  {
    src: '/projects/inkto/03-ai-transcription.png',
    title: 'AI Transcription',
    desc: 'On-device OCR and text extraction with high recognition accuracy.',
  },
  {
    src: '/projects/inkto/04-audio-waveform.png',
    title: 'Voice Notes',
    desc: 'Synchronized audio waveform recording with automated speech transcription.',
  },
  {
    src: '/projects/inkto/05-files-matters.png',
    title: 'Document Matters',
    desc: 'Folder hierarchy, matter classification, and metadata search.',
  },
  {
    src: '/projects/inkto/06-cloud-sync.png',
    title: 'Cloud Sync',
    desc: 'Automated Google Drive and cloud backup with offline caching.',
  },
];

const PROJECTS = [
  {
    title: 'Inkto',
    category: 'Mobile / AI Scanner',
    year: '2026',
    desc: 'Production Android utility for scanning documents, handwritten notes, and voice memos. Built with React Native and Expo, featuring on-device OCR, audio transcription, and secure cloud synchronization.',
    hasScreenshots: true,
    links: [
      {
        label: 'Developer Profile',
        url: 'https://play.google.com/store/apps/dev?id=7500831168663512287',
      },
    ],
  },
  {
    title: 'Vantage',
    category: 'Full-Stack / Productivity',
    year: '2026',
    desc: 'Local-first job application and candidate pipeline tracker. Built with Next.js, TypeScript, and client-side persistence. Provides interactive Kanban stage tracking, interview timelines, and offer analytics.',
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/francisnaga/job-application-tracker',
      },
    ],
  },
  {
    title: 'NCB Finance Portal',
    category: 'Fintech / Client Portal',
    year: '2025',
    desc: 'Commercial lending and borrower asset verification system. Handles SME loan application workflows, automated KYC document ingestion, identity checks, and real-time risk evaluation dashboards.',
    links: [
      {
        label: 'Request Access',
        url: whatsappLink('NCB Finance Portal Demo'),
      },
    ],
  },
  {
    title: 'NairaLens',
    category: 'Data / Real-time Tracker',
    year: '2025',
    desc: 'Real-time foreign exchange aggregator and parallel market spread engine. Monitors official and P2P rate disparities across NGN currency pairs with automated notification alerts.',
    links: [
      {
        label: 'Request Access',
        url: whatsappLink('NairaLens Demo'),
      },
    ],
  },
  {
    title: 'ClasSync',
    category: 'SaaS / University Tool',
    year: '2024',
    desc: 'Academic timetable scheduling service for universities. Synchronizes lecture timetables, hall allocations, and real-time class rescheduling updates for students across mobile and web.',
    links: [
      {
        label: 'Request Access',
        url: whatsappLink('ClasSync Demo'),
      },
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: 'Languages & Core',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Runtimes',
    items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Data & Infrastructure',
    items: ['PostgreSQL', 'SQLite', 'MongoDB', 'Supabase', 'Firebase', 'Redis', 'Docker', 'Linux', 'Git', 'Vercel'],
  },
  {
    title: 'Engineering Practices',
    items: ['REST APIs', 'On-Device ML / OCR', 'System Architecture', 'CI / CD', 'Clean Code', 'Performance Optimization'],
  },
];

const CURRENT_YEAR = 2026;

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
    return 'dark';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Theme toggle handler
  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore local storage write errors
    }
  }, [theme]);

  // Modal keyboard and scroll lock
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Copy email to clipboard
  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Sticky Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand-link" aria-label="Francis Naga Home">
            <Logo size={20} />
            <span className="brand-title">Francis Naga</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                // Sun Icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Page Layout */}
      <main id="main" className="site-wrapper" tabIndex={-1}>
        {/* Hero Section */}
        <section className="hero-block" aria-label="Introduction">
          <div>
            <h1 className="hero-name">
              Francis Naga
              <span className="hero-handle">/nɑːɡə/</span>
            </h1>
          </div>

          <p className="hero-lead">
            Software developer and student builder based in Lagos, Nigeria. Studying Marine
            Engineering at Nigeria Maritime University. Building robust mobile apps, web
            applications, and automated software systems.
          </p>

          <div className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>Available for select engineering contracts</span>
          </div>

          <div className="hero-meta">
            <a
              href="https://github.com/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=7500831168663512287"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`}>
              Email
            </a>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="section" aria-label="Selected Work">
          <div className="section-label">// Selected Work</div>

          <div className="project-list">
            {PROJECTS.map((project) => (
              <article key={project.title} className="project-item">
                <div className="project-header-row">
                  <div className="project-title-group">
                    <h2 className="project-title">{project.title}</h2>
                    <span className="project-tag">{project.category}</span>
                    <span className="project-tag">{project.year}</span>
                  </div>

                  {project.links && project.links[0] && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-action"
                    >
                      <span>{project.links[0].label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                <p className="project-desc">{project.desc}</p>

                {project.hasScreenshots && (
                  <div className="project-meta-row">
                    <button
                      type="button"
                      className="project-btn"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span>View Production Screenshots (6)</span>
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Background & About Section */}
        <section id="about" className="section" aria-label="Background and Engineering">
          <div className="section-label">// Background & Systems</div>

          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Engineering Discipline</h3>
              <p className="info-card-sub">
                Pursuing a B.Eng in Marine Engineering at Nigeria Maritime University (NMU).
                Marine systems training provides deep appreciation for fault tolerance, stress
                tolerances, and rigorous preventive maintenance translated directly into clean
                code and reliable software architecture.
              </p>
              <div className="info-card-meta">
                Nigeria Maritime University (Okerenkoko) • NIIT Certified
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Commercial Impact</h3>
              <p className="info-card-sub">
                Engineered an end-to-end client acquisition and lead qualification engine for an
                enterprise services firm in Lagos, generating over ₦80M in pipeline volume.
                Architected with a custom Next.js funnel, server-side conversion tracking, and
                instant WhatsApp routing.
              </p>
              <div className="info-card-meta">
                Custom Next.js Funnel • Server-Side Tracking • Instant Lead Routing
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <div className="section-label">// Technical Stack</div>

            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="skills-group">
                <div className="skills-group-title">{group.title}</div>
                <div className="skills-chips">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" aria-label="Contact Information">
          <div className="section-label">// Contact</div>

          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <div className="contact-actions">
                <a href={`mailto:${EMAIL}`} className="link-underlined">
                  {EMAIL}
                </a>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-label">WhatsApp</span>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underlined"
              >
                +234 913 043 6032
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/francisnaga"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underlined"
              >
                @francisnaga
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/francisnaga"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underlined"
              >
                Efobi Francis Chibundo
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">X / Twitter</span>
              <a
                href="https://x.com/francisnaga"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underlined"
              >
                @francisnaga
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span style={{ color: 'var(--fg)', fontSize: '0.92rem' }}>
                Lagos, Nigeria (UTC+1)
              </span>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="site-footer">
          <div>
            © {CURRENT_YEAR} Francis Naga. All rights reserved.
          </div>
          <div>
            Monochrome edition inspired by clean typography.
          </div>
        </footer>
      </main>

      {/* Inkto Screenshots Modal */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inkto-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 id="inkto-modal-title" className="modal-title">
                Inkto: Production Android Screenshots
              </h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                Close [Esc]
              </button>
            </div>

            <div className="modal-body">
              <p style={{ marginBottom: '1rem', color: 'var(--gray)', fontSize: '0.88rem' }}>
                Verified captures from physical Android device running Inkto v1.0. Swipe or
                scroll horizontally to explore screens.
              </p>

              <div className="screenshot-gallery">
                {INKTO_SCREENSHOTS.map((screen) => (
                  <div key={screen.title} className="screenshot-card">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      loading="lazy"
                      width="200"
                      height="400"
                    />
                    <span>
                      <strong>{screen.title}</strong>
                      <br />
                      {screen.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
