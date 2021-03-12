//const huoSdk = require('sdk-1.0.1.js') 
import huoSdk from 'sdk-1.0.1'

class czsdk_WeChat {
    constructor(czGameParam) {
        var _this = this;
        try {
            this.isInit = false;
            this.isLogin = false;
            this.isRightParams = false;
            this.roleLoginData;
            this.channelArr = ["mingriwx", "oppo", "qq", "uc", "xiaomi", "wx","bili"];
            this.qqOppId = "";
			this.xiaomisession ="";

            if (!_this.isEmpty(czGameParam) || !_this.isEmpty(!czGameParam.channelType) || !_this.isEmpty(!czGameParam.gameAbb)) {
                for (var index in this.channelArr) {
                    if (czGameParam.channelType === this.channelArr[index]) {
                        this.isRightParams = true;
                    }
                }
            }

            if (!this.isRightParams) {
                console.log("初始化参数/设置渠道类型错误channelType:" + czGameParam.channelType + " gameAbb:" + czGameParam.gameAbb);
                return false;
            }

            this.configure = {
                url: "https://sdk.zhijiangames.com/",
                channelType: czGameParam.channelType,
                gameAbb: czGameParam.gameAbb,
                app_id:czGameParam.app_id,
                mp_id:czGameParam.mp_id
            }

            //初始化渠道
            switch (this.configure.channelType) {
                case "oppo":
                    qg.getSystemInfo({
                        success: res => {
                            this.isInit = true;
                            this.oppoConfigure = res;
                            window.Global = {
                                platformVersion: res.platformVersion
                            }
                            console.log("初始化oppo成功");
                        },
                        fail: err => {
                            _this.message("获取系统信息出错" + JSON.stringify(err));
                        }
                    })
                    break;

                default:
                    _this.isInit = true;
            }

            if (!this.isInit) {
                console.log("初始化渠道失败");
            }
        } catch (err) {
            console.log("初始化错误" + err);
        }
    }

    isEmpty(obj) {
        if (typeof obj == undefined || !obj || obj == null || obj == "") {
            return true;
        } else {
            return false;
        }
    }

    message(message) {
        if (this.configure.channelType == "vivo") {
            qg.showToast({
                message: message,
                duration: 1,
            });
        } else {
            console.log(message);
        }
    }

    //myself网络模块
    httpRequest(option) {
        var _this = this;
        try {
            if (String(option) !== "[object Object]") return undefined;
            var url = this.configure.url + option.url;
			console.log("URL 1--->"+url);
            if (option.method === "GET") {
                var params = Object.keys(option.data).map(function (key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(option.data[key]);
                }).join("&");
                url = url + "?channelType=" + _this.configure.channelType + "&" + params
            } else if (this.configure.channelType === "vivo" || this.configure.channelType === "qq"|| this.configure.channelType === "bili" ) {
                url = url + "?channelType=" + _this.configure.channelType + "&data=" + option.data;
            }
			console.log("URL 2--->"+url); 
            if (this.configure.channelType === "vivo") {
                qg.request({
                    url: url,
                    success: result => {
                        option.success(result.data);
                    },
                    fail: (err, code) => {
                        option.error(err);
                    }
                });
            }
            else if (this.configure.channelType === "qq") {
                qq.request({
                    url: url,
                    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    success(res) {
                        console.log("获取qq返回数据");
                        console.log(res.data)
                        option.success(res.data);
                    },
                    fail(err) {
                        console.log("qq请求失败");
                    }
                })
            } else if (this.configure.channelType === "wx") {
                wx.request({
                    url: url,
                    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    success(res) {
                        console.log("qq请求成功");
                        console.log(res.data)
                        option.success(result.data);
                    },
                    fail(err) {
                        console.log("qq请求失败");
                    }
                })
            } else if (this.configure.channelType === "bili") {
                bl.request({
                    url: url,
                    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    success(res) {
                        console.log("获取bili返回数据");
                        console.log(res.data)
                        option.success(res.data);
                    },
                    fail(err) {
                        console.log("bili请求失败");
                    }
                })
            }
            else {
                
                option.method = option.method ? option.method.toUpperCase() : "GET";
			    console.log("URL default "+option.method);
                var xhr = new XMLHttpRequest();
                var data = null;            
                
                console.log("请求readyState："+xhr.readyState)
                console.log("请求status："+xhr.status)  
                xhr.onreadystatechange = function () {
                    console.log("状态readystate" + xhr.readyState);                     
                    if (xhr.readyState === 4 && xhr.status === 200 && option.success && typeof option.success === "function") {
                       // console.log("ok.result is :" + xhr.response);       
                        option.success(xhr.response);
                    } else if (option.error && typeof option.error === "function") {
                      //  console.log("ok.result is :" + option.error);   
                        option.error();
                    }
                };

                if (option.method === "GET") {
                    console.log("open get" );    
                    xhr.open(option.method, url, true);                
                } else {
                    console.log("open post"+option.data);
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.open(option.method, url, false);
                    data = "channelType=" + this.configure.channelType + "&data=" + option.data;
                }
               // console.log("post data："+data)  
                //option.responseType || "json"
                xhr.responseType =  ""
                xhr.timeout = 6000;//6s超时
                console.log("请求：" +xhr.responseType) 
                // xhr.onload = function(e){
                //     if(this.status == 200 || this.status == 304){
                //         alert(this.responseText)
                //     }
                // }
                xhr.send(data);
            }
        } catch (err) {
            console.log("request发送信息到服务器出错:" + err);
        }
    }
 
    
 

