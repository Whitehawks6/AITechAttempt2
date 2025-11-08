/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ←←← ADD THIS BLOCK ↓↓↓
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows ALL https images (safe for your use case)
      },
    ],
  },
  // ↑↑↑ END OF FIX
};

module.exports = nextConfig;
