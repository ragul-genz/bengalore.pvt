"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

/**
 * High-tech cinematic top laser progress bar that triggers whenever a page
 * navigation occurs or when any internal route link is clicked.
 */
export function RouteTransitionBar() {
  const pathname = usePathname();
  const [navigatingKey, setNavigatingKey] = useState<number>(0);

  // Global listener on internal link clicks to trigger top laser bar instantly
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !href.startsWith("//") &&
        target.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        try {
          const url = new URL(href, window.location.origin);
          if (url.pathname !== window.location.pathname) {
            setNavigatingKey((prev) => prev + 1);
          }
        } catch {
          // ignore invalid URLs
        }
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3.5px] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${pathname}-${navigatingKey}`}
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "0%", opacity: [1, 1, 0] }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.75, 1],
          }}
          className="h-full w-full bg-gradient-to-r from-blue-700 via-[#DC2626] to-blue-500 shadow-[0_0_15px_rgba(220,38,38,0.4),0_0_25px_rgba(37,99,235,0.4)]"
        />
      </AnimatePresence>
    </div>
  );
}
