var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: CoderM
 * @Date: 2018-09-09 15:47:46
 * @explain 渠道公共基类
 */
var ktgame;
(function (ktgame) {
    var gameSdk;
    (function (gameSdk) {
        /*
        * @param oldUserAcc
        */
        function getUserAcc(oldUserAcc) {
            var newUserAcc = oldUserAcc.replace(/xhx/g, '_'); // 替换 ‘_’ 为 'xhx'
            newUserAcc = newUserAcc.replace(/dian/g, '.'); // 替换 ‘.’ 为 'dian'
            return newUserAcc;
        }
        gameSdk.getUserAcc = getUserAcc;
        function GetQueryString(name, target) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = target.substr(1).match(reg);
            return (r && r[2]) || null;
        }
        gameSdk.GetQueryString = GetQueryString;
        /**
         * 将网页参数转换成json数据
         * @param parm
         */
        function urlParm2Json(parm) {
            var arr = []; //存储参数的数组
            var res = {}; //存储最终转换的json数据
            if (parm[0] == '?')
                parm = parm.substr(1);
            parm = parm.split('?')[0];
            arr = parm.split('&');
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].indexOf('=') != -1) {
                    var str = arr[i].split('=');
                    res[str[0]] = str[1] || '';
                }
                else {
                    res[arr[i]] = '';
                }
            }
            return res;
        }
        gameSdk.urlParm2Json = urlParm2Json;
        /**
         * MD5签名(跳过函数属性及内嵌属性对象)
         * @param obj 数据对象
         * @param key 加密KEY
         * @param char 连接符
         * @param addKey 是否添加KEY头
         * @param sort 是否排序
         * @param toUpper 是否转大写
         */
        function signMD5(obj, key, char, addKey, sort, toUpper, encodeParm) {
            if (key === void 0) { key = ''; }
            if (char === void 0) { char = '&'; }
            if (addKey === void 0) { addKey = true; }
            if (sort === void 0) { sort = true; }
            if (toUpper === void 0) { toUpper = false; }
            if (encodeParm === void 0) { encodeParm = false; }
            var keys = Object.keys(obj);
            if (sort)
                keys.sort();
            var params = '';
            for (var i = 0; i < keys.length; i++) {
                if (typeof (obj[keys[i]]) == 'object' || typeof (obj[keys[i]]) == 'function') {
                    continue;
                }
                params = params + (keys[i] + "=" + (encodeParm ? encodeURIComponent(obj[keys[i]]) : obj[keys[i]])) + (i == keys.length - 1 ? '' : char);
            }
            if (addKey)
                params += char + "key=";
            params += key;
            var sign = window['md5'](params);
            if (toUpper)
                sign = sign.toUpperCase();
            return sign;
        }
        gameSdk.signMD5 = signMD5;
        /**
         * 注册账号或者login账号需要提供的参数. 做为formatCRequest函数的argsobj参数提供.
         */
        var C2LAccount = /** @class */ (function () {
            function C2LAccount() {
                this.name = ""; // 账号.
                this.pwd = ""; // 密码
                this.channelID = 0; // 渠道ID.
                this.deviceID = ""; // Login时无需要处理这个数据
                this.token = ""; //平台登录时需要用 
                this.version = ""; //埋点用
                this.platform = ""; //埋点用
            }
            return C2LAccount;
        }());
        gameSdk.C2LAccount = C2LAccount;
        var PayVo = /** @class */ (function () {
            function PayVo() {
                /** 商品ID */
                this.itemID = 0;
                /** 商品内购id */
                this.productid = '';
                /** 商品名 */
                this.itemName = '';
                /** 商品价格/分 */
                this.amount = 0;
                /** 大区ID */
                this.areaID = 0;
                /** 服务器ID */
                this.svrID = 0;
                /** 服务器名 */
                this.svrName = '';
                /** 渠道ID */
                this.channelId = 0;
                /** 角色ID */
                this.userId = '';
                /** 角色名 */
                this.userName = '';
                /** 角色等级 */
                this.userLvl = 0;
                /** 账号ID */
                this.accountId = '';
                /** 扩展参数 */
                this.otherExt = '';
                /** 第三方支付类型 */
                this.payExt = '';
                /** 自定义订单 */
                this.payForm = '';
            }
            Object.defineProperty(PayVo.prototype, "JsonStr", {
                get: function () {
                    return JSON.stringify(this);
                },
                enumerable: true,
                configurable: true
            });
            return PayVo;
        }());
        gameSdk.PayVo = PayVo;
        /** 角色相关信息 */
        var RoleInfo = /** @class */ (function () {
            function RoleInfo() {
                /** 事件类型 */
                this.dataType = 1;
                /** 角色ID */
                this.roleID = "";
                /** 角色名称 */
                this.roleName = "";
                /** 角色等级 */
                this.roleLevel = "";
                /** 服务器id */
                this.zoneId = 1;
                /** 服务器名称 */
                this.zoneName = "";
                /** 创建角色时间 */
                this.roleCTime = "";
                /** 角色升级时间 */
                this.roleLevelMTime = "";
                /** 角色当前元宝数量 */
                this.goldNum = 0;
                /** vip等级 */
                this.vipLevel = 0;
                /** 战斗力 */
                this.power = 0;
                /** 自定义事件 */
                this.selfMsg = '';
                this.turn = 0;
            }
            return RoleInfo;
        }());
        gameSdk.RoleInfo = RoleInfo;
        /** 角色操作类型 */
        var RoleInfoCtrlType = /** @class */ (function () {
            function RoleInfoCtrlType() {
            }
            /** 自定义数据 */
            RoleInfoCtrlType.sendSelfMsg = 0;
            /** 选择服务器 */
            RoleInfoCtrlType.selectServer = 1;
            /** 创建角色 */
            RoleInfoCtrlType.createRole = 2;
            /** 进入游戏 */
            RoleInfoCtrlType.JoinGame = 3;
            /** 等级提升 */
            RoleInfoCtrlType.lvUp = 4;
            /** 退出游戏 */
            RoleInfoCtrlType.logOut = 5;
            /** 点击登录按钮 */
            RoleInfoCtrlType.clickLoginBtn = 6;
            /** 到达选服页面 */
            RoleInfoCtrlType.selectSvrView = 7;
            return RoleInfoCtrlType;
        }());
        gameSdk.RoleInfoCtrlType = RoleInfoCtrlType;
        /** 设备相关信息 */
        var DeviceInfo = /** @class */ (function () {
            function DeviceInfo() {
                /** 网络类型 */
                this.net_type = "";
                /** 设备类型 */
                this.device_type = "web";
                /** ip地址 */
                this.ip = "";
                /** 系统版本号 */
                this.os_version = "";
                /** 系统类型 */
                this.os_type = "H5";
                /** 手机内存 */
                this.ram = "";
                /** 渠道标识 */
                this.channel = "";
                /** 安卓设备IMEI */
                this.imei = '';
                /** 安卓设备安卓ID */
                this.android_id = '';
            }
            return DeviceInfo;
        }());
        gameSdk.DeviceInfo = DeviceInfo;
        var BaseSdk = /** @class */ (function () {
            function BaseSdk() {
                /** 接入聚合渠道的时候设置的某些渠道名称 */
                this.sdkChannelName = '';
                /** 渠道内的用户名称 */
                this.sdkChannelUserName = '';
                /** 是否显示渠道VIP */
                this.isHaveChannelVip = false;
                /** 服务器名字 */
                this.svrName = "";
                /** 渠道id */
                this.channelId = window['ktCfg'] ? window['ktCfg']['channelType'] : window['KtChannelId'];
                /** 是否是微信网页端登录 */
                this.isWxLogin = false;
                /** 是否显示分享按钮 */
                this.isShowShare = false;
                /** 是否显示实名认证按钮 */
                this.isUserAuthentication = false;
                /** 是否是app微端登录 */
                this.isApp = false;
                /** 是否显示发送到桌面 */
                this.isShowSendDesktop = false;
                /** 是否显示关注按钮 */
                this.isShowFollow = false;
                /** 是否显示绑定手机按钮 */
                this.isShowPhone = false;
                /** 是否显示进入论坛按钮 */
                this.isShowEntBBS = false;
                /** 是否显示腾讯视频ICON */
                this.isShowTencentVideoICON = false;
                /** 是否是玩吧下的QQVIP子渠道 */
                this.isWanBaChannel_QQVIP = false;
                /** 是否是心悦俱乐部 */
                this.isXinYueClub = false;
                /** 是否显示退出按钮 */
                this.isShowLogout = false;
                /** 是否显示微端按钮 */
                this.isShowMicroClient = false;
                /** 是否显示防沉迷 */
                this.isShowWollow = false;
                /** 通用H5渠道,保存特殊传入标识 */
                this.H5LoginParms = "";
                /** 设备标识 */
                this.devInfo = new DeviceInfo();
                /** 邀请人id */
                this.inviter = '';
                /** 登录回调 */
                this.cb_loginOk = null;
                this.cb_loginFail = null;
                /** 充值回调 */
                this.cb_payCallOk = null;
                this.cb_payCallFail = null;
                /** 初始化回调 */
                this.cb_initOk = null;
                this.cb_initFail = null;
                /** 记录平台SDK是否已经初始化成功了 */
                this.isInitOver = false;
                /** 是否屌用过获取过设备信息函数 */
                this.isCallDevice = false;
                /** 是否已经调用过login函数了 */
                this.isCallLogin = false;
                this.diyObj = null;
            }
            BaseSdk.prototype.pushLocalNotifications = function (json) {
                console.log('pushLocalNotifications');
            };
            BaseSdk.prototype.init = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
                console.log('init');
            };
            BaseSdk.prototype.getChannelVipLv = function (callback) {
                if (!this.isHaveChannelVip) {
                    callback(0);
                }
            };
            /**
             * 登录
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.login = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
                console.log('baseChannel');
            };
            /**
             * 登出
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.logout = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 授权
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.authorize = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 进入论坛
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.enterBBS = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 刷新票据
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.refreshToken = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 支付
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.recharge = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 分享
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.enterShareAndFeed = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 邀请
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.enterInvite = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 获取游戏好友
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.getGameFriends = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 发送到桌面
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.sendToDesktop = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 发送自定义消息
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.sendMessageToPlatform = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 获取用户信息
             * @param	jsonParm
             * @param	callback
             */
            BaseSdk.prototype.getUserInfo = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 关注有礼
             * @param jsonParm
             * @param okCall
             * @param failCall
             */
            BaseSdk.prototype.showFollow = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 显示实名认证
             * @param jsonParm
             * @param okCall
             * @param failCall
             */
            BaseSdk.prototype.showUserAuthentication = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 显示微端领奖
             * @param jsonParm
             * @param okCall
             * @param failCall
             */
            BaseSdk.prototype.showMicroClient = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 绑定手机
             */
            BaseSdk.prototype.bindPhone = function (jsonParm, okCall, failCall) {
                if (okCall === void 0) { okCall = null; }
                if (failCall === void 0) { failCall = null; }
            };
            /**
             * 绑定渠道礼包领取回调
             * @param callback
             */
            BaseSdk.prototype.bindChannelGift = function (callback) {
            };
            /**
             * 返回Market名称
             */
            BaseSdk.prototype.getMarketName = function () {
                return 'default';
            };
            /**
             * 返回支付类型 自定义
             */
            BaseSdk.prototype.getPayType = function () {
                return 0;
            };
            /**
             * 返回登录类型 自定义
             */
            BaseSdk.prototype.getLoginType = function () {
                return 0;
            };
            /**
             *
             */
            BaseSdk.prototype.getChargeType = function () {
                return 0;
            };
            BaseSdk.prototype.killGame = function () {
            };
            BaseSdk.prototype.customEventApp = function (action) {
                if (ktgame.gameSdk && ktgame.gameSdk.customEventApp)
                    ktgame.gameSdk.customEventApp(action);
            };
            return BaseSdk;
        }());
        gameSdk.BaseSdk = BaseSdk;
        function customEventApp(action, device_id, d_os) {
            if (device_id === void 0) { device_id = ''; }
            if (d_os === void 0) { d_os = ''; }
            var md5Key = "0A008C48E74E8A399F1F80DBED71161C";
            // var device_id: any = ""; //H5的情况下这里传空
            var appid = ktgame.gameSdk.channel_s[window['ktCfg'] ? window['ktCfg']['channelType'] : window['KtChannelId']] || 'sbk_h5_test';
            d_os = d_os + '';
            var os = d_os.length > 0 ? d_os : 'googleplay';
            if (window['plus'] && window['ktCfg'] ? window['ktCfg']['channelType'] : window['KtChannelId'] == 10016) {
                // 日文版本这样用的
                var plus = window['plus'];
                var imei = plus.device.imei;
                var imsi = plus.device.imsi;
                var uuid = plus.device.uuid;
                var model = plus.device.model;
                var parmstr = imei + (imsi.length ? imsi[0] : ' ') + uuid + model;
                var device = window['md5'](parmstr);
                device_id = device;
                os = plus.os.vendor == 'Apple' ? "apple" : "googleplay";
            }
            else {
                // return;
            }
            var jsonStr = {
                "param_data": {
                    "app_id_s": appid,
                    "app_version_name_s": "1.0.0.5",
                    "app_version_code_s": "100",
                    "category_s": "event_app",
                    "data_unix": (Date.now() / 1000) >> 0,
                    "channel_s": window['ktCfg'] ? window['ktCfg']['channelType'] : window['KtChannelId'] == 10016 ? os : window['ktCfg'] ? window['ktCfg']['channelType'] : window['KtChannelId'],
                    "platform_s": 'H5'
                },
                "param_environment": {
                    "network_s": "4G",
                    "dpi_s": "1980*1080",
                    "os_version_s": "25",
                    "operator_s": "unknown",
                    "device_id_s": device_id,
                    "brand_s": os,
                    "brand_type_s": "Redmi 5 Plus"
                },
                "param_event": {
                    "event_s": [
                        "track_2",
                        "JoinActionWhatcher",
                        action
                    ]
                }
            };
            var gid = appid;
            var time = (Date.now() / 1000) >> 0;
            var sign = window["md5"]("" + md5Key + gid + time);
            var data = {
                "gid": gid,
                "time": time,
                "sign": sign,
                "jsonStr": jsonStr
            };
            var str = JSON.stringify(data);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("post", "https://gskuld.receiver.extranet.kt007.com:8081/skuld/game/common", true);
            xmlHttp.responseType = "json";
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        console.log("发送完成事件");
                    }
                    else {
                        console.log("HTTP请求错误！错误码：" + xmlHttp.status);
                    }
                }
            };
            xmlHttp.send(str);
        }
        gameSdk.customEventApp = customEventApp;
        gameSdk.channel_s = {
            10010: "h5_9mlcs_2",
            10012: "h5_9mlcs_2",
            10011: "h5_9mlcs",
            10015: "h5_11qianqi",
            10016: "h5_11japan",
            10017: "h5_11qianqi",
            10018: "h5_11qianqi",
            10019: "h5_11qianqi",
            10020: "h5_12mlcs",
            10021: "h5_12mlcs",
            10022: "h5_12mlcs",
            10023: "h5_12mlcs",
            10024: "h5_12mlcs",
            10025: "h5_12mlcs_2",
            10026: "h5_12mlcs_2",
            10027: "h5_12mlcs",
            10028: "h5_12mlcs",
            10029: "h5_12mlcs_2",
        };
        function AndroidOrIos() {
            var UA = window.navigator.userAgent;
            if (/Android|HTC/i.test(UA) || !!(window.navigator['platform'] + '').match(/Linux/i))
                UA = 'Android';
            else if (/iPad/i.test(UA) || /iPod|Iphone/i.test(UA))
                UA == 'IOS';
            else
                UA = 'other';
            return UA;
        }
        gameSdk.AndroidOrIos = AndroidOrIos;
    })(gameSdk = ktgame.gameSdk || (ktgame.gameSdk = {}));
})(ktgame || (ktgame = {}));
/*
 * @Author: CoderM
 * @Date: 2019-10-17 16:15:07
 * @Last Modified by: null-wait
 * @Last Modified time: 2019-12-02 21:45:32
 * 深海WX 接入代码
 */
