// 更改混淆方式
const fs = require('fs');
const path =require('path')
const {
    obfuscatorCode,
    modules,
    jsonCopyStr
} = require(path.join(__dirname, './common/allConfig.js'));
const {
    copyFile
} = require(path.join(__dirname, './common/util'));
const {
    obfuscatorType,
    mjNum
} = mjConfig

let toolSrc = path.join('node_modules', '_javascript-obfuscator@0.18.8@javascript-obfuscator')
function changeToolJson() {
    let jsonData = fs.readFileSync(path.join(modules, 'toolPackage.json'), 'utf-8')
    // 修改工具的package.json
    jsonData = jsonData.replace(jsonCopyStr.key, 'main').replace(jsonCopyStr.value, `dist/index${obfuscatorType}.js`)
    fs.writeFileSync(path.join(toolSrc, 'package.json'), jsonData, {flag: 'r+'})
    // 复制混淆源码到工具的dist文件夹
    copyFile(path.join(obfuscatorCode,`${obfuscatorType}.js`), path.join(toolSrc, 'dist', `index${obfuscatorType}.js`))
}
setTimeout(() => {
    changeToolJson()
    console.log('change tool package.json')
}, timeout * 1000)