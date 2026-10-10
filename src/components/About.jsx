import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-background border-b border-foreground/10 noise-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-12 md:mb-16">
          // The Builder
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Main Bio */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-3xl md:text-5xl uppercase font-bold text-foreground mb-8">
              Efobi Francis Chibundo
            </h3>
            
            <div className="space-y-6 font-sans text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm Naga, a software developer and student builder focused on creating practical digital products across web, mobile, AI, and automation. 
              </p>
              <p>
                I build full-stack applications, AI-powered tools, and business websites, combining software development with product thinking to solve real problems. I'm currently studying Marine Engineering at Nigeria Maritime University and hold NIIT certificates in Web Development and Python.
              </p>
            </div>

            {/* Metrics & Evidence */}
            <div className="mt-12">
              <div className="border-l-2 border-accent pl-6 py-2">
                <span className="block font-mono text-3xl font-bold text-foreground mb-1">₦80M+</span>
                <span className="font-mono text-sm text-foreground/60 uppercase tracking-wide">
                  Enterprise Lead Pipeline
                </span>
                <p className="mt-2 text-sm text-foreground/70 max-w-lg">
                  Architected and executed a high-conversion digital marketing campaign that successfully generated an ₦80M enterprise business opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            
            <div className="bg-foreground/5 border border-foreground/10 p-6">
              <h4 className="font-mono text-sm uppercase tracking-widest text-foreground/50 mb-4 border-b border-foreground/10 pb-2">
                Education
              </h4>
              <p className="font-mono font-bold text-foreground">
                B.Eng. Marine Engineering
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                Nigeria Maritime University (NMU)
              </p>
              <p className="text-xs text-accent mt-2 font-mono uppercase">
                2024–2029
              </p>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 p-6">
              <h4 className="font-mono text-sm uppercase tracking-widest text-foreground/50 mb-4 border-b border-foreground/10 pb-2">
                Certifications
              </h4>
              <ul className="space-y-3 font-mono text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent">▹</span> NIIT Web Development
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">▹</span> NIIT Python Programming
                </li>
              </ul>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 p-6">
              <h4 className="font-mono text-sm uppercase tracking-widest text-foreground/50 mb-4 border-b border-foreground/10 pb-2">
                Location
              </h4>
              <p className="font-mono text-foreground flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                Nigeria
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