var channel;
(function (channel) {
    var channel_xingheyue_wx = /** @class */ (function (_super) {
        __extends(channel_xingheyue_wx, _super);
        function channel_xingheyue_wx() {
            var _this = _super.call(this) || this;
            _this.wx = null;
            _this._sdk = null;
            _this._loginCb = null;
            _this._wxAuthCallBack = null;
            _this._showRecharge = true;
            _this.wx = window['wx'];
            _this.initOk = false;
            _this.iscalllogin = false
            _this._shareCb = null;
            _this.isBaiZe = true;
            _this.app_id = 568;
            _this.mp_id = "wx879b745956e34f2f"
            _this.mem_id = ""
            _this.shareInfo = {}
            return _this;
        }

        channel_xingheyue_wx.prototype.onShare = function () {
            this._shareCb && this._shareCb();
        };
        channel_xingheyue_wx.prototype.init = function () {
            var _this = this;
            _this._sdk = window['huoSdk'];
            _this._sdk.init({
                app_id: _this.app_id,
                mp_id: _this.mp_id
            }).then(res => {
                _this.initOk = true;
                _this.login("", _this._loginCb);
            })
            _this._sdk.getShareInfo({
                data: {
                    path: ''
                }
            }).then(res => {
                // 小程序
                _this.shareInfo = res.data
                // 小游戏
                wx.onShareAppMessage(function () {
                    return {
                        title: res.data.title,
                        imageUrl: res.data.image,
                        query: `state=${res.data.state}`
                    }
                })
                wx.showShareMenu()
            })
            // 主动上传用户信息，需先校验用户是否开启授权
            wx.getSetting({
                success: res => {
                    if (res.authSetting['scope.userInfo']) {
                        // 用户当前已授权，则可调用 wx.getUserInfo 获取用户最新个人信息
                        wx.getUserInfo({
                            success: res => {
                                _this._sdk.updateSelfInfo({
                                    data: {
                                        raw_data: res.rawData,
                                        signature: res.signature,
                                        encrypted_data: res.encryptedData,
                                        iv: res.iv
                                    }
                                })
                            }
                        })
                    }
                }
            })
        };
        channel_xingheyue_wx.prototype.login = function (parm, okcall, failcall) {
            this._loginCb = okcall;
            if (okcall) { this.iscalllogin = true };
            if (!this.iscalllogin || !this.initOk) return;
            var _this = this;
            console.log("调用登录")
            let opts = wx.getLaunchOptionsSync()
            _this._sdk.login({
                data: {
                    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                    state: opts.query.state || opts.query.scene || ''
                }
            }).then(res => {
                console.log("登录返回")
                var data = res.data;
                _this.mem_id = data.mem_id;
                this.iscalllogin = true;
                this.sdkChannelName = window['sdkChannelName'] ? window['sdkChannelName'] : "xingheyue_wx_mjcq";
                this.devInfo.channel = this.sdkChannelName;
                var account = new ktgame.gameSdk.C2LAccount();
                account.channelID = this.channelId;
                account.name = _this.mem_id;
                account.token = data.cp_user_token;
                account.deviceID = "";
                account.platform = "";
                account.pwd = _this.app_id;
                account.version = "";
                if (_this._loginCb) {
                    _this._loginCb(account);
                }
                // avatar: ""
                // cp_user_token: "Z4j8Ma17N7DtJujcM22bM73rZnGcY437MWJmMzY1YmU1OWI1YTM2NTM0ZTYO0O0O"
                // mem_id: 589010
                // mg_mem_id: 567659
                // nickname: "t5680301000"
                // user_token: "f3542c3c7df71bf365be59b5a36534e6"
                // debugger
            })
        };

        channel_xingheyue_wx.prototype.dataPlacement = function (args) {
        }


        channel_xingheyue_wx.prototype.recharge = function (parm, okcall) {
            var vo = JSON.parse(parm);
            var t_data = {
                'order-currency': 'CNY',
                'order-cp_order_id': vo.payForm,
                'order-product_price': vo.amount / 100,
                'order-product_id': vo.itemID,
                'order-product_cnt': 1,
                'order-product_name': vo.itemName,
                'order-product_desc': vo.itemName,
                'order-ext': vo.areaID + "," + vo.itemID,
                'role-event': '',
                'role-server_id': vo.areaID,
                'role-server_name': vo.svrName,
                'role-role_id': vo.userId,
                'role-role_name': vo.userName,
                'role-role_level': vo.userLvl,
                'role-role_vip': 0
            }
            debugger
            this._sdk.pay({
                data: t_data
            }).then(res => {
                // do something
            })
        };

        channel_xingheyue_wx.prototype.loginBtnShow = function (show) {
            if (!this.wxLoginBtn)
                return;
            if (show) {
                this.wxLoginBtn.show();
            }
            else {
                this.wxLoginBtn.hide();
            }
        };
        channel_xingheyue_wx.prototype.showWxAuth = function (authcallback) {
            this._wxAuthCallBack = authcallback;
            this.wxLoginBtn = this.wx.createUserInfoButton({
                type: 'image',
                image: "shsdk/auth.png",
                text: '',
                style: {
                    image: "",
                    left: (window.screen.availWidth - 110) / 2,
                    top: window.screen.availHeight * 0.77,
                    width: 110,
                    height: 35,
                    // lineHeight: 40,
                    backgroundColor: "transparent",
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4,
                }
            });
            this.wxLoginBtn.onTap(this.onWxLoginTap.bind(this));
            this.wxLoginBtn.show();
        };
        channel_xingheyue_wx.prototype.hideWxAuth = function () {
            if (this.wxLoginBtn) {
                this.wxLoginBtn.destroy();
                this.wxLoginBtn = null;
            }
        };
        channel_xingheyue_wx.prototype.onWxLoginTap = function (res) {
            if (res.errMsg && !res.userInfo) {
                clickfun && clickfun(false);
                return;
            }
            let _this = this;
            _this._sdk.updateSelfInfo({
                data: {
                    raw_data: res.rawData,
                    signature: res.signature,
                    encrypted_data: res.encryptedData,
                    iv: res.iv
                }
            })
            var clickfun = this._wxAuthCallBack;
            this.hideWxAuth();
            clickfun && clickfun(true);
        };

        channel_xingheyue_wx.prototype.sendMessageToPlatform = function (jsonParm, callback) {
            if (callback && (typeof callback) == 'function') {
                this._smpfCb = callback;
            }
            if (jsonParm == "initLoginView") {
                return;
            }
            var vos = JSON.parse(jsonParm);
            var type = "";
            var send = false;
            switch (vos.dataType) {
                case ktgame.gameSdk.RoleInfoCtrlType.createRole:
                    type = "create";
                    send = true;
                    break;
                case ktgame.gameSdk.RoleInfoCtrlType.JoinGame:
                    type = "online";
                    send = true;
                    break;
                case ktgame.gameSdk.RoleInfoCtrlType.lvUp:
                    type = "levelup";
                    send = true;
                    break;
                default:
                    break;
            }
            if (send) {
                this._sdk.updateRoleInfo({
                    data: {
                        'role-event': type,
                        'role-server_id': vos.zoneId,
                        'role-server_name': vos.zoneName,
                        'role-role_id': vos.roleID,
                        'role-role_name': vos.roleName,
                        'role-role_level': vos.roleLevel,
                        'role-role_vip': vos.vipLevel,
                        'role-combat_num': vos.power,
                        'role-onlineTime': 0,
                        'role-scene': '',
                        'role-axis': '',
                        'role-scene': ''
                    }
                }).then(res => {
                    // do something
                }, err => {
                    // handle error
                })
            }
        };
        Object.defineProperty(channel_xingheyue_wx.prototype, "isShowRecharge", {
            // 开放API查询是否显示支付
            get: function () {
                return this._showRecharge;
            },
            enumerable: true,
            configurable: true
        });
        // 对外开放API 查询用户是否已经关注了
        channel_xingheyue_wx.prototype.subscribe = function (cb) {
            this._subscribeCb = cb;
            // 默认不显示关注
            this.isShowFollow = false;

            // this._subscribeCb && this._subscribeCb(this.isShowFollow);
            // this._sdk.subscribe(function (ret) {
            //     //说明【关注状态->subscribe，1：已关注，0：取消关注，关注|取消关注时间->subscribe_time】
            //     console.log('公众号关注状态获取结果', ret);
            //     this.isShowFollow = ret.subscribe == 1;
            //     // 用户已经关注过并且取消了关注,也返回已经关注过了
            //     if (ret.subscribe == 0 && ret.subscribe_time)
            //         this.isShowFollow = true;
            //     this._subscribeCb && this._subscribeCb(this.isShowFollow);
            // }.bind(this));
        };
        channel_xingheyue_wx.prototype.enterShareAndFeed = function (parm, callback) {
            this._shareCb = callback;
            var _this = this;
            _this.shareInfo.query = "fuid=" + parm.username
            wx.shareAppMessage(_this.shareInfo)
            _this._sdk.updateShareInfo({
                data: {
                    to_target: 'wx'
                }
            })
            this._shareCb && setTimeout(this._shareCb, 2000);
        };
        return channel_xingheyue_wx;
    }(ktgame.gameSdk.BaseSdk));
    channel.channel_xingheyue_wx = channel_xingheyue_wx;
})(channel || (channel = {}));
window['kth5sdk'] = new channel.channel_xingheyue_wx();
if (window['kth5sdk']) {
    console.log("渠道h5SDK注入成功");
}
else {
    console.log("渠道h5SDK注入失败");
}
