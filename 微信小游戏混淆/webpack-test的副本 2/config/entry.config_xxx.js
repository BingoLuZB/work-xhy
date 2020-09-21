//新仙侠
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.6,
    },
    path: {
        '新仙侠/': {
            'platform': './新仙侠/platform.js'
        },
        '新仙侠/js': {
            'assetsmanager.min': './新仙侠/js/assetsmanager.min.js',
            'default.thm': './新仙侠/js/default.thm.js',
            'entry.min': './新仙侠/js/entry.min.js',
            'main.min': './新仙侠/js/main.min.js',
            'particle.min': './新仙侠/js/particle.min.js',
            'socket.min': './新仙侠/js/socket.min.js',
            'tween.min': './新仙侠/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;