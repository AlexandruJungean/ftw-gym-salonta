import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

// Local Business structured data for Google
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    '@id': 'https://fitworldgym.ro/#organization',
    name: 'FitWorld Gym Salonta',
    alternateName: 'FitWorld Gym',
    description:
      'Sală de fitness modernă în Salonta cu antrenori profesioniști, echipamente de ultimă generație și programe personalizate de antrenament.',
    url: 'https://fitworldgym.ro',
    logo: 'https://fitworldgym.ro/Logo-Fitworld-Gym.svg',
    image: 'https://fitworldgym.ro/og-image.jpg',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Gyorgy Kulin 37',
      addressLocality: 'Salonta',
      addressRegion: 'Bihor',
      postalCode: '415500',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.7972974,
      longitude: 21.663244,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'RON',
    paymentAccepted: 'Cash, Card',
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.tiktok,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Abonamente Fitness',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abonament lunar',
            description: 'Acces nelimitat la sala de fitness pentru 30 de zile',
          },
          price: '140',
          priceCurrency: 'RON',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abonament 3 luni',
            description: 'Acces nelimitat la sala de fitness pentru 90 de zile',
          },
          price: '350',
          priceCurrency: 'RON',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb structured data
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://fitworldgym.ro${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ structured data (for pages with FAQs)
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
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

