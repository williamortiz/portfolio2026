"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const CATEGORIES = [
  "All",
  "UI/UX Design",
  "Interactive & Web",
  "Digital Production",
  "Print & Large Format",
  "Pharma Campaigns"
] as const;

type Category = typeof CATEGORIES[number];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  // Combine digital and print projects into a unified structure
  const allProjects = [
    ...DATA.projects.map((p, idx) => {
      const proj = p as any;
      return {
        ...p,
        originalIndex: idx,
        type: "digital" as const,
        descriptionToShow: `CLIENT: ${proj.team}\n\nROLE: ${proj.role}${proj.description ? `\n\n${proj.description}` : ""}`,
      };
    }),
    ...DATA.printProjects.map((p, idx) => {
      const proj = p as any;
      return {
        ...p,
        originalIndex: idx + DATA.projects.length,
        type: "print" as const,
        descriptionToShow: `CLIENT: ${proj.team}\n\nROLE: ${proj.role}${proj.description ? `\n\n${proj.description}` : ""}`,
        href: proj.links?.[0]?.href || "#",
        video: ""
      };
    }),
  ];

  // Sort projects: pure chronological descending (latest first)
  const sortedProjects = [...allProjects].sort((a: any, b: any) => {
    const yearA = a.year || 0;
    const yearB = b.year || 0;
    if (yearA !== yearB) {
      return yearB - yearA;
    }
    return a.originalIndex - b.originalIndex;
  });

  // Filter projects by category
  const filteredProjects = sortedProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    const cats = (project as any).categories || [];
    return cats.includes(selectedCategory);
  }) as any[];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-black text-white dark:bg-white dark:text-black z-10 rounded-xl px-4 py-1">
              <span className="text-sm font-medium">My Projects</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
              I&apos;ve worked on a variety of digital web platforms and high-profile print production campaigns.
            </p>
          </div>
        </div>

        {/* Sleek Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-[750px] mx-auto px-4 select-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border ${
                selectedCategory === category
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md scale-105"
                  : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {filteredProjects.map((project, id) => (
            <BlurFade
              key={`${project.title}-${selectedCategory}`}
              delay={BLUR_FADE_DELAY * 2 + id * 0.04}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.descriptionToShow}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