    //登陆
    toLogin(callback) {
        var _this = this;

        try {
            console.log("发起了" + _this.configure.channelType + "登陆");

            switch (_this.configure.channelType) {
                case "vivo":
                    if (qg.getSystemInfoSync().platformVersionCode >= 1053) {
                        qg.login().then(
                            res => {
                                callback(1, JSON.stringify(res));
                                _this.sendLogin({ token: res.data.token }, callback);
                            },
                            err => {
                                _this.handleVivoErr("登录失败", "请点击确认按钮重新登录", callback);
                            }
                        );
                    } else {
                        qg.authorize({
                            type: "token",
                            success: res => {
                                qg.getProfile({
                                    token: res.token,
                                    success: data => {
                                        _this.sendLogin({
                                            token: res.token,
                                            accessToken: res.accessToken,
                                            openid: data.openid,
                                            id: data.id,
                                            unionid: data.unionid,
                                            nickname: data.nickname,
                                            avatar: data.avatar
                                        }, callback);
                                    },
                                    fail: (data, code) => {
                                        _this.handleVivoErr("温馨提示", "获取用户信息失败，请重新授权获取", callback);
                                    }
                                });
                            },
                            fail: res => {
                                _this.handleVivoErr("温馨提示", "未授权登录无法畅玩游戏哦～，请点击下面按钮重新登录", callback);
                            }
                        });
                    }
                    break;

                case this.channelArr[0]:
                    //mingriwx 
                    huoSdk.init({
                        app_id: _this.configure.app_id,
                        mp_id: _this.configure.mp_id
                    }).then(res => {
                        console.log("明日游戏wx初始化结果："+res.msg);
                        huoSdk.login({
                            data: {
                                // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                                 //state: opts.query.state || opts.query.scene || ''
                            }
                        }).then(res => {
                            // do something
                            console.log("明日游戏wx login结果："+res.msg);
                            console.log("明日游戏wx login结果："+res.data);
                            this.memid=res.data.mg_mem_id;
                            this.cptoken=res.data.cp_user_token; 
                            this.cpimgavatar=res.data.avatar; 
                            this.cpusername=res.data.username; 
                            this.cpnickname=res.data.nickname; 
                            this.cpgender=res.data.gender; 
                            this.cpcity=res.data.city; 
                            this.cpprovince=res.data.province; 
                            this.cpcountry=res.data.country; 
                            console.log("明日游戏wx login结果："+ this.cptoken); 
                            var data = {
                                mem_id: this.memid ,
                                user_token:this.cptoken,
                                app_id: _this.configure.app_id
                            }
                               //result 
                             _this.sendLogin(data, callback);
                             //  callback(0, res);
                        });
                    }); 
                    break;

                case "qq":
                    qq.login({
                        success: res => {
                            if (res.code) {
                                const devInfo = qq.getSystemInfoSync();
                                const launchInfo = qq.getLaunchOptionsSync();
                                _this.sendLogin({
                                     code: res.code ,
                                     brand: devInfo.brand,
                                     model: devInfo.model,
                                     via: {
                                        scene: launchInfo.scene,
                                        k:JSON.stringify(launchInfo.query),
                                     },
                                     system_info: devInfo,
                                     launchInfo : launchInfo,
                                    }, callback);
                            } else {
                                console.log('登录失败！' + res.errMsg)
                                callback(0, res.errMsg);
                            }
                        }
                    })
                    break;
                case "wx":
                    wx.login({
                        success: res => {
                            if (res.code) {
                                _this.sendLogin({ code: res.code }, callback);
                            } else {
                                console.log('登录失败！' + res.errMsg)
                                callback(0, res.errMsg);
                            }
                        }
                    })
                    break;
                case "uc":
                    uc.login({
                        success: function (res) {
                            _this.sendLogin({ code: res.code }, callback);
                            console.log('登录成功', res.code);
                        },
                        fail: function (res) {
                            console.log('登录失败', res);
                        },
                    });
                    break;
				 case "xiaomi":
                     qg.login({
                        success: function (res) { 
                            console.log('登录成功xm', res.code);
							 _this.sendLogin({ code: res.code }, callback);
							_this.xiaomisession = result.session;
                        },
                        fail: function (res) {
                            console.log('登录失败xm', res);
                        },
                    });
                    break;
                 case "bili":
                    bl.login({
                        success: res => {
                            if (res.code) {
                                _this.sendLogin({ code: res.code }, callback);
                            } else {
                                console.log('登录失败！' + res.errMsg)
                                callback(0, res.errMsg);
                            }
                        }
                    });
                    break;
                default:
                    console.log(调用登陆类型错误);
                    callback(0, "调用登陆类型错误");

            }
        } catch (err) {
            callback(0, err);
            console.log("发起登陆发生错误" + err);
        }
    }


