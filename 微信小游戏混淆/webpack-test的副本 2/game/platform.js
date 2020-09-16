import BHSDK from './bhSdk'
var bhSdk = new BHSDK();

var originalLog = console.log;
var needDebugInfo = true
console.log = function(...msg){
    needDebugInfo && originalLog(msg)
}

const UID_SO = "_US201901141248"

window.showLoadProgress = function(){};
window.nodeRecord = function(){};
window.showGame = function(){};
window.urlKV = {};
window.getUrlKV = function(){ return window.urlKV };

wx.onShow((res)=>{
    console.log("onShow", res)
    // 强行分享成功
    window.xyxPlatform._shareCB && window.xyxPlatform._shareCB(0)
    window.xyxPlatform._shareCB = false
    if (res.scene == 1089){
        window.getUrlKV()["Act_ShouCangYouLi"] = 1
    }
})

// wx.showShareMenu()
// wx.onShareAppMessage(() => ({
//   imageUrl: "https://ali.binghu.fmggames.cn/binghu_web/common/share_e4cc130a.jpg"
// }))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

class XyxPlatform {
    _init = false
    _mid = 10000
    _pid = 158
    _gid = '100154'
    reg = /[^\u4e00-\u9fa5a-zA-Z0-9]/gi
    _shareTitle = [
        "养成零负担，随时随地打一场",
        "懒人放置，做梦都在拿收益",
        "迷雾探寻，无限放置挑战魔界地牢",
        "十星英雄五星狗粮，不朽战魂策略放置",
        "自由探索，异界大陆随心走"
    ]
    _shareImg = ""
    _shareCB = false
    _lastLoginTM = 0            //上一次发起登录请求的时间戳（防止玩家快速多次点击登录）
    _inLoginWorking = false
    _osCode = 5


    init(cb) {
        console.log("XyxPlatform init")
        let launchParams =  wx.getLaunchOptionsSync()
        console.log("launchParams", launchParams.query)
        if (launchParams && launchParams.query){
            this._mid = launchParams.query['mid'] || this._mid

            // 获取邀请参数
            window.urlKV['recommendId'] = launchParams.query['recommendId']
            window.urlKV['recommendPlatform'] = launchParams.query['recommendPlatform']
        }

        wx.getSystemInfo({
            success:(ret)=>{
                if(ret.system.indexOf("iOS") >= 0){
                    this._gid = '100154'
                    this._osCode = 4
                } else{
                    // chl 一律按安卓处理
                    this._gid = '100154'
                    this._osCode = 5
                }

                bhSdk.init({
                  pid: this._pid, // 找我方运营要，默认为this._pid
                  gid: this._gid, // 找我方运营要
                  mid: this._mid
                }, (ret) => {
                    console.log("初始化成功", ret)
                    this._init = true
                    // this._shareTitle = ret.share_title
                    this._shareImg = ret.share_img

                    window.urlKV['login_ext'] = {
                        pid: this._pid,
                        gid: this._gid,
                        mid: this._mid,
                    }
                })

                window.urlKV['userAgentSDK'] = {
                    model:ret.model,
                    platform:ret.platform,
                    screenHeight:ret.screenHeight,
                    screenWidth:ret.screenWidth,
                    statusBarHeight:ret.statusBarHeight,
                    system:ret.system,
                    version:ret.version
                }

                if (wx.getMenuButtonBoundingClientRect) {
                    setTimeout(()=>{
                        let info = wx.getMenuButtonBoundingClientRect()
                        console.log("getMenuButtonBoundingClientRect", info)
                        window.urlKV['statusBarHeight'] = (info.height + info.top) * egret.MainContext.instance.stage.stageHeight / ret.screenHeight
                    }, 1000)
                } else {
                    console.log("当前微信版本过低，无法适配刘海屏")
                    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                    // wx.showToast({
                    //     title: '',
                    // })
                }
            }
        })
    }

