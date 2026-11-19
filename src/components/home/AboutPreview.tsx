"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import {
  Container,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "@/components/common";

// Ambient Theme Color Palette for the Interactive Bulb Switcher
const BULB_COLOR_THEMES = [
  {
    id: "crimson",
    name: "Brand Link Crimson",
    bgClass: "bg-[#BE123C]", // Deep rich crimson (matches user reference screenshot)
    accentColor: "#FB7185",
    glowColor: "rgba(225, 29, 72, 0.5)",
    taglineColor: "text-rose-100",
    cardBg: "bg-[#BE123C]",
    cardBorder: "border-[#9F1239]",
    badgeBg: "bg-black/20 text-white",
  },
  {
    id: "royal-navy",
    name: "Electric Royal Navy",
    bgClass: "bg-[#0B254E]", // Deep royal space navy
    accentColor: "#38BDF8",
    glowColor: "rgba(37, 99, 235, 0.5)",
    taglineColor: "text-sky-100",
    cardBg: "bg-[#0B254E]",
    cardBorder: "border-[#1E3A8A]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "cyber-cyan",
    name: "Cyber Cyan Matrix",
    bgClass: "bg-[#034A6E]", // Deep cyber cyan
    accentColor: "#22D3EE",
    glowColor: "rgba(6, 182, 212, 0.5)",
    taglineColor: "text-cyan-100",
    cardBg: "bg-[#034A6E]",
    cardBorder: "border-[#075985]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "emerald",
    name: "Clean Energy Emerald",
    bgClass: "bg-[#064E3B]", // Deep emerald green
    accentColor: "#34D399",
    glowColor: "rgba(16, 185, 129, 0.5)",
    taglineColor: "text-emerald-100",
    cardBg: "bg-[#064E3B]",
    cardBorder: "border-[#065F46]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "obsidian",
    name: "Deep Space Obsidian",
    bgClass: "bg-[#0F172A]", // Deep obsidian black
    accentColor: "#E2F13C",
    glowColor: "rgba(226, 241, 60, 0.4)",
    taglineColor: "text-yellow-100",
    cardBg: "bg-[#0F172A]",
    cardBorder: "border-[#1E293B]",
    badgeBg: "bg-white/20 text-white",
  },
];

