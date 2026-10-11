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
    <section id="home" className="min-h-[100svh] w-full flex flex-col lg:flex-row border-b border-foreground/10 noise-bg">
      {/* Left Side: Headline & Bio (60% on desktop) */}
      <div className="w-full lg:w-[55%] xl:w-[58%] flex flex-col justify-end p-6 md:p-12 pb-12 md:pb-20 pt-32 md:pt-40 bg-background relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest bg-foreground/5 border border-foreground/10 px-3 py-1.5 w-max">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-foreground/80 font-bold">Independent Software & Marine Systems Builder</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-sans text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl uppercase font-black text-foreground leading-[1.05] md:leading-[1] mb-8"
          >
            <span className="whitespace-nowrap">I BUILD IT.</span><br />
            <span className="text-accent whitespace-nowrap">I LAUNCH IT.</span><br />
            <span className="whitespace-nowrap">I HELP YOU</span><br />
            <span className="whitespace-nowrap">GROW IT.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-base md:text-xl max-w-xl text-foreground/85 leading-relaxed mb-8"
          >
            Hey, I'm Naga (Efobi Francis). Marine Engineering student at NMU and independent builder. I engineer practical digital products across web, mobile, applied AI, and automation—without bloated templates or page builders. Just raw, reliable code built to scale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
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
      
      {/* Right Side: Interactive Terminal (45% / 42% on desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-[45%] xl:w-[42%] bg-[#101218] border-t lg:border-t-0 lg:border-l-2 border-foreground p-6 md:p-10 flex flex-col justify-center relative z-10"
      >
        <div className="w-full max-w-lg mx-auto">
          <TerminalHero />
        </div>
      </motion.div>
    </section>
  );
}