    nodeRecord(node_id) {
        console.log("XyxPlatform nodeRecord", node_id)
        // chl 通过埋点来标记进入到挂机主界面，停止缓存)
        if(node_id == 999999999){
            window.fs_inCacheStage = false
        }

        if (!window.urlKV['game_uin']) return;

        wx.request({
            url: "https://wx.binghu.fmggames.cn/sy_api/game_api.php",
            method: "GET",
            data: {
                action: 'record_login_info',
                platform: window.urlKV['platform'],
                sub_platform: '',
                username: window.urlKV['game_uin'],
                node: node_id,
                os_code: window.urlKV['os_code'],
                user_agent: navigator.userAgent,
                browser_id: -1
            },
            complete:  function(res) {
                console.log(res.data)
              }
        })
    }

    onLoginPHPSuccess(){
        if(this._wxLoginBtn){
            this._wxLoginBtn.hide()
            this._wxLoginBtn = undefined
        }
    }

    showLoadingTips(params, cb){
        wx.showLoading({
            title: params.msg,
            mask: true,
            complete: ()=>{
                cb && cb()
            }
        })
    }

    dismissLoading(){
        wx.hideLoading()
        if(EgretSubPackageLoading.instance){
            EgretSubPackageLoading.instance.onDestory()
        }
    }

    restart(){
        wx.exitMiniProgram({
            success:function(res){
            }
        })
    }

    login(cb) {
        if(this._inLoginWorking) return
        if(Date.now() - this._lastLoginTM < 1000){
            console.log("XyxPlatform login 防止多次点击")
            return
        }
        console.log("XyxPlatform login")
        this._lastLoginTM = Date.now()
        this._inLoginWorking = true
        bhSdk.login((res) => {
            console.log("登录成功", res);
            window.urlKV['token'] = res.data.accessToken
            // window.urlKV['game_uin'] = res.data.uid + UID_SO
            window.urlKV['login_ext']['isCheckingRecharge'] = !res.data.device

            // debug 上指定账户
            // window.urlKV['game_uin'] = "oZfml5PD6Fs6SovtFQc3V0HHWe6g_US201901141248"     //chl
            // window.urlKV['game_uin'] = "oZfml5PT9a4rj66hpWqv54lsS6Pw_US201901141248"     //靖友4服号
            // window.urlKV['game_uin'] = "oZfml5ItNhwHczHF_7qkzt83fvFI_US201901141248"     //雨辰3服号
            // window.urlKV['game_uin'] = "oZfml5OBVH025eeZoDLy0k2uvUwg_US201901141248"     //丛爷1服号
            // window.urlKV['game_uin'] = "oZfml5Dxu_qWsKeyozzACEVnjsH4_US201901141248"     //洪洪23服


            if(res.data.device){
                console.log("显示支付");
            }else{
                console.log("隐藏支付");
            }

            bhSdk.setShare()

            // if(this._osCode == 4){
            //     // iOS才出互通绑定
            //     wx.getSetting({
            //         success: (res) => {
            //             if (res.authSetting['scope.userInfo']) {
            //                 // 不需要按钮 
            //                 wx.getUserInfo({
            //                   success: (res) => {
            //                     bhSdk.bindAccount({
            //                         access_token: window.urlKV['token'],
            //                         encryptedData: res.encryptedData,
            //                         iv: res.iv
            //                     }, res => {
            //                         console.log("绑定结果", res)
            //                         this._inLoginWorking = false
            //                         if (cb) cb()
            //                     })
            //                   },
            //                   fail: (res) => {

            //                   }
            //                 })
            //             } else {
            //                 // 需要按钮
            //                 const width = 338/2
            //                 const height = 112/2
            //                 this._wxLoginBtn = bhSdk.createUserInfoBtn({
            //                     type: 'image',
            //                     image: "https://ali.binghu.fmggames.cn/binghu_web/common/sqdl_bd8c1d3d_v0423.png",
            //                     style: {
            //                         left: egret.Capabilities["boundingClientWidth"]/2 - width/2,
            //                         top: egret.Capabilities["boundingClientHeight"]-height-120,
            //                         width: width,
            //                         height: height,
            //                     }
            //                 })

            //                 this._wxLoginBtn.onTap((res) => {
            //                     console.log("授权按钮点击", res)
            //                     bhSdk.bindAccount({
            //                         access_token: window.urlKV['token'],
            //                         encryptedData: res.encryptedData,
            //                         iv: res.iv
            //                     }, res => {
            //                         console.log("绑定结果", res)
            //                         this._inLoginWorking = false
            //                         if (cb) cb()
            //                     })
            //                 })
            //             }
            //         }
            //     })
            // } else {
                console.log("安卓用户不需要绑定")
                this._inLoginWorking = false
                if (cb) cb()
            // }
        })
    }

