import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick } from '../utils/sound';

const projects = [
  {
    id: "01",
    title: "Inkto",
    category: "AI & Mobile",
    flagship: true,
    tagline: "AI-Powered Legal Document Scanner & Transcription Platform",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    desc: "Built for a practicing Nigerian lawyer to digitize court workflows. Scans and transcribes physical handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device processing and Gemini Vision AI.",
    blueprint: [
      { step: "01. CAPTURE", detail: "On-device camera module with automatic perspective crop and edge detection." },
      { step: "02. KOTLIN BRIDGE", detail: "Native Android OpenCV pipeline executes adaptive binarization & deskewing." },
      { step: "03. GEMINI VISION", detail: "Multimodal LLM extracts handwritten legal cursive with high transcription accuracy." },
      { step: "04. LEGAL PARSER", detail: "Formats into structured High Court affidavits, briefs, and formatted DOCX." },
      { step: "05. SYNC & STORAGE", detail: "Encrypted Supabase storage with lawyer-client confidentiality controls." }
    ],
    specs: {
      "Target User": "Practicing Nigerian Litigation Lawyers & Chambers",
      "Key Latency": "Sub-4s full document scan-to-DOCX export",
      "Architecture": "Native Kotlin bridge + React Native UI + Gemini Vision API",
      "Status": "Active Production Beta"
    },
    link: "https://inkto.francisnaga.site",
    github: "https://github.com/francisnaga/Inkto"
  },
  {
    id: "02",
    title: "NCB Finance",
    category: "Fintech & SaaS",
    flagship: true,
    tagline: "Compliant Invoicing & Payments for Nigerian Freelancers and Businesses",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    desc: "Invoicing and payment infrastructure designed for Nigerian entrepreneurs and CAC-registered businesses. Features FIRS/NRS e-invoicing compliance, real-time Paystack settlement webhooks, and client portal access.",
    blueprint: [
      { step: "01. INVOICE ENGINE", detail: "Generates cryptographic, FIRS-compliant tax invoices with automatic VAT." },
      { step: "02. PAYSTACK GATEWAY", detail: "Direct payment link generation supporting cards, bank transfers, and USSD." },
      { step: "03. WEBHOOK DISPATCH", detail: "Idempotent webhook listener confirms instant settlements in Supabase." },
      { step: "04. AUDIT & LEDGER", detail: "Row-Level Security (RLS) encrypted ledger for multi-currency tracking." }
    ],
    specs: {
      "Compliance": "FIRS & NRS Nigerian Tax / CAC Guidelines",
      "Payments": "Paystack Webhook Settlement Engine",
      "Database": "PostgreSQL with strict Row-Level Security (RLS)",
      "Status": "Live Production"
    },
    link: "https://ncbfinance.francisnaga.site",
    github: "https://github.com/francisnaga/NCB-Finance"
  },
  {
    id: "03",
    title: "Classync",
    category: "Edtech",
    flagship: false,
    tagline: "Campus Multi-Role Academic Information Platform",
    stack: ["Next.js", "PWA", "Supabase", "Tailwind"],
    desc: "Progressive Web Application (PWA) built for Nigerian university departments. Features strict permission separation across Student, Course Rep, and Lecturer/Admin roles with lecture schedule conflict resolution.",
    blueprint: [
      { step: "01. ROLE HIERARCHY", detail: "RBAC authentication enforcing Rep announcements and Student view states." },
      { step: "02. OFFLINE CACHE", detail: "Service Worker precaching ensures timetable access in low-connectivity areas." },
      { step: "03. REALTIME SYNC", detail: "Supabase Realtime WebSockets push instant venue and timetable changes." }
    ],
    specs: {
      "Target Environment": "Nigerian Tertiary Campuses (High data efficiency)",
      "Platform": "Installable Progressive Web App (PWA)",
      "Sync Engine": "Supabase Realtime Pub/Sub",
      "Status": "Live Deployment"
    },
    link: "https://classync.francisnaga.site",
    github: "https://github.com/francisnaga/Classync"
  },
  {
    id: "04",
    title: "Vantage",
    category: "Fintech & SaaS",
    flagship: false,
    tagline: "Minimalist Job Pipeline & Career Logistics Tracker",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    desc: "A distraction-free, high-performance Kanban pipeline tracker for ambitious software engineers and technical candidates to organize outreach, interview rounds, and offer comparisons.",
    blueprint: [
      { step: "01. PIPELINE BOARD", detail: "Smooth drag-and-drop state machine tracking stages from Applied to Offer." },
      { step: "02. SALARY METRICS", detail: "Automated compensation normalizer across USD and NGN currencies." },
      { step: "03. ENCRYPTED NOTES", detail: "Fast notes scratchpad per application with instant cloud persistence." }
    ],
    specs: {
      "UX Paradigm": "Ultra-fast keyboard shortcuts & minimal latency",
      "State Engine": "Zustand + Optimistic UI Updates",
      "Security": "Supabase Auth with encrypted user vaults",
      "Status": "Live Deployment"
    },
    link: "https://vantage.francisnaga.site",
    github: "https://github.com/francisnaga/Vantage"
  },
  {
    id: "05",
    title: "NairaLens",
    category: "Transparency",
    flagship: false,
    tagline: "Consumer Financial Transparency & Rate Tracking Platform",
    stack: ["Next.js", "Supabase", "Tailwind", "REST APIs"],
    desc: "Nigerian consumer financial intelligence platform: BNPL payment plan true-cost calculators, vendor legitimacy checking, remittance fee comparisons, and live FX rate transparency.",
    blueprint: [
      { step: "01. RATE AGGREGATION", detail: "Parallel fetchers gather verified remittance rates across parallel and official windows." },
      { step: "02. TRUE COST ENGINE", detail: "Deconstructs hidden BNPL fees and compound penalty interest." },
      { step: "03. VENDOR LOOKUP", detail: "Community verification database against fraudulent merchant accounts." }
    ],
    specs: {
      "Focus": "Financial transparency for Nigerian consumers",
      "Update Interval": "Hourly parallel financial cache refresh",
      "Integration": "Open FX endpoints & verified consumer registries",
      "Status": "Live Deployment"
    },
    link: "https://nairalens.francisnaga.site",
    github: "https://github.com/francisnaga/NairaLens"
  }
];

