import type { Metadata } from "next";

// Единый og:image для всех страниц. В App Router page-level `openGraph`
// НЕ наследует images от родителя — поэтому импортируем этот массив в каждую
// метадату (layout/audit/blog/blogpost), иначе на вложенных страницах og:image
// пропадает и соцпревью остаётся без картинки.
export const OG_IMAGES: NonNullable<
  NonNullable<Metadata["openGraph"]>["images"]
> = [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Михаил Алабугин — frontend-разработчик",
  },
];
