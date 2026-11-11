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
} from "lucide-react";
import {
  Container,
  Button,
  Badge,
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
    <div className="bg-white">
      {/* Service Hero Header matching Home Aesthetic */}
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200"
          >
            <span>Request Technical Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${COMPANY_DETAILS.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call: {COMPANY_DETAILS.contact.phoneDisplay}</span>
          </a>
        </div>
      </PageHero>

      {/* Main Content Layout */}
      <section className="py-14 md:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Primary Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Service Image */}
              <FadeIn
                mode="view"
                delay={0.05}
                y={16}
                className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-brand-border bg-white shadow-md"
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
                className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-xs"
              >
                <RevealText
                  as="h2"
                  by="word"
                  mode="view"
                  delay={0.06}
                  stagger={0.04}
                  text="Engineering Overview & Scope"
                  className="text-xl sm:text-2xl font-bold font-heading text-brand-navy"
                />
                <FadeIn
                  as="p"
                  mode="view"
                  delay={0.18}
                  y={12}
                  className="text-base text-brand-secondary leading-relaxed"
                >
                  {service.fullDescription}
                </FadeIn>
                <FadeIn
                  as="p"
                  mode="view"
                  delay={0.26}
                  y={12}
                  className="text-sm text-brand-secondary leading-relaxed"
                >
                  Every solution deployed by New Link Technologies Bangalore Pvt. Ltd.
                  follows structured installation methodologies, strict adherence to site
                  safety protocols, and comprehensive post-commissioning handover procedures.
                </FadeIn>
              </FadeIn>

              {/* Authorized Technology Brands / OEMs */}
              {service.brands && service.brands.length > 0 && (
                <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-brand-navy">
                      Authorized Technology Brands &amp; OEMs
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-secondary">
                    Installed and integrated using genuine equipment from certified enterprise manufacturers:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {service.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:border-brand-blue/60 hover:bg-blue-50/50 transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution Architecture / Features Diagram */}
              {service.diagramImage && (
                <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-brand-navy">
                        Solution Architecture &amp; Features
                      </h3>
                      <p className="text-xs text-brand-secondary">
                        Official technical integration topology from New Link Technologies profile
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
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
              <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy">
                    Key Solution Capabilities
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-brand-border/80 bg-brand-lightBg/50 hover:bg-brand-lightBg transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-text font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Deliverables */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy">
                    Scope of Deliverables
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-brand-secondary"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed text-brand-text">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Institutional Reference Highlight */}
              {service.referenceHighlights && (
                <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/50 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold text-brand-blue tracking-wider">
                      Verified Portfolio Project
                    </p>
                    <p className="text-sm font-semibold text-brand-navy font-heading">
                      {service.referenceHighlights}
                    </p>
                    <p className="text-xs text-brand-secondary">
                      Validated in official company records and customer appreciation certificates.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (4 cols) */}
            <FadeIn mode="view" delay={0.12} y={16} className="lg:col-span-4 space-y-6 sticky top-24">
              {/* Request Quote Card */}
              <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
                <Badge variant="primary" size="sm">
                  Connecting Values
                </Badge>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white">
                    Request a Technical Proposal
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Need turnkey supply, cabling, or equipment maintenance for {service.title}?
                    Contact our Rajajinagar office.
                  </p>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact#quote"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Proposal & Quote
                </Button>

                <div className="pt-4 border-t border-brand-darkNavy space-y-3 text-xs text-slate-300">
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{COMPANY_DETAILS.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.email}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{COMPANY_DETAILS.contact.email}</span>
                  </a>
                  <div className="flex items-start gap-2.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Rajajinagar, Bangalore - 560010</span>
                  </div>
                </div>
              </div>

              {/* Download Company Profile PDF Card */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-brand-navy">
                      Official Company Profile
                    </h4>
                    <p className="text-xs text-brand-secondary">
                      Comprehensive portfolio document
                    </p>
                  </div>
                </div>

                <a
                  href="/documents/New-Link-Company-Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-brand-navy bg-brand-lightBg hover:bg-slate-200 transition-colors border border-brand-border"
                >
                  <FileText className="w-4 h-4 text-brand-blue" />
                  <span>Download Profile PDF (10 MB)</span>
                </a>
              </div>

              {/* Navigation List to Other Services */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs space-y-4">
                <h4 className="text-sm font-bold font-heading text-brand-navy uppercase tracking-wider">
                  Other Specialized Services
                </h4>

                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-brand-text hover:bg-brand-lightBg hover:text-brand-blue transition-colors group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <ServiceIcon
                          name={other.iconName}
                          className="w-3.5 h-3.5 text-brand-secondary group-hover:text-brand-blue shrink-0"
                        />
                        <span className="truncate">{other.title}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
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

