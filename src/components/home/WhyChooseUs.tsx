"use client";

import React from "react";
import {
  Layers,
  Server,
  Wrench,
  Building2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Container,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";

const reasons = [
  {
    icon: Layers,
    title: "Integrated Technology Solutions",
    description:
      "A unified, single-window provider across IT, Hardware, Software, Infrastructure, and Consulting, eliminating multi-vendor coordination friction.",
    badge: "SINGLE-WINDOW TURNKEY",
    accent: "#38BDF8", // Cyber Cyan
  },
  {
    icon: Server,
    title: "Multiple Infrastructure Capabilities",
    description:
      "Broad engineering execution spanning modular data centres, campus optical fiber networks, boardroom automation, and clean solar rooftop energy.",
    badge: "CROSS-DOMAIN MASTERY",
    accent: "#2563EB", // Electric Blue
  },
  {
    icon: Wrench,
    title: "Professional Installation Experience",
    description:
      "Strict adherence to structured cabling standards, neat vertical/horizontal cable dressing, certified terminations, and rigorous site safety protocols.",
    badge: "STANDARDS COMPLIANT",
    accent: "#10B981", // Emerald
  },
  {
    icon: Building2,
    title: "Enterprise Technology Solutions",
    description:
      "Architectures engineered specifically for large-footprint enterprises, universities, state departments, and mission-critical public infrastructure.",
    badge: "PUBLIC SECTOR GRADE",
    accent: "#DC2626", // Brand Red
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Approach",
    description:
      "Aligned with our founding motto 'Connecting Values' — delivering transparent proposals, practical bills of materials, and accountable multi-year SLA support.",
    badge: "CONNECTING VALUES",
    accent: "#60A5FA", // Sky Blue
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-1/4 top-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-[#DC2626]/10 rounded-full blur-[130px]" />
      </div>

      <Container size="default" className="relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <FadeIn
            mode="view"
            delay={0.03}
            y={8}
            duration={0.42}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-200">
              OUR ENGINEERING DIFFERENTIATORS
            </span>
          </FadeIn>

          <RevealText
            as="h2"
            by="word"
            mode="view"
            delay={0.08}
            stagger={0.045}
            duration={0.52}
            text="Why Choose"
            highlight="New Link Technologies?"
            highlightClassName="text-sky-400 font-extrabold"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]"
          />

          <FadeIn
            as="p"
            mode="view"
            delay={0.2}
            y={10}
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            We deliver dependability, technical precision, and comprehensive accountability across every physical and digital technology layer.
          </FadeIn>
        </div>

        {/* 5 Value Pillars Grid (Cinema HUD Cards) */}
        <StaggerGroup
          mode="view"
          stagger={0.07}
          delay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                y={18}
                className="group relative bg-slate-900/90 p-7 sm:p-8 rounded-3xl border border-white/15 shadow-xl hover:-translate-y-2 hover:border-sky-400 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Top Glowing Brand Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg border border-white/10"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        color: item.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border border-white/10 bg-white/5"
                      style={{ color: item.accent }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-sky-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guaranteed SLA &amp; Support</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
