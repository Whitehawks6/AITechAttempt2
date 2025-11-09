// next.config.js - Create this file in root if missing
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      // Add more if other external domains, e.g., for logo if hosted elsewhere
    ],
  },
};

module.exports = nextConfig;
