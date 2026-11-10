export interface CertificateItem {
  id: string;
  title: string;
  issuingBody: string;
  category: string;
  image: string;
  description: string;
  workDetails: string;
  dateOrRef: string;
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-keonics",
    title: "Certificate of Appreciation – UAS Raichur Campus Maintenance",
    issuingBody: "Karnataka State Electronics Development Corporation Limited (KEONICS)",
    category: "Campus LAN, Wi-Fi, CCTV & Data Centre",
    image: "/certificates/cert-keonics-uas.png",
    description:
      "Official certificate recognizing that M/s New Link Technologies (P) Ltd successfully implemented and completed the 3-year maintenance contract of Local Area Networking, Wi-Fi, CCTV surveillance, and Data Centre at the University of Agricultural Sciences, Raichur campus.",
    workDetails:
      "3-year comprehensive maintenance contract covering core switching, campus wireless APs, CCTV security, and modular data centre facility.",
    dateOrRef: "Ref: KSEDC/ITS/UAS.RCH/CERT/2020-21 | Date: 10th February 2021",
  },
  {
    id: "cert-naac-solar",
    title: "Project Appreciation Certificate – 220 kWp Solar Rooftop",
    issuingBody: "National Assessment and Accreditation Council (NAAC) / ITI Limited",
    category: "Clean Energy & Electrical Infrastructure",
    image: "/certificates/cert-naac-solar.png",
    description:
      "Awarded to New Link Technologies Bangalore Pvt. Ltd. (through partner ITI Limited) for successfully completing the entire scope of work adhering to all safety protocols and well before the scheduled period. Sincerity, professionalism, and dedication commended.",
    workDetails:
      "Supplying, installing, testing, commissioning, and O&M of a 220 kWp Rooftop Solar Power Plant at NAAC Bengaluru (Project Value: Rs 95,18,079.00).",
    dateOrRef: "Ref: NAAC/Admin/solar/2020 | Completed: January 2021",
  },
  {
    id: "cert-uas-raichur",
    title: "Letter of Appreciation & Extension – UAS Raichur",
    issuingBody: "University of Agricultural Sciences, Raichur (Office of the Registrar)",
    category: "Smart Campus & Modular Data Centre",
    image: "/certificates/cert-uas-raichur.png",
    description:
      "Appreciation from the Registrar, UAS Raichur acknowledging satisfactory implementation of LAN networking, Wi-Fi facilities, CCTV surveillance systems, and Modular Data Centre (MDC) expansion across the administrative block.",
    workDetails:
      "Supply, installation, and handover of smart campus IT solutions, LAN networking, and established MDC facilities.",
    dateOrRef: "Ref: No. R/UASR/DSIR/2020-21/2388 | Date: 10-11-2020",
  },
];

