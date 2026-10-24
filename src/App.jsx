import React, { useState, useEffect, useCallback, useRef } from 'react';
import Logo from './components/Logo';
import IPhone from './components/IPhone';
import InktoWordmark from './components/InktoWordmark';
import { PROJECTS } from './data/projects';
import { whatsappLink, EMAIL } from './lib/contact';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const NOW = [
  { label: 'Building', value: 'New features for Inkto' },
  { label: 'Studying', value: 'Marine Engineering, NMU' },
  { label: 'Open to', value: 'Freelance and contract work' },
];

const TOOLS = ['Kotlin', 'Jetpack Compose', 'TypeScript', 'React', 'Next.js', 'Python', 'Supabase'];

const CURRENT_YEAR = new Date().getFullYear();

/** Adds `is-visible` to [data-reveal] elements as they scroll into view. */
function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Tracks scroll progress, the active section and whether to show "back to top". */
function useScrollState() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [showTop, setShowTop] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setShowTop(y > window.innerHeight * 0.9);

      let current = '';
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      });
      setActive(current);
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { progress, active, showTop };
}

function ProjectFeature({ project, index }) {
  const [first, second] = project.screens || [];
  return (
    <article className="project" data-reveal>
      <div className="project-copy">
        <div className="project-meta">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="status-dot" aria-hidden="true" />
          <span>{project.status}</span>
        </div>

        <h3 className="project-name">
          {project.wordmark === 'inkto' ? (
            <InktoWordmark height={34} className="project-wordmark" />
          ) : (
            project.name
          )}
          <span className="sr-only">{project.wordmark ? project.name : ''}</span>
        </h3>

        <p className="project-summary">{project.summary}</p>

        <ul className="project-built" aria-label="What I built">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="project-stack">{project.stack.join('  ·  ')}</p>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.primary ? 'btn btn-solid' : 'btn btn-ghost'}
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      {first && (
        <div className="project-visual" aria-label={`${project.name} screenshots`}>
          <IPhone
            src={first.src}
            alt={first.alt}
            statusLight={first.statusLight}
            className="phone-back"
          />
          {second && (
            <IPhone
              src={second.src}
              alt={second.alt}
              statusLight={second.statusLight}
              className="phone-front"
            />
          )}
        </div>
      )}
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'dark'
      : 'dark'
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { progress, active, showTop } = useScrollState();
  useReveal();

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable in private mode; the toggle still works.
    }
  }, [theme]);

  useEffect(() => {
    if (!isNavOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsNavOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isNavOpen]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand-link" aria-label="Francis Naga, back to top">
            <Logo size={30} className="brand-logo" />
            <span className="brand-title">Francis Naga</span>
          </a>

          <div className="header-right">
            <nav className="nav-links" aria-label="Primary">
              {NAV.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`nav-link${active === id ? ' is-active' : ''}`}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M12 1.5v2M12 20.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1.5 12h2M20.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="icon-btn hamburger"
              onClick={() => setIsNavOpen((v) => !v)}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isNavOpen}
              aria-controls="mobile-nav"
            >
              <span className={`burger${isNavOpen ? ' is-open' : ''}`} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {isNavOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="mobile-nav-link" onClick={() => setIsNavOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section id="top" className="hero container" aria-label="Introduction">
          <p className="hero-status" data-reveal>
            <span className="status-dot" aria-hidden="true" />
            Available for new projects
          </p>

          <h1 className="hero-title" data-reveal>
            Hi, I&rsquo;m Francis.
            <span className="hero-title-muted">I make software that feels simple.</span>
          </h1>

          <p className="hero-lead" data-reveal>
            I build focused mobile utilities, responsive web applications, and automated document
            systems. I don&rsquo;t use bloated templates or page builders. Just raw code that loads
            fast and gets the job done.
          </p>

          <div className="hero-actions" data-reveal>
            <a href="#work" className="btn btn-solid">
              See my work
              <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Say hello
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section container" aria-labelledby="work-title">
          <header className="section-head" data-reveal>
            <h2 id="work-title" className="section-title">Selected work</h2>
            <p className="section-note">Things I&rsquo;ve designed, built and shipped.</p>
          </header>

          {PROJECTS.map((project, i) => (
            <ProjectFeature key={project.id} project={project} index={i} />
          ))}

          <div className="more-soon" data-reveal>
            <p>
              More projects are on the way. I add new work here as it ships.
            </p>
            <a
              href="https://github.com/francisnaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Peek at GitHub in the meantime <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section container" aria-labelledby="about-title">
          <header className="section-head" data-reveal>
            <h2 id="about-title" className="section-title">A bit about me</h2>
          </header>

          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>
                I&rsquo;m a Marine Engineering student at Nigeria Maritime University who got
                hooked on writing software and never looked back.
              </p>
              <p>
                I like small, sharp tools that do one job really well. Most of what I build starts
                with a simple question, like why people are still retyping paper documents by hand.
                Inkto came from exactly that.
              </p>
              <p>
                If you care about software that feels quick, honest and calm to use, we&rsquo;ll
                probably get along.
              </p>
            </div>

            <aside className="about-side" data-reveal>
              <h3 className="side-title">Right now</h3>
              <dl className="now-list">
                {NOW.map((row) => (
                  <div key={row.label} className="now-row">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="side-title">Tools I reach for</h3>
              <p className="tools">{TOOLS.join(', ')}</p>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact container" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact-title" data-reveal>
            Have an idea?
            <span className="hero-title-muted">Let&rsquo;s build it together.</span>
          </h2>
          <p className="contact-lead" data-reveal>
            Tell me what you&rsquo;re working on, what&rsquo;s getting in the way, or just say
            hi. No forms, no gatekeeping, just me.
          </p>

          <div className="contact-email" data-reveal>
            <a href={`mailto:${EMAIL}`} className="email-link">
              {EMAIL}
            </a>
            <button type="button" className="copy-btn" onClick={copyEmail} aria-live="polite">
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <ul className="social-list" data-reveal>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-link">
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/francisnaga" target="_blank" rel="noopener noreferrer" className="text-link">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/francisnaga" target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/dev?id=7500831168663512287"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Google Play <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer container">
        <span>&copy; {CURRENT_YEAR} Francis Naga</span>
        <button type="button" className="text-link footer-top" onClick={scrollToTop}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </footer>

      <button
        type="button"
        className={`to-top${showTop ? ' is-shown' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
