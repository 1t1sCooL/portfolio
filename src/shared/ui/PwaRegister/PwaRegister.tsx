"use client";

import { useEffect } from "react";

export const PwaRegister = () => {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const register = async () => {
      try {
        // updateViaCache: "none" — браузер всегда проверяет sw.js по сети,
        // обновления воркера не застревают в HTTP-кеше
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        // проверяем обновления при возврате на вкладку
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            registration.update().catch(() => {});
          }
        });
      } catch {
        // SW — прогрессивное улучшение, падение регистрации не критично
      }
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
    }
  }, []);

  return null;
};
