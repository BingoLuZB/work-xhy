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

let sdk = require('./sdk-1.0.1.js');

window.platform = {
	name: 'wxgame',

	isShow: true,

	openDataContext: new WxgameOpenDataContext(),

	opts: wx.getLaunchOptionsSync(),

	options() {
		return this.opts;
	},

	sdkInit() {
		// 显示分享按钮
		wx.showShareMenu();

		return new Promise((resolve, reject) => {
			if (urlParam.isLocation) {
				//内网
				resolve();
				return;
			}

			sdk.init({ app_id: 795, mp_id: 'wx968174a26565613d' }).then((e) => {
				if (e.msg == 'success') {
					// 登录成功
					resolve();
				} else {

				}
			})
		});
	},

	login() {
		return new Promise((resolve, reject) => {
			if (window['urlParam'].isLocation) {
				//内网
				resolve();
				return;
			}
			sdk.login({
				data: {
					// 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
					state: this.opts.query.state || this.opts.query.scene || ''
				}
			}).then(res => {
				// 登录某个玩家
				// if (0) {
				// 	var search = '?&apptype=1&root=https://z1c.h5eco.com/1/z1client/&apiRoot=https://z1api.h5eco.com/&reportRoot=https://z1back.h5eco.com/&openId=f6f596daf86060d8b5cf5a80d5e74fbc&passId=30007&appid=30007&srvid=20001&wss=wss://z1s1.h5eco.com:9016&gameId=103&ts=1598924714&nonce=mjwCy&sign=a55e82102d2c0c7e4bfab0e5867615d5&ev=60&gv=59&actorid=4541985&isnew=false&other=false&page=1';
				// 	var param = search.split("&");
				// 	for (var i = 0; i < param.length; i++) {
				// 		var strArr = param[i].split("=");
				// 		urlParam[strArr[0]] = strArr[1];
				// 	}
				// }
				let url = urlParam.apiRoot + 'mz/login?apptype=' + urlParam.apptype +
					'&appid=' + urlParam.appid +
					'&appuid=' + res.data.mg_mem_id +
					'&token=' + res.data.cp_user_token
				wx.request({
					url,
					success: function (res) {
						for (var i in res.data) urlParam[i] = res.data[i];
						let url = urlParam.apiRoot + 'y4/login?&openId=' + urlParam.openId +
							'&apptype=' + urlParam.apptype +
							'&appid=' + urlParam.appid +
							'&gameId=' + urlParam.gameId +
							'&ts=' + urlParam.ts +
							'&nonce=' + urlParam.nonce +
							'&sign=' + urlParam.sign +
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
								urlParam["isShenhe"] = res.data.other;
								console.log("登陆参数：", urlParam);
								resolve();
							},
							fail: function (res) {
								alert(`登录失败`);
							}
						})
					},
					fail: function (res) {
						alert(`注册账号失败`);
					}
				})
			})
		})
	},


	loadJs(path) {
		return new Promise(async (resolve) => {
			await this.pfLoadJs("main.min.js")
			await this.pfLoadJs("subpack.min.js")
			console.log("JS Loading completed",)
			resolve();
		})
	},

	pfLoadJs(path) {
		console.log("load：", path)
		return new Promise(resolve => {
			wx.loadSubpackage({
				name: path,
				success: () => {
					resolve()
				},
				fail: () => {
				},
			})
		});
	},

	ocsc(param) {
		console.log(JSON.stringify(param));
		wx.openCustomerServiceConversation({
			sessionFrom: JSON.stringify(param)
		});
	},

	paySDK: (money, order, name, desc, ext) => {
		sdk.pay({
			data: {
				'order-currency': 'CNY',
				'order-cp_order_id': order,
				'order-product_price': money / 100,
				'order-product_id': ext,
				'order-product_cnt': 1,
				'order-product_name': name,
				'order-product_desc': desc,
				'order-ext': ext,
				'role-event': '',
				'role-server_id': urlParam.srvid,
				'role-server_name': Actor.serverName,
				'role-role_id': Actor.actorID,
				'role-role_name': Actor.myName,
				'role-role_level': Actor.level,
				'role-role_vip': Actor.vip
			}
		}).then(res => {
			// do something
		})
	},

	getKeepSubscribe(id) {
		return new Promise((resolve) => {
			let isKeep = true;
			let canOpen = true;
			wx.getSetting({
				withSubscriptions: true,
				success(res) {
					let { itemSettings } = res.subscriptionsSetting;
					res.subscriptionsSetting["mainSwitch"] = true;
					console.log("mainSwitch", res.subscriptionsSetting["mainSwitch"])
					if (!itemSettings || Object.keys(itemSettings).length == 0) {
						console.log("没有勾选")
					} else {
						console.log("已勾选")
						if (itemSettings[id] == 'accept') {
							console.log("接收")
							isKeep = false;
						} else {
							console.log("拒绝")
						}
						canOpen = false;
					}
					resolve([canOpen, isKeep]);
				}
			});
		})
	},

	getSubscribe(id) {//订阅消息
		let canClick = true;
		wx.onTouchEnd(() => {
			if (canClick) {
				wx.requestSubscribeMessage({
					tmplIds: [id],
					success(res) {
						console.log("success", res)
						if (res[id] == 'accept') {
							//用户同意了订阅
							console.log("用户同意了订阅")
							// window.platform.getSubscribeSuc();
							Http.post(urlParam.apiRoot + `y4/wx/sub`,
								JSON.stringify({
									appId: urlParam.appid + "",
									openId: urlParam.openId + "",
									serverId: window["Actor"].serverName,
									actorId: window["Actor"].actorID,
									templateId: id,
								}));
						} else {
							//用户拒绝了订阅或当前游戏被禁用订阅消息
							console.log("订阅失败")
						}
					},
					fail(res) {
						console.log("fail", res);
					},
					complete(res) {
						console.log("complete", res);
						canClick = false;
					}
				});
			}
		});
	},

	//主动拉起转发分享
	share: (param) => {
		var actor = window["Actor"] || {};
		sdk.getShareInfo().then(res => {
			wx.onShareAppMessage(function () {
				return {
					title: res.data.title,
					imageUrl: res.data.image,
					query: `state=${res.data.state}&actorId=${actor.actorID}&srvId=${urlParam.srvid}&openId=${urlParam.openId}`
				}
			})
			wx.shareAppMessage(param);
			sdk.updateShareInfo({ data: { to_target: 'wx' } });
			if (param.success) {
				let shareTickets = 1;
				param.success({ shareTickets });
			}
		})
	},
	checkChat: (str, scenetype, type, receiver) => {
		return new Promise((resolve, reject) => {
			sdk.checkMsg({ data: { content: str } }).then(res => {
				if (res.msg == 'success') {
					resolve({ result: `success`, content: str });
				} else {
					reject('敏感字');
				}
			}, err => {
				reject('敏感字');
			})
		});
	},
	// 上报
	reportError: (str) => {
		var Actor = window['Actor'] || {};
		wx.request({
			url: urlParam.reportRoot + 'backlog/log?type=clienterror',
			method: "POST",
			data: JSON.stringify({
				openId: urlParam.openId,
				name: Actor.myName,
				apptype: urlParam.apptype + '',
				appid: urlParam.appid,
				serverid: urlParam.srvid,
				ev: urlParam.ev,
				gv: urlParam.gv,
				text: `gv:${urlParam.gv}--ReportType:${platform.curReport}--isShow:${platform.isShow}  ${str}`
			}),
		})
	},

	/**获得游戏版号信息 */
	getGameVersion: () => {
		return '健康游戏公告\n' +
			'抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。\n' +
			'适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活。\n' +
			'国新出审[2020]166号\n' +
			'ISBN：978-7-498-07254-2\n' +
			'著作权人：北京指上缤纷科技股份有限公司\n' +
			'出版单位：北京伯通电子出版社 适龄提示：18岁以上\n';
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
									let tampH = liuhai ? 40 : 0;
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

	reportLogin() {
		// 登录
		this.reportSDK('online');
	},
	reportCreateRole() {
		// 创建角色
		this.reportSDK('create');
	},

	reportLevelup() {
		// 提升等级
		this.reportSDK('levelup');
	},

	reportSDK: (type) => {
		if (!window['Actor']) {
			//如果角色数据不存在，不上报
			return;
		}

		sdk.updateRoleInfo({
			data: {
				'role-event': type,
				'role-server_id': urlParam.srvid,
				'role-server_name': Actor.serverName,
				'role-role_id': Actor.actorID,
				'role-role_name': Actor.myName,
				'role-role_level': Actor.level,
				'role-role_vip': Actor.vip,
				'role-combat_num': Actor.power,
				// 'role-onlineTime': 0,
				// 'role-scene': '背包',
				// 'role-axis': '(999,999,999)',
				// 'role-scene': '打开礼包'
			}
		}).then(res => {
			// do something
		}, err => {
			// handle error
		})
	},

	getLoadBg: () => 'loadBg_cw.jpg',
	getSceneBg: () => 'bg_cw.jpg',
}

wx.onError(function (res) {
	var result = "apiLogin:   ";
	if (res) {
		if (res.stack) {
			result += res.stack;
		} else {
			result += 'error：' + res.message;
		}
	} else {
		result += 'error：';
	}
	platform.reportError(result);
});

wx.onHide(function (res) {
	platform.reportIsnew(`onHide:${JSON.stringify(res)}`);
	platform.isShow = false;
	console.log(`onShow:${platform.isShow}`)
});

wx.onShow(function (res) {
	platform.reportIsnew(`onShow:${JSON.stringify(res)}`);
	platform.isShow = true;
	console.log(`onShow:${platform.isShow}`)
});