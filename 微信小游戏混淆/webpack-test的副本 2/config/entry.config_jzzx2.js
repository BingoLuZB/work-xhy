//剑阵诛仙2 新修仙的包
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.7,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '剑阵诛仙2/': {
            'platform': './剑阵诛仙2/platform.js'
        },
        '剑阵诛仙2/js': {
            'assetsmanager.min': './剑阵诛仙2/js/assetsmanager.min.js',
            'default.thm': './剑阵诛仙2/js/default.thm.js',
            'entry.min': './剑阵诛仙2/js/entry.min.js',
            'main.min': './剑阵诛仙2/js/main.min.js',
            'particle.min': './剑阵诛仙2/js/particle.min.js',
            'socket.min': './剑阵诛仙2/js/socket.min.js',
            'tween.min': './剑阵诛仙2/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;