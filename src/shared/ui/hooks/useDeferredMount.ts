import { useState, useEffect } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/**
 * Откладывает монтаж тяжёлого компонента до момента, когда главный поток
 * освободится (`requestIdleCallback`) или пользователь начнёт взаимодействовать
 * со страницей (скролл / указатель / клавиатура / тач) — что наступит раньше.
 *
 * Нужен, чтобы убрать парсинг и инициализацию WebGL-фона (three.js, ~557 КБ)
 * из критического окна гидратации и снизить TBT/TTI.
 */
export const useDeferredMount = (idleTimeout = 2000): boolean => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let done = false;
    const interactionEvents = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
    ] as const;

    const idleWindow = window as IdleWindow;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    const cleanup = () => {
      interactionEvents.forEach((evt) =>
        window.removeEventListener(evt, trigger),
      );
      if (idleHandle !== undefined && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
    };

    const trigger = () => {
      if (done) return;
      done = true;
      cleanup();
      setReady(true);
    };

    interactionEvents.forEach((evt) =>
      window.addEventListener(evt, trigger, { passive: true, once: true }),
    );

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(trigger, {
        timeout: idleTimeout,
      });
    } else {
      timeoutHandle = setTimeout(trigger, idleTimeout);
    }

    return cleanup;
  }, [ready, idleTimeout]);

  return ready;
};