    //tologin发送信息到服务器
    sendLogin(data, callback) {
        var _this = this;
        try {
            console.log("发送登陆信息到服务器");
            //初始化login请求
            _this.httpRequest({
                url: "minimingriyouxi/init/game/" + _this.configure.gameAbb,
                method: "GET",
                data: data,
                responseType:"json",
                success: function (result) {
                    //console.log("获取返回登陆参数-->" + JSON.stringify(result)); 
                    var desResult = JSON.parse(result)
                    //等于1成功
                    console.log("==>show login result:"+result)
                    console.log("==>show login result:"+desResult.data.qqesuid)
                    if (desResult.code==1) {
                        _this.isLogin = true;
                        console.log("login code:"+desResult.code); 
                        callback(1, desResult.data);
                        _this.roleLoginData = desResult.data;
                    } else {
                        console.log("request failed...");
                        callback(desResult.code, desResult.data);
                    }
                },
                error: function (err) {
                    console.log("get er")
                    //失败
                    callback(0, err);
                }
            })
        } catch (err) {
            console.log("sendLogin" + err);
            callback(0, "sendLogin" + err);
        }
    }

    handleVivoErr(title, msg, callback) {
        qg.showDialog({
            title: title,
            message: msg,
            buttons: [{ text: "确定", color: "#000000" }],
            success: () => {
                _this.login(callback);
            },
            cancel: res => {
                qg.exitApplication();
            }
        });
    }



