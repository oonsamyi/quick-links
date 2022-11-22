// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  distDir: '../../dist/next',
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    scrollRestoration: true,
  },
}

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true })

  module.exports = withBundleAnalyzer(nextConfig)
} else {
  module.exports = nextConfig
}
