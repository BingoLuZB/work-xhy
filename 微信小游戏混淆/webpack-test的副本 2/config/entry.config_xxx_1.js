//新修仙
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.4,
        stringArrayEncoding: 'rc4'
    },
    path: {
        '新修仙/': {
            'platform': './新修仙/platform.js'
        },
        '新修仙/js': {
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

// 对象 0.6
module.exports = entry;