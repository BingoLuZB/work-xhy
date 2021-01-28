class MiniSdk {
    constructor() {
        // 接口地址
        this.protocol = 'https';
        this.apiPrefix = 'https://api.icefoxgame.com/api/v1';
        this.sdkPrefix = 'https://sdkapi.icefoxgame.com/api/v1';
        this.orderPrefix = 'https://order.icefoxgame.com/api/v1';
        this.playPrefix = 'https://play.icefoxgame.com/api/v1';
        this.logPrefix = 'https://log.icefoxgame.com/api/v1';
        this.partnerFix = 'https://partner.icefoxgame.com/api/v1';
        this.notifyrFix = 'https://notify.icefoxgame.com/api/v1';

        // 回调函数
        this.loginCallback = '';
        this.payCallback = '';
        this.shareCallback = '';
        this.reportCallback = '';
        // 支付通知触发参数
        this.repay_timer = '';
        this.repay_delay = 6000;
        this.repay_empty_count = 0;
        this.repay_empty_count_max = 10;
        // 传入的分享参数
        this.shareQuery = '';
        // 分享的数据
        this.shareData = ''
        // 配置
        this.config = '';
        // 系统
        this.system = '';
        // client_id
        this.client_id = '';
        // 用户信息
        this.userInfo = '';
        // 绑定信息
        this.unionInfo = '';
        // 场景值
        this.via = '';
        // 分享异步赋值
        this.judgeFlag = false;
    }

    /**
     * 初始化
     * @param {*} config 
     * @param {*} callBack 
     */
    init(config, callBack = '') {
        const that = this;
        this.config = config;
        if (!config.pid) {
            console.log('init Error：缺少pid');
            return;
        }
        if (!config.gid) {
            console.log('init Error：缺少gid');
            return;
        }
        if (config.debug) {
            this.repay_empty_count_max = 3;
            this.repay_delay = 2000;
        }
        const options = wx.getLaunchOptionsSync();
        this.config.mid = options.query.mid || '10000'
        this.config.p_mid = options.query.p_mid || 1
        // 获取client_id
        let client_id = wx.getStorageSync('client_id');
        if (!client_id) {
            client_id = this.getClientId();
            wx.setStorageSync('client_id', client_id);
        }
        // 获取系统信息
        let systemObj = wx.getSystemInfoSync();
        if (systemObj.system.toLowerCase().includes('ios')) {
            this.system = 'ios';
        } else {
            this.system = 'android';
        }
        this.client_id = client_id;
        let initData = {
            pid: config.pid,
            gid: config.gid,
            mid: config.mid,
            p_mid: config.p_mid,
            client_id: client_id,
            brand: systemObj.brand,
            model: systemObj.model,
            wpi: systemObj.windowWidth || 0,
            hpi: systemObj.windowHeight || 0,
            version: systemObj.version,
            platform: that.system,
            tm: Date.parse(new Date()) / 1000,
        };
        initData.sign = this.signData(initData);

        wx.request({
            url: `${this.sdkPrefix}/mini/init`,
            data: initData,
            method: 'post',
            success: (res) => {
                const resData = res.data
                if (resData.code === 200) {
                    that.config.shareImg = resData.data.config.share_img;
                    that.config.shareTitle = resData.data.config.share_title;
                    that.config.mid = resData.data.config.mid;
                    that.config.p_mid = resData.data.config.p_mid;
                    if (callBack && typeof (callBack) === 'function') {
                        callBack(that.checkRes(200, resData.data.config, resData.msg));
                    }
                } else {
                    that.showMsg(resData.msg)
                }
            },
            fail: (err) => {
                that.showMsg(err.msg)
            }
        });
        this.startRepay();
    }

    // 重复触发发货通知
    startRepay(res) {
        const that = this;
        if (wx.getStorageSync('accessToken') && wx.getStorageSync('orderNo') && wx.getStorageSync('hasOrder') == 1) {
            that.repay_timer = setInterval(function () {
                that.repay_empty_count++;
                if (that.repay_empty_count > that.repay_empty_count_max) {
                    clearInterval(that.repay_timer);
                    that.repay_timer = null;
                } else {
                    that.sendPayNotify();
                }
            }, that.repay_delay * that.repay_empty_count);
        }
    }

    // 发货通知函数
    sendPayNotify() {
        const that = this;
        if (wx.getStorageSync('accessToken') && wx.getStorageSync('orderNo')) {
            const notifyData = {
                accessToken: wx.getStorageSync('accessToken'),
                orderNo: wx.getStorageSync('orderNo'),
                platform: that.system,
                sessionKey: wx.getStorageSync('sessionKey'),
            };
            notifyData.sign = that.signData(notifyData)
            that.repay_empty_count++;
            wx.request({
                url: `${that.notifyrFix}/partner/call/${that.config.pid}/${that.config.gid}`,
                data: notifyData,
                method: 'post',
                success: function (res) {
                    const resData = res.data;
                    if (resData.code === 200) {
                        if (that.config.debug) {
                            that.showMsg('回调成功')
                        }
                        that.payCallback(that.checkRes(200, '', 'success'));
                        clearInterval(that.repay_timer);
                        that.repay_timer = null;
                        wx.setStorageSync('hasOrder', 0)
                        wx.removeStorageSync('orderNo')
                    } else {
                        if (that.repay_empty_count >= that.repay_empty_count_max) {
                            wx.setStorageSync('hasOrder', 0)
                            wx.removeStorageSync('orderNo')
                            that.payCallback(that.checkRes(resData.code, '', resData.msg));
                        } else {
                            that.repay_empty_count++;
                            setTimeout(() => {
                                that.sendPayNotify()
                            }, that.repay_empty_count * 1000)
                        }
                    }
                },
                fail: function (err) {
                    that.showMsg(JSON.stringify(err))
                }
            })
        }
    }

    /**
     * 伪造client_id
     */
    getClientId() {
        const myDate = new Date();
        let client_id = 'wx';
        const num = parseInt(Math.random() * (9999 - 1000 + 1) + 1000000, 10);
        client_id += myDate.getFullYear();
        client_id += '-' + (myDate.getMonth() + 1);
        client_id += '-' + myDate.getDate();
        client_id += '-' + myDate.getHours();
        client_id += '-' + myDate.getMinutes();
        client_id += '-' + myDate.getSeconds();
        client_id += '-' + num;
        return client_id;
    }

    /**
     * 检测session状态
     * @param {*} callBack 
     */
    checkSession(callBack) {
        const that = this;
        wx.checkSession({
            success(res) {
                callBack(that.checkRes(200));
            },
            fail(err) {
                callBack(that.checkRes(500, '', err.errMsg));
            }
        })
    }
    /**
     * 登录 
     * @param {*} callBack 
     */
    login(callBack) {
        const that = this;
        if (this.compareVersion(wx.getSystemInfoSync().SDKVersion, '2.0.6') >= 0) {
            that.loginFun(callBack)
        } else {
            wx.getSetting({
                success(res) {
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success() {
                            that.loginFun(callBack)
                        }
                    })
                }
            })
        }
        // that.loginFun(callBack)
    }
    /**
     * 登录回调
     * @param {*} loginCallBack 
     */
    loginFun(loginCallBack) {
        const that = this;
        that.loginCallback = loginCallBack;
        wx.login({
            success: (res) => {
                let loginData = {
                    pid: this.config.pid,
                    gid: this.config.gid,
                    mid: this.config.mid,
                    p_mid: this.config.p_mid,
                    tm: Date.parse(new Date()) / 1000,
                    client: 'h5',
                    client_id: that.client_id,
                    partner_login_data: JSON.stringify({
                        code: res.code,
                        system: that.system,
                        client_id: that.client_id,
                    })
                };
                loginData.sign = this.signData(loginData);
                // 触发登录接口
                wx.request({
                    url: `${this.partnerFix}/partner/login/account`,
                    data: loginData,
                    method: 'post',
                    success: (res) => {
                        const resData = res.data.data;
                        if (res.data.code !== 200) {
                            that.showMsg('登陆失败，请联系客服');
                            return false;
                        }
                        that.userInfo = resData;
                        const cpUserInfo = {
                            accessToken: resData.access_token,
                            device: resData.device,
                            gameName: resData.game_name,
                            uid: resData.p_uid,
                        }
                        that.config.mid = resData.mid;
                        // 设置缓存
                        wx.setStorageSync('accessToken', resData.access_token);
                        wx.setStorageSync('sessionKey', resData.session_key);
                        // 返回给cp
                        that.loginCallback(that.checkRes(200, cpUserInfo, 'success'));
                    },
                    fail: function (res) {
                        that.loginCallback(that.checkRes(500, '', 'fail'));
                    }
                })
            },
            fail: function (res) {
                console.log('fail', res);
            }
        });
    }




    /**
     *  小程序和公众号绑定
     * @param {*} data 
     */
    bindAccount(data, callBack) {
        let that = this;
        let bindData = {
            pid: that.config.pid,
            gid: that.config.gid,
            access_token: data.access_token || wx.getStorageSync('accessToken'),
            encryptedData: data.encryptedData || that.unionInfo.encryptedData,
            iv: data.iv || that.unionInfo.iv,
            session_key: wx.getStorageSync('sessionKey')
        }
        bindData.sign = that.signData(bindData)
        if (data.encryptedData && data.iv) {
            wx.request({
                url: `${this.partnerFix}/partner/related/account`,
                data: bindData,
                method: 'post',
                success: (res) => {
                    if (res.data.code == 200) {
                        if (callBack && typeof (callBack) === 'function') {
                            wx.setStorageSync('unionId', res.data.data.unionId);
                            callBack(that.checkRes(200, res.data, 'success'));
                        }
                    } else {
                        callBack(that.checkRes(res.data.code, "", res.data.msg));
                    }
                },
                fail: function (err) {
                    callBack(that.checkRes(err.data.code, "", err.data.msg));
                }
            })
        }
    }

    /**
     * 创建按钮
     * @param {*} config 
     */
    createUserInfoBtn(config) {
        let that = this;
        let button = ''
        let btnConfitg = {
            type: config.type || 'type',
            style: {
                left: config.style.left || 10,
                top: config.style.top || 76,
                width: config.style.width || 200,
                height: config.style.height || 40,
                lineHeight: config.style.lineHeight || 40,
                backgroundColor: config.style.backgroundColor || '#f00',
                color: config.style.color || '#ffffff',
                textAlign: config.style.textAlign || 'center',
                fontSize: config.style.fontSize || 16,
                borderRadius: config.style.borderRadius || 4
            }
        };
        if (config.type === 'image' && config.image) {
            btnConfitg.image = config.image
        } else {
            btnConfitg.text = btnConfitg.text || '获取用户信息'
        }
        if (this.compareVersion(wx.getSystemInfoSync().SDKVersion, '2.0.6') >= 0) {
            button = wx.createUserInfoButton(btnConfitg)
        } else {
            return false
        }
        return button
    }

    /**
     * 角色信息上报
     * @param {*} data 
     * @param {*} callBack 
     */
    submitRoleInfo(roleData = {}, callBack = '') {
        const that = this;
        const data = {
            tm: Date.parse(new Date()) / 1000,
            pid: this.config.pid,
            gid: this.config.gid,
            mid: this.config.mid,
            action: roleData.info_type,
            access_token: roleData.access_token || wx.getStorageSync('accessToken'),
            role_info: JSON.stringify(roleData),
            client: 'h5',
            // access_token: this.userInfo.access_token,
        };
        data.sign = this.signData(data);
        // 触发角色上报接口
        wx.request({
            url: `${this.logPrefix}/role/index`,
            data: data,
            method: 'post',
            success: (res) => {
                if (res.data.code === 200) {
                    if (callBack && typeof (callBack) === 'function') {
                        callBack(that.checkRes(200, '上报成功'));
                    }
                } else {
                    that.showMsg(res.data.msg);
                }
            },
            fail: function (err) {
                that.showMsg(err.data.msg);
            }
        })
    }

    /**
     * 支付
     * @param {*} orderData 支付数据
     * @param {*} callBack 支付后回调
     */
    pay(data, callBack = '') {
        this.payCallback = callBack;
        let checkPayRes = this.checkPayData(data);
        const that = this;
        if (checkPayRes.isPay) {
            let client_id = wx.getStorageSync('client_id');
            if (client_id) {
                // 下单参数
                const orderData = {
                    pid: that.config.pid,
                    gid: that.config.gid,
                    mid: that.config.mid,
                    p_mid: that.config.p_mid,
                    tm: Date.parse(new Date()) / 1000,
                    access_token: data.access_token,
                    amt: data.amt,
                    game_order_no: data.game_order_no,
                    goods_name: data.goods_name,
                    role_id: data.role_id,
                    role_name: data.role_name,
                    role_level: data.role_level,
                    server_id: data.server_id,
                    server_name: data.server_name,
                    game_order_no: data.game_order_no,
                    client: 'h5',
                    client_id: that.client_id,
                    device_id: '',
                    sdk_ver: '',
                    game_ext: data.game_ext || '',
                    partner_pay_data: JSON.stringify({
                        system: that.system
                    })
                }
                orderData.sign = this.signData(orderData);
                // 多渠道下单
                wx.request({
                    url: `${that.orderPrefix}/partner/order`,
                    data: orderData,
                    method: 'post',
                    success: (res) => {
                        let data = res.data.data
                        if (res.data.code === 200) {
                            // 支付方式
                            if (data.partner_data.type == 2) {
                                that.useServicePay()
                            } else if (data.partner_data.type == 3) {
                                that.useLinkPay(that.b64DecodeUnicode(data.partner_data.status));
                            } else if (data.partner_data.type == 4) {
                                that.useMiniGamePay(data.partner_data.status);
                            } else if (data.partner_data.type == 1) {
                                that.useNativePay(data.partner_data, data.my_order_no);
                            }
                        }
                    },
                    fail: function (res) {
                        console.log('pay fail');
                    }
                })
            } else {
                this.login(this.loginCallback);
            }
        } else {
            this.showMsg(checkPayRes.msg, true);
        }
    }

    /**
     * 设置分享函数，被动
     * @param {*} data 
     * @param {*} callBack 
     */
    setShare(data = '', callBack = '') {
        const that = this;
        if (!that.judgeFlag) {
            that.getShareData(data, callBack, 'setShare')
            return false
        }
        let query = '';
        if (data.query) {
            query = that.pareUrl(data.query)
        } else {
            query = wx.getLaunchOptionsSync().query;
        }
        query.mid = 10000
        query.p_mid = that.config.p_mid;
        query = this.signData(query, true)
        wx.showShareMenu({
            withShareTicket: true
        });
        let title = data.shareTitle || that.config.shareTitle
        let imgUrl = data.shareImg || that.config.shareImg
        if (!title) {
            console.log('没有分享标题')
        } else if (!imgUrl) {
            console.log('没有分享图')
        }
        that.shareData = {
            title: title,
            imageUrl: imgUrl,
            query: query,
            success: (res) => {
                var shareTicket = (res.shareTickets && res.shareTickets[0]) || ''
                wx.getShareInfo({
                    // 把票据带上
                    shareTicket: shareTicket,
                    success: function (res) {
                        // // 如果从小程序分享没有source，如果从别人分享的再二次分享带有source
                        // // 后续会讲_this.data.source的来源
                        // let source = _this.data.source ? _this.data.source : '';
                        // // 上报给后台，把群信息带给后台，后台会去解密得到需要的信息
                        // _this.upload_share_Result(res, '1', source)
                        that.showMsg('分享成功')

                    }
                })
            },
            fail: (err) => {
                that.showMsg('分享失败')
                console.log("share fail", err);
            }
        };
        wx.onShareAppMessage(function () {
            return that.shareData;
        });
        that.judgeFlag = false
    }

    /**
     * 主动分享
     */
    goShare(data = '', callBack = '') {
        console.log(34324324)
        const that = this;
        if (!that.judgeFlag) {
            that.getShareData(data, callBack, 'goShare')
            return false
        }
        let query = '';
        if (data.query) {
            query = that.pareUrl(data.query)
        } else {
            query = wx.getLaunchOptionsSync().query;
        }
        query.mid = 10000;
        query.p_mid = that.config.p_mid;
        query = this.signData(query, true)
        wx.showShareMenu();
        let title = data.shareTitle || that.config.shareTitle
        let imgUrl = data.shareImg || that.config.shareImg
        if (!title) {
            console.log('没有分享标题')
        } else if (!imgUrl) {
            console.log('没有分享图')
        }
        that.shareData = {
            title: data.shareTitle || that.config.shareTitle,
            imageUrl: data.shareImg || that.config.shareImg,
            query: query,
            success: (res) => {
                that.showMsg(JSON.stringify(res))
                if (that.config.debug) {
                    that.showMsg('分享成功')
                }
                if (callBack && typeof (callBack) === 'function') {
                    that.shareCallback = callBack;
                    that.shareCallback();
                } else {
                    that.showMsg('分享成功')
                }
            },
            fail: (err) => {
                that.showMsg('分享失败')
                console.log("share fail", err);
            }
        };
        wx.shareAppMessage(this.shareData);
        that.judgeFlag = false
    }

    /* 
        获取分享数据
    */
    getShareData(shareData, callBack, type) {
        const that = this
        let sendShareData = {
            pid: that.config.pid,
            gid: that.config.gid,
            tm: Date.parse(new Date()) / 1000,
            client: 'h5',
            partner_data: JSON.stringify({
                key: shareData.key || ''
            }),
        }
        sendShareData.sign = this.signData(sendShareData)
        wx.request({
            url: `${this.partnerFix}/partner/share`,
            data: sendShareData,
            method: 'POST',
            success: (res) => {
                let code = res.data.code
                let data = res.data.data
                if (code == 200) {
                    that.config.shareImg = data.image
                    that.config.shareTitle = data.title
                    that.judgeFlag = true
                    if (type == 'setShare') {
                        that.setShare(shareData, callBack)
                    } else if (type == 'goShare') {
                        that.goShare(shareData, callBack)
                    }
                }
            },
            fail: (err) => {
                that.showMsg(err.msg)
            }
        });
    }

    /**
     * 原生支付：米大师支付
     * @param {*} data 
     */
    useNativePay(data, orderNo) {
        const that = this;
        wx.requestMidasPayment({
            mode: 'game',
            env: data.env, // 0:正式 1：沙箱
            offerId: data.offerId, //在米大师侧申请的应用 id
            currencyType: 'CNY',
            buyQuantity: data.buyQuantity, //金额
            platform: that.system,
            zoneId: data.zoneId,
            success: (res) => {
                wx.setStorageSync('orderNo', orderNo)
                that.sendPayNotify()
            },
            fail: (err) => {
                if (that.payCallback) {
                    that.payCallback(that.checkRes(500, '', '支付失败'));
                }
            },
        });
    }

    /**
     * 客服窗口支付
     */
    useServicePay() {
        const that = this;
        wx.showModal({
            title: "支付提示",
            content: "即将进入客服窗口，请输入【充值】获取订单并完成支付",
            success: function () {
                // that.showMsg('点击')
                wx.openCustomerServiceConversation({
                    success: () => {
                        // that.showMsg('拉起成功')
                    },
                    fail: (err) => {
                        // that.showMsg(JSON.stringify(err))
                    }
                });
            }
        });
    }

    /**
     * 提示外链支付
     * @param {*} data 
     */
    useLinkPay(data) {
        const that = this
        wx.showModal({
            title: '点击复制url到浏览器支付',
            content: that.shareData.title || '复制链接进行支付',
            confirmText: '复制',
            success(res) {
                if (res.confirm) {
                    wx.setClipboardData({
                        data: data,
                        success(res) {
                            wx.getClipboardData({
                                success(res) {
                                    console.log(data.url) // data
                                }
                            })
                        }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

    /**
     * 使用其他小程序进行支付
     * @param {*} data 
     */
    useMiniGamePay(data) {
        const that = this;
        wx.request({
            url: `${that.playPrefix}/play/create`,
            data: data,
            method: 'post',
            success: (res) => {
                let data = res.data.data
                if (res.data.code === 200) {

                }
            },
            fail: function (res) {
                console.log('pay fail');
            }
        })

    }

    /**
     * 格式化返回信息
     * @param {*} code 状态
     * @param {*} data 数据
     * @param {*} msg 信息
     */
    checkRes(code, data, msg) {
        const resObj = {
            code: code,
            data: data,
            msg: msg
        }
        return resObj
    }

    /**
     * 检查支付数据
     * @param {*} data 
     */
    checkPayData(data) {
        let isPay = true;
        let msg = 'success';
        let resObj = {};
        if (!data.amt) {
            isPay = false;
            msg = '缺少金额'
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.game_order_no) {
            isPay = false;
            msg = '缺少订单号'
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.goods_name) {
            isPay = false;
            msg = '缺少订商品名';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.role_id) {
            isPay = false;
            msg = '缺少角色id';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.role_name) {
            isPay = false;
            msg = '缺少角色名';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.role_level) {
            isPay = false;
            msg = '缺少角色等级';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.server_id) {
            isPay = false;
            msg = '缺少服务器id';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        if (!data.server_name) {
            isPay = false;
            msg = '缺少服务器名';
            resObj = {
                isPay,
                msg
            }
            return resObj;
        }
        resObj = {
            isPay,
            msg
        }
        return resObj;
    }

    /**
     * 签名 / 排序参数
     * @param {*} queryObj 
     * @param {*} noMd5 
     */
    signData(queryObj, noMd5) {
        const keyArr = Object.keys(queryObj);
        let str = '';
        keyArr.includes('sign') ? keyArr.splice(keyArr.findIndex(item => item === 'sign'), 1) : ''
        keyArr.sort();
        for (let i = 0; i < keyArr.length; i += 1) {
            if (queryObj[keyArr[i]] !== 0 && queryObj[keyArr[i]]) {
                str = `${str}&${keyArr[i]}=${queryObj[keyArr[i]]}`;
            }
        }
        if (noMd5) {
            return `${str.substr(1)}`;
        } else {
            return md5(`${str.substr(1)}&`);
        }
    }

    /**
     * 提示信息
     * @param {*} msg 
     */
    showMsg(msg) {
        wx.showModal({
            title: '提示信息',
            content: msg
        });
    }

    /**
     * 解开base64
     * @param {*} str 
     */
    b64DecodeUnicode(str) {
        const that = this;
        const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        let i = 0;
        str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < str.length) {
            enc1 = base64EncodeChars.indexOf(str.charAt(i++));
            enc2 = base64EncodeChars.indexOf(str.charAt(i++));
            enc3 = base64EncodeChars.indexOf(str.charAt(i++));
            enc4 = base64EncodeChars.indexOf(str.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        return that.utf8_decode(output);
    }

    /*
     *  utf-8解码
     *  @parm : utftext 传入的字符串
     */
    utf8_decode(utftext) {
        let string = '';
        let i = 0;
        let c = 0;
        let c1 = 0;
        let c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c1 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                i += 2;
            } else {
                c1 = utftext.charCodeAt(i + 1);
                c2 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                i += 3;
            }
        }
        return string;
    }
    /**
     * 格式化url参数
     * @param {*} data 
     */
    pareUrl(data) {
        const url = data;
        const obj = {};
        let keyvalue = [];
        let paraString = '';
        const num = url.indexOf('?');
        paraString = url.substr(num + 1);
        paraString = paraString.split('&');
        for (const i in paraString) {
            if (Object.prototype.hasOwnProperty.call(paraString, i)) {
                keyvalue = paraString[i].split('=');
                const key = keyvalue[0];
                const value = keyvalue[1];
                obj[key] = value;
            }
        }
        return obj;
    }

    /**
     * 版本对比
     * @param {*} v1 
     * @param {*} v2 
     */
    compareVersion(v1, v2) {
        v1 = v1.split('.')
        v2 = v2.split('.')
        const len = Math.max(v1.length, v2.length)

        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i])
            const num2 = parseInt(v2[i])

            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }
        return 0
    }
};

function md5RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
}

function md5AddUnsigned(lX, lY) {
    let lX4, lY4, lX8, lY8, lResult
    lX8 = (lX & 0x80000000)
    lY8 = (lY & 0x80000000)
    lX4 = (lX & 0x40000000)
    lY4 = (lY & 0x40000000)
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF)
    if (lX4 & lY4) {
        return (lResult ^ 0x80000000 ^ lX8 ^ lY8)
    }
    if (lX4 | lY4) {
        if (lResult & 0x40000000) {
            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8)
        } else {
            return (lResult ^ 0x40000000 ^ lX8 ^ lY8)
        }
    } else {
        return (lResult ^ lX8 ^ lY8)
    }
}

