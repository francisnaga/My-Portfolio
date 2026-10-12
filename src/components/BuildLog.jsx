import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick } from '../utils/sound';

const logs = [
  {
    id: "01",
    title: "Why Inkto pairs on-device ML Kit scanning with Gemini Multimodal Vision",
    domain: "Applied AI & Mobile Engineering",
    date: "October 2026",
    metric: "Sub-4s Full Transcription Latency",
    summary: "Solving messy, shadowed document captures on device before cloud vision processing.",
    problem: "When lawyers photograph physical court affidavits in poorly-lit chambers or registry desks, sending raw 12-megapixel camera photos directly to cloud vision APIs is inefficient: large uncropped borders burn network bandwidth, skewed angles hurt handwriting recognition, and shadows reduce OCR accuracy.",
    solution: "We separated preprocessing from optical transcription. On the phone, Google ML Kit Document Scanner executes on-device edge detection, auto-cropping, and adaptive shadow removal locally in milliseconds. Only the clean, rectified page raster is sent to Gemini Multimodal Vision, yielding accurate cursive transcription into structured High Court DOCX clauses.",
    codeSnippet: `// Inkto Document Ingestion Flow
// Step 1: On-device ML Kit rectification (local Android)
val scanResult = documentScanner.startScan(activity)
val rectifiedUri = scanResult.pages[0].imageUri

// Step 2: Clean raster passed to Gemini Multimodal Vision
val extractedDocx = geminiVision.generateStructuredLegalBrief(
    image = rectifiedUri,
    schema = LegalDocumentSchema.HIGH_COURT_AFFIDAVIT
)`,
    takeaway: "Rectify and normalize physical document imagery locally on the device before invoking cloud multimodal vision APIs."
  },
  {
    id: "02",
    title: "Translating mechanical physics into code: CemGuard's degradation model",
    domain: "Computational Engineering & Reliability",
    date: "September 2026",
    metric: "Mathematical Failure Forecasting",
    summary: "Implementing Archard's Wear Law and ISO 20816-3 standards to predict mechanical machinery failure without physical sensor rigs.",
    problem: "During a university engineering design challenge at NMU, real-time physical sensor data for older rotating machinery was inaccessible and cost-prohibitive. We needed a rigorous way to predict preventative maintenance windows based on operating parameters.",
    solution: "We translated classical mechanical engineering principles into software. We modeled surface contact degradation using Archard's Wear Law (volumetric wear proportional to normal load and sliding distance over surface hardness), mapped vibration velocity against ISO 20816-3 severity criteria, and applied a 2-parameter Weibull probability curve to forecast cumulative failure risk across operating hours.",
    codeSnippet: `# CemGuard Degradation Engine (Python)
import math

def calculate_bearing_health(hours, load_kn, hardness_hb):
    # Archard's Wear Law: V = (K * W * L) / H
    k_wear_coeff = 2.4e-5
    wear_depth_microns = (k_wear_coeff * load_kn * (hours * 1800)) / hardness_hb
    
    # Weibull cumulative failure probability: F(t) = 1 - exp(-(t/eta)^beta)
    eta_scale = 6200.0  # Characteristic life
    beta_shape = 2.8    # Wear-out mode
    failure_risk = 1.0 - math.exp(-pow(hours / eta_scale, beta_shape))
    
    return wear_depth_microns, failure_risk`,
    takeaway: "When physical hardware sensors are unavailable, rigorous mechanical and statistical models provide actionable engineering foresight."
  },
  {
    id: "03",
    title: "Designing for erratic campus connectivity with offline ServiceWorkers in Classync",
    domain: "Distributed Systems & Offline UX",
    date: "August 2026",
    metric: "0ms Cached Load on 0kb Data",
    summary: "Designing an offline-first schedule architecture for Nigerian lecture halls with spotty 3G coverage.",
    problem: "Nigerian university lecture halls frequently suffer from zero or degraded 3G connectivity. When applications require a round-trip network fetch on every navigation, students miss emergency venue changes or are left staring at blank loading screens.",
    solution: "Engineered an offline-first Progressive Web App (PWA) architecture using ServiceWorker precaching paired with IndexedDB. Timetable schedules are stored locally and render in 0ms. When network connectivity resumes, a background sync listener receives WebSocket delta broadcasts from Supabase without exhausting student mobile data bundles.",
    codeSnippet: `// ServiceWorker Cache & Sync Handler (classync-sw.js)
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/app/timetable')
        .then((cached) => cached || fetch(event.request))
    );
  }
});`,
    takeaway: "In emerging markets, performance is not about high bandwidth; it is about local-first storage and intelligent delta synchronization."
  },
  {
    id: "04",
    title: "Building NMU Innovators: Scaling a peer tech community to 200+ members",
    domain: "Community Leadership & Peer Education",
    date: "July 2026",
    metric: "200+ Engineering Student Members",
    summary: "Establishing developer culture and peer programming cohorts at Nigeria Maritime University.",
    problem: "At a specialized maritime engineering university in the Niger Delta, software development resources, hackathons, and structured coding peer groups were historically scarce, leaving students isolated in their learning.",
    solution: "Founded and organized NMU Innovators. Created structured curricula covering Git fundamentals, web application development, and Python for engineering problem solving. Scaled the community to over 200 active student members with collaborative build challenges and mentorship.",
    codeSnippet: `// NMU Innovators Community Structure
- Peer Code Reviews & Git Collaboration
- Weekly Web & Python Technical Workshops
- Student Project Incubator (Open Source Tools for NMU)
- 200+ Active Engineering & Science Student Members`,
    takeaway: "Real technical growth accelerates when you create spaces for peers to build, break, and critique real projects together."
  }
];

