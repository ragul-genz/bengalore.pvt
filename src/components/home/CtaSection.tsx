"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Container, RevealText, FadeIn } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export function CtaSection() {
  return (
    <section className="py-18 md:py-24 bg-[#08162B] text-white relative overflow-hidden">
      {/* Background radial glow & subtle tech grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn
            mode="view"
            delay={0.04}
            y={8}
            duration={0.42}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-white border border-white/15 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="font-semibold tracking-wider uppercase text-[11px] text-blue-200">
              Connecting Values • Enterprise Delivery
            </span>
          </FadeIn>

          <RevealText
            as="h2"
            by="word"
            mode="view"
            delay={0.1}
            stagger={0.045}
            duration={0.52}
            text="Let's Build Something"
            highlight="Connected."
            highlightClassName="text-blue-400"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]"
          />

          <FadeIn
            as="p"
            mode="view"
            delay={0.26}
            y={14}
            duration={0.55}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            From turnkey modular data centres to campus optical fiber backbones, boardroom AV systems,
            and enterprise hardware procurement — our engineering team in Rajajinagar, Bangalore is ready
            to assess your infrastructure requirements.
          </FadeIn>

          {/* Action Pill Buttons */}
          <FadeIn
            mode="view"
            delay={0.38}
            y={12}
            duration={0.5}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0A192F] font-semibold text-sm shadow-sm transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Our Team</span>
            </a>
          </FadeIn>

          {/* Quick Contact Verification Strip */}
          <FadeIn
            mode="view"
            delay={0.46}
            y={10}
            duration={0.5}
            className="pt-7 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300"
          >
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_DETAILS.contact.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${COMPANY_DETAILS.contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_DETAILS.contact.email}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Rajajinagar, Bangalore - 560010</span>
            </span>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
