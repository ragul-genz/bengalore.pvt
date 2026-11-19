import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import {
  Container,
  ContactForm,
  PageHero,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
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
    "Hello New Link Technologies Bangalore Pvt. Ltd., I would like to enquire about your enterprise IT and infrastructure services."
  )}`;

  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+12%2F1%2C+11th+%27B%27+Main+Road%2C+36th+Cross%2C+2nd+Block%2C+Rajajinagar%2C+Bangalore+-+560010";

  return (
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
      {/* Contact Hero Header */}
      <PageHero
        eyebrow="Direct Corporate Communication • Rajajinagar, Bangalore"
        title="Contact Our Executive"
        highlight="Engineering Team"
        description="Connect with our corporate office in Bangalore for turnkey IT project proposals, technical site surveys, structured cabling assessments, and ongoing facility maintenance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Main Grid: Form + Corporate Information */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#F8FAFC]">

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <FadeIn mode="view" delay={0.06} y={16} className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Direct Contact Details & Action Cards (5 cols) */}
            <StaggerGroup mode="view" stagger={0.09} delay={0.1} className="lg:col-span-5 space-y-6">
              {/* Official Corporate Office Card */}
              <StaggerItem y={16} className="bg-[#0B1F3A] rounded-3xl border border-[#142B4A] p-6 sm:p-7 shadow-xl space-y-5 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>Bangalore Headquarters</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    ACTIVE
                  </span>
                </div>

                {/* Executive Leadership Spotlight */}
                <div className="space-y-3">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Executive Leadership
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {COMPANY_DETAILS.leadership.directors.map((dir) => (
                      <div
                        key={dir.name}
                        className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center gap-3.5 hover:border-sky-400/40 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15 shadow-md shrink-0 bg-slate-900">
                          <Image
                            src={dir.image}
                            alt={`${dir.name} - ${dir.role}, New Link Technologies Bangalore Pvt. Ltd.`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-white font-heading truncate">
                            {dir.name}
                          </p>
                          <p className="text-[11px] text-sky-400 font-mono truncate">
                            {dir.role} • New Link Technologies
                          </p>
                          <a
                            href={`tel:${dir.phoneRaw}`}
                            className="text-xs text-slate-300 hover:text-white font-mono flex items-center gap-1.5 pt-0.5"
                          >
                            <Phone className="w-3 h-3 text-sky-400" />
                            <span>{dir.phone}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <p className="font-bold text-white font-heading">Registered Office</p>
                      <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line1}</p>
                      <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line2}</p>
                      <p className="text-slate-300">{COMPANY_DETAILS.contact.address.line3}</p>
                      <p className="text-sky-400 font-bold font-mono">
                        {COMPANY_DETAILS.contact.address.city} - {COMPANY_DETAILS.contact.address.postalCode}
                      </p>
                    </div>
                  </div>

                  {/* Telephone with Click-to-Call */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Direct Telephone</p>
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone}`}
                        className="text-sm font-bold font-mono text-white hover:text-sky-400 transition-colors"
                      >
                        {COMPANY_DETAILS.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email with mailto */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Official Tender &amp; Inquiries</p>
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.email}`}
                        className="text-sm font-bold font-mono text-white hover:text-sky-400 transition-colors break-all"
                      >
                        {COMPANY_DETAILS.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Operating Hours</p>
                      <p className="text-xs text-slate-300 font-mono">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Direct WhatsApp Action Card */}
              <StaggerItem y={16} className="bg-[#051C14] text-white rounded-3xl p-6 border border-emerald-500/30 shadow-xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Messaging</span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-white">
                    WhatsApp Enterprise Desk
                  </h4>
                  <p className="text-xs text-emerald-200/80 font-light">
                    Direct communication with Director M.G. Girish.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Connect</span>
                </a>
              </StaggerItem>

              {/* Official Corporate Contact Presentation Card */}
              <StaggerItem y={16} className="bg-[#0B1F3A] rounded-3xl border border-[#142B4A] p-6 shadow-xl space-y-3 text-white">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001:2015 &amp; PSU COMPLIANT CREDENTIALS</span>
                </div>
                <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <Image
                    src="/contact/company-contact-slide.png"
                    alt="New Link Technologies Official Corporate Contact Slide"
                    fill
                    className="object-contain"
                  />
                </div>
              </StaggerItem>

              {/* Directions & Map Card */}
              <StaggerItem y={16} className="bg-[#0B1F3A] rounded-3xl border border-[#142B4A] p-6 shadow-xl space-y-4 text-white">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold font-heading text-white">
                    Rajajinagar Office Location Map
                  </h4>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Responsive Google Maps iframe */}
                <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-inner">
                  <iframe
                    title="New Link Technologies Location Map - Rajajinagar Bangalore"
                    src="https://maps.google.com/maps?q=No.+12%2F1%2C+11th+%27B%27+Main+Road%2C+36th+Cross%2C+2nd+Block%2C+Rajajinagar%2C+Bangalore+-+560010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125"
                  />
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </Container>
      </section>
    </div>
  );
}
