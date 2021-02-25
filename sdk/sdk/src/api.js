import starUtil from './util'

let reLogin = false
let ajax = function (options) {
  let { data, conf } = options
  return new Promise((resolve, reject) => {
    starUtil.ajax(options).then(res => {
      if (res.data && res.data.data) {
        console.log('======ajax resolve111')
        resolve({
          data: res.data.data
        })
      } else {
        console.log('======ajax resolve222')
        resolve({
          msg: 'success'
        })
      }
    }, res => {
      // 返回状态码
      if (res.data && res.data.code === 1002) {
        if (reLogin) return false
        reLogin = true
        resolve(starApi.wxLogin({
          data,
          conf
        }).then(res => {
          reLogin = false
          return starApi.getSelfInfo({
            data,
            conf
          })
        }))
      } else {
        reject({
          msg: res.data ? (res.data.msg || '网络异常，请重试') : res.errMsg
        })
      }
    })
  })
}

let starApi = {
  // 登录
  login (options) {
    return ajax({
      method: 'post',
      url: '/mp/wx/login',
      ...options
    }).then(res => {
      console.log('========api login success')
      if (res) {
        wx.setStorageSync('userInfo', res.data)
      }
      return res
    })
  },

  // 调用小程序登录
  wxLogin (options) {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          if (res.code) {
            options.data = {
              ...options.data,
              code: res.code
            }
            resolve(this.login(options))
          } else {
            reject(res)
          }
        },
        fail: res => {
          reject(res)
        }
      })
    })
  },

  // 上传用户信息
  updateSelfInfo (options) {
    return ajax({
      method: 'post',
      url: '/mp/wx/updateinfo',
      ...options
    }).then(res => {
      wx.setStorageSync('userInfo', res.data)
      return res
    })
  },

  // 上传角色信息
  updateRoleInfo (options) {
    return ajax({
      method: 'post',
      url: '/mp/user/uprole',
      ...options
    }).then(res => {
      return res
    })
  },

  // 获取用户信息
  getSelfInfo (options) {
    return ajax({
      method: 'post',
      url: '/mp/wx/getuserinfo',
      ...options
    }).then(res => {
      console.log('===========api getSelfInfo success')
      try {
        console.log('====sdk getSelfInfo try')
        wx.setStorage({
          key:"userInfo",
          data: res.data
        })
      } catch (error) {
        console.log(error, '====sdk catch error')
        wx.setStorageSync('userInfo', res.data)
      }
      return res
    }, err => {
      console.log('===========api getSelfInfo fail')
    })
  },

  // 获取分享内容
  getShareInfo (options) {
    return ajax({
      url: '/mp/share/detail',
      ...options
    })
  },

  // 分享上报
  updateShareInfo (options) {
    return ajax({
      url: '/mp/share/add',
      ...options
    })
  },

  // 获取分享二维码
  getShareQrcode (options) {
    return ajax({
      url: '/mp/share/qrcode',
      ...options
    })
  },

  // 调起小程序支付
  mpPay (options) {
    return this.preOrder(options).then(res => {
      options.data = {
        ...options.data,
        'payway': 'wxpay',
        'order-order_id': res.data.order_id
      }
      return this.mpOrder(options)
    })
  },

  // 调起米大师支付
  midasPay (options) {
    return this.preOrder(options).then(res => {
      return this.wxMidasPay(res.data, options)
    })
  },

  // 米大师支付
  wxMidasPay (data, options) {
    return new Promise((resolve, reject) => {
      let { mode, env, offer_id: offerId, currency: currencyType, buy_quantity: buyQuantity, platform, zone_id: zoneId } = data
      wx.requestMidasPayment({
        mode,
        env,
        offerId,
        currencyType,
        buyQuantity,
        platform,
        zoneId,
        success: res => {
          options.data['order-order_id'] = data.order_id
          options.conf = {
            showLoading: false,
            showToast: false
          }
          this.midasPayQuery(options).then(res => {
            if (res.data && res.data.status !== 2) {
              let times = 0
              let balanceInterval = setInterval(() => {
                times++
                this.midasPayQuery(options).then(res => {
                  if (res.data.status === 2 || times === 8) {
                    // 支付成功
                    clearInterval(balanceInterval)
                  }
                }, err => {
                })
              }, 15000)
            }
          }, err => {
          })

          if (res.errMsg) {
            res.msg = res.errMsg
          }
          resolve(res)
        },
        fail: res => {
          if (res.errMsg) {
            if (res.errMsg === 'requestMidasPayment:fail iOS not supported') {
              let userInfo = wx.getStorageSync('userInfo')
              res.msg = (userInfo && userInfo.ios_text) || '小游戏暂不支持IOS支付，请使用安卓登录后支付。'
              res.duration = 3000
            } else {
              res.msg = res.errMsg
            }
          }

          let conf = starUtil.setting(options.conf)
          if (conf.showToast) {
            if (res.msg) {
              conf.toastParams.title = res.msg
            }
            if (res.duration) {
              conf.toastParams.duration = res.duration
            }
            wx.showToast(conf.toastParams)
          }

          reject(res)
        }
      })
    })
  },

  // 切换支付
  pay (options) {
    return this.preOrder(options).then(res => {
      // 1:切换 2:不切换
      if (res.data.check === 2) {
        return this.wxMidasPay(res.data, options)
      } else {
        // options.data['order-order_id'] = res.data.order_id
        // return this.checkPayInfo(options)
        if (res.data.pay_type === 1) {
          wx.navigateToMiniProgram({
            appId: res.data.mp_id,
            path: res.data.path + '?orderId=' + res.data.order_id
          })
        } else if (res.data.pay_type === 2) {
          if (options.canvas && options.offscreen) {
            starUtil.renderQRCode(options.canvas, options.offscreen, {
              image: res.data.image,
              intro: res.data.intro || '点击二维码，长按识别进入支付页面'
            })
          } else {
            wx.previewImage({
              urls: [res.data.image]
            })
          }
        }
        return { data: res.data }
      }
    })
  },

  // 预下单
  preOrder (options) {
    return ajax({
      method: 'post',
      url: '/mp/preorder',
      ...options
    }).then(res => {
      wx.setStorageSync('orderInfo', res.data)
      return res
    }, err => {
      return err
    })
  },

  // 小程序点击支付
  mpOrder (options) {
    return ajax({
      method: 'post',
      url: '/mp/wx/pay',
      ...options
    }).then(res => {
      return this.wxMpPay(JSON.parse(res.data.token), options)
    })
  },

  // 小程序支付
  wxMpPay (data, options) {
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        ...data,
        success (res) {
          if (res.errMsg) {
            res.msg = res.errMsg
          }
          resolve(res)
        },
        fail (res) {
          if (res.errMsg) {
            res.msg = res.errMsg
          }

          let conf = starUtil.setting(options.conf)
          if (conf.showToast) {
            if (res.msg) {
              conf.toastParams.title = res.msg
            }
            wx.showToast(conf.toastParams)
          }

          reject(res)
        },
        complete (res) {
          if (res.errMsg === 'requestPayment:cancel') {
            reject({
              msg: 'requestPayment:fail cancel'
            })
          }
        }
      })
    })
  },

  // 查询支付结果
  payQuery (options) {
    return ajax({
      method: 'post',
      url: '/mp/order/query',
      ...options
    })
  },

  // 米大师余额查询
  midasPayQuery (options) {
    return ajax({
      url: '/mp/mpay/query',
      ...options
    })
  },

  // 获取跳转支付信息
  checkPayInfo (options) {
    return ajax({
      url: '/mp/order/checkinfo',
      ...options
    }).then(res => {
      res.data.order_id = options.data['order-order_id']
      return new Promise((resolve, reject) => {
        if (res.data.image) {
          wx.setStorageSync('orderQRCode', res.data.image)
        }

        let image = wx.getStorageSync('orderQRCode')
        if (res.data && +res.data.pay_type === 4) { // 客服支付
          wx.showModal({
            title: '充值提示',
            content: '回复“2”，点击链接支付',
            success: res => {
              if (res.confirm) {
                wx.openCustomerServiceConversation()
              }
            }
          })
          resolve(res)
        } else if (res.data && res.data.mp_id) {
          wx.navigateToMiniProgram({
            appId: res.data.mp_id,
            path: res.data.path
          })
          resolve(res)
        } else if (image) {
          if (options.canvas && options.offscreen) {
            starUtil.renderQRCode(options.canvas, options.offscreen, {
              image,
              intro: res.data.intro || '点击二维码，长按识别进入支付页面'
            })
          }
          res.data.image = image
          resolve(res)
        } else {
          this.checkQrcode(options).then(qres => {
            let image = qres.data.image
            if (options.canvas && options.offscreen) {
              starUtil.renderQRCode(options.canvas, options.offscreen, {
                image: image,
                intro: res.data.intro || '点击二维码，长按识别进入支付页面'
              })
            }

            wx.setStorageSync('orderQRCode', image)

            res.data.image = image
            resolve(res)
          }, err => {
            resolve(res)
          })
        }
      })
    })
  },

  // 获取订单信息
  checkOrderInfo (options) {
    return ajax({
      method: 'post',
      url: '/mp/pay/info',
      ...options
    })
  },

  // 切换支付点击
  checkOrder (options) {
    return ajax({
      method: 'post',
      url: '/mp/check/pay',
      ...options
    }).then(res => {
      return this.wxMpPay(JSON.parse(res.data.token), options)
    })
  },

  // 获取切换二维码
  checkQrcode (options) {
    if (options.data) {
      options.data.is_last = 2
    }
    return ajax({
      url: '/mp/order/qrcode',
      ...options
    })
  },

  // 小程序广告转化行为数据上报
  reportAdClick (options) {
    return ajax({
      url: '/mp/ad/report',
      ...options
    })
  },

  // 移除离屏画布
  removeOffScreen () {
    starUtil.removeOffScreen()
  },

  // 小程序敏感词检测
  checkMsg (options) {
    return ajax({
      url: '/msg/sec/check',
      ...options
    })
  }
}

module.exports = starApi