import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '',
  trailingSlash: true,
};
// 123
export default nextConfig;