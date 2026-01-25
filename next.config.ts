import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactCompiler: true,
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `@use "@/app/styles/abstracts/_vars.scss" as v;`,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
