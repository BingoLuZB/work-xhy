
//2021-02-07 19:23:10
var game= "三国"
var list = {"三国/js/customlib.min":"./inputGame/三国/js/customlib.min.js","三国/loading":"./inputGame/三国/loading.js"}
var mjConfig = {"obfuscatorType":"1","stringArrayThreshold":0.5,"stringArrayEncoding":"base64","identifierNamesGenerator":"mangled","miniGameType":"1","version":"1.0.2","gameAbbr":"SG","mjNum":"1","appid":"wx123sadasdqw"}

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
