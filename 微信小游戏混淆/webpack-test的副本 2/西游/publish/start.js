var __reflect = this && this.__reflect || function(t, e, o) {
    t.__class__ = e, o ? o.push(e) : o = [ e ], t.__types__ = t.__types__ ? o.concat(t.__types__) : o;
}, __extends = this && this.__extends || function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    };
    return function(e, o) {
        function i() {
            this.constructor = e;
        }
        t(e, o), e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, 
        new i());
    };
}(), __awaiter = this && this.__awaiter || function(t, e, o, i) {
    return new (o || (o = Promise))(function(n, r) {
        function s(t) {
            try {
                h(i.next(t));
            } catch (e) {
                r(e);
            }
        }
        function a(t) {
            try {
                h(i["throw"](t));
            } catch (e) {
                r(e);
            }
        }
        function h(t) {
            t.done ? n(t.value) : new o(function(e) {
                e(t.value);
            }).then(s, a);
        }
        h((i = i.apply(t, e || [])).next());
    });
}, __generator = this && this.__generator || function(t, e) {
    function o(t) {
        return function(e) {
            return i([ t, e ]);
        };
    }
    function i(o) {
        if (n) throw new TypeError("Generator is already executing.");
        for (;h; ) try {
            if (n = 1, r && (s = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(s = s.call(r, o[1])).done) return s;
            switch (r = 0, s && (o = [ 0, s.value ]), o[0]) {
              case 0:
              case 1:
                s = o;
                break;

              case 4:
                return h.label++, {
                    value: o[1],
                    done: !1
                };

              case 5:
                h.label++, r = o[1], o = [ 0 ];
                continue;

              case 7:
                o = h.ops.pop(), h.trys.pop();
                continue;

              default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    h = 0;
                    continue;
                }
                if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                    h.label = o[1];
                    break;
                }
                if (6 === o[0] && h.label < s[1]) {
                    h.label = s[1], s = o;
                    break;
                }
                if (s && h.label < s[2]) {
                    h.label = s[2], h.ops.push(o);
                    break;
                }
                s[2] && h.ops.pop(), h.trys.pop();
                continue;
            }
            o = e.call(t, h);
        } catch (i) {
            o = [ 6, i ], r = 0;
        } finally {
            n = s = 0;
        }
        if (5 & o[0]) throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: !0
        };
    }
    var n, r, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: o(0),
        throw: o(1),
        return: o(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
}, WeatherBase = function() {
    function t(t) {
        this._runing = !1, this._first = !1, this.timerFrame = 15e3, this.index = 0, this.imageList = [], 
        this.m_Temp = 0, this.index = t;
    }
    return t.prototype.playWeather = function(t) {
        this.imageList = t || [], 0 == this._runing && (this._runing = !0, this._first = !0, 
        this.onWeatherStart(), this.timerFrame > 0 || (this.timerFrame = 60), egret.startTick(this.weatherUpdateHandler, this), 
        WeatherFactory.weatherRunlist[this.index] = this);
    }, t.prototype.stopWeather = function() {
        1 == this._runing && (this._runing = !1, egret.stopTick(this.weatherUpdateHandler, this), 
        this.onWeatherStop(), delete WeatherFactory.weatherRunlist[this.index]);
    }, t.prototype.weatherUpdateHandler = function(t) {
        return t > this.m_Temp + this.timerFrame ? (this.m_Temp = t, 1 == this._first ? this._first = !1 : this.onWeatherUpdate(), 
        !1) : !1;
    }, t.prototype.onWeatherInit = function() {}, t.prototype.onWeatherStart = function() {}, 
    t.prototype.onWeatherUpdate = function() {}, t.prototype.onWeatherStop = function() {}, 
    t;
}();

__reflect(WeatherBase.prototype, "WeatherBase");

var TimerMgr = function() {
    function t() {
        this.delayFunArr = [], this._delayCall = null, this._handlers = new Array(), this._delHandlers = new Array(), 
        this._currTime = egret.getTimer(), this._currFrame = 0, this._count = 0, this._timeScale = 1, 
        egret.Ticker.getInstance().register(this.onEnterFrame, this);
    }
    return t.prototype.addDelayFun = function(t, e, o, i) {
        this.delayFunArr.push({
            f: t,
            p: e,
            t: egret.getTimer() + o,
            self: i
        });
    }, t.prototype.checkDelayFunc = function() {
        for (var t = this.delayFunArr.length, e = egret.getTimer(), o = 0; t > o; o++) {
            var i = this.delayFunArr[o];
            i.t <= e && (i.f.apply(i.self, i.p), this.delayFunArr.splice(o, 1), o--, t--);
        }
    }, t.prototype.setTimeScale = function(t) {
        this._timeScale = t;
    }, t.prototype.onEnterFrame = function() {
        this.checkDelayFunc(), this._currFrame++, this._currTime = egret.getTimer();
        for (var t = 0; t < this._count; t++) {
            var e = this._handlers[t], o = e.userFrame ? this._currFrame : this._currTime;
            if (o >= e.exeTime) {
                var i = !1;
                !e.repeat && e.repeatCount <= 1 && (this._handlers.splice(t, 1), i = !0, t--, this._count--);
                var n = e.dealTime;
                e.isRepairTime ? e.exeTime += e.delay : e.exeTime += this._currTime - n, e.dealTime = this._currTime, 
                e.method && (0 == e.method.length ? e.method.call(e.methodObj) : 1 == e.method.length ? e.method.call(e.methodObj, (this._currTime - n) * this._timeScale) : e.method.call(e.methodObj, (this._currTime - n) * this._timeScale, e.methodParam)), 
                e.repeat || (e.repeatCount > 1 ? e.repeatCount-- : e.complateMethod && e.complateMethod.apply(e.complateMethodObj, e.complateMethodParam)), 
                i && (e.clear(), EObjectPool.push("TimerHandlerSdk", e));
            }
        }
    }, t.prototype.create = function(t, e, o, i, n, r, s, a, h, p) {
        if (void 0 === p && (p = !0), !(0 > e || 0 > o || null == i)) {
            var d = this.getTimerHandlerSdk(i, n);
            d || (d = EObjectPool.pop("TimerHandlerSdk")), d || (d = new TimerHandlerSdk()), 
            d.isRepairTime = p, d.userFrame = t, d.repeat = 0 == o, d.repeatCount = o, d.delay = e, 
            d.method = i, d.methodObj = n, d.complateMethod = r, d.complateMethodObj = s, d.exeTime = e + (t ? this._currFrame : egret.getTimer()), 
            d.dealTime = egret.getTimer(), d.methodParam = a, d.complateMethodParam = h, this._handlers.push(d), 
            this._count++;
        }
    }, t.prototype.doTimer = function(t, e, o, i, n, r, s, a, h) {
        void 0 === n && (n = null), void 0 === r && (r = null), void 0 === h && (h = !0), 
        this.create(!1, t, e, o, i, n, r, s, a, h);
    }, t.prototype.doFrame = function(t, e, o, i, n, r, s, a, h) {
        void 0 === n && (n = null), void 0 === r && (r = null), void 0 === h && (h = !0), 
        this.create(!0, t, e, o, i, n, r, s, a, h);
    }, Object.defineProperty(t.prototype, "count", {
        get: function() {
            return this._count;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.remove = function(t, e) {
        for (var o = 0; o < this._count; o++) {
            var i = this._handlers[o];
            if (i.method == t && i.methodObj == e) {
                this._handlers.splice(o, 1), EObjectPool.push("TimerHandlerSdk", i), this._count--;
                break;
            }
        }
    }, t.prototype.getTimerHandlerSdk = function(t, e) {
        for (var o = 0; o < this._count; o++) {
            var i = this._handlers[o];
            if (i.method == t && i.methodObj == e) return i;
        }
        return null;
    }, t.prototype.removeAll = function(t) {
        for (var e = 0; e < this._count; e++) {
            var o = this._handlers[e];
            o.methodObj == t && (this._handlers.splice(e, 1), EObjectPool.push("TimerHandlerSdk", o), 
            this._count--, e--);
        }
    }, t.prototype.isExists = function(t, e) {
        for (var o = 0; o < this._count; o++) {
            var i = this._handlers[o];
            if (i.method == t && i.methodObj == e) return !0;
        }
        return !1;
    }, t.prototype.delayCall = function(t, e, o) {
        void 0 === o && (o = 1);
        var i = new egret.Timer(t, o);
        i.addEventListener(egret.TimerEvent.TIMER, this.onTimeUpdate, this), i.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimeComplete, this), 
        i.start();
    }, t.prototype.onTimeUpdate = function() {
        this._delayCall && this._delayCall();
    }, t.prototype.onTimeComplete = function() {
        this._delayCall = null;
    }, t;
}();

__reflect(TimerMgr.prototype, "TimerMgr");

var TimerHandlerSdk = function() {
    function t() {
        this.delay = 0, this.repeatCount = 0, this.exeTime = 0, this.dealTime = 0, this.isRepairTime = !0;
    }
    return t.prototype.clear = function() {
        this.method = null, this.methodObj = null, this.methodParam = null, this.complateMethod = null, 
        this.complateMethodObj = null, this.complateMethodParam = null;
    }, t;
}();

__reflect(TimerHandlerSdk.prototype, "TimerHandlerSdk");

var RainLine = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.autoRotation = !0, e.sptx = 0, e.speedx = 0, e.speedy = 0, e.targety = 0, 
        e.sy = 0, e.down = !0, e.spt = 0, e.touchEnabled = !1, e.sScale = 0, e.rotationPlus = 0, 
        e;
    }
    return __extends(e, t), e.prototype.update = function() {
        this.spt += this.sptx;
        var t = this.x + this.speedx + 2 * Math.cos(this.spt), e = this.y + this.speedy;
        if (0 == this.type) {
            if (this.autoRotation) {
                var o = -(180 * Math.atan2(t - this.x, e - this.y)) / Math.PI + 90;
                this.rotation = o;
            }
            if (this.x = t, this.y = e, this.down) {
                if (this.y >= this.targety) return void (this.isDeath = !0);
            } else if (this.y <= this.targety) return void (this.isDeath = !0);
        } else if (this.scaleX += .2, this.scaleY += .2, this.scaleX >= 1) return void (this.isDeath = !0);
        this.isDeath = this.x <= 0 || this.y <= 0 || this.x >= this.stage.stageWidth || this.y >= this.stage.stageHeight;
    }, e;
}(egret.Bitmap);

__reflect(RainLine.prototype, "RainLine");

var HttpHelper = function() {
    function t() {}
    return t.GetPlayerServerInfo = function(t, e, o) {
        var i = new egret.HttpRequest();
        i.responseType = egret.HttpResponseType.TEXT;
        var n = "";
        window.fromopenid && (n = "&openid=" + window.fromopenid, console.info("[登录跳转]从openid:" + window.fromopenid + " 跳转过来的")), 
        i.open(WindowData._GetServerAddr() + "/clientLoginPf?platformid=" + WindowData._GetPlatformId() + n + "&token=" + encodeURIComponent(Base64.encode(t)), egret.HttpMethod.GET), 
        i.send(), i.addEventListener(egret.Event.COMPLETE, e, o), i.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.GetXiaomiQuickSign = function(t, e, o) {
        var i = new egret.HttpRequest();
        i.responseType = egret.HttpResponseType.TEXT, i.open(WindowData._GetServerAddr() + "/xiaomisign", egret.HttpMethod.POST), 
        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(t), 
        i.addEventListener(egret.Event.COMPLETE, e, o), i.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.GetOppoQuickPayInfo = function(t, e, o) {
        var i = new egret.HttpRequest();
        i.responseType = egret.HttpResponseType.TEXT, i.open(WindowData._GetServerAddr() + "/oppoprepare", egret.HttpMethod.POST), 
        i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(t), 
        i.addEventListener(egret.Event.COMPLETE, e, o), i.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.GetServerList = function(t, e, o) {
        var i = new egret.HttpRequest();
        i.responseType = egret.HttpResponseType.TEXT, i.open(WindowData._GetServerAddr() + "/clientSelectSvr?platformid=" + WindowData._GetPlatformId() + "&page=" + t, egret.HttpMethod.GET), 
        i.send(), i.addEventListener(egret.Event.COMPLETE, function(i) {
            e.call(o, t, i);
        }, o), i.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.GetRandomName = function(t, e, o, i) {
        var n = new egret.HttpRequest();
        n.responseType = egret.HttpResponseType.TEXT, n.open(WindowData._GetServerAddr() + "/clientGetName?platformid=" + WindowData._GetPlatformId() + "&serverid=" + t + "&sex=" + e, egret.HttpMethod.GET), 
        n.send(), n.addEventListener(egret.Event.COMPLETE, o, i), n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.CheckName = function(t, e, o, i) {
        var n = new egret.HttpRequest();
        n.responseType = egret.HttpResponseType.TEXT, n.open(WindowData._GetServerAddr() + "/clientLockName?platformid=" + WindowData._GetPlatformId() + "&serverid=" + t + "&name=" + encodeURIComponent(e), egret.HttpMethod.GET), 
        n.send(), n.addEventListener(egret.Event.COMPLETE, o, i), n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.GetNotice = function(t, e) {
        var o = new egret.HttpRequest();
        o.responseType = egret.HttpResponseType.TEXT, o.open(WindowData._GetServerAddr() + "/clientPfInfo?platformid=" + WindowData._GetPlatformId(), egret.HttpMethod.GET), 
        o.send(), o.addEventListener(egret.Event.COMPLETE, t, e), o.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.gameNoticeReplace = function(t) {
        var e = window.__CONFIG__;
        if (!e) return t;
        var o = e.__noticeReplaceAll__;
        if (o) return o;
        var i = e.__noticeReplace__;
        if (i) {
            var n = i.split(";");
            if (n && n.length > 0) for (var r = 0; r < n.length; r++) {
                var s = n[r], a = s.split("|");
                if (a && 2 == a.length) {
                    var h = new RegExp(a[0], "g");
                    t = t.replace(h, a[1]);
                }
            }
        }
        return t;
    }, t.SendPoint = function(t) {}, t.SendReport = function(t) {
        var e = new egret.HttpRequest();
        e.responseType = egret.HttpResponseType.TEXT, e.open(WindowData._GetServerAddr() + "/clientReportStatus?user_id=" + Main.Instance.lid + "&status=" + t, egret.HttpMethod.GET), 
        e.send();
    }, t.ucprepare = function(t, e, o, i, n, r, s, a, h) {
        var p = new egret.HttpRequest();
        p.responseType = egret.HttpResponseType.TEXT;
        var d = "Total_amount=" + t;
        d += "&User_id=" + e, d += "&Pay_type=" + o, d += "&Title=" + i, d += "&Platform=" + n, 
        d += "&Extra=" + r, d += "&Notify_url=" + s, p.open(WindowData._GetServerAddr() + "/ucprepare?" + d, egret.HttpMethod.GET), 
        p.send(), p.addEventListener(egret.Event.COMPLETE, a, h), p.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.fengkuangprepare = function(t, e, o, i, n, r) {
        var s = new egret.HttpRequest();
        s.responseType = egret.HttpResponseType.TEXT;
        var a = "goodsId=" + t;
        a += "&goodsName=" + e, a += "&userId=" + o, a += "&ext=" + i, s.open(WindowData._GetServerAddr() + "/fengkuangprepare?" + a, egret.HttpMethod.GET), 
        s.send(), s.addEventListener(egret.Event.COMPLETE, n, r), s.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.fkylcCreate = function(t) {
        var e = new egret.HttpRequest();
        e.responseType = egret.HttpResponseType.TEXT, e.open("https://wxstat.hortor.net/gc/game/player/create", egret.HttpMethod.POST), 
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(t), 
        e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.qzonePCReq = function(t, e, o, i) {
        var n = new egret.HttpRequest();
        n.responseType = egret.HttpResponseType.TEXT, n.open(WindowData._GetServerAddr() + t, egret.HttpMethod.POST), 
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var r = "", s = 0;
        for (var a in e) s > 0 && (r += "&"), r += a + "=" + e[a], s++;
        n.send(r), n.addEventListener(egret.Event.COMPLETE, o, i), n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.Error, this);
    }, t.Error = function() {
        alert("请求错误，请稍后重试");
    }, t.m_Set = {}, t;
}();

__reflect(HttpHelper.prototype, "HttpHelper");

var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.m_Textures = [ {
            path: "",
            data: null
        } ], e.tipx1 = -300, e.tipx2 = 35, e.imgWidth = 486, e.str = "", e.s1 = 0, e.e1 = 0, 
        e.s2 = 0, e.e2 = 0, e.t = 0, e.et = 0, e.pt = 0, e.preveTime = 0, e.mt = 0, e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), 
        e;
    }
    return __extends(e, t), e.prototype.NewBar = function(t) {
        var e = new egret.Bitmap();
        e.x = -342, e.y = t, e.texture = Main.Instance.GetImg("_ui_bm_cjjindutiao01@63_0_60_0"), 
        e.width = 685, e.scale9Grid = new egret.Rectangle(63, 0, 3, 49), e.touchEnabled = !0, 
        this.addChild(e);
        var o = new egret.Bitmap();
        return o.x = -296, o.y = t + 11, o.texture = Main.Instance.GetImg("_ui_bm_cjjindutiao02@14_0_8_0"), 
        o.width = 593, o.scale9Grid = new egret.Rectangle(15, 0, 3, 27), o.touchEnabled = !0, 
        this.addChild(o), o;
    }, e.prototype.onAddToStage = function(t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), Global.sdk.isChaoMeng() ? this.m_Textures[0].path = WindowData._GetResAddr() + "resource/assets/game_start/res/ui_jz_bm_tishi_1.png" : WindowData.GetBtFullVIP() ? this.m_Textures[0].path = WindowData._GetResAddr() + "resource/assets/game_start/res/ui_bm_vipfull.png" : this.m_Textures[0].path = WindowData._GetResAddr() + "resource/assets/game_start/res/ui_bm_vip5.png";
        var e = this.bg = new egret.Bitmap();
        e.addEventListener(egret.Event.COMPLETE, this.updateBg, this), e.texture = Main.Instance.GetSingleImg("ui_xzfwq_p_show"), 
        e.touchEnabled = !0, this.addChild(e), this.onResize(), this.img01 = this.NewBar(926), 
        this.img01Tag = new egret.Bitmap(), this.img01Tag.y = 881, this.img01Tag.texture = Main.Instance.GetImg("_ui_bm_yun"), 
        this.addChild(this.img01Tag), this.img01W = this.SetBarValue(this.img01, 0, this.img01Tag), 
        this.img02 = this.NewBar(1073), this.img02Tag = new egret.Bitmap(), this.img02Tag.y = 1028, 
        this.img02Tag.texture = Main.Instance.GetImg("_ui_bm_yun"), this.addChild(this.img02Tag), 
        this.img02W = this.SetBarValue(this.img02, 0, this.img02Tag), this.tipImg = new egret.Bitmap(), 
        this.tipImg.x = 35, this.tipImg.y = 720, this.addChild(this.tipImg), ServerUI.IsNewServer(Main.Instance.mConnectServerData.id) && this._LoadTexture(0);
        var o = new egret.TextField();
        o.text = "首次加载时间稍长，请耐心等待", o.strokeColor = 723971, o.stroke = 1, o.size = 24, o.x = -302, 
        o.y = 980, o.width = 604, o.verticalAlign = egret.VerticalAlign.MIDDLE, o.textAlign = egret.HorizontalAlign.CENTER, 
        this.addChild(o);
        var i = new egret.TextField();
        i.touchEnabled = !0, i.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClick, this), 
        i.text = "若长时间加载不成功，请点击刷新界面", i.strokeColor = 723971, i.textColor = 2480417, i.stroke = 1, 
        i.size = 24, i.x = -302, i.y = 1126, i.width = 604, i.verticalAlign = egret.VerticalAlign.MIDDLE, 
        i.textAlign = egret.HorizontalAlign.CENTER, this.addChild(i);
        var n = new egret.Sprite();
        n.graphics.beginFill(16711680, 0), n.graphics.drawRect(0, 0, 155, 40), n.graphics.endFill(), 
        n.x = 60, n.y = 1118, n.touchEnabled = !0, this.addChild(n);
        var r = window.wx;
        r && r.exitMiniProgram && n.addEventListener(egret.TouchEvent.TOUCH_TAP, function(t) {
            Global.exitMiniProgram();
        }, this);
        var s = this.label03 = new egret.TextField();
        s.text = "", s.strokeColor = 723971, s.stroke = 1, s.size = 24, s.x = -302, s.y = 1156, 
        s.width = 604, s.verticalAlign = egret.VerticalAlign.MIDDLE, s.textAlign = egret.HorizontalAlign.CENTER, 
        this.addChild(s), this.preveTime = this.pt = egret.getTimer(), this.mt = egret.getTimer(), 
        egret.startTick(this.Update, this), WindowData.StartLoading();
    }, e.prototype.SetBarValue = function(t, e, o) {
        e > 1 ? e = 0 : 0 > e && (e = 0);
        var i = t.width, n = Math.round(e * i);
        (0 > n || n === 1 / 0) && (n = 0);
        var r = t.$scrollRect;
        return r || (r = egret.$TempRectangle), r.setTo(0, 0, t.width, t.height), r.width = n, 
        t.scrollRect = r, o.x = t.x + n - 55, e;
    }, e.prototype._LoadTexture = function(t) {
        RES.getResByUrl(this.m_Textures[t].path, this._Loaded, this, RES.ResourceItem.TYPE_IMAGE);
    }, e.prototype._Loaded = function(t, e) {
        if (t) for (var o = 0; o < this.m_Textures.length; ++o) if (this.m_Textures[o].path == e) {
            this.tipImg.texture = t;
            break;
        }
    }, e.prototype.Close = function() {
        if (egret.stopTick(this.Update, this), this.parent) {
            this.parent.removeChild(this);
            for (var t = 0, e = this.m_Textures; t < e.length; t++) {
                var o = e[t];
                RES.destroyRes(o.path);
            }
        }
    }, e.prototype.Update = function(t) {
        var e = t - this.pt;
        this.pt = t, this.t += e;
        var o;
        o = this.t > this.et ? 1 : this.t / this.et, this.img01W = this.SetBarValue(this.img01, this.s1 + (this.e1 - this.s1) * o, this.img01Tag);
        var i = (t - this.mt) % 2500;
        return this.img02W = this.SetBarValue(this.img02, i / 2500, this.img02Tag), this._UpdatePro(o), 
        !1;
    }, e.prototype._OnClick = function() {
        window.location.reload();
    }, e.prototype._UpdatePro = function(t) {
        this.str ? this.label03.text = this.str + " [" + Math.floor(100 * t) + "%]" : this.label03.text = "";
    }, e.prototype.UpdateText = function(t, e, o, i) {
        this.str = t, this._UpdatePro(o), this.t = 0, this.et = i, this.s1 = this.img01W, 
        this.e1 = e, this.e1 < this.s1 && (this.e1 += 1), this.s2 = this.img02W, this.e2 = o, 
        this.e2 < this.s2 && (this.e2 += 1);
    }, e.prototype.SetText = function(t, e, o, i) {
        this.img02W = this.SetBarValue(this.img02, 0, this.img02Tag), this.UpdateText(t, e, o, i);
    }, e.prototype.onResize = function() {
        this.blackBg && (this.blackBg.x = -4 - (egret.MainContext.instance.stage.stageWidth >> 1), 
        this.blackBg.y = -Main.Instance.mUIGroupYPos, this.blackBg.width = 1.2 * egret.MainContext.instance.stage.stageWidth, 
        this.blackBg.height = 1.2 * egret.MainContext.instance.stage.stageHeight), this.updateBg();
    }, e.prototype.updateBg = function() {
        if (this.bg && this.bg.texture) if (WindowData.isScreenFull()) {
            var t = egret.MainContext.instance.stage.stageWidth, e = egret.MainContext.instance.stage.stageHeight, o = 0, i = t / e;
            if (.5 > i) {
                var n = t / 720 || 0;
                o = Math.round(1440 * n);
            } else o = e;
            var r = Math.floor(o / 4 * 3);
            r = t, o = e, this.bg.width = r, this.bg.height = o, this.bg.x = -this.bg.width >> 1;
        } else this.bg.y = -Main.Instance.mUIGroupYPos, this.bg.height = egret.MainContext.instance.stage.stageHeight, 
        this.bg.width = this.bg.height / 1280 * 960, this.bg.x = -this.bg.width >> 1;
    }, e.prototype.getElasticOut = function(t) {
        if (0 == t || 1 == t) return t;
        var e = .075;
        return Math.pow(2, -10 * t) * Math.sin(6.28 * (t - e) / .3) + 1;
    }, e.prototype.sineOut = function(t) {
        return Math.sin(t * Math.PI / 2);
    }, e;
}(egret.DisplayObjectContainer);

__reflect(LoadingUI.prototype, "LoadingUI");

var LoginUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e;
    }
    return __extends(e, t), e.prototype.NewServerBg = function() {
        var t = new egret.Bitmap();
        t.texture = Main.Instance.GetImg("_ui_bm_fuwuqimingchengbg@24_0_24_0"), t.scale9Grid = new egret.Rectangle(24, 0, 3, 78), 
        t.y = 814, t.width = 438, t.x = -219, this.addChild(t);
        var e = new egret.TextField();
        e.touchEnabled = !0, e.x = -104, e.y = 840, e.textColor = 63240, e.size = 24, e.text = "最新服", 
        this.addChild(e);
        var o = this.m_NewServerLabel = new egret.TextField();
        o.touchEnabled = !0, o.x = -11, o.y = 840, o.textColor = 16711422, o.size = 24, 
        this.addChild(o);
    }, e.prototype.NewSelServerBg = function() {
        var t = new egret.Bitmap();
        t.texture = Main.Instance.GetImg("_ui_bm_fuwuqimingchengbg@24_0_24_0"), t.scale9Grid = new egret.Rectangle(24, 0, 3, 78), 
        t.y = 905, t.x = -219, t.width = 438, t.touchEnabled = !0, t.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickServer, this), 
        this.addChild(t);
        var e = new egret.Bitmap();
        e.texture = Main.Instance.GetImg("_ui_icon_tongchang"), e.x = -201, e.y = 928, this.addChild(e);
        var o = new egret.Bitmap();
        o.texture = Main.Instance.GetImg("_ui_bt_dianjixuanfu"), o.x = 97, o.y = 929, this.addChild(o);
        var i = this.m_Label = new egret.TextField();
        i.touchEnabled = !0, i.x = -162, i.y = 931, i.textColor = 16711422, i.size = 24, 
        this.addChild(i);
    }, e.prototype.NewStarBtn = function() {
        var t = new egret.Bitmap();
        t.texture = Main.Instance.GetImg("_ui_bt_kaishiyouxi"), t.touchEnabled = !0, t.x = -176, 
        t.y = 1015, this.addChild(t), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickLogin, this);
    }, e.prototype.onAddToStage = function(t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var e = new egret.Bitmap();
        e.touchEnabled = !0, e.texture = Main.Instance.GetImg("_ui_bt_gonggao"), e.y = 37, 
        e.x = -(egret.MainContext.instance.stage.stageWidth >> 1) + 50, e.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickNotice, this), 
        this.addChild(e), this.NewServerBg(), this.NewSelServerBg(), this.NewStarBtn(), 
        this.SetCurServerName(), Main.Instance.NoticeStatus && Main.Instance.ShowNoticeUI(), 
        Global.sdk.checkRealNameAuth();
    }, e.prototype.Close = function() {
        this.parent && this.parent.removeChild(this);
    }, e.prototype.SetCurServerName = function() {
        GameServerData.SelectData ? (this.m_NewServerLabel.text = WindowData._GetServerName(GameServerData.MaxId), 
        this.m_Label.text = GameServerData.SelectData.name) : (this.m_Label.text = "", this.m_NewServerLabel.text = "");
    }, e.prototype._OnClickNotice = function() {
        Main.Instance.ShowNoticeUI();
    }, e.prototype._OnClickServer = function() {
        Main.Instance.ShowServerUI();
    }, e.prototype._OnClickLogin = function() {
        Main.Instance.StartLoadGame(GameServerData.SelectData);
    }, e;
}(egret.DisplayObjectContainer);

__reflect(LoginUI.prototype, "LoginUI");

