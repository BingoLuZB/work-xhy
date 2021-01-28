const fs = require('fs');
const path = require('path');
const cp = require('child_process');

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

function addWebpackConfig() {
    // 读取config里面的配置文件
    let data = fs.readFileSync('./config/testConfig.js', 'utf-8')
    fs.writeFileSync('webpack.config-start.js', data)
    console.log(data);
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