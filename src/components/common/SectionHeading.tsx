"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  RevealText,
  FadeIn,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "./MotionPrimitives";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";
  const totalWords =
    title.trim().split(/\s+/).filter(Boolean).length +
    (highlight ? highlight.trim().split(/\s+/).filter(Boolean).length : 0);
  const descDelay = Math.min(0.36, 0.14 + totalWords * 0.03);

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-14",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <FadeIn
          mode="view"
          delay={0.03}
          y={8}
          duration={0.42}
          className="flex items-center gap-2.5 mb-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.45, delay: 0.04, ease: CINEMATIC_EASE }}
            className={cn(
              "w-6 h-[2px] rounded-full shrink-0 origin-left",
              isDark ? "bg-blue-400" : "bg-blue-600"
            )}
          />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase",
              isDark ? "text-blue-300" : "text-blue-600"
            )}
          >
            {eyebrow}
          </span>
        </FadeIn>
      )}

      <RevealText
        as="h2"
        by="word"
        mode="view"
        delay={0.08}
        stagger={0.042}
        duration={0.52}
        text={title}
        highlight={highlight}
        highlightClassName={isDark ? "text-blue-400" : "text-blue-600"}
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight",
          isDark ? "text-white" : "text-[#0A192F]"
        )}
      />

      {description && (
        <FadeIn
          as="p"
          mode="view"
          delay={descDelay}
          y={14}
          duration={0.55}
          className={cn(
            "mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </FadeIn>
      )}
    </div>
  );
}
