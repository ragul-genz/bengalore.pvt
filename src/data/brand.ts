export const BRAND_CONFIG = {
  name: "New Link Technologies Bangalore Pvt. Ltd.",
  shortName: "New Link Technologies",
  tagline: "Connecting Values.",
  location: "Bangalore, Karnataka, India",
  description:
    "A premier enterprise technology solutions provider delivering high-impact IT infrastructure, software systems, and digital transformation.",
  colors: {
    navy: "#0B1F3A",
    darkNavy: "#142B4A",
    blue: "#2563EB",
    white: "#FFFFFF",
    lightBg: "#F5F7FA",
    text: "#172033",
    secondaryText: "#667085",
    border: "#E5E9F0",
  },
  typography: {
    primary: "Inter",
    heading: "Manrope",
  },
} as const;

export type BrandConfig = typeof BRAND_CONFIG;

