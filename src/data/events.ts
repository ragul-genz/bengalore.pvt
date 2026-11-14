export interface EventItem {
  id: string;
  title: string;
  category: "Project Inauguration" | "Project Handover" | "Technology Summit" | "Corporate Milestone";
  date: string;
  year: string;
  location: string;
  venue: string;
  clientOrPartner: string;
  dignitaries: string[];
  image: string;
  secondaryImage?: string;
  description: string;
  highlights: string[];
  badge: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "uas-raichur-datacenter-inauguration",
    title: "Grand Inauguration of UAS Raichur Modular Data Centre",
    category: "Project Inauguration",
    date: "November 2020",
    year: "2020",
    location: "Raichur, Karnataka",
    venue: "Administrative Block, University of Agricultural Sciences (UAS), Raichur",
    clientOrPartner: "University of Agricultural Sciences (UAS), Raichur / KEONICS",
    dignitaries: [
      "Honorable Vice Chancellor, UAS Raichur",
      "Registrar & Senior Academic Council",
      "KEONICS Senior Managing Directors",
      "Director M.G. Girish, New Link Technologies Bangalore Pvt. Ltd.",
    ],
    image: "/projects/project-uas-raichur-datacenter-inauguration.png",
    secondaryImage: "/projects/project-datacenter-inauguration.png",
    description:
      "Official ribbon-cutting and ceremonial inauguration of the state-of-the-art Modular Data Centre (MDC) facility engineered and commissioned by New Link Technologies Bangalore Pvt. Ltd. The high-availability facility powers centralized campus computing, digital research databases, and student academic services.",
    highlights: [
      "Official ceremonial ribbon cutting attended by university leadership & state officials",
      "Live demonstration of hot-aisle containment, precision climate control, and server clusters",
      "Commended with an official Letter of Appreciation from the Registrar",
    ],
    badge: "Landmark Campus Commissioning",
  },
  {
    id: "tumkur-auditorium-inauguration",
    title: "Tumkur University Multi-Media Auditorium Consecration & Inaugural Event",
    category: "Project Inauguration",
    date: "September 2021",
    year: "2021",
    location: "Tumakuru, Karnataka",
    venue: "Main Convocation Auditorium, Tumkur University",
    clientOrPartner: "Tumkur University",
    dignitaries: [
      "Honorable Vice Chancellor & Syndicate Members",
      "Heads of University Academic Faculties",
      "Engineering Leadership, New Link Technologies Bangalore Pvt. Ltd.",
    ],
    image: "/projects/project-tumkur-auditorium-inauguration.png",
    secondaryImage: "/projects/project-tumkur-auditorium.png",
    description:
      "Grand opening ceremony and inaugural academic assembly inside the newly established, architecturally engineered university auditorium. New Link Technologies executed complete acoustic wall paneling, modular false ceilings, motorized projection systems, and line-array conference audio.",
    highlights: [
      "Inaugural address in the acoustically engineered 800+ seat university auditorium",
      "Live showcase of digital conference audio, motorized screens, and broadcast PTZ cameras",
      "Recognized by university authorities for impeccable acoustic clarity and finish",
    ],
    badge: "Turnkey Acoustic Facility",
  },
  {
    id: "naac-solar-commissioning-ceremony",
    title: "NAAC 220 kWp Clean Solar Rooftop Commissioning & Handover Ceremony",
    category: "Project Handover",
    date: "January 2021",
    year: "2021",
    location: "Bengaluru, Karnataka",
    venue: "NAAC Academic Campus, Nagarbhavi, Bengaluru",
    clientOrPartner: "National Assessment and Accreditation Council (NAAC) / ITI Limited",
    dignitaries: [
      "Senior Leadership & Directors, NAAC Bengaluru",
      "Executive General Managers, ITI Limited (MSP-KTK)",
      "Director M.G. Girish & Executive Team, New Link Technologies Bangalore Pvt. Ltd.",
    ],
    image: "/projects/project-solar-naac-full-slide.png",
    secondaryImage: "/projects/project-solar-naac.png",
    description:
      "Ceremonial grid synchronization and official project handover of the 220 kWp Rooftop Solar Photovoltaic Power Plant at the NAAC campus. Completed well ahead of schedule adhering to stringent safety protocols, the project marked a major milestone in institutional clean energy.",
    highlights: [
      "Formal handover ceremony and grid tie-in synchronization with BESCOM authorities",
      "Awarded official Appreciation Certificate by NAAC and ITI Limited for early delivery",
      "Saves thousands of tonnes in carbon emissions annually with 24/7 web-based telemetry",
    ],
    badge: "Clean Energy Milestone",
  },
  {
    id: "campus-fiber-handover-ceremony",
    title: "14-Building High-Speed Campus Optical Fiber Network Handover",
    category: "Project Handover",
    date: "February 2021",
    year: "2021",
    location: "Raichur, Karnataka",
    venue: "Central Network Operations Centre (NOC), UAS Raichur",
    clientOrPartner: "University of Agricultural Sciences (UAS), Raichur / KEONICS",
    dignitaries: [
      "Director of Research & Dean of Academic Affairs",
      "KEONICS Technical Projects Division",
      "New Link Network Architecture Engineering Squad",
    ],
    image: "/projects/project-campus-fiber-handover.png",
    secondaryImage: "/projects/project-cable-patching.png",
    description:
      "Formal handover and commissioning ceremony of the multi-building optical fiber backbone connecting 14 academic, administrative, and clinical departments. Features redundant 10G optical rings, managed L2/L3 distribution switches, and centralized surveillance operations.",
    highlights: [
      "Official operational handover to the university's technical infrastructure squad",
      "Seamless connectivity across 14 university blocks with 99.98% uptime SLA",
      "Awarded multi-year maintenance extension based on demonstrated performance",
    ],
    badge: "Enterprise Fiber Network",
  },
  {
    id: "annual-oem-technology-partner-conclave",
    title: "Annual Technology Alliances & OEM Partner Conclave",
    category: "Technology Summit",
    date: "Annual Corporate Engagement",
    year: "Ongoing",
    location: "Bengaluru, Karnataka",
    venue: "Executive Technology Center, Bengaluru",
    clientOrPartner: "OEM Technology Alliance Network (Cisco, D-Link, Belden, Bosch, JBL, Molex)",
    dignitaries: [
      "Director M.G. Girish (New Link Technologies)",
      "Director D.K. Divya (New Link Technologies)",
      "Regional OEM Channel Directors & Technical Solutions Architects",
    ],
    image: "/projects/project-command-room-video-wall.png",
    secondaryImage: "/projects/project-structured-cabling.png",
    description:
      "Annual technology strategic summit uniting New Link Technologies leadership with tier-1 enterprise hardware and software manufacturers. Key sessions focus on next-generation Cat6A/Cat8 cabling standards, modular edge data centres, IP video walls, and artificial intelligence-driven network management.",
    highlights: [
      "Direct OEM certification renewal across passive cabling, active switching, and AV ecosystems",
      "Unveiling roadmap for high-density campus Wi-Fi 6/7 and zero-trust security architecture",
      "Strengthened authorized tier-1 procurement channels for public sector clients",
    ],
    badge: "Industry Leadership",
  },
  {
    id: "state-egov-infrastructure-roundtable",
    title: "Karnataka State Digital Infrastructure & e-Governance Round Table",
    category: "Corporate Milestone",
    date: "Corporate Milestone",
    year: "2023",
    location: "Bengaluru, Karnataka",
    venue: "Bengaluru Technology Forum",
    clientOrPartner: "State Departments & Public Sector Undertakings (PSUs)",
    dignitaries: [
      "Public Sector Technology Officers",
      "State Department IT Directors",
      "Board of Directors, New Link Technologies Bangalore Pvt. Ltd.",
    ],
    image: "/projects/project-tumkur-sjbit-composite.png",
    secondaryImage: "/projects/project-modular-datacenter.png",
    description:
      "High-level consultative roundtable addressing scalable public digital infrastructure, tender execution standards, and sustainable technology lifecycle management across state universities and government institutions in Karnataka.",
    highlights: [
      "Showcase of proven public-sector project delivery frameworks and SLA guarantees",
      "Presentation of modular containerized computing pods for regional academic branches",
      "Endorsement of standards-compliant cabling dressing to eliminate downtime",
    ],
    badge: "Public Sector Dialogue",
  },
];
