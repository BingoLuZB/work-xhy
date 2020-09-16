const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 入口配置
const entry = require('./config/entry.config_msct.js');
let all = false

module.exports = {
    entry: all ? enrty : getEntryPath(),
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
                        /* options here */ }
                }
            }
        ]
    },
    plugins: [
        new JavaScriptObfuscator({
            compact: true, //是否压缩成一行代码
            controlFlowFlattening: false, //是否启用代码控制流平整
            //  controlFlowFlatteningThreshold: 0.8, //转换将应用于任何给定节点的概率。
            //  deadCodeInjection: true, //是否启动死代码
            //  deadCodeInjectionThreshold: 0.6,//死代码大小, 
            disableConsoleOutput: false,
            splitStrings: true,
            identifiersPrefix: randomStr(2),
            identifierNamesGenerator: entry.config.identifierNamesGenerator || 'mangled', //数组短标识符
            //  identifierNamesGenerator:'mangled',  //数组短标识符
            //  identifierNamesGenerator:'hexadecimal', //数组长标识符
            log: true, //是否允许打印
            renameGlobals: true,
            rotateStringArray: true,
            selfDefending: false,
            stringArray: true,
            stringArrayThreshold: entry.config.stringArrayThreshold || 0.6,
            //  stringArrayThreshold:1, 
            unicodeEscapeSequence: false,
            transformObjectKeys: false, //是否启动对象健转换
            stringArrayEncoding: 'base64',
            //  stringArrayEncoding:'rc4',
            //  seed: 0.5,
            target: 'browser-no-eval',
            //  nameList: getNumArr()
            nameList: all ? getNumArr() : getEntryPath(true), //json文件列表
            isNeedOneJson: false //是否需要合并一个json文件
        }, ['excluded_bundle_name.js']),
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
    const entryFolderArr = Object.keys(obj);
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
        console.log(nameArr)
        return nameArr
    } else {
        return entryPath;
    }
}

function getNumArr() {
    let obj = entry
    let arr = []
    for (const key in obj) {
        let end = key.lastIndexOf('/')
        let str = key.slice(end + 1, key.length)
        arr.push(str)
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