"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Maximize2, ShieldCheck, Sparkles } from "lucide-react";
import {
  Container,
  Lightbox,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { CERTIFICATES_DATA, type CertificateItem } from "@/data/certificates";

export function Certificates() {
  const [activeLightbox, setActiveLightbox] = useState<{
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
    setActiveLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50/80 backdrop-blur-xs border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Tech Ambient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-1/4 top-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[110px]" />
        <div className="absolute right-10 bottom-10 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <Container size="default" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <FadeIn
            mode="view"
            delay={0.03}
            y={8}
            duration={0.42}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-800">
              OFFICIAL GOVERNMENT COMMENDATIONS • PRESTIGE
            </span>
          </FadeIn>

          <RevealText
            as="h2"
            by="word"
            mode="view"
            delay={0.08}
            stagger={0.045}
            duration={0.52}
            text="Institutional Recognition &amp;"
            highlight="Appreciation Letters"
            highlightClassName="text-blue-600"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12]"
          />

          <FadeIn
            as="p"
            mode="view"
            delay={0.2}
            y={10}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Authentic project completion, performance appreciation, and commendation certificates awarded to New Link Technologies Bangalore Pvt. Ltd. by public sector enterprises and premier universities.
          </FadeIn>
        </div>

        {/* Certificate Gallery Grid */}
        <StaggerGroup
          mode="view"
          stagger={0.08}
          delay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CERTIFICATES_DATA.map((cert: CertificateItem) => (
            <StaggerItem
              key={cert.id}
              y={18}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-md hover:-translate-y-2 hover:border-amber-400/80 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden relative"
            >
              {/* Top Gold Ribbon Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div>
                {/* Certificate Scan Container */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-900 border-b border-slate-100 p-4">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700 shadow-inner bg-white">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2 group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>

                  {/* Lightbox trigger overlay */}
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(cert.image, cert.title, cert.dateOrRef)
                    }
                    className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center m-4 rounded-xl cursor-pointer"
                    title="Click to view full certificate in high-res"
                    aria-label={`View certificate for ${cert.title}`}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-xs font-bold text-slate-900 shadow-xl group-hover:scale-105 transition-transform">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span>Inspect Certificate</span>
                    </span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider">
                    <Award className="w-4 h-4 shrink-0 text-amber-600" />
                    <span className="truncate">{cert.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    Issued by: <strong className="text-slate-800">{cert.issuingBody}</strong>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official Record</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {cert.dateOrRef}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeLightbox.isOpen}
        onClose={() => setActiveLightbox({ ...activeLightbox, isOpen: false })}
        imageSrc={activeLightbox.image}
        imageAlt={activeLightbox.title}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />
    </section>
  );
}
