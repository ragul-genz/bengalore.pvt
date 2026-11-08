"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Maximize2, Building2, CheckCircle2 } from "lucide-react";
import { Container, Button, Lightbox } from "@/components/common";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projects";

export function ProjectsPreview() {
  const [activeLightbox, setActiveLightbox] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    image: "",
    title: "",
    caption: "",
  });

  const openLightbox = (image: string, title: string, caption: string) => {
    setActiveLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-brand-border relative">
      <Container size="default">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-badge mb-3">Demonstrated Track Record</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-tight">
              Our Successful Installations
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              Verified physical infrastructure, optical networking, and turnkey technology
              systems deployed for premier institutions across Karnataka.
            </p>
          </div>

          <div className="shrink-0">
            <Button variant="outline" size="md" href="/projects" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Projects
            </Button>
          </div>
        </div>

        {/* 3 Featured Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(0, 3).map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white shadow-xs hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Project Image with Lightbox Button */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-brand-navy/90 text-white backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Zoom Lightbox Trigger */}
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(
                        project.image,
                        project.title,
                        `Client: ${project.client}`
                      )
                    }
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-xs hover:bg-white text-brand-navy flex items-center justify-center shadow-md transition-transform group-hover:scale-110 focus-visible:outline-none"
                    title="Expand photograph"
                    aria-label={`Expand ${project.title} photograph`}
                  >
                    <Maximize2 className="w-4 h-4 text-brand-blue" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-brand-blue font-semibold">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-secondary line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Highlights & Scope Footer */}
              <div className="p-6 pt-0 space-y-4">
                <div className="pt-4 border-t border-brand-border/80 text-xs text-slate-600 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{project.verifiedHighlights}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeLightbox.isOpen}
        onClose={() => setActiveLightbox({ ...activeLightbox, isOpen: false })}
        imageSrc={activeLightbox.image}
        imageAlt={activeLightbox.title}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />
    </section>
  );
}