    //update请求进入游戏、更新角色、创建角色信息
    uploadRole(uploadType, roleParam, callback) {
        var _this = this;
        var roleUri;

        if (_this.isEmpty(roleParam) || _this.isEmpty(uploadType)) {
            console.log("角色信息上报、角色类型不能为空");
            callback(0, "角色信息上报、角色类型不能为空");
            return false;
        }

        if(_this.configure.channelType == "qq"){
            const devInfo = qq.getSystemInfoSync();
            const launchInfo = qq.getLaunchOptionsSync();
            roleParam.brand = devInfo.brand;
            roleParam.model = devInfo.model;
            roleParam.via = {
                scene: launchInfo.scene,
                k:JSON.stringify(launchInfo.query),
             };
            roleParam.system_info = JSON.stringify(devInfo);
            roleParam.launchInfo = JSON.stringify(launchInfo);
        }

        roleParam.cpgameid = _this.roleLoginData.cpgameid;
        roleParam.qqesuid = _this.roleLoginData.qqesuid;
        roleParam.channelid = _this.roleLoginData.channelid;
        roleParam.channeluid = _this.roleLoginData.channeluid;

        try {
            switch (uploadType) {
                case "creatRole":
                    roleUri = "wdxiaoyouxi/report/action/creatRole";
                    console.log("创建角色");
                    break;
                case "enterGame":
                    roleUri = "wdxiaoyouxi/report/action/beginGame";
                    console.log("进入游戏");
                    break;
                case "updateRole":
                    roleUri = "wdxiaoyouxi/report/action/upgradeRole";
                    console.log("更新角色信息");
                    break;
                default:
                    console.log("输入上传角色类型有误");
                    callback(0, "输入上传角色类型有误");
                    break;
            }
            //上报update请求
            _this.httpRequest({
                url: roleUri,
                method: "GET",
                data: roleParam,
                success: function (result) {
                    console.log(result);
                    if (result && result.code && result.code == 1) {
                        console.log("发送角色信息成功");
                        callback(1, "发送角色信息成功");
                    } else {
                        console.log("发起" + _this.configure.channelType + "角色信息时报:" + JSON.stringify(result));
                        console.log("发送角色信息参数:" + JSON.stringify(roleParam));
                        callback(result.code, JSON.stringify(result));
                    }
                },
                error: function (err) {
                    console.log("发送信息失败" + err);
                    callback(0, err);
                }
            })
        } catch (err) {
            console.log("角色信息上报发生错误" + err);
            callback(0, "角色信息上报发生错误" + err);
        } 
    }


    //发起预下订单
    toPay(czPayParam, callback) {
        try {
            var _this = this;

            if (!czPayParam || czPayParam == undefined || !this.isInit || !this.isLogin) {
                callback(0, "请检查支付参数、是否完成初始化及登陆");
                console.log("请检查支付参数、是否完成初始化及登陆");
                return false;
            }

            console.log("发起" + _this.configure.channelType + "预下订单");
            console.log("发起" + JSON.stringify(czPayParam))
            if (_this.configure.channelType === "oppo") czPayParam.engineVersion = this.oppoConfigure.platformVersion;
            //发起pay请求
            _this.httpRequest({
                url: "sdk/cpPay/" + _this.configure.gameAbb,
                method: "GET",
                data:czPayParam,
                responseType:"json",
                success: function (result) { 
                    console.log("TT返回："+result)
                    var resultTT = JSON.parse(result)
                    if (resultTT && resultTT.code && resultTT.code == 1) {
                        console.log("request pay .get orderid info is suc.");
                        _this.channelPay(resultTT.payParams, callback);
                    } else {
                        console.log("发起" + _this.configure.channelType + "预支付失败:" +resultTT);
                        callback(resultTT.code, resultTT);
                    }
                },
                error: function (err) {
                    console.log("预支付失败" + err);
                    callback(0, err);
                }
            })
        } catch (err) {
            console.log("预订单发生错误：" + err);
            callback(0, "toPay" + err);
        }
    }

