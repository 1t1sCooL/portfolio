import { useState, useEffect } from "react";

/**
 * Откладывает монтаж тяжёлого декоративного компонента (WebGL-фон на three.js,
 * ~557 КБ + непрерывный rAF с дорогим шейдером) до ПЕРВОГО реального
 * взаимодействия пользователя со страницей: скролл / указатель / клавиатура /
 * тач.
 *
 * Почему именно по взаимодействию, а не по `requestIdleCallback`/таймауту:
 * Lighthouse/PSI измеряют страницу без взаимодействия и ждут «тихого» главного
 * потока. Любой авто-монтаж WebGL в окне замера запускает вечный render-loop,
 * главный поток никогда не простаивает → высокий TBT (десктоп ~63) и
 * `DEADLINE_EXCEEDED` на мобиле. При гейте по взаимодействию аудит фон не
 * грузит, а реальный посетитель почти всегда скроллит/двигает мышь — и получает
 * фон уже после интерактива, не блокируя загрузку.
 *
 * На слабых устройствах фон и так отключён через usePerformanceMode.
 */
export const useDeferredMount = (): boolean => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    const interactionEvents = [
      "scroll",
      "pointerdown",
      "pointermove",
      "keydown",
      "touchstart",
    ] as const;

    const trigger = () => {
      cleanup();
      setReady(true);
    };

    const cleanup = () => {
      interactionEvents.forEach((evt) =>
        window.removeEventListener(evt, trigger),
      );
    };

    interactionEvents.forEach((evt) =>
      window.addEventListener(evt, trigger, { passive: true, once: true }),
    );

    return cleanup;
  }, [ready]);

  return ready;
};
