const path = require("path");
//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 项目配置
module.exports = {
  // 配置@
  chainWebpack: config => {
    // config.resolve.alias.set("@", resolve("src/"));
    // .set('@components', resolve('src/components'))
    // .set('@static', resolve('src/static'))
  },
  // 配置sass
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [
        // 要公用的scss的路径
        path.resolve(__dirname, "./src/common/styles/*.scss")
      ]
    }
  },
  // 跨域
  // proxy: {
  // "/api": {
  // 	target: "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
  // 	secure: false,
  // 	changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
  // 	// ws: true, // 是否启用websockets
  // 	pathRewrite: {
  // 		"^/api": "/"
  // 	}
  // }
  // },
  // devServer: {
  // 	port: 3301,
  // 	compress: true,
  // 	disableHostCheck: true
  // },
  //关闭eslint
  lintOnSave: false
};
