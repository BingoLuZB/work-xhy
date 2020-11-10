function init() {
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
}

function intoMiniGame() {
	var Main = require('./challGame/DoiBdmkpmain.js');
	new Main.default()
}

wx.request({
	url: 'https://gminiapi.xinghe66.cn/mp/index',
	method: 'GET',
	data: {
		app_id: 6,
		versions: '1.0.4',
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
