const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "header",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./scene": "./src/scenes/Header/Header.tsx",
        },
        remotes: {},
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
