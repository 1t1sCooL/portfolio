import type { Post, PostMeta } from "./types";
import { body as caseBody } from "./content/case-50-100";
import { body as slowBody } from "./content/pochemu-sajt-tormozit";
import { body as cwvBody } from "./content/chto-takoe-core-web-vitals";
import { body as hubBody } from "./content/mini-audity-6-sajtov";
import { body as skillboxBody } from "./content/audit-skillbox";
import { body as dodoBody } from "./content/audit-dodo-pizza";
import { body as skyengBody } from "./content/audit-skyeng";
import { body as lamodaBody } from "./content/audit-lamoda";
import { body as aviasalesBody } from "./content/audit-aviasales";
import { body as hhBody } from "./content/audit-hh";

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
  {
    slug: "mini-audity-6-sajtov",
    title: "6 известных сайтов через Lighthouse: все в красной зоне",
    description:
      "Прогнал 6 известных российских сайтов через Lighthouse: Dodo, hh, Aviasales, Skyeng, Skillbox, Lamoda. Mobile Performance 0–46 и что с этим делать.",
    date: "2026-06-21",
    cluster: "case",
    label: "Сводка",
    body: hubBody,
  },
  {
    slug: "audit-dodo-pizza",
    title: "Мини-аудит скорости Dodo Pizza: Performance 25 на мобайле",
    description:
      "Разбор скорости сайта Dodo Pizza по Lighthouse: TBT 1.2 с, 0 security-заголовков на сайте с оплатой. Что тормозит и как починить.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: dodoBody,
  },
  {
    slug: "audit-hh",
    title: "Мини-аудит скорости hh.ru: Speed Index 24 секунды",
    description:
      "Разбор скорости hh.ru по Lighthouse: Speed Index 23.9 с, vendor-бандл 318 КБ без brotli, CLS 0.14. Что замедляет и как ускорить.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: hhBody,
  },
  {
    slug: "audit-aviasales",
    title: "Мини-аудит скорости Aviasales: LCP 18 секунд",
    description:
      "Разбор скорости Aviasales по Lighthouse: LCP 18.4 с, Speed Index 20.3 с, TBT 2 с. Тяжёлый клиент блокирует главный поток — что делать.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: aviasalesBody,
  },
  {
    slug: "audit-skyeng",
    title: "Мини-аудит скорости Skyeng: Speed Index 11 секунд",
    description:
      "Разбор скорости Skyeng по Lighthouse: Speed Index 11.3 с, TBT 1.2 с, Accessibility 71. Узкое место для конверсии и доступности.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: skyengBody,
  },
  {
    slug: "audit-skillbox",
    title: "Мини-аудит скорости Skillbox: LCP 19.6 секунды",
    description:
      "Разбор скорости Skillbox по Lighthouse: LCP 19.6 с и FCP 8.5 с на мобайле. Почему edtech теряет мобильных пользователей и как это чинить.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: skillboxBody,
  },
  {
    slug: "audit-lamoda",
    title: "Мини-аудит скорости Lamoda: признаки очень тяжёлого клиента",
    description:
      "Разбор скорости Lamoda по Lighthouse: экстремальные значения LCP и CLS. Что это значит и почему такие числа надо перепроверять.",
    date: "2026-06-21",
    cluster: "case",
    label: "Мини-аудит",
    body: lamodaBody,
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
