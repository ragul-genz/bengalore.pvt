export interface PartnerEntity {
  name: string;
  type: "Government & PSU" | "Academic Institution" | "Public Sector Undertaking" | "Healthcare & Research";
  location: string;
  scopeOfWork: string;
  logo?: string;
}

export const TECHNOLOGY_PARTNERS: PartnerEntity[] = [
  {
    name: "ITI Limited",
    type: "Public Sector Undertaking",
    location: "Govt. of India Undertaking, Bengaluru",
    scopeOfWork: "Strategic partner for turnkey institutional solar energy and infrastructure execution.",
    logo: "/partners/clients/iti-limited.png",
  },
  {
    name: "KEONICS",
    type: "Government & PSU",
    location: "Govt. of Karnataka Enterprise",
    scopeOfWork: "Collaborative partner for state-level IT infrastructure, smart campus, and data centre deployments.",
    logo: "/partners/clients/keonics.png",
  },
  {
    name: "BECIL",
    type: "Public Sector Undertaking",
    location: "Broadcast Engineering Consultants India Ltd. (Govt. of India)",
    scopeOfWork: "Technology systems, audio-visual broadcasting, and communications integration.",
    logo: "/partners/clients/becil.png",
  },
  {
    name: "Centre for e-Governance (CeG)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Public sector IT enablement and electronic governance infrastructure support.",
    logo: "/partners/clients/ceg.png",
  },
];

export const CLIENT_INSTITUTIONS: PartnerEntity[] = [
  {
    name: "ITI Limited",
    type: "Government & PSU",
    location: "Govt. of India Undertaking, Bengaluru",
    scopeOfWork: "Strategic public sector partner for turnkey institutional solar energy (220 kWp NAAC project) and IT infrastructure execution.",
    logo: "/partners/clients/iti-limited.png",
  },
  {
    name: "KEONICS",
    type: "Government & PSU",
    location: "Govt. of Karnataka Enterprise, Bengaluru",
    scopeOfWork: "Collaborative partner for state-level IT infrastructure, smart campus deployments, and university modular data centres.",
    logo: "/partners/clients/keonics.png",
  },
  {
    name: "National Assessment & Accreditation Council (NAAC)",
    type: "Government & PSU",
    location: "Autonomous Institution of UGC, Bengaluru",
    scopeOfWork: "Turnkey 220 kWp Rooftop Solar Power Plant execution, energy efficiency systems, and comprehensive ongoing O&M contract.",
    logo: "/partners/clients/naac.png",
  },
  {
    name: "University of Agricultural Sciences (UAS), Raichur",
    type: "Academic Institution",
    location: "Raichur, Karnataka",
    scopeOfWork: "Complete 14-building campus optical fiber backbone, modular data centre, core network switching, high-density Wi-Fi, and IP CCTV surveillance.",
    logo: "/partners/clients/uas-raichur.png",
  },
  {
    name: "Tumkur University",
    type: "Academic Institution",
    location: "Tumakuru, Karnataka",
    scopeOfWork: "Turnkey university auditorium establishment, architectural acoustic wall paneling, modular false ceiling, and digital conference AV systems.",
    logo: "/partners/clients/tumkur-university.png",
  },
  {
    name: "SJB Institute of Technology (SJBIT)",
    type: "Academic Institution",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Multi-block campus fiber networking, enterprise switching infrastructure, and specialized high-performance computer laboratories.",
    logo: "/partners/clients/sjbit.png",
  },
  {
    name: "Centre for e-Governance (CeG)",
    type: "Government & PSU",
    location: "Government of Karnataka, Bengaluru",
    scopeOfWork: "State-wide public sector IT enablement, electronic governance systems support, and digital infrastructure implementation.",
    logo: "/partners/clients/ceg.png",
  },
  {
    name: "Broadcast Engineering Consultants India Ltd. (BECIL)",
    type: "Government & PSU",
    location: "Govt. of India Enterprise, New Delhi / Bengaluru",
    scopeOfWork: "Turnkey technology systems integration, broadcast-grade audio-visual systems, and institutional communications.",
    logo: "/partners/clients/becil.png",
  },
  {
    name: "Rural Development & Panchayat Raj (RDPR)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Departmental enterprise IT systems, institutional network connectivity, and administrative infrastructure solutions.",
    logo: "/partners/clients/rdpr.png",
  },
  {
    name: "Department of Cooperation (Sahakara Sindhu)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "High-level administrative conference infrastructure, boardrooms, and centralized departmental IT systems integration.",
    logo: "/partners/clients/sahakara-sindhu.png",
  },
  {
    name: "Bangalore Development Authority (BDA)",
    type: "Government & PSU",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Campus network infrastructure, corporate office technology modernization, and active network cabling.",
    logo: "/partners/clients/bda.png",
  },
  {
    name: "Krishna Bhagya Jala Nigam Ltd. (KBJNL)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Enterprise IT infrastructure, mission-critical communications, and institutional connectivity deployments.",
    logo: "/partners/clients/kbjnl.png",
  },
  {
    name: "National Health Mission (NHM)",
    type: "Healthcare & Research",
    location: "Karnataka Division",
    scopeOfWork: "Statewide healthcare digital connectivity, IP surveillance monitoring integration, and secure departmental communication.",
    logo: "/partners/clients/nhm.png",
  },
  {
    name: "Indira Gandhi Institute of Child Health (IGICH)",
    type: "Healthcare & Research",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Specialized hospital campus structured network cabling, IP surveillance infrastructure, and digital communications.",
    logo: "/partners/clients/igich.png",
  },
  {
    name: "Koppal Institute of Medical Science (KIMS)",
    type: "Academic Institution",
    location: "Koppal, Karnataka",
    scopeOfWork: "Medical college campus optical fiber networking, lecture hall audiovisual systems, and digital conference facilities.",
    logo: "/partners/clients/kims-koppal.png",
  },
  {
    name: "Science Gallery Bengaluru",
    type: "Healthcare & Research",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Interactive multimedia AV systems, exhibition digital infrastructure, and high-density campus Wi-Fi networking.",
    logo: "/partners/clients/science-gallery.png",
  },
];

