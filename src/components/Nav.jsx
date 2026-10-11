import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { playClick, toggleSound } from '../utils/sound';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    playClick(600, 'sine', 0.03);
    setIsOpen(false);
  };

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) {
      playClick(850, 'sine', 0.05);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          
          {/* Logo & Live Status */}
          <div className="flex items-center gap-4">
            <a 
              href="#home" 
              onClick={() => playClick(500, 'sine', 0.03)}
              className="font-mono text-base md:text-lg tracking-widest uppercase font-black text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              NAGA DIGITAL
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
                  onClick={() => playClick(600, 'sine', 0.03)}
                  className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Sound Toggle (Haptic Easter Egg) */}
            <button
              type="button"
              onClick={handleSoundToggle}
              className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 border transition-colors ${
                soundOn ? 'border-accent text-accent bg-accent/5' : 'border-foreground/20 text-foreground/40'
              }`}
              title="Toggle tactile sound effects"
            >
              SFX: {soundOn ? 'ON' : 'OFF'}
            </button>

            <div className="border-l border-foreground/20 pl-4">
              <a 
                href="#contact"
                onClick={() => playClick(800, 'sine', 0.04)}
                className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-accent hover:text-white transition-colors border border-foreground shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={handleSoundToggle}
              className="font-mono text-[9px] uppercase px-2 py-1 border border-foreground/20 text-foreground/60"
            >
              SFX: {soundOn ? 'ON' : 'OFF'}
            </button>

            <button 
              onClick={() => {
                playClick(700, 'sine', 0.04);
                setIsOpen(true);
              }}
              className="text-foreground p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none border border-foreground/20"
              aria-label="Open Menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Strict 100dvh & Ergonomic Perfection) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-background flex flex-col noise-bg h-[100dvh]"
          >
            {/* Drawer Top Header */}
            <div className="p-6 h-20 flex justify-between items-center border-b border-foreground/10 relative z-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-base tracking-widest uppercase font-bold text-foreground">
                  NAGA DIGITAL
                </span>
                <span className="font-mono text-[10px] text-accent">
                  [MENU]
                </span>
              </div>
              <button 
                onClick={() => {
                  playClick(500, 'sine', 0.03);
                  setIsOpen(false);
                }}
                className="text-foreground p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-foreground/5 hover:bg-accent hover:text-white transition-colors border border-foreground/10"
                aria-label="Close Menu"
              >
                <FaXmark size={22} />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-6 relative z-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + (i * 0.08) }}
                  className="font-mono text-3xl uppercase font-bold text-foreground hover:text-accent transition-colors flex items-center justify-between py-2 border-b border-foreground/5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-foreground/30 font-mono">0{i + 1}</span>
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 bg-foreground text-background text-center font-mono text-sm uppercase tracking-widest py-4 border-2 border-foreground hover:bg-accent hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,47,167,1)]"
              >
                Start A Project ↗
              </motion.a>

              <div className="mt-4 pt-4 border-t border-foreground/10 flex items-center justify-between font-mono text-[11px] text-foreground/60">
                <span>LAGOS {time} WAT</span>
                <span>STATUS: AVAILABLE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
