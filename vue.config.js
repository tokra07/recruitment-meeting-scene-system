const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://jy.chifengrencai.com//ledapi',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
    allowedHosts: 'all',
    client: { overlay: false }
  }
})
