"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Maximize2,
  Building2,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  Lightbox,
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
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ICONIC OVERLAPPING "FLAGSHIP PROJECTS" LAYOUT */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Philosophy & Project Purpose */}
            <div className="lg:col-span-7 space-y-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-snug">
                Proven infrastructure executed with uncompromising precision across Karnataka.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
                <p>
                  A curated portfolio of verified enterprise projects, institutional campus networks, modular data centres, and sustainable clean energy facilities executed by New Link Technologies Bangalore Pvt. Ltd. Every installation is documented by official completion certificates and state endorsements.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Headquartered in Rajajinagar, Bangalore under Director M.G. Girish, our engineers oversee every phase — initial site feasibility, architecture, tier-1 OEM procurement, certified termination, and long-term SLA maintenance.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>50+ EPC INSTALLATIONS</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>220 kWp SOLAR COMMISSIONED</span>
                </div>
              </div>
            </div>

            {/* Right: Vertical Pillar in Vibrant Royal Blue with Giant Overlapping "Projects" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
              <div className="relative w-full max-w-[320px] sm:max-w-sm md:w-96 h-[300px] sm:h-[440px] md:h-[520px] rounded-[32px] bg-gradient-to-br from-[#1E64F0] via-[#2563EB] to-[#1D4ED8] border border-blue-400/30 p-8 sm:p-10 md:p-12 shadow-2xl shadow-blue-600/30 flex flex-col justify-between overflow-hidden group select-none">
                <div className="flex justify-end w-full">
                  <span className="text-[10px] font-mono tracking-widest text-sky-100 uppercase font-bold bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-xs">
                    EPC PORTFOLIO
                  </span>
                </div>

                <div className="relative z-10 text-left space-y-0.5 sm:space-y-1">
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-black font-heading tracking-tighter text-white drop-shadow-md leading-[0.84]">
                    Flagship
                  </span>
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-black font-heading tracking-tighter text-[#93C5FD] drop-shadow-md leading-[0.84]">
                    Projects
                  </span>
                  <p className="pt-3 sm:pt-4 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/90 font-bold">
                    CONNECTING VALUES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. FOUR HORIZONTAL VALUE CARDS */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#0E274A] border-b border-[#142B4A] select-none text-white">
        <Container size="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                Site Survey
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">Institutional Assessment</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-white">
                Precision EPC
              </h3>
              <p className="text-xs text-sky-300 font-mono mt-1">Tier-1 Hardware</p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                Certified QA
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">OTDR &amp; Standards Verification</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 text-sky-300 flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-center">
                Full Handover
              </h3>
              <p className="text-xs text-white/70 font-mono mt-1">Official Certificates</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 3. PROOF METRICS BAR */}
      {/* ======================================================== */}
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

      {/* ======================================================== */}
      {/* 4. PRIMARY PROJECT CASE STUDIES */}
      {/* ======================================================== */}
      <SectionReveal className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <FadeIn as="p" mode="view" delay={0.04} y={6} className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
              Key Project Deliveries
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
                      className={
                        project.image.includes("comparison") ||
                        project.image.includes("diagram") ||
                        project.image.includes("standards") ||
                        project.image.includes("cert")
                          ? "object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                          : "object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      }
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

      {/* ======================================================== */}
      {/* 5. INSTALLATION GALLERY */}
      {/* ======================================================== */}
      <SectionReveal className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <FadeIn as="p" mode="view" delay={0.04} y={6} className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
              Field Engineering Showcase
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
                className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:border-[#2563EB] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-black/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      item.image.includes("comparison") ||
                      item.image.includes("diagram") ||
                      item.image.includes("standards") ||
                      item.image.includes("cert")
                        ? "object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        : "object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    }
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

      {/* ======================================================== */}
      {/* 6. CTA STRIP IN LOGO NAVY */}
      {/* ======================================================== */}
      <SectionReveal className="py-20 bg-[#F8FAFC] text-[#0F172A]">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-6 sm:p-14 text-center text-white shadow-2xl space-y-6">
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
