import { useState } from 'react';
import { playClick } from '../utils/sound';

const services = [
  {
    id: "01",
    title: "Mobile App Engineering",
    category: "Mobile & Native",
    price: "₦500k+",
    range: "₦500k - 3.5M+",
    turnaround: "3 - 6 weeks",
    deliverables: "Android & iOS platforms, native Kotlin bridges, camera/OCR integrations, offline persistence, Play Store submission.",
    stack: ["React Native", "Kotlin", "Supabase", "Expo/CLI"]
  },
  {
    id: "02",
    title: "Full-Stack Web Applications",
    category: "Web & SaaS",
    price: "₦100k+",
    range: "₦100k - 800k",
    turnaround: "1 - 3 weeks",
    deliverables: "Custom Next.js web applications, responsive user dashboards, authentication, database schemas, and SEO infrastructure.",
    stack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "03",
    title: "Applied AI & Document OCR",
    category: "AI & Workflows",
    price: "₦150k+",
    range: "₦150k - 1.5M",
    turnaround: "2 - 4 weeks",
    deliverables: "Vision models, document extraction pipelines (handwritten & scanned), legal/tax parsers, automated DOCX/PDF generation.",
    stack: ["Gemini Vision", "Python", "FastAPI", "OpenCV"]
  },
  {
    id: "04",
    title: "Python Automation & Scrapers",
    category: "Backend & Bots",
    price: "₦30k+",
    range: "₦30k - 300k",
    turnaround: "3 - 7 days",
    deliverables: "Autonomous background scripts, scheduled data aggregators, web scrapers, automated alert bots, and API connectors.",
    stack: ["Python", "Playwright", "BeautifulSoup", "Cron/Workers"]
  },
  {
    id: "05",
    title: "Fintech & CAC Payment Systems",
    category: "Fintech & Compliance",
    price: "₦250k+",
    range: "₦250k - 900k",
    turnaround: "2 - 4 weeks",
    deliverables: "Paystack webhook settlement engines, FIRS/NRS compliant invoice generators, multi-currency ledger databases.",
    stack: ["Paystack API", "Supabase PostgreSQL", "Row-Level Security"]
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 border-b-2 border-foreground/10 bg-background noise-bg max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
              // Technical Capabilities & Services
            </h2>
            <h3 className="font-mono text-2xl sm:text-3xl uppercase font-bold text-foreground">
              What I Engineer & Ship
            </h3>
          </div>
          <div className="font-mono text-xs text-foreground/60">
            Fixed-scope contracts · No bloated page builders · Raw code
          </div>
        </div>
        
        {/* Clean Engineering Capability Ledger */}
        <div className="border-2 border-foreground divide-y-2 divide-foreground bg-white shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
          {services.map((svc, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div 
                key={svc.id}
                className={`transition-colors ${isOpen ? 'bg-[#FAFAFA]' : 'hover:bg-[#FDFDFD]'}`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => {
                    playClick(600, 'sine', 0.03);
                    setActiveIdx(isOpen ? null : idx);
                  }}
                  className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <span className="font-mono text-sm text-foreground/40 font-bold">
                      [{svc.id}]
                    </span>
                    <div>
                      <h4 className="font-mono text-lg sm:text-xl md:text-2xl uppercase font-bold text-foreground hover:text-accent transition-colors">
                        {svc.title}
                      </h4>
                      <span className="font-mono text-[10px] uppercase text-accent font-bold tracking-wider block mt-0.5">
                        {svc.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-foreground/10">
                    <div className="text-left md:text-right font-mono">
                      <div className="text-sm sm:text-base font-bold text-foreground">
                        {svc.price}
                      </div>
                      <div className="text-[10px] text-foreground/50 uppercase">
                        {svc.turnaround}
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-foreground border border-foreground/20 w-8 h-8 flex items-center justify-center">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="px-5 sm:px-6 md:px-8 pb-6 pt-2 border-t border-foreground/10 bg-background/50">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                      <div className="md:col-span-8 space-y-3">
                        <div className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
                          Deliverables & Scope
                        </div>
                        <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
                          {svc.deliverables}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {svc.stack.map((t, i) => (
                            <span key={i} className="text-[10px] font-mono uppercase bg-white border border-foreground/15 px-2.5 py-1 text-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-4 flex flex-col justify-end gap-2.5 pt-4 md:pt-0 md:border-l md:border-foreground/10 md:pl-6">
                        <div className="font-mono text-xs text-foreground/60 mb-1">
                          Budget Range: <strong className="text-foreground">{svc.range}</strong>
                        </div>
                        <a 
                          href={`https://wa.me/2349130436032?text=${encodeURIComponent(`Hello Naga, I'm interested in: ${svc.title} (${svc.price}). Let's discuss!`)}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playClick(800, 'sine', 0.04)}
                          className="py-3 px-4 bg-foreground text-background font-mono text-xs uppercase tracking-wider text-center hover:bg-accent transition-colors font-bold"
                        >
                          Book Via WhatsApp ↗
                        </a>
                        <a 
                          href="mailto:hello@francisnaga.site"
                          onClick={() => playClick(600, 'sine', 0.03)}
                          className="py-2.5 px-4 bg-white text-foreground border border-foreground font-mono text-xs uppercase tracking-wider text-center hover:bg-foreground hover:text-white transition-colors"
                        >
                          Send Email Inquiry
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
