require('./weapp-adapter.js');
require('./manifest.js');
require('./egret.wxgame.js');
const fileutil = require('./library/file-util');

const stage=null;
let runOptions = {
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5",
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
};

const runEgret = function () {
	
	egret.runEgret(runOptions);
}
if (wx.loadSubpackage) {
  require("./loading.js");
  runOptions.entryClassName = "loading";
  runEgret();
	var task = wx.loadSubpackage({
		name: "package1",
		success: function (res) {
      loading.instance.setProgress("正在加载主程序...",Math.floor(100));
			loading.instance.onSuccess(); 		
		}
	});

	task.onProgressUpdate(res => {
		loading.instance.setProgress("正在加载主程序...",Math.floor(res.progress));
	})
}
else {
  require("./package1/game.js");
  runEgret();
}

const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // console.log(res.hasUpdate)
  if(res.hasUpdate)
  {
	wx.showModal({
		title: '更新提示',
		content: '该小游戏有新版本,正在为您下载新版本请稍后!',
		showCancel:false,
		success: function (res) {
			
		}
	})
  }
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，点击确定重启应用!',
	showCancel:false,
    success: function (res) {
      if (res.confirm) {
        fileutil.fs.remove(wx.env.USER_DATA_PATH + "/");
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
  wx.showModal({
    title: '更新提示',
    content: '新版本下载失败,请检查网络!',
	showCancel:false,
    success: function (res) {
      if (res.confirm) {
        wx.exitMiniProgram();
      }
    }
  })
})

