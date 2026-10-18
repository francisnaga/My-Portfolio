import { FaGithub, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { EMAIL, emailLink } from '../lib/contact';

const socials = [
  { label: 'GitHub', href: 'https://github.com/francisnaga', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/francisnaga', Icon: FaLinkedin },
  { label: 'TikTok', href: 'https://tiktok.com/@efobi_naga', Icon: FaTiktok },
  { label: 'X (Twitter)', href: 'https://x.com/francisnaga', Icon: FaXTwitter }
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  return (
    <footer id="contact" className="py-16 md:py-24 px-6 md:px-12 pb-28 md:pb-24 bg-foreground text-background noise-bg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        <div className="flex-1">
          <h2 className="font-mono text-xs uppercase tracking-widest text-background/50 mb-12 md:mb-16">
            // Engage
          </h2>
          <p className="font-mono text-3xl md:text-6xl uppercase font-bold mb-4 md:mb-6 text-background">
            Let’s Talk<br />Code.
          </p>
          <p className="font-sans text-base md:text-lg text-background/70 max-w-md mb-8 md:mb-12">
            Shoot me an email with what you’re trying to build, and we can figure out if it makes sense to work together.
          </p>
          
          <a href={emailLink()} translate="no" className="inline-flex items-center gap-4 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-4 focus-visible:ring-offset-foreground">
            <span className="font-mono text-lg md:text-xl uppercase tracking-widest border-b border-background pb-1 group-hover:border-accent transition-colors break-all">
              {EMAIL}
            </span>
            <svg aria-hidden="true" className="w-5 h-5 shrink-0 group-hover:text-accent group-hover:translate-x-2 transition-[color,transform] hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="w-full md:w-auto font-mono text-xs uppercase tracking-widest text-background/50 flex flex-col md:items-end gap-6 mt-8 md:mt-0">
          <p className="hidden md:block mb-2" id="social-heading">Social</p>
          <ul className="flex gap-4" aria-labelledby="social-heading">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="w-11 h-11 flex items-center justify-center hover:text-background hover:scale-110 transition-[color,transform] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-offset-4 focus-visible:ring-offset-foreground rounded-sm"
                >
                  <Icon size={28} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="normal-case tracking-normal text-background/70">
            © {CURRENT_YEAR} Efobi Francis Chibundo
          </p>
        </div>
        
      </div>
    </footer>
  );
}
