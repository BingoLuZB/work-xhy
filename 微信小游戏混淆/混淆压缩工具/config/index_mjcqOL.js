// 默认生成页面，'channel以及channel_ios内的不生成页面，只进行js压缩'
const entry = {};


entry.path = {
    // '马甲568（传奇）/core2': {
    //     'game': './src/马甲568（传奇）/core2/game.js',
    // },
    // '马甲568（传奇）/core3': {
    //     'game3': './src/马甲568（传奇）/core3/game3.js'
    // },
    '马甲736（魔戒传奇OL）/js': {
        'Buffer.min': './src/马甲736（魔戒传奇OL）/js/Buffer.min.js',
        'default.thm': './src/马甲736（魔戒传奇OL）/js/default.thm.js'
    },
    '马甲736（魔戒传奇OL）/stage1': {
        'main.min': './src/马甲736（魔戒传奇OL）/stage1/main.min.js',
    }
};

module.exports = entry;