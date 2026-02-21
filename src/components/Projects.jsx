const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with product management, cart, checkout, and Stripe payments built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style productivity app with drag-and-drop boards, real-time collaboration, and team workspaces.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather app featuring interactive maps, 7-day forecasts, and location-based data from the OpenWeather API.',
    tags: ['React', 'REST API', 'Chart.js', 'CSS3'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Blog CMS',
    description:
      'A headless CMS-powered blog with MDX support, full-text search, dark mode, and SEO optimizations built with Next.js.',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Social Analytics Tool',
    description:
      'Dashboard aggregating social media metrics with customizable charts, scheduled reports, and CSV exports.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio — built with Vite, React, and Tailwind CSS. Fast, accessible, and fully responsive.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    demo: '#',
    repo: '#',
  },
];

function ProjectCard({ title, description, tags, demo, repo }) {
  return (
    <div className="bg-surface rounded-2xl p-7 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 shadow-md group">
      <div className="flex items-start justify-between mb-4">
        <svg
          className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8M8 16h5" />
        </svg>

        <div className="flex gap-3">
          <a href={repo} aria-label="GitHub repo" className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a href={demo} aria-label="Live demo" className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          A selection of projects I&apos;ve built — ranging from side projects to production apps.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
