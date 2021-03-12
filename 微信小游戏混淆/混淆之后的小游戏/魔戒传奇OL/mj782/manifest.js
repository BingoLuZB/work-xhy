require("./js/egret.min.js")
require("./js/game.min.js")
require("./js/eui.min.js")
require("./js/res.min.js")
require("./js/tween.min.js")
require("./js/socket.min.js")
require("./js/jszip.min.js")
require("./js/Buffer.min.js")
require("./js/HawkProtocolManager.min.js")
require("./js/HawkSocket.min.js")
require("./js/async.min.js")
require("./js/EgretWSBinary.min.js")
require("./js/sdkConfig.min.js")
require("./js/HawkSocketProxy.min.js")
require("./js/HawkProtocol.min.js")
require("./js/Long.min.js")
require("./js/ByteBufferAB.min.js")
require("./js/ProtoBuf.min.js")
require("./js/BinaryData.min.js")
// require("./js/ttConfig.min.js")
require("./js/greensock.min.js")
// require("./js/main.min.js")
// require("./default.thm.js")
if (wx.loadSubpackage) {
  wx.loadSubpackage({
    // 开发者根据自身需求更改
    name: "stage2",
    success: function () {
    }
  });
}
