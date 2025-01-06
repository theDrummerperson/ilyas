/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ["ilyasabukar.com"],
    domains: ['images.unsplash.com']
  },
};

module.exports = nextConfig;