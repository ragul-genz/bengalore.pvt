import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { JsonLd, FloatingWhatsApp } from "@/components/common";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newlinktec.com"),
  title: {
    default: "New Link Technologies Bangalore Pvt. Ltd. | Connecting Values",
    template: "%s | New Link Technologies",
  },
  description:
    "Enterprise IT solutions provider specializing in modular data centres, campus optical fiber networks, structured cabling, audio-visual automation, and turnkey technology infrastructure in Bangalore, Karnataka.",
  keywords: [
    "New Link Technologies",
    "New Link Technologies Bangalore Pvt Ltd",
    "Enterprise IT Bangalore",
    "Modular Data Centre Karnataka",
    "Campus Optical Fiber Networking",
    "Structured Cabling Solutions",
    "Audio Visual Systems",
    "Auditorium Acoustic Solutions",
    "Solar Rooftop Power Plants",
    "M.G. Girish",
    "Rajajinagar Bangalore IT Company",
  ],
  authors: [{ name: "New Link Technologies Bangalore Pvt. Ltd." }],
  creator: "New Link Technologies Bangalore Pvt. Ltd.",
  publisher: "New Link Technologies Bangalore Pvt. Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.newlinktec.com",
    siteName: "New Link Technologies Bangalore Pvt. Ltd.",
    title: "New Link Technologies Bangalore Pvt. Ltd. | Connecting Values",
    description:
      "Integrated enterprise IT systems, modular data centres, campus optical fiber networking, and turnkey engineering solutions.",
    images: [
      {
        url: "/hero/business-solutions-globe.png",
        width: 1200,
        height: 630,
        alt: "New Link Technologies - Connecting Values",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Link Technologies Bangalore Pvt. Ltd. | Connecting Values",
    description:
      "Enterprise technology and infrastructure solutions provider based in Rajajinagar, Bangalore.",
    images: ["/hero/business-solutions-globe.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-lightBg text-brand-text selection:bg-brand-blue selection:text-white">
        <JsonLd />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
