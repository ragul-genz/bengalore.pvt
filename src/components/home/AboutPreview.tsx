"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Award,
  Server,
  Network,
  Sun,
  ShieldCheck,
  Lightbulb,
  Play,
  CheckCircle2,
} from "lucide-react";
import {
  Container,
  FadeIn,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "@/components/common";
import { AUTHENTIC_PROJECT_REELS } from "./HeroCinemaReel";

// Ambient Theme Color Palette for the Interactive Bulb Switcher
const BULB_COLOR_THEMES = [
  {
    id: "crimson",
    name: "Brand Link Crimson",
    bgClass: "bg-[#BE123C]", // Deep rich crimson (matches user reference screenshot)
    accentColor: "#FB7185",
    glowColor: "rgba(225, 29, 72, 0.5)",
    taglineColor: "text-rose-200",
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
    taglineColor: "text-sky-200",
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
    taglineColor: "text-cyan-200",
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
    taglineColor: "text-emerald-200",
    cardBg: "bg-[#064E3B]",
    cardBorder: "border-[#065F46]",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "obsidian",
    name: "Deep Space Obsidian",
    bgClass: "bg-[#050B14]", // Deep obsidian black
    accentColor: "#E2F13C",
    glowColor: "rgba(226, 241, 60, 0.4)",
    taglineColor: "text-yellow-200",
    cardBg: "bg-[#0F172A]",
    cardBorder: "border-[#1E293B]",
    badgeBg: "bg-white/20 text-white",
  },
];

// 3 Core Telemetry Status Pillars ("anta 3 dot")
const TELEMETRY_THREE_DOTS = [
  {
    label: "DIRECT OEM ACCREDITATION",
    sub: "28+ Global Technology Leaders",
    color: "#2563EB",
  },
  {
    label: "PSU & GOVT EMPANELLED",
    sub: "ITI Limited • KEONICS • BECIL",
    color: "#BE123C",
  },
  {
    label: "ZERO-SLA DOWNTIME",
    sub: "Mission-Critical 24/7 Operations",
    color: "#10B981",
  },
];

export function AboutPreview() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isBulbGlowing, setIsBulbGlowing] = useState(false);
  const [selectedDomainIndex, setSelectedDomainIndex] = useState(0);

  const activeTheme = BULB_COLOR_THEMES[currentThemeIndex];
  const activeDomain = AUTHENTIC_PROJECT_REELS[selectedDomainIndex];

  // Bulb Click Handler ("anta bulb la click pana colour change aagutu")
  const handleBulbClick = () => {
    setIsBulbGlowing(true);
    setCurrentThemeIndex((prev) => (prev + 1) % BULB_COLOR_THEMES.length);

    setTimeout(() => {
      setIsBulbGlowing(false);
    }, 600);
  };

  return (
    <div className="relative w-full">
      {/* ======================================================== */}
      {/* 1. SCROLL TRANSITION IMPACT BANNER (REFERENCE REPLICA) */}
      {/* "Experiences crafted to ELEVATE" style with Bulb Color Switcher */}
      {/* ======================================================== */}
      <section
        id="about-impact"
        className={`relative w-full text-white flex flex-col items-center justify-center py-24 sm:py-32 md:py-40 px-6 sm:px-12 md:px-16 overflow-hidden z-10 transition-colors duration-700 ease-out ${activeTheme.bgClass}`}
        style={{
          boxShadow: `inset 0 0 100px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Ambient Radial Spotlight matching Active Theme */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${activeTheme.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* ======================================================== */}
        {/* INTERACTIVE GLOWING BULB ("anta bulb la click pana colour change aagutu") */}
        {/* ======================================================== */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-12 z-30">
          <button
            type="button"
            onClick={handleBulbClick}
            className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 hover:border-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title="Click Bulb to Shift Ambient Color Theme"
          >
            {/* Glowing Bulb Icon */}
            <div className="relative flex items-center justify-center">
              <Lightbulb
                className={`w-5 h-5 transition-transform duration-300 ${
                  isBulbGlowing
                    ? "text-yellow-300 scale-125"
                    : "text-white group-hover:text-yellow-300 group-hover:rotate-12"
                }`}
                style={{
                  filter: isBulbGlowing ? "drop-shadow(0 0 12px #FDE047)" : "none",
                }}
              />
              {/* Pulse Ring */}
              <span
                className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                  isBulbGlowing ? "bg-yellow-400" : "transparent"
                }`}
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-white group-hover:text-yellow-200 transition-colors">
                Color Switcher
              </span>
              <span className="text-[9px] text-white/70 font-mono hidden sm:inline-block">
                {activeTheme.name}
              </span>
            </div>
          </button>
        </div>

        {/* Giant Kinetic Typography ("INFRASTRUCTURE CRAFTED TO ELEVATE") */}
        <div className="relative z-20 max-w-6xl mx-auto text-center space-y-4 sm:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
            className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[104px] tracking-tight leading-[0.98] uppercase select-none text-white drop-shadow-md"
          >
            <span className="block font-bold opacity-95">INFRASTRUCTURE CRAFTED TO</span>
            <span
              className="block tracking-tighter transition-colors duration-700"
              style={{
                color: "#FFFFFF",
                textShadow: `0 0 50px rgba(255,255,255,0.4), 0 0 100px ${activeTheme.glowColor}`,
              }}
            >
              ELEVATE
            </span>
          </motion.p>

          {/* Sub-Headline ("More than events, we create moments that move people" style) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, delay: 0.2, ease: CINEMATIC_EASE }}
            className={`text-lg sm:text-2xl md:text-3xl font-medium tracking-tight max-w-3xl mx-auto transition-colors duration-700 ${activeTheme.taglineColor}`}
          >
            More than equipment. We engineer mission-critical systems that move Karnataka&apos;s premier institutions forward.
          </motion.p>
        </div>

        {/* Scroll Indicator Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 pointer-events-none"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-white">
            SCROLL FOR VERIFIED DETAILS &amp; MILESTONES
          </span>
          <div className="w-1 h-5 rounded-full bg-white/40 overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* ======================================================== */}
      {/* 2. "THE TRAIL WE'VE BLAZED" - DETAILED MILESTONE & SPECS */}
      {/* Revealed cleanly on scroll down ("keela scroll pana details vara matri") */}
      {/* Clean Off-White Background matching frames 00:22 - 00:32 */}
      {/* ======================================================== */}
      <section
        id="about-details"
        className="py-20 md:py-28 bg-[#F0F2F5] text-slate-900 border-b border-slate-300/80 relative overflow-hidden select-none"
      >
        {/* Subtle Ambient High-Tech Grid & Lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-1/4 -top-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute right-10 bottom-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        </div>

        <Container size="default" className="relative z-10 space-y-16 sm:space-y-20">
          {/* ======================================================== */}
          {/* REVEALED ON SCROLL: EXECUTIVE TURNKEY ACCREDITATION & CTAS */}
          {/* ======================================================== */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 pt-2">
            {/* Government & ISO Badge Pill (Moved down cleanly from Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-xs shadow-emerald-400" />
              <span>GOVERNMENT &amp; PSU COMPLIANT • TURNKEY IT &amp; ENGINEERING • ISO 9001:2015 CERTIFIED</span>
            </motion.div>

            {/* Core Turnkey Executive Statement */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.55, delay: 0.08, ease: CINEMATIC_EASE }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
            >
              Connecting Technology. <span className="text-[#BE123C]">Empowering Businesses.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.55, delay: 0.15, ease: CINEMATIC_EASE }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl"
            >
              Premier turnkey IT solutions provider specializing in <strong className="text-slate-900 font-bold">modular data centres</strong>, <strong className="text-slate-900 font-bold">campus optical fiber networks</strong>, <strong className="text-slate-900 font-bold">220 kWp solar clean energy</strong>, and enterprise infrastructure for public sector undertakings, universities, and commercial enterprises.
            </motion.p>

            {/* Turnkey Action Buttons (Moved down cleanly from Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.22, ease: CINEMATIC_EASE }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#BE123C] hover:bg-[#9F1239] text-white font-semibold text-sm shadow-xl shadow-rose-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Explore Turnkey Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/documents/New-Link-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm shadow-md hover:border-slate-400 transition-all duration-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#BE123C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Corporate Profile</span>
              </Link>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* 3-DOT LIVE TELEMETRY STATUS ROW */}
          {/* ======================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 border-t border-slate-200">
            {TELEMETRY_THREE_DOTS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.45, delay: i * 0.1, ease: CINEMATIC_EASE }}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-sm"
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
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-800">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* THREE-COLUMN ASYMMETRIC MILESTONE HUD (EVENTUROX STYLE) */}
          {/* 4 Theme-Responsive Expanding Cards + 1 Tall White Quote Card */}
          {/* ======================================================== */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <FadeIn
                mode="view"
                delay={0.04}
                y={8}
                duration={0.42}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-300 text-rose-800 text-xs font-mono uppercase tracking-[0.14em]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                <span>THE TRAIL WE&apos;VE BLAZED • FIELD METRICS</span>
              </FadeIn>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                Proven Infrastructure Metrics Across Karnataka
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* LEFT COLUMN: 2 Expanding Milestone Cards (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Card 1: 15+ Years */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
                  className={`group relative rounded-3xl overflow-hidden p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out min-h-[220px] hover:min-h-[260px] flex flex-col justify-between cursor-pointer text-white border ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                >
                  {/* Background Authentic Photo on Hover with Dark Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none">
                    <Image
                      src="/projects/project-modular-datacenter.png"
                      alt="UAS Raichur Modular Data Centre"
                      fill
                      sizes="400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${activeTheme.badgeBg}`}>
                      SINCE 2011
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                      <span>15</span>
                      <span className="text-yellow-300">+</span>
                    </div>
                    <p className="text-base font-bold text-white mt-1 font-heading">
                      Years of Engineering Excellence
                    </p>
                    <p className="text-xs text-white/85 mt-1 line-clamp-2">
                      Founded in 2011 in Rajajinagar, Bangalore • Premier turnkey systems contractor.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: 100+ Deployments */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                  className={`group relative rounded-3xl overflow-hidden p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out min-h-[220px] hover:min-h-[260px] flex flex-col justify-between cursor-pointer text-white border ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                >
                  {/* Background Authentic Photo on Hover with Dark Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none">
                    <Image
                      src="/projects/project-command-room-video-wall.png"
                      alt="Command Room Video Wall"
                      fill
                      sizes="400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Server className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${activeTheme.badgeBg}`}>
                      PROVEN SCALE
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                      <span>100</span>
                      <span className="text-cyan-300">+</span>
                    </div>
                    <p className="text-base font-bold text-white mt-1 font-heading">
                      Institutional IT Deployments
                    </p>
                    <p className="text-xs text-white/85 mt-1 line-clamp-2">
                      State Universities, Government Bodies, Defense establishments &amp; PSUs.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CENTER COLUMN: 1 Tall Flagship Prestige Card (Pure White with Red Quotes) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, delay: 0.15, ease: CINEMATIC_EASE }}
                className="lg:col-span-4 rounded-3xl p-8 sm:p-9 bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl relative flex flex-col justify-between overflow-hidden group text-center transition-all duration-300"
              >
                {/* Subtle Warm Ambient Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#BE123C]" />

                {/* Top Logo Nodes Symbol with Connected Lines */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 shadow-md flex items-center justify-center mb-5">
                    <svg
                      viewBox="0 0 60 60"
                      className="w-11 h-11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 36 L42 20" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                      <path d="M18 20 L42 36" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 5" />
                      <circle cx="18" cy="36" r="6" fill="#2563EB" />
                      <circle cx="18" cy="36" r="3" fill="#FFFFFF" />
                      <circle cx="42" cy="20" r="6" fill="#38BDF8" />
                      <circle cx="42" cy="20" r="3" fill="#FFFFFF" />
                      <circle cx="18" cy="20" r="5" fill="#0EA5E9" />
                      <circle cx="42" cy="36" r="5" fill="#E11D48" />
                    </svg>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#BE123C] font-bold">
                    NEW LINK TECHNOLOGIES
                  </span>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Connecting Values • Bangalore Pvt. Ltd.
                  </p>
                </div>

                {/* Core Executive Quote Statement */}
                <div className="relative z-10 my-8 space-y-3">
                  <div className="text-[#BE123C] text-5xl font-serif leading-none select-none">
                    “
                  </div>
                  <p className="text-lg sm:text-xl font-extrabold font-heading text-slate-900 leading-snug">
                    Infrastructure engineered with purpose, verified by technical standards, and delivered with 100% turnkey integrity.
                  </p>
                  <div className="text-[#BE123C] text-5xl font-serif leading-none select-none text-right">
                    ”
                  </div>
                </div>

                {/* Executive Directors Sign-off */}
                <div className="relative z-10 pt-5 border-t border-slate-200/80 flex items-center justify-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src="/leadership/director-mg-girish.jpg"
                        alt="M.G. Girish - Director"
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
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
                    <p className="font-heading font-bold text-slate-900">
                      M.G. Girish &amp; Divya D K
                    </p>
                    <p className="text-slate-500 text-[11px] font-mono">
                      Executive Leadership Board
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: 2 Expanding Milestone Cards (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Card 3: 220 kWp Solar Plant */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.5, delay: 0.1, ease: CINEMATIC_EASE }}
                  className={`group relative rounded-3xl overflow-hidden p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out min-h-[220px] hover:min-h-[260px] flex flex-col justify-between cursor-pointer text-white border ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                >
                  {/* Background Authentic Photo on Hover with Dark Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none">
                    <Image
                      src="/clients/photos/naac-solar-rooftop.jpg"
                      alt="NAAC 220 kWp Solar Rooftop Array"
                      fill
                      sizes="400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Sun className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${activeTheme.badgeBg}`}>
                      CLEAN ENERGY
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                      <span>220</span>
                      <span className="text-emerald-300 text-3xl sm:text-4xl"> kWp</span>
                    </div>
                    <p className="text-base font-bold text-white mt-1 font-heading">
                      Solar Power Plant Commissioned
                    </p>
                    <p className="text-xs text-white/85 mt-1 line-clamp-2">
                      High-capacity rooftop array at NAAC via ITI Limited • 320,000+ annual clean units.
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: 14 Buildings OFC */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.5, delay: 0.2, ease: CINEMATIC_EASE }}
                  className={`group relative rounded-3xl overflow-hidden p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out min-h-[220px] hover:min-h-[260px] flex flex-col justify-between cursor-pointer text-white border ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                >
                  {/* Background Authentic Photo on Hover with Dark Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none">
                    <Image
                      src="/clients/photos/sjbit-campus-fiber-handover.jpg"
                      alt="SJBIT 14-Building Campus Optical Fiber Ring"
                      fill
                      sizes="400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Network className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${activeTheme.badgeBg}`}>
                      CAMPUS OFC RING
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight flex items-baseline">
                      <span>14</span>
                      <span className="text-rose-300 text-3xl sm:text-4xl"> Bldgs</span>
                    </div>
                    <p className="text-base font-bold text-white mt-1 font-heading">
                      Inter-Campus Optical Fiber Ring
                    </p>
                    <p className="text-xs text-white/85 mt-1 line-clamp-2">
                      10Gbps Multi-Building Optical Backbone at SJBIT Bangalore • Zero Packet Loss.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5-DOMAIN AUTHENTIC PROJECT SHOWCASE (CLEANLY REVEALED ON SCROLL) */}
          {/* ======================================================== */}
          <div className="pt-10 border-t border-slate-200 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                PORTFOLIO AT A GLANCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                Verified Turnkey Deployments Across Karnataka
              </h3>
            </div>

            {/* 5 Category Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {AUTHENTIC_PROJECT_REELS.map((item, idx) => {
                const isSelected = idx === selectedDomainIndex;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedDomainIndex(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#BE123C] text-white shadow-lg shadow-rose-900/20 scale-105"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>0{idx + 1} {item.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Project Highlight Banner */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl grid grid-cols-1 md:grid-cols-12 items-center"
              >
                {/* Photo Preview */}
                <div className="relative h-60 md:h-80 md:col-span-5 overflow-hidden">
                  <Image
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    {activeDomain.location}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-[#BE123C] font-mono text-xs font-bold uppercase tracking-wider border border-rose-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{activeDomain.badge}</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      {activeDomain.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-600 mt-1">
                      Client: <span className="text-slate-900">{activeDomain.client}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    Engineering Specs: {activeDomain.metrics}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#BE123C] hover:text-[#9F1239] transition-colors group"
                    >
                      <span>Explore Technical Capabilities</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Link to Full Corporate Profile */}
          <div className="flex justify-center pt-2">
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
