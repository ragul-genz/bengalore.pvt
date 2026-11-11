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
  ChevronDown,
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
      {/* Top Bar - Matching Official Corporate Header */}
      <div className="bg-[#08162B] text-white/90 text-xs py-2 border-b border-white/10 hidden lg:block select-none">
        <Container size="default">
          <div className="flex items-center justify-between">
            {/* Tagline & Location */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shadow-xs shadow-blue-400" />
                <span className="text-white/95 font-medium">Connecting Values.</span>
              </div>
              <span className="text-white/20 font-light">|</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Rajajinagar, Bangalore - 560010</span>
              </div>
            </div>

            {/* Direct Phone & Email Channels */}
            <div className="flex items-center gap-5">
              <a
                href={`tel:${COMPANY_DETAILS.contact.phone}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                title="Call New Link Technologies"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-medium">{COMPANY_DETAILS.contact.phoneDisplay}</span>
              </a>
              <span className="text-white/20 font-light">|</span>
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
          "w-full bg-white/98 backdrop-blur-md transition-all duration-300 border-b",
          isScrolled
            ? "border-slate-200 shadow-sm py-3"
            : "border-slate-100 py-3.5 lg:py-4"
        )}
      >
        <Container size="default">
          <div className="flex items-center justify-between">
            {/* Company Logo */}
            <Logo variant="light" size="md" href="/" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {COMPANY_DETAILS.navLinks.map((item) => {
                const active = isActiveLink(item.href);
                const isServices = item.href === "/services";
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 relative py-1 flex items-center gap-1",
                      active
                        ? "text-blue-600 font-semibold"
                        : "text-slate-700 hover:text-blue-600"
                    )}
                  >
                    <span>{item.label}</span>
                    {isServices && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                    )}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop "Get a Quote" Action Button - Pill Style */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
