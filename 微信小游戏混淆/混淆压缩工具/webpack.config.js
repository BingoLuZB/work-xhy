const path = require('path') //获取路径
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin') //优化js
const { CleanWebpackPlugin } = require("clean-webpack-plugin") //清除之前打包生成的文件
const webpack = require('webpack')
const entry = require('./config/index_mjcqOL.js')

// 获取入口文件路径集合
function getEntryPath(getNames) {
    console.log('执行内存设置已完成!混淆压缩开始...请等待...')
    const entryFolderArr = Object.keys(entry.path);
    let entryPath = {};
    let nameArr = []
    entryFolderArr.map(item => {
        for (const key in entry.path[item]) {
            entryPath[`${item}/${key}`] = entry.path[item][key]
            if (key.includes('.')) {
                nameArr.push(key.split('.')[0])              
            } else {
                nameArr.push(key)
            }
        }
    })
    if (getNames) {
        return nameArr
    } else {
        return entryPath;
    }
}

module.exports = {
    //优化项
    optimization:{
        minimizer:[
            new UglifyjsWebpackPlugin({//混淆压缩插件
                parallel: 1,//提高并行构建速度
                uglifyOptions: {//保持类名和函数名,根据需要开启
                    keep_classnames: true,
                    keep_fnames: true
                },
                cache: true, //缓存
                parallel: true, //并发打包，一次压缩多个
            }),
            new webpack.ProvidePlugin({//编译使用jquery
                $:'jquery'
            })
        ] 
    },
    mode : 'production',   //production 生产模式  development 开发模式
    entry : getEntryPath(), //打包入口
    // 打包出口
    output: {
        filename: "[name].js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, `dist`)//输出文件路径
    },
    plugins: [
        new webpack.LoaderOptionsPlugin(
            {
                minimize: true,
                debug: false,
                options: {
                context: __dirname
                }
            }
        ),
        new CleanWebpackPlugin()
    ],
    //webpack模块化
    module: {   
        //模块化规则
        rules:[
            //配置jQuery
            {
                  test:require.resolve('jquery'),
                  use:'expose-loader?$'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        compact:true,
                        // 大插件库
                        presets:[   //把ES6转为ES2
                            '@babel/preset-env'
                        ],
                        // 小插件库
                        plugins:[
                            ["@babel/plugin-proposal-decorators", { "legacy": true }], //装饰器转化插件
                            ["@babel/plugin-proposal-class-properties", { "loose": true }], //class转化插件
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include:path.resolve(__dirname,'src')
            }
        ]
    }
}