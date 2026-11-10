import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Successful Projects & Infrastructure Gallery",
  description:
    "Verified installations by New Link Technologies: 220 kWp Solar Rooftop (NAAC/ITI), Modular Data Centres (UAS Raichur), and multi-building campus optical fiber networks.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Successful Projects & Installations | New Link Technologies",
    description:
      "Demonstrated track record of enterprise IT, optical fiber networking, and turnkey infrastructure projects.",
    url: "https://www.newlinktec.com/projects",
    images: ["/projects/project-modular-datacenter.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
