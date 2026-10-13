import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Logo from './Logo';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sectionIds = ['home', 'work', 'about', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-foreground/10 bg-background/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 font-mono text-xl md:text-2xl tracking-widest uppercase font-black text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none group">
            <Logo className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" />
            <span>NAGA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-mono text-sm uppercase tracking-widest">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className={`relative py-1 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm ${
                      isActive ? 'text-accent font-bold' : 'text-foreground/70 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-l border-foreground/20 pl-4">
              <a 
                href="#contact"
                className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-foreground p-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm"
              aria-label="Open Menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-[200] bg-background flex flex-col"
          >
            <div className="p-6 h-20 flex justify-between items-center border-b border-foreground/10 relative z-10">
              <a href="#home" onClick={handleLinkClick} className="flex items-center gap-3 font-mono text-xl tracking-widest uppercase font-black text-foreground">
                <Logo className="w-8 h-8 flex-shrink-0" />
                <span>NAGA</span>
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-foreground p-2 bg-foreground/5 hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                aria-label="Close Menu"
              >
                <FaXmark size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-8 relative z-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
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
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
