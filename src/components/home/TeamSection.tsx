"use client";

import React from "react";
import Image from "next/image";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { motion } from "motion/react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "mg-girish",
    name: "M.G. Girish",
    role: "FOUNDER & MANAGING DIRECTOR",
    bio: "Visionary. Turnkey Infrastructure Pioneer. Over 15 years of building an engineering legacy grounded in technical trust, accountability, and unstoppable execution across Karnataka's premier public institutions.",
    image: "/leadership/director-mg-girish.jpg",
  },
  {
    id: "divya-dk",
    name: "Divya D K",
    role: "DIRECTOR & OPERATIONS HEAD",
    bio: "With over a decade of operational governance, Divya combines strategic precision, strict SLA adherence, and vendor coordination to ensure turnkey project delivery without single-point failure.",
    image: "/leadership/director-divya-dk.jpg",
  },
  {
    id: "optical-architect",
    name: "Senior Network Systems Architect",
    role: "HEAD - OPTICAL & DATA NETWORKING",
    bio: "Certified fiber systems specialist overseeing 10Gbps campus-wide backbone rings, high-density structured cabling, and Tier-3 modular data centre rack containment.",
    image: "/leadership/director-mg-girish.jpg",
  },
  {
    id: "solar-engineer",
    name: "Lead Clean Energy Project Engineer",
    role: "HEAD - RENEWABLE SOLAR ENERGY",
    bio: "Electrical engineering authority directing institutional rooftop solar photovoltaic installations up to 220 kWp capacity in full compliance with state utility and NAAC guidelines.",
    image: "/leadership/director-divya-dk.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 md:py-36 bg-[#F0F2F5] text-slate-900 relative overflow-hidden border-b border-slate-300/80 select-none">
      {/* Background Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <Container size="default" className="relative z-10 space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER MATCHING "Humans of EUR" EXACT STYLE */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tight leading-none"
          >
            Humans of New Link
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="text-base sm:text-xl text-slate-600 font-light max-w-2xl mx-auto"
          >
            Behind every bold deployment is a dedicated engineering crew
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2-COLUMN LEADERSHIP CARDS (EVENTUROX STYLE) */}
        {/* Grayscale on Normal -> Crimson Red Accent on Hover */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {LEADERSHIP_TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: i * 0.1, ease: CINEMATIC_EASE }}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              {/* Portrait Container with Grayscale-to-Crimson Morph on Hover */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 bg-slate-100 group-hover:bg-[#BE123C] transition-colors duration-500 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="160px"
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 group-hover:text-[#BE123C] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
