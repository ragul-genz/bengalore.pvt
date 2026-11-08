"use client";

import React from "react";
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Connecting Values</span>
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span>Bangalore, India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
            Let&apos;s Build Something Connected.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Looking for reliable IT and infrastructure solutions? Connect with our team to
            discuss your requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold shadow-xl shadow-blue-600/25"
            >
              Get in Touch
            </Button>

            <Button
              variant="white"
              size="lg"
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              leftIcon={<Phone className="w-4 h-4 text-brand-navy" />}
              className="w-full sm:w-auto font-semibold"
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
