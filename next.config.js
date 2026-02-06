/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'favicon.im',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        }
      ],
    },
  };
  
  module.exports = nextConfig; // ✅ OK pour .js
  