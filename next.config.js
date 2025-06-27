/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig