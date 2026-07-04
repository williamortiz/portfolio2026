"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { X, ZoomIn } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ArtGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="generative-art" className="space-y-8">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-black text-white dark:bg-white dark:text-black z-10 rounded-xl px-4 py-1">
              <span className="text-sm font-medium">Generative AI Art</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              AI Creative Experiments
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
              Exploring prompt engineering and custom workflows across multiple image and text generation models (Imagen 4, Gemini, Nano Banana, loraAi, ComfyUI).
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[900px] mx-auto">
          {DATA.aiArt.map((art, id) => (
            <BlurFade
              key={art.src}
              delay={BLUR_FADE_DELAY * 2 + id * 0.03}
              className="h-full"
            >
              <div
                onClick={() => setSelectedImage(art.src)}
                className="relative aspect-square group overflow-hidden rounded-2xl border bg-muted cursor-pointer hover:ring-2 hover:ring-muted transition-all duration-300"
              >
                <img
                  src={art.src}
                  alt={art.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs text-white border border-white/20 transform scale-95 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="size-5" />
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors border border-white/10"
            aria-label="Close image preview"
          >
            <X className="size-6" />
          </button>
          <div
            className="relative max-w-[90vw] max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="AI Art Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
