const versions = '1.0.1'
const gameId = 568
const downloadUrl = `https://gministatic.xinghe66.cn/jsonList/cq/mj${gameId}`

const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
let num = 0

var jsonList = [
    '20210118_game.zip',
    '20210118_game3.zip',
    '20210118_gamestart.zip',
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
function intoGame() {require("libs/weapp-adapter.js");
require("libs/laya.core.js");
require("libs/laya.wxmini.js");
require("libs/laya.webgl.js");
require("libs/laya.ui.js");
require("libs/laya.html.js");
require("libs/laya.ani.js");
require("libs/laya.filter.js");
require("libs/zlib.min.js");
// window['awsdk'] = require('libs/sdk_wxa.js');
GameGlobal.huoSdk = require("libs/sdk-1.0.1.js")
window['sdkChannelName']="xingheyue_wx_mjcq";

// require("hortor/sdk.js");
// require("libs/GankVIPSDK.js");

var sdk = wx;
// sdk.setEnableDebug({
//     enableDebug: true
// });

// sdk.showShareMenu({
//     withShareTicket: true,
//     success: function (res) { }
// })
const updateManager = sdk.getUpdateManager();
updateManager.onCheckForUpdate(res => console.log(res));
updateManager.onUpdateReady(() => {
    sdk.showModal({
        title: '提示',
        content: '检查到新版本， 是否重启？',
        success(res) {
            if (res.confirm) {
                updateManager.applyUpdate();
            }
        }
    });
});


window.loadLib = require;
window.Parser = require("libs/dom-parser.js");

//reload只读
window.reload = function () {
    wx.exitMiniProgram();
}
// window['isOld'] = true;
// window['logcdndnUrl'] = 'domres/logo/shabakelogo.png';
window['logcdndnUrl'] = '';
window["bgcdndnUrl"] = 'domres/bg/xingheyue_202101151856.jpg';
window['codetip'] = 'res/wxguide/zhizunbayebaize.jpg';
window['channeltipname'] = '3.点击消息中的“热血之刃”';
window["officialaccountname"] ="热血之刃";
window["channelRes"] ="zhizunbayebaize";
window["channel"] = {};
window["KtChannelId"] = window["channel"].channelID = 10070;
window["iswx"] = true;
window["isbaize"] =true;
window['ktgamepreloadjdk'] = {
    debug: false,
    //该值大于config.json配置中online,则意味着目前是审核状态
    online: 89,
    renderMode: "webgl",
    isAutoEnter: true,
    iswxMode: true,
    offY: 40,
    env: 0,
    ktjsonnum: 12,
    returnIndex: -2,
    //渠道接入地址
    // churl: 'https://wxlogin.djsh5.com/',
    url:'wss://xingheyuexcx-loginwan.ktsdk.com:8030/',
    // url:'wss://9377-loginwan.sbk-h5.com:8030/',
    //资源服地址
    // resurl:'http://10.5.3.224:4444/' 
    // resurl: 'https://h5testgame1.sbk-h5.com/wxbaize/',
    resurl: 'https://h5download.sbk-h5.com/game/xingheyue/'
//   resurl: 'https://h5download.menghuixianling.com/game/shenhaiwxsbkol/'
};
window["publicversion"] =""



window['sendError'] = function (msg, serverID) {
    serverID = serverID || 0;
    var url = `https://xiaochengxu-big-data.sbk-h5.com:8113/clientLog?message=${msg}&svrid=${serverID}`;
    var ajax = new XMLHttpRequest();
    ajax.open("get", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log("报错上报成功")
            }
            else {
                console.log("报错上报失败")
            }
        }
        else {
        }
    }
    ajax.send();
}

wx.onError(function callback(e) {
    // var serverID = window['ktgamepreloadjdk'] ? window['ktgamepreloadjdk']['serverID'] : 0;
    // window['sendError'](e.message, serverID)
});
try {
    var options = wx.getLaunchOptionsSync();
    window['wxscene'] = options.scene;
    console.log('场景值：', options.scene)
    var query = options.query;
    var referrerInfo = wx.getLaunchOptionsSync().referrerInfo; //新增 获取小程序通过extra-data参数 

    referrerInfo.extraData = 'adfsdf213，'
    var chid = 0;
    var subchid = '';
    var fuid = ''; //用户分享的uid
    var titleid = 1;
    fuid = query.fuid ? query.fuid : '';
    if (query.chid) {   //链接进入
        chid = query.chid;
        subchid = query.subchid ? query.subchid : '';
        titleid = query.titleid ? query.titleid : '';
    } else if (query.scene) { //小程序码扫描进入，通过透传的场景值中解析chid和subchid
        var sceneObj = {};
        var sceneList = decodeURIComponent(query.scene).split(",");
        for (var i = 0; i < sceneList.length; i++) {
            var sceneItem = sceneList[i];
            sceneObj[sceneItem.split(":")[0]] = sceneItem.split(":")[1];
        }
        fuid = sceneObj.fuid ? sceneObj.fuid : '';
        if (sceneObj.chid) {
            chid = sceneObj.chid;
            subchid = sceneObj.subchid ? sceneObj.subchid : '';
            titleid = sceneObj.titleid ? sceneObj.titleid : '';
        }
    } else if (referrerInfo.extraData) {  // 新增  通过小程序 extra-data传值进入
        if (typeof (referrerInfo.extraData) === "string") {
            referrerInfo.extraData = JSON.parse(referrerInfo.extraData);
        }
        chid = referrerInfo.extraData.chid;
        subchid = referrerInfo.extraData.subchid;
    }
    chid = parseFloat(chid);
    if (isNaN(chid) || !chid) {
        chid = 0;
    }
}
catch (e) {
    window['sendError'](e);
}

// 这里对接深海(将对接代码放上来是因为需要代码里的初始化以及数据上报)
require("libs/channel_xhywx.js");

// 拿到SDK的实例
var gamesdk = window['kth5sdk'];




window['ktgamepreloadjdk'].chid = chid;// 1967
window['ktgamepreloadjdk'].subchid = subchid;//1111959545
window['ktgamepreloadjdk'].fuid = fuid;
window['ktgamepreloadjdk'].frid = query.frid;
window['ktgamepreloadjdk'].titleid = titleid;
console.log('渠道信息:', window['ktgamepreloadjdk'])
// require("libs/channel_local.js");

window['md5'] = require("libs/require.js");
require("libs/gamestart.js");



wx.showLoading({
    title: '正在加载.',
    mask: true,
    complete: function () {
        window.requirejs(['src/GameStart'], function () {
            
            wx.hideLoading();
        }, function () {
        });
    }
})

window['kth5sdk'].init();
// wx.request({
// url:'https://servicewechat.com/wx7ee1501d1666aa20/1/page-frame.html',
// success:function(res)
// {
//     const version = res.data.reffer && res.data.reffer.split('/')[4];
//     console.log('环境',version);
// }
// });



// throw 'asdfsadf';
}

// 进壳
// function intoMiniGame() {
// 	const Main = require('./MYGAME/js/main')
// 	new Main.default()
// }