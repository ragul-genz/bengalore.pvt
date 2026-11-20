"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";

interface FlagshipProject {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  specs: string;
  description: string;
  image: string;
  tag: string;
}

const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "datacenter",
    badge: "MODULAR DATA CENTRE",
    title: "Tier-3 Turnkey Modular Data Centre",
    subtitle: "Precision Server Enclosures & Cold Aisle Containment",
    client: "University of Agricultural Sciences (UAS), Raichur",
    location: "Raichur, Karnataka",
    specs: "Tier-3 Architecture • In-Row Precision Cooling • High-Density Racks",
    description: "Designed, engineered, and commissioned complete server room infrastructure with hot/cold aisle isolation, smart rack PDU distribution, and uninterrupted power backup for university academic computing.",
    image: "/projects/project-modular-datacenter.png",
    tag: "TURNKEY DATA CENTRE",
  },
  {
    id: "command-room",
    badge: "COMMAND & CONTROL ROOM",
    title: "Enterprise Multi-Display Surveillance Video Wall",
    subtitle: "24/7 Mission-Critical High-Definition Monitoring Console",
    client: "New Link High-Tech Operations Command",
    location: "Bengaluru, Karnataka",
    specs: "Ultra-Narrow Bezel Displays • 4K Matrix Switching • Ergonomic Consoles",
    description: "Multi-screen matrix monitoring suite engineered for round-the-clock facility surveillance, physical security telemetry, and network operations center (NOC) situational awareness.",
    image: "/projects/project-command-room-video-wall.png",
    tag: "SURVEILLANCE & NOC",
  },
  {
    id: "solar-plant",
    badge: "220 kWp SOLAR POWER PLANT",
    title: "High-Capacity Rooftop Solar Photovoltaic Plant",
    subtitle: "Institutional Renewable Energy Generation Array",
    client: "NAAC (National Assessment and Accreditation Council)",
    location: "Nagarbhavi, Bengaluru",
    specs: "220 kWp Solar PV Array • Tier-1 Inverters • Executed via ITI Limited",
    description: "Institutional rooftop clean energy generation project generating over 320,000+ clean units annually, contributing significantly to green campus certification and institutional power resilience.",
    image: "/clients/photos/naac-solar-rooftop.jpg",
    tag: "CLEAN ENERGY",
  },
  {
    id: "campus-fiber",
    badge: "CAMPUS OPTICAL FIBER RING",
    title: "14-Building Inter-Campus 10Gbps Optical Fiber Ring",
    subtitle: "High-Speed Underground Armored OFC Backbone",
    client: "SJB Institute of Technology (SJBIT)",
    location: "Kengeri, Bengaluru",
    specs: "14 Institutional Buildings • Multi-Core Armored OFC • Zero Loss Splicing",
    description: "Multi-building optical fiber backbone connecting academic blocks, research centres, libraries, and administrative wings with redundant ring topology and zero single-point-of-failure routing.",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    tag: "CAMPUS OFC RING",
  },
  {
    id: "cabling",
    badge: "STRUCTURED CABLING",
    title: "High-Density Color-Coded Patch Cabling & Dressing",
    subtitle: "Gigabit Certified Network Distribution Racks",
    client: "State Technical Directorate Facility",
    location: "Bengaluru, Karnataka",
    specs: "Cat6A F/UTP Structured Dressing • Fluke Certified • 42U Server Racks",
    description: "Fluke-certified structured cabling infrastructure featuring neat vertical and horizontal trunking, color-coded patch assignments, and clean zero-downtime wire management.",
    image: "/projects/project-color-patching-dressing.png",
    tag: "STRUCTURED CABLING",
  },
];

export function ProjectsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + FLAGSHIP_PROJECTS.length) % FLAGSHIP_PROJECTS.length;
  const nextIndex = (activeIndex + 1) % FLAGSHIP_PROJECTS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FLAGSHIP_PROJECTS.length) % FLAGSHIP_PROJECTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FLAGSHIP_PROJECTS.length);
  };

  const activeProject = FLAGSHIP_PROJECTS[activeIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-b border-slate-200 select-none">
      <Container size="default" className="relative z-10 space-y-12 sm:space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER MATCHING "Flagship Creations" EXACT STYLE */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
            className="text-3xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-none uppercase"
          >
            Flagship Creations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="space-y-1.5"
          >
            <p className="text-xs sm:text-base font-mono uppercase tracking-[0.25em] text-[#0B1F3A] font-bold">
              ENGINEERED. DELIVERED. VERIFIED.
            </p>
            <p className="text-sm sm:text-lg text-slate-500 font-normal max-w-xl mx-auto px-2">
              We don&apos;t just talk the talk — we walk it, with you
            </p>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* 3D COVERFLOW CAROUSEL (EVENTUROX STYLE) */}
        {/* ======================================================== */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center px-1 sm:px-0">
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 z-40 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-slate-50 border border-slate-300 text-[#0F172A] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-4 z-40 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-slate-50 border border-slate-300 text-[#0F172A] flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* 3-Card Carousel Track with 3D Perspective */}
          <div
            className="w-full flex items-center justify-center overflow-hidden py-4 sm:py-6"
            style={{ perspective: "1200px" }}
          >
            {/* Left Angled Card */}
            <div
              onClick={handlePrev}
              className="hidden md:block w-1/4 h-[340px] lg:h-[400px] rounded-3xl overflow-hidden relative opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer shadow-xl shrink-0 -mr-12"
              style={{
                transform: "rotateY(22deg) scale(0.85)",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={FLAGSHIP_PROJECTS[prevIndex].image}
                alt={FLAGSHIP_PROJECTS[prevIndex].title}
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
            </div>

            {/* Center Active Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
                className="w-full md:w-[62%] h-[300px] sm:h-[460px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl border border-slate-300 z-30 shrink-0 group"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                    <span>{activeProject.badge}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Card */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20 flex items-end justify-between gap-2 sm:gap-3">
                  <div className="text-left max-w-[65%] sm:max-w-none">
                    <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-amber-400 font-bold truncate">
                      {activeProject.client}
                    </p>
                    <p className="text-xs sm:text-base text-white/90 font-medium truncate">
                      {activeProject.location}
                    </p>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white hover:bg-slate-100 text-[#0B1F3A] font-bold text-[11px] sm:text-xs shadow-lg transition-all duration-200 shrink-0"
                  >
                    <span>View Case</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Angled Card */}
            <div
              onClick={handleNext}
              className="hidden md:block w-1/4 h-[340px] lg:h-[400px] rounded-3xl overflow-hidden relative opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer shadow-xl shrink-0 -ml-12"
              style={{
                transform: "rotateY(-22deg) scale(0.85)",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={FLAGSHIP_PROJECTS[nextIndex].image}
                alt={FLAGSHIP_PROJECTS[nextIndex].title}
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACTIVE PROJECT NARRATIVE (MATCHING "Cult Unbound" TEXT) */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight">
              {activeProject.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {activeProject.description}
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                {activeProject.specs}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {FLAGSHIP_PROJECTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[#2563EB]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
