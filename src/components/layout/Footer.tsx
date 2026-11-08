import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container, Logo, CurrentYear } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden border-t border-brand-darkNavy">
      {/* Top subtle border accent */}
      <div className="h-1 w-full bg-linear-to-r from-brand-navy via-brand-blue to-brand-navy" />

      {/* Main Footer Content */}
      <div className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Brand Info & Overview (4 cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-5">
              <Logo variant="dark" size="lg" href="/" />

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {COMPANY_DETAILS.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  {COMPANY_DETAILS.description}
                </p>
              </div>

              {/* Corporate Trust Badge */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Enterprise Grade Technology & Infrastructure</span>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {COMPANY_DETAILS.quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Enterprise Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Enterprise Services
              </h3>
              <ul className="space-y-2.5">
                {COMPANY_DETAILS.serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span className="line-clamp-1">{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Contact Information
              </h3>
              <div className="space-y-3.5 text-sm text-slate-300">
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                  <div className="leading-snug text-xs sm:text-sm">
                    <p className="font-medium text-white">{COMPANY_DETAILS.name}</p>
                    <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line1}</p>
                    <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line2}</p>
                    <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line3}</p>
                    <p className="text-slate-300 font-semibold">{COMPANY_DETAILS.contact.address.city} - {COMPANY_DETAILS.contact.address.postalCode}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-400">Direct Contact</p>
                    <a
                      href={`tel:${COMPANY_DETAILS.contact.phone}`}
                      className="font-medium text-white hover:text-blue-300 transition-colors"
                    >
                      {COMPANY_DETAILS.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-400">Official Correspondence</p>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.email}`}
                      className="font-medium text-white hover:text-blue-300 transition-colors break-all"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-brand-darkNavy/80 bg-[#08172c] py-6 text-xs text-slate-400">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p>
                © <CurrentYear />{" "}
                <span className="font-medium text-slate-300">
                  {COMPANY_DETAILS.name}
                </span>
                . All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-blue-400 font-medium italic">
                {COMPANY_DETAILS.tagline}
              </span>
              <span className="text-slate-600">|</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
