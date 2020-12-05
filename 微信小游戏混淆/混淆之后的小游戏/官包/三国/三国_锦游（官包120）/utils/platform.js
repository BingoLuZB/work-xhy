wx.platformCfg={
  uid:"",
	host:"wx",
	pfcode:"xingheyue-wxxyx2",
	serverurl:"https://qzsgadmin.ximiyouxi.com:8081",
  getopenidurl:"https://qzsgadmin.ximiyouxi.com:8081/server/sessionkey",
  loginSign:"",
  t1:"",
  t2:"",
  t3:"",
  t4:"",
  banquanurl:"https://qzsgadmin.ximiyouxi.com:8081/server/banhao",
  checkLogin:"https://qzsgadmin.ximiyouxi.com:8081/server/checklogin",
  packageName:"majia120"  //包名  自定义 用于对应 版权资质

};

var enterGame =function(){
  //验证登陆接口
  wx.request({
    url: wx.platformCfg.checkLogin,
    data: {
      sid:wx.platformCfg.sid,
      userName:wx.platformCfg.uid
    },
    success (res) {
      if(res.data.code ==0)
      {
        wx.platformCfg.loginSign = res.data.logincheckSign;
        wx.request({
          url: wx.platformCfg.banquanurl,
          data: {
            packageName:wx.platformCfg.packageName
          },
          success (res) {
            if(res.data.code ==0)
            {
              wx.platformCfg.t1 = res.data.t1;
              wx.platformCfg.t2 = res.data.t2;
              wx.platformCfg.t3 = res.data.t3;
              wx.platformCfg.t4 = res.data.t4;
              // 创建文档类
              const main = new Main();
              wx.gamestage.addChildAt(main,0);
            }else
            {
              console.log("版号获取失败");
            }
          }
        });
      }else
      {
        wx.showModal({
          content: "登陆验证不通过"
        });
      }
    }
  });
  // // 创建文档类
  // const main = new Main();
  // wx.gamestage.addChildAt(main,0);
};

var sdk = require('./wxGameDemo.js');
sdk.wxGameLogin(function(){  
  enterGame();
});

wx.ximipay=function(uid,data)
{
  wx.request({
    url: 'https://qzsgadmin.ximiyouxi.com:8085/pay/order',
    data: {
      orderdata: data.desc,
      pfcode:wx.platformCfg.pfcode,
      pname:wx.platformCfg.uid
    },
    success (res) {
      if(res.data.code ==0)
      {
          if(res.data.order)
          {              
            console.log("获取订单成功!");
            res.data.order["username"] = wx.platformCfg.uid;
            res.data.order["channel"] = 10000;
            res.data.order["udid"] = sdk.xmw_udid;

            var ajaxPayJson = JSON.stringify(res.data.order);
            wx.request({
              url: "https://wap.xmwan.com/api/wxgame.php?act=pay",
              data: {
                service: 'sdk.pay.fororder',
                appid: 1000676,
                data: ajaxPayJson
              },
              success: function (data) {
                if (data.data.status == 0) {
                  console.log('支付失败')
                } else {
                  console.log(data)
                  if(data.data.status == '-2'){      //== -2 代表可以使用小程序支付
                    wx.navigateToMiniProgram({
                      appId:'wxe03891ba5a6e85fc',    //此参数固定
                      path: 'pages/pay/pay?cpOrder='+data.data.msg+'&amount='+res.data.order.price,  //加一个金额参数
                      success: res => {
                        console.log('跳转成功')
                      },fail: res => {
                          console.log('跳转失败')
                      }
                    })
                  }else if(data.data.status == '-1')
                  {
                    wx.requestMidasPayment({
                      mode: 'game',
                      env: 0,
                      offerId: '1450026881',     //米大师的应用 id
                      currencyType: 'CNY',
                      platform: 'android',
                      buyQuantity: 100,         //购买比例 通常是1比10，此处填10
                      zoneId: 1,
                      success: (res) => {           
                        wx.request({
                          url: "https://wap.xmwan.com/api/wxgame.php?act=pay",
                          data: {
                            service: 'sdk.pay.fororder',
                            appid: 1000676,
                            data: ajaxPayJson
                          },
                          success: function (data) {
                            console.log(data.data.status)
                            //2020.3.27  新加接口成功判断
                            if (data.data.status != 1) {
                              console.log('支付失败')
                              console.log(data)
                            } else {
                              console.log('支付成功', data)
                            }
                          },
                          fail: function (data) {
                            console.log('支付失败', data)
                          }
                        })
                      },
                      fail: (res) => {
                        console.log(res);
                      }
                    });
                  }
                }
              },
              fail: function (data) {
                console.log('支付失败', data)
              }
            })
          }          
      }
    }
  }) 
}

var eventArr=["","online","create","levelup","offline","other","delete"];
wx.ximiUpRoleData = function(event,data){
console.log(wx.platformCfg, '=====6')
  let obj = {
    uid: wx.platformCfg.xmw_uid,             // 请求登录接口返回的用户uid
    userName: wx.platformCfg.xmw_username,        // 用户名
    serverId: data.serverId,             // 用户服务器id
    serverName: data.serverName,      // 用户服务器
    roleID: data.userRoleId,        // 用户角色id
    roleName: data.userRoleName,       // 用户角色名
    roleLevel: data.userRoleLevel,            // 用户角色等级
    payLevel: data.vipLevel,            // 用户支付等级
    channelId: 10000,    // 用户渠道id
    platform: 'wxGame',      // 用户平台
    udid: sdk.xmw_udid               // 用户唯一识别
    };
    console.log(obj, '=======obj')
  sdk.roleUpdate(JSON.stringify(obj));
}