export interface NavItem {
  label: string;
  href: string;
}

export const COMPANY_DETAILS = {
  name: "New Link Technologies Bangalore Pvt. Ltd.",
  shortName: "New Link Technologies",
  tagline: "Connecting Values.",
  description:
    "New Link Technologies Bangalore Pvt. Ltd. is a leading enterprise technology infrastructure and IT solutions provider. We deliver robust networking, data centers, hardware integration, and digital transformation services tailored for high-growth enterprises.",
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

