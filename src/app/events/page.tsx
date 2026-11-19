"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Globe,
  Sparkles,
  Heart,
  Camera,
  Maximize2,
  Phone,
  ChevronDown,
} from "lucide-react";
import {
  Container,
  Lightbox,
  CINEMATIC_EASE,
} from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

interface EventCaseStudy {
  id: string;
  index: string;
  total: string;
  title: string;
  nativeTitle?: string;
  tagline: string;
  mainImage: string;
  yearTag: string;
  description: string;
  websiteUrl?: string;
  websiteLabel?: string;
  photos: {
    title: string;
    caption: string;
    image: string;
  }[];
}

const EVENT_CASE_STUDIES: EventCaseStudy[] = [
  {
    id: "kannadotsava",
    index: "001",
    total: "003",
    title: "KANNADOTSAVA ANNUAL CULTURAL FESTIVAL",
    nativeTitle: "ಕನ್ನಡೋತ್ಸವ",
    tagline: "Celebrating Karnataka's Rich Heritage, Kannada Literature & Traditional Arts",
    mainImage: "/clients/photos/tumkur-auditorium.jpg",
    yearTag: "KANNADOTSAVA 2026",
    description:
      "A PREMIER ANNUAL CULTURAL FESTIVAL CELEBRATING KARNATAKA'S GLORIOUS HERITAGE, RICH LITERATURE, FOLK ARTS, CLASSICAL MUSIC, AND COMMUNITY HARMONY. PROUDLY ORGANIZED AND POWERED BY NEW LINK TECHNOLOGIES BANGALORE PVT. LTD. UNDER OUR CORE MOTTO 'CONNECTING VALUES'.",
    websiteUrl: "https://www.kannadotsava.com",
    websiteLabel: "www.kannadotsava.com",
    photos: [
      {
        title: "Grand Ceremonial Inauguration",
        caption: "Ceremonial lamp lighting, traditional welcome, and inaugural address by dignitaries.",
        image: "/clients/photos/tumkur-inauguration.jpg",
      },
      {
        title: "Stage Festivities & Classical Concerts",
        caption: "Captivating classical orchestra, folk rhythms, and youth cultural showcases.",
        image: "/clients/photos/tumkur-auditorium.jpg",
      },
      {
        title: "Community Honors & Felicitations",
        caption: "Honoring eminent guests, artists, and community contributors with traditional honors.",
        image: "/clients/photos/naac-solar-leadership.jpg",
      },
      {
        title: "Academic & Institutional Assembly",
        caption: "Vibrant gathering of patrons, educators, and youth celebrating cultural preservation.",
        image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
      },
    ],
  },
  {
    id: "inaugurations",
    index: "002",
    total: "003",
    title: "INSTITUTIONAL DIGNITARY INAUGURATIONS",
    tagline: "High-Level Facility Commissionings & University Dedications",
    mainImage: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
    yearTag: "STATEWIDE EPC",
    description:
      "CEREMONIAL FACILITY LAUNCHES, DIGNITARY RIBBON CUTTINGS, AND KEYNOTE ADDRESSES ACROSS KARNATAKA STATE UNIVERSITIES, PUBLIC SECTOR UNDERTAKINGS, AND AUTONOMOUS BODIES LED BY DIRECTOR M.G. GIRISH AND EXECUTIVE LEADERSHIP.",
    photos: [
      {
        title: "Vice Chancellor & Directorate Inauguration",
        caption: "Modular data centre ribbon cutting at UAS Raichur with university leadership.",
        image: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
      },
      {
        title: "Auditorium Acoustic Facility Dedication",
        caption: "Inaugural ceremony of smart multi-purpose auditorium at Tumkur University.",
        image: "/clients/photos/tumkur-inauguration.jpg",
      },
      {
        title: "Campus Optical Fiber Ring Handover",
        caption: "Official handover ceremony of 10Gbps armored campus ring at SJBIT Bangalore.",
        image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
      },
    ],
  },
  {
    id: "youth-heritage",
    index: "003",
    total: "003",
    title: "YOUTH CULTURAL EMPOWERMENT & ARTS ENCLAVE",
    tagline: "Inspiring the Next Generation Through Language, Arts & Technology",
    mainImage: "/clients/photos/naac-solar-leadership.jpg",
    yearTag: "HERITAGE & ARTS",
    description:
      "FOSTERING YOUTH PARTICIPATION IN KANNADA LITERATURE, POETRY RECITALS, CLASSICAL TRADITIONS, AND DIGITAL INNOVATION. STRENGTHENING COMMUNITY TIES AND CULTURAL PRIDE ACROSS EDUCATIONAL CAMPUSES.",
    websiteUrl: "https://www.kannadotsava.com",
    websiteLabel: "kannadotsava.com",
    photos: [
      {
        title: "Patron Honors & Keynote Speeches",
        caption: "Director M.G. Girish addressing patrons on institutional empowerment.",
        image: "/clients/photos/naac-solar-leadership.jpg",
      },
      {
        title: "Grand Cultural Assembly",
        caption: "Hundreds of students and patrons gathered for Karnataka heritage celebration.",
        image: "/clients/photos/tumkur-auditorium.jpg",
      },
      {
        title: "Educational Technology Dedication",
        caption: "Hands-on engineering showcase and student excellence felicitations.",
        image: "/clients/photos/tumkur-computer-lab.jpg",
      },
    ],
  },
];

