234 jshaman混淆的game.js
239 工具混淆的game.js


let isShare = false;
const versions = '1.0.0'
const gameId = 239

// const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/toMiniGame/sg/${gameId}`

// const rootPath = wx.env.USER_DATA_PATH
// const fs = wx.getFileSystemManager();
// let num = 0

// var jsonList = [
//     '20201201_main',
// ]

// 图片域名
const imgUrl = 'https://gministatic.xinghe66.cn/toMiniGameImg'
// 分享内容
const shareData = {
    title: '经典三国游戏，新街机玩法等你来战',
    imageUrl: `${imgUrl}/sg/shareImg.png`,
    query: 'isShare=1'
}

wx.onShow((res) => {
    if (res.scene == 1044 || res.query.isShare == 1) {
        isShare = true
    }
    // 分享
    wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
    })
    // 分享到朋友圈
    wx.onShareTimeline(() => {
        return shareData
    })
    // 转发
    wx.onShareAppMessage(() => {
        return shareData
    })
    judgegame()
        .then(() => {
            intoNav()
        })
        .catch(() => {
            // getJsonToGame()
            intoGame()
        })
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
                if (res.data.code == 200 && res.data.data.status == 2 || !isShare) {
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

// 赋值json给全局
function hasJsonToGame(str, data) {
    console.log(str, '')
    GameGlobal[str] = JSON.parse(data)
    // wx.setStorage({
    // 	key: str,
    // 	data:  JSON.parse(data)
    // })
    let l = jsonList.length - 1
    if (num == l) {
        // debugger
        intoGame()
    }
    num++
}

// 微信api 读取文件
function wxReadFile(filePath, str, toGame) {
    return new Promise((resolve, reject) => {
        fs.readFile({
            filePath,
            encoding: 'utf-8',
            success(res) {
                // console.log('读取成功')
                if (toGame && res.data) {
                    hasJsonToGame(str, res.data)
                }
                resolve(res)
            },
            fail(err) {
                // console.log(err, '读取失败')
                reject(err)
            }
        })
    })
}

// 拿到游戏的json
function getJsonToGame() {
    for (let i = 0; i < jsonList.length; i++) {
        let date = jsonList[i].split('_')[0]
        let str = jsonList[i].split('_')[1]
        let end = str.includes('.zip') ? '' : '.json'
        const path = `${rootPath}/${date}/${str}${end}`
        const zip2JsonName = !end && str.split('.')[0]
        const zip2JsonPath = `${rootPath}/${zip2JsonName}.json`

        fs.access({
            path: `${rootPath}/${date}`,
            success(res) {
                // console.log(res, '==目录存在')
            },
            fail(err) {
                // console.log('目录不存在')
                fs.mkdir({
                    dirPath: `${rootPath}/${date}`,
                    recursive: true,
                    success(res) {
                        // console.log('目录创建成功')
                    }
                })
            },
            complete() {
                wxReadFile(path)
                    .then(res => {
                        // 有缓存，直接读取
                        if (end) {
                            // 如果是json文件，直接赋值给全局
                            hasJsonToGame(str, res.data)
                        } else {
                            // 如果是zip文件，直接读取已经解压了的文件
                            wxReadFile(zip2JsonPath, zip2JsonName, true)
                        }
                    })
                    .catch(err => {
                        // 没缓存，下载
                        wx.downloadFile({
                            url: `${downloadUrl}/${date}/${str}${end}`,
                            timeout: 10000,
                            filePath: path,
                            success(res) {
                                // 如果是json的文件
                                if (res.statusCode === 200) {
                                    if (end) {
                                        wxReadFile(path, str, true)
                                    } else {
                                        // 如果是zip的压缩文件
                                        fs.unzip({
                                            zipFilePath: res.filePath || res.tempFilePath,
                                            targetPath: rootPath,
                                            success(res) {
                                                // console.log(res, '解压成功')
                                                wxReadFile(zip2JsonPath, zip2JsonName, true)
                                            },
                                            fail(err) {
                                                console.log(err, '==解压失败')
                                            }
                                        })
                                    }
                                } else {
                                    console.error('下载失败，文件不存在')
                                    fs.unlink({
                                        filePath: `${rootPath}/${date}/${str}${end}`,
                                        success(res) {
                                            // console.log(res, '删除成功')
                                        },
                                        fail(err) {
                                            // console.log(err, '删除失败')
                                        }
                                    })
                                }
                            },
                            fail(err) {
                                console.log(err, '====下载失败')
                            }
                        })
                    })
            }
        })
    }
}

// 进壳
function intoGame() {
  require('adapter-min.js');

  __globalAdapter.init();
  
  require('cocos/cocos2d-js-min.js');
  
  __globalAdapter.adaptEngine();
  
  require('./ccRequire');
  
  require('./src/settings'); // Introduce Cocos Service here
  
  
  require('./main'); // TODO: move to common
  // Adjust devicePixelRatio
  
  
  cc.view._maxPixelRatio = 4;
  
  if (cc.sys.platform !== cc.sys.WECHAT_GAME_SUB) {
    // Release Image objects after uploaded gl texture
    cc.macro.CLEANUP_IMAGE_CACHE = true;
  }
  
  window.boot();
  
}

// 进游戏
function intoNav() {
    require('./toFormalGame/index.js')
}