const skillGroups = [
  {
    icon: "💻",
    title: "Development",
    color: "from-cyan-400 to-blue-500",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "WordPress",
      "Shopify",
      "MongoDB",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Postman",
      "Azure",
      "Tailwind CSS",
    ],
  },

  {
    icon: "🎨",
    title: "Graphic Design",
    color: "from-pink-500 to-purple-500",
    skills: [
      "Brand Design",
      "UI Design",
      "Canva",
      "Adobe Photoshop",
      "Visual Identity",
      "Presentation Design",
      "Social Media Graphics",
    ],
  },

  {
    icon: "📈",
    title: "Marketing",
    color: "from-orange-400 to-red-500",
    skills: [
      "Digital Marketing",
      "SEO",
      "Content Strategy",
      "Social Media Marketing",
      "Campaign Strategy",
      "Email Marketing",
      "Audience Engagement",
    ],
  },

  {
    icon: "🎤",
    title: "Public Speaking",
    color: "from-yellow-400 to-orange-500",
    skills: [
      "Presentation Skills",
      "Leadership Communication",
      "Pitching",
      "Community Engagement",
      "Training & Mentorship",
    ],
  },

  {
    icon: "🚀",
    title: "Business Development",
    color: "from-emerald-400 to-cyan-500",
    skills: [
      "Business Strategy",
      "Growth Planning",
      "Partnership Development",
      "Client Relations",
      "Startup Systems",
      "Market Research",
    ],
  },

  {
    icon: "⚙️",
    title: "Operations",
    color: "from-indigo-400 to-purple-500",
    skills: [
      "Workflow Optimization",
      "Project Management",
      "Automation",
      "Agile Collaboration",
      "Operations Strategy",
      "Process Improvement",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-20 text-white"
    >

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="tracking-[0.25em] text-cyan-400">
            MY TOOLKIT
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">
            Skills & Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A multidisciplinary toolkit combining technology, design,
            communication, business strategy, and operational execution.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {skillGroups.map((group, index) => (

            <div
              key={group.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
              style={{
                animation: `skillFadeUp 0.7s ease forwards`,
                animationDelay: `${index * 120}ms`,
                opacity: 0,
              }}
            >

              {/* Glow */}
              <div
                className={`absolute -right-16 -top-16 h-28 w-28 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-30`}
              />

              {/* Icon */}
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} text-2xl shadow-lg`}
              >
                {group.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-300">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-slate-300
                      transition
                      duration-300
                      hover:border-cyan-400
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}