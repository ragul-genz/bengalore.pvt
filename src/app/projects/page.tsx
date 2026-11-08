"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Maximize2,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container, Button, Lightbox } from "@/components/common";
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
    <div className="bg-brand-lightBg">
      {/* Hero Banner */}
      <section className="bg-brand-navy text-white pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Demonstrated Engineering Track Record</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Our Successful Installations
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A curated portfolio of verified enterprise projects, institutional campus
              networks, modular data centres, and sustainable energy facilities executed by
              New Link Technologies Bangalore Pvt. Ltd.
            </p>
          </div>
        </Container>
      </section>

      {/* Primary Project Case Studies */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow-badge mb-3">Key Project Deliveries</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
              Major Verified Installations
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              Directly documented in official project handover certificates, public sector
              contracts, and partner records.
            </p>
          </div>

          <div className="space-y-12">
            {PROJECTS_DATA.map((project: ProjectItem, index: number) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-brand-border bg-white shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
                >
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 relative aspect-16/10 w-full rounded-xl overflow-hidden border border-brand-border bg-slate-100 group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-40" />

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
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Installation Gallery (Authentic Company Work Photographs) */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow-badge mb-3">Field Engineering Showcase</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
              Professional Work & Installation Gallery
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              Authentic on-site photographs documenting standards-compliant structured cabling,
              modular data centres, server rack dressing, and campus networking.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
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
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item: GalleryItem) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-navy/90 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(item.image, item.title, item.caption)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs hover:bg-white text-brand-navy flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                    title="Expand photograph"
                    aria-label={`Expand ${item.title}`}
                  >
                    <Maximize2 className="w-4 h-4 text-brand-blue" />
                  </button>

                  {/* Caption & Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                    <h4 className="text-sm font-bold font-heading text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-navy text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Planning a Similar Enterprise Deployment?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Speak with our project engineering specialists for site surveys, bill of materials,
              and turnkey installation contracts.
            </p>
            <div className="pt-2">
              <Button variant="secondary" size="lg" href="/contact#quote" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Installation Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>

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
