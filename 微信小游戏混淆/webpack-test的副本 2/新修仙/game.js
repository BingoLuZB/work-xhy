const { userfileMgr } = require('./library/userfilemgr.js');

require('./weapp-adapter.js');
require('./senjin_wx_xxtx_littleGame.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

if (typeof wx.getUpdateManager === "function") {
	const updateManager = wx.getUpdateManager()

	updateManager.onCheckForUpdate(function (res) {
		// 请求完新版本信息的回调
		console.log(`-------`, res)
	})

	updateManager.onUpdateReady(function () {
		// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
		console.log(`下载完成--更新版本`)
		updateManager.applyUpdate();
	})

	updateManager.onUpdateFailed(function () {
		// 新版本下载失败
		console.log(`更新版本网络异常`)
	})
}

// 启动wx小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if (window.RES && RES.processor) {
	require('./library/image.js');
	require('./library/text.js');
	require('./library/sound.js');
	require('./library/binary.js');
}

window.alert = console.error;
window.verData = {};
//内网
// window.urlParam = {
// 	apptype: '3',
// 	appid: "",
// 	root: 'http://192.168.0.160/z1/',
// 	isLocation: true,//是否内网测试
// };
//外网
window.urlParam = {
	apptype: '3',
	root: 'https://z1c.h5eco.com/1/z1client/',
	apiRoot: 'https://z1api.h5eco.com/',
	reportRoot: `https://z1back.h5eco.com/`,
	ev: 92,
};

window.getUrl = (url) => {
	if (~url.indexOf('ver.json')) return urlParam.root + urlParam.gv + '/ver.json';
	let v = urlParam.gv || urlParam.ev;
	return urlParam.root + (v ? (verData[url] || 0) + '/' : '') + url;
};

wx.request({
	url: urlParam.root + urlParam.ev + '/ev.json',
	success: res => window.verData = res.data,
	complete: () => {
		// userfileMgr.clear1DayRes();
		egret.runEgret({
			//以下为自动修改，请勿修改
			//The following is automatically modified, please do not modify
			//----auto option start----
			entryClassName: "Main",
			orientation: "auto",
			frameRate: 60,
			scaleMode: "fixedNarrow",
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
});





// require("egret.min.js")
