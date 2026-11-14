export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessCategory {
  title: string;
  tag: string;
  description: string;
}

export const COMPANY_DETAILS = {
  name: "New Link Technologies Bangalore Pvt. Ltd.",
  shortName: "New Link Technologies",
  tagline: "Connecting Values.",
  leadership: {
    director: "M.G. Girish",
    role: "Director",
    directors: [
      {
        name: "M.G. Girish",
        role: "Director",
        company: "New Link Technologies Bangalore Pvt. Ltd.",
        phone: "+91 95353 14141",
        phoneRaw: "+919535314141",
        email: "girish.mg@newlinktec.com",
        image: "/leadership/director-mg-girish.jpg",
        designation: "Director - Enterprise Solutions & Strategic Operations",
      },
      {
        name: "D.K. Divya",
        role: "Director",
        company: "New Link Technologies Bangalore Pvt. Ltd.",
        phone: "+91 96118 54426",
        phoneRaw: "+919611854426",
        email: "divya.dk@newlinktec.com",
        image: "/leadership/director-divya-dk.jpg",
        designation: "Director - Administration, HR & Operational Governance",
        bio: "D.K. Divya brings more than 9 years of experience in administration, human resource support, organizational operations and business coordination. As a key member of the company's leadership team, she has contributed to the development of the organization's business framework and operational processes.",
      },
    ],
  },
  description:
    "New Link Technologies Bangalore Pvt. Ltd. is an integrated technology solutions provider delivering enterprise IT systems, hardware, software, digital infrastructure, and technology consulting for modern businesses, universities, and government bodies.",
  contact: {
    phone: "+91 9535314141",
    phoneDisplay: "+91 95353 14141",
    email: "girish.mg@newlinktec.com",
    address: {
      line1: "No. 12/1, 1st Floor,",
      line2: "11th 'B' Main Road, 36th Cross,",
      line3: "2nd Block, Rajajinagar,",
      city: "Bangalore",
      postalCode: "560010",
      full: "No. 12/1, 1st Floor, 11th 'B' Main Road, 36th Cross, 2nd Block, Rajajinagar, Bangalore - 560010.",
    },
  },
  categories: [
    {
      title: "IT",
      tag: "Enterprise IT",
      description:
        "Comprehensive information technology solutions, active networking, wireless infrastructure, and smart campus deployments.",
    },
    {
      title: "Hardware",
      tag: "Computing & Network Gear",
      description:
        "Procurement, installation, and lifecycle maintenance of servers, enterprise racks, industrial switches, and endpoint workstations.",
    },
    {
      title: "Software",
      tag: "Enterprise Systems",
      description:
        "Specialized system integration, digital conference platform software, smart room automation, and enterprise application deployments.",
    },
    {
      title: "Infrastructure",
      tag: "Physical & Network Foundation",
      description:
        "Modular data centres, high-density structured cabling, multi-building campus optical fiber backbones, and smart building acoustics.",
    },
    {
      title: "Consulting",
      tag: "Advisory & Project Execution",
      description:
        "End-to-end technology advisory, structured SLA maintenance contracts, tender project execution, and enterprise architecture planning.",
    },
  ] as BusinessCategory[],
  verifiedCapabilities: [
    {
      title: "Modular Data Centres",
      desc: "Turnkey planning, supply, rack integration, cooling, power, and operational commissioning for institutional and enterprise data centres.",
    },
    {
      title: "Campus Optical Fiber & Switching",
      desc: "High-throughput fiber optic cable distribution connecting multiple academic, administrative, and clinical buildings with redundant switching.",
    },
    {
      title: "Professional Structured Cabling",
      desc: "Standards-compliant patch cord management, vertical/horizontal cable dressing, rack organization, and certified termination.",
    },
    {
      title: "Auditorium & Boardroom Solutions",
      desc: "Wall paneling, acoustic engineering, false ceilings, digital audio-video conference systems, smart interactive displays, and room automation.",
    },
    {
      title: "CCTV & Security Surveillance",
      desc: "Integrated IP surveillance, centralized monitoring, access control, and campus perimeter security systems.",
    },
    {
      title: "Clean Energy Infrastructure",
      desc: "Executed high-capacity rooftop solar projects (e.g. 220 kWp solar rooftop power plant executed through ITI Limited for NAAC).",
    },
  ],
  verifiedClientsAndPartners: [
    "ITI Limited (Govt. of India Undertaking)",
    "KEONICS (Karnataka State Electronics Development Corporation Limited)",
    "National Assessment and Accreditation Council (NAAC)",
    "University of Agricultural Sciences (UAS), Raichur",
    "Tumkur University",
    "SJB Institute of Technology",
    "Department of Cooperation, Govt. of Karnataka (Sahakara Sindhu)",
    "Bangalore Development Authority (BDA)",
    "Centre for e-Governance (CeG), Govt. of Karnataka",
    "National Health Mission",
    "Broadcast Engineering Consultants India Limited (BECIL)",
    "Indira Gandhi Institute of Child Health",
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  serviceLinks: [
    { label: "Structured Cabling & Networking", href: "/services#networking" },
    { label: "Enterprise IT Infrastructure", href: "/services#infrastructure" },
    { label: "Data Center & Server Systems", href: "/services#datacenter" },
    { label: "Cloud & Virtualization", href: "/services#cloud" },
    { label: "CCTV & Security Surveillance", href: "/services#security" },
    { label: "Corporate IT Consulting", href: "/services#consulting" },
  ] as NavItem[],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ] as NavItem[],
} as const;
