import { useState } from 'react';

const allServices = [
  {
    id: "01",
    title: "Mobile App Development",
    price: "₦500k+",
    range: "₦500k - 3.5M+",
    desc: "Custom Android & iOS apps built from idea to launch: clean design, fast performance.",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[300px]",
    icon: (
      <div className="flex gap-2">
        <svg className="w-8 h-8 text-dark/40" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.56-.38-.85-.22-.29.15-.41.54-.24.85l1.83 3.18C2.73 11.51 0 15.65 0 20h24c0-4.35-2.73-8.49-6.4-10.52zm-11.4 7.4c-.65 0-1.18-.53-1.18-1.18 0-.66.53-1.19 1.18-1.19.66 0 1.19.53 1.19 1.19 0 .65-.53 1.18-1.19 1.18zm11.6 0c-.65 0-1.18-.53-1.18-1.18 0-.66.53-1.19 1.18-1.19.66 0 1.19.53 1.19 1.19 0 .65-.53 1.18-1.19 1.18z"/></svg>
        <svg className="w-8 h-8 text-dark/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
      </div>
    )
  },
  {
    id: "02",
    title: "Website Development",
    price: "₦100k+",
    range: "₦100k - 800k",
    desc: "Modern, mobile-friendly websites for businesses: fast, easy to manage, built to convert.",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[300px]",
    icon: (
      <svg className="w-10 h-10 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )
  },
  {
    id: "03",
    title: "AI Tools & Chatbots",
    price: "₦150k+",
    range: "₦150k - 1.5M",
    desc: "AI-powered tools and chatbots that answer customers, save time and cut costs.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: (
      <svg className="w-10 h-10 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    id: "04",
    title: "Python Automation",
    price: "₦30k+",
    range: "₦30k - 300k",
    desc: "Custom scripts, bots and data tools that automate repetitive work.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: (
      <svg className="w-10 h-10 text-dark/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12.016 1c-5.83 0-6.103 2.502-6.103 2.502l.013 2.628H12.01c2.81 0 2.802 1.341 2.802 1.341v3.292h-5.69v-1.12H3.72s-1.897-.107-1.897 4.148c0 4.254 1.583 4.148 1.583 4.148h1.696v-2.383s.032-2.906 2.894-2.906h6.012s2.617.067 2.617-2.735v-5.65c0-3.21-2.94-3.265-2.94-3.265h-1.67zm-2.882 1.838a.925.925 0 0 1 .927.923.925.925 0 0 1-.927.925.925.925 0 0 1-.924-.925c0-.51.415-.923.924-.923zM14.86 8.767c-2.811 0-2.803-1.34-2.803-1.34v-3.293H17.75v1.12h5.402s1.897.106 1.897-4.147c0-4.254-1.583-4.148-1.583-4.148h-1.697v2.384s-.031 2.905-2.893 2.905H12.86s-2.616-.067-2.616 2.735v5.651c0 3.209 2.94 3.264 2.94 3.264h1.67C20.69 23 20.963 20.498 20.963 20.498l-.014-2.628H14.86zM17.742 20.24a.925.925 0 0 1-.926-.923.925.925 0 0 1 .926-.925.925.925 0 0 1 .924.925c0 .51-.414.923-.924.923z"/></svg>
    )
  },
  {
    id: "05",
    title: "Facebook & Social Ads",
    price: "₦100k/mo",
    range: "₦100k - 400k/month",
    desc: "Ad campaigns that bring real leads and sales. Setup, tracking and weekly optimisation.",
    colSpan: "md:col-span-1 min-h-[200px]",
    icon: null
  },
  {
    id: "06",
    title: "Google Business",
    price: "₦20k+",
    range: "₦20k - 80k",
    desc: "I set up and optimise your business on Google Search and Maps.",
    colSpan: "md:col-span-1 min-h-[200px]",
    icon: null
  },
  {
    id: "07",
    title: "WhatsApp Setup",
    price: "₦15k+",
    range: "₦15k - 60k",
    desc: "Full professional setup: profile, catalog, auto-replies.",
    colSpan: "md:col-span-1 min-h-[200px]",
    icon: null
  },
  {
    id: "08",
    title: "Tech Support",
    price: "₦5k+",
    range: "₦5k - 50k",
    desc: "Stuck with a bug or setup? I diagnose and fix it fast.",
    colSpan: "md:col-span-1 min-h-[200px]",
    icon: null
  },
  {
    id: "09",
    title: "Business Launch",
    price: "₦250k+",
    range: "₦250k - 900k",
    desc: "Website, Google Business, WhatsApp setup and a launch ad campaign.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: null
  },
  {
    id: "10",
    title: "Free Consultation",
    price: "Free",
    range: "Free",
    desc: "In 15-20 minutes I'll tell you what's possible, time, and cost. No pressure.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: null
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 border-b border-dark/10 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12">
          // Services & Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {allServices.map((svc) => (
            <div 
              key={svc.id}
              className={`group relative overflow-hidden border border-dark/10 bg-white transition-all duration-300 ${svc.colSpan} ${activeId === svc.id ? 'border-accent shadow-[8px_8px_0px_0px_rgba(0,47,167,1)]' : 'hover:border-accent hover:shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]'}`}
              onMouseEnter={() => setActiveId(svc.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
            >
              
              {/* Default State */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${activeId === svc.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-sm text-dark/40">[{svc.id}]</span>
                    {svc.icon && (
                      <div className="group-hover:text-accent transition-colors">
                        {svc.icon}
                      </div>
                    )}
                  </div>
                  <h3 className="font-mono text-2xl uppercase font-bold text-dark group-hover:text-accent transition-colors">
                    {svc.title}
                  </h3>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-mono text-sm font-bold text-dark/70">
                    {svc.price}
                  </span>
                  <svg className="w-5 h-5 text-dark/20 group-hover:text-accent transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover / Active State Details */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-between bg-white transition-opacity duration-300 ${activeId === svc.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
                  <h3 className="font-mono text-lg uppercase font-bold text-accent mb-2">
                    {svc.title}
                  </h3>
                  <p className="font-sans text-sm text-dark/80 mb-4 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="font-mono text-xs text-dark/60 border-t border-dark/10 pt-3">
                    <strong className="text-dark">Range:</strong> {svc.range}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 pt-4 border-t border-dark/10">
                  <a 
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 bg-dark text-white font-mono text-[10px] uppercase tracking-widest hover:bg-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:hello@francisnaga.site"
                    className="flex-1 text-center py-2 border border-dark text-dark font-mono text-[10px] uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Email
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
