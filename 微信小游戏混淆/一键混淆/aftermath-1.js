
//2021-02-05 20:21:56
var game= "三国"
var list = {"三国/loading":"./inputGame/三国/loading.js"}
var mjConfig = {"obfuscatorType":"1","stringArrayThreshold":0.5,"stringArrayEncoding":"base64","identifierNamesGenerator":"mangled","miniGameType":"1","mjNum":"1","appid":"wx123sadasdqw"}
/**
 * 此文件用于 把inputGame的小游戏复制到 outputGame/游戏名 里面去，命名为game-${id}     outputGame/游戏名 已经有的话则不执行
 * 压缩jsonList对应游戏的json
 * 把dist对应的混淆文件复制到对应的 outputGame/游戏名 里面去
 * 把壳复制到 outputGame/游戏名 里面去  outputGame/游戏名 已经有的话则不执行
 * 更改小游戏的参数配置  outputGame/游戏名 已经有的话则不执行
 * 
 */

// var game = "三国"
// var list = {
//     "三国/js/customlib.min": "./inputGame/三国/js/customlib.min.js",
//     "三国/package1/main": "./inputGame/三国/package1/main.js",
//     "三国/loading": "./inputGame/三国/loading.js"
// }
// var mjConfig = {
//     "obfuscatorType": "1",
//     "stringArrayThreshold": 0.5,
//     "stringArrayEncoding": "base64",
//     "identifierNamesGenerator": "mangled",
//     "miniGame": "1",
//     "mjNum": "1",
//     "appid": "wx123sadasdqw"
// }

const fs = require('fs')
const path = require('path')
const compressing = require('compressing');
const {
    mjNum,
    appid,
    miniGameType
} = mjConfig

const {
    dist,
    jsonList,
    inputGame,
    outputGame,
    miniGame
} = require('./allConfig.js')

const {
    rf,
    checkStr
} = require('./nodeUtil.js');
const {
    log
} = require('console');

init()

async function init() {
    // 压缩json文件
    json2Zip()
    // 复制 小游戏、混淆之后的文件
    await copyGame()
    copyMiniGame()

    // 复制小游戏
}

// 把json文件转成zip文件
function json2Zip() {
    let file = `${jsonList}/mj${mjNum}/${getToday()}`
    let fileArr = fs.readdirSync(file)
    // 把每个json文件都变成zip文件，然后把json文件删掉
    fileArr.forEach((item, index) => {
        let itemName = item.split(".")[0]
        if (item.includes('.zip')) {
            // 如果是zip文件，则先删除zip文件，否则会报错
            fs.unlinkSync(`${file}/${item}`)
        } else {
            // 如果是jsonw文件，则先转zip，再删除
            setTimeout(() => {
                compressing.zip.compressDir(`${file}/${item}`, `${file}/${itemName}.zip`)
                    .then(() => {
                        fs.unlinkSync(`${file}/${item}`)
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }, 0)
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
        files.forEach(function (file) {
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

// 复制游戏
async function copyGame(cb) {
    return new Promise((resolve, reject) => {
        let inputSrc = path.join(inputGame, game)
        let outputSrc = path.join(outputGame, game, `mj${mjNum}`)
        let distSrc = path.join(dist, game, `mj${mjNum}`)

        function copyDist() {
            console.log('开始复制混淆文件');
            copyDir(distSrc, outputSrc)
        }
        try {
            let flag = fs.statSync(outputSrc).isDirectory()
            if (flag) {
                console.log(`${outputGame}已有相同游戏`);
                copyDist()
                resolve()

            }
        } catch (error) {
            mkdirs(outputSrc, () => {
                copyDir(inputSrc, outputSrc, () => {
                    copyDist()
                    resolve()
                })
            })
        }
    })
}

// 复制壳
async function copyMiniGame() {
    let miniFile = fs.readdirSync(miniGame)
    if (miniFile.includes(miniGameType)) {
        let miniSrc = path.join(miniGame, miniGameType, 'tarMini')
        let outputSrc = path.join(outputGame, game, `mj${mjNum}`)
        copyDir(miniSrc, outputSrc, () => {
            let isHaveWeapp = fs.readdirSync(outputSrc).includes('weapp-adapter.js')
            let tarSrc = path.join(miniGame, miniGameType, 'weapp-adapter.js')
            let weappSrc = path.join(outputGame, game, `mj${mjNum}`, 'weapp-adapter.js')
            if (!isHaveWeapp) {
                copyFile(tarSrc, weappSrc)
            }
        })
    } else {
        showAlert('找不到对应的壳')
        return false
    }
}


// 刪除模板的 aftermath.js 以及webapck.config.js
// fs.unlinkSync(__filename, `webpack-config-${myNum}.js`)

function getToday() {
    let myDate = new Date()
    let y = myDate.getFullYear()
    let m = myDate.getMonth() + 1
    let d = myDate.getDate()
    m = m < 10 ? `0${m}` : m
    d = d < 10 ? `0${d}` : d
    return `${y}${m}${d}`
}