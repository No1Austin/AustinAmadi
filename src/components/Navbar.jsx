import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">
      
      {/* DESKTOP NAV */}
      <nav className="mx-auto hidden max-w-7xl items-center justify-center px-5 py-3 md:flex">
        <div className="flex items-center gap-8">
          
          {/* Profile Image With Hover Popup */}
          <div className="group relative">
            <img
              src="/profile.png"
              alt="Austin Amadi"
              className="h-10 w-10 rounded-full border border-cyan-400/50 object-cover object-top shadow-md shadow-cyan-500/20 transition-all duration-300 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute left-1/2 top-14 z-[10000] w-56 -translate-x-1/2 scale-90 overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#050816] opacity-0 shadow-2xl shadow-cyan-500/20 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <img
                src="/profile.png"
                alt="Austin Amadi"
                className="h-72 w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Desktop Links */}
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400 transition-all duration-300 hover:text-cyan-400"
            >
              {label}
            </a>
          ))}

        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:hidden">
        
        <img
          src="/profile.png"
          alt="Austin Amadi"
          className="h-10 w-10 rounded-full border border-cyan-400/50 object-cover object-top shadow-md shadow-cyan-500/20"
        />

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5"
          aria-label="Toggle navigation menu"
        >
          <span className="h-0.5 w-6 rounded-full bg-white" />
          <span className="h-0.5 w-6 rounded-full bg-white" />
          <span className="h-0.5 w-6 rounded-full bg-white" />
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute left-0 top-full z-[9999] w-full border-t border-white/10 bg-[#050816]/98 px-5 py-6 shadow-2xl shadow-cyan-500/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}