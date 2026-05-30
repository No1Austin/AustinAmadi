const education = [
  {
    degree: "MSc in Computer Science",
    school: "Woolf University",
    location: "Malta",
    date: "Jan 2025 - May 2026",
  },

  {
    degree: "Diploma in Business Management",
    school: "Trillium College",
    location: "Canada",
    date: "Jan 2024",
  },
{
    degree: "Computer Science",
    school: "National Open University",
    location: "Lagos",
    date: "2017 - 2019",
  },

  {
    degree: "HND in Surveying and Geoinformatics",
    school: "Federal Polytechnic Nekede",
    location: "Nigeria",
    date: "May 2010 - Jun 2016",
  },

  
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white"
    >

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="tracking-[0.25em] text-cyan-400">
            ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase text-white md:text-7xl">
            Education
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-400">
            My academic journey combines computer science, business,
            leadership, and technical problem-solving.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {education.map((item, index) => (

              <div
                key={item.degree}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Dot */}
                <div className="absolute left-2 top-10 h-5 w-5 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-lg shadow-cyan-400/50 md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div
                  className="
                    ml-12
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400
                    hover:bg-cyan-400/5
                    hover:shadow-2xl
                    hover:shadow-cyan-500/10
                    md:ml-0
                    md:w-[45%]
                  "
                >

                  {/* Date */}
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                    {item.date}
                  </p>

                  {/* Degree */}
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  {/* School */}
                  <p className="mt-4 text-lg font-medium text-slate-300">
                    {item.school}
                  </p>

                  {/* Location */}
                  <p className="mt-2 text-slate-500">
                    {item.location}
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