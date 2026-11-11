import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import {
  Container,
  Button,
  Badge,
  ServiceIcon,
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";

export const metadata: Metadata = {
  title: "Enterprise Technology Services & Infrastructure Solutions",
  description:
    "Explore our complete enterprise portfolio: Modular Data Centres, Campus Optical Fiber, Structured Cabling, Digital Boardrooms, Auditorium AV, CCTV Surveillance, and Solar Energy.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Enterprise Technology Services | New Link Technologies",
    description:
      "Comprehensive infrastructure engineering and consulting services by New Link Technologies Bangalore Pvt. Ltd.",
    url: "https://www.newlinktec.com/services",
    images: ["/services/data-centre.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Services Hero Banner matching Home Aesthetic */}
      <PageHero
        eyebrow="Full Lifecycle Engineering • Bangalore, India"
        title="Complete Technology"
        highlight="Solutions"
        description="From mission-critical modular data centres and campus fiber networks to smart conference facilities and institutional solar energy systems, we deliver turnkey engineering tailored for reliability and performance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <Container size="default">
          <StaggerGroup
            mode="view"
            stagger={0.06}
            delay={0.05}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES_DATA.map((service: ServiceItem) => (
              <StaggerItem
                key={service.slug}
                y={18}
                className="group flex flex-col justify-between bg-white rounded-xl border border-brand-border overflow-hidden shadow-xs hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-xs border border-white/40 flex items-center justify-center text-brand-navy shadow-md">
                      <ServiceIcon name={service.iconName} className="w-5 h-5 text-brand-blue" />
                    </div>

                    <div className="absolute bottom-2.5 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-brand-navy/90 text-white backdrop-blur-xs">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h2 className="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">
                      <Link href={`/services/${service.slug}`} className="focus-visible:outline-none focus-visible:underline">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-secondary line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Feature snippets */}
                    <div className="pt-2 space-y-1.5 border-t border-brand-border/60">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-brand-text">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brand Badges */}
                    {service.brands && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {service.brands.slice(0, 4).map((b) => (
                          <span key={b} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200">
                            {b}
                          </span>
                        ))}
                        {service.brands.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium border border-slate-200">
                            +{service.brands.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-darkNavy transition-colors group/link pt-3 border-t border-brand-border/60 w-full justify-between"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Standards & Compliance Assurance Card */}
          <FadeIn
            mode="view"
            delay={0.08}
            y={16}
            className="mt-16 p-8 rounded-2xl bg-white border border-brand-border shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-navy">
                Government & Institutional Rigor
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Proven contract delivery for Karnataka State Electronics Development Corporation Limited (KEONICS), ITI Limited, and State Universities.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-navy">
                Standards-Compliant Execution
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed">
                ISO-aligned structured cabling, proper vertical/horizontal cable organizers, certified terminations, and comprehensive documentation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-navy">
                Turnkey Accountability
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed">
                From initial site survey and architectural design to equipment installation, commissioning, and long-term SLA maintenance contracts.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-16 bg-brand-navy text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <FadeIn mode="view" delay={0.04} y={8} duration={0.42}>
              <Badge variant="primary" size="md">
                Connecting Values
              </Badge>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Ready to Discuss Your"
              highlight="Project Requirements?"
              highlightClassName="text-blue-400"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={14}
              className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Contact New Link Technologies Bangalore Pvt. Ltd. for technical proposals,
              BOM formulation, and site survey appointments.
            </FadeIn>
            <FadeIn
              mode="view"
              delay={0.32}
              y={12}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Button variant="secondary" size="lg" href="/contact#quote" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request a Quote
              </Button>
              <Button variant="white" size="lg" href="/contact">
                Contact Office
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}

