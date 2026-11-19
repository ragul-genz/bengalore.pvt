"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Play,
  Cpu,
  Server,
  Code2,
  CloudUpload,
  Users,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { Container, CINEMATIC_EASE } from "@/components/common";
import { HeroCinemaReel, AUTHENTIC_PROJECT_REELS } from "./HeroCinemaReel";
import { cn } from "@/lib/utils";

const VERTICAL_PILLARS = [
  {
    icon: Cpu,
    line1: "IT",
    line2: "Solutions",
    href: "/services/networking-cabling",
  },
  {
    icon: Server,
    line1: "Hardware",
    line2: "Solutions",
    href: "/services/data-centre",
  },
  {
    icon: Code2,
    line1: "Software",
    line2: "Solutions",
    href: "/services/video-conferencing",
  },
  {
    icon: CloudUpload,
    line1: "Infrastructure",
    line2: "Solutions",
    href: "/services/solar-fire-safety",
  },
  {
    icon: Users,
    line1: "Consulting",
    line2: "Services",
    href: "/contact",
  },
];

const ROTATING_SECTORS = [
  { text: "MODULAR DATA CENTRES", color: "from-sky-400 to-blue-500", border: "border-sky-400/40" },
  { text: "CAMPUS FIBER NETWORKS", color: "from-blue-400 to-indigo-500", border: "border-blue-400/40" },
  { text: "220 kWp SOLAR ARRAYS", color: "from-emerald-400 to-teal-500", border: "border-emerald-400/40" },
  { text: "COMMAND & CONTROL ROOMS", color: "from-rose-400 to-red-500", border: "border-rose-400/40" },
  { text: "HIGH-DENSITY CABLING", color: "from-cyan-400 to-blue-500", border: "border-cyan-400/40" },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 7 seconds when not in manual hold
  const startAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AUTHENTIC_PROJECT_REELS.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [startAutoSlide]);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    startAutoSlide();
  };

  // Handle "Hold to Explore Reel"
  const startHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    const startTime = Date.now();
    const duration = 900; // 900ms to fill

    holdIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setHoldProgress(progress);

      if (progress >= 100) {
        clearInterval(holdIntervalRef.current!);
        setIsCinemaMode(true);
      }
    }, 16);
  };

  const endHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    setHoldProgress(0);
  };

  // Circular progress SVG values
  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (holdProgress / 100) * circumference;

  return (
    <div className="relative bg-[#050B14] text-white overflow-hidden">
      {/* 1. Main Viewport Cinema Section (Hero) */}
      <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-center pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
        {/* Background Cinema Showreel Engine */}
        <HeroCinemaReel
          currentIndex={currentSlide}
          onSelectIndex={handleSelectSlide}
          isCinemaMode={isCinemaMode}
          onCinemaModeChange={setIsCinemaMode}
          holdProgress={holdProgress}
        />

        {/* Foreground Content Container */}
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

            {/* Kinetic Main Heading with Rotating Slot-Machine Reveal */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: CINEMATIC_EASE }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Connecting Technology.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Empowering Businesses.
                </span>
              </motion.h1>

              {/* Kinetic Slot Machine Sector Reveal */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-bold tracking-tight">
                <span className="text-slate-300 uppercase tracking-wider text-xs sm:text-sm font-semibold">
                  ENGINEERING PROVEN INFRASTRUCTURE FOR:
                </span>
                <div className="relative h-8 sm:h-9 overflow-hidden inline-flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentSlide}
                      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold tracking-wide uppercase bg-gradient-to-r text-white shadow-md border",
                        ROTATING_SECTORS[currentSlide].color,
                        ROTATING_SECTORS[currentSlide].border
                      )}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {ROTATING_SECTORS[currentSlide].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: CINEMATIC_EASE }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Premier turnkey IT solutions provider specializing in{" "}
              <strong className="text-white font-semibold">modular data centres</strong>,{" "}
              <strong className="text-white font-semibold">campus optical fiber networks</strong>,{" "}
              <strong className="text-white font-semibold">220 kWp solar clean energy</strong>, and enterprise infrastructure for public sector undertakings, universities, and commercial enterprises.
            </motion.p>

            {/* Action Buttons & "Hold to Explore Reel" Interactive Controller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: CINEMATIC_EASE }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3"
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

              {/* Interactive "Hold to Explore Reel" Button (Inspired by Cinema Experience) */}
              <div className="relative inline-flex items-center">
                <button
                  type="button"
                  onMouseDown={startHold}
                  onMouseUp={endHold}
                  onMouseLeave={endHold}
                  onTouchStart={startHold}
                  onTouchEnd={endHold}
                  onClick={() => setIsCinemaMode((prev) => !prev)}
                  className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#050B14]/80 backdrop-blur-md border border-white/20 hover:border-sky-400 text-slate-300 hover:text-white transition-all select-none cursor-pointer"
                  title="Click or Hold to view full showreel"
                >
                  {/* SVG Circular Progress Ring */}
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <svg className="w-7 h-7 transform -rotate-90">
                      <circle
                        cx="14"
                        cy="14"
                        r={radius}
                        className="text-white/10"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      <circle
                        cx="14"
                        cy="14"
                        r={radius}
                        className="text-sky-400 transition-all duration-75"
                        strokeWidth="2.5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                      />
                    </svg>
                    <Maximize2 className="w-3 h-3 absolute text-sky-400" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400 font-bold leading-tight">
                      {holdProgress > 0 ? `HOLDING ${holdProgress}%` : "CINEMA REEL"}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white leading-tight">
                      Hold to Inspect
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Exit Cinema Mode Floating Pill (When in Cinema Mode) */}
        {isCinemaMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          >
            <button
              onClick={() => setIsCinemaMode(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-2xl shadow-rose-950/80 border border-rose-300 transition-transform active:scale-95"
            >
              <span>Back to Content View</span>
            </button>
          </motion.div>
        )}
      </section>

      {/* 2. Floating 5 Verticals Pill Strip Overlapping Hero Bottom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-30 mb-8 pointer-events-auto">
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl shadow-slate-950/20 border border-slate-100 px-4 py-4 sm:px-6 sm:py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-0">
          {VERTICAL_PILLARS.map((item, idx) => (
            <Link
              key={item.line1}
              href={item.href}
              className={cn(
                "flex items-center gap-3.5 px-3 py-2 rounded-xl hover:bg-blue-50/70 transition-all duration-200 group",
                idx < VERTICAL_PILLARS.length - 1 && "lg:border-r lg:border-slate-100"
              )}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200 shrink-0">
                <item.icon className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.line1}
                </span>
                <span className="block text-xs font-medium text-slate-500">
                  {item.line2}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
