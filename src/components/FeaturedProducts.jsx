import { useState } from 'react';
import { playClick } from '../utils/sound';

export default function FeaturedProducts() {
  // Inkto state
  const [inktoSample, setInktoSample] = useState('affidavit'); // 'affidavit' | 'motion'
  const [copiedInkto, setCopiedInkto] = useState(false);

  // Classync state
  const [classyncRole, setClassyncRole] = useState('student'); // 'student' | 'rep'

  // CemGuard state (Archard's Law & ISO 20816-3 interactive model)
  const [operatingHours, setOperatingHours] = useState(4200);

  const samples = {
    affidavit: {
      title: "Affidavit of Means (High Court of Lagos State)",
      suit: "Suit No: LD/4102/2026",
      extracted: `IN THE HIGH COURT OF LAGOS STATE
HOLDEN AT THE COMMERCIAL DIVISION, IKEJA

SUIT NO: LD/4102/2026

BETWEEN:
STERLING MARITIME LOGISTICS LTD   ... CLAIMANT
AND
APEX ATLANTIC DOCKYARDS LTD       ... DEFENDANT

AFFIDAVIT OF MEANS AND EVIDENCE

I, CHIEF E. K. OKONKWO, Male, Christian, Nigerian Citizen, residing at 14 Admiralty Way, Lekki Phase 1, Lagos State, do hereby make Oath and state as follows:

1. That I am the Managing Director of the Claimant company and by virtue of my position, I am conversant with the facts deposed herein.
2. That the Defendant entered into a vessel dry-docking and overhaul charter party dated 14th January 2026.
3. That despite delivery of the vessel, the Defendant has neglected to liquidate the outstanding demurrage amounting to N48,500,000.
4. That I depose to this Affidavit in good faith, conscientiously believing the contents to be true and in accordance with the Oaths Act.`
    },
    motion: {
      title: "Notice of Preliminary Objection (Civil Litigation)",
      suit: "Suit No: FHC/L/CS/892/2026",
      extracted: `IN THE FEDERAL HIGH COURT OF NIGERIA
IN THE LAGOS JUDICIAL DIVISION
HOLDEN AT LAGOS

SUIT NO: FHC/L/CS/892/2026

IN THE MATTER OF AN APPLICATION UNDER ORDER 29 RULE 1

TAKE NOTICE that this Honourable Court will be moved on Thursday the 24th day of October 2026 at 9 o'clock in the forenoon on behalf of the 1st Defendant/Applicant praying for:

1. AN ORDER striking out this suit in limine for want of subject-matter jurisdiction.
2. AND FOR SUCH FURTHER ORDER(S) as this Honourable Court may deem fit.

GROUNDS FOR OBJECTION:
1. The Claimant's endorsement discloses no reasonable cause of action against the Applicant.
2. The dispute arises strictly out of maritime cabotage regulation under the exclusive jurisdiction of the Admiralty Court.`
    }
  };

  const handleCopyText = (text) => {
    playClick(700, 'sine', 0.04);
    navigator.clipboard.writeText(text);
    setCopiedInkto(true);
    setTimeout(() => setCopiedInkto(false), 2200);
  };

  // CemGuard mathematical wear calculation based on Archard's Law & Weibull distribution
  // V = K * (W * L) / H
  const wearDepthMicrons = Math.min(180, Math.round((operatingHours / 5000) * 85));
  const vibrationRms = (1.2 + (operatingHours / 5000) * 3.4).toFixed(1);
  const failureRiskPercent = Math.min(99, Math.round(100 * (1 - Math.exp(-Math.pow(operatingHours / 6200, 2.8)))));
  const isoStatus = vibrationRms < 2.8 ? "Zone A/B: Acceptable (ISO 20816-3)" : vibrationRms < 4.5 ? "Zone C: Restricted Operation" : "Zone D: Unacceptable / Critical";

  return (
    <div className="space-y-16 md:space-y-24 mb-16">

      {/* ======================================================== */}
      {/* 01. INKTO: AI-POWERED LEGAL DOCUMENT SCANNER & TRANSCRIPTION */}
      {/* ======================================================== */}
      <div className="border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#101218] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-foreground">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest bg-accent text-white px-3 py-1 font-bold">
              01 // Flagship Product
            </span>
            <span className="font-mono text-xs text-white/70 uppercase">
              Legal Document OCR & Transcription
            </span>
          </div>
          <div className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Active Beta with Practicing Litigation Lawyers
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Story & Engineering */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="font-sans text-3xl sm:text-4xl uppercase font-black text-foreground tracking-tight">
                  Inkto
                </h3>
                <p className="font-mono text-xs text-accent font-bold mt-1 uppercase tracking-wider">
                  React Native · ML Kit Document Scanner · Gemini Multimodal Vision · Supabase
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  <strong>The Real Problem:</strong> In Nigerian High Courts, affidavits, motions, and depositions are frequently hand-written or stamped physical documents. Litigation lawyers and chamber clerks previously spent 4 to 6 hours manually retyping these physical papers into word processors.
                </p>
                <p>
                  <strong>The Architecture:</strong> Inkto uses Google ML Kit Document Scanner on the device to handle perspective cropping, shadow cleaning, and boundary rectification locally. The cleaned document raster is passed to Gemini Multimodal Vision to extract cursive legal handwriting directly into court-compliant, numbered DOCX clauses in seconds.
                </p>
              </div>

              {/* Concrete Specifications */}
              <div className="pt-4 border-t border-foreground/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Target User</span>
                  <span className="font-bold text-foreground">Nigerian Litigation Chambers</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">On-Device Preprocessing</span>
                  <span className="font-bold text-foreground">Google ML Kit Document Scanner</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Transcription Engine</span>
                  <span className="font-bold text-foreground">Gemini Multimodal Vision API</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Output Export</span>
                  <span className="font-bold text-foreground">Structured High Court DOCX / PDF</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://inkto.francisnaga.site" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => playClick(800, 'sine', 0.04)}
                  className="bg-foreground text-background font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-accent transition-colors font-bold"
                >
                  Launch Web Demo ↗
                </a>
                <a 
                  href="https://github.com/francisnaga/Inkto" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => playClick(600, 'sine', 0.03)}
                  className="bg-white text-foreground border-2 border-foreground font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-foreground hover:text-white transition-colors font-bold"
                >
                  GitHub Source ↗
                </a>
              </div>
            </div>

            {/* Interactive Document Transcriber Demo */}
            <div className="lg:col-span-7 bg-[#FAF9F5] border-2 border-foreground p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <div>
                {/* Sample Selector */}
                <div className="flex items-center justify-between pb-4 border-b border-foreground/15 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase text-foreground/60 font-bold">
                      Document Sample:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        playClick(600, 'sine', 0.03);
                        setInktoSample('affidavit');
                      }}
                      className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                        inktoSample === 'affidavit'
                          ? 'bg-foreground text-white border-foreground font-bold'
                          : 'bg-white text-foreground/70 border-foreground/20'
                      }`}
                    >
                      Affidavit of Means
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        playClick(600, 'sine', 0.03);
                        setInktoSample('motion');
                      }}
                      className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                        inktoSample === 'motion'
                          ? 'bg-foreground text-white border-foreground font-bold'
                          : 'bg-white text-foreground/70 border-foreground/20'
                      }`}
                    >
                      Notice of Motion
                    </button>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-accent font-bold hidden sm:inline">
                    Clean ML Kit Input
                  </span>
                </div>

                {/* Transcribed Output Preview */}
                <div className="bg-white border border-foreground/15 p-4 sm:p-5 font-mono text-xs min-h-[280px] max-h-[340px] overflow-y-auto no-scrollbar">
                  <div className="font-mono text-[11px] text-accent font-bold pb-2 border-b border-foreground/10 flex justify-between items-center mb-3">
                    <span>{samples[inktoSample].suit}</span>
                    <span>EXTRACTED TO FORMATTED DOCX</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed selection:bg-accent selection:text-white">
                    {samples[inktoSample].extracted}
                  </pre>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 mt-4 border-t border-foreground/15 flex items-center justify-between">
                <span className="font-mono text-[10px] text-foreground/60">
                  {samples[inktoSample].title}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyText(samples[inktoSample].extracted)}
                  className="font-mono text-xs uppercase px-4 py-2 bg-white border border-foreground hover:bg-foreground hover:text-white transition-colors font-bold"
                >
                  {copiedInkto ? 'COPIED TO CLIPBOARD' : 'COPY EXTRACTED TEXT'}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* ======================================================== */}
      {/* 02. CLASSYNC: CAMPUS MULTI-ROLE ACADEMIC PLATFORM */}
      {/* ======================================================== */}
      <div className="border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#101218] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-foreground">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest bg-emerald-500 text-black px-3 py-1 font-bold">
              02 // Campus Platform
            </span>
            <span className="font-mono text-xs text-white/70 uppercase">
              Academic Schedule Engine & Multi-Role PWA
            </span>
          </div>
          <div className="font-mono text-xs text-white/80 font-bold">
            Offline-First Progressive Web App (PWA)
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Story & Engineering */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="font-sans text-3xl sm:text-4xl uppercase font-black text-foreground tracking-tight">
                  Classync
                </h3>
                <p className="font-mono text-xs text-emerald-600 font-bold mt-1 uppercase tracking-wider">
                  Next.js · Progressive Web App · Supabase Realtime · Tailwind CSS
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  <strong>The Real Problem:</strong> In Nigerian universities, lecture venues and timetables change abruptly. Communication is scattered across fragmented WhatsApp groups, and students in lecture halls with zero internet coverage regularly miss emergency venue swaps.
                </p>
                <p>
                  <strong>The Architecture:</strong> Classync implements a strict Role-Based Access Control (RBAC) hierarchy where Course Reps dispatch authenticated timetable notifications. Timetable state is cached offline in IndexedDB via a ServiceWorker, allowing instant access with zero mobile data usage.
                </p>
              </div>

              {/* Specifications */}
              <div className="pt-4 border-t border-foreground/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Target Environment</span>
                  <span className="font-bold text-foreground">Nigerian University Campuses</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Offline Architecture</span>
                  <span className="font-bold text-foreground">ServiceWorker Precaching + IndexedDB</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Realtime Engine</span>
                  <span className="font-bold text-foreground">Supabase Realtime WebSockets</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://classync.francisnaga.site" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => playClick(800, 'sine', 0.04)}
                  className="bg-foreground text-background font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-emerald-600 transition-colors font-bold"
                >
                  Launch Live PWA ↗
                </a>
                <a 
                  href="https://github.com/francisnaga/Classync" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => playClick(600, 'sine', 0.03)}
                  className="bg-white text-foreground border-2 border-foreground font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-foreground hover:text-white transition-colors font-bold"
                >
                  GitHub Source ↗
                </a>
              </div>
            </div>

            {/* Interactive Role Switcher Demo */}
            <div className="lg:col-span-7 bg-[#F6F8FB] border-2 border-foreground p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-foreground/15 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase text-foreground/60 font-bold">
                      View Mode:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        playClick(600, 'sine', 0.03);
                        setClassyncRole('student');
                      }}
                      className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                        classyncRole === 'student'
                          ? 'bg-foreground text-white border-foreground font-bold'
                          : 'bg-white text-foreground/70 border-foreground/20'
                      }`}
                    >
                      Student View
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        playClick(600, 'sine', 0.03);
                        setClassyncRole('rep');
                      }}
                      className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                        classyncRole === 'rep'
                          ? 'bg-foreground text-white border-foreground font-bold'
                          : 'bg-white text-foreground/70 border-foreground/20'
                      }`}
                    >
                      Course Rep Dispatcher
                    </button>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 font-bold">
                    Offline Cache Ready
                  </span>
                </div>

                <div className="bg-white border border-foreground/15 p-4 sm:p-5 font-mono text-xs min-h-[260px] space-y-3">
                  {classyncRole === 'student' ? (
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-foreground/10 text-foreground/70 mb-3">
                        <span className="font-bold text-foreground">LECTURE TIMETABLE // NMU 300L</span>
                        <span className="text-[10px] text-emerald-600 font-bold">INSTANT 0MS LOCAL RENDER</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="p-3 bg-foreground/5 border-l-4 border-emerald-500 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-foreground text-sm">MRN 302: Marine Diesel Engines I</div>
                            <div className="text-[11px] text-foreground/60">08:00 - 10:00 · Eng Lecture Hall 2</div>
                          </div>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            ATTENDED
                          </span>
                        </div>

                        <div className="p-3 bg-foreground/5 border-l-4 border-accent flex justify-between items-center">
                          <div>
                            <div className="font-bold text-foreground text-sm">MRN 306: Naval Architecture & Stability</div>
                            <div className="text-[11px] text-accent font-bold">VENUE MOVED TO CAD LAB 1 (Rep Update)</div>
                          </div>
                          <span className="px-2 py-0.5 bg-blue-100 text-accent text-[10px] font-bold">
                            NEXT
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-foreground/10 text-foreground/70 mb-3">
                        <span className="font-bold text-foreground">REP DISPATCH CONSOLE // TIMETABLE OVERRIDE</span>
                        <span className="text-[10px] text-accent font-bold">VERIFIED AUTHENTICATION</span>
                      </div>

                      <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-3">
                        <strong>Conflict Handled:</strong> Scheduled hall Eng 2 double-booked with Civil Engineering. Automatic reallocation triggered for CAD Lab 1.
                      </div>

                      <p className="font-sans text-xs text-foreground/70 leading-relaxed">
                        Authorized course reps can adjust venues and schedules in one click. Updates sync across all enrolled student devices in real time via Supabase WebSockets, updating local caches immediately.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-foreground/15 flex items-center justify-between text-[10px] text-foreground/50 font-mono">
                <span>PWA bundle footprint: &lt; 1.4MB</span>
                <span className="text-foreground/70 font-bold">Zero SMS costs for students</span>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* ======================================================== */}
      {/* 03. CEMGUARD: MECHANICAL FAILURE & WEAR MODELING */}
      {/* ======================================================== */}
      <div className="border-2 border-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#101218] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-foreground">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest bg-cyan-400 text-black px-3 py-1 font-bold">
              03 // Engineering Challenge
            </span>
            <span className="font-mono text-xs text-white/70 uppercase">
              Mechanical Degradation & Vibration Modeling
            </span>
          </div>
          <div className="font-mono text-xs text-cyan-300 font-bold">
            Archard's Wear Law + ISO 20816-3 + Weibull Model
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Story & Engineering */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="font-sans text-3xl sm:text-4xl uppercase font-black text-foreground tracking-tight">
                  CemGuard
                </h3>
                <p className="font-mono text-xs text-cyan-600 font-bold mt-1 uppercase tracking-wider">
                  Python · Mathematical Engineering Simulation · Marine Machinery Reliability
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  <strong>The Engineering Challenge:</strong> Developed as a university engineering challenge software model at Nigeria Maritime University. In marine and heavy industrial machinery, waiting for physical sensors on older equipment is often cost-prohibitive, leading to unexpected shaft or bearing seizure.
                </p>
                <p>
                  <strong>The Mathematical Model:</strong> CemGuard implements a computational pipeline:
                  <br />• <em>Archard's Wear Law:</em> Calculates mechanical sliding wear volume based on normal contact load and surface hardness.
                  <br />• <em>ISO 20816-3 Severity Standard:</em> Maps vibration velocity against international tolerance zones (A through D).
                  <br />• <em>Weibull Reliability Curve:</em> Forecasts the cumulative probability of failure across operating hours to schedule preventative overhaul before catastrophic breakdown.
                </p>
              </div>

              {/* Specifications */}
              <div className="pt-4 border-t border-foreground/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Engineering Foundation</span>
                  <span className="font-bold text-foreground">B.Eng Marine Engineering Project</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Core Physics Equations</span>
                  <span className="font-bold text-foreground">Archard Wear & ISO 20816-3 Velocity</span>
                </div>
                <div className="flex justify-between py-1 border-b border-foreground/5">
                  <span className="text-foreground/50">Statistical Engine</span>
                  <span className="font-bold text-foreground">2-Parameter Weibull Distribution</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="#contact" 
                  onClick={() => playClick(800, 'sine', 0.04)}
                  className="bg-foreground text-background font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-cyan-600 transition-colors font-bold"
                >
                  Discuss Engineering Modeling ↗
                </a>
                <a 
                  href="https://github.com/francisnaga" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => playClick(600, 'sine', 0.03)}
                  className="bg-white text-foreground border-2 border-foreground font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-foreground hover:text-white transition-colors font-bold"
                >
                  GitHub Source ↗
                </a>
              </div>
            </div>

            {/* Interactive Degradation Simulator */}
            <div className="lg:col-span-7 bg-[#0D0F14] text-[#E0E2EC] border-2 border-foreground p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] font-mono">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-xs uppercase text-white font-bold tracking-wider">
                      Computational Failure Simulation
                    </span>
                  </div>
                  <span className="text-xs text-white/60">
                    Propulsion Shaft Bearing
                  </span>
                </div>

                {/* Operating Hours Slider */}
                <div className="mb-6 p-4 bg-white/5 border border-white/10">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-white/70">Operating Hours Run Time:</span>
                    <span className="text-cyan-300 font-bold text-sm">{operatingHours.toLocaleString()} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="8000"
                    step="100"
                    value={operatingHours}
                    onChange={(e) => setOperatingHours(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 mt-1">
                    <span>500 hrs (New)</span>
                    <span>4,000 hrs (Mid-Life)</span>
                    <span>8,000 hrs (Critical)</span>
                  </div>
                </div>

                {/* Mathematical Model Outputs */}
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-white/60">Archard's Wear Depth (V = K·W·L / H):</div>
                      <div className="text-white font-bold mt-0.5">{wearDepthMicrons} µm surface degradation</div>
                    </div>
                    <span className={`px-2 py-1 text-[10px] font-bold ${wearDepthMicrons > 120 ? 'bg-red-900 text-red-200' : 'bg-emerald-950 text-emerald-300'}`}>
                      {wearDepthMicrons > 120 ? 'HIGH TOLERANCE' : 'WITHIN TOLERANCE'}
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-white/60">Vibration Severity (ISO 20816-3):</div>
                      <div className="text-white font-bold mt-0.5">{vibrationRms} mm/s RMS velocity</div>
                    </div>
                    <span className="text-[10px] text-cyan-300 font-bold">
                      {isoStatus}
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-white/60">Weibull Failure Probability:</div>
                      <div className="text-white font-bold mt-0.5">{failureRiskPercent}% cumulative failure likelihood</div>
                    </div>
                    <div className="w-24 bg-white/10 h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${failureRiskPercent > 70 ? 'bg-red-500' : 'bg-cyan-400'}`}
                        style={{ width: `${failureRiskPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                <span>Model validated against standard marine diesel bearing parameters</span>
                <span className="text-cyan-400 font-bold">NMU Engineering Challenge</span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
