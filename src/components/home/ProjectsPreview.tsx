"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Maximize2, Building2, CheckCircle2 } from "lucide-react";
import {
  Container,
  Lightbox,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
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

  return (
    <section className="py-20 md:py-28 bg-white/80 backdrop-blur-xs border-b border-brand-border relative">
      <Container size="default">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <FadeIn
              mode="view"
              delay={0.03}
              y={8}
              duration={0.42}
              className="flex items-center gap-2.5"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.45, delay: 0.04, ease: CINEMATIC_EASE }}
                className="w-6 h-[2px] bg-blue-600 rounded-full shrink-0 origin-left"
              />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Demonstrated Track Record
              </span>
            </FadeIn>

            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="Our Successful"
              highlight="Installations"
              highlightClassName="text-blue-600"
              className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A192F] tracking-tight leading-tight"
            />

            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={14}
              duration={0.55}
              className="text-sm sm:text-base text-slate-600"
            >
              Verified physical infrastructure, optical networking, and turnkey technology
              systems deployed for premier institutions across Karnataka.
            </FadeIn>
          </div>

          <FadeIn mode="view" delay={0.32} y={12} duration={0.5} className="shrink-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:border-blue-600 hover:bg-blue-50/40 text-slate-900 hover:text-blue-600 text-sm font-semibold shadow-2xs transition-all duration-200"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        {/* 3 Featured Projects Showcase Grid */}
        <StaggerGroup
          mode="view"
          stagger={0.09}
          delay={0.1}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.slice(0, 3).map((project: ProjectItem) => (
            <StaggerItem
              key={project.id}
              y={18}
              className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white shadow-2xs hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
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
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-brand-navy/90 text-white backdrop-blur-md border border-white/20">
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
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md hover:bg-white text-brand-navy flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus-visible:outline-none"
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
