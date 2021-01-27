import starApi from './api'
import starConfig from './config'
import starUtil from './util'

let huoSdk = {
  // 初始化配置
  init (options = {}) {
    let params = ['app_id', 'mp_id', 'showLoading', 'loadingParams', 'showToast', 'toastParams', 'debug']

    params.map(param => {
      if (options[param] !== undefined) {
        if (param === 'app_id') {
          starConfig.baseParams[param] = options.app_id
        } else if (param === 'mp_id') {
          starConfig.gameParams['game-mp_id'] = options.mp_id
        } else if (param === 'debug') {
          starConfig.debug = options.debug
        } else {
          starConfig.setting[param] = options[param]
        }
      }
    })

    return new Promise((resolve, reject) => {
      if (!options.app_id) {
        reject({
          msg: 'fail'
        })
      } else {
        resolve({
          msg: 'success'
        })
      }
    })
  },

  // 登录
  login (options = {}) {
    return new Promise((resolve, reject) => {
      // 校验用户当前 session_key 是否有效
      wx.checkSession({
        success: res => {
          // session_key 有效，尝试获取用户信息
          // 若用户未授权则无法获取
          starApi.getSelfInfo(options).then(res => {
            console.log(JSON.stringify(res), '=====login里面的getSelfInfo success1')
            resolve({
              ...res,
              msg: 'success'
            })
          }, err => {
            console.log('=====login里面的getSelfInfo fail2')
            reject({
              msg: err.msg || 'fail'
            })
          })
        },
        fail: res => {
          // session_key 失效，重新登录
          starApi.wxLogin(options).then(res => {
            starApi.getSelfInfo(options).then(res => {
              console.log(JSON.stringify(res), '=====login里面的getSelfInfo success3')
              resolve({
                ...res,
                msg: 'success'
              })
            }, err => {
              console.log('=====login里面的getSelfInfo fail4')
              reject({
                msg: err.msg || 'fail'
              })
            })
          }, err => {
            console.log('=====login里面的getSelfInfo fail5')
            reject({
              msg: err.msg || 'fail'
            })
          })
        }
      })
    })
  },

  // 上传用户信息
  updateSelfInfo (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.updateSelfInfo(options).then(res => {
        resolve({
          ...res,
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.msg || 'fail'
        })
      })
    })
  },

  updateRoleInfo (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.updateRoleInfo(options).then(res => {
        resolve({
          ...res,
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.msg || 'fail'
        })
      })
    })
  },

  // // 获取用户信息
  // getSelfInfo (options = {}) {
  //   console.log('starApi getSelfInfo')
  //   return starApi.getSelfInfo(options)
  // },

  // 获取分享内容
  getShareInfo (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.getShareInfo(options).then(res => {
        resolve({
          ...res,
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.msg || 'fail'
        })
      })
    })
  },

  // 分享上报
  updateShareInfo (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.updateShareInfo(options).then(res => {
        resolve({
          ...res,
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.msg || 'fail'
        })
      })
    })
  },

  // 预下单
  preOrder (options) {
    return starApi.preOrder(options)
  },

  // 小程序支付
  mpPay (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.mpPay(options).then(res => {
        resolve({
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.errMsg || 'fail'
        })
      })
    })
  },

  // 查询小程序支付结果
  payQuery (options = {}) {
    if (!options.data || options.data['order-order_id'] === undefined) {
      let orderInfo = wx.getStorageSync('orderInfo')
      options.data = {
        ...options.data,
        'order-order_id': (orderInfo ? orderInfo.order_id : '')
      }
    }
    return starApi.payQuery(options)
  },

  // 米大师支付
  midasPay (options = {}) {
    return new Promise((resolve, reject) => {
      starApi.midasPay(options).then(res => {
        options.conf = {
          showLoading: false,
          showToast: false
        }
        let times = 0
        let balanceInterval = setInterval(() => {
          times++
          this.midasPayQuery(options).then(res => {
            if (res.data.status === 2 || times === 12) {
              // 支付成功
              clearInterval(balanceInterval)
            }
          }, err => {

          })
        }, 15000)

        resolve({
          msg: 'success'
        })
      }, err => {
        reject({
          msg: err.errMsg || 'fail'
        })
      })
    })
  },

  // 查询小程序支付结果
  midasPayQuery (options = {}) {
    if (!options.data || options.data['order-order_id'] === undefined) {
      let orderInfo = wx.getStorageSync('orderInfo')
      options.data = {
        ...options.data,
        'order-order_id': (orderInfo ? orderInfo.order_id : '')
      }
    }
    return starApi.midasPayQuery(options)
  },

  // 切换支付
  pay (options = {}) {
    return starApi.pay(options)
  },

  // 获取订单信息
  checkOrderInfo (options = {}) {
    return starApi.checkOrderInfo(options)
  },

  // 切换支付点击
  checkOrder (options = {}) {
    return starApi.checkOrder(options)
  },

  // 小程序广告转化行为数据上报
  reportAdClick (options = {}) {
    return starApi.reportAdClick(options)
  },

  // 移除离屏画布
  removeOffScreen () {
    starApi.removeOffScreen()
  },

  // v1.0.3
  // 小程序敏感词检测
  checkMsg (options = {}) {
    return starApi.checkMsg(options)
  },

  // v1.0.3
  // 小程序敏感图片检测
  checkImg (options = {}) {
    let data = {
      ...starConfig.baseParams,
      ...starConfig.gameParams,
      ...starConfig.agentParams,
      ...starConfig.deviceParams,
      token: wx.getStorageSync('userInfo').user_token,
      ts: new Date().getTime()
    }
    data.sign = starUtil.sign({
      url: '/mp/img/check',
      data
    })

    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: starConfig.baseUrl + '/mp/img/check',
        filePath: options.data.filePath,
        name: 'image',
        formData: data,
        success: res => {
          let { data } = res
          data = JSON.parse(data)
          if (data.code === 200) {
            resolve({
              msg: 'success'
            })
          } else {
            reject({
              msg: data.msg || 'fail'
            })
          }
        }
      })
    })
  }
}

module.exports = huoSdk