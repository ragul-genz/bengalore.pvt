"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroMovingVisualProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

/**
 * HeroMovingVisual Component
 * 
 * Transforms the high-definition server datacenter corridor image into a
 * cinematic moving visual experience:
 * - Continuous slow camera dolly/zoom & pan (Ken Burns breathing effect)
 * - Scroll-driven vertical parallax depth
 * - Atmospheric server corridor vanishing point glow
 * - Soft optical light sweep across server rack surfaces
 * - Contrast-preserving gradient overlays ensuring text readability
 * - Authentic 24/7 Facility Infrastructure live status indicator
 * - 100% GPU-composited, respecting prefers-reduced-motion
 */
export function HeroMovingVisual({
  className,
  variant = "desktop",
}: HeroMovingVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll parallax for camera depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 24,
    mass: 0.7,
  });

  // Vertical parallax offset as user scrolls down
  const parallaxY = useTransform(smoothProgress, [0, 1], [-25, 25]);

  const isDesktop = variant === "desktop";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden select-none bg-slate-950",
        className
      )}
    >
      {/* 1. Cinematic Moving Camera Frame (Slow Dolly Zoom & Scroll Parallax) */}
      <motion.div
        style={{ y: parallaxY }}
        className="relative w-full h-[115%] -top-[7.5%] will-change-transform"
      >
        <div className="relative w-full h-full animate-hero-camera">
          <Image
            src="/hero/server-datacenter-hero-hd.png"
            alt="High-density Modular Data Centre Server Corridor - New Link Technologies Bangalore Pvt. Ltd."
            fill
            priority
            sizes={isDesktop ? "50vw" : "100vw"}
            className="object-cover object-center scale-105"
          />

          {/* 2. Deep Vanishing-Point Ambient Light Glow (Center Corridor Pulse) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none animate-hero-glow"
            style={{
              background:
                "radial-gradient(circle at 58% 54%, rgba(56,189,248,0.22) 0%, rgba(37,99,235,0.12) 35%, transparent 68%)",
            }}
          />

          {/* 3. Optical Light Sweep / Glass Reflection Shimmer (Simulates living equipment) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div
              className="absolute -inset-full w-[200%] h-[200%] animate-hero-sweep pointer-events-none"
              style={{
                background:
                  "linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.08) 48%, rgba(56,189,248,0.14) 52%, transparent 62%)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* 4. Cinematic Overlays for Text Readability & Studio Framing */}
      {isDesktop ? (
        <>
          {/* Left Feathering: Blends smoothly with the diagonal cut ribbon & hero copy */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-36 bg-linear-to-r from-[#0B1F3A]/70 via-[#0B1F3A]/30 to-transparent z-10 pointer-events-none"
          />

          {/* General Atmospheric Color Tone */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-blue-950/40 via-transparent to-slate-950/45 z-10 pointer-events-none"
          />

          {/* Bottom Vignette for Pill Strip Separation */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10 pointer-events-none"
          />
        </>
      ) : (
        <>
          {/* Mobile Overlay: Balanced Contrast Vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/25 to-slate-950/40 z-10 pointer-events-none"
          />
        </>
      )}

      {/* 5. Authentic Enterprise Live Status Badge (Top Right) */}
      <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-xl pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-slate-100 font-semibold tracking-wide">
          Enterprise Infrastructure
        </span>
      </div>

      {/* 6. Subtle Technical Spec Watermark (Bottom Left) */}
      <div className="absolute bottom-3 left-4 z-20 hidden sm:flex items-center gap-1.5 text-[10px] text-slate-300/85 font-mono tracking-wider bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
        <ShieldCheck className="w-3 h-3 text-blue-400" />
        <span>HIGH-DENSITY DATA CENTRE CORRIDOR</span>
      </div>
    </div>
  );
}
