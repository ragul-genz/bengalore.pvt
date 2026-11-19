"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Handshake, Cpu, Layers, Sparkles } from "lucide-react";
import {
  Container,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { TECHNOLOGY_PARTNERS, OEM_BRAND_PARTNERS, OEMBrandPartner } from "@/data/partners";
import { cn } from "@/lib/utils";

type FilterTag = "all" | "network" | "av" | "security" | "computing";

interface FilterOption {
  id: FilterTag;
  label: string;
  count: number;
}

export function Partners() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");

  const filterOptions: FilterOption[] = [
    { id: "all", label: "All 28+ OEM Brands", count: OEM_BRAND_PARTNERS.length },
    { id: "network", label: "Networking & Fiber", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "network").length },
    { id: "av", label: "Audio-Visual & Acoustics", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "av").length },
    { id: "security", label: "Security & Surveillance", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "security").length },
    { id: "computing", label: "Servers & IT Hardware", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "computing").length },
  ];

  const filteredBrands: OEMBrandPartner[] =
    activeFilter === "all"
      ? OEM_BRAND_PARTNERS
      : OEM_BRAND_PARTNERS.filter((brand) => brand.tag === activeFilter);

  // Split brands into 2 rows for the infinite cinema marquee
  const half = Math.ceil(OEM_BRAND_PARTNERS.length / 2);
  const row1Brands = OEM_BRAND_PARTNERS.slice(0, half);
  const row2Brands = OEM_BRAND_PARTNERS.slice(half);

  return (
    <section className="py-24 md:py-32 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Ambient High-Tech Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-1/3 top-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute left-10 bottom-0 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[130px]" />
      </div>

      <Container size="default" className="relative z-10 space-y-20">
        {/* 1. Public Sector Strategic Collaborations */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <FadeIn
              mode="view"
              delay={0.03}
              y={8}
              duration={0.42}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-200">
                GOVERNMENT &amp; PUBLIC SECTOR ALLIANCES
              </span>
            </FadeIn>

            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="Our Technology &amp;"
              highlight="Public Sector Partners"
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]"
            />

            <FadeIn
              as="p"
              mode="view"
              delay={0.2}
              y={10}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Collaborating closely with leading public sector undertakings, government directorates, and engineering enterprises to execute state-level IT and clean energy infrastructure.
            </FadeIn>
          </div>

          {/* Strategic Partners Cards */}
          <StaggerGroup
            mode="view"
            stagger={0.07}
            delay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {TECHNOLOGY_PARTNERS.map((partner) => (
              <StaggerItem
                key={partner.name}
                y={16}
                className="p-6 rounded-2xl border border-white/15 bg-slate-900/80 backdrop-blur-md shadow-xl hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Brand Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {partner.logo ? (
                    <div className="h-16 w-full rounded-xl bg-white p-3 flex items-center justify-center shadow-xs border border-white/20 group-hover:scale-102 transition-transform">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} official emblem`}
                        width={160}
                        height={60}
                        className="max-h-11 max-w-[85%] w-auto h-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-sky-400">
                      <Handshake className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 font-mono">
                      {partner.type}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-white mt-0.5 leading-snug group-hover:text-sky-300 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {partner.location}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1 line-clamp-3">
                    {partner.scopeOfWork}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Authorized Association</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* 2. OEM Brand Ecosystem - Continuous Cinema Gliding Marquee Ticker */}
        <div className="pt-16 border-t border-white/10 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-sky-400 font-bold flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" />
              GLOBAL OEM BRAND ECOSYSTEM • TIER-1 ALLIANCES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Certified Hardware, Audio-Visual &amp; Optical Brands
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Turnkey integration with authentic manufacturer warranties, genuine components, and certified engineering deployments.
            </p>
          </div>

          {/* Gliding Infinite Marquee Ticker (2 Rows) */}
          <div className="space-y-4 overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {/* Row 1: Forward Infinite Glide */}
            <div className="animate-marquee-infinite flex gap-4">
              {[...row1Brands, ...row1Brands].map((brand, i) => (
                <div
                  key={`r1-${brand.name}-${i}`}
                  className="w-44 sm:w-48 h-20 rounded-2xl bg-white p-3 flex flex-col items-center justify-center border border-white/20 shadow-lg shrink-0 transition-transform hover:scale-105"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    width={130}
                    height={45}
                    className="max-h-9 max-w-[85%] w-auto h-auto object-contain"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-bold text-slate-800 mt-1 truncate">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: Reverse Infinite Glide */}
            <div className="animate-marquee-reverse-infinite flex gap-4">
              {[...row2Brands, ...row2Brands].map((brand, i) => (
                <div
                  key={`r2-${brand.name}-${i}`}
                  className="w-44 sm:w-48 h-20 rounded-2xl bg-white p-3 flex flex-col items-center justify-center border border-white/20 shadow-lg shrink-0 transition-transform hover:scale-105"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    width={130}
                    height={45}
                    className="max-h-9 max-w-[85%] w-auto h-auto object-contain"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-bold text-slate-800 mt-1 truncate">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Category Filter Pills for Detailed Inspection */}
          <div className="space-y-6 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2",
                    activeFilter === opt.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                  )}
                >
                  <span>{opt.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                      activeFilter === opt.id
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-slate-400"
                    )}
                  >
                    {opt.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Filtered OEM Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="p-3 rounded-2xl border border-white/10 bg-slate-900/90 hover:border-sky-400/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 text-center flex flex-col justify-between items-center group"
                >
                  {/* Brand Logo Container */}
                  <div className="w-full h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} official logo`}
                      width={140}
                      height={50}
                      className="max-h-8 max-w-[85%] w-auto h-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Details */}
                  <div className="mt-2 w-full">
                    <span className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-sky-400 transition-colors block truncate">
                      {brand.name}
                    </span>
                    <span className="text-[10.5px] text-slate-400 font-medium line-clamp-1 mt-0.5 block">
                      {brand.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Authentic OEM warranties, genuine components &amp; certified tier-1 engineer deployments.</span>
            </div>
            <span className="font-semibold text-slate-200">28+ Tier-1 Global OEM Alliances</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