function md5F(x, y, z) {
    return (x & y) | ((~x) & z)
}

function md5G(x, y, z) {
    return (x & z) | (y & (~z))
}

function md5H(x, y, z) {
    return (x ^ y ^ z)
}

function md5I(x, y, z) {
    return (y ^ (x | (~z)))
}

function md5FF(a, b, c, d, x, s, ac) {
    a = md5AddUnsigned(a, md5AddUnsigned(md5AddUnsigned(md5F(b, c, d), x), ac))
    return md5AddUnsigned(md5RotateLeft(a, s), b)
}

function md5GG(a, b, c, d, x, s, ac) {
    a = md5AddUnsigned(a, md5AddUnsigned(md5AddUnsigned(md5G(b, c, d), x), ac))
    return md5AddUnsigned(md5RotateLeft(a, s), b)
}

function md5HH(a, b, c, d, x, s, ac) {
    a = md5AddUnsigned(a, md5AddUnsigned(md5AddUnsigned(md5H(b, c, d), x), ac))
    return md5AddUnsigned(md5RotateLeft(a, s), b)
}

function md5II(a, b, c, d, x, s, ac) {
    a = md5AddUnsigned(a, md5AddUnsigned(md5AddUnsigned(md5I(b, c, d), x), ac))
    return md5AddUnsigned(md5RotateLeft(a, s), b)
}

