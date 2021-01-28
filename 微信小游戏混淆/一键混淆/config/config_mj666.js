const list = {
    'dog/': {
        // 'platform': './dog/platform.js'
    },
    'dog/stage1': {
        'main': './dog/stage1/main.js'
    },
    'dog/js': {
        'assetsmanager.min': './dog/js/assetsmanager.js',
        'default.thm': './dog/js/default.thm.js',
        'egret.min': './dog/js/egret.js',
        'tween.min': './dog/js/tween.js'
    }
}

const mjConfig = {
    //对象相加
    stringArrayThreshold: 1,
    // stringArrayEncoding: 'rc4',
    // identifierNamesGenerator: 'hexadecimal',
    nameList: getEntryPath(true), //json文件列表 读取全部列表，写定的地址列表
    // isNeedOneJson: false, //是否需要合并一个json文件,
    // isDelJsonList: false, //是否需要重置jsonList文件夹
    mjNum: 1,
    // controlFlowFlattening: true, //是否启用代码控制流平整
    // controlFlowFlatteningThreshold: 0.5, //转换将应用于任何给定节点的概率。
}
