"use client";

import { useEffect, useState, type ComponentType, type ComponentProps } from "react";
import { usePerformanceMode } from "@/shared/ui/hooks/usePerformanceMode";
import { useDeferredMount } from "@/shared/ui/hooks/useDeferredMount";
import type { Background } from "./Background";

type BackgroundProps = ComponentProps<typeof Background>;

/**
 * Ленивый WebGL-фон (three.js, ~570 КБ).
 *
 * Почему НЕ `next/dynamic({ ssr:false })`: даже при рендере `null` до
 * взаимодействия Next.js **предзагружает** чанк ssr:false-компонента как
 * `<script async>` в initial HTML — three.js качался на критическом пути
 * главной и раздувал simulated LCP (Lighthouse), хотя render-loop и отложен.
 *
 * Решение: обычный динамический `import()` внутри эффекта — webpack всё равно
 * выносит three.js в отдельный чанк, но Next его НЕ предзагружает. Импорт
 * стартует только после первого взаимодействия (useDeferredMount), а на слабых
 * устройствах фон выключен через usePerformanceMode. В окне замера Lighthouse
 * (без взаимодействия) чанк не грузится вовсе.
 */
export const ClientBackground = (props: BackgroundProps) => {
  const performanceMode = usePerformanceMode();
  const mounted = useDeferredMount();
  const [Comp, setComp] = useState<ComponentType<BackgroundProps> | null>(null);

  useEffect(() => {
    if (performanceMode || !mounted || Comp) return;
    let alive = true;
    import("./Background").then((mod) => {
      if (alive) setComp(() => mod.Background);
    });
    return () => {
      alive = false;
    };
  }, [performanceMode, mounted, Comp]);

  if (performanceMode || !mounted || !Comp) {
    return null;
  }

  return <Comp {...props} />;
};
