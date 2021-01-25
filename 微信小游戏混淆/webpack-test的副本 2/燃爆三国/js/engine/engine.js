
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AutoBitmap=laya.ui.AutoBitmap,BaseTexture=laya.webgl.resource.BaseTexture,BitmapFont=laya.display.BitmapFont;
	var BlendMode=laya.webgl.canvas.BlendMode,Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button;
	var Byte=laya.utils.Byte,CheckBox=laya.ui.CheckBox,ClassTool=laya.debug.tools.ClassTool,ClassUtils=laya.utils.ClassUtils;
	var Clip=laya.ui.Clip,ComboBox=laya.ui.ComboBox,Config=Laya.Config,Dialog=laya.ui.Dialog,Ease=laya.utils.Ease;
	var Event=laya.events.Event,EventData=laya.ani.bone.EventData,EventDispatcher=laya.events.EventDispatcher;
	var FontClip=laya.ui.FontClip,Graphics=laya.display.Graphics,HTMLDivElement=laya.html.dom.HTMLDivElement;
	var HTMLImage=laya.resource.HTMLImage,Handler=laya.utils.Handler,HitArea=laya.utils.HitArea,Image=laya.ui.Image;
	var Input=laya.display.Input,Label=laya.ui.Label,List=laya.ui.List,Loader=laya.net.Loader,Node=laya.display.Node;
	var Panel=laya.ui.Panel,Point$1=laya.maths.Point,Pool=laya.utils.Pool,ProgressBar=laya.ui.ProgressBar,Radio=laya.ui.Radio;
	var RadioGroup=laya.ui.RadioGroup,Rectangle=laya.maths.Rectangle,Render=laya.renders.Render,Resource=laya.resource.Resource;
	var ResourceVersionEx=boots.ResourceVersionEx,Scene=laya.display.Scene,ScrollBar=laya.ui.ScrollBar,Skeleton=laya.ani.bone.Skeleton;
	var Slider=laya.ui.Slider,SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Stage=laya.display.Stage;
	var Tab=laya.ui.Tab,Templet=laya.ani.bone.Templet,Text=laya.display.Text,TextInput=laya.ui.TextInput,Texture=laya.resource.Texture;
	var TimeLine=laya.utils.TimeLine,Tree=laya.ui.Tree,Tween=laya.utils.Tween,UIComponent=laya.ui.UIComponent;
	var UIConfig=Laya.UIConfig,UIUtils=laya.ui.UIUtils,URL=laya.net.URL,View=laya.ui.View,WebGLContext=laya.webgl.WebGLContext;
	var boot=Laya.boot;
Laya.interface('engine.res.IAnimationRes');
Laya.interface('engine.base.pool.IPoolObject');
Laya.interface('engine.ui.interfaces.IGridData');
Laya.interface('engine.ui.interfaces.ICoolDown');
Laya.interface('engine.ui.interfaces.ITipsPanel');
Laya.interface('engine.scene.obj.ISceneObjectBase');
Laya.interface('engine.battle.move.IBattleMoveObj');
Laya.interface('engine.scene.move.IMoveRuleObject');
Laya.interface('engine.base.tile.IMTitleContainer');
Laya.interface('engine.pui.scroll.IScrollTrickCell');
Laya.interface('engine.base.pool.spool.ISimplePool');
Laya.interface('engine.base.interfaceclass.IDestroyObject');
Laya.interface('engine.animation.interfaces.IAnimation','engine.base.interfaceclass.IDestroyObject');
Laya.interface('engine.animation.interfaces.IAnimationGroup','engine.base.interfaceclass.IDestroyObject');
//class engine.base.data.Bean
var Bean=(function(){
	function Bean(){}
	__class(Bean,'engine.base.data.Bean');
	var __proto=Bean.prototype;
	__proto.read=function(_buf){}
	__proto.write=function(_buf){}
	__proto.readBoolean=function(_buf){
		return this.readByte(_buf)!=0;
	}

	__proto.readByte=function(_buf){
		return _buf.readByte();
	}

	__proto.readShort=function(_buf){
		return _buf.readShort();
	}

	__proto.readNumber=function(_buf){
		return _buf.readFloat64();
	}

	__proto.readInt=function(_buf){
		return ByteBufferUtil.readInt(_buf);
	}

	__proto.readLong=function(_buf){
		return ByteBufferUtil.readLong(_buf);
	}

	__proto.readString=function(_buf){
		var tmp=this.readBytes(_buf);
		if (tmp==null){
			return null;
		}
		return tmp.readUTFBytes();
	}

	__proto.readBytes=function(_buf){
		var len=this.readInt(_buf);
		if (len < 1){
			return null;
		}
		return _buf.GetByteArray(0,len);
	}

	__proto.readBean=function(_buf,clazz){
		if (this.readBoolean(_buf)){
			var bean=new clazz();
			bean.read(_buf);
			return bean;
			}else {
			return null;
		}
	}

	__proto.readBeanInList=function(_buf,clazz){
		var bean=new clazz();
		bean.read(_buf);
		return bean;
	}

	__proto.writeBoolean=function(_buf,_v){
		this.writeByte(_buf,_v ? 1 :0);
	}

	__proto.writeByte=function(_buf,_v){
		_buf.writeByte(_v);
	}

	__proto.writeShort=function(_buf,_v){
		_buf.writeShort(_v);
	}

	__proto.writeInt=function(_buf,_v){
		ByteBufferUtil.writeInt(_buf,_v);
	}

	__proto.writeLong=function(_buf,_v){
		ByteBufferUtil.writeLong(_buf,_v);
	}

	__proto.writeString=function(_buf,_v){
		if (_v==null){
			this.writeBytes(_buf,null);
			return;
		};
		var bytes=new ByteArray();
		bytes.writeUTFBytes(_v);
		bytes.pos=0;
		this.writeBytes(_buf,bytes);
	}

	__proto.writeBytes=function(_buf,_v){
		if (_v==null){
			this.writeInt(_buf,0);
			return;
		}
		this.writeInt(_buf,_v.bytesAvailable);
		_buf.writeBytes(_v);
	}

	__proto.writeBean=function(_buf,_bean){
		if (_bean==null){
			this.writeBoolean(_buf,false);
			return;
		}
		this.writeBoolean(_buf,true);
		_bean.write(_buf);
	}

	return Bean;
})()


/**
*切块图结构（一帧由多个切块图组成）
*@author Administrator
*/
//class engine.base.sheet.MSheetDivideFrame
var MSheetDivideFrame=(function(){
	function MSheetDivideFrame(){
		this._imageIdx=0;
		this._dx=NaN;
		this._dy=NaN;
		this._dw=NaN;
		this._dh=NaN;
		this._poiw=NaN;
		this._poih=NaN;
	}

	__class(MSheetDivideFrame,'engine.base.sheet.MSheetDivideFrame');
	var __proto=MSheetDivideFrame.prototype;
	__getset(0,__proto,'poiw',function(){
		return this._poiw;
	});

	__getset(0,__proto,'dw',function(){
		return this._dw;
	});

	__getset(0,__proto,'dx',function(){
		return this._dx;
	});

	__getset(0,__proto,'poih',function(){
		return this._poih;
	});

	__getset(0,__proto,'dh',function(){
		return this._dh;
	});

	__getset(0,__proto,'dy',function(){
		return this._dy;
	});

	__getset(0,__proto,'imageIdx',function(){
		return this._imageIdx;
	});

	MSheetDivideFrame.CreateOne=function(meta,imageIdx){
		var ret=new MSheetDivideFrame();
		ret._imageIdx=imageIdx;
		ret._dx=meta.getInt16();
		ret._dy=meta.getInt16();
		ret._dw=meta.getInt16();
		ret._dh=meta.getInt16();
		ret._poiw=meta.getInt16();
		ret._poih=meta.getInt16();
		return ret;
	}

	return MSheetDivideFrame;
})()


//class engine.scene.obj.MSceneTypeList
var MSceneTypeList=(function(){
	function MSceneTypeList(pooltype,type,refList){
		this._hashList=null;
		this._pooltype=0;
		this._cls=null;
		this._allObjectRefList=null;
		this._pooltype=pooltype;
		this._cls=type;
		this._allObjectRefList=refList;
		this._hashList=new HashList();
	}

	__class(MSceneTypeList,'engine.scene.obj.MSceneTypeList');
	var __proto=MSceneTypeList.prototype;
	__proto.RemoveSceneObject=function(key){
		var o=this._hashList.Remove(key);
		if (o !=null){
			var or=this._allObjectRefList.Remove(key);
			if (or !=o){
				ToolBase.LogError("MSceneTypeList remove but (or != o)");
			}
			o.destroy();
		}
	}

	__proto.RemoveAllSceneObject=function(){
		var so=null;
		var list=this._hashList.Clear();
		var len=list.length;
		for (var i=0;i < len;++i){
			so=list[i];
			if (this._allObjectRefList !=null){
				var rso=this._allObjectRefList.Remove(so.gid);
				if (rso !=so){
					ToolBase.LogError("MSceneTypeList removeAll but (rso != o)");
				}
			}
			so.destroy();
		}
	}

	__proto.GetCreateSceneObject=function(key){
		var ret=this._hashList.Get(key);
		if (ret==null){
			ret=new this._cls();
			ret.pooltype=this._pooltype;
			this._hashList.Add(key,ret);
			this._allObjectRefList.Add(key,ret);
		}
		return ret;
	}

	__getset(0,__proto,'hashList',function(){
		return this._hashList;
	});

	__getset(0,__proto,'pooltype',function(){
		return this._pooltype;
	});

	return MSceneTypeList;
})()


//class engine.animation.define.EnumActionName
var EnumActionName=(function(){
	function EnumActionName(){}
	__class(EnumActionName,'engine.animation.define.EnumActionName');
	EnumActionName.ALL="all";
	EnumActionName.NONE="none";
	EnumActionName.STAND="a_stand";
	EnumActionName.RUN="a_run";
	EnumActionName.DEAD="a_dead";
	EnumActionName.HURT="a_hurt";
	EnumActionName.ATTACK1="a_attack";
	EnumActionName.RIDESTAND="a_ridestand";
	EnumActionName.RIDERUN="a_riderun";
	EnumActionName.RIDEATTACK="a_rideattack";
	EnumActionName.RIDEHURT="a_ridehurt";
	EnumActionName.UI_STAND="a_mianbanzhanli";
	EnumActionName.UI_XIUXIAN="a_mianbanxiuxian";
	return EnumActionName;
})()


/**
*路径集合
*/
//class engine.scene.astar.AStarPathCollection
var AStarPathCollection=(function(){
	function AStarPathCollection(){
		this._splitPath=[];
	}

	__class(AStarPathCollection,'engine.scene.astar.AStarPathCollection');
	var __proto=AStarPathCollection.prototype;
	__proto.ToArrayPath=function(){
		var ret=[];
		for (var i=0;i < this._splitPath.length;++i){
			if (this._splitPath[i] !=null){
				ret=ret.concat(this._splitPath[i]);
			}
		}
		return ret;
	}

	/**
	*设置并分割寻路Node路径
	*@param paths
	*
	*/
	__proto.SetPath=function(paths,grid){
		var i=0;
		var subPath=[];
		var last=null;
		for (i=0;i < paths.length;++i){
			var dis=0;
			if (last !=null)
				dis=(Math.max(Math.abs(last.x-paths[i].x),Math.abs(last.y-paths[i].y))| 0);
			if (dis > 1){
				if (subPath.length > 0)
					this._splitPath.push(subPath);
				this._splitPath.push(null);
				this._splitPath.push([paths[i]]);
				subPath=[];
			}
			else if (subPath.length >=15){
				this._splitPath.push(subPath);
				subPath=[paths[i]];
			}
			else{
				subPath.push(paths[i]);
			}
			last=paths[i];
		}
		if (subPath.length > 0){
			this._splitPath.push(subPath);
		}
		for (i=0;i < this._splitPath.length;++i){
			if (this._splitPath[i] !=null){
				var fpath=AStarEx.floyd(this._splitPath[i],grid);
				var path=[];
				while (fpath.length){
					var node=fpath.shift();
					if (node==null)
						break ;
					path.push(new Point$1(node.x,node.y));
				}
				this._splitPath[i]=path;
			}
		}
	}

	// }
	__proto.DoPixel=function(){
		this._splitPath[0].shift();
		if (this._splitPath[0].length==0)
			this._splitPath.shift();
		var i=0;
		if (false){
			ToolBase.Log("[[[[[");
			for (i=0;i < this._splitPath.length;++i){
				if (this._splitPath[i] !=null)
					ToolBase.Log(this._splitPath[i].join("_"));
				else
				ToolBase.Log("null");
			}
			ToolBase.Log("]]]]]");
		}
		for (i=0;i < this._splitPath.length;++i){
			if (this._splitPath[i] !=null){
				this._splitPath[i]=ToolMap.ArrayGridPt2PixPt(this._splitPath[i]);
			}
		}
	}

	__proto.GetEndPt=function(){
		if (this._splitPath !=null && this._splitPath.length > 0){
			var arr=this._splitPath[this._splitPath.length-1];
			if (arr.length > 0){
				return arr[arr.length-1];
			}
		}
		return null;
	}

	__getset(0,__proto,'splitPath',function(){
		return this._splitPath;
	});

	return AStarPathCollection;
})()


//class engine.utils.CallbackUtil
var CallbackUtil=(function(){
	function CallbackUtil(){}
	__class(CallbackUtil,'engine.utils.CallbackUtil');
	CallbackUtil.Reload=function(){
		if (CallbackUtil.ReloadCallBack){
			CallbackUtil.ReloadCallBack.apply(null,2);
		}
	}

	CallbackUtil.doCloseViewManul=function(url){
		if(CallbackUtil.closeViewManual !=null)
			CallbackUtil.closeViewManual.call(null,url);
	}

	CallbackUtil.doCloseViewCallBack=function(url){
		if(CallbackUtil.closeViewCallBack !=null)
			CallbackUtil.closeViewCallBack.call(null,url);
	}

	CallbackUtil.doOpenViewCallBack=function(url){
		if(CallbackUtil.openViewCallBack !=null)
			CallbackUtil.openViewCallBack.call(null,url);
	}

	CallbackUtil.doCloseTabCallBack=function(id){
		if(CallbackUtil.closeTabCallBack !=null)
			CallbackUtil.closeTabCallBack.call(null,id);
	}

	CallbackUtil.isLowMachine=false;
	CallbackUtil.ReloadCallBack=null;
	CallbackUtil.closeViewManual=null;
	CallbackUtil.closeViewCallBack=null;
	CallbackUtil.openViewCallBack=null;
	CallbackUtil.closeTabCallBack=null;
	CallbackUtil.callbackUseCompressTexture=null;
	CallbackUtil.callbackOutGC=null;
	return CallbackUtil;
})()


/**
*long型（SID）和int（GID）之间的映射
*通常用作key
*@author Administrator
*/
//class engine.base.data.LongIdMap
var LongIdMap=(function(){
	function LongIdMap(){}
	__class(LongIdMap,'engine.base.data.LongIdMap');
	__getset(1,LongIdMap,'NEXTGID',function(){
		++LongIdMap.CUR_GID;
		++LongIdMap.WARING_COUNT;
		if (LongIdMap.WARING_COUNT >=20000){
			LongIdMap.WARING_COUNT=0;
		}
		return LongIdMap.CUR_GID;
	});

	LongIdMap.Init=function(){
		var ret=new Object();
		ret["0000000000000000"]=0;
		return ret;
	}

	LongIdMap.ToGID=function(sid){
		var strValue=sid.hexValue;
		var gid=LongIdMap.map[strValue];
		if (gid==null){
			gid=LongIdMap.CUR_GID++;
			LongIdMap.map[strValue]=gid;
		}
		return gid;
	}

	LongIdMap.ChangeGID=function(oldSid,newSid){
		if (oldSid.EqualTo(newSid))
			return LongIdMap.map[oldSid.hexValue];
		var strValue=oldSid.hexValue;
		var strVal2=newSid.hexValue;
		var gid=LongIdMap.map[strValue];
		if (gid==null){
			return 0;
		}
		LongIdMap.map[strVal2]=gid;
		LongIdMap.map[strValue]=null;
		return gid;
	}

	LongIdMap.ERR_GID=0x7FFFFFF0;
	LongIdMap.WARNING_NUM=20000;
	LongIdMap.WARING_COUNT=0;
	LongIdMap.CUR_GID=10001;
	__static(LongIdMap,
	['map',function(){return this.map=LongIdMap.Init();}
	]);
	return LongIdMap;
})()


/**
*场景抖动相关
*@author Administrator
*
*/
//class engine.scene.layer.SceneShakeControl
var SceneShakeControl=(function(){
	function SceneShakeControl(){
		this._shakeRangeXBegin=0;
		this._shakeRangeXEnd=0;
		this._shakeRangeYBegin=0;
		this._shakeRangeYEnd=0;
		this._shakeItv=50;
		this._shakeTime=0;
		this._shakeEndTime=0;
		this._shakeNextTime=0;
		this._shakeDirFlag=0;
		// 主模式
		this._shakeMode=0;
		// 幅度曲线变化模式
		this._shakeRangeMode=0;
		this._shakeFlag=false;
		this._shakeValue=new Point$1();
	}

	__class(SceneShakeControl,'engine.scene.layer.SceneShakeControl');
	var __proto=SceneShakeControl.prototype;
	__proto.GetShakeFlag=function(){
		if (this._shakeFlag){
			this._shakeFlag=false;
			return true;
		}
		return false;
	}

	/**
	*抖动场景
	*@param mode 0=-range~range之间随机 1=在0的基础上同向修正 2=(random < 0.5 ?-1 :1)*range *Math.random 3=(Math.random < 0.5 ?-1 :1)*range
	*@param rangemode 0-根据时间插值 1-固定range
	*@param ms 毫秒时间 震屏时间
	*@param xb,xe x偏移 yb,ye y偏移
	*@param itv 震屏间隔
	*/
	__proto.ShakeScene=function(mode,rangemode,ms,xb,xe,yb,ye,itv){
		this._shakeMode=mode;
		this._shakeRangeMode=rangemode;
		this._shakeTime=ms;
		this._shakeItv=itv;
		this._shakeEndTime=Laya.timer.currTimer+ms;
		this._shakeNextTime=Laya.timer.currTimer;
		this._shakeRangeXBegin=xb;
		this._shakeRangeXEnd=xe;
		this._shakeRangeYBegin=yb;
		this._shakeRangeYEnd=ye;
		this._shakeDirFlag=((Math.random()> 0.5)? 1 :-1);
	}

	__proto.Clear=function(){
		this._shakeEndTime=0;
		this.SetShakeValue(0,0);
	}

	__proto.OnFrame=function(curtime){
		if (this._shakeEndTime !=0){
			var leaveTime=this._shakeEndTime-curtime;
			if (leaveTime <=0){
				this._shakeEndTime=0;
				this.SetShakeValue(0,0);
			}
			else{
				if (curtime > this._shakeNextTime){
					var per=(this._shakeTime-leaveTime)/ (this._shakeTime);
					if (per < 0)
						per=0;
					if (per > 1)
						per=1;
					var xrange=0;
					var yrange=0;
					if (this._shakeRangeMode==0){
						xrange=ToolBase.LerpValue(this._shakeRangeXBegin,this._shakeRangeXEnd,per);
						yrange=ToolBase.LerpValue(this._shakeRangeYBegin,this._shakeRangeYEnd,per);
					}
					else if (this._shakeRangeMode==1){
						xrange=this._shakeRangeXEnd-this._shakeRangeXBegin;
						yrange=this._shakeRangeYEnd-this._shakeRangeYBegin;
					}
					else{
						var func=null;
						if (func !=null){
							xrange=func(per,this._shakeRangeXBegin,(this._shakeRangeXEnd-this._shakeRangeXBegin),1);
							yrange=func(per,this._shakeRangeYBegin,(this._shakeRangeYEnd-this._shakeRangeYBegin),1);
						}
					};
					var xvalue=0;
					var yvalue=0;
					if (this._shakeMode==0){
						xvalue=-xrange+Math.random()*(xrange *2);
						yvalue=-yrange+Math.random()*(yrange *2);
					}
					else if (this._shakeMode==1){
						xvalue=-xrange+Math.random()*(xrange *2);
						yvalue=-yrange+Math.random()*(yrange *2);
						if (xvalue *yvalue < 0){
							if (Math.random()> 0.5)
								xvalue=-xvalue;
							else
							yvalue=-yvalue;
						}
					}
					else if (this._shakeMode==2){
						xvalue=Math.random()*(xrange)*this._shakeDirFlag;
						yvalue=Math.random()*(yrange)*this._shakeDirFlag;
					}
					else if (this._shakeMode==3){
						xvalue=xrange *this._shakeDirFlag;
						yvalue=yrange *this._shakeDirFlag;
					}
					this.SetShakeValue(xvalue,yvalue);
					this._shakeDirFlag=this._shakeDirFlag *-1;
					this._shakeNextTime=curtime+this._shakeItv;
				}
			}
		}
	}

	__proto.SetShakeValue=function(xx,yy){
		this._shakeValue.x=xx;
		this._shakeValue.y=yy;
		this._shakeFlag=true;
	}

	__getset(0,__proto,'shakeValue',function(){
		return this._shakeValue;
	});

	return SceneShakeControl;
})()


/**
*封装laya的Timeline调用
*/
//class engine.greensock.TimelineTool
var TimelineTool=(function(){
	function TimelineTool(){}
	__class(TimelineTool,'engine.greensock.TimelineTool');
	TimelineTool.repeat=function(yoyo,repeat,target,props,duration,ease,offset,timeline){
		(offset===void 0)&& (offset=0);
		var line=timeline;
		if (line==null)
			line=new TimeLine();
		if (yoyo){
			var copy={};
			for (var key in props){
				copy[key]=target[key];
			}
			if (repeat==-1){
				line.to(target,props,duration,ease,0).to(target,copy,duration,ease,offset);
				line.play(0,true);
			}
			else{
				for (var i=0;i < repeat;++i){
					if (i==0)
						line.to(target,props,duration,ease,0).to(target,copy,duration,ease,offset);
					else
					line.to(target,props,duration,ease,offset).to(target,copy,duration,ease,offset);
				}
				line.play(0);
			}
		}
		else{
			if (repeat==-1){
				line.to(target,props,duration,ease,offset);
				line.play(0,true);
			}
			else{
			}
		}
		return line;
	}

	return TimelineTool;
})()


//class engine.scene.astar.Link
var Link=(function(){
	function Link(node,cost){
		this.node=null;
		this.cost=0;
		this.node=node;
		this.cost=cost;
	}

	__class(Link,'engine.scene.astar.Link');
	var __proto=Link.prototype;
	__proto.dispose=function(){
		this.node=null;
	}

	return Link;
})()


/**
*抽象类
*场景地图管理器 ，包含图块，层级以及格子
*
*@author Administrator
*
*/
//class engine.scene.MSceneMap
var MSceneMap=(function(){
	function MSceneMap(){
		this._mapChunk=null;
		this._mapGrid=null;
		this._mapLayer=null;
		this._loadStep=1;
		this._loadStepAll=2;
		this._callbackLoadEnd=null;
		this._callbackLoadProg=null;
		this._loadGridX=0;
		this._loadGridY=0;
		this._urlData=null;
		this._urlThumbnails=null;
		this._thumbnailsTex=null;
		this._mapName=null;
		this._mapResId=0;
		this._mapResLoadedHandler=null;
		this._chunkLoadedHandler=null;
		this._progHandler=null;
		this.loadmapresEnd=false;
		this._chunks=null;
		this._meta=new MMapMetaData();
		MSceneMap._ins=this;
		this._mapResLoadedHandler=new Handler(this,this.OnMapResLoadComplete);
		this._chunkLoadedHandler=new Handler(this,this.OnChunksComp);
		this._progHandler=new Handler(this,this.OnLoadProg);
	}

	__class(MSceneMap,'engine.scene.MSceneMap');
	var __proto=MSceneMap.prototype;
	__proto.Init=function(){
		this._mapLayer=new MapSceneLayer();
		this._mapGrid=new MapGridData();
		this._mapChunk=new MapChunkShow();
		this._mapLayer.Init(this);
		this._mapLayer.layerMap.addChild(this._mapChunk);
		this._mapChunk.Init(this);
		this._mapGrid.Init();
	}

	__proto.SetLookMapMiddle=function(tar){
		this._mapLayer.SetLookTarget(tar);
	}

	__proto.OnFrame=function(curtime){
		this._mapLayer.OnFrame(curtime);
		this._mapChunk.OnFrame(curtime);
	}

	__proto.BeginChangeMap=function(end,prog,gridX,gridY){
		ToolBase.Log("=====BeginChangeMap");
		if (this._callbackLoadEnd !=null){
			ToolBase.Log("=====BeginChangeMap repeat return!");
			return;
		}
		if (this._urlData !=null)
			Laya.loader.clearRes(this._urlData);
		if (this._thumbnailsTex !=null){
			this._thumbnailsTex.disposeBitmap();
			this._thumbnailsTex.destroy();
			this._thumbnailsTex=null;
		}
		this._mapGrid.Clear();
		this._mapChunk.Clear();
		this._mapLayer.Clear();
		ToolBase.Log("=====BeginChangeMap=====2");
		var pathName=ToolBase.GetResURL("map/"+this._mapResId);
		this._urlData=pathName+"/"+"data.res";
		this._urlThumbnails=pathName+"/"+"thumbnail.jpg";
		this._callbackLoadEnd=end;
		this._callbackLoadProg=prog;
		this._loadGridX=gridX;
		this._loadGridY=gridY;
		this._loadStep=1;
		this.PrepareMapRes();
	}

	/**
	*开始下载地图数据资源
	*/
	__proto.PrepareMapRes=function(){
		this.LoadMapResThumbnails();
	}

	// 加载mapres和缩略图
	__proto.LoadMapResThumbnails=function(){
		var loadurls=[];
		loadurls.push({url:this._urlData,type:"arraybuffer"});
		loadurls.push({url:this._urlThumbnails,type:"image"});
		Laya.loader.load(loadurls,this._mapResLoadedHandler,this._progHandler,null,0);
		ToolBase.Log("=====LoadMapResThumbnails:");
	}

	// 加载进度
	__proto.OnLoadProg=function(per,debug){
		var prog=0;
		if (this.loadmapresEnd)
			prog=0.5+0.5*per;
		else
		prog=per*0.5;
		if (!this.loadmapresEnd && per>=1)
			this.loadmapresEnd=true;
		if (this._callbackLoadProg)
			this._callbackLoadProg(this._loadStep,this._loadStepAll,prog,debug);
	}

	// 加载结果回调
	__proto.OnMapResLoadComplete=function(success){
		ToolBase.Log("=====OnMapResLoadComplete："+success);
		if (success){
			this._thumbnailsTex=Loader.getRes(this._urlThumbnails);
			var resData=Loader.getRes(this._urlData);
			var tempData=new ByteArray();
			tempData.writeArrayBuffer(resData);
			tempData.pos=0;
			this._meta.ParseMapMeta(this._mapResId,tempData);
			this.LoadMapData();
		}
		else{
			CallbackUtil.Reload();
		}
	}

	// 加载地图数据
	__proto.LoadMapData=function(){
		this._mapGrid.LoadMap(this._meta);
		this._mapChunk.ChangeMap(this._meta,this._thumbnailsTex);
		this._mapLayer.ChangeMap(this._meta);
		this.LoadChunks();
	}

	__proto.LoadChunks=function(){
		this._loadStep=2;
		if (this._loadGridX !=0 && this._loadGridY !=0){
			ToolBase.Log("=====LoadChunks:");
			var rect=this._mapLayer.CalcSceneRect(this._loadGridX,this._loadGridY);
			var urls=this._mapChunk.GetChunkUrls(rect);
			this._chunks=urls[1];
			Laya.loader.load(urls[0],this._chunkLoadedHandler,this._progHandler,null,0);
		}
		else{
			this._chunks=null;
			this.OnChunksComp(true);
		}
	}

	__proto.OnChunksComp=function(success){
		if (success){
			var chunks=this._chunks;
			this._chunks=null;
			if (chunks !=null){
				for (var i=0;i < chunks.length;++i){
					this._mapChunk.LoadChunk(chunks[i][0],chunks[i][1]);
				}
			}
			this._callbackLoadEnd();
			this._callbackLoadEnd=null;
			this._callbackLoadProg=null;
		}
		else{
			CallbackUtil.Reload();
		}
	}

	__proto.CalcSceneZOrder=function(pixx,pixy){
		return ToolMap.CalcSceneZOrder(pixx,pixy);
	}

	__getset(0,__proto,'mapLayer',function(){
		return this._mapLayer;
	});

	__getset(0,__proto,'mapName',function(){
		return this._mapName;
	});

	__getset(0,__proto,'sceneWidth',function(){
		return this._mapChunk.width;
	});

	__getset(0,__proto,'mapGrid',function(){
		return this._mapGrid;
	});

	__getset(0,__proto,'gridHeight',function(){
		return this._mapGrid.gridHMax;
	});

	__getset(0,__proto,'mapChunk',function(){
		return this._mapChunk;
	});

	__getset(0,__proto,'curMapResId',function(){
		return this._mapResId;
	});

	__getset(0,__proto,'gridWidth',function(){
		return this._mapGrid.gridWMax;
	});

	__getset(0,__proto,'sceneHeight',function(){
		return this._mapChunk.height;
	});

	__getset(0,__proto,'meta',function(){
		return this._meta;
	});

	__getset(0,__proto,'mapResId',function(){
		return this._mapResId;
	});

	__getset(1,MSceneMap,'Ins',function(){return MSceneMap._ins;});
	MSceneMap._ins=null;
	return MSceneMap;
})()


/**
*<code>Dictionary</code> 是一个字典型的数据存取类。
*/
//class engine.base.container.Dictionary
var Dictionary=(function(){
	function Dictionary(){
		this._values=[];
		this._keys=[];
	}

	__class(Dictionary,'engine.base.container.Dictionary');
	var __proto=Dictionary.prototype;
	/**
	*给指定的键名设置值。
	*@param key 键名。
	*@param value 值。
	*/
	__proto.set=function(key,value){
		var index=this.indexOf(key);
		if (index >=0){
			this._values[index]=value;
			return;
		}
		this._keys.push(key);
		this._values.push(value);
	}

	/**
	*获取指定对象的键名索引。
	*@param key 键名对象。
	*@return 键名索引。
	*/
	__proto.indexOf=function(key){
		var index=this._keys.indexOf(key);
		if (index >=0)return index;
		key=((typeof key=='string'))? Number(key):(((typeof key=='number'))? key.toString():key);
		return this._keys.indexOf(key);
	}

	/**
	*返回指定键名的值。
	*@param key 键名对象。
	*@return 指定键名的值。
	*/
	__proto.get=function(key){
		var index=this.indexOf(key);
		return index < 0 ? null :this._values[index];
	}

	/**
	*移除指定键名的值。
	*@param key 键名对象。
	*@return 是否成功移除。
	*/
	__proto.remove=function(key){
		var index=this.indexOf(key);
		if (index >=0){
			var ret=this._values[index];
			this._keys.splice(index,1);
			this._values.splice(index,1);
			return ret;
		}
		return null;
	}

	/**
	*清除此对象的键名列表和键值列表。
	*/
	__proto.clear=function(){
		this._values.length=0;
		this._keys.length=0;
	}

	/**
	*获取所有的子元素列表。
	*/
	__getset(0,__proto,'values',function(){
		return this._values;
	});

	/**
	*获取所有的子元素键名列表。
	*/
	__getset(0,__proto,'keys',function(){
		return this._keys;
	});

	return Dictionary;
})()


//class engine.scene.astar.BinaryHeap
var BinaryHeap=(function(){
	function BinaryHeap(justMinFun){
		this.justMinFun=function(x,y){
			return x < y;
		}
		this.a=[];
		this.a.push(-1);
		if (justMinFun !=null)
			this.justMinFun=justMinFun;
	}

	__class(BinaryHeap,'engine.scene.astar.BinaryHeap');
	var __proto=BinaryHeap.prototype;
	__proto.ins=function(value){
		var p=this.a.length;
		this.a[p]=value;
		var pp=p >> 1;
		while (p > 1 && this.justMinFun(this.a[p],this.a[pp])){
			var temp=this.a[p];
			this.a[p]=this.a[pp];
			this.a[pp]=temp;
			p=pp;
			pp=p >> 1;
		}
	}

	__proto.pop=function(){
		var min=this.a[1];
		this.a[1]=this.a[this.a.length-1];
		this.a.pop();
		var p=1;
		var l=this.a.length;
		var sp1=p << 1;
		var sp2=sp1+1;
		while (sp1 < l){
			if (sp2 < l){
				var minp=this.justMinFun(this.a[sp2],this.a[sp1])? sp2 :sp1;
				}else {
				minp=sp1;
			}
			if (this.justMinFun(this.a[minp],this.a[p])){
				var temp=this.a[p];
				this.a[p]=this.a[minp];
				this.a[minp]=temp;
				p=minp;
				sp1=p << 1;
				sp2=sp1+1;
				}else {
				break ;
			}
		}
		return min;
	}

	return BinaryHeap;
})()


//class engine.supports.utils.HashMap
var HashMap=(function(){
	function HashMap(){
		this._values=[];
		this._keys=[];
	}

	__class(HashMap,'engine.supports.utils.HashMap');
	var __proto=HashMap.prototype;
	__proto.empty=function(){
		return (this._values.length==0);
	}

	__proto.eachKey=function(func){
		var keys=this._keys;
		var len=keys.length;
		for (var i=0;i < len;++i){
			func(keys[i]);
		}
	}

	__proto.eachValue=function(func){
		var values=this._values;
		var len=values.length;
		for (var i=0;i < len;++i){
			func(values[i]);
		}
	}

	__proto.containsValue=function(value){
		return this._values.indexOf(value)>=0;
	}

	__proto.containsKey=function(key){
		return this._keys.indexOf(key)>=0;
	}

	__proto.getValue=function(key){
		return this.get(key);
	}

	__proto.put=function(key,value){
		this.set(key,value);
	}

	/**
	*给指定的键名设置值。
	*@param key 键名。
	*@param value 值。
	*/
	__proto.set=function(key,value){
		var index=this.indexOf(key);
		if (index >=0){
			this._values[index]=value;
			return;
		}
		this._keys.push(key);
		this._values.push(value);
	}

	/**
	*获取指定对象的键名索引。
	*@param key 键名对象。
	*@return 键名索引。
	*/
	__proto.indexOf=function(key){
		var index=this._keys.indexOf(key);
		if (index >=0)return index;
		key=((typeof key=='string'))? Number(key):(((typeof key=='number'))? key.toString():key);
		return this._keys.indexOf(key);
	}

	/**
	*返回指定键名的值。
	*@param key 键名对象。
	*@return 指定键名的值。
	*/
	__proto.get=function(key){
		var index=this.indexOf(key);
		return index < 0 ? null :this._values[index];
	}

	/**
	*移除指定键名的值。
	*@param key 键名对象。
	*@return 是否成功移除。
	*/
	__proto.remove=function(key){
		var index=this.indexOf(key);
		if (index >=0){
			var ret=this._values[index];
			this._keys.splice(index,1);
			this._values.splice(index,1);
			return ret;
		}
		return null;
	}

	/**
	*清除此对象的键名列表和键值列表。
	*/
	__proto.clear=function(){
		this._values.length=0;
		this._keys.length=0;
	}

	/**
	*获取所有的子元素键名列表。
	*/
	__getset(0,__proto,'keys',function(){
		return this._keys;
	});

	__getset(0,__proto,'length',function(){
		return this._values.length;
	});

	/**
	*获取所有的子元素列表。
	*/
	__getset(0,__proto,'values',function(){
		return this._values;
	});

	return HashMap;
})()


//class engine.layaex.EnumLoadPriroty
var EnumLoadPriroty=(function(){
	function EnumLoadPriroty(){}
	__class(EnumLoadPriroty,'engine.layaex.EnumLoadPriroty');
	EnumLoadPriroty.HIGHEST=0;
	EnumLoadPriroty.HIGH=1;
	return EnumLoadPriroty;
})()


//class engine.scene.astar.Grid
var Grid=(function(){
	function Grid(numCols,numRows){
		this._startNode=null;
		this._endNode=null;
		this._nodes=null;
		this._numCols=0;
		this._numRows=0;
		this.type=0;
		this._straightCost=1.0;
		this._firstFind=true;
		this._diagCost=Math.SQRT2;
		this._numCols=numCols;
		this._numRows=numRows;
		this._nodes=[];
		for (var i=0;i < this._numCols;i++){
			this._nodes[i]=[];
			for (var j=0;j < this._numRows;j++){
				this._nodes[i][j]=new Node$1(i,j);
			}
		}
	}

	__class(Grid,'engine.scene.astar.Grid');
	var __proto=Grid.prototype;
	/**
	*释放销毁
	*
	*/
	__proto.dispose=function(){
		this._startNode=null;
		this._endNode=null;
		for (var i=0;i < this._numCols;i++){
			for (var j=0;j < this._numRows;j++){
				(this._nodes[i] [j]).dispose();
			}
		}
		this._nodes=null;
		this._firstFind=true;
	}

	/**
	*
	*@param type 0八方向 1四方向 2跳棋
	*/
	__proto.calculateLinks=function(linklinesHash,type){
		(type===void 0)&& (type=0);
		this.type=type;
		for (var i=0;i < this._numCols;i++){
			for (var j=0;j < this._numRows;j++){
				this.initNodeLink(this._nodes[i][j],type,linklinesHash.get(i *10000+j));
			}
		}
	}

	__proto.getType=function(){
		return this.type;
	}

	/**
	*
	*@param node
	*@param type 0八方向 1四方向 2跳棋
	*/
	__proto.initNodeLink=function(node,type,linklines){
		var startX=Math.max(0,node.x-1);
		var endX=Math.min(this.numCols-1,node.x+1);
		var startY=Math.max(0,node.y-1);
		var endY=Math.min(this.numRows-1,node.y+1);
		node.links=[];
		for (var i=startX;i <=endX;i++){
			for (var j=startY;j <=endY;j++){
				var test=this.getNode(i,j);
				if (test==node || !test.walkable){
					continue ;
				}
				if (type !=2 && i !=node.x && j !=node.y){
					var test2=this.getNode(node.x,j);
					if (!test2.walkable){
						continue ;
					}
					test2=this.getNode(i,node.y);
					if (!test2.walkable){
						continue ;
					}
				};
				var cost=this._straightCost;
				if (!((node.x==test.x)|| (node.y==test.y))){
					if (type==1){
						continue ;
					}
					if (type==2 && (node.x-test.x)*(node.y-test.y)==1){
						continue ;
					}
					if (type==2){
						cost=this._straightCost;
					}
					else{
						cost=this._diagCost;
					}
				}
				node.links.push(new Link(test,cost));
			}
		}
		if (linklines !=null){
			for (var m=0;m < linklines.length;++m){
				var lpt=linklines[m];
				var testl=this.getNode(lpt.point.x,lpt.point.y);
				if (testl==node || !testl.walkable){
					continue ;
				}
				node.links.push(new Link(testl,this._diagCost *2));
			}
		}
	}

	__proto.getNode=function(x,y){
		return this._nodes[x][y];
	}

	__proto.setEndNode=function(x,y){
		this._endNode=this._nodes[x][y];
	}

	__proto.setStartNode=function(x,y){
		this._startNode=this._nodes[x][y];
		if (this._firstFind){
			this.findReachableNode(x,y);
			this._firstFind=false;
		}
	}

	__proto.setWalkable=function(x,y,value){
		this._nodes[x][y].walkable=value;
	}

	__proto.setDyWalkable=function(x,y,value){
		this._nodes[x][y].dyWalkable=value;
	}

	__proto.setWalkbleFunc=function(x,y,value){
		this._nodes[x][y].walkbaleFunc=value;
	}

	__proto.setCheckMonster=function(x,y,value){
		this._nodes[x][y].isCheckMonster=value;
	}

	__proto.setCheckPlayer=function(x,y,value){
		this._nodes[x][y].isCheckPlayer=value;
	}

	/**
	*当终点不可移动时寻找一个离原终点最近的可移动点来替代之
	*@param fromNode
	*@param toNode
	*@param useBuriedDepth
	*@return
	*
	*/
	__proto.findReplacer=function(fromNode,toNode,useBuriedDepth){
		var result=null;
		if(toNode.walkable && (toNode.nodeType==fromNode.nodeType)){
			result=toNode;
		}
		else{
			if(toNode.buriedDepth==-1 && useBuriedDepth){
				toNode.buriedDepth=this.getNodeBuriedDepth(toNode,Math.max(this._numCols,this._numRows));
			};
			var offset=(useBuriedDepth)? toNode.buriedDepth :10;
			var xFrom=toNode.x-offset < 0 ? 0 :toNode.x-offset;
			var xTo=toNode.x+offset > this.numCols-1 ? this.numCols-1 :toNode.x+offset;
			var yFrom=toNode.y-offset < 0 ? 0 :toNode.y-offset;
			var yTo=toNode.y+offset > this.numRows-1 ? this.numRows-1 :toNode.y+offset;
			var n;
			for(var i=xFrom;i<=xTo;i++){
				for(var j=yFrom;j<=yTo;j++){
					if((i>xFrom && i<xTo)&& (j>yFrom && j<yTo)&& useBuriedDepth){
						continue ;
					}
					n=this.getNode(i,j);
					if(n.walkable && (n.nodeType==fromNode.nodeType)){
						n.distance=n.getDistanceTo(toNode);
						if(result==null){
							result=n;
						}
						if(n.distance < result.distance){
							result=n;
						}
					}
				}
			}
		}
		return result;
	}

	/**计算一个节点的埋葬深度
	*@param node 欲计算深度的节点
	*@param loopCount 计算深度时遍历此节点外围圈数。默认值为10
	*
	*/
	__proto.getNodeBuriedDepth=function(node,loopCount){
		(loopCount===void 0)&& (loopCount=10);
		var result=node.walkable ? 0 :1;
		var l=1;
		while(l <=loopCount){
			var startX=node.x-l < 0 ? 0 :node.x-l;
			var endX=node.x+l > this.numCols-1 ? this.numCols-1 :node.x+l;
			var startY=node.y-l < 0 ? 0 :node.y-l;
			var endY=node.y+l > this.numRows-1 ? this.numRows-1 :node.y+l;
			var n;
			for(var i=startX;i <=endX;i++){
				for(var j=startY;j <=endY;j++){
					n=this.getNode(i,j);
					if(n !=node && n.walkable){
						return result;
					}
				}
			}
			result++;
			l++;
		}
		return result;
	}

	/**
	*寻找可到达点，必须保证传进来的点是可到达的
	*@param x
	*@param y
	*
	*/
	__proto.findReachableNode=function(x,y){
		if (x < 0 || x > this.numCols || y < 0 || y > this.numRows)
			return;
		var node=this.getNode(x,y);
		if (!node.walkable)
			return;
		var dealList=[];
		dealList.push(node);
		node.nodeType=1;
		while (dealList.length > 0){
			var dealNode=dealList.shift();
			var startX=Math.max(0,dealNode.x-1);
			var endX=Math.min(this.numCols-1,dealNode.x+1);
			var startY=Math.max(0,dealNode.y-1);
			var endY=Math.min(this.numRows-1,dealNode.y+1);
			for (var i=startX;i <=endX;i++){
				for (var j=startY;j <=endY;j++){
					if (dealNode.x !=i && dealNode.y !=j)
						continue ;
					var findNode=this.getNode(i,j);
					if (findNode.walkable && (findNode.nodeType==2)){
						findNode.nodeType=1;
						dealList.push(findNode);
					}
				}
			}
		}
	}

	__getset(0,__proto,'numRows',function(){
		return this._numRows;
	});

	__getset(0,__proto,'endNode',function(){
		return this._endNode;
	});

	__getset(0,__proto,'numCols',function(){
		return this._numCols;
	});

	__getset(0,__proto,'startNode',function(){
		return this._startNode;
	});

	return Grid;
})()


/**
*64位数据类型，相当于QWORD，主要用于和服务器对接
*@author Administrator
*/
//class engine.base.data.Int64
var Int64=(function(){
	function Int64(value){
		this._hValue=0;
		this._lValue=0;
		this._hexValue="0000000000000000";
		(value===void 0)&& (value=0);
		if ((typeof value=='string'))
			this.hexValue=value;
		else if (value !=0)
		this.intValue=value;
	}

	__class(Int64,'engine.base.data.Int64');
	var __proto=Int64.prototype;
	__proto.SetRawData=function(l,h){
		this._hValue=h>>>0;
		this._lValue=l>>>0;
		this._hexValue=("0000000000000000"+this._hValue.toString(16)).substr(-8,8)+("0000000000000000"+this._lValue.toString(16)).substr(-8,8);
	}

	__proto.SetMax=function(){
		this._lValue=4294967295;
		this._hValue=4294967295;
		this._hexValue="ffffffffffffffff";
	}

	/**
	*深拷贝
	*/
	__proto.CloneInt64=function(){
		var ret=new Int64();
		ret._hValue=this._hValue;
		ret._lValue=this._lValue;
		ret._hexValue=this._hexValue;
		return ret;
	}

	/**
	*大小比比看
	*大于 1
	*等于 0
	*小于-1
	*/
	__proto.CompareTo=function(value){
		if (value==null)
			return 1;
		if (this._hValue > value._hValue){
			return 1;
		}
		else if (this._hValue < value._hValue){
			return-1;
		}
		if (this._lValue > value._lValue){
			return 1;
		}
		else if (this._lValue < value._lValue){
			return-1;
		}
		return 0;
	}

	/**
	*是否相等
	*@param value
	*@return
	*
	*/
	__proto.EqualTo=function(value){
		return (this.CompareTo(value)==0);
	}

	__proto.equals=function(v){
		return this._hValue==0 && this._lValue==v;
	}

	/**
	*是0
	*@return
	*
	*/
	__proto.IsZero=function(){
		return (this._lValue==0 && this._hValue==0);
	}

	/**
	*是最大-1
	*@return
	*
	*/
	__proto.IsMax=function(){
		return (this._lValue==4294967295 && this._hValue==4294967295);
	}

	__proto.Clear=function(){
		this.intValue=0;
	}

	__proto.ToString=function(){
		return this._hexValue;
	}

	__proto.ToGID=function(){
		return LongIdMap.ToGID(this);
	}

	__proto.ShowValue=function(){
		var high=this._hValue;
		var low=this._lValue;
		var temp;
		if (low < 0)
			temp=Int64.Addition(String(low),"4294967296");
		else
		temp=String(low);
		return Int64.Addition(Int64.Multiplication(String(high),"4294967296"),temp);
	}

	/**
	*位掩码检测
	*@param state
	*@param isH
	*@return
	*
	*/
	__proto.BitMaskTest=function(state,isH){
		(isH===void 0)&& (isH=false);
		if (isH)
			return ((this._hValue & state)!=0);
		return ((this._lValue & state)!=0);
	}

	__getset(0,__proto,'intValue',null,function(value){
		if (value < 0){
			this._hValue=4294967295;
			this._lValue=value>>>0;
			this._hexValue=("ffffffffffffffff"+"ffffffffffffffff"+this._lValue.toString(16)).substr(-16,16);
		}
		else{
			this._hValue=0;
			this._lValue=value;
			this._hexValue=("0000000000000000"+"0000000000000000"+this._lValue.toString(16)).substr(-16,16);
		}
	});

	__getset(0,__proto,'hValue',function(){
		return this._hValue;
		},function(value){
		this._hValue=value>>>0;
	});

	__getset(0,__proto,'bytes',function(){
		var ret=new ByteArray();
		ret.writeUint32(this._hValue);
		ret.writeUint32(this._lValue);
		return ret;
		},function(value){
		value.pos=0;
		this._hValue=value.readUnsignedInt();
		this._lValue=value.readUnsignedInt();
		this._hexValue=("0000000000000000"+this._hValue.toString(16)).substr(-8,8)+("0000000000000000"+this._lValue.toString(16)).substr(-8,8);
	});

	__getset(0,__proto,'hexValue',function(){
		return this._hexValue;
		},function(str){
		var _bytes=new ByteArray();
		_bytes.writeUint32(0);
		_bytes.writeUint32(0);
		this._hexValue=("0000000000000000"+"0000000000000000"+str).substr(-16,16);
		_bytes.pos=0;
		for(var i=0;i < 8;++i){
			var char=this._hexValue.substr(i*2,2);
			var num=parseInt(char,16);
			_bytes.writeByte(num);
		}
		_bytes.pos=0;
		this._hValue=_bytes.readUnsignedInt();
		this._lValue=_bytes.readUnsignedInt();
	});

	/**
	*得到十进制数字
	*/
	__getset(0,__proto,'fValue',function(){
		return ((this._hValue)*(4294967295+1))+this._lValue;
		},function(value){
		this.SetRawData(Math.floor(value % 0x100000000),Math.floor(value / 0x100000000));
	});

	__getset(0,__proto,'lValue',function(){
		return this._lValue;
		},function(value){
		this._lValue=value>>>0;
	});

	Int64.Multiplication=function(a,b){
		var same=true;
		var a_array=[];
		var b_array=[];
		if (a.charAt(0)=="-"){
			a=a.substring(1);
			same=!same;
		}
		while (a.length > Int64.MULTIPLY.length){
			a_array.push(a.substring(a.length-Int64.MULTIPLY.length));
			a=a.substring(0,a.length-Int64.MULTIPLY.length);
		}
		a_array.push(a);
		if (b.charAt(0)=="-"){
			b=b.substring(1);
			same=!same;
		}
		while(b.length > Int64.MULTIPLY.length){
			b_array.push(b.substring(b.length-Int64.MULTIPLY.length));
			b=b.substring(0,b.length-Int64.MULTIPLY.length);
		}
		b_array.push(b);
		var result="0";
		var x=0;
		var y=0;
		var temp;
		for (var i=0;i < a_array.length;i++){
			for (var j=0;j < b_array.length;j++){
				x=Math.floor(a_array[i]);
				y=Math.floor(b_array[j]);
				temp=String(x *y);
				for (var k=0;k < i+j;k++){
					temp+=Int64.MULTIPLY;
				}
				result=Int64.Addition(temp,result);
			}
		}
		if (!same)
			result="-"+result;
		return result;
	}

	Int64.Addition=function(a,b){
		var same=true;
		var negative=false;
		var a_array=[];
		var b_array=[];
		if (a.charAt(0)=="-"){
			a=a.substring(1);
			same=!same;
			negative=true;
		}
		while (a.length > Int64.ADDITION.length){
			a_array.unshift(a.substring(a.length-Int64.ADDITION.length));
			a=a.substring(0,a.length-Int64.ADDITION.length);
		}
		a_array.unshift(a);
		if (b.charAt(0)=="-"){
			b=b.substring(1);
			same=!same;
		}
		while (b.length > Int64.ADDITION.length){
			b_array.unshift(b.substring(b.length-Int64.ADDITION.length));
			b=b.substring(0,b.length-Int64.ADDITION.length);
		}
		b_array.unshift(b);
		var result="";
		var x=0;
		var y=0;
		var z=0;
		var temp=0;
		var addition_const=parseInt("1"+Int64.ADDITION);
		if (same){
			z=0;
			while (a_array.length > 0 || b_array.length > 0){
				x=0;
				y=0;
				if (a_array.length > 0)
					x=Math.floor(a_array.pop());
				if (b_array.length > 0)
					y=Math.floor(b_array.pop());
				temp=x+y+z;
				if (temp >=addition_const){
					z=1;
					temp=temp % addition_const;
				}
				else
				z=0;
				result=Int64.Format(temp)+result;
			}
			if (z==1)
				result="1"+result;
		}
		else{
			var results=[];
			while (a_array.length > 0 || b_array.length > 0){
				x=0;
				y=0;
				if (a_array.length > 0)
					x=Math.floor(a_array.pop());
				if (b_array.length > 0)
					y=Math.floor(b_array.pop());
				temp=x-y;
				results.push(temp);
			}
			if (results.length > 0){
				x=results.pop();
				while (x==0 && results.length > 0)
				x=results.pop();
			}
			if (x==0)
				return "0";
			results.push(x);
			z=0;
			if (x > 0){
				while (results.length > 0){
					y=results.shift();
					y=y-z;
					if (y < 0){
						z=1;
						y=addition_const+y;
					}
					else
					z=0;
					result=Int64.Format(y)+result;
				}
			}
			else{
				negative=!negative;
				while (results.length > 0){
					y=results.shift();
					y=y+z;
					if (y > 0){
						z=1;
						y=addition_const-y;
					}
					else{
						z=0;
						y=-y;
					}
					result=Int64.Format(y)+result;
				}
			}
		}
		while (result.length > 1){
			if (result.charAt(0)=="0")
				result=result.substring(1);
			else
			break ;
		}
		if (negative)
			result="-"+result;
		return result;
	}

	Int64.Format=function(num){
		var result=String(num);
		var size=Int64.ADDITION.length-result.length;
		if (size < 0)
			return result.substring(-size);
		else{
			for (var i=0;i < size;i++)
			result="0"+result;
			return result;
		}
	}

	Int64.UINT_MAX_VALUE=4294967295;
	Int64.TWO_POW_32=0x100000000;
	Int64.ZERO="0000000000000000";
	Int64.MAX="ffffffffffffffff";
	Int64.hexTable="0123456789abcdef";
	Int64.BYTESIZE=8;
	Int64.HEX_STR_LEN=16;
	Int64.ADDITION="00000000";
	Int64.MULTIPLY="0000";
	return Int64;
})()


/**
*异形屏适配基类
*/
//class engine.notch.NotchFixBase
var NotchFixBase=(function(){
	function NotchFixBase(){
		this._isNotch=false;
		// 异形屏宽度
		this._notchWidth=0;
		// 异形屏高度
		this._notchHeight=0;
	}

	__class(NotchFixBase,'engine.notch.NotchFixBase');
	var __proto=NotchFixBase.prototype;
	__proto.Init=function(obj){
		if (Browser.window.conchConfig){
			if (Browser.onAndroid){
				var total=Browser.window.conchConfig.getTotalMem();
				var gb=total / 1024 / 1024;
				if (gb > 6)
					MSheetAnimationGC.MEMORY_THRESHOLD=500;
				else if (gb > 4)
				MSheetAnimationGC.MEMORY_THRESHOLD=450;
				else
				MSheetAnimationGC.MEMORY_THRESHOLD=400;
				if (gb <=4){
					CallbackUtil.isLowMachine=true;
				}
			}
			else if (Browser.onIOS){
				MSheetAnimationGC.MEMORY_THRESHOLD=400;
				CallbackUtil.isLowMachine=true;
			}
		}
	}

	__getset(0,__proto,'isNotch',function(){
		return this._isNotch;
	});

	__getset(0,__proto,'notchWidth',function(){
		return this._notchWidth;
	});

	__getset(0,__proto,'notchHeight',function(){
		if(boot.isSpecialScreen)
			return 60;
		else
		return this._notchHeight;
	});

	NotchFixBase.InitNotchFix=function(obj){
		console.log("InitNotchFix================1");
		if (NotchFixBase.Ins !=null)return;
		NotchFixBase.Ins=new NotchFixBase();
		if (Render.isConchApp){
			if (Browser.onAndroid)
				NotchFixBase.Ins=new NotchAndriodFix();
			else if (Browser.onIOS)
			NotchFixBase.Ins=new NotchIPhoneFix();
			if (obj !=null)
				NotchFixBase.Ins.Init(obj);
		}
	}

	NotchFixBase.Ins=null;
	return NotchFixBase;
})()


/**
*战场对象管理
*/
//class engine.battle.MBattleObject
var MBattleObject=(function(){
	function MBattleObject(){
		this._allObjectHashList=null;
		this._typeListMap=new Dictionary();
	}

	__class(MBattleObject,'engine.battle.MBattleObject');
	var __proto=MBattleObject.prototype;
	__proto.AddTypeObjList=function(typeName,type){
		if (this._typeListMap.get(typeName)!=null){
			throw new Error("AddTypeObjList key Already Exsit!");
		}
		this._typeListMap.set(typeName,new MSceneTypeList(typeName,type,this._allObjectHashList));
	}

	__proto.GetTypeObjectList=function(typename){
		return this._typeListMap.get(typename).hashList.list;
	}

	__proto.EachTypeObjectList=function(typename,func){
		this._typeListMap.get(typename).hashList.Each(func);
	}

	__proto.DeleteObject=function(gid){
		var so=this._allObjectHashList.Get(gid);
		if (so !=null){
			var typeList=this._typeListMap.get(so.objectType);
			if (typeList==null){
				ToolBase.Log("DeleteObject TypeObjectList typeList == null Error");
				throw new Error("DeleteObject TypeObjectList typeList == null Error");
			}
			typeList.RemoveSceneObject(gid);
		}
		return so;
	}

	__proto.AddObject=function(gid,pooltype,bean,group){
		var typeList=this._typeListMap.get(pooltype);
		if (typeList==null){
			ToolBase.LogError("AddObject Unknow pooltype !!! pooltype :"+pooltype);
		};
		var addo=typeList.GetCreateSceneObject(gid);
		addo.SetData(bean,group);
		return addo;
	}

	/**
	*移除全部对象
	*/
	__proto.RemoveAll=function(){
		var hl;
		for(var $each_hl in this._typeListMap.values){
			hl=this._typeListMap.values[$each_hl];
			hl.RemoveAllSceneObject();
		}
		if (this._allObjectHashList.GetCount()> 0){
			ToolBase.LogError("removeAllRoundObject but not Clear!!!!!!! "+this._allObjectHashList.GetCount());
		}
		if (this._allObjectHashList.CheckSize()==false){
			ToolBase.LogError("removeAllRoundObject objHash.CheckSize false!!!!!!");
		}
	}

	/**
	*返回*便于少写as
	*@param id
	*@return
	*/
	__proto.FindObject=function(id){
		if (id==0)
			return null;
		return this._allObjectHashList.Get(id);
	}

	return MBattleObject;
})()


/**
*选项卡切页控制带面板
*@author Administrator
*
*/
//class engine.pui.tab.TabControl
var TabControl=(function(){
	function TabControl(){
		this.destroyed=false;
		this._panContent=null;
		this._panList=null;
		this._radioGroup=null;
		this._loadingTag={};
		this._prepanel=null;
		this._preitem=null;
		;
	}

	__class(TabControl,'engine.pui.tab.TabControl');
	var __proto=TabControl.prototype;
	__proto.destory=function(){
		this.destroyed=true;
		var v;
		for(var $each_v in this._panList){
			v=this._panList[$each_v];
			if (v && !v.destroyed)v.destroy();
		}
		this._panContent=null;
		this._panList=null;
		this._prepanel=null;
		this._preitem=null;
		this._radioGroup=null;
		this._loadingTag=null;
	}

	__proto.selectTag=function(tabTag,param,forceUpdate){
		(forceUpdate===void 0)&& (forceUpdate=true);
		var item=this._radioGroup.getItemByTag(tabTag);
		if (item !=null){
			var idx=this._radioGroup.items.indexOf(item);
			if (param !=null)
				item.tabOpenParam=param;
			this._radioGroup.selectedIndex=idx;
		}
	}

	/**
	*设置选项卡数据
	*@param group 必须是PRadioGroup
	*@param content 绑定面板容器
	*
	*/
	__proto.setTabData=function(group,content,precheckCaller,precheckFunc){
		if (content==null)
			throw new Error("选项卡容器不能为空");
		this._panContent=content;
		this._radioGroup=group;
		this._radioGroup.groupCheckFunc=precheckFunc;
		this._radioGroup.groupCheckCaller=precheckCaller;
		this._panList={};
		this._radioGroup.on("change",this,this.onSelect);
		if (this._radioGroup.selectedIndex !=-1){
			this.onSelect();
		}
	}

	__proto.onSelect=function(){
		if (this._prepanel !=null){
			if(this._radioGroup.isLastClick){
				CallbackUtil.doCloseTabCallBack(this._preitem.tabTag);
				this._radioGroup.isLastClick=false;
			}
			this._prepanel.close();
			if (this._prepanel.destroyed)
				this._panList[this._preitem.tabTag]=null;
			this._prepanel=null;
			this._preitem=null;
		};
		var item=this._radioGroup.items [this._radioGroup.selectedIndex];
		var pan=this._panList[item.tabTag];
		if (pan==null){
			if ((typeof item.tabBindPanel=='string')){
				this._loadingTag[item.tabBindPanel]=item.tabTag;
				PUIMgr.Ins.load(item.tabBindPanel,Handler.create(this,this.openTab,[item.tabBindPanel]));
				}else if ((item.tabBindPanel instanceof laya.display.Scene )){
				this.openTab(item.tabTag,item.tabBindPanel);
			}else{}
			}else{
			this.openTab(item.tabTag,pan);
		}
	}

	__proto.openTab=function(param,scene){
		if (this.destroyed){
			if (scene){
				scene.close();
			}
			return;
		};
		var tabTag=0;
		if ((typeof param=='string')){
			tabTag=this._loadingTag[param];
			delete this._loadingTag[param];
			}else{
			tabTag=param;
		}
		if (scene==null || this._radioGroup.selectedIndex !=this._radioGroup.getTagIndex(tabTag)){
			this._panList[tabTag]=null;
			if (scene){
				scene.close();
				if (!scene.destroyed)
					this._panList[tabTag]=scene;
			}
			return;
		};
		var item=this._radioGroup.getItemByTag(tabTag);
		this._panList[tabTag]=scene;
		this._prepanel=scene;
		this._preitem=item;
		this._panContent.addChild(scene);
		scene.onOpened(item.tabOpenParam);
	}

	return TabControl;
})()


//class engine.base.define.MTweenFunc
var MTweenFunc=(function(){
	function MTweenFunc(){}
	__class(MTweenFunc,'engine.base.define.MTweenFunc');
	MTweenFunc.GetEaseFuncByID=function(id){
		var identifier=MTweenFunc.ID_TO_TYPE[parseInt((id / 1000)+"")]+MTweenFunc.ID_TO_IDT[(id % 1000)];
		return MTweenFunc.TWEEN_EASE[identifier];
	}

	MTweenFunc.GetEaseFunc=function(ease,formala){
		var identifier=ease+formala;
		return MTweenFunc.TWEEN_EASE[identifier];
	}

	MTweenFunc.LINEAR="Linear";
	MTweenFunc.SINE="Sine";
	MTweenFunc.CUBIC="Cubic";
	MTweenFunc.CIRC="Circ";
	MTweenFunc.EXPO="Expo";
	MTweenFunc.BOUNCE="Bounce";
	MTweenFunc.BACK="Back";
	MTweenFunc.ELASTIC="Elastic";
	MTweenFunc.QUAD="Quad";
	MTweenFunc.QUART="Quart";
	MTweenFunc.QUINT="Quint";
	MTweenFunc.STRONG="Strong";
	MTweenFunc.EASEIN="easeIn";
	MTweenFunc.EASEOUT="easeOut";
	MTweenFunc.EASEINOUT="easeInOut";
	MTweenFunc.EASENONE="easeNone";
	__static(MTweenFunc,
	['TWEEN_EASE',function(){return this.TWEEN_EASE=new Object();},'ID_TO_TYPE',function(){return this.ID_TO_TYPE=new Object();},'ID_TO_IDT',function(){return this.ID_TO_IDT=new Object();}
	]);
	MTweenFunc.__init$=function(){{
			MTweenFunc.ID_TO_TYPE[1]="Linear";
			MTweenFunc.ID_TO_TYPE[2]="Sine";
			MTweenFunc.ID_TO_TYPE[3]="Cubic";
			MTweenFunc.ID_TO_TYPE[4]="Quint";
			MTweenFunc.ID_TO_TYPE[5]="Circ";
			MTweenFunc.ID_TO_TYPE[6]="Elastic";
			MTweenFunc.ID_TO_TYPE[7]="Quad";
			MTweenFunc.ID_TO_TYPE[8]="Quart";
			MTweenFunc.ID_TO_TYPE[9]="Expo";
			MTweenFunc.ID_TO_TYPE[10]="Back";
			MTweenFunc.ID_TO_TYPE[11]="Bounce";
			MTweenFunc.ID_TO_TYPE[12]="Strong";
			MTweenFunc.ID_TO_IDT[0]="easeNone";
			MTweenFunc.ID_TO_IDT[1]="easeIn";
			MTweenFunc.ID_TO_IDT[2]="easeOut";
			MTweenFunc.ID_TO_IDT[3]="easeInOut";
			MTweenFunc.TWEEN_EASE["Linear"+"easeNone"]=Ease.linearNone;
			MTweenFunc.TWEEN_EASE["Linear"+"easeIn"]=Ease.linearIn;
			MTweenFunc.TWEEN_EASE["Linear"+"easeOut"]=Ease.linearOut;
			MTweenFunc.TWEEN_EASE["Linear"+"easeInOut"]=Ease.linearInOut;
			MTweenFunc.TWEEN_EASE["Sine"+"easeIn"]=Ease.sineIn;
			MTweenFunc.TWEEN_EASE["Sine"+"easeOut"]=Ease.sineOut;
			MTweenFunc.TWEEN_EASE["Sine"+"easeInOut"]=Ease.sineInOut;
			MTweenFunc.TWEEN_EASE["Cubic"+"easeIn"]=Ease.cubicIn;
			MTweenFunc.TWEEN_EASE["Cubic"+"easeOut"]=Ease.cubicOut;
			MTweenFunc.TWEEN_EASE["Cubic"+"easeInOut"]=Ease.cubicInOut;
			MTweenFunc.TWEEN_EASE["Circ"+"easeIn"]=Ease.circIn;
			MTweenFunc.TWEEN_EASE["Circ"+"easeOut"]=Ease.circOut;
			MTweenFunc.TWEEN_EASE["Circ"+"easeInOut"]=Ease.circInOut;
			MTweenFunc.TWEEN_EASE["Expo"+"easeIn"]=Ease.expoIn;
			MTweenFunc.TWEEN_EASE["Expo"+"easeOut"]=Ease.expoOut;
			MTweenFunc.TWEEN_EASE["Expo"+"easeInOut"]=Ease.expoInOut;
			MTweenFunc.TWEEN_EASE["Bounce"+"easeIn"]=Ease.bounceIn;
			MTweenFunc.TWEEN_EASE["Bounce"+"easeOut"]=Ease.bounceOut;
			MTweenFunc.TWEEN_EASE["Bounce"+"easeInOut"]=Ease.bounceInOut;
			MTweenFunc.TWEEN_EASE["Back"+"easeIn"]=Ease.backIn;
			MTweenFunc.TWEEN_EASE["Back"+"easeOut"]=Ease.backOut;
			MTweenFunc.TWEEN_EASE["Back"+"easeInOut"]=Ease.backInOut;
			MTweenFunc.TWEEN_EASE["Elastic"+"easeIn"]=Ease.elasticIn;
			MTweenFunc.TWEEN_EASE["Elastic"+"easeOut"]=Ease.elasticOut;
			MTweenFunc.TWEEN_EASE["Elastic"+"easeInOut"]=Ease.elasticInOut;
			MTweenFunc.TWEEN_EASE["Quad"+"easeIn"]=Ease.quadIn;
			MTweenFunc.TWEEN_EASE["Quad"+"easeOut"]=Ease.quadOut;
			MTweenFunc.TWEEN_EASE["Quad"+"easeInOut"]=Ease.quadInOut;
			MTweenFunc.TWEEN_EASE["Quart"+"easeIn"]=Ease.quartIn;
			MTweenFunc.TWEEN_EASE["Quart"+"easeOut"]=Ease.quartOut;
			MTweenFunc.TWEEN_EASE["Quart"+"easeInOut"]=Ease.quartInOut;
			MTweenFunc.TWEEN_EASE["Quint"+"easeIn"]=Ease.quintIn;
			MTweenFunc.TWEEN_EASE["Quint"+"easeOut"]=Ease.quintOut;
			MTweenFunc.TWEEN_EASE["Quint"+"easeInOut"]=Ease.quintInOut;
			MTweenFunc.TWEEN_EASE["Strong"+"easeIn"]=Ease.strongIn;
			MTweenFunc.TWEEN_EASE["Strong"+"easeOut"]=Ease.strongOut;
			MTweenFunc.TWEEN_EASE["Strong"+"easeInOut"]=Ease.strongInOut;
		}
	}

	return MTweenFunc;
})()


/**
*一般对象池
*
*@author Administrator
*/
//class engine.base.pool.ObjectPool
var ObjectPool=(function(){
	function ObjectPool(maxCount,nodeClass){
		/**节点类*/
		this._nodeClass=null;
		/**对象池最大资源数*/
		this._maxCount=0;
		/**对象池列表*/
		this._list=null;
		this._maxCount=maxCount;
		this._nodeClass=nodeClass;
		this._list=[];
		ObjectRecord.rcd(this);
	}

	__class(ObjectPool,'engine.base.pool.ObjectPool');
	var __proto=ObjectPool.prototype;
	/**压入对象*/
	__proto.Push=function(node){
		if (node==null){
			ToolBase.LogError("[ObjectPool push] node is null");
			return;
		}
		if (!(Laya.__typeof(node,this._nodeClass))){
			ToolBase.LogError("[ObjectPool push] node isn't thie specify Class");
			return;
		}
		if (node.inPool){
			ToolBase.LogError("[ObjectPool push] node in pool");
			return;
		}
		if (this._list.length < this._maxCount){
			node.Clean();
			this._list[this._list.length]=node;
			node.inPool=true;
		}
		else
		node.destroy();
	}

	/**弹出对象*/
	__proto.Pop=function(){
		if (this._list.length > 0){
			var node=this._list.pop();
			node.inPool=false;
			return node;
		}
		else{
			return new this._nodeClass();
		}
	}

	/**清理对象池数据*/
	__proto.Clean=function(){
		var node;
		for(var $each_node in this._list){
			node=this._list[$each_node];
			node.destroy();
		}
		this._list.length=0;
	}

	/**设置对象池最大存储数*/
	__getset(0,__proto,'maxCount',null,function(value){
		this._maxCount=value;
	});

	/**获取对象池当前存储数*/
	__getset(0,__proto,'count',function(){
		return this._list.length;
	});

	return ObjectPool;
})()


/**
*@author Administrator
*/
//class engine.ui.tips.TipsHandler
var TipsHandler=(function(){
	function TipsHandler(compUI,tipsPanel){
		// tips的主组件
		this._compUI=null;
		// 显示面板
		this._tipsPanel=null;
		// tips数据
		this._tipsData=null;
		this._compUI=compUI;
		this._tipsPanel=tipsPanel;
		this._compUI.on("click",this,this.OnShowTips);
	}

	__class(TipsHandler,'engine.ui.tips.TipsHandler');
	var __proto=TipsHandler.prototype;
	__proto.SetTipsData=function(tipsData){
		this._tipsData=tipsData;
	}

	__proto.OnShowTips=function(e){
		if (this._tipsPanel==null)
			return;
		PUIMgr.Ins.close(this._tipsPanel);
		PUIMgr.Ins.open(this._tipsPanel,this._tipsData);
	}

	__proto.destroy=function(){
		if (this._compUI==null)
			return;
		this._compUI.off("click",this,this.OnShowTips);
		this._compUI=null;
		if(this._tipsPanel !=null){
			this._tipsPanel=null;
		}
		this._tipsData=null;
	}

	return TipsHandler;
})()


//class engine.battle.move.EnumBattleMoveType
var EnumBattleMoveType=(function(){
	function EnumBattleMoveType(){}
	__class(EnumBattleMoveType,'engine.battle.move.EnumBattleMoveType');
	EnumBattleMoveType.NONE=0;
	EnumBattleMoveType.RUN=1;
	EnumBattleMoveType.JUMP=2;
	EnumBattleMoveType.JUMP_DIE=3;
	return EnumBattleMoveType;
})()


/**
*
*
*@author Administrator
*/
//class engine.utils.MCUtil
var MCUtil=(function(){
	function MCUtil(){}
	__class(MCUtil,'engine.utils.MCUtil');
	MCUtil.AddChildOnly=function(con,dis){
		MCUtil.DisposeAllChild(con);
		if (dis !=null){
			con.addChild(dis);
		}
	}

	MCUtil.RemoveSelf=function(mc){
		if (mc==null)
			return;
		var parent=mc.parent;
		if (parent !=null)
			parent.removeChild(mc);
	}

	MCUtil.RemoveAllChild=function(mc){
		if (mc==null)
			return;
		mc.removeChildren();
	}

	MCUtil.DisposeAllChild=function(mc){
		if (mc==null)
			return;
		for (var i=0;i < mc.numChildren;++i){
			MCUtil.DisposeDisplay(mc.getChildAt(i));
		}
	}

	MCUtil.DisposeArray=function(arr){
		if (arr !=null){
			for (var i=0;i < arr.length;++i){
				MCUtil.DisposeDisplay(arr[i]);
			}
			arr.length=0;
		}
	}

	MCUtil.DisposeDisplay=function(display){
		if (display==null)
			return;
		if (display.hasOwnProperty("Dispose")){
			display.Dispose();
		}
		else if (display.hasOwnProperty("destroy")){
			display.destroy();
		}
		else if (display.hasOwnProperty("dispose")){
			display.dispose();
		}
		else if ((display instanceof laya.display.Node )){
			display.removeSelf();
		}
	}

	MCUtil.ToTop=function(mc){
		if (mc==null)
			return;
		var parent=mc.parent;
		if (parent==null)
			return;
		var maxIdx=parent.numChildren-1;
		if (parent.getChildIndex(mc)!=maxIdx){
			parent.setChildIndex(mc,maxIdx);
		}
	}

	MCUtil.ToBottom=function(mc){
		if (mc==null)
			return;
		var parent=mc.parent;
		if (parent==null)
			return;
		if (parent.getChildIndex(mc)!=0){
			parent.setChildIndex(mc,0);
		}
	}

	MCUtil.GetRelativePos=function(curObj,parent){
		var pos=new Point$1();
		while (curObj !=null && curObj !=parent){
			pos.x+=curObj.x;
			pos.y+=curObj.y;
			curObj=curObj.parent;
		}
		return pos;
	}

	MCUtil.ToCenter=function(curObj,h,v){
		(h===void 0)&& (h=true);
		(v===void 0)&& (v=true);
		if ((curObj.parent instanceof laya.display.Sprite )){
			if (h)
				curObj.x=(curObj.parent).width / 2-curObj.width / 2;
			if (v)
				curObj.y=(curObj.parent).height / 2-curObj.height / 2;
		}
	}

	return MCUtil;
})()


/**
*游戏常量定义，运行后不可修改
*@author Administrator
*/
//class engine.base.define.MGameDefine
var MGameDefine=(function(){
	function MGameDefine(){}
	__class(MGameDefine,'engine.base.define.MGameDefine');
	MGameDefine.GRID_WIDTH=72;
	MGameDefine.GRID_HEIGHT=48;
	MGameDefine.SCENEDIS_FAR=-10000000;
	MGameDefine.SCENE_OBJECT_GID_BEGIN=10001;
	return MGameDefine;
})()


/**
*特殊连接
*/
//class engine.scene.astar.AStarLinkLine
var AStarLinkLine=(function(){
	function AStarLinkLine(pt,tp){
		this._point=null;
		// 0无类型 1 跳跃点
		this._type=0;
		this._point=pt;
		this._type=tp;
	}

	__class(AStarLinkLine,'engine.scene.astar.AStarLinkLine');
	var __proto=AStarLinkLine.prototype;
	__getset(0,__proto,'point',function(){
		return this._point;
	});

	__getset(0,__proto,'type',function(){
		return this._type;
	});

	return AStarLinkLine;
})()


/**
*层级
*
*@author Administrator
*/
//class engine.ui.enum.EnumLayer
var EnumLayer=(function(){
	function EnumLayer(){}
	__class(EnumLayer,'engine.ui.enum.EnumLayer');
	EnumLayer.SCENE=1;
	EnumLayer.SCENE_BATTLE=3;
	EnumLayer.BOTTOM=10;
	EnumLayer.MIDDLE=11;
	EnumLayer.FIX_1=12;
	EnumLayer.FIX=13;
	EnumLayer.FIX1=14;
	EnumLayer.FIX2=15;
	EnumLayer.POP=17;
	EnumLayer.TOP_1=18;
	EnumLayer.TOP=19;
	EnumLayer.TOP1=21;
	EnumLayer.TOP2=22;
	EnumLayer.TOP3=23;
	EnumLayer.TIP=24;
	EnumLayer.PROMPT=25;
	EnumLayer.LOADING=27;
	EnumLayer.LOGIN=29;
	EnumLayer.CREATE=30;
	EnumLayer.TOTAST=31;
	return EnumLayer;
})()


//class engine.supports.utils.LanUtil
var LanUtil=(function(){
	function LanUtil(){}
	__class(LanUtil,'engine.supports.utils.LanUtil');
	LanUtil.GetLanStr=function(str){
		if (LanUtil.lanDic !=null){
			var realStr=LanUtil.lanDic[str];
			if (realStr)
				return realStr;
		}
		return str;
	}

	LanUtil.lanDic=null;
	return LanUtil;
})()


//class engine.pui.PDialogManager
var PDialogManager=(function(){
	function PDialogManager(){
		/**@private 全局默认弹出对话框效果，可以设置一个效果代替默认的弹出效果，如果不想有任何效果，可以赋值为null*/
		this.popupEffect=function(dialog){
			dialog.scale(1,1);
			dialog._effectTween=Tween.from(dialog,{x:Laya.stage.width / 2,y:Laya.stage.height / 2,scaleX:0,scaleY:0},300,Ease.backOut);
		}
		/**@private 全局默认关闭对话框效果，可以设置一个效果代替默认的关闭效果，如果不想有任何效果，可以赋值为null*/
		this.closeEffect=function(dialog){
			dialog._effectTween=Tween.to(dialog,{x:Laya.stage.width / 2,y:Laya.stage.height / 2,scaleX:0,scaleY:0},300,Ease.strongOut,Handler.create(this,this.doClose,[dialog]),0,false,false);
		}
		this.popupEffectHandler=new Handler(this,this.popupEffect);
		this.closeEffectHandler=new Handler(this,this.closeEffect);
	}

	__class(PDialogManager,'engine.pui.PDialogManager');
	var __proto=PDialogManager.prototype;
	__proto._centerDialog=function(dialog){
		dialog.x=Math.round(((Laya.stage.width-dialog.width)>> 1)+dialog.pivotX);
		dialog.y=Math.round(((Laya.stage.height-dialog.height)>> 1)+dialog.pivotY);
	}

	/**
	*显示对话框
	*@param dialog 需要显示的对象框 <code>Dialog</code> 实例。
	*@param closeOther 是否关闭其它对话框，若值为ture，则关闭其它的对话框。
	*@param showEffect 是否显示弹出效果
	*/
	__proto.open=function(dialog,closeOther,showEffect){
		(closeOther===void 0)&& (closeOther=false);
		(showEffect===void 0)&& (showEffect=false);
		if (closeOther)Scene.closeAll();
		this._clearDialogEffect(dialog);
		if (dialog.isPopupCenter)this._centerDialog(dialog);
		Scene.root.addChild(dialog);
		this.doOpen(dialog);
		if (showEffect && dialog.popupEffect !=null)dialog.popupEffect.runWith(dialog);
	}

	/**@private */
	__proto._clearDialogEffect=function(dialog){
		if (dialog._effectTween){
			Tween.clear(dialog._effectTween);
			dialog._effectTween=null;
		}
	}

	/**
	*执行打开对话框。
	*@param dialog 需要关闭的对象框 <code>Dialog</code> 实例。
	*/
	__proto.doOpen=function(dialog){
		dialog.onOpened(dialog._param);
	}

	/**
	*关闭对话框。
	*@param dialog 需要关闭的对象框 <code>Dialog</code> 实例。
	*/
	__proto.close=function(dialog){
		this._clearDialogEffect(dialog);
		if (dialog.isShowEffect && dialog.closeEffect !=null)dialog.closeEffect.runWith([dialog]);
		else this.doClose(dialog);
	}

	/**
	*执行关闭对话框。
	*@param dialog 需要关闭的对象框 <code>Dialog</code> 实例。
	*/
	__proto.doClose=function(dialog){
		dialog.closeHandler && dialog.closeHandler.runWith(dialog.closeType);
		if (dialog.autoDestroyAtClosed)dialog.destroy();
		else{
			dialog.onClosed(dialog.closeType);
			dialog.removeSelf();
		}
	}

	/**
	*有个卵用
	*/
	__proto.lock=function(value){}
	__proto._checkMask=function(){}
	__static(PDialogManager,
	['instance',function(){return this.instance=new PDialogManager();}
	]);
	return PDialogManager;
})()


/**
*动画帧
*@author Administrator
*
*/
//class engine.base.sheet.MSheetFrame
var MSheetFrame=(function(){
	function MSheetFrame(mods,orgtex){
		this.texs=null;
		this.offxs=null;
		this.offys=null;
		this.texs=[];
		this.offxs=[];
		this.offys=[];
		for (var i=0;i < mods.length;++i){
			var divide=mods[i];
			var sub=Texture.create(orgtex,divide.dx,divide.dy,divide.dw,divide.dh);
			sub.alphaMask=orgtex.alphaMask;
			this.texs.push(sub);
			this.offxs.push(-divide.poiw);
			this.offys.push(-(divide.dh-divide.poih));
		}
	}

	__class(MSheetFrame,'engine.base.sheet.MSheetFrame');
	var __proto=MSheetFrame.prototype;
	__proto.destroy=function(){
		for (var i=0;i < this.texs.length;++i){
			this.texs[i].destroy();
		}
		this.texs=null;
		this.offxs=null;
		this.offys=null;
	}

	return MSheetFrame;
})()


/**
*移动策略移动类型，需要和动作类型定义一致
*@author Administrator
*/
//class engine.scene.move.EnumMoveType
var EnumMoveType=(function(){
	function EnumMoveType(){}
	__class(EnumMoveType,'engine.scene.move.EnumMoveType');
	EnumMoveType.MOVE_NONE=0;
	EnumMoveType.MOVE_RUN=1000;
	return EnumMoveType;
})()


/**
*动画基本定义
*@author Administrator
*/
//class engine.animation.define.MAnimationDefine
var MAnimationDefine=(function(){
	function MAnimationDefine(){}
	__class(MAnimationDefine,'engine.animation.define.MAnimationDefine');
	MAnimationDefine.RESPACK_TYPE_2D=1;
	MAnimationDefine.RESPACK_TYPE_3D=2;
	return MAnimationDefine;
})()


/**
*单个方向
*/
//class engine.base.sheet.MSheetDirection
var MSheetDirection=(function(){
	function MSheetDirection(){
		this.owner=null;
		// 方向
		this.dir=0;
		// 帧间隔
		this.intervals=null;
		// 渐隐间隔
		this.fades=null;
		// 缩放
		this.scale=0;
		// 帧数
		this.framenum=0;
		// 使用的内存
		this.useMemory=0;
		// 原始纹理
		this._orgtex=null;
		// 直接渲染用的数据
		this._sheets=null;
		// 模块数据(每帧对应的模块数据)
		this._frameModes=null;
		this._loadFailTimes=0;
		this._isLoading=false;
		this._waitAni=[];
	}

	__class(MSheetDirection,'engine.base.sheet.MSheetDirection');
	var __proto=MSheetDirection.prototype;
	__proto.ParseMod=function(meta){
		var adfHash=new Dictionary();
		var moduleNum=meta.getInt16();
		for (i=0;i < moduleNum;++i){
			var modid=meta.getInt32();
			var imageIdx=meta.getInt16();
			adfHash.set(modid,MSheetDivideFrame.CreateOne(meta,imageIdx));
		};
		var maxframeNum=meta.getInt16();
		if (maxframeNum !=this.framenum)
			ToolBase.LogError("不是单方向的数据？？");
		var framemodes=[];
		for (var i=0;i < maxframeNum;++i){
			var modnum=meta.getInt16();
			if (modnum < 0 || modnum > 1024){
				ToolBase.LogError("MSheetResPack (modnum < 0 || modnum > 1024) "+meta.length);
				return;
			};
			var mods=__newvec(modnum);
			for (var j=0;j < modnum;++j){
				var modidx=meta.getInt32();
				mods[j]=adfHash.get(modidx);
			}
			framemodes[i]=mods;
		}
		this._frameModes=framemodes;
	}

	__proto.GetFrames=function(ani){
		if (this._sheets==null){
			if (this._loadFailTimes >=3){
				ani && ani.OnTextureFailed(this);
				}else{
				if (ani && this._waitAni.indexOf(ani)==-1){
					this._waitAni.push(ani);
				}
				this.LoadTexture();
			}
			return null;
			}else{
			return this._sheets;
		}
	}

	__proto.LoadTexture=function(complete){
		if (!this._isLoading){
			MAnimationLoader.Ins.LoadTexture(this.owner.compressTex,this.owner.path,this.dir,Handler.create(this,this.OnLoadDirectionComp,[complete]));
			this._isLoading=true;
		}
	}

	__proto.OnLoadDirectionComp=function(complete,tex){
		this.__reeee(complete,tex);
	}

	__proto.__reeee=function(complete,tex){
		this._isLoading=false;
		this.SetTexture(tex);
		var waits=this._waitAni;
		if (!tex){
			this._loadFailTimes++;
			for (var i=0;i < waits.length;++i){
				(waits [i]).OnTextureFailed(this);
			}
			}else{
			for (var i=0;i < waits.length;++i){
				if (!waits[i].isDestroyed)
					(waits [i]).OnTextureLoaded(this);
			}
		}
		this._waitAni.length=0;
		complete && complete.runWith(this);
	}

	__proto.SetTexture=function(tex){
		if (!tex)
			return;
		this.releaseMem();
		this.useMemory=tex.bitmap.gpuMemory;
		if (tex.alphaMask){
			this.useMemory+=tex.alphaMask.bitmap.gpuMemory;
		}
		this._orgtex=tex;
		this._sheets=[];
		var frameMods=this._frameModes;
		var len=frameMods.length;
		var sheets=this._sheets=[];
		for (var i=0;i < len;++i){
			var modes=frameMods[i];
			var frame=new MSheetFrame(modes,tex);
			sheets.push(frame);
		}
	}

	__proto.releaseMem=function(){
		if (this._sheets){
			var sheets=this._sheets;
			for (var i=0;i < sheets.length;++i){
				sheets[i].destroy();
			}
			this._sheets=null;
		}
		this._orgtex && this._orgtex.destroy(true);
		this._orgtex=null;
		this.useMemory=0;
	}

	__getset(0,__proto,'isLoading',function(){
		return this._isLoading;
	});

	__getset(0,__proto,'isReady',function(){
		return this._sheets !=null;
	});

	return MSheetDirection;
})()


/**
*哈希列表队列组合
*插入比较慢，但是遍历和查找都很快
*@author Administrator
*
*/
//class engine.base.container.HashList
var HashList=(function(){
	function HashList(){
		this._hash=null;
		this._list=null;
		this._hash=new Object();
		this._list=[];
		ObjectRecord.rcd(this);
	}

	__class(HashList,'engine.base.container.HashList');
	var __proto=HashList.prototype;
	__proto.Get=function(k){
		var ret=this._hash[k];
		return ret;
	}

	__proto.Each=function(f){
		var arr=this._list;
		var len=arr.length;
		for (var i=0;i < len;++i)
		f(arr[i]);
	}

	__proto.GetCount=function(){
		return this._list.length;
	}

	__proto.Add=function(k,o){
		if (this._hash[k]==null){
			this._hash[k]=o;
			this._list.push(o);
		}
	}

	__proto.Remove=function(k){
		var ret=null;
		if (this._hash[k] !=null){
			ret=this._hash[k];
			delete this._hash[k];
			this._list.splice(this._list.indexOf(ret),1);
		}
		return ret;
	}

	__proto.Clear=function(){
		var ret=this._list;
		this._hash=new Object();
		this._list=[];
		return ret;
	}

	__proto.CheckSize=function(){
		var hashsize=0;
		for (var k in this._hash){
			hashsize++;
		}
		return (hashsize==this._list.length);
	}

	/**
	*方便外部遍历
	*@return
	*
	*/
	__getset(0,__proto,'list',function(){
		return this._list;
	});

	return HashList;
})()


/**
*抽象类
*场景地对象和实体管理
*
*@author Administrator
*/
//class engine.scene.MSceneObject
var MSceneObject=(function(){
	function MSceneObject(){
		this._allObjectHashList=null;
		this._typeListMap=new Dictionary();
		this._allObjectHashList=new HashList();
		Laya.timer.loop(1,this,this.OnFrame);
	}

	__class(MSceneObject,'engine.scene.MSceneObject');
	var __proto=MSceneObject.prototype;
	__proto.AddTypeObjList=function(typeName,type){
		if (this._typeListMap.get(typeName)!=null){
			throw new Error("AddTypeObjList key Already Exsit!");
		}
		this._typeListMap.set(typeName,new MSceneTypeList(typeName,type,this._allObjectHashList));
	}

	__proto.GetTypeObjectList=function(typename){
		return this._typeListMap.get(typename).hashList.list;
	}

	__proto.EachTypeObjectList=function(typename,func){
		this._typeListMap.get(typename).hashList.Each(func);
	}

	__proto.OnFrame=function(){
		var curt=Laya.timer.currTimer;
		var list;
		for(var $each_list in this._typeListMap.values){
			list=this._typeListMap.values[$each_list];
			var arr=list.hashList.list;
			var obj;
			for(var $each_obj in arr){
				obj=arr[$each_obj];
				if (obj.destroyed)
					continue ;
				obj.OnFrame(curt);
			}
		}
	}

	__proto.DeleteObject=function(gid){
		var so=this._allObjectHashList.Get(gid);
		if (so !=null){
			var typeList=this._typeListMap.get(so.objectType);
			if (typeList==null){
				ToolBase.Log("DeleteObject TypeObjectList typeList == null Error");
				throw new Error("DeleteObject TypeObjectList typeList == null Error");
			}
			typeList.RemoveSceneObject(gid);
		}
		return so;
	}

	__proto.AddObject=function(sceneobjgid,pooltype,bean,layertype){
		var addo=null;
		var typeList=this._typeListMap.get(pooltype);
		if (typeList==null){
			ToolBase.LogError("AddObject Unknow pooltype !!! pooltype :"+pooltype);
		}
		addo=typeList.GetCreateSceneObject(sceneobjgid);
		addo.map=MSceneMap.Ins;
		if (layertype==0)
			addo.map.mapLayer.AddMiddle(addo);
		else if (layertype==MapSceneLayer.LAYER_TYPE_BOTTOM)
		addo.map.mapLayer.AddBottom(addo);
		else if (layertype==1)
		addo.map.mapLayer.AddTop(addo);
		else
		ToolBase.LogError("AddObject Unknow layertype !!! layertype :"+layertype);
		addo.SetRawData(bean);
		return addo;
	}

	/**
	*移除周围对象，除了主玩家自己
	*/
	__proto.RemoveAllRoundObject=function(){
		var hl;
		for(var $each_hl in this._typeListMap.values){
			hl=this._typeListMap.values[$each_hl];
			if (hl.pooltype !=0)
				hl.RemoveAllSceneObject();
		}
		if (this._allObjectHashList.GetCount()> 1){
			ToolBase.LogError("removeAllRoundObject but not Clear!!!!!!! "+this._allObjectHashList.GetCount());
		}
		if (this._allObjectHashList.CheckSize()==false){
			ToolBase.LogError("removeAllRoundObject objHash.CheckSize false!!!!!!");
		}
	}

	/**
	*返回*便于少写as
	*@param id
	*@return
	*/
	__proto.FindObject=function(id){
		if (id==0)
			return null;
		return this._allObjectHashList.Get(id);
	}

	/**
	*寻找当前鼠标位置的对象
	*这种是可以进行空间四叉树优化的，闲的时候弄吧
	*@param wx
	*@param wy
	*@return
	*/
	__proto.FindMouseObj=function(wx,wy){
		var l=this._allObjectHashList.list;
		var len=l.length;
		var bo=null;
		var now;
		for (var i=0;i < len;++i){
			now=l[i];
			if (now.isNonMouseHit==false && now.CheckLocalBounding(wx,wy)){
				if (bo==null || now.gridY >=bo.gridY){
					bo=now;
				}
			}
		}
		return bo;
	}

	return MSceneObject;
})()


/**
*战场基类
*/
//class engine.battle.MBattleScene
var MBattleScene=(function(){
	function MBattleScene(){
		this._container=null;
		this._top=null;
		this._middle=null;
		this._bottom=null;
		this._backAlpha=null;
		this._backFaZhen=null;
		this._gridCon=null;
		this._shake=new SceneShakeControl();
		MBattleScene.Ins=this;
		this._container=new Sprite();
		this._container.size(Laya.stage.designWidth,Laya.stage.designHeight);
		this._top=new Sprite();
		this._middle=new Sprite();
		this._bottom=new Sprite();
		this._container.addChild(this._bottom);
		this._container.addChild(this._middle);
		this._container.addChild(this._top);
		this._container.zOrder=3;
		if (false){
			this._gridCon=new Sprite();
			var gw=36;
			var gh=36;
			for (var xx=gw;xx < Laya.stage.designWidth;xx+=gw){
				this._gridCon.graphics.drawLine(xx,0,xx,Laya.stage.designHeight,"#ff0000");
			}
			for (var yy=gh;yy < Laya.stage.designHeight;yy+=gh){
				this._gridCon.graphics.drawLine(0,yy,Laya.stage.designWidth,yy,"#ff0000");
			}
		}
	}

	__class(MBattleScene,'engine.battle.MBattleScene');
	var __proto=MBattleScene.prototype;
	__proto.Init=function(){
		Laya.timer.loop(1,this,this._OnFrame);
	}

	__proto.ResizeHandler=function(){
		this._container.pos((Laya.stage.width-this._container.width)/2,(Laya.stage.height-this._container.height)/2);
		this._backAlpha.graphics.clear();
		this._backAlpha.size(Laya.stage.width+50,Laya.stage.height+50);
		this._backAlpha.graphics.drawRect(0,0,this._backAlpha.width,this._backAlpha.height,"#0000005a");
		this._backAlpha.pos((this._container.width-this._backAlpha.width)/2,(this._container.height-this._backAlpha.height)/2);
	}

	/**
	*开启
	*@param url
	*/
	__proto.OpenBattle=function(url){
		if (this._backAlpha==null)
			this._backAlpha=new Sprite();
		if (this._backFaZhen==null){
			this._backFaZhen=new Sprite();
			this._backFaZhen.size(628,396);
			this._backFaZhen.loadImage(url);
		}
		this._backFaZhen.pos((this._container.width-this._backFaZhen.width)/2,(this._container.height-this._backFaZhen.height)/2);
		this.AddBottom(this._backAlpha);
		this.AddBottom(this._backFaZhen);
		this.ResizeHandler();
		Scene.root.addChild(this._container);
		Laya.stage.on("resize",this,this.ResizeHandler);
		if (this._gridCon){
			Laya.stage.addChild(this._gridCon);
		}
	}

	/**
	*关闭战场
	*@param url
	*/
	__proto.CloseBattle=function(){
		this._top.destroyChildren();
		this._bottom.destroyChildren();
		this._middle.destroyChildren();
		this._backAlpha=null;
		this._backFaZhen=null;
		this._container.removeSelf();
		if (this._gridCon){
			this._gridCon.removeSelf();
		}
		Laya.stage.off("resize",this,this.ResizeHandler);
	}

	__proto._OnFrame=function(){
		var curtime=Laya.timer.currTimer;
		this.OnFrame(curtime);
	}

	__proto.OnFrame=function(curtime){
		this._shake.OnFrame(curtime);
		if (this._shake.GetShakeFlag()){
			var xx=this._shake.shakeValue.x;
			var yy=this._shake.shakeValue.y;
			this._top.pos(xx,yy);
			this._middle.pos(xx,yy);
			this._bottom.pos(xx,yy);
		}
	}

	__proto.AddTop=function(dis){
		this._top.addChild(dis);
	}

	__proto.AddMiddle=function(dis){
		this._middle.addChild(dis);
	}

	__proto.AddBottom=function(dis){
		this._bottom.addChild(dis);
	}

	__getset(0,__proto,'middle',function(){
		return this._middle;
	});

	__getset(0,__proto,'container',function(){
		return this._container;
	});

	MBattleScene.Ins=null;
	return MBattleScene;
})()


/**
*timeline扩展，主要是方便处理完成事件
*/
//class engine.greensock.TimelineExt
var TimelineExt=(function(){
	function TimelineExt(){
		this._labelc=0;
		this._timeline=null;
		this._compFunc=null;
		this._compParam=null;
	}

	__class(TimelineExt,'engine.greensock.TimelineExt');
	var __proto=TimelineExt.prototype;
	__proto.to=function(target,props,duration,ease,offset){
		(offset===void 0)&& (offset=0);
		this._timeline.to(target,props,duration,ease,offset);
		return this;
	}

	__proto.play=function(timeOrLabel,loop){
		(timeOrLabel===void 0)&& (timeOrLabel=0);
		(loop===void 0)&& (loop=false);
		this._timeline.play(timeOrLabel,loop);
	}

	__proto.OnComplete=function(){
		if (this._compFunc !=null){
			this._compFunc.apply(null,this._compParam);
		}
		this.destroy();
	}

	__proto.destroy=function(){
		if (this._timeline !=null){
			this._timeline.destroy();
			this._timeline=null;
			this._compFunc=null;
			this._compParam=null;
			Pool.recover("TimelineExt",this);
		}
	}

	TimelineExt.create=function(comp,compparams){
		var ret=Pool.getItemByClass("TimelineExt",TimelineExt);
		ret._compFunc=comp;
		ret._compParam=compparams;
		if (ret._compParam !=null)
			ret._compParam.push(ret);
		ret._timeline=new TimeLine();
		ret._timeline.on("complete",ret,ret.OnComplete);
		return ret;
	}

	return TimelineExt;
})()


/**
*抽象资源包，动画资源包数据，一个资源只有一份
*这个提取出来是方便和2d复用
*@author Administrator
*
*/
//class engine.base.sheet.MSheetResPack
var MSheetResPack=(function(){
	function MSheetResPack(){
		// 图包url
		this.url=null;
		// 路径
		this.path=null;
		// 是否压缩纹理
		this.compressTex=false;
		this.blend=0;
		this.maxdir=0;
		this.alltime=0;
		this.dirs=[];
	}

	__class(MSheetResPack,'engine.base.sheet.MSheetResPack');
	var __proto=MSheetResPack.prototype;
	__proto.Parse=function(content){
		var bytes=new Byte(content);
		bytes.getInt32();
		bytes.getInt32();
		this.blend=bytes.getByte();
		this.maxdir=bytes.getByte();
		var dirtime=0;
		for (var i=0;i < this.maxdir;++i){
			var framenum=bytes.getByte();
			if (framenum==0){
				continue ;
				}else{
				var dir=new MSheetDirection();
				this.dirs[i]=dir;
				dir.owner=this;
				dir.dir=i;
				dir.framenum=framenum;
				dir.scale=100 / bytes.getByte();
				if (isNaN(dir.scale))dir.scale=1;
				dir.intervals=[];
				for (var uu=0;uu < framenum;++uu){
					dir.intervals[uu]=bytes.getInt16();
					!this.alltime && (dirtime+=dir.intervals[uu]);
				}
				!this.alltime && (this.alltime=dirtime);
				if (bytes.getInt16()==1){
					dir.fades=[];
					for (var uu=0;uu < framenum;++uu){
						dir.intervals.push(bytes.getInt16());
					}
				}
				bytes.getInt16();
				dir.ParseMod(bytes);
			}
		}
		bytes.clear();
	}

	// 批量加载方向，只用于预加载
	__proto.LoadAllTexture=function(complete){
		var _$this=this;
		var isLoading=false;
		this.dirs.forEach(function(sheet){
			if (sheet){
				sheet.LoadTexture(Handler.create(this,_$this.OnOneTextureLoaded,[complete]));
				isLoading=true;
			}
		},this);
		if (!isLoading){
			complete && complete.runWith(this);
		}
	}

	__proto.OnOneTextureLoaded=function(complete,dir){
		var isEnd=true;
		this.dirs.forEach(function(sheet){
			if (sheet && sheet.isLoading){
				isEnd=false;
			}
		},this);
		if (isEnd)
			complete && complete.runWith(this);
	}

	// 根据引用对象来释放内存
	__proto.releaseMem=function(refDir){
		var _$this=this;
		var log="";
		this.dirs.forEach(function(dir){
			if (dir && dir.isReady && (refDir==null || refDir.indexOf(dir.dir)==-1)){
				log+=_$this.path+" dir"+dir.dir+"\r\n";
				dir.releaseMem();
			}
		},this);
		return log;
	}

	__getset(0,__proto,'useMemory',function(){
		var ret=0;
		this.dirs.forEach(function(dir){
			ret+=dir.useMemory;
		});
		return ret;
	});

	__getset(0,__proto,'validDir',function(){
		var ret="";
		this.dirs.forEach(function(dir){
			if (dir && dir.isReady){
				ret+=dir.dir+" ";
			}
		});
		return ret;
	});

	return MSheetResPack;
})()


/**
*动画工具类
*/
//class engine.res.MAnimationUtil
var MAnimationUtil=(function(){
	function MAnimationUtil(){}
	__class(MAnimationUtil,'engine.res.MAnimationUtil');
	MAnimationUtil.RegType=function(type,name){
		MAnimationUtil.RES_TYPE_MAP[type]=name;
	}

	MAnimationUtil.RegActType=function(type,name){
		MAnimationUtil.ACTION_TYPE_MAP[type]=name;
	}

	MAnimationUtil.RegActLoop=function(type){
		MAnimationUtil.ACTION_LOOP_MAP[type]=true;
	}

	MAnimationUtil.IsLoop=function(action){
		return MAnimationUtil.ACTION_LOOP_MAP[action]==true;
	}

	MAnimationUtil.RegUnLoad=function(resType,resId,actType){
		(actType===void 0)&& (actType=-1);
		MAnimationUtil.UNLOAD_URLS.push([resType,resId,actType]);
	}

	MAnimationUtil.IsUnload=function(resType,resId,actType){
		var arr=MAnimationUtil.UNLOAD_URLS;
		for(var i=0;i < arr.length;++i){
			if (arr[i][0]==resType){
				var id=arr[i][1];
				var act=arr[i][2];
				if (id==-1 || id==resId){
					return act==-1 || act==actType;
				}
			}
		}
		return false;
	}

	MAnimationUtil.ToKeyName=function(type,resId,actType,extra){
		if ((typeof type=='string')|| (typeof resId=='string')|| (typeof actType=='string')){
			ToolBase.LogError("ToKeyName参数类型错误:  npctype="+type+" id="+resId+" act="+actType);
		};
		var typeKey=MAnimationUtil.RES_TYPE_MAP[type];
		var actionKey=MAnimationUtil.ACTION_TYPE_MAP[actType];
		if (typeKey==null){
			ToolBase.LogError("没有注册的动画类型:"+type);
		}
		if (actionKey==null){
			ToolBase.LogError("没有注册的动作类型:"+actType);
		}
		if (extra==null)
			return typeKey+"/"+resId+"/"+actionKey;
		else
		return typeKey+"/"+resId+"/"+extra+"/"+actionKey;
	}

	MAnimationUtil.ToShortKey=function(type,resId,extra){
		if ((typeof type=='string')|| (typeof resId=='string')){
			ToolBase.LogError("ToKeyName参数类型错误:  type="+type+" id="+resId);
		};
		var typeKey=MAnimationUtil.RES_TYPE_MAP[type];
		if (typeKey==null){
			ToolBase.LogError("没有注册的动画类型:"+type);
		}
		if (extra==null)
			return typeKey+"/"+resId;
		else
		return typeKey+"/"+resId+"/"+extra;
	}

	MAnimationUtil.GetActionName=function(actionId){
		return MAnimationUtil.ACTION_TYPE_MAP[actionId];
	}

	MAnimationUtil.ROOT_URL="res/animation/";
	MAnimationUtil.UNLOAD_URLS=[];
	__static(MAnimationUtil,
	['RES_TYPE_MAP',function(){return this.RES_TYPE_MAP=new Object();},'ACTION_TYPE_MAP',function(){return this.ACTION_TYPE_MAP=new Object();},'ACTION_LOOP_MAP',function(){return this.ACTION_LOOP_MAP=new Object();},'ACTION_MAP_MAP',function(){return this.ACTION_MAP_MAP=new Object();}
	]);
	return MAnimationUtil;
})()


/**
*json 数据处理
*@author Administrator
*
*/
//class engine.supports.utils.JSONUtil
var JSONUtil=(function(){
	function JSONUtil(){}
	__class(JSONUtil,'engine.supports.utils.JSONUtil');
	JSONUtil.encode=function(o){
		return JSON.stringify(o);
	}

	JSONUtil.decode2=function(s){
		if(s==null)return null;
		s=s.split("|").join(",");
		return JSONUtil.decode(s);
	}

	JSONUtil.decode=function(s){
		var ret=null;
		try{
			if (s==null || s=="")
				return null;
			ret=JSON.parse(s);
		}
		catch (err){
			if (JSONUtil.DEBUG_MODE){
				console.log("decode json error:"+err.message);
			}
			ret=null;
		}
		return ret;
	}

	JSONUtil.isJson=function(s){
		try{
			JSONUtil.decode(s);
		}
		catch (err){
			return false;
		}
		return true;
	}

	JSONUtil.DEBUG_MODE=false;
	return JSONUtil;
})()


/**
*地图坠崖方向信息
*@author Administrator
*
*/
//class engine.scene.data.MapDownHillData
var MapDownHillData=(function(){
	function MapDownHillData(bytes){
		this._x=0;
		this._y=0;
		this._dirvalue=0;
		this._disvalue=0;
		this._x=bytes.readShort();
		this._y=bytes.readShort();
		this._dirvalue=bytes.readByte();
		this._disvalue=bytes.readByte();
		ObjectRecord.rcd(this);
	}

	__class(MapDownHillData,'engine.scene.data.MapDownHillData');
	var __proto=MapDownHillData.prototype;
	__getset(0,__proto,'x',function(){
		return this._x;
	});

	/**
	*距离信息
	*/
	__getset(0,__proto,'disvalue',function(){
		return this._disvalue;
	});

	__getset(0,__proto,'y',function(){
		return this._y;
	});

	/**
	*方向信息，每位表示一个方向
	*/
	__getset(0,__proto,'dirvalue',function(){
		return this._dirvalue;
	});

	return MapDownHillData;
})()


//class engine.utils.UITool
var UITool=(function(){
	function UITool(){}
	__class(UITool,'engine.utils.UITool');
	UITool.MakeUrl=function(url){
		if (url.indexOf("res/ui/")==0)
			return url;
		return "res/ui/"+url;
	}

	UITool.GetSprite=function(url,isMakeUrl,w,h,complete,cacheAs){
		(isMakeUrl===void 0)&& (isMakeUrl=true);
		(w===void 0)&& (w=0);
		(h===void 0)&& (h=0);
		(cacheAs===void 0)&& (cacheAs="none");
		if (isMakeUrl)
			url=UITool.MakeUrl(url);
		var ret=new Sprite();
		ret.width=w;
		ret.height=h;
		ret.loadImage(url,complete);
		ret.cacheAs=cacheAs;
		return ret;
	}

	UITool.SetUIImage=function(comUI,url,isMakeUrl){
		(isMakeUrl===void 0)&& (isMakeUrl=true);
		if (comUI==null)
			return;
		if (isMakeUrl)
			url=UITool.MakeUrl(url);
		if ((comUI instanceof laya.ui.UIComponent )){
			comUI.skin=url;
		}
		else if ((comUI instanceof laya.display.Sprite )){
			comUI.loadImage(url,0,0,comUI.width,comUI.height);
		}
		else{
			comUI.graphics.loadImage(url,0,0,comUI.width,comUI.height);
		}
	}

	UITool.AddFilter=function(target,filter){
		if (filter==null)
			return;
		var fs=target.filters;
		if (fs !=null && fs.indexOf(filter)!=-1)
			return;
		UIUtils.addFilter(target,filter);
	}

	UITool.RemoveFilter=function(target,filter){
		if (filter==null)
			return;
		var fs=target.filters;
		if (fs !=null && fs.indexOf(filter)!=-1){
			fs.splice(fs.indexOf(filter),1);
			target.filters=fs;
		}
	}

	return UITool;
})()


/**
*简单切页控制（处理有很多个子分页，但是又没得RadioGroup控制的，比如玄女-飞升的n个阶段）
*/
//class engine.pui.tab.SimpleTabControl
var SimpleTabControl=(function(){
	function SimpleTabControl(){
		this._pages=null;
		this._pageParams=null;
		this._panContent=null;
		this._panList=null;
		this._curIndex=-1;
	}

	__class(SimpleTabControl,'engine.pui.tab.SimpleTabControl');
	var __proto=SimpleTabControl.prototype;
	__proto.destory=function(){
		var v;
		for(var $each_v in this._panList){
			v=this._panList[$each_v];
			if (v && !v.destroyed)v.destroy();
		}
		this._panContent=null;
		this._panList=null;
		this._pages=null;
		this._pageParams=null;
	}

	/**
	*设置选项卡数据
	*@param content 绑定面板容器
	*@param pages 字符串数组[common/panel1,common/panel2]
	*@param params 面板对应的onOpen参数
	*/
	__proto.setTabData=function(content,pages,params){
		if (content==null)
			throw new Error("选项卡容器不能为空");
		this._panContent=content;
		this._pages=pages;
		this._pageParams=params;
		this._panList={};
	}

	__proto.selectIndex=function(index){
		if (index==this._curIndex)return;
		this.showIndex(index);
	}

	__proto.showIndex=function(index){
		if (this._panList[this._curIndex] !=null){
			this._panList[this._curIndex].close();
			if (this._panList[this._curIndex].destroyed){
				this._panList[this._curIndex]=null;
			}
		}
		this._curIndex=index;
		var pan=this._panList[index];
		if (pan==null){
			PUIMgr.Ins.load(this._pages[index],Handler.create(this,this.openTab,[index]));
			}else{
			this.openTab(index,pan);
		}
	}

	__proto.openTab=function(index,scene){
		if (scene==null || this._curIndex !=index){
			this._panList[index]=null;
			if (scene){
				scene.close();
				if (!scene.destroyed)
					this._panList[index]=scene;
			}
			return;
		}
		this._panList[index]=scene;
		this._panContent.addChild(scene);
		if (this._pageParams !=null){
			scene.onOpened(this._pageParams[index]);
			}else{
			scene.onOpened(null);
		}
	}

	return SimpleTabControl;
})()


//class engine.base.data.ByteBufferUtil
var ByteBufferUtil=(function(){
	function ByteBufferUtil(){}
	__class(ByteBufferUtil,'engine.base.data.ByteBufferUtil');
	ByteBufferUtil.writeInt=function(buf,value){
		while (true){
			if ((value & ~0x7F)==0){
				buf.writeByte(value);
				return;
				}else {
				buf.writeByte((value & 0x7F)| 0x80);
				value >>>=7;
			}
		}
	}

	ByteBufferUtil.readInt=function(buf){
		var tmp=buf.readByte();
		if (tmp >=0){
			return tmp;
		};
		var result=tmp & 0x7f;
		if ((tmp=buf.readByte())>=0){
			result |=tmp << 7;
			}else {
			result |=(tmp & 0x7f)<< 7;
			if ((tmp=buf.readByte())>=0){
				result |=tmp << 14;
				}else {
				result |=(tmp & 0x7f)<< 14;
				if ((tmp=buf.readByte())>=0){
					result |=tmp << 21;
					}else {
					result |=(tmp & 0x7f)<< 21;
					result |=(tmp=buf.readByte())<< 28;
					if (tmp < 0){
						for (var i=0;i < 5;i++){
							if (buf.readByte()>=0){
								return result;
							}
						}
						throw new Error("Malformed VarInt");
					}
				}
			}
		}
		return result;
	}

	ByteBufferUtil.writeLong=function(buf,v){
		if (v==null){
			buf.writeByte(0);
			return;
		};
		var t1=ByteBufferUtil._temp_long;
		var t2=ByteBufferUtil._temp_long2;
		t1.setValue(v.lValue,v.hValue);
		while (true){
			t2.setValue(~0x7F,0xFFFFFFFF);
			if (t2.and(t1).equals(0)){
				var w=t1.andInt(0x7F);
				buf.writeByte(w);
				return;
				}else {
				var w=t1.andInt(0x7F)| 0x80;
				buf.writeByte(w);
				t1=t1.rightShiftFill0(7);
			}
		}
	}

	ByteBufferUtil.readLong=function(buf){
		var shift=0;
		var tmp=ByteBufferUtil._temp_long;
		var result=new long();
		while (shift < 64){
			var b=buf.readByte();
			tmp.setValue(b & 0x7f,0);
			tmp.leftShift(shift);
			result.or(tmp);
			if ((b & 0x80)==0){
				result.makeHex();
				return result;
			}
			shift+=7;
		}
		throw new Error("Malformed VarInt");
	}

	ByteBufferUtil.readString=function(buf){
		var length=ByteBufferUtil.readInt(buf);
		if (length==0)
			return null;
		else
		return buf.readUTFBytes(length);
	}

	__static(ByteBufferUtil,
	['_temp_long',function(){return this._temp_long=new long();},'_temp_long2',function(){return this._temp_long2=new long();}
	]);
	return ByteBufferUtil;
})()


/**
*@author Administrator
*/
//class engine.ui.events.CoolDownEvent
var CoolDownEvent=(function(){
	function CoolDownEvent(){}
	__class(CoolDownEvent,'engine.ui.events.CoolDownEvent');
	CoolDownEvent.COOLDOWN_FINISHED="grid_cooldown_finished";
	CoolDownEvent.COOLDOWN_WARNING="cooldown_warning";
	return CoolDownEvent;
})()


//class engine.base.define.MDirection
var MDirection=(function(){
	function MDirection(){}
	__class(MDirection,'engine.base.define.MDirection');
	MDirection.IsValid=function(dir){
		return (dir >=0 && dir <=7);
	}

	MDirection.ValidDir=function(dir,fixdir){
		(fixdir===void 0)&& (fixdir=0);
		if (dir >=0 && dir <=7)
			return dir;
		return fixdir;
	}

	MDirection.GetObDir=function(dir){
		return (dir+4)% 8;
	}

	MDirection.RandomDir=function(){
		return Math.random()*8;
	}

	MDirection.GetDirOff=function(dir1,dir2){
		var off=dir2-dir1;
		if (off > 4){
			off-=8;
		}
		if (off <-4){
			off+=8;
		}
		return off;
	}

	MDirection.GetOffDir=function(dir,off){
		if (MDirection.IsValid(dir)==false)
			return MDirection.NONE;
		off %=8;
		return (dir+off+8)% 8;
	}

	MDirection.ToAngle=function(dir){
		if (dir==0)
			return 0;
		else if (dir==1)
		return 45;
		else if (dir==2)
		return 90;
		else if (dir==3)
		return 135;
		else if (dir==4)
		return 180;
		else if (dir==5)
		return 225;
		else if (dir==6)
		return 270;
		else if (dir==7)
		return 315;
		return 0;
	}

	MDirection.GetDir=function(sx,sy,ex,ey){
		var xoff=sx-ex;
		var yoff=sy-ey;
		if (xoff==0 && yoff==0)
			return MDirection.NONE;
		if (xoff==0){
			if (yoff > 0)
				return 0;
			else
			return 4;
		}
		else if (xoff < 0){
			if (yoff > 0)
				return 1;
			else if (yoff < 0)
			return 3;
			else
			return 2;
		}
		else if (xoff > 0){
			if (yoff > 0)
				return 7;
			else if (yoff < 0)
			return 5;
			else
			return 6;
		}
		return MDirection.NONE;
	}

	MDirection.DirToNormalVector=function(dir){
		switch (dir){
			case 0:return new Point$1(0,1);
			case 1:return new Point$1(1,1);
			case 2:return new Point$1(1,0);
			case 3:return new Point$1(1,-1);
			case 4:return new Point$1(0,-1);
			case 5:return new Point$1(-1,-1);
			case 6:return new Point$1(-1,0);
			case 7:return new Point$1(-1,1);
			default :return new Point$1(0,0);
			}
	}

	MDirection.NUM=8;
	MDirection.NONE=-1;
	MDirection.UP=0;
	MDirection.RIGHT_UP=1;
	MDirection.RIGHT=2;
	MDirection.RIGHT_DOWN=3;
	MDirection.DOWN=4;
	MDirection.LEFT_DOWN=5;
	MDirection.LEFT=6;
	MDirection.LEFT_UP=7;
	__static(MDirection,
	['VIRDIR_5',function(){return this.VIRDIR_5=[ 0,1,2,3,4,3,2,1];},'VIRDIR_2',function(){return this.VIRDIR_2=[0,0,0,0,0,1,1,1];},'VIRDIR_1',function(){return this.VIRDIR_1=[0,0,0,0,0,0,0,0];}
	]);
	return MDirection;
})()


/**
*动画资源释放逻辑
*序列帧
*/
//class engine.res.MSheetAnimationGC
var MSheetAnimationGC=(function(){
	function MSheetAnimationGC(){
		// 重置游戏时间，（这个机制用于清楚各种为释放的内存和内存泄露问题。。。。）
		this.resetGameTime=30 *60 *1000;
		this._checkRestTime=0;
		this._refAniMap=new Dictionary();
		this._refKeyTimeMap=new Object();
		this._gcProxy=new MAnimationGCProxy();
	}

	__class(MSheetAnimationGC,'engine.res.MSheetAnimationGC');
	var __proto=MSheetAnimationGC.prototype;
	__proto.StartCheckGC=function(){
		Laya.timer.loop(MSheetAnimationGC.GC_CHECK_TIME,this,this.OnFrame);
		this._checkRestTime=ToolBase.GetTimer();
	}

	__proto.DelForeverRes=function(url){
		this._gcProxy.DelForever(url);
	}

	__proto.RegisterForeverRes=function(url){
		this._gcProxy.RegisterForever(url);
	}

	__proto.RegisterTypeId=function(oldtype,oldid,oldExtra,type,id,extra){
		this._gcProxy.RegisterTypeId(oldtype,oldid,oldExtra,type,id,extra);
	}

	/**
	*引用一个IAnimationRes
	*/
	__proto.RefAni=function(anim){
		this._refAniMap.set(anim,ToolBase.GetTimer());
	}

	/**
	*释放一个IAnimationRes的引用
	*/
	__proto.FreeAni=function(anim){
		this._refAniMap.remove(anim);
	}

	/**
	*刷新一个动画资源的引用时间
	*/
	__proto.RefKey=function(key){
		this._refKeyTimeMap[key]=ToolBase.GetTimer();
	}

	__proto.OnFrame=function(){
		var value=Resource.gpuMemory;
		if (Math.floor(value / (1024 *1024)*100)/ 100 > MSheetAnimationGC.MEMORY_THRESHOLD){
			this.DoGC();
			MTempletManager.Ins.DoGC(this._gcProxy);
			CallbackUtil.callbackOutGC && CallbackUtil.callbackOutGC();
		}
	}

	__proto.checkResetTime=function(){
		if (Browser.window["conchConfig"] !=null){
			var config=Browser.window["conchConfig"];
			var totalMem=config.getTotalMem();
			if (totalMem < 1048576){
				console.log("===cgc level 0.");
			}
			else if (totalMem > 1048576 && totalMem <=2097152){
				this.resetGameTime=35 *60 *1000;
				console.log("===cgc level 1.");
			}
			else if (totalMem > 2097152 && totalMem <=3145728){
				this.resetGameTime=45 *60 *1000;
				console.log("===cgc level 2.");
			}
			else{
				this.resetGameTime=60 *60 *1000;
				console.log("===cgc level 3.");
			}
		}
	}

	// 是否可以重置释放了
	__proto.isResetGame=function(){
		if ((ToolBase.GetTimer()-this._checkRestTime)> this.resetGameTime && Browser.onAndroid){
			return true;
		}
		return false;
	}

	__proto.DoGC=function(){
		var refKey={};
		var key;
		var keys=this._refAniMap.keys;
		for (var i=0;i < keys.length;++i){
			var anim=keys[i];
			key=anim.loadingkey;
			if (key==null)continue ;
			var refDir=refKey[key];
			if (refDir==null)
				refKey[key]=[anim.renderDir];
			else{
				if (refDir.indexOf(anim.renderDir)==-1)
					refDir.push(anim.renderDir);
			}
		};
		var animMgr=MSheetAnimationMgr.Ins;
		var packs=animMgr.sheetPackMap;
		var gcProx=this._gcProxy;
		var log="MSheetAnimationGC  do gc:\r\n";
		for (var key in packs){
			if (gcProx.IsCanRelease(key,true)){
				var refDir=refKey[key];
				var pack=packs[key];
				log+=pack.releaseMem(refDir);
			}
		}
		console.log(log);
	}

	/**
	*动画数量
	*2d_3d
	*/
	__proto.GetMAnimationCount=function(){
		var arr=this._refAniMap.keys;
		var d2=0;
		var d3=0;
		for (var i=0;i < arr.length;++i){
			if ((arr [i]).resPackType==1)
				d2++;
			else
			d3++;
		}
		return d2+"_"+d3;
	}

	MSheetAnimationGC.GC_CHECK_TIME=5 *60 *1000;
	MSheetAnimationGC.MEMORY_THRESHOLD=350;
	__static(MSheetAnimationGC,
	['Ins',function(){return this.Ins=new MSheetAnimationGC();}
	]);
	return MSheetAnimationGC;
})()


/**
*地图工具类
*@author Administrator
*/
//class engine.tool.ToolMap
var ToolMap=(function(){
	function ToolMap(){}
	__class(ToolMap,'engine.tool.ToolMap');
	ToolMap.PixPt2GridPt=function(x,y,pt){
		if (pt==null)
			pt=new Point$1();
		return pt.setTo((x / ToolMap.GRID_WIDTH | 0),(y / ToolMap.GRID_HEIGHT | 0));
	}

	ToolMap.PixPtToGridPt=function(pt){
		return new Point$1((pt.x / ToolMap.GRID_WIDTH | 0),(pt.y / ToolMap.GRID_HEIGHT | 0));
	}

	ToolMap.PixPt2PixMiddlePt=function(x,y){
		return new Point$1((x / ToolMap.GRID_WIDTH | 0)*ToolMap.GRID_WIDTH+ToolMap.GRID_WIDTH / 2,(y / ToolMap.GRID_HEIGHT | 0)*ToolMap.GRID_HEIGHT+ToolMap.GRID_HEIGHT / 2);
	}

	ToolMap.PixPtToPixMiddlePt=function(pt){
		return new Point$1((pt.x / ToolMap.GRID_WIDTH | 0)*ToolMap.GRID_WIDTH+ToolMap.GRID_WIDTH / 2,(pt.y / ToolMap.GRID_HEIGHT | 0)*ToolMap.GRID_HEIGHT+ToolMap.GRID_HEIGHT / 2);
	}

	ToolMap.GridPt2PixPt=function(x,y,ismiddle){
		(ismiddle===void 0)&& (ismiddle=true);
		if (ismiddle==true)
			return new Point$1((x *ToolMap.GRID_WIDTH)+ToolMap.GRID_WIDTH_HALF,(y *ToolMap.GRID_HEIGHT)+ToolMap.GRID_HEIGHT_HALF);
		return new Point$1((x *ToolMap.GRID_WIDTH),(y *ToolMap.GRID_HEIGHT));
	}

	ToolMap.GridPtToPixPt=function(pt,ismiddle){
		(ismiddle===void 0)&& (ismiddle=true);
		if (ismiddle==true)
			return new Point$1((pt.x *ToolMap.GRID_WIDTH)+ToolMap.GRID_WIDTH_HALF,(pt.y *ToolMap.GRID_HEIGHT)+ToolMap.GRID_HEIGHT_HALF);
		return new Point$1((pt.x *ToolMap.GRID_WIDTH),(pt.y *ToolMap.GRID_HEIGHT));
	}

	ToolMap.GridXToPixX=function(x){
		return x *ToolMap.GRID_WIDTH+ToolMap.GRID_WIDTH_HALF;
	}

	ToolMap.GridYToPixY=function(y){
		return y *ToolMap.GRID_HEIGHT+ToolMap.GRID_HEIGHT_HALF;
	}

	ToolMap.PixXToGridX=function(x){
		return (x / ToolMap.GRID_WIDTH | 0);
	}

	ToolMap.PixXToPixXCenter=function(x){
		return (x / ToolMap.GRID_WIDTH | 0)*ToolMap.GRID_WIDTH+ToolMap.GRID_WIDTH / 2;
	}

	ToolMap.PixYToGridY=function(y){
		return (y / ToolMap.GRID_HEIGHT | 0);
	}

	ToolMap.PixYToPixYCenter=function(y){
		return (y / ToolMap.GRID_HEIGHT | 0)*ToolMap.GRID_HEIGHT+ToolMap.GRID_HEIGHT / 2;
	}

	ToolMap.ArrayGridPt2PixPt=function(list){
		var ret=[];
		for (var i=0;i < list.length;i++){
			ret.push(new Point$1(list[i].x *ToolMap.GRID_WIDTH+ToolMap.GRID_WIDTH_HALF,(list[i].y *ToolMap.GRID_HEIGHT+ToolMap.GRID_HEIGHT_HALF)));
		}
		return ret;
	}

	ToolMap.CalcEndPtByDir=function(ptb,dir,step,calcBoard){
		(calcBoard===void 0)&& (calcBoard=true);
		if (calcBoard){
			var temppt=new Point$1(ptb.x,ptb.y);
			var ret=new Point$1(ptb.x,ptb.y);
			for (var i=0;i < step;++i){
				temppt.x+=ToolMap.DirectionOffsetX8[dir];
				temppt.y+=ToolMap.DirectionOffsetY8[dir];
				if (temppt.x >=MSceneMap.Ins.gridWidth || temppt.x < 0){
					break ;
				}
				if (temppt.y >=MSceneMap.Ins.gridHeight || temppt.y < 0){
					break ;
				}
				ret.x=temppt.x;
				ret.y=temppt.y;
			}
			return ret;
		}
		else{
			return new Point$1(ptb.x+ToolMap.DirectionOffsetX8[dir] *step,ptb.y+ToolMap.DirectionOffsetY8[dir] *step);
		}
	}

	ToolMap.CalcSceneZOrder=function(pixx,pixy){
		return pixy *100000+pixx;
	}

	ToolMap.CalcBeginPtByDir=function(pte,dir,step){
		dir=MDirection.GetObDir(dir);
		return new Point$1(pte.x+ToolMap.DirectionOffsetX8[dir] *step,pte.y+ToolMap.DirectionOffsetY8[dir] *step);
	}

	ToolMap.CalcDirectionSlant=function(pt1,pt2,defaultDir){
		(defaultDir===void 0)&& (defaultDir=MDirection.NONE);
		return ToolMap.CalcDirSlant(pt1.x,pt1.y,pt2.x,pt2.y,defaultDir);
	}

	ToolMap.CalcDirSlant=function(x1,y1,x2,y2,defaultDir){
		(defaultDir===void 0)&& (defaultDir=0);
		if (1==0){
			return ToolMap.CalcDir8ByAngle(x1,y1,x2,y2);
		}
		else if (1==1){
			return ToolMap.CalcDir4ByAngle(x1,y1,x2,y2);
		}
		return MDirection.NONE;
	}

	ToolMap.GetAngle=function(x1,y1,x2,y2){
		return Math.atan2(y2-y1,x2-x1)*180 / Math.PI;
	}

	ToolMap.AngleBetween=function(val,min,max){
		return (val > min && val <=max);
	}

	ToolMap.CalcDir=function(x1,y1,x2,y2){
		return MDirection.GetDir(x1,y1,x2,y2);
	}

	ToolMap.CalcDirection=function(pt1,pt2){
		return MDirection.GetDir(pt1.x,pt1.y,pt2.x,pt2.y);
	}

	ToolMap.CalcBeginPtByPath=function(path,endpt){
		var ret=new Point$1(endpt.x,endpt.y);
		for (var i=path.length-1;i >=0;i--){
			var magic=(path[i] & 0x0ff);
			var dir=MDirection.GetObDir(magic >> 5);
			var len=(magic & 0x1f);
			ret.x+=ToolMap.DirectionOffsetX8[dir] *len;
			ret.y+=ToolMap.DirectionOffsetY8[dir] *len;
		}
		return ret;
	}

	ToolMap.CalcNearPt=function(pt,dir,type){
		if (MDirection.IsValid(dir)==false)
			dir=0;
		var ret=new Point$1(pt.x,pt.y);
		for (var i=0;i < 8;i++){
			ret.x=ret.x+ToolMap.DirectionOffsetX8[(i+dir)% 8];
			ret.y=ret.y+ToolMap.DirectionOffsetY8[(i+dir)% 8];
			if (type==0)
				break ;
		}
		return ret;
	}

	ToolMap.PathToWay=function(list,beginpt){
		var ret=[];
		var startx=(beginpt.x | 0);
		var starty=(beginpt.y | 0);
		while (list.length > 0){
			var vec=list.shift();
			if (vec < 0)
				return null;
			var dir=vec >> 5;
			var len=vec & 0x1f;
			startx+=ToolMap.DirectionOffsetX8[dir] *len;
			starty+=ToolMap.DirectionOffsetY8[dir] *len;
			ret.push(new Point$1(startx,starty));
		}
		if (ret.length==0)
			return null;
		return ret;
	}

	ToolMap.CalcDis=function(x1,y1,x2,y2){
		return (Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))| 0);
	}

	ToolMap.CalcDisS=function(x1,y1,x2,y2){
		return (Math.max(Math.abs(x1-x2),Math.abs(y1-y2))| 0);
	}

	ToolMap.CalcDistance=function(a,b){
		return (Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y))| 0);
	}

	ToolMap.CalcDistanceS=function(a,b){
		return (Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y))| 0);
	}

	ToolMap.CalcStepPath=function(list,beginpt){
		if (list==null)
			return null;
		if (list.length > 1){
			var dir1=ToolMap.CalcDir(beginpt.x,beginpt.y,list[0].x,list[0].y);
			var dir2=ToolMap.CalcDir(list[0].x,list[0].y,list[1].x,list[1].y);
			if (dir1==dir2){
				list.splice(2,list.length-2);
			}
			else{
				list.splice(1,list.length-1);
			}
		}
		return list;
	}

	ToolMap.PathDirDisToPoint=function(curPt,path){
		if ((path==null)|| (path.length==0))
			return null;
		var destpath=[];
		var girdPoint=curPt;
		var startX=girdPoint.x;
		var startY=girdPoint.y;
		while (path.length){
			var vector=path.shift()& 0xFF;
			if (vector < 0)
				return null;
			var dir=vector >> 5;
			var len=vector & 0x1F;
			startX+=ToolMap.DirectionOffsetX8[dir] *len;
			startY+=ToolMap.DirectionOffsetY8[dir] *len;
			destpath.push(ToolMap.GridPt2PixPt(startX,startY));
		}
		if (destpath.length==0)
			return null;
		return destpath;
	}

	ToolMap.PathPointToDirDis=function(startPt,path){
		if (path.length > 2){
			var arr=[];
			var count=path.length;
			var index=0;
			arr.push(path[count-1]);
			for (var i=count-1;i > 0;i--){
				if (i-2 >=0 && ToolMap.CalcSlope(path[i],path[i-1])==ToolMap.CalcSlope(path[i-1],path[i-2]))
					continue ;
				else
				arr.push(path[i-1]);
			}
			arr.reverse();
			path=arr;
		};
		var ret=[];
		var indexX=startPt.x;
		var indexY=startPt.y;
		for (i=0;i < path.length;i++){
			var pos=path [i];
			var vectors=ToolMap.CalcPathNode(indexX,indexY,pos.x,pos.y);
			if (vectors.length==0)
				return null;
			while (vectors.length)
			ret.push(vectors.shift());
			indexX=pos.x;
			indexY=pos.y;
		}
		return ret;
	}

	ToolMap.CalcPathNode=function(segx,segy,endx,endy){
		var ylen=Math.abs(segy-endy);
		var xlen=Math.abs(segx-endx);
		var len=Math.max(xlen,ylen);
		var dir=0;
		if (len==0)
			return [];
		dir=ToolMap.CalcDir(segx,segy,endx,endy);
		var num=len / 30;
		var last=len % 30;
		var ret=[];
		for (var i=0;i < num;i++){
			ret.push((dir << 5 | 30));
		}
		if (last !=0)
			ret.push((dir << 5 | last));
		return ret;
	}

	ToolMap.CalcSlope=function(point1,point2){
		var ret=0;
		var diffx=point1.x-point2.x;
		var diffy=point1.y-point2.y;
		if (diffx !=0)
			ret=diffy / diffx;
		else
		ret=2147483647;
		return ret;
	}

	ToolMap.SearchPointByCondition=function(pt,dir,conditionFunc,caller,isOnlyFront,maxSearch){
		(isOnlyFront===void 0)&& (isOnlyFront=false);
		(maxSearch===void 0)&& (maxSearch=10);
		if (dir==MDirection.NONE)
			dir=0;
		if (conditionFunc.call(caller,pt))
			return new Point$1(pt.x,pt.y);
		var i=0;
		var j=0;
		var ret=new Point$1();
		var testDir=0;
		var ret2=new Point$1();
		for (i=0;i < maxSearch;i++){
			var obDir=MDirection.GetObDir(dir);
			var exDir1=MDirection.GetOffDir(dir,-2);
			var exDir2=MDirection.GetOffDir(dir,-2);
			ret.x=pt.x+ToolMap.DirectionOffsetX8[dir] *(i+1);
			ret.y=pt.y+ToolMap.DirectionOffsetY8[dir] *(i+1);
			if (conditionFunc.call(caller,ret))
				return ret;
			testDir=dir;
			for (j=0;j < (i+1);j++){
				testDir=MDirection.GetOffDir(dir,-3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
				testDir=MDirection.GetOffDir(dir,3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
			}
			if (isOnlyFront)
				continue ;
			ret.x=pt.x+ToolMap.DirectionOffsetX8[exDir1] *(i+1);
			ret.y=pt.y+ToolMap.DirectionOffsetY8[exDir1] *(i+1);
			if (conditionFunc.call(caller,ret))
				return ret;
			testDir=exDir1;
			for (j=0;j < i;j++){
				testDir=MDirection.GetOffDir(exDir1,-3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
				testDir=MDirection.GetOffDir(exDir1,3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
			}
			ret.x=pt.x+ToolMap.DirectionOffsetX8[exDir2] *(i+1);
			ret.y=pt.y+ToolMap.DirectionOffsetY8[exDir2] *(i+1);
			if (conditionFunc.call(caller,ret))
				return ret;
			testDir=exDir2;
			for (j=0;j < i;j++){
				testDir=MDirection.GetOffDir(exDir2,-3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
				testDir=MDirection.GetOffDir(exDir2,3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
			}
			ret.x=pt.x+ToolMap.DirectionOffsetX8[obDir] *(i+1);
			ret.y=pt.y+ToolMap.DirectionOffsetY8[obDir] *(i+1);
			if (conditionFunc.call(caller,ret))
				return ret;
			testDir=obDir;
			for (j=0;j < (i+1);j++){
				testDir=MDirection.GetOffDir(obDir,-3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
				testDir=MDirection.GetOffDir(obDir,3);
				ret2.x=ret.x+ToolMap.DirectionOffsetX8[testDir] *(j+1);
				ret2.y=ret.y+ToolMap.DirectionOffsetY8[testDir] *(j+1);
				if (conditionFunc.call(caller,ret2))
					return ret2;
			}
		}
		return new Point$1(pt.x,pt.y);
	}

	ToolMap.SnakeTrans=function(midpt,func,limitTimes){
		(limitTimes===void 0)&& (limitTimes=2000);
		var curx=midpt.x;
		var cury=midpt.y;
		var count=0;
		var flag=1;
		var flagj=1;
		var dir=0;
		if (func(curx,cury))
			return;
		var limit=0;
		while (limit < limitTimes){
			limit++;
			curx+=ToolMap.DirectionOffsetX4[dir];
			cury+=ToolMap.DirectionOffsetY4[dir];
			flagj--;
			if (flagj==0){
				dir=((dir+1)% 4);
				count++;
				if (count==2){
					count=0;
					flag++;
				}
				flagj=flag;
			}
			if (func(curx,cury)){
				break ;
			}
		}
		if (limit >=limitTimes){
			ToolBase.LogError("SnakeTrans limit over:"+midpt.toString());
		}
	}

	ToolMap.GetBloodDirsByDir=function(curDir){
		var _floodArr=[curDir];
		for (var i=1;i < 8;++i){
			var dir=curDir;
			var dec=((i+1)/ 2 | 0);
			if (i % 2==0)
				dir+=dec;
			else
			dir-=dec;
			if (dir < 0)
				dir+=8;
			else if (dir >=8)
			dir-=8;
			_floodArr.push(dir);
		}
		return _floodArr;
	}

	ToolMap.GetNearCheckPoint=function(startPos,endPos,checkFunc){
		var xRange1=Math.abs(endPos.x-startPos.x);
		var yRange1=Math.abs(endPos.y-startPos.y);
		var xRange2=xRange1 << 1;
		var yRange2=yRange1 << 1;
		var xDelta=endPos.x < startPos.x ?-1 :1;
		var yDelta=endPos.y < startPos.y ?-1 :1;
		var judge=0;
		var x=startPos.x;
		var y=startPos.y;
		if (!checkFunc(startPos.x,startPos.y))
			return startPos;
		var retPos=new Point$1(x,y);
		if (yRange1 > xRange1){
			while (y !=endPos.y){
				if (judge-xRange2 <-yRange1){
					x+=xDelta;
					judge+=yRange2;
				}
				y+=yDelta;
				judge-=xRange2;
				if (checkFunc(x,y)){
					retPos.x=x;
					retPos.y=y;
				}
				else
				return retPos;
			}
		}
		else if (yRange1 < xRange1){
			while (x !=endPos.x){
				if (judge-yRange2 <-xRange1){
					y+=yDelta;
					judge+=xRange2;
				}
				x+=xDelta;
				judge-=yRange2;
				if (checkFunc(x,y)){
					retPos.x=x;
					retPos.y=y;
				}
				else
				return retPos;
			}
		}
		else{
			while (x !=endPos.x){
				y+=yDelta;
				x+=xDelta;
				if (checkFunc(x,y)){
					retPos.x=x;
					retPos.y=y;
				}
				else
				return retPos;
			}
		}
		return endPos;
	}

	ToolMap.CanMoveByLine=function(grid1,grid2,checkFunc){
		var xRange1=Math.abs(grid2.x-grid1.x);
		var yRange1=Math.abs(grid2.y-grid1.y);
		var xRange2=xRange1 << 1;
		var yRange2=yRange1 << 1;
		var xDelta=grid2.x < grid1.x ?-1 :1;
		var yDelta=grid2.y < grid1.y ?-1 :1;
		var judge=0;
		var x=grid1.x;
		var y=grid1.y;
		if (!checkFunc(x,y)){
			return false;
		};
		var grid;
		if (yRange1 > xRange1){
			while (y !=grid2.y){
				if (judge-xRange2 <-yRange1){
					x+=xDelta;
					judge+=yRange2;
				}
				y+=yDelta;
				judge-=xRange2;
				if (!checkFunc(x,y)){
					return false;
				}
			}
		}
		else if (yRange1 < xRange1){
			while (x !=grid2.x){
				if (judge-yRange2 <-xRange1){
					y+=yDelta;
					judge+=xRange2;
				}
				x+=xDelta;
				judge-=yRange2;
				if (!checkFunc(x,y)){
					return false;
				}
			}
		}
		else{
			while (x !=grid2.x){
				y+=yDelta;
				x+=xDelta;
				if (!checkFunc(x,y)){
					return false;
				}
			}
		}
		return true;
	}

	ToolMap.CalcDir8ByAngle=function(x1,y1,x2,y2){
		if (y1==y2){
			if (x1 < x2)
				return 2;
			else if (x1 > x2)
			return 6;
			else
			return MDirection.NONE;
		}
		else if (x1==x2){
			if (y1 < y2)
				return 4;
			else
			return 0;
		}
		else{
			var angle=Math.atan((y2-y1)/-(x2-x1));
			var angle22d5=Math.PI / 8;
			var angle67d5=Math.PI / 2-angle22d5;
			if (angle >-angle22d5 && angle <=angle22d5){
				if (x1 < x2)
					return 2;
				else
				return 6;
			}
			else if (angle > angle22d5 && angle <=angle67d5){
				if (x1 < x2)
					return 1;
				else
				return 5;
			}
			else if (angle >-angle67d5 && angle <=-angle22d5){
				if (x1 < x2)
					return 3;
				else
				return 7;
			}
			else{
				if (y1 < y2)
					return 4;
				else
				return 0;
			}
		}
	}

	ToolMap.CalcDir4ByAngle=function(x1,y1,x2,y2){
		if (y1==y2){
			if (x1 < x2)
				return 3;
			else if (x1 > x2)
			return 5;
			else
			return MDirection.NONE;
		}
		else if (x1==x2){
			if (y1 < y2)
				return 5;
			else
			return 1;
		}
		else{
			var angle=Math.atan((y2-y1)/ (x2-x1));
			if (angle < 0){
				return x1 < x2 ? 1 :5;
				}else if (angle > 0){
				return x1 < x2 ? 3 :7;
				}else{
				console.log("What!!");
				return MDirection.NONE;
			}
		}
	}

	ToolMap.GetDirection=function(starPos,endPos){
		return ToolMap.GetDirection2(starPos.x,starPos.y,endPos.x,endPos.y);
	}

	ToolMap.GetDirection2=function(starX,starY,endX,endY){
		var xoff=starX-endX;
		var yoff=starY-endY;
		if (xoff==0 && yoff==0)
			return MDirection.NONE;
		if (xoff==0){
			if (yoff > 0)
				return 0;
			else
			return 4;
		}
		else if (xoff < 0){
			if (yoff > 0)
				return 1;
			else if (yoff < 0)
			return 3;
			else
			return 2
		}
		else if (xoff > 0){
			if (yoff > 0)
				return 7;
			else if (yoff < 0)
			return 5;
			else
			return 6
		}
		return MDirection.NONE;
	}

	ToolMap.sign=function(v){
		return v==0 ? 0 :v > 0 ? 1 :-1;
	}

	ToolMap.speedUp=function(grids){
		if (grids==null){
			return null;
		};
		var ret=[];
		var dir=MDirection.NONE;
		for (var i=1;i < grids.length;++i){
			var src=grids[i-1];
			var dst=grids[i];
			var tmpDir=MDirection.GetDir(src.x,src.y,dst.x,dst.y);
			if (dir !=tmpDir){
				dir=tmpDir;
				ret.push(src);
			}
			if (i==grids.length-1){
				ret.push(dst);
			}
		}
		return ret.length < 1 ? null :ret;
	}

	ToolMap.ToClientGrid=function(pos,pt){
		if (pt==null)
			pt=new Point$1();
		pt.x=(pos >> 16);
		pt.y=(pos & 0xffff);
		return pt;
	}

	ToolMap.ToClientGridList=function(path){
		var ret=[];
		for (var i=0;i < path.length;++i){
			var pt=new Point$1();
			pt.x=(path[i] >> 16);
			pt.y=(path[i] & 0xffff);
			ret.push(pt);
		}
		return ret;
	}

	ToolMap.ToPosition=function(gx,gy){
		return gy | (gx << 16);
	}

	ToolMap.ToClientX=function(position){
		return ((position >> 16)& 0xffff);
	}

	ToolMap.ToClientY=function(position){
		return position & 0xffff;
	}

	ToolMap.DIRECTION_MODE=1;
	ToolMap.GRID_WIDTH=72;
	ToolMap.GRID_HEIGHT=48;
	__static(ToolMap,
	['DirectionOffsetX8',function(){return this.DirectionOffsetX8=[0,1,1,1,0,-1,-1,-1];},'DirectionOffsetY8',function(){return this.DirectionOffsetY8=[-1,-1,0,1,1,1,0,-1];},'DirectionOffsetX4',function(){return this.DirectionOffsetX4=[0,1,0,-1];},'DirectionOffsetY4',function(){return this.DirectionOffsetY4=[-1,0,1,0];},'GRID_WIDTH_HALF',function(){return this.GRID_WIDTH_HALF=72 / 2;},'GRID_HEIGHT_HALF',function(){return this.GRID_HEIGHT_HALF=48 / 2;}
	]);
	return ToolMap;
})()


//class engine.scene.astar.AStarEx
var AStarEx=(function(){
	function AStarEx(){
		//private var _open:Array;
		this._open=null;
		this._grid=null;
		this._endNode=null;
		this._startNode=null;
		this._path=null;
		this._floydPath=null;
		this._modifyNodes=null;
		this._node=null;
		this.findPathCallBack=null;
		this.testCount=0;
		this.heuristic=null;
		this._straightCost=1.0;
		this.nowversion=1;
		this.haveGuDao=false;
		this._diagCost=Math.SQRT2;
		this.heuristic=this.manhattan;
	}

	__class(AStarEx,'engine.scene.astar.AStarEx');
	var __proto=AStarEx.prototype;
	__proto.setGrid=function(grid){
		this._grid=grid;
	}

	__proto.createGrid=function(width,hight){
		this._grid=new Grid(width,hight);
	}

	__proto.justMin=function(x,y){
		return x.f < y.f;
	}

	__proto.findPath=function(maxFindNum){
		(maxFindNum===void 0)&& (maxFindNum=0);
		this._endNode=this._grid.endNode;
		if (this._endNode==null)
			return false;
		this.nowversion++;
		this._startNode=this._grid.startNode;
		var replace=null;
		if (this.haveGuDao && (!this._endNode.walkable || (this._endNode.nodeType !=this._startNode.nodeType))){
			var useBuriedDepth=false;
			replace=this._grid.findReplacer(this._grid.startNode,this._endNode,useBuriedDepth);
			if (replace==null)
				return false;
		}
		if (replace !=null)
			this._endNode=replace;
		this._open=new BinaryHeap(this.justMin);
		this._startNode.g=0;
		this._modifyNodes=[];
		return this.search(maxFindNum);
	}

	__proto.GetPathFloyd=function(){
		if (this._path==null || this._path.length==0)
			return null;
		var fpath=AStarEx.floyd(this._path,this._grid);
		var path=[];
		while (fpath.length){
			var node=fpath.shift();
			if (node==null)
				break ;
			path.push(new Point$1(node.x,node.y));
		}
		return path;
	}

	__proto.searchTask=function(){
		var count=0;
		var best=null;
		while (this._node !=this._endNode){
			var len=this._node.links.length;
			for (var i=0;i < len;i++){
				var test=this._node.links[i].node;
				var cost=this._node.links[i].cost;
				var g=this._node.g+cost;
				var h=this.heuristic(test);
				var f=g+h;
				if (test.version==this.nowversion){
					if (test.f > f){
						test.f=f;
						test.g=g;
						test.h=h;
						test.parent=this._node;
					}
				}
				else{
					test.f=f;
					test.g=g;
					test.h=h;
					test.parent=this._node;
					this._open.ins(test);
					test.version=this.nowversion;
					this._modifyNodes.push(test);
				}
			}
			if (this._open.a.length==1){
				best=this.findNearPath(this._endNode);
				break ;
			}
			this._node=this._open.pop();
			count++;
		}
		if (best)
			this._endNode=best;
		if (count !=0)
			this.buildPath();
		return count !=0;
	}

	__proto.search=function(maxFindNum){
		(maxFindNum===void 0)&& (maxFindNum=0);
		this.testCount=0;
		this._node=this._startNode;
		this._node.version=this.nowversion;
		return this.searchTask();
	}

	__proto.findNearPath=function(end){
		if (this._modifyNodes.length==0)
			return null;
		var best=this._modifyNodes[0];
		var next=null;
		var len=this._modifyNodes.length;
		var min=Math.abs(end.x-best.x)+Math.abs(end.y-best.y);
		var val=0;
		for (var i=1;i < len;i++){
			next=this._modifyNodes[i];
			val=Math.abs(end.x-next.x)+Math.abs(end.y-next.y);
			if ((val > min)|| (val==min && next.g >=best.g))
				continue ;
			best=next;
			min=val;
		}
		return best;
	}

	__proto.buildPath=function(){
		this._path=[];
		var node=this._endNode;
		this._path.push(node);
		var count=0;
		while (node !=null && node !=this._startNode){
			node=node.parent;
			this._path.unshift(node);
			count++;
			if (count > 10000){
				break ;
			}
		}
		if (count > 10000){
			this._path.length=0;
			console.log("错误的寻路，溢出了！！！");
		}
		if (this.findPathCallBack !=null)
			this.findPathCallBack.call();
	}

	/**
	*曼哈顿距离
	*@param node
	*@return
	*
	*/
	__proto.manhattan=function(node){
		return (Math.abs(node.x-this._endNode.x)+Math.abs(node.y-this._endNode.y));
	}

	__getset(0,__proto,'grid',function(){
		return this._grid;
		},function(value){
		this._endNode=null;
		this._startNode=null;
		this._path=null;
		this._floydPath=null;
		this._modifyNodes=null;
		this._grid=value;
	});

	AStarEx.floyd=function(path,grid){
		var _floydPath=path.concat();
		var len=_floydPath.length;
		if (len > 2){
			var vector=new Node$1(0,0);
			var tempVector=new Node$1(0,0);
			AStarEx.floydVector(vector,_floydPath[len-1],_floydPath[len-2]);
			for (var i=_floydPath.length-3;i >=0;i--){
				AStarEx.floydVector(tempVector,_floydPath[i+1],_floydPath[i]);
				if (vector.x==tempVector.x && vector.y==tempVector.y){
					_floydPath.splice(i+1,1);
				}
				else{
					vector.x=tempVector.x;
					vector.y=tempVector.y;
				}
			}
		}
		len=_floydPath.length;
		for (i=len-1;i >=0;i--){
			for (var j=0;j <=i-2;j++){
				if (AStarEx.floydCrossAble(_floydPath[i],_floydPath[j],grid)){
					for (var k=i-1;k > j;k--){
						_floydPath.splice(k,1);
					}
					i=j;
					len=_floydPath.length;
					break ;
				}
			}
		}
		return _floydPath;
	}

	AStarEx.floydCrossAble=function(n1,n2,grid){
		var ps=AStarEx.bresenhamNodes(new Point$1(n1.x,n1.y),new Point$1(n2.x,n2.y));
		for (var i=ps.length-2;i > 0;i--){
			if (ps[i].x>=0&&ps[i].y>=0&&ps[i].x<grid.numCols&&ps[i].y<grid.numRows&&
				(!grid.getNode(ps[i].x,ps[i].y).walkable || !grid.getNode(ps[i].x,ps[i].y).dyWalkable)){
				return false;
			}
		}
		return true;
	}

	AStarEx.bresenhamNodes=function(p1,p2){
		var steep=Math.abs(p2.y-p1.y)> Math.abs(p2.x-p1.x);
		if (steep){
			var temp=p1.x;
			p1.x=p1.y;
			p1.y=temp;
			temp=p2.x;
			p2.x=p2.y;
			p2.y=temp;
		};
		var stepX=p2.x > p1.x?1:(p2.x < p1.x?-1:0);
		var deltay=(p2.y-p1.y)/Math.abs(p2.x-p1.x);
		var ret=[];
		var nowX=p1.x+stepX;
		var nowY=p1.y+deltay;
		if (steep){
			ret.push(new Point$1(p1.y,p1.x));
			}else {
			ret.push(new Point$1(p1.x,p1.y));
		}
		if (Math.abs(p1.x-p2.x)==Math.abs(p1.y-p2.y)){
			if(p1.x<p2.x&&p1.y<p2.y){
				ret.push(new Point$1(p1.x,p1.y+1),new Point$1(p2.x,p2.y-1));
				}else if(p1.x>p2.x&&p1.y>p2.y){
				ret.push(new Point$1(p1.x,p1.y-1),new Point$1(p2.x,p2.y+1));
				}else if(p1.x<p2.x&&p1.y>p2.y){
				ret.push(new Point$1(p1.x,p1.y-1),new Point$1(p2.x,p2.y+1));
				}else if(p1.x>p2.x&&p1.y<p2.y){
				ret.push(new Point$1(p1.x,p1.y+1),new Point$1(p2.x,p2.y-1));
			}
		}
		while (nowX !=p2.x){
			var fy=Math.floor(nowY);
			var cy=Math.ceil(nowY);
			if (steep){
				ret.push(new Point$1(fy,nowX));
				}else{
				ret.push(new Point$1(nowX,fy));
			}
			if (fy !=cy){
				if (steep){
					ret.push(new Point$1(cy,nowX));
					}else{
					ret.push(new Point$1(nowX,cy));
				}
				}else if(deltay!=0){
				if (steep){
					ret.push(new Point$1(cy+1,nowX));
					ret.push(new Point$1(cy-1,nowX));
					}else{
					ret.push(new Point$1(nowX,cy+1));
					ret.push(new Point$1(nowX,cy-1));
				}
			}
			nowX+=stepX;
			nowY+=deltay;
		}
		if (steep){
			ret.push(new Point$1(p2.y,p2.x));
			}else {
			ret.push(new Point$1(p2.x,p2.y));
		}
		return ret;
	}

	AStarEx.floydVector=function(target,n1,n2){
		target.x=n1.x-n2.x;
		target.y=n1.y-n2.y;
	}

	__static(AStarEx,
	['Ins',function(){return this.Ins=new AStarEx();}
	]);
	return AStarEx;
})()


/**
*地图格子阻挡数据
*@author Administrator
*
*/
//class engine.scene.grid.MapGridData
var MapGridData=(function(){
	function MapGridData(){
		this._width=0;
		this._height=0;
		this._curMapResId=0;
		this._gridWMax=0;
		this._gridHMax=0;
		// 地图静态阻挡数据 二维
		this._grids=null;
		// 地图动态阻挡数据 二维
		this._gridsDynamic=null;
		// 地图额外阻挡数据 二维
		this._gridsExtra=null;
		// 寻路
		this._pathFinderf=null;
		this._astarGrid=null;
		this._debugPath=null;
		this._endpt=null;
		this._gridSoundData=null;
		this._pathFinderf=new AStarEx();
		this._endpt=new Point$1(-1,-1);
		this._grids=[];
		this._gridsDynamic=[];
	}

	__class(MapGridData,'engine.scene.grid.MapGridData');
	var __proto=MapGridData.prototype;
	__proto.Init=function(){}
	//NO_BLOCK=true;
	__proto.LoadMap=function(meta){
		this._curMapResId=meta.mapresid;
		this._width=meta.sceneWidth;
		this._height=meta.sceneHeight;
		var i=0;
		this._gridHMax=Math.floor(this._height / 48)+(((this._height % 48)!=0)? 1 :0);
		this._gridWMax=Math.floor(this._width / 72)+(((this._width % 72)!=0)? 1 :0);
		var dataLength=this._gridWMax *this._gridHMax;
		var oldlen=this._grids.length;
		if (dataLength > oldlen){
			this._grids.length=dataLength;
			this._gridsDynamic.length=dataLength;
			for (i=oldlen;i < dataLength;++i){
				this._grids[i]=0x00000003;
				this._gridsDynamic[i]=0x00000003;
			}
		}
		if (this._astarGrid !=null){
			this._astarGrid.dispose();
		}
		this._astarGrid=new Grid(this._gridWMax,this._gridHMax);this._gridsExtra=this._gridsExtra|| [];
		var tx=0,ty=0,index=0,offset=0,
		tmpBlock=0,tmpAlpha=0,tmpJump=0,tmpSafe=0,tmpeff=0,block=0,
		alpha=0,jump=0,safe=0,water=0,watersmall=0,
		extraFlag=0,type=0 ,tempExtra=0;
		this._gridSoundData=new Array(this._gridWMax);
		var check2=ToolBase.GetTimer();
		for (i=0;i < dataLength;++i){
			tx=(i % this._gridWMax);
			ty=Math.floor(i / this._gridWMax);
			if (ty==0)
				this._gridSoundData[tx]=new Array(this._gridHMax);
			index=Math.floor(i / 8);
			offset=i % 8;
			meta.blockDatas.pos=index;
			meta.alphaDatas.pos=index;
			meta.jumpDatas.pos=index;
			meta.safeDatas.pos=index;
			meta.effDatas.pos=i;
			meta.gridsExtra.pos=i *4;
			tmpBlock=meta.blockDatas.readUnsignedByte();
			tmpAlpha=meta.alphaDatas.readUnsignedByte();
			tmpJump=meta.jumpDatas.readUnsignedByte();
			tmpSafe=meta.safeDatas.readUnsignedByte();
			tmpeff=meta.effDatas.readUnsignedByte();
			tempExtra=meta.gridsExtra.readInt();
			this._gridsExtra[i]=tempExtra;
			block=((tmpBlock >> (7-offset))& 0x1);
			if (MapGridData.NO_BLOCK)
				block=1;
			alpha=((tmpAlpha >> (7-offset))& 0x1);
			jump=((tmpJump >> (7-offset))& 0x1);
			safe=((tmpSafe >> (7-offset))& 0x1);
			water=(tmpeff & 0x1);
			watersmall=((tmpeff >> 1)& 0x1);
			extraFlag=(tmpeff >> 2);
			if (extraFlag > 0)
				this._gridSoundData[tx][ty]=extraFlag;
			type=((watersmall << 6)| (water << 5)| (safe << 3)| (alpha << 2)| (0x1 << 1)| (block & 0x1))& 0xff;
			this._grids[i]=type;
			if (!(block & 0x1))
				this._astarGrid.setWalkable(tx,ty,false);
		}
		this._astarGrid.calculateLinks(meta.linkLines);
		return true;
	}

	__proto.Clear=function(){
		this._debugPath=null;
		this._curMapResId=0;
		var i=0;
		var len=this._gridHMax *this._gridWMax;
		for (i=0;i < len;++i){
			this._grids[i]=0x00000003;
			this._gridsDynamic[i]=0x00000003;
		}
		this._gridsExtra=null;
		this._gridSoundData=null;
		this._width=0;
		this._height=0;
		this._gridHMax=0;
		this._gridWMax=0;
	}

	/**
	*洪水蔓延尝试填充
	*@param spy
	*@param int
	*@param x
	*@param int
	*@param y
	*@param curfNum
	*@param maxfNum
	*@return
	*/
	__proto.TryFloodFill=function(pt,expt,curfNum,maxfNum){
		(maxfNum===void 0)&& (maxfNum=10000);
		if (expt.x==pt.x && expt.y==pt.y)
			return maxfNum;
		if (this.GridIsWork(pt.x,pt.y,true))
			curfNum++;
		if (curfNum >=maxfNum)
			return maxfNum;
		var roundpt=null;
		for (var i=0;i < 8;i++){
			roundpt=new Point$1(pt.x+ToolMap.DirectionOffsetX8[i],pt.y+ToolMap.DirectionOffsetY8[i]);
			if (expt.x==roundpt.x && expt.y==roundpt.y){
				curfNum=maxfNum;
				break ;
			}
			if (roundpt.x < 0 || roundpt.y < 0 || roundpt.x >=this._gridWMax || roundpt.y >=this._gridHMax)
				continue ;
			if (this.GridIsWork(roundpt.x,roundpt.y,true)){
				curfNum=this.TryFloodFill(roundpt,expt,curfNum,maxfNum);
				if (curfNum >=maxfNum){
					break ;
				}
			}
		}
		return curfNum;
	}

	__proto.TestTargetBound=function(pt,expt){
		var tryfnum=this.TryFloodFill(pt,expt,0,8);
		if (tryfnum < 8)
			return true;
		return false;
	}

	/**
	*A*寻路，返回一组格子坐标
	*@param sx
	*@param sy
	*@param ex
	*@param ey
	*@return
	*/
	__proto.AstarFindPath=function(sx,sy,ex,ey){
		this._pathFinderf.setGrid(this._astarGrid);
		this._pathFinderf.findPathCallBack=function (){};
		this._astarGrid.setStartNode(sx,sy);
		this._astarGrid.setEndNode(ex,ey);
		var ret=null;
		var maxFindNum=10000;
		if (this._pathFinderf.findPath(maxFindNum)){
			ret=this._pathFinderf.GetPathFloyd();
		}
		if (ret !=null && Array.length==0)
			ret=null;
		return ret;
	}

	__proto.SearchFixFunc=function(temppt){
		return this.GridIsWorkWithBoard(temppt.x,temppt.y,true);
	}

	/**
	*返回路径，第一个点为起始点，注意返回的非Point而是数组01，路径为精简路径，非全点集
	*@param start
	*@param end
	*@return
	*/
	__proto.FindPaths=function(start,end,co){
		end=ToolMap.SearchPointByCondition(end,MDirection.GetDir(end.x,end.y,start.x,start.y),this.SearchFixFunc,this);
		this._debugPath=null;
		this._endpt.x=end.x;
		this._endpt.y=end.y;
		var ret=null;
		try{
			ret=this.AstarFindPath(start.x,start.y,end.x,end.y);
		}
		catch(e){
			Laya.errorCallBack ? Laya.errorCallBack("name:"+co.name+" start:"+start.toString()+" end:"+end.toString()+"\n"+e.stack):null;
			ret=null;
		}
		return ret;
	}

	__proto.IsClear=function(){
		return (this._curMapResId==0);
	}

	// //////////////////////////////////////////////////////////////////////////////////
	__proto.Type=function(x,y){
		if (x < 0 || y < 0 || x >=this._gridWMax || y >=this._gridHMax)
			return 0;
		var v=this._grids[y *this._gridWMax+x];
		return v;
	}

	__proto.TypeDy=function(x,y){
		if (x < 0 || y < 0 || x >=this._gridWMax || y >=this._gridHMax)
			return 0;
		return this._gridsDynamic[y *this._gridWMax+x];
	}

	__proto.TypeEx=function(x,y){
		if (this._gridsExtra==null)
			return 0;
		if (x < 0 || y < 0 || x >=this._gridWMax || y >=this._gridHMax)
			return 0;
		var v=this._gridsExtra[y *this._gridWMax+x];
		return v;
	}

	__proto.GetExtraType=function(x,y){
		return this.TypeEx(x,y);
	}

	__proto.GridTypeIsWork=function(type){
		return ((type & 0x1)!=0);
	}

	__proto.GridTypeIsWorkDy=function(type){
		return ((type & 0x1)!=0);
	}

	__proto.GridTypeIsCov=function(type){
		return ((type & 0x4)!=0);
	}

	__proto.GridTypeIsStop=function(type){
		return ((type & 0x00000010)==0);
	}

	/**
	*格子是否可走带边界检查
	*@param checkObj 检查者
	*@param x
	*@param y
	*@param isCheckObj
	*@return
	*/
	__proto.GridIsWorkWithBoard=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
		if (x < 0 || y < 0 || x >=this._gridWMax || y >=this._gridHMax)
			return false;
		var ret=this.GridTypeIsWork(this.Type(x,y));
		if (ret)
			ret=this.GridTypeIsWorkDy(this.TypeDy(x,y));
		if (!isCheckObj)
			return ret;
		return ret;
	}

	/**
	*格子是否可走
	*@param x
	*@param y
	*@param isCheckObj
	*@return
	*/
	__proto.GridIsWork=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
		var ret=this.GridTypeIsWork(this.Type(x,y));
		if (ret)
			ret=this.GridTypeIsWorkDy(this.TypeDy(x,y));
		if (!isCheckObj)
			return ret;
		return ret && this.CanMarkIsWalk(x,y);
	}

	__proto.IsGridCanMove=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
		return this.GridIsWorkWithBoard(x,y,isCheckObj);
	}

	__proto.GridIsCov=function(x,y){
		var ret=this.GridTypeIsCov(this.Type(x,y));
		if (ret==false)
			ret=this.GridTypeIsCov(this.TypeDy(x,y));
		return ret;
	}

	__proto.CanMarkIsWalk=function(x,y){
		return true;
	}

	__getset(0,__proto,'gridWMax',function(){
		return this._gridWMax;
	});

	__getset(0,__proto,'gridHMax',function(){
		return this._gridHMax;
	});

	__getset(0,__proto,'gridSoundData',function(){
		return this._gridSoundData;
	});

	MapGridData.NO_BLOCK=false;
	return MapGridData;
})()


/**
*地图图片层信息
*@author Administrator
*
*/
//class engine.scene.data.ChunkLayerData
var ChunkLayerData=(function(){
	function ChunkLayerData(){
		this.layerType=0;
		this.pixw=0;
		this.pixh=0;
		this.sizew=0;
		this.sizeh=0;
		this.numw=0;
		this.numh=0;
		this.tileFlags=null;
		ObjectRecord.rcd(this);
	}

	__class(ChunkLayerData,'engine.scene.data.ChunkLayerData');
	var __proto=ChunkLayerData.prototype;
	__proto.ReadData=function(bytes){
		var m=0;
		var n=0;
		this.layerType=bytes.readByte();
		this.pixw=bytes.readInt();
		this.pixh=bytes.readInt();
		this.sizew=bytes.readShort();
		this.sizeh=bytes.readShort();
		this.numw=bytes.readShort();
		this.numh=bytes.readShort();
		this.tileFlags=new Array(this.numw *this.numh);
		for (m=0;m < this.numh;++m){
			for (n=0;n < this.numw;++n){
				this.tileFlags[m *this.numw+n]=bytes.readInt();
			}
		}
	}

	return ChunkLayerData;
})()


/**
*序列帧动画资源管理
*最小单位是一个方向的一个动作组
*@author yq
*/
//class engine.res.MSheetAnimationMgr
var MSheetAnimationMgr=(function(){
	function MSheetAnimationMgr(){
		// 默认资源
		this._callbackPrepareEnd=null;
		this._defautlResType=0;
		this._defautlResId=0;
		this._defaultResCount=0;
		this._sheetPackMap=new Object();
		this._loaderQueue=new Object();
	}

	__class(MSheetAnimationMgr,'engine.res.MSheetAnimationMgr');
	var __proto=MSheetAnimationMgr.prototype;
	/**
	*获取对应动作的帧动画
	*@param anim
	*@param fun 返回的是一个Array<Graphics>
	*/
	__proto.GetResPack=function(anim,key){
		MSheetAnimationGC.Ins.RefKey(key);
		var pack=this._sheetPackMap[key];
		if (pack==null){
			var queue=this._loaderQueue[key];
			if (queue==null){
				queue=[];
				this._loaderQueue[key]=queue;
				queue.push(anim);
				MAnimationLoader.Ins.LoadBin(key,Handler.create(this,this.OnBinLoaded,[key]));
			}
			else{
				queue.push(anim);
			}
		}
		return pack;
	}

	/**
	*动画资源加载回调
	*加载失败也是这个回调
	*/
	__proto.OnBinLoaded=function(key,pack){
		this.addResPack(key,pack);
		var queue=this._loaderQueue[key];
		var anim;
		for(var $each_anim in queue){
			anim=queue[$each_anim];
			if (!anim.isDestroyed){
				if (pack !=null)
					anim.OnBinLoaded(key,pack);
				else
				anim.OnBinFailed(key);
			}
		}
		delete this._loaderQueue[key];
	}

	__proto.addResPack=function(key,pack){
		if (pack !=null){
			this._sheetPackMap[key]=pack;
		}
	}

	/**
	*准备好默认资源
	*/
	__proto.PrepareDefaultAnimationRes=function(endcallback,restype,resid,loadaction){
		this._callbackPrepareEnd=endcallback;
		this._defautlResType=restype;
		this._defautlResId=resid;
		this._defaultResCount=0;
		for (var i=0;i < loadaction.length;++i){
			var key=MAnimationUtil.ToKeyName(restype,resid,loadaction[i]);
			MAnimationLoader.Ins.LoadBin(key,Handler.create(this,this.DefaultAnimationLoaded,[key]),true);
			MSheetAnimationGC.Ins.RegisterForeverRes(key);
			this._defaultResCount++;
		}
	}

	/**
	*默认资源加载完成
	*/
	__proto.DefaultAnimationLoaded=function(key,pack){
		this.addResPack(key,pack);
		this._defaultResCount--;
		if (this._defaultResCount==0){
			this._callbackPrepareEnd.run();
			this._callbackPrepareEnd=null;
		}
	}

	__proto.GetDefaultAnimation=function(action){
		return this._sheetPackMap[MAnimationUtil.ToKeyName(this._defautlResType,this._defautlResId,action)];
	}

	/**
	*预加载资源
	*@param restype
	*@param resid
	*@param action
	*/
	__proto.PreloadAnimation=function(restype,resid,action){
		var key=MAnimationUtil.ToKeyName(restype,resid,action);
		MAnimationLoader.Ins.LoadBin(key,Handler.create(this,this.OnPreloadOne,[key]),true);
	}

	__proto.OnPreloadOne=function(key,pack){
		this.addResPack(key,pack);
	}

	/**
	*已存在多少个资源包
	*/
	__proto.GetResPakNum=function(){
		var ret=0;
		for (var key in this._sheetPackMap){
			ret++;
		}
		return ret;
	}

	__proto.validRes=function(){
		var log="";
		var totalMem=0;
		var pack;
		for(var $each_pack in this._sheetPackMap){
			pack=this._sheetPackMap[$each_pack];
			for (var i=0;i < pack.dirs.length;++i){
				if (pack.dirs[i].isReady){
					log+=pack.path+" "+pack.dirs[i].dir+"\r\n";
					totalMem+=pack.dirs[i].useMemory;
				}
			}
		}
		log+="总内存："+totalMem;
		console.log(log);
	}

	__getset(0,__proto,'sheetPackMap',function(){
		return this._sheetPackMap;
	});

	__static(MSheetAnimationMgr,
	['Ins',function(){return this.Ins=new MSheetAnimationMgr();}
	]);
	return MSheetAnimationMgr;
})()


/**
*场景对象移动策略
*@author Administrator
*/
//class engine.scene.move.MoveRule
var MoveRule=(function(){
	function MoveRule(){
		// 控制的主对象
		this._object=null;
		this._isDestroyed=false;
		// 移动的路径列表(数组 ),改数据为简化后数组，只存储关键拐点坐标
		this._pathList=null;
		// 上一次执行移动的时间
		this._lastFrameTime=0;
		this._runSpeed=0;
		this._bCache=false;
		this._curMoveType=0;
		this._prevMoveType=0;
		// 移动终点位置
		this._moveEndPos=null;
		// 移动初始方向
		this._moveStartDir=-1;
		// 移动2点之间的距离
		this._moveDistance=0;
		this._movePercent=0;
		this._curMoveDirection=0;
		this._directPt=null;
		this._moveStartPos=new Point$1();
		ObjectRecord.rcd(this);
	}

	__class(MoveRule,'engine.scene.move.MoveRule');
	var __proto=MoveRule.prototype;
	Laya.imps(__proto,{"engine.scene.move.IMoveRule":true})
	__proto.SetData=function(obj){
		this._object=obj;
	}

	/**
	*终止回调
	*
	*/
	__proto.CheckMoveAbort=function(){
		if (this.curMoveType !=0){
			this._object.OnMoveAbort(this._moveStartDir,this._curMoveType);
		}
	}

	__proto.RunDirect=function(pixX,pixY){
		if (this._bCache)
			return;
		this.CheckMoveAbort();
		!this._directPt && (this._directPt=new Point$1());
		this._directPt.setTo(pixX,pixY);
		this.SetCurMoveType(1000);
		this._InitPath([this._directPt]);
		this._lastFrameTime=Laya.timer.currTimer;
		this._object.OnMoveBegin(this._moveStartDir,this._curMoveType);
	}

	/**
	*执行移动路径
	*参数paths :改数据为简化后数组，只存储关键拐点坐标,单个数据结构为{x :0,y :0 }
	**/
	__proto.Run=function(paths){
		if (this._bCache)
			return;
		this.CheckMoveAbort();
		this.SetCurMoveType(1000);
		this._InitPath(paths);
		this._lastFrameTime=Laya.timer.currTimer;
		this._object.OnMoveBegin(this._moveStartDir,this._curMoveType);
	}

	//
	__proto._InitPath=function(paths){
		var o=this._object;
		if ((o.decimalPixX | 0)==(paths[0].x | 0)&& (o.decimalPixY | 0)==(paths[0].y | 0)){
			paths.shift();
		}
		if (paths.length==0){
			return;
		}
		this._moveEndPos=paths[paths.length-1];
		this._moveStartPos.setTo(o.decimalPixX,o.decimalPixY);
		this._movePercent=0;
		this._moveStartDir=ToolMap.CalcDirectionSlant(this._moveStartPos,paths[0]);
		this._curMoveDirection=this._moveStartDir;
		this._moveDistance=ToolMap.CalcDistance(this._moveStartPos,this._moveEndPos);
		this._pathList=paths;
	}

	/**
	*由上层调用每帧执行一次
	**/
	__proto.OnFrame=function(curTime){
		var diffTime=curTime-this._lastFrameTime;
		this._lastFrameTime=curTime;
		if (this._pathList !=null && this._pathList.length > 0){
			var oldPos=Point$1.TEMP.setTo(this._object.decimalPixX,this._object.decimalPixY);
			var nextPos=this._pathList[0];
			var disRemain=Math.sqrt(Math.pow((oldPos.x-nextPos.x),2)+Math.pow((oldPos.y-nextPos.y),2));
			var curSpeed=this._runSpeed;
			var dis=diffTime / 1000 *curSpeed;
			if (this._moveDistance==0)
				dis=0;
			var newX=0;
			var newY=0;
			var isEnd=false;
			var radius=0;
			if (dis <=disRemain && this._movePercent < 1){
				radius=Math.atan2(nextPos.y-oldPos.y,nextPos.x-oldPos.x);
				newX=oldPos.x+dis *Math.cos(radius);
				newY=oldPos.y+dis *Math.sin(radius);
			}
			else{
				var oldNext=this._pathList.shift();
				if (this._pathList.length==0){
					newX=oldNext.x;
					newY=oldNext.y;
					isEnd=true;
				}
				else{
					dis=disRemain;
					nextPos=this._pathList[0];
					radius=Math.atan2(nextPos.y-oldNext.y,nextPos.x-oldNext.x);
					newX=oldNext.x+dis *Math.cos(radius);
					newY=oldNext.y+dis *Math.sin(radius);
					this._curMoveDirection=ToolMap.CalcDirSlant(newX,newY,nextPos.x,nextPos.y);
					this._object.OnMoveBegin(this._curMoveDirection,this._curMoveType);
				}
			}
			this.SetNewObjectPos(newX,newY);
			var movedleaveDis=ToolMap.CalcDistance(oldPos,this._moveEndPos);
			if (this._moveDistance !=0){
				this._movePercent=Math.abs(this._moveDistance-movedleaveDis)/ this._moveDistance;
			}
			if (this._movePercent > 1)
				this._movePercent=1;
			if (isEnd){
				this.MoveEnd();
			}
		}
	}

	/**
	*设置对象像素位置
	*@param x
	*@param y
	*/
	__proto.SetNewObjectPos=function(x,y){
		x=Math.round(x);
		y=Math.round(y);
		var o=this._object;
		var ox=o.gridX;
		var oy=o.gridY;
		o.SetPixPt(x,y);
		var nx=o.gridX;
		var ny=o.gridY;
		if (ox !=nx || oy !=ny){
			o.OnMoveEnterGrid(ox,oy);
		}
	}

	__proto.IsMoving=function(){
		return (this._pathList !=null);
	}

	__proto.Clear=function(){
		this._moveStartDir=0;
		this._curMoveDirection=0;
		this._moveDistance=0;
		this.SetCurMoveType(0);
		this._pathList=null;
		this._lastFrameTime=0;
		this._moveEndPos=null;
		this._movePercent=0;
	}

	__proto.OnRecycle=function(){
		this.Clear();
		this._bCache=true;
	}

	__proto.OnRevert=function(){
		this._bCache=false;
	}

	__proto.StopMove=function(){
		this.MoveEnd();
	}

	__proto.MoveEnd=function(){
		var beforeactiontype=this._curMoveType;
		if (beforeactiontype !=0){
			this.Clear();
			if (this._object !=null){
				this._object.OnMoveEnd(-1,beforeactiontype);
			}
		}
	}

	/**
	*设置移动策略速度，各种速度的设置
	*@param speed
	*/
	__proto.SetMoveSpeed=function(runspeed){
		this._runSpeed=runspeed;
	}

	__proto.SetCurMoveType=function(type){
		this._prevMoveType=this._curMoveType;
		this._curMoveType=type;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.Clear();
		this._isDestroyed=true;
	}

	__getset(0,__proto,'isDestroyed',function(){
		return this._isDestroyed;
	});

	__getset(0,__proto,'curMoveType',function(){
		return this._curMoveType;
	});

	__getset(0,__proto,'curMoveDirection',function(){
		return this._curMoveDirection;
	});

	return MoveRule;
})()


//class engine.base.pool.spool.SimplePool
var SimplePool=(function(){
	function SimplePool(){}
	__class(SimplePool,'engine.base.pool.spool.SimplePool');
	SimplePool.recover=function(obj){
		Pool.recover((obj).__className,obj);
		obj.clear();
	}

	SimplePool.getItem=function(cls){
		return Pool.getItemByClass(cls.__className,cls);
	}

	SimplePool.inPool=function(obj){
		return obj["__InPool"]==true;
	}

	return SimplePool;
})()


/**
*动画包加载
*/
//class engine.loaders.MAnimationLoader
var MAnimationLoader=(function(){
	function MAnimationLoader(){
		MAnimationLoader.Ins=this;
	}

	__class(MAnimationLoader,'engine.loaders.MAnimationLoader');
	var __proto=MAnimationLoader.prototype;
	__proto.GetDataName=function(compress){
		var bin="data.bin";
		if (compress){
			bin=Browser.onAndroid ? "etc.bin" :"pvr.bin";
		}
		return bin;
	}

	__proto.GetDirName=function(compress,dir){
		var ret;
		if (compress){
			ret=Browser.onAndroid ? "etcdir"+dir :"pvrdir"+dir;
			ret+=".bin";
			}else{
			ret="dir"+dir+".png";
		}
		return ret;
	}

	// 加载图包描述文件
	__proto.LoadBin=function(path,complete,loadalldir){
		(loadalldir===void 0)&& (loadalldir=false);
		var compress=CallbackUtil.callbackUseCompressTexture==null || CallbackUtil.callbackUseCompressTexture(path);
		compress=compress && (!Browser.onWeiXin && (WebGLContext._compressedTextureEtc1 !=null || WebGLContext._compressedTexturePvrtc !=null));
		var bin=this.GetDataName(compress);
		var url=MAnimationUtil.ROOT_URL+path+"/"+bin;
		Laya.loader.load(url,Handler.create(this,this.OnBinLoaded,[compress,url,path,complete,loadalldir]),null,"arraybuffer",1,false);
	}

	__proto.OnBinLoaded=function(compress,url,path,complete,loadalldir,content){
		var pack=new MSheetResPack();
		if (content==null){
			complete && complete.runWith(null);
			return;
		}
		pack.compressTex=compress;
		pack.url=url;
		pack.path=path;
		pack.Parse(content);
		if (loadalldir){
			pack.LoadAllTexture(complete);
			}else{
			complete && complete.runWith(pack);
		}
	}

	// 加载图集资源
	__proto.LoadTexture=function(compress,path,dir,complete){
		var bin=this.GetDirName(compress,dir);
		var url=MAnimationUtil.ROOT_URL+path+"/"+bin;
		Laya.loader.load(url,Handler.create(this,this.OnTextureLoaded,[compress,url,path,dir,complete]),null,compress ? "arraybuffer" :null,1,!compress);
	}

	// trace(Browser.now()+",检查加载资源问题，MAnimationLoader==>LoadTexture,加载资源结束路劲URl："+url);
	__proto.OnTextureLoaded=function(compress,url,path,dir,complete,content){
		if (content){
			if (compress){
				var tex=this.ParseCompressTex(url,content);
				complete && complete.runWith(tex);
			}
			else{
				complete && complete.runWith(content);
			}
		}
		else{
			complete && complete.runWith(null);
		}
	}

	// trace(Browser.now()+",检查加载资源问题，MAnimationLoader==>OnTextureLoaded,加载资源完成路劲URl："+url);
	__proto.ParseCompressTex=function(url,content){
		var startTime=Browser.now();
		var bytes=new Byte(content);
		var len=bytes.getInt32();
		var color=bytes.getUint8Array(bytes.pos,len);
		len=bytes.getInt32();
		var alpha=bytes.getUint8Array(bytes.pos,len);
		var format=Browser.onAndroid ? 5 :11;
		var image=HTMLImage.create(0,0,format);
		image.setCompressData(color.buffer);
		image._setCreateURL(url);
		var texColor=new Texture(image);
		var image=HTMLImage.create(0,0,format);
		image.setCompressData(alpha.buffer);
		image._setCreateURL(url);
		var texAlpha=new Texture(image);
		texColor.alphaMask=texAlpha;
		bytes.clear();
		var endTime=Browser.now();
		var csTime=(startTime-endTime);
		if(csTime > 5){}
			return texColor;
	}

	__static(MAnimationLoader,
	['Ins',function(){return this.Ins=new MAnimationLoader();}
	]);
	return MAnimationLoader;
})()


/**
*地图数据元信息
*地图数据包含各种各样的东西，统一这里解析出元数据，便于不同模块间使用
*@author Administrator
*
*/
//class engine.scene.data.MMapMetaData
var MMapMetaData=(function(){
	function MMapMetaData(){
		// 坠崖方向配置
		this.mapresid=0;
		this.sceneWidth=0;
		this.sceneHeight=0;
		this.blockDatas=null;
		this.alphaDatas=null;
		this.jumpDatas=null;
		this.safeDatas=null;
		this.effDatas=null;
		this.disData=null;
		this.mapTopCoverData=null;
		this.gridsExtra=null;
		this.effectData=null;
		this.soundData=null;
		this.mapChunkData=null;
		this.mapDownhillData=null;
		this.layerDataGround=null;
		this.layerDataFar=null;
		this.downhillDataList=null;
		this.weatherData=null;
		this.weatherCreateItv=200;
		// 远景层移动速度比率
		this.farLayerMoveSpeedRatio=0;
		this.topCoverCalcZOffset=new HashMap();
		this.linkLines=new HashMap();
	}

	__class(MMapMetaData,'engine.scene.data.MMapMetaData');
	var __proto=MMapMetaData.prototype;
	__proto.ParseMapMeta=function(id,bytes){
		this.mapTopCoverData=null;
		this.gridsExtra=null;
		this.effectData=null;
		this.soundData=null;
		this.mapChunkData=null;
		this.mapDownhillData=null;
		this.blockDatas=null;
		this.alphaDatas=null;
		this.jumpDatas=null;
		this.safeDatas=null;
		this.effDatas=null;
		this.disData=null;
		this.mapresid=id;
		this.sceneWidth=0;
		this.sceneHeight=0;
		bytes.uncompress();
		bytes.pos=0;
		var version=bytes.readInt();
		var mapId=bytes.readInt();
		var blockLen=bytes.readInt();
		this.blockDatas=new ByteArray();
		bytes.readBytes(this.blockDatas,0,blockLen);
		var alphaLen=bytes.readInt();
		this.alphaDatas=new ByteArray();
		bytes.readBytes(this.alphaDatas,0,alphaLen);
		var safeLen=bytes.readInt();
		this.safeDatas=new ByteArray();
		bytes.readBytes(this.safeDatas,0,safeLen);
		var jumpLen=bytes.readInt();
		this.jumpDatas=new ByteArray();
		bytes.readBytes(this.jumpDatas,0,jumpLen);
		var effLen=bytes.readInt();
		this.effDatas=new ByteArray();
		bytes.readBytes(this.effDatas,0,effLen);
		this.disData=null;
		this.mapTopCoverData=null;
		var i=0;
		var dataLen=0;
		if (version==20141228){
			while (bytes.bytesAvailable){
				dataLen=bytes.readInt();
				var flag=dataLen >> 24;
				dataLen=dataLen & 0xffffff;
				if (flag==1){
					this.gridsExtra=new ByteArray();
					bytes.readBytes(this.gridsExtra,0,dataLen);
				}
				else if (flag==2){
					this.effectData=new ByteArray();
					bytes.readBytes(this.effectData,0,dataLen);
				}
				else if (flag==3){
					ToolBase.Log("此地图有音效："+mapId);
					this.soundData=new ByteArray();
					bytes.readBytes(this.soundData,0,dataLen);
				}
				else if (flag==4){
					this.disData=new ByteArray();
					bytes.readBytes(this.disData,0,dataLen);
				}
				else if (flag==5){
					this.mapTopCoverData=new ByteArray();
					bytes.readBytes(this.mapTopCoverData,0,dataLen);
				}
				else if (flag==6){
					this.mapChunkData=new ByteArray();
					bytes.readBytes(this.mapChunkData,0,dataLen);
				}
				else if (flag==7){
					this.mapDownhillData=new ByteArray();
					bytes.readBytes(this.mapDownhillData,0,dataLen);
				}
			}
		}
		else{
			if (bytes.bytesAvailable){
				dataLen=bytes.readInt();
				if (dataLen !=Number.MAX_VALUE){
					this.gridsExtra=new ByteArray();
					bytes.readBytes(this.gridsExtra,0,dataLen *4);
				}
				if (bytes.bytesAvailable){
					dataLen=bytes.readInt();
					this.effectData=new ByteArray();
					bytes.readBytes(this.effectData,0,bytes.length-bytes.pos);
				}
			}
		}
		this.ParseChunkLayerData();
		this.ParseDownHillData();
		ToolBase.Log("LoadMap ok id:"+mapId);
	}

	/**
	*设置图块描述信息
	*@param by
	*
	// 保存文件（保存到res里面 第一个字节是标志：高8位是flag，低24位是长度）
	// num(8)层数
	//------------
	// npctype(8)0地表 1景深
	// width(16)图块宽
	// height(16)图块高
	// wnum(16)图块水平数量
	// hnum(16)图块垂直数量
	//====
	// chunkflag(8)0x1 是否全透明 0x2 是否全黑
	//====x width*height
	//------------x num
	*
	*
	*
	*/
	__proto.ParseChunkLayerData=function(){
		var bytes=this.mapChunkData;
		bytes.endian="littleEndian";
		bytes.pos=0;
		this.layerDataGround=null;
		this.layerDataFar=null;
		this.weatherData=null;
		var tileLayerNum=bytes.readByte();
		this.sceneWidth=bytes.readInt();
		this.sceneHeight=bytes.readInt();
		for (var i=0;i < tileLayerNum;++i){
			var d=new ChunkLayerData();
			d.ReadData(bytes);
			var weather=new MWeatherAreaData();
			weather.ReadData(bytes);
			if (d.layerType==0){
				this.layerDataGround=d;
				this.weatherData=weather;
			}
			else if (d.layerType==1){
				this.layerDataFar=d;
			}
		}
	}

	__proto.ParseDownHillData=function(){
		if (this.mapDownhillData !=null){
			var bytes=this.mapDownhillData;
			bytes.endian="littleEndian";
			bytes.pos=0;
			this.downhillDataList=[];
			var len=bytes.readInt();
			for (var i=0;i < len;++i){
				this.downhillDataList.push(new MapDownHillData(bytes));
			}
		}
		else{
			this.downhillDataList=null;
		}
	}

	__proto.SetTopCoverCalcZOffset=function(s){
		this.topCoverCalcZOffset.clear();
		if (s !=null && s !=""){
			var arr1=s.split("|");
			for (var i=0;i < arr1.length;++i){
				var arr2=arr1[i].split(":");
				if (arr2.length==2){
					var arr3=arr2[1].split(",");
					this.topCoverCalcZOffset.put(arr2[0],new Point$1(parseInt(arr3[0]),parseInt(arr3[1])));
				}
			}
		}
	}

	__proto.SetLinkLines=function(s){
		this.linkLines.clear();
		if (s !=null && s !=""){
			var arr1=s.split("|");
			for (var i=0;i < arr1.length;++i){
				var arr2=arr1[i].split(":");
				if (arr2.length==2){
					var arr3=arr2[0].split(",");
					var pt1=new Point$1(parseInt(arr3[0]),parseInt(arr3[1]));
					arr3=arr2[1].split(",");
					var pt2=new Point$1(parseInt(arr3[0]),parseInt(arr3[1]));
					var k1=pt1.x *10000+pt1.y;
					var k2=pt2.x *10000+pt2.y;
					var arr=this.linkLines.get(k1);
					var lk=null;
					if (arr==null){
						arr=[];
						this.linkLines.put(k1,arr);
					}
					arr.push(new AStarLinkLine(pt2,1));
					arr=this.linkLines.get(k2);
					if (arr==null){
						arr=[];
						this.linkLines.put(k2,arr);
					}
					arr.push(new AStarLinkLine(pt1,1));
				}
			}
		}
	}

	MMapMetaData.CHUNK_TYPE_GROUND=0;
	MMapMetaData.CHUNK_TYPE_FAR=1;
	MMapMetaData.CHUNK_FLAG_ALL_ALPHA=0x1;
	MMapMetaData.CHUNK_FLAG_ALL_NO_ALPHA=0x2;
	MMapMetaData.CHUNK_FLAG_ALL_BLACK=0x4;
	MMapMetaData.FLAG_SPECIAL=1;
	MMapMetaData.FLAG_SCENEEFFECT=2;
	MMapMetaData.FLAG_SCENESOUND=3;
	MMapMetaData.FLAG_SCENEVIEW=4;
	MMapMetaData.FLAG_TOPCOVER=5;
	MMapMetaData.FLAG_CHUNK=6;
	MMapMetaData.FLAG_DOWNHILL=7;
	return MMapMetaData;
})()


/**
*工具，基础对象的生成，判断
*@author Administrator
*/
//class engine.tool.ToolBase
var ToolBase=(function(){
	function ToolBase(){}
	__class(ToolBase,'engine.tool.ToolBase');
	/**
	*获取服务器ms
	*/
	__getset(1,ToolBase,'serverMTime',function(){
		if (ToolBase.SERVER_MTIME !=null)
			return ToolBase.SERVER_MTIME.call();
		return ToolBase.GetTimer();
	});

	ToolBase.INT=function(val){
		return val | 0;
	}

	ToolBase.GetTimer=function(){
		var ret=0;
		ret=new Date().getTime();;
		return ret;
	}

	ToolBase.RLog=function(s,t){
		(t===void 0)&& (t=false);
		try{
			ToolBase.Log(s);
		}
		catch(e){
		}
	}

	ToolBase.Log=function(s){
		s="["+ToolBase.GetTimer()+"][INFO] "+s;
		console.log(s);
	}

	ToolBase.LogError=function(s){
		if (s==null)
			return;
		try{
			s="["+ToolBase.GetTimer()+"][ERROR] "+s;
			console.log(s);
		}
		catch(e){
		}
	}

	ToolBase.LogErrorAndDebug=function(s){
		if (s==null)
			return;
		try{
			if (ToolBase.isDebug){
				ToolBase.MessageBox(s);
			}
			s=("["+ToolBase.GetTimer()+"][ERROR] "+s);
			console.log(s);
		}
		catch(e){
		}
	}

	ToolBase.LogAndDeubgThrow=function(s){
		if (ToolBase.isDebug)
			ToolBase.LogThrow(s);
		else
		ToolBase.LogError(s);
	}

	ToolBase.LogThrow=function(s){
		var str=ToolBase.GetStackTrace(s);
		ToolBase.LogError(str);
		throw new Error(s);
	}

	ToolBase.GetStackTrace=function(pre){
		var str="";
		str+="// ==========================================================================\n";
		str+=pre+"\n"
		str+=console.trace()+"\n";
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

	ToolBase.MessageBox=function(s){
		if (s==null)
			return;
		TinyMessageBox.Show(s);
	}

	ToolBase.Assert=function(v,s){
		if (v==false)
			throw new Error(s);
	}

	ToolBase.GetTimerS=function(){
		return ToolBase.GetTimer()/ 1000;
	}

	ToolBase.GetFrameTimerS=function(){
		return ToolBase.GetTimerS();
	}

	ToolBase.GetWinWidth=function(){
		return Laya.stage.width;
	}

	ToolBase.GetWinHeight=function(){
		return Laya.stage.height;
	}

	ToolBase.RandomInt=function(v1,v2){
		return v1+(Math.random()*(v2-v1)| 0);
	}

	ToolBase.RandomArray=function(arr){
		var id=ToolBase.RandomInt(0,arr.length);
		return arr[id];
	}

	ToolBase.RandomFloat=function(v1,v2){
		return v1+Math.random()*(v2-v1);
	}

	ToolBase.RandomFloat2=function(v1,v2){
		return v1+Math.random()*(v2+1-v1);
	}

	ToolBase.RandomBoolean=function(){
		return Math.random()> 0.5;
	}

	ToolBase.GetPowOf2Value=function(value){
		var v=1;
		while (v < value){
			v *=2;
		}
		return v;
	}

	ToolBase.ClampFloat=function(value,min,max){
		value=Math.min(Math.max(value,min),max);
		if (isNaN(value))
			value=min;
		return value;
	}

	ToolBase.ClampInt=function(value,min,max){
		return Math.min(Math.max(value,min),max);
	}

	ToolBase.LerpPoint=function(start,end,per){
		return new Point$1(start.x+(end.x-start.x)*per,start.y+(end.y-start.y)*per);
	}

	ToolBase.LerpValue=function(start,end,per){
		return start+(end-start)*per;
	}

	ToolBase.DivFloorInt=function(value,mod){
		var ret=(value / mod);
		if (value % mod !=0)
			ret++;
		return ret;
	}

	ToolBase.CheckBitMask=function(value,mask){
		return ((value & mask)!=0);
	}

	ToolBase.ClearBitMask=function(value,mask){
		return value &=~mask;
	}

	ToolBase.AddBitMask=function(value,mask){
		return value |=mask;
	}

	ToolBase.SetResRoot=function(animation,ui,sound,effect){
		ToolBase.ResRootAnimation=animation;
		ToolBase.ResRootUI=ui;
		ToolBase.ResRootSound=sound;
		ToolBase.ResRootEffect=effect;
		ToolBase.ResPathAnimation=ToolBase.GetResURL(animation);
		ToolBase.ResPathUI=ToolBase.GetResURL(ui);
		ToolBase.ResPathSound=ToolBase.GetResURL(sound);
		ToolBase.ResPathEffect=ToolBase.GetResURL(effect);
	}

	ToolBase.GetResAnimationURL=function(path){
		if (path.charAt(0)=="/")
			return ToolBase.ResPathAnimation+path;
		return ToolBase.ResPathAnimation+"/"+path;
	}

	ToolBase.GetResUIURL=function(path){
		if(path==null || path=="")
			return ToolBase.ResPathUI;
		else if (path.charAt(0)=="/")
		return ToolBase.ResPathUI+path;
		return ToolBase.ResPathUI+"/"+path;
	}

	ToolBase.GetResSoundURL=function(path){
		if (path.charAt(0)=="/")
			return ToolBase.ResPathSound+path;
		return ToolBase.ResPathSound+"/"+path;
	}

	ToolBase.GetResEffectURL=function(path){
		if (path.charAt(0)=="/")
			return ToolBase.ResPathEffect+path;
		return ToolBase.ResPathEffect+"/"+path;
	}

	ToolBase.GetResURL=function(path){
		if (path.charAt(0)=="/")
			return ToolBase.GetResURLRoot()+path;
		return ToolBase.GetResURLRoot()+"/"+path;
	}

	ToolBase.GetResURLRoot=function(){
		if (ToolBase.ResPathRoot==null){
			ToolBase.ResPathRoot="res";
		}
		return ToolBase.ResPathRoot;
	}

	ToolBase.IsEqualPoint=function(pt1,pt2){
		return pt1.x==pt2.x && pt1.y==pt2.y;
	}

	ToolBase.IsEqualPoint2=function(x1,y1,x2,y2){
		return x1==x2 && y1==y2;
	}

	ToolBase.IsContainsPoint=function(rect,pt){
		return rect.contains(pt.x,pt.y);
	}

	ToolBase.isPowerOfTwo=function(value){
		return value? ((value &-value)==value):false;
	}

	ToolBase.interpolate=function(pt1,pt2,f){
		return new Point$1(pt2.x+f *(pt1.x-pt2.x),pt2.y+f *(pt1.y-pt2.y));
	}

	ToolBase.polar=function(len,angle){
		return new Point$1(len *Math.cos(angle),len *Math.sin(angle));
	}

	ToolBase.CreatePowOf2Bitmapdata=function(old){
		var ret=old;
		var w=old.width;
		var h=old.height;
		if (ToolBase.isPowerOfTwo(w)==false){
			w=ToolBase.GetPowOf2Value(w);
		}
		if (ToolBase.isPowerOfTwo(h)==false){
			h=ToolBase.GetPowOf2Value(h);
		}
		if (old.width !=w || old.height !=h){
			throw new Error("这里还没有实现！！！。")
		}
		return ret;
	}

	ToolBase.ParseFlagHead=function(value){
		var ret="";
		ret=String.fromCharCode((value >> 24)& 0x0ff)+ret;
		ret=String.fromCharCode((value >> 16)& 0x0ff)+ret;
		ret=String.fromCharCode((value >> 8)& 0x0ff)+ret;
		ret=String.fromCharCode((value >> 0)& 0x0ff)+ret;
		return ret;
	}

	ToolBase.SortBubble=function(arr){
		var temp=null;
		for(var i=0;i < arr.length-1;i++){
			for (var j=arr.length-1;j > i;j--){
				if (arr[j].sortValue < arr[j-1].sortValue){
					temp=arr[j-1];
					arr[j-1]=arr[j];
					arr[j]=temp;
				}
			}
		}
	}

	ToolBase.SortQuick=function(arr,prop,type,start,end){
		(type===void 0)&& (type=1);
		(start===void 0)&& (start=0);
		(end===void 0)&& (end=2147483647);
		if (prop==null)
			prop="sortValue";
		if (end==2147483647)
			end=arr.length-1;
		if (start < 0 || end > arr.length){
			return;
		}
		if (start < end){
			var i=start;
			var j=end;
			var base=arr[start];
			while(i < j){
				if (type==1){
					while(i < j && arr[j][prop] >=base[prop])
					j--;
				}
				else{
					while(i < j && arr[j][prop] <=base[prop])
					j--;
				}
				if (i < j){
					arr[i]=arr[j];
					i++;
				}
				if (type==1){
					while(i < j && arr[i][prop] <=base[prop])
					i++;
				}
				else{
					while(i < j && arr[i][prop] >=base[prop])
					i++;
				}
				if (i < j){
					arr[j]=arr[i];
					j--;
				}
			}
			arr[i]=base;
			ToolBase.SortQuick(arr,prop,type,start,i-1);
			ToolBase.SortQuick(arr,prop,type,i+1,end);
		}
	}

	ToolBase.RemoveAllChildren=function(con,isdestroy){
		(isdestroy===void 0)&& (isdestroy=true);
		while (con.numChildren > 0){
			if (isdestroy)
				con.getChildAt(0).destroyChildren();
			else
			con.removeChildAt(0);
		}
	}

	ToolBase.Create3DRect=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
		var ret=new Sprite;
		ret.graphics.drawRect(0,0,w,h,color);
		return ret;
	}

	ToolBase.Create2DRect=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
		return null;
	}

	ToolBase.Create2DRectSprite=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
		return null;
	}

	ToolBase.CloneDictionary=function(src,dst){
		if (dst==null){
			dst=new Dictionary();
		}
		if (src !=null){
			for (var k in src){
				dst[k]=src[k];
			}
		}
		return dst;
	}

	ToolBase.DegreeGetAngleByPoint=function(startx,starty,endx,endy){
		var fAngle=0;
		var add=0;
		if (endx==startx && endy==starty)
			return 0;
		if (endx > startx){
			if (endy > starty){
				fAngle=Math.atan((endy-starty)/ (endx-startx));
				add=90;
			}
			else{
				fAngle=Math.atan((endx-startx)/ (starty-endy));
				add=0;
			}
		}
		else{
			if (endy > starty){
				fAngle=Math.atan((startx-endx)/ (endy-starty));
				add=180;
			}
			else{
				fAngle=Math.atan((starty-endy)/ (startx-endx));
				add=270;
			}
		}
		return (((fAngle *180)/ Math.PI))+add;
	}

	ToolBase.DegreeAngleToRadian=function(angle){
		return angle *(Math.PI / 180);
	}

	ToolBase.DegreeRadianToAngle=function(radian){
		return radian *(180 / Math.PI);
	}

	ToolBase.DegreeDirToRadian=function(dir){
		return ToolBase.DegreeAngleToRadian(ToolBase.DegreeDirToAngle(dir));
	}

	ToolBase.DegreeDirToAngle=function(dir){
		return-90+(dir *45);
	}

	ToolBase.getAngle=function(point,centerPt){
		var angle=Math.atan2(point.y-centerPt.y,point.x-centerPt.x)*(180/Math.PI);
		return angle;
	}

	ToolBase.getRadian=function(point,centerPt){
		var radian=Math.PI / 180 *ToolBase.getAngle(point,centerPt);
		return radian;
	}

	ToolBase.PointEquals=function(a,b){
		return a.x==b.x && a.y==b.y;
	}

	ToolBase.INT_MAX=2147483647;
	ToolBase.INT_MIN=-2147483648;
	ToolBase.stg=null;
	ToolBase.isDebug=true;
	ToolBase.ERROR_THROW=true;
	ToolBase.SERVER_MTIME=null;
	ToolBase.ResPathRoot=null;
	ToolBase.ResRootAnimation=null;
	ToolBase.ResRootUI=null;
	ToolBase.ResRootSound=null;
	ToolBase.ResRootEffect=null;
	ToolBase.ResPathAnimation=null;
	ToolBase.ResPathUI=null;
	ToolBase.ResPathSound=null;
	ToolBase.ResPathEffect=null;
	ToolBase.ResPathMap=null;
	__static(ToolBase,
	['startTime',function(){return this.startTime=Laya.timer.currTimer;},'ColorMaterialCache',function(){return this.ColorMaterialCache=new HashMap();}
	]);
	return ToolBase;
})()


/**
*骨骼动画管理类
*/
//class engine.templet.MTempletManager
var MTempletManager=(function(){
	function MTempletManager(){
		this._resTypeName={};
		this._cacheTemplet=new Dictionary();
		this._refAniMap=new Dictionary();
	}

	__class(MTempletManager,'engine.templet.MTempletManager');
	var __proto=MTempletManager.prototype;
	__proto.RegisterType=function(restype,name){
		this._resTypeName[restype]=name;
	}

	__proto.ToKeyName=function(restype,filename){
		return "res/"+this._resTypeName[restype]+"/"+filename+".sk";
	}

	__proto.GetTemplet=function(restype,resname){
		var key=this.ToKeyName(restype,resname);
		var templet=this._cacheTemplet.get(key);
		if (templet==null){
			templet=new MTemplet();
			this._cacheTemplet.set(key,templet);
		}
		if (!templet.isParserComplete){
			templet.loadAni(key);
		}
		return templet;
	}

	__proto.RefAni=function(ani){
		this._refAniMap.set(ani,ToolBase.GetTimer());
	}

	/**
	*释放一个IAnimationRes的引用
	*/
	__proto.FreeAni=function(anim){
		this._refAniMap.remove(anim);
	}

	__proto.DoGC=function(proxy){
		var refAnis=this._refAniMap.keys;
		var refKeys=[];
		for (var i=0;i < refAnis.length;++i){
			var t=refAnis[i];
			if (t.loadingkey==null)continue ;
			refKeys.push(t.loadingkey);
		};
		var tkeys=this._cacheTemplet.keys;
		var releaseKeys=[];
		for (var i=0;i < tkeys.length;++i){
			if (refKeys.indexOf(tkeys[i])==-1 && proxy.IsCanRelease(tkeys[i],false)){
				releaseKeys.push(tkeys[i]);
			}
		};
		var log="MTempletManager gc:\n";
		for (var i=0;i < releaseKeys.length;++i){
			log+=releaseKeys[i]+"\n";
			var t=this._cacheTemplet.get(releaseKeys[i]);
			t.destroy();
			this._cacheTemplet.remove(releaseKeys[i]);
		}
		console.log(log);
	}

	__static(MTempletManager,
	['Ins',function(){return this.Ins=new MTempletManager();}
	]);
	return MTempletManager;
})()


//class engine.scene.grid.EnumSceneGridType
var EnumSceneGridType=(function(){
	function EnumSceneGridType(){}
	__class(EnumSceneGridType,'engine.scene.grid.EnumSceneGridType');
	EnumSceneGridType.BARRIER=0x00000000;
	EnumSceneGridType.W_UF=0x00000001;
	EnumSceneGridType.UW_F=0x00000002;
	EnumSceneGridType.EMPTY=0x00000003;
	EnumSceneGridType.COVERING=0x00000004;
	EnumSceneGridType.SAFE=0x00000008;
	EnumSceneGridType.USTOP=0x00000010;
	EnumSceneGridType.WATER=0x00000020;
	EnumSceneGridType.WATERLESS=0x00000040;
	EnumSceneGridType.TRANS=0x00000080;
	EnumSceneGridType.MaxType=0x0000ffff;
	EnumSceneGridType.WORK=0x1;
	EnumSceneGridType.FLY=0x2;
	EnumSceneGridType.COV=0x4;
	return EnumSceneGridType;
})()


//class engine.res.MAnimationGCProxy
var MAnimationGCProxy=(function(){
	function MAnimationGCProxy(){
		this._foreverMap=[];
		this._resTypeId=[];
	}

	__class(MAnimationGCProxy,'engine.res.MAnimationGCProxy');
	var __proto=MAnimationGCProxy.prototype;
	__proto.RegisterForever=function(key){
		if (this._foreverMap.indexOf(key)==-1)
			this._foreverMap.push(key);
	}

	__proto.DelForever=function(key){
		var index=this._foreverMap.indexOf(key);
		if(index>=0)
			this._foreverMap.splice(index,1);
	}

	// 某个类型的资源，注册一个id不释放
	__proto.RegisterTypeId=function(oldtype,oldid,oldExtra,type,resid,extra){
		if (oldid > 0){
			var oldkey=MAnimationUtil.ToShortKey(oldtype,oldid,oldExtra);
			var index=this._resTypeId.indexOf(oldkey);
			if (index !=-1){
				this._resTypeId.splice(index,1);
			}
		}
		if (resid > 0){
			var key=MAnimationUtil.ToShortKey(type,resid,extra);
			if (this._resTypeId.indexOf(key)==-1)
				this._resTypeId.push(key);
		}
	}

	__proto.IsCanRelease=function(key,all){
		if (this._foreverMap.indexOf(key)!=-1)return false;
		if (!all){
			var values=this._resTypeId;
			var len=values.length;
			for (var i=0;i < len;++i){
				if (key.indexOf(values[i])==0)return false;
			}
		}
		return true;
	}

	return MAnimationGCProxy;
})()


/**
*针对laya简化的图块控制
*@author Administrator
*
*/
//class engine.scene.chunk.PTileImageControl
var PTileImageControl=(function(){
	function PTileImageControl(){
		this._container=null;
		/**图块**/
		this._chunks=null;
		/**图块对应的url**/
		this._chunksURL=null;
		/**图块最后一次显示时间**/
		this._chunksShowTime=null;
		// 动态释放远距离的图块
		this._isDynamic=false;
		this._url=null;
		// 图块路径
		this._totalWidth=0;
		this._totalHeight=0;
		this._tileSizeW=0;
		this._tileSizeH=0;
		this._tileNumW=0;
		this._tileNumH=0;
		//加载失败的地图块idx集合
		this.failIDXs=null;
		this._viewRc=new Rectangle();
	}

	__class(PTileImageControl,'engine.scene.chunk.PTileImageControl');
	var __proto=PTileImageControl.prototype;
	__proto.Init=function(container){
		this._container=container;
	}

	__proto.Dispose=function(){
		this.Clear();
	}

	__proto.SetData=function(url,totalw,totalh,tilew,tileh,scaleperX,scaleperY){
		this._url=url;
		this._totalWidth=totalw;
		this._totalHeight=totalh;
		this._tileSizeW=tilew;
		this._tileSizeH=tileh;
		this._tileNumW=Math.ceil(this._totalWidth / this._tileSizeW);
		this._tileNumH=Math.ceil(this._totalHeight / this._tileSizeH);
		var len=this._tileNumW *this._tileNumH;
		this._chunks=__newvec(len);
		this._chunksURL=__newvec(len);
		this._chunksShowTime=__newvec(len);
		this.failIDXs=[];
	}

	/**
	*清除数据块
	*
	*/
	__proto.Clear=function(){
		this._url=null;
		this._totalWidth=0;
		this._totalHeight=0;
		if (this._chunks !=null){
			var chunks=this._chunks;
			var chunksURL=this._chunksURL;
			var len=chunks.length;
			for (var i=0;i < len;i++){
				if (chunks[i] !=null && chunks[i].texture !=null){
					chunks[i].texture.disposeBitmap();
					chunks[i].texture.destroy();
				}
				if (chunks[i] !=null)
					chunks[i].destroy(true);
				if (chunksURL[i] !=null)
					Laya.loader.cancelLoadByUrl(chunksURL[i]);
			}
			this._chunks=null;
			this._chunksURL=null;
		}
		this.failIDXs=null;
	}

	__proto.clearFailIDXs=function(){
		if(this.failIDXs !=null && this.failIDXs.length > 0 && this._chunksShowTime !=null){
			var idx=0;
			while (this.failIDXs.length > 0){
				idx=this.failIDXs.shift();
				if(this._chunksShowTime.length > idx)
					this._chunksShowTime[idx]=0;
			}
		}
	}

	__proto.IsClear=function(){
		return (this._totalWidth==0);
	}

	__proto.GetChunkUrls=function(sceneRect){
		var rc=this._viewRc;
		var tileSizeW=this._tileSizeW;
		var tileSizeH=this._tileSizeH;
		rc.x=Math.floor(sceneRect.x / tileSizeW)-1;
		rc.y=Math.floor(sceneRect.y / tileSizeH)-1;
		rc.width=Math.ceil(sceneRect.width / tileSizeW)+2;
		rc.height=Math.ceil(sceneRect.height / tileSizeH)+2;
		var urls=[];
		var chunks=[];
		var fx=Math.max(rc.x,0);
		var fy=Math.max(rc.y,0);
		var toy=Math.min(rc.y+rc.height,this._tileNumH);
		var tox=Math.min(rc.x+rc.width,this._tileNumW);
		for (var ty=fy;ty < toy;ty++){
			for (var tx=fx;tx < tox;tx++){
				var url=this._url.replace("{0}",tx);
				url=url.replace("{1}",ty);
				urls.push(url);
				chunks.push([tx,ty]);
			}
		}
		return [urls,chunks];
	}

	/**
	*在外部视口变化的时候调用,一般是在移动位置的时候,或者帧循环中
	*@param x
	*@param y
	*
	*/
	__proto.UpdateChunk=function(screenRect){
		if (this.IsClear())
			return;
		var rc=this._viewRc;
		var tileSizeW=this._tileSizeW;
		var tileSizeH=this._tileSizeH;
		rc.x=Math.floor(screenRect.x / tileSizeW)-1;
		rc.y=Math.floor(screenRect.y / tileSizeH)-1;
		rc.width=Math.ceil(screenRect.width / tileSizeW)+2;
		rc.height=Math.ceil(screenRect.height / tileSizeH)+2;
		var spr;
		var isShow=false;
		var curTime=ToolBase.GetTimer();
		var onceLoad=false;
		var onceFree=false;
		var chunksShowTime=this._chunksShowTime;
		var chunks=this._chunks;
		var tileNumH=this._tileNumH;
		var tileNumW=this._tileNumW;
		for (var ty=0;ty < tileNumH;ty++){
			for (var tx=0;tx < tileNumW;tx++){
				if (onceFree==true && onceLoad==true)
					return;
				var idx=((ty *tileSizeW)+tx);
				isShow=rc.contains(tx,ty);
				spr=chunks[idx];
				if (spr !=null)
					spr.visible=isShow;
				if (isShow==true){
					if (spr==null){
						if (!onceLoad){
							this.LoadChunk(tx,ty);
							onceLoad=true;
							chunksShowTime[idx]=curTime;
						}
					}
				}
				else{
					if (spr !=null && (curTime-chunksShowTime[idx])> PTileImageControl.RELEASE_TIME){
						if (!onceFree){
							if (spr.texture !=null){
								spr.texture.disposeBitmap();
								spr.texture.destroy();
								spr.texture=null;
							}
							spr.destroy(true);
							chunks[idx]=null;
							onceFree=true;
						}
					}
				}
			}
		}
	}

	__proto.LoadChunk=function(cX,cY){
		var idx=((cY *this._tileSizeW)+cX);
		var chunks=this._chunks;
		if (chunks[idx]==null){
			chunks[idx]=new Sprite();
			chunks[idx].pos(cX *this._tileSizeW,cY *this._tileSizeH);
		}
		if (chunks[idx].texture !=null)
			return;
		var url=this._url.replace("{0}",cX);
		url=url.replace("{1}",cY);
		this._chunksURL[idx]=url;
		Laya.loader.load(url,Handler.create(this,this.LoadChunkOK,[cX,cY,url]));
	}

	__proto.LoadChunkOK=function(cX,cY,url,t){
		var idx=((cY *this._tileSizeW)+cX);
		if (t==null || t.getIsReady==null || !t.getIsReady()|| t.url==null){
			console.log("chunk load fail url:"+url);
			if(t==null)
				this.failIDXs.push(idx);
			return;
		};
		var chunks=this._chunks;
		if (chunks==null || chunks[idx]==null){
			ToolBase.Log("chunk load suc but container destroyed  url:"+t.url);
			t.destroy();
			return;
		};
		var tarUrl=t.url.replace(URL.basePath,"");
		if (this._chunksURL[idx] !=tarUrl){
			ToolBase.Log("chunk load over but url isnot equal to container url [container url="+this._chunksURL[idx]+" loadurl:"+t.url);
			t.destroy();
			return;
		};
		var spr=chunks[idx];
		spr.texture=t;
		(this._container).addChild(spr);
	}

	PTileImageControl.RELEASE_TIME=30 *1000;
	return PTileImageControl;
})()


//class engine.battle.move.MBattleMoveRule
var MBattleMoveRule=(function(){
	function MBattleMoveRule(){
		this._obj=null;
		this._moveType=0;
		this._curJumpHeight=0;
		this._movePercent=0;
		this._moveDistance=0;
		this._moveStartTime=0;
		this._moveTime=0;
		this._sPt=new Point$1();
		this._ePt=new Point$1();
		this._jumpDebugDisList=[];
	}

	__class(MBattleMoveRule,'engine.battle.move.MBattleMoveRule');
	var __proto=MBattleMoveRule.prototype;
	__proto.SetData=function(obj){
		this._obj=obj;
	}

	__proto.destroy=function(){
		this.ClearDebug();
		this._obj=null;
	}

	__proto.ClearDebug=function(){
		for (var i=0;i < this._jumpDebugDisList.length;++i){
			this._jumpDebugDisList[i].destroy();
		}
		this._jumpDebugDisList.length=0;
	}

	__proto.Move=function(type,gx,gy,time){
		this.ClearDebug();
		this._moveType=type;
		this._obj.GetPixPt(this._sPt);
		this._ePt.setTo(MBattleUtil.GridXToPixX(gx),MBattleUtil.GridYToPixY(gy));
		this._moveDistance=this._ePt.distance(this._sPt.x,this._sPt.y);
		this._movePercent=0;
		this._moveStartTime=Laya.timer.currTimer;
		this._moveTime=time;
		var old=this._obj.GetGridPt();
		var dir=ToolMap.CalcDirSlant(old.x,old.y,gx,gy);
		this._obj.OnMoveStart(this._moveType,dir);
	}

	__proto.OnFrame=function(curtime){
		if (!this._moveType)return;
		this._movePercent=Math.min(1,(Laya.timer.currTimer-this._moveStartTime)/ this._moveTime);
		var old=this._obj.GetGridPt(Point$1.TEMP);
		var oldx=old.x;
		var oldy=old.y;
		var curx=(this._sPt.x+(this._ePt.x-this._sPt.x)*this._movePercent)| 0;
		var cury=(this._sPt.y+(this._ePt.y-this._sPt.y)*this._movePercent)| 0;
		if (this._movePercent >=1){
			this._curJumpHeight=0;
			}else if (this._moveType==2 || this._moveType==3){
			this.CalcJumpHeight();
			this._obj.SetJumpHeight(this._curJumpHeight);
		}
		this._obj.SetPixPt(Point$1.TEMP.setTo(curx,cury));
		old=this._obj.GetGridPt(Point$1.TEMP);
		if (oldx !=old.x || oldy !=old.y){
			this._obj.OnMoveEnterGrid(oldx,oldy);
		}
		if (this._movePercent >=1){
			this.Stop();
		}
	}

	__proto.Stop=function(){
		this._curJumpHeight=0;
		if (this._moveType !=0){
			var type=this._moveType;
			this._moveType=0;
			this._obj.OnMoveEnd(type);
		}
	}

	__proto.CalcJumpHeight=function(){
		var per=(1-this._movePercent);
		var calcdis=this._moveDistance;
		if (calcdis==0)
			calcdis=450;
		var addHeight=0;
		if (1==0){
			this._curJumpHeight=Math.sin(Math.PI *per)*calcdis *0.3;
		}
		else if (1==1){
			var maxhthrow=(calcdis *0.3)*4;
			this._curJumpHeight=-maxhthrow *per *per+maxhthrow *per;
			this._curJumpHeight+=addHeight;
		}
		else if (1==2){
			var maxhpow=calcdis *0.1;
			this._curJumpHeight=-maxhpow *per *per+maxhpow *per;
			this._curJumpHeight=this._curJumpHeight *this._curJumpHeight;
			this._curJumpHeight+=addHeight;
		}
		else if (1==3){
			var maxhsqrt=(calcdis)*4 *32;
			this._curJumpHeight=-maxhsqrt *per *per+maxhsqrt *per;
			this._curJumpHeight=Math.sqrt(this._curJumpHeight);
			this._curJumpHeight+=addHeight;
		}
		else if (1==4){
			var maxhround=(calcdis *0.5);
			var valround=maxhround *maxhround-Math.pow(calcdis *per-maxhround,2);
			if (valround < 0)
				valround=0;
			this._curJumpHeight=Math.sqrt(valround);
			this._curJumpHeight+=addHeight;
		}
		else if (1==5){
			var maxhroundsqrt=(calcdis *0.5);
			var valrs=maxhroundsqrt *maxhroundsqrt-Math.pow(calcdis *per-maxhroundsqrt,2);
			if (valrs < 0)
				valrs=0;
			this._curJumpHeight=Math.sqrt(valrs);
			this._curJumpHeight=Math.sqrt(this._curJumpHeight *40);
			this._curJumpHeight+=addHeight;
		}
		else if (1==6){
			var ellipsea=(calcdis *0.5);
			var ellipseb=(calcdis *0.3);
			var ellipseval=1-Math.pow((calcdis *per-ellipsea)/ ellipsea ,2);
			if (ellipseval < 0)
				ellipseval=0;
			this._curJumpHeight=ellipseb *Math.sqrt(ellipseval);
			this._curJumpHeight+=addHeight;
		}
		this._curJumpHeight |=0;
		if (false){
			var dis=new Sprite();
			dis.graphics.drawCircle(0,0,5,"#ff0000");
			var spt=this._obj.GetPixPt();
			dis.pos(spt.x,spt.y-this._curJumpHeight);
			(this._obj).view.parent.addChild(dis);
			this._jumpDebugDisList.push(dis);
		}
	}

	__proto.isJumpType=function(type){
		return type==2 || type==3;
	}

	__getset(0,__proto,'isMoving',function(){
		return this._moveType !=0;
	});

	__getset(0,__proto,'isJump',function(){
		return this.isJumpType(this._moveType);
	});

	__getset(0,__proto,'curJumpHeight',function(){
		return this._curJumpHeight;
	});

	MBattleMoveRule.JUMP_HEIGHT_CALC_TYPE=1;
	return MBattleMoveRule;
})()


//class engine.battle.MBattleUtil
var MBattleUtil=(function(){
	function MBattleUtil(){}
	__class(MBattleUtil,'engine.battle.MBattleUtil');
	MBattleUtil.GetFrontPt=function(gx,gy,dir,ret){
		if (ret==null)
			ret=Point$1.TEMP.setTo(0,0);
		ret.x=gx+ToolMap.DirectionOffsetX8[dir];
		ret.y=gy+ToolMap.DirectionOffsetY8[dir];
		return ret;
	}

	MBattleUtil.GetBackPt=function(gx,gy,dir,ret){
		if (ret==null)
			ret=Point$1.TEMP.setTo(0,0);
		ret.x=gx-ToolMap.DirectionOffsetX8[dir];
		ret.y=gy-ToolMap.DirectionOffsetY8[dir];
		return ret;
	}

	MBattleUtil.GetBackPix=function(gx,gy,dir,ret){
		if (ret==null)
			ret=Point$1.TEMP.setTo(0,0);
		ret.x=MBattleUtil.GridXToPixX(gx);
		ret.y=MBattleUtil.GridYToPixY(gy);
		ret.x=ret.x-ToolMap.DirectionOffsetX8[dir] *48;
		ret.y=ret.y-ToolMap.DirectionOffsetY8[dir] *36;
		return ret;
	}

	MBattleUtil.GridXToPixX=function(x){
		return x *48+48 / 2;
	}

	MBattleUtil.GridYToPixY=function(y){
		return y *36+36 / 2;
	}

	MBattleUtil.PixXToGridX=function(x){
		return (x / 48 | 0);
	}

	MBattleUtil.PixYToGridY=function(y){
		return (y / 36 | 0);
	}

	MBattleUtil.GRIDW=48;
	MBattleUtil.GRIDH=36;
	return MBattleUtil;
})()


/**
*场景显示层管理
*@author Administrator
*/
//class engine.scene.layer.MapSceneLayer
var MapSceneLayer=(function(){
	function MapSceneLayer(){
		this._curSceneH=0;
		this._curSceneW=0;
		this._sceneRoot=null;
		// 地表层（地图块）
		this._layerMap=null;
		// 对象底层（底部对象，如地面物品等）
		this._layerBottom=null;
		// 中景层（大量对象会进行排序）
		this._layerMiddle=null;
		this._layerTop=null;
		this._lookTarget=null;
		this._screenSceneRect=null;
		this._map=null;
		this._isSceneMoving=false;
		this._shakeControl=null;
		// 场景整体缩放
		this._realSceneScale=1;
		this._curShowScale=1;
		this._tweenStartTime=0;
		this._tweenStartValue=0;
		this._tweenTime=0;
		this._cameraRealPos=new Point$1();
		this._camraPosAreaRect=new Rectangle();
		this.pixOffPt=new Point$1();
		this._shakeControl=new SceneShakeControl();
	}

	__class(MapSceneLayer,'engine.scene.layer.MapSceneLayer');
	var __proto=MapSceneLayer.prototype;
	__proto.Init=function(map){
		this._map=map;
		this._screenSceneRect=new Rectangle(0,0,Laya.stage.width,Laya.stage.height);
		this._sceneRoot=new MSprite();
		this._sceneRoot.name="sceneRoot";
		this._sceneRoot.scrollRect=this._screenSceneRect;
		this._layerMap=new MSprite();
		this._layerMap.name="layerMap";
		this._layerBottom=new MSprite();
		this._layerBottom.name="layerBottom";
		this._layerMiddle=new MSprite();
		this._layerMiddle.name="layerMiddle";
		this._layerTop=new MSprite();
		this._layerTop.name="layerTop";
		this._sceneRoot.addChild(this._layerMap);
		this._sceneRoot.addChild(this._layerBottom);
		this._sceneRoot.addChild(this._layerMiddle);
		this._sceneRoot.addChild(this._layerTop);
		Laya.stage.on("resize",this,this.ResizeHandler);
	}

	__proto.ChangeMap=function(meta){
		this._shakeControl.Clear();
		this._curSceneW=meta.sceneWidth;
		this._curSceneH=meta.sceneHeight;
		var d=meta.layerDataGround;
		this.layerMap.size(d.pixw,d.pixh);
		this.ResizeHandler();
	}

	__proto.ResizeHandler=function(){
		var sw=Laya.stage.width;
		var sh=Laya.stage.height;
		if (this._curSceneW > 0){
			var offx=0;
			var offy=0;
			if (sw > this._curSceneW){
				offx=(sw-this._curSceneW)/ 2;
			}
			if (sh > this._curSceneH){
				offy=(sh-this._curSceneH)/ 2;
			}
			this._layerMap.pos(offx,offy);
			this._layerBottom.pos(offx,offy);
			this._layerMiddle.pos(offx,offy);
			this._layerTop.pos(offx,offy);
		}
	}

	__proto.Clear=function(){
		this._shakeControl.Clear();
		this._curSceneW=0;
		this._curSceneH=0;
	}

	__proto.IsClear=function(){
		return this._curSceneH==0;
	}

	__proto.SetLookTarget=function(tar){
		this._lookTarget=tar;
	}

	__proto.CheckLookTarget=function(tar){
		if (this._lookTarget==tar){
			this.LookTarget();
		}
	}

	__proto.CalcSceneRect=function(gridX,gridY){
		var sr=new Rectangle();
		sr.width=ToolBase.GetWinWidth()/ this._curShowScale;
		sr.height=ToolBase.GetWinHeight()/ this._curShowScale;
		var pixx=ToolMap.GridXToPixX(gridX);
		var pixy=ToolMap.GridYToPixY(gridY);
		var tmpX=(pixx-(sr.width / 2))+this.pixOffPt.x;
		var tmpY=(pixy+(sr.height / 2))+this.pixOffPt.y;
		var cr=this._camraPosAreaRect;
		cr.x=0;
		cr.y=sr.height;
		cr.width=this._curSceneW-sr.width;
		cr.height=this._curSceneH-sr.height;
		if (tmpX > cr.right)
			tmpX=cr.right;
		if (tmpX < cr.x)
			tmpX=cr.x;
		if (tmpY > cr.bottom)
			tmpY=cr.bottom;
		if (tmpY < cr.y)
			tmpY=cr.y;
		sr.x=Math.floor(tmpX);
		sr.y=Math.floor(tmpY-sr.height);
		var cp=this._cameraRealPos;
		if (cp.x !=tmpX || cp.y !=-tmpY){
			cp.x=tmpX;
			cp.y=-tmpY;
		}
		return sr;
	}

	__proto.LookTarget=function(){
		if (this._lookTarget !=null && MapSceneLayer.StopMove==false){
			var sr=this._screenSceneRect;
			sr.width=ToolBase.GetWinWidth()/ this._curShowScale;
			sr.height=ToolBase.GetWinHeight()/ this._curShowScale;
			var tmpX=(this._lookTarget.x-(sr.width / 2))+this.pixOffPt.x;
			var tmpY=(this._lookTarget.y+(sr.height / 2))+this.pixOffPt.y;
			var cr=this._camraPosAreaRect;
			cr.x=0;
			cr.y=sr.height;
			cr.width=this._curSceneW-sr.width;
			cr.height=this._curSceneH-sr.height;
			if (tmpX > cr.right)
				tmpX=cr.right;
			if (tmpX < cr.x)
				tmpX=cr.x;
			if (tmpY > cr.bottom)
				tmpY=cr.bottom;
			if (tmpY < cr.y)
				tmpY=cr.y;
			sr.x=Math.floor(tmpX);
			sr.y=Math.floor(tmpY-sr.height);
			var cp=this._cameraRealPos;
			if (cp.x !=tmpX || cp.y !=-tmpY || this._shakeControl.GetShakeFlag()){
				cp.x=tmpX;
				cp.y=-tmpY;
				sr.x+=this._shakeControl.shakeValue.x;
				sr.y+=this._shakeControl.shakeValue.y;
				this._isSceneMoving=true;
			}
			else{
				this._isSceneMoving=false;
			}
			this.sceneRoot.scrollRect=sr;
		}
	}

	__proto.OnWinResize=function(w,h){}
	//_SceneRoot.OnWinResize(w,h);
	__proto.OnFrame=function(curtime){
		if (this.IsClear())
			return;
		this._shakeControl.OnFrame(curtime);
		if (this._tweenStartTime !=0){
			var tper=(curtime-this._tweenStartTime)/ this._tweenTime;
			if (tper < 0 || tper > 1){
				this._curShowScale=this._realSceneScale;
				this._tweenStartTime=0;
			}
			else{
				this._curShowScale=Ease.sineInOut(tper,this._tweenStartValue,(this._realSceneScale-this._tweenStartValue),1);
			}
			this.ApplyScale();
		}
		this.LookTarget();
	}

	__proto.ApplyScale=function(){
		this._sceneRoot.scaleX=this._curShowScale;
		this._sceneRoot.scaleY=this._curShowScale;
	}

	__proto.GetScreenSceneRect=function(){
		return this._screenSceneRect;
	}

	__proto.AddLayerMap=function(dis){
		this._layerMap.addChild(dis);
	}

	__proto.AddMiddle=function(dis){
		this._layerMiddle.addChild(dis);
	}

	__proto.AddTop=function(dis){
		this._layerTop.addChild(dis);
	}

	__proto.AddBottom=function(dis){
		this._layerBottom.addChild(dis);
	}

	__proto.RemoveMiddle=function(dis){
		this._layerMiddle.removeChild(dis);
	}

	__proto.RemoveTop=function(dis){
		this._layerTop.removeChild(dis);
	}

	__proto.RemoveBottom=function(dis){
		this._layerBottom.removeChild(dis);
	}

	__proto.RemoveLayerMap=function(dis){
		this._layerMap.removeChild(dis);
	}

	__proto.GetMiddle=function(){
		return this._layerMiddle;
	}

	__proto.SetSceneScale=function(value,tweenTime){
		if (value !=this._realSceneScale){
			this._tweenTime=tweenTime;
			if (tweenTime > 0){
				this._tweenStartTime=ToolBase.GetTimer();
				this._tweenStartValue=this._curShowScale;
				this._realSceneScale=value;
			}
			else{
				this._tweenStartTime=0;
				this._realSceneScale=this._curShowScale=value;
				this.ApplyScale();
			}
		}
		else{
			this._tweenStartTime=0;
		}
	}

	__getset(0,__proto,'layerMap',function(){
		return this._layerMap;
	});

	__getset(0,__proto,'layerBottom',function(){
		return this._layerBottom;
	});

	__getset(0,__proto,'layerMiddle',function(){
		return this._layerMiddle;
	});

	__getset(0,__proto,'layerTop',function(){
		return this._layerTop;
	});

	__getset(0,__proto,'sceneRoot',function(){
		return this._sceneRoot;
	});

	__getset(0,__proto,'curShowScale',function(){
		return this._curShowScale;
	});

	__getset(0,__proto,'shakeControl',function(){
		return this._shakeControl;
	});

	MapSceneLayer.StopMove=false;
	MapSceneLayer.LAYER_TYPE_BOTTOM=-1;
	MapSceneLayer.LAYER_TYPE_MIDDLE=0;
	MapSceneLayer.LAYER_TYPE_TOP=1;
	return MapSceneLayer;
})()


//class engine.pui.PUIMgr
var PUIMgr=(function(){
	function PUIMgr(){
		this.Show_Taost=null;
		this.Hide_Toast=null;
		this.maskHit=null;
		//不加这个，点击背景会穿透
		this.BG_MASK_URL="res/ui/sg_ui/city/bg2.jpg";
		this.tex=null;
		/**是否有图片背景**/
		this.isImgMask=false;
		/**是否有半透明背景**/
		this.isSimpleMask=false;
		/**半透明背景临时透明度**/
		this.tempAlpha=1;
		this._loading=[];
		this._sceenMask=new UIComponent();
		this._sceenMask2=new UIComponent();
		this._sceenMask.on("click",this,this.clickMask);
		this._sceenMask.name="sceenMask";
		this._sceenMask2.on("click",this,this.clickMask2);
		this._sceenMask2.name="sceenMask2";
		this.maskHit=new HitArea();
		this._sceenMask.hitArea=this.maskHit;
	}

	__class(PUIMgr,'engine.pui.PUIMgr');
	var __proto=PUIMgr.prototype;
	__proto.Init=function(showt,hidet){
		this.Show_Taost=showt;
		this.Hide_Toast=hidet;
		ClassUtils.regClass("Button",PButton);
		ClassUtils.regClass("CheckBox",PCheckBox);
		ClassUtils.regClass("Clip",PClip);
		ClassUtils.regClass("ComboBox",PComboBox);
		ClassUtils.regClass("FontClip",PFontClip);
		ClassUtils.regClass("HScrollBar",PHScrollBar);
		ClassUtils.regClass("HSlider",PHSlider);
		ClassUtils.regClass("Image",PImage);
		ClassUtils.regClass("Label",PLabel);
		ClassUtils.regClass("List",PList);
		ClassUtils.regClass("Panel",PPanel);
		ClassUtils.regClass("ProgressBar",PProgressBar);
		ClassUtils.regClass("Radio",PRadio);
		ClassUtils.regClass("RadioGroup",PRadioGroup);
		ClassUtils.regClass("ScrollBar",PScrollBar);
		ClassUtils.regClass("Slider",PSlider);
		ClassUtils.regClass("Tab",PTab);
		ClassUtils.regClass("TextInput",PTextInput);
		ClassUtils.regClass("Tree",PTree);
		ClassUtils.regClass("VScrollBar",PVScrollBar);
		ClassUtils.regClass("VSlider",PVSlider);
		ClassUtils.regClass("Box",PBox);
		ClassUtils.regClass("View",PView);
		ClassUtils.regClass("Dialog",PDialog);
		ClassUtils.regClass("PGrid",PGrid);
		ClassUtils.regClass("PGridGroup",PGridGroup);
		ClassUtils.regClass("laya.display.Text",PText);
		ClassUtils.regClass("Text",PText);
		ClassUtils.regClass("laya.html.dom.HTMLDivElement",PHTMLDivElement);
		ClassUtils.regShortClassName([PView,PDialog]);
		Laya.stage.on("resize",this,this._onResize);
	}

	__proto.open=function(url,param,closeOther,complete,name,showtaost){
		(closeOther===void 0)&& (closeOther=false);
		(showtaost===void 0)&& (showtaost=true);
		url=this.formatUrl(url);
		if (this._loading.indexOf(url)!=-1)
			return;
		var p=this.getShow(url,name);
		if (p !=null){
			try{
				p.onOpened(param);
				if (complete !=null)
					complete.runWith(p);
				}catch(e){
				console.error(e.stack);
				Laya.errorCallBack && Laya.errorCallBack(e.stack);
			}
			return;
		}
		if (this.Show_Taost && showtaost){
			this.Show_Taost.apply();
		}
		this._loading.push(url);
		Scene.open(url,closeOther,param,Handler.create(this,this.onSceneLoaded,[url,complete,name]));
	}

	__proto.opencls=function(cls,param,closeOther,complete,name,showtaost){
		(closeOther===void 0)&& (closeOther=false);
		(showtaost===void 0)&& (showtaost=true);
		var scene=new cls();
		if (scene !=null){
			try{
				scene.open(closeOther,param);
				}catch(e){
				console.error(e.stack);
				Laya.errorCallBack ? Laya.errorCallBack(e.stack):null;
			}
			if (name !=null)
				scene.name=name;
			if (complete !=null)
				complete.runWith(scene);
			this.checkMask();
		}
	}

	__proto.load=function(url,complete,name,showtaost){
		(showtaost===void 0)&& (showtaost=true);
		url=this.formatUrl(url);
		if (this._loading.indexOf(url)!=-1)
			return;
		if (this.Show_Taost && showtaost){
			this.Show_Taost.apply();
		}
		this._loading.push(url);
		Scene.load(url,Handler.create(this,this.onSceneLoaded,[url,complete,name]));
	}

	__proto.onSceneLoaded=function(url,complete,name,scene){
		var idx=this._loading.indexOf(url);
		if (idx !=-1){
			this._loading.splice(idx,1);
		}
		if (this._loading.length==0){
			if (this.Hide_Toast)
				this.Hide_Toast.apply();
		}
		if (scene !=null){
			if (name !=null)
				scene.name=name;
			try{
				if (complete !=null)
					complete.runWith(scene);
				}catch (e){
				console.error(e.stack);
				Laya.errorCallBack && Laya.errorCallBack(e.stack);
			}
			this.checkMask();
		}
	}

	__proto.close=function(url,name){
		(name===void 0)&& (name="");
		url=this.formatUrl(url);
		Scene.close(url,name);
	}

	__proto.closecls=function(cls){
		var list=Scene.unDestroyedScenes;
		var find=[];
		for (var i=0,n=list.length;i < n;i++){
			var scene=list[i];
			if (scene && scene.parent && Laya.__typeof(scene,cls)){
				find.push(scene);
			}
		}
		for (i=0;i < find.length;++i){
			find[i].close();
		}
	}

	/**
	*关闭某个层的所有面板
	*@param layer
	*/
	__proto.closeLayer=function(layer,isChangeMap,excides){
		(isChangeMap===void 0)&& (isChangeMap=false);
		var num=Scene.root.numChildren;
		var closes=[];
		for (var i=0;i < num;++i){
			var scene=Scene.root.getChildAt(i);
			if(isChangeMap && !scene.isCloseWhenChangeMap)
				continue ;
			if (excides && excides.indexOf(scene.url)!=-1)
				continue ;
			if ((scene instanceof laya.display.Scene )&& scene["layer"]==layer){
				closes.push(scene);
			}
		}
		for (i=0;i < closes.length;++i){
			if (closes[i].url==null){
				console.log("closeLayer url=null:"+closes[i].name);
			}
			closes[i].close();
		}
	}

	__proto.getShow=function(url,name){
		(name===void 0)&& (name="");
		if ((typeof url=='string')){
			return this.getShowByUrl(url,name);
			}else if (Laya.__isClass(url)){
			return this.getShowByClass(url,name);
		}
		return null;
	}

	__proto.getShowByUrl=function(url,name){
		(name===void 0)&& (name="");
		url=this.formatUrl(url);
		var root=Scene.root;
		var num=Scene.root.numChildren;
		for (var i=0;i < num;++i){
			if (((root._children[i])instanceof laya.display.Scene )){
				if (root._children[i].url==url && root._children[i].name==name)
					return root._children[i];
			}
		}
		return null;
	}

	__proto.getShowByClass=function(cls,name){
		(name===void 0)&& (name="");
		var root=Scene.root;
		var num=Scene.root.numChildren;
		for (var i=0;i < num;++i){
			if (((root._children[i])instanceof laya.display.Scene )){
				if (Laya.__typeof((root._children[i]),cls)&& root._children[i].name==name)
					return root._children[i];
			}
		}
		return null;
	}

	__proto.formatUrl=function(url){
		if (url.indexOf("res/pages/")!=0)
			url="res/pages/"+url;
		if (url.lastIndexOf(".json")==-1)
			url+=".json";
		return url;
	}

	__proto._onResize=function(){
		if (this._sceenMask.displayedInStage){
			this.drawMask();
		}
		if (this._sceenMask2.displayedInStage){
			this.drawMask2();
		}
	}

	__proto.checkMask=function(){
		Laya.timer.callLater(this,this._realCheckMask);
	}

	__proto._realCheckMask=function(){
		this.isImgMask=false;
		this.isSimpleMask=false;
		var num=Scene.root.numChildren;
		for (var i=num-1;i >-1;i--){
			var dialog=Scene.root.getChildAt(i);
			if (dialog){
				if(false){
					this.isImgMask=true;
					if (dialog.parent==this._sceenMask.parent){
						var idxmask=dialog.parent.getChildIndex(this._sceenMask);
						if (idxmask < i)
							dialog.parent.setChildIndex(this._sceenMask,i-1);
						else
						dialog.parent.setChildIndex(this._sceenMask,i);
					}
					else{
						dialog.parent.addChildAt(this._sceenMask,i);
					}
					this._sceenMask.tag=dialog;
					this._sceenMask.zOrder=dialog.zOrder;
					this.drawMask();
				}
				if(!this.isSimpleMask && (dialog["isModal"]==true || dialog["isSimpleModal"]==true)){
					this.isSimpleMask=true;
					if (dialog.parent==this._sceenMask2.parent){
						var idxmask2=dialog.parent.getChildIndex(this._sceenMask2);
						if (idxmask2 < i)
							dialog.parent.setChildIndex(this._sceenMask2,i-1);
						else
						dialog.parent.setChildIndex(this._sceenMask2,i);
					}
					else{
						dialog.parent.addChildAt(this._sceenMask2,i);
					}
					this._sceenMask2.tag=dialog;
					this._sceenMask2.zOrder=dialog.zOrder;
					this.drawMask2();
				}
			}
		}
		if(!this.isImgMask){
			this._sceenMask.tag=null;
			this._sceenMask.graphics.clear();
			this._sceenMask.removeSelf();
			this.maskHit.hit.clear();
		}
		if(!this.isSimpleMask){
			this._sceenMask2.tag=null;
			this._sceenMask2.graphics.clear();
			this._sceenMask2.removeSelf();
		}
	}

	__proto.drawMask=function(){
		if(this.tex==null){
			Laya.loader.load(this.BG_MASK_URL,Handler.create(this,this.texComplete),null,"image");
			return;
		}
		this._sceenMask.graphics.clear(true);
		this._sceenMask.graphics.drawTexture(this.tex,(Laya.stage.width-this.tex.width)/2,(Laya.stage.height-this.tex.height)/2,this.tex.width,this.tex.height);
		this.maskHit.hit.clear();
		this.maskHit.hit.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#cccccc");
	}

	__proto.drawMask2=function(){
		var width=this._sceenMask2.width=Laya.stage.width;
		var height=this._sceenMask2.height=Laya.stage.height;
		this._sceenMask2.graphics.clear(true);
		this._sceenMask2.graphics.drawRect(0,0,width,height,UIConfig.popupBgColor);
		this._sceenMask2.alpha=Math.min(UIConfig.popupBgAlpha,this.tempAlpha);
	}

	__proto.texComplete=function(){
		if(this.tex==null){
			this.tex=Laya.loader.getRes(this.BG_MASK_URL);
			this.checkMask();
		}
	}

	__proto.clickMask=function(){
		var s=this._sceenMask.tag;
		var h=s["modelMethod"];
		if (h !=null)
			h.call(s["modelCaller"]);
		else if (s["modalUnclose"] !=true)
		s.close();
	}

	__proto.clickMask2=function(){
		var s=this._sceenMask2.tag;
		var h=s["modelMethod"];
		if (h !=null)
			h.call(s["modelCaller"]);
		else if (s["modalUnclose"] !=true)
		s.close();
	}

	/**是否用宽屏布局**/
	__getset(0,__proto,'isWideScreen',function(){
		return false;
	});

	__static(PUIMgr,
	['Ins',function(){return this.Ins=new PUIMgr();}
	]);
	return PUIMgr;
})()


//class engine.scene.astar.Node
var Node$1=(function(){
	function Node(x,y){
		this.x=0;
		this.y=0;
		this.f=0;
		this.g=0;
		this.h=0;
		/**地图静态阻挡**/
		this._walkable=true;
		/**动态阻挡能否走**/
		this._dyWalkable=true;
		/**能否走的外部检查函数**/
		this._walkbaleFunc=null;
		this.parent=null;
		//public var costMultiplier:Number=1.0;
		this.version=1;
		this.links=null;
		/**
		*节点类型，0 阻挡 1 可到达 2 孤岛
		*/
		this.nodeType=2;
		/**埋葬深度 */
		this.buriedDepth=-1;
		/**距离 */
		this.distance=0;
		this.x=x;
		this.y=y;
	}

	__class(Node,'engine.scene.astar.Node',null,'Node$1');
	var __proto=Node.prototype;
	__proto.dispose=function(){
		if (this.links){
			var data;
			for(var $each_data in this.links){
				data=this.links[$each_data];
				data.dispose();
			}
		}
		this.parent=null;
		this.links=null;
		this._walkbaleFunc=null;
	}

	__proto.toString=function(){
		return "x:"+this.x+" y:"+this.y;
	}

	/**得到此节点到另一节点的网格距离 */
	__proto.getDistanceTo=function(targetNode){
		var disX=targetNode.x-this.x;
		var disY=targetNode.y-this.y;
		return Math.sqrt(disX *disX+disY *disY);
	}

	__getset(0,__proto,'walkable',function(){
		return this._walkable;
		},function(value){
		this._walkable=value;
		if (!value)
			this.nodeType=0;
	});

	__getset(0,__proto,'dyWalkable',function(){
		if (this._walkbaleFunc !=null && !this._walkbaleFunc.call(null,this.x,this.y))
			return false;
		return this._dyWalkable;
		},function(value){
		this._dyWalkable=value;
	});

	__getset(0,__proto,'walkbaleFunc',null,function(value){
		this._walkbaleFunc=value;
	});

	return Node;
})()


/**
*天气系统区域信息
*@author Administrator
*
*/
//class engine.scene.data.MWeatherAreaData
var MWeatherAreaData=(function(){
	function MWeatherAreaData(){
		this._sizew=0;
		this._sizeh=0;
		this._numw=0;
		this._numh=0;
		this._hollowflag=[];
		ObjectRecord.rcd(this);
	}

	__class(MWeatherAreaData,'engine.scene.data.MWeatherAreaData');
	var __proto=MWeatherAreaData.prototype;
	__proto.ReadData=function(bytes){
		this._sizew=bytes.readShort();
		this._sizeh=bytes.readShort();
		this._numw=bytes.readShort();
		this._numh=bytes.readShort();
		this._hollowflag=new Array(this._numw *this._numh);
		for (var m=0;m < this._numh;++m){
			for (var n=0;n < this._numw;++n){
				this._hollowflag[m *this._numw+n]=((bytes.readByte()& 0x2)==0);
			}
		}
	}

	__getset(0,__proto,'numh',function(){
		return this._numh;
	});

	__getset(0,__proto,'sizew',function(){
		return this._sizew;
	});

	__getset(0,__proto,'numw',function(){
		return this._numw;
	});

	__getset(0,__proto,'sizeh',function(){
		return this._sizeh;
	});

	__getset(0,__proto,'hollowflag',function(){
		return this._hollowflag;
	});

	return MWeatherAreaData;
})()


/**
*对象引用释放统计
*@author Administrator
*
*/
//class engine.classbase.ObjectRecord
var ObjectRecord=(function(){
	function ObjectRecord(){}
	__class(ObjectRecord,'engine.classbase.ObjectRecord');
	ObjectRecord.rcd=function(o){
		if (ObjectRecord.IS_OPEN){
		}
	}

	ObjectRecord.getCustomDicList=function(){
		return ObjectRecord._customDic;
	}

	ObjectRecord.getStateCopyStr=function(type,idbegin,idend,exKeys){
		var str="";
		var subDic=null;
		if (type==null || type==""){
			var dic=engine.classbase.ObjectRecord.getCustomDicList();
			for(var k in dic){
				subDic=(dic [k]);
				var count=0;
				for (var v in subDic){
					count++;
				}
				str+=k.toString()+"	"+count+"\r\n";
			}
		}
		else{
			if (idbegin < 0)
				idbegin=0;
			if (idend < 100)
				idend=100;
			if (idbegin >=idend){
				idbegin=0;
				idend=100;
			}
			subDic=engine.classbase.ObjectRecord.getCustomDicList()[type];
			if (subDic !=null){
				var curC=0;
				for (var ob in subDic){
					if (curC >=idbegin && curC <=idend){
						var items="";
						try{
							items=ob.toString()+"	";
						}
						catch(err){
							items="typeerror"+"	";
						}
						str+=items;
						try{
							if ((ob).hasOwnProperty("name"))
								items=ob.name+"	";
							else
							items="-"+"	";
						}
						catch(err){
							items="nameerror"+"	";
						}
						str+=items;
						try{
							if ((ob).hasOwnProperty("id"))
								items=ob.id+"	";
							else
							items="-"+"	";
						}
						catch(err){
							items="iderror"+"	";
						}
						str+=items;
						if (exKeys !=null && exKeys.length > 0){
							for (var uu=0;uu < exKeys.length;++uu){
								try{
									var kkk=exKeys[uu];
									if ((ob).hasOwnProperty(kkk))
										items=ob[kkk]+"	";
									else
									items="-"+"	";
								}
								catch(err){
									items="exkeyerror"+"	";
								}
								str+=items;
							}
						}
						str+="\r\n";
					}
					else if (curC > idend){
						break ;
					}
					curC++;
				}
			}
		}
	}

	ObjectRecord.IS_OPEN=false;
	ObjectRecord.gidgetter=1;
	__static(ObjectRecord,
	['_customDic',function(){return this._customDic=new Dictionary();}
	]);
	return ObjectRecord;
})()


/**
*
*
*@author Administrator
*/
//class engine.ui.utils.LayoutUtil
var LayoutUtil=(function(){
	function LayoutUtil(){}
	__class(LayoutUtil,'engine.ui.utils.LayoutUtil');
	LayoutUtil.GetLayoutPos=function(obj,layout,offx,offy){
		var stage=Laya.stage;
		var sw=stage.width;
		var sh=stage.height+stage._canvasTransform.ty;
		var ow=obj.width;
		var oh=obj.height;
		if (layout==9){
			offx+=(sw-ow)*0.5;
			offy+=(sh-oh)*0.5;
		}
		else if (layout==1){
			offx+=(sw-ow)*0.5;
			offy+=(stage.height-sh);
		}
		else if (layout==2){
			offx+=sw-ow;
			offy+=(stage.height-sh);
		}
		else if (layout==3){
			offx+=sw-ow;
			offy+=(sh-oh)*0.5;
		}
		else if (layout==4){
			offx+=sw-ow;
			offy+=sh-oh;
		}
		else if (layout==5){
			offx+=(sw-ow)*0.5;
			offy+=sh-oh;
		}
		else if (layout==6){
			offx+=0;
			offy+=sh-oh;
		}
		else if (layout==7){
			offx+=0;
			offy+=(sh-oh)*0.5;
		}
		else if (layout==8){
			offx+=0;
			offy+=(stage.height-sh);
		}
		return new Point$1(offx,offy);
	}

	LayoutUtil.LayoutTipPanel=function(target,comp){
		if (target==null)
			return;
		var stageW=Laya.stage.width;
		var stageH=Laya.stage.height;
		var o=target;
		var offx=0;
		var offy=0;
		var inv=20;
		if (comp !=null){
			var tw=o.width;
			var th=o.height;
			var cw=comp.width;
			var ch=comp.height;
			var pt=comp.localToGlobal(Point$1.TEMP.setTo(0,0));
			if (target.tiplayout==0){
				offx=pt.x+cw;
				offy=pt.y;
				if (offx > (stageW-tw)){
					offx=stageW-tw-inv;
				}
				if (offx < 0){
					offx=0;
				}
				if (offy > (stageH-th)){
					offy=stageH-th-inv;
				}
				if (offy < 0){
					offy=0;
				}
			}
			else if (target.tiplayout==2){
				if (pt.x+cw+tw+inv <=stageW)
					offx=pt.x+cw;
				else if (pt.x-tw-inv >=0)
				offx=pt.x-tw;
				else
				offx=(stageW-tw)/ 2;
				if (pt.y+ch+inv <=stageH)
					offy=pt.y;
				else if (pt.y-ch-inv >=0)
				offy=pt.y-ch;
				else
				offy=(stageH-th)/ 2;
			}
			else{
				offx=(stageW-o.width)/ 2;
				offy=(stageH-o.height)/ 2;
			}
		}
		else{
			offx=(stageW-o.width)/ 2;
			offy=(stageH-o.height)/ 2;
		}
		o.pos(offx,offy);
	}

	LayoutUtil.LAYOUT_NON=0;
	LayoutUtil.LAYOUT_U=1;
	LayoutUtil.LAYOUT_RU=2;
	LayoutUtil.LAYOUT_R=3;
	LayoutUtil.LAYOUT_RB=4;
	LayoutUtil.LAYOUT_B=5;
	LayoutUtil.LAYOUT_LB=6;
	LayoutUtil.LAYOUT_L=7;
	LayoutUtil.LAYOUT_LU=8;
	LayoutUtil.LAYOUT_C=9;
	return LayoutUtil;
})()


//class engine.animation.define.EnumActionType
var EnumActionType=(function(){
	function EnumActionType(){}
	__class(EnumActionType,'engine.animation.define.EnumActionType');
	EnumActionType.ALL=-2;
	EnumActionType.NONE=-1;
	EnumActionType.STAND=0;
	EnumActionType.RUN=1;
	EnumActionType.DEAD=4;
	EnumActionType.HURT=5;
	EnumActionType.ATTACK1=10;
	EnumActionType.RIDESTAND=20;
	EnumActionType.RIDERUN=21;
	EnumActionType.RIDEATTACK=22;
	EnumActionType.RIDEHURT=23;
	EnumActionType.UI_STAND=100;
	EnumActionType.UI_XIUXIAN=101;
	return EnumActionType;
})()


/**
*64位数据类型，相当于QWORD，主要用于和服务器对接
*@author ty
*/
//class engine.base.data.long extends engine.base.data.Int64
var long=(function(_super){
	function long(value){
		(value===void 0)&& (value=0);
		long.__super.call(this,value);
	}

	__class(long,'engine.base.data.long',_super);
	var __proto=long.prototype;
	__proto.Clone=function(){
		var ret=new long();
		ret._lValue=this._lValue;
		ret._hValue=this._hValue;
		ret._hexValue=this._hexValue;
		return ret;
	}

	// 下面都是消息解析用的，统一只处理高低位，hex先不处理
	__proto.setValue=function(l,h){
		this._hValue=h>>>0;
		this._lValue=l>>>0;
	}

	__proto.rightShiftFill0=function(v){
		if (v > 64){
			throw new Error("what the fuck:"+v);
		}
		if (v==64){
			this.setValue(0,0);
			return this;
		}
		if (v > 31){
			this.setValue(this._hValue,0)
			if (v==32){
				return this;
			}
			this._lValue=this._lValue >>> (v-32);
			return this;
		}
		if (v==0){
			return this;
		};
		var tmp=this._hValue << (32-v);
		this._hValue >>>=v;
		this._lValue >>>=v;
		this._lValue |=tmp;
		return this;
	}

	__proto.leftShift=function(shift){
		if (shift > 64){
			throw new Error("what the fuck:"+shift);
		}
		if (shift==64){
			this.setValue(0,0);
			return;
		}
		if (shift > 31){
			this.setValue(0,this._lValue);
			if (shift==32){
				return;
			}
			this._hValue=(this._hValue << (shift-32))& 4294967295;
			return;
		}
		if (shift==0){
			return;
		};
		var tmp=this._lValue >>> (32-shift);
		this._hValue=(this._hValue << shift)& 4294967295;
		this._lValue=(this._lValue << shift)& 4294967295;
		this._hValue |=tmp;
	}

	__proto.andInt=function(v){
		return this._lValue & v;
	}

	__proto.and=function(v){
		this._hValue &=v._hValue;
		this._lValue &=v._lValue;
		this._hValue >>>=0;
		this._lValue >>>=0;
		return this;
	}

	__proto.or=function(v){
		this._hValue |=v._hValue;
		this._lValue |=v._lValue;
		this._hValue >>>=0;
		this._lValue >>>=0;
	}

	// _hexValue=(ZERO+_hValue.toString(16)).substr(-8,8)+(ZERO+_lValue.toString(16)).substr(-8,8);
	__proto.makeHex=function(){
		this._hexValue=("0000000000000000"+this._hValue.toString(16)).substr(-8,8)+("0000000000000000"+this._lValue.toString(16)).substr(-8,8);
	}

	long.create=function(low){
		return long.create0(0,low);
	}

	long.create0=function(high,low){
		var v=new long();
		v._hValue=high >>> 0;
		v._lValue=low >>> 0;
		v._hexValue=("0000000000000000"+high.toString(16)).substr(-8,8)+("0000000000000000"+low.toString(16)).substr(-8,8);
		return v;
	}

	long.create1=function(l){
		return long.create0(l.hValue,l.lValue);
	}

	long.valueOf=function(num){
		return long.create0(Math.floor(num / 0x100000000),Math.floor(num % 0x100000000));
	}

	return long;
})(Int64)


/**
*安卓异形屏
*/
//class engine.notch.NotchAndriodFix extends engine.notch.NotchFixBase
var NotchAndriodFix=(function(_super){
	function NotchAndriodFix(){
		NotchAndriodFix.__super.call(this);
		console.log("NotchAndriodFix================create");
	}

	__class(NotchAndriodFix,'engine.notch.NotchAndriodFix',_super);
	var __proto=NotchAndriodFix.prototype;
	__proto.Init=function(obj){
		_super.prototype.Init.call(this,obj);
		this._isNotch=obj.notch;
		if (this._isNotch && obj.notchh && parseInt(obj.notchh)> 0){
			this._notchHeight=parseInt(obj.notchh);
		}
		if (this._isNotch && this._notchHeight > 0){
			var realsize=obj.screensize;
			if (realsize){
				var a=realsize.split("-");
				var realh=parseInt(a[1]);
				if (Browser.clientHeight+this._notchHeight <=realh){
					this._notchHeight=0;
					}else{
					console.log("NotchAndriodFix oldh:"+this._notchHeight);
					this._notchHeight=this._notchHeight / realh *Laya.stage.height | 0;
				}
				console.log("NotchAndriodFix screensize:"+realsize+" clientsize:"+Browser.clientWidth+"-"+Browser.clientHeight);
			}
		}
		console.log("NotchAndriodFix notch: "+this._isNotch+" w:"+this._notchWidth+" h:"+this._notchHeight);
	}

	return NotchAndriodFix;
})(NotchFixBase)


//class engine.pui.PUIBitmapFont extends laya.events.EventDispatcher
var PUIBitmapFont=(function(_super){
	function PUIBitmapFont(){
		this._loading={};
		this._loaded={};
		PUIBitmapFont.__super.call(this);
	}

	__class(PUIBitmapFont,'engine.pui.PUIBitmapFont',_super);
	var __proto=PUIBitmapFont.prototype;
	__proto.isBitmapFont=function(font){
		return PUIBitmapFont.BITMAP_FONT[font] !=null;
	}

	__proto.getFont=function(font){
		if (!this.isBitmapFont(font))
			return;
		var url=PUIBitmapFont.BITMAP_FONT[font];
		if (this._loading[url] !=null)
			return;
		if (this._loaded[url] !=null){
			this.event("complete",font);
			return;
		}
		this._loading[url]=font;
		var bitmapFont=new BitmapFont();
		bitmapFont.loadFont(url,Handler.create(this,this.loadcomplete,[bitmapFont,url,font]));
	}

	__proto.loadcomplete=function(bitmapFont,url,font){
		delete this._loading[url];
		if (bitmapFont._texture==null)
			return;
		this._loaded[url]=font;
		Text.registerBitmapFont(font,bitmapFont);
		this.event("complete",font);
	}

	PUIBitmapFont.Register=function(url,font){
		PUIBitmapFont.BITMAP_FONT[font]=url;
	}

	PUIBitmapFont.BITMAP_FONT={};
	__static(PUIBitmapFont,
	['Ins',function(){return this.Ins=new PUIBitmapFont();}
	]);
	return PUIBitmapFont;
})(EventDispatcher)


/**
*非标准读法（后端int分字节读取）
*/
//class engine.base.data.ByteArray extends laya.utils.Byte
var ByteArray=(function(_super){
	function ByteArray(data){
		ByteArray.__super.call(this,data);
		this.endian="bigEndian";
	}

	__class(ByteArray,'engine.base.data.ByteArray',_super);
	var __proto=ByteArray.prototype;
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
		var dataUnit=new ByteArray(dataLen);
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

	return ByteArray;
})(Byte)


/**
*苹果手机异形屏
*/
//class engine.notch.NotchIPhoneFix extends engine.notch.NotchFixBase
var NotchIPhoneFix=(function(_super){
	function NotchIPhoneFix(){
		NotchIPhoneFix.__super.call(this);
	}

	__class(NotchIPhoneFix,'engine.notch.NotchIPhoneFix',_super);
	var __proto=NotchIPhoneFix.prototype;
	__proto.Init=function(obj){
		_super.prototype.Init.call(this,obj);
		if(Browser.window.conch !=null){
			var devInfo=JSON.parse(Browser.window.conch.config.getDeviceInfo());
			if (devInfo !=null){
				var nameArr=[
				"iPhone10,3","iPhone10,6",
				"iPhone11,2",
				"iPhone11,4","iPhone11,6",
				"iPhone11,8",
				"iPhone12,1",
				"iPhone12,3",
				"iPhone12,5",];
				if(nameArr.indexOf(devInfo.devicename)!=-1){
					this._isNotch=true;
					this._notchWidth=50;
					this._notchHeight=60;
				}
			}
		}
	}

	return NotchIPhoneFix;
})(NotchFixBase)


//class engine.animation.MAnimationControlBase extends laya.display.Node
var MAnimationControlBase=(function(_super){
	function MAnimationControlBase(){
		/**
		*是否循环播放，调用play(...)方法时，会将此值设置为指定的参数值。
		*/
		this.loop=false;
		/**
		*<p>播放顺序类型：AnimationPlayerBase.WRAP_POSITIVE为正序播放，AnimationPlayerBase.WRAP_REVERSE为倒序播放，AnimationPlayerBase.WRAP_PINGPONG为pingpong播放(当按指定顺序播放完结尾后，如果继续播发，则会改变播放顺序)。</p>
		*<p>默认为正序播放。</p>
		*/
		this.wrapMode=0;
		/**@private */
		this._index=0;
		/**@private */
		this._count=0;
		/**@private */
		this._isPlaying=false;
		/**@private */
		this._labels=null;
		/**是否是逆序播放*/
		this._isReverse=false;
		/**@private */
		this._frameRateChanged=false;
		/**@private */
		this._controlNode=null;
		/**@private */
		this._actionName=null;
		MAnimationControlBase.__super.call(this);
		this._interval=Config.animationInterval;
	}

	__class(MAnimationControlBase,'engine.animation.MAnimationControlBase',_super);
	var __proto=MAnimationControlBase.prototype;
	/**
	*<p>开始播放动画。play(...)方法被设计为在创建实例后的任何时候都可以被调用，当相应的资源加载完毕、调用动画帧填充方法(set frames)或者将实例显示在舞台上时，会判断是否正在播放中，如果是，则进行播放。</p>
	*<p>配合wrapMode属性，可设置动画播放顺序类型。</p>
	*@param start （可选）指定动画播放开始的索引(int)或帧标签(String)。帧标签可以通过addLabel(...)和removeLabel(...)进行添加和删除。
	*@param loop （可选）是否循环播放。
	*@param name （可选）动画名称。
	*/
	__proto.play=function(start,loop,name){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		(name===void 0)&& (name="");
		this._isPlaying=true;
		this.index=((typeof start=='string'))? this._getFrameByLabel(start):start;
		this.loop=loop;
		this._actionName=name;
		this._isReverse=this.wrapMode==1;
		if (this.interval > 0){
			this.timerLoop(this.interval,this,this._frameLoop,null,true,true);
		}
	}

	/**@private */
	__proto._getFrameByLabel=function(label){
		var i=0;
		for (i=0;i < this._count;i++){
			if (this._labels[i] && (this._labels [i]).indexOf(label)>=0)return i;
		}
		return 0;
	}

	/**@private */
	__proto._frameLoop=function(){
		if (this._isReverse){
			this._index--;
			if (this._index < 0){
				if (this.loop){
					if (this.wrapMode==2){
						this._index=this._count > 0 ? 1 :0;
						this._isReverse=false;
						}else {
						this._index=this._count-1;
					}
					this.event("complete");
					}else {
					this._index=0;
					this.stop();
					this.event("complete");
					return;
				}
			}
			}else {
			this._index++;
			if (this._index >=this._count){
				if (this.loop){
					if (this.wrapMode==2){
						this._index=this._count-2 >=0 ? this._count-2 :0;
						this._isReverse=true;
						}else {
						this._index=0;
					}
					this.event("complete");
					}else {
					this._index--;
					this.stop();
					this.event("complete");
					return;
				}
			}
		}
		this.index=this._index;
	}

	/**@private */
	__proto._setControlNode=function(node){
		if (this._controlNode){
			this._controlNode.off("display",this,this._checkResumePlaying);
			this._controlNode.off("undisplay",this,this._checkResumePlaying);
		}
		this._controlNode=node;
		if (node && node !=this){
			node.on("display",this,this._checkResumePlaying);
			node.on("undisplay",this,this._checkResumePlaying);
		}
	}

	/**@private */
	__proto._setDisplay=function(value){
		_super.prototype._setDisplay.call(this,value);
		this._checkResumePlaying();
	}

	/**@private */
	__proto._checkResumePlaying=function(){
		if (this._isPlaying){
			if (this._controlNode.displayedInStage)this.play(this._index,this.loop,this._actionName);
			else this.clearTimer(this,this._frameLoop);
		}
	}

	/**
	*停止动画播放。
	*/
	__proto.stop=function(){
		this._isPlaying=false;
		this.clearTimer(this,this._frameLoop);
	}

	/**
	*增加一个帧标签到指定索引的帧上。当动画播放到此索引的帧时会派发Event.LABEL事件，派发事件是在完成当前帧画面更新之后。
	*@param label 帧标签名称
	*@param index 帧索引
	*/
	__proto.addLabel=function(label,index){
		if (!this._labels)this._labels={};
		if (!this._labels[index])this._labels[index]=[];
		this._labels[index].push(label);
	}

	/**
	*删除指定的帧标签。
	*@param label 帧标签名称。注意：如果为空，则删除所有帧标签！
	*/
	__proto.removeLabel=function(label){
		if (!label)this._labels=null;
		else if (this._labels){
			for (var name in this._labels){
				this._removeLabelFromLabelList(this._labels[name],label);
			}
		}
	}

	/**@private */
	__proto._removeLabelFromLabelList=function(list,label){
		if (!list)return;
		for (var i=list.length-1;i >=0;i--){
			if (list[i]==label){
				list.splice(i,1);
			}
		}
	}

	/**
	*将动画切换到指定帧并停在那里。
	*@param position 帧索引或帧标签
	*/
	__proto.gotoAndStop=function(position){
		this.index=((typeof position=='string'))? this._getFrameByLabel(position):position;
		this.stop();
	}

	/**
	*@private
	*显示到某帧
	*@param value 帧索引
	*/
	__proto._displayToIndex=function(value){}
	/**
	*停止动画播放，并清理对象属性。之后可存入对象池，方便对象复用。
	*/
	__proto.clear=function(){
		this.stop();
		this._labels=null;
	}

	/**
	*<p>动画播放的帧间隔时间(单位：毫秒)。默认值依赖于Config.animationInterval=50，通过Config.animationInterval可以修改默认帧间隔时间。</p>
	*<p>要想为某动画设置独立的帧间隔时间，可以使用set interval，注意：如果动画正在播放，设置后会重置帧循环定时器的起始时间为当前时间，也就是说，如果频繁设置interval，会导致动画帧更新的时间间隔会比预想的要慢，甚至不更新。</p>
	*/
	__getset(0,__proto,'interval',function(){
		return this._interval;
		},function(value){
		if (this._interval !=value){
			this._frameRateChanged=true;
			this._interval=value;
			if (this._isPlaying && value > 0){
				this.timerLoop(value,this,this._frameLoop,null,true,true);
			}
		}
	});

	/**
	*是否正在播放中。
	*/
	__getset(0,__proto,'isPlaying',function(){
		return this._isPlaying;
	});

	/**
	*动画当前帧的索引。
	*/
	__getset(0,__proto,'index',function(){
		return this._index;
		},function(value){
		this._index=value;
		this._displayToIndex(value);
		if (this._labels && this._labels[value]){
			var tArr=this._labels[value];
			for (var i=0,len=tArr.length;i < len;i++){
				this.event("label",tArr[i]);
			}
		}
	});

	/**
	*当前动画中帧的总数。
	*/
	__getset(0,__proto,'count',function(){
		return this._count;
	});

	MAnimationControlBase.WRAP_POSITIVE=0;
	MAnimationControlBase.WRAP_REVERSE=1;
	MAnimationControlBase.WRAP_PINGPONG=2;
	return MAnimationControlBase;
})(Node)


//class engine.pui.components.PAutoBitmap extends laya.ui.AutoBitmap
var PAutoBitmap=(function(_super){
	function PAutoBitmap(){
		PAutoBitmap.__super.call(this);
	}

	__class(PAutoBitmap,'engine.pui.components.PAutoBitmap',_super);
	return PAutoBitmap;
})(AutoBitmap)


//class engine.layaex.container.MSprite extends laya.display.Sprite
var MSprite=(function(_super){
	function MSprite(){
		this._decimalPixX=0;
		this._decimalPixY=0;
		MSprite.__super.call(this);
	}

	__class(MSprite,'engine.layaex.container.MSprite',_super);
	var __proto=MSprite.prototype;
	Laya.imps(__proto,{"engine.base.interfaceclass.IDestroyObject":true})
	/**
	*便于移植,请勿添加代码
	*
	*/
	__proto.Dispose=function(){
		this.graphics.clear();
		this.destroy();
	}

	__proto.SetPixPt=function(px,py){
		this.pixX=px;
		this.pixY=py;
	}

	__proto.GetPixPt=function(){
		return new Point$1(this.pixX,this.pixY);
	}

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Sprite,this,'y',Math.round(value));
	});

	__getset(0,__proto,'isDestroyed',function(){
		return this.destroyed;
	});

	__getset(0,__proto,'decimalPixY',function(){
		return this._decimalPixY;
	});

	__getset(0,__proto,'pixX',function(){
		return this.x;
		},function(value){
		this._decimalPixX=value;
		this.x=Math.floor(value);
	});

	__getset(0,__proto,'pixY',function(){
		return this.y;
		},function(value){
		this._decimalPixY=value;
		this.y=Math.floor(value);
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Sprite,this,'x',Math.round(value));
	});

	__getset(0,__proto,'decimalPixX',function(){
		return this._decimalPixX;
	});

	/**
	*场景中格子坐标
	*/
	__getset(0,__proto,'gridX',function(){
		return (this.x / ToolMap.GRID_WIDTH | 0);
	});

	/**
	*场景中格子坐标
	*/
	__getset(0,__proto,'gridY',function(){
		return (this.y / ToolMap.GRID_HEIGHT | 0);
	});

	return MSprite;
})(Sprite)


/**
*简单按钮
*/
//class engine.ui.debug.tinyui.TinyButton extends laya.display.Sprite
var TinyButton=(function(_super){
	function TinyButton(w,h,txt,caller,clickFunc){
		this.bindTarget=null;
		this._text=null;
		this._uiW=0;
		this._uiH=0;
		this._caller=null;
		this._clickFunc=null;
		TinyButton.__super.call(this);
		this._caller=caller;
		this._clickFunc=clickFunc;
		this._text=new Text;
		this._text.width=w;
		this._text.height=18;
		this._text.bold=true;
		this._text.align="center";
		this._text.color="#000000";
		this.addChild(this._text);
		this.UpdateShow(w,h,"#BEBEBE");
		this.on("mouseover",this,this.MouseOverHandler);
		this.on("mouseout",this,this.MouseOutHandler);
		this.on("mousedown",this,this.MouseDownHandler);
		this.on("mouseup",this,this.MouseUpHandler);
		this.on("click",this,this.ClickHandle);
		if (txt !=null)
			this.text=txt;
	}

	__class(TinyButton,'engine.ui.debug.tinyui.TinyButton',_super);
	var __proto=TinyButton.prototype;
	__proto.ClickHandle=function(event){
		if (this._clickFunc !=null){
			this._clickFunc.call(this._caller,this);
		}
	}

	/**
	*更新显示
	*@param w
	*@param h
	*/
	__proto.UpdateShow=function(w,h,color){
		this._uiW=w;
		this._uiH=h;
		this.width=w;
		this.height=h;
		this.graphics.clear();
		this.graphics.drawRect(0,0,w,h,color);
		this._text.x=(w-this._text.width)*0.5;
		this._text.y=(h-this._text.height)*0.5;
	}

	__proto.MouseOverHandler=function(e){
		this.UpdateShow(this._uiW,this._uiH,"#D3D3D3");
	}

	__proto.MouseOutHandler=function(e){
		this.UpdateShow(this._uiW,this._uiH,"#BEBEBE");
	}

	__proto.MouseDownHandler=function(e){
		this.UpdateShow(this._uiW,this._uiH,"#708090");
		e.stopPropagation();
	}

	__proto.MouseUpHandler=function(e){
		this.UpdateShow(this._uiW,this._uiH,"#D3D3D3");
	}

	__getset(0,__proto,'text',null,function(value){
		this._text.text=value;
	});

	__getset(0,__proto,'caller',function(){
		return this._caller;
		},function(value){
		this.caller=value;
	});

	__getset(0,__proto,'clickFunc',function(){
		return this._clickFunc;
		},function(value){
		this._clickFunc=value;
	});

	return TinyButton;
})(Sprite)


//class engine.ui.debug.tinyui.TinyPanel extends laya.display.Sprite
var TinyPanel=(function(_super){
	function TinyPanel(w,h){
		this._bakcW=0;
		this._bakcH=0;
		this.needShowMainPanelOnHide=false;
		TinyPanel.__super.call(this);
		this.UpdateBack(w,h);
	}

	__class(TinyPanel,'engine.ui.debug.tinyui.TinyPanel',_super);
	var __proto=TinyPanel.prototype;
	// 更新背景色
	__proto.UpdateBack=function(w,h){
		this._bakcW=w;
		this._bakcH=h;
		this.width=w;
		this.height=h;
		this.graphics.clear();
		this.graphics.drawRect(0,0,w,h,"#696969");
	}

	__proto.Show=function(){
		if (this.parent==null)
			Laya.stage.addChild(this);
		this.x=(this.stage.width-this.width)*0.5;
		this.y=(this.stage.height-this.height)*0.5;
		this.on("mousedown",this,this.MouseDownHandler);
		this.on("mouseup",this,this.MouseUpHandler);
	}

	__proto.Hide=function(){
		if (this.parent)
			this.parent.removeChild(this);
		this.stopDrag();
		this.off("mousedown",this,this.MouseDownHandler);
		this.off("mouseup",this,this.MouseUpHandler);
	}

	//=============================================================================================
	__proto.MouseDownHandler=function(e){
		this.startDrag();
		if (this.parent)
			this.parent.addChild(this);
		e.stopPropagation();
	}

	__proto.MouseUpHandler=function(e){
		this.stopDrag();
	}

	__getset(0,__proto,'bakcW',function(){
		return this._bakcW;
	});

	__getset(0,__proto,'bakcH',function(){
		return this._bakcH;
	});

	TinyPanel.ShowHideType=function(t,type){
		(type===void 0)&& (type=0);
		var pan=TinyPanel._panels[t];
		if (pan==null){
			pan=(new t());
			if (pan==null)
				return null;
			TinyPanel._panels[t]=pan;
		}
		if ((type==0 && pan.parent==null)|| type==1){
			if (pan.parent==null)
				pan.Show();
		}
		else if ((type==0 && pan.parent !=null)|| type==2){
			if (pan.parent !=null)
				pan.Hide();
		}
		return pan;
	}

	__static(TinyPanel,
	['_panels',function(){return this._panels=new Object();}
	]);
	return TinyPanel;
})(Sprite)


/**
*骨骼动画封装类
*/
//class engine.templet.MSkeletonAnimation extends laya.display.Sprite
var MSkeletonAnimation=(function(_super){
	function MSkeletonAnimation(){
		this._templet=null;
		this._restype=0;
		this._filename=null;
		this._loadingkey=null;
		this._skeleton=null;
		MSkeletonAnimation.__super.call(this);
		MTempletManager.Ins.RefAni(this);
	}

	__class(MSkeletonAnimation,'engine.templet.MSkeletonAnimation',_super);
	var __proto=MSkeletonAnimation.prototype;
	__proto.destroy=function(d){
		(d===void 0)&& (d=true);
		MTempletManager.Ins.FreeAni(this);
		this.clear();
		_super.prototype.destroy.call(this);
	}

	__proto.clear=function(){
		if (this._templet){
			this._templet.off("complete",this,this.OnComplete);
			this._templet.off("error",this,this.OnError);
			this._templet=null;
		}
		if (this._skeleton !=null){
			this._skeleton.destroy();
			this._skeleton=null;
		}
		this._loadingkey=null;
	}

	__proto.SetData=function(restype,filename){
		if (this._restype==restype && this._filename==filename)
			return;
		this.clear();
		this._loadingkey=MTempletManager.Ins.ToKeyName(restype,filename);
		this._restype=restype;
		this._filename=filename;
		this._templet=MTempletManager.Ins.GetTemplet(restype,filename);
		if (this._templet.isParserComplete){
			this.OnComplete();
			}else{
			this._templet.on("complete",this,this.OnComplete);
			this._templet.on("error",this,this.OnError);
		}
	}

	__proto.OnError=function(){
		if (this.destroyed)return;
		this.event("error");
	}

	__proto.OnComplete=function(){
		if (this.destroyed)return;
		if (this._skeleton !=null){
			this._skeleton.destroy();
			this._skeleton=null;
		}
		this._skeleton=this._templet.buildArmature();
		this._skeleton.on("label",this,this.OnLabelEvent);
		this._skeleton.on("stopped",this,this.OnStopped);
		this.addChild(this._skeleton);
		this.event("complete");
	}

	__proto.OnStopped=function(){
		if (this.destroyed)return;
		this.event("stopped");
	}

	__proto.OnLabelEvent=function(e){
		if (this.destroyed)return;
		this.event("label",e);
	}

	__getset(0,__proto,'loadingkey',function(){
		return this._loadingkey;
	});

	__getset(0,__proto,'skeleton',function(){
		return this._skeleton;
	});

	__getset(0,__proto,'currAniIndex',function(){
		return this._skeleton !=null ? this._skeleton._currAniIndex :-1;
	});

	__getset(0,__proto,'isParseComplete',function(){
		return this._templet !=null && this._templet.isParserComplete;
	});

	return MSkeletonAnimation;
})(Sprite)


/**
*输入文本
*/
//class engine.ui.debug.tinyui.TinyLabel extends laya.display.Sprite
var TinyLabel=(function(_super){
	function TinyLabel(){
		this._desText=null;
		this._editText=null;
		TinyLabel.__super.call(this);
		var desW=150;
		this._desText=new Text();
		this._desText.x=-desW;
		this._desText.y=2;
		this._desText.width=desW;
		this._desText.height=18;
		this._desText.color="#f8f8ff";
		this._desText.bold=true;
		this._desText.align="right";
		this._desText.mouseEnabled=false;
		this._desText.stroke=1;
		this.addChild(this._desText);
		this._editText=new Input();
		this._editText.x=0;
		this._editText.y=0;
		this._editText.width=100;
		this._editText.height=18;
		this._editText.bold=true;
		this._editText.align="center";
		this._editText.borderColor="#708090";
		this._editText.bgColor="#f8f8ff";
		this._editText.restrict="0-9";
		this._editText.stroke=1;
		this._editText.on("mousedown",this,this.mouseDownHandler);
		this.addChild(this._editText);
	}

	__class(TinyLabel,'engine.ui.debug.tinyui.TinyLabel',_super);
	var __proto=TinyLabel.prototype;
	__proto.mouseDownHandler=function(e){
		e.stopPropagation();
	}

	__getset(0,__proto,'des',null,function(value){
		this._desText.text=value;
	});

	__getset(0,__proto,'text',function(){
		return this._editText.text;
		},function(value){
		this._editText.text=value;
	});

	__getset(0,__proto,'editText',function(){
		return this._editText;
	});

	return TinyLabel;
})(Sprite)


/**
*序列帧播放控制器
*/
//class engine.animation.MAnimationControl extends engine.animation.MAnimationControlBase
var MAnimationControl=(function(_super){
	function MAnimationControl(owner,endCaller,endMethod,frameCaller,frameMethod){
		this._owner=null;
		// 渲染方向
		this._rnDdir=0;
		// 真实方向
		this._direction=0;
		// 资源类型
		this._resType=-1;
		// 资源类型扩展目录
		this._resExtra=null;
		// 当前造型ID
		this._resId=-1;
		// 造型是否改变
		this._resChanged=false;
		this._defaultResPack=null;
		this._defaultSheet=null;
		this._resPack=null;
		this._sheet=null;
		// 播放速度
		this._playSpeed=1;
		// 反向播放是否动作完就取消掉
		this._isReverseAutoOver=false;
		// 是否挂件
		this._isPart=false;
		// 挂件是否主动切动作
		this._isActiveAction=false;
		// 挂件是否主动播放
		this._isActiveMode=false;
		// 挂件排序列表
		this._partSortList=null;
		// 动画播放结束
		this._end_caller=null;
		this._end_method=null;
		// 动画帧改变
		this._frame_caller=null;
		this._frame_medthod=null;
		// 动作改变方式回调函数
		this._actionChangeHandler=null;
		// 动作改变映射表
		this._actionChangeMap=null;
		this._virdir=null;
		MAnimationControl.__super.call(this);
		this._actType=EnumActionType.NONE;
		this._owner=owner;
		this._direction=0;
		this._end_caller=endCaller;
		this._end_method=endMethod;
		this._frame_caller=frameCaller;
		this._frame_medthod=frameMethod;
		this._virdir=MDirection.VIRDIR_5;
	}

	__class(MAnimationControl,'engine.animation.MAnimationControl',_super);
	var __proto=MAnimationControl.prototype;
	Laya.imps(__proto,{"engine.base.interfaceclass.IDestroyObject":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if (this.destroyed)
			return;
		this.clear();
		this._virdir=null;
		this._resId=-1;
		this._resType=-1;
		this._partSortList=null;
		this._end_caller=this._end_method=null;
		this._frame_caller=this._frame_medthod=null;
		this._actionChangeHandler && this._actionChangeHandler.recover();
		this._actionChangeHandler=null;
		this._actionChangeMap=null;
		laya.display.Node.prototype.destroy.call(this,destroyChild);
	}

	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){
		this._resType=resType;
		this._resId=resId;
		this._resExtra=resExtra;
		this._actionChangeMap=actionChangeMap;
		this._actionChangeHandler && this._actionChangeHandler.recover();
		this._actionChangeHandler=actionChangeHandler;
		this._partSortList=sortList;
		this._resChanged=true;
		this.on("complete",this,this.OnPlayEnd);
	}

	/**
	*执行指定动作
	*@param actType 动作ID
	*@param dir 方向
	*
	*/
	__proto.DoAction=function(actType,dir){
		if (this._resId==-1)
			return;
		if (this._actionChangeMap !=null){
			if (this._actionChangeMap[actType] !=null){
				actType=this._actionChangeMap[actType];
			}
			else if (this._actionChangeMap[EnumActionType.ALL] !=null){
				actType=this._actionChangeMap[EnumActionType.ALL];
			}
		}
		else if (this._actionChangeHandler !=null){
			actType=this._actionChangeHandler.run();
			if (this._actionChangeHandler.once){
				this._actionChangeHandler=null;
				ToolBase.LogThrow("ActionChangeHandler错误：回调handler是once  restype:"+this._resType+" resid:"+this._resId);
			}
		}
		if (actType==EnumActionType.NONE){
			this._actType=actType;
			this._owner.ClearAnimationPlay();
			ToolBase.LogError("MAnimation2D actionType == null restype:"+this._resType+" resid:"+this._resId);
			return;
		}
		this._owner.SetDirection(dir);
		if (this._actType !=actType || this._resChanged){
			this._resChanged=false;
			this._actType=actType;
			this._owner.LoadBin();
		}
		else if (this._actType==actType){
			this.OnResLoadToPlay();
		}
	}

	__proto.SetDefaultResPack=function(respack){
		if (this.destroyed)
			return;
		this._defaultResPack=respack;
		if (!respack)
			return;
		this.UpdateVirDir(respack);
		this._defaultSheet=respack.dirs[this._rnDdir];
		this._count=this._defaultSheet ? this._defaultSheet.framenum :0;
	}

	/**
	*资源描述文件下载完成回调
	*/
	__proto.SetResPack=function(respack){
		if (this.destroyed)
			return;
		this._resPack=respack;
		if (!respack)
			return;
		this.UpdateVirDir(respack);
		this._sheet=respack.dirs[this._rnDdir];
		if (this._sheet)this._count=this._sheet.framenum;
	}

	__proto.UpdateVirDir=function(pack){
		if (!pack)return;
		if (pack.maxdir==1)
			this._virdir=MDirection.VIRDIR_1;
		else
		this._virdir=MDirection.VIRDIR_5;
		this._rnDdir=this._virdir[this._direction];
		if (this._rnDdir > pack.maxdir-1){
			this._rnDdir=0;
		}
	}

	__proto.OnSheetReady=function(){
		this.UpdateInterval(0);
		this.OnResLoadToPlay();
	}

	__proto.GetRenderFrames=function(){
		var s=this._sheet;
		var d=this._defaultSheet;
		var ret;
		if (s)ret=s.GetFrames(this._owner);
		if (!ret && d)
			ret=d.GetFrames(this._owner);
		return ret;
	}

	/**
	*资源加载完成后播放
	*/
	__proto.OnResLoadToPlay=function(){
		var s=this.rendersheet;
		if (!s)
			return;
		if (!this._isPart || this._isActiveMode){
			if (this.wrapMode==1)
				this.play(this._count-1,this._owner.isloop);
			else
			this.play(0,this._owner.isloop);
		}
		else
		this.index=this._index;
	}

	__proto.SetDirection=function(v){
		if (!MDirection.IsValid(v))
			v=0;
		this._direction=v;
		var r=this._resPack;
		var d=this._defaultResPack;
		var respack=r || d;
		if (respack){
			this._rnDdir=this._virdir[v];
			if (this._rnDdir > respack.maxdir-1)
				this._rnDdir=0;
			if (r){
				this._sheet=respack.dirs[this._rnDdir];
				}else if (d){
				this._defaultSheet=d.dirs[this._rnDdir];
			}
		}
	}

	__proto.SetPlaySpeed=function(v){
		if (v < 0.01 || isNaN(v))
			v=0.01;
		this._playSpeed=v;
		this.UpdateInterval(0);
	}

	/**
	*播放动画。
	*@param start 开始播放的动画索引或label。
	*@param loop 是否循环。
	*@param name 如果name为空(可选)，则播放当前动画，如果不为空，则播放全局缓存动画（如果有）
	*/
	__proto.play=function(start,loop,name){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		(name===void 0)&& (name="");
		if (this._isPart && !this._isActiveMode)
			return;
		this._isPlaying=true;
		this.index=((typeof start=='string'))? this._getFrameByLabel(start):start;
		this.loop=loop;
		this._actionName=name;
		this._isReverse=this.wrapMode==1;
		var s=this.rendersheet;
		if (s && this.interval > 0){
			this.timerLoop(this.interval,this,this._frameLoop,null,true);
		}
	}

	/**
	*动作播放完成是触发
	*/
	__proto.OnPlayEnd=function(){
		if (this._isReverseAutoOver){
			if (this.wrapMode==1)
				this.wrapMode=0;
			this._isReverseAutoOver=false;
		}
		if (this._end_method !=null && !this.loop){
			this._end_method.call(this._end_caller);
		}
	}

	/**
	*动作帧改变触发
	*@param idx
	*
	*/
	__proto.OnFrameChange=function(idx){
		if (this._frame_medthod !=null){
			this._frame_medthod.call(this._frame_caller,idx);
		}
	}

	__proto._frameLoop=function(){
		if (this._owner.isNeedDraw){
			_super.prototype._frameLoop.call(this);
		}
	}

	__proto._displayToIndex=function(value){
		var s=this.rendersheet;
		if (!s)
			return;
		this._owner.RenderFrame(value);
		this.UpdateInterval(value);
		this.OnFrameChange(value);
	}

	__proto.UpdateInterval=function(value){
		var s=this.rendersheet;
		if (!s)
			return;
		var il=s.intervals;
		if (il !=null && il.length > 0){
			if (this._playSpeed==1){
				this.interval=il[value];
				}else{
				this.interval=il[value] / this._playSpeed;
			}
		}
	}

	/**清理。方便对象复用。*/
	__proto.clear=function(){
		this._resPack=null;
		this._defaultResPack=null;
		this._sheet=null;
		this._defaultSheet=null;
		this._resChanged=false;
		this._playSpeed=1;
		this._isReverseAutoOver=false;
		this._isPart=false;
		this._isActiveAction=false;
		this._isActiveMode=false;
		this._partSortList=null;
		this._resType=-1;
		this._resId=-1;
		this._actType=EnumActionType.NONE;
		_super.prototype.clear.call(this);
	}

	__proto.GetActType=function(){
		return this._actType;
	}

	__proto.GetId=function(){
		return this._resId;
	}

	__proto.GetType=function(){
		return this._resType;
	}

	__proto.GetExtra=function(){
		return this._resExtra;
	}

	__proto.SetFrameCaller=function(caller,method){
		this._frame_caller=caller;
		this._frame_medthod=method;
	}

	__proto.SetEndCaller=function(caller,method){
		this._end_caller=caller;
		this._end_method=method;
	}

	__getset(0,__proto,'direction',function(){
		return this._direction;
	});

	__getset(0,__proto,'isPart',function(){
		return this._isPart;
		},function(value){
		this._isPart=value;
	});

	__getset(0,__proto,'resPack',function(){
		return this._resPack;
	});

	__getset(0,__proto,'isDestroyed',function(){
		return this.destroyed;
	});

	__getset(0,__proto,'isActiveAction',function(){
		return this._isActiveAction;
		},function(value){
		this._isActiveAction=value;
	});

	__getset(0,__proto,'curSortValue',function(){
		if (this._partSortList==null || this._direction==MDirection.NONE)
			return 0;
		return this._partSortList[this._direction];
	});

	__getset(0,__proto,'defaultResPack',function(){
		return this._defaultResPack;
	});

	__getset(0,__proto,'sheet',function(){
		return this._sheet;
	});

	__getset(0,__proto,'rendersheet',function(){
		var s=this._sheet;
		var d=this._defaultSheet;
		return (s && s.isReady)? s :((d && d.isReady)? d :null);
	});

	__getset(0,__proto,'resscale',function(){
		var r=this.rendersheet;
		return r ? r.scale :1;
	});

	__getset(0,__proto,'rnDdir',function(){
		return this._rnDdir;
	});

	__getset(0,__proto,'allTime',function(){
		return this._resPack ? this._resPack.alltime :0;
	});

	__getset(0,__proto,'isReverseAutoOver',function(){
		return this._isReverseAutoOver;
		},function(value){
		this._isReverseAutoOver=value;
	});

	__getset(0,__proto,'partSortList',function(){
		return this._partSortList;
	});

	__getset(0,__proto,'isActiveMode',function(){
		return this._isActiveMode;
		},function(value){
		this._isActiveMode=value;
	});

	return MAnimationControl;
})(MAnimationControlBase)


//class engine.pui.components.PScene extends laya.display.Scene
var PScene=(function(_super){
	function PScene(){
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		this._funsDic=null;
		PScene.__super.call(this);
		this.autoDestroyAtClosed=true;
	}

	__class(PScene,'engine.pui.components.PScene',_super);
	var __proto=PScene.prototype;
	__proto.createChildren=function(){
		this.on("onViewCreated",this,this.onViewCreated);
		_super.prototype.createChildren.call(this);
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._callOpenParam=false;
		this.onClose();
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.onViewCreated=function(){
		this._isViewCreated=true;
		if (this.displayedInStage && this._callOpen){
			this.onOpened(this._callOpenParam);
			this._callOpenParam=null;
			this._callOpen=false;
		}
	}

	__proto.onOpened=function(param){
		if (!this._isViewCreated){
			this._callOpenParam=param;
			this._callOpen=true;
		}
		else{
			this.zOrder=this.layer;
			this.onOpen(param);
			_super.prototype.onOpened.call(this,param);
		}
	}

	__proto.onClosed=function(type){
		this.onClose();
		_super.prototype.onClosed.call(this,type);
	}

	__proto.onOpen=function(param){
		this.AddEvent();
	}

	__proto.AddEvent=function(){}
	__proto.onClose=function(){
		this.RemoveEvent();
	}

	__proto.RemoveEvent=function(){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Scene,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Scene,this,'y',Math.round(value));
	});

	__getset(0,__proto,'layer',function(){
		return 17;
	});

	return PScene;
})(Scene)


//class engine.pui.components.PText extends laya.display.Text
var PText=(function(_super){
	function PText(){
		this._initText=null;
		PText.__super.call(this);
	}

	__class(PText,'engine.pui.components.PText',_super);
	var __proto=PText.prototype;
	__proto.destroy=function(d){
		(d===void 0)&& (d=true);
		PUIBitmapFont.Ins.off("complete",this,this.OnBitmapLoaded);
		_super.prototype.destroy.call(this,d);
	}

	__proto.OnBitmapLoaded=function(font){
		if (this.destroyed || this._font !=font)return;
		PUIBitmapFont.Ins.off("complete",this,this.OnBitmapLoaded);
		Laya.superSet(Text,this,'font',font);
	}

	__getset(0,__proto,'text',_super.prototype._$get_text,function(value){
		if (this._initText==null){
			this._initText=value;
		}
		Laya.superSet(Text,this,'text',value);
	});

	__getset(0,__proto,'font',_super.prototype._$get_font,function(value){
		if (PUIBitmapFont.Ins.isBitmapFont(value)){
			PUIBitmapFont.Ins.on("complete",this,this.OnBitmapLoaded);
			PUIBitmapFont.Ins.getFont(value);
		}
		Laya.superSet(Text,this,'font',value);
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Text,this,'x',Math.round(value));
	});

	__getset(0,__proto,'initText',function(){
		return this._initText;
		},function(value){
		this._initText=value;
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Text,this,'y',Math.round(value));
	});

	return PText;
})(Text)


/**
*报错弹窗
*/
//class engine.ui.debug.TinyMessageBox extends engine.ui.debug.tinyui.TinyPanel
var TinyMessageBox=(function(_super){
	function TinyMessageBox(){
		this._btnClose=null;
		this._txt=null;
		TinyMessageBox.__super.call(this,500,200);
		this._txt=new Label();
		this._txt.fontSize=16;
		this._txt.color="#ffffff";
		this._txt.width=this.width-20;
		this._txt.x=10;
		this._txt.mouseEnabled=false;
		this._txt.wordWrap=true;
		this.addChild(this._txt);
		this._btnClose=new Button();
		this._btnClose.label="关闭";
		this._btnClose.width=this._btnClose.height=40;
		this._btnClose.graphics.save();
		this._btnClose.graphics.alpha(0.5);
		this._btnClose.graphics.drawRect(0,0,40,40,"#000000","#ffffff");
		this._btnClose.graphics.restore();
		this._btnClose.x=this.width-this._btnClose.width;
		this._btnClose.y=0;
		this._btnClose.on("click",this,this.CloseHandler);
		this.addChild(this._btnClose);
	}

	__class(TinyMessageBox,'engine.ui.debug.TinyMessageBox',_super);
	var __proto=TinyMessageBox.prototype;
	__proto.SetData=function(txt){
		this._txt.text+=txt;
		this._txt.text+="\n";
	}

	__proto.CloseHandler=function(e){
		this._txt.text="";
		TinyPanel.ShowHideType(TinyMessageBox,2);
	}

	TinyMessageBox.Show=function(txt){
		var p=TinyPanel.ShowHideType(TinyMessageBox,1);
		p.SetData(txt);
	}

	return TinyMessageBox;
})(TinyPanel)


/**
*2d动画组类
*带挂件
*/
//class engine.animation.MAnimation2DGroup extends engine.layaex.container.MSprite
var MAnimation2DGroup=(function(_super){
	function MAnimation2DGroup(owner,endCaller,endMethod,frameCaller,frameMethod){
		this._ani=null;
		this._partAnimList=null;
		this._owner=null;
		// 动画播放结束
		this._end_caller=null;
		this._end_method=null;
		// 动画帧改变
		this._frame_caller=null;
		this._frame_medthod=null;
		MAnimation2DGroup.__super.call(this);
		this._end_caller=endCaller;
		this._end_method=endMethod;
		this._frame_caller=frameCaller;
		this._frame_medthod=frameMethod;
		this._owner=owner;
		this._ani=new MAnimation2D(owner,this,this.OnPlayEnd,this,this.OnFrameChange);
		this.addChild(this._ani);
	}

	__class(MAnimation2DGroup,'engine.animation.MAnimation2DGroup',_super);
	var __proto=MAnimation2DGroup.prototype;
	Laya.imps(__proto,{"engine.animation.interfaces.IAnimationGroup":true})
	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap){
		this._ani.SetData(resType,resId,resExtra,sortList,actionChangeMap,null);
	}

	/**
	*执行指定动作
	*@param actType 动作ID
	*@param dir 方向
	*
	*/
	__proto.DoAction=function(actType,dir,loop){
		(loop===void 0)&& (loop=false);
		this._ani.DoAction(actType,dir,loop);
		if (this._partAnimList !=null){
			var part;
			for(var $each_part in this._partAnimList){
				part=this._partAnimList[$each_part];
				if (!part.isActiveAction)
					part.DoAction(actType,dir,loop);
				else
				part.SetDirection(dir);
			}
			this.CheckPartSort();
		}
	}

	/**
	*添加一个绑定动画挂件 （resType和resId必须唯一）
	*@param resType 资源类型
	*@param resId 资源id
	*@param resExtra 资源扩展目录
	*@param sortList 方向的排序等级
	*@param actionChangeMap 动作转换表，设置的动作会被转换成另外的动作
	*@param actionChangeHandler 动作转换函数，有些特殊表现简单映射实现不了的就传函数实现
	*
	*/
	__proto.BindPart=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){
		if (this._partAnimList==null)
			this._partAnimList=[];
		var anim=new MAnimation2D(this._owner);
		anim.SetData(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler);
		anim.isPart=true;
		anim.Stop();
		this._partAnimList.push(anim);
		this.addChild(anim);
		anim.DoAction(this._ani.GetActType(),this.direction,this._ani.isloop);
		anim.GotoFrameIdx(this._ani.curDirFrameIdx);
		this.CheckPartSort();
		return anim;
	}

	/**
	*移除绑定动画
	*@param resType 资源类型
	*@param resId 资源id
	*@param resExtra 资源扩展目录
	*/
	__proto.RemovePart=function(resType,resId,resExtra){
		if (this._partAnimList==null)
			return;
		for (var i=this._partAnimList.length-1;i >=0;--i){
			var anim=this._partAnimList[i];
			if (anim.GetType()==resType && anim.GetId()==resId && anim.GetExtra()==resExtra){
				this._partAnimList.splice(i,1);
				this.removeChild(anim);
				anim.destroy();
				break ;
			}
		}
	}

	__proto.RemoveAllPart=function(){
		if (this._partAnimList==null)
			return;
		for (var i=0;i < this._partAnimList.length;++i){
			var anim=this._partAnimList[i];
			anim.destroy();
		}
		this._partAnimList=null;
	}

	/**
	*挂件排序
	*/
	__proto.CheckPartSort=function(){
		var parts=this._partAnimList;
		if (parts==null)
			return;
		parts.sort(this.SortPartFunc);
		var idx=0;
		var isInsertMain=false;
		var len=parts.length;
		for (var i=0;i < len;++i){
			if (parts[i].parent !=this)
				continue ;
			if (parts[i].curSortValue >=0 && !isInsertMain){
				this.setChildIndex(this._ani,idx++);
				isInsertMain=true;
			}
			this.setChildIndex(parts[i],idx++);
		}
	}

	__proto.SortPartFunc=function(a,b){
		var s1=a.curSortValue;
		var s2=b.curSortValue;
		if (s1 < s2)
			return-1;
		else if (s1 > s2)
		return 1;
		return 0;
	}

	__proto.SetPlaySpeed=function(v){
		this._ani.SetPlaySpeed(v);
	}

	__proto.SetDirection=function(v){
		this._ani.SetDirection(v);
		var parts=this._partAnimList;
		if (parts !=null){
			for (var i=0;i < parts.length;++i){
				parts[i].SetDirection(v);
			}
			this.CheckPartSort();
		}
	}

	__proto.SetAlpha=function(value){
		Laya.superSet(MSprite,this,'alpha',value);
	}

	/**
	*播放动画。
	*@param start 开始播放的动画索引
	*@param loop 是否循环。
	*/
	__proto.Play=function(start,loop){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		this._ani.Play(start,loop);
	}

	/**
	*停止播放。
	*/
	__proto.Stop=function(){
		this._ani.Stop();
	}

	/**
	*暂停
	*/
	__proto.Pause=function(pause){
		if (pause){
			if (!this._ani.isPlaying)
				return;
			this._ani.Stop();
		}
		else{
			if (this._ani.isPlaying)
				return;
			this._ani.Play(this._ani.stopAtIdx,this._ani.isloop);
		}
	}

	/**
	*切换到某帧并停止
	*@param idx
	*/
	__proto.GotoAndStop=function(idx){
		this._ani.GotoAndStop(idx);
	}

	/**
	*设置到某一帧
	*/
	__proto.GotoFrameIdx=function(idx){
		this._ani.GotoFrameIdx(idx);
	}

	/**当前播放索引。*/
	__proto.GetFrameIdx=function(){
		return this._ani.GetFrameIdx();
	}

	/**
	*动作播放完成是触发
	*/
	__proto.OnPlayEnd=function(){
		if (this._end_method !=null && !this._ani.loop){
			this._end_method.call(this._end_caller);
		}
	}

	/**
	*动作帧改变触发
	*@param idx
	*
	*/
	__proto.OnFrameChange=function(idx){
		var parts=this._partAnimList;
		if (parts !=null){
			var part;
			for(var $each_part in parts){
				part=parts[$each_part];
				if (!part.isActiveAction){
					part.GotoFrameIdx(idx);
				}
			}
		}
		if (this._frame_medthod !=null){
			this._frame_medthod.call(this._frame_caller,idx);
		}
	}

	__proto.clear=function(){
		if (this._ani)
			this._ani.clear();
		var parts=this._partAnimList;
		if (parts !=null){
			var anim;
			for(var $each_anim in parts){
				anim=parts[$each_anim];
				anim.clear();
			}
		}
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if (this._ani !=null){
			this._ani.destroy(destroyChild);
			this._ani=null;
		}
		this._end_caller=this._end_method=null;
		this._frame_caller=this._frame_medthod=null;
		var parts=this._partAnimList;
		if (parts !=null){
			var anim;
			for(var $each_anim in parts){
				anim=parts[$each_anim];
				anim.clear();
			}
			this._partAnimList=null;
		}
		this._owner=null;
		laya.display.Sprite.prototype.destroy.call(this,destroyChild);
	}

	__getset(0,__proto,'direction',function(){
		return this._ani.direction;
	});

	__getset(0,__proto,'alpha',_super.prototype._$get_alpha,function(value){
		this.SetAlpha(value);
	});

	__getset(0,__proto,'partAnimList',function(){
		return this._partAnimList;
	});

	__getset(0,__proto,'ani',function(){
		return this._ani;
	});

	/**
	*是否在播放中
	*/
	__getset(0,__proto,'isPlaying',function(){
		return this._ani.isPlaying;
	});

	__getset(0,__proto,'curAction',function(){
		return this._ani.GetActType();
	});

	return MAnimation2DGroup;
})(MSprite)


/**
*场景对象基类
*@author Administrator
*/
//class engine.scene.obj.SceneObjectBase extends engine.layaex.container.MSprite
var SceneObjectBase=(function(_super){
	function SceneObjectBase(){
		this.map=null;
		this._gid=0;
		this._pooltype=0;
		this._diffTime=0;
		this._lastTime=0;
		SceneObjectBase.__super.call(this);
	}

	__class(SceneObjectBase,'engine.scene.obj.SceneObjectBase',_super);
	var __proto=SceneObjectBase.prototype;
	Laya.imps(__proto,{"engine.scene.obj.ISceneObjectBase":true})
	__proto.SetRawData=function(bean){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		laya.display.Sprite.prototype.destroy.call(this,destroyChild);
		this._gid=0;
	}

	__proto.CheckLocalBounding=function(wx,wy){
		return false;
	}

	__proto.CalcZOrder=function(){
		this.SetLocalZOrder(this.map.CalcSceneZOrder(this.pixX,this.pixY));
	}

	__proto.SetLocalZOrder=function(value){
		this.zOrder=value;
	}

	__proto.OnFrame=function(curtime){
		if (this._lastTime==0)
			this._lastTime=curtime;
		this._diffTime=curtime-this._lastTime;
		this._lastTime=curtime;
	}

	/**
	*获得当前的格子坐标
	*@return
	*/
	__proto.GetGridPt=function(){
		var gridPt=ToolMap.PixPt2GridPt(this.pixX,this.pixY);
		return gridPt;
	}

	__proto.SetGridPt=function(gx,gy){
		var pt=ToolMap.GridPt2PixPt(gx,gy,true);
		this.SetPixPt(pt.x,pt.y);
		this.CalcZOrder();
	}

	__getset(0,__proto,'isNonMouseHit',function(){
		return true;
	});

	__getset(0,__proto,'pooltype',function(){
		return this._pooltype;
		},function(value){
		this._pooltype=value;
	});

	__getset(0,__proto,'gid',function(){
		return this._gid;
	});

	__getset(0,__proto,'objectType',function(){
		return 0;
	});

	return SceneObjectBase;
})(MSprite)


/**
*图块拼接 针对LayaBox的简化版本
*@author yq
*
*/
//class engine.scene.chunk.MapChunkShow extends engine.layaex.container.MSprite
var MapChunkShow=(function(_super){
	function MapChunkShow(){
		this._map=null;
		this._meta=null;
		// 场景实际大小
		this._sceneWidth=0;
		this._sceneHeight=0;
		this._resId=0;
		// 加载控制锁，用于地图坐标还未知的情况下不进行加载地图
		this._loadChunkLock=true;
		// 地表图块
		this._chunkControl=null;
		this._thumbnail=null;
		MapChunkShow.__super.call(this);
		this._chunkControl=new PTileImageControl();
		this.cacheAs="normal";
	}

	__class(MapChunkShow,'engine.scene.chunk.MapChunkShow',_super);
	var __proto=MapChunkShow.prototype;
	Laya.imps(__proto,{"engine.base.tile.IMTitleContainer":true})
	__proto.Init=function(map){
		this._map=map;
		this._chunkControl.Init(this);
	}

	/**
	*清除数据块
	*
	*/
	__proto.Clear=function(){
		this._resId=0;
		this.graphics.clear();
		if (this._thumbnail !=null){
			this._thumbnail=null;
		}
		this._chunkControl.Clear();
		this._loadChunkLock=true;
	}

	__proto.reConnect=function(){
		this._chunkControl.clearFailIDXs();
	}

	__proto.GetChunkUrls=function(sceneRect){
		return this._chunkControl.GetChunkUrls(sceneRect);
	}

	__proto.LoadChunk=function(cx,cy){
		this._chunkControl.LoadChunk(cx,cy);
	}

	__proto.OnFrame=function(curtime){
		var screenRect=this._map.mapLayer.GetScreenSceneRect();
		if (this._loadChunkLock)
			return;
		this._chunkControl.UpdateChunk(screenRect);
	}

	/**
	*切换地图
	*@param meta
	*
	*/
	__proto.ChangeMap=function(meta,$thumbnail){
		this._meta=meta;
		this._sceneWidth=meta.sceneWidth;
		this._sceneHeight=meta.sceneHeight;
		this._resId=meta.mapresid;
		var ext=".jpg";
		if (WebGLContext._compressedTextureEtc1 || WebGLContext._compressedTexturePvrtc){
			if(!Browser.onWeiXin)
				ext=Browser.onAndroid ? ".ktx" :".pvr";
		};
		var url="res/map/"+this._resId+"/chunks/ml_{0}_{1}"+ext;
		var chunkversion=ResourceVersionEx.getChunkVersion("res/map/"+this._resId+"/"+"thumbnail.jpg");
		if (chunkversion)
			url=chunkversion+"/"+url;
		var d=meta.layerDataGround;
		this._chunkControl.SetData(url,d.pixw,d.pixh,d.sizew,d.sizeh,d.pixw / this._sceneWidth,d.pixh / this._sceneHeight);
		this.width=d.pixw;
		this.height=d.pixh;
		this._thumbnail=$thumbnail;
		if (this._thumbnail !=null)
			this.graphics.drawTexture(this._thumbnail,0,0,this.width,this.height);
	}

	__proto.SetLoadChunkLock=function(v){
		this._loadChunkLock=v;
	}

	__getset(0,__proto,'thumbnail',function(){
		return this._thumbnail;
	});

	return MapChunkShow;
})(MSprite)


//class engine.pui.components.PHTMLDivElement extends laya.html.dom.HTMLDivElement
var PHTMLDivElement=(function(_super){
	function PHTMLDivElement(){
		PHTMLDivElement.__super.call(this);
	}

	__class(PHTMLDivElement,'engine.pui.components.PHTMLDivElement',_super);
	var __proto=PHTMLDivElement.prototype;
	__proto._afterInited=function(){
		this._element.width=this.width;
		this._element.height=this.height;
	}

	__getset(0,__proto,'innerHTML',_super.prototype._$get_innerHTML,function(value){
		if (this.initHtmlText==null)this.initHtmlText=value;
		Laya.superSet(HTMLDivElement,this,'innerHTML',value);
	});

	return PHTMLDivElement;
})(HTMLDivElement)


/**
*格子组组件
*
*@author Administrator
*/
//class engine.pui.componentext.PGridGroup extends laya.ui.UIComponent
var PGridGroup=(function(_super){
	function PGridGroup(){
		// 排列模式
		this._layoutModel=0;
		// 单行最大数量
		this._lineMaxNum=-1;
		// 水平间距
		this._marginh=2;
		// 垂直间距
		this._marginv=2;
		// 格子背景资源
		this._skin=null;
		// 格子宽高
		this._gridW=0;
		this._gridH=0;
		PGridGroup.__super.call(this);
		this._grids=[];
	}

	__class(PGridGroup,'engine.pui.componentext.PGridGroup',_super);
	var __proto=PGridGroup.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.Clean();
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.AddItem=function(data,param){
		if (data==null)
			return null;
		var grid=new PGrid();
		if (this._gridW !=0)
			grid.width=this._gridW;
		if (this._gridH !=0)
			grid.height=this._gridH;
		grid.skin=this._skin;
		grid.on("resize",this,this.LayoutGroup);
		data.SetForGrid(grid,param);
		this.addChild(grid);
		this._grids.push(grid);
		this.LayoutGroup();
		return grid;
	}

	__proto.LayoutGroup=function(){
		this.callLater(this._LayoutGroup);
	}

	__proto._LayoutGroup=function(){
		if (this.destroyed)return;
		var i=0;
		var tmpLen=0;
		if (this._layoutModel==0){
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=Math.floor(i % this._lineMaxNum)*(this._grids[i].width+this._marginh);
					this._grids[i].y=Math.floor(i / this._lineMaxNum)*(this._grids[i].height+this._marginv);
				}
				else{
					this._grids[i].x=i *(this._grids[i].width+this._marginh);
					this._grids[i].y=0;
				}
			}
		}
		else if (this._layoutModel==1){
			tmpLen=Math.min(this._grids.length,this._lineMaxNum);
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=-(tmpLen *(this.width+this._marginh)/ 2)+Math.floor(i % this._lineMaxNum)*(this._grids[i].width+this._marginh)+this.width / 2+(this._marginh / 2);
					this._grids[i].y=Math.floor(i / this._lineMaxNum)*(this._grids[i].height+this._marginv);
				}
				else{
					this._grids[i].x=-(this._grids.length *(this.width+this._marginh)/ 2)+i *(this._grids[i].width+this._marginh)+this.width / 2;
					this._grids[i].y=0;
				}
			}
		}
		else if (this._layoutModel==2){
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=-Math.floor(i % this._lineMaxNum)*(this._grids[i].width+this._marginh);
					this._grids[i].y=Math.floor(i / this._lineMaxNum)*(this._grids[i].height+this._marginv);
				}
				else{
					this._grids[i].x=-i *(this._grids[i].width+this._marginh);
					this._grids[i].y=0;
				}
			}
		}
		else if (this._layoutModel==3){
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=Math.floor(i / this._lineMaxNum)*(this._grids[i].width+this._marginh);
					this._grids[i].y=Math.floor(i % this._lineMaxNum)*(this._grids[i].height+this._marginv);
				}
				else{
					this._grids[i].y=i *(this._grids[i].height+this._marginv);
					this._grids[i].x=0;
				}
			}
		}
		else if (this._layoutModel==4){
			tmpLen=Math.min(this._grids.length,this._lineMaxNum);
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=Math.floor(i / this._lineMaxNum)*(this._grids[i].width+this._marginh);
					this._grids[i].y=-(tmpLen *(this.height+this._marginv)/ 2)+Math.floor(i % this._lineMaxNum)*(this._grids[i].height+this._marginv)+this.height / 2+(this._marginv / 2);
				}
				else{
					this._grids[i].x=0;
					this._grids[i].y=-(this._grids.length *(this.height+this._marginv)/ 2)+i *(this._grids[i].height+this._marginv)+this.height / 2;
				}
			}
		}
		else if (this._layoutModel==5){
			for (i=0;i < this._grids.length;i++){
				if (this._lineMaxNum > 0){
					this._grids[i].x=Math.floor(i / this._lineMaxNum)*(this._grids[i].width+this._marginh);
					this._grids[i].y=-Math.floor(i % this._lineMaxNum)*(this._grids[i].height+this._marginv);
				}
				else{
					this._grids[i].x=0;
					this._grids[i].y=-i *(this._grids[i].height+this._marginv);
				}
			}
		}
	}

	__proto.Clean=function(){
		var grid;
		for(var $each_grid in this._grids){
			grid=this._grids[$each_grid];
			grid.destroy();
		}
		this._grids.length=0;
	}

	__proto.Clone=function(){
		var ret=new PGridGroup();
		ret.size(this.width,this.height);
		ret.layoutModel=this.layoutModel;
		ret.marginh=this.marginh;
		ret.marginv=this.marginv;
		ret.skin=this.skin;
		return ret;
	}

	/**
	*设置布局模式
	*@param 0 水平上居左 1 水平上居中 2水平上居右 3垂直 4垂直 5垂直
	*/
	__getset(0,__proto,'layoutModel',function(){
		return this._layoutModel;
		},function(value){
		if (value < 0 || value > 5)
			return;
		this._layoutModel=value;
		this.LayoutGroup();
	});

	__getset(0,__proto,'lineMaxNum',function(){
		return this._lineMaxNum;
		},function(value){
		if (value <=0)
			value=-1;
		this._lineMaxNum=value;
		this.LayoutGroup();
	});

	__getset(0,__proto,'marginh',function(){
		return this._marginh;
		},function(value){
		this._marginh=value;
		this.LayoutGroup();
	});

	__getset(0,__proto,'width',function(){
		if (this._layoutModel==0){
			if (this._grids.length > 0){
				if (this._lineMaxNum > 0 && this._grids.length > this._lineMaxNum){
					return this._grids[this._lineMaxNum-1].x+this._grids[this._lineMaxNum-1].width;
				}
				else{
					return this._grids[this._grids.length-1].x+this._grids[this._grids.length-1].width;
				}
			}
		}
		return this._gridW;
	},_super.prototype._$set_width);

	__getset(0,__proto,'marginv',function(){
		return this._marginv;
		},function(value){
		this._marginv=value;
		this.LayoutGroup();
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		this._skin=value;
	});

	__getset(0,__proto,'height',function(){
		if (this._layoutModel==0){
			if (this._grids.length > 0){
				if (this._lineMaxNum > 0 && this._grids.length > this._lineMaxNum){
					return (Math.floor(this._grids.length / this._lineMaxNum)+(((this._grids.length % this._lineMaxNum)!=0)? 1 :0))*(this._grids[0].height+this._marginv);
				}
				else{
					return this._grids[0].height;
				}
			}
		}
		return this._gridH;
	},_super.prototype._$set_height);

	__getset(0,__proto,'gridW',null,function(value){
		this._gridW=value;
	});

	__getset(0,__proto,'gridH',null,function(value){
		this._gridH=value;
	});

	__getset(0,__proto,'grids',function(){
		return this._grids;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(UIComponent,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(UIComponent,this,'y',Math.round(value));
	});

	return PGridGroup;
})(UIComponent)


/**
*2d单一动画类
*/
//class engine.animation.MAnimation2D extends engine.layaex.container.MSprite
var MAnimation2D=(function(_super){
	function MAnimation2D(owner,endCaller,endMethod,frameCaller,frameMethod,group){
		this._controler=null;
		/**没有资源的时候，是否使用默认资源代替**/
		this._useDefault=true;
		/**特殊绘图==>平铺**/
		this._repeatW=0;
		this._repeatH=0;
		/**当前真正要加载的资源key，避免混了**/
		this._loadingkey=null;
		this._stopAtIdx=-1;
		this._isloop=false;
		this._owner=null;
		this._group=null;
		this._isClear=false;
		this.isSingleDir=false;
		/**是否应该显示**/
		this._isShow=true;
		this._blend=null;
		this._resscale=1;
		// 渲染帧列表
		this._renderFrames=null;
		MAnimation2D.__super.call(this);
		this._controler=new MAnimationControl(this,endCaller,endMethod,frameCaller,frameMethod);
		this._owner=owner;
		this._group=group;
		MSheetAnimationGC.Ins.RefAni(this);
	}

	__class(MAnimation2D,'engine.animation.MAnimation2D',_super);
	var __proto=MAnimation2D.prototype;
	Laya.imps(__proto,{"engine.res.IAnimationRes":true,"engine.animation.interfaces.IAnimation":true})
	__proto.clear=function(){
		this._resscale=1;
		this._renderFrames=null;
		this._isClear=true;
		this._loadingkey=null;
		this._isloop=false;
		this._useDefault=true;
		this._repeatH=this._repeatW=0;
		this._stopAtIdx=-1;
		this._controler.clear();
		this.graphics.clear();
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if (this.destroyed)
			return;
		MSheetAnimationGC.Ins.FreeAni(this);
		this.clear();
		this._controler.destroy(destroyChild);
		this._controler=null;
		this._owner=null;
		laya.display.Sprite.prototype.destroy.call(this,destroyChild);
	}

	__proto.scale=function(sx,sy,speedMode){
		(speedMode===void 0)&& (speedMode=false);
		throw new Error("外部禁止设置缩放");
	}

	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){
		this._isClear=false;
		this._controler.SetData(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler);
	}

	/**
	*执行指定动作
	*@param actType 动作ID
	*@param dir 方向
	*/
	__proto.DoAction=function(actType,dir,loop){
		(loop===void 0)&& (loop=false);
		this._isloop=loop;
		this._controler.DoAction(actType,dir);
		this._stopAtIdx=-1;
	}

	/**
	*开始下载资源描述文件
	*/
	__proto.LoadBin=function(){
		var type=this.GetType();
		var id=this.GetId();
		var act=this.GetActType();
		this._loadingkey=MAnimationUtil.ToKeyName(type,id,act);
		var pack=MAnimationUtil.IsUnload(type,id,act)? null :MSheetAnimationMgr.Ins.GetResPack(this,this._loadingkey);
		this.OnBinLoaded(this._loadingkey,pack);
		this.event("loaded");
	}

	/**
	*资源描述文件下载完成回调
	*/
	__proto.OnBinLoaded=function(key,res){
		if (this.destroyed || this._loadingkey !=key)
			return;
		var pack=res;
		if (pack==null){
			if (this.useDefault && !this.isPart){
				pack=MSheetAnimationMgr.Ins.GetDefaultAnimation(this._controler.GetActType());
				this._controler.SetDefaultResPack(pack);
			}
			}else{
			this._controler.SetResPack(pack);
		}
		if (pack){
			this._blend=(pack.blend==1)? "add" :null;
			this.UpdateRenderFrames();
			}else{
			this.ClearAnimationPlay();
		}
	}

	/**
	*资源描述文件下载错误回调
	*/
	__proto.OnBinFailed=function(key){}
	/**
	*方向资源下载完成
	*@param sheetDir
	*/
	__proto.OnTextureLoaded=function(sheetDir){
		if (this._controler.sheet !=sheetDir)
			return;
		this.UpdateRenderFrames();
	}

	/**
	*方向资源下载错误
	*@param sheetDir
	*/
	__proto.OnTextureFailed=function(sheetDir){}
	// trace("OnTextureFailed key="+_loadingkey+" dir:"+sheetDir.dir);
	__proto.SetDirection=function(v){
		this._controler.SetDirection(v);
		this.UpdateRenderFrames();
		this.checkShowState();
	}

	__proto.ClearAnimationPlay=function(){
		this._renderFrames=null;
		this.graphics.clear();
		this._controler.stop();
	}

	__proto.UpdateRenderFrames=function(){
		this._renderFrames=this._controler.GetRenderFrames();
		if (this._renderFrames){
			this._resscale=this._controler.resscale;
			this._controler.OnSheetReady();
			if (this._stopAtIdx >=0){
				this.GotoAndStop(this._stopAtIdx);
			}
			this.UpdateScale();
			}else{
			this.ClearAnimationPlay();
		}
	}

	/**检测显示状态，坐骑头部只有一个方向**/
	__proto.checkShowState=function(){
		if(this.isSingleDir && [0,1,2,6,7].indexOf(this.direction)!=-1)
			this.visible=false;
		else
		this.visible=this.isShow;
	}

	__proto.UpdateScale=function(){
		var scalex=this._resscale;
		if (this.direction >=5){
			scalex=-this._resscale;
		}
		Laya.superSet(MSprite,this,'scaleX',scalex);
		Laya.superSet(MSprite,this,'scaleY',this._resscale);
	}

	__proto.SetPlaySpeed=function(v){
		this._controler.SetPlaySpeed(v);
	}

	__proto.RenderFrame=function(value){
		var g=this.graphics;
		g.clear();
		var frame=this.GetFrame(value);
		if (frame){
			if (frame.texs==null){
				var notice="MAnimation2D RenderFrame被释放还在渲染： key="
				+MAnimationUtil.ToKeyName(this.GetType(),this.GetId(),this.GetActType(),this.GetExtra())+" renderkey:"+this._controler.resPack.url+" destroyed:"+this.destroyed+" clear:"+this._isClear+" parent:"+ClassTool.getClassName(this.parent.parent);
				console.log(notice);
				return;
			};
			var isCanRepeat=this.isRepeat && frame.texs.length==1;
			if (isCanRepeat){
				var tex=frame.texs[0];
				var w=this._repeatW !=0 ? this._repeatW :tex.width;
				var h=this._repeatH !=0 ? this._repeatH :tex.height;
				g.fillTexture(tex,frame.offxs[0],frame.offys[0],w,h);
			}
			else{
				var texs=frame.texs;
				var len=texs.length;
				for (var i=0;i < len;++i){
					g.drawTexture(texs[i],frame.offxs[i],frame.offys[i],0,0,null,1,null,this._blend);
				}
			}
		}
	}

	__proto.GetFrame=function(value){
		var sheets=this._renderFrames;
		if (sheets){
			if (this._controler.isPart)
				value=value % sheets.length;
			return sheets[value];
		}
		return null;
	}

	/**
	*改变绘制方式为平铺
	*@w 平铺宽度
	*@h 平铺高度
	*/
	__proto.SetRepeatSize=function(w,h){
		this._repeatW=w;
		this._repeatH=h;
	}

	/**
	*播放动画。
	*@param start 开始播放的动画索引。
	*@param loop 是否循环。
	*/
	__proto.Play=function(start,loop){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		if (start < 0)
			start=0;
		this._controler.play(start,loop);
		this._stopAtIdx=-1;
	}

	__proto.Stop=function(){
		this._controler.stop();
		this._stopAtIdx=this._controler.index;
	}

	/**
	*直接跳到某帧并停止
	*/
	__proto.GotoAndStop=function(idx){
		this._controler.gotoAndStop(idx);
		this._stopAtIdx=idx;
	}

	/**
	*直接调到某一帧继续播放
	*/
	__proto.GotoFrameIdx=function(idx){
		this._controler.index=idx;
		this._stopAtIdx=-1;
	}

	/**
	*当前播放的帧索引
	*/
	__proto.GetFrameIdx=function(){
		return this._controler.index;
	}

	__proto.CloneCurFrame=function(ret){
		if (ret==null)
			ret=new MSprite();
		ret.scaleX=this.scaleX;
		ret.scaleY=this.scaleY;
		var frame=this.GetFrame(this._controler.index);
		if (frame !=null){
			for (var i=0;i < frame.texs.length;++i){
				ret.graphics.drawTexture(frame.texs[i],frame.offxs[i],frame.offys[i]);
			}
		}
		return ret;
	}

	__proto.SetFrameCaller=function(caller,method){
		this._controler.SetFrameCaller(caller,method);
	}

	__proto.SetEndCaller=function(caller,method){
		this._controler.SetEndCaller(caller,method);
	}

	//===========================================================================================
	__proto.GetActType=function(){
		return this._controler.GetActType();
	}

	__proto.GetId=function(){
		return this._controler.GetId();
	}

	__proto.GetType=function(){
		return this._controler.GetType();
	}

	__proto.GetExtra=function(){
		return this._controler.GetExtra();
	}

	__getset(0,__proto,'scaleX',_super.prototype._$get_scaleX,function(value){
		throw new Error("外部禁止设置缩放");
	});

	__getset(0,__proto,'isNeedDraw',function(){
		return this._style !=null && this._style.alpha > 0.01;
	});

	__getset(0,__proto,'loop',function(){
		return this._controler.loop;
	});

	__getset(0,__proto,'isActiveMode',function(){
		return this._controler.isActiveMode;
		},function(value){
		this._controler.isActiveMode=value;
	});

	__getset(0,__proto,'scaleY',_super.prototype._$get_scaleY,function(value){
		throw new Error("外部禁止设置缩放");
	});

	__getset(0,__proto,'isActiveAction',function(){
		return this._controler.isActiveAction;
		},function(value){
		this._controler.isActiveAction=value;
	});

	__getset(0,__proto,'isPlaying',function(){
		return this._controler.isPlaying;
	});

	__getset(0,__proto,'direction',function(){
		return this._controler.direction;
	});

	__getset(0,__proto,'isPart',function(){
		return this._controler.isPart;
		},function(value){
		this._controler.isPart=value;
	});

	__getset(0,__proto,'isReverseAutoOver',function(){
		return this._controler.isReverseAutoOver;
		},function(value){
		this._controler.isReverseAutoOver=value;
	});

	__getset(0,__proto,'renderDir',function(){
		return this._controler.rnDdir;
	});

	__getset(0,__proto,'curSortValue',function(){
		return this._controler.curSortValue;
	});

	__getset(0,__proto,'isRepeat',function(){
		return this._repeatH !=0 || this._repeatW !=0;
	});

	__getset(0,__proto,'curDirFrameIdx',function(){
		return this._controler.index;
	});

	__getset(0,__proto,'resPackType',function(){
		return 1;
	});

	/**没有资源的时候，是否使用默认资源代替**/
	/**没有资源的时候，是否使用默认资源代替**/
	__getset(0,__proto,'useDefault',function(){
		return this._useDefault;
		},function(value){
		this._useDefault=value;
	});

	__getset(0,__proto,'stopAtIdx',function(){
		return this._stopAtIdx;
	});

	__getset(0,__proto,'isPlayReverse',function(){
		return (this._controler.wrapMode==1);
		},function(v){
		if (v){
			this._controler.wrapMode=1;
		}
		else{
			if (this._controler.wrapMode==1)
				this._controler.wrapMode=0;
		}
	});

	__getset(0,__proto,'allTime',function(){
		return this._controler.allTime;
	});

	__getset(0,__proto,'isloop',function(){
		return this._isloop;
	});

	__getset(0,__proto,'loadingkey',function(){
		return this._loadingkey;
	});

	__getset(0,__proto,'isShow',function(){
		return this._isShow;
		},function(value){
		if(this._isShow !=value){
			this._isShow=value;
			this.checkShowState();
		}
	});

	__getset(0,__proto,'controler',function(){
		return this._controler;
	});

	return MAnimation2D;
})(MSprite)


//class engine.templet.MTemplet extends laya.ani.bone.Templet
var MTemplet=(function(_super){
	function MTemplet(){
		MTemplet.__super.call(this);
	}

	__class(MTemplet,'engine.templet.MTemplet',_super);
	var __proto=MTemplet.prototype;
	__proto.destroy=function(){
		var tTexture;
		for(var $each_tTexture in this.subTextureDic){
			tTexture=this.subTextureDic[$each_tTexture];
			if(tTexture)
				tTexture.destroy(true);
		}
		var $each_tTexture;
		for($each_tTexture in this._textureDic){
			tTexture=this._textureDic[$each_tTexture];
			if(tTexture)
				tTexture.destroy(true);
		}
		_super.prototype.destroy.call(this);
	}

	__proto.loadAni=function(url){
		if (this._skBufferUrl !=null)return;
		_super.prototype.loadAni.call(this,url);
	}

	__proto.onComplete=function(content){
		var tSkBuffer=Loader.getRes(this._skBufferUrl);
		if (tSkBuffer==null)
			this._skBufferUrl=null;
		_super.prototype.onComplete.call(this,content);
	}

	__proto._textureComplete=function(){
		if (this.destroyed){
			var tTexture;
			var tTextureName;
			for (var i=0,n=this._loadList.length;i < n;i++){
				tTextureName=this._loadList[i];
				tTexture=this._textureDic[tTextureName]=Loader.getRes(tTextureName);
				tTexture.destroy(true);
			}
			return;
		}
		_super.prototype._textureComplete.call(this);
	}

	__getset(0,__proto,'skBufferUrl',function(){
		return this._skBufferUrl;
	});

	return MTemplet;
})(Templet)


//class engine.pui.components.PView extends laya.ui.View
var PView=(function(_super){
	function PView(){
		/**有没得背景底**/
		this.hasDi=false;
		/**是否是图片背景**/
		this.isModal=false;
		this.modalUnclose=false;
		/**是否是简单的半透明背景**/
		this.isSimpleModal=false;
		/**点击了模态背景回调函数 （如果没有。默认处理为关闭面板）*/
		this.modelCaller=null;
		this.modelMethod=null;
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		this._di=null;
		PView.__super.call(this);
		this.autoDestroyAtClosed=true;
		this.centerX=0;
		this.centerY=0;
		this.on("click",this,this._onClick);
		if(PUIMgr.Ins.isWideScreen){
			if(this.width > Laya.stage.width || (this.height-200)> Laya.stage.height){
				var sw=this.width/Laya.stage.width;
				var sh=(this.height-200+200)/Laya.stage.height;
				var max=Math.max(sw,sh);
				var s=1/max;
				this.scale(s,s);
			}
		}
	}

	__class(PView,'engine.pui.components.PView',_super);
	var __proto=PView.prototype;
	__proto.createChildren=function(){
		this.on("onViewCreated",this,this.onViewCreated);
		laya.display.Scene.prototype.createChildren.call(this);
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._callOpenParam=false;
		this.onClose();
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.onViewCreated=function(){
		this._isViewCreated=true;
		if (this.displayedInStage && this._callOpen){
			this.onOpened(this._callOpenParam);
			this._callOpenParam=null;
			this._callOpen=false;
		}
	}

	__proto.onOpened=function(param){
		if (!this._isViewCreated){
			this._callOpenParam=param;
			this._callOpen=true;
		}
		else{
			if (this.hasDi){
				if (this._di==null){
					this._di=new Sprite();
					this._di.loadImage("res/ui/atlas_ui/zhucheng/ui_zc_jz_ditu.jpg");
					this._di.size(960,1440);
				}
				this.addChildAt(this._di,0);
				this._di.pos((this.width-this._di.width)/2,(this.height-this._di.height)/2);
			}
			this.zOrder=this.layer;
			this.onOpen(param);
			laya.display.Scene.prototype.onOpened.call(this,param);
		}
	}

	__proto.onClosed=function(type){
		this.onClose();
		this.modelMethod=this.modelCaller=null;
		if (this._di){
			this._di.destroy();
			this._di=null;
		}
		if (this.isModal || this.isSimpleModal){
			PUIMgr.Ins.checkMask();
		}
		laya.display.Scene.prototype.onClosed.call(this,type);
	}

	__proto.onOpen=function(param){}
	__proto.onClose=function(){}
	__proto.open=function(closeOther,param){
		(closeOther===void 0)&& (closeOther=true);
		laya.display.Scene.prototype.open.call(this,closeOther,param);
		CallbackUtil.doOpenViewCallBack(this.url);
	}

	__proto.close=function(type){
		laya.display.Scene.prototype.close.call(this,type);
		CallbackUtil.doCloseViewCallBack(this.url);
	}

	/**@private 处理默认点击事件*/
	__proto._onClick=function(e){
		var btn=e.target;
		if (btn){
			switch (btn.name){
				case "close":
				case "cancel":
				case "sure":
				case "no":
				case "ok":
				case "yes":
					this.close(btn.name);
					CallbackUtil.doCloseViewManul(this.url);
					return;
				}
		}
	}

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(View,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		var offY=0;
		if(!isNaN(this.top)){
			offY=NotchFixBase.Ins.notchHeight;
		}
		Laya.superSet(View,this,'y',Math.round(value+offY));
	});

	__getset(0,__proto,'layer',function(){
		return 17;
	});

	return PView;
})(View)


//class engine.pui.components.PProgressBar extends laya.ui.ProgressBar
var PProgressBar=(function(_super){
	function PProgressBar(skin){
		PProgressBar.__super.call(this,skin);
	}

	__class(PProgressBar,'engine.pui.components.PProgressBar',_super);
	var __proto=PProgressBar.prototype;
	__proto._skinLoaded=function(){
		if (this.destroyed)return;
		_super.prototype._skinLoaded.call(this);
	}

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(ProgressBar,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(ProgressBar,this,'y',Math.round(value));
	});

	return PProgressBar;
})(ProgressBar)


//class engine.pui.components.PImage extends laya.ui.Image
var PImage=(function(_super){
	function PImage(skin){
		this._initSkin=null;
		//====================================================================tips显示
		this._tipsHandler=null;
		PImage.__super.call(this,skin);
	}

	__class(PImage,'engine.pui.components.PImage',_super);
	var __proto=PImage.prototype;
	/**
	*设置tips显示
	*@param tipsData tips数据
	*@param tipsPanel tips面板路径
	*/
	__proto.SetTips=function(tipsData,tipPanel){
		if (this._tipsHandler==null)
			this._tipsHandler=new TipsHandler(this,tipPanel);
		this._tipsHandler.SetTipsData(tipsData);
	}

	__proto.DisposeTips=function(){
		if (this._tipsHandler==null)
			return;
		this._tipsHandler.destroy();
		this._tipsHandler=null;
	}

	__proto.Clone=function(){
		var ret=new PImage();
		if (this.sizeGrid !=null)
			ret.sizeGrid=this.sizeGrid;
		ret.skin=this._initSkin;
		ret.size(this.width,this.height);
		return ret;
	}

	__getset(0,__proto,'skin',_super.prototype._$get_skin,function(value){
		if (this._initSkin==null){
			this._initSkin=value;
		}
		Laya.superSet(Image,this,'skin',value);
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Image,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Image,this,'y',Math.round(value));
	});

	return PImage;
})(Image)


//class engine.pui.components.PComboBox extends laya.ui.ComboBox
var PComboBox=(function(_super){
	function PComboBox(skin,labels){
		PComboBox.__super.call(this,skin,labels);
	}

	__class(PComboBox,'engine.pui.components.PComboBox',_super);
	var __proto=PComboBox.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(ComboBox,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(ComboBox,this,'y',Math.round(value));
	});

	return PComboBox;
})(ComboBox)


//class engine.pui.components.PSlider extends laya.ui.Slider
var PSlider=(function(_super){
	function PSlider(skin){
		PSlider.__super.call(this,skin);
	}

	__class(PSlider,'engine.pui.components.PSlider',_super);
	return PSlider;
})(Slider)


//class engine.pui.components.PBox extends laya.ui.Box
var PBox=(function(_super){
	function PBox(){
		PBox.__super.call(this);
	}

	__class(PBox,'engine.pui.components.PBox',_super);
	var __proto=PBox.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Box,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Box,this,'y',Math.round(value));
	});

	return PBox;
})(Box)


//class engine.pui.components.PClip extends laya.ui.Clip
var PClip=(function(_super){
	function PClip(url,clipX,clipY){
		(clipX===void 0)&& (clipX=1);
		(clipY===void 0)&& (clipY=1);
		PClip.__super.call(this,url,clipX,clipY);
	}

	__class(PClip,'engine.pui.components.PClip',_super);
	return PClip;
})(Clip)


//class engine.pui.components.PHSlider extends laya.ui.Slider
var PHSlider=(function(_super){
	function PHSlider(skin){
		PHSlider.__super.call(this,skin);
		this.isVertical=false;
	}

	__class(PHSlider,'engine.pui.components.PHSlider',_super);
	return PHSlider;
})(Slider)


//class engine.pui.components.PScrollBar extends laya.ui.ScrollBar
var PScrollBar=(function(_super){
	function PScrollBar(skin){
		PScrollBar.__super.call(this,skin);
		this.elasticDistance=100;
		this.elasticBackTime=200;
	}

	__class(PScrollBar,'engine.pui.components.PScrollBar',_super);
	return PScrollBar;
})(ScrollBar)


//class engine.pui.components.PLabel extends laya.ui.Label
var PLabel=(function(_super){
	function PLabel(text){
		(text===void 0)&& (text="");
		PLabel.__super.call(this,text);
	}

	__class(PLabel,'engine.pui.components.PLabel',_super);
	var __proto=PLabel.prototype;
	__proto.createChildren=function(){
		this.addChild(this._tf=new PText());
	}

	__proto.Clone=function(){
		var ret=new PLabel();
		ret.size(this.width,this.height);
		ret.font=this.font;
		ret.fontSize=this.fontSize;
		ret.left=this.left;
		ret.leading=this.leading;
		ret.align=this.align;
		ret.color=this.color;
		ret.wordWrap=this.wordWrap;
		ret.stroke=this.stroke;
		ret.strokeColor=this.strokeColor;
		ret.text=this.initText;
		return ret;
	}

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Label,this,'y',Math.round(value));
	});

	__getset(0,__proto,'initText',function(){
		return (this._tf).initText;
		},function(value){
		(this._tf).initText=value;
	});

	__getset(0,__proto,'textW',function(){
		return this._tf.textWidth;
	});

	__getset(0,__proto,'textH',function(){
		return this._tf.textHeight;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Label,this,'x',Math.round(value));
	});

	return PLabel;
})(Label)


//class engine.pui.components.PButton extends laya.ui.Button
var PButton=(function(_super){
	function PButton(skin,label){
		this.feedScale=true;
		this._isFeed=false;
		this._isEnabled=true;
		this.initSX=1;
		this.initSY=1;
		this.FEED_BACK_SCALE=0.95;
		this._downX=0;
		this._downY=0;
		(label===void 0)&& (label="");
		PButton.__super.call(this,skin,label);
	}

	__class(PButton,'engine.pui.components.PButton',_super);
	var __proto=PButton.prototype;
	/**@inheritDoc */
	__proto.createChildren=function(){
		this.graphics=this._bitmap=new PAutoBitmap();
	}

	/**@private */
	__proto.createText=function(){
		if (!this._text){
			this._text=new PText();
			this._text.overflow="hidden";
			this._text.align="center";
			this._text.valign="middle";
			this._text.width=this._width;
			this._text.height=this._height;
		}
	}

	__proto.BeginFeedBack=function(){
		if (!this.feedScale || this._isFeed)
			return;
		this.initSX=this.scaleX;
		this.initSY=this.scaleY;
		this._downX=this.x;
		this._downY=this.y;
		this.scale(this.initSX*this.FEED_BACK_SCALE,this.initSY*this.FEED_BACK_SCALE);
		if(this.width==0 || this.height==0)
			this.pos(this.x+2,this.y+2);
		else
		this.pos(this.x+(this.width*this.initSX)*(1-this.FEED_BACK_SCALE)/2,this.y+(this.height*this.initSY)*(1-this.FEED_BACK_SCALE)/2);
		this._isFeed=true;
	}

	__proto.EndFeedBack=function(){
		if (!this.feedScale || !this._isFeed)
			return;
		this.scale(this.initSX,this.initSY);
		this.pos(this._downX,this._downY);
		this._isFeed=false;
		SoundManager.playSound("res/sound/ui/101.wav");
	}

	__proto.Clone=function(){
		var ret=new PButton();
		ret.size(this.width,this.height);
		ret.skin=this._skin;
		ret.sizeGrid=this.sizeGrid;
		ret.label=this.label;
		ret.labelFont=this.labelFont;
		ret.labelSize=this.labelSize;
		ret.stateNum=this.stateNum;
		ret.labelColors=this.labelColors;
		return ret;
	}

	__getset(0,__proto,'stateNum',_super.prototype._$get_stateNum,function(value){
		if (value==1){
			this.on("mousedown",this,this.BeginFeedBack);
			this.on("mouseup",this,this.EndFeedBack);
			this.on("mouseout",this,this.EndFeedBack);
		}
		else{
			this.off("mousedown",this,this.BeginFeedBack);
			this.off("mouseup",this,this.EndFeedBack);
			this.off("mouseout",this,this.EndFeedBack);
		}
		Laya.superSet(Button,this,'stateNum',value);
	});

	__getset(0,__proto,'isEnabled',function(){
		return this._isEnabled;
		},function(value){
		this._isEnabled=value;
		this.mouseEnabled=value;
		this.gray=!value;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Button,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Button,this,'y',Math.round(value));
	});

	return PButton;
})(Button)


//class engine.pui.components.PHScrollBar extends laya.ui.ScrollBar
var PHScrollBar=(function(_super){
	function PHScrollBar(){
		PHScrollBar.__super.call(this);;
	}

	__class(PHScrollBar,'engine.pui.components.PHScrollBar',_super);
	var __proto=PHScrollBar.prototype;
	__proto.initialize=function(){
		_super.prototype.initialize.call(this);
		this.slider.isVertical=false;
	}

	return PHScrollBar;
})(ScrollBar)


//class engine.pui.componentext.PGrid extends engine.pui.components.PImage
var PGrid=(function(_super){
	function PGrid(skin){
		this._gridType=0;
		this._gridId=0;
		/**图标内容宽度 **/
		this._iconWidth=0;
		/**图标内容高度 **/
		this._iconHeight=0;
		//====================================================================冷却
		this._coolDown=null;
		//====================================================================图标
		this._imgIcon=null;
		this._imgType=null;
		this._imgRank=null;
		this._labRank=null;
		//====================================================================ICON 特效
		this._iconEff=null;
		//====================================================================文本
		this._topText=null;
		this._text=null;
		this._textOffx=0;
		this._textOffy=0;
		this.skillindex=0;
		this._textLayout=4;
		this._backChilds=[];
		this._fixedChilds=[];
		this._topChild=[];
		this._flagChilds=[];
		PGrid.__super.call(this);
	}

	__class(PGrid,'engine.pui.componentext.PGrid',_super);
	var __proto=PGrid.prototype;
	/**
	*gridid 格子id
	*gridtype 格子类型 (背包0、商店1、仓库2、装备3、快捷栏4等)
	*/
	__proto.initGrid=function(id,type){
		this._gridId=id;
		this._gridType=type;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.Clean();
		this.DisposeFixDisplay();
		laya.ui.Image.prototype.destroy.call(this,destroyChild);
	}

	__proto.Clean=function(){
		this._tag=null;
		this.skin=this._initSkin;
		this.DisposeIcon();
		this.DisposeIconEff();
		this.DisposeText();
		this.DisposeTopText();
		this.DisposeDisplay();
		this.DisposeTips();
		this.DisposeCoolDown();
		this.DisposeRank();
		Laya.timer.clearAll(this);
	}

	/**
	*停止 冷却动画
	*/
	__proto.DisposeCoolDown=function(){
		if (this._coolDown !=null){
			var cds=this._coolDown;
			cds.off("grid_cooldown_finished",this,this.CooldownFinishHandler);
			this._coolDown.Stop();
			if (this.gridContent.contains(cds)){
				this.gridContent.removeChild(cds);
			}
			this._coolDown=null;
		}
	}

	__proto.CooldownFinishHandler=function(event){
		this.DisposeCoolDown();
	}

	__proto.SetIcon=function(url,w,h){
		var resUrl=url;
		if (this._imgIcon !=null){
			if (this._imgIcon.skin==resUrl)
				return;
			this._imgIcon.skin=resUrl;
		}
		else{
			this._imgIcon=new PImage();
			this._imgIcon.skin=resUrl;
			this.gridContent.addChild(this._imgIcon);
			this.SortSubCom();
		}
		this._imgIcon.width=w;
		this._imgIcon.height=h;
		this._imgIcon.x=(this.width-w)*0.5;
		this._imgIcon.y=(this.height-h)*0.5;
	}

	__proto.SetIconType=function(url,w,h){
		(w===void 0)&& (w=38);
		(h===void 0)&& (h=38);
		if(url==null || url==""){
			if(this._imgType !=null){
				this._imgType.visible=false;
				this._imgType.skin=null;
			}
			return;
		};
		var resUrl=url;
		if (this._imgType !=null){
			if (this._imgType.skin==resUrl)
				return;
			this._imgType.skin=resUrl;
		}
		else{
			this._imgType=new PImage();
			this._imgType.skin=resUrl;
			this.gridContent.addChild(this._imgType);
			this.SortSubCom();
		}
		this._imgType.width=w;
		this._imgType.height=h;
		this._imgType.x=4;
		this._imgType.y=this.height-h-4;
		this._imgType.visible=true;
	}

	__proto.SetRank=function(rank){
		var resUrl="res/ui/sg_ui/build/jieshudi.png";
		if (this._imgRank !=null){
			if (this._imgRank.skin==resUrl)
				return;
			this._imgRank.skin=resUrl;
		}
		else{
			this._imgRank=new PImage();
			this._imgRank.skin=resUrl;
			this.gridContent.addChild(this._imgRank);
			this.SortSubCom();
		}
		this._imgRank.width=26;
		this._imgRank.height=50;
		this._imgRank.x=(this.width-this._imgRank.width)-4;
		this._imgRank.y=4;
		var des=rank+"阶";
		if (this._labRank !=null){
			if (this._labRank.text==des)
				return;
			this._labRank.text=des;
		}
		else{
			this._labRank=new PLabel();
			this._labRank.text=des;
			this.gridContent.addChild(this._labRank);
			this.SortSubCom();
		}
		this._labRank.align="center";
		this._labRank.valign="top";
		this._labRank.width=26;
		this._labRank.height=50;
		this._labRank.font="font_ui_jieshu";
		this._labRank.x=(this.width-this._imgRank.width)-3;
		this._labRank.y=8;
		this._labRank.wordWrap=true;
	}

	__proto.SetIconGray=function(value){
		if (this._imgIcon){
			this._imgIcon.gray=value;
		}
		if (this._imgType){
			this._imgType.gray=value;
		}
	}

	__proto.CloneGridIcon=function(){
		return this._imgIcon.Clone();
	}

	__proto.DisposeIcon=function(){
		if (this._imgIcon !=null){
			this._imgIcon.destroy();
			this._imgIcon=null;
		}
		if(this._imgType !=null){
			this._imgType.destroy();
			this._imgType=null;
		}
	}

	__proto.DisposeRank=function(){
		if (this._imgRank !=null){
			this._imgRank.destroy();
			this._imgRank=null;
		}
		if(this._labRank!=null){
			this._labRank.destroy();
			this._labRank=null;
		}
	}

	__proto.DisposeIconEff=function(){
		if (this._iconEff==null)
			return;
		if (this._iconEff.parent !=null)
			this._iconEff.parent.removeChild(this._iconEff);
		this._iconEff.destroy();
		this._iconEff=null;
	}

	__proto.setTopText=function(str,color,strokeNum,strokeC){
		(color===void 0)&& (color="#79421C");
		(strokeNum===void 0)&& (strokeNum=1);
		(strokeC===void 0)&& (strokeC="#080808");
		if(this._topText==null){
			this._topText=new PText();
			this._topText.align="left";
			this.gridContent.addChild(this._topText);
			this._topText.x=10;
			this._topText.y=8;
			this.SortSubCom();
		}
		this._topText.color=color ? color :"#FFFFFF";
		this._topText.stroke=strokeNum;
		this._topText.strokeColor=strokeC;
		this._topText.text=str;
		this._topText.width=this._topText.textWidth+5;
		this._topText.height=this._topText.textHeight+4;
	}

	__proto.DisposeTopText=function(){
		if(this._topText !=null){
			this._topText.destroy();
			this._topText=null;
		}
	}

	__proto.SetText=function(str,color){
		if (this._text==null){
			this._text=new PText();
			this._text.align="right";
			this._text.color=color ? color :"#FFFFFF";
			this.gridContent.addChild(this._text);
			this.SortSubCom();
		}
		this._text.color=color ? color :"#FFFFFF";
		this._text.text=str;
		this._text.width=this._text.textWidth+5;
		this._text.height=this._text.textHeight+4;
		this.UpdateTextLayout();
	}

	__proto.SetTextLayout=function(type,offx,offy){
		(offx===void 0)&& (offx=0);
		(offy===void 0)&& (offy=0);
		this._textOffx=offx;
		this._textOffy=offy;
		if (this._textLayout==type)
			return;
		this._textLayout=type;
		this.UpdateTextLayout();
	}

	__proto.UpdateTextLayout=function(){
		if (this._text==null)
			return;
		this._text.width=this._text.textWidth+5;
		this._text.height=this._text.textHeight+4;
		switch (this._textLayout){
			case 1:
				this._text.x=(this.width-this._text.width)*0.5+this._textOffx;
				this._text.y=this._textOffy;
				break ;
			case 2:
				this._text.x=this.width-this._text.width+this._textOffx-5;
				this._text.y=this._textOffy;
				break ;
			case 3:
				this._text.x=this.width-this._text.width+this._textOffx-5;
				this._text.y=(this.height-this._text.height)*0.5+this._textOffy;
				break ;
			case 4:
				this._text.x=this.width-this._text.width+this._textOffx-5;
				this._text.y=this.height-this._text.height+this._textOffy;
				break ;
			case 5:
				this._text.x=(this.width-this._text.width)*0.5+this._textOffx;
				this._text.y=this.height-this._text.height+this._textOffy;
				break ;
			case 6:
				this._text.x=this._textOffx;
				this._text.y=this.height-this._text.height+this._textOffy;
				break ;
			case 7:
				this._text.x=this._textOffx;
				this._text.y=(this.height-this._text.height)*0.5+this._textOffy;
				break ;
			case 8:
				this._text.x=this._textOffx;
				this._text.y=this._textOffy;
				break ;
			case 9:
				this._text.x=(this.width-this._text.width)*0.5+this._textOffx;
				this._text.y=(this.height-this._text.height)*0.5+this._textOffy;
				break ;
			default :
				break ;
			}
	}

	__proto.DisposeText=function(){
		if (this._text==null)
			return;
		this._text.destroy();
		this._text=null;
	}

	__proto.AddBackDisplay=function(child){
		if (child==null)
			return;
		if (this._backChilds.indexOf(child)!=-1)
			return;
		this._backChilds.push(child);
		this.gridContent.addChild(child);
		this.SortSubCom();
	}

	__proto.AddFixedDisplay=function(child){
		if (child==null)
			return;
		if (this._fixedChilds.indexOf(child)!=-1)
			return;
		this._fixedChilds.push(child);
		this.gridContent.addChild(child);
		this.SortSubCom();
	}

	__proto.AddTopDisplay=function(child){
		if (child==null)
			return;
		if (this._topChild.indexOf(child)!=-1)
			return;
		this._topChild.push(child);
		this.gridContent.addChild(child);
		this.SortSubCom();
	}

	__proto.AddFlagDisplay=function(child){
		if (child==null)
			return;
		if (this._flagChilds.indexOf(child)!=-1)
			return;
		this._flagChilds.push(child);
		this.gridContent.addChild(child);
		this.SortSubCom();
	}

	__proto.DisposeFlagDisplay=function(){
		for (var i=0;i < this._flagChilds.length;++i){
			MCUtil.DisposeDisplay(this._flagChilds[i]);
		}
		this._flagChilds.length=0;
	}

	__proto.RemoveDisplay=function(child){
		if (child==null)
			return;
		var idx=this._flagChilds.indexOf(child);
		if (idx !=-1){
			this._flagChilds.splice(idx,1);
			this.gridContent.removeChild(child);
		}
		idx=this._topChild.indexOf(child);
		if (idx !=-1){
			this._topChild.splice(idx,1);
			this.gridContent.removeChild(child);
		}
		idx=this._backChilds.indexOf(child);
		if (idx !=-1){
			this._backChilds.splice(idx,1);
			this.gridContent.removeChild(child);
		}
		idx=this._fixedChilds.indexOf(child);
		if (idx !=-1){
			this._fixedChilds.splice(idx,1);
			this.gridContent.removeChild(child);
		}
	}

	// 包括back,top,flag
	__proto.DisposeDisplay=function(){
		var child;
		var $each_child;
		for($each_child in this._backChilds){
			child=this._backChilds[$each_child];
			MCUtil.DisposeDisplay(child);
		}
		var $each_child;
		for($each_child in this._topChild){
			child=this._topChild[$each_child];
			MCUtil.DisposeDisplay(child);
		}
		var $each_child;
		for($each_child in this._flagChilds){
			child=this._flagChilds[$each_child];
			MCUtil.DisposeDisplay(child);
		}
		this._backChilds.length=0;
		this._topChild.length=0;
		this._flagChilds.length=0;
	}

	__proto.DisposeFixDisplay=function(){
		var child;
		for(var $each_child in this._fixedChilds){
			child=this._fixedChilds[$each_child];
			MCUtil.DisposeDisplay(child);
		}
		this._fixedChilds.length=0;
	}

	//====================================================================排序格子中子对象层级
	__proto.SortSubCom=function(){
		Laya.timer.once(1,this,this.ReleaySort);
	}

	__proto.ReleaySort=function(){
		var idx=0;
		var node;
		var len=this._backChilds.length;
		if (len > 0){
			var $each_node;
			for($each_node in this._backChilds){
				node=this._backChilds[$each_node];
				this.gridContent.setChildIndex(node,idx);
				idx+=1;
			}
		}
		if (this._imgIcon !=null){
			this.gridContent.setChildIndex(this._imgIcon,idx);
			idx+=1;
		}
		if (this._imgType !=null){
			this.gridContent.setChildIndex(this._imgType,idx);
			idx+=1;
		}
		len=this._fixedChilds.length;
		if (len > 0){
			var $each_node;
			for($each_node in this._fixedChilds){
				node=this._fixedChilds[$each_node];
				this.gridContent.setChildIndex(node,idx);
				idx+=1;
			}
		}
		len=this._topChild.length;
		if (len > 0){
			var $each_node;
			for($each_node in this._topChild){
				node=this._topChild[$each_node];
				this.gridContent.setChildIndex(node,idx);
				idx+=1;
			}
		}
		len=this._flagChilds.length;
		if (len > 0){
			var $each_node;
			for($each_node in this._flagChilds){
				node=this._flagChilds[$each_node];
				this.gridContent.setChildIndex(node,idx);
				idx+=1;
			}
		}
		if (this._coolDown !=null){
			this.gridContent.setChildIndex(this._coolDown,idx++);
		}
		if (this._iconEff !=null){
			this.gridContent.setChildIndex(this._iconEff,idx++);
		}
		if (this._text !=null){
			this.gridContent.setChildIndex(this._text,idx);
			idx+=1;
		}
		if (this._topText !=null){
			this.gridContent.setChildIndex(this._topText,idx);
			idx+=1;
		}
	}

	__proto.Clone=function(){
		var ret=new PGrid();
		if (this.sizeGrid !=null)
			ret.sizeGrid=this.sizeGrid;
		ret.skin=this._initSkin;
		ret.size(this.width,this.height);
		return ret;
	}

	__proto.skill=function(index){
		this.skillindex=index;
	}

	__getset(0,__proto,'isCoolDown',function(){
		return (this._coolDown !=null);
	});

	/**
	*开始冷却
	*@param time 单位毫秒
	*@param startTime 开始时间
	*/
	__getset(0,__proto,'coolDown',null,function($coolDown){
		var cds=$coolDown;
		if ($coolDown==null || !(($coolDown instanceof laya.display.Sprite ))){
			throw new Error("cooldown is not a displayobject!");
		}
		if (this._coolDown !=null){
			this.DisposeCoolDown();
		}
		this._coolDown=$coolDown;
		if (this._coolDown !=null){
			this.gridContent.addChild(cds);
			cds.x=(this.width-cds.width)/ 2;
			cds.y=(this.height-cds.height)/ 2;
			this.SortSubCom();
			this._coolDown.Start();
			cds.on("grid_cooldown_finished",this,this.CooldownFinishHandler);
		}
	});

	__getset(0,__proto,'text',function(){
		return this._text;
	});

	__getset(0,__proto,'gridContent',function(){
		return this;
	});

	/**
	*读取 剩余冷却时间
	*
	*/
	__getset(0,__proto,'coolRemainTime',function(){
		if (this._coolDown){
			return this._coolDown.remainTime;
		}
		return-1;
	});

	__getset(0,__proto,'iconEff',function(){
		return this._iconEff;
		},function(value){
		this.DisposeIconEff();
		this._iconEff=value;
		if (value !=null){
			value.mouseEnabled=false;
			value.x=this.width *0.5;
			value.y=this.height *0.5;
			this.gridContent.addChild(this._iconEff);
			this.SortSubCom();
		}
	});

	__getset(0,__proto,'iconImg',function(){
		return this._imgIcon;
	});

	__getset(0,__proto,'typeImg',function(){
		return this._imgType;
	});

	__getset(0,__proto,'topText',function(){
		return this._topText;
	});

	/**格子类型*/
	__getset(0,__proto,'gridType',function(){
		return this._gridType;
	});

	/**格子id*/
	__getset(0,__proto,'gridId',function(){
		return this._gridId;
	});

	__getset(0,__proto,'iconWidth',function(){
		if (this._iconWidth <=0)
			return this.width;
		return this._iconWidth;
		},function(value){
		this._iconWidth=value;
	});

	__getset(0,__proto,'iconHeight',function(){
		if (this._iconHeight <=0)
			return this.height;
		return this._iconHeight;
		},function(value){
		this._iconHeight=value;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(PImage,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(PImage,this,'y',Math.round(value));
	});

	return PGrid;
})(PImage)


//class engine.pui.components.PTree extends laya.ui.Tree
var PTree=(function(_super){
	function PTree(){
		PTree.__super.call(this);
	}

	__class(PTree,'engine.pui.components.PTree',_super);
	return PTree;
})(Tree)


//class engine.pui.components.PList extends laya.ui.List
var PList=(function(_super){
	function PList(){
		PList.__super.call(this);
	}

	__class(PList,'engine.pui.components.PList',_super);
	return PList;
})(List)


//class engine.pui.components.PFontClip extends laya.ui.FontClip
var PFontClip=(function(_super){
	function PFontClip(skin,sheet){
		PFontClip.__super.call(this,skin,sheet);
	}

	__class(PFontClip,'engine.pui.components.PFontClip',_super);
	var __proto=PFontClip.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(FontClip,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(FontClip,this,'y',Math.round(value));
	});

	return PFontClip;
})(FontClip)


//class engine.pui.components.PVSlider extends engine.pui.components.PSlider
var PVSlider=(function(_super){
	function PVSlider(){
		PVSlider.__super.call(this);
	}

	__class(PVSlider,'engine.pui.components.PVSlider',_super);
	return PVSlider;
})(PSlider)


//class engine.pui.components.PTextInput extends laya.ui.TextInput
var PTextInput=(function(_super){
	function PTextInput(text){
		(text===void 0)&& (text="");
		PTextInput.__super.call(this,text);
	}

	__class(PTextInput,'engine.pui.components.PTextInput',_super);
	return PTextInput;
})(TextInput)


//class engine.pui.components.PPanel extends laya.ui.Panel
var PPanel=(function(_super){
	function PPanel(){
		this._fixContentWidth=-1;
		this._fixContentHeight=-1;
		this._trickModel=false;
		// 是否显示提示箭头
		this._isShowArrow=false;
		this._arrowLeft=null;
		this._loffx=0;
		this._loffy=0;
		this._arrowRight=null;
		this._roffx=0;
		this._roffy=0;
		this._arrowUp=null;
		this._uoffx=0;
		this._uoffy=0;
		this._arrowDown=null;
		this._doffx=0;
		this._doffy=0;
		this._btnLeft=null;
		this._btnRight=null;
		this._btnUp=null;
		this._btnDown=null;
		// 停在整页处
		this._stopPage=false;
		this._scrollTween=null;
		PPanel.__super.call(this);
	}

	__class(PPanel,'engine.pui.components.PPanel',_super);
	var __proto=PPanel.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.RemoveAllObject(true);
		this.DealScrollBtnEvent(false);
		this.ClearScrollTween();
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.SetShowArrow=function(value,loffx,loffy,roffx,roffy,uoffx,uoffy,doffx,doffy){
		(loffx===void 0)&& (loffx=0);
		(loffy===void 0)&& (loffy=0);
		(roffx===void 0)&& (roffx=0);
		(roffy===void 0)&& (roffy=0);
		(uoffx===void 0)&& (uoffx=0);
		(uoffy===void 0)&& (uoffy=0);
		(doffx===void 0)&& (doffx=0);
		(doffy===void 0)&& (doffy=0);
		this._isShowArrow=value;
		this._loffx=loffx;
		this._loffy=loffy;
		this._roffx=roffx;
		this._roffy=roffy;
		this._uoffx=uoffx;
		this._uoffy=uoffy;
		this._doffx=doffx;
		this._doffy=doffy;
	}

	/**
	*是否强制停在整页处
	*@param stopPage
	*/
	__proto.SetStopPage=function(stopPage){
		this._stopPage=stopPage;
	}

	/**
	*外部控制滚动的按钮
	*@param left
	*@param right
	*@param up
	*@param down
	*/
	__proto.SetScrollButton=function(left,right,up,down){
		this.DealScrollBtnEvent(false);
		this._btnLeft=left;
		this._btnRight=right;
		this._btnUp=up;
		this._btnDown=down;
		this.DealScrollBtnEvent(true);
		this.callLater(this.checkArrow);
	}

	__proto.DealScrollBtnEvent=function(add){
		if (this._btnLeft){
			if (add){
				this._btnLeft.on("click",this,this.ClickHScroll);
				}else{
				this._btnLeft.off("click",this,this.ClickHScroll);
				this._btnLeft=null;
			}
		}
		if (this._btnRight){
			if (add){
				this._btnRight.on("click",this,this.ClickHScroll);
				}else{
				this._btnRight.off("click",this,this.ClickHScroll);
				this._btnRight=null;
			}
		}
		if (this._btnUp){
			if (add){
				this._btnUp.on("click",this,this.ClickVScroll);
				}else{
				this._btnUp.off("click",this,this.ClickVScroll);
				this._btnUp=null;
			}
		}
		if (this._btnDown){
			if (add){
				this._btnDown.on("click",this,this.ClickVScroll);
				}else{
				this._btnDown.off("click",this,this.ClickVScroll);
				this._btnDown=null;
			}
		}
	}

	__proto.ClickHScroll=function(e){
		this._TweenScroll(false,e.currentTarget==this._btnLeft);
	}

	__proto.ClickVScroll=function(e){
		this._TweenScroll(true,e.currentTarget==this._btnUp);
	}

	__proto._TweenScroll=function(isV,isLeft){
		this.ClearScrollTween();
		var content=isV ? this.contentHeight :this.contentWidth;
		var len=isV ? this._height :this._width;
		var scroll=isV ? this._vScrollBar :this._hScrollBar;
		var show=scroll && content > len;
		if (show){
			var to=isLeft ? scroll.value-len :scroll.value+len;
			if (this._stopPage){
				var l1=to / len;
				var l2=to / len | 0;
				var addsize=Math.round(l1-l2)*len;
				to=l2 *len;
				to=isLeft ? to-addsize :to+addsize;
			}
			to=isLeft ? Math.max(to,0):Math.min(to,content-len);
			this._scrollTween=Tween.to(scroll,{value:to},300,Ease.linearNone);
		}
	}

	__proto.ClearScrollTween=function(){
		if (this._scrollTween){
			Tween.clear(this._scrollTween);
			this._scrollTween=null;
		}
	}

	__proto.OnVScrollEnd=function(){
		if (!this._stopPage)return;
		this._ScrollEndFix(true);
	}

	__proto.OnHScrollEnd=function(){
		if (!this._stopPage)return;
		this._ScrollEndFix(false);
	}

	__proto._ScrollEndFix=function(isV){
		this.ClearScrollTween();
		var len=isV ? this._height :this._width;
		var content=isV ? this.contentHeight :this.contentWidth;
		var scroll=isV ? this._vScrollBar :this._hScrollBar;
		var show=scroll && content > len;
		if (show){
			var l1=scroll.value / len;
			var l2=scroll.value / len | 0;
			var to=Math.round(l1-l2)==1 ? (l2+1)*len :l2 *len;
			this._scrollTween=Tween.to(scroll,{value:to},100,Ease.linearNone);
		}
	}

	/**
	*默认不 执行销毁
	*@param doDispose
	*
	*/
	__proto.RemoveAllObject=function(doDispose){
		(doDispose===void 0)&& (doDispose=false);
		while (this.content.numChildren > 0){
			var node=this.content.removeChildAt(0);
			if (doDispose)
				node.destroy();
		}
	}

	/**
	*默认不 执行销毁
	*@param doDispose
	*
	*/
	__proto.GetAllObject=function(){
		var ret=[];
		for (var i=0;i < this.content.numChildren;++i){
			ret.push(this.content.getChildAt(i));
		}
		return ret;
	}

	/**
	*设置列表项数据
	*@param list 数据源 Vector或Array
	*@param lineNum 每行项数，默认值1
	*@param vMar 水平间距，默认值0
	*@param hMar 垂直间距，默认值0
	*/
	__proto.SetListCellData=function(list,lineNum,vMar,hMar,offX,offY,fixW,fixH){
		(lineNum===void 0)&& (lineNum=1);
		(vMar===void 0)&& (vMar=0);
		(hMar===void 0)&& (hMar=0);
		(offX===void 0)&& (offX=0);
		(offY===void 0)&& (offY=0);
		(fixW===void 0)&& (fixW=-1);
		(fixH===void 0)&& (fixH=-1);
		this.RemoveAllObject(true);
		var totalH=0;
		var totalW=0;
		var len=list.length;
		for (var i=0;i < len;++i){
			this.addChild(list[i]);
		}
		this.LayoutCellData(null,lineNum,vMar,hMar,offX,offY,fixW,fixH);
	}

	/**
	*对容器中的对象位置进行排序
	*@param sortHand
	*@param lineNum
	*@param vMar
	*@param hMar
	*@param offX
	*@param offY
	*
	*/
	__proto.LayoutCellData=function(sortHand,lineNum,vMar,hMar,offX,offY,fixW,fixH){
		(lineNum===void 0)&& (lineNum=1);
		(vMar===void 0)&& (vMar=0);
		(hMar===void 0)&& (hMar=0);
		(offX===void 0)&& (offX=0);
		(offY===void 0)&& (offY=0);
		(fixW===void 0)&& (fixW=-1);
		(fixH===void 0)&& (fixH=-1);
		var len=this._content.numChildren;
		var sortarr=this._content._children.concat();
		var i=0;
		if (sortHand !=null){
			sortarr.sort(sortHand);
		};
		var totalH=0;
		var totalW=0;
		var offPosY=0;
		for (i=0;i < len;++i){
			var dis=sortarr [i];
			var ww=fixW;
			if (ww==-1)
				ww=dis.width;
			var hh=fixH;
			if (hh==-1)
				hh=dis.height;
			dis.x=offX+(i % lineNum)*(ww+vMar);
			dis.y=offY+(offPosY+hMar);
			if ((i % lineNum)==(lineNum-1))
				offPosY+=(hh+hMar);
			if ((dis.y+hh)> totalH)
				totalH=dis.y+hh;
			if ((dis.x+ww)> totalW)
				totalW=dis.x+ww;
		}
		if (fixW !=-1)
			this.fixContentWidth=totalW;
		else
		this.fixContentWidth=-1;
		if (fixH !=-1)
			this.fixContentHeight=totalH;
		else
		this.fixContentHeight=-1;
		this._setScrollChanged();
		for (i=0;i < len;++i){
			this.checkTrick(sortarr [i]);
		}
	}

	__proto.checkAllTrick=function(){
		if (this.destroyed)return;
		if (this._trickModel){
			for (var i=0;i < this._content.numChildren;++i){
				this.checkTrick(this._content.getChildAt(i));
			}
		}
	}

	__proto.checkTrick=function(trick){
		if (this._trickModel && trick !=null && Laya.__typeof(trick,'engine.pui.scroll.IScrollTrickCell')){
			PPanel.__trackRect.x=trick.x;
			PPanel.__trackRect.y=trick.y;
			PPanel.__trackRect.width=trick.width;
			PPanel.__trackRect.height=trick.height;
			if (this._content !=null && this._content.scrollRect !=null && this._content.scrollRect.intersects(PPanel.__trackRect)){
				if (trick.IsInView()==false){
					trick.visible=true;
					trick.SetInView(true);
				}
			}
			else{
				if (trick.IsInView()==true){
					trick.visible=false;
					trick.SetInView(false);
				}
			}
		}
	}

	// 处理箭头提示
	__proto.checkArrow=function(){
		if (this.destroyed)return;
		var contentW=this.contentWidth || 1;
		var contentH=this.contentHeight || 1;
		var vscroll=this._vScrollBar;
		var hscroll=this._hScrollBar;
		var vShow=vscroll && contentH > this._height;
		var hShow=hscroll && contentW > this._width;
		if (hShow && this._isShowArrow){
			if (hscroll.value > hscroll.min){
				if (this.arrowLeft.parent==null)
					this.rawAddChild(this.arrowLeft);
				this.arrowLeft.visible=true;
				this.arrowLeft.skin=PPanel.ARROW_PREFIX+PPanel.ARROW_LEFT;
				this.arrowLeft.size(PPanel.ARROW_H_W,PPanel.ARROW_H_H);
				this.arrowLeft.pos(0+this._loffx,(this._height-this.arrowLeft.height)/ 2+this._loffy);
			}
			else{
				if (this._arrowLeft)this._arrowLeft.visible=false;
			}
			if (hscroll.value < hscroll.max){
				if (this.arrowRight.parent==null)
					this.rawAddChild(this.arrowRight);
				this.arrowRight.visible=true;
				this.arrowRight.skin=PPanel.ARROW_PREFIX+PPanel.ARROW_RIGHT;
				this.arrowRight.size(PPanel.ARROW_H_W,PPanel.ARROW_H_H);
				this.arrowRight.pos(this._width-this.arrowRight.width+this._roffx,(this._height-this.arrowRight.height)/ 2+this._roffy);
			}
			else{
				if (this._arrowRight)this._arrowRight.visible=false;
			}
		}
		else{
			if (this._arrowLeft)this._arrowLeft.visible=false;
			if (this._arrowRight)this._arrowRight.visible=false;
		}
		if (vShow && this._isShowArrow){
			var isBig=this._width >=PPanel.ARROW_V_BIG_W;
			if (vscroll.value > vscroll.min){
				if (this.arrowUp.parent==null)
					this.rawAddChild(this.arrowUp);
				this.arrowUp.visible=true;
				this.arrowUp.skin=PPanel.ARROW_PREFIX+(isBig ? PPanel.ARROW_UP_BIG :PPanel.ARROW_UP_SMALL);
				var tow=isBig ? PPanel.ARROW_V_BIG_W :PPanel.ARROW_V_SMALL_W;
				var toh=isBig ? PPanel.ARROW_V_BIG_H :PPanel.ARROW_V_SMALL_H;
				tow=Math.min(this._width,tow);
				toh=Math.min(this._height,toh);
				this.arrowUp.size(tow,toh);
				this.arrowUp.pos((this._width-this.arrowUp.width)/ 2+this._uoffx,this._uoffy);
			}
			else{
				if (this._arrowUp)this._arrowUp.visible=false;
			}
			if (vscroll.value < vscroll.max){
				if (this.arrowDown.parent==null)
					this.rawAddChild(this.arrowDown);
				this.arrowDown.visible=true;
				this.arrowDown.skin=PPanel.ARROW_PREFIX+(isBig ? PPanel.ARROW_DOWN_BIG :PPanel.ARROW_DOWN_SMALL);
				var tow=isBig ? PPanel.ARROW_V_BIG_W :PPanel.ARROW_V_SMALL_W;
				var toh=isBig ? PPanel.ARROW_V_BIG_H :PPanel.ARROW_V_SMALL_H;
				tow=Math.min(this._width,tow);
				toh=Math.min(this._height,toh);
				this.arrowDown.size(tow,toh);
				this.arrowDown.pos((this._width-this.arrowDown.width)/ 2+this._doffx,(this._height-this.arrowDown.height)+this._doffy);
			}
			else{
				if (this._arrowDown)this._arrowDown.visible=false;
			}
		}
		else{
			if (this._arrowUp)this._arrowUp.visible=false;
			if (this._arrowDown)this._arrowDown.visible=false;
		}
		if (this._btnLeft)this._btnLeft.visible=hShow ? (hscroll.value > hscroll.min):false;
		if (this._btnRight)this._btnRight.visible=hShow ? (hscroll.value < hscroll.max):false;
		if (this._btnUp)this._btnUp.visible=(vShow ? vscroll.value > vscroll.min :false);
		if (this._btnDown)this._btnDown.visible=(vShow ? vscroll.value < vscroll.max :false);
	}

	__proto.addChild=function(child){
		var ret=_super.prototype.addChild.call(this,child);
		this.checkTrick(ret);
		this.callLater(this.checkArrow);
		return ret;
	}

	__proto.addChildAt=function(child,index){
		var ret=_super.prototype.addChildAt.call(this,child,index);
		this.checkTrick(ret);
		this.callLater(this.checkArrow);
		return ret;
	}

	__proto.refresh=function(){
		if (this._trickModel){
			this.callLater(this.checkAllTrick);
		}
		this.callLater(this.checkArrow);
		_super.prototype.refresh.call(this);
	}

	/**
	*重载滚动变化时
	*@param scrollBar
	*
	*/
	__proto.onScrollBarChange=function(scrollBar){
		_super.prototype.onScrollBarChange.call(this,scrollBar);
		this.callLater(this.checkAllTrick);
		this.callLater(this.checkArrow);
	}

	__proto._sizeChanged=function(){
		_super.prototype._sizeChanged.call(this);
		this.callLater(this.checkAllTrick);
		this.callLater(this.checkArrow);
	}

	__getset(0,__proto,'arrowDown',function(){
		if (this._arrowDown==null)this._arrowDown=new PImage();
		return this._arrowDown;
	});

	__getset(0,__proto,'contentWidth',function(){
		if (this._fixContentWidth !=-1)
			return this._fixContentWidth;
		return Laya.superGet(Panel,this,'contentWidth');
	});

	/**
	*@private
	*获取内容高度（以像素为单位）。
	*/
	__getset(0,__proto,'contentHeight',function(){
		if (this._fixContentHeight !=-1)
			return this._fixContentHeight;
		return Laya.superGet(Panel,this,'contentHeight');
	});

	__getset(0,__proto,'trickModel',function(){
		return this._trickModel;
		},function(value){
		this._trickModel=value;
	});

	__getset(0,__proto,'arrowUp',function(){
		if (this._arrowUp==null)this._arrowUp=new PImage();
		return this._arrowUp;
	});

	__getset(0,__proto,'arrowLeft',function(){
		if (this._arrowLeft==null)this._arrowLeft=new PImage();
		return this._arrowLeft;
	});

	__getset(0,__proto,'arrowRight',function(){
		if (this._arrowRight==null)this._arrowRight=new PImage();
		return this._arrowRight;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Panel,this,'x',Math.round(value));
	});

	__getset(0,__proto,'fixContentWidth',function(){
		return this._fixContentWidth;
		},function(value){
		this._fixContentWidth=value;
	});

	__getset(0,__proto,'fixContentHeight',function(){
		return this._fixContentHeight;
		},function(value){
		this._fixContentHeight=value;
	});

	// 重载
	__getset(0,__proto,'vScrollBarSkin',_super.prototype._$get_vScrollBarSkin,function(value){
		if (this._vScrollBar==null){
			this._vScrollBar=new PVScrollBar();
			this.rawAddChild(this._vScrollBar);
			this._vScrollBar.on("change",this,this.onScrollBarChange,[this._vScrollBar]);
			this._vScrollBar.on("end",this,this.OnVScrollEnd);
			this._vScrollBar.target=this._content;
			this._setScrollChanged();
		}
		if (value !=null && value !="")
			this._vScrollBar.skin=value;
	});

	__getset(0,__proto,'hScrollBarSkin',_super.prototype._$get_hScrollBarSkin,function(value){
		if (this._hScrollBar==null){
			this._hScrollBar=new PHScrollBar();
			this.rawAddChild(this._hScrollBar);
			this._hScrollBar.on("change",this,this.onScrollBarChange,[this._hScrollBar]);
			this._hScrollBar.on("end",this,this.OnHScrollEnd);
			this._hScrollBar.target=this._content;
			this._setScrollChanged();
		}
		if (value !=null && value !="")
			this._hScrollBar.skin=value;
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Panel,this,'y',Math.round(value));
	});

	PPanel.ARROW_PREFIX=null;
	PPanel.ARROW_UP_BIG=null;
	PPanel.ARROW_UP_SMALL=null;
	PPanel.ARROW_DOWN_BIG=null;
	PPanel.ARROW_DOWN_SMALL=null;
	PPanel.ARROW_V_BIG_W=0;
	PPanel.ARROW_V_BIG_H=0;
	PPanel.ARROW_V_SMALL_W=0;
	PPanel.ARROW_V_SMALL_H=0;
	PPanel.ARROW_LEFT=null;
	PPanel.ARROW_RIGHT=null;
	PPanel.ARROW_H_W=0;
	PPanel.ARROW_H_H=0;
	__static(PPanel,
	['__trackRect',function(){return this.__trackRect=new Rectangle();}
	]);
	return PPanel;
})(Panel)


//class engine.pui.components.PVScrollBar extends engine.pui.components.PScrollBar
var PVScrollBar=(function(_super){
	function PVScrollBar(){
		PVScrollBar.__super.call(this);
	}

	__class(PVScrollBar,'engine.pui.components.PVScrollBar',_super);
	return PVScrollBar;
})(PScrollBar)


//class engine.pui.components.PDialog extends laya.ui.Dialog
var PDialog=(function(_super){
	function PDialog(){
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		this.modalUnclose=false;
		/**点击了模态背景回调函数 （如果没有。默认处理为关闭面板）*/
		this.modelCaller=null;
		this.modelMethod=null;
		PDialog.__super.call(this);
		this.autoDestroyAtClosed=true;
		this.isModal=true;
		this.zOrder=this.layer;
		this.centerX=0;
		this.centerY=0;
	}

	__class(PDialog,'engine.pui.components.PDialog',_super);
	var __proto=PDialog.prototype;
	__proto.createChildren=function(){
		this.on("onViewCreated",this,this.onViewCreated);
		laya.display.Scene.prototype.createChildren.call(this);
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._callOpenParam=false;
		this.onClose();
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.onViewCreated=function(){
		this._isViewCreated=true;
		if (this.displayedInStage && this._callOpen){
			this.onOpened(this._callOpenParam);
			this._callOpenParam=null;
			this._callOpen=false;
		}
	}

	__proto.onOpened=function(param){
		if (!this._isViewCreated){
			this._callOpenParam=param;
			this._callOpen=true;
		}
		else{
			this.zOrder=this.layer;
			this.onOpen(param);
			laya.display.Scene.prototype.onOpened.call(this,param);
		}
	}

	__proto.onClosed=function(type){
		this.onClose();
		this.modelMethod=this.modelCaller=null;
		if (this.isModal){
			PUIMgr.Ins.checkMask();
		}
		laya.display.Scene.prototype.onClosed.call(this,type);
	}

	__proto.onOpen=function(param){}
	__proto.onClose=function(){}
	__proto.SetModelMaskUnClose=function(v){
		this.isModal=v;
		if (this.isModal){
			this.modalUnclose=true;
		}
	}

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Dialog,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Dialog,this,'y',Math.round(value));
	});

	__getset(0,__proto,'layer',function(){
		return 17;
	});

	return PDialog;
})(Dialog)


//class engine.pui.components.PRadio extends laya.ui.Radio
var PRadio=(function(_super){
	function PRadio(skin,label){
		this.tabBindPanel=null;
		// string 或者 对象
		this.tabOpenParam=null;
		// 开启时传参
		this.tabTag=0;
		(label===void 0)&& (label="");
		PRadio.__super.call(this,skin,label);
	}

	__class(PRadio,'engine.pui.components.PRadio',_super);
	var __proto=PRadio.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.tabBindPanel=null;
		this.tabOpenParam=null;
		_super.prototype.destroy.call(this,destroyChild);
	}

	__proto.initialize=function(){
		_super.prototype.initialize.call(this);
		this._text.align="center";
		this._text.valign="middle";
		this._text.width=this._width;
		this._text.height=this._height;
	}

	/**
	*@private
	*对象的<code>Event.CLICK</code>事件侦听处理函数。
	*/
	__proto.onClick=function(e){}
	__proto.createText=function(){
		if (!this._text){
			this._text=new PText();
			this._text.overflow="hidden";
			this._text.align="center";
			this._text.valign="middle";
			this._text.width=this._width;
			this._text.height=this._height;
		}
	}

	__proto.Clone=function(){
		var ret=new PRadio();
		ret.size(this.width,this.height);
		ret.skin=this._skin;
		ret.sizeGrid=this.sizeGrid;
		ret.label=this.label;
		ret.labelFont=this.labelFont;
		ret.labelSize=this.labelSize;
		ret.stateNum=this.stateNum;
		ret.labelColors=this.labelColors;
		ret._autoSize=this._autoSize;
		return ret;
	}

	__getset(0,__proto,'btnAutoSize',null,function(value){
		this._autoSize=value;
	});

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(Radio,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(Radio,this,'y',Math.round(value));
	});

	return PRadio;
})(Radio)


//class engine.pui.components.PCheckBox extends laya.ui.CheckBox
var PCheckBox=(function(_super){
	function PCheckBox(skin,label){
		this.preCheck=null;
		this.preCheckCaller=null;
		(label===void 0)&& (label="");
		PCheckBox.__super.call(this,skin,label);
	}

	__class(PCheckBox,'engine.pui.components.PCheckBox',_super);
	var __proto=PCheckBox.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.preCheckCaller=null;
		this.preCheck=null;
		laya.ui.Button.prototype.destroy.call(this,destroyChild);
	}

	/**@inheritDoc */
	__proto.createChildren=function(){
		this.graphics=this._bitmap=new PAutoBitmap();
	}

	/**@private */
	__proto.createText=function(){
		if (!this._text){
			this._text=new PText();
			this._text.overflow="hidden";
			this._text.align="center";
			this._text.valign="middle";
			this._text.width=this._width;
			this._text.height=this._height;
		}
	}

	__proto.onMouse=function(e){
		if (this.toggle===false && this._selected)return;
		if (e.type==="click"){
			if (this.toggle){
				if (!this._selected){
					if (this.preCheck==null || this.preCheck.call(this.preCheckCaller)){
						this.selected=true;
					}
				}
				else{
					this.selected=false;
				}
			}
			this._clickHandler && this._clickHandler.run();
			return;
		}
		!this._selected && (this.state=Button.stateMap[e.type]);
	}

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(CheckBox,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(CheckBox,this,'y',Math.round(value));
	});

	return PCheckBox;
})(CheckBox)


//class engine.pui.components.PRadioGroup extends laya.ui.RadioGroup
var PRadioGroup=(function(_super){
	function PRadioGroup(){
		this.groupCheckCaller=null;
		this.groupCheckFunc=null;
		this.btnAutoSize=false;
		this.isLastClick=false;
		PRadioGroup.__super.call(this);
	}

	__class(PRadioGroup,'engine.pui.components.PRadioGroup',_super);
	var __proto=PRadioGroup.prototype;
	__proto.createItem=function(skin,label){
		var ret=new PRadio(skin,label);
		ret.btnAutoSize=this.btnAutoSize;
		return ret;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.groupCheckCaller=null;
		this.groupCheckFunc=null;
		laya.ui.UIGroup.prototype.destroy.call(this,destroyChild);
	}

	/**
	*@private
	*项对象的点击事件侦听处理函数。
	*@param index 项索引。
	*/
	__proto.itemClick=function(index){
		if (this.groupCheckFunc !=null){
			if (this.groupCheckFunc.apply(this.groupCheckCaller,[index])==false){
				return;
			}
		}
		this.isLastClick=true;
		this.selectedIndex=index;
	}

	__proto.getSelectTag=function(){
		return (this.items [this.selectedIndex]).tabTag;
	}

	__proto.getItemByTag=function(tag){
		var idx=this.getTagIndex(tag);
		if (idx !=-1){
			return this.items[idx];
		}
		return null;
	}

	__proto.getTagIndex=function(tag){
		for (var i=0;i < this.items.length;++i){
			if (this.items[i]["tabTag"]==tag)
				return i;
		}
		return-1;
	}

	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){
		Laya.superSet(RadioGroup,this,'x',Math.round(value));
	});

	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){
		Laya.superSet(RadioGroup,this,'y',Math.round(value));
	});

	return PRadioGroup;
})(RadioGroup)


//class engine.pui.components.PTab extends laya.ui.Tab
var PTab=(function(_super){
	function PTab(){
		PTab.__super.call(this);
	}

	__class(PTab,'engine.pui.components.PTab',_super);
	return PTab;
})(Tab)


	Laya.__init([MTweenFunc]);
})(window,document,Laya);
