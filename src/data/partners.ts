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
  },
  {
    name: "Centre for e-Governance (CeG)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Public sector IT enablement and electronic governance infrastructure support.",
  },
];

export const CLIENT_INSTITUTIONS: PartnerEntity[] = [
  {
    name: "National Assessment & Accreditation Council (NAAC)",
    type: "Government & PSU",
    location: "Autonomous Institution of UGC, Bengaluru",
    scopeOfWork: "220 kWp Rooftop Solar Power Plant execution and comprehensive O&M contract.",
    logo: "/partners/clients/naac.png",
  },
  {
    name: "University of Agricultural Sciences (UAS), Raichur",
    type: "Academic Institution",
    location: "Raichur, Karnataka",
    scopeOfWork: "14-building optical fiber backbone, core switching, high-density Wi-Fi, CCTV, and Modular Data Centre.",
    logo: "/partners/clients/uas-raichur.png",
  },
  {
    name: "Tumkur University",
    type: "Academic Institution",
    location: "Tumakuru, Karnataka",
    scopeOfWork: "Full auditorium establishment, acoustic wall paneling, false ceiling, sound, and AV systems.",
  },
  {
    name: "SJB Institute of Technology (SJBIT)",
    type: "Academic Institution",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Campus fiber networking, switching, and specialized computer laboratory deployment.",
  },
  {
    name: "Rural Development & Panchayat Raj (RDPR)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Departmental IT systems and institutional connectivity.",
  },
  {
    name: "Department of Cooperation (Sahakara Sindhu)",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Administrative conference infrastructure and IT systems integration.",
  },
  {
    name: "Bangalore Development Authority (BDA)",
    type: "Government & PSU",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Network infrastructure and office technology modernization.",
  },
  {
    name: "Krishna Bhagya Jala Nigam Ltd.",
    type: "Government & PSU",
    location: "Government of Karnataka",
    scopeOfWork: "Enterprise IT infrastructure and institutional communications.",
  },
  {
    name: "National Health Mission (NHM)",
    type: "Healthcare & Research",
    location: "Karnataka Division",
    scopeOfWork: "Healthcare digital connectivity and surveillance monitoring integration.",
  },
  {
    name: "Indira Gandhi Institute of Child Health",
    type: "Healthcare & Research",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Hospital network cabling and surveillance infrastructure.",
  },
  {
    name: "Koppal Institute of Medical Science",
    type: "Academic Institution",
    location: "Koppal, Karnataka",
    scopeOfWork: "Medical campus networking and digital conference facilities.",
  },
  {
    name: "Science Gallery Bengaluru",
    type: "Healthcare & Research",
    location: "Bengaluru, Karnataka",
    scopeOfWork: "Interactive AV systems and exhibition digital infrastructure.",
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
