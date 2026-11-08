/**
 * Design System Specifications
 * New Link Technologies Bangalore Pvt. Ltd.
 * Tagline: Connecting Values.
 * Design style: Premium international enterprise technology website.
 */

export const DESIGN_SYSTEM = {
  brand: {
    name: "New Link Technologies Bangalore Pvt. Ltd.",
    shortName: "New Link Technologies",
    tagline: "Connecting Values.",
    domain: "newlinktech.in",
  },
  colors: {
    navy: {
      hex: "#0B1F3A",
      role: "Primary Corporate Brand Color - Headers, primary buttons, dominant accents",
    },
    darkNavy: {
      hex: "#142B4A",
      role: "Depth, hover states, dark section backgrounds, high-contrast containers",
    },
    blue: {
      hex: "#2563EB",
      role: "Action, interactivity, secondary CTAs, feature badges, status indicators",
    },
    white: {
      hex: "#FFFFFF",
      role: "Pure white for cards, crisp content containers, dark-mode text",
    },
    lightBg: {
      hex: "#F5F7FA",
      role: "Global background, alternating section backgrounds, clean separation",
    },
    text: {
      hex: "#172033",
      role: "Primary typography color with optimal contrast and readability",
    },
    secondaryText: {
      hex: "#667085",
      role: "Subheadings, supporting metadata, descriptive paragraphs, captions",
    },
    border: {
      hex: "#E5E9F0",
      role: "Subtle dividers, card outlines, clean tabular structures",
    },
  },
  typography: {
    headingFont: "Manrope (Geometric Sans-Serif for modern corporate authority)",
    bodyFont: "Inter (Humanist/Neo-grotesque Sans-Serif for high legibility)",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  spacing: {
    sectionPadding: "py-20 md:py-26 (80px to 104px vertical spacing)",
    sectionPaddingSm: "py-14 md:py-18 (56px to 72px vertical spacing)",
    cardPadding: "p-6 sm:p-7",
    containerMaxWidth: "max-w-7xl (1280px)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

