import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "NCB Finance",
    cardDesc: "Invoicing and payments built for Nigerian freelancers and businesses.",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    architecture: "Next.js App Router • Supabase RLS • Paystack Webhooks • FIRS/NRS E-Invoicing Validator",
    desc: "Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. FIRS/NRS e-invoicing compliance, dark luxury fintech aesthetic, and Paystack integration.",
    link: "https://ncbfinance.francisnaga.site",
    github: "https://github.com/francisnaga/NCB-Finance",
    previewUnavailable: true
  },
  {
    id: "02",
    title: "Vantage",
    cardDesc: "A focused workspace for tracking job applications from shortlist to offer.",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    architecture: "Next.js 14 • Supabase Auth & Realtime • Framer Motion Pipeline UI",
    desc: "Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to track pipelines.",
    link: "https://vantage.francisnaga.site",
    github: "https://github.com/francisnaga/Vantage",
    previewUnavailable: true
  },
  {
    id: "03",
    title: "NairaLens",
    cardDesc: "Compare financial products, remittance rates, and trusted providers.",
    stack: ["Next.js", "Supabase", "Edge Functions"],
    architecture: "Next.js • Parallel Edge Data Scraping • Supabase • FX & Remittance Comparison Engine",
    desc: "Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.",
    link: "https://nairalens.francisnaga.site",
    github: "https://github.com/francisnaga/NairaLens",
    previewUnavailable: true
  },
  {
    id: "04",
    title: "Classync",
    cardDesc: "A student-first campus platform with clear role-based approvals.",
    stack: ["Next.js", "PWA", "Supabase"],
    architecture: "Next.js PWA • Role-Based Access Control • Multi-Tier Student Approval Workflow",
    desc: "Edtech PWA for Nigerian university students with Student/Rep/Admin roles and a full approval workflow.",
    link: "https://classync.francisnaga.site",
    github: "https://github.com/francisnaga/Classync",
    previewUnavailable: true
  },
  {
    id: "05",
    title: "Inkto",
    cardDesc: "A mobile legal-document workflow for scanning, transcription, and DOCX output.",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    architecture: "React Native • Kotlin Native Camera Bridge • On-Device OCR • Gemini 1.5 Flash • DOCX Compiler",
    desc: "AI-powered legal document platform: scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription. Built for a practicing Nigerian lawyer.",
    link: "https://play.google.com/store/apps/dev?id=7500831168663512287",
    isPlayStore: true,
    isClosedSource: true
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
  const dialogRef = useRef(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll('a[href], button:not(:disabled)')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
        e.preventDefault();
        first.focus();
      }
    };

    if (activeProject) {
      const previousOverflow = document.body.style.overflow;
      const previouslyFocused = document.activeElement;
      document.body.style.overflow = 'hidden';
      dialogRef.current?.focus();
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        previouslyFocused?.focus?.();
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
              className="text-left group cursor-pointer flex flex-col justify-between p-6 md:p-8 bg-background border border-foreground/10 hover:border-accent hover:bg-white min-h-[280px] hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
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
                <p className="mb-5 max-w-sm font-sans text-sm leading-relaxed text-foreground/65">
                  {proj.cardDesc}
                </p>
              </div>

              <div className="flex items-end justify-between gap-3">
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
              <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-accent">Project details ↗</span>
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
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-${activeProject.id}-title`}
              tabIndex={-1}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white border-2 border-foreground flex flex-col overflow-y-auto shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] focus:outline-none"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-white border border-foreground w-9 h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                aria-label="Close project modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="w-full p-6 sm:p-8 md:p-12 flex flex-col noise-bg">
                <div className="relative z-10">
                  <span className="font-mono text-xs sm:text-sm text-foreground/40 mb-2 block">[{activeProject.id}]</span>
                  <h3 id={`project-${activeProject.id}-title`} className="font-mono text-2xl sm:text-3xl md:text-5xl uppercase font-bold text-foreground mb-4 md:mb-6 pr-10 md:pr-12">
                    {activeProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-foreground/10">
                    {activeProject.stack.map((tag, i) => (
                      <span key={i} className="text-[10px] sm:text-xs font-mono uppercase border border-foreground/20 px-2.5 sm:px-3 py-1 text-foreground/80 bg-background">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Engineering Architecture breakdown */}
                  {activeProject.architecture && (
                    <div className="mb-6 p-3.5 bg-foreground/5 border-l-2 border-accent text-xs font-mono text-foreground/80">
                      <strong className="text-foreground uppercase tracking-wider block mb-1">// System Architecture</strong>
                      <span>{activeProject.architecture}</span>
                    </div>
                  )}

                  <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 md:mb-10 flex-1">
                    {activeProject.desc}
                  </p>

                  {activeProject.previewUnavailable && (
                    <p className="mb-4 border-l-2 border-accent bg-accent/5 px-4 py-3 font-sans text-sm leading-relaxed text-foreground/70">
                      The live preview is offline because its domain is not resolving. The project source is available below.
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {!activeProject.previewUnavailable && (
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 md:py-4 bg-foreground text-background text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        {activeProject.isPlayStore ? 'Download on Google Play' : 'Live Demo'}
                      </a>
                    )}
                    {activeProject.github && !activeProject.isClosedSource && (
                      <a 
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`${activeProject.previewUnavailable ? 'w-full' : 'flex-1'} py-3.5 md:py-4 border border-foreground text-foreground text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2`}
                      >
                        {activeProject.previewUnavailable ? 'View source code' : 'GitHub'}
                      </a>
                    )}
                    {activeProject.isClosedSource && (
                      <div className="flex-1 py-3.5 md:py-4 border border-foreground/20 text-foreground/60 text-center font-mono text-xs uppercase tracking-widest flex items-center justify-center bg-foreground/5">
                        [Proprietary / Closed Source]
                      </div>
                    )}
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