function md5ConvertToWordArray(string) {
    let lWordCount
    let lMessageLength = string.length
    let lNumberOfWordsTemp1 = lMessageLength + 8
    let lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64
    let lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16
    let lWordArray = Array(lNumberOfWords - 1)
    let lBytePosition = 0
    let lByteCount = 0
    while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4
        lBytePosition = (lByteCount % 4) * 8
        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition))
        lByteCount++
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4
    lBytePosition = (lByteCount % 4) * 8
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition)
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29
    return lWordArray
}

function md5WordToHex(lValue) {
    let WordToHexValue = ''
    let WordToHexValueTemp = ''
    let lByte
    let lCount
    for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255
        WordToHexValueTemp = '0' + lByte.toString(16)
        WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2)
    }
    return WordToHexValue
}

function md5Utf8Encode(string) {
    string = string.replace(/\r\n/g, '\n')
    let utftext = ''
    for (let n = 0; n < string.length; n++) {
        let c = string.charCodeAt(n)
        if (c < 128) {
            utftext += String.fromCharCode(c)
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192)
            utftext += String.fromCharCode((c & 63) | 128)
        } else {
            utftext += String.fromCharCode((c >> 12) | 224)
            utftext += String.fromCharCode(((c >> 6) & 63) | 128)
            utftext += String.fromCharCode((c & 63) | 128)
        }
    }
    return utftext
}
const md5 = (string) => {
    let x = []
    let k
    let AA
    let BB
    let CC
    let DD
    let a
    let b
    let c
    let d
    let [S11, S12, S13, S14, S21, S22, S23, S24, S31, S32, S33, S34, S41, S42, S43, S44] = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21]
    string = md5Utf8Encode(string)
    x = md5ConvertToWordArray(string)
    a = 0x67452301
    b = 0xEFCDAB89
    c = 0x98BADCFE
    d = 0x10325476
    for (k = 0; k < x.length; k += 16) {
        AA = a
        BB = b
        CC = c
        DD = d
        a = md5FF(a, b, c, d, x[k + 0], S11, 0xD76AA478)
        d = md5FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756)
        c = md5FF(c, d, a, b, x[k + 2], S13, 0x242070DB)
        b = md5FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE)
        a = md5FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF)
        d = md5FF(d, a, b, c, x[k + 5], S12, 0x4787C62A)
        c = md5FF(c, d, a, b, x[k + 6], S13, 0xA8304613)
        b = md5FF(b, c, d, a, x[k + 7], S14, 0xFD469501)
        a = md5FF(a, b, c, d, x[k + 8], S11, 0x698098D8)
        d = md5FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF)
        c = md5FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1)
        b = md5FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE)
        a = md5FF(a, b, c, d, x[k + 12], S11, 0x6B901122)
        d = md5FF(d, a, b, c, x[k + 13], S12, 0xFD987193)
        c = md5FF(c, d, a, b, x[k + 14], S13, 0xA679438E)
        b = md5FF(b, c, d, a, x[k + 15], S14, 0x49B40821)
        a = md5GG(a, b, c, d, x[k + 1], S21, 0xF61E2562)
        d = md5GG(d, a, b, c, x[k + 6], S22, 0xC040B340)
        c = md5GG(c, d, a, b, x[k + 11], S23, 0x265E5A51)
        b = md5GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA)
        a = md5GG(a, b, c, d, x[k + 5], S21, 0xD62F105D)
        d = md5GG(d, a, b, c, x[k + 10], S22, 0x2441453)
        c = md5GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681)
        b = md5GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8)
        a = md5GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6)
        d = md5GG(d, a, b, c, x[k + 14], S22, 0xC33707D6)
        c = md5GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87)
        b = md5GG(b, c, d, a, x[k + 8], S24, 0x455A14ED)
        a = md5GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905)
        d = md5GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8)
        c = md5GG(c, d, a, b, x[k + 7], S23, 0x676F02D9)
        b = md5GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A)
        a = md5HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942)
        d = md5HH(d, a, b, c, x[k + 8], S32, 0x8771F681)
        c = md5HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122)
        b = md5HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C)
        a = md5HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44)
        d = md5HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9)
        c = md5HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60)
        b = md5HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70)
        a = md5HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6)
        d = md5HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA)
        c = md5HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085)
        b = md5HH(b, c, d, a, x[k + 6], S34, 0x4881D05)
        a = md5HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039)
        d = md5HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5)
        c = md5HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8)
        b = md5HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665)
        a = md5II(a, b, c, d, x[k + 0], S41, 0xF4292244)
        d = md5II(d, a, b, c, x[k + 7], S42, 0x432AFF97)
        c = md5II(c, d, a, b, x[k + 14], S43, 0xAB9423A7)
        b = md5II(b, c, d, a, x[k + 5], S44, 0xFC93A039)
        a = md5II(a, b, c, d, x[k + 12], S41, 0x655B59C3)
        d = md5II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92)
        c = md5II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D)
        b = md5II(b, c, d, a, x[k + 1], S44, 0x85845DD1)
        a = md5II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F)
        d = md5II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0)
        c = md5II(c, d, a, b, x[k + 6], S43, 0xA3014314)
        b = md5II(b, c, d, a, x[k + 13], S44, 0x4E0811A1)
        a = md5II(a, b, c, d, x[k + 4], S41, 0xF7537E82)
        d = md5II(d, a, b, c, x[k + 11], S42, 0xBD3AF235)
        c = md5II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB)
        b = md5II(b, c, d, a, x[k + 9], S44, 0xEB86D391)
        a = md5AddUnsigned(a, AA)
        b = md5AddUnsigned(b, BB)
        c = md5AddUnsigned(c, CC)
        d = md5AddUnsigned(d, DD)
    }
    return (md5WordToHex(a) + md5WordToHex(b) + md5WordToHex(c) + md5WordToHex(d)).toLowerCase()
}

export default MiniSdk;