"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, GraduationCap, Hospital, Landmark, Maximize2 } from "lucide-react";
import { Container, SectionHeading, Lightbox } from "@/components/common";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENT_INSTITUTIONS.map((client) => (
            <div
              key={client.name}
              className="bg-white p-5 rounded-xl border border-brand-border shadow-2xs hover:border-brand-blue/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {typeIcons[client.type] || <Building2 className="w-4 h-4 text-brand-blue" />}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {client.type.split(" ")[0]}
                  </span>
                </div>

                <h4 className="text-sm font-bold font-heading text-brand-navy leading-snug">
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
          ))}
        </div>

        {/* Authentic Client Roster Presentation Card from Company Profile */}
        <div className="mt-12 bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">
              Company Portfolio Archive
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
              Official Client & Partner Roster
            </h3>
            <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
              Archived client emblem sheet published in the official New Link Technologies
              corporate documentation validating active institutional associations.
            </p>
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
        </div>
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

