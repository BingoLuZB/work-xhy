//仙侠修仙ol 对应新修仙
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.6,
        stringArrayEncoding: 'rc4'
    },
    path: {
        '仙侠修仙ol/': {
            'platform': './新修仙/platform.js'
        },
        '仙侠修仙ol/js': {
            'assetsmanager.min': './新修仙/js/assetsmanager.min.js',
            'default.thm': './新修仙/js/default.thm.js',
            'entry.min': './新修仙/js/entry.min.js',
            'main.min': './新修仙/js/main.min.js',
            'particle.min': './新修仙/js/particle.min.js',
            'socket.min': './新修仙/js/socket.min.js',
            'tween.min': './新修仙/js/tween.min.js'
        },
    }
};

// 林泽数组
module.exports = entry;