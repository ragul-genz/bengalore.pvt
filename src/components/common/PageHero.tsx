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
    <section className="relative overflow-hidden bg-linear-to-br from-[#EAF2FC] via-[#F4F8FE] to-[#FFFFFF] pt-10 pb-14 sm:pt-14 sm:pb-18 border-b border-slate-200/70">
      {/* Subtle Geometric Angular Light Ribbons matching Home Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -left-24 top-0 w-96 h-full bg-linear-to-br from-blue-200/35 via-blue-100/20 to-transparent -skew-x-12 transform" />
        <div className="absolute right-0 -top-20 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl" />
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/3 bg-linear-to-l from-blue-100/40 to-transparent"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <Container size="default" className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <FadeIn mode="mount" delay={0.02} y={5} duration={0.4} className="mb-5">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/80 text-xs text-slate-600 shadow-2xs">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={crumb.label}>
                    {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-blue-600 font-medium transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-blue-600 font-semibold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </FadeIn>
        )}

        <div className="max-w-3xl space-y-4">
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
              className="w-7 h-[2px] bg-blue-600 rounded-full shrink-0 origin-left"
            />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
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
            highlightClassName="text-blue-600"
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0A192F] leading-[1.15]"
          />

          {/* Smooth Upward Fade-in Paragraph */}
          <FadeIn
            as="p"
            mode="mount"
            delay={descDelay}
            y={14}
            duration={0.55}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl"
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
