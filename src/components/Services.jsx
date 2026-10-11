import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaGooglePlay, FaAppStoreIos, FaPython, FaFacebook, FaInstagram, FaTiktok, FaGoogle } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';
import { playClick } from '../utils/sound';

const allServices = [
  {
    id: "01",
    title: "Mobile App Development",
    price: "₦500k+",
    range: "₦500k - 3.5M+",
    baseNum: 500000,
    weeks: "3-6 weeks",
    desc: "Custom Android & iOS apps built from idea to launch: clean design, fast performance, native Kotlin bridges and React Native.",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[300px]",
    icon: (
      <div className="flex gap-2 text-foreground/40">
        <FaApple size={30} />
        <FaAndroid size={30} />
        <FaGooglePlay size={28} />
        <FaAppStoreIos size={28} />
      </div>
    )
  },
  {
    id: "02",
    title: "Website Development",
    price: "₦100k+",
    range: "₦100k - 800k",
    baseNum: 100000,
    weeks: "1-3 weeks",
    desc: "Modern, high-converting websites and web apps: fast, mobile-first, easy to manage, and built strictly in raw code (Next.js/React).",
    colSpan: "md:col-span-2 md:row-span-2 min-h-[300px]",
    icon: <FaComputer size={34} className="text-foreground/40" />
  },
  {
    id: "03",
    title: "AI Tools & Chatbots",
    price: "₦150k+",
    range: "₦150k - 1.5M",
    baseNum: 150000,
    weeks: "2-4 weeks",
    desc: "Applied AI tools, custom OCR document scanners, and intelligent customer support chatbots that automate repetitive workflows.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: <BsStars size={34} className="text-foreground/40" />
  },
  {
    id: "04",
    title: "Python Automation",
    price: "₦30k+",
    range: "₦30k - 300k",
    baseNum: 300000,
    weeks: "3-7 days",
    desc: "Custom scripts, automated scrapers, data pipelines, and scheduled bots that eliminate repetitive manual work.",
    colSpan: "md:col-span-2 min-h-[250px]",
    icon: <FaPython size={34} className="text-foreground/40" />
  },
  {
    id: "05",
    title: "Facebook & Social Ads",
    price: "₦100k/mo",
    range: "₦100k - 400k/month",
    baseNum: 100000,
    weeks: "Ongoing",
    desc: "Targeted ad campaigns designed for real lead conversion. Setup, tracking pixels, audience testing, and weekly optimization.",
    colSpan: "md:col-span-2 min-h-[200px]",
    icon: (
      <div className="flex gap-2 text-foreground/40">
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaTiktok size={30} />
      </div>
    )
  },
  {
    id: "06",
    title: "Google Business",
    price: "₦20k+",
    range: "₦20k - 80k",
    baseNum: 20000,
    weeks: "2-4 days",
    desc: "Complete setup and local SEO optimization for your business on Google Search and Maps to drive local customer footfall.",
    colSpan: "md:col-span-2 min-h-[200px]",
    icon: <FaGoogle size={30} className="text-foreground/40" />
  },
  {
    id: "07",
    title: "Business Launch",
    price: "₦250k+",
    range: "₦250k - 900k",
    baseNum: 250000,
    weeks: "2-3 weeks",
    desc: "Full digital go-to-market package: custom website, Google Business verification, WhatsApp CRM setup, and launch ad campaign.",
    colSpan: "md:col-span-4 min-h-[240px]",
    icon: <FaRocket size={34} className="text-foreground/40" />
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);
  
  // Interactive Project Cost Estimator state
  const [selectedServices, setSelectedServices] = useState(["01"]); // Mobile app default

  const toggleServiceSelect = (id) => {
    playClick(650, 'sine', 0.03);
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const selectedList = allServices.filter(s => selectedServices.includes(s.id));
  const estimatedTotal = selectedList.reduce((acc, curr) => acc + curr.baseNum, 0);
  const formattedEstimate = `₦${(estimatedTotal / 1000).toLocaleString()}k+`;

  const waMessage = encodeURIComponent(
    `Hello Naga, I checked your portfolio and I'm interested in building: ${selectedList.map(s => s.title).join(', ')}. Estimated base scope is around ${formattedEstimate}. Let's discuss!`
  );

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 border-b border-foreground/10 bg-background noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
            // Engineering Services & Capabilities
          </h2>
          <h3 className="font-mono text-2xl md:text-3xl uppercase font-bold text-foreground">
            Clear Scope. Realistic Pricing.
          </h3>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {allServices.map((svc) => (
            <motion.div 
              key={svc.id}
              whileHover={{ scale: 1.01, y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className={`group relative overflow-hidden border-2 border-foreground/10 bg-white cursor-pointer ${svc.colSpan} ${
                activeId === svc.id 
                  ? 'border-accent shadow-[8px_8px_0px_0px_rgba(0,47,167,1)]' 
                  : 'hover:border-foreground hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]'
              }`}
              onMouseEnter={() => {
                playClick(500, 'sine', 0.02);
                setActiveId(svc.id);
              }}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => {
                playClick(600, 'sine', 0.03);
                setActiveId(activeId === svc.id ? null : svc.id);
              }}
            >
              
              {/* Default Face */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${activeId === svc.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-xs text-foreground/40 font-bold">[{svc.id}]</span>
                    {svc.icon && (
                      <div className="group-hover:text-accent transition-colors">
                        {svc.icon}
                      </div>
                    )}
                  </div>
                  <h4 className="font-mono text-2xl uppercase font-bold text-foreground group-hover:text-accent transition-colors">
                    {svc.title}
                  </h4>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-foreground/5">
                  <span className="font-mono text-sm font-bold text-foreground/80">
                    {svc.price}
                  </span>
                  <span className="font-mono text-xs text-foreground/40 group-hover:text-accent flex items-center gap-1 font-bold">
                    DETAILS <span>→</span>
                  </span>
                </div>
              </div>

              {/* Hover / Active Face Details */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-between bg-white transition-opacity duration-300 ${activeId === svc.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 overflow-y-auto pr-1 no-scrollbar">
                  <h4 className="font-mono text-lg uppercase font-bold text-accent mb-2">
                    {svc.title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-foreground/80 mb-4 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="font-mono text-xs text-foreground/70 border-t border-foreground/10 pt-2 space-y-1">
                    <div><strong>Budget Range:</strong> {svc.range}</div>
                    <div><strong>Est. Turnaround:</strong> {svc.weeks}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 pt-3 border-t border-foreground/10">
                  <a 
                    href="https://wa.me/2349130436032"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick(750, 'sine', 0.04);
                    }}
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:hello@francisnaga.site"
                    className="flex-1 text-center py-2 border border-foreground text-foreground font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick(750, 'sine', 0.04);
                    }}
                  >
                    Email
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Interactive Scope & Investment Calculator (Captivating Engagement) */}
        <div className="border-2 border-foreground bg-white p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-foreground/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-1">
                // Interactive Scope Estimator
              </span>
              <h4 className="font-mono text-xl md:text-2xl uppercase font-bold text-foreground">
                Build Your Target Tech Package
              </h4>
            </div>
            <div className="font-mono text-xs text-foreground/60">
              Select desired modules to calculate base investment
            </div>
          </div>

          {/* Service Module Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {allServices.slice(0, 6).map((svc) => {
              const isSelected = selectedServices.includes(svc.id);
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleServiceSelect(svc.id)}
                  className={`p-3.5 border-2 text-left font-mono transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-accent bg-accent/5 text-foreground shadow-[3px_3px_0px_0px_rgba(0,47,167,1)]'
                      : 'border-foreground/10 bg-background text-foreground/70 hover:border-foreground/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-4 h-4 border flex items-center justify-center text-[10px] font-bold ${isSelected ? 'border-accent bg-accent text-white' : 'border-foreground/30'}`}>
                      {isSelected ? '✓' : ''}
                    </span>
                    <span className="text-xs uppercase font-bold">{svc.title}</span>
                  </div>
                  <span className="text-xs text-foreground/60">{svc.price}</span>
                </button>
              );
            })}
          </div>

          {/* Live Calculation Output Bar */}
          <div className="bg-[#0B0C10] text-white p-6 border-2 border-foreground flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-1">
                Selected Modules ({selectedServices.length}) · Est. Base Scope:
              </div>
              <div className="font-mono text-3xl md:text-4xl font-black text-emerald-400">
                {formattedEstimate}
              </div>
              <div className="font-mono text-[11px] text-white/60 mt-1">
                Includes architectural design, raw code implementation, and deployment support.
              </div>
            </div>

            <a 
              href={`https://wa.me/2349130436032?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick(900, 'sine', 0.05)}
              className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-widest font-bold border-2 border-white text-center transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:scale-98"
            >
              Discuss Scope On WhatsApp ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
