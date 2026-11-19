"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Globe,
  Camera,
  Maximize2,
  Phone,
  Mail,
  ChevronDown,
  Calendar,
  MapPin,
  Award,
  Clock,
  CheckCircle2,
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
  highlights?: string[];
  schedule?: { time: string; event: string }[];
  kitItems?: string[];
  photos: {
    title: string;
    caption: string;
    image: string;
  }[];
}

const EVENT_CASE_STUDIES: EventCaseStudy[] = [
  {
    id: "kannadotsava-marathon",
    index: "001",
    total: "003",
    title: "KANNADOTSAVA MARATHON 2026",
    nativeTitle: "ಕನ್ನಡೋತ್ಸವ ಮ್ಯಾರಥಾನ್ 2026",
    tagline: "3 KM Walk & 5 KM Run • Saturday, 19 December 2026 • Bangalore University Campus",
    mainImage: "/events/kannadotsava/hero-group.webp",
    yearTag: "19 DEC 2026",
    description:
      "KANNADOTSAVA MARATHON 2026 IS MORE THAN A WALK OR RUN; IT IS A MASS COMMUNITY MOVEMENT (ಜನಾಂದೋಲನ) TO CELEBRATE, PROTECT, AND PROMOTE THE KANNADA LANGUAGE AND CULTURE. OPEN TO FAMILIES, STUDENTS, ATHLETES, AND CITIZENS OF ALL AGES. ನಮ್ಮ ಭಾಷೆ ನಮ್ಮ ಹೆಮ್ಮೆ, ನಮ್ಮ ಸಂಸ್ಕೃತಿ ನಮ್ಮ ಶಕ್ತಿ! ಎಲ್ಲರೂ ಕನ್ನಡವನ್ನೇ ಬಳಸಿ · ಕನ್ನಡ ಉಳಿಸಿ, ಬೆಳೆಸಿ, ಕಲಿಸಿ.",
    websiteUrl: "https://www.kannadotsava.com",
    websiteLabel: "www.kannadotsava.com",
    highlights: [
      "To create awareness about the importance of Kannada & preserve linguistic heritage",
      "To encourage the younger generation to learn, speak, read, and proudly embrace Kannada",
      "To unite people from all communities through the spirit of language, culture, and solidarity",
      "To promote Kannada as a language of knowledge, science, education, and technology",
    ],
    photos: [
      {
        title: "Community Runners Assembly",
        caption: "Vibrant assembly of participants celebrating Kannada unity at Bangalore University campus.",
        image: "/events/kannadotsava/hero-group.webp",
      },
      {
        title: "Official Kannadotsava Seal",
        caption: "Official marathon emblem featuring Karnataka map silhouette and dynamic runners.",
        image: "/events/kannadotsava/marathon-logo.png",
      },
      {
        title: "Finisher Honors & Medal Keepsake",
        caption: "Double-sided cast metal finisher medal with Karnataka state map and Kannada calligraphy.",
        image: "/events/kannadotsava/medal-front-back.jpg",
      },
      {
        title: "Cultural Movement in Action",
        caption: "Promoting physical fitness alongside Kannada mothertongue pride and heritage at Bangalore University.",
        image: "/events/kannadotsava/hero-vidhana-soudha.jpg",
      },
    ],
  },
  {
    id: "schedule-amenities",
    index: "002",
    total: "003",
    title: "EVENT ITINERARY & RUNNER AMENITIES",
    nativeTitle: "ವೇಳಾಪಟ್ಟಿ & ಸವಲತ್ತುಗಳು",
    tagline: "Tentative Schedule • ₹1,250 All-Inclusive Runner Kit • Medals & Finisher Apparel",
    mainImage: "/events/kannadotsava/medal-front-back.jpg",
    yearTag: "KIT & SCHEDULE",
    description:
      "EVERY REGISTERED PARTICIPANT (₹1,250 ENTRY) RECEIVES THE EXCLUSIVE OFFICIAL FINISHER PACKAGE: CUSTOMISED KANNADOTSAVA MARATHON DRI-FIT T-SHIRT, CAST COMMEMORATIVE FINISHER MEDAL WITH KANNADA MOTIFS, CERTIFICATE OF COMPLETION, ENERGIZING BREAKFAST PACK, BRANDED TOTE BAG, AND A DEDICATED KANNADA LEARNING BOOK.",
    websiteUrl: "https://www.kannadotsava.com/event-details",
    websiteLabel: "kannadotsava.com/event-details",
    schedule: [
      { time: "06:00 AM", event: "Registration & Bib Check-in" },
      { time: "07:00 AM", event: "Zumba & Mass Energizer Warm-up" },
      { time: "07:30 AM", event: "Ceremonial Flag Off (3K & 5K)" },
      { time: "09:30 AM", event: "Prize Distribution & Breakfast" },
    ],
    kitItems: [
      "Customised Kannadotsava Marathon T-Shirt",
      "Cast Finisher Medal (Front & Back Engravings)",
      "Official Certificate of Participation",
      "Nutritious Breakfast Pack & Hydration",
      "Branded Commemorative Tote Bag",
      "Kannada Learning & Heritage Book",
    ],
    photos: [
      {
        title: "Commemorative Medal (Front & Back)",
        caption: "Double-sided cast metal finisher medal with Karnataka state map and Kannada calligraphy.",
        image: "/events/kannadotsava/medal-front-back.jpg",
      },
      {
        title: "Official Kannadotsava T-Shirt",
        caption: "Dri-fit athletic running t-shirt designed specifically for the 2026 Marathon.",
        image: "/events/kannadotsava/tshirt.jpg",
      },
      {
        title: "Finisher Certificate of Participation",
        caption: "Official authenticated certificate awarded to all 3K Walk and 5K Run finishers.",
        image: "/events/kannadotsava/certificate.jpg",
      },
      {
        title: "Finisher Medal Close-up",
        caption: "High-relief finish celebrating personal endurance and Kannada cultural preservation.",
        image: "/events/kannadotsava/medal.jpg",
      },
    ],
  },
  {
    id: "mission-partnership",
    index: "003",
    total: "003",
    title: "MISSION, IDENTITY & PARTNERSHIP",
    nativeTitle: "ನಮ್ಮ ದೃಷ್ಟಿಕೋನ · Our Vision",
    tagline: "Concept by Raksana Foundation • Strategic Partner: New Link Technologies",
    mainImage: "/events/kannadotsava/marathon-logo-trimmed.png",
    yearTag: "CONNECTING VALUES",
    description:
      "“ಕನ್ನಡ ಕೇವಲ ನಾವು ಮಾತನಾಡುವ ಭಾಷೆಯಲ್ಲ; ಅದು ನಮ್ಮ ಅಸ್ಮಿತೆ, ನಮ್ಮ ಹೆಮ್ಮೆ ಮತ್ತು ನಮ್ಮ ಪರಂಪರೆ. ಅದನ್ನು ಉಳಿಸಿ, ಬೆಳೆಸಿ, ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಹೆಮ್ಮೆಯಿಂದ ಹಸ್ತಾಂತರಿಸುವುದು ನಮ್ಮೆಲ್ಲರ ಜವಾಬ್ದಾರಿ.” (KANNADA IS AN IDENTITY WE MUST PRESERVE, PRACTISE AND PASS ON). NEW LINK TECHNOLOGIES BANGALORE PVT. LTD. PROUDLY SERVES AS OFFICIAL STRATEGIC BUSINESS PARTNER UNDER OUR MOTTO 'CONNECTING VALUES'.",
    websiteUrl: "https://www.kannadotsava.com",
    websiteLabel: "www.kannadotsava.com",
    highlights: [
      "Strategic Business Partner: New Link Technologies Bangalore Pvt. Ltd.",
      "Concept & Copyright: Raksana Foundation",
      "Linguistic and cultural outreach across Karnataka schools, universities, and industries",
      "Bridging generational gaps to establish Kannada as a digital and technological powerhouse",
    ],
    photos: [
      {
        title: "Kannadotsava Marathon Insignia",
        caption: "Symbol of athletic perseverance, community solidarity, and Kannada linguistic heritage.",
        image: "/events/kannadotsava/emblem-icon.png",
      },
      {
        title: "Community Heritage Walk & Run",
        caption: "Uniting citizens from across Karnataka under a single banner of cultural pride.",
        image: "/events/kannadotsava/hero-group.webp",
      },
      {
        title: "Campus Grounds & Scenic Course",
        caption: "Bangalore University Jnana Bharathi campus course amidst lush greenery.",
        image: "/events/kannadotsava/hero-vidhana-soudha.jpg",
      },
      {
        title: "Official Finisher Certification",
        caption: "Passing on Kannada literature, history, and linguistic pride to youth and children.",
        image: "/events/kannadotsava/certificate.jpg",
      },
    ],
  },
];

