const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: "React, Node, PostgreSQL",
    desc: "An invoicing and payment tool I built for Nigerian freelancers to easily stay FIRS compliant.",
    offset: "md:ml-0",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Vantage Real Estate",
    stack: "Next.js, Tailwind",
    desc: "A property search site with a custom map integration and lightning-fast load times.",
    offset: "md:ml-[15%]",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Inkto",
    stack: "React Native, Firebase",
    desc: "A secure file-sharing mobile app I made for a law firm to keep their client updates private.",
    offset: "md:ml-[30%]",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
];

export default function Work() {
  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 border-b border-dark/10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12 md:mb-16">
          // Selected Work
        </h2>
        
        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((proj) => (
            <div key={proj.id} className={`flex flex-col group ${proj.offset} max-w-2xl w-full`}>
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-dark/5 border border-dark/10 mb-6 overflow-hidden relative group-hover:border-accent transition-colors duration-300">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-dark/10 pointer-events-none mix-blend-overlay"></div>
              </div>
              
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-mono text-xl md:text-2xl uppercase font-bold text-dark group-hover:text-accent transition-colors">
                  {proj.title}
                </h3>
                <span className="font-mono text-xs text-dark/50 shrink-0 ml-4">[{proj.id}]</span>
              </div>
              
              <p className="font-mono text-xs uppercase text-dark/50 tracking-widest border-b border-dark/10 pb-4 mb-4">
                {proj.stack}
              </p>
              
              <p className="font-sans text-base text-dark/80 max-w-lg">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
