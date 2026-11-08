"use client";

import React from "react";
import {
  Layers,
  Server,
  Wrench,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/common";

const reasons = [
  {
    icon: <Layers className="w-6 h-6 text-brand-blue" />,
    title: "Integrated Technology Solutions",
    description:
      "A unified, single-window provider across IT, Hardware, Software, Infrastructure, and Consulting, eliminating multi-vendor coordination friction.",
  },
  {
    icon: <Server className="w-6 h-6 text-brand-blue" />,
    title: "Multiple Infrastructure Capabilities",
    description:
      "Broad engineering execution spanning modular data centres, campus optical fiber networks, boardroom automation, and clean solar rooftop energy.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-brand-blue" />,
    title: "Professional Installation Experience",
    description:
      "Strict adherence to structured cabling standards, neat vertical/horizontal cable dressing, certified terminations, and rigorous site safety protocols.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-brand-blue" />,
    title: "Enterprise Technology Solutions",
    description:
      "Architectures engineered specifically for large-footprint enterprises, universities, state departments, and mission-critical public infrastructure.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
    title: "Business-Focused Approach",
    description:
      "Aligned with our founding motto 'Connecting Values' — delivering transparent proposals, practical bills of materials, and accountable multi-year SLA support.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-lightBg border-b border-brand-border relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Our Engineering Differentiators"
          title="Why Choose New Link Technologies?"
          description="We deliver dependability, technical precision, and comprehensive accountability across every physical and digital technology layer."
          align="center"
          className="mb-14"
        />

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white p-7 rounded-2xl border border-brand-border shadow-xs hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-brand-navy leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>Verified Core Standard</span>
              </div>
            </div>
          ))}

          {/* Sixth Card: Corporate Commitment */}
          <div className="bg-brand-navy text-white p-7 rounded-2xl border border-brand-darkNavy shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-blue-300">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  Our Guarantee
                </span>
                <h3 className="text-lg font-bold font-heading text-white leading-snug">
                  Standards-Compliant Execution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every project is delivered with formal testing certificates, detailed
                architectural diagrams, component documentation, and direct director-level
                accountability.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-blue-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Full Project Transparency</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
