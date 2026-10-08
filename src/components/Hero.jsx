export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col md:flex-row border-b border-dark/10">
      {/* 60% Left Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-end p-6 md:p-12 pb-16 md:pb-24 pt-32 md:pt-12 bg-white">
        <h1 className="font-mono text-5xl md:text-6xl lg:text-8xl uppercase font-bold text-dark leading-[0.9] mb-8">
          I BUILD IT.<br />
          I LAUNCH IT.<br />
          I HELP YOU<br />
          GROW IT.
        </h1>
        <p className="font-sans text-base md:text-xl max-w-md text-dark/80">
          Hey, I'm Naga. I write code for websites and mobile apps. I don't use bloated templates or page builders. Just raw code that loads fast and gets the job done.
        </p>
      </div>
      
      {/* 40% Right Side (Accent) */}
      <div className="w-full md:w-[40%] h-48 md:h-auto bg-accent border-t md:border-t-0 md:border-l border-dark/10 flex items-end p-6 md:p-12 relative">
        <div className="font-mono text-white/50 text-sm md:text-base uppercase tracking-widest leading-loose">
          LAGOS, NG<br />
          EST. 2023
        </div>
      </div>
    </section>
  );
}
