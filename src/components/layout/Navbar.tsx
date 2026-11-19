"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
      {/* FLOATING TRANSPARENT CINEMA HEADER (EVENTUROX REPLICA) */}
      {/* Left: Sleek Logo | Right: Signature Circular Crimson "☰" */}
      {/* ======================================================== */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 sm:py-5 px-6 sm:px-10 lg:px-14",
          isScrolled
            ? "bg-[#050B14]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5 sm:py-4"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Sleek Minimalist Logo (Matches "EUR" Clean Aesthetic) */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none focus-visible:outline-none"
            aria-label="New Link Technologies Home"
          >
            <span className="font-heading font-black text-2xl sm:text-3xl tracking-tighter text-white uppercase group-hover:scale-105 transition-transform">
              NEW<span className="text-[#E11D48]">LINK</span>
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
          </Link>

          {/* Right: Signature Eventurox Circular Crimson Menu Button ("3 dot / ☰") */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white flex items-center justify-center shadow-xl shadow-rose-950/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <div className="flex flex-col gap-1 items-center justify-center">
                <span className="w-5 h-[2px] bg-white rounded-full" />
                <span className="w-5 h-[2px] bg-white rounded-full" />
                <span className="w-5 h-[2px] bg-white rounded-full" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* LUXURY FULLSCREEN SLIDE-OVER NAVIGATION DRAWER */}
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
              className="fixed top-0 right-0 bottom-0 w-full max-w-md sm:max-w-lg bg-[#050B14] border-l border-white/15 z-50 shadow-2xl flex flex-col justify-between overflow-y-auto p-6 sm:p-10 select-none"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between pb-8 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 group"
                >
                  <span className="font-heading font-black text-2xl sm:text-3xl tracking-tighter text-white uppercase">
                    NEW<span className="text-[#E11D48]">LINK</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
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

              {/* Navigation Links List */}
              <div className="py-8 space-y-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold mb-4">
                  NAVIGATION DIRECTORY
                </p>
                {COMPANY_DETAILS.navLinks.map((item, idx) => {
                  const active = isActiveLink(item.href);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * idx }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-200 group text-lg sm:text-xl font-heading font-bold",
                          active
                            ? "bg-[#BE123C] text-white shadow-lg shadow-rose-900/30"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono opacity-50">
                            0{idx + 1}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className={cn(
                          "w-5 h-5 transition-transform group-hover:translate-x-1",
                          active ? "text-white" : "text-slate-500"
                        )} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Direct Turnkey CTA Button */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact#quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Request Turnkey Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Direct Contact Channels */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-400">
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
                    <Mail className="w-4 h-4 text-[#BE123C]" />
                    <span>{COMPANY_DETAILS.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-2.5 pt-1">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{COMPANY_DETAILS.contact.address.full}</span>
                  </div>
                </div>

                {/* Compliance Pill */}
                <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001:2015 CERTIFIED • GOVERNMENT COMPLIANT</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
