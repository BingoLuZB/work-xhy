module.exports = function (e) {
  var t = {};

  function n(r) {
      if (t[r]) return t[r].exports;
      var a = t[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }
  return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
      })
  }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
      }), 2 & t && "string" != typeof e)
          for (var a in e) n.d(r, a, function (t) {
              return e[t]
          }.bind(null, a));
      return r
  }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
          return e.default
      } : function () {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 2)
}([
  function (e, t, n) {
      "use strict";
      var r = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          },
          a = i(n(1)),
          o = i(n(4));

      function i(e) {
          console.log("截取："+e)
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var u = void 0,
          c = {
              ajax: function (e) {
                  var t = this.setting(e.conf);
                  return e.conf && delete e.conf, t.showLoading && wx.showLoading(t.loadingParams), e = this.params(e), a.default.debug && console.log((new Date).getTime(), e.url, e.data), new Promise(function (n, o) {
                      wx.request(r({}, e, {
                          success: function (r) {
                              a.default.debug && console.log((new Date).getTime(), e.url, r), t.showLoading && wx.hideLoading(), 200 !== r.statusCode || !r.data || void 0 !== r.data.code && 200 !== r.data.code ? (t.showToast && (r.data && r.data.msg && (t.toastParams.title = r.data.msg), wx.showToast(t.toastParams)), o(r)) : n(r)
                          }, fail: function (n) {
                              a.default.debug && console.log((new Date).getTime(), e.url, n), t.showLoading && wx.hideLoading(), t.showToast && (n.errMsg && (t.toastParams.title = n.errMsg), wx.showToast(t.toastParams)), o(n)
                          }
                      }))
                  })
              }, params: function (e) {
                  if (e.method = (e.method || "get").toUpperCase(), "POST" !== e.method || e.header || (e.header = {
                      "Content-Type": "application/x-www-form-urlencoded"
                  }), !e.private) {
                      var t = wx.getStorageSync("userInfo");
                      e.data = r({}, a.default.baseParams, a.default.gameParams, a.default.agentParams, a.default.deviceParams, e.data, {
                          token: t ? t.user_token : "",
                          ts: (new Date).getTime()
                      })
                  }
                  return e.data.sign = this.sign(e), /^http/.test(e.url) || (e.url = a.default.baseUrl + e.url), delete e.private, delete e.signUrl, e
              }, setting: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return r({}, a.default.setting, e)
              }, sign: function (e) {
                  var t = "";
                  t = e.data.channel_id ? "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDleNmoD8CwcsVduQnG7UAMqD2aYpwwwswmMLSKvwNZ6pQeC4ugwGaG3E8jfzRvMYzIUcCYkQ9uROuKiA3+LGZ9Zyvy3uIVycCcMwM88WgRMjospa2EoGVI4Ef8qcvbfPGC3vwdIKQRs4dnaG6yQsOcyVkgyRtDq4iQnnlG9Onw5QIDAQAB" : "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHrJSESIbzCdsC0+zIwSn3ft9RGaau0izFCdXodH3i/sWgYcoF+wvbvAMB9336tpTYMSfbks4HfSyt8PDunChqyeCnnraj60DRrySOxAIbjjSAxVxI437R5qZt3mFbH1rgptLfi5RP3N6XIWDk8Ecw2XCdlqfDPiQhGCYleldsdQIDAQAB", e.app_key && (t = "app_key=" + e.app_key);
                  var n = (e.signUrl || e.url).substr(1),
                      r = "";
                  Object.keys(e.data).sort().forEach(function (t) {
                      r += "&" + t + "=" + e.data[t]
                  });
                  var a = "";
                  return a = e.app_key ? (0, o.default)(r.substr(1) + "&" + t) : (0, o.default)((e.method + "&" + encodeURIComponent(n) + "&" + encodeURIComponent(r.substr(1)) + "&" + t).replace(/\(/g, "%28").replace(/\)/g, "%29")), a
              }, renderQRCode: function (e, t, n) {
                  var r = t.getContext("2d"),
                      a = wx.createImage();
                  a.src = n.image, a.onload = function () {
                      r.lineJoin = "round", r.lineWidth = 30, r.strokeStyle = "#ffffff", r.strokeRect((window.innerWidth - 240) / 2, (window.innerHeight - 264) / 2, 240, 264), r.fillStyle = "#ffffff", r.fillRect((window.innerWidth - 220) / 2, (window.innerHeight - 244) / 2, 220, 244), r.fillStyle = "#1A83FF", r.font = "bold 14px PingFangSC-Medium", r.textAlign = "center", r.fillText(n.intro, window.innerWidth / 2, (window.innerHeight - 258) / 2 + 218 + 30, 250), r.drawImage(a, (window.innerWidth - 218) / 2, (window.innerHeight - 258) / 2, 218, 218)
                  }, u = {
                      canvas: e,
                      qrcvs: t,
                      qrctx: r,
                      data: n
                  }, e.addEventListener("touchstart", d)
              }, removeOffScreen: function () {
                  u && (u.qrctx.clearRect(0, 0, u.qrcvs.width, u.qrcvs.height), u.canvas.removeEventListener("touchstart", d))
              }
          };

      function d(e) {
          e.preventDefault();
          var t = e.touches[0],
              n = t.clientX,
              r = t.clientY;
          n >= (window.innerWidth - 218) / 2 && n <= (window.innerWidth - 218) / 2 + 218 && r >= (window.innerHeight - 258) / 2 && r <= (window.innerHeight - 258) / 2 + 218 ? wx.previewImage({
              urls: [u.data.image]
          }) : (u.qrctx.clearRect(0, 0, u.qrcvs.width, u.qrcvs.height), u.canvas.removeEventListener("touchstart", d))
      }
      e.exports = c
  },
  function (e, t, n) {
      "use strict";
      var r = {
          debug: !1,
          baseUrl: "https://gminiapi.xinghe66.cn",
          channelId: 2000051,
          baseParams: {
              app_id: "",
              client_id: "",
              format: "json"
          },
          gameParams: {
              "game-pkg_name": "",
              "game-app_ver": "",
              "game-h_ver": "",
              "game-sdk_ver": "",
              "game-mp_id": ""
          },
          agentParams: {
              "agent-ch": "",
              "agent-sub_ch": ""
          },
          deviceParams: {
              "device-device_id": "",
              "device-mac": "",
              "device-ip": "",
              "device-brand": "",
              "device-model": "",
              "device-os": "",
              "device-os_version": "",
              "device-screen": "",
              "device-net": "",
              "device-imsi": "",
              "device-longitude": "",
              "device-latitude": "",
              "device-userua": "",
              "device-disk_space": "",
              "device-open_time": "",
              "device-is_charge": "",
              "device-screen_luminance": "",
              "device-has_sim": "",
              "device-is_break": ""
          },
          setting: {
              showLoading: !0,
              loadingParams: {
                  title: "加载中",
                  mask: !0
              },
              showToast: !1,
              toastParams: {
                  icon: "none"
              }
          }
      };
      try {
          r.gameParams["game-pkg_name"] = wx.canIUse ? "" : "game", wx.getSystemInfo({
              success: function (e) {
                  r.deviceParams["device-brand"] = encodeURIComponent(e.brand), r.deviceParams["device-model"] = encodeURIComponent(e.model), r.deviceParams["device-screen"] = encodeURIComponent(e.screenWidth + "x" + e.screenHeight), r.deviceParams["device-os"] = "devtools" === e.platform ? "android" : encodeURIComponent(e.platform), r.deviceParams["device-os_version"] = encodeURIComponent(e.system)
              }
          }), wx.getNetworkType({
              success: function (e) {                  
                  r.deviceParams["device-net"] = encodeURIComponent(e.networkType)
                  console.log( r.deviceParams["device-net"])
              }
          }), wx.getScreenBrightness({
              success: function (e) {
                  r.deviceParams["device-screen_luminance"] = encodeURIComponent(parseInt(100 * e.value))
              }
          })
      } catch (e) {}
      e.exports = r
  },
  function (e, t, n) {
      "use strict";
      var r = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          },
          a = u(n(3)),
          o = u(n(1)),
          i = u(n(0));

      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var c = {
          init: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return ["app_id", "mp_id", "showLoading", "loadingParams", "showToast", "toastParams", "debug"].map(function (t) {
                  void 0 !== e[t] && ("app_id" === t ? o.default.baseParams[t] = e.app_id : "mp_id" === t ? o.default.gameParams["game-mp_id"] = e.mp_id : "debug" === t ? o.default.debug = e.debug : o.default.setting[t] = e[t])
              }), new Promise(function (t, n) {
                  e.app_id ? t({
                      msg: "success"
                  }) : n({
                      msg: "fail"
                  })
              })
          }, login: function () {
              var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (n, o) {
                  console.log("开始登录")
                  wx.checkSession({
                      success: function (a) {
                        console.log("开始登录checkSession suc")
                          e.getSelfInfo(t).then(function (e) {
                              n(r({}, e, {
                                  msg: "success"
                              }))
                          }, function (e) {
                              o({
                                  msg: e.msg || "fail"
                              })
                          })
                      }, fail: function (i) {
                        console.log("开始登录checkSession fail.wxLogin1")
                          a.default.wxLogin(t).then(function (a) {
                            console.log("开始登录checkSession fail.wxLogin2")
                              e.getSelfInfo(t).then(function (e) {
                                console.log("开始登录checkSession fail.wxLogin3 getSelfInfo")
                                  n(r({}, e, {
                                      msg: "success"
                                  }))
                              }, function (e) {
                                  o({
                                      msg: e.msg || "fail"
                                  })
                              })
                          }, function (e) {
                              console.log("开始登录msg"+e.msg)
                              o({
                                 msg: e.msg || "fail"                                 
                              })
                          })
                      }
                  })
              })
          }, updateSelfInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (t, n) {
                  a.default.updateSelfInfo(e).then(function (e) {
                      t(r({}, e, {
                          msg: "success"
                      }))
                  }, function (e) {
                      n({
                          msg: e.msg || "fail"
                      })
                  })
              })
          }, updateRoleInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (t, n) {
                  a.default.updateRoleInfo(e).then(function (e) {
                      t(r({}, e, {
                          msg: "success"
                      }))
                  }, function (e) {
                      n({
                          msg: e.msg || "fail"
                      })
                  })
              })
          }, getSelfInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.getSelfInfo(e)
          }, getShareInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (t, n) {
                  a.default.getShareInfo(e).then(function (e) {
                      t(r({}, e, {
                          msg: "success"
                      }))
                  }, function (e) {
                      n({
                          msg: e.msg || "fail"
                      })
                  })
              })
          }, updateShareInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (t, n) {
                  a.default.updateShareInfo(e).then(function (e) {
                      t(r({}, e, {
                          msg: "success"
                      }))
                  }, function (e) {
                      n({
                          msg: e.msg || "fail"
                      })
                  })
              })
          }, preOrder: function (e) {
              return a.default.preOrder(e)
          }, mpPay: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (t, n) {
                  a.default.mpPay(e).then(function (e) {
                      t({
                          msg: "success"
                      })
                  }, function (e) {
                      n({
                          msg: e.errMsg || "fail"
                      })
                  })
              })
          }, payQuery: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!e.data || void 0 === e.data["order-order_id"]) {
                  var t = wx.getStorageSync("orderInfo");
                  e.data = r({}, e.data, {
                      "order-order_id": t ? t.order_id : ""
                  })
              }
              return a.default.payQuery(e)
          }, midasPay: function () {
              var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new Promise(function (n, r) {
                  a.default.midasPay(t).then(function (r) {
                      t.conf = {
                          showLoading: !1,
                          showToast: !1
                      };
                      var a = 0,
                          o = setInterval(function () {
                              a++, e.midasPayQuery(t).then(function (e) {
                                  2 !== e.data.status && 12 !== a || clearInterval(o)
                              }, function (e) {})
                          }, 15e3);
                      n({
                          msg: "success"
                      })
                  }, function (e) {
                      r({
                          msg: e.errMsg || "fail"
                      })
                  })
              })
          }, midasPayQuery: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!e.data || void 0 === e.data["order-order_id"]) {
                  var t = wx.getStorageSync("orderInfo");
                  e.data = r({}, e.data, {
                      "order-order_id": t ? t.order_id : ""
                  })
              }
              return a.default.midasPayQuery(e)
          }, pay: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.pay(e)
          }, checkOrderInfo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.checkOrderInfo(e)
          }, checkOrder: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.checkOrder(e)
          }, reportAdClick: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.reportAdClick(e)
          }, removeOffScreen: function () {
              a.default.removeOffScreen()
          }, checkMsg: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return a.default.checkMsg(e)
          }, checkImg: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = r({}, o.default.baseParams, o.default.gameParams, o.default.agentParams, o.default.deviceParams, {
                      token: wx.getStorageSync("userInfo").user_token,
                      ts: (new Date).getTime()
                  });
              return t.sign = i.default.sign({
                  url: "/mp/img/check",
                  data: t
              }), new Promise(function (n, r) {
                  wx.uploadFile({
                      url: o.default.baseUrl + "/mp/img/check",
                      filePath: e.data.filePath,
                      name: "image",
                      formData: t,
                      success: function (e) {
                          var t = e.data;
                          200 === (t = JSON.parse(t)).code ? n({
                              msg: "success"
                          }) : r({
                              msg: t.msg || "fail"
                          })
                      }
                  })
              })
          }
      };
      e.exports = c
  },
  function (e, t, n) {
      "use strict";
      var r = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          },
          a = function (e) {
              return e && e.__esModule ? e : {
                  default: e
              }
          }(n(0));
      var o = !1,
          i = function (e) {
              var t = e.data,
                  n = e.conf;
              return new Promise(function (r, i) {
                  a.default.ajax(e).then(function (e) {
                      e.data && e.data.data ? r({
                          data: e.data.data
                      }) : r({
                          msg: "success"
                      })
                  }, function (e) {
                      if (e.data && 1002 === e.data.code) {
                          if (o) return !1;
                          o = !0, r(u.wxLogin({
                              data: t,
                              conf: n
                          }).then(function (e) {
                              return o = !1, u.getSelfInfo({
                                  data: t,
                                  conf: n
                              })
                          }))
                      } else i({
                          msg: e.data ? e.data.msg || "网络异常，请重试" : e.errMsg
                      })
                  })
              })
          },
          u = {
              login: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/wx/login"
                  }, e)).then(function (e) {
                      return e && wx.setStorageSync("userInfo", e.data), e
                  })
              }, wxLogin: function (e) {
                  var t = this;
                  return new Promise(function (n, a) {
                      wx.login({
                          success: function (o) {
                              o.code ? (e.data = r({}, e.data, {
                                  code: o.code
                              }), n(t.login(e))) : a(o)
                          }, fail: function (e) {
                              a(e)
                          }
                      })
                  })
              }, updateSelfInfo: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/wx/updateinfo"
                  }, e)).then(function (e) {
                      return wx.setStorageSync("userInfo", e.data), e
                  })
              }, updateRoleInfo: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/user/uprole"
                  }, e)).then(function (e) {
                      return e
                  })
              }, getSelfInfo: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/wx/getuserinfo"
                  }, e)).then(function (e) {
                      return wx.setStorageSync("userInfo", e.data), e
                  })
              }, getShareInfo: function (e) {
                  return i(r({
                      url: "/mp/share/detail"
                  }, e))
              }, updateShareInfo: function (e) {
                  return i(r({
                      url: "/mp/share/add"
                  }, e))
              }, getShareQrcode: function (e) {
                  return i(r({
                      url: "/mp/share/qrcode"
                  }, e))
              }, mpPay: function (e) {
                  var t = this;
                  return this.preOrder(e).then(function (n) {
                      return e.data = r({}, e.data, {
                          payway: "wxpay",
                          "order-order_id": n.data.order_id
                      }), t.mpOrder(e)
                  })
              }, midasPay: function (e) {
                  var t = this;
                  return this.preOrder(e).then(function (n) {
                      return t.wxMidasPay(n.data, e)
                  })
              }, wxMidasPay: function (e, t) {
                  var n = this;
                  return new Promise(function (r, o) {
                      var i = e.mode,
                          u = e.env,
                          c = e.offer_id,
                          d = e.currency,
                          s = e.buy_quantity,
                          f = e.platform,
                          l = e.zone_id;
                      console.log(e, "========xhy data"), wx.requestMidasPayment({
                          mode: i,
                          env: u,
                          offerId: c,
                          currencyType: d,
                          buyQuantity: s,
                          platform: f,
                          zoneId: l,
                          success: function (a) {
                              t.data["order-order_id"] = e.order_id, t.conf = {
                                  showLoading: !1,
                                  showToast: !1
                              }, n.midasPayQuery(t).then(function (e) {
                                  if (e.data && 2 !== e.data.status) var r = 0,
                                      a = setInterval(function () {
                                          r++, n.midasPayQuery(t).then(function (e) {
                                              2 !== e.data.status && 8 !== r || clearInterval(a)
                                          }, function (e) {})
                                      }, 15e3)
                              }, function (e) {}), a.errMsg && (a.msg = a.errMsg), r(a)
                          }, fail: function (e) {
                              if (e.errMsg)
                                  if ("requestMidasPayment:fail iOS not supported" === e.errMsg) {
                                      var n = wx.getStorageSync("userInfo");
                                      e.msg = n && n.ios_text || "小游戏暂不支持IOS支付，请使用安卓登录后支付。", e.duration = 3e3
                                  } else e.msg = e.errMsg;
                              var r = a.default.setting(t.conf);
                              r.showToast && (e.msg && (r.toastParams.title = e.msg), e.duration && (r.toastParams.duration = e.duration), wx.showToast(r.toastParams)), o(e)
                          }
                      })
                  })
              }, pay: function (e) {
                  var t = this;
                  return this.preOrder(e).then(function (n) {
                      return 2 === n.data.check ? t.wxMidasPay(n.data, e) : (1 === n.data.pay_type ? wx.navigateToMiniProgram({
                          appId: n.data.mp_id,
                          path: n.data.path + "?orderId=" + n.data.order_id
                      }) : 2 === n.data.pay_type && (e.canvas && e.offscreen ? a.default.renderQRCode(e.canvas, e.offscreen, {
                          image: n.data.image,
                          intro: n.data.intro || "点击二维码，长按识别进入支付页面"
                      }) : wx.previewImage({
                          urls: [n.data.image]
                      })), {
                          data: n.data
                      })
                  })
              }, preOrder: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/preorder"
                  }, e)).then(function (e) {
                      return wx.setStorageSync("orderInfo", e.data), e
                  }, function (e) {
                      return e
                  })
              }, mpOrder: function (e) {
                  var t = this;
                  return i(r({
                      method: "post",
                      url: "/mp/wx/pay"
                  }, e)).then(function (n) {
                      return t.wxMpPay(JSON.parse(n.data.token), e)
                  })
              }, wxMpPay: function (e, t) {
                  return new Promise(function (n, o) {
                      wx.requestPayment(r({}, e, {
                          success: function (e) {
                              e.errMsg && (e.msg = e.errMsg), n(e)
                          }, fail: function (e) {
                              e.errMsg && (e.msg = e.errMsg);
                              var n = a.default.setting(t.conf);
                              n.showToast && (e.msg && (n.toastParams.title = e.msg), wx.showToast(n.toastParams)), o(e)
                          }, complete: function (e) {
                              "requestPayment:cancel" === e.errMsg && o({
                                  msg: "requestPayment:fail cancel"
                              })
                          }
                      }))
                  })
              }, payQuery: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/order/query"
                  }, e))
              }, midasPayQuery: function (e) {
                  return i(r({
                      url: "/mp/mpay/query"
                  }, e))
              }, checkPayInfo: function (e) {
                  var t = this;
                  return i(r({
                      url: "/mp/order/checkinfo"
                  }, e)).then(function (n) {
                      return n.data.order_id = e.data["order-order_id"], new Promise(function (r, o) {
                          n.data.image && wx.setStorageSync("orderQRCode", n.data.image);
                          var i = wx.getStorageSync("orderQRCode");
                          n.data && 4 == +n.data.pay_type ? (wx.showModal({
                              title: "充值提示",
                              content: "回复“2”，点击链接支付",
                              success: function (e) {
                                  e.confirm && wx.openCustomerServiceConversation()
                              }
                          }), r(n)) : n.data && n.data.mp_id ? (wx.navigateToMiniProgram({
                              appId: n.data.mp_id,
                              path: n.data.path
                          }), r(n)) : i ? (e.canvas && e.offscreen && a.default.renderQRCode(e.canvas, e.offscreen, {
                              image: i,
                              intro: n.data.intro || "点击二维码，长按识别进入支付页面"
                          }), n.data.image = i, r(n)) : t.checkQrcode(e).then(function (t) {
                              var o = t.data.image;
                              e.canvas && e.offscreen && a.default.renderQRCode(e.canvas, e.offscreen, {
                                  image: o,
                                  intro: n.data.intro || "点击二维码，长按识别进入支付页面"
                              }), wx.setStorageSync("orderQRCode", o), n.data.image = o, r(n)
                          }, function (e) {
                              r(n)
                          })
                      })
                  })
              }, checkOrderInfo: function (e) {
                  return i(r({
                      method: "post",
                      url: "/mp/pay/info"
                  }, e))
              }, checkOrder: function (e) {
                  var t = this;
                  return i(r({
                      method: "post",
                      url: "/mp/check/pay"
                  }, e)).then(function (n) {
                      return t.wxMpPay(JSON.parse(n.data.token), e)
                  })
              }, checkQrcode: function (e) {
                  return e.data && (e.data.is_last = 2), i(r({
                      url: "/mp/order/qrcode"
                  }, e))
              }, reportAdClick: function (e) {
                  return i(r({
                      url: "/mp/ad/report"
                  }, e))
              }, removeOffScreen: function () {
                  a.default.removeOffScreen()
              }, checkMsg: function (e) {
                  return i(r({
                      url: "/msg/sec/check"
                  }, e))
              }
          };
      e.exports = u
  },
  function (e, t, n) {
      "use strict";
      var r;
      "function" == typeof Symbol && Symbol.iterator;
      ! function (a) {
          function o(e, t) {
              var n = (65535 & e) + (65535 & t);
              return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
          }

          function i(e, t, n, r, a, i) {
              return o(function (e, t) {
                  return e << t | e >>> 32 - t
              }(o(o(t, e), o(r, i)), a), n)
          }

          function u(e, t, n, r, a, o, u) {
              return i(t & n | ~t & r, e, t, a, o, u)
          }

          function c(e, t, n, r, a, o, u) {
              return i(t & r | n & ~r, e, t, a, o, u)
          }

          function d(e, t, n, r, a, o, u) {
              return i(t ^ n ^ r, e, t, a, o, u)
          }

          function s(e, t, n, r, a, o, u) {
              return i(n ^ (t | ~r), e, t, a, o, u)
          }

          function f(e, t) {
              e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
              var n, r, a, i, f, l = 1732584193,
                  g = -271733879,
                  m = -1732584194,
                  p = 271733878;
              for (n = 0; n < e.length; n += 16) r = l, a = g, i = m, f = p, g = s(g = s(g = s(g = s(g = d(g = d(g = d(g = d(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g, m = u(m, p = u(p, l = u(l, g, m, p, e[n], 7, -680876936), g, m, e[n + 1], 12, -389564586), l, g, e[n + 2], 17, 606105819), p, l, e[n + 3], 22, -1044525330), m = u(m, p = u(p, l = u(l, g, m, p, e[n + 4], 7, -176418897), g, m, e[n + 5], 12, 1200080426), l, g, e[n + 6], 17, -1473231341), p, l, e[n + 7], 22, -45705983), m = u(m, p = u(p, l = u(l, g, m, p, e[n + 8], 7, 1770035416), g, m, e[n + 9], 12, -1958414417), l, g, e[n + 10], 17, -42063), p, l, e[n + 11], 22, -1990404162), m = u(m, p = u(p, l = u(l, g, m, p, e[n + 12], 7, 1804603682), g, m, e[n + 13], 12, -40341101), l, g, e[n + 14], 17, -1502002290), p, l, e[n + 15], 22, 1236535329), m = c(m, p = c(p, l = c(l, g, m, p, e[n + 1], 5, -165796510), g, m, e[n + 6], 9, -1069501632), l, g, e[n + 11], 14, 643717713), p, l, e[n], 20, -373897302), m = c(m, p = c(p, l = c(l, g, m, p, e[n + 5], 5, -701558691), g, m, e[n + 10], 9, 38016083), l, g, e[n + 15], 14, -660478335), p, l, e[n + 4], 20, -405537848), m = c(m, p = c(p, l = c(l, g, m, p, e[n + 9], 5, 568446438), g, m, e[n + 14], 9, -1019803690), l, g, e[n + 3], 14, -187363961), p, l, e[n + 8], 20, 1163531501), m = c(m, p = c(p, l = c(l, g, m, p, e[n + 13], 5, -1444681467), g, m, e[n + 2], 9, -51403784), l, g, e[n + 7], 14, 1735328473), p, l, e[n + 12], 20, -1926607734), m = d(m, p = d(p, l = d(l, g, m, p, e[n + 5], 4, -378558), g, m, e[n + 8], 11, -2022574463), l, g, e[n + 11], 16, 1839030562), p, l, e[n + 14], 23, -35309556), m = d(m, p = d(p, l = d(l, g, m, p, e[n + 1], 4, -1530992060), g, m, e[n + 4], 11, 1272893353), l, g, e[n + 7], 16, -155497632), p, l, e[n + 10], 23, -1094730640), m = d(m, p = d(p, l = d(l, g, m, p, e[n + 13], 4, 681279174), g, m, e[n], 11, -358537222), l, g, e[n + 3], 16, -722521979), p, l, e[n + 6], 23, 76029189), m = d(m, p = d(p, l = d(l, g, m, p, e[n + 9], 4, -640364487), g, m, e[n + 12], 11, -421815835), l, g, e[n + 15], 16, 530742520), p, l, e[n + 2], 23, -995338651), m = s(m, p = s(p, l = s(l, g, m, p, e[n], 6, -198630844), g, m, e[n + 7], 10, 1126891415), l, g, e[n + 14], 15, -1416354905), p, l, e[n + 5], 21, -57434055), m = s(m, p = s(p, l = s(l, g, m, p, e[n + 12], 6, 1700485571), g, m, e[n + 3], 10, -1894986606), l, g, e[n + 10], 15, -1051523), p, l, e[n + 1], 21, -2054922799), m = s(m, p = s(p, l = s(l, g, m, p, e[n + 8], 6, 1873313359), g, m, e[n + 15], 10, -30611744), l, g, e[n + 6], 15, -1560198380), p, l, e[n + 13], 21, 1309151649), m = s(m, p = s(p, l = s(l, g, m, p, e[n + 4], 6, -145523070), g, m, e[n + 11], 10, -1120210379), l, g, e[n + 2], 15, 718787259), p, l, e[n + 9], 21, -343485551), l = o(l, r), g = o(g, a), m = o(m, i), p = o(p, f);
              return [l, g, m, p]
          }

          function l(e) {
              var t, n = "",
                  r = 32 * e.length;
              for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
              return n
          }

          function g(e) {
              var t, n = [];
              for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
              var r = 8 * e.length;
              for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
              return n
          }

          function m(e) {
              var t, n, r = "";
              for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
              return r
          }

          function p(e) {
              return unescape(encodeURIComponent(e))
          }

          function h(e) {
              return function (e) {
                  return l(f(g(e), 8 * e.length))
              }(p(e))
          }

          function v(e, t) {
              return function (e, t) {
                  var n, r, a = g(e),
                      o = [],
                      i = [];
                  for (o[15] = i[15] = void 0, a.length > 16 && (a = f(a, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ a[n], i[n] = 1549556828 ^ a[n];
                  return r = f(o.concat(g(t)), 512 + 8 * t.length), l(f(i.concat(r), 640))
              }(p(e), p(t))
          }

          function w(e, t, n) {
              return t ? n ? v(t, e) : function (e, t) {
                  return m(v(e, t))
              }(t, e) : n ? h(e) : function (e) {
                  return m(h(e))
              }(e)
          }
          void 0 === (r = function () {
              return w
          }.call(t, n, t, e)) || (e.exports = r)
      }()
  }
]);