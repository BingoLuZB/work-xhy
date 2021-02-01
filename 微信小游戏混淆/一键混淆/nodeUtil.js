const fs = require('fs');
const cp = require('child_process');
const http = require("http");
const httpUrl = 'localhost'
const querystring = require('querystring')
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
        let fileNames = fs.readdirSync('inputGame')
        // 打开html
        return new Promise((resolve, reject) => {
            http.createServer((req, res) => {
                fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
                    if (err) {
                        res.statusCode = 404;
                        res.setHeader("Content-Type", "text/plain");
                        res.end("Not Found!");
                        reject()
                    }
                    else {
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
                                for(let j in resData) {
                                    obj[j] = resData[j][i]
                                }
                                inputConfig[obj.game] = obj
                            }
                        } else {
                            // 如果只有1个打包配置
                            inputConfig[resData.game] = resData
                        }
                        for (let i in inputConfig) {
                            if (fileNames.includes(i)) {
                                let item = inputConfig[i]
                                for (let j in item) {
                                    switch (j) {
                                        // 处理要混淆文件的格式
                                        case 'file':    
                                            console.log(item.j);
                                            break;
                                        // 把用户输入的游戏id变成数组
                                        case 'idArr':
                                            console.log(item.j);
                                            break;
                                    }
                                }
                            } else {
                                cp.exec(`msg %username% inputGame目录下没有游戏：${i}`)
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

}