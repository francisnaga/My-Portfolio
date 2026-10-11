import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Logo from './Logo';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');

  // Live Lagos (WAT - UTC+1) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Bulletproof mobile scroll lock that preserves scroll position
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 h-20 flex justify-between items-center">
          
          {/* Logo & Live Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#home" 
              className="flex items-center gap-2.5 font-mono text-base md:text-lg tracking-widest uppercase font-black text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none group"
            >
              <Logo size={24} className="flex-shrink-0" />
              <span>NAGA</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase text-foreground/60 border-l border-foreground/15 pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>LAGOS {time || '19:00'} WAT</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-5 font-mono text-xs uppercase tracking-widest text-foreground/75">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="border-l border-foreground/20 pl-4">
              <a 
                href="#contact"
                className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-accent hover:text-white transition-colors border border-foreground shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center">
            <button 
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
              className="text-foreground p-2 min-w-[42px] min-h-[42px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none border-2 border-foreground active:bg-foreground active:text-white"
              aria-label="Open Menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Attached via Portal directly to body for 100% viewport coverage) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-[999999] bg-[#F8F8F8] flex flex-col text-foreground overflow-y-auto"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-6 h-20 flex justify-between items-center border-b-2 border-foreground bg-white">
                <div className="flex items-center gap-2.5">
                  <Logo size={22} className="flex-shrink-0" />
                  <span className="font-mono text-base tracking-widest uppercase font-black text-foreground">
                    NAGA
                  </span>
                  <span className="font-mono text-[10px] text-accent font-bold">
                    // MENU
                  </span>
                </div>
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-foreground/5 hover:bg-accent hover:text-white transition-colors border-2 border-foreground"
                  aria-label="Close Menu"
                >
                  <FaXmark size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 py-8 gap-5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + (i * 0.06) }}
                    className="font-mono text-2xl sm:text-3xl uppercase font-black text-foreground hover:text-accent transition-colors flex items-center justify-between py-2 border-b border-foreground/10"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-foreground/40 font-mono font-normal">0{i + 1}</span>
                  </motion.a>
                ))}
                
                <motion.a
                  href="#contact"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 bg-foreground text-background text-center font-mono text-sm uppercase tracking-widest py-4 border-2 border-foreground hover:bg-accent hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,47,167,1)] font-bold"
                >
                  Start A Project ↗
                </motion.a>

                <div className="mt-4 pt-4 border-t border-foreground/15 flex items-center justify-between font-mono text-[11px] text-foreground/60">
                  <span>LAGOS {time} WAT</span>
                  <span className="text-emerald-600 font-bold">● ACTIVE</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
