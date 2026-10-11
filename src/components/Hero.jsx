import { motion } from 'framer-motion';
import TerminalHero from './TerminalHero';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-[100svh] w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row border-b-2 border-foreground/10 noise-bg">
      {/* Left Side: Headline & Bio (60% on desktop) */}
      <div className="w-full lg:w-[56%] xl:w-[58%] flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-12 md:pb-20 pt-28 md:pt-36 bg-background relative z-10 max-w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-full"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest bg-foreground/5 border border-foreground/10 px-3 py-1.5 w-max max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-foreground/80 font-bold">Software Developer & Student Builder</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase font-black text-foreground leading-[0.98] mb-6 tracking-tight break-words"
          >
            I BUILD IT.<br />
            <span className="text-accent">I LAUNCH IT.</span><br />
            I HELP YOU<br />
            GROW IT.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl max-w-xl text-foreground/85 leading-relaxed mb-8"
          >
            Hey, I'm Naga, a software developer and student builder. I build practical digital products across web, mobile, AI, and automation—without bloated templates or page builders. Just raw code that gets the job done.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a 
              href="#work"
              className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3.5 border-2 border-foreground hover:bg-accent hover:border-accent hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5"
            >
              Explore Projects
            </a>
            <a 
              href="#contact"
              className="bg-white text-foreground font-mono text-xs uppercase tracking-widest px-6 py-3.5 border-2 border-foreground hover:bg-foreground hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Right Side: Interactive Developer Console (44% / 42% on desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-[44%] xl:w-[42%] bg-[#101218] border-t-2 lg:border-t-0 lg:border-l-2 border-foreground px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col justify-center relative z-10 max-w-full overflow-hidden"
      >
        <div className="w-full max-w-full mx-auto">
          <TerminalHero />
        </div>
      </motion.div>
    </section>
  );
}
