const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  transpileDependencies: ['vue-clamp', 'resize-detector'],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@libs', resolve('src/libs'))
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/php': {
        target: 'https://www.edaili.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/php': ''
        }
      },
      '/java': {
        target: 'https://www.edaili.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/java': ''
        }
      }
    }
  }
}
