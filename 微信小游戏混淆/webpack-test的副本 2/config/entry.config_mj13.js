//马甲13（挂机仙侠） 新修仙2的包
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 1,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '马甲13（挂机仙侠）/': {
            'platform': './新修仙2/platform.js',
        },
        '马甲13（挂机仙侠）/js': {
            'assetsmanager.min': './新修仙2/js/assetsmanager.min.js',
            'default.thm': './新修仙2/js/default.thm.js',
            'entry.min': './新修仙2/js/entry.min.js',
            'eui.min': './新修仙2/js/eui.min.js',
            'main.min': './新修仙2/js/main.min.js',
            'particle.min': './新修仙2/js/particle.min.js',
            'socket.min': './新修仙2/js/socket.min.js',
            'tween.min': './新修仙2/js/tween.min.js'
        },
    }
};
// 对象
module.exports = entry;