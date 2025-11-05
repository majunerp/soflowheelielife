import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.crazygames.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
