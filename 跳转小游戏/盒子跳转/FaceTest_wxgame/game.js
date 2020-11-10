const app_id = 116,
    versions = '1.0.0';
// 图片域名
const imgUrl = 'https://gministatic.xinghe66.cn/toMiniGameImg/xy'
// 分享内容
const shareData = {
  title: '上线就送vip7，经典西游梦幻回合手游',
  imageUrl: `${imgUrl}/shareImg.png`
}
judgegame()


function gameInit() {
    require('./weapp-adapter.js');
    require('./platform.js');
    require('./manifest.js');
    require('./egret.wxgame.js');
    require('./stage1/main')

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
        contentWidth: 720,
        contentHeight: 1280,
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
}


function judgegame() {
    wx.request({
        url: 'https://gminiapi.xinghe66.cn/mp/index',
        method: 'GET',
        data: {
            app_id,
            versions,
            format: 'json'
        },
        success(res) {
            // status 2 提审状态
            if (res.data.code == 200 && res.data.data.status == 2) {
                GameGlobal.isNeedMore = false
            } else {
                GameGlobal.isNeedMore = true
            }
        },
        fail() {
            GameGlobal.isNeedMore = false
        },
        complete() {
            gameInit()
            // 分享
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            })
            // 分享到朋友圈
            wx.onShareTimeline(() => {
                return shareData
            })
            // 转发
            wx.onShareAppMessage(() => {
                return shareData
            })
        }
    })
}