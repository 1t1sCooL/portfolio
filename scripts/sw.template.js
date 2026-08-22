/*
 * Service worker mmalabugin.ru — ШАБЛОН.
 * public/sw.js генерируется из этого файла на prebuild
 * (scripts/generate-sw.mjs): __BUILD_VERSION__ заменяется меткой сборки.
 * Руками public/sw.js не править.
 *
 * ВАЖНО: scope = "/" — воркер контролирует весь origin, включая
 * лендинги (/react-quiz, /DayOnEarth, ...), /invest и /lavka.
 * Поэтому стратегии консервативные:
 *  - HTML (навигации) — stale-while-revalidate: из кеша сразу, свежая
 *    версия качается в фоне и будет показана при следующей загрузке;
 *  - хешированные ассеты (/_next/static, /assets) — cache-first (immutable);
 *  - картинки/шрифты — stale-while-revalidate / cache-first с лимитом записей;
 *  - всё под /api/ и не-GET запросы не перехватываются вообще.
 *
 * Кеши имеют префикс PREFIX: на activate удаляются ТОЛЬКО наши кеши
 * прошлых сборок, чужие кеши этого origin (если появятся) не трогаем.
 */

const VERSION = "__BUILD_VERSION__";
const PREFIX = "mm-root-";

const PRECACHE = `${PREFIX}precache-${VERSION}`;
const PAGES = `${PREFIX}pages-${VERSION}`;
const STATIC = `${PREFIX}static-${VERSION}`;
const IMAGES = `${PREFIX}images-${VERSION}`;
const FONTS = `${PREFIX}fonts-${VERSION}`;

const ACTIVE_CACHES = [PRECACHE, PAGES, STATIC, IMAGES, FONTS];

const OFFLINE_URL = "/offline.html";

const IMAGE_MAX_ENTRIES = 100;
const FONT_MAX_ENTRIES = 30;
const PAGES_MAX_ENTRIES = 30;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      // cache: "reload" — мимо HTTP-кеша браузера, чтобы в кеш
      // попала свежая версия, а не протухшая копия
      const pages = await caches.open(PAGES);
      await pages.add(new Request("/", { cache: "reload" }));
      const precache = await caches.open(PRECACHE);
      await precache.addAll([
        new Request(OFFLINE_URL, { cache: "reload" }),
        new Request("/manifest.webmanifest", { cache: "reload" }),
      ]);
      // не ждём закрытия вкладок — новая сборка активируется сразу
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // navigation preload: сеть стартует параллельно с запуском воркера
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      // сносим наши кеши от прошлых сборок
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith(PREFIX) && !ACTIVE_CACHES.includes(key))
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/** Простейший LRU: если записей больше лимита — удаляем самые старые. */
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  await Promise.all(
    keys.slice(0, keys.length - maxEntries).map((key) => cache.delete(key))
  );
}

/**
 * Навигации (HTML): stale-while-revalidate.
 * Есть кеш — отдаём его мгновенно, свежую страницу качаем в фоне;
 * пользователь увидит её при следующей перезагрузке.
 * Кеша нет — идём в сеть, офлайн — offline.html.
 */
async function handleNavigation(event) {
  const request = event.request;
  const pages = await caches.open(PAGES);
  const cached = await pages.match(request);

  const revalidate = (async () => {
    try {
      const preload = event.preloadResponse
        ? await event.preloadResponse
        : null;
      const response = preload || (await fetch(request));
      if (response && response.ok) {
        await pages.put(request, response.clone());
        await trimCache(PAGES, PAGES_MAX_ENTRIES);
      }
      return response;
    } catch {
      return undefined;
    }
  })();

  if (cached) {
    event.waitUntil(revalidate);
    return cached;
  }

  const response = await revalidate;
  return (
    response ||
    (await caches.match(OFFLINE_URL)) ||
    new Response("Офлайн", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  );
}

/** Cache-first: для контент-хешированных ассетов сеть нужна один раз. */
async function cacheFirst(request, cacheName, maxEntries) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
    if (maxEntries) trimCache(cacheName, maxEntries);
  }
  return response;
}

/** Stale-while-revalidate: отдаём из кеша сразу, в фоне обновляем. */
async function staleWhileRevalidate(event, cacheName, maxEntries) {
  const request = event.request;
  const cached = await caches.match(request);
  const networkUpdate = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        const cache = await caches.open(cacheName);
        await cache.put(request, response.clone());
        if (maxEntries) trimCache(cacheName, maxEntries);
      }
      return response;
    })
    .catch(() => undefined);
  if (cached) {
    event.waitUntil(networkUpdate);
    return cached;
  }
  const response = await networkUpdate;
  return (
    response ||
    new Response("", { status: 504, statusText: "Gateway Timeout" })
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // API никогда не кешируем и не перехватываем (включая /invest/api и т.п.)
  if (url.pathname.split("/").includes("api")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  // Хешированные бандлы Next (/_next/static) и Vite (/assets) — immutable
  if (
    url.pathname.includes("/_next/static/") ||
    url.pathname.includes("/assets/")
  ) {
    event.respondWith(cacheFirst(request, STATIC));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(staleWhileRevalidate(event, IMAGES, IMAGE_MAX_ENTRIES));
    return;
  }

  if (request.destination === "font") {
    event.respondWith(cacheFirst(request, FONTS, FONT_MAX_ENTRIES));
    return;
  }

  if (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "manifest"
  ) {
    event.respondWith(staleWhileRevalidate(event, STATIC));
  }
});
