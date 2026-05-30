export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#050816] px-5 pt-24 pb-10 text-white md:min-h-screen md:items-center md:px-6 md:pt-28 md:pb-28"
    >
      <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <h1 className="text-[18vw] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white md:text-[12vw]">
          Austin
          <br />
          Amadi
        </h1>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-cyan-400/20 bg-[#0B1120] p-4 text-left shadow-2xl shadow-cyan-500/5 backdrop-blur-xl md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-slate-300 md:text-base md:leading-8">
{`const AustinAmadi = {
  role: "Software Engineer",
  focus: [
    "Business Systems",
    "Technology",
    "Operations",
    "Digital Strategy"
  ],

  mission: () => {
    return "Building digital systems that connect business, technology, and people.";
  }
};`}
          </pre>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 md:px-8 md:py-4"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300 md:px-8 md:py-4"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}