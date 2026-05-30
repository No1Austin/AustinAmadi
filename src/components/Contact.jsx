export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] px-6 py-28 text-center text-white"
    >

      <p className="tracking-[0.25em] text-cyan-400">
        GET IN TOUCH
      </p>

      <h2 className="mt-4 text-5xl font-black uppercase md:text-8xl">
        Let’s Work <br /> Together
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        I’m always interested in hearing about new projects,
        collaborations, business opportunities, and meaningful ideas.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {/**/}
        <a
          href="mailto:austinamadi.e@gmail.com"
          className="
            rounded-xl
            bg-cyan-400
            px-7
            py-4
            font-bold
            text-slate-950
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-300
          "
        >
          Send Email
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/austinamadi/"
          target="_blank"
          rel="noreferrer"
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-7
            py-4
            font-bold
            text-white
            backdrop-blur-xl
            transition
            duration-300
            hover:border-cyan-400
            hover:text-cyan-300
          "
        >
          Connect on LinkedIn
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/No1Austin"
          target="_blank"
          rel="noreferrer"
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-7
            py-4
            font-bold
            text-white
            backdrop-blur-xl
            transition
            duration-300
            hover:border-cyan-400
            hover:text-cyan-300
          "
        >
          View GitHub
        </a>

      </div>

    </section>
  );
}