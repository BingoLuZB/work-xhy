//仙侠修仙
// 对应新修仙
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.5,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '仙侠修仙/': {
            'platform': './仙侠修仙/platform.js'
        },
        '仙侠修仙/js': {
            'assetsmanager.min': './仙侠修仙/js/assetsmanager.min.js',
            'default.thm': './仙侠修仙/js/default.thm.js',
            'entry.min': './仙侠修仙/js/entry.min.js',
            'main.min': './仙侠修仙/js/main.min.js',
            'particle.min': './仙侠修仙/js/particle.min.js',
            'socket.min': './仙侠修仙/js/socket.min.js',
            'tween.min': './仙侠修仙/js/tween.min.js'
        },
    }
};

// 对象 0.5
module.exports = entry;