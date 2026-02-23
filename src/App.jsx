export default function App() {
  const projects = [
    {
      title: 'Digital Design',
      description: 'Product, campaign, and UX work across digital channels.',
      href: `${import.meta.env.BASE_URL}Digital.html`,
      type: 'Digital',
    },
    {
      title: 'Print Design',
      description: 'Print-ready systems and marketing collateral.',
      href: `${import.meta.env.BASE_URL}Print.html`,
      type: 'Print',
    },
    {
      title: 'Art & Illustration',
      description: 'Visual storytelling, concept work, and personal pieces.',
      href: `${import.meta.env.BASE_URL}Art.html`,
      type: 'Art',
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">William Ortiz</p>
        <h1>Portfolio 2026</h1>
        <p className="subtitle">
          Selected work across digital, print, and visual design.
        </p>
        <a className="button" href={`${import.meta.env.BASE_URL}documents_1.html`}>
          View Case Studies
        </a>
      </section>

      <section className="section">
        <h2>Featured Categories</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href}>Open {project.type}</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
