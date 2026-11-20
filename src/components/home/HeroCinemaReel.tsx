"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Server,
  Network,
  Sun,
  Monitor,
  Cpu,
  Volume2,
} from "lucide-react";

export interface ProjectReelItem {
  id: string;
  badge: string;
  category: string;
  title: string;
  client: string;
  location: string;
  metrics: string;
  image: string;
  icon: React.ElementType;
  accentColor: string;
}

export const AUTHENTIC_PROJECT_REELS: ProjectReelItem[] = [
  {
    id: "datacenter",
    badge: "MODULAR DATA CENTRE",
    category: "Data Centre Infrastructure",
    title: "Turnkey Modular Data Centre & Server Enclosure Array",
    client: "University of Agricultural Sciences (UAS), Raichur",
    location: "Raichur, Karnataka",
    metrics: "Tier-3 Standard • Hot/Cold Aisle Containment",
    image: "/projects/project-modular-datacenter.png",
    icon: Server,
    accentColor: "#2563EB", // Corporate Royal Blue
  },
  {
    id: "command-room",
    badge: "COMMAND & CONTROL ROOM",
    category: "Surveillance & Control Matrix",
    title: "Enterprise Multi-Display Video Wall & Operator Console",
    client: "New Link High-Tech Operations Command",
    location: "Bengaluru, Karnataka",
    metrics: "Ultra-Narrow Bezel • 24/7 Mission-Critical Monitoring",
    image: "/projects/project-command-room-video-wall.png",
    icon: Monitor,
    accentColor: "#2563EB", // Corporate Blue
  },
  {
    id: "cabling",
    badge: "STRUCTURED CABLING",
    category: "Structured Network Infrastructure",
    title: "High-Density Color-Coded Patch Cabling & Trunk Dressing",
    client: "State Technical Directorate Facility",
    location: "Bengaluru, Karnataka",
    metrics: "Gigabit Switching Matrix • Zero Downtime Dressing",
    image: "/projects/project-color-patching-dressing.png",
    icon: Cpu,
    accentColor: "#3B82F6", // Electric Royal Blue
  },
  {
    id: "solar",
    badge: "220 kWp SOLAR POWER PLANT",
    category: "Renewable Clean Energy",
    title: "High-Capacity Rooftop Solar Photovoltaic Power Plant",
    client: "NAAC (Executed through ITI Limited)",
    location: "Nagarbhavi, Bengaluru",
    metrics: "220 kWp Capacity • 320,000+ Units Clean Annual Yield",
    image: "/clients/photos/naac-solar-rooftop.jpg",
    icon: Sun,
    accentColor: "#10B981", // Emerald Green
  },
  {
    id: "campus-fiber",
    badge: "CAMPUS OPTICAL FIBER",
    category: "Campus Networking & Switching",
    title: "14-Building Inter-Campus Optical Fiber Ring Network",
    client: "SJB Institute of Technology (SJBIT)",
    location: "Kengeri, Bengaluru",
    metrics: "14 Buildings Linked • 10Gbps Multi-Core OFC Backbone",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    icon: Network,
    accentColor: "#60A5FA", // Sky Blue
  },
];

interface HeroCinemaReelProps {
  currentIndex: number;
  onSelectIndex?: (index: number) => void;
  isCinemaMode: boolean;
  onCinemaModeChange?: (isCinema: boolean) => void;
  holdProgress: number;
  isRapidMontage?: boolean;
}

export function HeroCinemaReel({
  currentIndex,
  isCinemaMode,
  holdProgress,
  isRapidMontage = false,
}: HeroCinemaReelProps) {
  const currentProject = AUTHENTIC_PROJECT_REELS[currentIndex];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#050B14]">
      {/* ======================================================== */}
      {/* CINEMASCOPE 2.39:1 LETTERBOX BARS (ON CINEMA MODE) */}
      {/* ======================================================== */}
      <motion.div
        initial={false}
        animate={{ height: isCinemaMode ? 56 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 bg-black z-40 pointer-events-none border-b border-white/10"
      />
      <motion.div
        initial={false}
        animate={{ height: isCinemaMode ? 64 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-black z-40 pointer-events-none border-t border-white/10"
      />

      {/* 1. Cinematic Background Image Engine with Ken Burns or Rapid Strobe */}
      <AnimatePresence mode={isRapidMontage ? "popLayout" : "sync"}>
        <motion.div
          key={`${currentProject.id}-${isRapidMontage ? currentIndex : "ambient"}`}
          initial={
            isRapidMontage
              ? { opacity: 0.2, scale: 1.15, filter: "brightness(1.5) contrast(1.2)" }
              : { opacity: 0, scale: 1.02 }
          }
          animate={{
            opacity: 1,
            scale: isCinemaMode ? 1.09 : isRapidMontage ? 1.05 : 1.07,
            filter: isCinemaMode ? "brightness(1.05) contrast(1.08)" : "brightness(1) contrast(1)",
          }}
          exit={
            isRapidMontage
              ? { opacity: 0, scale: 1.0 }
              : { opacity: 0, scale: 1.09 }
          }
          transition={{
            opacity: {
              duration: isRapidMontage ? 0.22 : 1.2,
              ease: [0.16, 1, 0.3, 1],
            },
            scale: {
              duration: isRapidMontage ? 0.4 : isCinemaMode ? 6.0 : 8.5,
              ease: isRapidMontage ? "easeOut" : "linear",
            },
          }}
          className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
        >
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Flash Shutter Overlay for Rapid Montage Cuts */}
          {isRapidMontage && (
            <motion.div
              initial={{ opacity: 0.65 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* 2. Studio Lighting & Cyber Ambient Vignette Layers (Dissolves in Cinema Mode) */}
      <motion.div
        animate={{
          opacity: isCinemaMode ? 0.08 : isRapidMontage ? 0.35 : 0.75,
        }}
        transition={{ duration: 0.55 }}
        className="absolute inset-0 pointer-events-none transition-opacity"
      >
        {/* Left deep obsidian wash for crystal-clear typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/90 via-[#071324]/75 to-[#0B1F3A]/45" />

        {/* Bottom vertical blend connecting seamlessly to the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#050B14]/60 to-transparent" />

        {/* Top subtle navbar shadow */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050B14]/80 to-transparent" />

        {/* Radial ambient cyber glow harmonized with our brand colors */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 75% 45%, rgba(37,99,235,0.2) 0%, rgba(225,29,72,0.1) 42%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* 3. Circular Hold Progress Visual Pulse (when user holds button) */}
      {holdProgress > 0 && holdProgress < 100 && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="relative w-44 h-44 rounded-full border-2 border-dashed border-yellow-300/60 animate-spin" />
          <div className="absolute flex flex-col items-center">
            <Volume2 className="w-6 h-6 text-yellow-300 animate-pulse mb-1" />
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-200 font-bold">
              AUDIO &amp; REEL {holdProgress}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
