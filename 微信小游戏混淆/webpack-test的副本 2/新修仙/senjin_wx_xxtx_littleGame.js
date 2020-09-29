var pass_passId="";var pass_passHost="https://pass.mengkegame.cn/pass4/";var senjinSdk=require("sdk-1.0.1");var env=1;(function(window){function H5SDK(){}H5SDK.prototype={constructor:H5SDK,isinited:false,login:function(ucLoginData){H5Login.apply(this,arguments)},login_noServer:function(loginData){H5Login_noServer.apply(this,arguments)},enterGame:function(name){H5EnterGame.apply(this,arguments)},pay:function(amount,orderData){H5Pay.apply(this,arguments)},iosPay:function(amount,orderData){IOSPay.apply(this,arguments)},reportData:function(params){reportDataFunc.apply(this,arguments)},isOpenShare:function(callback){var data=true;console.log(">>>>>>>isOpenShare callback:",data);callback&&callback(data)},isCustomerBtn:function(callback){var data={show:0};console.log(">>>>>>>>isCustomerBtn callback:",data);callback&&callback(data)},getVerifyInfo:function(callback){var info={status:0,isOpenVerify:0,isOpenIndulge:0,_default:1,};console.log(">>>>>>>getVerifyInfo callback data:",info);callback&&callback(info)},getFocusState:function(param,callback){var code=-1;console.log(">>>>>>>getFocusState callback:",code);callback&&callback(code)},checkChat:function(params,callback){checkChatFunc.apply(this,arguments)},getChannelShareInfo:function(callback){getChannelShareInfoFunc.apply(this,arguments)},upLoadUserInfo:function(info){if(info.errMsg=="getUserInfo:ok"){console.log("允许");upLoadUserInfoFunc.apply(this,arguments)}else{console.log("拒绝")}},showShare:function(obj){var that=this;console.log("shareInfo:",that.channelShareInfo);var shareObj={title:that.channelShareInfo.title,imgUrl:that.channelShareInfo.image,query:"state="+that.channelShareInfo.state,};console.log("shareObj:",shareObj);wx.shareAppMessage({title:shareObj.title,imageUrl:shareObj.imgUrl,query:shareObj.query,});if(that.myShareCallback){that.myShareCallback(true)}senjinSdk.updateShareInfo({data:{to_target:"wx"}}).then(function(res){console.log("分享上报结果：",res)})},setShareCallback:function(callback){this.myShareCallback=callback},setCallbacks:function(params){if(params){if(params.loginCallBack){this.loginCallBack=params.loginCallBack}if(params.getServerCallBack){this.loginCallBack=params.getServerCallBack}if(params.enterCallBack){this.enterCallBack=params.enterCallBack}if(params.version){this.version=params.version}if(params.appVersion){this.appVersion=params.appVersion}if(params.engineVersion){this.engineVersion=params.engineVersion}if(params.shareInfo){this.shareInfo=params.shareInfo}if(params.getLoginParamsCallBack){this.getLoginParamsCallBack=params.getLoginParamsCallBack}}},init:function(params){H5Init.apply(this,arguments)},_init:function(params){H5Init.apply(this,arguments)}};window.h5sdk=window.h5gamecn=new H5SDK();window.H5SDK=H5SDK;if(typeof(window.__sdkready)=="function"){window.__sdkready()}})(window);function H5Init(params){var $this=this;console.log("======wx sdk start init=======");console.log("=======sdk version:2020.09.18======");$this.setCallbacks(params);if(!$this.isinited){var opts=wx.getLaunchOptionsSync();console.log("opts:",opts);if(!senjinSdk){console.warn("==加载森金sdk出错==");return}Pass_loadConfig(function(passConfig){$this.passConfig=passConfig.data;console.log("passConfig:",passConfig);console.log("==senjinSdk==");console.log(senjinSdk);senjinSdk.init({app_id:8,mp_id:'wxb3ca58b5a19d6c40'}).then(function(res){console.log("森金初始化结果：",res);if(res.msg=="success"){senjinSdk.login({data:{state:opts.query.state||opts.query.scene||""}}).then(function(res){console.log("森金登陆结果：",res);if(res.msg=="success"){$this.login_noServer(res.data.mem_id,res.data.cp_user_token);getChannelShareInfoFunc(function(info){$this.channelShareInfo=info;initShareInfo.apply($this,arguments)});autoUpLoadUserInfoFunc()}})}else{console.warn("==森金初始化失败==")}})});$this.isinited=true}else{console.log("==重复init==")}}function initShareInfo(){var $this=this;wx.showShareMenu();console.log("$this channelShareInfo:",$this.channelShareInfo);wx.onShareAppMessage(function(res){return{title:$this.channelShareInfo.title,imageUrl:$this.channelShareInfo.image,query:"state="+$this.channelShareInfo.state,}})}function autoUpLoadUserInfoFunc(){wx.getSetting({success:function(res){if(res.authSetting["scope.userInfo"]){wx.getUserInfo({success:function(res){console.log("获取用户信息成功:",res);senjinSdk.updateSelfInfo({data:{raw_data:res.rawData,signature:res.signature,encrypted_data:res.encryptedData,iv:res.iv}}).then(function(res){console.log("上传用户信息结果：",res)})}})}else{console.log("获取用户信息失败")}}})}function Pass_loadConfig(cb){var accountInof=wx.getAccountInfoSync();console.log("accountInof:",accountInof);var selfAppid=accountInof.miniProgram.appId;console.log("selfAppid:",selfAppid);console.log("==开始发送数据==");getDataXHR(pass_passHost+"master/pass/service/api/SENJIN079SER/getPassId?wxXyxAppId="+selfAppid,function(d){pass_passId=d.data.passId;console.log("getPassId:",d);console.log("pass_passId:",pass_passId);getDataXHR(pass_passHost+"master/pass/"+pass_passId+"/loadConfig",function(d){cb&&cb(d)})})}function sortByKey(data,key,desc){var arr=data;key=key||"index";arr.sort(function(a,b){if(desc){return b[key]-a[key]}else{return a[key]-b[key]}});return arr}function H5Login_noServer(mem_id,user_token){var $this=this;var objectParams={mem_id:mem_id,user_token:user_token};var url=pass_passHost+"master/pass/"+pass_passId+"/login"+objectToSearch(objectParams);getDataXHR(url,function(res){console.log("passLogin callback:",res);var gameUrl=res.data.gameUrl;var params=getParamsFromUrl(gameUrl);$this.getLoginParamsCallBack&&$this.getLoginParamsCallBack(params)})}function H5Login(ucLoginData){var $this=this;console.log("===H5Login $this===",JSON.stringify($this));console.log("===$this.enterCallBack===",JSON.stringify($this.enterCallBack));console.log("===version===",$this.version);passid=$this.playData.passId;appid=$this.playData.appId;var searchStr=objectToSearch(ucLoginData);var url=passHost+"/jdk/login/"+passid+"/"+appid+searchStr;console.log("==通行证开始登陆==",url);getDataXHR(url,function(d){console.log("==通行证登录返回数据==");console.log(JSON.stringify(d));var redirect=d.redirect;var pattern=/^((https|http)?:\/\/)[^\s]+\/(pass_a|pass3)\/([a-zA-Z0-9_-])+\/([a-zA-Z0-9_-])+\/index\.xhtml[^\s]+/;if(!pattern.test(redirect)){console.error("====login fail, testfail serverUrl redirect====");$this.loginCallBack&&$this.loginCallBack(2);return}$this.redirect=redirect;$this.loginData=getParamsFromUrl(redirect);if($this.loginData._game){console.log("==有区服参数==");$this.loginCallBack(1);$this.enterCallBack&&$this.enterCallBack(1,$this.loginData);return}var splitArray=redirect.split("index.xhtml");var postUrl=splitArray[0]+"as/index.xhtml"+splitArray[1];var getServerFunc=function(){console.log("getServerFunc postUrl:"+postUrl);getDataXHR(postUrl,function(d){console.log("==获取选区列表数据==");console.log(JSON.stringify(d));var data2;if(isJsonString(d)){data2=JSON.parse(d)}else{data2=d}if(!data2.regist){$this.loginCallBack&&$this.loginCallBack(2)}else{if(data2.enterGame){$this.loginCallBack&&$this.loginCallBack(1);var params=data2.params;if(data2.url){params.url=encodeURIComponent(data2.url)}$this.enterCallBack&&$this.enterCallBack(1,params)}else{var parts=[];var oldparts=data2.oldGames;var Sparts=[];for(var i=0;i<data2.games.length;i++){var game1=data2.games[i];if(game1.index%10!=0||game1.index<=0){Sparts.push(game1)}else{parts.push(game1)}}$this.loginCallBack&&$this.loginCallBack(0,sortByKey(parts),oldparts,sortByKey(Sparts))}}})};if($this.version){getDataXHR("https://ltm.fenzhihuyu.cn/master/user/client/getXyxVersion.json?channelId=7000223",function(d){$this.version=parseInt($this.version);$this.olVersion=d.data;console.log("======线上游戏版本======");console.log($this.olVersion);console.log("======当前包版本======");console.log($this.version);console.log($this.version>$this.olVersion);if($this.version&&$this.version>$this.olVersion){console.log("===游戏版本高于于线上版本，提审服地址===");isCheckServer=true;postUrl="https://pass.h5eco.com/pass_a/djshCheckRxscgz/djsh/as/index.xhtml"+splitArray[1]}else{if($this.version&&$this.version<$this.olVersion){console.log("===游戏版本低于线上版本，需要关闭游戏重新打开===");alert("游戏版本低于线上版本，需要关闭游戏重新打开")}}getServerFunc()})}else{console.log("========当前游戏包版本=========",$this.version);getServerFunc()}})}function H5EnterGame(_gameName,_params){var $this=this;$this.loginData.game=_gameName||$this.enterName;var splitArray=$this.redirect.split("index.xhtml");var postUrl="";if(isCheckServer){postUrl="https://pass.h5eco.com/pass_a/djshCheckRxscgz/djsh/as/enter.xhtml"+splitArray[1]+"&game="+_gameName}else{postUrl=splitArray[0]+"as/enter.xhtml"+splitArray[1]+"&game="+_gameName}console.log("isCheckServer:",isCheckServer);console.log("entergameentergameentergameentergame",postUrl);getDataXHR(postUrl,function(d){console.log("==EnterGameSucc==",JSON.stringify(d));var data;if(isJsonString(d)){data=JSON.parse(d)}else{data=d}if(!data.regist){$this.enterCallBack&&$this.enterCallBack(2)}else{if(data.enterGame){var params=data.params;if(data.url){params.url=encodeURIComponent(data.url)}$this.enterCallBack&&$this.enterCallBack(1,params)}}})}function objectToSearch(param){if(typeof param!="object"){console.error("参数不合法");return}var search="?";var keys=Object.keys(param);for(var i=0;i<keys.length;i++){if(i==0){search+=(keys[i]+"="+encodeURIComponent(param[keys[i]]))}else{search+="&"+(keys[i]+"="+encodeURIComponent(param[keys[i]]))}}return search}function objectToSearch2(param){if(typeof param!="object"){console.error("参数不合法");return}var search="?";var keys=Object.keys(param);for(var i=0;i<keys.length;i++){if(i==0){search+=(keys[i]+"="+param[keys[i]])}else{search+="&"+(keys[i]+"="+param[keys[i]])}}return search}function createPay(param,cb){var param=param||{};var url=pass_passHost+"master/pass/"+pass_passId+"/order"+param.search;console.warn("createPay:",url);getDataXHR(url,function(d){cb&&cb(d)})}function IOSPay(amount,orderData,payAppId){console.log("start IOSPay");var param={};param.openId=orderData.openId;param.money=amount;param.gameOrderId=orderData.gameOrderId||orderData.orderNo;param.serverId=orderData.serverId||orderData.ext||"";param.serverName=orderData.serverName||"";param.goodsName=orderData.goodsName||orderData.subject||"";param.goodsDesc=orderData.goodsDesc;param.roleName=orderData.roleName||orderData.appUserName||"";param.roleId=orderData.roleId||"";param.roleLevel=orderData.roleLevel||"";param.ext=orderData.ext||"";param.goodsId=orderData.goodsId||"";param.ios=true;if(payAppId){param.xcxAppId=payAppId}var search=objectToSearch(param);createPay({search:search},function(d){console.log("ios createPay",d);if(wx.navigateToMiniProgram&&d.code==0){wx.navigateToMiniProgram({appId:d.data.xcxAppId,path:"",extraData:d.data,success:function(res){console.log("打开成功")},fail:function(res){console.log("打开失败")}})}else{console.log("无法跳转")}})}function H5Pay(amount,orderData){var $this=this;var sysInfo=wx.getSystemInfoSync();console.log("platform:",sysInfo.platform);var param={};param.openId=orderData.openId;param.money=amount;param.gameOrderId=orderData.gameOrderId||orderData.orderNo;param.serverId=orderData.serverId||orderData.ext||"";param.serverName=orderData.serverName||"";param.goodsName=orderData.goodsName||orderData.subject||"";param.goodsDesc=orderData.goodsDesc;param.roleName=orderData.roleName||orderData.appUserName||"";param.roleId=orderData.roleId||"";param.roleLevel=orderData.roleLevel||"";param.ext=orderData.ext||"";param.goodsId=orderData.goodsId||"";var search=objectToSearch(param);createPay({search:search},function(d){console.log("createPay数据:",d);senjinSdk.pay({data:d.data}).then(function(res){console.log("支付结果：",res)})})}function getDataXHR(url,cb,param,contenttype,errorcb){var param=param||{};var type=param.type||"get";var data=param.data||null;try{var xhr=new XMLHttpRequest();xhr.open(type,url,true);xhr.onreadystatechange=function(){if(xhr.readyState==4){if(xhr.responseText=="error"){errorcb&&errorcb();return}try{var responseData=JSON.parse(xhr.responseText);if(responseData.c<0){console.log("===getDataXHR===:",url);console.log(JSON.stringify(responseData));if(responseData.data){try{var jsonObj=JSON.parse(responseData.data);if(jsonObj.code=="501"){console.log("===token失效，重新登录===")}}catch(e){console.log("===json parse error===:",e)}}return}if(!responseData.c&&responseData.c!=0){cb&&cb(responseData);return}var data=responseData.data&&JSON.parse(responseData.data);cb&&cb(data)}catch(e){throw"======返回出错信息 getDataXHR xhr.responseText error =====:"+xhr.responseText+" e："+e}}};if(contenttype){try{xhr.setRequestHeader("Content-Type",contenttype)}catch(e){alert(e)}}xhr.send(data)}catch(e){console.error("xhr出错",e);return false}}function isJsonString(str){try{if(typeof JSON.parse(str)=="object"){return true}}catch(e){}return false}function getParamsFromUrl(url){var params={};var array1=url.split("?");var strs=array1.pop().split("&");for(var i=0;i<strs.length;i++){var name_value=strs[i].split("="),name=decodeURIComponent(name_value[0]),value=decodeURIComponent(name_value[1]);if(name_value.length>2){for(var j=2;j<name_value.length;j++){value+=("="+name_value[j])}}if(name){params[name]=value}}return params}function checkChatFunc(params,callback){console.log("check params:",params);var tempPar={result:"success",code:"0",content:params.chat_content,faiMsg:"",};senjinSdk.checkMsg({data:{content:params.chat_content}}).then(function(res){console.log("检测结果：",res);if(res.msg=="success"){callback&&callback(tempPar)}},function(err){console.log("检测出错：",err);if(err.msg=="fail"){console.log("包含敏感词");tempPar.result="verify_fail";tempPar.code="-1";tempPar.faiMsg="have wrong word";tempPar.content="";callback&&callback(tempPar)}else{tempPar.result="fail";tempPar.code="-9";tempPar.faiMsg="network error";callback&&callback(tempPar)}})}function myCompareVersion(v1,v2){console.log("v1:",v1);console.log("v2:",v2);var GTR=1;var LSS=-1;var EQU=0;var v1arr=String(v1).split(".").map(function(a){return parseInt(a)});var v2arr=String(v2).split(".").map(function(a){return parseInt(a)});var arrLen=Math.max(v1arr.length,v2arr.length);var result;if(v1==undefined||v2==undefined){throw new Error()}if(v1.length==0&&v2.length==0){return EQU}else{if(v1.length==0){return LSS}else{if(v2.length==0){return GTR}}}var xxcanghaiComp=function(n1,n2){if(typeof n1!="number"){n1=0}if(typeof n2!="number"){n2=0}if(n1>n2){return GTR}else{if(n1<n2){return LSS}else{return EQU}}};for(var i=0;i<arrLen;i++){result=xxcanghaiComp(v1arr[i],v2arr[i]);if(result==EQU){continue}else{break}}return result}function getChannelShareInfoFunc(callback){senjinSdk.getShareInfo().then(function(res){console.log("分享内容:",res);if(res.msg=="success"){callback&&callback(res.data)}})}function reportDataFunc(data){if(data.action=="login"||data.action=="create_role"||data.action=="level"||data.action=="levelup"){var reportData={"role-event":"","role-server_id":data.server,"role-server_name":data.serverName,"role-role_id":data.roleId,"role-role_name":data.roleName,"role-role_level":data.level,"role-role_vip":data.vip,"role-combat_num":data.power,"role-onlineTime":0,"role-scene":"","role-axis":"","role-scene":""};if(data.action=="login"){reportData["role-event"]="online"}else{if(data.action=="create_role"){reportData["role-event"]="create"}else{if(data.action=="level"||data.action=="levelup"){reportData["role-event"]="levelup"}}}console.log("reportData:",reportData);senjinSdk.updateRoleInfo({data:reportData}).then(function(res){console.log("上报结果：",res)},function(err){})}}function upLoadUserInfoFunc(info){senjinSdk.updateSelfInfo({data:{raw_data:info.rawData,signature:info.signature,encrypted_data:info.encryptedData,iv:info.iv}}).then(function(res){console.log("上传角色信息结果：",res)})};