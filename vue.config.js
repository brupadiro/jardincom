const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
})
