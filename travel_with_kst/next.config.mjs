/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Only apply basePath when building for GitHub Pages production
  basePath: isProd ? '/travel-with-KST' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;