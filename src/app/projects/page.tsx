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
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  SectionReveal,
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
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
      {/* Projects Hero Banner */}
      <PageHero
        eyebrow="Demonstrated Engineering Track Record • Turnkey EPC"
        title="Our Flagship Projects &"
        highlight="Turnkey Installations"
        description="A curated portfolio of verified enterprise projects, institutional campus networks, modular data centres, and sustainable clean energy facilities executed by New Link Technologies Bangalore Pvt. Ltd."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Proof Metrics & Credibility Bar in Official Logo Navy */}
      <section className="bg-[#0B1F3A] text-white py-12 border-b border-[#142B4A] relative overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn mode="view" delay={0.05} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-sky-400">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Turnkey SLA Handover</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.1} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-white">Tier-3</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Modular Data Center Architecture</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.15} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-sky-400">10 Gbps</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Campus Optical Fiber Rings</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.2} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">220 kWp</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Clean Rooftop Solar Deployed</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Primary Project Case Studies */}
      <SectionReveal className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Key Project Deliveries</span>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Major Verified Installations"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-base text-slate-600 font-normal leading-relaxed">
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
                  className="rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 hover:shadow-2xl transition-all duration-300 text-[#0F172A]"
                >
                  {/* Image Column (6 cols) */}
                  <div
                    className={`lg:col-span-6 relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

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
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                      title="View full-size photograph"
                      aria-label={`View full-size photograph of ${project.title}`}
                    >
                      <Maximize2 className="w-4 h-4 text-sky-400" />
                    </button>

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0B1F3A]/90 text-white border border-white/20 backdrop-blur-md">
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
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                      <Building2 className="w-4 h-4 text-[#2563EB]" />
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F172A] leading-snug">
                      {project.title}
                    </h3>

                    {project.executedThrough && (
                      <p className="text-xs font-mono text-slate-500">
                        Executed in technical association with:{" "}
                        <strong className="text-[#0B1F3A]">{project.executedThrough}</strong>
                      </p>
                    )}

                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      {project.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                      <p className="font-mono font-bold text-[#0B1F3A] uppercase tracking-wider text-[11px]">
                        Scope of Implementation
                      </p>
                      <p className="text-slate-700 font-normal leading-relaxed">{project.scope}</p>
                    </div>

                    <div className="flex items-start gap-2 pt-2 text-xs text-emerald-700 font-mono font-semibold">
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
      <SectionReveal className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Field Engineering Showcase</span>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Professional Work & Installation Gallery"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-base text-slate-600 font-normal leading-relaxed">
              Authentic on-site photographs documenting standards-compliant structured cabling,
              modular data centres, server rack dressing, and campus networking.
            </FadeIn>

            {/* Filter Tabs */}
            <FadeIn mode="view" delay={0.3} y={10} className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === cat
                      ? "bg-[#0B1F3A] text-white shadow-md font-bold"
                      : "bg-white text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-100 border border-slate-200 font-medium shadow-xs"
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
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A1220] shadow-xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)] transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-black/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/80 text-sky-400 border border-sky-400/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(item.image, item.title, item.caption)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 cursor-pointer"
                    title="Expand photograph"
                    aria-label={`Expand ${item.title}`}
                  >
                    <Maximize2 className="w-4 h-4 text-sky-400" />
                  </button>

                  {/* Caption & Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white space-y-1 z-10 pointer-events-none">
                    <h4 className="text-base font-bold font-heading text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </SectionReveal>

      {/* CTA Strip in Logo Navy */}
      <SectionReveal className="py-20 bg-[#F8FAFC] text-[#0F172A]">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-10 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
              CONNECTING VALUES
            </span>
            <RevealText
              as="h3"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Planning a Similar"
              highlight="Enterprise Deployment?"
              highlightClassName="text-sky-400"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-base text-slate-300 font-light leading-relaxed">
              Speak with our project engineering specialists for site surveys, bill of materials,
              and turnkey installation contracts under Director M.G. Girish.
            </FadeIn>
            <FadeIn mode="view" delay={0.32} y={12} className="pt-2">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <span>Discuss Your Installation Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
