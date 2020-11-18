//生成随机字符串
function randomStr(min, max) {
  var returnStr = "",
    range = (max ? Math.round(Math.random() * (max - min)) + min : min),
    charStr = '0123456789';
  for (var i = 0; i < range; i++) {
    var index = Math.round(Math.random() * (charStr.length - 1));
    returnStr += charStr.substring(index, index + 1);
  }
  return returnStr;
}
//生成随机字符串 end

const md5 = require('md5.js');   //导入MD5加密js

var xmw_username;  //全局变量  用于保存用户名
var xmw_udid = wx.getStorageSync('xmw_udid');
if(!xmw_udid){     //生成用户唯一ID，保存到本地缓存
  xmw_udid = md5.hex_md5(randomStr(32, 32));
  wx.setStorageSync("xmw_udid",xmw_udid)
}
console.log("xmw_udid===="+xmw_udid)

//登录方法。
function wxGameLogin(successcb,failcb){
  var that = this
  //第一次静默登录  获取code
  wx.login({
    success: res => {
      var wxGameCode = res.code;
      wx.request({
        url: "https://wap.xmwan.com/api/wxgame.php?act=login",
        data: {
          scene: wx.getLaunchOptionsSync().scene,
          code: wxGameCode,    //微信小游戏登录返回code
          appid: '1000676',    //游戏ID
          udid: xmw_udid      //用户唯一标识
        },
        success: function (res) {
          if (res.data.status != 1) {     //此处返回不等于1，代表登录错误
            //failcb()     这里可以处理登录失败回调
          } else {
            var xmw_uid = res.data.data[0].uid;    //登录后服务端返回的用户ID  跟udid不同!
            xmw_username = res.data.data[0].user_name;
            wx.platformCfg.uid = xmw_username;
            wx.platformCfg.sid = res.data.data[0].sid;
            successcb()  // 这里可以处理登录成功回调

            console.log("静默登陆成功!")
            //统计在线时间，10分钟轮询一次
            var xmw_play_session = md5.hex_md5(randomStr(32, 32));    //每次登陆后生成play_session，每次重进游戏都不一样
            setInterval(function () {
              wx.request({
                url: "https://wxminigm.xmwan.com/api/wxgame.php?act=play_session",
                data: {
                  appid: 1000676,            //游戏ID
                  uid: xmw_uid,                //登录后服务端返回的用户ID  跟udid不同!
                  play_session: xmw_play_session     //游戏传入，随机字符串，用户每次登录成功之后随机一个出来
                },
                success: function (res) {
                  console.log('在线时长')
                },
                fail: function (res) {
                  console.log('error', res)
                }
              })
            }, 600000)    //十分钟轮询一次
            //统计在线时间，10分钟轮询一次  end

            //游戏需要一个进入游戏的按钮，其实是获取用户iv,encryptedData ...
            // let button = wx.createUserInfoButton({
            //   type: 'text',
            //   text: '授权',
            //   style: {
            //     left: 10,
            //     top: 60,
            //     width: 150,
            //     height: 40,
            //     lineHeight: 40,
            //     backgroundColor: '#ff0000',
            //     color: '#ffffff',
            //     textAlign: 'center',
            //     fontSize: 16,
            //     borderRadius: 10
            //   }
            // });

            //监听用户信息按钮的点击事件,用户每点击一次，就会触发一次回答函数
            //如果用户点了拒绝，无法获取用户unionid
            // button.onTap(function (res) {
            //   console.log(res);//res 为 json 格式，用户点击"拒绝"或"允许"都会对应不同的数据
            //   //第二次授权登录，需要重新获取新code，一次code只能使用一次
            //   wx.login({
            //     success: res => {
            //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
            //       wx.getUserInfo({
            //         withCredentials: true,
            //         success: (obj) => {
            //           wx.request({
            //             url: "https://wap.xmwan.com/api/wxgame.php?act=login",
            //             data: {
            //               code: res.code,
            //               encryptedData: obj.encryptedData,
            //               iv: obj.iv,
            //               udid: xmw_udid,      //用户唯一标识 
            //               authorization: '1',   //此参数判断是否获取unionid
            //               appid: '1000676'
            //             },
            //             success: function (res) {
            //               if (res.data.status != 1) {
            //                 //successcb()
            //                 console.log('登录出错~~~')
            //                 console.log(res.msg)
            //               } else {
            //                 console.log('登录成功')
            //                 xmw_username = res.data.data[0].user_name;
            //                 successcb();
            //               }
            //             },
            //             fail: function (res) {
            //               //failcb()
            //               console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
            //             }
            //           })
            //         }, fail: (res) => {
            //           console.log(res)
            //           console.log('拉取用户openid失败，无法开放接口等服务', res)
            //         }
            //       })
            //     }
            //   })
            // });
          }
        },
        fail: function (res) {
          //failcb()
          console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
        }
      })
    }
  })
}

