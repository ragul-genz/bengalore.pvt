"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Container,
  SectionHeading,
  ServiceIcon,
  RevealText,
  FadeIn,
  ImageReveal,
  CINEMATIC_EASE,
  VIEWPORT_CONFIG,
} from "@/components/common";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: CINEMATIC_EASE,
    },
  },
};

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-brand-lightBg/75 backdrop-blur-xs border-b border-brand-border relative">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Core Capabilities"
          title="Complete Technology"
          highlight="Solutions"
          description="Integrated enterprise systems engineered for institutional scalability, high uptime, and standards-compliant performance across modern enterprises."
          align="center"
          className="mb-14"
        />

        {/* 8 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map((service: ServiceItem) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-brand-border overflow-hidden shadow-2xs hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                {/* Service Image with Aspect Ratio & Subtle Zoom */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
                  <ImageReveal className="w-full h-full relative" duration={0.6}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </ImageReveal>
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-md">
                    <ServiceIcon name={service.iconName} className="w-5 h-5 text-brand-blue" />
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute bottom-2.5 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-brand-navy/90 text-white backdrop-blur-md border border-white/15">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">
                    <Link href={`/services/${service.slug}`} className="focus-visible:outline-none focus-visible:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Brand Partners Badge Strip */}
                  {service.brands && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {service.brands.slice(0, 4).map((b) => (
                        <span key={b} className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50/80 text-blue-800 font-semibold border border-blue-100">
                          {b}
                        </span>
                      ))}
                      {service.brands.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-200">
                          +{service.brands.length - 4} more
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
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-darkNavy transition-colors group/link pt-3 border-t border-brand-border/60 w-full justify-between"
                >
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-brand-blue" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All & Consultation CTA Bar matching Light High-Tech Design */}
        <FadeIn
          mode="view"
          delay={0.08}
          y={16}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#EAF2FC] via-[#F4F8FE] to-white border border-blue-200/70 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <RevealText
              as="h4"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.04}
              text="Need a Custom Turnkey"
              highlight="Infrastructure Proposal?"
              highlightClassName="text-blue-600"
              className="text-lg sm:text-xl font-extrabold font-heading text-[#0A192F]"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={10} className="text-xs sm:text-sm text-slate-600">
              Our engineering team conducts site surveys, thermal modeling, and structured cabling assessments.
            </FadeIn>
          </div>
          <FadeIn
            mode="view"
            delay={0.32}
            y={10}
            className="flex flex-wrap items-center justify-center gap-3 shrink-0"
          >
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold shadow-2xs transition-all"
            >
              <span>View All Services</span>
            </Link>
          </FadeIn>
        </FadeIn>
      </Container>
    </section>
  );
}

