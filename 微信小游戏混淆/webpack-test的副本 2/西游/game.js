
require('./weapp-adapter.js');
require('./platform.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if (window.RES && RES.processor) {
  require('./library/image.js');
  require('./library/text.js');
  require('./library/sound.js');
  require('./library/binary.js');
}
let runOptions = {
  //以下为自动修改，请勿修改
  //The following is automatically modified, please do not modify
  //----auto option start----
  entryClassName: "Main",
  orientation: "auto",
  frameRate: 30,
  scaleMode: "showAll",
  contentWidth: 720,
  contentHeight: 1280,
  showFPS: false,
  fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.2",
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
}

require('./manifest.js');
require('./egret.wxgame.js');


if (wx.loadSubpackage) {
  runOptions.entryClassName = "EgretSubPackageLoading";
  wx.request({
    url: window["GAME_JSON_CONFIG"], 
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      var confJson = res.data;
      window.bgimgurl = confJson.bgimgurl;
      console.info("window.bgimgurl:", window.bgimgurl);
      console.info("===>", confJson.useXGAME , window.XGAME_DATEFLAG, confJson.useXGAME <= window.XGAME_DATEFLAG)
      egret.runEgret(runOptions);
    }
  })
  
}
   
