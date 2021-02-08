
//2021-02-08 19:24:06
var game= "三国"
var list = {"三国/loading":"./inputGame/三国/loading.js"}
var mjConfig = {"gameAbbr":"SG","version":"1.0.1","obfuscatorType":"1","stringArrayThreshold":"0.5","stringArrayEncoding":"base64","identifierNamesGenerator":"mangled","miniGameType":"1","mjNum":"1","appid":"wx132165"}
// 更改混淆方式
const fs = require('fs');
const {
    obfuscatorCode,
    modules
} = require('./allConfig.js')
const {
    checkStr
} = require('./nodeUtil.js')
const {
    obfuscatorType,
    mjNum
} = mjConfig
let code = fs.readFileSync(`./${obfuscatorCode}/${obfuscatorType}.js`, 'utf-8')
fs.writeFileSync('node_modules/_javascript-obfuscator@0.18.8@javascript-obfuscator/dist/index.js', code)

const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

// 配置
const config = require(`./${modules}/defaultConfig.js`)

// 设置当前的特定配置mjConfig里面的 nameList

// nameList 用于混淆文件的代码命名
let nameList = []
Object.keys(list).forEach((item, index) => {
    nameList.push(checkStr(item))
    let gameEnd = item.indexOf('/')
    newItem = item.slice(0, gameEnd) + `/mj${mjNum}` + item.slice(gameEnd)
    list[newItem] = list[item]
    delete list[item]
})


mjConfig.nameList = nameList
mjConfig.stringArrayThreshold = mjConfig.stringArrayThreshold * 10 / 10

// 合成最终配置
const finalConfig = Object.assign(config, mjConfig)

console.log(finalConfig, '===finalConfig');
console.log(list, '===list');

module.exports = {
    entry: list,
    output: {
        filename: "[name].js", //输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, `dist`) //输出文件路径
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                },
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "dist")
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "justMySources")],
                enforce: 'post',
                use: {
                    loader: 'obfuscator-loader',
                    options: {
                        /* options here */
                    }
                }
            }
        ]
    },
    plugins: [
        new JavaScriptObfuscator(finalConfig, ['excluded_bundle_name.js']),
        // new CleanPlugin(['./dist'], {
        //     root: path.resolve(__dirname, ''),
        //     verbose: true,
        //     dry: false,
        // })
    ]
}
