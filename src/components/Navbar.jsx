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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:justify-center md:py-3">
        <img
          src="/profile.png"
          alt="Austin Amadi"
          className="h-12 w-12 rounded-full border border-cyan-400/50 object-cover object-top md:mr-8 md:h-10 md:w-10"
        />

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400 hover:text-cyan-400">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/10 md:hidden"
        >
          <span className="h-0.5 w-7 rounded-full bg-white" />
          <span className="h-0.5 w-7 rounded-full bg-white" />
          <span className="h-0.5 w-7 rounded-full bg-white" />
        </button>
      </nav>

      {open && (
        <div className="absolute left-0 top-full z-[9999] w-full border-t border-white/10 bg-[#050816] px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
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