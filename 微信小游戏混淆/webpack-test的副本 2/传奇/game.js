require("libs/weapp-adapter.js");
require("libs/laya.core.js");
require("libs/laya.wxmini.js");
require("libs/laya.webgl.js");
require("libs/laya.ui.js");
require("libs/laya.html.js");
require("libs/laya.ani.js");
require("libs/laya.filter.js");
require("libs/zlib.min.js");
// window['awsdk'] = require('libs/sdk_wxa.js');
GameGlobal.huoSdk = require("libs/sdk-1.0.1.js")
window['sdkChannelName']="xingheyue_wx_mjcq";

// require("hortor/sdk.js");
// require("libs/GankVIPSDK.js");

var sdk = wx;
// sdk.setEnableDebug({
//     enableDebug: true
// });

// sdk.showShareMenu({
//     withShareTicket: true,
//     success: function (res) { }
// })
const updateManager = sdk.getUpdateManager();
updateManager.onCheckForUpdate(res => console.log(res));
updateManager.onUpdateReady(() => {
    sdk.showModal({
        title: '提示',
        content: '检查到新版本， 是否重启？',
        success(res) {
            if (res.confirm) {
                updateManager.applyUpdate();
            }
        }
    });
});


window.loadLib = require;
window.Parser = require("libs/dom-parser.js");

//reload只读
window.reload = function () {
    wx.exitMiniProgram();
}
// window['isOld'] = true;
// window['logcdndnUrl'] = 'domres/logo/shabakelogo.png';
window['logcdndnUrl'] = '';
window["bgcdndnUrl"] = 'domres/bg/xingheyue_202101151856.jpg';
window['codetip'] = 'res/wxguide/zhizunbayebaize.jpg';
window['channeltipname'] = '3.点击消息中的“热血之刃”';
window["officialaccountname"] ="热血之刃";
window["channelRes"] ="zhizunbayebaize";
window["channel"] = {};
window["KtChannelId"] = window["channel"].channelID = 10070;
window["iswx"] = true;
window["isbaize"] =true;
window['ktgamepreloadjdk'] = {
    debug: false,
    //该值大于config.json配置中online,则意味着目前是审核状态
    online: 79,
    renderMode: "webgl",
    isAutoEnter: true,
    iswxMode: true,
    offY: 40,
    env: 0,
    ktjsonnum: 12,
    returnIndex: -2,
    //渠道接入地址
    // churl: 'https://wxlogin.djsh5.com/',
    url:'wss://xingheyuexcx-loginwan.ktsdk.com:8030/',
    // url:'wss://9377-loginwan.sbk-h5.com:8030/',
    //资源服地址
    // resurl:'http://10.5.3.224:4444/' 
    // resurl: 'https://h5testgame1.sbk-h5.com/wxbaize/',
    resurl: 'https://h5download.sbk-h5.com/game/xingheyue/'
//   resurl: 'https://h5download.menghuixianling.com/game/shenhaiwxsbkol/'
};
window["publicversion"] =""



window['sendError'] = function (msg, serverID) {
    serverID = serverID || 0;
    var url = `https://xiaochengxu-big-data.sbk-h5.com:8113/clientLog?message=${msg}&svrid=${serverID}`;
    var ajax = new XMLHttpRequest();
    ajax.open("get", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log("报错上报成功")
            }
            else {
                console.log("报错上报失败")
            }
        }
        else {
        }
    }
    ajax.send();
}

wx.onError(function callback(e) {
    // var serverID = window['ktgamepreloadjdk'] ? window['ktgamepreloadjdk']['serverID'] : 0;
    // window['sendError'](e.message, serverID)
});
try {
    var options = wx.getLaunchOptionsSync();
    window['wxscene'] = options.scene;
    console.log('场景值：', options.scene)
    var query = options.query;
    var referrerInfo = wx.getLaunchOptionsSync().referrerInfo; //新增 获取小程序通过extra-data参数 

    referrerInfo.extraData = 'adfsdf213，'
    var chid = 0;
    var subchid = '';
    var fuid = ''; //用户分享的uid
    var titleid = 1;
    fuid = query.fuid ? query.fuid : '';
    if (query.chid) {   //链接进入
        chid = query.chid;
        subchid = query.subchid ? query.subchid : '';
        titleid = query.titleid ? query.titleid : '';
    } else if (query.scene) { //小程序码扫描进入，通过透传的场景值中解析chid和subchid
        var sceneObj = {};
        var sceneList = decodeURIComponent(query.scene).split(",");
        for (var i = 0; i < sceneList.length; i++) {
            var sceneItem = sceneList[i];
            sceneObj[sceneItem.split(":")[0]] = sceneItem.split(":")[1];
        }
        fuid = sceneObj.fuid ? sceneObj.fuid : '';
        if (sceneObj.chid) {
            chid = sceneObj.chid;
            subchid = sceneObj.subchid ? sceneObj.subchid : '';
            titleid = sceneObj.titleid ? sceneObj.titleid : '';
        }
    } else if (referrerInfo.extraData) {  // 新增  通过小程序 extra-data传值进入
        if (typeof (referrerInfo.extraData) === "string") {
            referrerInfo.extraData = JSON.parse(referrerInfo.extraData);
        }
        chid = referrerInfo.extraData.chid;
        subchid = referrerInfo.extraData.subchid;
    }
    chid = parseFloat(chid);
    if (isNaN(chid) || !chid) {
        chid = 0;
    }
}
catch (e) {
    window['sendError'](e);
}

// 这里对接深海(将对接代码放上来是因为需要代码里的初始化以及数据上报)
require("libs/channel_xhywx.js");

// 拿到SDK的实例
var gamesdk = window['kth5sdk'];




window['ktgamepreloadjdk'].chid = chid;// 1967
window['ktgamepreloadjdk'].subchid = subchid;//1111959545
window['ktgamepreloadjdk'].fuid = fuid;
window['ktgamepreloadjdk'].frid = query.frid;
window['ktgamepreloadjdk'].titleid = titleid;
console.log('渠道信息:', window['ktgamepreloadjdk'])
// require("libs/channel_local.js");

window['md5'] = require("libs/require.js");
require("libs/gamestart.js");



wx.showLoading({
    title: '正在加载.',
    mask: true,
    complete: function () {
        window.requirejs(['src/GameStart'], function () {
            
            wx.hideLoading();
        }, function () {
        });
    }
})

window['kth5sdk'].init();
// wx.request({
// url:'https://servicewechat.com/wx7ee1501d1666aa20/1/page-frame.html',
// success:function(res)
// {
//     const version = res.data.reffer && res.data.reffer.split('/')[4];
//     console.log('环境',version);
// }
// });



// throw 'asdfsadf';