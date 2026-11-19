"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronUp,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

interface Milestone {
  year: string;
  shortYear: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

const JOURNEY_MILESTONES: Milestone[] = [
  {
    year: "2011",
    shortYear: "11",
    title: "Company Inception & Founding",
    subtitle: "Connecting Values Established in Bangalore",
    description:
      "Founded in Rajajinagar, Bangalore under Director M.G. Girish with a definitive mission: delivering transparent, accountable enterprise IT systems and cabling infrastructure under our founding motto 'Connecting Values'.",
    image: "/leadership/director-mg-girish.jpg",
    badge: "FOUNDATION",
  },
  {
    year: "2015",
    shortYear: "15",
    title: "Structured Cabling & Network Operations",
    subtitle: "High-Density Enterprise Infrastructure",
    description:
      "Expanded into high-density enterprise network infrastructure, Fluke-certified structured cabling dressing, server room architecture, and certified terminations for major commercial and government institutions.",
    image: "/projects/project-color-patching-dressing.png",
    badge: "ENTERPRISE NETWORKING",
  },
  {
    year: "2018",
    shortYear: "18",
    title: "10Gbps Inter-Campus Optical Fiber Ring",
    subtitle: "Flagship 14-Building Backbone at SJBIT",
    description:
      "Engineered and commissioned the flagship 14-building inter-campus 10Gbps armored optical fiber ring at SJB Institute of Technology (SJBIT) Bangalore with redundant ring topology and zero packet loss.",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    badge: "CAMPUS OFC RING",
  },
  {
    year: "2021",
    shortYear: "21",
    title: "Modular Data Centre at UAS Raichur",
    subtitle: "Tier-3 Turnkey Server Room & Precision Cooling",
    description:
      "Turnkey design, supply, precision in-row cooling, and commissioning of the state-of-the-art Modular Data Centre and server enclosure array for the University of Agricultural Sciences (UAS), Raichur.",
    image: "/projects/project-modular-datacenter.png",
    badge: "MODULAR DATA CENTRE",
  },
  {
    year: "2024",
    shortYear: "24",
    title: "220 kWp Solar Power Plant via ITI Limited",
    subtitle: "High-Capacity Rooftop Clean Energy at NAAC",
    description:
      "Successfully engineered and commissioned the high-capacity 220 kWp institutional rooftop solar photovoltaic power plant at NAAC Bangalore through premier central PSU ITI Limited, generating 320,000+ clean annual units.",
    image: "/clients/photos/naac-solar-rooftop.jpg",
    badge: "CLEAN ENERGY",
  },
  {
    year: "2026",
    shortYear: "26",
    title: "The Future of Turnkey Infrastructure",
    subtitle: "AI Compute, Command Walls & Green Campus Microgrids",
    description:
      "Continuing to pioneer enterprise technology integration with next-generation AI compute clusters, 24/7 command & control room video walls, and sustainable campus clean energy across Karnataka and nationwide.",
    image: "/projects/project-command-room-video-wall.png",
    badge: "THE FUTURE",
  },
];

export function AboutClient() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(3); // Default to 2021
  const activeMilestone = JOURNEY_MILESTONES[activeMilestoneIndex];

  const handlePrevYear = () => {
    setActiveMilestoneIndex((prev) =>
      prev > 0 ? prev - 1 : JOURNEY_MILESTONES.length - 1
    );
  };

