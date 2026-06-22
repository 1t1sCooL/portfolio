import type { MetadataRoute } from "next";

const BASE_URL = "https://mmalabugin.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