var Main = function(t) {
    function e() {
        var o = t.call(this) || this;
        if (o.mLoadResGroup01 = {}, o.mLoadResGroup02 = {
            _ui_cjjs_bm_ditu: "resource/assets/game_start/_ui_cjjs_bm_ditu.jpg"
        }, o.mLoadResGroup03 = {
            _notice_res: "resource/assets/game_start/_notice_res.json"
        }, o.mLoadResGroup04 = {
            _notice_res: "resource/assets/game_start/_notice_res.json"
        }, o.mLoadResGroup05 = {
            ui_xzfwq_p_show: "resource/assets/game_start/ui_xzfwq_p_show.jpg"
        }, o.m_CurLoadGroup = [], o.m_NextStepType = -1, o.m_TimeOutId = null, o.mUIGroupYPos = 0, 
        o.stageScale = .5625, o.m_HasLoading = !0, o.m_ConCallback = null, o.m_CreateRolViewData = [ CreateRoleUI, "CreateRoleUI" ], 
        e.Instance = o, WindowData._GetStartResAddr()) {
            var i = WindowData._GetStartResAddr();
            RES.web.Html5VersionController.prototype.getVirtualUrl = function(t) {
                return -1 != t.indexOf("http") ? t : i + t;
            };
        }
        return o.addEventListener(egret.Event.ADDED_TO_STAGE, o.onAddToStage, o), o;
    }
    return __extends(e, t), e.$GetThmPath = function(t, e) {
        if (e) {
            var o = t.split("game_start");
            return o[0] + "game_start/thm" + e + o[1];
        }
        return t;
    }, e.prototype.onAddToStage = function(t) {
        egret.TextField.default_fontFamily = "Microsoft YaHei,SimHei,SimSun,Arial", egret.DisplayObject.defaultTouchEnabled = !1, 
        egret.ImageLoader.crossOrigin = "anonymous", egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this), 
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.m_UIGroup = new egret.DisplayObjectContainer(), 
        WindowData._GetBGImg() && (this.m_BGImg = new egret.Bitmap(), this.m_UIGroup.addChild(this.m_BGImg), 
        this._LoadGroup((e = {}, e.__BG_IMG__ = WindowData._GetBGImg(), e))), this.m_UIGroup.width = 0, 
        this.m_UIGroup.height = 0, this.addChild(this.m_UIGroup), this.onResize(), Global.init(), 
        Global.main = this, window.__gSelf__ = this, this.initGameConfig();
        var e;
    }, e.prototype.initGameConfig = function() {
        Global.sdk.isWxSdk() || Global.sdk.isMiQuickSdk() || Global.sdk.isOppoQuickSdk() || Global.sdk.isQQSdk() ? (Global.showLoading("配置读取中"), 
        RES.getResByUrl(window.GAME_JSON_CONFIG, this.loadGameJson, this, RES.ResourceItem.TYPE_JSON)) : (window.bgimgurl && (this.mLoadResGroup05.ui_xzfwq_p_show = window.bgimgurl), 
        this.initMain());
    }, e.prototype.initMain = function() {
        if (WindowData.isScreenFull() && (this.mLoadResGroup02._ui_cjjs_bm_ditu = "resource/assets/game_start/_ui_cjjs_bm_ditu_a.jpg"), 
        this._LoadSheet("resource/assets/game_start/_start_res2.json"), window.gobj) {
            var t = window.gobj;
            Global.pf = t.pf, Global.reyun.appID = t.reyunAppId;
        }
        var e = Global.getUrlParam(window.location.href);
        if (Global.sdk.platform = Global.pf, e && e.configPackName) {
            var o = e.configPackName;
            window.GAME_CONFIG_LOCAL = o;
        }
        if (e && "1" == e.SDL) {
            var i = [ "0", "SDL", e.token ];
            return this.mToken = i.join(" "), console.info("===服务器生成登录:", this.mToken), void HttpHelper.GetPlayerServerInfo(this.mToken, this._DoGetPlayerServerInfo, this);
        }
        return Global.sdk.initSdk(e) ? void (Global.needWait || this.InitLogin()) : void console.error("sdk初始化失败:", e);
    }, e.prototype.loadGameJson = function(t) {
        if (!t) {
            var e = this;
            return void setTimeout(function() {
                e.initGameConfig();
            }, 500);
        }
        var o, i = window.GAME_VERSION || 0, n = t.GAME_VERSION || 0;
        if (i > n ? (o = t.gobj_sh, window.WX_CHECK = !0, console.log("【读审核配置】程序版本：", i, " 配置表版本：", n)) : (o = t.gobj, 
        window.WX_CHECK = !1, console.log("【读正式配置】程序版本：", i, " 配置表版本：", n)), window.gobj = o, 
        window.bgimgurl = t.bgimgurl, t.__CONFIG__.__SER_URL__ = o.ip, t.__CONFIG__.__HTTP_PORT__ = o.port, 
        t.__CONFIG__.__HTTPS_PORT__ = o.port, t.__CONFIG__.__RES_URL__ = o.resUrl, window.__CONFIG__ = t.__CONFIG__, 
        t.__CONFIG__ && t.__CONFIG__.fromopenid && (window.jumpAppId = t.__CONFIG__.fromopenid), 
        t.win) for (var r in t.win) window[r] = t.win[r];
        Global.gameJSON = t, null != t.RES_VERSION_B && (window.RES_VERSION_B = t.RES_VERSION_B), 
        this.mLoadResGroup05.ui_xzfwq_p_show = window.bgimgurl ? window.bgimgurl : "resource/assets/game_start/bg_weixin.jpg", 
        this.mLoadResGroup02._ui_cjjs_bm_ditu = "resource/assets/game_start/_ui_cjjs_bm_ditu.jpg", 
        this.mLoadResGroup03._notice_res = "resource/assets/game_start/_notice_res.json", 
        this.mLoadResGroup04._notice_res = "resource/assets/game_start/_notice_res.json", 
        this.loadVersionJson();
    }, e.prototype.loadVersionJson = function() {
        var t = new Date(), e = t.getFullYear() + "_" + (t.getMonth() + 1) + "_" + t.getDate() + "_" + t.getHours() + "_" + t.getMinutes() + "_" + Math.floor(t.getSeconds() / 6);
        Global.showLoading("版本号读取中"), RES.getResByUrl(WindowData._GetResAddr() + "version.json?v=" + e, this.loadedVersionJson, this, RES.ResourceItem.TYPE_JSON);
    }, e.prototype.loadedVersionJson = function(t) {
        var e = window.VersionDict;
        if (t || (t = {}), e) for (var o in e) t[o] = e[o];
        window.VersionDict = t, this.initMain();
    }, e.prototype.onSoEasyWaitInit = function() {
        console.info("等待速易初始化...."), window.ZmSdk && (Global.sdk.getSoEasySdk() || Global.sdk.initSdk(null));
        var t = Global.sdk.getSoEasySdk();
        t && (t.initParam(null), t.getValue().init && (Common.timer.remove(this.onSoEasyWaitInit, this), 
        this.InitLogin()));
    }, e.prototype.InitLogin = function() {
        var t = this, e = !1;
        try {
            Global.reyunUID = egret.localStorage.getItem("reyun_install");
        } catch (o) {
            e = !0;
        }
        return Global.reyunUID || (Global.reyun.install(), Global.reyunUID = Global.getRandomUID(), 
        e || egret.localStorage.setItem("reyun_install", Global.reyunUID)), Global.reyun.startup(), 
        Global.sdk.platformId > 0 ? void this.SdkLogin() : void (WindowData._DirectLogin() ? window._LoginToken(function(e, o) {
            console.info("===SDK登录:", e, o), t.mToken = e, t._DoParsePlayerServerInfo(o);
        }) : window._LoginToken(function(e) {
            var o = [ "0", "local", e ];
            t.mToken = o.join(" ");
            var i = Global.getUrlParam(window.location.href);
            console.info("===本地登录:", t.mToken, i), i && i.o && (window.fromopenid = i.o), HttpHelper.GetPlayerServerInfo(t.mToken, t._DoGetPlayerServerInfo, t);
        }));
    }, e.prototype.SdkLogin = function() {
        if (Global.sdk.isWxSiLang() || Global.sdk.isH5SiLang() || Global.sdk.isWxSmz() || Global.sdk.isWxFxm()) this.SdkLogin2(); else if (Global.sdk.isWxSdk() || Global.sdk.isQQSdk()) {
            window.__AddLoginBg(), Global.wx.alertWX();
            var t = this;
            if (Global.sdk.isQQSdkGujian()) {
                var e = Global.sdk.getQQGujianSdk();
                e.login(this.SdkLogin2, this);
            } else if (Global.sdk.isWxSdkXingHeYue()) {
                var o = Global.sdk.getWxXhySdk();
                o.login(this.SdkLogin2, this);
            } else if (Global.sdk.isWxSdkHuoshu()) {
                var o = Global.sdk.getWxHuoshuSdk();
                o.login(this.SdkLogin2, this);
            } else if (Global.sdk.isWxSdkGujian()) {
                var e = Global.sdk.getWxGujianSdk();
                e.login(this.SdkLogin2, this);
            } else Global.wx.login(function(e) {
                Global.sdk.GetWxVO().wxcode = e.code, console.info("code:", e.code), t.SdkLogin2();
            });
        } else Global.sdk.isMiQuickSdk() ? (window.__AddLoginBg(), Global.sdk.getXiaomiQuick().login(this.SdkLogin2, this)) : Global.sdk.isOppoQuickSdk() ? (window.__AddLoginBg(), 
        Global.sdk.getOppoQuick().login(this.SdkLogin2, this)) : this.SdkLogin2();
    }, e.prototype.SdkLogin2 = function() {
        Global.showLoading("服务器列表读取中"), this.mToken = Global.sdk.getSdkLoginToken(), HttpHelper.GetPlayerServerInfo(this.mToken, this._DoGetPlayerServerInfo, this);
    }, e.prototype._DoGetPlayerServerInfo = function(t) {
        Global.showLoading("");
        var e = window.GAME_CONFIG_LOCAL;
        "qqdt" == e ? window.PC_QZONE = !0 : "qq" == e || "chaomeng" == e && (window.WD_CHAOMENG = !0);
        var o = t.currentTarget;
        return this._DoParsePlayerServerInfo(o.response);
    }, e.prototype._DoParsePlayerServerInfo = function(t) {
        var e = JSON.parse(t), o = Global.onlyShow1Server(), i = this;
        if (o) {
            e.data.maxid = 1, e.data.lpage = [];
            var n = e.data.recent, r = [];
            if (n) for (var s = 0; s < n.length; s++) 1 == n[s].sid && r.push(n[s]);
            e.data.recent = r, HttpHelper.GetServerList(1, function(t, o) {
                for (var n = JSON.parse(o.currentTarget.response), r = n.data, s = r.length, a = [], h = 0; s > h; h++) 1 == r[h].sid && a.push(r[h]);
                e.data.lpage = a, i._DoParsePlayerServerInfo2(e);
            }, this);
        } else i._DoParsePlayerServerInfo2(e);
    }, e.prototype._DoParsePlayerServerInfo2 = function(t) {
        if (1 != t.result) return void alert(t.result_msg);
        var o = function(t) {
            if (!t) return [];
            for (var e in t) return t;
            return [];
        }, i = t.data.kefu;
        if (i) {
            var n = i.indexOf(":");
            -1 == n && (n = i.indexOf("：")), -1 != n ? (n++, Global.qq = i.substr(0, n), Global.qqNum = i.substr(n)) : (Global.qq = "QQ:", 
            Global.qqNum = i);
        }
        var r = t.data.player;
        if (this.UserName = r.username, Global.sdk.isWxSdk() && !Global.sdk.isWxSdkHuoshu() && !Global.sdk.isWxSdkXingHeYue() && !Global.sdk.isWxSdkGujian() && !Global.sdk.isWxSiLang() && !Global.sdk.isWxSmz() && !Global.sdk.isWxFxm()) {
            var s = r.username.split(" "), a = s.length, h = Global.sdk.GetWxVO();
            a > 0 && (h.logincode = s[0]), a > 1 && (h.openId = s[1]), a > 2 && (h.payEnv = parseInt(s[2])), 
            a > 3 && (h.channel = s[3], h.cname = h.channel), a > 4 && (h.inviteId = s[4]), 
            console.info("username:", r.username);
        }
        Global.sdk.isUCWebGame() && (Global.sdk.getUcWebSdk().getValue().openid = this.UserName), 
        this.GmLevel = r.gm_level, this.lid = r.lid, r.code && (this.mToken += " " + r.code), 
        this.playerServerData = t, Global.base.username = this.UserName, Global.base.uid = this.lid, 
        this.NoticeStatus = t.data.ns;
        var p = {}, d = t.data.rename;
        if (d) for (var s = d.split("|"), l = 0; l < s.length; l++) {
            var u = s[l];
            if (u) {
                var c = u.split(":");
                c && 2 == c.length && (p[c[0]] = c[1]);
            }
        }
        window.__CONFIG__.__SERVER_NAME__ = p, Global.reyun.loggedin(), GameServerData.createLimit = t.data.createLimit || 0;
        var f = o(t.data.recent);
        f.sort(function(t, e) {
            return e.time - t.time;
        });
        for (var g = [], _ = 0, m = f; _ < m.length; _++) {
            var y = m[_], v = GameServerDescData.Get(y, !0);
            v && (GameServerData.setRecentDicData(y.addr, y.sid), g.push(v));
        }
        var S = [], w = o(t.data.lpage);
        w.sort(function(t, e) {
            return e.sid - t.sid;
        });
        for (var k, I = 0, b = 0, G = w; b < G.length; b++) {
            var y = G[b], v = GameServerDescData.Get(y);
            v && (GameServerData.setCanEnterData(y.addr, y.sid, y.version), S.push(v), v.id > I && (I = v.id, 
            k = v));
        }
        k && GameServerData.setCanEnterData(k.ip, k.id, 0), GameServerData.Init(I, g, S);
        var x = WindowData.GetEnterServerID(), C = x > 0 && window.WX_CHECK;
        if (C) {
            var T = this;
            return GameServerData.Callback = function(t) {
                var o = T.getServerDataById(x);
                0 == GameServerData.PageData[0].datas.length ? (HttpHelper.SendPoint(4), Global.reyun.enterSelectServer(), 
                T.m_CreateRoleData = o, T._LoadGroup(T.mLoadResGroup02), T._SetNextStep(2)) : e.Instance.StartLoadGame(o);
            }, GameServerData.ThisObject = this, void GameServerData.GetPageData(1);
        }
        if (0 == GameServerData.PageData[0].datas.length) {
            window.__isNewAccount = !0;
            for (var D = GameServerData.PageData[1].datas, l = 0; l < D.length; ++l) {
                var y = D[l];
                if (y.CanEnter(!0)) return HttpHelper.SendPoint(4), Global.reyun.enterSelectServer(), 
                this.m_CreateRoleData = y, this._LoadGroup(this.mLoadResGroup02), void this._SetNextStep(2);
            }
            console.log("没有可以创建角色的服务器");
        }
        this._LoadGroup(this.mLoadResGroup01), this._SetNextStep(1), this.NoticeStatus && this.ShowNoticeUI();
    }, e.prototype.getTimeZero = function(t, e) {
        void 0 === e && (e = 0), this.tempDateZero || (this.tempDateZero = new Date());
        var o = this.tempDateZero;
        return o.setTime(t), o.setHours(0, 0, 0, 0), o.getTime() + 864e5 * e;
    }, e.prototype.getTimeGapDay = function(t, e) {
        return Math.floor(Math.abs(this.getTimeZero(e) - this.getTimeZero(t)) / 864e5);
    }, e.prototype.getServerDataById = function(t) {
        for (var e = 1; e < GameServerData.PageData.length; e++) for (var o = GameServerData.PageData[e].datas, i = 0; i < o.length; i++) if (o[i].id == t && o[i].CanEnter(!0)) return o[i];
        return null;
    }, e.prototype._SetNextStep = function(t) {
        this.DoShowLoadingImg(), this.m_NextStepType = t, this._CreateScene();
    }, e.prototype._LoadSheet = function(t) {
        this.m_CurLoadGroup.push(t), RES.getResByUrl(t, this._OnLoadItem, this, RES.ResourceItem.TYPE_SHEET);
    }, e.prototype._LoadGroup = function(t) {
        for (var e in t) this.m_CurLoadGroup.push(t[e]);
        for (var e in t) {
            var o = t[e];
            -1 != o.indexOf(".json") ? RES.getResByUrl(o, this._OnLoadItem, this, RES.ResourceItem.TYPE_SHEET) : RES.getResByUrl(o, this._OnLoadItem, this, RES.ResourceItem.TYPE_IMAGE);
        }
    }, e.prototype._CheckUI = function(t) {
        if (this.m_CurLoadGroup.length > 0 || -1 != this.m_NextStepType) return !1;
        for (var e = 0, o = this.$children; e < o.length; e++) {
            var i = o[e];
            if (egret.is(i, t)) return !1;
        }
        return !0;
    }, e.prototype.ShowServerUI = function() {
        this._CheckUI("ServerUI") && (this._LoadGroup(this.mLoadResGroup03), this._SetNextStep(3));
    }, e.prototype.ShowNoticeUI = function() {
        this._CheckUI("NoticeUI") && (this._LoadGroup(this.mLoadResGroup04), this._SetNextStep(4));
    }, e.prototype.ShowCreateUI = function(t) {
        this._CheckServerState(t) && this._CheckUI(this.m_CreateRolViewData[1]) && (this.m_CreateRoleData = t, 
        this._LoadGroup(this.mLoadResGroup02), this._SetNextStep(2));
    }, e.prototype.UpdateLoadingUI = function(t, e, o, i, n) {
        for (var r = this.m_UIGroup.numChildren - 1; r >= 0; --r) {
            var s = this.m_UIGroup.getChildAt(r);
            if (egret.is(s, "LoadingUI")) {
                t ? s.UpdateText(e, o, i, n) : s.SetText(e, o, i, n);
                break;
            }
        }
    }, e.prototype.ShowLoadingUI = function() {
        this._CheckUI("LoadingUI") && (this._LoadGroup(this.mLoadResGroup05), this._SetNextStep(5));
    }, e.prototype.DoShowLoadingImg = function() {
        this.m_TimeOutId && (egret.clearTimeout(this.m_TimeOutId), this.m_TimeOutId = null), 
        this.m_TimeOutId = egret.setTimeout(this.ShowLoadingImg, this, 1e3);
    }, e.prototype.ShowLoadingImg = function() {
        null == this.m_LoadingImg && (this.m_LoadingImg = new egret.Bitmap(), this.m_LoadingImg.texture = this.GetImg("_start_load_Reel"), 
        this.m_LoadingImg.anchorOffsetX = this.m_LoadingImg.width >> 1, this.m_LoadingImg.anchorOffsetY = this.m_LoadingImg.height >> 1, 
        this.onResize()), this.m_LoadingImg.parent && this.m_LoadingImg.parent.removeChild(this.m_LoadingImg), 
        egret.stopTick(this.UpdateLoadingImgAnim, this), egret.startTick(this.UpdateLoadingImgAnim, this), 
        this.m_UIGroup.addChild(this.m_LoadingImg);
    }, e.prototype.UpdateLoadingImgAnim = function(t) {
        return this.m_LoadingImg && (this.m_LoadingImg.rotation = Math.floor(.5 * t) % 360), 
        !1;
    }, e.prototype.HideLoadingImg = function() {
        egret.stopTick(this.UpdateLoadingImgAnim, this), this.m_TimeOutId && (egret.clearTimeout(this.m_TimeOutId), 
        this.m_TimeOutId = null), this.m_LoadingImg && this.m_LoadingImg.parent && this.m_LoadingImg.parent.removeChild(this.m_LoadingImg);
    }, e.prototype.onResize = function() {
        if (WindowData.isScreenFull()) t > this.stageScale ? this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH : this.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT; else if (!window.wx) {
            var t = window.innerWidth / window.innerHeight;
            t > this.stageScale ? (egret.sys.screenAdapter = new TestScreenAdapter(), this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL) : (egret.sys.screenAdapter = new egret.sys.DefaultScreenAdapter(), 
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH);
        }
        this.m_LoadingImg && (this.m_LoadingImg.y = egret.MainContext.instance.stage.stageHeight >> 1), 
        this.m_UIGroup.x = egret.MainContext.instance.stage.stageWidth >> 1, this.m_UIGroup.y = egret.MainContext.instance.stage.stageHeight - 1280 >> 1, 
        this.mUIGroupYPos = this.m_UIGroup.y;
        for (var e = this.m_UIGroup.numChildren - 1; e >= 0; --e) {
            var o = this.m_UIGroup.getChildAt(e);
            o.onResize && o.onResize();
        }
    }, e.prototype._CloseView = function(t) {
        try {
            t.Close ? t.Close() : console.log("not close func " + t);
        } catch (e) {
            console.log(e);
        }
    }, e.prototype.ShowGame = function() {
        if (this.m_HasLoading) {
            this.m_HasLoading = null, this.HideLoadingImg(), this.m_LoadingImg = null;
            for (var t = this.m_UIGroup.numChildren - 1; t >= 0; --t) {
                var e = this.m_UIGroup.getChildAt(t);
                egret.is(e, "LoadingUI"), this._CloseView(e);
            }
            for (var o in this.mLoadResGroup01) RES.destroyRes(this.mLoadResGroup01[o]);
            for (var o in this.mLoadResGroup02) RES.destroyRes(this.mLoadResGroup02[o]);
            for (var o in this.mLoadResGroup03) RES.destroyRes(this.mLoadResGroup03[o]);
            for (var o in this.mLoadResGroup04) RES.destroyRes(this.mLoadResGroup04[o]);
            for (var o in this.mLoadResGroup05) RES.destroyRes(this.mLoadResGroup05[o]);
            WindowData._GetBGImg() && RES.destroyRes(WindowData._GetBGImg()) && console.log("destroy res => " + WindowData._GetBGImg());
        }
    }, e.prototype._CheckServerState = function(t) {
        if (!t) return alert("服务器数据为空，请重新登录！！！"), !1;
        if ((0 == t.status || t.status > 2) && !this.GmLevel) return alert("服务器维护中，请稍后重试！！！"), 
        !1;
        var e = new Date().getTime() / 1e3;
        return t.version && t.version > e && !this.GmLevel ? (alert("服务器未到开放时间，请稍后重试！！！"), 
        !1) : !0;
    }, e.prototype.ConnectServer = function(t, o) {
        if (this._CheckServerState(t)) {
            var i = Socket.ins().GetSocketState();
            if (i == Socket.STATUS_CONNECTING) return void console.log("正在连接");
            if (i == Socket.STATUS_CHECKING) return console.log("连接成功"), void (o ? o() : console.log("not callback func !"));
            this.DoShowLoadingImg(), this.mConnectServerData = t, Global.base.serverId = e.Instance.mConnectServerData.id.toString();
            var n = t.ip.split(":"), r = n[0], s = n[1];
            this.m_ConCallback = o, Socket.ins().UpdateStateEvent = this.SocketUpdateState.bind(this), 
            Socket.ins().connect(r, Number(s)), Global.sdk.selectServer();
        }
    }, e.prototype.StartLoadGame = function(t) {
        var e = this;
        this.ConnectServer(t, function() {
            e.ShowLoadingUI();
        });
    }, e.prototype._ClearConData = function() {
        this.HideLoadingImg(), Socket.ins().UpdateStateEvent = null, this.m_ConCallback = null;
    }, e.prototype.SocketUpdateState = function(t) {
        if (t == Socket.STATUS_CHECKING) {
            var e = this.m_ConCallback;
            this._ClearConData(), e ? e() : console.log("not callback func !!!");
        } else t == Socket.STATUS_DISCONNECT && this._ClearConData();
    }, e.prototype.GetImg = function(t) {
        return RES.getAnalyzer(RES.ResourceItem.TYPE_SHEET).getRes(t);
    }, e.prototype.GetSingleImg = function(t) {
        var e = this.mLoadResGroup02[t];
        return e || (e = this.mLoadResGroup05[t]), e || console.error("not name " + t), 
        RES.getAnalyzer(RES.ResourceItem.TYPE_IMAGE).getRes(e);
    }, e.prototype._OnLoadItem = function(t, e) {
        for (var o = 0, i = this.m_CurLoadGroup.length; i > o; ++o) if (this.m_CurLoadGroup[o] == e) {
            this.m_CurLoadGroup.splice(o, 1);
            break;
        }
        console.log("loaded => " + e), this.m_BGImg && e == WindowData._GetBGImg() && t && (this.m_BGImg.texture = t, 
        this.m_BGImg.x = -(t.textureWidth >> 1)), this.m_CurLoadGroup.length > 0 || this._CreateScene();
    }, e.prototype._CreateScene = function() {
        if (!(this.m_CurLoadGroup.length > 0)) {
            if (1 == WindowData._GetStartType()) {
                if (window.__RemoveLoading && window.__RemoveLoading(), this.m_NextStepType < 1) return;
            } else {
                if (this.m_NextStepType < 1) return;
                window.__RemoveLoading && window.__RemoveLoading();
            }
            var t = this.m_NextStepType;
            this.m_NextStepType = -1, this.CreateGameScene(t);
        }
    }, e.prototype.CreateGameScene = function(t) {
        if (1 == t) this.m_UIGroup.addChild(new LoginUI()); else if (2 == t) if (null == this.m_CreateRoleData) console.error("not server data create"); else {
            var e = this.m_CreateRoleData;
            this.m_CreateRoleData = null;
            var o = this.m_CreateRolViewData[0];
            this.m_UIGroup.addChild(new o(e)), WindowData.RemoveBg();
            for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
                var n = this.m_UIGroup.getChildAt(i);
                egret.is(n, this.m_CreateRolViewData[1]) || this._CloseView(n);
            }
        } else if (3 == t) this.m_UIGroup.addChild(new ServerUI()); else if (4 == t) this.m_UIGroup.addChild(new NoticeUI()); else if (5 == t) {
            this.m_UIGroup.addChild(new LoadingUI()), WindowData.RemoveBg();
            for (var i = this.m_UIGroup.numChildren - 1; i >= 0; --i) {
                var n = this.m_UIGroup.getChildAt(i);
                egret.is(n, "LoadingUI") || this._CloseView(n);
            }
        }
        this.HideLoadingImg();
    }, e.closesocket = function() {
        var t = Socket._ins;
        t && t.close();
    }, e;
}(egret.DisplayObjectContainer);

__reflect(Main.prototype, "Main");

var TestScreenAdapter = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(e, t), e.prototype.calculateStageSize = function(t, e, o, i, n) {
        i = 720, n = 1280;
        var r = e, s = o, a = i, h = n, p = e / a || 0, d = o / h || 0, l = 1280, u = 720, c = e / o, f = .75, g = window.ISWEIXIN || window.ISQQGAME || window.IS_MI_QUICK || window.IS_UCWEB_GAME || window.IS_JUNDAO_GAME ? 720 / 1559 : .5;
        return c > f ? (i = Math.round(l * f), a = i, r = Math.round(i * d)) : g > c ? (n = Math.round(u / g), 
        h = n, s = Math.round(n * p)) : 9 / 16 > c ? (n = Math.round(u / c), h = n, s = Math.round(n * p)) : a = Math.round(e / d), 
        r % 2 != 0 && (r += 1), s % 2 != 0 && (s += 1), {
            stageWidth: a,
            stageHeight: h,
            displayWidth: r,
            displayHeight: s
        };
    }, e;
}(egret.HashObject);

__reflect(TestScreenAdapter.prototype, "TestScreenAdapter", [ "egret.sys.IScreenAdapter" ]), 
(window.wx || window.ISQQGAME || window.IS_MI_QUICK || window.IS_UCWEB_GAME || window.IS_JUNDAO_GAME) && (egret.sys.screenAdapter = new TestScreenAdapter());

var NoticeUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e;
    }
    return __extends(e, t), e.prototype.onAddToStage = function(t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.bg = new egret.Bitmap(), 
        this.bg.alpha = .5, this.bg.x = -4, this.bg.y = -4, this.bg.texture = Main.Instance.GetImg("_ui_black"), 
        this.bg.scale9Grid = new egret.Rectangle(4, 4, 46, 46), this.bg.touchEnabled = !0, 
        this.addChild(this.bg), this.onResize();
        var e = new egret.Bitmap();
        e.texture = Main.Instance.GetImg("_ui_sbm_001@120_120_120_120"), e.y = 101, e.height = 1066, 
        e.width = 700, e.x = -e.width >> 1, e.scale9Grid = new egret.Rectangle(123, 121, 25, 21), 
        this.addChild(e);
        var o = new egret.Bitmap();
        o.texture = Main.Instance.GetImg("_ui_sbm_003@258_0_255_0"), o.scale9Grid = new egret.Rectangle(258, 0, 3, 79), 
        o.y = 95, o.x = -317, o.width = 621, this.addChild(o);
        var i = new egret.Bitmap();
        i.texture = Main.Instance.GetImg("_ui_bm_gonggao"), i.x = -50, i.y = 115, this.addChild(i);
        var n = new egret.Bitmap();
        n.texture = Main.Instance.GetImg("_ui_sbm_002@20_9_20_9"), n.x = -329, n.y = 189, 
        n.height = 842, n.width = 652, n.scale9Grid = new egret.Rectangle(21, 10, 1, 1), 
        this.addChild(n);
        var r = new egret.Bitmap();
        r.touchEnabled = !0, r.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this), 
        r.texture = Main.Instance.GetImg("_ui_bt_008_up"), r.x = 282, r.y = 91, this.addChild(r);
        var s = new egret.Bitmap();
        s.touchEnabled = !0, s.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this), 
        s.texture = Main.Instance.GetImg("_ui_bt_007_up"), s.x = 247, s.y = 1052, this.addChild(s);
        var a = new egret.ScrollView();
        a.x = n.x + 10, a.y = n.y + 10, a.width = n.width - 20, a.height = n.height - 20, 
        this.addChild(a);
        var h = new egret.DisplayObjectContainer();
        this.m_Label = new egret.TextField(), this.m_Label.y = 2, this.m_Label.width = a.width, 
        this.m_Label.size = 30, this.m_Label.textColor = 1324414, h.addChild(this.m_Label), 
        a.setContent(h), HttpHelper.GetNotice(this.UpdateNotice, this);
    }, e.prototype.UpdateNotice = function(t) {
        var e = "", o = JSON.parse(t.currentTarget.response);
        1 == o.result && null != o.data && (e = o.data, e = HttpHelper.gameNoticeReplace(e)), 
        this.m_Label.textFlow = TextFlowMaker.generateTextFlow(e);
    }, e.prototype._OnClickClose = function() {
        this.Close();
    }, e.prototype.Close = function() {
        this.parent && this.parent.removeChild(this);
    }, e.prototype.onResize = function() {
        this.bg && (this.bg.x = -4 - (egret.MainContext.instance.stage.stageWidth >> 1), 
        this.bg.y = -Main.Instance.mUIGroupYPos, this.bg.width = 1.2 * egret.MainContext.instance.stage.stageWidth, 
        this.bg.height = 1.2 * egret.MainContext.instance.stage.stageHeight);
    }, e;
}(egret.DisplayObjectContainer);

__reflect(NoticeUI.prototype, "NoticeUI");

var ServerUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e;
    }
    return __extends(e, t), e.prototype.onAddToStage = function(t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.bg = new egret.Bitmap(), 
        this.bg.alpha = .5, this.bg.x = -4, this.bg.y = -4, this.bg.texture = Main.Instance.GetImg("_ui_black"), 
        this.bg.scale9Grid = new egret.Rectangle(4, 4, 46, 46), this.bg.touchEnabled = !0, 
        this.addChild(this.bg), this.onResize();
        var e = new egret.Bitmap();
        e.texture = Main.Instance.GetImg("_ui_sbm_001@120_120_120_120"), e.y = 101, e.height = 1066, 
        e.width = 700, e.x = -e.width >> 1, e.scale9Grid = new egret.Rectangle(123, 121, 25, 21), 
        this.addChild(e);
        var o = new egret.Bitmap();
        o.texture = Main.Instance.GetImg("_ui_sbm_003@258_0_255_0"), o.scale9Grid = new egret.Rectangle(258, 0, 3, 79), 
        o.y = 95, o.x = -317, o.width = 621, this.addChild(o);
        var i = new egret.Bitmap();
        i.texture = Main.Instance.GetImg("_ui_sbm_002@20_9_20_9"), i.x = -323, i.y = 189, 
        i.height = 842, i.width = 217, i.scale9Grid = new egret.Rectangle(21, 10, 1, 1), 
        this.addChild(i);
        var n = new egret.Bitmap();
        n.texture = Main.Instance.GetImg("_ui_sbm_002@20_9_20_9"), n.x = -100, n.y = 189, 
        n.height = 842, n.width = 423, n.scale9Grid = new egret.Rectangle(21, 10, 1, 1), 
        this.addChild(n);
        var r = new egret.Bitmap();
        r.texture = Main.Instance.GetImg("_ui_cj_bm_fuwuqixuanzhe"), r.x = -93, r.y = 115, 
        this.addChild(r);
        var s = new egret.Bitmap();
        s.touchEnabled = !0, s.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this), 
        s.texture = Main.Instance.GetImg("_ui_bt_008_up"), s.x = 282, s.y = 91, this.addChild(s);
        var a = new egret.Bitmap();
        a.touchEnabled = !0, a.addEventListener(egret.TouchEvent.TOUCH_TAP, this._OnClickClose, this), 
        a.texture = Main.Instance.GetImg("_ui_bt_007_up"), a.x = 247, a.y = 1052, this.addChild(a);
        var h = new egret.ScrollView();
        h.x = n.x, h.y = n.y + 10, h.width = n.width, h.height = n.height - 20, this.addChild(h), 
        this.m_RightScrollView = new ServerScrollView(h, ServerUIItem2, this._RightClick, this);
        var p = new egret.ScrollView();
        p = new egret.ScrollView(), p.x = i.x + 2, p.y = i.y + 10, p.width = i.width, p.height = i.height - 20, 
        this.addChild(p), this.m_LeftScrollView = new ServerScrollView(p, ServerUIItem1, this._LeftClick, this), 
        this.m_LeftScrollView.SetDatas(GameServerData.PageData), this.m_LeftScrollView.SelectIndex(0), 
        GameServerData.Callback = this.DoServerData, GameServerData.ThisObject = this, Global.sdk.checkRealNameAuth();
    }, e.prototype.DoServerData = function(t) {
        var e = GameServerData.PageData[this.m_LeftScrollView.GetSelectIndex()];
        e.index == t && this.m_RightScrollView.SetDatas(e.datas);
    }, e.prototype.Close = function() {
        this.parent && this.parent.removeChild(this), GameServerData.Callback = null, GameServerData.ThisObject = null;
    }, e.prototype._LeftClick = function(t) {
        0 != t && GameServerData.GetPageData(GameServerData.PageData[t].index), this.m_RightScrollView.SetDatas(GameServerData.PageData[t].datas);
    }, e.prototype._RightClick = function(t) {
        var e = this.m_RightScrollView.GetData(t);
        if (!e.CanEnter(!0)) return void alert("服务器连接失败，请稍后重试！！！");
        if (!GameServerData.getCanEnterData(e.ip, e.id)) return void alert("该服务器已经爆满");
        for (var o = GameServerData.PageData[0].datas, i = 0, n = o.length; n > i; ++i) if (o[i].id == e.id) return void Main.Instance.StartLoadGame(e);
        Main.Instance.ShowCreateUI(e);
    }, e.IsNewServer = function(t) {
        for (var e = GameServerData.PageData[0].datas, o = 0, i = e.length; i > o; ++o) if (e[o].id == t) return !1;
        return !0;
    }, e.prototype._OnClickClose = function() {
        this.Close();
    }, e.prototype.onResize = function() {
        this.bg && (this.bg.x = -4 - (egret.MainContext.instance.stage.stageWidth >> 1), 
        this.bg.y = -Main.Instance.mUIGroupYPos, this.bg.width = 1.2 * egret.MainContext.instance.stage.stageWidth, 
        this.bg.height = 1.2 * egret.MainContext.instance.stage.stageHeight);
    }, e.COLOR = 3365260, e;
}(egret.DisplayObjectContainer);

__reflect(ServerUI.prototype, "ServerUI");

var ServerScrollView = function() {
    function t(t, e, o, i) {
        this.m_CacheList = [], this.m_Datas = [], this.m_Index = -1, this.m_ScrollView = t, 
        this.m_Click = o, this.m_ThisObject = i, this.m_ScrollView.addEventListener(egret.Event.CHANGE, this.OnChange, this), 
        this.m_ItemCls = e, this.m_Group = new ServerGroup(), this.m_Group.width = t.width, 
        this.m_Group.height = t.height, t.setContent(this.m_Group);
    }
    return t.prototype.GetItme = function() {
        var t = this.m_CacheList.pop() || new this.m_ItemCls();
        return t;
    }, t.prototype.OnChange = function() {
        for (var t = this.m_ScrollView.scrollTop, e = t + this.m_ScrollView.height, o = this.m_ItemCls.Height, i = 0; i < this.m_Group.numChildren; ) {
            var n = this.m_Group.getChildAt(i);
            if (!(n.y < t - o || n.itemIndex >= this.m_Datas.length)) break;
            this.m_Group.removeChildAt(i), this.m_CacheList.push(n);
        }
        for (var i = this.m_Group.numChildren - 1; i >= 0; --i) {
            var n = this.m_Group.getChildAt(i);
            if (!(n.y > e || n.itemIndex >= this.m_Datas.length)) break;
            this.m_Group.removeChildAt(i), this.m_CacheList.push(n);
        }
        for (;;) {
            var r = this.m_Group.$children[0];
            if (null == r) {
                if (!this._AddItem(0, -1)) break;
            } else {
                if (!(r.y >= t)) break;
                if (!this._AddItem(r.itemIndex - 1, -1)) break;
            }
        }
        for (;;) {
            var s = this.m_Group.$children[this.m_Group.numChildren - 1];
            if (null == s) break;
            if (!(s.y <= t + this.m_ScrollView.height - o)) break;
            if (!this._AddItem(s.itemIndex + 1, 1)) break;
        }
    }, t.prototype._ItemClick = function(t) {
        var e = t.target;
        this.SelectIndex(e.itemIndex);
    }, t.prototype.GetSelectIndex = function() {
        return this.m_Index;
    }, t.prototype.SelectIndex = function(t) {
        this.m_Index = t;
        for (var e = 0; e < this.m_Group.numChildren; ++e) {
            var o = this.m_Group.getChildAt(e);
            o.light && (o.light.visible = t == o.itemIndex, o.label.textColor = t == o.itemIndex ? 11354899 : ServerUI.COLOR);
        }
        this.m_Click && this.m_ThisObject && this.m_Click.call(this.m_ThisObject, t);
    }, t.prototype._AddItem = function(t, e) {
        if (null == this.m_Datas[t]) return !1;
        var o = this.GetItme();
        return o.addEventListener(egret.TouchEvent.TOUCH_TAP, this._ItemClick, this), o.itemIndex = t, 
        o.y = this.m_ItemCls.Height * t, o.SetData(this.m_Datas[t]), -1 == e ? this.m_Group.addChildAt(o, 0) : this.m_Group.addChild(o), 
        !0;
    }, t.prototype.GetData = function(t) {
        return this.m_Datas[t];
    }, t.prototype.SetDatas = function(t) {
        this.m_Datas = t, this.m_Group.height = t.length * this.m_ItemCls.Height, 0 == this.m_ScrollView.scrollTop ? this.OnChange() : this.m_ScrollView.scrollTop = 0;
        for (var e = 0; e < this.m_Group.numChildren; ++e) this.m_Group.getChildAt(e).SetData(t[e]);
    }, t;
}();

__reflect(ServerScrollView.prototype, "ServerScrollView");

var ServerGroup = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchEnabled = !0, e;
    }
    return __extends(e, t), e.prototype.$hitTest = function(e, o) {
        var i = t.prototype.$hitTest.call(this, e, o);
        if (i) return i;
        if (!this.$visible || !this.touchEnabled) return null;
        var n = this.globalToLocal(e, o, egret.$TempPoint), r = egret.$TempRectangle.setTo(0, 0, this.width, this.height), s = this.$scrollRect;
        return s && (r.x = s.x, r.y = s.y), r.contains(n.x, n.y) ? this : null;
    }, e;
}(egret.DisplayObjectContainer);

__reflect(ServerGroup.prototype, "ServerGroup");

var ServerUIItem1 = function(t) {
    function e() {
        var o = t.call(this) || this;
        o.touchEnabled = !0, o.touchChildren = !1, o.width = e.Width, o.height = e.Height;
        var i = new egret.Bitmap();
        i.touchEnabled = !1, i.texture = Main.Instance.GetImg("_ui_bt_fuwuqi02"), i.x = o.width - i.width >> 1, 
        i.y = o.height - i.height >> 1, o.addChild(i);
        var n = o.light = new egret.Bitmap();
        return n.touchEnabled = !1, n.texture = Main.Instance.GetImg("_ui_bt_fuwuqi0"), 
        n.x = o.width - n.width >> 1, n.y = o.height - n.height >> 1, o.addChild(n), o.label = new egret.TextField(), 
        o.label.touchEnabled = !1, o.label.size = 30, o.label.textColor = ServerUI.COLOR, 
        o.label.width = i.width, o.label.height = i.height, o.label.x = i.x, o.label.y = i.y, 
        o.label.textAlign = egret.HorizontalAlign.CENTER, o.label.verticalAlign = egret.VerticalAlign.MIDDLE, 
        o.addChild(o.label), o;
    }
    return __extends(e, t), e.prototype.SetData = function(t) {
        this.label.text = t.name;
    }, e.Width = 215, e.Height = 80, e;
}(egret.DisplayObjectContainer);

__reflect(ServerUIItem1.prototype, "ServerUIItem1");

var ServerUIItem2 = function(t) {
    function e() {
        var o = t.call(this) || this;
        o.touchEnabled = !0, o.touchChildren = !1, o.width = e.Width, o.height = e.Height;
        var i = new egret.Bitmap();
        return i.touchEnabled = !1, i.texture = Main.Instance.GetImg("_ui_bm_fuwuqibg@60_54_58_58"), 
        i.width = e.Width - 20, i.height = e.Height - 10, i.scale9Grid = new egret.Rectangle(60, 54, 3, 3), 
        i.x = o.width - i.width >> 1, i.y = o.height - i.height >> 1, o.addChild(i), o.label = new egret.TextField(), 
        o.label.touchEnabled = !1, o.label.size = 30, o.label.textColor = ServerUI.COLOR, 
        o.label.height = i.height, o.label.x = 80, o.label.y = i.y, o.label.verticalAlign = egret.VerticalAlign.MIDDLE, 
        o.addChild(o.label), o.flagImg = new egret.Bitmap(), o.flagImg.touchEnabled = !1, 
        o.addChild(o.flagImg), o.hotImg = new egret.Bitmap(), o.hotImg.touchEnabled = !1, 
        o.hotImg.x = 30, o.hotImg.y = 50, o.addChild(o.hotImg), o.headImg = new egret.Bitmap(), 
        o.headImg.touchEnabled = !1, o.headImg.width = 81, o.headImg.height = 81, o.headImg.x = 305, 
        o.headImg.y = 15, o.headImg.texture = Main.Instance.GetImg("_ui_bm_touxiangkuang02"), 
        o.headImg.visible = !1, o.addChild(o.headImg), o.playername = new egret.TextField(), 
        o.playername.touchEnabled = !1, o.playername.size = 18, o.playername.textColor = ServerUI.COLOR, 
        o.playername.height = i.height, o.playername.x = 300, o.playername.y = i.y + 100, 
        o.playername.width = 92, o.playername.textAlign = egret.HorizontalAlign.CENTER, 
        o.addChild(o.playername), o.kuangImg = new egret.Bitmap(), o.kuangImg.texture = Main.Instance.GetImg("_ui_bm_touxiangkuang"), 
        o.kuangImg.width = 92, o.kuangImg.height = 92, o.kuangImg.x = 300, o.kuangImg.y = 10, 
        o.kuangImg.visible = !1, o.addChild(o.kuangImg), o;
    }
    return __extends(e, t), e.prototype.SetData = function(t) {
        this.Desc = t, this.label.text = t.name;
        var e = t.GetStatus();
        this.flagImg.x = 11, this.flagImg.y = 6, this.flagImg.visible = !0, e ? (this.flagImg.texture = Main.Instance.GetImg(1 == e ? "_ui_bm_xin" : "_ui_bm_hot"), 
        this.hotImg.texture = Main.Instance.GetImg("_ui_icon_tongchang")) : (this.flagImg.texture = Main.Instance.GetImg("_ui_bm_weihuzhong"), 
        this.hotImg.texture = Main.Instance.GetImg("_ui_icon_weihu")), this.SetHeadData();
    }, e.prototype.SetHeadData = function() {
        for (var t = this.Desc.ip, e = this.Desc.id, o = Main.Instance.playerServerData.data.recent, i = !1, n = 0; n < o.length; n++) {
            var r = o[n];
            if (t == r.addr && e == r.sid) {
                var s = r.job || 1, a = r.sex || 0;
                this.headImg.texture = Main.Instance.GetImg("head" + s + a), this.playername.text = r.name, 
                this.kuangImg.visible = !0, this.headImg.visible = !0, i = !0;
                break;
            }
        }
        i || (this.kuangImg.visible = !1, this.headImg.visible = !1, this.playername.text = "");
    }, e.Width = 423, e.Height = 131, e;
}(egret.DisplayObjectContainer);

