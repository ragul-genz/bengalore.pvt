"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll Provider
 *
 * Integrates butter-smooth momentum physics scrolling powered by Lenis,
 * elevating the browsing feel to cinema-grade standards while respecting
 * accessibility and reduced motion preferences.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Respect user's accessibility preferences
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.25,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
