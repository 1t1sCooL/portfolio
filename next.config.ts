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
    // AVIF на ~20-30% меньше WebP; браузер выберет первый поддерживаемый формат.
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
