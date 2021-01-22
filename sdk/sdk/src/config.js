let starConfig = {
  debug: false,

  baseUrl: 'https://gminiapi.xinghe66.cn',
  channelId: 2000051,

  // 基础参数
  baseParams: {
    'app_id': '',
    'client_id': '',
    'format': 'json'
  },

  // 游戏参数
  gameParams: {
    'game-pkg_name': '',
    'game-app_ver': '',
    'game-h_ver': '',
    'game-sdk_ver': '',
    'game-mp_id': ''
  },

  // 渠道参数
  agentParams: {
    'agent-ch': '',
    'agent-sub_ch': ''
  },

  // 设备参数
  deviceParams: {
    'device-device_id': '',
    'device-mac': '',
    'device-ip': '',
    'device-brand': '',
    'device-model': '',
    'device-os': '',
    'device-os_version': '',
    'device-screen': '',
    'device-net': '',
    'device-imsi': '',
    'device-longitude': '',
    'device-latitude': '',
    'device-userua': '',
    'device-disk_space': '',
    'device-open_time': '',
    'device-is_charge': '',
    'device-screen_luminance': '',
    'device-has_sim': '',
    'device-is_break': ''
  },

  // 配置
  setting: {
    // 加载框配置
    showLoading: false,
    loadingParams: {
      title: '加载中',
      mask: true
    },

    // 提示框配置
    showToast: false,
    toastParams: {
      icon: 'none'
    }
  }
}

try {
  starConfig.gameParams['game-pkg_name'] = wx.canIUse ? '' : 'game'

  wx.getSystemInfo({
    success: res => {
      starConfig.deviceParams['device-brand'] = encodeURIComponent(res.brand) // 手机品牌
      starConfig.deviceParams['device-model'] = encodeURIComponent(res.model) // 手机型号
      starConfig.deviceParams['device-screen'] = encodeURIComponent(res.screenWidth + 'x' + res.screenHeight) // 屏幕分辨率
      starConfig.deviceParams['device-os'] = res.platform === 'devtools' ? 'android' : encodeURIComponent(res.platform) // 客户端平台
      starConfig.deviceParams['device-os_version'] = encodeURIComponent(res.system) // 操作系统版本
    }
  })
  wx.getNetworkType({
    success: res => {
      starConfig.deviceParams['device-net'] = encodeURIComponent(res.networkType) // 网络类型
    }
  })
  wx.getScreenBrightness({
    success: res => {
      starConfig.deviceParams['device-screen_luminance'] = encodeURIComponent(parseInt(res.value * 100)) // 屏幕亮度
    }
  })
} catch (e) {

}

module.exports = starConfig