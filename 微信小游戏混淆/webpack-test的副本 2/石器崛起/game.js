if (typeof params === "undefined") {
	(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
}
params.isWeChatGame = true;
params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub_04';
params.subcontextRoot = '';
params.isDebug = false;
params.appModules = ['D2rk','E23ae','F722x'];
params.partName = '100029';
require('src/A5dr');
require('src/A0e6');
window.extendMixin=require('src/miniBase');
window.extendLib=require('src/senjinwechat');