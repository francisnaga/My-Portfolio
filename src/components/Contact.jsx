export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-dark text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex-1">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-16">
            // Engage
          </h2>
          <h3 className="font-mono text-4xl md:text-6xl uppercase font-bold mb-6">
            Let's Talk<br />Code.
          </h3>
          <p className="font-sans text-lg text-white/70 max-w-md mb-12">
            No endless discovery calls. Drop me a line with your project details and budget. I will tell you if we are a fit.
          </p>
          
          <a href="mailto:hello@francisnaga.site" className="inline-flex items-center gap-4 group">
            <span className="font-mono text-xl uppercase tracking-widest border-b border-white pb-1 group-hover:border-accent transition-colors">
              hello@francisnaga.site
            </span>
            <svg className="w-5 h-5 group-hover:text-accent group-hover:translate-x-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="w-full md:w-auto font-mono text-xs uppercase tracking-widest text-white/50 flex flex-col gap-4">
          <p>Social</p>
          <a href="#" className="hover:text-white transition-colors">LinkedIn //</a>
          <a href="#" className="hover:text-white transition-colors">GitHub //</a>
        </div>
        
      </div>
    </section>
  );
}
