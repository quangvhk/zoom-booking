module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/main.scss"',
      },
      scss: {
        additionalData: '@import "@/assets/styles/main.scss"',
      },
    }
  }
}
