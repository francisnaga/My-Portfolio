export default function Hero() {
  return (
    <section className="min-h-[85svh] w-full flex flex-col items-center justify-center p-6 md:p-12 border-b border-dark/10 bg-white text-center mt-16 md:mt-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <p className="font-mono text-sm md:text-base uppercase tracking-widest text-dark/50">
          Hey, I'm Naga.
        </p>
        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl uppercase font-bold text-dark leading-[1.1]">
          I build it.<br />
          I launch it.<br />
          <span className="text-accent">I help you grow it.</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["Web Dev", "Mobile Apps", "UI/UX", "Automation", "SEO"].map((chip) => (
            <span key={chip} className="font-mono text-xs uppercase px-4 py-2 bg-light text-dark/70 border border-dark/10">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
