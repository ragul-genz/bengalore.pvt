export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  executedThrough?: string;
  image: string;
  secondaryImage?: string;
  description: string;
  scope: string;
  verifiedHighlights: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "solar-rooftop-naac",
    title: "220 KW Solar Rooftop Power Plant",
    category: "Solar & Clean Energy",
    client: "National Assessment and Accreditation Council (NAAC), Bengaluru",
    executedThrough: "ITI Limited (MSP-KTK / Regional Office)",
    image: "/projects/project-solar-naac.png",
    description:
      "Supplying, installing, testing, commissioning, and operations & maintenance of a 220 kWp grid-tied Rooftop Solar Power Plant at NAAC Bengaluru. The project adhered strictly to safety protocols and was completed ahead of the scheduled timeline.",
    scope:
      "Turnkey solar module mounting structure engineering, high-efficiency PV arrays, inverter synchronization, net metering grid tie-in, and ongoing O&M.",
    verifiedHighlights:
      "Official Project Appreciation Certificate awarded by NAAC and ITI Limited for exceptional project execution and dedication.",
  },
  {
    id: "modular-datacenter",
    title: "Modular Data Centre (MDC) Implementation",
    category: "Data Centre Solutions",
    client: "Institutional & Enterprise Computing Facility",
    image: "/projects/project-modular-datacenter.png",
    secondaryImage: "/projects/project-datacenter-inauguration.png",
    description:
      "Turnkey establishment and commissioning of an institutional Modular Data Centre. Encompasses hot/cold aisle containment, precision climate control, server racks with intelligent PDUs, and environmental monitoring.",
    scope:
      "Modular containment assembly, server rack integration, redundant power distribution, fiber cable troughing, and operational handover.",
    verifiedHighlights:
      "Successfully inaugurated and handed over with complete operational documentation and ongoing maintenance support.",
  },
  {
    id: "campus-fiber-uas",
    title: "Campus Optical Fiber, Switching & Wi-Fi Network",
    category: "Networking & Infrastructure",
    client: "University of Agricultural Sciences (UAS), Raichur Campus",
    executedThrough: "KEONICS (Karnataka State Electronics Development Corporation Ltd.)",
    image: "/projects/project-campus-fiber-handover.png",
    secondaryImage: "/projects/project-cable-patching.png",
    description:
      "Supply, installation, and multi-year maintenance contract for campus-wide optical fiber networking, managed switching matrices, high-density Wi-Fi solutions, and integrated CCTV surveillance connecting 14 academic and administrative buildings.",
    scope:
      "Inter-building optical fiber backbone distribution, internal Cat6 structured cabling, enterprise wireless APs, and centralized CCTV security monitoring.",
    verifiedHighlights:
      "Awarded official Certificate of Appreciation by KEONICS and UAS Raichur Registrar for satisfactory multi-year performance.",
  },
  {
    id: "tumkur-university-auditorium",
    title: "Auditorium Acoustic Paneling, AV & False Ceiling",
    category: "Auditorium Solutions",
    client: "Tumkur University",
    image: "/projects/project-tumkur-auditorium.png",
    description:
      "Complete establishment of university auditorium facility encompassing specialized acoustic wall paneling, false ceilings, pro audio sound systems, and video conference infrastructure.",
    scope:
      "Acoustic modeling, civil false ceiling installation, stage sound reinforcement, and digital video integration.",
    verifiedHighlights:
      "Inaugurated and operational for university convocations, national seminars, and multi-party conferences.",
  },
  {
    id: "structured-cabling-dressing",
    title: "High-Density Structured Cabling & Rack Dressing",
    category: "Core Infrastructure",
    client: "Enterprise IT & Institutional Data Centers",
    image: "/projects/project-structured-cabling.png",
    secondaryImage: "/projects/project-cable-patching.png",
    description:
      "Standards-compliant structured cabling execution featuring neat horizontal/vertical cable organizers, certified port labeling, and high-density patch cord termination ensuring signal integrity and thermal efficiency.",
    scope:
      "Cat6/Cat6A termination, rack optimization, Velcro cable dressing, and Fluke link performance certification.",
    verifiedHighlights:
      "Showcased in company portfolio as the benchmark for professional rack dressing versus disorganized installations.",
  },
];

export const INSTALLATION_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Professional Structured Cabling & Dressing",
    category: "Networking",
    image: "/projects/project-structured-cabling.png",
    caption: "Neat vertical and horizontal cable dressing adhering to international structured cabling standards.",
  },
  {
    id: "gal-2",
    title: "Managed Switch Patching & Port Labeling",
    category: "Networking",
    image: "/projects/project-cable-patching.png",
    caption: "Systematic port labeling, color-coded patch cords, and clean cable routing at server racks.",
  },
  {
    id: "gal-3",
    title: "Modular Data Centre Server Rack Inspection",
    category: "Data Centre",
    image: "/projects/project-modular-datacenter.png",
    caption: "Technical inspection of modular server enclosures and power distribution units.",
  },
  {
    id: "gal-4",
    title: "Modular Data Centre Operational Commissioning",
    category: "Data Centre",
    image: "/projects/project-datacenter-inauguration.png",
    caption: "Inauguration and client handover of turnkey modular data centre computing facility.",
  },
  {
    id: "gal-5",
    title: "Campus Optical Fiber Network Handover",
    category: "Campus Network",
    image: "/projects/project-campus-fiber-handover.png",
    caption: "Handover ceremony for the 14-building optical fiber and Wi-Fi campus infrastructure.",
  },
  {
    id: "gal-6",
    title: "Tumkur University Auditorium & Facility",
    category: "Auditorium",
    image: "/projects/project-tumkur-auditorium.png",
    caption: "Establishment of auditorium acoustics, wall paneling, and computer lab infrastructure.",
  },
  {
    id: "gal-7",
    title: "220 kWp Solar Rooftop Array at NAAC",
    category: "Clean Energy",
    image: "/projects/project-solar-naac.png",
    caption: "High-capacity rooftop solar photovoltaic installation executed through ITI Limited for NAAC.",
  },
];
