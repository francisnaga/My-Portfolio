import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDialog } from '../lib/useDialog';
import { whatsappLink } from '../lib/contact';

const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    architecture: "Next.js App Router • Supabase RLS • Paystack Webhooks • FIRS/NRS E-Invoicing Validator",
    desc: "Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. FIRS/NRS e-invoicing compliance, dark luxury fintech aesthetic, and Paystack integration.",
    link: "https://ncbfinance.francisnaga.site",
    isPrivateRepo: true,
    demoOnRequest: true
  },
  {
    id: "02",
    title: "Vantage",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    architecture: "Next.js 14 • Supabase Auth & Realtime • Framer Motion Pipeline UI",
    desc: "Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to track pipelines.",
    link: "https://vantage.francisnaga.site",
    github: "https://github.com/francisnaga/job-application-tracker",
    demoOnRequest: true
  },
  {
    id: "03",
    title: "NairaLens",
    stack: ["Next.js", "Supabase", "Edge Functions"],
    architecture: "Next.js • Parallel Edge Data Scraping • Supabase • FX & Remittance Comparison Engine",
    desc: "Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.",
    link: "https://nairalens.francisnaga.site",
    isPrivateRepo: true,
    demoOnRequest: true
  },
  {
    id: "04",
    title: "Classync",
    stack: ["Next.js", "PWA", "Supabase"],
    architecture: "Next.js PWA • Role-Based Access Control • Multi-Tier Student Approval Workflow",
    desc: "Edtech PWA for Nigerian university students with Student/Rep/Admin roles and a full approval workflow.",
    link: "https://classync.francisnaga.site",
    isPrivateRepo: true,
    demoOnRequest: true
  },
  {
    id: "05",
    title: "Inkto",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    architecture: "React Native • Kotlin Native Camera Bridge • On-Device OCR • Gemini 1.5 Flash • DOCX Compiler",
    desc: "AI-powered legal document platform: scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription. Built for a practicing Nigerian lawyer.",
    link: "https://play.google.com/store/apps/details?id=com.inkto.app",
    isPlayStore: true,
    isClosedSource: true,
    screenshots: [
      {
        src: "/projects/inkto/01-home-dashboard.png",
        caption: "Home Dashboard: Audio, Handwriting, Scan & Matters",
        alt: "Inkto app home dashboard showing quick capture tools and legal matters"
      },
      {
        src: "/projects/inkto/02-handwritten-scan.png",
        caption: "Native Camera Scan: Handwritten Affidavit Input",
        alt: "Inkto camera scanner interface capturing a handwritten legal affidavit"
      },
      {
        src: "/projects/inkto/03-ai-transcription.png",
        caption: "AI Transcription: Real-Time Legal Formatting",
        alt: "AI transcribed and formatted legal document output ready for DOCX export"
      },
      {
        src: "/projects/inkto/04-audio-waveform.png",
        caption: "Audio Dictation: Waveform & Playback Engine",
        alt: "Inkto audio recording interface with waveform visualizer and playback"
      },
      {
        src: "/projects/inkto/05-files-matters.png",
        caption: "Case Management: Legal Matters & Evidence Files",
        alt: "Legal file explorer organizing case files, affidavits, and exhibits"
      },
      {
        src: "/projects/inkto/06-cloud-sync.png",
        caption: "Cloud Storage: Encrypted Sync & Offline Cache",
        alt: "Inkto cloud storage manager with encrypted sync status and offline caching"
      }
    ]
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
  // Focus trap, Escape-to-close, scroll lock and focus return for the modal
  const dialogRef = useDialog(Boolean(activeProject), () => setActiveProject(null));

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-foreground/10 noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/70 mb-12 md:mb-16">
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
              aria-haspopup="dialog"
              onClick={() => setActiveProject(proj)}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-foreground/70 group-hover:text-accent transition-colors">[{proj.id}]</span>
                  <svg aria-hidden="true" className="w-5 h-5 text-foreground/30 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-[color,transform]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span role="heading" aria-level="3" translate="no" className="block font-mono text-2xl uppercase font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                  {proj.title}
                </span>
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
              aria-hidden="true"
              onClick={() => setActiveProject(null)}
            />
            <motion.div 
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white border-2 border-foreground flex flex-col overflow-y-auto overscroll-contain outline-none shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:shadow-[16px_16px_0px_0px_rgba(17,17,17,1)]"
            >
              
              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-white border border-foreground w-11 h-11 flex items-center justify-center hover:bg-accent hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                aria-label="Close project details"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="w-full p-6 sm:p-8 md:p-12 flex flex-col noise-bg">
                <div className="relative z-10">
                  <span className="font-mono text-xs sm:text-sm text-foreground/70 mb-2 block">[{activeProject.id}]</span>
                  <h3 id="project-dialog-title" translate="no" className="font-mono text-2xl sm:text-3xl md:text-5xl uppercase font-bold text-foreground mb-4 md:mb-6 pr-10 md:pr-12">
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

                  {/* Production Screenshots Gallery */}
                  {activeProject.screenshots && activeProject.screenshots.length > 0 && (
                    <div className="mb-8 md:mb-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs uppercase tracking-wider text-foreground/70">
                          // Production Interface ({activeProject.screenshots.length} Screens)
                        </span>
                        <span className="font-mono text-[10px] text-foreground/70 uppercase tracking-widest hidden sm:inline">
                          Scroll horizontally →
                        </span>
                      </div>
                      <div 
                        role="region"
                        tabIndex={0}
                        aria-label={`${activeProject.title} app screenshots gallery`}
                        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                      >
                        {activeProject.screenshots.map((screen, idx) => (
                          <div 
                            key={idx}
                            className="shrink-0 w-44 sm:w-52 snap-start flex flex-col bg-background border border-foreground/20 p-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.8)]"
                          >
                            <div className="overflow-hidden border border-foreground/10 bg-black/5 aspect-[378/842]">
                              <img 
                                src={screen.src} 
                                alt={screen.alt}
                                loading="lazy"
                                width="378"
                                height="842"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <span className="mt-2 text-[10px] font-mono text-foreground/70 leading-tight">
                              {screen.caption}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {activeProject.isPlayStore ? (
                      <a 
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 md:py-4 bg-foreground text-background text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-[background-color,color,transform] active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        Get on Google Play (Android)
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : activeProject.demoOnRequest ? (
                      <a 
                        href={whatsappLink(`Demo access for ${activeProject.title}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 md:py-4 bg-foreground text-background text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-[background-color,color,transform] active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        Request Demo Access
                        <span className="sr-only"> (opens in WhatsApp)</span>
                      </a>
                    ) : (
                      <a 
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 md:py-4 bg-foreground text-background text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-[background-color,color,transform] active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        Live Demo
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}

                    {activeProject.github && !activeProject.isClosedSource ? (
                      <a 
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 md:py-4 border border-foreground text-foreground text-center font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-[background-color,color,transform] active:translate-x-[2px] active:translate-y-[2px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-2"
                      >
                        GitHub
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <div className="flex-1 py-3.5 md:py-4 border border-foreground/20 text-foreground/60 text-center font-mono text-xs uppercase tracking-widest flex items-center justify-center bg-foreground/5">
                        {activeProject.isClosedSource ? '[Proprietary / Closed Source]' : '[Client / Private Repository]'}
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
