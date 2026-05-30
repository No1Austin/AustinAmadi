export default function Navbar() {
  const links = [
    ["Home", "#home"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="group relative">
            <img
              src="/profile.png"
              alt="Austin Amadi"
              className="h-10 w-10 rounded-full border border-cyan-400/40 object-cover object-top shadow-md shadow-cyan-500/20"
            />

            <div className="pointer-events-none absolute left-1/2 top-14 z-50 w-56 -translate-x-1/2 scale-90 overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#050816] opacity-0 shadow-2xl shadow-cyan-500/20 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <img
                src="/profile.png"
                alt="Austin Amadi"
                className="h-72 w-full object-cover object-top"
              />
            </div>
          </div>

          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative text-xs font-medium uppercase tracking-[0.25em] text-slate-400 transition-all duration-300 hover:text-cyan-400"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}