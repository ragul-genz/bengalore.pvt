"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
} from "lucide-react";
import { Container, CINEMATIC_EASE } from "@/components/common";
import { HeroCinemaReel, AUTHENTIC_PROJECT_REELS } from "./HeroCinemaReel";
import { cinematicAudio } from "@/lib/cinematicAudio";

// Rotating Dynamic Action Verbs (matching the exact reference screenshot styling)
const ROTATING_HIGHLIGHT_WORDS = [
  {
    word: "DELIVER",
    color: "#E2F13C", // High-voltage Lime/Yellow (exact match to reference screenshot)
    sublabel: "Tier-3 Modular Data Centres & Mission-Critical Infrastructure",
  },
  {
    word: "CONNECT",
    color: "#38BDF8", // Cyber Cyan
    sublabel: "10Gbps Multi-Building Inter-Campus Optical Fiber Rings",
  },
  {
    word: "EMPOWER",
    color: "#34D399", // Clean Energy Emerald
    sublabel: "220 kWp Institutional Rooftop Solar Photovoltaic Plants",
  },
  {
    word: "PROTECT",
    color: "#FB7185", // Brand Crimson Red
    sublabel: "24/7 Command & Control Room Surveillance Video Walls",
  },
  {
    word: "SCALE",
    color: "#60A5FA", // Electric Royal Blue
    sublabel: "High-Density Structured Cabling & Switching Matrices",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isRapidMontage, setIsRapidMontage] = useState(false);
  const [showIntroLogo, setShowIntroLogo] = useState(true);

  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const wordCycleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const montageTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Rapid-Cut Kinetic Montage Engine
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
    }, 380);
  };

  // 2. Initial Brand Logo Reveal Intro Sequence ("avanga logo style ah vandhu")
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntroLogo(false);
      triggerRapidMontage();
    }, 1400);

    return () => clearTimeout(introTimer);
  }, []);

  // 3. Ambient Auto-Slide (every 6.5s when montage is not active)
  useEffect(() => {
    if (isRapidMontage || isHolding) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AUTHENTIC_PROJECT_REELS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isRapidMontage, isHolding]);

  // 4. Kinetic Word Cycle (Frames 00:00 - 00:05 in reference video)
  useEffect(() => {
    wordCycleTimerRef.current = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_HIGHLIGHT_WORDS.length);
    }, 2400);

    return () => {
      if (wordCycleTimerRef.current) clearInterval(wordCycleTimerRef.current);
    };
  }, []);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    setIsRapidMontage(false);
  };

  // 5. Interactive "Tap & Hold to Play" Engine with Music (Frames 00:06 - 00:13)
  const startHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    setIsHolding(true);
    cinematicAudio.play();

    const startTime = Date.now();
    const duration = 700; // 700ms smooth hold

    holdIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setHoldProgress(progress);

      if (progress >= 100) {
        if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
        setIsCinemaMode(true);
        triggerRapidMontage();
      }
    }, 16);
  };

  const endHold = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    setIsHolding(false);

    if (holdProgress < 100 && !isCinemaMode) {
      cinematicAudio.stop();
      setHoldProgress(0);
    }
  };

  const exitCinemaMode = () => {
    setIsCinemaMode(false);
    setIsHolding(false);
    setHoldProgress(0);
    cinematicAudio.stop();
  };

  const toggleCinemaMode = () => {
    if (isCinemaMode) {
      exitCinemaMode();
    } else {
      setIsCinemaMode(true);
      cinematicAudio.play();
      setHoldProgress(100);
      triggerRapidMontage();
    }
  };

  const currentWord = ROTATING_HIGHLIGHT_WORDS[wordIndex];
  const isCinemaActive = isCinemaMode || isHolding;

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
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
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#DC2626]/15 blur-[90px]" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center space-y-4 z-10"
            >
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
                  <circle cx="42" cy="36" r="5" fill="#DC2626" />
                </svg>
              </div>

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

              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-blue-500 via-sky-400 to-[#DC2626] origin-left"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* MAIN VIEWPORT CINEMA SECTION (100% REPLICA OF REFERENCE) */}
      {/* ======================================================== */}
      <section className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Fullscreen Cinema Showreel */}
        <HeroCinemaReel
          currentIndex={currentSlide}
          onSelectIndex={handleSelectSlide}
          isCinemaMode={isCinemaActive}
          onCinemaModeChange={toggleCinemaMode}
          holdProgress={holdProgress}
          isRapidMontage={isRapidMontage}
        />

        {/* ======================================================== */}
        {/* "TAP & HOLD TO PLAY" CONTROLLER / MORPHS TO "X" IN CINEMA */}
        {/* (Exact match to frames 00:00 - 00:13 of reference video) */}
        {/* ======================================================== */}
        <div className="absolute top-20 sm:top-24 left-6 sm:left-10 lg:left-14 z-40 pointer-events-auto">
          {isCinemaActive ? (
            /* Close/Exit Circular Button with 'X' (Matches Frame 00:06-00:13) */
            <motion.button
              type="button"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={exitCinemaMode}
              className="w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/40 hover:border-white text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              title="Exit Cinema Mode"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          ) : (
            /* "Tap & Hold to Play" with white dot & progress ring (Frame 00:00-00:05) */
            <div
              onMouseDown={startHold}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              onTouchStart={startHold}
              onTouchEnd={endHold}
              onClick={toggleCinemaMode}
              role="button"
              tabIndex={0}
              className="group relative inline-flex items-center gap-3.5 px-3 py-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white text-white shadow-2xl transition-all duration-300 cursor-pointer select-none"
              title="Hold to play full video with music"
            >
              {/* SVG Circular Progress Ring */}
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 transform -rotate-90">
                  <circle
                    cx="16"
                    cy="16"
                    r={14}
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="2"
                    fill="rgba(0, 0, 0, 0.5)"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r={14}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 14}
                    strokeDashoffset={2 * Math.PI * 14 - (holdProgress / 100) * (2 * Math.PI * 14)}
                    strokeLinecap="round"
                    className="transition-all duration-75"
                  />
                </svg>

                {/* White Center Dot */}
                <span className="absolute w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
              </div>

              {/* Label */}
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white pr-2 whitespace-nowrap">
                {holdProgress > 0 ? `Holding (${holdProgress}%)` : "Tap & Hold to Play"}
              </span>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* CENTER HERO TYPOGRAPHY (EXACT MATCH TO FRAMES 00:00 - 00:05) */}
        {/* "COMMITED TO DREAM" -> "ENGINEERED TO DELIVER" */}
        {/* ======================================================== */}
        <Container size="default" className="relative z-20 pointer-events-none">
          <motion.div
            animate={{
              opacity: isCinemaActive ? 0 : 1,
              y: isCinemaActive ? 40 : 0,
              scale: isCinemaActive ? 0.95 : 1,
              filter: isCinemaActive ? "blur(14px)" : "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
            className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-5xl mx-auto"
          >
            {/* Big Main Title */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight text-white leading-none uppercase select-none drop-shadow-xl">
              <span>ENGINEERED TO </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord.word}
                  initial={{ opacity: 0, y: 30, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 60 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                  style={{
                    color: currentWord.color,
                    textShadow: `0 0 40px ${currentWord.color}88, 0 0 80px ${currentWord.color}44`,
                  }}
                >
                  {currentWord.word}
                </motion.span>
              </AnimatePresence>
            </h1>

            {/* Subtitle matching "Beyond experiences. Into impact" */}
            <p className="text-lg sm:text-2xl md:text-3xl font-medium text-white/95 tracking-tight drop-shadow-md select-none">
              Beyond infrastructure. <span className="font-bold text-white">Into performance</span>
            </p>
          </motion.div>
        </Container>

        {/* Minimal Scroll Cue */}
        <motion.div
          animate={{
            opacity: isCinemaActive ? 0 : 0.75,
            y: [0, 6, 0],
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none select-none z-20"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-white/80 font-bold">
            SCROLL FOR DETAILS
          </span>
          <div className="w-4 h-6 rounded-full border border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