    share(params, cb) {
        if(!this._init){
            if(cb){
                cb({
                    msg : 'shareSdk not init'
                })
            }
            return
        }

        if(!params) return

        this._shareCB = cb

        // key1=val1&key2=val2 模样
        var query = "mid=" + this._mid
        if (params.recommendId) {
            query += ("&recommendId=" + params.recommendId)
            query += ("&recommendPlatform=" + params.recommendPlatform)
        }

        var shareC = {
            shareTitle : this._shareTitle[getRandomInt(0, this._shareTitle.length - 1)],
            shareImg : this._shareImg,
            query : query
        }

        bhSdk.setShare(shareC, (res) => {
            console.login("share", res)
            // this._shareCB && this._shareCB(res)
            // this._shareCB = false
        });
        bhSdk.goShare(shareC)
    }

    goPurchase(params, cb) {
        console.log("XyxPlatform goPurchase", params)
        bhSdk.pay(window.urlKV['bh_pay_params'])
    }

    gameReport(params) {
        console.log("XyxPlatform gameReport", params.type)

        var type = params.type;
        var data = params.data;
        var baseData = {
            role_id: data && data.roleId,
            role_name: data && data.playerName, //游戏中角色的昵称，没有昵称的可以传空字符串
            role_level: data && data.level,
            role_createtime: data && data.roleCreateDt,
            server_id: data && data.serverId,  //游戏区标志
            server_name: data && data.serverName,

            role_vip: data && data.vipLevel,
            role_partyname: data && data.guildName,
            role_balance: data && data.money,
            role_fightvalue: data && data.fightCap,

            access_token: window.urlKV['token']
        }

        if(!baseData.role_id) return
        switch (type) {
            case "SelectServer":
                baseData.info_type = "serverSeclet"
                break
            case "CreateRole":
                baseData.info_type = "roleCreate"
                break
            case "EnterMain":
                // 进入游戏
                baseData.info_type = "enterGame"

                // 同时上报选服
                setTimeout(()=>{
                    params.type = "SelectServer"
                    this.gameReport(params)
                }, 500)
                break
            case "PlayerLevelUp":
                // 等级提升
                baseData.info_type = "roleUplevel"
                baseData.role_leveltime = data && data.time
                break
            case "PlayerRename":
                // 改名
                baseData.role_oldname = data && data.params.oldName
                baseData.info_type = "changeName"
                break
        }
        
        if(baseData.info_type){
            bhSdk.submitRoleInfo(baseData, (res) => {
                 console.log("上报结果", res)
            });
        }
    }

    cmd(params, cb) {
        if(!params.type) return cb && cb()

        switch(params.type){
            case "setDebugModel":{
                // 通过Utils.agentConfig.IsDebug启动log输出
                needDebugInfo = params.value
                if(wx.setEnableDebug && needDebugInfo)
                    wx.setEnableDebug({
                        enableDebug : true
                    })
                break;
            };
            case "SetOrderBySDK":{
                window.urlKV['bh_pay_params'] = params.params
                break
            };
            case "PopKeFu":{    
                bhSdk.gotoService({})
                break
            }
            case "GetOrderBySDK":{
                params.params.action = "get_wechatThr_order"
                params.params.ext = JSON.stringify({
                    pid: window.urlKV['login_ext'].pid,
                    gid: window.urlKV['login_ext'].gid,
                    mid: window.urlKV['login_ext'].mid,
                    token: window.urlKV['token']
                })
                // // debug
                // params.params.money = 1
                break
            };
            case "DeliverData":{
                this.gameReport(params.params)
                break
            }
            case "GetOpenData":{
                this.getOpenData(params, cb)
                break
            }
            case "HideUserBtn":{    
                if(this._wxLoginBtn){
                    this._wxLoginBtn.hide()
                    this._wxLoginBtn = undefined
                }
                break
            }
            case "AuthSetting":{    
                wx.getSetting({
                      success: (res) => {
                        cb && cb(res.authSetting[params.scope])
                    }
                })
                break
            }
            case "CheckTextVaild":{
                wx.request({
                    url: "https://partner.icefoxgame.com/api/v1/partner/chat/index",
                    data: {
                        pid: this._pid,
                        gid: this._gid,
                        tm: Date.now(),
                        partner_data: JSON.stringify({
                            content : params.text
                        })
                    },
                    header: {},
                    method: 'post',
                    success: function success(res) {
                        console.log(res);
                        if(res && res.data && res.data.data && res.data.data.pass && res.data.data.pass == true){
                            cb && cb({vaild:true})                                   
                        } else {
                            cb && cb({vaild:false})
                        }
                    },
                    fail: function fail(err) {
                        console.log(err);
                        cb && cb({vaild:true})
                    }
                })
                break;
            }
        }
    }

