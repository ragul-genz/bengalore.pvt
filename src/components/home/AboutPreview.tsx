"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Server,
  Layers,
  Network,
  Cpu,
  FileCheck2,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Container, Button } from "@/components/common";
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

const categoryIcons: Record<string, React.ReactNode> = {
  IT: <Network className="w-4 h-4 text-brand-blue" />,
  Hardware: <Cpu className="w-4 h-4 text-brand-blue" />,
  Software: <Layers className="w-4 h-4 text-brand-blue" />,
  Infrastructure: <Server className="w-4 h-4 text-brand-blue" />,
  Consulting: <FileCheck2 className="w-4 h-4 text-brand-blue" />,
};

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-brand-border relative overflow-hidden">
      <Container size="default">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Authentic Imagery Composite (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: Professional Structured Cabling from Company Portfolio */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-lightBg shadow-lg aspect-4/3 sm:aspect-16/10">
                <Image
                  src="/projects/project-structured-cabling.png"
                  alt="New Link Technologies Professional Structured Cabling and Network Infrastructure"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent" />
                
                {/* Image caption bar */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-heading font-bold text-sm">
                    Structured Cabling Standards
                  </p>
                  <p className="text-slate-300 text-[11px]">
                    High-density cable dressing and rack optimization
                  </p>
                </div>
              </div>

              {/* Floating Verified Capability Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 bg-white rounded-xl border border-brand-border p-4 shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-brand-navy font-heading">
                      Public & Enterprise Proven
                    </p>
                    <p className="text-[11px] text-brand-secondary leading-snug">
                      Projects delivered with ITI Limited, KEONICS, NAAC & State Universities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Narrative & Capabilities (7 cols) */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="eyebrow-badge">
                About {COMPANY_DETAILS.shortName}
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-navy tracking-tight leading-[1.18]"
            >
              Technology That Connects Possibilities
            </motion.h2>

            {/* Professional Company Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-secondary leading-relaxed font-normal"
            >
              <strong className="text-brand-text font-semibold">
                {COMPANY_DETAILS.name}
              </strong>{" "}
              is a comprehensive technology integrator specializing in end-to-end
              systems for academic institutions, public sector organizations, and
              corporate enterprises. Under our core philosophy of{" "}
              <em className="text-brand-blue font-medium not-italic">
                &ldquo;Connecting Values,&rdquo;
              </em>{" "}
              we bridge complex infrastructure challenges with dependable, standards-compliant
              engineering.
            </motion.p>

            {/* 5 Core Business Categories */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                Core Business Verticals
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {COMPANY_DETAILS.categories.map((cat) => (
                  <div
                    key={cat.title}
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-brand-border bg-brand-lightBg hover:border-brand-blue/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-white border border-brand-border flex items-center justify-center shrink-0">
                      {categoryIcons[cat.title] || (
                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-navy font-heading">
                        {cat.title}
                      </p>
                      <p className="text-[11px] text-brand-secondary line-clamp-1">
                        {cat.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Verified Capabilities Checklist */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-brand-text"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Modular Data Centre Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Campus Optical Fiber Backbones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Digital Boardroom & Auditorium AV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Smart Surveillance & IP Security</span>
              </div>
            </motion.div>

            {/* Leadership Signoff & CTA Button */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
              <Button
                variant="primary"
                size="lg"
                href="/about"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-sm font-semibold w-fit"
              >
                Learn More
              </Button>

              <div className="flex items-center gap-3 border-l-0 sm:border-l sm:border-brand-border sm:pl-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue shadow-xs shrink-0 bg-slate-100">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt={`${COMPANY_DETAILS.leadership.director} - ${COMPANY_DETAILS.leadership.role}, ${COMPANY_DETAILS.name}`}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-heading font-bold text-brand-navy text-sm">
                    {COMPANY_DETAILS.leadership.director}
                  </p>
                  <p className="text-brand-secondary font-medium">
                    {COMPANY_DETAILS.leadership.role}, {COMPANY_DETAILS.shortName}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