export default function EventsPage() {
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({
    "kannadotsava-marathon": true,
    "schedule-amenities": true,
    "mission-partnership": false,
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
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Purpose Statement & Official Kannadotsava Metadata */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: CINEMATIC_EASE }}
                className="space-y-2"
              >
                <p className="text-sm font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                  Run. Walk. Celebrate Kannada.
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-[1.15]">
                  ನಮ್ಮ ಭಾಷೆ ನಮ್ಮ ಹೆಮ್ಮೆ, <br />
                  <span className="text-[#2563EB]">ನಮ್ಮ ಸಂಸ್ಕೃತಿ ನಮ್ಮ ಶಕ್ತಿ!</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: CINEMATIC_EASE }}
                className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed"
              >
                <p>
                  New Link Technologies Bangalore Pvt. Ltd. is the proud Strategic Business Partner for{" "}
                  <strong className="text-[#0F172A] font-bold">Kannadotsava Marathon 2026</strong> (
                  <a
                    href="https://www.kannadotsava.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline font-mono font-semibold"
                  >
                    www.kannadotsava.com
                  </a>
                  ) — a mass cultural movement taking place on{" "}
                  <strong className="text-[#0F172A] font-bold">
                    Saturday, 19 December 2026 at Bangalore University, Bengaluru
                  </strong>
                  .
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  A walk and run to celebrate, protect, and promote the Kannada language and culture — open to families, students, professionals, and citizens of all ages across Karnataka:{" "}
                  <span className="font-semibold text-[#0B1F3A]">
                    &ldquo;ಎಲ್ಲರೂ ಕನ್ನಡವನ್ನೇ ಬಳಸಿ · ಕನ್ನಡ ಉಳಿಸಿ, ಬೆಳೆಸಿ, ಕಲಿಸಿ&rdquo;
                  </span>
                  .
                </p>
              </motion.div>

              {/* Event Key Highlights Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: CINEMATIC_EASE }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
              >
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#2563EB] font-bold uppercase">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Date</span>
                  </div>
                  <p className="text-sm font-bold text-[#0F172A] mt-1">19 Dec 2026</p>
                  <p className="text-[11px] text-slate-500">Saturday Morning</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#2563EB] font-bold uppercase">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Venue</span>
                  </div>
                  <p className="text-sm font-bold text-[#0F172A] mt-1">Bangalore Univ.</p>
                  <p className="text-[11px] text-slate-500">Bengaluru Campus</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#2563EB] font-bold uppercase">
                    <Award className="w-3.5 h-3.5" />
                    <span>Categories</span>
                  </div>
                  <p className="text-sm font-bold text-[#0F172A] mt-1">3K Walk | 5K Run</p>
                  <p className="text-[11px] text-slate-500">₹1,250 All-Inclusive Kit</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: CINEMATIC_EASE }}
                className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono"
              >
                <a
                  href="https://www.kannadotsava.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1F3A] hover:bg-[#142B4A] active:scale-95 text-white font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-white" />
                  <span>Register on www.kannadotsava.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>

                <a
                  href="tel:+919606916622"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-[#0F172A] font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Call: +91 96069 16622</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Vertical Pillar - Modern Editorial High-Contrast Typography */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: CINEMATIC_EASE }}
                className="relative w-full max-w-[320px] sm:max-w-[360px] md:w-[380px] lg:w-[400px] h-[340px] sm:h-[420px] md:h-[480px] rounded-3xl bg-[#090C15] border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden select-none"
              >
                {/* Brand Red Accent Stroke (Matching New Link Logo & Kannadotsava Red) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC2626]" />

                {/* Subtle atmospheric authentic event background */}
                <div className="absolute inset-0 pointer-events-none opacity-15">
                  <Image
                    src="/events/kannadotsava/hero-group.webp"
                    alt="Kannadotsava community atmosphere"
                    fill
                    sizes="400px"
                    className="object-cover object-center filter saturate-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090C15] via-[#090C15]/85 to-[#090C15]/90" />
                </div>

                {/* Center Graphic: Prominently framed authentic Kannadotsava Brand Emblem Container */}
                <div className="relative z-10 my-auto w-full flex flex-col items-center justify-center py-2 sm:py-3">
                  <div className="relative w-full rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 p-4 sm:p-5 shadow-2xl flex flex-col items-center text-center space-y-3">
                    <div className="relative w-full h-16 sm:h-20">
                      <Image
                        src="/events/kannadotsava/marathon-logo-trimmed.png"
                        alt="Official Kannadotsava Marathon 2026 Emblem"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      <span>3K WALK &bull; 5K RUN</span>
                      <span className="text-white/40">&bull;</span>
                      <span>BENGALURU</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Headline: Cultural Events */}
                <div className="relative z-10 text-left space-y-0.5 sm:space-y-1 overflow-visible whitespace-nowrap">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black font-heading tracking-tight text-white leading-[0.9]">
                    Cultural
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black font-heading tracking-tight text-white leading-[0.9]">
                    Events
                  </span>
                  <p className="pt-3 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    ಕನ್ನಡೋತ್ಸವ &bull; BENGALURU 2026
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. AUTHENTIC CASE STUDIES WITH "SHOW PHOTOS" TOGGLE */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F1F5F9] border-b border-slate-200 relative overflow-hidden">
        <Container size="default" className="space-y-20">
          {EVENT_CASE_STUDIES.map((event) => {
            const isExpanded = expandedEvents[event.id] ?? false;

            return (
              <div key={event.id} className="space-y-6">
                {/* Numbered Index Header */}
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 text-sm sm:text-base font-mono">
                  <span className="font-extrabold text-[#0F172A] text-lg sm:text-xl">
                    {event.index}
                  </span>
                  <span className="text-slate-400">/ {event.total}</span>
                  <span className="text-[#DC2626] font-bold uppercase tracking-wider pl-2">
                    {event.title}
                  </span>
                  {event.nativeTitle && (
                    <span className="text-[#0F172A] font-bold font-heading text-lg">
                      ({event.nativeTitle})
                    </span>
                  )}
                </div>

                {/* Main White Card Container */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8 overflow-hidden text-[#0F172A]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Featured Image */}
                    <div className="lg:col-span-7 relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md group">
                      <Image
                        src={event.mainImage}
                        alt={event.title}
                        fill
                        className={
                          event.mainImage.includes("logo") ||
                          event.mainImage.includes("emblem") ||
                          event.mainImage.includes("certificate") ||
                          event.mainImage.includes("medal")
                            ? "object-contain p-6 sm:p-10 bg-white group-hover:scale-105 transition-transform duration-700"
                            : "object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Bottom-left Tag */}
                      <div className="absolute bottom-4 left-5 text-white select-none">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-white/95 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                          {event.yearTag}
                        </p>
                      </div>

                      {/* Expand Button */}
                      <button
                        type="button"
                        onClick={() => openLightbox(event.mainImage, event.title, event.tagline)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                        title="View photo full size"
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    {/* Right: Narrative, Highlights & "SHOW PHOTOS" Button */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-3">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#DC2626] font-bold">
                          {event.tagline}
                        </p>
                        <p className="text-xs sm:text-sm font-sans uppercase font-bold text-slate-700 leading-relaxed tracking-wide">
                          {event.description}
                        </p>
                      </div>

                      {/* Bullet Highlights if available */}
                      {event.highlights && (
                        <div className="space-y-2 pt-1 border-t border-slate-200">
                          {event.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Schedule Breakdown if Case Study 002 */}
                      {event.schedule && (
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                          {event.schedule.map((item, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                            >
                              <div className="flex items-center gap-1 text-[11px] font-mono text-[#DC2626] font-bold">
                                <Clock className="w-3 h-3" />
                                <span>{item.time}</span>
                              </div>
                              <p className="text-xs text-slate-800 font-medium mt-0.5 leading-tight">
                                {item.event}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Runner Amenities Pack List if Case Study 002 */}
                      {event.kitItems && (
                        <div className="pt-2 border-t border-slate-200 space-y-1.5">
                          <p className="text-[11px] font-mono uppercase text-[#DC2626] font-bold">
                            What&apos;s Included (₹1,250 Registration):
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                            {event.kitItems.map((kit, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-[#DC2626] shrink-0" />
                                <span className="text-[11px]">{kit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {event.websiteUrl && (
                        <div className="pt-1">
                          <a
                            href={event.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#DC2626] hover:text-[#B91C1C] transition-colors font-semibold"
                          >
                            <Globe className="w-3.5 h-3.5 text-[#DC2626]" />
                            <span>Official Portal: {event.websiteLabel}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* Interactive "SHOW PHOTOS" / "HIDE PHOTOS" Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => togglePhotos(event.id)}
                          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer select-none"
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
                        className="pt-6 border-t border-slate-200 overflow-hidden space-y-4"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                          <span className="uppercase tracking-wider font-bold">
                            Official Event Gallery &bull; {event.photos.length} Photographs
                          </span>
                          <span className="text-slate-400">Click photo to expand</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {event.photos.map((photo, idx) => {
                            const isGraphicOrProduct =
                              photo.image.includes("logo") ||
                              photo.image.includes("emblem") ||
                              photo.image.includes("seal") ||
                              photo.image.includes("certificate") ||
                              photo.image.includes("medal") ||
                              photo.image.includes("tshirt");

                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08, duration: 0.4 }}
                                className="group/photo relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm hover:shadow-md cursor-pointer"
                                onClick={() => openLightbox(photo.image, photo.title, photo.caption)}
                              >
                                <Image
                                  src={photo.image}
                                  alt={photo.title}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 25vw"
                                  className={
                                    isGraphicOrProduct
                                      ? "object-contain p-3.5 bg-white group-hover/photo:scale-105 transition-transform duration-500"
                                      : "object-cover object-center group-hover/photo:scale-105 transition-transform duration-500"
                                  }
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover/photo:opacity-90 transition-opacity pointer-events-none" />

                                <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                                  <p className="text-xs font-bold font-heading line-clamp-1 text-white">
                                    {photo.title}
                                  </p>
                                  <p className="text-[10px] text-slate-200 font-mono line-clamp-1 mt-0.5">
                                    {photo.caption}
                                  </p>
                                </div>

                                <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity">
                                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                                </div>
                              </motion.div>
                            );
                          })}
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
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#090C15] border border-white/10 p-8 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Event Portal: www.kannadotsava.com</span>
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-snug">
              ಬನ್ನಿ, ಕನ್ನಡಕ್ಕಾಗಿ ಹೆಜ್ಜೆ ಹಾಕೋಣ! <br />
              <span className="text-amber-400">Run. Walk. Celebrate Kannada.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Saturday, 19 December 2026 &bull; Bangalore University, Bengaluru. <br />
              Registration package (₹1,250) includes customized athletic T-shirt, cast finisher medal, certificate of completion, breakfast, tote bag, and Kannada book.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.kannadotsava.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4 text-white" />
                <span>Register on www.kannadotsava.com</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

              <a
                href="tel:+919606916622"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +91 96069 16622</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <a
                href="mailto:admin@kannadotsava.com"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>admin@kannadotsava.com</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  Strategic Partner: {COMPANY_DETAILS.leadership.directors[0].name} ({COMPANY_DETAILS.leadership.directors[0].phone})
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
