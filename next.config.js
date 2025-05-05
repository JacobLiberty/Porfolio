/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || process.env.ASSET_PREFIX || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  distDir: 'out',
};

module.exports = nextConfig; 