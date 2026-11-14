"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Maximize2, ShieldCheck, FileCheck } from "lucide-react";
import {
  Container,
  SectionHeading,
  Lightbox,
  StaggerGroup,
  StaggerItem,
  FadeIn,
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
    <section className="py-20 md:py-28 bg-white/80 backdrop-blur-xs border-b border-brand-border relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Government & Institutional Commendations"
          title="Recognition and"
          highlight="Appreciation"
          description="Authentic project completion and performance certificates awarded to New Link Technologies Bangalore Pvt. Ltd. by public sector enterprises and state universities."
          align="center"
          className="mb-14"
        />

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
              className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white shadow-xs hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Certificate Scan Container */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-50 border-b border-brand-border p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-200 shadow-inner bg-white">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  {/* Lightbox trigger button */}
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(cert.image, cert.title, cert.dateOrRef)
                    }
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center m-4 rounded-lg"
                    title="Click to view full certificate and zoom"
                    aria-label={`View certificate for ${cert.title}`}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 text-xs font-bold text-brand-navy shadow-lg">
                      <Maximize2 className="w-4 h-4 text-brand-blue" />
                      <span>View Original Certificate</span>
                    </span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider">
                    <Award className="w-4 h-4 shrink-0" />
                    <span className="truncate">{cert.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-brand-secondary font-medium">
                    Issued by: <strong className="text-brand-navy">{cert.issuingBody}</strong>
                  </p>

                  <p className="text-xs text-brand-secondary line-clamp-3 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Reference Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-brand-border/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{cert.dateOrRef}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Credibility Guarantee Banner */}
        <FadeIn
          mode="view"
          delay={0.12}
          y={12}
          className="mt-14 p-6 rounded-2xl bg-brand-lightBg border border-brand-border flex items-center justify-center gap-3 text-center text-xs text-brand-secondary"
        >
          <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0" />
          <span>
            All certificates presented are un-retouched official documents issued by authorized
            state enterprises and academic registrars.
          </span>
        </FadeIn>
      </Container>

      {/* Lightbox Modal with Zoom */}
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
