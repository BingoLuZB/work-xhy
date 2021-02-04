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
const compressing = require('compressing');
const filename = __filename.split("\\").pop();
const mjNum = filename.replace('.js', '').split('-')[1]
const { 
    dist
} = require('./allConfig.js')

function json2Zip() {

}
compressing.zip.compressDir('dist/三国/js/customlib.min.js', 'dist/三国/js/customlib.min.js.zip')
    .then(() => {
        console.log('success');
    })
    .catch(err => {
        console.error(err);
    });


    

// fs.unlinkSync(__filename, `webpack-config-${myNum}.js`)

function getToday() {
    let myDate = new Date()
    let y = myDate.getFullYear()
    let m = myDate.getMonth() + 1
    let d = myDate.getDate()
    m = m < 10 ? `0${m}`: m
    d = d < 10 ? `0${d}`: d
    return `${y}${m}${d}`
}