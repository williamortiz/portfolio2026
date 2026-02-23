
import { RippleButton } from './RippleButton';
import { useScrollReveal } from './useScrollReveal';

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

  const heroRef = useScrollReveal();
  return (
    <main className="page">
      <section className="hero reveal" ref={heroRef}>
        <p className="eyebrow">William Ortiz</p>
        <h1>Portfolio 2026</h1>
        <p className="subtitle">
          Selected work across digital, print, and visual design.
        </p>
        <RippleButton className="button" onClick={() => window.location.href = `${import.meta.env.BASE_URL}documents_1.html`}>
          View Case Studies
        </RippleButton>
      </section>

      <section className="section">
        <h2>Featured Categories</h2>
        <div className="grid">
          {projects.map((project) => {
            const cardRef = useScrollReveal();
            return (
              <article className="card reveal" ref={cardRef} key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <RippleButton className="button" onClick={() => window.location.href = project.href}>
                  Open {project.type}
                </RippleButton>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
