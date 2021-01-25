const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
// 配置
console.log('test')
const mjNum = 32
const all = false
const config = require('./obfuscatorDefaultConfig')
const entry = require(`./config/entry.config_mj${mjNum}.js`);
const finalConfig = Object.assign(config, {
    stringArrayThreshold: entry.config.stringArrayThreshold || 0.6,
    stringArrayEncoding: entry.config.stringArrayEncoding || 'base64',
    identifierNamesGenerator: entry.config.identifierNamesGenerator || 'mangled',
    nameList: all ? getNumArr() : getEntryPath(true), //json文件列表
    isNeedOneJson: false, //是否需要合并一个json文件,
    isDelJsonList: true, //是否需要重置jsonList文件夹
    mjNum,
})

module.exports = {
    entry: all ? entry : getEntryPath(),
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
        new CleanPlugin(['./dist'], {
            root: path.resolve(__dirname, ''),
            verbose: true,
            dry: false,
        })
    ]
}
// 获取入口文件路径集合
function getEntryPath(getNames) {
    let obj = entry.path
    const entryFolderArr = Object.keys(obj);``
    let entryPath = {};
    let nameArr = []
    entryFolderArr.map(item => {
        for (const key in obj[item]) {
            entryPath[`${item}/${key}`] = obj[item][key]
            if (key.includes('.')) {
                nameArr.push(key.split('.')[0])
            } else {
                nameArr.push(key)
            }
        }
    })
    if (getNames) {
        console.log(nameArr, '=nameArr')
        return nameArr
    } else {
        return entryPath;
    }
}

function getNumArr() {
    const obj = entry.path
    const arr = []
    for(let i in obj) {
        for (const key in obj[i]) {
            let end = key.lastIndexOf('/')
            let str = key.slice(end + 1, key.length)
            if(str.includes('.')) {
                str = str.slice(0, str.indexOf('.'))
            }
            arr.push(str)
        }
    }
    console.log(arr, '===nameArr')
    return arr
}


// 获取随机字母字符串 long为字符串长度
function randomStr(long) {
    let ruleStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let finalStr = ''
    for (let i = 0; i < long; i++) {
        let num = Math.floor(Math.random() * ruleStr.length)
        finalStr += ruleStr[num]
    }
    return finalStr
}