"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export function AboutClient() {
  return (
    <div className="relative bg-[#050B14] text-white selection:bg-blue-600 selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO & PURPOSE SECTION (EVENTUROX 1:1 REPLICA) */}
      {/* Frames 00:00 - 00:02: Purpose on Left, Photo Mosaic on Right */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Ambient Cyber Spotlight */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px]" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]" />
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
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>ABOUT NEW LINK TECHNOLOGIES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
                className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight leading-[1.08]"
              >
                Engineered with Purpose.{" "}
                <span className="text-sky-400">Driven by Values.</span>
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
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
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
      {/* 2. "FOUNDER'S NOTE" (EVENTUROX 1:1 REPLICA) */}
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
                <p className="text-xs sm:text-sm font-mono font-bold text-blue-600 uppercase tracking-wider">
                  Founder &amp; Managing Director
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  New Link Technologies Bangalore Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Right Column: Sleek Charcoal Card with Founder Portrait (Exact Match to Reference Video) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-[#18181B] border border-slate-300/40 p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-4"
              >
                {/* Subtle Radial Sunburst Texture */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 70%), repeating-conic-gradient(from 0deg, rgba(255,255,255,0.03) 0deg 15deg, transparent 15deg 30deg)",
                  }}
                />

                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt="M.G. Girish - Founder & Managing Director"
                    fill
                    sizes="240px"
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
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
                  <p className="text-[11px] text-slate-400 font-mono">
                    15+ Years Turnkey Engineering Leadership
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

            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-blue-600 font-bold">
              DATA CENTRES | OPTICAL FIBER | ACTIVE NETWORKING | CLEAN SOLAR ENERGY
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              The Turnkey Collective, an enterprise engineering initiative by New Link, is our dedicated vertical focusing exclusively on mission-critical public sector and institutional deployments across Karnataka and nationwide.
            </p>
          </div>

          {/* Central High-Tech Cinematic Badge & Animation Canvas (Exact Match to Frames 00:13 - 00:21) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
            className="max-w-5xl mx-auto rounded-3xl bg-[#050B14] border border-white/20 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden group min-h-[380px] sm:min-h-[440px] flex flex-col justify-between"
          >
            {/* Ambient High-Tech Cyber Grid & Laser Beams */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-blue-600/15 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

              {/* High-Speed Optical Fiber Light Beam Animation (Matching Plane Zoom) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg viewBox="0 0 800 300" className="w-full h-full" fill="none">
                  <path
                    d="M 50 250 L 350 150 L 750 50"
                    stroke="rgba(37, 99, 235, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                  <path
                    d="M 50 50 L 400 150 L 750 250"
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                  <circle cx="400" cy="150" r="80" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" />
                  <circle cx="400" cy="150" r="130" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* Top Tagline */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATEWIDE MISSION-CRITICAL DEPLOYMENTS</span>
              </span>
              <span className="text-sky-400 font-bold">EPC GRADE</span>
            </div>

            {/* Central Iconic Badge */}
            <div className="relative z-10 my-auto py-8 flex flex-col items-center space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                <span className="font-heading font-black text-3xl sm:text-6xl md:text-7xl tracking-tighter text-white uppercase drop-shadow-xl">
                  NEW<span className="text-sky-400">LINK</span>
                </span>
                <span className="text-white/30 text-2xl sm:text-5xl font-light">|</span>
                <span className="font-heading font-black text-2xl sm:text-5xl md:text-6xl tracking-tight text-blue-500 uppercase drop-shadow-xl">
                  COLLECTIVE
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] text-slate-300 font-bold">
                ENGINEERED INFRASTRUCTURE • CONNECTING VALUES
              </p>

              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-light pt-2 leading-relaxed">
                Built on 15+ years of domain expertise, Fluke certification, and direct OEM Tier-1 partnerships. Delivered on time with zero single-point-of-failure guarantee.
              </p>
            </div>

            {/* Bottom 4 Domains Bar */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs font-mono">
              <div className="bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <p className="text-slate-400 text-[10px]">DOMAIN 01</p>
                <p className="text-white font-bold">Modular Data Centres</p>
              </div>
              <div className="bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <p className="text-slate-400 text-[10px]">DOMAIN 02</p>
                <p className="text-white font-bold">Campus OFC Rings</p>
              </div>
              <div className="bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <p className="text-slate-400 text-[10px]">DOMAIN 03</p>
                <p className="text-white font-bold">Structured Cabling</p>
              </div>
              <div className="bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                <p className="text-slate-400 text-[10px]">DOMAIN 04</p>
                <p className="text-white font-bold">220 kWp Solar EPC</p>
              </div>
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
                className="group bg-[#0A1220] rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 bg-slate-900 group-hover:bg-blue-600 transition-colors duration-500 shadow-md">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="160px"
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-sky-400 transition-colors">
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
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 h-[260px] sm:h-[460px] lg:h-[540px] cursor-pointer"
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
      {/* 6. CORPORATE CTA BANNER & INQUIRY */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden">
        {/* Full-Bleed Corporate Navy Banner */}
        <div className="w-full bg-gradient-to-br from-[#08162B] via-[#0B254E] to-[#0A192F] text-white py-20 sm:py-28 px-6 sm:px-12 text-center relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight leading-tight">
              Got a vision? Let&apos;s engineer it.
            </h2>
            <p className="text-base sm:text-xl font-light text-slate-300 max-w-2xl mx-auto">
              Partner with Karnataka&apos;s premier turnkey technology integrator for modular data centres, optical fiber rings, and clean energy.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-2xl shadow-blue-950/50 transition-all duration-200 hover:scale-105 active:scale-95"
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
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
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
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
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
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
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
