const fs = require('fs');
const readline = require('readline');
const cp = require('child_process');
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
// let inputConfig = {
//     '三国': {
//         game: '三国',
//         file: {
//             // '三国/js/customlib.min': './inputGame/三国/js/customlib.min.js',
//             // '三国/package1/main': './inputGame/三国/package1/main.js',
//             '三国/loading': './inputGame/三国/loading.js',
//         },
//         idObj: {
//             '1': 'wx123sadasdqw'
//         },
//         obfuscatorObj: {
//             obfuscatorType: '1',
//             stringArrayThreshold: 0.5,
//             stringArrayEncoding: 'base64',
//             identifierNamesGenerator: 'mangled',
//             miniGameType: '1',
//             version: '1.0.2',
//             gameAbbr: 'SG'
//         }
//     }
// }
let inputConfig = {}



init()



// 初始化
async function init() {
    // 打开网页，并拿到用户输入的数据
    try {
        inputConfig = await openHtml()
        console.log(inputConfig, '===inputConfig');
        await changePackageJson()
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
                    let inputConfig = []
                    let resData = decodeURIComponent(data)
                    console.log("服务器接收到的数据：　" + resData);
                    resData = querystring.parse(resData);
                    if (typeof resData.game !== 'string' && resData.game.length > 1) {
                        // 如果有多个打包配置
                        // let gameName = Array.from(new Set(resData.game))
                        for (let i = 0; i < resData.obfuscatorType.length; i++) {
                            let obj = {}
                            for (let j in resData) {
                                obj[j] = resData[j][i]
                            }
                            inputConfig.push(obj)
                        }
                    } else {
                        // 如果只有1个打包配置
                        inputConfig.push(resData)
                    }
                    // 先判断inputGame目录下有没有用户输入的游戏
                    // if (fileNames.includes(i)) {
                    inputConfig.forEach(ArrItem => {
                        // 这里的item是某个游戏的配置的对象
                        let item = ArrItem
                        if (!fileNames.includes(item.game)) {
                            showAlert(`${inputGame}目录下没有游戏：${item.game}`)
                            return false
                        }
                        let obfuscatorObj = {}
                        for (let j in item) {
                            switch (j) {
                                case 'game':
                                    break
                                    // 处理要混淆文件的格式
                                case 'file':
                                    // 把 js:a.js,b.js 变成 游戏名/js/a.js, 游戏名/js/b.js
                                    let arr = item[j].split('\r\n')
                                    let game = item.game
                                    // let fileObj = {}
                                    item.file = arr.reduce((last, item, index, arr) => {
                                        let str = `./${inputGame}${game}`
                                        let filenName = item.split(':')
                                        let dir = filenName[0]
                                        let fileArr = filenName.length > 1 && filenName[1].split(',')
                                        if (fileArr) {
                                            // 如果混淆的不是根目录的文件
                                            fileArr.map((item, index, arr) => {
                                                // replace(/\s*/g,"")去除空格
                                                let final = `${str}/${dir}/${item.replace('.js', '')}`.replace(/\s*/g, "")
                                                let target = final.replace(`./${inputGame}`, '')
                                                last[target] = `${final}.js`
                                            })
                                        } else {
                                            // 如果混淆的是根目录的文件
                                            let final = `${str}/${filenName[0].split('.')[0].replace(/\s*/g,"")}`
                                            let target = final.replace(`./${inputGame}`, '')
                                            last[target] = `${final}.js`
                                        }
                                        return last
                                    }, {})
                                    break;
                                    // 把用户输入的游戏id appid 变成数组
                                case 'idObj':
                                    let idStr = item[j].split('\r\n')
                                    let idObj = {}
                                    idStr.map((item, index) => {
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
                    });
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
    for (let i = 0; i < inputConfig.length; i++) {
        // itemI 某个游戏的配置
        let itemI = inputConfig[i]
        for (let j in itemI.idObj) {
            let list = JSON.stringify(itemI.file)
            let mjConfig = JSON.stringify({
                ...itemI.obfuscatorObj,
                ...{
                    mjNum: j,
                    appid: itemI.idObj[j]
                }
            })
            const configData = `\r\n//${getDate()}\r\nvar game= "${itemI.game}"\r\nvar list = ${list}\r\nvar mjConfig = ${mjConfig}\r\n`
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
        cp.exec('npm run all', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`)
        })
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