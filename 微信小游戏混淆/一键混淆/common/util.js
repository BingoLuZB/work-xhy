const fs = require('fs');
const cp = require('child_process');
const CryptoJS = require('./encrypt.js')
const path = require('path')
const {
    dist,
    miniGame
} = require(path.join(__dirname, './allConfig.js'))

// 删除文件
function rmdir(filePath, callback) {
    // 先判断当前filePath的类型(文件还是文件夹,如果是文件直接删除, 如果是文件夹, 去取当前文件夹下的内容, 拿到每一个递归)
    fs.stat(filePath, function (err, stat) {
        if (err) return console.log(err)
        if (stat.isFile()) {
            fs.unlink(filePath, callback)
        } else {
            fs.readdir(filePath, function (err, data) {
                if (err) return console.log(err)
                let dirs = data.map(dir => path.join(filePath, dir))
                let index = 0
                !(function next() {
                    // 此处递归删除掉所有子文件 后删除当前 文件夹
                    if (index === dirs.length) {
                        fs.rmdir(filePath, callback)
                    } else {
                        rmdir(dirs[index++], next)
                    }
                })()
            })
        }
    })
}

// 复制文件
function copyFile(srcPath, tarPath, cb) {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })
    var ws = fs.createWriteStream(tarPath)
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', function (ex) {
        cb && cb(ex)
    })
    rs.pipe(ws)
}

// 读取文件夹，复制文件夹
function copyDir(srcDir, tarDir, cb) {
    fs.readdir(srcDir, (err, files) => {
        var count = 0

        function checkEnd() {
            ++count == files.length && cb && cb()
            // ++count == files.length && resolve()
        }
        if (err) {
            checkEnd()
            return
        }
        files.map(function (file) {
            // 拼接地址
            var srcPath = path.join(srcDir, file)
            var tarPath = path.join(tarDir, file)
            fs.stat(srcPath, function (err, stats) {
                // 判断是否是文件夹，文件夹的话则进行递归读取,复制文件夹，不是文件夹的话则执行复制文件
                if (stats.isDirectory()) {
                    // 创建同名文件夹
                    fs.mkdir(tarPath, function (err) {
                        if (err) {
                            if (srcDir.includes(checkStr(dist)) || srcDir.includes(checkStr(miniGame))) {
                                // 复制混淆之后的js
                                copyDir(srcPath, tarPath, checkEnd)
                            } else {
                                console.log(err)
                                return false
                            }
                        }
                        copyDir(srcPath, tarPath, checkEnd)
                    })
                } else {
                    copyFile(srcPath, tarPath, checkEnd)
                }
            })
        })
        //为空时直接回调
        files.length === 0 && cb && cb()
    })
}

// 连续创建多层文件夹
function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback();
        } else {
            // console.log(path.dirname(dirname));  
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        }
    });
}

// 读取文件
function rf(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}

// 写入文件
function wf(target, data, flag) {
    return new Promise((resolve, reject) => {
        fs.writeFile(target, data, {
            flag
        }, (err) => {
            err ? reject(err) : resolve()
        })
    })
}

// windows 警告框
function showAlert(str) {
    cp.exec(`msg %username% ${str}`)
}

// 字符串 过滤掉特殊字符跟中文
function checkStr(s) {
    var str = s.replace(/%/g, "").replace(/\+/g, "").replace(/\s/g, ""); //   %   +   \s 
    str = str.replace(/-/g, "").replace(/\*/g, "").replace(/\//g, ""); //   -   *   / 
    str = str.replace(/\&/g, "").replace(/!/g, "").replace(/\=/g, ""); //   &   !   = 
    str = str.replace(/\?/g, "").replace(/:/g, "").replace(/\|/g, ""); //   ?   :   | 
    str = str.replace(/\,/g, "").replace(/\./g, "").replace(/#/g, ""); //   ,   .   # 
    str = str.replace(/([^\u0000-\u00FF])/g, "") // 删除中文
    return str;
}

// 获取当前详细日期
function getDate(isToday) {
    var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    if (isToday) {
        return y + (m < 10 ? "0" + m : m) + (d < 10 ? "0" + d : d)
    } else {
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }
}   

function encryptFn(isEncrypt) {
    let aseKey = "86809963" //秘钥必须为：8/16/32位.
    let author = 'BingoXhy'
    let now = Date.parse(new Date())
    let after5min = now + (5 * 60 * 1000)
    let sendData = after5min - parseInt(aseKey)
    let message = `author=${author}&&overTime=${sendData}`; //明文
    if (isEncrypt) {
        let encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
        return encrypt
    } else {
        let decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        return decrypt
    }
}
module.exports = {
    rmdir,
    copyDir,
    copyFile,
    showAlert,
    rf,
    wf,
    checkStr,
    getDate,
    encryptFn,
    mkdirs
}