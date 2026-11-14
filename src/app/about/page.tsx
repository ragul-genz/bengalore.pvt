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
    <div className="bg-white">
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
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
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

              {/* Verified Leadership */}
              <FadeIn
                mode="view"
                delay={0.38}
                y={14}
                className="p-4 rounded-2xl border border-brand-border bg-brand-lightBg space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-brand-blue flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Executive Board of Directors</span>
                  </p>
                  <span className="text-[10px] text-slate-500 font-medium">New Link Technologies</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {COMPANY_DETAILS.leadership.directors.map((director) => (
                    <div
                      key={director.name}
                      className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                        <Image
                          src={director.image}
                          alt={`${director.name} - ${director.role}, ${COMPANY_DETAILS.name}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-brand-navy font-heading truncate">
                          {director.name}
                        </p>
                        <p className="text-[11px] text-blue-600 font-semibold">
                          {director.role}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate">
                          {director.email}
                        </p>
                      </div>
                    </div>
                  ))}
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
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
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
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
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

      {/* Executive Leadership Section */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Leadership Commitment
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Executive Leadership"
              highlight="Board of Directors"
              highlightClassName="text-blue-600"
              className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary leading-relaxed">
              Guided by dedicated executive governance, hands-on operational leadership, and technical precision across every enterprise deployment at New Link Technologies Bangalore Pvt. Ltd.
            </FadeIn>
          </div>

          {/* 2 Director Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {/* Director 1: M.G. Girish */}
            <FadeIn
              mode="view"
              delay={0.1}
              y={18}
              className="bg-white rounded-3xl border border-brand-border shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-md shrink-0 bg-slate-100">
                  <Image
                    src="/leadership/director-mg-girish.jpg"
                    alt="M.G. Girish - Director, New Link Technologies Bangalore Pvt. Ltd."
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="space-y-3 text-center sm:text-left min-w-0 flex-1">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 mb-1.5">
                      Director
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                      M.G. Girish
                    </h3>
                    <p className="text-xs text-blue-600 font-medium">
                      Director, New Link Technologies Bangalore Pvt. Ltd.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Spearheads strategic execution, OEM technology partnerships, turnkey IT infrastructure delivery, and large-scale public sector project governance.
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                    <a
                      href="tel:+919535314141"
                      className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>+91 95353 14141</span>
                    </a>
                    <a
                      href="mailto:girish.mg@newlinktec.com"
                      className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium break-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>girish.mg@newlinktec.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Director 2: Divya D K */}
            <FadeIn
              mode="view"
              delay={0.18}
              y={18}
              className="bg-white rounded-3xl border border-brand-border shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-md shrink-0 bg-slate-100">
                  <Image
                    src="/leadership/director-divya-dk.jpg"
                    alt="Divya D K - Director, New Link Technologies Bangalore Pvt. Ltd."
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="space-y-3 text-center sm:text-left min-w-0 flex-1">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 mb-1.5">
                      Director
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                      Divya D K
                    </h3>
                    <p className="text-xs text-blue-600 font-medium">
                      Director, New Link Technologies Bangalore Pvt. Ltd.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Oversees corporate management, institutional client relations, organizational operations, financial administration, and service quality governance.
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                    <a
                      href="tel:+919611854426"
                      className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>+91 96118 54426</span>
                    </a>
                    <a
                      href="mailto:divya.dk@newlinktec.com"
                      className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium break-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>divya.dk@newlinktec.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Joint Leadership Commitment Banner */}
          <FadeIn
            mode="view"
            delay={0.24}
            y={14}
            className="max-w-5xl mx-auto rounded-2xl border border-brand-border bg-slate-50/80 p-6 sm:p-8 text-center"
          >
            <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;At New Link Technologies Bangalore Pvt. Ltd., our core mission is simple yet uncompromising: to provide enterprises, government bodies, and institutions with technology infrastructure that performs reliably 24/7/365. When you partner with us, you deal directly with dedicated engineers and an accountable leadership team.&rdquo;
            </p>
            <div className="pt-4 mt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-navy font-semibold">
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
                Direct Executive Accountability
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Verified Clients & Public Sector Track Record */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
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
                "ITI Limited (Govt. of India Undertaking)": "/partners/clients/iti-limited.png",
                "KEONICS (Karnataka State Electronics Development Corporation Limited)": "/partners/clients/keonics.png",
                "National Assessment and Accreditation Council (NAAC)": "/partners/clients/naac.png",
                "University of Agricultural Sciences (UAS), Raichur": "/partners/clients/uas-raichur.png",
                "Tumkur University": "/partners/clients/tumkur-university.png",
                "SJB Institute of Technology": "/partners/clients/sjbit.png",
                "Department of Cooperation, Govt. of Karnataka (Sahakara Sindhu)": "/partners/clients/sahakara-sindhu.png",
                "Bangalore Development Authority (BDA)": "/partners/clients/bda.png",
                "Centre for e-Governance (CeG), Govt. of Karnataka": "/partners/clients/ceg.png",
                "National Health Mission": "/partners/clients/nhm.png",
                "Broadcast Engineering Consultants India Limited (BECIL)": "/partners/clients/becil.png",
                "Indira Gandhi Institute of Child Health": "/partners/clients/igich.png",
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
