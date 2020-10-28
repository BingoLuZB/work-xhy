const gameId = 52,
    versions = '1.0.0'

judgegame()
    .then(() => {
        intoMiniGame()
    })
    .catch(() => {
        intoGame()
    })

// 判断进壳还是进游戏
function judgegame() {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://gminiapi.xinghe66.cn/mp/index',
            method: 'GET',
            data: {
                app_id: gameId,
                versions,
                format: 'json'
            },
            success(res) {
                // status 2 提审状态
                if (res.data.code == 200 && res.data.data.status == 2) {
                    reject()
                } else {
                    resolve()
                }
            },
            fail() {
                reject()
            }
        })
    })
}

// 进游戏
function intoGame() {
    require('./weapp-adapter.js');
    require('./platform.js');
    require('./manifest.js');
    require('./egret.wxgame.js');

    // 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
    // 只有使用 assetsmanager 的项目可以使用
    if (window.RES && RES.processor) {
        require('./library/image.js');
        require('./library/text.js');
        require('./library/sound.js');
        require('./library/binary.js');
    }

    egret.runEgret({
        //以下为自动修改，请勿修改
        //The following is automatically modified, please do not modify
        //----auto option start----
        entryClassName: "Main",
        orientation: "auto",
        frameRate: 30,
        scaleMode: "exactFit",
        contentWidth: 640,
        contentHeight: 1136,
        showFPS: false,
        fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
        showLog: false,
        maxTouches: 2,
        //----auto option end----
        renderMode: 'webgl',
        audioType: 0,
        calculateCanvasScaleFactor: function (context) {
            var backingStore = context.backingStorePixelRatio ||
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        }
    });
    // require("egret.min.js")
}

// 进壳
function intoMiniGame() {
    require('./toFormalGame/index.js')
}