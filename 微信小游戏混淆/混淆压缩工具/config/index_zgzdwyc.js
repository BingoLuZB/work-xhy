// 默认生成页面，'channel以及channel_ios内的不生成页面，只进行js压缩'
const entry = {};


entry.path = {
    'stage1':{
        'login.min':'./src/主公再打我一次/stage1/login.min.js',
    },
    'stage2':{
        'main.min':'./src/主公再打我一次/stage2/main.min.js',
    },
    'stage3':{
        'thirdly.min':'./src/主公再打我一次/stage3/thirdly.min.js',
    }
};

module.exports = entry;