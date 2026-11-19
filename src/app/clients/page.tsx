"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Camera,
  Sun,
  Server,
  Network,
  Tv,
} from "lucide-react";
import {
  Container,
  Lightbox,
  PageHero,
  RevealText,
  FadeIn,
  StaggerGroup,
  StaggerItem,
} from "@/components/common";
import {
  CLIENT_INSTITUTIONS,
  OEM_BRAND_PARTNERS,
  CLIENT_PROJECT_PHOTOS,
  PartnerEntity,
  ClientProjectPhoto,
} from "@/data/partners";
import { CERTIFICATES_DATA, type CertificateItem } from "@/data/certificates";
import { COMPANY_DETAILS } from "@/data/company";

type ClientCategory = "all" | "Government & PSU" | "Academic Institution" | "Healthcare & Research";

const categoryIcons: Record<string, React.ReactNode> = {
  "Government & PSU": <Landmark className="w-4 h-4 text-sky-400" />,
  "Academic Institution": <GraduationCap className="w-4 h-4 text-sky-400" />,
  "Healthcare & Research": <Hospital className="w-4 h-4 text-sky-400" />,
};

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [photoCategory, setPhotoCategory] = useState<string>("all");
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

  const photoCategories = [
    { id: "all", label: "All Photographic Records", count: CLIENT_PROJECT_PHOTOS.length },
    {
      id: "solar",
      label: "Solar Clean Energy (NAAC)",
      count: CLIENT_PROJECT_PHOTOS.filter((p) => p.sectorTag === "solar").length,
    },
    {
      id: "datacenter",
      label: "Modular Data Centre (UAS Raichur)",
      count: CLIENT_PROJECT_PHOTOS.filter((p) => p.sectorTag === "datacenter").length,
    },
    {
      id: "campus",
      label: "Campus Fiber Network (SJBIT & Tumkur)",
      count: CLIENT_PROJECT_PHOTOS.filter((p) => p.sectorTag === "campus").length,
    },
    {
      id: "auditorium",
      label: "Auditoriums & AV (Tumkur Univ)",
      count: CLIENT_PROJECT_PHOTOS.filter((p) => p.sectorTag === "auditorium").length,
    },
    {
      id: "healthcare",
      label: "Healthcare Infrastructure (IGICH)",
      count: CLIENT_PROJECT_PHOTOS.filter((p) => p.sectorTag === "healthcare").length,
    },
  ];

  const filteredPhotos = useMemo(() => {
    if (photoCategory === "all") return CLIENT_PROJECT_PHOTOS;
    return CLIENT_PROJECT_PHOTOS.filter((photo) => photo.sectorTag === photoCategory);
  }, [photoCategory]);

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
    <div className="relative bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B1F3A] selection:text-white min-h-screen">
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

      {/* Proof Metrics & Credibility Bar in Official Logo Navy */}
      <section className="bg-[#0B1F3A] text-white py-12 border-b border-[#142B4A] relative overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn mode="view" delay={0.05} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-sky-400">16+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Verified Institutional Clients</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.1} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">100%</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Government &amp; PSU SLA Compliance</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.15} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-white">14+</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Buildings Campus Optical Fiber</p>
            </FadeIn>
            <FadeIn mode="view" delay={0.2} y={10} className="space-y-1 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-3xl sm:text-4xl font-black font-mono text-sky-400">220 kWp</p>
              <p className="text-xs sm:text-sm text-slate-300 font-light">Clean Solar Generation Delivered</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Clients Directory Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-slate-200">
        <Container size="default" className="relative z-10">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <FadeIn as="span" mode="view" delay={0.04} y={6} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Client Directory</span>
              </FadeIn>
              <RevealText
                as="h2"
                by="word"
                mode="view"
                delay={0.08}
                stagger={0.04}
                text="Verified Public Sector & Institutional Clientele"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight"
              />
              <FadeIn as="p" mode="view" delay={0.2} y={10} className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl leading-relaxed">
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
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#0B1F3A] text-white font-bold shadow-md"
                      : "bg-slate-100 text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-white text-slate-700"
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredClients.map((client: PartnerEntity) => (
                <StaggerItem
                  key={client.name}
                  y={16}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-[#0F172A]"
                >
                  <div className="space-y-4">
                    {/* Official Client Photo / Logo Container (White Capsule for Perfect Contrast) */}
                    <div className="relative w-full h-32 rounded-2xl bg-slate-50 border border-slate-200 p-4 flex items-center justify-center overflow-hidden shadow-xs group-hover:scale-[1.02] transition-all">
                      {client.logo ? (
                        <Image
                          src={client.logo}
                          alt={`${client.name} official emblem`}
                          width={240}
                          height={120}
                          className="max-h-20 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                          {categoryIcons[client.type] || <Building2 className="w-6 h-6 text-[#2563EB]" />}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B1F3A] bg-[#0B1F3A]/5 px-2.5 py-0.5 rounded-full border border-[#0B1F3A]/15">
                          {categoryIcons[client.type]}
                          <span>{client.type}</span>
                        </span>
                      </div>

                      <h3 className="text-base font-bold font-heading text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                        {client.name}
                      </h3>

                      <p className="text-xs text-slate-500 font-mono">
                        {client.location}
                      </p>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed pt-1 line-clamp-3">
                        {client.scopeOfWork}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>Turnkey Delivery</span>
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-[#0A1220] rounded-3xl border border-white/10 p-8">
              <Building2 className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white font-heading">No clients found matching &ldquo;{searchQuery}&rdquo;</h3>
              <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting a different category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer"
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
            className="mt-16 bg-[#0A1220] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="inline-block text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                Corporate Portfolio Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Official Client &amp; Partner Roster Sheet
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Archived master client emblem sheet published in official New Link Technologies Bangalore Pvt. Ltd. corporate documentation validating authorized associations across government bodies, state universities, and technical directorates.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Official Documentation (Page 23)
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
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
              <div className="relative w-80 sm:w-96 h-52 rounded-2xl overflow-hidden border border-white/20 bg-black/60 shadow-xl group-hover:border-sky-400 transition-colors">
                <Image
                  src="/clients/client-partners-grid.png"
                  alt="New Link Technologies Official Client and Partner Emblem Sheet"
                  fill
                  sizes="384px"
                  className="object-contain p-2.5 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-xs font-bold font-mono text-slate-900 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-blue-600" />
                    <span>Expand Emblem Sheet</span>
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-center text-slate-400 font-mono mt-2">
                Click to view full resolution archive sheet
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Client On-Site Delivery & Handover Photographic Showcase */}
      <section className="py-16 md:py-24 bg-[#081120] border-t border-b border-white/10 relative overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>Photographic Evidence • Field Deployments</span>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="On-Site Client Installation & Handover Showcase"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.2} y={12} className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Authentic field photographs documenting turnkey project execution, dignitary inaugurations, campus optical fiber handovers, 220 kWp solar array inspections, and institutional facility launches.
            </FadeIn>
          </div>

          {/* Photo Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {photoCategories.map((cat) => {
              const isActive = photoCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setPhotoCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold shadow-lg shadow-blue-600/30"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Photos Grid */}
          <StaggerGroup
            key={photoCategory}
            mode="view"
            stagger={0.05}
            delay={0.06}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPhotos.map((photo: ClientProjectPhoto) => (
              <StaggerItem
                key={photo.id}
                y={18}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A1220] shadow-xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Photo Container */}
                  <div
                    className="relative aspect-16/10 w-full overflow-hidden bg-black/60 cursor-pointer"
                    onClick={() => openLightbox(photo.image, photo.title, `${photo.client} • ${photo.location} — ${photo.caption}`)}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Expand overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-xs font-mono font-bold text-slate-900 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Enlarge Photo</span>
                      </span>
                    </div>
                  </div>

                  {/* Photo Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Category & Location Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-500/30">
                        {photo.sectorTag === "solar" && <Sun className="w-3.5 h-3.5 text-amber-400" />}
                        {photo.sectorTag === "datacenter" && <Server className="w-3.5 h-3.5 text-sky-400" />}
                        {photo.sectorTag === "campus" && <Network className="w-3.5 h-3.5 text-emerald-400" />}
                        {photo.sectorTag === "auditorium" && <Tv className="w-3.5 h-3.5 text-sky-300" />}
                        {photo.sectorTag === "healthcare" && <Hospital className="w-3.5 h-3.5 text-sky-400" />}
                        <span>{photo.category}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                        {photo.location}
                      </span>
                    </div>

                    <div>
                      <p className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                        {photo.client}
                      </p>
                      <h3 className="text-base font-bold font-heading text-white leading-snug group-hover:text-sky-300 transition-colors mt-0.5">
                        {photo.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                      {photo.caption}
                    </p>

                    {/* Highlights Tags */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {photo.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Authentic Site Record</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => openLightbox(photo.image, photo.title, `${photo.client} • ${photo.location} — ${photo.caption}`)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Camera className="w-3 h-3" />
                      <span>Full View</span>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Verified Government Appreciation & Completion Certificates Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <FadeIn as="span" mode="view" delay={0.04} y={8} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Government &amp; Institutional Commendations</span>
            </FadeIn>
            <RevealText
              as="h2"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Verified Completion & Appreciation Certificates"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight"
            />
            <FadeIn as="p" mode="view" delay={0.22} y={14} className="text-base text-slate-300 font-light leading-relaxed">
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
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A1220] shadow-xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Certificate Scan Container */}
                  <div className="relative aspect-3/4 w-full overflow-hidden bg-black/40 border-b border-white/10 p-4">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 shadow-inner bg-white">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Lightbox trigger button */}
                    <button
                      type="button"
                      onClick={() =>
                        openLightbox(cert.image, cert.title, cert.dateOrRef)
                      }
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center m-4 rounded-2xl cursor-pointer"
                      title="Click to view full certificate and zoom"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-xs font-mono font-bold text-slate-900 shadow-lg">
                        <Maximize2 className="w-4 h-4 text-blue-600" />
                        <span>View Original</span>
                      </span>
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      <Award className="w-4 h-4 shrink-0" />
                      <span className="truncate">{cert.category}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-mono text-slate-400">
                      {cert.issuingBody}
                    </p>

                    <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-3">
                  <div className="rounded-xl bg-white/[0.03] p-3 border border-white/10 text-[11px] text-slate-300 font-light">
                    <strong className="text-white font-mono block mb-0.5">Scope Executed:</strong>
                    {cert.workDetails}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span className="truncate">{cert.dateOrRef}</span>
                    <span className="text-emerald-400 font-semibold shrink-0 flex items-center gap-1">
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
      <section className="py-16 md:py-20 bg-[#081120] border-t border-b border-white/10 relative overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
              Enterprise Standards
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-heading text-white">
              Certified OEM Brands Deployed Across Client Facilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              We deploy genuine, certified enterprise equipment partnering with global market leaders in networking, computing, audio-visual, and physical security.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {OEM_BRAND_PARTNERS.slice(0, 12).map((brand) => (
              <div
                key={brand.name}
                className="bg-white/95 p-3 rounded-2xl border border-white/20 shadow-md flex items-center justify-center h-16 group hover:scale-105 transition-all"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} OEM Partner`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action for Enterprise & Government Inquiries in Logo Navy */}
      <section className="py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-t border-slate-200">
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F3A] p-10 sm:p-14 text-center text-white shadow-2xl space-y-6">
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Partner with New Link Technologies Bangalore Pvt. Ltd.
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ready to Deliver Dependable Infrastructure for Your Organization?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Connect directly with our Executive Directors — M.G. Girish and Divya D K — to explore turnkey institutional IT execution, campus optical networking, modular data centres, or government tender participation.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <span>Initiate Project Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/15 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Explore Installations</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[0].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{COMPANY_DETAILS.leadership.directors[0].name}: {COMPANY_DETAILS.leadership.directors[0].phone}</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`tel:${COMPANY_DETAILS.leadership.directors[1].phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
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