export function AboutPreview() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isBulbGlowing, setIsBulbGlowing] = useState(false);

  const activeTheme = BULB_COLOR_THEMES[currentThemeIndex];

  // Bulb Click Handler ("anta bulb la click pana colour change aagutu")
  const handleBulbClick = () => {
    setIsBulbGlowing(true);
    setCurrentThemeIndex((prev) => (prev + 1) % BULB_COLOR_THEMES.length);

    setTimeout(() => {
      setIsBulbGlowing(false);
    }, 500);
  };

  return (
    <div className="relative w-full">
      {/* ======================================================== */}
      {/* 1. SCROLL TRANSITION IMPACT BANNER (EVENTUROX 1:1 REPLICA) */}
      {/* "Experiences crafted to ELEVATE" style with Bulb Color Switcher */}
      {/* ======================================================== */}
      <section
        id="about-impact"
        className={`relative w-full text-white flex flex-col justify-center min-h-[65vh] sm:min-h-[75vh] py-24 sm:py-32 px-6 sm:px-12 md:px-20 overflow-hidden z-10 transition-colors duration-700 ease-out ${activeTheme.bgClass}`}
        style={{
          boxShadow: `inset 0 0 100px rgba(0,0,0,0.35)`,
        }}
      >
        {/* Ambient Radial Spotlight matching Active Theme */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 60% 40%, ${activeTheme.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* ======================================================== */}
        {/* INTERACTIVE GLOWING BULB ("anta bulb la click pana colour change aagutu") */}
        {/* ======================================================== */}
        <div className="absolute top-6 sm:top-10 right-6 sm:right-14 z-30">
          <button
            type="button"
            onClick={handleBulbClick}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none"
            title="Click Bulb to Shift Ambient Color Theme"
            aria-label="Shift Ambient Theme Color"
          >
            <Lightbulb
              className={`w-5 h-5 transition-all duration-300 ${
                isBulbGlowing
                  ? "text-amber-500 fill-amber-500 scale-125"
                  : "text-slate-900"
              }`}
            />
          </button>
        </div>

        {/* Main Kinetic Typography Layout (Exact Replica of Reference) */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-white font-heading tracking-tight leading-none select-none">
              Infrastructure crafted to
            </h2>
            <span
              className="block text-6xl sm:text-8xl md:text-9xl lg:text-[124px] font-black text-white font-heading tracking-tighter leading-none mt-2 uppercase select-none"
              style={{
                textShadow: `0 0 60px rgba(255,255,255,0.4), 0 0 100px ${activeTheme.glowColor}`,
              }}
            >
              ELEVATE
            </span>
          </motion.div>

          {/* Subtitle Aligned to Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, delay: 0.15, ease: CINEMATIC_EASE }}
            className="max-w-md lg:pb-4"
          >
            <p className={`text-lg sm:text-xl md:text-2xl font-light leading-snug transition-colors duration-700 ${activeTheme.taglineColor}`}>
              More than equipment, we engineer mission-critical systems that move Karnataka&apos;s premier institutions forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. 3-COLUMN LUXURY MILESTONE METRICS (FRAME_V0_25 REPLICA) */}
      {/* Revealed cleanly on scroll down */}
      {/* ======================================================== */}
      <section
        id="about-details"
        className="py-20 md:py-28 bg-[#F4F5F7] text-slate-900 relative overflow-hidden select-none border-b border-slate-200"
      >
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            {/* ======================================================== */}
            {/* LEFT COLUMN: 2 Stacked Cards (4 cols) */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 1: 18+ Years of Engineering Heritage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
                className={`rounded-3xl p-8 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px] transition-all duration-700 ${activeTheme.cardBg}`}
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight">
                  18+
                </div>
                <div className="space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading">
                    Years of Engineering Heritage
                  </p>
                  <p className="text-xs text-white/80">
                    Founded in 2011 in Rajajinagar, Bangalore • Turnkey Systems.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: 50+ Implementations (Photo Card with Dark Overlay) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                className="relative rounded-3xl overflow-hidden p-8 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px] group cursor-pointer"
              >
                <Image
                  src="/clients/photos/naac-solar-leadership.jpg"
                  alt="New Link Engineering Leadership"
                  fill
                  sizes="400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />

                <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight">
                  50+
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading">
                    Public Sector &amp; Institutional Clients
                  </p>
                  <p className="text-xs text-white/85">
                    ITI Limited • KEONICS • UAS Raichur • SJBIT
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ======================================================== */}
            {/* CENTER COLUMN: 1 Tall Flagship White Quote Card (4 cols) */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.12, ease: CINEMATIC_EASE }}
              className="lg:col-span-4 rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl flex flex-col justify-between text-center relative overflow-hidden"
            >
              <div className="text-[#BE123C] text-5xl sm:text-6xl font-serif font-black leading-none text-left select-none">
                “
              </div>

              <div className="my-6 space-y-4">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-slate-800 leading-snug">
                  Infrastructure engineered with purpose, driven by reliability, delivered with turnkey precision.
                </blockquote>

                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BE123C] font-bold">
                    NEW LINK TECHNOLOGIES
                  </span>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Connecting Values • Bangalore Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* Leadership Sign-Off */}
              <div className="pt-4 border-t border-slate-150 flex items-center justify-between">
                <div className="text-[#BE123C] text-5xl sm:text-6xl font-serif font-black leading-none select-none">
                  ”
                </div>
                <div className="flex items-center gap-2.5 text-right">
                  <div className="text-xs">
                    <p className="font-heading font-bold text-slate-900">M.G. Girish &amp; Divya D K</p>
                    <p className="text-slate-500 text-[10px] font-mono">Executive Leadership</p>
                  </div>
                  <div className="flex -space-x-2 shrink-0">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                      <Image
                        src="/leadership/director-mg-girish.jpg"
                        alt="M.G. Girish"
                        fill
                        sizes="32px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs">
                      <Image
                        src="/leadership/director-divya-dk.jpg"
                        alt="Divya D K"
                        fill
                        sizes="32px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: 2 Stacked Cards (4 cols) */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 3: 220 kWp Solar Energy Deployed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                className={`rounded-3xl p-8 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px] transition-all duration-700 ${activeTheme.cardBg}`}
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight flex items-baseline">
                  <span>220</span>
                  <span className="text-2xl sm:text-3xl ml-1 font-mono font-bold opacity-90">kWp</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading">
                    Clean Solar Energy Deployed
                  </p>
                  <p className="text-xs text-white/80">
                    320,000+ units annual yield at NAAC via ITI Limited.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: 99.98% SLA Accountability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.15, ease: CINEMATIC_EASE }}
                className={`rounded-3xl p-8 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px] transition-all duration-700 ${activeTheme.cardBg}`}
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight">
                  99.98%
                </div>
                <div className="space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading">
                    Mission-Critical SLA Accountability
                  </p>
                  <p className="text-xs text-white/80">
                    Zero downtime modular data centre &amp; campus OFC ring SLA.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Clean Action Link */}
          <div className="flex justify-center pt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white font-semibold text-xs sm:text-sm shadow-xl shadow-rose-900/20 transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Comprehensive Corporate Profile</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
