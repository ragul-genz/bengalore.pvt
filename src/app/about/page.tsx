import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Engineering Journey",
  description:
    "Learn about New Link Technologies Bangalore Pvt. Ltd., our executive leadership under Director M.G. Girish, and our 15+ years of engineering journey across modular data centres, campus optical fiber networks, and clean solar energy.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Integrated enterprise technology provider headquartered in Rajajinagar, Bangalore under Director M.G. Girish.",
    url: "https://www.newlinktec.com/about",
    images: ["/leadership/director-mg-girish.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
