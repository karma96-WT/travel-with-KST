/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Creates the 'out' directory during build
  basePath: '/travel-with-KST', // Matches your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;