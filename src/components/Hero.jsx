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
    <section className="min-h-[100svh] w-full flex flex-col md:flex-row border-b border-dark/10 noise-bg">
      {/* 60% Left Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-end p-6 md:p-12 pb-16 md:pb-24 pt-40 md:pt-48 bg-background relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl uppercase font-black text-foreground leading-[1.1] md:leading-[1] mb-8"
          >
            <span className="whitespace-nowrap">I BUILD IT.</span><br />
            <span className="text-accent whitespace-nowrap">I LAUNCH IT.</span><br />
            <span className="whitespace-nowrap">I HELP YOU</span><br />
            <span className="whitespace-nowrap">GROW IT.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-sans text-base md:text-xl max-w-md text-foreground/80"
          >
            Hey, I'm Naga. I write code for websites and mobile apps. I don't use bloated templates or page builders. Just raw code that loads fast and gets the job done.
          </motion.p>
        </motion.div>
      </div>
      
      {/* 40% Right Side (Accent) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-[40%] h-48 md:h-auto bg-accent border-t md:border-t-0 md:border-l border-dark/10 flex items-end p-6 md:p-12 relative z-10"
      >
        <div className="font-mono text-white/50 text-sm md:text-base uppercase tracking-widest leading-loose">
          LAGOS, NG<br />
          EST. 2023
        </div>
      </motion.div>
    </section>
  );
}
