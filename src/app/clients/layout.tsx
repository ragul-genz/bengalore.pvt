import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Institutional Network | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Explore the verified client roster of New Link Technologies Bangalore Pvt. Ltd., including premier state universities, public sector undertakings (PSUs), government departments, and healthcare authorities across Karnataka.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Clients & Institutional Partners | New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Proven track record serving NAAC, ITI Limited, KEONICS, UAS Raichur, Tumkur University, SJBIT, RDPR, and leading state departments.",
    url: "https://www.newlinktec.com/clients",
    images: ["/clients/client-partners-grid.png"],
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
