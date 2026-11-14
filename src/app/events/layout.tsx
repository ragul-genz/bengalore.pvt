import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kannadotsava Events | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Kannadotsava (www.kannadotsava.com) – Celebrating Karnataka's rich cultural heritage, language, traditions, and community harmony, proudly supported by New Link Technologies Bangalore Pvt. Ltd.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Kannadotsava – www.kannadotsava.com | New Link Technologies Bangalore Pvt. Ltd.",
    description:
      "Official event portal and photo gallery for Kannadotsava (www.kannadotsava.com), celebrating Karnataka culture and arts.",
    url: "https://www.newlinktec.com/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
