export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col md:flex-row border-b border-dark/10">
      {/* 60% Left Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-center md:justify-end p-6 md:p-12 pt-32 md:pb-12 bg-white flex-grow">
        <h1 className="font-mono text-5xl md:text-8xl font-bold leading-[1] md:leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 text-dark mt-12 md:mt-0">
          Build.<br />
          Ship.<br />
          Scale.
        </h1>
        <p className="font-sans text-base md:text-xl max-w-md text-dark/80">
          I am Naga. I engineer custom web and mobile applications for ambitious businesses. No templates. No bloat. Just clean code built to convert.
        </p>
      </div>
      
      {/* 40% Right Side - Accent Block */}
      <div className="w-full md:w-[40%] bg-accent min-h-[20vh] md:min-h-screen flex items-end p-6 md:p-12 border-t md:border-t-0 md:border-l border-dark/10 shrink-0">
        <div className="text-white font-mono text-sm uppercase tracking-widest flex w-full justify-between md:flex-col md:justify-end md:items-start gap-2">
          <p>Lagos, NG</p>
          <p>EST. 2023</p>
        </div>
      </div>
    </section>
  );
}
