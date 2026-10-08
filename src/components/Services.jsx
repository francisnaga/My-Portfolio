import { useState } from 'react';
import { FaApple, FaAndroid, FaGooglePlay, FaAppStoreIos, FaPython, FaFacebook, FaInstagram, FaTiktok, FaGoogle } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { Rocket } from 'lucide-react'; // Wait, lucide-react is not installed, I'll use a FontAwesome rocket instead
import { FaRocket } from 'react-icons/fa';

const allServices = [
  {
    id: "01",
    title: "Mobile App Development",
    price: "₦500k+",
    range: "₦500k - 3.5M+",
    desc: "Custom Android & iOS apps built from idea to launch: clean design, fast performance.",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[300px]",
    icon: (
      <div className="flex gap-2 text-dark/40">
        <FaApple size={32} />
        <FaAndroid size={32} />
        <FaGooglePlay size={32} />
        <FaAppStoreIos size={32} />
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
    icon: <FaComputer size={36} className="text-dark/40" />
  },
  {
    id: "03",
    title: "AI Tools & Chatbots",
    price: "₦150k+",
    range: "₦150k - 1.5M",
    desc: "AI-powered tools and chatbots that answer customers, save time and cut costs.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: <BsStars size={36} className="text-dark/40" />
  },
  {
    id: "04",
    title: "Python Automation",
    price: "₦30k+",
    range: "₦30k - 300k",
    desc: "Custom scripts, bots and data tools that automate repetitive work.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: <FaPython size={36} className="text-dark/40" />
  },
  {
    id: "05",
    title: "Facebook & Social Ads",
    price: "₦100k/mo",
    range: "₦100k - 400k/month",
    desc: "Ad campaigns that bring real leads and sales. Setup, tracking and weekly optimisation.",
    colSpan: "md:col-span-2 min-h-[200px]",
    icon: (
      <div className="flex gap-2 text-dark/40">
        <FaFacebook size={32} />
        <FaInstagram size={32} />
        <FaTiktok size={32} />
      </div>
    )
  },
  {
    id: "06",
    title: "Google Business",
    price: "₦20k+",
    range: "₦20k - 80k",
    desc: "I set up and optimise your business on Google Search and Maps.",
    colSpan: "md:col-span-2 min-h-[200px]",
    icon: <FaGoogle size={32} className="text-dark/40" />
  },
  {
    id: "07",
    title: "Business Launch",
    price: "₦250k+",
    range: "₦250k - 900k",
    desc: "Website, Google Business, WhatsApp setup and a launch ad campaign.",
    colSpan: "md:col-span-4 min-h-[250px]",
    icon: <FaRocket size={36} className="text-dark/40" />
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
                    href="https://wa.me/2349130436032"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 bg-dark text-white font-mono text-[10px] uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:hello@francisnaga.site"
                    className="flex-1 text-center py-2 border border-dark text-dark font-mono text-[10px] uppercase tracking-widest hover:bg-dark hover:text-white transition-colors flex items-center justify-center"
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
