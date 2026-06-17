"use client";

import dynamic from "next/dynamic";
import { usePerformanceMode } from "@/shared/ui";
import { useDeferredMount } from "@/shared/ui/hooks/useDeferredMount";
import type { ComponentProps } from "react";

const PixelBlast = dynamic(
  () => import("@/shared/ui").then((mod) => mod.Background),
  {
    ssr: false,
  },
);

type BackgroundProps = ComponentProps<typeof PixelBlast>;

export const ClientBackground = (props: BackgroundProps) => {
  const performanceMode = usePerformanceMode();
  const mounted = useDeferredMount();

  if (performanceMode) {
    return null;
  }

  // Откладываем загрузку и инициализацию three.js (~557 КБ) до простоя
  // главного потока или первого взаимодействия пользователя — это убирает
  // тяжёлый WebGL из критического окна гидратации (рычаг по TBT/TTI).
  if (!mounted) {
    return null;
  }

  return (
    <PixelBlast
      {...props}
      antialias={props.antialias}
      enableRipples={props.enableRipples}
      liquid={props.liquid}
      maxPixelRatio={props.maxPixelRatio}
    />
  );
};
