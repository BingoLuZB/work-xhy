//剑阵诛仙
// 改林泽的数组
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.85,
        stringArrayEncoding: 'rc4'
    },
    path: {
        '剑阵诛仙/': {
            'platform': './剑阵诛仙/platform.js'
        },
        '剑阵诛仙/js': {
            'assetsmanager.min': './剑阵诛仙/js/assetsmanager.min.js',
            'default.thm': './剑阵诛仙/js/default.thm.js',
            // 'egret.min': './剑阵诛仙/js/egret.min.js',
            'entry.min': './剑阵诛仙/js/entry.min.js',
            'eui.min': './剑阵诛仙/js/eui.min.js',
            'main.min': './剑阵诛仙/js/main.min.js',
            'particle.min': './剑阵诛仙/js/particle.min.js',
            'socket.min': './剑阵诛仙/js/socket.min.js',
            'tween.min': './剑阵诛仙/js/tween.min.js'
        },
    }
};

module.exports = entry;