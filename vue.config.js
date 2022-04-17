const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // github blog ¼³Á¤
  outputDir: './docs',
  publicPath: '/kukujune.github.io/',

  // alias
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": path.join(__dirname, "/src"),
  //     },
  //   },
  // },

})
