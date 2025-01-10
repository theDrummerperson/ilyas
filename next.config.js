/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    // Remove webpackBuildWorker as it's causing issues
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ilyasabukar.com',
      },
    ],
  },
  // Move webpack config under proper structure
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 70000,
        },
      };
    }
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;