"use client";

import React from "react";
import { ShieldCheck, Handshake } from "lucide-react";
import { Container, SectionHeading } from "@/components/common";
import { TECHNOLOGY_PARTNERS } from "@/data/partners";

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
      </Container>
    </section>
  );
}
