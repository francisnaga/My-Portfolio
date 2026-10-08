const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: "React, Node, PostgreSQL",
    desc: "Invoicing and payments platform for Nigerian freelancers and businesses. Built for strict FIRS compliance.",
    offset: "md:ml-0",
  },
  {
    id: "02",
    title: "Vantage Real Estate",
    stack: "Next.js, Tailwind",
    desc: "Property discovery platform with real-time map clustering and an aggressive SEO architecture.",
    offset: "md:ml-[20%]",
  },
  {
    id: "03",
    title: "Inkto",
    stack: "React Native, Firebase",
    desc: "Mobile application built for a specific legal firm. Secure document sharing and real-time client updates.",
    offset: "md:ml-[40%]",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 border-b border-dark/10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-16">
          // Selected Work
        </h2>
        
        <div className="flex flex-col gap-24">
          {projects.map((proj) => (
            <div key={proj.id} className={`flex flex-col group ${proj.offset} max-w-2xl`}>
              {/* Image Placeholder (Raw Box) */}
              <div className="w-full aspect-[4/3] bg-dark/5 border border-dark/10 mb-6 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                <span className="font-mono text-xs uppercase text-dark/30 tracking-widest">
                  Preview Placeholder
                </span>
              </div>
              
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-mono text-2xl uppercase font-bold text-dark group-hover:text-accent transition-colors">
                  {proj.title}
                </h3>
                <span className="font-mono text-xs text-dark/50">[{proj.id}]</span>
              </div>
              
              <p className="font-mono text-xs uppercase text-dark/50 tracking-widest border-b border-dark/10 pb-4 mb-4">
                {proj.stack}
              </p>
              
              <p className="font-sans text-base text-dark/80">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
