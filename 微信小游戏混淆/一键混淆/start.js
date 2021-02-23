const fs = require('fs');
const cp = require('child_process');
const path = require('path');
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
    rf,
    wf,
    showAlert,
    getDate
} = require('./util')
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



init()



// 初始化
function init() {
    // 打开网页，并拿到用户输入的数据
    openHtml()
}


// 用浏览器打开index.html
function openHtml() {
    // 打开html
    http.createServer((req, res) => {
        fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Not Found!");
            } else {
                res.statusCode = 200;
                // res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
        if (req.url !== "/favicon.ico" && req.url.includes('/sendData')) {
            let inputConfig = []
            req.on('data', (data) => {
                inputConfig = transformData(data)
            });
            req.on("end", function () {
                console.log('客户端请求数据全部接收完毕', inputConfig);
                if (inputConfig.length > 0) {
                    changePackageJson(inputConfig)
                }
            });
            let status = inputConfig && inputConfig.length > 0 ? JSON.stringify({
                code: 200
            }) : JSON.stringify({
                code: 400
            })
            res.end(status);
        }
    }).listen(3000, httpUrl, () => {
        console.log("Successfully");
        cp.exec(`start http://${httpUrl}:3000`);
    });
    // 接收请求
    // http.createServer(function (req, res) {
    //     if (req.url !== "/favicon.ico") {
    //         let inputConfig = []
    //         req.on('data', (data) => {
    //             inputConfig = transformData(data)
    //         });
    //         req.on("end", function () {
    //             console.log('客户端请求数据全部接收完毕', inputConfig);
    //             if (inputConfig.length > 0) {
    //                 // changePackageJson(inputConfig)
    //             }
    //         });
    //     }
    //     res.end('please waiting');
    // }).listen(8080, httpUrl, function () {
    //     console.log("listened");
    // });
}

function transformData(data) {
    let outputArr = []
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
            outputArr.push(obj)
        }
    } else {
        // 如果只有1个打包配置
        outputArr.push(resData)
    }

    return outputArr.map((item, index, arr) => {
        // 这里的item是某个游戏的配置的对象
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
                    item.file = arr.reduce((last, item2, index, arr) => {
                        let str = `./${inputGame}${game}`
                        let filenName = item2.split(',')
                        filenName.map(item3 => {
                            let final = '', target = ''
                            if (item3.includes(':')) {
                                // 如果要混淆的不是根目录的文件
                                let fileSrc = item3.split(':')
                                let dir = fileSrc[0]
                                let file = fileSrc[1]
                                // replace(/\s*/g,"")去除空格
                                final = `${str}/${dir}/${file.replace('.js', '')}`.replace(/\s*/g, "")
                            } else {
                                // 如果混淆的是根目录的文件
                                final = `${str}/${item3.split('.')[0].replace(/\s*/g,"")}`
                            }
                            target = final.replace(`./${inputGame}`, '')
                            last[target] = `${final}.js`
                        })
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
                    // 把stringArrayThreshold  obfuscatorType转化为number类型
                case 'stringArrayThreshold':
                case 'obfuscatorType':
                    item[j] = item[j] * 100 / 100
                default:
                    // 把game file idArr以外的混淆配置放到obfuscatorObj里面去
                    obfuscatorObj[j] = item[j]
                    delete item[j]
            }
        }
        item.obfuscatorObj = obfuscatorObj
        return item
    })
}

// 新增webpack.config-id.js aftermath-id.js package.json
async function changePackageJson(inputConfig) {
    let fileNames = fs.readdirSync(inputGame)
    if (!inputConfig || inputConfig.length == 0) return false
    let allStr = ""
    for (let i = 0; i < inputConfig.length; i++) {
        // itemI 某个游戏的配置
        let itemI = inputConfig[i]
        if (!fileNames.includes(itemI.game)) {
            // 判断inputGame目录下有没有用户输入的游戏
            showAlert(`${inputGame}目录下没有游戏：${itemI.game}`)
            return false
        } else {
            // 判断要混淆的游戏，有没有填入的混淆文件
            let arr = Object.values(itemI.file)
            for (let q of arr) {
                if (!fs.existsSync(q)) {
                    showAlert(`找不到文件:${q}`)
                    return false
                }
            }
        }
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
    // 把所有要执行的webpack-config.${id}.js 跟 aftermath-${id}.js拼接起来,最后再把delete.js放在尾部，写入json的all里面
    let endStr = ' node end.js'
    allStr += endStr
    // allStr = allStr.substr(0, allStr.lastIndexOf('&&'))
    let packageJsonData = await rf(`./${modules}/package.json`)
    if (packageJsonData) {
        packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
        await wf('package.json', packageJsonData)
        console.log('混淆开始！');
        // 执行json里面的all
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