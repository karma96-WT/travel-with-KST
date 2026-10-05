/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/travel-with-KST',
  images: {
    unoptimized: true,
  },
  // If your GitHub repo is named "travel_with_kst", set basePath:
  // basePath: '/travel_with_kst',
};

export default nextConfig;