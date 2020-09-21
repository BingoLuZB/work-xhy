function init() {
	if (typeof params === "undefined") {
		(typeof GameGlobal !== "undefined" ? GameGlobal : window).params = {};
	}
	params.isWeChatGame = true;
	params.remoteServerRoot = 'https://cdn01.tribes.black8.com.cn/pub';
	params.subcontextRoot = '';
	params.isDebug = false;
	params.appModules = ['C8z8', 'D76z1', 'E660'];
	params.partName = '100029_wechat';
	require('src/B24q2');
	require('src/B14m5');
	''
	
	window.extendLib = require('src/senjinwechat');
	
}
function intoMiniGame() {
	const Main = require('./MYGAME/js/main')
	new Main.default()
}

wx.request({
	url: 'https://gminiapi.xinghe66.cn/mp/index',
	method: 'GET',
	data: {
		app_id: 5,
		versions: '1.0.2',
		format:'json'
	},
	success(res) {
		// status 2 提审状态
		if(res.data.code == 200 && res.data.data.status == 2) {
			intoMiniGame()
		} else {
			init()
		}
	},
	fail() {
		init()
	}
})