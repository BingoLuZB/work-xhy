//勇者救赎



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
    'bh13魔兽冲突/js': {
        // 'assetsmanager.min': './game19/js/assetsmanager.min.js',
        // 'astar.min': './game19/js/astar.min.js',
        // 'default.thm.min': './game19/js/default.thm.min.js',
        // 'dragonBones.min': './game19/js/dragonBones.min.js',
        // 'egret.min': './game19/js/egret.min.js',
        // 'eui.min': './game19/js/eui.min.js',
        // 'ext.min': './game19/js/ext.min.js',
        // 'flamd5.min': './game19/js/flamd5.min.js',
        // 'game.min': './game19/js/game.min.js',
        // 'jszip.min': './game19/js/jszip.min.js',
        // 'platform.min': './game19/js/platform.min.js',
        // 'protobuf-bundles.min': './game19/js/protobuf-bundles.min.js',
        // 'protobuf-library.min': './game19/js/protobuf-library.min.js',
        // 'puremvc.min': './game19/js/puremvc.min.js', //报错
        // 'socket.min': './game19/js/socket.min.js',
        // 'tween.min': './game19/js/tween.min.js'
    },
    'bh13魔兽冲突/stage1': {
        'main': './bh13魔兽冲突/stage1/main.js',
    },
    'bh13魔兽冲突/stage2': {
        'any1': './bh13魔兽冲突/stage2/any1.js',
        'any2': './bh13魔兽冲突/stage2/any2.js',
        'any3': './bh13魔兽冲突/stage2/any3.js',
    },
};

// 对象 stringArrayThreshold:0.8, 

module.exports = entry;







