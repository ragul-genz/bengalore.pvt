"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Container } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <Container size="default">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Eyebrow, Dual-Tone Heading & Description (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Heading Column */}
            <motion.div variants={itemVariants} className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-blue-600 rounded-full shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
                  About New Link Technologies
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A192F] tracking-tight leading-[1.15]">
                Technology That{" "}
                <span className="text-blue-600 block">
                  Connects Possibilities
                </span>
              </h2>
            </motion.div>

            {/* Narrative & Learn More Pill Button Column */}
            <motion.div variants={itemVariants} className="md:col-span-6 space-y-5 md:pt-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">
                  {COMPANY_DETAILS.name}
                </strong>{" "}
                is a trusted technology partner, delivering integrated IT, hardware,
                software and infrastructure solutions for government undertakings,
                universities, and modern enterprises.
              </p>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:border-blue-600 hover:bg-blue-50/40 text-slate-900 hover:text-blue-600 text-sm font-semibold shadow-2xs transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Capabilities Highlights & Director Sign-off Row */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">Modular Data Centres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">Optical Fiber Backbones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">Digital Auditorium &amp; AV</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">220 kWp Solar Deployments</span>
                </div>
              </div>

              {/* Director Sign-off */}
              <div className="flex items-center gap-3 shrink-0 bg-slate-50/90 px-4 py-2.5 rounded-2xl border border-slate-200/70">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 shadow-2xs shrink-0">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt={`${COMPANY_DETAILS.leadership.director} - ${COMPANY_DETAILS.leadership.role}`}
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-heading font-bold text-[#0A192F]">
                    {COMPANY_DETAILS.leadership.director}
                  </p>
                  <p className="text-slate-500 text-[11px] font-medium">
                    {COMPANY_DETAILS.leadership.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Corporate Visual Card (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/60 bg-slate-50 aspect-16/10">
              <Image
                src="/about/corporate-glass-building.png"
                alt="New Link Technologies Bangalore Corporate Operations"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/65 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-xl shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-[#0A192F] leading-tight">
                      Rajajinagar, Bangalore
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Serving PSUs, Universities &amp; Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
