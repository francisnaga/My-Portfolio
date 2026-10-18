import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaGooglePlay, FaAppStoreIos, FaPython, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { FaRocket } from 'react-icons/fa';
import { whatsappLink, emailLink } from '../lib/contact';

const allServices = [
  {
    id: "01",
    title: "Mobile App Development",
    scope: "iOS • Android • React Native",
    model: "Fixed-Scope Sprint or Milestone",
    desc: "Production mobile applications built from architectural blueprint to app store release. Native camera/hardware bridges, offline synchronization, secure local storage, and high-performance UI.",
    deliverables: "Native Kotlin Bridges • Offline-First Storage • Play Store & App Store Deployment",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: (
      <div className="flex gap-2 text-foreground/40" aria-hidden="true">
        <FaApple size={28} />
        <FaAndroid size={28} />
        <FaGooglePlay size={28} />
        <FaAppStoreIos size={28} />
      </div>
    )
  },
  {
    id: "02",
    title: "Full-Stack Web & SaaS",
    scope: "Next.js • Supabase • TypeScript",
    model: "End-to-End Product Build",
    desc: "Bespoke web applications, customer portals, and SaaS platforms engineered for security, high concurrency, and regulatory compliance with Paystack/Stripe integration and CAC/FIRS workflows.",
    deliverables: "Next.js App Router • Supabase RLS & Auth • Paystack Webhooks • E-Invoicing Engines",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: <FaComputer size={30} className="text-foreground/40" aria-hidden="true" />
  },
  {
    id: "03",
    title: "AI & Document Intelligence",
    scope: "OCR • Multimodal AI • Gemini",
    model: "Custom AI Pipeline",
    desc: "Custom on-device and cloud AI architectures: handwriting transcription, legal document parsing (affidavits, motions, agreements), structured data extraction, and automated DOCX/PDF compilation.",
    deliverables: "On-Device OCR • Gemini AI Multimodal Pipelines • DOCX Compilers • Real-Time Extraction",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: <BsStars size={30} className="text-foreground/40" aria-hidden="true" />
  },
  {
    id: "04",
    title: "Workflow & Data Automation",
    scope: "Python • Edge Workers • Bots",
    model: "Custom Integration Sprint",
    desc: "Resilient backend automation pipelines, financial comparison scrapers, custom bots, and automated customer dispatch systems that eliminate manual operational bottlenecks.",
    deliverables: "Custom Data Scrapers • Webhook Pipelines • Telegram/WhatsApp Bots • Automated ETL",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: <FaPython size={30} className="text-foreground/40" aria-hidden="true" />
  },
  {
    id: "05",
    title: "Growth & Acquisition Systems",
    scope: "Funnels • Attribution Tracking",
    model: "Growth Architecture / Retainer",
    desc: "Full-funnel digital acquisition engineering: high-converting technical landing pages, server-side attribution tracking, and targeted campaigns engineered to generate verified pipeline.",
    deliverables: "High-Conversion Funnels • Server-Side Tracking • Qualified Lead Generation • ROAS Optimization",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: (
      <div className="flex gap-2 text-foreground/40" aria-hidden="true">
        <FaFacebook size={26} />
        <FaInstagram size={26} />
        <FaTiktok size={26} />
      </div>
    )
  },
  {
    id: "06",
    title: "End-to-End Product Launch",
    scope: "0-to-1 Studio Engineering",
    model: "Complete Architecture Build",
    desc: "Comprehensive product launch execution: web platform, mobile app, compliance setup, transactional messaging, and initial go-to-market acquisition infrastructure.",
    deliverables: "Web + Mobile Unified Build • Regulatory Compliance • Payment Infrastructure • Launch Funnel",
    colSpan: "md:col-span-2 min-h-[290px]",
    icon: <FaRocket size={30} className="text-foreground/40" aria-hidden="true" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 200, damping: 20 } 
  }
};