__reflect(ServerUIItem2.prototype, "ServerUIItem2");

var Socket = function() {
    function t() {
        this._socketStatus = 0, this.recvPack = new egret.ByteArray(), this.m_PreHeartBeat = 0, 
        this.m_ServerTimeCounter = 5, this.m_HeartBeat = new egret.ByteArray(new Uint8Array([ 17, 1, 4, 1, 199 ])), 
        this.newSocket();
    }
    return Object.defineProperty(t.prototype, "connected", {
        get: function() {
            return this.socket_ ? this.socket_.connected : !1;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.newSocket = function() {
        this.socket_ && (this.socket_.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this), 
        this.socket_.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this), this.socket_.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this), 
        this.socket_.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this)), 
        this.socket_ = new egret.WebSocket(), this.socket_.type = egret.WebSocket.TYPE_BINARY, 
        this.socket_.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this), 
        this.socket_.addEventListener(egret.Event.CLOSE, this.onSocketClose, this), this.socket_.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this), 
        this.socket_.addEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this);
    }, t.prototype.connectError = function() {
        alert("网络中断"), window.connectError && window.connectError();
    }, t.prototype.connect = function(e, o) {
        this.updateStatus(t.STATUS_CONNECTING), this._host = e, this._port = o, this.Connect(e, o);
    }, t.prototype.Connect = function(e, o) {
        var i = this;
        this.newSocket();
        var n = "";
        if (WindowData.IsHttps()) {
            var r = "", s = e, a = window.gobj;
            a && a.wssUrl && (s = a.wssUrl), a && a.wssPort && a.wssPort > 0 && (r = "" + a.wssPort), 
            r += "/wss/" + e + "/" + o + "/", n = "wss://" + s + ":" + r;
        } else n = "ws://" + e + ":" + o + "/";
        console.log("connect to: " + n), this.socket_.connectByUrl(n), console.log("connect finish: " + n), 
        window.setTimeout(function() {
            i._socketStatus == t.STATUS_CONNECTING && (alert("连接超时"), i.close());
        }, 1e4);
    }, t.prototype.close = function() {
        console.log("close socket！ip:" + this._host + " port:" + this._port), this.socket_ && this.socket_.close(), 
        this.updateStatus(t.STATUS_DISCONNECT), egret.stopTick(this._SendHeartBeat, this);
    }, t.prototype.GetSocketState = function() {
        return this._socketStatus;
    }, t.prototype.onSocketConnected = function(e) {
        console.log("与服务器连接成功！ip:" + this._host + " port:" + this._port), this.updateStatus(t.STATUS_CHECKING), 
        egret.stopTick(this._SendHeartBeat, this), egret.startTick(this._SendHeartBeat, this), 
        this.proxy && this.proxy.onSocketConnected();
    }, t.prototype.onSocketRead = function(t) {
        if (this.proxy) {
            var e = this.recvPack, o = this.socket_;
            o._readByte.position = 0;
            var i = o._readByte.bytesAvailable;
            o.readBytes(e, 0), this.proxy.onSocketRead(new Uint8Array(e.buffer.slice(0, i)));
        }
    }, t.prototype.onSocketClose = function(e) {
        console.log("与服务器的断开连接！ip:" + this._host + " port:" + this._port);
        var o = this._socketStatus;
        this.updateStatus(t.STATUS_DISCONNECT), this.proxy && this.proxy.onSocketClose(o);
    }, t.prototype.updateStatus = function(t) {
        if (this._socketStatus != t) {
            var e = this._socketStatus;
            this._socketStatus = t, this.onFinishCheck(t, e);
        }
    }, t.prototype.onFinishCheck = function(e, o) {
        e == t.STATUS_COMMUNICATION ? console.log("与服务器建立通信成功！ip:" + this._host + " port:" + this._port) : e == t.STATUS_CHECKING || e == t.STATUS_DISCONNECT, 
        this.UpdateStateEvent && this.UpdateStateEvent(e), this.proxy && this.proxy.onFinishCheck(e, o);
    }, t.prototype._SendHeartBeat = function(t) {
        return t > this.m_PreHeartBeat + 2e4 && (this.m_PreHeartBeat = t, this.sendPack(this.m_HeartBeat)), 
        !1;
    }, t.prototype.sendPack = function(t) {
        if (null == t || 0 == t.length) throw new egret.error("数据不能为空！");
        this.socket_ && this.socket_.connected ? this.socket_.writeBytes(t) : console.error("not connect");
    }, t.STATUS_CONNECTING = 1, t.STATUS_CHECKING = 2, t.STATUS_COMMUNICATION = 3, t.STATUS_DISCONNECT = 4, 
    t.ins = function() {
        return t._ins || (t._ins = new t()), t._ins;
    }, t;
}();

__reflect(Socket.prototype, "Socket");

var TextFlowMaker = function() {
    function t() {}
    return t.generateTextFlow = function(t) {
        if (!t) return this.EMPTY_TABLE;
        for (var e = t.split("|"), o = "", i = 0, n = e.length; n > i; i++) {
            var r = e[i];
            r && 0 != r.length && (o += this.getSingleTextFlow1(r));
        }
        return new egret.HtmlTextParser().parser(o);
    }, t.generateTextFlow1 = function(t) {
        for (var e = t.split("|"), o = [], i = 0, n = e.length; n > i; i++) o.push(this.getSingleTextFlow(e[i]));
        return o;
    }, t.getSingleTextFlow1 = function(t) {
        for (var e, o = "<font", i = this.Match(t), n = 0, r = i.length; r > n; n++) {
            var s = i[n].type, a = i[n].value;
            s == this.PROP_TEXT ? e = a : s == this.STYLE_SIZE ? o += ' size="' + parseInt(a) + '"' : s == this.STYLE_COLOR ? o += ' color="' + parseInt(a) + '"' : e = a;
        }
        return o += ">" + e + "</font>";
    }, t.getSingleTextFlow = function(t) {
        for (var e = this.Match(t), o = {
            style: {}
        }, i = 0, n = e.length; n > i; i++) {
            var r = e[i].type, s = e[i].value;
            r == this.PROP_TEXT ? o.text = s : r == this.STYLE_SIZE ? o.style.size = parseInt(s) : r == this.STYLE_COLOR ? o.style.textColor = parseInt(s) : o.text = s;
        }
        return o;
    }, t.consumeLabel = function(t, e, o) {
        void 0 === o && (o = !0);
        var i = "";
        return null == t || isNaN(t) || (i += o ? (e > t ? "|C:0xff0000&T:" : "|C:0x017107&T:") + t + "|/" + e : t), 
        this.generateTextFlow(i);
    }, t.Match = function(t) {
        if (null != t) {
            var e = null;
            this.LIST.length = 0;
            for (var o = 0; 99 > o; ++o) {
                var i = t.match(this._REG);
                if (null == i || -1 == i.index) {
                    this.LIST.push({
                        type: e,
                        value: t
                    });
                    break;
                }
                null != e && this.LIST.push({
                    type: e,
                    value: t.substr(0, i.index)
                }), e = i[0].replace("&", "").replace(":", ""), t = t.substr(i.index + i[0].length);
            }
            return this.LIST;
        }
    }, t.getCStr = function(t) {
        return this.numberList[t] ? this.numberList[t] : "";
    }, t.EMPTY_TABLE = [], t._REG = new RegExp("&?[SCTU]:"), t.LIST = [], t.STYLE_COLOR = "C", 
    t.STYLE_SIZE = "S", t.PROP_TEXT = "T", t.UNDERLINE_TEXT = "U", t.numberList = [ "零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四" ], 
    t;
}();

__reflect(TextFlowMaker.prototype, "TextFlowMaker");

var WindowData = function() {
    function t() {}
    return t.ShowFps = function() {
        if (!this.m_IsShow) {
            this.m_IsShow = !0;
            try {
                document.querySelectorAll(".egret-player")[0]["egret-player"].player.displayFPS(!0, !1, null, {
                    x: 0,
                    y: 0,
                    size: 12,
                    textColor: "0xe8f8fb",
                    bgAlpha: .2
                });
            } catch (t) {}
        }
    }, t._LoginToken = function(t) {
        window._LoginToken(t);
    }, t._GetServerAddr = function() {
        return t.IsHttps() ? "https://" + t._GetCenterAddr() + t.HttpsPort() : "http://" + t._GetCenterAddr() + t.HttpPort();
    }, t._GetBGImg = function() {
        return window.__CONFIG__.__LOING_BG__ || "";
    }, t._GetStartType = function() {
        return window.__CONFIG__.__START_TYPE__ || 0;
    }, t._GetCenterAddr = function() {
        return window.__CONFIG__.__SER_URL__;
    }, t._GetResAddr = function() {
        return window.__CONFIG__.__RES_URL__;
    }, t._GetStartResAddr = function() {
        return window.__CONFIG__.__START_RES__;
    }, t._GetPlatformId = function() {
        return window.__CONFIG__.__PLATFORM_ID__;
    }, t._MainCls = function() {
        return window.__CONFIG__.__MAIN_CLS__ || "StartMain";
    }, t._DirectLogin = function() {
        return window.__CONFIG__.__DIRECT_LOGIN__;
    }, t._GetServerName = function(e) {
        var o = window.__CONFIG__.__ServerNameFunc__;
        if (o) {
            var i = o(e);
            if (i) return i;
        } else if (window.__CONFIG__.__SERVER_NAME__) {
            var n = window.__CONFIG__.__SERVER_NAME__[e];
            if (n) return n;
        }
        var r = "双线%s0服", s = window.__CONFIG__.__SERVER_NAME_ALL_;
        return s && (r = s), t.printfs(r, [ e ]);
    }, t.HasClientConfig = function(t) {
        return this.Has(window.__CONFIG__.__CLIENT_CONFIG__ || 0, t);
    }, t.StartLoading = function() {
        var t = window.__StartLoading;
        t && t();
    }, t.RemoveBg = function() {
        var t = window.__RemoveBg;
        t && t();
    }, t.IsHttps = function() {
        var t = window.__CONFIG__.__RES_URL__;
        return !t && window.location && (t = window.location.href), t && "https:" == t.substr(0, 6) ? !0 : !1;
    }, t.HttpsPort = function() {
        var t = window.__CONFIG__.__HTTPS_PORT__;
        return t && t > 0 ? ":" + t : "";
    }, t.HttpPort = function() {
        var t = window.__CONFIG__.__HTTP_PORT__;
        return t && t > 0 ? ":" + t : "";
    }, t.IsFullScreen = function() {
        if (this._IsFullScreen) return this._IsFullScreen;
        var t = this.HasClientConfig(1);
        return 0 == t ? this._IsFullScreen = !egret.Capabilities.isMobile : this._IsFullScreen = !1, 
        this._IsFullScreen;
    }, t.Has = function(t, e) {
        return (t & 1 << e) > 0;
    }, t.GetThmType = function() {
        return parseInt(window.__CONFIG__.__THM__ || 0);
    }, t.GetDefaultSel = function() {
        return parseInt(window.__CONFIG__.__DEFAULT_JOB__ || 0);
    }, t.GetWeixinAppId = function() {
        return window.__CONFIG__.__WX_APPID__;
    }, t.GetWeixinPayKey = function() {
        return window.__CONFIG__.__WX_PAY_KEY__;
    }, t.GetBtFullVIP = function() {
        return 1 == window.__CONFIG__.__BT_FULL_VIP__;
    }, t.GetHuoSdkAppID = function() {
        return window.__CONFIG__.__HUOSDK_APPID__ || 0;
    }, t.GetHuoSdkWXAppID = function() {
        return window.__CONFIG__.__HUOSDK_WX_APPID__ || 0;
    }, t.GetXhySdkAppID = function() {
        return window.__HUOSDK_XHY_APPID__ || 0;
    }, t.GetXhySdkMPID = function() {
        return window.__HUOSDK_XHY_MPID__ || 0;
    }, t.GetGujianSdkWXAppID = function() {
        return window.__CONFIG__.__GUJIANSDK_WX_APPID__ || "";
    }, t.GetEnterServerID = function() {
        return parseInt(window.__CONFIG__.__ENTER_SERVER_ID__) || 0;
    }, t.HasShare = function() {
        return 1 == window.__CONFIG__.__SHARE__;
    }, t.HasNewShare = function() {
        return 1 == window.__CONFIG__.__SHARE_NEW_SY__;
    }, t.GetGujianSdkQQAppID = function() {
        return window.__CONFIG__.__GUJIANSDK_QQ_APPID__ || "";
    }, t.isQQGameDIS = function() {
        return window.__QQGAME_DIS;
    }, t.GetConfigURL = function() {
        var t = window.GAME_CONFIG_LOCAL;
        return t ? "resource/assets/cfg/config_" + t + ".pack" : window.__QQGAME_CONFIG;
    }, t.isScreenFull = function() {
        return window.SCREEN_FULL;
    }, t.m_IsShow = !1, t.printfs = function(t, e, o) {
        void 0 === o && (o = "%s");
        for (var i = e.length, n = 0; i > n; n++) {
            var r = "\\" + o + n, s = new RegExp(r, "g");
            t = t.replace(s, e[n]);
        }
        return t;
    }, t;
}();

__reflect(WindowData.prototype, "WindowData");

var CreateRoleUI = function(t) {
    function e(e) {
        var o = t.call(this) || this;
        return o.m_Textures = [ {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_bm_juese.png",
            data: null
        }, {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_bm_nvjuese.png",
            data: null
        }, {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_xianzhu_nan.png",
            data: null
        }, {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_xianzhu_nv.png",
            data: null
        }, {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_mozhu_nan.png",
            data: null
        }, {
            path: WindowData._GetResAddr() + "resource/assets/game_start/create/ui_cjjs_mozhu_nv.png",
            data: null
        } ], o.m_IsRandom = !0, o.m_TweenList = [], o.m_CurImgIndex = 1, o.m_Index = -1, 
        o.m_Job = 1, o.m_Sex = 0, o.mSelImg = [], o.time = 6e4, o.m_CheckName = null, o.m_CheckIndex = null, 
        o.m_LastTime = 0, o.m_ServerData = e, o.addEventListener(egret.Event.ADDED_TO_STAGE, o.onAddToStage, o), 
        o;
    }
    return __extends(e, t), e.prototype.m_CreateThm1 = function() {
        var t = this, o = new egret.Bitmap();
        o.texture = Main.Instance.GetImg("_ui_bm_mingzibg@20_19_19_19"), o.y = 1021, o.x = -146, 
        o.width = 292, o.height = 74, o.scale9Grid = new egret.Rectangle(20, 19, 3, 3), 
        this.addChild(o), this.roleGroup0 = new egret.DisplayObjectContainer(), this.roleGroup0.y = 808, 
        this.roleGroup0.x = 0, this.roleGroup0.width = 0, this.roleGroup0.height = 0, this.addChild(this.roleGroup0), 
        this.roleImg0 = new egret.Bitmap(), this.roleGroup0.addChild(this.roleImg0), this.roleGroup1 = new egret.DisplayObjectContainer(), 
        this.roleGroup1.y = 808, this.roleGroup1.x = 0, this.roleGroup1.width = 0, this.roleGroup1.height = 0, 
        this.addChild(this.roleGroup1), this.roleImg1 = new egret.Bitmap(), this.roleGroup1.addChild(this.roleImg1);
        var i = new egret.Bitmap();
        i.texture = Main.Instance.GetImg("_ui_cjjs_bm_wenbenbg"), i.y = 812, i.x = -192, 
        this.addChild(i);
        var n = new egret.TextField();
        n.touchEnabled = !1, n.size = 26, n.textColor = 1324414, n.text = "请选择种族", n.width = 229, 
        n.x = -114, n.y = 830, n.textAlign = egret.HorizontalAlign.CENTER, n.verticalAlign = egret.VerticalAlign.MIDDLE, 
        this.addChild(n);
        var r = new egret.TextField();
        r.touchEnabled = !1, r.size = 26, r.textColor = 15873847, this.timeLabel = r, r.text = "60s后自动进入服务器", 
        r.bold = !0, r.width = 342, r.x = -171, r.y = 1224, r.textAlign = egret.HorizontalAlign.CENTER, 
        r.verticalAlign = egret.VerticalAlign.MIDDLE, this.addChild(r);
        var s = new egret.Bitmap();
        s.touchEnabled = !0, s.texture = Main.Instance.GetImg("_ui_bt_nan"), this.sex1 = s, 
        s.x = 174, s.y = 1015, this.addChild(s), s.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.m_Sex = 0, t.UpdateSel();
        }, this), e.SetDownState(s);
        var a = new egret.Bitmap();
        a.touchEnabled = !0, this.sex2 = a, a.texture = Main.Instance.GetImg("_ui_bt_nv"), 
        a.x = 269, a.y = 1015, this.addChild(a), a.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.m_Sex = 1, t.UpdateSel();
        }, this), e.SetDownState(a);
        var h = new egret.Bitmap();
        this.sel1 = h, h.texture = Main.Instance.GetImg("_ui_cjjs_bm_gou"), h.touchEnabled = !1, 
        h.x = 207, h.y = 1058, this.addChild(h);
        var p = new egret.Bitmap();
        this.sel2 = p, p.texture = Main.Instance.GetImg("_ui_cjjs_bm_gou"), h.touchEnabled = !1, 
        p.x = 304, p.y = 1058, this.addChild(p);
    }, e.prototype.AddSelGroup = function() {
        var t = this, o = new egret.DisplayObjectContainer();
        o.x = 0, o.y = 872, o.width = 0, this.addChild(o);
        var i = new egret.Bitmap();
        i.touchEnabled = !0, i.texture = Main.Instance.GetImg("_ui_icon_renzhu"), i.x = -202, 
        i.y = -4, i.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.Select(0);
        }, this), o.addChild(i), e.SetDownState(i);
        var n = new egret.Bitmap();
        n.touchEnabled = !0, n.texture = Main.Instance.GetImg("_ui_icon_xianzhu"), n.x = -63, 
        n.y = -4, n.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.Select(1);
        }, this), o.addChild(n), e.SetDownState(n);
        var r = new egret.Bitmap();
        r.touchEnabled = !0, r.texture = Main.Instance.GetImg("_ui_icon_mozhu"), r.x = 77, 
        r.y = -4, r.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.Select(2);
        }, this), o.addChild(r), e.SetDownState(r);
        var s = new egret.Bitmap();
        s.texture = Main.Instance.GetImg("_ui_cjjs_bm_renzu"), s.x = -169, s.y = 982, this.addChild(s);
        var a = new egret.Bitmap();
        a.texture = Main.Instance.GetImg("_ui_cjjs_bm_xianzu"), a.x = -28, a.y = 982, this.addChild(a);
        var h = new egret.Bitmap();
        h.texture = Main.Instance.GetImg("_ui_cjjs_bm_mozu"), h.x = 109, h.y = 982, this.addChild(h);
        var p = new egret.DisplayObjectContainer();
        p.x = 0, p.y = 882, p.width = 0, this.addChild(p);
        var d = new egret.Bitmap();
        d.texture = Main.Instance.GetImg("_ui_cjjs_bm_xuanzhongxiaoguo"), d.x = -243, d.y = -48, 
        p.addChild(d), this.mSelImg[0] = d;
        var l = new egret.Bitmap();
        l.texture = Main.Instance.GetImg("_ui_cjjs_bm_xuanzhongxiaoguo"), l.x = -105, l.y = -48, 
        p.addChild(l), this.mSelImg[1] = l;
        var u = new egret.Bitmap();
        u.texture = Main.Instance.GetImg("_ui_cjjs_bm_xuanzhongxiaoguo"), u.x = 35, u.y = -48, 
        p.addChild(u), this.mSelImg[2] = u;
    }, e.prototype.onAddToStage = function(t) {
        var o = this;
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.addEventListener(egret.Event.RESIZE, this.updatePos, this);
        var i = new egret.Bitmap();
        this.bg = i, i.texture = Main.Instance.GetSingleImg("_ui_cjjs_bm_ditu"), this.addChild(i), 
        this.updatePos(), this.m_CreateThm1(), this.AddSelGroup(), this.m_TextField = new egret.TextField(), 
        this.m_TextField.touchEnabled = !0, this.m_TextField.name = "", this.m_TextField.size = 24, 
        this.m_TextField.textColor = 15268091, this.m_TextField.textAlign = egret.HorizontalAlign.CENTER, 
        this.m_TextField.verticalAlign = egret.VerticalAlign.MIDDLE, this.m_TextField.x = -120, 
        this.m_TextField.y = 1032, this.m_TextField.width = 195, this.m_TextField.height = 52, 
        this.m_TextField.type = egret.TextFieldType.INPUT, this.m_TextField.maxChars = Global.sdk.isChaoMeng() ? 4 : 6, 
        this.addChild(this.m_TextField), this.m_TextField.addEventListener(egret.TouchEvent.FOCUS_IN, this._DoFocus, this);
        var n = this.m_Random = new egret.Bitmap();
        n.touchEnabled = !0, this.m_Random.addEventListener(egret.TouchEvent.TOUCH_TAP, this.DoRandom, this), 
        n.texture = Main.Instance.GetImg("_ui_bm_touzi"), n.y = 1025, n.x = 78, this.addChild(n), 
        e.SetDownState(n);
        var r = this.m_GoBtn = new egret.Bitmap();
        r.touchEnabled = !0, this.m_GoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._DoGo, this), 
        r.texture = Main.Instance.GetImg("_ui_bt_kaishiyouxi"), r.y = 1105, r.x = -176, 
        this.addChild(r), e.SetDownState(r);
        var s = new egret.Bitmap();
        s.touchEnabled = !0, s.texture = Main.Instance.GetImg("_ui_bt_jiantou"), s.x = -341, 
        s.y = 618, s.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            o.UpdateIndex(o.m_Index - 1);
        }, this), this.addChild(s), e.SetDownState(s);
        var a = new egret.Bitmap();
        a.touchEnabled = !0, a.texture = Main.Instance.GetImg("_ui_bt_jiantou"), a.x = 341, 
        a.y = 618, a.scaleX = -1, a.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            o.UpdateIndex(o.m_Index + 1);
        }, this), this.addChild(a), e.SetDownState(a), this.Select(1), this.m_LastTime = egret.getTimer(), 
        egret.startTick(this.Update, this);
        for (var h = [ "_ui_xzjs_h1", "_ui_xzjs_h2", "_ui_xzjs_h3", , "_ui_xzjs_h4" ], p = [], d = 0, l = h; d < l.length; d++) {
            var u = l[d];
            p.push(Main.Instance.GetImg(u));
        }
        WeatherFactory.getFlower().playWeather(p), this.SendPoint(1), Global.reyun.enterSelectRole(), 
        Global.sdk.isWxSdkGujian() && window.MEGG_SDK && "1" != egret.localStorage.getItem("meggOldUser") && (Global.sdk.getWxGujianSdk().meggReportWithAppId(), 
        egret.localStorage.setItem("meggOldUser", "1")), Global.sdk.checkRealNameAuth();
    }, e.prototype.updatePos = function() {
        if (WindowData.isScreenFull()) {
            var t = Math.max(this.stage.stageWidth / this.bg.texture.textureWidth, this.stage.stageHeight / this.bg.texture.textureHeight);
            this.bg.width = this.bg.texture.textureWidth * t, this.bg.height = this.bg.texture.textureHeight * t;
        }
        this.bg.texture && (this.bg.x = -(this.bg.width >> 1), this.bg.y = -(this.bg.height - this.stage.stageHeight >> 1));
    }, e.prototype._DoFocus = function() {
        this.m_IsRandom = !1;
    }, e.prototype.UpdateIndex = function(t) {
        0 > t && (t = 5), t > 5 && (t = 0), this.m_Sex = t % 2, this.m_Job = Math.floor(t / 2) + 1, 
        this.UpdateSel();
    }, e.prototype.DoRandom = function() {
        this.m_IsRandom = !1, this._DoRandom();
    }, e.prototype._DoRandom = function() {
        HttpHelper.GetRandomName(this.m_ServerData.id, this.m_Sex, this._DoRandomName, this);
    }, e.prototype._DoGo = function() {
        this.time = 0;
        var t = this.m_TextField.text;
        if (null == t || "" == t) return void alert("名称不能为空");
        if (Global.sdk.isChaoMeng()) for (var e = 0; e < t.length; e++) {
            var o = t.charAt(e);
            if (!this.CheckChinese(o)) return void alert("角色名只能为中文");
        }
        this.SendPoint(2), Global.reyun.enterCreatRole(), this.m_CheckName = t, this.m_CheckIndex = this.m_Index;
        var i = this;
        Global.sdk.hasCheckMsg() ? Global.sdk.checkMsg(t, function(t) {
            t ? i.sendCreate() : alert("角色名违规");
        }, this) : this.sendCreate();
    }, e.prototype.CheckChinese = function(t) {
        var e = new RegExp("[\\u4E00-\\u9FFF]+", "g");
        return e.test(t);
    }, e.prototype.sendCreate = function() {
        var t = this;
        Main.Instance.ConnectServer(this.m_ServerData, function() {
            t.SendPoint(3), Global.reyun.enterLogin(), HttpHelper.CheckName(t.m_ServerData.id, t.m_TextField.text, t._Go, t);
        });
    }, e.prototype.SendPoint = function(t) {
        GameServerData.HasRecentSvr() || HttpHelper.SendPoint(t);
    }, e.prototype._Go = function(t) {
        var e = JSON.parse(t.currentTarget.response);
        if (200 == e.status) if (0 == e.data.result) {
            var o = Main.Instance.mCreateRoleData = {};
            o.crn = this.m_CheckName;
            var i = this.m_CheckIndex;
            o.crji = i, Main.Instance.ShowLoadingUI(), Global.reyun.register(0 == this.m_Sex);
        } else {
            var n = [ "", "角色不存在", "重复创建角色", "创建角色失败", "性别职业错误", "角色名称重复", "角色名含特殊字符", "角色名过长", "角色名含有屏蔽字", "角色名称重复" ][e.data.result] || "名称错误";
            alert(n);
        }
    }, e.prototype._DoRandomName = function(t) {
        var t = JSON.parse(t.currentTarget.response);
        200 == t.status && 1 == t.result && (this.m_TextField.text = t.data);
    }, e.prototype.Select = function(t) {
        this.m_Job = t + 1, this.UpdateSel();
    }, e.prototype.UpdateSel = function() {
        var t = this.m_Index;
        this.m_Index = 2 * (this.m_Job - 1) + this.m_Sex;
        for (var e = this.m_Job - 1, o = 0; o < this.mSelImg.length; o++) this.mSelImg[o].visible = o == e;
        this.sel1.visible = 0 == this.m_Sex, this.sel2.visible = 1 == this.m_Sex;
        var i = (this["roleImg" + this.m_CurImgIndex], this["roleGroup" + this.m_CurImgIndex]);
        if (t != this.m_Index) {
            var n = this.m_Index > t ? -1 : 1, r = 600;
            this.AddTween(i, {
                x: n * r,
                alpha: 0
            }, 350), this.m_CurImgIndex = (this.m_CurImgIndex + 1) % 2;
            var s = this["roleGroup" + this.m_CurImgIndex];
            this._LoadTexture(this.m_Index), s.x = -1 * n * r, s.alpha = 0, this.AddTween(s, {
                x: 0,
                alpha: 1
            }, 350), this.m_IsRandom && this._DoRandom();
        }
    }, e.prototype._LoadTexture = function(t) {
        RES.getResByUrl(this.m_Textures[t].path, this._Loaded, this, RES.ResourceItem.TYPE_IMAGE);
    }, e.prototype._Loaded = function(t, e) {
        if (t) for (var o = 0; o < this.m_Textures.length; ++o) if (this.m_Textures[o].path == e) {
            var i = this["roleImg" + this.m_CurImgIndex];
            i.texture = t, i.x = -(t.textureWidth >> 1), i.y = -t.textureHeight;
            break;
        }
    }, e.prototype.Close = function() {
        if (egret.stopTick(this.Update, this), this.removeEventListener(egret.Event.RESIZE, this.updatePos, this), 
        this.parent) {
            this.parent.removeChild(this);
            for (var t = 0, e = this.m_Textures; t < e.length; t++) {
                var o = e[t];
                RES.destroyRes(o.path);
            }
        }
        WeatherFactory.getFlower().stopWeather();
    }, e.prototype.AddTween = function(t, e, o) {
        for (var i = this.m_TweenList.length - 1; i >= 0; i--) {
            var n = this.m_TweenList[i];
            n.target == t && this.m_TweenList.splice(i, 1);
        }
        var r = {};
        for (var s in e) r[s] = {
            prop: e[s],
            startProp: t[s]
        };
        this.m_TweenList.push({
            time: 0,
            duration: o,
            target: t,
            prop: r
        });
    }, e.prototype.Update = function(t) {
        if (this.parent && this.$stage) {
            var o = t - this.m_LastTime;
            if (this.m_LastTime = t, this.time > 0 && (this.time -= o) <= 0) return void this._DoGo();
            this.timeLabel.text = Math.floor(Math.max(.001 * this.time, 0)) + "s后自动进入服务器";
            for (var i = this.m_TweenList.length - 1; i >= 0; i--) {
                var n = this.m_TweenList[i];
                n.time += o;
                var r = e.circOut(n.time / n.duration);
                n.time >= n.duration && (r = 1, this.m_TweenList.splice(i, 1));
                for (var s in n.prop) {
                    var a = n.prop[s], h = a.startProp + (a.prop - a.startProp) * r;
                    n.target[s] = h;
                }
            }
            return !1;
        }
    }, e.circOut = function(t) {
        return Math.sqrt(1 - --t * t);
    }, e.SetDownState = function(t) {
        var e = t.y, o = t.x;
        t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
            this.y = e + 4, this.x = o + 4;
        }, t), t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function() {
            this.y = e, this.x = o;
        }, t), t.addEventListener(egret.TouchEvent.TOUCH_END, function() {
            this.y = e, this.x = o;
        }, t), t.addEventListener(egret.TouchEvent.TOUCH_MOVE, function() {
            this.y = e, this.x = o;
        }, t);
    }, e;
}(egret.DisplayObjectContainer);

__reflect(CreateRoleUI.prototype, "CreateRoleUI");

var Base64 = function() {
    function t() {}
    return t.encode = function(t) {
        var e, o, i, n, r, s, a, h = "", p = 0;
        for (t = this._utf8_encode(t); p < t.length; ) e = t.charCodeAt(p++), o = t.charCodeAt(p++), 
        i = t.charCodeAt(p++), n = e >> 2, r = (3 & e) << 4 | o >> 4, s = (15 & o) << 2 | i >> 6, 
        a = 63 & i, isNaN(o) ? s = a = 64 : isNaN(i) && (a = 64), h = h + this._keyStr.charAt(n) + this._keyStr.charAt(r) + this._keyStr.charAt(s) + this._keyStr.charAt(a);
        return h;
    }, t.decode = function(t) {
        var e, o, i, n, r, s, a, h = "", p = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < t.length; ) n = this._keyStr.indexOf(t.charAt(p++)), 
        r = this._keyStr.indexOf(t.charAt(p++)), s = this._keyStr.indexOf(t.charAt(p++)), 
        a = this._keyStr.indexOf(t.charAt(p++)), e = n << 2 | r >> 4, o = (15 & r) << 4 | s >> 2, 
        i = (3 & s) << 6 | a, h += String.fromCharCode(e), 64 != s && (h += String.fromCharCode(o)), 
        64 != a && (h += String.fromCharCode(i));
        return h = this._utf8_decode(h);
    }, t._utf8_encode = function(t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", o = 0; o < t.length; o++) {
            var i = t.charCodeAt(o);
            128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), 
            e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), 
            e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
        }
        return e;
    }, t._utf8_decode = function(t) {
        for (var e, o, i = "", n = 0, r = 0; n < t.length; ) e = t.charCodeAt(n), 128 > e ? (i += String.fromCharCode(e), 
        n++) : e > 191 && 224 > e ? (o = t.charCodeAt(n + 1), i += String.fromCharCode((31 & e) << 6 | 63 & o), 
        n += 2) : (o = t.charCodeAt(n + 1), r = t.charCodeAt(n + 2), i += String.fromCharCode((15 & e) << 12 | (63 & o) << 6 | 63 & r), 
        n += 3);
        return i;
    }, t._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
    t;
}();

__reflect(Base64.prototype, "Base64");

var WeatherFactory = function() {
    function t() {}
    return t.getFlower = function() {
        var t = egret.MainContext.instance.stage;
        return this._weatherFlower = this._weatherFlower || new WeatherFlower(), this._weatherFlower.setStageTarget(t), 
        this._weatherFlower;
    }, t.enabled = !1, t.weatherFBList = [], t.weatherSceneList = [], t.weatherRunlist = {}, 
    t;
}();

__reflect(WeatherFactory.prototype, "WeatherFactory");

var WeatherFlower = function(t) {
    function e() {
        var e = t.call(this, 1) || this;
        return e.MAX_COUNT = 10, e.r_P_List = [], e.r_R_List = [], e.r_Max = 7, e.r_L_Delay = 500, 
        e.r_L_Last_Time = 0, e.r_R_Delay = 20, e.r_R_Last_Time = 0, e.s_C_Delay = 300, e.s_C_Last_Time = 0, 
        e.timerFrame = 30, e;
    }
    return __extends(e, t), e.prototype.setStageTarget = function(t) {
        this.stageTarget = t;
    }, e.prototype.onWeatherStart = function() {
        if (this.r_Max = 8, this._lastTime = egret.getTimer(), 0 == this.r_P_List.length && 0 == this.r_R_List.length) for (var t, e = 0; e < this.MAX_COUNT; e++) t = new RainLine(), 
        t.autoRotation = !1, this.r_P_List.push(t);
    }, e.prototype.onWeatherUpdate = function() {
        var t;
        if (null != this.imageList && 0 != this.imageList.length) {
            var e = egret.getTimer();
            if (this.r_Max != this.MAX_COUNT && e - this._lastTime >= 1e3 && (this.r_Max += 1, 
            this.r_Max > this.MAX_COUNT && (this.r_Max = this.MAX_COUNT), this._lastTime = e), 
            this.r_R_List.length < this.r_Max && this.r_P_List.length > 0 && e - this.r_L_Last_Time > this.r_L_Delay) {
                this.r_L_Last_Time = e, t = this.r_P_List.shift(), t.visible = !0, t.type = 0, t.texture = this.imageList[10 * Math.random() % 3 << 0];
                var o = egret.MainContext.instance.stage;
                t.x = o.stageWidth * Math.random() + 1, t.y = 20 * Math.random() + 5, t.sy = t.y, 
                t.targety = o.stageHeight / 2 + o.stageHeight / 2 * Math.random(), t.scaleX = 0, 
                t.scaleY = 0, t.sScale = .5 * Math.random() + .5, t.alpha = 0, t.rotationPlus = 1.5 * (2 * Math.random() - 1), 
                t.sptx = Math.random() / 20 + .01, t.speedx = Math.random() - Math.random() - 2, 
                t.speedy = 3 * Math.random() + 3, null == t.parent && this.stageTarget.addChild(t), 
                this.r_R_List.push(t);
            }
            for (var i = 0; i < this.r_R_List.length; i++) if (t = this.r_R_List[i], t.update(), 
            t.rotation += t.rotationPlus, t.isDeath) this.r_R_List.splice(i--, 1), this.r_P_List.push(t), 
            t.visible = !1; else {
                var n = (t.y - t.sy) / (t.targety - t.sy);
                .2 >= n ? (t.alpha = n / .2, t.scaleX = t.scaleY = t.sScale * t.alpha) : n >= .8 && (t.alpha = (1 - n) / .2, 
                t.scaleX = t.scaleY = t.sScale * t.alpha);
            }
        }
    }, e.prototype.onWeatherStop = function() {
        var t, e;
        for (t = 0; t < this.r_R_List.length; t++) e = this.r_R_List[t], e.visible = !0, 
        this.Remove(e);
        for (t = 0; t < this.r_P_List.length; t++) e = this.r_P_List[t], e.visible = !0, 
        this.Remove(e);
        this.r_R_List.length = 0, this.r_P_List.length = 0;
    }, e.prototype.Remove = function(t) {
        t && t.parent && t.parent.removeChild(t);
    }, e;
}(WeatherBase);

