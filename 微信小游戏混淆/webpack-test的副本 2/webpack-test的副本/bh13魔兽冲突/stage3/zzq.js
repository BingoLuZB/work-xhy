/*
* @Author: flamingo
* @Date:   2019-10-08 16:38:31
* @Last Modified by:   flamingo
* @Last Modified time: 2019-10-08 16:43:27
*/
var egret=window.egret,$E=window.egret,$G=game=window.game,$C=customui=window.customui,__reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(i,a,u,c){return new(u=u||Promise)(function(t,e){function n(t){try{o(c.next(t))}catch(t){e(t)}}function r(t){try{o(c.throw(t))}catch(t){e(t)}}function o(e){e.done?t(e.value):new u(function(t){t(e.value)}).then(n,r)}o((c=c.apply(i,a||[])).next())})},__generator=this&&this.__generator||function(n,r){var o,i,a,t,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=i[2&e[0]?"return":e[0]?"throw":"next"])&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[0,a.value]),e[0]){case 0:case 1:a=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,i=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(!(a=0<(a=u.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){u.label=e[1];break}if(6===e[0]&&u.label<a[1]){u.label=a[1],a=e;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(e);break}a[2]&&u.ops.pop(),u.trys.pop();continue}e=r.call(n,u)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};

var asdf = function(){};
asdf(), function(c) {
	var e = function(t) {
		function i() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementSkin", e.proxy = c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N), e.playerProxy = c.AppFacade.getInstance().retrieveProxy(c.PlayerPy.N), e
		}
		return __extends(i, t), i.prototype.updateView = function(e) {
			e && (this.playerInfo = e.info), this.lb_level.text = this.playerInfo.level;
			var t = 0 == this.playerInfo.level ? 1 : this.playerInfo.level,
				i = c.Config.chessAchieveLevelList().length - 1,
				n = this.playerInfo.exp,
				o = c.Config.chessAchieveLevel()[t].exp;
			t == i && o < n && (n = o), this.img_jindu.width = Math.floor(n / o * 205), this.lb_jindu.text = n + "/" + o, this.updateRewardInfo(), this.updateNowCup()
		}, i.prototype.updateNowCup = function() {
			var e = c.Config.chessAchieveTask(),
				t = c.Config.chessAchieveTaskList().length;
			0 == this.playerInfo.taskCode ? (UIActionManager.setAbsGrey(this.img_jiangbei, !0), this.lb_taskName.text = "无") : (this.lb_taskName.text = e[this.playerInfo.taskCode].name, this.img_jiangbei.source = e[this.playerInfo.taskCode].img + "_png");
			var i = (100 * this.playerInfo.completeNum / t).toFixed(0) + "%";
			this.lb_taskPro.text = "您已经解锁了" + this.playerInfo.completeNum + "/" + t + "项成就(" + i + ")", this.img_taskJindu.width = Math.floor(this.playerInfo.completeNum / t * 205), this.lb_taskJindu.text = this.playerInfo.completeNum + "/" + t
		}, i.prototype.updateRewardInfo = function() {
			var e = [],
				t = this.playerInfo.level + 1;
			t > c.Config.chessAchieveLevelList().length - 1 && (t = c.Config.chessAchieveLevelList().length - 1);
			for (var i = 1; i < t + 1; i++) {
				var n = {
					level: i,
					isGet: !1
				};
				e.push(n)
			}
			for (var o in this.lb_needLevel.visible = !1, e.length == this.proxy.rewardGetList.length && 1 < this.playerInfo.level ? (this.showLevel = t, this.btn_isGet.visible = !0, this.btn_get.visible = !1) : (this.showLevel = 1, this.btn_isGet.visible = !1, this.btn_get.visible = !0), e) {
				for (var i in this.proxy.rewardGetList) e[o].level == this.proxy.rewardGetList[i] && (e[o].isGet = !0);
				if (0 == e[o].isGet) {
					this.showLevel = e[o].level;
					break
				}
			}
			this.lb_textLevel.text = "成就" + this.showLevel + "级奖励", this.needLevel = c.Config.chessAchieveLevel()[this.showLevel].playerLevel, this.playerProxy.playerInfoVO.level < this.needLevel && (this.btn_isGet.visible = !1, this.btn_get.visible = !1, this.lb_needLevel.visible = !0, this.lb_needLevel.text = "人物达到" + this.needLevel + "级");
			var a = JSON.parse(c.Config.chessAchieveLevel()[this.showLevel].rewards);
			for (var o in this.gp_reward.removeChildren(), a) {
				var r = customui.BaseItemFactory.create();
				r.scaleX = r.scaleY = .7, r.updateData({
					id: a[o][1],
					num: a[o][2]
				}), this.gp_reward.addChild(r)
			}
			var s = this.showLevel > this.playerInfo.level;
			UIActionManager.setGrey(this.btn_get, s)
		}, i.prototype.childrenCreated = function() {
			var e = this;
			t.prototype.childrenCreated.call(this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				e.hide()
			}, this), this.btn_modifyIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				c.AppFacade.getInstance().showSubView(c.PlayerMediator.N, c.PlayerMediator.SV.MODIFY_AVATAR)
			}, this), this.btn_show.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				e.mediator.showSubView(c.ZzqMediator.SV.ACHIEVEMENTREWARD, {
					info: e.playerInfo
				})
			}, this), this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				e.showLevel <= e.playerInfo.level ? e.proxy.GetAchieveRewards(e.showLevel, function() {
					c.AppFacade.getInstance().showSubView(c.CommonMediator.N, c.CommonMediator.SV.REWARD_PANEL, {
						rewards: JSON.parse(c.Config.chessAchieveLevel()[e.showLevel].rewards),
						type: c.CommonRewardPreviewPanel.REWARD_TYPE.REWARD
					})
				}) : Utils.MsgUtils.addMidMsg("未满足条件")
			}, this), UIActionManager.setAbsGrey(this.btn_isGet, !0), this.btn_isGet.enabled = !1, this.initList = !1, this.cu_ph.updateData({
				vo: this.proxy.curPlayer
			}), this.initTabbar()
		}, i.prototype.initTabbar = function() {
			this.tabbar.itemRendererSkinName = "BackpackUI_TabbarItemSkin", this.tabbar.dataProvider = new eui.ArrayCollection([{
				source: {
					up: "_btn_yq_m_json.common_yeqian_chengjiudengji_0",
					down: "_btn_yq_m_json.common_yeqian_chengjiudengji_1",
					text: "成就等级"
				}
			}, {
				source: {
					up: "_btn_yq_m_json.common_yeqian_chengjiujiangbei_0",
					down: "_btn_yq_m_json.common_yeqian_chengjiujiangbei_1",
					text: "成就奖杯"
				}
			}]), this.tabbar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this), this.onBarItemTap()
		}, i.prototype.onBarItemTap = function(e) {
			var t = this;
			switch (void 0 === e && (e = {
				itemIndex: i.TAB_VIEW.INFO
			}), this.gp_myinfo.visible = !1, this.gp_cup.visible = !1, e.itemIndex) {
				case i.TAB_VIEW.INFO:
					this.blb_title0.text = "成就等级", this.gp_myinfo.visible = !0;
					break;
				case i.TAB_VIEW.CUP:
					this.blb_title0.text = "成就奖杯", this.initList ? (this.scroller_cup.viewport.scrollV = 0, this.scroller_cup.viewport.validateNow(), this.scroller_cup.stopAnimation(), this.gp_cup.visible = !0) : this.proxy.GetAchieveTaskProgress(function(e) {
						t.updateCupList({
							info: e.task
						})
					})
			}
		}, i.prototype.updateCupList = function(e) {
			var i = this,
				t = JSON.parse(e.info),
				n = [],
				o = [],
				a = [],
				r = [],
				s = [];
			for (var c in t) t[c].isTarget ? n.push(t[c]) : 0 != t[c].key ? o.push(t[c]) : a.push(t[c]);
			o.sort(function(e, t) {
				return i.getTaskProGress(e.code, e.key) > i.getTaskProGress(t.code, t.key) ? -1 : 1
			});
			var l = n.concat(o.concat(a)),
				h = 0;
			for (var c in l) r.push(l[c]), h++, 2 < r.length ? (s.push(r), r = []) : h == l.length && (s.push(r), r = []);
			this.initList = !0, this.gp_cup.visible = !0, this.list_cup.itemRenderer = p, this.list_cup.dataProvider = new eui.ArrayCollection(s)
		}, i.prototype.getTaskProGress = function(e, t) {
			var i = c.Config.chessAchieveTask()[e];
			return t / JSON.parse(i.target)[0]
		}, i.TAB_VIEW = {
			INFO: 0,
			CUP: 1
		}, i
	}(BasePanel);
	c.ZzqAchievement = e, __reflect(e.prototype, "game.ZzqAchievement");
	var p = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementOneSkin", e.proxy = c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.childrenCreated = function() {
			t.prototype.childrenCreated.call(this)
		}, e.prototype.dataChanged = function() {
			var e = this.data;
			this.gp_di.removeChildren();
			for (var t = 0; t < e.length; t++) {
				var i = new n;
				i.updateInfo(e[t]), this.gp_di.addChild(i)
			}
		}, e
	}(eui.ItemRenderer);
	__reflect(p.prototype, "ZzqAchievementOne");
	var n = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementCupSkin", e.proxy = c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.childrenCreated = function() {
			var e = this;
			t.prototype.childrenCreated.call(this), this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				c.AppFacade.getInstance().showSubView(c.ZzqMediator.N, c.ZzqMediator.SV.ACHIEVEMENTREWARDSHOW, {
					info: e.params
				})
			}, this)
		}, e.prototype.updateInfo = function(e) {
			this.params = e;
			var t = c.Config.chessAchieveTask()[e.code];
			this.img_jiangbei.source = "" == t.img ? "zzq_img_jiangbei01_png" : t.img + "_png", this.lb_name.text = t.name;
			var i = JSON.parse(t.target);
			1 == i[0] ? (this.img_jindu.visible = !1, this.img_di.visible = !1, this.lb_jindu.visible = !1) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = e.key + "/" + i[0], this.img_jindu.width = Math.floor(e.key / i[0] * 115)), UIActionManager.setAbsGrey(this.img_jiangbei, !e.isTarget)
		}, e
	}(eui.ItemRenderer);
	__reflect(n.prototype, "ZzqAchievementCup")
}(game || (game = {})),
function(n) {
	var e = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementGetSkin", e.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.updateView = function(e) {
			this.gp_reward0.removeChildren();
			e.info.allTask;
			for (var t = [], i = 0; i < e.info.allTask.length; i++) e.info.allTask[i].isTarget && t.push(e.info.allTask[i]);
			var n = 5 < t.length ? 5 : t.length;
			for (i = 0; i < n; i++) {
				(o = new a).updateInfo(t[i]), this.gp_reward0.addChild(o)
			}
			if (5 < t.length)
				for (i = 5; i < t.length; i++) {
					var o;
					(o = new a).updateInfo(t[i]), this.gp_reward1.addChild(o)
				} else this.gp_reward1 && this.gp_reward1.parent && this.gp_reward1.parent.removeChild(this.gp_reward1)
		}, e.prototype.childrenCreated = function() {
			t.prototype.childrenCreated.call(this)
		}, e
	}(BasePanel);
	n.ZzqAchievementGet = e, __reflect(e.prototype, "game.ZzqAchievementGet");
	var a = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementGetCupSkin", e.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.childrenCreated = function() {
			t.prototype.childrenCreated.call(this)
		}, e.prototype.updateInfo = function(e) {
			this.params = e;
			var t = n.Config.chessAchieveTask()[e.code];
			this.img_jiangbei.source = "" == t.img ? "zzq_img_jiangbei01_png" : t.img + "_png", this.lb_name.text = t.name;
			var i = JSON.parse(t.target);
			1 == i[0] ? (this.img_jindu.visible = !1, this.img_di.visible = !1, this.lb_jindu.visible = !1) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = e.key + "/" + i[0], this.img_jindu.width = Math.floor(e.key / i[0] * 100))
		}, e
	}(eui.Component);
	__reflect(a.prototype, "ZzqAchievementGetCup")
}(game || (game = {})),
function(o) {
	var e = function(i) {
		function e(e) {
			var t = i.call(this) || this;
			return t.skinName = "ZzqAchievementRewardSkin", t.proxy = o.AppFacade.getInstance().retrieveProxy(o.ZzqPy.N), t.playerProxy = o.AppFacade.getInstance().retrieveProxy(o.PlayerPy.N), t.playerInfo = e, t
		}
		return __extends(e, i), e.prototype.updateView = function(e) {
			e && (this.playerInfo = e.info), this.updateCupList()
		}, e.prototype.childrenCreated = function() {
			i.prototype.childrenCreated.call(this)
		}, e.prototype.updateCupList = function() {
			var e = o.Config.chessAchieveLevel(),
				t = [];
			for (var i in e)
				if (0 != e[i].level) {
					for (var n in e[i].isShow = !(this.playerProxy.playerInfoVO.level >= e[i].playerLevel), e[i].isGet = !1, e[i].isCanGet = e[i].level <= this.playerInfo.level, e[i].needLevel = e[i].playerLevel, this.proxy.rewardGetList) this.proxy.rewardGetList[n] == e[i].level && (e[i].isGet = !0);
					t.push(e[i])
				}
			this.list_cup.itemRenderer = a, this.list_cup.dataProvider = new eui.ArrayCollection(t)
		}, e
	}(BasePanel);
	o.ZzqAchievementReward = e, __reflect(e.prototype, "game.ZzqAchievementReward");
	var a = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementRewardOneSkin", e.proxy = o.AppFacade.getInstance().retrieveProxy(o.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.childrenCreated = function() {
			var e = this;
			t.prototype.childrenCreated.call(this), Utils.TouchUtils.addTouchListener(this.btn_get, function() {
				e.data.isCanGet ? e.proxy.GetAchieveRewards(e.data.level, function() {
					o.AppFacade.getInstance().showSubView(o.CommonMediator.N, o.CommonMediator.SV.REWARD_PANEL, {
						rewards: JSON.parse(e.data.rewards),
						type: o.CommonRewardPreviewPanel.REWARD_TYPE.REWARD
					})
				}) : Utils.MsgUtils.addMidMsg("未满足条件")
			})
		}, e.prototype.dataChanged = function() {
			var e = this.data;
			this.gp_reward.removeChildren(), e.isShow ? (this.btn_get.visible = !1, this.gp_isGet.visible = !1, this.lb_needLevel.visible = !0) : (this.lb_needLevel.visible = !1, e.isCanGet ? e.isGet ? (this.btn_get.visible = !1, this.gp_isGet.visible = !0) : (this.btn_get.visible = !0, this.gp_isGet.visible = !1, UIActionManager.setGrey(this.btn_get, !1)) : (this.btn_get.visible = !0, this.gp_isGet.visible = !1, UIActionManager.setGrey(this.btn_get, !0))), this.lb_needLevel.text = "人物达到" + e.needLevel + "级", this.lb_num.text = "成就" + e.level + "级";
			var t = JSON.parse(e.rewards);
			for (var i in t) {
				var n = customui.BaseItemFactory.create();
				n.scaleX = n.scaleY = .6, n.updateData({
					id: t[i][1],
					num: t[i][2]
				}), this.gp_reward.addChild(n)
			}
		}, e
	}(eui.ItemRenderer);
	__reflect(a.prototype, "ZzqAchievementRewardOne")
}(game || (game = {})),
function(o) {
	var e = function(t) {
		function e() {
			var e = t.call(this) || this;
			return e.skinName = "ZzqAchievementRewardShowSkin", e.proxy = o.AppFacade.getInstance().retrieveProxy(o.ZzqPy.N), e
		}
		return __extends(e, t), e.prototype.updateView = function(e) {
			var t = e.info,
				i = o.Config.chessAchieveTask()[t.code];
			this.img_jiangbei.source = "" == i.img ? "zzq_img_jiangbei01_png" : i.img + "_png", this.lb_name.text = i.name, this.lb_num.text = i.desc, this.lb_numP.text = "x" + i.expRewards, this.gp_get.visible = t.isTarget, this.gp_no.visible = !t.isTarget;
			var n = JSON.parse(i.target);
			1 == n[0] ? this.gp_pross && this.gp_pross.parent && this.gp_pross.parent.removeChild(this.gp_pross) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = t.key + "/" + n[0], this.img_jindu.width = Math.floor(t.key / n[0] * 205)), this.gp_get.visible && this.formatData(t.isTargetDt), this.gp_btn && this.gp_btn.parent && this.gp_btn.parent.removeChild(this.gp_btn)
		}, e.prototype.formatData = function(e) {
			var t = [],
				i = new Date(1e3 * e),
				n = i.getFullYear(),
				o = i.getMonth() + 1,
				a = i.getDate();
			t.push({
				text: n + "." + o + "." + a,
				style: {
					textColor: 1761866
				}
			}), t.push({
				text: " 获得",
				style: {
					textColor: 16777215
				}
			}), this.lb_getTime.textFlow = t
		}, e.prototype.childrenCreated = function() {
			t.prototype.childrenCreated.call(this)
		}, e
	}(BasePanel);
	o.ZzqAchievementRewardShow = e, __reflect(e.prototype, "game.ZzqAchievementRewardShow")
}(game || (game = {})),
function(m) {
	var e = function(i) {
		function e() {
			var e = i.call(this) || this;
			return e.lockStationList = [0, 0, 0, 0, 0, 0, 0, 0], e.skinName = "ZzqChessSkin", e.proxy = m.AppFacade.getInstance().retrieveProxy(m.ZzqPy.N), e.playerHeads = new Array, e.winEffectList = new Array, e.playerHead2Obj = {}, e.pos2HeroBI = {}, window._zzq = e
		}
		return __extends(e, i), e.prototype.onDestroy = function() {
			i.prototype.onDestroy.call(this), this.removeListener(), this.countDownScheId && (egret.clearInterval(this.countDownScheId), this.countDownScheId = void 0)
		}, e.prototype.childrenCreated = function() {
			var t = this;
			i.prototype.childrenCreated.call(this), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_btns), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_players), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_info_1), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_info_2), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_tips), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_head_tips), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_pick), this.CommonBarrage.touchEnabled = !1, this.CommonBarrage.touchChildren = !1, this.btn_fanhui.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				0 < t.proxy.curPlayer.life ? (t.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), m.MainJumpConfig.jumpTo(), t.mediator.sendNotification(CN.MAIN_FORCE_UPDATE_BANNER)) : m.GameMgr.getInstance().showCommonTipsWin({
					commonTips: "确定退出本局游戏吗？退出游戏不会影响本局排名。",
					source: "zzq_exit_btn",
					cb: !0,
					clickCB: function(e) {
						1 == e.type && t.proxy.ExitChess(function() {
							t.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), m.MainJumpConfig.jumpTo(), t.mediator.sendNotification(CN.MAIN_FORCE_UPDATE_BANNER)
						})
					}
				})
			}, this), this.btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.showHaloPanel()
			}, this), this.btn_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.mediator.showSubView(m.ZzqMediator.SV.HEROBOOK)
			}, this), this.btn_3.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.mediator.showSubView(m.ZzqMediator.SV.RECORD)
			}, this), this.btn_4.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.mediator.chessPickRootView.show()
			}, this), this.btn_5.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.mediator.showSubView(m.ZzqMediator.SV.LEVELDATA)
			}, this), this.gp_halo.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				t.showHaloPanel()
			}, this);
			var e = JSON.parse(m.Config.constConfig().WchessExpShop.constValue);
			this.btn_6.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
				m.GameMgr.getInstance().showCommonTipsWin({
					commonTips: "确定花费" + e[1] + "个金币，购买" + e[0] + "点经验吗？",
					source: "zzq_buy_exp",
					cb: !0,
					clickCB: function(e) {
						1 == e.type && t.proxy.BuyExp(1, function() {
							t.showUp()
						})
					}
				})
			}, this), this.addListener(), this.updateTipsTextInfo(), this.bindTipsPanelClick({
				target: this.gp_info_2,
				cb: function() {
					t.gp_tips.visible = !0, t.lb_desc.textFlow = [{
						text: "英雄上限\n",
						style: {
							size: 22,
							textColor: 16711571
						}
					}, {
						text: "你出战的英雄上限数量不能超过主角等级上限\n\n英雄出战上限等于你的主角等级，提升你的主角经验可提升主角等级\n每回合自动获取1点经验\n花费金币进行升级时，可立即获得" + e[0] + "点经验",
						style: {
							size: 20,
							textColor: 16777215
						}
					}]
				}
			})
		}, e.prototype.updateTipsTextInfo = function() {
			var d = this,
				u = JSON.parse(m.Config.constConfig().ChessWinStreakRewards.constValue),
				g = JSON.parse(m.Config.constConfig().ChessLoseStreakRewards.constValue),
				f = JSON.parse(m.Config.constConfig().WchessGoldInterest.constValue),
				_ = m.Config.constConfig().WchessWinRewards.constValue;
			this.bindTipsPanelClick({
				target: this.gp_info_1,
				cb: function() {
					var e = d.proxy.curPlayer.winNum + d.proxy.curPlayer.loseNum,
						t = JSON.parse(m.Config.constConfig().ChessAutoIncreaseMoneyNum.constValue),
						i = 0;
					for (var n in t)
						if (e == t[n][0] - 1) i = t[n][1];
						else if (e >= t.length) {
						i = t[t.length - 1][1];
						break
					}
					var o = void 0,
						a = d.proxy.curPlayer.winLoseStreak % 1e4,
						r = 0;
					if (d.gp_tips.visible = !0, Math.floor(d.proxy.curPlayer.winLoseStreak / 1e4) == EBattleResult.EBattleResultWin) {
						o = "连胜奖励";
						for (var s = 0, c = u; s < c.length; s++) {
							if (!(a >= (p = c[s])[0])) break;
							r = p[1]
						}
					} else {
						o = "连败补偿";
						for (var l = 0, h = g; l < h.length; l++) {
							var p;
							if (!(a >= (p = h[l])[0])) break;
							r = p[1]
						}
					}
					d.lb_desc.textFlow = [{
						text: "金币\n",
						style: {
							size: 22,
							textColor: 16711571
						}
					}, {
						text: "金币是你在该玩法中进行购买物品使用的唯一资源，每回合自动获取金币，出售英雄也可回收一定数量的金币\n金币可用于升级人物等级，招募英雄，刷新招募列表\n \n",
						style: {
							size: 20,
							textColor: 16777215
						}
					}, {
						text: "当前金币：" + d.proxy.curPlayer.gold + "\n",
						style: {
							size: 20,
							textColor: 16768287
						}
					}, {
						text: "下回合基础收入：",
						style: {
							size: 20,
							textColor: 16777215
						}
					}, {
						text: "+" + i + "\n",
						style: {
							size: 20,
							textColor: 1900321
						}
					}, {
						text: "下回合利息收入：",
						style: {
							size: 20,
							textColor: 16777215
						}
					}, {
						text: "+" + Math.min(Math.floor(d.proxy.curPlayer.gold / f[0]) * f[1], f[2]) + "\n",
						style: {
							size: 20,
							textColor: 1900321
						}
					}, {
						text: "下回合胜利奖励：",
						style: {
							size: 20,
							textColor: 16777215
						}
					}, {
						text: "+" + _,
						style: {
							size: 20,
							textColor: 1900321
						}
					}], r && d.lb_desc.textFlow.push({
						text: "\n下回合" + o + "：",
						style: {
							size: 20,
							textColor: 16777215
						}
					}, {
						text: "+" + r,
						style: {
							size: 20,
							textColor: 1900321
						}
					})
				}
			})
		}, e.prototype.showUp = function() {
			DragonBoneTools.playOnce({
				effectName: "common_zzqdjts",
				parent: this.gp_up,
				x: this.gp_up.width / 2,
				y: this.gp_up.height / 2,
				scaleX: 1,
				scaleY: 1,
				keep: !1,
				loop: !1,
				doneCB: function() {}
			})
		}, e.prototype.xy2Pos = function(e, t) {}, e.prototype.pos2XY = function(e) {
			var t = 0,
				i = 0;
			return e - 1 < ZZQ_CONST.SHANGZHEN_NUM ? (t = Math.ceil(e / ZZQ_CONST.SHANGZHEN_NUM) - 1, i = (e - 1) % ZZQ_CONST.SHANGZHEN_NUM) : (t = Math.ceil((e - 8) / ZZQ_CONST.BEIBAO_LINE_EACH_COUNT) - 1, i = (e - 9) % ZZQ_CONST.BEIBAO_LINE_EACH_COUNT), 0 == t && e - 1 < 8 ? i < ZZQ_CONST.QIANPAI_NUM ? [105 * i + 105, 105 * t + 20] : [105 * i - 210, 105 * t + 130] : [107 * i + 5, 100 * t + 295]
		}, e.prototype.headClick = function(e) {
			this.proxy.curPlayer.uuid != e.vo.uuid && m.AppFacade.getInstance().showSubView(m.ZzqMediator.N, m.ZzqMediator.SV.PLAYERINFO, {
				vo: e.vo
			})
		}, e.prototype.init = function() {
			var n = this;
			this.proxy.curRoomInfo.players.forEach(function(e, t) {
				var i = new customui.ZzqChessPlayerHead({
					vo: e,
					myUuid: n.proxy.curRoomInfo.uuid
				});
				i.addTapEvent(function(e) {
					n.headClick(e)
				}), (n.playerHead2Obj[e.uuid] = i).y = t * i.height, n.gp_players.addChild(i), n.playerHeads.push(i)
			}), this.countDownScheId = egret.setInterval(this.countDownUpdate, this, 1e3);
			for (var e = 1; e <= ZZQ_CONST.SHANGZHEN_NUM + ZZQ_CONST.BEIBAO_NUM; e++) {
				var t = customui.BaseItemForChessFactory.create();
				this.pos2HeroBI[e] = t;
				var i = this.pos2XY(e);
				t.x = i[0], t.y = i[1], t.scaleX = .9, t.scaleY = .9, this.gp_heroList.addChild(t)
			}
			for (e = 0; e < 6; e++) {
				var o = new customui.ZzqWinEffect;
				this.winEffectList.push(o), this.gp_effect.addChild(o)
			}
			this.updateCurPlayerInfo(), this.proxy.GetHeroList(), this.proxy.GetWchessRoomInfo(), this.updatePlayerHeads(), this.updateNextUuid()
		}, e.prototype.countDownUpdate = function() {
			if (this.countDownSecond) {
				var e = this.countDownSecond - (Utils.TimerManager.getServerTime() - this.proxy.countDownSDT);
				e-- <= 0 || (e <= ZZQ_CONST.DAOJISHI_RED && this.proxy.curRoomInfo.status == EWchessRoomStatus.Handle ? (this.blb_tips.text = "即将战斗\n" + e, this.mediator.sendNotification(CN.ZZQ_STATUS_FIGHT_DAOJISHI, e)) : this.blb_tips.text = this.tips + "\n" + e)
			}
		}, e.prototype.countDown = function(e, t) {
			this.tips = e, this.countDownSecond = t || 0, this.proxy.countDownSDT = Utils.TimerManager.getServerTime() - (this.proxy.curRoomInfo.sysDt - this.proxy.curRoomInfo.dt), this.updateNextUuid()
		}, e.prototype.updateNextUuid = function() {
			for (var e in this.proxy.curRoomInfo.opponentList)
				if (this.proxy.curRoomInfo.uuid == this.proxy.curRoomInfo.opponentList[e].attackUuid) {
					var t = this.proxy.getPlayerInfoByUuid(this.proxy.curRoomInfo.opponentList[e].defenceUuid);
					this.lb_next.text = t.name;
					break
				}
		}, e.prototype.updateIsStreak = function() {
			var r = this,
				s = 0;
			this.proxy.curRoomInfo.players.forEach(function(e, t) {
				var i = e.winLoseStreak,
					n = parseInt((i / 1e4).toFixed(0)),
					o = parseInt((i % 1e4).toFixed(0));
				if (1 == n && (5 == o || 8 == o || 10 == o)) {
					var a = {
						winNum: o,
						number: s,
						name: e.name
					};
					r.winEffectList[s].updateEffectInfo(a), s++
				}
			});
			this.proxy.getPlayerInfoByUuid(this.proxy.curRoomInfo.uuid)
		}, e.prototype.updateCurPlayerInfo = function() {
			this.levelC = m.Config.chessLevelHero(this.proxy.curPlayer.level);
			var e = m.Config.chessLevelHeroOther(this.proxy.curPlayer.level);
			this.pb_exp.maximum = e.exp, this.lockStationList = JSON.parse(this.levelC.stationList), this.lb_jinbi.text = this.proxy.curPlayer.gold.toString(), this.blb_level.text = this.proxy.curPlayer.level.toString(), this.pb_exp.value = this.proxy.curPlayer.exp;
			var t = m.Config.chessLevelHeroLength();
			this.proxy.curPlayer.level >= t && (this.pb_exp.value = this.pb_exp.maximum);
			var i = Math.ceil(this.proxy.curPlayer.exp / e.exp * this.pb_exp.width);
			i > this.pb_exp.width && (i = this.pb_exp.width), this.updateLock(), this.proxy.curPlayer.life <= 0 && this.handleDead()
		}, e.prototype.handleDead = function() {
			this.isDead = !0
		}, e.prototype.updateLock = function() {
			for (var e = 1; e <= ZZQ_CONST.SHANGZHEN_NUM; e++) this.lockStationList[e - 1] ? this.pos2HeroBI[e].vo || (this.pos2HeroBI[e].img_icon.source = "") : this.pos2HeroBI[e].img_icon.source = "common_img_xiaosuo_png"
		}, e.prototype.updateEffectList = function() {
			for (var e in this.pos2HeroBI)
				if (!this.pos2HeroBI[e].isHave && 8 < Number(e)) {
					var t = {
						pos: e,
						race: this.proxy.effectList1[0].race
					};
					this.proxy.effectList1.push(t);
					break
				}
			this.proxy.effectList1.sort(function(e, t) {
				return e.pos > t.pos ? 1 : -1
			})
		}, e.prototype.updateEffect = function() {
			if (0 < this.proxy.effectList1.length) {
				var e = 5 == this.proxy.effectList1[0].race ? 1 : 2;
				if (this.updateEffectList(), this.proxy.effectList1.length > e)
					for (var t = 0; t < this.proxy.effectList1.length; t++) {
						var i = 0 == t ? "common_huijushengji_1" : "common_kapaixiaoshi";
						this.pos2HeroBI[this.proxy.effectList1[t].pos].playEffect(i)
					}
			}
			if (0 < this.proxy.effectList2.length && 0 < this.proxy.effectList1.length) {
				var n = 5 == this.proxy.effectList1[0].race ? 1 : 2,
					o = 5 == this.proxy.effectList2[0].race ? 0 : 1;
				if (this.proxy.effectList2.sort(function(e, t) {
						return e.pos > t.pos ? 1 : -1
					}), this.proxy.effectList2.length > o && this.proxy.effectList1.length > n)
					for (t = 0; t < this.proxy.effectList2.length; t++) {
						var a = 0 == t ? "common_huijushengji_1" : "common_kapaixiaoshi";
						this.pos2HeroBI[this.proxy.effectList2[t].pos].playEffect(a)
					}
			}
		}, e.prototype.updateHeroList = function() {
			var t = this,
				i = {};
			for (var e in this.proxy.curHeroList.forEach(function(e) {
					i[e.pos] = 1, t.pos2HeroBI[e.pos].updateData({
						vo: e
					})
				}), this.pos2HeroBI) i[e] || this.pos2HeroBI[e].resetFixedStyle();
			var n = 0,
				o = 0;
			this.proxy.curHeroList.forEach(function(e) {
				e.pos <= ZZQ_CONST.SHANGZHEN_NUM && n++
			}), this.lockStationList.forEach(function(e) {
				e && o++
			}), this.lb_renshu.text = n + "/" + o, this.updateLock(), this.updateGpHero()
		}, e.prototype.updateGpHero = function() {
			for (var e = [], t = [], i = 0, n = this.proxy.curHeroList; i < n.length; i++) {
				var o = n[i];
				o.isInFormation() && t.indexOf(o.config.subType) < 0 && (e.push(o.code), t.push(o.config.subType))
			}
			if (0 < e.length) {
				var a = this.gp_halo,
					r = m.AppFacade.getInstance().retrieveProxy(m.HeroPy.N).getActivatedHaloId(e, !0),
					s = m.Config.heroHaloConfig();
				for (var c in a.removeChildren(), r) {
					var l = s[r[c]],
						h = new ZzqHaloItem({
							icon: m.GeneralConfig.getGuajiImg(l.img)[1]
						});
					a.addChild(h)
				}
			}
		}, e.prototype.updateBarrage = function() {
			var e = void 0;
			if (this.proxy.barrageInfo) {
				for (var t = 0, i = this.proxy.barrageInfo; t < i.length; t++) {
					var n = i[t];
					e || (e = m.Config.chessHero());
					var o = e[n.code];
					if (o) {
						for (var a = " ", r = 0; r < o.initStar; r++) a += "★";
						var s = this.proxy.getPlayerInfoByUuid(n.uuid);
						if (s) {
							var c = s.name + " → ";
							this.CommonBarrage.addOneMsgAutoFormat({
								speed: 100,
								text: [{
									text: c
								}, {
									text: o.name,
									style: {
										textColor: m.GeneralConfig.getColorByColor(o.color)
									}
								}, {
									text: a
								}]
							})
						}
					}
				}
				this.proxy.barrageInfo.splice(0)
			}
			if (this.proxy.battleDetailBarrageInfo) {
				this.proxy.battleDetailBarrageInfo.sort(function(e, t) {
					return e.round - t.round
				});
				for (var l = 0, h = this.proxy.battleDetailBarrageInfo; l < h.length; l++) {
					n = h[l];
					this.CommonBarrage.addOneMsgAutoFormat({
						speed: 100,
						text: [{
							text: this.proxy.getPlayerInfoByUuid(n.attackUuid).name + " "
						}, {
							text: "" + n.attackNum,
							style: {
								textColor: 1761866
							}
						}, {
							text: " → "
						}, {
							text: this.proxy.getPlayerInfoByUuid(n.defenceUuid).name + " "
						}, {
							text: "" + n.defenceNum,
							style: {
								textColor: 1761866
							}
						}]
					})
				}
				this.proxy.battleDetailBarrageInfo.splice(0)
			}
		}, e.prototype.updateView = function(e, t) {
			t && this.init()
		}, e.prototype.updatePlayerHeads = function() {
			var a = this;
			this.playerHeads.sort(function(e, t) {
				return 0 < e.vo.life && t.vo.life <= 0 ? -1 : e.vo.life <= 0 && 0 < t.vo.life ? 1 : e.vo.dt != t.vo.dt ? t.vo.dt - e.vo.dt : t.vo.life - e.vo.life
			}), this.playerHeads.forEach(function(e, t) {
				for (var i = 0, n = a.proxy.curRoomInfo.players; i < n.length; i++) {
					var o = n[i];
					if (o.uuid == e.vo.uuid) {
						e.updateData({
							vo: o
						}), e.vo.life <= 0 && UIActionManager.setAbsGrey(e, !0);
						break
					}
				}
				egret.Tween.removeTweens(e), egret.Tween.get(e).to({
					y: t * e.height
				}, 250, egret.Ease.sineInOut)
			})
		}, e.prototype.popResult = function() {
			var t = this;
			if (this.proxy.latestFightStatis) {
				var e = void 0;
				e = this.proxy.latestFightStatis.result == EBattleResult.EBattleResultWin ? "zzq_txt_shengli_png" : "zzq_txt_zhanbai_png", RES.getResAsync(e, function(e) {
					t.img_result.visible = !0, t.img_result.source = e, egret.Tween.removeTweens(t.img_result), egret.Tween.get(t.img_result).call(function() {
						t.img_result.visible = !0, t.img_result.alpha = 0
					}).to({
						alpha: 1
					}, 500).wait(1e3).to({
						alpha: 0
					}, 500).call(function() {
						t.img_result.visible = !1
					})
				}, this)
			}
		}, e.prototype.bindTipsPanelClick = function(e) {
			var t = this,
				i = e.target;
			i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.cb, this), i.addEventListener(egret.TouchEvent.TOUCH_END, function() {
				t.gp_tips.visible = !1
			}, this), i.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function() {
				t.gp_tips.visible = !1
			}, this), i.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function() {
				t.gp_tips.visible = !1
			}, this)
		}, e.prototype.addListener = function() {
			this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
		}, e.prototype.removeListener = function() {
			this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
		}, e.prototype.setModelToXY = function(e, t, i) {
			var n = -e.width * e.scaleX / 2,
				o = -e.height * e.scaleY / 2;
			e.x = (t - e.parent.x - this.gp_root.x + n) / Utils.DeviceUtils.additionScale(), e.y = (i - e.parent.y - this.gp_root.y + o) / Utils.DeviceUtils.additionScale()
		}, e.prototype.getTouchedGroupPos = function(e) {
			for (var t in this.pos2HeroBI) {
				var i = this.pos2HeroBI[t];
				if (!(Number(t) <= ZZQ_CONST.SHANGZHEN_NUM && !this.lockStationList[Number(t) - 1] || i == this.targetItem)) {
					var n = i.localToGlobal();
					if (this.rect ? this.rect.setTo(n.x, n.y, i.width, i.height) : this.rect = new egret.Rectangle(n.x, n.y, i.width, i.height), this.rect.contains(e.stageX, e.stageY)) return t
				}
			}
		}, e.prototype.setHeroToPos = function(e, t, i) {
			if (void 0 === i && (i = !1), e) {
				this.pos2HeroBI[this.startingPos] = void 0, this.startingPos && this.startingPos != t && this.pos2HeroBI[t] && this.setHeroToPos(this.pos2HeroBI[t], this.startingPos, !0), this.pos2HeroBI[t] = e;
				var n = this.pos2XY(t);
				e.x = n[0], e.y = n[1], i || this.proxy.ChangeFormation(this.startingPos, t)
			}
		}, e.prototype.onTouchBegin = function(e) {
			if (!this.isDead) {
				var t = this.getTouchedGroupPos(e);
				if (t && this.pos2HeroBI[t]) {
					if (this.targetItem = this.pos2HeroBI[t], !this.targetItem.vo) return void(this.targetItem = void 0);
					this.targetItemTouchTM = Date.now(), this.gp_heroList.setChildIndex(this.targetItem, -1), this.startingPos = t, this.gp_touchField.width = Utils.DeviceUtils.curWidth(), this.gp_touchField.height = Utils.DeviceUtils.curHeight()
				}
			}
		}, e.prototype.onTouchMove = function(e) {
			this.targetItem && this.setModelToXY(this.targetItem, e.stageX, e.stageY)
		}, e.prototype.onTouchEnd = function(e) {
			if (this.targetItem) {
				var t = this.getTouchedGroupPos(e);
				Date.now() - this.targetItemTouchTM < ZZQ_CONST.TOUCH_AS_CLICK ? (this.mediator.showSubView(m.ZzqMediator.SV.DETAIL, {
					vo: this.targetItem.vo
				}), this.setHeroToPos(this.targetItem, this.startingPos)) : t ? this.setHeroToPos(this.targetItem, t) : this.setHeroToPos(this.targetItem, this.startingPos), this.targetItem = void 0, this.startingPos = void 0, this.gp_touchField.width = this.gp_heroList.width, this.gp_touchField.height = this.gp_heroList.height
			}
		}, e.prototype.showHaloPanel = function() {
			for (var e = [], t = [], i = 0, n = this.proxy.curHeroList; i < n.length; i++) {
				var o = n[i];
				o.isInFormation() && t.indexOf(o.config.subType) < 0 && (e.push(o.code), t.push(o.config.subType))
			}
			0 == e.length ? Utils.MsgUtils.addMidMsg("请先上阵英雄") : this.mediator.showSubView(m.ZzqMediator.SV.HEROHALO, {
				codeList: e
			})
		}, e
	}(BaseFull);
	m.ZzqChess = e, __reflect(e.prototype, "game.ZzqChess")
}(game || (game = {}));
asdf(), function(n) {
		var e = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.skinName = "ZzqChessPickSkin", e.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), e
			}
			return __extends(e, i), e.prototype.onDestroy = function() {
				i.prototype.onDestroy.call(this)
			}, e.prototype.childrenCreated = function() {
				var t = this;
				for (var e in i.prototype.childrenCreated.call(this), this.btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
						t.proxy.ChangeCard()
					}, this), this.gp_touch1.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
						t.hide()
					}, this), this.gp_touch2.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
						t.hide()
					}, this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
						t.hide()
					}, this), this.blb_cost.text = "x" + n.Config.constConfig().ChessRefreshCardsCosts.constValue, this.zzqChessCards = {
						1: this.cu_card1,
						2: this.cu_card2,
						3: this.cu_card3,
						4: this.cu_card4,
						5: this.cu_card5
					}, this.zzqChessCards) this.zzqChessCards[e].addTapEvent(function(e) {
					t.onTapEvent(e)
				})
			}, e.prototype.show = function() {
				this.visible = !0
			}, e.prototype.hide = function() {
				this.visible = !1
			}, e.prototype.onTapEvent = function(e) {
				this.proxy.BuyCard(e, function() {
					e.visible = !1
				})
			}, e.prototype.updateCardColor = function() {
				var e = this.proxy.curPlayer.gold;
				for (var t in this.zzqChessCards) this.zzqChessCards[t].visible && this.zzqChessCards[t].updateCardColor(e)
			}, e.prototype.updateView = function(e, t) {
				var i = this;
				if (this.proxy.curCards) {
					for (var n in this.zzqChessCards) this.zzqChessCards[n].visible = !1;
					var o = this.proxy.curPlayer.gold;
					this.proxy.curCards.forEach(function(e) {
						var t = i.zzqChessCards[e.pos];
						t.visible = !0, t.updateData(e, o)
					})
				}
			}, e
		}(BasePanel);
		n.ZzqChessPick = e, __reflect(e.prototype, "game.ZzqChessPick")
	}(game || (game = {})),
	function(i) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqChessResultSkin", e.vo = new Array, e.py = i.GameMVC.zzqPy, e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.updateView = function(e) {
				var i = this;
				e ? (e.vo.forEach(function(e, t) {
					i.vo.push(e)
				}), this.vo.sort(function(e, t) {
					return e.rank > t.rank ? 1 : -1
				})) : (this.py.curRoomInfo.players.forEach(function(e, t) {
					i.vo.push(e)
				}), this.vo.sort(function(e, t) {
					return 0 < e.life && t.life <= 0 ? -1 : e.life <= 0 && 0 < t.life ? 1 : e.dt != t.dt ? t.dt - e.dt : t.life - e.life
				})), this.gpList = [], this.gpList.push(this.gp_player1, this.gp_player2, this.gp_player3, this.gp_player4, this.gp_player5, this.gp_player6), this.vo && this.updatePlayerInfo()
			}, e.prototype.updatePlayerInfo = function() {
				var n = this;
				this.vo.forEach(function(e, t) {
					var i = new customui.ZzqChessResultItem;
					i.updateData({
						vo: e,
						index: t
					}), n.gpList[t].removeChildren(), n.gpList[t].addChild(i)
				})
			}, e
		}(BasePanel);
		i.ZzqChessResult = e, __reflect(e.prototype, "game.ZzqChessResult")
	}(game || (game = {})),
	function(E) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.RANK_IMAGE = {
					"青铜": "paiweisai_txt_qingtong",
					"白银": "paiweisai_txt_baiyin",
					"黄金": "paiweisai_txt_huangjin",
					"铂金": "paiweisai_txt_bojin",
					"钻石": "paiweisai_txt_zuanshi",
					"星耀": "paiweisai_txt_xingyao",
					"王者": "paiweisai_txt_wangzhe"
				}, e.skinName = "ZzqChessResultItemSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.updateData = function(e) {
				this.gp_result1.visible = 0 == e.index, this.gp_result2.visible = 1 == e.index, this.gp_result3.visible = 2 == e.index, this.lb_resultNum.visible = 2 < e.index, this.lb_resultNum.text = e.index + 1, this.lb_name.text = e.vo.name;
				var t = [],
					i = {
						text: e.vo.winNum + "",
						style: {
							textColor: 2555657
						}
					},
					n = {
						text: "-" + e.vo.loseNum,
						style: {
							textColor: 16777215
						}
					};
				t.push(i, n), this.lb_result1.textFlow = t;
				var o = JSON.parse(e.vo.stationList);
				e.vo.level = null == e.vo.level ? 0 < o.length ? o.length : 1 : e.vo.level;
				var a = game.Config.chessLevelHero(e.vo.level),
					r = JSON.parse(a.stationList);
				r.forEach(function(e) {
					e && 0
				}), this.gp_heroInfo.removeChildren();
				for (var s = 1; s <= ZZQ_CONST.SHANGZHEN_NUM; s++) {
					var c = E.BaseItemForChessFactory.create();
					if (c.scaleX = .35, c.scaleY = .35, r[s - 1]) {
						for (var l = !1, h = 0, p = o; h < p.length; h++) {
							var d = p[h];
							if (d[0] == s) {
								c.updateData({
									code: d[1]
								}), l = !0;
								break
							}
						}
						l || c.resetFixedStyle()
					} else c.resetFixedStyle(), c.img_icon.source = "common_img_xiaosuo_png";
					this.gp_heroInfo.addChild(c)
				}
				var u = e.vo.grade;
				if (null != u) {
					var g = game.Config.chessStarLevel();
					if (g) {
						var f, _, m = -1,
							y = !1;
						for (var v in g) {
							var T = g[v];
							if (y || (u >= T.requestGrade ? (T.code, f = T) : y = !0), y && !_ && (_ = T), y) {
								if (!(m < Number(T.stars))) break;
								m = Number(T.stars)
							}
						}
						for (var C in this.img_rank_0.source = ResourceUtils.png(f.icon), this.img_rank_0.width = 32, this.img_rank_0.height = 26, this.RANK_IMAGE)
							if (-1 != f.name.search(C)) {
								this.img_rank_1.source = ResourceUtils.png(this.RANK_IMAGE[C]);
								break
							}
						this.img_rank_2.visible = 0 != f.num, 0 != f.num && (this.img_rank_2.source = "paiweisai_img_" + f.num + "_png")
					}
				}
			}, e
		}(eui.Component);
		E.ZzqChessResultItem = e, __reflect(e.prototype, "customui.ZzqChessResultItem", ["eui.UIComponent", "egret.DisplayObject"])
	}(customui || (customui = {})),
	function(S) {
		var e = function(i) {
			function l(e) {
				var t = i.call(this) || this;
				return t.playerInfo = void 0, t.playerTenList = [], t.playerTenTextList = [], t.initHeroList = !1, t.initHistoryList = !1, t.initRecommendList = !1, t.heroList = void 0, t.allTimes = void 0, t.heroIsUP1 = !1, t.heroIsUP2 = !1, t.heroIsUP3 = !1, t.skinName = "ZzqDataInfoSkin", t.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), t.initHeroList = !1, t.initHistoryList = !1, t.initRecommendList = !1, t
			}
			return __extends(l, i), l.prototype.updateView = function(e) {
				this.playerInfo = e.info, this.onBarItemTap()
			}, l.prototype.childrenCreated = function() {
				var e = this;
				i.prototype.childrenCreated.call(this), this.commonDaTanKuang.blb_title.text = "个人信息", this.commonDaTanKuang.onCloseCB = function() {
					e.hide()
				}, this.initTabbar(), this.initMyInfoList(), this.initHeroChoose()
			}, l.prototype.initTabbar = function() {
				this.tabbar.itemRendererSkinName = "BackpackUI_TabbarItemSkin", this.tabbar.dataProvider = new eui.ArrayCollection([{
					source: {
						up: "_btn_yq_m_json.common_yeqian_gerenxinxi_0",
						down: "_btn_yq_m_json.common_yeqian_gerenxinxi_1",
						text: "信息"
					}
				}, {
					source: {
						up: "_btn_yq_m_json.common_yeqian_yingxiongxinxi_0",
						down: "_btn_yq_m_json.common_yeqian_yingxiongxinxi_1",
						text: "英雄"
					}
				}, {
					source: {
						up: "_btn_yq_m_json.common_yeqian_lishizhanji_0",
						down: "_btn_yq_m_json.common_yeqian_lishizhanji_1",
						text: "战绩"
					}
				}, {
					source: {
						up: "_btn_yq_m_json.common_yeqian_tuijianzhenrong_0",
						down: "_btn_yq_m_json.common_yeqian_tuijianzhenong_1",
						text: "阵容"
					}
				}]), this.tabbar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this)
			}, l.prototype.initMyInfoList = function() {
				for (var e in this.playerTenList.push(this.gp_last0), this.playerTenList.push(this.gp_last1), this.playerTenList.push(this.gp_last2), this.playerTenList.push(this.gp_last3), this.playerTenList.push(this.gp_last4), this.playerTenList.push(this.gp_last5), this.playerTenList.push(this.gp_last6), this.playerTenList.push(this.gp_last7), this.playerTenList.push(this.gp_last8), this.playerTenList.push(this.gp_last9), this.playerTenList) this.playerTenList[e].visible = !1;
				this.playerTenTextList.push(this.lb_last0), this.playerTenTextList.push(this.lb_last1), this.playerTenTextList.push(this.lb_last2), this.playerTenTextList.push(this.lb_last3), this.playerTenTextList.push(this.lb_last4), this.playerTenTextList.push(this.lb_last5), this.playerTenTextList.push(this.lb_last6), this.playerTenTextList.push(this.lb_last7), this.playerTenTextList.push(this.lb_last8), this.playerTenTextList.push(this.lb_last9)
			}, l.prototype.initHeroChoose = function() {
				var e = this;
				this.gp_choose1.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.updateHeroListBychoose(1)
				}, this), this.gp_choose2.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.updateHeroListBychoose(2)
				}, this), this.gp_choose3.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.updateHeroListBychoose(3)
				}, this)
			}, l.prototype.onBarItemTap = function(e) {
				var t = this;
				switch (void 0 === e && (e = {
					itemIndex: l.TAB_VIEW.MYINFO
				}), this.gp_myinfo.visible = !1, this.gp_heroList.visible = !1, this.gp_history.visible = !1, this.gp_recommend.visible = !1, e.itemIndex) {
					case l.TAB_VIEW.MYINFO:
						this.commonDaTanKuang.blb_title.text = "个人信息", this.gp_myinfo.visible = !0, this.updateMyInfo(this.playerInfo);
						break;
					case l.TAB_VIEW.HEROINFO:
						this.commonDaTanKuang.blb_title.text = "英雄信息", this.initHeroList ? (this.scroller_heroList.viewport.scrollV = 0, this.scroller_heroList.viewport.validateNow(), this.scroller_heroList.stopAnimation(), this.gp_heroList.visible = !0) : this.proxy.GetWchessHeroCount(function(e) {
							t.updateHeroList({
								info: e.info,
								times: e.times
							})
						});
						break;
					case l.TAB_VIEW.hISTORYINFO:
						this.commonDaTanKuang.blb_title.text = "历史战绩", this.initHistoryList ? (this.scroller_history.viewport.scrollV = 0, this.scroller_history.viewport.validateNow(), this.scroller_history.stopAnimation()) : (this.list_historyItem.itemRenderer = o, this.updateHistoryList()), this.gp_history.visible = !0;
						break;
					case l.TAB_VIEW.TEAMINFO:
						this.commonDaTanKuang.blb_title.text = "推荐阵容", this.initRecommendList ? (this.scroller_recommend.viewport.scrollV = 0, this.scroller_recommend.viewport.validateNow(), this.scroller_recommend.stopAnimation()) : this.updateRecommendList(), this.gp_recommend.visible = !0
				}
			}, l.prototype.updateRecommendList = function() {
				var e = S.Config.chessRecommend();
				this.list_recommend.itemRenderer = n;
				var t = new Array;
				for (var i in e) t.push(e[i]);
				this.list_recommend.dataProvider = new eui.ArrayCollection(t), this.gp_recommend.visible = !0
			}, l.prototype.updateHeroListBychoose = function(e) {
				var h = this;
				for (var t in this.img_choose1.visible = !1, this.img_choose2.visible = !1, this.img_choose3.visible = !1, 1 == e ? (this.heroIsUP1 = !this.heroIsUP1, this.img_choose1.rotation = this.heroIsUP1 ? 90 : -90, this.img_choose1.visible = !0, this.heroList.sort(function(e, t) {
						return e.appearTimes > t.appearTimes ? 1 == h.heroIsUP1 ? -1 : 1 : 1 == h.heroIsUP1 ? 1 : -1
					})) : 2 == e ? (this.heroIsUP2 = !this.heroIsUP2, this.img_choose2.rotation = this.heroIsUP2 ? 90 : -90, this.img_choose2.visible = !0, this.heroList.sort(function(e, t) {
						var i = e.successTimes / e.appearTimes;
						return t.successTimes / t.appearTimes < i ? 1 == h.heroIsUP2 ? -1 : 1 : 1 == h.heroIsUP2 ? 1 : -1
					})) : 3 == e && (this.heroIsUP3 = !this.heroIsUP3, this.img_choose3.rotation = this.heroIsUP3 ? 90 : -90, this.img_choose3.visible = !0, this.heroList.sort(function(e, t) {
						var i, n = JSON.parse(e.rankTimes),
							o = 0,
							a = 0;
						for (var r in n) o += n[r][0] * n[r][1], a += n[r][1];
						i = o / a;
						var s = JSON.parse(t.rankTimes),
							c = 0,
							l = 0;
						for (var r in s) c += s[r][0] * s[r][1], l += s[r][1];
						return c / l < i ? 1 == h.heroIsUP3 ? -1 : 1 : 1 == h.heroIsUP3 ? 1 : -1
					})), this.heroList) this.heroList[t].indexNum = t;
				this.list_heroList.dataProvider = new eui.ArrayCollection(this.heroList)
			}, l.prototype.updateHeroList = function(i) {
				if (this.initHeroList = !0, i || i.info) {
					for (var e in this.list_heroList.itemRenderer = t, this.heroList = i.info, this.allTimes = i.times, this.heroList.sort(function(e, t) {
							return e.allTime = i.times, t.allTime = i.times, e.appearTimes > t.appearTimes ? -1 : 1
						}), this.heroList) this.heroList[e].indexNum = e;
					this.heroIsUP1 = !0, this.heroIsUP2 = !1, this.heroIsUP3 = !1, this.img_choose1.rotation = 90, this.img_choose1.visible = !0, this.img_choose2.visible = !1, this.img_choose3.visible = !1, this.list_heroList.dataProvider = new eui.ArrayCollection(this.heroList), this.gp_heroList.visible = !0
				} else this.scroller_heroList.stopAnimation(), this.scroller_heroList.viewport.scrollV = 0
			}, l.prototype.updateHistoryList = function() {
				var e = this;
				if (this.playerInfo || this.playerInfo.records) {
					for (var t = new Array, i = JSON.parse(this.playerInfo.records), n = 0; n < i.length; n++) i[n].index = n, t.push(i[n]);
					t.sort(function(e, t) {
						return e.dt > t.dt ? -1 : 1
					});
					var o = 0,
						a = new egret.Timer(30, t.length);
					this.list_historyItem.dataProvider = new eui.ArrayCollection(t), a.addEventListener(egret.TimerEvent.TIMER, function() {
						o < e.list_historyItem.$children.length && (e.list_historyItem.getChildAt(o).visible = !0, o++, e.scroller_history.viewport.validateNow(), e.scroller_history.stopAnimation())
					}, this), a.start()
				} else this.scroller_history.stopAnimation(), this.scroller_history.viewport.scrollV = 0
			}, l.prototype.updateMyInfo = function(e) {
				if (this.lb_name.text = this.proxy.curPlayer.name, this.cu_playerHead = customui.ZzqPlayerHeadFactory.create(), this.cu_playerHead.x = this.cu_playerHead.y = 1.34, this.cu_playerHead.width = this.cu_playerHead.height = 80, this.gp_item.addChild(this.cu_playerHead), this.cu_playerHead.updateData({
						vo: this.proxy.curPlayer
					}), e && e.grade ? this.lb_now.text = this.updateGradeInfo(e.grade) : this.lb_now.text = "青铜", e && e.hGrade ? this.lb_old.text = this.updateGradeInfo(e.hGrade) : this.lb_old.text = "青铜", e && e.rankTimes) {
					var t = 0,
						i = 0,
						n = 0,
						o = 0,
						a = JSON.parse(e.rankTimes);
					for (var r in a) t += a[r][1], a[r][0] < 2 && (i += a[r][1]), a[r][0] < 4 && (n += a[r][1]), o += a[r][0] * a[r][1];
					this.lb_infonum1.text = t + "", this.lb_infonum2.text = i + "", this.lb_infonum3.text = (i / t * 100).toFixed(0) + "%", this.lb_infonum4.text = n + "", this.lb_infonum5.text = (n / t * 100).toFixed(0) + "%", this.lb_infonum6.text = (o / t).toFixed(1)
				} else this.lb_infonum1.text = "0", this.lb_infonum2.text = "0", this.lb_infonum3.text = "0%", this.lb_infonum4.text = "0", this.lb_infonum5.text = "0%", this.lb_infonum6.text = "0";
				if (e && e.records) {
					var s = 0,
						c = 0,
						l = JSON.parse(e.records);
					l.sort(function(e, t) {
						return e.dt > t.dt ? -1 : 1
					});
					for (var h = 0; h < l.length && !(9 < h); h++) {
						s++, c += l[h].rank, this.playerTenList[h].visible = !0;
						var p = this.playerTenList[h].$children[1],
							d = this.playerTenList[h].$children[2],
							u = this.playerTenList[h].$children[3],
							g = this.playerTenList[h].$children[4];
						p.visible = 1 == l[h].rank, d.visible = 2 == l[h].rank, u.visible = 3 == l[h].rank, g.visible = 3 < l[h].rank, this.playerTenTextList[h].text = l[h].rank
					}
					this.lbl_rank.text = (c / s).toFixed(1)
				} else
					for (var r in this.lbl_rank.text = "0", this.playerTenList) this.playerTenList[r].visible = !1
			}, l.prototype.updateGradeInfo = function(e) {
				if (null != e) {
					var t = S.Config.chessStarLevel();
					if (t) {
						var i, n, o = -1,
							a = !1;
						for (var r in t) {
							var s = t[r];
							if (a || (e >= s.requestGrade ? (s.code, i = s) : a = !0), a && !n && (n = s), a) {
								if (!(o < Number(s.stars))) break;
								o = Number(s.stars)
							}
						}
						for (var c in l.RANK_IMAGE)
							if (-1 != i.name.search(c)) return l.RANK_IMAGE[c]
					}
				}
			}, l.RANK_IMAGE = {
				"青铜": "青铜",
				"白银": "白银",
				"黄金": "黄金",
				"铂金": "铂金",
				"钻石": "钻石",
				"星耀": "星耀",
				"王者": "王者"
			}, l.TAB_VIEW = {
				MYINFO: 0,
				HEROINFO: 1,
				hISTORYINFO: 2,
				TEAMINFO: 3
			}, l
		}(BasePanel);
		S.ZzqDataInfo = e, __reflect(e.prototype, "game.ZzqDataInfo");
		var n = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqDataRecommendItemSkin", e.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.dataChanged = function() {
				this.gp_team.removeChildren();
				var e = this.data;
				this.lb_text.text = e.content;
				for (var t = JSON.parse(e.stationList), i = (null == t.length || t.length, 0); i < t.length; i++) {
					var n = customui.BaseItemForChessFactory.create();
					n.scaleX = .5, n.scaleY = .5, n.updateData({
						code: t[i]
					}), this.gp_team.addChild(n)
				}
				if (this.gp_buff.removeChildren(), 0 < t.length) {
					var o = this.gp_buff,
						a = S.AppFacade.getInstance().retrieveProxy(S.HeroPy.N).getActivatedHaloId(t, !0),
						r = S.Config.heroHaloConfig();
					for (var s in a) {
						var c = r[a[s]],
							l = new ZzqHaloItem({
								icon: S.GeneralConfig.getGuajiImg(c.img)[1]
							});
						o.addChild(l)
					}
				}
			}, e
		}(eui.ItemRenderer);
		__reflect(n.prototype, "ZzqDataRecommendItem");
		var t = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqDataHeroItemSkin", e.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this), this.baseitem = customui.BaseItemForChessFactory.create(), this.baseitem.touchEnabled = !1, this.baseitem.scaleX = .6, this.baseitem.scaleY = .6, this.gp_item.addChild(this.baseitem)
			}, e.prototype.dataChanged = function() {
				var e = this.data;
				this.img_di.visible = this.data.indexNum % 2 != 0;
				var t, i = S.Config.chessHero();
				for (var n in i)
					if (i[n].subType == e.subType) {
						t = i[n];
						break
					}
				this.baseitem.updateData(t), this.lb_rank.text = t.name, this.lb_num1.text = (100 * e.appearTimes / (6 * e.allTime)).toFixed(1) + "%", this.lb_num2.text = (100 * e.successTimes / e.appearTimes).toFixed(1) + "%";
				var o = JSON.parse(e.rankTimes),
					a = 0,
					r = 0;
				for (var n in o) a += o[n][0] * o[n][1], r += o[n][1];
				this.lb_num3.text = (a / r).toFixed(1)
			}, e
		}(eui.ItemRenderer);
		__reflect(t.prototype, "ZzqDataHeroItem");
		var o = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.RANK_IMAGE = {
					"青铜": "paiweisai_txt_qingtong",
					"白银": "paiweisai_txt_baiyin",
					"黄金": "paiweisai_txt_huangjin",
					"铂金": "paiweisai_txt_bojin",
					"钻石": "paiweisai_txt_zuanshi",
					"星耀": "paiweisai_txt_xingyao",
					"王者": "paiweisai_txt_wangzhe"
				}, e.skinName = "ZzqDataHistoryItemSkin", e.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), e
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				var t = this;
				i.prototype.childrenCreated.call(this), this.img_all.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					t.proxy.GetWchessResultLog(t.data.resultUuid, function(e) {
						t.showResult({
							info: e.info
						})
					})
				}, this)
			}, e.prototype.dataChanged = function() {
				var e = this.data;
				this.img_di.visible = this.data.index % 2 != 0, this.gp_team.removeChildren(), this.gp_halo.removeChildren(), this.img_rank_0.visible = 1 == e.rank, this.img_rank_1.visible = 2 == e.rank, this.img_rank_2.visible = 3 == e.rank, this.lb_rank.visible = 3 < e.rank, this.lb_rank.text = e.rank;
				for (var t = JSON.parse(e.stationList), i = null == t.length ? 1 : t.length, n = S.Config.chessLevelHero(i), o = JSON.parse(n.stationList), a = 1; a <= ZZQ_CONST.SHANGZHEN_NUM; a++) {
					var r = customui.BaseItemForChessFactory.create();
					if (r.scaleX = .35, r.scaleY = .35, o[a - 1]) {
						for (var s = !1, c = 0, l = t; c < l.length; c++) {
							var h = l[c];
							if (h[0] == a) {
								r.updateData({
									code: h[1]
								}), s = !0;
								break
							}
						}
						s || r.resetFixedStyle()
					} else r.resetFixedStyle(), r.img_icon.source = "common_img_xiaosuo_png";
					this.gp_team.addChild(r)
				}
				var p = e.grade;
				if (null != p) {
					var d = S.Config.chessStarLevel();
					if (d) {
						var u, g, f = -1,
							_ = !1;
						for (var m in d) {
							var y = d[m];
							if (_ || (p >= y.requestGrade ? (y.code, u = y) : _ = !0), _ && !g && (g = y), _) {
								if (!(f < Number(y.stars))) break;
								f = Number(y.stars)
							}
						}
						for (var v in this.img_rank_3.source = ResourceUtils.png(u.icon), this.img_rank_3.width = 32, this.img_rank_3.height = 26, this.RANK_IMAGE)
							if (-1 != u.name.search(v)) {
								this.img_rank_4.source = ResourceUtils.png(this.RANK_IMAGE[v]);
								break
							}
						if (this.img_rank_5.visible = 0 != u.num, 0 != u.num && (this.img_rank_5.source = "paiweisai_img_" + u.num + "_png"), t) {
							this.gp_halo.removeChildren();
							var T = [],
								C = [];
							for (var E in t) C.indexOf(S.Config.chessHero()[t[E][1]]) < 0 && (T.push(t[E][1]), C.push(S.Config.chessHero()[t[E][1]]));
							if (0 < T.length) {
								var b = this.gp_halo,
									A = S.AppFacade.getInstance().retrieveProxy(S.HeroPy.N).getActivatedHaloId(T, !0),
									I = S.Config.heroHaloConfig();
								for (var E in A) {
									y = I[A[E]];
									var P = new ZzqHaloItem({
										icon: S.GeneralConfig.getGuajiImg(y.img)[1]
									});
									P.scaleX = .8, P.scaleY = .8, b.addChild(P)
								}
							}
						}
					}
				}
			}, e.prototype.showResult = function(e) {
				var t = e.info;
				S.AppFacade.getInstance().showSubView(S.ZzqMediator.N, S.ZzqMediator.SV.RESULT, {
					vo: t.players
				})
			}, e
		}(eui.ItemRenderer);
		__reflect(o.prototype, "ZzqDataHistoryItem")
	}(game || (game = {})),
	function(a) {
		var e = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.curType = EEntityType.EEntityTypeHero, e.ghDataList = {}, e.select = 1, e.ITEM_TYPE_CONFIG = {
					desc: "图鉴",
					type: "英雄",
					barSource: {
						up: "_btn_yq_m_json.beibao_yeqian_yingxiong_0",
						down: "_btn_yq_m_json.beibao_yeqian_yingxiong_1"
					},
					getAllInfo: function(e) {
						var t = {},
							i = a.Config.chessHero();
						for (var n in i) {
							var o = i[n];
							o.isShow && 3 == o.initStar && (1 == e ? (t[o.race] || (t[o.race] = new Array), t[o.race].push(o)) : (t[o.subProfession] || (t[o.subProfession] = new Array), t[o.subProfession].push(o)))
						}
						return t
					},
					filterConfig: {
						data: [{
							select: 1,
							icon: "_btn_yq_m_json.zzq_btn_zz_0",
							chosenImg: "_btn_yq_m_json.zzq_btn_zz_1"
						}, {
							select: 2,
							icon: "_btn_yq_m_json.zzq_btn_zy_0",
							chosenImg: "_btn_yq_m_json.zzq_btn_zy_1"
						}],
						filterFunc: function(e, t, i) {
							return !e || e.race == t.race
						}
					},
					sortConfig: {
						data: [{
							desc: "等级"
						}, {
							desc: "星级"
						}],
						defaultSortFunc: function(e, t) {
							var i = e.info,
								n = t.info;
							return i.initStar != n.initStar ? i.initStar - n.initStar : i.costNum != n.costNum ? i.costNum - n.costNum : i.race != n.race ? i.race - n.race : i.profession != n.profession ? HERO_SORT_ORDER[n.profession] - HERO_SORT_ORDER[i.profession] : i.code - n.code
						}
					}
				}, e.mapId = {
					1: 13,
					2: 14,
					3: 15,
					4: 16,
					5: 17,
					6: 18,
					101: 19,
					102: 20,
					201: 21,
					202: 22,
					203: 23,
					301: 24,
					302: 25,
					501: 26,
					502: 27
				}, e.skinName = "HandBookMainViewSkin", e
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				var t = this;
				i.prototype.childrenCreated.call(this), this.initList(), this.activateComponent(), this.initialized = !1, this.gp_content.scaleX = this.gp_content.scaleY = 1, UIActionManager.playUIAction(this.gp_content, 1), this.scroller.addEventListener(egret.Event.CHANGE, function() {
					var e = 1 == t.select ? 1220 : 1790;
					t.list_item.scrollV >= e && (t.list_item.scrollV = e)
				}, this)
			}, e.prototype.guanghuanData = function() {
				var r = a.Config.heroHaloConfig(),
					s = {},
					c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"],
					e = function(e) {
						var i = r[e];
						if (i.haloType == HaloType.Chess) {
							var t = i.type,
								n = i.subType;
							s[n] || (s[n] = {
								name: i.name,
								type: t,
								subType: n,
								slot: [],
								showNum: 0,
								img: i.img,
								skillDesc: {},
								first: !0
							});
							var o = s[n],
								a = o.slot;
							c.forEach(function(e, t) {
								!a[t] && i[e] && a.push(i[e])
							}), o.skillDesc[a.length] = i.haloSkillDesc, o.showNum = a.length
						}
					};
				for (var t in r) e(t);
				this.ghDataList = s
			}, e.prototype.initList = function() {
				this.scroller.scrollPolicyV = eui.ScrollPolicy.AUTO;
				var e = new eui.VerticalLayout;
				this.list_item.layout = e, this.list_item.itemRenderer = t, this.list_filter.itemRenderer = n, this.list_filter.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onFilterListItemTap, this)
			}, e.prototype.onFilterListItemTap = function(e) {
				if (this.curFilter && this.curFilter == e.item.data ? this.curFilter = void 0 : this.curFilter = e.item.data, this.select != e.item.data.select) {
					this.select = e.item.data.select;
					var t = this.list_filter.dataProvider;
					for (var i in t.source) {
						var n = t.source[i];
						n == e.item ? n.chosen = !n.chosen : n.chosen = !1
					}
					t.refresh(), this.updateList()
				}
			}, e.prototype.fadeFilterListItemTap = function(e) {
				this.curFilter && this.curFilter == e.item.data ? this.curFilter = void 0 : this.curFilter = e.item.data;
				var t = this.list_filter.dataProvider;
				for (var i in t.source) {
					var n = t.source[i];
					n.data.select == e.item.data.select ? n.chosen = !n.chosen : n.chosen = !1
				}
				t.refresh(), this.updateList()
			}, e.prototype.onListItemTap = function(e) {
				this.log("点击事件:", e);
				var t = e.item.info,
					i = t.code;
				Math.floor(i / 1e7);
				this.mediator.showSubView(a.ZzqMediator.SV.DETAIL, {
					vo: t,
					isShowBtn: !0
				})
			}, e.prototype.updateView = function(e) {
				this.params = e, this.targetConfig = this.ITEM_TYPE_CONFIG, this.targetConfig && (this.initialized || (this.initialized = !0, this.guanghuanData(), this.resetFilterAndSorter(), this.fadeFilterListItemTap({
					item: {
						isHero: !0,
						data: this.targetConfig.filterConfig.data[0],
						chosen: !1
					}
				})), this.updateList())
			}, e.prototype.updateList = function() {
				this.targetConfig.filterConfig && this.targetConfig.filterConfig.filterFunc;
				var e = this.targetConfig.sortConfig && this.targetConfig.sortConfig.defaultSortFunc,
					t = this.targetConfig.getAllInfo(this.select);
				if (t) {
					t[1] && (this.gp_empty.visible = !1, this.scroller.visible = !0);
					var i = {};
					if (e)
						for (var n in t) {
							var o = t[n],
								a = [];
							for (var r in o) {
								var s = o[r];
								a.push({
									info: s,
									get: !0
								})
							}
							i[n] = a, i[n].sort(e)
						}
					var c = [];
					for (var n in i) {
						var l = i[n];
						c.push({
							data: l,
							id: n,
							select: this.select,
							ghData: this.ghDataList[this.mapId[n]]
						})
					}
					this.list_item.dataProvider ? this.list_item.dataProvider.replaceAll(c) : this.list_item.dataProvider = new eui.ArrayCollection(c), this.scroller.stopAnimation(), this.scroller.viewport.scrollV = 0
				} else this.gp_empty.visible = !0, this.scroller.visible = !1
			}, e.prototype.resetFilterAndSorter = function() {
				if (this.targetConfig.filterConfig) {
					this.list_filter.visible = !0, this.curFilter = void 0;
					var t = [];
					"英雄" == this.targetConfig.type || "碎片" == this.targetConfig.type ? (this.targetConfig.filterConfig.data.forEach(function(e) {
						t.push({
							data: e,
							chosen: !1,
							isHero: !0
						})
					}), this.list_filter.x = (this.gp_content.width - (183 * t.length + 15 * (t.length - 1))) / 2 + 15) : (this.targetConfig.filterConfig.data.forEach(function(e) {
						t.push({
							data: e,
							chosen: !1,
							isHero: !1
						})
					}), this.list_filter.x = (this.gp_content.width - (183 * t.length + 15 * (t.length - 1))) / 2), this.list_filter.dataProvider = new eui.ArrayCollection(t)
				} else this.list_filter.visible = !1;
				this.blb_title.text = this.targetConfig.desc
			}, e.prototype.activateComponent = function() {
				var e = this;
				this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.hide()
				}, this)
			}, e.prototype.onDestroy = function() {
				i.prototype.onDestroy.call(this), this.params && this.params.closeCB && this.params.closeCB()
			}, e
		}(BasePanel);
		a.ZzqHeroBookView = e, __reflect(e.prototype, "game.ZzqHeroBookView");
		var r = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "HandBookItemSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				this.baseitem = customui.BaseItemForChessFactory.create(), this.baseitem.touchEnabled = !1, this.gp_content.addChild(this.baseitem)
			}, e.prototype.dataChanged = function() {
				var e = this.data.info;
				switch (Math.floor(e.code / 1e7)) {
					case EEntityType.EEntityTypeHero:
						e.maxLevel, e.noStar = !0, this.baseitem.updateData(e), this.baseitem.blb_level.visible = !1;
						break;
					case EEntityType.EEntityTypeHeroArtifact:
						this.baseitem.updateData(e)
				}
				this.data.get ? UIActionManager.setGrey(this.baseitem, !1) : UIActionManager.setGrey(this.baseitem, !0)
			}, e
		}(eui.ItemRenderer);
		__reflect(r.prototype, "HerobookItem");
		var t = function(i) {
			function e(e) {
				var t = i.call(this) || this;
				return t.isGuanghuan = !1, t.skinName = "heroBookSortItemSkin", t.params = e, t
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				var e = this;
				i.prototype.childrenCreated.call(this), this.list_items.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this), this.resetGuanghuan(), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
					e.data.ghData && (e.gp_gh.visible = !0, e.initGuanghuan())
				}, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_END, function() {
					e.resetGuanghuan()
				}, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function() {
					e.resetGuanghuan()
				}, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function() {
					e.resetGuanghuan()
				}, this)
			}, e.prototype.initGuanghuan = function() {
				var e = this,
					t = new a.ZzqHeroHaloPanel_HaloItem;
				t.initItem(function() {
					t.data = e.data.ghData
				}), this.gp_guanhuan.addChild(t), 502 != this.data.id && 6 != this.data.id || (this.gp_gh.y -= 50)
			}, e.prototype.resetGuanghuan = function() {
				this.gp_gh.visible = !1, this.gp_guanhuan.removeChildren(), !this.data || 502 != this.data.id && 6 != this.data.id || (this.gp_gh.y = 52)
			}, e.prototype.onListItemTap = function(e) {
				egret.log("点击事件:", e);
				var t = e.item.info,
					i = t.code;
				Math.floor(i / 1e7);
				a.AppFacade.getInstance().retrieveMediator(a.ZzqMediator.N).showSubView(a.ZzqMediator.SV.DETAIL, {
					vo: t,
					isShowBtn: !0
				})
			}, e.prototype.dataChanged = function() {
				this.list_items.itemRenderer = r, this.lb_guanhuan.textFlow = [{
					text: "显示光环",
					style: {
						underline: !0
					}
				}];
				var e, t = this.data.data,
					i = this.data.id,
					n = (e = 1 == this.data.select ? HeroRaceConfig[i] : SubProfessionConfig[i]).haoloIcon;
				this.img_tilte_flag.source = n;
				var o = e.name;
				201 == i && (o = "元素"), 202 == i && (o = "魔导"), this.lb_name.text = o, this.list_items.dataProvider = new eui.ArrayCollection(t)
			}, e
		}(eui.ItemRenderer);
		a.HeroBookSortItem = t, __reflect(t.prototype, "game.HeroBookSortItem");
		var n = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "HeroBookTapItemSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.dataChanged = function() {
				this.data.isHero && (this.width = 183, this.scaleX = .9, this.scaleY = .9), this.chosen = this.data.chosen || !1, this.img_icon.source = this.data.data.icon, this.img_chosen.source = this.data.data.chosenImg, this.setChosen(this.chosen)
			}, e.prototype.setChosen = function(e) {
				this.chosen = e, this.img_chosen.visible = this.chosen
			}, e
		}(eui.ItemRenderer);
		a.HeroBookTapItem = n, __reflect(n.prototype, "game.HeroBookTapItem")
	}(game || (game = {})),
	function(p) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.heroPy = p.AppFacade.getInstance().retrieveProxy(p.HeroPy.N), e.skinName = "HeroHaloSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this), this.list_item.itemRenderer = i
			}, e.prototype.updateView = function(e) {
				var r, t = e && e.codeList;
				t && (r = this.heroPy.getActivatedHaloId(t, !0));
				var s = {},
					c = p.Config.heroHaloConfig(),
					l = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"],
					i = function(e) {
						var i = c[e];
						if (i.haloType == HaloType.Chess) {
							var t = i.type,
								n = i.subType;
							s[n] || (s[n] = {
								name: i.name,
								type: t,
								subType: n,
								slot: [],
								showNum: 0,
								img: i.img,
								skillDesc: {}
							});
							var o = s[n],
								a = o.slot;
							l.forEach(function(e, t) {
								!a[t] && i[e] && a.push(i[e])
							}), (!r || 0 <= r.indexOf(i.id)) && (o.showNum = a.length), o.skillDesc[a.length] = i.haloSkillDesc
						}
					};
				for (var n in c) i(n);
				var o = [];
				for (var a in s) {
					var h = s[a];
					o.push(h)
				}
				o.sort(function(e, t) {
					var i = 0 < e.showNum,
						n = 0 < t.showNum;
					return i != n ? n ? 1 : -1 : e.subType - t.subType
				}), o[0].first = !0, this.list_item.dataProvider = new eui.ArrayCollection(o)
			}, e
		}(BasePanel);
		p.ZzqHeroHaloPanel = e, __reflect(e.prototype, "game.ZzqHeroHaloPanel");
		var i = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqHeroHaloPanel_HaloItem", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this);
				for (var e = 0; e < 6; e++) this.gp_condIcon.addChild(new eui.Image)
			}, e.prototype.initItem = function(e) {
				for (var t = 0; t < 6; t++) this.gp_condIcon.addChild(new eui.Image);
				e && e()
			}, e.prototype.dataChanged = function() {
				var o = this;
				UIActionManager.setAbsGrey(this.img_haloIcon, 0 == this.data.showNum), this.img_haloIcon.source = this.data.img + "_png", this.lb_name.text = this.data.name;
				for (var e = this.data.type, t = this.data.slot, i = 0; i < 6; i++) {
					var n = t[i],
						a = this.gp_condIcon.$children[i];
					n ? (a.visible = !0, a.source = e == HeroHaloType.Race ? HeroRaceConfig[n].raceIconBig : SubProfessionConfig[n].icon, UIActionManager.setAbsGrey(a, i >= this.data.showNum)) : a.visible = !1
				}
				this.gp_line.removeChildren();
				var r = this.data.skillDesc,
					s = [],
					c = Object.keys(r);
				c.forEach(function(e, t) {
					var i = r[e];
					if ("" != i && (s.push({
							text: "(" + e + ") " + i,
							style: {
								textColor: Number(e) <= o.data.showNum ? 8060672 : 8553090
							}
						}), t != c.length - 1 && s.push({
							text: "\n"
						})), t != c.length - 1) {
						var n = new eui.Image("yingxiong_img_fengexian_png");
						n.x = 44.2 * Number(e) + 26 * (Number(e) - 1 + .5), o.gp_line.addChild(n)
					}
				}), this.lb_desc.textFlow = s, this.img_line.visible = !this.data.first
			}, e
		}(eui.ItemRenderer);
		p.ZzqHeroHaloPanel_HaloItem = i, __reflect(i.prototype, "game.ZzqHeroHaloPanel_HaloItem")
	}(game || (game = {})),
	function(s) {
		var e = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.skinName = "ZzqLevelDataSkin", e.proxy = s.AppFacade.getInstance().retrieveProxy(s.ZzqPy.N), e
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				var t = this;
				i.prototype.childrenCreated.call(this), this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.hide()
				}, this), this.updateData()
			}, e.prototype.updateData = function() {
				this.gp_next.visible = !0;
				s.Config.chessGrasp();
				var e = this.proxy.curPlayer.level;
				this.lb_levelNow.text = e + "";
				var t = e + 1,
					i = this.getLevelArr(e),
					n = 0;
				for (var o in i) n += i[o].weight;
				if (this.lbl_now_1.text = i[0].weight / n == 0 ? "0%" : (100 * i[0].weight / n).toFixed(1) + "%", this.lbl_now_2.text = i[1].weight / n == 0 ? "0%" : (100 * i[1].weight / n).toFixed(1) + "%", this.lbl_now_3.text = i[2].weight / n == 0 ? "0%" : (100 * i[2].weight / n).toFixed(1) + "%", this.lbl_now_4.text = i[3].weight / n == 0 ? "0%" : (100 * i[3].weight / n).toFixed(1) + "%", this.lbl_now_5.text = i[4].weight / n == 0 ? "0%" : (100 * i[4].weight / n).toFixed(1) + "%", 8 < t) this.gp_next.visible = !1;
				else {
					this.lb_levelnext.text = t + "";
					var a = this.getLevelArr(t),
						r = 0;
					for (var o in a) r += a[o].weight;
					this.lbl_next_1.text = a[0].weight / r == 0 ? "0%" : (100 * a[0].weight / r).toFixed(1) + "%", this.lbl_next_2.text = a[1].weight / r == 0 ? "0%" : (100 * a[1].weight / r).toFixed(1) + "%", this.lbl_next_3.text = a[2].weight / r == 0 ? "0%" : (100 * a[2].weight / r).toFixed(1) + "%", this.lbl_next_4.text = a[3].weight / r == 0 ? "0%" : (100 * a[3].weight / r).toFixed(1) + "%", this.lbl_next_5.text = a[4].weight / r == 0 ? "0%" : (100 * a[4].weight / r).toFixed(1) + "%"
				}
			}, e.prototype.getLevelArr = function(e) {
				var t = [],
					i = s.Config.chessGrasp();
				for (var n in i) i[n].level == e && t.push(i[n]);
				return t.sort(function(e, t) {
					return e.color > t.color ? 1 : -1
				}), t
			}, e
		}(BasePanel);
		s.ZzqLevelData = e, __reflect(e.prototype, "game.ZzqLevelData")
	}(game || (game = {})),
	function(r) {
		var e = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.resFullImg = new eui.Image("_main_m_json.maoxian_icon_man"), Utils.AssetsMgr.loadGroup("group_zzq"), e.skinName = "ZzqMatchingViewSkin", e.proxy = r.AppFacade.getInstance().retrieveProxy(r.ZzqPy.N), e
			}
			return __extends(e, i), e.prototype.onDestroy = function() {
				i.prototype.onDestroy.call(this), this.removeNotice(), r.AppFacade.getInstance().retrieveProxy(r.FriendPy.N).clearInviteHistory(MODULE.Wchess), this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0), Utils.AssetsMgr.destroyGroup("group_zzq")
			}, e.prototype.childrenCreated = function() {
				var t = this;
				i.prototype.childrenCreated.call(this);
				var e = {
					emptyCanInvite: !0
				};
				this.playerHeads = [customui.ZzqPlayerHeadFactory.create(e), customui.ZzqPlayerHeadFactory.create(e), customui.ZzqPlayerHeadFactory.create(e), customui.ZzqPlayerHeadFactory.create(e), customui.ZzqPlayerHeadFactory.create(e), customui.ZzqPlayerHeadFactory.create(e)], this.playerHeads.forEach(function(e) {
					t.gp_heads.addChild(e)
				}), this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					t.proxy.amILeader() ? t.proxy.LeaveRoom(function() {
						t.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), r.MainJumpConfig.jumpTo()
					}) : (t.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), r.MainJumpConfig.jumpTo())
				}, this), this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					t.proxy.SPlayerCount(function(e) {
						t.mediator.showSubView(r.ZzqMediator.SV.DATAINFO, {
							info: e.info
						})
					})
				}, this), Utils.ComponentUtils.registerListener(this.btn_halo, egret.TouchEvent.TOUCH_TAP, function() {
					r.AppFacade.getInstance().showSubView(r.ZzqMediator.N, r.ZzqMediator.SV.HEROHALO)
				}, this), Utils.ComponentUtils.registerListener(this.btn_book, egret.TouchEvent.TOUCH_TAP, function() {
					r.AppFacade.getInstance().showSubView(r.ZzqMediator.N, r.ZzqMediator.SV.HEROBOOK)
				}, this), this.btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					r.AppFacade.getInstance().showSubView(r.RankMediator.N, r.RankMediator.SV.COMMON, {
						module: "ZZQ_RANK"
					})
				}, this), this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					PopUpManager.addPopUp({
						obj: new r.HelpDialog({
							moduleId: MODULE.Wchess
						})
					})
				}, this), this.btn_match.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.proxy.amILeader() ? t.proxy.StartMatch() : t.proxy.LeaveRoom(function() {
						t.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), r.MainJumpConfig.jumpTo()
					})
				}, this), this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.proxy.EndMatch(function() {})
				}, this), Utils.TouchUtils.addTouchListener(this.btn_reward, function() {
					var e = r.Config.chessStarLevel()[t.rewardInfo.starLevel];
					t.proxy.curPlayer.hGrade >= e.requestGrade ? t.proxy.GetStarLevelReward(t.rewardInfo.starLevel) : r.AppFacade.getInstance().showSubView(r.CommonMediator.N, r.CommonMediator.SV.REWARD_PANEL, {
						rewards: t.rewardInfo.rewards,
						type: r.CommonRewardPreviewPanel.REWARD_TYPE.OBTAIN
					})
				}), this.btn_novice.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					this.mediator.showSubView(r.ZzqMediator.SV.NOVICE)
				}, this), this.btn_achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					var t = this;
					this.proxy.GetAchieveLevel(function(e) {
						t.mediator.showSubView(r.ZzqMediator.SV.ACHIEVEMENT, {
							info: e
						})
					})
				}, this), "TRUE" != Utils.LocalStorageUtil.getItem("ZZQ_FIRST_GETIN", !0) && (Utils.LocalStorageUtil.setItem("ZZQ_FIRST_GETIN", "TRUE", !0), this.mediator.showSubView(r.ZzqMediator.SV.NOVICE)), this.btn_match.visible = !0, this.btn_cancel.visible = !1, this.fetch(), this.resFullImg.right = -10, this.resFullImg.visible = !1, this.btn_achievement && this.btn_achievement.addChild(this.resFullImg), NoticeManager.addNoticeListener(NT.ZZQ_ACHIEVELEVEL, this.btn_achievement.getChildAt(0), this, BTN_ICON_NOTICE_POS)
			}, e.prototype.fetch = function() {
				var e = this;
				this.proxy.GetWchessRoomInfo(function() {
					e.switchCanInvite(!0)
				})
			}, e.prototype.switchCanInvite = function(i) {
				this.playerHeads.forEach(function(e, t) {
					e.switchCanInviteStatus(i)
				})
			}, e.prototype.updateMatchStatus = function() {
				var e = this;
				if (this.proxy.curRoomInfo.status == EWchessRoomStatus.Matching) {
					this.btn_match.visible = !1, this.btn_cancel.visible = !0, this.lb_tips.text = "匹配中", this.btn_match.visible = !1;
					var t = this.lb_tips.text.length;
					this.scheId || (this.scheId = egret.setInterval(function() {
						e.lb_tips.text.length < t + 3 ? e.lb_tips.text += "." : e.lb_tips.text = "匹配中"
					}, this, 500)), this.switchCanInvite(!1)
				} else this.proxy.curRoomInfo.status == EWchessRoomStatus.ToMatch && (this.btn_match.label = "开始匹配", this.lb_tips.text = "匹配对手", this.btn_match.visible = !0, this.btn_cancel.visible = !1, this.updateTime(), this.switchCanInvite(!0), this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0));
				this.proxy.amILeader() ? (this.btn_match.label = "开始匹配", this.btn_match.skinName = "skins.ButtonSkinYellow") : (this.btn_match.label = "离开队伍", this.btn_match.skinName = "skins.ButtonSkinRed")
			}, e.prototype.updateTime = function() {
				var e = this.proxy.curRoomInfo.endDt - this.proxy.curRoomInfo.sysDt;
				this.gp_time.visible = !(432e3 < e), this.lbl_time.text = Math.floor(e / 24 / 3600 + 1) + ""
			}, e.prototype.add0 = function(e) {
				return e < 10 ? "0" + e : e
			}, e.prototype.updateView = function(e) {
				var i = this;
				if (this.proxy.curRoomInfo) {
					this.rankBadge.updateBadge({
						type: customui.WorldKingBadge.RANK_TYPE.ZZQ,
						grade: this.proxy.curPlayer.grade
					}), this.rewardInfo = {};
					for (var t = JSON.parse(r.Config.constConfig().ChessStarLevelReward.constValue), n = this.proxy.curPlayer.starLevelTargeted, o = 0; o < t.length; o++) {
						var a = t[o];
						if (n.indexOf(a[0]) < 0) {
							this.rewardInfo.starLevel = a[0], this.rewardInfo.rewards = a[1];
							break
						}
					}
					this.rewardInfo.starLevel ? this.gp_reward.visible = !0 : this.gp_reward.visible = !1, e && e.id && (console.log("wchess 来自以下邀请", e.id), this.proxy.JoinRoom(e.id)), this.playerHeads.forEach(function(e, t) {
						e.updateData({
							vo: i.proxy.curRoomInfo.players[t],
							tapEvent: i.proxy.curRoomInfo.players[t] ? function() {} : void 0
						})
					}), this.updateMatchStatus(), NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
				}
			}, e
		}(BaseFull);
		r.ZzqMatchingView = e, __reflect(e.prototype, "game.ZzqMatchingView")
	}(game || (game = {})),
	function(a) {
		var e = function(i) {
			function o(e) {
				void 0 === e && (e = null);
				var t = i.call(this, o.N, e) || this;
				return t.initAllViewDone = !1, t.proxy = a.AppFacade.getInstance().retrieveProxy(a.ZzqPy.N), t
			}
			return __extends(o, i), o.prototype.initSubView = function() {
				this.addSubView(o.SV.MATCHING, a.ZzqMatchingView), this.addSubView(o.SV.CHESS_MAIN, a.ZzqChess), this.addSubView(o.SV.STATISTICS, a.ZzqStatistics), this.addSubView(o.SV.DETAIL, a.ZzqChessCardDetail), this.addSubView(o.SV.RECORD, a.ZzqBattleRecordPanel), this.addSubView(o.SV.PLAYERINFO, a.ZzqPlayerInfo), this.addSubView(o.SV.HEROBOOK, a.ZzqHeroBookView), this.addSubView(o.SV.HEROHALO, a.ZzqHeroHaloPanel), this.addSubView(o.SV.RESULT, a.ZzqChessResult), this.addSubView(o.SV.DATAINFO, a.ZzqDataInfo), this.addSubView(o.SV.NOVICE, a.ZzqNovice), this.addSubView(o.SV.LEVELDATA, a.ZzqLevelData), this.addSubView(o.SV.ACHIEVEMENT, a.ZzqAchievement), this.addSubView(o.SV.ACHIEVEMENTREWARD, a.ZzqAchievementReward), this.addSubView(o.SV.ACHIEVEMENTREWARDSHOW, a.ZzqAchievementRewardShow), this.addSubView(o.SV.GETACHIEVEMENT, a.ZzqAchievementGet)
			}, o.prototype.listNotificationInterests = function() {
				return [CN.ZZQ_STATUS_QUIT, CN.CONFIG_ALL_LOADED, CN.LOGIN_FINAL_DONE, CN.ZZQ_UPDATE_ROOM_INFO, CN.ZZQ_UPDATE_HERO_INFO, CN.ZZQ_UPDATE_CARD_INFO, CN.ZZQ_UPDATE_CUR_PLAYER, CN.ZZQ_UPDATE_BARRAGE, CN.ZZQ_UPDATE_REWARD_INFO, CN.ZZQ_UPDATE_REWARDCUP_INFO, CN.ZZQ_STATUS_FIGHT_END, SocketConst.SOCKET_RECONNECT]
			}, o.prototype.handleNotification = function(e) {
				var t = this,
					i = e.getBody();
				switch (e.getName()) {
					case CN.CONFIG_ALL_LOADED:
						var n = JSON.parse(a.Config.constConfig().WchessTimeCycle.constValue);
						this.proxy.CONFIG.OPPERA_TM = n[0], this.proxy.CONFIG.BATTLE_TM = n[1];
						break;
					case CN.LOGIN_FINAL_DONE:
						Utils.UnlockMgr.checkPass(MODULE.Wchess, !1).allow && this.proxy.GetAchieveLevel();
						break;
					case CN.ZZQ_STATUS_QUIT:
						this.hideAllSubView(), this.chessRootView = void 0, this.chessPickRootView = void 0, this.initAllViewDone = !1, this.resetRoomState(), customui.ZzqPlayerHeadFactory.clear();
						break;
					case CN.ZZQ_UPDATE_BARRAGE:
						!a.GameMVC.fightPy.isInFight && this.chessRootView && this.chessRootView.updateBarrage();
						break;
					case CN.ZZQ_STATUS_FIGHT_END:
						this.proxy.latestFightStatis && i.uuid == this.proxy.latestFightStatis.battleInfo.uuid ? egret.setTimeout(function() {
							t.chessRootView && (t.chessPickRootView.updateCardColor(), t.chessRootView.updatePlayerHeads(), t.chessRootView.popResult(), t.chessRootView.updateBarrage(), t.chessRootView.updateIsStreak())
						}, this, 500) : (console.log("wchess 战报uuid不符合"), this.chessRootView.updatePlayerHeads(), this.chessRootView.popResult());
						break;
					case CN.ZZQ_UPDATE_CUR_PLAYER:
						this.chessPickRootView.updateCardColor(), this.chessRootView.updateCurPlayerInfo();
						break;
					case CN.ZZQ_UPDATE_CARD_INFO:
						this.log("wchess卡牌变化"), this.chessPickRootView && this.chessPickRootView.updateView();
						break;
					case CN.ZZQ_UPDATE_REWARD_INFO:
						this.log("wchess成就奖励变化"), this.updateView(o.SV.ACHIEVEMENT), this.updateView(o.SV.ACHIEVEMENTREWARD);
						break;
					case CN.ZZQ_UPDATE_REWARDCUP_INFO:
						this.log("wchess获得新成就"), this.showSubView(o.SV.GETACHIEVEMENT, {
							info: i.info
						});
						break;
					case CN.ZZQ_UPDATE_HERO_INFO:
						this.log("wchess背包变化"), this.chessRootView.updateEffect(), this.chessRootView.updateHeroList();
						break;
					case CN.ZZQ_UPDATE_ROOM_INFO:
						if (this.proxy.curRoomInfo.status >= EWchessRoomStatus.Matched) {
							if (this.getSubView(o.SV.MATCHING)) return this.hideSubView(o.SV.MATCHING), void a.MainJumpConfig.jumpTo("ZZQ");
							this.initAllViewDone && this.chessRootView && this.updateStatus()
						} else this.updateView(o.SV.MATCHING);
						break;
					case SocketConst.SOCKET_RECONNECT:
						(this.getSubView(o.SV.CHESS_MAIN) || this.getSubView(o.SV.MATCHING)) && this.sendNotification(CN.ZZQ_STATUS_QUIT)
				}
			}, o.prototype.updateStatus = function() {
				return __awaiter(this, void 0, void 0, function() {
					var t, i, n;
					return __generator(this, function(e) {
						switch (t = this.proxy.curRoomInfo.status, this.chessRootView.updateCurPlayerInfo(), this.log("=当前房间状态====>" + t), t) {
							case EWchessRoomStatus.Handle:
								if (this.lastState != t && (this.chessRootView.countDown("准备回合", this.proxy.CONFIG.OPPERA_TM), this.chessRootView.updatePlayerHeads(), 0 < this.proxy.curPlayer.life))
									for (i in this.proxy.GetHeroList(), this.chessPickRootView.show(), this.proxy.curRoomInfo.players) this.proxy.curRoomInfo.players[i].uuid == this.proxy.curRoomInfo.uuid && (n = this.proxy.curRoomInfo.players[i]).level && (this.proxy.oldlevel != n.level && this.chessRootView.showUp(), this.proxy.oldlevel = n.level);
								break;
							case EWchessRoomStatus.Battle:
								this.chessRootView.countDown("战斗回合", this.proxy.CONFIG.BATTLE_TM);
								break;
							case EWchessRoomStatus.ChickenDinner:
								Utils.MsgUtils.addMidMsg("战斗结束"), this.chessRootView.updatePlayerHeads(), this.resetRoomState(), this.sendNotification(CN.ZZQ_STATUS_QUIT), a.MainJumpConfig.jumpTo(), this.showSubView(o.SV.RESULT)
						}
						return this.lastState = t, [2]
					})
				})
			}, o.prototype.resetRoomState = function() {
				this.lastState = void 0
			}, o.prototype.onViewCreate = function(e) {
				e == o.SV.CHESS_MAIN && (this.chessRootView = this.getSubView(o.SV.CHESS_MAIN), this.initAllViewDone = !0, this.chessPickRootView || (this.chessPickRootView = new a.ZzqChessPick, this.chessRootView.gp_pick.addChild(this.chessPickRootView)))
			}, o.N = "ZzqMediator", o.SV = {
				MATCHING: 1,
				CHESS_MAIN: 2,
				STATISTICS: 3,
				DETAIL: 4,
				RECORD: 5,
				PLAYERINFO: 6,
				HEROBOOK: 7,
				HEROHALO: 8,
				RESULT: 9,
				DATAINFO: 10,
				NOVICE: 11,
				LEVELDATA: 12,
				ACHIEVEMENT: 13,
				ACHIEVEMENTREWARD: 14,
				ACHIEVEMENTREWARDSHOW: 15,
				GETACHIEVEMENT: 16
			}, o
		}(BaseMediator);
		a.ZzqMediator = e, __reflect(e.prototype, "game.ZzqMediator")
	}(game || (game = {})),
	function(e) {
		var t = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.imgList = [], e.noviceNum = 1, e.skinName = "ZzqNoviceSkin", e
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				var t = this;
				i.prototype.childrenCreated.call(this), this.imgList = [], this.imgList.push(this.img_1), this.imgList.push(this.img_2), this.imgList.push(this.img_3), this.noviceNum = 0, this.updateNovicePos(), this.scroller_novice.throwSpeed = 0, this.scroller_novice.bounces = !1, this.scroller_novice.addEventListener(eui.UIEvent.CHANGE_START, function(e) {
					t.startTouch = t.scroller_novice.viewport.scrollH
				}, this), this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.hide()
				}, this), this.scroller_novice.addEventListener(eui.UIEvent.CHANGE_END, function(e) {
					t.endTouchs = t.scroller_novice.viewport.scrollH, t.startTouch > t.endTouchs ? t.noviceNum-- : t.startTouch < t.endTouchs && t.noviceNum++, t.updateNovicePos()
				}, this), this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.noviceNum++, t.updateNovicePos()
				}, this), this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
					t.noviceNum--, t.updateNovicePos()
				}, this)
			}, e.prototype.updateNovicePos = function() {
				2 < this.noviceNum ? this.noviceNum = 2 : this.noviceNum < 0 && (this.noviceNum = 0), this.btn_left.visible = 0 != this.noviceNum, this.btn_right.visible = 2 != this.noviceNum, this.img_now.x = this.imgList[this.noviceNum].x, this.img_now.y = this.imgList[this.noviceNum].y, this.scroller_novice.viewport.scrollH = 506 * this.noviceNum
			}, e
		}(BasePanel);
		e.ZzqNovice = t, __reflect(t.prototype, "game.ZzqNovice")
	}(game || (game = {})),
	function(c) {
		var e = function() {
			function e() {}
			return e.registerAll = function() {
				(new t).register(), (new i).register(), (new n).register(), (new a).register(), (new o).register(), (new r).register(), (new s).register()
			}, e
		}();
		c.ZzqProcessor = e, __reflect(e.prototype, "game.ZzqProcessor");
		var t = function(e) {
			function t() {
				return e.call(this, "wchess.WchessRoomInfoP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N).updateZzqRoomInfo(t.info)
			}, t
		}(c.ProcessorBase);
		c.WchessRoomInfoP = t, __reflect(t.prototype, "game.WchessRoomInfoP");
		var i = function(e) {
			function t() {
				return e.call(this, "wchess.BarrageListP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N).updateBarrage(t.barrageList)
			}, t
		}(c.ProcessorBase);
		c.BarrageListP = i, __reflect(i.prototype, "game.BarrageListP");
		var n = function(e) {
			function t() {
				return e.call(this, "wchess.BattleDetailListP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N).updateBattleDetail(t.detailList)
			}, t
		}(c.ProcessorBase);
		c.BattleDetailListP = n, __reflect(n.prototype, "game.BattleDetailListP");
		var o = function(e) {
			function t() {
				return e.call(this, "wchess.BattleInfoP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				c.AppFacade.getInstance().retrieveProxy(c.FightPy.N).respBattleInfoP(e.getBody().battleInfo)
			}, t
		}(c.ProcessorBase);
		__reflect(o.prototype, "BattleInfoP");
		var a = function(e) {
			function t() {
				return e.call(this, "wchess.BattleResultP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				if (c.AppFacade.getInstance().retrieveMediator(c.ZzqMediator.N).getSubView(c.ZzqMediator.SV.CHESS_MAIN) || c.GameMVC.zzqPy.simFight) {
					var t = e.getBody();
					t.battleType || (t.battleType = EBattleType.EBattleTypeWchess);
					for (var i = c.AppFacade.getInstance().retrieveProxy(c.FightPy.N), n = c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N), o = 0, a = t.teams; o < a.length; o++) {
						var r = a[o];
						r.playerId || (r.playerId = r.uuid)
					}
					if (t.isSelf) i.respBattleResultP(t);
					else {
						var s = 0;
						i.isInFight && i.fightType == EBattleType.EBattleTypeWchess && (c.AppFacade.getInstance().sendNotification(CN.FIGHT_SKIP_FIGHT, {
							ignoreResult: !0
						}), s = 500), egret.setTimeout(function() {
							c.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
								type: t.battleType,
								ignoreStringWay: !0,
								isPassive: !0,
								preloadCB: function() {
									n.latestFightStatis = t, i.respBattleResultP(t)
								},
								doneCB: function() {
									c.AppFacade.getInstance().sendNotification(CN.ZZQ_STATUS_FIGHT_END, {
										uuid: t.battleInfo.uuid
									})
								}
							})
						}, this, s)
					}
				}
			}, t
		}(c.ProcessorBase);
		__reflect(a.prototype, "BattleResultP");
		var r = function(e) {
			function t() {
				return e.call(this, "wchess.WchessTaskP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				for (var i in t.allTask)
					if (t.allTask[i].isTarget) {
						c.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_REWARDCUP_INFO, {
							info: t
						});
						break
					}
			}, t
		}(c.ProcessorBase);
		c.WchessTaskP = r, __reflect(r.prototype, "game.WchessTaskP");
		var s = function(e) {
			function t() {
				return e.call(this, "wchess.AchieveLevelP", t) || this
			}
			return __extends(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N).rewardLevel = t.level, NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
			}, t
		}(c.ProcessorBase);
		c.AchieveLevelP = s, __reflect(s.prototype, "game.AchieveLevelP")
	}(game || (game = {})),
	function(r) {
		var e = function(t) {
			function i() {
				var e = t.call(this, i.N) || this;
				return e.simFight = !1, e.oldlevel = 1, e.debug_slowFight = !1, e.effectList1 = [], e.effectList2 = [], e.rewardGetList = [], e.rewardLevel = 0, e.CONFIG = {
					OPPERA_TM: 0,
					BATTLE_TM: 0
				}, e.playerPy = r.AppFacade.getInstance().retrieveProxy(r.PlayerPy.N), e.playerProxy = r.AppFacade.getInstance().retrieveProxy(r.PlayerPy.N), e.oldlevel = 1, NoticeManager.registerCB(NT.ZZQ_ACHIEVELEVEL, e.checkAchieveLevel, e), e
			}
			return __extends(i, t), i.prototype.checkAchieveLevel = function() {
				for (var e = this.rewardLevel, t = r.Config.chessAchieveLevel(), i = [], n = 1; n <= e; n++)
					if (this.playerProxy.playerInfoVO.level >= t[n].playerLevel) {
						var o = {
							level: n,
							isGet: !1
						};
						i.push(o)
					}
				for (var a in i)
					for (var n in this.rewardGetList) i[a].level == this.rewardGetList[n] && (i[a].isGet = !0);
				for (var a in i)
					if (!i[a].isGet) return !0;
				return !1
			}, i.prototype.amILeader = function() {
				return !this.curRoomInfo || this.curRoomInfo.leader == this.curRoomInfo.uuid
			}, i.prototype.isIdle = function() {
				return !this.curRoomInfo || !this.curRoomInfo.id
			}, i.prototype.isCanJoinTeam = function() {
				return !(1 < this.curRoomInfo.players.length)
			}, i.prototype.getPlayerInfoByUuid = function(e) {
				for (var t = 0, i = this.curRoomInfo.players; t < i.length; t++) {
					var n = i[t];
					if (n.uuid == e) return n
				}
			}, Object.defineProperty(i.prototype, "curPlayer", {
				get: function() {
					for (var e = 0, t = this.curRoomInfo.players; e < t.length; e++) {
						var i = t[e];
						if (i.uuid == this.curRoomInfo.uuid) return i
					}
				},
				enumerable: !0,
				configurable: !0
			}), i.prototype.updateBarrage = function(e) {
				this.barrageInfo || (this.barrageInfo = new Array), r.BaseVO.updateArr(e, this.barrageInfo, r.BarrageInfoVO), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_BARRAGE)
			}, i.prototype.updateBattleDetail = function(e) {
				this.battleDetailBarrageInfo || (this.battleDetailBarrageInfo = new Array), r.BaseVO.updateArr(e, this.battleDetailBarrageInfo, r.BattleDetailInfoVO), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_BARRAGE)
			}, i.prototype.updateZzqRoomInfo = function(e, t) {
				void 0 === t && (t = !1), this.curRoomInfo || (this.curRoomInfo = new r.SWchessRoomVO), this.curRoomInfo.update(e), t && (this.curRoomInfo.id = void 0), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_ROOM_INFO)
			}, i.prototype.updateCurPlayer = function(e) {
				this.curPlayer.update(e), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_CUR_PLAYER)
			}, i.prototype.updateHeroList = function(e, t) {
				var o = this;
				void 0 === t && (t = !0), this.curHeroList || (this.curHeroList = new Array), t ? r.BaseVO.updateArr(e, this.curHeroList, r.SWchessHeroVO) : Array.isArray(e) && e.forEach(function(e) {
					for (var t = 0, i = o.curHeroList; t < i.length; t++) {
						var n = i[t];
						if (n.uuid == e.uuid) {
							n.update(e);
							break
						}
					}
				}), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_HERO_INFO)
			}, i.prototype.updateCards = function(e) {
				if (this.curCards || (this.curCards = new Array), Array.isArray(e)) {
					for (var t = 0, i = 0, n = e; i < n.length; i++) {
						var o = n[i];
						this.curCards[t] ? this.curCards[t].update(o) : this.curCards.push(new r.SWchessHeroVO(o)), t++
					}
					this.curCards.splice(t)
				}
				r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_CARD_INFO)
			}, i.prototype.updateRewardReceivedList = function(e) {
				for (var t = 0, i = 0, n = e; i < n.length; i++) {
					var o = n[i];
					this.rewardGetList[t] || this.rewardGetList.push(o.level), t++
				}
				this.rewardGetList.splice(t), this.rewardGetList.sort(function(e, t) {
					return t < e ? 1 : -1
				}), r.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_REWARD_INFO), NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
			}, i.prototype.GetWchessRoomInfo = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "GetWchessRoomInfo", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.CreateRoom = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "CreateRoom", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.JoinRoom = function(e, t) {
				var i = this;
				Utils.Socket.send("wchess", "JoinRoom", {
					id: e
				}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.StartMatch = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "StartMatch", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.CancelMatch = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "CancelMatch", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.LeaveRoom = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "LeaveRoom", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info, !0), t && t()
				})
			}, i.prototype.GetHeroList = function(t) {
				var i = this;
				this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "GetHeroList", {}).then(function(e) {
					i.updateHeroList(e.heroList), i.updateCards(e.cards), t && t()
				})
			}, i.prototype.GetCardList = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "GetCardList", {}).then(function(e) {
					i.updateCards(e.cards), t && t()
				})
			}, i.prototype.ChangeCard = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "ChangeCard", {}).then(function(e) {
					i.updateCurPlayer(e.player), i.updateCards(e.cards), t && t()
				})
			}, i.prototype.BuyCard = function(e, t) {
				var i = this;
				for (var n in this.effectList1 = [], this.effectList2 = [], this.curHeroList) {
					if (this.curHeroList[n].code == e.code) {
						var o = {
							pos: this.curHeroList[n].pos,
							race: this.curHeroList[n].config.race
						};
						this.effectList1.push(o)
					}
					if (this.curHeroList[n].code == e.nextCode) {
						var a = {
							pos: this.curHeroList[n].pos,
							race: this.curHeroList[n].config.race
						};
						this.effectList2.push(a)
					}
				}
				Utils.Socket.send("wchess", "BuyCard", {
					pos: e.pos
				}).then(function(e) {
					i.updateCurPlayer(e.player), i.updateHeroList(e.heroList), i.updateCards(e.cards), t && t()
				})
			}, i.prototype.ChangeFormation = function(e, t, i) {
				var n = this;
				e != t && (this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "ChangeFormation", {
					oPos: Number(e),
					tPos: Number(t)
				}).then(function(e) {
					n.updateHeroList(e.heroList, !1), i && i()
				}))
			}, i.prototype.SellCard = function(e, t, i) {
				var n = this;
				this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "SellCard", {
					pos: e,
					uuid: t
				}).then(function(e) {
					n.updateHeroList(e.heroList), n.updateCurPlayer(e.player), i && i()
				})
			}, i.prototype.LockAutoRefreshCards = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "LockAutoRefreshCards", {}).then(function(e) {
					i.updateCurPlayer(e.player), t && t()
				})
			}, i.prototype.BuyExp = function(e, t) {
				var i = this;
				void 0 === e && (e = 1), Utils.Socket.send("wchess", "BuyExp", {
					id: e
				}).then(function(e) {
					i.updateCurPlayer(e.player), i.oldlevel != e.player.level && t && t(e), i.oldlevel = e.player.level
				})
			}, i.prototype.GetStarLevelReward = function(e) {
				var t = this;
				Utils.Socket.send("wchess", "GetStarLevelReward", {
					starLevel: e
				}).then(function(e) {
					t.updateZzqRoomInfo(e.info), r.GameMVC.backpackPy.handleClientReward(e.clientReward)
				})
			}, i.prototype.BattlePlayerBack = function(e, t) {
				r.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
					type: EBattleType.EBattleTypeWchess,
					pb1: "wchess",
					pb2: "BattlePlayerBack",
					params: {
						uuid: e
					},
					ignoreStringWay: !0
				})
			}, i.prototype.SPlayerCount = function(t) {
				Utils.Socket.send("wchess", "GetWchessPlayerCount", {}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.GetReservedPlayerCount = function(t) {
				Utils.Socket.send("wchess", "GetReservedPlayerCount", {}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.GetWchessHeroCount = function(t) {
				Utils.Socket.send("wchess", "GetWchessHeroCount", {}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.GetWchessResultLog = function(e, t) {
				Utils.Socket.send("wchess", "GetWchessResultLog", {
					resultUuid: e
				}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.ExitChess = function(t) {
				Utils.Socket.send("wchess", "ExitChess", {}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.EndMatch = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "EndMatch", {}).then(function(e) {
					i.updateZzqRoomInfo(e.info), t && t()
				})
			}, i.prototype.GetAchieveLevel = function(t) {
				var i = this;
				Utils.Socket.send("wchess", "GetAchieveLevel", {}).then(function(e) {
					i.rewardLevel = e.level, i.updateRewardReceivedList(e.received), t && t(e)
				})
			}, i.prototype.GetAchieveTaskProgress = function(t) {
				Utils.Socket.send("wchess", "GetAchieveTaskProgress", {}).then(function(e) {
					t && t(e)
				})
			}, i.prototype.GetAchieveRewards = function(e, t) {
				var i = this;
				Utils.Socket.send("wchess", "GetAchieveRewards", {
					level: e
				}).then(function(e) {
					i.GetAchieveLevel(), t && t(e)
				})
			}, i.N = "ZzqProxy", i
		}(BaseProxy);
		r.ZzqPy = e, __reflect(e.prototype, "game.ZzqPy")
	}(game || (game = {})),
	function(u) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.doneCB = void 0, e.skinName = "ZzqStatisticsSkin", e.py = u.AppFacade.getInstance().retrieveProxy(u.ZzqPy.N), e
			}
			return __extends(e, t), e.prototype.perClose = function() {
				this.doneCB && this.doneCB()
			}, e.prototype.childrenCreated = function() {
				var e = this;
				t.prototype.childrenCreated.call(this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.hide()
				}, this), this.list_my.itemRenderer = i, this.list_ennemy.itemRenderer = i, this.initBtn()
			}, e.prototype.updateView = function(e) {
				this.result = e.resultData, this.doneCB = e.doneCB, this.updateInfo()
			}, e.prototype.updateInfo = function() {
				for (var h = this.result.entityResults, e = this.py.curPlayer.uuid, t = void 0, i = 0, n = this.result.teams; i < n.length; i++) {
					if ((s = n[i]).playerId != e) {
						t = s;
						break
					}
				}
				this.lb_name_1.text = this.py.curPlayer.name, this.lb_name_2.text = t.name, this.cu_head_1.updateData({
					vo: this.py.curPlayer
				}), this.cu_head_2.updateData({
					vo: t
				}), this.result.result == EBattleResult.EBattleResultWin ? (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shengli), DragonBoneTools.create("common_shengli_2", function(e) {
					e.x = this.gp_root.width / 2, e.y = 50, e.animation.play(), this.gp_root.addChildAt(e, 0)
				}, this)) : (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shibai), DragonBoneTools.create("common_zhanbai_2", function(e) {
					e.x = this.gp_root.width / 2, e.y = 50, e.animation.play(), this.gp_root.addChildAt(e, 0)
				}, this)), this.data = {}, this.data.self = [], this.data.enemy = [];
				var p = -1,
					d = -1;
				for (var o in h) {
					var a = h[o];
					p = p > a.totalHurt ? p : a.totalHurt, d = d > a.totalCure ? d : a.totalCure
				}
				for (var r in this.result.teams) {
					var s, c = function(e, t, i) {
						for (var n in e.entities) {
							var o = e.entities[n];
							for (var a in t.push({
									isMagical: !1,
									code: o.code,
									entityId: o.entityId,
									isSelf: i,
									maxLife: o.life
								}), h) {
								(l = h[a]).entityId == t[t.length - 1].entityId && (t[t.length - 1].totalHurt = l.totalHurt, t[t.length - 1].totalCure = l.totalCure, t[t.length - 1].life = l.life, p = p > l.totalHurt ? p : l.totalHurt, d = d > l.totalCure ? d : l.totalCure)
							}
						}
						if (e.magical && e.magical.entityId) {
							var r = e.magical.code,
								s = u.Config.magicalUpgradeConfig(r);
							if (s[0] && s[0].costs) {
								var c = JSON.parse(s[0].costs)[0][1];
								for (var a in t.push({
										isMagical: !0,
										code: c,
										entityId: e.magical.entityId,
										isSelf: i,
										maxLife: 0
									}), h) {
									var l;
									(l = h[a]).entityId == t[t.length - 1].entityId && (t[t.length - 1].totalHurt = l.totalHurt, t[t.length - 1].totalCure = l.totalCure)
								}
							}
						}
						t.forEach(function(e) {
							e.maxHurt = p, e.maxCure = d
						}), t.sort(function(e, t) {
							return e.isMagical ? 1 : t.isMagical ? -1 : e.entityId - t.entityId
						})
					};
					(s = this.result.teams[r]).playerId == e ? c(s, this.data.self, !0) : c(s, this.data.enemy, !1)
				}
				this.list_my.dataProvider = new eui.ArrayCollection(this.data.self), this.list_ennemy.dataProvider = new eui.ArrayCollection(this.data.enemy)
			}, e.prototype.ChangeContent = function(e) {
				var t = this.list_my.$children;
				for (var i in t) {
					(n = t[i]) && n.changeState(e)
				}
				t = this.list_ennemy.$children;
				for (var i in t) {
					var n;
					(n = t[i]) && n.changeState(e)
				}
			}, e.prototype.initBtn = function() {
				var e = this;
				this.btn_hurt.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.ChangeContent(u.FightStatistics.LIST_TYPE.HURT), e.img_cure_bg.source = "common_img_dikuang03_png", e.img_hurt_bg.source = "common_img_dikuang01_png", e.img_result_bg.source = "common_img_dikuang03_png", e.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu1", e.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", e.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
				}, this), this.btn_cure.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.ChangeContent(u.FightStatistics.LIST_TYPE.CURE), e.img_cure_bg.source = "common_img_dikuang01_png", e.img_hurt_bg.source = "common_img_dikuang03_png", e.img_result_bg.source = "common_img_dikuang03_png", e.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", e.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao1", e.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
				}, this), this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.ChangeContent(u.FightStatistics.LIST_TYPE.RESULT), e.img_cure_bg.source = "common_img_dikuang03_png", e.img_hurt_bg.source = "common_img_dikuang03_png", e.img_result_bg.source = "common_img_dikuang01_png", e.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", e.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", e.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo1"
				}, this)
			}, e.LIST_TYPE = {
				HURT: 0,
				CURE: 1
			}, e
		}(BasePanel);
		u.ZzqStatistics = e, __reflect(e.prototype, "game.ZzqStatistics");
		var i = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "FightStatisticsItemSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				this.baseitem = customui.BaseItemForChessFactory.create(), this.gp_head.addChild(this.baseitem), this.pb.slideDuration = 0, this.pb.labelDisplay.visible = !1
			}, e.prototype.dataChanged = function() {
				t.prototype.dataChanged.call(this);
				var e = this.data.code;
				this.baseitem.updateData({
					code: e
				}), this.baseitem.scaleX = this.baseitem.scaleY = .6, this.baseitem.touchEnabled = this.baseitem.touchChildren = !1, this.changeState(u.FightStatistics.LIST_TYPE.HURT), this.data.isSelf || (this.scaleX = -1, this.gp_head.scaleX = -1, this.bm_num.scaleX = -1)
			}, e.prototype.changeState = function(e) {
				this.pb.value = 0, e == u.FightStatistics.LIST_TYPE.HURT ? (this.pb.maximum = this.data.maxHurt, this.pb.value = this.data.totalHurt, this.bm_num.text = this.data.totalHurt) : e == u.FightStatistics.LIST_TYPE.RESULT ? (this.pb.maximum = this.data.maxLife, this.pb.value = this.data.life, this.bm_num.text = this.data.life) : (this.pb.maximum = this.data.maxCure, this.pb.value = this.data.totalCure, this.bm_num.text = this.data.totalCure)
			}, e
		}(eui.ItemRenderer);
		__reflect(i.prototype, "FightStatisticsItem")
	}(game || (game = {})),
	function(e) {
		var t = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqWinEffectSkin", e.gp_root.visible = !1, e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.updateEffectInfo = function(e) {
				var t = "common_zzqwljs";
				this.img_type.source = "zzq_txt_wulianjuesheng_png", this.lb_name.text = e.name;
				var i = 1580;
				8 == e.winNum ? (t = "common_zzqbljs", this.img_type.source = "zzq_txt_balianjueshi_png", i = 1540) : 10 == e.winNum && (t = "common_zzqslcf", this.img_type.source = "zzq_txt_shilianchaofan_png", i = 1540), this.gp_root.visible = !0, this.img_type.visible = !0, this.gp_root.x = 350, this.gp_root.y = 70 * e.number, egret.Tween.get(this.gp_root).to({
					x: -70,
					y: this.gp_root.y
				}, 500).call(function() {
					var e = this;
					this.img_type.visible = !1, DragonBoneTools.playOnce({
						effectName: t,
						parent: this.gp_effect,
						x: this.gp_effect.width / 2,
						y: this.gp_effect.height / 2,
						scaleX: 1,
						scaleY: 1,
						keep: !1,
						loop: !1,
						doneCB: function() {
							e.img_type.visible = !0, egret.Tween.get(e.gp_root).wait(i).to({
								x: -700,
								y: e.gp_root.y
							}, 800).call(function() {
								this.gp_root.visible = !1
							}, e)
						}
					})
				}, this)
			}, e
		}(eui.Component);
		e.ZzqWinEffect = t, __reflect(t.prototype, "customui.ZzqWinEffect", ["eui.UIComponent", "egret.DisplayObject"])
	}(customui || (customui = {})),
	function(i) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.proxy = i.AppFacade.getInstance().retrieveProxy(i.ZzqPy.N), e.skinName = "GuildWarBattleRecordSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				var e = this;
				t.prototype.childrenCreated.call(this), this.rootPanel.blb_title.text = "战斗记录", this.rootPanel.onCloseCB = function() {
					e.hide()
				}, this.initTabbar(), this.initList()
			}, e.prototype.initList = function() {
				UIActionManager.hideScrollerBar(this.scl_list), this.list_item.itemRenderer = n
			}, e.prototype.initTabbar = function() {
				this.tabbar.parent.removeChild(this.tabbar)
			}, e.prototype.updateView = function(e) {
				for (var t = this, i = [], n = 0, o = this.proxy.curRoomInfo.players; n < o.length; n++)
					for (var a = o[n], r = 0, s = a.battleRecordList; r < s.length; r++) {
						var c = s[r];
						c.attackUuid == a.uuid && 0 < a.life && i.push({
							self: {
								baseInfo: this.proxy.getPlayerInfoByUuid(c.attackUuid)
							},
							opp: {
								baseInfo: this.proxy.getPlayerInfoByUuid(c.defenceUuid)
							},
							result: c.win,
							battleUuid: c.uuid,
							cb: function() {
								t.hide()
							}
						})
					}
				i.sort(function(e) {
					return e.opp.baseInfo.uuid == t.proxy.curRoomInfo.uuid ? -1 : 1
				}), i.sort(function(e) {
					return e.self.baseInfo.uuid == t.proxy.curRoomInfo.uuid ? -1 : 1
				}), this.list_item.dataProvider = new eui.ArrayCollection(i)
			}, e
		}(BasePanel);
		i.ZzqBattleRecordPanel = e, __reflect(e.prototype, "game.ZzqBattleRecordPanel");
		var n = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.fightPy = i.AppFacade.getInstance().retrieveProxy(i.ZzqPy.N), e.skinName = "GuildWarBattleRecordPanel_RecordItem", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this), this.btn_review.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					this.data && this.data.cb && this.data.cb(), this.fightPy.BattlePlayerBack(this.data.battleUuid)
				}, this), this.playerHead_self = customui.PlayerHeadFactory.create(), this.gp_playerHead_self.addChild(this.playerHead_self), this.playerHead_opp = customui.PlayerHeadFactory.create(), this.gp_playerHead_opp.addChild(this.playerHead_opp)
			}, e.prototype.dataChanged = function() {
				this.lb_self.text = this.data.self.baseInfo.name, this.lb_opp.text = this.data.opp.baseInfo.name, this.playerHead_self.x = 0, this.playerHead_self.y = 0, this.playerHead_self.updateData({
					vo: this.data.self.baseInfo
				}), this.playerHead_opp.x = 0, this.playerHead_opp.y = 0, this.playerHead_opp.updateData({
					vo: this.data.opp.baseInfo
				}), this.img_bg.source = this.data.result == EBattleResult.EBattleResultWin ? "gonghui_img_shengfudi_png" : "gonghui_img_shengfudi2_png"
			}, e
		}(eui.ItemRenderer);
		__reflect(n.prototype, "ZzqBattleRecordPanel_RecordItem")
	}(game || (game = {})),
	function(e) {
		var t = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqChessCardSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.addTapEvent = function(e) {
				this.tapEvent = e, this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
			}, e.prototype.onTapEvent = function() {
				this.tapEvent && this.tapEvent(this)
			}, e.prototype.updateData = function(e, t) {
				var i = game.Config.chessHero()[e.code];
				this.code = e.code, this.nextCode = i.nextCode, this.race = i.race, this.needMoney = i.costNum, this.color = i.color, this.cu_model.update({
					code: e.code,
					model: i.model,
					isStatic: !0
				}), this.pos = e.pos, this.lb_name.text = i.name, this.img_profession.source = SubProfessionConfig[i.subProfession].icon, this.img_race.source = HeroRaceConfig[i.race].raceIcon, this.lb_name.textColor = game.GeneralConfig.getColorByColor(i.color), this.blb_money.text = "x" + i.costNum, this.blb_nomoney.text = "x" + i.costNum, this.updateCardColor(t)
			}, e.prototype.updateCardColor = function(e) {
				this.blb_money.visible = e >= this.needMoney, this.blb_nomoney.visible = !this.blb_money.visible
			}, e
		}(eui.Component);
		e.ZzqChessCard = t, __reflect(t.prototype, "customui.ZzqChessCard", ["eui.UIComponent", "egret.DisplayObject"])
	}(customui || (customui = {})),
	function(u) {
		var e = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqChessCardDetailSkin", e.proxy = u.AppFacade.getInstance().retrieveProxy(u.ZzqPy.N), e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				var e = this;
				t.prototype.childrenCreated.call(this), this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
					e.vo && e.proxy.SellCard(e.vo.pos, e.vo.uuid, function() {
						e.hide()
					})
				}, this)
			}, e.prototype.updateView = function(e, t) {
				if (e && e.vo) {
					this.vo = e.vo;
					var i = u.Config.chessHero()[this.vo.code];
					this.lb_name.text = i.name, this.img_profession.source = SubProfessionConfig[i.subProfession].icon, this.img_race.source = HeroRaceConfig[i.race].raceIcon, this.blb_money.text = "x" + i.costNum, this.blb_money_sell.text = "x" + i.decomposeNum, this.gp_head.removeChildren();
					var n = customui.BaseItemForChessFactory.create({
						vo: this.vo
					});
					this.gp_head.addChild(n);
					var o = [],
						a = JSON.parse(i.baseAttr);
					o = u.GeneralConfig.AttrAddAttr(o, a), this.blb_attack.text = u.GeneralConfig.getAttrValue(o[0][1]), this.blb_HP.text = u.GeneralConfig.getAttrValue(o[1][1]), this.blb_defense.text = u.GeneralConfig.getAttrValue(o[2][1]), this.blb_speed.text = u.GeneralConfig.getAttrValue(o[3][1]), this.lb_heroInfo.text = i.desc;
					var r = [];
					0 != i.posSkill1 && r.push(i.posSkill1), 0 != i.posSkill2 && r.push(i.posSkill2), 0 != i.posSkill3 && r.push(i.posSkill3), 0 != i.actSkill && r.push(i.actSkill);
					var s = [this.cu_skill0, this.cu_skill1, this.cu_skill2, this.cu_skill3],
						c = [this.lb_skillname0, this.lb_skillname1, this.lb_skillname2, this.lb_skillname3],
						l = [this.lb_skillshow0, this.lb_skillshow1, this.lb_skillshow2, this.lb_skillshow3],
						h = [this.img_type0, this.img_type1, this.img_type2, this.img_type3],
						p = [this.gp_skill0, this.gp_skill1, this.gp_skill2, this.gp_skill3];
					for (var d in s) r[d] ? (p[d].visible = !0, this.updateSkillInfo(r[d], s[d], c[d], l[d], h[d], p[d])) : p[d].visible = !1;
					this.btn_sell.visible = !e.isShowBtn
				} else this.hide()
			}, e.prototype.updateSkillInfo = function(e, t, i, n, o, a) {
				var r = u.Config.skillBaseConfig()[e];
				i.text = r.name, n.text = r.desc, 1 == r.action ? o.source = "zzq_icon_pu_png" : 2 == r.action ? o.source = "zzq_icon_zhu_png" : 3 == r.action && (o.source = "zzq_icon_bei_png"), t.updateItem({
					code: e,
					notNeedLevel: !0
				})
			}, e
		}(BasePanel);
		u.ZzqChessCardDetail = e, __reflect(e.prototype, "game.ZzqChessCardDetail")
	}(game || (game = {})),
	function(t) {
		var e = function(i) {
			function e(e) {
				var t = i.call(this) || this;
				return t.RANK_IMAGE = {
					"青铜": "paiweisai_txt_qingtong",
					"白银": "paiweisai_txt_baiyin",
					"黄金": "paiweisai_txt_huangjin",
					"铂金": "paiweisai_txt_bojin",
					"钻石": "paiweisai_txt_zuanshi",
					"星耀": "paiweisai_txt_xingyao",
					"王者": "paiweisai_txt_wangzhe"
				}, t.skinName = "ZzqChessPlayerHeadSkin", t.vo = e, t.myUuid = e.myUuid, t
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				i.prototype.childrenCreated.call(this), this.originX = this.gp_root.x, this.img_hurt.visible = !1, this.cu_playerHead = t.ZzqPlayerHeadFactory.create(), this.cu_playerHead.x = this.cu_playerHead.y = 1.34, this.cu_playerHead.width = this.cu_playerHead.height = 80, this.cu_playerHead, this.gp_root.addChild(this.cu_playerHead), this.vo && (this.updateData(this.vo), this.updateRankInfo())
			}, e.prototype.addTapEvent = function(e) {
				this.tapEvent = e, this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
			}, e.prototype.onTapEvent = function() {
				this.tapEvent && this.tapEvent(this)
			}, e.prototype.updateRankInfo = function() {
				var e, t = game.Config.chessStarLevel(),
					i = this.vo.grade;
				for (var n in t) {
					var o = t[n];
					if (!(i >= o.requestGrade)) break;
					e = o
				}
				if (e) {
					for (var a in this.img_rank_0.source = ResourceUtils.png(e.icon), this.RANK_IMAGE)
						if (-1 != e.name.search(a)) {
							this.img_rank_1.source = ResourceUtils.png(this.RANK_IMAGE[a]);
							break
						}
					0 != e.num ? (this.img_rank_2.visible = !0, this.img_rank_2.source = "paiweisai_img_" + e.num + "_png") : this.img_rank_2.visible = !1
				}
			}, e.prototype.updateData = function(e) {
				if (this.cu_playerHead) {
					if (this.vo = e && e.vo, this.cu_playerHead.updateData({
							vo: this.vo
						}), !this.vo) return this.lb_name.text = "", void(this.img_rank_1.source = this.img_rank_2.source = "");
					if (this.img_my.visible = this.vo.uuid === this.myUuid, this.lb_name.text = this.vo.name, this.blb_level.text = this.vo.level + "", this.vo.life < this.pb_hp.value) {
						if (this.vo.life <= 0 && this.pb_hp.value <= 0) return;
						DragonBoneTools.playOnce({
							effectName: "common_zhuahen",
							parent: this.gp_daoguang,
							x: this.gp_daoguang.width / 2,
							y: this.gp_daoguang.height / 2,
							scaleX: 1,
							scaleY: 1,
							keep: !1,
							loop: !1,
							doneCB: function() {}
						});
						var t = this.pb_hp.value - this.vo.life;
						egret.Tween.get(this.blb_blood).call(function() {
							this.blb_blood.text = "-" + t, this.blb_blood.visible = !0
						}, this).wait(2e3).call(function() {
							this.blb_blood.visible = !1
						}, this)
					}
					this.pb_hp.value = this.vo.life
				}
			}, e
		}(eui.Component);
		t.ZzqChessPlayerHead = e, __reflect(e.prototype, "customui.ZzqChessPlayerHead", ["eui.UIComponent", "egret.DisplayObject"])
	}(customui || (customui = {})),
	function(e) {
		var t = function() {
			function e() {}
			return e.create = function(e) {
				var t = Utils.ObjectPoolMgr.pop("customui.ZzqPlayerHead", e);
				return t.once(egret.Event.REMOVED_FROM_STAGE, function() {
					Utils.ObjectPoolMgr.push(t)
				}, this), t
			}, e.clear = function() {
				Utils.ObjectPoolMgr.clearClass("customui.ZzqPlayerHead")
			}, e
		}();
		e.ZzqPlayerHeadFactory = t, __reflect(t.prototype, "customui.ZzqPlayerHeadFactory");
		var i = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.skinName = "ZzqPlayerHeadSkin", e
			}
			return __extends(e, t), e.prototype.childrenCreated = function() {
				t.prototype.childrenCreated.call(this)
			}, e.prototype.addTapEvent = function(e) {
				this.tapEvent = e
			}, e.prototype.onTapEvent = function() {
				if (this.tapEvent) this.tapEvent();
				else if (this.img_canInvite.visible) {
					var n = game.AppFacade.getInstance().retrieveProxy(game.FriendPy.N),
						e = game.AppFacade.getInstance().retrieveProxy(game.ZzqPy.N),
						o = game.Config.broadcastConfig()[40].content,
						t = game.AppFacade.getInstance().retrieveProxy(game.PlayerPy.N),
						a = [
							[2, t.playerInfoVO.name, t.playerInfoVO.playerId, EEntityType.EEntityTypePlayer],
							[1, "<<点击加入", e.curRoomInfo.id, MODULE.Wchess]
						];
					n.getFriendList(function() {
						PopUpManager.addPopUp({
							obj: new game.InviteFriendView({
								moduleId: MODULE.Wchess,
								tabbarType: 11,
								inviteCallback: function(e, t) {
									var i = game.AppFacade.getInstance().retrieveProxy(game.MainPy.N);
									i.addPrivatePlayer(e), i.SendMessage(EChatChannelType.EChatChannelTypePrivate, o, e, function() {
										n.addInviteHistory(MODULE.Wchess, e), t && t()
									}, EChatSendCheckType.None, JSON.stringify(a), !0)
								}
							})
						})
					})
				}
			}, e.prototype.updateData = function(e) {
				if (this.vo = e && e.vo, this.vo) {
					if ("" != this.vo.avatar) this.img_icon.visible = !0, this.img_icon.source = ResourceUtils.png(this.vo.avatar);
					else {
						var t = JSON.parse(game.Config.constConfig().DefaultAvatar.constValue)[0];
						this.img_icon.visible = !0, this.img_icon.source = t + "_png"
					}
					this.img_empty.visible = !1
				} else this.img_icon.visible = !1, this.img_empty.visible = !0;
				this.img_canInvite.visible = e && e.emptyCanInvite, e && this.addTapEvent(e.tapEvent)
			}, e.prototype.switchCanInviteStatus = function(e) {
				this.vo ? this.img_canInvite.visible = !1 : this.img_canInvite.visible = e
			}, e.prototype.reset = function() {
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this), this.tapEvent = void 0, this.scaleX = this.scaleY = 1, this.width = this.height = void 0, this.x = this.y = 0, this.img_icon.source = "", this.horizontalCenter = this.verticalCenter = void 0, this.img_empty.visible = this.img_canInvite.visible = !1, UIActionManager.setAbsGrey(this, !1)
			}, e.prototype.onOPReset = function() {
				this.reset()
			}, e.prototype.onOPComeBack = function(e, t) {
				e && this.updateData(e), this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
			}, e.prototype.onOPClean = function() {}, e.prototype.onOPCheck = function(e) {
				egret.log("alive")
			}, e
		}(eui.Component);
		e.ZzqPlayerHead = i, __reflect(i.prototype, "customui.ZzqPlayerHead", ["eui.UIComponent", "egret.DisplayObject", "IObjectPoolInterface"])
	}(customui || (customui = {})),
	function(l) {
		var e = function(i) {
			function e() {
				var e = i.call(this) || this;
				return e.skinName = "ZzqPlayerInfoSkin", e.py = l.AppFacade.getInstance().retrieveProxy(l.ZzqPy.N), e
			}
			return __extends(e, i), e.prototype.childrenCreated = function() {
				if (i.prototype.childrenCreated.call(this), !this.Gruop_pkm.$children.length)
					for (var e = 1; e <= ZZQ_CONST.SHANGZHEN_NUM; e++) {
						var t = customui.BaseItemForChessFactory.create();
						t.scaleX = t.scaleY = .6, t.touchEnabled = t.touchChildren = !1, e < 4 ? (t.x = 70 * (e - 1) + 65, t.y = 0) : (t.x = 70 * (e - 4) + 65, t.y = 70), this.Gruop_pkm.addChild(t)
					}
			}, e.prototype.updatePlayerInfo = function() {
				this.lb_name.text = this.vo.name, this.lb_id.text = "ID：" + this.vo.uuid, this.blb_money.text = "x" + this.vo.gold;
				for (var e = l.Config.chessLevelHero(this.vo.level), t = JSON.parse(e.stationList), i = JSON.parse(this.vo.stationList), n = 1; n <= ZZQ_CONST.SHANGZHEN_NUM; n++) {
					var o = this.Gruop_pkm.getChildAt(n - 1);
					if (t[n - 1]) {
						for (var a = !1, r = 0, s = i; r < s.length; r++) {
							var c = s[r];
							if (c[0] == n) {
								o.updateData({
									code: c[1]
								}), a = !0;
								break
							}
						}
						a || o.resetFixedStyle()
					} else o.resetFixedStyle(), o.img_icon.source = "common_img_xiaosuo_png"
				}
				this.cu_ph.updateData({
					vo: this.vo
				})
			}, e.prototype.updateView = function(e) {
				this.vo = e.vo, this.vo && this.updatePlayerInfo()
			}, e.prototype.perClose = function() {}, e
		}(BasePanel);
		l.ZzqPlayerInfo = e, __reflect(e.prototype, "game.ZzqPlayerInfo")
	}(game || (game = {}));