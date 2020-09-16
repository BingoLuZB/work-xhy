wx.setKeepScreenOn({
	keepScreenOn: true,
	success: function () {
	},
	fail: function () {
		console.log("设置屏幕常亮失败")
	}
})
var shsdkConf = require('./shsdk/shsdk_conf.js');

//缓存检测，超过指定大小自动提示清理缓存
var cachePath = wx.env.USER_DATA_PATH + "/resource";
var fm = wx.getFileSystemManager();
var statFileSize = function (ph) {
	var s = 0;
	var st = fm.statSync(ph);
	if (st.isFile()) {
		s = st.size;
	} else {
		var files = fm.readdirSync(ph);
		for (var f of files) {
			var file = ph + "/" + f;
			s = s + statFileSize(file);
		}
	}
	return s;
}

var cacheTip = function () {
	wx.showModal({
		title: '提示',
		content: '检测到游戏缓存过高,请清理后进入小程序!',
		success(res) {
			if (res.confirm) {
				clearCache();
			} else {
				wx.exitMiniProgram({});
			}
		}
	});
}

var clearCache = function () {
	fm.rmdir({
		dirPath: cachePath,
		recursive: true,
		success: function () {
			console.log("删除本地缓存成功~");
		},
		fail: function () {
			console.log("删除本地缓存失败~");
		}
	});
}

fm.access({
	path: cachePath,
	success: () => {
		var cacheSize = statFileSize(cachePath);
		console.log("cacheSize:" + cacheSize/(1024 * 1024) + "M");
		if (cacheSize >= 42 * 1024 * 1024) {
			clearCache();
		}
	},
	fail: () => {
		console.log("出错了,直接清理缓存...");
		clearCache();
	}
});

require('./weapp-adapter.js');

window._gameCfg_ = {
	gameId: shsdkConf.AND_PACKAGE_CODE,
	channel: shsdkConf.CHANNEL,
	version: shsdkConf.VERSION,
	platform: "bh",
	resURL: shsdkConf.RESURL,
	accURL: shsdkConf.ACCURL,
	accURLBak: "https://acctbakkpsg.kpsanguo.com",
	loginURI: "/sh921/login",
	serverGroupURI: "/action/user/getPartitionGameServer",
	createOrderURI: "/sh921/createOrder",
	noticeURI: "/getNotice",
	noticeId: shsdkConf.NOTICEID,
	uuid: "",
  name: shsdkConf.NAME,
  sid: shsdkConf.SID
}
var generateUUID = function () {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
			function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	return uuid;
}

try {
	var saveUUID = wx.getStorageSync('saveUUID');
	if (saveUUID) {
		window._gameCfg_.uuid = saveUUID;
	} else {
		saveUUID = generateUUID();
		wx.setStorageSync('saveUUID', saveUUID);
		window._gameCfg_.uuid = saveUUID;
	}
} catch (e) {
	console.log(e);
}

var ShSdk = require('./shsdk/shsdk.js');
window.ShSdk = ShSdk;

var pageStart = function () {
	var res = wx.getSystemInfoSync();
	var flag = res.system;
	flag = flag.toLowerCase();
	if (flag.indexOf("ios") === -1) {
		window._gameCfg_.gameId = shsdkConf.AND_PACKAGE_CODE;
	} else {
		window._gameCfg_.gameId = shsdkConf.IOS_PACKAGE_CODE;
	}
	console.log(window._gameCfg_);
	ShSdk.init({
		package_code: window._gameCfg_.gameId,
	});
	ShSdk.dataPlacement({
		action: 10000
	});
	ShSdk.dataPlacement({
		action: 30000
	});
    ShSdk.login((data) => {
			console.log("login：" + JSON.stringify(data))
			ShSdk.dataPlacement({
				action: 30001
			});
			wx.getSetting({
				success(res) {
					if (!res.authSetting['scope.userInfo']) {
						createUserInfoBtn(
							()=>{
								window.loginData = data;
							}
						);
					} else {
						window.loginData = data;
					}
				}
			});
    });
}

pageStart();

var recordFirst = function () {
	var idfa = window._gameCfg_.uuid;
	var rParam = "cid=" + window._gameCfg_.channel + "&idfa=" + idfa + "&step=0";
	wx.request({
		url: window._gameCfg_.accURL + '/action/user/deviceStep?' + rParam,
		success(res) {
			console.log("请求打点成功!");
			console.log(res.data);
		}
	});
}

recordFirst();

require('./manifest.js');
require('./egret.wxgame.js');

