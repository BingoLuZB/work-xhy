
//appid=wxasdsad21112 2021-02-03 19:59:53
var list = {"三国/js/customlib.min":"./inputGame/三国/js/customlib.min.js"}
var mjConfig = {"obfuscatorType":"1","stringArrayThreshold":0.5,"stringArrayEncoding":"base64","identifierNamesGenerator":"mangled","miniGame":"0"}
// 更改混淆方式
const fs = require('fs');
const allConfig = require('./allConfig.js')
let code = fs.readFileSync(`./${allConfig.obfuscatorCode}/${mjConfig.obfuscatorType}.js`, 'utf-8')
fs.writeFileSync('node_modules/_javascript-obfuscator@0.18.8@javascript-obfuscator/dist/index.js', code)

const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

// 配置
const config = require(`./${allConfig.modules}/defaultConfig.js`)

// 更改当前的特定配置
let nameList = []
Object.keys(list).forEach((item,index) => {
  item = checkStr(item)
  nameList.push(item)
})
let filename= __filename.split("\\").pop();
let myNum = filename.replace('.js', '').split('-')[1]

mjConfig.nameList = nameList
mjConfig.myNum = myNum

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
// 获取入口文件路径集合
// function getEntryPath(getNames) {
//     console.log(process.argv, '=====test')
//     let obj = list
//     const entryFolderArr = Object.keys(obj);
//     ``
//     let entryPath = {};
//     let nameArr = []
//     entryFolderArr.map(item => {
//         for (const key in obj[item]) {
//             entryPath[`${item}/${key}`] = obj[item][key]
//             if (key.includes('.')) {
//                 nameArr.push(key.split('.')[0])
//             } else {
//                 nameArr.push(key)
//             }
//         }
//     })
//     if (getNames) {
//         console.log(nameArr, '=nameArr')
//         return nameArr
//     } else {
//         return entryPath;
//     }
// }
function checkStr(s) {
    var str = s.replace(/%/g, "").replace(/\+/g, "").replace(/\s/g, ""); //   %   +   \s 
    str = str.replace(/-/g, "").replace(/\*/g, "").replace(/\//g, ""); //   -   *   / 
    str = str.replace(/\&/g, "").replace(/!/g, "").replace(/\=/g, ""); //   &   !   = 
    str = str.replace(/\?/g, "").replace(/:/g, "").replace(/\|/g, ""); //   ?   :   | 
    str = str.replace(/\,/g, "").replace(/\./g, "").replace(/#/g, ""); //   ,   .   # 
    str = str.replace(/([^\u0000-\u00FF])/g, '') // 删除中文
    return str;
}

function getNumArr() {
    const obj = entry.path
    const arr = []
    for (let i in obj) {
        for (const key in obj[i]) {
            let end = key.lastIndexOf('/')
            let str = key.slice(end + 1, key.length)
            if (str.includes('.')) {
                str = str.slice(0, str.indexOf('.'))
            }
            arr.push(str)
        }
    }
    console.log(arr, '===nameArr')
    return arr
}