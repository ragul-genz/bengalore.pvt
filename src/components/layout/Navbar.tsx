"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Container, Button, Logo } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile drawer on route change during render (React 19 recommended pattern)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Scroll detection for sticky shadow & elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Corporate Contact & Tagline (Desktop) */}
      <div className="bg-brand-navy text-white/90 text-xs py-2 border-b border-brand-darkNavy hidden lg:block select-none">
        <Container size="default">
          <div className="flex items-center justify-between">
            {/* Tagline & Location */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </span>
                <span className="text-white font-semibold">New Link</span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-200">{COMPANY_DETAILS.tagline}</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Rajajinagar, Bangalore - 560010</span>
              </div>
            </div>

            {/* Official 5 Verticals Strip */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-medium text-slate-300">
              <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold uppercase tracking-wider text-[10px]">
                Verticals
              </span>
              <span>IT</span>
              <span className="text-rose-400">•</span>
              <span>Hardware</span>
              <span className="text-rose-400">•</span>
              <span>Software</span>
              <span className="text-rose-400">•</span>
              <span>Infrastructure</span>
              <span className="text-rose-400">•</span>
              <span>Consulting</span>
            </div>

            {/* Direct Phone & Email Channels */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${COMPANY_DETAILS.contact.phone}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                title="Call New Link Technologies"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-medium">{COMPANY_DETAILS.contact.phoneDisplay}</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={`mailto:${COMPANY_DETAILS.contact.email}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                title="Email New Link Technologies"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-medium">{COMPANY_DETAILS.contact.email}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          "w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b",
          isScrolled
            ? "border-brand-border shadow-md py-3.5"
            : "border-slate-200/80 py-4 lg:py-5"
        )}
      >
        <Container size="default">
          <div className="flex items-center justify-between">
            {/* Company Logo */}
            <Logo variant="light" size="md" href="/" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {COMPANY_DETAILS.navLinks.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                      active
                        ? "text-brand-blue font-semibold bg-brand-blue/8"
                        : "text-brand-text hover:text-brand-blue hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-linear-to-r from-blue-600 to-rose-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop "Get a Quote" Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href="/contact#quote"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-linear-to-r from-blue-600 via-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 border-0 font-semibold"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand-navy" />
              ) : (
                <Menu className="w-6 h-6 text-brand-navy" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Navigation Drawer (Rendered conditionally on user toggle) */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-brand-border flex items-center justify-between">
              <Logo variant="light" size="sm" href="/" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-brand-secondary hover:text-brand-navy hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              <p className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wider px-3 mb-2">
                Navigation Menu
              </p>
              {COMPANY_DETAILS.navLinks.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors",
                      active
                        ? "bg-brand-blue/10 text-brand-blue font-semibold"
                        : "text-brand-text hover:bg-slate-50 hover:text-brand-navy"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={cn(
                        "w-4 h-4",
                        active ? "text-brand-blue" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}

              {/* Quick Quote Banner inside Drawer */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact#quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full justify-center shadow-sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Drawer Footer with Verified Contact Info */}
            <div className="p-5 bg-brand-lightBg border-t border-brand-border space-y-3">
              <p className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wider">
                Direct Assistance
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.contact.phone}`}
                className="flex items-center gap-3 text-xs text-brand-navy font-semibold hover:text-brand-blue transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0 text-brand-blue">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-secondary font-normal">Call Us Directly</p>
                  <p>{COMPANY_DETAILS.contact.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.contact.email}`}
                className="flex items-center gap-3 text-xs text-brand-navy font-semibold hover:text-brand-blue transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0 text-brand-blue">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-secondary font-normal">Email Our Team</p>
                  <p className="truncate">{COMPANY_DETAILS.contact.email}</p>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
