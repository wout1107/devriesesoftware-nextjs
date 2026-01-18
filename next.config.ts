import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Enable standalone output for Docker production builds
  output: "standalone",
};

export default nextConfig;