  const handleNextYear = () => {
    setActiveMilestoneIndex((prev) =>
      prev < JOURNEY_MILESTONES.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="relative bg-[#050B14] text-white selection:bg-[#BE123C] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO & PURPOSE SECTION (EVENTUROX 1:1 REPLICA) */}
      {/* Frames 00:00 - 00:02: Purpose on Left, Photo Mosaic on Right */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Ambient Cyber Spotlight */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[160px]" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Bold Purpose & Manifesto */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-slate-300 text-xs font-mono uppercase tracking-[0.18em]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>ABOUT NEW LINK TECHNOLOGIES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
                className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight leading-[1.08]"
              >
                Engineered with Purpose.{" "}
                <span className="text-[#E11D48]">Driven by Values.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: CINEMATIC_EASE }}
                className="space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed"
              >
                <p>
                  Driven to become Karnataka&apos;s most trusted and accountable technology partner, we engineer transformative infrastructure that powers modern institutions and creates enduring impact.
                </p>
                <p className="text-slate-400 text-sm sm:text-base">
                  Powered by bold engineering, deep technical collaboration, and an uncompromising pursuit of excellence, we deliver turnkey IT systems, modular data centres, campus optical fiber networks, and sustainable clean energy with precision, passion, and purpose.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: CINEMATIC_EASE }}
                className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ISO 9001:2015 CERTIFIED</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                  <span>FOUNDED IN 2011 • BANGALORE</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Dynamic Visual Photo Mosaic (Matching Frame 00:01) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: CINEMATIC_EASE }}
              className="lg:col-span-6 grid grid-cols-2 gap-4 select-none"
            >
              <div className="space-y-4">
                <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/projects/project-modular-datacenter.png"
                    alt="UAS Raichur Modular Data Centre"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Modular Data Centre
                  </span>
                </div>

                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/clients/photos/sjbit-campus-fiber-handover.jpg"
                    alt="SJBIT Campus Fiber Handover"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    SJBIT Fiber Ring
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/clients/photos/naac-solar-leadership.jpg"
                    alt="NAAC Solar Commissioning Team"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Engineering Directorate
                  </span>
                </div>

                <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/clients/photos/naac-solar-rooftop.jpg"
                    alt="220 kWp Solar Plant"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    220 kWp Solar Plant
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. "OUR JOURNEY" INTERACTIVE TIMELINE (EXACT REPLICA) */}
      {/* Frames 00:02 - 00:09: Horizontal Scrubber, Vertical Year List, Photo */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#050B14] relative overflow-hidden border-b border-white/10 select-none">
        {/* Giant Watermark Year Number in Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeMilestone.shortYear}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
              className="font-heading font-black text-[220px] sm:text-[340px] md:text-[460px] lg:text-[540px] text-white/[0.04] leading-none tracking-tighter"
            >
              {activeMilestone.shortYear}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none"
          >
            Our Journey
          </motion.h2>

          {/* Marquee Subtitle */}
          <div className="overflow-hidden py-1">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-slate-400 font-bold whitespace-nowrap">
              ENGINEERED FOR EXCELLENCE • TURNKEY IT &amp; RENEWABLE INFRASTRUCTURE • CONNECTING VALUES • 15+ YEARS
            </p>
          </div>
        </div>

        {/* Interactive Timeline Center Stage */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 relative z-20">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Horizontal Scrubber Line (Desktop) */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative w-full h-[2px] bg-white/20 flex items-center">
                <motion.div
                  animate={{
                    left: `${(activeMilestoneIndex / (JOURNEY_MILESTONES.length - 1)) * 80}%`,
                  }}
                  transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
                  className="absolute w-8 h-4 rounded-full bg-white flex items-center justify-center shadow-lg shadow-white/20"
                >
                  <span className="w-2 h-2 rounded-full bg-[#050B14]" />
                </motion.div>
              </div>
            </div>

            {/* Center Stage: Photo Card + Details */}
            <div className="lg:col-span-8 flex flex-col items-center text-center space-y-6">
              {/* Year Pill Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.year}
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#E11D48] text-white font-mono font-bold text-sm tracking-wider shadow-lg shadow-rose-900/40"
                >
                  {activeMilestone.year}
                </motion.div>
              </AnimatePresence>

              {/* Curved Photo Card */}
              <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestone.year}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.55, ease: CINEMATIC_EASE }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeMilestone.image}
                      alt={activeMilestone.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/85 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Milestone Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2 max-w-xl mx-auto"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#E11D48] font-mono uppercase tracking-wider">
                    {activeMilestone.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-1">
                    {activeMilestone.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Vertical Year Selector (Exact Match to Frame 00:04) */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center gap-2 sm:gap-3 pt-6 lg:pt-0">
              {/* Up Arrow */}
              <button
                type="button"
                onClick={handlePrevYear}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous milestone"
              >
                <ChevronUp className="w-5 h-5" />
              </button>

              {/* Vertical Stack of Years */}
              <div className="flex flex-row lg:flex-col items-center gap-2 sm:gap-2.5">
                {JOURNEY_MILESTONES.map((m, idx) => {
                  const isActive = idx === activeMilestoneIndex;
                  return (
                    <button
                      key={m.year}
                      type="button"
                      onClick={() => setActiveMilestoneIndex(idx)}
                      className={`font-mono text-sm sm:text-base transition-all duration-200 cursor-pointer px-2 py-0.5 rounded-lg ${
                        isActive
                          ? "text-[#E11D48] font-black text-lg sm:text-xl scale-110"
                          : "text-slate-500 hover:text-slate-300 font-medium"
                      }`}
                    >
                      {m.year}
                    </button>
                  );
                })}
              </div>

              {/* Down Arrow */}
              <button
                type="button"
                onClick={handleNextYear}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next milestone"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "FOUNDER'S NOTE" (EVENTUROX 1:1 REPLICA) */}
      {/* Frames 00:10 - 00:12: Clean Off-White Background, Founder Photo */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#F4F5F7] text-slate-900 relative overflow-hidden select-none border-b border-slate-300">
        <Container size="default" className="relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tight leading-none"
            >
              Founder&apos;s Note
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
              className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 italic max-w-3xl mx-auto leading-relaxed"
            >
              &ldquo;With over 15 years in the enterprise technology industry, my motivation behind establishing New Link Technologies was simple: to redefine and elevate turnkey IT infrastructure with enduring technical integrity in every possible way.&rdquo;
            </motion.blockquote>
          </div>

          {/* Grid Layout: Text Left, Crimson Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto pt-6">
            {/* Left Column: Manifesto & Sign-Off */}
            <div className="lg:col-span-7 space-y-6 text-slate-700">
              <div className="space-y-4 text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-900 font-bold leading-relaxed">
                <p>
                  AT NEW LINK, OUR GOAL HAS ALWAYS BEEN TO BUILD AN ENGINEERING SYSTEM WHERE EVERY CAMPUS, PUBLIC SECTOR UNDERTAKING, AND ENTERPRISE IS EMPOWERED WITH ROCK-SOLID RELIABILITY, TRANSPARENT BILLS OF MATERIALS, AND ACCOUNTABLE 24/7 SLA SUPPORT.
                </p>
                <p className="font-normal text-slate-600 normal-case font-sans text-sm sm:text-base leading-relaxed">
                  When engineering precision, standards compliance, and genuine technical passion come together, extraordinary infrastructure follows. We do not just integrate equipment — we build mission-critical foundations that power Karnataka&apos;s leading universities, healthcare directorates, and public infrastructure.
                </p>
              </div>

              {/* Founder Sign-off */}
              <div className="pt-6 border-t border-slate-300 space-y-1">
                <h4 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                  M.G. Girish
                </h4>
                <p className="text-xs sm:text-sm font-mono font-bold text-[#BE123C] uppercase tracking-wider">
                  Founder &amp; Managing Director
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  New Link Technologies Bangalore Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Right Column: Large Crimson Red Card with Founder Photo (Frame 00:10) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-[#BE123C] p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-4"
              >
                {/* Subtle Radial Sunburst Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt="M.G. Girish - Founder & Managing Director"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="relative z-10 text-white space-y-0.5">
                  <p className="font-heading font-black text-xl sm:text-2xl tracking-tight">
                    M.G. Girish
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-rose-200">
                    15+ Years Turnkey Leadership
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 4. "THE TURNKEY ENGINEERING COLLECTIVE" (EVENTUROX STYLE) */}
      {/* Frames 00:13 - 00:17: Matching "The MICE Collective" */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#F4F5F7] text-slate-900 relative overflow-hidden select-none border-b border-slate-300">
        <Container size="default" className="relative z-10 space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tight leading-none"
            >
              The Turnkey Collective
            </motion.h2>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#BE123C] font-bold">
              DATA CENTRES | OPTICAL FIBER | ACTIVE NETWORKING | CLEAN SOLAR ENERGY
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              The Turnkey Collective, an enterprise engineering initiative by New Link, is our dedicated vertical focusing exclusively on mission-critical public sector and institutional deployments across Karnataka and nationwide.
            </p>
          </div>

          {/* Central Black Badge Banner (Matching Frame 00:15) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
            className="max-w-4xl mx-auto rounded-3xl bg-[#050B14] border border-white/15 p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Red Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 via-transparent to-blue-600/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-heading font-black text-3xl sm:text-5xl tracking-tighter text-white uppercase">
                  NEW<span className="text-[#E11D48]">LINK</span>
                </span>
                <span className="text-white/30 text-3xl font-light">|</span>
                <span className="font-heading font-black text-2xl sm:text-4xl tracking-tight text-[#E11D48] uppercase">
                  TURNKEY
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-slate-400 font-bold">
                ENGINEERED INFRASTRUCTURE • CONNECTING VALUES
              </p>

              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-light pt-2">
                Built on 15+ years of domain expertise, Fluke certification, and direct OEM Tier-1 partnerships. Delivered on time with zero single-point-of-failure guarantee.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 5. "HUMANS OF NEW LINK" LEADERSHIP BOARD (2 AUTHENTIC DIRECTORS) */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10 select-none">
        <Container size="default" className="relative z-10 space-y-16">
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none">
              Humans of New Link
            </h2>
            <p className="text-base sm:text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Behind every mission-critical deployment is accountable executive leadership
            </p>
          </div>

          {/* 2 Authentic Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {COMPANY_DETAILS.leadership.directors.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: i * 0.1, ease: CINEMATIC_EASE }}
                className="group bg-[#0A1220] rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl hover:border-rose-500/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 bg-slate-900 group-hover:bg-[#BE123C] transition-colors duration-500 shadow-md">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="160px"
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#E11D48] transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {director.role} • {director.designation}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-1">
                    {director.bio[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full-Width Engineering Tribe Photo */}
          <div className="space-y-6 pt-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                The New Link Engineering Tribe
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
                15+ years. 100+ institutional deployments. Engineering precision in the field.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 h-[340px] sm:h-[460px] lg:h-[540px] cursor-pointer"
            >
              <Image
                src="/clients/photos/naac-solar-leadership.jpg"
                alt="The New Link Engineering Team on-site"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-white">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  Turnkey Engineering Directorate • Bengaluru
                </span>
                <span className="text-xs font-mono text-white/80 hidden sm:inline-block">
                  Hover to view full color
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 6. CRIMSON CTA BANNER & INQUIRY ("Got a vision? Let's make it real.") */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden">
        {/* Full-Bleed Crimson Banner */}
        <div className="w-full bg-[#BE123C] text-white py-20 sm:py-28 px-6 sm:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight leading-tight">
              Got a vision? Let&apos;s engineer it.
            </h2>
            <p className="text-base sm:text-xl font-light text-rose-100 max-w-2xl mx-auto">
              Partner with Karnataka&apos;s premier turnkey technology integrator for modular data centres, optical fiber rings, and clean energy.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-black hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="py-20 bg-[#050B14] text-white border-t border-white/10">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0A1220] border border-white/10">
                <div className="w-11 h-11 rounded-full bg-[#BE123C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Phone</p>
                  <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors">
                    {COMPANY_DETAILS.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0A1220] border border-white/10">
                <div className="w-11 h-11 rounded-full bg-[#BE123C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Executive Email</p>
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors">
                    {COMPANY_DETAILS.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0A1220] border border-white/10">
                <div className="w-11 h-11 rounded-full bg-[#BE123C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Corporate Headquarters</p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    {COMPANY_DETAILS.contact.address.full}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
