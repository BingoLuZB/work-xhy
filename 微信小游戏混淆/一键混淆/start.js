const fs = require('fs');
const readline = require('readline');
const http = require("http");
const cp = require('child_process');
const {
    openHtml,
    showAlert
} = require('./nodeUtil')
// package.json要替换的key 跟 value
const jsonCopyStr = {
    key: 'newBuild-key',
    value: 'newBuild-value'
}
// 用户选择的配置
let inputConfig = {}


// 获取入口文件路径集合

// function getEntryPath(getNames) {
//     let obj = {
//         'dog/': {
//             'platform': './dog/platform.js'
//         },
//         'dog/stage1': {
//             'main': './dog/stage1/main.js'
//         },
//         'dog/js': {
//             'assetsmanager.min': './dog/js/assetsmanager.js',
//             'default.thm': './dog/js/default.thm.js',
//             'egret.min': './dog/js/egret.js',
//             'tween.min': './dog/js/tween.js'
//         }
//     }
//     const entryFolderArr = Object.keys(obj);
//     ``
//     let entryPath = {};
//     let nameArr = []
//     entryFolderArr.map(item => {
//         for (const key in obj[item]) {
//             entryPath[`${item}/${key}`] = obj[item][key]
//             if (key.includes('.')) {
//                 nameArr.push(key.split('.')[0])
//             } else {
//                 nameArr.push(key)
//             }
//         }
//     })
//     if (getNames) {
//         console.log(nameArr, '=nameArr')
//         return nameArr
//     } else {
//         console.log(entryPath, '=entryPath')
//         return entryPath;
//     }
// }
// getEntryPath(true)
// getEntryPath()





init()


// 初始化
async function init() {
    // 打开网页，并拿到用户输入的数据
    try {
        // inputConfig = await openHtml()
        // if (inputConfig) {

        // }
        let dir = fs.readdirSync('node_modules/_javascript-obfuscator@0.18.8@javascript-obfuscator/dist')
        console.log(dir)
        console.log(inputConfig, '======inputConfig');
    } catch (error) {
        console.error(error, '===error`')
    }
}



// 新增webpackConfig package.json
function addWebpackConfig() {
    // 读取config里面的配置文件
    // let allStr = "concurrently "
    let allStr = ""
    packageIdArr.forEach((item, index) => {
        const name = `mj${item}`
        // 新建webpack.config.js
        // const configData = fs.readFileSync(`./config/config_${name}.js`, 'utf-8')
        // const webpackData = fs.readFileSync('./moduleFile/webpack.config-module.js', 'utf-8')
        // const data = configData + webpackData;
        // fs.writeFileSync(`webpack.config-${name}.js`, data, {flag: 'w+'})

        // 配置package.json
        // let webpackStr = `\\"npm run set NODE_ENV=build&webpack --config webpack.config-${name}.js\\" `
        let webpackStr = `set NODE_ENV=build&webpack --config webpack.config-${name}.js && `
        allStr += webpackStr
        if (index == packageIdArr.length - 1) {
            allStr = allStr.substr(0, allStr.lastIndexOf('&&'))
            let packageJsonData = fs.readFileSync('./modules/packageModule.json', 'utf-8')
            packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
            fs.writeFileSync('package.json', packageJsonData, 'utf8')
        }
    });
}