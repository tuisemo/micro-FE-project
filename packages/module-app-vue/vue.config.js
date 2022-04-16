const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
