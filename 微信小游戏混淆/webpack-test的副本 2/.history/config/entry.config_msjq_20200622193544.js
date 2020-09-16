//马甲5 魔兽崛起



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


const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.9
    },
    path: {
    'bh7魔兽崛起/js': {
        //     'assetsmanager.min': './bh7魔兽崛起/js/assetsmanager.min.js',
        //     'astar.min': './bh7魔兽崛起/js/astar.min.js',
        //     'default.thm.min': './bh7魔兽崛起/js/default.thm.min.js',
        //     'dragonBones.min': './bh7魔兽崛起/js/dragonBones.min.js',
        //     'egret.min': './bh7魔兽崛起/js/egret.min.js',
        //     'eui.min': './bh7魔兽崛起/js/eui.min.js',
        //     'ext.min': './bh7魔兽崛起/js/ext.min.js',
        //     'flamd5.min': './bh7魔兽崛起/js/flamd5.min.js',
        //     'game.min': './bh7魔兽崛起/js/game.min.js',
        //     'jszip.min': './bh7魔兽崛起/js/jszip.min.js',
        //     'platform.min': './bh7魔兽崛起/js/platform.min.js',
            // 'protobufBundles.min': './bh7魔兽崛起/js/protobuf-bundles.min.js',
        // //     // 'protobuf-library.min': './bh7魔兽崛起/js/protobuf-library.min.js',
        // //     // 'puremvc.min': './bh7魔兽崛起/js/puremvc.min.js', //报错
        //     'socket.min': './bh7魔兽崛起/js/socket.min.js',
        //     'tween.min': './bh7魔兽崛起/js/tween.min.js'
        },
        'bh7魔兽崛起/stage1': {
            'main': './bh7魔兽崛起/stage1/main.js',
        },
        'bh7魔兽崛起/stage2': {
            'any1': './bh7魔兽崛起/stage2/any1.js',
            'any2': './bh7魔兽崛起/stage2/any2.js',
            'any3': './bh7魔兽崛起/stage2/any3.js',
            // 'any4': './bh7魔兽崛起/stage2/any4.js'
        },
    }
};

// 数组 stringArrayThreshold:1, 

module.exports = entry;







