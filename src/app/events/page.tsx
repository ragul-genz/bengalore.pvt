"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  Sparkles,
  Heart,
  Calendar,
  MapPin,
  Camera,
  Maximize2,
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
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { KANNADOTSAVA_EVENT, type GallerySlot } from "@/data/events";
import { COMPANY_DETAILS } from "@/data/company";

export default function EventsPage() {
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

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Official Cultural Initiative • Karnataka Heritage"
        title="Kannadotsava"
        highlight="www.kannadotsava.com"
        description="A premier annual festival celebrating the glorious culture, literature, classical music, folk arts, and community harmony of Karnataka, proudly organized and supported by New Link Technologies Bangalore Pvt. Ltd."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      {/* Official Web Portal Highlight Ribbon */}
      <section className="bg-linear-to-r from-slate-950 via-slate-900 to-brand-navy text-white py-8 border-b border-slate-800">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Event Website</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Discover Kannadotsava at{" "}
                <span className="text-amber-400 font-extrabold tracking-wide">
                  www.kannadotsava.com
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Official online destination for festival announcements, cultural schedules, and event gallery.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center justify-center gap-3">
              <a
                href={KANNADOTSAVA_EVENT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Globe className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Visit www.kannadotsava.com</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Kannadotsava Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <FadeIn as="span" mode="view" delay={0.04} y={6} className="eyebrow-badge">
                  Cultural Excellence &amp; Community Spirit
                </FadeIn>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <RevealText
                    as="h2"
                    by="word"
                    mode="view"
                    delay={0.08}
                    stagger={0.04}
                    text="Kannadotsava"
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-navy tracking-tight"
                  />
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-heading">
                    ({KANNADOTSAVA_EVENT.nativeTitle})
                  </span>
                </div>
                <p className="text-base sm:text-lg font-semibold text-blue-800">
                  {KANNADOTSAVA_EVENT.tagline}
                </p>
              </div>

              <div className="space-y-4 text-brand-secondary text-sm sm:text-base leading-relaxed">
                {KANNADOTSAVA_EVENT.aboutText.map((paragraph, idx) => (
                  <FadeIn key={idx} as="p" mode="view" delay={0.15 + idx * 0.08} y={10}>
                    {paragraph}
                  </FadeIn>
                ))}
              </div>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {KANNADOTSAVA_EVENT.keyHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{highlight.title}</span>
                    </div>
                    <p className="text-xs text-brand-secondary leading-relaxed pl-6">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Portal Link Box */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={KANNADOTSAVA_EVENT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-blue text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Explore www.kannadotsava.com</span>
                  <ExternalLink className="w-4 h-4 text-slate-300" />
                </a>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>Proudly Supported by New Link Technologies</span>
                </span>
              </div>
            </div>

            {/* Right Card: Feature Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 bg-linear-to-b from-slate-900 via-brand-navy to-slate-950 p-8 text-white shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Community &amp; Culture
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Annual Tradition</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                    ಕನ್ನಡೋತ್ಸವ
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Celebrating unity, Kannada literature, state heritage, classical arts, and youth cultural empowerment in Bangalore and throughout Karnataka.
                  </p>
                </div>

                {/* Key Event Metadata */}
                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Official Web Portal</p>
                      <a
                        href={KANNADOTSAVA_EVENT.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:underline font-mono text-[11px]"
                      >
                        www.kannadotsava.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Event Hub</p>
                      <p className="text-slate-300 text-[11px]">Bangalore &amp; Across Karnataka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Calendar className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Organized &amp; Supported By</p>
                      <p className="text-slate-300 text-[11px]">
                        New Link Technologies Bangalore Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={KANNADOTSAVA_EVENT.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Launch Portal: www.kannadotsava.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dedicated Photo Gallery Section (Ready for user's photos) */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={6} className="eyebrow-badge mb-3">
              Event Photographs &amp; Glimpses
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.04}
              text="Kannadotsava Photo Gallery"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.2} y={10} className="mt-3 text-sm sm:text-base text-brand-secondary">
              A curated photographic gallery capturing ceremonial inaugurations, cultural recitals, audience gatherings, and patron honors at Kannadotsava.
            </FadeIn>

            {/* Note badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
              <Camera className="w-4 h-4 text-blue-600" />
              <span>Official high-resolution event photographs will be displayed here</span>
            </div>
          </div>

          {/* Photo Gallery Grid with Slots */}
          <StaggerGroup
            mode="view"
            stagger={0.06}
            delay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {KANNADOTSAVA_EVENT.gallerySlots.map((slot: GallerySlot) => (
              <StaggerItem
                key={slot.id}
                y={16}
                className="group bg-white rounded-2xl border border-brand-border overflow-hidden shadow-2xs hover:shadow-lg hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Frame Container */}
                  <div className="relative aspect-4/3 w-full bg-linear-to-br from-slate-100 via-slate-50 to-blue-50/30 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                    {slot.image ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => openLightbox(slot.image!, slot.title, slot.caption)}
                      >
                        <Image
                          src={slot.image}
                          alt={slot.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-xs font-bold text-brand-navy shadow-md">
                            <Maximize2 className="w-3.5 h-3.5 text-brand-blue" />
                            <span>View Photo</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center space-y-3 p-4">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mx-auto text-brand-blue group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                          <Camera className="w-7 h-7 text-brand-blue/70" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-brand-navy">
                            {slot.title}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium">
                            Photo Updating Shortly
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Slot Details */}
                  <div className="p-5 space-y-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {slot.category}
                    </span>
                    <h3 className="text-base font-bold font-heading text-brand-navy leading-snug group-hover:text-brand-blue transition-colors">
                      {slot.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed">
                      {slot.caption}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-600">Kannadotsava Archive</span>
                  <a
                    href={KANNADOTSAVA_EVENT.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>kannadotsava.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Call to Action for Kannadotsava Portal */}
      <section className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Event Website: www.kannadotsava.com</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Join the Celebration of Karnataka&apos;s Rich Heritage
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Visit the official web portal to learn more about upcoming cultural events, artist lineups, and participation opportunities at Kannadotsava.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={KANNADOTSAVA_EVENT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-slate-950" />
                <span>Visit www.kannadotsava.com</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Contact New Link Technologies
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {COMPANY_DETAILS.leadership.directors[0].name}:{" "}
                  {COMPANY_DETAILS.leadership.directors[0].phone}
                </span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[1].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {COMPANY_DETAILS.leadership.directors[1].name}:{" "}
                  {COMPANY_DETAILS.leadership.directors[1].phone}
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox for Event Photos */}
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
