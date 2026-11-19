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

// Ambient Theme Color Palette for the Interactive Bulb Switcher (Authentic New Link Palette)
const BULB_COLOR_THEMES = [
  {
    id: "royal-navy",
    name: "Corporate Royal Navy",
    bgClass: "bg-[#0B1F3A]", // Official Logo Navy
    accentColor: "#38BDF8",
    glowColor: "rgba(37, 99, 235, 0.3)",
    taglineColor: "text-sky-100",
    cardBg: "bg-[#0B1F3A]",
    cardBorder: "border-[#1E3A8A]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "sapphire-blue",
    name: "Enterprise Sapphire Blue",
    bgClass: "bg-[#1E3A8A]", // Deep enterprise sapphire
    accentColor: "#60A5FA",
    glowColor: "rgba(59, 130, 246, 0.3)",
    taglineColor: "text-blue-100",
    cardBg: "bg-[#1E3A8A]",
    cardBorder: "border-[#1D4ED8]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "technical-slate",
    name: "Technical Deep Slate",
    bgClass: "bg-[#1E293B]", // Deep technical slate
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.3)",
    taglineColor: "text-slate-200",
    cardBg: "bg-[#1E293B]",
    cardBorder: "border-[#334155]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "emerald",
    name: "Clean Energy Emerald",
    bgClass: "bg-[#064E3B]", // Deep emerald green
    accentColor: "#34D399",
    glowColor: "rgba(16, 185, 129, 0.3)",
    taglineColor: "text-emerald-100",
    cardBg: "bg-[#064E3B]",
    cardBorder: "border-[#065F46]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "royal-indigo",
    name: "Royal Enterprise Indigo",
    bgClass: "bg-[#1E1B4B]", // Deep enterprise indigo
    accentColor: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.3)",
    taglineColor: "text-indigo-100",
    cardBg: "bg-[#1E1B4B]",
    cardBorder: "border-[#312E81]",
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

        {/* Main Kinetic Typography Layout (Authentic New Link IT Engineering Topic) */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-white font-heading tracking-tight leading-none select-none">
              Technology engineered to
            </h2>
            <span className="block text-5xl sm:text-7xl md:text-9xl lg:text-[124px] font-black text-white font-heading tracking-tighter leading-none mt-2 uppercase select-none">
              EMPOWER
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
              More than equipment. We engineer turnkey modular data centres, campus fiber backbones, and clean energy that drive Karnataka&apos;s premier institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. 3-COLUMN LUXURY MILESTONE METRICS (EXACT VIDEO REPLICA) */}
      {/* Matches user recording Screen_Recording_2026-11-19_120219.mp4 */}
      {/* ======================================================== */}
      <section
        id="about-details"
        className="py-20 md:py-28 bg-[#F4F5F7] text-slate-900 relative overflow-hidden select-none border-b border-slate-200"
      >
        <Container size="default" className="relative z-10">
          {/* Subtitle / Moments Quote Header (Exact match to top of video frames 00:01 - 00:07) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-1.5 px-4">
            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light">
              We measure success not just in milestones, but in mission-critical uptime
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light">
              Moments that move institutions, engineering that shapes outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            {/* ======================================================== */}
            {/* LEFT COLUMN: 2 Stacked Corporate Navy Cards (4 cols) */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 1: 15+ Years of Engineering Heritage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
                className="group relative rounded-3xl overflow-hidden p-6 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px] sm:min-h-[240px] bg-[#0B1F3A] hover:bg-[#142B4A] border border-[#1E3A8A]/50 transition-all duration-500 cursor-pointer"
              >
                {/* Photo Reveal on Hover (Smooth transition matching video frame 00:02) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <Image
                    src="/projects/project-color-patching-dressing.png"
                    alt="Years of engineering heritage"
                    fill
                    sizes="400px"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  15+
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading leading-snug">
                    Years of engineering heritage
                  </p>
                  <p className="text-xs text-white/85 font-light">
                    Founded in 2011 in Rajajinagar, Bangalore • Turnkey Systems
                  </p>
                </div>
              </motion.div>

              {/* Card 2: 75+ Public Sector & Institutional Clients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                className="group relative rounded-3xl overflow-hidden p-6 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px] sm:min-h-[240px] bg-[#0B1F3A] hover:bg-[#142B4A] border border-[#1E3A8A]/50 transition-all duration-500 cursor-pointer"
              >
                {/* Photo Reveal on Hover (Smooth transition matching video frames 00:05 - 00:06) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <Image
                    src="/clients/photos/naac-solar-leadership.jpg"
                    alt="Public Sector & Institutional Clients"
                    fill
                    sizes="400px"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  75+
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading leading-snug">
                    Public Sector &amp; Institutional Clients
                  </p>
                  <p className="text-xs text-white/85 font-light">
                    ITI Limited • KEONICS • UAS Raichur • SJBIT
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ======================================================== */}
            {/* CENTER COLUMN: 1 Tall Flagship White Quote Card (4 cols) */}
            {/* (Matches exact clean layout in video frames 00:01 - 00:07) */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.12, ease: CINEMATIC_EASE }}
              className="lg:col-span-4 rounded-3xl p-6 sm:p-12 bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl flex flex-col justify-between items-center text-center relative overflow-hidden"
            >
              {/* Top Quotation Mark (Two Slanted Blue Marks matching clean corporate style) */}
              <div className="flex gap-1.5 justify-center text-blue-600 select-none pt-2">
                <span className="w-2 sm:w-2.5 h-6 sm:h-7 bg-blue-600 rounded-xs -skew-x-12 inline-block" />
                <span className="w-2 sm:w-2.5 h-6 sm:h-7 bg-blue-600 rounded-xs -skew-x-12 inline-block" />
              </div>

              {/* Center Text (Clean & spacious matching video) */}
              <div className="my-auto py-8 sm:py-10">
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-slate-800 leading-snug max-w-xs mx-auto">
                  Infrastructure<br />
                  engineered with<br />
                  purpose, driven<br />
                  by reliability,<br />
                  delivered with<br />
                  precision
                </p>
              </div>

              {/* Bottom Quotation Mark (Two Slanted Blue Marks matching clean corporate style) */}
              <div className="flex gap-1.5 justify-center text-blue-600 select-none pb-2">
                <span className="w-2 sm:w-2.5 h-6 sm:h-7 bg-blue-600 rounded-xs -skew-x-12 inline-block" />
                <span className="w-2 sm:w-2.5 h-6 sm:h-7 bg-blue-600 rounded-xs -skew-x-12 inline-block" />
              </div>

              {/* Full Company Name Attestation */}
              <div className="pt-2 text-center border-t border-slate-100 w-full mt-2">
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-blue-700 font-bold">
                  New Link Technologies Bangalore Pvt. Ltd.
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Connecting Values • Rajajinagar, Bangalore
                </p>
              </div>
            </motion.div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: 2 Stacked Corporate Navy Cards (4 cols) */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 3: 220 kWp Clean Solar Energy Deployed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                className="group relative rounded-3xl overflow-hidden p-6 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px] sm:min-h-[240px] bg-[#0B1F3A] hover:bg-[#142B4A] border border-[#1E3A8A]/50 transition-all duration-500 cursor-pointer"
              >
                {/* Photo Reveal on Hover (Smooth transition matching video frames 00:03 - 00:04) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <Image
                    src="/clients/photos/naac-solar-rooftop.jpg"
                    alt="Clean Solar Energy Deployed"
                    fill
                    sizes="400px"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight flex items-baseline text-white group-hover:text-sky-300 transition-colors">
                  <span>220</span>
                  <span className="text-2xl sm:text-3xl ml-1 font-mono font-bold text-sky-400">kWp</span>
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading leading-snug">
                    Clean Solar Energy Deployed
                  </p>
                  <p className="text-xs text-white/85 font-light">
                    320,000+ units annual yield at NAAC via ITI Limited
                  </p>
                </div>
              </motion.div>

              {/* Card 4: 99.98% Mission-Critical SLA Accountability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.15, ease: CINEMATIC_EASE }}
                className="group relative rounded-3xl overflow-hidden p-6 sm:p-9 text-white shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px] sm:min-h-[240px] bg-[#0B1F3A] hover:bg-[#142B4A] border border-[#1E3A8A]/50 transition-all duration-500 cursor-pointer"
              >
                {/* Photo Reveal on Hover (Smooth transition matching video frames 00:05) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <Image
                    src="/projects/project-modular-datacenter.png"
                    alt="Mission-Critical SLA Accountability"
                    fill
                    sizes="400px"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  99.98%
                </div>
                <div className="relative z-10 space-y-1">
                  <p className="text-lg sm:text-xl font-bold font-heading leading-snug">
                    Mission-Critical SLA Accountability
                  </p>
                  <p className="text-xs text-white/85 font-light">
                    Zero downtime modular data centre &amp; campus OFC ring SLA
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Clean Action Link */}
          <div className="flex justify-center pt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-900/30 transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]"
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
