// 所有文件名
module.exports = {
    inputGame: 'inputGame/',
    miniGame: 'miniGame/',
    modules: 'modules/',
    dist: 'dist/',
    jsonList: 'jsonList/',
    obfuscatorCode: 'obfuscatorCode/',
    outputGame: 'outputGame/',
    config: 'config/',
    jsonCopyStr: {
        key: 'newBuild-key',
        value: 'newBuild-value'
    },
    downloadUrl: 'https://gministatic.xinghe66.cn/',
    webpackName: (num) => {
        let name = 'webpack.config.js'
        let nameArr = name.split('.js')
        if (num) {
            return `${nameArr[0]}-${num}.js` 
        } else {
            return name
            
        }
    },
    aftermathName: (num) => {
        let name = 'aftermath.js'
        let nameArr = name.split('.js')
        if (num) {
            return `${nameArr[0]}-${num}.js` 
        } else {
            return name
        }
    },
    changeToolName: (num) => {
        let name = 'changeTool.js'
        let nameArr = name.split('.js')
        if (num) {
            return `${nameArr[0]}-${num}.js` 
        } else {
            return name
        }
    },
}