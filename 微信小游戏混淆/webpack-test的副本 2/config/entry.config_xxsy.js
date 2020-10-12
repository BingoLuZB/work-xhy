//修仙手游
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.5,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '修仙手游/': {
            'platform': './修仙手游/platform.js'
        },
        '修仙手游/js': {
            // 'assetsmanager.min': './修仙手游/js/assetsmanager.min.js',
            // 'default.thm': './修仙手游/js/default.thm.js',
            // 'egret.min': './修仙手游/js/egret.min.js',
            'entry.min': './修仙手游/js/entry.min.js',
            'main.min': './修仙手游/js/main.min.js',
            // 'particle.min': './修仙手游/js/particle.min.js',
            // 'socket.min': './修仙手游/js/socket.min.js',
            // 'tween.min': './修仙手游/js/tween.min.js'
        },
    }
};

// 对象
module.exports = entry;