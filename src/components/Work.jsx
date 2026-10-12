import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    desc: "Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. FIRS/NRS e-invoicing compliance, dark luxury fintech aesthetic, and Paystack integration.",
    link: "https://ncbfinance.francisnaga.site",
    github: "https://github.com/francisnaga/NCB-Finance"
  },
  {
    id: "02",
    title: "Vantage",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    desc: "Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to track pipelines.",
    link: "https://vantage.francisnaga.site",
    github: "https://github.com/francisnaga/Vantage"
  },
  {
    id: "03",
    title: "NairaLens",
    stack: ["Next.js", "Supabase"],
    desc: "Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.",
    link: "https://nairalens.francisnaga.site",
    github: "https://github.com/francisnaga/NairaLens"
  },
  {
    id: "04",
    title: "Classync",
    stack: ["Next.js", "PWA", "Supabase"],
    desc: "Edtech PWA for Nigerian university students with Student/Rep/Admin roles and a full approval workflow.",
    link: "https://classync.francisnaga.site",
    github: "https://github.com/francisnaga/Classync"
  },
  {
    id: "05",
    title: "Inkto",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    desc: "AI-powered legal document platform: scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription. Built for a practicing Nigerian lawyer.",
    link: "https://inkto.francisnaga.site",
    github: "https://github.com/francisnaga/Inkto"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 200, damping: 20 } 
  }
};

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-foreground/10 noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-12 md:mb-16">
          // Selected Works
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {projects.map((proj) => (
            <motion.button
              type="button"
              key={proj.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="text-left group cursor-pointer flex flex-col justify-between p-6 md:p-8 bg-background border border-foreground/10 hover:border-accent hover:bg-white min-h-[250px] hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              onClick={() => setActiveProject(proj)}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-foreground/40 group-hover:text-accent/60 transition-colors">[{proj.id}]</span>
                  <svg className="w-5 h-5 text-foreground/20 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="font-mono text-2xl uppercase font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                  {proj.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.stack.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono uppercase bg-foreground/5 px-2 py-1 text-foreground/60 border border-foreground/5 group-hover:border-foreground/20 group-hover:bg-white transition-colors">
                    {tag}
                  </span>
                ))}
                {proj.stack.length > 3 && (
                  <span className="text-[10px] font-mono uppercase bg-foreground/5 px-2 py-1 text-foreground/60 border border-foreground/5 group-hover:border-foreground/20 group-hover:bg-white transition-colors">
                    +{proj.stack.length - 3}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Brutalist Modal with Framer Motion */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/90 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white border-2 border-foreground flex flex-col overflow-y-auto shadow-[16px_16px_0px_0px_rgba(17,17,17,1)]"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 bg-white border border-foreground w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="w-full p-8 md:p-12 flex flex-col noise-bg">
                <div className="relative z-10">
                  <span className="font-mono text-sm text-foreground/40 mb-2 block">[{activeProject.id}]</span>
                  <h3 className="font-mono text-4xl md:text-5xl uppercase font-bold text-foreground mb-6 pr-12">
                    {activeProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-foreground/10">
                    {activeProject.stack.map((tag, i) => (
                      <span key={i} className="text-xs font-mono uppercase border border-foreground/20 px-3 py-1 text-foreground/80 bg-background">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 flex-1">
                    {activeProject.desc}
                  </p>

                  <div className="flex gap-4">
                    <a 
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 bg-foreground text-background text-center font-mono uppercase tracking-widest hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 border border-foreground text-foreground text-center font-mono uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
