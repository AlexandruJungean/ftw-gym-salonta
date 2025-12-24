import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable image optimization for external images if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fitworldgym.ro',
      },
    ],
  },
};

export default nextConfig;
