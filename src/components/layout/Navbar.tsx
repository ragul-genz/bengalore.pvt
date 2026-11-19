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
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [clickedHref, setClickedHref] = useState<string | null>(null);

  // Close drawer on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setClickedHref(null);
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

  const handleNavClick = (href: string) => {
    setClickedHref(href);
    setTimeout(() => {
      setIsOpen(false);
    }, 180);
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
            className="inline-flex items-center bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl border border-white/40 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none"
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
            className="group relative p-[2px] rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-blue-500 shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none"
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
      {/* LUXURY SLIDE-OVER NAVIGATION DRAWER */}
      {/* 100% Guaranteed Smooth Scrolling & Interactive Click Effects */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-Over Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-md sm:max-w-lg bg-[#050B14]/98 backdrop-blur-2xl border-l border-white/15 z-50 shadow-2xl flex flex-col h-[100dvh] max-h-screen overflow-hidden"
              aria-label="Site Navigation"
            >
              {/* STICKY TOP HEADER (Non-scrollable, always accessible) */}
              <div className="shrink-0 px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#050B14]/95 backdrop-blur-md z-10">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl shadow-md hover:opacity-95 transition-opacity"
                  aria-label="New Link Technologies Home"
                >
                  <Image
                    src="/logo/company-logo-transparent.png"
                    alt="New Link Technologies Bangalore Pvt. Ltd."
                    width={130}
                    height={38}
                    className="h-7 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* SCROLLABLE BODY (Guaranteed smooth scroll on all mobile and desktop browsers) */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-6 space-y-7 touch-pan-y scrollbar-thin scrollbar-thumb-white/20 hover:scrollbar-thumb-sky-400/50">
                
                {/* Directory Navigation */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                      Directory Navigation
                    </p>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 rounded-full font-semibold">
                      {COMPANY_DETAILS.navLinks.length} Routes
                    </span>
                  </div>

                  <nav className="space-y-1.5" aria-label="Directory navigation links">
                    {COMPANY_DETAILS.navLinks.map((item, idx) => {
                      const active = isActiveLink(item.href);
                      const isClicked = clickedHref === item.href;

                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.035 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                              "relative flex items-center justify-between py-3.5 px-4 rounded-xl font-heading text-lg sm:text-xl font-bold tracking-tight transition-all duration-200 group overflow-hidden cursor-pointer",
                              active
                                ? "bg-gradient-to-r from-blue-600/35 via-blue-500/25 to-sky-500/15 text-white border-l-4 border-sky-400 shadow-lg shadow-blue-900/30"
                                : "text-slate-300 hover:text-white hover:bg-white/8 hover:translate-x-1",
                              isClicked && "scale-[0.98] ring-2 ring-sky-400 bg-sky-500/25 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                            )}
                          >
                            {/* Animated Active/Click Glow Pill */}
                            {isClicked && (
                              <motion.div
                                layoutId="nav-click-glow"
                                initial={{ opacity: 0.8, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-sky-500/30 to-blue-400/20 pointer-events-none"
                              />
                            )}

                            <div className="flex items-center gap-3.5 relative z-10">
                              <span
                                className={cn(
                                  "font-mono text-xs font-semibold px-2 py-0.5 rounded-md transition-colors",
                                  active
                                    ? "text-sky-300 bg-sky-500/20 border border-sky-400/30"
                                    : "text-slate-400 group-hover:text-sky-400 bg-white/5"
                                )}
                              >
                                0{idx + 1}
                              </span>
                              <span>{item.label}</span>
                            </div>

                            <ChevronRight
                              className={cn(
                                "w-5 h-5 transition-transform duration-200 relative z-10",
                                active
                                  ? "text-sky-300 translate-x-1"
                                  : "text-slate-500 group-hover:text-white group-hover:translate-x-1.5",
                                isClicked && "translate-x-2 text-sky-300"
                              )}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Primary CTA: Turnkey Quote Request */}
                <div className="pt-1">
                  <Link
                    href="/contact#quote"
                    onClick={() => handleNavClick("/contact")}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:brightness-110 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all cursor-pointer group"
                  >
                    <span>Request Turnkey Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Direct Communications & Channels */}
                <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-slate-300 font-mono">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                    Direct Communications
                  </p>
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{COMPANY_DETAILS.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.email}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{COMPANY_DETAILS.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white/5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-slate-300 leading-relaxed">
                      {COMPANY_DETAILS.contact.address.full}
                    </span>
                  </div>
                </div>

                {/* Corporate Compliance Badge */}
                <div className="flex items-center gap-2 pt-2 pb-12 text-[11px] font-mono text-slate-400 border-t border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001:2015 CERTIFIED • GOVERNMENT &amp; PSU COMPLIANT</span>
                </div>

              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
