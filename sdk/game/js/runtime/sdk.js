function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../sdk/sdk-1.0.1.js")), o = function() {
    function o() {
        var e = this;
        t(this, o), this.loginBtn = wx.createUserInfoButton({
            type: "text",
            text: "登录",
            style: {
                left: 40,
                top: 50,
                width: 50,
                height: 24,
                lineHeight: 24,
                backgroundColor: "#ff0000",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 14
            }
        }), this.loginBtn.onTap(function(t) {
            console.log(t), n.default.updateSelfInfo({
                data: {
                    raw_data: t.rawData,
                    iv: t.iv,
                    encrypted_data: t.encryptedData,
                    signature: t.signature
                }
            }).then(function(t) {
                console.log(t);
            }, function(t) {
                console.log(t);
            }), wx.showToast({
                title: "登录成功"
            }), t.userInfo && (e.loginBtn.text = t.userInfo.nickName);
        }), this.payBtn = {
            startX: 100,
            startY: 50,
            endX: 150,
            endY: 74
        }, this.balanceBtn = {
            startX: 160,
            startY: 50,
            endX: 210,
            endY: 74
        }, this.navigatorBtn = {
            startX: 220,
            startY: 50,
            endX: 270,
            endY: 74
        };
    }
    return e(o, [ {
        key: "renderBtn",
        value: function(t) {
            t.textAlign = "left", t.fillStyle = "#ff0000", t.fillRect(100, 50, 50, 24), t.fillStyle = "#ffffff", 
            t.font = "14px Arial", t.fillText("支付", 111, 66);
        }
    } ]), o;
}();

exports.default = o;