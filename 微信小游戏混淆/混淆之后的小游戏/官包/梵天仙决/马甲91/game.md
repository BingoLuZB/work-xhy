const versions = '1.0.0'
const gameId = 91
const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/ftxj/mj${gameId}`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
  '20210128_main.zip',
  '20210128_default.zip',
  '20210128_protobufbundles.zip',
  '20210128_protobuflibrary.zip',
]

// judgegame()
//     .then(() => {
//         // 进游戏
//         getJsonToGame()
//     })
//     .catch(() => {
//         intoMiniGame()
//     })

getJsonToGame()

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

// 赋值json给全局
function hasJsonToGame(str, data) {
    console.log(str)
    wx[str] = JSON.parse(data)
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
                            filePath: path,
                            timeout: 10000,
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
                                console.error(err, '====下载失败')
                            }
                        })
                    })
            }
        })
    }
}


// 进游戏
function intoGame() {
  require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');
require('./wxsdk.js');

var huoSdk = require('./sdk-1.0.1.js');
window["huoSdk"]=huoSdk;

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

let runOptions = {
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		renderMode: "webgl",
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 30,
		scaleMode: "fixedNarrow",
		contentWidth: 540,
		contentHeight: 900,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		maxTouches: 2,
		//----auto option end----
    renderMode: 'webgl',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
};

let runEgret = function () {
  if (wx.loadSubpackage) {
    require("./EgretSubPackageLoading.js");
    runOptions.entryClassName = "EgretSubPackageLoading";
    egret.runEgret(runOptions);
  }
  else {
    //
    require("./stage1/game.js");
    require("./stage2/game.js");
    egret.runEgret(runOptions);
  }
}

const onShare = function() {
  huoSdk.getShareInfo({
    data: {
      path: ''
    }
  }).then(res => {
      console.log('getShareInfo res==',res)
      //res== {code:200,data:{},msg:'success'}
      // do something
    // 小游戏
    wx.onShareAppMessage(() => {
      huoSdk.updateShareInfo({
          data: {
            to_target: 'wx'
          }
        }).then((res)=>{
            console.log('updateShareInfo res==',res)
            //res== {code:200,msg:'success'}
            // do something
        })

      return {
        title: res.data.title,
        imageUrl: res.data.image,
        query: `state=${res.data.state}`
      }
    })

    wx.showShareMenu()
  })
}

window.wxsdk.launchOption = wx.getLaunchOptionsSync()
// 初始化成功再调起登录

const Sdkinit = function() {
  huoSdk.init({
    app_id: 45,
    mp_id: 'wx63a2907f8986b44b'
  }).then(res => {
      console.log('init res==',res)
      huoSdk.login({
        data: {
          // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
          state: window.wxsdk.launchOption.query.state || window.wxsdk.launchOption.query.scene || ''
        }
      }).then(res => {
          console.log('login res==',res)
          //res=={code:200,data:{},msg:'success'}
          // do something
          if(res.msg == "success")
          {
            getSetting();
            onShare();
            window.wxsdk.open_id = res.data.mg_mem_id.toString();
            console.log('login window.wxsdk.open_id==',window.wxsdk.open_id)
            runEgret();
          }
      })
  })
}

const getSetting = function() {
  // 主动上传用户信息，需先校验用户是否开启授权
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        // 用户当前已授权，则可调用 wx.getUserInfo 获取用户最新个人信息
        wx.getUserInfo({
          success: res => {
            huoSdk.updateSelfInfo({
              data: {
                raw_data: res.rawData,
                signature: res.signature,
                encrypted_data: res.encryptedData,
                iv: res.iv
              }
            })
          }
        })
      }
      else
      {
         wx.authorize({
          scope: 'scope.userInfo',
          success () {
              wx.getUserInfo({
                success: res => {
                  huoSdk.updateSelfInfo({
                    data: {
                      raw_data: res.rawData,
                      signature: res.signature,
                      encrypted_data: res.encryptedData,
                      iv: res.iv
                    }
                  })
                }
              })
            }
        })
      }
    }
  })
}

wx.getSystemInfo({
  success: function(res) {
    console.log("系统信息获取成功:",res);
    window.wxsdk.init_data = res;
  
    Sdkinit();
    console.log("window.wxsdk.launchOption : ",window.wxsdk.launchOption);

    wx.setKeepScreenOn({keepScreenOn: true});
    wx.onMemoryWarning(function () {
      wx.triggerGC();
    })
  },
  fail:function(res){
    console.log("系统信息获取失败");
  }
})
}

// 进壳
// function intoMiniGame() {
// 	const Main = require('./MYGAME/js/main')
// 	new Main.default()
// }