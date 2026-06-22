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
    jobTitle: "Frontend-разработчик",
    email: "mailto:mmalabugin@gmail.com",
    sameAs: [
      "https://github.com/1t1sCooL",
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