__reflect(WeatherFlower.prototype, "WeatherFlower");

var EObjectPool = function() {
    function t() {}
    return t.push = function(e, o) {
        t.m_objects[e] || (t.m_objects[e] = new Array());
        for (var i = t.m_objects[e], n = 0; n < i.length; n++) if (i[n].o == o) return;
        t.m_objects[e].push({
            o: o,
            t: egret.getTimer()
        });
    }, t.has = function(e) {
        return t.m_objects[e] && t.m_objects[e].length > 0;
    }, t.pop = function(e) {
        return t.has(e) ? t.m_objects[e].pop().o : null;
    }, t.popCreat = function(e) {
        if (t.has(e)) return t.pop(e);
        var o = egret.getDefinitionByName(e);
        return o ? new o() : (console.error("不存在类：", e), null);
    }, t.pushObject = function(e) {
        var o = egret.getQualifiedClassName(e);
        t.push(o, e);
    }, t.check = function() {
        var e = egret.getTimer();
        for (var o in t.m_objects) for (var i = t.m_objects[o], n = i.length; n >= 0; n--) e - i[n].t > 12e5 && (null != i[n].cacheTimeOutClear && i[n].cacheTimeOutClear(), 
        i.splice(n, 1));
    }, t.m_objects = {}, t;
}();

__reflect(EObjectPool.prototype, "EObjectPool");

var HttpRequestNet = function() {
    function t(t, e) {
        void 0 === t && (t = 1), this._reqs = [], this._cons = [];
        for (var o = 0; t > o; o++) this._cons.push(new HttpReq(this));
    }
    return t.prototype.call = function(t, e, o, i) {
        this._reqs.push([ t, e, o, i ]), this._post();
    }, t.prototype.release = function(t) {
        return this._cons.indexOf(t) >= 0 ? void console.log("*********release error***********") : (this._cons.push(t), 
        void this._post());
    }, t.prototype.lock = function() {
        return 0 != this._cons.length ? this._cons.pop() : void 0;
    }, t.prototype._post = function() {
        if (0 != this._reqs.length) {
            var t = this.lock();
            if (null != t) {
                var e = this._reqs.shift(), o = e[0], i = e[1], n = e[2], r = e[3];
                t.send(o, i, n, r);
            }
        }
    }, t;
}();

__reflect(HttpRequestNet.prototype, "HttpRequestNet");

var HttpReq = function() {
    function t(t) {
        this.net = t, this.req = new egret.HttpRequest(), this.req.responseType = egret.HttpResponseType.TEXT, 
        this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
        this.req.addEventListener(egret.Event.COMPLETE, this.onSendRequestComplete, this), 
        this.req.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    }
    return t.prototype.send = function(t, e, o, i, n) {
        this.cb = o, this.cbThis = i, this.req.open(t, n ? n : egret.HttpMethod.POST), this.req.send(e ? JSON.stringify(e) : null);
    }, t.prototype.onSendRequestComplete = function(t) {
        var e = this.req.response;
        null != this.cb && this.cb.call(this.cbThis, e), this.net.release(this);
    }, t.prototype.onError = function(t) {
        null != this.cb && this.cb.call(this.cbThis, "error"), this.net.release(this);
    }, t;
}();

__reflect(HttpReq.prototype, "HttpReq");

var I_md5 = function() {
    function t() {}
    return t.hex_md5 = function(t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)));
    }, t.b64_md5 = function(t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)));
    }, t.any_md5 = function(t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e);
    }, t.hex_hmac_md5 = function(t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }, t.b64_hmac_md5 = function(t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }, t.any_hmac_md5 = function(t, e, o) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), o);
    }, t.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
    }, t.rstr_md5 = function(t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length));
    }, t.rstr_hmac_md5 = function(t, e) {
        var o = this.rstr2binl(t);
        o.length > 16 && (o = this.binl_md5(o, 8 * t.length));
        for (var i = Array(16), n = Array(16), r = 0; 16 > r; r++) i[r] = 909522486 ^ o[r], 
        n[r] = 1549556828 ^ o[r];
        var s = this.binl_md5(i.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(n.concat(s), 640));
    }, t.rstr2hex = function(t) {
        try {
            this.hexcase;
        } catch (e) {
            this.hexcase = 0;
        }
        for (var o, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", r = 0; r < t.length; r++) o = t.charCodeAt(r), 
        n += i.charAt(o >>> 4 & 15) + i.charAt(15 & o);
        return n;
    }, t.rstr2b64 = function(t) {
        try {
            this.b64pad;
        } catch (e) {
            this.b64pad = "";
        }
        for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", n = t.length, r = 0; n > r; r += 3) for (var s = t.charCodeAt(r) << 16 | (n > r + 1 ? t.charCodeAt(r + 1) << 8 : 0) | (n > r + 2 ? t.charCodeAt(r + 2) : 0), a = 0; 4 > a; a++) i += 8 * r + 6 * a > 8 * t.length ? this.b64pad : o.charAt(s >>> 6 * (3 - a) & 63);
        return i;
    }, t.rstr2any = function(t, e) {
        var o, i, n, r, s, a = e.length, h = Array(Math.ceil(t.length / 2));
        for (o = 0; o < h.length; o++) h[o] = t.charCodeAt(2 * o) << 8 | t.charCodeAt(2 * o + 1);
        var p = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))), d = Array(p);
        for (i = 0; p > i; i++) {
            for (s = Array(), r = 0, o = 0; o < h.length; o++) r = (r << 16) + h[o], n = Math.floor(r / a), 
            r -= n * a, (s.length > 0 || n > 0) && (s[s.length] = n);
            d[i] = r, h = s;
        }
        var l = "";
        for (o = d.length - 1; o >= 0; o--) l += e.charAt(d[o]);
        return l;
    }, t.str2rstr_utf8 = function(t) {
        for (var e, o, i = "", n = -1; ++n < t.length; ) e = t.charCodeAt(n), o = n + 1 < t.length ? t.charCodeAt(n + 1) : 0, 
        e >= 55296 && 56319 >= e && o >= 56320 && 57343 >= o && (e = 65536 + ((1023 & e) << 10) + (1023 & o), 
        n++), 127 >= e ? i += String.fromCharCode(e) : 2047 >= e ? i += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : 65535 >= e ? i += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : 2097151 >= e && (i += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return i;
    }, t.str2rstr_utf16le = function(t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(255 & t.charCodeAt(o), t.charCodeAt(o) >>> 8 & 255);
        return e;
    }, t.str2rstr_utf16be = function(t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(t.charCodeAt(o) >>> 8 & 255, 255 & t.charCodeAt(o));
        return e;
    }, t.rstr2binl = function(t) {
        for (var e = Array(t.length >> 2), o = 0; o < e.length; o++) e[o] = 0;
        for (var o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
        return e;
    }, t.binl2rstr = function(t) {
        for (var e = "", o = 0; o < 32 * t.length; o += 8) e += String.fromCharCode(t[o >> 5] >>> o % 32 & 255);
        return e;
    }, t.binl_md5 = function(t, e) {
        t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
        for (var o = 1732584193, i = -271733879, n = -1732584194, r = 271733878, s = 0; s < t.length; s += 16) {
            var a = o, h = i, p = n, d = r;
            o = this.md5_ff(o, i, n, r, t[s + 0], 7, -680876936), r = this.md5_ff(r, o, i, n, t[s + 1], 12, -389564586), 
            n = this.md5_ff(n, r, o, i, t[s + 2], 17, 606105819), i = this.md5_ff(i, n, r, o, t[s + 3], 22, -1044525330), 
            o = this.md5_ff(o, i, n, r, t[s + 4], 7, -176418897), r = this.md5_ff(r, o, i, n, t[s + 5], 12, 1200080426), 
            n = this.md5_ff(n, r, o, i, t[s + 6], 17, -1473231341), i = this.md5_ff(i, n, r, o, t[s + 7], 22, -45705983), 
            o = this.md5_ff(o, i, n, r, t[s + 8], 7, 1770035416), r = this.md5_ff(r, o, i, n, t[s + 9], 12, -1958414417), 
            n = this.md5_ff(n, r, o, i, t[s + 10], 17, -42063), i = this.md5_ff(i, n, r, o, t[s + 11], 22, -1990404162), 
            o = this.md5_ff(o, i, n, r, t[s + 12], 7, 1804603682), r = this.md5_ff(r, o, i, n, t[s + 13], 12, -40341101), 
            n = this.md5_ff(n, r, o, i, t[s + 14], 17, -1502002290), i = this.md5_ff(i, n, r, o, t[s + 15], 22, 1236535329), 
            o = this.md5_gg(o, i, n, r, t[s + 1], 5, -165796510), r = this.md5_gg(r, o, i, n, t[s + 6], 9, -1069501632), 
            n = this.md5_gg(n, r, o, i, t[s + 11], 14, 643717713), i = this.md5_gg(i, n, r, o, t[s + 0], 20, -373897302), 
            o = this.md5_gg(o, i, n, r, t[s + 5], 5, -701558691), r = this.md5_gg(r, o, i, n, t[s + 10], 9, 38016083), 
            n = this.md5_gg(n, r, o, i, t[s + 15], 14, -660478335), i = this.md5_gg(i, n, r, o, t[s + 4], 20, -405537848), 
            o = this.md5_gg(o, i, n, r, t[s + 9], 5, 568446438), r = this.md5_gg(r, o, i, n, t[s + 14], 9, -1019803690), 
            n = this.md5_gg(n, r, o, i, t[s + 3], 14, -187363961), i = this.md5_gg(i, n, r, o, t[s + 8], 20, 1163531501), 
            o = this.md5_gg(o, i, n, r, t[s + 13], 5, -1444681467), r = this.md5_gg(r, o, i, n, t[s + 2], 9, -51403784), 
            n = this.md5_gg(n, r, o, i, t[s + 7], 14, 1735328473), i = this.md5_gg(i, n, r, o, t[s + 12], 20, -1926607734), 
            o = this.md5_hh(o, i, n, r, t[s + 5], 4, -378558), r = this.md5_hh(r, o, i, n, t[s + 8], 11, -2022574463), 
            n = this.md5_hh(n, r, o, i, t[s + 11], 16, 1839030562), i = this.md5_hh(i, n, r, o, t[s + 14], 23, -35309556), 
            o = this.md5_hh(o, i, n, r, t[s + 1], 4, -1530992060), r = this.md5_hh(r, o, i, n, t[s + 4], 11, 1272893353), 
            n = this.md5_hh(n, r, o, i, t[s + 7], 16, -155497632), i = this.md5_hh(i, n, r, o, t[s + 10], 23, -1094730640), 
            o = this.md5_hh(o, i, n, r, t[s + 13], 4, 681279174), r = this.md5_hh(r, o, i, n, t[s + 0], 11, -358537222), 
            n = this.md5_hh(n, r, o, i, t[s + 3], 16, -722521979), i = this.md5_hh(i, n, r, o, t[s + 6], 23, 76029189), 
            o = this.md5_hh(o, i, n, r, t[s + 9], 4, -640364487), r = this.md5_hh(r, o, i, n, t[s + 12], 11, -421815835), 
            n = this.md5_hh(n, r, o, i, t[s + 15], 16, 530742520), i = this.md5_hh(i, n, r, o, t[s + 2], 23, -995338651), 
            o = this.md5_ii(o, i, n, r, t[s + 0], 6, -198630844), r = this.md5_ii(r, o, i, n, t[s + 7], 10, 1126891415), 
            n = this.md5_ii(n, r, o, i, t[s + 14], 15, -1416354905), i = this.md5_ii(i, n, r, o, t[s + 5], 21, -57434055), 
            o = this.md5_ii(o, i, n, r, t[s + 12], 6, 1700485571), r = this.md5_ii(r, o, i, n, t[s + 3], 10, -1894986606), 
            n = this.md5_ii(n, r, o, i, t[s + 10], 15, -1051523), i = this.md5_ii(i, n, r, o, t[s + 1], 21, -2054922799), 
            o = this.md5_ii(o, i, n, r, t[s + 8], 6, 1873313359), r = this.md5_ii(r, o, i, n, t[s + 15], 10, -30611744), 
            n = this.md5_ii(n, r, o, i, t[s + 6], 15, -1560198380), i = this.md5_ii(i, n, r, o, t[s + 13], 21, 1309151649), 
            o = this.md5_ii(o, i, n, r, t[s + 4], 6, -145523070), r = this.md5_ii(r, o, i, n, t[s + 11], 10, -1120210379), 
            n = this.md5_ii(n, r, o, i, t[s + 2], 15, 718787259), i = this.md5_ii(i, n, r, o, t[s + 9], 21, -343485551), 
            o = this.safe_add(o, a), i = this.safe_add(i, h), n = this.safe_add(n, p), r = this.safe_add(r, d);
        }
        return [ o, i, n, r ];
    }, t.md5_cmn = function(t, e, o, i, n, r) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(i, r)), n), o);
    }, t.md5_ff = function(t, e, o, i, n, r, s) {
        return this.md5_cmn(e & o | ~e & i, t, e, n, r, s);
    }, t.md5_gg = function(t, e, o, i, n, r, s) {
        return this.md5_cmn(e & i | o & ~i, t, e, n, r, s);
    }, t.md5_hh = function(t, e, o, i, n, r, s) {
        return this.md5_cmn(e ^ o ^ i, t, e, n, r, s);
    }, t.md5_ii = function(t, e, o, i, n, r, s) {
        return this.md5_cmn(o ^ (e | ~i), t, e, n, r, s);
    }, t.safe_add = function(t, e) {
        var o = (65535 & t) + (65535 & e), i = (t >> 16) + (e >> 16) + (o >> 16);
        return i << 16 | 65535 & o;
    }, t.bit_rol = function(t, e) {
        return t << e | t >>> 32 - e;
    }, t.hexcase = 0, t.b64pad = "", t;
}();

__reflect(I_md5.prototype, "I_md5"), window.mymd5 = I_md5;

var PlatformVOSoEasy = function() {
    function t() {
        this.sdkname = "", this.channel = "", this.isSubscribe = !1, this.seceret_key = "", 
        this.init = !1;
    }
    return t;
}();

__reflect(PlatformVOSoEasy.prototype, "PlatformVOSoEasy");

var Platformqucikh5 = function() {
    function t() {}
    return t;
}();

__reflect(Platformqucikh5.prototype, "Platformqucikh5");

var PlatformWxGameVO = function() {
    function t() {}
    return t;
}();

__reflect(PlatformWxGameVO.prototype, "PlatformWxGameVO");

var PlatformWxHuoSDKVO = function(t) {
    function e() {
        return t.call(this) || this;
    }
    return __extends(e, t), e;
}(PlatformWxGameVO);

__reflect(PlatformWxHuoSDKVO.prototype, "PlatformWxHuoSDKVO");

var PlatformWxGujianSDKVO = function(t) {
    function e() {
        return t.call(this) || this;
    }
    return __extends(e, t), e;
}(PlatformWxGameVO);

__reflect(PlatformWxGujianSDKVO.prototype, "PlatformWxGujianSDKVO");

var PlatformVOWd = function() {
    function t() {}
    return t;
}();

__reflect(PlatformVOWd.prototype, "PlatformVOWd");

var PlatformVOH5Shengye = function() {
    function t() {}
    return t;
}();

__reflect(PlatformVOH5Shengye.prototype, "PlatformVOH5Shengye");

var PlatformXiaomiQuickGameVO = function() {
    function t() {}
    return t;
}();

__reflect(PlatformXiaomiQuickGameVO.prototype, "PlatformXiaomiQuickGameVO");

var PlatformOppoQuickGameVO = function() {
    function t() {
        this.hasSysInfo = !1, this.platformVersion = 1;
    }
    return t.prototype.setSysInfo = function(t) {
        t && (this.hasSysInfo = !0, this.COREVersion = t.COREVersion, this.brand = t.brand, 
        this.language = t.language, this.model = t.model, this.notchHeight = t.notchHeight, 
        this.pixelRatio = t.pixelRatio, this.platform = t.platform, this.platformVersion = t.platformVersion, 
        this.screenHeight = t.screenHeight, this.screenWidth = t.screenWidth, this.system = t.system, 
        this.windowHeight = t.windowHeight, this.windowWidth = t.windowWidth);
    }, t;
}();

__reflect(PlatformOppoQuickGameVO.prototype, "PlatformOppoQuickGameVO");

var PlatformQiliVO = function() {
    function t() {}
    return t;
}();

__reflect(PlatformQiliVO.prototype, "PlatformQiliVO");

var PlatformUcWeb = function() {
    function t() {
        this.pixelRatio = 0, this.ua = "", this.top = 0, this.channel_id = "73bef54f229ddba0a0b3eaad62032805";
    }
    return t;
}();

__reflect(PlatformUcWeb.prototype, "PlatformUcWeb");

var PlatformFkylcH5 = function() {
    function t() {}
    return t;
}();

__reflect(PlatformFkylcH5.prototype, "PlatformFkylcH5");

var PlatformAiWan = function() {
    function t() {}
    return t;
}();

__reflect(PlatformAiWan.prototype, "PlatformAiWan");

var PlatformVOQzone = function() {
    function t() {
        this.inited = !1, this.addShortcut = !1;
    }
    return t.prototype.canPlaySound = function() {
        return !(this.isQzoneApp() && 1 == this.platform);
    }, t.prototype.getDevice = function() {
        return 1 == this.platform ? "android" : "ios";
    }, t.prototype.isQzoneApp = function() {
        return "QZ" == this.qua.app;
    }, t.prototype.isQQ = function() {
        return "SQ" == this.qua.app;
    }, t.prototype.isWX = function() {
        return "WX" == this.qua.app;
    }, t;
}();

__reflect(PlatformVOQzone.prototype, "PlatformVOQzone");

var PlatformWxSiLang = function() {
    function t() {}
    return t;
}();

__reflect(PlatformWxSiLang.prototype, "PlatformWxSiLang");

var PlatformH5SiLang = function() {
    function t() {}
    return t;
}();

__reflect(PlatformH5SiLang.prototype, "PlatformH5SiLang");

var PlatformPcQzone = function() {
    function t() {
        this.is_blue_vip = 0, this.is_blue_year_vip = 0, this.is_super_blue_vip = 0, this.blue_vip_level = 0;
    }
    return t;
}();

__reflect(PlatformPcQzone.prototype, "PlatformPcQzone");

var PlatformWxSmz = function() {
    function t() {}
    return t;
}();

__reflect(PlatformWxSmz.prototype, "PlatformWxSmz");

var Platform8827wan = function() {
    function t() {}
    return t;
}();

__reflect(Platform8827wan.prototype, "Platform8827wan");

var PlatformWxFxmVO = function() {
    function t() {}
    return t;
}();

__reflect(PlatformWxFxmVO.prototype, "PlatformWxFxmVO");

var Common = function() {
    function t() {}
    return t.timer = new TimerMgr(), t;
}();

__reflect(Common.prototype, "Common");

var DataManager = function() {
    function t() {}
    return Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance ? t._instance : new t();
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

__reflect(DataManager.prototype, "DataManager");

var ReyunMgr = function() {
    function t() {
        this.urls = "https://log.reyun.com/", this.appID = "", this.deviceid = "unknown", 
        this.channelid = "unknown", this.reqList = [], this.http = new HttpRequestNet(2, egret.URLRequestMethod.POST), 
        this.startHeartbeat = !1, this._enterSelectServer = !1, this.t = 1, Common.timer.doTimer(1e3, 0, this.onTick, this);
    }
    return t.prototype.startHeartbeatSend = function() {
        this.startHeartbeat = !0, this.t = 0, this.heartbeat();
    }, t.prototype.install = function() {
        this.call("receive/rest/install", this.getObj(!1, !1, !1));
    }, t.prototype.startup = function() {
        this.call("receive/rest/startup", this.getObj(!1, !1, !1, !0));
    }, t.prototype.register = function(t) {
        var e = this.getObj(!0, !0, !1);
        e.context && (e.context.gender = t ? "m" : "f"), this.call("receive/rest/register", e);
    }, t.prototype.loggedin = function() {
        var t = this.getObj(!0, !0, !0, !1);
        this.call("receive/rest/loggedin", t);
    }, t.prototype.economy = function(t, e, o) {
        var i = this.getObj();
        i.context.itemname = t, i.context.itemamount = e.toString(), i.context.itemtotalprice = o.toString(), 
        this.call("receive/rest/economy", i);
    }, t.prototype.quest = function(t, e, o) {
        var i = this.getObj();
        i.context.questid = t, i.context.queststatus = e;
        var n = o.toString();
        1 == o ? n = "main" : 3 == o ? n = "日常" : 2 == o ? n = "日环" : 4 == o && (n = "公会"), 
        i.context.questtype = n, this.call("receive/rest/quest", i);
    }, t.prototype.enterLogin = function() {
        this.event("登录", !1, !0, !1);
    }, t.prototype.enterSelectServer = function() {
        this._enterSelectServer || (this.event("选服页", !1, !0, !1), this._enterSelectServer = !0);
    }, t.prototype.enterLoding = function() {
        this.event("加载资源", !1, !0, !1);
    }, t.prototype.enterSelectRole = function() {
        this.event("选角页", !0, !0, !1);
    }, t.prototype.enterCreatRole = function() {
        this.event("点击创角", !0, !0, !1);
    }, t.prototype.event = function(t, e, o, i) {
        void 0 === e && (e = !0), void 0 === o && (o = !0), void 0 === i && (i = !0);
        var n = this.getObj(e, o, i);
        n.what = t, this.call("receive/rest/event", n);
    }, t.prototype.call = function(t, e, o) {
        "" != this.appID && "unknown" != this.channelid && (o ? this._call(t, e) : this.reqList.push([ t, e ]));
    }, t.prototype._call = function(t, e) {
        this.http.call(t, JSON.stringify(e), null);
    }, t.prototype.heartbeat = function() {
        var t = this.getObj();
        "unknown" != t.context.serverid && this.call("receive/rest/heartbeat", t);
    }, t.prototype.getObj = function(t, e, o, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === o && (o = !0), void 0 === i && (i = !1);
        var n = {
            appid: this.appID,
            context: {
                deviceid: this.deviceid,
                channelid: this.channelid.toString()
            }
        }, r = Global.base;
        if (t && (n.context.serverid = r.serverId ? r.serverId : "unknown"), e && (n.who = r.uid ? r.uid : "unknown"), 
        i && (n.context.os = egret.Capabilities.os), o && (n.context.level = r._level ? r._level : "unknown"), 
        Global.sdk.hasSdk()) {
            var s = Global.sdk.getDeviceInfo();
            s && s.imei && (n.context.deviceid = s.imei);
        }
        return n;
    }, t.prototype.onTick = function() {
        if (this.t++, this.t >= 15 && this.startHeartbeat && (this.t = 0, this.heartbeat()), 
        this.reqList.length > 0) {
            var t = this.reqList.shift();
            this.http.call(this.urls + t[0], t[1]);
        }
    }, t;
}();

__reflect(ReyunMgr.prototype, "ReyunMgr");

var SdkLoginUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e;
    }
    return __extends(e, t), e.showLoginUI = function() {
        this.sdkLoginUI || (this.sdkLoginUI = new e()), egret.MainContext.instance.stage.addChild(this.sdkLoginUI);
    }, e.closeLoginUI = function() {
        this.sdkLoginUI && (this.sdkLoginUI.parent && this.sdkLoginUI.parent.removeChild(this.sdkLoginUI), 
        this.sdkLoginUI.onClose(), this.sdkLoginUI = null);
    }, e.prototype.onAddToStage = function(t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.bg = new egret.Bitmap(), 
        this.bg.touchEnabled = !0, this.addChild(this.bg);
        var e = this.bg;
        RES.getResByUrl("resource/assets/game_start/login_bg_wd_hs.png", function(t, o) {
            e.texture = t, e.x = egret.MainContext.instance.stage.stageWidth - t.textureWidth >> 1, 
            e.y = egret.MainContext.instance.stage.stageHeight - t.textureHeight >> 1;
        }, this, RES.ResourceItem.TYPE_IMAGE), e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickImg, this);
    }, e.prototype.clickImg = function(t) {
        Global.sdk.isWdQuick() && Global.sdk.getqucikWd() ? Global.sdk.getqucikWd().login() : Global.sdk.isQuickSdk() && Global.sdk.getqucikh5() ? Global.sdk.getqucikh5().initLogin() : Global.sdk.isUCWebGame() && Global.sdk.getUcWebSdk() && Global.sdk.getUcWebSdk().login(), 
        SdkMgr.callAndroid("reqLogin", ""), e.closeLoginUI();
    }, e.prototype.onClose = function() {
        this.bg && (this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickImg, this), 
        this.bg.texture = null);
    }, e;
}(egret.DisplayObjectContainer);

__reflect(SdkLoginUI.prototype, "SdkLoginUI");

var PlayerBaseInfo = function() {
    function t() {}
    return t;
}();

__reflect(PlayerBaseInfo.prototype, "PlayerBaseInfo");

var Global = function() {
    function t() {}
    return t.init = function() {
        t.sdk = new SdkMgr(), t.reyun = new ReyunMgr(), t.base = new PlayerBaseInfo(), t.wx = new Wx();
    }, t.reload = function(t) {
        null == t ? window.location.reload() : window.location.href = t;
    }, t.getUrlParam = function(t) {
        if (!t) return null;
        var e = t.lastIndexOf("?");
        if (-1 == e) return null;
        for (var o = t.substr(e + 1).split("&"), i = o.length, n = {}, r = 0; i > r; r++) {
            var s = o[r].indexOf("=");
            -1 != s && (n[o[r].substr(0, s)] = decodeURIComponent(o[r].substr(s + 1)));
        }
        return n;
    }, t.getRandomUID = function() {
        return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
    }, t.getServerTime = function() {
        return window.GameServer ? window.GameServer.serverTimeMilli : 0;
    }, t.showLoading = function(e) {
        window.wx && window.wx.exitMiniProgram && (!this.infoLab && e && (this.linkLab = new egret.TextField(), 
        this.linkLab.touchEnabled = !0, this.linkLab.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e) {
            t.exitMiniProgram();
        }, this), this.linkLab.text = "若长时间加载不成功，请点击刷新界面", this.linkLab.strokeColor = 723971, 
        this.linkLab.textColor = 2480417, this.linkLab.stroke = 1, this.linkLab.size = 24, 
        this.linkLab.y = egret.MainContext.instance.stage.stageHeight - 150, this.linkLab.width = egret.MainContext.instance.stage.stageWidth, 
        this.linkLab.verticalAlign = egret.VerticalAlign.MIDDLE, this.linkLab.textAlign = egret.HorizontalAlign.CENTER, 
        egret.MainContext.instance.stage.addChild(this.linkLab), this.infoLab = new egret.TextField(), 
        this.infoLab.touchEnabled = !0, this.infoLab.addEventListener(egret.TouchEvent.TOUCH_TAP, function(t) {}, this), 
        this.infoLab.strokeColor = 723971, this.infoLab.textColor = 16777215, this.infoLab.stroke = 1, 
        this.infoLab.size = 24, this.infoLab.y = this.linkLab.y + 30, this.infoLab.width = this.linkLab.width, 
        this.infoLab.verticalAlign = egret.VerticalAlign.MIDDLE, this.infoLab.textAlign = egret.HorizontalAlign.CENTER, 
        egret.MainContext.instance.stage.addChild(this.infoLab)), e ? this.infoLab.text = e : (this.infoLab && this.infoLab.parent && (this.infoLab.parent.removeChild(this.infoLab), 
        this.infoLab = null), this.linkLab && this.linkLab.parent && (this.linkLab.parent.removeChild(this.linkLab), 
        this.linkLab = null)));
    }, t.exitMiniProgram = function() {
        var t = window.wx;
        t && t.exitMiniProgram && t.showModal({
            title: "提示",
            content: "确定重启小游戏程序？下拉即可重新进入游戏",
            success: function(e) {
                e.confirm ? t.exitMiniProgram() : e.cancel;
            }
        });
    }, t.onlyShow1Server = function() {
        var e = window.onlyShow1ServerChannelArr;
        if (!e || 0 == e.length) return !1;
        var o = window.gobj;
        if (!o || "qilong" != o.pf) return !1;
        if (!t.sdk.isQuickSdk()) return !1;
        if (!t.sdk.getqucikh5()) return !1;
        if (!t.sdk.getqucikh5().getValue()) return !1;
        var i = t.sdk.getqucikh5().getValue().channelId;
        return -1 != e.indexOf(i);
    }, t;
}();

__reflect(Global.prototype, "Global");

