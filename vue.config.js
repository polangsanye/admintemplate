const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
  publicPath: process.env.VUE_APP_URL, 
  outputDir:'./dist',
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