    //pay请求发起渠道支付
    channelPay(data, callback) {
        var _this = this;

        console.log("发起" + _this.configure.channelType + "支付");
        try {
            switch (_this.configure.channelType) {
                case "vivo":
                    qg.pay({
                        orderInfo: data.orderInfo,
                        success: function (ret) {
                            callback(1, "vivo支付成功");
                            console.log("vivo支付成功");
                        },
                        fail: function (erromsg, errocode) {
                            console.log("发起vivo支付失败, errcode:" + errocode + " erromsg:" + erromsg);
                            callback(errocode, erromsg);
                        },
                        complete: function () { }
                    })
                    break;

                case "qq":
                    qq.requestMidasPayment({
                        prepayId: data.prepayId,
                        starCurrency: data.starCurrency,   //下单数量
                        setEnv: data.setEnv,          //1、0
                        success: res => {
                            console.log("qq支付成功, code:" + res);
                            console.log(res);
                            callback(1, res);
                        },
                        fail: res => {
                            console.log("qq支付失败:" + res);
                            console.log(res);
                            callback(0, res);
                        }
                    })
                    break;

                case "wx":
                    wx.requestMidasPayment({
                        mode: "game",
                        offerId: "",        //米大师id 
                        currencyType: "",   //币种
                        env: "1",             //测试环境0：正式，1：测试
                        buyQuantity: "",   //下单数量
                        success: res => {
                            if (res.code) {
                                console.log("获取qq登陆信息成功, code:" + res.code);
                                callback(1, res);
                            } else {
                                console.log('登录失败！' + res.errMsg)
                            }
                        },
                        fail: res => {
                            console.log("qq支付失败:" + res);
                            callback(0, res);
                        }
                    })
                    break;

                case "oppo":
                    qg.pay({
                        appId: data.appId,
                        token: _this.token,
                        timestamp: data.timestamp,
                        paySign: data.paySign,
                        orderNo: data.orderNo,

                        success: function (res) {
                            callback(1, "oppo支付成功");
                        },
                        fail: function (res) {
                            console.log("调用oppo支付失败" + res.toString());
                            callback(0, "oppoPay" + res.toString());
                        }
                    });
                    break;
                case "uc":
                    const systemInfo = uc.getSystemInfoSync()
                    if (!uc || typeof uc.requestPayment !== 'function' || compareVersion(systemInfo.SDKVersion, '1.0.1') < 0) {
                        // 由于内购功能有版本限制，因此需要判断当前环境是否支持内购、通过SDKVersion版本判断是否支持内购
                        alert('当前版本不支持内购功能，请升级UC浏览器。');
                        return false;
                    }

                    uc.requestPayment({
                        biz_id: 'xxx', // UC分配小游戏内购的 pay_biz_id
                        token: '', // 商户服预下单成功后返回的token
                        trade_id: '100', // 交易ID，后端返回
                        success: function (data) {
                            callback(1, data);
                        },
                        fail: function (data) {
                            alert(data);
                            callback(0, "ucPay" + data.toString());
                        },
                    });
                    break;
				 case "xiaomi":
					 qg.pay({
						       orderInfo: {
								 appId:data.appId, 
								 appAccountId:data.roleId,
								 session:_this.xiaomisession,
								 cpOrderId:data.order,
								 cpUserInfo:data.ext,
								 displayName:data.goodsname,
								 feeValue: data.fee,
								 sign:data.sign
							   },
								success: function(data){
									 //{memo: "支付成功", resultStatus: "9000"}
									 //9000: 支付成功
									 callback(1, "xiaomi 支付成功");
								},
								fail: function(data){
										 //{memo: "已取消支付", resultStatus: "6001"}
										 //6001: 已取消支付
										 //5000: 未安装微信
										 //5001: 微信订单未支付
									alert("--"+data.memo);
									callback(0, "xiaomi:" + data.toString());
								}
					}); 
					break;
					
                case "bili":
                    bl.requestRecharge({
                                        customerId: data.customer_id,
                                        merchantCode: data.merchant_code,
                                        coinType: data.coin_type,
                                        customerUserType: data.customer_user_type,
                                        customerUserId: data.customer_user_id,
                                        platformType: data.platform_type,
                                        transAmount: data.trans_amount,
                                        customerSeq: data.customer_seq,
                                        smallGameName: data.small_game_name,
                                        orientation: 2,
                                        sign: data.sign,
                                        success (res) {
                                           console.log("suc："+res.code+" "+res.msg); // 成功情况 code 是 0
                                        },
                                        fail (e) {
                                            console.error("fail："+e.code+" "+e.msg);
                                        }
                                    });
                    break
                    case this.channelArr[0]:
                        // ok.result is :{"code":1,"msg":"success","payParams":{"cp_order_id":"4471059","product_price":"6.00",
                        // "product_id":1,"product_cnt":1,"product_name":"60钻石","product_desc":"60钻石","ext":"4471059|rbsg",
                        // "event":"","server_id":"11","server_name":"飞仙十一区","role_id":"110001023","role_name":"莘思美"}}
                        console.log("支付选择"+this.channelArr[0])
                        console.log("支付选择"+data)
                        huoSdk.pay({
                            data: {
                              'order-currency': 'CNY',
                              'order-cp_order_id': data.cp_order_id,
                              'order-product_price':  data.product_price,
                              'order-product_id': data.product_id,
                              'order-product_cnt':data.product_cnt,
                              'order-product_name': data.product_name,
                              'order-product_desc': data.product_desc,
                              'order-ext': data.ext,
                              'role-event': '',
                              'role-server_id': data.server_id,
                              'role-server_name': data.server_name,
                              'role-role_id': data.role_id,
                              'role-role_name':data.role_name,
                              'role-role_level': 0,
                              'role-role_vip': 0
                            }
                          }).then(res => {
                            // do something              
                            //console.log("明日游戏wx login结果："+ this.cptoken); 
                            if(res.msg == "success"){
                              console.log("明日游戏wx login结果：成功"); 
                              callback(1, " 支付成功");
                            }else{
                              console.log("明日游戏wx login结果：失败"); 
                              callback(0, " 支付成功");
                            }
                          })
                        break
            }
        } catch (err) {
            console.log("发起渠道支付失败" + err);
            callback(0, err);
        }
    }

