import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-[100svh] w-full max-w-full overflow-x-hidden flex flex-col justify-between border-b-2 border-foreground/10 noise-bg pt-24 md:pt-28 pb-10 md:pb-12 px-6 sm:px-10 md:px-16 bg-background relative z-10">
      
      {/* Top Status & Context Strip */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-foreground/10 pb-3"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground/70">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span>Francis (Naga) // Software Developer & Student Builder</span>
        </div>
        <div className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
          Marine Engineering @ Nigeria Maritime University
        </div>
      </motion.div>

      {/* Centerpiece Kinetic Typography & Core Stance */}
      <div className="max-w-6xl mx-auto w-full my-auto py-4 md:py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.4rem] uppercase font-black text-foreground leading-[0.94] tracking-tight mb-6"
          >
            I BUILD SOFTWARE.<br />
            <span className="text-accent">I SHIP PRODUCTS.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            I'm Francis, a Marine Engineering student building mobile apps, web systems, and applied AI tools. From legal document workflows to campus tools and mechanical modeling, I turn real operational problems into working software without bloated templates.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#work"
              className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-8 py-3.5 border-2 border-foreground hover:bg-accent hover:border-accent hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5 font-bold"
            >
              Explore Products ↓
            </a>
            <a 
              href="#build-log"
              className="bg-white text-foreground font-mono text-xs uppercase tracking-widest px-8 py-3.5 border-2 border-foreground hover:bg-foreground hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] active:translate-y-0.5 font-bold"
            >
              Engineering Notes →
            </a>
            <a 
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest px-4 py-3.5 text-foreground/60 hover:text-accent transition-colors"
            >
              Get In Touch ↗
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Editorial Pillars (Replacing badge clutter with spacious authentic pillars) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="max-w-6xl mx-auto w-full pt-8 sm:pt-12 border-t-2 border-foreground/10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
      >
        <div>
          <div className="font-mono text-xs uppercase text-accent font-bold mb-1 tracking-wider">
            01 / Flagship Mobile & AI
          </div>
          <div className="font-sans text-sm text-foreground/80 leading-relaxed">
            <strong>Inkto:</strong> ML Kit Document Scanner + Gemini Vision legal transcription platform for litigation lawyers.
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-foreground/50 font-bold mb-1 tracking-wider">
            02 / Campus & Fintech
          </div>
          <div className="font-sans text-sm text-foreground/80 leading-relaxed">
            <strong>Classync & NCB Finance:</strong> Offline-first student schedule PWA and FIRS/NRS tax-compliant invoicing with Paystack.
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-foreground/50 font-bold mb-1 tracking-wider">
            03 / Engineering Discipline
          </div>
          <div className="font-sans text-sm text-foreground/80 leading-relaxed">
            <strong>NMU Innovators (200+ members):</strong> Leading student engineering cohorts and computational modeling at NMU.
          </div>
        </div>
      </motion.div>

    </section>
  );
}
