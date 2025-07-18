const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: "standalone",

  // Strict mode helps catch bugs early
  reactStrictMode: true,

  // Improve static file serving
  poweredByHeader: false,

  // TypeScript/ESLint error handling during builds
  typescript: {
    // Handled by separate command in package.json
    ignoreBuildErrors: false,
  },

  eslint: {
    // Handled by separate command in package.json
    ignoreDuringBuilds: false,
  },

  // Font optimization configuration
  optimizeFonts: true,

  // Experimental features
  experimental: {
    // Enable modern optimizations
    optimizeCss: true,
    scrollRestoration: true,
  },

  //TODO::This is a temporary check. Remove this. Image should be optimized.
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
