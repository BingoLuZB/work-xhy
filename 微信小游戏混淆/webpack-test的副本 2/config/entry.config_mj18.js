//马甲18（武侠游戏） 西游的包
const entry = {
    config: {
        // identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.8,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲18/js': {
            // 'index': './西游/js/index.js',
        },
        '马甲18/publish': {
            'start': './西游/publish/start.js',
        },
        '马甲18/stage1': {
            'game': './西游/stage1/game.js',
        },
        '马甲18/stage2': {
            'game2': './西游/stage2/game.js',
        },
    }
};

// 对象 0.6
module.exports = entry;