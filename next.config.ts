import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://192.168.0.103'],
  images: {
    domains: ['assets.nobroker.in', 'img.icons8.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  tracing: {
    ignoreRootSpans: true,
  },
};

export default nextConfig;
