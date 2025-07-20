/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  trailingSlash: false,
  output: 'standalone',
};

module.exports = nextConfig; 