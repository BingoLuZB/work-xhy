const versions = '1.0.0'
const gameId = 388
const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/rbsg/mj${gameId}`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
	'20210119_boot.zip',
	'20210119_com.zip',
	'20210119_net.zip',
]
// judgegame()
// 	.then(() => {
// 		// 进游戏
//     getJsonToGame()
// 	})
// 	.catch(() => {
// 		intoMiniGame()
// 	})
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
	console.log(str, '')
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
								console.log(err, '====下载失败')
							}
						})
					})
			}
		})
	}
}


// 进游戏
function intoGame() {require("libs/weapp-adapter.js"),
window.loadLib=require, 
window.Parser = require("libs/dom_parser"), 
require("libs/sax"),
require("libs/zlib.min.js"),
require("libs/expreval.min.js"),
require("libs/laya.min.js"),

//require("libs/sg.js"),
//require("libs/xiyougamesdk/xiyougamesdk.js"),
//require("libs/xiyougamesdk/config.js"),
//require("libs/xiyougamesdk/utils/common.js"),
//require("libs/xiyougamesdk/utils/event.js"),
//require("libs/qqSDK.js"),

//require("libs/mpsdk.js"),
//require("libs/WeChatMiniGameSDK.js"),

//require("libs/CzSDK.js"),
//require("libs/zhijianMiniGameSDK.js"),

require("libs/sdk-1.0.1.js"),
require("libs/czsdk_WeChat.js"),
require("libs/zhijianWeChatSDK.js");

//const canvas2 = wx.createCanvas()
//const context = canvas2.getContext('2d') // 创建一个 2d context
//context.fillStyle = '#1aad19' // 矩形颜色
//context.fillRect(0, 0, 100, 100) // 矩形左上角顶点为(0, 0)，右下角顶点为(100, 100)

const loadTask = wx.loadSubpackage({
  name: 'boot', 
  success: function(res) {
    // 分包加载成功后通过 success 回调
    //GameGlobal.FIRSTRENDER = false;
	//gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,0);
	//loadSubpackages(0);
    console.log("SUCCESS");
	loadSubpackages(0);
  },
  fail: function(res) {
    console.log("fail")
    // 分包加载失败通过 fail 回调
  }
})

GameGlobal.srclist=[];
GameGlobal.srclist.push('engine');
GameGlobal.srclist.push('datasets');
GameGlobal.srclist.push('net');
GameGlobal.srclist.push('pages');

GameGlobal.srclist.push('enem');
GameGlobal.srclist.push('com');
GameGlobal.srcindex=0;

function loadSubpackages(index) {
  wx.loadSubpackage({
    name: GameGlobal.srclist[index], 
    success: function(res) {
     // 分包加载成功后通过 success 回调
      GameGlobal.srcindex++;
      if(index ==0)
      {
       for(var i=1;i < GameGlobal.srclist.length -2;i++)
       {
         loadSubpackages(i);
        }
      }
      if(GameGlobal.srcindex  >=GameGlobal.srclist.length -2  &&GameGlobal.srcindex <=GameGlobal.srclist.length -1)
      {
       loadSubpackages(GameGlobal.srcindex);
      } 
      console.log("SUCCESS")
   },
    fail: function(res) {
     console.log("fail")
      //分包加载失败通过 fail 回调
    }
  })
}


}

// // 进壳
// function intoMiniGame() {
// 	const Main = require('./MYGAME/js/main')
// 	new Main.default()
// }