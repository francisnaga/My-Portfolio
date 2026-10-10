import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-dark text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex-1">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-12 md:mb-16">
            // Engage
          </h2>
          <h3 className="font-mono text-3xl md:text-6xl uppercase font-bold mb-4 md:mb-6">
            Let's Talk<br />Code.
          </h3>
          <p className="font-sans text-base md:text-lg text-white/70 max-w-md mb-8 md:mb-12">
            Shoot me an email with what you're trying to build, and we can figure out if it makes sense to work together.
          </p>
          
          <a href="mailto:hello@francisnaga.site" className="inline-flex items-center gap-4 group">
            <span className="font-mono text-lg md:text-xl uppercase tracking-widest border-b border-white pb-1 group-hover:border-accent transition-colors break-all">
              hello@francisnaga.site
            </span>
            <svg className="w-5 h-5 shrink-0 group-hover:text-accent group-hover:translate-x-2 transition-all hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="w-full md:w-auto font-mono text-xs uppercase tracking-widest text-white/50 flex flex-col md:items-end gap-6 mt-8 md:mt-0">
          <p className="hidden md:block mb-2">Social</p>
          <div className="flex gap-6">
            <a href="https://github.com/francisnaga" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/francisnaga" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <FaLinkedin size={28} />
            </a>
            <a href="https://tiktok.com/@efobi_naga" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <FaTiktok size={28} />
            </a>
            <a href="https://twitter.com/francisnaga" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
