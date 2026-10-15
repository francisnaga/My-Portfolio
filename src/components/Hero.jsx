import { motion } from 'framer-motion';

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
    <section id="home" className="min-h-[100svh] w-full flex flex-col md:flex-row border-b border-foreground/10 noise-bg">
      {/* 60% Left Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-start md:justify-end p-6 md:p-12 pb-10 md:pb-24 pt-28 sm:pt-36 md:pt-48 bg-background relative z-10 flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-[8.8vw] sm:text-5xl md:text-6xl lg:text-7xl uppercase font-black text-foreground leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            <span className="block">I BUILD SOFTWARE.</span>
            <span className="block text-accent">I SHIP PRODUCTS.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl max-w-md text-foreground/80 leading-relaxed"
          >
            I'm Naga, a product-minded software developer in Lagos. I partner with engineering teams and founders to design, build, and ship dependable web, mobile, and AI products.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center border-2 border-accent bg-accent px-5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-foreground hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              View selected work <span aria-hidden="true" className="ml-3">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center px-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Hiring or building? Let's talk
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 40% Right Side (Accent) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-[40%] bg-accent border-t md:border-t-0 md:border-l border-dark/10 flex items-center md:items-end justify-between md:justify-start p-6 md:p-12 py-5 md:py-12 relative z-10"
      >
        <div className="flex flex-col gap-1 md:block">
          <div className="font-mono text-white/80 text-xs md:text-base uppercase tracking-widest leading-relaxed">
            LAGOS, NG<br className="hidden md:inline" />
            <span className="inline md:hidden"> • </span>
            EST. 2023
          </div>
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-white/90 flex items-center gap-1.5 pt-0.5">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Open to conversations
          </div>
          <div className="mt-5 hidden max-w-xs border-t border-white/25 pt-5 font-mono text-xs uppercase leading-loose tracking-wider text-white/75 md:block">
            Product engineering<br />
            Web · Mobile · Applied AI<br />
            From first brief to production
          </div>
        </div>
      </motion.div>
    </section>
  );
}
