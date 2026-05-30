const jobs = [
  {
    role: "Digital Operations & Web Platform Contributor",
    company: "Bantu Blockchain Foundation",
    location: "Remote",
    date: "2025 - Present",
    text: "Contributed to digital platform improvements, website workflows, and engagement-focused web initiatives.",
  },
  {
    role: "Digital Operations & Marketing Lead",
    company: "ED2E Technology",
    location: "Remote",
    date: "2018 - 2020",
    text: "Led digital initiatives focused on web content, campaigns, and workflow optimization.",
  },
  {
    role: "Digital Communications Specialist",
    company: "Edmark International",
    location: "Digital Communications",
    date: "2016 - 2018",
    text: "Supported digital campaigns, customer engagement, and web-facing improvements.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] px-6 py-20 text-white"
    >
      {/* Glow Effects */}
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <p className="tracking-[0.25em] text-cyan-400">
            MY JOURNEY
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Experience across web systems, digital operations, and business technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">

            {jobs.map((job, index) => (
              <div
                key={job.role}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Dot */}
                <div className="absolute left-1 top-7 h-4 w-4 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-lg shadow-cyan-400/50 md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div
                  className="
                    ml-10
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:bg-cyan-400/5
                    hover:shadow-xl
                    hover:shadow-cyan-500/10
                    md:ml-0
                    md:w-[42%]
                  "
                >

                  {/* Date */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {job.date}
                  </p>

                  {/* Role */}
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {job.role}
                  </h3>

                  {/* Company */}
                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {job.company}
                  </p>

                  {/* Location */}
                  <p className="mt-1 text-xs text-slate-500">
                    {job.location}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {job.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}