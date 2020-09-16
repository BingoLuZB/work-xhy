//盛世名将

let path = {}

// const game = 'game13'
// const glob = require('glob')
// function getEntry(globPath) {
//     let remove = ['js', 'manifest.js', 'protobuf-library.min.js', 'protobuf-bundles.min.js','puremvc.min.js', 'bhSdk.js', 'platform.js', 'main.js', 'game.js']
//     glob.sync(globPath+'js').forEach(function(entry) {
//         let tmp = entry.split('/').splice(-3);
//         // console.log(tmp)
//         let name = tmp[2].replace('.js', "")
//         if (!remove.includes(tmp[2])) {
//             if (tmp[0].includes('game')) {
//                 path[`${tmp[0]}/${tmp[1]}/${name}`] = `./${tmp[0]}/${tmp[1]}/${tmp[2]}`
//             } else {
//                 path[`${game}/${name}`] = `./${game}/${tmp[2]}`
//             }
//         }
//     });
//     return path;
// } 
// let entry = getEntry(`./${game}/**/*`)
// console.log(entry)


const entry = {};
entry.path = {
    'game16/js': {
        'assetsmanager.min': './game16/js/assetsmanager.min.js',
        'egret.min': './game16/js/egret.min.js',
        'eui.min': './game16/js/eui.min.js',
        'pako.min': './game16/js/pako.min.js',
        'start.min': './game16/js/start.min.js',
    },
    'game16/stage1': {
        'default.thm.min': './game16/stage1/default.thm.min.js',
        'game.min': './game16/stage1/game.min.js',
        'login.min': './game16/stage1/login.min.js',
        'socket.min': './game16/stage1/socket.min.js',
        'tween.min': './game16/stage1/tween.min.js',
    },
    'game16/stage2': {
        'main.min': './game16/stage2/main.min.js'
    },
    'game16/stage3': {
        'thirdly.min': './game16/stage3/thirdly.min.js'
    },
};



module.exports = entry;