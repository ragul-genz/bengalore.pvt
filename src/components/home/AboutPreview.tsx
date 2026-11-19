"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Server,
  Network,
  Sun,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  FadeIn,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "@/components/common";

// 3 Core Telemetry Status Pillars ("anta 3 dot")
const TELEMETRY_THREE_DOTS = [
  {
    label: "DIRECT OEM ACCREDITATION",
    sub: "28+ Global Technology Leaders",
    color: "#2563EB", // Blue dot
  },
  {
    label: "PSU & GOVT EMPANELLED",
    sub: "ITI Limited • KEONICS • BECIL",
    color: "#E11D48", // Crimson dot
  },
  {
    label: "ZERO-SLA DOWNTIME",
    sub: "Mission-Critical 24/7 Operations",
    color: "#10B981", // Emerald dot
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#08162B] text-white border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Ambient High-Tech Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 -top-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute right-10 bottom-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <Container size="default" className="relative z-10 space-y-16 sm:space-y-20">
        {/* ======================================================== */}
        {/* TOP STATUS ROW: "anta 3 dot" LIVE TELEMETRY PILLS */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2">
          {TELEMETRY_THREE_DOTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.45, delay: i * 0.1, ease: CINEMATIC_EASE }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              {/* Pulsing Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: item.color }}
                />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-200">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {item.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 1. MAIN NARRATIVE: SECTION HEADING & AUTHORITY */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <FadeIn
            mode="view"
            delay={0.04}
            y={8}
            duration={0.42}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-[0.14em]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE TRAIL WE&apos;VE BLAZED • 15+ YEARS OF DELIVERY</span>
          </FadeIn>

          <FadeIn mode="view" delay={0.1} y={12} duration={0.5}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Engineering Dependable Infrastructure Across Karnataka
            </h2>
          </FadeIn>

          <FadeIn mode="view" delay={0.18} y={14} duration={0.55}>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We measure success not just in contracts, but in mission-critical reliability. High-density data centres, 10Gbps optical fiber rings, and 220 kWp clean energy systems engineered to state government standards.
            </p>
          </FadeIn>
        </div>

        {/* ======================================================== */}
        {/* 2. THREE-COLUMN ASYMMETRIC MILESTONE HUD (EVENTUROX STYLE) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ======================================================== */}
          {/* LEFT COLUMN: 2 Expanding Milestone Cards (4 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 1: 15+ Years */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
              className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 border border-white/15 bg-gradient-to-br from-[#0B1F3A] to-[#0A192F] shadow-xl transition-all duration-500 min-h-[220px] flex flex-col justify-between cursor-pointer"
            >
              {/* Background Authentic Photo on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <Image
                  src="/projects/project-modular-datacenter.png"
                  alt="UAS Raichur Modular Data Centre"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#08162B]/80" />
              </div>

              {/* Card Header & Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 font-semibold px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/60">
                  SINCE 2011
                </span>
              </div>

              {/* Big Stat & Label */}
              <div className="relative z-10 mt-6">
                <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                  <span>15</span>
                  <span className="text-blue-400">+</span>
                </div>
                <p className="text-base font-bold text-white mt-1 font-heading">
                  Years of Engineering Excellence
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Founded in 2011 in Rajajinagar, Bangalore • Premier turnkey systems contractor.
                </p>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Card 2: 100+ Deployments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
              className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 border border-white/15 bg-gradient-to-br from-[#0B1F3A] to-[#0A192F] shadow-xl transition-all duration-500 min-h-[220px] flex flex-col justify-between cursor-pointer"
            >
              {/* Background Authentic Photo on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <Image
                  src="/projects/project-command-room-video-wall.png"
                  alt="Command Room Video Wall"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#08162B]/80" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60">
                  PROVEN SCALE
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                  <span>100</span>
                  <span className="text-cyan-400">+</span>
                </div>
                <p className="text-base font-bold text-white mt-1 font-heading">
                  Institutional IT Deployments
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  State Universities, Government Bodies, Defense establishments &amp; PSUs.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: 1 Tall Flagship Prestige Card (4 cols) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.15, ease: CINEMATIC_EASE }}
            className="lg:col-span-4 rounded-3xl p-8 sm:p-9 border border-blue-400/30 bg-gradient-to-b from-[#0F284E] via-[#0B1F3A] to-[#071324] shadow-2xl relative flex flex-col justify-between overflow-hidden group text-center"
          >
            {/* Ambient Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.25)_0%,transparent_70%)] pointer-events-none" />

            {/* Top Logo Nodes Symbol with Connected Lines */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl flex items-center justify-center mb-5">
                <svg
                  viewBox="0 0 60 60"
                  className="w-11 h-11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 36 L42 20" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                  <path d="M18 20 L42 36" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 5" />
                  <circle cx="18" cy="36" r="6" fill="#2563EB" />
                  <circle cx="18" cy="36" r="3" fill="#FFFFFF" />
                  <circle cx="42" cy="20" r="6" fill="#38BDF8" />
                  <circle cx="42" cy="20" r="3" fill="#FFFFFF" />
                  <circle cx="18" cy="20" r="5" fill="#FFFFFF" />
                  <circle cx="42" cy="36" r="5" fill="#E11D48" />
                </svg>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300 font-bold">
                NEW LINK TECHNOLOGIES
              </span>
              <p className="text-xs text-slate-300 font-mono mt-0.5">
                Connecting Values • Bangalore Pvt. Ltd.
              </p>
            </div>

            {/* Core Executive Quote Statement */}
            <div className="relative z-10 my-8 space-y-3">
              <div className="text-blue-400/40 text-4xl font-serif leading-none select-none">
                “
              </div>
              <p className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                Infrastructure engineered with purpose, verified by technical standards, and delivered with 100% turnkey integrity.
              </p>
              <div className="text-blue-400/40 text-4xl font-serif leading-none select-none text-right">
                ”
              </div>
            </div>

            {/* Executive Directors Sign-off */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 shadow-md">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt="M.G. Girish - Director"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 shadow-md">
                  <Image
                    src="/leadership/director-divya-dk.jpg"
                    alt="Divya D K - Director"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-left text-xs">
                <p className="font-heading font-bold text-white">
                  M.G. Girish &amp; Divya D K
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Executive Leadership Board
                </p>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 2 Expanding Milestone Cards (4 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 3: 220 kWp Solar Plant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
              className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 border border-white/15 bg-gradient-to-br from-[#0B1F3A] to-[#0A192F] shadow-xl transition-all duration-500 min-h-[220px] flex flex-col justify-between cursor-pointer"
            >
              {/* Background Authentic Photo on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <Image
                  src="/clients/photos/naac-solar-rooftop.jpg"
                  alt="NAAC 220 kWp Solar Rooftop Array"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#08162B]/80" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60">
                  CLEAN ENERGY
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                  <span>220</span>
                  <span className="text-emerald-400 text-3xl sm:text-4xl"> kWp</span>
                </div>
                <p className="text-base font-bold text-white mt-1 font-heading">
                  Solar Power Plant Commissioned
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  High-capacity rooftop array at NAAC via ITI Limited • 320,000+ annual clean units.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Card 4: 14 Buildings OFC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.2, ease: CINEMATIC_EASE }}
              className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 border border-white/15 bg-gradient-to-br from-[#0B1F3A] to-[#0A192F] shadow-xl transition-all duration-500 min-h-[220px] flex flex-col justify-between cursor-pointer"
            >
              {/* Background Authentic Photo on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <Image
                  src="/clients/photos/sjbit-campus-fiber-handover.jpg"
                  alt="SJBIT 14-Building Campus Optical Fiber Ring"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#08162B]/80" />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-400/30 flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 font-semibold px-2.5 py-1 rounded-full bg-rose-950/60 border border-rose-800/60">
                  CAMPUS OFC RING
                </span>
              </div>

              <div className="relative z-10 mt-6">
                <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                  <span>14</span>
                  <span className="text-rose-400 text-3xl sm:text-4xl"> Bldgs</span>
                </div>
                <p className="text-base font-bold text-white mt-1 font-heading">
                  Inter-Campus Optical Fiber Ring
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  10Gbps Multi-Building Optical Backbone at SJBIT Bangalore • Zero Packet Loss.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>

        {/* Action Link to Full Corporate Profile */}
        <div className="flex justify-center pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all duration-200 group"
          >
            <span>Explore Comprehensive Corporate Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
