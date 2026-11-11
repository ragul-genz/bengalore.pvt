"use client";

import React from "react";
import { motion, MotionConfig, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Editorial, restrained deceleration curve for corporate UI motion.
 * Avoids overshoot, bounce, or spring oscillation.
 */
export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.15,
} as const;

/**
 * Root motion configuration respecting system reduced-motion preferences.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: CINEMATIC_EASE }}
    >
      {children}
    </MotionConfig>
  );
}

interface RevealTextProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
  highlightOnNewLine?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  by?: "word" | "char";
  mode?: "mount" | "view";
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

interface Token {
  value: string;
  isHighlight: boolean;
  startsNewLine?: boolean;
}

function buildTokens(
  text: string,
  highlight?: string,
  highlightOnNewLine?: boolean
): Token[] {
  const baseWords = text.trim().split(/\s+/).filter(Boolean);
  const highlightWords = highlight ? highlight.trim().split(/\s+/).filter(Boolean) : [];

  return [
    ...baseWords.map((w) => ({ value: w, isHighlight: false })),
    ...highlightWords.map((w, idx) => ({
      value: w,
      isHighlight: true,
      startsNewLine: Boolean(highlightOnNewLine && idx === 0),
    })),
  ];
}

/**
 * Masked word-by-word or character-by-character heading reveal.
 * Renders an sr-only accessible full string while visually revealing masked tokens cleanly.
 */
export function RevealText({
  text,
  highlight,
  highlightClassName = "text-blue-600",
  highlightOnNewLine = false,
  as = "h2",
  by = "word",
  mode = "view",
  delay = 0.08,
  stagger,
  duration = 0.55,
  className,
}: RevealTextProps) {
  const effectiveStagger = stagger ?? (by === "char" ? 0.02 : 0.05);
  const tokens = buildTokens(text, highlight, highlightOnNewLine);
  const fullText = highlight ? `${text} ${highlight}` : text;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: effectiveStagger,
        delayChildren: delay,
      },
    },
  };

  const tokenVariants: Variants = {
    hidden: {
      y: "105%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration,
        ease: CINEMATIC_EASE,
      },
    },
  };

  let charGlobalIndex = 0;

  const animatedContent = (
    <>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {tokens.map((token, wordIdx) => {
          const isLastWord = wordIdx === tokens.length - 1;
          const nextStartsNewLine = tokens[wordIdx + 1]?.startsNewLine;

          if (by === "char") {
            const chars = Array.from(token.value);
            return (
              <React.Fragment key={`${token.value}-${wordIdx}`}>
                {token.startsNewLine && <span className="block h-1" />}
                <span
                  className={cn(
                    "inline-block whitespace-nowrap",
                    token.isHighlight && highlightClassName
                  )}
                >
                  {chars.map((char, cIdx) => {
                    const currentDelay = delay + charGlobalIndex * effectiveStagger;
                    charGlobalIndex += 1;
                    return (
                      <span
                        key={`${char}-${wordIdx}-${cIdx}`}
                        className="inline-block overflow-hidden align-top py-[0.06em] -my-[0.06em]"
                      >
                        <motion.span
                          className="inline-block will-change-transform"
                          initial={{ y: "105%", opacity: 0 }}
                          animate={mode === "mount" ? { y: "0%", opacity: 1 } : undefined}
                          whileInView={mode === "view" ? { y: "0%", opacity: 1 } : undefined}
                          viewport={mode === "view" ? VIEWPORT_CONFIG : undefined}
                          transition={{
                            duration,
                            delay: currentDelay,
                            ease: CINEMATIC_EASE,
                          }}
                        >
                          {char}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
                {!isLastWord && !nextStartsNewLine && " "}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={`${token.value}-${wordIdx}`}>
              {token.startsNewLine && <span className="block h-1" />}
              <span
                className={cn(
                  "inline-block overflow-hidden align-top py-[0.06em] -my-[0.06em]",
                  token.isHighlight && highlightClassName
                )}
              >
                <motion.span
                  variants={tokenVariants}
                  className="inline-block will-change-transform"
                >
                  {token.value}
                </motion.span>
              </span>
              {!isLastWord && !nextStartsNewLine && " "}
            </React.Fragment>
          );
        })}
      </span>
    </>
  );

  const motionProps =
    by === "char"
      ? { className }
      : mode === "mount"
        ? {
            variants: containerVariants,
            initial: "hidden" as const,
            animate: "visible" as const,
            className,
          }
        : {
            variants: containerVariants,
            initial: "hidden" as const,
            whileInView: "visible" as const,
            viewport: VIEWPORT_CONFIG,
            className,
          };

  switch (as) {
    case "h1":
      return <motion.h1 {...motionProps}>{animatedContent}</motion.h1>;
    case "h3":
      return <motion.h3 {...motionProps}>{animatedContent}</motion.h3>;
    case "h4":
      return <motion.h4 {...motionProps}>{animatedContent}</motion.h4>;
    case "p":
      return <motion.p {...motionProps}>{animatedContent}</motion.p>;
    case "span":
      return <motion.span {...motionProps}>{animatedContent}</motion.span>;
    case "h2":
    default:
      return <motion.h2 {...motionProps}>{animatedContent}</motion.h2>;
  }
}

interface FadeInProps {
  children: React.ReactNode;
  as?: "div" | "p" | "span" | "nav";
  mode?: "mount" | "view";
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

/**
 * Smooth fade-in and subtle upward glide for paragraphs, breadcrumbs, labels, and action groups.
 */
export function FadeIn({
  children,
  as = "div",
  mode = "view",
  delay = 0,
  duration = 0.5,
  y = 14,
  className,
}: FadeInProps) {
  const initial = { opacity: 0, y };
  const target = { opacity: 1, y: 0 };
  const transition = { duration, delay, ease: CINEMATIC_EASE };

  const sharedProps =
    mode === "mount"
      ? {
          initial,
          animate: target,
          transition,
          className,
        }
      : {
          initial,
          whileInView: target,
          viewport: VIEWPORT_CONFIG,
          transition,
          className,
        };

  switch (as) {
    case "p":
      return <motion.p {...sharedProps}>{children}</motion.p>;
    case "span":
      return <motion.span {...sharedProps}>{children}</motion.span>;
    case "nav":
      return <motion.nav {...sharedProps}>{children}</motion.nav>;
    case "div":
    default:
      return <motion.div {...sharedProps}>{children}</motion.div>;
  }
}

interface StaggerGroupProps {
  children: React.ReactNode;
  mode?: "mount" | "view";
  stagger?: number;
  delay?: number;
  className?: string;
}

/**
 * Parent container that orchestrates sequential child entrance animations.
 */
export function StaggerGroup({
  children,
  mode = "view",
  stagger = 0.08,
  delay = 0.06,
  className,
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  if (mode === "mount") {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  className?: string;
}

/**
 * Individual staggered item inside a StaggerGroup.
 */
export function StaggerItem({
  children,
  y = 16,
  duration = 0.5,
  className,
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: CINEMATIC_EASE,
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
