"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import {
  Container,
  ServiceIcon,
  RevealText,
  FadeIn,
  ImageReveal,
  CINEMATIC_EASE,
} from "@/components/common";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: CINEMATIC_EASE,
    },
  },
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Turnkey Systems" },
    { id: "datacenter", label: "Data Centres & Racks" },
    { id: "networking", label: "Fiber & Structured Cabling" },
    { id: "av", label: "AV & Command Rooms" },
    { id: "clean-energy", label: "Solar Clean Energy" },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "datacenter") return service.slug.includes("data-centre") || service.slug.includes("hardware");
    if (activeCategory === "networking") return service.slug.includes("networking") || service.slug.includes("cabling");
    if (activeCategory === "av") return service.slug.includes("audio") || service.slug.includes("video");
    if (activeCategory === "clean-energy") return service.slug.includes("solar");
    return true;
  });

  return (
    <section className="py-24 md:py-32 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Ambient Cyber-Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-1/3 top-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[130px]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container size="default" className="relative z-10">
        {/* Section Heading & Category Filter Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <FadeIn
              mode="view"
              delay={0.04}
              y={8}
              duration={0.42}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-200">
                TURNKEY ENGINEERING CAPABILITIES
              </span>
            </FadeIn>

            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              duration={0.52}
              text="End-to-End Mission-Critical"
              highlight="Technology Infrastructure"
              highlightClassName="text-sky-400 font-extrabold"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]"
            />

            <FadeIn
              as="p"
              mode="view"
              delay={0.2}
              y={10}
              className="text-sm sm:text-base text-slate-300 leading-relaxed"
            >
              Enterprise-grade hardware, structured connectivity, audio-visual automation, and renewable energy engineered for public sector undertakings, premier universities, and commercial enterprises.
            </FadeIn>
          </div>

          {/* Quick Category Switcher Tabs */}
          <FadeIn
            mode="view"
            delay={0.24}
            y={12}
            className="flex flex-wrap items-center gap-2 shrink-0"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 select-none",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400/50"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </FadeIn>
        </div>

        {/* 8 Services Grid (Cinema-Grade Cards with High-Contrast Hover Reveal) */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredServices.map((service: ServiceItem) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-white/15 overflow-hidden shadow-xl hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div>
                {/* Service Image with Cinema Overlay & Ken Burns Zoom */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950 border-b border-white/10">
                  <ImageReveal className="w-full h-full relative" duration={0.6}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </ImageReveal>

                  {/* Gradient Film Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-400 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute bottom-2.5 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[#050B14]/85 text-slate-200 backdrop-blur-md border border-white/15">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-sky-400 transition-colors leading-snug">
                    <Link
                      href={`/services/${service.slug}`}
                      className="focus-visible:outline-none focus-visible:underline"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* OEM Brand Partners Badge Strip */}
                  {service.brands && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.brands.slice(0, 4).map((b) => (
                        <span
                          key={b}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-slate-200 font-mono font-medium border border-white/10"
                        >
                          {b}
                        </span>
                      ))}
                      {service.brands.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">
                          +{service.brands.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors group/link pt-3 border-t border-white/10 w-full justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Technical Architecture</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-sky-400 group-hover/link:text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All & Consultation CTA Bar in High-Tech Glassmorphism */}
        <FadeIn
          mode="view"
          delay={0.1}
          y={16}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle Ambient Red Glow matching our logo "Link" accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-rose-600/10 via-transparent to-transparent pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-xl sm:text-2xl font-extrabold font-heading text-white flex items-center justify-center md:justify-start gap-2">
              <span>Need a Custom Turnkey Infrastructure Proposal?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team conducts on-site surveys, heat load calculations, and structured fiber planning.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all"
            >
              <span>View All 8 Services</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
