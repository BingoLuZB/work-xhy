//剑阵诛仙2 新修仙的包
// 自己写的数组
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 1,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '剑阵诛仙2/': {
            'platform': './新修仙/platform.js'
        },
        '剑阵诛仙2/js': {
            // 'assetsmanager.min': './新修仙/js/assetsmanager.min.js',
            // 'default.thm': './新修仙/js/default.thm.js',
            'entry.min': './新修仙/js/entry.min.js',
            'main.min': './新修仙/js/main.min.js',
            // 'particle.min': './新修仙/js/particle.min.js',
            // 'socket.min': './新修仙/js/socket.min.js',
            // 'tween.min': './新修仙/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;