export interface OEMBrandPartner {
  name: string;
  category: string;
  subtitle?: string;
  logo: string;
  tag: "network" | "av" | "security" | "computing";
}

export const OEM_BRAND_PARTNERS: OEMBrandPartner[] = [
  // 1. Networking & Optical Fiber Infrastructure
  {
    name: "Cisco",
    category: "Networking & Video Collaboration",
    logo: "/partners/brands/cisco.png",
    tag: "network",
  },
  {
    name: "D-Link",
    category: "Enterprise Switching & Routing",
    subtitle: "Building Networks for People",
    logo: "/partners/brands/dlink.png",
    tag: "network",
  },
  {
    name: "Belden",
    category: "Industrial & Structured Cabling",
    subtitle: "Sending All The Right Signals",
    logo: "/partners/brands/belden.png",
    tag: "network",
  },
  {
    name: "Molex",
    category: "Structured Cabling & Connectivity",
    subtitle: "A World of Innovation",
    logo: "/partners/brands/molex.png",
    tag: "network",
  },
  {
    name: "3M",
    category: "High-Performance Cabling Systems",
    logo: "/partners/brands/3m.png",
    tag: "network",
  },
  {
    name: "CommScope",
    category: "Ruckus Wireless & Optical Infrastructure",
    subtitle: "Ruckus Wireless",
    logo: "/partners/brands/commscope.png",
    tag: "network",
  },
  {
    name: "Juniper Networks",
    category: "Core Routing & AI Enterprise Switching",
    logo: "/partners/brands/juniper.png",
    tag: "network",
  },
  {
    name: "Legrand",
    category: "Structured Cable Management & Racks",
    logo: "/partners/brands/legrand.png",
    tag: "network",
  },

  // 2. Audio-Visual, Acoustics & Conferencing
  {
    name: "Bose",
    category: "Pro Audio & Premium Acoustics",
    logo: "/partners/brands/bose.png",
    tag: "av",
  },
  {
    name: "Yamaha",
    category: "Pro Audio & Digital Mixing Consoles",
    subtitle: "Make Waves",
    logo: "/partners/brands/yamaha.png",
    tag: "av",
  },
  {
    name: "JBL",
    category: "Commercial & Auditorium Sound Systems",
    logo: "/partners/brands/jbl.png",
    tag: "av",
  },
  {
    name: "Sennheiser",
    category: "Wireless Microphone Systems",
    logo: "/partners/brands/sennheiser.png",
    tag: "av",
  },
  {
    name: "Harman",
    category: "Professional AV Integration",
    subtitle: "A Samsung Company",
    logo: "/partners/brands/harman.png",
    tag: "av",
  },
  {
    name: "Polycom",
    category: "Enterprise Video Conferencing",
    logo: "/partners/brands/polycom.png",
    tag: "av",
  },
  {
    name: "Sony",
    category: "HD Video & Security Displays",
    logo: "/partners/brands/sony.png",
    tag: "av",
  },
  {
    name: "Ahuja",
    category: "Public Address Systems",
    subtitle: "80 Years of Reliability",
    logo: "/partners/brands/ahuja.png",
    tag: "av",
  },
  {
    name: "Heinrich",
    category: "Commercial Audio & PA Systems",
    logo: "/partners/brands/heinrich.png",
    tag: "av",
  },

  // 3. Security, Surveillance & Life Safety
  {
    name: "Bosch",
    category: "Security & Public Address Systems",
    logo: "/partners/brands/bosch.png",
    tag: "security",
  },
  {
    name: "Honeywell",
    category: "Life Safety & Building Surveillance",
    logo: "/partners/brands/honeywell.png",
    tag: "security",
  },
  {
    name: "Axis Communications",
    category: "Network IP Cameras & Analytics",
    logo: "/partners/brands/axis.png",
    tag: "security",
  },
  {
    name: "Hikvision",
    category: "AI Video Surveillance Solutions",
    logo: "/partners/brands/hikvision.png",
    tag: "security",
  },
  {
    name: "Agni Protection",
    category: "Fire Alarm Panels & Safety Systems",
    logo: "/partners/brands/agni.png",
    tag: "security",
  },
  {
    name: "Panasonic",
    category: "Commercial Displays & Security",
    logo: "/partners/brands/panasonic.png",
    tag: "security",
  },

  // 4. Enterprise Computing & Cybersecurity
  {
    name: "HP",
    category: "Enterprise Workstations & Computing",
    logo: "/partners/brands/hp.png",
    tag: "computing",
  },
  {
    name: "Dell",
    category: "Enterprise Servers & Storage Systems",
    logo: "/partners/brands/dell.png",
    tag: "computing",
  },
  {
    name: "Lenovo",
    category: "Workstations & Commercial Desktops",
    logo: "/partners/brands/lenovo.png",
    tag: "computing",
  },
  {
    name: "Fortinet",
    category: "Cybersecurity & Next-Gen Firewalls",
    logo: "/partners/brands/fortinet.png",
    tag: "computing",
  },
  {
    name: "Samsung",
    category: "Commercial Displays & Video Walls",
    logo: "/partners/brands/samsung.png",
    tag: "computing",
  },
];

