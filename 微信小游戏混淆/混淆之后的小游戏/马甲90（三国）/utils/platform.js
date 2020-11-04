wx.platformCfg={
  uid:"",
	host:"wx",
	pfcode:"xingheyue-wxxyx",
	serverurl:"https://qzsgadmin.ximiyouxi.com:8081",
  getopenidurl:"https://qzsgadmin.ximiyouxi.com:8081/server/sessionkey",
  t1:"",
  t2:"",
  t3:"",
  t4:"",
};

var enterGame =function(){
  // 创建文档类
  const main = new Main();
  wx.gamestage.addChildAt(main,0);
};


const huoSdk = require('./sdk-1.0.1.js');
wx.huoSdk = huoSdk;
huoSdk.init({
  app_id: 90,
  mp_id: 'wxd31576d8667eef77'
}).then(res => {
  console.log(res.msg);
  let opts = wx.getLaunchOptionsSync()
  huoSdk.login({
    data: {
      // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
      state: opts.query.state || opts.query.scene || ''
    }
  }).then(res => {
    // do something
    wx.platformCfg.uid = res.data.mg_mem_id;
    wx.platformCfg["user_token"] = res.data.cp_user_token;
    enterGame();
  })
})

wx.ximipay=function(uid,data)
{
  wx.request({
    url: 'https://qzsgadmin.ximiyouxi.com:8085/pay/order',
    data: {
      orderdata: data.desc,
      pname: uid,
      pfcode:wx.platformCfg.pfcode
    },
    success (res) {
      if(res.data.code ==0)
      {
          if(res.data.order)
          {              
            console.log("获取订单成功!");       
            wx.huoSdk.pay({data:res.data.order}).then(res => {
              console.log("支付成功")
            })
          }
          
      }
    }
  }) 
}

var eventArr=["","online","create","levelup","offline","other","delete"];
wx.ximiUpRoleData = function(event,data){
  wx.huoSdk.updateRoleInfo({
    data: {
      'role-event': eventArr[event],
      'role-server_id': data.serverId,
      'role-server_name': data.serverName,
      'role-role_id':  data.userRoleId,
      'role-role_name':  data.userRoleName,
      'role-role_level':  data.userRoleLevel,
      'role-role_vip':  data.vipLevel,
      'role-combat_num':  data.gameRolePower      
    }
  }).then(res => {
    // do something
  }, err => {
    // handle error
  })
}