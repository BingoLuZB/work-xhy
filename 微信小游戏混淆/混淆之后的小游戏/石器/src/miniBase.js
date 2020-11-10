"use strict";window.A6g0=function(){(function(){function r(A6q,A7r,A5p){function A9t(A1l,A2w){if(!A7r[A1l]){if(!A6q[A1l]){var A8s="function"==typeof require&&require;if(!A2w&&A8s)return A8s(A1l,!0);if(A2m)return A2m(A1l,!0);var a=new Error("Cannot find module '"+A1l+"'");throw a.code="MODULE_NOT_FOUND",a}var A321=A7r[A1l]={exports:{}};A6q[A1l][0].call(A321.exports,function(r){var A7r=A6q[A1l][1][r];return A9t(A7r||r)},A321,A321.exports,r,A6q,A7r,A5p)}return A7r[A1l].exports}for(var A2m="function"==typeof require&&require,A1l=0;A1l<A5p.length;A1l++){A9t(A5p[A1l])}return A9t}return r})()({1:[function(require,A2ha,exports){"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: Mandragora 
         * @date: 2018-06-08 18:26:28 
         * @last Modified by:   Mandragora 
         * @last Modified time: 2018-06-08 18:26:28 
         */// window.miniGameMain = function () {
A5e1.A1e7.A2e8=false;A5e1.A1e7.A3e9=true;A5e1.A1e7.A21x8=true;// b8e.macro.EDTEXT_ALAWYS_ON_TOP = true;
// b8e.macro.DEFAULT_CACHE_MODE = 2;
//b8e.macro.DEFAULT_FONT_FAMILY = "YouYuan";
// b8e.ResMgr.DEFAULT_FORMAT_RGBA = "img.png";
// b8e.ResMgr.DEFAULT_FORMAT_RGB = "img.jpg";
// b8e.ResMgr.USE_BACB = true;
// b8e.ResMgr.ORIGINAL_EXT_NAME = b8e.isWeChatGame;
A5e1.A4ea.A5eb=true;// b8e.Texture2D.DEFAULT_FORMAT = b8e.PixelFormat.RGBA4444;
// b8e.ResMgr.IS_DEBUG = true;
// b8e.NetMgr.IS_DEBUG = true;
// b8e.NetMgr.DUMP_RADIX = 10;
/**版本号 */A7e3.VERSION="2.1.0";/**引擎版本号 */A7e3.A6ec="4.3.1_smart04_rc01_2020081618";/**配置是否是debug模式 */A7e3.A8ee=false;//b8e.log('感谢上帝，编译完了');
// b8e.res.setUseCache(false);
A5e1.A0eg=A5e1.Event.A1eh;// b8e.Texture2D.ENABLE_FORMAT_ASTC = true;
// b8e.Texture2D.ENABLE_FORMAT_PVR = true;
// b8e.Texture2D.ENABLE_UNZIP = true;
B23o=A5e1.A8eo.extends({A9ep:null,A0eq:null,A1er:function A1er(){var A5p=this;A5p.A2es()},A3et:function A3et(B33p){var A5p=this;if(A5p.A9ep){return}A5p.A9ep=new A5e1.A4eu;// b8e.settings.resolutionPolicy = b8e.ResolutionPolicy.SHOW_ALL;
// b8e.settings.resolutionPolicy = b8e.ResolutionPolicy.FIXED_WIDTH;
//b8e.settings.resolutionPolicy = b8e.ResolutionPolicy.FIXED_HEIGHT;
A5e1.A5ev.A6ew=A5e1.A7ex.A8ey;A7e3.A7en=A5e1.params.A9ez!==undefined;var A71c9={width:720,height:1280,A0f0:720,A1f1:960,A2f2:1280,/*minHeight: 970iPhoneX和PC的竖屏边界值 */A3f3:2272/*全面屏以下 */};A5p.A9ep.A3et(B33p,A71c9,A5p.A3fx,A5p)},A3fx:function A3fx(A4554){var A5p=this;//b8e.log('onInited:1');
if(A4554){return}if(A5e1.isWeChatGame){if(wx&&wx.setKeepScreenOn){wx.setKeepScreenOn({keepScreenOn:true})}}A5p.A0eq=new A7e3.B43q;A7e3.A5gj=A5p.A0eq;A5p.A0eq.A6gk();A5p.A0eq.A7gl()}});// };
A5e1.A3hv("$$A7e3","$$A7g1",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * Black8 Game Studio By Lzx
         * @author 李钊贤
         * @version 创建时间： 2017-6-30 16:35:00
         * BaseProcessRun
         */B23o=A5e1.A8eo.extends({A1q5:null,A7zh:false,A6gk:function A6gk(){var $=this;$.A1q5=new A5e1.A8zi;$.A1q5.A9zj(new A7e3.B53r);$.A1q5.A9zj(new A7e3.B63s);$.A1q5.A9zj(new A7e3.B73t)},A7gl:function A7gl(){var $=this;$.A1q5.A8zs();$.A1q5.A9zt(A7e3.B83u.B93v,0,1);$.A1q5.A9zt(A7e3.B83u.B03w,0,1);$.A1q5.A9zt(A7e3.B83u.B13x,0,1);$.A1q5.A6e2()},A5ov:function A5ov(){var $=this;$.A1q5.A8zs();// $.main.addPreProcess(game.BaseProcessTypes.LOAD_SDK, 0, 0.02);
// $.main.addPreProcess(game.MiniGameProcessType.MINI_ENTER_GAME, 0, 1);
$.A1q5.A9zt(A7e3.B83u.B03w,0,1);$.A1q5.A9zt(A7e3.B83u.B13x,0,1);$.A1q5.A6e2()},A7101:function A7101(){var $=this;if(!$.A7zh){$.A7zh=true;// $.loadModule();
}}});;A5e1.A3hv("$$A7e3","$$B43q",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 13:59:02 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-06 10:45:21
         */B23o=A5e1.A8i0({A9ld:0,B03w:1,//开始游戏
B93v:2,//进入游戏
B13x:3//游戏结束
});;A5e1.A3hv("$$A7e3","$$B83u",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 14:00:36 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-06 23:00:59
         */B23o=A5e1.A710b.extends({A1er:function A1er(){this.A2es()},A010e:function A010e(){return A7e3.B83u.B93v},A210g:function A210g(){var A5p=this;// t.skinUrl = "ui/base/prefabs/mini_game/game_start.bui";
if(!A5p.B23y){A5p.A910d="ui/base/mini_game/mini_game_start_view.bui";A5e1.A1fb.A3fd(A5p.A910d,A5e1.A510j,A5p.A610k,A5p)}else{A5p.A610k()}},////
A610k:function A610k(){var A5p=this;A5p.B23y=true;//加载开始界面
if(!A5p.B33z){A5p.B33z=new A7e3.B440;A5p.B33z.data={B541:A5p.B642,A6m4:A5p}}var B743=A5e1.layer.A51sb();B743.A0jg(A5p.B33z);// if (t.skinUrl) {
//     b8e.res.unloadRes(t.skinUrl, t.onResComplete, t);
//     t.skinUrl = null;
// }
},B642:function B642(){this.A310h()},A310h:function A310h(){var A5p=this;if(A5p.B33z){A5p.B33z.A4ke()}A5p.A2es()}});;A5e1.A3hv("$$A7e3","$$B53r",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 14:00:36 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-06 23:00:45
         */B23o=A5e1.A710b.extends({A1er:function A1er(){this.A2es()},A010e:function A010e(){return A7e3.B83u.B03w},A210g:function A210g(){var A5p=this;// t.skinUrl = "ui/base/prefabs/mini_game/ServerListSkin.bui";
if(!A5p.B23y){A5p.A910d="ui/base/mini_game/mini_game_scene.bui";A5e1.A1fb.A3fd(A5p.A910d,A5e1.A510j,A5p.A610k,A5p)}else{A5p.A610k()}},A610k:function A610k(){var A5p=this;A5p.B23y=true;//加载开始界面
if(!A5p.B844){A5p.B844=new A7e3.A34qn;A5p.B844.data={B945:A5p.B945,A6m4:A5p}}var B743=A5e1.layer.A51sb();B743.A0jg(A5p.B844)},B945:function B945(){this.A310h()},A310h:function A310h(){var A5p=this;if(A5p.B844){A5p.B844.A4ke()}A5p.A2es()}});;A5e1.A3hv("$$A7e3","$$B63s",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 14:00:36 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-06 23:00:51
         */B23o=A5e1.A710b.extends({A1er:function A1er(){this.A2es()},A010e:function A010e(){return A7e3.B83u.B13x},A210g:function A210g(){var A5p=this;// t.skinUrl = "ui/base/prefabs/mini_game/game_start.bui";
if(!A5p.B23y){A5p.A910d="ui/base/mini_game/mini_game_over_window.bui";A5e1.A1fb.A3fd(A5p.A910d,A5e1.A510j,A5p.A610k,A5p)}else{A5p.A610k()}},////
A610k:function A610k(){var A5p=this;A5p.B23y=true;//加载开始界面
if(!A5p.B046){A5p.B046=new A7e3.B147;A5p.B046.data={B248:A5p.B248,A6m4:A5p}}var B743=A5e1.layer.A51sb();B743.A0jg(A5p.B046);A5p.A811g();// if (t.skinUrl) {
//     b8e.res.unloadRes(t.skinUrl, t.onResComplete, t);
//     t.skinUrl = null;
// }
},B248:function B248(){var A5p=this;if(A5p.B046){A5p.B046.A4ke()}}});;A5e1.A3hv("$$A7e3","$$B73t",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 20:14:21 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-06 20:59:03
         */B23o=A5e1.A4ko.extends({A1er:function A1er(){var A5p=this;var url="base/mini_game/mini_game_start_view.bui";A5p.A2es(url)},onShow:function onShow(){var A5p=this;A5e1.A1gz.A2h0(A5p,A5e1.Event.A5jl,A5p.A3rl);A5p.A3rl()},onHide:function onHide(){var A5p=this;A5e1.A1gz.A6la(A5p,A5e1.Event.A5jl,A5p.A3rl)},A3r1:function A3r1(){var A5p=this;A5e1.setTimeout(A5p.A6re,A5p,200)},/**
           * 点击开始
           */A6re:function A6re(){var A5p=this;if(!A5p.A6kq){return}var B541=A5p.data.B541;if(B541){B541.call(A5p.data.A6m4)}},A3rl:function A3rl(){var A5p=this;// t.setPosition((b8e.stageWidth - t.width) * 0.5, b8e.stageHeight - (b8e.stageHeight - t.height) * 0.5);
A5p.A6kq.A0qe.width=A5e1.A3jt;A5p.A6kq.A0qe.height=A5e1.A3k3;A5p.A6ho(0,A5e1.A3k3-(A5e1.A3k3-A5p.height)*0.5)},A5kz:function A5kz(){this.A3rl()}});;A5e1.A3hv("$$A7e3","$$B440",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 20:14:21 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2020-01-14 20:45:33
         */B23o=A5e1.A4ko.extends({A1er:function A1er(){var A5p=this;var url="base/mini_game/mini_game_scene.bui";A5p.A2es(url)},onShow:function onShow(){var A5p=this;A5e1.A1gz.A2h0(A5p,A5e1.Event.A5jl,A5p.A3rl);A5p.A3rl();A5p.B349()},//开始游戏，游戏的具体实现逻辑
B349:function B349(){var A5p=this;var B44a=A5e1.A3k3;A5p.B54b=8;// t.horizonalGrid = (sw / 148) + 1;
A5p.B64c();A7e3.B74d.B84e=1;A7e3.B74d.A715v=0;A7e3.B74d.B94f=false;A5p.B04g=0;for(var A1l=0;A1l<=A5p.B54b;A1l++){A5p.B14h(A1l)}if(!A5p.A8r6){A5p.A8r6=A5e1.A4ng.add(A5p,A5p.B24i,155)}A5p.B34j=false},B24i:function B24i(){var A5p=this;var time=A5e1.A9gx.A51gn();if(!A5p.B04g){A5p.A6kq.time.string="20'00\"";A5p.A8r6.stop();return}if(time>A5p.B04g){A5p.A6kq.time.string="\u65F6\u95F4\u5230\u4E86";A5p.A8r6.stop();A5e1.setTimeout(A5p.B44k,A5p,1000);return}var B54l=Math.floor((A5p.B04g-time)/1000);var A5311=Math.floor((A5p.B04g-time-B54l*1000)/10);var string=B54l+"'"+A5311+"\"";A5p.A6kq.time.string=string},//绘制画布
B64c:function B64c(){var A5p=this;var A6kq=A5p.A6kq;A6kq.A7e3.A6ho(0,-1136);A6kq.A8rg.A6ho(0,306);A6kq.A169l.A6ho(0,306);A6kq.A269m.A6ho(0,1906);A5p.A54er=0;A5p.bool=true},/**
           * 创建蚊子
           */B14h:function B14h(A71sx){var A5p=this;var A6kq=A5p.A6kq;// let horizonalGrid = t.horizonalGrid;
if(!A5p.B64m){A5p.B64m=[]}var B74n=void 0;var type=void 0;var B84o=void 0;var A6di=Math.floor(4*Math.random());var B94p=(A71sx+1)*160;var B04q=void 0;if(A5p.B14r&&A5p.B14r.length>0){B04q=A5p.B14r.shift()}else{B04q=[]}if(!A5p.B64m){A5p.B64m=[]}A5p.B64m.push(B04q);// if (wzArr.length > 0) {
//     b8e.warn('列表内还有未回收的蚊子:', line);
// }
for(var A1l=0;A1l<4;A1l++){// wenziItem = game.GameWenziItem.get();
if(B04q&&B04q[A1l]){B84o=B04q[A1l]}else{B84o=new A7e3.B24s;B04q.push(B84o)}type=A71sx!=0&&A1l==A6di?1:0;if(A1l==A6di){A7e3.B74d.B34t(A71sx,A6di)}B84o.A1tr(type,A71sx,A1l,A5p.B44u,A5p);B84o.A2js(160,160);if(!B84o.parent&&A6kq.A7e3){B84o.A6tc(A6kq.A7e3)}B74n=A1l*160;B84o.A6ho(B74n,B94p)}},B44u:function B44u(B54v){var A5p=this;A5p.B64w();if(!B54v){A5e1.setTimeout(A5p.B44k,A5p,1000);return}var A6kq=A5p.A6kq;A5p.B54b++;A5p.B74x(A7e3.B74d.B84e);A5p.B14h(A5p.B54b);var B84y=void 0;if(A6kq.A7e3){B84y=A6kq.A7e3.y-160;A5e1.A3z3.get(A6kq.A7e3).A4z4({y:B84y},200)}if(A6kq.A8rg){A5p.A54er+=160;A5p.B94z();B84y=A6kq.A8rg.y-160;A5e1.A3z3.get(A6kq.A8rg).A4z4({y:B84y},200)}if(A6kq.A169l){B84y=A6kq.A169l.y-160;A5e1.A3z3.get(A6kq.A169l).A4z4({y:B84y},200)}if(A6kq.A269m){B84y=A6kq.A269m.y-160;A5e1.A3z3.get(A6kq.A269m).A4z4({y:B84y},200)}},B94z:function B94z(){var A5p=this;if(A5p.A54er<1600){return}A5p.A54er=0;var A6kq=A5p.A6kq;if(A5p.bool){A6kq.A169l.y=A6kq.A269m.y+1600}else{A6kq.A269m.y=A6kq.A169l.y+1600}A5p.bool=!A5p.bool},B74x:function B74x(A71sx){//第一次不回池
if(A71sx==2){return}var A5p=this;var B64m=A5p.B64m;if(!B64m||B64m.length<1){return}if(!A5p.B14r){A5p.B14r=[]}var B84o=void 0;var B04q=B64m.shift();if(B04q&&B04q.length>0){var B050=B04q.length;for(var A6di=0;A6di<B050;A6di++){B84o=B04q[A6di];B84o.A4ke();// t.wenziPool.push(wenziItem);
}// wzArr.length = 0;
}A5p.B14r.push(B04q)},B44k:function B44k(){var A5p=this;var B64m=A5p.B64m;if(B64m&&B64m.length>0){var len=B64m.length;var B84o=void 0;if(!A5p.B14r){A5p.B14r=[]}for(var A1l=0;A1l<len;A1l++){var B04q=B64m[A1l];if(B04q&&B04q.length>0){var B050=B04q.length;for(var A6di=0;A6di<B050;A6di++){B84o=B04q[A6di];// wenziItem.realse();
B84o.A4ke();// game.GameWenziItem.put(wenziItem);
// t.wenziPool.push(wenziItem);
}// wzArr.length = 0;
A5p.B14r.push(B04q)}}B64m.length=0}var B945=A5p.data.B945;if(B945){B945.call(A5p.data.A6m4)}},B64w:function B64w(){var A5p=this;if(A5p.B34j){return}A5p.B34j=true;A5p.B04g=A5e1.A9gx.A51gn()+20000;if(A5p.A8r6){A5p.A8r6.reset();A5p.A8r6.start()}},onHide:function onHide(){var A5p=this;if(A5p.A8r6){A5e1.A4ng.remove(A5p,A5p.B24i);A5p.A8r6=null}A5e1.A1gz.A6la(A5p,A5e1.Event.A5jl,A5p.A3rl)},A3rl:function A3rl(){var A5p=this;// t.setPosition((b8e.stageWidth - t.width) * 0.5, b8e.stageHeight - (b8e.stageHeight - t.height) * 0.5);
A5p.A6ho((A5e1.A3jt-A5p.width)*0.5,A5e1.A3k3-(A5e1.A3k3-A5p.height)*0.5)},A5kz:function A5kz(){this.A3rl()}});;A5e1.A3hv("$$A7e3","$$A34qn",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-05 20:14:21 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-07 00:06:32
         */B23o=A5e1.A4ko.extends({A1er:function A1er(){var A5p=this;var url="base/mini_game/mini_game_over_window.bui";A5p.A2es(url)},onShow:function onShow(){var A5p=this;A5e1.A1gz.A2h0(A5p,A5e1.Event.A5jl,A5p.A3rl);A5p.A3rl();A5p.B151()},B151:function B151(){var A5p=this;var A6kq=A5p.A6kq;A6kq.title.string="\u9177\uFF01\u4E00\u591Cpia\u4E86"+A7e3.B74d.A715v+"\u53EA\u868A\u5B50\uFF01\n\u597D\u68D2\u54E6\uFF01\u868A\u9999\u6740\u866B\u5242\u4EC0\u4E48\u7684\u90FD\u5F31\u7206\u4E86\u3002";A6kq.A715v.string="\u5F97\u5206 "+A7e3.B74d.A715v;A6kq.A969j.string="\u6700\u4F73 "+A7e3.B74d.B252},onHide:function onHide(){var A5p=this;A5e1.A1gz.A6la(A5p,A5e1.Event.A5jl,A5p.A3rl)},A769h:function A769h(){var A5p=this;A5e1.setTimeout(A5p.B353,A5p,200)},/**
           * 点击重来
           */B353:function B353(){var A5p=this;if(!A5p.A6kq){return}var B248=A5p.data.B248;if(B248){B248.call(A5p.data.A6m4)}A7e3.A5gj.A5ov()},A3rl:function A3rl(){var A5p=this;// t.setPosition((b8e.stageWidth - t.width) * 0.5, b8e.stageHeight - (b8e.stageHeight - t.height) * 0.5);
A5p.A6kq.A669g.width=A5e1.A3jt;A5p.A6kq.A669g.height=A5e1.A3k3;A5p.A6ho(0,A5e1.A3k3-(A5e1.A3k3-A5p.height)*0.5)},A5kz:function A5kz(){this.A3rl()}});;A5e1.A3hv("$$A7e3","$$B147",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-06 15:22:56 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-07 00:01:03
         */B23o=A5e1.A4ko.extends({A6di:0,A71sx:0,A1er:function A1er(){var A5p=this;var url="base/mini_game/wz_grid.bui";A5p.A2es(url)},A1tr:function A1tr(type,A71sx,A6di,A613m,A6m4){var A5p=this;A5p.type=type;A5p.A71sx=A71sx;A5p.A6di=A6di;A5p.A613m=A613m;A5p.A6m4=A6m4},onShow:function onShow(){var A5p=this;var A6kq=A5p.A6kq;if(!A5p.A6kq){return}A6kq.A669g.active=false;A6kq.A769r.active=false;A6kq.A669q.active=A5p.type==1},A869s:function A869s(){var A5p=this;if(A7e3.B74d.B94f){return}var B454=A7e3.B74d.B555(A5p.type,A5p.A6di,A5p.A71sx);if(!B454){return}var A6kq=A5p.A6kq;var B54v=A7e3.B74d.B656(A5p.A6di);if(A5p.type==1){A6kq.A669q.active=!B54v;A6kq.A769r.active=B54v}else{if(!B54v){A6kq.A669g.active=true;A5e1.A3z3.get(A6kq.A669g).A4z4({alpha:0.5},200).A4z4({alpha:1},200)}}if(A5p.A613m){A5p.A613m.call(A5p.A6m4,B54v)}}});;A5e1.A3hv("$$A7e3","$$B24s",B23o)})();;"use strict";;(function(){"use strict";var B23o=void 0;/**
         * @author: lizhaoxian 
         * @Date: 2019-11-06 15:40:38 
         * @Last Modified by: lizhaoxian
         * @Last Modified time: 2019-11-07 02:02:21
         */B23o=A5e1.A8eo.extends({A715v:0,B252:0,// curIndex: 0,
B84e:0,B94f:false,B656:function B656(A6di){var A5p=this;if(!A5p.B757){return false}var A85zi=A5p.B757[A5p.B84e];var bool=A85zi==A6di;if(bool){A5p.B858(A5p.B84e+1)}A5p.B94f=!bool;return bool},B555:function B555(type,A6di,A71sx){var A5p=this;if(A5p.B84e!=A71sx){return false}var A85zi=A5p.B757[A5p.B84e];if(A85zi!=A6di&&A71sx==1){return false}return true},B858:function B858(A71sx){var A5p=this;A5p.B84e=A71sx;A5p.A715v++;if(A5p.A715v>A5p.B252){A5p.B252=A5p.A715v}},B34t:function B34t(A71sx,A6di){var A5p=this;if(!A5p.B757){A5p.B757=[]}A5p.B757[A71sx]=A6di;// t.wenziList.push(index);
}});A7e3.B74d=A7e3.B74d||new B23o;;A5e1.A3hv("$$A7e3","$$B959",B23o)})();;},{}]},{},[1])};