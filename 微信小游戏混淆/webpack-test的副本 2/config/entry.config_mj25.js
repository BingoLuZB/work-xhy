//马甲25（剑侠无双） 西游的包
const entry = {
    config: {
        // identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.5,
        stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲25/js': {
            'index': './西游/js/index.js',
        },
        '马甲25/publish': {
            'start': './西游/publish/start.js',
        },
        '马甲25/stage1': {
            'game': './西游/stage1/game.js',
        },
        '马甲25/stage2': {
            // 'game2': './西游/stage2/game.js',
        },
    }
};

// 林泽数组
module.exports = entry;