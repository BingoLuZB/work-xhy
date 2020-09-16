//亡灵远征

let path = {}

// const game = 'bh12亡灵远征'
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


const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.6
    },
    path: {
        'bh12亡灵远征/js': {
            // 'assetsmanager.min': './bh12亡灵远征/js/assetsmanager.min.js',
        //     'astar.min': './bh12亡灵远征/js/astar.min.js',
        //     'default.thm.min': './bh12亡灵远征/js/default.thm.min.js',
        //     'dragonBones.min': './bh12亡灵远征/js/dragonBones.min.js',
        //     'egret.min': './bh12亡灵远征/js/egret.min.js',
        //     'eui.min': './bh12亡灵远征/js/eui.min.js',
        //     'ext.min': './bh12亡灵远征/js/ext.min.js',
        //     'flamd5.min': './bh12亡灵远征/js/flamd5.min.js',
        //     'game.min': './bh12亡灵远征/js/game.min.js',
        //     'jszip.min': './bh12亡灵远征/js/jszip.min.js',
        //     'platform.min': './bh12亡灵远征/js/platform.min.js',
        //     // 'protobuf-bundles.min': './bh12亡灵远征/js/protobuf-bundles.min.js',
        //     // 'protobuf-library.min': './bh12亡灵远征/js/protobuf-library.min.js',
        //     // 'puremvc.min': './bh12亡灵远征/js/puremvc.min.js', //报错
        //     'socket.min': './bh12亡灵远征/js/socket.min.js',
        //     'tween.min': './bh12亡灵远征/js/tween.min.js'
        },
        'bh12亡灵远征/stage1': {
            'main': './bh12亡灵远征/stage1/main.js',
        },
        'bh12亡灵远征/stage2': {
            'any1': './bh12亡灵远征/stage2/any1.js',
            'any2': './bh12亡灵远征/stage2/any2.js',
            'any3': './bh12亡灵远征/stage2/any3.js'
        }
    }
};


// 0.6
module.exports = entry;

