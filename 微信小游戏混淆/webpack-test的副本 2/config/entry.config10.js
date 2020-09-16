
//剑灵世界马甲包
// const entry = {};
// entry.path = {
//     'game10/js': {
//         // 'assetsmanager.min': './game10/js/assetsmanager.min.js',
//         // 'start.min': './game10/js/start.min.js',
//         // 'egret.min': './game10/js/egret.min.js',
//         // 'eui.min': './game10/js/eui.min.js',
//         'default.thm.min':'./game10/js/default.thm.min.js'
//     },
//     // 'game10/libray': {
//     //     'binary': './game10/library/binary.js',
//     //     'file-util': './game10/library/file-util.js',
//     //     'image': './game10/library/image.js',
//     //     'sound': './game10/library/sound.js',
//     //     'text': './game10/library/text.js'
//     // },
//     // 'game10/stage1': {
//     //     'default.thm.min': './game10/stage1/default.thm.min.js',
//     //     'socket.min': './game10/stage1/socket.min.js',
//     //     'tween.min': './game10/stage1/tween.min.js',
//     //     'login.min': './game10/stage1/login.min.js',
//     //     'game.min': './game10/stage1/game.min.js'
//     // },
//     // '': {
//         // 'bhSdk': './game10/shsdk/bhSdk.js',
//         // 'change': './game10/change.js',
//     // }
// };


let path = {}
const game = 'game10'
const glob = require('glob')
function getEntry(globPath) {
    let list = {}, remove = ['js', 'main.min.js', 'game.js']
    // 读取src/pages/**/底下所有的js文件
    glob.sync(globPath+'js').forEach(function(entry) {
        let tmp = entry.split('/').splice(-3);
        // console.log(tmp)
        let name = tmp[2].replace('.js', "")
        if (!remove.includes(tmp[2])) {
            if (tmp[0].includes('game')) {
                path[`${tmp[0]}/${tmp[1]}/${name}`] = `./${tmp[0]}/${tmp[1]}/${tmp[2]}`
            } else {
                path[`${game}/${name}`] = `./${game}/${tmp[2]}`
            }
        }
    });
    return path;
} 
let entry = getEntry(`./${game}/**/*`)
console.log(entry)
module.exports = entry;