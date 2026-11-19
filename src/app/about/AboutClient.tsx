"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

const CINEMA_SLIDES = [
  {
    id: 1,
    image: "/projects/project-modular-datacenter.png",
    headline: "INFRASTRUCTURE THAT EMPOWERS",
    subline: "UAS Raichur • Turnkey Modular Data Centre Integration",
  },
  {
    id: 2,
    image: "/clients/photos/naac-solar-leadership.jpg",
    headline: "MILESTONES THAT MATTER",
    subline: "NAAC Bangalore • 220 kWp Clean Solar Power Plant Commissioning",
  },
  {
    id: 3,
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    headline: "ENGINEERED WITH UNCOMPROMISING INTEGRITY",
    subline: "SJBIT Bangalore • 10Gbps Multi-Building Campus OFC Backbone",
  },
  {
    id: 4,
    image: "/clients/photos/tumkur-auditorium.jpg",
    headline: "SOLUTIONS DELIVERED WITH PASSION",
    subline: "Tumkur University • Smart Auditorium Acoustics & Digital AV",
  },
];

export function AboutClient() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance cinema reel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CINEMA_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CINEMA_SLIDES.length);
  };

  return (
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ICONIC "ABOUT US" OVERLAP LAYOUT */}
      {/* (1:1 Match to Video Frames 00:01 - 00:05) */}
      {/* Left: Manifesto & Purpose | Right: Vertical Logo Color Pillar + Overlapping "About Us" */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Philosophy & Institutional Purpose */}
            <div className="lg:col-span-7 space-y-7">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-snug"
              >
                Infrastructure today is a powerful foundation for growth, not just operations.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: CINEMATIC_EASE }}
                className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed"
              >
                <p>
                  At New Link Technologies, we align every element: modular data centres, campus optical fiber networks, structured cabling, audio-visual automation, and clean solar energy, to the exact outcomes each institution demands. Our focus is on turnkey precision, so critical engineering reaches its most reliable, standards-compliant, and optimized form faster.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Headquartered in Rajajinagar, Bangalore under Director M.G. Girish, we partner with premier universities, public sector undertakings, and defense establishments to engineer enduring infrastructure built with precision, integrity, and purpose.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: CINEMATIC_EASE }}
                className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ISO 9001:2015 CERTIFIED</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>FOUNDED IN 2011 • RAJAJINAGAR, BANGALORE</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Vertical Pillar in Official Logo Navy with Giant Overlapping "About Us" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-[300px] sm:max-w-sm md:w-96 h-[240px] sm:h-[400px] md:h-[520px] rounded-3xl bg-[#0B1F3A] border border-[#142B4A] p-6 sm:p-8 shadow-2xl shadow-[#0B1F3A]/25 flex items-center justify-center overflow-hidden group select-none"
              >
                {/* Vertical Pill Tag */}
                <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] font-mono tracking-widest text-sky-200 uppercase font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  EST. 2011
                </span>

                {/* Giant Overlapping "About Us" Headline (Exact match to Reference Frame 00:01) */}
                <div className="relative z-10 text-left space-y-0.5 sm:space-y-1">
                  <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter text-white drop-shadow-md leading-[0.85]">
                    About
                  </h1>
                  <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter text-sky-300 drop-shadow-md leading-[0.85]">
                    Us
                  </h1>
                  <p className="pt-2 sm:pt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/80 font-bold">
                    CONNECTING VALUES
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. "A LEGACY OF ENGINEERING EXCELLENCE" CINEMA REEL */}
      {/* (1:1 Match to Video Frames 00:06 - 00:13) */}
      {/* Curved Widescreen Display + Centered Headline + Clickable Next Arrow */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0B1F3A] border-b border-[#142B4A] relative overflow-hidden select-none text-white">
        <Container size="default" className="relative z-10 space-y-8">
          {/* Top Label & Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 border-b border-white/15 pb-4">
            <span className="font-bold uppercase tracking-[0.2em] text-sky-300">
              A Legacy of Engineering Excellence
            </span>
            <span>
              0{currentSlide + 1} / 0{CINEMA_SLIDES.length}
            </span>
          </div>

          {/* Widescreen Cinema Reel Container */}
          <div className="relative aspect-16/10 sm:aspect-21/9 w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/20 bg-black shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={CINEMA_SLIDES[currentSlide].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={CINEMA_SLIDES[currentSlide].image}
                  alt={CINEMA_SLIDES[currentSlide].headline}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

                {/* Centered Large Headline Overlay (Exact Match to Frame 00:08) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 pointer-events-none">
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight drop-shadow-2xl uppercase max-w-4xl"
                  >
                    {CINEMA_SLIDES[currentSlide].headline}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xs sm:text-sm font-mono text-sky-300 font-semibold uppercase tracking-wider drop-shadow-md"
                  >
                    {CINEMA_SLIDES[currentSlide].subline}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Clickable Next Arrow (Exact Match to Arrow at Frame 00:08) */}
            <button
              type="button"
              onClick={handleNextSlide}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0B1F3A]/80 hover:bg-[#2563EB] active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-300 cursor-pointer group/arrow z-20"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover/arrow:translate-x-1" />
            </button>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 3. FOUR HORIZONTAL VALUE CARDS */}
      {/* (1:1 Match to Video Frames 00:14 - 00:16) */}
      {/* Alternating White Solid Cards & Dark Glass Cards on Brand Navy Canvas */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#0E274A] border-b border-[#142B4A] select-none text-white">
        <Container size="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1: Collaborate (Solid White Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.05, ease: CINEMATIC_EASE }}
              className="bg-white rounded-3xl p-8 sm:p-10 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[160px]"
            >
              <h4 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                Collaborate
              </h4>
            </motion.div>

            {/* Card 2: Elevate (Navy Glass Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[160px]"
            >
              <h4 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white">
                Elevate
              </h4>
            </motion.div>

            {/* Card 3: And Transform (Solid White Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.15, ease: CINEMATIC_EASE }}
              className="bg-white rounded-3xl p-8 sm:p-10 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[160px]"
            >
              <h4 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                And Transform
              </h4>
            </motion.div>

            {/* Card 4: Infrastructure With A Purpose (Navy Glass Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.2, ease: CINEMATIC_EASE }}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 text-sky-300 flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[160px]"
            >
              <h4 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-center">
                Infrastructure With A Purpose
              </h4>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 4. SPLIT PURPOSE & PHOTO SHOWCASE */}
      {/* (1:1 Match to Video Frames 00:17 - 00:20) */}
      {/* Left: Detailed Mission Text | Right: Real Photographic Mosaic */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden text-[#0F172A]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Detailed Mission Narrative (Matching Text from Frame 00:20) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
                <p>
                  At New Link Technologies Bangalore Pvt. Ltd., we align every element: modular data centres, campus optical fiber networks, structured cabling, audio-visual automation, and clean solar power, to the exact operational outcomes each institution demands. Our focus is on maximizing engineering precision, so infrastructure reaches its most reliable and future-ready state faster.
                </p>
                <p>
                  Driven to become Karnataka&apos;s most trusted and accountable technology partner, we craft transformative infrastructure that powers modern universities, public sector undertakings, and defense directorates. Powered by bold engineering, deep technical collaboration, and an uncompromising pursuit of excellence, we deliver turnkey systems with precision, passion, and purpose.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">100% Turnkey Handover SLA</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span className="font-semibold text-slate-800">Statewide Public Sector Execution</span>
                </div>
              </div>
            </div>

            {/* Right: Photographic Mosaic (Matching Photo Container at Frame 00:20) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
                <Image
                  src="/clients/photos/naac-solar-leadership.jpg"
                  alt="New Link Technologies Leadership and Engineering Directorate"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <p className="text-sm font-bold font-heading text-white">
                    Engineering Leadership &amp; Operational Governance
                  </p>
                  <p className="text-xs text-sky-300 font-mono">
                    Director M.G. Girish &amp; Divya D K with Engineering Directorate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 5. "FOUNDER'S NOTE" */}
      {/* Frames: Director M.G. Girish Manifesto & Authentic Portrait */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#0B1F3A] text-white relative overflow-hidden select-none border-b border-[#142B4A]">
        <Container size="default" className="relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none"
            >
              Founder&apos;s Note
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
              className="text-lg sm:text-xl md:text-2xl font-light text-slate-200 italic max-w-3xl mx-auto leading-relaxed"
            >
              &ldquo;With over 15 years in the enterprise technology industry, my motivation behind establishing New Link Technologies was simple: to redefine and elevate turnkey IT infrastructure with enduring technical integrity in every possible way.&rdquo;
            </motion.blockquote>
          </div>

          {/* Grid Layout: Text Left, Portrait Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto pt-6">
            {/* Left Column: Manifesto & Sign-Off */}
            <div className="lg:col-span-7 space-y-6 text-slate-200 font-light">
              <div className="space-y-4 text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold leading-relaxed">
                <p>
                  AT NEW LINK, OUR GOAL HAS ALWAYS BEEN TO BUILD AN ENGINEERING SYSTEM WHERE EVERY CAMPUS, PUBLIC SECTOR UNDERTAKING, AND ENTERPRISE IS EMPOWERED WITH ROCK-SOLID RELIABILITY, TRANSPARENT BILLS OF MATERIALS, AND ACCOUNTABLE 24/7 SLA SUPPORT.
                </p>
                <p className="font-normal text-slate-200 normal-case font-sans text-sm sm:text-base leading-relaxed">
                  When engineering precision, standards compliance, and genuine technical passion come together, extraordinary infrastructure follows. We do not just integrate equipment — we build mission-critical foundations that power Karnataka&apos;s leading universities, healthcare directorates, and public infrastructure.
                </p>
              </div>

              {/* Founder Sign-off */}
              <div className="pt-6 border-t border-white/15 space-y-1">
                <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
                  M.G. Girish
                </h4>
                <p className="text-xs sm:text-sm font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Founder &amp; Managing Director
                </p>
                <p className="text-xs text-slate-300 font-mono">
                  New Link Technologies Bangalore Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Right Column: Sleek Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-[#142B4A] border border-white/20 p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt="M.G. Girish - Founder & Managing Director"
                    fill
                    sizes="240px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-white/90 uppercase font-bold bg-black/60 px-2.5 py-0.5 rounded-full">
                    NEW LINK
                  </span>
                </div>

                <div className="relative z-10 text-white space-y-0.5 pt-1">
                  <p className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white">
                    M.G. Girish
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Founder &amp; Managing Director
                  </p>
                  <p className="text-[11px] text-slate-300 font-mono">
                    15+ Years Turnkey Engineering Leadership
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 6. "HUMANS OF NEW LINK" LEADERSHIP BOARD (2 AUTHENTIC DIRECTORS) */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-36 bg-[#0E274A] text-white relative overflow-hidden border-b border-[#142B4A] select-none">
        <Container size="default" className="relative z-10 space-y-16">
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none">
              Humans of New Link
            </h2>
            <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto">
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
                className="group bg-[#0B1F3A] rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl hover:border-sky-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 bg-slate-900 shadow-md">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="144px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3 text-center sm:text-left flex-1 min-w-0">
                  <div className="space-y-0.5">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                      {director.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                      {director.role} • New Link Technologies
                    </p>
                    <p className="text-xs text-slate-300 font-mono">
                      {director.designation}
                    </p>
                  </div>

                  <p className="text-xs text-slate-200 font-light leading-relaxed line-clamp-3">
                    {director.bio[0]}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                    <a
                      href={`tel:${director.phoneRaw}`}
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-sky-400" />
                      <span>{director.phone}</span>
                    </a>
                    <a
                      href={`mailto:${director.email}`}
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3 h-3 text-sky-400" />
                      <span>{director.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 7. EXECUTIVE TURNKEY CONSULTATION CTA */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-10 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-mono uppercase tracking-wider">
              CONNECTING VALUES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ready to Build Infrastructure That Endures?
            </h2>
            <p className="text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Connect directly with Director M.G. Girish and our engineering leadership for turnkey project execution, campus surveys, and institutional proposals.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <span>Request Turnkey Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/20 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Contact Headquarters</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
