/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  reactStrictMode: true,
  output: "export", // <-- OJO: Esto es lo que genera /out
});

module.exports = nextConfig;
