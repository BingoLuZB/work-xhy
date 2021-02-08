
//2021-02-08 19:27:56
var game= "三国"
var list = {"三国/loading":"./inputGame/三国/loading.js"}
var mjConfig = {"gameAbbr":"SG","version":"1.0.1","obfuscatorType":"1","stringArrayThreshold":"0.5","stringArrayEncoding":"base64","identifierNamesGenerator":"mangled","miniGameType":"1","mjNum":"1","appid":"wx132165"}
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
    miniGameType,
    version,
    gameAbbr
} = mjConfig

const {
    dist,
    jsonList,
    inputGame,
    outputGame,
    miniGame,
    switchGameUrl,
    modules,
    config
} = require('./allConfig.js')

const {
    rf,
    wf,
    checkStr,
    showAlert
} = require('./nodeUtil.js');

// 复制之后的微信小游戏地址
const mjWxgameSrc = path.join(outputGame, game, `mj${mjNum}`)


init()

async function init() {
    // 复制 小游戏、混淆之后的文件
    await copyGame()
    // 复制壳
    copyMiniGame()
    changeWxConfig()
    // 压缩json文件
    await json2Zip()
    await changeWxgame()
    await addHistroy()
    // fs.unlinkSync(__filename, `webpack-config-${myNum}.js`)
}

