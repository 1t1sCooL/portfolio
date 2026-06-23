const BASE_URL = "https://mmalabugin.ru";

// JSON-LD: Person + WebSite. Рендерится в SSR-HTML, поэтому краулеры
// (Google/Yandex) видят структурированные данные сразу, без гидрации.
const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Михаил Алабугин",
    alternateName: "Mikhail Alabugin",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    jobTitle: "Frontend-разработчик",
    description:
      "Frontend-разработчик в Москве и удалённо: Next.js, React, TypeScript. Разработка быстрых и доступных сайтов, аудит и ускорение (Core Web Vitals).",
    email: "mailto:mmalabugin@gmail.com",
    knowsAbout: [
      "Frontend-разработка",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Веб-производительность",
      "Core Web Vitals",
      "Доступность (a11y)",
      "SEO",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
    areaServed: [
      { "@type": "City", name: "Москва" },
      { "@type": "Country", name: "Россия" },
    ],
    sameAs: [
      "https://github.com/1t1sCooL",
      "https://career.habr.com/1t1scool",
      "https://t.me/ItIsCooL",
      "https://vk.com/1t1scool",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Михаил Алабугин — портфолио",
    url: BASE_URL,
    inLanguage: "ru-RU",
  },
];

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
  />
);
