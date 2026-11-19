"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Play,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { Container, CINEMATIC_EASE } from "@/components/common";
import { HeroCinemaReel, AUTHENTIC_PROJECT_REELS } from "./HeroCinemaReel";

// Rotating Dynamic Action Verbs (matching the exact reference screenshot styling)
const ROTATING_HIGHLIGHT_WORDS = [
  {
    word: "DELIVER",
    color: "#E2F13C", // High-voltage Lime/Yellow (exact match to screenshot highlight)
    sublabel: "Tier-3 Modular Data Centres & Mission-Critical Infrastructure",
    accent: "from-lime-300 to-yellow-400",
  },
  {
    word: "CONNECT",
    color: "#38BDF8", // Cyber Cyan
    sublabel: "10Gbps Multi-Building Inter-Campus Optical Fiber Rings",
    accent: "from-cyan-300 to-sky-400",
  },
  {
    word: "EMPOWER",
    color: "#34D399", // Clean Energy Emerald
    sublabel: "220 kWp Institutional Rooftop Solar Photovoltaic Plants",
    accent: "from-emerald-300 to-teal-400",
  },
  {
    word: "PROTECT",
    color: "#FB7185", // Brand Crimson Red
    sublabel: "24/7 Command & Control Room Surveillance Video Walls",
    accent: "from-rose-400 to-red-500",
  },
  {
    word: "SCALE",
    color: "#60A5FA", // Electric Royal Blue
    sublabel: "High-Density Structured Cabling & Switching Matrices",
    accent: "from-blue-400 to-indigo-400",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isRapidMontage, setIsRapidMontage] = useState(false);
  const [showIntroLogo, setShowIntroLogo] = useState(true);

  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const wordCycleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const montageTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Rapid-Cut Kinetic Montage Engine ("apro images la fast ah vara matri pogtutha")
  const triggerRapidMontage = () => {
    if (montageTimerRef.current) clearInterval(montageTimerRef.current);
    setIsRapidMontage(true);

    let step = 0;
    const totalSteps = AUTHENTIC_PROJECT_REELS.length; // 5 images

    montageTimerRef.current = setInterval(() => {
      step++;
      setCurrentSlide((prev) => (prev + 1) % totalSteps);

      if (step >= totalSteps) {
        if (montageTimerRef.current) clearInterval(montageTimerRef.current);
        setIsRapidMontage(false);
      }
    }, 380); // Fast 380ms per authentic image strobe
  };

  // 2. Initial Brand Logo Reveal Intro Sequence ("avanga logo style ah vandhu")
  useEffect(() => {
    // Show stylish logo reveal for 1.4s, then automatically run initial rapid-cut montage
    const introTimer = setTimeout(() => {
      setShowIntroLogo(false);
      triggerRapidMontage();
    }, 1400);

    return () => clearTimeout(introTimer);
  }, []);

  // 3. Ambient Auto-Slide (every 6.5s when montage is not active)
  useEffect(() => {
    if (isRapidMontage) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AUTHENTIC_PROJECT_REELS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isRapidMontage]);

  // 4. Kinetic Kinetic Word Cycle ("apro letter uh inta matri varutula")
  useEffect(() => {
    wordCycleTimerRef.current = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_HIGHLIGHT_WORDS.length);
    }, 2800); // 2.8s smooth flip matching Eventurox kinetic rhythm

    return () => {
      if (wordCycleTimerRef.current) clearInterval(wordCycleTimerRef.current);
    };
  }, []);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    setIsRapidMontage(false);
  };

  // 5. Interactive "Tap & Hold to Play" Controller Engine
  const startHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    const startTime = Date.now();
    const duration = 800; // 800ms hold to trigger full cinema mode

    holdIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setHoldProgress(progress);

      if (progress >= 100) {
        clearInterval(holdIntervalRef.current!);
        setIsCinemaMode(true);
        triggerRapidMontage();
      }
    }, 16);
  };

  const endHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    if (holdProgress < 100) {
      setHoldProgress(0);
    }
  };

  const handleQuickTap = () => {
    // Quick click toggles cinema mode or triggers rapid montage
    triggerRapidMontage();
  };

  // Circular progress SVG values
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (holdProgress / 100) * circumference;

  const currentWord = ROTATING_HIGHLIGHT_WORDS[wordIndex];

  return (
    <div className="relative bg-[#050B14] text-white overflow-hidden">
      {/* ======================================================== */}
      {/* BRAND INTRO REVEAL OVERLAY ("avanga logo style ah vandhu") */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showIntroLogo && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050B14] flex flex-col items-center justify-center pointer-events-none select-none"
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-rose-600/15 blur-[90px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center space-y-4 z-10"
            >
              {/* Logo Emblem with 3 Connected Nodes */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#0B1F3A] to-[#1E3A8A] border border-blue-400/40 p-3 shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                <svg
                  viewBox="0 0 60 60"
                  className="w-14 h-14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 36 L42 20"
                    stroke="#2563EB"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 20 L42 36"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="1 5"
                  />
                  <circle cx="18" cy="36" r="6" fill="#2563EB" />
                  <circle cx="18" cy="36" r="3" fill="#FFFFFF" />
                  <circle cx="42" cy="20" r="6" fill="#38BDF8" />
                  <circle cx="42" cy="20" r="3" fill="#FFFFFF" />
                  <circle cx="18" cy="20" r="5" fill="#FFFFFF" />
                  <circle cx="42" cy="36" r="5" fill="#E11D48" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
                  NEW LINK <span className="text-blue-500">TECHNOLOGIES</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
                  <span>Bangalore</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Connecting Values</span>
                </div>
              </div>

              {/* Soundless Cinema Stinger Progress Indicator */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-blue-500 via-sky-400 to-rose-500 origin-left"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 1. MAIN VIEWPORT CINEMA SECTION (HERO) */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-36 overflow-hidden">
        {/* Background Cinema Showreel Engine (Ken Burns or Rapid-Cut Strobe) */}
        <HeroCinemaReel
          currentIndex={currentSlide}
          onSelectIndex={handleSelectSlide}
          isCinemaMode={isCinemaMode}
          onCinemaModeChange={setIsCinemaMode}
          holdProgress={holdProgress}
          isRapidMontage={isRapidMontage}
        />

        {/* ======================================================== */}
        {/* FLOATING "TAP & HOLD TO PLAY" CONTROLLER (REFERENCE REPLICA) */}
        {/* ======================================================== */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 lg:left-12 z-30 pointer-events-auto">
          <div
            onMouseDown={startHold}
            onMouseUp={endHold}
            onMouseLeave={endHold}
            onTouchStart={startHold}
            onTouchEnd={endHold}
            onClick={handleQuickTap}
            role="button"
            tabIndex={0}
            className="group relative inline-flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-white/50 text-white shadow-2xl transition-all duration-300 cursor-pointer select-none"
            title="Click or Tap & Hold to inspect high-speed cinema reel"
          >
            {/* SVG Circular Progress Ring with Center Dot */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <svg className="w-9 h-9 transform -rotate-90">
                {/* Background Ring */}
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2.5"
                  fill="rgba(0, 0, 0, 0.4)"
                />
                {/* Active Progress Ring */}
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  stroke="#E2F13C" // Neon Lime
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-75"
                />
              </svg>

              {/* White Center Dot (exact replica of Eventurox dot) */}
              <span className="absolute w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform shadow-xs shadow-white" />
            </div>

            {/* Label */}
            <div className="flex flex-col text-left pr-1">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-yellow-200 transition-colors">
                {holdProgress > 0 ? `Holding (${holdProgress}%)` : "Tap & Hold to Play"}
              </span>
              <span className="text-[10px] text-slate-300 font-mono tracking-tight hidden sm:inline-block">
                {isRapidMontage ? "Playing 5 Authentic Sites" : "Inspect Authentic Visuals"}
              </span>
            </div>

            {/* Replay Montage Icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                triggerRapidMontage();
              }}
              className="p-1 rounded-full hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              title="Fast-cut Montage Replay"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FOREGROUND HERO TYPOGRAPHY (MATCHING REFERENCE SCREENSHOT) */}
        {/* ======================================================== */}
        <Container size="default" className="relative z-20">
          <motion.div
            animate={{
              opacity: isCinemaMode ? 0 : 1,
              y: isCinemaMode ? 30 : 0,
              filter: isCinemaMode ? "blur(8px)" : "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
            className="max-w-4xl flex flex-col space-y-6 sm:space-y-7 text-left pointer-events-auto"
          >
            {/* Eyebrow Pill with Dual Color Brand Accents */}
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 w-fit shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-200">
                GOVERNMENT &amp; PSU COMPLIANT • TURNKEY IT &amp; ENGINEERING
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500" />
              <span className="hidden sm:inline-block text-[11px] font-semibold text-sky-400">
                ISO 9001:2015 CERTIFIED
              </span>
            </motion.div>

            {/* Kinetic Main Heading (Exact Format: "ENGINEERED TO [WORD]") */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: CINEMATIC_EASE }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-white leading-[1.02] uppercase"
              >
                <span>ENGINEERED TO </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord.word}
                    initial={{ opacity: 0, y: 35, rotateX: -60, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -35, rotateX: 60, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block transition-colors"
                    style={{
                      color: currentWord.color,
                      textShadow: `0 0 40px ${currentWord.color}66, 0 0 80px ${currentWord.color}33`,
                    }}
                  >
                    {currentWord.word}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              {/* Sub-Tagline (Exact style of "Beyond experiences. Into impact") */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: CINEMATIC_EASE }}
                className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-100 tracking-tight"
              >
                Beyond infrastructure. <span className="text-white font-semibold">Into performance.</span>
              </motion.p>
            </div>

            {/* Detailed Value Proposition Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: CINEMATIC_EASE }}
              className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Premier turnkey IT infrastructure integrator specializing in{" "}
              <strong className="text-white font-semibold">modular data centres</strong>,{" "}
              <strong className="text-white font-semibold">campus optical fiber networks</strong>,{" "}
              <strong className="text-white font-semibold">220 kWp solar clean energy</strong>, and command room video walls for premier universities, PSUs, and modern enterprises.
            </motion.p>

            {/* Action Buttons & Fast Reel Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: CINEMATIC_EASE }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2"
            >
              {/* Primary CTA Button (Electric Blue with Brand Glow) */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Explore Turnkey Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Profile Link (Glassmorphic) */}
              <Link
                href="/documents/New-Link-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm backdrop-blur-md hover:border-white/40 transition-all duration-200"
              >
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Corporate Profile</span>
              </Link>

              {/* Quick Replay Button */}
              <button
                type="button"
                onClick={triggerRapidMontage}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
                title="Trigger 5-Site Speed Montage"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>Quick Montage</span>
              </button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
