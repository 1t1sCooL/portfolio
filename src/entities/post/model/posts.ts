import type { Post, PostMeta } from "./types";
import { body as caseBody } from "./content/case-50-100";
import { body as slowBody } from "./content/pochemu-sajt-tormozit";
import { body as cwvBody } from "./content/chto-takoe-core-web-vitals";

// Реестр статей. Метаданные типизированы (нужны для SEO/sitemap),
// тело — Markdown из отдельных модулей в ./content.
const POSTS: Post[] = [
  {
    slug: "case-50-100",
    title: "Кейс: ускорил сайт с 50 до 100 в PageSpeed (mobile)",
    description:
      "Как я поднял Performance сайта на Next.js с 50 до 100 на мобильных в реальном PageSpeed: TBT, CLS, brotli, AVIF. Реальные цифры и что делал.",
    date: "2026-06-22",
    cluster: "case",
    label: "Кейс",
    body: caseBody,
  },
  {
    slug: "pochemu-sajt-tormozit",
    title: "Почему сайт медленно загружается: 7 реальных причин",
    description:
      "7 частых причин, почему сайт тормозит: сервер, изображения, JS, шрифты, CLS, сторонние скрипты, сжатие — и что делать с каждой.",
    date: "2026-06-22",
    cluster: "guide",
    label: "Гайд",
    body: slowBody,
  },
  {
    slug: "chto-takoe-core-web-vitals",
    title: "Core Web Vitals простыми словами: LCP, CLS, INP",
    description:
      "Что такое Core Web Vitals (LCP, CLS, INP), какие значения считаются хорошими и как улучшить каждую метрику для SEO и конверсии.",
    date: "2026-06-22",
    cluster: "guide",
    label: "Гайд",
    body: cwvBody,
  },
];

const toMeta = ({ body: _body, ...meta }: Post): PostMeta => meta;

export const getAllPosts = (): PostMeta[] =>
  [...POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(toMeta);

export const getPostSlugs = (): string[] => POSTS.map((p) => p.slug);

export const getPostBySlug = (slug: string): Post | undefined =>
  POSTS.find((p) => p.slug === slug);
