// const pages = require('./utils/vue_multipage.js')
// const px2vw = require('postcss-px-to-viewport')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  // pages,
  outputDir: process.env.outputDir,
  devServer: {
    // proxy: {
    //   '^/api': {
    //     target: 'http://192.168.0.109',
    //     changeOrigin: true
    //   }
    // }
  }

}
