
// 获取随机字母字符串 long为字符串长度
function randomStr(long) {
    let ruleStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let finalStr = ''
    for (let i = 0; i < long; i++) {
        let num = Math.floor(Math.random() * ruleStr.length)
        finalStr += ruleStr[num]
    }
    return finalStr
}
module.exports = {
    compact: true, //是否压缩成一行代码
    controlFlowFlattening: false, //是否启用代码控制流平整
    //  controlFlowFlatteningThreshold: 0.8, //转换将应用于任何给定节点的概率。
    //  deadCodeInjection: true, //是否启动死代码
    //  deadCodeInjectionThreshold: 0.6,//死代码大小, 
    disableConsoleOutput: false,
    splitStrings: true,
    identifiersPrefix: randomStr(4),    
    identifierNamesGenerator:  'mangled', //数组短标识符
    //  identifierNamesGenerator:'mangled',  //数组短标识符
    //  identifierNamesGenerator:'hexadecimal', //数组长标识符
    log: true, //是否允许打印
    renameGlobals: true,
    rotateStringArray: true,
    selfDefending: false,
    stringArray: true,
    stringArrayThreshold:  0.6,
    //  stringArrayThreshold:1, 
    unicodeEscapeSequence: false,
    transformObjectKeys: false, //是否启动对象健转换
    stringArrayEncoding:  'base64',
    //  seed: 0.5,
    target: 'browser-no-eval',
    // nameList: getEntryPath(true), //json文件列表
    isNeedOneJson: false, //是否需要合并一个json文件,
}