const projectFilter = document.getElementById('projectCategoryFilter');
const projectGrid = document.getElementById('projectGrid');

const projectCatalog = [
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Iovance Pharmaceutical Website',
    description: 'UI/UX design and art direction for a modern, responsive pharmaceutical experience.',
    meta: ['Role: UI/UX + Art Direction', 'Team: Pixacore', 'Year: 2022'],
    image: 'Images/Thumbs/thumbs.png',
    href: 'documents_1.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Bayer Pharmaceutical Experience',
    description: 'Improved content hierarchy and navigation to support faster user discovery.',
    meta: ['Role: UI/UX + Art Direction', 'Team: Pixacore', 'Year: 2022'],
    image: 'Images/Thumbs/thumbs2.png',
    href: 'documents_2.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Blueprint Med Info Platform',
    description: 'Designed and directed UX patterns for a content-heavy information platform.',
    meta: ['Role: UI/UX + Art Direction', 'Team: Pixacore', 'Year: 2022'],
    image: 'Images/Thumbs/thumbs3.png',
    href: 'documents_3.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'BMS Digital Production',
    description: 'Delivered polished digital production work with performance-minded execution.',
    meta: ['Role: Digital Production Artist', 'Team: Pixacore', 'Year: 2022'],
    image: 'Images/Thumbs/thumbs4.png',
    href: 'documents_4.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Vitrakvi HCP Web Experience',
    description: 'Crafted responsive UI and visual direction for healthcare professional content.',
    meta: ['Role: UI/UX + Art Direction', 'Team: Pixacore', 'Year: 2022'],
    image: 'Images/Thumbs/thumbs6.png',
    href: 'documents_5.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'One Shot Records Website',
    description: 'End-to-end website design, development, and hosting for a music brand.',
    meta: ['Role: UI/UX + Web Development', 'Team: One Shot Records', 'Year: 2020'],
    image: 'Images/Thumbs/thumbs7.png',
    href: 'documents_6.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Rockford University Athletics',
    description: 'Web design execution supporting sports content and streamlined user access.',
    meta: ['Role: Web Designer', 'Team: Presto Sports', 'Year: 2015'],
    image: 'Images/Thumbs/thumbs8.png',
    href: 'documents_7.html'
  },
  {
    category: 'digital',
    kicker: 'Digital Product Redesigns',
    title: 'Crandall University Athletics',
    description: 'Produced a cleaner, accessible web presentation for university athletics.',
    meta: ['Role: Web Designer', 'Team: Presto Sports', 'Year: 2015'],
    image: 'Images/Thumbs/thumbs9.png',
    href: 'documents_8.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Verizon Campaign Production',
    description: 'Managed print production and studio workflows for telecom campaign assets.',
    meta: ['Role: Studio Manager / Print Production', 'Team: Global Hue', 'Year: 2008'],
    image: 'Images/Thumbs/pthumbs10.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'AT&T Print Campaign Systems',
    description: 'Delivered high-volume print production with consistency across campaign formats.',
    meta: ['Role: Studio Manager / Print Production', 'Team: Global Hue', 'Year: 2008'],
    image: 'Images/Thumbs/pthumbs15.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Allergan Pharma Collateral',
    description: 'Produced pharmaceutical marketing layouts with strict production standards.',
    meta: ['Role: Studio Manager / Print Production', 'Team: RCWM', 'Year: 2005'],
    image: 'Images/Thumbs/pthumbs11.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Novartis Print Deliverables',
    description: 'Created print-ready assets with quality control and brand consistency.',
    meta: ['Role: Studio Manager / Print Production', 'Team: RCWM', 'Year: 2005'],
    image: 'Images/Thumbs/pthumbs12.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Genentech Production Projects',
    description: 'Handled print production execution for high-detail healthcare materials.',
    meta: ['Role: Studio Manager / Print Production', 'Team: RCWM', 'Year: 2005'],
    image: 'Images/Thumbs/pthumbs13.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Nickelodeon Print Programs',
    description: 'Produced campaign and promotional print materials in fast-paced cycles.',
    meta: ['Role: Print Production Artist', 'Team: The Sloan Group', 'Year: 1999'],
    image: 'Images/Thumbs/pthumbs14.png',
    href: 'Print.html'
  },
  {
    category: 'campaign',
    kicker: 'Campaign Layout & Production',
    title: 'Dunkin’ Donuts Print QC',
    description: 'Supported quality control and production output for retail campaigns.',
    meta: ['Role: QC / Print Production', 'Team: Medallion Associates', 'Year: 1995'],
    image: 'Images/Thumbs/pthumbs16.png',
    href: 'Print.html'
  },
  {
    category: 'ai',
    kicker: 'AI Concept & Visual Exploration',
    title: 'Tape Explosion Concept Series',
    description: 'Prompt-based concept exploration focused on dynamic composition and style.',
    meta: ['Tools: Gemini + Imagen', 'Focus: Concept Ideation'],
    image: 'Images/AI/tape_explosion_2.png',
    href: 'Art.html'
  },
  {
    category: 'ai',
    kicker: 'AI Concept & Visual Exploration',
    title: 'Food & Character Prompt Study',
    description: 'Generated and curated stylized outputs to evaluate model consistency.',
    meta: ['Tools: ComfyUI + loraAi', 'Focus: Prompt Control'],
    image: 'Images/AI/cook.png',
    href: 'Art.html'
  },
  {
    category: 'ai',
    kicker: 'AI Concept & Visual Exploration',
    title: 'Service Campaign AI Visuals',
    description: 'Built quick-turn visual options for concept communication and mood direction.',
    meta: ['Tools: Imagen + Gemini', 'Focus: Rapid Iteration'],
    image: 'Images/AI/Service2.png',
    href: 'Art.html'
  },
  {
    category: 'ai',
    kicker: 'AI Concept & Visual Exploration',
    title: 'AI Visual Library v1',
    description: 'Curated an internal library of visual treatments for style references.',
    meta: ['Tools: Multi-model workflow', 'Focus: Creative Direction'],
    image: 'Images/AI/ai3.png',
    href: 'Art.html'
  },
  {
    category: 'ai',
    kicker: 'AI Concept & Visual Exploration',
    title: 'AI Visual Library v2',
    description: 'Expanded prompt experiments across multiple aesthetics and compositions.',
    meta: ['Tools: Gemini + ComfyUI', 'Focus: Style Testing'],
    image: 'Images/AI/ai10.png',
    href: 'Art.html'
  }
];

function buildProjectCard(project) {
  const metaMarkup = project.meta
    .map((metaItem) => `<span class="project-pill">${metaItem}</span>`)
    .join('');

  return `
    <article class="card m3-card project-item" data-category="${project.category}">
      <div class="project-preview">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-kicker">${project.kicker}</p>
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div class="project-meta">${metaMarkup}</div>
        <a href="${project.href}" class="btn m3-btn" target="_blank">View Project</a>
      </div>
    </article>
  `;
}

function renderProjects(category) {
  if (!projectGrid) {
    return;
  }

  const filtered =
    category === 'all'
      ? projectCatalog
      : projectCatalog.filter((project) => project.category === category);

  projectGrid.innerHTML = filtered.map(buildProjectCard).join('');
}

if (projectFilter && projectGrid) {
  projectFilter.addEventListener('change', (event) => {
    renderProjects(event.target.value);
  });

  renderProjects(projectFilter.value);
}
