import { useState, useEffect } from 'react';

const projects = [
  {
    id: "01",
    title: "NCB Finance",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    desc: "Invoicing and payments platform for Nigerian freelancers and CAC-registered businesses. FIRS/NRS e-invoicing compliance, dark luxury fintech aesthetic, and Paystack integration.",
    link: "#"
  },
  {
    id: "02",
    title: "Vantage",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    desc: "Job application tracker with a premium SaaS aesthetic. Minimalist, built for job seekers to track pipelines.",
    link: "#"
  },
  {
    id: "03",
    title: "NairaLens",
    stack: ["Next.js", "Supabase"],
    desc: "Nigerian financial transparency platform: BNPL plan comparison, vendor legitimacy checking, remittance rate comparison, and live Naira rate tracking.",
    link: "#"
  },
  {
    id: "04",
    title: "Classync",
    stack: ["Next.js", "PWA", "Supabase"],
    desc: "Edtech PWA for Nigerian university students with Student/Rep/Admin roles and a full approval workflow.",
    link: "#"
  },
  {
    id: "05",
    title: "Inkto",
    stack: ["React Native", "Kotlin", "Supabase", "Gemini AI"],
    desc: "AI-powered legal document platform: scans and transcribes handwritten legal documents (affidavits, motions, letters) to formatted DOCX using on-device scanning and cloud AI transcription. Built for a practicing Nigerian lawyer.",
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
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12 md:mb-16">
          // Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              className="group cursor-pointer flex flex-col justify-between p-6 md:p-8 bg-light border border-dark/10 hover:border-accent hover:bg-white transition-all duration-300 min-h-[250px] hover:shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]"
              onClick={() => setActiveProject(proj)}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-dark/40 group-hover:text-accent/60 transition-colors">[{proj.id}]</span>
                  <svg className="w-5 h-5 text-dark/20 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="font-mono text-2xl uppercase font-bold text-dark group-hover:text-accent transition-colors mb-4">
                  {proj.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.stack.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono uppercase bg-dark/5 px-2 py-1 text-dark/60 border border-dark/5 group-hover:border-dark/20 group-hover:bg-white transition-colors">
                    {tag}
                  </span>
                ))}
                {proj.stack.length > 3 && (
                  <span className="text-[10px] font-mono uppercase bg-dark/5 px-2 py-1 text-dark/60 border border-dark/5 group-hover:border-dark/20 group-hover:bg-white transition-colors">
                    +{proj.stack.length - 3}
                  </span>
                )}
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
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white border-2 border-dark flex flex-col overflow-y-auto shadow-[16px_16px_0px_0px_rgba(10,10,10,1)]">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 bg-white border border-dark w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="w-full p-8 md:p-12 flex flex-col">
              <span className="font-mono text-sm text-dark/40 mb-2">[{activeProject.id}]</span>
              <h3 className="font-mono text-4xl md:text-5xl uppercase font-bold text-dark mb-6 pr-12">
                {activeProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-dark/10">
                {activeProject.stack.map((tag, i) => (
                  <span key={i} className="text-xs font-mono uppercase border border-dark/20 px-3 py-1 text-dark/80 bg-light">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-lg md:text-xl text-dark/80 leading-relaxed mb-12 flex-1">
                {activeProject.desc}
              </p>

              <div className="flex gap-4">
                <a 
                  href={activeProject.link}
                  className="flex-1 py-4 bg-dark text-white text-center font-mono uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href="#"
                  className="flex-1 py-4 border border-dark text-dark text-center font-mono uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
