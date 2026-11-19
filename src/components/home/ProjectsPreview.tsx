"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Maximize2,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Container,
  Lightbox,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  ImageReveal,
} from "@/components/common";
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

  // 4 Flagship Projects covering Data Centre, Solar, Campus Fiber, and Command Room
  const flagshipProjects = PROJECTS_DATA.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-slate-50/80 backdrop-blur-xs border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient High-Tech Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-1/4 top-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[100px]" />
      </div>

      <Container size="default" className="relative z-10">
        {/* Section Heading & Explore Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3 text-left">
            <FadeIn
              mode="view"
              delay={0.03}
              y={8}
              duration={0.42}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                PROVEN FIELD COMMISSIONING • FLAGSHIP PORTFOLIO
              </span>
            </FadeIn>

            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="Our Flagship"
              highlight="Turnkey Installations"
              highlightClassName="text-blue-600"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
            />

            <FadeIn
              as="p"
              mode="view"
              delay={0.2}
              y={12}
              duration={0.55}
              className="text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              Verified physical infrastructure, optical networking, and turnkey technology
              systems deployed for premier state universities and government directorates across Karnataka.
            </FadeIn>
          </div>

          <FadeIn mode="view" delay={0.28} y={12} duration={0.5} className="shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 group"
            >
              <span>Explore All Verified Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* 4 Flagship Projects Grid (Cinema Cards) */}
        <StaggerGroup
          mode="view"
          stagger={0.08}
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {flagshipProjects.map((project: ProjectItem) => (
            <StaggerItem
              key={project.id}
              y={20}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-md hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden relative"
            >
              {/* Top Animated Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div>
                {/* Project Image with Lightbox Button */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                  <ImageReveal className="w-full h-full relative" duration={0.65}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    />
                  </ImageReveal>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-slate-900/90 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Zoom Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(
                        project.image,
                        project.title,
                        `Client: ${project.client}`
                      )
                    }
                    className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus-visible:outline-none"
                    title="Expand photograph"
                    aria-label={`Expand ${project.title} photograph`}
                  >
                    <Maximize2 className="w-4 h-4 text-blue-600" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-3.5 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                    <Building2 className="w-4 h-4 shrink-0 text-blue-600" />
                    <span className="truncate">{project.client}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Highlights & Scope Footer */}
              <div className="p-6 sm:p-7 pt-0 space-y-4">
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-700 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium">{project.verifiedHighlights}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
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
