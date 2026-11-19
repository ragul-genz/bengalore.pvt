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
    <section className="py-24 md:py-36 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10 select-none">
      {/* Background Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

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
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none uppercase"
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
            <p className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-slate-300 font-bold">
              ENGINEERED. DELIVERED. VERIFIED.
            </p>
            <p className="text-base sm:text-lg text-slate-400 font-light max-w-xl mx-auto">
              We don&apos;t just talk the talk — we walk it, with you
            </p>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* 3D COVERFLOW CAROUSEL (EVENTUROX STYLE) */}
        {/* ======================================================== */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center px-4 sm:px-0">
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 hover:border-white text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 hover:border-white text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* 3-Card Carousel Track with 3D Perspective */}
          <div
            className="w-full flex items-center justify-center overflow-hidden py-6"
            style={{ perspective: "1200px" }}
          >
            {/* Left Angled Card */}
            <div
              onClick={handlePrev}
              className="hidden md:block w-1/4 h-[340px] lg:h-[400px] rounded-3xl overflow-hidden relative opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer shadow-2xl shrink-0 -mr-12"
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
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Center Active Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
                className="w-full md:w-[62%] h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/20 z-30 shrink-0 group"
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
                <div className="absolute top-5 left-5 z-20">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono uppercase font-bold tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeProject.badge}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
                  <div className="text-left">
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                      {activeProject.client}
                    </p>
                    <p className="text-sm sm:text-base text-white/90 font-medium">
                      {activeProject.location}
                    </p>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 text-xs font-semibold backdrop-blur-md border border-white/30 transition-all duration-200"
                  >
                    <span>View Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Angled Card */}
            <div
              onClick={handleNext}
              className="hidden md:block w-1/4 h-[340px] lg:h-[400px] rounded-3xl overflow-hidden relative opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer shadow-2xl shrink-0 -ml-12"
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
              <div className="absolute inset-0 bg-black/60" />
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              {activeProject.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {activeProject.description}
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="text-[11px] font-mono text-slate-400">
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
                  ? "w-8 bg-[#DC2626]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
