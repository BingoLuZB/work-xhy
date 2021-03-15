const fs = require('fs');
const cp = require('child_process');
const path = require('path')
const {
    inputGame,
    modules,
    webpackName,
    aftermathName,
    changeToolName,
    jsonCopyStr
} = require(path.join(__dirname, './common/allConfig.js'))
const {
    rf,
    wf,
    showAlert,
    getDate,
    encryptFn,
    rmdir,
    mkdirs
} = require(path.join(__dirname, './common/util'));
const compressing = require('compressing');
const http = require("http");
const querystring = require('querystring')
const formidable = require('formidable')
const httpUrl = '127.0.0.1'
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


// 用浏览器打开index.html,接收数据
function openHtml() {
    http.createServer((req, res) => {
        if (req.url !== "/favicon.ico" && req.url.includes('/sendData')) {
            let inputConfig = []
            var form = new formidable.IncomingForm();
            // 创建inputGame文件夹
            mkdirs(inputGame, () => {
                form.uploadDir = inputGame
                form.parse(req, function (err, fields, files) {
                    if (err) {
                        console.log(err, '===err')
                        res.writeHead(400, {
                            'Content-type': 'text/html;charset=utf-8'
                        })
                        res.end(JSON.stringify({
                            code: 400,
                            msg: err
                        }));
                    } else {
                        //field 表示普通控件
                        //files  表示文件控件
                        // console.log(fields, '====fields');
                        // console.log(files, '===files')
                        if (files) {
                            inputConfig = transformData(fields)
                            console.log(inputConfig, '=====inputConfig')
                            let filesL = Object.keys(files).length
                            let num = 1
                            for (let i in files) {
                                let value = files[i]
                                let gameId = fields[`idObj${num}`].split(':')[0]
                                let gameName = fields[`game${num}`]
                                let tarFile = `${inputGame}${gameName}-${gameId}`
                                // 压缩包重命名
                                fs.renameSync(value.path, `${tarFile}.zip`);
                                // 解压
                                compressing.zip.uncompress(`${tarFile}.zip`, `${inputGame}`, {
                                    zipFileNameEncoding: 'GBK'
                                }).then(() => {
                                    num++
                                    // 把解压出来的游戏文件夹重命名为 游戏-id（这是为了区分不同混淆游戏时候的混淆源码）
                                    try {
                                        fs.renameSync(`${inputGame}${gameName}`, tarFile);
                                    } catch (error) {
                                        console.error(error);
                                        rmdir(`${inputGame}${gameName}`, () => {
                                            fs.renameSync(`${inputGame}${gameName}`, tarFile);
                                        })
                                    }
                                    if (num - 1 == filesL && inputConfig) {
                                        changePackageJson(inputConfig)
                                        res.writeHead(200, {
                                            'Content-type': 'text/html;charset=utf-8'
                                        })
                                        res.end(JSON.stringify({
                                            code: 200,
                                            msg: '上报成功'
                                        }));
                                    }
                                });
                            }
                        }
                    }
                });
            })
            // req.on('data', (data) => {
            // inputConfig = transformData(data)
            // });
            // req.on("end", function () {
            //     console.log('客户端请求数据全部接收完毕', inputConfig);
            //     if (inputConfig.length > 0) {
            //         changePackageJson(inputConfig)
            //         let status = inputConfig && inputConfig.length > 0 ? JSON.stringify({
            //             code: 200
            //         }) : JSON.stringify({
            //             code: 400
            //         })
            //         res.write(status)
            //         res.end();
            //     }
            // });

            // 获取开发码
        } else if (req.url !== "/favicon.ico" && req.url.includes('/getStartCode')) {
            let resData = null
            req.on('data', (data) => {
                resData = querystring.parse(decodeURIComponent(data))
            });
            req.on("end", function () {
                let status = null
                if (resData && resData.author === 'BingoXhy') {
                    status = JSON.stringify({
                        code: 200,
                        statrCode: encryptFn(true)
                    })
                } else {
                    status = JSON.stringify({
                        code: 400,
                        msg: 'author was warn'
                    })
                }
                res.write(status)
                res.end();
            });
        } else {
            // 打开html
            fs.readFile('index.html', "utf-8", (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write("Not Found!");
                    res.end();
                } else {
                    res.statusCode = 200;
                    // res.setHeader("Content-Type", "text/html");
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data)
                    res.end();
                }
            });
        }
    }).listen(3000, httpUrl, () => {
        console.log("Successfully");
        cp.exec(`start http://${httpUrl}:3000`);
    });
}

