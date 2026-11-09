/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/travel-with-KST' : '');

const nextConfig = {
  output: 'export', // Creates the 'out' directory during build
  basePath, // GitHub Pages uses /travel-with-KST; container deployments use the domain root.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