var SdkMgr = function() {
    function t() {
        this.platformId = 0, this.ischeckRealNameAuth = !1;
    }
    return t.callAndroid = function(t, e) {
        window.androidMethod && window.androidMethod[t] ? (console.info("[微端][h5]调用：" + t + " 参数：" + e), 
        window.androidMethod[t](e)) : console.info("[微端][h5]调用：" + t + " 不存在");
    }, t.prototype.GetSoeasyKey = function() {
        return window.gobj.soeasy_key ? window.gobj.soeasy_key : "8d344c418054efd48c9333f8a0ec7077";
    }, t.prototype.GetQuickKey = function() {
        return window.gobj.quick_code ? [ window.gobj.quick_code, window.gobj.quick_key ] : [ "02571387939369936156567794634425", "77291071" ];
    }, t.prototype.hasSdk = function() {
        return null != this.currSdk;
    }, t.prototype.initSdk = function(t) {
        if (this.platformId = window.gobj.platformId ? window.gobj.platformId : 0, console.info("platformId:", this.platformId), 
        this.isWdChaoMeng()) Global.needWait = !0, this.currSdk = this.init_wdChaoMeng(); else if (this.is8827wan()) this.currSdk = this.init_8827wan(t); else if (this.isWxSmz()) Global.needWait = !0, 
        this.currSdk = this.init_wxSmz(); else if (this.isWanba()) Global.needWait = !0, 
        this.currSdk = this.init_qqWanba(t); else if (this.isPcQzone()) Global.needWait = !0, 
        this.currSdk = this.init_pcQzone(t); else if (this.isWxSiLang()) Global.needWait = !0, 
        this.currSdk = this.init_siLangWX(); else if (this.isH5SiLang()) Global.needWait = !0, 
        this.currSdk = this.init_siLangH5(); else if (this.isAiwanH5()) Global.needWait = !0, 
        this.currSdk = this.init_AiwanH5(); else if (this.isFkylcH5()) this.currSdk = this.init_FkylcH5(t); else if (this.isWdQuick()) Global.needWait = !0, 
        this.currSdk = this.init_wdQuick(); else if (this.isUCWebGame()) Global.needWait = !0, 
        this.currSdk = this.init_ucWebGame(); else if (this.isH5Shengye()) Global.needWait = !0, 
        this.currSdk = this.init_h5Shengye(Global.getUrlParam(window.location.href)); else if (this.isH5Qili()) this.currSdk = this.init_qiliGonghui(t); else if (this.isMiQuickSdk()) Global.needWait = !1, 
        0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_xiaomiQuickGamen({}); else if (this.isOppoQuickSdk()) Global.needWait = !1, 
        0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_oppoQuickGamen({}); else if (this.isSoeasySdk()) this.currSdk = this.init_soEasy(t), 
        Global.needWait || (Global.needWait = !0, Common.timer.doTimer(1e3, 0, Global.main.onSoEasyWaitInit, Global.main)); else if (this.isQuickSdk()) this.currSdk = this.init_quickh5(t), 
        Global.needWait || (Global.needWait = !0); else if (this.isWxSdk() || this.isQQSdk()) {
            Global.wx.init();
            var e = window.location.href, o = Global.wx.GetParam(), i = e + o;
            -1 == e.lastIndexOf("?") && -1 == o.indexOf("?") && (i = e + "?" + o);
            var n = Global.getUrlParam(i);
            n && n.o && (console.info("通过二维码获取替换openid:" + n.o), window.fromopenid = n.o), this.isWxFxm() ? (Global.needWait = !1, 
            0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_wxGame_fxm(n)) : this.isQQSdkGujian() ? (Global.needWait = !1, 
            0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_qqGame_gujian(n)) : this.isWxSdkXingHeYue() ? (Global.needWait = !1, 
            0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_wxGame_xhy(n)) : this.isWxSdkHuoshu() ? (Global.needWait = !1, 
            0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_wxGame_huoshu(n)) : this.isWxSdkGujian() ? (Global.needWait = !1, 
            0 == this.platformId && (this.platformId = 2), this.currSdk = this.init_wxGame_gujian(n)) : (0 == this.platformId && (this.platformId = 2), 
            Global.needWait = !1, this.currSdk = this.init_wxGame(n));
        } else this.isWd() ? (Global.needWait = !0, this.isWdXingHeYue() ? (0 == this.platformId && (this.platformId = 2), 
        this.currSdk = this.init_wdHuoshu()) : this.isWdDayan() ? (0 == this.platformId && (this.platformId = 2), 
        this.currSdk = this.init_wdQy()) : this.isXibangZhiwan() ? (0 == this.platformId && (this.platformId = 2), 
        this.currSdk = this.init_xibangZhiwan()) : 3 == this.platformId ? this.currSdk = this.init_wdQy() : 2 == this.platformId && (this.currSdk = this.init_wdHuoshu())) : console.info("====默认sdk====");
        return console.info("====平台ID====" + this.platformId), Global.reyun.channelid = this.getChannel(), 
        !0;
    }, t.prototype.init_quickh5 = function(t) {
        return this.sdk_qucikh5 = new Sdk_qucikh5(), this.sdk_qucikh5.setSDK(), this.sdk_qucikh5.initParam(t), 
        this.sdk_qucikh5;
    }, t.prototype.init_FkylcH5 = function(t) {
        return this.sdk_fkylch5 = new Sdk_FkylcH5(), this.sdk_fkylch5.setSDK(), this.sdk_fkylch5.initParam(t), 
        this.sdk_fkylch5;
    }, t.prototype.init_AiwanH5 = function() {
        return this.sdk_aiwanh5 = new Sdk_AiWanH5(), this.sdk_aiwanh5.setSDK(), this.sdk_aiwanh5.initParam(null), 
        this.sdk_aiwanh5;
    }, t.prototype.init_8827wan = function(t) {
        return this.sdk_8827wan = new Sdk_8827wan(), this.sdk_8827wan.setSDK(), this.sdk_8827wan.initParam(t), 
        this.sdk_8827wan;
    }, t.prototype.init_siLangWX = function() {
        return this.sdk_silangWX = new Sdk_WxSiLang(), this.sdk_silangWX.setSDK(), this.sdk_silangWX.initParam(null), 
        this.sdk_silangWX;
    }, t.prototype.init_wxSmz = function() {
        return this.sdk_wxSmz = new Sdk_WxYyw(), this.sdk_wxSmz.setSDK(), this.sdk_wxSmz.initParam(null), 
        this.sdk_wxSmz;
    }, t.prototype.init_siLangH5 = function() {
        return this.sdk_silangH5 = new Sdk_H5SiLang(), this.sdk_silangH5.setSDK(), this.sdk_silangH5.initParam(null), 
        this.sdk_silangH5;
    }, t.prototype.init_pcQzone = function(t) {
        return this.sdk_pcQzoneSDK = new Sdk_PCQzone(), this.sdk_pcQzoneSDK.setSDK(), this.sdk_pcQzoneSDK.initParam(t), 
        this.sdk_pcQzoneSDK;
    }, t.prototype.init_qqWanba = function(t) {
        return this.sdk_qqWanbaSDK = new Sdk_QQWanba(), this.sdk_qqWanbaSDK.setSDK(), this.sdk_qqWanbaSDK.initWebURLParam(t), 
        this.sdk_qqWanbaSDK;
    }, t.prototype.init_wxGame = function(t) {
        return this.sdk_wxGame = new Sdk_WX_Game(), this.sdk_wxGame.setSDK(t), this.sdk_wxGame;
    }, t.prototype.init_wxGame_huoshu = function(t) {
        return this.sdk_wxGame_huo = new Sdk_WX_Huoshu_Game(), this.sdk_wxGame_huo.setSDK(t), 
        this.sdk_wxGame_huo;
    }, t.prototype.init_wxGame_xhy = function(t) {
        return this.sdk_wx_xhy = new Sdk_WX_XingHeYue_Game(), this.sdk_wx_xhy.setSDK(t), 
        this.sdk_wx_xhy;
    }, t.prototype.init_wxGame_fxm = function(t) {
        return this.sdk_wx_fxm = new Sdk_WX_FXM_Game(), this.sdk_wx_fxm.setSDK(t), this.sdk_wx_fxm;
    }, t.prototype.init_wxGame_gujian = function(t) {
        return this.sdk_wxGame_gj = new Sdk_WX_Gujian_Game(), this.sdk_wxGame_gj.setSDK(t), 
        this.sdk_wxGame_gj;
    }, t.prototype.init_qqGame_gujian = function(t) {
        return this.sdk_qqGame_gj = new Sdk_QQ_Gujian_Game(), this.sdk_qqGame_gj.setSDK(t), 
        this.sdk_qqGame_gj;
    }, t.prototype.init_xiaomiQuickGamen = function(t) {
        return this.sdk_xm_quck = new Sdk_Xiaomi_Quick(), this.sdk_xm_quck.setSDK(t), this.sdk_xm_quck;
    }, t.prototype.init_oppoQuickGamen = function(t) {
        return this.sdk_oppo_quck = new Sdk_Oppo_Quick(), this.sdk_oppo_quck.setSDK(t), 
        this.sdk_oppo_quck;
    }, t.prototype.init_qiliGonghui = function(t) {
        return this.sdk_h5_qili = new Sdk_QiliGonghui(), this.sdk_h5_qili.setSDK(t), this.sdk_h5_qili;
    }, t.prototype.init_wdQy = function() {
        return this.sdk_wd_qy = new Sdk_WD_QY(), this.sdk_wd_qy.setSDK(null), this.sdk_wd_qy;
    }, t.prototype.init_wdChaoMeng = function() {
        return this.sdk_wd_cm = new Sdk_WD_ChaoMeng(), this.sdk_wd_cm.setSDK(null), this.sdk_wd_cm;
    }, t.prototype.init_wdHuoshu = function() {
        return this.sdk_wd_hs = new Sdk_WD_HS(), this.sdk_wd_hs.setSDK(null), this.sdk_wd_hs;
    }, t.prototype.init_xibangZhiwan = function() {
        return this.sdk_xibang_zhiwan = new Sdk_XibangZhiwan(), this.sdk_xibang_zhiwan.setSDK(null), 
        this.sdk_xibang_zhiwan;
    }, t.prototype.init_h5Shengye = function(t) {
        return this.sdk_h5_sy = new Sdk_H5Shengye(), this.sdk_h5_sy.setSDK(t), this.sdk_h5_sy;
    }, t.prototype.init_ucWebGame = function() {
        return this.sdk_ucweb = new Sdk_UC_WEBGAME(), this.sdk_ucweb.setSDK(), this.sdk_ucweb;
    }, t.prototype.init_wdQuick = function() {
        return this.sdk_wd_quick = new Sdk_WD_QUICK(), this.sdk_wd_quick.setSDK(null), this.sdk_wd_quick;
    }, t.prototype.getqucikh5 = function() {
        return this.sdk_qucikh5;
    }, t.prototype.getqucikWd = function() {
        return this.sdk_wd_quick;
    }, t.prototype.getXiaomiQuick = function() {
        return this.sdk_xm_quck;
    }, t.prototype.getOppoQuick = function() {
        return this.sdk_oppo_quck;
    }, t.prototype.getFkylcSDK = function() {
        return this.sdk_fkylch5;
    }, t.prototype.getWanbaSDK = function() {
        return this.sdk_qqWanbaSDK;
    }, t.prototype.getAiwanSDK = function() {
        return this.sdk_aiwanh5;
    }, t.prototype.getWxSiLangSDK = function() {
        return this.sdk_silangWX;
    }, t.prototype.getWxSzmSDK = function() {
        return this.sdk_wxSmz;
    }, t.prototype.isQuickHuaWei = function() {
        if (!this.sdk_wd_quick) return !1;
        var t = this.sdk_qucikh5.getValue();
        if (!t) return !1;
        var e = parseInt(t.channelId);
        return 24 == e || 4267 == e || 1073 == e ? !0 : !1;
    }, t.prototype.isSoeasySdk = function() {
        return window.gobj.soeasy_key && "" != window.gobj.soeasy_key;
    }, t.prototype.isUCWebGame = function() {
        return window.IS_UCWEB_GAME;
    }, t.prototype.isQuickSdk = function() {
        return window.gobj.quick_code && "" != window.gobj.quick_code;
    }, t.prototype.isWxSdk = function() {
        return window.wx && window.ISWEIXIN;
    }, t.prototype.isQQSdk = function() {
        return window.qq && window.ISQQGAME;
    }, t.prototype.isMiQuickSdk = function() {
        return window.IS_MI_QUICK;
    }, t.prototype.isOppoQuickSdk = function() {
        return window.IS_OPPO_QUICK;
    }, t.prototype.isWxSdkHuoshu = function() {
        return window.huoSdk && WindowData.GetHuoSdkAppID() > 0;
    }, t.prototype.isWxSdkXingHeYue = function() {
        return window.huoSdk && WindowData.GetXhySdkAppID() > 0;
    }, t.prototype.isWxFxm = function() {
        return window.xiyouSDK && window.WX_FEIXINGMAO;
    }, t.prototype.isWxSdkGujian = function() {
        return window.gujianSDK && "" != WindowData.GetGujianSdkWXAppID();
    }, t.prototype.isQQSdkGujian = function() {
        return window.gujianQQSDK && "" != WindowData.GetGujianSdkQQAppID();
    }, t.prototype.hasQQVideoAD = function() {
        return this.isQQSdkGujian() && window.videoAdUnitId;
    }, t.prototype.isWd = function() {
        return 3 == this.platformId || 2 == this.platformId || 6 == this.platformId || this.isXibangZhiwan() || this.isWdXingHeYue() || this.isWdDayan();
    }, t.prototype.isWdDayan = function() {
        return window.WD_DAYAN;
    }, t.prototype.isWdXingHeYue = function() {
        return window.WD_XINGHEYUE;
    }, t.prototype.isH5Shengye = function() {
        return 4 == this.platformId;
    }, t.prototype.isH5Qili = function() {
        return 5 == this.platformId;
    }, t.prototype.isXibangZhiwan = function() {
        return "xibang" == this.platform;
    }, t.prototype.isWdQuick = function() {
        return window.QUICK_WD_ANDROID;
    }, t.prototype.isFkylcH5 = function() {
        return window.FKYLC_H5;
    }, t.prototype.isAiwanH5 = function() {
        return window.AIWAN_H5;
    }, t.prototype.isWxSiLang = function() {
        return window.WX_SILANG;
    }, t.prototype.isH5SiLang = function() {
        return window.H5_SILANG;
    }, t.prototype.isPcQzone = function() {
        return window.PC_QZONE;
    }, t.prototype.isWanba = function() {
        return window.QQ_WANBA;
    }, t.prototype.isWxSmz = function() {
        return window.WX_YOUYI_SMZ;
    }, t.prototype.is8827wan = function() {
        return window.H5_8827wan;
    }, t.prototype.isChaoMeng = function() {
        return window.WD_CHAOMENG;
    }, t.prototype.isWdChaoMeng = function() {
        return window.WD_CHAOMENG_ANDROID;
    }, t.prototype.getWdHuoshuSDK = function() {
        return this.sdk_wd_hs;
    }, t.prototype.getPcQzoneSDK = function() {
        return this.sdk_pcQzoneSDK;
    }, t.prototype.getQzoneSDK = function() {
        return this.sdk_qqWanbaSDK;
    }, t.prototype.getUcWebSdk = function() {
        return this.sdk_ucweb;
    }, t.prototype.getXibangZhiwanSDK = function() {
        return this.sdk_xibang_zhiwan;
    }, t.prototype.checkRealNameAuth = function() {
        this.ischeckRealNameAuth || (this.ischeckRealNameAuth = !0, this.isFkylcH5() && this.sdk_fkylch5 && this.sdk_fkylch5.checkRealNameAuth());
    }, t.prototype.getSdkLoginToken = function() {
        var t = [];
        if (t.push(Global.sdk.platformId.toString()), this.isWdChaoMeng()) {
            var e = this.sdk_wd_cm.getValue();
            t.push("chaomeng"), t.push(e.userId), t.push(e.token), t.push("chaomeng");
        } else if (this.is8827wan()) {
            var e = this.sdk_8827wan.getValue();
            t.push("8827wan"), t.push(e.user_id), t.push(e.loginplatform2cp), t.push(e.game_appid), 
            t.push(e.email), t.push(e.channelExt), t.push("8827wan");
        } else if (this.isWxSmz()) {
            var e = this.sdk_wxSmz.getValue();
            t.push("youyi"), t.push(e.uid), t.push(e.timeStamp), t.push(e.sign), t.push("youyi");
        } else if (this.isWanba()) {
            var e = this.sdk_qqWanbaSDK.getValue();
            t.push("wanba"), t.push(e.appid), t.push(e.openid), t.push(e.openkey), t.push(e.pf), 
            t.push(e.getDevice());
        } else if (this.isPcQzone()) {
            var e = this.sdk_pcQzoneSDK.getValue();
            t.push("qqdt"), t.push(e.openid), t.push(e.pf), t.push(e.appid);
        } else if (this.isWxSiLang()) {
            var e = this.sdk_silangWX.getValue();
            t.push("silang"), t.push(e.app_id), t.push(e.userId), t.push(e.userToken), t.push(e.openId), 
            t.push(e.chUserId), t.push(e.unionId);
        } else if (this.isH5SiLang()) {
            var e = this.sdk_silangH5.getValue();
            t.push("silang"), t.push(e.gameId + ""), t.push(e.userId), t.push(e.userToken), 
            t.push("1"), t.push(e.chUserId), t.push("1");
        } else if (this.isAiwanH5()) {
            var e = this.sdk_aiwanh5.getValue();
            t.push("aiwan"), t.push(e.cp_mem_id), t.push(e.cp_user_token), t.push("aiwan");
        } else if (this.isFkylcH5()) {
            var e = this.sdk_fkylch5.getValue();
            t.push("fengkuang"), t.push(e.userId), t.push(e.channel);
        } else if (this.isWdQuick()) {
            var e = this.sdk_wd_quick.getValue();
            t.push("quick"), t.push(e.channelId), t.push(e.uid), t.push(e.username), t.push("##"), 
            t.push("##"), t.push(e.token);
        } else if (this.isUCWebGame()) {
            var o = this.getUcWebSdk().getValue();
            t.push("ucshengye"), t.push(o.code), t.push(o.guestid);
        } else if (this.isH5Shengye()) {
            t.push("shengye");
            var e = this.sdk_h5_sy.getValue();
            t.push(e.openid), t.push(e.channel_id);
        } else if (this.isH5Qili()) {
            t.push("qili");
            var e = this.sdk_h5_qili.getValue();
            t.push(e.uid), t.push(e.access_token);
        } else if (this.isSoeasySdk()) {
            t.push("soeasy");
            var e = this.sdk_soEasy.getValue();
            console.info("sdk_soEasy:" + JSON.stringify(e)), t.push(e.t), t.push(e.uid), t.push(e.sign), 
            t.push(e.channel);
        } else if (this.isQuickSdk()) {
            var e = this.sdk_qucikh5.getValue();
            console.info("sdk_qucikh5:" + JSON.stringify(e)), t.push("quick"), t.push(e.channelId), 
            t.push(e.uid), t.push(e.username), t.push("##"), t.push("##"), t.push(e.token);
        } else if (this.isMiQuickSdk()) {
            t.push("fengmi");
            var i = this.getXiaomiQuick().getValue();
            t.push(i.appId), t.push(i.appAccountId + ""), t.push(i.channel), t.push(i.session);
        } else if (this.isOppoQuickSdk()) {
            t.push(window.oppo_channel || "fengmi");
            var n = this.getOppoQuick().getValue();
            t.push(n.token), t.push(n.packName), t.push(n.channel);
        } else if (this.isQQSdk()) {
            var r, s = window.__qqConfig, a = void 0, h = void 0;
            if (s && s.accountInfo && (a = s.accountInfo.appId, r = s.accountInfo.nickname), 
            s && s.platform && (h = s.platform), this.isQQSdkGujian()) {
                var e = Global.sdk.getQQGujianSdk().getValue(), p = window.CNAME_SCENE_ARR;
                t.push("gujian"), t.push(WindowData.GetGujianSdkQQAppID() + "");
                var d = "android";
                "android" != Global.wx.wxos && (d = "ios"), t.push(e.openId + "_" + d), p && -1 != p.indexOf(e.scene + "") ? t.push(e.scene + "") : t.push(e.cname);
            }
            a && r && (t.push(a), t.push(r), t.push(h));
        } else if (this.isWxSdk()) {
            var l, s = window.__wxConfig, a = void 0, h = void 0;
            if (s && s.accountInfo && (a = s.accountInfo.appId, l = s.accountInfo.nickname), 
            s && s.platform && (h = s.platform), this.isWxFxm()) {
                t.push("feixingmao");
                var e = this.sdk_wx_fxm.getValue();
                t.push(e.OpenId), t.push(e.Channel), t.push(e.ChannelFromid), t.push(e.uid);
            } else if (this.isWxSdkXingHeYue()) {
                t.push("xingheyue");
                var e = Global.sdk.getWxXhySdk().getValue();
                t.push(WindowData.GetXhySdkAppID() + ""), t.push(e.loginData.mem_id), t.push(e.loginData.user_token), 
                t.push(""), t.push(e.channel);
            } else if (this.isWxSdkHuoshu()) {
                t.push("huoshu");
                var e = Global.sdk.getWxHuoshuSdk().getValue();
                t.push(WindowData.GetHuoSdkAppID() + ""), t.push(e.loginData.mem_id), t.push(e.loginData.user_token), 
                t.push(e.loginData.openid), t.push(e.channel);
            } else if (this.isWxSdkGujian()) {
                t.push("gujian");
                var e = Global.sdk.getWxGujianSdk().getValue();
                t.push(WindowData.GetGujianSdkWXAppID() + ""), t.push(e.openId), t.push(e.channel);
            } else t.push("weixin"), t.push(Global.sdk.GetWxVO().wxcode), t.push(Global.sdk.GetWxChannel()), 
            t.push(Global.sdk.GetWxFromId()), t.push(window.APPID ? window.APPID : "");
            a && l && (t.push(a), t.push(l), t.push(h));
        } else if (this.isWd()) {
            var u = this.getWdSdk().getValue();
            this.isWdXingHeYue() ? (t.push("hswd"), t.push(u.userId), t.push(u.sign), t.push("hswd")) : this.isWdDayan() ? (t.push("dayan"), 
            t.push(u.userId), t.push(u.gameid), t.push(u.sign), t.push("dayan")) : this.isXibangZhiwan() ? (t.push("xibang"), 
            t.push(u.userName), t.push(u.token), t.push(u.uid)) : 3 == this.platformId ? (console.info("[微端][h5][rspLogin>>>]:" + JSON.stringify(u)), 
            t.push("qianyou"), t.push(u.userId), t.push(u.platfortUserId), t.push(u.platfromId), 
            t.push(""), t.push(u.timestamp), t.push(u.sign), console.info("[微端]发送给服务器参数" + t.join(" "))) : 2 == this.platformId && (t.push("hswd"), 
            t.push(u.userId), t.push(u.sign), t.push("hswd"));
        }
        return console.info("getSdkLoginToken:" + t), t.join(" ");
    }, t.prototype.init_soEasy = function(t) {
        return this.sdk_soEasy = new Sdk_SoEasy(), this.sdk_soEasy.setSDK(null), this.sdk_soEasy.initParam(t), 
        this.sdk_soEasy;
    }, t.prototype.GetWxVO = function() {
        return this.sdk_wxGame.getValue();
    }, t.prototype.GetWxChannel = function() {
        return this.sdk_wxGame.getValue().cname;
    }, t.prototype.GetWxFromId = function() {
        return this.sdk_wxGame.getValue().fromid;
    }, t.prototype.getPayOS = function() {
        return 0;
    }, t.prototype.pay = function(t) {
        this.hasSdk() && this.currSdk.pay(t);
    }, t.prototype.hasFollow = function() {
        return this.hasSdk() ? this.currSdk.hasFollow() : !1;
    }, t.prototype.onFollow = function(t) {
        this.hasSdk() && this.currSdk.onFollow(t);
    }, t.prototype.onVerify = function(t) {
        this.hasSdk() && this.isSoeasySdk() && this.getSoEasySdk().onVerify();
    }, t.prototype.onBindPhone = function(t) {
        this.hasSdk() && this.isSoeasySdk() && this.getSoEasySdk().onBindPhone();
    }, t.prototype.setFollowCallBack = function(t, e) {
        this.hasSdk() && this.currSdk.setFollowCallBack(t, e);
    }, t.prototype.hasShare = function() {
        return this.hasSdk() ? this.currSdk.hasShare() : 0;
    }, t.prototype.onShare = function(t) {
        return this.hasSdk() ? this.currSdk.onShare(t) : void 0;
    }, t.prototype.setShareCallBack = function(t, e) {
        this.hasSdk() && this.currSdk.setShareCallBack(t, e);
    }, t.prototype.hasShortcut = function() {
        return this.hasSdk() ? this.currSdk.hasShortcut() : !1;
    }, t.prototype.onShortcut = function() {
        this.hasSdk() && this.currSdk.hasShortcut() && this.currSdk.onShortcut(null);
    }, t.prototype.hasInvite = function() {
        return this.hasSdk() ? this.currSdk.hasInvite() : !1;
    }, t.prototype.onInvite = function(t) {
        this.hasSdk() && this.currSdk.hasInvite() && this.currSdk.onInvite(t);
    }, t.prototype.get_vip_level = function(t, e) {
        this.hasSdk() && this.currSdk instanceof Sdk_SoEasy && this.currSdk.get_vip_level(t, e);
    }, t.prototype.gift_exchange2 = function(t, e, o) {
        this.hasSdk() && this.currSdk instanceof Sdk_SoEasy && this.currSdk.gift_exchange2(t, e, o);
    }, t.prototype.gmData = function() {
        return this.hasSdk() ? this.currSdk.gmData() : {};
    }, t.prototype.getChannel = function() {
        return this.isWdChaoMeng() ? "chaomeng" : this.isWxSmz() ? "youyi" : this.is8827wan() ? "8827wan" : this.isH5SiLang() ? "silang" : this.isWxSiLang() ? "silang" : this.isSoeasySdk() ? this.sdk_soEasy.getValue().channel.toString() : this.isQQSdk() ? Global.sdk.isQQSdkGujian() ? this.sdk_qqGame_gj.getValue().cname : "qq" : this.isWxSdk() ? Global.sdk.isWxFxm() ? this.sdk_wx_fxm.getValue().Channel : Global.sdk.isWxSdkXingHeYue() ? this.sdk_wx_xhy.getValue().cname : Global.sdk.isWxSdkHuoshu() ? this.sdk_wxGame_huo.getValue().cname : Global.sdk.isWxSdkGujian() ? this.sdk_wxGame_gj.getValue().cname : this.sdk_wxGame.getValue().cname : this.isMiQuickSdk() ? "xiaomi" : this.isOppoQuickSdk() ? this.sdk_oppo_quck.getValue().channel : "local";
    }, t.prototype.enterGame = function() {
        this.hasSdk() && this.currSdk.enterGame();
    }, t.prototype.upLevel = function() {
        this.hasSdk() && this.currSdk.upLevel();
    }, t.prototype.selectServer = function() {
        this.hasSdk() && this.currSdk.selectServer();
    }, t.prototype.createRole = function() {
        this.hasSdk() && this.currSdk.createRole();
    }, t.prototype.getSoEasyValue = function() {
        return this.sdk_soEasy ? this.sdk_soEasy.getValue() : null;
    }, t.prototype.getSoEasySdk = function() {
        return this.sdk_soEasy;
    }, t.prototype.getWdSdk = function() {
        return this.currSdk;
    }, t.prototype.getWxHuoshuSdk = function() {
        return this.sdk_wxGame_huo;
    }, t.prototype.getWxXhySdk = function() {
        return this.sdk_wx_xhy;
    }, t.prototype.getWxGujianSdk = function() {
        return this.sdk_wxGame_gj;
    }, t.prototype.getQQGujianSdk = function() {
        return this.sdk_qqGame_gj;
    }, t.prototype.hasCheckMsg = function() {
        return this.currSdk && this.currSdk.hasCheckMsg();
    }, t.prototype.checkMsg = function(t, e, o) {
        this.currSdk.checkMsg(t, e, o);
    }, t.prototype.getDeviceInfo = function() {
        return this.currSdk ? this.currSdk.getDeviceInfo() : null;
    }, t;
}();

__reflect(SdkMgr.prototype, "SdkMgr");

var Sdk_SoEasy = function() {
    function t() {
        this.shareImageURL = "http://127.0.0.1/client/Icon-144.png";
    }
    return t.prototype.setSDK = function(t) {
        this.v = new PlatformVOSoEasy(), this.v.seceret_key = Global.sdk.GetSoeasyKey(), 
        window.mqq && window.mqq.invoke && (console.log("set setOnAddShortcutHandler"), 
        window.mqq.invoke("ui", "setOnAddShortcutHandler", {
            callback: window.mqq.callback(this.addShortcut.bind(this), !1, !0)
        })), console.log("setSDK", this.v.seceret_key);
    }, t.prototype.initWebURLParam = function(t) {
        var e = window.OPEN_DATA;
        null != e && (this.v.platform = e.platform, 1 != this.v.platform && 2 != this.v.platform && (this.v.platform = 1)), 
        t && t.GIFT && (this.v.giftId = parseInt(t.GIFT), console.info("====玩吧礼包:", this.v.giftId)), 
        console.info("====initWebURLParam:", t);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.isWeb = function() {
        return "android" != window.zmChannelType;
    }, t.prototype.initParam = function(t) {
        if (!this.v.init) {
            var e = window.gobj;
            if (e && e.soEasyInfo) {
                this.sdk = window.ZmSdk.getInstance();
                var o = e.soEasyInfo.common;
                o && (this.v.sdkindx = o.sdkindx, this.v.sdkname = o.sdkname ? o.sdkname : "", this.v.channel = o.channel ? o.channel : "", 
                "" == this.v.channel && (this.v.channel = "soeasy_" + this.v.sdkindx));
                var i = e.soEasyInfo.userdata;
                i && (this.v.uid = i.uid, this.v.name = i.name, this.v.sex = i.sex, this.v.t = i.t, 
                this.v.sign = i.sign);
                var n = i.isSubscribe;
                1 == n || "true" == n ? this.v.isSubscribe = !0 : this.v.isSubscribe = !1, this.isWeb() && this.isSupportMethod("setShareInfo"), 
                this.v.init = !0, console.log("initParam", JSON.stringify(this.v));
            }
            this.initWebURLParam(t);
        }
    }, t.prototype.getDeviceInfo = function() {
        if (!this.deviceInfo && this.sdk.isSupportMethod("getDeviceInfo")) {
            var t = this.sdk.getDeviceInfo();
            t && null != t.imei && (this.deviceInfo = {}, this.deviceInfo.imei = t.imei, this.deviceInfo.imsi = t.imsi ? t.imsi : "", 
            this.deviceInfo.height = t.height ? parseInt(t.height) : 0, this.deviceInfo.width = t.width ? parseInt(t.width) : 0, 
            this.deviceInfo.phonemodel = t.phonemodel ? t.phonemodel : "", this.deviceInfo.systemver = t.systemver ? t.systemver : "", 
            this.deviceInfo.systemver = t.systemver ? t.systemver : "", this.deviceInfo.screendensity = t.screendensity ? t.screendensity : "", 
            this.deviceInfo.dpi = t.dpi ? t.dpi : "");
        }
        return this.deviceInfo;
    }, t.prototype.pay = function(t) {
        if (!this.sdk.isSupportMethod("pay")) return void console.error("sdk没有pay方法");
        var e = {}, o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        e.extradata = o.join("|"), e.fee = (100 * t.amount).toString();
        var i = 10 * t.amount;
        e.feeid = i.toString(), e.feename = t.desc, e.serverid = t.userServer, e.rolename = t.userRoleName, 
        e.roleid = t.userRoleId, e.servername = t.userServer, e.check = I_md5.hex_md5(e.fee + e.feeid + this.v.seceret_key), 
        console.info("支付参数:" + JSON.stringify(e)), this.sdk.pay(e, function(t) {
            console.info("支付回调：" + JSON.stringify(t), !1), 0 == t.retcode ? console.info("充值成功:", JSON.stringify(t)) : 2 == t.retcode ? console.error("充值失败1:", JSON.stringify(t)) : console.error("充值失败2:", JSON.stringify(t));
        });
        var n = {};
        n.type = "gift", n.name = t.desc, n.id = t.payItemId + "", n.num = 1, n.rmbType = "¥", 
        n.payType = "wechat", n.succeed = !0, n.rmb = t.amount, SdkMgr.callAndroid("reqReportPay", JSON.stringify(n));
    }, t.prototype.hasFollow = function() {
        return this.isWeb() && this.isSupportMethod("showQRCode") ? !0 : !1;
    }, t.prototype.onFollow = function(t) {
        if (this.isSupportMethod("showQRCode")) {
            var e = !0;
            Global.sdk.isSoeasySdk() && (e = !1), this.sdk.showQRCode("", function(t) {}), Common.timer.remove(this.checkFollow, this), 
            Common.timer.doTimer(500, 30, this.checkFollow, this);
        }
    }, t.prototype.checkFollow = function() {}, t.prototype.isVerify = function() {
        return window.AWY_SDK ? (console.info("isVerify", window.AWY_SDK.getURLVar("wallow"), window.AWY_SDK.getURLVar("verify")), 
        !0) : !1;
    }, t.prototype.onVerify = function() {
        !window.AWY_SDK;
    }, t.prototype.isBindPhone = function(t, e) {
        !window.AWY_SDK;
    }, t.prototype.getBindPhoneState = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [ 2, new Promise(function(t, e) {
                    window.AWY_SDK.checkBindPhone(function(e) {
                        t(e.error);
                    });
                }) ];
            });
        });
    }, t.prototype.onBindPhone = function() {
        !window.AWY_SDK;
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return Global.sdk.isWanba();
    }, t.prototype.onShortcut = function() {
        this.addShortcut();
    }, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.hasShare = function() {
        if (this.isWeb()) {
            if (this.isSupportMethod("share")) return 1;
            if (this.isSupportMethod("setShareInfo")) return 2;
        }
        return 0;
    }, t.prototype.onShare = function(t) {
        !this.isSupportMethod("share");
    }, t.prototype.setShareCallBack = function(t, e) {}, t.prototype.gmData = function() {
        return this.gmDataObj;
    }, t.prototype.spChangeAccount = function() {
        this.isSupportMethod("spChangeAccount") && this.sdk.spChangeAccount();
    }, t.prototype.isSupportMethod = function(t) {
        return this.sdk.isSupportMethod(t);
    }, t.prototype.createRole = function() {
        if (this.sdk.isSupportMethod("reportRoleStatus")) {
            var t = Global.base, e = {};
            e.datatype = "2", e.serverid = t.serverId, e.servername = e.serverid, e.roleid = t.playerId, 
            e.rolename = t.playerName, e.rolelevel = t._level, e.moneynum = t._gold, e.gender = t.sex, 
            e.fightvalue = t.power, e.vip = t.vipLv, e.profession = t.job, e.power = t.power, 
            e.coin1 = t._yb, e.coin2 = t._byb, console.info("createRole:obj=", e), this.sdk.reportRoleStatus(e);
            var o = {};
            o.serverid = t.serverId, o.rolename = t.playerName, o.roleid = t.playerId, SdkMgr.callAndroid("reqReportCreateRole", JSON.stringify(o));
        }
    }, t.prototype.enterGame = function() {
        if (this.sdk.isSupportMethod("reportRoleStatus")) {
            var t = Global.base, e = {};
            e.datatype = "3", e.serverid = t.serverId, e.servername = e.serverid, e.roleid = t.playerId, 
            e.rolename = t.playerName, e.rolelevel = t._level, e.moneynum = t._gold, e.gender = t.sex, 
            e.fightvalue = t.power, e.vip = t.vipLv, e.profession = t.job, e.power = t.power, 
            e.coin1 = t._yb, e.coin2 = t._byb, console.info("enterGame:obj=", e), this.sdk.reportRoleStatus(e);
            var o = {};
            o.serverid = t.serverId, o.rolename = t.playerName, o.roleid = t.playerId, SdkMgr.callAndroid("reqReportEnterGame", JSON.stringify(o));
        }
    }, t.prototype.upLevel = function() {
        if (this.sdk.isSupportMethod("reportRoleStatus")) {
            var t = Global.base, e = {};
            e.datatype = "4", e.serverid = t.serverId, e.servername = e.serverid, e.roleid = t.playerId, 
            e.rolename = t.playerName, e.rolelevel = t._level, e.moneynum = t._gold, e.gender = t.sex, 
            e.fightvalue = t.power, e.vip = t.vipLv, e.profession = t.job, e.power = t.power, 
            e.coin1 = t._yb, e.coin2 = t._byb, console.info("upLevel:obj=", e), this.sdk.reportRoleStatus(e);
        }
    }, t.prototype.selectServer = function() {
        if (this.sdk.isSupportMethod("reportRoleStatus")) {
            var t = Global.base, e = {};
            e.datatype = "1", e.serverid = t.serverId, e.servername = e.serverid, console.info("selectServer:obj=", e), 
            this.sdk.reportRoleStatus(e);
        }
    }, t.prototype.ready = function(t) {}, t.prototype.addShortcut = function() {
        if (this.sdk) {
            console.log("创建桌面addShortcut");
            var t = "", e = window.OPEN_DATA;
            null != e && (t = e.jumpurl), console.log("创建桌面1:" + t);
        }
    }, t.prototype.get_vip_level = function(t, e) {
        this.isSupportMethod("get_vip_level") && this.sdk.get_vip_level(null, function(o) {
            console.log("===get_vip_level", o), o.result && o.result.userdata && o.result.userdata.data && t.call(e, o.result.userdata.data);
        });
    }, t.prototype.gift_exchange2 = function(t, e, o) {
        this.isSupportMethod("gift_exchange2") && this.sdk.gift_exchange2(t, function(i) {
            console.log("===gift_exchange2", t.GIFT, i), i.result && i.result.userdata && i.result.userdata.data && e.call(o, i.result.userdata.data);
        });
    }, t;
}();

__reflect(Sdk_SoEasy.prototype, "Sdk_SoEasy", [ "ISdk" ]);

var Sdk_qucikh5 = function() {
    function t() {
        this.productCode = "", this.productKey = "";
    }
    return t.prototype.setSDK = function() {
        var t = Global.sdk.GetQuickKey();
        this.productCode = t[0], this.productKey = t[1], console.info("初始化QuickSDKinit:" + this.productCode + " == " + this.productKey), 
        this.sdk = window.QuickSDK, this.gmSDK = {}, this.v = new Platformqucikh5(), this.sdk.setSwitchAccountNotification(function(t) {
            Global.reload();
        }), this.sdk.setLogoutNotification(function(t) {
            Global.reload();
        }), this.initLogin();
    }, t.prototype.initLogin = function() {
        this.sdk.init(this.productCode, this.productKey, !0, function() {
            Global.sdk.getqucikh5().loginquickh5();
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.loginquickh5 = function() {
        var t = this;
        this.sdk.login(function(e) {
            if (console.info("============loginquickh5:" + JSON.stringify(e)), e.status) {
                var o = e.data;
                t.v.uid = o.uid, t.v.token = o.token, t.v.username = o.username, t.v.isLogin = o.isLogin, 
                t.v.channelId = o.channelId, t.v.message = o.message, Global.main.InitLogin();
            } else console.error("!!! QuickSDK登录失败:" + JSON.stringify(o)), SdkLoginUI.showLoginUI();
        }), console.info("loginquickh5");
    }, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        t.cpOrderNo = e.join("|"), t.extrasParams = t.cpOrderNo, t.productCode = this.productCode, 
        t.uid = this.v.uid, t.username = this.v.username, t.callbackUrl || (t.callbackUrl = ""), 
        console.info("支付数据：" + JSON.stringify(t)), this.sdk.pay(JSON.stringify(t), function(e) {
            e.status ? console.info("下单成功:", JSON.stringify(t), JSON.stringify(e)) : console.error("下单失败:", JSON.stringify(t), JSON.stringify(e));
        });
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 0;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.reportInfo(2);
    }, t.prototype.enterGame = function() {
        this.reportInfo(1);
    }, t.prototype.upLevel = function() {
        this.reportInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.reportInfo = function(t) {
        var e = Global.base, o = 0;
        if (e.power) {
            var i = parseInt(e.power);
            i && i > 0 && (o = i);
        }
        var n = e._guildName && "" != e._guildName ? e._guildName : "无", r = {
            isCreateRole: 2 == t,
            roleCreateTime: new Date().getTime() / 1e3,
            uid: this.v.uid,
            username: this.v.username,
            serverId: e.serverId,
            serverName: e.serverId,
            userRoleId: e.playerId,
            userRoleName: e.playerName,
            userRoleBalance: e._yb,
            vipLevel: e.vipLv,
            partyName: n,
            partyId: e._guildId,
            userRoleLevel: e._level,
            gameRolePower: o
        };
        this.sdk.uploadGameRoleInfo(JSON.stringify(r), function(t) {
            t.status ? console.info("uploadGameRoleInfo ok") : console.info("uploadGameRoleInfo error:", t.message);
        });
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_qucikh5.prototype, "Sdk_qucikh5", [ "ISdk" ]);

var Sdk_WX_Game = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        if (this.sdk = Global.wx, this.v = new PlatformWxGameVO(), this.v.cname = "weixin", 
        t) {
            if (t.p1 && "ios" == t.p1 && "android" != Global.wx.wxos) {
                var e = new eui.Image("logo/share/ios.jpg");
                e.top = e.bottom = e.left = e.right = 0;
                var o = window.LayerMgr;
                o && o.guide.addChild(e), window.ISBLOACK = !0, console.info("IOS禁止访问:", t);
            }
            this.v.cname = t.cname ? t.cname : "weixin", this.v.fromid = t.fromid ? t.fromid : "", 
            t.fromid && console.info("通过分享者Id进入:" + t.fromid);
        }
        var i = !1;
        0 == this.v.cname.indexOf("SY_") && (i = !0, console.info("忽略渠道Appid:", this.v.cname, Global.wx.refAppid)), 
        i || (this.v.cname += Global.wx.refAppid), console.info("初始渠道为:" + this.v.cname, t, Global.wx.wxos);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = window.APPID ? window.APPID : "", o = Global.sdk.GetWxVO().openId;
        console.info("开始充值:", JSON.stringify(t));
        var i = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, o, t.amount ], n = encodeURI(i.join("|")), r = "channel=" + this.v.cname + "&openid=" + o + "&total_fee=" + 100 * t.amount + "&ip=" + Global.wx.clientIp + "&ext=" + n + "&appid=" + e;
        if (console.info("支付参数:" + r, o, Global.wx.flagTime), "" == e && "android" == Global.wx.wxos && !window.gobj.isAndroidKefuPay) return void Global.wxProxy.pay(t.goodsId, Global.base.playerId);
        if (window.gobj.isStopKefuJump) return void console.info("停止客服消息跳转");
        var s = Base64.encode(r);
        return window.gobj && window.gobj.miniUrl ? void window.wx.previewImage({
            urls: [ window.gobj.miniUrl + s ]
        }) : void (window.gobj.prePayMsg && "" != window.gobj.prePayMsg ? window.wx.showModal({
            title: "温馨提示",
            content: window.gobj.prePayMsg,
            success: function(t) {
                t.confirm && (console.log("用户点击确定"), Global.wx.openCustomerServiceConversation(r));
            }
        }) : Global.wx.openCustomerServiceConversation(r));
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        console.info("weixin 每日炫耀"), Global.wx.onShareApp(!0), null != this.shareCb && this.shareCb.apply(this.shareCbThis);
    }, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.onUserInfo(!0);
    }, t.prototype.onUserInfo = function(t) {}, t.prototype.enterGame = function() {}, 
    t.prototype.ready = function(t) {}, t.prototype.roleUpLevel = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {}, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().openId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t;
}();

