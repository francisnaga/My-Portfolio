import React, { useState, useEffect, useCallback } from 'react';
import Logo from './components/Logo';
import { whatsappLink, EMAIL } from './lib/contact';

const INKTO_ALL_SCREENS = [
  {
    src: '/projects/inkto/01-home-dashboard.png',
    title: 'Home & Recents',
    desc: 'Categorized document matters, quick action tray, and recent scans.',
  },
  {
    src: '/projects/inkto/02-handwritten-scan.png',
    title: 'Camera Scanner',
    desc: 'Edge boundary detection and high-contrast monochrome scan mode.',
  },
  {
    src: '/projects/inkto/03-ai-transcription.png',
    title: 'AI Transcription',
    desc: 'OCR text recognition and editable markdown export.',
  },
  {
    src: '/projects/inkto/04-audio-waveform.png',
    title: 'Voice Notes',
    desc: 'Synchronized audio waveform recording with automated speech transcription.',
  },
  {
    src: '/projects/inkto/05-files-matters.png',
    title: 'Matter Organization',
    desc: 'Folder hierarchy, matter classification, and metadata search.',
  },
  {
    src: '/projects/inkto/06-cloud-sync.png',
    title: 'Cloud Backup',
    desc: 'Automated Google Drive and cloud sync with offline-first local caching.',
  },
];

const PROJECTS = [
  {
    id: 'inkto',
    title: 'Inkto',
    badge: 'Android Utility • In Production',
    desc: 'Native Android utility that captures handwritten paper notes, scans physical documents with edge correction, transcribes text via on-device OCR, and records synchronized voice notes with Google Drive cloud backup.',
    stack: 'Capacitor • Android Native • OCR Engine • Audio Waveform • Google Drive',
    whatIBuilt:
      'Engineered the complete camera scanning pipeline, perspective corner-detection, high-contrast document rendering, speech waveform recording, and cloud synchronization routines.',
    architecture:
      'Packaged for Android via Capacitor runtime with native camera, storage, and audio plugins. Features offline-first local file caching and automated Google Drive cloud backup.',
    actions: [
      { type: 'modal', label: 'View All 6 Production Screens' },
      {
        type: 'external',
        label: 'Google Play Profile',
        url: 'https://play.google.com/store/apps/dev?id=7500831168663512287',
      },
    ],
  },
  {
    id: 'vantage',
    title: 'Vantage',
    badge: 'Open Source • Full-Stack Web',
    desc: 'A clean, local-first web application designed for job applicants to organize application pipelines, track interview stages through an interactive Kanban board, and review search analytics without external tracking.',
    stack: 'Next.js App Router • TypeScript • Tailwind CSS • IndexedDB',
    whatIBuilt:
      'Architected the local browser persistence layer, drag-and-drop Kanban state machine, stage transition timelines, and instant JSON backup and restore.',
    architecture:
      'Built with Next.js App Router, TypeScript, and client-side IndexedDB storage. Zero external server dependencies, full offline capability, and instant load times.',
    actions: [
      {
        type: 'external',
        label: 'Inspect Source on GitHub',
        url: 'https://github.com/francisnaga/job-application-tracker',
      },
    ],
  },
  {
    id: 'acquisition-pipeline',
    title: 'Commercial Client Acquisition Pipeline',
    badge: 'Client Contract • Production Funnel',
    desc: 'Multi-step customer acquisition funnel engineered for a commercial services firm, combining a custom Next.js frontend, server-side conversion tracking, and automated webhook routing to WhatsApp for instant lead qualification.',
    stack: 'Next.js • Node.js Webhooks • Server-Side Meta CAPI • WhatsApp API',
    whatIBuilt:
      'Developed the multi-step qualification questionnaire, server-side conversion tracking scripts to bypass browser ad-blockers, and real-time webhook routing into WhatsApp chat.',
    architecture:
      'Next.js dynamic routes paired with lightweight Node.js webhook listeners. Direct integration with WhatsApp Business API and secure event logging.',
    actions: [
      {
        type: 'external',
        label: 'Discuss Acquisition Systems',
        url: whatsappLink('Enterprise Acquisition Funnel'),
      },
    ],
  },
  {
    id: 'ncb-finance',
    title: 'SME Lending & KYC Workflow Interface',
    badge: 'Fintech Interface • Client System',
    desc: 'Internal loan intake and borrower document verification interface (NCB Finance) developed to streamline SME underwriting workflows, KYC identity documentation checks, and borrower record management.',
    stack: 'Next.js • TypeScript • Tailwind CSS • Document Ingestion',
    whatIBuilt:
      'Built the borrower application multi-stage wizard, document upload validation preview, and administrative underwriting review dashboard.',
    architecture:
      'Component-driven frontend built with Next.js and TypeScript, designed for secure internal network deployment and client document verification.',
    actions: [
      {
        type: 'external',
        label: 'Enquire About Loan Interfaces',
        url: whatsappLink('NCB Finance Workflow Demo'),
      },
    ],
  },
  {
    id: 'nairalens',
    title: 'Foreign Exchange Spread Engine',
    badge: 'Data Pipeline • Market Monitor',
    desc: 'Lightweight currency spread monitor (NairaLens) tracking disparities between official and parallel market exchange rates across NGN currency pairs with automated rate alerts.',
    stack: 'Python • Scraping Engine • REST APIs • Automated Alerts',
    whatIBuilt:
      'Authored the automated rate scraping daemon, spread calculation algorithms, and webhook dispatcher for rate disparity notifications.',
    architecture:
      'Lightweight Python service scheduled via cron, pushing normalized JSON feeds to client endpoints and messaging webhooks.',
    actions: [
      {
        type: 'external',
        label: 'Enquire About Data Pipelines',
        url: whatsappLink('FX Monitor Service'),
      },
    ],
  },
];

