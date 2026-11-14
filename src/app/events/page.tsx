"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Building2,
  Maximize2,
  Search,
  ArrowRight,
  Users,
  CheckCircle2,
  Phone,
} from "lucide-react";
import {
  Container,
  Button,
  Lightbox,
  PageHero,
  RevealText,
  FadeIn,
} from "@/components/common";
import { EVENTS_DATA, type EventItem } from "@/data/events";
import { COMPANY_DETAILS } from "@/data/company";

type EventCategory =
  | "all"
  | "Project Inauguration"
  | "Project Handover"
  | "Technology Summit"
  | "Corporate Milestone";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
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

  const openLightbox = (image: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  const categories: { id: EventCategory; label: string; count: number }[] = [
    { id: "all", label: "All Events & Engagements", count: EVENTS_DATA.length },
    {
      id: "Project Inauguration",
      label: "Project Inaugurations",
      count: EVENTS_DATA.filter((e) => e.category === "Project Inauguration").length,
    },
    {
      id: "Project Handover",
      label: "Client Handovers",
      count: EVENTS_DATA.filter((e) => e.category === "Project Handover").length,
    },
    {
      id: "Technology Summit",
      label: "Technology Summits",
      count: EVENTS_DATA.filter((e) => e.category === "Technology Summit").length,
    },
    {
      id: "Corporate Milestone",
      label: "Corporate Milestones",
      count: EVENTS_DATA.filter((e) => e.category === "Corporate Milestone").length,
    },
  ];

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      const matchesCategory =
        activeCategory === "all" ? true : event.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.location.toLowerCase().includes(q) ||
        event.venue.toLowerCase().includes(q) ||
        event.clientOrPartner.toLowerCase().includes(q) ||
        event.dignitaries.some((d) => d.toLowerCase().includes(q)) ||
        event.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Milestones • Inaugurations & Ceremonial Handovers"
        title="Company Events &"
        highlight="Project Inaugurations"
        description="Explore landmark project inaugurations, ribbon-cutting ceremonies, technology conferences, and corporate milestones celebrated by New Link Technologies Bangalore Pvt. Ltd. alongside institutional leaders, university chancellors, and state officials."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      {/* Metrics & Impact Bar */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn mode="view" delay={0.05} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">
                100%
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                On-Schedule Commissioning
              </p>
            </FadeIn>
            <FadeIn mode="view" delay={0.1} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">
                4+
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Public Sector Inaugurations
              </p>
            </FadeIn>
            <FadeIn mode="view" delay={0.15} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">
                Multi-Year
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                University O&amp;M Extensions
              </p>
            </FadeIn>
            <FadeIn mode="view" delay={0.2} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">
                Tier-1
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                OEM Partner Alliance Summits
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Events Section */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <FadeIn as="span" mode="view" delay={0.04} y={6} className="eyebrow-badge mb-3">
                Events &amp; Engagements
              </FadeIn>
              <RevealText
                as="h2"
                by="word"
                mode="view"
                delay={0.08}
                stagger={0.04}
                text="Landmark Ceremonies & Technology Milestones"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
              />
              <FadeIn as="p" mode="view" delay={0.2} y={10} className="mt-2 text-sm sm:text-base text-brand-secondary max-w-2xl">
                A photographic timeline of project inaugurations, client handovers, and OEM leadership conferences executed by New Link Technologies Bangalore Pvt. Ltd.
              </FadeIn>
            </div>

            {/* Live Search Input */}
            <FadeIn mode="view" delay={0.15} y={10} className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search event, venue, or dignitary..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue shadow-2xs transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/40 hover:text-brand-navy"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="space-y-10">
              {filteredEvents.map((event: EventItem, idx: number) => {
                const isEven = idx % 2 === 1;
                return (
                  <FadeIn
                    key={event.id}
                    mode="view"
                    delay={0.06}
                    y={16}
                    className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Image Showcase Container */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        } space-y-3`}
                      >
                        <div
                          className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-900 group cursor-pointer shadow-md"
                          onClick={() =>
                            openLightbox(event.image, event.title, `${event.venue} • ${event.date}`)
                          }
                        >
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                            <span className="font-medium bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                              {event.venue}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/95 text-brand-navy font-bold shadow-xs">
                              <Maximize2 className="w-3.5 h-3.5 text-brand-blue" />
                              <span>Zoom</span>
                            </span>
                          </div>
                        </div>

                        {event.secondaryImage && (
                          <div className="flex items-center gap-3">
                            <div
                              className="relative w-24 h-16 rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:border-brand-blue group shrink-0"
                              onClick={() =>
                                openLightbox(
                                  event.secondaryImage!,
                                  `${event.title} - Operational View`,
                                  event.venue
                                )
                              }
                            >
                              <Image
                                src={event.secondaryImage}
                                alt={`${event.title} preview`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <p className="text-[11px] text-slate-500">
                              Click thumbnail to view operational demonstration photo
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Content Details */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        } space-y-4`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            {event.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                            <Calendar className="w-3 h-3 text-brand-blue" />
                            <span>{event.date}</span>
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                            {event.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy leading-snug">
                          {event.title}
                        </h3>

                        <div className="space-y-1 text-xs text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                            <span className="font-medium text-brand-navy">{event.location}</span>
                            <span className="text-slate-400">•</span>
                            <span className="truncate">{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                            <span className="font-semibold text-brand-navy">Client / Partner:</span>
                            <span>{event.clientOrPartner}</span>
                          </div>
                        </div>

                        <p className="text-sm text-brand-secondary leading-relaxed">
                          {event.description}
                        </p>

                        {/* Dignitaries Present */}
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                            <Users className="w-4 h-4 text-brand-blue" />
                            <span>Prominent Dignitaries &amp; Leadership Present:</span>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600">
                            {event.dignitaries.map((dignitary) => (
                              <li key={dignitary} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span className="truncate">{dignitary}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Highlights */}
                        <div className="space-y-1.5 pt-1">
                          {event.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-2 text-xs text-brand-secondary">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-brand-border p-8">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-navy font-heading">
                No events found matching &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing your search query or choosing another event category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Milestone Timeline Section */}
      <section className="py-16 md:py-20 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow-badge mb-3">Historical Trajectory</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
              Corporate Milestones &amp; Growth Journey
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondary mt-2">
              From our founding in Bangalore to becoming a preferred enterprise integrator for state universities and public sector enterprises.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto border-l-2 border-blue-200 pl-6 sm:pl-8 space-y-8">
            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-brand-blue">2020 – UAS Raichur Modular Data Centre</span>
              <h4 className="text-base font-bold text-brand-navy mt-1">First Institutional Modular Data Centre Inauguration</h4>
              <p className="text-xs sm:text-sm text-brand-secondary mt-1">
                Completed and inaugurated the full-turnkey Modular Data Centre at UAS Raichur campus through KEONICS, followed by a 3-year maintenance tenure.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-brand-blue">2021 – NAAC 220 kWp Clean Solar Commissioning</span>
              <h4 className="text-base font-bold text-brand-navy mt-1">Landmark Grid-Tied Clean Energy Deployment</h4>
              <p className="text-xs sm:text-sm text-brand-secondary mt-1">
                Commissioned 220 kWp grid-connected solar power plant at the NAAC Bengaluru campus through ITI Limited, recognized with formal commendation.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-brand-blue">2021 – Tumkur University Convocation Auditorium</span>
              <h4 className="text-base font-bold text-brand-navy mt-1">Architectural Acoustic &amp; Digital AV Engineering</h4>
              <p className="text-xs sm:text-sm text-brand-secondary mt-1">
                Inauguration of the state-of-the-art auditorium with specialized acoustic panelling and high-definition conference media.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-brand-blue">2022-Present – Multi-Campus Infrastructure Scaling</span>
              <h4 className="text-base font-bold text-brand-navy mt-1">Enterprise Expansion Across Public Sector Undertakings</h4>
              <p className="text-xs sm:text-sm text-brand-secondary mt-1">
                Expanded technology deployment across 16+ verified institutions, introducing enterprise command room video walls, fire alarm safety, and fiber backbones.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action for Upcoming Projects */}
      <section className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-400/30">
              New Link Technologies Bangalore Pvt. Ltd.
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Planning an Institutional Infrastructure Launch or Tender?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Our engineering teams and executive directors collaborate directly with project committees, architects, and government departments from concept to ceremonial commissioning.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg"
              >
                Initiate Project Discussion
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/projects"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                View Project Portfolio
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_DETAILS.leadership.directors[0].name}: {COMPANY_DETAILS.leadership.directors[0].phone}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[1].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_DETAILS.leadership.directors[1].name}: {COMPANY_DETAILS.leadership.directors[1].phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
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
