256 jshaman的game.js
257 工具的game.js



let isShare = false;
const versions = '1.0.0'
const gameId = 257

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
                if (res.data.code == 200 && res.data.data.status == 2 || isShare) {
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
    require('libs/weapp-adapter/index');
    var Parser = require('libs/xmldom/dom-parser');
    window.DOMParser = Parser.DOMParser;
    require('libs/wx-downloader.js');
    require('src/settings.658d4');
    var settings = window._CCSettings;
    require('main.85543');

    // Will be replaced with cocos2d-js path in editor
    require('cocos/cocos2d-js-min.js');

    require('./libs/engine/index.js');

    // Adjust devicePixelRatio
    cc.view._maxPixelRatio = 3;

    wxDownloader.REMOTE_SERVER_ROOT = "";
    wxDownloader.SUBCONTEXT_ROOT = "";
    var pipeBeforeDownloader = cc.loader.subPackPipe || cc.loader.md5Pipe || cc.loader.assetLoader;
    cc.loader.insertPipeAfter(pipeBeforeDownloader, wxDownloader);

    if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
        var _WECHAT_SUBDOMAIN_DATA = require('src/subdomain.json.js');
        cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
            cc.Pipeline.Downloader.PackDownloader._doPreload("WECHAT_SUBDOMAIN", _WECHAT_SUBDOMAIN_DATA);
        });

        require('./libs/sub-context-adapter');
    } else {
        // Release Image objects after uploaded gl texture
        cc.macro.CLEANUP_IMAGE_CACHE = true;
    }
    wxDownloader.init();
    window.boot();

}

// 进游戏
function intoNav() {
    require('./toFormalGame/index.js')
}