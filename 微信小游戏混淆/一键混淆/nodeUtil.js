const fs = require('fs');
const cp = require('child_process');
const http = require("http");
const httpUrl = 'localhost'
module.exports = {
    // 展示打包完成
    showAlert() {
        cp.exec('msg %username% "打包完成"')
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
                        const resData = decodeURIComponent(data)
                        console.log("服务器接收到的数据：　" + resData);
                        resolve(resData)
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