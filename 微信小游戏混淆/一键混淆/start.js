const fs = require('fs');
const readline = require('readline');
const cp = require('child_process');
var path = require('path')
const {
    inputGame,
    modules,
    webpackName,
    aftermathName
} = require('./allConfig.js')
const http = require("http");
const querystring = require('querystring')
const httpUrl = 'localhost'
const {
    showAlert,
    rf,
    wf
} = require('./nodeUtil')
// package.json要替换的key 跟 value
const jsonCopyStr = {
    key: 'newBuild-key',
    value: 'newBuild-value'
}
// 用户选择的配置
let inputConfig = {
    '三国': {
        game: '三国',
        file: {
            // '三国/js/customlib.min': './inputGame/三国/js/customlib.min.js',
            // '三国/package1/main': './inputGame/三国/package1/main.js',
            '三国/loading': './inputGame/三国/loading.js',
        },
        idObj: {
            '1': 'wx123sadasdqw'
        },
        obfuscatorObj: {
            obfuscatorType: '1',
            stringArrayThreshold: 0.5,
            stringArrayEncoding: 'base64',
            identifierNamesGenerator: 'mangled',
            miniGameType: '1',
            version: '1.0.2',
            gameAbbr: 'SG'
        }
    }
}
// let inputConfig = {}



init()



// 初始化
async function init() {
    // 打开网页，并拿到用户输入的数据
    try {
        // inputConfig = await openHtml()
        console.log(inputConfig, '===inputConfig');
        changePackageJson()
    } catch (error) {
        console.error(error, '===error`')
    }
}


// 用浏览器打开index.html
function openHtml() {
    let fileNames = fs.readdirSync(inputGame)
    // 打开html
    return new Promise((resolve, reject) => {
        http.createServer((req, res) => {
            fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/plain");
                    res.end("Not Found!");
                    reject()
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data);
                }
            });
        }).listen(3000, "localhost", () => {
            console.log("Successfully");
            cp.exec(`start http://${httpUrl}:3000`);
        });
        // 接收请求
        http.createServer(function (req, res) {
            if (req.url !== "/favicon.ico") {
                req.on('data', function (data) {
                    let inputConfig = {}
                    let resData = decodeURIComponent(data)
                    console.log("服务器接收到的数据：　" + resData);
                    resData = querystring.parse(resData);
                    if (typeof resData.game !== 'string' && resData.game.length > 1) {
                        // 如果有多个打包配置
                        for (let i = 0; i < resData.game.length; i++) {
                            let obj = {}
                            for (let j in resData) {
                                obj[j] = resData[j][i]
                            }
                            inputConfig[obj.game] = obj
                        }
                    } else {
                        // 如果只有1个打包配置
                        inputConfig[resData.game] = resData
                    }
                    for (let i in inputConfig) {
                        // 先判断inputGame目录下有没有用户输入的游戏
                        if (fileNames.includes(i)) {
                            // 这里的item是某个游戏的配置的对象
                            let item = inputConfig[i]
                            let obfuscatorObj = {}
                            for (let j in item) {
                                switch (j) {
                                    case 'game':
                                        break
                                        // 处理要混淆文件的格式
                                    case 'file':
                                        let arr = item[j].split('\r\n')
                                        let game = i
                                        let fileObj = {}
                                        arr.forEach((item2, index) => {
                                            // 这里的item2是file之后分割字符串
                                            let finalFile = ''
                                            if (item2.includes(':')) {
                                                // 如果混淆的不是根目录的文件
                                                let fileStr = item2.split(':')
                                                let dir = fileStr[0]
                                                let file = fileStr[1]
                                                if (file.includes(',')) {
                                                    // 如果某个目录下要混淆多个文件
                                                    let fileArr = file.split(',')
                                                    fileArr.forEach((item3, index) => {
                                                        // 这里的item3是某个js文件
                                                        let afterDelJs = item3.split('.js')
                                                        finalFile = `./${inputGame}/${game}/${dir}/${afterDelJs[0]}`
                                                        fileObj[finalFile] = `${finalFile}.js`
                                                    })
                                                } else {
                                                    // 如果某个目录下要混淆某个文件
                                                    let finalFile = file.split('.js')[0]
                                                    finalFile = `./${inputGame}/${game}/${dir}/${finalFile}`
                                                    fileObj[finalFile] = `${finalFile}.js`
                                                }
                                            } else {
                                                // 如果混淆的是根目录的文件
                                                finalFile = `./${inputGame}/${game}/${item2.split('.js')[0]}`
                                                fileObj[finalFile] = `${finalFile}.js`
                                            }
                                        })
                                        item.file = fileObj
                                        break;
                                        // 把用户输入的游戏id appid 变成数组
                                    case 'idObj':
                                        let idStr = item[j].split('\r\n')
                                        let idObj = {}
                                        idStr.forEach((item, index) => {
                                            let str = item.split(':')
                                            let key = str[0]
                                            let value = str[1]
                                            idObj[key] = value
                                        })
                                        item[j] = idObj
                                        break;
                                    default:
                                        // 把game file idArr以外的混淆配置放到obfuscatorObj里面去
                                        obfuscatorObj[j] = item[j]
                                        delete item[j]
                                }
                            }
                            item.obfuscatorObj = obfuscatorObj
                        } else {
                            showAlert(`${inputGame}目录下没有游戏：${i}`)
                            return false
                        }
                    }
                    resolve(inputConfig)
                });
                req.on("end", function () {
                    console.log('客户端请求数据全部接收完毕');
                });
            }
            res.end();
        }).listen(8080, httpUrl, function () {
            console.log("listened");
        });
    })
}


