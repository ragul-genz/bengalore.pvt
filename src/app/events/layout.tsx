import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Project Inaugurations | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Explore major project inaugurations, ribbon-cutting ceremonies, client handovers, and technology partner summits celebrated by New Link Technologies Bangalore Pvt. Ltd.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Company Events & Project Inaugurations | New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Landmark inaugurations and project handovers across Karnataka state universities, government bodies, and enterprise data centres.",
    url: "https://www.newlinktec.com/events",
    images: ["/projects/project-datacenter-inauguration.png"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
