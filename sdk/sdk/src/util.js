import starConfig from './config'
import md5 from './md5'

let cvs
let starUtil = {
  // 请求
  ajax (options) {
    let conf = this.setting(options.conf)
    options.conf && delete options.conf
    // 打开 loading，如果需要
    conf.showLoading && wx.showLoading(conf.loadingParams)
    
    options = this.params(options)

    starConfig.debug && console.log(new Date().getTime(), options.url, options.data)
    return new Promise((resolve, reject) => {
      console.log('============ajax');
      // 打点，判断是不是因为wx.request没有返回导致我们没有数据返回给cp
      let timeout = setTimeout(() => {
        wx.request({
          url: 'https://vrapi.feb1st.cn/api/log/request',
          method: 'POST',
          data: {
            content: options.url
          },
          complete(res) {
            // 这是是为了证明wx.request有没有返回数据
            wx.request({
              url: 'https://vrapi.feb1st.cn/api/log/request',
              method: 'POST',
              data: {
                content: `${options.url} complete, ${res.data.code}`
              }
            })
          }
        })
      }, 3000)
      wx.request({
        ...options,
        success: res => {
          starConfig.debug && console.log(new Date().getTime(), options.url, res)
          // 关闭 loading，如果存在
          conf.showLoading && wx.hideLoading()
          if (res.statusCode === 200 && (res.data && (res.data.code === undefined || res.data.code === 200))) {
            resolve(res)
          } else {
            if (conf.showToast) {
              if (res.data && res.data.msg) {
                conf.toastParams.title = res.data.msg
              }
              wx.showToast(conf.toastParams)
            }

            reject(res)
          }
        },
        fail: res => {
          starConfig.debug && console.log(new Date().getTime(), options.url, res)
          // 关闭 loading，如果存在
          conf.showLoading && wx.hideLoading()

          if (conf.showToast) {
            if (res.errMsg) {
              conf.toastParams.title = res.errMsg
            }
            wx.showToast(conf.toastParams)
          }

          reject(res)
        },
        complete(res) {
          clearTimeout(timeout)
          console.log('======request complete');
        }
      })
    })
  },
  // 参数
  params (options) {
    // method
    options.method = (options.method || 'get').toUpperCase()
    // header
    if (options.method === 'POST' && !options.header) {
      options.header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    // data
    if (!options.private) {
      let userInfo = wx.getStorageSync('userInfo')
      options.data = {
        ...starConfig.baseParams,
        ...starConfig.gameParams,
        ...starConfig.agentParams,
        ...starConfig.deviceParams,
        ...options.data,
        token: userInfo ? userInfo.user_token : '',
        // ts: parseInt(new Date().getTime() / 1000)
        ts: new Date().getTime()
      }
    }
    options.data.sign = this.sign(options)
    // url
    if (!/^http/.test(options.url)) {
      options.url = starConfig.baseUrl + options.url
    }
    delete options.private
    delete options.signUrl

    return options
  },

  // 配置
  setting (conf = {}) {
    return {
      ...starConfig.setting,
      ...conf
    }
  },

  // 签名
  sign (options) {
    let rsa = ''
    if (options.data.channel_id) {
      rsa = '&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDleNmoD8CwcsVduQnG7UAMqD2aYpwwwswmMLSKvwNZ6pQeC4ugwGaG3E8jfzRvMYzIUcCYkQ9uROuKiA3+LGZ9Zyvy3uIVycCcMwM88WgRMjospa2EoGVI4Ef8qcvbfPGC3vwdIKQRs4dnaG6yQsOcyVkgyRtDq4iQnnlG9Onw5QIDAQAB'
    } else {
      rsa = '&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHrJSESIbzCdsC0+zIwSn3ft9RGaau0izFCdXodH3i/sWgYcoF+wvbvAMB9336tpTYMSfbks4HfSyt8PDunChqyeCnnraj60DRrySOxAIbjjSAxVxI437R5qZt3mFbH1rgptLfi5RP3N6XIWDk8Ecw2XCdlqfDPiQhGCYleldsdQIDAQAB'
    }

    if (options.app_key) {
      rsa = 'app_key=' + options.app_key
    }

    let url = (options.signUrl || options.url).substr(1)

    let keys = Object.keys(options.data).sort()
    let values = ''
    keys.forEach(key => {
      values += `&${key}=${options.data[key]}`
    })

    let sign = ''
    if (options.app_key) {
      sign = md5(`${values.substr(1)}&${rsa}`)
    } else {
      sign = md5(`${options.method}&${encodeURIComponent(url)}&${encodeURIComponent(values.substr(1))}&${rsa}`.replace(/\(/g, '%28').replace(/\)/g, '%29'))
    }

    return sign
  },

  renderQRCode (canvas, qrcvs, data) {
    let qrctx = qrcvs.getContext('2d')

    let img = wx.createImage()
    img.src = data.image
    img.onload = function () {
      qrctx.lineJoin = 'round'
      qrctx.lineWidth = 30
      qrctx.strokeStyle = '#ffffff'
      qrctx.strokeRect((window.innerWidth - 240) / 2, (window.innerHeight - 264) / 2, 240, 264)
      qrctx.fillStyle = '#ffffff'
      qrctx.fillRect((window.innerWidth - 220) / 2, (window.innerHeight - 244) / 2, 220, 244)
      qrctx.fillStyle = '#1A83FF'
      qrctx.font = 'bold 14px PingFangSC-Medium'
      qrctx.textAlign = 'center'
      qrctx.fillText(data.intro, window.innerWidth / 2, (window.innerHeight - 258) / 2 + 218 + 30, 250)
      qrctx.drawImage(img, (window.innerWidth - 218) / 2, (window.innerHeight - 258) / 2, 218, 218)
    }

    cvs = {
      canvas,
      qrcvs,
      qrctx,
      data
    }
    canvas.addEventListener('touchstart', touchQRCode)
  },

  removeOffScreen () {
    if (cvs) {
      cvs.qrctx.clearRect(0, 0, cvs.qrcvs.width, cvs.qrcvs.height)
      cvs.canvas.removeEventListener('touchstart', touchQRCode)
    }
  }
}

function touchQRCode (e) {
  e.preventDefault()

  let { clientX: x, clientY: y } = e.touches[0]
  if (x >= (window.innerWidth - 218) / 2 && x <= (window.innerWidth - 218) / 2 + 218 && y >= (window.innerHeight - 258) / 2 && y <= (window.innerHeight - 258) / 2 + 218) {
    wx.previewImage({
      urls: [cvs.data.image]
    })
  } else {
    cvs.qrctx.clearRect(0, 0, cvs.qrcvs.width, cvs.qrcvs.height)
    cvs.canvas.removeEventListener('touchstart', touchQRCode)
  }
}

module.exports = starUtil