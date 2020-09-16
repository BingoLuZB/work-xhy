//泰坦大陆



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
    'game18/js': {
        // 'assetsmanager.min': './game18/js/assetsmanager.min.js',
        // 'astar.min': './game18/js/astar.min.js',
        // 'default.thm.min': './game18/js/default.thm.min.js',
        // 'dragonBones.min': './game18/js/dragonBones.min.js',
        // 'egret.min': './game18/js/egret.min.js',
        // 'eui.min': './game18/js/eui.min.js',
        // 'ext.min': './game18/js/ext.min.js',
        // 'flamd5.min': './game18/js/flamd5.min.js',
        // 'game.min': './game18/js/game.min.js',
        // 'jszip.min': './game18/js/jszip.min.js',
        // 'platform.min': './game18/js/platform.min.js',
        // 'protobuf-bundles.min': './game18/js/protobuf-bundles.min.js',
        // // 'protobuf-library.min': './game18/js/protobuf-library.min.js',
        // // 'puremvc.min': './game18/js/puremvc.min.js', //报错
        // 'socket.min': './game18/js/socket.min.js',
        // 'tween.min': './game18/js/tween.min.js'
    },
    'game18/stage1': {
        'main': './game18/stage1/main.js',
    },
    // 'game18/stage2': {
    //     'any1': './game18/stage2/any1.js',
    //     'any2': './game18/stage2/any2.js',
    //     'any3': './game18/stage2/any3.js'
    // },
    // 'game18/stage3': {
    //     'zzq': './game18/stage3/zzq.js',
    // },
};



module.exports = entry;







