if (typeof params === "undefined") {
	(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
}
params.isWeChatGame = true;
params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub';
params.subcontextRoot = '';
params.isDebug = false;
params.appModules = ['C910n','D874m','F0ua'];
params.partName = '100029_wechat';
require('src/B24q2');
require('src/B14m5');
''
window.extendMixin=require('src/miniBase');
window.extendLib=require('src/senjinwechat');
