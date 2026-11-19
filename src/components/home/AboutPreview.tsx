"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Award,
  Server,
  Network,
  Sun,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  RevealText,
  FadeIn,
  ImageReveal,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

interface MetricCardProps {
  number: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  accent: string;
}

function AnimatedMetricCard({
  number,
  suffix = "",
  label,
  sublabel,
  icon: Icon,
  accent,
}: MetricCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800; // 1.8 seconds smooth count up
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease out expo for cinematic easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * number));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.55, ease: CINEMATIC_EASE }}
      className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top subtle glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-center justify-between gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${accent}15`, color: accent }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          VERIFIED RECORD
        </span>
      </div>

      <div>
        <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight flex items-baseline">
          <span>{count}</span>
          <span style={{ color: accent }}>{suffix}</span>
        </div>
        <p className="text-sm font-bold text-slate-800 mt-1 font-heading">
          {label}
        </p>
        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
          {sublabel}
        </p>
      </div>
    </motion.div>
  );
}

const MILESTONE_METRICS = [
  {
    number: 15,
    suffix: "+",
    label: "Years of Engineering Excellence",
    sublabel: "Founded in 2011 • Karnataka's Trusted Turnkey Leader",
    icon: Award,
    accent: "#2563EB", // Electric Blue
  },
  {
    number: 100,
    suffix: "+",
    label: "Institutional IT Deployments",
    sublabel: "State Universities, Government Bodies & PSUs",
    icon: Server,
    accent: "#06B6D4", // Cyber Cyan
  },
  {
    number: 220,
    suffix: " kWp",
    label: "Clean Solar Power Plant Executed",
    sublabel: "High-capacity rooftop array at NAAC via ITI Limited",
    icon: Sun,
    accent: "#10B981", // Emerald Clean Energy
  },
  {
    number: 14,
    suffix: " Buildings",
    label: "Inter-Campus OFC Ring",
    sublabel: "10Gbps Multi-Building Optical Fiber at SJBIT",
    icon: Network,
    accent: "#E11D48", // Brand Crimson Red
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 backdrop-blur-xs border-b border-slate-200/60 relative overflow-hidden">
      {/* Background Ambient High-Tech Ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute left-1/4 -top-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute right-10 bottom-0 w-80 h-80 bg-rose-50/50 rounded-full blur-3xl" />
      </div>

      <Container size="default" className="relative z-10 space-y-16 sm:space-y-20">
        {/* 1. Main Narrative & Corporate Authority Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Dual-Tone Heading & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow with Brand Accent */}
            <FadeIn
              mode="view"
              delay={0.04}
              y={8}
              duration={0.42}
              className="flex items-center gap-2.5"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.45, delay: 0.04, ease: CINEMATIC_EASE }}
                className="w-6 h-[2px] bg-blue-600 rounded-full shrink-0 origin-left"
              />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                PROVEN TECHNICAL INTEGRITY • 15+ YEARS OF ENTERPRISE DELIVERY
              </span>
            </FadeIn>

            {/* Main Cinema Heading */}
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="Technology That"
              highlight="Connects Possibilities"
              highlightClassName="text-blue-600"
              highlightOnNewLine
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12]"
            />

            {/* Narrative Paragraph */}
            <FadeIn
              as="p"
              mode="view"
              delay={0.2}
              y={14}
              duration={0.55}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              <strong className="text-slate-900 font-semibold">
                {COMPANY_DETAILS.name}
              </strong>{" "}
              is an established Bangalore-headquartered engineering infrastructure and turnkey IT solutions leader. We engineer mission-critical modular data centres, campus-wide optical fiber backbones, digital auditoriums, and clean renewable energy systems for premier state universities, government directorates, and modern enterprises.
            </FadeIn>

            {/* Capabilities Highlights & Leadership Row */}
            <FadeIn
              mode="view"
              delay={0.28}
              y={16}
              duration={0.55}
              className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Modular Data Centres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Campus Optical Fiber</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Digital Auditoriums &amp; AV</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold text-slate-800">220 kWp Solar Arrays</span>
                </div>
              </div>

              {/* Executive Directors Sign-off */}
              <div className="flex items-center gap-3.5 shrink-0 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex -space-x-2 shrink-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs z-10">
                    <Image
                      src="/leadership/director-mg-girish.jpg"
                      alt="M.G. Girish - Director"
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs z-0">
                    <Image
                      src="/leadership/director-divya-dk.jpg"
                      alt="Divya D K - Director"
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="text-xs">
                  <p className="font-heading font-bold text-slate-900">
                    Executive Leadership
                  </p>
                  <p className="text-slate-500 text-[11px] font-medium">
                    M.G. Girish &amp; Divya D K
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Action Link */}
            <FadeIn mode="view" delay={0.36} y={10} duration={0.45} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Corporate Visual Card (5 cols) */}
          <FadeIn mode="view" delay={0.2} y={18} duration={0.55} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-300/50 bg-slate-900 aspect-16/10 group">
              <ImageReveal className="w-full h-full relative" duration={0.65}>
                <Image
                  src="/about/corporate-glass-building.png"
                  alt="New Link Technologies Bangalore Corporate Headquarters"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </ImageReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-2xl shadow-lg border border-white/40">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900 leading-tight">
                      Rajajinagar, Bangalore
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Serving PSUs, Universities &amp; Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 2. "The Trail We've Blazed" - 4-Column Animated Milestone HUD */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-blue-600 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                THE TRAIL WE&apos;VE BLAZED • FIELD METRICS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight mt-1">
                Engineering Impact Delivered Across Karnataka
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Demonstrated track record of turnkey systems delivery with 100% government specification compliance and on-time commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MILESTONE_METRICS.map((metric) => (
              <AnimatedMetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
