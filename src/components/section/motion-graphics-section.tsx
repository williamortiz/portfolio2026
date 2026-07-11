"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

const getYoutubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
};

export default function MotionGraphicsSection() {
  const projects = DATA.motionGraphics || [];

  return (
    <section id="motion-graphics" className="space-y-8">
      <div className="flex min-h-0 flex-col gap-y-8">
        {/* Section Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-black text-white dark:bg-white dark:text-black z-10 rounded-xl px-4 py-1">
              <span className="text-sm font-medium">Motion Design</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Motion Graphic Projects
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
              Video editing, graphic design, and custom animations built using Premiere Pro and Photoshop.
            </p>
          </div>
        </div>

        {/* Stacked Projects list */}
        <div className="flex flex-col gap-16 max-w-[800px] mx-auto w-full px-4">
          {projects.map((project, id) => {
            const embedUrl = getYoutubeEmbedUrl(project.href);
            return (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                className="w-full"
              >
                <div className="flex flex-col border border-border bg-card/50 backdrop-blur-xs rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Top: Video Frame (100% width) */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-xs bg-muted">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full border-0"
                        loading="lazy"
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        No video preview available
                      </div>
                    )}
                  </div>

                  {/* Bottom: Details (2 Columns below the frame) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Left Column: Title, Date, Description */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-x-2.5 flex-wrap gap-y-1">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground font-mono px-2 py-0.5 rounded-full border border-border bg-muted/40">
                          {project.dates}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Right Column: Tools & Link Buttons */}
                    <div className="flex flex-col justify-between gap-y-4 md:items-end">
                      {/* Technologies badges */}
                      <div className="flex flex-wrap gap-1.5 md:justify-end">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="text-[11px] font-medium border border-border h-6 px-2.5 bg-muted/20 text-muted-foreground"
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {project.links.map((link, idx) => (
                            <a
                              href={link.href}
                              key={idx}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-border rounded-xl bg-background hover:bg-muted text-foreground transition-colors cursor-pointer shadow-xs select-none"
                            >
                              {link.icon}
                              {link.type}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
