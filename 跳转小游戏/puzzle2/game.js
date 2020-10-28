const gameId = 53,
  versions = '1.0.0';

judgegame()
  .then(() => {
    intoMiniGame()
  })
  .catch(() => {
    intoGame()
  })

// 判断进壳还是进游戏
function judgegame() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://gminiapi.xinghe66.cn/mp/index',
      method: 'GET',
      data: {
        app_id: gameId,
        versions,
        format: 'json'
      },
      success(res) {
        // status 2 提审状态
        if (res.data.code == 200 && res.data.data.status == 2) {
          reject()
        } else {
          resolve()
        }
      },
      fail() {
        reject()
      }
    })
  })
}

// 进游戏
function intoGame() {
  require('./weapp-adapter')
  const Main = require('./KVmfsDjs/RWmnLGmain.js')
  new Main.default()
}

// 进壳
function intoMiniGame() {
  require('./toFormalGame/index.js')
}