// 新增webpack.config-id.js aftermath-id.js package.json
async function changePackageJson() {
    // 读取config里面的配置文件
    // let allStr = "concurrently "
    let allStr = ""
    for (let i in inputConfig) {
        // itemI 某个游戏的配置
        let itemI = inputConfig[i]
        for (let j in itemI.idObj) {
            let list = JSON.stringify(itemI.file)
            let mjConfig = JSON.stringify({...itemI.obfuscatorObj, ...{mjNum: j, appid: itemI.idObj[j]}})
            const configData = `\r\n//${getDate()}\r\nvar game= "${i}"\r\nvar list = ${list}\r\nvar mjConfig = ${mjConfig}\r\n`
            // 追加记录 config.${id}.js
            // 把配置都放到config对应的游戏id的js里面去
            wf(`config/config.${j}.js`, configData, 'as')
            // 新建webpack.config-${id}.js
            // const webpackData = fs.readFileSync(`./${allConfig.modules}/webpack.config.js`, 'utf-8')
            const webpackData = await rf(`./${modules}/${webpackName()}`)
            const data = configData + webpackData;
            wf(webpackName(j), data, 'w+')

            // 新建afterMath-${id}.js，处理压缩json，复制小游戏文件夹，添加壳，改小游戏参数
            const afterMathDa = await rf(`./${modules}/${aftermathName()}`)
            const data2 = configData + afterMathDa
            wf(aftermathName(j), data2, 'w+')

            // 拼接package.json里面的要跑的字符串
            let webpackStr = `set NODE_ENV=build&webpack --config ${webpackName(j)} && node ${aftermathName(j)} &&`
            allStr += webpackStr
        }
    }
    // 配置package.json
    allStr = allStr.substr(0, allStr.lastIndexOf('&&'))
    // let packageJsonData = fs.readFileSync(`./${allConfig.modules}/package.json`, 'utf-8')
    let packageJsonData = await rf(`./${modules}/package.json`)
    if (packageJsonData) {
        packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
        await wf('package.json', packageJsonData)
        console.log('混淆即将开始！');
    }
}

// 获取当前详细日期
function getDate() {
    var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}
