export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row border-b border-dark/10">
      {/* 60% Left Side */}
      <div className="w-full md:w-[60%] flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-12 bg-white">
        <h1 className="font-mono text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase mb-6 text-dark">
          Build.<br />
          Ship.<br />
          Scale.
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-md text-dark/80">
          I am Naga. I engineer custom web and mobile applications for ambitious businesses. No templates. No bloat. Just clean code built to convert.
        </p>
      </div>
      
      {/* 40% Right Side - Accent Block */}
      <div className="w-full md:w-[40%] bg-accent min-h-[50vh] md:min-h-screen flex items-end p-6 md:p-12">
        <div className="text-white font-mono text-sm uppercase tracking-widest">
          <p className="mb-2">Lagos, NG</p>
          <p>EST. 2023</p>
        </div>
      </div>
    </section>
  );
}
