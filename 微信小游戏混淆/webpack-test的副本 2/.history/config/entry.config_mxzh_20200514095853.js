//冒险之魂

let path = {}

// const game = 'bh6冒险之魂'
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
    // 'bh6冒险之魂/js': {
    //     'assetsmanager.min': './bh6冒险之魂/js/assetsmanager.min.js',
    //     'start.min': './bh6冒险之魂/js/start.min.js',
    //     'egret.min': './bh6冒险之魂/js/egret.min.js',
    //     'eui.min': './bh6冒险之魂/js/eui.min.js',
    //     'default.thm.min':'./bh6冒险之魂/js/default.thm.min.js'
    // },
    'bh6冒险之魂/stage1': {
        'main': './bh6冒险之魂/stage1/main.js'
    },
    'bh6冒险之魂/stage2': {
        // 'any1': './bh6冒险之魂/stage2/any1.js',
        // 'any2': './bh6冒险之魂/stage2/any2.js',
        'any3': './bh6冒险之魂/stage2/any3.js',
    },
    // 'bh6冒险之魂/stage3': {
    //     // identifierNamesGenerator:'hexadecimal'
    //     'zzq': './bh6冒险之魂/stage3/zzq.js',
    // },

    
}

//数组  stringArrayThreshold:1, 

module.exports = entry;