import { useState, useEffect } from 'react';

const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    desc: "Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. FIRS/NRS e-invoicing compliance, dark luxury fintech aesthetic, and Paystack integration.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "02",
    title: "Vantage",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    desc: "Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to track pipelines.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "03",
    title: "NairaLens",
    stack: ["Next.js", "Supabase"],
    desc: "Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "04",
    title: "Classync",
    stack: ["Next.js", "PWA", "Supabase"],
    desc: "Edtech PWA for Nigerian university students with Student/Rep/Admin roles and a full approval workflow.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "05",
    title: "Inkto",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    desc: "AI-powered legal document platform: scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription. Built for a practicing Nigerian lawyer.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12 md:mb-16">
          // Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              className="group cursor-pointer flex flex-col gap-4"
              onClick={() => setActiveProject(proj)}
            >
              <div className="aspect-[4/3] w-full bg-light overflow-hidden border border-dark/10 relative">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-dark/40">[{proj.id}]</span>
                  <h3 className="font-mono text-xl uppercase font-bold text-dark group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs font-mono uppercase bg-light px-2 py-1 text-dark/60">
                      {tag}
                    </span>
                  ))}
                  {proj.stack.length > 2 && (
                    <span className="text-xs font-mono uppercase bg-light px-2 py-1 text-dark/60">
                      +{proj.stack.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brutalist Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-dark/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveProject(null)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border-2 border-dark flex flex-col md:flex-row overflow-y-auto md:overflow-hidden shadow-[16px_16px_0px_0px_rgba(10,10,10,1)]">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 bg-white border border-dark w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto border-b md:border-b-0 md:border-r border-dark relative">
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
              <span className="font-mono text-sm text-dark/40 mb-2">[{activeProject.id}]</span>
              <h3 className="font-mono text-3xl md:text-5xl uppercase font-bold text-dark mb-6">
                {activeProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.stack.map((tag, i) => (
                  <span key={i} className="text-xs font-mono uppercase border border-dark/20 px-3 py-1 text-dark/80">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base md:text-lg text-dark/80 leading-relaxed mb-12 flex-1">
                {activeProject.desc}
              </p>

              <a 
                href={activeProject.link}
                className="w-full py-4 bg-dark text-white text-center font-mono uppercase tracking-widest hover:bg-accent transition-colors"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