const categories = ["ALL", "AI & Mobile", "Fintech & SaaS", "Edtech", "Transparency"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeProject, setActiveProject] = useState(null);
  const [modalTab, setModalTab] = useState("overview"); // "overview" | "blueprint" | "specs"
  const [copiedId, setCopiedId] = useState(null);

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

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const handleCopyLink = (proj, e) => {
    e.stopPropagation();
    playClick(800, 'sine', 0.05);
    navigator.clipboard.writeText(proj.link || window.location.href);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-foreground/10 noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
              // Selected Works
            </h2>
            <h3 className="font-mono text-2xl md:text-3xl uppercase font-bold text-foreground">
              Production Systems & Products
            </h3>
          </div>

          {/* Interactive Filter Pills (Mobile Scrollable) */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  playClick(500, 'sine', 0.03);
                  setActiveCategory(cat);
                }}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 border-2 transition-all shrink-0 active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-foreground text-background border-foreground shadow-[3px_3px_0px_0px_rgba(0,47,167,1)]'
                    : 'bg-background text-foreground/70 border-foreground/10 hover:border-foreground hover:text-foreground'
                }`}
              >
                {cat} {cat === "ALL" ? `(${projects.length})` : ''}
              </button>
            ))}
          </div>
        </div>
        
        {/* Responsive Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                onClick={() => {
                  playClick(700, 'sine', 0.04);
                  setActiveProject(proj);
                  setModalTab("overview");
                }}
                className="group cursor-pointer flex flex-col justify-between p-6 md:p-8 bg-background border-2 border-foreground/10 hover:border-foreground hover:bg-white min-h-[300px] shadow-[4px_4px_0px_0px_rgba(17,17,17,0.08)] hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-foreground/40 font-bold group-hover:text-accent">
                      [{proj.id}] // {proj.category}
                    </span>
                    {proj.flagship && (
                      <span className="font-mono text-[9px] uppercase tracking-widest bg-accent text-white px-2 py-0.5 font-bold">
                        FLAGSHIP
                      </span>
                    )}
                  </div>

                  <h4 className="font-mono text-2xl uppercase font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {proj.title}
                  </h4>

                  <p className="font-sans text-xs md:text-sm text-foreground/70 line-clamp-3 mb-6">
                    {proj.tagline}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.stack.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase bg-foreground/5 px-2 py-1 text-foreground/70 border border-foreground/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold group-hover:underline flex items-center gap-1.5">
                      Inspect System <span>→</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleCopyLink(proj, e)}
                      className="font-mono text-[10px] uppercase text-foreground/50 hover:text-foreground p-1"
                      title="Copy Link"
                    >
                      {copiedId === proj.id ? 'COPIED!' : 'SHARE'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Brutalist Modal with Architecture Blueprints & Specs */}
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
              className="relative w-full max-w-3xl max-h-[92vh] bg-white border-2 border-foreground flex flex-col overflow-hidden shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] z-10"
            >
              
              {/* Modal Top Header */}
              <div className="bg-[#12141A] text-white px-6 py-4 flex items-center justify-between border-b-2 border-foreground">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent font-bold">[{activeProject.id}]</span>
                  <span className="font-mono text-sm uppercase tracking-wider font-bold">{activeProject.title}</span>
                  {activeProject.flagship && (
                    <span className="font-mono text-[9px] bg-accent text-white px-2 py-0.5 font-bold">
                      FLAGSHIP
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => {
                    playClick(400, 'sine', 0.04);
                    setActiveProject(null);
                  }}
                  className="bg-white/10 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center font-mono text-sm transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Modal Sub-Nav Tabs */}
              <div className="bg-background border-b border-foreground/10 px-6 py-2.5 flex gap-2 select-none">
                <button
                  type="button"
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setModalTab("overview");
                  }}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all ${
                    modalTab === "overview"
                      ? 'bg-foreground text-background border-foreground font-bold'
                      : 'bg-white text-foreground/60 border-foreground/10 hover:text-foreground'
                  }`}
                >
                  [1] Overview
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setModalTab("blueprint");
                  }}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all ${
                    modalTab === "blueprint"
                      ? 'bg-accent text-white border-accent font-bold'
                      : 'bg-white text-foreground/60 border-foreground/10 hover:text-foreground'
                  }`}
                >
                  [2] System Blueprint
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setModalTab("specs");
                  }}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all ${
                    modalTab === "specs"
                      ? 'bg-foreground text-background border-foreground font-bold'
                      : 'bg-white text-foreground/60 border-foreground/10 hover:text-foreground'
                  }`}
                >
                  [3] Telemetry & Specs
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 md:p-10 overflow-y-auto no-scrollbar flex-1 noise-bg">
                
                {modalTab === "overview" && (
                  <div>
                    <h3 className="font-mono text-2xl md:text-3xl uppercase font-bold text-foreground mb-4">
                      {activeProject.tagline}
                    </h3>

                    <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                      {activeProject.desc}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">
                        Tech Matrix
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((tag, i) => (
                          <span key={i} className="text-xs font-mono uppercase bg-foreground/5 border border-foreground/15 px-3 py-1.5 text-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {modalTab === "blueprint" && (
                  <div className="space-y-4">
                    <div className="font-mono text-xs text-foreground/60 mb-2">
                      // Architectural Pipeline Flow
                    </div>

                    <div className="border-2 border-foreground bg-[#0D0F14] text-[#E0E2EC] p-4 md:p-6 font-mono text-xs md:text-sm space-y-4">
                      {activeProject.blueprint.map((node, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                          <span className="text-cyan-400 font-bold shrink-0">{node.step}</span>
                          <span className="text-white/80">{node.detail}</span>
                        </div>
                      ))}
                    </div>

                    <p className="font-sans text-xs text-foreground/60 italic pt-2">
                      Engineered for high resilience, deterministic error handling, and clean database isolation.
                    </p>
                  </div>
                )}

                {modalTab === "specs" && (
                  <div className="space-y-4">
                    <div className="font-mono text-xs text-foreground/60 mb-2">
                      // Engineering Telemetry & Target Metrics
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(activeProject.specs).map(([key, val], idx) => (
                        <div key={idx} className="p-4 bg-background border border-foreground/10">
                          <span className="font-mono text-[10px] uppercase text-foreground/50 block mb-1">
                            {key}
                          </span>
                          <span className="font-mono text-sm font-bold text-foreground">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Bottom Action CTAs */}
              <div className="p-4 md:p-6 bg-background border-t-2 border-foreground flex flex-col sm:flex-row gap-3">
                <a 
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClick(900, 'sine', 0.05)}
                  className="flex-1 py-3.5 bg-foreground text-background text-center font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors border-2 border-foreground"
                >
                  Launch Live Demo ↗
                </a>
                <a 
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClick(600, 'sine', 0.04)}
                  className="flex-1 py-3.5 bg-white text-foreground text-center font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors border-2 border-foreground"
                >
                  GitHub Source ↗
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