// 事件统计
try {
  const res = wx.getSystemInfoSync()   //获取用户相关信息
  //激活
  wx.request({
    url: "https://wap.xmwan.com/api/wxgame.php?act=event",
    data: {
      appid: '1000676',
      action_type: 'active',
      udid: xmw_udid,      //用户唯一标识
      data: res
    },
    success: function (res) {
      if (res.data.status != 1) {
        //failcb()
        console.log('激活出错~~~')
        console.log(res.data.msg)
      } else {
        //successcb()
        console.log('激活成功')
        console.log(res.data.data)
      }
    },
    fail: function (res) {
      //failcb()
      console.log('error', res)
    }
  })
} catch (e) {
    // Do something when catch error
}

//   //事件统计
//   wx.request({
//     url: "https://wap.xmwan.com/api/wxgame.php?act=event",
//     data: {
//       appid: '1000676',
//       action_type: 'event', //统计事件接口
//       udid: xmw_udid,      //用户唯一标识
//       data: res
//     },
//     success: function (res) {
//       if (res.data.status != 1) {
//         //failcb()
//         console.log('事件出错~~~')
//         console.log(res.data.msg)
//       } else {
//         //successcb()
//         console.log('事件成功')
//         console.log(res.data.data)
//       }
//     },
//     fail: function (res) {
//       //failcb()
//       console.log('error', res)
//     }
//   })
// } catch (e) {
//   // Do something when catch error
// }
//事件统计 end

//角色上报接口
function roleUpdate(para){
  var params = para;
  console.log(params)
  wx.request({
    url: "https://wap.xmwan.com/api/wxgame.php?act=role",
    data: {
      service: 'sdk.game.entergame',
      appid: '1000676',
      data: params
    },
    success: function (res) {
      console.log(res.data.status)
      if (res.data.status == 1){
        console.log('角色上报成功')
        console.log(res)
      }else{
        console.log('角色上报失败', res)
      }
    },
    fail: function (res) {
      console.log('角色上报失败', res)
    }
  })
}
// var paraStr = { 'uid': '3690096', 'userName': '我是谁', 'serverId': '56', 'serverName': '奥金斧', 'roleID': '78231466', 'roleName': 'nigeyou', 'roleLevel': '38', 'payLevel': '15', 'channelId': '75337546', 'platform': 'wxGame', 'udid': ''};
// roleUpdate(paraStr);
//角色上报接口  end

