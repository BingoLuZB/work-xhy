// 默认生成页面，'channel以及channel_ios内的不生成页面，只进行js压缩'
const entry = {};


entry.path = {
    // 'stage1':{
    //     'main':'./src/game/stage1/main.js'
    // },
    // 'stage2':{
    //     'any1':'./src/game/stage2/any1.js',
    //     'any2':'./src/game/stage2/any2.js',
    //     'any3':'./src/game/stage2/any3.js'
    // },
    // '':{
    //     'bhSdk':'./src/game/bhSdk.js'
    // }
    '': {
        'main':'./src/bh6魔兽冲突/main.js',
        // 'egret.min':'./src/else/egret.min.js',
        // 'egret.wxgame':'./src/else/egret.wxgame.js',
        // 'eui.min':'./src/else/eui.min.js',
    }
};

module.exports = entry;