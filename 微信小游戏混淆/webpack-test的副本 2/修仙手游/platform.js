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
window.platform = {
	name: 'wxgame',
	openDataContext: new WxgameOpenDataContext(),

	login() {
		return new Promise((resolve, reject) => {
			if (urlParam.isLocation) {
				//内网
				resolve();
				return;
			}
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

					h5gamecn._init({
						//获取登陆参数回调
						getLoginParamsCallBack: function (params) {
							for (const key in params) {
								let keyName = key == "passId" ? "appid" : key;
								urlParam[keyName] = params[key];
							}

							// 登录某个玩家
							if (0) {
								var search = '?&apptype=1&root=https://z1c.h5eco.com/1/z1client/&apiRoot=https://z1api.h5eco.com/&reportRoot=https://z1back.h5eco.com/&openId=f6f596daf86060d8b5cf5a80d5e74fbc&passId=30007&appid=30007&srvid=20001&wss=wss://z1s1.h5eco.com:9016&gameId=103&ts=1598924714&nonce=mjwCy&sign=a55e82102d2c0c7e4bfab0e5867615d5&ev=60&gv=59&actorid=4541985&isnew=false&other=false&page=1';
								var param = search.split("&");
								for (var i = 0; i < param.length; i++) {
									var strArr = param[i].split("=");
									urlParam[strArr[0]] = strArr[1];
								}
							}

							//获取后台ev
							var aipEv = 0;
							wx.request({
								url: urlParam.apiRoot + 'api/ev?appid=' + urlParam.appid,
								success: res => aipEv = res.data.ev,
								complete: () => {
									console.log("aipEv:", aipEv);
									let url = urlParam.apiRoot + 'api/login?openId=' + urlParam.openId +
										'&apptype=' + urlParam.apptype +
										'&appid=' + urlParam.appid +
										'&gameId=' + urlParam.gameId +
										'&ts=' + urlParam.ts +
										'&nonce=' + urlParam.nonce +
										'&sign=' + urlParam.sign +
										'&pf=' + pfType +
										'&test=' + (urlParam.ev > aipEv ? 1 : 0);
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
											urlParam["isShenhe"] = res.data.other;
											console.log("登陆参数：", urlParam);
											resolve();
										},
										fail: function (res) {
											alert(`登录失败`);
										}
									})
								}
							});
						},
						shareInfo: {
							title: '全新仙侠游戏，挂机收菜，好玩不累！仙宫炼丹，天梯斗法，Boss挑战，神装打造等海量玩法等你体验！',
							imgUrl: window.getUrl(`icon/shareicon.jpg`),
							query: "", //查询字符串，必须是 key1=val1&key2=val2 的格式
						},
					});
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

	paySDK: (money, order, name, desc) => {
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
			goodsId: money + '',
		});
	},

	getUserInfo() {
		return new Promise((resolve, reject) => {
			wx.getUserInfo({
				withCredentials: true,
				success: function (res) {
					var userInfo = res.userInfo
					var nickName = userInfo.nickName
					var avatarUrl = userInfo.avatarUrl
					var gender = userInfo.gender //性别 0：未知、1：男、2：女
					var province = userInfo.province
					var city = userInfo.city
					var country = userInfo.country
					resolve(userInfo);
				}
			})
		})
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
		var actor = window['Actor'] ? Actor.ins() : {};
		h5gamecn.reportData({
			action: type,//行为  login:登陆 create_role: 创建角色  levelup: 升级事件上报 server: 选择服务器   register：注册 logout：登出      pay:支付上报(选接)
			app_openid: '',//app_openid 在后端接口getUserInfo会返回
			server: urlParam.srvid,
			serverName: urlParam.srvid, //没有传服务器id
			openId: urlParam.openId,//进入游戏时链接内所带的openId
			nickName: actor.myName, //取不到昵称时传游戏角色名
			roleId: actor.actorID,//角色id
			roleName: actor.myName,
			level: actor.level,//等级
			power: actor.power,//综合实力(战斗力)
			vip: actor.sVipLv,// vip等级
			partyName: window['GuildSys'] ? GuildSys.ins().guildName : '',//帮派名(没有帮派不传)
			balance: window['GFunc'] ? GFunc.getItemCount(CurType.yb) : 0,//剩余元宝数量
			relifeLevel: actor.zsId,//转生等级
			createRoleTime: actor ? (new Date(actor.createRoleTime)).getTime() : 0,//创角时间戳（每次上报都需要该字段，某些渠道要求）
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
		obj["isApplets"] = obj.scene == 1089;//从小程序入口
		console.log("optios：", obj);
		return obj;
	},

	getUserInfoBtn: (callback) => {
		return new Promise((resolve) => {
			wx.getSetting({
				complete(res) {
					let b = !!res.authSetting["scope.userInfo"];
					if (!b) {
						let sysInfo = wx.getSystemInfoSync();
						//获取微信界面大小
						var w = sysInfo.screenWidth;
						var h = sysInfo.screenHeight;
						let seh = h / 1280
						let sw = 124 * w / 720;
						let sh = 58 * seh;
						const button = wx.createUserInfoButton({
							type: 'image',
							image: window.getUrl(`icon/userInfo.png`),
							style: {
								left: (w - sw) / 2,
								top: (h - sh) / 2 + 150 * seh,
								width: sw,
								height: sh,
							}
						});
						button.onTap((info) => {
							var ishow = true;
							if (info.errMsg == "getUserInfo:ok") {
								button.destroy();
								ishow = false;
							}

							console.log("授权:", info);
							h5gamecn.upLoadUserInfo(info);
							callback(ishow);
						});
						button.hide();//先隐藏

						resolve([true,
							(liuhai) => {
								if (button) {
									let sysInfo = wx.getSystemInfoSync();
									//获取微信界面大小
									var w = sysInfo.screenWidth;
									var h = sysInfo.screenHeight;
									let seh = h / 1280
									let sw = 124 * w / 720;
									let sh = 58 * seh;
									let tampH= liuhai ? 40 : 0;
									button.style.left = (w - sw) / 2;
									button.style.top = (h - sh) / 2 + 130 * seh;
					
									button.show();
								}
							},
							() => {

								button && button.hide();
							}]);
					} else {
						resolve([false]);
					}
				}
			});
		});
	},

	//特殊loading背景
	getLoadingBg: () => {
		return "bg2.jpg";
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
};

wx.onError(function (res) {
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
