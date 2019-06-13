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
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'));
  }
}