export default function EventsPage() {
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({
    kannadotsava: true, // First one open by default
    inaugurations: false,
    "youth-heritage": false,
  });

  const [lightbox, setLightbox] = useState<{
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

  const togglePhotos = (id: string) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openLightbox = (image: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  return (
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ICONIC OVERLAPPING EVENT PILLAR LAYOUT */}
      {/* (1:1 Match to Video Frames 00:01 - 00:04) */}
      {/* Left: Manifesto | Right: Vertical Logo Color Pillar + Overlapping "Cultural Events" */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Purpose Statement */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: CINEMATIC_EASE }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-mono uppercase tracking-[0.18em]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>OFFICIAL CULTURAL &amp; COMMUNITY INITIATIVE</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-snug"
              >
                Cultural platforms today unite communities, celebrate heritage, and empower the future.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: CINEMATIC_EASE }}
                className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed"
              >
                <p>
                  At New Link Technologies Bangalore Pvt. Ltd., we champion{" "}
                  <strong className="text-[#0F172A] font-bold">Kannadotsava</strong> (
                  <a
                    href="https://www.kannadotsava.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline font-mono font-semibold"
                  >
                    www.kannadotsava.com
                  </a>
                  ) — a grand annual celebration of Karnataka&apos;s rich cultural heritage, Kannada literature, traditional music, and youth empowerment.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Under our corporate motto &ldquo;Connecting Values,&rdquo; our executive leadership team actively contributes to preserving state traditions while supporting dignitary convocations, institutional facility inaugurations, and community outreach across Bangalore and statewide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: CINEMATIC_EASE }}
                className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600"
              >
                <a
                  href="https://www.kannadotsava.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B1F3A] hover:bg-[#142B4A] active:scale-95 text-white font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span>Visit www.kannadotsava.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
                <span className="flex items-center gap-1.5 text-slate-600 font-semibold">
                  <Heart className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
                  <span>Sponsored by New Link Technologies</span>
                </span>
              </motion.div>
            </div>

            {/* Right: Vertical Pillar in Official Logo Navy with Giant Overlapping "Cultural Events" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-[300px] sm:max-w-sm md:w-96 h-[240px] sm:h-[400px] md:h-[520px] rounded-3xl bg-[#0B1F3A] border border-[#142B4A] p-6 sm:p-8 shadow-2xl shadow-[#0B1F3A]/25 flex items-center justify-center overflow-hidden group select-none"
              >
                {/* Vertical Pill Tag */}
                <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] font-mono tracking-widest text-sky-200 uppercase font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  HERITAGE
                </span>

                {/* Giant Overlapping Headline (Exact Match to Reference Frame 00:01) */}
                <div className="relative z-10 text-left space-y-0.5 sm:space-y-1">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-heading tracking-tighter text-white drop-shadow-md leading-[0.88]">
                    Cultural
                  </h1>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-heading tracking-tighter text-sky-300 drop-shadow-md leading-[0.88]">
                    Events
                  </h1>
                  <p className="pt-2 sm:pt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/80 font-bold">
                    KANNADOTSAVA &bull; KARNATAKA
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. EVENT CASE STUDIES WITH "SHOW PHOTOS" EXPANDABLE GALLERY */}
      {/* (1:1 Match to Video Frames 00:05 - 00:15) */}
      {/* 001 / 003 Counter + Left Featured Photo + Right Narrative + Toggle */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F1F5F9] border-b border-slate-200 relative overflow-hidden">
        <Container size="default" className="space-y-20">
          {EVENT_CASE_STUDIES.map((event) => {
            const isExpanded = expandedEvents[event.id] ?? false;

            return (
              <div key={event.id} className="space-y-6">
                {/* Numbered Index Header (Exact Match to Frame 00:05: "001 / 003 CULT UNBOUND") */}
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 text-sm sm:text-base font-mono">
                  <span className="font-extrabold text-[#0B1F3A] text-lg sm:text-xl">
                    {event.index}
                  </span>
                  <span className="text-slate-400">/ {event.total}</span>
                  <span className="text-[#2563EB] font-bold uppercase tracking-wider pl-2">
                    {event.title}
                  </span>
                  {event.nativeTitle && (
                    <span className="text-[#0B1F3A] font-bold font-heading text-lg">
                      ({event.nativeTitle})
                    </span>
                  )}
                </div>

                {/* Main Dark Card Container */}
                <div className="rounded-3xl border border-[#142B4A] bg-[#0B1F3A] p-6 sm:p-10 shadow-2xl space-y-8 overflow-hidden text-white">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Featured Image (Matching Frame 00:05) */}
                    <div className="lg:col-span-7 relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-white/15 bg-black shadow-xl group">
                      <Image
                        src={event.mainImage}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                      {/* Bottom-left Tag (Exact Match to Frame 00:05: "CULT UNBOUND 2026") */}
                      <div className="absolute bottom-4 left-5 text-white select-none">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-white/90">
                          {event.yearTag}
                        </p>
                      </div>

                      {/* Expand Button */}
                      <button
                        type="button"
                        onClick={() => openLightbox(event.mainImage, event.title, event.tagline)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/60 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                        title="View photo full size"
                      >
                        <Maximize2 className="w-4 h-4 text-sky-400" />
                      </button>
                    </div>

                    {/* Right: Narrative & "SHOW PHOTOS" Button (Matching Frame 00:05) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-3">
                        <p className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                          {event.tagline}
                        </p>
                        <p className="text-xs sm:text-sm font-sans uppercase font-bold text-slate-200 leading-relaxed tracking-wide">
                          {event.description}
                        </p>
                      </div>

                      {event.websiteUrl && (
                        <div className="pt-1">
                          <a
                            href={event.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-white transition-colors"
                          >
                            <Globe className="w-3.5 h-3.5 text-sky-400" />
                            <span>Official Portal: {event.websiteLabel}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* Interactive "SHOW PHOTOS" / "HIDE PHOTOS" Button in Brand Color */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => togglePhotos(event.id)}
                          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer select-none"
                        >
                          <Camera className="w-4 h-4 text-white" />
                          <span>{isExpanded ? "HIDE PHOTOS" : "SHOW PHOTOS"}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Photo Grid (Unrolls when "SHOW PHOTOS" is active) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
                        className="pt-6 border-t border-white/10 overflow-hidden space-y-4"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="uppercase tracking-wider">
                            Photographic Records &bull; {event.photos.length} Images
                          </span>
                          <span className="text-sky-300">Click photo to expand</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {event.photos.map((photo, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.08, duration: 0.4 }}
                              className="group/photo relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-lg cursor-pointer"
                              onClick={() => openLightbox(photo.image, photo.title, photo.caption)}
                            >
                              <Image
                                src={photo.image}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 25vw"
                                className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover/photo:opacity-90 transition-opacity" />

                              <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                                <p className="text-xs font-bold font-heading line-clamp-1 text-white">
                                  {photo.title}
                                </p>
                                <p className="text-[10px] text-slate-300 line-clamp-1 font-light">
                                  {photo.caption}
                                </p>
                              </div>

                              <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity">
                                <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 3. OFFICIAL WEB PORTAL & COMMUNITY CALL TO ACTION */}
      {/* ======================================================== */}
      <section className="py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-t border-slate-200">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-10 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Event Website: www.kannadotsava.com</span>
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Join the Celebration of Karnataka&apos;s Rich Heritage
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Visit the official web portal to learn more about upcoming cultural events, artist schedules, and participation opportunities at Kannadotsava.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.kannadotsava.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4 text-white" />
                <span>Visit www.kannadotsava.com</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Contact New Link Technologies</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>
                  {COMPANY_DETAILS.leadership.directors[0].name}:{" "}
                  {COMPANY_DETAILS.leadership.directors[0].phone}
                </span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[1].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>
                  {COMPANY_DETAILS.leadership.directors[1].name}:{" "}
                  {COMPANY_DETAILS.leadership.directors[1].phone}
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        imageSrc={lightbox.image}
        imageAlt={lightbox.title}
        title={lightbox.title}
        caption={lightbox.caption}
      />
    </div>
  );
}
