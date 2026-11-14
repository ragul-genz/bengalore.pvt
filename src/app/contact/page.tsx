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
    <div className="bg-white">
      {/* Contact Hero Header matching Home Aesthetic */}
      <PageHero
        eyebrow="Direct Corporate Communication • Rajajinagar, Bangalore"
        title="Contact New Link"
        highlight="Technologies"
        description="Connect with our corporate office in Bangalore for turnkey IT project proposals, technical site surveys, structured cabling assessments, and ongoing facility maintenance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Main Grid: Form + Contact Cards */}
      <section className="py-16 md:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <FadeIn mode="view" delay={0.06} y={16} className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Direct Contact Details & Action Cards (5 cols) */}
            <StaggerGroup mode="view" stagger={0.09} delay={0.1} className="lg:col-span-5 space-y-6">
              {/* Official Corporate Office Card */}
              <StaggerItem y={16} className="bg-white rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Headquarters</span>
                </div>

                {/* Executive Leadership Spotlight */}
                <div className="space-y-2.5">
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                    Executive Leadership
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {COMPANY_DETAILS.leadership.directors.map((dir) => (
                      <div
                        key={dir.name}
                        className="p-3 rounded-xl border border-brand-border bg-brand-lightBg flex items-center gap-3"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white shadow-xs shrink-0 bg-slate-200">
                          <Image
                            src={dir.image}
                            alt={`${dir.name} - ${dir.role}, New Link Technologies Bangalore Pvt. Ltd.`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-brand-navy font-heading truncate">
                            {dir.name}
                          </p>
                          <p className="text-[10px] text-blue-700 font-semibold truncate">
                            Director, New Link Technologies Bangalore Pvt. Ltd.
                          </p>
                          <a
                            href={`tel:${dir.phoneRaw}`}
                            className="text-[10px] text-slate-500 hover:text-blue-600 block truncate"
                          >
                            {dir.phone}
                          </a>
                        </div>
                      </div>
                    ))}
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
              </StaggerItem>

              {/* Direct WhatsApp Action Card */}
              <StaggerItem y={16} className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-800 shadow-md flex items-center justify-between gap-4">
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
              </StaggerItem>

              {/* Official Corporate Contact Presentation Card */}
              <StaggerItem y={16} className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-3">
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
              </StaggerItem>

              {/* Directions & Map Card */}
              <StaggerItem y={16} className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-4">
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
              </StaggerItem>
            </StaggerGroup>
          </div>
        </Container>
      </section>
    </div>
  );
}
