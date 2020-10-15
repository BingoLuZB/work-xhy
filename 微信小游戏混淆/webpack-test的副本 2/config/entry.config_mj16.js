//马甲16（剑侠无双） 西游的包
const entry = {
    config: {
        // identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.6,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲16/js': {
            // 'index': './西游/js/index.js',
        },
        '马甲16/publish': {
            'start': './西游/publish/start.js',
        },
        '马甲16/stage1': {
            'game': './西游/stage1/game.js',
        },
        '马甲16/stage2': {
            'game2': './西游/stage2/game.js',
        },
    }
};

// 对象 0.6
module.exports = entry;