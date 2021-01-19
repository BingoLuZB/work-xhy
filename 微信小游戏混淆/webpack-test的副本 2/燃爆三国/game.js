require("libs/weapp-adapter.js"),
window.loadLib=require, 
window.Parser = require("libs/dom_parser"), 
require("libs/sax"),
require("libs/zlib.min.js"),
require("libs/expreval.min.js"),
require("libs/laya.min.js"),

//require("libs/sg.js"),
//require("libs/xiyougamesdk/xiyougamesdk.js"),
//require("libs/xiyougamesdk/config.js"),
//require("libs/xiyougamesdk/utils/common.js"),
//require("libs/xiyougamesdk/utils/event.js"),
//require("libs/qqSDK.js"),

//require("libs/mpsdk.js"),
//require("libs/WeChatMiniGameSDK.js"),

//require("libs/CzSDK.js"),
//require("libs/zhijianMiniGameSDK.js"),

require("libs/sdk-1.0.1.js"),
require("libs/czsdk_WeChat.js"),
require("libs/zhijianWeChatSDK.js");

//const canvas2 = wx.createCanvas()
//const context = canvas2.getContext('2d') // 创建一个 2d context
//context.fillStyle = '#1aad19' // 矩形颜色
//context.fillRect(0, 0, 100, 100) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)

const loadTask = wx.loadSubpackage({
  name: 'boot', 
  success: function(res) {
    // 分包加载成功后通过 success 回调
    //GameGlobal.FIRSTRENDER = false;
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,0);
	//loadSubpackages(0);
    console.log("SUCCESS");
	loadSubpackages(0);
  },
  fail: function(res) {
    console.log("fail")
    // 分包加载失败通过 fail 回调
  }
})

GameGlobal.srclist=[];
GameGlobal.srclist.push('engine');
GameGlobal.srclist.push('datasets');
GameGlobal.srclist.push('net');
GameGlobal.srclist.push('pages');

GameGlobal.srclist.push('enem');
GameGlobal.srclist.push('com');
GameGlobal.srcindex=0;

function loadSubpackages(index) {
  wx.loadSubpackage({
    name: GameGlobal.srclist[index], 
    success: function(res) {
     // 分包加载成功后通过 success 回调
      GameGlobal.srcindex++;
      if(index ==0)
      {
       for(var i=1;i < GameGlobal.srclist.length -2;i++)
       {
         loadSubpackages(i);
        }
      }
      if(GameGlobal.srcindex  >=GameGlobal.srclist.length -2  &&GameGlobal.srcindex <=GameGlobal.srclist.length -1)
      {
       loadSubpackages(GameGlobal.srcindex);
      } 
      console.log("SUCCESS")
   },
    fail: function(res) {
     console.log("fail")
      //分包加载失败通过 fail 回调
    }
  })
}

