export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start mix-blend-difference text-white">
      <div className="font-mono text-sm tracking-widest uppercase">
        Naga Digital [01]
      </div>
      <div className="flex flex-col items-end gap-2 text-sm font-mono uppercase tracking-widest">
        <a href="#work" className="hover:text-accent transition-colors duration-200">Work</a>
        <a href="#services" className="hover:text-accent transition-colors duration-200">Services</a>
        <a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a>
      </div>
    </nav>
  );
}
