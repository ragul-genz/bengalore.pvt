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
import { Container, Button, Badge, ServiceIcon } from "@/components/common";
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
    title: `${service.title} | New Link Technologies Bangalore Pvt. Ltd.`,
    description: service.shortDescription,
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
    <div className="bg-brand-lightBg">
      {/* Service Hero Header */}
      <section className="bg-brand-navy text-white pt-12 pb-16 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <Container size="default" className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </li>
              <li className="text-blue-300 font-semibold truncate max-w-xs sm:max-w-none">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30">
              <ServiceIcon name={service.iconName} className="w-3.5 h-3.5 text-blue-400" />
              <span>{service.tag}</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>Enterprise Delivery</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="md"
                href="/contact#quote"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Technical Quote
              </Button>
              <Button
                variant="white"
                size="md"
                href={`tel:${COMPANY_DETAILS.contact.phone}`}
              >
                Call: {COMPANY_DETAILS.contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 md:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Primary Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Service Image */}
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border border-brand-border bg-white shadow-md">
                <Image
                  src={service.image}
                  alt={`${service.title} - New Link Technologies`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Comprehensive Description */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                  Engineering Overview & Scope
                </h2>
                <p className="text-base text-brand-secondary leading-relaxed">
                  {service.fullDescription}
                </p>
                <p className="text-sm text-brand-secondary leading-relaxed">
                  Every solution deployed by New Link Technologies Bangalore Pvt. Ltd.
                  follows structured installation methodologies, strict adherence to site
                  safety protocols, and comprehensive post-commissioning handover procedures.
                </p>
              </div>

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
            <div className="lg:col-span-4 space-y-6 sticky top-24">
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