var fileutil = require('./library/file-util');
window.fileutil = fileutil;
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
	scaleMode: "fixedWidth",
	contentWidth: 720,
	contentHeight: 1280,
	showFPS: false,
	fpsStyles: "x:0,y:0,size:10,textColor:0xffffff,bgAlpha:0.8",
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
require("./FirstLoading.js");
runOptions.entryClassName = "FirstLoading";
runEgret();

wx.onShow((res) => {
	window.scene = res.scene;
	console.log(res)
	wx.getStorage({
		key: 'share_time',
		success(re) {
			wx.removeStorage({
				key: 'share_time',
				success(del) {
					console.log(del)
				}
			})
			let timestamp = new Date().getTime();
			console.log("时间差：", (timestamp - re.data));
			if (!window["platform"]) {
				return;
			}
			if ((timestamp - re.data) > 2000) {
				console.log("开始调用shareCallback");
				platform.shareCallback();
			} else {
				Toast.showTipsDownToUp("成功分享到群才可领取!");
			}
		}
	})
})

var removeLoading = function(){
	wx.hideLoading();
}
window.removeLoading = removeLoading;

var gameStar = function(processCallBack,processCallTarget,callback,calltarget){
	if (wx.loadSubpackage) {	  
	  let task1 = wx.loadSubpackage({
		// 开发者根据自身需求更改
		name: "stage1",
		success: function () {			
			let task2 = wx.loadSubpackage({
				// 开发者根据自身需求更改
				name: "stage2",
				success: function () {
						let task3 = wx.loadSubpackage({
						// 开发者根据自身需求更改
						name: "stage3",
						success: function () {
							callback.call(calltarget);
						}
					});
					task3.onProgressUpdate(res => {
						var p = res.totalBytesWritten || res.totalBytesWriten;
						var t = res.totalBytesExpectedToWrite;       
						var s = Math.floor(p / t * 100) + 100;
						console.log(`分包3加载中(${s}%)`); 
						processCallBack && processCallBack.call(processCallTarget,s,200);
					});
				}
			});
			task2.onProgressUpdate(res => {
				var p = res.totalBytesWritten || res.totalBytesWriten;
				var t = res.totalBytesExpectedToWrite;       
				var s = Math.floor(p / t * 100) + 100;
				console.log(`分包2加载中(${s}%)`); 
				processCallBack && processCallBack.call(processCallTarget,s,200);
			});
		}
	  });
	  task1.onProgressUpdate(res => {
		var p = res.totalBytesWritten || res.totalBytesWriten;
        var t = res.totalBytesExpectedToWrite;       
        var s = Math.floor(p / t * 100);
        console.log(`分包1加载中(${s}%)`); 
		processCallBack && processCallBack.call(processCallTarget,s,200);
	  });
	}
	else {
	  //低版本不支持分包兼容
    wx.showToast({
      title: '当前微信版本较低,请升级后进入游戏!',
      icon: 'none',
      duration: 6000000
    })
	}        
}
window.gameStar = gameStar;

var doClearCache = function(){
	wx.showLoading({
		title: '缓存清理中...'
	});
	const fm = wx.getFileSystemManager();
	fm.rmdir({
		dirPath: wx.env.USER_DATA_PATH + "/resource",
		recursive: true,
		success: function () {
			console.log("删除本地缓存成功~");
			wx.hideLoading();
			wx.showModal({
				title: '提示',
				content: '缓存清理成功,请重新进入小程序!',
				showCancel: false,
				success(res) {
					if (res.confirm) {
						wx.exitMiniProgram({});
					}
				}
			});
		},
		fail: function () {
			console.log("删除本地缓存失败~");
		}
	});
}
window.doClearCache = doClearCache;

//授权按钮
var createUserInfoBtn = function(callback){
	wx.getSystemInfo({
		success (res) {
			let left = (res.windowWidth / 2) - 100;
			let top = res.windowHeight - (res.windowHeight/4);
			let button = wx.createUserInfoButton({
				type: 'text',
				text: '授权登陆游戏',
				style: {
					left: left,
					top: top,
					width: 200,
					height: 40,
					lineHeight: 40,
					backgroundColor: '#07c160',
					color: '#ffffff',
					textAlign: 'center',
					fontSize: 16,
					borderRadius: 4
				}
			})
			button.onTap((res) => {
				console.log(res)
				if (res && res.userInfo) {
					window["ShSdk"].unionId(res,function(){});
					callback();
					button.destroy();
				}
			})
		}
	})
}