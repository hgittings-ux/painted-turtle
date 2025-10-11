/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  trailingSlash: false,
  // Remove standalone output for Vercel (Vercel handles this automatically)
  // output: 'standalone', // Commented out for Vercel deployment
};

module.exports = nextConfig; 