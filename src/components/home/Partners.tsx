"use client";

import React from "react";
import { ShieldCheck, Handshake, Cpu } from "lucide-react";
import { Container, SectionHeading } from "@/components/common";
import { TECHNOLOGY_PARTNERS, OEM_BRAND_PARTNERS } from "@/data/partners";

export function Partners() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-border relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Strategic Collaboration"
          title="Our Technology Partners"
          description="Collaborating closely with leading public sector enterprises, government undertakings, and engineering corporations to deliver large-scale infrastructure solutions."
          align="center"
          className="mb-12"
        />

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-2xl border border-brand-border bg-white shadow-xs hover:border-brand-blue/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform">
                  <Handshake className="w-6 h-6" />
                </div>

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
            </div>
          ))}
        </div>

        {/* OEM Brand Ecosystem Showcase */}
        <div className="mt-16 pt-12 border-t border-brand-border">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
              <Cpu className="w-3.5 h-3.5" />
              <span>OEM Brand Ecosystem</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
              Certified Technology &amp; Audio-Visual Brands
            </h4>
            <p className="text-xs sm:text-sm text-brand-secondary">
              Deploying certified hardware, audio processing consoles, conferencing hardware, and security systems from world-class manufacturers:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {OEM_BRAND_PARTNERS.map((brand) => (
              <div
                key={brand.name}
                className="p-3.5 rounded-xl border border-brand-border bg-slate-50/70 hover:bg-white hover:border-brand-blue/50 hover:shadow-md transition-all duration-200 text-center flex flex-col justify-center items-center group"
              >
                <span className="text-sm font-extrabold font-heading text-brand-navy group-hover:text-brand-blue transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                  {brand.category}
                </span>
                {brand.subtitle && (
                  <span className="text-[9px] text-blue-600 font-medium mt-0.5">
                    {brand.subtitle}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
