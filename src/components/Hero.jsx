export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#050816] px-6 pt-24 pb-12 text-white md:items-center md:pt-28 md:pb-28"
    >
      <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        

        <h1 className="mt-8 text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white md:text-[12vw]">
          Austin
          <br />
          Amadi
        </h1>

        <div className="mt-8 max-w-4xl rounded-2xl border border-cyan-400/20 bg-[#0B1120] p-6 text-left shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

  {/* Fake Terminal Top Bar */}
  <div className="mb-5 flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-red-400" />
    <div className="h-3 w-3 rounded-full bg-yellow-400" />
    <div className="h-3 w-3 rounded-full bg-green-400" />
  </div>

  {/* Code Style Text */}
  <pre className="overflow-x-auto text-sm leading-8 text-slate-300 md:text-base">

{`const AustinAmadi = {
  role: "Software Engineer",
  focus: [
    "Business Systems",
    "Technology",
    "Operations",
    "Digital Strategy"
  ],

  mission: () => {
    return "Building digital systems that connect business, technology, and people — helping organizations grow, communicate, and operate better.";
  }
};`}
    
  </pre>

</div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}