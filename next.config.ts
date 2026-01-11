import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `@use "@/app/styles/abstracts/_vars.scss" as v;`,
  },
};

export default nextConfig;
