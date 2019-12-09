module.exports = {
    // publicPath: '/',//publicPath取代了baseUrl
    // outputDir: 'dist',
    // lintOnSave: true,
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    // chainWebpack: () => {},
    // configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
    //   open: true,
    //   host: 'localhost',
    //   port: 8080,
    //   https: false,
    //   hotOnly: false,
      proxy: {
       '/api/': {
        target: 'http://116.62.201.175:8888',//这里写上后台的接口
        secure:false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
      }, // string | Object
    //   before: app => {}
    }
   }