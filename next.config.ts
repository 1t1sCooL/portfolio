import type { NextConfig } from "next";
import path from "path";

// React в dev-режиме (Turbopack) использует eval() для отладки → нужен
// 'unsafe-eval' ТОЛЬКО локально. В проде eval не применяется, CSP строгий.
const isDev = process.env.NODE_ENV !== "production";

// Яндекс.Метрика (счётчик + Вебвизор): официальный набор CSP-источников —
// https://yandex.ru/support/metrica/code/install-counter-csp.html
// mc.yandex.com — не опечатка: tag.js грузится с .ru, но хиты (watch/…)
// Метрика шлёт на .com-домен.
const metrika = {
  script: "https://mc.yandex.ru https://mc.yandex.com https://yastatic.net",
  img: "https://mc.yandex.ru https://mc.yandex.com",
  connect:
    "https://mc.yandex.ru https://mc.yandex.com wss://mc.yandex.ru wss://mc.yandex.com",
  frame: "blob: https://mc.yandex.ru https://mc.yandex.com",
};

const scriptSrc = isDev
  ? `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${metrika.script}`
  : `script-src 'self' 'unsafe-inline' ${metrika.script}`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: blob: ${metrika.img}`,
      "font-src 'self'",
      `connect-src 'self' ${metrika.connect}`,
      // Вебвизор/карта кликов проигрывают сайт в iframe интерфейса Метрики —
      // разрешаем framing только её доменам (clickjacking по-прежнему закрыт).
      "frame-ancestors https://metrika.yandex.ru https://webvisor.com",
      `child-src ${metrika.frame}`,
      `frame-src ${metrika.frame}`,
      // Без явного worker-src браузер берёт child-src, где нет 'self', —
      // и блокирует регистрацию /sw.js. blob: — для воркеров Вебвизора.
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactCompiler: true,
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `@use "@/app/styles/abstracts/_vars.scss" as v;`,
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    // Только WebP. AVIF-энкод больших исходников PNG (превью до ~2900px/1.9МБ)
    // на слабом k3s-поде ЗАВИСАЕТ и таймаутит (>25с, 0 байт) — на мобиле, где
    // браузер просит холодные варианты w=384/750, картинки не грузились вовсе.
    // WebP кодируется ~1.4с, поддерживается везде (включая Safari iOS 14, где
    // AVIF не декодится). Разница в весе (~20-30%) для lazy-превью несущественна.
    formats: ["image/webp"],
    // Превью проектов неизменны — держим оптимизированные варианты в кэше 30 дней
    // (по умолчанию было 4 часа), чтобы не пере-кодировать на каждый промах.
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // сам воркер не кешируем — иначе обновления SW застревают
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/offline.html",
        headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        // иконки PWA меняются редко, но имена не хешированы — неделя + SWR
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
      {
        // превью проектов: имена без хеша, контент может обновляться —
        // сутки свежести + неделя stale-while-revalidate
        source: "/projects/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
