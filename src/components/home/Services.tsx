"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Button, SectionHeading, ServiceIcon } from "@/components/common";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-brand-lightBg border-b border-brand-border relative">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Core Capabilities"
          title="Complete Technology Solutions"
          description="Integrated enterprise systems engineered for institutional scalability, high uptime, and standards-compliant performance across modern enterprises."
          align="center"
          className="mb-14"
        />

        {/* 8 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map((service: ServiceItem) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col justify-between bg-white rounded-xl border border-brand-border overflow-hidden shadow-xs hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Service Image with Aspect Ratio & Subtle Zoom */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-xs border border-white/40 flex items-center justify-center text-brand-navy shadow-md">
                    <ServiceIcon name={service.iconName} className="w-5 h-5 text-brand-blue" />
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute bottom-2.5 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-brand-navy/90 text-white backdrop-blur-xs">
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
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {service.brands.slice(0, 4).map((b) => (
                        <span key={b} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200">
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
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All & Consultation CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Need a Custom Turnkey Infrastructure Proposal?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team conducts site surveys, thermal modeling, and structured cabling assessments.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="md" href="/contact#quote" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Technical Consultation
            </Button>
            <Button variant="white" size="md" href="/services">
              View All Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

