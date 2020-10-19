

window["GAME_VERSION"] = 0;
window["GAME_NAME"] = "自过包";

var v = Math.floor(new Date().getTime() / 30000);
window["GAME_JSON_CONFIG"] = "https://huihecdn.h5gamecdn.club/wxjson/ziguo_xingheyue.json?v="+v;
var closeError = true;

window["__CONFIG__"] = {};
window["ISWEIXIN"] = true;
window["RES_VERSION_B"] = "1_";//全局资源版本
window["VersionDict"] = {};

//星河月自定义参数
window["__HUOSDK_XHY_APPID__"]=25;
window["__HUOSDK_XHY_MPID__"]="wx4ada95cbf421410a";

window["huoSdk"] = require('./sdk-1.0.1');


var img = new eui.Image()
function __StartLoading() {
  if(img && img.parent){
    img.parent.removeChild(img)  
  }
  
  window.StartMain.RunGame()
}
var GetUrlVer = function (id) {
    let v=VersionDict[id];
    v = window["RES_VERSION_B"]+""+(v?v:"")
    return v?id+"?v="+v:id;
}
window["GetUrlVer"] = GetUrlVer;

window['__IsAddLoginBg']=false;
function __AddLoginBg() {
  if (!window['__IsAddLoginBg']){
    window['__IsAddLoginBg'] = true;
  }else{
    return;
  }
  RES.getResByUrl(window.bgimgurl ? window.bgimgurl : "resource/assets/game_start/bg_weixin.jpg", function (obj) {
  img.texture = obj
  img.height = egret.MainContext.instance.stage.stageHeight
  img.width = img.height/(img.texture.textureHeight/img.texture.textureWidth)

  img.x = (egret.MainContext.instance.stage.stageWidth - img.width) >> 1
  img.y = (egret.MainContext.instance.stage.stageHeight - img.height) >> 1

  egret.MainContext.instance.stage.addChildAt(img,0)

}, this, RES.ResourceItem.TYPE_IMAGE)
}

window['__StartLoading'] = __StartLoading;
window['__AddLoginBg'] = __AddLoginBg;

var closeError = true;