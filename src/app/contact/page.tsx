import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Container, ContactForm } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Rajajinagar Office, Bangalore",
  description:
    "Connect with New Link Technologies Bangalore Pvt. Ltd. at No. 12/1, 1st Floor, 11th 'B' Main Road, Rajajinagar, Bangalore. Phone: +91 9535314141, Email: girish.mg@newlinktec.com.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Direct communication channels, office location map, and corporate enquiry form.",
    url: "https://www.newlinktec.com/contact",
    images: ["/contact/company-contact-slide.png"],
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/919535314141?text=${encodeURIComponent(
    "Hello New Link Technologies, I would like to enquire about your enterprise IT and infrastructure services."
  )}`;

  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+12%2F1%2C+11th+%27B%27+Main+Road%2C+36th+Cross%2C+2nd+Block%2C+Rajajinagar%2C+Bangalore+-+560010";

  return (
    <div className="bg-brand-lightBg">
      {/* Contact Hero Header */}
      <section className="bg-brand-navy text-white pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Corporate Communication</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>Rajajinagar, Bangalore</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Contact New Link Technologies
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Connect with our corporate office in Bangalore for turnkey IT project proposals,
              technical site surveys, structured cabling assessments, and ongoing facility maintenance.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="py-16 md:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Contact Details & Action Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Corporate Office Card */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Headquarters</span>
                </div>

                {/* Executive Leadership Spotlight */}
                <div className="p-4 rounded-xl border border-brand-border bg-brand-lightBg flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white shadow-xs shrink-0">
                    <Image
                      src="/leadership/director-mg-girish.jpg"
                      alt="M.G. Girish - Director, New Link Technologies Bangalore Pvt. Ltd."
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                      Executive Leadership
                    </p>
                    <p className="text-sm font-bold text-brand-navy font-heading">
                      {COMPANY_DETAILS.leadership.director}
                    </p>
                    <p className="text-[11px] text-brand-secondary">
                      {COMPANY_DETAILS.leadership.role}, New Link Technologies
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2 text-sm text-brand-text">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <p className="font-semibold text-brand-navy">Office Address</p>
                      <p className="text-brand-secondary">{COMPANY_DETAILS.contact.address.line1}</p>
                      <p className="text-brand-secondary">{COMPANY_DETAILS.contact.address.line2}</p>
                      <p className="text-brand-secondary">{COMPANY_DETAILS.contact.address.line3}</p>
                      <p className="text-brand-navy font-bold">
                        {COMPANY_DETAILS.contact.address.city} - {COMPANY_DETAILS.contact.address.postalCode}
                      </p>
                    </div>
                  </div>

                  {/* Telephone with Click-to-Call */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase">Telephone Support</p>
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone}`}
                        className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors"
                      >
                        {COMPANY_DETAILS.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email with mailto */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase">Official Email</p>
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.email}`}
                        className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors break-all"
                      >
                        {COMPANY_DETAILS.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase">Business Hours</p>
                      <p className="text-xs text-brand-secondary font-medium">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Card */}
              <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-800 shadow-md flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Messaging</span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-white">
                    WhatsApp Enquiry
                  </h4>
                  <p className="text-xs text-emerald-200">
                    Connect directly on WhatsApp with our executive team.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-brand-navy text-xs font-bold transition-all shadow-md shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Official Corporate Contact Presentation Card */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Verified Corporate Credentials</span>
                </div>
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-brand-border bg-slate-50">
                  <Image
                    src="/contact/company-contact-slide.png"
                    alt="New Link Technologies Official Corporate Contact Slide"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Directions & Map Card */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold font-heading text-brand-navy">
                    Office Location Map
                  </h4>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Responsive Google Maps iframe */}
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-brand-border bg-slate-100">
                  <iframe
                    title="New Link Technologies Location Map - Rajajinagar Bangalore"
                    src="https://maps.google.com/maps?q=No.+12%2F1%2C+11th+%27B%27+Main+Road%2C+36th+Cross%2C+2nd+Block%2C+Rajajinagar%2C+Bangalore+-+560010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