const FOCUS_AREAS = [
  {
    title: 'Mobile & Offline Utilities',
    desc: 'Applications built to run reliably on physical devices, leveraging native hardware APIs (camera, microphone, local storage) and local-first caching that functions without continuous network connectivity.',
  },
  {
    title: 'Full-Stack Web Applications',
    desc: 'Fast, type-safe web interfaces built with Next.js, React, and TypeScript. Focused on high-contrast typography, strict accessibility, zero layout shifts, and resilient backend integrations.',
  },
  {
    title: 'Data Pipelines & Automation',
    desc: 'Custom backend scripts, webhook processors, and document extraction workflows in Python and Node.js designed to eliminate manual administrative bottlenecks and operational overhead.',
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState('inkto');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Toggle theme and persist
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

  // Modal keyboard listener and scroll lock
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

  // Close mobile nav on escape
  useEffect(() => {
    if (!isNavOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen]);

  // Copy email helper
  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  const toggleProject = (id) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Sticky Header with Safe Area Inset Support */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand-link" aria-label="Francis Naga Home">
            <Logo size={32} className="brand-logo" />
            <span className="brand-title">Francis Naga</span>
          </a>

          <div className="header-right">
            {/* Desktop Navigation */}
            <nav className="nav-links desktop-only" aria-label="Primary navigation">
              <a href="#work" className="nav-link">
                Work
              </a>
              <a href="#focus" className="nav-link">
                Focus
              </a>
              <a href="#background" className="nav-link">
                Background
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>

            {/* Theme Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
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

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setIsNavOpen((prev) => !prev)}
              aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isNavOpen}
            >
              {isNavOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isNavOpen && (
          <nav className="mobile-nav-drawer" aria-label="Mobile primary navigation">
            <a href="#work" className="mobile-nav-link" onClick={handleNavClick}>
              Work
            </a>
            <a href="#focus" className="mobile-nav-link" onClick={handleNavClick}>
              Focus
            </a>
            <a href="#background" className="mobile-nav-link" onClick={handleNavClick}>
              Background
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main id="main" className="site-wrapper" tabIndex={-1}>
        {/* 01: Hero Section */}
        <section className="hero-block" aria-label="Introduction">
          <div className="hero-title-group">
            <h1 className="hero-name">Francis Naga</h1>
            <div className="hero-tagline">
              Software Developer &amp; Marine Engineering Student
            </div>
          </div>

          <p className="hero-lead">
            I build focused mobile utilities, responsive web applications, and automated
            document systems. I don't use bloated templates or page builders. Just raw code
            that loads fast and gets the job done.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-cta">
              <span>View Selected Work</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="https://github.com/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`} className="hero-link">
              Email
            </a>
          </div>
        </section>

        {/* 02: Clean Expandable Projects List */}
        <section id="work" className="section" aria-label="Selected Work">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              Production software, mobile utilities, and open-source systems. Click any project
              to review architecture and evidence.
            </p>
          </div>

          <div className="project-list-clean">
            {PROJECTS.map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                <article key={project.id} className="project-item-clean">
                  <button
                    type="button"
                    className="project-header-clickable"
                    onClick={() => toggleProject(project.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`details-${project.id}`}
                  >
                    <div className="project-title-area">
                      <div className="project-title-row">
                        <h3 className="project-name">{project.title}</h3>
                        <span className="project-badge-clean">{project.badge}</span>
                      </div>
                      <p className="project-desc-clean">{project.desc}</p>
                      <div className="project-stack-clean">{project.stack}</div>
                    </div>

                    <div className="project-toggle-indicator" aria-hidden="true">
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                      <span>{isExpanded ? '▲' : '▼'}</span>
                    </div>
                  </button>

                  {/* Expanded Technical Details */}
                  {isExpanded && (
                    <div id={`details-${project.id}`} className="project-expanded-panel">
                      <div className="case-study-details">
                        <div className="detail-col">
                          <span className="detail-heading">What I Built</span>
                          <p className="detail-text">{project.whatIBuilt}</p>
                        </div>

                        <div className="detail-col">
                          <span className="detail-heading">Architecture &amp; Stack</span>
                          <p className="detail-text">{project.architecture}</p>
                        </div>
                      </div>

                      {project.actions && project.actions.length > 0 && (
                        <div className="action-btn-group">
                          {project.actions.map((action) => {
                            if (action.type === 'modal') {
                              return (
                                <button
                                  key={action.label}
                                  type="button"
                                  className="action-btn"
                                  onClick={() => setIsModalOpen(true)}
                                >
                                  <svg
                                    width="15"
                                    height="15"
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
                                  <span>{action.label}</span>
                                </button>
                              );
                            }
                            return (
                              <a
                                key={action.label}
                                href={action.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-btn"
                              >
                                <span>{action.label}</span>
                                <span aria-hidden="true">↗</span>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* 03: What I Build Section */}
        <section id="focus" className="section" aria-label="Engineering Strengths">
          <div className="section-header">
            <h2 className="section-title">What I Build</h2>
            <p className="section-subtitle">
              Focused software engineering across mobile utilities, modern web interfaces, and
              operational automation.
            </p>
          </div>

          <div className="approach-grid">
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="approach-card">
                <h3 className="approach-card-title">{area.title}</h3>
                <p className="approach-card-body">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04: Background Section */}
        <section id="background" className="section" aria-label="Background and Education">
          <div className="section-header">
            <h2 className="section-title">Background &amp; Discipline</h2>
            <p className="section-subtitle">
              Dual foundation in heavy mechanical engineering and software systems development.
            </p>
          </div>

          <div className="background-grid">
            <div className="background-card">
              <h3 className="background-card-title">Marine Engineering Rigor</h3>
              <p className="background-card-body">
                Pursuing a B.Eng in Marine Engineering at Nigeria Maritime University (NMU).
                Training covers marine propulsion machinery, thermodynamics, fluid dynamics, and
                stringent safety regulations. This heavy-machinery discipline shapes how I
                engineer software: prioritizing fault isolation, structural resilience, edge-case
                verification, and preventative maintenance over fragile quick-fixes.
              </p>
              <div className="background-card-meta">
                Nigeria Maritime University (Okerenkoko)
              </div>
            </div>

            <div className="background-card">
              <h3 className="background-card-title">Software Engineering Foundation</h3>
              <p className="background-card-body">
                Formally grounded in core computer science principles and software development
                through NIIT diploma coursework. Supplemented by active production building
                across modern TypeScript, mobile runtimes, relational databases, and serverless
                cloud infrastructure.
              </p>
              <div className="background-card-meta">
                NIIT Software Engineering Diploma • Continuous Production Building
              </div>
            </div>
          </div>
        </section>

        {/* 05: Contact Section */}
        <section id="contact" className="section" aria-label="Contact Information">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Open for select engineering contracts, mobile app development, and technical
              collaborations.
            </p>
          </div>

          <div className="contact-block">
            <p className="contact-lead">
              If you have an engineering problem, need a fast mobile utility, or want to discuss a
              project, send an email or reach out on GitHub or LinkedIn.
            </p>

            <div className="contact-links-grid">
              <div className="contact-action-item">
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

              <div className="contact-action-item">
                <a
                  href="https://github.com/francisnaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underlined"
                >
                  GitHub
                </a>
              </div>

              <div className="contact-action-item">
                <a
                  href="https://linkedin.com/in/francisnaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underlined"
                >
                  LinkedIn
                </a>
              </div>

              <div className="contact-action-item">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underlined"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="site-footer">
          <div>
            &copy; {CURRENT_YEAR} Francis Naga. All rights reserved.
          </div>
          <div>
            Built with React, Vite, and clean typography.
          </div>
        </footer>
      </main>

      {/* Inkto Full Screenshot Modal */}
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
                Inkto: Android Production Screens (6)
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
              <p style={{ marginBottom: '1.25rem', color: 'var(--gray)', fontSize: '0.92rem' }}>
                Verified captures from an Android physical device running Inkto. Scroll
                horizontally to review each workflow screen.
              </p>

              <div className="screenshot-gallery">
                {INKTO_ALL_SCREENS.map((screen) => (
                  <div key={screen.title} className="screenshot-card">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      loading="lazy"
                      width="210"
                      height="467"
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
