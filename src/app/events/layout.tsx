import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kannadotsava Marathon 2026 | New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Official event details for Kannadotsava Marathon 2026 (www.kannadotsava.com) taking place on Saturday, 19 December 2026 at Bangalore University, Bengaluru. 3K Walk & 5K Run celebrating Kannada language and heritage. Strategic Partner: New Link Technologies Bangalore Pvt. Ltd.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Kannadotsava Marathon 2026 – www.kannadotsava.com | New Link Technologies",
    description:
      "Join the Kannadotsava Marathon 2026 at Bangalore University on 19 December 2026. 3K Walk & 5K Run celebrating Kannada culture. Registration package includes T-shirt, Medal & Certificate.",
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
