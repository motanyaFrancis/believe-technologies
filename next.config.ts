import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tailwind-kit.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
