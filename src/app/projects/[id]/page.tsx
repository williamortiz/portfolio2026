import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECT_DETAILS } from "@/data/project-details";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowLeft, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((id) => ({
    id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECT_DETAILS[id];

  if (!project) {
    notFound();
  }

  const hasTabs = !!(project.desktopImages && project.mobileImages);

  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-sm w-fit"
            >
              <Globe className="size-4" />
              Live Site
            </a>
          )}
        </div>
      </div>

      {/* Metadata Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border rounded-2xl bg-muted/40 ring-1 ring-border/20">
        <div>
          <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Client</span>
          <p className="font-medium text-foreground mt-0.5">{project.client}</p>
        </div>
        <div>
          <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Role</span>
          <p className="font-medium text-foreground mt-0.5">{project.role}</p>
        </div>
        <div>
          <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Team</span>
          <p className="font-medium text-foreground mt-0.5">{project.team}</p>
        </div>
        <div>
          <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Year</span>
          <p className="font-medium text-foreground mt-0.5">{project.year}</p>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">About the Project</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {project.description}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b pb-2">Wireframes & Design Files</h2>

        {hasTabs ? (
          <div className="space-y-10">
            {/* Desktop Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/90">Desktop Wireframes</Badge>
                <div className="flex-1 h-px bg-border/40" />
              </div>
              <div className="flex flex-col gap-8 items-center">
                {project.desktopImages?.map((src, index) => (
                  <BlurFade key={`desktop-${index}`} delay={index * 0.05} className="w-full">
                    <div className="relative group overflow-hidden rounded-2xl border bg-background shadow-md transition-all hover:shadow-lg">
                      <img
                        src={src}
                        alt={`${project.title} Desktop Wireframe ${index + 1}`}
                        className="w-full h-auto object-contain max-h-[600px] mx-auto p-2"
                        loading="lazy"
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>

            {/* Mobile Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/90">Mobile Wireframes</Badge>
                <div className="flex-1 h-px bg-border/40" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {project.mobileImages?.map((src, index) => (
                  <BlurFade key={`mobile-${index}`} delay={index * 0.05}>
                    <div className="relative group overflow-hidden rounded-2xl border bg-background shadow-md transition-all hover:shadow-lg flex items-center justify-center p-4">
                      <img
                        src={src}
                        alt={`${project.title} Mobile Wireframe ${index + 1}`}
                        className="max-h-[500px] w-auto object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8 items-center">
            {project.images?.map((src, index) => (
              <BlurFade key={`image-${index}`} delay={index * 0.05} className="w-full">
                <div className="relative group overflow-hidden rounded-2xl border bg-background shadow-md transition-all hover:shadow-lg">
                  <img
                    src={src}
                    alt={`${project.title} Image ${index + 1}`}
                    className="w-full h-auto object-contain max-h-[600px] mx-auto p-2"
                    loading="lazy"
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
