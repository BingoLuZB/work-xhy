if (typeof params === "undefined") {
	(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
}
params.isWeChatGame = true;
params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub';
params.subcontextRoot = '';
params.isDebug = false;
params.appModules = ['eex','app1','app2'];
params.partName = '100029_wechat';
require('src/rt');
require('src/shell');
''

window.extendLib=require('src/senjinwechat');

