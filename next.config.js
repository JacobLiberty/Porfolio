/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || process.env.ASSET_PREFIX || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: `${assetPrefix}/_next/static/media/`,
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig; 