"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";

interface ServiceItemData {
  number: string;
  title: string;
  shortDesc: string;
  slug: string;
  client: string;
  specs: string;
  image: string;
}

const SERVICES_SPLIT_LIST: ServiceItemData[] = [
  {
    number: "01.",
    title: "Modular Data Centres & Containment",
    shortDesc: "Complete Tier-3 turnkey modular data centres with in-row precision cooling, hot/cold aisle isolation, and uninterrupted power distribution.",
    slug: "data-centre-solutions",
    client: "University of Agricultural Sciences (UAS), Raichur",
    specs: "Tier-3 Architecture • Cold Aisle Containment • Smart PDU Racks",
    image: "/projects/project-modular-datacenter.png",
  },
  {
    number: "02.",
    title: "Campus Optical Fiber Networks",
    shortDesc: "Multi-building 10Gbps underground armored optical fiber backbones with zero single-point-of-failure redundant ring topology.",
    slug: "networking-solutions",
    client: "SJB Institute of Technology (SJBIT), Bangalore",
    specs: "14 Buildings Linked • Armored Multi-Core OFC • OTDR Certified",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
  },
  {
    number: "03.",
    title: "Command & Control Surveillance Video Walls",
    shortDesc: "Ultra-narrow bezel multi-display video wall arrays and 24/7 operator consoles engineered for round-the-clock facility monitoring.",
    slug: "video-solutions",
    client: "New Link High-Tech Operations Command, Bangalore",
    specs: "Ultra-Narrow Bezel Matrix • 4K Real-Time Video Switching",
    image: "/projects/project-command-room-video-wall.png",
  },
  {
    number: "04.",
    title: "220 kWp Rooftop Solar Photovoltaic Plants",
    shortDesc: "Institutional clean renewable solar energy arrays designed to state grid standards, delivering over 320,000+ units of clean power annually.",
    slug: "solar-power-solutions",
    client: "NAAC Bangalore (Executed through ITI Limited)",
    specs: "220 kWp Solar PV Array • Tier-1 Inverters • Net-Metering Compliant",
    image: "/clients/photos/naac-solar-rooftop.jpg",
  },
  {
    number: "05.",
    title: "High-Density Structured Cabling",
    shortDesc: "Cat6A F/UTP certified cable dressing, vertical and horizontal wire management, and switching matrices for zero-downtime operations.",
    slug: "structured-cabling",
    client: "State Technical Directorate Facility, Bangalore",
    specs: "Fluke Certified • Color-Coded Trunk Dressing • 42U Server Enclosures",
    image: "/projects/project-color-patching-dressing.png",
  },
  {
    number: "06.",
    title: "Smart Boardroom AV & Acoustic Integration",
    shortDesc: "High-definition interactive video conferencing, smart podiums, DSP beamforming microphone arrays, and automated presentation suites.",
    slug: "auditorium-solutions",
    client: "Institutional Auditoriums & Executive Boardrooms",
    specs: "Acoustic Tuning • Automated DSP Switching • 4K Laser Projection",
    image: "/clients/photos/sjbit-lab-setup.jpg",
  },
  {
    number: "07.",
    title: "Enterprise Server Compute & Storage Virtualization",
    shortDesc: "Direct OEM certified server clusters, SAN/NAS storage arrays, and high-availability virtualization matrices for enterprise workloads.",
    slug: "hardware-solutions",
    client: "State Government & Public Sector Undertakings",
    specs: "HP Enterprise & Dell PowerEdge • SAN Storage Arrays • VMware",
    image: "/clients/photos/sjbit-rack-inspection.jpg",
  },
  {
    number: "08.",
    title: "24/7 Managed IT SLA & Facility Maintenance",
    shortDesc: "Accountable multi-year maintenance agreements with dedicated on-site resident engineers, spare part logistics, and guaranteed uptime.",
    slug: "turnkey-solutions",
    client: "Universities, Government Bodies & Defense Establishments",
    specs: "24/7 Response SLA • Preventative Audits • OEM Certified Spares",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = SERVICES_SPLIT_LIST[activeIndex];

  return (
    <section className="py-24 md:py-36 bg-[#050B14] text-white relative overflow-hidden border-b border-white/10 select-none">
      {/* Background Ambient Spotlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-1/4 top-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute left-10 bottom-10 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[130px]" />
      </div>

      <Container size="default" className="relative z-10 space-y-14 sm:space-y-16">
        {/* ======================================================== */}
        {/* SECTION HEADER MATCHING "What We Do" EXACT STYLE */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-none"
          >
            What We Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Cutting-edge solutions designed for impact. We craft bespoke digital and physical infrastructure from concept to deployment.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* SPLIT-VIEW INTERACTIVE ACCORDION (EVENTUROX STYLE) */}
        {/* Left: 8 Numbered Services | Right: Dynamic Full-Height Photo */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Service Items (5 cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10">
            {SERVICES_SPLIT_LIST.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`py-4 sm:py-5 transition-all duration-300 cursor-pointer group select-none ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-mono text-slate-400 font-bold shrink-0 mt-0.5">
                      {service.number}
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base sm:text-lg font-heading font-bold transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}>
                          {service.title}
                        </h3>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? "translate-x-1 text-[#DC2626]" : "opacity-0 group-hover:opacity-100 text-slate-400"
                        }`} />
                      </div>

                      {/* Expanding Short Description for Active Item */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed pt-1"
                          >
                            {service.shortDesc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Full-Height Showcase Photo (7 cols) */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: CINEMATIC_EASE }}
                className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Top Number / Client Badge */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AUTHENTIC DEPLOYMENT</span>
                  </span>
                  <span className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                    {activeService.number} of 08
                  </span>
                </div>

                {/* Bottom Overlay with Client Details and CTA */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                      {activeService.client}
                    </p>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {activeService.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      {activeService.specs}
                    </p>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-red-950/40 transition-all duration-200 group/btn"
                    >
                      <span>Explore Technical Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
