/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Creates the 'out' directory during build
  basePath: process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '', // GitHub Pages prefix for production
  images: {
    unoptimized: true,
  },
};

export default nextConfig;