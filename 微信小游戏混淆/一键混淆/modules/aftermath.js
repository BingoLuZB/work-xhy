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
let {
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
    downloadUrl,
    modules,
    config
} = require(path.join(__dirname, './common/allConfig.js'))

const {
    rf,
    wf,
    rmdir,
    getDate,
    copyDir,
    copyFile,
    mkdirs
} = require(path.join(__dirname, './common/util'));

// 复制之后的微信小游戏地址
let mjWxgameSrc = ''
let mjConfigSrc = path.join(config, `config.${mjNum}.js`)
let isUpdate = fs.existsSync(mjConfigSrc)
if (isUpdate) {
    let str = fs.readFileSync(mjConfigSrc).toString()
    let gameName = str.substring(str.indexOf('list'), str.length).split('var')[0].split('=')[1].split(':')[0].split('/')[0].substr(3)
    mjWxgameSrc = path.join(outputGame, gameName, `mj${mjNum}`)
    // 更新的时候不需要变壳
    miniGameType = 'none'
} else {
    mjWxgameSrc = path.join(outputGame, game.split('-')[0], `mj${mjNum}`)
}


init()

async function init() {
    // 复制 小游戏、混淆之后的文件
    await copyGame()
    // 压缩json文件
    await json2Zip()
    // 复制壳
    copyMiniGame()
    // 修改微信小游戏的game.js
    await changeWxgame()
    // 修改微信小游戏project.config.json
    changeWxConfig()
    // 添加历史记录
    await addHistroy()
    // 压缩游戏包
    // let tarGame = `${outputGame}/${game}/mj${mjNum}`
    // compressing.zip.compressDir(tarGame, `${tarGame}.zip`).then(() => {
    //     setTimeout(() => {
    //         rmdir(tarGame)
    //     },500)
    // })
}

// 把json文件转成zip文件
function json2Zip() {
    return new Promise((resolve, reject) => {
        let file = `${jsonList}/mj${mjNum}/${getDate(true)}`
        let fileArr = fs.readdirSync(file)
        // 把每个json文件都变成zip文件，然后把json文件删掉
        fileArr.map((item, index) => {
            let {
                base,
                ext,
                name
            } = path.parse(item)
            if (ext === '.zip') {
                // 如果是zip文件，则先删除zip文件，否则会报错
                // fs.unlinkSync(`${file}/${item}`)
            } else {
                // 如果是json文件，则先转zip，再删除
                // setTimeout(() => {
                    compressing.zip.compressDir(`${file}/${base}`, `${file}/${name}.zip`)
                        .then(() => {
                            fs.unlinkSync(`${file}/${base}`)
                            resolve()
                        })
                        .catch(err => {
                            console.error(err);
                            reject(err)
                        });
                // }, )
            }
        })
    })
}


// 复制游戏
function copyGame(cb) {
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
function copyMiniGame() {
    console.log('开始复制壳')
    let miniFile = fs.readdirSync(miniGame)
    if (miniGameType === 'none') {
        // 如果选了不需要壳，则直接return false
        return false
    } else {
        if (miniGameType === 'random') {
            // 如果选了随机，则把miniGameType换成随机数字
            let random = Math.floor(Math.random() * miniFile.length)
            miniGameType = miniFile[random]
        }
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
    let nameList = fs.readdirSync(path.join(jsonList, `mj${mjNum}`, getDate(true))).filter(item => item.includes('.zip'))
    let finalList = ''
    function configList(list) {
        return `
const versions = '${version}';
const gameId = ${mjNum};
const downloadUrl = '${downloadUrl}jsonList/${gameAbbr}/mj${mjNum}';
const jsonList = [${list}];
// config
`
    }
    // 判断是否是更新的
    if (isUpdate) {
        // 如果是更新的，则只要修改提审包的game.js的jsonList 跟 version
        let gameSrc = path.join(mjWxgameSrc, 'game.md')
        let gameData = await rf(gameSrc)
        let configItem = gameData.split('// config')[0]
        // 拿到game.js里面的jsonList的数据
        let arrListData = configItem.substring(configItem.indexOf('[') + 1, configItem.indexOf(']'))
        // let judgeArr = nameList.filter(item => arrListData.includes(item))
        // 如果是之前已经混淆过的文件
        // 把原本game.js里面的jsonList "20210207_a.zip, 20210207_b.zip"进行遍历替换
        arrListData.split("'").filter(item => item.includes('_')).map(item2 => {
            let zipName = item2.split('_')[1]
            // 替换旧的已混淆文件名
            arrListData = arrListData.replace(item2, `${getDate(true)}_${zipName}`)
        })
        // 如果是没有混淆过的文件,直接拼接jsonList
        let str = ', '
        nameList.map((item, index, arr) => {
            if (!arrListData.includes(item)) {
                if (index === arr.length - 1) {
                    str += `'${getDate(true)}_${item}'`
                } else {
                    str += `'${getDate(true)}_${item}', `
                }
                arrListData += str
            }
        })
        finalList = arrListData
        injectData = configList(finalList) + gameData.split('// config')[1]
        await wf(injectSrc, injectData)
        await wf(gameSrc, injectData)
    } else {
        // 拼接游戏参数
        finalList = nameList.map(item => {
            return `'${getDate(true)}_${item}'`
        })
        

    // 获取切换游戏的模板
    let gameModuleSrc = path.join(modules, 'wxgame.js')
    let gameModule = await rf(gameModuleSrc)

    // 拼接进游戏的模板
    let wxgameSrc = path.join(inputGame, game, 'game.js')
    let wxgameData = await rf(wxgameSrc)

    // 拼接进壳的模板
    let miniGameData = ''
    if (parseInt(miniGameType)) {
        let miniGameSrc = path.join(miniGame, `${miniGameType}`, 'game.md')
        miniGameData = await rf(miniGameSrc)
    }

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
    }

    console.log('微信game.js写入完成')
}

// 追加记录 config.${id}.js
async function addHistroy() {
    return new Promise((resolve, reject) => {
        // 把配置都放到config对应的游戏id的js里面去
        const configData = `\r\n//${getDate()}\r\nvar list = ${JSON.stringify(list)}\r\nvar mjConfig = ${JSON.stringify(mjConfig)}\r\n`
        wf(`${config}/config.${mjNum}.js`, configData, 'as')
        resolve()
    })
}