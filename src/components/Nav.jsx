import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Logo from './Logo';
import { useDialog } from '../lib/useDialog';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const drawerRef = useDialog(isOpen, () => setIsOpen(false));

  // Scroll spy: the active section is the lowest one whose top has passed the
  // nav line. Sorting by real position keeps it correct even when the nav order
  // differs from the page order.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const line = window.scrollY + window.innerHeight * 0.3;
      let current = '#home';
      let best = -Infinity;
      for (const { href } of links) {
        const el = document.getElementById(href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line && top > best) {
          best = top;
          current = href;
        }
      }
      // Bottom of page: last section may be too short to cross the line
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = '#contact';
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] border-b border-foreground/10 bg-background/70 backdrop-blur-md">
        <nav aria-label="Primary" className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" translate="no" className="flex items-center gap-3 font-mono text-xl md:text-2xl tracking-widest uppercase font-black text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none group">
            <Logo className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" aria-hidden="true" />
            <span>NAGA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 font-mono text-sm uppercase tracking-widest">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      className={`relative py-1 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm ${
                        isActive ? 'text-accent font-bold' : 'text-foreground/70 hover:text-accent'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span aria-hidden="true" className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l border-foreground/20 pl-4">
              <a
                href="#contact"
                className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent hover:text-white transition-[background-color,color,transform] active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2"
              >
                Let’s Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="text-foreground w-11 h-11 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <FaBars size={24} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            tabIndex={-1}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-[200] bg-background flex flex-col overscroll-contain outline-none"
          >
            <div className="p-6 h-20 flex justify-between items-center border-b border-foreground/10 relative z-10">
              <a href="#home" onClick={handleLinkClick} translate="no" className="flex items-center gap-3 font-mono text-xl tracking-widest uppercase font-black text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
                <Logo className="w-8 h-8 flex-shrink-0" aria-hidden="true" />
                <span>NAGA</span>
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-foreground w-11 h-11 flex items-center justify-center bg-foreground/5 hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                aria-label="Close menu"
              >
                <FaXmark size={24} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 flex flex-col justify-center px-6 gap-8 relative z-10 pb-[env(safe-area-inset-bottom)]">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-current={activeSection === link.href ? 'location' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="font-mono text-3xl uppercase font-bold text-foreground hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-foreground text-background text-center font-mono text-lg uppercase tracking-widest py-4 hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                Let’s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
