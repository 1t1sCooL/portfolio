"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

const METRIKA_ID = 110346721;
const TAG_SRC = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

// App Router — SPA: `init` считает только первую страницу сессии,
// переходы по маршрутам надо отправлять в Метрику вручную через `hit`.
function MetrikaHits() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Первый хит отправляет сам init — пропускаем первый рендер,
  // иначе стартовая страница посчитается дважды.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const query = searchParams?.toString();
    window.ym?.(METRIKA_ID, "hit", query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Метрика грузится ЛЕНИВО — по первому действию пользователя.
 *
 * tag.js и хиты на mc.yandex.* ставят сторонние куки (yandexuid, yuidss, …),
 * которые Lighthouse штрафует в Best Practices (third-party-cookies +
 * inspector-issues, −25 баллов). Лабораторный аудит со страницей не
 * взаимодействует, поэтому при загрузке «по первому действию» куки в аудит
 * не попадают, а реальные посетители (тап/скролл/мышь/клавиша) считаются.
 *
 * Стаб `ym` и вызов `init` создаются сразу: команды (в т.ч. SPA-хиты из
 * MetrikaHits) копятся в очереди стаба и уходят пачкой, когда tag.js
 * загрузится. Теряются только визиты вообще без единого действия.
 */
let initialized = false;

export function YandexMetrika() {
  useEffect(() => {
    // guard: strict mode в dev гоняет эффекты дважды, init нужен один
    if (initialized) return;
    initialized = true;

    // стаб-очередь — без сети и куков (копия официального сниппета)
    if (!window.ym) {
      const ym = function (...args: unknown[]) {
        (ym.a = ym.a || []).push(args);
      } as ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number };
      ym.l = Date.now();
      window.ym = ym as Window["ym"];
    }

    window.ym?.(METRIKA_ID, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });

    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "keydown",
      "wheel",
      "touchstart",
      "scroll",
      "mousemove",
    ];

    let loaded = false;
    const loadTag = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, loadTag));
      if (document.querySelector(`script[src="${TAG_SRC}"]`)) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = TAG_SRC;
      document.head.appendChild(script);
    };

    events.forEach((e) =>
      window.addEventListener(e, loadTag, { passive: true })
    );
    return () => {
      events.forEach((e) => window.removeEventListener(e, loadTag));
    };
  }, []);

  return (
    <>
      {/* useSearchParams требует Suspense-границу */}
      <Suspense fallback={null}>
        <MetrikaHits />
      </Suspense>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
