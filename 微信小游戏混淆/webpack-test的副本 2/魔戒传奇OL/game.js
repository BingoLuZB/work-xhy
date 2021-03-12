// require('./platform.js');
require('./weapp-adapter.js');
window['egret_quickgame'] = true;
const huoSdk = require('./libs/sdk-1.0.1.js');
window['GJlenged_chanel'] = 'wx_xinghe';
require('./manifest.js');
require('./egret.wxgame.js');
window.huoSdk = huoSdk;
// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

let runOptions = 
{
  //以下为自动修改，请勿修改
  //The following is automatically modified, please do not modify
  //----auto option start----
		entryClassName: "Main",
		orientation: "portrait",
		frameRate: 30,
		scaleMode: "fixedNarrow",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:15,textColor:0x00c200,bgAlpha:0.5",
		showLog: true,
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
};

const runEgret = function () {
  egret.runEgret(runOptions);
}

const startFunc = function()
{
  if (wx.loadSubpackage) {
    require("./EgretSubPackageLoading.js");
    runOptions.entryClassName = "EgretSubPackageLoading";
    runEgret();
    let task = wx.loadSubpackage({
      // 开发者根据自身需求更改
      name: "stage1",
      success: function () {
        EgretSubPackageLoading.instance.onSuccess();
      }
    });
  
    task.onProgressUpdate(res => {
      EgretSubPackageLoading.instance.setProgress(res);
    })
  }
  else {
    //
    require("./stage1/game.js");
    runEgret();
  }
}



var shareInfo;
var mapp_id = 782;//736
var mmp_id = "wxb2f100795e8a8475";//wx4ff5ec4ba569072f
//sdk初始化
huoSdk.init({app_id:mapp_id,mp_id:mmp_id}).then((res) =>
{
  console.log("init接口状态 " + res.msg);
  if(res.msg == "success")
  {
    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
    let opts = wx.getLaunchOptionsSync();
    //sdk登陆
    huoSdk.login({data: {state: opts.query.state || opts.query.scene || ''}}).then((res) => 
    {
      console.log("login接口状态 " + res.msg);
      if(res.msg == "success")
      {
		  res.data.app_id = mapp_id;
        window.wxxhgameInit(res);
        // window.wxgameInit(res);
        //设置分享
        huoSdk.getShareInfo({
          data: {}
        }).then(res => 
        {

          shareInfo = res.data;
          wx.onShareAppMessage(function ()
          {
            huoSdk.updateShareInfo({
              data: {
                to_target: 'wx'
              }
            })


            return {
              title: shareInfo.title,
              imageUrl: shareInfo.image,
              query: `state=${shareInfo.state}`
            }
          })
          wx.showShareMenu({withShareTicket:true});
        })

        startFunc();
      }
    })
  }
});