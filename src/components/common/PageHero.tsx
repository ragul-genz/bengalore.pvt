"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "./Container";
import { RevealText, FadeIn, CINEMATIC_EASE } from "./MotionPrimitives";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  const totalWords =
    title.trim().split(/\s+/).filter(Boolean).length +
    (highlight ? highlight.trim().split(/\s+/).filter(Boolean).length : 0);
  const descDelay = Math.min(0.42, 0.2 + totalWords * 0.032);

  return (
    <section className="relative overflow-hidden bg-[#050B14] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/10">
      {/* Ambient Cybernetic Spotlight Ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <Container size="default" className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <FadeIn mode="mount" delay={0.02} y={5} duration={0.4} className="mb-6">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs text-slate-400 shadow-lg">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={crumb.label}>
                    {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-sky-400 font-medium transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-sky-400 font-semibold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </FadeIn>
        )}

        <div className="max-w-3xl space-y-5">
          {/* Eyebrow with Subtle Accent Line */}
          <FadeIn
            mode="mount"
            delay={0.08}
            y={8}
            duration={0.42}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.08, ease: CINEMATIC_EASE }}
              className="w-7 h-[2px] bg-sky-400 rounded-full shrink-0 origin-left"
            />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.16em] text-sky-400">
              {eyebrow}
            </span>
          </FadeIn>

          {/* Word-by-word Dual-tone Headline Reveal */}
          <RevealText
            as="h1"
            by="word"
            mode="mount"
            delay={0.14}
            stagger={0.045}
            duration={0.52}
            text={title}
            highlight={highlight}
            highlightClassName="text-sky-400"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]"
          />

          {/* Smooth Upward Fade-in Paragraph */}
          <FadeIn
            as="p"
            mode="mount"
            delay={descDelay}
            y={14}
            duration={0.55}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl"
          >
            {description}
          </FadeIn>

          {/* Staggered Action Slot */}
          {children && (
            <FadeIn mode="mount" delay={descDelay + 0.12} y={12} duration={0.5} className="pt-2">
              {children}
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}
