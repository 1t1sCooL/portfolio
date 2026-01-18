import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const usePerformanceMode = () => {
  const [performanceMode, setPerformanceMode] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      hardwareConcurrency?: number;
    };
    const isLowPower =
      (nav.hardwareConcurrency || 4) < 4 || (nav.deviceMemory || 8) < 4;

    if (isLowPower) {
      setPerformanceMode(true);
    }
  }, []);

  return performanceMode;
};