//支付接口
function topay(amount, serial, channel, serverId, serverName, goodsID, goodsName
  , roleID, roleName, roleLevel) {
  var ajaxPayArr = {
    username: xmw_username,    //登录super登录接口返回的user_name
    payChannel: '30',         //支付方式，暂时固定
    cost: amount,            //金额
    price: amount,            //金额
    cpOrder: serial,         //CP充值订单号
    channel: channel,         //渠道ID
    serverId: serverId,       //服务器ID
    serverName: serverName,   //服务器名称
    goodsID: goodsID,        //商品ID
    goodsName: goodsName,    //商品名称
    roleID: roleID,          //角色ID
    roleName: roleName,     //角色名称
    roleLevel: roleLevel,   //角色等级
    extends: '',
    udid: xmw_udid,      //用户唯一标识
    payWayNo: ''
  }
  var ajaxPayJson = JSON.stringify(ajaxPayArr);

  wx.request({
    url: "https://wap.xmwan.com/api/wxgame.php?act=pay",
    data: {
      service: 'sdk.pay.fororder',
      appid: '1000676',
      data: ajaxPayArr
    },
    success: function (data) {
      if (data.data.status == '-1'){
        wx.requestMidasPayment({
          mode: 'game',
          env: 1,
          offerId: '1450023866',     //米大师的应用 id
          currencyType: 'CNY',
          platform: 'android',
          buyQuantity: 10,         //购买比例 通常是1比10，此处填10
          zoneId: 1,
          success: (res) => {           
            wx.request({
              url: "https://wap.xmwan.com/api/wxgame.php?act=pay",
              data: {
                service: 'sdk.pay.fororder',
                appid: '1000676',
                data: ajaxPayArr
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
    },
    fail: (res) => {
      console.log('支付失败', res)
    }
  })
}

// var radomSerial = randomStr(25, 25).toString();

//以下是两种支付方式：topay方法为正常安卓支付调用，而ios支付需调用wx.openCustomerServiceConversation方法拉起客服支付
//安卓正常支付：
// setTimeout(function () {
//   topay("1", radomSerial, "渠道id", "服务器id", "服务器名称", "商品id", "商品名称", "角色id", "角色名称", "角色等级")
// }, 8000);

//拉起客服会话 用于ios支付：
// setTimeout(function () {
//   // wx.openCustomerServiceConversation({
//   //   showMessageCard: true,
//   //   sendMessageTitle: '订单号:' + radomSerial,   //传入游戏订单号，格式需固定为订单号:123456789，冒号是英文冒号
//   //   sendMessageImg: "http://wap.xmwan.com/floatWindow/images/bg/bg1.jpg",     //此参数必传，不然有可能拉不起客服支付
//   //     success: function(data) {
//   //     console.log("success =", data)
//   //     },
//   //   fail: function (data) {
//   //     console.log("fail =", data)
//   //   },
//   //   complete: function (data) {
//   //     console.log("complete =", data)
//   //   }
//   // })

// // topay("1", radomSerial, "渠道id", "服务器id", "服务器名称", "商品id", "商品名称", "角色id", "角色名称", "角色等级")

//   //2020-04-16新增小程序支付  小程序跳转支付方法  推荐！
//   var ajaxPayArr = {
//     username: xmw_username,    //登录super登录接口返回的user_name
//     payChannel: '30',         //支付方式，暂时固定
//     cost: '6',            //金额
//     price: '6',            //金额
//     cpOrder: radomSerial,         //CP充值订单号
//     channel: '渠道id',         //渠道ID
//     serverId: '服务器id',       //服务器ID
//     serverName: '服务器名称',   //服务器名称
//     goodsID: '商品id',        //商品ID
//     goodsName: '商品名称',    //商品名称
//     roleID: '角色id',          //角色ID
//     roleName: '角色名称',     //角色名称
//     roleLevel: '15',   //角色等级
//     extends: '',
//     udid: xmw_udid,      //用户唯一标识
//     payWayNo: ''
//   }
//   var ajaxPayJson = JSON.stringify(ajaxPayArr);

//   wx.request({
//     url: "https://wap.xmwan.com/api/wxgame.php?act=pay",
//     data: {
//       service: 'sdk.pay.fororder',
//       appid: '1000496',
//       data: ajaxPayJson
//     },
//     success: function (data) {
//       if (data.data.status == 0) {
//         console.log('支付失败')
//       } else {
//         console.log(data)
//         if(data.data.status == '-2'){      //== -2 代表可以使用小程序支付
//           wx.navigateToMiniProgram({
//             appId:'wxe03891ba5a6e85fc',    //此参数固定
//             path: 'pages/pay/pay?cpOrder='+data.data.msg+'&amount=6',  //加一个金额参数
//             success: res => {
//               console.log('跳转成功')
//             },fail: res => {
//                 console.log('跳转失败')
//             }
//           })
//         }
//       }
//     },
//     fail: function (data) {
//       console.log('支付失败', data)
//     }
//   })
//   //2020-04-16新增小程序支付   end

// }, 5000);
//拉起客服会话  用于ios支付 end

//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  wxGameLogin: wxGameLogin,      //导出wxGameSDK
  roleUpdate:roleUpdate,
  xmw_username:xmw_username,  //全局变量  用于保存用户名
  xmw_udid:xmw_udid
}
