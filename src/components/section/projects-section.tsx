"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"digital" | "print">("digital");

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

        {/* Custom Premium Toggle Switch */}
        <div className="flex justify-center">
          <div className="flex p-1 bg-muted rounded-2xl border ring-1 ring-border/5">
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "digital"
                  ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Digital & UI/UX
            </button>
            <button
              onClick={() => setActiveTab("print")}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "print"
                  ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Print Production
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === "digital" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.printProjects.map((project, id) => {
              const p = project as any;
              return (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                  className="h-full"
                >
                  <ProjectCard
                    title={project.title}
                    description={`CLIENT: ${project.team}\n\nROLE: ${project.role}${p.description ? `\n\n${p.description}` : ""}`}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={p.links}
                  />
                </BlurFade>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
