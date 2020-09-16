var game = window.game;
var customui = window.customui;
var customui, game, __extends = this && this.__extends || function () {
        var o = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (t, e) {
            function i() {
                this.constructor = t
            }
            o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
    }(),
    __awaiter = this && this.__awaiter || function (s, a, r, h) {
        return new(r = r || Promise)(function (t, e) {
            function i(t) {
                try {
                    n(h.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(t) {
                try {
                    n(h.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function n(e) {
                e.done ? t(e.value) : new r(function (t) {
                    t(e.value)
                }).then(i, o)
            }
            n((h = h.apply(s, a || [])).next())
        })
    },
    __generator = this && this.__generator || function (i, o) {
        var n, s, a, t, r = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this
        }), t;

        function e(e) {
            return function (t) {
                return function (e) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (n = 1, s && (a = s[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(a = a.call(s, e[1])).done) return a;
                        switch (s = 0, a && (e = [0, a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e;
                                break;
                            case 4:
                                return r.label++, {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, s = e[1], e = [0];
                                continue;
                            case 7:
                                e = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = r.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                    r.label = e[1];
                                    break
                                }
                                if (6 === e[0] && r.label < a[1]) {
                                    r.label = a[1], a = e;
                                    break
                                }
                                if (a && r.label < a[2]) {
                                    r.label = a[2], r.ops.push(e);
                                    break
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        e = o.call(i, r)
                    } catch (t) {
                        e = [6, t], s = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    },
    DUNGEON_CONST = {
        NODE_GAP_H: 150,
        NODE_OFFSET_H: 45,
        NODE_GAP_V: 300,
        NODE_OFFSET_V: 70,
        PATH_DOT_GAP: 6,
        PATH_DOT_OFFSET_H: 5,
        PATH_DOT_OFFSET_V: 3
    };
! function (r) {
    var e, t = (e = BaseMediator, __extends(n, e), n.prototype.initSubView = function () {
        this.addSubView(n.SV.MAIN, r.DungeonMainView), this.addSubView(n.SV.MAP, r.DungeonMapView), this.addSubView(n.SV.CHOOSE, r.DungeonChoosePanel), this.addSubView(n.SV.CAMP, r.DungeonCampPanel), this.addSubView(n.SV.HERO_UP, r.DungeonHeroUpPanel), this.addSubView(n.SV.ROLL_DICE, r.DungeonRollDicePanel), this.addSubView(n.SV.RANDOM_EVENT, r.DungeonRandomEventPanel), this.addSubView(n.SV.BOX_EVENT, r.DungeonBoxPanel), this.addSubView(n.SV.GAME_END_RESULT, r.DungeonResultPanel), this.addSubView(n.SV.RANDOM_RESULT, r.DungeonRandomResultPanel)
    }, n.prototype.listNotificationInterests = function () {
        return [CN.HIDE_ALL_SUBVIEW, CN.LOGIN_FINAL_DONE, CN.GENERAL_PASS_DAY, CN.DUNGEON_UPDATE_HEROLIST, CN.DUNGEON_UPDATE_HEROLIST_EFFECT, CN.REWARD_CLOSE, CN.DUNGEON_RANDOM_EVENT_ADDLIFE, CN.DUNGEON_RANDOM_EVENT_MINUSLIFE, CN.DUNGEON_RANDOM_EVENT_MINUSGOLD, CN.DUNGEON_RANDOM_EVENT_GETHERO, CN.DUNGEON_RANDOM_EVENT_ADDGOLD, CN.DUNGEON_UPDATE_HEROLIST_EFFECT, CN.DUNGEON_UPDATE_ONE_HERO, CN.DUNGEON_RANDOM_EVENT_MINUSLIFE_TEXT, CN.DUNGEON_USE_ITEM, CN.DUNGEON_BOSS_CLEAR, CN.DUNGEON_NEW_CHAPTER]
    }, n.prototype.handleNotification = function (t) {
        var e = t.getBody();
        switch (t.getName()) {
            case CN.HIDE_ALL_SUBVIEW:
                this.hideAllSubView();
                break;
            case CN.LOGIN_FINAL_DONE:
                Utils.SDKMgr.getPerformConfig(38) && Utils.UnlockMgr.checkPass(MODULE.Vestage, !1).allow && (r.GameMVC.dungeonPy.GetVestageMapInfo(), r.GameMVC.dungeonPy.GetVestageHeroInfo());
                break;
            case CN.DUNGEON_UPDATE_HEROLIST:
                (i = this.getSubView(n.SV.MAP)) && i.updateHeroList();
                break;
            case CN.DUNGEON_UPDATE_HEROLIST_EFFECT:
                (i = this.getSubView(n.SV.MAP)) && (i.updateHeroList(), i.updateHeroEffect());
                break;
            case CN.DUNGEON_RANDOM_EVENT_ADDLIFE:
                (i = this.getSubView(n.SV.MAP)) && (i.updateHeroList(), i.updateHeroEffect(e));
                break;
            case CN.DUNGEON_RANDOM_EVENT_MINUSLIFE:
                (i = this.getSubView(n.SV.MAP)) && (i.updateHeroList(), i.updateHpEffect(e));
                break;
            case CN.DUNGEON_RANDOM_EVENT_MINUSGOLD:
                (i = this.getSubView(n.SV.MAP)) && i.minusMoneyEffect(e);
                break;
            case CN.DUNGEON_RANDOM_EVENT_ADDGOLD:
                (i = this.getSubView(n.SV.MAP)) && i.addMoneyEffect(e);
                break;
            case CN.DUNGEON_NEW_CHAPTER:
                this.updateView(n.SV.MAP, {
                    newChapter: !0
                });
                break;
            case CN.GENERAL_PASS_DAY:
                r.GameMVC.dungeonPy.baseInfo.records && Number(r.MainJumpConfig.getCurEvent()) == MODULE.Vestage && r.MainJumpConfig.jumpTo();
                break;
            case CN.REWARD_CLOSE:
                r.GameMVC.dungeonPy.hasNewHeroGet && (r.GameMVC.dungeonPy.hasNewHeroGet = !1, this.flyHero());
                break;
            case CN.DUNGEON_USE_ITEM:
                var i = this.getSubView(n.SV.MAP),
                    o = r.Config.vestageItemConfig()[e].type;
                o == VestagePropType.LifePotion ? i && i.updateAddHpEffect() : o == VestagePropType.ResuscitatedPotion && i && i.updateRebornEffect();
                break;
            case CN.DUNGEON_UPDATE_ONE_HERO:
                (i = this.getSubView(n.SV.MAP)) && i.updateOneHeroEffect(e);
                break;
            case CN.DUNGEON_RANDOM_EVENT_MINUSLIFE_TEXT:
                (i = this.getSubView(n.SV.MAP)) && i.updateHpCost(e)
        }
    }, n.prototype.flyBuff = function (a) {
        var e = this;
        return new Promise(function (s, t) {
            DragonBoneTools.create("common_zengyi02", function (t) {
                t.x = 375, t.y = 575 + Utils.DeviceUtils.statusBarHeight;
                var e = t.armature.getSlot("common_zengyi02-15"),
                    i = new eui.Image,
                    o = r.Config.vestageItemConfig()[a.code];
                RES.getResAsync(ResourceUtils.png(o.icon), function (t) {
                    i.source = t, i.anchorOffsetX = .5 * t.textureWidth, i.anchorOffsetY = .5 * t.textureHeight
                }, this), e.display = i, GameRootLayer.gameLayer().popMsgLayer.addChild(t);
                var n = new eui.Label;
                n.textAlign = egret.HorizontalAlign.CENTER, n.width = 400, n.size = 25, n.stroke = 2, n.text = o.desc, n.horizontalCenter = 15, n.y = t.y + 120, GameRootLayer.gameLayer().popMsgLayer.addChild(n), t.animation.play("common_zengyi02"), egret.setTimeout(function () {
                    n && n.parent && n.parent.contains(n) && n.parent.removeChild(n)
                }, this, 1e3), t.addEventListener(dragonBones.EventObject.COMPLETE, function () {
                    t && t.parent && t.parent.contains(t) && t.parent.removeChild(t), n && n.parent && n.parent.contains(n) && n.parent.removeChild(n), s()
                }, this)
            }, e)
        })
    }, n.prototype.flyHero = function () {
        var c = this;
        return new Promise(function (t, e) {
            var r = [GameRootLayer.gameLayer().popMsgLayer.width / 2, GameRootLayer.gameLayer().popMsgLayer.height / 2],
                h = [GameRootLayer.gameLayer().popMsgLayer.width - 20, GameRootLayer.gameLayer().popMsgLayer.height - 120];
            DragonBoneTools.create("common_equip_02", function (t) {
                var e = new egret.Point(r[0], r[1]),
                    i = new egret.Point(h[0], h[1]),
                    o = egret.Point.distance(e, i),
                    n = t.height,
                    s = void 0;
                n < o ? (s = egret.Point.interpolate(e, i, n / o), c.log("距离修正", n / o, s.x, s.y, i.x, i.y)) : s = i;
                var a = Utils.MathUtils.getDegByAB(s.y - r[1], s.x - r[0]);
                t.rotation = 90 + a, t.x = r[0], t.y = r[1], GameRootLayer.gameLayer().popMsgLayer.addChild(t), t.animation.play("common_equip_02", 0), egret.Tween.get(t).to({
                    x: s.x,
                    y: s.y
                }, 500).call(function () {
                    DragonBoneTools.playOnce({
                        x: h[0] - 105,
                        y: h[1] - 140,
                        effectName: "common_gonghuiqiandao_2",
                        parent: GameRootLayer.gameLayer().popMsgLayer
                    }), t && t.parent && t.parent.removeChild(t)
                }), egret.Point.release(s)
            })
        })
    }, n.N = "DungeonMed", n.SV = {
        MAIN: 1,
        MAP: 2,
        CHOOSE: 3,
        CAMP: 4,
        HERO_UP: 5,
        ROLL_DICE: 6,
        RANDOM_EVENT: 7,
        BOX_EVENT: 8,
        GAME_END_RESULT: 9,
        RANDOM_RESULT: 10
    }, n);

    function n(t) {
        return void 0 === t && (t = null), e.call(this, n.N, t) || this
    }
    r.DungeonMed = t
}(game = game || {}),
function (o) {
    var t = (e.registerAll = function () {
        (new n).register(), (new r).register(), (new l).register(), (new d).register(), (new f).register()
    }, e);

    function e() {}
    o.DungeonProcessor = t;
    var i, n = (i = o.ProcessorBase, __extends(s, i), s.prototype.execute = function (t) {
        var e = t.getBody(),
            i = o.AppFacade.getInstance().retrieveProxy(o.DungeonPy.N);
        i.heroDict && i.heroDict[e.hero.uuid] && i.heroDict[e.hero.uuid].life <= 0 && 0 < e.hero.life && 0 != e.hero.pos && o.AppFacade.getInstance().sendNotification(CN.DUNGEON_UPDATE_ONE_HERO, e.hero.pos), i.updateHeroListInfo([e.hero])
    }, s);

    function s() {
        return i.call(this, "vestageHero.SingleVestageHeroP", s) || this
    }
    o.SingleVestageHeroP = n;
    var a, r = (a = o.ProcessorBase, __extends(h, a), h.prototype.execute = function (t) {
        var e = t.getBody();
        o.GameMVC.dungeonPy.updateBaseInfo(e.base)
    }, h);

    function h() {
        return a.call(this, "vestage.VestageBaseInfoP", h) || this
    }
    o.VestageBaseInfoP = r;
    var c, l = (c = o.ProcessorBase, __extends(p, c), p.prototype.execute = function (t) {
        var e = t.getBody();
        o.GameMVC.dungeonPy.updateHeroListInfo(e.heroList)
    }, p);

    function p() {
        return c.call(this, "vestageHero.VestageHeroInfoP", p) || this
    }
    o.VestageHeroInfoP = l;
    var u, d = (u = o.ProcessorBase, __extends(g, u), g.prototype.execute = function (t) {
        var e = t.getBody();
        o.GameMVC.dungeonPy.updateHeroListInfo(e.heroList)
    }, g);

    function g() {
        return u.call(this, "vestageHero.VestagePutOnHeroP", g) || this
    }
    o.VestagePutOnHeroP = d;
    var _, f = (_ = o.ProcessorBase, __extends(m, _), m.prototype.execute = function (t) {
        var e = t.getBody();
        if (!e.isAdd) {
            var i = JSON.parse(e.modifyAttr)[VestageResultSubType.MinusLife];
            o.AppFacade.getInstance().sendNotification(CN.DUNGEON_RANDOM_EVENT_MINUSLIFE_TEXT, i)
        }
    }, m);

    function m() {
        return _.call(this, "vestageHero.VestageHeroStatusModifyP", m) || this
    }
    o.VestageHeroStatusModifyP = f
}(game = game || {}),
function (r) {
    var e, t = (e = BaseProxy, __extends(i, e), i.prototype.reset = function () {
        this.mapInfo = new r.DungeonMapVO, this.baseInfo = new r.DungeonBaseInfoVO, this.heroDict = {}, this.itemInfo = {}, this.buffInfo = new Array
    }, i.prototype.updateMapInfo = function (t) {
        this.mapInfo.update(t), r.AppFacade.getInstance().updateView(r.DungeonMed.N, r.DungeonMed.SV.MAP)
    }, i.prototype.updateItem = function (t) {
        var e = this;
        this.itemInfo = {}, t.forEach(function (t) {
            e.itemInfo[t.code] = t.num
        })
    }, i.prototype.getPotionNum = function () {
        var t = 0,
            e = r.GameMVC.dungeonPy.itemInfo,
            i = r.Config.vestageItemConfig();
        for (var o in e) {
            var n = e[o];
            i[o].useType === VestageItemUseType.Direct && (t += n)
        }
        return t
    }, i.prototype.updateBaseInfo = function (t, e) {
        void 0 === e && (e = !0), this.baseInfo.update(t), e && r.AppFacade.getInstance().updateView(r.DungeonMed.N, r.DungeonMed.SV.MAIN)
    }, i.prototype.updateBuffInfo = function (t, e) {
        var a = this;
        void 0 === e && (e = !1), this.buffInfo.forEach(function (t) {
            t.isExpire = !0
        }), t.forEach(function (t, e) {
            for (var i = !1, o = 0, n = a.buffInfo; o < n.length; o++) {
                var s = n[o];
                s.code == t.code && s.dt == t.dt && (i = !0, s.update(t))
            }
            i || a.buffInfo.push(new r.DungeonSBuffVO(t))
        }), this.buffInfo = this.buffInfo.filter(function (t) {
            return !t.isExpire
        }), this.buffInfo.sort(function (t, e) {
            return t.dt == e.dt ? t.code - e.code : t.dt - e.dt
        }), e && this.buffInfo.forEach(function (t) {
            t.iAmClean()
        })
    }, i.prototype.GetVestageMapInfo = function (e) {
        var i = this;
        Utils.Socket.send("vestage", "GetVestageMapInfo", {}).then(function (t) {
            i.updateBuffInfo(t.buffs, !0), i.updateMapInfo(t.info), i.updateBaseInfo(t.base), i.updateItem(t.items), e && e()
        })
    }, i.prototype.EnterPoint = function (e) {
        var i = this;
        Utils.Socket.send("vestage", "EnterPoint", {
            mapCode: e.mapCode ? e.mapCode : this.mapInfo.code,
            pointId: e.pointId
        }).then(function (t) {
            i.updateMapInfo(t.map), e.cb && e.cb(t)
        })
    }, i.prototype.TriggerEvent = function (e) {
        var i = this;
        Utils.Socket.send("vestage", "TriggerEvent", {
            mapCode: e.mapCode ? e.mapCode : this.mapInfo.code,
            pointId: e.pointId,
            key: e.key
        }).then(function (t) {
            !e.dontPopReward && t.clientReward ? r.GameMVC.backpackPy.handleClientReward(t.clientReward, {
                closeCB: function () {
                    i.updateBuffInfo(t.buffs), i.updateMapInfo(t.map), i.updateBaseInfo(t.base), e.cb && e.cb(t)
                }
            }) : (i.updateBuffInfo(t.buffs), i.updateMapInfo(t.map), i.updateBaseInfo(t.base), e.cb && e.cb(t))
        })
    }, i.prototype.EndEvent = function (e) {
        var i = this;
        Utils.Socket.send("vestage", "EndEvent", {
            mapCode: e.mapCode ? e.mapCode : this.mapInfo.code,
            pointId: e.pointId
        }).then(function (t) {
            i.updateBuffInfo(t.buffs), i.updateMapInfo(t.map), e.cb && e.cb(t)
        })
    }, i.prototype.Restart = function (t, e) {
        var i = this;
        Utils.Socket.send("vestage", "Restart", {
            isBroken: t
        }).then(function (t) {
            i.reset(), i.updateMapInfo(t.info), e && e()
        })
    }, i.prototype.UseItem = function (e) {
        var i = this,
            t = {};
        for (var o in e) {
            var n = e[o];
            "code" != o && "num" != o && (t[o] = n)
        }
        var s = {
            code: e.code,
            num: e.num || 1,
            key: JSON.stringify(t)
        };
        Utils.Socket.send("vestage", "UseItem", s).then(function (t) {
            i.updateBuffInfo(t.buffs), r.AppFacade.getInstance().sendNotification(CN.DUNGEON_USE_ITEM, e.code), r.AppFacade.getInstance().updateView(r.DungeonMed.N, r.DungeonMed.SV.MAP), e.cb && e.cb(t)
        })
    }, i.prototype.DiscardItem = function (e) {
        Utils.Socket.send("vestage", "DiscardItem", {
            code: e.code,
            num: e.num || 1
        }).then(function (t) {
            r.AppFacade.getInstance().updateView(r.DungeonMed.N, r.DungeonMed.SV.MAP), e.cb && e.cb(t)
        })
    }, i.prototype.GetStartedBuff = function (e) {
        var i = this;
        Utils.Socket.send("vestage", "GetStartedBuff", {}).then(function (t) {
            i.updateBuffInfo(t.buffs), i.updateBaseInfo(t.base, !1), e && e(t)
        })
    }, i.prototype.updateHeroListInfo = function (t) {
        var e = this;
        t.forEach(function (t) {
            e.heroDict[t.uuid] ? e.heroDict[t.uuid].update(t) : e.heroDict[t.uuid] = new r.DungeonHeroVO(t)
        }), r.AppFacade.getInstance().sendNotification(CN.DUNGEON_UPDATE_HEROLIST)
    }, i.prototype.deleteHeroByUuids = function (t) {
        var e = this;
        t.forEach(function (t) {
            delete e.heroDict[t]
        })
    }, i.prototype.GetVestageHeroInfo = function () {
        var e = this;
        Utils.Socket.send("vestageHero", "GetVestageHeroInfo", {}).then(function (t) {
            e.updateHeroListInfo(t.heroList)
        })
    }, i.prototype.SelectInitHero = function (t, e) {
        var i = this;
        Utils.Socket.send("vestageHero", "SelectInitHero", {
            heroUuids: t.uuid
        }).then(function (t) {
            i.updateHeroListInfo(t.heroList), e && e()
        })
    }, i.prototype.SelectPutOnHero = function (t, e) {
        var i = this;
        Utils.Socket.send("vestageHero", "SelectPutOnHero", {
            heroUuids: t.uuid
        }).then(function (t) {
            i.updateHeroListInfo(t.heroList), e && e()
        })
    }, i.prototype.PutHeroOn = function (t, e) {
        var i = this;
        Utils.Socket.send("vestageHero", "PutHeroOn", {
            uuid: t.uuid,
            pos: t.pos
        }).then(function (t) {
            i.updateHeroListInfo(t.heroList), e && e()
        })
    }, i.prototype.PutHeroDown = function (t, e) {
        var i = this;
        Utils.Socket.send("vestageHero", "PutHeroDown", {
            uuid: t.uuid
        }).then(function (t) {
            i.updateHeroListInfo(t.heroList), e && e()
        })
    }, i.prototype.ImproveHeroStar = function (t, e) {
        Utils.Socket.send("vestageHero", "ImproveHeroStar", {
            uuid: t.uuid
        }).then(function (t) {
            e && e()
        })
    }, i.N = "DungeonPy", i);

    function i() {
        var t = e.call(this, i.N) || this;
        return t.hasNewHeroGet = !1, t.reset(), t
    }
    r.DungeonPy = t
}(game = game || {}),
function (t) {
    var e, i = (e = BasePanel, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, o.prototype.updateView = function (t) {
        var e = this;
        this.params = t, this.dungeonEventPointObj = t.dungeonEventPointObj, DragonBoneTools.playOnce({
            effectName: "common_dabaoxiang",
            parent: this.gp_effect,
            doneCB: function () {
                e.dungeonEventPointObj.commonTriggerEvent(JSON.stringify({}), function (t) {
                    e.hide()
                })
            }
        })
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.skinName = "DungeonBoxPanelSkin", t
    }
    t.DungeonBoxPanel = i
}(game = game || {}),
function (t) {
    var e, i = (e = eui.Component, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, o.prototype.updateItem = function (t) {
        var e = game.Config.vestageItemConfig()[t.code];
        e && (this.skill_item.img_icon.source = ResourceUtils.png(e.icon), this.skill_item.scaleX = this.skill_item.scaleY = .8, this.lb_name.text = e.name, this.lb_desc.text = e.desc, this.lb_tips.text = "")
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.skinName = "SkillDetailsPanelSkin", t
    }
    t.DungeonBuffShowPanel = i
}(customui = customui || {}),
function (s) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        var i = this;
        e.prototype.childrenCreated.call(this), DragonBoneTools.create("zhujiemian_lt_01", function (t) {
            (t = t).x = this.gp_laotou.width / 2, t.y = this.gp_laotou.height, t.animation.play("daiji2"), this.gp_laotou.addChild(t)
        }, this), DragonBoneTools.create("zhujiao_01_z", function (t) {
            (t = this.playerModel = t).x = this.gp_lead.width / 2, t.y = this.gp_lead.height, t.scaleX = -1.5, t.scaleY = 1.5, t.animation.play(), this.gp_lead.addChild(t)
        }, this), this.img_rest.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (i.isCanTouch) {
                var t = s.Config.vestageEventConfig()[i.dungeonEventPointObj.vo.eventId],
                    e = JSON.parse(t.detail);
                GameRootLayer.gameLayer().switchCloudLoading(!0), GameRootLayer.gameLayer().switchTouchEnable(!1), i.dungeonEventPointObj.commonTriggerEvent(JSON.stringify({
                    eventId: e[0]
                }), function () {
                    i.isCanTouch = !1, i.restEffect()
                })
            }
        }, this), this.img_up.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            i.hide(), s.AppFacade.getInstance().showSubView(s.DungeonMed.N, s.DungeonMed.SV.HERO_UP, {
                dungeonEventPointObj: i.dungeonEventPointObj
            })
        }, this)
    }, i.prototype.restEffect = function () {
        var t = this;
        GameRootLayer.gameLayer().switchCloudLoading(!1, function () {
            DragonBoneTools.playOnce({
                effectName: "common_ty_shengmingyihuifu",
                parent: t.gp_effect,
                x: t.gp_effect.width / 2,
                y: t.gp_effect.height / 2,
                scaleX: 1,
                scaleY: 1,
                keep: !1,
                loop: !1,
                doneCB: function () {
                    t.hide(), GameRootLayer.gameLayer().switchTouchEnable(!0), s.AppFacade.getInstance().sendNotification(CN.DUNGEON_UPDATE_HEROLIST_EFFECT)
                }
            })
        })
    }, i.prototype.updateView = function (t) {
        this.isCanTouch = !0, this.params = t, this.dungeonEventPointObj = t.dungeonEventPointObj;
        var e = s.Config.vestageEventConfig()[this.dungeonEventPointObj.vo.eventId],
            i = JSON.parse(e.detail),
            o = s.Config.vestageEventConfig()[i[0]],
            n = JSON.parse(o.detail);
        this.lb_rest.text = "回复出战英雄最大生命的" + n + "%"
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "DungeonCampPanelSkin", t
    }
    s.DungeonCampPanel = t
}(game = game || {}),
function (h) {
    var o, t = (o = BasePanel, __extends(e, o), e.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this), this.initFilter(), this.initBtnListener(), this.addListener(), this.chooseHeroPage = 0, this.heroList = [];
        for (var t = 1; t <= 6; t++) {
            var e = customui.BaseItemFactory.create();
            this.pos2HeroBI[t] = e, this.pos2HeroBI[t].indexNum = t, this.pos2HeroBI[t].resetFixedStyle(EEntityType.EEntityTypeHero);
            var i = this.pos2XY(t);
            e.x = i[0], e.y = i[1], e.scaleX = .8, e.scaleY = .8, this.gp_heroList.addChild(e), 0 < t && t < 7 && this.heroList.push(e)
        }
    }, e.prototype.getUpHeroList = function () {
        for (var t = [], e = 1; e <= 6; e++) this.pos2HeroBI[e].vo && this.pos2HeroBI[e].vo.uuid ? t.push(this.pos2HeroBI[e].vo.uuid) : t.push("");
        return t
    }, e.prototype.initBtnListener = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (!this.params.isInit) {
                var t = this.getUpHeroList();
                this.dungeonProxy.SelectPutOnHero({
                    uuid: t
                }, this.hide.bind(this))
            }
        }, this), this.btn_yes.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var t = this.getUpHeroList(),
                e = 0;
            for (var i in t)
                if ("" != t[i]) {
                    e++;
                    break
                } this.params.isInit ? 0 == e ? Utils.MsgUtils.addMidMsg("请点击英雄头像选择阵容") : this.dungeonProxy.SelectInitHero({
                uuid: t
            }, this.hide.bind(this)) : 0 == e ? Utils.MsgUtils.addMidMsg("请点击英雄头像上阵阵容") : this.dungeonProxy.SelectPutOnHero({
                uuid: t
            }, this.hide.bind(this))
        }, this), this.btn_filter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.gp_filters.visible = !0;
            var t = this.gp_filter.globalToLocal(0, 0),
                e = new egret.Sprite;
            e.touchEnabled = !0, e.graphics.beginFill(0, 0), e.graphics.drawRect(t.x, t.y, Utils.DeviceUtils.curWidth() / Utils.DeviceUtils.additionScale(), Utils.DeviceUtils.curHeight() / Utils.DeviceUtils.additionScale()), e.graphics.endFill(), this.gp_filter.addChildAt(e, 2), e.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
                this.gp_filters.visible = !1, e.parent && e.parent.removeChild(e)
            }, this)
        }, this)
    }, e.prototype.initFilter = function () {
        var o = this;
        this.gp_filters_list.removeChildren();
        var t = this.ITEM_TYPE_CONFIG[h.BackpackUI.ITEM_TYPE.HERO].filterConfig.data;
        t && 0 < t.length ? (this.gp_filter.visible = !0, t.forEach(function (t) {
            var e = new eui.List;
            e.itemRenderer = h.DecomposeUI_FilterItem;
            var i = new eui.HorizontalLayout;
            i.horizontalAlign = egret.HorizontalAlign.CENTER, e.layout = i, e.dataProvider = new eui.ArrayCollection(t), e.addEventListener(eui.ItemTapEvent.ITEM_TAP, o.filterItem_onItemTap, o), o.gp_filters_list.addChild(e)
        }), this.gp_filters.height = 42 * t.length + 20 * (t.length - 1) + 40) : this.gp_filter.visible = !1
    }, e.prototype.filterItem_onItemTap = function (t) {
        var e = t.itemRenderer;
        if (this.ITEM_TYPE_CONFIG[h.BackpackUI.ITEM_TYPE.HERO].filterConfig.addFilter(this.curFilter, t.item), !e.chosen)
            for (var i = 0, o = this.gp_filters_list.$children; i < o.length; i++) {
                var n = o[i];
                if (-1 != n.$children.indexOf(e))
                    for (var s = 0, a = n.$children; s < a.length; s++) {
                        var r = a[s];
                        r.chosen && r.setChosen(!1)
                    }
            }
        e.setChosen(!e.chosen), this.updateAllHero()
    }, e.prototype.addListener = function () {
        this.gp_touchField.touchChildren = !0, this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    }, e.prototype.removeListener = function () {
        this.gp_touchField.touchChildren = !1, this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    }, e.prototype.updateView = function (t) {
        this.params = t, this.updateAllHeroList(), t.isInit || this.updateUpHero(), this.updateAllHero(), this.btn_back.visible = !t.isInit, this.lb_tips.visible = !!t.isInit
    }, e.prototype.updateUpHero = function () {
        var t = this.dungeonProxy.heroDict;
        for (var e in t)
            if (0 != t[e].pos) {
                t[e].uuid;
                var i = t[e];
                if (i) {
                    var o = 0 == i.dermaCode ? void 0 : h.Config.getHeroDermaConfig()[i.dermaCode].avatar;
                    this.pos2HeroBI[t[e].pos].updateData({
                        vo: i,
                        type: EEntityType.EEntityTypeVestageHero,
                        avatar: o
                    })
                }
            }
    }, e.prototype.updateAllHeroList = function () {
        this.allHeroInfo = [];
        var t = this.ITEM_TYPE_CONFIG[h.BackpackUI.ITEM_TYPE.HERO],
            e = [],
            i = void 0;
        if (i = this.params.isInit ? (e = t.getAllInfo(), EEntityType.EEntityTypeHero) : (e = this.dungeonProxy.heroDict, EEntityType.EEntityTypeVestageHero), e)
            for (var o in e) {
                var n = e[o];
                this.allHeroInfo.push({
                    type: i,
                    info: n,
                    isChoose: this.judgeChoose(this.params.isInit, n),
                    touchCB: this.touchHeroEvent.bind(this)
                })
            }
    }, e.prototype.judgeChoose = function (t, e) {
        var i = !1,
            o = this.getUpHeroList();
        if (t) {
            for (var n in o)
                if (o[n] == e.uuid) {
                    i = !0;
                    break
                }
        } else i = 0 != e.pos;
        return i
    }, e.prototype.updateAllHero = function () {
        this.scroller_hero.stopAnimation();
        var t = [],
            e = this.ITEM_TYPE_CONFIG[h.BackpackUI.ITEM_TYPE.HERO],
            i = e.filterConfig && e.filterConfig.filterFunc || function () {
                return !0
            },
            o = e.sortConfig && e.sortConfig.defaultSortFunc,
            n = void 0,
            s = void 0;
        if (s = this.params.isInit ? (n = e.getAllInfo(), EEntityType.EEntityTypeHero) : (n = this.dungeonProxy.heroDict, EEntityType.EEntityTypeVestageHero), n)
            for (var a in n) {
                var r = n[a];
                i(this.curFilter, r) && t.push({
                    type: s,
                    info: r,
                    isChoose: this.judgeChoose(this.params.isInit, r),
                    touchCB: this.touchHeroEvent.bind(this)
                })
            }
        0 < t.length && o && t.sort(o), this.dataprovider = new eui.ArrayCollection(t), this.list_hero.itemRenderer = c, this.list_hero.dataProvider = this.dataprovider
    }, e.prototype.pos2XY = function (t) {
        var e;
        return Math.ceil((t - 6) / 6), [95 * (e = (t - 1) % 6) + (2 < e ? 130 : 95) - 70, 45]
    }, e.prototype.getTouchedGroupPos = function (t) {
        for (var e in this.pos2HeroBI) {
            var i = this.pos2HeroBI[e];
            if (i != this.targetItem) {
                var o = i.localToGlobal();
                if (this.rect ? this.rect.setTo(o.x, o.y, i.width * this.addScale, i.height * this.addScale) : this.rect = new egret.Rectangle(o.x, o.y, i.width * this.addScale, i.height * this.addScale), this.rect.contains(t.stageX, t.stageY)) return e
            }
        }
    }, e.prototype.onTouchBegin = function (t) {
        var e = this.getTouchedGroupPos(t);
        if (e && this.pos2HeroBI[e]) {
            if (this.targetItem = this.pos2HeroBI[e], !this.targetItem.vo) return void(this.targetItem = void 0);
            this.targetItemTouchTM = Date.now(), this.gp_heroList.setChildIndex(this.targetItem, -1), this.startingPos = e, this.gp_touchField.width = this.width, this.gp_touchField.height = this.height, this.beginX = t.stageX, this.beginY = t.stageY
        }
    }, e.prototype.onTouchMove = function (t) {
        this.targetItem && this.setModelToXY(this.targetItem, t.stageX, t.stageY)
    }, e.prototype.onTouchEnd = function (t) {
        if (this.targetItem) {
            var e = this.getTouchedGroupPos(t);
            Date.now() - this.targetItemTouchTM < DEEP_NEST_CONST.TOUCH_TIME ? this.heroDownByteam(this.targetItem, this.startingPos) : e ? this.setHeroToPos(this.targetItem, e) : this.heroDownByteam(this.targetItem, this.startingPos), this.targetItem = void 0, this.startingPos = void 0, this.gp_touchField.width = this.gp_heroList.width, this.gp_touchField.height = this.gp_heroList.height
        }
    }, e.prototype.setHeroToPos = function (t, e, i) {
        if (void 0 === i && (i = !1), t) {
            this.pos2HeroBI[this.startingPos] = void 0, this.startingPos && this.startingPos != e && this.pos2HeroBI[e] && this.setHeroToPos(this.pos2HeroBI[e], this.startingPos, !0), this.pos2HeroBI[e] = t;
            var o = this.pos2XY(e);
            t.x = o[0], t.y = o[1], t.scaleX = .8, t.scaleY = .8
        }
    }, e.prototype.setModelToXY = function (t, e, i) {
        t.width, t.scaleX, t.height, t.scaleY, t.x += (e - this.beginX) / this.addScale, t.y += (i - this.beginY) / this.addScale, this.beginX = e, this.beginY = i
    }, e.prototype.heroDownByteam = function (t, e) {
        for (var i in this.allHeroInfo)
            if (t.vo.uuid == this.allHeroInfo[i].info.uuid) {
                for (var o in this.dataprovider.source) {
                    var n = this.list_hero.getVirtualElementAt(Number(o)),
                        s = this.dataprovider.getItemAt(Number(o));
                    if (s.info.uuid == t.vo.uuid && n && n.img_bg && n.img_bg.visible) {
                        n.img_bg.visible = !1, s.isChoose = !1, s.type != EEntityType.EEntityTypeVestageHero || 0 < s.info.life ? UIActionManager.setGrey(n.gp_bi, !1) : UIActionManager.setAbsGrey(n.gp_bi, !0);
                        break
                    }
                }
                var a = this.pos2XY(e);
                t.x = a[0], t.y = a[1], t.resetFixedStyle(EEntityType.EEntityTypeHero);
                break
            }
    }, e.prototype.touchHeroEvent = function (t, e, i) {
        if (t) {
            for (var o = 0, n = 1; n <= 6; n++)
                if (!this.pos2HeroBI[n].vo) {
                    o = n;
                    break
                } if (0 == o) Utils.MsgUtils.addMidMsg("当前阵容已上满");
            else {
                var s = 0 == e.info.dermaCode ? void 0 : h.Config.getHeroDermaConfig()[e.info.dermaCode].avatar;
                this.pos2HeroBI[o].updateData({
                    vo: e.info,
                    type: e.type,
                    avatar: s,
                    isShowMax: e.type != EEntityType.EEntityTypeVestageHero
                }), i && i()
            }
        } else {
            var a = 0;
            for (n = 1; n <= 6; n++)
                if (this.pos2HeroBI[n].vo && this.pos2HeroBI[n].vo.uuid == e.info.uuid) {
                    a = n;
                    break
                } 0 != a && (this.pos2HeroBI[a].resetFixedStyle(EEntityType.EEntityTypeHero), i && i())
        }
    }, e.prototype.perClose = function () {
        this.params.doneCB && this.params.doneCB()
    }, e);

    function e() {
        var t, e = o.call(this) || this;
        return e.dungeonProxy = h.AppFacade.getInstance().retrieveProxy(h.DungeonPy.N), e.playerProxy = h.AppFacade.getInstance().retrieveProxy(h.PlayerPy.N), e.heroProxy = h.AppFacade.getInstance().retrieveProxy(h.HeroPy.N), e.allHeroInfo = [], e.chooseHeroPage = 0, e.maxHeroPage = 0, e.heroList = [], e.isChanging = !1, e.dataprovider = new eui.ArrayCollection, e.addScale = Utils.DeviceUtils.additionScale(), e.beginX = 0, e.beginY = 0, e.ITEM_TYPE_CONFIG = ((t = {})[h.BackpackUI.ITEM_TYPE.HERO] = {
            desc: "英雄",
            hasHankBook: !0,
            barSource: {
                up: "_btn_yq_m_json.beibao_yeqian_yingxiong_0",
                down: "_btn_yq_m_json.beibao_yeqian_yingxiong_1"
            },
            getAllInfo: function () {
                var t = [],
                    e = h.AppFacade.getInstance().retrieveProxy(h.HeroPy.N);
                for (var i in e.allHeroByUuid) {
                    var o = e.allHeroByUuid[i];
                    0 == o.config.race && 0 == o.config.profession || t.push(o)
                }
                return t
            },
            filterConfig: {
                data: [
                    [{
                        race: HeroRaceType.Human,
                        icon: HeroRaceConfig[HeroRaceType.Human].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }, {
                        race: HeroRaceType.Elf,
                        icon: HeroRaceConfig[HeroRaceType.Elf].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }, {
                        race: HeroRaceType.Orc,
                        icon: HeroRaceConfig[HeroRaceType.Orc].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }, {
                        race: HeroRaceType.Athanasy,
                        icon: HeroRaceConfig[HeroRaceType.Athanasy].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }, {
                        race: HeroRaceType.Demon,
                        icon: HeroRaceConfig[HeroRaceType.Demon].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }, {
                        race: HeroRaceType.Eldar,
                        icon: HeroRaceConfig[HeroRaceType.Eldar].raceIconBig,
                        chosenImg: "beibao_img_daxuanzhongq_png"
                    }]
                ],
                filterFunc: function (t, e) {
                    var i = !t.race || 0 == t.race.length || -1 != t.race.indexOf(e.config.race),
                        o = !t.star || 0 == t.star.length || -1 != t.star.indexOf(e.starLevel);
                    return i && o
                },
                addFilter: function (t, e) {
                    var i = e.race ? "race" : "star";
                    t[i] || (t[i] = []);
                    var o = t[i].indexOf(e[i]); - 1 == o ? (t[i].splice(0), t[i].push(e[i])) : t[i].splice(o, 1)
                },
                autoFilterFunc: function (t, e) {
                    return t.starLevel <= 4
                },
                autoFilterTipsFunc: function (t) {
                    return "无五星以下英雄"
                }
            },
            sortConfig: {
                data: [{
                    desc: "等级"
                }, {
                    desc: "星级"
                }],
                getSortFunc: function (t) {
                    switch (t) {
                        case 0:
                            return function (t, e) {
                                return e.info.level - t.info.level
                            };
                        case 1:
                            return function (t, e) {
                                return e.info.starLevel - t.info.starLevel
                            };
                        default:
                            return function () {
                                return -1
                            }
                    }
                },
                defaultSortFunc: function (t, e) {
                    var i = t.info,
                        o = e.info;
                    if (i.starLevel != o.starLevel) return o.starLevel - i.starLevel;
                    if (i.level != o.level) return o.level - i.level;
                    var n = h.Config.allHeroConfig()[i.code],
                        s = h.Config.allHeroConfig()[o.code];
                    return n.race != s.race ? n.race - s.race : n.profession != s.profession ? HERO_SORT_ORDER[s.profession] - HERO_SORT_ORDER[n.profession] : i.code - o.code
                }
            }
        }, t), e.skinName = "DungeonChoosePanelSkin", e.pos2HeroBI = {}, e.curFilter = {}, e
    }
    h.DungeonChoosePanel = t;
    var i, c = (i = eui.ItemRenderer, __extends(n, i), n.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this), this.baseItem = customui.BaseItemFactory.create(), this.baseItem.scaleX = this.baseItem.scaleY = .8, this.img_bg.scaleX = this.img_bg.scaleY = .6, this.gp_bi.addChild(this.baseItem), this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.isLive ? this.data.touchCB && this.data.touchCB(!this.img_bg.visible, this.data, this.changeIsUp.bind(this)) : this.data.isChoose ? this.data.touchCB && this.data.touchCB(!this.img_bg.visible, this.data, this.changeIsUp.bind(this)) : Utils.MsgUtils.addMidMsg("该英雄已阵亡，无法上阵")
        }, this)
    }, n.prototype.dataChanged = function () {
        var t = this.data,
            e = 0 == t.info.dermaCode ? void 0 : h.Config.getHeroDermaConfig()[t.info.dermaCode].avatar;
        this.baseItem.updateData({
            uuid: this.data.info.uuid,
            type: this.data.type,
            effect: !1,
            isShowZhongZhu: !0,
            avatar: e,
            isShowMax: this.data.type != EEntityType.EEntityTypeVestageHero
        }), this.data.type == EEntityType.EEntityTypeVestageHero ? this.isLive = 0 < t.info.life : this.isLive = !0, this.isLive ? (this.img_bg.visible = this.data.isChoose, this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png"), UIActionManager.setGrey(this.gp_bi, this.img_bg.visible)) : (this.img_bg.visible = this.data.isChoose, this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png"), UIActionManager.setAbsGrey(this.gp_bi, !0))
    }, n.prototype.changeIsUp = function () {
        this.img_bg.visible = !this.img_bg.visible, this.data.isChoose = !this.data.isChoose, this.isLive ? (UIActionManager.setGrey(this.gp_bi, this.img_bg.visible), this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png")) : (this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png"), UIActionManager.setAbsGrey(this.gp_bi, !0))
    }, n);

    function n() {
        var t = i.call(this) || this;
        return t.isLive = !0, t.skinName = "CommonTeamHeroItemSkin", t
    }
}(game = game || {}),
function (c) {
    var t = (e.create = function (t) {
        if (t.vo) {
            var e = void 0;
            if (null != t.vo.eventType) switch (t.vo.eventType) {
                case VestageEventType.Creep:
                    e = new c.DEPCreep(t);
                    break;
                case VestageEventType.Box:
                    e = new c.DEPBox(t);
                    break;
                case VestageEventType.Unknown:
                    e = new c.DEPUnknown(t);
                    break;
                case VestageEventType.Shop:
                    e = new c.DEPShop(t);
                    break;
                case VestageEventType.Campsite:
                    e = new c.DEPCampsite(t);
                    break;
                case VestageEventType.Empty:
            }
            return e
        }
        egret.warn("参数不对")
    }, e);

    function e() {}
    c.DungeonEventFactory = t;
    var i, o = (i = eui.Component, __extends(n, i), Object.defineProperty(n.prototype, "vo", {
        get: function () {
            return this.data.vo
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.initComp = function () {
        this.gp_root = new eui.Group, this.gp_root.width = this.gp_root.height = 0, this.addChild(this.gp_root), this.btn_icon = new eui.Button, this.btn_icon.horizontalCenter = this.btn_icon.verticalCenter = 0, this.btn_icon.skinName = "skins.ButtonSkinIcon", this.gp_root.addChild(this.btn_icon), this.hasInit = !0, this.btn_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.preEnter, this)
    }, n.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this), this.initComp(), this.data && this.updateData(this.data)
    }, n.prototype.updateData = function (t) {
        this.data = t;
        var e = this.data.vo;
        switch (egret.Tween.removeTweens(this.gp_root), UIActionManager.setAbsGrey(this.btn_icon, !1), this.gp_root.scaleX = this.gp_root.scaleY = 1, this.btn_icon.enabled = !1, e.status) {
            case VestagePointStatus.UnPassed:
                var i = this.data.allDatas,
                    o = this.data.from,
                    n = c.GameMVC.dungeonPy.mapInfo.curPointId,
                    s = !1;
                if (n) {
                    if (o.length && 0 <= o.indexOf(n)) {
                        var a = i[n].vo;
                        if (!(s = a.status === VestagePointStatus.Success)) switch (a.eventType) {
                            case VestageEventType.Shop:
                                s = !0;
                                break;
                            case VestageEventType.Unknown:
                                var r = a.fadeType;
                                r && (s = r === VestageEventType.Shop || r === VestageEventType.UpHeroStar)
                        }
                    }
                } else s = !o.length;
                s ? this.btnEnabledEffect() : UIActionManager.setAbsGrey(this.btn_icon, !0);
                break;
            case VestagePointStatus.Passed:
                this.gp_root.getChildByName("passImg") || ((h = new eui.Image("shzyj_img_yiwancheng_png")).name = "passImg", h.horizontalCenter = 0, h.verticalCenter = -15, this.gp_root.addChild(h));
                break;
            case VestagePointStatus.Just:
                this.btnEnabledEffect();
                break;
            case VestagePointStatus.Success:
                var h;
                this.gp_root.getChildByName("passImg") || ((h = new eui.Image("shzyj_img_yiwancheng_png")).name = "passImg", h.horizontalCenter = 0, h.verticalCenter = -15, this.gp_root.addChild(h));
                break;
            case VestagePointStatus.Fail:
                this.btnEnabledEffect()
        }
    }, n.prototype.btnEnabledEffect = function () {
        this.btn_icon.enabled = !0, egret.Tween.get(this.gp_root, {
            loop: !0
        }).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 1e3).to({
            scaleX: 1,
            scaleY: 1
        }, 1e3)
    }, n.prototype.preEnter = function () {
        var t = this;
        if (this.data) {
            var e = this.data.vo;
            e.status == VestagePointStatus.Just || e.status == VestagePointStatus.Fail ? this.onEnter() : c.GameMVC.dungeonPy.EnterPoint({
                pointId: e.id,
                cb: function () {
                    t.onEnter()
                }
            })
        } else egret.error("preEnter 事件data为空")
    }, n.prototype.onEnter = function () {
        egret.warn("onEnter 子类需重写该方法实现节点进入逻辑")
    }, n.prototype.commonTriggerEvent = function (t, e, i) {
        if (void 0 === i && (i = !1), this.data) {
            var o = this.data.vo;
            c.GameMVC.dungeonPy.TriggerEvent({
                pointId: o.id,
                key: t,
                cb: e,
                dontPopReward: i
            })
        } else egret.error("事件data为空")
    }, n.prototype.endEvent = function (t) {
        if (this.data) {
            var e = this.data.vo;
            c.GameMVC.dungeonPy.EndEvent({
                pointId: e.id,
                cb: t
            })
        } else egret.error("事件data为空")
    }, n);

    function n(t) {
        var e = i.call(this) || this;
        return e.hasInit = !1, e.data = t, e.height = e.width = 0, e
    }
    c.DungeonEventPoint = o
}(game = game || {}),
function (t) {
    var e, i = (e = eui.Component, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, o.prototype.updateItem = function (t) {
        this.lb_name.text = this.textList[t], this.img_event.source = this.picList[t], this.updateText(t)
    }, o.prototype.updateText = function (t) {
        var e = void 0,
            i = void 0,
            o = void 0,
            n = 0;
        switch (t) {
            case 0:
                o = VestageEventType.Unknown;
                break;
            case 1:
                o = VestageEventType.Shop;
                break;
            case 2:
                o = VestageEventType.Box;
                break;
            case 3:
                o = VestageEventType.Campsite;
                break;
            case 4:
                o = VestageEventType.Creep, n = VestageCreepType.Normal;
                break;
            case 5:
                o = VestageEventType.Creep, n = VestageCreepType.Elite;
                break;
            case 6:
                o = VestageEventType.Creep, n = VestageCreepType.Boss
        }
        if (o == VestageEventType.Creep) {
            for (var s in i = game.Config.vestageEventDescConfigByCreep())
                if (i[s].eventSubType == n) {
                    e = i[s];
                    break
                }
        } else
            for (var s in i = game.Config.vestageEventDescConfig())
                if (i[s].eventType == o) {
                    e = i[s];
                    break
                } this.lb_desc.text = e.eventDesc
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.picList = ["shzyj_icon_buming_png", "shzyj_icon_shangren_png", "shzyj_icon_baoxiang_png", "shzyj_icon_yingdi_png", "shzyj_icon_diren_png", "shzyj_icon_jingying_png", "shzyj_icon_toumu_png"], t.textList = ["不明", "商人", "宝箱", "营地", "敌人", "精英", "头目"], t.skinName = "DungeonEventShowPanelSkin", t
    }
    t.DungeonEventShowPanel = i
}(customui = customui || {}),
function (c) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        var i = this;
        e.prototype.childrenCreated.call(this), this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            i.hide()
        }, this), this.btn_yes.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (i.gp_name_0.visible) {
                if (i.chooseInfo) {
                    var t = c.Config.vestageEventConfig()[i.dungeonEventPointObj.vo.eventId],
                        e = JSON.parse(t.detail);
                    i.dungeonEventPointObj.commonTriggerEvent(JSON.stringify({
                        heroUuid: i.chooseInfo.uuid,
                        eventId: e[1]
                    }), function (t) {
                        DragonBoneTools.playOnce({
                            effectName: "common_sxcg",
                            parent: i.gp_effect,
                            x: i.gp_effect.width / 2,
                            y: i.gp_effect.height / 2,
                            scaleX: 1,
                            scaleY: 1,
                            keep: !1,
                            loop: !1,
                            doneCB: function () {
                                i.hide()
                            }
                        })
                    })
                }
            } else Utils.MsgUtils.addMidMsg("请先选择需要升星的英雄")
        }, this)
    }, i.prototype.updateView = function (t) {
        this.params = t, this.dungeonEventPointObj = t.dungeonEventPointObj, this.dungeonEventPointObj.vo, this.updateHeroInfo()
    }, i.prototype.updateHeroInfo = function () {
        this.initModel(!1), this.updateAllHero()
    }, i.prototype.updateAllHero = function () {
        this.scroller_hero.stopAnimation();
        var t = [],
            e = this.dungeonProxy.heroDict;
        if (e)
            for (var i in e) {
                var o = e[i];
                t.push({
                    type: EEntityType.EEntityTypeVestageHero,
                    info: o,
                    isChoose: !1,
                    isLock: 0 == o.config.nextVestageCode,
                    touchCB: this.touchHeroEvent.bind(this)
                })
            }
        0 < t.length && t.sort(function (t, e) {
            var i = t.info,
                o = e.info,
                n = t.isLock;
            if (n != e.isLock) return n ? 1 : -1;
            if (i.starLevel != o.starLevel) return o.starLevel - i.starLevel;
            if (i.level != o.level) return o.level - i.level;
            var s = c.Config.allHeroConfig()[i.code],
                a = c.Config.allHeroConfig()[o.code];
            return s.race != a.race ? s.race - a.race : s.profession != a.profession ? HERO_SORT_ORDER[a.profession] - HERO_SORT_ORDER[s.profession] : i.code - o.code
        }), this.dataprovider = new eui.ArrayCollection(t), this.list_hero.itemRenderer = n, this.list_hero.dataProvider = this.dataprovider
    }, i.prototype.touchHeroEvent = function (t, e) {
        if (t.isChoose) this.initModel(!1);
        else
            for (var i in this.updateModel(t.info), this.dataprovider.source) {
                var o = this.list_hero.getVirtualElementAt(Number(i)),
                    n = this.dataprovider.getItemAt(Number(i));
                o && o.img_bg && o.img_bg.visible && (o.img_bg.visible = !1, n.isChoose = !1, n.type != EEntityType.EEntityTypeVestageHero || 0 < n.info.life ? (n.isLock ? (o.img_bg.visible = !0, o.img_bg.source = "common_img_xiaosuo_png") : (o.img_bg.visible = n.isChoose, o.img_bg.visible && (o.img_bg.source = "common_img_gouxuan_png")), UIActionManager.setGrey(o.gp_bi, o.img_bg.visible)) : UIActionManager.setAbsGrey(o.gp_bi, !0))
            }
        e && e()
    }, i.prototype.updateModel = function (t) {
        this.initModel(!0);
        var e = (this.chooseInfo = t).config;
        e.subType, this.lb_name_0.text = e.name, this.heroModel_0.update({
            model: e.model,
            isStatic: !0
        });
        var i = t.starLevel,
            o = c.GeneralConfig.getHeroStarInfo(i);
        if (this.gp_stars_0.removeChildren(), o.stage < 4)
            for (var n = 0; n < o.num; n++) {
                var s = new eui.Image(o.src);
                this.gp_stars_0.addChild(s), s.scaleX = s.scaleY = .5
            } else this.gp_stars_0.addChild(new customui.HighStarLevelIcon({
                num: o.num,
                scale: .5
            }));
        var a = e.nextVestageCode,
            r = c.Config.allHeroConfig(!1)[a];
        this.lb_name_1.text = r.name, this.heroModel_1.update({
            model: r.model,
            isStatic: !0
        });
        var h = c.GeneralConfig.getHeroStarInfo(r.initStar);
        if (this.gp_stars_1.removeChildren(), h.stage < 4)
            for (n = 0; n < h.num; n++) s = new eui.Image(h.src), this.gp_stars_1.addChild(s), s.scaleX = s.scaleY = .5;
        else this.gp_stars_1.addChild(new customui.HighStarLevelIcon({
            num: h.num,
            scale: .5
        }))
    }, i.prototype.initModel = function (t) {
        this.gp_name_0.visible = t, this.gp_name_1.visible = t, this.heroModel_0.visible = t, this.heroModel_1.visible = t, this.img_add_0.visible = !t, this.img_add_1.visible = !t, this.gp_stars_0.removeChildren(), this.gp_stars_1.removeChildren(), t || (this.chooseInfo = void 0)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.dungeonProxy = c.AppFacade.getInstance().retrieveProxy(c.DungeonPy.N), t.dataprovider = new eui.ArrayCollection, t.chooseInfo = void 0, t.skinName = "DungeonHeroUpPanelSkin", t
    }
    c.DungeonHeroUpPanel = t;
    var o, n = (o = eui.ItemRenderer, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this), this.baseItem = customui.BaseItemFactory.create(), this.baseItem.scaleX = this.baseItem.scaleY = .8, this.img_bg.scaleX = this.img_bg.scaleY = .6, this.gp_bi.addChild(this.baseItem), this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.data.isLock ? Utils.MsgUtils.addMidMsg("该英雄无法升星") : this.data.touchCB && this.data.touchCB(this.data, this.changeIsUp.bind(this))
        }, this)
    }, s.prototype.dataChanged = function () {
        var t = this.data,
            e = 0 == t.info.dermaCode ? void 0 : c.Config.getHeroDermaConfig()[t.info.dermaCode].avatar;
        this.baseItem.updateData({
            uuid: this.data.info.uuid,
            type: this.data.type,
            effect: !1,
            isShowZhongZhu: !0,
            avatar: e
        }), this.isLive = 0 < t.info.life, this.isLive ? (this.data.isLock ? (this.img_bg.visible = !0, this.img_bg.source = "common_img_xiaosuo_png") : (this.img_bg.visible = this.data.isChoose, this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png")), UIActionManager.setGrey(this.gp_bi, this.img_bg.visible)) : UIActionManager.setAbsGrey(this.gp_bi, !0)
    }, s.prototype.changeIsUp = function () {
        this.img_bg.visible = !this.img_bg.visible, this.data.isChoose = !this.data.isChoose, this.isLive ? (UIActionManager.setGrey(this.gp_bi, this.img_bg.visible), this.img_bg.visible && (this.img_bg.source = "common_img_gouxuan_png")) : UIActionManager.setAbsGrey(this.gp_bi, !0)
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.isLive = !0, t.skinName = "CommonTeamHeroItemSkin", t
    }
}(game = game || {}),
function (n) {
    var e, t = (e = BaseFull, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), this.initEffect(), this.activateComponent()
    }, i.prototype.onDestroy = function () {
        e.prototype.onDestroy.call(this), Utils.AssetsMgr.destroyGroup("group_dungeon_main")
    }, i.prototype.updateView = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return this.proxy.baseInfo.processStatus !== VestageProcessType.GetStartedBuff ? [3, 1] : (PopUpManager.addPopUp({
                            obj: new n.DungeonRollDicePanel,
                            clickDarkClose: !1
                        }), [3, 3]);
                    case 1:
                        return this.proxy.baseInfo.processStatus !== VestageProcessType.EnterMap ? [3, 3] : (this.proxy.buffInfo[0].iAmClean(), [4, this.mediator.flyBuff(this.proxy.buffInfo[0])]);
                    case 2:
                        t.sent(), this.playEnterEffect(function () {}), t.label = 3;
                    case 3:
                        return this.lb_times.text = this.proxy.baseInfo.challengeTimes.toString(), [2]
                }
            })
        })
    }, i.prototype.playEnterEffect = function (t) {
        var e = this,
            i = this.gp_effect_elder.getChildAt(0);
        i.animation.play("shifa"), i.once(dragonBones.EgretEvent.LOOP_COMPLETE, function () {
            i.animation.play("daiji", 0)
        }, this);
        var o = this.gp_effect_book.getChildAt(0);
        o.animation.play("dakai", 1), this.gp_root.horizontalCenter = this.gp_root.verticalCenter = void 0, egret.Tween.get(this.gp_root).to({
            scaleX: 3.5,
            scaleY: 3.5
        }, 1e3).wait(100).call(function () {
            e.bookContentWritten(function () {
                o.animation.play("daiji2", 1), egret.Tween.get(e.lb_book).to({
                    alpha: 0
                }, 500), o.once(dragonBones.EgretEvent.LOOP_COMPLETE, function () {
                    o.animation.play("daiji3", 1), DragonBoneTools.playOnce({
                        effectName: "common_shuzswb",
                        parent: e.gp_effect_book,
                        y: -620,
                        doneCB: function () {
                            n.MainJumpConfig.jumpTo(), n.MainJumpConfig.jumpTo(MODULE.Vestage, !1, {
                                newChapter: !0
                            })
                        }
                    })
                }, e)
            })
        })
    }, i.prototype.bookContentWritten = function (e) {
        var i = this;
        this.gp_root.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            i.lb_book.text = i.BOOK_CONTENT
        }, this), this.bookTimer = egret.setInterval(function () {
            var t = i.lb_book.text.length;
            i.BOOK_CONTENT[t] ? i.lb_book.text += i.BOOK_CONTENT[t] : (egret.clearInterval(i.bookTimer), egret.setTimeout(function () {
                e()
            }, i, 700))
        }, this, 100)
    }, i.prototype.initEffect = function () {
        DragonBoneTools.playOnce({
            effectName: "common_shzyj_changtai",
            parent: this.gp_effect_enter,
            loop: !0
        }), DragonBoneTools.playOnce({
            effectName: "zhujiemian_lt_01",
            actionName: "daiji",
            parent: this.gp_effect_elder,
            loop: !0
        }), DragonBoneTools.playOnce({
            effectName: "zhujiemian_lt_02",
            actionName: "daiji",
            parent: this.gp_effect_book,
            loop: !0
        }), DragonBoneTools.playOnce({
            effectName: "zhujiemian_lt_03",
            actionName: "daiji",
            parent: this.gp_effect_table,
            loop: !0
        })
    }, i.prototype.activateComponent = function () {
        var i = this;
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            n.MainJumpConfig.jumpTo()
        }, this), this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            PopUpManager.addPopUp({
                obj: new n.HelpDialog({
                    moduleId: MODULE.Vestage
                })
            })
        }, this), this.gp_effect_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (0 < i.proxy.baseInfo.challengeTimes) {
                i.gp_effect_enter.touchEnabled = !1, i.btn_back.visible = !1, i.gp_challenge.visible = !1;
                var e = i.gp_effect_enter.getChildAt(0);
                DragonBoneTools.playOnce({
                    effectName: "common_shzyj_dianji",
                    parent: i.gp_effect_enter,
                    loadFinishCB: function () {
                        e.visible = !1
                    },
                    doneCB: function () {
                        i.gp_effect_enter.visible = !1;
                        var t = new n.DungeonChoosePanel;
                        t.setUpdateParamsAfterCreated({
                            isInit: !0
                        }), PopUpManager.addPopUp({
                            obj: t,
                            clickDarkClose: !1
                        }), e.visible = !0
                    }
                })
            } else Utils.MsgUtils.addMidMsg("挑战次数不足")
        }, this)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.bookTimer = 0, t.BOOK_CONTENT = "传说远古时期大陆上一片混乱，\n正邪之间的斗争绵延整个大陆，\n一位人族老者曾留下一份手札。\n记录着大陆那黑暗时代的一切", t.proxy = n.GameMVC.dungeonPy, Utils.AssetsMgr.loadGroup("group_dungeon_main"), t.skinName = "DungeonMainSkin", t
    }
    n.DungeonMainView = t
}(game = game || {}),
function (r) {
    var e, t = (e = BaseFull, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), this.activateComponent(), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_top), Utils.DeviceUtils.setLiuHaiPingAdapter(this.scl_map), this.initHeroList(), this.proxy.baseInfo.records && r.GameMVC.fightMed.showSubView(r.FightMediator.SV.DUNGEON_RESULT, {
            clickDarkClose: !1,
            info: {
                vestageRecords: this.proxy.baseInfo.records
            },
            doneCB: function () {}
        })
    }, i.prototype.updateView = function (n) {
        var s = this;
        (n && n.newChapter || this.needInit) && (this.resetMap(), this.initMapData(), this.once(egret.Event.ENTER_FRAME, function () {
            for (var t = Math.ceil(s.scl_map.viewport.contentHeight / 1624); s.gp_bg.numChildren != t;) s.gp_bg.addChild(new eui.Image("shzyj_img_zhiditu_png"));
            if (n && n.newChapter) s.showChapterInfo();
            else {
                var e = s.scl_map.viewport.contentHeight - s.scl_map.height,
                    i = s.proxy.mapInfo.curPointId;
                if (i) {
                    var o = s.mapNodeDatas[i].node;
                    e = Math.min(Math.max(o.y - s.scl_map.height / 2, 0), s.scl_map.viewport.contentHeight - s.scl_map.height)
                }
                s.scl_map.viewport.scrollV = e, s.gp_bg.y = -s.scl_map.viewport.scrollV, s.arrangeVisible()
            }
        }, this)), this.updateMap(), this.updateTopInfo(), this.updateBottom(), this.updateCamera()
    }, i.prototype.initHeroList = function () {
        for (var t = 0; t < 6; t++) {
            var e = new n;
            e.scaleX = e.scaleY = .75, this.gp_formation.addChild(e), this.heroList.push(e)
        }
    }, i.prototype.updateTopInfo = function () {
        var o = this,
            t = this.proxy.mapInfo,
            e = r.Config.vestageMapConfig()[t.code];
        for (var i in this.lb_name.text = e.name, this.lb_money.text = this.proxy.itemInfo[160000001] || 0, this.dict2DungeonSBuffItem) this.dict2DungeonSBuffItem[i].isExpire = !0;
        var n = void 0;
        for (var i in this.proxy.buffInfo.forEach(function (t) {
                var e = t.code + "_" + t.dt,
                    i = o.dict2DungeonSBuffItem[e];
                i ? i.updateItem(t) : (i = new p(t, o.skin_buffShow), o.gp_buff.addChild(i), o.dict2DungeonSBuffItem[e] = i), i.isExpire = !1, t.isDirty && ((n = n || []).push(t), t.iAmClean(), i.visible = !1)
            }), 10 < this.gp_buff.numChildren ? this.img_open2.visible = !0 : this.img_open2.visible = !1, this.dict2DungeonSBuffItem) this.dict2DungeonSBuffItem[i].isExpire && (this.dict2DungeonSBuffItem[i].parent.removeChild(this.dict2DungeonSBuffItem[i]), delete this.dict2DungeonSBuffItem[i]);
        n && this.asyncflyBuff(n)
    }, i.prototype.updateBottom = function () {
        this.updateHeroList();
        var t = r.Config.vestageItemConfig(),
            e = [];
        t: for (var i in this.proxy.itemInfo) {
            var o = this.proxy.itemInfo[i];
            if (t[i].useType === VestageItemUseType.Direct)
                for (var n = 0; n < o; n++)
                    if (e.push(Number(i)), 3 === e.length) break t
        }
        for (e.sort(function (t, e) {
                return t - e
            }), n = 0; n < 3; n++) {
            var s = this.gp_items.numChildren > n && this.gp_items.getChildAt(n),
                a = e[n] && {
                    code: e[n]
                } || void 0;
            s ? s.updateData(a) : (s = new h(a), this.gp_items.addChild(s))
        }
    }, i.prototype.updateMap = function () {
        var s = this;

        function a(t, e) {
            t.numChildren && t.getChildAt(0).source != e && t.$children.forEach(function (t) {
                t.source = e
            })
        }

        function t(t) {
            var o = e.mapNodeDatas[t],
                n = o.vo;
            o.node.updateData(o), o.to.forEach(function (t) {
                var e = o.pathGp[t],
                    i = s.mapNodeDatas[t];
                n.status != VestagePointStatus.UnPassed && i.vo.status != VestagePointStatus.UnPassed ? a(e, "shzyj_img_luxian1_png") : a(e, "shzyj_img_luxian2_png")
            })
        }
        var e = this;
        for (var i in this.mapNodeDatas) t(i)
    }, i.prototype.updateHeroList = function () {
        for (var t in this.heroList) this.heroList[t].initItem();
        var e = this.proxy.heroDict;
        for (var t in e) 0 != e[t].pos && this.heroList[e[t].pos - 1].updateItem(e[t])
    }, i.prototype.updateOneHeroEffect = function (t) {
        this.heroList[t - 1].rebornEffect()
    }, i.prototype.updateRebornEffect = function () {
        DragonBoneTools.playOnce({
            effectName: "common_ty_fuhuochenggong",
            parent: this.gp_effect,
            x: this.gp_effect.width / 2,
            y: this.gp_effect.height / 2,
            scaleX: 1,
            scaleY: 1,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        })
    }, i.prototype.updateAddHpEffect = function () {
        DragonBoneTools.playOnce({
            effectName: "common_ty_shengmingyihuifu",
            parent: this.gp_effect,
            x: this.gp_effect.width / 2,
            y: this.gp_effect.height / 2,
            scaleX: 1,
            scaleY: 1,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        }), this.updateHeroEffect()
    }, i.prototype.updateHeroEffect = function (t) {
        for (var e in this.heroList) this.heroList[e].img_add.visible || this.heroList[e].restEffect();
        t && t.cb && t.cb()
    }, i.prototype.updateHpCost = function (t) {
        this.lb_costHP.visible = !0, this.lb_costHP.text = "生命 -" + t + "%", egret.Tween.get(this.lb_costHP).to({
            y: 0
        }, 1e3).call(function () {
            this.lb_costHP.visible = !1, this.lb_costHP.y = 150
        }, this)
    }, i.prototype.updateHpEffect = function (t) {
        for (var e in Utils.ShakeUtils.shakeObj(this.gp_root, .2, 60, 3), this.heroList) this.heroList[e].img_add.visible || this.heroList[e].minusEffect();
        t && t.cb && t.cb()
    }, i.prototype.addMoneyEffect = function (t) {
        this.gp_effect.x = 260, this.lb_money.scaleX = this.lb_money.scaleY = 2, egret.Tween.get(this.lb_money).to({
            scaleX: 1,
            scaleY: 1
        }, 1e3).call(function () {}, this), DragonBoneTools.playOnce({
            effectName: "common_jinbi",
            parent: this.gp_effect,
            x: this.gp_effect.width / 2,
            y: this.gp_effect.height / 2,
            scaleX: 1,
            scaleY: 1,
            keep: !1,
            loop: !1,
            doneCB: function () {
                t && t.cb && t.cb()
            }
        })
    }, i.prototype.taoPaoCurActFinish = function (t, e) {
        this.taopaoActNameCurIndex >= this.taopaoActName.length ? (this.displayTaopao.parent.removeChild(this.displayTaopao), this.displayTaopao = void 0, GameRootLayer.gameLayer().switchTouchEnable(!0), this.minusMoneyEffectObj && this.minusMoneyEffectObj.cb && this.minusMoneyEffectObj.cb()) : this.displayTaopao.animation.play(this.taopaoActName[this.taopaoActNameCurIndex++])
    }, i.prototype.minusMoneyEffect = function (e) {
        var i = this;
        this.displayTaopao && this.displayTaopao.animation ? (this.displayTaopao.visible = !0, egret.Tween.get(this.displayTaopao).call(this.taoPaoCurActFinish, this).to({
            x: GameRootLayer.gameLayer().popMsgLayer.width / 2
        }, 500).call(this.taoPaoCurActFinish, this).wait(1250).call(this.taoPaoCurActFinish, this).to({
            x: GameRootLayer.gameLayer().popMsgLayer.width + 100
        }, 300).call(this.taoPaoCurActFinish, this)) : (GameRootLayer.gameLayer().switchTouchEnable(!1), this.taopaoActNameCurIndex = 0, this.minusMoneyEffectObj = void 0, DragonBoneTools.createForHero("toujinbi_01", function (t) {
            (i.displayTaopao = t).x = -100, t.y = i.gp_root.height / 2 + 160, t.scaleX = t.scaleY = 1.2, i.gp_root.addChild(i.displayTaopao), i.minusMoneyEffectObj = e, i.minusMoneyEffect()
        }))
    }, i.prototype.updateCamera = function () {
        var t = this.proxy.mapInfo.curPointId;
        if (t) {
            this.scl_map.validateNow();
            var e = this.mapNodeDatas[t].node,
                i = Math.min(Math.max(e.y - this.scl_map.height / 2, 0), this.scl_map.viewport.contentHeight - this.scl_map.height);
            i < this.scl_map.viewport.scrollV && egret.Tween.get(this.scl_map.viewport, {
                onChange: this.syncBgPos,
                onChangeObj: this
            }).to({
                scrollV: i
            }, 300)
        }
    }, i.prototype.initMapData = function () {
        var o = this,
            t = this.proxy.mapInfo;
        for (var e in t.points) {
            var i = t.points[e],
                n = {
                    vo: i,
                    allDatas: this.mapNodeDatas,
                    x: i.id - 100 * i.depth,
                    y: i.depth,
                    node: void 0,
                    from: [],
                    to: [],
                    pathGp: {}
                };
            (!this.roomNum[n.y] || this.roomNum[n.y] < n.x) && (this.roomNum[n.y] = n.x), this.mapNodeDatas[i.id] = n
        }
        t.edges.forEach(function (t) {
            var e = t.from,
                i = t.to;
            o.mapNodeDatas[e].to.push(i), o.mapNodeDatas[i].from.push(e)
        }), this.RANDOM_SEED = t.genDt, this.initNode(), this.initPath(), this.needInit = !1
    }, i.prototype.initNode = function () {
        for (var t in this.mapNodeDatas) {
            var e = this.mapNodeDatas[t],
                i = r.DungeonEventFactory.create(e);
            this.gp_node.addChild(i), e.node = i, this.setNodePos(e)
        }
    }, i.prototype.initPath = function () {
        function t(t) {
            var a = e.mapNodeDatas[t],
                r = a.node;
            a.to.forEach(function (t) {
                var e = h.mapNodeDatas[t].node;
                c.x = e.x - r.x, c.y = e.y - r.y;
                var i = c.length,
                    o = new eui.Group;
                o.x = r.x, o.y = r.y, o.width = 0, o.rotation = 180 * c.angle / Math.PI - 90, o.touchEnabled = o.touchChildren = !1, o.cacheAsBitmap = !1;
                for (var n = 50; n < i - 35;) {
                    var s = new eui.Image("shzyj_img_luxian2_png");
                    s.anchorOffsetX = 10, s.anchorOffsetY = 10, s.x = Utils.MathUtils.getRandomInt(-DUNGEON_CONST.PATH_DOT_OFFSET_H, DUNGEON_CONST.PATH_DOT_OFFSET_H, h.RANDOM_SEED + a.vo.id + n), s.y = n, n += 20 + DUNGEON_CONST.PATH_DOT_GAP + Utils.MathUtils.getRandomInt(-DUNGEON_CONST.PATH_DOT_OFFSET_V, DUNGEON_CONST.PATH_DOT_OFFSET_V, h.RANDOM_SEED + n), o.addChild(s)
                }
                a.pathGp[t] = o, h.gp_route.addChild(o)
            })
        }
        var h = this,
            c = new Vector2D,
            e = this;
        for (var i in this.mapNodeDatas) t(i)
    }, i.prototype.setNodePos = function (t) {
        var e = t.node,
            i = t.y,
            o = t.x;
        1 === i ? (e.x = 360, e.y = 0) : (e.x = o * (600 / this.roomNum[i]) + Utils.MathUtils.getRandomInt(-DUNGEON_CONST.NODE_OFFSET_H, DUNGEON_CONST.NODE_OFFSET_H, i + o + this.RANDOM_SEED), e.y = (i - 1) * DUNGEON_CONST.NODE_GAP_V + Utils.MathUtils.getRandomInt(-DUNGEON_CONST.NODE_OFFSET_V, DUNGEON_CONST.NODE_OFFSET_V, i - o + this.RANDOM_SEED))
    }, i.prototype.arrangeVisible = function () {}, i.prototype.showChapterInfo = function () {
        var t = this;
        GameRootLayer.gameLayer().switchTouchEnable(!1);
        var e = this.proxy.mapInfo,
            i = new eui.Group,
            o = new eui.VerticalLayout;
        o.horizontalAlign = egret.HorizontalAlign.CENTER, i.layout = o;
        var n = new eui.BitmapLabel;
        n.font = "deep_nest_fnt", n.text = "第" + Utils.MathUtils.formatNumToCharacter(e.code) + "章", i.addChild(n);
        var s = new eui.BitmapLabel;
        s.font = "dungeon_name_fnt", s.text = r.Config.vestageMapConfig()[e.code].name, i.addChild(s), i.horizontalCenter = 0, i.y = 250, this.gp_root.addChild(i), i.alpha = 0, egret.Tween.get(i).to({
            alpha: 1
        }, 300).wait(1500).call(function () {
            egret.Tween.get(t.scl_map.viewport, {
                onChange: t.syncBgPos,
                onChangeObj: t
            }).to({
                scrollV: t.scl_map.viewport.contentHeight - t.scl_map.height
            }, 2e3).call(function () {
                GameRootLayer.gameLayer().switchTouchEnable(!0)
            })
        }).to({
            alpha: 0
        }, 300).call(function () {
            i.parent && i.parent.removeChild(i)
        })
    }, i.prototype.resetMap = function () {
        this.gp_node.removeChildren(), this.gp_route.removeChildren(), this.mapNodeDatas = {}
    }, i.prototype.syncBgPos = function () {
        this.gp_bg.y = -this.scl_map.viewport.scrollV
    }, i.prototype.activateComponent = function () {
        var e = this;

        function t(t) {
            i["gp_" + t].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                e.skin_eventShow.visible = !0, e.skin_eventShow.updateItem(t)
            }, i), i["gp_" + t].addEventListener(egret.TouchEvent.TOUCH_END, function () {
                e.skin_eventShow.visible = !1
            }, i), i["gp_" + t].addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
                e.skin_eventShow.visible = !1
            }, i), i["gp_" + t].addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
                e.skin_eventShow.visible = !1
            }, i)
        }
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            r.MainJumpConfig.jumpTo()
        }, this), this.scl_map.addEventListener(egret.Event.CHANGE, function (t) {
            e.syncBgPos(), e.arrangeVisible()
        }, this), this.btn_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            r.AppFacade.getInstance().showSubView(r.DungeonMed.N, r.DungeonMed.SV.CHOOSE, {
                isInit: !1
            })
        }, this), this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            PopUpManager.addPopUp({
                obj: new r.HelpDialog({
                    moduleId: MODULE.Vestage
                })
            })
        }, this), this.btn_afresh.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var t = new Array;
            t.push({
                text: "确定进行重置本次幻境挑战吗？",
                style: {
                    size: 24
                }
            }), t.push({
                text: "\n（进行重置时，将把本次挑战所获得的遗物、金币、药，以及英雄全部重置。）",
                style: {
                    size: 24
                }
            }), r.GameMgr.getInstance().showCommonTipsWin({
                commonTips: t,
                source: "dungeon_restart",
                cb: !0,
                clickCB: function (t) {
                    1 == t.type && e.proxy.Restart(!0, function () {
                        e.hide(), Number(r.MainJumpConfig.getCurEvent()) == MODULE.Vestage ? r.GameMVC.dungeonPy.GetVestageMapInfo(function () {
                            r.GameMVC.dungeonMed.showSubView(r.DungeonMed.SV.MAIN)
                        }) : r.MainJumpConfig.jumpTo(MODULE.Vestage)
                    })
                }
            })
        }, this), this.gp_formation.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            r.AppFacade.getInstance().showSubView(r.DungeonMed.N, r.DungeonMed.SV.CHOOSE, {
                isInit: !1
            })
        }, this), this.gp_open.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (e.isCanOpen) {
                e.isCanOpen = !1;
                var t = e.isOpen ? -150 : 0;
                egret.Tween.get(e.gp_legend).to({
                    x: t
                }, 300).call(function () {
                    this.isCanOpen = !0, this.isOpen = !this.isOpen, this.img_open.scaleX = this.isOpen ? .5 : -.5
                }, e)
            }
        }, this);
        for (var i = this, o = 0; o < 7; o++) t(o);
        this.img_open2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.sl_buff.height ? (e.img_open2.scaleX = -.5, e.sl_buff.height = 0) : (e.img_open2.scaleX = .5, e.sl_buff.height = e.gp_buff.height)
        }, this)
    }, i.prototype.asyncflyBuff = function (s) {
        return __awaiter(this, void 0, void 0, function () {
            var e, i, o, n;
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        e = 0, i = s, t.label = 1;
                    case 1:
                        return e < i.length ? (o = i[e], [4, this.mediator.flyBuff(o)]) : [3, 4];
                    case 2:
                        t.sent(), n = o.code + "_" + o.dt, this.dict2DungeonSBuffItem[n] && this.dict2DungeonSBuffItem[n].appear(), t.label = 3;
                    case 3:
                        return e++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.proxy = r.GameMVC.dungeonPy, t.RANDOM_SEED = 0, t.needInit = !0, t.roomNum = {}, t.isOpen = !1, t.isCanOpen = !0, t.heroList = [], t.taopaoActName = ["jinlai", "daiji", "taopao"], t.taopaoActNameCurIndex = 0, t.minusMoneyEffectObj = void 0, t.dict2DungeonSBuffItem = {}, t.curItemShowed = [], t.skinName = "DungeonMapSkin", t
    }
    r.DungeonMapView = t;
    var o, n = (o = eui.Component, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this), this.baseItem = customui.BaseItemFactory.create(), this.baseItem.touchEnabled = !1, this.baseItem.scaleX = this.baseItem.scaleY = 1, this.gp_base.addChild(this.baseItem)
    }, s.prototype.initItem = function () {
        this.baseItem.resetFixedStyle(EEntityType.EEntityTypeHero), this.img_hp.width = 0, this.gp_hp.visible = !1, this.img_add.visible = !0, UIActionManager.setAbsGrey(this.gp_root, !1)
    }, s.prototype.updateItem = function (t) {
        this.data = t, this.img_add.visible = !1;
        var e = 0 == t.dermaCode ? void 0 : r.Config.getHeroDermaConfig()[t.dermaCode].avatar;
        this.baseItem.updateData({
            uuid: t.uuid,
            type: EEntityType.EEntityTypeVestageHero,
            effect: !1,
            isShowZhongZhu: !0,
            avatar: e
        }), this.gp_hp.visible = !0, this.img_hp.width = Math.ceil(t.life / t.maxLife * 120), this.img_anger.width = Math.ceil(t.anger / t.maxAnger * 120), UIActionManager.setAbsGrey(this.gp_root, t.life <= 0)
    }, s.prototype.rebornEffect = function () {
        DragonBoneTools.playOnce({
            effectName: "common_huijushengji_1",
            parent: this.gp_base,
            x: this.gp_base.width / 2,
            y: this.gp_base.height / 2,
            scaleX: 1.2,
            scaleY: 1.2,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        })
    }, s.prototype.restEffect = function () {
        0 < this.data.life && DragonBoneTools.playOnce({
            effectName: "common_huijushengji_1",
            parent: this.gp_base,
            x: this.gp_base.width / 2,
            y: this.gp_base.height / 2,
            scaleX: 1.2,
            scaleY: 1.2,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        })
    }, s.prototype.minusEffect = function () {
        0 < this.data.life && DragonBoneTools.playOnce({
            effectName: "skill_dk_100001",
            parent: this.gp_base,
            x: 10 + this.gp_base.width / 2,
            y: 30 + this.gp_base.height / 2,
            scaleX: .8,
            scaleY: .8,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        })
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.data = void 0, t.skinName = "DungeonHeroItemSkin", t
    }
    r.DungeonHeroItem = n;
    var a, h = (a = eui.Component, __extends(c, a), c.prototype.createChildren = function () {
        a.prototype.createChildren.call(this), this.gp_root = new eui.Group, this.gp_root.width = this.gp_root.height = 0, this.img_bg = new eui.Image("_main_m_json.maoxian_img_quandi2"), this.img_bg.horizontalCenter = this.img_bg.verticalCenter = 0, this.gp_root.addChild(this.img_bg), this.img_icon = new eui.Image("shzyj_icon_yaoshui0_png"), this.img_icon.horizontalCenter = this.img_icon.verticalCenter = 0, this.gp_root.addChild(this.img_icon), this.blb_name = new eui.BitmapLabel, this.blb_name.font = "white_num_fnt", this.blb_name.horizontalCenter = 0, this.blb_name.verticalCenter = 30, this.gp_root.addChild(this.blb_name), this.addChild(this.gp_root)
    }, c.prototype.childrenCreated = function () {
        var t = this;
        a.prototype.childrenCreated.call(this), this.data && this.updateData(this.data), this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.data && PopUpManager.addPopUp({
                obj: new r.BaseItemDetailView({
                    code: t.data.code,
                    type: EEntityType.EEntityTypeVestageItem,
                    source: BASEITEM_SOURCE.BACKPACK
                })
            })
        }, this)
    }, c.prototype.updateData = function (t) {
        var e = !(this.data || !t);
        if (this.data = t, this.data) {
            var i = this.data.code,
                o = r.Config.vestageItemConfig()[i];
            this.img_icon.source = o.icon + "_png", this.blb_name.text = o.name, e && this.playObtainEffect()
        } else this.img_icon.source = "shzyj_icon_yaoshui0_png", this.blb_name.text = ""
    }, c.prototype.playObtainEffect = function () {
        this.img_icon.alpha = 10, this.img_icon.scaleX = this.img_icon.scaleY = 2, egret.Tween.get(this.img_icon).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 250)
    }, c);

    function c(t) {
        var e = a.call(this) || this;
        return e.data = t, e
    }
    var l, p = (l = eui.Component, __extends(u, l), u.prototype.childrenCreated = function () {
        var i = this;
        l.prototype.childrenCreated.call(this), this.img_icon = new eui.Image, this.img_icon.scaleX = this.img_icon.scaleY = .7, this.blb_count = new eui.BitmapLabel, this.blb_count.horizontalCenter = 0, this.blb_count.bottom = 0, this.blb_count.font = "white_num_fnt", this.addChild(this.img_icon), this.addChild(this.blb_count), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            if (i.data) {
                var t = i.parent.localToGlobal(i.x, i.y),
                    e = i.skin_buffShow.parent.globalToLocal(t.x, t.y);
                i.skin_buffShow.x = Math.min(e.x, Utils.DeviceUtils.curWidth() - i.skin_buffShow.width - 10), i.skin_buffShow.y = e.y + 10 + i.height, i.skin_buffShow.visible = !0, i.skin_buffShow.updateItem(i.data)
            }
        }, this), this.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            i.skin_buffShow.visible = !1
        }, this), this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
            i.skin_buffShow.visible = !1
        }, this), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            i.skin_buffShow.visible = !1
        }, this), this.updateItem()
    }, u.prototype.updateItem = function (t) {
        t && (this.data = t), 0 < this.data.count ? (this.blb_count.text = this.data.count.toString(), this.blb_count.visible = !0) : this.blb_count.visible = !1;
        var e = r.Config.vestageItemConfig()[this.data.code];
        e && (this.img_icon.source = ResourceUtils.png(e.icon))
    }, u.prototype.appear = function () {
        this.visible = !0
    }, u);

    function u(t, e) {
        var i = l.call(this) || this;
        return i.data = t, i.skin_buffShow = e, i
    }
}(game = game || {}),
function (l) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), this.commonDaTanKuang.blb_title.text = "不明事件", this.commonDaTanKuang.img_close.visible = !1
    }, i.prototype.updateView = function (t) {
        this.proxy.mapInfo, this.params = t, this.dungeonEventPointObj = t.dungeonEventPointObj;
        var e = this.dungeonEventPointObj.vo,
            i = l.Config.vestageEventConfig()[e.eventId],
            o = JSON.parse(i.detail),
            n = l.Config.vestageQuestionConfig()[o[0]];
        this.lb_desc.text = n.question, this.img_di.source = n.img + "_png", JSON.parse(n.choices);
        for (var s = JSON.parse(n.desc), a = JSON.parse(n.costs), r = e.eventInfo.result, h = 0; h < s.length; h++) {
            var c = new p;
            c.updateEvent({
                dungeonEventPointObj: this.dungeonEventPointObj,
                chooseNum: h + 1,
                text: s[h],
                cost: a[h],
                result: r[h],
                cb: this.hide.bind(this)
            }), this.gp_event.addChild(c)
        }
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.proxy = l.GameMVC.dungeonPy, t.skinName = "DungeonRandomEventPanelSkin", t
    }
    l.DungeonRandomEventPanel = t;
    var o, p = (o = eui.Component, __extends(n, o), n.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this)
    }, n.prototype.updateEvent = function (t) {
        this.info = t, this.dungeonEventPointObj = t.dungeonEventPointObj, this.lb_text.text = t.text, t.cost && t.cost[0] && 0 < t.cost[0].length ? this.isEnough = l.GameMVC.backpackPy.checkEnough(t.cost, !1) : this.isEnough = !0, UIActionManager.setAbsGrey(this.gp_root, !this.isEnough)
    }, n.prototype.touchEvent = function () {
        var i = this;
        this.info.cb && this.info.cb(), this.dungeonEventPointObj.commonTriggerEvent(JSON.stringify({
            optionNum: this.info.chooseNum
        }), function (t) {
            var e = l.Config.vestageResultConfig()[i.info.result];
            i.showEventEffect(e.subType, t)
        }, !0)
    }, n.prototype.showEventEffect = function (t, e) {
        var i = this,
            o = {
                cb: function () {
                    l.AppFacade.getInstance().showSubView(l.DungeonMed.N, l.DungeonMed.SV.RANDOM_RESULT, {
                        dungeonEventPointObj: i.dungeonEventPointObj,
                        result: i.info.result,
                        ret: e
                    })
                }
            };
        switch (t) {
            case VestageResultSubType.None:
                o.cb();
                break;
            case VestageResultSubType.AddLife:
                l.AppFacade.getInstance().sendNotification(CN.DUNGEON_RANDOM_EVENT_ADDLIFE, o);
                break;
            case VestageResultSubType.MinusLife:
                l.AppFacade.getInstance().sendNotification(CN.DUNGEON_RANDOM_EVENT_MINUSLIFE, o);
                break;
            case VestageResultSubType.MinusGold:
                l.AppFacade.getInstance().sendNotification(CN.DUNGEON_RANDOM_EVENT_MINUSGOLD, o);
                break;
            case VestageResultSubType.GetHero:
            case VestageResultSubType.GetBuff:
            case VestageResultSubType.GetPotion:
                o.cb();
                break;
            case VestageResultSubType.GetGold:
                l.AppFacade.getInstance().sendNotification(CN.DUNGEON_RANDOM_EVENT_ADDGOLD, o)
        }
    }, n);

    function n() {
        var t = o.call(this) || this;
        return t.info = void 0, t.isEnough = !0, t.skinName = "DungeonRandomEventItemSkin", t.gp_root.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            t.gp_root.scaleX = t.gp_root.scaleY = .9
        }, t), t.gp_root.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            t.gp_root.scaleX = t.gp_root.scaleY = 1, t.isEnough ? t.touchEvent() : Utils.MsgUtils.addMidMsg("货币不足")
        }, t), t.gp_root.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
            t.gp_root.scaleX = t.gp_root.scaleY = 1
        }, t), t.gp_root.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            t.gp_root.scaleX = t.gp_root.scaleY = 1
        }, t), t
    }
    l.DungeonRandomEventItem = p
}(game = game || {}),
function (a) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.btn_yes.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.eventByType()
        }, this)
    }, i.prototype.updateView = function (t) {
        this.proxy.mapInfo, this.params = t, this.dungeonEventPointObj = t.dungeonEventPointObj, this.dungeonEventPointObj.vo, this.resultConfig = a.Config.vestageResultConfig()[t.result], this.lb_desc.text = this.resultConfig.desc;
        var e = [],
            i = void 0;
        for (var o in t && t.ret && t.ret.clientReward && (i = t.ret.clientReward), i)
            for (var n in i[o]) i[o][n] && e.push(i[o][n]);
        switch (this.resultConfig.type) {
            case VestageChoiceType.Empty:
                this.gp_reward.removeChildren();
                break;
            case VestageChoiceType.Cost:
                break;
            case VestageChoiceType.Reward:
                for (var o in this.gp_reward.removeChildren(), e) {
                    var s = customui.BaseItemFactory.create();
                    s.scaleX = s.scaleY = .75, s.updateData({
                        id: e[o].code,
                        num: e[o].num,
                        type: e[o].type
                    }), this.gp_reward.addChild(s)
                }
                break;
            case VestageChoiceType.Event:
        }
    }, i.prototype.eventByType = function () {
        switch (this.resultConfig.type) {
            case VestageChoiceType.Empty:
            case VestageChoiceType.Cost:
            case VestageChoiceType.Reward:
                break;
            case VestageChoiceType.Event:
                this.showRandonPanel(this.dungeonEventPointObj.vo.fadeType)
        }
        this.hide()
    }, i.prototype.showRandonPanel = function (t) {
        switch (t) {
            case VestageEventType.Creep:
                var e = this.dungeonEventPointObj.vo;
                a.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
                    type: EBattleType.EBattleTypeVestage,
                    pb1: "vestage",
                    pb2: "TriggerEvent",
                    params: {
                        mapCode: a.GameMVC.dungeonPy.mapInfo.code,
                        pointId: e.id
                    },
                    doneCB: function (t) {
                        t.cbRet && (a.GameMVC.dungeonPy.updateMapInfo(t.cbRet.map), a.GameMVC.dungeonPy.updateBaseInfo(t.cbRet.base)), a.AppFacade.getInstance().retrieveProxy(a.FightPy.N).queueExceExitCB()
                    }
                });
                break;
            case VestageEventType.Shop:
                PopUpManager.addPopUp({
                    obj: new a.DEPShopUI({
                        dungeonEventPointObj: this.dungeonEventPointObj
                    }),
                    closeCB: function (t) {}
                });
                break;
            case VestageEventType.Box:
                a.AppFacade.getInstance().showSubView(a.DungeonMed.N, a.DungeonMed.SV.BOX_EVENT, {
                    dungeonEventPointObj: this.dungeonEventPointObj,
                    clickDarkClose: !1
                });
                break;
            case VestageEventType.Campsite:
                a.AppFacade.getInstance().showSubView(a.DungeonMed.N, a.DungeonMed.SV.CAMP, {
                    dungeonEventPointObj: this.dungeonEventPointObj,
                    clickDarkClose: !1
                });
                break;
            case VestageEventType.CureLife:
                break;
            case VestageEventType.UpHeroStar:
                a.AppFacade.getInstance().showSubView(a.DungeonMed.N, a.DungeonMed.SV.HERO_UP, {
                    dungeonEventPointObj: this.dungeonEventPointObj,
                    clickDarkClose: !1
                })
        }
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.proxy = a.GameMVC.dungeonPy, t.resultConfig = void 0, t.skinName = "DungeonRandomResultPanelSkin", t
    }
    a.DungeonRandomResultPanel = t
}(game = game || {}),
function (n) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.perClose = function () {
        this.params && this.params.doneCB && this.params.doneCB()
    }, e.prototype.childrenCreated = function () {
        var t = this;
        i.prototype.childrenCreated.call(this), Utils.ComponentUtils.registerListener(this.btn_ok, egret.TouchEvent.TOUCH_TAP, function () {
            n.GameMVC.dungeonPy.Restart(!1, function () {
                t.hide(), Number(n.MainJumpConfig.getCurEvent()) == MODULE.Vestage ? n.GameMVC.dungeonPy.GetVestageMapInfo(function () {
                    n.GameMVC.dungeonMed.showSubView(n.DungeonMed.SV.MAIN)
                }) : n.MainJumpConfig.jumpTo(MODULE.Vestage)
            })
        }, this)
    }, e.prototype.updateView = function (t, e) {
        var c = this;
        void 0 === e && (e = !1), this.params = t;
        var i = this.params.info,
            o = "common_zhanbai_21";
        i.result == EBattleResult.EBattleResultWin || n.GameMVC.dungeonPy.baseInfo.isCompleted ? (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shengli), o = "common_shengli_21", i.clientReward && (this.btn_ok.bottom = -149, n.GameMgr.getInstance().CommonGpAddReward(this.gp_rewards, i.clientReward))) : Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shibai), DragonBoneTools.create(o, function (t) {
            t.x = this.gp_bg.width / 2, t.y = this.gp_bg.height / 2 - 107, t.animation.play(), this.gp_bg.addChild(t)
        }, this);
        var l = JSON.parse(i.vestageRecords),
            p = 0;
        this.TIPS.forEach(function (t, e) {
            var i = new eui.Group;
            i.percentWidth = 100;
            var o = new eui.Label;
            o.size = 24, o.bold = !0, o.stroke = 2, o.text = t.name, o.verticalCenter = 0;
            var n = new eui.BitmapLabel;
            if (n.font = "green_num_fnt", n.text = "0", n.right = 0, n.verticalCenter = 0, i.addChild(o), i.addChild(n), i.y += 40 * e, c.gp_tips.addChild(i), i.alpha = 0, egret.setTimeout(function () {
                    UIActionManager.fadeIn(i, 100)
                }, c, 250 * e), e == c.TIPS.length - 1) {
                var s = new eui.Image;
                s.source = "shzyj_img_fengexian_png", s.horizontalCenter = 0, s.y = i.y, c.gp_tips.addChild(s), i.y += 20, o.size = 26, o.bold = !0, o.text = "总分数", n.scaleX = n.scaleY = 1.05, n.text = p.toString()
            } else
                for (var a = 0, r = l; a < r.length; a++) {
                    var h = r[a];
                    h.eventType == t.type && (h.eventSubType && h.eventSubType != t.subType || (n.text = h.times, p += Number(h.times)))
                }
        })
    }, e);

    function e(t) {
        var e = i.call(this) || this;
        return e.TIPS = [{
            name: "完成不明事件",
            type: VestageEventType.Unknown,
            subType: void 0
        }, {
            name: "击杀普通怪物",
            type: VestageEventType.Creep,
            subType: VestageCreepType.Normal
        }, {
            name: "击杀精英怪物",
            type: VestageEventType.Creep,
            subType: VestageCreepType.Elite
        }, {
            name: "进入营地",
            type: VestageEventType.Campsite,
            subType: void 0
        }, {
            name: "遇见商人",
            type: VestageEventType.Shop,
            subType: void 0
        }, {
            name: "打败Boss",
            type: VestageEventType.Creep,
            subType: VestageCreepType.Boss
        }, {
            name: "分数",
            type: void 0,
            subType: void 0
        }], e.skinName = "DungeonResultPanelSkin", e.touchEnabled = !1, e
    }
    n.DungeonResultPanel = t
}(game = game || {}),
function (i) {
    var e, t = (e = BasePanel, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), DragonBoneTools.playOnce({
            effectName: "zhujiemian_lt_01",
            parent: this.gp_laotou,
            actionName: "daiji",
            loop: !0,
            x: this.gp_laotou.width / 2,
            y: this.gp_laotou.height
        });
        var t = new customui.RoleDynamicModel({
            vo: i.GameMVC.playerPy.playerInfoVO
        });
        t.scaleX = t.scaleY = 1 / .55, t.onArmatureLoadCB = function () {
            t.onChangingDir(1)
        }, this.gp_role.addChild(t), DragonBoneTools.playOnce({
            effectName: "common_shyjg",
            parent: this.gp_diceEffect,
            loop: !0
        }), egret.Tween.get(this.img_dice, {
            loop: !0
        }).to({
            y: 270
        }, 1e3).to({
            y: 310
        }, 1e3), egret.Tween.get(this.img_shadow, {
            loop: !0
        }).to({
            scaleX: .8,
            scaleY: .8
        }, 1e3).to({
            scaleX: 1,
            scaleY: 1
        }, 1e3), this.activateComponent()
    }, o.prototype.updateView = function (t) {}, o.prototype.activateComponent = function () {
        var e = this;
        this.img_dice.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.GetStartedBuff(function (t) {
                e.hide(), i.GameMVC.commonMed.commonRollDice(JSON.parse(t.key).diceNum, function () {
                    i.AppFacade.getInstance().updateView(i.DungeonMed.N, i.DungeonMed.SV.MAIN)
                })
            })
        }, this)
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.proxy = i.GameMVC.dungeonPy, t.skinName = "DungeonRollDiceSkin", t
    }
    i.DungeonRollDicePanel = t
}(game = game || {}),
function (t) {
    var e, i = (e = t.DungeonEventPoint, __extends(o, e), o.prototype.updateData = function (t) {
        e.prototype.updateData.call(this, t), this.data.vo, this.btn_icon.icon = "shzyj_icon_baoxiang_png"
    }, o.prototype.onEnter = function () {
        3 <= t.GameMVC.dungeonPy.getPotionNum() ? Utils.MsgUtils.addMidMsg("药水栏已满，无法领取奖励") : t.AppFacade.getInstance().showSubView(t.DungeonMed.N, t.DungeonMed.SV.BOX_EVENT, {
            dungeonEventPointObj: this
        })
    }, o);

    function o(t) {
        return e.call(this, t) || this
    }
    t.DEPBox = i
}(game = game || {}),
function (t) {
    var e, i = (e = t.DungeonEventPoint, __extends(o, e), o.prototype.updateData = function (t) {
        e.prototype.updateData.call(this, t), this.data.vo, this.btn_icon.icon = "shzyj_icon_yingdi_png"
    }, o.prototype.onEnter = function () {
        t.AppFacade.getInstance().showSubView(t.DungeonMed.N, t.DungeonMed.SV.CAMP, {
            dungeonEventPointObj: this
        })
    }, o);

    function o(t) {
        return e.call(this, t) || this
    }
    t.DEPCampsite = i
}(game = game || {}),
function (n) {
    var e, t = (e = n.DungeonEventPoint, __extends(i, e), i.prototype.updateData = function (t) {
        switch (e.prototype.updateData.call(this, t), this.data.vo.eventSubType) {
            case VestageCreepType.Normal:
                this.btn_icon.icon = "shzyj_icon_diren_png";
                break;
            case VestageCreepType.Elite:
                this.btn_icon.icon = "shzyj_icon_jingying_png";
                break;
            case VestageCreepType.Boss:
                this.btn_icon.icon = "shzyj_icon_toumu_png"
        }
    }, i.prototype.onEnter = function () {
        if (this.data) {
            var o = this.data.vo;
            n.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
                type: EBattleType.EBattleTypeVestage,
                pb1: "vestage",
                pb2: "TriggerEvent",
                params: {
                    mapCode: n.GameMVC.dungeonPy.mapInfo.code,
                    pointId: o.id
                },
                doneCB: function (t) {
                    if (t.cbRet) {
                        var e = n.GameMVC.dungeonPy.mapInfo.code,
                            i = t.cbRet.map.code;
                        n.GameMVC.dungeonPy.updateMapInfo(t.cbRet.map), n.GameMVC.dungeonPy.updateBaseInfo(t.cbRet.base), o.eventSubType === VestageCreepType.Boss && t.result === EBattleResult.EBattleResultWin && n.AppFacade.getInstance().sendNotification(CN.DUNGEON_BOSS_CLEAR), e != i && n.AppFacade.getInstance().sendNotification(CN.DUNGEON_NEW_CHAPTER)
                    }
                    n.AppFacade.getInstance().retrieveProxy(n.FightPy.N).queueExceExitCB()
                }
            })
        } else egret.error("onEnter 事件data为空")
    }, i);

    function i(t) {
        return e.call(this, t) || this
    }
    n.DEPCreep = t
}(game = game || {}),
function (_) {
    var e, t = (e = _.DungeonEventPoint, __extends(i, e), i.prototype.updateData = function (t) {
        e.prototype.updateData.call(this, t), this.data.vo, this.btn_icon.icon = "shzyj_icon_shangren_png"
    }, i.prototype.onEnter = function () {
        PopUpManager.addPopUp({
            obj: new n({
                dungeonEventPointObj: this
            }),
            closeCB: function (t) {}
        })
    }, i);

    function i(t) {
        return e.call(this, t) || this
    }
    _.DEPShop = t;
    var o, n = (o = BasePanel, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this), Utils.DeviceUtils.setLiuHaiPingAdapter(this.cur_resource), this.bm_title.text = "商店", this.initUI(), this.gp_time.visible = !1, this.btn_refresh.visible = !1, this.updateView()
    }, s.prototype.initUI = function () {
        var t = this;
        UIActionManager.hideScrollerBar(this.pageScroller), this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.pageScroller.scrollToNext(function () {
                t.updatePageBtnStatus()
            })
        }, this), this.btn_last.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.pageScroller.scrollToLast(function () {
                t.updatePageBtnStatus()
            })
        }, this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this), this.pageScroller.curPage = 0, this.heroModel.update(_.ShopUI.HERODATA), this.initList()
    }, s.prototype.initList = function () {
        this.list_item.itemRenderer = _.ShopPageItem, this.collection_list = new eui.ArrayCollection, this.list_item.dataProvider = this.collection_list
    }, s.prototype.updateResourceBar = function () {
        this.cur_resource.updateBar({
            costs: this.moneyType,
            width: 190,
            needAdd: !0
        })
    }, s.prototype.updateView = function () {
        var t = this;
        this.updateList(), this.pageScroller.curPage > this.collection_list.source.length - 1 ? this.pageScroller.scrollToLast(function () {
            t.updatePageBtnStatus()
        }) : this.updatePageBtnStatus(), this.updateResourceBar()
    }, s.prototype.updatePageBtnStatus = function () {
        this.btn_last.visible = 0 != this.pageScroller.curPage, this.btn_next.visible = this.pageScroller.curPage != this.pageNumber - 1
    }, s.prototype.updateList = function () {
        var h = this,
            t = this.dungeonEventPointObj.vo.eventInfo.buyRecords,
            e = [];
        t.forEach(function (t) {
            e.push({
                c: _.Config.shop()[t[0]],
                buyNum: t[1]
            })
        }), e.length || (this.gp_empty.visible = !0), this.pageNumber = Math.ceil(e.length / 9) || 1;
        for (var c = void 0, i = 0, o = _.GameMVC.dungeonPy.buffInfo; i < o.length; i++) {
            var n = o[i],
                s = _.Config.vestageItemConfig()[n.code];
            if (s && s.type == VestagePropType.StoreBuff) {
                c = JSON.parse(s.effect)[0];
                break
            }
        }
        var a = [],
            l = new Array;
        e.forEach(function (n) {
            var e = JSON.parse(n.c.costs)[0];
            c ? (n.c.wholeLifeDiscountReview = c, n.c.wholeLifeDiscountDisplay = 1, n.c.wholeLifeCosts = JSON.stringify([
                [e[0], e[1], e[2] * c / 100]
            ]), n.c.countFun = function (t) {
                return {
                    unit: 1,
                    total: t * e[2] * c / 100
                }
            }) : (n.c.wholeLifeDiscountReview = 0, n.c.wholeLifeDiscountDisplay = 0, n.c.wholeLifeCosts = JSON.stringify([
                [e[0], e[1], e[2]]
            ]), n.c.countFun = void 0);
            var t = n.buyNum,
                i = h.shopProxy.getMaxNum(n.c.id),
                s = i - t,
                o = {
                    hasWholeLifeCard: !!c,
                    isFull: t < i,
                    data: n.c,
                    buyNum: n.buyNum,
                    grid: n.c.grid,
                    type: 2,
                    buyFunc: function () {
                        if (s <= 0) Utils.MsgUtils.addMidMsg("该商品已无购买次数");
                        else {
                            var t = _.GameMVC.dungeonPy.getPotionNum(),
                                e = JSON.parse(n.c.reward)[0][1],
                                i = _.Config.vestageItemConfig()[e];
                            if (i && i.useType === VestageItemUseType.Direct && 3 <= t) Utils.MsgUtils.addMidMsg("药水栏已满，无法领取奖励");
                            else {
                                var o = JSON.parse(n.c.costs)[0];
                                _.GameMVC.backpackPy.checkEnough([
                                    [o[0], o[1], o[2] * (c || 100) / 100]
                                ], !0) && h.dungeonEventPointObj.commonTriggerEvent(JSON.stringify({
                                    shopId: n.c.id,
                                    num: 1
                                }), function () {
                                    h.updateView()
                                })
                            }
                        }
                    }
                };
            l.push(o);
            var a = JSON.parse(n.c.costs);
            if (a && a.length) {
                var r = !0;
                h.moneyType.forEach(function (t) {
                    t[0] == a[0][0] && t[1] == a[0][1] && (r = !1)
                }), r && h.moneyType.push([a[0][0], a[0][1]])
            }
        }), l.sort(function (t, e) {
            return t.isFull == e.isFull ? t.data.displayPriority === e.data.displayPriority ? t.data.id - e.data.id : t.data.displayPriority - e.data.displayPriority : t.isFull ? -1 : 1
        });
        for (var r = 1, p = [], u = 0, d = l; u < d.length; u++) {
            var g = d[u];
            p.push(g), r % 9 == 0 ? (a.push({
                list_items: p
            }), p = []) : r >= l.length && a.push({
                list_items: p
            }), ++r
        }
        this.collection_list.replaceAll(a)
    }, s.prototype.perClose = function () {}, s.HERODATA = {
        code: 41100065,
        modell: "hero_065_03",
        isStatic: !0
    }, s);

    function s(t) {
        var e = o.call(this) || this;
        return e.moneyType = [], e.pageNumber = 0, e.skinName = "ShopSkin", e.shopProxy = _.AppFacade.getInstance().retrieveProxy(_.ShopPy.N), e.dungeonEventPointObj = t.dungeonEventPointObj, e
    }
    _.DEPShopUI = n
}(game = game || {}),
function (s) {
    var e, t = (e = s.DungeonEventPoint, __extends(i, e), i.prototype.updateData = function (t) {
        e.prototype.updateData.call(this, t), this.data.vo, this.btn_icon.icon = "shzyj_icon_buming_png"
    }, i.prototype.onEnter = function () {
        var t = this.vo.eventInfo;
        if (t.actualEventId) {
            var e = void 0,
                i = this.vo.eventInfo.result;
            for (var o in i) {
                var n = s.Config.vestageResultConfig()[i[o]];
                if (JSON.parse(n.detail)[0] == t.actualEventId) {
                    e = i[o];
                    break
                }
            }
            null != e && s.AppFacade.getInstance().showSubView(s.DungeonMed.N, s.DungeonMed.SV.RANDOM_RESULT, {
                dungeonEventPointObj: this,
                result: e
            })
        } else s.AppFacade.getInstance().showSubView(s.DungeonMed.N, s.DungeonMed.SV.RANDOM_EVENT, {
            dungeonEventPointObj: this
        })
    }, i);

    function i(t) {
        return e.call(this, t) || this
    }
    s.DEPUnknown = t
}(game = game || {}),
function (i) {
    var o, t = (o = BaseMediator, __extends(n, o), n.prototype.initSubView = function () {
        this.addSubView(n.SV.MATCHING, i.HoldemMatchingView), this.addSubView(n.SV.MAIN, i.HoldemMainView), this.addSubView(n.SV.STATISTICS, i.HoldemStatistics), this.addSubView(n.SV.MODE, i.HoldemModeView), this.addSubView(n.SV.RANK, i.HoldemRankPanel), this.addSubView(n.SV.NOT_ENOUGH, i.HoldemNotEnoughView), this.addSubView(n.SV.BATTLE_RESULT, i.HoldemBattleResultView), this.addSubView(n.SV.HALO, i.HoldemHeroHaloPanel), this.addSubView(n.SV.BOOK, i.HoldemHeroBookView), this.addSubView(n.SV.DETAIL, i.HoldemHeroDetail)
    }, n.prototype.listNotificationInterests = function () {
        return [CN.HOLDEM_STATUS_QUIT, CN.LOGIN_FINAL_DONE, CN.HOLDEM_UPDATE_ROOM_INFO, CN.HOLDEM_UPDATE_MY_INFO, CN.HOLDEM_UPDATE_BARRAGE, CN.HOLDEM_UPDATE_INFO, CN.HOLDEM_STATUS_FIGHT_END, SocketConst.SOCKET_RECONNECT]
    }, Object.defineProperty(n.prototype, "holdemRootView", {
        get: function () {
            return this.getSubView(n.SV.MAIN)
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.handleNotification = function (t) {
        switch (t.getBody(), t.getName()) {
            case CN.HOLDEM_STATUS_QUIT:
                this.hideAllSubView(), this.initAllViewDone = !1, this.resetRoomState(), customui.HoldemPlayerHeadFactory.clear(), this.sendNotification(CN.MAIN_FORCE_UPDATE_BANNER);
                break;
            case CN.HOLDEM_UPDATE_BARRAGE:
            case CN.HOLDEM_STATUS_FIGHT_END:
            case CN.HOLDEM_UPDATE_INFO:
                break;
            case CN.HOLDEM_UPDATE_MY_INFO:
                this.getSubView(n.SV.MATCHING) && this.updateView(n.SV.MATCHING), this.holdemRootView && (this.holdemRootView.updateCards(), this.proxy.curRoomInfo.status != TexanPokerRoomStatus.ChickenDinner && this.holdemRootView.updatePlayerHeads());
                break;
            case CN.HOLDEM_UPDATE_ROOM_INFO:
                if (this.updateRoomStatus(), this.proxy.amIIdle()) this.getSubView(n.SV.MATCHING) ? this.updateView(n.SV.MATCHING) : this.getSubView(n.SV.MAIN) && this.holdemRootView && this.holdemRootView.updateView();
                else {
                    if (this.getSubView(n.SV.MATCHING)) return this.hideSubView(n.SV.MATCHING), void this.showSubView(n.SV.MAIN);
                    this.initAllViewDone && this.holdemRootView && this.holdemRootView && this.holdemRootView.updateView()
                }
                break;
            case SocketConst.SOCKET_RECONNECT:
                (this.getSubView(n.SV.MAIN) || this.getSubView(n.SV.MATCHING)) && this.sendNotification(CN.HOLDEM_STATUS_QUIT);
                break;
            case CN.LOGIN_FINAL_DONE:
                Utils.UnlockMgr.checkPass(MODULE.TexanPoker, !1).allow && this.proxy.SyncUuidInfos()
        }
    }, n.prototype.updateRoomStatus = function () {
        var t = this.proxy.curRoomInfo.status;
        switch (this.log("=当前房间状态====>" + t), t) {
            case TexanPokerRoomStatus.Matched:
            case TexanPokerRoomStatus.Handle:
            case TexanPokerRoomStatus.BattlePrepare:
            case TexanPokerRoomStatus.ChickenDinner:
        }
        this.lastState = t
    }, n.prototype.resetRoomState = function () {
        this.lastState = void 0
    }, n.prototype.onViewCreate = function (t) {
        t == n.SV.MAIN && (this.initAllViewDone = !0)
    }, n.N = "HoldemMed", n.SV = {
        MATCHING: 1,
        MAIN: 2,
        STATISTICS: 3,
        MODE: 4,
        RANK: 5,
        NOT_ENOUGH: 6,
        BATTLE_RESULT: 7,
        HALO: 8,
        BOOK: 9,
        DETAIL: 10
    }, n);

    function n(t) {
        void 0 === t && (t = null);
        var e = o.call(this, n.N, t) || this;
        return e.initAllViewDone = !1, e.proxy = i.GameMVC.holdemPy, e
    }
    i.HoldemMed = t
}(game = game || {}),
function (c) {
    var t = (e.registerAll = function () {
        (new a).register(), (new l).register(), (new d).register(), (new o).register()
    }, e);

    function e() {}
    c.HoldemProcessor = t;
    var i, o = (i = c.ProcessorBase, __extends(n, i), n.prototype.execute = function (t) {
        c.AppFacade.getInstance().retrieveProxy(c.FightPy.N).respBattleInfoP(t.getBody().battleInfo)
    }, n);

    function n() {
        return i.call(this, "texanPoker.TexanPokerBattleInfoP", n) || this
    }
    var s, a = (s = c.ProcessorBase, __extends(r, s), r.prototype.execute = function (t) {
        c.GameMVC.holdemPy.updateRoomInfo(t.getBody().roomInfo)
    }, r);

    function r() {
        return s.call(this, "texanPoker.TexanPokerRoomInfoP", r) || this
    }
    var h, l = (h = c.ProcessorBase, __extends(p, h), p.prototype.execute = function (t) {
        c.GameMVC.holdemPy.updatePlayerInfo(t.getBody().playerInfo)
    }, p);

    function p() {
        return h.call(this, "texanPoker.TexanPokerPlayerInfoP", p) || this
    }
    var u, d = (u = c.ProcessorBase, __extends(g, u), g.prototype.execute = function (t) {
        var e = t.getBody();
        e.battleType || (e.battleType = EBattleType.EBattleTypeTexabPoker);
        for (var i = c.AppFacade.getInstance().retrieveProxy(c.FightPy.N), o = 0, n = e.teams; o < n.length; o++)(r = n[o]).playerId || (c.GameMVC.holdemPy.myInfo.uuid == r.uuid ? r.playerId = c.GameMVC.playerPy.playerInfoVO.playerId : r.playerId = r.uuid);
        if (c.GameMVC.holdemPy.curRoomInfo.mode == TexanPokerMatchType.Normal) {
            for (var s = 0, a = e.teams; s < a.length; s++) {
                var r;
                if ((r = a[s]).camp == EBattleSide.EBattleSideAttack && r.uuid != c.GameMVC.holdemPy.myInfo.uuid) {
                    var h = e.teams[1].camp;
                    e.teams[1].camp = e.teams[0].camp, e.teams[0].camp = h, e.result = e.result == EBattleResult.EBattleResultWin ? EBattleResult.EBattleResultLose : EBattleResult.EBattleResultWin;
                    break
                }
            }
            egret.setTimeout(function () {
                c.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
                    type: e.battleType,
                    ignoreStringWay: !0,
                    isPassive: !0,
                    preloadCB: function () {
                        i.respBattleResultP(e)
                    },
                    doneCB: function () {
                        c.AppFacade.getInstance().sendNotification(CN.HOLDEM_STATUS_FIGHT_END, {
                            uuid: e.battleInfo.uuid
                        })
                    }
                })
            }, this, 0)
        }
    }, g);

    function g() {
        return u.call(this, "texanPoker.TexanPokerBattleResultP", g) || this
    }
}(game = game || {}),
function (n) {
    var t, e = (t = BaseProxy, __extends(i, t), i.prototype.isModeOpen = function (t) {
        if (this.info) {
            if (t == TexanPokerMatchType.Six) return !1;
            var e = Utils.TimerManager.getServerTime(),
                i = this.info.mode2OpenDt(t);
            return e < i.endDt && e > i.startDt
        }
    }, i.prototype.amILeader = function () {
        return !0
    }, i.prototype.cardCode2VO = function (t) {
        for (var e = 0, i = this.myInfo.gameData.cards; e < i.length; e++) {
            var o = i[e];
            if (o.code == t) return o
        }
    }, i.prototype.validBattlePos = function () {
        for (var t = [1, 2, 3, 4, 5, 6], e = 0, i = this.myInfo.gameData.cards; e < i.length; e++) {
            var o = i[e];
            o.isInFormation() && t.splice(t.indexOf(o.pos), 1)
        }
        return t
    }, i.prototype.gamedataIndex2Player = function (t) {
        for (var e = 0, i = this.curRoomInfo.playerList; e < i.length; e++) {
            var o = i[e];
            if (o.gameData.index == t) return o
        }
    }, i.prototype.playerUuid2Player = function (t) {
        for (var e = 0, i = this.curRoomInfo.playerList; e < i.length; e++) {
            var o = i[e];
            if (o.uuid == t) return o
        }
    }, i.prototype.playerUuid2Cards = function (t, e) {
        function i(i) {
            if (i.uuid == t) return e ? {
                value: i.gameData.cards.filter(function (t, e) {
                    return -1 != i.gameData.showCards.indexOf(e)
                })
            } : {
                value: i.gameData.cards
            }
        }
        void 0 === e && (e = !1);
        for (var o = 0, n = this.curRoomInfo.playerList; o < n.length; o++) {
            var s = i(n[o]);
            if ("object" == typeof s) return s.value
        }
    }, Object.defineProperty(i.prototype, "BuyIntegralConf", {
        get: function () {
            return this._buyIntegralConf || (this._buyIntegralConf = JSON.parse(n.Config.constConfig().TexanPokerBuyIntegralConf.constValue)), this._buyIntegralConf
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "MinJoinIntegral", {
        get: function () {
            return this._minJoinIntegral || (this._minJoinIntegral = JSON.parse(n.Config.constConfig().TexanPokerMinJoinIntegral.constValue)), this._minJoinIntegral
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "StartCost", {
        get: function () {
            return this._startCost || (this._startCost = JSON.parse(n.Config.constConfig().TexanPokerStartCost.constValue)), this._startCost
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "MatchInfo", {
        get: function () {
            return this._MatchInfo || (this._MatchInfo = JSON.parse(n.Config.constConfig().TexanPokerMatchInfo.constValue)), this._MatchInfo
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(i.prototype, "TimeConf", {
        get: function () {
            return this._TimeConf || (this._TimeConf = JSON.parse(n.Config.constConfig().TexanPokerTimeConf.constValue)), this._TimeConf
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.amIIdle = function () {
        return !this.myInfo || !this.myInfo.status || this.myInfo.status == TexanPokerRoomStatus.ChickenDinner || this.myInfo.status == TexanPokerRoomStatus.ToMatch || this.myInfo.status == TexanPokerRoomStatus.Matching
    }, i.prototype.isCanJoinTeam = function () {
        return !0
    }, i.prototype.updateInfo = function (t) {
        this.info || (this.info = new n.TP_Info), this.info.update(t), n.AppFacade.getInstance().sendNotification(CN.HOLDEM_UPDATE_INFO)
    }, i.prototype.updatePlayerInfo = function (t, e) {
        void 0 === e && (e = !0), this.myInfo || (this.myInfo = new n.TP_PlayerInfo), this.myInfo.update(t), e && n.AppFacade.getInstance().sendNotification(CN.HOLDEM_UPDATE_MY_INFO)
    }, i.prototype.updateRoomInfo = function (t) {
        if (this.curRoomInfo || (this.curRoomInfo = new n.TP_RoomInfo), this.curRoomInfo.update(t), this.myInfo)
            for (var e = 0, i = this.curRoomInfo.playerList; e < i.length; e++) {
                var o = i[e];
                if (o.uuid == this.myInfo.uuid) {
                    null != o.status && 0 != o.status && (this.myInfo.status = o.status), null != o.gameData.status && (this.myInfo.gameData.status = o.gameData.status);
                    break
                }
            }
        n.AppFacade.getInstance().sendNotification(CN.HOLDEM_UPDATE_ROOM_INFO)
    }, i.prototype.ExitTexanPoker = function (e) {
        Utils.Socket.send("texanPoker", "ExitTexanPoker", {}, !0).then(function (t) {
            e && e()
        }).catch(function () {
            e && e()
        })
    }, i.prototype.StartMatch = function (t, e) {
        var i = this;
        Utils.Socket.send("texanPoker", "StartMatch", {
            mode: t
        }).then(function (t) {
            i.updatePlayerInfo(t.playerInfo), e && e()
        })
    }, i.prototype.CancelMatch = function (e) {
        var i = this;
        Utils.Socket.send("texanPoker", "CancelMatch", {}).then(function (t) {
            i.updatePlayerInfo(t.playerInfo), e && e()
        })
    }, i.prototype.GetTexanPokerInfo = function (e) {
        var i = this;
        Utils.Socket.send("texanPoker", "GetTexanPokerInfo", {}).then(function (t) {
            i.updatePlayerInfo(t.playerInfo, !1), i.updateInfo(t.texanPokerInfo), i.updateRoomInfo(t.roomInfo), e && e()
        })
    }, i.prototype.ChangeFormation = function (t, e) {
        var i = this;
        Utils.Socket.send("texanPoker", "ChangeFormation", {
            cards: t
        }).then(function (t) {
            i.updatePlayerInfo(t.playerInfo), e && e()
        })
    }, i.prototype.AddBetNum = function (t, e) {
        var i = this;
        Utils.Socket.send("texanPoker", "AddBetNum", {
            num: t
        }).then(function (t) {
            i.updatePlayerInfo(t.playerInfo), e && e()
        })
    }, i.prototype.FollorBet = function (e) {
        Utils.Socket.send("texanPoker", "FollorBet", {}).then(function (t) {
            e && e()
        })
    }, i.prototype.Pass = function (e) {
        Utils.Socket.send("texanPoker", "Pass", {}).then(function (t) {
            e && e()
        })
    }, i.prototype.GiveUp = function (e) {
        n.GameMgr.getInstance().showCommonTipsWin({
            commonTips: "确定放弃这把牌局 ？（可以继续观战）",
            source: "holdem_exit_btn",
            cb: !0,
            clickCB: function (t) {
                1 == t.type && Utils.Socket.send("texanPoker", "GiveUp", {}).then(function (t) {
                    e && e()
                })
            }
        })
    }, i.prototype.BuyIntegral = function (t, e, i) {
        var o = this;
        Utils.Socket.send("texanPoker", "BuyIntegral", {
            num: t,
            mode: e
        }).then(function (t) {
            o.updatePlayerInfo(t.playerInfo), i && i(t)
        })
    }, i.prototype.SyncUuidInfos = function () {
        Utils.Socket.send("texanPoker", "SyncUuidInfos", {}).then(function (t) {})
    }, i.prototype.GetBattleRecord = function (e) {
        Utils.Socket.send("texanPoker", "GetBattleRecord", {}).then(function (t) {
            e(t)
        })
    }, i.N = "HoldemPy", i);

    function i() {
        return t.call(this, i.N) || this
    }
    n.HoldemPy = e
}(game = game || {}),
function (e) {
    var o, t = (o = BasePanel, __extends(i, o), i.prototype.onDestroy = function () {
        o.prototype.onDestroy.call(this), this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0)
    }, i.prototype.childrenCreated = function () {
        var e = this;
        o.prototype.childrenCreated.call(this), Utils.ComponentUtils.registerListener(this.btn_fanhui, egret.TouchEvent.TOUCH_TAP, this.onClick, this), this.sl_result.verticalScrollBar.visible = !1, this.sl_result.verticalScrollBar.autoVisibility = !1;
        var t = new eui.List,
            i = new eui.VerticalLayout;
        i.gap = 10, i.paddingBottom = i.paddingTop = 10, i.horizontalAlign = egret.HorizontalAlign.CENTER, t.layout = i, this.sl_result.viewport = t, this.collection = new eui.ArrayCollection, t.dataProvider = this.collection, t.itemRenderer = h, this.proxy.GetBattleRecord(function (t) {
            e.updateView(t)
        })
    }, i.prototype.initRank = function () {
        for (var t = 0, e = this.playerBattleInfos; t < e.length; t++) {
            var i = e[t],
                o = new s(i);
            this.gp_rank.addChild(o), this.uuid2ResultItem[i.uuid] = o, this.playerHeads.push(o)
        }
    }, i.prototype.shift = function () {}, i.prototype.updateView = function (t) {
        var e = this;
        t && (this.records = t.records, this.playerBattleInfos = t.playerBattleInfos, this.initRank(), this.scheId || (this.scheId = egret.setInterval(function () {
            e.shift()
        }, this, 1500), this.shift()))
    }, i.prototype.onClick = function () {
        this.hide()
    }, i);

    function i() {
        var t = o.call(this) || this;
        return t.skinName = "HoldemBattleResultViewSkin", t.proxy = e.GameMVC.holdemPy, t.uuid2ResultItem = {}, t.playerHeads = new Array, t
    }
    e.HoldemBattleResultView = t;
    var n, s = (n = eui.Component, __extends(a, n), a.prototype.childrenCreated = function () {
        n.prototype.childrenCreated.call(this), this.cu_head = customui.PlayerHeadFactory.create(), this.cu_head.scaleX = this.cu_head.scaleY = .9, this.gp_avatar.addChild(this.cu_head), this.updateItem()
    }, a.prototype.updateItem = function (t) {
        t && (this.data = t), this.cu_head.updateData({
            vo: {
                playerId: this.data.uuid,
                avatar: this.data.avatar
            }
        }), this.lb_name.text = this.data.name;
        for (var e = 0, i = this.data.cards; e < i.length; e++) {
            var o = i[e],
                n = customui.BaseItemFactory.create({
                    type: EEntityType.EEntityTypeHero,
                    code: o.code
                });
            n.scaleX = n.scaleY = .5, this.gp_cards.addChild(n)
        }
    }, a.prototype.updatePoint = function (t) {
        this.lb_keyValue.text = (Number(this.lb_keyValue.text) + t).toString()
    }, a.prototype.updateRank = function (t) {
        this.blb_rank.text = t.toString(), t <= 3 ? (this.img_icon.visible = !0, this.img_icon.source = "jjc_icon_pm_" + t + "_png") : this.img_icon.visible = !1
    }, a);

    function a(t) {
        var e = n.call(this) || this;
        return e.skinName = "HoldemBattleResultItemSkin", e.data = t, e
    }
    var r, h = (r = eui.ItemRenderer, __extends(c, r), c.prototype.childrenCreated = function () {
        r.prototype.childrenCreated.call(this)
    }, c.prototype.updateItem = function (t) {
        this.data = t, this.dataChanged()
    }, c.prototype.dataChanged = function () {
        var t = this.data,
            e = this.proxy.playerUuid2Player(t.attackUuid);
        this.lb_name_left.text = e.name;
        var i = this.proxy.playerUuid2Player(t.defenceUuid);
        this.lb_name_right.text = i.name, t.result == EBattleResult.EBattleResultWin ? (this.blb_point_left.text = "(+1)", this.blb_point_left.text = "") : (this.blb_point_right.text = "", this.blb_point_right.text = "(+1)")
    }, c);

    function c() {
        var t = r.call(this) || this;
        return t.skinName = "HoldemBattleResultItemBottomSkin", t.proxy = e.GameMVC.holdemPy, t
    }
}(game = game || {}),
function (s) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), this.initList(), this.activateComponent(), this.initialized = !1, this.gp_content.scaleX = this.gp_content.scaleY = 1, UIActionManager.playUIAction(this.gp_content, 1), this.scroller.addEventListener(egret.Event.CHANGE, function () {
            var t = 1 == e.select ? 1450 : 1790;
            e.list_item.scrollV >= t && (e.list_item.scrollV = t)
        }, this)
    }, e.prototype.guanghuanData = function () {
        function t(t) {
            var i = a[t];
            if (i.haloType == HaloType.TexanPoker) {
                var e = i.type,
                    o = i.subType;
                r[o] || (r[o] = {
                    name: i.name,
                    type: e,
                    subType: o,
                    slot: [],
                    showNum: 0,
                    img: i.img,
                    skillDesc: {},
                    first: !0
                });
                var n = r[o],
                    s = n.slot;
                h.forEach(function (t, e) {
                    !s[e] && i[t] && s.push(i[t])
                }), n.skillDesc[s.length] = i.haloSkillDesc, n.showNum = s.length
            }
        }
        var a = s.Config.heroHaloConfig(),
            r = {},
            h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (var e in a) t(e);
        this.ghDataList = r
    }, e.prototype.initList = function () {
        this.scroller.scrollPolicyV = eui.ScrollPolicy.AUTO;
        var t = new eui.VerticalLayout;
        this.list_item.layout = t, this.list_item.itemRenderer = h, this.list_filter.itemRenderer = g, this.list_filter.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onFilterListItemTap, this)
    }, e.prototype.onFilterListItemTap = function (t) {
        if (this.curFilter && this.curFilter == t.item.data ? this.curFilter = void 0 : this.curFilter = t.item.data, this.select != t.item.data.select) {
            this.select = t.item.data.select;
            var e = this.list_filter.dataProvider;
            for (var i in e.source) {
                var o = e.source[i];
                o == t.item ? o.chosen = !o.chosen : o.chosen = !1
            }
            e.refresh(), this.updateList()
        }
    }, e.prototype.fadeFilterListItemTap = function (t) {
        this.curFilter && this.curFilter == t.item.data ? this.curFilter = void 0 : this.curFilter = t.item.data;
        var e = this.list_filter.dataProvider;
        for (var i in e.source) {
            var o = e.source[i];
            o.data.select == t.item.data.select ? o.chosen = !o.chosen : o.chosen = !1
        }
        e.refresh(), this.updateList()
    }, e.prototype.onListItemTap = function (t) {
        this.log("点击事件:", t);
        var e = t.item.info,
            i = e.code;
        Math.floor(i / 1e7), s.AppFacade.getInstance().retrieveMediator(s.HoldemMed.N).showSubView(s.HoldemMed.SV.DETAIL, {
            vo: e
        })
    }, e.prototype.updateView = function (t) {
        this.params = t, this.targetConfig = this.ITEM_TYPE_CONFIG, this.targetConfig && (this.initialized || (this.initialized = !0, this.guanghuanData(), this.resetFilterAndSorter(), this.fadeFilterListItemTap({
            item: {
                isHero: !0,
                data: this.targetConfig.filterConfig.data[0],
                chosen: !1
            }
        })), this.updateList())
    }, e.prototype.updateList = function () {
        this.targetConfig.filterConfig && this.targetConfig.filterConfig.filterFunc;
        var t = this.targetConfig.sortConfig && this.targetConfig.sortConfig.defaultSortFunc,
            e = this.targetConfig.getAllInfo(this.select),
            i = void 0;
        if (i = 1 == this.select ? this.mapId_1 : this.mapId_2, e) {
            e[1] && (this.gp_empty.visible = !1, this.scroller.visible = !0);
            var o = {};
            if (t)
                for (var n in e) {
                    var s = e[n],
                        a = [];
                    for (var r in s) {
                        var h = s[r];
                        a.push({
                            info: h,
                            get: !0
                        })
                    }
                    o[n] = a, o[n].sort(t)
                }
            var c = [];
            for (var n in o) {
                var l = o[n];
                c.push({
                    data: l,
                    id: n,
                    select: this.select,
                    ghData: this.ghDataList[i[n]]
                })
            }
            this.list_item.dataProvider ? this.list_item.dataProvider.replaceAll(c) : this.list_item.dataProvider = new eui.ArrayCollection(c), this.scroller.stopAnimation(), this.scroller.viewport.scrollV = 0
        } else this.gp_empty.visible = !0, this.scroller.visible = !1
    }, e.prototype.resetFilterAndSorter = function () {
        if (this.targetConfig.filterConfig) {
            this.list_filter.visible = !0, this.curFilter = void 0;
            var e = [];
            "英雄" == this.targetConfig.type || "碎片" == this.targetConfig.type ? (this.targetConfig.filterConfig.data.forEach(function (t) {
                e.push({
                    data: t,
                    chosen: !1,
                    isHero: !0
                })
            }), this.list_filter.x = (this.gp_content.width - (183 * e.length + 15 * (e.length - 1))) / 2 + 15) : (this.targetConfig.filterConfig.data.forEach(function (t) {
                e.push({
                    data: t,
                    chosen: !1,
                    isHero: !1
                })
            }), this.list_filter.x = (this.gp_content.width - (183 * e.length + 15 * (e.length - 1))) / 2), this.list_filter.dataProvider = new eui.ArrayCollection(e)
        } else this.list_filter.visible = !1;
        this.blb_title.text = this.targetConfig.desc
    }, e.prototype.activateComponent = function () {
        var t = this;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this)
    }, e.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.params && this.params.closeCB && this.params.closeCB()
    }, e);

    function e() {
        var t = i.call(this) || this;
        return t.curType = EEntityType.EEntityTypeHero, t.ghDataList = {}, t.select = 1, t.ITEM_TYPE_CONFIG = {
            desc: "图鉴",
            type: "英雄",
            barSource: {
                up: "_btn_yq_m_json.beibao_yeqian_yingxiong_0",
                down: "_btn_yq_m_json.beibao_yeqian_yingxiong_1"
            },
            getAllInfo: function (t) {
                var e = {},
                    i = s.Config.allTPHeroConfig();
                for (var o in i) {
                    var n = i[o];
                    n.isShow && 15 == n.initStar && (1 == t ? (e[n.race] || (e[n.race] = new Array), e[n.race].push(n)) : (e[n.subProfession] || (e[n.subProfession] = new Array), e[n.subProfession].push(n)))
                }
                return e
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
                filterFunc: function (t, e, i) {
                    return !t || t.race == e.race
                }
            },
            sortConfig: {
                data: [{
                    desc: "等级"
                }, {
                    desc: "星级"
                }],
                defaultSortFunc: function (t, e) {
                    var i = t.info,
                        o = e.info;
                    return i.initStar != o.initStar ? i.initStar - o.initStar : i.costNum != o.costNum ? i.costNum - o.costNum : i.race != o.race ? i.race - o.race : i.profession != o.profession ? HERO_SORT_ORDER[o.profession] - HERO_SORT_ORDER[i.profession] : i.code - o.code
                }
            }
        }, t.mapId_1 = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        }, t.mapId_2 = {
            1: 9,
            2: 10,
            3: 11,
            5: 12
        }, t.skinName = "HandBookMainViewSkin", t
    }
    s.HoldemHeroBookView = t;
    var o, a = (o = eui.ItemRenderer, __extends(n, o), n.prototype.childrenCreated = function () {
        this.baseitem = customui.BaseItemFactory.create(), this.baseitem.touchEnabled = !1, this.gp_content.addChild(this.baseitem)
    }, n.prototype.dataChanged = function () {
        var t = this.data.info;
        Math.floor(t.code / 1e7), t.noStar = !0, this.baseitem.updateData({
            vo: t,
            isNotShowStar: !0,
            type: EEntityType.EEntityTypeTexanPokerHero,
            isShowZhongZhu: !0
        }), this.baseitem.blb_level.visible = !1
    }, n);

    function n() {
        var t = o.call(this) || this;
        return t.skinName = "HandBookItemSkin", t
    }
    var r, h = (r = eui.ItemRenderer, __extends(c, r), c.prototype.childrenCreated = function () {
        var t = this;
        r.prototype.childrenCreated.call(this), this.list_items.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this), this.resetGuanghuan(), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            t.data.ghData && (t.gp_gh.visible = !0, t.initGuanghuan())
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            t.resetGuanghuan()
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
            t.resetGuanghuan()
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            t.resetGuanghuan()
        }, this)
    }, c.prototype.initGuanghuan = function () {
        var t = this,
            e = new p;
        e.initItem(function () {
            e.data = t.data.ghData
        }), this.gp_guanhuan.addChild(e)
    }, c.prototype.resetGuanghuan = function () {
        this.gp_gh.visible = !1, this.gp_guanhuan.removeChildren(), !this.data || 502 != this.data.id && 6 != this.data.id || (this.gp_gh.y = 52)
    }, c.prototype.onListItemTap = function (t) {
        egret.log("点击事件:", t);
        var e = t.item.info,
            i = e.code;
        Math.floor(i / 1e7), s.AppFacade.getInstance().retrieveMediator(s.HoldemMed.N).showSubView(s.HoldemMed.SV.DETAIL, {
            vo: e
        })
    }, c.prototype.dataChanged = function () {
        this.list_items.itemRenderer = a, this.lb_guanhuan.textFlow = [{
            text: "显示光环",
            style: {
                underline: !0
            }
        }];
        var t, e = this.data.data,
            i = this.data.id,
            o = (t = 1 == this.data.select ? HeroRaceConfig[i] : HoldemConfig[i]).haoloIcon;
        this.img_tilte_flag.source = o;
        var n = t.name;
        201 == i && (n = "元素"), 202 == i && (n = "魔导"), this.lb_name.text = n, this.list_items.dataProvider = new eui.ArrayCollection(e)
    }, c);

    function c(t) {
        var e = r.call(this) || this;
        return e.isGuanghuan = !1, e.skinName = "heroBookSortItemSkin", e.params = t, e
    }
    s.HoldemHeroBookSortItem = h;
    var l, p = (l = eui.ItemRenderer, __extends(u, l), u.prototype.childrenCreated = function () {
        l.prototype.childrenCreated.call(this);
        for (var t = 0; t < 6; t++) this.gp_condIcon.addChild(new eui.Image)
    }, u.prototype.initItem = function (t) {
        for (var e = 0; e < 6; e++) this.gp_condIcon.addChild(new eui.Image);
        t && t()
    }, u.prototype.dataChanged = function () {
        var n = this;
        UIActionManager.setAbsGrey(this.img_haloIcon, 0 == this.data.showNum), this.img_haloIcon.source = this.data.img + "_png", this.lb_name.text = this.data.name;
        for (var t = this.data.type, e = this.data.slot, i = 0; i < 6; i++) {
            var o = e[i],
                s = this.gp_condIcon.$children[i];
            o ? (s.visible = !0, s.source = t == HeroHaloType.Race ? HeroRaceConfig[o].raceIconBig : HoldemConfig[o].icon, UIActionManager.setAbsGrey(s, i >= this.data.showNum)) : s.visible = !1
        }
        this.gp_line.removeChildren();
        var a = this.data.skillDesc,
            r = [],
            h = Object.keys(a);
        h.forEach(function (t, e) {
            var i = a[t];
            if ("" != i && (r.push({
                    text: "(" + t + ") " + i,
                    style: {
                        textColor: Number(t) <= n.data.showNum ? 8060672 : 8553090
                    }
                }), e != h.length - 1 && r.push({
                    text: "\n"
                })), e != h.length - 1) {
                var o = new eui.Image("yingxiong_img_fengexian_png");
                o.x = 44.2 * Number(t) + 26 * (Number(t) - 1 + .5), n.gp_line.addChild(o)
            }
        }), this.lb_desc.textFlow = r, this.img_line.visible = !this.data.first
    }, u);

    function u() {
        var t = l.call(this) || this;
        return t.skinName = "ZzqHeroHaloPanel_HaloItem", t
    }
    var d, g = (d = eui.ItemRenderer, __extends(_, d), _.prototype.childrenCreated = function () {
        d.prototype.childrenCreated.call(this)
    }, _.prototype.dataChanged = function () {
        this.data.isHero && (this.width = 183, this.scaleX = .9, this.scaleY = .9), this.chosen = this.data.chosen || !1, this.img_icon.source = this.data.data.icon, this.img_chosen.source = this.data.data.chosenImg, this.setChosen(this.chosen)
    }, _.prototype.setChosen = function (t) {
        this.chosen = t, this.img_chosen.visible = this.chosen
    }, _);

    function _() {
        var t = d.call(this) || this;
        return t.skinName = "HeroBookTapItemSkin", t
    }
    s.HoldemHeroBookTapItem = g
}(game = game || {}),
function (d) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, i.prototype.updateView = function (t, e) {
        if (t && t.vo) {
            this.vo = t.vo;
            var i = d.Config.allTPHeroConfig()[this.vo.code];
            this.lb_name.text = i.name, this.img_profession.source = HoldemConfig[i.subProfession].icon, this.img_race.source = HeroRaceConfig[i.race].raceIcon, this.gp_head.removeChildren();
            var o = customui.BaseItemFactory.create();
            this.gp_head.addChild(o), o.updateData({
                vo: t.vo,
                type: EEntityType.EEntityTypeTexanPokerHero,
                isShowZhongZhu: !0
            });
            var n = [],
                s = JSON.parse(i.baseAttr);
            n = d.GeneralConfig.AttrAddAttr(n, s), this.blb_attack.text = d.GeneralConfig.getAttrValue(n[0][1]), this.blb_HP.text = d.GeneralConfig.getAttrValue(n[1][1]), this.blb_defense.text = d.GeneralConfig.getAttrValue(n[2][1]), this.blb_speed.text = d.GeneralConfig.getAttrValue(n[3][1]), this.lb_heroInfo.text = i.desc;
            var a = [];
            0 != i.posSkill1 && a.push(i.posSkill1), 0 != i.posSkill2 && a.push(i.posSkill2), 0 != i.posSkill3 && a.push(i.posSkill3), 0 != i.actSkill && a.push(i.actSkill);
            var r = [this.cu_skill0, this.cu_skill1, this.cu_skill2, this.cu_skill3],
                h = [this.lb_skillname0, this.lb_skillname1, this.lb_skillname2, this.lb_skillname3],
                c = [this.lb_skillshow0, this.lb_skillshow1, this.lb_skillshow2, this.lb_skillshow3],
                l = [this.img_type0, this.img_type1, this.img_type2, this.img_type3],
                p = [this.gp_skill0, this.gp_skill1, this.gp_skill2, this.gp_skill3];
            for (var u in r) a[u] ? (p[u].visible = !0, this.updateSkillInfo(a[u], r[u], h[u], c[u], l[u], p[u])) : p[u].visible = !1
        } else this.hide()
    }, i.prototype.updateSkillInfo = function (t, e, i, o, n, s) {
        var a = d.Config.skillBaseConfig()[t];
        i.text = a.name, o.text = a.desc, 1 == a.action ? n.source = "zzq_icon_pu_png" : 2 == a.action ? n.source = "zzq_icon_zhu_png" : 3 == a.action && (n.source = "zzq_icon_bei_png"), e.updateItem({
            code: t,
            notNeedLevel: !0
        })
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "HoldemHeroDetailSkin", t
    }
    d.HoldemHeroDetail = t
}(game = game || {}),
function (p) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), this.list_item.itemRenderer = n
    }, i.prototype.updateView = function (t) {
        var a, e = t && t.codeList;

        function i(t) {
            var i = h[t];
            if (i.haloType == HaloType.TexanPoker) {
                var e = i.type,
                    o = i.subType;
                r[o] || (r[o] = {
                    name: i.name,
                    type: e,
                    subType: o,
                    slot: [],
                    showNum: 0,
                    img: i.img,
                    skillDesc: {}
                });
                var n = r[o],
                    s = n.slot;
                c.forEach(function (t, e) {
                    !s[e] && i[t] && s.push(i[t])
                }), (!a || 0 <= a.indexOf(i.id)) && (n.showNum = s.length), n.skillDesc[s.length] = i.haloSkillDesc
            }
        }
        e && (a = this.heroPy.getActivatedHaloId(e, void 0, !0));
        var r = {},
            h = p.Config.heroHaloConfig(),
            c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (var o in h) i(o);
        var n = [];
        for (var s in r) {
            var l = r[s];
            n.push(l)
        }
        n.sort(function (t, e) {
            var i = 0 < t.showNum,
                o = 0 < e.showNum;
            return i != o ? o ? 1 : -1 : t.subType - e.subType
        }), n[0].first = !0, this.list_item.dataProvider = new eui.ArrayCollection(n)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.heroPy = p.AppFacade.getInstance().retrieveProxy(p.HeroPy.N), t.skinName = "HeroHaloSkin", t
    }
    p.HoldemHeroHaloPanel = t;
    var o, n = (o = eui.ItemRenderer, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this);
        for (var t = 0; t < 6; t++) this.gp_condIcon.addChild(new eui.Image)
    }, s.prototype.initItem = function (t) {
        for (var e = 0; e < 6; e++) this.gp_condIcon.addChild(new eui.Image);
        t && t()
    }, s.prototype.dataChanged = function () {
        var n = this;
        UIActionManager.setAbsGrey(this.img_haloIcon, 0 == this.data.showNum), this.img_haloIcon.source = this.data.img + "_png", this.lb_name.text = this.data.name;
        for (var t = this.data.type, e = this.data.slot, i = 0; i < 6; i++) {
            var o = e[i],
                s = this.gp_condIcon.$children[i];
            o ? (s.visible = !0, s.source = t == HeroHaloType.Race ? HeroRaceConfig[o].raceIconBig : HoldemConfig[o].icon, UIActionManager.setAbsGrey(s, i >= this.data.showNum)) : s.visible = !1
        }
        this.gp_line.removeChildren();
        var a = this.data.skillDesc,
            r = [],
            h = Object.keys(a);
        h.forEach(function (t, e) {
            var i = a[t];
            if ("" != i && (r.push({
                    text: "(" + t + ") " + i,
                    style: {
                        textColor: Number(t) <= n.data.showNum ? 8060672 : 8553090
                    }
                }), e != h.length - 1 && r.push({
                    text: "\n"
                })), e != h.length - 1) {
                var o = new eui.Image("yingxiong_img_fengexian_png");
                o.x = 44.2 * Number(t) + 26 * (Number(t) - 1 + .5), n.gp_line.addChild(o)
            }
        }), this.lb_desc.textFlow = r, this.img_line.visible = !this.data.first
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqHeroHaloPanel_HaloItem", t
    }
    p.HoldemHeroHaloPanel_HaloItem = n
}(game = game || {}),
function (f) {
    var i, t = (i = BaseFull, __extends(e, i), e.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.gp_add_compoent_touch.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.gpCoinTouchBegin, this), this.gp_add_compoent_touch.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.gpCoinTouchMove, this), this.gp_add_compoent_touch.removeEventListener(egret.TouchEvent.TOUCH_END, this.gpCoinTouchEnd, this), this.gp_add_compoent_touch.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.gpCoinTouchOutSide, this), this.countDownScheId && (egret.clearInterval(this.countDownScheId), this.countDownScheId = void 0), this.delayExitScheId && (egret.clearTimeout(this.delayExitScheId), this.delayExitScheId = void 0)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), DragonBoneTools.playOnce({
            loop: !0,
            z: 1,
            y: 341,
            effectName: "common_ui_mydz_01",
            parent: this.gp_add_compoent
        }), DragonBoneTools.create("common_activity_naoling_1", function (t) {
            e.ed_curBetting = t, e.ed_curBetting.scaleX = e.ed_curBetting.scaleY = 1.3, e.ed_curBetting.x = e.ed_curBetting.y = -2.5, e.ed_curBetting.animation.play("common_activity_naoling_1", 0), e.gp_count_down.addChildAt(e.ed_curBetting, 0)
        }), Utils.ComponentUtils.registerListener(this.btn_fanhui, egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.curRoomInfo.status == TexanPokerRoomStatus.ChickenDinner ? e.exit() : f.GameMgr.getInstance().showCommonTipsWin({
                commonTips: "确定托管并临时退出本局吗？",
                source: "holdem_exit_btn",
                cb: !0,
                clickCB: function (t) {
                    1 == t.type && e.exit()
                }
            })
        }, this), Utils.ComponentUtils.registerListener(this.btn_add, egret.TouchEvent.TOUCH_TAP, function () {
            e.switchCoinCompoent(!0)
        }, this), Utils.ComponentUtils.registerListener(this.rt_dark, egret.TouchEvent.TOUCH_TAP, function () {
            e.switchCoinCompoent()
        }, this), Utils.ComponentUtils.registerListener(this.gp_coin_quick3, egret.TouchEvent.TOUCH_TAP, function () {
            e.coinClickQuick(3, e.gp_coin_quick3)
        }, this), Utils.ComponentUtils.registerListener(this.gp_coin_quick2, egret.TouchEvent.TOUCH_TAP, function () {
            e.coinClickQuick(2, e.gp_coin_quick2)
        }, this), Utils.ComponentUtils.registerListener(this.gp_coin_quick1, egret.TouchEvent.TOUCH_TAP, function () {
            e.coinClickQuick(1, e.gp_coin_quick1)
        }, this), Utils.ComponentUtils.registerListener(this.btn_formation, egret.TouchEvent.TOUCH_TAP, this.popFormation, this), Utils.ComponentUtils.registerListener(this.btn_abandon, egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting ? e.proxy.GiveUp() : Utils.MsgUtils.addMidMsg("还没轮到我")
        }, this), Utils.ComponentUtils.registerListener(this.btn_follow, egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting ? e.proxy.FollorBet() : Utils.MsgUtils.addMidMsg("还没轮到我")
        }, this), Utils.ComponentUtils.registerListener(this.btn_pass, egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting ? e.proxy.Pass() : Utils.MsgUtils.addMidMsg("还没轮到我")
        }, this), this.cb_follow.addEventListener(egret.Event.CHANGE, this.cbFollowChange, this), this.cb_pass.addEventListener(egret.Event.CHANGE, this.cbPassChange, this), this.cb_abandon.addEventListener(egret.Event.CHANGE, this.cbAbandonChange, this), this.gp_add_compoent_touch.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.gpCoinTouchBegin, this), this.gp_add_compoent_touch.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.gpCoinTouchMove, this), this.gp_add_compoent_touch.addEventListener(egret.TouchEvent.TOUCH_END, this.gpCoinTouchEnd, this), this.gp_add_compoent_touch.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.gpCoinTouchOutSide, this)
    }, e.prototype.switchCoinCompoent = function (t) {
        var n = this;

        function e(t, e, i, o) {
            o.text = t + "x" + e, o.parent.visible = n.proxy.myInfo.gameData.integral >= t * i
        }
        void 0 === t && (t = !1), t && this.gp_add_compoent.visible && 0 < Number(this.blb_coin_num.text) && (this.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting ? this.proxy.AddBetNum(Number(this.blb_coin_num.text)) : Utils.MsgUtils.addMidMsg("还没轮到我")), this.gp_add_compoent.visible = !this.gp_add_compoent.visible, this.rt_dark.visible = this.gp_add_compoent.visible, this.btn_add.label = this.gp_add_compoent.visible ? "确 定" : "加 额", this.gp_add_compoent.visible && this.selectCoin(0), 0 == this.proxy.curRoomInfo.maxBetNum ? (e(4, "底额", this.proxy.StartCost, this.blb_coin_quick3), e(3, "底额", this.proxy.StartCost, this.blb_coin_quick2), e(2, "底额", this.proxy.StartCost, this.blb_coin_quick1)) : (e(3, "底池", this.proxy.curRoomInfo.totalIntegral, this.blb_coin_quick3), e(2, "底池", this.proxy.curRoomInfo.totalIntegral, this.blb_coin_quick2), e(1, "底池", this.proxy.curRoomInfo.totalIntegral, this.blb_coin_quick1)), this.gp_add_compoent.visible ? this.gp_root.setChildIndex(this.gp_cards, this.gp_root.getChildIndex(this.rt_dark) - 1) : this.gp_root.setChildIndex(this.gp_cards, this.gp_root.getChildIndex(this.btn_add))
    }, e.prototype.exit = function (t) {
        var e = this;

        function i() {
            e.mediator.sendNotification(CN.HOLDEM_STATUS_QUIT), f.MainJumpConfig.jumpTo()
        }
        void 0 === t && (t = !1), this.proxy.curRoomInfo.status != TexanPokerRoomStatus.ChickenDinner || this.happenBattle ? t ? this.proxy.GiveUp(function () {
            i()
        }) : i() : this.proxy.ExitTexanPoker(function () {
            i()
        })
    }, e.prototype.initPlayerHead = function (n) {
        var s = this,
            t = this.proxy.curRoomInfo.playerList.slice();
        t.sort(function (t, e) {
            return t.gameData.index - e.gameData.index
        });
        var e = 1;
        n == TexanPokerMatchType.Six && (e = 3);
        var i = 0;
        t.forEach(function (t, e) {
            t.uuid == s.proxy.myInfo.uuid && (i = e)
        });
        var o = e - i;
        if (0 < o) t = (a = t.splice(t.length - o)).concat(t);
        else if (o < 0) {
            var a = t.splice(0, -o);
            t = t.concat(a)
        }
        t.forEach(function (t, e) {
            var i = customui.HoldemPlayerHeadFactory.create(t);
            i.addTapEvent(function (t) {
                s.playerHeadClick(t)
            }), s.uuid2PlayerHead[t.uuid] = i, s.gp_players.addChild(i);
            var o = s.POS[n][e];
            i.x = o[0], i.y = o[1]
        }), this.countDownScheId = egret.setInterval(this.countDownUpdate, this, 1e3), this.gp_count_down.parent.setChildIndex(this.gp_count_down, -1)
    }, e.prototype.countDownUpdate = function () {
        var t = this.proxy.TimeConf[0] - (Utils.TimerManager.getServerTime() - this.proxy.curRoomInfo.lOperDt);
        0 <= t && (this.blb_count_down.text = t.toString(), this.ed_curBetting && (t <= 5 ? "common_activity_naoling_2" != this.ed_curBetting.animation.lastAnimationName && this.ed_curBetting.animation.play("common_activity_naoling_2", 0) : "common_activity_naoling_1" != this.ed_curBetting.animation.lastAnimationName && this.ed_curBetting.animation.play("common_activity_naoling_1", 0))), this.battleCountDown--, 0 < this.battleCountDown && this.battleCountDown <= 5 && this.battleCountDown % 2 == 1 && Utils.MsgUtils.addMidMsg("战斗将在" + this.battleCountDown + "秒后开始")
    }, e.prototype.popFormation = function () {
        var a = this,
            e = [];
        this.proxy.myInfo.gameData.cards.forEach(function (t) {
            t.isInFormation() && e.push(t)
        }), f.AppFacade.getInstance().showSubView(f.HeroMediator.N, f.HeroMediator.SV.FORMATION, {
            battlePosInfoByCode: e,
            cb: function (t) {
                for (var e in t) {
                    var i = t[e];
                    if (i)
                        for (var o = 0, n = a.proxy.myInfo.gameData.cards; o < n.length; o++) {
                            var s = n[o];
                            if (s.code == i.info.code) {
                                s.pos = Number(e);
                                break
                            }
                        }
                }
                a.proxy.ChangeFormation(a.proxy.myInfo.gameData.cards)
            }
        })
    }, e.prototype.updateView = function (t, e) {
        void 0 === e && (e = !1), e && this.initPlayerHead(this.proxy.curRoomInfo.mode), this.updateRoomInfo(), this.updateCards()
    }, e.prototype.updateRoomInfo = function () {
        for (var r = this, t = 0, e = this.proxy.curRoomInfo.integralPool; t < e.length; t++) {
            var i = e[t],
                o = this.num2PoolItem[i.num];
            o ? o.update(i) : (o = new m(i), this.gp_pool_all.addChild(o), this.num2PoolItem[i.num] = o)
        }
        switch (this.proxy.curRoomInfo.status) {
            case TexanPokerRoomStatus.Handle:
                this.updatePlayerHeads(), this.updateButton();
                for (var n = 0, s = this.proxy.curRoomInfo.playerList; n < s.length; n++) {
                    var a = s[n];
                    if (a.gameData.status == TexanPokerPlayerBetStatus.Betting) {
                        1 < this.proxy.curRoomInfo.curRound ? this.lb_tips.text = "第" + (this.proxy.curRoomInfo.curRound - 1) + "轮-" + a.gameData.index + "桌操作中" : this.lb_tips.text = "摸牌阶段-" + a.gameData.index + "桌操作中";
                        break
                    }
                }
                for (var h = 0, c = this.proxy.curRoomInfo.roundInfo; h < c.length; h++) {
                    var l = c[h],
                        p = this["gp_round_" + (l.roundNum - 1)];
                    if (p) {
                        p.visible = !0;
                        var u = l.cards,
                            d = p.$children[1],
                            g = p.$children[2];
                        d.touchEnabled = g.touchEnabled = !1, d.updateData({
                            type: EEntityType.EEntityTypeTexanPokerHero,
                            code: u[0]
                        }), g.updateData({
                            type: EEntityType.EEntityTypeTexanPokerHero,
                            code: u[1]
                        }), d.visible || g.visible || (d.visible = g.visible = !0, UIActionManager.drop3D(d, HOLDER_CONST.SHINE_IN, HOLDER_CONST.SHINE_IN_HOLD, HOLDER_CONST.SHINE_IN_RESET), UIActionManager.drop3D(g, HOLDER_CONST.SHINE_IN, HOLDER_CONST.SHINE_IN_HOLD, HOLDER_CONST.SHINE_IN_RESET))
                    }
                }
                break;
            case TexanPokerRoomStatus.BattlePrepare:
                this.updatePlayerHeads(), this.updateButton();
                var _ = Math.max(0, this.proxy.TimeConf[1] - (Utils.TimerManager.getServerTime() - this.proxy.curRoomInfo.lOperDt));
                Utils.MsgUtils.addMidMsg("战斗将在" + _ + "秒后开始，请进行布阵"), this.lb_tips.text = "战斗准备中，点击头像可选择或取消上阵英雄", this.popFormation(), this.battleCountDown = _, this.happenBattle = !0;
                break;
            case TexanPokerRoomStatus.ChickenDinner:
                this.lb_tips.text = "当前牌局已结束", this.gp_pool.parent.setChildIndex(this.gp_pool, -1), f.GameMVC.fightPy.addDelayCBAfterFightExit(function () {
                    function t() {
                        r.updatePlayerHeads(), r.delayToExit()
                    }
                    var e = !1;
                    for (var i in r.num2PoolItem) {
                        var o = r.num2PoolItem[i];
                        if (o.integralPoolVO.winner) {
                            var n = r.uuid2PlayerHead[o.integralPoolVO.winner],
                                s = n.parent.localToGlobal(n.x + n.width / 2, n.y + n.height / 2),
                                a = o.parent.globalToLocal(s.x, s.y);
                            e ? o.flyTo(a.x, a.y) : o.flyTo(a.x, a.y, t), e = !0, delete r.numChildren[i]
                        }
                    }
                    f.GameMVC.fightPy.queueExceExitCB()
                }, "HOLDEM_FLY_POOL", void 0, this.happenBattle);
                break;
            default:
                this.lb_tips.text = "房间状态：" + this.proxy.curRoomInfo.status
        }
    }, e.prototype.delayToExit = function () {
        var t = this;
        this.happenBattle = !1, this.delayExitScheId && (egret.clearInterval(this.delayExitScheId), this.delayExitScheId = void 0), this.mediator.getSubView(f.HoldemMed.SV.MAIN) && (Utils.MsgUtils.addMidMsg("10秒后自动离开房间"), this.delayExitScheId = egret.setTimeout(function () {
            t.mediator.sendNotification(CN.HOLDEM_STATUS_QUIT), t.mediator.showSubView(f.HoldemMed.SV.MATCHING)
        }, this, 1e4))
    }, e.prototype.updateCards = function () {
        var s = this;
        for (var t in this.index2HeroBI) this.index2HeroBI[t].data.empty || (this.index2HeroBI[t].data = void 0);
        for (var t in this.proxy.myInfo.gameData.cards.forEach(function (t, e) {
                var i = s.index2HeroBI[e];
                if (!i) {
                    (i = customui.BaseItemFactory.create()).scaleX = i.scaleY = .8, i.anchorOffsetX = i.scaleX * i.width / 2, i.anchorOffsetY = i.scaleY * i.height / 2, i.visible = !1;
                    var o = s.index2XY(e);
                    i.x = o[0], i.y = o[1], egret.setTimeout(function () {
                        i.visible = !0, UIActionManager.drop3D(i, HOLDER_CONST.SHINE_IN, HOLDER_CONST.SHINE_IN_HOLD, HOLDER_CONST.SHINE_IN_RESET)
                    }, s, e * (HOLDER_CONST.SHINE_IN_HOLD / 2)), s.gp_cards.addChild(i), s.index2HeroBI[e] = i
                }
                if (i.data && !i.data.empty && i.data.code && i.data.code != t.code) {
                    var n = f.Config.allHeroConfig()[i.data.code];
                    f.Config.allHeroConfig()[t.code].initStar > n.initStar && UIActionManager.shineIn(i, void 0, void 0, HOLDER_CONST.SHINE_IN)
                }
                i.updateData({
                    type: EEntityType.EEntityTypeTexanPokerHero,
                    code: t.code
                }), t.isInFormation() ? (i.img_custom_tag.source = "common_img_gouxuan_png", i.img_custom_tag.scaleX = i.img_custom_tag.scaleY = .5, i.img_custom_tag.visible = !0) : (i.img_custom_tag.source = "", i.img_custom_tag.visible = !1), i.addTapEvent(function () {
                    s.onCardClick(t.code)
                }), i.data = t
            }), this.index2HeroBI) {
            var e = this.index2HeroBI[t];
            !e.data && e.parent && (e.parent.removeChild(e), delete this.index2HeroBI[t])
        }
    }, e.prototype.updatePlayerHeads = function () {
        this.gp_count_down.visible = !1, Utils.TimerManager.getServerTime();
        for (var t = 0, e = this.proxy.curRoomInfo.playerList; t < e.length; t++) {
            var i = e[t],
                o = this.uuid2PlayerHead[i.uuid];
            i.gameData.status == TexanPokerPlayerBetStatus.Betting ? (this.gp_count_down.x = o.x + 82, this.gp_count_down.y = o.y + 60, this.gp_count_down.visible = !0, o.lb_status.visible = !1, o.cu_ph.alpha = 1) : (o.lb_status.visible = !0, o.cu_ph.alpha = .5), o.updateData(i)
        }
    }, e.prototype.playerHeadClick = function (t) {}, e.prototype.onCardClick = function (t) {
        if (this.proxy.cardCode2VO(t).isInFormation()) {
            for (var e = 7, i = 0, o = this.proxy.myInfo.gameData.cards; i < o.length; i++) {
                var n = o[i];
                e = Math.max(e, n.pos)
            }
            for (var s = 0, a = this.proxy.myInfo.gameData.cards; s < a.length; s++)(n = a[s]).code == t && (n.pos = e + 1)
        } else {
            var r = this.proxy.validBattlePos();
            if (r.length <= 0) return void Utils.MsgUtils.addMidMsg("只能上阵6个英雄");
            for (var h = 0, c = this.proxy.myInfo.gameData.cards; h < c.length; h++)(n = c[h]).code == t && (n.pos = r.shift())
        }
        this.proxy.ChangeFormation(this.proxy.myInfo.gameData.cards)
    }, e.prototype.gpCoinTouchBegin = function (t) {
        t.currentTarget == t.target && this.gpCoinTouchMove(t)
    }, e.prototype.gpCoinTouchMove = function (t) {
        var e = this.gp_add_compoent.globalToLocal(t.stageX, t.stageY);
        this.selectCoinPercent((this.gp_add_compoent.height - e.y) / this.gp_add_compoent.height)
    }, e.prototype.gpCoinTouchEnd = function (t) {
        this.gpCoinTouchMove(t)
    }, e.prototype.gpCoinTouchOutSide = function () {}, e.prototype.selectCoinPercent = function (t) {
        this.selectCoin(this.proxy.myInfo.gameData.integral * t), this.checkCoinClickStatus()
    }, e.prototype.selectCoin = function (t) {
        var e = Math.floor(Math.min(this.proxy.myInfo.gameData.integral, Math.max(2 * (this.proxy.curRoomInfo.maxBetNum || this.proxy.StartCost), t)));
        this.blb_coin_num.text = e.toString();
        var i = Math.floor(e / this.proxy.myInfo.gameData.integral * this.gp_coin.numChildren);
        0 != e && 0 == i && (i = 1), this.gp_coin.$children.forEach(function (t, e) {
            t.visible = e < i
        }), e == this.proxy.myInfo.gameData.integral ? this.img_add_quane.visible = !0 : this.img_add_quane.visible = !1
    }, e.prototype.index2XY = function (t) {
        return [t % HOLDER_CONST.LINE_EACH_COUNT * 99.5 + 25, 94.5 * Math.floor(t / HOLDER_CONST.LINE_EACH_COUNT) + 40]
    }, e.prototype.coinClickQuick = function (t, e) {
        function i(t, e) {
            o.selectCoin(t * e)
        }
        var o = this;
        0 == this.proxy.curRoomInfo.maxBetNum ? i([2, 3, 4][t - 1], this.proxy.StartCost) : i([1, 2, 3][t - 1], this.proxy.curRoomInfo.totalIntegral), this.checkCoinClickStatus(e)
    }, e.prototype.checkCoinClickStatus = function (t) {
        for (var e = 1; e <= 3; e++) {
            var i = this["gp_coin_quick" + e];
            if (i) {
                var o = i.$children[0];
                o.source = i == t ? "mydz_img_cihaodi2_png" : "mydz_img_cihaodi_png"
            }
        }
    }, e.prototype.uniqueCBSelected = function (t) {
        0 != t.selected && (t == this.cb_follow ? this.cb_abandon.selected = this.cb_pass.selected = !1 : t == this.cb_pass ? this.cb_abandon.selected = this.cb_follow.selected = !1 : t == this.cb_abandon && (this.cb_pass.selected = this.cb_follow.selected = !1))
    }, e.prototype.cbFollowChange = function () {
        this.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting && this.cb_follow.selected && this.proxy.FollorBet(), this.uniqueCBSelected(this.cb_follow)
    }, e.prototype.cbPassChange = function () {
        this.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting && this.cb_pass.selected && this.proxy.Pass(), this.uniqueCBSelected(this.cb_pass)
    }, e.prototype.cbAbandonChange = function () {
        this.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting && this.cb_abandon.selected && this.proxy.GiveUp(), this.uniqueCBSelected(this.cb_abandon)
    }, e.prototype.updateButton = function () {
        if (this.proxy.myInfo.gameData.status != TexanPokerPlayerBetStatus.Betting && this.gp_add_compoent.visible && this.switchCoinCompoent(), this.proxy.curRoomInfo.status != TexanPokerRoomStatus.BattlePrepare && this.proxy.curRoomInfo.status != TexanPokerRoomStatus.ChickenDinner && this.proxy.myInfo.gameData.status != TexanPokerPlayerBetStatus.GiveUp) {
            var t, e = this.proxy.myInfo.gameData.index - 1;
            0 == e && (e = this.proxy.curRoomInfo.playerList.length);
            for (var i = this.proxy.curRoomInfo.playerList.length; !t && 0 <= i;)(t = this.proxy.gamedataIndex2Player(e)) ? (t.gameData.status == TexanPokerPlayerBetStatus.GiveUp && (t = void 0), e--) : e = this.proxy.curRoomInfo.playerList.length, --i < 0 && (egret.log("texanPoker没有上一个有效操作的玩家，所以应该自己是第一轮第一个"), t = this.proxy.myInfo);
            if (egret.log("texanPoker上一个有效操作的玩家", t.gameData.index, t.name, TP_PlayerBetStatus2Name[t.gameData.status]), this.proxy.myInfo.gameData.status == TexanPokerPlayerBetStatus.Betting) {
                var o = !1;
                t.gameData.status == TexanPokerPlayerBetStatus.Add || t.gameData.status == TexanPokerPlayerBetStatus.Follor ? this.cb_follow.selected && (o = !0, this.proxy.FollorBet()) : this.cb_pass.selected && (o = !0, this.proxy.Pass()), this.cb_abandon.selected && (o = !0, this.proxy.GiveUp()), o ? this.cb_follow.selected = this.cb_pass.selected = this.cb_abandon.selected = !1 : (this.switchOpprStyle(this.gp_follow, !0), this.switchOpprStyle(this.gp_pass, !0), this.switchOpprStyle(this.gp_abandon, !0), t.gameData.status == TexanPokerPlayerBetStatus.Add || t.gameData.status == TexanPokerPlayerBetStatus.Follor ? this.btn_pass.touchEnabled = !1 : t.gameData.status != TexanPokerPlayerBetStatus.GiveUp && t.gameData.status != TexanPokerPlayerBetStatus.Skip && t.gameData.status != TexanPokerPlayerBetStatus.None || (this.btn_follow.touchEnabled = !1), t.uuid == this.proxy.myInfo.uuid && 1 == this.proxy.curRoomInfo.curRound && (this.btn_follow.touchEnabled = !1), UIActionManager.setAbsGrey(this.btn_pass, !this.btn_pass.touchEnabled), UIActionManager.setAbsGrey(this.btn_follow, !this.btn_follow.touchEnabled))
            } else this.switchOpprStyle(this.gp_follow, !1), this.switchOpprStyle(this.gp_pass, !1), this.switchOpprStyle(this.gp_abandon, !1), UIActionManager.setAbsGrey(this.btn_pass, !1), UIActionManager.setAbsGrey(this.btn_follow, !1);
            this.proxy.myInfo.isAllIn() && (this.btn_add.visible = !1, this.gp_follow.visible = !1, this.gp_pass.visible = !1, this.gp_abandon.visible = !1)
        } else this.btn_add.visible = this.gp_follow.visible = this.gp_abandon.visible = this.gp_pass.visible = !1
    }, e.prototype.switchOpprStyle = function (t, e) {
        var i;
        void 0 === e && (e = !1), e ? ((i = t.$children[0]).touchEnabled = !0, i.label = "" + i.label.trim(), t.$children[1].visible = !1) : ((i = t.$children[0]).touchEnabled = !1, i.label = "     " + i.label.trim(), t.$children[1].visible = !0)
    }, e);

    function e() {
        var t, e = i.call(this) || this;
        return e.addScale = Utils.DeviceUtils.additionScale(), e.happenBattle = !1, e.battleCountDown = 0, e.POS = ((t = {})[TexanPokerMatchType.Normal] = [
            [279, 5],
            [279, 723]
        ], t[TexanPokerMatchType.Six] = [
            [279, 5],
            [557, 204],
            [557, 526],
            [279, 723],
            [0, 526],
            [0, 204]
        ], t), e.skinName = "HoldemMainSkin", e.proxy = f.AppFacade.getInstance().retrieveProxy(f.HoldemPy.N), e.uuid2PlayerHead = {}, e.index2HeroBI = {}, e.num2PoolItem = {}, Utils.DebugUtils.isDebug && (window._holdem = e), e
    }
    f.HoldemMainView = t;
    var o, m = (o = eui.Component, __extends(n, o), n.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this), this.update()
    }, n.prototype.update = function (t) {
        t && (this.integralPoolVO = t), this.integralPoolVO && (this.blb_count.text = this.integralPoolVO.integral.toString())
    }, n.prototype.flyTo = function (t, e, o) {
        var n = this;
        this.includeInLayout = !1;
        var s = egret.Point.create(this.x, this.y),
            a = egret.Point.create(t, e);
        egret.Tween.get(this).to({
            y: s.y - 30,
            scaleX: 1,
            scaleY: 1
        }, 200).wait(1e3).call(function () {
            var t = Math.random(),
                e = egret.Ease.getPowIn(3 + 2 * t),
                i = .5 < Math.random();
            egret.Tween.get(n).to({
                x: a.x
            }, egret.Point.distance(s, a) / 500 * 1e3, i ? e : void 0), egret.Tween.get(n, {
                onChange: function () {
                    var t = "lastEffctTime",
                        e = n[t],
                        i = egret.getTimer();
                    n.parent && (null == e || 50 <= i - e) && (DragonBoneTools.playOnce({
                        effectName: "common_yuansutuowei",
                        parent: n.parent,
                        x: n.x,
                        y: n.y
                    }), n[t] = i)
                }
            }).to({
                y: a.y
            }, egret.Point.distance(s, a) / 500 * 1e3, i ? void 0 : e).call(function () {
                n.visible = !1, egret.Tween.removeTweens(n), n.parent && n.parent.removeChild(n), egret.Point.release(s), egret.Point.release(a), o && o()
            })
        })
    }, n);

    function n(t) {
        var e = o.call(this) || this;
        return e.skinName = "HoldemPoolItemSkin", e.anchorOffsetX = 50, e.anchorOffsetY = 12.5, e.integralPoolVO = t, e
    }
}(game = game || {}),
function (e) {
    var i, t = (i = BaseFull, __extends(o, i), o.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.removeNotice(), this.stopSche()
    }, o.prototype.stopSche = function () {
        this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0)
    }, o.prototype.childrenCreated = function () {
        var t = this;
        i.prototype.childrenCreated.call(this), Utils.DeviceUtils.setLiuHaiPingAdapter(this.img_logo), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_integral1), Utils.ComponentUtils.registerListener(this.btn_back, egret.TouchEvent.TOUCH_TAP, function () {
            t.mediator.sendNotification(CN.HOLDEM_STATUS_QUIT), e.MainJumpConfig.jumpTo()
        }, this), Utils.ComponentUtils.registerListener(this.btn_shop, egret.TouchEvent.TOUCH_TAP, function () {
            e.AppFacade.getInstance().sendNotification(CN.SHOP_OPEN_BY_TYPE, {
                shopType: ShopType.ShopTypeTexanPoker
            })
        }, this), Utils.ComponentUtils.registerListener(this.btn_help, egret.TouchEvent.TOUCH_TAP, function () {
            e.GameMVC.commonMed.showHelpDialog(MODULE.TexanPoker)
        }, this), Utils.ComponentUtils.registerListener(this.btn_match, egret.TouchEvent.TOUCH_TAP, function () {
            t.proxy.myInfo.status == TexanPokerRoomStatus.Matching ? t.proxy.CancelMatch() : t.mediator.showSubView(e.HoldemMed.SV.MODE)
        }, this), Utils.ComponentUtils.registerListener(this.btn_rank, egret.TouchEvent.TOUCH_TAP, function () {
            e.AppFacade.getInstance().showSubView(e.HoldemMed.N, e.HoldemMed.SV.RANK)
        }, this), Utils.ComponentUtils.registerListener(this.btn_book, egret.TouchEvent.TOUCH_TAP, function () {
            e.AppFacade.getInstance().showSubView(e.HoldemMed.N, e.HoldemMed.SV.BOOK)
        }, this), Utils.ComponentUtils.registerListener(this.btn_halo, egret.TouchEvent.TOUCH_TAP, function () {
            e.AppFacade.getInstance().showSubView(e.HoldemMed.N, e.HoldemMed.SV.HALO)
        }, this), this.switchCanInvite(!0), DragonBoneTools.playOnce({
            loop: !0,
            z: 1,
            effectName: "common_ui_mydz_04",
            parent: this.gp_effect
        })
    }, o.prototype.switchCanInvite = function (t) {}, o.prototype.timeCount = function () {
        var t = this;
        this.proxy.GetTexanPokerInfo(function () {
            t.blb_num.text = t.proxy.curRoomInfo.playerList.length + "/" + t.proxy.curRoomInfo.mode
        })
    }, o.prototype.updateStatus = function () {
        var e = this;
        this.proxy.myInfo && (this.btn_match.label = "", this.proxy.myInfo.status == TexanPokerRoomStatus.Matching ? (this.btn_match.skinName = "skins.ButtonSkinRed", this.btn_match.label = "取 消", this.switchCanInvite(!1), this.rt_dark.visible = this.blb_num.visible = !0, this.effectDisplay || (this.effectDisplay = !0, DragonBoneTools.playOnce({
            loop: !0,
            effectName: "common_ui_mydz_05",
            parent: this.gp_root,
            loadFinishCB: function (t) {
                e.effectDisplay = t
            }
        })), this.scheId || (this.scheId = egret.setInterval(this.timeCount, this, 3e3), this.timeCount())) : (this.effectDisplay && "object" == typeof this.effectDisplay && (this.effectDisplay.parent.removeChild(this.effectDisplay), this.effectDisplay = void 0), this.rt_dark.visible = this.blb_num.visible = !1, this.btn_match.skinName = "skins.ButtonSkinYellow", this.btn_match.label = "开始匹配", this.switchCanInvite(!0), this.stopSche()))
    }, o.prototype.updateView = function (t) {
        this.blb_integral_count2.visible = !1, this.blb_integral_count1.text = this.proxy.myInfo.modeIntegral[0].integral.toString(), this.proxy.isModeOpen(TexanPokerMatchType.Six) && (this.blb_integral_count2.visible = !0, this.blb_integral_count2.text = this.proxy.myInfo.mode2Integral(TexanPokerMatchType.Six).integral.toString()), this.updateStatus()
    }, o);

    function o() {
        var t = i.call(this) || this;
        return t.skinName = "HoldemMatchingViewSkin", t.proxy = e.AppFacade.getInstance().retrieveProxy(e.HoldemPy.N), t
    }
    e.HoldemMatchingView = t
}(game = game || {}),
function (o) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.onDestroy = function () {
        e.prototype.onDestroy.call(this), this.countDownScheId && (egret.clearInterval(this.countDownScheId), this.countDownScheId = void 0)
    }, i.prototype.countDownUpdate = function () {
        var t = Utils.TimerManager.getServerTime(),
            e = this.proxy.info.mode2OpenDt(TexanPokerMatchType.Normal);
        if (this.blb_time1.text = Utils.TimerManager.getTimeLeftDescBySecond2(e.endDt - t), this.proxy.isModeOpen(TexanPokerMatchType.Six)) {
            var i = this.proxy.info.mode2OpenDt(TexanPokerMatchType.Six);
            this.blb_time2.text = Utils.TimerManager.getTimeLeftDescBySecond2(i.endDt - t), this.btn_match2.visible = this.lb_dt_title2.visible = this.blb_time2.visible = !0, UIActionManager.setAbsGrey(this.gp_root2, !1)
        } else this.btn_match2.visible = this.blb_time2.visible = !1, UIActionManager.setAbsGrey(this.gp_root2, !0)
    }, i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.blb_point1.text = this.proxy.MinJoinIntegral[0], this.blb_point2.text = this.proxy.MinJoinIntegral[1], this.countDownScheId = egret.setInterval(this.countDownUpdate, this, 1e3), this.countDownUpdate(), Utils.ComponentUtils.registerListener(this.btn_match1, egret.TouchEvent.TOUCH_TAP, function () {
            t.enter(TexanPokerMatchType.Normal)
        }, this), Utils.ComponentUtils.registerListener(this.btn_match2, egret.TouchEvent.TOUCH_TAP, function () {
            t.enter(TexanPokerMatchType.Six)
        }, this)
    }, i.prototype.enter = function (t) {
        var e = this,
            i = t == TexanPokerMatchType.Normal ? this.blb_point1 : this.blb_point2;
        this.proxy.myInfo.mode2Integral(t).integral <= Number(i.text) ? this.mediator.showSubView(o.HoldemMed.SV.NOT_ENOUGH, {
            mode: t
        }) : o.GameMVC.holdemPy.StartMatch(t, function () {
            e.hide()
        })
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "HoldemModeViewSkin", t.proxy = o.GameMVC.holdemPy, t
    }
    o.HoldemModeView = t
}(game = game || {}),
function (o) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.onDestroy = function () {
        e.prototype.onDestroy.call(this)
    }, i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), Utils.ComponentUtils.registerListener(this.btn_ok, egret.TouchEvent.TOUCH_TAP, this.onClick, this)
    }, i.prototype.updateView = function (t) {
        this.mode = t.mode;
        var e = void 0;
        e = this.mode == TexanPokerMatchType.Normal ? this.proxy.BuyIntegralConf[0] : this.proxy.BuyIntegralConf[1];
        var i = o.GameMVC.holdemPy.myInfo.mode2Integral(this.mode);
        this.cu_bi.gp_star_item.visible = !1, this.cu_bi.img_icon.source = "item_icon_dezhoujifen_png", this.cu_bi.img_frame.source = COLOR_2_FRAME[5], this.cu_bi.blb_num.text = (e[1] || 0).toString(), 0 < i.freeIntegralTime ? (this.lb_tips.text = "积分不足，每日可领取免费积分", this.updateNum(i.freeIntegralTime), this.btn_ok.label = "领 取") : 0 < i.buyIntegralTime && (this.lb_tips.text = "积分不足，是否花费" + e[2][0][2] + "钻石购买？", this.updateNum(i.buyIntegralTime), this.btn_ok.label = "购 买")
    }, i.prototype.onClick = function () {
        var e = this,
            i = o.GameMVC.holdemPy.myInfo.mode2Integral(this.mode);
        0 < i.freeIntegralTime ? this.proxy.BuyIntegral(1, this.mode, function () {
            e.updateNum(i.freeIntegralTime), e.hide()
        }) : this.proxy.BuyIntegral(1, this.mode, function (t) {
            Utils.MsgUtils.addMidMsg("购买成功"), e.updateNum(i.buyIntegralTime), e.hide()
        })
    }, i.prototype.updateNum = function (t) {
        this.blb_left.text = t.toString()
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "HoldemNotEnoughViewSkin", t.proxy = o.GameMVC.holdemPy, t
    }
    o.HoldemNotEnoughView = t
}(game = game || {}),
function (t) {
    var e = (i.create = function (t) {
        var e = Utils.ObjectPoolMgr.pop("customui.HoldemPlayerHead", t);
        return e.once(egret.Event.REMOVED_FROM_STAGE, function () {
            Utils.ObjectPoolMgr.push(e)
        }, this), e
    }, i.clear = function () {
        Utils.ObjectPoolMgr.clearClass("customui.HoldemPlayerHead")
    }, i);

    function i() {}
    t.HoldemPlayerHeadFactory = e;
    var o, n, s = ((n = {})[TexanPokerPlayerBetStatus.GiveUp] = "common_ui_mydz_wzfq", n[TexanPokerPlayerBetStatus.Follor] = "common_ui_mydz_wzge", n[TexanPokerPlayerBetStatus.Add] = "common_ui_mydz_wzje", n.allin = "common_ui_mydz_wzqe", n[TexanPokerPlayerBetStatus.Skip] = "common_ui_mydz_wztg", n),
        a = (o = eui.Component, __extends(r, o), r.prototype.childrenCreated = function () {
            var e = this;
            o.prototype.childrenCreated.call(this), DragonBoneTools.create("common_ui_mydz_03", function (t) {
                e.effectDisplay = t, e.effectDisplay.x = e.gp_root.width / 2, e.effectDisplay.y = 101, e.effectDisplay.visible = !1, e.effectDisplay.animation.play("common_ui_mydz_03", 0), e.gp_root.addChild(e.effectDisplay)
            })
        }, r.prototype.updateData = function (t, e) {
            void 0 === e && (e = !1), t.uuid == game.GameMVC.holdemPy.myInfo.uuid ? (this.currentState = "self", this.bi_1.img_custom_tag.source = this.bi_2.img_custom_tag.source = "mydz_img_xian_png", this.bi_1.img_custom_tag.visible = this.bi_2.img_custom_tag.visible = !0, this.bi_1.img_custom_tag.scaleX = this.bi_2.img_custom_tag.scaleY = 1) : (this.currentState = "common", this.bi_1.img_custom_tag.source = this.bi_2.img_custom_tag.source = ""), this.lb_status.text = TP_PlayerBetStatus2Name[t.gameData.status];
            var i = void 0;
            t.isAllIn() ? (i = s.allin, this.lb_status.text = "全额") : i = s[t.gameData.status], i && this.lastStatus != t.gameData.status && DragonBoneTools.playOnce({
                effectName: i,
                y: this.height / 2 - 50,
                parent: this
            }), t.gameData.status == TexanPokerPlayerBetStatus.Betting ? this.img_bg.source = "mydz_img_xinxidi_png" : t.gameData.status == TexanPokerPlayerBetStatus.GiveUp ? (this.img_bg.source = "mydz_img_xinxidi2_png", UIActionManager.setAbsGrey(this, !0)) : this.img_bg.source = "mydz_img_xinxidi2_png", this.cu_ph.updateData({
                vo: {
                    playerId: t.uuid,
                    avatar: t.avatar
                }
            }), this.blb_table.text = t.gameData.index.toString(), this.lb_name.text = "" + t.name, this.blb_money.text = t.gameData.integral.toString(), this.blb_money0.text = t.gameData.betNum.toString(), this.effectDisplay && (t.isAllIn() ? this.effectDisplay.visible = !0 : this.effectDisplay.visible = !1), e && (this.bi_1.updateData({
                type: EEntityType.EEntityTypeHero,
                code: t.gameData.showCards[0]
            }), this.bi_2.updateData({
                type: EEntityType.EEntityTypeHero,
                code: t.gameData.showCards[1]
            })), this.lastStatus = t.gameData.status
        }, r.prototype.addTapEvent = function (t) {
            this.cu_ph.addTapEvent(t)
        }, r.prototype.reset = function () {
            UIActionManager.setAbsGrey(this, !1)
        }, r.prototype.onOPReset = function () {
            this.reset()
        }, r.prototype.onOPComeBack = function (t, e) {
            t && this.updateData(t, e)
        }, r.prototype.onOPClean = function () {}, r.prototype.onOPCheck = function (t) {
            egret.log("alive")
        }, r);

    function r() {
        var t = o.call(this) || this;
        return t.skinName = "HoldemPlayerHeadSkin", t
    }
    t.HoldemPlayerHead = a
}(customui = customui || {}),
function (c) {
    var i, t = (i = BasePanel, __extends(o, i), o.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.countDownScheId && (egret.clearInterval(this.countDownScheId), this.countDownScheId = void 0)
    }, o.prototype.childrenCreated = function () {
        var t = this;
        i.prototype.childrenCreated.call(this), this.CommonDaTanChuKuang.blb_title.text = "排行榜", this.CommonDaTanChuKuang.onCloseCB = function () {
            t.hide()
        }, this.list_items.itemRenderer = n, this.gp_rank0.touchChildren = !1, this.gp_rank1.touchChildren = !1, this.gp_rank2.touchChildren = !1, this.hdm_model_0.touchEnabled = !1, this.hdm_model_1.touchEnabled = !1, this.hdm_model_2.touchEnabled = !1, this.rdm_model_0.touchEnabled = !1, this.rdm_model_1.touchEnabled = !1, this.rdm_model_2.touchEnabled = !1, this.selfItem = new n, this.gp_my_item.addChild(this.selfItem), this.selfItem.horizontalCenter = 0, this.initEffect(), this.initTabbar(), this.activateComponent(), this.updateView(), this.countDownScheId = egret.setInterval(this.countDownUpdate, this, 1e3), this.countDownUpdate()
    }, o.prototype.countDownUpdate = function () {
        var t = Utils.TimerManager.getServerTime(),
            e = this.proxy.info.mode2OpenDt(TexanPokerMatchType.Normal);
        if (this.blb_time1.text = Utils.TimerManager.getTimeLeftDescBySecond2(e.endDt - t), this.proxy.isModeOpen(TexanPokerMatchType.Six)) {
            var i = this.proxy.info.mode2OpenDt(TexanPokerMatchType.Six);
            this.blb_time2.text = Utils.TimerManager.getTimeLeftDescBySecond2(i.endDt - t)
        } else this.gp_time2.visible = !1
    }, o.prototype.updateView = function (t) {
        var r = this;
        t && null != t.itemIndex && t.itemIndex != this.index && (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_beibaohuanye), this.index = t.itemIndex), 0 == this.index ? (this.gp_time1.visible = !0, this.gp_time2.visible = !1) : this.proxy.isModeOpen(TexanPokerMatchType.Six) ? (this.gp_time1.visible = !1, this.gp_time2.visible = !0) : (this.gp_time1.visible = !1, this.gp_time2.visible = !1);
        var h = this.CONFIG[this.tabbar.selectedIndex];
        this.CommonDaTanChuKuang.blb_title.text = h.title, this.img_bg.source = h.bg_source, this.sl_items.stopAnimation(), this.sl_items.viewport.scrollV = 0, c.GameMVC.rankPy.GetRankList(h, function (t) {
            var e = (r.curRanks = t).ranks,
                i = t.selfRank;
            if (0 != e.length) {
                for (var o = 0; o < 3; o++) {
                    var n = e[o];
                    r.updateTop3Rank(o, n, h)
                }
                var s = [];
                e.forEach(function (t, e) {
                    2 < e && s.push({
                        rankInfo: t,
                        config: h
                    })
                }), r.list_items.dataProvider = new eui.ArrayCollection(s), r.gp_empty.visible = 0 == s.length
            } else {
                for (o = 0; o < 3; o++) n = e[o], r.updateTop3Rank(o, n, h);
                var a = [];
                r.list_items.dataProvider = new eui.ArrayCollection(a), r.gp_empty.visible = 0 == a.length
            }
            r.selfItem.visible = !0, r.sl_items.height = 307, i && (i.playerBaseInfo && i.playerBaseInfo.name || (i.playerBaseInfo = c.GameMVC.playerPy.playerInfoVO), r.selfItem.data = {
                isSelf: !0,
                rankInfo: i,
                config: h
            })
        })
    }, o.prototype.updateTop3Rank = function (t, e, i) {
        var o = this["img_nobody" + t],
            n = this["btn_detail" + t],
            s = this["bm_grade" + t],
            a = this["lb_ownerName" + t],
            r = this["hdm_model_" + t],
            h = this["img_model" + t],
            c = this["rdm_model_" + t];
        if (r.visible = !1, h.visible = !1, c.visible = !1, e) switch (o.visible = !1, n.visible = !0, s.text = e.key + "", i.rankType) {
            case RankingType.RankingTypeTexanPokerSix:
            case RankingType.RankingTypeTexanPoker:
                c.visible = !0, c.update({
                    vo: e.playerBaseInfo,
                    reqStyle: ROLE_STYLE.Fashion | ROLE_STYLE.Magical
                }), a.text = e.playerBaseInfo.name
        } else o.visible = !0, s.text = "0", a.text = "虚席以待", n.visible = !1;
        var l = this["lb_nameTip" + t],
            p = this["lb_keyName" + t];
        l.text = i.nameTip, p.text = i.keyword + ":"
    }, o.prototype.initEffect = function () {
        UIActionManager.addEffect(this.gp_rank0, "common_activity_yuandanjie_06", {
            offectX: 0,
            offectY: -30,
            childIndex: 2,
            scaleX: .7,
            scaleY: .7
        }, function (t) {
            t.touchEnabled = !1
        }), UIActionManager.addEffect(this.gp_rank1, "common_activity_yuandanjie_07", {
            offectX: 0,
            offectY: 0,
            childIndex: 2
        }, function (t) {
            t.touchEnabled = !1
        }), UIActionManager.addEffect(this.gp_rank2, "common_activity_yuandanjie_08", {
            offectX: 0,
            offectY: 0,
            childIndex: 2
        }, function (t) {
            t.touchEnabled = !1
        })
    }, o.prototype.initTabbar = function () {
        this.tabbar.itemRendererSkinName = "BackpackUI_TabbarItemSkin";
        var t = [];
        for (var e in this.CONFIG) Utils.UnlockMgr.checkPass(this.CONFIG[e].module, !1).allow && t.push({
            source: this.CONFIG[e].source
        });
        this.tabbar.dataProvider = new eui.ArrayCollection(t), this.tabbar.selectedIndex = 0, this.tabbar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.updateView, this), this.tabbar.visible = !1
    }, o.prototype.activateComponent = function () {
        var t = this;
        this.gp_touch0.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.showInfo(0)
        }, this), this.gp_touch1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.showInfo(1)
        }, this), this.gp_touch2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.showInfo(2)
        }, this), this.btn_reward.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            0 == t.tabbar.selectedIndex ? c.AppFacade.getInstance().showSubView(c.RankMediator.N, c.RankMediator.SV.COMMON, {
                module: "RankingTypeTexanPoker"
            }) : c.AppFacade.getInstance().showSubView(c.RankMediator.N, c.RankMediator.SV.COMMON, {
                module: "RankingTypeTexanPokerSix"
            })
        }, this)
    }, o.prototype.showInfo = function (t) {
        var e = this.curRanks.ranks[t],
            i = this.CONFIG[this.tabbar.selectedIndex];
        if (e) switch (i.rankType) {
            case RankingType.RankingTypeTexanPokerSix:
            case RankingType.RankingTypeTexanPoker:
                c.AppFacade.getInstance().retrieveProxy(c.PlayerPy.N), e.playerBaseInfo && e.playerBaseInfo.playerId && e.playerBaseInfo.playerId != c.GameMVC.playerPy.playerInfoVO.playerId && c.AppFacade.getInstance().showSubView(c.FriendMediator.N, c.FriendMediator.SV.INFO, {
                    playerId: e.playerBaseInfo.playerId
                })
        } else Utils.MsgUtils.addMidMsg("虚席以待")
    }, o.VIEW_TYPE = {
        TWO: 0,
        SIX: 1
    }, o);

    function o() {
        var t, e = i.call(this) || this;
        return e.index = 0, e.CONFIG = ((t = {})[o.VIEW_TYPE.TWO] = {
            title: "排行榜",
            module: MODULE.TexanPoker,
            rankType: RankingType.RankingTypeTexanPoker,
            bg_source: "mydz_img_paihangditu_png",
            keyword: "积分",
            nameTip: "玩家名:",
            additonTip: "我的积分",
            isGuild: !1,
            source: {
                up: "_btn_yq_m_json.common_yeqian_dezhoupaihang1_0",
                down: "_btn_yq_m_json.common_yeqian_dezhoupaihang1_1"
            }
        }, t), e.skinName = "HoldemRankPanelSkin", e.proxy = c.GameMVC.holdemPy, e
    }
    c.HoldemRankPanel = t;
    var e, n = (e = eui.ItemRenderer, __extends(s, e), s.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.gp_model.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            switch (t.data.config.rankType) {
                case RankingType.RankingTypeTexanPokerSix:
                case RankingType.RankingTypeTexanPoker:
                    c.AppFacade.getInstance().retrieveProxy(c.PlayerPy.N), t.data.rankInfo.playerBaseInfo && t.data.rankInfo.playerBaseInfo.playerId && t.data.rankInfo.playerBaseInfo.playerId != c.GameMVC.playerPy.playerInfoVO.playerId && c.AppFacade.getInstance().showSubView(c.FriendMediator.N, c.FriendMediator.SV.INFO, {
                        playerId: t.data.rankInfo.playerBaseInfo.playerId
                    })
            }
        }, this)
    }, s.prototype.dataChanged = function () {
        if (this.data) {
            var t = this.data.rankInfo,
                e = this.data.config;
            switch (JSON.parse(t.additionInfo), this.bm_key.text = t.key, this.bm_rank.text = t.rank || "暂无名次", this.lb_keyName.text = e.keyword + ":", this.lb_name.text = e.additonTip, this.data.isSelf ? this.img_nameBg.source = "common_img_kt_4_1_png" : this.img_nameBg.source = "common_img_kt_4_2_png", this.hdm_model.visible = !1, this.img_model.visible = !1, this.rdm_model.visible = !1, this.btn_detail.visible = !0, e.rankType) {
                case RankingType.RankingTypeTexanPokerSix:
                case RankingType.RankingTypeTexanPoker:
                    this.rdm_model.visible = !0, this.rdm_model.update({
                        vo: t.playerBaseInfo,
                        reqStyle: ROLE_STYLE.Fashion | ROLE_STYLE.Magical
                    }), this.lb_name.text = t.playerBaseInfo.name, this.btn_detail.visible = !this.data.isSelf
            }
        }
    }, s);

    function s() {
        var t = e.call(this) || this;
        return t.skinName = "MainRankPanel_RankItem", t
    }
}(game = game || {}),
function (d) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.perClose = function () {
        this.doneCB && this.doneCB()
    }, i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this), this.list_my.itemRenderer = n, this.list_ennemy.itemRenderer = n, this.initBtn()
    }, i.prototype.updateView = function (t) {
        this.result = t.resultData, this.doneCB = t.doneCB, this.updateInfo()
    }, i.prototype.updateInfo = function () {
        for (var l = this.result.entityResults, t = void 0, e = void 0, i = 0, o = this.result.teams; i < o.length; i++)(h = o[i]).camp == EBattleSide.EBattleSideAttack ? t = h : h.camp == EBattleSide.EBattleSideDefence && (e = h);
        this.lb_name_1.text = t.name, this.lb_name_2.text = e.name, this.cu_head_1.updateData({
            vo: t
        }), this.cu_head_2.updateData({
            vo: e
        }), this.result.result == EBattleResult.EBattleResultWin ? (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shengli), DragonBoneTools.create("common_shengli_2", function (t) {
            t.x = this.gp_root.width / 2, t.y = 50, t.animation.play(), this.gp_root.addChildAt(t, 0)
        }, this)) : (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shibai), DragonBoneTools.create("common_zhanbai_2", function (t) {
            t.x = this.gp_root.width / 2, t.y = 50, t.animation.play(), this.gp_root.addChildAt(t, 0)
        }, this)), this.data = {}, this.data.self = [], this.data.enemy = [];
        var p = -1,
            u = -1;
        for (var n in l) {
            var s = l[n];
            p = p > s.totalHurt ? p : s.totalHurt, u = u > s.totalCure ? u : s.totalCure
        }
        for (var a in this.result.teams) {
            function r(t, e, i) {
                for (var o in t.entities) {
                    var n = t.entities[o];
                    for (var s in e.push({
                            isMagical: !1,
                            code: n.code,
                            entityId: n.entityId,
                            isSelf: i,
                            maxLife: n.life
                        }), l)(c = l[s]).entityId == e[e.length - 1].entityId && (e[e.length - 1].totalHurt = c.totalHurt, e[e.length - 1].totalCure = c.totalCure, e[e.length - 1].life = c.life, p = p > c.totalHurt ? p : c.totalHurt, u = u > c.totalCure ? u : c.totalCure)
                }
                if (t.magical && t.magical.entityId) {
                    var a = t.magical.code,
                        r = d.Config.magicalUpgradeConfig(a);
                    if (r[0] && r[0].costs) {
                        var h = JSON.parse(r[0].costs)[0][1];
                        for (var s in e.push({
                                isMagical: !0,
                                code: h,
                                entityId: t.magical.entityId,
                                isSelf: i,
                                maxLife: 0
                            }), l) {
                            var c;
                            (c = l[s]).entityId == e[e.length - 1].entityId && (e[e.length - 1].totalHurt = c.totalHurt, e[e.length - 1].totalCure = c.totalCure)
                        }
                    }
                }
                e.forEach(function (t) {
                    t.maxHurt = p, t.maxCure = u
                }), e.sort(function (t, e) {
                    return t.isMagical ? 1 : e.isMagical ? -1 : t.entityId - e.entityId
                })
            }
            var h;
            (h = this.result.teams[a]).playerId == t.playerId ? r(h, this.data.self, !0) : r(h, this.data.enemy, !1)
        }
        this.list_my.dataProvider = new eui.ArrayCollection(this.data.self), this.list_ennemy.dataProvider = new eui.ArrayCollection(this.data.enemy)
    }, i.prototype.ChangeContent = function (t) {
        var e = this.list_my.$children;
        for (var i in e)(o = e[i]) && o.changeState(t);
        for (var i in e = this.list_ennemy.$children) {
            var o;
            (o = e[i]) && o.changeState(t)
        }
    }, i.prototype.initBtn = function () {
        var t = this;
        this.btn_hurt.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.HURT), t.img_cure_bg.source = "common_img_dikuang03_png", t.img_hurt_bg.source = "common_img_dikuang01_png", t.img_result_bg.source = "common_img_dikuang03_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu1", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
        }, this), this.btn_cure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.CURE), t.img_cure_bg.source = "common_img_dikuang01_png", t.img_hurt_bg.source = "common_img_dikuang03_png", t.img_result_bg.source = "common_img_dikuang03_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao1", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
        }, this), this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.RESULT), t.img_cure_bg.source = "common_img_dikuang03_png", t.img_hurt_bg.source = "common_img_dikuang03_png", t.img_result_bg.source = "common_img_dikuang01_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo1"
        }, this)
    }, i.LIST_TYPE = {
        HURT: 0,
        CURE: 1
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.doneCB = void 0, t.skinName = "ZzqStatisticsSkin", t.py = d.AppFacade.getInstance().retrieveProxy(d.HoldemPy.N), t
    }
    d.HoldemStatistics = t;
    var o, n = (o = eui.ItemRenderer, __extends(s, o), s.prototype.childrenCreated = function () {
        this.baseitem = customui.BaseItemFactory.create(), this.gp_head.addChild(this.baseitem), this.pb.slideDuration = 0, this.pb.labelDisplay.visible = !1
    }, s.prototype.dataChanged = function () {
        o.prototype.dataChanged.call(this);
        var t = this.data.code;
        this.baseitem.updateData({
            code: t
        }), this.baseitem.scaleX = this.baseitem.scaleY = .6, this.baseitem.touchEnabled = this.baseitem.touchChildren = !1, this.changeState(d.FightStatistics.LIST_TYPE.HURT), this.data.isSelf || (this.scaleX = -1, this.gp_head.scaleX = -1, this.bm_num.scaleX = -1)
    }, s.prototype.changeState = function (t) {
        this.pb.value = 0, t == d.FightStatistics.LIST_TYPE.HURT ? (this.pb.maximum = this.data.maxHurt, this.pb.value = this.data.totalHurt, this.bm_num.text = this.data.totalHurt) : t == d.FightStatistics.LIST_TYPE.RESULT ? (this.pb.maximum = this.data.maxLife, this.pb.value = this.data.life, this.bm_num.text = this.data.life) : (this.pb.maximum = this.data.maxCure, this.pb.value = this.data.totalCure, this.bm_num.text = this.data.totalCure)
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.skinName = "FightStatisticsItemSkin", t
    }
}(game = game || {}),
function (h) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.updateView = function (t) {
        t && (this.playerInfo = t.info), this.lb_level.text = this.playerInfo.level;
        var e = 0 == this.playerInfo.level ? 1 : this.playerInfo.level,
            i = h.Config.chessAchieveLevelList().length - 1,
            o = this.playerInfo.exp,
            n = h.Config.chessAchieveLevel()[e].exp;
        e == i && n < o && (o = n), this.img_jindu.width = Math.floor(o / n * 205), this.lb_jindu.text = o + "/" + n, this.updateRewardInfo(), this.updateNowCup()
    }, i.prototype.updateNowCup = function () {
        var t = h.Config.chessAchieveTask(),
            e = h.Config.chessAchieveTaskList().length;
        0 == this.playerInfo.taskCode ? (UIActionManager.setAbsGrey(this.img_jiangbei, !0), this.lb_taskName.text = "无") : (this.lb_taskName.text = t[this.playerInfo.taskCode].name, this.img_jiangbei.source = t[this.playerInfo.taskCode].img + "_png");
        var i = (100 * this.playerInfo.completeNum / e).toFixed(0) + "%";
        this.lb_taskPro.text = "您已经解锁了" + this.playerInfo.completeNum + "/" + e + "项成就(" + i + ")", this.img_taskJindu.width = Math.floor(this.playerInfo.completeNum / e * 205), this.lb_taskJindu.text = this.playerInfo.completeNum + "/" + e
    }, i.prototype.updateRewardInfo = function () {
        var t = [],
            e = this.playerInfo.level + 1;
        e > h.Config.chessAchieveLevelList().length - 1 && (e = h.Config.chessAchieveLevelList().length - 1);
        for (var i = 1; i < e + 1; i++) {
            var o = {
                level: i,
                isGet: !1
            };
            t.push(o)
        }
        for (var n in this.lb_needLevel.visible = !1, t.length == this.proxy.rewardGetList.length && 1 < this.playerInfo.level ? (this.showLevel = e, this.btn_isGet.visible = !0, this.btn_get.visible = !1) : (this.showLevel = 1, this.btn_isGet.visible = !1, this.btn_get.visible = !0), t) {
            for (var i in this.proxy.rewardGetList) t[n].level == this.proxy.rewardGetList[i] && (t[n].isGet = !0);
            if (0 == t[n].isGet) {
                this.showLevel = t[n].level;
                break
            }
        }
        this.lb_textLevel.text = "成就" + this.showLevel + "级奖励", this.needLevel = h.Config.chessAchieveLevel()[this.showLevel].playerLevel, this.playerProxy.playerInfoVO.level < this.needLevel && (this.btn_isGet.visible = !1, this.btn_get.visible = !1, this.lb_needLevel.visible = !0, this.lb_needLevel.text = "人物达到" + this.needLevel + "级");
        var s = JSON.parse(h.Config.chessAchieveLevel()[this.showLevel].rewards);
        for (var n in this.gp_reward.removeChildren(), s) {
            var a = customui.BaseItemFactory.create();
            a.scaleX = a.scaleY = .7, a.updateData({
                id: s[n][1],
                num: s[n][2]
            }), this.gp_reward.addChild(a)
        }
        var r = this.showLevel > this.playerInfo.level;
        UIActionManager.setGrey(this.btn_get, r)
    }, i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this), this.btn_modifyIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            h.AppFacade.getInstance().showSubView(h.PlayerMediator.N, h.PlayerMediator.SV.MODIFY_AVATAR)
        }, this), this.btn_show.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.mediator.showSubView(h.ZzqMediator.SV.ACHIEVEMENTREWARD, {
                info: t.playerInfo
            })
        }, this), this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.showLevel <= t.playerInfo.level ? t.proxy.GetAchieveRewards(t.showLevel, function () {
                h.AppFacade.getInstance().showSubView(h.CommonMediator.N, h.CommonMediator.SV.REWARD_PANEL, {
                    rewards: JSON.parse(h.Config.chessAchieveLevel()[t.showLevel].rewards),
                    type: h.CommonRewardPreviewPanel.REWARD_TYPE.REWARD
                })
            }) : Utils.MsgUtils.addMidMsg("未满足条件")
        }, this), UIActionManager.setAbsGrey(this.btn_isGet, !0), this.btn_isGet.enabled = !1, this.initList = !1, this.cu_ph.updateData({
            vo: this.proxy.curPlayer
        }), this.initTabbar()
    }, i.prototype.initTabbar = function () {
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
    }, i.prototype.onBarItemTap = function (t) {
        var e = this;
        switch (void 0 === t && (t = {
            itemIndex: i.TAB_VIEW.INFO
        }), this.gp_myinfo.visible = !1, this.gp_cup.visible = !1, t.itemIndex) {
            case i.TAB_VIEW.INFO:
                this.blb_title0.text = "成就等级", this.gp_myinfo.visible = !0;
                break;
            case i.TAB_VIEW.CUP:
                this.blb_title0.text = "成就奖杯", this.initList ? (this.scroller_cup.viewport.scrollV = 0, this.scroller_cup.viewport.validateNow(), this.scroller_cup.stopAnimation(), this.gp_cup.visible = !0) : this.proxy.GetAchieveTaskProgress(function (t) {
                    e.updateCupList({
                        info: t.task
                    })
                })
        }
    }, i.prototype.updateCupList = function (t) {
        var i = this,
            e = JSON.parse(t.info),
            o = [],
            n = [],
            s = [],
            a = [],
            r = [];
        for (var h in e) e[h].isTarget ? o.push(e[h]) : 0 != e[h].key ? n.push(e[h]) : s.push(e[h]);
        n.sort(function (t, e) {
            return i.getTaskProGress(t.code, t.key) > i.getTaskProGress(e.code, e.key) ? -1 : 1
        });
        var c = o.concat(n.concat(s)),
            l = 0;
        for (var h in c) a.push(c[h]), l++, 2 < a.length ? (r.push(a), a = []) : l == c.length && (r.push(a), a = []);
        this.initList = !0, this.gp_cup.visible = !0, this.list_cup.itemRenderer = p, this.list_cup.dataProvider = new eui.ArrayCollection(r)
    }, i.prototype.getTaskProGress = function (t, e) {
        var i = h.Config.chessAchieveTask()[t];
        return e / JSON.parse(i.target)[0]
    }, i.TAB_VIEW = {
        INFO: 0,
        CUP: 1
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqAchievementSkin", t.proxy = h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N), t.playerProxy = h.AppFacade.getInstance().retrieveProxy(h.PlayerPy.N), t
    }
    h.ZzqAchievement = t;
    var o, p = (o = eui.ItemRenderer, __extends(n, o), n.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this)
    }, n.prototype.dataChanged = function () {
        var t = this.data;
        this.gp_di.removeChildren();
        for (var e = 0; e < t.length; e++) {
            var i = new a;
            i.updateInfo(t[e]), this.gp_di.addChild(i)
        }
    }, n);

    function n() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqAchievementOneSkin", t.proxy = h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N), t
    }
    var s, a = (s = eui.ItemRenderer, __extends(r, s), r.prototype.childrenCreated = function () {
        var t = this;
        s.prototype.childrenCreated.call(this), this.gp_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            h.AppFacade.getInstance().showSubView(h.ZzqMediator.N, h.ZzqMediator.SV.ACHIEVEMENTREWARDSHOW, {
                info: t.params
            })
        }, this)
    }, r.prototype.updateInfo = function (t) {
        this.params = t;
        var e = h.Config.chessAchieveTask()[t.code];
        this.img_jiangbei.source = "" == e.img ? "zzq_img_jiangbei01_png" : e.img + "_png", this.lb_name.text = e.name;
        var i = JSON.parse(e.target);
        1 == i[0] ? (this.img_jindu.visible = !1, this.img_di.visible = !1, this.lb_jindu.visible = !1) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = t.key + "/" + i[0], this.img_jindu.width = Math.floor(t.key / i[0] * 115)), UIActionManager.setAbsGrey(this.img_jiangbei, !t.isTarget)
    }, r);

    function r() {
        var t = s.call(this) || this;
        return t.skinName = "ZzqAchievementCupSkin", t.proxy = h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N), t
    }
}(game = game || {}),
function (o) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.updateView = function (t) {
        this.gp_reward0.removeChildren(), t.info.allTask;
        for (var e = [], i = 0; i < t.info.allTask.length; i++) t.info.allTask[i].isTarget && e.push(t.info.allTask[i]);
        var o = 5 < e.length ? 5 : e.length;
        for (i = 0; i < o; i++)(n = new s).updateInfo(e[i]), this.gp_reward0.addChild(n);
        if (5 < e.length)
            for (i = 5; i < e.length; i++) {
                var n;
                (n = new s).updateInfo(e[i]), this.gp_reward1.addChild(n)
            } else this.gp_reward1 && this.gp_reward1.parent && this.gp_reward1.parent.removeChild(this.gp_reward1)
    }, i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqAchievementGetSkin", t.proxy = o.AppFacade.getInstance().retrieveProxy(o.ZzqPy.N), t
    }
    o.ZzqAchievementGet = t;
    var n, s = (n = eui.Component, __extends(a, n), a.prototype.childrenCreated = function () {
        n.prototype.childrenCreated.call(this)
    }, a.prototype.updateInfo = function (t) {
        this.params = t;
        var e = o.Config.chessAchieveTask()[t.code];
        this.img_jiangbei.source = "" == e.img ? "zzq_img_jiangbei01_png" : e.img + "_png", this.lb_name.text = e.name;
        var i = JSON.parse(e.target);
        1 == i[0] ? (this.img_jindu.visible = !1, this.img_di.visible = !1, this.lb_jindu.visible = !1) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = t.key + "/" + i[0], this.img_jindu.width = Math.floor(t.key / i[0] * 100))
    }, a);

    function a() {
        var t = n.call(this) || this;
        return t.skinName = "ZzqAchievementGetCupSkin", t.proxy = o.AppFacade.getInstance().retrieveProxy(o.ZzqPy.N), t
    }
}(game = game || {}),
function (n) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.updateView = function (t) {
        t && (this.playerInfo = t.info), this.updateCupList()
    }, e.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this)
    }, e.prototype.updateCupList = function () {
        var t = n.Config.chessAchieveLevel(),
            e = [];
        for (var i in t)
            if (0 != t[i].level) {
                for (var o in t[i].isShow = !(this.playerProxy.playerInfoVO.level >= t[i].playerLevel), t[i].isGet = !1, t[i].isCanGet = t[i].level <= this.playerInfo.level, t[i].needLevel = t[i].playerLevel, this.proxy.rewardGetList) this.proxy.rewardGetList[o] == t[i].level && (t[i].isGet = !0);
                e.push(t[i])
            } this.list_cup.itemRenderer = s, this.list_cup.dataProvider = new eui.ArrayCollection(e)
    }, e);

    function e(t) {
        var e = i.call(this) || this;
        return e.skinName = "ZzqAchievementRewardSkin", e.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), e.playerProxy = n.AppFacade.getInstance().retrieveProxy(n.PlayerPy.N), e.playerInfo = t, e
    }
    n.ZzqAchievementReward = t;
    var o, s = (o = eui.ItemRenderer, __extends(a, o), a.prototype.childrenCreated = function () {
        var t = this;
        o.prototype.childrenCreated.call(this), Utils.TouchUtils.addTouchListener(this.btn_get, function () {
            t.data.isCanGet ? t.proxy.GetAchieveRewards(t.data.level, function () {
                n.AppFacade.getInstance().showSubView(n.CommonMediator.N, n.CommonMediator.SV.REWARD_PANEL, {
                    rewards: JSON.parse(t.data.rewards),
                    type: n.CommonRewardPreviewPanel.REWARD_TYPE.REWARD
                })
            }) : Utils.MsgUtils.addMidMsg("未满足条件")
        })
    }, a.prototype.dataChanged = function () {
        var t = this.data;
        this.gp_reward.removeChildren(), t.isShow ? (this.btn_get.visible = !1, this.gp_isGet.visible = !1, this.lb_needLevel.visible = !0) : (this.lb_needLevel.visible = !1, t.isCanGet ? t.isGet ? (this.btn_get.visible = !1, this.gp_isGet.visible = !0) : (this.btn_get.visible = !0, this.gp_isGet.visible = !1, UIActionManager.setGrey(this.btn_get, !1)) : (this.btn_get.visible = !0, this.gp_isGet.visible = !1, UIActionManager.setGrey(this.btn_get, !0))), this.lb_needLevel.text = "人物达到" + t.needLevel + "级", this.lb_num.text = "成就" + t.level + "级";
        var e = JSON.parse(t.rewards);
        for (var i in e) {
            var o = customui.BaseItemFactory.create();
            o.scaleX = o.scaleY = .6, o.updateData({
                id: e[i][1],
                num: e[i][2]
            }), this.gp_reward.addChild(o)
        }
    }, a);

    function a() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqAchievementRewardOneSkin", t.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), t
    }
}(game = game || {}),
function (n) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.updateView = function (t) {
        var e = t.info,
            i = n.Config.chessAchieveTask()[e.code];
        this.img_jiangbei.source = "" == i.img ? "zzq_img_jiangbei01_png" : i.img + "_png", this.lb_name.text = i.name, this.lb_num.text = i.desc, this.lb_numP.text = "x" + i.expRewards, this.gp_get.visible = e.isTarget, this.gp_no.visible = !e.isTarget;
        var o = JSON.parse(i.target);
        1 == o[0] ? this.gp_pross && this.gp_pross.parent && this.gp_pross.parent.removeChild(this.gp_pross) : (this.img_jindu.visible = !0, this.img_di.visible = !0, this.lb_jindu.visible = !0, this.lb_jindu.text = e.key + "/" + o[0], this.img_jindu.width = Math.floor(e.key / o[0] * 205)), this.gp_get.visible && this.formatData(e.isTargetDt), this.gp_btn && this.gp_btn.parent && this.gp_btn.parent.removeChild(this.gp_btn)
    }, i.prototype.formatData = function (t) {
        var e = [],
            i = new Date(1e3 * t),
            o = i.getFullYear(),
            n = i.getMonth() + 1,
            s = i.getDate();
        e.push({
            text: o + "." + n + "." + s,
            style: {
                textColor: 1761866
            }
        }), e.push({
            text: " 获得",
            style: {
                textColor: 16777215
            }
        }), this.lb_getTime.textFlow = e
    }, i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqAchievementRewardShowSkin", t.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), t
    }
    n.ZzqAchievementRewardShow = t
}(game = game || {}),
function (m) {
    var i, t = (i = BaseFull, __extends(e, i), e.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.removeListener(), this.countDownScheId && (egret.clearInterval(this.countDownScheId), this.countDownScheId = void 0)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_btns), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_players), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_info_1), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_info_2), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_tips), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_head_tips), Utils.DeviceUtils.setLiuHaiPingAdapter(this.gp_pick), this.CommonBarrage.touchEnabled = !1, this.CommonBarrage.touchChildren = !1, this.btn_fanhui.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            0 < e.proxy.curPlayer.life ? (e.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), m.MainJumpConfig.jumpTo(), e.mediator.sendNotification(CN.MAIN_FORCE_UPDATE_BANNER)) : m.GameMgr.getInstance().showCommonTipsWin({
                commonTips: "确定退出本局游戏吗？退出游戏不会影响本局排名。",
                source: "zzq_exit_btn",
                cb: !0,
                clickCB: function (t) {
                    1 == t.type && e.proxy.ExitChess(function () {
                        e.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), m.MainJumpConfig.jumpTo(), e.mediator.sendNotification(CN.MAIN_FORCE_UPDATE_BANNER)
                    })
                }
            })
        }, this), this.btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.showHaloPanel()
        }, this), this.btn_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.mediator.showSubView(m.ZzqMediator.SV.HEROBOOK)
        }, this), this.btn_3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.mediator.showSubView(m.ZzqMediator.SV.RECORD)
        }, this), this.btn_4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.mediator.chessPickRootView.show()
        }, this), this.btn_5.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.mediator.showSubView(m.ZzqMediator.SV.LEVELDATA)
        }, this), this.gp_halo.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.showHaloPanel()
        }, this);
        var t = JSON.parse(m.Config.constConfig().WchessExpShop.constValue);
        this.btn_6.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            m.GameMgr.getInstance().showCommonTipsWin({
                commonTips: "确定花费" + t[1] + "个金币，购买" + t[0] + "点经验吗？",
                source: "zzq_buy_exp",
                cb: !0,
                clickCB: function (t) {
                    1 == t.type && e.proxy.BuyExp(1, function () {
                        e.showUp()
                    })
                }
            })
        }, this), this.addListener(), this.updateTipsTextInfo(), this.bindTipsPanelClick({
            target: this.gp_info_2,
            cb: function () {
                e.gp_tips.visible = !0, e.lb_desc.textFlow = [{
                    text: "英雄上限\n",
                    style: {
                        size: 22,
                        textColor: 16711571
                    }
                }, {
                    text: "你出战的英雄上限数量不能超过主角等级上限\n\n英雄出战上限等于你的主角等级，提升你的主角经验可提升主角等级\n每回合自动获取1点经验\n花费金币进行升级时，可立即获得" + t[0] + "点经验",
                    style: {
                        size: 20,
                        textColor: 16777215
                    }
                }]
            }
        })
    }, e.prototype.updateTipsTextInfo = function () {
        var u = this,
            d = JSON.parse(m.Config.constConfig().ChessWinStreakRewards.constValue),
            g = JSON.parse(m.Config.constConfig().ChessLoseStreakRewards.constValue),
            _ = JSON.parse(m.Config.constConfig().WchessGoldInterest.constValue),
            f = m.Config.constConfig().WchessWinRewards.constValue;
        this.bindTipsPanelClick({
            target: this.gp_info_1,
            cb: function () {
                var t = u.proxy.curPlayer.winNum + u.proxy.curPlayer.loseNum,
                    e = JSON.parse(m.Config.constConfig().ChessAutoIncreaseMoneyNum.constValue),
                    i = 0;
                for (var o in e)
                    if (t == e[o][0] - 1) i = e[o][1];
                    else if (t >= e.length) {
                    i = e[e.length - 1][1];
                    break
                }
                var n = void 0,
                    s = u.proxy.curPlayer.winLoseStreak % 1e4,
                    a = 0;
                if (u.gp_tips.visible = !0, Math.floor(u.proxy.curPlayer.winLoseStreak / 1e4) == EBattleResult.EBattleResultWin) {
                    n = "连胜奖励";
                    for (var r = 0, h = d; r < h.length && s >= (p = h[r])[0]; r++) a = p[1]
                } else {
                    n = "连败补偿";
                    for (var c = 0, l = g; c < l.length; c++) {
                        var p;
                        if (!(s >= (p = l[c])[0])) break;
                        a = p[1]
                    }
                }
                u.lb_desc.textFlow = [{
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
                    text: "当前金币：" + u.proxy.curPlayer.gold + "\n",
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
                    text: "+" + Math.min(Math.floor(u.proxy.curPlayer.gold / _[0]) * _[1], _[2]) + "\n",
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
                    text: "+" + f,
                    style: {
                        size: 20,
                        textColor: 1900321
                    }
                }], a && u.lb_desc.textFlow.push({
                    text: "\n下回合" + n + "：",
                    style: {
                        size: 20,
                        textColor: 16777215
                    }
                }, {
                    text: "+" + a,
                    style: {
                        size: 20,
                        textColor: 1900321
                    }
                })
            }
        })
    }, e.prototype.showUp = function () {
        DragonBoneTools.playOnce({
            effectName: "common_zzqdjts",
            parent: this.gp_up,
            x: this.gp_up.width / 2,
            y: this.gp_up.height / 2,
            scaleX: 1,
            scaleY: 1,
            keep: !1,
            loop: !1,
            doneCB: function () {}
        })
    }, e.prototype.xy2Pos = function (t, e) {}, e.prototype.pos2XY = function (t) {
        var e = 0,
            i = 0;
        return i = t - 1 < ZZQ_CONST.SHANGZHEN_NUM ? (e = Math.ceil(t / ZZQ_CONST.SHANGZHEN_NUM) - 1, (t - 1) % ZZQ_CONST.SHANGZHEN_NUM) : (e = Math.ceil((t - 8) / ZZQ_CONST.BEIBAO_LINE_EACH_COUNT) - 1, (t - 9) % ZZQ_CONST.BEIBAO_LINE_EACH_COUNT), 0 == e && t - 1 < 8 ? i < ZZQ_CONST.QIANPAI_NUM ? [105 * i + 105, 105 * e + 20] : [105 * i - 210, 105 * e + 130] : [107 * i + 5, 100 * e + 295]
    }, e.prototype.headClick = function (t) {
        this.proxy.curPlayer.uuid != t.vo.uuid && m.AppFacade.getInstance().showSubView(m.ZzqMediator.N, m.ZzqMediator.SV.PLAYERINFO, {
            vo: t.vo
        })
    }, e.prototype.init = function () {
        var o = this;
        this.proxy.curRoomInfo.players.forEach(function (t, e) {
            var i = new customui.ZzqChessPlayerHead({
                vo: t,
                myUuid: o.proxy.curRoomInfo.uuid
            });
            i.addTapEvent(function (t) {
                o.headClick(t)
            }), (o.playerHead2Obj[t.uuid] = i).y = e * i.height, o.gp_players.addChild(i), o.playerHeads.push(i)
        }), this.countDownScheId = egret.setInterval(this.countDownUpdate, this, 1e3);
        for (var t = 1; t <= ZZQ_CONST.SHANGZHEN_NUM + ZZQ_CONST.BEIBAO_NUM; t++) {
            var e = customui.BaseItemForChessFactory.create();
            this.pos2HeroBI[t] = e;
            var i = this.pos2XY(t);
            e.x = i[0], e.y = i[1], e.scaleX = .9, e.scaleY = .9, this.gp_heroList.addChild(e)
        }
        for (t = 0; t < 6; t++) {
            var n = new customui.ZzqWinEffect;
            this.winEffectList.push(n), this.gp_effect.addChild(n)
        }
        this.updateCurPlayerInfo(), this.proxy.GetHeroList(), this.proxy.GetWchessRoomInfo(), this.updatePlayerHeads(), this.updateNextUuid()
    }, e.prototype.countDownUpdate = function () {
        if (this.countDownSecond) {
            var t = this.countDownSecond - (Utils.TimerManager.getServerTime() - this.proxy.countDownSDT);
            t-- <= 0 || (t <= ZZQ_CONST.DAOJISHI_RED && this.proxy.curRoomInfo.status == EWchessRoomStatus.Handle ? (this.blb_tips.text = "即将战斗\n" + t, this.mediator.sendNotification(CN.ZZQ_STATUS_FIGHT_DAOJISHI, t)) : this.blb_tips.text = this.tips + "\n" + t)
        }
    }, e.prototype.countDown = function (t, e) {
        this.tips = t, this.countDownSecond = e || 0, this.proxy.countDownSDT = Utils.TimerManager.getServerTime() - (this.proxy.curRoomInfo.sysDt - this.proxy.curRoomInfo.dt), this.updateNextUuid()
    }, e.prototype.updateNextUuid = function () {
        for (var t in this.proxy.curRoomInfo.opponentList)
            if (this.proxy.curRoomInfo.uuid == this.proxy.curRoomInfo.opponentList[t].attackUuid) {
                var e = this.proxy.getPlayerInfoByUuid(this.proxy.curRoomInfo.opponentList[t].defenceUuid);
                this.lb_next.text = e.name;
                break
            }
    }, e.prototype.updateIsStreak = function () {
        var a = this,
            r = 0;
        this.proxy.curRoomInfo.players.forEach(function (t, e) {
            var i = t.winLoseStreak,
                o = parseInt((i / 1e4).toFixed(0)),
                n = parseInt((i % 1e4).toFixed(0));
            if (1 == o && (5 == n || 8 == n || 10 == n)) {
                var s = {
                    winNum: n,
                    number: r,
                    name: t.name
                };
                a.winEffectList[r].updateEffectInfo(s), r++
            }
        }), this.proxy.getPlayerInfoByUuid(this.proxy.curRoomInfo.uuid)
    }, e.prototype.updateCurPlayerInfo = function () {
        this.levelC = m.Config.chessLevelHero(this.proxy.curPlayer.level);
        var t = m.Config.chessLevelHeroOther(this.proxy.curPlayer.level);
        this.pb_exp.maximum = t.exp, this.lockStationList = JSON.parse(this.levelC.stationList), this.lb_jinbi.text = this.proxy.curPlayer.gold.toString(), this.blb_level.text = this.proxy.curPlayer.level.toString(), this.pb_exp.value = this.proxy.curPlayer.exp;
        var e = m.Config.chessLevelHeroLength();
        this.proxy.curPlayer.level >= e && (this.pb_exp.value = this.pb_exp.maximum);
        var i = Math.ceil(this.proxy.curPlayer.exp / t.exp * this.pb_exp.width);
        i > this.pb_exp.width && (i = this.pb_exp.width), this.updateLock(), this.proxy.curPlayer.life <= 0 && this.handleDead()
    }, e.prototype.handleDead = function () {
        this.isDead = !0
    }, e.prototype.updateLock = function () {
        for (var t = 1; t <= ZZQ_CONST.SHANGZHEN_NUM; t++) this.lockStationList[t - 1] ? this.pos2HeroBI[t].vo || (this.pos2HeroBI[t].img_icon.source = "") : this.pos2HeroBI[t].img_icon.source = "common_img_xiaosuo_png"
    }, e.prototype.updateEffectList = function () {
        for (var t in this.pos2HeroBI)
            if (!this.pos2HeroBI[t].isHave && 8 < Number(t)) {
                var e = {
                    pos: t,
                    race: this.proxy.effectList1[0].race
                };
                this.proxy.effectList1.push(e);
                break
            } this.proxy.effectList1.sort(function (t, e) {
            return t.pos > e.pos ? 1 : -1
        })
    }, e.prototype.updateEffect = function () {
        if (0 < this.proxy.effectList1.length) {
            var t = 5 == this.proxy.effectList1[0].race ? 1 : 2;
            if (this.updateEffectList(), this.proxy.effectList1.length > t)
                for (var e = 0; e < this.proxy.effectList1.length; e++) {
                    var i = 0 == e ? "common_huijushengji_1" : "common_kapaixiaoshi";
                    this.pos2HeroBI[this.proxy.effectList1[e].pos].playEffect(i)
                }
        }
        if (0 < this.proxy.effectList2.length && 0 < this.proxy.effectList1.length) {
            var o = 5 == this.proxy.effectList1[0].race ? 1 : 2,
                n = 5 == this.proxy.effectList2[0].race ? 0 : 1;
            if (this.proxy.effectList2.sort(function (t, e) {
                    return t.pos > e.pos ? 1 : -1
                }), this.proxy.effectList2.length > n && this.proxy.effectList1.length > o)
                for (e = 0; e < this.proxy.effectList2.length; e++) {
                    var s = 0 == e ? "common_huijushengji_1" : "common_kapaixiaoshi";
                    this.pos2HeroBI[this.proxy.effectList2[e].pos].playEffect(s)
                }
        }
    }, e.prototype.updateHeroList = function () {
        var e = this,
            i = {};
        for (var t in this.proxy.curHeroList.forEach(function (t) {
                i[t.pos] = 1, e.pos2HeroBI[t.pos].updateData({
                    vo: t
                })
            }), this.pos2HeroBI) i[t] || this.pos2HeroBI[t].resetFixedStyle();
        var o = 0,
            n = 0;
        this.proxy.curHeroList.forEach(function (t) {
            t.pos <= ZZQ_CONST.SHANGZHEN_NUM && o++
        }), this.lockStationList.forEach(function (t) {
            t && n++
        }), this.lb_renshu.text = o + "/" + n, this.updateLock(), this.updateGpHero()
    }, e.prototype.updateGpHero = function () {
        for (var t = [], e = [], i = 0, o = this.proxy.curHeroList; i < o.length; i++) {
            var n = o[i];
            n.isInFormation() && e.indexOf(n.config.subType) < 0 && (t.push(n.code), e.push(n.config.subType))
        }
        if (0 < t.length) {
            var s = this.gp_halo,
                a = m.AppFacade.getInstance().retrieveProxy(m.HeroPy.N).getActivatedHaloId(t, !0),
                r = m.Config.heroHaloConfig();
            for (var h in s.removeChildren(), a) {
                var c = r[a[h]],
                    l = new m.ZzqHaloItem({
                        icon: m.GeneralConfig.getGuajiImg(c.img)[1]
                    });
                s.addChild(l)
            }
        }
    }, e.prototype.updateBarrage = function () {
        var t = void 0;
        if (this.proxy.barrageInfo) {
            for (var e = 0, i = this.proxy.barrageInfo; e < i.length; e++) {
                var o = i[e],
                    n = (t = t || m.Config.chessHero())[o.code];
                if (n) {
                    for (var s = " ", a = 0; a < n.initStar; a++) s += "★";
                    var r = this.proxy.getPlayerInfoByUuid(o.uuid);
                    if (r) {
                        var h = r.name + " → ";
                        this.CommonBarrage.addOneMsgAutoFormat({
                            speed: 100,
                            text: [{
                                text: h
                            }, {
                                text: n.name,
                                style: {
                                    textColor: m.GeneralConfig.getColorByColor(n.color)
                                }
                            }, {
                                text: s
                            }]
                        })
                    }
                }
            }
            this.proxy.barrageInfo.splice(0)
        }
        if (this.proxy.battleDetailBarrageInfo) {
            this.proxy.battleDetailBarrageInfo.sort(function (t, e) {
                return t.round - e.round
            });
            for (var c = 0, l = this.proxy.battleDetailBarrageInfo; c < l.length; c++) o = l[c], this.CommonBarrage.addOneMsgAutoFormat({
                speed: 100,
                text: [{
                    text: this.proxy.getPlayerInfoByUuid(o.attackUuid).name + " "
                }, {
                    text: "" + o.attackNum,
                    style: {
                        textColor: 1761866
                    }
                }, {
                    text: " → "
                }, {
                    text: this.proxy.getPlayerInfoByUuid(o.defenceUuid).name + " "
                }, {
                    text: "" + o.defenceNum,
                    style: {
                        textColor: 1761866
                    }
                }]
            });
            this.proxy.battleDetailBarrageInfo.splice(0)
        }
    }, e.prototype.updateView = function (t, e) {
        e && this.init()
    }, e.prototype.updatePlayerHeads = function () {
        var s = this;
        this.playerHeads.sort(function (t, e) {
            return 0 < t.vo.life && e.vo.life <= 0 ? -1 : t.vo.life <= 0 && 0 < e.vo.life ? 1 : t.vo.dt != e.vo.dt ? e.vo.dt - t.vo.dt : e.vo.life - t.vo.life
        }), this.playerHeads.forEach(function (t, e) {
            for (var i = 0, o = s.proxy.curRoomInfo.players; i < o.length; i++) {
                var n = o[i];
                if (n.uuid == t.vo.uuid) {
                    t.updateData({
                        vo: n
                    }), t.vo.life <= 0 && UIActionManager.setAbsGrey(t, !0);
                    break
                }
            }
            egret.Tween.removeTweens(t), egret.Tween.get(t).to({
                y: e * t.height
            }, 250, egret.Ease.sineInOut)
        })
    }, e.prototype.popResult = function () {
        var e = this;
        if (this.proxy.latestFightStatis) {
            var t = void 0;
            t = this.proxy.latestFightStatis.result == EBattleResult.EBattleResultWin ? "zzq_txt_shengli_png" : "zzq_txt_zhanbai_png", RES.getResAsync(t, function (t) {
                e.img_result.visible = !0, e.img_result.source = t, egret.Tween.removeTweens(e.img_result), egret.Tween.get(e.img_result).call(function () {
                    e.img_result.visible = !0, e.img_result.alpha = 0
                }).to({
                    alpha: 1
                }, 500).wait(1e3).to({
                    alpha: 0
                }, 500).call(function () {
                    e.img_result.visible = !1
                })
            }, this)
        }
    }, e.prototype.bindTipsPanelClick = function (t) {
        var e = this,
            i = t.target;
        i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.cb, this), i.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            e.gp_tips.visible = !1
        }, this), i.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
            e.gp_tips.visible = !1
        }, this), i.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            e.gp_tips.visible = !1
        }, this)
    }, e.prototype.addListener = function () {
        this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    }, e.prototype.removeListener = function () {
        this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this), this.gp_touchField.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
    }, e.prototype.setModelToXY = function (t, e, i) {
        t.width, t.scaleX, t.height, t.scaleY, t.x += (e - this.beginX) / this.addScale, t.y += (i - this.beginY) / this.addScale, this.beginX = e, this.beginY = i
    }, e.prototype.getTouchedGroupPos = function (t) {
        for (var e in this.pos2HeroBI) {
            var i = this.pos2HeroBI[e];
            if (!(Number(e) <= ZZQ_CONST.SHANGZHEN_NUM && !this.lockStationList[Number(e) - 1] || i == this.targetItem)) {
                var o = i.localToGlobal();
                if (this.rect ? this.rect.setTo(o.x, o.y, i.width * this.addScale, i.height * this.addScale) : this.rect = new egret.Rectangle(o.x, o.y, i.width * this.addScale, i.height * this.addScale), this.rect.contains(t.stageX, t.stageY)) return e
            }
        }
    }, e.prototype.setHeroToPos = function (t, e, i) {
        if (void 0 === i && (i = !1), t) {
            this.pos2HeroBI[this.startingPos] = void 0, this.startingPos && this.startingPos != e && this.pos2HeroBI[e] && this.setHeroToPos(this.pos2HeroBI[e], this.startingPos, !0), this.pos2HeroBI[e] = t;
            var o = this.pos2XY(e);
            t.x = o[0], t.y = o[1], i || this.proxy.ChangeFormation(this.startingPos, e)
        }
    }, e.prototype.onTouchBegin = function (t) {
        if (!this.isDead) {
            var e = this.getTouchedGroupPos(t);
            if (e && this.pos2HeroBI[e]) {
                if (this.targetItem = this.pos2HeroBI[e], !this.targetItem.vo) return void(this.targetItem = void 0);
                this.targetItemTouchTM = Date.now(), this.gp_heroList.setChildIndex(this.targetItem, -1), this.startingPos = e, this.gp_touchField.width = this.width, this.gp_touchField.height = this.height, this.beginX = t.stageX, this.beginY = t.stageY
            }
        }
    }, e.prototype.onTouchMove = function (t) {
        this.targetItem && this.setModelToXY(this.targetItem, t.stageX, t.stageY)
    }, e.prototype.onTouchEnd = function (t) {
        if (this.targetItem) {
            var e = this.getTouchedGroupPos(t);
            Date.now() - this.targetItemTouchTM < ZZQ_CONST.TOUCH_AS_CLICK ? (this.mediator.showSubView(m.ZzqMediator.SV.DETAIL, {
                vo: this.targetItem.vo
            }), this.setHeroToPos(this.targetItem, this.startingPos)) : e ? this.setHeroToPos(this.targetItem, e) : this.setHeroToPos(this.targetItem, this.startingPos), this.targetItem = void 0, this.startingPos = void 0, this.gp_touchField.width = this.gp_heroList.width, this.gp_touchField.height = this.gp_heroList.height
        }
    }, e.prototype.showHaloPanel = function () {
        for (var t = [], e = [], i = 0, o = this.proxy.curHeroList; i < o.length; i++) {
            var n = o[i];
            n.isInFormation() && e.indexOf(n.config.subType) < 0 && (t.push(n.code), e.push(n.config.subType))
        }
        0 == t.length ? Utils.MsgUtils.addMidMsg("请先上阵英雄") : this.mediator.showSubView(m.ZzqMediator.SV.HEROHALO, {
            codeList: t
        })
    }, e);

    function e() {
        var t = i.call(this) || this;
        return t.lockStationList = [0, 0, 0, 0, 0, 0, 0, 0], t.addScale = Utils.DeviceUtils.additionScale(), t.beginX = 0, t.beginY = 0, t.skinName = "ZzqChessSkin", t.proxy = m.AppFacade.getInstance().retrieveProxy(m.ZzqPy.N), t.playerHeads = new Array, t.winEffectList = new Array, t.playerHead2Obj = {}, t.pos2HeroBI = {}, window._zzq = t
    }
    m.ZzqChess = t
}(game = game || {}),
function (i) {
    var o, t = (o = BasePanel, __extends(e, o), e.prototype.onDestroy = function () {
        o.prototype.onDestroy.call(this)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        for (var t in o.prototype.childrenCreated.call(this), this.btn_refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                e.proxy.ChangeCard()
            }, this), this.gp_touch1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                e.hide()
            }, this), this.gp_touch2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                e.hide()
            }, this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                e.hide()
            }, this), this.blb_cost.text = "x" + i.Config.constConfig().ChessRefreshCardsCosts.constValue, this.zzqChessCards = {
                1: this.cu_card1,
                2: this.cu_card2,
                3: this.cu_card3,
                4: this.cu_card4,
                5: this.cu_card5
            }, this.zzqChessCards) this.zzqChessCards[t].addTapEvent(function (t) {
            e.onTapEvent(t)
        })
    }, e.prototype.show = function () {
        this.visible = !0
    }, e.prototype.hide = function () {
        this.visible = !1
    }, e.prototype.onTapEvent = function (t) {
        this.proxy.BuyCard(t, function () {
            t.visible = !1
        })
    }, e.prototype.updateCardColor = function () {
        var t = this.proxy.curPlayer.gold;
        for (var e in this.zzqChessCards) this.zzqChessCards[e].visible && this.zzqChessCards[e].updateCardColor(t)
    }, e.prototype.updateView = function (t, e) {
        var i = this;
        if (this.proxy.curCards) {
            for (var o in this.zzqChessCards) this.zzqChessCards[o].visible = !1;
            var n = this.proxy.curPlayer.gold;
            this.proxy.curCards.forEach(function (t) {
                var e = i.zzqChessCards[t.pos];
                e.visible = !0, e.updateData(t, n)
            })
        }
    }, e);

    function e() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqChessPickSkin", t.proxy = i.AppFacade.getInstance().retrieveProxy(i.ZzqPy.N), t.scaleX = t.scaleY = 1, t
    }
    i.ZzqChessPick = t
}(game = game || {}),
function (e) {
    var i, t = (i = BasePanel, __extends(o, i), o.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this)
    }, o.prototype.updateView = function (t) {
        var i = this;
        t ? (t.vo.forEach(function (t, e) {
            i.vo.push(t)
        }), this.vo.sort(function (t, e) {
            return t.rank > e.rank ? 1 : -1
        })) : (this.py.curRoomInfo.players.forEach(function (t, e) {
            i.vo.push(t)
        }), this.vo.sort(function (t, e) {
            return 0 < t.life && e.life <= 0 ? -1 : t.life <= 0 && 0 < e.life ? 1 : t.dt != e.dt ? e.dt - t.dt : e.life - t.life
        })), this.gpList = [], this.gpList.push(this.gp_player1, this.gp_player2, this.gp_player3, this.gp_player4, this.gp_player5, this.gp_player6), this.vo && this.updatePlayerInfo()
    }, o.prototype.updatePlayerInfo = function () {
        var o = this;
        this.vo.forEach(function (t, e) {
            var i = new customui.ZzqChessResultItem;
            i.updateData({
                vo: t,
                index: e
            }), o.gpList[e].removeChildren(), o.gpList[e].addChild(i)
        })
    }, o);

    function o() {
        var t = i.call(this) || this;
        return t.skinName = "ZzqChessResultSkin", t.vo = new Array, t.py = e.GameMVC.zzqPy, t
    }
    e.ZzqChessResult = t
}(game = game || {}),
function (T) {
    var e, t = (e = eui.Component, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, i.prototype.updateData = function (t) {
        this.gp_result1.visible = 0 == t.index, this.gp_result2.visible = 1 == t.index, this.gp_result3.visible = 2 == t.index, this.lb_resultNum.visible = 2 < t.index, this.lb_resultNum.text = t.index + 1, this.lb_name.text = t.vo.name;
        var e = [],
            i = {
                text: t.vo.winNum + "",
                style: {
                    textColor: 2555657
                }
            },
            o = {
                text: "-" + t.vo.loseNum,
                style: {
                    textColor: 16777215
                }
            };
        e.push(i, o), this.lb_result1.textFlow = e;
        var n = JSON.parse(t.vo.stationList);
        t.vo.level = null == t.vo.level ? 0 < n.length ? n.length : 1 : t.vo.level;
        var s = game.Config.chessLevelHero(t.vo.level),
            a = JSON.parse(s.stationList);
        a.forEach(function (t) {}), this.gp_heroInfo.removeChildren();
        for (var r = 1; r <= ZZQ_CONST.SHANGZHEN_NUM; r++) {
            var h = T.BaseItemForChessFactory.create();
            if (h.scaleX = .35, h.scaleY = .35, a[r - 1]) {
                for (var c = !1, l = 0, p = n; l < p.length; l++) {
                    var u = p[l];
                    if (u[0] == r) {
                        h.updateData({
                            code: u[1]
                        }), c = !0;
                        break
                    }
                }
                c || h.resetFixedStyle()
            } else h.resetFixedStyle(), h.img_icon.source = "common_img_xiaosuo_png";
            this.gp_heroInfo.addChild(h)
        }
        var d = t.vo.grade;
        if (null != d) {
            var g = game.Config.chessStarLevel();
            if (g) {
                var _, f, m = -1,
                    y = !1;
                for (var v in g) {
                    var b = g[v];
                    if (y || (d >= b.requestGrade ? (b.code, _ = b) : y = !0), y && !f && (f = b), y) {
                        if (!(m < Number(b.stars))) break;
                        m = Number(b.stars)
                    }
                }
                for (var C in this.img_rank_0.source = ResourceUtils.png(_.icon), this.img_rank_0.width = 32, this.img_rank_0.height = 26, this.RANK_IMAGE)
                    if (-1 != _.name.search(C)) {
                        this.img_rank_1.source = ResourceUtils.png(this.RANK_IMAGE[C]);
                        break
                    } this.img_rank_2.visible = 0 != _.num, 0 != _.num && (this.img_rank_2.source = "paiweisai_img_" + _.num + "_png")
            }
        }
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.RANK_IMAGE = {
            "青铜": "paiweisai_txt_qingtong",
            "白银": "paiweisai_txt_baiyin",
            "黄金": "paiweisai_txt_huangjin",
            "铂金": "paiweisai_txt_bojin",
            "钻石": "paiweisai_txt_zuanshi",
            "星耀": "paiweisai_txt_xingyao",
            "王者": "paiweisai_txt_wangzhe"
        }, t.skinName = "ZzqChessResultItemSkin", t
    }
    T.ZzqChessResultItem = t
}(customui = customui || {}),
function (S) {
    var i, t = (i = BasePanel, __extends(c, i), c.prototype.updateView = function (t) {
        this.playerInfo = t.info, this.onBarItemTap()
    }, c.prototype.childrenCreated = function () {
        var t = this;
        i.prototype.childrenCreated.call(this), this.commonDaTanKuang.blb_title.text = "个人信息", this.commonDaTanKuang.onCloseCB = function () {
            t.hide()
        }, this.initTabbar(), this.initMyInfoList(), this.initHeroChoose()
    }, c.prototype.initTabbar = function () {
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
    }, c.prototype.initMyInfoList = function () {
        for (var t in this.playerTenList.push(this.gp_last0), this.playerTenList.push(this.gp_last1), this.playerTenList.push(this.gp_last2), this.playerTenList.push(this.gp_last3), this.playerTenList.push(this.gp_last4), this.playerTenList.push(this.gp_last5), this.playerTenList.push(this.gp_last6), this.playerTenList.push(this.gp_last7), this.playerTenList.push(this.gp_last8), this.playerTenList.push(this.gp_last9), this.playerTenList) this.playerTenList[t].visible = !1;
        this.playerTenTextList.push(this.lb_last0), this.playerTenTextList.push(this.lb_last1), this.playerTenTextList.push(this.lb_last2), this.playerTenTextList.push(this.lb_last3), this.playerTenTextList.push(this.lb_last4), this.playerTenTextList.push(this.lb_last5), this.playerTenTextList.push(this.lb_last6), this.playerTenTextList.push(this.lb_last7), this.playerTenTextList.push(this.lb_last8), this.playerTenTextList.push(this.lb_last9)
    }, c.prototype.initHeroChoose = function () {
        var t = this;
        this.gp_choose1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.updateHeroListBychoose(1)
        }, this), this.gp_choose2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.updateHeroListBychoose(2)
        }, this), this.gp_choose3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.updateHeroListBychoose(3)
        }, this)
    }, c.prototype.onBarItemTap = function (t) {
        var e = this;
        switch (void 0 === t && (t = {
            itemIndex: c.TAB_VIEW.MYINFO
        }), this.gp_myinfo.visible = !1, this.gp_heroList.visible = !1, this.gp_history.visible = !1, this.gp_recommend.visible = !1, t.itemIndex) {
            case c.TAB_VIEW.MYINFO:
                this.commonDaTanKuang.blb_title.text = "个人信息", this.gp_myinfo.visible = !0, this.updateMyInfo(this.playerInfo);
                break;
            case c.TAB_VIEW.HEROINFO:
                this.commonDaTanKuang.blb_title.text = "英雄信息", this.initHeroList ? (this.scroller_heroList.viewport.scrollV = 0, this.scroller_heroList.viewport.validateNow(), this.scroller_heroList.stopAnimation(), this.gp_heroList.visible = !0) : this.proxy.GetWchessHeroCount(function (t) {
                    e.updateHeroList({
                        info: t.info,
                        times: t.times
                    })
                });
                break;
            case c.TAB_VIEW.hISTORYINFO:
                this.commonDaTanKuang.blb_title.text = "历史战绩", this.initHistoryList ? (this.scroller_history.viewport.scrollV = 0, this.scroller_history.viewport.validateNow(), this.scroller_history.stopAnimation()) : (this.list_historyItem.itemRenderer = l, this.updateHistoryList()), this.gp_history.visible = !0;
                break;
            case c.TAB_VIEW.TEAMINFO:
                this.commonDaTanKuang.blb_title.text = "推荐阵容", this.initRecommendList ? (this.scroller_recommend.viewport.scrollV = 0, this.scroller_recommend.viewport.validateNow(), this.scroller_recommend.stopAnimation()) : this.updateRecommendList(), this.gp_recommend.visible = !0
        }
    }, c.prototype.updateRecommendList = function () {
        var t = S.Config.chessRecommend();
        this.list_recommend.itemRenderer = o;
        var e = new Array;
        for (var i in t) e.push(t[i]);
        this.list_recommend.dataProvider = new eui.ArrayCollection(e), this.gp_recommend.visible = !0
    }, c.prototype.updateHeroListBychoose = function (t) {
        var l = this;
        for (var e in this.img_choose1.visible = !1, this.img_choose2.visible = !1, this.img_choose3.visible = !1, 1 == t ? (this.heroIsUP1 = !this.heroIsUP1, this.img_choose1.rotation = this.heroIsUP1 ? 90 : -90, this.img_choose1.visible = !0, this.heroList.sort(function (t, e) {
                return t.appearTimes > e.appearTimes ? 1 == l.heroIsUP1 ? -1 : 1 : 1 == l.heroIsUP1 ? 1 : -1
            })) : 2 == t ? (this.heroIsUP2 = !this.heroIsUP2, this.img_choose2.rotation = this.heroIsUP2 ? 90 : -90, this.img_choose2.visible = !0, this.heroList.sort(function (t, e) {
                var i = t.successTimes / t.appearTimes;
                return e.successTimes / e.appearTimes < i ? 1 == l.heroIsUP2 ? -1 : 1 : 1 == l.heroIsUP2 ? 1 : -1
            })) : 3 == t && (this.heroIsUP3 = !this.heroIsUP3, this.img_choose3.rotation = this.heroIsUP3 ? 90 : -90, this.img_choose3.visible = !0, this.heroList.sort(function (t, e) {
                var i, o = JSON.parse(t.rankTimes),
                    n = 0,
                    s = 0;
                for (var a in o) n += o[a][0] * o[a][1], s += o[a][1];
                i = n / s;
                var r = JSON.parse(e.rankTimes),
                    h = 0,
                    c = 0;
                for (var a in r) h += r[a][0] * r[a][1], c += r[a][1];
                return h / c < i ? 1 == l.heroIsUP3 ? -1 : 1 : 1 == l.heroIsUP3 ? 1 : -1
            })), this.heroList) this.heroList[e].indexNum = e;
        this.list_heroList.dataProvider = new eui.ArrayCollection(this.heroList)
    }, c.prototype.updateHeroList = function (i) {
        if (this.initHeroList = !0, i || i.info) {
            for (var t in this.list_heroList.itemRenderer = a, this.heroList = i.info, this.allTimes = i.times, this.heroList.sort(function (t, e) {
                    return t.allTime = i.times, e.allTime = i.times, t.appearTimes > e.appearTimes ? -1 : 1
                }), this.heroList) this.heroList[t].indexNum = t;
            this.heroIsUP1 = !0, this.heroIsUP2 = !1, this.heroIsUP3 = !1, this.img_choose1.rotation = 90, this.img_choose1.visible = !0, this.img_choose2.visible = !1, this.img_choose3.visible = !1, this.list_heroList.dataProvider = new eui.ArrayCollection(this.heroList), this.gp_heroList.visible = !0
        } else this.scroller_heroList.stopAnimation(), this.scroller_heroList.viewport.scrollV = 0
    }, c.prototype.updateHistoryList = function () {
        var t = this;
        if (this.playerInfo || this.playerInfo.records) {
            for (var e = new Array, i = JSON.parse(this.playerInfo.records), o = 0; o < i.length; o++) i[o].index = o, e.push(i[o]);
            e.sort(function (t, e) {
                return t.dt > e.dt ? -1 : 1
            });
            var n = 0,
                s = new egret.Timer(30, e.length);
            this.list_historyItem.dataProvider = new eui.ArrayCollection(e), s.addEventListener(egret.TimerEvent.TIMER, function () {
                n < t.list_historyItem.$children.length && (t.list_historyItem.getChildAt(n).visible = !0, n++, t.scroller_history.viewport.validateNow(), t.scroller_history.stopAnimation())
            }, this), s.start()
        } else this.scroller_history.stopAnimation(), this.scroller_history.viewport.scrollV = 0
    }, c.prototype.updateMyInfo = function (t) {
        if (this.lb_name.text = this.proxy.curPlayer.name, this.cu_playerHead = customui.ZzqPlayerHeadFactory.create(), this.cu_playerHead.x = this.cu_playerHead.y = 1.34, this.cu_playerHead.width = this.cu_playerHead.height = 80, this.gp_item.addChild(this.cu_playerHead), this.cu_playerHead.updateData({
                vo: this.proxy.curPlayer
            }), t && t.grade ? this.lb_now.text = this.updateGradeInfo(t.grade) : this.lb_now.text = "青铜", t && t.hGrade ? this.lb_old.text = this.updateGradeInfo(t.hGrade) : this.lb_old.text = "青铜", t && t.rankTimes) {
            var e = 0,
                i = 0,
                o = 0,
                n = 0,
                s = JSON.parse(t.rankTimes);
            for (var a in s) e += s[a][1], s[a][0] < 2 && (i += s[a][1]), s[a][0] < 4 && (o += s[a][1]), n += s[a][0] * s[a][1];
            this.lb_infonum1.text = e + "", this.lb_infonum2.text = i + "", this.lb_infonum3.text = (i / e * 100).toFixed(0) + "%", this.lb_infonum4.text = o + "", this.lb_infonum5.text = (o / e * 100).toFixed(0) + "%", this.lb_infonum6.text = (n / e).toFixed(1)
        } else this.lb_infonum1.text = "0", this.lb_infonum2.text = "0", this.lb_infonum3.text = "0%", this.lb_infonum4.text = "0", this.lb_infonum5.text = "0%", this.lb_infonum6.text = "0";
        if (t && t.records) {
            var r = 0,
                h = 0,
                c = JSON.parse(t.records);
            c.sort(function (t, e) {
                return t.dt > e.dt ? -1 : 1
            });
            for (var l = 0; l < c.length && !(9 < l); l++) {
                r++, h += c[l].rank, this.playerTenList[l].visible = !0;
                var p = this.playerTenList[l].$children[1],
                    u = this.playerTenList[l].$children[2],
                    d = this.playerTenList[l].$children[3],
                    g = this.playerTenList[l].$children[4];
                p.visible = 1 == c[l].rank, u.visible = 2 == c[l].rank, d.visible = 3 == c[l].rank, g.visible = 3 < c[l].rank, this.playerTenTextList[l].text = c[l].rank
            }
            this.lbl_rank.text = (h / r).toFixed(1)
        } else
            for (var a in this.lbl_rank.text = "0", this.playerTenList) this.playerTenList[a].visible = !1
    }, c.prototype.updateGradeInfo = function (t) {
        if (null != t) {
            var e = S.Config.chessStarLevel();
            if (e) {
                var i, o, n = -1,
                    s = !1;
                for (var a in e) {
                    var r = e[a];
                    if (s || (t >= r.requestGrade ? (r.code, i = r) : s = !0), s && !o && (o = r), s) {
                        if (!(n < Number(r.stars))) break;
                        n = Number(r.stars)
                    }
                }
                for (var h in c.RANK_IMAGE)
                    if (-1 != i.name.search(h)) return c.RANK_IMAGE[h]
            }
        }
    }, c.RANK_IMAGE = {
        "青铜": "青铜",
        "白银": "白银",
        "黄金": "黄金",
        "铂金": "铂金",
        "钻石": "钻石",
        "星耀": "星耀",
        "王者": "王者"
    }, c.TAB_VIEW = {
        MYINFO: 0,
        HEROINFO: 1,
        hISTORYINFO: 2,
        TEAMINFO: 3
    }, c);

    function c(t) {
        var e = i.call(this) || this;
        return e.playerInfo = void 0, e.playerTenList = [], e.playerTenTextList = [], e.initHeroList = !1, e.initHistoryList = !1, e.initRecommendList = !1, e.heroList = void 0, e.allTimes = void 0, e.heroIsUP1 = !1, e.heroIsUP2 = !1, e.heroIsUP3 = !1, e.skinName = "ZzqDataInfoSkin", e.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), e.initHeroList = !1, e.initHistoryList = !1, e.initRecommendList = !1, e
    }
    S.ZzqDataInfo = t;
    var e, o = (e = eui.ItemRenderer, __extends(n, e), n.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, n.prototype.dataChanged = function () {
        this.gp_team.removeChildren();
        var t = this.data;
        this.lb_text.text = t.content;
        for (var e = JSON.parse(t.stationList), i = (null == e.length || e.length, 0); i < e.length; i++) {
            var o = customui.BaseItemForChessFactory.create();
            o.scaleX = .5, o.scaleY = .5, o.updateData({
                code: e[i]
            }), this.gp_team.addChild(o)
        }
        if (this.gp_buff.removeChildren(), 0 < e.length) {
            var n = this.gp_buff,
                s = S.AppFacade.getInstance().retrieveProxy(S.HeroPy.N).getActivatedHaloId(e, !0),
                a = S.Config.heroHaloConfig();
            for (var r in s) {
                var h = a[s[r]],
                    c = new S.ZzqHaloItem({
                        icon: S.GeneralConfig.getGuajiImg(h.img)[1]
                    });
                n.addChild(c)
            }
        }
    }, n);

    function n() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqDataRecommendItemSkin", t.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), t
    }
    var s, a = (s = eui.ItemRenderer, __extends(r, s), r.prototype.childrenCreated = function () {
        s.prototype.childrenCreated.call(this), this.baseitem = customui.BaseItemForChessFactory.create(), this.baseitem.touchEnabled = !1, this.baseitem.scaleX = .6, this.baseitem.scaleY = .6, this.gp_item.addChild(this.baseitem)
    }, r.prototype.dataChanged = function () {
        var t = this.data;
        this.img_di.visible = this.data.indexNum % 2 != 0;
        var e, i = S.Config.chessHero();
        for (var o in i)
            if (i[o].subType == t.subType) {
                e = i[o];
                break
            } this.baseitem.updateData(e), this.lb_rank.text = e.name, this.lb_num1.text = (100 * t.appearTimes / (6 * t.allTime)).toFixed(1) + "%", this.lb_num2.text = (100 * t.successTimes / t.appearTimes).toFixed(1) + "%";
        var n = JSON.parse(t.rankTimes),
            s = 0,
            a = 0;
        for (var o in n) s += n[o][0] * n[o][1], a += n[o][1];
        this.lb_num3.text = (s / a).toFixed(1)
    }, r);

    function r() {
        var t = s.call(this) || this;
        return t.skinName = "ZzqDataHeroItemSkin", t.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), t
    }
    var h, l = (h = eui.ItemRenderer, __extends(p, h), p.prototype.childrenCreated = function () {
        var e = this;
        h.prototype.childrenCreated.call(this), this.img_all.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.GetWchessResultLog(e.data.resultUuid, function (t) {
                e.showResult({
                    info: t.info
                })
            })
        }, this)
    }, p.prototype.dataChanged = function () {
        var t = this.data;
        this.img_di.visible = this.data.index % 2 != 0, this.gp_team.removeChildren(), this.gp_halo.removeChildren(), this.img_rank_0.visible = 1 == t.rank, this.img_rank_1.visible = 2 == t.rank, this.img_rank_2.visible = 3 == t.rank, this.lb_rank.visible = 3 < t.rank, this.lb_rank.text = t.rank;
        for (var e = JSON.parse(t.stationList), i = null == e.length ? 1 : e.length, o = S.Config.chessLevelHero(i), n = JSON.parse(o.stationList), s = 1; s <= ZZQ_CONST.SHANGZHEN_NUM; s++) {
            var a = customui.BaseItemForChessFactory.create();
            if (a.scaleX = .35, a.scaleY = .35, n[s - 1]) {
                for (var r = !1, h = 0, c = e; h < c.length; h++) {
                    var l = c[h];
                    if (l[0] == s) {
                        a.updateData({
                            code: l[1]
                        }), r = !0;
                        break
                    }
                }
                r || a.resetFixedStyle()
            } else a.resetFixedStyle(), a.img_icon.source = "common_img_xiaosuo_png";
            this.gp_team.addChild(a)
        }
        var p = t.grade;
        if (null != p) {
            var u = S.Config.chessStarLevel();
            if (u) {
                var d, g, _ = -1,
                    f = !1;
                for (var m in u) {
                    var y = u[m];
                    if (f || (p >= y.requestGrade ? (y.code, d = y) : f = !0), f && !g && (g = y), f) {
                        if (!(_ < Number(y.stars))) break;
                        _ = Number(y.stars)
                    }
                }
                for (var v in this.img_rank_3.source = ResourceUtils.png(d.icon), this.img_rank_3.width = 32, this.img_rank_3.height = 26, this.RANK_IMAGE)
                    if (-1 != d.name.search(v)) {
                        this.img_rank_4.source = ResourceUtils.png(this.RANK_IMAGE[v]);
                        break
                    } if (this.img_rank_5.visible = 0 != d.num, 0 != d.num && (this.img_rank_5.source = "paiweisai_img_" + d.num + "_png"), e) {
                    this.gp_halo.removeChildren();
                    var b = [],
                        C = [];
                    for (var T in e) C.indexOf(S.Config.chessHero()[e[T][1]]) < 0 && (b.push(e[T][1]), C.push(S.Config.chessHero()[e[T][1]]));
                    if (0 < b.length) {
                        var E = this.gp_halo,
                            I = S.AppFacade.getInstance().retrieveProxy(S.HeroPy.N).getActivatedHaloId(b, !0),
                            x = S.Config.heroHaloConfig();
                        for (var T in I) {
                            y = x[I[T]];
                            var P = new S.ZzqHaloItem({
                                icon: S.GeneralConfig.getGuajiImg(y.img)[1]
                            });
                            P.scaleX = .8, P.scaleY = .8, E.addChild(P)
                        }
                    }
                }
            }
        }
    }, p.prototype.showResult = function (t) {
        var e = t.info;
        S.AppFacade.getInstance().showSubView(S.ZzqMediator.N, S.ZzqMediator.SV.RESULT, {
            vo: e.players
        })
    }, p);

    function p() {
        var t = h.call(this) || this;
        return t.RANK_IMAGE = {
            "青铜": "paiweisai_txt_qingtong",
            "白银": "paiweisai_txt_baiyin",
            "黄金": "paiweisai_txt_huangjin",
            "铂金": "paiweisai_txt_bojin",
            "钻石": "paiweisai_txt_zuanshi",
            "星耀": "paiweisai_txt_xingyao",
            "王者": "paiweisai_txt_wangzhe"
        }, t.skinName = "ZzqDataHistoryItemSkin", t.proxy = S.AppFacade.getInstance().retrieveProxy(S.ZzqPy.N), t
    }
}(game = game || {}),
function (t) {
    var i, e = (i = eui.ItemRenderer, __extends(o, i), o.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this), this.img_icon.source = this.params.icon
    }, o);

    function o(t) {
        var e = i.call(this) || this;
        return e.skinName = "FightHaloItem", e.params = t, e
    }
    t.ZzqHaloItem = e
}(game = game || {}),
function (s) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), this.initList(), this.activateComponent(), this.initialized = !1, this.gp_content.scaleX = this.gp_content.scaleY = 1, UIActionManager.playUIAction(this.gp_content, 1), this.scroller.addEventListener(egret.Event.CHANGE, function () {
            var t = 1 == e.select ? 1450 : 1790;
            e.list_item.scrollV >= t && (e.list_item.scrollV = t)
        }, this)
    }, e.prototype.guanghuanData = function () {
        function t(t) {
            var i = a[t];
            if (i.haloType == HaloType.Chess) {
                var e = i.type,
                    o = i.subType;
                r[o] || (r[o] = {
                    name: i.name,
                    type: e,
                    subType: o,
                    slot: [],
                    showNum: 0,
                    img: i.img,
                    skillDesc: {},
                    first: !0
                });
                var n = r[o],
                    s = n.slot;
                h.forEach(function (t, e) {
                    !s[e] && i[t] && s.push(i[t])
                }), n.skillDesc[s.length] = i.haloSkillDesc, n.showNum = s.length
            }
        }
        var a = s.Config.heroHaloConfig(),
            r = {},
            h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (var e in a) t(e);
        this.ghDataList = r
    }, e.prototype.initList = function () {
        this.scroller.scrollPolicyV = eui.ScrollPolicy.AUTO;
        var t = new eui.VerticalLayout;
        this.list_item.layout = t, this.list_item.itemRenderer = h, this.list_filter.itemRenderer = p, this.list_filter.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onFilterListItemTap, this)
    }, e.prototype.onFilterListItemTap = function (t) {
        if (this.curFilter && this.curFilter == t.item.data ? this.curFilter = void 0 : this.curFilter = t.item.data, this.select != t.item.data.select) {
            this.select = t.item.data.select;
            var e = this.list_filter.dataProvider;
            for (var i in e.source) {
                var o = e.source[i];
                o == t.item ? o.chosen = !o.chosen : o.chosen = !1
            }
            e.refresh(), this.updateList()
        }
    }, e.prototype.fadeFilterListItemTap = function (t) {
        this.curFilter && this.curFilter == t.item.data ? this.curFilter = void 0 : this.curFilter = t.item.data;
        var e = this.list_filter.dataProvider;
        for (var i in e.source) {
            var o = e.source[i];
            o.data.select == t.item.data.select ? o.chosen = !o.chosen : o.chosen = !1
        }
        e.refresh(), this.updateList()
    }, e.prototype.onListItemTap = function (t) {
        this.log("点击事件:", t);
        var e = t.item.info,
            i = e.code;
        Math.floor(i / 1e7), this.mediator.showSubView(s.ZzqMediator.SV.DETAIL, {
            vo: e,
            isShowBtn: !0
        })
    }, e.prototype.updateView = function (t) {
        this.params = t, this.targetConfig = this.ITEM_TYPE_CONFIG, this.targetConfig && (this.initialized || (this.initialized = !0, this.guanghuanData(), this.resetFilterAndSorter(), this.fadeFilterListItemTap({
            item: {
                isHero: !0,
                data: this.targetConfig.filterConfig.data[0],
                chosen: !1
            }
        })), this.updateList())
    }, e.prototype.updateList = function () {
        this.targetConfig.filterConfig && this.targetConfig.filterConfig.filterFunc;
        var t = this.targetConfig.sortConfig && this.targetConfig.sortConfig.defaultSortFunc,
            e = this.targetConfig.getAllInfo(this.select);
        if (e) {
            e[1] && (this.gp_empty.visible = !1, this.scroller.visible = !0);
            var i = {};
            if (t)
                for (var o in e) {
                    var n = e[o],
                        s = [];
                    for (var a in n) {
                        var r = n[a];
                        s.push({
                            info: r,
                            get: !0
                        })
                    }
                    i[o] = s, i[o].sort(t)
                }
            var h = [];
            for (var o in i) {
                var c = i[o];
                h.push({
                    data: c,
                    id: o,
                    select: this.select,
                    ghData: this.ghDataList[this.mapId[o]]
                })
            }
            this.list_item.dataProvider ? this.list_item.dataProvider.replaceAll(h) : this.list_item.dataProvider = new eui.ArrayCollection(h), this.scroller.stopAnimation(), this.scroller.viewport.scrollV = 0
        } else this.gp_empty.visible = !0, this.scroller.visible = !1
    }, e.prototype.resetFilterAndSorter = function () {
        if (this.targetConfig.filterConfig) {
            this.list_filter.visible = !0, this.curFilter = void 0;
            var e = [];
            "英雄" == this.targetConfig.type || "碎片" == this.targetConfig.type ? (this.targetConfig.filterConfig.data.forEach(function (t) {
                e.push({
                    data: t,
                    chosen: !1,
                    isHero: !0
                })
            }), this.list_filter.x = (this.gp_content.width - (183 * e.length + 15 * (e.length - 1))) / 2 + 15) : (this.targetConfig.filterConfig.data.forEach(function (t) {
                e.push({
                    data: t,
                    chosen: !1,
                    isHero: !1
                })
            }), this.list_filter.x = (this.gp_content.width - (183 * e.length + 15 * (e.length - 1))) / 2), this.list_filter.dataProvider = new eui.ArrayCollection(e)
        } else this.list_filter.visible = !1;
        this.blb_title.text = this.targetConfig.desc
    }, e.prototype.activateComponent = function () {
        var t = this;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this)
    }, e.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.params && this.params.closeCB && this.params.closeCB()
    }, e);

    function e() {
        var t = i.call(this) || this;
        return t.curType = EEntityType.EEntityTypeHero, t.ghDataList = {}, t.select = 1, t.ITEM_TYPE_CONFIG = {
            desc: "图鉴",
            type: "英雄",
            barSource: {
                up: "_btn_yq_m_json.beibao_yeqian_yingxiong_0",
                down: "_btn_yq_m_json.beibao_yeqian_yingxiong_1"
            },
            getAllInfo: function (t) {
                var e = {},
                    i = s.Config.chessHero();
                for (var o in i) {
                    var n = i[o];
                    n.isShow && 3 == n.initStar && (1 == t ? (e[n.race] || (e[n.race] = new Array), e[n.race].push(n)) : (e[n.subProfession] || (e[n.subProfession] = new Array), e[n.subProfession].push(n)))
                }
                return e
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
                filterFunc: function (t, e, i) {
                    return !t || t.race == e.race
                }
            },
            sortConfig: {
                data: [{
                    desc: "等级"
                }, {
                    desc: "星级"
                }],
                defaultSortFunc: function (t, e) {
                    var i = t.info,
                        o = e.info;
                    return i.initStar != o.initStar ? i.initStar - o.initStar : i.costNum != o.costNum ? i.costNum - o.costNum : i.race != o.race ? i.race - o.race : i.profession != o.profession ? HERO_SORT_ORDER[o.profession] - HERO_SORT_ORDER[i.profession] : i.code - o.code
                }
            }
        }, t.mapId = {
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
        }, t.skinName = "HandBookMainViewSkin", t
    }
    s.ZzqHeroBookView = t;
    var o, a = (o = eui.ItemRenderer, __extends(n, o), n.prototype.childrenCreated = function () {
        this.baseitem = customui.BaseItemForChessFactory.create(), this.baseitem.touchEnabled = !1, this.gp_content.addChild(this.baseitem)
    }, n.prototype.dataChanged = function () {
        var t = this.data.info;
        switch (Math.floor(t.code / 1e7)) {
            case EEntityType.EEntityTypeHero:
                t.maxLevel, t.noStar = !0, this.baseitem.updateData(t), this.baseitem.blb_level.visible = !1;
                break;
            case EEntityType.EEntityTypeHeroArtifact:
                this.baseitem.updateData(t)
        }
        this.data.get ? UIActionManager.setGrey(this.baseitem, !1) : UIActionManager.setGrey(this.baseitem, !0)
    }, n);

    function n() {
        var t = o.call(this) || this;
        return t.skinName = "HandBookItemSkin", t
    }
    var r, h = (r = eui.ItemRenderer, __extends(c, r), c.prototype.childrenCreated = function () {
        var t = this;
        r.prototype.childrenCreated.call(this), this.list_items.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this), this.resetGuanghuan(), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            t.data.ghData && (t.gp_gh.visible = !0, t.initGuanghuan())
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            t.resetGuanghuan()
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function () {
            t.resetGuanghuan()
        }, this), this.lb_guanhuan.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            t.resetGuanghuan()
        }, this)
    }, c.prototype.initGuanghuan = function () {
        var t = this,
            e = new s.ZzqHeroHaloPanel_HaloItem;
        e.initItem(function () {
            e.data = t.data.ghData
        }), this.gp_guanhuan.addChild(e), 502 != this.data.id && 6 != this.data.id || (this.gp_gh.y -= 50)
    }, c.prototype.resetGuanghuan = function () {
        this.gp_gh.visible = !1, this.gp_guanhuan.removeChildren(), !this.data || 502 != this.data.id && 6 != this.data.id || (this.gp_gh.y = 52)
    }, c.prototype.onListItemTap = function (t) {
        egret.log("点击事件:", t);
        var e = t.item.info,
            i = e.code;
        Math.floor(i / 1e7), s.AppFacade.getInstance().retrieveMediator(s.ZzqMediator.N).showSubView(s.ZzqMediator.SV.DETAIL, {
            vo: e,
            isShowBtn: !0
        })
    }, c.prototype.dataChanged = function () {
        this.list_items.itemRenderer = a, this.lb_guanhuan.textFlow = [{
            text: "显示光环",
            style: {
                underline: !0
            }
        }];
        var t, e = this.data.data,
            i = this.data.id,
            o = (t = 1 == this.data.select ? HeroRaceConfig[i] : SubProfessionConfig[i]).haoloIcon;
        this.img_tilte_flag.source = o;
        var n = t.name;
        201 == i && (n = "元素"), 202 == i && (n = "魔导"), this.lb_name.text = n, this.list_items.dataProvider = new eui.ArrayCollection(e)
    }, c);

    function c(t) {
        var e = r.call(this) || this;
        return e.isGuanghuan = !1, e.skinName = "heroBookSortItemSkin", e.params = t, e
    }
    s.HeroBookSortItem = h;
    var l, p = (l = eui.ItemRenderer, __extends(u, l), u.prototype.childrenCreated = function () {
        l.prototype.childrenCreated.call(this)
    }, u.prototype.dataChanged = function () {
        this.data.isHero && (this.width = 183, this.scaleX = .9, this.scaleY = .9), this.chosen = this.data.chosen || !1, this.img_icon.source = this.data.data.icon, this.img_chosen.source = this.data.data.chosenImg, this.setChosen(this.chosen)
    }, u.prototype.setChosen = function (t) {
        this.chosen = t, this.img_chosen.visible = this.chosen
    }, u);

    function u() {
        var t = l.call(this) || this;
        return t.skinName = "HeroBookTapItemSkin", t
    }
    s.HeroBookTapItem = p
}(game = game || {}),
function (p) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this), this.list_item.itemRenderer = n
    }, i.prototype.updateView = function (t) {
        var a, e = t && t.codeList;

        function i(t) {
            var i = h[t];
            if (i.haloType == HaloType.Chess) {
                var e = i.type,
                    o = i.subType;
                r[o] || (r[o] = {
                    name: i.name,
                    type: e,
                    subType: o,
                    slot: [],
                    showNum: 0,
                    img: i.img,
                    skillDesc: {}
                });
                var n = r[o],
                    s = n.slot;
                c.forEach(function (t, e) {
                    !s[e] && i[t] && s.push(i[t])
                }), (!a || 0 <= a.indexOf(i.id)) && (n.showNum = s.length), n.skillDesc[s.length] = i.haloSkillDesc
            }
        }
        e && (a = this.heroPy.getActivatedHaloId(e, !0));
        var r = {},
            h = p.Config.heroHaloConfig(),
            c = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (var o in h) i(o);
        var n = [];
        for (var s in r) {
            var l = r[s];
            n.push(l)
        }
        n.sort(function (t, e) {
            var i = 0 < t.showNum,
                o = 0 < e.showNum;
            return i != o ? o ? 1 : -1 : t.subType - e.subType
        }), n[0].first = !0, this.list_item.dataProvider = new eui.ArrayCollection(n)
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.heroPy = p.AppFacade.getInstance().retrieveProxy(p.HeroPy.N), t.skinName = "HeroHaloSkin", t
    }
    p.ZzqHeroHaloPanel = t;
    var o, n = (o = eui.ItemRenderer, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this);
        for (var t = 0; t < 6; t++) this.gp_condIcon.addChild(new eui.Image)
    }, s.prototype.initItem = function (t) {
        for (var e = 0; e < 6; e++) this.gp_condIcon.addChild(new eui.Image);
        t && t()
    }, s.prototype.dataChanged = function () {
        var n = this;
        UIActionManager.setAbsGrey(this.img_haloIcon, 0 == this.data.showNum), this.img_haloIcon.source = this.data.img + "_png", this.lb_name.text = this.data.name;
        for (var t = this.data.type, e = this.data.slot, i = 0; i < 6; i++) {
            var o = e[i],
                s = this.gp_condIcon.$children[i];
            o ? (s.visible = !0, s.source = t == HeroHaloType.Race ? HeroRaceConfig[o].raceIconBig : SubProfessionConfig[o].icon, UIActionManager.setAbsGrey(s, i >= this.data.showNum)) : s.visible = !1
        }
        this.gp_line.removeChildren();
        var a = this.data.skillDesc,
            r = [],
            h = Object.keys(a);
        h.forEach(function (t, e) {
            var i = a[t];
            if ("" != i && (r.push({
                    text: "(" + t + ") " + i,
                    style: {
                        textColor: Number(t) <= n.data.showNum ? 8060672 : 8553090
                    }
                }), e != h.length - 1 && r.push({
                    text: "\n"
                })), e != h.length - 1) {
                var o = new eui.Image("yingxiong_img_fengexian_png");
                o.x = 44.2 * Number(t) + 26 * (Number(t) - 1 + .5), n.gp_line.addChild(o)
            }
        }), this.lb_desc.textFlow = r, this.img_line.visible = !this.data.first
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqHeroHaloPanel_HaloItem", t
    }
    p.ZzqHeroHaloPanel_HaloItem = n
}(game = game || {}),
function (r) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.hide()
        }, this), this.updateData()
    }, e.prototype.updateData = function () {
        this.gp_next.visible = !0, r.Config.chessGrasp();
        var t = this.proxy.curPlayer.level;
        this.lb_levelNow.text = t + "";
        var e = t + 1,
            i = this.getLevelArr(t),
            o = 0;
        for (var n in i) o += i[n].weight;
        if (this.lbl_now_1.text = i[0].weight / o == 0 ? "0%" : (100 * i[0].weight / o).toFixed(1) + "%", this.lbl_now_2.text = i[1].weight / o == 0 ? "0%" : (100 * i[1].weight / o).toFixed(1) + "%", this.lbl_now_3.text = i[2].weight / o == 0 ? "0%" : (100 * i[2].weight / o).toFixed(1) + "%", this.lbl_now_4.text = i[3].weight / o == 0 ? "0%" : (100 * i[3].weight / o).toFixed(1) + "%", this.lbl_now_5.text = i[4].weight / o == 0 ? "0%" : (100 * i[4].weight / o).toFixed(1) + "%", 8 < e) this.gp_next.visible = !1;
        else {
            this.lb_levelnext.text = e + "";
            var s = this.getLevelArr(e),
                a = 0;
            for (var n in s) a += s[n].weight;
            this.lbl_next_1.text = s[0].weight / a == 0 ? "0%" : (100 * s[0].weight / a).toFixed(1) + "%", this.lbl_next_2.text = s[1].weight / a == 0 ? "0%" : (100 * s[1].weight / a).toFixed(1) + "%", this.lbl_next_3.text = s[2].weight / a == 0 ? "0%" : (100 * s[2].weight / a).toFixed(1) + "%", this.lbl_next_4.text = s[3].weight / a == 0 ? "0%" : (100 * s[3].weight / a).toFixed(1) + "%", this.lbl_next_5.text = s[4].weight / a == 0 ? "0%" : (100 * s[4].weight / a).toFixed(1) + "%"
        }
    }, e.prototype.getLevelArr = function (t) {
        var e = [],
            i = r.Config.chessGrasp();
        for (var o in i) i[o].level == t && e.push(i[o]);
        return e.sort(function (t, e) {
            return t.color > e.color ? 1 : -1
        }), e
    }, e);

    function e() {
        var t = i.call(this) || this;
        return t.skinName = "ZzqLevelDataSkin", t.proxy = r.AppFacade.getInstance().retrieveProxy(r.ZzqPy.N), t
    }
    r.ZzqLevelData = t
}(game = game || {}),
function (a) {
    var i, t = (i = BaseFull, __extends(e, i), e.prototype.onDestroy = function () {
        i.prototype.onDestroy.call(this), this.removeNotice(), a.AppFacade.getInstance().retrieveProxy(a.FriendPy.N).clearInviteHistory(MODULE.Wchess), this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0), Utils.AssetsMgr.destroyGroup("group_zzq")
    }, e.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this);
        var t = {
            emptyCanInvite: !0
        };
        this.playerHeads = [customui.ZzqPlayerHeadFactory.create(t), customui.ZzqPlayerHeadFactory.create(t), customui.ZzqPlayerHeadFactory.create(t), customui.ZzqPlayerHeadFactory.create(t), customui.ZzqPlayerHeadFactory.create(t), customui.ZzqPlayerHeadFactory.create(t)], this.playerHeads.forEach(function (t) {
            e.gp_heads.addChild(t)
        }), this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.amILeader() ? e.proxy.LeaveRoom(function () {
                e.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), a.MainJumpConfig.jumpTo()
            }) : (e.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), a.MainJumpConfig.jumpTo())
        }, this), this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            e.proxy.SPlayerCount(function (t) {
                e.mediator.showSubView(a.ZzqMediator.SV.DATAINFO, {
                    info: t.info
                })
            })
        }, this), Utils.ComponentUtils.registerListener(this.btn_halo, egret.TouchEvent.TOUCH_TAP, function () {
            a.AppFacade.getInstance().showSubView(a.ZzqMediator.N, a.ZzqMediator.SV.HEROHALO)
        }, this), Utils.ComponentUtils.registerListener(this.btn_book, egret.TouchEvent.TOUCH_TAP, function () {
            a.AppFacade.getInstance().showSubView(a.ZzqMediator.N, a.ZzqMediator.SV.HEROBOOK)
        }, this), this.btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            a.AppFacade.getInstance().showSubView(a.RankMediator.N, a.RankMediator.SV.COMMON, {
                module: "ZZQ_RANK"
            })
        }, this), this.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            PopUpManager.addPopUp({
                obj: new a.HelpDialog({
                    moduleId: MODULE.Wchess
                })
            })
        }, this), this.btn_match.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.proxy.amILeader() ? e.proxy.StartMatch() : e.proxy.LeaveRoom(function () {
                e.mediator.sendNotification(CN.ZZQ_STATUS_QUIT), a.MainJumpConfig.jumpTo()
            })
        }, this), this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.proxy.EndMatch(function () {})
        }, this), Utils.TouchUtils.addTouchListener(this.btn_reward, function () {
            var t = a.Config.chessStarLevel()[e.rewardInfo.starLevel];
            e.proxy.curPlayer.hGrade >= t.requestGrade ? e.proxy.GetStarLevelReward(e.rewardInfo.starLevel) : a.AppFacade.getInstance().showSubView(a.CommonMediator.N, a.CommonMediator.SV.REWARD_PANEL, {
                rewards: e.rewardInfo.rewards,
                type: a.CommonRewardPreviewPanel.REWARD_TYPE.OBTAIN
            })
        }), this.btn_novice.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.mediator.showSubView(a.ZzqMediator.SV.NOVICE)
        }, this), this.btn_achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var e = this;
            this.proxy.GetAchieveLevel(function (t) {
                e.mediator.showSubView(a.ZzqMediator.SV.ACHIEVEMENT, {
                    info: t
                })
            })
        }, this), "TRUE" != Utils.LocalStorageUtil.getItem("ZZQ_FIRST_GETIN", !0) && (Utils.LocalStorageUtil.setItem("ZZQ_FIRST_GETIN", "TRUE", !0), this.mediator.showSubView(a.ZzqMediator.SV.NOVICE)), this.btn_match.visible = !0, this.btn_cancel.visible = !1, this.fetch(), this.resFullImg.right = -10, this.resFullImg.visible = !1, this.btn_achievement && this.btn_achievement.addChild(this.resFullImg), NoticeManager.addNoticeListener(NT.ZZQ_ACHIEVELEVEL, this.btn_achievement.getChildAt(0), this, BTN_ICON_NOTICE_POS)
    }, e.prototype.fetch = function () {
        var t = this;
        this.proxy.GetWchessRoomInfo(function () {
            t.switchCanInvite(!0)
        })
    }, e.prototype.switchCanInvite = function (i) {
        this.playerHeads.forEach(function (t, e) {
            t.switchCanInviteStatus(i)
        })
    }, e.prototype.updateMatchStatus = function () {
        var t = this;
        if (this.proxy.curRoomInfo.status == EWchessRoomStatus.Matching) {
            this.btn_match.visible = !1, this.btn_cancel.visible = !0, this.lb_tips.text = "匹配中", this.btn_match.visible = !1;
            var e = this.lb_tips.text.length;
            this.scheId || (this.scheId = egret.setInterval(function () {
                t.lb_tips.text.length < e + 3 ? t.lb_tips.text += "." : t.lb_tips.text = "匹配中"
            }, this, 500)), this.switchCanInvite(!1)
        } else this.proxy.curRoomInfo.status == EWchessRoomStatus.ToMatch && (this.btn_match.label = "开始匹配", this.lb_tips.text = "匹配对手", this.btn_match.visible = !0, this.btn_cancel.visible = !1, this.updateTime(), this.switchCanInvite(!0), this.scheId && (egret.clearInterval(this.scheId), this.scheId = void 0));
        this.proxy.amILeader() ? (this.btn_match.label = "开始匹配", this.btn_match.skinName = "skins.ButtonSkinYellow") : (this.btn_match.label = "离开队伍", this.btn_match.skinName = "skins.ButtonSkinRed")
    }, e.prototype.updateTime = function () {
        var t = this.proxy.curRoomInfo.endDt - this.proxy.curRoomInfo.sysDt;
        this.gp_time.visible = !(432e3 < t), this.lbl_time.text = Math.floor(t / 24 / 3600 + 1) + ""
    }, e.prototype.add0 = function (t) {
        return t < 10 ? "0" + t : t
    }, e.prototype.updateView = function (t) {
        var i = this;
        if (this.proxy.curRoomInfo) {
            this.rankBadge.updateBadge({
                type: customui.WorldKingBadge.RANK_TYPE.ZZQ,
                grade: this.proxy.curPlayer.grade
            }), this.rewardInfo = {};
            for (var e = JSON.parse(a.Config.constConfig().ChessStarLevelReward.constValue), o = this.proxy.curPlayer.starLevelTargeted, n = 0; n < e.length; n++) {
                var s = e[n];
                if (o.indexOf(s[0]) < 0) {
                    this.rewardInfo.starLevel = s[0], this.rewardInfo.rewards = s[1];
                    break
                }
            }
            this.rewardInfo.starLevel ? this.gp_reward.visible = !0 : this.gp_reward.visible = !1, t && t.id && (console.log("wchess 来自以下邀请", t.id), this.proxy.JoinRoom(t.id)), this.playerHeads.forEach(function (t, e) {
                t.updateData({
                    vo: i.proxy.curRoomInfo.players[e],
                    tapEvent: i.proxy.curRoomInfo.players[e] ? function () {} : void 0
                })
            }), this.updateMatchStatus(), NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
        }
    }, e);

    function e() {
        var t = i.call(this) || this;
        return t.resFullImg = new eui.Image("_main_m_json.maoxian_icon_man"), Utils.AssetsMgr.loadGroup("group_zzq"), t.skinName = "ZzqMatchingViewSkin", t.proxy = a.AppFacade.getInstance().retrieveProxy(a.ZzqPy.N), t
    }
    a.ZzqMatchingView = t
}(game = game || {}),
function (n) {
    var i, t = (i = BaseMediator, __extends(s, i), s.prototype.initSubView = function () {
        this.addSubView(s.SV.MATCHING, n.ZzqMatchingView), this.addSubView(s.SV.CHESS_MAIN, n.ZzqChess), this.addSubView(s.SV.STATISTICS, n.ZzqStatistics), this.addSubView(s.SV.DETAIL, n.ZzqChessCardDetail), this.addSubView(s.SV.RECORD, n.ZzqBattleRecordPanel), this.addSubView(s.SV.PLAYERINFO, n.ZzqPlayerInfo), this.addSubView(s.SV.HEROBOOK, n.ZzqHeroBookView), this.addSubView(s.SV.HEROHALO, n.ZzqHeroHaloPanel), this.addSubView(s.SV.RESULT, n.ZzqChessResult), this.addSubView(s.SV.DATAINFO, n.ZzqDataInfo), this.addSubView(s.SV.NOVICE, n.ZzqNovice), this.addSubView(s.SV.LEVELDATA, n.ZzqLevelData), this.addSubView(s.SV.ACHIEVEMENT, n.ZzqAchievement), this.addSubView(s.SV.ACHIEVEMENTREWARD, n.ZzqAchievementReward), this.addSubView(s.SV.ACHIEVEMENTREWARDSHOW, n.ZzqAchievementRewardShow), this.addSubView(s.SV.GETACHIEVEMENT, n.ZzqAchievementGet)
    }, s.prototype.listNotificationInterests = function () {
        return [CN.ZZQ_STATUS_QUIT, CN.CONFIG_ALL_LOADED, CN.LOGIN_FINAL_DONE, CN.ZZQ_UPDATE_ROOM_INFO, CN.ZZQ_UPDATE_HERO_INFO, CN.ZZQ_UPDATE_CARD_INFO, CN.ZZQ_UPDATE_CUR_PLAYER, CN.ZZQ_UPDATE_BARRAGE, CN.ZZQ_UPDATE_REWARD_INFO, CN.ZZQ_UPDATE_REWARDCUP_INFO, CN.ZZQ_STATUS_FIGHT_END, SocketConst.SOCKET_RECONNECT]
    }, s.prototype.handleNotification = function (t) {
        var e = this,
            i = t.getBody();
        switch (t.getName()) {
            case CN.CONFIG_ALL_LOADED:
                var o = JSON.parse(n.Config.constConfig().WchessTimeCycle.constValue);
                this.proxy.CONFIG.OPPERA_TM = o[0], this.proxy.CONFIG.BATTLE_TM = o[1];
                break;
            case CN.LOGIN_FINAL_DONE:
                Utils.UnlockMgr.checkPass(MODULE.Wchess, !1).allow && this.proxy.GetAchieveLevel();
                break;
            case CN.ZZQ_STATUS_QUIT:
                this.hideAllSubView(), this.chessRootView = void 0, this.chessPickRootView = void 0, this.initAllViewDone = !1, this.resetRoomState(), customui.ZzqPlayerHeadFactory.clear();
                break;
            case CN.ZZQ_UPDATE_BARRAGE:
                !n.GameMVC.fightPy.isInFight && this.chessRootView && this.chessRootView.updateBarrage();
                break;
            case CN.ZZQ_STATUS_FIGHT_END:
                this.proxy.latestFightStatis && i.uuid == this.proxy.latestFightStatis.battleInfo.uuid ? egret.setTimeout(function () {
                    e.chessRootView && (e.chessPickRootView.updateCardColor(), e.chessRootView.updatePlayerHeads(), e.chessRootView.popResult(), e.chessRootView.updateBarrage(), e.chessRootView.updateIsStreak())
                }, this, 500) : (console.log("wchess 战报uuid不符合"), this.chessRootView.updatePlayerHeads(), this.chessRootView.popResult());
                break;
            case CN.ZZQ_UPDATE_CUR_PLAYER:
                this.chessPickRootView.updateCardColor(), this.chessRootView.updateCurPlayerInfo();
                break;
            case CN.ZZQ_UPDATE_CARD_INFO:
                this.log("wchess卡牌变化"), this.chessPickRootView && this.chessPickRootView.updateView();
                break;
            case CN.ZZQ_UPDATE_REWARD_INFO:
                this.log("wchess成就奖励变化"), this.updateView(s.SV.ACHIEVEMENT), this.updateView(s.SV.ACHIEVEMENTREWARD);
                break;
            case CN.ZZQ_UPDATE_REWARDCUP_INFO:
                this.log("wchess获得新成就"), this.showSubView(s.SV.GETACHIEVEMENT, {
                    info: i.info
                });
                break;
            case CN.ZZQ_UPDATE_HERO_INFO:
                this.log("wchess背包变化"), this.chessRootView.updateEffect(), this.chessRootView.updateHeroList();
                break;
            case CN.ZZQ_UPDATE_ROOM_INFO:
                if (this.proxy.curRoomInfo.status >= EWchessRoomStatus.Matched) {
                    if (this.getSubView(s.SV.MATCHING)) return this.hideSubView(s.SV.MATCHING), void n.MainJumpConfig.jumpTo("ZZQ");
                    this.initAllViewDone && this.chessRootView && this.updateStatus()
                } else this.updateView(s.SV.MATCHING);
                break;
            case SocketConst.SOCKET_RECONNECT:
                (this.getSubView(s.SV.CHESS_MAIN) || this.getSubView(s.SV.MATCHING)) && this.sendNotification(CN.ZZQ_STATUS_QUIT)
        }
    }, s.prototype.updateStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, i, o;
            return __generator(this, function (t) {
                switch (e = this.proxy.curRoomInfo.status, this.chessRootView.updateCurPlayerInfo(), this.log("=当前房间状态====>" + e), e) {
                    case EWchessRoomStatus.Handle:
                        if (this.lastState != e && (this.chessRootView.countDown("准备回合", this.proxy.CONFIG.OPPERA_TM), this.chessRootView.updatePlayerHeads(), 0 < this.proxy.curPlayer.life))
                            for (i in this.proxy.GetHeroList(), this.chessPickRootView.show(), this.proxy.curRoomInfo.players) this.proxy.curRoomInfo.players[i].uuid == this.proxy.curRoomInfo.uuid && (o = this.proxy.curRoomInfo.players[i]).level && (this.proxy.oldlevel != o.level && this.chessRootView.showUp(), this.proxy.oldlevel = o.level);
                        break;
                    case EWchessRoomStatus.Battle:
                        this.chessRootView.countDown("战斗回合", this.proxy.CONFIG.BATTLE_TM);
                        break;
                    case EWchessRoomStatus.ChickenDinner:
                        Utils.MsgUtils.addMidMsg("战斗结束"), this.chessRootView.updatePlayerHeads(), this.resetRoomState(), this.sendNotification(CN.ZZQ_STATUS_QUIT), n.MainJumpConfig.jumpTo(), this.showSubView(s.SV.RESULT)
                }
                return this.lastState = e, [2]
            })
        })
    }, s.prototype.resetRoomState = function () {
        this.lastState = void 0
    }, s.prototype.onViewCreate = function (t) {
        t == s.SV.CHESS_MAIN && (this.chessRootView = this.getSubView(s.SV.CHESS_MAIN), this.initAllViewDone = !0, this.chessPickRootView || (this.chessPickRootView = new n.ZzqChessPick, this.chessRootView.gp_pick.addChild(this.chessPickRootView)))
    }, s.N = "ZzqMediator", s.SV = {
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
    }, s);

    function s(t) {
        void 0 === t && (t = null);
        var e = i.call(this, s.N, t) || this;
        return e.initAllViewDone = !1, e.proxy = n.AppFacade.getInstance().retrieveProxy(n.ZzqPy.N), e
    }
    n.ZzqMediator = t
}(game = game || {}),
function (t) {
    var i, e = (i = BasePanel, __extends(o, i), o.prototype.childrenCreated = function () {
        var e = this;
        i.prototype.childrenCreated.call(this), this.imgList = [], this.imgList.push(this.img_1), this.imgList.push(this.img_2), this.imgList.push(this.img_3), this.noviceNum = 0, this.updateNovicePos(), this.scroller_novice.throwSpeed = 0, this.scroller_novice.bounces = !1, this.scroller_novice.addEventListener(eui.UIEvent.CHANGE_START, function (t) {
            e.startTouch = e.scroller_novice.viewport.scrollH
        }, this), this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.hide()
        }, this), this.scroller_novice.addEventListener(eui.UIEvent.CHANGE_END, function (t) {
            e.endTouchs = e.scroller_novice.viewport.scrollH, e.startTouch > e.endTouchs ? e.noviceNum-- : e.startTouch < e.endTouchs && e.noviceNum++, e.updateNovicePos()
        }, this), this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.noviceNum++, e.updateNovicePos()
        }, this), this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, function (t) {
            e.noviceNum--, e.updateNovicePos()
        }, this)
    }, o.prototype.updateNovicePos = function () {
        2 < this.noviceNum ? this.noviceNum = 2 : this.noviceNum < 0 && (this.noviceNum = 0), this.btn_left.visible = 0 != this.noviceNum, this.btn_right.visible = 2 != this.noviceNum, this.img_now.x = this.imgList[this.noviceNum].x, this.img_now.y = this.imgList[this.noviceNum].y, this.scroller_novice.viewport.scrollH = 506 * this.noviceNum
    }, o);

    function o() {
        var t = i.call(this) || this;
        return t.imgList = [], t.noviceNum = 1, t.skinName = "ZzqNoviceSkin", t
    }
    t.ZzqNovice = e
}(game = game || {}),
function (h) {
    var t = (e.registerAll = function () {
        (new o).register(), (new a).register(), (new l).register(), (new f).register(), (new d).register(), (new v).register(), (new T).register()
    }, e);

    function e() {}
    h.ZzqProcessor = t;
    var i, o = (i = h.ProcessorBase, __extends(n, i), n.prototype.execute = function (t) {
        var e = t.getBody();
        h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N).updateZzqRoomInfo(e.info)
    }, n);

    function n() {
        return i.call(this, "wchess.WchessRoomInfoP", n) || this
    }
    h.WchessRoomInfoP = o;
    var s, a = (s = h.ProcessorBase, __extends(r, s), r.prototype.execute = function (t) {
        var e = t.getBody();
        h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N).updateBarrage(e.barrageList)
    }, r);

    function r() {
        return s.call(this, "wchess.BarrageListP", r) || this
    }
    h.BarrageListP = a;
    var c, l = (c = h.ProcessorBase, __extends(p, c), p.prototype.execute = function (t) {
        var e = t.getBody();
        h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N).updateBattleDetail(e.detailList)
    }, p);

    function p() {
        return c.call(this, "wchess.BattleDetailListP", p) || this
    }
    h.BattleDetailListP = l;
    var u, d = (u = h.ProcessorBase, __extends(g, u), g.prototype.execute = function (t) {
        h.AppFacade.getInstance().retrieveProxy(h.FightPy.N).respBattleInfoP(t.getBody().battleInfo)
    }, g);

    function g() {
        return u.call(this, "wchess.BattleInfoP", g) || this
    }
    var _, f = (_ = h.ProcessorBase, __extends(m, _), m.prototype.execute = function (t) {
        if (h.AppFacade.getInstance().retrieveMediator(h.ZzqMediator.N).getSubView(h.ZzqMediator.SV.CHESS_MAIN) || h.GameMVC.zzqPy.simFight) {
            var e = t.getBody();
            e.battleType || (e.battleType = EBattleType.EBattleTypeWchess);
            for (var i = h.AppFacade.getInstance().retrieveProxy(h.FightPy.N), o = h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N), n = 0, s = e.teams; n < s.length; n++) {
                var a = s[n];
                a.playerId || (a.playerId = a.uuid)
            }
            if (e.isSelf) o.latestFightStatis = e, i.respBattleResultP(e);
            else {
                var r = 0;
                i.isInFight && i.fightType == EBattleType.EBattleTypeWchess && (h.AppFacade.getInstance().sendNotification(CN.FIGHT_SKIP_FIGHT, {
                    ignoreResult: !0
                }), r = 500), egret.setTimeout(function () {
                    h.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
                        type: e.battleType,
                        ignoreStringWay: !0,
                        isPassive: !0,
                        preloadCB: function () {
                            o.latestFightStatis = e, i.respBattleResultP(e)
                        },
                        doneCB: function () {
                            h.AppFacade.getInstance().sendNotification(CN.ZZQ_STATUS_FIGHT_END, {
                                uuid: e.battleInfo.uuid
                            })
                        }
                    })
                }, this, r)
            }
        }
    }, m);

    function m() {
        return _.call(this, "wchess.BattleResultP", m) || this
    }
    var y, v = (y = h.ProcessorBase, __extends(b, y), b.prototype.execute = function (t) {
        var e = t.getBody();
        for (var i in e.allTask)
            if (e.allTask[i].isTarget) {
                h.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_REWARDCUP_INFO, {
                    info: e
                });
                break
            }
    }, b);

    function b() {
        return y.call(this, "wchess.WchessTaskP", b) || this
    }
    h.WchessTaskP = v;
    var C, T = (C = h.ProcessorBase, __extends(E, C), E.prototype.execute = function (t) {
        var e = t.getBody();
        h.AppFacade.getInstance().retrieveProxy(h.ZzqPy.N).rewardLevel = e.level, NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
    }, E);

    function E() {
        return C.call(this, "wchess.AchieveLevelP", E) || this
    }
    h.AchieveLevelP = T
}(game = game || {}),
function (a) {
    var e, t = (e = BaseProxy, __extends(i, e), i.prototype.checkAchieveLevel = function () {
        for (var t = this.rewardLevel, e = a.Config.chessAchieveLevel(), i = [], o = 1; o <= t; o++)
            if (this.playerProxy.playerInfoVO.level >= e[o].playerLevel) {
                var n = {
                    level: o,
                    isGet: !1
                };
                i.push(n)
            } for (var s in i)
            for (var o in this.rewardGetList) i[s].level == this.rewardGetList[o] && (i[s].isGet = !0);
        for (var s in i)
            if (!i[s].isGet) return !0;
        return !1
    }, i.prototype.amILeader = function () {
        return !this.curRoomInfo || this.curRoomInfo.leader == this.curRoomInfo.uuid
    }, i.prototype.isIdle = function () {
        return !this.curRoomInfo || !this.curRoomInfo.id
    }, i.prototype.isCanJoinTeam = function () {
        return !(1 < this.curRoomInfo.players.length)
    }, i.prototype.getPlayerInfoByUuid = function (t) {
        for (var e = 0, i = this.curRoomInfo.players; e < i.length; e++) {
            var o = i[e];
            if (o.uuid == t) return o
        }
    }, Object.defineProperty(i.prototype, "curPlayer", {
        get: function () {
            for (var t = 0, e = this.curRoomInfo.players; t < e.length; t++) {
                var i = e[t];
                if (i.uuid == this.curRoomInfo.uuid) return i
            }
        },
        enumerable: !0,
        configurable: !0
    }), i.prototype.updateBarrage = function (t) {
        this.barrageInfo || (this.barrageInfo = new Array), a.BaseVO.updateArr(t, this.barrageInfo, a.BarrageInfoVO), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_BARRAGE)
    }, i.prototype.updateBattleDetail = function (t) {
        this.battleDetailBarrageInfo || (this.battleDetailBarrageInfo = new Array), a.BaseVO.updateArr(t, this.battleDetailBarrageInfo, a.BattleDetailInfoVO), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_BARRAGE)
    }, i.prototype.updateZzqRoomInfo = function (t, e) {
        void 0 === e && (e = !1), this.curRoomInfo || (this.curRoomInfo = new a.SWchessRoomVO), this.curRoomInfo.update(t), e && (this.curRoomInfo.id = void 0), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_ROOM_INFO)
    }, i.prototype.updateCurPlayer = function (t) {
        this.curPlayer.update(t), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_CUR_PLAYER)
    }, i.prototype.updateHeroList = function (t, e) {
        var n = this;
        void 0 === e && (e = !0), this.curHeroList || (this.curHeroList = new Array), e ? a.BaseVO.updateArr(t, this.curHeroList, a.SWchessHeroVO) : Array.isArray(t) && t.forEach(function (t) {
            for (var e = 0, i = n.curHeroList; e < i.length; e++) {
                var o = i[e];
                if (o.uuid == t.uuid) {
                    o.update(t);
                    break
                }
            }
        }), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_HERO_INFO)
    }, i.prototype.updateCards = function (t) {
        if (this.curCards || (this.curCards = new Array), Array.isArray(t)) {
            for (var e = 0, i = 0, o = t; i < o.length; i++) {
                var n = o[i];
                this.curCards[e] ? this.curCards[e].update(n) : this.curCards.push(new a.SWchessHeroVO(n)), e++
            }
            this.curCards.splice(e)
        }
        a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_CARD_INFO)
    }, i.prototype.updateRewardReceivedList = function (t) {
        for (var e = 0, i = 0, o = t; i < o.length; i++) {
            var n = o[i];
            this.rewardGetList[e] || this.rewardGetList.push(n.level), e++
        }
        this.rewardGetList.splice(e), this.rewardGetList.sort(function (t, e) {
            return e < t ? 1 : -1
        }), a.AppFacade.getInstance().sendNotification(CN.ZZQ_UPDATE_REWARD_INFO), NoticeManager.updateNotice(NT.ZZQ_ACHIEVELEVEL)
    }, i.prototype.GetWchessRoomInfo = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "GetWchessRoomInfo", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.CreateRoom = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "CreateRoom", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.JoinRoom = function (t, e) {
        var i = this;
        Utils.Socket.send("wchess", "JoinRoom", {
            id: t
        }).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.StartMatch = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "StartMatch", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.CancelMatch = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "CancelMatch", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.LeaveRoom = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "LeaveRoom", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info, !0), e && e()
        })
    }, i.prototype.GetHeroList = function (e) {
        var i = this;
        this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "GetHeroList", {}).then(function (t) {
            i.updateHeroList(t.heroList), i.updateCards(t.cards), e && e()
        })
    }, i.prototype.GetCardList = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "GetCardList", {}).then(function (t) {
            i.updateCards(t.cards), e && e()
        })
    }, i.prototype.ChangeCard = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "ChangeCard", {}).then(function (t) {
            i.updateCurPlayer(t.player), i.updateCards(t.cards), e && e()
        })
    }, i.prototype.BuyCard = function (t, e) {
        var i = this;
        for (var o in this.effectList1 = [], this.effectList2 = [], this.curHeroList) {
            if (this.curHeroList[o].code == t.code) {
                var n = {
                    pos: this.curHeroList[o].pos,
                    race: this.curHeroList[o].config.race
                };
                this.effectList1.push(n)
            }
            if (this.curHeroList[o].code == t.nextCode) {
                var s = {
                    pos: this.curHeroList[o].pos,
                    race: this.curHeroList[o].config.race
                };
                this.effectList2.push(s)
            }
        }
        Utils.Socket.send("wchess", "BuyCard", {
            pos: t.pos
        }).then(function (t) {
            i.updateCurPlayer(t.player), i.updateHeroList(t.heroList), i.updateCards(t.cards), e && e()
        })
    }, i.prototype.ChangeFormation = function (t, e, i) {
        var o = this;
        t != e && (this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "ChangeFormation", {
            oPos: Number(t),
            tPos: Number(e)
        }).then(function (t) {
            o.updateHeroList(t.heroList, !1), i && i()
        }))
    }, i.prototype.SellCard = function (t, e, i) {
        var o = this;
        this.effectList1 = [], this.effectList2 = [], Utils.Socket.send("wchess", "SellCard", {
            pos: t,
            uuid: e
        }).then(function (t) {
            o.updateHeroList(t.heroList), o.updateCurPlayer(t.player), i && i()
        })
    }, i.prototype.LockAutoRefreshCards = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "LockAutoRefreshCards", {}).then(function (t) {
            i.updateCurPlayer(t.player), e && e()
        })
    }, i.prototype.BuyExp = function (t, e) {
        var i = this;
        void 0 === t && (t = 1), Utils.Socket.send("wchess", "BuyExp", {
            id: t
        }).then(function (t) {
            i.updateCurPlayer(t.player), i.oldlevel != t.player.level && e && e(t), i.oldlevel = t.player.level
        })
    }, i.prototype.GetStarLevelReward = function (t) {
        var e = this;
        Utils.Socket.send("wchess", "GetStarLevelReward", {
            starLevel: t
        }).then(function (t) {
            e.updateZzqRoomInfo(t.info), a.GameMVC.backpackPy.handleClientReward(t.clientReward)
        })
    }, i.prototype.BattlePlayerBack = function (t, e) {
        a.AppFacade.getInstance().sendNotification(CN.FIGHT_REQ_ANY_FIGHT, {
            type: EBattleType.EBattleTypeWchess,
            pb1: "wchess",
            pb2: "BattlePlayerBack",
            params: {
                uuid: t
            },
            ignoreStringWay: !0
        })
    }, i.prototype.SPlayerCount = function (e) {
        Utils.Socket.send("wchess", "GetWchessPlayerCount", {}).then(function (t) {
            e && e(t)
        })
    }, i.prototype.GetReservedPlayerCount = function (e) {
        Utils.Socket.send("wchess", "GetReservedPlayerCount", {}).then(function (t) {
            e && e(t)
        })
    }, i.prototype.GetWchessHeroCount = function (e) {
        Utils.Socket.send("wchess", "GetWchessHeroCount", {}).then(function (t) {
            e && e(t)
        })
    }, i.prototype.GetWchessResultLog = function (t, e) {
        Utils.Socket.send("wchess", "GetWchessResultLog", {
            resultUuid: t
        }).then(function (t) {
            e && e(t)
        })
    }, i.prototype.ExitChess = function (e) {
        Utils.Socket.send("wchess", "ExitChess", {}).then(function (t) {
            e && e(t)
        })
    }, i.prototype.EndMatch = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "EndMatch", {}).then(function (t) {
            i.updateZzqRoomInfo(t.info), e && e()
        })
    }, i.prototype.GetAchieveLevel = function (e) {
        var i = this;
        Utils.Socket.send("wchess", "GetAchieveLevel", {}).then(function (t) {
            i.rewardLevel = t.level, i.updateRewardReceivedList(t.received), e && e(t)
        })
    }, i.prototype.GetAchieveTaskProgress = function (e) {
        Utils.Socket.send("wchess", "GetAchieveTaskProgress", {}).then(function (t) {
            e && e(t)
        })
    }, i.prototype.GetAchieveRewards = function (t, e) {
        var i = this;
        Utils.Socket.send("wchess", "GetAchieveRewards", {
            level: t
        }).then(function (t) {
            i.GetAchieveLevel(), e && e(t)
        })
    }, i.N = "ZzqProxy", i);

    function i() {
        var t = e.call(this, i.N) || this;
        return t.simFight = !1, t.oldlevel = 1, t.debug_slowFight = !1, t.effectList1 = [], t.effectList2 = [], t.rewardGetList = [], t.rewardLevel = 0, t.CONFIG = {
            OPPERA_TM: 0,
            BATTLE_TM: 0
        }, t.playerPy = a.AppFacade.getInstance().retrieveProxy(a.PlayerPy.N), t.playerProxy = a.AppFacade.getInstance().retrieveProxy(a.PlayerPy.N), t.oldlevel = 1, NoticeManager.registerCB(NT.ZZQ_ACHIEVELEVEL, t.checkAchieveLevel, t), t
    }
    a.ZzqPy = t
}(game = game || {}),
function (d) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.perClose = function () {
        this.doneCB && this.doneCB()
    }, i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.hide()
        }, this), this.list_my.itemRenderer = n, this.list_ennemy.itemRenderer = n, this.initBtn()
    }, i.prototype.updateView = function (t) {
        this.result = t.resultData, this.doneCB = t.doneCB, this.updateInfo()
    }, i.prototype.updateInfo = function () {
        for (var l = this.result.entityResults, t = void 0, e = void 0, i = 0, o = this.result.teams; i < o.length; i++)(h = o[i]).camp == EBattleSide.EBattleSideAttack ? t = h : h.camp == EBattleSide.EBattleSideDefence && (e = h);
        this.lb_name_1.text = t.name, this.lb_name_2.text = e.name, this.cu_head_1.updateData({
            vo: t
        }), this.cu_head_2.updateData({
            vo: e
        }), this.result.result == EBattleResult.EBattleResultWin ? (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shengli), DragonBoneTools.create("common_shengli_2", function (t) {
            t.x = this.gp_root.width / 2, t.y = 50, t.animation.play(), this.gp_root.addChildAt(t, 0)
        }, this)) : (Utils.SoundManager.playSound(SOUND_EFF_TYPE.sound_shibai), DragonBoneTools.create("common_zhanbai_2", function (t) {
            t.x = this.gp_root.width / 2, t.y = 50, t.animation.play(), this.gp_root.addChildAt(t, 0)
        }, this)), this.data = {}, this.data.self = [], this.data.enemy = [];
        var p = -1,
            u = -1;
        for (var n in l) {
            var s = l[n];
            p = p > s.totalHurt ? p : s.totalHurt, u = u > s.totalCure ? u : s.totalCure
        }
        for (var a in this.result.teams) {
            function r(t, e, i) {
                for (var o in t.entities) {
                    var n = t.entities[o];
                    for (var s in e.push({
                            isMagical: !1,
                            code: n.code,
                            entityId: n.entityId,
                            isSelf: i,
                            maxLife: n.life
                        }), l)(c = l[s]).entityId == e[e.length - 1].entityId && (e[e.length - 1].totalHurt = c.totalHurt, e[e.length - 1].totalCure = c.totalCure, e[e.length - 1].life = c.life, p = p > c.totalHurt ? p : c.totalHurt, u = u > c.totalCure ? u : c.totalCure)
                }
                if (t.magical && t.magical.entityId) {
                    var a = t.magical.code,
                        r = d.Config.magicalUpgradeConfig(a);
                    if (r[0] && r[0].costs) {
                        var h = JSON.parse(r[0].costs)[0][1];
                        for (var s in e.push({
                                isMagical: !0,
                                code: h,
                                entityId: t.magical.entityId,
                                isSelf: i,
                                maxLife: 0
                            }), l) {
                            var c;
                            (c = l[s]).entityId == e[e.length - 1].entityId && (e[e.length - 1].totalHurt = c.totalHurt, e[e.length - 1].totalCure = c.totalCure)
                        }
                    }
                }
                e.forEach(function (t) {
                    t.maxHurt = p, t.maxCure = u
                }), e.sort(function (t, e) {
                    return t.isMagical ? 1 : e.isMagical ? -1 : t.entityId - e.entityId
                })
            }
            var h;
            (h = this.result.teams[a]).playerId == t.playerId ? r(h, this.data.self, !0) : r(h, this.data.enemy, !1)
        }
        this.list_my.dataProvider = new eui.ArrayCollection(this.data.self), this.list_ennemy.dataProvider = new eui.ArrayCollection(this.data.enemy)
    }, i.prototype.ChangeContent = function (t) {
        var e = this.list_my.$children;
        for (var i in e)(o = e[i]) && o.changeState(t);
        for (var i in e = this.list_ennemy.$children) {
            var o;
            (o = e[i]) && o.changeState(t)
        }
    }, i.prototype.initBtn = function () {
        var t = this;
        this.btn_hurt.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.HURT), t.img_cure_bg.source = "common_img_dikuang03_png", t.img_hurt_bg.source = "common_img_dikuang01_png", t.img_result_bg.source = "common_img_dikuang03_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu1", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
        }, this), this.btn_cure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.CURE), t.img_cure_bg.source = "common_img_dikuang01_png", t.img_hurt_bg.source = "common_img_dikuang03_png", t.img_result_bg.source = "common_img_dikuang03_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao1", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo2"
        }, this), this.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.ChangeContent(d.FightStatistics.LIST_TYPE.RESULT), t.img_cure_bg.source = "common_img_dikuang03_png", t.img_hurt_bg.source = "common_img_dikuang03_png", t.img_result_bg.source = "common_img_dikuang01_png", t.img_lb_hurt.source = "_fight_m_json.zhandou_txt_shuchu2", t.img_lb_cure.source = "_fight_m_json.zhandou_txt_zhiliao2", t.img_lb_result.source = "_fight_m_json.zzq_txt_jieguo1"
        }, this)
    }, i.LIST_TYPE = {
        HURT: 0,
        CURE: 1
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.doneCB = void 0, t.skinName = "ZzqStatisticsSkin", t.py = d.AppFacade.getInstance().retrieveProxy(d.ZzqPy.N), t
    }
    d.ZzqStatistics = t;
    var o, n = (o = eui.ItemRenderer, __extends(s, o), s.prototype.childrenCreated = function () {
        this.baseitem = customui.BaseItemForChessFactory.create(), this.gp_head.addChild(this.baseitem), this.pb.slideDuration = 0, this.pb.labelDisplay.visible = !1
    }, s.prototype.dataChanged = function () {
        o.prototype.dataChanged.call(this);
        var t = this.data.code;
        this.baseitem.updateData({
            code: t
        }), this.baseitem.scaleX = this.baseitem.scaleY = .6, this.baseitem.touchEnabled = this.baseitem.touchChildren = !1, this.changeState(d.FightStatistics.LIST_TYPE.HURT), this.data.isSelf || (this.scaleX = -1, this.gp_head.scaleX = -1, this.bm_num.scaleX = -1)
    }, s.prototype.changeState = function (t) {
        this.pb.value = 0, t == d.FightStatistics.LIST_TYPE.HURT ? (this.pb.maximum = this.data.maxHurt, this.pb.value = this.data.totalHurt, this.bm_num.text = this.data.totalHurt) : t == d.FightStatistics.LIST_TYPE.RESULT ? (this.pb.maximum = this.data.maxLife, this.pb.value = this.data.life, this.bm_num.text = this.data.life) : (this.pb.maximum = this.data.maxCure, this.pb.value = this.data.totalCure, this.bm_num.text = this.data.totalCure)
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.skinName = "FightStatisticsItemSkin", t
    }
}(game = game || {}),
function (t) {
    var e, i = (e = eui.Component, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, o.prototype.updateEffectInfo = function (t) {
        var e = "common_zzqwljs";
        this.img_type.source = "zzq_txt_wulianjuesheng_png", this.lb_name.text = t.name;
        var i = 1580;
        8 == t.winNum ? (e = "common_zzqbljs", this.img_type.source = "zzq_txt_balianjueshi_png", i = 1540) : 10 == t.winNum && (e = "common_zzqslcf", this.img_type.source = "zzq_txt_shilianchaofan_png", i = 1540), this.gp_root.visible = !0, this.img_type.visible = !0, this.gp_root.x = 350, this.gp_root.y = 70 * t.number, egret.Tween.get(this.gp_root).to({
            x: -70,
            y: this.gp_root.y
        }, 500).call(function () {
            var t = this;
            this.img_type.visible = !1, DragonBoneTools.playOnce({
                effectName: e,
                parent: this.gp_effect,
                x: this.gp_effect.width / 2,
                y: this.gp_effect.height / 2,
                scaleX: 1,
                scaleY: 1,
                keep: !1,
                loop: !1,
                doneCB: function () {
                    t.img_type.visible = !0, egret.Tween.get(t.gp_root).wait(i).to({
                        x: -700,
                        y: t.gp_root.y
                    }, 800).call(function () {
                        this.gp_root.visible = !1
                    }, t)
                }
            })
        }, this)
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqWinEffectSkin", t.gp_root.visible = !1, t
    }
    t.ZzqWinEffect = i
}(customui = customui || {}),
function (e) {
    var i, t = (i = BasePanel, __extends(o, i), o.prototype.childrenCreated = function () {
        var t = this;
        i.prototype.childrenCreated.call(this), this.rootPanel.blb_title.text = "战斗记录", this.rootPanel.onCloseCB = function () {
            t.hide()
        }, this.initTabbar(), this.initList()
    }, o.prototype.initList = function () {
        UIActionManager.hideScrollerBar(this.scl_list), this.list_item.itemRenderer = s
    }, o.prototype.initTabbar = function () {
        this.tabbar.parent.removeChild(this.tabbar)
    }, o.prototype.updateView = function (t) {
        for (var e = this, i = [], o = 0, n = this.proxy.curRoomInfo.players; o < n.length; o++)
            for (var s = n[o], a = 0, r = s.battleRecordList; a < r.length; a++) {
                var h = r[a];
                h.attackUuid == s.uuid && 0 < s.life && i.push({
                    self: {
                        baseInfo: this.proxy.getPlayerInfoByUuid(h.attackUuid)
                    },
                    opp: {
                        baseInfo: this.proxy.getPlayerInfoByUuid(h.defenceUuid)
                    },
                    result: h.win,
                    battleUuid: h.uuid,
                    cb: function () {
                        e.hide()
                    }
                })
            }
        i.sort(function (t) {
            return t.opp.baseInfo.uuid == e.proxy.curRoomInfo.uuid ? -1 : 1
        }), i.sort(function (t) {
            return t.self.baseInfo.uuid == e.proxy.curRoomInfo.uuid ? -1 : 1
        }), this.list_item.dataProvider = new eui.ArrayCollection(i)
    }, o);

    function o() {
        var t = i.call(this) || this;
        return t.proxy = e.AppFacade.getInstance().retrieveProxy(e.ZzqPy.N), t.skinName = "GuildWarBattleRecordSkin", t
    }
    e.ZzqBattleRecordPanel = t;
    var n, s = (n = eui.ItemRenderer, __extends(a, n), a.prototype.childrenCreated = function () {
        n.prototype.childrenCreated.call(this), this.btn_review.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.data && this.data.cb && this.data.cb(), this.fightPy.BattlePlayerBack(this.data.battleUuid)
        }, this), this.playerHead_self = customui.PlayerHeadFactory.create(), this.gp_playerHead_self.addChild(this.playerHead_self), this.playerHead_opp = customui.PlayerHeadFactory.create(), this.gp_playerHead_opp.addChild(this.playerHead_opp)
    }, a.prototype.dataChanged = function () {
        this.lb_self.text = this.data.self.baseInfo.name, this.lb_opp.text = this.data.opp.baseInfo.name, this.playerHead_self.x = 0, this.playerHead_self.y = 0, this.playerHead_self.updateData({
            vo: this.data.self.baseInfo
        }), this.playerHead_opp.x = 0, this.playerHead_opp.y = 0, this.playerHead_opp.updateData({
            vo: this.data.opp.baseInfo
        }), this.img_bg.source = this.data.result == EBattleResult.EBattleResultWin ? "gonghui_img_shengfudi_png" : "gonghui_img_shengfudi2_png"
    }, a);

    function a() {
        var t = n.call(this) || this;
        return t.fightPy = e.AppFacade.getInstance().retrieveProxy(e.ZzqPy.N), t.skinName = "GuildWarBattleRecordPanel_RecordItem", t
    }
}(game = game || {}),
function (t) {
    var e, i = (e = eui.Component, __extends(o, e), o.prototype.childrenCreated = function () {
        e.prototype.childrenCreated.call(this)
    }, o.prototype.addTapEvent = function (t) {
        this.tapEvent = t, this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
    }, o.prototype.onTapEvent = function () {
        this.tapEvent && this.tapEvent(this)
    }, o.prototype.updateData = function (t, e) {
        var i = game.Config.chessHero()[t.code];
        this.code = t.code, this.nextCode = i.nextCode, this.race = i.race, this.needMoney = i.costNum, this.color = i.color, this.cu_model.update({
            code: t.code,
            model: i.model,
            isStatic: !0
        }), this.pos = t.pos, this.lb_name.text = i.name, this.img_profession.source = SubProfessionConfig[i.subProfession].icon, this.img_race.source = HeroRaceConfig[i.race].raceIcon, this.lb_name.textColor = game.GeneralConfig.getColorByColor(i.color), this.blb_money.text = "x" + i.costNum, this.blb_nomoney.text = "x" + i.costNum, this.updateCardColor(e)
    }, o.prototype.updateCardColor = function (t) {
        this.blb_money.visible = t >= this.needMoney, this.blb_nomoney.visible = !this.blb_money.visible
    }, o);

    function o() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqChessCardSkin", t
    }
    t.ZzqChessCard = i
}(customui = customui || {}),
function (d) {
    var e, t = (e = BasePanel, __extends(i, e), i.prototype.childrenCreated = function () {
        var t = this;
        e.prototype.childrenCreated.call(this), this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            t.vo && t.proxy.SellCard(t.vo.pos, t.vo.uuid, function () {
                t.hide()
            })
        }, this)
    }, i.prototype.updateView = function (t, e) {
        if (t && t.vo) {
            this.vo = t.vo;
            var i = d.Config.chessHero()[this.vo.code];
            this.lb_name.text = i.name, this.img_profession.source = SubProfessionConfig[i.subProfession].icon, this.img_race.source = HeroRaceConfig[i.race].raceIcon, this.blb_money.text = "x" + i.costNum, this.blb_money_sell.text = "x" + i.decomposeNum, this.gp_head.removeChildren();
            var o = customui.BaseItemForChessFactory.create({
                vo: this.vo
            });
            this.gp_head.addChild(o);
            var n = [],
                s = JSON.parse(i.baseAttr);
            n = d.GeneralConfig.AttrAddAttr(n, s), this.blb_attack.text = d.GeneralConfig.getAttrValue(n[0][1]), this.blb_HP.text = d.GeneralConfig.getAttrValue(n[1][1]), this.blb_defense.text = d.GeneralConfig.getAttrValue(n[2][1]), this.blb_speed.text = d.GeneralConfig.getAttrValue(n[3][1]), this.lb_heroInfo.text = i.desc;
            var a = [];
            0 != i.posSkill1 && a.push(i.posSkill1), 0 != i.posSkill2 && a.push(i.posSkill2), 0 != i.posSkill3 && a.push(i.posSkill3), 0 != i.actSkill && a.push(i.actSkill);
            var r = [this.cu_skill0, this.cu_skill1, this.cu_skill2, this.cu_skill3],
                h = [this.lb_skillname0, this.lb_skillname1, this.lb_skillname2, this.lb_skillname3],
                c = [this.lb_skillshow0, this.lb_skillshow1, this.lb_skillshow2, this.lb_skillshow3],
                l = [this.img_type0, this.img_type1, this.img_type2, this.img_type3],
                p = [this.gp_skill0, this.gp_skill1, this.gp_skill2, this.gp_skill3];
            for (var u in r) a[u] ? (p[u].visible = !0, this.updateSkillInfo(a[u], r[u], h[u], c[u], l[u], p[u])) : p[u].visible = !1;
            this.btn_sell.visible = !t.isShowBtn
        } else this.hide()
    }, i.prototype.updateSkillInfo = function (t, e, i, o, n, s) {
        var a = d.Config.skillBaseConfig()[t];
        i.text = a.name, o.text = a.desc, 1 == a.action ? n.source = "zzq_icon_pu_png" : 2 == a.action ? n.source = "zzq_icon_zhu_png" : 3 == a.action && (n.source = "zzq_icon_bei_png"), e.updateItem({
            code: t,
            notNeedLevel: !0
        })
    }, i);

    function i() {
        var t = e.call(this) || this;
        return t.skinName = "ZzqChessCardDetailSkin", t.proxy = d.AppFacade.getInstance().retrieveProxy(d.ZzqPy.N), t
    }
    d.ZzqChessCardDetail = t
}(game = game || {}),
function (t) {
    var i, e = (i = eui.Component, __extends(o, i), o.prototype.childrenCreated = function () {
        i.prototype.childrenCreated.call(this), this.originX = this.gp_root.x, this.img_hurt.visible = !1, this.cu_playerHead = t.ZzqPlayerHeadFactory.create(), this.cu_playerHead.x = this.cu_playerHead.y = 1.34, this.cu_playerHead.width = this.cu_playerHead.height = 80, this.cu_playerHead, this.gp_root.addChild(this.cu_playerHead), this.vo && (this.updateData(this.vo), this.updateRankInfo())
    }, o.prototype.addTapEvent = function (t) {
        this.tapEvent = t, this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
    }, o.prototype.onTapEvent = function () {
        this.tapEvent && this.tapEvent(this)
    }, o.prototype.updateRankInfo = function () {
        var t, e = game.Config.chessStarLevel(),
            i = this.vo.grade;
        for (var o in e) {
            var n = e[o];
            if (!(i >= n.requestGrade)) break;
            t = n
        }
        if (t) {
            for (var s in this.img_rank_0.source = ResourceUtils.png(t.icon), this.RANK_IMAGE)
                if (-1 != t.name.search(s)) {
                    this.img_rank_1.source = ResourceUtils.png(this.RANK_IMAGE[s]);
                    break
                } 0 != t.num ? (this.img_rank_2.visible = !0, this.img_rank_2.source = "paiweisai_img_" + t.num + "_png") : this.img_rank_2.visible = !1
        }
    }, o.prototype.updateData = function (t) {
        if (this.cu_playerHead) {
            if (this.vo = t && t.vo, this.cu_playerHead.updateData({
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
                    doneCB: function () {}
                });
                var e = this.pb_hp.value - this.vo.life;
                egret.Tween.get(this.blb_blood).call(function () {
                    this.blb_blood.text = "-" + e, this.blb_blood.visible = !0
                }, this).wait(2e3).call(function () {
                    this.blb_blood.visible = !1
                }, this)
            }
            this.pb_hp.value = this.vo.life
        }
    }, o);

    function o(t) {
        var e = i.call(this) || this;
        return e.RANK_IMAGE = {
            "青铜": "paiweisai_txt_qingtong",
            "白银": "paiweisai_txt_baiyin",
            "黄金": "paiweisai_txt_huangjin",
            "铂金": "paiweisai_txt_bojin",
            "钻石": "paiweisai_txt_zuanshi",
            "星耀": "paiweisai_txt_xingyao",
            "王者": "paiweisai_txt_wangzhe"
        }, e.skinName = "ZzqChessPlayerHeadSkin", e.vo = t, e.myUuid = t.myUuid, e
    }
    t.ZzqChessPlayerHead = e
}(customui = customui || {}),
function (t) {
    var e = (i.create = function (t) {
        var e = Utils.ObjectPoolMgr.pop("customui.ZzqPlayerHead", t);
        return e.once(egret.Event.REMOVED_FROM_STAGE, function () {
            Utils.ObjectPoolMgr.push(e)
        }, this), e
    }, i.clear = function () {
        Utils.ObjectPoolMgr.clearClass("customui.ZzqPlayerHead")
    }, i);

    function i() {}
    t.ZzqPlayerHeadFactory = e;
    var o, n = (o = eui.Component, __extends(s, o), s.prototype.childrenCreated = function () {
        o.prototype.childrenCreated.call(this)
    }, s.prototype.addTapEvent = function (t) {
        this.tapEvent = t
    }, s.prototype.onTapEvent = function () {
        if (this.tapEvent) this.tapEvent();
        else if (this.img_canInvite.visible) {
            var o = game.AppFacade.getInstance().retrieveProxy(game.FriendPy.N),
                t = game.AppFacade.getInstance().retrieveProxy(game.ZzqPy.N),
                n = game.Config.broadcastConfig()[40].content,
                e = game.AppFacade.getInstance().retrieveProxy(game.PlayerPy.N),
                s = [
                    [2, e.playerInfoVO.name, e.playerInfoVO.playerId, EEntityType.EEntityTypePlayer],
                    [1, "<<点击加入", t.curRoomInfo.id, MODULE.Wchess]
                ];
            o.getFriendList(function () {
                PopUpManager.addPopUp({
                    obj: new game.InviteFriendView({
                        moduleId: MODULE.Wchess,
                        tabbarType: 11,
                        inviteCallback: function (t, e) {
                            var i = game.AppFacade.getInstance().retrieveProxy(game.MainPy.N);
                            i.addPrivatePlayer(t), i.SendMessage(EChatChannelType.EChatChannelTypePrivate, n, t, function () {
                                o.addInviteHistory(MODULE.Wchess, t), e && e()
                            }, EChatSendCheckType.None, JSON.stringify(s), !0)
                        }
                    })
                })
            })
        }
    }, s.prototype.updateData = function (t) {
        if (this.vo = t && t.vo, this.vo) {
            if ("" != this.vo.avatar) this.img_icon.visible = !0, this.img_icon.source = ResourceUtils.png(this.vo.avatar);
            else {
                var e = JSON.parse(game.Config.constConfig().DefaultAvatar.constValue)[0];
                this.img_icon.visible = !0, this.img_icon.source = e + "_png"
            }
            this.img_empty.visible = !1
        } else this.img_icon.visible = !1, this.img_empty.visible = !0;
        this.img_canInvite.visible = t && t.emptyCanInvite, t && this.addTapEvent(t.tapEvent)
    }, s.prototype.switchCanInviteStatus = function (t) {
        this.vo ? this.img_canInvite.visible = !1 : this.img_canInvite.visible = t
    }, s.prototype.reset = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this), this.tapEvent = void 0, this.scaleX = this.scaleY = 1, this.width = this.height = void 0, this.x = this.y = 0, this.img_icon.source = "", this.horizontalCenter = this.verticalCenter = void 0, this.img_empty.visible = this.img_canInvite.visible = !1, UIActionManager.setAbsGrey(this, !1)
    }, s.prototype.onOPReset = function () {
        this.reset()
    }, s.prototype.onOPComeBack = function (t, e) {
        t && this.updateData(t), this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEvent, this)
    }, s.prototype.onOPClean = function () {}, s.prototype.onOPCheck = function (t) {
        egret.log("alive")
    }, s);

    function s() {
        var t = o.call(this) || this;
        return t.skinName = "ZzqPlayerHeadSkin", t
    }
    t.ZzqPlayerHead = n
}(customui = customui || {}),
function (c) {
    var i, t = (i = BasePanel, __extends(e, i), e.prototype.childrenCreated = function () {
        if (i.prototype.childrenCreated.call(this), !this.Gruop_pkm.$children.length)
            for (var t = 1; t <= ZZQ_CONST.SHANGZHEN_NUM; t++) {
                var e = customui.BaseItemForChessFactory.create();
                e.scaleX = e.scaleY = .6, e.touchEnabled = e.touchChildren = !1, t < 4 ? (e.x = 70 * (t - 1) + 65, e.y = 0) : (e.x = 70 * (t - 4) + 65, e.y = 70), this.Gruop_pkm.addChild(e)
            }
    }, e.prototype.updatePlayerInfo = function () {
        this.lb_name.text = this.vo.name, this.lb_id.text = "ID：" + this.vo.uuid, this.blb_money.text = "x" + this.vo.gold;
        for (var t = c.Config.chessLevelHero(this.vo.level), e = JSON.parse(t.stationList), i = JSON.parse(this.vo.stationList), o = 1; o <= ZZQ_CONST.SHANGZHEN_NUM; o++) {
            var n = this.Gruop_pkm.getChildAt(o - 1);
            if (e[o - 1]) {
                for (var s = !1, a = 0, r = i; a < r.length; a++) {
                    var h = r[a];
                    if (h[0] == o) {
                        n.updateData({
                            code: h[1]
                        }), s = !0;
                        break
                    }
                }
                s || n.resetFixedStyle()
            } else n.resetFixedStyle(), n.img_icon.source = "common_img_xiaosuo_png"
        }
        this.cu_ph.updateData({
            vo: this.vo
        })
    }, e.prototype.updateView = function (t) {
        this.vo = t.vo, this.vo && this.updatePlayerInfo()
    }, e.prototype.perClose = function () {}, e);

    function e() {
        var t = i.call(this) || this;
        return t.skinName = "ZzqPlayerInfoSkin", t.py = c.AppFacade.getInstance().retrieveProxy(c.ZzqPy.N), t
    }
    c.ZzqPlayerInfo = t
}(game = game || {});