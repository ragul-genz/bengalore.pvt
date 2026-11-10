export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  diagramImage?: string;
  tag: string;
  brands?: string[];
  features: string[];
  deliverables: string[];
  referenceHighlights?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "audio-solutions",
    title: "Audio Solutions",
    tag: "Acoustics & Sound",
    iconName: "Volume2",
    image: "/services/audio-solutions.png",
    brands: [
      "Bose",
      "Ahuja",
      "Bosch",
      "Yamaha",
      "JBL",
      "Sennheiser",
      "Heinrich",
      "Harman",
    ],
    shortDescription:
      "Professional audio systems, digital sound processing consoles, acoustic wall treatments, and distributed commercial sound for institutional environments and auditoriums.",
    fullDescription:
      "New Link Technologies Bangalore Pvt. Ltd. delivers end-to-end commercial and institutional audio solutions with industry-leading OEM partnerships. Our designs incorporate digital sound mixing consoles, multi-channel rack power amplifiers, high-performance microphones, and line-array speakers from certified technology brands.",
    features: [
      "Digital Signal Processing (DSP) & audio mixing consoles",
      "Multi-zone distributed commercial audio and power amplifiers",
      "Wireless delegate and podium microphone systems",
      "Acoustic wall paneling and ambient reverberation control",
      "OEM Integration with Bose, Ahuja, Bosch, Yamaha, JBL, Sennheiser, Heinrich & Harman",
    ],
    deliverables: [
      "Acoustic assessment and sound coverage mapping",
      "Amplifier and speaker matrix installation",
      "System calibration, equalization, and frequency tuning",
      "Operator training and comprehensive operational documentation",
    ],
    referenceHighlights:
      "Executed comprehensive audio and acoustic installations across academic and institutional auditoriums across Karnataka.",
  },
  {
    slug: "auditorium-solutions",
    title: "Auditorium Solutions",
    tag: "Large Venue AV",
    iconName: "Presentation",
    image: "/services/auditorium-solutions.png",
    shortDescription:
      "Turnkey auditorium integration including acoustic wall paneling, false ceilings, stage lighting, pro sound, and large-format projection.",
    fullDescription:
      "From architectural acoustics to high-lumen projection systems, New Link Technologies delivers complete, turnkey auditorium environments. We coordinate stage lighting, motorized projection screens, pro sound arrays, false ceilings, and wall paneling to create modern, multipurpose event venues for universities and institutions.",
    features: [
      "Complete acoustic engineering, wall paneling, and specialized false ceilings",
      "Large-format motorized projection and digital LED video walls",
      "Stage lighting grids, dimming consoles, and motorized curtains",
      "High-power line-array auditorium speaker networks",
      "Centralized touch-panel control for AV and stage automation",
    ],
    deliverables: [
      "Civil acoustic design, panel fabrication, and false ceiling execution",
      "High-definition AV equipment supply, rigging, and integration",
      "End-to-end cabling infrastructure with labeled patch bays",
      "Commissioning, handover, and ongoing SLA maintenance support",
    ],
    referenceHighlights:
      "Establishment of full auditorium, wall paneling, acoustics, false ceilings, audio, and video solutions at Tumkur University.",
  },
  {
    slug: "boardroom-solutions",
    title: "Boardroom Solutions",
    tag: "Executive AV",
    iconName: "MonitorCheck",
    image: "/services/boardroom-solutions.png",
    diagramImage: "/services/boardroom-features-diagram.png",
    shortDescription:
      "Modern executive meeting environments equipped with smart interactive touch screens, digital conference systems, booking management, and pro sound.",
    fullDescription:
      "We transform corporate boardrooms and meeting spaces into modern, collaborative hubs. Our boardroom solutions combine interactive touch displays, integrated room scheduling systems, automated smart lighting and climate controls, cable cubbies, and digital conference speakerphones into a seamless, intuitive interface.",
    features: [
      "Smart interactive touch screen & digital whiteboard",
      "Digital conference system with delegate priority",
      "Conference booking system & panel scheduling",
      "Smart control system for lighting & AV automation",
      "Pro sound system & acoustic optimization",
      "Video conference system with seamless connectivity",
    ],
    deliverables: [
      "Boardroom layout architecture and sightline optimization",
      "Hardware supply, flush-mount installation, and cable dressing",
      "Centralized control tablet UI customization",
      "Executive user orientation and maintenance warranty",
    ],
    referenceHighlights:
      "Designed and deployed smart boardroom solutions with digital conference control for government departments and corporate clients.",
  },
  {
    slug: "video-conferencing",
    title: "Video Conferencing Solutions",
    tag: "Hybrid Collaboration",
    iconName: "Video",
    image: "/services/video-conferencing.png",
    brands: ["Polycom", "Cisco"],
    shortDescription:
      "Enterprise video conferencing systems featuring PTZ optical zoom cameras, dual-display video walls, beamforming audio, and multi-party connectivity.",
    fullDescription:
      "New Link Technologies provides robust video conferencing systems built for flawless hybrid collaboration. In partnership with industry leaders like Polycom and Cisco, we integrate broadcast-grade PTZ tracking cameras, dual-monitor displays, intelligent beamforming ceiling microphone arrays, and digital video matrix switchers that interface with major enterprise collaboration platforms.",
    features: [
      "Ultra-HD PTZ cameras with optical zoom and auto-framing tracking",
      "Dual-display configurations for simultaneous content and participant viewing",
      "Ceiling beamforming microphone arrays with acoustic echo cancellation",
      "Hardware codecs and software-agnostic USB conferencing interfaces",
      "Certified integration with Polycom and Cisco collaboration suites",
    ],
    deliverables: [
      "Network bandwidth assessment and video room calibration",
      "Camera placement, display mounting, and audio tuning",
      "Platform integration and end-to-end conference testing",
      "Standard operating procedures and preventive maintenance",
    ],
    referenceHighlights:
      "Installed multi-location video conferencing systems enabling seamless inter-departmental communication for state administrative bodies.",
  },
  {
    slug: "cctv-surveillance",
    title: "CCTV and Surveillance",
    tag: "Surveillance & Video Walls",
    iconName: "Camera",
    image: "/services/cctv-surveillance.png",
    diagramImage: "/services/command-room-video-wall.png",
    brands: ["Bosch", "Honeywell", "Axis Communications", "Sony", "Cisco"],
    shortDescription:
      "Enterprise IP surveillance networks, Command Room Video Walls, multi-camera perimeter coverage, central NVR storage, and real-time security monitoring.",
    fullDescription:
      "We design and deploy industrial-grade CCTV surveillance systems, centralized Public Address (PA) solutions, and Command Room Video Walls that provide 24/7 situational awareness across expansive facilities. Partnering with Bosch, Honeywell, Axis Communications, Sony, and Cisco, our installations cover perimeter boundaries, entrance checkpoints, administrative corridors, server rooms, and central command stations.",
    features: [
      "High-resolution IP dome, bullet, and PTZ security cameras",
      "Enterprise Command Room Video Wall & multi-screen monitoring consoles",
      "Centralized NVR storage arrays with RAID redundancy for long retention",
      "Integrated Public Address (PA) announcement controllers and discussion units",
      "Authorized hardware partnerships with Bosch, Honeywell, Axis Communications & Sony",
    ],
    deliverables: [
      "Site survey, blind-spot mapping, and camera angle design",
      "Command room console layout, video wall mounting, and matrix configuration",
      "Conduit laying, optical fiber/Cat6 cabling, and camera mounting",
      "Comprehensive maintenance contract and camera health checks",
    ],
    referenceHighlights:
      "Deployed campus-wide CCTV surveillance and security systems for the University of Agricultural Sciences (UAS), Raichur.",
  },
  {
    slug: "networking-cabling",
    title: "Networking and Cabling",
    tag: "Core Infrastructure",
    iconName: "Network",
    image: "/services/networking-cabling.png",
    diagramImage: "/services/optical-fiber-infrastructure.png",
    brands: ["D-Link", "Belden", "3M", "Molex", "Cisco"],
    shortDescription:
      "Campus-wide optical fiber networks, managed switching, high-density enterprise Wi-Fi, and certified structured cabling with neat cable dressing.",
    fullDescription:
      "A resilient digital organization depends on a clean, robust physical networking layer. Partnering with D-Link, Belden, 3M, and Molex, New Link Technologies specializes in complex structured cabling installations, high-speed optical fiber backbones connecting multiple campus buildings, core/distribution switching matrices, and high-density enterprise Wi-Fi solutions.",
    features: [
      "Single-mode and multi-mode campus optical fiber backbones",
      "Armored multi-tube optical fiber infrastructure for inter-building links",
      "ISO-standard Cat6/Cat6A structured cabling with certified termination",
      "Professional vertical and horizontal cable dressing and rack organization",
      "Authorized OEM partnerships with D-Link, Belden, 3M, and Molex",
      "Core, distribution, and access layer managed switching matrices",
      "High-density enterprise wireless access points with central controller management",
    ],
    deliverables: [
      "Physical pathway planning, trenching, conduit, and cable pulling",
      "Rack installation, patch panel termination, and port labeling",
      "Fluke/OTDR certification testing and link performance verification",
      "Detailed network topology documentation and port mapping",
    ],
    referenceHighlights:
      "Supply and implementation of campus fiber networking, switching, and Wi-Fi solutions connecting 14 buildings across university campuses.",
  },
  {
    slug: "data-centre",
    title: "Data Centre Solutions",
    tag: "Mission-Critical",
    iconName: "Server",
    image: "/services/data-centre.png",
    diagramImage: "/projects/project-modular-datacenter.png",
    shortDescription:
      "Modular data centre design, server rack infrastructure, precision cooling, power redundancy, and turnkey commissioning for enterprise computing.",
    fullDescription:
      "We deliver high-reliability Modular Data Centre (MDC) solutions built to house critical enterprise servers and storage arrays. Our turnkey services cover modular containment, server racks with intelligent PDUs, precision air conditioning, uninterrupted power supply (UPS) integration, and environmental monitoring.",
    features: [
      "Pre-engineered modular data centre containment and server enclosures",
      "In-row precision cooling systems with hot/cold aisle containment",
      "Redundant UPS power backup, distribution panels, and smart PDUs",
      "Environmental monitoring (temperature, humidity, water leak, smoke)",
      "Cable ladder racks, fiber troughs, and neat overhead routing",
    ],
    deliverables: [
      "Data centre thermal load calculation and power capacity planning",
      "Modular containment assembly and equipment rack installation",
      "Power, cooling, and environmental sensor commissioning",
      "Ongoing maintenance contracts and operational support",
    ],
    referenceHighlights:
      "Modular Data Centre successfully installed, commissioned, and maintained under contract for institutional clients in Karnataka.",
  },
  {
    slug: "solar-fire-safety",
    title: "Solar and Fire Safety Solutions",
    tag: "Energy & Fire Safety",
    iconName: "Sun",
    image: "/projects/project-solar-naac.png",
    diagramImage: "/services/fire-alarm-safety.png",
    shortDescription:
      "Rooftop solar power plant installation, commercial clean energy engineering, fire alarm systems, and life safety infrastructure integration.",
    fullDescription:
      "New Link Technologies executes sustainable power generation and life-safety systems for large institutional and commercial facilities. We handle turnkey grid-tied solar photovoltaic installations—such as high-capacity rooftop power plants—alongside addressable fire alarm systems, smoke detectors, and emergency warning equipment.",
    features: [
      "Turnkey grid-interactive commercial and institutional rooftop solar PV",
      "High-efficiency solar module arrays with structural mounting engineering",
      "Grid inverters, net metering synchronization, and generation monitoring",
      "Addressable fire alarm control panels and optical smoke detection",
      "Audible/visual fire evacuation sounders and manual call points",
    ],
    deliverables: [
      "Solar irradiation analysis, roof structural validation, and electrical design",
      "Module supply, mounting, cabling, inverter testing, and grid synchronization",
      "Fire safety regulatory compliance testing and alarm zone mapping",
      "Operations, warranty support, and comprehensive O&M contracts",
    ],
    referenceHighlights:
      "Supplying, installing, testing, and commissioning of a 220 kWp Rooftop Solar Power Plant executed through ITI Limited for client NAAC.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
