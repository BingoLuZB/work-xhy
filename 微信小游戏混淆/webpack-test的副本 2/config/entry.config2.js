// 3.2M的主包
const entry = {};

entry.path = {
    'game2/stage1': {
        'main': './game2/stage1/main.js'
    },
    'game2/stage2': {
        'ActivityConfig': './game2/stage2/ActivityConfig.js',
        'BackpackPy': './game2/stage2/BackpackPy.js',
        'HeroPy': './game2/stage2/HeroPy.js',
        'MainBtnConfig': './game2/stage2/MainBtnConfig.js',
        'ManorProxy': './game2/stage2/ManorProxy.js',
        'RankConfig': './game2/stage2/RankConfig.js'
    },
    'game2/stage3': {
        'zzq': './game2/stage3/zzq.js'
    }
    
};

module.exports = entry;