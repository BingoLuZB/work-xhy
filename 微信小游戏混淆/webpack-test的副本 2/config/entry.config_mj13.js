//马甲13（挂机仙侠） 新修仙的包
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 0.7,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲13（挂机仙侠）/': {
            'platform': './马甲13（挂机仙侠）/platform.js'
        },
        '马甲13（挂机仙侠）/js': {
            'assetsmanager.min': './马甲13（挂机仙侠）/js/assetsmanager.min.js',
            'default.thm': './马甲13（挂机仙侠）/js/default.thm.js',
            'entry.min': './马甲13（挂机仙侠）/js/entry.min.js',
            'main.min': './马甲13（挂机仙侠）/js/main.min.js',
            'particle.min': './马甲13（挂机仙侠）/js/particle.min.js',
            'socket.min': './马甲13（挂机仙侠）/js/socket.min.js',
            'tween.min': './马甲13（挂机仙侠）/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;