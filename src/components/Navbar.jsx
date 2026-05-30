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
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050816]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <img
          src="/profile.png"
          alt="Austin Amadi"
          className="h-10 w-10 rounded-full border border-cyan-400/40 object-cover object-top"
        />

        <div className="hidden items-center gap-10 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400 transition hover:text-cyan-400"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 hover:text-cyan-400"
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