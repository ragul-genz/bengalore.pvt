"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Handshake, Cpu, Layers } from "lucide-react";
import {
  Container,
  SectionHeading,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { TECHNOLOGY_PARTNERS, OEM_BRAND_PARTNERS, OEMBrandPartner } from "@/data/partners";

type FilterTag = "all" | "network" | "av" | "security" | "computing";

interface FilterOption {
  id: FilterTag;
  label: string;
  count: number;
}

export function Partners() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("all");

  const filterOptions: FilterOption[] = [
    { id: "all", label: "All OEM Brands", count: OEM_BRAND_PARTNERS.length },
    { id: "network", label: "Networking & Fiber", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "network").length },
    { id: "av", label: "Audio-Visual & Acoustics", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "av").length },
    { id: "security", label: "Security & Life Safety", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "security").length },
    { id: "computing", label: "IT Systems & Cyber", count: OEM_BRAND_PARTNERS.filter((b) => b.tag === "computing").length },
  ];

  const filteredBrands: OEMBrandPartner[] =
    activeFilter === "all"
      ? OEM_BRAND_PARTNERS
      : OEM_BRAND_PARTNERS.filter((brand) => brand.tag === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-brand-lightBg/75 backdrop-blur-xs border-b border-brand-border relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Strategic Collaboration"
          title="Our Technology"
          highlight="Partners"
          description="Collaborating closely with leading public sector enterprises, government undertakings, and engineering corporations to deliver large-scale infrastructure solutions."
          align="center"
          className="mb-12"
        />

        {/* Partners Grid */}
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
              className="p-6 rounded-2xl border border-brand-border bg-white shadow-xs hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {partner.logo ? (
                  <div className="h-14 w-full rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={60}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform">
                    <Handshake className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue">
                    {partner.type}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-brand-navy mt-0.5 leading-snug">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {partner.location}
                  </p>
                </div>

                <p className="text-xs text-brand-secondary leading-relaxed pt-1">
                  {partner.scopeOfWork}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-brand-navy">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>Verified Association</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* OEM Brand Ecosystem Showcase */}
        <div className="mt-16 pt-12 border-t border-brand-border">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
            <FadeIn
              mode="view"
              delay={0.03}
              y={8}
              duration={0.42}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>OEM Brand Ecosystem</span>
            </FadeIn>
            <RevealText
              as="h4"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Certified Technology & Audio-Visual Brands"
              className="text-xl sm:text-2xl font-bold font-heading text-brand-navy"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={12}
              duration={0.5}
              className="text-xs sm:text-sm text-brand-secondary"
            >
              Deploying certified hardware, audio processing consoles, conferencing hardware, and security systems from world-class manufacturers:
            </FadeIn>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === opt.id
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === opt.id
                      ? "bg-white/20 text-white"
                      : "bg-white text-slate-500"
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            ))}
          </div>

          {/* OEM Brands Grid with Authentic Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.name}
                className="p-3 rounded-xl border border-brand-border bg-white hover:border-brand-blue/50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center flex flex-col justify-between items-center group"
              >
                {/* Brand Logo Container */}
                <div className="w-full h-14 rounded-lg bg-slate-50/70 border border-slate-100/90 flex items-center justify-center p-2 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    width={140}
                    height={50}
                    className="max-h-8 w-auto object-contain filter group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                </div>

                {/* Brand Details */}
                <div className="mt-2 w-full">
                  <span className="text-xs sm:text-sm font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors block">
                    {brand.name}
                  </span>
                  <span className="text-[10.5px] text-slate-500 font-medium line-clamp-1 mt-0.5 block">
                    {brand.category}
                  </span>
                  {brand.subtitle && (
                    <span className="text-[9px] text-blue-600 font-medium mt-0.5 block truncate">
                      {brand.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Banner Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Authentic OEM warranties, genuine components &amp; certified tier-1 engineer deployments.</span>
            </div>
            <span className="font-semibold text-brand-navy">28+ Tier-1 Global OEM Alliances</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
