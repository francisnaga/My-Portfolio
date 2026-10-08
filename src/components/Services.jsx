const services = [
  {
    id: "01",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps engineered for speed and stability. From the first line of code to the App Store launch.",
  },
  {
    id: "02",
    title: "Website Development",
    desc: "Bespoke websites that do not just look pretty. Blazing fast, SEO-optimized, and hardcoded to turn traffic into revenue.",
  },
  {
    id: "03",
    title: "AI & Automation",
    desc: "Custom AI pipelines and LLM integrations. Automate customer support, streamline internal workflows, and slash overhead.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 border-b border-dark/10 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-16">
          // The Stack
        </h2>
        
        <div className="flex flex-col gap-12 md:gap-24">
          {services.map((svc) => (
            <div key={svc.id} className="group border-t border-dark/20 pt-6 flex flex-col md:flex-row gap-6 md:gap-12 md:items-start transition-all hover:border-accent">
              <div className="font-mono text-sm text-dark/40 group-hover:text-accent transition-colors">
                [{svc.id}]
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-2xl md:text-4xl uppercase font-bold text-dark mb-4">
                  {svc.title}
                </h3>
                <p className="font-sans text-lg text-dark/80 max-w-2xl">
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
      </div>
    </section>
  );
}
