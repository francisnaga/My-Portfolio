export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 border-b border-dark/10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3">
          <h2 className="font-mono text-3xl md:text-5xl uppercase font-bold text-dark leading-[1.1] mb-6">
            MORE THAN JUST <span className="text-accent italic">CODE.</span>
          </h2>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <p className="font-sans text-lg md:text-xl text-dark/80 max-w-2xl leading-relaxed">
            I believe that true craftsmanship lies in the details. It's not just about writing code; it's about building scalable, elegant, and efficient solutions.
          </p>
          <p className="font-sans text-lg md:text-xl text-dark/80 max-w-2xl leading-relaxed">
            As a certified Web and Python Developer (NIIT), I bridge the gap between complex engineering and seamless user experiences.
          </p>

          <div className="flex gap-12 mt-8">
            <div className="flex flex-col">
              <span className="font-mono text-5xl font-bold text-dark mb-2">3+</span>
              <span className="font-mono text-sm uppercase tracking-widest text-dark/50">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-5xl font-bold text-dark mb-2">20+</span>
              <span className="font-mono text-sm uppercase tracking-widest text-dark/50">Projects</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
