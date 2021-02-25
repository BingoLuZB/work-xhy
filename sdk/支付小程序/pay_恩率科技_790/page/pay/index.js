var o = require("../../util/sdk-1.0.0"), n = (getApp(), require("../../siteinfo.js"));

Page({
    data: {
        orderInfo: {},
        status: ""
    },
    onLoad: function(e) {
        var t = this;
        console.log("pay order info", e), this.setData({
            orderInfo: e
        }), o.init({
            app_id: n.app_id,
            mp_id: n.mpid,
            debug: true
        }).then(function(n) {
            console.log("初始化成功"), o.login().then(function(n) {
                console.log("登陆成功"), o.checkOrderInfo({
                    data: {
                        "order-order_id": e.orderId || e.scene,
                        "order-from": e.from || 1
                    }
                }).then(function(n) {
                    t.setData({
                        orderInfo: n.data
                    }), o.checkOrder({
                        data: {
                            "order-order_id": n.data.order_id,
                            payway: "wxpay"
                        }
                    }).then(function(n) {
                        console.log("pay check success", n), t.setData({
                            status: "success"
                        }), o.mpPayQuery({
                            data: {
                                "order-order_id": t.data.orderInfo.order_id,
                                _acid: 3
                            }
                        }).then(function(o) {
                            console.log(o);
                        }, function(o) {
                            console.log(o);
                        });
                    }, function(o) {
                        console.log("pay check fail", o);
                    });
                });
            }, function(o) {
                console.log("err", o);
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    pay: function() {
        var n = this;
        wx.getUserInfo({
            success: function(e) {
                o.updateUserInfo({
                    raw_data: e.rawData,
                    signature: e.signature,
                    encrypted_data: e.encryptedData,
                    iv: e.iv
                }).then(function(o) {}, function(o) {}), o.checkOrder({
                    data: {
                        "order-order_id": n.data.orderInfo.order_id,
                        payway: "wxpay"
                    }
                }).then(function(e) {
                    console.log(e), n.setData({
                        status: "success"
                    }), o.mpPayQuery({
                        data: {
                            "order-order_id": n.data.orderInfo.order_id
                        }
                    }).then(function(o) {
                        console.log(o);
                    }, function(o) {
                        console.log(o);
                    });
                }, function(o) {
                    console.log(o);
                });
            },
            fail: function(o) {
                console.log(o);
            }
        });
    },
    hideStatus: function() {
        this.setData({
            status: ""
        });
    }
});