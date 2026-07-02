"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

const METRIKA_ID = 110346721;

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

export function YandexMetrika() {
  return (
    <>
      {/* afterInteractive: не блокирует рендер и не влияет на LCP/CLS */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

          ym(${METRIKA_ID}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>
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
