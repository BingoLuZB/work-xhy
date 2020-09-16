//搜仙记



let path = {}


// let entry = {};
// entry.path = {
//     // '搜仙记/cocos': {
//     //     'cocos2d':'./搜仙记/cocos/cocos2d-js-min.js'
//     // },
//     // '搜仙记/src': {
//     //     'project': './搜仙记/src/project.b47a2.js',
//     //     'settings': './搜仙记/src/settings.e781f.js'
//     // },
//     '搜仙记/subpackages': {
//         'game0':'./搜仙记/subpackages/SubPkg0/game.js',
//         // 'game1':'./搜仙记/subpackages/SubPkg1/game.js',
//         // 'game2':'./搜仙记/subpackages/SubPkg2/game.js',
//     },
// };


const game = '搜仙记'
const glob = require('glob')
let excludeFile = ['game', 'index', 'jsb-engine', 'cocos2d-jsb', 'cocos2d-runtime', 'settings.e781f']
function getEntry(globPath) {
    // console.log(glob.sync(globPath+'js'), '===global')
    glob.sync(globPath+'js').forEach((item, index) => {
        if (item.includes('.js')) {1
            let key = item.slice(2,item.length - 3)
            let value = item.slice(0, item.length)
            path[`${key}`] = value
        }
    })
    console.log(path, '===path')
    return path
}
let entry = getEntry(`./${game}/**/*`)





module.exports = entry;







