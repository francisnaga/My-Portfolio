export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-background border-b border-foreground/10 noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-12">
          // The Builder & Discipline
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-3xl md:text-5xl uppercase font-bold text-foreground mb-6">
              Efobi Francis Chibundo
            </h3>
            
            <div className="font-mono text-xs text-accent uppercase tracking-widest font-bold mb-6">
              Marine Engineering (NMU) × Full-Stack Software Builder
            </div>
            
            <div className="space-y-5 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm Naga, a software developer and independent builder focused on building practical, high-utility digital products across web, mobile, applied AI, and automated workflows.
              </p>
              <p>
                I am currently studying <strong>Marine Engineering at Nigeria Maritime University (NMU)</strong>. In maritime engineering, machinery, propulsion systems, and auxiliary plants operate under extreme offshore conditions where system failure is not an option. That industrial mindset directly governs how I build software: rigorous error handling, zero unnecessary bloat, deterministic data structures, and rock-solid uptime.
              </p>
              <p>
                I combine full-stack engineering with product thinking—taking an idea from raw architectural blueprint to mobile screens, database schemas, and live production deployments that solve real business problems.
              </p>
            </div>

            {/* Verified Enterprise Metric */}
            <div className="mt-10 p-6 bg-white border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-3xl md:text-4xl font-black text-foreground">₦80M+</span>
                <span className="font-mono text-xs text-accent uppercase tracking-wider font-bold">
                  Enterprise Lead Pipeline
                </span>
              </div>
              <p className="font-sans text-xs md:text-sm text-foreground/75 leading-relaxed">
                Architected and executed a targeted digital acquisition campaign that generated an ₦80M enterprise business opportunity. Demonstrates the intersection of technical systems with measurable commercial impact.
              </p>
            </div>
          </div>

          {/* Sidebar Technical Specifications (5 cols) */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            
            <div className="bg-white border-2 border-foreground/15 p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)]">
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3 border-b border-foreground/10 pb-2">
                Academic Engineering
              </h4>
              <p className="font-mono font-bold text-base text-foreground">
                B.Eng. Marine Engineering
              </p>
              <p className="font-sans text-xs text-foreground/70 mt-1">
                Nigeria Maritime University (NMU)
              </p>
              <p className="text-xs text-accent mt-2 font-mono uppercase font-bold">
                2024 – 2029
              </p>
            </div>

            <div className="bg-white border-2 border-foreground/15 p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)]">
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3 border-b border-foreground/10 pb-2">
                Technical Certifications
              </h4>
              <ul className="space-y-2.5 font-mono text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent font-bold">▹</span> NIIT Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent font-bold">▹</span> NIIT Python Programming
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-foreground/15 p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)]">
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3 border-b border-foreground/10 pb-2">
                Operating Location
              </h4>
              <p className="font-mono text-sm text-foreground flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Lagos & Delta, Nigeria (WAT)
              </p>
              <p className="font-mono text-[11px] text-foreground/50 mt-1">
                Available for local and remote international contracts.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
