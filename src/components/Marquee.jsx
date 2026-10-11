export default function Marquee() {
  const itemsTop = [
    "APPLIED AI & LEGAL OCR",
    "FULL-STACK NEXT.JS & SUPABASE",
    "REACT NATIVE & KOTLIN NATIVE",
    "CAC & PAYSTACK INVOICING",
    "PYTHON AUTOMATION & SCRAPING",
    "₦80M ENTERPRISE PIPELINE",
    "SCALABLE CLOUD ARCHITECTURE",
    "ZERO TEMPLATES · RAW CODE",
  ];

  const itemsBottom = [
    "INKTO: AI LEGAL PLATFORM",
    "NCB FINANCE: CAC E-INVOICING",
    "CLASSYNC: EDTECH MULTI-ROLE",
    "VANTAGE: MINIMALIST PIPELINES",
    "NAIRALENS: NGN TRANSPARENCY",
    "LAGOS, NIGERIA // EST. 2023",
    "PERFORMANCE FIRST · NO BLOAT",
    "PRODUCTION-READY ARCHITECTURE",
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