__reflect(Sdk_WX_Game.prototype, "Sdk_WX_Game", [ "ISdk" ]);

var Sdk_WX_Huoshu_Game = function() {
    function t() {
        this.findPayArr = [];
    }
    return t.prototype.setSDK = function(t) {
        this.sdk = window.huoSdk, this.v = new PlatformWxHuoSDKVO(), this.v.channel = "huoshu", 
        this.v.cname = "huoshu", Common.timer.doTimer(1e3, 0, this.findPay, this);
    }, t.prototype.checkMsg = function(e, o, i) {
        this.sdk.checkMsg({
            data: {
                content: e
            }
        }).then(function(e) {
            console.info("敏感字检查：", e.msg == t.success), o.apply(i, [ e.msg == t.success ]);
        }, function(t) {
            o.apply(i, [ !1 ]), console.info("敏感字检查：false");
        });
    }, t.prototype.login = function(e, o) {
        var i = this, n = Global.wx.getLaunchOptionsSync(), r = this.sdk, s = this.v;
        console.log("[火树sdk][init]发送参数：app_id:", WindowData.GetHuoSdkAppID(), " mp_id:", WindowData.GetHuoSdkWXAppID()), 
        r.init({
            app_id: WindowData.GetHuoSdkAppID(),
            mp_id: WindowData.GetHuoSdkWXAppID()
        }).then(function(a) {
            if (a.msg == t.fail) return void console.log("[火树sdk][init]:失败");
            console.log("[火树sdk][init]:", a);
            var h = {
                state: n.query ? n.query.state || n.query.scene || "" : ""
            };
            console.log("[火树sdk][login]:发送参数：", h), r.login({
                data: h
            }).then(function(n) {
                return n.msg != t.success ? void console.log("[火树sdk][login]:失败", n) : (console.log("[火树sdk][login]:", n), 
                s.loginData = n.data, s.openId || (s.openId = "o91YR5c3qn4iwYxwqfb5K_L8xZ7c"), e.apply(o), 
                void i.shareHuoSdk());
            });
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        this.payHuoSdk(t);
    }, t.prototype.payHuoSdk = function(e) {
        var o = this, i = [ e.userRoleId, e.userRoleName, Math.floor(new Date().getTime() / 1e3), e.userServer, e.goodsId, this.v.openId, e.amount ], n = i.join("|"), r = {
            "order-currency": "CNY",
            "order-cp_order_id": e.cpOrderNo,
            "order-product_price": parseInt(e.amount),
            "order-product_id": e.goodsId,
            "order-product_cnt": parseInt(e.count),
            "order-product_name": e.subject,
            "order-product_desc": e.desc,
            "order-ext": n,
            "role-event": "",
            "role-server_id": Global.base.serverId,
            "role-server_name": Global.base.serverId + "服",
            "role-role_id": e.userRoleId,
            "role-role_name": e.userRoleName,
            "role-role_level": parseInt(e.userLevel),
            "role-role_vip": parseInt(e.vipLevel)
        };
        console.log("[火树sdk][checkPay] 发送参数:", r), this.sdk.checkPay({
            data: r
        }).then(function(e) {
            if (e.msg != t.success) console.log("[火树sdk][checkPay] 失败:", e); else {
                console.log("[火树sdk][checkPay] 成功:", e), e.data && e.data.order_id && o.findPayArr.push({
                    id: e.data.order_id,
                    num: 0,
                    time: -2e5
                });
                var i = e.poster_img;
                if (!i && e.data && (i = e.data.poster_img), i) {
                    var n = window.wx;
                    n.previewImage({
                        urls: [ i ]
                    }), o.hideLoading();
                } else if (e.data.image && "2" == e.data.pay_type) {
                    o.hideLoading();
                    var n = window.wx;
                    n.previewImage({
                        urls: [ e.data.image ]
                    });
                }
            }
        });
    }, t.prototype.__mergeImg = function(t) {
        var e = window.wx, o = this, i = e.getSystemInfoSync(), n = i.windowWidth, r = i.windowHeight;
        e.showLoading({
            title: "支付中"
        }), e.downloadFile({
            url: "https://huihecdn.h5gamecdn.club/wxjson/mini/paybg.jpg",
            success: function(i) {
                this.mergeCanvas || (this.mergeCanvas = e.createCanvas("shareCanvas"));
                var s = this.mergeCanvas, a = s.getContext("2d");
                a.fillRect(0, 0, n, r), a.fillStyle = "#2DAB5A";
                var h = e.createImage();
                h.src = i.tempFilePath, h.onload = function() {
                    a.fillRect(0, 0, n, r), a.drawImage(h, n - h.width >> 1, r - h.height >> 1, h.width, h.height);
                    var i = e.createImage();
                    i.src = t, i.onload = function() {
                        var t = 320, h = Math.floor(t / i.width * i.height);
                        a.drawImage(i, n - t >> 1, (r - h >> 1) - 20, t, h), s.toTempFilePath({
                            success: function(t) {
                                var i = t.tempFilePath;
                                e.previewImage({
                                    urls: [ i ]
                                }), o.hideLoading(), a.clearRect(0, 0, n, r);
                            },
                            fail: function(t) {
                                o.hideLoading(), a.clearRect(0, 0, n, r);
                            }
                        });
                    }, i.onerror = function() {
                        o.hideLoading();
                    };
                }, h.onerror = function() {
                    o.hideLoading();
                };
            },
            fail: function(t) {
                o.hideLoading();
            }
        });
    }, t.prototype.hideLoading = function() {
        window.wx.hideLoading();
    }, t.prototype.findPay = function() {
        for (var t, e = function(e) {
            var i = o.findPayArr[e];
            egret.getTimer() - i.time > 4e3 && (i.num >= 20 && (i.del = !0), i.num++, i.time = egret.getTimer(), 
            console.info("[火速sdk]查询订单：", i.id), o.sdk.mpPayQuery({
                data: {
                    "order-order_id": i.id
                },
                conf: {
                    showLoading: !1
                }
            }).then(function(t) {
                !t.data || 3 != t.data.status && 2 != t.data.cp_status || (i.del = !0);
            })), i.del && (o.findPayArr.splice(e, 1), e--), t = e;
        }, o = this, i = 0; i < this.findPayArr.length; i++) e(i), i = t;
    }, t.prototype.updateRole = function(t) {
        var e = {
            "role-event": t,
            "role-server_id": Global.base.serverId,
            "role-server_name": Global.base.serverId + "服",
            "role-role_id": Global.base.playerId,
            "role-role_name": Global.base.playerName,
            "role-role_level": parseInt(Global.base._level),
            "role-role_vip": parseInt(Global.base.vipLv),
            "role-combat_num": parseInt(Global.base.power),
            "role-onlineTime": 0,
            "role-scene": "",
            "role-axis": ""
        };
        console.log("[火树sdk][数据上报] 发送参数:", e), this.sdk.updateRole({
            data: e
        }).then(function(e) {
            console.log("[火树sdk]数据上报成功>", t);
        }, function(e) {
            console.log("[火树sdk]数据上报失败>", t);
        });
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        this.shareObj ? (window.wx.shareAppMessage({
            title: this.shareObj.title,
            imageUrl: this.shareObj.image,
            query: "state=" + this.shareObj.state
        }), this.addShareInfo()) : Global.wx.onShareApp(!0), null != this.shareCb && this.shareCb.apply(this.shareCbThis);
    }, t.prototype.shareHuoSdk = function() {
        var e = this.sdk, o = this;
        e.getShareInfo({
            data: {
                path: window.__CONFIG__.__RES_URL__ + "share/"
            }
        }).then(function(e) {
            o.shareObj = e.data, console.log("[火树sdk][getShareInfo]注册分享:", e), e.msg == t.success ? (window.wx.onShareAppMessage(function() {
                return o.addShareInfo(), console.log("[火树sdk][分享]:", e), {
                    title: e.data.title,
                    imageUrl: e.data.image,
                    query: "state=" + e.data.state
                };
            }), window.wx.showShareMenu()) : Global.wx.initShareMenu();
        });
    }, t.prototype.addShareInfo = function() {
        this.sdk.addShareInfo({
            data: {
                to_target: "wx"
            }
        }), console.log("[火树sdk]分享上报");
    }, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole("create");
    }, t.prototype.enterGame = function() {
        this.updateRole("online");
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole("levelup");
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().openId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.success = "success", t.fail = "fail", t;
}();

__reflect(Sdk_WX_Huoshu_Game.prototype, "Sdk_WX_Huoshu_Game", [ "ISdk" ]);

var Sdk_WX_Gujian_Game = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.sdk = window.gujianSDK, this.v = new PlatformWxGujianSDKVO(), this.v.channel = "gujian", 
        this.v.cname = "gujian", this.sswlSdk = window.sswlSdk;
    }, t.prototype.setOnShow = function(t) {
        this.sdk.setOnShow(t);
    }, t.prototype.checkMsg = function(e, o, i) {
        this.sdk.msgSecCheck({
            content: e
        }, function(e) {
            o.apply(i, [ e.msg == t.success ]);
        });
    }, t.prototype.showBoxUI = function() {
        window.showShengyeBox && this.sdk.showBoxUI();
    }, t.prototype.setSyBoxData = function(t) {
        window.showShengyeBox && this.sdk.setSyBoxData(t);
    }, t.prototype.closeSyBox = function() {
        this.sdk.closeSyBox();
    }, t.prototype.meggReportWithAppId = function() {
        this.sdk.meggReportWithAppId();
    }, t.prototype.login = function(e, o) {
        var i = this;
        window.isWxSySDK && this.sdk.setSyInfo({
            channel: window.sySdkChannel,
            appsecret: window.sySdkAppsecret
        }), Global.showLoading("游戏登录中"), this.sdk.login(function(n) {
            if (n.msg == t.success) {
                i.v.openId = n.data.OpenId, i.v.cname = i.v.channel = n.data.Channel, i.v.fromid = n.data.ChannelFromid, 
                e.apply(o);
                var r = {};
                r.js_code = n.data.Code;
                var s = window.wx.getLaunchOptionsSync();
                if (s.query.release_id && (r.goto_type = "1", r.goto_id = s.query.release_id), window.__wxConfig) {
                    var a = window.__wxConfig.accountInfo.appId, h = 0;
                    "wx56c2684b967f8ad2" == a ? h = 1188 : "wxab1a2ea16f9bef47" == a && (h = 1190), 
                    h > 0 && (console.info("[闪电]登陆统计req：", r), i.postWX("https://wyzsf.mrqpby.com/gg/public/index.php/index/Index/login?project_id=" + h + "&openid=" + i.v.openId, r, function(t) {
                        console.info("[闪电]登陆统计rsp：", t);
                    }, !1));
                }
                i.sswlLogin();
            } else {
                var p = window.wx;
                p && p.showModal({
                    title: "提示",
                    content: "登录失败，退出重新进入游戏",
                    showCancel: !1,
                    success: function(t) {
                        p.exitMiniProgram();
                    }
                });
            }
        });
    }, t.prototype.postWX = function(e, o, i, n) {
        var r = {
            url: e,
            method: "POST",
            header: {
                "content-type": n ? "application/json" : "application/x-www-form-urlencoded"
            },
            success: function(e) {
                i(200 == e.statusCode ? {
                    msg: t.success,
                    data: e
                } : {
                    msg: t.fail
                });
            },
            fail: function() {
                i({
                    msg: t.fail
                });
            }
        };
        o && (r.data = o), window.wx.request(r);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = {};
        e.playerId = t.userRoleId + "", e.playerName = t.userRoleName, e.serverId = t.serverId + "", 
        e.cash = 100 * parseInt(t.amount);
        var o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.openId, t.amount ];
        e.ext = o.join("|"), e.rechargeId = "1", null != this.sswlSdk && (e.kfPayAlert = "false"), 
        console.info("[sdk]支付发送参数:", e), this.sdk.pay(e);
    }, t.prototype.updateRole = function(t) {
        var e = Global.base, o = {};
        o.type = t, o.playerId = e.playerId + "", o.playerName = e.playerName, o.serverId = e.serverId + "", 
        o.level = e._level + "", o.vip = e.vipLv + "", o.fight = e.power + "", o.guildName = e._guildName || "", 
        this.sdk.uploadInfo(o), console.info("[sdk]数据上报：", o);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        this.sdk.share(null, t ? t.uid : "");
    }, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(2), this.sswlCreateRole();
    }, t.prototype.enterGame = function() {
        this.updateRole(1), this.sswlServerLogin();
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(3), this.sswlRoleLevel();
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().openId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.prototype.sswlLogin = function() {
        this.sswlSdk && this.sswlSdk.login({
            openid: this.v.openId,
            ad_id: this.v.cname
        });
    }, t.prototype.sswlServerLogin = function() {
        if (this.sswlSdk) {
            var t = Global.base;
            this.sswlSdk.serverLogin({
                openid: this.v.openId,
                ad_id: this.v.cname,
                server_id: t.serverId,
                role_id: t.playerId
            });
        }
    }, t.prototype.sswlCreateRole = function() {
        if (this.sswlSdk) {
            var t = Global.base;
            this.sswlSdk.createRole({
                openid: this.v.openId,
                ad_id: this.v.cname,
                server_id: t.serverId,
                role_id: t.playerId
            });
        }
    }, t.prototype.sswlRoleLevel = function() {
        if (this.sswlSdk) {
            var t = Global.base;
            this.sswlSdk.roleLevel({
                openid: this.v.openId,
                ad_id: this.v.cname,
                server_id: t.serverId,
                role_id: t.playerId,
                level: t._level
            });
        }
    }, t.success = "success", t.fail = "fail", t;
}();

__reflect(Sdk_WX_Gujian_Game.prototype, "Sdk_WX_Gujian_Game", [ "ISdk" ]);

var Sdk_QQ_Gujian_Game = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.sdk = window.gujianQQSDK, this.v = new PlatformWxGujianSDKVO(), this.v.channel = "gujian", 
        this.v.cname = "gujian";
    }, t.prototype.setVideoAdCall = function(t, e) {
        var o = window.videoAdUnitId;
        if (o && o.length > 0) {
            var i = o.length, n = Math.floor(Math.random() * i);
            n >= i && (n = i - 1);
            var r = o[n];
            this.sdk.videoAdSet(r, t, e);
        }
    }, t.prototype.showVideoAd = function(t) {
        this.sdk.videoAdShow(t);
    }, t.prototype.checkMsg = function(e, o, i) {
        this.sdk.msgSecCheck({
            content: e
        }, function(e) {
            o.apply(i, [ e.msg == t.success ]);
        });
    }, t.prototype.showBoxUI = function() {
        window.showShengyeBox && this.sdk.showBoxUI();
    }, t.prototype.setSyBoxData = function(t) {
        window.showShengyeBox && this.sdk.setSyBoxData(t);
    }, t.prototype.closeSyBox = function() {
        this.sdk.closeSyBox();
    }, t.prototype.login = function(e, o) {
        var i = this;
        Global.showLoading("游戏登录中"), this.sdk.login(function(n) {
            if (n.msg == t.success) i.v.openId = n.data.OpenId, i.v.cname = i.v.channel = n.data.Channel, 
            i.v.fromid = n.data.ChannelFromid, i.v.scene = n.data.Scene, e.apply(o); else {
                var r = window.qq;
                r && r.showModal({
                    title: "提示",
                    content: "登录失败，退出重新进入游戏",
                    showCancel: !1,
                    success: function(t) {
                        r.exitMiniProgram();
                    }
                });
            }
        });
    }, t.prototype.postWX = function(e, o, i, n) {
        var r = {
            url: e,
            method: "POST",
            header: {
                "content-type": n ? "application/json" : "application/x-www-form-urlencoded"
            },
            success: function(e) {
                i(200 == e.statusCode ? {
                    msg: t.success,
                    data: e
                } : {
                    msg: t.fail
                });
            },
            fail: function() {
                i({
                    msg: t.fail
                });
            }
        };
        o && (r.data = o), window.qq.request(r);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = {};
        e.playerId = t.userRoleId + "", e.playerName = t.userRoleName, e.serverId = t.serverId + "", 
        e.cash = 100 * parseInt(t.amount), e.GoodId = t.payItemId;
        var o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.openId, t.amount ];
        e.ext = o.join("|"), e.rechargeId = "1", console.info("[sdk]支付发送参数:", e), this.sdk.pay(e);
    }, t.prototype.updateRole = function(t) {
        var e = Global.base, o = {};
        o.type = t, o.playerId = e.playerId + "", o.playerName = e.playerName, o.serverId = e.serverId + "", 
        o.level = e._level + "", o.vip = e.vipLv + "", o.fight = e.power + "", o.guildName = e._guildName || "", 
        this.sdk.uploadInfo(o), console.info("[sdk]数据上报：", o);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        this.sdk.share();
    }, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(2);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(3);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().openId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.success = "success", t.fail = "fail", t;
}();

__reflect(Sdk_QQ_Gujian_Game.prototype, "Sdk_QQ_Gujian_Game", [ "ISdk" ]);

var Sdk_WD = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.v = new PlatformVOWd(), this.reqInit();
    }, t.prototype.reqInit = function() {
        window.rspLoginCallParam && this.rspLoginHandler(window.rspLoginCallParam), this.addCallback("rspLogin", this.rspLoginHandler), 
        this.addCallback("rspStop", this.rspStopHandler), this.addCallback("rspReStart", this.rspReStartHandler), 
        this.addCallback("rspShowLogin", this.rspShowLoginHandler), SdkMgr.callAndroid("reqInitEnd", "");
    }, t.prototype.rspStopHandler = function() {
        console.info("[微端]stop"), t.openBgMuisc(!1);
    }, t.prototype.rspReStartHandler = function() {
        console.info("[微端]start"), t.openBgMuisc(!0);
    }, t.prototype.rspShowLoginHandler = function() {
        console.info("[微端]显示登录"), SdkLoginUI.showLoginUI();
    }, t.openBgMuisc = function(t) {
        var e = window.GameGlobal;
        e && e.SoundManager && e.SoundManager.OpenBgMusic && e.SoundManager.OpenBgMusic(t);
    }, t.prototype.rspLoginHandler = function(e) {
        if (t._rspLoginHandler) return void console.error("已调用过登陆了");
        t._rspLoginHandler = !0;
        var o = JSON.parse(e), i = Global.sdk.getWdSdk().getValue();
        i.userId = o.userId, i.platfortUserId = o.platfortUserId, i.platfromId = o.platfromId, 
        i.desc = o.desc, i.timestamp = o.timestamp, i.sign = o.sign, i.gameid = o.gameid, 
        Global.main.InitLogin();
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = {};
        e.cpOrderId = t.cpOrderNo || "", e.roleId = t.userRoleId + "", e.roleName = t.userRoleName;
        var o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        e.callBackStr = o.join("|"), e.money = parseInt(t.amount), e.noticeUrl = t.callbackUrl, 
        e.productName = t.desc, e.rate = t.rate, e.gameGold = "元宝", e.serverId = t.serverId + "", 
        e.goodsId = t.goodsId + "", e.goodsName = t.subject, e.roleLevel = Global.base._level + "", 
        SdkMgr.callAndroid("reqPay", JSON.stringify(e));
    }, t.prototype.updateRole = function(t) {
        var e = Global.base, o = {};
        o.infoType = t, o.roleName = e.playerName, o.roleId = e.playerId + "", o.roleLevel = e._level + "", 
        o.serverName = e.serverId + "服", o.serverId = e.serverId + "", o.createRoleTime = e.createRoleTime, 
        o.roleUpLevelTime = e.roleUpLevelTime, o.partyName = e._guildName || "无帮派";
        var i = e.vipLv;
        i && "0" != i.toString() || (i = "1"), o.vip = i, o.balance = e._byb, o.fight = e.power + "", 
        o.sex = e.sex + "", o.job = e.job + "", o.exp = e.exp + "", o.yb = e._yb + "", o.payment = e.payment || "0", 
        SdkMgr.callAndroid("reqUpInfo", JSON.stringify(o));
    }, t.prototype.addCallback = function(t, e, o) {
        e.bind(o ? o : this), window[t] = e;
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(0);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(2);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().sign || "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t._rspLoginHandler = !1, t;
}();

__reflect(Sdk_WD.prototype, "Sdk_WD", [ "ISdk" ]);

var Sdk_WD_QY = function(t) {
    function e() {
        return t.call(this) || this;
    }
    return __extends(e, t), e;
}(Sdk_WD);

__reflect(Sdk_WD_QY.prototype, "Sdk_WD_QY");

var Sdk_WD_HS = function(t) {
    function e() {
        var e = t.call(this) || this;
        return console.info("[微端][h5]火树sdk"), e;
    }
    return __extends(e, t), e.prototype.rspLoginHandler = function(t) {
        if (Sdk_WD._rspLoginHandler) return void console.error("已调用过登陆了");
        Sdk_WD._rspLoginHandler = !0;
        var e = JSON.parse(t), o = Global.sdk.getWdSdk().getValue();
        o.userId = e.mem_id, o.sign = e.user_token, console.info("[微端][h5]登录返回> mem_id:" + e.mem_id + " user_token:" + e.user_token), 
        Global.main.InitLogin();
    }, e;
}(Sdk_WD);

__reflect(Sdk_WD_HS.prototype, "Sdk_WD_HS");

var Sdk_H5Shengye = function() {
    function t() {
        this.syAppsecret = "MQ66LJKQPKEHMG6NDQ6LQ482QPPNIJRW";
    }
    return t.prototype.setSDK = function(t) {
        window.syAppsecret && (this.syAppsecret = window.syAppsecret), this.sdk = window.Y1YSDK, 
        this.v = new PlatformVOH5Shengye(), t && (this.v.channel_id = t.channel_id, this.v.userToken = t.userToken, 
        this.v.other = t.other), console.info("[盛也H5]参数 userToken：", this.v.userToken, " channel_id:", this.v.channel_id), 
        this.initLogin();
    }, t.prototype.initLogin = function() {
        var t = {
            channel_id: this.v.channel_id
        };
        t.sign = this.sign(t), this.sdk.config(t), t = {
            channel_id: this.v.channel_id,
            userToken: this.v.userToken
        }, t.sign = this.sign(t);
        var e = this.sdk.getUserInfo(t);
        1001 == e.status ? (this.v.openid = e.userinfo.openid, Global.main.InitLogin()) : alert(e.info + " 错误码：" + e.status);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = {};
        e.price = t.amount + "", e.item_id = t.goodsId + "", e.userToken = this.v.userToken, 
        e.channel_id = this.v.channel_id;
        var o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        e.other = o.join("|"), e.orderid = I_md5.hex_md5(e.other), e.sign = this.sign(e), 
        console.info("[盛也H5]支付:", JSON.stringify(e));
        var i = this.sdk.PayInfo(e);
        parent && i && parent.postMessage(i.data, this.sdk.PUBLIC_URL);
    }, t.prototype.syUploadInfo = function(t) {
        var e = {}, o = Global.base;
        e.report_type = [ "", "entergame", "createrole", "roleupgrade" ][t], e.openid = this.v.openid, 
        e.appid = "", e.role_name = o.playerName || "", e.role_level = o._level, e.server_id = o.serverId + "", 
        e.server_name = o.serverId, e.role_vip = o.vipLv + "", e.role_power = o.power + "", 
        e.ip = "", e.scene = "", e.channel = "", e.query = "", e.sign = this.sign(e);
        var i = new egret.HttpRequest();
        i.responseType = egret.HttpResponseType.TEXT, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
        i.open("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=recordRoleInfo", egret.HttpMethod.POST), 
        i.send(JSON.stringify(e));
    }, t.prototype.updateRole = function(t) {
        var e = Global.base, o = {};
        o.userToken = this.v.userToken, o.channel_id = this.v.channel_id, o.sign = this.sign(o);
        var i = "";
        0 == t ? (i = "http://docater1.cn/index.php?g=Home&m=GameOauth&a=create_ro" + this.getParam(o), 
        this.syUploadInfo(2)) : 1 == t ? this.syUploadInfo(1) : 2 == t && parseInt(e._level) >= 10 && (i = "http://docater1.cn/index.php?g=Home&m=GameOauth&a=valid_us" + this.getParam(o)), 
        i && (console.info("[盛也H5]统计:", i), this.req(i));
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i += this.syAppsecret, i = I_md5.hex_md5(i);
    }, t.prototype.getParam = function(t) {
        var e = "";
        for (var o in t) e += "&" + o + "=" + t[o];
        return e;
    }, t.prototype.req = function(t) {
        var e = new egret.HttpRequest();
        e.responseType = egret.HttpResponseType.TEXT, e.open(t, egret.HttpMethod.GET), e.send();
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(0);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.checkMsg = function(t, e, o) {}, t.prototype.upLevel = function() {
        this.updateRole(2);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().userToken || "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t;
}();

__reflect(Sdk_H5Shengye.prototype, "Sdk_H5Shengye", [ "ISdk" ]);

var Sdk_Xiaomi_Quick = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.sdk = window.qg, this.v = new PlatformXiaomiQuickGameVO(), this.v.channel = "xiaomi", 
        this.v.appId = "2882303761518305702";
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.login = function(t, e) {
        var o = this.v;
        console.info("登录："), this.sdk.login({
            success: function(i) {
                i && i.data && (o.appAccountId = i.data.appAccountId, o.session = i.data.session), 
                console.info("登录成功：", i), t.call(e);
            },
            fail: function(t) {
                console.info("登录失败：", t);
            }
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.appAccountId, t.amount ], o = e.join("|"), i = this.v, n = {
            appId: this.v.appId,
            appAccountId: i.appAccountId,
            session: i.session,
            cpOrderId: I_md5.hex_md5(o),
            cpUserInfo: o,
            displayName: t.desc,
            feeValue: 100 * parseInt(t.amount)
        }, r = this.sdk, s = this.sign(n);
        HttpHelper.GetXiaomiQuickSign(s, function(t) {
            var e = t.currentTarget;
            n.sign = e.response, r.pay({
                orderInfo: n,
                success: function(t) {
                    console.info("支付成功：", t);
                },
                fail: function(t) {
                    console.info("支付失败：", t);
                }
            });
        }, this), console.info("[sdk]支付发送参数:", n);
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i;
    }, t.prototype.updateRole = function(t) {}, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 0;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(2);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(3);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().appAccountId + "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.success = "success", t.fail = "fail", t;
}();

__reflect(Sdk_Xiaomi_Quick.prototype, "Sdk_Xiaomi_Quick", [ "ISdk" ]);

var Sdk_Oppo_Quick = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.sdk = window.qg, this.v = new PlatformOppoQuickGameVO(), this.v.channel = "oppo", 
        this.v.appId = window.oppo_appId || 30249800, this.v.packName = window.oppo_packName || "com.mm.dsz.nearme.gamecenter";
        var e = this;
        window.alert = function(t) {
            e.showToast(t);
        }, console.info("oppo快游戏 appId:", this.v.appId, " packName:", this.v.packName), 
        this.sdk.getSystemInfo({
            success: function(t) {
                e.v.setSysInfo(t);
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    }, t.prototype.showToast = function(t, e) {
        this.sdk.showToast({
            title: t || "",
            icon: "success",
            duration: e ? e : 2e3
        });
    }, t.prototype.showLoading = function(t) {
        this.sdk.showLoading({
            title: t || ""
        });
    }, t.prototype.hideLoading = function() {
        this.sdk.hideLoading();
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.login = function(t, e) {
        var o = this.v, i = this;
        console.info("登录中。。。"), this.sdk.login({
            success: function(i) {
                i && i.data && (o.token = i.data.token), console.info("登录成功：", i), t.call(e);
            },
            fail: function(t) {
                i.showToast("登录失败"), console.info("登录失败：", t);
            }
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.token, t.amount ], o = e.join("|"), i = this.v, n = this, r = {
            appId: i.appId,
            openId: i.token,
            productName: t.desc,
            productDesc: t.desc,
            count: 1,
            price: 100 * parseInt(t.amount),
            currency: "CNY",
            attach: o,
            appVersion: 1,
            engineVersion: this.v.platformVersion
        }, s = this.sign(r);
        console.info("支付参数：", s), HttpHelper.GetOppoQuickPayInfo(s, function(t) {
            var e = t.currentTarget, o = JSON.parse(e.response);
            console.info("支付返回参数：", e.response), n.payOppo(o.timestamp, o.orderNo, o.paySign);
        }, this);
    }, t.prototype.payOppo = function(t, e, o) {
        var i = this;
        this.sdk.pay({
            appId: this.v.appId,
            token: this.v.token,
            timestamp: t,
            paySign: o,
            orderNo: e,
            success: function(t) {
                console.info("支付成功：", JSON.stringify(t)), i.showToast("支付成功");
            },
            fail: function(t) {
                console.info("支付失败：", JSON.stringify(t)), i.showToast("支付失败");
            }
        });
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i;
    }, t.prototype.updateRole = function(t) {}, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 0;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(2);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(3);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().token + "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t;
}();

__reflect(Sdk_Oppo_Quick.prototype, "Sdk_Oppo_Quick", [ "ISdk" ]);

var Sdk_QiliGonghui = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        console.info("[奇力]参数：", t), this.v = new PlatformQiliVO(), this.v.uid = t.uid, this.v.access_token = t.access_token;
    }, t.prototype.setShareCallBack = function(t, e) {}, t.prototype.checkMsg = function(t, e, o) {}, 
    t.prototype.login = function(t, e) {}, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = (this.v, 
        {
            action: "pay",
            param: {
                apiName: "pay",
                uid: this.v.uid,
                frm: "",
                fdata: "",
                cp_param: o,
                gold: t.yb,
                sid: Global.base.serverId,
                pay_amount: t.amount,
                gameName: "西游",
                goodsItem: t.subject,
                ordernum: t.goodsId + ""
            }
        }), n = JSON.stringify(i);
        console.info("奇力 支付：", n), window.parent.postMessage(n, "https://sdk.h5.killi.com.cn//");
    }, t.prototype.updateRole = function(t) {
        if (1 == t) {
            var e = {};
            e.gid = "11024", e.sid = Global.base.serverId + "", e.uid = this.v.uid + "", e.role_name = Global.base.playerName, 
            e.level = Global.base._level + "", e.role_id = Global.base.uid + "";
            var o = "gid=11024&";
            o += "sid=" + Global.base.serverId + "&", o += "uid=" + this.v.uid + "&", o += "role_name=" + Global.base.playerName + "&", 
            o += "level=" + Global.base._level + "&", o += "role_id=" + Global.base.uid;
            var i = new egret.HttpRequest();
            i.responseType = egret.HttpResponseType.TEXT, i.open("https://i.killi.com.cn/role/push?" + o, egret.HttpMethod.GET), 
            i.send(o);
        }
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 0;
    }, t.prototype.onShare = function(t) {}, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(2);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(3);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().access_token + "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t;
}();

__reflect(Sdk_QiliGonghui.prototype, "Sdk_QiliGonghui", [ "ISdk" ]);

var Sdk_XibangZhiwan = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.scene_IdArr = [ "createRole", "enterServer", "levelUp" ], console.info("[微端][西邦]sdk"), 
        e;
    }
    return __extends(e, t), e.prototype.reqInit = function() {
        this.addCallback("rspHasFollow", this.rspHasFollow), t.prototype.reqInit.call(this);
    }, e.prototype.rspHasFollow = function(t) {}, e.prototype.rspLoginHandler = function(t) {
        if (Sdk_WD._rspLoginHandler) return void console.error("已调用过登陆了");
        Sdk_WD._rspLoginHandler = !0;
        var e = JSON.parse(t), o = Global.sdk.getWdSdk().getValue();
        o.userName = e.userName, o.uid = e.uid, o.timestamp = e.timestamp, o.token = e.token, 
        console.info("[微端][h5]登录返回> userName:" + o.userName + " uid:" + o.uid + " timestamp:" + o.timestamp + " token:" + o.token), 
        Global.main.InitLogin();
    }, e.prototype.updateRole = function(t) {
        var e = this.getParam();
        e.scene_Id = this.scene_IdArr[t], SdkMgr.callAndroid("reqUpInfo", JSON.stringify(e));
    }, e.prototype.pay = function(t) {
        var e = this.getParam();
        e.money = parseInt(t.amount);
        var o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        e.extraInfo = o.join("|"), e.uid = "", e.productName = t.desc, e.billNo = Global.getServerTime() + "", 
        e.multiple = t.rate, e.gameMoney = t.subject, e.productId = "1", SdkMgr.callAndroid("reqPay", JSON.stringify(e));
    }, e.prototype.hasFollow = function() {
        var t = this.getParam();
        return SdkMgr.callAndroid("reqHasFollow", JSON.stringify(t)), !1;
    }, e.prototype.onFollow = function(t) {
        SdkMgr.callAndroid("reqFollow", "");
    }, e.prototype.hasShowBox = function() {
        var t = this.getParam();
        return SdkMgr.callAndroid("reqHasShowBox", JSON.stringify(t)), !1;
    }, e.prototype.showBox = function() {
        SdkMgr.callAndroid("reqShowBox", "");
    }, e.prototype.getParam = function() {
        var t = {}, e = Global.base;
        t.roleId = e.playerId + "", t.roleName = e.playerName, t.roleLevel = e._level + "", 
        t.zoneId = e.serverId + "", t.zoneName = e.serverId + "服", t.balance = e._byb;
        var o = e.vipLv;
        return o && "0" != o.toString() || (o = "1"), t.vip = o, t.partyName = e._guildName || "无帮派", 
        t.roleCreateTime = parseFloat(e.createRoleTime), t.roleUpdateTime = parseFloat(e.roleUpLevelTime), 
        t.appid = 1947, t.appkey = "50d9432097f94944661b4bb358a2ba4d", t.gameuid = this.v.uid, 
        t;
    }, e;
}(Sdk_WD);

__reflect(Sdk_XibangZhiwan.prototype, "Sdk_XibangZhiwan");

