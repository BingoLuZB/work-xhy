if (typeof params === "undefined") {
	(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
}
params.isWeChatGame = true;
params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub';
params.subcontextRoot = '';
params.isDebug = false;
params.appModules = ['B710v','C276y','E6114'];
params.partName = '100032_wechat';
require('src/A44q4');
require('src/A34m7');
''
window.extendMixin=require('src/miniBase');
window.extendLib=require('src/senjinwechat');
