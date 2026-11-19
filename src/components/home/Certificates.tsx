"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Container, Lightbox, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { motion } from "motion/react";

interface AwardItem {
  id: string;
  year: string;
  title: string;
  category: string;
  authority: string;
  description: string;
  image: string;
}

const WINNING_AWARDS: AwardItem[] = [
  {
    id: "iso-9001",
    year: "2025",
    title: "ISO 9001:2015 Certified",
    category: "Quality Management Systems",
    authority: "International Standards Organization",
    description: "Certified standards compliance across turnkey modular data centres, campus optical fiber networks, and institutional infrastructure.",
    image: "/certificates/cert-uas-raichur.png",
  },
  {
    id: "oem-tier1",
    year: "2025",
    title: "Direct OEM Tier-1 Accreditation",
    category: "Enterprise Technology Delivery",
    authority: "HP • Cisco • Dell • Schneider Electric",
    description: "Direct OEM authorization for mission-critical enterprise compute, optical switching, and precision power distribution.",
    image: "/certificates/cert-keonics-uas.png",
  },
  {
    id: "keonics",
    year: "2025",
    title: "KEONICS Empanelled Partner",
    category: "State Government IT Procurement",
    authority: "Govt. of Karnataka Undertaking",
    description: "Recognized turnkey systems integrator for government directorates, smart institutions, and public infrastructure across Karnataka.",
    image: "/certificates/cert-uas-keonics-combined.png",
  },
  {
    id: "iti-limited",
    year: "2024",
    title: "ITI Limited Strategic Partner",
    category: "National PSU Turnkey Delivery",
    authority: "Premier Central PSU",
    description: "Successfully executed the 220 kWp institutional solar photovoltaic power plant at NAAC Bangalore through ITI Limited.",
    image: "/certificates/cert-naac-solar.png",
  },
  {
    id: "naac-clean-energy",
    year: "2024",
    title: "NAAC Clean Energy Commendation",
    category: "Institutional Renewable Energy",
    authority: "NAAC Bangalore Facility Directorate",
    description: "Official certificate of flawless commissioning for high-efficiency solar power generation and institutional sustainability.",
    image: "/certificates/cert-naac-both-solar-heatpump.png",
  },
];

export function Certificates() {
  const [activeLightbox, setActiveLightbox] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    image: "",
    title: "",
    caption: "",
  });

  const openLightbox = (image: string, title: string, caption: string) => {
    setActiveLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  return (
    <section className="py-24 md:py-36 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10 select-none">
      {/* Background Ambient Gold Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-[130px]" />
      </div>

      <Container size="default" className="relative z-10 space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER MATCHING "The Winning Streak" EXACT STYLE */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none"
          >
            The Winning Streak
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto"
          >
            When experience meets excellence, recognition follows
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* GOLD LUXURY AWARDS CARDS (EVENTUROX 3-TOP + 2-BOTTOM GRID) */}
        {/* ======================================================== */}
        <div className="space-y-6">
          {/* Top Row: 3 Gold-Bordered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {WINNING_AWARDS.slice(0, 3).map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: i * 0.1, ease: CINEMATIC_EASE }}
                onClick={() => openLightbox(award.image, award.title, award.description)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#080E1A] border border-amber-500/35 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between text-center cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1.5"
              >
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative w-full h-36 rounded-2xl bg-black/40 border border-amber-500/20 overflow-hidden mb-6 flex items-center justify-center p-2">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="350px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Maximize2 className="w-2.5 h-2.5" />
                    <span>Inspect</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-amber-200 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {award.description}
                  </p>
                </div>

                {/* Golden Glowing Pill/Line Underneath (Exact Match to Reference) */}
                <div className="w-20 h-1 bg-amber-400/80 rounded-full mx-auto mt-6 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Gold-Bordered Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {WINNING_AWARDS.slice(3, 5).map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: CINEMATIC_EASE }}
                onClick={() => openLightbox(award.image, award.title, award.description)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#080E1A] border border-amber-500/35 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between text-center cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1.5"
              >
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative w-full h-36 rounded-2xl bg-black/40 border border-amber-500/20 overflow-hidden mb-6 flex items-center justify-center p-2">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="350px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Maximize2 className="w-2.5 h-2.5" />
                    <span>Inspect</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-amber-200 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {award.description}
                  </p>
                </div>

                {/* Golden Glowing Pill/Line Underneath (Exact Match to Reference) */}
                <div className="w-20 h-1 bg-amber-400/80 rounded-full mx-auto mt-6 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox for Authentic Inspection */}
        <Lightbox
          isOpen={activeLightbox.isOpen}
          onClose={() => setActiveLightbox((prev) => ({ ...prev, isOpen: false }))}
          imageSrc={activeLightbox.image}
          imageAlt={activeLightbox.title}
          title={activeLightbox.title}
          caption={activeLightbox.caption}
        />
      </Container>
    </section>
  );
}
