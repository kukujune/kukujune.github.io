const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // github blog ����
  outputDir: './docs',
  publicPath: '/kukujune.github.io/'
})