export interface ClientProjectPhoto {
  id: string;
  title: string;
  client: string;
  category: "Solar Clean Energy" | "Campus Networking" | "Auditorium & AV" | "Modular Data Centre" | "Healthcare Infrastructure";
  sectorTag: "all" | "solar" | "campus" | "datacenter" | "auditorium" | "healthcare";
  location: string;
  image: string;
  caption: string;
  highlights: string[];
}

export const CLIENT_PROJECT_PHOTOS: ClientProjectPhoto[] = [
  {
    id: "naac-leadership",
    title: "NAAC Solar Rooftop Handover & Executive Review",
    client: "National Assessment & Accreditation Council (NAAC) / ITI Limited",
    category: "Solar Clean Energy",
    sectorTag: "solar",
    location: "Bengaluru, Karnataka",
    image: "/clients/photos/naac-solar-leadership.jpg",
    caption: "Director M.G. Girish on-site at NAAC campus terrace alongside senior officials from NAAC and ITI Limited inspecting the completed 220 kWp solar rooftop array.",
    highlights: ["Director-Led Site Inspection", "220 kWp Clean Solar Execution", "ITI Limited Strategic Alliance"],
  },
  {
    id: "naac-solar-rooftop",
    title: "220 kWp Rooftop Solar Power Plant Array",
    client: "National Assessment & Accreditation Council (NAAC)",
    category: "Solar Clean Energy",
    sectorTag: "solar",
    location: "Bengaluru, Karnataka",
    image: "/clients/photos/naac-solar-rooftop.jpg",
    caption: "High-efficiency crystalline solar PV module installation generating continuous clean renewable energy across the institutional campus.",
    highlights: ["High-Efficiency PV Modules", "Zero-Disruption Roof Mounting", "Grid-Tied Generation"],
  },
  {
    id: "naac-solar-inverter",
    title: "Solar Inverter Station & Grid Protection Balance-of-System",
    client: "National Assessment & Accreditation Council (NAAC)",
    category: "Solar Clean Energy",
    sectorTag: "solar",
    location: "Bengaluru, Karnataka",
    image: "/clients/photos/naac-solar-inverter.jpg",
    caption: "Industrial grid-tie solar inverters with automated power synchronization, surge protection, and active monitoring.",
    highlights: ["Industrial Inverters", "Surge Protection", "Ongoing SLA O&M Support"],
  },
  {
    id: "sjbit-campus-fiber-handover",
    title: "14-Building Campus Optical Fiber Handover & Leadership Felicitation",
    client: "SJB Institute of Technology (SJBIT)",
    category: "Campus Networking",
    sectorTag: "campus",
    location: "Kengeri, Bengaluru",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    caption: "Official handover ceremony with SJBIT trustees, management, and Director M.G. Girish receiving floral honors upon successful campus-wide optical fiber ring commissioning.",
    highlights: ["14-Building Optical Fiber Ring", "Leadership Felicitation", "Fluke-Certified Performance"],
  },
  {
    id: "tumkur-auditorium",
    title: "Turnkey University Auditorium & Stage AV Systems",
    client: "Tumkur University",
    category: "Auditorium & AV",
    sectorTag: "auditorium",
    location: "Tumakuru, Karnataka",
    image: "/clients/photos/tumkur-auditorium.jpg",
    caption: "Full turnkey architectural acoustic wall paneling, modular acoustic ceiling, stage lighting, and professional auditorium sound reinforcement.",
    highlights: ["Architectural Acoustic Paneling", "Stage Lighting & Rigging", "Digital Audio Integration"],
  },
  {
    id: "tumkur-computer-lab",
    title: "High-Density University Computing Laboratory",
    client: "Tumkur University",
    category: "Campus Networking",
    sectorTag: "campus",
    location: "Tumakuru, Karnataka",
    image: "/clients/photos/tumkur-computer-lab.jpg",
    caption: "Multi-workstation computer laboratory with Cat6 structured cabling, under-desk conduit management, and gigabit LAN switching.",
    highlights: ["High-Density Cat6 Cabling", "Under-Desk Routing", "Gigabit Switching Backbone"],
  },
  {
    id: "tumkur-inauguration",
    title: "Tumkur University Official Facility Inauguration",
    client: "Tumkur University",
    category: "Auditorium & AV",
    sectorTag: "auditorium",
    location: "Tumakuru, Karnataka",
    image: "/clients/photos/tumkur-inauguration.jpg",
    caption: "Formal facility inauguration ceremony attended by university dignitaries, chancellor, and New Link Technologies engineering leadership.",
    highlights: ["State Dignitary Inauguration", "Institutional Milestone", "Quality Handover"],
  },
  {
    id: "uas-raichur-datacenter-inauguration",
    title: "Modular Data Centre Dignitary Inauguration Ceremony",
    client: "University of Agricultural Sciences (UAS), Raichur",
    category: "Modular Data Centre",
    sectorTag: "datacenter",
    location: "Raichur, Karnataka",
    image: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
    caption: "Official lamp lighting and ribbon-cutting ceremony commissioning the university's flagship modular data centre with honorable vice-chancellor.",
    highlights: ["Vice-Chancellor Inauguration", "Turnkey Commissioning", "University Data Hub"],
  },
  {
    id: "uas-raichur-server-farm",
    title: "Modular Data Centre Cold Aisle & Rack Infrastructure",
    client: "University of Agricultural Sciences (UAS), Raichur",
    category: "Modular Data Centre",
    sectorTag: "datacenter",
    location: "Raichur, Karnataka",
    image: "/clients/photos/uas-raichur-server-farm.jpg",
    caption: "Turnkey server farm featuring cold aisle containment, precision cooling, clean power distribution, and enterprise server enclosures.",
    highlights: ["Aisle Containment", "Precision Environmental Control", "Schneider & Netrack Cabinets"],
  },
  {
    id: "uas-raichur-patch-panels",
    title: "High-Density Optical & Copper Patch Cabling",
    client: "University of Agricultural Sciences (UAS), Raichur",
    category: "Modular Data Centre",
    sectorTag: "datacenter",
    location: "Raichur, Karnataka",
    image: "/clients/photos/uas-raichur-patch-panels.jpg",
    caption: "Colour-coded Cat6 and optical fiber patch panel dressing with zero-strain cable routing and verified port labelling.",
    highlights: ["Zero-Strain Cable Dressing", "High-Density Fiber Trays", "Color-Coded Patching"],
  },
  {
    id: "uas-raichur-noc-monitoring",
    title: "Network Operations Centre (NOC) Console Station",
    client: "University of Agricultural Sciences (UAS), Raichur",
    category: "Modular Data Centre",
    sectorTag: "datacenter",
    location: "Raichur, Karnataka",
    image: "/clients/photos/uas-raichur-noc-monitoring.jpg",
    caption: "Continuous 24/7 monitoring workstation overseeing campus fiber link status, bandwidth distribution, and data centre telemetry.",
    highlights: ["24/7 Telemetry Monitoring", "Campus Fiber Link Status", "Core Switch Telemetry"],
  },
  {
    id: "igich-hospital-campus",
    title: "Pediatric Healthcare Campus Technology Infrastructure",
    client: "Indira Gandhi Institute of Child Health (IGICH)",
    category: "Healthcare Infrastructure",
    sectorTag: "healthcare",
    location: "Bengaluru, Karnataka",
    image: "/clients/photos/igich-hospital-campus.jpg",
    caption: "Enterprise technology and networking infrastructure supporting specialized pediatric clinical operations and administrative workflows.",
    highlights: ["Healthcare-Grade Cabling", "High-Reliability Architecture", "Public Hospital Support"],
  },
];
