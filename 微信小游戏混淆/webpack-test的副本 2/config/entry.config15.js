//神罚纪元

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
    // 'game15/stage1': {
    //     'main1.min': './game15/stage1/main1.min.js'
    // },
    // 'game15/stage2': {
    //     'main2.min': './game15/stage2/main2.min.js'
    // },
    // 'game15/stage3': {
    //     'main3.min': './game15/stage3/main3.min.js'
    // },
    'game15/js': {
        // 'laya.wxmini': './game15/js/laya.wxmini.js',
        // 'laya.ui': './game15/js/laya.ui.js',
        // 'laya.webgl': './game15/js/laya.webgl.js',
        // 'laya.core': './game15/js/laya.core.js',
        'main': './game15/js/main.js',
        // 'crypto-js': './game15/js/crypto-js.js',
    },
};



module.exports = entry;