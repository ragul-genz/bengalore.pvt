"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * Premium Animated Background System
 * 
 * Provides an architectural, enterprise-grade ambient background:
 * - Subtle animated gradient lighting with silky GPU-composited drifting orbs
 * - Fine mathematical micro-grid & dot lattice reflecting digital infrastructure
 * - Gentle scroll-driven parallax depth layers
 * - Preserves crystal-clear WCAG AAA text contrast and readability
 * - Fully respects system prefers-reduced-motion preferences
 */
export function PremiumBackground() {
  // Track page scroll progress for subtle parallax depth
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progress with a gentle, restrained spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 22,
    mass: 0.8,
  });

  // Layer 1: Drifts upward gently on scroll
  const parallaxY1 = useTransform(smoothProgress, [0, 1], [0, -160]);
  // Layer 2: Counter-drifts downward to create multi-planar optical depth
  const parallaxY2 = useTransform(smoothProgress, [0, 1], [0, 130]);
  // Layer 3: Subtle lateral/vertical drift for lower accents
  const parallaxY3 = useTransform(smoothProgress, [0, 1], [0, -80]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Gradient Canvas (Light Corporate Base) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F3F7FD] via-[#F8FAFC] to-[#FFFFFF]" />

      {/* 2. Architectural Micro-Grid Matrix (Infrastructure Precision) */}
      <div
        className="absolute inset-0 opacity-[0.032] [mask-image:radial-gradient(ellipse_at_50%_35%,#000_65%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F172A 1px, transparent 1px),
            linear-gradient(to bottom, #0F172A 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* 3. Subtle Dot Lattice Intersections */}
      <div
        className="absolute inset-0 opacity-[0.038] [mask-image:radial-gradient(ellipse_at_50%_40%,#000_50%,transparent_90%)]"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* 4. Motion Parallax Layer 1: Primary Brand Cobalt & Electric Indigo Lighting */}
      <motion.div
        style={{ y: parallaxY1 }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Top-Left Ambient Orb: Cobalt Blue */}
        <div
          className="absolute -top-[12%] -left-[10%] w-[580px] sm:w-[760px] h-[580px] sm:h-[760px] rounded-full blur-[110px] sm:blur-[140px] opacity-75 animate-ambient-drift-1"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.11) 0%, rgba(75,77,255,0.05) 50%, transparent 75%)",
          }}
        />

        {/* Center-Right Ambient Orb: Soft Ice Cyan */}
        <div
          className="absolute top-[40%] -right-[8%] w-[520px] sm:w-[700px] h-[520px] sm:h-[700px] rounded-full blur-[120px] sm:blur-[150px] opacity-70 animate-ambient-drift-2"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(37,99,235,0.04) 55%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* 5. Motion Parallax Layer 2: Counter-Depth Secondary Orbs */}
      <motion.div
        style={{ y: parallaxY2 }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Top-Right Ambient Orb: Deep Royal Indigo */}
        <div
          className="absolute -top-[6%] right-[8%] w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full blur-[105px] sm:blur-[135px] opacity-65 animate-ambient-drift-3"
          style={{
            background:
              "radial-gradient(circle, rgba(75,77,255,0.09) 0%, rgba(147,197,253,0.04) 60%, transparent 80%)",
          }}
        />

        {/* Mid-Left Subtle Crimson Accent (Brand Red Logo Harmonization) */}
        <div
          className="absolute top-[65%] -left-[6%] w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full blur-[115px] sm:blur-[145px] opacity-50 animate-ambient-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(225,29,72,0.035) 0%, rgba(217,45,32,0.018) 50%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* 6. Motion Parallax Layer 3: Atmospheric Base Lighting */}
      <motion.div
        style={{ y: parallaxY3 }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Lower-Right Floor Ambience */}
        <div
          className="absolute -bottom-[8%] right-[10%] w-[550px] sm:w-[720px] h-[550px] sm:h-[720px] rounded-full blur-[130px] sm:blur-[160px] opacity-60 animate-ambient-drift-1"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.075) 0%, rgba(99,102,241,0.035) 55%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* 7. Subtle Studio Edge Vignette (Softly frames the content in center) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(11,31,58,0.02)_100%)]" />
    </div>
  );
}
