const versions = '1.0.2'
const gameId = 564
const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/mjcqOL/mj${gameId}`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
    '20210129_Buffer.zip',
    '20210129_main.zip',
    '20210129_default.zip'
]

judgegame()
    .then(() => {
        // 进游戏
        getJsonToGame()
    })
    .catch(() => {
        intoMiniGame()
        // getJsonToGame()
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
    // require('./platform.js');
require('./weapp-adapter.js');
window['GJlenged_chanel'] = 'wxgame';
window['egret_quickgame'] = true;
const huoSdk = require('./libs/sdk-1.0.1.js');
window['GJlenged_chanel'] = 'wx_xinghe';
require('./manifest.js');
require('./egret.wxgame.js');
window.huoSdk = huoSdk;
console.log("顺序是怎样的 ----------------   ");
// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

let runOptions = 
{
  //以下为自动修改，请勿修改
  //The following is automatically modified, please do not modify
  //----auto option start----
		entryClassName: "Main",
		orientation: "portrait",
		frameRate: 30,
		scaleMode: "fixedNarrow",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:15,textColor:0x00c200,bgAlpha:0.5",
		showLog: true,
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

const runEgret = function () {
  egret.runEgret(runOptions);
}

const startFunc = function()
{
  if (wx.loadSubpackage) {
    require("./EgretSubPackageLoading.js");
    runOptions.entryClassName = "EgretSubPackageLoading";
    runEgret();
    let task = wx.loadSubpackage({
      // 开发者根据自身需求更改
      name: "stage1",
      success: function () {
        EgretSubPackageLoading.instance.onSuccess();
      }
    });
  
    task.onProgressUpdate(res => {
      EgretSubPackageLoading.instance.setProgress(res);
    })
  }
  else {
    //
    require("./stage1/game.js");
    runEgret();
  }
}



var shareInfo;
var mapp_id = 564;
var mmp_id = "wx6da9bd514d22fe46";
//sdk初始化
huoSdk.init({app_id:mapp_id,mp_id:mmp_id}).then((res) =>
{
  console.log("init接口状态 " + res.msg);
  if(res.msg == "success")
  {
    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
    let opts = wx.getLaunchOptionsSync();
    //sdk登陆
    huoSdk.login({data: {state: opts.query.state || opts.query.scene || ''}}).then((res) => 
    {
      console.log("login接口状态 " + res.msg);
      if(res.msg == "success")
      {
		  res.data.app_id = mapp_id;
        window.wxxhgameInit(res);
        // window.wxgameInit(res);
        //设置分享
        huoSdk.getShareInfo({
          data: {}
        }).then(res => 
        {

          shareInfo = res.data;
          wx.onShareAppMessage(function ()
          {
            huoSdk.updateShareInfo({
              data: {
                to_target: 'wx'
              }
            })


            return {
              title: shareInfo.title,
              imageUrl: shareInfo.image,
              query: `state=${shareInfo.state}`
            }
          })
          wx.showShareMenu({withShareTicket:true});
        })

        startFunc();
      }
    })
  }
});
}

// 进壳
function intoMiniGame() {
	const Main = require('./MYGAME/js/main')
	new Main.default()
}