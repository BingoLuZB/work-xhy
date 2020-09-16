//暗黑神域

// let path = {}
// const game = 'game12'
// const glob = require('glob')
// function getEntry(globPath) {
//     let remove = ['js','libs', 'MYGAME', 'main2.min.js', 'main3.min.js', 'code.js', 'weapp-adapter.js', 'game.js']
//     glob.sync(globPath+'js').forEach(function(entry) {
//         let tmp = entry.split('/').splice(-3);
//         // console.log(tmp, '=====tmp')
//         let name = tmp[2].replace('.js', "")
//         if (!remove.includes(tmp[1]) && !remove.includes(tmp[2])) {
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
// module.exports = entry;

const entry = {
    path:{
        // 'game8/stage1': {
        //     'main': './game8/stage1/main.js'
        // },
        'game12/stage1': {
            'main1.min': './game12/stage1/main1.min.js'
        }
    }
};


module.exports = entry;