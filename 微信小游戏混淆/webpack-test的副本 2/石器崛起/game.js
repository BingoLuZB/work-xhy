if (typeof params === "undefined") {
	(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
}
params.isWeChatGame = true;
params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub';
params.subcontextRoot = '';
params.isDebug = false;
params.appModules = ['C1zl','D76qz','F9gn'];
params.partName = '100032_wechat';
require('src/B24q2');
require('src/B14m5');
''
window.extendMixin=require('src/miniBase');
window.extendLib=require('src/senjinwechat');
