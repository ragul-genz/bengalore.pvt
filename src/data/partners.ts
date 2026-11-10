export interface PartnerEntity {
  name: string;
  type: "Government & PSU" | "Academic Institution" | "Public Sector Undertaking" | "Healthcare & Research";
  location: string;
  scopeOfWork: string;
}

export const TECHNOLOGY_PARTNERS: PartnerEntity[] = [
  {
    name: "ITI Limited",
    type: "Public Sector Undertaking",
    location: "Govt. of India Undertaking, Bengaluru",
    scopeOfWork: "Strategic partner for turnkey institutional solar energy and infrastructure execution.",
  },
  {
    name: "KEONICS",
    type: "Government & PSU",
    location: "Govt. of Karnataka Enterprise",
    scopeOfWork: "Collaborative partner for state-level IT infrastructure, smart campus, and data centre deployments.",
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
  },
  {
    name: "University of Agricultural Sciences (UAS), Raichur",
    type: "Academic Institution",
    location: "Raichur, Karnataka",
    scopeOfWork: "14-building optical fiber backbone, core switching, high-density Wi-Fi, CCTV, and Modular Data Centre.",
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
}

export const OEM_BRAND_PARTNERS: OEMBrandPartner[] = [
  { name: "Bose", category: "Pro Audio & Acoustics" },
  { name: "Bosch", category: "Security & Public Address" },
  { name: "Cisco", category: "Networking & Video Collaboration" },
  { name: "Axis Communications", category: "Network IP Cameras & Surveillance" },
  { name: "Sony", category: "High-Definition Video & Security Systems" },
  { name: "Polycom", category: "Enterprise Video Conferencing" },
  { name: "Honeywell", category: "Life Safety & Surveillance" },
  { name: "Yamaha", category: "Pro Audio & Sound Consoles", subtitle: "Make Waves" },
  { name: "JBL", category: "Commercial Sound Systems" },
  { name: "Sennheiser", category: "Wireless Microphone Systems" },
  { name: "Harman", category: "Professional AV Integration", subtitle: "A Samsung Company" },
  { name: "Ahuja", category: "Public Address Systems", subtitle: "80 Years of Reliability" },
  { name: "Heinrich", category: "Commercial Audio & PA Systems" },
];

