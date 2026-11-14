"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Hospital,
  Landmark,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Award,
  Search,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";
import {
  Container,
  Button,
  Lightbox,
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import { CLIENT_INSTITUTIONS, OEM_BRAND_PARTNERS, PartnerEntity } from "@/data/partners";
import { CERTIFICATES_DATA, type CertificateItem } from "@/data/certificates";
import { COMPANY_DETAILS } from "@/data/company";

type ClientCategory = "all" | "Government & PSU" | "Academic Institution" | "Healthcare & Research";

const categoryIcons: Record<string, React.ReactNode> = {
  "Government & PSU": <Landmark className="w-4 h-4 text-brand-blue" />,
  "Academic Institution": <GraduationCap className="w-4 h-4 text-brand-blue" />,
  "Healthcare & Research": <Hospital className="w-4 h-4 text-brand-blue" />,
};

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    image: "",
    title: "",
    caption: "",
  });

  const openLightbox = (image: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  const categories: { id: ClientCategory; label: string; count: number }[] = [
    { id: "all", label: "All Clients & Institutions", count: CLIENT_INSTITUTIONS.length },
    {
      id: "Government & PSU",
      label: "Government & PSUs",
      count: CLIENT_INSTITUTIONS.filter((c) => c.type === "Government & PSU").length,
    },
    {
      id: "Academic Institution",
      label: "Universities & Academic",
      count: CLIENT_INSTITUTIONS.filter((c) => c.type === "Academic Institution").length,
    },
    {
      id: "Healthcare & Research",
      label: "Healthcare & Research",
      count: CLIENT_INSTITUTIONS.filter((c) => c.type === "Healthcare & Research").length,
    },
  ];

  const filteredClients = useMemo(() => {
    return CLIENT_INSTITUTIONS.filter((client) => {
      const matchesCategory =
        activeCategory === "all" ? true : client.type === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        client.name.toLowerCase().includes(query) ||
        client.location.toLowerCase().includes(query) ||
        client.scopeOfWork.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative bg-transparent">
      {/* Page Hero Banner */}
      <PageHero
        eyebrow="Trusted Partnerships • Public Sector & Institutional Reach"
        title="Our Esteemed Clients &"
        highlight="Institutional Network"
        description="New Link Technologies Bangalore Pvt. Ltd. is privileged to serve leading public sector undertakings, premier state universities, government bodies, and healthcare institutions with turnkey IT infrastructure, modular data centres, campus networking, and renewable energy solutions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clients" },
        ]}
      />

      {/* Proof Metrics & Credibility Bar */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn mode="view" delay={0.05} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">16+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Verified Institutional Clients</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.1} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Government &amp; PSU SLA Compliance</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.15} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">14+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Buildings Campus Optical Fiber</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.2} y={10} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400">220 kWp</p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Clean Solar Generation Delivered</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Clients Directory Section */}
      <section className="py-16 md:py-24 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <FadeIn as="span" mode="view" delay={0.04} y={6} className="eyebrow-badge mb-3">
                Client Directory
              </FadeIn>
              <RevealText
                as="h2"
                by="word"
                mode="view"
                delay={0.08}
                stagger={0.04}
                text="Verified Public Sector & Institutional Clientele"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
              />
              <FadeIn as="p" mode="view" delay={0.2} y={10} className="mt-2 text-sm sm:text-base text-brand-secondary max-w-2xl">
                Browse through our long-standing relationships with government entities, universities, and healthcare organizations across Karnataka.
              </FadeIn>
            </div>

            {/* Live Search Input */}
            <FadeIn mode="view" delay={0.15} y={10} className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search client, sector or scope..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue shadow-2xs transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/40 hover:text-brand-navy"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Client Grid */}
          {filteredClients.length > 0 ? (
            <StaggerGroup
              key={activeCategory + searchQuery}
              mode="view"
              stagger={0.04}
              delay={0.06}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {filteredClients.map((client: PartnerEntity) => (
                <StaggerItem
                  key={client.name}
                  y={16}
                  className="bg-white p-5 rounded-2xl border border-brand-border shadow-2xs hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Official Client Photo / Logo Container */}
                    <div className="relative w-full h-28 rounded-xl bg-slate-50/90 border border-slate-100 p-3 flex items-center justify-center overflow-hidden group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                      {client.logo ? (
                        <Image
                          src={client.logo}
                          alt={`${client.name} official emblem`}
                          width={240}
                          height={90}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                          {categoryIcons[client.type] || <Building2 className="w-6 h-6 text-brand-blue" />}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-100/80">
                          {categoryIcons[client.type]}
                          <span>{client.type}</span>
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy leading-snug group-hover:text-brand-blue transition-colors">
                        {client.name}
                      </h3>

                      <p className="text-[11px] text-slate-500 font-medium">
                        {client.location}
                      </p>

                      <p className="text-xs text-brand-secondary leading-relaxed pt-1 line-clamp-3">
                        {client.scopeOfWork}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-brand-navy font-semibold">
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>Turnkey Delivery</span>
                    </span>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-brand-border p-8">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brand-navy font-heading">No clients found matching &ldquo;{searchQuery}&rdquo;</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting a different category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Authentic Client Emblem Sheet Showcase */}
          <FadeIn
            mode="view"
            delay={0.12}
            y={18}
            className="mt-14 bg-white rounded-3xl border border-brand-border p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="inline-block text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                Corporate Portfolio Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
                Official Client &amp; Partner Roster Sheet
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Archived master client emblem sheet published in official New Link Technologies Bangalore Pvt. Ltd. corporate documentation validating authorized associations across government bodies, state universities, and technical directorates.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-brand-navy">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  Official Documentation (Page 23)
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  State &amp; Central Undertakings
                </span>
              </div>
            </div>

            <div
              className="relative group cursor-pointer shrink-0"
              onClick={() =>
                openLightbox(
                  "/clients/client-partners-grid.png",
                  "Official Client & Partner Roster Sheet",
                  "Page 23 from New Link Technologies Bangalore Pvt. Ltd. Corporate Profile"
                )
              }
            >
              <div className="relative w-80 sm:w-96 h-52 rounded-2xl overflow-hidden border-2 border-brand-border bg-slate-50 shadow-md group-hover:border-brand-blue transition-colors">
                <Image
                  src="/clients/client-partners-grid.png"
                  alt="New Link Technologies Official Client and Partner Emblem Sheet"
                  fill
                  sizes="384px"
                  className="object-contain p-2.5 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-xs font-bold text-brand-navy shadow-lg">
                    <Maximize2 className="w-4 h-4 text-brand-blue" />
                    <span>Click to Expand Emblem Sheet</span>
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-center text-slate-500 font-medium mt-2">
                Click to view full resolution archive sheet
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Verified Government Appreciation & Completion Certificates Section */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="eyebrow-badge mb-3">
              Government &amp; Institutional Commendations
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Verified Completion & Appreciation Certificates"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="mt-3 text-base text-brand-secondary">
              Authentic project completion and performance certificates awarded to New Link Technologies Bangalore Pvt. Ltd. by public sector enterprises, state universities, and autonomous government bodies.
            </FadeIn>
          </div>

          {/* Certificate Gallery Grid */}
          <StaggerGroup
            mode="view"
            stagger={0.08}
            delay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CERTIFICATES_DATA.map((cert: CertificateItem) => (
              <StaggerItem
                key={cert.id}
                y={18}
                className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white shadow-xs hover:border-brand-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Certificate Scan Container */}
                  <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-50 border-b border-brand-border p-4">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-200 shadow-inner bg-white">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>

                    {/* Lightbox trigger button */}
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(cert.image, cert.title, cert.dateOrRef)
                      }
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center m-4 rounded-lg"
                      title="Click to view full certificate and zoom"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 text-xs font-bold text-brand-navy shadow-lg">
                        <Maximize2 className="w-4 h-4 text-brand-blue" />
                        <span>View Original Certificate</span>
                      </span>
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider">
                      <Award className="w-4 h-4 shrink-0" />
                      <span className="truncate">{cert.category}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-500">
                      {cert.issuingBody}
                    </p>

                    <p className="text-xs text-brand-secondary leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100 text-[11px] text-slate-600">
                    <strong className="text-brand-navy block mb-0.5 font-semibold">Scope Executed:</strong>
                    {cert.workDetails}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-brand-border/60">
                    <span className="font-mono truncate">{cert.dateOrRef}</span>
                    <span className="text-brand-blue font-semibold shrink-0 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Strategic OEM Technology Partners Alliance */}
      <section className="py-16 md:py-20 bg-brand-lightBg border-b border-brand-border">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow-badge mb-3">Enterprise Standards</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
              Certified OEM Brands Deployed Across Client Facilities
            </h3>
            <p className="text-xs sm:text-sm text-brand-secondary mt-2">
              We deploy genuine, certified enterprise equipment partnering with global market leaders in networking, computing, audio-visual, and physical security.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {OEM_BRAND_PARTNERS.slice(0, 12).map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-3 rounded-xl border border-brand-border/80 shadow-2xs flex items-center justify-center h-16 group hover:border-brand-blue/40 transition-colors"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} OEM Partner`}
                    fill
                    className="object-contain p-1 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action for Enterprise & Government Inquiries */}
      <section className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-400/30">
              Partner with New Link Technologies Bangalore Pvt. Ltd.
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to Deliver Dependable Infrastructure for Your Organization?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect directly with our Executive Directors — M.G. Girish and D.K. Divya — to explore turnkey institutional IT execution, campus optical networking, modular data centres, or government tender participation.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg"
              >
                Initiate Project Discussion
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/projects"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Explore Successful Installations
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_DETAILS.leadership.directors[0].name}: {COMPANY_DETAILS.leadership.directors[0].phone}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[1].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_DETAILS.leadership.directors[1].name}: {COMPANY_DETAILS.leadership.directors[1].phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        imageSrc={lightbox.image}
        imageAlt={lightbox.title}
        title={lightbox.title}
        caption={lightbox.caption}
      />
    </div>
  );
}
