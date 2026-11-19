"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close drawer on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Scroll detection for transparent -> glassmorphic transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* FLOATING TRANSPARENT CINEMA HEADER ACROSS ALL PAGES */}
      {/* Left: Authentic New Link Logo | Right: Distinctive 3-Dot Button */}
      {/* ======================================================== */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-3 sm:py-4 px-4 sm:px-8 lg:px-14",
          isScrolled
            ? "bg-[#050B14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5 sm:py-3.5"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Authentic New Link Technologies Logo (With Crisp White Glass Capsule) */}
          <Link
            href="/"
            className="inline-flex items-center bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl border border-white/40 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none select-none"
            aria-label="New Link Technologies Bangalore Pvt. Ltd. Home - Connecting Values"
          >
            <Image
              src="/logo/company-logo-transparent.png"
              alt="New Link Technologies Bangalore Pvt. Ltd. - Connecting Values"
              width={145}
              height={44}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Right: Distinctive New Link 3-Dot Executive Button ("3 dot konjam different ah vachiru") */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="group relative p-[2px] rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle executive navigation and company details"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#050B14]/95 backdrop-blur-md flex items-center justify-center transition-colors group-hover:bg-[#08162B]">
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                /* 3 Distinct Dots in Sapphire, White & Sky */
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform delay-75" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform delay-150" />
                </div>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* LUXURY SLIDE-OVER NAVIGATION & "ABOUT NEW LINK" DRAWER */}
      {/* ("click pana thaa about itula teriyanum") */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-Over Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md sm:max-w-xl bg-[#050B14] border-l border-white/15 z-50 shadow-2xl flex flex-col justify-between overflow-y-auto p-6 sm:p-10 select-none"
            >
              <div className="space-y-8">
                {/* Drawer Top Header: Logo + Close */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-md"
                  >
                    <Image
                      src="/logo/company-logo-transparent.png"
                      alt="New Link Technologies"
                      width={130}
                      height={38}
                      className="h-7 w-auto object-contain"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* ======================================================== */}
                {/* EXECUTIVE "ABOUT NEW LINK" SPOTLIGHT INSIDE DRAWER */}
                {/* ("click pana thaa about itula teriyanum") */}
                {/* ======================================================== */}
                <div className="rounded-2xl bg-[#0A1220] border border-white/15 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-bold text-sky-400">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>About New Link Technologies</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      EST. 2011
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    Premier turnkey IT infrastructure integrator headquartered in Rajajinagar, Bangalore under Director M.G. Girish. We engineer modular data centres, 10Gbps campus optical fiber rings, and 220 kWp clean energy power plants for Karnataka&apos;s leading universities, PSUs, and defense establishments.
                  </p>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-xs">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                      <p className="text-white font-black text-sm">15+</p>
                      <p className="text-[9px] text-slate-400 uppercase">Years Heritage</p>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                      <p className="text-sky-400 font-black text-sm">220 kWp</p>
                      <p className="text-[9px] text-slate-400 uppercase">Solar Yield</p>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                      <p className="text-emerald-400 font-black text-sm">100%</p>
                      <p className="text-[9px] text-slate-400 uppercase">SLA Uptime</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links Directory */}
                <div className="space-y-1">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 pb-2">
                    Directory Navigation
                  </p>

                  {COMPANY_DETAILS.navLinks.map((item, idx) => {
                    const active = isActiveLink(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-3 px-3.5 rounded-xl font-heading text-lg sm:text-xl font-bold tracking-tight transition-all group",
                            active
                              ? "bg-gradient-to-r from-blue-600/30 to-sky-500/20 text-white border-l-4 border-sky-400"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-sky-400">
                              0{idx + 1}
                            </span>
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight
                            className={cn(
                              "w-5 h-5 transition-transform group-hover:translate-x-1",
                              active ? "text-white" : "text-slate-500"
                            )}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer Actions & Direct Channels */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact#quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Request Turnkey Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Direct Contact Channels */}
                <div className="space-y-2.5 text-xs text-slate-400 font-mono">
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>{COMPANY_DETAILS.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.email}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>{COMPANY_DETAILS.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs">{COMPANY_DETAILS.contact.address.full}</span>
                  </div>
                </div>

                {/* Compliance Pill */}
                <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001:2015 CERTIFIED • GOVERNMENT &amp; PSU COMPLIANT</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
