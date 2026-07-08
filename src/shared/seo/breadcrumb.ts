const BASE_URL = "https://mmalabugin.ru";

export type Crumb = { name: string; path: string };

// Собирает BreadcrumbList schema.org из списка «крошек».
// Позиция нумеруется с 1, item — абсолютный URL.
export const breadcrumbJsonLd = (items: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.path}`,
  })),
});
