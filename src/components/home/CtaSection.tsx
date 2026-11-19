"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container, CINEMATIC_EASE, VIEWPORT_CONFIG } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";
import { motion } from "motion/react";

export function CtaSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant responsive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* 1. CRIMSON RED "Got a vision? Let's make it real." BANNER */}
      {/* (Exact replica of frame 00:12 in reference video) */}
      {/* ======================================================== */}
      <section className="relative w-full py-28 sm:py-36 md:py-44 bg-[#BE123C] text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden select-none">
        {/* Center Circular Lighter Red Ambient Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(244,63,94,0.4) 0%, rgba(190,18,60,0.95) 60%, #BE123C 100%)",
          }}
        />

        <Container size="default" className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, ease: CINEMATIC_EASE }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight leading-[0.98] uppercase drop-shadow-md"
          >
            <span>Got a vision?</span>
            <span className="block mt-2">Let&apos;s make it real.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, delay: 0.12, ease: CINEMATIC_EASE }}
            className="text-base sm:text-xl md:text-2xl text-rose-100 font-light max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re always up for conversations that start with a what if. Whether you&apos;ve got a brief or just a thought, let&apos;s build infrastructure that stands the test of time.
          </motion.p>

          {/* Black Pill "Contact Us ↗" Button (Exact Match to Frame 00:12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.22, ease: CINEMATIC_EASE }}
            className="pt-4"
          >
            <a
              href="#contact-form-section"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-black text-white hover:bg-slate-900 font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Contact Us</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </div>
            </a>
          </motion.div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. "READY TO START YOUR PROJECT?" SPLIT CONTACT SECTION */}
      {/* Left: Direct Contact Info | Right: Clean Inquiry Form */}
      {/* (Exact replica of frame 00:19 in reference video) */}
      {/* ======================================================== */}
      <section
        id="contact-form-section"
        className="py-24 sm:py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200"
      >
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                  Ready to start your Project?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  Let&apos;s make your vision a reality. Contact us today and let&apos;s discuss how we can help you innovate, scale, and engineer dependable infrastructure.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <h4 className="text-lg font-bold font-heading text-slate-900">
                  Contact Info
                </h4>

                {/* Email Channel with Red Circle Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#BE123C] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Official Email
                    </p>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 hover:text-[#BE123C] transition-colors"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone Channels with Red Circle Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#BE123C] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Direct Hotlines
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-slate-900">
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone}`}
                        className="hover:text-[#BE123C] transition-colors"
                      >
                        {COMPANY_DETAILS.contact.phoneDisplay}
                      </a>
                      <span className="text-slate-300">|</span>
                      <a
                        href="tel:+919986666633"
                        className="hover:text-[#BE123C] transition-colors"
                      >
                        +91 99866 66633
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location with Red Circle Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#BE123C] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Engineering Directorate
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                      {COMPANY_DETAILS.contact.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Turnkey Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl">
              <h4 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                Contact Us
              </h4>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h5 className="text-xl font-bold text-emerald-950 font-heading">
                    Inquiry Received Successfully!
                  </h5>
                  <p className="text-sm text-emerald-800">
                    Thank you. Our turnkey engineering directorate in Bangalore will review your requirements and get in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First & Last Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-200/70 border border-transparent focus:border-slate-400 focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-200/70 border border-transparent focus:border-slate-400 focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Phone with +91 Country Code */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4 flex items-center gap-1.5 text-xs font-mono text-slate-600 font-bold border-r border-slate-300 pr-3 pointer-events-none">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full pl-20 pr-4 py-3.5 rounded-xl bg-slate-200/70 border border-transparent focus:border-slate-400 focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-200/70 border border-transparent focus:border-slate-400 focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Project Requirements & Scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-200/70 border border-transparent focus:border-slate-400 focus:bg-white text-slate-900 text-sm outline-none transition-all placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  {/* Submit Button (Centered, Crimson Text on Light Pill matching Frame 00:19) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-slate-200 hover:bg-[#BE123C] text-[#BE123C] hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-[0.99]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
