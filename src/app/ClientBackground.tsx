"use client";

import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("@/shared/ui").then((mod) => mod.Background), {
    ssr: false,
});

export const ClientBackground = PixelBlast;
