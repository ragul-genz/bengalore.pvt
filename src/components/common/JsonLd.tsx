import React from "react";
import { COMPANY_DETAILS } from "@/data/company";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://www.newlinktec.com/#organization",
        name: COMPANY_DETAILS.name,
        alternateName: COMPANY_DETAILS.shortName,
        url: "https://www.newlinktec.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.newlinktec.com/logo/company-logo.png",
          caption: COMPANY_DETAILS.name,
        },
        image: "https://www.newlinktec.com/leadership/director-mg-girish.jpg",
        description: COMPANY_DETAILS.description,
        slogan: COMPANY_DETAILS.tagline,
        telephone: COMPANY_DETAILS.contact.phone,
        email: COMPANY_DETAILS.contact.email,
        founder: {
          "@type": "Person",
          name: COMPANY_DETAILS.leadership.director,
          jobTitle: COMPANY_DETAILS.leadership.role,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${COMPANY_DETAILS.contact.address.line1} ${COMPANY_DETAILS.contact.address.line2} ${COMPANY_DETAILS.contact.address.line3}`,
          addressLocality: COMPANY_DETAILS.contact.address.city,
          addressRegion: "Karnataka",
          postalCode: COMPANY_DETAILS.contact.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9868,
          longitude: 77.5534,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "18:30",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: [
          "Enterprise IT Infrastructure",
          "Modular Data Centre Installation",
          "Campus Optical Fiber Networking",
          "Structured Cabling & Rack Optimization",
          "Audio Visual & Boardroom Systems",
          "Auditorium Acoustic Solutions",
          "CCTV Surveillance & Access Control",
          "Solar Rooftop Power Plants",
          "Fire Alarm & Suppression Systems",
        ],
        sameAs: ["https://wa.me/919535314141"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.newlinktec.com/#website",
        url: "https://www.newlinktec.com",
        name: COMPANY_DETAILS.shortName,
        description: COMPANY_DETAILS.description,
        publisher: {
          "@id": "https://www.newlinktec.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

