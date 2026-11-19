import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  Container,
  ServiceIcon,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  SectionReveal,
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
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ICONIC OVERLAPPING "OUR SERVICES" LAYOUT */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Philosophy & Services Purpose */}
            <div className="lg:col-span-7 space-y-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-snug">
                Engineering today is the backbone of mission-critical institutional operations.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
                <p>
                  At New Link Technologies, we deliver specialized turnkey solutions: modular data centres, campus optical fiber backbones, structured cabling, audio-visual automation, and clean solar energy. Our multidisciplinary engineering ensures critical facilities achieve maximum uptime, peak energy efficiency, and uncompromised regulatory compliance.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Headquartered in Rajajinagar, Bangalore under Director M.G. Girish, our engineers oversee every phase — initial site feasibility, architecture, tier-1 OEM procurement, certified termination, and long-term SLA maintenance across Karnataka and nationwide.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>8 SPECIALIZED DISCIPLINES</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>TURNKEY EPC ACCOUNTABILITY</span>
                </div>
              </div>
            </div>

            {/* Right: Vertical Pillar in Official Logo Navy with Giant Overlapping "Our Services" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
              <div className="relative w-full max-w-[300px] sm:max-w-sm md:w-96 h-[240px] sm:h-[400px] md:h-[520px] rounded-3xl bg-[#0B1F3A] border border-[#142B4A] p-6 sm:p-8 shadow-2xl shadow-[#0B1F3A]/25 flex items-center justify-center overflow-hidden group select-none">
                <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] font-mono tracking-widest text-sky-200 uppercase font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  8 DISCIPLINES
                </span>

                <div className="relative z-10 text-left space-y-0.5 sm:space-y-1">
                  <span className="block text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter text-white drop-shadow-md leading-[0.85]">
                    Our
                  </span>
                  <span className="block text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter text-sky-300 drop-shadow-md leading-[0.85]">
                    Services
                  </span>
                  <p className="pt-2 sm:pt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/80 font-bold">
                    CONNECTING VALUES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 2. FOUR HORIZONTAL VALUE CARDS */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#0E274A] border-b border-[#142B4A] select-none text-white">
        <Container size="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                Site Feasibility
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">Detailed Technical Surveys</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-white">
                Turnkey EPC
              </h3>
              <p className="text-xs text-sky-300 font-mono mt-1">Single-Source Delivery</p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight text-[#0F172A]">
                Certified Testing
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">Fluke &amp; OTDR Verified</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 text-sky-300 flex flex-col justify-center items-center text-center shadow-xl hover:bg-white/15 transition-all duration-300 min-h-[140px]">
              <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-center">
                24/7 SLA Support
              </h3>
              <p className="text-xs text-white/70 font-mono mt-1">Comprehensive Lifecycle</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================== */}
      {/* 3. SERVICES GRID SECTION */}
      {/* ======================================================== */}
      <SectionReveal className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <FadeIn as="p" mode="view" delay={0.04} y={6} className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB]">
              Specialized Infrastructure Disciplines
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Our Specialized Service Capabilities"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              End-to-end design, deployment, testing, and lifecycle maintenance delivered across Karnataka and nationwide.
            </FadeIn>
          </div>

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
                className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 text-[#0F172A]"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#0B1F3A] border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <ServiceIcon name={service.iconName} className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute bottom-2.5 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-[#0B1F3A]/90 text-white border border-white/20 backdrop-blur-md">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      <Link href={`/services/${service.slug}`} className="focus-visible:outline-none focus-visible:underline">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Feature snippets */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Brand Badges */}
                    {service.brands && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {service.brands.slice(0, 4).map((b) => (
                          <span key={b} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 font-mono border border-slate-200">
                            {b}
                          </span>
                        ))}
                        {service.brands.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-50 text-[#2563EB] font-mono border border-blue-200">
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2563EB] hover:text-[#0B1F3A] transition-colors group/link pt-3 border-t border-slate-100 w-full justify-between"
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
            className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0B1F3A] border border-[#142B4A] shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">
                Government &amp; Institutional Rigor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Proven contract delivery for Karnataka State Electronics Development Corporation Limited (KEONICS), ITI Limited, and State Universities.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <CheckCircle2 className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">
                Standards-Compliant Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                ISO-aligned structured cabling, proper vertical/horizontal cable organizers, certified terminations, and comprehensive documentation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Award className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">
                Turnkey Accountability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                From initial site survey and architectural design to equipment installation, commissioning, and long-term SLA maintenance contracts.
              </p>
            </div>
          </FadeIn>
        </Container>
      </SectionReveal>

      {/* ======================================================== */}
      {/* 4. BOTTOM CONSULTATION CTA */}
      {/* ======================================================== */}
      <SectionReveal className="py-20 bg-[#F8FAFC] text-[#0F172A] border-t border-slate-200">
        <Container size="default">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-10 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <FadeIn mode="view" delay={0.04} y={8} duration={0.42}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-mono uppercase tracking-wider">
                Connecting Values
              </span>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Ready to Discuss Your"
              highlight="Turnkey Infrastructure?"
              highlightClassName="text-sky-400"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={14}
              className="text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto"
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
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
              >
                <span>Contact Office</span>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </SectionReveal>
    </div>
  );
}
