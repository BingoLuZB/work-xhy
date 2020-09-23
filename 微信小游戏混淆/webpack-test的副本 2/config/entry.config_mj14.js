//马甲14（仙侠ol） 新修仙的包
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.9,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲14（仙侠ol）/': {
            'platform': './马甲14（仙侠ol）/platform.js'
        },
        '马甲14（仙侠ol）/js': {
            'assetsmanager.min': './马甲14（仙侠ol）/js/assetsmanager.min.js',
            'default.thm': './马甲14（仙侠ol）/js/default.thm.js',
            'entry.min': './马甲14（仙侠ol）/js/entry.min.js',
            'main.min': './马甲14（仙侠ol）/js/main.min.js',
            'particle.min': './马甲14（仙侠ol）/js/particle.min.js',
            'socket.min': './马甲14（仙侠ol）/js/socket.min.js',
            'tween.min': './马甲14（仙侠ol）/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;