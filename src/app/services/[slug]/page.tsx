import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  ShieldCheck,
  Download,
  Sparkles,
} from "lucide-react";
import {
  Container,
  ServiceIcon,
  PageHero,
  RevealText,
  FadeIn,
} from "@/components/common";
import { SERVICES_DATA, getServiceBySlug } from "@/data/services";
import { COMPANY_DETAILS } from "@/data/company";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | New Link Technologies",
    };
  }

  return {
    title: `${service.title} Solutions & Systems`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | New Link Technologies Bangalore`,
      description: service.shortDescription,
      url: `https://www.newlinktec.com/services/${slug}`,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related other services
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  return (
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white min-h-screen">
      {/* Service Hero Header */}
      <PageHero
        eyebrow={`${service.tag} • Enterprise Delivery`}
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/contact#quote"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <span>Request Technical Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${COMPANY_DETAILS.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0F172A] border border-slate-200 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#2563EB]" />
            <span>Call: {COMPANY_DETAILS.contact.phoneDisplay}</span>
          </a>
        </div>
      </PageHero>

      {/* Main Content Layout */}
      <section className="py-14 md:py-20 relative">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Primary Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Service Image */}
              <FadeIn
                mode="view"
                delay={0.05}
                y={16}
                className="relative aspect-16/10 w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} - New Link Technologies`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </FadeIn>

              {/* Comprehensive Description */}
              <FadeIn
                mode="view"
                delay={0.08}
                y={16}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-mono uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Engineering Architecture</span>
                </div>
                <RevealText
                  as="h2"
                  by="word"
                  mode="view"
                  delay={0.06}
                  stagger={0.04}
                  text="Engineering Overview & Delivery Scope"
                  className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]"
                />
                <FadeIn
                  as="p"
                  mode="view"
                  delay={0.18}
                  y={12}
                  className="text-base text-slate-600 font-normal leading-relaxed"
                >
                  {service.fullDescription}
                </FadeIn>
                <FadeIn
                  as="p"
                  mode="view"
                  delay={0.26}
                  y={12}
                  className="text-sm text-slate-500 font-normal leading-relaxed pt-3 border-t border-slate-100"
                >
                  Every solution deployed by New Link Technologies Bangalore Pvt. Ltd.
                  follows structured installation methodologies, strict adherence to site
                  safety protocols, and comprehensive post-commissioning handover procedures under Director M.G. Girish.
                </FadeIn>
              </FadeIn>

              {/* Authorized Technology Brands / OEMs */}
              {service.brands && service.brands.length > 0 && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                      Authorized Technology Brands &amp; OEMs
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal">
                    Installed and integrated using genuine equipment from certified enterprise manufacturers:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {service.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] text-xs sm:text-sm font-mono font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution Architecture / Features Diagram */}
              {service.diagramImage && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                        Solution Architecture &amp; Features
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        Official technical integration topology from New Link Technologies Bangalore Pvt. Ltd. profile
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-4">
                    <Image
                      src={service.diagramImage}
                      alt={`${service.title} Architecture Diagram`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Key Features & Architecture Specifications */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    Key Solution Capabilities
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#2563EB]/40 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Deliverables */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    Scope of Deliverables
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-normal"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Institutional Reference Highlight */}
              {service.referenceHighlights && (
                <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1F3A] text-white flex items-start gap-4 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono uppercase font-bold text-sky-300 tracking-wider">
                      Verified Portfolio Deployment
                    </p>
                    <p className="text-base font-bold text-white font-heading">
                      {service.referenceHighlights}
                    </p>
                    <p className="text-xs text-slate-300 font-normal">
                      Validated in official company records and customer appreciation certificates.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (4 cols) */}
            <FadeIn mode="view" delay={0.12} y={16} className="lg:col-span-4 space-y-6 sticky top-24">
              {/* Request Quote Card */}
              <div className="bg-white text-[#0F172A] rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-[11px] font-mono uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3 h-3 text-[#2563EB]" />
                  <span>Turnkey Project Inquiry</span>
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    Request a Technical Proposal
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    Need turnkey supply, cabling, or equipment maintenance for {service.title}?
                    Contact our Rajajinagar office.
                  </p>
                </div>

                <Link
                  href="/contact#quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
                >
                  <span>Get Proposal &amp; Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600 font-mono">
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone}`}
                    className="flex items-center gap-2.5 hover:text-[#2563EB] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{COMPANY_DETAILS.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.email}`}
                    className="flex items-center gap-2.5 hover:text-[#2563EB] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{COMPANY_DETAILS.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-2.5 text-slate-500 font-sans text-xs">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rajajinagar, Bangalore - 560010</span>
                  </div>
                </div>
              </div>

              {/* Download Company Profile PDF Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[#0F172A]">
                      Official Company Profile
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">
                      Comprehensive portfolio document
                    </p>
                  </div>
                </div>

                <a
                  href="/documents/New-Link-Company-Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-bold text-[#0F172A] bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>Download Profile PDF (10 MB)</span>
                </a>
              </div>

              {/* Navigation List to Other Services */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Other Specialized Services
                </h4>

                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#2563EB] transition-colors group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <ServiceIcon
                          name={other.iconName}
                          className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] shrink-0"
                        />
                        <span className="truncate">{other.title}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
