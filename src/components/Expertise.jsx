const expertise = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    text: "I build responsive frontend interfaces, backend APIs, database-driven platforms, and deployed web applications.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    icon: "⚙️",
    title: "Business Systems",
    text: "I design digital systems that support bookings, workflows, operations, customer engagement, and business growth.",
    tags: ["Automation", "Workflows", "Dashboards", "Booking Systems"],
  },
  {
    icon: "📈",
    title: "Digital Operations",
    text: "I connect technology, marketing, and operations to improve user experience, engagement, and execution.",
    tags: ["Operations", "Analytics", "Marketing", "Strategy"],
  },
  {
    icon: "🎨",
    title: "Creative Web Design",
    text: "I create clean, modern, responsive web experiences with strong visual identity and user-focused design.",
    tags: ["UI Design", "Branding", "Responsive Design", "Graphic Design"],
  },
];

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-20 text-white">
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="tracking-[0.25em] text-cyan-400">
          WHAT I DO BEST
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">
          Core Expertise
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          I combine software engineering, digital operations, design, and
          business thinking to build practical solutions that solve real problems.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-xl hover:shadow-cyan-500/10"
              style={{
                animation: `expertiseFadeUp 0.7s ease forwards`,
                animationDelay: `${index * 120}ms`,
                opacity: 0,
              }}
            >
              <div className="absolute -right-16 -top-16 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/30" />

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl shadow-lg shadow-cyan-500/20">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white transition duration-300 group-hover:text-cyan-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}