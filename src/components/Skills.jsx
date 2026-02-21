const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Python', 'SQL'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'AWS / Vercel', 'Figma', 'Agile / Scrum'],
  },
];

function SkillCard({ category, items }) {
  return (
    <div className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors shadow-md">
      <h3 className="text-primary font-bold text-lg mb-5">{category}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <SkillCard key={s.category} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
