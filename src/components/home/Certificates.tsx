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
    <section className="py-24 md:py-36 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200 select-none">
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
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-none uppercase"
          >
            The Winning Streak
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="text-base sm:text-xl text-slate-500 font-normal max-w-2xl mx-auto"
          >
            When experience meets excellence, recognition follows
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* CERTIFICATE & AWARDS CARDS (3-TOP + 2-BOTTOM GRID) */}
        {/* ======================================================== */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {WINNING_AWARDS.slice(0, 3).map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: i * 0.1, ease: CINEMATIC_EASE }}
                onClick={() => openLightbox(award.image, award.title, award.description)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#F8FAFC] border border-slate-200 hover:border-[#2563EB] transition-all duration-300 flex flex-col justify-between text-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative w-full h-36 rounded-2xl bg-white border border-slate-200 overflow-hidden mb-6 flex items-center justify-center p-2 shadow-inner">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="350px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#0B1F3A] bg-white/90 px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm font-semibold">
                    <Maximize2 className="w-2.5 h-2.5 text-[#2563EB]" />
                    <span>Inspect</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                {/* Brand Blue Accent Pill Underneath */}
                <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mt-6" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {WINNING_AWARDS.slice(3, 5).map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: CINEMATIC_EASE }}
                onClick={() => openLightbox(award.image, award.title, award.description)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#F8FAFC] border border-slate-200 hover:border-[#2563EB] transition-all duration-300 flex flex-col justify-between text-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative w-full h-36 rounded-2xl bg-white border border-slate-200 overflow-hidden mb-6 flex items-center justify-center p-2 shadow-inner">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="350px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#0B1F3A] bg-white/90 px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm font-semibold">
                    <Maximize2 className="w-2.5 h-2.5 text-[#2563EB]" />
                    <span>Inspect</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                {/* Brand Blue Accent Pill Underneath */}
                <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mt-6" />
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
