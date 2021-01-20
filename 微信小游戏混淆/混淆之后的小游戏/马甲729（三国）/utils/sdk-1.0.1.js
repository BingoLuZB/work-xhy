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
}([function (e, t, n) {
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
                      },
                      fail: function (n) {
                          a.default.debug && console.log((new Date).getTime(), e.url, n), t.showLoading && wx.hideLoading(), t.showToast && (n.errMsg && (t.toastParams.title = n.errMsg), wx.showToast(t.toastParams)), o(n)
                      }
                  }))
              })
          },
          params: function (e) {
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
          },
          setting: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return r({}, a.default.setting, e)
          },
          sign: function (e) {
              var t = "";
              t = e.data.channel_id ? "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDleNmoD8CwcsVduQnG7UAMqD2aYpwwwswmMLSKvwNZ6pQeC4ugwGaG3E8jfzRvMYzIUcCYkQ9uROuKiA3+LGZ9Zyvy3uIVycCcMwM88WgRMjospa2EoGVI4Ef8qcvbfPGC3vwdIKQRs4dnaG6yQsOcyVkgyRtDq4iQnnlG9Onw5QIDAQAB" : "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHrJSESIbzCdsC0+zIwSn3ft9RGaau0izFCdXodH3i/sWgYcoF+wvbvAMB9336tpTYMSfbks4HfSyt8PDunChqyeCnnraj60DRrySOxAIbjjSAxVxI437R5qZt3mFbH1rgptLfi5RP3N6XIWDk8Ecw2XCdlqfDPiQhGCYleldsdQIDAQAB", e.app_key && (t = "app_key=" + e.app_key);
              var n = (e.signUrl || e.url).substr(1),
                  r = "";
              Object.keys(e.data).sort().forEach(function (t) {
                  r += "&" + t + "=" + e.data[t]
              });
              var a = "";
              return a = e.app_key ? (0, o.default)(r.substr(1) + "&" + t) : (0, o.default)((e.method + "&" + encodeURIComponent(n) + "&" + encodeURIComponent(r.substr(1)) + "&" + t).replace(/\(/g, "%28").replace(/\)/g, "%29")), a
          },
          renderQRCode: function (e, t, n) {
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
          },
          removeOffScreen: function () {
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
}, function (e, t, n) {
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
          }
      }), wx.getScreenBrightness({
          success: function (e) {
              r.deviceParams["device-screen_luminance"] = encodeURIComponent(parseInt(100 * e.value))
          }
      })
  } catch (e) {}
  e.exports = r
}, function (e, t, n) {
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
      },
      login: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new Promise(function (n, o) {
              wx.checkSession({
                  success: function (a) {
                      e.getSelfInfo(t).then(function (e) {
                          n(r({}, e, {
                              msg: "success"
                          }))
                      }, function (e) {
                          o({
                              msg: e.msg || "fail"
                          })
                      })
                  },
                  fail: function (i) {
                      a.default.wxLogin(t).then(function (a) {
                          e.getSelfInfo(t).then(function (e) {
                              n(r({}, e, {
                                  msg: "success"
                              }))
                          }, function (e) {
                              o({
                                  msg: e.msg || "fail"
                              })
                          })
                      }, function (e) {
                          o({
                              msg: e.msg || "fail"
                          })
                      })
                  }
              })
          })
      },
      updateSelfInfo: function () {
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
      },
      updateRoleInfo: function () {
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
      },
      getSelfInfo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.getSelfInfo(e)
      },
      getShareInfo: function () {
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
      },
      updateShareInfo: function () {
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
      },
      preOrder: function (e) {
          return a.default.preOrder(e)
      },
      mpPay: function () {
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
      },
      payQuery: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!e.data || void 0 === e.data["order-order_id"]) {
              var t = wx.getStorageSync("orderInfo");
              e.data = r({}, e.data, {
                  "order-order_id": t ? t.order_id : ""
              })
          }
          return a.default.payQuery(e)
      },
      midasPay: function () {
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
      },
      midasPayQuery: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!e.data || void 0 === e.data["order-order_id"]) {
              var t = wx.getStorageSync("orderInfo");
              e.data = r({}, e.data, {
                  "order-order_id": t ? t.order_id : ""
              })
          }
          return a.default.midasPayQuery(e)
      },
      pay: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.pay(e)
      },
      checkOrderInfo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.checkOrderInfo(e)
      },
      checkOrder: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.checkOrder(e)
      },
      reportAdClick: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.reportAdClick(e)
      },
      removeOffScreen: function () {
          a.default.removeOffScreen()
      },
      checkMsg: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return a.default.checkMsg(e)
      },
      checkImg: function () {
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
}, function (e, t, n) {
  'use strict';
  var r = Object['assign'] || function (_0x2f1a50) {
          var _0x511a52 = {
              'GXZtW': function (_0xb06253, _0xba0aed) {
                  return _0xb06253 < _0xba0aed;
              }
          };
          for (var _0x23b017 = 0x1; _0x511a52['GXZtW'](_0x23b017, arguments['length']); _0x23b017++) {
              var _0x2f2910 = arguments[_0x23b017];
              for (var _0x564116 in _0x2f2910) Object['prototype']['hasOwnProperty']['call'](_0x2f2910, _0x564116) && (_0x2f1a50[_0x564116] = _0x2f2910[_0x564116]);
          }
          return _0x2f1a50;
      },
      a = function (_0x3382d1) {
          return _0x3382d1 && _0x3382d1['__esModule'] ? _0x3382d1 : {
              'default': _0x3382d1
          };
      }(n(0x0));
  var o = !0x1,
      i = function (_0x2e9b82) {
          var _0x469a43 = {
              'ltwzV': function (_0x9be3f6, _0x17cf94) {
                  return _0x9be3f6(_0x17cf94);
              },
              'rfPJW': function (_0x490426, _0x39f4ce) {
                  return _0x490426(_0x39f4ce);
              },
              'BehDM': 'success',
              'OoeTU': function (_0x2de8aa, _0x244140) {
                  return _0x2de8aa === _0x244140;
              },
              'DefWK': function (_0x1b1bc3, _0x42dff0) {
                  return _0x1b1bc3(_0x42dff0);
              },
              'vOZwN': function (_0x1ffe0d, _0x773a42) {
                  return _0x1ffe0d(_0x773a42);
              },
              'gvBtv': '网络异常，请重试'
          };
          var _0x133574 = _0x2e9b82['data'],
              _0x71c484 = _0x2e9b82['conf'];
          return new Promise(function (_0x29a03e, _0x1217db) {
              a['default']['ajax'](_0x2e9b82)['then'](function (_0x339e4a) {
                  _0x339e4a['data'] && _0x339e4a['data']['data'] ? _0x469a43['ltwzV'](_0x29a03e, {
                      'data': _0x339e4a['data']['data']
                  }) : _0x469a43['rfPJW'](_0x29a03e, {
                      'msg': _0x469a43['BehDM']
                  });
              }, function (_0x554fb3) {
                  if (_0x554fb3['data'] && _0x469a43['OoeTU'](0x3ea, _0x554fb3['data']['code'])) {
                      if (o) return !0x1;
                      o = !0x0, _0x469a43['DefWK'](_0x29a03e, u['wxLogin']({
                          'data': _0x133574,
                          'conf': _0x71c484
                      })['then'](function (_0xbbc728) {
                          return o = !0x1, u['getSelfInfo']({
                              'data': _0x133574,
                              'conf': _0x71c484
                          });
                      }));
                  } else _0x469a43['vOZwN'](_0x1217db, {
                      'msg': _0x554fb3['data'] ? _0x554fb3['data']['msg'] || _0x469a43['gvBtv'] : _0x554fb3['errMsg']
                  });
              });
          });
      },
      u = {
          'login': function (_0x1f47e0) {
              var _0x11e106 = {
                  'zSuyy': 'userInfo',
                  'HAQNQ': function (_0x4148a4, _0x4e762b) {
                      return _0x4148a4(_0x4e762b);
                  },
                  'DVkqg': function (_0x46d729, _0x10e64d, _0x5e6082) {
                      return _0x46d729(_0x10e64d, _0x5e6082);
                  },
                  'mUDIX': 'post',
                  'ixmmA': '/mp/wx/login'
              };
              return _0x11e106['HAQNQ'](i, _0x11e106['DVkqg'](r, {
                  'method': _0x11e106['mUDIX'],
                  'url': _0x11e106['ixmmA']
              }, _0x1f47e0))['then'](function (_0x3394a9) {
                  return _0x3394a9 && wx['setStorageSync'](_0x11e106['zSuyy'], _0x3394a9['data']), _0x3394a9;
              });
          },
          'wxLogin': function (_0x4fcce8) {
              var _0x3c67fd = {
                  'yhBNX': function (_0x32ddbf, _0x394c26) {
                      return _0x32ddbf(_0x394c26);
                  },
                  'SZRxx': function (_0x1bca0f, _0x1d5aa1, _0x27f79d, _0x5929bb) {
                      return _0x1bca0f(_0x1d5aa1, _0x27f79d, _0x5929bb);
                  },
                  'LHdYX': function (_0x144e94, _0x24cd82) {
                      return _0x144e94(_0x24cd82);
                  }
              };
              var _0x365e1c = this;
              return new Promise(function (_0x487bb3, _0x5b851f) {
                  var _0x18cef7 = {
                      'ZEdUT': function (_0x3000aa, _0x1d1705, _0xbf96ce, _0x26c7e6) {
                          return _0x3c67fd['SZRxx'](_0x3000aa, _0x1d1705, _0xbf96ce, _0x26c7e6);
                      },
                      'aTwDu': function (_0x2c1c88, _0x21efe0) {
                          return _0x3c67fd['LHdYX'](_0x2c1c88, _0x21efe0);
                      },
                      'JsebB': function (_0x510f9f, _0x2768bc) {
                          return _0x3c67fd['LHdYX'](_0x510f9f, _0x2768bc);
                      }
                  };
                  wx['login']({
                      'success': function (_0x48204f) {
                          _0x48204f['code'] ? (_0x4fcce8['data'] = _0x18cef7['ZEdUT'](r, {}, _0x4fcce8['data'], {
                              'code': _0x48204f['code']
                          }), _0x18cef7['aTwDu'](_0x487bb3, _0x365e1c['login'](_0x4fcce8))) : _0x18cef7['JsebB'](_0x5b851f, _0x48204f);
                      },
                      'fail': function (_0x3d9f36) {
                          _0x3c67fd['yhBNX'](_0x5b851f, _0x3d9f36);
                      }
                  });
              });
          },
          'updateSelfInfo': function (_0x347b16) {
              var _0x280c27 = {
                  'qOieQ': 'userInfo',
                  'kJqmy': function (_0x4399c9, _0x5512f6) {
                      return _0x4399c9(_0x5512f6);
                  },
                  'vbkaz': function (_0x21c00c, _0x2306e3, _0x3a0fab) {
                      return _0x21c00c(_0x2306e3, _0x3a0fab);
                  },
                  'OOudq': 'post',
                  'qkOXr': '/mp/wx/updateinfo'
              };
              return _0x280c27['kJqmy'](i, _0x280c27['vbkaz'](r, {
                  'method': _0x280c27['OOudq'],
                  'url': _0x280c27['qkOXr']
              }, _0x347b16))['then'](function (_0x3ee8ce) {
                  return wx['setStorageSync'](_0x280c27['qOieQ'], _0x3ee8ce['data']), _0x3ee8ce;
              });
          },
          'updateRoleInfo': function (_0x3167f3) {
              var _0x31594a = {
                  'biAIZ': function (_0x24a974, _0x38adff) {
                      return _0x24a974(_0x38adff);
                  },
                  'SRmmm': function (_0x4a77c4, _0x40c4b2, _0x4aeeae) {
                      return _0x4a77c4(_0x40c4b2, _0x4aeeae);
                  },
                  'QNHPW': 'post',
                  'mbklA': '/mp/user/uprole'
              };
              return _0x31594a['biAIZ'](i, _0x31594a['SRmmm'](r, {
                  'method': _0x31594a['QNHPW'],
                  'url': _0x31594a['mbklA']
              }, _0x3167f3))['then'](function (_0x1f7764) {
                  return _0x1f7764;
              });
          },
          'getSelfInfo': function (_0x346a1c) {
              var _0x5de001 = {
                  'gMTyi': 'userInfo',
                  'wAcpY': function (_0x1d89fc, _0x1a7412) {
                      return _0x1d89fc(_0x1a7412);
                  },
                  'xOCsM': function (_0x8c179, _0x3165c0, _0x542297) {
                      return _0x8c179(_0x3165c0, _0x542297);
                  },
                  'KwtFu': 'post',
                  'ggNUz': '/mp/wx/getuserinfo'
              };
              return _0x5de001['wAcpY'](i, _0x5de001['xOCsM'](r, {
                  'method': _0x5de001['KwtFu'],
                  'url': _0x5de001['ggNUz']
              }, _0x346a1c))['then'](function (_0xc577fc) {
                  return wx['setStorageSync'](_0x5de001['gMTyi'], _0xc577fc['data']), _0xc577fc;
              });
          },
          'getShareInfo': function (_0x1c31bd) {
              var _0x29a92d = {
                  'ZXjDg': function (_0x3e9021, _0x1ece23) {
                      return _0x3e9021(_0x1ece23);
                  },
                  'SoicO': function (_0x3a5003, _0x319b6c, _0x26bb6f) {
                      return _0x3a5003(_0x319b6c, _0x26bb6f);
                  },
                  'UGaIb': '/mp/share/detail'
              };
              return _0x29a92d['ZXjDg'](i, _0x29a92d['SoicO'](r, {
                  'url': _0x29a92d['UGaIb']
              }, _0x1c31bd));
          },
          'updateShareInfo': function (_0x299f30) {
              var _0x48a33c = {
                  'cENsL': function (_0x422353, _0x4c6dd1) {
                      return _0x422353(_0x4c6dd1);
                  },
                  'jPNjA': function (_0x28edb4, _0x1e0a0c, _0x4a7292) {
                      return _0x28edb4(_0x1e0a0c, _0x4a7292);
                  },
                  'wtjKg': '/mp/share/add'
              };
              return _0x48a33c['cENsL'](i, _0x48a33c['jPNjA'](r, {
                  'url': _0x48a33c['wtjKg']
              }, _0x299f30));
          },
          'getShareQrcode': function (_0x407a29) {
              var _0xb0694f = {
                  'IbNxs': function (_0x3cc42b, _0x4061b8) {
                      return _0x3cc42b(_0x4061b8);
                  },
                  'imORJ': function (_0x315ae8, _0x60fe80, _0x39358e) {
                      return _0x315ae8(_0x60fe80, _0x39358e);
                  },
                  'VKhPg': '/mp/share/qrcode'
              };
              return _0xb0694f['IbNxs'](i, _0xb0694f['imORJ'](r, {
                  'url': _0xb0694f['VKhPg']
              }, _0x407a29));
          },
          'mpPay': function (_0x511ed0) {
              var _0x5c7561 = {
                  'TUjwq': function (_0x59bb63, _0x5227c6, _0x4b5093, _0x644bd0) {
                      return _0x59bb63(_0x5227c6, _0x4b5093, _0x644bd0);
                  },
                  'zzLVu': 'wxpay'
              };
              var _0x49e2d9 = this;
              return this['preOrder'](_0x511ed0)['then'](function (_0x304f70) {
                  return _0x511ed0['data'] = _0x5c7561['TUjwq'](r, {}, _0x511ed0['data'], {
                      'payway': _0x5c7561['zzLVu'],
                      'order-order_id': _0x304f70['data']['order_id']
                  }), _0x49e2d9['mpOrder'](_0x511ed0);
              });
          },
          'midasPay': function (_0x9400a) {
              var _0x4d41b4 = this;
              return this['preOrder'](_0x9400a)['then'](function (_0x3f5e6f) {
                  return _0x4d41b4['wxMidasPay'](_0x3f5e6f['data'], _0x9400a);
              });
          },
          'wxMidasPay': function (_0x33b264, _0x99b803) {
              var _0x10c88b = {
                  'HgpgU': function (_0x3963d6, _0x5b3f95) {
                      return _0x3963d6 !== _0x5b3f95;
                  },
                  'ExdxE': function (_0x25e92c, _0xa799af) {
                      return _0x25e92c(_0xa799af);
                  },
                  'SHheO': function (_0x162f86, _0x1a4444, _0x5f127d) {
                      return _0x162f86(_0x1a4444, _0x5f127d);
                  },
                  'Tnpsg': 'order-order_id',
                  'wLTAP': function (_0x47bbf2, _0x50db09) {
                      return _0x47bbf2 === _0x50db09;
                  },
                  'xbVQR': 'requestMidasPayment:fail\x20iOS\x20not\x20supported',
                  'cLIPY': 'userInfo',
                  'OpOHg': '小游戏暂不支持IOS支付，请使用安卓登录后支付。',
                  'sZrWu': '========xhy\x20data'
              };
              var _0x5561ab = this;
              return new Promise(function (_0x4f8d7f, _0x3caee5) {
                  var _0x267ec3 = {
                      'MMjOw': function (_0x1b8925, _0x24645a) {
                          return _0x10c88b['HgpgU'](_0x1b8925, _0x24645a);
                      },
                      'cMrLK': function (_0xe808d1, _0x331890) {
                          return _0x10c88b['ExdxE'](_0xe808d1, _0x331890);
                      },
                      'nucfJ': function (_0xef3b04, _0x1aaf16, _0x3835a4) {
                          return _0x10c88b['SHheO'](_0xef3b04, _0x1aaf16, _0x3835a4);
                      },
                      'UYRSw': _0x10c88b['Tnpsg'],
                      'xFARh': function (_0x268393, _0x3fbdbe) {
                          return _0x10c88b['wLTAP'](_0x268393, _0x3fbdbe);
                      },
                      'liabX': _0x10c88b['xbVQR'],
                      'OpwQL': _0x10c88b['cLIPY'],
                      'sHkyu': _0x10c88b['OpOHg']
                  };
                  var _0x4935cf = _0x33b264['mode'],
                      _0x5d19c6 = _0x33b264['env'],
                      _0x115e57 = _0x33b264['offer_id'],
                      _0xdad732 = _0x33b264['currency'],
                      _0x4d0aa2 = _0x33b264['buy_quantity'],
                      _0x30ebad = _0x33b264['platform'],
                      _0x5d3eb3 = _0x33b264['zone_id'];
                  console['log'](_0x33b264, _0x10c88b['sZrWu']), wx['requestMidasPayment']({
                      'mode': _0x4935cf,
                      'env': _0x5d19c6,
                      'offerId': _0x115e57,
                      'currencyType': _0xdad732,
                      'buyQuantity': _0x4d0aa2,
                      'platform': _0x30ebad,
                      'zoneId': _0x5d3eb3,
                      'success': function (_0x2e0e69) {
                          _0x99b803['data'][_0x267ec3['UYRSw']] = _0x33b264['order_id'], _0x99b803['conf'] = {
                              'showLoading': !0x1,
                              'showToast': !0x1
                          }, _0x5561ab['midasPayQuery'](_0x99b803)['then'](function (_0x4ec7b1) {
                              var _0x2d9cf6 = {
                                  'hQvFB': function (_0x1ea819, _0x14aa79) {
                                      return _0x267ec3['MMjOw'](_0x1ea819, _0x14aa79);
                                  },
                                  'BhsuO': function (_0x1afdf3, _0x520100) {
                                      return _0x267ec3['cMrLK'](_0x1afdf3, _0x520100);
                                  }
                              };
                              if (_0x4ec7b1['data'] && _0x267ec3['MMjOw'](0x2, _0x4ec7b1['data']['status'])) var _0x4f8d7f = 0x0,
                                  _0x2e0e69 = _0x267ec3['nucfJ'](setInterval, function () {
                                      _0x4f8d7f++, _0x5561ab['midasPayQuery'](_0x99b803)['then'](function (_0x3c36e6) {
                                          _0x2d9cf6['hQvFB'](0x2, _0x3c36e6['data']['status']) && _0x2d9cf6['hQvFB'](0x8, _0x4f8d7f) || _0x2d9cf6['BhsuO'](clearInterval, _0x2e0e69);
                                      }, function (_0xd0c38c) {});
                                  }, 0x3a98);
                          }, function (_0x3c44d8) {}), _0x2e0e69['errMsg'] && (_0x2e0e69['msg'] = _0x2e0e69['errMsg']), _0x267ec3['cMrLK'](_0x4f8d7f, _0x2e0e69);
                      },
                      'fail': function (_0x4977cf) {
                          if (_0x4977cf['errMsg'])
                              if (_0x267ec3['xFARh'](_0x267ec3['liabX'], _0x4977cf['errMsg'])) {
                                  var _0x5561ab = wx['getStorageSync'](_0x267ec3['OpwQL']);
                                  _0x4977cf['msg'] = _0x5561ab && _0x5561ab['ios_text'] || _0x267ec3['sHkyu'], _0x4977cf['duration'] = 0xbb8;
                              } else _0x4977cf['msg'] = _0x4977cf['errMsg'];
                          var _0x4f8d7f = a['default']['setting'](_0x99b803['conf']);
                          _0x4f8d7f['showToast'] && (_0x4977cf['msg'] && (_0x4f8d7f['toastParams']['title'] = _0x4977cf['msg']), _0x4977cf['duration'] && (_0x4f8d7f['toastParams']['duration'] = _0x4977cf['duration']), wx['showToast'](_0x4f8d7f['toastParams'])), _0x267ec3['cMrLK'](_0x3caee5, _0x4977cf);
                      }
                  });
              });
          },
          'pay': function (_0x58ecd3) {
              var _0x577443 = {
                  'AAzoY': function (_0x1d57e6, _0x5b2895) {
                      return _0x1d57e6 === _0x5b2895;
                  },
                  'MsMKa': function (_0x2669f0, _0x3d3a6c) {
                      return _0x2669f0 + _0x3d3a6c;
                  },
                  'aHdoX': '?orderId=',
                  'usPZV': function (_0x485a35, _0x893ff8) {
                      return _0x485a35 === _0x893ff8;
                  },
                  'aUesB': '点击二维码，长按识别进入支付页面'
              };
              var _0x1ffea3 = this;
              return this['preOrder'](_0x58ecd3)['then'](function (_0x47368b) {
                  return _0x577443['AAzoY'](0x2, _0x47368b['data']['check']) ? _0x1ffea3['wxMidasPay'](_0x47368b['data'], _0x58ecd3) : (_0x577443['AAzoY'](0x1, _0x47368b['data']['pay_type']) ? wx['navigateToMiniProgram']({
                      'appId': _0x47368b['data']['mp_id'],
                      'path': _0x577443['MsMKa'](_0x577443['MsMKa'](_0x47368b['data']['path'], _0x577443['aHdoX']), _0x47368b['data']['order_id'])
                  }) : _0x577443['usPZV'](0x2, _0x47368b['data']['pay_type']) && (_0x58ecd3['canvas'] && _0x58ecd3['offscreen'] ? a['default']['renderQRCode'](_0x58ecd3['canvas'], _0x58ecd3['offscreen'], {
                      'image': _0x47368b['data']['image'],
                      'intro': _0x47368b['data']['intro'] || _0x577443['aUesB']
                  }) : wx['previewImage']({
                      'urls': [_0x47368b['data']['image']]
                  })), {
                      'data': _0x47368b['data']
                  });
              });
          },
          'preOrder': function (_0x25b58b) {
              var _0x1e839f = {
                  'LqDqX': 'orderInfo',
                  'iSjGW': function (_0x19a583, _0x440741) {
                      return _0x19a583(_0x440741);
                  },
                  'Psoer': function (_0x1a3af8, _0x4ae8b7, _0x4d52db) {
                      return _0x1a3af8(_0x4ae8b7, _0x4d52db);
                  },
                  'VFduq': 'post',
                  'BvVuu': '/mp/preorder'
              };
              return _0x1e839f['iSjGW'](i, _0x1e839f['Psoer'](r, {
                  'method': _0x1e839f['VFduq'],
                  'url': _0x1e839f['BvVuu']
              }, _0x25b58b))['then'](function (_0x2060f0) {
                  return wx['setStorageSync'](_0x1e839f['LqDqX'], _0x2060f0['data']), _0x2060f0;
              }, function (_0x230c99) {
                  return _0x230c99;
              });
          },
          'mpOrder': function (_0x36250d) {
              var _0x2a5b52 = {
                  'JoUGE': function (_0x2ac8f0, _0x2ce398) {
                      return _0x2ac8f0(_0x2ce398);
                  },
                  'yqRmX': function (_0xbc5198, _0x344f21, _0x4adabc) {
                      return _0xbc5198(_0x344f21, _0x4adabc);
                  },
                  'jGDie': 'post',
                  'qhIRl': '/mp/wx/pay'
              };
              var _0x34998b = this;
              return _0x2a5b52['JoUGE'](i, _0x2a5b52['yqRmX'](r, {
                  'method': _0x2a5b52['jGDie'],
                  'url': _0x2a5b52['qhIRl']
              }, _0x36250d))['then'](function (_0x367312) {
                  return _0x34998b['wxMpPay'](JSON['parse'](_0x367312['data']['token']), _0x36250d);
              });
          },
          'wxMpPay': function (_0x2add6e, _0x132796) {
              var _0x98f509 = {
                  'VFKmr': function (_0xa908b7, _0x43f412) {
                      return _0xa908b7(_0x43f412);
                  },
                  'EeAsH': function (_0x292405, _0x518496) {
                      return _0x292405 === _0x518496;
                  },
                  'azzne': 'requestPayment:cancel',
                  'ECnUY': function (_0x153b45, _0x2c703d) {
                      return _0x153b45(_0x2c703d);
                  },
                  'WJHRO': 'requestPayment:fail\x20cancel',
                  'OPrPe': function (_0x4d61ac, _0x2ebcbc, _0x27e43b, _0xf2473e) {
                      return _0x4d61ac(_0x2ebcbc, _0x27e43b, _0xf2473e);
                  }
              };
              return new Promise(function (_0xf07332, _0x39169a) {
                  var _0x2a22e2 = {
                      'sUxNw': function (_0x1365c2, _0x348201) {
                          return _0x98f509['VFKmr'](_0x1365c2, _0x348201);
                      },
                      'cpYhO': function (_0x717a8d, _0x1f4b58) {
                          return _0x98f509['EeAsH'](_0x717a8d, _0x1f4b58);
                      },
                      'kkkfI': _0x98f509['azzne'],
                      'hSbFZ': function (_0x578bbf, _0x2395a3) {
                          return _0x98f509['ECnUY'](_0x578bbf, _0x2395a3);
                      },
                      'obJwa': _0x98f509['WJHRO']
                  };
                  wx['requestPayment'](_0x98f509['OPrPe'](r, {}, _0x2add6e, {
                      'success': function (_0x2e8306) {
                          _0x2e8306['errMsg'] && (_0x2e8306['msg'] = _0x2e8306['errMsg']), _0x2a22e2['sUxNw'](_0xf07332, _0x2e8306);
                      },
                      'fail': function (_0x54db5b) {
                          _0x54db5b['errMsg'] && (_0x54db5b['msg'] = _0x54db5b['errMsg']);
                          var _0xf07332 = a['default']['setting'](_0x132796['conf']);
                          _0xf07332['showToast'] && (_0x54db5b['msg'] && (_0xf07332['toastParams']['title'] = _0x54db5b['msg']), wx['showToast'](_0xf07332['toastParams'])), _0x98f509['VFKmr'](_0x39169a, _0x54db5b);
                      },
                      'complete': function (_0x34ba89) {
                          _0x2a22e2['cpYhO'](_0x2a22e2['kkkfI'], _0x34ba89['errMsg']) && _0x2a22e2['hSbFZ'](_0x39169a, {
                              'msg': _0x2a22e2['obJwa']
                          });
                      }
                  }));
              });
          },
          'payQuery': function (_0x23a2de) {
              var _0x1e7962 = {
                  'mnsEn': function (_0x4d18d3, _0x149f44) {
                      return _0x4d18d3(_0x149f44);
                  },
                  'ESIOe': function (_0x197315, _0x2189b5, _0x3d090b) {
                      return _0x197315(_0x2189b5, _0x3d090b);
                  },
                  'UablM': 'post',
                  'VoWho': '/mp/order/query'
              };
              return _0x1e7962['mnsEn'](i, _0x1e7962['ESIOe'](r, {
                  'method': _0x1e7962['UablM'],
                  'url': _0x1e7962['VoWho']
              }, _0x23a2de));
          },
          'midasPayQuery': function (_0x2026ee) {
              var _0x2c1882 = {
                  'XExjc': function (_0x35bc8a, _0x54d28d) {
                      return _0x35bc8a(_0x54d28d);
                  },
                  'ychYF': function (_0x393477, _0x210e13, _0x18fe1d) {
                      return _0x393477(_0x210e13, _0x18fe1d);
                  },
                  'WouZq': '/mp/mpay/query'
              };
              return _0x2c1882['XExjc'](i, _0x2c1882['ychYF'](r, {
                  'url': _0x2c1882['WouZq']
              }, _0x2026ee));
          },
          'checkPayInfo': function (_0x268f45) {
              var _0x525432 = {
                  'fIRID': '点击二维码，长按识别进入支付页面',
                  'SXbKx': 'orderQRCode',
                  'wWSaZ': function (_0x12161e, _0x1d722f) {
                      return _0x12161e(_0x1d722f);
                  },
                  'doENP': function (_0x3b0bd9, _0x1f9042) {
                      return _0x3b0bd9 == _0x1f9042;
                  },
                  'JfTZy': '充值提示',
                  'JKaKh': '回复“2”，点击链接支付',
                  'EsXEN': function (_0x22147, _0x2eeda6) {
                      return _0x22147(_0x2eeda6);
                  },
                  'lidjA': 'order-order_id',
                  'sPVUl': function (_0x437441, _0xd4b2a9) {
                      return _0x437441(_0xd4b2a9);
                  },
                  'izprE': function (_0x28dd34, _0x1b7009, _0x5ea7a1) {
                      return _0x28dd34(_0x1b7009, _0x5ea7a1);
                  },
                  'XGutS': '/mp/order/checkinfo'
              };
              var _0x3950aa = this;
              return _0x525432['sPVUl'](i, _0x525432['izprE'](r, {
                  'url': _0x525432['XGutS']
              }, _0x268f45))['then'](function (_0x119ee3) {
                  var _0x28b773 = {
                      'APAWW': function (_0x15b7d1, _0x23880c) {
                          return _0x525432['EsXEN'](_0x15b7d1, _0x23880c);
                      }
                  };
                  return _0x119ee3['data']['order_id'] = _0x268f45['data'][_0x525432['lidjA']], new Promise(function (_0x36af25, _0x48c558) {
                      var _0x2fe1bf = {
                          'wnfMh': _0x525432['fIRID'],
                          'CNfYw': _0x525432['SXbKx'],
                          'gCkHe': function (_0x3cc8c8, _0x322b2c) {
                              return _0x525432['wWSaZ'](_0x3cc8c8, _0x322b2c);
                          }
                      };
                      _0x119ee3['data']['image'] && wx['setStorageSync'](_0x525432['SXbKx'], _0x119ee3['data']['image']);
                      var _0xdfcd53 = wx['getStorageSync'](_0x525432['SXbKx']);
                      _0x119ee3['data'] && _0x525432['doENP'](0x4, +_0x119ee3['data']['pay_type']) ? (wx['showModal']({
                          'title': _0x525432['JfTZy'],
                          'content': _0x525432['JKaKh'],
                          'success': function (_0x12cb33) {
                              _0x12cb33['confirm'] && wx['openCustomerServiceConversation']();
                          }
                      }), _0x525432['wWSaZ'](_0x36af25, _0x119ee3)) : _0x119ee3['data'] && _0x119ee3['data']['mp_id'] ? (wx['navigateToMiniProgram']({
                          'appId': _0x119ee3['data']['mp_id'],
                          'path': _0x119ee3['data']['path']
                      }), _0x525432['wWSaZ'](_0x36af25, _0x119ee3)) : _0xdfcd53 ? (_0x268f45['canvas'] && _0x268f45['offscreen'] && a['default']['renderQRCode'](_0x268f45['canvas'], _0x268f45['offscreen'], {
                          'image': _0xdfcd53,
                          'intro': _0x119ee3['data']['intro'] || _0x525432['fIRID']
                      }), _0x119ee3['data']['image'] = _0xdfcd53, _0x525432['wWSaZ'](_0x36af25, _0x119ee3)) : _0x3950aa['checkQrcode'](_0x268f45)['then'](function (_0x5e80f4) {
                          var _0x48c558 = _0x5e80f4['data']['image'];
                          _0x268f45['canvas'] && _0x268f45['offscreen'] && a['default']['renderQRCode'](_0x268f45['canvas'], _0x268f45['offscreen'], {
                              'image': _0x48c558,
                              'intro': _0x119ee3['data']['intro'] || _0x2fe1bf['wnfMh']
                          }), wx['setStorageSync'](_0x2fe1bf['CNfYw'], _0x48c558), _0x119ee3['data']['image'] = _0x48c558, _0x2fe1bf['gCkHe'](_0x36af25, _0x119ee3);
                      }, function (_0x3b6f18) {
                          _0x28b773['APAWW'](_0x36af25, _0x119ee3);
                      });
                  });
              });
          },
          'checkOrderInfo': function (_0x5342cb) {
              var _0x1540bd = {
                  'FAgmU': function (_0x4d47ce, _0xd150ac) {
                      return _0x4d47ce(_0xd150ac);
                  },
                  'gfezk': function (_0x1b1304, _0xda23ec, _0x2ea0f9) {
                      return _0x1b1304(_0xda23ec, _0x2ea0f9);
                  },
                  'jxinr': 'post',
                  'seXYi': '/mp/pay/info'
              };
              return _0x1540bd['FAgmU'](i, _0x1540bd['gfezk'](r, {
                  'method': _0x1540bd['jxinr'],
                  'url': _0x1540bd['seXYi']
              }, _0x5342cb));
          },
          'checkOrder': function (_0x1bb226) {
              var _0x2aa284 = {
                  'guWiK': function (_0xafffa, _0x2cd889) {
                      return _0xafffa(_0x2cd889);
                  },
                  'JRZRl': function (_0x18faf1, _0x5c7748, _0x10aeb8) {
                      return _0x18faf1(_0x5c7748, _0x10aeb8);
                  },
                  'eddqN': 'post',
                  'gdMpU': '/mp/check/pay'
              };
              var _0x381591 = this;
              return _0x2aa284['guWiK'](i, _0x2aa284['JRZRl'](r, {
                  'method': _0x2aa284['eddqN'],
                  'url': _0x2aa284['gdMpU']
              }, _0x1bb226))['then'](function (_0x4dc8c5) {
                  return _0x381591['wxMpPay'](JSON['parse'](_0x4dc8c5['data']['token']), _0x1bb226);
              });
          },
          'checkQrcode': function (_0x234db1) {
              var _0x4fd3dd = {
                  'wRMKw': function (_0x5a8041, _0x2d7246) {
                      return _0x5a8041(_0x2d7246);
                  },
                  'lhXDj': function (_0x5db6e7, _0x2d8914, _0x58538b) {
                      return _0x5db6e7(_0x2d8914, _0x58538b);
                  },
                  'NrcOo': '/mp/order/qrcode'
              };
              return _0x234db1['data'] && (_0x234db1['data']['is_last'] = 0x2), _0x4fd3dd['wRMKw'](i, _0x4fd3dd['lhXDj'](r, {
                  'url': _0x4fd3dd['NrcOo']
              }, _0x234db1));
          },
          'reportAdClick': function (_0x2c0e30) {
              var _0x3b7c7d = {
                  'CCVEv': function (_0x456fb0, _0x1420e1) {
                      return _0x456fb0(_0x1420e1);
                  },
                  'vItWa': function (_0x1257bd, _0x54b828, _0x1b5ee0) {
                      return _0x1257bd(_0x54b828, _0x1b5ee0);
                  },
                  'awkyZ': '/mp/ad/report'
              };
              return _0x3b7c7d['CCVEv'](i, _0x3b7c7d['vItWa'](r, {
                  'url': _0x3b7c7d['awkyZ']
              }, _0x2c0e30));
          },
          'removeOffScreen': function () {
              a['default']['removeOffScreen']();
          },
          'checkMsg': function (_0x531c8e) {
              var _0x4f2f71 = {
                  'XiYLS': function (_0x92e190, _0x19c231) {
                      return _0x92e190(_0x19c231);
                  },
                  'UHUlJ': function (_0x363f04, _0x2960bb, _0x3d8a8e) {
                      return _0x363f04(_0x2960bb, _0x3d8a8e);
                  },
                  'XYgAJ': '/msg/sec/check'
              };
              return _0x4f2f71['XiYLS'](i, _0x4f2f71['UHUlJ'](r, {
                  'url': _0x4f2f71['XYgAJ']
              }, _0x531c8e));
          }
      };
  e['exports'] = u;
}, function (e, t, n) {
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
}]);