    // 分享
    share(title, imageUrl,paths, callback){
        var _this = this;

        console.log("发起" + _this.configure.channelType + "分享");
        try{
            if(_this.configure.channelType == "qq"){
                qq.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl, // 图片 URL
                    query   : 'openid=' + _this.roleLoginData.channeluid,
                    success: res => {
                        console.log("qq分享成功, code:" + res);
                        console.log(res);
                        callback(1, "qq分享成功");
                    },
                    fail: res => {
                        console.log("qq分享失败:" + res);
                        console.log(res);
                        callback(0, res);
                    }
                });
            }else if(_this.configure.channelType == this.channelArr[0]){
                huoSdk.getShareInfo({
                    data: {
                      path: paths
                    }
                  }).then(res => {
                    // 小程序
                    
                    console.log("分享结果："+res.msg)
                    if(res.msg =='success'){
                        console.log("分享成功")
                        this.setData({
                            shareInfo: res.data,                            
                          })
                          // 小游戏
                        wx.onShareAppMessage(function () {
                            return {
                            title: res.data.title,
                            imageUrl: res.data.image,
                            query: `state=${res.data.state}`
                            }
                        })
                        wx.showShareMenu()
                    }else{
                        console.log("分享失败")
                    }
                })   
            }
        } catch(err) {
            console.log("发起渠道分享失败" + err );
            callback(0, err);
        }
    }

    //qq订阅信息
    subscribe(tmplIdsArr, isSubscribe, callback){
        var _this = this;

        console.log("发起" + _this.configure.channelType + "订阅");
        try{
            if(_this.configure.channelType == "qq"){
                qq.subscribeAppMsg({
                    tmplIds: tmplIdsArr,
                    subscribe: isSubscribe, 
                    success: res => {
                        console.log("qq订阅成功, code:" + res);
                        console.log(res);
                        callback(1, "订阅信息成功");
                    },
                    fail: res => {
                        console.log("qq订阅失败:" + res);
                        console.log(res);
                        callback(0, res);
                    }
                });
            }
        } catch(err) {
            console.log("发起渠道订阅失败" + err );
            callback(0, err);
        }
    }

    //mingriyouxi
     //update请求进入游戏、更新角色、创建角色信息
     uploadRole2g(uploadType, roleParam, callback) {
        console.log("-----------------------------------------------------");
        var _this = this;
        var roleUri;
        console.log("---------------------------上报-----------------------");
        if (_this.isEmpty(roleParam) || _this.isEmpty(uploadType)) {
            console.log("角色信息上报、角色类型不能为空");
            callback(0, "角色信息上报、角色类型不能为空");
            return false;
        }

        if(_this.configure.channelType == "qq"){
            const devInfo = qq.getSystemInfoSync();
            const launchInfo = qq.getLaunchOptionsSync();
            roleParam.brand = devInfo.brand;
            roleParam.model = devInfo.model;
            roleParam.via = {
                scene: launchInfo.scene,
                k:JSON.stringify(launchInfo.query),
             };
            roleParam.system_info = JSON.stringify(devInfo);
            roleParam.launchInfo = JSON.stringify(launchInfo);
        }
        roleParam.cpgameid = _this.roleLoginData.cpgameid;
        roleParam.qqesuid = _this.roleLoginData.qqesuid;
        roleParam.channelid = _this.roleLoginData.channelid;
        roleParam.channeluid = _this.roleLoginData.channeluid;

        try {
            switch (uploadType) {
                case "creatRole":
                    roleUri = "sdk/createRole";
                    console.log("创建角色");
                    break;
                case "enterGame":
                    roleUri = "sdk/beginGame";
                    console.log("进入游戏");
                    break;
                case "updateRole":
                    roleUri = "sdk/userUpgrade";
                    console.log("更新角色信息");
                    break;
                default:
                    console.log("输入上传角色类型有误");
                    callback(0, "输入上传角色类型有误");
                    break;
            }
            //上报update2请求
            _this.httpRequest({
                url: roleUri,
                method: "GET",
                data: roleParam,
                responseType:"json",
                success: function (result) {
                    console.log("->>>>>>"+result);
                    var resultTT = JSON.parse(result)
                    console.log("->>>>>>"+resultTT.roleInfo);
                    if ( resultTT.code == 1) {
                        console.log("--发送角色信息成功--");
                        _this.channelUpdateMethod(uploadType,roleParam);
                        callback(resultTT.code, "发送角色信息成功");
                    } else {
                        console.log("发起" + _this.configure.channelType + "失败:" + resultTT);
                        console.log("发送角色信息参数:" + roleParam);
                        callback(resultTT.code, resultTT);
                    }
                },
                error: function (err) {
                    console.log("xr-------------------");
                    //callback(0, err);
                }
            })
        } catch (err) {
            console.log("角色信息上报发生错误" + err);
            callback(0, "角色信息上报发生错误" + err);
        }
        
        console.log("-----------------------------------------------------");
    }


    channelUpdateMethod(uploadType,roleParam){
        var _this = this; 
        console.log("发起" + _this.configure.channelType + "上报");
        var evelType = "other"
        var roleUri = ""
        try {
            switch (uploadType) {
                case "creatRole":
                    roleUri = "sdk/createRole";
                    evelType = "create"
                    console.log("channel创建角色");
                    break;
                case "enterGame":
                    roleUri = "sdk/beginGame";
                    evelType = "online"
                    console.log("channel进入游戏");
                    break;
                case "updateRole":
                    roleUri = "sdk/userUpgrade";
                    evelType = "levelup"
                    console.log("channel更新角色信息");
                    break;
                default:
                    evelType = "other"
                    console.log("channel输入上传角色类型有误");
                    callback(0, "channel输入上传角色类型有误");
                    break;
            }
            
            huoSdk.updateRoleInfo({
                data: {
                  'role-event': evelType,
                  'role-server_id': roleParam.serverId,
                  'role-server_name': roleParam.serverName,
                  'role-role_id':  roleParam.roleId,
                  'role-role_name': roleParam.roleName,
                  'role-role_level': roleParam.level,
                  'role-role_vip': roleParam.vip,
                  'role-combat_num': roleParam.rolePower,
                  'role-onlineTime': 0,
                  'role-scene': '背包',
                  'role-axis': '(999,999,999)',
                  'role-scene': '打开礼包'
                }
              }).then(res => {
                // do something
                console.log('mingri '+evelType+'is ok.')
              }, err => {
                // handle error
                console.log('mingri '+evelType+'is error.')
              })

            switch (_this.configure.channelType) {
                case this.channelArr[0]:
                    console.log("进行上报")
                    //主动上传用户信息，需先校验用户是否开启授权
                    wx.getSetting({
                    success: res => {
                        if (res.authSetting['scope.userInfo']) {
                        // 用户当前已授权，则可调用 wx.getUserInfo 获取用户最新个人信息
                        wx.getUserInfo({
                            success: res => {
                            huoSdk.updateSelfInfo({
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
                    break;
            }
        }catch(err){
            console.log("上报出错"+err)
        }
    }

    messageCheck(msgq,callback){
        console.log('==>>>'+msgq)
        huoSdk.checkMsg({            
            data: {
              content: msgq
            }
          }).then(res => {
            console.log(res)
            callback(msgq,res)
          }, err => {
            console.log(err)
            callback(msgq,err)
          })
    }


}
window['czsdk_WeChat'] = czsdk_WeChat;