export default function Services() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 border-b border-dark/10 bg-background noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
              // Studio Capabilities
            </h2>
            <p className="font-mono text-xl sm:text-2xl uppercase font-bold text-foreground">
              Engineering & Growth Architecture
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 self-start md:self-auto">
            Bespoke Scope • Milestone Engagements
          </span>
        </div>
        
        {/* Mobile View: Clean, full-information cards without awkward tap-toggles */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {allServices.map((svc) => (
            <article 
              key={svc.id}
              aria-labelledby={`svc-m-${svc.id}`}
              className="border border-foreground/10 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-foreground/40 font-bold" aria-hidden="true">[{svc.id}]</span>
                  {svc.icon && (
                    <div>
                      {svc.icon}
                    </div>
                  )}
                </div>
                <h3 id={`svc-m-${svc.id}`} className="font-mono text-xl uppercase font-bold text-foreground mb-1">
                  {svc.title}
                </h3>
                <span className="inline-block text-[10px] font-mono uppercase tracking-wide text-accent bg-accent/5 border border-accent/20 px-2 py-0.5 mb-3">
                  {svc.scope}
                </span>
                <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-4">
                  {svc.desc}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-foreground/70 border-t border-foreground/10 pt-3 pb-3">
                  <span className="block text-[11px] text-foreground/50 uppercase tracking-wide mb-0.5">Model</span>
                  <span className="font-semibold text-foreground">{svc.model}</span>
                </div>
                <div className="flex gap-2">
                  <a 
                    href={whatsappLink(svc.title)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Discuss ${svc.title} on WhatsApp`}
                    className="flex-1 text-center min-h-11 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold active:bg-accent transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={emailLink(svc.title)}
                    aria-label={`Email about ${svc.title}`}
                    className="flex-1 text-center min-h-11 py-2.5 border border-foreground text-foreground font-mono text-xs uppercase tracking-wider font-semibold active:bg-foreground active:text-background transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                  >
                    Email
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop View: Interactive Symmetrical Bento Grid with Hover / Focus Details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-4 gap-4 md:gap-6"
        >
          {allServices.map((svc) => {
            const isActive = activeId === svc.id;
            return (
            <motion.article 
              key={svc.id}
              aria-labelledby={`svc-d-${svc.id}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className={`group relative overflow-hidden border border-foreground/10 bg-white cursor-pointer ${svc.colSpan} ${isActive ? 'border-accent shadow-[8px_8px_0px_0px_rgba(0,47,167,1)]' : 'hover:border-accent hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]'}`}
              onMouseEnter={() => setActiveId(svc.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(isActive ? null : svc.id)}
              onFocus={() => setActiveId(svc.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setActiveId(null);
              }}
            >
              
              {/* Default State (visual overview) */}
              <div aria-hidden="true" className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-sm text-foreground/40">[{svc.id}]</span>
                    {svc.icon && (
                      <div className="group-hover:text-accent transition-colors">
                        {svc.icon}
                      </div>
                    )}
                  </div>
                  <p className="font-mono text-2xl uppercase font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {svc.title}
                  </p>
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wide text-accent bg-accent/5 border border-accent/20 px-2 py-0.5">
                    {svc.scope}
                  </span>
                </div>
                <div className="flex justify-between items-end border-t border-foreground/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    {svc.model}
                  </span>
                  <svg className="w-5 h-5 text-foreground/20 group-hover:text-accent transform transition-[color,transform] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover / Focus / Active State Details */}
              <div className={`absolute inset-0 p-6 flex flex-col justify-between bg-white transition-opacity duration-300 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
                  <div className="flex justify-between items-start mb-1">
                    <h3 id={`svc-d-${svc.id}`} className="font-mono text-lg uppercase font-bold text-accent">
                      {svc.title}
                    </h3>
                    <span className="font-mono text-xs text-foreground/40 font-bold">[{svc.id}]</span>
                  </div>
                  <p className="font-sans text-xs text-foreground/80 mb-3 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="font-mono text-[11px] text-foreground/80 border-t border-foreground/10 pt-2 mb-2">
                    <strong className="text-foreground block uppercase text-[10px] tracking-wider mb-0.5 text-accent">// Key Deliverables</strong>
                    <span>{svc.deliverables}</span>
                  </div>
                  <div className="font-mono text-[10px] text-foreground/60 uppercase tracking-wide">
                    Engagement: <strong className="text-foreground">{svc.model}</strong>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3 pt-3 border-t border-foreground/10">
                  <a 
                    href={whatsappLink(svc.title)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Discuss ${svc.title} on WhatsApp`}
                    className="flex-1 text-center py-2.5 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={emailLink(svc.title)}
                    aria-label={`Email about ${svc.title}`}
                    className="flex-1 text-center py-2.5 border border-foreground text-foreground font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Email
                  </a>
                </div>
              </div>

            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
