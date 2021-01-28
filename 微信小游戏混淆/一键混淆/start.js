const fs = require('fs');
const readline = require('readline');
const http = require("http");
const cp = require('child_process');
const { openHtml } = require('./nodeUtil')
// const packageIdArr = [666, 55 ,11]

const jsonCopyStr = {
    key: 'newBuild-key',
    value: 'newBuild-value'
}
let inputConfig = {}

async function init() {
    // 打开网页，并拿到用户输入的数据
    let res = await openHtml()
    console.log(res)
}



// 新增webpackConfig package.json
function addWebpackConfig() {
    // 读取config里面的配置文件
    let allStr = "concurrently "
    packageIdArr.forEach((item, index) => {
        const name = `mj${item}`
        // 新建webpack.config.js
        // const configData = fs.readFileSync(`./config/config_${name}.js`, 'utf-8')
        // const webpackData = fs.readFileSync('./moduleFile/webpack.config-module.js', 'utf-8')
        // const data = configData + webpackData;
        // fs.writeFileSync(`webpack.config-${name}.js`, data, {flag: 'w+'})

        // 配置package.json
        let webpackStr = `\\"npm run set NODE_ENV=build&webpack --config webpack.config-${name}.js\\" `
        allStr += webpackStr
        if (index == packageIdArr.length - 1) {
            let packageJsonData = fs.readFileSync('./moduleFile/packageModule.json', 'utf-8')
            packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
            fs.writeFileSync('package.json', packageJsonData, 'utf8')
        }
    });

}

// addWebpackConfig()

// async function test() {
//     try {
//         let res = await rf('package.json')
//         console.log(res)
//         showAlert()
//     } catch (error) {
//         console.error(error)
//     }
// }

// test()