import { useState } from 'react';

const allServices = [
  {
    id: "01",
    title: "Mobile App Development",
    price: "₦500,000",
    range: "₦500k - 3.5M+",
    desc: "Custom Android & iOS apps built from idea to launch: clean design, fast performance, and support after delivery. Message me to get an exact quote."
  },
  {
    id: "02",
    title: "Website Development",
    price: "₦100,000",
    range: "₦100k - 800k",
    desc: "Modern, mobile-friendly websites for businesses and brands: fast, easy to manage, and built to convert visitors into clients."
  },
  {
    id: "03",
    title: "AI Tools & Chatbots",
    price: "₦150,000",
    range: "₦150k - 1.5M",
    desc: "AI-powered tools, chatbots and workflows that answer customers, save time and cut costs."
  },
  {
    id: "04",
    title: "Python Automation",
    price: "₦30,000",
    range: "₦30k - 300k",
    desc: "Custom scripts, bots and data tools that automate repetitive work."
  },
  {
    id: "05",
    title: "Facebook & Social Ads",
    price: "₦100,000",
    range: "₦100k - 400k/month",
    desc: "Ad campaigns that bring real leads and sales: audience research, ad creatives, setup, tracking and weekly optimisation. Your ad budget is paid separately to Meta."
  },
  {
    id: "06",
    title: "Google Business Profile Setup",
    price: "₦20,000",
    range: "₦20k - 80k",
    desc: "I set up and optimise your business on Google Search and Maps so nearby customers can find you and call you: correct info, photos, categories, hours."
  },
  {
    id: "07",
    title: "WhatsApp Business Setup",
    price: "₦15,000",
    range: "₦15k - 60k",
    desc: "Full professional setup: profile, catalog, auto-replies, quick replies and labels, so your business looks credible and responds instantly."
  },
  {
    id: "08",
    title: "Tech Support & Fixes",
    price: "₦5,000",
    range: "₦5k - 50k",
    desc: "Stuck with a bug, account, setup or any tech roadblock? I diagnose and fix it fast."
  },
  {
    id: "09",
    title: "Business Launch Package",
    price: "₦250,000",
    range: "₦250k - 900k",
    desc: "Everything to get a business online and getting customers: website, Google Business Profile, WhatsApp Business setup and a launch ad campaign."
  },
  {
    id: "10",
    title: "Free Consultation",
    price: "₦0",
    range: "Free",
    desc: "Tell me your idea or problem. In 15-20 minutes I'll tell you what's possible, how long it takes and what it costs. No pressure."
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 border-b border-dark/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-12">
          // Services & Pricing
        </h2>
      </div>

      <div className="w-full border-t border-dark/20 flex flex-col">
        {allServices.map((svc) => (
          <div 
            key={svc.id}
            className={`w-full border-b border-dark/20 transition-colors duration-300 ${activeId === svc.id ? 'bg-light' : 'bg-white hover:bg-light/50'}`}
            onMouseEnter={() => setActiveId(svc.id)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
          >
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 cursor-pointer">
              {/* Header Row */}
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono text-sm text-dark/40">[{svc.id}]</span>
                  <h3 className={`font-mono text-lg md:text-2xl uppercase font-bold transition-colors ${activeId === svc.id ? 'text-accent' : 'text-dark'}`}>
                    {svc.title}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="text-dark/40">
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${activeId === svc.id ? 'rotate-90 text-accent' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Expandable Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === svc.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 pb-2">
                  <div className="flex-1">
                    <p className="font-sans text-base md:text-lg text-dark/80 max-w-2xl">
                      {svc.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6 md:w-64 shrink-0">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-dark/40 mb-1">Starting Price</div>
                      <div className="font-mono text-xl font-bold text-dark">{svc.price}</div>
                      <div className="font-mono text-xs text-dark/60 mt-1">Range: {svc.range}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                      <a 
                        href="https://wa.me/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center py-3 border-2 border-dark text-dark font-mono text-xs uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
                      >
                        WhatsApp
                      </a>
                      <a 
                        href="mailto:hello@francisnaga.site"
                        className="w-full text-center py-3 bg-dark text-white font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
