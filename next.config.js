/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',        // Allows ANY website
        pathname: '/**',       // Allows ANY folder or file
      },
    ],
  },
};

module.exports = nextConfig;
