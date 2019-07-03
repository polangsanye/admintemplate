const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
  publicPath: './',
  outputDir: './dist',
  // devServer: {
  //   open: true, //自动打开浏览器
  //   host: 'localhost',
  //   port: 8080,
  //   proxy: {
  //     '/hb-mobile-api/*': {
  //       target: 'http://192.168.100.163:8080',
  //       changeOrign: true,
  //       secure: false
  //     }
  //   }
  // },
  // chainWebpack: config => {
  //   // 添加别名
  //   config.resolve = {
  //     extensions: ['.js', '.vue', '.json', ".css"],
  //     alias: {
  //       'vue$': 'vue/dist/vue.esm.js',
  //       '@': resolve('src'),
  //       'assets': resolve('src/assets'),
  //       'components': resolve('src/components'),
  //       'base': resolve('src/base'),
  //       'static': resolve('src/static')
  //     }
  //   }
  // }
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', ".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'assets': resolve('src/assets'),
         'components': resolve('src/components'),
         'base': resolve('src/base'),
         'static': resolve('src/static')
      }
    }
  },
}