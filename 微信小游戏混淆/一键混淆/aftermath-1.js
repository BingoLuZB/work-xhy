/**
 * 此文件用于 把inputGame的小游戏复制到 outputGame/游戏名 里面去，命名为game-${id}     outputGame/游戏名 已经有的话则不执行
 * 压缩jsonList对应游戏的json
 * 把dist对应的混淆文件复制到对应的 outputGame/游戏名 里面去
 * 把壳复制到 outputGame/游戏名 里面去  outputGame/游戏名 已经有的话则不执行
 * 更改小游戏的参数配置  outputGame/游戏名 已经有的话则不执行
 * 
 */
var game = "三国"
var list = {
    "三国/js/customlib.min": "./inputGame/三国/js/customlib.min.js"
}
var mjConfig = {
    "obfuscatorType": "1",
    "stringArrayThreshold": 0.5,
    "stringArrayEncoding": "base64",
    "identifierNamesGenerator": "mangled",
    "miniGame": "0"
}

const fs = require('fs')
const path = require('path')
const compressing = require('compressing');
const filename = __filename.split("\\").pop();
const mjNum = filename.replace('.js', '').split('-')[1]
const {
    dist,
    jsonList,
    inputGame,
    outputGame
} = require('./allConfig.js')



init()

function init() {
    json2Zip()
    copyGame()
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
                        console.log('success');
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
        function checkEnd () {
            ++count == files.length && cb && cb()
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
                    console.log('mkdir', tarPath)
                    // 创建同名文件夹
                    fs.mkdir(tarPath, function (err) {
                        if (err) {
                            console.log(err)
                            return
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
function copyGame(cb) {
    let src = path.join(inputGame,game)
    // let target = path.join(outputGame,game)
    let target = path.join(outputGame,game,`mj${mjNum}`)
    try {
        let flag = fs.statSync(target).isDirectory()
        if (flag) {
            console.log(`${inputGame}已有相同游戏`);
        }
    } catch (error) {
        mkdirs(target, () => {
            copyDir(src, target, cb)
        })
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