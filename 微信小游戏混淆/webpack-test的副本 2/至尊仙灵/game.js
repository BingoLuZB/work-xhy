
require('./weapp-adapter.js');
window["isSmallGame"] = true;
window["isSmallGameWX"] = true;
// window["loginUrl"] = "http://192.168.1.85:5515/";//内网测试服
// window["loginUrl"] = "https://ltcq.gltcq.com:2604/login/";//外网审核服
window["loginUrl"] = "https://wlmz.palmenter.com/";//外网正式服
// window["loginUrl"] = "https://wlmz5515.lkgame.com:5515/";//外网测试服
window["clientVersion"] = "__UNDEFINED__";
var v = 147;        // 资源版本号
window["wlmzV"] = v;
if (!isNaN(v)) {
    window["wlmzCdn"] = "https://cdnlytj.lkgame.com/game_space/lytj/v4_newui/prd/";
    window["paraUrl"] = "?v="+v+"&hosts="+ window["wlmzCdn"];
}
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

require("./sdk/qingjs-conf.js");
var qingjs = require("./sdk/qingjs-wxapp.js");
window["qingjs"] = qingjs;

window["GetUrlParam"] = function(paraName) {
    return "";
};

window["GetChannel"] = function() {
    return "20129_1";
}

qingjs.instance.login({}, function (loginResult) {
    // loginResult.code // 200 为成功，其他则失败
    // loginResult.uid // 用来标记唯一用户
    // loginResult.token // 用户token
    // loginResult.message // 登录结果描述
    console.log("登录结束回调数据");
    console.log(loginResult);
    window["qingjsUserInfo"] = JSON.stringify(loginResult);
});


// 启动QQ小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 检查资源版本号
var cachedV = localStorage.getItem("wlmzQQCachedV");
// 如发生变动，则删除旧缓存
if (cachedV!=v) {
    console.log("旧版本："+cachedV+"，新版本："+v+"，需要删除旧版本")
    localStorage.setItem("wlmzQQCachedV", v);
    const fileutil = require('./library/file-util');
    fileutil.fs.removedirs("https");
    fileutil.fs.removedirs("http");
}
if(window.RES && RES.processor) {
    // 只有使用 assetsmanager 的项目可以使用
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
} else {
    // 旧的res模块支持QQ小游戏本地缓存
    require('./library/resimage.js');
    require('./library/restext.js');
}

let runOptions = {
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 580,
		contentHeight: 930,
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
};

const runEgret = function () {
    var env = window["wx"];
    const res = env.getSystemInfoSync();
    var w = res.windowWidth;
    var h = res.windowHeight;
    if(w/h > 580/930){
        runOptions.scaleMode = "fixedHeight";
    }else{
        runOptions.scaleMode = "fixedWidth";
    }
    egret.runEgret(runOptions);
}

if (wx.loadSubpackage) {
    require("./EgretSubPackageLoading.js");
    runOptions.entryClassName = "EgretSubPackageLoading";
    runEgret();
    require("./sdk/cxui.egret.js")
    var packages = ["stage1", "stage2", "stage3", "stage4", ];
    var loadInfo = {
        curPackIdx: 0
    };
    function checkLoad() {
        var i = loadInfo.curPackIdx;
        if (i>=packages.length) {
            EgretSubPackageLoading.instance.onSuccess();
            return;
        }
        loadInfo.curPackIdx += 1;

        var pak = packages[i];
        let task = wx.loadSubpackage({
            name: pak,
            success: function () {
                checkLoad();
            }
        });
        task.onProgressUpdate(res => {
            EgretSubPackageLoading.instance.setProgress(i, res);
        })
    }
    
    checkLoad();

}
else {
    //
    require("./stage1/game.js");
    runEgret();
}
