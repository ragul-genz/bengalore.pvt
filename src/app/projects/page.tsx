"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Maximize2,
  Building2,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  Button,
  Lightbox,
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  SectionReveal,
  ImageReveal,
} from "@/components/common";
import {
  PROJECTS_DATA,
  INSTALLATION_GALLERY,
  type ProjectItem,
  type GalleryItem,
} from "@/data/projects";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
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

  const categories = [
    "all",
    ...Array.from(new Set(INSTALLATION_GALLERY.map((g) => g.category))),
  ];

  const filteredGallery =
    activeTab === "all"
      ? INSTALLATION_GALLERY
      : INSTALLATION_GALLERY.filter((g) => g.category === activeTab);

  return (
    <div className="relative bg-transparent">
      {/* Projects Hero Banner matching Home Aesthetic */}
      <PageHero
        eyebrow="Demonstrated Engineering Track Record"
        title="Our Successful"
        highlight="Installations"
        description="A curated portfolio of verified enterprise projects, institutional campus networks, modular data centres, and sustainable energy facilities executed by New Link Technologies Bangalore Pvt. Ltd."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Primary Project Case Studies */}
      <SectionReveal className="py-16 md:py-24 bg-white/70 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="max-w-2xl mb-12">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Key Project Deliveries
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Major Verified Installations"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Directly documented in official project handover certificates, public sector
              contracts, and partner records.
            </FadeIn>
          </div>

          <div className="space-y-12">
            {PROJECTS_DATA.map((project: ProjectItem, index: number) => {
              const isEven = index % 2 === 1;
              return (
                <FadeIn
                  key={project.id}
                  mode="view"
                  delay={0.06}
                  y={18}
                  className="rounded-2xl border border-brand-border bg-white shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
                >
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 relative aspect-16/10 w-full rounded-xl overflow-hidden border border-brand-border bg-slate-100 group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <ImageReveal className="w-full h-full relative" duration={0.6}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </ImageReveal>
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Expand button */}
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(
                          project.image,
                          project.title,
                          `Client: ${project.client}`
                        )
                      }
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-xs hover:bg-white text-brand-navy flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                      title="View full-size photograph"
                      aria-label={`View full-size photograph of ${project.title}`}
                    >
                      <Maximize2 className="w-4 h-4 text-brand-blue" />
                    </button>

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy/90 text-white backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue uppercase tracking-wider">
                      <Building2 className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy leading-snug">
                      {project.title}
                    </h3>

                    {project.executedThrough && (
                      <p className="text-xs font-medium text-slate-500">
                        Executed in technical association with:{" "}
                        <strong className="text-brand-navy">{project.executedThrough}</strong>
                      </p>
                    )}

                    <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="p-4 rounded-xl bg-brand-lightBg border border-brand-border/80 space-y-1.5 text-xs text-brand-text">
                      <p className="font-bold text-brand-navy uppercase tracking-wider text-[11px]">
                        Scope of Implementation
                      </p>
                      <p className="text-brand-secondary leading-relaxed">{project.scope}</p>
                    </div>

                    <div className="flex items-start gap-2 pt-2 text-xs text-emerald-800 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{project.verifiedHighlights}</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </SectionReveal>

      {/* Installation Gallery (Authentic Company Work Photographs) */}
      <SectionReveal className="py-16 md:py-24 bg-brand-lightBg/70 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Field Engineering Showcase
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Professional Work & Installation Gallery"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Authentic on-site photographs documenting standards-compliant structured cabling,
              modular data centres, server rack dressing, and campus networking.
            </FadeIn>

            {/* Filter Tabs */}
            <FadeIn mode="view" delay={0.3} y={10} className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all select-none ${
                    activeTab === cat
                      ? "bg-brand-navy text-white shadow-xs"
                      : "bg-white text-brand-secondary hover:text-brand-navy border border-brand-border"
                  }`}
                >
                  {cat === "all" ? "All Photographs" : cat}
                </button>
              ))}
            </FadeIn>
          </div>

          {/* Gallery Grid */}
          <StaggerGroup
            key={activeTab}
            mode="view"
            stagger={0.06}
            delay={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item: GalleryItem) => (
              <StaggerItem
                key={item.id}
                y={18}
                className="group relative rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <ImageReveal className="w-full h-full relative" duration={0.55}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </ImageReveal>
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-navy/90 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(item.image, item.title, item.caption)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs hover:bg-white text-brand-navy flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                    title="Expand photograph"
                    aria-label={`Expand ${item.title}`}
                  >
                    <Maximize2 className="w-4 h-4 text-brand-blue" />
                  </button>

                  {/* Caption & Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 z-10 pointer-events-none">
                    <h4 className="text-sm font-bold font-heading text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </SectionReveal>

      {/* CTA Strip */}
      <SectionReveal className="py-16 bg-brand-navy text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <RevealText
              as="h3"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Planning a Similar"
              highlight="Enterprise Deployment?"
              highlightClassName="text-blue-400"
              className="text-2xl sm:text-3xl font-bold font-heading text-white"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-sm sm:text-base text-slate-300">
              Speak with our project engineering specialists for site surveys, bill of materials,
              and turnkey installation contracts.
            </FadeIn>
            <FadeIn mode="view" delay={0.32} y={12} className="pt-2">
              <Button variant="secondary" size="lg" href="/contact#quote" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Installation Requirements
              </Button>
            </FadeIn>
          </div>
        </Container>
      </SectionReveal>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeLightbox.isOpen}
        onClose={() => setActiveLightbox({ ...activeLightbox, isOpen: false })}
        imageSrc={activeLightbox.image}
        imageAlt={activeLightbox.title}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />
    </div>
  );
}