    setClipboardData(str, cb) {
        wx.setClipboardData({
            data: str,
            success: function(res) {
                cb && cb()
            }
        })
    }

    getOpenData(params, cb) {
        if(!params) return cb && cb()
        let thiz = this
        wx.getSetting({
          success: (res) => {
            if (!res.authSetting['scope.userInfo']) {
              // 需要按钮
                const width = 338/2
                const height = 112/2
                thiz._wxLoginBtn = bhSdk.createUserInfoBtn({
                    type: 'image',
                    image: "https://ali.binghu.fmggames.cn/binghu_web/common/sqdl_bd8c1d3d_v0423.png",
                    style: {
                        left: egret.Capabilities["boundingClientWidth"]/2,
                        top: egret.Capabilities["boundingClientHeight"]/2,
                        width: width,
                        height: height,
                    }
                })

                thiz._wxLoginBtn.onTap((res) => {
                    console.log("授权按钮点击", res)
                    if(thiz._wxLoginBtn){
                        thiz._wxLoginBtn.hide()
                        thiz._wxLoginBtn = undefined
                    }

                    cb && cb(res.userInfo)
                })
            } else {
                // 不需要按钮，直接getUserInfo
                wx.getUserInfo({
                  success: (res) => {
                    cb && cb(res.userInfo)
                  },
                  fail: (res) => {

                  }
                })
            }
          }
        })
    }
}

window.xyxPlatform = new XyxPlatform();

// 保持屏幕常亮
wx.setKeepScreenOn({
    keepScreenOn: true
})

// 更新控制
if (typeof wx.getUpdateManager === 'function') {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log("onCheckForUpdate", res)
        // wx.hideToast()
        // wx.showToast({
        //   title: '发现新版本，后台自动下载中',
        //   duration: 2000,
        //   icon: 'none',
        // })
    })

    updateManager.onUpdateReady(function () {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        wx.hideToast()
        wx.showToast({
          title: '已下载新版本，5秒后自动关闭游戏并更新，请重新打开游戏',
          duration: 5000,
          icon: 'none',
          success:() => {
            updateManager.applyUpdate()
          }
        })
    })

    updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
    })
}

if (wx.onMemoryWarning){
    wx.onMemoryWarning(function (level) {
      console.warn('onMemoryWarningReceive', level)
      if(needDebugInfo){
        wx.showToast({
            title: 'onMemoryWarningReceive',
            duration: 1000,
            icon: 'none',
            success:() => {
            }
        })
      }
    })
}

// wx.getFileSystemManager().readdir({
//     dirPath : wx.env.USER_DATA_PATH + "/temp_text",
//     success:(ret)=>{
//         console.log(ret)
//         for(let dir of ret.files){
//             console.log(wx.getFileSystemManager().statSync(wx.env.USER_DATA_PATH + "/temp_tex/"+dir))
//         }
//     }
// })

// wx.getFileSystemManager().getSavedFileList({
//     success:(ret)=>{
//         let fileList = ret.fileList
//         fileList.forEach((item) => {
//             window.fs_stats.totalSize = window.fs_stats.totalSize + item.size
//         })
//         console.log("当前用户缓存空间大小(B)", window.fs_stats.totalSize)
//     }
// })