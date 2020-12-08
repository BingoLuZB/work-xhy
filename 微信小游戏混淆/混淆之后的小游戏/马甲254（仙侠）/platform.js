/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */
class WxgameOpenDataContext {

	createDisplayObject(type, width, height) {
		const bitmapdata = new egret.BitmapData(sharedCanvas);
		bitmapdata.$deleteSource = false;
		const texture = new egret.Texture();
		texture._setBitmapData(bitmapdata);
		const bitmap = new egret.Bitmap(texture);
		bitmap.width = width;
		bitmap.height = height;

		if (egret.Capabilities.renderMode == "webgl") {
			const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
			const context = renderContext.context;
			////需要用到最新的微信版本
			////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
			////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
			if (!context.wxBindCanvasTexture) {
				egret.startTick((timeStarmp) => {
					egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
					bitmapdata.webGLTexture = null;
					return false;
				}, this);
			}
		}
		return bitmap;
	}


	postMessage(data) {
		const openDataContext = wx.getOpenDataContext();
		openDataContext.postMessage(data);
	}
}
window.apiLogin = 0;
window.platform = {
	name: 'senjin_wxgame',
	openDataContext: new WxgameOpenDataContext(),

	sdkInit() {
		return new Promise((resolve, reject) => {
			h5gamecn._init({
				//获取登陆参数回调
				getLoginParamsCallBack: function (params) {
					for (const key in params) {
						let keyName = key == "passId" ? "appid" : key;
						urlParam[keyName] = params[key];
					}
					console.log("_init参数：", urlParam);
					resolve();
				},
				shareInfo: {
					title: '全新仙侠游戏，挂机收菜，好玩不累！仙宫炼丹，天梯斗法，Boss挑战，神装打造等海量玩法等你体验！',
					imgUrl: window.getUrl(`icon/shareicon.jpg`),
					query: "", //查询字符串，必须是 key1=val1&key2=val2 的格式
				},
			});

		});
	},
	login() {
		return new Promise((resolve, reject) => {
			var pfType = 0;
			wx.getSystemInfo({
				success(res) {
					if (res.platform == "ios") {
						pfType = 2;
					} else if (res.platform == "android") {
						pfType = 1;
					}
					window["phoneType"] = res.platform;
				},
				complete() {
					let url = urlParam.apiRoot + 'login?openId=' + urlParam.openId +
						'&apptype=' + urlParam.apptype +
						'&appid=' + urlParam.appid +
						'&gameId=' + urlParam.gameId +
						'&ts=' + urlParam.ts +
						'&nonce=' + urlParam.nonce +
						'&sign=' + urlParam.sign +
						'&pf=' + pfType +
						'&test=' + (__wxConfig.envVersion != "release" ? 1 : 0);
					wx.request({
						url: url,
						success: function (res) {
							if (!res || !res.data) {
								alert(`登录失败`);
								return;
							}
							if (res.data.err) {
								alert(e.err);
								return;
							}
							urlParam.__proto__ = res.data;

							console.log("登陆参数：", urlParam);
							resolve();
						},
						fail: function (res) {
							alert(`登录失败`);
						}
					})


				}
			});
		})
	},

	//在设置actorID数据，重设分享数据
	setShareInfo: () => {
		var actor = window["Actor"].ins();
		var param = {
			title: "全新仙侠游戏，挂机收菜，好玩不累！仙宫炼丹，天梯斗法，Boss挑战，神装打造等海量玩法等你体验！",
			imgUrl: window.getUrl(`icon/shareicon.jpg`),
			query: `actorId=${actor.actorID}&srvId=${actor.serverID}&openId=${urlParam.openId}`,
		};
		h5gamecn.shareInfo = param;
	},

	paySDK: (money, order, name, desc,goodsId) => {
		h5gamecn.pay(money, {
			gameOrderId: order,
			openId: urlParam.openId,
			roleId: Actor.ins().actorID,
			roleName: Actor.ins().myName,
			roleLevel: Actor.ins().level,
			serverId: urlParam.srvid,
			serverName: Actor.ins().serverName,
			goodsName: name,
			goodsDesc: desc,
			ext: '',
			goodsId: goodsId + '',
		});
	},

	reportLogin: function () {
		this.reportSDK('login')
	},
	reportCreateRole: function () {
		this.reportSDK('create_role')
	},
	reportLevelup: function () {
		this.reportSDK('levelup')
	},
	reportSelectServer: function () {
		this.reportSDK('server')
	},
	reportRegister: function () {
		this.reportSDK('register')
	},
	reportSDK: (type) => {
		if (!window['Actor']) {
			//如果角色数据不存在，不上报
			return;
		}
		var actor = Actor.ins();
		h5gamecn.reportData({
			action: type,//行为  login:登陆 create_role: 创建角色  levelup: 升级事件上报 server: 选择服务器   register：注册 logout：登出      pay:支付上报(选接)
			app_openid: '',//app_openid 在后端接口getUserInfo会返回
			server: urlParam.srvid,
			serverName: actor.serverName,
			openId: urlParam.openId,//进入游戏时链接内所带的openId
			nickName: actor.myName, //取不到昵称时传游戏角色名
			roleId: actor.actorID + "",//角色id
			roleName: actor.myName,
			level: actor.level,//等级
			power: actor.power,//综合实力(战斗力)
			vip: actor.sVipLv,// vip等级
			partyName: GuildSys.ins().guildName,//帮派名(没有帮派不传)
			balance: actor.getCurrency(2),//剩余元宝数量
			relifeLevel: actor.zsId,//转生等级
			createRoleTime: (actor.createRoleTime ? (new Date(actor.createRoleTime)).getTime() : 0) + "",//创角时间戳（每次上报都需要该字段，某些渠道要求）
			// money: '1000',//充值金额（单位分），action为pay需要上报
			// payType: 'wx',//支付类型，action为pay需要上报
			// isSuccess: 'true',//支付结果，action为pay需要上报
			// productId: '11002',//支付商品ID，action为pay需要上报
		});
	},

	checkStr: (str, scenetype, type) => {
		return new Promise((resolve, reject) => {
			var actor = window["Actor"].ins();
			var param = {
				server_id: urlParam.srvid + "",
				server_name: urlParam.srvid + "",
				chat_type: 1,
				chat_channel: type + "",
				chat_scene: scenetype + "",
				chat_content: str,
				sender_openId: urlParam.openId + "",
				sender_level: actor.level + "",
				sender_name: actor.myBaseName,
				sender_vip_level: actor.vipLv,
				open_time: actor.serverOpenDay + "",
			};
			h5gamecn.checkChat(param, function (result) {
				var resultStr = result.result
				if (resultStr == "success") {
					resolve(result.content);
				} else if (resultStr == "verify_fail") {
					var code = result.code;
					var tipstr = "";
					if (code == -1) {
						tipstr = "有违禁词";
					} else if (code == -2) {
						tipstr = "已被禁言";
					} else if (code == -3) {
						//return;//没有任何提示
					}
					alert(tipstr);
					reject(tipstr);
				} else if (resultStr == "fail" && result.code == -9) {
					alert("网络异常");
					reject("网络异常");
				}
			})

		});
	},


	loadJs(path) {
		return new Promise(resolve => {
			wx.loadSubpackage({
				name: path,
				success: resolve,
				fail: () => { },
			})
		});
	},

	optios: () => {
		var obj = wx.getLaunchOptionsSync();
		obj["isApplets"] = false;//微信不显示
		console.log("optios：", obj);
		return obj;
	},

	getFocus: () => new Promise(resolve => h5gamecn.getFocusState({ openId: urlParam.openId }, (state) => resolve([
		state == 0,	// state: -1 不显示关注按钮 0未关注 1已关注
		state == 1,	// 是否已经关注
		() => h5gamecn.showQrCode()
	]))),
	getVerify: () => new Promise(resolve => h5gamecn.getVerifyInfo((info) => resolve([
		info,
		(func) => h5gamecn.showVerify(func)
	]))),


	getShare: (callback) => new Promise(resolve => h5gamecn.isOpenShare((open) => {
		//可以在这里领奖
		//func(result); //result  true 分享成功 false 分享失败
		h5gamecn.setShareCallback(callback);
		resolve([
			!!open,
			true,
			() => {
				var actor = window["Actor"].ins();
				var param = {
					title: "全新仙侠游戏，挂机收菜，好玩不累！仙宫炼丹，天梯斗法，Boss挑战，神装打造等海量玩法等你体验！",
					imgUrl: window.getUrl(`icon/shareicon.jpg`),
					query: `actorId=${actor.actorID}&srvId=${actor.serverID}&openId=${urlParam.openId}`,
				};
				h5gamecn.showShare(param);
			},
		])
	})),

	//主动拉起转发分享
	shareAppMessage: () => {
		var actor = window["Actor"].ins();
		console.log("调起分享");
		wx.shareAppMessage({
			title: "全新仙侠游戏，挂机收菜，好玩不累！仙宫炼丹，天梯斗法，Boss挑战，神装打造等海量玩法等你体验！",
			imageUrl: window.getUrl(`icon/shareicon.jpg`),
			query: `actorId=${actor.actorID}&srvId=${actor.serverID}&openId=${urlParam.openId}`,
			success: function (e) {
				console.log("shareAppMessage share success")
			},
			fail: function (e) {
				console.log("shareAppMessage share fail")
			}
		})
	},

	getKeFu: () => new Promise(resolve => h5gamecn.isCustomerBtn((res) => resolve(res.show == 1))),
	/**获得游戏版号信息 */
	getGameVersion:() => {
		return "审批文号:新广出审[2016]2120号,著作权人:北京指上缤纷科技有限公司\n出版单位:北京艺术与科学电子出版社,出版物号:ISBN 978-7-7979-0782-8";
	},
};

wx.onError(function (res) {
	var result = "senjin_wxgame:";
	if (res) {
		if (res.stack) {
			result += res.stack;
		} else {
			result += 'error：' + res.message;
		}
	} else {
		result += 'error：';
	}
	// 上报
	var actor = window['Actor'] ? Actor.ins() : {};
	wx.request({
		url: urlParam.reportRoot + 'backlog/log?type=clienterror',
		method: "POST",
		data: JSON.stringify({
			openId: urlParam.openId,
			name: actor.myName,
			apptype: urlParam.apptype + '',
			appid: urlParam.appid,
			serverid: urlParam.srvid,
			ev: urlParam.ev,
			gv: urlParam.gv,
			text: result
		}),
	})
	alert(result);
});
