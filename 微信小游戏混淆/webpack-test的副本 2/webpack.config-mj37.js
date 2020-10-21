const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

// 配置
const config = require('./obfuscatorDefaultConfig')

const list = {
    '三国37/js': {
        'customlib.min': './三国/js/customlib.min.js', //rc4
    },
    '三国37/package1': {
        // 'main': './三国/package1/main.js', //base64
    },
}

const mjConfig = {
    //改林泽数组
    stringArrayThreshold: 0.85,
    stringArrayEncoding: 'rc4',
    identifierNamesGenerator: 'hexadecimal',
    nameList: getEntryPath(true), //json文件列表 读取全部列表，写定的地址列表
    isNeedOneJson: false, //是否需要合并一个json文件,
    mjNum: 37,
}

const finalConfig = Object.assign(config, mjConfig)


module.exports = {
    entry: getEntryPath(),
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
    let obj = list
    const entryFolderArr = Object.keys(obj);
    ``
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