// 把json文件转成zip文件
function json2Zip() {
    return new Promise((resolve, reject) => {
        let file = `${jsonList}/mj${mjNum}/${getDate(true)}`
        let fileArr = fs.readdirSync(file)
        // 把每个json文件都变成zip文件，然后把json文件删掉
        fileArr.map((item, index) => {
            let itemName = item.split(".")[0]
            if (item.includes('.zip')) {
                // 如果是zip文件，则先删除zip文件，否则会报错
                fs.unlinkSync(`${file}/${item}`)
            } else {
                // 如果是json文件，则先转zip，再删除
                setTimeout(() => {
                    compressing.zip.compressDir(`${file}/${item}`, `${file}/${itemName}.zip`)
                        .then(() => {
                            fs.unlinkSync(`${file}/${item}`)
                            resolve()
                        })
                        .catch(err => {
                            console.error(err);
                            reject(err)
                        });
                }, 0)
            }
        })
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

// 复制游戏
async function copyGame(cb) {
    return new Promise((resolve, reject) => {
        let inputSrc = path.join(inputGame, game)
        let distSrc = path.join(dist, game, `mj${mjNum}`)

        function copyDist() {
            console.log('开始复制混淆文件');
            copyDir(distSrc, mjWxgameSrc)
        }
        try {
            let flag = fs.statSync(mjWxgameSrc).isDirectory()
            if (flag) {
                console.log(`${outputGame}已有相同游戏`);
                copyDist()
                resolve()
            }
        } catch (error) {
            mkdirs(mjWxgameSrc, () => {
                copyDir(inputSrc, mjWxgameSrc, () => {
                    copyDist()
                    resolve()
                })
            })
        }
    })
}

// 复制壳
async function copyMiniGame() {
    if (!miniGameType) return false
    let miniFile = fs.readdirSync(miniGame)
    if (miniFile.includes(miniGameType)) {
        let miniSrc = path.join(miniGame, miniGameType, 'tarMini')
        copyDir(miniSrc, mjWxgameSrc, () => {
            let weappStr = 'weapp-adapter.js'
            let isHaveWeapp = fs.readdirSync(mjWxgameSrc).includes(weappStr)
            if (!isHaveWeapp) {
                let tarSrc = path.join(miniGame, miniGameType, weappStr)
                let weappSrc = path.join(mjWxgameSrc, weappStr)
                copyFile(tarSrc, weappSrc)
            }
        })
    } else {
        showAlert('找不到对应的壳')
        return false
    }
}

// 修改微信修改小游戏的 project.config.json
async function changeWxConfig() {
    let wxConfigSrc = path.join(mjWxgameSrc, 'project.config.json')
    let data = await rf(wxConfigSrc)
    let obj = JSON.parse(data.toString())
    for (let i in obj) {
        if (i === 'appid') {
            obj[i] = appid
        }
    }
    await wf(wxConfigSrc, JSON.stringify(obj))
}

// 修改微信小游戏的game.js
async function changeWxgame() {
    let injectData = null
    let injectSrc = path.join(mjWxgameSrc, 'game.js')
    let isUpdate = fs.existsSync(path.join(config, `config.${mjNum}.js`))
    let nameList = fs.readdirSync(path.join(jsonList, `mj${mjNum}`, getDate(true)))
    let configList = (list) => {
        return `
        const versions = '${version}';
        const gameId = ${mjNum};
        const downloadUrl = '${switchGameUrl}/jsonList/${gameAbbr}/mj${mjNum}';
        const jsonList = [${list}];
        // config
        `
    }
    let finalList = ''
    // 判断是否是更新的
    if (isUpdate) {
        // 如果是更新的，则只要修改提审包的game.js的jsonList 跟 version
        let gameSrc = path.join(mjWxgameSrc, 'game.js')
        let gameData = await rf(gameSrc)
        let configItem = gameData.split('// config')[0]
        // 拿到game.js里面的jsonList的数据
        let arrListData = configItem.substring(configItem.indexOf('[') + 1, configItem.indexOf(']'))
        let judgeArr = nameList.filter(item => arrListData.includes(item))
        if (judgeArr.length > 0) {
            // 如果是之前已经混淆过的文件
            // 把原本game.js里面的jsonList "20210207_a.zip, 20210207_b.zip"进行遍历
            arrListData.split("'").filter(item => item.includes('_')).map(item2 => {
                let zipName = item2.split('_')[1]
                // 替换旧的已混淆文件名
                arrListData = arrListData.replace(item2, `${getDate(true)}_${zipName}`)
            })
        } else {
            // 如果是没有混淆过的文件
            let str = ', '
            nameList.map((item, index, arr) => {
                if (index === arr.length - 1) {
                    str += `'${getDate(true)}_${item}'`
                } else {
                    str += `'${getDate(true)}_${item}', `
                }
            })
            arrListData += str
        }
        finalList = arrListData
    } else {
        // 拼接游戏参数
        finalList = nameList.filter(item => item.includes('.zip')).map(item => {
            return `'${getDate(true)}_${item}'`
        })
    }
    // 获取切换游戏的模板
    let gameModuleSrc = path.join(modules, 'wxgame.js')
    let gameModule = await rf(gameModuleSrc)

    // 拼接进游戏 跟 进壳的函数
    let wxgameSrc = path.join(inputGame, game, 'game.js')
    let wxgameData = await rf(wxgameSrc)
    let miniGameSrc = path.join(miniGame, miniGameType, 'game.md')
    let miniGameData = await rf(miniGameSrc)

    let fn = `
            function intoGame() {
                ${wxgameData}
            }
            function intoMiniGame () {
                ${miniGameData}
            }
        `
    injectData = configList(finalList) + gameModule + fn
    wf(injectSrc, injectData)
    wf(path.join(mjWxgameSrc, 'game.md'), injectData)
    console.log('微信game.js写入完成')
}
// 追加记录 config.${id}.js
async function addHistroy(params) {
    return new Promise((resolve, reject) => {
        // 把配置都放到config对应的游戏id的js里面去
        const configData = `\r\n//${getDate()}\r\nvar list = ${JSON.stringify(list)}\r\nvar mjConfig = ${JSON.stringify(mjConfig)}\r\n`
        wf(`${config}/config.${mjNum}.js`, configData, 'as')
        resolve()
    })
}



// 刪除模板的 aftermath.js 以及webapck.config.js




// 获取当前详细日期
function getDate(isToday) {
    var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
        if (isToday) {
            return y +  (m < 10 ? "0" + m : m) + (d < 10 ? "0" + d : d)
        } else {
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        }
}
