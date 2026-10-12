import { useState } from 'react';
import { playClick } from '../utils/sound';

const capabilities = [
  {
    id: "01",
    title: "Mobile App Development",
    deliverables: "Cross-platform mobile applications for Android and iOS using React Native, on-device camera and scanning integrations with Google ML Kit, offline-first local storage, and Play Store release preparation.",
    stack: ["React Native", "Android SDK", "Google ML Kit", "Supabase"],
    timeline: "3 to 6 weeks"
  },
  {
    id: "02",
    title: "Full-Stack Web Applications & Systems",
    deliverables: "Production Next.js and TypeScript web platforms, secure multi-role authentication (RBAC), PostgreSQL schema modeling, database migrations, and performant API backends.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    timeline: "2 to 4 weeks"
  },
  {
    id: "03",
    title: "Applied AI & Document Processing Pipelines",
    deliverables: "Document ingestion pipelines, multimodal handwriting and text extraction using Gemini Vision, automated structured report and DOCX/PDF generation.",
    stack: ["Gemini Vision API", "Google ML Kit", "Python", "Supabase"],
    timeline: "2 to 4 weeks"
  },
  {
    id: "04",
    title: "Computational Modeling & Automation",
    deliverables: "Custom Python computational models, reliability and wear simulation scripts, automated web data scrapers, and background task schedulers.",
    stack: ["Python", "Mathematical Modeling", "FastAPI", "WebSockets"],
    timeline: "1 to 3 weeks"
  },
  {
    id: "05",
    title: "Nigerian Payment & Tax Compliance Integration",
    deliverables: "Direct Paystack checkout and webhook settlement integration, FIRS and NRS tax-compliant invoicing engines with automatic VAT computation.",
    stack: ["Paystack API", "Supabase PostgreSQL", "Row-Level Security"],
    timeline: "2 to 3 weeks"
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 px-6 sm:px-10 md:px-16 border-b-2 border-foreground/10 bg-background noise-bg max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
              // Technical Capabilities
            </h2>
            <h3 className="font-mono text-2xl sm:text-3xl uppercase font-bold text-foreground">
              What I Build For Clients
            </h3>
          </div>
          <p className="font-sans text-sm text-foreground/60 max-w-md">
            Fixed-scope contracts · Clean hand-crafted code · No bloated page builders
          </p>
        </div>
        
        {/* Capability Ledger */}
        <div className="border-2 border-foreground divide-y-2 divide-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
          {capabilities.map((item, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div 
                key={item.id}
                className={`transition-colors ${isOpen ? 'bg-[#FAFAFA]' : 'hover:bg-[#FDFDFD]'}`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setActiveIdx(isOpen ? null : idx);
                  }}
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <span className="font-mono text-sm text-accent font-bold">
                      [{item.id}]
                    </span>
                    <div>
                      <h4 className="font-mono text-lg sm:text-xl md:text-2xl uppercase font-bold text-foreground hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.stack.map((tech, i) => (
                          <span key={i} className="font-mono text-[11px] text-foreground/60">
                            {tech}{i < item.stack.length - 1 ? ' · ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-foreground/10">
                    <div className="text-left md:text-right font-mono">
                      <div className="text-[11px] uppercase text-foreground/50">
                        Typical Timeline
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        {item.timeline}
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-foreground border border-foreground/20 w-8 h-8 flex items-center justify-center">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-foreground/10 bg-background/50">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                      <div className="md:col-span-8 space-y-3">
                        <div className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
                          Deliverables & Scope
                        </div>
                        <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                          {item.deliverables}
                        </p>
                      </div>

                      <div className="md:col-span-4 flex flex-col justify-end gap-2.5 pt-4 md:pt-0 md:border-l md:border-foreground/10 md:pl-6">
                        <a 
                          href={`https://wa.me/2349130436032?text=${encodeURIComponent(`Hello Francis (Naga), I'd like to discuss: ${item.title}. Let's connect!`)}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playClick(800, 'sine', 0.04)}
                          className="py-3 px-4 bg-foreground text-background font-mono text-xs uppercase tracking-wider text-center hover:bg-accent transition-colors font-bold"
                        >
                          Discuss Project ↗
                        </a>
                        <a 
                          href="mailto:hello@francisnaga.site"
                          onClick={() => playClick(600, 'sine', 0.03)}
                          className="py-2.5 px-4 bg-white text-foreground border border-foreground font-mono text-xs uppercase tracking-wider text-center hover:bg-foreground hover:text-white transition-colors"
                        >
                          Email Inquiry
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
