const primaryServices = [
  {
    id: "01",
    title: "Websites",
    desc: "Fast, custom websites. No WordPress themes or generic site builders. Just hand-written code designed to run smoothly and look good.",
  },
  {
    id: "02",
    title: "Apps",
    desc: "I build native and cross-platform apps from scratch. I handle everything from the first line of code to getting it approved on the App Store.",
  },
  {
    id: "03",
    title: "Automation",
    desc: "I connect APIs and build custom tools to automate the boring stuff, so you can actually focus on running your business.",
  },
];

const secondaryServices = [
  "Python Automation",
  "Google Business Profile",
  "WhatsApp Business Setup",
  "Business Launch Package"
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 border-b border-dark/10 bg-light">
      <div className="max-w-6xl mx-auto">
        
        {/* Primary Tier */}
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12 md:mb-16">
          // Core Services
        </h2>
        <div className="flex flex-col gap-12 md:gap-24 mb-24">
          {primaryServices.map((svc) => (
            <div key={svc.id} className="group border-t border-dark/20 pt-6 flex flex-col md:flex-row gap-4 md:gap-12 md:items-start transition-all hover:border-accent">
              <div className="font-mono text-sm text-dark/40 group-hover:text-accent transition-colors">
                [{svc.id}]
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-xl md:text-4xl uppercase font-bold text-dark mb-2 md:mb-4">
                  {svc.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-dark/80 max-w-2xl">
                  {svc.desc}
                </p>
              </div>
              <div className="hidden md:block">
                <svg className="w-6 h-6 text-dark/20 group-hover:text-accent transition-colors transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Tier */}
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-8 md:mb-12">
          // Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {secondaryServices.map((svc, idx) => (
            <div key={idx} className="border border-dark/10 p-6 flex items-center justify-center text-center hover:border-accent hover:bg-white transition-colors group">
              <span className="font-mono text-sm uppercase text-dark/70 group-hover:text-accent">
                {svc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
