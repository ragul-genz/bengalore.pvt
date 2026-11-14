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
  Phone,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";
import {
  Container,
  Button,
  Badge,
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
  ImageReveal,
} from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Leadership",
  description:
    "Learn about New Link Technologies Bangalore Pvt. Ltd., our executive leadership under Director M.G. Girish, and our proven delivery model across IT, hardware, infrastructure, and consulting.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Integrated enterprise technology provider headquartered in Rajajinagar, Bangalore under Director M.G. Girish.",
    url: "https://www.newlinktec.com/about",
    images: ["/leadership/director-mg-girish.jpg"],
  },
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
    <div className="relative bg-transparent">
      {/* Page Hero Banner matching Home Aesthetic */}
      <PageHero
        eyebrow="Connecting Values • Corporate Profile"
        title="About New Link Technologies"
        highlight="Bangalore Pvt. Ltd."
        description="An integrated enterprise technology integrator delivering mission-critical IT systems, computing hardware, business software, digital infrastructure, and strategic consulting across Bangalore and nationwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Company Philosophy & Overview Section */}
      <section className="py-16 md:py-24 bg-white/75 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge">
                Our Corporate Identity
              </FadeIn>
              <RevealText
                as="h2"
                by="word"
                mode="view"
                delay={0.08}
                stagger={0.045}
                text="Engineering Dependable Connections for Enterprise Growth"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
              />

              <FadeIn
                as="p"
                mode="view"
                delay={0.22}
                y={14}
                className="text-base text-brand-secondary leading-relaxed"
              >
                <strong className="text-brand-text font-semibold">
                  New Link Technologies Bangalore Pvt. Ltd.
                </strong>{" "}
                was established with a definitive focus: to serve as a reliable, single-window
                technology partner for organizations seeking world-class digital and physical
                infrastructure.
              </FadeIn>

              <FadeIn
                as="p"
                mode="view"
                delay={0.3}
                y={14}
                className="text-base text-brand-secondary leading-relaxed"
              >
                Operating under the corporate motto{" "}
                <em className="text-brand-blue font-semibold not-italic">
                  &ldquo;Connecting Values,&rdquo;
                </em>{" "}
                our operational model unites technical precision, regulatory compliance, and
                uncompromising quality standards. From complex multi-building academic campuses
                to high-availability modular data centres, our team designs and executes
                turnkey technology solutions that endure.
              </FadeIn>

              {/* Executive Credentials Callout */}
              <FadeIn
                mode="view"
                delay={0.36}
                y={14}
                className="p-5 sm:p-6 rounded-3xl border border-brand-border bg-slate-50/80 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase font-bold tracking-wider text-brand-blue flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    <span>Executive Leadership &amp; Governance</span>
                  </p>
                  <span className="text-xs text-slate-500 font-medium">Headquartered in Bangalore</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-brand-navy font-semibold">
                  <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Director-Led Quality Oversight</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>24/7 Enterprise SLAs &amp; Field Support</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs border-t border-slate-200/60">
                  <span className="text-slate-600 font-medium">
                    Executive Board of Directors: <strong>M.G. Girish</strong> &amp; <strong>Divya D K</strong>
                  </span>
                  <a
                    href="#executive-leadership"
                    className="inline-flex items-center gap-1 font-bold text-brand-blue hover:text-blue-700 transition-colors"
                  >
                    <span>View Leadership Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Image: Structured Cabling Showcase */}
            <FadeIn mode="view" delay={0.18} y={16} className="lg:col-span-5">
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
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The 5 Business Categories Section */}
      <section className="py-16 md:py-24 bg-brand-lightBg/70 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Our Scope of Operations
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Five Integrated Business Verticals"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              New Link Technologies Bangalore Pvt. Ltd. delivers end-to-end capabilities spanning IT, Hardware,
              Software, Infrastructure, and Consulting.
            </FadeIn>
          </div>

          <StaggerGroup
            mode="view"
            stagger={0.07}
            delay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {COMPANY_DETAILS.categories.map((cat) => (
              <StaggerItem
                key={cat.title}
                y={16}
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
              </StaggerItem>
            ))}

            {/* Sixth highlight card: End-to-End Integration */}
            <StaggerItem y={16} className="corporate-card bg-brand-navy text-white flex flex-col justify-between border-brand-darkNavy">
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
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Verified Capabilities & Photographic Showcase */}
      <section className="py-16 md:py-24 bg-white/70 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Verified Experience
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Demonstrated Technical Capabilities"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Real projects delivered across data centres, optical networking, structured
              cabling, and digital boardrooms.
            </FadeIn>
          </div>

          <StaggerGroup
            mode="view"
            stagger={0.08}
            delay={0.06}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1: Modular Data Centre */}
            <StaggerItem
              y={18}
              className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <ImageReveal className="w-full h-full relative" duration={0.6}>
                  <Image
                    src="/projects/project-modular-datacenter.png"
                    alt="Modular Data Centre Execution by New Link Technologies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </ImageReveal>
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
            </StaggerItem>

            {/* Project 2: High-Density Structured Cabling */}
            <StaggerItem
              y={18}
              className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <ImageReveal className="w-full h-full relative" duration={0.6}>
                  <Image
                    src="/projects/project-structured-cabling.png"
                    alt="Professional Structured Cabling by New Link Technologies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </ImageReveal>
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
            </StaggerItem>

            {/* Project 3: Boardroom & Video Conferencing */}
            <StaggerItem
              y={18}
              className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-xs hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <ImageReveal className="w-full h-full relative" duration={0.6}>
                  <Image
                    src="/services/boardroom-solutions.png"
                    alt="Boardroom and Video Conferencing Solutions by New Link Technologies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </ImageReveal>
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
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Executive Leadership Section */}
      <section id="executive-leadership" className="py-16 md:py-24 bg-white/80 backdrop-blur-xs border-b border-brand-border scroll-mt-24">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Executive Leadership
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Executive Board of Directors"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Official leadership profiles of the directors guiding New Link Technologies Bangalore Pvt. Ltd. with technical precision, operational excellence, and enduring commitment.
            </FadeIn>
          </div>

          <div className="space-y-12">
            {/* Director 1: M.G. Girish */}
            <FadeIn
              mode="view"
              delay={0.12}
              y={20}
              className="max-w-4xl mx-auto rounded-3xl border border-brand-border bg-slate-50/70 p-6 sm:p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-64 h-84 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-900 aspect-3/4">
                    <Image
                      src="/leadership/director-mg-girish.jpg"
                      alt="M.G. Girish - Director, New Link Technologies"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3.5 left-3 right-3 text-white text-center">
                      <p className="font-heading font-bold text-lg">M.G. Girish</p>
                      <p className="text-xs text-blue-200 font-medium">Director, New Link Technologies</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                    <span className="w-5 h-0.5 bg-brand-blue" />
                    <span>LEADERSHIP COMMITMENT</span>
                  </div>
                  <RevealText
                    as="h3"
                    by="word"
                    mode="view"
                    delay={0.08}
                    stagger={0.04}
                    text="Driven by Precision, Value, and Enduring Integrity"
                    className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy leading-snug"
                  />
                  <FadeIn as="p" mode="view" delay={0.2} y={12} className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                    &ldquo;At New Link Technologies Bangalore Pvt. Ltd., our core mission is simple yet uncompromising: to provide enterprises, government bodies, and institutions with technology infrastructure that performs reliably 24/7/365. When you partner with us, you deal directly with dedicated engineers and an accountable leadership team.&rdquo;
                  </FadeIn>
                  <FadeIn as="p" mode="view" delay={0.24} y={12} className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                    M.G. Girish brings more than 15 years of industry leadership and hands-on engineering expertise in enterprise IT systems, modular data centre integration, campus optical fiber networks, and public-sector EPC execution.
                  </FadeIn>
                  <FadeIn mode="view" delay={0.28} y={10} className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-brand-navy font-semibold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      Director-Led Quality Oversight
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      Connecting Values Across Karnataka
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-blue" />
                      15+ Years Enterprise IT &amp; EPC Leadership
                    </span>
                  </FadeIn>
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
                    <a
                      href="tel:+919535314141"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-blue transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-blue" />
                      <span>+91 95353 14141</span>
                    </a>
                    <a
                      href="mailto:girish.mg@newlinktec.com"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-blue transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-blue" />
                      <span>girish.mg@newlinktec.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Director 2: Divya D K */}
            <FadeIn
              mode="view"
              delay={0.16}
              y={20}
              className="max-w-4xl mx-auto rounded-3xl border border-brand-border bg-slate-50/70 p-6 sm:p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-64 h-84 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-900 aspect-3/4">
                    <Image
                      src="/leadership/director-divya-dk.jpg"
                      alt="Divya D K - Director, New Link Technologies"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3.5 left-3 right-3 text-white text-center">
                      <p className="font-heading font-bold text-lg">Divya D K</p>
                      <p className="text-xs text-blue-200 font-medium">Director, New Link Technologies</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                    <span className="w-5 h-0.5 bg-brand-blue" />
                    <span>LEADERSHIP COMMITMENT</span>
                  </div>
                  <RevealText
                    as="h3"
                    by="word"
                    mode="view"
                    delay={0.08}
                    stagger={0.04}
                    text="Strategic Operations, Administration & Organizational Excellence"
                    className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy leading-snug"
                  />
                  <FadeIn as="p" mode="view" delay={0.2} y={12} className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                    D.K. Divya brings more than 9 years of experience in administration, human resource support, organizational operations and business coordination.
                  </FadeIn>
                  <FadeIn as="p" mode="view" delay={0.24} y={12} className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                    As a key member of the company&apos;s leadership team, she has contributed to the development of the organization&apos;s business framework and operational processes.
                  </FadeIn>
                  <FadeIn mode="view" delay={0.28} y={10} className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-brand-navy font-semibold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      9+ Years Operations &amp; HR Experience
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      Business Framework &amp; Process Governance
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-blue" />
                      Director-Led Quality Oversight
                    </span>
                  </FadeIn>
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
                    <a
                      href="tel:+919611854426"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-blue transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-blue" />
                      <span>+91 96118 54426</span>
                    </a>
                    <a
                      href="mailto:divya.dk@newlinktec.com"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-navy hover:text-brand-blue transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-blue" />
                      <span>divya.dk@newlinktec.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Verified Clients & Public Sector Track Record */}
      <section className="py-16 md:py-24 bg-brand-lightBg/70 backdrop-blur-xs border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Trusted Partnerships
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Verified Client & Partner Network"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Proud to have executed prestigious infrastructure and technology projects with
              prominent public sector entities, universities, and government bodies.
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {COMPANY_DETAILS.verifiedClientsAndPartners.map((client) => {
              const logoMap: Record<string, string> = {
                "Rural Development & Panchayat Raj (RDPR)": "/partners/clients/rdpr.png",
                "ITI Limited (Govt. of India Undertaking)": "/partners/clients/iti-limited.png",
                "Broadcast Engineering Consultants India Limited (BECIL)": "/partners/clients/becil.png",
                "KEONICS (Karnataka State Electronics Development Corporation Limited)": "/partners/clients/keonics.png",
                "University of Agricultural Sciences (UAS), Raichur": "/partners/clients/uas-raichur.png",
                "Krishna Bhagya Jala Nigam Ltd (KBJNL)": "/partners/clients/kbjnl.png",
                "National Health Mission (NHM)": "/partners/clients/nhm.png",
                "Indira Gandhi Institute of Child Health (IGICH)": "/partners/clients/igich.png",
                "Science Gallery Bengaluru": "/partners/clients/science-gallery.png",
                "Department of Cooperation, Govt. of Karnataka (Sahakara Sindhu)": "/partners/clients/sahakara-sindhu.png",
                "Tumkur University": "/partners/clients/tumkur-university.png",
                "Bangalore Development Authority (BDA)": "/partners/clients/bda.png",
                "Koppal Institute of Medical Sciences (KIMS Koppal)": "/partners/clients/kims-koppal.png",
                "Centre for e-Governance (CeG), Govt. of Karnataka": "/partners/clients/ceg.png",
                "SJB Institute of Technology (SJBIT)": "/partners/clients/sjbit.png",
                "National Assessment and Accreditation Council (NAAC)": "/partners/clients/naac.png",
              };
              const logo = logoMap[client];

              return (
                <div
                  key={client}
                  className="bg-white p-4 rounded-2xl border border-brand-border shadow-2xs flex flex-col justify-between hover:border-brand-blue/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative w-full h-16 rounded-xl bg-slate-50/90 border border-slate-100 p-2 flex items-center justify-center overflow-hidden mb-3 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                    {logo ? (
                      <Image
                        src={logo}
                        alt={`${client} official emblem`}
                        width={150}
                        height={55}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                        <Building2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-brand-navy leading-snug group-hover:text-brand-blue transition-colors">
                    {client}
                  </p>
                </div>
              );
            })}
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
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Ready to Upgrade Your"
              highlight="Enterprise Infrastructure?"
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
              Connect directly with our engineering and consulting team in Rajajinagar,
              Bangalore for technical proposals and enterprise quotes.
            </FadeIn>

            <FadeIn
              mode="view"
              delay={0.34}
              y={12}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
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
            </FadeIn>

            <FadeIn
              mode="view"
              delay={0.42}
              y={10}
              className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Rajajinagar, Bangalore - 560010
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {COMPANY_DETAILS.contact.email}
              </span>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
