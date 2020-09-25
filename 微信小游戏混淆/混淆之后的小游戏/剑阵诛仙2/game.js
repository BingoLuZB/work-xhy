const versions = '1.0.0'
const gameId = 14
const downloadUrl = `https://gministatic.xinghe66.cn/jzzx/jzzx2`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
	'20200924_platform',
	'20200924_assetsmanager',
	'20200924_default',
	'20200924_entry',
	'20200924_particle',
	'20200924_socket',
	'20200924_tween',
	'20200924_main.zip',
]

judgegame()
// intoGame()
// 判断进壳还是进游戏
function judgegame() {
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
				intoMiniGame()
			} else {
				getJsonToGame()
			}
		},
		fail() {
			intoMiniGame()
		}
	})
}


function getJsonToGame() {
	// 复制json给全局
	function hasJsonToGame(str, res) {
		GameGlobal[str] = JSON.parse(res.data)
		let l = jsonList.length - 1
		if (num == l) {
			// debugger
			intoGame()
		}
		num++
	}

	// 读取json文件
	function readJson(filePath, str) {
		fs.readFile({
			filePath: filePath,
			encoding: 'utf-8',
			success(res) {
				if (res.data) {
					hasJsonToGame(str, res)
				}
			},
			fail(err) {
				console.log(err, '读取失败')
			}
		})
	}

	for (let i = 0; i < jsonList.length; i++) {
		let date = jsonList[i].split('_')[0]
		let str = jsonList[i].split('_')[1]
		let end = str.includes('.zip') ? '' : '.json'
		const path = rootPath + `/${date}/${str}${end}`
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
				fs.readFile({
					filePath: path,
					encoding: 'utf-8',
					success(res) {
						// 有缓存，直接读取
						console.log('有缓存')
						if (end) {
							// 如果是json文件，直接赋值给全局
							hasJsonToGame(str, res)
						} else {
							// 如果是zip文件，直接读取已经解压了的文件
							str = str.split('.')[0]
							readJson(`${rootPath}/${str}.json`, str)
						}
					},
					fail(err) {
						// 没缓存，下载
						console.log('没有缓存')
						wx.downloadFile({
							url: `${downloadUrl}/${date}/${str}${end}`,
							filePath: path,
							success(res) {
								// 如果是json的文件
								if (end) {
									readJson(path, str)
								} else {
									// 如果是zip的压缩文件
									fs.unzip({
										zipFilePath: res.filePath || res.tempFilePath,
										targetPath: rootPath,
										success(res) {
											// console.log(res, '解压成功')
											str = str.split('.')[0]
											readJson(`${rootPath}/${str}.json`, str)
										},
										fail(err) {
											console.log(err, '==解压失败')
										}
									})
								}
							},
							fail(err) {
								console.log(err, '====下载失败')
							}
						})
					}
				})
			}
		})
	}
}



// 进游戏
function intoGame() {
	const {
		userfileMgr
	} = require('./library/userfilemgr.js');
	require('./weapp-adapter.js');
	require('./senjin_wx_xxtx_littleGame.js');
	require('./platform.js');
	require('./manifest.js');
	require('./egret.wxgame.js');

	if (typeof wx.getUpdateManager === "function") {
		const updateManager = wx.getUpdateManager()

		updateManager.onCheckForUpdate(function (res) {
			// 请求完新版本信息的回调
			console.log(`-------`, res)
		})

		updateManager.onUpdateReady(function () {
			// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			console.log(`下载完成--更新版本`)
			updateManager.applyUpdate();
		})

		updateManager.onUpdateFailed(function () {
			// 新版本下载失败
			console.log(`更新版本网络异常`)
		})
	}

	// 启动wx小游戏本地缓存，如果开发者不需要此功能，只需注释即可
	// 只有使用 assetsmanager 的项目可以使用
	if (window.RES && RES.processor) {
		require('./library/image.js');
		require('./library/text.js');
		require('./library/sound.js');
		require('./library/binary.js');
	}

	window.alert = console.error;
	window.verData = {};
	//内网
	// window.urlParam = {
	// 	apptype: '3',
	// 	appid: "",
	// 	root: 'http://192.168.0.160/z1/',
	// 	isLocation: true,//是否内网测试
	// };
	//外网
	window.urlParam = {
		apptype: '3',
		root: 'https://z1c.h5eco.com/1/z1client/',
		apiRoot: 'https://z1api.h5eco.com/',
		reportRoot: `https://z1back.h5eco.com/`,
		ev: 80,
	};

	window.getUrl = (url) => {
		if (~url.indexOf('ver.json')) return urlParam.root + urlParam.gv + '/ver.json';
		let v = urlParam.gv || urlParam.ev;
		return urlParam.root + (v ? (verData[url] || 0) + '/' : '') + url;
	};

	wx.request({
		url: urlParam.root + urlParam.ev + '/ev.json',
		success: res => window.verData = res.data,
		complete: () => {
			// userfileMgr.clear1DayRes();
			egret.runEgret({
				//以下为自动修改，请勿修改
				//The following is automatically modified, please do not modify
				//----auto option start----
				entryClassName: "Main",
				orientation: "auto",
				frameRate: 60,
				scaleMode: "fixedNarrow",
				contentWidth: 720,
				contentHeight: 1280,
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
			});
		}
	});

}

// 进壳
function intoMiniGame() {
	const Main = require('./tree/js/main')
	new Main.default()
}