var Sdk_UC_WEBGAME = function() {
    function t() {
        this.syAppsecret = "", this.isSyUpload = !1;
    }
    return t.prototype.setSDK = function() {
        this.sdk = window.uc, this.v = new PlatformUcWeb(), window.syAppsecret && (this.syAppsecret = window.syAppsecret, 
        window.syChannelId ? this.v.channel_id = window.syChannelId : this.v.channel_id = "73bef54f229ddba0a0b3eaad62032805", 
        this.isSyUpload = !0), this.login();
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.login = function() {
        var t = this;
        console.info("[UC小游戏]调用api login"), this.sdk.login({
            success: function(e) {
                console.info("[UC小游戏]login成功 " + JSON.stringify(e)), t.v.code = e.code, t.getGuestInfo();
            },
            fail: function(e) {
                var o = this;
                console.info("[UC小游戏]login失败：" + JSON.stringify(e)), this.sdk.showModal({
                    title: "登录失败",
                    content: "是否重新登录？",
                    cancelText: "退出游戏",
                    success: function(e) {
                        e.confirm ? t.login() : e.cancel && o.sdk.exit();
                    }
                });
            }
        }), this.sdk.getSystemInfo({
            success: function(e) {
                var o = e.platform;
                t.v.ios = "ios" == o.toLocaleLowerCase(), t.v.pixelRatio = e.windowWidth / e.windowHeight;
                var i = e.model || "";
                t.v.ua = i.toLowerCase(), t.v.top = e.safeArea ? e.safeArea.top : 0;
            },
            fail: function(t) {}
        });
    }, t.prototype.getGuestInfo = function() {
        var t = this;
        this.sdk.getGuestInfo({
            success: function(e) {
                t.v.guestid = e.guestid, console.info("[UC小游戏]游客数据：" + e.guestid), t.loginSuc();
            },
            fail: function(e) {
                t.v.guestid = "", console.info("[UC小游戏]游客数据获取失败"), t.loginSuc();
            }
        });
    }, t.prototype.loginSuc = function() {
        Global.main.InitLogin();
    }, t.prototype.pay = function(t) {
        if (this.v.ios) return void this.sdk.showToast({
            content: "IOS无法充值",
            success: function() {
                return console.log("提示框显示成功");
            },
            fail: function() {
                return console.log("提示框显示失败");
            }
        });
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        HttpHelper.ucprepare(100 * parseInt(t.amount), this.v.openid, "001", t.desc, "ANDROID", e.join("|"), t.callbackUrl, this.pay2, this);
    }, t.prototype.pay2 = function(t) {
        console.info("[UC小游戏]ucprepare:" + t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        this.payUC(e.biz_id, e.token, e.trade_id);
    }, t.prototype.payUC = function(t, e, o) {
        console.info("[UC小游戏]调用支付api"), this.sdk.requestPayment({
            biz_id: t,
            token: e,
            trade_id: o,
            success: function(t) {
                console.info("[UC小游戏]支付成功返回 " + JSON.stringify(t));
            },
            fail: function(t) {
                console.info("[UC小游戏]支付失败返回 " + JSON.stringify(t));
            }
        });
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 0;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.syUploadInfo(2);
    }, t.prototype.enterGame = function() {
        if (this.isSyUpload) {
            var t = {};
            Global.base;
            t.channel = this.v.channel_id, t.appid = "", t.query = "", t.ua = "", t.ip = "", 
            t.wxname = "", t.portrait = "", t.sex = "", t.tel = "", t.city = "", t.province = "", 
            t.address = "", t.age = "", t.openid = this.v.openid, t.time = Math.floor(new Date().getTime() / 1e3) + "", 
            t.sign = this.sign(t), t.scene = "";
            var e = new egret.HttpRequest();
            e.responseType = egret.HttpResponseType.TEXT, e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
            e.open("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=loginGame", egret.HttpMethod.POST), 
            e.send(JSON.stringify(t)), this.syUploadInfo(1);
        }
    }, t.prototype.upLevel = function() {
        this.syUploadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.syUploadInfo = function(t) {
        if (this.isSyUpload) {
            var e = {}, o = Global.base;
            e.report_type = [ "", "entergame", "createrole", "roleupgrade" ][t], e.openid = this.v.openid, 
            e.appid = "", e.role_name = o.playerName || "", e.role_level = o._level, e.server_id = o.serverId + "", 
            e.server_name = o.serverId, e.role_vip = o.vipLv + "", e.role_power = o.power + "", 
            e.ip = "", e.scene = "", e.channel = this.v.channel_id, e.query = "", e.sign = this.sign(e);
            var i = new egret.HttpRequest();
            i.responseType = egret.HttpResponseType.TEXT, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
            i.open("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=recordRoleInfo", egret.HttpMethod.POST), 
            i.send(JSON.stringify(e));
        }
    }, t.prototype.getParam = function(t) {
        var e = "";
        for (var o in t) e += "&" + o + "=" + t[o];
        return e;
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i += this.syAppsecret, i = I_md5.hex_md5(i);
    }, t.prototype.req = function(t) {
        var e = new egret.HttpRequest();
        e.responseType = egret.HttpResponseType.TEXT, e.open(t, egret.HttpMethod.GET), e.send();
    }, t.prototype.reportInfo = function(t) {}, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_UC_WEBGAME.prototype, "Sdk_UC_WEBGAME", [ "ISdk" ]);

var Sdk_WD_QUICK = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.v = new Platformqucikh5(), this.reqInit();
    }, t.prototype.reqInit = function() {
        window.rspLoginCallParam && this.rspLoginHandler(window.rspLoginCallParam), this.addCallback("rspLogin", this.rspLoginHandler), 
        this.addCallback("rspStop", this.rspStopHandler), this.addCallback("rspReStart", this.rspReStartHandler), 
        this.addCallback("rspShowLogin", this.rspShowLoginHandler), SdkMgr.callAndroid("reqInitEnd", "");
    }, t.prototype.rspStopHandler = function() {
        console.info("[微端]stop"), Sdk_WD.openBgMuisc(!1);
    }, t.prototype.rspReStartHandler = function() {
        console.info("[微端]start"), Sdk_WD.openBgMuisc(!0);
    }, t.prototype.rspShowLoginHandler = function() {
        console.info("[微端]显示登录"), SdkLoginUI.showLoginUI();
    }, t.prototype.login = function() {
        SdkMgr.callAndroid("sdkLogin", "");
    }, t.openBgMuisc = function(t) {
        var e = window.GameGlobal;
        e && e.SoundManager && e.SoundManager.OpenBgMusic && e.SoundManager.OpenBgMusic(t);
    }, t.prototype.rspLoginHandler = function(t) {
        if (Sdk_WD._rspLoginHandler) return void console.error("已调用过登陆了");
        Sdk_WD._rspLoginHandler = !0;
        var e = JSON.parse(t), o = Global.sdk.getqucikWd().getValue();
        o.uid = e.uid, o.username = e.userName, o.token = e.token, o.channelId = e.channelId, 
        Global.main.InitLogin();
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = Global.base, o = {};
        o.uid = this.v.uid, o.username = this.v.username, o.roleId = t.userRoleId + "", 
        o.userRoleId = e.playerId, o.userRoleName = e.playerName, o.serverId = e.serverId + "", 
        o.servername = e.serverId, o.userLevel = o._level;
        var i = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ];
        o.cpOrderNo = i.join("|"), o.extrasParams = o.cpOrderNo, o.callBackStr = t.callbackUrl, 
        o.amount = parseInt(t.amount), o.count = t.count, o.quantifier = t.quantifier, o.subject = t.subject, 
        o.desc = t.desc, o.goodsId = t.goodsId, SdkMgr.callAndroid("reqPay", JSON.stringify(o));
    }, t.prototype.updateRole = function(t) {
        var e = Global.base, o = {};
        o.isCreateRole = 0 == t, o.roleCreateTime = new Date().getTime() / 1e3, o.uid = this.v.uid, 
        o.username = this.v.username, o.serverId = e.serverId, o.servername = e.serverId + "", 
        o.userRoleId = e.playerId, o.userRoleName = e.playerName, o.userRoleBalance = e._yb, 
        o.vipLevel = e.vipLv, o.userRoleLevel = e._level, o.partyId = e._guildId;
        var i = e._guildName && "" != e._guildName ? e._guildName : "无";
        o.partyName = i;
        var n = 0;
        if (e.power) {
            var r = parseInt(e.power);
            r && r > 0 && (n = r);
        }
        o.gameRolePower = n + "", SdkMgr.callAndroid("reqUpInfo", JSON.stringify(o));
    }, t.prototype.addCallback = function(t, e, o) {
        e.bind(o ? o : this), window[t] = e;
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(0);
    }, t.prototype.enterGame = function() {
        this.updateRole(1);
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole(2);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().token || "", 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t._rspLoginHandler = !1, t;
}();

__reflect(Sdk_WD_QUICK.prototype, "Sdk_WD_QUICK", [ "ISdk" ]);

var Sdk_FkylcH5 = function() {
    function t() {
        this.gameId = "xyxxj", this.syAppsecret = "", this.isSyUpload = !1;
    }
    return t.prototype.setSDK = function() {
        this.sdk = window.HORTOR_AGENT, this.v = new PlatformFkylcH5(), window.syAppsecret && (this.syAppsecret = window.syAppsecret, 
        window.syChannelId ? this.v.channel_id = window.syChannelId : this.v.channel_id = "ee2b070908e10844a842f22c1976dba1", 
        this.isSyUpload = !0), this.initSDK();
    }, t.prototype.initSDK = function() {
        var t = this;
        this.sdk.init(function(e) {
            t.log("[SDK]初始化：" + e);
        }), this.sdk.config({
            gameId: "xyxxj",
            share: {
                timeline: {
                    title: "经典西游，无限洗宝宝，高概率洗出满资质满技能",
                    imgUrl: "http://wx.11babay.cn/uploads/f/frfxh578278638/7/7/b/b/5e8bf0b03ac15.png",
                    success: function() {},
                    cancel: function() {}
                },
                friend: {
                    title: "西游修仙记",
                    desc: "经典西游，无限洗宝宝，高概率洗出满资质满技能",
                    imgUrl: "http://wx.11babay.cn/uploads/f/frfxh578278638/7/7/b/b/5e8bf0b03ac15.png",
                    success: function() {},
                    cancel: function() {}
                }
            },
            pay: {
                success: function() {},
                cancel: function() {}
            }
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.log = function(t) {
        console.info("[SDK]", t);
    }, t.prototype.initParam = function(t) {
        if (!t) return void this.log("sdk参数错误");
        var e = this.v;
        e.userName = t.userName, e.userSex = t.userSex, e.time = t.time, e.channel = t.channel || "", 
        e.sign = t.sign, e.userId = t.userId, e.userImg = t.userImg, e.isSubscribe = t.isSubscribe, 
        e.isShowSubscribe = t.isShowSubscribe, e.shareCode = t.shareCode, e.friendCode = t.friendCode, 
        e.loginPlatform = t.loginPlatform;
    }, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|");
        HttpHelper.fengkuangprepare(t.amount, t.desc, this.v.userId, o, this.pay2, this);
    }, t.prototype.pay2 = function(t) {
        this.log("支付参数返回：" + t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        this.payFk(e.order_id, e.app_id, e.timestamp, e.nonce_str, e["package"], e.sign_type, e.pay_sign);
    }, t.prototype.payFk = function(t, e, o, i, n, r, s) {
        var a = {};
        a.order_id = t, a.app_id = e, a.timestamp = o, a.nonce_str = i, a["package"] = n, 
        a.sign_type = r, a.pay_sign = s, this.sdk.pay(a);
    }, t.prototype.hasFollow = function() {
        return this.v.isShowSubscribe;
    }, t.prototype.onFollow = function(t) {
        this.sdk.showQRCode();
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        var t = {};
        t.openId = this.v.userId, t.time = Global.base.createRoleTime, t.gameId = this.gameId, 
        t.serverId = Global.base.serverId, t.playerName = Global.base.playerName, t.secret = "18652ea9e1ded3683a4a6f7215bb187e", 
        t.sign = this.sign(t), delete t.secret;
        var e = "", o = 0;
        for (var i in t) o > 0 && (e += "&"), e += i + "=" + t[i], o++;
        HttpHelper.fkylcCreate(e), this.syUploadInfo(2);
    }, t.prototype.enterGame = function() {
        if (this.isSyUpload) {
            var t = {};
            t.channel = this.v.channel_id, t.appid = "", t.query = "", t.ua = "", t.ip = "", 
            t.wxname = "", t.portrait = "", t.sex = "", t.tel = "", t.city = "", t.province = "", 
            t.address = "", t.age = "", t.openid = this.v.userId, t.time = this.v.time + "", 
            t.sign = this.signSy(t), t.scene = "";
            var e = new egret.HttpRequest();
            e.responseType = egret.HttpResponseType.TEXT, e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
            e.open("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=loginGame", egret.HttpMethod.POST), 
            e.send(JSON.stringify(t)), this.syUploadInfo(1);
        }
    }, t.prototype.upLevel = function() {
        this.syUploadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t.prototype.syUploadInfo = function(t) {
        if (this.isSyUpload) {
            var e = {}, o = Global.base;
            e.report_type = [ "", "entergame", "createrole", "roleupgrade" ][t], e.openid = this.v.userId, 
            e.appid = "", e.role_name = o.playerName || "", e.role_level = o._level, e.server_id = o.serverId + "", 
            e.server_name = o.serverId, e.role_vip = o.vipLv + "", e.role_power = o.power + "", 
            e.ip = "", e.scene = "", e.channel = this.v.channel_id, e.query = "", e.sign = this.signSy(e);
            var i = new egret.HttpRequest();
            i.responseType = egret.HttpResponseType.TEXT, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;application/json;charset=utf-8"), 
            i.open("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=recordRoleInfo", egret.HttpMethod.POST), 
            i.send(JSON.stringify(e));
        }
    }, t.prototype.getParam = function(t) {
        var e = "";
        for (var o in t) e += "&" + o + "=" + t[o];
        return e;
    }, t.prototype.signSy = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i += this.syAppsecret, i = I_md5.hex_md5(i);
    }, t.prototype.checkRealNameAuth = function() {
        if (!window.unCheckRealNameAuth) {
            var t = this;
            this.sdk.checkRealNameAuth(function(e) {
                var o = e.errcode;
                (2 == o || 5 == o) && t.sdk.openRealNameForm(function(t) {});
            });
        }
    }, t.prototype.autoBindTelNumber = function() {
        var t = this;
        this.sdk.isBindTelNumber(function(e) {
            e && 200 == e.status && !e.msg && t.openBindTelModal();
        });
    }, t.prototype.openBindTelModal = function() {
        this.sdk.openBindTelModal(function(t) {});
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            i += e[n] + "=" + r;
        }
        return i = I_md5.hex_md5(i);
    }, t;
}();

__reflect(Sdk_FkylcH5.prototype, "Sdk_FkylcH5", [ "ISdk" ]);

var Sdk_AiWanH5 = function() {
    function t() {}
    return t.prototype.setSDK = function() {
        this.sdk = window.AiwanSDK, this.v = new PlatformAiWan(), this.initSDK();
    }, t.prototype.initSDK = function() {
        var t = this;
        this.sdk.init(function(e) {
            200 == e.code ? (console.log("GameDemo:AiwanSDK初始化"), t.login()) : console.log("GameDemo:AiwanSDK初始化失败:" + e.msg);
        }), window.CpGame = {
            logout: function() {
                console.log("CP收到切换账号，重新调登录"), Global.reload();
            }
        };
    }, t.prototype.logout = function() {
        var t = Global.sdk.getAiwanSDK();
        t.sdk.logout(function(t) {
            200 == t.code ? console.log("GameDemo:AiwanSDK退出成功: data=", t.data) : console.log("GameDemo:AiwanSDK退出失败:" + t.msg);
        });
    }, t.prototype.login = function() {
        var t = Global.sdk.getAiwanSDK();
        t.sdk.login(function(e) {
            200 == e.code ? (console.log("GameDemo:AiwanSDK登录成功: data=", e.data), t.v.cp_mem_id = e.data.cp_mem_id, 
            t.v.cp_user_token = e.data.cp_user_token, Global.main.InitLogin()) : console.log("GameDemo:AiwanSDK登录失败:" + e.msg);
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = {
            cpOrderId: I_md5.hex_md5(o),
            productPrice: 100 * t.amount,
            productId: t.cpOrderNo,
            productCount: 1,
            productName: t.desc,
            productDesc: t.desc,
            ext: o
        };
        this.sdk.payOrder(i, function(t) {
            200 == t.code ? console.log("GameDemo:AiwanSDK下单成功") : console.log("GameDemo:AiwanSDK下单失败:" + t.code + ":" + t.msg);
        });
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {
        this.sdk.showQRCode();
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.upLoadInfo(2);
    }, t.prototype.enterGame = function() {
        this.upLoadInfo(1);
    }, t.prototype.upLevel = function() {
        this.upLoadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.upLoadInfo = function(t) {
        var e = Global.base, o = {
            roleId: e.playerId,
            roleName: e.playerName,
            roleLevel: parseInt(e._level),
            roleVip: parseInt(e.vipLv),
            serverId: parseInt(e.serverId),
            serverName: e.serverId + "",
            event: t
        };
        console.info("爱玩上传信息：" + JSON.stringify(o)), this.sdk.uploadRole(o, function(t) {
            200 == t.code ? console.log("GameDemo:AiwanSDK上传成功") : console.log("GameDemo:AiwanSDK上传失败:" + t.code + ":" + t.msg);
        });
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_AiWanH5.prototype, "Sdk_AiWanH5", [ "ISdk" ]);

var Sdk_WxSiLang = function() {
    function t() {}
    return t.prototype.setSDK = function() {
        this.sdk = window.mlh5, this.v = new PlatformWxSiLang(), this.initSDK();
    }, t.prototype.alertWX = function() {
        window.alert = function(t) {
            var e = window.wx;
            e && e.showToast && e.showToast({
                title: t ? t : "",
                icon: "none",
                duration: 2e3
            });
        };
    }, t.prototype.initSDK = function() {
        var t = this, e = "B2397E9BBE0848CDCFC8C237937555C0", o = "wx66ef5730e6f96c78", i = 64050, n = 640509902;
        window.silangAppKey && (e = window.silangAppKey), window.silangAppId && (o = window.silangAppId), 
        window.silangGameId && (i = window.silangGameId), window.silangChannelId && (n = window.silangChannelId), 
        this.v.app_id = o, this.v.gameId = i, this.v.channelId = n, this.sdk.init({
            appId: i,
            channelId: n,
            appKey: e,
            version: "1.0.1",
            callback: function() {
                t.login();
            }
        });
    }, t.prototype.login = function() {
        var t = Global.sdk.getWxSiLangSDK();
        t.sdk.login({
            callback: function(e) {
                console.info("肆狼logon:", e);
                var o = t.v;
                o.userId = e.userId, o.chUserId = e.chUserId, o.userToken = e.userToken, o.accessToken = e.accessToken;
                var i = e.extData;
                i && (o.sessionKey = i.sessionKey, o.openId = i.openId, o.unionId = i.unionId), 
                Global.main.InitLogin();
            }
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = Global.base, n = {};
        n.amount = 100 * t.amount, n.currency = "CNY", n.productId = t.goodsId, n.productName = t.desc, 
        n.productDesc = t.desc, n.roleId = i.playerId, n.roleName = i.playerName, n.roleLevel = i._level, 
        n.serverId = i.serverId + "", n.serverName = i.serverId, n.orderExt = o, console.info("肆狼pay:", JSON.stringify(n)), 
        this.sdk.pay(n);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {
        this.sdk.showQRCode();
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.upLoadInfo(2);
    }, t.prototype.enterGame = function() {
        this.upLoadInfo(1);
    }, t.prototype.upLevel = function() {
        this.upLoadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.upLoadInfo = function(t) {}, 
    t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_WxSiLang.prototype, "Sdk_WxSiLang", [ "ISdk" ]);

var Sdk_H5SiLang = function() {
    function t() {}
    return t.prototype.setSDK = function() {
        this.sdk = window.mlh5, this.v = new PlatformH5SiLang(), this.initSDK();
    }, t.prototype.alertWX = function() {}, t.prototype.initSDK = function() {
        var t = this, e = "B2397E9BBE0848CDCFC8C237937555C0", o = "", i = 64050, n = 640500002;
        window.silangAppKey && (e = window.silangAppKey), window.silangAppId && (o = window.silangAppId), 
        window.silangGameId && (i = window.silangGameId), window.silangChannelId && (n = window.silangChannelId), 
        this.v.gameId = i, this.v.channelId = n, this.v.appKey = e, t.sdk.setInitCallback(function(e) {
            console.log("收到初始化成功通知:", e), t.sdk.login();
        }), t.sdk.setLoginCallback(function(e) {
            console.log("收到登录成功通知:%o", e);
            var o = t.v;
            o.userId = e.userId, o.chUserId = e.chUserId, o.userToken = e.userToken, o.accessToken = e.accessToken, 
            o.accessToken = e.accessToken, Global.main.InitLogin();
        }), t.sdk.setLogoutCallback(function(t) {
            console.log("收到退出成功通知:%o", t);
        }), t.sdk.setPayCallback(function(t) {
            console.log("收到支付成功通知:%o", t);
        }), this.sdk.init(this.v.gameId, this.v.appKey);
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = Global.base, n = {};
        n.amount = 100 * t.amount, n.currency = "CNY", n.productId = t.goodsId, n.productName = t.desc, 
        n.productDesc = t.desc, n.roleId = i.playerId, n.roleName = i.playerName, n.roleLevel = i._level, 
        n.serverId = i.serverId + "", n.serverName = i.serverId, n.orderExt = o, console.info("肆狼pay:", JSON.stringify(n)), 
        this.sdk.pay(n);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {
        this.sdk.showQRCode();
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {}, t.prototype.enterGame = function() {
        this.upLoadInfo("enterGame");
    }, t.prototype.upLevel = function() {
        this.upLoadInfo("upgrade");
    }, t.prototype.selectServer = function() {}, t.prototype.upLoadInfo = function(t) {
        var e = {}, o = Global.base;
        e.eventName = t, e.roleId = o.playerId, e.roleName = o.playerName, e.roleLevel = o._level, 
        e.vipLevel = o.vipLv, e.serverId = o.serverId, e.serverName = o.serverId + "", this.sdk.cusEvent(e);
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_H5SiLang.prototype, "Sdk_H5SiLang", [ "ISdk" ]);

var Sdk_PCQzone = function() {
    function t() {
        this.isGetUserInfo = !1;
    }
    return t.prototype.setSDK = function() {
        this.sdk = window.GameAPI, this.v = new PlatformPcQzone();
        var t = this.sdk.Aux;
        this.v.openid = t.get_http_param("openid"), this.v.openkey = t.get_http_param("openkey"), 
        this.v.pf = t.get_http_param("pf"), this.v.pfkey = t.get_http_param("pfkey"), this.v.appid = t.get_http_param("appid"), 
        this.v.appkey = t.get_http_param("appkey"), console.info("[QQ大厅]登陆参数：", JSON.stringify(this.v));
        var e = this.getParam();
        HttpHelper.qzonePCReq("/qqdt_v3_user_is_login", e, this.loginRsp, this);
    }, t.prototype.loginRsp = function(t) {
        console.info("[QQ大厅]登陆返回：", t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        e && e.is_ok && this.getUseInfo();
    }, t.prototype.initSDK = function() {}, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {
        console.info("[QQ大厅]web参数：", JSON.stringify(t));
    }, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.jsonId, t.amount ], o = e.join("|"), i = (Global.base, 
        {});
        i.openid = this.v.openid, i.openkey = this.v.openkey, i.pf = this.v.pf, i.pfkey = this.v.pfkey;
        var n = 10 * parseInt(t.amount);
        i.payitem = t.jsonId + "*" + n + "*1", i.goodsmeta = t.desc + "*" + t.desc, i.goodsurl = "https://huihecdn.h5gamecdn.club/huihe_weixin/share/qqgamePayIcon.png", 
        i.appmode = o, HttpHelper.qzonePCReq("/qqdt_v3_pay_buy_goods", i, this.payRsp, this);
    }, t.prototype.payRsp = function(t) {
        console.info("[QQ大厅]支付返回：", t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        e && e.is_ok && (this.v.token = e.token, this.v.url_params = e.url_params, this.BuyBox(this.v.url_params, e.sandbox, "充值"));
    }, t.prototype.NewOpenGameVIPService = function(t, e) {
        var o = "VIP.APP" + this.v.appid + ".PLATqqgamemini", i = this;
        this.sdk.NewOpenGameVIPService.show(this.v.appid, function() {
            i.getBlueVipInfo();
        }, o, t, e);
    }, t.prototype.BuyBox = function(t, e, o) {
        this.sdk.BuyBox.show(this.v.appid, t, e, o, function() {
            console.info("取消支付");
        }, function() {
            console.info("支付成功");
        });
    }, t.prototype.setBlueVipInfoCallback = function(t, e) {
        this.getBlueVipInfoFun = t, this.getBlueVipInfoFunThis = e;
    }, t.prototype.getUseInfo = function() {
        var t = this.getParam();
        HttpHelper.qzonePCReq("/qqdt_v3_user_get_info", t, this.getUseInfoRsp, this);
    }, t.prototype.getUseInfoRsp = function(t) {
        console.info("[QQ大厅]qqdt_v3_user_get_info：", t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        e.is_ok && (this.v.is_blue_vip = e.blue, this.v.blue_vip_level = e.bluelv || 0, 
        this.v.is_blue_year_vip = e.yearblue, this.v.is_super_blue_vip = e.superblue, this.v.Nickname = e.nickname || "", 
        this.v.tm = e.tm, this.v.code = e.code, this.isGetUserInfo || (this.isGetUserInfo = !0, 
        Global.main.InitLogin()), null != this.getBlueVipInfoFun && this.getBlueVipInfoFun.call(this.getBlueVipInfoFunThis));
    }, t.prototype.getBlueVipInfo = function() {
        this.getUseInfo();
    }, t.prototype.getUserBlueVipInfo = function() {
        var t = this.getParam();
        HttpHelper.qzonePCReq("/qqdt_v3_user_blue_vip_info", t, this.blueVipInfoRsp, this);
    }, t.prototype.blueVipInfoRsp = function(t) {}, t.prototype.getParam = function() {
        var t = {};
        return t.openid = this.v.openid, t.openkey = this.v.openkey, t.pf = this.v.pf, t;
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {
        this.sdk.showQRCode();
    }, t.prototype.setFollowCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.upLoadInfo(2);
    }, t.prototype.enterGame = function() {
        this.upLoadInfo(1);
    }, t.prototype.upLevel = function() {
        this.upLoadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.upLoadInfo = function(t) {}, 
    t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.prototype.checkMsg = function(t, e, o) {
        var i = {};
        i.openid = this.v.openid, i.openkey = this.v.openkey, i.data = JSON.stringify({
            text_list_: [ {
                text_: t,
                text_scene_: 2
            } ]
        }), HttpHelper.qzonePCReq("/qqdt_v3_user_uic_filter", i, function(i) {
            var n, r = JSON.parse(i.currentTarget.response), s = !0;
            r.data && (n = JSON.parse(r.data));
            var a = "";
            if (!r.is_ok || !n || 0 != n.ret || !n.text_result_list_ || n.text_result_list_.length < 1) s = !1; else {
                var h = n.text_result_list_[0];
                0 == h.check_ret_ ? (a = t, s = !0) : a = 2 == h.punish_type_ ? h.result_text_ : "***";
            }
            e.apply(o, [ s, a ]);
        }, this);
    }, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_PCQzone.prototype, "Sdk_PCQzone", [ "ISdk" ]);

var Sdk_QQWanba = function() {
    function t() {
        this.openkeyTime = -1e10, this.payTime = 0, this.shareImgArr = [ "https://huihecdn.h5gamecdn.club/wxjson/share/9.jpg", "https://huihecdn.h5gamecdn.club/wxjson/share/10.jpg", "https://huihecdn.h5gamecdn.club/wxjson/share/11.jpg" ], 
        this.iconURL = "", this.descStr = "经典西游，无限洗宝宝，高概率洗出满资质满技能", this.reqQzoneScoreTime = 0;
    }
    return t.prototype.initPayCb = function() {
        window.__payError = this.payError.bind(this), window.__payClose = this.payClose.bind(this);
    }, t.prototype.setSDK = function() {
        this.sdk = window.mqq, this.v = new PlatformVOQzone(), this.gmDataObj = {}, this.iconURL = this.getIcon(), 
        window.__paySuccess = this.paySuccess.bind(this), this.initPayCb(), this.initOpenKey(), 
        Common.timer.doTimer(1e3, 0, this.onTick, this);
        var t = window.OPEN_DATA;
        null != t ? (this.v.platform = t.platform, 1 != this.v.platform && 2 != this.v.platform && (this.v.platform = 1), 
        this.v.pf = t.pf, this.v.jumpurl = t.jumpurl, this.v.shareurl = t.shareurl, t.qua && t.qua.app ? this.v.qua = t.qua : this.v.qua = {
            app: "QZ",
            meybeQua: "V1_AND_QZ_6.5.1_288_YYB_D"
        }) : (this.v.platform = 1, this.v.pf = "wanba_ts"), this.setScreenStatus(), this.sdk && this.sdk.invoke && this.sdk.invoke("ui", "setOnAddShortcutHandler", {
            callback: this.sdk.callback(this.addShortcut.bind(this), !1, !0)
        }), this.sdk && this.sdk.ui && this.sdk.ui.setOnShareHandler(this.shareQzone.bind(this)), 
        document.addEventListener("qbrowserVisibilityChange", function(t) {
            if (t.hidden) for (var e = document.querySelectorAll(".egret-player"), o = e.length, i = 0; o > i; i++) {
                var n = e[i];
                if (n) {
                    var r = n["egret-player"];
                    r && r.player.pause();
                }
            } else for (var e = document.querySelectorAll(".egret-player"), o = e.length, i = 0; o > i; i++) {
                var n = e[i];
                if (n) {
                    var r = n["egret-player"];
                    r && r.player.start();
                }
            }
        });
    }, t.prototype.canIShow = function(t) {
        return this.sdk.data.canIShow(t);
    }, t.prototype.getGameName = function() {
        return window.WANBA_GAME_NAME || "梦幻甬城";
    }, t.prototype.getIcon = function() {
        return window.WANBA_ICON || "https://huihecdn.h5gamecdn.club/wxjson/share/wanba_icon.jpg";
    }, t.prototype.getShareImage = function() {
        var t = window.WANBA_SHARE_IMAGE_ARR || this.shareImgArr;
        return this.random(t);
    }, t.prototype.random = function(t) {
        if (!t) return null;
        var e = t.length, o = Math.floor(Math.random() * e);
        return o >= e && (o = e - 1), t[o];
    }, t.prototype.shareQzone = function(t) {
        this.shareMessage(this.getGameName(), this.descStr, t, function() {
            console.info("分享回调");
        }, this);
    }, t.prototype.shareMessage = function(t, e, o, i, n) {
        this.sdk.ui.shareMessage({
            title: t,
            desc: e,
            share_type: o,
            share_url: this.v.shareurl,
            image_url: this.getShareImage(),
            back: !0
        }, function(t) {
            0 == t.retCode && i.apply(n);
        });
    }, t.prototype.addShortcut = function() {
        if (this.sdk) {
            2 == this.v.platform && (this.v.addShortcut = !0, this.follwFun && this.follwFun.call(this.follwFunThis));
            var t = this;
            this.sdk.ui.addShortcut({
                action: "web",
                title: this.getGameName(),
                icon: this.iconURL,
                url: this.v.jumpurl,
                callback: function(e) {
                    0 == e.result ? (t.v.addShortcut = !0, t.follwFun && t.follwFun.call(t.follwFunThis)) : -4 != e.result && t.showTips("收藏失败");
                }
            });
        }
    }, t.prototype.setScreenStatus = function() {
        this.sdk && this.sdk.device && this.sdk.device.setScreenStatus && this.sdk.device.setScreenStatus({
            status: 1
        }, function(t, e) {
            console.info("设置屏幕常亮：" + t + e);
        });
    }, t.prototype.paySuccess = function() {
        console.info("支付成功:", this.payJsonId), this.showTips("支付成功");
    }, t.prototype.payError = function() {
        console.info("支付失败"), this.showTips("支付失败");
    }, t.prototype.payClose = function() {
        this.showTips("支付取消"), console.info("支付取消");
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.reqQzoneScore = function() {
        return egret.getTimer() - this.reqQzoneScoreTime >= 3e3 ? (this.wanba_get_score(), 
        this.reqQzoneScoreTime = egret.getTimer(), !0) : !1;
    }, t.prototype.initWebURLParam = function(t) {
        t && t.GIFT && (this.v.giftId = parseInt(t.GIFT));
    }, t.prototype.onTick = function() {
        this.initOpenKey();
    }, t.prototype.initOpenKey = function() {
        egret.getTimer() - this.openkeyTime > 66e5 && window.getOpenKey(this.initParam.bind(this));
    }, t.prototype.initParam = function(t) {
        if (0 != t.code) return void console.info("param error");
        console.info("initParam:", t), this.v.appid = t.data.appid, this.v.openid = t.data.openid;
        var e = !1;
        this.v.openkey != t.data.openkey && (this.openkeyTime = egret.getTimer(), e = null != this.v.openkey), 
        this.v.openkey = t.data.openkey;
        var o = !this.v.inited;
        this.v.inited = !0, o && Global.main.InitLogin();
    }, t.prototype.pay = function(t) {
        if (!this.canIShow("pay")) return void this.showTips("不支持支付");
        if (this.payTime > 0 && egret.getTimer() - this.payTime < 5e3) return void this.showTips("支付中，请稍等");
        this.payTime = egret.getTimer();
        var e = t.payItemId + "", o = e.split("_");
        1 == this.v.platform ? (this.payItemid = o[0], console.info("安卓支付ID：", this.payItemid)) : (o.length > 1 ? this.payItemid = o[1] : this.payItemid = "0", 
        console.info("IOS支付ID：", this.payItemid)), this.payJsonId = t.jsonId, this.payScore = 10 * t.amount, 
        console.info("准备充值 - 查询星币"), 0 == this.reqQzoneScore() && this.pay1();
    }, t.prototype.cancelPay = function() {
        this.payTime = 0;
    }, t.prototype.wanba_pay = function(t, e, o) {
        var i = {};
        i.appid = this.v.appid, i.openid = this.v.openid, i.openkey = this.v.openkey, i.pf = this.v.pf, 
        i.zoneid = this.v.platform, i.itemid = t, i.playerId = Global.base.playerId, i.cost = e, 
        i.rechargeId = o, HttpHelper.qzonePCReq("/wanba_pay", i, this.wanba_payRsp, this);
    }, t.prototype.wanba_payRsp = function(t) {
        console.info("[玩吧]wanba_pay回：", t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        e && e.is_ok, this.cancelPay();
    }, t.prototype.wanba_get_score = function() {
        var t = {};
        t.appid = this.v.appid, t.openid = this.v.openid, t.openkey = this.v.openkey, t.pf = this.v.pf, 
        t.zoneid = this.v.platform, HttpHelper.qzonePCReq("/wanba_get_score", t, this.wanba_get_scoreRsp, this);
    }, t.prototype.wanba_get_scoreRsp = function(t) {
        console.info("[玩吧]wanba_get_score回：", t.currentTarget.response);
        var e = JSON.parse(t.currentTarget.response);
        e && e.is_ok && (this.v.qzoneScore = e.score || 0), this.pay1();
    }, t.prototype.pay1 = function() {
        this.pay2();
    }, t.prototype.pay2 = function() {
        var t = this.payScore - this.v.qzoneScore;
        0 >= t ? (console.info("扣款:", this.payItemid, this.payScore, this.payJsonId), this.wanba_pay(this.payItemid, this.payScore, this.payJsonId)) : null != window.popPayTips ? (this.initPayCb(), 
        console.info("充值金额:", this.payScore), window.popPayTips({
            defaultScore: this.payScore,
            appid: this.v.appid
        }), this.cancelPay()) : (this.cancelPay(), this.showTips("支付错误"));
    }, t.prototype.showTips = function(t) {
        window.showGameTip ? window.showGameTip(t) : this.sdk.ui.showTips({
            text: t,
            iconMode: 2
        });
    }, t.prototype.createRole = function() {
        window.reportRegister && window.reportRegister();
    }, t.prototype.ready = function(t) {}, t.prototype.upLevel = function() {}, t.prototype.selectServer = function() {}, 
    t.prototype.enterGame = function() {
        window.reportLogin && window.reportLogin();
    }, t.prototype.hasFollow = function() {
        return this.canIShow("favoritesToDesktop");
    }, t.prototype.onFollow = function(t) {
        this.addShortcut();
    }, t.prototype.setFollowCallBack = function(t, e) {
        this.follwFun = t, this.follwFunThis = e;
    }, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        this.sdk && this.sdk.ui && null != this.sdk.ui.showShareMenu && (this.v.isQzoneApp() ? this.shareMessage(this.getGameName(), this.descStr, 1, function() {}, this) : this.sdk.ui.showShareMenu());
    }, t.prototype.setShareCallBack = function(t, e) {}, t.prototype.hasShortcut = function() {
        return !0;
    }, t.prototype.onShortcut = function() {
        this.addShortcut();
    }, t.prototype.hasInvite = function() {
        return !0;
    }, t.prototype.onInvite = function(t) {}, t.prototype.gmData = function() {
        return this.gmDataObj;
    }, t.prototype.openYellowMonthURL = function() {
        var t = "https://h5.qzone.qq.com/hybrid/app/vip/payIapLuxury?_proxy=1&_wv=3&aid=cp-" + this.v.appid;
        1 == this.v.platform && (t = "https://pay.qq.com/h5/index.shtml?_wv=3&m=buy&c=xxjzghh&hh=1&ap=1&n=3&aid=cp-" + this.v.appid), 
        this.sdk.invoke("ui", "openUrl", {
            url: t,
            target: 1,
            style: 1
        });
    }, t.prototype.openYellowYearURL = function() {
        var t = "https://h5.qzone.qq.com/hybrid/app/vip/payIapLuxury?_proxy=1&_wv=3&aid=cp-" + this.v.appid;
        1 == this.v.platform && (t = "https://pay.qq.com/h5/index.shtml?_wv=3&m=buy&c=xxjzghh&hh=1&ap=1&n=12&da=1&aid=cp-" + this.v.appid), 
        this.sdk.invoke("ui", "openUrl", {
            url: t,
            target: 1,
            style: 1
        });
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_QQWanba.prototype, "Sdk_QQWanba", [ "ISdk" ]);

var Sdk_WxYyw = function() {
    function t() {}
    return t.prototype.setSDK = function() {
        this.sdk = window.SDKyyw, this.v = new PlatformWxSmz();
        var t = this;
        this.alertWX(), this.sdk.initLoginCallback = function(e) {
            "ok" == e.msg ? (t.v.uid = e.data.uid, t.v.timeStamp = e.data.timeStamp, t.v.sign = e.data.sign, 
            t.v.paySwitch = e.data.paySwitch, t.initSuc()) : (console.info("初始化失败", e.status, e.msg), 
            setTimeout(function() {
                t.initSDK();
            }, 500));
        }, this.initSDK(), this.sdk.onPayCallback = function(t) {
            console.info("支付回调：", t);
        };
    }, t.prototype.alertWX = function() {
        window.alert = function(t) {
            var e = window.wx;
            e && e.showToast && e.showToast({
                title: t ? t : "",
                icon: "none",
                duration: 2e3
            });
        };
    }, t.prototype.initSDK = function() {
        var t = "c258b91508c1fa5d699fd83c1a58adc5", e = "1000098";
        window.smzAppKey && (t = window.smzAppKey), window.smzAppId && (e = window.smzAppId), 
        this.v.appid = e, this.v.appKey = t, console.info("初始化 appId:", e, " appKey:", t), 
        this.sdk.init(e, t);
    }, t.prototype.initSuc = function() {
        Global.main.InitLogin();
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = Global.base, n = {};
        n.serverId = i.serverId, n.serverName = i.serverId + "", n.roleId = i.playerId + "", 
        n.roleName = i.playerName, n.roleLevel = i._level + "", n.gameOrderid = I_md5.hex_md5(o), 
        n.pext = o, n.money = t.amount, n.productName = t.desc, n.productId = t.goodsId, 
        console.info("pay:", JSON.stringify(n)), this.sdk.pay(n);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        var t = {};
        t.type = 2, t.roleId = Global.base.playerId, t.roleName = Global.base.playerName, 
        this.sdk.pushData(t);
    }, t.prototype.enterGame = function() {
        var t = {};
        t.type = 1, t.roleId = Global.base.playerId, t.roleName = Global.base.playerName, 
        this.sdk.pushData(t), Common.timer.doTimer(1e4, 0, this.onTick, this);
    }, t.prototype.upLevel = function() {
        var t = {};
        t.type = 4, t.roleId = Global.base.playerId, t.roleName = Global.base.playerName, 
        t.serverId = Global.base.serverId, t.level = Global.base._level, this.sdk.pushData(t);
    }, t.prototype.online = function() {
        var t = {};
        t.type = 5, t.roleId = Global.base.playerId, t.roleName = Global.base.playerName, 
        t.serverId = Global.base.serverId, this.sdk.pushData(t);
    }, t.prototype.selectServer = function() {}, t.prototype.onTick = function() {
        this.online();
    }, t.prototype.upLoadInfo = function(t) {}, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.prototype.checkMsg = function(t, e, o) {
        this.sdk.msgSecCheck(t, function(t) {
            0 == t.errcode ? e.apply(o, [ "ok" == t.errmsg ]) : e.apply(o, [ !1 ]);
        });
    }, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_WxYyw.prototype, "Sdk_WxYyw", [ "ISdk" ]);

var Sdk_8827wan = function() {
    function t() {}
    return t.prototype.setSDK = function() {
        this.sdk = window.xgGame, this.v = new Platform8827wan();
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {
        t && (this.v.channelExt = t.channelExt, this.v.email = t.email, this.v.game_appid = t.game_appid, 
        this.v.new_time = t.new_time, this.v.loginplatform2cp = t.loginplatform2cp, this.v.user_id = t.user_id, 
        this.v.sdklogindomain = t.sdklogindomain, this.v.sdkloginmodel = t.sdkloginmodel, 
        this.v.sign = t.sign, this.v.game_key = window.game_key_8827wan || "a97ca2e794375cf724971fdb92bf62c4");
    }, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, t.uid ], o = e.join("|"), i = {};
        i.amount = 100 * t.amount, i.channelExt = this.v.channelExt, i.game_appid = this.v.game_appid, 
        i.props_name = t.desc, i.trade_no = I_md5.hex_md5(o), i.user_id = this.v.user_id, 
        i.sdkloginmodel = this.v.sdkloginmodel, i.sign = this.sign(i), i.server_id = Global.base.serverId, 
        i.server_name = Global.base.serverId + "", i.role_id = Global.base.playerId, i.role_name = Global.base.playerName, 
        console.info("支付参数：", JSON.stringify(i)), this.sdk.h5paySdk(i, function(t) {});
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.setShareCallBack = function(t, e) {}, 
    t.prototype.gmData = function() {
        return {};
    }, t.prototype.ready = function(t) {}, t.prototype.createRole = function() {
        this.upLoadInfo(2);
    }, t.prototype.enterGame = function() {
        this.upLoadInfo(1);
    }, t.prototype.upLevel = function() {
        this.upLoadInfo(3);
    }, t.prototype.selectServer = function() {}, t.prototype.upLoadInfo = function(t) {
        var e = Global.base, o = this.v, i = {
            user_id: o.user_id,
            game_appid: o.game_appid,
            server_id: parseInt(e.serverId),
            server_name: e.serverId + "",
            role_id: e.playerId,
            role_name: e.playerName,
            level: parseInt(e._level)
        };
        i.sign = this.sign(i), console.info("上传信息：" + JSON.stringify(i)), this.sdk.jointCreateRole(JSON.stringify(i));
    }, t.prototype.sign = function(t) {
        var e = Object.keys(t);
        e.sort(function(t, e) {
            return t == e ? 0 : t > e ? 1 : -1;
        });
        for (var o = e.length, i = "", n = 0; o > n; n++) {
            var r = t[e[n]];
            n > 0 && (i += "&"), i += e[n] + "=" + r;
        }
        return i += this.v.game_key, i = I_md5.hex_md5(i);
    }, t.prototype.hasCheckMsg = function() {
        return !1;
    }, t.prototype.checkMsg = function(t, e, o) {}, t.prototype.getDeviceInfo = function() {
        return null;
    }, t;
}();

__reflect(Sdk_8827wan.prototype, "Sdk_8827wan", [ "ISdk" ]);

var Sdk_WD_ChaoMeng = function(t) {
    function e() {
        var e = t.call(this) || this;
        return console.info("[微端][超梦]"), e;
    }
    return __extends(e, t), e.prototype.rspLoginHandler = function(t) {
        if (Sdk_WD._rspLoginHandler) return void console.error("已调用过登陆了");
        Sdk_WD._rspLoginHandler = !0;
        var e = JSON.parse(t), o = Global.sdk.getWdSdk().getValue();
        o.userId = e.userId, o.token = e.token, console.info("[微端][h5]登录返回> userId:" + e.userId + " token:" + e.token), 
        Global.main.InitLogin();
    }, e;
}(Sdk_WD);

__reflect(Sdk_WD_ChaoMeng.prototype, "Sdk_WD_ChaoMeng");

var Sdk_WX_XingHeYue_Game = function() {
    function t() {
        this.findPayArr = [];
    }
    return t.prototype.setSDK = function(t) {
        this.sdk = window.huoSdk, this.v = new PlatformWxHuoSDKVO(), this.v.channel = "xingheyue", 
        this.v.cname = "xingheyue", Common.timer.doTimer(1e3, 0, this.findPay, this);
    }, t.prototype.checkMsg = function(t, e, o) {
        this.sdk.checkMsg({
            data: {
                content: t
            }
        }).then(function(t) {
            console.info("敏感字检查：", t.msg == Sdk_WX_Huoshu_Game.success), e.apply(o, [ t.msg == Sdk_WX_Huoshu_Game.success ]);
        }, function(t) {
            e.apply(o, [ !1 ]), console.info("敏感字检查：false");
        });
    }, t.prototype.login = function(t, e) {
        var o = this, i = Global.wx.getLaunchOptionsSync(), n = this.sdk, r = this.v;
        console.log("[星河月sdk][init]发送参数：app_id:", WindowData.GetXhySdkAppID(), " mp_id:", WindowData.GetXhySdkMPID()), 
        n.init({
            app_id: WindowData.GetXhySdkAppID(),
            mp_id: WindowData.GetXhySdkMPID()
        }).then(function(s) {
            if (s.msg == Sdk_WX_Huoshu_Game.fail) return void console.log("[星河月sdk][init]:失败");
            console.log("[星河月sdk][init]:", s);
            var a = {
                state: i.query ? i.query.state || i.query.scene || "" : ""
            };
            console.log("[星河月sdk][login]:发送参数：", a), n.login({
                data: a
            }).then(function(i) {
                return i.msg != Sdk_WX_Huoshu_Game.success ? void console.log("[星河月sdk][login]:失败", i) : (console.log("[星河月sdk][login]:", i), 
                r.loginData = i.data, r.openId || (r.openId = "o91YR5c3qn4iwYxwqfb5K_L8xZ7c"), t.apply(e), 
                void o.shareHuoSdk());
            });
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        this.payHuoSdk(t);
    }, t.prototype.payHuoSdk = function(t) {
        var e = this, o = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.openId, t.amount ], i = o.join("|"), n = {
            "order-currency": "CNY",
            "order-cp_order_id": t.cpOrderNo,
            "order-product_price": parseInt(t.amount),
            "order-product_id": t.goodsId,
            "order-product_cnt": parseInt(t.count),
            "order-product_name": t.subject,
            "order-product_desc": t.desc,
            "order-ext": i,
            "role-event": "",
            "role-server_id": Global.base.serverId,
            "role-server_name": Global.base.serverId + "服",
            "role-role_id": t.userRoleId,
            "role-role_name": t.userRoleName,
            "role-role_level": parseInt(t.userLevel),
            "role-role_vip": parseInt(t.vipLevel)
        };
        console.log("[星河月sdk][checkPay] 发送参数:", n), this.sdk.pay({
            data: n
        }).then(function(t) {
            if (t.msg != Sdk_WX_Huoshu_Game.success) console.log("[星河月sdk][checkPay] 失败:", t); else {
                console.log("[星河月sdk][checkPay] 成功:", t), t.data && t.data.order_id && e.findPayArr.push({
                    id: t.data.order_id,
                    num: 0,
                    time: -2e5
                });
                var o = t.poster_img;
                if (!o && t.data && (o = t.data.poster_img), o) {
                    var i = window.wx;
                    i.previewImage({
                        urls: [ o ]
                    }), e.hideLoading();
                } else if (t.data.image && "2" == t.data.pay_type) {
                    e.hideLoading();
                    var i = window.wx;
                    i.previewImage({
                        urls: [ t.data.image ]
                    });
                }
            }
        });
    }, t.prototype.__mergeImg = function(t) {
        var e = window.wx, o = this, i = e.getSystemInfoSync(), n = i.windowWidth, r = i.windowHeight;
        e.showLoading({
            title: "支付中"
        }), e.downloadFile({
            url: "https://huihecdn.h5gamecdn.club/wxjson/mini/paybg.jpg",
            success: function(i) {
                this.mergeCanvas || (this.mergeCanvas = e.createCanvas("shareCanvas"));
                var s = this.mergeCanvas, a = s.getContext("2d");
                a.fillRect(0, 0, n, r), a.fillStyle = "#2DAB5A";
                var h = e.createImage();
                h.src = i.tempFilePath, h.onload = function() {
                    a.fillRect(0, 0, n, r), a.drawImage(h, n - h.width >> 1, r - h.height >> 1, h.width, h.height);
                    var i = e.createImage();
                    i.src = t, i.onload = function() {
                        var t = 320, h = Math.floor(t / i.width * i.height);
                        a.drawImage(i, n - t >> 1, (r - h >> 1) - 20, t, h), s.toTempFilePath({
                            success: function(t) {
                                var i = t.tempFilePath;
                                e.previewImage({
                                    urls: [ i ]
                                }), o.hideLoading(), a.clearRect(0, 0, n, r);
                            },
                            fail: function(t) {
                                o.hideLoading(), a.clearRect(0, 0, n, r);
                            }
                        });
                    }, i.onerror = function() {
                        o.hideLoading();
                    };
                }, h.onerror = function() {
                    o.hideLoading();
                };
            },
            fail: function(t) {
                o.hideLoading();
            }
        });
    }, t.prototype.hideLoading = function() {
        window.wx.hideLoading();
    }, t.prototype.findPay = function() {
        for (var t, e = function(e) {
            var i = o.findPayArr[e];
            egret.getTimer() - i.time > 4e3 && (i.num >= 20 && (i.del = !0), i.num++, i.time = egret.getTimer(), 
            console.info("[星河月sdk]查询订单：", i.id), o.sdk.payQuery({
                data: {
                    "order-order_id": i.id
                },
                conf: {
                    showLoading: !1
                }
            }).then(function(t) {
                !t.data || 3 != t.data.status && 2 != t.data.cp_status || (i.del = !0);
            })), i.del && (o.findPayArr.splice(e, 1), e--), t = e;
        }, o = this, i = 0; i < this.findPayArr.length; i++) e(i), i = t;
    }, t.prototype.updateRole = function(t) {
        var e = {
            "role-event": t,
            "role-server_id": Global.base.serverId,
            "role-server_name": Global.base.serverId + "服",
            "role-role_id": Global.base.playerId,
            "role-role_name": Global.base.playerName,
            "role-role_level": parseInt(Global.base._level),
            "role-role_vip": parseInt(Global.base.vipLv),
            "role-combat_num": parseInt(Global.base.power),
            "role-onlineTime": 0,
            "role-scene": "",
            "role-axis": ""
        };
        console.log("[星河月sdk][数据上报] 发送参数:", e), this.sdk.updateRoleInfo({
            data: e
        }).then(function(e) {
            console.log("[星河月sdk]数据上报成功>", t);
        }, function(e) {
            console.log("[星河月sdk]数据上报失败>", t);
        });
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {
        this.shareObj ? (window.wx.shareAppMessage({
            title: this.shareObj.title,
            imageUrl: this.shareObj.image,
            query: "state=" + this.shareObj.state
        }), this.addShareInfo()) : Global.wx.onShareApp(!0), null != this.shareCb && this.shareCb.apply(this.shareCbThis);
    }, t.prototype.shareHuoSdk = function() {
        var t = this.sdk, e = this;
        t.getShareInfo({
            data: {
                path: window.__CONFIG__.__RES_URL__ + "share/"
            }
        }).then(function(t) {
            e.shareObj = t.data, console.log("[星河月sdk][getShareInfo]注册分享:", t), t.msg == Sdk_WX_Huoshu_Game.success ? (window.wx.onShareAppMessage(function() {
                return e.addShareInfo(), console.log("[星河月sdk][分享]:", t), {
                    title: t.data.title,
                    imageUrl: t.data.image,
                    query: "state=" + t.data.state
                };
            }), window.wx.showShareMenu()) : Global.wx.initShareMenu();
        });
    }, t.prototype.addShareInfo = function() {
        this.sdk.updateShareInfo({
            data: {
                to_target: "wx"
            }
        }), console.log("[星河月sdk]分享上报");
    }, t.prototype.setShareCallBack = function(t, e) {
        this.shareCb = t, this.shareCbThis = e;
    }, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole("create");
    }, t.prototype.enterGame = function() {
        this.updateRole("online");
    }, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {}, 
    t.prototype.upLevel = function() {
        this.updateRole("levelup");
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().openId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t.success = "success", t.fail = "fail", t;
}();

__reflect(Sdk_WX_XingHeYue_Game.prototype, "Sdk_WX_XingHeYue_Game", [ "ISdk" ]);

var Sdk_WX_FXM_Game = function() {
    function t() {}
    return t.prototype.setSDK = function(t) {
        this.sdk = window.xiyouSDK, this.v = new PlatformWxFxmVO(), this.login();
    }, t.prototype.checkMsg = function(t, e, o) {
        this.sdk.msgSecCheck({
            content: t
        }, function(t) {
            console.info("敏感字检查：", t.msg == Sdk_WX_Huoshu_Game.success), e.apply(o, [ t.msg == Sdk_WX_Huoshu_Game.success ]);
        });
    }, t.prototype.login = function() {
        var t = this.v;
        this.sdk.login(function(e) {
            if ("success" == e.msg) {
                var o = e.data.OpenId, i = e.data.Channel, n = e.data.ChannelFromi;
                t.OpenId = o, t.Channel = i, t.ChannelFromid = n, Global.main.InitLogin();
            }
        });
    }, t.prototype.getValue = function() {
        return this.v;
    }, t.prototype.initParam = function(t) {}, t.prototype.pay = function(t) {
        var e = [ t.userRoleId, t.userRoleName, Math.floor(new Date().getTime() / 1e3), t.userServer, t.goodsId, this.v.OpenId, t.amount ], o = {};
        o.cash = parseInt(t.amount), o.serverId = Global.base.serverId, o.goodsname = t.desc, 
        o.remark = e.join("|"), o.cpOrderId = I_md5.hex_md5(o.remark), o.playerName = Global.base.playerName, 
        console.log("支付参数:", JSON.stringify(o)), this.sdk.pay(o);
    }, t.prototype.hideLoading = function() {
        window.wx.hideLoading();
    }, t.prototype.updateRole = function(t) {
        var e = {};
        e.type = t, e.playerId = Global.base.playerId + "", e.playerName = Global.base.playerName, 
        e.serverId = Global.base.serverId + "", e.level = Global.base._level + "", e.vip = Global.base.vipLv + "", 
        e.fight = Global.base.power + "", e.guildName = Global.base._guildName || "", this.sdk.uploadInfo(e);
    }, t.prototype.hasFollow = function() {
        return !1;
    }, t.prototype.onFollow = function(t) {}, t.prototype.setFollowCallBack = function(t, e) {}, 
    t.prototype.hasShortcut = function() {
        return !1;
    }, t.prototype.onShortcut = function() {}, t.prototype.hasInvite = function() {
        return !1;
    }, t.prototype.onInvite = function(t) {}, t.prototype.hasShare = function() {
        return 3;
    }, t.prototype.onShare = function(t) {}, t.prototype.addShareInfo = function() {
        this.sdk.addShareInfo({
            data: {
                to_target: "wx"
            }
        }), console.log("[火树sdk]分享上报");
    }, t.prototype.setShareCallBack = function(t, e) {}, t.prototype.gmData = function() {
        return {};
    }, t.prototype.createRole = function() {
        this.updateRole(1);
    }, t.prototype.enterGame = function() {}, t.prototype.ready = function(t) {}, t.prototype.selectServer = function() {
        this.updateRole(3);
    }, t.prototype.upLevel = function() {
        this.updateRole(2);
    }, t.prototype.getDeviceInfo = function() {
        return this.deviceInfo || (this.deviceInfo = {}), this.deviceInfo.imei = this.getValue().OpenId, 
        this.deviceInfo;
    }, t.prototype.hasCheckMsg = function() {
        return !0;
    }, t;
}();

__reflect(Sdk_WX_FXM_Game.prototype, "Sdk_WX_FXM_Game", [ "ISdk" ]);

var GameServerData = function() {
    function t() {}
    return t.HasRecentSvr = function() {
        return t.PageData && t.PageData[0] && t.PageData[0].datas && t.PageData[0].datas.length ? !0 : !1;
    }, t.Init = function(e, o, i) {
        this.MaxId = e;
        var n = new GameServerPageData();
        n.name = "最近登录", n.index = 0, n.datas = o, t.PageData.push(n);
        for (var r = Math.max(Math.ceil(e / t.PAGE_COUNT), 1), s = r; s >= 1; --s) {
            var a = new GameServerPageData();
            a.name = (s - 1) * t.PAGE_COUNT + 1 + " - " + s * t.PAGE_COUNT + "服", a.index = s, 
            a.datas = [], t.PageData.push(a);
        }
        t.PageData[1].datas = i, null != o && o.length > 0 && (t.SelectData = o[0]), null == t.SelectData && null != i && i.length > 0 && (t.SelectData = i[0]);
    }, t.GetPageData = function(t) {
        HttpHelper.GetServerList(t, this._DoPageData, this);
    }, t._DoPageData = function(e, o) {
        var i = JSON.parse(o.currentTarget.response), n = i.data, r = [];
        for (var s in n) {
            var a = n[s];
            if (!Global.onlyShow1Server() || 1 == a.sid) {
                var h = GameServerDescData.Get(a);
                h && (r.push(h), t.setCanEnterData(h.ip, h.id, h.version));
            }
        }
        r.sort(function(t, e) {
            return e.id - t.id;
        });
        for (var p = 0, d = t.PageData; p < d.length; p++) {
            var l = d[p];
            if (l.index == e) {
                l.datas = r;
                break;
            }
        }
        t.Callback && t.ThisObject && t.Callback.call(t.ThisObject, e);
    }, t.setCanEnterData = function(e, o, i) {
        this.canEnterData[e + "_" + o] = t.createLimit <= i;
    }, t.getCanEnterData = function(t, e) {
        return this.canEnterData[t + "_" + e] || this.getRecentData(t, e) || Global.onlyShow1Server() && 1 == e;
    }, t.setRecentDicData = function(t, e) {
        this.recentDicData[t + "_" + e] = !0;
    }, t.getRecentData = function(t, e) {
        return this.recentDicData[t + "_" + e];
    }, t.PAGE_COUNT = 20, t.PageData = [], t.SelectData = null, t.Callback = null, t.ThisObject = null, 
    t.canEnterData = {}, t.createLimit = 0, t.recentDicData = {}, t;
}();

__reflect(GameServerData.prototype, "GameServerData");

var GameServerPageData = function() {
    function t() {}
    return t;
}();

__reflect(GameServerPageData.prototype, "GameServerPageData");

var GameServerDescData = function() {
    function t() {}
    return t.prototype.GetStatus = function() {
        return 1 == this.status || 3 == this.status ? 1 : 2 == this.status || 4 == this.status ? 2 : 0;
    }, t.prototype.CanEnter = function(t) {
        if (t && !this.status) return !1;
        if (Main.Instance.GmLevel) return !0;
        if (!this.version) return !0;
        var e = new Date().getTime() / 1e3;
        return this.version > e ? !1 : 1 == this.status || 2 == this.status;
    }, t.Get = function(e, o) {
        if (void 0 === o && (o = !1), !o && 0 == e.status && !Main.Instance.GmLevel) return null;
        var i = new t();
        return i.id = e.sid, i.name = WindowData._GetServerName(e.sid), i.ip = e.addr, i.status = e.status, 
        i.version = e.version, i.CanEnter(!1) ? i : null;
    }, t;
}();

__reflect(GameServerDescData.prototype, "GameServerDescData");

var Wx = function() {
    function t() {
        this.wxversion = 0, this.wxos = "", this.refAppid = "", this.flagTime = -1, this.clientIp = "", 
        this.blockchannel = [], this.forceHide = !1, this.showLevel = -1, this.channel = "", 
        this.tVec = [ "好嗨哦，这游戏好炫彩，快来和我一起捉宠物！", "抓宠我是专业的，来一起捉个宠物玩。", "悟空，不要乱扔垃圾，跟为师一起抓宠去", "组队副本，应有尽有" ], 
        this.iVec = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg" ], 
        this.hideTime = 0;
    }
    return t.prototype.init = function() {
        Global.sdk.isWxSdk() ? this.wx = window.wx : Global.sdk.isQQSdk() && (this.wx = window.qq), 
        this.onShow.bind(this), this.onHide.bind(this), this.wx.onHide(this.onHide), this.wx.onShow(this.onShow), 
        Global.sdk.isWxSdkHuoshu() || Global.sdk.isWxSdkXingHeYue() || Global.sdk.isWxSdkGujian() || Global.sdk.isQQSdkGujian() || this.initShareMenu(), 
        this.monitorVersionUpdate(), this.wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    }, t.prototype.ShowPay = function() {
        var t = this;
        return "android" == this.wxos || "devtools" == this.wxos ? !0 : this.forceHide ? (console.info("ShowPay forceHide"), 
        !1) : ("" != this.channel && this.blockchannel.forEach(function(e) {
            return e == t.channel ? (console.info("ShowPay blockchannel:", e), !1) : void 0;
        }), this.wxversion > this.flagTime ? (console.info("ShowPay flagTime", this.wxversion, this.flagTime, this.wxversion > this.flagTime), 
        !1) : parseInt(Global.base._level) < this.showLevel ? (console.info("ShowPay showLevel", Global.base._level, this.showLevel), 
        !1) : !0);
    }, t.prototype.GetParam = function() {
        var t = this.getSystemInfo();
        console.log("getSystemInfo:" + JSON.stringify(t)), this.wxos = t.platform;
        var e = this.wx.getLaunchOptionsSync();
        if (console.log("getLaunchOptionsSync:version", JSON.stringify(e)), e && e.referrerInfo && e.referrerInfo.appId && (this.refAppid = "_" + e.referrerInfo.appId, 
        console.log("跳转源APPID:" + this.refAppid), e.referrerInfo.extraData)) {
            var o = e.referrerInfo.extraData;
            if (o.cname && "" != o.cname) {
                var i = "?cname=" + o.cname;
                return i += o.p1 ? "&p1=" + o.p1 : "", i += o.p2 ? "&p2=" + o.p2 : "", i += o.p3 ? "&p3=" + o.p3 : "", 
                i += o.p4 ? "&p4=" + o.p4 : "", i += o.p5 ? "&p5=" + o.p5 : "", console.log("导量参数:" + o.cname, i), 
                i;
            }
        }
        if (e && e.query) {
            if (e.query.q) {
                var i = decodeURIComponent(e.query.q);
                return console.log("扫码参数:" + i), console.log("参数:" + i.substr(i.indexOf("?"))), 
                i.substr(i.indexOf("?"));
            }
            if (e.query.share) {
                var i = decodeURIComponent(e.query.share);
                return console.log("分享参数:" + i), i;
            }
            if (e.query.cname) {
                var i = "?cname=" + e.query.cname;
                return i += e.query.p1 ? "&p1=" + e.query.p1 : "", i += e.query.p2 ? "&p2=" + e.query.p2 : "", 
                i += e.query.p3 ? "&p3=" + e.query.p3 : "", i += e.query.p4 ? "&p4=" + e.query.p4 : "", 
                i += e.query.p5 ? "&p5=" + e.query.p5 : "", console.log("自定义二维码A参数:" + e.query.cname, i), 
                i;
            }
            if (e.query.scene) {
                var i = decodeURIComponent(e.query.scene);
                return console.log("自定义二维码B参数:" + i), i;
            }
        }
        return "";
    }, t.prototype.getSystemInfo = function() {
        return this.wx.getSystemInfoSync();
    }, t.prototype.getLaunchOptionsSync = function() {
        return this.wx.getLaunchOptionsSync();
    }, t.prototype.exit = function() {
        this.wx.exitMiniProgram({
            success: function() {},
            fail: function() {}
        });
    }, t.prototype.onHide = function() {
        this.hideTime = egret.getTimer();
    }, t.prototype.onShow = function() {}, t.prototype.monitorVersionUpdate = function() {
        var t = this.getSystemInfo();
        if (!(t.SDKVersion < "1.9.9")) {
            var e = this.wx, o = e.getUpdateManager();
            o.onCheckForUpdate(function(t) {
                console.log("是否有更新版本：" + t.hasUpdate);
            }), o.onUpdateReady(function() {
                e.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(t) {
                        t.confirm && o.applyUpdate();
                    }
                });
            }), o.onUpdateFailed(function() {
                console.log("下载更新版本失败！");
            });
        }
    }, t.prototype.initShareMenu = function() {
        var t = this;
        this.wx.showShareMenu({
            withShareTicket: !1,
            success: function(t) {},
            fail: function(t) {}
        }), this.wx.onShareAppMessage(function() {
            var e = Global.base.playerId || 0, o = Math.floor(10 * Math.random()) % t.tVec.length, i = {
                title: t.tVec[o],
                imageUrl: window.__CONFIG__.__RES_URL__ + "share/" + t.iVec[o],
                query: "share=" + encodeURIComponent("?cname=share&fromid=" + e),
                success: function(t) {
                    console.log("share success=============="), console.log(t);
                },
                fail: function(t) {
                    console.log("share fail=============="), console.log(t);
                }
            };
            return console.log("share:" + JSON.stringify(i)), i;
        });
    }, t.prototype.onShareApp = function(t) {
        var e = Global.base.playerId || 0, o = Math.floor(10 * Math.random()) % this.tVec.length, i = {
            title: this.tVec[o],
            imageUrl: window.__CONFIG__.__RES_URL__ + "share/" + this.iVec[o],
            query: "share=" + encodeURIComponent("?cname=share&fromid=" + e),
            success: function(t) {
                console.log("share success=============="), console.log(t);
            },
            fail: function(t) {
                console.log("share fail=============="), console.log(t);
            }
        };
        console.log("share:" + JSON.stringify(i)), this.wx.shareAppMessage(i);
    }, t.prototype.openCustomerServiceConversation = function(t) {
        console.info("openCustomerServiceConversation:", t);
        var e = window.gobj.kefuCarUrl ? window.gobj.kefuCarUrl : "";
        this.wx.openCustomerServiceConversation({
            sessionFrom: t,
            showMessageCard: "" != e,
            sendMessageTitle: "",
            sendMessagePath: "回复任意消息继续",
            sendMessageImg: e
        });
    }, t.prototype.alertWX = function() {
        var t = this;
        window.alert = function(e) {
            var o = t.wx;
            o && o.showToast && o.showToast({
                title: e ? e : "",
                icon: "none",
                duration: 2e3
            });
        };
    }, t.prototype.login = function(t, e, o) {
        this.wx.login({
            success: t,
            fail: e,
            complete: o
        });
    }, t.prototype.getUserInfo = function(t) {
        this.wx.getUserInfo({
            success: function(e) {
                t(e.userInfo);
            }
        });
    }, t.prototype.getVersion = function() {
        var t = this.wx.getLaunchOptionsSync();
        return t && t.query && t.query.version ? t.query.version : "1.0.0";
    }, t.prototype.requestMidasPayment = function(t, e, o) {
        var i = {
            mode: "game",
            env: Global.sdk.GetWxVO().payEnv,
            offerId: WindowData.GetWeixinPayKey(),
            currencyType: "CNY",
            platform: "android",
            buyQuantity: t,
            zoneId: "1",
            success: e,
            fail: o
        };
        1 == Global.sdk.GetWxVO().payEnv ? console.log("[沙箱支付]") : console.log("[正式支付]"), 
        console.log("发起充值：", JSON.stringify(i)), this.wx.requestMidasPayment(i);
    }, t;
}();

__reflect(Wx.prototype, "Wx");

window.WeatherBase = WeatherBase;

window.TimerMgr = TimerMgr;

window.TimerHandlerSdk = TimerHandlerSdk;

window.RainLine = RainLine;

window.HttpHelper = HttpHelper;

window.LoadingUI = LoadingUI;

window.LoginUI = LoginUI;

window.Main = Main;

window.TestScreenAdapter = TestScreenAdapter;

window.NoticeUI = NoticeUI;

window.ServerUI = ServerUI;

window.ServerScrollView = ServerScrollView;

window.ServerGroup = ServerGroup;

window.ServerUIItem1 = ServerUIItem1;

window.ServerUIItem2 = ServerUIItem2;

window.Socket = Socket;

window.TextFlowMaker = TextFlowMaker;

window.WindowData = WindowData;

window.CreateRoleUI = CreateRoleUI;

window.Base64 = Base64;

window.WeatherFactory = WeatherFactory;

window.WeatherFlower = WeatherFlower;

window.EObjectPool = EObjectPool;

window.HttpRequestNet = HttpRequestNet;

window.HttpReq = HttpReq;

window.I_md5 = I_md5;

window.PlatformVOSoEasy = PlatformVOSoEasy;

window.Platformqucikh5 = Platformqucikh5;

window.PlatformWxGameVO = PlatformWxGameVO;

window.PlatformWxHuoSDKVO = PlatformWxHuoSDKVO;

window.PlatformWxGujianSDKVO = PlatformWxGujianSDKVO;

window.PlatformVOWd = PlatformVOWd;

window.PlatformVOH5Shengye = PlatformVOH5Shengye;

window.PlatformXiaomiQuickGameVO = PlatformXiaomiQuickGameVO;

window.PlatformOppoQuickGameVO = PlatformOppoQuickGameVO;

window.PlatformQiliVO = PlatformQiliVO;

window.PlatformUcWeb = PlatformUcWeb;

window.PlatformFkylcH5 = PlatformFkylcH5;

window.PlatformAiWan = PlatformAiWan;

window.PlatformVOQzone = PlatformVOQzone;

window.PlatformWxSiLang = PlatformWxSiLang;

window.PlatformH5SiLang = PlatformH5SiLang;

window.PlatformPcQzone = PlatformPcQzone;

window.PlatformWxSmz = PlatformWxSmz;

window.Platform8827wan = Platform8827wan;

window.PlatformWxFxmVO = PlatformWxFxmVO;

window.Common = Common;

window.DataManager = DataManager;

window.ReyunMgr = ReyunMgr;

window.SdkLoginUI = SdkLoginUI;

window.PlayerBaseInfo = PlayerBaseInfo;

window.Global = Global;

window.SdkMgr = SdkMgr;

window.Sdk_SoEasy = Sdk_SoEasy;

window.Sdk_qucikh5 = Sdk_qucikh5;

window.Sdk_WX_Game = Sdk_WX_Game;

window.Sdk_WX_Huoshu_Game = Sdk_WX_Huoshu_Game;

window.Sdk_WX_Gujian_Game = Sdk_WX_Gujian_Game;

window.Sdk_QQ_Gujian_Game = Sdk_QQ_Gujian_Game;

window.Sdk_WD = Sdk_WD;

window.Sdk_WD_QY = Sdk_WD_QY;

window.Sdk_WD_HS = Sdk_WD_HS;

window.Sdk_H5Shengye = Sdk_H5Shengye;

window.Sdk_Xiaomi_Quick = Sdk_Xiaomi_Quick;

window.Sdk_Oppo_Quick = Sdk_Oppo_Quick;

window.Sdk_QiliGonghui = Sdk_QiliGonghui;

window.Sdk_XibangZhiwan = Sdk_XibangZhiwan;

window.Sdk_UC_WEBGAME = Sdk_UC_WEBGAME;

window.Sdk_WD_QUICK = Sdk_WD_QUICK;

window.Sdk_FkylcH5 = Sdk_FkylcH5;

window.Sdk_AiWanH5 = Sdk_AiWanH5;

window.Sdk_WxSiLang = Sdk_WxSiLang;

window.Sdk_H5SiLang = Sdk_H5SiLang;

window.Sdk_PCQzone = Sdk_PCQzone;

window.Sdk_QQWanba = Sdk_QQWanba;

window.Sdk_WxYyw = Sdk_WxYyw;

window.Sdk_8827wan = Sdk_8827wan;

window.Sdk_WD_ChaoMeng = Sdk_WD_ChaoMeng;

window.Sdk_WX_XingHeYue_Game = Sdk_WX_XingHeYue_Game;

window.Sdk_WX_FXM_Game = Sdk_WX_FXM_Game;

window.GameServerData = GameServerData;

window.GameServerPageData = GameServerPageData;

window.GameServerDescData = GameServerDescData;

window.Wx = Wx;window.Main = Main; 
window.Socket = Socket; 
window.WeatherFactory = WeatherFactory; 
window.HttpHelper = HttpHelper; 
window.ServerGroup = ServerGroup; 
window.WindowData = WindowData; 
window.GameServerData = GameServerData; 
window.Global = Global; 
window.TextFlowMaker = TextFlowMaker; 
