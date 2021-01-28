const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const packageIdArr = [666, 55 ,11]
const jsonCopyStr = {
    key: 'newBuild-key',
    value: 'newBuild-value'
}
function showAlert() {
    cp.exec('msg %username% "打包完成"')
}

function rf(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// 新增webpackConfig
function addWebpackConfig() {
    // 读取config里面的配置文件
    let allStr = "concurrently "
    packageIdArr.forEach((item, index)=> {
        const name =  `mj${item}`
        // const configData = fs.readFileSync(`./config/config_${name}.js`, 'utf-8')
        // const webpackData = fs.readFileSync('./moduleFile/webpack.config-module.js', 'utf-8')
        // const data = configData + webpackData;
        // fs.writeFileSync(`webpack.config-${name}.js`, data, {flag: 'w+'})

        // 配置package.json
        let webpackStr = `\\"set NODE_ENV=build&webpack --config webpack.config-${name}.js\\" `
        allStr+=webpackStr
        if (index == packageIdArr.length-1) {
            let packageJsonData = fs.readFileSync('./moduleFile/packageModule.json', 'utf-8')
            packageJsonData = packageJsonData.replace(jsonCopyStr.key, 'all').replace(jsonCopyStr.value, allStr)
            fs.writeFileSync('package.json', packageJsonData, 'utf8')
            console.log(packageJsonData);
        }
    });
    
}

addWebpackConfig()

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