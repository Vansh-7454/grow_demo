import { siteContent, FaqItem } from "@/data/siteContent";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    name: siteContent.business.name,
    legalName: siteContent.business.legalName,
    description: siteContent.business.shortDescription,
    url: siteContent.business.domain,
    telephone: siteContent.business.phoneRaw,
    priceRange: "₹₹",
    image: `${siteContent.business.domain}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.business.address,
      addressLocality: siteContent.business.city,
      addressRegion: siteContent.business.state,
      postalCode: siteContent.business.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4416",
      longitude: "77.0984",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "19:30",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Gurugram",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  // Only include confirmed FAQ items for schema compliance
  const confirmedFaqs = faqs.filter((faq) => faq.isConfirmed);

  if (confirmedFaqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: confirmedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
