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
    image: "/clients/photos/naac-solar-rooftop.jpg",
    secondaryImage: "/clients/photos/naac-solar-leadership.jpg",
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
    image: "/clients/photos/uas-raichur-server-farm.jpg",
    secondaryImage: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
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
    secondaryImage: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
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
    image: "/clients/photos/tumkur-auditorium.jpg",
    secondaryImage: "/clients/photos/tumkur-inauguration.jpg",
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
  {
    id: "command-room-video-wall",
    title: "Enterprise Command Room Video Wall & Surveillance Center",
    category: "Surveillance & Control Room",
    client: "High-Security Operations & Command Center",
    image: "/projects/project-command-room-video-wall.png",
    description:
      "Turnkey architectural design and installation of an enterprise Command & Control Room. Encompasses an ultra-narrow bezel multi-display video wall, dual multi-monitor operator stations, ergonomic console integration with New Link branding, and 24/7 security monitoring visualization.",
    scope:
      "Video wall mounting infrastructure, digital matrix controller, operator workstations, cable management, and integration with surveillance camera networks.",
    verifiedHighlights:
      "Custom branded New Link control console and operational command video wall deployment.",
  },
  {
    id: "campus-fiber-sjbit",
    title: "14-Building Campus Fiber Networking, Switching & Wi-Fi at SJBIT",
    category: "Campus Network & Switching",
    client: "SJB Institute of Technology (SJBIT) - Sri Adichunchanagiri Shikshana Trust",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    description:
      "Turnkey supply, termination, and multi-building commissioning of campus-wide optical fiber networking, managed switching matrices, and high-density Wi-Fi solutions providing seamless connectivity across 14 academic and administrative buildings.",
    scope:
      "Inter-building optical fiber backbone, core/distribution switches, Cat6 structured cabling, enterprise Wi-Fi APs, and executive handover.",
    verifiedHighlights:
      "Executive felicitation and official handover ceremony with SJBIT trust leadership and New Link management.",
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
    image: "/clients/photos/uas-raichur-server-farm.jpg",
    caption: "Technical inspection of modular server enclosures and power distribution units.",
  },
  {
    id: "gal-4",
    title: "Modular Data Centre Commissioning at UAS Raichur",
    category: "Data Centre",
    image: "/clients/photos/uas-raichur-datacenter-inauguration.jpg",
    caption: "Inauguration and client handover of turnkey modular data centre and Wi-Fi facility at UAS Raichur.",
  },
  {
    id: "gal-5",
    title: "Campus Optical Fiber Network Handover",
    category: "Campus Network",
    image: "/clients/photos/sjbit-campus-fiber-handover.jpg",
    caption: "Handover ceremony for the 14-building optical fiber and Wi-Fi campus infrastructure.",
  },
  {
    id: "gal-6",
    title: "Tumkur University Auditorium & Facility",
    category: "Auditorium",
    image: "/clients/photos/tumkur-auditorium.jpg",
    caption: "Establishment of auditorium acoustics, wall paneling, and computer lab infrastructure.",
  },
  {
    id: "gal-7",
    title: "220 kWp Solar Rooftop Array at NAAC",
    category: "Clean Energy",
    image: "/clients/photos/naac-solar-rooftop.jpg",
    caption: "High-capacity rooftop solar photovoltaic installation executed through ITI Limited for NAAC.",
  },
  {
    id: "gal-8",
    title: "Enterprise Command Room Video Wall",
    category: "Surveillance",
    image: "/projects/project-command-room-video-wall.png",
    caption: "Centralized command room video wall with dual operator workstations and integrated security feeds.",
  },
  {
    id: "gal-9",
    title: "Armored Optical Fiber Infrastructure",
    category: "Campus Network",
    image: "/projects/project-optical-fiber-cable.png",
    caption: "Multi-core armored optical fiber cable infrastructure deployed for inter-building high-speed campus backbones.",
  },
  {
    id: "gal-10",
    title: "High-Density Color-Coded Patch Cabling & Trunk Dressing",
    category: "Networking",
    image: "/projects/project-color-patching-dressing.png",
    caption: "Professional bundle dressing, Velcro harness management, and machine-labeled color patch cables.",
  },
  {
    id: "gal-11",
    title: "14-Building Campus Fiber Handover at SJBIT",
    category: "Campus Network",
    image: "/projects/project-sjbit-campus-fiber.png",
    caption: "Official handover and felicitation ceremony for 14-building campus networking at SJB Institute of Technology.",
  },
];

