const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]) // pass the modules you would like to see transpiled
const Dotenv = require('dotenv-webpack')

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '/',
  distDir: 'build',
  outDir: 'dist',
  webpack5: true,

  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },

  images: {
    loader: 'custom',
    disableStaticImages: false,
  },

  webpack: (config) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(
      new Dotenv({
        path: process.env.CONFIG_FILE,
        silent: true,
        systemvars: true,
      })
    )
        
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config
  },
})
