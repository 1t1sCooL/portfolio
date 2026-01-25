"use client";

import dynamic from "next/dynamic";
import { usePerformanceMode } from "@/shared/ui";
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

  if (performanceMode) {
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
