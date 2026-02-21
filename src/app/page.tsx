export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">WO</span>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          William Ortiz
        </h1>
        <p className="mt-4 text-xl text-blue-600 dark:text-blue-400 font-medium">
          Software Developer
        </p>
        <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Building modern, performant web experiences with a focus on clean
          code and great user experience.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I&apos;m a passionate software developer with experience building
            scalable web applications. I enjoy solving complex problems and
            turning ideas into polished products that people love to use.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When I&apos;m not coding, I&apos;m exploring new technologies,
            contributing to open-source projects, and continuously learning to
            stay at the forefront of modern software development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "TypeScript", "JavaScript", "React", "Next.js",
              "Node.js", "Python", "Git", "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Portfolio 2026",
              description: "Personal portfolio built with Next.js and Tailwind CSS.",
              tags: ["Next.js", "TypeScript", "Tailwind"],
            },
            {
              title: "Project Two",
              description: "A full-stack web application with modern tooling.",
              tags: ["React", "Node.js", "PostgreSQL"],
            },
            {
              title: "Project Three",
              description: "Open-source tool to automate common dev workflows.",
              tags: ["Python", "CLI", "Open Source"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@williamortiz.dev"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} William Ortiz. All rights reserved.
      </footer>
    </div>
  );
}

