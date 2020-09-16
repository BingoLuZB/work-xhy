
//盛世名酱
const entry = {
    config: {
        // identifierNamesGenerator: 'mangled',
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.8
    },
    path : {
        // '盛世名将/js': {
        //     // 'assetsmanager.min': './盛世名将/js/assetsmanager.min.js',
        //     // 'start.min': './盛世名将/js/start.min.js',
        //     // 'egret.min': './盛世名将/js/egret.min.js',
        //     // 'eui.min': './盛世名将/js/eui.min.js',
        //     'pako.min': './盛世名将/js/pako.min.js'
        // },
        '盛世名将/stage1': {
            // 'default.thm.min': './盛世名将/stage1/default.thm.min.js',
            // 'socket.min': './盛世名将/stage1/socket.min.js',
            // 'tween.min': './盛世名将/stage1/tween.min.js',
            'login.min': './盛世名将/stage1/login.min.js',
            // 'game.min': './盛世名将/stage1/game.min.js'
        },
        '盛世名将/stage2': {
            // 'main.min': './盛世名将/stage2/main.min.js'
        },
        '盛世名将/stage3': {
            // 'thirdly.min': './盛世名将/stage3/thirdly.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;