"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container, RevealText, FadeIn } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export function CtaSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 md:py-36 bg-[#050B14] text-white relative overflow-hidden border-t border-white/10">
      {/* 1. Cinematic Concentric Pulsing Rings (Harmonized with New Link Brand Colors) */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
        {/* Outer Ring */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-500/10 animate-ping opacity-20 duration-1000" />
        {/* Mid Ring with Electric Blue glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-sky-400/15" />
        {/* Inner Ring with subtle Brand Crimson tint matching our logo */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-rose-500/20 bg-blue-600/5 blur-xl" />
        {/* Center Radial Glow */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-sky-400/10 to-rose-600/10 rounded-full blur-[140px]" />
      </div>

      <Container size="default" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          {/* Eyebrow Pill */}
          <FadeIn
            mode="view"
            delay={0.04}
            y={8}
            duration={0.42}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-white/10 text-white border border-white/15 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-[11px] text-slate-200">
              MISSION-CRITICAL INFRASTRUCTURE PARTNER
            </span>
          </FadeIn>

          {/* Main Cinema Heading */}
          <div className="space-y-2">
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="Have an Infrastructure Vision?"
              highlight="Let's Engineer It Real."
              highlightClassName="text-sky-400 font-extrabold"
              highlightOnNewLine
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]"
            />
          </div>

          {/* Narrative Paragraph */}
          <FadeIn
            as="p"
            mode="view"
            delay={0.2}
            y={12}
            duration={0.55}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            From turnkey modular data centres and campus-wide optical fiber backbones to 220 kWp solar arrays and command rooms — our engineering directorate in Rajajinagar, Bangalore is ready to assess your requirements.
          </FadeIn>

          {/* Cinema-Grade 45-Degree Rotating Arrow Interactive CTA Pill */}
          <FadeIn
            mode="view"
            delay={0.32}
            y={12}
            duration={0.5}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Primary Interactive Pill Button with Rotating Arrow */}
            <Link
              href="/contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-white text-white hover:text-slate-900 font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-2xl transition-all duration-300 select-none cursor-pointer"
            >
              <span>Request Turnkey Consultation</span>
              <div
                className="w-8 h-8 rounded-full bg-white text-slate-900 group-hover:bg-[#E11D48] group-hover:text-white flex items-center justify-center transition-all duration-300"
                style={{
                  transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm backdrop-blur-md transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Direct: {COMPANY_DETAILS.contact.phone}</span>
            </a>
          </FadeIn>

          {/* Contact Direct Strip */}
          <FadeIn
            mode="view"
            delay={0.4}
            y={10}
            className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Rajajinagar, Bangalore - 560010</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-400" />
              <span>{COMPANY_DETAILS.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Government &amp; PSU Compliance</span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
