import type { Metadata } from "next";
import Image from "next/image";
import {
  Server,
  Layers,
  Network,
  Cpu,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Building2,
  ShieldCheck,
  Mail,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";
import { Container, Button, Badge } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Learn about New Link Technologies Bangalore Pvt. Ltd. - Integrated IT, Hardware, Software, Infrastructure, and Consulting solutions headquartered in Bangalore, India.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  IT: <Network className="w-6 h-6 text-brand-blue" />,
  Hardware: <Cpu className="w-6 h-6 text-brand-blue" />,
  Software: <Layers className="w-6 h-6 text-brand-blue" />,
  Infrastructure: <Server className="w-6 h-6 text-brand-blue" />,
  Consulting: <FileCheck2 className="w-6 h-6 text-brand-blue" />,
};

export default function AboutPage() {
  return (
    <div className="bg-brand-lightBg">
      {/* Page Header / Hero Banner */}
      <section className="bg-brand-navy text-white pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        {/* Subtle grid and ambient lighting */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-blue/20 text-blue-300 border border-brand-blue/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Connecting Values</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>Corporate Profile</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              About New Link Technologies Bangalore Pvt. Ltd.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              An integrated enterprise technology integrator delivering mission-critical
              IT systems, computing hardware, business software, digital infrastructure,
              and strategic consulting across Bangalore and nationwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Philosophy & Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow-badge">Our Corporate Identity</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Engineering Dependable Connections for Enterprise Growth
              </h2>

              <p className="text-base text-brand-secondary leading-relaxed">
                <strong className="text-brand-text font-semibold">
                  New Link Technologies Bangalore Pvt. Ltd.
                </strong>{" "}
                was established with a definitive focus: to serve as a reliable, single-window
                technology partner for organizations seeking world-class digital and physical
                infrastructure.
              </p>

              <p className="text-base text-brand-secondary leading-relaxed">
                Operating under the corporate motto{" "}
                <em className="text-brand-blue font-semibold not-italic">
                  &ldquo;Connecting Values,&rdquo;
                </em>{" "}
                our operational model unites technical precision, regulatory compliance, and
                uncompromising quality standards. From complex multi-building academic campuses
                to high-availability modular data centres, our team designs and executes
                turnkey technology solutions that endure.
              </p>

              {/* Verified Leadership */}
              <div className="p-4 rounded-xl border border-brand-border bg-brand-lightBg flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-brand-secondary">
                    Company Leadership
                  </p>
                  <p className="text-base font-bold text-brand-navy font-heading">
                    {COMPANY_DETAILS.leadership.director}
                  </p>
                  <p className="text-xs text-brand-blue font-medium">
                    {COMPANY_DETAILS.leadership.role}, {COMPANY_DETAILS.shortName}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-navy shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
            </div>

            {/* Right Image: Structured Cabling Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-lightBg shadow-lg aspect-4/3 sm:aspect-16/10">
                <Image
                  src="/projects/project-cable-patching.png"
                  alt="New Link Technologies Engineering Team Network Patching"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-sm">
                    Standards-Compliant Execution
                  </p>
                  <p className="text-slate-300 text-xs">
                    Certified field engineering and structured patch management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The 5 Business Categories Section */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow-badge mb-3">Our Scope of Operations</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
              Five Integrated Business Verticals
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              New Link Technologies delivers end-to-end capabilities spanning IT, Hardware,
              Software, Infrastructure, and Consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DETAILS.categories.map((cat) => (
              <div
                key={cat.title}
                className="corporate-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {categoryIcons[cat.title]}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                      {cat.tag}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-brand-navy mt-1">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-brand-border/60 flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Enterprise SLA Supported</span>
                </div>
              </div>
            ))}

            {/* Sixth highlight card: End-to-End Integration */}
            <div className="corporate-card bg-brand-navy text-white flex flex-col justify-between border-brand-darkNavy">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-blue-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Full Lifecycle
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">
                    Integrated Solutions
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Single-point accountability combining physical structured cabling, modular
                  data centre hardware, network switching, and audio-visual room control.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-blue-300 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Seamless Turnkey Delivery</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Capabilities & Photographic Showcase */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow-badge mb-3">Verified Experience</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
              Demonstrated Technical Capabilities
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              Real projects delivered across data centres, optical networking, structured
              cabling, and digital boardrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Modular Data Centre */}
            <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs group">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/projects/project-modular-datacenter.png"
                  alt="Modular Data Centre Execution by New Link Technologies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <Badge variant="primary" size="sm">
                  Data Centre
                </Badge>
                <h4 className="text-lg font-bold font-heading text-brand-navy">
                  Modular Data Centre Deployment
                </h4>
                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  Turnkey data centre setup including precision rack management, cooling,
                  power distribution, and operational handover.
                </p>
              </div>
            </div>

            {/* Project 2: High-Density Structured Cabling */}
            <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs group">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/projects/project-structured-cabling.png"
                  alt="Professional Structured Cabling by New Link Technologies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <Badge variant="primary" size="sm">
                  Structured Cabling
                </Badge>
                <h4 className="text-lg font-bold font-heading text-brand-navy">
                  Enterprise Cable Dressing
                </h4>
                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  Clean, certified patch cord routing, vertical/horizontal cable organizers,
                  and labelled network terminations.
                </p>
              </div>
            </div>

            {/* Project 3: Boardroom & Video Conferencing */}
            <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs group">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/services/boardroom-solutions.png"
                  alt="Boardroom and Video Conferencing Solutions by New Link Technologies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <Badge variant="primary" size="sm">
                  Audio Visual
                </Badge>
                <h4 className="text-lg font-bold font-heading text-brand-navy">
                  Smart Boardrooms & Auditoriums
                </h4>
                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  Acoustic wall paneling, interactive displays, digital conference audio,
                  and integrated video conferencing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Clients & Public Sector Track Record */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow-badge mb-3">Trusted Partnerships</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
              Verified Client & Partner Network
            </h2>
            <p className="mt-3 text-base text-brand-secondary">
              Proud to have executed prestigious infrastructure and technology projects with
              prominent public sector entities, universities, and government bodies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {COMPANY_DETAILS.verifiedClientsAndPartners.map((client) => (
              <div
                key={client}
                className="bg-white p-4 rounded-xl border border-brand-border shadow-2xs flex items-center gap-3 hover:border-brand-blue/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-brand-text leading-snug">
                  {client}
                </p>
              </div>
            ))}
          </div>

          {/* Official Appreciation Quotes directly from certificates */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-brand-border bg-white shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                <Award className="w-4 h-4 text-brand-blue" />
                <span>KEONICS (Govt. of Karnataka Enterprise)</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-secondary italic leading-relaxed">
                &ldquo;This is to certify that M/s New Link Technologies (P) Ltd have
                successfully implemented and completed three years maintenance contract of Local
                Area Networking, Wi-Fi, CCTV surveillance and Data centre at University of
                Agricultural Sciences, Raichur campus.&rdquo;
              </p>
              <p className="text-xs font-semibold text-brand-text">
                — Certificate of Appreciation, KEONICS
              </p>
            </div>

            <div className="p-6 rounded-xl border border-brand-border bg-white shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                <Award className="w-4 h-4 text-brand-blue" />
                <span>NAAC (Autonomous Institution of UGC)</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-secondary italic leading-relaxed">
                &ldquo;M/s New Link Technologies Bangalore Pvt. Ltd., Bangalore has
                successfully completed the entire scope of work adhering to all safety
                protocols... Their sincerity, professionalism, and dedication to the project
                are highly commendable.&rdquo;
              </p>
              <p className="text-xs font-semibold text-brand-text">
                — Project Appreciation Certificate, NAAC / ITI Limited
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA & Direct Contact Banner */}
      <section className="py-16 md:py-20 bg-brand-navy text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to Upgrade Your Enterprise Infrastructure?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect directly with our engineering and consulting team in Rajajinagar,
              Bangalore for technical proposals and enterprise quotes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold shadow-lg shadow-blue-600/20"
              >
                Contact Our Team
              </Button>
              <Button
                variant="white"
                size="lg"
                href={`tel:${COMPANY_DETAILS.contact.phone}`}
                className="font-semibold"
              >
                Call: {COMPANY_DETAILS.contact.phoneDisplay}
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Rajajinagar, Bangalore - 560010
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {COMPANY_DETAILS.contact.email}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
