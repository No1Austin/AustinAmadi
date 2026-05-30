const projects = [
  {
    title: "Task Manager App",
    type: "MERN Full-Stack App",
    description:
      "A task management platform built with MongoDB, Express, React, and Node.js for organizing daily workflows.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://task-manager-app-mern-phi.vercel.app/",
  },
  {
    title: "Clinic Flow",
    type: "Healthcare Workflow System",
    description:
      "A clinic workflow system supporting patient processes, appointment flow, and healthcare operations.",
    tags: ["React", "TypeScript", "PostgreSQL", "Healthcare"],
    link: "https://clinic-flow-black-beta.vercel.app/",
  },
  {
    title: "Concensciousness",
    type: "Web Platform",
    description:
      "A professional web platform focused on structured content delivery, brand identity, and responsive user experience.",
    tags: ["React", "UI Design", "Responsive", "Branding"],
    link: "https://concensciousness.com",
  },
  {
    title: "UrBarber",
    type: "Booking Website",
    description:
      "A responsive barber service platform designed to support service discovery and booking experiences.",
    tags: ["React", "Tailwind", "Vercel", "Frontend"],
    link: "https://urbarber.com",
  },
  {
    title: "AEMA Systems",
    type: "Business Systems Platform",
    description:
      "A business website and booking system for showcasing services, collecting leads, and managing consultation requests.",
    tags: ["React", "Node.js", "PostgreSQL", "Resend"],
    link: "https://aemasystems.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >
      <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="tracking-[0.25em] text-cyan-400">
          SELECTED WORKS
        </p>

        <h2 className="mt-4 text-5xl font-black uppercase text-white md:text-7xl">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-400">
          A collection of real projects I have designed, developed, and deployed
          across full-stack applications, business websites, and workflow systems.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animation: `projectFadeUp 0.7s ease forwards`,
                animationDelay: `${index * 120}ms`,
                opacity: 0,
              }}
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition duration-500 group-hover:bg-cyan-400/25" />

              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                {project.type}
              </p>

              <h3 className="mt-5 text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-cyan-300 md:text-3xl">
                {project.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-400 transition duration-300 group-hover:text-slate-300">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center font-bold text-cyan-400 transition duration-300 group-hover:translate-x-2">
                View Project <span className="ml-2">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}