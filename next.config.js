/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Global unoptimized for all external - fixes Wikimedia
  },
};

module.exports = nextConfig;
