export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 pt-12 md:p-12 z-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mix-blend-difference text-white pointer-events-none">
      <div className="font-mono text-sm md:text-base tracking-widest uppercase pointer-events-auto font-bold">
        Naga Digital
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-8 text-xs md:text-base font-mono uppercase tracking-widest pointer-events-auto">
        <a href="#work" className="hover:text-accent transition-colors duration-200">Work</a>
        <a href="#services" className="hover:text-accent transition-colors duration-200">Services</a>
        <a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a>
      </div>
    </nav>
  );
}