export default function BuildLog() {
  const [activeLogId, setActiveLogId] = useState("01");

  return (
    <section id="build-log" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 bg-background border-b-2 border-foreground/10 noise-bg max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
              // Engineering Notes & Decisions
            </h2>
            <h3 className="font-mono text-2xl sm:text-3xl uppercase font-bold text-foreground">
              How I Think & What I've Learned
            </h3>
          </div>
          <div className="font-mono text-xs text-foreground/60 max-w-md">
            Architectural decisions, real constraints solved, and engineering lessons from shipping practical software.
          </div>
        </div>

        {/* Ledger Container */}
        <div className="border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] divide-y-2 divide-foreground">
          {logs.map((log) => {
            const isOpen = activeLogId === log.id;
            return (
              <div key={log.id} className={`transition-colors ${isOpen ? 'bg-[#FAF9F5]' : 'hover:bg-[#FDFDFD]'}`}>
                
                {/* Clickable Header Bar */}
                <div 
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setActiveLogId(isOpen ? null : log.id);
                  }}
                  className="p-5 sm:p-6 md:p-8 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <span className="font-mono text-sm font-bold text-accent">
                      [{log.id}]
                    </span>
                    <div>
                      <h4 className="font-mono text-lg sm:text-xl uppercase font-bold text-foreground hover:text-accent transition-colors">
                        {log.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="font-mono text-[10px] uppercase text-foreground/60 font-bold">
                          {log.domain}
                        </span>
                        <span className="text-foreground/30">·</span>
                        <span className="font-mono text-[10px] uppercase text-emerald-800 font-bold">
                          {log.metric}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-foreground/10">
                    <span className="font-mono text-xs text-foreground/50">
                      {log.date}
                    </span>
                    <span className="font-mono text-xs font-bold text-foreground border border-foreground/20 w-8 h-8 flex items-center justify-center">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 sm:px-6 md:px-8 pb-8 pt-2 border-t border-foreground/10 bg-background/50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                        
                        {/* Narrative Breakdown */}
                        <div className="lg:col-span-6 space-y-4 font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
                          <div>
                            <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold block mb-1">
                              The Real Constraint:
                            </span>
                            <p>{log.problem}</p>
                          </div>

                          <div>
                            <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-bold block mb-1">
                              The Engineering Approach:
                            </span>
                            <p>{log.solution}</p>
                          </div>

                          <div className="p-3 bg-white border-l-4 border-foreground font-mono text-xs text-foreground">
                            <strong>Key Takeaway:</strong> {log.takeaway}
                          </div>
                        </div>

                        {/* Code Artifact / Snippet */}
                        <div className="lg:col-span-6 flex flex-col justify-between">
                          <div className="bg-[#0B0C10] text-[#E0E2EC] border border-foreground p-4 font-mono text-xs overflow-x-auto no-scrollbar shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                            <div className="text-[10px] text-white/50 pb-2 mb-2 border-b border-white/10 flex justify-between">
                              <span>ARCHITECTURE SNIPPET</span>
                              <span>VERIFIED IMPLEMENTATION</span>
                            </div>
                            <pre className="text-emerald-300 whitespace-pre leading-relaxed">
                              {log.codeSnippet}
                            </pre>
                          </div>
                          <div className="pt-3 text-right">
                            <span className="font-mono text-[10px] uppercase text-foreground/50">
                              Production / Academic Engineering Record
                            </span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
