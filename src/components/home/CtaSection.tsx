"use client";

import React from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Container, Button } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="font-bold text-white tracking-wide">NEW</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="font-bold text-rose-400 tracking-wide">LINK</span>
            <span className="text-slate-300 font-normal">• Connecting Values</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-[1.15]">
            Let&apos;s Build Something Connected.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            From turnkey modular data centres to campus optical fiber backbones, boardroom AV systems,
            and enterprise hardware procurement — our engineering team in Rajajinagar, Bangalore is ready
            to assess your infrastructure requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              className="w-full sm:w-auto font-semibold bg-linear-to-r from-blue-600 via-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white shadow-xl shadow-blue-600/30 rounded-xl"
            >
              Get in Touch
            </Button>

            <Button
              variant="white"
              size="lg"
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              leftIcon={<Phone className="w-4 h-4 text-brand-navy" />}
              className="w-full sm:w-auto font-semibold rounded-xl shadow-sm hover:shadow-md"
            >
              Call Our Team
            </Button>
          </div>

          {/* Quick Contact Verification Strip */}
          <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_DETAILS.contact.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href={`mailto:${COMPANY_DETAILS.contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_DETAILS.contact.email}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Rajajinagar, Bangalore - 560010</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
