const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // github blog ¼³Á¤
  outputDir: './docs',
  publicPath: '/kukujune.github.io/'
})
