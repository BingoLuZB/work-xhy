const fs = require('fs');
const cp = require('child_process');
const http = require("http");
const httpUrl = 'localhost'
const querystring = require('querystring')
const gameDir = 'inputGame'
const allConfig = require('./allConfig')
module.exports = {
    // windows 警告框
    showAlert(str) {
        cp.exec(`msg %username% ${str}`)
    },

    // 读取文件
    rf(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },

    // 用浏览器打开index.html
    openHtml() {
        let fileNames = fs.readdirSync(gameDir)
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
                                                            finalFile = `./${allConfig.inputGame}/${game}/${dir}/${afterDelJs[0]}`
                                                            fileObj[finalFile] = `${finalFile}.js`
                                                        })
                                                    } else {
                                                        // 如果某个目录下要混淆某个文件
                                                        let finalFile = file.split('.js')[0]
                                                        finalFile = `./${allConfig.inputGame}/${game}/${dir}/${finalFile}`
                                                        fileObj[finalFile] = `${finalFile}.js`
                                                    }
                                                } else {
                                                    // 如果混淆的是根目录的文件
                                                    finalFile = `./${allConfig.inputGame}/${game}/${item2.split('.js')[0]}`
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
                                cp.exec(`msg %username% ${gameDir}目录下没有游戏：${i}`)
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
    },
    
    // 获取当前详细日期
    getDate() {
        var now = new Date(),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }

}