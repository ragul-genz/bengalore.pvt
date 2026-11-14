"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Cpu,
  Server,
  Code2,
  CloudUpload,
  Users,
} from "lucide-react";
import {
  Container,
  RevealText,
  FadeIn,
  CINEMATIC_EASE,
} from "@/components/common";
import { HeroMovingVisual } from "./HeroMovingVisual";
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

export function Hero() {
  return (
    <div className="relative bg-transparent">
      {/* Main Light High-Tech Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#EAF2FC]/80 via-[#F4F8FE]/60 to-white/40 backdrop-blur-xs pt-10 pb-24 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
        {/* Geometric Angular Light Ribbons (Subtle Modern Backdrop) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute -left-24 top-0 w-96 h-full bg-linear-to-br from-blue-200/35 via-blue-100/20 to-transparent -skew-x-12 transform" />
          <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

          {/* Right Side Diagonal Server Corridor Mask (Desktop) with Cinematic Moving Visual */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] xl:w-[46%] overflow-hidden">
            {/* Diagonal Cut Accent Ribbon */}
            <div
              className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#F4F8FE] via-blue-100/60 to-transparent z-10 pointer-events-none"
              style={{ clipPath: "polygon(0 0, 100% 0, 35% 100%, 0% 100%)" }}
            />
            <div
              className="relative w-full h-full"
              style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <HeroMovingVisual variant="desktop" className="w-full h-full" />
            </div>
          </div>
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-5 lg:space-y-6 text-left">
              {/* Eyebrow with Horizontal Line */}
              <FadeIn
                mode="mount"
                delay={0.04}
                y={6}
                duration={0.42}
                className="flex items-center gap-3"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.45, delay: 0.05, ease: CINEMATIC_EASE }}
                  className="w-8 h-[2px] bg-slate-500 rounded-full shrink-0 origin-left"
                />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
                  IT | HARDWARE | SOFTWARE | INFRASTRUCTURE | CONSULTING
                </span>
              </FadeIn>

              {/* Main Bold Dual-Tone Heading (Word-by-Word Reveal) */}
              <RevealText
                as="h1"
                by="word"
                mode="mount"
                delay={0.12}
                stagger={0.055}
                duration={0.55}
                text="Connecting Technology."
                highlight="Empowering Businesses."
                highlightClassName="text-blue-600"
                highlightOnNewLine
                className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0A192F] leading-[1.1]"
              />

              {/* Description (Staggered Smooth Fade & Upward Motion) */}
              <FadeIn
                as="p"
                mode="mount"
                delay={0.36}
                y={14}
                duration={0.55}
                className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
              >
                Integrated IT, Hardware, Software and{" "}
                <span className="text-blue-700 font-medium border-b-2 border-blue-200/80 pb-0.5">
                  Infrastructure
                </span>{" "}
                Solutions for Modern Enterprises.
              </FadeIn>

              {/* Action Pill Buttons (Staggered After Paragraph) */}
              <FadeIn
                mode="mount"
                delay={0.48}
                y={12}
                duration={0.5}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/documents/New-Link-Company-Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs hover:border-slate-400 transition-all duration-200"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                  <span>Watch Our Profile</span>
                </Link>
              </FadeIn>
            </div>

            {/* Mobile/Tablet Server Moving Visual (visible below lg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:hidden relative rounded-2xl overflow-hidden shadow-2xl border border-blue-200/60 aspect-16/10 sm:aspect-16/9"
            >
              <HeroMovingVisual variant="mobile" className="w-full h-full" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Floating 5 Verticals Pill Strip Overlapping Hero Bottom */}
      <FadeIn
        mode="mount"
        delay={0.54}
        y={16}
        duration={0.55}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 relative z-20 mb-4"
      >
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100 px-4 py-4 sm:px-6 sm:py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-0">
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
      </FadeIn>
    </div>
  );
}