//转化数据
function transformData(data) {
    let outputArr = []
    let resData = {}
    for (let i in data) {
        let name = i.substring(0, i.length - 1)
        let value = data[i]
        if (resData[name]) {
            outputArr.push(resData)
            resData = {}
        }
        resData[name] = value
    }
    // push最后一个resData
    outputArr.push(resData)

    // 原版inputGame文件夹的里面放游戏的版本
    // let resData = decodeURIComponent(data)
    // console.log("服务器接收到的数据：　" + resData);
    // resData = querystring.parse(resData);
    // if (typeof resData.game !== 'string' && resData.game.length > 1) {
    //     // 如果有多个打包配置
    //     // let gameName = Array.from(new Set(resData.game))
    //     for (let i = 0; i < resData.obfuscatorType.length; i++) {
    //         let obj = {}
    //         for (let j in resData) {
    //             obj[j] = resData[j][i]
    //         }
    //         outputArr.push(obj)
    //     }
    // } else {
    //     // 如果只有1个打包配置
    //     outputArr.push(resData)
    // }
    console.log(outputArr, '===outputArr');
    return outputArr.map((item, index, arr) => {
        // 这里的item是某个游戏的配置的对象
        let obfuscatorObj = {}
        for (let j in item) {
            switch (j) {
                case 'game':
                    item.game = `${item.game}-${item.idObj.split(':')[0]}`
                    break
                    // 处理要混淆文件的格式
                case 'file':
                    // 把 js:a.js,b.js 变成 游戏名/js/a.js, 游戏名/js/b.js
                    let arr = item[j].split('\n')
                    let game = item.game
                    item.file = arr.reduce((last, item, index, arr) => {
                        let str = `./${inputGame}${game}`
                        // console.log(item, '=====item')
                        let filenName = item.split(':')
                        let dir = filenName[0]
                        let fileArr = filenName.length > 1 && filenName[1].split(',')
                        let final = '',
                            target = ''
                        if (fileArr) {
                            // 如果混淆的不是根目录的文件
                            fileArr.map((item, index, arr) => {
                                // replace(/\s*/g,"")去除空格
                                final = `${str}/${dir}/${item.replace('.js', '')}`.replace(/\s*/g, "")
                                target = final.replace(`./${inputGame}`, '')
                                last[target] = `${final}.js`
                            })
                        } else {
                            // 如果混淆的是根目录的文件
                            final = `${str}/${filenName[0].split('.')[0].replace(/\s*/g,"")}`
                            target = final.replace(`./${inputGame}`, '')
                            last[target] = `${final}.js`
                        }
                        return last
                    }, {})
                    break;
                    // 把用户输入的游戏id appid 变成数组
                case 'idObj':
                    let idStr = item[j].split(',')
                    let idObj = {}
                    idStr.map((item, index) => {
                        let str = item.split(':')
                        let key = str[0].replace('\n', '')
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
    let repeatNum = 1
    let thisIdArr = []
    let fileNames = fs.readdirSync(inputGame)
    if (!inputConfig || inputConfig.length == 0) return false
    // let allStr = ""
    let allStr = "concurrently "
    // gameArr用于结束后，删除用户上传zip包，以及inputGame文件夹对应的游戏
    let gameArr = []
    for (let i = 0; i < inputConfig.length; i++) {
        // itemI：某个游戏的配置
        let itemI = inputConfig[i]
        if (!fileNames.includes(itemI.game)) {
            // 判断inputGame目录下有没有用户输入的游戏
            showAlert(`${inputGame}目录下没有游戏：${itemI.game}`)
            delGameData(itemI.game)
            return false
        } else {
            // 判断要混淆的游戏，有没有填入的混淆文件
            let arr = Object.values(itemI.file)
            for (let q of arr) {
                if (!fs.existsSync(q)) {
                    showAlert(`找不到文件:${q}`)
                    delGameData(itemI.game)
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
            if (!gameArr.includes(itemI.game)) {
                gameArr.push(itemI.game)
            }
            const configData = `\r\n//${getDate()}\r\nvar game= "${itemI.game}"\r\nvar list = ${list}\r\nvar mjConfig = ${mjConfig}\r\nvar timeout = ${(i + 1)}`
            // // 新建webpack.config-${id}.js
            // const webpackData = await rf(`./${modules}/${webpackName()}`)
            // const data = configData + webpackData;
            // wf(webpackName(j), data, 'w+')

            // // 新建afterMath-${id}.js，处理压缩json，复制小游戏文件夹，添加壳，改小游戏参数等
            // const afterMathDa = await rf(`./${modules}/${aftermathName()}`)
            // const data2 = configData + afterMathDa
            // wf(aftermathName(j), data2, 'w+')

            // // 新建改变工具的package.json的文件
            // const changeToolData = await rf(`./${modules}/${changeToolName()}`)
            // const data3 = configData + changeToolData
            // wf(changeToolName(j), data3, 'w+')

            // 防止同一个id的包，在跑npm run all的时候报错
            if (fs.existsSync(webpackName(j))) {
                j = `${j}-${repeatNum}`
                repeatNum++
            }
            thisIdArr.unshift(j)
            // // 新建webpack.config-${id}.js
            // // 新建afterMath-${id}.js，处理压缩json，复制小游戏文件夹，添加壳，改小游戏参数等
            // // 新建changeTool-${is}.js 改变工具的package.json的文件
            let newFileName = [{
                file: 'changeTool',
                haveIDFile: changeToolName(j),
                noIDFile: changeToolName(),
                jsonStr: `node ${changeToolName(j)}`
            }, {
                file: 'webpack',
                haveIDFile: webpackName(j),
                noIDFile: webpackName(),
                jsonStr: `set NODE_ENV=build&webpack --config ${webpackName(j)}`
            }, {
                file: 'aftermath',
                haveIDFile: aftermathName(j),
                noIDFile: aftermathName(),
                jsonStr: `node ${aftermathName(j)}`
            }]
            let itemStr = ''
            for (let k = 0; k < newFileName.length; k++) {
                let item = newFileName[k]
                let fileData = await rf(`./${modules}/${item.noIDFile}`)
                let finalData = configData + fileData
                wf(item.haveIDFile, finalData, 'w+')
                itemStr += `${item.jsonStr} && `
            }
            // 拼接package.json里面的要跑的字符串
            itemStr = itemStr.substr(0, itemStr.lastIndexOf('&&'))
            itemStr = ` \\"${itemStr}\\" `
            // let webpackStr = ` \\"node ${changeToolName(j)} && set NODE_ENV=build&webpack --config ${webpackName(j)} && node ${aftermathName(j)}\\" `
            allStr += itemStr

        }
    }
    // 配置package.json
    // 把所有要执行的webpack-config.${id}.js 跟 aftermath-${id}.js拼接起来,最后再把delete.js放在尾部，写入json的all里面
    // let endStr = ' node end.js'
    // allStr += endStr
    // allStr = allStr.substr(0, allStr.lastIndexOf('&&'))
    let packageJsonData = await rf(`./${modules}/package.json`)
    if (packageJsonData) {
        // 把modules 里面的package.json 的 newBuild-key newBuild-value替换
        packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
        await wf('package.json', packageJsonData)
        console.log('混淆开始！');
        // 执行json里面的all
        cp.exec('npm run all', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            // 混淆完成之后
            console.log(`stdout: ${stdout}`);
            // 删除对应马甲的webpack.config, aftermath
            let delteArr = ['webpack.config', 'aftermath', 'changeTool']
            delteArr.map(item => {
                thisIdArr.map(item2 => {
                    let tarFile = `${item}-${item2}.js`
                    if (fs.existsSync(tarFile)) {
                        fs.unlinkSync(`./${tarFile}`)
                    }
                })
            })
            // 删除inputGame里面的游戏
            console.log(gameArr);
            gameArr.map(item => {
                delGameData(item)
            })
            showAlert('混淆执行完成！')
            console.log(`混淆结束！ stderr: ${stderr}`)
        })
    }
}   
// 删除inputGame里面的游戏
function delGameData(gameName) {
    let res = path.join(__dirname, inputGame, gameName)
    rmdir(res)
    rmdir(`${res}.zip`)
}