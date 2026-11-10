"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Cpu,
  Network,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container, Button } from "@/components/common";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
      {/* Subtle Animated Background Grid & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Ambient Dark Navy Gradient Base */}
        <div className="absolute inset-0 bg-linear-to-b from-[#08172c] via-[#0B1F3A] to-[#0d2240]" />

        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

        {/* Soft Electric Blue Ambient Lighting */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-brand-darkNavy/40 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-7 text-left"
          >
            {/* Tagline / Eyebrow Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/15 text-blue-300 border border-brand-blue/30 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Connecting Values</span>
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                <span className="text-slate-300 font-normal">Bangalore</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Connecting Technology.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-300 to-indigo-200">
                Empowering Businesses.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Integrated IT, Hardware, Software and Infrastructure Solutions for Modern Enterprises.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="secondary"
                size="lg"
                href="/services"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg shadow-blue-600/20 font-semibold"
              >
                Explore Our Solutions
              </Button>

              <Button
                variant="white"
                size="lg"
                href="/contact"
                className="font-semibold"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Enterprise Highlights / Trust Pillars */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Enterprise SLA Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Data Center Grade</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Network className="w-4 h-4 text-blue-400 shrink-0" />
                <span>End-to-End Networking</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Imagery (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-linear-to-r from-blue-600/30 to-indigo-600/20 rounded-2xl blur-lg opacity-70 pointer-events-none" />

              {/* Main Infrastructure Image Card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-brand-darkNavy shadow-2xl">
                {/* Authentic Company Profile Presentation Visual */}
                <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/hero/business-solutions-globe.png"
                    alt="New Link Technologies - Business Solutions We Provide"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Visual Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                </div>

                {/* Sub-bar Information: Data Center & Network Infrastructure */}
                <div className="p-4 sm:p-5 bg-brand-darkNavy/95 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-heading">
                        Enterprise Infrastructure
                      </p>
                      <p className="text-[11px] text-slate-400">
                        High-Density Computing & Structured Cabling
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Metric Badge (Top Right) */}
              <motion.div
                variants={floatingBadgeVariants}
                initial="hidden"
                animate="visible"
                className="absolute -top-4 -right-2 sm:-right-4 bg-brand-navy/90 backdrop-blur-md border border-brand-blue/40 rounded-xl px-4 py-2.5 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-blue-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[10px] uppercase font-semibold text-slate-300 tracking-wider">
                      Uptime Ready
                    </p>
                  </div>
                  <p className="text-xs font-bold text-white font-heading">
                    99.9% Reliability
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

