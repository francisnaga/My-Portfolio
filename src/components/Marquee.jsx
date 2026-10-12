export default function Marquee() {
  const itemsTop = [
    "I BUILD SOFTWARE · I SHIP PRODUCTS",
    "MARINE ENGINEERING DISCIPLINE",
    "INKTO: AI LEGAL OCR PLATFORM",
    "CLASSYNC: CAMPUS EDTECH PWA",
    "CEMGUARD: INDUSTRIAL TELEMETRY",
    "ZERO BLOATED TEMPLATES",
    "NATIVE KOTLIN & NEXT.JS",
    "EST. 2023 · NIGERIA MARITIME UNIVERSITY",
  ];

  const itemsBottom = [
    "INKTO: SUB-4S COURT DOCX EXPORT",
    "CLASSYNC: OFFLINE-FIRST CAMPUS TIMETABLE",
    "CEMGUARD: CATHODIC ANOMALY MONITOR",
    "NCB FINANCE: FIRS/NRS COMPLIANT INVOICING",
    "RAW CODE · ZERO DRAG-AND-DROP BUILDERS",
    "₦80M QUALIFIED ENTERPRISE PIPELINE",
    "APPLIED AI · MOBILE SYSTEMS · INDUSTRIAL IOT",
    "HIGH-PERFORMANCE BRUTALIST ARCHITECTURE",
  ];

  return (
    <div className="w-full border-b border-foreground/10 bg-background overflow-hidden select-none">
      {/* Top Ribbon (Dark) */}
      <div className="bg-foreground text-background py-3 md:py-3.5 border-b border-foreground/20 overflow-hidden flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
          {itemsTop.concat(itemsTop).map((item, idx) => (
            <span key={idx} className="font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-6">
              <span className="text-accent font-bold">●</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon (Off-white / Accent) */}
      <div className="bg-white text-foreground py-2.5 md:py-3 border-b border-foreground/10 overflow-hidden flex">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6">
          {itemsBottom.concat(itemsBottom).map((item, idx) => (
            <span key={idx} className="font-mono text-[11px] md:text-xs uppercase tracking-wider text-foreground/80 flex items-center gap-6">
              <span className="text-foreground/40 font-bold">■</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
