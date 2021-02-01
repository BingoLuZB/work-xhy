
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,BaseTexture=laya.webgl.resource.BaseTexture,Bitmap=laya.resource.Bitmap;
	var Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button,Byte=laya.utils.Byte,Event=laya.events.Event;
	var EventDispatcher=laya.events.EventDispatcher,Gyroscope=laya.device.motion.Gyroscope,HTMLDivElement=laya.html.dom.HTMLDivElement;
	var HTMLImage=laya.resource.HTMLImage,Handler=laya.utils.Handler,HttpRequest=laya.net.HttpRequest,Image=laya.ui.Image;
	var Label=laya.ui.Label,Loader=laya.net.Loader,LoaderManager=laya.net.LoaderManager,LocalStorage=laya.net.LocalStorage;
	var MiniAdpter=laya.wx.mini.MiniAdpter,MiniFileMgr=laya.wx.mini.MiniFileMgr,Panel=laya.ui.Panel,Radio=laya.ui.Radio;
	var RadioGroup=laya.ui.RadioGroup,Render=laya.renders.Render,RotationInfo=laya.device.motion.RotationInfo;
	var Scene=laya.display.Scene,SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Stage=laya.display.Stage;
	var Text=laya.display.Text,TextInput=laya.ui.TextInput,Texture=laya.resource.Texture,Texture2D=laya.webgl.resource.Texture2D;
	var TimeLine=laya.utils.TimeLine,Tween=laya.utils.Tween,URL=laya.net.URL,View=laya.ui.View,WebGL=laya.webgl.WebGL;
	var WebGLContext=laya.webgl.WebGLContext;
Laya.interface('boots.selserver.ISelServer');
Laya.interface('boots.nativee.INativeInterface');
Laya.interface('boots.selserver.med.ISelServerMediator');
/**
*选服页
*/
//class boots.selserver.med.SelServerMediator
var SelServerMediator=(function(){
	function SelServerMediator(p){
		this._p=null;
		// 是否显示测试服
		this._showTest=false;
		this._curZone=null;
		this._curServer=null;
		/**是否请求上次登录服成功**/
		this.isReqLastSucc=false;
		/**是否请求组下的服务器列表成功**/
		this.isReqListSucc=false;
		this._zones=[];
		this._radioZones=[];
		this._p=p;
		this._p.imgServerBG.alpha=0;
		this._p.imgServerBG.y=this._p.height;
	}

	__class(SelServerMediator,'boots.selserver.med.SelServerMediator');
	var __proto=SelServerMediator.prototype;
	Laya.imps(__proto,{"boots.selserver.med.ISelServerMediator":true})
	__proto.ClickSwitch=function(){}
	__proto.OnShow=function(){}
	__proto.OnHide=function(){}
	__proto.destroy=function(){
		this.OnHide();
		this._p=null;
	}

	__proto.UpdateZoneList=function(){
		for (var i=0;i < this._radioZones.length;++i){
			this._p.radioServerTab.delItem(this._radioZones[i]);
		};
		var c=0;
		for (var i=0;i < this._zones.length;++i){
			if (!this._showTest && (this._zones[i].zoneID==9999||this._zones[i].zoneID==9))
				continue ;
			var radio;
			if (c >=this._radioZones.length){
				radio=BootUIUtil.CloneRadio(this._p.radioT);
				this._radioZones.push(radio);
				}else{
				radio=this._radioZones[c];
			}
			radio.label=this._zones[i].zoneName;
			radio.name="item"+c;
			this._p.radioServerTab.addItem(radio);
			c++;
		};
		var findIdx=Math.max(0,this._zones.length-1);
		if (GameCfg.IsNeiWang){
			for (var i=this._zones.length-1;i >=0;i--){
				if (this._zones[i].zoneID==9999){
					findIdx=i;
					break ;
				}
			}
			}else{
			for (var i=this._zones.length-1;i >=0;i--){
				if (this._zones[i].zoneID !=9999){
					findIdx=i;
					break ;
				}
			}
		}
		this._p.radioServerTab.selectedIndex=findIdx;
	}

	__proto.Login=function(){}
	return SelServerMediator;
})()


//class boots.selserver.med.LoadingMediator
var LoadingMediator=(function(){
	function LoadingMediator(p){
		this._title=null;
		this._p=null;
		this._p=p;
		this._p.labRefresh.on("click",this,this.clickRefresh);
	}

	__class(LoadingMediator,'boots.selserver.med.LoadingMediator');
	var __proto=LoadingMediator.prototype;
	Laya.imps(__proto,{"boots.selserver.med.ISelServerMediator":true})
	__proto.OnShow=function(){
		EventCenter.On("loading_title",this,this.onTitle);
		EventCenter.On("loading_progress",this,this.onProgress);
	}

	//UpdateProgress(0);
	__proto.OnHide=function(){
		EventCenter.Off("loading_title",this,this.onTitle);
		EventCenter.Off("loading_progress",this,this.onProgress);
	}

	__proto.destroy=function(){
		this.OnHide();
		this._p=null;
	}

	__proto.clickRefresh=function(){
		PlatformLoginUtil.Reload(2);
	}

	__proto.onTitle=function(title){
		this.SetTitle(title);
	}

	__proto.onProgress=function(v){
		this.SetProgress(v);
	}

	__proto.SetTitle=function(title){
		this._title=title;
		this._p.txtDesc.text=BootUtil.FormatStr(this._title,["0%"]);
	}

	__proto.SetProgress=function(value){
		if (value > 1)value=1;
		var txt=BootUtil.FormatStr(this._title,[(value*100|0)+"%"]);
		this._p.txtDesc.text=txt;
		this.UpdateProgress(value);
	}

	__proto.UpdateProgress=function(value){
		this._p.imgProg.scaleX=value;
		this._p.sprYun.x=this._p.imgProg.x+this._p.imgProg.width *value-this._p.sprYun.width/2;
	}

	return LoadingMediator;
})()


/**
*启动器配置加载
*/
//class boots.LoadBootCfg
var LoadBootCfg=(function(){
	function LoadBootCfg(){
		this._line=null;
		this._txt=null;
		this._comp=null;
		this._bg=null;
		this.BOOTVERSION="";
		this.gameCdn="";
		this.iosParams="";
		//-----------------小游戏加载
		this.srclist=null;
		this.prog=0;
		this.proindex=0;
	}

	__class(LoadBootCfg,'boots.LoadBootCfg');
	var __proto=LoadBootCfg.prototype;
	//=======================================================
	__proto.ParseWebParam=function(){
		this.BOOTVERSION=GameCfg.BOOTVERSION;
	}

	__proto.ParseParams=function(){}
	__proto.StartFristShow=function(){
		this._bg=new Image();
		this._bg.size(Laya.stage.width,Laya.stage.height);
		Scene.root.addChild(this._bg);
		this._bg.skin="res/ui/image/boot/beijingnew.png";
	}

	// 版本文件加载
	__proto.Start=function(callback){
		this._comp=callback;
		Laya.stage.on("resize",this,this.ResizeHandler);
		this.ResizeHandler();
		if (!Browser.IsMinG &&(Render.isConchApp|| NativeUtil.IsWebview)){
		}
		else{
			this.LoadCfg();
		}
	}

	__proto.ResizeHandler=function(){
		this._bg && this._bg.size(Laya.stage.width,Laya.stage.height);
	}

	// boot配置加载
	__proto.LoadCfg=function(){
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
		Laya.loader.load(this.BOOTVERSION+"/"+"bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
	}

	__proto.onCfgComplete=function(data){
		if (!data){
			console.warn("boot配置文件不存在。");
			this.LoadVersion();
			}else{
			ResourceVersionEx.manifest=data.version;
			laya.net.AtlasInfoManager._onInfoLoaded(null,data.atlas);
			this.StartLoadingRes();
		}
	}

	// 加载版本文件（只有配置文件没加载到，才提前加载一手版本文件）
	__proto.LoadVersion=function(){
		Laya.loader.load(this.BOOTVERSION+"/version.json",Handler.create(this,this.OnVersionComp),Handler.create(this,this.OnVersionProg,null,false),"json");
	}

	__proto.OnVersionProg=function(per){}
	__proto.OnVersionComp=function(data){
		ResourceVersionEx.manifest=data;
		this.StartLoadAtlasConfig();
	}

	// 开始加载图集配置文件
	__proto.StartLoadAtlasConfig=function(){
		this.OnAtlasConfigProg(0);
		Laya.loader.load("fileconfig.json",Handler.create(this,this.OnAtlasConfigComp),Handler.create(this,this.OnAtlasConfigProg,null,false),"json");
	}

	__proto.OnAtlasConfigProg=function(per){}
	//_txt.text="图集文件加载中："+(per *100 | 0)+"%";
	__proto.OnAtlasConfigComp=function(data){
		var comp=Handler.create(this,this.StartLoadingRes);
		laya.net.AtlasInfoManager._onInfoLoaded(comp,data);
	}

	/**
	*开始加载loading资源
	*/
	__proto.StartLoadingRes=function(){
		var arr=SelServerPanelExt.uiView.loadList.concat();
		if(Web37Util.isWideScreen)
			arr.push("res/ui/image/boot/ditu_web.jpg");
		Laya.loader.load(arr,Handler.create(this,this.OnLoadingResComp),Handler.create(this,this.OnLoadingResProg,null,false));
	}

	__proto.OnLoadingResProg=function(per){}
	//_txt.text="资源加载中："+(per *100 | 0)+"%";
	__proto.OnLoadingResComp=function(){
		this._comp.run();
		this._comp=null;
	}

	__proto.Stop=function(){
		this._bg && this._bg.destroy();
		this._bg=null;
		Laya.stage.off("resize",this,this.ResizeHandler);
	}

	__proto.onStartLoad=function(){
		this.srclist=[];
		this.srclist.push('engine');
		this.srclist.push('datasets');
		this.srclist.push('net');
		this.srclist.push('enem');
		this.srclist.push('pages');
		this.srclist.push('com');
		this.loadSubpackage();
		EventCenter.Event("loadmain_title","资源加载中:");
		EventCenter.Event("loadmain_progress",0);
		Laya.timer.loop(100,this,this.EventValueChange)
	}

	__proto.EventValueChange=function(){
		if (this.prog <=Math.floor(50*(this.proindex+1)/6)&&this.prog <=50){
			if (this.prog> Math.floor(50*this.proindex/6))
				this.prog++;
			else
			this.prog=Math.floor(50*this.proindex/6);
			EventCenter.Event("loadmain_progress",this.prog/100);
		}
		else{
			Laya.timer.clearAll(this);
		}
	}

	__proto.loadSubpackage=function(index){
		(index===void 0)&& (index=0);
		this.proindex=index+1;
	}

	/**
	*进入游戏
	*/
	__proto.EnterGame=function(){
		EventCenter.Event("loadmain_progress",50/100);
		BootUtil.Log("GameMainStart!");
		com.GameMain.Ins.GameStart();
	}

	return LoadBootCfg;
})()


//class boots.selserver.SelServerUtil
var SelServerUtil=(function(){
	function SelServerUtil(){}
	__class(SelServerUtil,'boots.selserver.SelServerUtil');
	SelServerUtil.Init=function(){
		if (GameCfg.MONI_WAIWANG){
			GameCfg.GAMENAME=GameCfg.GAMENAME_37;
			GameCfg.CHANNEL=EnumChannel.P37H5.toString();
		}
		PlatformLoginUtil.Init();
		SelServerUtil.ShowSelServer(true,SelServerUtil.IsCanDirectEnter()? 2 :1);
	}

	SelServerUtil.IsCanDirectEnter=function(){
		return GameCfg.LOGINTYPE==2
		&& PlatformLoginUtil.vo.server_ip !=null && PlatformLoginUtil.vo.server_ip !=""
		&& (!PlatformLoginUtil.login.hasSDK || PlatformLoginUtil.login.isVerify)
	}

	SelServerUtil.ShowSelServer=function(value,type){
		if (value){
			if (SelServerUtil._loginPanel==null){
				SelServerUtil._loginPanel=new SelServerPanelExt();
			}
			if (type !=3)
				SelServerUtil.PlayBgMusic();
			Scene.root.addChild(SelServerUtil._loginPanel);
			SelServerUtil._loginPanel.zOrder=29;
			SelServerUtil._loginPanel.onOpened(type);
		}
		else{
			if (SelServerUtil._loginPanel !=null && SelServerUtil._loginPanel.medType==type){
				SelServerUtil._loginPanel.destroy();
				SelServerUtil._loginPanel=null;
			}
		}
	}

	SelServerUtil.PlayBgMusic=function(){
		var url="res/ui/image/boot/login.mp3";
		if (SoundManager._bgMusic !=URL.formatURL(url)){
			SoundManager.playMusic(url);
		}
	}

	SelServerUtil.SelServer=function(){
		PlatformLoginUtil.OnSelSever();
		boots.selserver.SelServerUtil.ShowSelServer(true,2);
	}

	SelServerUtil.GetServerStateIcon=function(state){
		if (state==0)
			return "res/ui/image/boot/_ui_icon_weihu.png";
		else if (state==2)
		return "res/ui/image/boot/_ui_icon_tongchang.png";
		else
		return "res/ui/image/boot/_ui_icon_tongchang.png";
	}

	SelServerUtil.TestGroupId=9999;
	SelServerUtil.TestGroupId2=9;
	SelServerUtil._loginPanel=null;
	return SelServerUtil;
})()


//class boots.selserver.EnumSelServerType
var EnumSelServerType=(function(){
	function EnumSelServerType(){}
	__class(EnumSelServerType,'boots.selserver.EnumSelServerType');
	EnumSelServerType.SELSERVER=1;
	EnumSelServerType.LOADMAIN=2;
	EnumSelServerType.LOADING=3;
	return EnumSelServerType;
})()


//class boots.BootLang
var BootLang=(function(){
	function BootLang(){}
	__class(BootLang,'boots.BootLang');
	BootLang.JZZCX="资源加载中:";
	BootLang.JMZCX="资源加载中:";
	BootLang.DQZCX="资源加载中:";
	return BootLang;
})()


/**
*服务器组
*/
//class boots.selserver.vo.SelZoneVo
var SelZoneVo=(function(){
	function SelZoneVo(){
		// 大区id
		this.zoneID=0;
		// 大区名字
		this.zoneName=null;
		this.servers=[];
	}

	__class(SelZoneVo,'boots.selserver.vo.SelZoneVo');
	var __proto=SelZoneVo.prototype;
	__proto.AddServer=function(vo){
		this.servers.push(vo);
	}

	__proto.GetServer=function(ip,port,zoneId){
		for (var i=0;i < this.servers.length;++i){
			var v=this.servers[i];
			if (v.serverIP==ip && v.serverPort==port && v.serverID==zoneId)
				return v;
		}
		return null;
	}

	__getset(0,__proto,'newestServer',function(){
		for (var i=this.servers.length-1;i >=0;--i){
			var v=this.servers[i];
			if (!v.IsNotOpen())
				return v;
		}
		return this.servers[this.servers.length-1];
	});

	return SelZoneVo;
})()


/**
*单个服务器数据
*/
//class boots.selserver.vo.SelServerVo
var SelServerVo=(function(){
	function SelServerVo(){
		// 区服名字
		this.serverName=null;
		// 区服id
		this.serverID=0;
		// 服务器ip
		this.serverIP=null;
		// 服务器端口
		this.serverPort=0;
		// 所属大区ID
		this.zoneId=0;
		// 主程序版本号
		this.mainversion=null;
		//
		this.time=0;
		//sno编号
		this.snoNum=0;
		// 服务器标识(火爆)
		this.serverTag=0;
		// 服务器状态(0-维护 1-开启)
		this.serverState=1;
	}

	__class(SelServerVo,'boots.selserver.vo.SelServerVo');
	var __proto=SelServerVo.prototype;
	// 服务器是否没开（维护或者未开放）
	__proto.IsNotOpen=function(){
		return this.serverState==0;
	}

	return SelServerVo;
})()


//class boots.RunDriverEx
var RunDriverEx=(function(){
	function RunDriverEx(){}
	__class(RunDriverEx,'boots.RunDriverEx');
	RunDriverEx.init=function(){
		if (Render.isConchApp){
			HTMLImage.create=function (width,height,format){
				var tex=new Texture2D(width,height,format,false,false);
				tex.wrapModeU=1;
				tex.wrapModeV=1;
				return tex;
			}
			Laya.Shader.prototype.uploadTexture2D=function (value,alphaMask){
				var CTX=WebGLContext;
				if(CTX._activeTextures[0]!==value){
					CTX.activeTexture(WebGL.mainContext,0x84C0);
					CTX.bindTexture(WebGL.mainContext,CTX.TEXTURE_2D,value);
					CTX._activeTextures[0]=value;
				}
				if (alphaMask && CTX._activeTextures[1]!==alphaMask){
					CTX.activeTexture(WebGL.mainContext,0x84C1);
					CTX.bindTexture(WebGL.mainContext,CTX.TEXTURE_2D,alphaMask);
					CTX._activeTextures[1]=alphaMask;
				}
			}
		}
		Laya.BitmapFont.prototype._drawText=function (text,sprite,drawX,drawY,align,width){
			var tWidth=this.getTextWidth(text);
			var tTexture;
			var dx=0;
			align==="center" && (dx=(width-tWidth)/ 2);
			align==="right" && (dx=(width-tWidth));
			drawY=Math.round(drawY);
			var tx=0;
			for (var i=0,n=text.length;i < n;i++){
				tTexture=this.getCharTexture(text.charAt(i));
				if (tTexture){
					var realx=Math.round(drawX+tx+dx);
					sprite.graphics.drawImage(tTexture,realx,drawY);
					tx+=this.getCharWidth(text.charAt(i));
				}
			}
		}
	}

	return RunDriverEx;
})()


//class boots.utils.BootUIUtil
var BootUIUtil=(function(){
	function BootUIUtil(){}
	__class(BootUIUtil,'boots.utils.BootUIUtil');
	BootUIUtil.AddButtonFeed=function(btn){
		btn.on("mousedown",null,BootUIUtil.BeginFeedBack);
		btn.on("mouseup",null,BootUIUtil.EndFeedBack);
		btn.on("mouseout",null,BootUIUtil.EndFeedBack);
	}

	BootUIUtil.BeginFeedBack=function(e){
		var btn=e.currentTarget;
		btn.tag={downX:btn.x,downY:btn.y,isFeed:true};
		btn.pos(btn.x+2,btn.y+2);
	}

	BootUIUtil.EndFeedBack=function(e){
		var btn=e.currentTarget;
		if (btn.tag==null)return;
		btn.pos(btn.tag.downX,btn.tag.downY);
		btn.tag={downX:btn.x,downY:btn.y,isFeed:false};
	}

	BootUIUtil.CloneRadio=function(src){
		var ret=new Radio();
		ret.skin=src.skin;
		ret.sizeGrid=src.sizeGrid;
		ret.label=src.label;
		ret.labelFont=src.labelFont;
		ret.labelSize=src.labelSize;
		ret.stateNum=src.stateNum;
		ret.labelColors=src.labelColors;
		ret.labelPadding=src.labelPadding;
		ret.labelAlign=src.labelAlign;
		ret._autoSize=true;
		ret.text.align="center";
		ret.text.valign="middle";
		ret.text.width=src.width;
		ret.text.height=src.height;
		return ret;
	}

	return BootUIUtil;
})()


//class boots.platform.vo.PlatformLoginBase
var PlatformLoginBase=(function(){
	function PlatformLoginBase(pid,cid){
		this._platformID=0;
		this._channelID=0;
		this._isLoginSDK=false;
		this._isVerify=false;
		this._platformID=pid;
		this._channelID=cid;
	}

	__class(PlatformLoginBase,'boots.platform.vo.PlatformLoginBase');
	var __proto=PlatformLoginBase.prototype;
	// 注册PlatformBase的消息回调
	__proto.RegisterPlatformCallBack=function(caller,method){}
	__proto.GetAgentInfo=function(obj){}
	/**登录SDK**/
	__proto.LoginSDK=function(){}
	/**登出SDK**/
	__proto.LogoutSDK=function(){}
	/**验证SDK账号**/
	__proto.VerifySDK=function(url){
		var util=new RequestUtil(this,this.OnVerify,this.OnVerify);
		util.Send(url);
	}

	// 验证成功（里面有user，server_token，最近登陆服务器）
	__proto.OnVerify=function(result){}
	__proto.OnSelServer=function(){}
	__proto.QuitGame=function(){
		if (Render.isConchApp && Browser.onAndroid){
			AlertBootExt.Show("是否退出游戏？",31,null,function(){
				window.conch.exit();
			});
		}
	}

	__getset(0,__proto,'hasSDK',function(){
		return false;
	});

	/**是否登录到平台SDK**/
	__getset(0,__proto,'isLoginSDK',function(){
		return this._isLoginSDK;
	});

	/**是否验证成功**/
	__getset(0,__proto,'isVerify',function(){
		return this._isVerify;
	});

	__getset(0,__proto,'platformID',function(){
		return this._platformID;
	});

	__getset(0,__proto,'channelID',function(){
		return this._channelID;
	});

	return PlatformLoginBase;
})()


//class boots.LoadBoot
var LoadBoot=(function(){
	function LoadBoot(){
		this.Root=null;
		if (Browser.IsMinG){
			if(Browser.inWeChat){
				if(Browser.IszhijianWeChat)
					this.Root=new LoadBootWXZJ();
				else
				this.Root=new LoadBootWX();
			}
			else if(Browser.inQQ)
			this.Root=new LoadBootQQ();
			else if(Browser.inBiLi)
			this.Root=new LoadBootbilibili();
		}
		else if (Render.isConchApp|| NativeUtil.IsWebview)
		this.Root=new LoadBootApp();
		else
		this.Root=new LoadBootCfg();
	}

	__class(LoadBoot,'boots.LoadBoot');
	__static(LoadBoot,
	['Ins',function(){return this.Ins=new LoadBoot();}
	]);
	return LoadBoot;
})()


// 和EnumUILayer一致
//class boots.enums.EnumBootUILayer
var EnumBootUILayer=(function(){
	function EnumBootUILayer(){}
	__class(EnumBootUILayer,'boots.enums.EnumBootUILayer');
	EnumBootUILayer.BOOTLOADING=26;
	EnumBootUILayer.LOGIN=29;
	EnumBootUILayer.TOTAST=31;
	return EnumBootUILayer;
})()


//class boots.utils.BootUtil
var BootUtil=(function(){
	function BootUtil(){}
	__class(BootUtil,'boots.utils.BootUtil');
	var __proto=BootUtil.prototype;
	__proto.GetStackTrace=function(pre){
		var str="";
		str+="// ==========================================================================\n";
		str+=pre+"\n";
		var caller=arguments.callee.caller;
		var i=0;
		str+=("***----------------------------------------  ** "+(i+1))+"\n";
		while (caller && i < 10){
			str+=(caller.toString())+"\n";
			caller=caller.caller;
			i++;
			str+=("***---------------------------------------- ** "+(i+1))+"\n";
		}
		str+="// ==========================================================================\n";
		return str;
	}

	BootUtil.GetTimer=function(){
		var ret=0;
		ret=new Date().getTime();;
		return ret;
	}

	BootUtil.Log=function(log){
		var ret=0;
		ret=new Date().getTime();;
		log="["+ret+"]"+log;
		console.log(log);
	}

	BootUtil.encode=function(o){
		return JSON.stringify(o);
	}

	BootUtil.decode=function(s){
		var ret=null;
		try{
			if (s==null || s=="")
				return null;
			ret=JSON.parse(s);
		}
		catch (err){
			console.log("decode json error:"+err.message);
			ret=null;
		}
		return ret;
	}

	BootUtil.FormatStr=function(str,params){
		if (str==null)
			return str;
		if (params !=null){
			var keyStr="{@}";
			var isNumRep=(str.indexOf(keyStr)==-1);
			var len=params.length;
			var param;
			for (var i=0;i < len;++i){
				if (isNumRep)
					keyStr="{"+(i)+"}";
				param=params[i];
				str=str.replace(keyStr,param);
			}
		}
		return str;
	}

	BootUtil.isHtml=function(str){
		var reg=/<.*?>/g;
		return reg.test(str);
	}

	BootUtil.RemoveHTMLTag=function(text){
		return text==null ? text :text.replace(/<.*?>/g,"");
	}

	__static(BootUtil,
	['Ins',function(){return this.Ins=new BootUtil();}
	]);
	return BootUtil;
})()


//class boots.nativee.NativeInterfaceWebView
var NativeInterfaceWebView=(function(){
	function NativeInterfaceWebView(){}
	__class(NativeInterfaceWebView,'boots.nativee.NativeInterfaceWebView');
	var __proto=NativeInterfaceWebView.prototype;
	Laya.imps(__proto,{"boots.nativee.INativeInterface":true})
	__proto.HasNative=function(){
		return Browser.window.NativeUtilWebView !=null && typeof(Browser.window.NativeUtilWebView)!=undefined;
	}

	/**
	*调用native函数
	*/
	__proto.CallPlatform=function(data){
		console.log("CallPlatform:"+data);
		Browser.window.NativeUtilWebView.CallFromJS(data);
	}

	return NativeInterfaceWebView;
})()


/**
*游戏配置
*@author Administrator
*
*/
//class boots.GameCfg
var GameCfg=(function(){
	function GameCfg(){}
	__class(GameCfg,'boots.GameCfg');
	__getset(1,GameCfg,'IsWetestApp',function(){
		return GameCfg.GAMENAME==GameCfg.GAMENAME_WAIWANG;
	});

	__getset(1,GameCfg,'IsNeiWang',function(){
		if(Web37Util.isOpen||Browser.onMiniGame)
			return false;
		if(WebfingertipUtil.isOpen||WebmojieUtil.isOpen){
			console.log("WebfingertipUtil.isOpen  ？  GameCfg:游戏配置");
			return false;
		}
		return GameCfg.GAMENAME==GameCfg.GAMENAME_NEIWANG;
	});

	GameCfg.ParseWebParam=function(){
		if(Web37Util.isOpen){
			var param=window.webParam();
			GameCfg.BOOTVERSION=param["boot"];
			GameCfg.SIGN="v_4";
		}
		else if(WebfingertipUtil.isOpen){
			console.log("WebfingertipUtil.isOpen  ？  GameCfg:获取服务器列表");
			var param=window.zhijianParams();
			GameCfg.BOOTVERSION=param["boot"];
			GameCfg.GAMENAME=GameCfg.GAMENAME_zhijianWEB;
			var str=window.zhijianExt();
			var obj=JSON.parse(str);
			if(obj["istest"]==1)
				GameCfg.SIGN="v_17";
			else if (param["cpgameid"]==197){
				GameCfg.SIGN="v_10";
			}
			else if (param["cpgameid"]==211){
				GameCfg.SIGN="v_16";
			}
			else if (param["cpgameid"]==224){
				GameCfg.SIGN="v_18";
			}
		}
		else if(WebmojieUtil.isOpen){
			console.log("WebmojieUtil.isOpen  ？  GameCfg:获取服务器列表");
			var param=window.mojieParams();
			GameCfg.GAMENAME=GameCfg.GAMENAME_MJ;
			GameCfg.SIGN="v_19";
		}
		else{
			var search=Browser.window.location.search;
			GameCfg.ParseParams(search);
			if(Browser.inQQ){
				if (Browser.release)
					GameCfg.SIGN="v_7";
				else
				GameCfg.SIGN="t_1";
			}
			if(Browser.inWeChat){
				if(Browser.IszhijianWeChat){
					if (Browser.release)
						GameCfg.SIGN="v_15";
					else
					GameCfg.SIGN="t_3";
				}
				else{
					if (Browser.release)
						GameCfg.SIGN="v_11";
					else
					GameCfg.SIGN="t_2";
				}
			}
			if(Browser.inBiLi){
				if (Browser.release)
					GameCfg.SIGN="v_18";
				else
				GameCfg.SIGN="t_4";
			};
			var reloadparam=LocalStorage.getItem("reloadparam");
			LocalStorage.removeItem("reloadparam");
			GameCfg.ParseReloadParam(decodeURIComponent(reloadparam));
		}
	}

	GameCfg.ParseAppParam=function(obj){
		for (var key in obj){
			if (key=="reloadparam"){
				GameCfg.ParseReloadParam(decodeURIComponent(obj[key]));
			}
			else if (key=="params"){
				GameCfg.ParseAppBootParam(obj[key]);
			}
			else{
				if (key=="gamename")
					GameCfg.GAMENAME=obj[key];
				else if (key=="logintype")
				GameCfg.LOGINTYPE=parseInt(obj[key]);
				else if (key=="channel")
				GameCfg.CHANNEL=obj[key];
				else if (key=="sign")
				GameCfg.SIGN=obj[key];
				else if (key=="deviceid")
				GameCfg.DEVICEID=obj[key];
				else if(key=="platform")
				GameCfg.PLATFORM=obj[key]
			}
		}
	}

	GameCfg.ParseReloadParam=function(reloadparam){
		if (reloadparam !=null && reloadparam !=""){
			var obj=JSON.parse(reloadparam);
			if (obj !=null){
				for (var key in obj){
					if (key=="logintype")
						GameCfg.LOGINTYPE=parseInt(obj[key]);
					else if (key=="sign")
					GameCfg.SIGN=obj[key];
					else
					GameCfg.RELOAD_PARAM[key]=obj[key];
				}
			}
		}
	}

	GameCfg.ParseParams=function(search){
		console.log("ParseParams:"+search);
		if (search !=null && search !=""){
			if (search[0]=="?")
				search=search.substr(1);
			var arr=search.split("&");
			for (var i=0;i < arr.length;++i){
				var p=arr[i].split("=");
				if (p[0]=="gamename")
					GameCfg.GAMENAME=p[1];
				else if (p[0]=="boot")
				GameCfg.BOOTVERSION=p[1];
				else if (p[0]=="channel")
				GameCfg.CHANNEL=p[1];
				else if (p[0]=="sign")
				GameCfg.SIGN=p[1];
			}
		}
	}

	GameCfg.ParseAppBootParam=function(obj){
		for (var key in obj){
			if (key=="boot")
				GameCfg.BOOTVERSION=obj[key];
		}
	}

	GameCfg.getWssOrWs=function(){
		if(Browser.inQQ)return true;
		if(Browser.inWeChat)return true;
		if(Browser.inBiLi)return true;
		if(boots.GameCfg.GAMENAME==boots.GameCfg.GAMENAME_FINGERAPP)return true;
		if(WebfingertipUtil.isOpen||WebmojieUtil.isOpen)return true;
		var bool=window.isWebOpen();
		return bool;
	}

	GameCfg.ISBANSHU=false;
	GameCfg.isMultiRole=false;
	GameCfg.MONI_WAIWANG=false;
	GameCfg.MONI_ACCOUNT="1501750306";
	GameCfg.MONI_TOKEN="ZDllZVN4N1JxU040ZktvMnhieUxpeGk0cURtek1RMktRTGg5SklvbE44TkVvQnF5OHpwZU5JTU5wUjk0STdiUGhBM2VmMmMrQmdyVVpVWVVVT3hvdHVibjlkbmRLWENLWGpPV2IweG5IVXZ5YmRpMkhEVGJBQXJRUkhwcWZRNFVWTlVNdEtMMU9UUlBRWGp0VFFvUEN4eUlraEg4cys0bzNVelFHalB3dEU1Rk1mUnFDR2RFYnVwVGZkWUhoaXhhZGNpYndTajBNYzZUYzZoWUJick16SWtveVFRcnk5NA==";
	GameCfg.GAMENAME_WAIWANG="lsmjz_waiwang";
	GameCfg.GAMENAME_37="lsmjz_37ranbao";
	GameCfg.GAMENAME_NEIWANG="lsmjz_neiwang";
	GameCfg.GAMENAME_BANSHU="lsmjz_banshu";
	GameCfg.GAMENAME_BANSHU2="lsmjz_37banshu";
	GameCfg.GAMENAME_BMH="lsmjz_baomihua";
	GameCfg.GAMENAME_MJ="GAMENAME_MJ";
	GameCfg.GAMENAME_FINGERAPP="lsmjz_baomihua_cs";
	GameCfg.GAMENAME_XIYOUAPK="lsmjz_baomihua_xy";
	GameCfg.GAMENAME_ZHANGYUAPK="lsmjz_baomihua";
	GameCfg.GAMENAME_zhijianWEB="GAMENAME_zhijianWEB";
	GameCfg.DEVICEID="";
	GameCfg.BOOTVERSION="";
	GameCfg.LOGINTYPE=0;
	GameCfg.RELOAD_PARAM={};
	GameCfg.isGmOpen=false;
	GameCfg.SIGN="v_10002";
	__static(GameCfg,
	['PLATFORM',function(){return this.PLATFORM=EnumPlatformID.P37.toString();},'CHANNEL',function(){return this.CHANNEL=EnumChannel.PDev.toString();},'GAMENAME',function(){return this.GAMENAME=GameCfg.GAMENAME_NEIWANG;}
	]);
	return GameCfg;
})()


/**
*平台列表
*/
//class boots.platform.EnumPlatformID
var EnumPlatformID=(function(){
	function EnumPlatformID(){}
	__class(EnumPlatformID,'boots.platform.EnumPlatformID');
	EnumPlatformID.P37=1;
	EnumPlatformID.zhijian=6;
	EnumPlatformID.mohe=8;
	EnumPlatformID.zhangyu=10;
	EnumPlatformID.xiyou=12;
	EnumPlatformID.newMohe=15;
	return EnumPlatformID;
})()


/**
*平台回调工具类（切勿引用任何游戏相关类）
*封装统一和平台的互相调用接口
*△△△只有发布成APP这个才有用
*△△△平台[android，ios,etc..]
*/
//class NativeUtil
var NativeUtil=(function(){
	function NativeUtil(){}
	__class(NativeUtil,'NativeUtil');
	__getset(1,NativeUtil,'IsAndriodApp',function(){
		return NativeUtil.IsAndriodConchApp || NativeUtil.IsAndriodWebview;
	});

	__getset(1,NativeUtil,'IsIosApp',function(){
		return NativeUtil.IsIosConchApp || NativeUtil.IsIosWebview;
	});

	__getset(1,NativeUtil,'IsAndriodConchApp',function(){
		return Render.isConchApp && Browser.onAndroid;
	});

	__getset(1,NativeUtil,'IsAndriodWebview',function(){
		return !Render.isConchApp && Browser.onAndroid;
	});

	__getset(1,NativeUtil,'IsIosConchApp',function(){
		return Render.isConchApp && Browser.onIOS;
	});

	__getset(1,NativeUtil,'IsIosWebview',function(){
		return !Render.isConchApp && Browser.onIOS;
	});

	// 是否webview
	__getset(1,NativeUtil,'IsWebview',function(){
		return NativeUtil.IsAndriodWebview || NativeUtil.IsIosWebview;
	});

	// Native返回值了的才是Native
	__getset(1,NativeUtil,'isNative',function(){
		return NativeUtil.NATIVE_OBJ !=null;
	});

	NativeUtil.Register=function(id,caller,method){
		NativeUtil.MessagePool[id]={caller:caller,method:method};
	}

	NativeUtil.GameRestart=function(param){
		NativeUtil.CallPlatformWithObj({msgid:100,param:param});
		console.log("excute GameRestart Success");
	}

	NativeUtil.CallPlatform=function(data){
		if (NativeUtil._nativeInterface){
			NativeUtil._nativeInterface.CallPlatform(data);
		}
		else{
			BootUtil.Log("call native but no native");
		}
	}

	NativeUtil.CallPlatformWithObj=function(obj){
		try{
			var data=JSON.stringify(obj);
			NativeUtil.CallPlatform(data);
		}
		catch(error){
			BootUtil.Log("CallPlatformWithObj Error");
		}
	}

	NativeUtil.CallFromPlatform=function(value){
		try{
			var obj=(typeof value=='string')? JSON.parse(value):value;
			if (obj.msgid==2){
				NativeUtil.NATIVE_OBJ=obj;
				BootUtil.Log("CallFromPlatform[SUC]:"+value.toString());
				NativeUtil.OnNativeConnected();
			}
			else if (obj.msgid==9){
				if (obj["what"]=="EnterBackground"){
					Laya.stage.event("blur");
					}else if (obj["what"]=="EnterForeground"){
					Laya.stage.event("focus");
				}
				BootUtil.Log("CallFromPlatform[SUC]:"+value.toString());
			}
			else{
				var o=NativeUtil.MessagePool[obj.msgid];
				if (o){
					BootUtil.Log("CallFromPlatform[Suc]:"+value.toString());
					o.method.call(o.caller,obj);
				}
				else{
					BootUtil.Log("CallFromPlatform[Fail]:"+value.toString());
				}
			}
			if(obj["platform"] !=null){
				BootUtil.Log("解析参数platform[Suc]:"+obj["platform"]);
				GameCfg.PLATFORM=obj["platform"];
			}
			if(obj["channel"] !=null){
				BootUtil.Log("解析参数channel[Suc]:"+obj["channel"]);
				GameCfg.CHANNEL=obj["channel"];
			}
		}
		catch(error){
			BootUtil.Log("CallFromPlatform[ERROR]:"+value.toString());
		}
	}

	NativeUtil.ConnectNative=function(){
		if (NativeUtil._nativeInterface==null){
			if (Render.isConchApp){
				NativeUtil._nativeInterface=new NativeInterfaceConchApp();
				}else if (NativeUtil.IsAndriodWebview || NativeUtil.IsIosWebview){
				NativeUtil._nativeInterface=new NativeInterfaceWebView();
			}
		}
		if (NativeUtil._nativeInterface==null || !NativeUtil._nativeInterface.HasNative()){
			boot.Ins.OnNativeConnect();
			BootUtil.Log("PLATFORMCLASS  NULL");
		}
		else{
			BootUtil.Log("PLATFORMCLASS  EXIST");
			var obj={msgid:1};
			NativeUtil.CallPlatform(JSON.stringify(obj));
			Laya.timer.once(5000,null,NativeUtil.OnNativeConnected);
		}
	}

	NativeUtil.OnNativeConnected=function(){
		Laya.timer.clear(null,NativeUtil.OnNativeConnected);
		boot.Ins.OnNativeConnect();
		if (NativeUtil.NATIVE_OBJ !=null){
			BootUtil.Log("[ConnectNativeComplete]===Success");
		}
		else{
			BootUtil.Log("[ConnectNativeComplete]===Failed");
		}
	}

	NativeUtil.copyName=function(str){
		var obj={};
		obj.msgid=8;
		obj.text=str;
		NativeUtil.CallPlatformWithObj(obj);
	}

	NativeUtil._nativeInterface=null;
	NativeUtil.NATIVE_OBJ=null;
	NativeUtil.MessagePool={};
	return NativeUtil;
})()


//class boots.ResourceVersionEx
var ResourceVersionEx=(function(){
	function ResourceVersionEx(){}
	__class(ResourceVersionEx,'boots.ResourceVersionEx');
	ResourceVersionEx.getChunkVersion=function(thumbnail){
		var ret;
		if (ResourceVersionEx.manifest){
			ret=ResourceVersionEx.manifest[thumbnail];
			if (!ret)ret="1";
		}
		return ret;
	}

	ResourceVersionEx.addVersionPrefix=function(originURL){
		originURL=URL.getAdptedFilePath(originURL);
		if (ResourceVersionEx.manifest){
			if (ResourceVersionEx.isMapChunk(originURL)){
				return originURL;
			}
			else{
				var ver=ResourceVersionEx.manifest[originURL];
				if (!ver){
					var i1=originURL.indexOf("/");
					if (i1 > 0 && !isNaN(parseFloat(originURL.substr(0,i1)))){
						return originURL;
					}
					ver="1";
				}
				return ver+"/"+originURL;
			}
		}
		return originURL;
	}

	ResourceVersionEx.isMapChunk=function(url){
		return url.indexOf("res/map")!=-1 && url.indexOf("/chunks")!=-1;
	}

	ResourceVersionEx.initver="1";
	ResourceVersionEx.manifest=null;
	ResourceVersionEx.THUMBNAIL="thumbnail.jpg";
	return ResourceVersionEx;
})()


/**
*与NATIVE通信的消息id
*/
//class boots.nativee.EnumNativeID
var EnumNativeID=(function(){
	function EnumNativeID(){}
	__class(EnumNativeID,'boots.nativee.EnumNativeID');
	EnumNativeID.REQ_CONNECT=1;
	EnumNativeID.REC_CONNECT=2;
	EnumNativeID.REQ_BATERRY=3;
	EnumNativeID.REC_BATERRY=4;
	EnumNativeID.REQ_SIGNAL=5;
	EnumNativeID.REC_SIGNAL=6;
	EnumNativeID.REQ_EXIT=7;
	EnumNativeID.REQ_COPYCLIPBOARD=8;
	EnumNativeID.REC_BACKGROUND=9;
	EnumNativeID.REQ_RELOAD=100;
	EnumNativeID.REQ_SHOCK=101;
	EnumNativeID.REQ_SOUND_RECORD=1001;
	EnumNativeID.REQ_SOUND_RECORD_END=1002;
	EnumNativeID.REC_SOUND_RECORD_COMPLETE=1003;
	EnumNativeID.REQ_SOUND_PLAY=1004;
	EnumNativeID.REC_SOUND_PLAY_COMPLETE=1005;
	EnumNativeID.REQ_SOUND_STOP=1006;
	EnumNativeID.REC_SOUND_STOP_COMPLETE=1006;
	EnumNativeID.REQ_PLATFORM=10001;
	EnumNativeID.REC_PLATFORM=10002;
	EnumNativeID.REQ_UMENG=20001;
	EnumNativeID.REC_UMENG=20002;
	return EnumNativeID;
})()


//class boots.utils.Web37Util
var Web37Util=(function(){
	function Web37Util(){}
	__class(Web37Util,'boots.utils.Web37Util');
	//选服上报信息
	__getset(1,Web37Util,'reportServerData',function(){
		var data={};
		data.serverid=PlatformLoginUtil.vo.serverID;
		data.servername=PlatformLoginUtil.vo.server_name;
		data.rolename="";
		data.roleid="";
		data.rolelevel="";
		data.viplevel="";
		data.fightvalue="";
		data.balance="";
		data.country="";
		data.countryid="";
		data.countryrolename="";
		data.timestamp=new Date().getTime();
		data.rolecreatetime="";
		data.roles=[];
		return data;
	});

	__getset(1,Web37Util,'isOpen',function(){
		if(Browser.onMiniGame)return false;
		return window.isWebOpen();
	});

	/**是否用宽屏布局**/
	__getset(1,Web37Util,'isWideScreen',function(){
		return false;
	});

	Web37Util.report=function(type){
		if(!Web37Util.isOpen)
			return;
		var data=null;
		switch (type){
			case "server":
				data=Web37Util.reportServerData;
				break ;
			}
		if(data !=null)
			window.report(data,type);
		else
		console.log("report data does not exsit!type="+type);
	}

	Web37Util.REPORT_SERVER="server";
	Web37Util.REPORT_CREATE="create";
	Web37Util.REPORT_ENTERGAME="entergame";
	Web37Util.REPORT_LEVELUP="levelup";
	return Web37Util;
})()


//class boots.nativee.NativeInterfaceConchApp
var NativeInterfaceConchApp=(function(){
	function NativeInterfaceConchApp(){
		this.PLATFORMCLASS=null;
		if (this.PLATFORMCLASS==null && Laya.PlatformClass !=null){
			if (Browser.onAndroid)
				this.PLATFORMCLASS=Laya.PlatformClass.createClass("com.popcornie.lsmjz.nativee.NativeUtil");
			else if (Browser.onIOS)
			this.PLATFORMCLASS=Laya.PlatformClass.createClass("NativeUtil");
			else
			this.PLATFORMCLASS=Laya.PlatformClass.createClass("com.popcornie.lsmjz.nativee.NativeUtil");
		}
	}

	__class(NativeInterfaceConchApp,'boots.nativee.NativeInterfaceConchApp');
	var __proto=NativeInterfaceConchApp.prototype;
	Laya.imps(__proto,{"boots.nativee.INativeInterface":true})
	__proto.HasNative=function(){
		return this.PLATFORMCLASS !=null;
	}

	/**
	*调用native函数
	*/
	__proto.CallPlatform=function(data){
		if (this.PLATFORMCLASS !=null){
			if (Browser.onIOS)
				this.PLATFORMCLASS.call("CallFromJS:",data);
			else
			this.PLATFORMCLASS.call("CallFromJS",data);
		}
		else{
			BootUtil.Log("call native but no native");
		}
	}

	return NativeInterfaceConchApp;
})()


//class boots.platform.EnumPlatform
var EnumPlatform=(function(){
	function EnumPlatform(){}
	__class(EnumPlatform,'boots.platform.EnumPlatform');
	EnumPlatform.TYPE_SHARE=1;
	EnumPlatform.TYPE_SUBSCRIBE=2;
	EnumPlatform.TYPE_WD_DOWNLOAD=3;
	EnumPlatform.TYPE_VERIFY=4;
	EnumPlatform.TYPE_SAVE_DESKTOP=5;
	EnumPlatform.REQ_LOGIN=1;
	EnumPlatform.REC_LOGIN_SUC=2;
	EnumPlatform.REC_LOGIN_FAIL=3;
	EnumPlatform.REQ_LOGOUT=10;
	EnumPlatform.REC_LOGOUT_SUC=11;
	EnumPlatform.REC_LOGOUT_FAIL=12;
	EnumPlatform.REQ_PAY=30;
	EnumPlatform.REC_PAY_SUC=31;
	EnumPlatform.REC_PAY_FAIL=32;
	EnumPlatform.REQ_REPORT=40;
	EnumPlatform.REQ_QUIT=50;
	EnumPlatform.GAMEDATA_TYPE_CREATE_ROLE=1;
	EnumPlatform.GAMEDATA_TYPE_ENTER_GAME=2;
	EnumPlatform.GAMEDATA_TYPE_ROLE_UPDATE=3;
	EnumPlatform.GAMEDATA_TYPE_EXIT=4;
	return EnumPlatform;
})()


//class boots.GameFont
var GameFont=(function(){
	function GameFont(){
		this._caller=null;
		this._method=null;
	}

	__class(GameFont,'boots.GameFont');
	var __proto=GameFont.prototype;
	__proto.Init=function(caller,method){
		this._caller=caller;
		this._method=method;
		BootUtil.Log("加载字体文件1");
		Laya.loader.load("res/ui/image/boot/DFYuanW5.ttf",Handler.create(this,this.ConchLoadFontComp));
	}

	/**
	*字体加载完成
	*/
	__proto.ConchLoadFontComp=function(){
		if (this._method!=null)
			this._method.call(this._caller);
		this._method=this._caller=null;
	}

	GameFont.YAHEI="DFYuanW5";
	GameFont.DEFAULT="DFYuanW5";
	__static(GameFont,
	['Ins',function(){return this.Ins=new GameFont();}
	]);
	return GameFont;
})()


/**
*参数字符串常量
*/
//class boots.enums.EnumParamStr
var EnumParamStr=(function(){
	function EnumParamStr(){}
	__class(EnumParamStr,'boots.enums.EnumParamStr');
	EnumParamStr.ACCOUNT="account";
	EnumParamStr.SERVER_HOST="serverhost";
	EnumParamStr.SERVER_PORT="serverport";
	EnumParamStr.SERVER_ID="serverid";
	EnumParamStr.SERVER_NAME="servername";
	EnumParamStr.ADULT="adult";
	EnumParamStr.TIME="time";
	EnumParamStr.LOGINTYPE="logintype";
	EnumParamStr.BOOT_VERSION="boot";
	EnumParamStr.DEVICEID="deviceid";
	EnumParamStr.PLATFORM="platform";
	EnumParamStr.CHANNEL="channel";
	EnumParamStr.RELOAD_PARAM="reloadparam";
	EnumParamStr.SIGN="sign";
	EnumParamStr.BOOT_CFG="bootcfg";
	EnumParamStr.MAINVERSION="mainversion";
	EnumParamStr.NoticeStr="NoticeStr";
	return EnumParamStr;
})()


//class boots.selserver.SelServerEvent
var SelServerEvent=(function(){
	function SelServerEvent(){}
	__class(SelServerEvent,'boots.selserver.SelServerEvent');
	SelServerEvent.LOADMAIN_TITLE="loadmain_title";
	SelServerEvent.LOADMAIN_PROG="loadmain_progress";
	SelServerEvent.LOADING_TITLE="loading_title";
	SelServerEvent.LOADING_PROG="loading_progress";
	SelServerEvent.LOADING_LETTER="LOADING_LETTER";
	SelServerEvent.APP_NATIVE="APP_NATIVE";
	return SelServerEvent;
})()


//class boot
var boot=(function(){
	function boot(){
		boot.Ins=this;
		Text.defaultFont=GameFont.DEFAULT;
		Text.defaultFontSize=18;
		URL.exportSceneToJson=true;
		LoaderManager.DEBUG_RECORDLOAD=true;
		Browser.FIRSTRENDER2=false;
		var scaleMode=this.GetScaleMode();
		this.CalDesignSize(scaleMode);
		MiniAdpter.init();
		Laya.init(boot.designW,boot.designH,WebGL);
		Laya.stage.alignV="middle";
		Laya.stage.alignH="center";
		Laya.stage.scaleMode=scaleMode;
		RunDriverEx.init();
		LoadBoot.Ins.Root.StartFristShow();
		if (Browser.IsMinG){
			GameFont.Ins.Init(this,null);
			this.OnFont();
		}
		else{
			GameFont.Ins.Init(this,this.OnFont);
		}
		Browser.window.addEventListener("resize",this.onWindowResize);
	}

	__class(boot,'boot');
	var __proto=boot.prototype;
	__proto.onWindowResize=function(){
		console.log("onWindowRezize:"+Browser.clientWidth+"-"+Browser.clientHeight+"_"+Browser.width+"_"+Browser.height);
		boot.Ins.CalDesignSize(Laya.stage.scaleMode);
		Laya.stage.width=boot.designW;
		Laya.stage.height=boot.designH;
	}

	__proto.CalDesignSize=function(scaleMode){
		if(Web37Util.isWideScreen){
			boot.designW=Browser.clientWidth;
			boot.designH=Browser.clientHeight;
			return;
		}
		if (scaleMode=="showall" && (Browser.onAndroid || Browser.onIOS)){
			var cw=Browser.clientWidth;
			var ch=Browser.clientHeight;
			if (cw > ch){
				cw=Browser.clientHeight;
				ch=Browser.clientWidth;
			};
			var cr=cw / ch;
			var dr=boot.designW / boot.designH;
			if (cr !=dr){
				boot.designW=boot.initDesignW;
				boot.designH=boot.initDesignH;
				dr=boot.designW / boot.designH;
				if (cr > dr){
					boot.designW=Math.round(boot.initDesignH *cr);
				}
				else if (cr < dr){
					boot.designH=Math.round(boot.initDesignW / cr);
				}
			}
		}
		if (WebfingertipUtil.isOpen||WebmojieUtil.isOpen){
			if(Browser.onMobile){
				var cw=Browser.clientWidth;
				var ch=Browser.clientHeight;
				if (cw > ch){
					cw=Browser.clientHeight;
					ch=Browser.clientWidth;
				};
				var cr=cw / ch;
				var dr=boot.designW / boot.designH;
				if (cr !=dr){
					boot.designW=boot.initDesignW;
					boot.designH=boot.initDesignH;
					dr=boot.designW / boot.designH;
					if (cr > dr){
						boot.designW=Math.round(boot.initDesignH *cr);
					}
					else if (cr < dr){
						boot.designH=Math.round(boot.initDesignW / cr);
					}
				}
			}
		}
	}

	__proto.OnFont=function(){
		if (Browser.IsMinG){
			LoadBoot.Ins.Root.ParseParams();
			LoadBoot.Ins.Root.Start(Handler.create(this,this.BootCfgHandler));
			LoadBoot.Ins.Root.ParseWebParam();
		}
		else if (Render.isConchApp|| NativeUtil.IsWebview){
			this.AppBoot();
			LoadBoot.Ins.Root.Start(Handler.create(this,this.BootCfgHandler));
			LoadBoot.Ins.Root.ParseWebParam();
		}
		else{
			GameCfg.ParseWebParam();
			LoadBoot.Ins.Root.Start(Handler.create(this,this.BootCfgHandler));
			LoadBoot.Ins.Root.ParseWebParam();
		}
	}

	// }
	__proto.GetScaleMode=function(){
		var ret="showall";
		var search=Browser.window.location.search;
		if (search !=null && search !=""){
			search=search.substr(1);
			var arr=search.split("&");
			for (var i=0;i < arr.length;++i){
				var p=arr[i].split("=");
				if (p[0]=="scaleMode"){
					ret=p[1];
					break ;
				}
			}
		}
		if (WebfingertipUtil.isOpen||WebmojieUtil.isOpen){
			ret="showall";
		}
		return ret;
	}

	__proto.BootCfgHandler=function(){
		if (Browser.window.loadingView !=null)
			Browser.window.loadingView.loading(100);
		LoadBoot.Ins.Root.Stop();
		SelServerUtil.Init();
		UMengUtil.AddPoint("bootloaded","","",0);
	}

	/**
	*app加载
	*/
	__proto.AppBoot=function(){
		if (Browser.window["conchConfig"] !=null){
			var config=Browser.window["conchConfig"];
			var usedMem=config.getUsedMem();
			var totalMem=config.getTotalMem();
			var avalidMem=config.getAvalidMem();
			var os=config.getOS();
			BootUtil.Log("totalMem:"+totalMem+" usedMem："+usedMem+" avalidMem："+avalidMem+" os:"+os);
		}
		NativeUtil.ConnectNative();
	}

	__proto.OnNativeConnect=function(){
		if (NativeUtil.NATIVE_OBJ !=null){
			var cdn=NativeUtil.NATIVE_OBJ["urlcdn"];
			if (cdn !=null && cdn !=""){
				URL.basePath=cdn;
				URL.rootPath=cdn;
			}
			BootUtil.Log("native cdn:"+cdn);
			if (NativeUtil.NATIVE_OBJ["closenativealert"]=="1"){
				BootUtil.Log("native close alert");
				window.showAlertOnJsException(false);;
			}
			GameCfg.ParseAppParam(NativeUtil.NATIVE_OBJ);
			UMengUtil.Register();
			UMengUtil.AddPoint("bootloaded","","",0);
			EventCenter.Event("APP_NATIVE");
		}
	}

	boot.Ins=null;
	boot.initDesignW=720;
	boot.initDesignH=1280;
	boot.isSpecialScreen=false;
	boot.zhijianWeChatRecahrge=null;
	__static(boot,
	['designW',function(){return this.designW=boot.initDesignW;},'designH',function(){return this.designH=boot.initDesignH;}
	]);
	return boot;
})()


//class boots.EnumVersionType
var EnumVersionType=(function(){
	function EnumVersionType(){}
	__class(EnumVersionType,'boots.EnumVersionType');
	EnumVersionType.VERSION_DEFAULT=0;
	EnumVersionType.VERSION_CHAllENGE=1;
	return EnumVersionType;
})()


//class boots.BootLoader
var BootLoader=(function(){
	function BootLoader(){
		// 需要加载的模块
		this.JS_FILES=[ "js/engine/engine.js","js/datasets/datasets.js","js/net/net.js","js/enem/enem.js","js/pages/pages.js","js/com/com.js"];
		// 压缩收的zilb包
		this.JS_COMPRESS_FILE="itemicon.res";
		this._curFileIdx=0;
		this._jsCodeCache={};
	}

	__class(BootLoader,'boots.BootLoader');
	var __proto=BootLoader.prototype;
	__proto.StartLoad=function(){
		if (!BootLoader.IS_PACK_COMPRESS){
			this.LoadJSFile();
		}
		else{
			EventCenter.Event("loadmain_title","资源加载中:");
			Laya.loader.load(this.JS_COMPRESS_FILE,Handler.create(this,this.OnJSCompressLoaded),Handler.create(this,this.OnJSCompressProgess,null,false),"arraybuffer");
		}
	}

	// 加载分包js文件
	__proto.LoadJSFile=function(){
		EventCenter.Event("loadmain_title","资源加载中:");
		Laya.loader.load(this.JS_FILES ,Handler.create(this,this.OnJSFileLoadHandler),Handler.create(this,this.OnJSFileProgress,null,false));
	}

	__proto.OnJSFileProgress=function(prog){
		EventCenter.Event("loadmain_progress",prog/2);
	}

	__proto.OnJSFileLoadHandler=function(){
		EventCenter.Event("loadmain_title","资源加载中:");
		this._curFileIdx=0;
		Laya.timer.once(100,this,this.OnJSFileEval);
	}

	__proto.OnJSFileEval=function(){
		var jsURL=this.JS_FILES[this._curFileIdx];
		var data=Loader.getRes(jsURL);
		window.eval(data+'\n//@ sourceURL='+jsURL );
		Loader.clearRes(jsURL);
		this._curFileIdx++;
		EventCenter.Event("loadmain_progress",0.5+0.5*this._curFileIdx/this.JS_FILES.length);
		if (this.JS_FILES.length <=this._curFileIdx)
			this.EnterGame();
		else
		Laya.timer.once(1,this,this.OnJSFileEval);
	}

	// 压缩包处理
	__proto.OnJSCompressProgess=function(prog){
		EventCenter.Event("loadmain_progress",prog/2);
	}

	/**
	*压缩包下载完成
	*/
	__proto.OnJSCompressLoaded=function(){
		var tmpData=Laya.loader.getRes(this.JS_COMPRESS_FILE);
		if (tmpData==null){
			this.LoadJSFile();
		}
		else{
			var bytes=new ByteArrayClient();
			bytes.writeArrayBuffer(tmpData);
			bytes.pos=0;
			bytes.endian="littleEndian";
			EventCenter.Event("loadmain_title","资源加载中:");
			try{
				bytes.uncompress();
				this._curFileIdx=0;
				Laya.timer.once(1,this,this.uncompressJSFile,[bytes]);
			}
			catch(err){
				BootUtil.Log("decode itemicon.res error!");
				this.LoadJSFile();
			}
		}
	}

	__proto.uncompressJSFile=function(bytes){
		try{
			var readStr="";
			var readLen=bytes.readInt();
			var jsName=bytes.readUTFBytes(readLen);
			BootUtil.Log("decode jsfile=>"+jsName);
			readLen=bytes.readInt();
			readStr=bytes.readUTFBytesOld(readLen);
			this._jsCodeCache[jsName]=readStr;
			this._curFileIdx++;
			var v=this._curFileIdx / this.JS_FILES.length;
			if (this._curFileIdx < this.JS_FILES.length)
				Laya.timer.frameOnce(1,this,this.uncompressJSFile,[bytes]);
			EventCenter.Event("loadmain_progress",v/2);
		}
		catch(err){
			BootUtil.Log("decode itemicon.res error!");
			return;
		}
		if (this._curFileIdx >=this.JS_FILES.length){
			Laya.loader.clearRes(this.JS_COMPRESS_FILE);
			this._curFileIdx=0;
			EventCenter.Event("loadmain_title","资源加载中:");
			this.EvalJSCode();
		}
	}

	/**
	*编译JS代码
	*/
	__proto.EvalJSCode=function(){
		var jsURL=this.JS_FILES[this._curFileIdx];
		var code=this._jsCodeCache[jsURL];
		if (code !=null){
			BootUtil.Log("start eval js=>"+jsURL);
			window.eval(code);
			this._curFileIdx++;
			var v=this._curFileIdx / this.JS_FILES.length;
			if (this._curFileIdx < this.JS_FILES.length)
				Laya.timer.frameOnce(1,this,this.EvalJSCode);
			EventCenter.Event("loadmain_progress",v/2);
		}
		if (this._curFileIdx >=this.JS_FILES.length){
			this._jsCodeCache={};
			this.EnterGame();
		}
	}

	/**
	*进入游戏
	*/
	__proto.EnterGame=function(){
		EventCenter.Event("loadmain_progress",0.5);
		BootUtil.Log("GameMainStart!");
		com.GameMain.Ins.GameStart();
	}

	BootLoader.IS_PACK_COMPRESS=true;
	return BootLoader;
})()


//class boots.platform.PlatformEvent
var PlatformEvent=(function(){
	function PlatformEvent(){}
	__class(PlatformEvent,'boots.platform.PlatformEvent');
	PlatformEvent.LOGIN_SDK="login_sdk";
	PlatformEvent.RECHARGE_SDK="recharge_sdk";
	PlatformEvent.ORDER_SERVER="order_server";
	return PlatformEvent;
})()


//class boots.utils.WebmojieUtil
var WebmojieUtil=(function(){
	function WebmojieUtil(){}
	__class(WebmojieUtil,'boots.utils.WebmojieUtil');
	//升级上报
	__getset(1,WebmojieUtil,'isOpen',function(){
		try{
			return window.isMoJieH5();
			}catch (e){
			console.log("==>"+e);
			return false;
		}
	});

	/**是否用宽屏布局**/
	__getset(1,WebmojieUtil,'isWideScreen',function(){
		return true;
	});

	WebmojieUtil.REPORT_SERVER="server";
	WebmojieUtil.REPORT_CREATE="create";
	WebmojieUtil.REPORT_ENTERGAME="entergame";
	WebmojieUtil.REPORT_LEVELUP="levelup";
	return WebmojieUtil;
})()


//class boots.platform.vo.PlatformVo
var PlatformVo=(function(){
	function PlatformVo(){
		/**账号**/
		this.account="";
		/**服务器验证token后返回的sign**/
		this.sign="";
		/**渠道标识**/
		this.channelPlat="37h5";
		/**渠道名**/
		this.channelName="";
		/**是否成人**/
		this.adult=0;
		this.time=0;
		/**服务器ip**/
		this.server_ip="";
		/**服务器端口**/
		this.server_port=8081;
		/**服务器ID**/
		this.server_id=60021;
		/**服务器名字**/
		this.server_name="";
		/**主程序版本号**/
		this.mainversion="";
		/**是否是新号**/
		this.isNewRole=false;
		/**QQ小程序SDK获取的服务器列表**/
		this.qqServerList=null;
		/**bilibili小游戏登录获取的参数**/
		this.params=null;
		/**bilibili小游戏获取的系统平台**/
		this.bilibiliPlatform=null;
		/**snoNum**/
		this.snoNum=0;
		// }
		this._paramStr=null;
		this._param=null;
		this.platformID=1;
		this.channelID=99999999;
		this.zoneId=9999;
	}

	__class(PlatformVo,'boots.platform.vo.PlatformVo');
	var __proto=PlatformVo.prototype;
	__getset(0,__proto,'serverID',function(){
		return (typeof this.server_id=='string')?parseInt(this.server_id.toString()):this.server_id;
	});

	/**
	*是否本地
	*/
	__getset(0,__proto,'isLocal',function(){
		if (this.server_ip.indexOf("192.168")>=0){
			return true;
		}
		if (this.server_ip.indexOf("127.0.0.1")>=0){
			return true;
		}
		return false;
	});

	__getset(0,__proto,'paramStr',function(){
		if(this._paramStr==null){
			this._paramStr=JSON.stringify(this.param);
		}
		return this._paramStr;
	});

	__getset(0,__proto,'param',function(){
		if(this._param==null){
			this._param=new Object();
		}
		this._param["PLAT_CHANNEl"]=GameCfg.CHANNEL;
		this._param["PLATFORM"]=GameCfg.PLATFORM;
		return this._param;
	});

	return PlatformVo;
})()


/**
*渠道列表
*/
//class boots.platform.channel.EnumChannel
var EnumChannel=(function(){
	function EnumChannel(){}
	__class(EnumChannel,'boots.platform.channel.EnumChannel');
	EnumChannel.channelName=function(agent){
		var dic=EnumChannel.ShowName2ID;
		for (var key in dic){
			if (dic[key]==agent)
				return key;
		}
		return "dev";
	}

	EnumChannel.channelID=function(n){
		return EnumChannel.ShowName2ID[n] !=null ? EnumChannel.ShowName2ID[n] :1;
	}

	EnumChannel.PDev=99999999;
	EnumChannel.P37H5=1;
	EnumChannel.vivo=2;
	EnumChannel.oppo=3;
	EnumChannel.xiaomi=4;
	EnumChannel.huawei=5;
	EnumChannel.amigo=6;
	EnumChannel.flyme=7;
	EnumChannel.lenovo=8;
	EnumChannel.coolpad=9;
	EnumChannel.baidu=10;
	EnumChannel.qihoo=11;
	EnumChannel.uc=12;
	EnumChannel.tencent=13;
	EnumChannel.xiyouys=14;
	__static(EnumChannel,
	['ShowName2ID',function(){return this.ShowName2ID={
			"dev":99999999,
			"37h5":1,
			"37zyios":1,
			"vivo":2,
			"oppo":3,
			"xiaomi":4,
			"huawei":5,
			"amigo":6,
			"flyme":7,
			"lenovo":8,
			"coolpad":9,
			"baidu":10,
			"qihoo":11,
			"uc":12,
			"tencent":13,
			"xiyouys":14
	};}

	]);
	return EnumChannel;
})()


/**
*url请求工具
*/
//class boots.utils.RequestUtil
var RequestUtil=(function(){
	function RequestUtil(caller,onsuc,onerror,data){
		this._caller=null;
		this._success=null;
		this._error=null;
		this._data=null;
		this._caller=caller;
		this._success=onsuc;
		this._error=onerror;
		this._data=data;
	}

	__class(RequestUtil,'boots.utils.RequestUtil');
	var __proto=RequestUtil.prototype;
	__proto.Send=function(url){
		AlertToastExt.Show(0);
		var req=new HttpRequest();
		req.on("complete",this,this.CompleteHandler);
		req.on("error",this,this.ErrorHandler);
		req.send(url);
	}

	__proto.Clear=function(){
		this._caller=null;
		this._success=null;
		this._error=null;
		this._data=null;
	}

	__proto.CompleteHandler=function(result){
		AlertToastExt.Hide(0);
		if (this._success !=null){
			if (this._data !=null){
				this._success.apply(this._caller,[result,this._data]);
				}else{
				this._success.call(this._caller,[result]);
			}
		}
		this.Clear();
	}

	__proto.ErrorHandler=function(result){
		AlertToastExt.Hide(0);
		if (this._error !=null){
			if (this._data !=null){
				this._error.apply(this._caller,[result,this._data]);
				}else{
				this._error.call(this._caller,result);
			}
		}
		this.Clear();
	}

	return RequestUtil;
})()


/**
*渠道列表
*/
//class boots.platform.channel.EnumChannelPlatName
var EnumChannelPlatName=(function(){
	function EnumChannelPlatName(){}
	__class(EnumChannelPlatName,'boots.platform.channel.EnumChannelPlatName');
	EnumChannelPlatName.PDev="dev";
	EnumChannelPlatName.P37H5="37h5";
	EnumChannelPlatName.xiyouys="xiyouys";
	return EnumChannelPlatName;
})()


//class boots.utils.WebfingertipUtil
var WebfingertipUtil=(function(){
	function WebfingertipUtil(){}
	__class(WebfingertipUtil,'boots.utils.WebfingertipUtil');
	__getset(1,WebfingertipUtil,'isOpen',function(){
		try{
			return window.isFingertips();
			}catch (e){
			console.log("==>"+e);
			return false;
		}
	});

	/**是否用宽屏布局**/
	__getset(1,WebfingertipUtil,'isWideScreen',function(){
		return true;
	});

	WebfingertipUtil.report=function(type){
		if(!WebfingertipUtil.isOpen)
			return;
		switch (type){
			case "server":
				window.SbPulSdkChooseServer();
				console.log("选服不需要上报上报信息直接调用接口SDK");
				break ;
			}
	}

	WebfingertipUtil.REPORT_SERVER="server";
	WebfingertipUtil.REPORT_CREATE="create";
	WebfingertipUtil.REPORT_ENTERGAME="entergame";
	WebfingertipUtil.REPORT_LEVELUP="levelup";
	return WebfingertipUtil;
})()


//class boots.selserver.med.LoadMainMediator
var LoadMainMediator=(function(){
	function LoadMainMediator(p){
		this._p=null;
		this._title=null;
		this._prev=0;
		this._p=p;
	}

	__class(LoadMainMediator,'boots.selserver.med.LoadMainMediator');
	var __proto=LoadMainMediator.prototype;
	Laya.imps(__proto,{"boots.selserver.med.ISelServerMediator":true})
	__proto.OnShow=function(){
		EventCenter.On("loadmain_title",this,this.onTitle);
		EventCenter.On("loadmain_progress",this,this.onProgress);
		this._p.boxLoading.visible=true;
		this._p.imgServerBG.visible=false;
		this._p.boxServer.visible=false;
		this._p.timerLoop(1,this,this.LoopRotation);
		this.StartLoad(PlatformLoginUtil.vo.mainversion);
		this.onTitle("资源加载中:")
		this.onProgress(0);
	}

	__proto.OnHide=function(){
		EventCenter.Off("loadmain_title",this,this.onTitle);
		EventCenter.Off("loadmain_progress",this,this.onProgress);
		this._p.clearTimer(this,this.LoopRotation);
	}

	__proto.destroy=function(){
		this.OnHide();
		this._p=null;
	}

	__proto.onTitle=function(title){
		this.SetTitle(title);
	}

	__proto.onProgress=function(value){
		this.SetProgress(value);
	}

	__proto.SetTitle=function(title){
		this._title=title;
	}

	// _p.labDesc.text=_title+"0%";
	__proto.SetProgress=function(value){
		this._p.txtDesc.text=this._title+(value*100|0)+"%";
		this.UpdateProgress(value);
	}

	__proto.UpdateProgress=function(value){
		this._p.imgProg.scaleX=value;
		this._p.sprYun.x=this._p.imgProg.x+this._p.imgProg.width *value-this._p.sprYun.width/2;
	}

	__proto.LoopRotation=function(){
		if (this._prev==0)
			this._prev=Laya.timer.currFrame;
		var diff=Laya.timer.currFrame-this._prev;
		this._p.sprQuan.rotation=-(diff *6)% 360;
	}

	// 开始加载主版本文件
	__proto.StartLoad=function(mainversion){
		this.SetTitle("资源加载中：");
		ResourceVersionEx.manifest=null;
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
		Laya.loader.load(mainversion+"/version.json",Handler.create(this,this.onManifestLoaded),Handler.create(this,this.onManifestProgress,null,false),"json");
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
	}

	__proto.onManifestProgress=function(per){}
	// SetProgress(per);
	__proto.onManifestLoaded=function(data){
		ResourceVersionEx.manifest=data;
		if (!data){
			console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
		}
		this.StartLoadAtlasConfig();
	}

	// 开始加载图集配置文件
	__proto.StartLoadAtlasConfig=function(){
		this.SetTitle("资源加载中：");
		Laya.loader.load("fileconfig.json",Handler.create(this,this.OnAtlasConfigComp),Handler.create(this,this.OnAtlasConfigProg,null,false),"json");
	}

	__proto.OnAtlasConfigProg=function(per){}
	// SetProgress(per);
	__proto.OnAtlasConfigComp=function(data){
		var comp=Handler.create(this,this.StartLoadingRes);
		laya.net.AtlasInfoManager._onInfoLoaded(comp,data);
	}

	// 开始加载一些资源
	__proto.StartLoadingRes=function(){
		var urls;
		if(Web37Util.isWideScreen)
			urls=["res/ui/image/boot/ditu2_web.jpg","res/ui/game_start/_ui_bt_jiantou.png","res/ui/image/boot/name_bg_web.png","res/ui/image/boot/griddle_wb.png","res/ui/image/boot/3tou_web.png","res/ui/game_start/_ui_cjjs_bm_gou.png","res/ui/image/boot/4tou_web.png","res/ui/game_start/anniu.png","res/ui/image/boot/create.png","res/ui/image/boot/intromale.png"];
		else
		urls=["res/ui/image/boot/ditu2.jpg","res/ui/game_start/_ui_bt_jiantou.png","res/ui/image/boot/name_bg.png","res/ui/image/boot/griddle.png","res/ui/image/boot/3tou.png","res/ui/game_start/_ui_cjjs_bm_gou.png","res/ui/image/boot/4tou.png","res/ui/game_start/anniu.png","res/ui/image/boot/create.png","res/ui/image/boot/intromale.png"];
		Laya.loader.load(urls,Handler.create(this,this.OnLoadingResComp),Handler.create(this,this.OnLoadingResProg,null,false));
		this.StartLoadMain();
	}

	__proto.OnLoadingResProg=function(per){}
	// SetProgress(per);
	__proto.OnLoadingResComp=function(){}
	// 开始加载主程序
	__proto.StartLoadMain=function(){
		if(Browser.inBiLi||Browser.inQQ||Browser.inWeChat)
			LoadBoot.Ins.Root.onStartLoad();
		else if(!Web37Util.isOpen && Browser.onWeiXin&&!WebfingertipUtil.isOpen&&!WebmojieUtil.isOpen){
			LoadBoot.Ins.Root.onStartLoad();
			}else{
			var l=new BootLoader();
			l.StartLoad();
		}
	}

	return LoadMainMediator;
})()


/**
*umeng接口
*/
//class boots.utils.UMengUtil
var UMengUtil=(function(){
	function UMengUtil(){}
	__class(UMengUtil,'boots.utils.UMengUtil');
	UMengUtil.Register=function(){
		NativeUtil.Register(20002,null,UMengUtil.CallFromNative);
		UMengUtil.ReqLogEnable(true);
	}

	UMengUtil.CallFromNative=function(o){
		var funcid=o["funcid"];
		if (funcid==4){
			Laya.stage.event("umeng_device_info",o);
		}
		else if (funcid==30){
			UMengUtil.RecPushDefine(o);
		}
		else if (funcid==32){
			UMengUtil.RecGetTags(o);
		}
		else if (funcid==34){
			UMengUtil.RecAddTags(o);
		}
		else if (funcid==36){
			UMengUtil.RecDelTags(o);
		}
	}

	UMengUtil.CallToNative=function(o){
		o.msgid=20001;
		NativeUtil.CallPlatformWithObj(o);
	}

	UMengUtil.AddPoint=function(eventid,uid,rolename,zoneid){
		var http=new HttpRequest();
		if (Render.isConchApp)
			http.send(BootUtil.FormatStr("https://h5.c.popcornie.com/clog?uuid={@}&usr={@}&desc={@}&extra={@}",[GameCfg.DEVICEID,uid,eventid,rolename+"-"+zoneid]));
		else
		http.send(BootUtil.FormatStr("https://h5.c.popcornie.com/clog?uuid={@}&usr={@}&desc={@}&extra={@}",["web",uid,eventid,rolename+"-"+zoneid]));
	}

	UMengUtil.ReqDeviceInfo=function(){
		UMengUtil.CallToNative({funcid:3});
	}

	UMengUtil.ReportEvent=function(eventid,value){
		UMengUtil.CallToNative({funcid:1,eventid:eventid,value:value});
	}

	UMengUtil.ReportError=function(value){
		UMengUtil.CallToNative({funcid:2,value:value});
	}

	UMengUtil.ReqLogEnable=function(value){
		UMengUtil.CallToNative({funcid:100,value:value});
	}

	UMengUtil.RecPushDefine=function(o){
		console.log(o.toString());
	}

	UMengUtil.ReqGetTags=function(){
		UMengUtil.CallToNative({funcid:31});
	}

	UMengUtil.RecGetTags=function(o){}
	UMengUtil.ReqAddTags=function(value){
		UMengUtil.CallToNative({funcid:33,value:value});
	}

	UMengUtil.RecAddTags=function(o){}
	UMengUtil.ReqDelTags=function(value){
		UMengUtil.CallToNative({funcid:35,value:value});
	}

	UMengUtil.RecDelTags=function(o){}
	UMengUtil.REQ_REPORT_EVENT=1;
	UMengUtil.REQ_REPORT_ERROR=2;
	UMengUtil.REQ_DEVICE_INFO=3;
	UMengUtil.REC_DEVICE_INFO=4;
	UMengUtil.REQ_ENTER_LEVEL=5;
	UMengUtil.REQ_FINISH_LEVEL=6;
	UMengUtil.REQ_FAIL_LEVEL=7;
	UMengUtil.REQ_BUY=8;
	UMengUtil.REQ_PAY_COIN=9;
	UMengUtil.REQ_PAY_ITEM=10;
	UMengUtil.REQ_EXCHANGE=11;
	UMengUtil.REQ_USEITEM=12;
	UMengUtil.REQ_BONUS_COIN=13;
	UMengUtil.REQ_BONUS_ITEM=14;
	UMengUtil.REQ_PLAYER_LEVEL=15;
	UMengUtil.REQ_SIGN_IN=16;
	UMengUtil.REQ_SIGN_OUT=17;
	UMengUtil.REC_PUSH_DEFINE=30;
	UMengUtil.REQ_PUSH_GETTAGS=31;
	UMengUtil.REC_PUSH_GETTAGS=32;
	UMengUtil.REQ_PUSH_ADDTAGS=33;
	UMengUtil.REC_PUSH_ADDTAGS=34;
	UMengUtil.REQ_PUSH_DELTAGS=35;
	UMengUtil.REC_PUSH_DELTAGS=36;
	UMengUtil.REQ_PUSH_NOTIFY_ON_FOREGROUND=37;
	UMengUtil.REQ_LOG_ENABLE=100;
	UMengUtil.BootLoaded="bootloaded";
	UMengUtil.ReqSignIn="reqsignin";
	UMengUtil.SignInSuc="signinsuc";
	UMengUtil.SignInFail="signinfail";
	UMengUtil.VerifySuc="verifysuc";
	UMengUtil.GameLoaded="gameloaded";
	UMengUtil.ReqLogin="reqlogin";
	UMengUtil.LoginSuc="loginsuc";
	UMengUtil.LoginFail="loginfail";
	UMengUtil.ClickCreateRole="clickcreaterole";
	UMengUtil.CreateRoleSuc="createrolesuc";
	UMengUtil.CreateRoleFail="createrolefail";
	UMengUtil.PublicResLoaded="publicresloaded";
	UMengUtil.CfgLoaded="cfgloaded";
	UMengUtil.DefaultAniLoaded="defaultaniloaded";
	UMengUtil.ReqEnterScene="reqenterscene";
	UMengUtil.EnterScene="enterscene";
	UMengUtil.EnterSceneFail="enterscenefail";
	UMengUtil.ClickWelcomePanel="clickwelcomepanel";
	UMengUtil.OpenGeneralPanel="opengeneralpanel";
	UMengUtil.CLOG_BACKEND="https://h5.c.popcornie.com/clog?uuid={@}&usr={@}&desc={@}&extra={@}";
	return UMengUtil;
})()


//class boots.platform.PlatformLoginUtil
var PlatformLoginUtil=(function(){
	function PlatformLoginUtil(){}
	__class(PlatformLoginUtil,'boots.platform.PlatformLoginUtil');
	__getset(1,PlatformLoginUtil,'login',function(){
		return PlatformLoginUtil._login;
	});

	PlatformLoginUtil.Init=function(){
		var param;
		if(Browser.inQQ)
			PlatformLoginUtil.InitQQ();
		else if(Browser.inWeChat)
		PlatformLoginUtil.InitWeChat();
		else if(Browser.inBiLi)
		PlatformLoginUtil.InitBilibili();
		else{
			if(Web37Util.isOpen){
				param=window.webParam();
				PlatformLoginUtil.vo.channelID=99999999;
				PlatformLoginUtil.vo.account=param["uid"];
				PlatformLoginUtil.vo.adult=parseInt(param["is_adult"]);
				PlatformLoginUtil.vo.mainversion=param["main"];
				PlatformLoginUtil.vo.time=param["time"];
			}
			else if (WebfingertipUtil.isOpen){
				console.log("为指尖平台");
				var loginParams;
				loginParams=window.zhijianParams();
				PlatformLoginUtil.vo.platformID=loginParams["cpgameid"];
				PlatformLoginUtil.vo.channelID=loginParams["channelid"];
				PlatformLoginUtil.vo.sign=loginParams["sign"];
				PlatformLoginUtil.vo.account=loginParams["qqesuid"];
				PlatformLoginUtil.vo.adult=parseInt(loginParams["ext"]);
				PlatformLoginUtil.vo.time=Number(loginParams["qqestimestamp"]);
				window.SbPulSdkInit(loginParams);
				console.log("指尖：")
			}
			else if (WebmojieUtil.isOpen){
				console.log("摩羯");
				var loginParams;
				loginParams=window.mojieParams();
				PlatformLoginUtil.vo.platformID=loginParams["Ugameid"];
				PlatformLoginUtil.vo.sign=loginParams["Sign"];
				PlatformLoginUtil.vo.account=loginParams["Uid"];
				PlatformLoginUtil.vo.time=Number(loginParams["Time"]);
				console.log("摩羯：")
			}
			else{
				param=GameCfg.RELOAD_PARAM;
				if (param["account"] !=null){
					PlatformLoginUtil.vo.account=param["account"];
				}
				PlatformLoginUtil.vo.platformID=param["platform"] ? param["platform"] :parseInt(GameCfg.PLATFORM);
				PlatformLoginUtil.vo.channelID=param["channel"] ? param["channel"] :parseInt(GameCfg.CHANNEL);
				if (GameCfg.GAMENAME !=GameCfg.GAMENAME_WAIWANG
					&& GameCfg.GAMENAME !=GameCfg.GAMENAME_NEIWANG
				&& GameCfg.GAMENAME !=GameCfg.GAMENAME_BANSHU
				&& GameCfg.GAMENAME !=GameCfg.GAMENAME_BANSHU2){
					PlatformLoginUtil.vo.channelName=param["channel"] ? param["channel"] :GameCfg.CHANNEL;
					PlatformLoginUtil.vo.channelID=EnumChannel.channelID(PlatformLoginUtil.vo.channelName);
				}
				if (param["adult"] !=null){
					PlatformLoginUtil.vo.adult=parseInt(param["adult"]);
				}
				if (param["serverhost"] !=null){
					PlatformLoginUtil.vo.server_ip=param["serverhost"];
				}
				if (param["serverport"] !=null){
					PlatformLoginUtil.vo.server_port=parseInt(param["serverport"]);
				}
				if (param["serverid"] !=null){
					PlatformLoginUtil.vo.server_id=parseInt(param["serverid"]);
				}
				if (param["mainversion"] !=null){
					PlatformLoginUtil.vo.mainversion=param["mainversion"];
				}
				if (param["time"] !=null){
					PlatformLoginUtil.vo.time=param["time"];
				}
			}
			PlatformLoginUtil._login=PlatformLoginUtil.CreatePlatformLogin(PlatformLoginUtil.vo.platformID,PlatformLoginUtil.vo.channelID);
		}
	}

	PlatformLoginUtil.CreatePlatformLogin=function(platformId,channelID){
		if(Web37Util.isOpen)
			return new PlatformLoginWeb37(platformId,channelID);
		else if (WebfingertipUtil.isOpen){
			console.log("创建平台登陆指尖");
			return new PlatfromLoginFingertip(platformId,channelID);
		}
		else if (WebmojieUtil.isOpen){
			console.log("创建摩羯平台登录");
			return new PlatfromLoginMoJie(platformId,channelID);
		}
		else if (Browser.inWeChat){
			if(Browser.IszhijianWeChat)
				return new PlatformLoginZhiJianWeChat(platformId,channelID);
			else
			return new PlatformLoginWeChatMiniProgram(platformId,channelID);
		}
		else if (Browser.inQQ){
			return new PlatformLoginQQMiniProgram(platformId,channelID);
		}
		else if (Browser.inBiLi){
			return new PlatformLoginbilibiliGame(platformId,channelID);
		}
		else{
			if (channelID==99999999){
				GameCfg.isGmOpen=true;
				return new PlatformLoginBase(platformId,channelID);
			}
			else{
				switch (platformId){
					case 1:
						return new PlatformLogin37(platformId,channelID);
					case 12:
						return new PlatformLoginXiYou(platformId,channelID);
					case 6:
						return new PlatfromLoginFingertipsy(platformId,channelID);
					case 8:
						return new PlatfromLoginMohe(platformId,channelID);
					case 10:
						return new PlatformLoginZhangYu(platformId,channelID);
					case 15:
						return new PlatformLoginNewMohe(platformId,channelID);
					default :
						return new PlatformLogin37(platformId,channelID);
					}
			}
		}
		return null;
	}

	PlatformLoginUtil.OnSelSever=function(){
		if (PlatformLoginUtil._login !=null){
			PlatformLoginUtil._login.OnSelServer();
		}
	}

	PlatformLoginUtil.Reload=function(type){
		(type===void 0)&& (type=1);
		var param=PlatformLoginUtil.GetReloadStr(type);
		if (Render.isConchApp){
			NativeUtil.GameRestart(param);
			Browser.window.location.reload(true);
		}
		else{
			LocalStorage.setItem("reloadparam",param);
			Browser.window.location.reload();
		}
	}

	PlatformLoginUtil.GetReloadStr=function(type){
		var obj={};
		obj["account"]=PlatformLoginUtil.vo.account;
		obj["logintype"]=type;
		obj["channel"]=GameCfg.CHANNEL;
		obj["sign"]=GameCfg.SIGN;
		obj["adult"]=PlatformLoginUtil.vo.adult;
		obj["time"]=PlatformLoginUtil.vo.time;
		obj["serverhost"]=PlatformLoginUtil.vo.server_ip;
		obj["serverport"]=PlatformLoginUtil.vo.server_port;
		obj["serverid"]=PlatformLoginUtil.vo.server_id;
		obj["mainversion"]=PlatformLoginUtil.vo.mainversion;
		if (PlatformLoginUtil._login)
			PlatformLoginUtil._login.GetAgentInfo(obj);
		var ret=BootUtil.encode(obj);
		ret=encodeURIComponent(ret);
		return ret;
	}

	PlatformLoginUtil.InitQQ=function(){
		window.sdk.qqSDKInit();
		window.sdk.onShare();
		qq.getSystemInfo({
			success:function (res){
				if(res.statusBarHeight>35)
					boot.isSpecialScreen=true;
				console.log("getSystemInfo--------------------获取系统信息"+JSON.stringify(res));
			},
			fail:function (e){
				console.log("getSystemInfo--------------------获取系统信息失败"+JSON.stringify(e));
			}
		});
		PlatformLoginUtil.CheckQQLoginCallBackData();
	}

	PlatformLoginUtil.InitWeChat=function(){
		if(Browser.IszhijianWeChat){
			window.zhijianWeChat.zhijianWeChatSDKInit();
			window.zhijianWeChat.SDKShare();
			window.zhijianWeChat.SDKkeepScreenOn();
			window.zhijianWeChat.SDKLogin();
			PlatformLoginUtil.CheckZhiJianWeChatLoginCallBackData();
		}
		else{
			window.WeChatSDK.WeChatSDKInit();
			window.WeChatSDK.onShare();
			PlatformLoginUtil._login=PlatformLoginUtil.CreatePlatformLogin(PlatformLoginUtil.vo.platformID,PlatformLoginUtil.vo.channelID);
		}
		wx.getSystemInfo({
			success:function (res){
				if(res.statusBarHeight>25)
					boot.isSpecialScreen=true;
				console.log("getSystemInfo--------------------获取系统信息"+JSON.stringify(res));
			},
			fail:function (e){
				console.log("getSystemInfo--------------------获取系统信息失败"+JSON.stringify(e));
			}
		});
	}

	PlatformLoginUtil.InitBilibili=function(){
		window.zhijianMiniGame.bilibiliSDKInit();
		window.zhijianMiniGame.SDKShare();
		window.zhijianMiniGame.SDKkeepScreenOn();
		bl.getSystemInfo({
			success:function (res){
				PlatformLoginUtil.vo.bilibiliPlatform=res.platform;
				if(res.statusBarHeight>25)
					boot.isSpecialScreen=true;
				console.log("getSystemInfo--------------------获取系统信息"+JSON.stringify(res));
			},
			fail:function (e){
				console.log("getSystemInfo--------------------获取系统信息失败"+JSON.stringify(e));
			}
		});
		window.zhijianMiniGame.SDKLogin();
		PlatformLoginUtil.CheckBiLiLoginCallBackData();
	}

	PlatformLoginUtil.CheckQQLoginCallBackData=function(){
		var LoginInfo=window.sdk.loginCallBackData;
		if(LoginInfo.status){
			if(LoginInfo.status==1){
				console.log("qqSDK登录成功"+LoginInfo.status);
				PlatformLoginUtil.vo.account=LoginInfo.userId+"";
				PlatformLoginUtil.vo.sign=LoginInfo.token+"";
				PlatformLoginUtil._login=PlatformLoginUtil.CreatePlatformLogin(PlatformLoginUtil.vo.platformID,PlatformLoginUtil.vo.channelID);
			}
		}
		else if(LoginInfo.status==0)
		console.log("qqSDK登录失败"+LoginInfo.status);
		else{
			Laya.timer.once(300,null,PlatformLoginUtil.CheckQQLoginCallBackData);
		}
	}

	PlatformLoginUtil.CheckBiLiLoginCallBackData=function(){
		var loginInfo=window.zhijianMiniGame.loginCallBackData;
		if(loginInfo.qqesuid){
			PlatformLoginUtil.vo.account=loginInfo.qqesuid+"";
			PlatformLoginUtil.vo.params=JSON.stringify(loginInfo);
			PlatformLoginUtil._login=PlatformLoginUtil.CreatePlatformLogin(PlatformLoginUtil.vo.platformID,PlatformLoginUtil.vo.channelID);
		}
		else{
			Laya.timer.once(200,null,PlatformLoginUtil.CheckBiLiLoginCallBackData);
		}
	}

	PlatformLoginUtil.CheckZhiJianWeChatLoginCallBackData=function(){
		var loginInfo=window.zhijianWeChat.loginCallBackData;
		if(loginInfo){
			if(loginInfo.qqesuid){
				PlatformLoginUtil.vo.account=loginInfo.qqesuid+"";
				PlatformLoginUtil.vo.params=JSON.stringify(loginInfo);
				PlatformLoginUtil._login=PlatformLoginUtil.CreatePlatformLogin(PlatformLoginUtil.vo.platformID,PlatformLoginUtil.vo.channelID);
			}
			else
			Laya.timer.once(200,null,PlatformLoginUtil.CheckZhiJianWeChatLoginCallBackData);
		}
		else
		Laya.timer.once(200,null,PlatformLoginUtil.CheckZhiJianWeChatLoginCallBackData);
	}

	PlatformLoginUtil._login=null;
	__static(PlatformLoginUtil,
	['vo',function(){return this.vo=new PlatformVo();}
	]);
	return PlatformLoginUtil;
})()


/**
*内部登陆
*/
//class boots.selserver.med.SelServerNormalMediator extends boots.selserver.med.SelServerMediator
var SelServerNormalMediator=(function(_super){
	function SelServerNormalMediator(p){
		this._btnLastLogin=null;
		this._dispatcher=new EventDispatcher();
		this._btnServers=[];
		SelServerNormalMediator.__super.call(this,p);
		this.HideServerList();
		this.CreateGroupVo();
		this.UpdateZoneList();
		this._p.imgSelServer.on("click",this,this.ClickSelServer);
		this._p.btnClose.on("click",this,this.CloseSelServer);
		this._p.btnBack.on("click",this,this.CloseSelServer);
		this._p.btnLogin.on("click",this,this.ClickLogin);
		this._p.btnAgreement.on("click",this,this.ClickAgreement);
		this._p.radioServerTab.on("change",this,this.OnChangeGroupEnd);
	}

	__class(SelServerNormalMediator,'boots.selserver.med.SelServerNormalMediator',_super);
	var __proto=SelServerNormalMediator.prototype;
	__proto.destroy=function(){
		this._btnServers=null;
		this._dispatcher=null;
		_super.prototype.destroy.call(this);
	}

	__proto.CreateGroupVo=function(){}
	// _zones.push(g);
	__proto.CreateServerVo=function(n,zoneId,ip,port){
		var ret=new SelServerVo();
		ret.serverName=n;
		ret.serverID=zoneId;
		ret.serverIP=ip;
		ret.serverPort=port;
		return ret;
	}

	__proto.GetGroupVo=function(ip,port,zoneId){
		for (var i=0;i < this._zones.length;++i){
			if (this._zones[i].GetServer(ip,port,zoneId)!=null)return this._zones[i];
		}
		return null;
	}

	__proto.GetServerVo=function(ip,port,zoneId){
		var g=this.GetGroupVo(ip,port,zoneId);
		return g ? g.GetServer(ip,port,zoneId):null;
	}

	__proto.CreateServerBtn=function(){
		var list=this._curZone.servers;
		for (var i=0;i < list.length;++i){
			var btn=this._btnServers[i];
			if (btn==null){
				btn=new SelServerCellExt();
				this._btnServers[i]=btn;
			}
			btn.x=0;
			btn.y=i *btn.height;
			btn.SetData(list[i]);
			btn.on("click",this,this.ClickServerBtn);
			this._p.panServerList.addChild(btn);
		}
		for (;i < this._btnServers.length;++i){
			this._btnServers[i].removeSelf();
		}
	}

	__proto.OnChangeGroupEnd=function(e){
		var g=this._zones[this._p.radioServerTab.selectedIndex];
		this._curZone=g;
		this.CreateServerBtn();
	}

	__proto.ClickServerBtn=function(e){
		var vo=(e.currentTarget).vo;
		if(vo==null || vo.serverState==0){
			AlertBootExt.Show("服务器未开启");
			return;
		}
		this._curServer=vo;
		this.UpdateSelServer();
		this.HideServerList();
	}

	__proto.ClickSelServer=function(){
		this.ShowServerList();
	}

	__proto.CloseSelServer=function(){
		this.HideServerList();
	}

	__proto.ClickLogin=function(){
		this.Login();
	}

	__proto.ClickAgreement=function(){
		AgreementExt.ShowHide();
	}

	__proto.OnShow=function(){
		_super.prototype.OnShow.call(this);
		this.UpdateDefault();
		this.UpdateSelServer();
		this.CreateServerBtn();
	}

	__proto.OnHide=function(){
		_super.prototype.OnHide.call(this);
	}

	__proto.UpdateDefault=function(){
		var acc=LocalStorage.getItem("account");
		var ip=LocalStorage.getItem("serverhost");
		var port=parseInt(LocalStorage.getItem("serverport"));
		var zoneId=parseInt(LocalStorage.getItem("serverid"));
		if (acc !=null)
			this._p.txtAccount.text=acc;
		else
		this._p.txtAccount.text="youracc";
		this._curZone=this.GetGroupVo(ip,port,zoneId);
		this._curServer=this.GetServerVo(ip,port,zoneId);
		if (this._curZone==null){
			this._curZone=this._zones[0];
			this._curServer=this._curZone.servers[0];
			if (this._btnLastLogin !=null)
				this._btnLastLogin.removeSelf();
			}else{
			if (this._btnLastLogin==null){
				this._btnLastLogin=new SelServerCellExt();
				this._btnLastLogin.on("click",this,this.ClickServerBtn);
			}
			this._btnLastLogin.SetData(this._curServer);
		}
	}

	// _p.labVer.text='ver:'+Version.VERSION;
	__proto.Login=function(){
		BootUtil.Log("click login");
		if (this._p.txtAccount.text==null || this._p.txtAccount.text=="")return;
		PlatformLoginUtil.vo.server_ip=this._curServer.serverIP;
		PlatformLoginUtil.vo.server_port=this._curServer.serverPort;
		PlatformLoginUtil.vo.server_id=this._curServer.serverID;
		PlatformLoginUtil.vo.adult=1;
		if(!WebfingertipUtil.isOpen&&!WebmojieUtil.isOpen)
			PlatformLoginUtil.vo.account=this._p.txtAccount.text;
		PlatformLoginUtil.vo.mainversion=this._curServer.mainversion;
		PlatformLoginUtil.vo.snoNum=this._curServer.snoNum;
		this.SetEnable(false);
		LocalStorage.setItem(GameCfg.GAMENAME+"_"+"account",PlatformLoginUtil.vo.account);
		LocalStorage.setItem(GameCfg.GAMENAME+"_"+"serverip",PlatformLoginUtil.vo.server_ip);
		LocalStorage.setItem(GameCfg.GAMENAME+"_"+"port",PlatformLoginUtil.vo.server_port.toString());
		LocalStorage.setItem(GameCfg.GAMENAME+"_"+"zoneid",PlatformLoginUtil.vo.server_id.toString());
		SelServerUtil.SelServer();
	}

	__proto.UpdateSelServer=function(){
		if (this._curServer==null){
			this._p.txtServer.text="未选服";
			}else{
			this._p.txtServer.text="当前服："+this._curServer.serverName;
		}
	}

	__proto.SetEnable=function(value){
		this._p.btnLogin.gray=!value;
		this._p.btnLogin.mouseEnabled=value;
		this._p.imgSelServer.mouseEnabled=value;
	}

	__proto.ShowServerList=function(){
		this._p.showHideServerBg(true);
		if(Web37Util.isWideScreen)
			Tween.to(this._p.imgServerBG,{y:(this._p.imgbg.height-this._p.imgServerBG.height*this._p.imgServerBG.scaleY)*0.5,alpha:1},200);
		else
		Tween.to(this._p.imgServerBG,{y:(this._p.height-this._p.imgServerBG.height*this._p.imgServerBG.scaleY)*0.5,alpha:1},200);
	}

	__proto.HideServerList=function(){
		this._p.showHideServerBg(false);
		if(Web37Util.isWideScreen)
			Tween.to(this._p.imgServerBG,{y:this._p.imgbg.height,alpha:0},200);
		else
		Tween.to(this._p.imgServerBG,{y:this._p.height,alpha:0},200);
	}

	return SelServerNormalMediator;
})(SelServerMediator)


/**
*事件中心
*
*@author Administrator
*/
//class boots.EventCenter extends laya.events.EventDispatcher
var EventCenter=(function(_super){
	// private static const _event:GameEvent=new GameEvent("");
	function EventCenter(){
		EventCenter.__super.call(this);
	}

	__class(EventCenter,'boots.EventCenter',_super);
	EventCenter.Event=function(type,data){
		if((data instanceof Array))
			data=[data];
		EventCenter._ins.event(type,data);
	}

	EventCenter.On=function(type,caller,listener,args,once){
		(once===void 0)&& (once=false);
		if (once)
			EventCenter._ins.once(type,caller,listener,args);
		else
		EventCenter._ins.on(type,caller,listener,args);
	}

	EventCenter.Off=function(type,caller,listener){
		EventCenter._ins.off(type,caller,listener);
	}

	__static(EventCenter,
	['_ins',function(){return this._ins=new EventCenter();}
	]);
	return EventCenter;
})(EventDispatcher)


//class boots.LoadBootbilibili extends boots.LoadBootCfg
var LoadBootbilibili=(function(_super){
	function LoadBootbilibili(){
		LoadBootbilibili.__super.call(this);
	}

	__class(LoadBootbilibili,'boots.LoadBootbilibili',_super);
	var __proto=LoadBootbilibili.prototype;
	__proto.StartFristShow=function(){
		this._bg=new Image();
		this._bg.size(Laya.stage.width,Laya.stage.height);
		Laya.stage.addChild(this._bg);
		this._bg.skin="beijingnew.png";
	}

	__proto.ParseWebParam=function(){
		this.gameCdn="https://h5.c.popcornie.com/boot?sign=v_18";
		MiniFileMgr.loadPath=this.gameCdn;
		Laya.URL.basePath=this.gameCdn;
	}

	__proto.LoadCfg=function(){
		GameCfg.ParseWebParam();
		Laya.loader.load("bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
	}

	__proto.loadSubpackage=function(index){
		var _$this=this;
		(index===void 0)&& (index=0);
		_super.prototype.loadSubpackage.call(this,index);
		var path=this.srclist[index];
		bl.loadSubpackage({
			name:path,
			success:function (res){
				console.log("success "+path);
				index++;
				path=_$this.srclist[index];
				if (path==null)
					_$this.EnterGame();
				else {
					_$this.loadSubpackage(index);
				}
			},
			fail:function (res){
				console.log("fail"+path);
			}
		})
	}

	__proto.onCfgComplete=function(data){
		_super.prototype.onCfgComplete.call(this,data);
	}

	return LoadBootbilibili;
})(LoadBootCfg)


//class boots.LoadBootWX extends boots.LoadBootCfg
var LoadBootWX=(function(_super){
	function LoadBootWX(){
		LoadBootWX.__super.call(this);
	}

	__class(LoadBootWX,'boots.LoadBootWX',_super);
	var __proto=LoadBootWX.prototype;
	__proto.StartFristShow=function(){
		this._bg=new Image();
		this._bg.size(Laya.stage.width,Laya.stage.height);
		Laya.stage.addChild(this._bg);
		this._bg.skin="beijingnew.png";
	}

	__proto.ParseWebParam=function(){
		this.BOOTVERSION=Browser.BOOTVERSION+"";
		this.gameCdn="https://cdn-xyx.raink.com.cn/rbsg/";
		MiniFileMgr.loadPath=this.gameCdn;
		Laya.URL.basePath=this.gameCdn;
	}

	__proto.LoadCfg=function(){
		GameCfg.ParseWebParam();
		Laya.loader.load("bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
	}

	__proto.loadSubpackage=function(index){
		var _$this=this;
		(index===void 0)&& (index=0);
		_super.prototype.loadSubpackage.call(this,index);
		var path=this.srclist[index];
		wx.loadSubpackage({
			name:path ,
			success:function (res){
				console.log("success "+path);
				index++;
				path=_$this.srclist[index];
				if(path==null)
					_$this.EnterGame();
				else{
					_$this.loadSubpackage(index);
				}
			},
			fail:function (res){
				console.log("fail"+path);
			}
		});
	}

	return LoadBootWX;
})(LoadBootCfg)


//class boots.LoadBootWXZJ extends boots.LoadBootCfg
var LoadBootWXZJ=(function(_super){
	function LoadBootWXZJ(){
		LoadBootWXZJ.__super.call(this);
	}

	__class(LoadBootWXZJ,'boots.LoadBootWXZJ',_super);
	var __proto=LoadBootWXZJ.prototype;
	__proto.StartFristShow=function(){
		this._bg=new Image();
		this._bg.size(Laya.stage.width,Laya.stage.height);
		Laya.stage.addChild(this._bg);
		this._bg.skin="beijingnew.png";
	}

	__proto.ParseWebParam=function(){
		this.BOOTVERSION=Browser.BOOTVERSION+"";
		this.gameCdn="https://rbsg-cdn.zhijiangames.com/";
		MiniFileMgr.loadPath=this.gameCdn;
		Laya.URL.basePath=this.gameCdn;
	}

	__proto.loadSubpackage=function(index){
		var _$this=this;
		(index===void 0)&& (index=0);
		_super.prototype.loadSubpackage.call(this,index);
		var path=this.srclist[index];
		wx.loadSubpackage({
			name:path ,
			success:function (res){
				console.log("success "+path);
				index++;
				path=_$this.srclist[index];
				if(path==null)
					_$this.EnterGame();
				else{
					_$this.loadSubpackage(index);
				}
			},
			fail:function (res){
				console.log("fail"+path);
			}
		});
	}

	__proto.LoadCfg=function(){
		GameCfg.ParseWebParam();
		Laya.loader.load("bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
	}

	return LoadBootWXZJ;
})(LoadBootCfg)


//class boots.platform.vo.PlatformLoginNewMohe extends boots.platform.vo.PlatformLoginBase
var PlatformLoginNewMohe=(function(_super){
	function PlatformLoginNewMohe(pid,cid){
		this.is_idcard_bind=0;
		this.is_phone_bind=0;
		this.is_bind_alias=0;
		this.is_youke=0;
		this.vip_level=0;
		this._token=null;
		this._accountName=null;
		this._pid=null;
		this._clientinfo=null;
		this._caller=null;
		this._method=null;
		PlatformLoginNewMohe.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
			this.is_idcard_bind=obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"];
			this.is_phone_bind=obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"];
			this.is_bind_alias=obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"];
			this.is_youke=obj[PlatformLoginUtil.vo.channelName]["is_youke"];
			this.vip_level=obj[PlatformLoginUtil.vo.channelName]["vip_level"];
		}
	}

	__class(PlatformLoginNewMohe,'boots.platform.vo.PlatformLoginNewMohe',_super);
	var __proto=PlatformLoginNewMohe.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
		obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"]=this.is_idcard_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"]=this.is_phone_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"]=this.is_bind_alias;
		obj[PlatformLoginUtil.vo.channelName]["is_youke"]=this.is_youke;
		obj[PlatformLoginUtil.vo.channelName]["vip_level"]=this.vip_level;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	// PlatformUtil.platform.OnLogoutResult();
	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				this.is_idcard_bind=o.data.is_idcard_bind;
				this.is_phone_bind=o.data.is_phone_bind;
				this.is_bind_alias=o.data.is_bind_alias;
				this.is_youke=o.data.is_youke;
				this.vip_level=o.data.vip_level;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
				EventCenter.Event("server_verify");
			}
		}
		else{
			EventCenter.Event("server_verify");
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		console.log(o+"+---------------------->>>>>>>>>>>SDK返回");
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			this._accountName=o.uid;
			PlatformLoginUtil.vo.account=o.uid;
			this._pid=o.pid;
			this._clientinfo=o.clientinfo;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
				EventCenter.Event("server_verify",o);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	__getset(0,__proto,'accountClientinfo',function(){
		return this._clientinfo;
	});

	__getset(0,__proto,'accountName',function(){
		return this._accountName;
	});

	__getset(0,__proto,'accountPid',function(){
		return this._pid;
	});

	return PlatformLoginNewMohe;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginQQMiniProgram extends boots.platform.vo.PlatformLoginBase
var PlatformLoginQQMiniProgram=(function(_super){
	function PlatformLoginQQMiniProgram(pid,cid){
		PlatformLoginQQMiniProgram.__super.call(this,pid,cid);
	}

	__class(PlatformLoginQQMiniProgram,'boots.platform.vo.PlatformLoginQQMiniProgram',_super);
	var __proto=PlatformLoginQQMiniProgram.prototype;
	__proto.OnSelServer=function(){
		console.log("qqSDK选服-------------------");
	}

	return PlatformLoginQQMiniProgram;
})(PlatformLoginBase)


/**
*游戏自定义事件，data数据用于传递数据
*/
//class boots.GameEvent extends laya.events.Event
var GameEvent=(function(_super){
	function GameEvent(){
		GameEvent.__super.call(this);;
	}

	__class(GameEvent,'boots.GameEvent',_super);
	GameEvent.GAME_SOCKET_CLOSE="game_socket_close";
	GameEvent.GAME_SOCKET_OPEN="game_socket_open";
	GameEvent.GAME_ENTER_RES_LOADED="game_enter_res_loaded";
	GameEvent.GAME_RECONNECT="GAME_RECONNECT";
	GameEvent.SDK_LOGIN="sdk_login";
	GameEvent.SERVER_VERIFY="server_verify";
	GameEvent.UMENG_DEVICE_INFO="umeng_device_info";
	GameEvent.REQ_LOGOUT="REQ_LOGOUT";
	GameEvent.SHARE_SUCC="SHARE_SUCC";
	GameEvent.SUBSCRIBE_SUCC="SUBSCRIBE_SUCC";
	GameEvent.UPDATE_SUBSCRIBE_STATE="UPDATE_SUBSCRIBE_STATE";
	GameEvent.UPDATE_WD_STATE="UPDATE_WD_STATE";
	GameEvent.UPDATE_VERIFY_STATE="UPDATE_VERIFY_STATE";
	GameEvent.SAVE_SUCC="SAVE_SUCC";
	GameEvent.UPDATE_VERIFY_GOT_STATE="UPDATE_VERIFY_GOT_STATE";
	GameEvent.GAME_MAINPLAYER_FIGHTPOWER_CHANGE="game_mainplayer_fightpower_change";
	GameEvent.GAME_RANKLIST_UPDATE="game_ranklist_update";
	GameEvent.GAME_DATA_PARSE_COMPLETE="game_data_parse_complete";
	GameEvent.GAME_ENTER_MAP="game_enter_map";
	GameEvent.GAME_MAINUI_MODE_CHANGE="game_mainui_mode_change";
	GameEvent.GAME_SCENE_PLAYER_CREATE="game_scene_player_create";
	GameEvent.CLOSE_BOTTOM_PAGES="CLOSE_BOTTOM_PAGES";
	GameEvent.JING_MAI_UPDATE_LEVEL="JING_MAI_UPDATE_LEVEL";
	GameEvent.BEAUTY_SELECT_HEAD="BEAUTY_SELECT_HEAD";
	GameEvent.BEAUTY_COMPOSE_UPDATE_ITEM_STATE="BEAUTY_COMPOSE_UPDATE_ITEM_STATE";
	GameEvent.BEAUTY_UPDATE_BEAUTY_BEAN="BEAUTY_UPDATE_BEAUTY_BEAN";
	GameEvent.BEAUTY_UPDATE_FIGHT_STATE="BEAUTY_UPDATE_FIGHT_STATE";
	GameEvent.BEAUTY_UPDATE_XILIAN_SKILL="BEAUTY_UPDATE_XILIAN_SKILL";
	GameEvent.BEAUTY_UPDATE_UPGRADE_AUTO_STATE="BEAUTY_UPDATE_UPGRADE_AUTO_STATE";
	GameEvent.BEAUTY_UPDATE_UPGRADE_AUTO_BUY="BEAUTY_UPDATE_UPGRADE_AUTO_BUY";
	GameEvent.BEAUTY_UPDATE_TALENT_AUTO_STATE="BEAUTY_UPDATE_TALENT_AUTO_STATE";
	GameEvent.BEAUTY_UPDATE_UPGRADE_LEVEL_UP="BEAUTY_UPDATE_UPGRADE_LEVEL_UP";
	GameEvent.BEAUTY_UPDATE_LEVEL_PROGRESS="BEAUTY_UPDATE_LEVEL_PROGRESS";
	GameEvent.BEAUTY_UPDATE_TALENT_PROGRESS="BEAUTY_UPDATE_TALENT_PROGRESS";
	GameEvent.BEAUTY_COMPOSE_SUCCESS="BEAUTY_COMPOSE_SUCCESS";
	GameEvent.BEAUTY_YULING_SELECT_BEAUTY="BEAUTY_YULING_SELECT_BEAUTY";
	GameEvent.BEAUTY_UPDATE_SKILLS="BEAUTY_UPDATE_SKILLS";
	GameEvent.BEAUTY_UPDATE_YU_LING_LEVEL="BEAUTY_UPDATE_YU_LING_LEVEL";
	GameEvent.BEAUTY_UPDATE_ALL_YUHUN_ITEM="BEAUTY_UPDATE_ALL_YUHUN_ITEM";
	GameEvent.BEAUTY_UPDATE_ONE_YUHUN_ITEM="BEAUTY_UPDATE_ONE_YUHUN_ITEM";
	GameEvent.BEAUTY_UPDATE_ALL_MINGGE_ITEM="BEAUTY_UPDATE_ALL_MINGGE_ITEM";
	GameEvent.BEAUTY_UPDATE_ONE_MINGGE_ITEM="BEAUTY_UPDATE_ONE_MINGGE_ITEM";
	GameEvent.BEAUTY_DECOMPOSE_SUCCESS="BEAUTY_DECOMPOSE_SUCCESS";
	GameEvent.BEAUTY_ACTIVE_BEAUTY="BEAUTY_ACTIVE_BEAUTY";
	GameEvent.TEAM_UPDATE_LOCK_STATE="TEAM_UPDATE_LOCK_STATE";
	GameEvent.TEAM_UPDATE_PROFIT_COUNT="TEAM_UPDATE_PROFIT_COUNT";
	GameEvent.TEAM_UPDATE_FINISH_COPY="TEAM_UPDATE_FINISH_COPY";
	GameEvent.TEAM_UPDATE_MY_TEAM_ROOM="TEAM_UPDATE_MY_TEAM_ROOM";
	GameEvent.TEAM_UPDATE_MY_TEAM_MEMBER="TEAM_UPDATE_MY_TEAM_MEMBER";
	GameEvent.TEAM_UPDATE_ROOM_LIST="TEAM_UPDATE_ROOM_LIST";
	GameEvent.TEAM_UPDATE_START_STATE="TEAM_UPDATE_START_STATE";
	GameEvent.TEAM_UPDATE_MARRIAGE_ROOM="TEAM_UPDATE_MARRIAGE_ROOM";
	GameEvent.TEAM_UPDATE_MARRIAGE_Team="TEAM_UPDATE_MARRIAGE_Team";
	GameEvent.CloseTips="CloseTips";
	GameEvent.ZHULU_UPDATE_FINISH_MAX_COPY="ZHULU_UPDATE_FINISH_MAX_COPY";
	GameEvent.ZHULU_UPDATE_HELP_COUNT="ZHULU_UPDATE_HELP_COUNT";
	GameEvent.ZHULU_UPDATE_OPEN_BOX="ZHULU_UPDATE_OPEN_BOX";
	GameEvent.ZHULU_UPDATE_SWEEP_COPY="ZHULU_UPDATE_SWEEP_COPY";
	GameEvent.ZHULU_UPDATE_RECORD="ZHULU_UPDATE_RECORD";
	GameEvent.GUILD_UPDATE_LIST="GUILD_UPDATE_LIST";
	GameEvent.GUILD_UPDATE_MEMBER_LIST="GUILD_UPDATE_MEMBER_LIST";
	GameEvent.GUILD_UPDATE_APPLY_LIST="GUILD_UPDATE_APPLY_LIST";
	GameEvent.GUILD_UPDATE_HALL_INFO="GUILD_UPDATE_HALL_INFO";
	GameEvent.GUILD_UPDATE_MY_INFO="GUILD_UPDATE_MY_INFO";
	GameEvent.GUILD_UPDATE_CONTRIBUTION="GUILD_UPDATE_CONTRIBUTION";
	GameEvent.GUILD_UPDATE_MY_DUTY="GUILD_UPDATE_MY_DUTY";
	GameEvent.GUILD_UPDATE_NAME="GUILD_UPDATE_NAME";
	GameEvent.GUILD_UPDATE_LEVEL="GUILD_UPDATE_LEVEL";
	GameEvent.GUILD_UPDATE_MONEY="GUILD_UPDATE_MONEY";
	GameEvent.GUILD_UPDATE_NOTICE="GUILD_UPDATE_NOTICE";
	GameEvent.GUILD_UPDATE_ALL_SKILL="GUILD_UPDATE_ALL_SKILL";
	GameEvent.GUILD_UPDATE_SINGLE_SKILL="GUILD_UPDATE_SINGLE_SKILL";
	GameEvent.GUILD_UPDATE_RECORD="GUILD_UPDATE_RECORD";
	GameEvent.GUILD_RESIZE_NOTICE="GUILD_RESIZE_NOTICE";
	GameEvent.GUILD_CHOOSE_NOTICE="GUILD_CHOOSE_NOTICE";
	GameEvent.GUILD_UPDATE_SIGN_STATE="GUILD_UPDATE_SIGN_STATE";
	GameEvent.GUILD_UPDATE_SIGN_BOX_STATE="GUILD_UPDATE_SIGN_BOX_STATE";
	GameEvent.GUILD_UPDATE_GUARD_INFO="GUILD_UPDATE_GUARD_INFO";
	GameEvent.GUILD_UPDATE_GUARD_LV_EXP="GUILD_UPDATE_GUARD_LV_EXP";
	GameEvent.GUILD_UPDATE_GUARD_LV_GIFT="GUILD_UPDATE_GUARD_LV_GIFT";
	GameEvent.GUILD_UPDATE_GUARD_REWARD_STATE="GUILD_UPDATE_GUARD_REWARD_STATE";
	GameEvent.GUILD_UPDATE_GUARD_POINT="GUILD_UPDATE_GUARD_POINT";
	GameEvent.GUILD_UPDATE_GUARD_TASK="GUILD_UPDATE_GUARD_TASK";
	GameEvent.GUILD_UPDATE_CELEBRATE="GUILD_UPDATE_CELEBRATE";
	GameEvent.GUILD_UPDATE_REMAIN_PROFIT="GUILD_UPDATE_REMAIN_PROFIT";
	GameEvent.GUILD_UPDATE_REMAIN_HELP="GUILD_UPDATE_REMAIN_HELP";
	GameEvent.GUILD_UPDATE_THRESHOLD="GUILD_UPDATE_THRESHOLD";
	GameEvent.GUILD_UPDATE_EXCHANGE_ITEMS="GUILD_UPDATE_EXCHANGE_ITEMS";
	GameEvent.GUILD_UPDATE_EXCHANGE_ITEM="GUILD_UPDATE_EXCHANGE_ITEM";
	GameEvent.GUILD_UPDATE_EXCHANGE_TIMESTAMP="GUILD_UPDATE_EXCHANGE_TIMESTAMP";
	GameEvent.GUILD_UPDATE_SQUARD_TASKS="GUILD_UPDATE_SQUARD_TASKS";
	GameEvent.GUILD_UPDATE_ONE_SQUARD_TASK="GUILD_UPDATE_ONE_SQUARD_TASK";
	GameEvent.GUILD_UPDATE_AUTO_TASK="GUILD_UPDATE_AUTO_TASK";
	GameEvent.GUILD_RECRUIT="GUILD_RECRUIT";
	GameEvent.GUILD_BOSS_UPDATE_BOSS_ALL_INFO="GUILD_BOSS_UPDATE_BOSS_ALL_INFO";
	GameEvent.GUILD_BOSS_UPDATE_BOSS_HP="GUILD_BOSS_UPDATE_BOSS_HP";
	GameEvent.GUILD_BOSS_UPDATE_MY_REBORN="GUILD_BOSS_UPDATE_MY_REBORN";
	GameEvent.GUILD_BOSS_UPDATE_RANK_LIST="GUILD_BOSS_UPDATE_RANK_LIST";
	GameEvent.GUILD_BOSS_UPDATE_PANEL_INFO="GUILD_BOSS_UPDATE_PANEL_INFO";
	GameEvent.GUILD_BOSS_UPDATE_AUTO_STATE="GUILD_BOSS_UPDATE_AUTO_STATE";
	GameEvent.GUILD_BOSS_INFO="GUILD_BOSS_INFO";
	GameEvent.GUILD_BATTLE_UPDATE_DOOR_INFO="GUILD_BATTLE_UPDATE_DOOR_INFO";
	GameEvent.GUILD_BATTLE_UPDATE_MONSTER_INFO="GUILD_BATTLE_UPDATE_MONSTER_INFO";
	GameEvent.GUILD_BATTLE_UPDATE_MONSTER_COLD="GUILD_BATTLE_UPDATE_MONSTER_COLD";
	GameEvent.GUILD_BATTLE_UPDATE_BOSS_INFO="GUILD_BATTLE_UPDATE_BOSS_INFO";
	GameEvent.GUILD_BATTLE_UPDATE_YUXI_INFO="GUILD_BATTLE_UPDATE_YUXI_INFO";
	GameEvent.GUILD_BATTLE_UPDATE_SCORE="GUILD_BATTLE_UPDATE_SCORE";
	GameEvent.GUILD_BATTLE_CHANGE_LAYER="GUILD_BATTLE_CHANGE_LAYER";
	GameEvent.GUILD_BATTLE_UPDATE_YUXI_RECORDS="GUILD_BATTLE_UPDATE_YUXI_RECORDS";
	GameEvent.GUILD_BATTLE_UPDATE_SCORE_REWARD="GUILD_BATTLE_UPDATE_SCORE_REWARD";
	GameEvent.GUILD_BATTLE_UPDATE_ENTER_STATE="GUILD_BATTLE_UPDATE_ENTER_STATE";
	GameEvent.GUILD_BATTLE_UPDATE_MEMBER_NUM="GUILD_BATTLE_UPDATE_MEMBER_NUM";
	GameEvent.GUILD_BATTLE_UPDATE_SCENE_NUM="GUILD_BATTLE_UPDATE_SCENE_NUM";
	GameEvent.GUILD_BATTLE_UPDATE_YUXI_OWNER="GUILD_BATTLE_UPDATE_YUXI_OWNER";
	GameEvent.ACTIVITY_UPDATE_STATE="ACTIVITY_UPDATE_STATE";
	GameEvent.ACTIVUTY_TRY_CHANGE="ACTIVUTY_TRY_CHANGE";
	GameEvent.ACTIVITY_SHOW_ACTIVITY="ACTIVITY_SHOW_ACTIVITY";
	GameEvent.NINE_HEAVY_UPDATE_RANK_LIST="NINE_HEAVY_UPDATE_RANK_LIST";
	GameEvent.NINE_HEAVY_UPDATE_SCORE="NINE_HEAVY_UPDATE_SCORE";
	GameEvent.NINE_HEAVY_UPDATE_GOT_REWARDS="NINE_HEAVY_UPDATE_GOT_REWARDS";
	GameEvent.NINE_HEAVY_UPDATE_FLOOR="NINE_HEAVY_UPDATE_FLOOR";
	GameEvent.NINE_HEAVY_UPDATE_AUTO_CHALLENGE="NINE_HEAVY_UPDATE_AUTO_CHALLENGE";
	GameEvent.BURN_CHI_BI_UPDATE_ALL_INFO="BURN_CHI_BI_UPDATE_ALL_INFO";
	GameEvent.BURN_CHI_BI_UPDATE_DOING_MAX_NUM="BURN_CHI_BI_UPDATE_DOING_MAX_NUM";
	GameEvent.BURN_CHI_BI_UPDATE_REMAIN_NUM="BURN_CHI_BI_UPDATE_REMAIN_NUM";
	GameEvent.BURN_CHI_BI_UPDATE_ACCEPT_TASKS="BURN_CHI_BI_UPDATE_ACCEPT_TASKS";
	GameEvent.BURN_CHI_BI_UPDATE_DOING_TASKS="BURN_CHI_BI_UPDATE_DOING_TASKS";
	GameEvent.BURN_CHI_BI_SELECT_BEAUTY="BURN_CHI_BI_SELECT_HERO";
	GameEvent.BURN_CHI_BI_START_TASK_SUCCESS="BURN_CHI_BI_START_TASK_SUCCESS";
	GameEvent.BURN_CHI_BI_START_TASK_COUNTCHANGE="BURN_CHI_BI_START_TASK_COUNTCHANGE";
	GameEvent.PATROL_UPDATE_RANK="PATROL_UPDATE_RANK";
	GameEvent.PATROL_UPDATE_ALL="PATROL_UPDATE_ALL";
	GameEvent.PATROL_UPDATE_DOOR="PATROL_UPDATE_DOOR";
	GameEvent.PATROL_UPDATE_TARGET="PATROL_UPDATE_TARGET";
	GameEvent.PATROL_UPDATE_REWARD_STATE="PATROL_UPDATE_REWARD_STATE";
	GameEvent.PATROL_UPDATE_MOBAI="PATROL_UPDATE_MOBAI";
	GameEvent.PATROL_UPDATE_CHALLENGE_COUNT="PATROL_UPDATE_CHALLENGE_COUNT";
	GameEvent.PATROL_UPDATE_SEARCH_COUNT="PATROL_UPDATE_SEARCH_COUNT";
	GameEvent.PATROL_UPDATE_BUY_COUNT="PATROL_UPDATE_BUY_COUNT";
	GameEvent.PATROL_UPDATE_INTEGER="PATROL_UPDATE_INTEGER";
	GameEvent.PATROL_UPDATE_REVENGE="PATROL_UPDATE_REVENGE";
	GameEvent.PATROL_UPDATE_BAZHU_RANK="PATROL_UPDATE_BAZHU_RANK";
	GameEvent.PATROL_UPDATE_RECOVER_TIME="PATROL_UPDATE_RECOVER_TIME";
	GameEvent.EMPTY_CITY_UPDATE_CITY_LIST="EMPTY_CITY_UPDATE_CITY_LIST";
	GameEvent.EMPTY_CITY_UPDATE_ONE_CITY="EMPTY_CITY_UPDATE_ONE_CITY";
	GameEvent.EMPTY_CITY_UPDATE_CD="EMPTY_CITY_UPDATE_CD";
	GameEvent.EMPTY_CITY_UPDATE_TIMES="EMPTY_CITY_UPDATE_TIMES";
	GameEvent.EMPTY_CITY_UPDATE_OPEN_STATE="EMPTY_CITY_UPDATE_OPEN_STATE";
	GameEvent.FIT_BEFORE_FLY_COMPLETE="FIT_BEFORE_FLY_COMPLETE";
	GameEvent.FIT_AFTER_FLY_COMPLETE="FIT_AFTER_FLY_COMPLETE";
	GameEvent.FIT_SELECT_HEAD="FIT_SELECT_HEAD";
	GameEvent.FIT_SELECT_HEAD2="FIT_SELECT_HEAD2";
	GameEvent.FIT_UPDATE_FIT="FIT_UPDATE_FIT";
	GameEvent.FIT_UNLOCK_FIT="FIT_UNLOCK_FIT";
	GameEvent.FIT_UPDATE_REST="FIT_UPDATE_REST";
	GameEvent.FIT_UPDATE_ART="FIT_UPDATE_ART";
	GameEvent.FIT_UPDATE_SELECT_FIT="FIT_UPDATE_SELECT_FIT";
	GameEvent.FIT_FIT_SUCCESS="FIT_FIT_SUCCESS";
	GameEvent.FIT_UPDATE_UI="FIT_UPDATE_UI";
	GameEvent.FIT_REQ_SET_PARTICIPANT="FIT_REQ_SET_PARTICIPANT";
	GameEvent.FIT_SET_PARTICIPANT_SUCC="FIT_SET_PARTICIPANT_SUCC";
	GameEvent.FIT_SELECT_DUNGEON="FIT_SELECT_DUNGEON";
	GameEvent.FIT_UPDATE_CHALLENGE_LAYER="FIT_UPDATE_CHALLENGE_LAYER";
	GameEvent.FIT_UPDATE_SWEEP_COUNT="FIT_UPDATE_SWEEP_COUNT";
	GameEvent.FIT_UPDATE_GOT_PRIZE_LAYER="FIT_UPDATE_GOT_PRIZE_LAYER";
	GameEvent.Fit_UPDATE_FIT_SKILL="Fit_UPDATE_FIT_SKILL";
	GameEvent.FIT_SET_SKILL_SUCC="FIT_SET_SKILL_SUCC";
	GameEvent.FIT_SELECT_JC_HEAD="FIT_SELECT_JC_HEAD";
	GameEvent.FIT_GEM_UPDATE_ALL_GEM="FIT_GEM_UPDATE_ALL_GEM";
	GameEvent.FIT_GEM_UPDATE_ONE_GEM="FIT_GEM_UPDATE_ONE_GEM";
	GameEvent.FIT_GEM_DISPOSE="FIT_GEM_DISPOSE";
	GameEvent.VIDEO_HALL_GET_VIDEOS="VIDEO_HALL_GET_VIDEOS";
	GameEvent.VIDEO_HALL_UPDATE_LIKE_NUM="VIDEO_HALL_UPDATE_LIKE_NUM";
	GameEvent.VIDEO_HALL_UPDATE_ONE_LIKE_NUM="VIDEO_HALL_UPDATE_ONE_LIKE_NUM";
	GameEvent.VIDEO_HALL_UPDATE_ONE_PLAY_NUM="VIDEO_HALL_UPDATE_ONE_PLAY_NUM";
	GameEvent.MYSTERY_STORE_UPDATE_SHOP="MYSTERY_STORE_UPDATE_SHOP";
	GameEvent.MYSTERY_STORE_UPDATE_BUY_TIME="MYSTERY_STORE_UPDATE_BUY_TIME";
	GameEvent.MYSTERY_STORE_UPDATE_SHOP2="MYSTERY_STORE_UPDATE_SHOP2";
	GameEvent.TEAM_UPDATE_MY_TEAM="TEAM_UPDATE_MY_TEAM";
	GameEvent.TEAM_UPDATE_TEAM_LIST="TEAM_UPDATE_TEAM_LIST";
	GameEvent.AMULET_INIT="AMULET_INIT";
	GameEvent.AMULET_UPDATE_TASK="AMULET_UPDATE_TASK";
	GameEvent.ANSWER_QUESTION="ANSWER_QUESTION";
	GameEvent.ANSWER_RESULT="ANSWER_RESULT";
	GameEvent.ANSWER_END="ANSWER_END";
	GameEvent.ANSWER_TIME="ANSWER_TIME";
	GameEvent.VIPCHANGE="VIPCHANGE";
	GameEvent.VIPEXP="VIPEXP";
	GameEvent.CHARGESUCCESS="CHARGESUCCESS";
	GameEvent.UPGRADEREWARD="UPGRADEREWARD";
	GameEvent.RED_POINT_CHANGE="RED_POINT_CHANGE";
	GameEvent.ClOSE_SHOW_LINE="ClOSE_SHOW_LINE";
	GameEvent.CLOSE_MELT_PANEL="CLOSE_MELT_PANEL";
	GameEvent.FIGHT_POSITION_CHANGE="FIGHT_POSITION_CHANGE";
	GameEvent.BUSINESS_TYPE_CHANGE="BUSINESS_TYPE_CHANGE";
	GameEvent.JUE_WEI_UPDATE_TASK="JUE_WEI_UPDATE_TASK";
	GameEvent.JUE_WEI_UPDATE_LEVEL="JUE_WEI_UPDATE_LEVEL";
	GameEvent.EXCHANGGECOIN="EXCHANGGECOIN";
	GameEvent.MONTHANDLIFE="MONTHANDLIFE";
	GameEvent.RECHARGEINFO="rec_recharge_info";
	GameEvent.BATTLELOSS="BATTLELOSS";
	GameEvent.YBTIME="YBTIME";
	GameEvent.DROPCHANGE="DROPCHANGE";
	GameEvent.CLICK_MAINCITY="CLICK_MAINCITY";
	GameEvent.NEWFUNCOPEN="NEWFUNCOPEN";
	GameEvent.OPTION_GIFT_SELECT="OPTION_GIFT_SELECT";
	GameEvent.TAKE_ALL_PRICE="TAKE_ALL_PRICE";
	GameEvent.CARDCHANGE="CARDCHANGE";
	GameEvent.UPDATE_SELECT_MATERIAL_DUN="UPDATE_SELECT_MATERIAL_DUN";
	GameEvent.VIEW_OPEN="VIEW_OPEN";
	GameEvent.VIEW_CLOSE="VIEW_CLOSE";
	GameEvent.BATTLEENDPATH="BATTLEENDPATH";
	GameEvent.PET_DISBAND_BACK="PET_DISBAND_BACK";
	GameEvent.FAST_HANDUPCHANGE="FAST_HANDUPCHANGE";
	GameEvent.QUANMING_BOSS_UPDATE_BOSS_ALL_INFO="QUANMING_BOSS_UPDATE_BOSS_ALL_INFO";
	GameEvent.QUANMING_BOSS_UPDATE_BOSS_HP="QUANMING_BOSS_UPDATE_BOSS_HP";
	GameEvent.QUANMING_BOSS_UPDATE_MY_REBORN="QUANMING_BOSS_UPDATE_MY_REBORN";
	GameEvent.QUANMING_BOSS_UPDATE_RANK_LIST="QUANMING_BOSS_UPDATE_RANK_LIST";
	GameEvent.QUANMING_BOSS_UPDATE_PANEL_INFO="QUANMING_BOSS_UPDATE_PANEL_INFO";
	GameEvent.QUANMING_BOSS_UPDATE_AUTO_STATE="QUANMING_BOSS_UPDATE_AUTO_STATE";
	GameEvent.CITYMAINPANELSHOW=" CITYMAINPANELSHOW";
	return GameEvent;
})(Event)


/**
*http请求服务器列表用的
*/
//class boots.selserver.med.SelServerHttpMediator extends boots.selserver.med.SelServerMediator
var SelServerHttpMediator=(function(_super){
	function SelServerHttpMediator(p){
		// 获取服务器(最近登录)
		this.URL_LAST_SERVER="/server?sign={@}&user={@}";
		// 获取服务器组
		this.URL_SERVER_GROUP="/group?sign={@}";
		// 获取服务器(静态组，单个区的服务器列表)
		this.URL_SERVERS_LIST="/server?sign={@}&group={@}";
		// 请求选中服的服务器信息（主要是ip和端口）
		this.URL_SEVER_INFO="/login?server={@}&user={@}";
		// 上次登陆的组（前端定义的，不要和后端重了）
		this._lastLoginGroup=999999;
		this._clickCount=0;
		this._clickTime=0;
		// http请求相关
		this._isReqLastLogin=false;
		this._lastLoginZone=new SelZoneVo();
		this._btnServers=[];
		SelServerHttpMediator.__super.call(this,p);
		this._p.imgSelServer.on("click",this,this.ClickShowServerList);
		this._p.btnClose.on("click",this,this.HideServerList);
		this._p.btnBack.on("click",this,this.HideServerList);
		this._p.btnLogin.on("click",this,this.ClickLogin);
		this._p.btnAgreement.on("click",this,this.ClickAgreement);
		this._p.btnNotice.on("click",this,this.ClickNotice);
		this._p.radioServerTab.on("change",this,this.OnChangeGroupEnd);
		this._lastLoginZone.zoneID=this._lastLoginGroup;
		this._lastLoginZone.zoneName="最近登陆服";
		if(Web37Util.isOpen||WebfingertipUtil.isOpen||Browser.onMiniGame||WebmojieUtil.isOpen){
			this._p.txtAccount.visible=false;
			this._p.btnLogin.y=this._p.imgSelServer.y+this._p.imgSelServer.height+10;
		}
		this._p.sprdebug.on("click",this,this.ClickDebug);
	}

	__class(SelServerHttpMediator,'boots.selserver.med.SelServerHttpMediator',_super);
	var __proto=SelServerHttpMediator.prototype;
	__proto.ClickDebug=function(){
		if (Laya.timer.currTimer-this._clickTime > 3000)this._clickCount=0;
		else this._clickCount++;
		this._clickTime=Laya.timer.currTimer;
		if (this._clickCount > 10){
			this._showTest=true;
			this._p.boxtest.visible=true;
			this._p.server_ip.text="192.168.30.153";
			this._p.server_port.text="13001";
			this._p.server_id.text="60005";
		}
	}

	__proto.ClickNotice=function(){
		if(this._curServer==null||this._curServer.serverID==0){
			AlertBootExt.Show("无法获取公告，请检查您的网络连接");
			return;
		}
		if(!NoticeComPanelExt.IsShow){
			NoticeComPanelExt.Show(2,this._curServer.serverID,true);
		}
		else
		NoticeComPanelExt.Hide();
	}

	__proto.OnShow=function(){
		_super.prototype.OnShow.call(this);
		this.UpdateDefault();
	}

	// Login();
	__proto.OnHide=function(){
		_super.prototype.OnHide.call(this);
		Laya.timer.clear(this,this._DelayHttpReqServers);
	}

	__proto.ClickShowServerList=function(){
		this.ShowServerList();
		if (this._lastLoginZone.servers.length==0){
			this.HttpReqLastLogin();
		}
		if (this._zones.length==0){
			this.HttpReqZone();
			}else{
			this.UpdateZoneList();
		}
	}

	__proto.ClickServer=function(e){
		var vo=(e.currentTarget).vo;
		if(vo==null || vo.IsNotOpen()){
			AlertBootExt.Show("服务器正在维护中");
			return;
		}
		this.UpdateLoginServer(vo,false);
		this.HideServerList();
	}

	__proto.OnChangeGroupEnd=function(){
		var g=this._zones[this._p.radioServerTab.selectedIndex];
		if (g==null)return;
		this._curZone=g;
		if (this._curZone.servers.length > 0){
			this.UpdateServers();
			}else{
			if (this._curZone==this._lastLoginZone){
				this.HttpReqLastLogin();
				}else{
				this.HttpReqServers(this._curZone.zoneID);
			}
		}
	}

	__proto.ClickLogin=function(){
		this.Login();
	}

	__proto.ClickAgreement=function(){
		AgreementExt.ShowHide();
	}

	__proto.Login=function(){
		if(Browser.inWeChat&&Browser.IszhijianWeChat==false){
			var obj={};
			obj.id=1003;
			obj.num="";
			obj.isRecahrge="";
			window.WeChatSDK.WeChatSDKReportEvent(obj);
			var obj1={};
			obj1.id=1006;
			obj1.num="";
			obj1.isRecahrge="";
			window.WeChatSDK.WeChatSDKReportEvent(obj1);
			var time=BootUtil.GetTimer();
			var date=new Date(time);
			var YY=date.getFullYear()+'-';
			var MM=(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1)+'-';
			var DD=(date.getDate()< 10 ? '0'+(date.getDate()):date.getDate());
			var hh=(date.getHours()< 10 ? '0'+date.getHours():date.getHours())+':';
			var mm=(date.getMinutes()< 10 ? '0'+date.getMinutes():date.getMinutes())+':';
			var ss=(date.getSeconds()< 10 ? '0'+date.getSeconds():date.getSeconds());
			console.log("开始初始化（开始读条）时间-------------------------"+YY+MM+DD+" "+hh+mm+ss);
		}
		if (!this._showTest &&this._curServer==null){
			this.HttpReqLastLogin();
			return;
		}
		if (!this._showTest &&this._curServer.serverIP==null){
			this.HttpReqServerInfo(this._curServer.serverID);
			return;
		}
		if(this._showTest){
			PlatformLoginUtil.vo.server_ip=this._p.server_id.text;
			PlatformLoginUtil.vo.server_id=parseInt(this._p.server_id.text);
			PlatformLoginUtil.vo.server_port=parseInt(this._p.server_id.text);
		}
		else{
			PlatformLoginUtil.vo.server_ip=this._curServer.serverIP;
			PlatformLoginUtil.vo.server_name=this._curServer.serverName;
			PlatformLoginUtil.vo.server_port=this._curServer.serverPort;
			PlatformLoginUtil.vo.server_id=this._curServer.serverID;
			PlatformLoginUtil.vo.snoNum=this._curServer.snoNum;
			if(!Web37Util.isOpen&&!WebfingertipUtil.isOpen&&!Browser.onMiniGame&&!WebmojieUtil.isOpen){
				PlatformLoginUtil.vo.adult=1;
				PlatformLoginUtil.vo.account=this._p.txtAccount.text;
			}
			PlatformLoginUtil.vo.mainversion=this._curServer.mainversion;
			this.SetEnable(false);
			LocalStorage.setItem("account",PlatformLoginUtil.vo.account);
			LocalStorage.setItem("serverhost",PlatformLoginUtil.vo.server_ip);
			LocalStorage.setItem("serverport",PlatformLoginUtil.vo.server_port.toString());
			LocalStorage.setItem("serverid",PlatformLoginUtil.vo.server_id.toString());
			LocalStorage.setItem("servername",PlatformLoginUtil.vo.server_name);
			LocalStorage.setItem("mainversion",PlatformLoginUtil.vo.mainversion);
		}
		SelServerUtil.SelServer();
	}

	__proto.UpdateDefault=function(){
		var acc=LocalStorage.getItem("account");
		var ip=LocalStorage.getItem("serverhost");
		var port=parseInt(LocalStorage.getItem("serverport"));
		var serverid=parseInt(LocalStorage.getItem("serverid"));
		var servername=LocalStorage.getItem("servername");
		var mainversion=LocalStorage.getItem("mainversion");
		if (acc==null){
			acc="youracc";
		}
		if(WebfingertipUtil.isOpen){
			var loginParams=window.zhijianParams();
			acc=loginParams["qqesuid"];
		}
		if(WebmojieUtil.isOpen){
			var loginParams=window.mojieParams();
			acc=loginParams["Uid"];
		}
		if(!Web37Util.isOpen&&!WebfingertipUtil.isOpen&&!WebmojieUtil.isOpen)
			PlatformLoginUtil.vo.account=acc;
		if(!Web37Util.isOpen)
			PlatformLoginUtil.vo.account=acc;
		if(!Browser.onMiniGame)
			PlatformLoginUtil.vo.account=acc;
		this._p.txtAccount.text=acc;
		if(Browser.inWeChat&&Browser.IszhijianWeChat==false){
			var obj={};
			obj.id=1005;
			obj.num="";
			obj.isRecahrge="";
			window.WeChatSDK.WeChatSDKReportEvent(obj);
		}
		this.HttpReqLastLogin();
		this.HttpReqZone();
	}

	//直接请求服务器列表
	__proto.UpdateLoginServer=function(vo,isUpdateNewest){
		(isUpdateNewest===void 0)&& (isUpdateNewest=true);
		this._curServer=vo;
		this._p.txtServer.text="当前服："+vo.serverName;
		if(isUpdateNewest)
			this.UpdateNewestServer(vo);
	}

	// UpdateNewestServer();
	__proto.UpdateNewestServer=function(vo){
		if(vo !=null){
			this._p.imglatest.visible=true;
			this._p.lablatest.text=vo.serverName;
		}
		else{
			this._p.imglatest.visible=false;
			this._p.lablatest.text="";
		}
	}

	// 刷新服务器列表
	__proto.UpdateServers=function(){
		var list=this._curZone.servers;
		var count=0;
		for (var i=0;i < list.length;++i){
			var vo=list[i];
			var btn=this._btnServers[count];
			if (btn==null){
				btn=new SelServerCellExt();
				this._btnServers[count]=btn;
			}
			btn.x=0;
			btn.y=btn.height *i;
			btn.SetData(vo);
			btn.on("click",this,this.ClickServer);
			this._p.panServerList.addChild(btn);
			count++;
		}
		for (;count < this._btnServers.length;++count){
			this._btnServers[count].removeSelf();
		}
	}

	__proto.SetEnable=function(value){
		this._p.btnLogin.gray=!value;
		this._p.btnLogin.mouseEnabled=value;
		this._p.imgServerBG.mouseEnabled=value;
	}

	__proto.ShowServerList=function(){
		this._p.showHideServerBg(true);
		if(Web37Util.isWideScreen)
			Tween.to(this._p.imgServerBG,{y:(this._p.imgbg.height-this._p.imgServerBG.height*this._p.imgServerBG.scaleY)*0.5,alpha:1},200);
		else
		Tween.to(this._p.imgServerBG,{y:(this._p.height-this._p.imgServerBG.height*this._p.imgServerBG.scaleY)*0.5,alpha:1},200);
	}

	__proto.HideServerList=function(){
		this._p.showHideServerBg(false);
		if(Web37Util.isWideScreen)
			Tween.to(this._p.imgServerBG,{y:this._p.imgbg.height,alpha:0},200);
		else
		Tween.to(this._p.imgServerBG,{y:this._p.height,alpha:0},200);
	}

	__proto.GetZone=function(id){
		for (var i=0;i < this._zones.length;++i){
			if (this._zones[i].zoneID==id)return this._zones[i];
		}
		return null;
	}

	// 获取上次登陆的服务器
	__proto.HttpReqLastLogin=function(){
		if (this._isReqLastLogin)return;
		this._isReqLastLogin=true;
		var _reqLastLogin=new RequestUtil(this,this.OnHttpReqLastSuc,this.OnHttpReqLastError);
		_reqLastLogin.Send(this.URL_SERVER_HOST+BootUtil.FormatStr(this.URL_LAST_SERVER,[GameCfg.SIGN,PlatformLoginUtil.vo.account]));
	}

	// 请求上次登陆成功
	__proto.OnHttpReqLastSuc=function(result){
		if (!this._p || this._p.destroyed)return;
		this._isReqLastLogin=false;
		this.isReqLastSucc=true;
		var obj;
		if(Browser.release==false&&(Browser.inQQ||Browser.inWeChat||Browser.inBiLi))
			obj=null;
		else
		obj=BootUtil.decode(result);
		if (obj !=null && obj.length > 0){
			console.log("last login:"+result);
			this.ParseLastLogin(obj);
			if (this._curServer==null)
				this.UpdateLoginServer(this._lastLoginZone.servers[0]);
			NoticeComPanelExt.Show(2,this._curServer.serverID);
			if (this._zones.indexOf(this._lastLoginZone)==-1){
				this._zones.unshift(this._lastLoginZone);
				this.UpdateZoneList();
			}
			this.UpdateServers();
			}else{
			this.OnHttpReqLastError(obj ? obj.msg :"error");
		}
		this.checkServer();
	}

	// 请求上次登陆失败
	__proto.OnHttpReqLastError=function(result){
		if (!this._p || this._p.destroyed)return;
		this._isReqLastLogin=false;
		console.log("last server error:"+result);
	}

	// 获取大区列表
	__proto.HttpReqZone=function(){
		var _reqZone=new RequestUtil(this,this.OnHttpReqZoneSuc,this.OnHttpReqZoneError);
		_reqZone.Send(this.URL_SERVER_HOST+BootUtil.FormatStr(this.URL_SERVER_GROUP,[GameCfg.SIGN]));
	}

	// 大区请求成功
	__proto.OnHttpReqZoneSuc=function(result){
		if (!this._p || this._p.destroyed)return;
		var obj=BootUtil.decode(result);
		if (obj !=null && obj.length > 0){
			console.log("req zone:"+result);
			this._zones.length=0;
			this._zones.push(this._lastLoginZone);
			var arr=obj;
			if ((typeof arr=='string'))arr=BootUtil.decode(arr);
			for (var i=0;i < arr.length;++i){
				this._zones.push(this.ParseZone(arr[i]));
			}
			this.UpdateZoneList();
			}else{
			this.OnHttpReqZoneError(obj ? obj.msg :"error");
		}
	}

	// 大区请求失败
	__proto.OnHttpReqZoneError=function(result){
		if (!this._p || this._p.destroyed)return;
		AlertBootExt.Show("服务器区服获取失败，请点击选服重试");
	}

	// 获取大区的服务器列表
	__proto.HttpReqServers=function(groupId){
		Laya.timer.once(1,this,this._DelayHttpReqServers,[groupId]);
	}

	__proto._DelayHttpReqServers=function(groupId){
		var _reqServers=new RequestUtil(this,this.OnHttpReqServersSuc,this.OnHttpReqServersError,groupId);
		_reqServers.Send(this.URL_SERVER_HOST+BootUtil.FormatStr(this.URL_SERVERS_LIST,[GameCfg.SIGN,groupId]));
	}

	// 大区服务器请求成功
	__proto.OnHttpReqServersSuc=function(result,groupId){
		if (!this._p || this._p.destroyed)return;
		this.isReqListSucc=true;
		var z=this.GetZone(groupId);
		if (z !=null){
			z.servers.length=0;
			}else{
			console.log("服务器列表返回，但是没找到组："+groupId);
		};
		var obj=BootUtil.decode(result);
		if (obj !=null && obj.length > 0){
			console.log("req servers:"+result);
			var arr=obj;
			for (var i=0;i < arr.length;++i){
				var server=this.ParseServer(arr[i]);
				if (z){
					z.AddServer(server);
				}
			}
			if (groupId==9999){
				this.CreateTestServers(z);
			}
			this.UpdateServers();
			var server=this._curServer;
			if (this._curServer==null){
				this.UpdateLoginServer(z.newestServer);
			}
			if(this.isReqLastSucc && this._isReqLastLogin){
				NoticeComPanelExt.Show(2,this._curServer.serverID);
			}
			else{
				if(server==null)
					NoticeComPanelExt.Show(1,this._curServer.serverID);
			}
			}else{
			this.OnHttpReqServersError(obj ? obj.msg :"error");
		}
		this.checkServer();
	}

	// 大区服务器请求失败
	__proto.OnHttpReqServersError=function(result){
		if (!this._p || this._p.destroyed)return;
		AlertBootExt.Show("servers error:"+result);
	}

	// 获取指定服务器信息
	__proto.HttpReqServerInfo=function(serverId){
		var _reqServers=new RequestUtil(this,this.OnHttpReqServerInfoSuc,this.OnHttpReqServerInfoError);
		_reqServers.Send(this.URL_SERVER_HOST+BootUtil.FormatStr(this.URL_SEVER_INFO,[serverId,PlatformLoginUtil.vo.account]));
	}

	// 请求服务器信息成功
	__proto.OnHttpReqServerInfoSuc=function(result){
		if (!this._p || this._p.destroyed)return;
		var obj=BootUtil.decode(result);
		if (obj !=null && obj.host !=null){
			console.log("serverinfo:"+result);
			this._curServer.serverIP=obj.host;
			this._curServer.serverPort=obj.port;
			this.Login();
			}else{
			this.OnHttpReqServerInfoError(obj ? obj.msg :"error");
		}
	}

	// 请求服务器信息失败
	__proto.OnHttpReqServerInfoError=function(result){
		if (!this._p || this._p.destroyed)return;
		console.log("serverinfo error:"+result);
		AlertBootExt.Show('获取服务器数据失败，请点击登陆重试');
	}

	__proto.ParseLastLogin=function(obj){
		var vos=[];
		for (var i=0;i < obj.length;++i){
			vos.push(this.ParseServer(obj[i]));
		}
		vos.sort(function(o1,o2){
			return o1.time > o2.time ?-1 :(o1.time < o2.time ? 1 :0);
		});
		this._lastLoginZone.servers.length=0;
		for (var i=0;i < vos.length;++i){
			this._lastLoginZone.AddServer(vos[i]);
		}
	}

	__proto.ParseServer=function(data){
		if ((typeof data=='string'))
			data=BootUtil.decode(data);
		var ret=new SelServerVo();
		ret.serverIP=data.host;
		ret.serverPort=data.port;
		ret.serverID=data.id;
		ret.serverName=data.name;
		ret.serverState=data.state=="OFF" ? 0 :1;
		ret.mainversion=data.main;
		ret.time=data.time==null ? 0 :data.time;
		ret.snoNum=data.sno==null ? 0 :data.sno;
		return ret;
	}

	__proto.ParseZone=function(data){
		if ((typeof data=='string'))
			data=BootUtil.decode(data);
		var ret=new SelZoneVo();
		ret.zoneID=data.id;
		ret.zoneName=data.name;
		return ret;
	}

	__proto.CreateTestServers=function(zone){}
	// zone.AddServer(CreateServerVo("刘帅",1016,"192.168.0.43",8080));
	__proto.CreateServerVo=function(n,zoneId,ip,port){
		var ret=new SelServerVo();
		ret.serverName=n;
		ret.serverID=zoneId;
		ret.serverIP=ip;
		ret.serverPort=port;
		return ret;
	}

	//在37web端进游戏时，新用户直接进入游戏，老用户需要选服进入
	__proto.checkServer=function(){
		if(!Web37Util.isOpen)
			return;
		if(!Browser.onMiniGame)
			return;
		if(!this.isReqLastSucc || !this.isReqListSucc)
			return;
		if(this._lastLoginZone==null || this._lastLoginZone.servers.length==0){
			if(this._curServer !=null)
				this.Login();
		}
	}

	// protected var URL_SERVER_HOST:String="https://h5.jump.bbmmhh.com";
	__getset(0,__proto,'URL_SERVER_HOST',function(){
		if(WebfingertipUtil.isOpen||GameCfg.GAMENAME==GameCfg.GAMENAME_BMH||GameCfg.GAMENAME==GameCfg.GAMENAME_FINGERAPP){
			return "https://h5.zhijian.popcornie.com";
		}
		else if(WebmojieUtil.isOpen)
		return "https://h5.zhijian.popcornie.com";
		else if(GameCfg.GAMENAME==GameCfg.GAMENAME_XIYOUAPK||GameCfg.GAMENAME==GameCfg.GAMENAME_ZHANGYUAPK)
		return "https://h5.c.popcornie.com";
		else if(Web37Util.isOpen)
		return "https://h5.jump.bbmmhh.com";
		else if (Browser.inWeChat)
		return "https://h5.c.popcornie.com";
		else if (Browser.inQQ)
		return "https://h5.c.popcornie.com";
		else if (Browser.inBiLi)
		return "https://h5.c.popcornie.com";
		else
		return "http://info.c.popcornie.com";
	});

	return SelServerHttpMediator;
})(SelServerMediator)


//class boots.LoadBootApp extends boots.LoadBootCfg
var LoadBootApp=(function(_super){
	function LoadBootApp(){
		LoadBootApp.__super.call(this);
		EventCenter.On("APP_NATIVE",this,this.LoadCfg);
	}

	__class(LoadBootApp,'boots.LoadBootApp',_super);
	var __proto=LoadBootApp.prototype;
	__proto.LoadCfg=function(){
		this.ParseWebParam();
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
		Laya.loader.load("res/"+"bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
	}

	return LoadBootApp;
})(LoadBootCfg)


//class boots.platform.vo.PlatformLoginZhangYu extends boots.platform.vo.PlatformLoginBase
var PlatformLoginZhangYu=(function(_super){
	function PlatformLoginZhangYu(pid,cid){
		this._token=null;
		this._caller=null;
		this._method=null;
		this._accountName=null;
		this._pid=null;
		this._clientinfo=null;
		PlatformLoginZhangYu.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
		}
	}

	__class(PlatformLoginZhangYu,'boots.platform.vo.PlatformLoginZhangYu',_super);
	var __proto=PlatformLoginZhangYu.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
				EventCenter.Event("server_verify");
			}
		}
		else{
			EventCenter.Event("server_verify");
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		console.log(o+"+---------------------->>>>>>>>>>>SDK返回");
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			this._accountName=o.uid;
			PlatformLoginUtil.vo.account=o.uid;
			this._pid=o.pid;
			this._clientinfo=o.clientinfo;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
				EventCenter.Event("server_verify",o);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__proto.OnSelServer=function(){}
	// ReportData(PlatformLogin37.GAMEDATA_TYPE_PRE_CREATE_ROLE);
	__proto.ReportData=function(dataType){
		var obj={};
		obj.funcid=40;
		obj.dataType=dataType;
		obj.zoneId=PlatformLoginUtil.vo.server_id.toString();
		obj.zoneName=PlatformLoginUtil.vo.server_name;
		obj.roleId="";
		obj.roleName="";
		obj.partyName="";
		obj.vip="0";
		obj.balance=0;
		obj.level=0;
		obj.roleCreateTime="-1";
		obj.roleLevelMTime="-1";
		this.CallToNative(obj);
	}

	__proto.QuitGame=function(){
		this.CallToNative({funcid:50});
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	__getset(0,__proto,'accountClientinfo',function(){
		return this._clientinfo;
	});

	__getset(0,__proto,'accountName',function(){
		return this._accountName;
	});

	__getset(0,__proto,'accountPid',function(){
		return this._pid;
	});

	return PlatformLoginZhangYu;
})(PlatformLoginBase)


//class boots.platform.vo.PlatfromLoginMohe extends boots.platform.vo.PlatformLoginBase
var PlatfromLoginMohe=(function(_super){
	function PlatfromLoginMohe(pid,cid){
		// 这一坨是后端通过37验证返回的
		this.is_idcard_bind=0;
		this.is_phone_bind=0;
		this.is_bind_alias=0;
		this.is_youke=0;
		this.vip_level=0;
		this._token=null;
		this._accountName=null;
		this._caller=null;
		this._method=null;
		PlatfromLoginMohe.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
			this.is_idcard_bind=obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"];
			this.is_phone_bind=obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"];
			this.is_bind_alias=obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"];
			this.is_youke=obj[PlatformLoginUtil.vo.channelName]["is_youke"];
			this.vip_level=obj[PlatformLoginUtil.vo.channelName]["vip_level"];
		}
	}

	__class(PlatfromLoginMohe,'boots.platform.vo.PlatfromLoginMohe',_super);
	var __proto=PlatfromLoginMohe.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
		obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"]=this.is_idcard_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"]=this.is_phone_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"]=this.is_bind_alias;
		obj[PlatformLoginUtil.vo.channelName]["is_youke"]=this.is_youke;
		obj[PlatformLoginUtil.vo.channelName]["vip_level"]=this.vip_level;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				this.is_idcard_bind=o.data.is_idcard_bind;
				this.is_phone_bind=o.data.is_phone_bind;
				this.is_bind_alias=o.data.is_bind_alias;
				this.is_youke=o.data.is_youke;
				this.vip_level=o.data.vip_level;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
			}
		}
		else{
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		console.log(o+"+---------------------->>>>>>>>>>>SDK返回");
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			this._accountName=o.uid;
			PlatformLoginUtil.vo.account=o.uid;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
				EventCenter.Event("server_verify",o);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	// EventCenter.Event(PlatformEvent.LOGIN_SDK);
	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__proto.OnSelServer=function(){}
	// ReportData(GAMEDATA_TYPE_PRE_CREATE_ROLE);
	__proto.ReportData=function(dataType){
		var obj={};
		obj.funcid=40;
		obj.dataType=dataType;
		obj.serverID=PlatformLoginUtil.vo.server_id.toString();
		obj.serverName=PlatformLoginUtil.vo.server_name;
		obj.roleId="";
		obj.roleName="";
		obj.partyName="";
		obj.vip="0";
		obj.balance=0;
		obj.level=0;
		obj.roleCreateTime="-1";
		obj.roleLevelMTime="-1";
		this.CallToNative(obj);
	}

	__proto.QuitGame=function(){
		this.CallToNative({funcid:50});
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	__getset(0,__proto,'accountName',function(){
		return this._accountName;
	});

	PlatfromLoginMohe.REQ_LOGIN=1;
	PlatfromLoginMohe.REC_LOGIN_SUC=2;
	PlatfromLoginMohe.REC_LOGIN_FAIL=3;
	PlatfromLoginMohe.REQ_LOGOUT=10;
	PlatfromLoginMohe.REC_LOGOUT_SUC=11;
	PlatfromLoginMohe.REC_LOGOUT_FAIL=12;
	PlatfromLoginMohe.REQ_PAY=30;
	PlatfromLoginMohe.REC_PAY_SUC=31;
	PlatfromLoginMohe.REC_PAY_FAIL=32;
	PlatfromLoginMohe.REQ_REPORT=40;
	PlatfromLoginMohe.REQ_QUIT=50;
	PlatfromLoginMohe.GAMEDATA_TYPE_PRE_ENTER_GAME=0;
	PlatfromLoginMohe.GAMEDATA_TYPE_PRE_CREATE_ROLE=1;
	PlatfromLoginMohe.GAMEDATA_TYPE_CREATE_ROLE=2;
	PlatfromLoginMohe.GAMEDATA_TYPE_ENTER_GAME=3;
	PlatfromLoginMohe.GAMEDATA_TYPE_ROLE_UPDATE=4;
	PlatfromLoginMohe.GAMEDATA_TYPE_EXIT=5;
	return PlatfromLoginMohe;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginZhiJianWeChat extends boots.platform.vo.PlatformLoginBase
var PlatformLoginZhiJianWeChat=(function(_super){
	function PlatformLoginZhiJianWeChat(pid,cid){
		PlatformLoginZhiJianWeChat.__super.call(this,pid,cid);
	}

	__class(PlatformLoginZhiJianWeChat,'boots.platform.vo.PlatformLoginZhiJianWeChat',_super);
	var __proto=PlatformLoginZhiJianWeChat.prototype;
	__proto.OnSelServer=function(){
		console.log("指尖WeChatSDK选服-------------------");
	}

	return PlatformLoginZhiJianWeChat;
})(PlatformLoginBase)


//class boots.platform.vo.PlatfromLoginFingertip extends boots.platform.vo.PlatformLoginBase
var PlatfromLoginFingertip=(function(_super){
	function PlatfromLoginFingertip(pid,cid){
		this._webParam=null;
		this._webParamStr=null;
		console.log("实例化脚本：PlatfromLoginFingertip  +继承于：PlatformLoginBase");
		PlatfromLoginFingertip.__super .call(this,pid,cid)
	}

	__class(PlatfromLoginFingertip,'boots.platform.vo.PlatfromLoginFingertip',_super);
	var __proto=PlatfromLoginFingertip.prototype;
	__getset(0,__proto,'webParam',function(){
		if(this._webParam==null){
			this._webParam=window.zhijianParams1();
		}
		if(this._webParam==null)
			this._webParam={};
		return this._webParam;
	});

	__getset(0,__proto,'webParamStr',function(){
		if(this._webParamStr==null)
			this._webParamStr=JSON.stringify(this.webParam);
		return this._webParamStr;
	});

	return PlatfromLoginFingertip;
})(PlatformLoginBase)


//class boots.platform.vo.PlatfromLoginMoJie extends boots.platform.vo.PlatformLoginBase
var PlatfromLoginMoJie=(function(_super){
	function PlatfromLoginMoJie(pid,cid){
		this._webParam=null;
		this._webParamStr=null;
		PlatfromLoginMoJie.__super .call(this,pid,cid)
	}

	__class(PlatfromLoginMoJie,'boots.platform.vo.PlatfromLoginMoJie',_super);
	var __proto=PlatfromLoginMoJie.prototype;
	__getset(0,__proto,'webParam',function(){
		if(this._webParam==null){
			this._webParam=window.mojieDecodeParams();
		}
		return this._webParam;
	});

	__getset(0,__proto,'webParamStr',function(){
		if(this._webParamStr==null)
			this._webParamStr=JSON.stringify(this.webParam);
		return this._webParamStr;
	});

	return PlatfromLoginMoJie;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginXiYou extends boots.platform.vo.PlatformLoginBase
var PlatformLoginXiYou=(function(_super){
	function PlatformLoginXiYou(pid,cid){
		this.is_idcard_bind=0;
		this.is_phone_bind=0;
		this.is_bind_alias=0;
		this.is_youke=0;
		this.vip_level=0;
		this._token=null;
		this._accountName=null;
		this._pid=null;
		this._clientinfo=null;
		this._caller=null;
		this._method=null;
		PlatformLoginXiYou.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
			this.is_idcard_bind=obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"];
			this.is_phone_bind=obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"];
			this.is_bind_alias=obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"];
			this.is_youke=obj[PlatformLoginUtil.vo.channelName]["is_youke"];
			this.vip_level=obj[PlatformLoginUtil.vo.channelName]["vip_level"];
		}
	}

	__class(PlatformLoginXiYou,'boots.platform.vo.PlatformLoginXiYou',_super);
	var __proto=PlatformLoginXiYou.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
		obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"]=this.is_idcard_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"]=this.is_phone_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"]=this.is_bind_alias;
		obj[PlatformLoginUtil.vo.channelName]["is_youke"]=this.is_youke;
		obj[PlatformLoginUtil.vo.channelName]["vip_level"]=this.vip_level;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	// PlatformUtil.platform.OnLogoutResult();
	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				this.is_idcard_bind=o.data.is_idcard_bind;
				this.is_phone_bind=o.data.is_phone_bind;
				this.is_bind_alias=o.data.is_bind_alias;
				this.is_youke=o.data.is_youke;
				this.vip_level=o.data.vip_level;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
				EventCenter.Event("server_verify");
			}
		}
		else{
			EventCenter.Event("server_verify");
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		console.log(o+"+---------------------->>>>>>>>>>>SDK返回");
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			this._accountName=o.uid;
			PlatformLoginUtil.vo.account=o.uid;
			this._pid=o.pid;
			this._clientinfo=o.clientinfo;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
				EventCenter.Event("server_verify",o);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	__getset(0,__proto,'accountClientinfo',function(){
		return this._clientinfo;
	});

	__getset(0,__proto,'accountName',function(){
		return this._accountName;
	});

	__getset(0,__proto,'accountPid',function(){
		return this._pid;
	});

	return PlatformLoginXiYou;
})(PlatformLoginBase)


//class boots.LoadBootQQ extends boots.LoadBootCfg
var LoadBootQQ=(function(_super){
	function LoadBootQQ(){
		LoadBootQQ.__super.call(this);
	}

	__class(LoadBootQQ,'boots.LoadBootQQ',_super);
	var __proto=LoadBootQQ.prototype;
	__proto.StartFristShow=function(){
		this._bg=new Image();
		this._bg.size(Laya.stage.width,Laya.stage.height);
		Laya.stage.addChild(this._bg);
		this._bg.skin="beijingnew.png";
	}

	__proto.ParseParams=function(){
		var _$this=this;
		qq.request({
			url:"https://h5.c.popcornie.com/boot?sign=v_7",
			header:{'content-type':'application/json'},
			method:'GET',
			success:function (res){
				_$this.BOOTVERSION=res.data["boot"];
				var cdnStr=res.data["cdn"];
				var cdnStr1="https://res-rbsg.oclkj.com/qqMini_new/release=true";
				var arr=cdnStr.split('/');
				var arrRelease=arr[4].split('=');
				Browser.release=JSON.parse(arrRelease[1]);
				GameCfg.ParseWebParam();
			}
		});
	}

	__proto.ParseWebParam=function(){
		this.BOOTVERSION=Browser.BOOTVERSION+"";
		this.gameCdn="https://res-rbsg.oclkj.com/qqMini_new/";
		MiniFileMgr.loadPath=this.gameCdn;
		Laya.URL.basePath=this.gameCdn;
	}

	__proto.LoadCfg=function(){
		Laya.loader.load("bootcfg"+".json",Handler.create(this,this.onCfgComplete),null,"json");
		URL.customFormat=ResourceVersionEx.addVersionPrefix;
	}

	__proto.loadSubpackage=function(index){
		var _$this=this;
		(index===void 0)&& (index=0);
		_super.prototype.loadSubpackage.call(this,index);
		var path=this.srclist[index];
		qq.loadSubpackage({
			name:path ,
			success:function (res){
				console.log("success "+path);
				index++;
				path=_$this.srclist[index];
				if(path==null)
					_$this.EnterGame();
				else{
					_$this.loadSubpackage(index);
				}
			},
			fail:function (res){
				console.log("fail"+path);
			}
		});
	}

	return LoadBootQQ;
})(LoadBootCfg)


//class boots.platform.vo.PlatfromLoginFingertipsy extends boots.platform.vo.PlatformLoginBase
var PlatfromLoginFingertipsy=(function(_super){
	function PlatfromLoginFingertipsy(pid,cid){
		// 这一坨是后端通过37验证返回的
		this.is_idcard_bind=0;
		this.is_phone_bind=0;
		this.is_bind_alias=0;
		this.is_youke=0;
		this.vip_level=0;
		this._token=null;
		this._accountName=null;
		this._caller=null;
		this._method=null;
		PlatfromLoginFingertipsy.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
			this.is_idcard_bind=obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"];
			this.is_phone_bind=obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"];
			this.is_bind_alias=obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"];
			this.is_youke=obj[PlatformLoginUtil.vo.channelName]["is_youke"];
			this.vip_level=obj[PlatformLoginUtil.vo.channelName]["vip_level"];
		}
	}

	__class(PlatfromLoginFingertipsy,'boots.platform.vo.PlatfromLoginFingertipsy',_super);
	var __proto=PlatfromLoginFingertipsy.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
		obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"]=this.is_idcard_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"]=this.is_phone_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"]=this.is_bind_alias;
		obj[PlatformLoginUtil.vo.channelName]["is_youke"]=this.is_youke;
		obj[PlatformLoginUtil.vo.channelName]["vip_level"]=this.vip_level;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				this.is_idcard_bind=o.data.is_idcard_bind;
				this.is_phone_bind=o.data.is_phone_bind;
				this.is_bind_alias=o.data.is_bind_alias;
				this.is_youke=o.data.is_youke;
				this.vip_level=o.data.vip_level;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
			}
		}
		else{
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			this._accountName=o.uid;
			PlatformLoginUtil.vo.account=o.uid;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
				EventCenter.Event("server_verify",o);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__proto.OnSelServer=function(){}
	//ReportData(GAMEDATA_TYPE_PRE_CREATE_ROLE);
	__proto.ReportData=function(dataType){
		var obj={};
		obj.funcid=40;
		obj.dataType=dataType;
		obj.serverID=PlatformLoginUtil.vo.server_id.toString();
		obj.serverName=PlatformLoginUtil.vo.server_name;
		obj.roleId="";
		obj.roleName="";
		obj.partyName="";
		obj.vip="0";
		obj.balance=0;
		obj.level=0;
		obj.roleCreateTime="-1";
		obj.roleLevelMTime="-1";
		this.CallToNative(obj);
	}

	__proto.QuitGame=function(){
		this.CallToNative({funcid:50});
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	__getset(0,__proto,'accountName',function(){
		return this._accountName;
	});

	PlatfromLoginFingertipsy.REQ_LOGIN=1;
	PlatfromLoginFingertipsy.REC_LOGIN_SUC=2;
	PlatfromLoginFingertipsy.REC_LOGIN_FAIL=3;
	PlatfromLoginFingertipsy.REQ_LOGOUT=10;
	PlatfromLoginFingertipsy.REC_LOGOUT_SUC=11;
	PlatfromLoginFingertipsy.REC_LOGOUT_FAIL=12;
	PlatfromLoginFingertipsy.REQ_PAY=30;
	PlatfromLoginFingertipsy.REC_PAY_SUC=31;
	PlatfromLoginFingertipsy.REC_PAY_FAIL=32;
	PlatfromLoginFingertipsy.REQ_REPORT=40;
	PlatfromLoginFingertipsy.REQ_QUIT=50;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_PRE_ENTER_GAME=0;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_PRE_CREATE_ROLE=1;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_CREATE_ROLE=2;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_ENTER_GAME=3;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_ROLE_UPDATE=4;
	PlatfromLoginFingertipsy.GAMEDATA_TYPE_EXIT=5;
	return PlatfromLoginFingertipsy;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginWeChatMiniProgram extends boots.platform.vo.PlatformLoginBase
var PlatformLoginWeChatMiniProgram=(function(_super){
	function PlatformLoginWeChatMiniProgram(pid,cid){
		PlatformLoginWeChatMiniProgram.__super.call(this,pid,cid);
	}

	__class(PlatformLoginWeChatMiniProgram,'boots.platform.vo.PlatformLoginWeChatMiniProgram',_super);
	var __proto=PlatformLoginWeChatMiniProgram.prototype;
	__proto.OnSelServer=function(){
		console.log("WeChatSDK选服-------------------");
	}

	return PlatformLoginWeChatMiniProgram;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginbilibiliGame extends boots.platform.vo.PlatformLoginBase
var PlatformLoginbilibiliGame=(function(_super){
	function PlatformLoginbilibiliGame(pid,cid){
		PlatformLoginbilibiliGame.__super.call(this,pid,cid);
	}

	__class(PlatformLoginbilibiliGame,'boots.platform.vo.PlatformLoginbilibiliGame',_super);
	var __proto=PlatformLoginbilibiliGame.prototype;
	__proto.OnSelServer=function(){
		console.log("bilibili选服-------------------");
	}

	return PlatformLoginbilibiliGame;
})(PlatformLoginBase)


//class boots.platform.vo.PlatformLoginWeb37 extends boots.platform.vo.PlatformLoginBase
var PlatformLoginWeb37=(function(_super){
	function PlatformLoginWeb37(pid,cid){
		this._webParam=null;
		this._webParamStr=null;
		this._webMain=0;
		this._webBoot=0;
		PlatformLoginWeb37.__super.call(this,pid,cid);
	}

	__class(PlatformLoginWeb37,'boots.platform.vo.PlatformLoginWeb37',_super);
	var __proto=PlatformLoginWeb37.prototype;
	__proto.OnSelServer=function(){}
	// Web37Util.report(Web37Util.REPORT_SERVER);//这时候还没有数据，延迟到进游戏后调
	__getset(0,__proto,'webParam',function(){
		if(this._webParam==null)
			this._webParam=window.webParam();
		if(this._webParam==null)
			this._webParam={};
		return this._webParam;
	});

	__getset(0,__proto,'webBoot',function(){
		if(this._webBoot==0)
			this._webBoot=window.webBoot();
		return this._webBoot;
	});

	__getset(0,__proto,'webParamStr',function(){
		if(this._webParamStr==null)
			this._webParamStr=JSON.stringify(this.webParam);
		return this._webParamStr;
	});

	__getset(0,__proto,'webMain',function(){
		if(this._webMain==0)
			this._webMain=window.webMain();
		return this._webMain;
	});

	return PlatformLoginWeb37;
})(PlatformLoginBase)


/**
*标准ByteArray读法
*/
//class boots.ByteArrayClient extends laya.utils.Byte
var ByteArrayClient=(function(_super){
	function ByteArrayClient(data){
		ByteArrayClient.__super.call(this,data);
		this.endian="bigEndian";
	}

	__class(ByteArrayClient,'boots.ByteArrayClient',_super);
	var __proto=ByteArrayClient.prototype;
	__proto.uncompress=function(algorithm){
		(algorithm===void 0)&& (algorithm="zlib");
		var inflate=new Zlib.Inflate(this._u8d_);
		this._u8d_=inflate.decompress();
		this._d_=new DataView(this._u8d_.buffer);;
		this._length=this._u8d_.byteLength;
	}

	__proto.compress=function(algorithm){
		(algorithm===void 0)&& (algorithm="zlib");
		var deflate=new Zlib.Deflate(this._byteView_);
		this._byteView_=deflate.compress();
		this._data_=new DataView(this._byteView_.buffer);;
	}

	__proto.GetByteArray=function(offset,dataLen){
		var dataUnit=new ByteArrayClient(dataLen);
		dataUnit.writeArrayBuffer(this.getUint8Array(this.pos+offset,dataLen));
		dataUnit.pos=0;
		return dataUnit;
	}

	/**
	*改版。。。。。
	*@private
	*读取指定长度的 UTF 型字符串。
	*@param len 需要读取的长度。
	*@return 读取的字符串。
	*/
	__proto.readUTF=function(len){
		var v="",max=this._pos_+len,c=0,c2=0,c3=0;
		var u=this._u8d_,i=0;
		var tempArray=[];
		var idx=0;
		while (this._pos_ < max){
			c=u[this._pos_++];
			if (c < 0x80){
				if (c !=0){
					tempArray[idx++]=c;
				}
				}else if (c < 0xE0){
				tempArray[idx++]=(((c & 0x3F)<< 6)| (u[this._pos_++] & 0x7F));
				}else if (c < 0xF0){
				c2=u[this._pos_++];
				tempArray[idx++]=(((c & 0x1F)<< 12)| ((c2 & 0x7F)<< 6)| (u[this._pos_++] & 0x7F));
				}else {
				c2=u[this._pos_++];
				c3=u[this._pos_++];
				tempArray[idx++]=(((c & 0x0F)<< 18)| ((c2 & 0x7F)<< 12)| ((c3 << 6)& 0x7F)| (u[this._pos_++] & 0x7F));
			}
			i++;
		}
		return String.fromCharCode.apply(String,tempArray);
	}

	__proto.readUTFBytes=function(len){
		(len===void 0)&& (len=-1);
		if (len==0)
			return "";
		var lastBytes=this.bytesAvailable;
		if (len > lastBytes)
			throw "readUTFBytes error - Out of bounds";
		len=len > 0 ? len :lastBytes;
		return this.readUTF(len);
	}

	/**
	*老版本去读字符串数据，调用频繁会导致内存暴涨！！
	*@param len
	*@return
	*
	*/
	__proto.readUTFBytesOld=function(len){
		(len===void 0)&& (len=-1);
		return _super.prototype.readUTFBytes.call(this,len);
	}

	__proto.readDouble=function(){
		return this.getFloat64();
	}

	__proto.readFloat=function(){
		return this.getFloat32();
	}

	__proto.readBytes=function(bytes,offset,length){
		(offset===void 0)&& (offset=0);
		(length===void 0)&& (length=0);
		if (offset < 0 || length < 0){
			throw "Read error - Out of bounds";
		}
		if (length==0)length=this.length-this.pos;
		bytes.writeArrayBuffer(this.getUint8Array(this.pos+offset,length));
	}

	__proto.readInt=function(){
		return this.getInt32();
	}

	__proto.readShort=function(){
		return this.getInt16();
	}

	__proto.readUnsignedByte=function(){
		return this.getUint8();
	}

	__proto.readUnsignedInt=function(){
		return this.getUint32();
	}

	__proto.readUnsignedShort=function(){
		return this.getUint16();
	}

	// }
	__proto.writeFloat=function(x){
		this.writeFloat32(x);
	}

	__proto.writeInt=function(value){
		this.writeInt32(value);
	}

	__proto.writeShort=function(value){
		this.writeInt16(value);
	}

	__proto.writeBytes=function(bytes,offset,length){
		(offset===void 0)&& (offset=0);
		(length===void 0)&& (length=0);
		bytes.pos=0;
		this.writeArrayBuffer(bytes.getUint8Array(bytes.pos,bytes.length),offset,length);
	}

	__proto.writeMultiByte=function(value,charSet){
		value=value+"";
		if(charSet=="UNICODE" || charSet=="unicode"){
			throw "not support unicode";
		}
		this.writeUTFBytes(value);
	}

	/**
	*获取此对象的 ArrayBuffer数据,数据只包含有效数据部分 。
	*/
	__getset(0,__proto,'buffer',function(){
		return this._d_.buffer;
	});

	return ByteArrayClient;
})(Byte)


//class boots.platform.vo.PlatformLogin37 extends boots.platform.vo.PlatformLoginBase
var PlatformLogin37=(function(_super){
	function PlatformLogin37(pid,cid){
		// 这一坨是后端通过37验证返回的
		this.is_idcard_bind=0;
		this.is_phone_bind=0;
		this.is_bind_alias=0;
		this.is_youke=0;
		this.vip_level=0;
		// 37sdk返回的，token一定有，但是uid和uname在ios上没得，所以直接不用sdk返回的uid和uname，使用服务器验证后返回的user和token
		this._token=null;
		this._caller=null;
		this._method=null;
		PlatformLogin37.__super.call(this,pid,cid);
		this.Register();
		if (GameCfg.RELOAD_PARAM !=null && GameCfg.RELOAD_PARAM[PlatformLoginUtil.vo.channelName] !=null){
			var obj=GameCfg.RELOAD_PARAM;
			this._isLoginSDK=obj[PlatformLoginUtil.vo.channelName]["islogin"];
			this._isVerify=obj[PlatformLoginUtil.vo.channelName]["isverify"];
			this._token=obj[PlatformLoginUtil.vo.channelName]["token"];
			this.is_idcard_bind=obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"];
			this.is_phone_bind=obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"];
			this.is_bind_alias=obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"];
			this.is_youke=obj[PlatformLoginUtil.vo.channelName]["is_youke"];
			this.vip_level=obj[PlatformLoginUtil.vo.channelName]["vip_level"];
		}
	}

	__class(PlatformLogin37,'boots.platform.vo.PlatformLogin37',_super);
	var __proto=PlatformLogin37.prototype;
	__proto.Register=function(){
		NativeUtil.Register(10002,this,this.CallFromNative);
	}

	__proto.RegisterPlatformCallBack=function(caller,method){
		this._caller=caller;
		this._method=method;
	}

	__proto.CallToNative=function(o){
		o.msgid=10001;
		NativeUtil.CallPlatformWithObj(o);
	}

	__proto.CallFromNative=function(o){
		var funcid=o.funcid;
		if (funcid==2 || funcid==3){
			this.OnLoginResult(funcid==2,o);
			}else if (funcid==11 || funcid==12){
			this.OnLogoutResult(funcid==11);
		}
		if (this._method !=null){
			this._method.call(this._caller,o);
		}
	}

	__proto.GetAgentInfo=function(obj){
		obj[PlatformLoginUtil.vo.channelName]={};
		obj[PlatformLoginUtil.vo.channelName]["islogin"]=this._isLoginSDK;
		obj[PlatformLoginUtil.vo.channelName]["isverify"]=this._isVerify;
		obj[PlatformLoginUtil.vo.channelName]["token"]=this._token;
		obj[PlatformLoginUtil.vo.channelName]["is_idcard_bind"]=this.is_idcard_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_phone_bind"]=this.is_phone_bind;
		obj[PlatformLoginUtil.vo.channelName]["is_bind_alias"]=this.is_bind_alias;
		obj[PlatformLoginUtil.vo.channelName]["is_youke"]=this.is_youke;
		obj[PlatformLoginUtil.vo.channelName]["vip_level"]=this.vip_level;
	}

	__proto.LoginSDK=function(){
		if (GameCfg.MONI_WAIWANG){
			Laya.timer.once(1,this,this.OnLoginResult,[true,{token:GameCfg.MONI_TOKEN,uid:GameCfg.MONI_ACCOUNT,uname:GameCfg.MONI_ACCOUNT}]);
		}
		else{
			this.CallToNative({funcid:1});
			UMengUtil.AddPoint("reqsignin","","",0);
		}
	}

	/**登出SDK**/
	__proto.LogoutSDK=function(){
		this.CallToNative({funcid:10});
	}

	__proto.OnVerify=function(result){
		if (result !=null){
			this._isVerify=true;
			console.log("onVerifySuc:"+result);
			var o=BootUtil.decode(result);
			if(o && o.data){
				PlatformLoginUtil.vo.account=o.data.uid;
				PlatformLoginUtil.vo.sign=o.sign;
				PlatformLoginUtil.vo.adult=o.data.is_adult;
				PlatformLoginUtil.vo.time=o.time;
				this.is_idcard_bind=o.data.is_idcard_bind;
				this.is_phone_bind=o.data.is_phone_bind;
				this.is_bind_alias=o.data.is_bind_alias;
				this.is_youke=o.data.is_youke;
				this.vip_level=o.data.vip_level;
				UMengUtil.AddPoint("verifysuc",PlatformLoginUtil.vo.account,"",0);
				EventCenter.Event("server_verify",o);
			}
			else{
				EventCenter.Event("server_verify");
			}
		}
		else{
			EventCenter.Event("server_verify");
		}
	}

	// SDK返回
	__proto.OnLoginResult=function(suc,o){
		this._isLoginSDK=suc;
		if (o !=null){
			this._token=o.token;
			console.log("onLoginResult uid:"+o.uid+" uname:"+o.uname+" token:"+this._token);
			if (suc){
				UMengUtil.AddPoint("signinsuc",o.uname,"",0);
				EventCenter.Event("sdk_login",this._token);
			}
		}
		if (!suc){
			UMengUtil.AddPoint("signinfail","","",0);
		}
		EventCenter.Event("login_sdk");
	}

	__proto.OnLogoutResult=function(suc){
		if (suc){
			this._isLoginSDK=false;
			this._isVerify=false;
			this._token=null;
			PlatformLoginUtil.Reload();
		}
	}

	__proto.OnSelServer=function(){
		this.ReportData(1);
	}

	__proto.ReportData=function(dataType){
		var obj={};
		obj.funcid=40;
		obj.dataType=dataType;
		obj.zoneId=PlatformLoginUtil.vo.server_id.toString();
		obj.zoneName=PlatformLoginUtil.vo.server_name;
		obj.roleId="";
		obj.roleName="";
		obj.partyName="";
		obj.vip="0";
		obj.balance=0;
		obj.level=0;
		obj.roleCreateTime="-1";
		obj.roleLevelMTime="-1";
		this.CallToNative(obj);
	}

	__proto.QuitGame=function(){
		this.CallToNative({funcid:50});
	}

	__getset(0,__proto,'hasSDK',function(){
		return true;
	});

	__getset(0,__proto,'token',function(){
		return this._token;
	});

	PlatformLogin37.REQ_LOGIN=1;
	PlatformLogin37.REC_LOGIN_SUC=2;
	PlatformLogin37.REC_LOGIN_FAIL=3;
	PlatformLogin37.REQ_LOGOUT=10;
	PlatformLogin37.REC_LOGOUT_SUC=11;
	PlatformLogin37.REC_LOGOUT_FAIL=12;
	PlatformLogin37.REQ_PAY=30;
	PlatformLogin37.REC_PAY_SUC=31;
	PlatformLogin37.REC_PAY_FAIL=32;
	PlatformLogin37.REQ_REPORT=40;
	PlatformLogin37.REQ_QUIT=50;
	PlatformLogin37.GAMEDATA_TYPE_PRE_ENTER_GAME=0;
	PlatformLogin37.GAMEDATA_TYPE_PRE_CREATE_ROLE=1;
	PlatformLogin37.GAMEDATA_TYPE_CREATE_ROLE=2;
	PlatformLogin37.GAMEDATA_TYPE_ENTER_GAME=3;
	PlatformLogin37.GAMEDATA_TYPE_ROLE_UPDATE=4;
	PlatformLogin37.GAMEDATA_TYPE_EXIT=5;
	return PlatformLogin37;
})(PlatformLoginBase)


/**
*版署选服页
*/
//class boots.selserver.med.SelServerBanshuMediator extends boots.selserver.med.SelServerNormalMediator
var SelServerBanshuMediator=(function(_super){
	function SelServerBanshuMediator(p){
		SelServerBanshuMediator.__super.call(this,p);
	}

	__class(SelServerBanshuMediator,'boots.selserver.med.SelServerBanshuMediator',_super);
	var __proto=SelServerBanshuMediator.prototype;
	__proto.CreateGroupVo=function(){}
	// _zones.push(g);
	__proto.Login=function(){
		var acc=PlatformLoginUtil.vo.account;
		if(SelServerBanshuMediator.adultArr1.indexOf(acc)!=-1)
			PlatformLoginUtil.vo.adult=0;
		if(SelServerBanshuMediator.adultArr2.indexOf(acc)!=-1)
			PlatformLoginUtil.vo.adult=1;
		PlatformLoginUtil.vo.mainversion=this._curServer.mainversion;
		SelServerUtil.SelServer();
	}

	__static(SelServerBanshuMediator,
	['adultArr1',function(){return this.adultArr1=['test0001','test0002','test0003','test0004','test0005','test0006','test0007','test0008'];},'adultArr2',function(){return this.adultArr2=['test0009','test0010','test0011','test0012','test0013','test0014','test0015','test0016'];}
	]);
	return SelServerBanshuMediator;
})(SelServerNormalMediator)


/**
*外网选服页
*/
//class boots.selserver.med.SelServerWaiWangMediator extends boots.selserver.med.SelServerNormalMediator
var SelServerWaiWangMediator=(function(_super){
	function SelServerWaiWangMediator(p){
		SelServerWaiWangMediator.__super.call(this,p);
	}

	__class(SelServerWaiWangMediator,'boots.selserver.med.SelServerWaiWangMediator',_super);
	var __proto=SelServerWaiWangMediator.prototype;
	__proto.CreateGroupVo=function(){}
	// _zones.push(g);
	__proto.OnShow=function(){
		_super.prototype.OnShow.call(this);
	}

	__proto.UpdateDefault=function(){
		var acc=LocalStorage.getItem(GameCfg.GAMENAME+"_"+"account");
		if (acc !=null)
			this._p.txtAccount.text=acc;
		else
		this._p.txtAccount.text="youracc";
		this._curZone=this._zones[0];
		this._curServer=this._curZone.servers[0];
	}

	return SelServerWaiWangMediator;
})(SelServerNormalMediator)


/**
*平台选服页
*/
//class boots.selserver.med.SelServerHttpAgentMediator extends boots.selserver.med.SelServerHttpMediator
var SelServerHttpAgentMediator=(function(_super){
	function SelServerHttpAgentMediator(p){
		// 请求测试服
		this.URL_VERIFY="/verify?sign={@}&token={@}&client={@}";
		this._sdk_token=null;
		this._$2__clickCount=0;
		this._$2__clickTime=0;
		SelServerHttpAgentMediator.__super.call(this,p);
		this._p.txtAccount.visible=false;
		this._p.btnLogin.y=this._p.imgSelServer.y+this._p.imgSelServer.height+10;
		this._p.sprdebug.on("click",this,this._$2_ClickDebug);
	}

	__class(SelServerHttpAgentMediator,'boots.selserver.med.SelServerHttpAgentMediator',_super);
	var __proto=SelServerHttpAgentMediator.prototype;
	__proto.OnShow=function(){
		_super.prototype.OnShow.call(this);
		EventCenter.On("sdk_login",this,this.OnSDKLogin);
		EventCenter.On("server_verify",this,this.OnVerify);
		if (!PlatformLoginUtil.login.isLoginSDK){
			PlatformLoginUtil.login.LoginSDK();
			}else if (!PlatformLoginUtil.login.isVerify){
			this.VerifySDK();
		}
	}

	__proto.OnHide=function(){
		_super.prototype.OnHide.call(this);
		EventCenter.Off("sdk_login",this,this.OnSDKLogin);
		EventCenter.Off("server_verify",this,this.OnVerify);
	}

	__proto.UpdateDefault=function(){}
	__proto.ClickSwitch=function(){
		if (PlatformLoginUtil.login.isLoginSDK)
			PlatformLoginUtil.login.LogoutSDK();
	}

	__proto._$2_ClickDebug=function(){
		if (Laya.timer.currTimer-this._$2__clickTime > 3000)this._$2__clickCount=0;
		else this._$2__clickCount++;
		this._$2__clickTime=Laya.timer.currTimer;
		if (this._$2__clickCount > 5){
			this._showTest=true;
			this.UpdateZoneList();
			this.HttpReqServers(9999);
		}
	}

	__proto.Login=function(){
		if (!PlatformLoginUtil.login.isLoginSDK){
			PlatformLoginUtil.login.LoginSDK();
		}
		else{
			if (this._curServer==null){
				this.HttpReqLastLogin();
				return;
			}
			if (this._curServer.IsNotOpen()&& !this._showTest){
				AlertBootExt.Show("服务器维护中");
				return;
			}
			PlatformLoginUtil.vo.server_ip=this._curServer.serverIP;
			PlatformLoginUtil.vo.server_name=this._curServer.serverName;
			PlatformLoginUtil.vo.server_port=this._curServer.serverPort;
			PlatformLoginUtil.vo.server_id=this._curServer.serverID;
			PlatformLoginUtil.vo.mainversion=this._curServer.mainversion;
			PlatformLoginUtil.vo.zoneId=this._curServer.zoneId;
			this.SetEnable(false);
			SelServerUtil.SelServer();
		}
	}

	// sdk登陆成功
	__proto.OnSDKLogin=function(token){
		this._sdk_token=token;
		this.VerifySDK();
	}

	__proto.VerifySDK=function(){
		var platform="web";
		if (GameCfg.MONI_WAIWANG){
			platform="android";
			}else{
			if (NativeUtil.IsIosApp)platform="ios";
			else if (NativeUtil.IsAndriodApp)platform="android";
		}
	}

	// 验证返回
	__proto.OnVerify=function(data){
		if (data==null){
			AlertBootExt.Show("账号验证失败，请点击登陆重试");
			}else {
			if (data.server !=null){
				this._curServer=this.ParseServer(data.server);
				NoticeComPanelExt.Show(2,this._curServer.serverID);
				this.UpdateLoginServer(this._curServer);
				console.log("验证返回的服务器："+this._curServer.serverName+"src:"+BootUtil.encode(data.server));
				}else{
				this.HttpReqLastLogin();
				this.HttpReqZone();
			}
		}
	}

	return SelServerHttpAgentMediator;
})(SelServerHttpMediator)


/**
*最顶层显示的转圈进度
*比如进行php请求，或者登陆平台的时候，显示这个，表示游戏没有卡死。。。
*/
//class boots.AlertToastExt extends laya.display.Sprite
var AlertToastExt=(function(_super){
	// private var _timer:int;
	function AlertToastExt(){
		AlertToastExt.__super.call(this);
	}

	__class(AlertToastExt,'boots.AlertToastExt',_super);
	var __proto=AlertToastExt.prototype;
	// Repaint();
	__proto.Repaint=function(){}
	// _spr.y=Laya.stage.height / 2;
	__proto.OnFrame=function(){}
	// }
	__proto.OnShow=function(){}
	// OnFrame();
	__proto.OnHide=function(){}
	AlertToastExt.Show=function(type){}
	AlertToastExt.Hide=function(type){}
	AlertToastExt.URLREQUEST=0;
	AlertToastExt.LOGINAGENT=1;
	AlertToastExt.PAY=2;
	return AlertToastExt;
})(Sprite)


/**
*选服按钮
*/
//class boots.selserver.SelServerCellExt extends laya.display.Scene
var SelServerCellExt=(function(_super){
	function SelServerCellExt(){
		this.sprTag=null;
		this.sprState=null;
		this.txtServerName=null;
		this.imgHead=null;
		this.txtPlayerName=null;
		this.vo=null;
		SelServerCellExt.__super.call(this);
	}

	__class(SelServerCellExt,'boots.selserver.SelServerCellExt',_super);
	var __proto=SelServerCellExt.prototype;
	__proto.createChildren=function(){
		_super.prototype.createChildren.call(this);
		this.createView(SelServerCellExt.uiView);
	}

	__proto.SetData=function(v){
		this.vo=v;
		this.txtServerName.text=v.serverName;
		this.sprState.skin=SelServerUtil.GetServerStateIcon(this.vo.serverState);
		if (this.vo.serverTag==0){
			this.sprTag.removeSelf();
			}else{
			this.addChild(this.sprTag);
			if (this.vo.serverState==0)
				this.sprTag.skin="res/ui/image/boot/_ui_bm_weihuzhong.png";
			else
			this.sprTag.skin=v.serverTag==1 ? "res/ui/image/boot/_ui_bm_xin.png" :"res/ui/image/boot/_ui_bm_hot.png";
		}
	}

	SelServerCellExt.uiView={"type":"Scene","props":{"width":402,"height":117},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"width":402,"skin":"res/ui/image/boot/dikuang.png","sizeGrid":"20,20,20,20","height":117},"compId":4},{"type":"Image","props":{"y":-2,"x":-1,"width":73,"var":"sprTag","skin":"res/ui/image/boot/_ui_bm_hot.png","height":63},"compId":5},{"type":"Image","props":{"y":44,"x":22,"var":"sprState","skin":"res/ui/image/boot/_ui_icon_tongchang.png"},"compId":6},{"type":"Text","props":{"y":43,"x":73,"width":216,"var":"txtServerName","text":"双线87服","height":31,"fontSize":28,"font":"DFYuanW5","color":"#79421c","runtime":"laya.display.Text"},"compId":7},{"type":"Image","props":{"y":5.5,"x":301,"var":"imgHead","skin":"res/ui/image/boot/head10.png"},"compId":8,"child":[{"type":"Text","props":{"y":84,"x":0,"width":84,"var":"txtPlayerName","text":"玩家名字","height":18,"fontSize":18,"font":"DFYuanW5","color":"#79421C","align":"center","runtime":"laya.display.Text"},"compId":9}]}],"loadList":["res/ui/image/boot/dikuang.png","res/ui/image/boot/_ui_bm_hot.png","res/ui/image/boot/_ui_icon_tongchang.png","res/ui/image/boot/head10.png"],"loadList3D":[]};
	return SelServerCellExt;
})(Scene)


//class boots.selserver.AlertBootExt extends laya.ui.View
var AlertBootExt=(function(_super){
	function AlertBootExt(){
		this.btnSure=null;
		this.labDesc=null;
		this.btnClose=null;
		this._caller=null;
		this._listener=null;
		AlertBootExt.__super.call(this);
		this.btnSure.on("click",this,this.SureHandler);
		this.btnClose.on("click",this,this.CloseHandler);
	}

	__class(AlertBootExt,'boots.selserver.AlertBootExt',_super);
	var __proto=AlertBootExt.prototype;
	__proto.createChildren=function(){
		laya.display.Scene.prototype.createChildren.call(this);
		this.createView(AlertBootExt.uiView);
	}

	__proto.SetData=function(info){
		this.labDesc.text=info;
	}

	__proto.SureHandler=function(e){
		if (this._listener !=null){
			this._listener.apply(this._caller);
			this._listener=null;
			this._caller=null;
		}
		this.CloseHandler(e);
	}

	__proto.hideMe=function(){
		this.removeSelf();
		this._listener=null;
		this._caller=null;
	}

	__proto.CloseHandler=function(e){
		this.hideMe();
	}

	__getset(1,AlertBootExt,'Ins',function(){
		if (AlertBootExt._ins==null)
			AlertBootExt._ins=new AlertBootExt();
		return AlertBootExt._ins;
	},laya.ui.View._$SET_Ins);

	AlertBootExt.Show=function(info,layer,caller,listener,haveClose){
		(layer===void 0)&& (layer=31);
		(haveClose===void 0)&& (haveClose=true);
		AlertBootExt.Ins._caller=caller;
		AlertBootExt.Ins._listener=listener;
		AlertBootExt.Ins.btnClose.visible=haveClose;
		AlertBootExt.Ins.SetData(info);
		Scene.root.addChild(AlertBootExt.Ins);
		AlertBootExt.Ins.zOrder=layer;
		AlertBootExt.Ins.x=(Laya.stage.width-AlertBootExt.Ins.width)/ 2;
		AlertBootExt.Ins.y=(Laya.stage.height-AlertBootExt.Ins.height)/ 2;
	}

	AlertBootExt.Hide=function(){
		if (AlertBootExt._ins !=null)
			AlertBootExt._ins.hideMe();
	}

	AlertBootExt._ins=null;
	AlertBootExt.uiView={"type":"View","props":{"width":720,"height":1280},"compId":2,"child":[{"type":"Image","props":{"y":475,"x":53,"width":615,"skin":"res/ui/image/boot/mainbg_1.png","sizeGrid":"110,115,110,115","height":342},"compId":3},{"type":"Image","props":{"y":481,"x":66,"width":588,"skin":"res/ui/image/boot/mainbg_2.png","sizeGrid":"78,94,78,94","height":311},"compId":15},{"type":"Image","props":{"y":545,"x":100,"width":526,"skin":"res/ui/sg_ui/cm/dikuang_2.png","sizeGrid":"40,40,40,40","height":224},"compId":17},{"type":"Button","props":{"y":696,"x":296,"var":"btnSure","stateNum":1,"skin":"res/ui/sg_ui/cm/button_1.png","labelSize":26,"labelFont":"DFYuanW5","labelColors":"#FFDE97","label":"确定"},"compId":5},{"type":"Label","props":{"y":563,"x":110,"width":500,"var":"labDesc","valign":"middle","height":119,"fontSize":22,"color":"#79421C","align":"center"},"compId":9},{"type":"Image","props":{"y":459,"x":21,"width":677,"skin":"res/ui/image/boot/title_down1.png","sizeGrid":"0,215,0,213","height":81},"compId":16},{"type":"Sprite","props":{"y":452,"x":238,"texture":"res/ui/image/boot/title_2.png"},"compId":12,"child":[{"type":"Label","props":{"y":7,"x":87,"width":69,"text":"提示","strokeColor":"#000000","stroke":2,"height":34,"fontSize":34,"font":"DFYuanW5","color":"#ffffff","bold":true},"compId":18}]},{"type":"Button","props":{"y":470,"x":572.5,"var":"btnClose","stateNum":1,"skin":"res/ui/image/boot/close1.png"},"compId":4},{"type":"Sprite","props":{"y":513,"x":320,"texture":"res/ui/image/boot/figure_1.png"},"compId":13}],"loadList":["res/ui/image/boot/mainbg_1.png","res/ui/image/boot/mainbg_2.png","res/ui/sg_ui/cm/dikuang_2.png","res/ui/sg_ui/cm/button_1.png","res/ui/image/boot/title_down1.png","res/ui/image/boot/title_2.png","res/ui/image/boot/close1.png","res/ui/image/boot/figure_1.png"],"loadList3D":[]};
	return AlertBootExt;
})(View)


/**
*测试选服页(切勿引用到com的包了)
*/
//class boots.selserver.SelServerPanelExt extends laya.ui.View
var SelServerPanelExt=(function(_super){
	function SelServerPanelExt(){
		this.imgbg=null;
		this.imgDi=null;
		this.imgLetter=null;
		this.boxWord=null;
		//public var labLaya:Label;
		this.labWord1=null;
		this.txtWord1=null;
		this.txtWord2=null;
		this.txtWord3=null;
		this.boxWord2=null;
		this.boxSelServer=null;
		this.btnAgreement=null;
		this.boxServer=null;
		this.imglatest=null;
		this.labNew=null;
		this.lablatest=null;
		this.imgSelServer=null;
		this.btnSelectServer=null;
		this.txtServer=null;
		this.txtAccount=null;
		this.btnLogin=null;
		this.imgServerBG=null;
		this.sprdebug=null;
		this.btnClose=null;
		this.btnBack=null;
		this.panServerList=null;
		this.panServerTab=null;
		this.radioServerTab=null;
		this.boxLoadMain=null;
		this.sprLoading=null;
		this.sprQuan=null;
		this.labDesc=null;
		this.boxLoading=null;
		this.prog1Image=null;
		this.imgProg1=null;
		this.sprYun1=null;
		this.txtDesc1=null;
		this.progimage=null;
		this.imgProg=null;
		this.sprYun=null;
		this.txtDesc=null;
		this.labRefresh=null;
		this.lab_des=null;
		this.loadingAni=null;
		this.btnNotice=null;
		this.boxtest=null;
		this.server_ip=null;
		this.server_port=null;
		this.server_id=null;
		this._medType=0;
		this._med=null;
		this.radioT=null;
		this.initWordY=0;
		this.initServerY=0;
		this.sprBg=null;
		this.serverBg=null;
		this.leopardAni=new Laya.Animation();
		SelServerPanelExt.__super.call(this);
		this.centerX=this.centerY=0;
		this.sprLoading.visible=false;
		this.prog1Image.visible=false;
		this.btnAgreement.visible=false;
		var str="全民首领击杀归属奖励必定掉落武器打造石;"+
		"野外首领归属奖励必定掉落武器打造石;"+
		"参与首领争夺可以获取大量装备打造石;"+
		"合理利用宝物，可以在试炼之塔中走的更远;"+
		"提升军团等级可以开启高级军团技能;"+
		"宝刀锋从磨砺出，打造装备，战力嗖嗖嗖的涨;"+
		"凑齐整套装备，可以激活套装属性;"+
		"普通核心石可以合成高级核心石哦;"+
		"武将技能石可以合成武将特技石哦;"+
		"时不时去神秘商店看看，里面的东西物美价廉;"+
		"完成每日日常可以获得珍贵的VIP经验;"+
		"打败BOSS，获得战魂，提升战力;"+
		"提升VIP等级，开启更多合体武将;"+
		"达成成就可以获得大量刀币;"+
		"草船借箭可以产出橙色武将碎片和大量奖励;"+
		"低级装备打造石可以合成高级装备打造石;"+
		"组队副本打不过，记得叫上兄弟一起撸;"+
		"周末完成日常任务，更有周末奖励可领;"+
		"参与煮酒论英雄可以获取大量神装碎片;"+
		"参与群英会，为服务器荣誉而战;"+
		"提升VIP等级可解锁额外出战单位;"+
		"通关每日材料副本，获得大量进阶道具;"+
		"通关火烧连营可开启多个咒术装备格掉落大量咒术;"+
		"每日可通过银两兑换获取丰厚银两收益;"+
		"完成每日日常任务可获得VIP经验;"+
		"煮酒论英雄，大量资源轻松获取;"+
		"每日空城计，只要站得住，天下都是自己的;"+
		"加入军团解锁更多丰富玩法，结识各路豪杰;"+
		"参与借东风任务可丰厚奖励;"+
		"每天中午12点参与科举轻松领取刀币、寻宝令;"+
		"武将无论是否出战都可获得属性加成;";
		var arr=str.split(";");
		this.lab_des.color="#fef7e6";
		this.lab_des.text=arr[Math.floor(Math.random()*arr.length)];
		this.panServerList.elasticEnabled=this.panServerTab.elasticEnabled=true;
		this.panServerList.vScrollBarSkin=this.panServerTab.vScrollBarSkin="";
		if(WebfingertipUtil.isOpen){
			var param=window.zhijianParams();
			if (param["cpgameid"]==224)
				this.imgbg.skin="res/ui/image/boot/changewei.jpg";
			else
			this.imgbg.skin="res/ui/image/boot/beijingnew.png";
		}
		else
		this.imgbg.skin="res/ui/image/boot/beijingnew.png";
		if(Browser.inQQ)
			this.imgbg.skin="res/ui/image/boot/qqMiniBg.png";
		this.btnAgreement.visible=true;
		if(Web37Util.isWideScreen){
			this.imgbg.skin="res/ui/image/boot/ditu_web.jpg";
			this.imgbg.size(2560,1280);
			this.imgDi.visible=true;
			this.imgDi.size(this.imgbg.width,148);
			this.imgDi.pos(0,this.imgbg.height-this.imgDi.height);
			this.imgDi.alpha=0.3;
			this.btnAgreement.visible=false;
			this.txtWord1.fontSize=this.txtWord2.fontSize=this.txtWord3.fontSize=20;
			this.labWord1.fontSize=22;
			this.txtWord1.color=this.txtWord2.color=this.txtWord3.color=this.labWord1.color="#e9e8e8";
			this.labWord1.width=this.txtWord1.width=this.txtWord2.width=this.txtWord3.width=this.imgbg.width;
			this.labWord1.x=(this.boxWord.width-this.labWord1.width)/2;
			this.txtWord1.x=(this.boxWord.width-this.txtWord1.width)/2;
			this.txtWord2.x=(this.boxWord.width-this.txtWord2.width)/2;
			this.txtWord3.x=(this.boxWord.width-this.txtWord3.width)/2;
			this.txtWord1.y=this.boxWord.height-25;
			this.txtWord2.y=this.txtWord1.y-23;
			this.txtWord3.y=this.txtWord2.y-23;
			this.labWord1.y=this.txtWord3.y-35;
			this.imgbg.addChild(this.boxWord);
			this.boxWord.pos((this.imgbg.width-this.boxWord.width)/2,this.imgbg.height-this.boxWord.height);
			this.imgbg.addChild(this.boxWord2);
			this.boxWord2.pos((this.imgbg.width-this.boxWord2.width)/2,this.imgbg.height-this.boxWord2.height);
			this.imgbg.addChild(this.boxServer);
			this.boxServer.pos(this.imgbg.width/2+170,this.imgbg.height/2-20);
			if(this.serverBg==null){
				this.serverBg=new Sprite();
				this.imgbg.addChild(this.serverBg);
				this.serverBg.pos(0,0);
				this.serverBg.alpha=0.5;
				this.serverBg.mouseEnabled=true;
				this.serverBg.mouseThrough=false;
			}
			this.imgbg.addChild(this.imgServerBG);
			this.imgServerBG.pos((this.imgbg.width-this.imgServerBG.width*this.imgServerBG.scaleX)/2,(this.imgbg.height-this.imgServerBG.height*this.imgServerBG.scaleY)/2);
		}
		else{
			this.imgDi.visible=false;
		}
		this.imgbg.tag={initX:this.imgbg.x,initY:this.imgbg.y,initW:this.imgbg.width,initH:this.imgbg.height};
		BootUIUtil.AddButtonFeed(this.btnLogin);
		BootUIUtil.AddButtonFeed(this.btnClose);
		BootUIUtil.AddButtonFeed(this.btnBack);
		BootUIUtil.AddButtonFeed(this.btnAgreement);
		this.radioT=this.radioServerTab.items [0];
		this.radioServerTab.delItem(this.radioT);
		this.imglatest.visible=false;
	}

	__class(SelServerPanelExt,'boots.selserver.SelServerPanelExt',_super);
	var __proto=SelServerPanelExt.prototype;
	Laya.imps(__proto,{"boots.selserver.ISelServer":true})
	//先屏蔽，等请求到最新服时再显示
	__proto.onLoaded=function(){
		this.loadingAni.addChild(this.leopardAni);
		this.loadingAni.scale(0.8,0.8,true);
		this.leopardAni.interval=100;
		this.leopardAni.play();
	}

	__proto.createChildren=function(){
		laya.display.Scene.prototype.createChildren.call(this);
		this.createView(SelServerPanelExt.uiView);
		this.initWordY=this.boxWord.y;
		this.initServerY=this.boxServer.y;
	}

	__proto.onOpened=function(param){
		laya.display.Scene.prototype.onOpened.call(this,param);
		console.log("SelServerPanelExt old:"+this._medType+" now:"+param);
		if (this._medType !=param){
			this._medType=param;
			this.boxSelServer.visible=this._medType==1;
			this.boxServer.visible=this._medType==1;
			this.imgServerBG.visible=this._medType==1;
			this.boxLoadMain.visible=this._medType==2;
			this.boxLoading.visible=this._medType==3;
			if (this._med){
				this._med.destroy();
			}
			if (this._medType==1){
				console.log("ChannelID:"+PlatformLoginUtil.vo.channelID+" GameName:"+GameCfg.GAMENAME);
				if(WebfingertipUtil.isOpen||WebmojieUtil.isOpen){
					console.log("WebfingertipUtil.isOpen  ？  SelServerPanelExt:测试选页服");
					this._med=new SelServerHttpMediator(this);
				}
				else {
					if (PlatformLoginUtil.vo.channelID==99999999){
						if (Web37Util.isOpen)
							this._med=new SelServerHttpMediator(this);
						else if(Browser.inQQ)
						this._med=new SelServerHttpMediator(this);
						else if(Browser.inWeChat)
						this._med=new SelServerHttpMediator(this);
						else if(Browser.inBiLi)
						this._med=new SelServerHttpMediator(this);
						else {
							if (GameCfg.ISBANSHU)
								this._med=new SelServerBanshuMediator(this);
							else if (GameCfg.GAMENAME==GameCfg.GAMENAME_WAIWANG)
							this._med=new SelServerWaiWangMediator(this);
							else if (GameCfg.GAMENAME==GameCfg.GAMENAME_37){
								this._med=new SelServerHttpAgentMediator(this);
							}
							else
							this._med=new SelServerHttpMediator(this);
						}
						}else {
						this._med=new SelServerHttpAgentMediator(this);
					}
				}
				}else if (param==2){
				this._med=new LoadMainMediator(this);
				}else if (param==3){
				this._med=new LoadingMediator(this);
			}
			if (this._med)
				this._med.OnShow();
		}
		Animation;
		Gyroscope;
		RotationInfo;
		if(this.sprBg==null){
			this.sprBg=new Sprite();
			this.sprBg.mouseEnabled=true;
			this.sprBg.mouseThrough=false;
			this.addChildAt(this.sprBg,0);
		}
		Laya.stage.on("resize",this,this.OnResize);
		this.OnResize();
	}

	__proto.onClosed=function(type){
		laya.display.Scene.prototype.onClosed.call(this,type);
		if (this._med)
			this._med.OnHide();
		if(this.sprBg !=null){
			this.sprBg.graphics.clear();
			this.sprBg.destroy();
			this.sprBg=null;
		}
		if(this.serverBg !=null){
			this.serverBg.graphics.clear();
			this.serverBg.destroy();
			this.serverBg=null;
		}
	}

	__proto.OnResize=function(){
		if(this.destroyed)
			return;
		var stagew=Laya.stage.width;
		var stageh=Laya.stage.height;
		if(Web37Util.isWideScreen){
			this.size(Math.min(stagew,this.imgbg.width),Math.min(stageh,this.imgbg.height));
		}
		this.x=(stagew-this.width)/ 2;
		this.y=(stageh-this.height)/ 2;
		this.sprBg.graphics.clear();
		this.sprBg.graphics.drawRect(-this.x,-this.y,stagew,stageh,"#000000");
		if(!Web37Util.isWideScreen){
			var oldy=this.imgbg.tag.initY;
			var cr=stagew/stageh;
			var dr=this.imgbg.width/this.imgbg.height;
			var sx=1;
			var sy=1;
			if (cr !=dr){
				if (cr > dr){
					sx=stagew / this.imgbg.width;
					sy=stagew / dr / this.imgbg.height;
					}else{
					sx=stageh *dr / this.imgbg.width;
					sy=stageh / this.imgbg.height;
				}
			}
			this.imgbg.scale(sx,sy);
			this.imgbg.x=((this.width-this.imgbg.width *sx)>> 1);
			this.imgbg.y=oldy *sy;
			if (this.imgbg.y+this.y > 0){
				this.imgbg.y=(this.height-this.imgbg.height*sy)>>1;
			}
		}
		else{
			var sw=this.imgbg.width/stagew;
			var sh=this.imgbg.height/stageh;
			var max=Math.max(sw,sh);
			if(max > 1){
				var ratio=1/max;
				this.imgbg.scale(ratio,ratio);
			}
			else
			this.imgbg.scale(1,1);
			this.imgbg.pos((this.width-this.imgbg.width*this.imgbg.scaleX)/2,(this.height-this.imgbg.height*this.imgbg.scaleY)/2);
			var loadingX=(this.width-this.sprLoading.width)/2;
			var loadingY=(this.height-this.sprLoading.height)/2;
			this.boxLoadMain.pos(loadingX-this.sprLoading.x,loadingY-this.sprLoading.y);
			this.boxLoading.pos((this.width-this.boxLoading.width)/2,this.imgbg.y+this.imgbg.height*this.imgbg.scaleY-this.boxLoading.height-this.imgDi.height*this.imgbg.scaleY);
		}
	}

	__proto.destroy=function(d){
		(d===void 0)&& (d=true);
		Laya.stage.off("resize",this,this.OnResize);
		this._med && this._med.destroy();
		this._med=null;
		AgreementExt.Hide();
		if(this.sprBg !=null){
			this.sprBg.graphics.clear();
			this.sprBg.destroy();
			this.sprBg=null;
		}
		if(this.serverBg !=null){
			this.serverBg.graphics.clear();
			this.serverBg.destroy();
			this.serverBg=null;
		}
		_super.prototype.destroy.call(this);
	}

	__proto.showHideServerBg=function(isShow){
		if(this.serverBg==null)
			return;
		if(isShow){
			this.serverBg.graphics.clear();
			this.serverBg.size(this.imgbg.width,this.imgbg.height);
			this.serverBg.graphics.drawRect(0,0,this.imgbg.width,this.imgbg.height,"#000000");
		}
		else{
			this.serverBg.graphics.clear();
			this.serverBg.size(10,10);
		}
	}

	__getset(0,__proto,'medType',function(){
		return this._medType;
	});

	SelServerPanelExt.uiView={"type":"View","props":{"width":720,"height":1280},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"imgbg","skin":"res/ui/image/boot/beijing.png"},"compId":3,"child":[{"type":"Image","props":{"y":1130,"x":153,"var":"imgDi","skin":"res/ui/image/boot/di.png","sizeGrid":"20,20,20,20"},"compId":106}]},{"type":"Box","props":{"y":1155,"x":0,"width":720,"var":"boxWord","mouseThrough":true,"mouseEnabled":false,"height":125},"compId":67,"child":[{"type":"Label","props":{"y":25,"x":153,"width":413,"var":"labWord1","text":"适龄提示：本游戏适合18周岁以上用户参与","stroke":2,"height":20,"fontSize":20,"font":"DFYuanW5","color":"#FFDDAC","bold":true,"align":"center"},"compId":68},{"type":"Text","props":{"y":108,"x":25,"width":670,"var":"txtWord0","text":"适度游戏益脑,沉迷游戏伤身.合理安排时间,享受健康生活.","strokeColor":"#080808","stroke":2,"name":"","height":17,"fontSize":16,"font":"DFYuanW5","color":"#FFDDAC","bold":true,"align":"center","runtime":"laya.display.Text"},"compId":113},{"type":"Text","props":{"y":88,"x":25,"width":670,"var":"txtWord1","text":"抵制不良游戏,拒绝盗版游戏.注意自我保护,谨防受骗上当.","strokeColor":"#080808","stroke":2,"name":"","height":17,"fontSize":16,"font":"DFYuanW5","color":"#FFDDAC","bold":true,"align":"center","runtime":"laya.display.Text"},"compId":74},{"type":"Text","props":{"y":68,"x":35,"wordWrap":false,"width":650,"var":"txtWord2","text":"ISBN:978-7-498-06291-8 软著登字第2375736号  著作权人: 广州喵宝网络科技有限公司","strokeColor":"#080808","stroke":2,"name":"","height":16,"fontSize":16,"font":"DFYuanW5","color":"#FFDDAC","bold":true,"align":"center","runtime":"laya.display.Text"},"compId":70},{"type":"Text","props":{"y":49,"x":128,"wordWrap":false,"width":463,"var":"txtWord3","text":"版号:国新出审[2019]1112号  出版单位:杭州群游科技有限公司","strokeColor":"#080808","stroke":2,"height":16,"fontSize":16,"font":"DFYuanW5","color":"#FFDDAC","bold":true,"align":"center","runtime":"laya.display.Text"},"compId":72}]},{"type":"Box","props":{"y":1058,"x":0,"width":720,"visible":false,"var":"boxWord2","height":220},"compId":58,"child":[{"type":"Text","props":{"y":164,"x":169.98599243164062,"wordWrap":false,"valign":"middle","text":"著作权人： 广州喵宝网络科技有限公司","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":59},{"type":"Text","props":{"y":137,"x":120,"wordWrap":false,"valign":"middle","text":"ISBN：978-7-498-06291-8 软著登字第2375736号","strokeColor":"#080808","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":60},{"type":"Text","props":{"y":106,"x":196,"wordWrap":false,"valign":"middle","text":"出版单位：杭州群游科技有限公司","strokeColor":"#080808","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":61},{"type":"Text","props":{"y":75,"x":216,"wordWrap":false,"valign":"middle","text":"版号：国新出审[2019]1112号","strokeColor":"#080808","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":62},{"type":"Text","props":{"y":44,"x":53,"text":"适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。","strokeColor":"#080808","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":63},{"type":"Text","props":{"y":13,"x":53,"text":"抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。","strokeColor":"#080808","stroke":2,"name":"","fontSize":22,"font":"DFYuanW5","color":"#FFDDAC","align":"center","runtime":"laya.display.Text"},"compId":64}]},{"type":"Box","props":{"y":0,"x":0,"width":720,"var":"boxSelServer","mouseThrough":true,"mouseEnabled":true,"height":1280},"compId":90,"child":[{"type":"Button","props":{"y":185,"x":606,"var":"btnAgreement","stateNum":1,"skin":"res/ui/image/boot/xieyi.png"},"compId":81},{"type":"Button","props":{"y":279,"x":606,"var":"btnNotice","stateNum":1,"skin":"res/ui/image/boot/notice.png"},"compId":114},{"type":"Box","props":{"y":859,"x":0,"width":720,"var":"boxServer","height":395},"compId":65,"child":[{"type":"Image","props":{"y":5,"x":60,"width":600,"var":"imglatest","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","height":78},"compId":53,"child":[{"type":"Label","props":{"y":26,"x":20,"width":250,"var":"labNew","text":"最新服：","prompt":"服务器地址","height":34,"fontSize":30,"font":"DFYuanW5","color":"#ffffff","align":"right"},"compId":66},{"type":"Label","props":{"y":26,"x":270,"width":300,"var":"lablatest","text":"{@}","prompt":"服务器地址","height":34,"fontSize":30,"font":"DFYuanW5","color":"#00FF00","bold":true,"align":"left"},"compId":56}]},{"type":"Image","props":{"y":91,"x":60,"width":600,"var":"imgSelServer","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","height":78},"compId":29,"child":[{"type":"Button","props":{"y":21,"x":433,"var":"btnSelectServer","stateNum":1,"skin":"res/ui/image/boot/select.png"},"compId":9},{"type":"Label","props":{"y":22,"x":21,"width":415,"var":"txtServer","text":"当前服：  燃爆三国1服","prompt":"服务器地址","height":34,"fontSize":30,"font":"DFYuanW5","color":"#ffffff","align":"center"},"compId":8}]},{"type":"TextInput","props":{"y":177,"x":60,"width":600,"var":"txtAccount","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","prompt":"账户名称","height":78,"fontSize":28,"font":"DFYuanW5","color":"#ffffff","align":"center"},"compId":10},{"type":"Button","props":{"y":261,"x":207,"var":"btnLogin","stateNum":1,"skin":"res/ui/image/boot/anniu.png"},"compId":7,"child":[{"type":"Sprite","props":{"y":17,"x":50,"texture":"res/ui/image/boot/start.png"},"compId":57}]}]},{"type":"Image","props":{"y":137,"x":0,"width":720,"var":"imgServerBG","skin":"res/ui/image/boot/mainbg_1.png","sizeGrid":"115,117,115,117","height":1063},"compId":12,"child":[{"type":"Image","props":{"y":11,"x":19,"width":681,"skin":"res/ui/image/boot/mainbg_2.png","sizeGrid":"84,82,67,82","height":932},"compId":75},{"type":"Sprite","props":{"y":-44,"x":185,"var":"sprdebug","texture":"res/ui/image/boot/title_1.png"},"compId":13,"child":[{"type":"Sprite","props":{"y":11,"x":82,"visible":true,"texture":"res/ui/image/boot/_ui_cj_bm_fuwuqixuanzhe.png"},"compId":16}]},{"type":"Image","props":{"y":-15,"x":0,"width":720,"skin":"res/ui/image/boot/title_down1.png","sizeGrid":"0,213,0,213"},"compId":34},{"type":"Sprite","props":{"y":105,"x":345,"texture":"res/ui/image/boot/figure_1.png","pivotY":65,"pivotX":25},"compId":36},{"type":"Button","props":{"y":-3,"x":612,"var":"btnClose","stateNum":1,"skin":"res/ui/image/boot/close1.png"},"compId":14},{"type":"Button","props":{"y":944,"x":604,"var":"btnBack","stateNum":1,"skin":"res/ui/image/boot/back1.png"},"compId":28},{"type":"Image","props":{"y":79,"x":264,"width":419,"skin":"res/ui/image/boot/_ui_sbm_002.png","sizeGrid":"8,8,8,8","height":820},"compId":25,"child":[{"type":"Panel","props":{"y":5,"x":9,"width":402,"var":"panServerList","height":810},"compId":27}]},{"type":"Image","props":{"y":79,"x":36,"width":225,"skin":"res/ui/image/boot/_ui_sbm_002.png","sizeGrid":"8,8,8,8","height":820},"compId":18,"child":[{"type":"Panel","props":{"y":15,"x":5,"width":214,"var":"panServerTab","height":863},"compId":20,"child":[{"type":"RadioGroup","props":{"y":0,"x":0,"width":214,"var":"radioServerTab","stateNum":3,"space":0,"skin":"res/ui/image/boot/_ui_bt_fuwuqi02_comBtn.png","selectedIndex":0,"labelSize":28,"labelAlign":"center","height":852,"direction":"vertical"},"compId":22,"child":[{"type":"Radio","props":{"y":0,"x":0,"width":214,"skin":"res/ui/image/boot/_ui_bt_fuwuqi02_comBtn.png","name":"item0","labelSize":28,"labelColors":"#9A6F46,#AA5300,#AA5300,#9A6F46","height":77},"compId":44}]}]}]}]}]},{"type":"Box","props":{"y":-1,"x":0,"width":482,"var":"boxLoadMain","mouseThrough":true,"mouseEnabled":false,"height":622},"compId":89,"child":[{"type":"Sprite","props":{"y":460,"x":242,"width":240,"var":"sprLoading","texture":"res/ui/image/boot/jiazaidi.png","height":162},"compId":85,"child":[{"type":"Sprite","props":{"y":66,"x":120,"var":"sprQuan","texture":"res/ui/image/boot/jiazaiquan.png","pivotY":65.5,"pivotX":65.5},"compId":86},{"type":"Label","props":{"y":131,"x":-110,"width":459,"var":"labDesc","text":"正在加载：{@}","height":28,"fontSize":24,"font":"DFYuanW5","color":"#FFDDAC","align":"center"},"compId":87}]}]},{"type":"Box","props":{"y":-101,"x":0,"width":720,"var":"boxLoading","mouseThrough":true,"mouseEnabled":true,"height":1120},"compId":88,"child":[{"type":"Sprite","props":{"y":960,"x":0,"width":720,"texture":"res/ui/image/boot/word_di.png","height":145},"compId":91},{"type":"Image","props":{"y":948,"x":64,"width":591,"visible":true,"var":"prog1Image","skin":"res/ui/image/boot/pro1.png","sizeGrid":"0,54,0,54","height":30},"compId":93,"child":[{"type":"Image","props":{"y":6,"x":6,"width":579,"var":"imgProg1","skin":"res/ui/image/boot/pro1$bar.png","sizeGrid":"0,10,0,10","height":20},"compId":94},{"type":"Sprite","props":{"y":-17,"x":542.5,"var":"sprYun1","texture":"res/ui/image/boot/prolight.png"},"compId":95},{"type":"Text","props":{"y":2,"x":126,"width":339,"var":"txtDesc1","text":"100%","height":25,"fontSize":24,"font":"DFYuanW5","color":"#FFFFFF","align":"center","runtime":"laya.display.Text"},"compId":96},{"type":"Label","props":{"y":34,"x":109,"width":371.73,"visible":true,"text":"首次加载时间稍长,请耐心等待","stroke":2,"height":28,"fontSize":28,"font":"DFYuanW5","color":"#F7C016"},"compId":97}]},{"type":"Image","props":{"y":1029,"x":64,"width":591,"var":"progimage","skin":"res/ui/image/boot/pro2.png","sizeGrid":"0,54,0,54","height":30},"compId":98,"child":[{"type":"Image","props":{"y":5,"x":6,"width":579,"var":"imgProg","skin":"res/ui/image/boot/pro2$bar.png","sizeGrid":"0,10,0,10","height":20},"compId":99},{"type":"Sprite","props":{"y":-17,"x":542.5,"var":"sprYun","texture":"res/ui/image/boot/prolight.png"},"compId":100},{"type":"Text","props":{"y":2,"x":126,"width":339,"var":"txtDesc","text":"进度","height":25,"fontSize":24,"font":"DFYuanW5","color":"#FFFFFF","align":"center","runtime":"laya.display.Text"},"compId":101},{"type":"Label","props":{"y":34,"x":114,"width":227,"visible":true,"text":"如果无法进入游戏","stroke":2,"height":28,"fontSize":28,"font":"DFYuanW5","color":"#F7C016"},"compId":103},{"type":"Label","props":{"y":34,"x":341.5,"visible":true,"var":"labRefresh","underline":true,"text":"请点击刷新","strokeColor":"#080808","stroke":2,"fontSize":28,"font":"DFYuanW5","color":"#00FF1e"},"compId":104}]},{"type":"Text","props":{"y":20,"x":0,"width":720,"visible":false,"text":"进度","height":55,"fontSize":25,"font":"DFYuanW5","color":"#000000","align":"center","runtime":"laya.display.Text"},"compId":92},{"type":"Sprite","props":{"y":850,"x":110,"var":"loadingAni"},"compId":109},{"type":"Label","props":{"y":997,"x":6,"width":707,"var":"lab_des","text":"{@}","height":28,"fontSize":24,"font":"DFYuanW5","color":"#FFDDAC","align":"center"},"compId":115}]},{"type":"Box","props":{"visible":false,"var":"boxtest"},"compId":117,"child":[{"type":"TextInput","props":{"y":177,"x":67,"width":600,"var":"server_ip","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","prompt":"server_ip","height":78,"fontSize":28,"font":"DFYuanW5","color":"#ffffff","align":"center"},"compId":118},{"type":"TextInput","props":{"y":255,"x":67,"width":600,"var":"server_port","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","prompt":"server_port","height":78,"fontSize":28,"font":"DFYuanW5","color":"#ffffff","align":"center"},"compId":119},{"type":"TextInput","props":{"y":341,"x":68,"width":600,"var":"server_id","skin":"res/ui/image/boot/name_bg.png","sizeGrid":"18,37,18,37","prompt":"server_id","height":78,"fontSize":28,"font":"DFYuanW5","color":"#ffffff","align":"center"},"compId":120}]}],"loadList":["res/ui/image/boot/beijing.png","res/ui/image/boot/di.png","res/ui/image/boot/xieyi.png","res/ui/image/boot/notice.png","res/ui/image/boot/name_bg.png","res/ui/image/boot/select.png","res/ui/image/boot/anniu.png","res/ui/image/boot/start.png","res/ui/image/boot/mainbg_1.png","res/ui/image/boot/mainbg_2.png","res/ui/image/boot/title_1.png","res/ui/image/boot/_ui_cj_bm_fuwuqixuanzhe.png","res/ui/image/boot/title_down1.png","res/ui/image/boot/figure_1.png","res/ui/image/boot/close1.png","res/ui/image/boot/back1.png","res/ui/image/boot/_ui_sbm_002.png","res/ui/image/boot/_ui_bt_fuwuqi02_comBtn.png","res/ui/image/boot/jiazaidi.png","res/ui/image/boot/jiazaiquan.png","res/ui/image/boot/word_di.png","res/ui/image/boot/pro1.png","res/ui/image/boot/pro1$bar.png","res/ui/image/boot/prolight.png","res/ui/image/boot/pro2.png","res/ui/image/boot/pro2$bar.png"],"loadList3D":[]};
	return SelServerPanelExt;
})(View)


/**
*公告面板
*/
//class boots.selserver.NoticeComPanelExt extends laya.ui.View
var NoticeComPanelExt=(function(_super){
	function NoticeComPanelExt(){
		this.scrp1=null;
		this.labDesc=null;
		this.btnClose=null;
		this.btnOk=null;
		this._gonggao=null;
		this._bg=new Sprite();
		NoticeComPanelExt.__super.call(this);
		this.centerX=this.centerY=0;
		this._bg.mouseEnabled=true;
		this.hitTestPrior=false;
		BootUIUtil.AddButtonFeed(this.btnOk);
		BootUIUtil.AddButtonFeed(this.btnClose);
		this.btnClose.on("click",this,this.ClickClose);
		this.btnOk.on("click",this,this.ClickClose);
		this.scrp1.vScrollBarSkin="";
		this.labDesc.text="";
		NoticeComPanelExt.IsShow=true;
		this.visible=false;
	}

	__class(NoticeComPanelExt,'boots.selserver.NoticeComPanelExt',_super);
	var __proto=NoticeComPanelExt.prototype;
	__proto.createChildren=function(){
		laya.display.Scene.prototype.createChildren.call(this);
		this.createView(NoticeComPanelExt.uiView);
	}

	__proto.ClickClose=function(){
		NoticeComPanelExt.Hide();
	}

	__proto.OnShow=function(){
		Laya.stage.on("resize",this,this.onResize);
		this.ShowPanel();
		this.onResize();
	}

	__proto.OnHide=function(){
		Laya.stage.off("resize",this,this.onResize);
	}

	__proto.onResize=function(){
		this._bg.graphics.clear();
		this._bg.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000");
		this._bg.alpha=0.7;
		this._bg.size(Laya.stage.width,Laya.stage.height);
		this.addChildAt(this._bg,0);
		this._bg.pos((this.width-this._bg.width)>>1,(this.height-this._bg.height)>>1);
	}

	__proto.ShowPanel=function(){
		var _$this=this;
		var txt=this._gonggao;
		this.visible=false;
		var req=new RequestUtil(this,function(data){
			var obj=BootUtil.decode(data);
			if (obj.code==1){
				var html=obj.data;
				html=html.replace(/&lt;/g,"<");
				html=html.replace(/&gt;/g,">");
				html=html.replace(/&#39;/g,"'");
				html=html.replace(/&apos;/g,"'");
				html=html.replace(/&quot;/g,"\"");
				html=html.replace("<p>","");
				html=html.replace("</p>","");
				_$this._gonggao=html;
				if(NoticeComPanelExt.curType !=2){
					_$this.UpdateLabel(html);
				}
				else{
					var noticstr=LocalStorage.getItem("NoticeStr");
					LocalStorage.setItem("NoticeStr",obj.data);
					if(noticstr==obj.data&& !NoticeComPanelExt.isShow){
						NoticeComPanelExt.Hide();
					}
					else{
						_$this.UpdateLabel(html);
					}
				}
			}
			},function(err){
			console.log(err);
		});
		req.Send(BootUtil.FormatStr("https://h5.c.popcornie.com/backend?type={@}&server={@}",[NoticeComPanelExt.curType,NoticeComPanelExt.curServerId]));
	}

	// }
	__proto.UpdateLabel=function(txt){
		this.visible=true;
		if (this.destroyed)return;
		txt=BootUtil.RemoveHTMLTag(txt);
		this.labDesc.text=txt;
		this.labDesc.height=this.labDesc.textField.textHeight;
		if(this.labDesc.height<=2000)
			this.labDesc.height=this.labDesc.textField.textHeight*2;
		this.labDesc.fontSize=26;
	}

	NoticeComPanelExt.Show=function(_type,serverid,_isShow){
		(_type===void 0)&& (_type=0);
		(serverid===void 0)&& (serverid=0);
		(_isShow===void 0)&& (_isShow=false);
		if (NoticeComPanelExt._ins==null)NoticeComPanelExt._ins=new NoticeComPanelExt();
		Scene.root.addChild(NoticeComPanelExt._ins);
		NoticeComPanelExt._ins.zOrder=31;
		NoticeComPanelExt.curType=_type;
		NoticeComPanelExt.curServerId=serverid;
		NoticeComPanelExt.isShow=_isShow;
		NoticeComPanelExt._ins.OnShow();
	}

	NoticeComPanelExt.Hide=function(){
		if (NoticeComPanelExt._ins !=null){
			NoticeComPanelExt._ins.removeSelf();
			NoticeComPanelExt._ins.OnHide();
		}
		NoticeComPanelExt.IsShow=false;
	}

	NoticeComPanelExt.uiView={"type":"View","props":{"width":712,"height":997},"compId":2,"child":[{"type":"Image","props":{"y":-1,"x":0,"width":712,"skin":"res/ui/image/boot/mainbg_1.png","sizeGrid":"131,130,119,141","height":997},"compId":3},{"type":"Image","props":{"y":6,"x":15,"width":683,"skin":"res/ui/image/boot/mainbg_2.png","sizeGrid":"85,87,72,88","height":959},"compId":4,"child":[{"type":"Panel","props":{"y":65,"x":24,"width":636,"var":"scrp1","height":778},"compId":13,"child":[{"type":"Label","props":{"y":7,"x":14,"wordWrap":true,"width":608,"var":"labDesc","text":"{@}","height":778,"fontSize":20,"color":"#79421C"},"compId":7}]}]},{"type":"Image","props":{"y":-18,"x":-10,"width":732,"skin":"res/ui/image/boot/title_down1.png","sizeGrid":"0,215,0,213","height":81},"compId":16},{"type":"Sprite","props":{"y":-29,"x":242,"texture":"res/ui/image/boot/title_2.png"},"compId":15,"child":[{"type":"Label","props":{"y":7,"x":87,"width":69,"text":"公告","strokeColor":"#000000","stroke":2,"height":34,"fontSize":34,"font":"DFYuanW5","color":"#ffffff","bold":true},"compId":17}]},{"type":"Button","props":{"y":-8.5,"x":606,"var":"btnClose","stateNum":1,"skin":"res/ui/image/boot/close1.png"},"compId":10},{"type":"Button","props":{"y":877,"x":291.5,"var":"btnOk","stateNum":1,"skin":"res/ui/image/boot/button_1.png","selected":true,"labelSize":22,"labelFont":"DFYuanW5","labelColors":"#FFDE97","labelBold":true,"label":"我知道了"},"compId":11},{"type":"Sprite","props":{"y":36,"x":316,"texture":"res/ui/image/boot/figure_1.png"},"compId":18}],"loadList":["res/ui/image/boot/mainbg_1.png","res/ui/image/boot/mainbg_2.png","res/ui/image/boot/title_down1.png","res/ui/image/boot/title_2.png","res/ui/image/boot/close1.png","res/ui/image/boot/button_1.png","res/ui/image/boot/figure_1.png"],"loadList3D":[]};
	NoticeComPanelExt.URL="https://h5.c.popcornie.com/backend?type={@}&server={@}";
	NoticeComPanelExt.IsShow=false;
	NoticeComPanelExt._ins=null;
	NoticeComPanelExt.curServerId=0;
	NoticeComPanelExt.curType=0;
	NoticeComPanelExt.isShow=false;
	return NoticeComPanelExt;
})(View)


//class boots.agreement.AgreementExt extends laya.ui.View
var AgreementExt=(function(_super){
	function AgreementExt(){
		this.btnClose=null;
		this.scrp1=null;
		this.html1=null;
		this.btnOk=null;
		this.yinsiSpe=null;
		this.yonghuSpe=null;
		this.content37="用户注册服务协议<br>"+
		"前言<br>"+
		"本《用户注册服务协议》（以下简称“本协议”）是由您（以下称为“ 用户”或“乙方”，在本协议第一部分《文化部网络游戏服务格式化协议必备条款》中，又称为“乙方”）与广州三七网络科技有限公司（以下称为“37手游”或“甲方”，服务（包括37手游的网站以及37手游现在正在提供和将来可能向用户提供的移动游戏服务和其他网络服务，以下统称为“ 产品和服务”）所订立的协议。<br>"+
		"如果用户进入37手游网站或其下游戏的用户注册页面，确认已经阅读、同意本协议的条款并完成注册，或者通过其他任何方式获得和使用37手游所提供的产品和服务，则视为用户已经详细阅读了本协议的内容，同意遵守本协议的约定。用户不应再以不了解本协议内容为由拒绝履行本协议。因此，请用户务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、管辖与法律适用条款，以及开通或使用某项服务的单独协议。限制、免责条款及其他需要用户重点阅读的条款内容，37手游将以橙色加粗形式提示用户重点注意。因此，为保障用户的权益，请于注册使用37手游所提供的各种产品和服务之前，仔细阅读本协议全文。此外，依据本协议第十六条，37手游有权不时对本协议进行修改与更新，您同意将随时留意查看本协议的最新版本。<br>"+
		"第一部分 文化部网络游戏服务格式化协议必备条款<br>"+
		"1.帐号注册<br>"+
		"1.1 乙方承诺以其真实身份注册成为甲方的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。<br>"+
		"1.2 乙方以其真实身份注册成为甲方用户后，需要修改所提供的个人身份资料信息的，甲方应当及时、有效地为其提供该项服务。<br>"+
		"2.用户帐号使用与保管<br>"+
		"2.1 根据必备条款的约定，甲方有权审查乙方注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户帐号的安全、有效；乙方有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。任何一方未尽上述义务导致帐号密码遗失、帐号被盗等情形而给乙方和他人的民事权利造成损害的，应当承担由此产生的法律责任。<br>"+
		"2.2乙方对登录后所持帐号产生的行为依法享有权利和承担责任。<br>"+
		"2.3 乙方发现其帐号或密码被他人非法使用或有使用异常的情况的，应及时根据甲方公布的处理方式通知甲方，并有权通知甲方采取措施暂停该帐号的登录和使用。<br>"+
		"2.4 甲方根据乙方的通知采取措施暂停乙方帐号的登录和使用的，甲方应当要求乙方提供并核实与其注册身份信息相一致的个人有效身份信息。<br>"+
		"2.4.1 甲方核实乙方所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停乙方帐号的登录和使用。<br>"+
		"2.4.2 甲方违反2.4.1款项的约定，未及时采取措施暂停乙方帐号的登录和使用，因此而给乙方造成损失的，应当承担其相应的法律责任。<br>"+
		"2.4.3 乙方没有提供其个人有效身份证件或者乙方提供的个人有效身份证件与所注册的身份信息不一致的，甲方有权拒绝乙方上述请求。<br>"+
		"2.5 乙方为了维护其合法权益，向甲方提供与所注册的身份信息相一致的个人有效身份信息时，甲方应当为乙方提供帐号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。<br>"+
		"3.服务的中止与终止<br>"+
		"3.1乙方有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，甲方应当立即终止对乙方提供服务。<br>"+
		"3.2乙方在接受甲方服务时实施不正当行为的，甲方有权终止对乙方提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于甲方事先明确告知的应被终止服务的禁止性行为，否则，甲方不得终止对乙方提供服务。<br>"+
		"3.3乙方提供虚假注册身份信息，或实施违反本协议的行为，甲方有权中止对乙方提供全部或部分服务；甲方采取中止措施应当通知乙方并告知中止期间，中止期间应该是合理的，中止期间届满甲方应当及时恢复对乙方的服务。<br>"+
		"3.4 甲方根据本条约定中止或终止对乙方提供部分或全部服务的，甲方应负举证责任。<br>"+
		"4.用户信息保护<br>"+
		"4.1 甲方要求乙方提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向乙方公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护乙方的个人信息资料的安全。<br>"+
		"4.2未经乙方许可甲方不得向任何第三方提供、公开或共享乙方注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：<br>"+
		"4.2.1 乙方或乙方监护人授权甲方披露的；<br>"+
		"4.2.2 有关法律要求甲方披露的；<br>"+
		"4.2.3 司法机关或行政机关基于法定程序要求甲方提供的；<br>"+
		"4.2.4 甲方为了维护自己合法权益而向乙方提起诉讼或者仲裁时<br>"+
		"4.2.5 应乙方监护人的合法要求而提供乙方个人身份信息时。<br>"+
		"第二部分：产品与服务用户条款<br>"+
		"一、服务内容<br>"+
		"1.37手游产品和服务的具体内容由37手游根据实际情况提供，例如网络游戏、论坛（BBS）、聊天室、电子邮件等。37手游保留随时变更、中断或终止部分或全部产品和服务的权利。<br>"+
		"2. 37手游在提供产品和服务时，可能会对部分用户收取一定的费用。在此情况下，相关页面上会有明确的提示。如用户不同意支付该等费用，可选择不接受相应的产品和服务。<br>"+
		"3. 37手游通过服务器端设备接入互联网为用户提供产品和服务，除此之外与产品和服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。<br>"+
		"4. 用户应使用正版软件接受产品和服务，软件费用由用户自行负担。<br>"+
		"二、帐号名称和密码<br>"+
		"1. 用户阅读并同意本协议，成功完成注册后，即成为37手游的注册用户，取得37手游用户帐号（以下称“37手游帐号”）。37手游帐号名称在注册之后不可变更，而帐号对应的密码则可以通过37手游提供的客户服务进行修改。<br>"+
		"2.用户有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。为保护用户帐号及密码的安全，37手游将采取技术与管理等措施保障用户帐号的安全、有效，但这并不能免除或者减轻用户妥善保管其帐号及密码，并正确、安全地使用其帐号及密码的义务。禁止将37手游帐号或密码销售、转让或出借、共享给他人使用。用户未尽本款义务导致帐号密码遗失、帐号被盗等情形而给用户、37手游及其关联公司和第三方的民事权利造成损害的，应当承担由此产生的法律责任，37手游不承担任何责任。<br>"+
		"3. 用户发现其37手游帐号或密码被他人非法使用或有使用异常情况的，应及时根据37手游不时公布的处理方式通知37手游，并有权请求37手游采取措施暂停该帐号的登录和使用。37手游根据用户身份核对结果，决定是否暂停用户帐号的登录和使用。<br>"+
		"4.不满十八周岁的未成年人申请注册37手游账号之前，均应在父母（监护人）陪同下阅读本协议，并且在获得父母（监护人）对本协议全部条款、未成年人使用产品和服务并向37手游支付费用行为的全面同意后，才可以申请注册37手游账号、使用37手游提供的产品或服务或向37手游支付费用。未成年人冒充成年人名义注册、获取或使用37手游账号、使用产品和服务或向37手游支付费用，而给37手游造成损失（包括但不限于退款、行政处罚、商誉损失等），该未成年人的父母（监护人）应全额赔偿，同时37手游有权立即采取任何合法措施对该等账号及使用该等账号关联的游戏账号进行限制，包括但不限于临时或永久冻结帐号，部分或者全部终止提供37手游各项产品和服务。37手游有权以用户所提交的个人身份信息作为用户是否具有未成年人身份的判断依据。<br>"+
		"<br>"+
		"三、帐号注册信息<br>"+
		"1. 提供注册信息<br>"+
		"  （1）在申请37手游帐号时（或注册后补充信息时），用户应当向37手游提供最新、详细及真实准确的个人注册信息。前述个人注册信息包括：用户的37手游帐号名称、密码及注册37手游帐号（或补充、更新帐号信息时）输入的所有信息。用户在此承诺：用户以其真实身份注册成为37手游的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。<br>"+
		"  （2）所有由用户提供的个人注册信息将可能被37手游用来作为认定37手游帐号的关联性以及辨别用户身份的依据。用户同意应37手游的要求，随时提供该等信息的证明材料，以便37手游核实用户身份。<br>"+
		"  （3）如果用户提供给37手游的信息不准确，或不真实，或不合法有效，或已变更而未及时更新，或有任何误导之嫌，37手游有权中止或终止该用户使用37手游的任何服务，直至用户提供符合要求信息。37手游有权审查用户注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户帐号的安全、有效；用户有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。任何一方未尽上述义务导致帐号密码遗失、帐号被盗等情形而给对方或他人的权利造成损害的，应当承担由此产生的法律责任。<br>"+
		"2. 查询注册信息<br>"+
		"用户有权随时通过登录37手游，在“用户中心”页面访问和查阅用户注册信息及个人信息。<br>"+
		"3. 修改注册信息<br>"+
		"用户可以在任何时间，随时登录37手游的“用户中心“或37手游公布的在该时点可用的其他途径，更新或修改用户申请注册时所提供的信息。37手游应当及时、有效地为其提供该项服务。但是，用户在注册37手游帐号时（或注册后补充信息时）填写的真实姓名、证件号码，以及37手游帐号名称本身，在帐号注册成功后（或补充信息后）如无特殊原因将无法进行修改，请用户慎重填写各类注册信息。<br>"+
		"4. 用户同意，与其37手游帐号相关的一切资料、数据和记录（包括但不限于登录记录、登录后行为记录、点卡信息等）均以37手游系统记录的数据为准。<br>"+
		"5.账号注销。用户应当在最近一次修改37手游账号密码保护措施（包括密码、手机、邮箱等）至少1个月后，向37手游提出账号注销申请。用户提出申请时，应当向37手游提供完整、正确的账号注册信息（包括但不限于个人身份资料信息）、将账号或账号绑定的游戏角色中的虚拟货币消耗完毕、并解绑账号密码保护措施。37手游审核用户符合上述全部条件后按照相关法规为用户注销37手游账号。<br>"+
		"四、信息披露与保护<br>"+
		"1. 本协议第三条所描述的注册信息，以及用户在使用产品和服务时存储在37手游控制范围内的非公开信息（以下合称“用户信息”），应按照本条约定进行披露及保护。<br>"+
		"2. 用户理解并同意，为了向用户提供更好的产品和服务，在用户自愿选择使用37手游的产品和服务的情况下，或者明示同意提供信息的情况下，37手游可能会收集用户信息，并可能对这些信息进行分析和整合。用户理解并同意，在用户使用37手游的产品和服务时，服务器可能会自动记录部分用户信息，这些信息都将成为37手游商业秘密的一部分。<br>"+
		"3. 保护用户（特别是未成年人用户）的隐私是37手游的一项基本原则。37手游一贯积极地采取技术与管理等方面的合理措施保障用户信息的安全、保密。<br>"+
		"4. 除本款所列除外情形之外，37手游保证不对外公开或向第三方披露、提供姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息。除外情形如下：<br>"+
		"  （1）用户（或者用户的监护人）要求或同意37手游披露用户信息；<br>"+
		"  （2）有关法律法规要求37手游披露用户信息；<br>"+
		"  （3）司法机关或行政机关基于法定程序要求37手游披露用户信息；<br>"+
		"  （4）为保护37手游的合法权益（知识产权和其他权益）向用户提起诉讼或者仲裁时需要披露用户信息；<br>"+
		"<br>"+
		"5. 为了向用户正常地提供产品和服务，37手游可能需要向37手游的技术服务商、37手游的关联公司或其他第三方传送部分用户信息，在这些第三方承诺其将承担至少与37手游同等的保密义务的前提下，37手游将向这些第三方传送用户信息，用户对此予以理解和同意。<br>"+
		"6. 在不透露单个用户隐私资料的前提下，37手游有权对整个用户信息数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。<br>"+
		"7. 37手游将采取商业上合理可行的方式保护用户的个人信息的安全。37手游使用通常可以获得的安全技术和程序来保护用户的个人信息不被未经授权地访问、使用或泄漏。<br>"+
		"五、用户的基本权利<br>"+
		"1. 用户可以根据本协议以及37手游不时公布和变更的其他规则使用37手游提供的产品和服务。<br>"+
		"2. 用户可以自愿选择通过手机绑定37手游提供的页面，从而在第一时间获得37手游提供的游戏活动、优惠信息等内容。<br>"+
		"3. 用户有权在使用37手游提供的产品和服务期间监督37手游及37手游的工作人员是否按照37手游所公布的标准向用户提供产品和服务，也可以随时向37手游提出与产品和服务有关的意见和建议。<br>"+
		"4. 如果用户不同意本协议条款，或对37手游后来修改、更新的条款有异议，或对37手游所提供的产品和服务不满意，用户可以随时选择停止使用37手游的产品和服务。如果用户选择停止使用37手游的产品和服务，37手游不再对用户承担任何义务和责任。<br>"+
		"六、用户行为守则<br>"+
		"1. 用户同意按照包括本协议在内的、37手游不时发布或变更的各类规则规范自己的行为，从而接受并使用37手游的产品和服务。用户对登录后其所持帐号产生的行为依法享有权利和承担责任。用户进一步同意，在违反这些规则时，按照本协议第六条第14款、第15款、第十四条及其他相关条款的规定承担违规后果和违约责任。<br>"+
		"2. 用户在使用37手游帐号期间，须遵守与互联网信息发布相关的法律、法规及通常适用的互联网一般道德和礼仪的规范，用户将自行承担用户所发布的信息内容的责任。用户发布的各类信息，不得包含以下内容：<br>"+
		"  （1）违背宪法所确定的基本原则的；<br>"+
		"  （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>"+
		"  （3）损害国家荣誉和利益的；<br>"+
		"  （4）煽动民族仇恨、民族歧视，破坏民族团结的；<br>"+
		"  （5）破坏国家宗教政策，宣扬邪教和封建迷信的；<br>"+
		"  （6）散布谣言，扰乱社会秩序，破坏社会稳定的；<br>"+
		"  （7）传播淫秽、色情、赌博、暴力、凶杀、恐怖信息或者教唆犯罪的；<br>"+
		"  （8）侮辱、诽谤或恶意用言语攻击他人，侵害他人合法权益的；<br>"+
		"  （9）侵犯任何第三者的知识产权或公众／私人权利的；<br>"+
		"  （10）违反人文道德、风俗习惯的；<br>"+
		"  （11）破坏游戏正常秩序的；<br>"+
		"  （12）含有法律、行政法规禁止的其他内容的。<br>"+
		"3. 用户的37手游帐号名称及游戏中的人物、帮派等名称应当遵守合法、健康的原则，不允许使用包括但不限于涉及种族、宗教、政治、国家领导人、淫秽、低俗、诽谤、恐吓、欺诈性的、攻击性的、污辱性的、可能引起误会的、违禁药品等内容的名称。<br>"+
		"4. 用户应当对自己在游戏中的言行负责，尤其不得：<br>"+
		"  （1）通过任何方式、行为散布或传播低俗、不雅信息；<br>"+
		"  （2）通过任何方式、行为冒充平台或游戏系统向其他用户散布或传播虚假信息；<br>"+
		"  （3）通过任何方式或途径引起纷争；<br>"+
		"  （4）通过任何方式、行为散布或传播、使用私服、木马、外挂、病毒及此类信息；<br>"+
		"<br>"+
		"  （5）通过任何方式、行为散布或传播代练的信息；<br>"+
		"  （6）通过任何方式、行为传播或进行除37手游提供的交易途径之外的游戏帐号、虚拟货币、虚拟道具的线下交易；<br>"+
		"  （7）大量传播相同的、类似的短语或无意义的文字，或者任何与37手游平台及其游戏无关的信息；<br>"+
		"  （8）宣扬、鼓动任何游戏虚拟世界之外的暴力行为；<br>"+
		"  （9）泄露其它用户、非用户或37手游平台员工的任何游戏世界和现实世界信息；<br>"+
		"  （10）宣传或发布违法信息、违反社会公德的信息，或不利于精神文明建设的信息，包括但不限于色情、赌博、邪教、恐怖主义等内容；<br>"+
		"  （11）通过任何方式、行为散布任何种类的广告信息及广告链接；<br>"+
		"  （12）发布诋毁或攻击37手游的言论或信息；<br>"+
		"  （13）其他不符合法律法规、社会公德或游戏规则的言论或行为。<br>"+
		"5. 用户不得干扰、阻碍37手游正常地提供产品和服务，尤其不得：<br>"+
		"  （1）攻击、侵入37手游的网站服务器或使网站服务器过载；<br>"+
		"  （2）破解、修改37手游提供给用户下载的客户端程序；<br>"+
		"  （3）攻击、侵入37手游的游戏服务器或游戏服务器端程序或使游戏服务器过载；<br>"+
		"  （4）不合理地干扰或阻碍他人使用37手游所提供的产品和服务；<br>"+
		"  （5）利用程序的漏洞和错误（Bug）破坏游戏的正常进行或传播该漏洞或错误（Bug）；<br>"+
		"  （6）直接或间接利用游戏Bug（包括游戏系统、程序、设定等方面存在的漏洞或不合理的现象）、程序漏洞获利或扰乱游戏秩序，或者利用Bug、漏洞达到个人目的；<br>"+
		"  （7）制作、使用、发布、传播任何形式的妨碍游戏公平性的辅助工具或程序（指用于在游戏中获取优势，但不属于37手游平台或各游戏软件的一部分的任何文件或程序），包括作弊性质的外挂以及相关辅助性质的外挂等（外挂指独立于游戏软件之外的，能够影响游戏操作、数值、平衡性的所有程序，包括但不限于自动打怪、自动练级、自动吃药、自动完成任务、加速性质或超出游戏设定范围等操作）；<br>"+
		"  （8）不得修改客户端程序，使之改变或者新增或者减少37手游所预先设定的功能，或者导致客户端向服务器发送的数据出现异常的一切行为。<br>"+
		"  （9）不得通过反向编译等手段，获取客户端程序源代码。<br>"+
		"6. 用户不得扰乱游戏秩序，尤其不得：<br>"+
		"  （1）长时间停留在特殊地点或敏感地区（包括但不限于活动报名人、“移民使者”、传送人、传送点等处），干扰其他用户游戏；<br>"+
		"  （2）进行恶意PK、敲诈、勒索等行为；<br>"+
		"  （3）扬言进行或煽动其他用户或非用户参与非正常游戏内容的行为（包括但不限于游行、聚众闹事等）；<br>"+
		"  （4）以相似昵称的人物冒充他人好友、冒充NPC或官方角色等方式在游戏内外进行欺诈。<br>"+
		"7. 用户可以与游戏管理员（以下称为“GM”）进行交流，但在与GM交流时，不得做出以下行为：<br>"+
		"  （1）冒充系统或GM；<br>"+
		"  （2）欺骗或试图欺骗GM，包括但不限于误导GM、拒绝提供信息、提供虚假信息以及任何试图“诈骗”GM的行为；<br>"+
		"  （3）违反或忽视GM做出的提示。在游戏中，为了确保大多数用户的共同利益，维护正常的游戏秩序，GM可能会提示用户执行某些操作或停止执行某些操作，用户不得忽视或阻挠该项工作的进行；<br>"+
		"  （4）干扰GM工作。干扰GM工作包括但不限于：向GM索取任何游戏虚拟物品（包括但不限于虚拟货币、游戏道具等），频繁呼叫GM或发送无实质性内容的请求，反复向GM发送已解答或解决问题的帮助请求；<br>"+
		"  （5）辱骂、威胁或恶意攻击GM。<br>"+
		"<br>"+
		"8. 用户必须保管好自己的帐号和密码，由于用户的原因导致帐号和密码泄密而造成的后果均将由用户自行承担。<br>"+
		"9. 用户仅能以个人身份使用37手游所提供的产品和服务，用户不能利用37手游所提供的产品和服务从事商业目的的活动，也不能利用37手游的产品和服务进行销售或其他商业目的的活动。<br>"+
		"10. 除非获得37手游的书面许可，否则，用户不得利用37手游的任何产品和服务及其任何内容牟取商业利益，包括但不限于充当游戏道具交易中介收取中介费，以营利为目的销售游戏道具等。<br>"+
		"11. 用户不得利用37手游提供的产品和服务从事以下活动：<br>"+
		"  （1）未经允许，进入计算机信息网络系统或者使用计算机信息网络系统资源的；<br>"+
		"  （2）未经允许，对计算机信息网络功能进行删除、修改或者增加的；<br>"+
		"  （3）未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；<br>"+
		"  （4）故意制作、传播计算机病毒等破坏性程序的；<br>"+
		"  （5）其他危害计算机信息网络安全的行为。<br>"+
		"12. 用户同意以游戏程序中的监测数据作为判断用户是否有通过使用外挂程序等方法进行的游戏作弊行为的依据。<br>"+
		"13. 如果37手游发现用户行为或者数据异常，可以观察及记录该用户行为，并以观察和记录的结果作为判断用户是否实施了违反本协议用户行为守则的依据。<br>"+
		"37手游积极保护用户的帐号、虚拟物品及虚拟货币的安全，为此，37手游对盗号及盗号相关行为展开严厉的打击。37手游发现或者怀疑存在包括但不限于以下的盗号及盗号相关行为时，有权视情况按照本协议第六条第14款、第15款、第16款、第十四条及其他相关条款的规定处理，同时，37手游保留进一步追诉的权利：<br>"+
		"  （1）盗取帐号；<br>"+
		"  （2）盗取虚拟物品；<br>"+
		"  （3）盗取虚拟货币；<br>"+
		"  （4）盗取帐号或/及密码；<br>"+
		"  （5）异常IP下的物品转移；<br>"+
		"  （6）其他盗号及盗号相关行为。<br>"+
		"为了维护游戏的公平与秩序，即使用户没有主动的参与盗号，但是用户的物品来源于盗号或者盗号相关行为的，37手游也有权自行判断回收、冻结涉及盗号的物品及帐号。用户应该配合37手游对盗号及盗号相关行为的调查。用户应该自觉维护游戏的秩序，37手游发现或者怀疑存在虚假的盗号投诉时，有权视情况按照本协议第六条第14款、第15款、第16款、第十四条及其他相关条款的规定处理。<br>"+
		"14. 若用户实施违反本条所述用户行为守则的行为，37手游有权视行为严重程度，向该用户施加以下一项或若干项违规后果，该用户应承担该等不利后果：<br>"+
		"  （1）警告：警告是针对轻微违反游戏政策而做出的教育导向，它是用于正常管理游戏运行的一种方式。<br>"+
		"  （2）禁言：关闭违规用户的部分或全部聊天频道，强制暂停违规用户角色的线上对话功能，使该角色无法与其他用户对话，直到此次处罚到期或是取消。<br>"+
		"  （3）强制离线：强制让违规用户离开当前游戏，结束该用户当前游戏程序的执行。<br>"+
		"  （4）封停帐号：暂停或永久终止违规用户使用37手游帐号登录某款游戏的权利。<br>"+
		"  （5）暂时隔离：将违规用户的游戏角色转移至特殊游戏场景，限制其局部游戏操作，直到此次处罚到期或是取消。<br>"+
		"  （6）删除档案：将违规用户在某个游戏世界中的人物档案删除，不让该人物再出现在游戏世界。<br>"+
		"  （7）删除帐号：永久终止违规用户通过37手游帐号登录37手游平台的权利，包括但不限于用户注册信息、角色信息、等级物品、游戏货币等游戏数据库中的全部数据都将被永久封禁。<br>"+
		"<br>"+
		"  （8）收回游戏虚拟物品：对于违规用户因欺诈或其他违规行为而获取的游戏虚拟物品，包括但不限于游戏虚拟货币、虚拟物品，进行收回。<br>"+
		"  （9）修改名称：强制修改违规用户论坛昵称、游戏人物或帮派等的名称。<br>"+
		"  （10）解散组织：解散违规用户成立的帮派、公会等组织。<br>"+
		"  （11）倒扣数值：针对游戏角色游戏数值进行扣除，包括但不限于游戏角色等级、金钱、经验等。<br>"+
		"  （12）封禁IP：暂时或永久禁止违规用户在某一异常IP登录某款游戏的某个服务器。<br>"+
		"  （13）承担法律责任：违规用户的不当行为对他人或者37手游造成损害，或者与现行法律规定相违背的，违规用户应依法承担相应的民事、行政和／或刑事责任，例如，用户在进行游戏过程中侵犯第三方知识产权或其他权利而导致被权利人索赔的，由用户直接承担责任。<br>"+
		"15．为了保障全体遵守游戏规则的玩家利益，维护37手游提供的产品和服务公平和秩序，同时为了保护用户的帐号信息安全，对于用户在任何非37手游事先认可的充值平台充值或进行其他交易的相关行为，37手游将予以严厉打击和处罚。<br>"+
		"一经查证属实，37手游有权视具体情况采取各种处理措施，包括但不限于如下一项或几项：倒扣数值：针对游戏角色游戏数值进行扣除，包括但不限于游戏角色等级、金钱、经验等。<br>"+
		"1、警告、冻结或倒扣数值（数值包括但不限于游戏角色等级、虚拟货币、道具、装备、经验值等）<br>"+
		"2、暂时禁止登录、永久禁止登录等处理;<br>"+
		"3、因非法充值导致充值未到帐、虚拟货币、道具未发放的问题，37手游不予补偿。<br>"+
		"16．若用户实施违反本条所述用户行为守则的行为，37手游还有权要求违规用户向37手游承担违约责任，包括但不限于恢复原状，消除影响，对给37手游造成的直接及间接损失或额外的成本支出进行赔偿，以及在37手游首先承担了因违规用户行为导致的行政处罚或侵权损害赔偿责任后，由37手游向违规用户追偿。<br>"+
		"七、游戏管理<br>"+
		"1. 游戏管理员<br>"+
		"  （1）游戏管理员即GM（Game Master），指维护和管理游戏虚拟世界秩序的37手游在线工作人员。<br>"+
		"  （2）GM不会干预游戏的正常秩序，不会以任何方式索要用户的个人资料和密码，不负责解决用户之间的私人纠纷或回答游戏的攻略、诀窍等问题。<br>"+
		"  （3）用户在游戏中应当尊重、理解并配合GM的工作，如有任何意见，应通过专用信箱向客户服务中心申诉和举报。<br>"+
		"2. 游戏信息转移。37手游有权根据产品和服务的提供状况，安排拆分或合并游戏服务器。在对用户游戏权益没有实质性损害的情况下，37手游有权将用户在游戏中的人物信息、角色档案转移到其它游戏服务器。<br>"+
		"3. 家长监护系统。37手游遵从国家政策，针对某些特定的游戏开设“未成年人家长监护系统”。在使用产品和服务时，父母（监护人）应以监护人身份判断产品和服务是否适合未成年人。如果用户未满18周岁（或37手游无法识别用户的年龄），则用户将受到“未成年人家长监护系统”的约束。37手游将有权根据有关规则以及家长的要求，对用户创建或使用37手游帐号关联的游戏帐号进行限制，包括但不限于临时或永久冻结帐号，部分或者全部终止提供37手游各项产品和服务。<br>"+
		"4. 防沉迷系统<br>"+
		"  （1）如果用户未满法定年龄（或37手游无法识别用户的年龄），则用户在游戏内的活动将受到“游戏防沉迷系统”监测；如果用户拥有一个以上37手游帐号，则该“游戏防沉迷系统”将同时适用于该用户的所有37手游帐号；<br>"+
		"  （2）“游戏防沉迷系统”通过按照连续游戏时间来逐级扣减游戏内收益的方式，对用户长时间连续游戏的行为进行规制；<br>"+
		"  （3）用户需提供真实完整的信息以便37手游识别用户的身份并向有关部门提交实名认证信息，如因提供的资料不真实而产生的后果由用户自行承担。<br>"+
		"5. 在现有的技术条件下，37手游将尽合理的商业努力并根据有关监管部门的要求开发并维护“未成年人家长监护系统”、“游戏防沉迷系统”与实名认证系统，按“现状”提供给用户使用。由于技术不可避免的局限性以及系统运作各环节受外界的影响，37手游不保证各系统不存在任何漏洞，不保证各系统能随时正常运作，亦不保证监护或认证效果完全正确真实或满足用户的需求。37手游不提供任何适用法律明确规定之外的明示或默示担保，不对此承担任何责任。<br>"+
		"八、资费政策<br>"+
		"1. 37手游产品和服务的收费信息以及有关的资费标准、收费方式、购买方式及其他有关资费政策的信息，在37手游相关平台上作出说明。<br>"+
		"2. 37手游有权决定37手游所提供的产品和服务的资费标准和收费方式，37手游可能会就不同的产品和服务制定不同的资费标准和收费方式，也可能按照37手游所提供的产品和服务的不同阶段确定不同的资费标准和收费方式。另外，37手游也可能不时地修改37手游的资费政策。37手游会将有关产品和服务的收费信息以及与该产品和服务有关的资费标准、收费方式、购买方式或其他有关资费政策的信息放置在该产品和服务相关网页的显著位置。<br>"+
		"3. 对于37手游的收费产品和服务，用户应该按照37手游确定的资费政策购买37手游的产品和服务。如果用户未按37手游确定的资费政策购买37手游的产品和服务，37手游可以立即停止向用户提供该产品和服务。<br>"+
		"4. 除非法律另有明文规定，否则用户不得要求37手游返还用户已经支付予37手游的任何资费（以下简称“退款”），无论该等资费是否已被消费。37手游有权决定是否、何时、以何种方式向用户退款。37手游同意退款的，用户应补偿支付时使用信用卡、手机等支付渠道产生的费用，37手游有权在返还用户的资费中直接扣收。37手游在产品和服务提供过程中赠送的充值金额、虚拟货币、虚拟道具等，不予退款或变现。<br>"+
		"九、虚拟物品<br>"+
		"1. 37手游提供的产品和服务（包括但不限于游戏平台、游戏、论坛）中的各种虚拟物品，不限于金币、银两、道具、装备等，其所有权归37手游或其合作方所有。用户只能在合乎法律和游戏规则的情况下拥有对虚拟物品的使用权。用户一旦购买了虚拟道具的使用权，将视为已经进入消费过程，不得以任何理由要求退还该虚拟道具。<br>"+
		"2. 除服务器大规模断线外，由于地方网络问题、个人操作问题等非可归责于37手游的原因造成的角色被删或回档、虚拟物品或金钱的损失，37手游无需向用户承担任何责任。<br>"+
		"3. 鉴于网上交易的复杂性，除37手游指定的官方交易平台外，37手游禁止用户进行游戏虚拟物品买卖线下交易及线下交易相关行为。37手游反对用户自行进行虚拟物品买卖线下交易及线下交易相关行为（包括但不限于参与线下交易、协助线下交易者操作及转移游戏虚拟物品等一系列行为），并且不保护线下交易产生的任何交易结果，用户之间进行线下交易行为发生的任何问题、纠纷，包括但不限于被虚假交易信息诈骗金钱或者游戏虚拟物品的，均与37手游无关，用户将自行负责，37手游不负责赔偿或追回因受骗造成的损失。<br>"+
		"4. 除37手游指定的官方交易平台外，37手游不认可用户线下交易所产生的交易结果，用户通过线下交易所获得的游戏虚拟物品将被认定为来源不符合游戏规则。37手游有权按照本协议第六条的约定，对线下交易及线下交易相关行为涉及的游戏虚拟物品、游戏角色与37手游帐号采取相应的措施。<br>"+
		"5. 为了创造一个和谐的游戏环境，维护游戏内的数值平衡，对存在下列情况的交易行为，即使发生在游戏内或者37手游指定的官方交易平台（如有），依然将被认定为不符合游戏规则。37手游有权按照本协议第六条第14款、第15款、第16款的约定对涉及的游戏虚拟物品、游戏角色与37手游帐号采取相应的措施。<br>"+
		"  （1）根据37手游的后台数据判断，同一用户注册多个游戏账号进行游戏，且将来自不同账号的可交易游戏虚拟物品集中到一个或几个游戏账号或游戏角色；<br>"+
		"<br>"+
		"  （2）从事游戏内单一活动或玩法，将全部或大部分获得的可交易虚拟物品进行交易；<br>"+
		"  （3）将游戏内获得的可交易虚拟物品全部或大部分进行交易，而游戏角色的等级、技能、修炼、装备、宠物等指标中一个或者数个的数值水平和类似游戏时长的其他正常玩家差异较大；<br>"+
		"  （4）根据37手游的后台数据判断，一切其他不以正常娱乐为目的的异常交易行为。<br>"+
		"十、服务方式、内容的变动与个人资料转移<br>"+
		"1. 37手游将尽力持续地向用户提供产品和服务，但是37手游，在适用法律许可的最大范围内，并不排除37手游可能会停止提供任何产品和服务的可能性，也不排除任何改变游戏服务或其他网络服务的服务方式、服务内容的可能性。<br>"+
		"2. 为增加并丰富37手游之游戏及其他网络服务的内容，游戏和游戏平台在运行时可能不定期更新并调整其包含的功能。在游戏和游戏平台更新后，一切游戏和游戏平台内的操作、内容、设定，将以游戏和游戏平台中的公告内容为准。<br>"+
		"3. 如果37手游停止提供某一项产品和服务，或改变某一项产品和服务的方式或内容，37手游将会事先通知用户，并尽力寻找适当的服务提供者以接替37手游继续提供产品和服务。<br>"+
		"4. 在本条第3款所述情况下且在适用法律许可的最大范围内，37手游可能会将用户的个人资料（包括有关的帐号和密码信息及个人资料）转移给该继续提供服务的一方。用户在此同意37手游有权做此转移和提供，并且同意在37手游完成转移和提供之后，37手游将不再对用户原有资料承担任何义务和责任。但是，37手游并不保证37手游届时一定能够找到适当的服务提供者或服务方式以代替37手游继续提供产品和服务，也不保证37手游找到的服务提供者后续所提供的产品和服务或者改变的游戏方式能够满足用户的要求。<br>"+
		"十一、服务中断或终止<br>"+
		"1. 如发生下列任何一种情形，37手游有权随时中断或终止向用户提供本协议项下的游戏服务和其他网络服务，对于因而产生的不便和损失，37手游不承担任何责任：<br>"+
		"  （1）用户提供的个人资料不真实；<br>"+
		"  （2）用户违反本协议中规定的用户行为准则。<br>"+
		"2. 在下列情况下，37手游有权注销用户创造的角色，并删除该角色的所有记录：<br>"+
		"  （1）用户注册的游戏角色未达到一定游戏要求，并且在该角色所关联的游戏分区中可用游戏点数或游戏时间为零的情况下，连续一定时间未通过该角色登录过该游戏；<br>"+
		"  （2）用户自行删除的角色，自删除之日起一定时间内没有恢复的；<br>"+
		"  （3）用户在注册帐号第一个月时间内或连续6个月时间内，没有使用过此帐号的（包括使用此帐号登录游戏、登录网站或充值）。<br>"+
		"3. 关于37手游所提供的不同产品和服务注销角色的具体条件，请参见各个产品和服务的具体规定，或相关产品和服务的上的具体规定。<br>"+
		"4. 为了保障游戏及游戏平台网站和服务器的正常运行，37手游需要定期或不定期对游戏及游戏平台网站和服务器进行停机维护，或针对突发事件进行紧急停机维护。因上述情况而造成的正常服务中断、中止，用户予以理解并同意，37手游则有义务尽力避免服务中断并将中断时间限制在最短时间内。<br>"+
		"5. 在适用法律许可的最大范围内， 发生下列情形之一时，为了游戏网站和服务器的持续稳定运行，37手游有权不经提前通知终止或中断游戏服务器所提供之全部或部分服务，对因此而产生的不便或损失，37手游对用户或第三人均不承担任何责任：<br>"+
		"  （1）定期检查或施工，更新软硬件等；<br>"+
		"  （2）服务器遭受损害，无法正常运作；<br>"+
		"  （3）突发性的软硬件设备与电子通信设备故障；<br>"+
		"  （4）网络提供商线路或其他故障；<br>"+
		"  （5）在紧急情况之下依照法律的规定或为用户及第三者之人身安全；<br>"+
		"  （6）第三方原因或其他不可抗力的情形。<br>"+
		"6.在适用法律许可的最大范围内，不管产品和服务由于任何原因终止，用户应采取相应的措施自行处理游戏及游戏平台上的虚拟物品。用户不得因终止服务而要求37手游承担除用户已经购买但尚未使用的游戏虚拟货币以外任何形式的赔偿或补偿责任，包括但不限于因不再能继续使用游戏帐号、游戏内虚拟物品等而要求的赔偿。<br>"+
		"十二、有限保证及免责声明<br>"+
		"1. 对于37手游的产品和服务，37手游仅作本条所述有限保证，该有限保证取代任何文档、包装、或其他资料中的任何其他明示或默示的保证（若有）。<br>"+
		"2. 37手游仅以“现有状况且包含所有错误”的形式提供相关的产品、软件或程序及任何支持服务，并仅保证：<br>"+
		"  （1）37手游所提供的产品和服务能基本符合37手游正式公布的要求；<br>"+
		"  （2）37手游所提供的相关产品和服务基本与37手游正式公布的服务承诺相符；<br>"+
		"  （3）37手游仅在商业上允许的合理范围内尽力解决37手游在提供产品和服务过程中所遇到的任何问题。<br>"+
		"3. 在适用法律允许的最大范围内，37手游明确表示不提供任何其他类型的保证，不论是明示的或默示的，包括但不限于适销性、适用性、可靠性、准确性、完整性、无病毒以及无错误的任何默示保证和责任。<br>"+
		"4. 在适用法律允许的最大范围内，37手游并不担保37手游所提供的产品和服务一定能满足用户的要求，也不担保提供的产品和服务不会被中断，并且不担保产品和服务的及时性、安全性及不受干扰，亦不担保无错误发生，以及信息能准确、及时、顺利地传送。<br>"+
		"5. 用户理解并同意：通过37手游的产品和服务取得的任何信息、资料，是否信任及使用，完全取决于用户自己，并由用户承担由该等信任及使用带来的系统受损、资料丢失以及其它任何风险。37手游对在产品和服务中提及的任何商品购物服务、交易进程、招聘信息，尤其是第三方发出的信息，都不作担保。<br>"+
		"6. 如有系统故障、安全漏洞（Security Vulnerability）、程序缺陷（Bug）、程序出错等问题，37手游有权把游戏的资料还原到一定日期，以维护游戏之平衡。用户不得因此要求补偿或赔偿。<br>"+
		"7. 在适用法律允许的最大范围内，37手游对用户因使用37手游的产品和服务引起的任何间接、偶然、意外、特殊或继起的损害（包括但不限于人身伤害、隐私泄漏、因未能履行包括诚信或合理谨慎在内的任何责任、因过失和因任何其他金钱上的损失或其他损失而造成的损害赔偿）不负责任，这些损害可能来自：用户或他人不正当使用产品和服务、在网上购买商品或类似服务、在网上进行交易、非法使用服务或用户传送的信息有所变动。<br>"+
		"8. 37手游对本协议项下涉及的境内外基础电信运营商的固定及移动通信网络的故障，各类技术缺陷、覆盖范围限制、不可抗力、计算机病毒、黑客攻击、用户所在位置、用户关机、合作方因素、他人故意或过失行为或其他非37手游技术能力范围内的原因造成的服务中断、用户发送的数据或短信息的内容丢失、出现乱码、错误接收、无法接收、迟延接收等等，均不承担责任。<br>"+
		"9. 由于用户个人失误、错误或不当操作导致的任何后果，由用户自行承担责任，37手游不予任何赔偿或补偿。<br>"+
		"十三、知识产权及信息所有权<br>"+
		"1. 37手游通过产品和服务提供的游戏软件（包括具备客户端软件及不具备客户端软件的游戏）、其他软件、信息、作品及资料，其著作权、专利权、商标专用权及其它知识产权，均为37手游或其相应权利人所有。除非事先经 37手游书面合法授权，或法律另有明文规定，任何人不得擅自以任何形式使用、复制、传播、伪造、模仿、修改、改编、翻译、汇编、出版、进行反编译或反汇编等反向工程，否则37手游有权立即终止向用户提供产品和服务，并依法追究其知识产权侵权责任，要求用户赔偿37手游的一切损失。<br>"+
		"2. 用户在使用产品和服务过程中产生并储存于37手游服务器中的任何数据信息（包括但不限于帐号数据信息、角色数据信息、等级物品数据信息等，但用户的姓名、身份证号、电话号码等个人身份数据信息除外）属于游戏或游戏平台的一部分，由37手游所有并进行管理，用户有权在遵守游戏规则的前提下通过37手游指定的途径对属于自身帐号的数据信息进行修改、转移、处分。<br>"+
		"<br>"+
		"3. 为保证准确及避免争议，本协议涉及的有关技术方面的数据、信息，用户同意以37手游服务器所储存的数据作为判断标准。37手游保证该数据的真实性。<br>"+
		"十四、损害赔偿<br>"+
		"用户若违反本协议或可适用的法律法规，导致37手游的母公司、子公司、其他关联公司、附属机构及其人员，受雇人、代理人及其他一切相关履行辅助人员因此受到损害或支出任何衍生费用（包括但不限于支付上述法律主体须就用户的违约或违法行为所进行的一切辩护或索偿诉讼及相关和解之法律费用），用户应承担补偿相关费用及支付损害赔偿的责任。<br>"+
		"十五、协议的终止<br>"+
		"用户应遵守本协议及有关法律法规的规定。37手游有权判断用户是否违反本协议。若37手游认定用户违反本协议或任何法律法规，37手游有权在无需向用户进行事先通知的情况之下，立即暂停或终止用户的帐号并删除用户帐号中的所有相关资料、档案及任何记录，以及限制、停止或取消用户的使用资格。<br>"+
		"十六、修改和解释权<br>"+
		"1. 为了向用户及时、更好地提供产品和服务，基于对37手游本身、用户及市场状况不断变化的考虑，在法律最大适用范围内，37手游保留随时修改、新增、删除本协议条款的权利。修改、新增、删除本协议条款时，37手游将于公告修改、新增、删除的事实，而不另行对用户进行个别通知。若用户不同意37手游所修改、新增、删除的内容，可立即停止使用37手游所提供的服务。若用户继续使用37手游提供的服务，则视同用户同意并接受本协议条款修改、新增、删除后的内容，且不得因此而要求任何补偿或赔偿。<br>"+
		"2. 未经37手游事先书面同意，用户不得转让其在本协议项下的权利或义务。37手游有权通过37手游的子公司或其他关联公司行使其在本协议项下的权利或履行本协议项下的义务。<br>"+
		"3. 37手游保留对本协议条款、产品和服务以及37手游所提供的产品和服务的相关的最终解释权。<br>"+
		"十七、广告与外部链接<br>"+
		"1. 37手游的产品和服务中可能包含他人的商业广告或其它活动促销的广告。这些内容由广告商或商品／服务提供者提供并承担相应责任，37手游仅提供刊登内容的媒介。用户通过37手游或37手游所链接的网站所购买的该等服务或商品，其交易行为仅存于用户与该等商品或服务的提供者之间，与37手游无关，37手游不就用户与该商品或服务的提供者之间所产生的交易行为承担任何法律责任。<br>"+
		"2.用户可能在使用37手游的产品和服务过程中链接到第三方的站点。第三方的站点不由37手游控制，并且37手游也不对任何第三方站点的内容、第三方站点包含的任何链接、第三方站点的任何更改或更新负责。37手游仅为了提供便利的目的而向用户提供这些到第三方站点的链接，37手游所提供的这些链接并不意味着37手游认可该第三方站点，不意味着37手游担保其真实性、完整性、实时性或可信度。这些个人、公司或组织与37手游间亦不存在任何雇用、委任、代理、合伙或其它类似的关系。用户需要检查并遵守该第三方站点的相关规定。<br>"+
		"3.用户理解并同意37手游通过电子邮件、短信或者其他方式向用户发送产品和服务或其他相关商业信息。<br>"+
		"十八、其他约定<br>"+
		"1. 本协议的订立、效力、解释、履行及争议解决适用中华人民共和国法律。如果本协议的任何内容与法律相抵触，应以法律规定为准。<br>"+
		"2. 本协议的任何条款部分或全部无效的，不影响其它条款的效力。<br>"+
		"3. 如双方就本协议内容或其执行发生任何纠纷，包括但不限于37手游依据本协议对用户进行处罚所产生的合同纠纷或财产性权益侵权纠纷，双方应尽量友好协商解决；协商不成时，用户和37手游一致同意将纠纷交由本协议签订地有管辖权的人民法院管辖。<br>"+
		"4. 本协议于用户完成37手游帐号注册之日在中国广州市天河区签订并生效。即便用户没有完成37手游帐号注册，但通过其他任何方式获得和使用 37手游所提供的产品和服务的，本协议视为在该用户获得及使用产品和服务之日签订并生效。<br>"+
		"37手游隐私政策<br>"+
		"前言<br>"+
		"本政策是由三七互娱旗下·广州三七网络科技有限公司（以下称为“37手游”）就37手游在其和/或其关联公司的移动手机游戏平台上所提供的产品和服务（包括37手游的网站以及37手游现在正在提供和将来可能向用户提供的游戏服务和其他网络服务，以下统称为“产品和服务”）所制定的。<br>"+
		"最近更新日期：2018年8月15日<br>"+
		"本政策将帮助您了解以下内容：<br>"+
		"一、我们如何收集和使用您的个人信息<br>"+
		"二、我们如何使用 Cookie 和同类技术<br>"+
		"三、我们如何共享、转让、公开披露您的个人信息<br>"+
		"四、我们如何保护您的个人信息<br>"+
		"五、您的权利<br>"+
		"六、我们如何处理未成年人的个人信息<br>"+
		"七、您的个人信息如何在全球范围转移<br>"+
		"八、本政策可能变更<br>"+
		"九、如何联系我们<br>"+
		"37手游深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。<br>"+
		"请注意，37手游可能适时对本协议进行修改与更新，您同意将随时留意查看本协议的最新版本。请在使用我们的产品（或服务）前，仔细阅读并了解本《隐私政策》，以确保对本《隐私政策》的最新版本始终保持了解。<br>"+
		"一、我们如何收集和使用您的个人信息<br>"+
		"个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。37手游基于本政策所述的以下目的，收集和使用您的个人信息。如需超过以下目的使用您的信息，37手游将另行征得您的同意：<br>"+
		"（一）为您提供37手游在其和/或其关联公司的手机游戏平台上所提供的产品和服务<br>"+
		"1、注册成为用户。<br>"+
		"为完成创建账号所填写的信息。例如：您的手机号码、身份证、创建的用户名。37手游为你提供一键注册或快速注册账户的功能，你选择在使用此功能时，你的移动设备将向37手游的游戏服务器。发送一条请求短信，并依当地电信运营商标准收取基本短信息通信费。<br>"+
		"2、为您提供您可能感兴趣的广告、资讯及产品信息<br>"+
		"为向您提供与您更加相关的广告以替代普遍投放的广告 ，我们可能会收集和使用您在37手游的操作记录和部分必要的设备信息（例如：您的唯一设备识别码），以及您在使用我们服务时浏览或要求提供的其他信息和内容详情、游戏账号交易信息，提取您的浏览、行为习惯等特征，并基于特征标签通过短信或其他方式向与您具备相同或相似标签的用户群体发送营销信息，提供或推广我们的产品及服务。<br>"+
		"为了更好的帮助你获取游戏活动等相关信息，在你安装了37手游相关游戏产品，该游戏产品启动自动推送信息权限，游戏服务器将不定期向你推送信息，通常每日不会超过三条、每月不会超过30条，且内容均是该游戏相关信息<br>"+
		"3、支付结算。<br>"+
		"为便于您在支付相关订单时，综合判断您账户及交易风险、进行身份验证、检测及防范安全事件，我们可能会在交易过程中收集您的虚拟财产相关信息（仅限交易记录、虚拟货币、虚拟交易、游戏类兑换码等）。<br>"+
		"4、安全保障<br>"+
		"<br>"+
		"我们会将您的部分个人常用设备信息用于身份验证、安全防范、诈骗监测、存档备份等用途。例如，唯一设备码用于安全防范、用户标识，个人上网记录用于安全防范、诈骗监测。<br>"+
		"当您使用我们的客户服务时，我们可能会保存您的通信/通话记录和内容或您留下的联系方式等信息，以便与您联系或帮助您解决问题，或记录相关问题的处理方案及结果。<br>"+
		"5、产品开发和服务优化。<br>"+
		"例如，为修复系统故障并优化我们的服务，我们可能需记录和分析系统故障时产生的信息。<br>"+
		"为了用户之间交流方便，37手游部分游戏产品自带语音聊天功能，若你安装该类型游戏产品后，将启动你的移动设备的录音权限，以实现语言聊天的功能，该功能仅用于用户之间互动，37手游不保全任何语言聊天记录。<br>"+
		"二、我们如何使用 Cookie 和同类技术<br>"+
		"（一）Cookie<br>"+
		"为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。 Cookie有助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供有关您的喜好或其他信助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供有关您的喜好或其他信息了解您使用服务进行什么活动、或哪些服务或服务最受欢迎；及有助于我们根据您的信息，向您提供与您相关的广告而非进行普遍的广告投放。<br>"+
		"我们不会将 Cookie 用于本政策所述目的之外的任何用途。您可根据自己的偏好通过浏览器或其他方式设置管理或删除 Cookie。<br>"+
		"（二）Do Not Track（请勿追踪）<br>"+
		"很多网络浏览器均设有 Do Not Track 功能，该功能可向网站发布 Do Not Track 请求。目前，主要互联网标准组织尚未设立相关政策来规定网站应如何应对此类请求。但如果您的浏览器启用了 Do Not Track，那么我们的所有网站都会尊重您的选择。但请您注意，可能因此影响您使用37手游提供产品及服务的体验。<br>"+
		"三、我们如何共享、转让、公开披露您的个人信息<br>"+
		"（一）共享<br>"+
		"您理解并同意，经过去标识化处理后的信息将无法识别您的身份，在此情况下我们将已经去标识化的信息用于本隐私政策之目的，并在确保数据接收方无法重新识别个人信息主体的前提下，通过共享、转让的方式提供给第三方。我们可能在以下情况下与37手游以外的任何公司、组织和个人分享您的个人信息：<br>"+
		"1、在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。<br>"+
		"2、我们可能会根据法律法规规定，或按政府主管部门的强制性要求，对外共享您的个人信息。<br>"+
		"3、与我们的关联公司共享：您的个人信息可能会与37手游的关联公司共享。我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。关联公司如要改变个人信息的处理目的，将再次征求您的授权同意。<br>"+
		"4、与授权合作伙伴共享：仅为实现本政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。<br>"+
		"（二）转让<br>"+
		"我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：<br>"+
		"1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；<br>"+
		"2、在涉及合并、收购或破产清算时，如涉及个人信息转让，我们将通过推送通知、公告或其他方式另行告知您相关情形，按照法律法规所要求的标准继续保护或要求新的管理者按照本政策继续保护您的个人信息。<br>"+
		"3、部分场景下，您可以使用相同的账号及密码在其他第三方平台登录、使用，以获得更好的游戏体验。为提供此项服务，我们可能需要向第三方传送您的个人信息及游戏信息，我们将按照法律法规所要求的标准继续保护或要求新的管理者按照本政策继续保护您的个人信息。<br>"+
		"（三）公开披露<br>"+
		"我们仅会在以下情况下，公开披露您的个人信息：<br>"+
		"1、获得您明确同意后；<br>"+
		"2、与国家安全、国防安全有关的；<br>"+
		"3、与公共安全、公共卫生、重大公共利益有关的；<br>"+
		"4、与犯罪侦查、起诉、审判和判决执行等有关的；<br>"+
		"5、出于维护信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；<br>"+
		"6、所收集的信息是您自行向社会公众公开的；<br>"+
		"7、从合法公开披露的信息中收集信息的，如合法的新闻报道、政府信息公开等渠道；<br>"+
		"8、根据您的要求签订合同所必需的；<br>"+
		"9、用于维护37手游服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；<br>"+
		"10、为合法的新闻报道所必需的；<br>"+
		"11、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的信息进行去标识化处理的；<br>"+
		"12、法律法规规定的其他情形。<br>"+
		"四、我们如何保护您的个人信息<br>"+
		"（一）我们会采取一切合理可行的措施，保护您的个人信息。例如，我们使用SSL/hash对您的数据进行加密保护；如我们与第三方分享您的信息，我们将会采用加密、脱敏及其他去标识化处理等手段保障您的信息安全。<br>"+
		"（二）我们为保护信息采取的其他安全措施<br>"+
		"我们通过建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范信息的存储和使用。<br>"+
		"我们通过信息接触者保密协议、监控和审计机制来对数据进行全面安全控制。<br>"+
		"（三）我们仅允许有必要知晓这些信息的37手游工作人员、合作伙伴访问您的信息，同时要求可能接触到您的信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与37手游的合作关系。<br>"+
		"（四）我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们只会在必要的合理期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。<br>"+
		"（五）互联网并非绝对安全的环境，而且电子邮件、即时通讯、及与其他37手游用户的交流方式并未加密，我们强烈建议您不要通过此类方式发送个人信息。请使用复杂密码，协助我们保证您的账号安全。<br>"+
		"（六）互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。<br>"+
		"（七）在不幸发生个人信息安全事件后，我们将采取必要措施以阻止安全事件扩大，并以推送通知、公告等形式告知您。<br>"+
		"五、您的权利<br>"+
		"按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：<br>"+
		"（一）访问您的个人信息<br>"+
		"您有权访问您的个人信息，法律法规规定的例外情况除外。<br>"+
		"（二）控制您的个人信息<br>"+
		"您可随时查询并管理您账户下的个人信息，帐号名称是您重要的网络身份标识，出于安全性和身份识别的考虑，在注册之后无法变更。<br>"+
		"（三）删除您的个人信息<br>"+
		"<br>"+
		"我们将按照本政策所述，仅为实现我们产品或服务的功能，收集、使用您的信息。如您发现我们违反法律、行政法规的规定或者双方的约定收集、使用您的个人信息，您可以要求我们删除。如您发现我们收集、存储的您的个人信息有错误的，您也可以要求我们更正。请通过本政策列明的联系方式与我们联系。<br>"+
		"（四）改变您授权同意的范围<br>"+
		"每个业务功能需要一些基本的个人信息才能得以完成（见本政策第一款）。您可以在使用我们服务的过程中，访问、修改和删除您提供的注册信息和其他个人信息。您访问、修改和删除个人信息的范围和方式将取决于您使用的具体服务。例如，若您在使用地理位置相关服务时，希望停止分享您的地理位置信息，您可通过手机定位关闭功能、软硬件服务商及通讯服务提供商的关闭方式停止分享。<br>"+
		"（五）响应您的上述请求<br>"+
		"为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。我们将在合理时限内做出答复。如您不满意，可以联系37手游客服或依《用户注册服务协议》约定方式处理。<br>"+
		"对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。<br>"+
		"在以下情形中，按照法律法规要求，我们将无法响应您的请求：<br>"+
		"1、与国家安全、国防安全直接相关的；<br>"+
		"2、与公共安全、公共卫生、重大公共利益直接相关的；<br>"+
		"3、与犯罪侦查、起诉、审判和判决执行等直接相关的；<br>"+
		"4、有充分证据表明您存在主观恶意或滥用权利的；<br>"+
		"5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；<br>"+
		"6、涉及商业秘密的；<br>"+
		"7、其他我们有合理理由拒绝的情形。<br>"+
		"六、我们如何处理未成年人的个人信息<br>"+
		"我们的产品、网站和服务主要面向成人。37手游遵从国家政策，如果没有父母或监护人的同意，未成年人不得创建自己的用户账户。对于经父母或监护人同意而收集未成年人个人信息的情况，我们只会在受到法律的允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。<br>"+
		"七、您的个人信息如何在全球范围转移<br>"+
		"原则上，我们在中华人民共和国境内收集和产生的个人信息，将存储在中华人民共和国境内。<br>"+
		"我们可能通过遍布全球的资源和服务器提供产品或服务，这意味着，在获得您的授权同意后，您的个人信息可能会被转移到您使用产品或服务所在国家/地区的境外管辖区，或者受到来自这些管辖区的访问。<br>"+
		"境外管辖区可能有不同的个人信息保护法，我们将对信息进行加密传输，并尽商业上合理努力督促第三方在使用您的个人信息时遵守其适用的法律法规及协议约定的保密和安全措施。<br>"+
		"八、本政策可能变更<br>"+
		"未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。我们会在本页面上发布对本政策所做的任何变更。<br>"+
		"对于重大变更，我们还会提供更为显著的通知，如您不同意变更后的内容，您可以选择停止使用我们的服务；如您仍然继续使用我们服务的，即表示同意受经修订的本《隐私政策》的约束。";
		this.contentXiYou="西游网网络游戏用户协议<br>"+
		"<br>"+
		"特别说明：<br>"+
		"成都趣乐多科技有限公司（以下简称“西游网”，在《文化部网络游戏服务格式化协议必备条款》当中又被称为“甲方”）在此特别提醒用户（经甲方同意，接受甲方提供的网络服务的个人，在《文化部网络游戏服务格式化协议必备条款》当中又被称为“乙方”）仔细阅读本《西游网网络游戏用户协议》（以下简称“本《用户协议》”）中的各个条款，包括但不限于免除或者限制西游网责任的条款、对用户权利进行限制的条款以及约定争议解决方式、司法管辖的条款。<br>"+
		"请您仔细阅读本《用户协议》（未成年人应当在其法定监护人陪同下阅读），并选择接受或者不接受本《用户协议》。除非您同意并接受本《用户协议》中的各个条款，否则您无权登录、显示、运行西游网平台运营的网络游戏（以下简称“网络游戏”、“西游网网络游戏”），亦无权使用该网络游戏软件的某项功能或某一部分或者以其他的方式使用该游戏软件。您登录、显示、运行西游网网络游戏，或者使用该网络游戏软件的某项功能、某一部分，或者以其他的方式使用该网络游戏软件的行为，即视为您同意并接受本《用户协议》，愿意接受本《用户协议》各个条款的约束。<br>"+
		"本《用户协议》分为两大部分，第一部分文化部根据《网络游戏管理暂行规定》（文化部令第49号）制定的《网络游戏服务格式化协议必备条款》，第二部分是西游网根据《中华人民共和国著作权法》、《中华人民共和国合同法》、《著作权行政处罚实施办法》、《网络游戏管理暂行规定》等国家法律法规拟定的《补充协议》；若第一部分与第二部分内容相互冲突时，以第一部分为准。<br>"+
		"<br>"+
		"第一部分<br>"+
		"网络游戏服务格式化协议必备条款<br>"+
		"根据《网络游戏管理暂行规定》（文化部令第49号），文化部制定《网络游戏服务格式化协议必备条款》。甲方为网络游戏运营企业，乙方为网络游戏用户。<br>"+
		"<br>"+
		"1.账号注册<br>"+
		"1.1 乙方承诺以其真实身份注册成为甲方的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。<br>"+
		"1.2 乙方以其真实身份注册成为甲方用户后，需要修改所提供的个人身份资料信息的，甲方应当及时、有效地为其提供该项服务。<br>"+
		"<br>"+
		"2.用户账号使用与保管<br>"+
		"2.1 根据必备条款的约定，甲方有权审查乙方注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；乙方有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给乙方和他人的民事权利造成损害的，应当承担由此产生的法律责任。<br>"+
		"2.2 乙方对登录后所持账号产生的行为依法享有权利和承担责任。<br>"+
		"2.3 乙方发现其账号或密码被他人非法使用或有使用异常的情况的，应及时根据甲方公布的处理方式通知甲方，并有权通知甲方采取措施暂停该账号的登录和使用。<br>"+
		"2.4 甲方根据乙方的通知采取措施暂停乙方账号的登录和使用的，甲方应当要求乙方提供并核实与其注册身份信息相一致的个人有效身份信息。<br>"+
		"2.4.1 甲方核实乙方所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停乙方账号的登录和使用。<br>"+
		"2.4.2 甲方违反2.4.1款项的约定，未及时采取措施暂停乙方账号的登录和使用，因此而给乙方造成损失的，应当承担其相应的法律责任。<br>"+
		"2.4.3 乙方没有提供其个人有效身份证件或者乙方提供的个人有效身份证件与所注册的身份信息不一致的，甲方有权拒绝乙方上述请求。<br>"+
		"2.5 乙方为了维护其合法权益，向甲方提供与所注册的身份信息相一致的个人有效身份信息时，甲方应当为乙方提供账号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。<br>"+
		"<br>"+
		"3.服务的中止与终止<br>"+
		"3.1 乙方有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，甲方应当立即终止对乙方提供服务。<br>"+
		"3.2 乙方在接受甲方服务时实施不正当行为的，甲方有权终止对乙方提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于甲方事先明确告知的应被终止服务的禁止性行为，否则，甲方不得终止对乙方提供服务。<br>"+
		"3.3 乙方提供虚假注册身份信息，或实施违反本协议的行为，甲方有权中止对乙方提供全部或部分服务；甲方采取中止措施应当通知乙方并告知中止期间，中止期间应该是合理的，中止期间届满甲方应当及时恢复对乙方的服务。<br>"+
		"3.4 甲方根据本条约定中止或终止对乙方提供部分或全部服务的，甲方应负举证责任。<br>"+
		"<br>"+
		"4.用户信息保护<br>"+
		"4.1 甲方要求乙方提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向乙方公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护乙方的个人信息资料的安全。<br>"+
		"4.2 未经乙方许可甲方不得向任何第三方提供、公开或共享乙方注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：<br>"+
		"4.2.1 乙方或乙方监护人授权甲方披露的；<br>"+
		"4.2.2 有关法律要求甲方披露的；<br>"+
		"4.2.3 司法机关或行政机关基于法定程序要求甲方提供的；<br>"+
		"4.2.4 甲方为了维护自己合法权益而向乙方提起诉讼或者仲裁时；<br>"+
		"4.2.5 应乙方监护人的合法要求而提供乙方个人身份信息时。<br>"+
		"<br>"+
		"第二部分 补充协议<br>"+
		"1、特别提示<br>"+
		"1.1 西游网同意按照本协议的规定及其不时发布的操作规则提供基于互联网的相关服务（以下简称“网络服务”），为获得网络服务，服务使用人（以下简称“用户”）同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击“同意”按钮即表示用户完全接受本协议项下的全部条款。这些条款可由西游网随时更新，本服务协议一旦发生变动，西游网将会在相关的页面上提示修改内容。修改后的服务协议一旦在页面上公布即有效代替原来的服务协议。用户在使用西游网提供的各项服务之前，应仔细阅读本服务协议，如用户不同意本服务协议及/或随时对其的修改，请停止使用西游网提供的服务。<br>"+
		"<br>"+
		"2、服务内容<br>"+
		"2.1 西游网网络服务的具体内容由西游网根据实际情况提供，例如论坛、游戏等。西游网保留随时变更、中断或终止部分或全部网络服务的权利。<br>"+
		"2.2 西游网在提供网络服务时，可能会对部分网络服务（例如网络游戏及其他电信增值服务）的用户收取一定的费用。在此情况下，西游网会在相关页面上做明确的提示。如用户不同意支付该等费用，则可不接受相关的网络服务。<br>"+
		"2.3 用户理解：西游网仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。<br>"+
		"2.4 用户应使用正版软件接受网络服务。<br>"+
		"<br>"+
		"3、使用规则<br>"+
		"3.1 用户注册成功后，西游网将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。<br>"+
		"3.2 用户同意接受西游网通过电子邮件或其他方式向用户发送的商品促销或其他相关商业信息。<br>"+
		"3.3 用户在使用中文网络游戏网络服务过程中，必须遵循以下原则：<br>"+
		"遵守中国有关的法律和法规；<br>"+
		"不得为任何非法目的而使用网络服务系统；<br>"+
		"遵守所有与网络服务有关的网络协议、规定和程序；<br>"+
		"不得利用西游网网络游戏网络服务系统进行任何可能对互联网的正常运转造成不利影响的行为；<br>"+
		"不得利用西游网网络游戏网络服务系统传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；<br>"+
		"不得利用西游网网络游戏网络服务系统进行任何不利于西游网及网络游戏的行为；<br>"+
		"不得利用西游网网络游戏网络服务系统或QQ、MSN等其他方式对西游网及网络游戏（包括西游网独家运行的各款游戏）进行污蔑或攻击，或在西游网平台上对其他游戏平台进行夸张宣传和恶意拉人等不利于西游网及网络游戏的行为，或通过对平台进行；<br>"+
		"不得在线下出售、购买西游网提供的游戏道具等虚拟资产；<br>"+
		"不得使用游戏外挂、或利用游戏程序漏洞获取不正当利益、或进行其他破坏游戏平衡的行为；<br>"+
		"西游网有权对违反以上规定的用户帐号进行终止服务等处理；终止服务后西游网对用户投入的时间、金钱不予返还或补偿。若终止服务后用户积极改正过错行为，双方协商一致后西游网可以继续为用户提供服务。 就西游网及合作商业伙伴的服务、产品、业务咨询应采取相应机构提供的沟通渠道，不得在公众场合发布有关西游网及网络游戏及相关服务的负面宣传。<br>"+
		"如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告西游网。<br>"+
		"3.4 用户使用根据本协议获得的用户帐号和密码登录西游网网络游戏的网站或接受其他西游网提供的服务项目时，应遵守该网站或服务项目的相关服务协议及使用守则，用户登录上述网站或接受上述服务项目时即视为对相关服务协议及使用守则的接受。<br>"+
		"3.5 用户在使用西游网平台的服务过程中所产生的任何电磁数据的所属权均属于西游网。<br>"+
		"3.6 用户需要自觉遵守西游网各网络游戏产品的游戏规则，任何违反游戏规则的行为，用户需要自行承担责任。<br>"+
		"3.7 用户不得影响其他用户正常使用西游网网络游戏的服务，否则西游网将有权对用户的资料作出及时的处理。<br>"+
		"3.8 西游网保留对此部分条款随时增补删除的权利，保留此协议的最终解释权。<br>"+
		"<br>"+
		"4、所有权及知识产权<br>"+
		"4.1 本《用户协议》以及下列任何一项作品或资料的所有权及包括著作权在内的全部知识产权均由西游网享有或西游网经权利人授权而合法享有其他相关权利，受《中华人民共和国著作权法》、《计算机软件保护条例》、《信息网络传播权保护条例》、《中华人民共和国商标法》和相关的国际条约以及其他的法律法规保护：（1）西游网网络游戏软件；（2）西游网网络游戏要素作品（包括但不限于文字、声音、图片、录象、图表等）；西游网网络游戏数据、西游网网络游戏过程衍生品、游戏编辑衍生品等。<br>"+
		"4.2 西游网基于本《用户协议》许可您的是您对西游网网络游戏享有非专有使用权。该等非专有使用权，是您对正在使用的网络游戏当前版本所享有的非专有使用权。而且，该等非专有使用权是临时的、可撤销的、本《用户协议》及其补充协议约定范围内的使用权。<br>"+
		"<br>"+
		"4.3 本《用户协议》没有也不会将西游网网络游戏的发行权、信息网络传播权和/或出租权等某一项或某几项著作权权利、及其他的本《用户协议》未明示的权利许可给您，这些权利（或权能）都为西游网或其他权利人享有。西游网通过本《用户协议》许可您的，只是通过互联网在线使用和享受西游网网络游戏产品及服务的权利。<br>"+
		"<br>"+
		"5、隐私保护<br>"+
		"5.1 保护用户（特别是未成年人）的隐私是西游网的一项基本政策，因此，若父母（监护人）希望未成年人（尤其是十岁以下子女）得以使用本服务，必须以父母（监护人）名义申请注册，在接受本服务时，应以法定监护人身份加以判断本服务是否符合于未成年人。西游网保证不对外公开或向第三方 （5.2所列情况除外）提供用户注册资料及用户在使用网络服务时存储在西游网的非公开内容，但下列情况除外：<br>"+
		"事先获得用户的明确授权；<br>"+
		"根据有关的法律法规要求；<br>"+
		"按照相关政府主管部门的要求；<br>"+
		"为维护社会公众的利益；<br>"+
		"为维护西游网的合法权益。<br>"+
		"5.2 西游网可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与西游网同等的保护用户隐私的责任，则西游网可将用户的注册资料等提供给该第三方。<br>"+
		"5.3 在不透露单个用户隐私资料的前提下，西游网有权对整个用户数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。 尽管西游网对用户的隐私权保护做了极大的努力，但是仍然不能保证现有的安全技术措施使用户的技术信息等不受任何形式的损失。<br>"+
		"<br>"+
		"6、免责声明<br>"+
		"6.1 西游网网络游戏通行证所有者不保证以下事宜：<br>"+
		"本服务将符合您的要求；<br>"+
		"本服务将不受干扰、及时提供、安全可靠或不会出错。<br>"+
		"6.2 用户明确同意其使用西游网网络游戏网络服务所存在的风险将完全由其自己承担；因其使用西游网网络游戏网络服务而产生的一切后果也由其自己承担，西游网对用户不承担任何责任。<br>"+
		"6.3 除《网络游戏暂行管理办法》第二十二条规定的情形外，用户尚未使用的网络虚拟货币及尚未失效的游戏服务不予折现或退还。<br>"+
		"6.4 您充分理解到：网络游戏平台各种不良信息（包括但不限于诈骗、虚假、谩骂、诋毁、侵犯人格权等）、网络安全和网络故障问题，并不是西游网、合作单位或者网络游戏所导致的问题，由此可能会造成您感到反感、恶心、呕吐等精神损害，或者给您造成其他的损失，一概由您自行承担，西游网和/或合作单位无须向您承担任何责任。<br>"+
		"6.5 您充分理解到：从第三方获得网络游戏虚拟货币、游戏道具、游戏装备等游戏物品可能存在各种风险。您不得从第三方获得上述游戏物品，您如果坚持从第三方获得上述游戏物品，则您应当自行承担相应的风险，西游网不保证该等游戏物品在网络游戏能够正常使用，也不保证该等物品不被索回。<br>"+
		"6.6 西游网网络游戏和/或其附属的商城内出售的游戏物品，没有标明使用期限，或者其标明的使用期限为“永久”、“无限期”或“无限制”的游戏物品，仅指在西游网运营网络游戏期间可以无限期使用，其使用期限即为自您获得该游戏物品之日起至西游网网络游戏终止运营之日止。一旦因为各种原因导致本《用户协议》被终止或者西游网网络游戏终止运营，您将无法继续使用该等游戏物品，西游网对您本人或任何第三方均不负任何损害赔偿责任。<br>"+
		"6.7 您充分理解到：西游网通过本《用户协议》的方式向您介绍的游戏规则可能是不充分的、有限的。西游网不保证对网络游戏游戏规则的介绍是完全的、充分的、没有任何错漏的，也不保证网络游戏能够完全地、充分地、没有任何错漏地实现这些游戏规则。<br>"+
		"6.8 您充分理解到：合作单位在西游网网络游戏中投放的广告或者进行其他的宣传推广之内容（以下统称“合作单位广告内容”），均是由合作单位自行提供的，网络游戏提供的可能仅仅是链接或者内置服务。您应当通过直接与这些合作单位联系等方式自行判断其真实性，西游网对合作单位广告内容不作任何明示或者默示的担保。<br>"+
		"6.9 您充分理解到：合作单位广告内容所对应的商品或服务系由合作单位单独生产或经营的。西游网没有也不会以分成或者其他任何方式从合作单位销售的该等商品或服务当中取得任何收入，西游网没有也不会对该等商品或服务之质量作任何明示或者暗示的担保。您如果需要购买该等商品或者消费该等服务，请直接与合作单位联系，自行评估商品或者服务的质量及对价，并自行决定是否要购买或者消费，一概与西游网无关。<br>"+
		"6.10 您同意您使用和享受西游网网络游戏产品及服务是出于您个人意愿，并愿自行承担任何风险及由此给您造成的任何直接、间接、衍生的损害，西游网不承担任何责任。若依法无法完全排除损害赔偿责任时，西游网的赔偿责任亦以返还用户因此支付西游网的价款为限。<br>"+
		"6.11 您充分理解到：西游网网络游戏当中可能会设置一些强制要求您与其他用户或者西游网网络游戏自设的游戏角色进行对战的游戏区域（例如某一服务器或者某一个服务器当中的某一特定游戏区域，亦或是所有的服务器），您如果不同意强制对战，请您立即离开这些游戏区域。如果您没有离开这些游戏区域，即视为您同意强制对战，并接受强制对战在游戏中产生的后果。<br>"+
		"<br>"+
		"7、服务变更、中断或终止<br>"+
		"7.1 如因系统维护或升级的需要而需暂停网络服务，西游网将尽可能事先进行通告。<br>"+
		"7.2 如发生下列任何一种情形，西游网有权随时中止或终止向用户提供本协议项下的网络服务而无需通知用户：<br>"+
		"用户提供的个人资料不真实；<br>"+
		"用户违反本协议中规定的使用规则。<br>"+
		"7.3 除前款所述情况外，西游网保留随时地、不事先通知地、不需要任何理由地、单方面地中止履行本《用户协议》及终止本《用户协议》的权利。该等中止、终止，可能是因为西游网公司解散、注销、合并、分立，也可能是因为西游网将网络游戏或其运营权转让给了第三方，还可能是因为国家法律、法规、政策及国家机关的命令或者其他的诸如地震、火灾、海啸、台风、罢工、战争等不可抗力事件，还可能是上列原因之外的其他原因。对于所有服务的中断或终止而造成的任何损失，西游网无需对用户或任何第三方承担任何责任。<br>"+
		"<br>"+
		"7.4 本《用户协议》如因为本《用户协议》第7.3条所述原因：<br>"+
		"（1）被中止，则包括您在内的所有用户将暂时不能凭借游戏帐号登录网络游戏，直至本《用户协议》中止期限届满之日止；<br>"+
		"（2）被终止，则包括您在内的所有用户将永远不能凭借游戏帐号登录网络游戏，西游网将以公告或者补充协议的形式处理相关事宜。<br>"+
		"<br>"+
		"8、违约赔偿<br>"+
		"8.1 用户同意保障和维护中文网络游戏及其他用户的利益，如因用户违反有关法律、法规或本协议项下的任何条款而给西游网或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。<br>"+
		"8.2 利用程序BUG、恶意程序等非法产出的，一经查实，将受到相应惩罚，并且对非法产出予以清除还原处理，用户将自行承担因此带来的任何损失。最终解释权归西游网所有，情节严重的西游网拥有保留追究法律的权益。<br>"+
		"<br>"+
		"9、法律管辖<br>"+
		"9.1 本协议的订立、执行和解释及争议的解决均应适用中国法律。<br>"+
		"9.2 如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均应向西游网所在地的人民法院提起诉讼。<br>"+
		"<br>"+
		"10、通知和送达<br>"+
		"10.1 本协议项下所有的通知均可通过重要页面公告、电子邮件或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。<br>"+
		"<br>"+
		"11、其他规定<br>"+
		"11.1 本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议双方其他权利。<br>"+
		"11.2 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。<br>"+
		"11.3 本协议中的标题仅为方便而设，不具法律或契约效果。";
		this.contentZhijian="隐私保护指引<br>"+
		"概要：<br>"+
		"欢迎您选择由橙子公司（以下简称“我们”。本指引中的橙子公司，具体是指橙子游戏及其服务的提供方深圳市指尖娱乐网络有限公司，注册地为深圳市南山区粤海街道科技路11号伟杰大厦211室 ）提供的橙子游戏！我们将通过《橙子游戏隐私保护指引》（“本指引”）向您进一步细化说明您在使用橙子游戏时我们收集、使用、存储和共享个人信息的情况，以及您所享有的相关权利等事宜，本指引是的组成部分，其中要点如下：<br>"+
		"• 为了向您提供游戏娱乐以及与此相关的玩家互动、消费等服务，我们需要收集您的游戏历史、设备信息、登录日志等信息。<br>"+
		"• 为更好地保护未成年人身心健康，促使未成年人健康上网，我们可能在国家有关网络游戏防沉迷政策规定的基础上，实施更为严格的防沉迷措施。同时我们也不断研究与测试各种保护未成年人的新技术。如为了进一步提高实名认证的精准度，最大限度防止未成年人冒用他人身份信息，我们可能在部分游戏或针对部分用户(以具体游戏策略为准)启用人脸识别验证。<br>"+
		"上述人脸识别验证主要是将用户真实面部信息与公安权威数据平台数据源进行比对，如二者比对结果一致，即成功通过认证，并按用户实际年龄段匹配相应的游戏时限。如比对结果不符或用户拒绝验证，我们将统一视作12周岁及以下未成年人，纳入相应的防沉迷监管。人脸识别的相关验证数据，在加密后仅用于与公安权威数据平台进行比对，我们不会对其留存。。<br>"+
		"• 您可以根据本指引所述管理您的个人信息以及相关授权。<br>"+
		"• 我们采用多方位的安全保护措施，以确保对您的个人信息保护处于合理的安全水平。<br>"+
		"您可以通过阅读完整版《橙子游戏隐私保护指引》，了解个人信息类型与用途的对应关系等更加详尽的个人信息处理规则。<br>"+
		"1.我们收集的信息<br>"+
		"  在您使用橙子游戏服务的过程中，橙子游戏会按照如下方式收集您在使用服务时主动提供的或因为使用服务而产生的信息，用以向您提供、优化我们的服务以及保障您的账户安全：<br>"+
		"1.1 当您注册或使用橙子游戏服务时，我们会收集您的网络身份标识信息及个人常用设备信息，用于标记您为橙子游戏的用户。如果您使用微信、QQ及（或）我们认可的其他账号（以下称“第三方账号”）作为游戏账号关联登录橙子游戏的，我们会收集您微信、QQ及第三方账号的唯一标识、头像、昵称，用于保存您的登录信息，以便您在不同设备登录。如果您使用微信、QQ及（或）第三方账号作为游戏账号关联登录橙子游戏的，为了更好地向您提供游戏服务，改善游戏体验，我们会收集您的QQ号码、微信账号以及第三方账号涉及的唯一标识、昵称、头像、好友关系以及您授权的其他信息，以及您在橙子游戏中的相关操作信息、游戏信息等信息（具体包括但不限于您的登录状态、对战信息/状态、成就信息等）进行使用，并可向您本人或其他用户或好友展示。我们可能会视游戏产品具体情况为您提供相关权限，以便您可以对是否展示前述相关信息进行相应设置。<br>"+
		"1.2 为满足相关法律法规政策及相关主管部门的要求，橙子游戏用户需进行实名认证以继续使用和享受橙子游戏。我们会在获得您同意或您主动提供的情况下收集您的实名身份信息（包括姓名、身份证号、照片等信息），该信息属于敏感信息，拒绝提供实名身份信息可能会导致您无法登录橙子游戏或在使用橙子游戏过程中受到相应限制<br>"+
		"1.3 为保障您正常使用我们的服务，维护游戏基础功能的正常运行，优化游戏产品性能，提升您的游戏体验并保障您的账号安全，我们会收集您的设备ID、设备名称、设备类型和版本、系统版本、IP地址、MAC地址、应用ID、网络类型等信息。<br>"+
		"1.4 当您使用橙子游戏服务时，我们会收集您的游戏日志信息，例如登录日志、物品日志、游戏对局信息、交友记录等，以便您能够在客户端查看您的游戏历史记录，同时用于游戏运营统计分析、客服投诉处理及其他游戏安全分析，并为提升您的游戏体验，我们可能把前述信息同步至该游戏后续版本或您正在使用的我们提供的其他产品中。<br>"+
		"1.5 如您使用小米、魅族、华为等品牌手机，橙子游戏接入的上述手机厂商Push SDK需要收集手机唯一标识信息（例如IMEI），并可能会收集您的手机型号、系统类型、系统版本、设备屏幕尺寸等参数用于实现橙子游戏产品和活动等信息的推送，具体情况请参见SDK运营方的隐私政策或相关声明。<br>"+
		"1.6 当您使用橙子游戏产品的消费功能时，我们会收集您的充值记录、消费记录等信息，以便您查询您的交易记录，同时尽最大程度保护您的虚拟物品安全。充值记录、消费记录属于敏感信息，收集上述信息为实现橙子游戏产品的消费功能所必须，否则将无法完成交易。<br>"+
		"1.7 为保障您的游戏账号安全，营造公平、健康及安全的游戏环境，我们会收集您的游戏识别信息、硬件及操作系统信息、进程及游戏崩溃记录等信息，以用于打击破坏游戏公平环境或干扰、破坏游戏服务正常进行的行为（如用于检测盗版、扫描外挂、防止作弊等）。<br>"+
		"1.8 当您在游戏中通过文字、图片、语音、视频及其他方式与其他玩家进行互动，我们可能会收集并保存您发送的上述信息内容用于过滤色情、暴力、政治、辱骂、恶意广告等不当内容，以此净化游戏环境，维护健康的上网环境。<br>"+
		"1.9 如您希望通过语音、视频与其他游戏玩家互动、参与直播，在您授权同意后，游戏会访问您的麦克风、摄像头，为您提供语音聊天、直播互动等功能。<br>"+
		"1.10 如您希望与附近的游戏玩家互动，在您授权同意后，我们会收集您的地理位置信息，用于寻找附近的游戏玩家，以便您与附近的玩家匹配、组队等。地理位置信息属于敏感信息，拒绝提供该信息只会导致您无法实现与附近的游戏玩家互动，但不影响您正常使用橙子游戏的其他功能，您也可以随时取消您的地理位置信息授权。<br>"+
		"1.11 我们启用了适度游戏的提醒功能，如您使用可穿戴设备，我们会在征得您同意后收集您的游戏在线心跳等信息，以在您过度游戏时发出系统提醒。<br>"+
		"1.12 我们可能会将您的游戏数据进行分析以了解您的偏好，并可能将您的偏好等相关必要的信息分享给橙子集团内的其他产品或服务，以便于我们更好地在橙子游戏和橙子集团内的其他产品或服务中向您展示可能感兴趣的内容。<br>"+
		"1.13 根据相关法律法规及国家标准，以下情形中，我们可能会收集、使用您的相关个人信息无需征求您的授权同意：<br>"+
		"(1)与国家安全、国防安全等国家利益直接相关的；与公共安全、公共卫生、公共知情等重大公共利益直接相关的；<br>"+
		"(2)与犯罪侦查、起诉、审判和判决执行等直接相关的；<br>"+
		"(3)出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难得到本人同意的；<br>"+
		"(4)所收集的个人信息是您自行向社会公众公开的；<br>"+
		"(5)从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br>"+
		"(6)根据您要求签订和履行合同所必需的；<br>"+
		"(7)用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；<br>"+
		"(8)为开展合法的新闻报道所必需的；<br>"+
		"(9)出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；<br>"+
		"(10)法律法规规定的其他情形。<br>"+
		"1.14 请您理解，我们向您提供的功能和服务是不断更新和发展的，如果某一功能或服务未在前述说明中且收集了您的信息，我们会通过页面提示、交互流程、网站公告等方式另行向您说明信息收集的内容、范围和目的，以征得您的同意。<br>"+
		"目前，除了向第三方调研机构收集游戏调研信息以帮助我们改进游戏产品以及提供个性化服务，以及本指引第1.1条规定的您使用第三方账号登录橙子游戏情形之外，我们不会主动从橙子集团外的第三方获取您的个人信息。如未来为业务发展需要从橙子集团外的第三方间接获取并处理您的个人信息的，我们会严格遵守相关法律法规的规定，要求该第三方征得您的同意并确保其提供的信息的合法性。<br>"+
		"2.信息的存储<br>"+
		"2.1 信息存储的方式和期限<br>"+
		"  我们会通过安全的方式存储您的信息，包括本地存储（例如利用APP进行数据缓存）、数据库和服务器日志。一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您的个人信息。<br>"+
		"2.2 信息存储的地域<br>"+
		"  我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。<br>"+
		"2.3 产品或服务停止运营时的通知<br>"+
		"  当我们的产品或服务发生停止运营的情况时，我们将根据相关法律法规规定进行公告通知，并依法保障您的合法权益。<br>"+
		"3.信息安全<br>"+
		"3.1 安全保护措施<br>"+
		"  我们努力为用户的信息安全提供保障，以防止信息的泄露、丢失、不当使用、未经授权访问和披露等。我们使用多方位的安全保护措施，以确保用户的个人信息保护处于合理的安全水平，包括技术保护手段、管理制度控制、安全体系保障等诸多方面。此外，我们游戏的相关系统还通过了国家网络安全等级保护（三级）的备案和测评。<br>"+
		" 我们采用业界领先的技术保护措施。我们使用的技术手段包括但不限于防火墙、加密（例如SSL）、去标识化或匿名化处理、访问控制措施等。此外，我们还会不断加强安装在您设备端的软件的安全能力。例如，我们会在您的设备本地完成部分信息加密工作，以巩固安全传输；我们会了解您设备安装的应用信息和运行的进程信息，以预防病毒、木马等恶意程序。我们建立了保障个人信息安全专门的管理制度、流程和组织。例如，我们严格限制访问信息的人员范围，要求他们遵守保密义务并进行审计，违反义务的人员会根据规定进行处罚。我们也会审查该管理制度、流程和组织，以防未经授权的人员擅自访问、使用或披露用户的信息。我们建议您在使用产品和服务时充分注意对个人信息的保护，我们也会提供多种安全功能来协助您保护自己的个人信息安全。<br>"+
		"3.2 安全事件处置措施<br>"+
		"  若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大。安全事件发生后，我们会以公告、推送通知或邮件等形式告知您安全事件的基本情况、我们即将或已经采取的处置措施和补救措施，以及我们对您的应对建议。如果难以实现逐一告知，我们将通过公告等方式发布警示。<br>"+
		"4.我们如何使用信息<br>"+
		"我们严格遵守法律法规的规定以及与用户的约定，按照本指引及所述使用收集的信息，以向您提供更为优质的服务。<br>"+
		"4.1 信息使用规则<br>"+
		"  我们会按照如下规则使用收集的信息：<br>"+
		"(1)我们会根据我们收集的信息向您提供各项功能与服务，包括基础游戏功能、玩家互动功能、直播功能、消费功能等；<br>"+
		"(2)我们会根据您使用橙子游戏产品的频率和情况、故障信息、性能信息等分析我们产品的运行情况，以确保服务的安全性，并优化我们的产品，提高我们的服务质量。我们不会将我们存储在分析软件中的信息与您提供的个人身份信息相结合。<br>"+
		"4.2 告知变动目的后征得同意的方式<br>"+
		"  我们将会在本指引所涵盖的用途内使用收集的信息。如我们使用您的个人信息，超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您的个人信息前，再次向您告知并征得您的明示同意。<br>"+
		"5.对外提供<br>"+
		"目前，除本指引以及规定的情形之外，我们不会主动共享、提供或转让您的个人信息至橙子集团外的第三方，如存在其他共享、提供或转让您的个人信息或您需要我们将您的个人信息共享、提供或转让至橙子集团外的第三方情形时，我们会直接或确认该第三方征得您对上述行为的明示同意。即使有前款规定，如果您使用我们代理的境外游戏的，我们可能会将您在游戏中产生的日志及相关信息（如登录日志、物品日志等）提供给境外开发主体或相关第三方，用于游戏安全分析，帮助完善游戏服务，进一步优化用户的游戏体验。另外，我们会在疑似未成年人消费后，尝试联系其监护人，将相关消费记录等信息告知其监护人，进行提醒、确认与处理。<br>"+
		"除本指引以及、另有规定外，我们不会对外公开披露所收集的个人信息。如必须公开披露时，我们会向您告知此次公开披露的目的、披露信息的类型及可能涉及的敏感信息，并征得您的明示同意。<br>"+
		"随着我们业务的持续发展，我们有可能进行合并、收购、资产转让等交易，我们将告知您相关情形，按照法律法规及不低于本指引所要求的标准继续保护或要求新的控制者继续保护您的个人信息。<br>"+
		"另外，根据相关法律法规及国家标准，以下情形中，我们可能会共享、转让、公开披露个人信息无需事先征得您的授权同意：<br>"+
		"(1)与国家安全、国防安全直接相关的；<br>"+
		"(2)与公共安全、公共卫生、重大公共利益直接相关的；<br>"+
		"(3)与犯罪侦查、起诉、审判和判决执行等直接相关的；<br>"+
		"(4)出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br>"+
		"(5)个人信息主体自行向社会公众公开个人信息的；<br>"+
		"(6)从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。<br>"+
		"6.您的权利<br>"+
		"在您使用橙子游戏服务期间，我们可能会视游戏产品具体情况为您提供相应的操作设置，以便您可以查询、删除、更正或撤回您的相关个人信息，您可参考相应游戏产品的具体指引进行操作。此外，我们还设置了投诉举报渠道，您的意见将会得到及时的处理。<br>"+
		"7.变更<br>"+
		"我们可能会适时对本指引进行修订。当本指引的条款发生变更时，我们会在版本更新时以适当的方式向您提示变更后的指引。请您仔细阅读变更后的隐私保护指引或指引内容，您继续使用橙子游戏表示您同意我们按照更新后的隐私保护指引收集、处理或使用您的个人信息。<br>"+
		"8.未成年人保护<br>"+
		"我们高度重视未成年人个人信息的保护问题，并持续探索更新的未成年人个人信息保护方式。<br>"+
		"我们会积极按照国家防沉迷政策要求，通过启用防沉迷系统保护未成年人的合法权益。我们会通过实名身份等信息校验判断相关账号的实名信息是否为未成年人，进而决定是否将此账号纳入到防沉迷体系中。另外，我们会收集您的登录时间、游戏时长等信息，通过从系统层面自动干预和限制未成年人游戏时间、启用强制下线功能等方式，引导未成年人合理游戏，并在疑似未成年人消费后尝试联系其监护人进行提醒、确认与处理，帮助未成年人健康上网。<br>"+
		"同时，为更好地保护未成年身心健康，促使未成年人健康上网，我们可能在国家有关网络游戏防沉迷政策规定的基础上，实施更为严格的防沉迷措施。同时我们也不断研究与测试各种保护未成年人的新技术。如为了进一步提高实名认证的精准度，最大限度防止未成年人冒用他人身份信息，我们可能在部分游戏或针对部分用户(以具体游戏策略为准)在特定场景下（如在您登录游戏时，或在游戏过程中包括有关游戏充值、消费或交易时）启用人脸识别验证（如启用人脸识别的，我们会使用微信或QQ提供的人脸识别功能，将您的相关实名身份信息提供给微信或QQ用于人脸识别）。<br>"+
		"上述人脸识别验证主要是将用户真实面部信息与公安权威数据平台数据源进行比对，如二者比对结果一致，即成功通过认证，并按用户实际年龄段匹配相应的游戏时限。如比对结果不符或用户拒绝验证，我们将统一视作12周岁及以下未成年人，纳入相应的防沉迷监管。人脸识别的相关验证数据，在加密后仅用于与公安权威数据平台进行比对，我们不会对其留存。<br>"+
		"另外，我们还可能会通过收集您在游戏过程中产生的游戏行为数据（如您在终端设备操作游戏时形成的点击压力和半径、点击相对位置、加速度方向、重力方向等数据，以及您在游戏中通过在线语音等方式与其他玩家进行互动时产生的语音数据）来初步判断您是否是未成年人（就语音数据而言，仅是系统随机通过您的部分在线语音来判断是儿童音还是成人音）。如初步判断您是未成年人的，我们可能会按前述规定启用人脸识别进行验证。<br>"+
		"若您是未成年人的法定监护人，请您关注您所监护的未成年人是否是在取得您的授权同意之后使用橙子游戏的服务或提供其个人信息。<br>"+
		"特别地，若您是不满14周岁的儿童，为保护儿童个人信息，我们还于发布了《橙子游戏儿童隐私保护指引》。儿童及其监护人在使用橙子游戏服务前，还应仔细阅读《橙子游戏儿童隐私保护指引》。只有在取得监护人对《橙子游戏儿童隐私保护指引》的同意后，您方可使用橙子游戏服务。<br>"+
		"9.其他<br>"+
		"是橙子统一适用的一般性隐私条款，其中所规定的内容包括但不限于用户权利及信息安全保障措施等均适用于橙子游戏用户。如与本指引存在不一致或矛盾之处，请以本指引为准。<br>"+
		"《橙子游戏儿童隐私保护指引》是适用于不满14周岁的儿童用户的个人信息保护规则。在《橙子游戏儿童隐私保护指引》的适用范围内，如其与、本指引存在不一致或矛盾之处，请以《橙子游戏儿童隐私保护指引》为准。<br>"+
		"《橙子游戏儿童隐私保护指引》<br>"+
		"欢迎您选择由橙子公司（以下简称“我们”。本指引中的橙子公司，具体是指橙子游戏及其服务的提供方深圳市指尖娱乐网络有限公司，注册地为深圳市南山区粤海街道科技路11号伟杰大厦211室）提供的橙子游戏！除《橙子游戏隐私保护指引》外，我们还将通过《橙子游戏儿童隐私保护指引》（“本政策”） 帮助您和孩子（本政策中的“孩子”，是指不满十四周岁的未成年人）进一步了解我们收集、使用、存储和共享您孩子个人信息的情况，以及您和您的孩子所享有的相关权利。<br>"+
		"【重要提示】：<br>"+
		"本政策适用于不满十四周岁的未成年人的个人信息处理。有关您和已满十四周岁的用户的个人信息处理，请查看、《橙子游戏隐私保护指引》了解相关信息。<br>"+
		"  我们会通过页面提示、交互流程、网站公告等方式向您说明儿童个人信息收集等情况，并征得您的同意。请您仔细阅读、充分理解、《橙子游戏隐私保护指引》和本政策后，选择是否同意前述隐私政策。<br>"+
		"1.我们收集的儿童个人信息<br>"+
		"在您的孩子使用橙子游戏服务的过程中，橙子游戏仅会收集您同意我们收集的或您及您的孩子主动提供的有关您孩子的个人信息，以向您的孩子提供、优化我们的服务以及保障您孩子的账户安全。我们可能会收集的您孩子的个人信息的详情，请参见《橙子游戏隐私保护指引》。<br>"+
		"  同时，为验证您与您孩子的监护关系，我们可能还会收集您的联系方式（包括手机号码、电子邮箱）以及其他有助于我们判断监护关系的信息。<br>"+
		"  目前，除了向第三方调研机构收集游戏调研信息，以帮助我们改进游戏产品以及提供个性化服务之外，我们不会主动从橙子集团外的第三方获取您孩子的个人信息。如未来为业务发展需要从橙子集团外的第三方间接获取并处理您孩子的个人信息的，我们会严格遵守相关法律法规的规定，要求该第三方征得您的同意并确保其提供的信息的合法性。<br>"+
		"2.我们如何使用儿童个人信息<br>"+
		"我们严格遵守法律法规的规定以及与用户的约定，按照本政策《橙子游戏隐私保护指引》所述使用收集的信息，以向您的孩子提供更为优质的服务。<br>"+
		"  有关我们使用儿童个人信息的方式详情请参见《橙子游戏隐私保护指引》，若我们使用您孩子的个人信息，超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您孩子的个人信息前，再次向您告知并征得您的同意。<br>"+
		"3.儿童个人信息的存储<br>"+
		"3.1 我们按照法律法规规定，将在中华人民共和国境内收集到的您孩子的个人信息存储于中华人民共和国境内，并依法对这些信息进行严格保密。如涉及跨境业务，我们需要向境外机构传输境内收集的相关个人信息的，我们也会根据国内法律、行政法规和相关监管部门的规定，为您孩子的个人信息提供保护。<br>"+
		"3.2 一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您孩子的个人信息。超出法律法规或监管规定的期限后，我们会按照法律法规的要求对您孩子的个人信息进行删除或者匿名化处理。<br>"+
		"4.儿童个人信息的安全<br>"+
		"4.1 为了保障您孩子的信息安全，我们会在现有技术水平下采取合理必要的措施来保护孩子的信息，采取物理防护、安全技术、管理制度等措施来降低丢失、误用、非授权访问、披露和更改的风险，包括但不限于数据加密传输、防火墙和加密存储、物理访问控制以及信息访问授权控制。为此我们设置了安全程序保护您孩子的信息不会被未经授权的访问所窃取，所有的个人信息被加密储存并放置于经防火墙严格保护的内部系统。<br>"+
		"4.2 为了保障您孩子的信息安全，我们建立了专门的管理制度、流程和组织以保障信息的安全。例如，我们严格限制访问信息的人员范围，要求他们遵守保密义务，并进行审计。<br>"+
		"4.3 若发生儿童个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大，并及时以公告、推送通知或邮件等形式告知您和孩子安全事件的基本情况、我们即将或已经采取的处置措施和补救措施，以及我们对您的应对建议。如果难以实现逐一告知，我们将通过公告等方式发布警示。<br>"+
		"5.儿童个人信息的更正<br>"+
		"如您和孩子发现儿童个人信息有错误的，可以联系我们处理。<br>"+
		"6.儿童个人信息的删除<br>"+
		"6.1 如您和孩子发现我们违反法律、行政法规的规定或者双方的约定处理儿童个人信息的，或是超出目的范围或者必要期限处理儿童个人信息的，可以通过联系我们对相关个人信息进行删除。<br>"+
		"6.2如您撤回同意的，可以联系我们，我们将按照国家有关法律规定进行处理。<br>"+
		"6.3 如您和孩子主动注销橙子游戏账号并终止使用橙子游戏，我们将会停止使用儿童的个人信息，但法律法规或监管部门另有规定的除外。如我们的产品或者服务停止运营，我们将根据相关法律法规规定进行通知，同时也将及时停止使用儿童个人信息，并将对保存的儿童个人信息进行删除或匿名化处理。<br>"+
		"7.儿童个人信息的转移和委托处理<br>"+
		"一般我们不会向第三方转移和委托第三方处理儿童个人信息，如确需第三方转移或委托第三方处理的，我们都会根据法律、行政法规的规定进行合规措施，包括但不限于对第三方进行安全评估。<br>"+
		"8.儿童个人信息的披露<br>"+
		"除非法律、行政法规规定应当披露或者根据与您的约定可以披露您孩子的个人信息的，我们不会披露孩子的个人信息。<br>"+
		"9.变更<br>"+
		"我们可能会适时对本政策进行修订。当本政策的条款发生变更时，我们会在版本更新时以适当的方式向您提示变更后的指引。请您仔细阅读变更后的隐私保护指引或指引内容，您的孩子继续使用橙子游戏表示您同意我们按照更新后的隐私保护指引收集、处理或使用您孩子的个人信息。<br>"+
		"10.其他<br>"+
		"《橙子游戏隐私保护指引》是橙子游戏统一适用的一般性隐私条款，其中所规定的内容包括但不限于用户权利及信息安全保障措施等均适用于橙子游戏用户。本政策是专门针对儿童的隐私保护指引，包含对于儿童个人信息的特殊保护。如《橙子游戏隐私保护指引》与本政策存在不一致或矛盾之处，请以本政策为准。";
		this.contentZhijianYhxy="用户协议<br>"+
		"指尖娱乐通行证用户协议：<br>"+
		"1.释义<br>"+
		"本服务条款系由用户与深圳市指尖娱乐网络有限公司 与相关软件与技术服务提供方（在本服务条款中统称为\"指尖娱乐\"）就深圳市指尖娱乐网络有限公司 所提供的网络服务及其他相关软件与技术服务提供方所提供的技术服务（统称为\"服务\"）所订立的相关权利义务规范。用户指愿意使用指尖娱乐提供的服务的个人。此份合约描述指尖娱乐向用户提供服务的详细条款。因此，请于注册成为服务用户前，确实详细阅读本服务条款的所有内容，当用户点选同意键或使用任何服务即视为同意并接受本服务条款的所有规范并愿受其约束。用户应当明确：无论事实上是否在注册前认真阅读，只要用户点击\"同意\"按钮并按照相关注册程序成功注册或者已经正在使用本公司提供的服务，用户的行为就已表示用户无条件接受了本协议及深圳市指尖娱乐网络有限公司 所公布的与的各项管理规定，并愿意受其约束。如果发生纠纷，用户不得以未仔细阅读为由实行抗辩。<br>"+
		"2.著作权声明<br>"+
		"指尖娱乐所提供的服务的相关着作权、专利权、商标、营业秘密及其它任何所有权或权利，均属指尖娱乐所有。非经指尖娱乐的同意，任何人或用户均不得擅自下载、重制、传输、改作、编辑，否则应负所有法律责任。指尖娱乐拥有向用户提供服务过程中所产生并储存于指尖娱乐服务器中的任何数据信息（包括但不仅限于账号等数据信息）的所有权。<br>"+
		"3.用户的基本义务<br>"+
		"3.1 用户需自行配备注册和使用网络所需的各项计算机及网络设备，并自行负担上网所需的各项费用。<br>"+
		"3.2 指尖娱乐向用户提供的服务本身属于商业行为，目前用户可以免费注册及使用，但指尖娱乐保留将来要求用户支付相应费用的权利（自指尖娱乐公告之日起）。<br>"+
		"3.3 用户同意于注册时提供其本人真实准确的法定姓名、性别和居民身份证号码等个人身份识别资料和完整、详尽、真实的其他个人资料。用户确认其本人已年满18周岁。个人身份识别资料一经注册，除特殊情况下经指尖娱乐许可外，用户无权进行单方面变更。对账号的使用权，归该居民身份证号码所对应之居民身份证持有者所有。用户应充分认识到身份证信息是账号所有权的主要凭证，若用户在线上进行了身份证信息的变更并生效后，对该账号的所有权归修改后的居民身份证持有者所有。若任何人因无法提供当前账号所对应的居民身份证证实其对账号拥有合法权利或授权，导致指尖娱乐无法为其提供或继续提供服务的，指尖娱乐将不承担因此产生的任何责任。用他人身份证号码及杜撰虚假身份证号码注册的用户的权益在游戏中将得不到任何保障。对提供虚假身份证号码的用户，指尖娱乐有权随时中断或终止向用户提供本协议项下的服务（包括收费服务）而无需对用户或任何第三方承担任何责任；对用他人身份证号码注册的用户，应该身份证号码对应之本人请求，指尖娱乐有权随时中断或终止向该身份证号码对应之账号提供本协议项下的服务（包括收费服务）而无需对用户或任何第三方承担任何责任。对于除个人身份识别资料之外的其他个人资料，若用户日后有变更者，应及时于线上进行更新。若用户所提供的其他个人资料与事实不符或所提供的资料业已变更而未更新或有任何误导之嫌而导致指尖娱乐无法为用户提供或继续提供服务，因此而产生的全部责任均由用户承担而与指尖娱乐无关。<br>"+
		"3.4 用户有义务妥善保管使用在注册服务时获得的账号及密码，并为此账号及密码登入系统后所开始的一连串行为或活动负责。<br>"+
		"3.5 为维护自身权益，用户不应将账号及密码泄漏或提供第三人知悉或出借或转让与他人使用，如因用户自身过错或过失而导致账号或密码泄漏而给用户自身造成损失，用户应自行承担责任。指尖娱乐员工不会在电话或邮件中询问用户的密码，所以用户不得对任何人泄漏用户的密码。如果用户遗失了密码，指尖娱乐针对处理此问题之服务保留索取额外费用的权利。<br>"+
		"3.6 若用户发现账号或密码遭他人非法使用或有异常使用的情形，应立即通知指尖娱乐，并提交该账号为本人所有的有关证明，以便申请该账号的暂停使用，因此而造成的损失，指尖娱乐不承担赔偿责任。但在用户根据法律规定申请立案的情况下，指尖娱乐有义务协助查询。<br>"+
		"3.7 由于用户及市场状况的不断变化，指尖娱乐保留随时修改本服务条款的权利，修改本服务条款时，指尖娱乐将于相关页面公告修改的事实，而不另行对用户进行个别通知。若用户不同意修改的内容，可停止使用全部指尖娱乐所提供的服务。若用户继续使用指尖娱乐所提供的任意服务，即视为用户业已指尖娱乐所修订的内容。<br>"+
		"3.8 同意了本合约的条款之后，指尖娱乐将授予允许用户以一个合法付费账号而获得指尖娱乐提供的服务的权利。用户不得对包括但不仅限于指尖娱乐的网站及提供的软件进行修改，还原工程(Reverse Engineering)，译码(Decompile)，反向组译(Disassemble)、复制(copy)或散布(distribute)。<br>"+
		"3.9 用户不可以使用任何第三方程序登录或使用指尖娱乐所提供的服务。用户不可以使用指尖娱乐任何知识产权，来创造或提供相同或类似的服务，如仿真服务器等。用户不可以对指尖娱乐服务器采取任何的Hack行为，或是尝试着使指尖娱乐服务器过度负荷。用户在拥有合法的账号下，可以在指尖娱乐的服务器上传使用服务所必须的资料， 资料的内容不得如下：<br>"+
		"(a)侵犯任何第三者的知识产权，版权或公众/私人权利;<br>"+
		"(b)违反任何法律或善良风俗<br>"+
		"(c)包含任何毁谤他人，性骚扰，种族歧视，或对孩童有不良影响的内容;<br>"+
		"(d)包含病毒、特洛依木马、定时炸弹等可能对指尖娱乐系统造成伤害或影响其稳定性的内容。<br>"+
		"指尖娱乐得依照上传内容的严重性采取任何动作。用户在此授权指尖娱乐执行任何有关用户上传的内容的知识产权。<br>"+
		"4.个人资料的保护及其限制<br>"+
		"4.1 对于用户所登录留存的个人资料，除下列情形外，指尖娱乐同意在未得到用户同意前，不公开对外披露：<br>"+
		"a.基于法律规定；<br>"+
		"b.基于司法机关或其它有权机关基于法定程序的要求；<br>"+
		"c.为保障指尖娱乐的财产及权益；<br>"+
		"d.在紧急情况下为保护其它用户或第三人的人身安全的情形下；<br>"+
		"e.用户随服务转移<br>"+
		"4.2 对于用户所登录的个人资料，用户同意指尖娱乐及其关系企业或合作对象，可以在合理范围内搜集、处理、保存、传递及使用该资料，以提供用户其它信息及服务或做成会计资料，或进行网络行为的调查或研究，或其它任何合法使用。<br>"+
		"4.3 指尖娱乐无法保证不将用户的个人资料或通讯内容给予第三者。举例来说，如果政府需要资料时指尖娱乐将被迫交出，或者是有其它的第三者拦截网络的传输内容。此外，用户授权指尖娱乐可将用户的资料给予执法机关或政府相关单位，以利调查或问题解决的进行。除此之外，当用户要求指尖娱乐给予任何技术上的协助时，用户授权指尖娱乐远程检视与更改用户计算机的内容。为了更新程序的需要，用户授权指尖娱乐(i)从用户的计算机上传档案(ii)下载档案到用户的计算机。<br>"+
		"4.4 指尖娱乐公司不认可在非指尖娱乐公司提供的交易平台所产生的交易结果，玩家从非指尖娱乐公司提供的交易平台所获得的虚拟装备以及游戏币将被认定为来源不符合游戏规则，若有玩家对上述交易行为或交易结果提出异议，指尖娱乐公司将基于玩家的请求对上述异议进行处理。为保障玩家能愉悦的体验游戏，保障玩家的正当利益不受到侵害，指尖娱乐公司对盗号及盗号相关行为（包括但不限于盗取帐号、游戏数据、玩家个人资料、协助盗号者操作及转移物品等行为）将予以严厉打击和处罚。一经查证属实或应有权机关的要求，指尖娱乐公司有权视具体情况立即采取暂时隔离、永久隔离、封停帐号、删除档案等措施，情节严重的，指尖娱乐公司保留对涉案玩家追究法律责任的权利。在查证玩家被盗事件的过程中，为能够快速调查、处理问题，指尖娱乐公司将会请相关玩家协助调查，其方式包括但不限于隔离调查、线上交流、线下交流等。<br>"+
		"5.用户使用服务的限制<br>"+
		"5.1 指尖娱乐严禁用户利用使用指尖娱乐所提供的服务而做与使用该等服务无关的行为，包括但不限于妨害他人名誉或隐私权；或使用自己、匿名或冒用他人或指尖娱乐名义散播诽谤、不实、威胁、不雅、猥亵、不法、攻击性或侵害他人权利的消息或文字，传播色情或其它违反社会公德的言论；传输或散布计算机病毒；从事广告或贩卖商品；从事不法交易或张贴虚假不实或引人犯罪的信息；或任何违反中华人民共和国法律或其它法令的行为，亦不得利用使用该等服务的机会，与其它用户或他人进行非法的交涉或对话。<br>"+
		"5.2 用户对指尖娱乐服务管理人员所进行的询问应据实澄清，否则指尖娱乐有权随时终止用户使用服务；指尖娱乐发现不法或可疑的行为者，指尖娱乐有权随时通报司法或相关机关处理，并有权同时向该机关呈报用户的基本资料及行为供该等机关为调查。用户就因此所致生的不便或困扰，不得向指尖娱乐请求任何损害或补偿。<br>"+
		"5.3 用户应就其在使用指尖娱乐所提供的服务过程中的行为或活动自负责任，指尖娱乐仅提供服务予用户自行执行或与其它用户依照服务规则共同使用，指尖娱乐就用户在使用其所提供的服务过程中的行为或活动或交易不负任何责任。<br>"+
		"5.4 指尖娱乐不支持使用任何第三方程序进行登录，由此引起的一切问题及后果，由用户自行承担，指尖娱乐不承担任何责任，并保留终止向用户提供服务的权利。<br>"+
		"5.5 下列行为将视为用户违反本合约之行为：<br>"+
		"(a)如果用户违反了本合约的任何约定；<br>"+
		"(b)如果用户使用任何第三方程序登录或使用服务；<br>"+
		"(c)指尖娱乐发现用户所填的个人资料是不真实的；<br>"+
		"对于用户的违约行为，指尖娱乐在游戏中将根据官方网站上所公布的指尖娱乐的管理制度予以处分,同时指尖娱乐保留追究用户其他责任的权利。<br>"+
		"5.6 用户连续在游戏规定的时间内没有使用指尖娱乐所提供该游戏的服务，则自该游戏规定时间后的24时起，指尖娱乐有权采取措施终止该用户继续使用该服务。<br>"+
		"6.服务的停止和更改<br>"+
		"6.1 发生下列情形之一时，指尖娱乐有权停止或中断向用户提供的服务：<br>"+
		"6.1.1 对于网络设备进行必要的保养及施工<br>"+
		"6.1.2 发生突发性的网络设备故障时<br>"+
		"6.1.3 由于指尖娱乐所用的网络通信设备由于不明原因停止，无法提供服务时<br>"+
		"6.1.4 由于不可抗力因素致使指尖娱乐无法提供线上服务<br>"+
		"6.1.5 由于相关政府机构的要求<br>"+
		"6.1.6 游戏运营合约截止时<br>"+
		"6.2 在本协议约定的情形下，指尖娱乐就停止或更改或终止向用户所提供的服务而可能产生的不便或损害，指尖娱乐对用户本人或任何第三人均不负任何损害赔偿责任。<br>"+
		"6.3 用户应了解并同意，指尖娱乐所提供的服务可能因公司本身、其它合作厂商或相关电信业者网络系统软硬件设备的故障、失灵、或因合作方及相关电信工作人员人为操作的疏失而全部或一部分中断、暂时无法使用、迟延或因他人侵入指尖娱乐系统篡改或伪造变造资料等，造成服务的停止或中断者或用户档案缺失，用户不得要求指尖娱乐提供任何的补偿或赔偿。<br>"+
		"7.风险承担<br>"+
		"用户同意使用指尖娱乐所提供的服务是出于用户个人意愿，并愿自负任何风险，包括但不限于其因使用指尖娱乐服务或自行由深圳市指尖娱乐网络有限公司 官方网站下载游戏或资料图片而导致用户或其所使用的计算机软、硬件的损害，或发生任何资料的流失等。<br>"+
		"8.责任的免除<br>"+
		"8.1 指尖娱乐就其所提供的服务，不负任何明示或默示的担保责任，而其所提供的服务的稳定、安全、无误及不中断性亦有可能因第6条所述情形而受到影响。用户应自行承担使用执行服务所有的风险及因此可能导致的损害，包括而不限于其因执行线上游戏或自行由深圳市指尖娱乐网络有限公司 官方网站下载游戏或资料图片而导致用户或其所使用的计算机系统非因指尖娱乐主观原因造成的损害，或发生任何资料的流失等。<br>"+
		"8.2 指尖娱乐对其服务不保证不出现任何程序BUG,并对由此可能产生的问题不承担任何赔偿责任。<br>"+
		"9.赔偿责任的排除及限制<br>"+
		"指尖娱乐对于用户使用其服务或无法使用网络所导致的任何直接、间接、衍生的损害或所失利益不负任何损害赔偿责任。若依法无法完全排除损害赔偿责任时，指尖娱乐的赔偿责任亦以用户就使用服务所支付指尖娱乐的价款为限。<br>"+
		"10.链接<br>"+
		"指尖娱乐在深圳市指尖娱乐网络有限公司 网站的所有网页上所提供的所有链接，可能链接到其它个人、公司或组织的网站，提供该等网站的目的，是便利用户自行搜寻或取得信息，指尖娱乐对于被链接的个人、公司或组织的网站所提供的产品、服务或信息，不担保其真实性、完整性、实时性或可信度、这些个人、公司或组织与指尖娱乐间亦不存在任何雇用、委任、代理、合伙或其它类似的关系。<br>"+
		"11.指尖娱乐的终止权<br>"+
		"用户应确实遵守本服务条款及有关法律命令的规定。指尖娱乐对于用户是否违反服务条款有最终决定权。若指尖娱乐经相关数据分析认定用户违反服务条款，用户同意指尖娱乐可以随时终止用户的账号及密码使用权。<br>"+
		"为避免争议，本协议涉及到的有关技术方面的问题，用户同意以指尖娱乐系统所记载的数据作为判断标准，指尖娱乐保证该数据的真实性且该数据未经政府有关部门要求，不向包括用户在内的任何人披露，以保护指尖娱乐的商业安全。该检测数据是唯一的、排他的结果<br>"+
		"12.损害赔偿<br>"+
		"用户若违反服务条款或相关法令，导致指尖娱乐、或其关系企业、受雇人、受托人、代理人或/及其它相关履行辅助人因此而受到损害或支出费用（包括但不限于由法律诉讼、行政程序等所支出的诉讼费用、律师费用、实际遭受损失的费用等），用户应负担损害赔偿责任。<br>"+
		"13.停止或变更服务<br>"+
		"13.1 指尖娱乐根据本协议取消或停止用户的资格或加以限制，用户不得要求补偿或赔偿。<br>"+
		"13.2 指尖娱乐有权仅根据其判断，单方决定新增、修改、删除、暂停或终止其所提供的全部或部分服务（包括且不限于增加、暂停或终止某个游戏的运营），且无需另行个别通知用户，用户不得因此要求任何补偿或赔偿。<br>"+
		"14.广告信息或促销计划<br>"+
		"指尖娱乐在提供服务过程中可能在有关网站位置上可能刊登商业广告、或其它活动促销的广告。这些内容系广告商或商品服务提供者所为，指尖娱乐仅是刊登内容的媒介。用户通过深圳市指尖娱乐网络有限公司 官方网站或其所链接的网站所购买的服务或商品，其交易行为仅存于用户与该商品或服务的提供者之间，与指尖娱乐无关。<br>"+
		"15.服务条款的修改<br>"+
		"由于用户及市场状况的不断变化，指尖娱乐保留随时修改本服务条款的权利，修改本服务条款时，指尖娱乐将于相关网站首页公告修改的事实，而不另对用户进行个别通知。若用户不同意修改的内容，可停止使用指尖娱乐的服务。若用户继续使用指尖娱乐的服务，即视为用户业已接受指尖娱乐所修订的内容。<br>"+
		"16.个别条款的效力<br>"+
		"本服务条款所定的任何条款的一部或全部无效者，不影响其它条款的效力。<br>"+
		"17.适用法律<br>"+
		"本服务条款的解释，效力及纠纷的解决，适用于中华人民共和国法律。<br>"+
		"若用户和指尖娱乐之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户在此完全同意将纠纷或争议提交指尖娱乐所在地法院管辖。<br>"+
		"18.青少年用户特别提示<br>"+
		"青少年用户必须遵守全国青少年网络文明公约：要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。<br>"+
		"19.用户身份的取消<br>"+
		"任何注册账户有如下任意一种或多种行为而导致该账号被取消，指尖娱乐不承担任何责任：<br>"+
		"有违反服务条款的行为。<br>"+
		"滥用所享受的权利。<br>"+
		"提供虚假注册信息。<br>"+
		"通过不正当手段使用指尖娱乐服务。<br>"+
		"有损害其他用户的行为。<br>"+
		"违反中国的法律、法规。<br>"+
		"违背社会风俗和社会道德的行为。<br>"+
		"其他违反本协议约定的行为。<br>"+
		"20.您可以通过联络指尖娱乐。遇有任何问题指尖娱乐将尽速为你处理。如果你对这些条款有任何疑问，可以询问指尖娱乐的客服部门。为了用户的利益，请你认真填写正确用户的email地址和身份证号码，以便指尖娱乐更好地为你服务。<br>"+
		"本条款最终解释权归深圳市指尖娱乐网络有限公司 所有。";
		this.contentMehe="隐私保护指引<br>"+
		"前言：<br>"+
		"本《用户注册服务协议》（以下简称“本协议”）是由您（以下称为“ 用户”或“乙方”，在本协议第一部分《文化部网络游戏服务格式化协议必备条款》中，又称为“乙方”）与深圳市墨和科技有限公司（以下称为“墨和游戏”或“甲方”，在本协议第一部分中《文化部网络游戏服务格式化协议必备条款》中，又称为“甲方”）就墨和游戏所提供的移动游戏产品和服务（包括墨和游戏的网站以及墨和游戏现在正在提供和将来可能向用户提供的移动游戏服务和其他网络服务，以下统称为“ 产品和服务”）所订立的协议。<br>"+
		"如果用户进入墨和游戏网站或其下游戏的用户注册页面，确认已经阅读、同意本协议的条款并完成注册，或者通过其他任何方式获得和使用墨和游戏所提供的产品和服务，则视为用户已经详细阅读了本协议的内容，同意遵守本协议的约定。用户不应再以不了解本协议内容为由拒绝履行本协议。因此，请用户务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、管辖与法律适用条款，以及开通或使用某项服务的单独协议。限制、免责条款及其他需要用户重点阅读的条款内容，墨和游戏将以橙色加粗形式提示用户重点注意。因此，为保障用户的权益，请于注册使用墨和游戏所提供的各种产品和服务之前，仔细阅读本协议全文。此外，依据本协议第十六条，墨和游戏有权不时对本协议进行修改与更新，您同意将随时留意查看本协议的最新版本。<br>"+
		"第一部分 文化部网络游戏服务格式化协议必备条款<br>"+
		"1.帐号注册<br>"+
		"1.1 乙方承诺以其真实身份注册成为甲方的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。<br>"+
		"1.2 乙方以其真实身份注册成为甲方用户后，需要修改所提供的个人身份资料信息的，甲方应当及时、有效地为其提供该项服务。<br>"+
		"2.用户帐号使用与保管<br>"+
		"2.1 根据必备条款的约定，甲方有权审查乙方注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户帐号的安全、有效；乙方有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。任何一方未尽上述义务导致帐号密码遗失、帐号被盗等情形而给乙方和他人的民事权利造成损害的，应当承担由此产生的法律责任。<br>"+
		"2.2乙方对登录后所持帐号产生的行为依法享有权利和承担责任。<br>"+
		"2.3 乙方发现其帐号或密码被他人非法使用或有使用异常的情况的，应及时根据甲方公布的处理方式通知甲方，并有权通知甲方采取措施暂停该帐号的登录和使用。<br>"+
		"2.4 甲方根据乙方的通知采取措施暂停乙方帐号的登录和使用的，甲方应当要求乙方提供并核实与其注册身份信息相一致的个人有效身份信息。<br>"+
		"2.4.1 甲方核实乙方所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停乙方帐号的登录和使用。<br>"+
		"2.4.2 甲方违反2.4.1款项的约定，未及时采取措施暂停乙方帐号的登录和使用，因此而给乙方造成损失的，应当承担其相应的法律责任。<br>"+
		"2.4.3 乙方没有提供其个人有效身份证件或者乙方提供的个人有效身份证件与所注册的身份信息不一致的，甲方有权拒绝乙方上述请求。<br>"+
		"2.5 乙方为了维护其合法权益，向甲方提供与所注册的身份信息相一致的个人有效身份信息时，甲方应当为乙方提供帐号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。<br>"+
		"3.服务的中止与终止<br>"+
		"3.1乙方有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，甲方应当立即终止对乙方提供服务。<br>"+
		"3.2乙方在接受甲方服务时实施不正当行为的，甲方有权终止对乙方提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于甲方事先明确告知的应被终止服务的禁止性行为，否则，甲方不得终止对乙方提供服务。<br>"+
		"3.3乙方提供虚假注册身份信息，或实施违反本协议的行为，甲方有权中止对乙方提供全部或部分服务；甲方采取中止措施应当通知乙方并告知中止期间，中止期间应该是合理的，中止期间届满甲方应当及时恢复对乙方的服务。<br>"+
		"3.4 甲方根据本条约定中止或终止对乙方提供部分或全部服务的，甲方应负举证责任。<br>"+
		"4.用户信息保护<br>"+
		"4.1 甲方要求乙方提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向乙方公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护乙方的个人信息资料的安全。<br>"+
		"4.2未经乙方许可甲方不得向任何第三方提供、公开或共享乙方注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：<br>"+
		"4.2.1 乙方或乙方监护人授权甲方披露的；<br>"+
		"4.2.2 有关法律要求甲方披露的；<br>"+
		"4.2.3 司法机关或行政机关基于法定程序要求甲方提供的；<br>"+
		"4.2.4 甲方为了维护自己合法权益而向乙方提起诉讼或者仲裁时；<br>"+
		"4.2.5 应乙方监护人的合法要求而提供乙方个人身份信息时。<br>"+
		"第二部分：产品与服务用户条款<br>"+
		"一、服务内容<br>"+
		"1.墨和游戏产品和服务的具体内容由墨和游戏根据实际情况提供，例如网络游戏、论坛（BBS）、聊天室、电子邮件等。墨和游戏保留随时变更、中断或终止部分或全部产品和服务的权利。<br>"+
		"2. 墨和游戏在提供产品和服务时，可能会对部分用户收取一定的费用。在此情况下，相关页面上会有明确的提示。如用户不同意支付该等费用，可选择不接受相应的产品和服务。<br>"+
		"3. 墨和游戏通过服务器端设备接入互联网为用户提供产品和服务，除此之外与产品和服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。<br>"+
		"4. 用户应使用正版软件接受产品和服务，软件费用由用户自行负担。<br>"+
		"二、帐号名称和密码<br>"+
		"1. 用户阅读并同意本协议，成功完成注册后，即成为墨和游戏的注册用户，取得墨和游戏用户帐号（以下称“墨和游戏帐号”）。墨和游戏帐号名称在注册之后不可变更，而帐号对应的密码则可以通过墨和游戏提供的客户服务进行修改。<br>"+
		"2. 用户有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。为保护用户帐号及密码的安全，墨和游戏将采取技术与管理等措施保障用户帐号的安全、有效，但这并不能免除或者减轻用户妥善保管其帐号及密码，并正确、安全地使用其帐号及密码的义务。禁止将墨和游戏帐号或密码销售、转让或出借、共享给他人使用。用户未尽本款义务导致帐号密码遗失、帐号被盗等情形而给用户、墨和游戏及其关联公司和第三方的民事权利造成损害的，应当承担由此产生的法律责任，墨和游戏不承担任何责任。<br>"+
		"3. 用户发现其墨和游戏帐号或密码被他人非法使用或有使用异常情况的，应及时根据墨和游戏不时公布的处理方式通知墨和游戏，并有权请求墨和游戏采取措施暂停该帐号的登录和使用。墨和游戏根据用户身份核对结果，决定是否暂停用户帐号的登录和使用。<br>"+
		"三、帐号注册信息<br>"+
		"1. 提供注册信息<br>"+
		"（1）在申请墨和游戏帐号时（或注册后补充信息时），用户应当向墨和游戏提供最新、详细及真实准确的个人注册信息。前述个人注册信息包括：用户的墨和游戏帐号名称、密码及注册墨和游戏帐号（或补充、更新帐号信息时）输入的所有信息。用户在此承诺：用户以其真实身份注册成为墨和游戏的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。<br>"+
		"（2）所有由用户提供的个人注册信息将可能被墨和游戏用来作为认定墨和游戏帐号的关联性以及辨别用户身份的依据。用户同意应墨和游戏的要求，随时提供该等信息的证明材料，以便墨和游戏核实用户身份。<br>"+
		"（3）如果用户提供给墨和游戏的信息不准确，或不真实，或不合法有效，或已变更而未及时更新，或有任何误导之嫌，墨和游戏有权中止或终止该用户使用墨和游戏的任何服务，直至用户提供符合要求信息。墨和游戏有权审查用户注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户帐号的安全、有效；用户有义务妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。任何一方未尽上述义务导致帐号密码遗失、帐号被盗等情形而给对方或他人的权利造成损害的，应当承担由此产生的法律责任。<br>"+
		"2. 修改注册信息<br>"+
		"用户可以在任何时间，通过墨和游戏官方网站在该时点提供的服务或墨和游戏公布的在该时点可用的其他途径，更新或修改用户申请注册时所提供的信息。墨和游戏应当及时、有效地为其提供该项服务。但是，用户在注册墨和游戏帐号时（或注册后补充信息时）填写的真实姓名、证件号码，以及墨和游戏帐号名称本身，在帐号注册成功后（或补充信息后）如无特殊原因将无法进行修改，请用户慎重填写各类注册信息。<br>"+
		"3. 用户同意，与其墨和游戏帐号相关的一切资料、数据和记录（包括但不限于登录记录、登录后行为记录、点卡信息等）均以墨和游戏系统记录的数据为准。<br>"+
		"四、信息披露与保护<br>"+
		"1. 本协议第三条所描述的注册信息，以及用户在使用产品和服务时存储在墨和游戏控制范围内的非公开信息（以下合称“用户信息”），应按照本条约定进行披露及保护。<br>"+
		"2. 用户理解并同意，为了向用户提供更好的产品和服务，在用户自愿选择使用墨和游戏的产品和服务的情况下，或者明示同意提供信息的情况下，墨和游戏可能会收集用户信息，并可能对这些信息进行分析和整合。用户理解并同意，在用户使用墨和游戏的产品和服务时，服务器可能会自动记录部分用户信息，这些信息都将成为墨和游戏商业秘密的一部分。<br>"+
		"3. 保护用户（特别是未成年人用户）的隐私是墨和游戏的一项基本原则。墨和游戏一贯积极地采取技术与管理等方面的合理措施保障用户信息的安全、保密。<br>"+
		"4. 除本款所列除外情形之外，墨和游戏保证不对外公开或向第三方披露、提供姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息。除外情形如下：<br>"+
		"（1）用户（或者用户的监护人）要求或同意墨和游戏披露用户信息；<br>"+
		"（2）有关法律法规要求墨和游戏披露用户信息；<br>"+
		"（3）司法机关或行政机关基于法定程序要求墨和游戏披露用户信息；<br>"+
		"（4）为保护墨和游戏的合法权益（知识产权和其他权益）向用户提起诉讼或者仲裁时需要披露用户信息；<br>"+
		"5. 为了向用户正常地提供产品和服务，墨和游戏可能需要向墨和游戏的技术服务商、墨和游戏的关联公司或其他第三方传送部分用户信息，在这些第三方承诺其将承担至少与墨和游戏同等的保密义务的前提下，墨和游戏将向这些第三方传送用户信息，用户对此予以理解和同意。<br>"+
		"6. 在不透露单个用户隐私资料的前提下，墨和游戏有权对整个用户信息数据库进行技术分析并对已进行分析、整理后的用户数据库进行商业上的利用。<br>"+
		"7. 墨和游戏将采取商业上合理可行的方式保护用户的个人信息的安全。墨和游戏使用通常可以获得的安全技术和程序来保护用户的个人信息不被未经授权地访问、使用或泄漏。<br>"+
		"五、用户的基本权利<br>"+
		"1. 用户可以根据本协议以及墨和游戏不时公布和变更的其他规则使用墨和游戏提供的产品和服务。<br>"+
		"2. 用户可以自愿选择通过手机绑定墨和游戏提供的页面，从而在第一时间获得墨和游戏提供的游戏活动、优惠信息等内容。<br>"+
		"3. 用户有权在使用墨和游戏提供的产品和服务期间监督墨和游戏及墨和游戏的工作人员是否按照墨和游戏所公布的标准向用户提供产品和服务，也可以随时向墨和游戏提出与产品和服务有关的意见和建议。<br>"+
		"4. 如果用户不同意本协议条款，或对墨和游戏后来修改、更新的条款有异议，或对墨和游戏所提供的产品和服务不满意，用户可以随时选择停止使用墨和游戏的产品和服务。如果用户选择停止使用墨和游戏的产品和服务，墨和游戏不再对用户承担任何义务和责任。<br>"+
		"六、用户行为守则<br>"+
		"1. 用户同意按照包括本协议在内的、墨和游戏不时发布或变更的各类规则规范自己的行为，从而接受并使用墨和游戏的产品和服务。用户对登录后其所持帐号产生的行为依法享有权利和承担责任。用户进一步同意，在违反这些规则时，按照本协议第六条第14款、第15款、第十四条及其他相关条款的规定承担违规后果和违约责任。<br>"+
		"2. 用户在使用墨和游戏帐号期间，须遵守与互联网信息发布相关的法律、法规及通常适用的互联网一般道德和礼仪的规范，用户将自行承担用户所发布的信息内容的责任。用户发布的各类信息，不得包含以下内容：<br>"+
		"（1）违背宪法所确定的基本原则的；<br>"+
		"（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>"+
		"（3）损害国家荣誉和利益的；<br>"+
		"（4）煽动民族仇恨、民族歧视，破坏民族团结的；<br>"+
		"（5）破坏国家宗教政策，宣扬邪教和封建迷信的；<br>"+
		"（6）散布谣言，扰乱社会秩序，破坏社会稳定的；<br>"+
		"（7）传播淫秽、色情、赌博、暴力、凶杀、恐怖信息或者教唆犯罪的；<br>"+
		"（8）侮辱、诽谤或恶意用言语攻击他人，侵害他人合法权益的；<br>"+
		"（9）侵犯任何第三者的知识产权或公众／私人权利的；<br>"+
		"（10）违反人文道德、风俗习惯的；<br>"+
		"（11）破坏游戏正常秩序的；<br>"+
		"（12）含有法律、行政法规禁止的其他内容的。<br>"+
		"3. 用户的墨和游戏帐号名称及游戏中的人物、帮派等名称应当遵守合法、健康的原则，不允许使用包括但不限于涉及种族、宗教、政治、国家领导人、淫秽、低俗、诽谤、恐吓、欺诈性的、攻击性的、污辱性的、可能引起误会的、违禁药品等内容的名称。<br>"+
		"4. 用户应当对自己在游戏中的言行负责，尤其不得：<br>"+
		"（1）通过任何方式、行为散布或传播低俗、不雅信息；<br>"+
		"（2）通过任何方式、行为冒充平台或游戏系统向其他用户散布或传播虚假信息；<br>"+
		"（3）通过任何方式或途径引起纷争；<br>"+
		"（4）通过任何方式、行为散布或传播、使用私服、木马、外挂、病毒及此类信息；<br>"+
		"（5）通过任何方式、行为散布或传播代练的信息；<br>"+
		"（6）通过任何方式、行为传播或进行除墨和游戏提供的交易途径之外的游戏帐号、虚拟货币、虚拟道具的线下交易；<br>"+
		"（7）大量传播相同的、类似的短语或无意义的文字，或者任何与墨和游戏平台及其游戏无关的信息；<br>"+
		"（8）宣扬、鼓动任何游戏虚拟世界之外的暴力行为；<br>"+
		"（9）泄露其它用户、非用户或墨和游戏平台员工的任何游戏世界和现实世界信息；<br>"+
		"（10）宣传或发布违法信息、违反社会公德的信息，或不利于精神文明建设的信息，包括但不限于色情、赌博、邪教、恐怖主义等内容；<br>"+
		"（11）通过任何方式、行为散布任何种类的广告信息及广告链接；<br>"+
		"（12）发布诋毁或攻击墨和游戏的言论或信息；<br>"+
		"（13）其他不符合法律法规、社会公德或游戏规则的言论或行为。<br>"+
		"5. 用户不得干扰、阻碍墨和游戏正常地提供产品和服务，尤其不得：<br>"+
		"（1）攻击、侵入墨和游戏的网站服务器或使网站服务器过载；<br>"+
		"（2）破解、修改墨和游戏提供给用户下载的客户端程序；<br>"+
		"（3）攻击、侵入墨和游戏的游戏服务器或游戏服务器端程序或使游戏服务器过载；<br>"+
		"（4）不合理地干扰或阻碍他人使用墨和游戏所提供的产品和服务；<br>"+
		"（5）利用程序的漏洞和错误（Bug）破坏游戏的正常进行或传播该漏洞或错误（Bug）；<br>"+
		"（6）直接或间接利用游戏Bug（包括游戏系统、程序、设定等方面存在的漏洞或不合理的现象）、程序漏洞获利或扰乱游戏秩序，或者利用Bug、漏洞达到个人目的；<br>"+
		"（7）制作、使用、发布、传播任何形式的妨碍游戏公平性的辅助工具或程序（指用于在游戏中获取优势，但不属于墨和游戏平台或各游戏软件的一部分的任何文件或程序），包括作弊性质的外挂以及相关辅助性质的外挂等（包括但不限于自动打怪、自动练级、自动吃药、自动完成任务、加速性质或超出游戏设定范围等操作）；<br>"+
		"（8）不得修改客户端程序，使之改变或者新增或者减少墨和游戏所预先设定的功能，或者导致客户端向服务器发送的数据出现异常的一切行为。<br>"+
		"（9）不得通过反向编译等手段，获取客户端程序源代码。<br>"+
		"6. 用户不得扰乱游戏秩序，尤其不得：<br>"+
		"（1）长时间停留在特殊地点或敏感地区（包括但不限于活动报名人、“移民使者”、传送人、传送点等处），干扰其他用户游戏；<br>"+
		"（2）进行恶意PK、敲诈、勒索等行为；<br>"+
		"（3）扬言进行或煽动其他用户或非用户参与非正常游戏内容的行为（包括但不限于游行、聚众闹事等）；<br>"+
		"（4）以相似昵称的人物冒充他人好友、冒充NPC或官方角色等方式在游戏内外进行欺诈。<br>"+
		"7. 用户可以与游戏管理员（以下称为“GM”）进行交流，但在与GM交流时，不得做出以下行为：<br>"+
		"（1）冒充系统或GM；<br>"+
		"（2）欺骗或试图欺骗GM，包括但不限于误导GM、拒绝提供信息、提供虚假信息以及任何试图“诈骗”GM的行为；<br>"+
		"（3）违反或忽视GM做出的提示。在游戏中，为了确保大多数用户的共同利益，维护正常的游戏秩序，GM可能会提示用户执行某些操作或停止执行某些操作，用户不得忽视或阻挠该项工作的进行；<br>"+
		"（4）干扰GM工作。干扰GM工作包括但不限于：向GM索取任何游戏虚拟物品（包括但不限于虚拟货币、游戏道具等），频繁呼叫GM或发送无实质性内容的请求，反复向GM发送已解答或解决问题的帮助请求；<br>"+
		"（5）辱骂、威胁或恶意攻击GM。<br>"+
		"8. 用户必须保管好自己的帐号和密码，由于用户的原因导致帐号和密码泄密而造成的后果均将由用户自行承担。<br>"+
		"9. 用户仅能以个人身份使用墨和游戏所提供的产品和服务，用户不能利用墨和游戏所提供的产品和服务从事商业目的的活动，也不能利用墨和游戏的产品和服务进行销售或其他商业目的的活动。<br>"+
		"10. 除非获得墨和游戏的书面许可，否则，用户不得利用墨和游戏的任何产品和服务及其任何内容牟取商业利益，包括但不限于充当游戏道具交易中介收取中介费，以营利为目的销售游戏道具等。<br>"+
		"11. 用户不得利用墨和游戏提供的产品和服务从事以下活动：<br>"+
		"（1）未经允许，进入计算机信息网络系统或者使用计算机信息网络系统资源的；<br>"+
		"（2）未经允许，对计算机信息网络功能进行删除、修改或者增加的；<br>"+
		"（3）未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；<br>"+
		"（4）故意制作、传播计算机病毒等破坏性程序的；<br>"+
		"（5）其他危害计算机信息网络安全的行为。<br>"+
		"12. 用户同意以游戏程序中的监测数据作为判断用户是否有通过使用外挂程序等方法进行的游戏作弊行为的依据。<br>"+
		"13. 如果墨和游戏发现用户行为或者数据异常，可以观察及记录该用户行为，并以观察和记录的结果作为判断用户是否实施了违反本协议用户行为守则的依据。墨和游戏积极保护用户的帐号、虚拟物品及虚拟货币的安全，为此，墨和游戏对盗号及盗号相关行为展开严厉的打击。墨和游戏发现或者怀疑存在包括但不限于以下的盗号及盗号相关行为时，有权视情况按照本协议第六条第14款、第15款、第16款、第十四条及其他相关条款的规定处理，同时，墨和游戏保留进一步追诉的权利：<br>"+
		"（1）盗取帐号；<br>"+
		"（2）盗取虚拟物品；<br>"+
		"（3）盗取虚拟货币；<br>"+
		"（4）盗取帐号或/及密码；<br>"+
		"（5）异常IP下的物品转移；<br>"+
		"（6）其他盗号及盗号相关行为。<br>"+
		"为了维护游戏的公平与秩序，即使用户没有主动的参与盗号，但是用户的物品来源于盗号或者盗号相关行为的，墨和游戏也有权自行判断回收、冻结涉及盗号的物品及帐号。用户应该配合墨和游戏对盗号及盗号相关行为的调查。用户应该自觉维护游戏的秩序，墨和游戏发现或者怀疑存在虚假的盗号投诉时，有权视情况按照本协议第六条第14款、第15款、第16款、第十四条及其他相关条款的规定处理。<br>"+
		"14. 若用户实施违反本条所述用户行为守则的行为，墨和游戏有权视行为严重程度，向该用户施加以下一项或若干项违规后果，该用户应承担该等不利后果：<br>"+
		"（1）警告：警告是针对轻微违反游戏政策而做出的教育导向，它是用于正常管理游戏运行的一种方式。<br>"+
		"（2）禁言：关闭违规用户的部分或全部聊天频道，强制暂停违规用户角色的线上对话功能，使该角色无法与其他用户对话，直到此次处罚到期或是取消。<br>"+
		"（3）强制离线：强制让违规用户离开当前游戏，结束该用户当前游戏程序的执行。<br>"+
		"（4）封停帐号：暂停或永久终止违规用户使用墨和游戏帐号登录某款游戏的权利。<br>"+
		"（5）暂时隔离：将违规用户的游戏角色转移至特殊游戏场景，限制其局部游戏操作，直到此次处罚到期或是取消。<br>"+
		"（6）删除档案：将违规用户在某个游戏世界中的人物档案删除，不让该人物再出现在游戏世界。<br>"+
		"（7）删除帐号：永久终止违规用户通过墨和游戏帐号登录墨和游戏平台的权利，包括但不限于用户注册信息、角色信息、等级物品、游戏货币等游戏数据库中的全部数据都将被永久封禁。<br>"+
		"（8）收回游戏虚拟物品：对于违规用户因欺诈或其他违规行为而获取的游戏虚拟物品，包括但不限于游戏虚拟货币、虚拟物品，进行收回。<br>"+
		"我:<br>"+
		"（9）修改名称：强制修改违规用户论坛昵称、游戏人物或帮派等的名称。<br>"+
		"（10）解散组织：解散违规用户成立的帮派、公会等组织。<br>"+
		"（11）倒扣数值：针对游戏角色游戏数值进行扣除，包括但不限于游戏角色等级、金钱、经验等。<br>"+
		"（12）封禁IP：暂时或永久禁止违规用户在某一异常IP登录某款游戏的某个服务器。<br>"+
		"（13）承担法律责任：违规用户的不当行为对他人或者墨和游戏造成损害，或者与现行法律规定相违背的，违规用户应依法承担相应的民事、行政和／或刑事责任，例如，用户在进行游戏过程中侵犯第三方知识产权或其他权利而导致被权利人索赔的，由用户直接承担责任。<br>"+
		"15．为了保障全体遵守游戏规则的玩家利益，维护墨和游戏提供的产品和服务公平和秩序，同时为了保护用户的帐号信息安全，对于用户在任何非墨和游戏事先认可的充值平台充值或进行其他交易的相关行为，墨和游戏将予以严厉打击和处罚。<br>"+
		"一经查证属实，墨和游戏有权视具体情况采取各种处理措施，包括但不限于如下一项或几项：倒扣数值：针对游戏角色游戏数值进行扣除，包括但不限于游戏角色等级、金钱、经验等。<br>"+
		"1、警告、冻结或倒扣数值（数值包括但不限于游戏角色等级、虚拟货币、道具、装备、经验值等）<br>"+
		"2、暂时禁止登录、永久禁止登录等处理;<br>"+
		"3、因非法充值导致充值未到帐、虚拟货币、道具未发放的问题，墨和游戏不予补偿。<br>"+
		"16．若用户实施违反本条所述用户行为守则的行为，墨和游戏还有权要求违规用户向墨和游戏承担违约责任，包括但不限于恢复原状，消除影响，对给墨和游戏造成的直接及间接损失或额外的成本支出进行赔偿，以及在墨和游戏首先承担了因违规用户行为导致的行政处罚或侵权损害赔偿责任后，由墨和游戏向违规用户追偿。<br>"+
		"七、游戏管理<br>"+
		"1. 游戏管理员<br>"+
		"（1）游戏管理员即GM（Game Master），指维护和管理游戏虚拟世界秩序的墨和游戏在线工作人员。<br>"+
		"（2）GM不会干预游戏的正常秩序，不会以任何方式索要用户的个人资料和密码，不负责解决用户之间的私人纠纷或回答游戏的攻略、诀窍等问题。<br>"+
		"（3）用户在游戏中应当尊重、理解并配合GM的工作，如有任何意见，应通过专用信箱向客户服务中心申诉和举报。<br>"+
		"2. 游戏信息转移。墨和游戏有权根据产品和服务的提供状况，安排拆分或合并游戏服务器。在对用户游戏权益没有实质性损害的情况下，墨和游戏有权将用户在游戏中的人物信息、角色档案转移到其它游戏服务器。<br>"+
		"3. 家长监护系统。墨和游戏遵从国家政策，针对某些特定的游戏开设“未成年人家长监护系统”，若父母（监护人）同意未成年人（尤其是十岁以下子女）使用产品和服务，必须以父母（监护人）名义申请注册墨和游戏帐号。在使用产品和服务时，父母（监护人）应以监护人身份判断产品和服务是否适合未成年人。如果用户未满18周岁（或墨和游戏无法识别用户的年龄），则用户将受到“未成年人家长监护系统”的约束。墨和游戏将有权根据有关规则以及家长的要求，对用户创建或使用墨和游戏帐号关联的游戏帐号进行限制，包括但不限于临时或永久冻结帐号，部分或者全部终止提供墨和游戏各项产品和服务。<br>"+
		"4. 防沉迷系统<br>"+
		"（1）如果用户未满法定年龄（或墨和游戏无法识别用户的年龄），则用户在游戏内的活动将受到“游戏防沉迷系统”监测；如果用户拥有一个以上墨和游戏帐号，则该“游戏防沉迷系统”将同时适用于该用户的所有墨和游戏帐号；<br>"+
		"（2）“游戏防沉迷系统”通过按照连续游戏时间来逐级扣减游戏内收益的方式，对用户长时间连续游戏的行为进行规制；<br>"+
		"（3）用户需提供真实完整的信息以便墨和游戏识别用户的身份并向有关部门提交实名认证信息，如因提供的资料不真实而产生的后果由用户自行承担。<br>"+
		"5. 在现有的技术条件下，墨和游戏将尽合理的商业努力并根据有关监管部门的要求开发并维护“未成年人家长监护系统”、“游戏防沉迷系统”与实名认证系统，按“现状”提供给用户使用。由于技术不可避免的局限性以及系统运作各环节受外界的影响，墨和游戏不保证各系统不存在任何漏洞，不保证各系统能随时正常运作，亦不保证监护或认证效果完全正确真实或满足用户的需求。墨和游戏不提供任何适用法律明确规定之外的明示或默示担保，不对此承担任何责任。<br>"+
		"八、资费政策<br>"+
		"1. 墨和游戏产品和服务的收费信息以及有关的资费标准、收费方式、购买方式及其他有关资费政策的信息，在墨和游戏相关平台或游戏网站（包括但不限于www.13yx.com和相应游戏官方网站等网站）上作出说明。<br>"+
		"2. 墨和游戏有权决定墨和游戏所提供的产品和服务的资费标准和收费方式，墨和游戏可能会就不同的产品和服务制定不同的资费标准和收费方式，也可能按照墨和游戏所提供的产品和服务的不同阶段确定不同的资费标准和收费方式。另外，墨和游戏也可能不时地修改墨和游戏的资费政策。墨和游戏会将有关产品和服务的收费信息以及与该产品和服务有关的资费标准、收费方式、购买方式或其他有关资费政策的信息放置在该产品和服务相关网页的显著位置。<br>"+
		"3. 对于墨和游戏的收费产品和服务，用户应该按照墨和游戏确定的资费政策购买墨和游戏的产品和服务。如果用户未按墨和游戏确定的资费政策购买墨和游戏的产品和服务，墨和游戏可以立即停止向用户提供该产品和服务。<br>"+
		"4. 除非法律另有明文规定，否则用户不得要求墨和游戏返还用户已经支付予墨和游戏的任何资费（以下简称“退款”），无论该等资费是否已被消费。墨和游戏有权决定是否、何时、以何种方式向用户退款。墨和游戏同意退款的，用户应补偿支付时使用信用卡、手机等支付渠道产生的费用，墨和游戏有权在返还用户的资费中直接扣收。墨和游戏在产品和服务提供过程中赠送的充值金额、虚拟货币、虚拟道具等，不予退款或变现。<br>"+
		"九、虚拟物品<br>"+
		"1. 墨和游戏提供的产品和服务（包括但不限于游戏平台、游戏、论坛）中的各种虚拟物品，不限于金币、银两、道具、装备等，其所有权归墨和游戏或其合作方所有。用户只能在合乎法律和游戏规则的情况下拥有对虚拟物品的使用权。用户一旦购买了虚拟道具的使用权，将视为已经进入消费过程，不得以任何理由要求退还该虚拟道具。<br>"+
		"2. 除服务器大规模断线外，由于地方网络问题、个人操作问题等非可归责于墨和游戏的原因造成的角色被删或回档、虚拟物品或金钱的损失，墨和游戏无需向用户承担任何责任。<br>"+
		"3. 鉴于网上交易的复杂性，除墨和游戏指定的官方交易平台外，墨和游戏禁止用户进行游戏虚拟物品买卖线下交易及线下交易相关行为。墨和游戏反对用户自行进行虚拟物品买卖线下交易及线下交易相关行为（包括但不限于参与线下交易、协助线下交易者操作及转移游戏虚拟物品等一系列行为），并且不保护线下交易产生的任何交易结果，用户之间进行线下交易行为发生的任何问题、纠纷，包括但不限于被虚假交易信息诈骗金钱或者游戏虚拟物品的，均与墨和游戏无关，用户将自行负责，墨和游戏不负责赔偿或追回因受骗造成的损失。<br>"+
		"4. 除墨和游戏指定的官方交易平台外，墨和游戏不认可用户线下交易所产生的交易结果，用户通过线下交易所获得的游戏虚拟物品将被认定为来源不符合游戏规则。墨和游戏有权按照本协议第六条的约定，对线下交易及线下交易相关行为涉及的游戏虚拟物品、游戏角色与墨和游戏帐号采取相应的措施。<br>"+
		"十、服务方式、内容的变动与个人资料转移<br>"+
		"1. 墨和游戏将尽力持续地向用户提供产品和服务，但是墨和游戏，在适用法律许可的最大范围内，并不排除墨和游戏可能会停止提供任何产品和服务的可能性，也不排除任何改变游戏服务或其他网络服务的服务方式、服务内容的可能性。<br>"+
		"2. 为增加并丰富墨和游戏之游戏及其他网络服务的内容，游戏和游戏平台在运行时可能不定期更新并调整其包含的功能。在游戏和游戏平台更新后，一切游戏和游戏平台内的操作、内容、设定，将以游戏和游戏平台中的公告内容为准。<br>"+
		"3. 如果墨和游戏停止提供某一项产品和服务，或改变某一项产品和服务的方式或内容，墨和游戏将会事先通知用户，并尽力寻找适当的服务提供者以接替墨和游戏继续提供产品和服务。<br>"+
		"4. 在本条第3款所述情况下且在适用法律许可的最大范围内，墨和游戏可能会将用户的个人资料（包括有关的帐号和密码信息及个人资料）转移给该继续提供服务的一方。用户在此同意墨和游戏有权做此转移和提供，并且同意在墨和游戏完成转移和提供之后，墨和游戏将不再对用户原有资料承担任何义务和责任。但是，墨和游戏并不保证墨和游戏届时一定能够找到适当的服务提供者或服务方式以代替墨和游戏继续提供产品和服务，也不保证墨和游戏找到的服务提供者后续所提供的产品和服务或者改变的游戏方式能够满足用户的要求。<br>"+
		"十一、服务中断或终止<br>"+
		"1. 如发生下列任何一种情形，墨和游戏有权随时中断或终止向用户提供本协议项下的游戏服务和其他网络服务，对于因而产生的不便和损失，墨和游戏不承担任何责任：<br>"+
		"（1）用户提供的个人资料不真实；<br>"+
		"（2）用户违反本协议中规定的用户行为准则。<br>"+
		"2. 在下列情况下，墨和游戏有权注销用户创造的角色，并删除该角色的所有记录：<br>"+
		"（1）用户注册的游戏角色未达到一定游戏要求，并且在该角色所关联的游戏分区中可用游戏点数或游戏时间为零的情况下，连续一定时间未通过该角色登录过该游戏；<br>"+
		"我:<br>"+
		"（2）用户自行删除的角色，自删除之日起一定时间内没有恢复的；<br>"+
		"（3）用户在注册帐号第一个月时间内或连续6个月时间内，没有使用过此帐号的（包括使用此帐号登录游戏、登录网站或充值）。<br>"+
		"3. 关于墨和游戏所提供的不同产品和服务注销角色的具体条件，请参见各个产品和服务的具体规定，或相关产品和服务的官方网站上的具体规定。<br>"+
		"4. 为了保障游戏及游戏平台网站和服务器的正常运行，墨和游戏需要定期或不定期对游戏及游戏平台网站和服务器进行停机维护，或针对突发事件进行紧急停机维护。因上述情况而造成的正常服务中断、中止，用户予以理解并同意，墨和游戏则有义务尽力避免服务中断并将中断时间限制在最短时间内。<br>"+
		"5. 在适用法律许可的最大范围内， 发生下列情形之一时，为了游戏网站和服务器的持续稳定运行，墨和游戏有权不经提前通知终止或中断游戏服务器所提供之全部或部分服务，对因此而产生的不便或损失，墨和游戏对用户或第三人均不承担任何责任：<br>"+
		"（1）定期检查或施工，更新软硬件等；<br>"+
		"（2）服务器遭受损害，无法正常运作；<br>"+
		"（3）突发性的软硬件设备与电子通信设备故障；<br>"+
		"（4）网络提供商线路或其他故障；<br>"+
		"（5）在紧急情况之下依照法律的规定或为用户及第三者之人身安全；<br>"+
		"（6）第三方原因或其他不可抗力的情形。<br>"+
		"6.在适用法律许可的最大范围内，不管产品和服务由于任何原因终止，用户应采取相应的措施自行处理游戏及游戏平台上的虚拟物品。用户不得因终止服务而要求墨和游戏承担除用户已经购买但尚未使用的游戏虚拟货币以外任何形式的赔偿或补偿责任，包括但不限于因不再能继续使用游戏帐号、游戏内虚拟物品等而要求的赔偿。<br>"+
		"十二、有限保证及免责声明<br>"+
		"1. 对于墨和游戏的产品和服务，墨和游戏仅作本条所述有限保证，该有限保证取代任何文档、包装、或其他资料中的任何其他明示或默示的保证（若有）。<br>"+
		"2. 墨和游戏仅以“现有状况且包含所有错误”的形式提供相关的产品、软件或程序及任何支持服务，并仅保证：<br>"+
		"（1）墨和游戏所提供的产品和服务能基本符合墨和游戏正式公布的要求；<br>"+
		"（2）墨和游戏所提供的相关产品和服务基本与墨和游戏正式公布的服务承诺相符；<br>"+
		"（3）墨和游戏仅在商业上允许的合理范围内尽力解决墨和游戏在提供产品和服务过程中所遇到的任何问题。<br>"+
		"3. 在适用法律允许的最大范围内，墨和游戏明确表示不提供任何其他类型的保证，不论是明示的或默示的，包括但不限于适销性、适用性、可靠性、准确性、完整性、无病毒以及无错误的任何默示保证和责任。<br>"+
		"4. 在适用法律允许的最大范围内，墨和游戏并不担保墨和游戏所提供的产品和服务一定能满足用户的要求，也不担保提供的产品和服务不会被中断，并且不担保产品和服务的及时性、安全性及不受干扰，亦不担保无错误发生，以及信息能准确、及时、顺利地传送。<br>"+
		"5. 用户理解并同意：通过墨和游戏的产品和服务取得的任何信息、资料，是否信任及使用，完全取决于用户自己，并由用户承担由该等信任及使用带来的系统受损、资料丢失以及其它任何风险。墨和游戏对在产品和服务中提及的任何商品购物服务、交易进程、招聘信息，尤其是第三方发出的信息，都不作担保。<br>"+
		"6. 如有系统故障、安全漏洞（Security Vulnerability）、程序缺陷（Bug）、程序出错等问题，墨和游戏有权把游戏的资料还原到一定日期，以维护游戏之平衡。用户不得因此要求补偿或赔偿。<br>"+
		"7. 在适用法律允许的最大范围内，墨和游戏对用户因使用墨和游戏的产品和服务引起的任何间接、偶然、意外、特殊或继起的损害（包括但不限于人身伤害、隐私泄漏、因未能履行包括诚信或合理谨慎在内的任何责任、因过失和因任何其他金钱上的损失或其他损失而造成的损害赔偿）不负责任，这些损害可能来自：用户或他人不正当使用产品和服务、在网上购买商品或类似服务、在网上进行交易、非法使用服务或用户传送的信息有所变动。<br>"+
		"8. 墨和游戏对本协议项下涉及的境内外基础电信运营商的固定及移动通信网络的故障，各类技术缺陷、覆盖范围限制、不可抗力、计算机病毒、黑客攻击、用户所在位置、用户关机、合作方因素、他人故意或过失行为或其他非墨和游戏技术能力范围内的原因造成的服务中断、用户发送的数据或短信息的内容丢失、出现乱码、错误接收、无法接收、迟延接收等等，均不承担责任。<br>"+
		"9. 由于用户个人失误、错误或不当操作导致的任何后果，由用户自行承担责任，墨和游戏不予任何赔偿或补偿。<br>"+
		"十三、知识产权及信息所有权<br>"+
		"1. 墨和游戏通过产品和服务提供的游戏软件（包括具备客户端软件及不具备客户端软件的游戏）、其他软件、信息、作品及资料，其著作权、专利权、商标专用权及其它知识产权，均为墨和游戏或其相应权利人所有。除非事先经 墨和游戏书面合法授权，或法律另有明文规定，任何人不得擅自以任何形式使用、复制、传播、伪造、模仿、修改、改编、翻译、汇编、出版、进行反编译或反汇编等反向工程，否则墨和游戏有权立即终止向用户提供产品和服务，并依法追究其知识产权侵权责任，要求用户赔偿墨和游戏的一切损失。<br>"+
		"2. 用户在使用产品和服务过程中产生并储存于墨和游戏服务器中的任何数据信息（包括但不限于帐号数据信息、角色数据信息、等级物品数据信息等，但用户的姓名、身份证号、电话号码等个人身份数据信息除外）属于游戏或游戏平台的一部分，由墨和游戏所有并进行管理，用户有权在遵守游戏规则的前提下通过墨和游戏指定的途径对属于自身帐号的数据信息进行修改、转移、处分。<br>"+
		"3. 为保证准确及避免争议，本协议涉及到的有关技术方面的数据、信息，用户同意以墨和游戏服务器所储存的数据作为判断标准。墨和游戏保证该数据的真实性。<br>"+
		"十四、损害赔偿<br>"+
		"用户若违反本协议或可适用的法律法规，导致墨和游戏的母公司、子公司、其他关联公司、附属机构及其人员，受雇人、代理人及其他一切相关履行辅助人员因此受到损害或支出任何衍生费用（包括但不限于支付上述法律主体须就用户的违约或违法行为所进行的一切辩护或索偿诉讼及相关和解之法律费用），用户应承担补偿相关费用及支付损害赔偿的责任。<br>"+
		"十五、协议的终止<br>"+
		"用户应遵守本协议及有关法律法规的规定。墨和游戏有权判断用户是否违反本协议。若墨和游戏认定用户违反本协议或任何法律法规，墨和游戏有权在无需向用户进行事先通知的情况之下，立即暂停或终止用户的帐号并删除用户帐号中的所有相关资料、档案及任何记录，以及限制、停止或取消用户的使用资格。<br>"+
		"十六、修改和解释权<br>"+
		"1. 为了向用户及时、更好地提供产品和服务，基于对墨和游戏本身、用户及市场状况不断变化的考虑，在法律最大适用范围内，墨和游戏保留随时修改、新增、删除本协议条款的权利。修改、新增、删除本协议条款时，墨和游戏将于官方网站公告修改、新增、删除的事实，而不另行对用户进行个别通知。若用户不同意墨和游戏所修改、新增、删除的内容，可立即停止使用墨和游戏所提供的服务。若用户继续使用墨和游戏提供的服务，则视同用户同意并接受本协议条款修改、新增、删除后的内容，且不得因此而要求任何补偿或赔偿。<br>"+
		"2. 未经墨和游戏事先书面同意，用户不得转让其在本协议项下的权利或义务。墨和游戏有权通过墨和游戏的子公司或其他关联公司行使其在本协议项下的权利或履行本协议项下的义务。<br>"+
		"3. 墨和游戏保留对本协议条款、产品和服务以及墨和游戏所提供的产品和服务的相关官方网站的最终解释权。<br>"+
		"十七、广告与外部链接<br>"+
		"1. 墨和游戏的产品和服务中可能包含他人的商业广告或其它活动促销的广告。这些内容由广告商或商品／服务提供者提供并承担相应责任，墨和游戏仅提供刊登内容的媒介。用户通过墨和游戏或墨和游戏所链接的网站所购买的该等服务或商品，其交易行为仅存于用户与该等商品或服务的提供者之间，与墨和游戏无关，墨和游戏不就用户与该商品或服务的提供者之间所产生的交易行为承担任何法律责任。<br>"+
		"2.用户可能在使用墨和游戏的产品和服务过程中链接到第三方的站点。第三方的站点不由墨和游戏控制，并且墨和游戏也不对任何第三方站点的内容、第三方站点包含的任何链接、第三方站点的任何更改或更新负责。墨和游戏仅为了提供便利的目的而向用户提供这些到第三方站点的链接，墨和游戏所提供的这些链接并不意味着墨和游戏认可该第三方站点，不意味着墨和游戏担保其真实性、完整性、实时性或可信度。这些个人、公司或组织与墨和游戏间亦不存在任何雇用、委任、代理、合伙或其它类似的关系。用户需要检查并遵守该第三方站点的相关规定。<br>"+
		"3.用户理解并同意墨和游戏通过电子邮件、短信或者其他方式向用户发送产品和服务或其他相关商业信息。<br>"+
		"十八、其他约定<br>"+
		"1. 本协议的订立、效力、解释、履行及争议解决适用中华人民共和国法律。如果本协议的任何内容与法律相抵触，应以法律规定为准。<br>"+
		"2. 本协议的任何条款部分或全部无效的，不影响其它条款的效力。<br>"+
		"3. 如双方就本协议内容或其执行发生任何纠纷，包括但不限于墨和游戏依据本协议对用户进行处罚所产生的合同纠纷或财产性权益侵权纠纷，双方应尽量友好协商解决；协商不成时，用户和墨和游戏一致同意将纠纷交由本协议签订地有管辖权的人民法院管辖。<br>"+
		"4. 本协议于用户完成墨和游戏帐号注册之日在中国深圳市南山区签订并生效。即便用户没有完成墨和游戏帐号注册，但通过其他任何方式获得和使用 墨和游戏所提供的产品和服务的，本协议视为再该用户获得及使用产品和服务之日签订并生效。"
		AgreementExt.__super.call(this);
		this.zOrder=31;
	}

	__class(AgreementExt,'boots.agreement.AgreementExt',_super);
	var __proto=AgreementExt.prototype;
	__proto.createChildren=function(){
		laya.display.Scene.prototype.createChildren.call(this);
		this.createView(AgreementExt.uiView);
		this.html1.style.align="left";
		this.html1.style.color="#79421C";
		this.html1.style.width=550;
		this.html1.style.font="DFYuanW5";
		this.html1.style.fontSize=20;
		this.html1.style.leading=2;
		this.scrp1.vScrollBarSkin="";
		var content=this.content37;
		if(AgreementExt._type==1){
			content=this.contentZhijianYhxy;
			this.yonghuSpe.visible=true;
			this.yinsiSpe.visible=false;
		}
		else{
			this.yonghuSpe.visible=false;
			this.yinsiSpe.visible=true;
			switch (GameCfg.GAMENAME){
				case GameCfg.GAMENAME_zhijianWEB||GameCfg.GAMENAME_FINGERAPP:
					content=this.contentZhijian;
					break ;
				case GameCfg.GAMENAME_NEIWANG:
					content=this.content37;
					break ;
				case GameCfg.GAMENAME_BMH:
					content=this.contentMehe;
					break ;
				case GameCfg.GAMENAME_XIYOUAPK:
					content=this.contentXiYou;
					break ;
				default :
					content=this.contentZhijian;
					break ;
				}
		}
		this.html1.innerHTML=content;
		this.html1.height=this.html1.contextHeight+10;
	}

	__proto.Show=function(){
		this.btnOk.on("click",this,this.onClick);
		this.btnClose.on("click",this,this.onClick);
		Laya.stage.on("resize",this,this.OnResize);
		this.OnResize();
		if (this.parent==null)
			Scene.root.addChild(this);
		this.scrp1.scrollTo(0,0);
	}

	__proto.Hide=function(){
		this.removeSelf();
		this.btnOk.off("click",this,this.onClick);
		this.btnClose.off("click",this,this.onClick);
		Laya.stage.off("resize",this,this.OnResize);
	}

	__proto.onClick=function(evt){
		var obj=evt.currentTarget;
		switch (obj){
			case this.btnOk:
			case this.btnClose:
				this.Hide();
				break ;
			}
	}

	__proto.OnResize=function(){
		if(this.destroyed)
			return;
		this.x=(Laya.stage.width-this.width)/ 2;
		this.y=(Laya.stage.height-this.height)/ 2;
	}

	__getset(0,__proto,'isShow',function(){
		return this.parent !=null;
	});

	__getset(1,AgreementExt,'Ins',function(){
		if(AgreementExt._type==1)
			AgreementExt._ins=new AgreementExt();
		if (AgreementExt._ins==null)
			AgreementExt._ins=new AgreementExt();
		return AgreementExt._ins;
	},laya.ui.View._$SET_Ins);

	AgreementExt.ShowHide=function(type){
		(type===void 0)&& (type=0);
		AgreementExt._type=type;
		if (AgreementExt._ins && AgreementExt._ins.parent){
			AgreementExt._ins.Hide();
			}else {
			AgreementExt.Ins.Show();
		}
	}

	AgreementExt.Hide=function(){
		if (AgreementExt._ins){
			AgreementExt._ins.Hide();
		}
	}

	AgreementExt._ins=null;
	AgreementExt._type=0;
	AgreementExt.uiView={"type":"View","props":{"width":680,"height":820},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"width":680,"skin":"res/ui/image/boot/mainbg_1.png","sizeGrid":"112,115,112,115","height":816},"compId":19,"child":[{"type":"Image","props":{"y":6,"x":17,"width":646,"skin":"res/ui/image/boot/mainbg_2.png","sizeGrid":"85,116,79,119","height":779},"compId":20},{"type":"Image","props":{"y":67,"x":35,"width":609,"skin":"res/ui/image/boot/dikuang_2.png","sizeGrid":"50,50,50,50","height":677},"compId":27},{"type":"Image","props":{"y":-20,"x":-20,"width":720,"skin":"res/ui/image/boot/title_down1.png","sizeGrid":"0,204,0,226","height":81},"compId":21},{"type":"Sprite","props":{"y":34,"x":300,"texture":"res/ui/image/boot/figure_1.png"},"compId":24},{"type":"Button","props":{"y":-10,"x":587,"var":"btnClose","stateNum":1,"skin":"res/ui/image/boot/close1.png"},"compId":25},{"type":"Panel","props":{"y":96,"x":60,"width":560,"var":"scrp1","height":544},"compId":13,"child":[{"type":"HTMLDivElement","props":{"y":5,"x":5,"width":550,"var":"html1","innerHTML":"htmlText","height":535,"runtime":"laya.html.dom.HTMLDivElement"},"compId":30}]},{"type":"Button","props":{"y":660,"x":276,"var":"btnOk","stateNum":1,"skin":"res/ui/image/boot/button_1.png","labelSize":26,"labelFont":"DFYuanW5","labelColors":"#FFDE97","label":"确定"},"compId":29},{"type":"Sprite","props":{"y":-29,"x":218,"var":"yinsiSpe","texture":"res/ui/image/boot/yinsizhengce.png"},"compId":31},{"type":"Sprite","props":{"y":-30.5,"x":218,"var":"yonghuSpe","texture":"res/ui/image/boot/yonghuxieyi.png"},"compId":32}]}],"loadList":["res/ui/image/boot/mainbg_1.png","res/ui/image/boot/mainbg_2.png","res/ui/image/boot/dikuang_2.png","res/ui/image/boot/title_down1.png","res/ui/image/boot/figure_1.png","res/ui/image/boot/close1.png","res/ui/image/boot/button_1.png","res/ui/image/boot/yinsizhengce.png","res/ui/image/boot/yonghuxieyi.png"],"loadList3D":[]};
	return AgreementExt;
})(View)



	/**LayaGameStart**/
	new boot();

})(window,document,Laya);
