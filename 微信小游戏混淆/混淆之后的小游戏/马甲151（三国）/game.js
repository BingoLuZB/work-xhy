const versions = '1.0.0'
const gameId = 151
const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/sg/mj${gameId}`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
	'20201120_customlib.zip',
	'20201120_main.zip',
]

// (async () => {
// 	try {
// 		await judgegame()
// 		intoMiniGame()
// 	} catch (error) {
// 		getJsonToGame()
// 	}
// })()

judgegame()
	.then(() => {
		// 进游戏
    getJsonToGame()
	})
	.catch(() => {
    intoMiniGame()
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
								console.log(err, '====下载失败')
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
require('./manifest.js');
require('./egret.wxgame.js');
const fileutil = require('./library/file-util');

const stage=null;
let runOptions = {
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5",
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

const runEgret = function () {
	
	egret.runEgret(runOptions);
}
if (wx.loadSubpackage) {
  require("./loading.js");
  runOptions.entryClassName = "loading";
  runEgret();
	var task = wx.loadSubpackage({
		name: "package1",
		success: function (res) {
      loading.instance.setProgress("正在加载主程序...",Math.floor(100));
			loading.instance.onSuccess(); 		
		}
	});

	task.onProgressUpdate(res => {
		loading.instance.setProgress("正在加载主程序...",Math.floor(res.progress));
	})
}
else {
  require("./package1/game.js");
  runEgret();
}

const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // console.log(res.hasUpdate)
  if(res.hasUpdate)
  {
	wx.showModal({
		title: '更新提示',
		content: '该小游戏有新版本,正在为您下载新版本请稍后!',
		showCancel:false,
		success: function (res) {
			
		}
	})
  }
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，点击确定重启应用!',
	showCancel:false,
    success: function (res) {
      if (res.confirm) {
        fileutil.fs.remove(wx.env.USER_DATA_PATH + "/");
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
  wx.showModal({
    title: '更新提示',
    content: '新版本下载失败,请检查网络!',
	showCancel:false,
    success: function (res) {
      if (res.confirm) {
        wx.exitMiniProgram();
      }
    }
  })
})

}

// 进壳
function intoMiniGame() {
	const Main = require('./MYGAME/js/main')
	new Main.default()
}