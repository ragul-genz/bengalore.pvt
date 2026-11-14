"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, GraduationCap, Hospital, Landmark, Maximize2 } from "lucide-react";
import {
  Container,
  SectionHeading,
  Lightbox,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { CLIENT_INSTITUTIONS } from "@/data/partners";

const typeIcons: Record<string, React.ReactNode> = {
  "Academic Institution": <GraduationCap className="w-4 h-4 text-brand-blue" />,
  "Government & PSU": <Landmark className="w-4 h-4 text-brand-blue" />,
  "Healthcare & Research": <Hospital className="w-4 h-4 text-brand-blue" />,
};

export function Clients() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Proven Institutional Reach"
          title="Institutions and Clients"
          highlight="We Serve"
          description="Delivering mission-critical digital infrastructure, campus networking, and facility solutions for premier academic institutions, state departments, and public authorities."
          align="center"
          className="mb-12"
        />

        {/* Client Grid */}
        <StaggerGroup
          mode="view"
          stagger={0.04}
          delay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {CLIENT_INSTITUTIONS.map((client) => (
            <StaggerItem
              key={client.name}
              y={14}
              className="bg-white p-5 rounded-2xl border border-brand-border shadow-2xs hover:border-brand-blue/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                {/* Official Client Photo / Crest Showcase Container */}
                <div className="relative w-full h-24 rounded-xl bg-slate-50/90 border border-slate-100 p-2.5 flex items-center justify-center overflow-hidden group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} official emblem`}
                      width={220}
                      height={80}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {typeIcons[client.type] || <Building2 className="w-5 h-5 text-brand-blue" />}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-100/80">
                      {client.type}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-heading text-brand-navy leading-snug pt-1 group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h4>

                  <p className="text-[11px] text-slate-500 font-medium">
                    {client.location}
                  </p>

                  <p className="text-xs text-brand-secondary line-clamp-2 leading-relaxed pt-1">
                    {client.scopeOfWork}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Authentic Client Roster Presentation Card from Company Profile */}
        <FadeIn
          mode="view"
          delay={0.08}
          y={16}
          className="mt-12 bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <FadeIn
              as="span"
              mode="view"
              delay={0.04}
              y={6}
              duration={0.4}
              className="inline-block text-[11px] font-bold text-brand-blue uppercase tracking-wider"
            >
              Company Portfolio Archive
            </FadeIn>
            <RevealText
              as="h3"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Official Client & Partner Roster"
              className="text-xl sm:text-2xl font-bold font-heading text-brand-navy"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={12}
              className="text-xs sm:text-sm text-brand-secondary leading-relaxed"
            >
              Archived client emblem sheet published in the official New Link Technologies Bangalore Pvt. Ltd.
              corporate documentation validating active institutional associations.
            </FadeIn>
          </div>

          <div className="relative group cursor-pointer shrink-0" onClick={() => setLightboxOpen(true)}>
            <div className="relative w-72 sm:w-80 h-44 rounded-xl overflow-hidden border border-brand-border bg-slate-50 shadow-sm">
              <Image
                src="/clients/client-partners-grid.png"
                alt="New Link Technologies Official Client and Partner Emblem Sheet"
                fill
                sizes="320px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-xs font-semibold text-brand-navy shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Click to Expand</span>
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Lightbox for Emblem Sheet */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/clients/client-partners-grid.png"
        imageAlt="New Link Technologies Official Client and Partner Emblem Sheet"
        title="Official Client & Partner Emblem Sheet"
        caption="From Page 23 of New Link Technologies Bangalore Pvt. Ltd. Company Profile"
      />
    </section>
  );
}

