/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

  name = 'wxgame'
  // paycheck;

  login() {
        
  }
  
  isSdkInitFinish(){
 
  }
  getWxSdkInitData(){

  }

  getWxSdk(data){

  }

  doPoint(msg){
 
  }

  qqPay(prepayId,starCurrency){
     
  }

  showModalWx(msg,show_cancel,cancel_fun,suc_fun){
    wx.showModal({
      title: '提示',
      content: msg,
      showCancel: show_cancel,
      success(res) {
        if (res.confirm) {
          suc_fun();
        } else if (res.cancel) {
          cancel_fun();
        }
      }
    })
  }

  getWxSdkData(){
    //  console.log("获取微信sdk数据:",window.wxsdk);
     if(window.wxsdk){
        return window.wxsdk;
     }

     return null;
  }
  
  
  isUserGeted(fun,obj) {
 
  }

  keepScreeOnFac(data){
      // wx.setKeepScreenOn(data);
  } 

  getUserInfo() {
       
  }

  QQShareAppMessage(comfun)
  {
     huoSdk.updateShareInfo({
        data: {
          to_target: 'wx'
        }
      }).then((res)=>{
          //console.log('res==',res)
          //res== {code:200,msg:'success'}
          // do something
      })

      huoSdk.getShareInfo({
          data: {
            path: ''
          }
        }).then(res => {
            //console.log('res==',res)
            //res== {code:200,data:{},msg:'success'}
            // do something
          // 小游戏
            wx.onShareAppMessage(function () {
                return {
                title: res.data.title,
                imageUrl: res.data.image,
                query: `state=${res.data.state}`
                }
            })
          

            wx.shareAppMessage({
                title: res.data.title,      //分享标题
                imageUrl: res.data.image,
                query: `state=${res.data.state}`,
                success: function success(res) {
                    console.log("分享成功", res);
                    comfun();
                },
                fail: function fail(res) {
                    console.log("分享失败", res);
                }
            });
        })
  }

  QQcheckNewUpdate()
  {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {// 请求完新版本信息的回调
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate()
                  } 
                }
              })
            })
            updateManager.onUpdateFailed(function () {// 新的版本下载失败
              wx.showModal({
                title: '已经有新版本了哟~',
                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
              })
            })
          }
      })
  }

  //微信切支付
    SwitchWxPay(params) {
        console.log('SwitchWxPay params==',params)
        // if(this.paycheck == 3)
        //     return;
        console.log('SwitchWxPay 2222')
        // return new Promise((resolve, reject) => {
            huoSdk.pay({
              data: {
                'order-currency': params["order-currency"],
                'order-cp_order_id': params["order-cp_order_id"],
                'order-product_price': params["order-product_price"],
                'order-product_id': params["order-product_id"],
                'order-product_cnt': params["order-product_cnt"],
                'order-product_name': params["order-product_name"],
                'order-product_desc': params["order-product_desc"],
                'order-ext': params["order-ext"],
                'role-event': params["role-event"],
                'role-server_id': params["role-server_id"],
                'role-server_name': params["role-server_name"],
                'role-role_id': params["role-role_id"],
                'role-role_name': params["role-role_name"],
                'role-role_level': params["role-role_level"],
                'role-role_vip': params["role-role_vip"]
              }
            }).then(res => {
                //console.log('res==',res)
                //res=={code:200,data:{},msg:success}
                // do something
            })
        // })
    }

    //上报数据
    updateRole(params) {
        console.log('updateRole params==',params)
        // return new Promise((resolve, reject) => {
            huoSdk.updateRoleInfo({
              data: {
                'role-event': params["role-event"],
                'role-server_id': params["role-server_id"],
                'role-server_name': params["role-server_name"],
                'role-role_id': params["role-role_id"],
                'role-role_name': params["role-role_name"],
                'role-role_level': params["role-role_level"],
                'role-role_vip': params["role-role_vip"],
                'role-combat_num': params["role-combat_num"],
                'role-onlineTime': params["role-onlineTime"]
              }
            }).then(res => {
                console.log('updateRole res==',res)
                //res== {code:200,msg:'success'}
                // do something
                
                // huoSdk. userCheckpay ({
                //   data: {
                //     'role-server_id': params["role-server_id"],
                //     'role-role_id': params["role-role_id"],
                //     'role-role_level': params["role-role_level"],
                //     'role-role_vip': params["role-role_vip"],
                //     'role-combat_num': params["role-combat_num"]
                //   }
                // }).then(res => {
                //     console.log('userCheckpay res==',res)
                // //res== {code:200,msg:'success'}
                // // do something
                
                //     this.paycheck = res.data.check;
                // }, err => {
                //   // handle error
                // })
            }, err => {
              // handle error
            })
        // })
    }

    checkScreenchar(checkdata)
    {
        console.log('checkScreenchar checkdata==',checkdata)
        huoSdk.checkMsg({
          data: {
            content: checkdata.content
          }
        }).then(res => {
          console.log(res)
          if(res.msg == "success")
          {
              checkdata.success();
          }
          else
          {
              checkdata.fail();
          }
        }, err => {
          console.log(err)
        })

    }
}


class WxgameOpenDataContext {

    createDisplayObject(type, width, height) {
        const bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        const texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        const bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;

        if (egret.Capabilities.renderMode == "webgl") {
            const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
            const context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.wxBindCanvasTexture) {
                egret.startTick((timeStarmp) => {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        return bitmap;
    }


    postMessage(data) {
        const openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage(data);
    }
}

WxgamePlatform.prototype.name = 'wxgame';
WxgamePlatform.prototype.openDataContext = new WxgameOpenDataContext();

window.platform = new WxgamePlatform();