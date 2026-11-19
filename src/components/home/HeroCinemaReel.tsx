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
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    accentColor: "#38BDF8", // Cyber Cyan
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
    accentColor: "#E11D48", // Brand Crimson Red
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
  onSelectIndex: (index: number) => void;
  isCinemaMode: boolean;
  onCinemaModeChange: (isCinema: boolean) => void;
  holdProgress: number;
}

export function HeroCinemaReel({
  currentIndex,
  onSelectIndex,
  isCinemaMode,
  onCinemaModeChange,
  holdProgress,
}: HeroCinemaReelProps) {
  const currentProject = AUTHENTIC_PROJECT_REELS[currentIndex];
  const Icon = currentProject.icon;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#050B14]">
      {/* 1. Cinematic Background Image Carousel with Ken Burns Motion */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.07 }}
          exit={{ opacity: 0, scale: 1.09 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 8.5, ease: "linear" },
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
        </motion.div>
      </AnimatePresence>

      {/* 2. Studio Lighting & Cyber Ambient Vignette Layers */}
      <motion.div
        animate={{
          opacity: isCinemaMode ? 0.25 : 0.88,
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none transition-opacity"
      >
        {/* Left deep obsidian wash for crystal-clear typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#071324]/85 to-[#0B1F3A]/55" />

        {/* Bottom vertical blend connecting seamlessly to the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#050B14]/60 to-transparent" />

        {/* Top subtle navbar shadow */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050B14]/90 to-transparent" />

        {/* Radial ambient cyber glow harmonized with our brand colors */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 75% 45%, rgba(37,99,235,0.25) 0%, rgba(225,29,72,0.12) 42%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* 3. Live HUD Telemetry Overlay (Active Project Specs) */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 lg:right-12 z-20 pointer-events-none flex flex-col items-end gap-2 text-right">
        <motion.div
          key={`hud-${currentProject.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B14]/75 backdrop-blur-md border border-white/10 text-white shadow-xl"
        >
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentProject.accentColor }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentProject.accentColor }} />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            AUTHENTIC SITE RECORD • {currentIndex + 1}/5
          </span>
        </motion.div>

        <motion.div
          key={`hud-desc-${currentProject.id}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden sm:flex flex-col items-end p-3 rounded-xl bg-[#050B14]/70 backdrop-blur-md border border-white/10 text-white max-w-xs text-right shadow-2xl"
        >
          <span className="text-[10px] uppercase tracking-wider font-bold text-sky-400 flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5" />
            {currentProject.badge}
          </span>
          <span className="text-xs font-semibold text-slate-100 mt-0.5 line-clamp-1">
            {currentProject.client}
          </span>
          <span className="text-[11px] text-slate-300 font-mono mt-1">
            {currentProject.metrics}
          </span>
        </motion.div>
      </div>

      {/* 4. Bottom Project Timeline Rails (Interactive Slide Switcher) */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between gap-3 pointer-events-auto">
        {/* Project Thumbnail Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
          {AUTHENTIC_PROJECT_REELS.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={cn(
                  "group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-left transition-all duration-300 shrink-0",
                  isActive
                    ? "bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-lg shadow-blue-900/30"
                    : "bg-[#050B14]/60 backdrop-blur-xs border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                )}
              >
                {/* Active Indicator Line */}
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    isActive ? "scale-125" : "opacity-40 group-hover:opacity-80"
                  )}
                  style={{ backgroundColor: isActive ? item.accentColor : "#94A3B8" }}
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-wider opacity-60 uppercase">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>

                {/* Progress bar for active slide */}
                {isActive && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-rose-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Quick Full-Screen / Cinema Mode Toggle Button */}
        <button
          onClick={() => onCinemaModeChange(!isCinemaMode)}
          className={cn(
            "hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold backdrop-blur-md transition-all shrink-0 border",
            isCinemaMode
              ? "bg-rose-600/90 hover:bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-950/50"
              : "bg-white/10 hover:bg-white/20 text-white border-white/15"
          )}
          title={isCinemaMode ? "Exit Cinema View" : "Expand Cinema View"}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isCinemaMode ? "Exit Cinema View" : "Full View"}</span>
        </button>
      </div>

      {/* 5. Circular Hold Progress Visual Pulse (when user holds) */}
      {holdProgress > 0 && holdProgress < 100 && (
        <div className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center">
          <div className="relative w-40 h-40 rounded-full border-2 border-dashed border-sky-400/50 animate-spin" />
        </div>
      )}
    </div>
  );
}
