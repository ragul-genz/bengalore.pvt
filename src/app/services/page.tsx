import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Button, Badge, ServiceIcon } from "@/components/common";
import { SERVICES_DATA, type ServiceItem } from "@/data/services";

export const metadata: Metadata = {
  title: "Enterprise Technology Services | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Explore our complete enterprise technology portfolio: Audio, Auditorium, Boardroom, Video Conferencing, CCTV Surveillance, Networking & Cabling, Data Centre, and Solar & Fire Safety Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-lightBg">
      {/* Services Header Banner */}
      <section className="bg-brand-navy text-white pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Full Lifecycle Engineering</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>Bangalore, India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Complete Technology Solutions
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From mission-critical modular data centres and campus fiber networks to
              smart conference facilities and institutional solar energy systems, we
              deliver turnkey engineering tailored for reliability and performance.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service: ServiceItem) => (
              <div
                key={service.slug}
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
              </div>
            ))}
          </div>

          {/* Standards & Compliance Assurance Card */}
          <div className="mt-16 p-8 rounded-2xl bg-white border border-brand-border shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </Container>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-16 bg-brand-navy text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="primary" size="md">
              Connecting Values
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to Discuss Your Project Requirements?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Contact New Link Technologies Bangalore Pvt. Ltd. for technical proposals,
              BOM formulation, and site survey appointments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button variant="secondary" size="lg" href="/contact#quote" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request a Quote
              </Button>
              <Button variant="white" size="lg" href="/contact">
                Contact Office
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

