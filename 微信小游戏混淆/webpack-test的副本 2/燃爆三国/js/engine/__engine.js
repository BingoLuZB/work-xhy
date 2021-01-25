
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var BitmapFont=laya.display.BitmapFont,Box=laya.ui.Box,Button=laya.ui.Button,Byte=laya.utils.Byte;
	var CheckBox=laya.ui.CheckBox,Clip=laya.ui.Clip,ComboBox=laya.ui.ComboBox,Config=Laya.Config,Dialog=laya.ui.Dialog;
	var Ease=laya.utils.Ease,Event=laya.events.Event,EventData=laya.ani.bone.EventData,EventDispatcher=laya.events.EventDispatcher;
	var FontClip=laya.ui.FontClip,HTMLDivElement=laya.html.dom.HTMLDivElement,Handler=laya.utils.Handler,HitArea=laya.utils.HitArea;
	var Image=laya.ui.Image,Input=laya.display.Input,Label=laya.ui.Label,List=laya.ui.List,Node=laya.display.Node;
	var Panel=laya.ui.Panel,Point$1=laya.maths.Point,ProgressBar=laya.ui.ProgressBar,Radio=laya.ui.Radio,RadioGroup=laya.ui.RadioGroup;
	var Rectangle=laya.maths.Rectangle,Scene=laya.display.Scene,ScrollBar=laya.ui.ScrollBar,Skeleton=laya.ani.bone.Skeleton;
	var Slider=laya.ui.Slider,Sprite=laya.display.Sprite,Stage=laya.display.Stage,Tab=laya.ui.Tab,Templet=laya.ani.bone.Templet;
	var Text=laya.display.Text,TextInput=laya.ui.TextInput,Texture=laya.resource.Texture,TimeLine=laya.utils.TimeLine;
	var Tree=laya.ui.Tree,Tween=laya.utils.Tween,UIComponent=laya.ui.UIComponent,View=laya.ui.View;
Laya.interface('engine.res.IAnimationRes');
Laya.interface('engine.base.pool.IPoolObject');
Laya.interface('engine.ui.interfaces.IGridData');
Laya.interface('engine.ui.interfaces.ICoolDown');
Laya.interface('engine.ui.interfaces.ITipsPanel');
Laya.interface('engine.scene.obj.ISceneObjectBase');
Laya.interface('engine.battle.move.IBattleMoveObj');
Laya.interface('engine.base.tile.IMTitleContainer');
Laya.interface('engine.scene.move.IMoveRuleObject');
Laya.interface('engine.base.pool.spool.ISimplePool');
Laya.interface('engine.pui.scroll.IScrollTrickCell');
Laya.interface('engine.base.interfaceclass.IDestroyObject');
Laya.interface('engine.scene.move.IMoveRule','engine.base.interfaceclass.IDestroyObject');
Laya.interface('engine.animation.interfaces.IAnimation','engine.base.interfaceclass.IDestroyObject');
//class engine.base.data.Bean
var Bean=(function(){
	function Bean(){}
	__class(Bean,'engine.base.data.Bean');
	var __proto=Bean.prototype;
	__proto.read=function(_buf){}
	__proto.write=function(_buf){}
	__proto.readBoolean=function(_buf){}
	__proto.readByte=function(_buf){}
	__proto.readShort=function(_buf){}
	__proto.readNumber=function(_buf){}
	__proto.readInt=function(_buf){}
	__proto.readLong=function(_buf){}
	__proto.readString=function(_buf){}
	__proto.readBytes=function(_buf){}
	__proto.readBean=function(_buf,clazz){}
	__proto.readBeanInList=function(_buf,clazz){}
	__proto.writeBoolean=function(_buf,_v){}
	__proto.writeByte=function(_buf,_v){}
	__proto.writeShort=function(_buf,_v){}
	__proto.writeInt=function(_buf,_v){}
	__proto.writeLong=function(_buf,_v){}
	__proto.writeString=function(_buf,_v){}
	__proto.writeBytes=function(_buf,_v){}
	__proto.writeBean=function(_buf,_bean){}
	return Bean;
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


//class engine.base.pool.ObjectPool
var ObjectPool=(function(){
	function ObjectPool(maxCount,nodeClass){
		this._nodeClass=null;
		this._maxCount=0;
		this._list=null;
	}

	__class(ObjectPool,'engine.base.pool.ObjectPool');
	var __proto=ObjectPool.prototype;
	__proto.Push=function(node){}
	__proto.Pop=function(){}
	__proto.Clean=function(){}
	__getset(0,__proto,'maxCount',null,function(value){});
	__getset(0,__proto,'count',function(){});
	return ObjectPool;
})()


//class engine.scene.astar.AStarPathCollection
var AStarPathCollection=(function(){
	function AStarPathCollection(){
		this._splitPath=[];
	}

	__class(AStarPathCollection,'engine.scene.astar.AStarPathCollection');
	var __proto=AStarPathCollection.prototype;
	__proto.ToArrayPath=function(){}
	__proto.SetPath=function(paths,grid){}
	__proto.DoPixel=function(){}
	__proto.GetEndPt=function(){}
	__getset(0,__proto,'splitPath',function(){});
	return AStarPathCollection;
})()


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
		this._chunks=null;
		this._meta=new MMapMetaData();
	}

	__class(MSceneMap,'engine.scene.MSceneMap');
	var __proto=MSceneMap.prototype;
	__proto.Init=function(){}
	__proto.SetLookMapMiddle=function(tar){}
	__proto.OnFrame=function(curtime){}
	__proto.BeginChangeMap=function(end,prog,gridX,gridY){}
	__proto.PrepareMapRes=function(){}
	__proto.LoadMapResThumbnails=function(){}
	__proto.OnLoadProg=function(per,debug){}
	__proto.OnMapResLoadComplete=function(success){}
	__proto.LoadMapData=function(){}
	__proto.LoadChunks=function(){}
	__proto.OnChunksComp=function(success){}
	__proto.CalcSceneZOrder=function(pixx,pixy){}
	__getset(0,__proto,'mapLayer',function(){});
	__getset(0,__proto,'mapName',function(){});
	__getset(0,__proto,'sceneWidth',function(){});
	__getset(0,__proto,'mapGrid',function(){});
	__getset(0,__proto,'gridHeight',function(){});
	__getset(0,__proto,'mapChunk',function(){});
	__getset(0,__proto,'curMapResId',function(){});
	__getset(0,__proto,'gridWidth',function(){});
	__getset(0,__proto,'sceneHeight',function(){});
	__getset(0,__proto,'meta',function(){});
	__getset(0,__proto,'mapResId',function(){});
	__getset(1,MSceneMap,'Ins',function(){});
	MSceneMap._ins=null;
	return MSceneMap;
})()


//class engine.scene.obj.MSceneTypeList
var MSceneTypeList=(function(){
	function MSceneTypeList(pooltype,type,refList){
		this._hashList=null;
		this._pooltype=0;
		this._cls=null;
		this._allObjectRefList=null;
	}

	__class(MSceneTypeList,'engine.scene.obj.MSceneTypeList');
	var __proto=MSceneTypeList.prototype;
	__proto.RemoveSceneObject=function(key){}
	__proto.RemoveAllSceneObject=function(){}
	__proto.GetCreateSceneObject=function(key){}
	__getset(0,__proto,'hashList',function(){});
	__getset(0,__proto,'pooltype',function(){});
	return MSceneTypeList;
})()


//class engine.base.data.Int64
var Int64=(function(){
	function Int64(value){
		this._hValue=0;
		this._lValue=0;
		this._hexValue="0000000000000000";
		(value===void 0)&& (value=0);
	}

	__class(Int64,'engine.base.data.Int64');
	var __proto=Int64.prototype;
	__proto.SetRawData=function(l,h){}
	__proto.SetMax=function(){}
	__proto.CloneInt64=function(){}
	__proto.CompareTo=function(value){}
	__proto.EqualTo=function(value){}
	__proto.equals=function(v){}
	__proto.IsZero=function(){}
	__proto.IsMax=function(){}
	__proto.Clear=function(){}
	__proto.ToString=function(){}
	__proto.ToGID=function(){}
	__proto.ShowValue=function(){}
	__proto.BitMaskTest=function(state,isH){
		(isH===void 0)&& (isH=false);
	}

	__getset(0,__proto,'intValue',null,function(value){});
	__getset(0,__proto,'hValue',function(){},function(value){});
	__getset(0,__proto,'bytes',function(){},function(value){});
	__getset(0,__proto,'hexValue',function(){},function(str){});
	__getset(0,__proto,'fValue',function(){},function(value){});
	__getset(0,__proto,'lValue',function(){},function(value){});
	Int64.Multiplication=function(a,b){}
	Int64.Addition=function(a,b){}
	Int64.Format=function(num){}
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


//class engine.utils.CallbackUtil
var CallbackUtil=(function(){
	function CallbackUtil(){}
	__class(CallbackUtil,'engine.utils.CallbackUtil');
	CallbackUtil.Reload=function(){}
	CallbackUtil.doCloseViewManul=function(url){}
	CallbackUtil.doCloseViewCallBack=function(url){}
	CallbackUtil.doOpenViewCallBack=function(url){}
	CallbackUtil.doCloseTabCallBack=function(id){}
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


//class engine.res.MSheetAnimationGC
var MSheetAnimationGC=(function(){
	function MSheetAnimationGC(){
		this.resetGameTime=30 *60 *1000;
		this._checkRestTime=0;
		this._refAniMap=new Dictionary();
		this._refKeyTimeMap=new Object();
		this._gcProxy=new MAnimationGCProxy();
	}

	__class(MSheetAnimationGC,'engine.res.MSheetAnimationGC');
	var __proto=MSheetAnimationGC.prototype;
	__proto.StartCheckGC=function(){}
	__proto.DelForeverRes=function(url){}
	__proto.RegisterForeverRes=function(url){}
	__proto.RegisterTypeId=function(oldtype,oldid,oldExtra,type,id,extra){}
	__proto.RefAni=function(anim){}
	__proto.FreeAni=function(anim){}
	__proto.RefKey=function(key){}
	__proto.OnFrame=function(){}
	__proto.checkResetTime=function(){}
	__proto.isResetGame=function(){}
	__proto.DoGC=function(){}
	__proto.GetMAnimationCount=function(){}
	MSheetAnimationGC.GC_CHECK_TIME=5 *60 *1000;
	MSheetAnimationGC.MEMORY_THRESHOLD=350;
	__static(MSheetAnimationGC,
	['Ins',function(){return this.Ins=new MSheetAnimationGC();}
	]);
	return MSheetAnimationGC;
})()


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
		this._shakeMode=0;
		this._shakeRangeMode=0;
		this._shakeFlag=false;
		this._shakeValue=new Point$1();
	}

	__class(SceneShakeControl,'engine.scene.layer.SceneShakeControl');
	var __proto=SceneShakeControl.prototype;
	__proto.GetShakeFlag=function(){}
	__proto.ShakeScene=function(mode,rangemode,ms,xb,xe,yb,ye,itv){}
	__proto.Clear=function(){}
	__proto.OnFrame=function(curtime){}
	__proto.SetShakeValue=function(xx,yy){}
	__getset(0,__proto,'shakeValue',function(){});
	return SceneShakeControl;
})()


//class engine.utils.UITool
var UITool=(function(){
	function UITool(){}
	__class(UITool,'engine.utils.UITool');
	UITool.MakeUrl=function(url){}
	UITool.GetSprite=function(url,isMakeUrl,w,h,complete,cacheAs){
		(isMakeUrl===void 0)&& (isMakeUrl=true);
		(w===void 0)&& (w=0);
		(h===void 0)&& (h=0);
		(cacheAs===void 0)&& (cacheAs="none");
	}

	UITool.SetUIImage=function(comUI,url,isMakeUrl){
		(isMakeUrl===void 0)&& (isMakeUrl=true);
	}

	UITool.AddFilter=function(target,filter){}
	UITool.RemoveFilter=function(target,filter){}
	return UITool;
})()


//class engine.pui.PUIMgr
var PUIMgr=(function(){
	function PUIMgr(){
		this.Show_Taost=null;
		this.Hide_Toast=null;
		this.maskHit=null;
		this.BG_MASK_URL="res/ui/sg_ui/city/bg2.jpg";
		this.tex=null;
		this.isImgMask=false;
		this.isSimpleMask=false;
		this.tempAlpha=1;
		this._loading=[];
		this._sceenMask=new UIComponent();
		this._sceenMask2=new UIComponent();
	}

	__class(PUIMgr,'engine.pui.PUIMgr');
	var __proto=PUIMgr.prototype;
	__proto.Init=function(showt,hidet){}
	__proto.open=function(url,param,closeOther,complete,name,showtaost){
		(closeOther===void 0)&& (closeOther=false);
		(showtaost===void 0)&& (showtaost=true);
	}

	__proto.opencls=function(cls,param,closeOther,complete,name,showtaost){
		(closeOther===void 0)&& (closeOther=false);
		(showtaost===void 0)&& (showtaost=true);
	}

	__proto.load=function(url,complete,name,showtaost){
		(showtaost===void 0)&& (showtaost=true);
	}

	__proto.onSceneLoaded=function(url,complete,name,scene){}
	__proto.close=function(url,name){
		(name===void 0)&& (name="");
	}

	__proto.closecls=function(cls){}
	__proto.closeLayer=function(layer,isChangeMap,excides){
		(isChangeMap===void 0)&& (isChangeMap=false);
	}

	__proto.getShow=function(url,name){
		(name===void 0)&& (name="");
	}

	__proto.getShowByUrl=function(url,name){
		(name===void 0)&& (name="");
	}

	__proto.getShowByClass=function(cls,name){
		(name===void 0)&& (name="");
	}

	__proto.formatUrl=function(url){}
	__proto._onResize=function(){}
	__proto.checkMask=function(){}
	__proto._realCheckMask=function(){}
	__proto.drawMask=function(){}
	__proto.drawMask2=function(){}
	__proto.texComplete=function(){}
	__proto.clickMask=function(){}
	__proto.clickMask2=function(){}
	__static(PUIMgr,
	['Ins',function(){return this.Ins=new PUIMgr();}
	]);
	return PUIMgr;
})()


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


//class engine.ui.tips.TipsHandler
var TipsHandler=(function(){
	function TipsHandler(compUI,tipsPanel){
		this._compUI=null;
		this._tipsPanel=null;
		this._tipsData=null;
	}

	__class(TipsHandler,'engine.ui.tips.TipsHandler');
	var __proto=TipsHandler.prototype;
	__proto.SetTipsData=function(tipsData){}
	__proto.OnShowTips=function(e){}
	__proto.destroy=function(){}
	return TipsHandler;
})()


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


//class engine.base.container.Dictionary
var Dictionary=(function(){
	function Dictionary(){
		this._values=[];
		this._keys=[];
	}

	__class(Dictionary,'engine.base.container.Dictionary');
	var __proto=Dictionary.prototype;
	__proto.set=function(key,value){}
	__proto.indexOf=function(key){}
	__proto.get=function(key){}
	__proto.remove=function(key){}
	__proto.clear=function(){}
	__getset(0,__proto,'values',function(){});
	__getset(0,__proto,'keys',function(){});
	return Dictionary;
})()


//class engine.tool.ToolMap
var ToolMap=(function(){
	function ToolMap(){}
	__class(ToolMap,'engine.tool.ToolMap');
	ToolMap.PixPt2GridPt=function(x,y,pt){}
	ToolMap.PixPtToGridPt=function(pt){}
	ToolMap.PixPt2PixMiddlePt=function(x,y){}
	ToolMap.PixPtToPixMiddlePt=function(pt){}
	ToolMap.GridPt2PixPt=function(x,y,ismiddle){
		(ismiddle===void 0)&& (ismiddle=true);
	}

	ToolMap.GridPtToPixPt=function(pt,ismiddle){
		(ismiddle===void 0)&& (ismiddle=true);
	}

	ToolMap.GridXToPixX=function(x){}
	ToolMap.GridYToPixY=function(y){}
	ToolMap.PixXToGridX=function(x){}
	ToolMap.PixXToPixXCenter=function(x){}
	ToolMap.PixYToGridY=function(y){}
	ToolMap.PixYToPixYCenter=function(y){}
	ToolMap.ArrayGridPt2PixPt=function(list){}
	ToolMap.CalcEndPtByDir=function(ptb,dir,step,calcBoard){
		(calcBoard===void 0)&& (calcBoard=true);
	}

	ToolMap.CalcSceneZOrder=function(pixx,pixy){}
	ToolMap.CalcBeginPtByDir=function(pte,dir,step){}
	ToolMap.CalcDirectionSlant=function(pt1,pt2,defaultDir){
		(defaultDir===void 0)&& (defaultDir=MDirection.NONE);
	}

	ToolMap.CalcDirSlant=function(x1,y1,x2,y2,defaultDir){
		(defaultDir===void 0)&& (defaultDir=0);
	}

	ToolMap.GetAngle=function(x1,y1,x2,y2){}
	ToolMap.AngleBetween=function(val,min,max){}
	ToolMap.CalcDir=function(x1,y1,x2,y2){}
	ToolMap.CalcDirection=function(pt1,pt2){}
	ToolMap.CalcBeginPtByPath=function(path,endpt){}
	ToolMap.CalcNearPt=function(pt,dir,type){}
	ToolMap.PathToWay=function(list,beginpt){}
	ToolMap.CalcDis=function(x1,y1,x2,y2){}
	ToolMap.CalcDisS=function(x1,y1,x2,y2){}
	ToolMap.CalcDistance=function(a,b){}
	ToolMap.CalcDistanceS=function(a,b){}
	ToolMap.CalcStepPath=function(list,beginpt){}
	ToolMap.PathDirDisToPoint=function(curPt,path){}
	ToolMap.PathPointToDirDis=function(startPt,path){}
	ToolMap.CalcPathNode=function(segx,segy,endx,endy){}
	ToolMap.CalcSlope=function(point1,point2){}
	ToolMap.SearchPointByCondition=function(pt,dir,conditionFunc,caller,isOnlyFront,maxSearch){
		(isOnlyFront===void 0)&& (isOnlyFront=false);
		(maxSearch===void 0)&& (maxSearch=10);
	}

	ToolMap.SnakeTrans=function(midpt,func,limitTimes){
		(limitTimes===void 0)&& (limitTimes=2000);
	}

	ToolMap.GetBloodDirsByDir=function(curDir){}
	ToolMap.GetNearCheckPoint=function(startPos,endPos,checkFunc){}
	ToolMap.CanMoveByLine=function(grid1,grid2,checkFunc){}
	ToolMap.CalcDir8ByAngle=function(x1,y1,x2,y2){}
	ToolMap.CalcDir4ByAngle=function(x1,y1,x2,y2){}
	ToolMap.GetDirection=function(starPos,endPos){}
	ToolMap.GetDirection2=function(starX,starY,endX,endY){}
	ToolMap.sign=function(v){}
	ToolMap.speedUp=function(grids){}
	ToolMap.ToClientGrid=function(pos,pt){}
	ToolMap.ToClientGridList=function(path){}
	ToolMap.ToPosition=function(gx,gy){}
	ToolMap.ToClientX=function(position){}
	ToolMap.ToClientY=function(position){}
	ToolMap.DIRECTION_MODE=1;
	ToolMap.GRID_WIDTH=72;
	ToolMap.GRID_HEIGHT=48;
	__static(ToolMap,
	['DirectionOffsetX8',function(){return this.DirectionOffsetX8=[0,1,1,1,0,-1,-1,-1];},'DirectionOffsetY8',function(){return this.DirectionOffsetY8=[-1,-1,0,1,1,1,0,-1];},'DirectionOffsetX4',function(){return this.DirectionOffsetX4=[0,1,0,-1];},'DirectionOffsetY4',function(){return this.DirectionOffsetY4=[-1,0,1,0];},'GRID_WIDTH_HALF',function(){return this.GRID_WIDTH_HALF=72 / 2;},'GRID_HEIGHT_HALF',function(){return this.GRID_HEIGHT_HALF=48 / 2;}
	]);
	return ToolMap;
})()


//class engine.res.MAnimationGCProxy
var MAnimationGCProxy=(function(){
	function MAnimationGCProxy(){
		this._foreverMap=[];
		this._resTypeId=[];
	}

	__class(MAnimationGCProxy,'engine.res.MAnimationGCProxy');
	var __proto=MAnimationGCProxy.prototype;
	__proto.RegisterForever=function(key){}
	__proto.DelForever=function(key){}
	__proto.RegisterTypeId=function(oldtype,oldid,oldExtra,type,resid,extra){}
	__proto.IsCanRelease=function(key,all){}
	return MAnimationGCProxy;
})()


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


//class engine.battle.MBattleObject
var MBattleObject=(function(){
	function MBattleObject(){
		this._allObjectHashList=null;
		this._typeListMap=new Dictionary();
	}

	__class(MBattleObject,'engine.battle.MBattleObject');
	var __proto=MBattleObject.prototype;
	__proto.AddTypeObjList=function(typeName,type){}
	__proto.GetTypeObjectList=function(typename){}
	__proto.EachTypeObjectList=function(typename,func){}
	__proto.DeleteObject=function(gid){}
	__proto.AddObject=function(gid,pooltype,bean,group){}
	__proto.RemoveAll=function(){}
	__proto.FindObject=function(id){}
	return MBattleObject;
})()


//class engine.base.sheet.MSheetDirection
var MSheetDirection=(function(){
	function MSheetDirection(){
		this.owner=null;
		this.dir=0;
		this.intervals=null;
		this.fades=null;
		this.scale=0;
		this.framenum=0;
		this.useMemory=0;
		this._orgtex=null;
		this._sheets=null;
		this._frameModes=null;
		this._loadFailTimes=0;
		this._isLoading=false;
		this._waitAni=[];
	}

	__class(MSheetDirection,'engine.base.sheet.MSheetDirection');
	var __proto=MSheetDirection.prototype;
	__proto.ParseMod=function(meta){}
	__proto.GetFrames=function(ani){}
	__proto.LoadTexture=function(complete){}
	__proto.OnLoadDirectionComp=function(complete,tex){}
	__proto.__reeee=function(complete,tex){}
	__proto.SetTexture=function(tex){}
	__proto.releaseMem=function(){}
	__getset(0,__proto,'isLoading',function(){});
	__getset(0,__proto,'isReady',function(){});
	return MSheetDirection;
})()


//class engine.greensock.TimelineTool
var TimelineTool=(function(){
	function TimelineTool(){}
	__class(TimelineTool,'engine.greensock.TimelineTool');
	TimelineTool.repeat=function(yoyo,repeat,target,props,duration,ease,offset,timeline){
		(offset===void 0)&& (offset=0);
	}

	return TimelineTool;
})()


//class engine.scene.move.EnumMoveType
var EnumMoveType=(function(){
	function EnumMoveType(){}
	__class(EnumMoveType,'engine.scene.move.EnumMoveType');
	EnumMoveType.MOVE_NONE=0;
	EnumMoveType.MOVE_RUN=1000;
	return EnumMoveType;
})()


//class engine.scene.astar.BinaryHeap
var BinaryHeap=(function(){
	function BinaryHeap(justMinFun){
		this.justMinFun=function(x,y){}
		this.a=[];
	}

	__class(BinaryHeap,'engine.scene.astar.BinaryHeap');
	var __proto=BinaryHeap.prototype;
	__proto.ins=function(value){}
	__proto.pop=function(){}
	return BinaryHeap;
})()


//class engine.pui.PDialogManager
var PDialogManager=(function(){
	function PDialogManager(){
		this.popupEffect=function(dialog){}
		this.closeEffect=function(dialog){}
		this.popupEffectHandler=new Handler(this,this.popupEffect);
		this.closeEffectHandler=new Handler(this,this.closeEffect);
	}

	__class(PDialogManager,'engine.pui.PDialogManager');
	var __proto=PDialogManager.prototype;
	__proto._centerDialog=function(dialog){}
	__proto.open=function(dialog,closeOther,showEffect){
		(closeOther===void 0)&& (closeOther=false);
		(showEffect===void 0)&& (showEffect=false);
	}

	__proto._clearDialogEffect=function(dialog){}
	__proto.doOpen=function(dialog){}
	__proto.close=function(dialog){}
	__proto.doClose=function(dialog){}
	__proto.lock=function(value){}
	__proto._checkMask=function(){}
	__static(PDialogManager,
	['instance',function(){return this.instance=new PDialogManager();}
	]);
	return PDialogManager;
})()


//class engine.scene.astar.AStarLinkLine
var AStarLinkLine=(function(){
	function AStarLinkLine(pt,tp){
		this._point=null;
		this._type=0;
	}

	__class(AStarLinkLine,'engine.scene.astar.AStarLinkLine');
	var __proto=AStarLinkLine.prototype;
	__getset(0,__proto,'point',function(){});
	__getset(0,__proto,'type',function(){});
	return AStarLinkLine;
})()


//class engine.base.container.HashList
var HashList=(function(){
	function HashList(){
		this._hash=null;
		this._list=null;
	}

	__class(HashList,'engine.base.container.HashList');
	var __proto=HashList.prototype;
	__proto.Get=function(k){}
	__proto.Each=function(f){}
	__proto.GetCount=function(){}
	__proto.Add=function(k,o){}
	__proto.Remove=function(k){}
	__proto.Clear=function(){}
	__proto.CheckSize=function(){}
	__getset(0,__proto,'list',function(){});
	return HashList;
})()


//class engine.supports.utils.HashMap
var HashMap=(function(){
	function HashMap(){
		this._values=[];
		this._keys=[];
	}

	__class(HashMap,'engine.supports.utils.HashMap');
	var __proto=HashMap.prototype;
	__proto.empty=function(){}
	__proto.eachKey=function(func){}
	__proto.eachValue=function(func){}
	__proto.containsValue=function(value){}
	__proto.containsKey=function(key){}
	__proto.getValue=function(key){}
	__proto.put=function(key,value){}
	__proto.set=function(key,value){}
	__proto.indexOf=function(key){}
	__proto.get=function(key){}
	__proto.remove=function(key){}
	__proto.clear=function(){}
	__getset(0,__proto,'keys',function(){});
	__getset(0,__proto,'length',function(){});
	__getset(0,__proto,'values',function(){});
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
	}

	__class(MBattleScene,'engine.battle.MBattleScene');
	var __proto=MBattleScene.prototype;
	__proto.Init=function(){}
	__proto.ResizeHandler=function(){}
	__proto.OpenBattle=function(url){}
	__proto.CloseBattle=function(){}
	__proto._OnFrame=function(){}
	__proto.OnFrame=function(curtime){}
	__proto.AddTop=function(dis){}
	__proto.AddMiddle=function(dis){}
	__proto.AddBottom=function(dis){}
	__getset(0,__proto,'middle',function(){});
	__getset(0,__proto,'container',function(){});
	MBattleScene.Ins=null;
	return MBattleScene;
})()


//class engine.ui.enum.EnumLayer
var EnumLayer=(function(){
	function EnumLayer(){}
	__class(EnumLayer,'engine.ui.enum.EnumLayer');
	EnumLayer.SCENE=1;
	EnumLayer.SCENE_BATTLE=3;
	EnumLayer.BOTTOM=10;
	EnumLayer.MIDDLE=11;
	EnumLayer.FIX=13;
	EnumLayer.FIX1=14;
	EnumLayer.FIX2=15;
	EnumLayer.POP=17;
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


//class engine.notch.NotchFixBase
var NotchFixBase=(function(){
	function NotchFixBase(){
		this._isNotch=false;
		this._notchWidth=0;
		this._notchHeight=0;
	}

	__class(NotchFixBase,'engine.notch.NotchFixBase');
	var __proto=NotchFixBase.prototype;
	__proto.Init=function(obj){}
	__getset(0,__proto,'isNotch',function(){});
	__getset(0,__proto,'notchWidth',function(){});
	__getset(0,__proto,'notchHeight',function(){});
	NotchFixBase.InitNotchFix=function(obj){}
	NotchFixBase.Ins=null;
	return NotchFixBase;
})()


//class engine.supports.utils.JSONUtil
var JSONUtil=(function(){
	function JSONUtil(){}
	__class(JSONUtil,'engine.supports.utils.JSONUtil');
	JSONUtil.encode=function(o){}
	JSONUtil.decode2=function(s){}
	JSONUtil.decode=function(s){}
	JSONUtil.isJson=function(s){}
	JSONUtil.DEBUG_MODE=false;
	return JSONUtil;
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


//class engine.ui.events.CoolDownEvent
var CoolDownEvent=(function(){
	function CoolDownEvent(){}
	__class(CoolDownEvent,'engine.ui.events.CoolDownEvent');
	CoolDownEvent.COOLDOWN_FINISHED="grid_cooldown_finished";
	CoolDownEvent.COOLDOWN_WARNING="cooldown_warning";
	return CoolDownEvent;
})()


//class engine.scene.astar.Node
var Node$1=(function(){
	function Node(x,y){
		this.x=0;
		this.y=0;
		this.f=0;
		this.g=0;
		this.h=0;
		this._walkable=true;
		this._dyWalkable=true;
		this._walkbaleFunc=null;
		this.parent=null;
		this.version=1;
		this.links=null;
		this.nodeType=2;
		this.buriedDepth=-1;
		this.distance=0;
	}

	__class(Node,'engine.scene.astar.Node',null,'Node$1');
	var __proto=Node.prototype;
	__proto.dispose=function(){}
	__proto.toString=function(){}
	__proto.getDistanceTo=function(targetNode){}
	__getset(0,__proto,'walkable',function(){},function(value){});
	__getset(0,__proto,'dyWalkable',function(){},function(value){});
	__getset(0,__proto,'walkbaleFunc',null,function(value){});
	return Node;
})()


//class engine.res.MAnimationUtil
var MAnimationUtil=(function(){
	function MAnimationUtil(){}
	__class(MAnimationUtil,'engine.res.MAnimationUtil');
	MAnimationUtil.RegType=function(type,name){}
	MAnimationUtil.RegActType=function(type,name){}
	MAnimationUtil.RegActLoop=function(type){}
	MAnimationUtil.IsLoop=function(action){}
	MAnimationUtil.RegUnLoad=function(resType,resId,actType){
		(actType===void 0)&& (actType=-1);
	}

	MAnimationUtil.IsUnload=function(resType,resId,actType){}
	MAnimationUtil.ToKeyName=function(type,resId,actType,extra){}
	MAnimationUtil.ToShortKey=function(type,resId,extra){}
	MAnimationUtil.GetActionName=function(actionId){}
	MAnimationUtil.ROOT_URL="res/animation/";
	MAnimationUtil.UNLOAD_URLS=[];
	__static(MAnimationUtil,
	['RES_TYPE_MAP',function(){return this.RES_TYPE_MAP=new Object();},'ACTION_TYPE_MAP',function(){return this.ACTION_TYPE_MAP=new Object();},'ACTION_LOOP_MAP',function(){return this.ACTION_LOOP_MAP=new Object();},'ACTION_MAP_MAP',function(){return this.ACTION_MAP_MAP=new Object();}
	]);
	return MAnimationUtil;
})()


//class engine.scene.MSceneObject
var MSceneObject=(function(){
	function MSceneObject(){
		this._allObjectHashList=null;
		this._typeListMap=new Dictionary();
	}

	__class(MSceneObject,'engine.scene.MSceneObject');
	var __proto=MSceneObject.prototype;
	__proto.AddTypeObjList=function(typeName,type){}
	__proto.GetTypeObjectList=function(typename){}
	__proto.EachTypeObjectList=function(typename,func){}
	__proto.OnFrame=function(){}
	__proto.DeleteObject=function(gid){}
	__proto.AddObject=function(sceneobjgid,pooltype,bean,layertype){}
	__proto.RemoveAllRoundObject=function(){}
	__proto.FindObject=function(id){}
	__proto.FindMouseObj=function(wx,wy){}
	return MSceneObject;
})()


//class engine.supports.utils.LanUtil
var LanUtil=(function(){
	function LanUtil(){}
	__class(LanUtil,'engine.supports.utils.LanUtil');
	LanUtil.GetLanStr=function(str){}
	LanUtil.lanDic=null;
	return LanUtil;
})()


//class engine.base.pool.spool.SimplePool
var SimplePool=(function(){
	function SimplePool(){}
	__class(SimplePool,'engine.base.pool.spool.SimplePool');
	SimplePool.recover=function(obj){}
	SimplePool.getItem=function(cls){}
	SimplePool.inPool=function(obj){}
	return SimplePool;
})()


//class engine.base.sheet.MSheetResPack
var MSheetResPack=(function(){
	function MSheetResPack(){
		this.url=null;
		this.path=null;
		this.compressTex=false;
		this.blend=0;
		this.maxdir=0;
		this.alltime=0;
		this.dirs=[];
	}

	__class(MSheetResPack,'engine.base.sheet.MSheetResPack');
	var __proto=MSheetResPack.prototype;
	__proto.Parse=function(content){}
	__proto.LoadAllTexture=function(complete){}
	__proto.OnOneTextureLoaded=function(complete,dir){}
	__proto.releaseMem=function(refDir){}
	__getset(0,__proto,'useMemory',function(){});
	__getset(0,__proto,'validDir',function(){});
	return MSheetResPack;
})()


//class engine.base.sheet.MSheetFrame
var MSheetFrame=(function(){
	function MSheetFrame(mods,orgtex){
		this.texs=null;
		this.offxs=null;
		this.offys=null;
	}

	__class(MSheetFrame,'engine.base.sheet.MSheetFrame');
	var __proto=MSheetFrame.prototype;
	__proto.destroy=function(){}
	return MSheetFrame;
})()


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
	__proto.destory=function(){}
	__proto.setTabData=function(content,pages,params){}
	__proto.selectIndex=function(index){}
	__proto.showIndex=function(index){}
	__proto.openTab=function(index,scene){}
	return SimpleTabControl;
})()


//class engine.base.data.ByteBufferUtil
var ByteBufferUtil=(function(){
	function ByteBufferUtil(){}
	__class(ByteBufferUtil,'engine.base.data.ByteBufferUtil');
	ByteBufferUtil.writeInt=function(buf,value){}
	ByteBufferUtil.readInt=function(buf){}
	ByteBufferUtil.writeLong=function(buf,v){}
	ByteBufferUtil.readLong=function(buf){}
	ByteBufferUtil.readString=function(buf){}
	__static(ByteBufferUtil,
	['_temp_long',function(){return this._temp_long=new long();},'_temp_long2',function(){return this._temp_long2=new long();}
	]);
	return ByteBufferUtil;
})()


//class engine.scene.astar.AStarEx
var AStarEx=(function(){
	function AStarEx(){
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
	}

	__class(AStarEx,'engine.scene.astar.AStarEx');
	var __proto=AStarEx.prototype;
	__proto.setGrid=function(grid){}
	__proto.createGrid=function(width,hight){}
	__proto.justMin=function(x,y){}
	__proto.findPath=function(maxFindNum){
		(maxFindNum===void 0)&& (maxFindNum=0);
	}

	__proto.GetPathFloyd=function(){}
	__proto.searchTask=function(){}
	__proto.search=function(maxFindNum){
		(maxFindNum===void 0)&& (maxFindNum=0);
	}

	__proto.findNearPath=function(end){}
	__proto.buildPath=function(){}
	__proto.manhattan=function(node){}
	__getset(0,__proto,'grid',function(){},function(value){});
	AStarEx.floyd=function(path,grid){}
	AStarEx.floydCrossAble=function(n1,n2,grid){}
	AStarEx.bresenhamNodes=function(p1,p2){}
	AStarEx.floydVector=function(target,n1,n2){}
	__static(AStarEx,
	['Ins',function(){return this.Ins=new AStarEx();}
	]);
	return AStarEx;
})()


//class engine.scene.data.MMapMetaData
var MMapMetaData=(function(){
	function MMapMetaData(){
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
		this.farLayerMoveSpeedRatio=0;
		this.topCoverCalcZOffset=new HashMap();
		this.linkLines=new HashMap();
	}

	__class(MMapMetaData,'engine.scene.data.MMapMetaData');
	var __proto=MMapMetaData.prototype;
	__proto.ParseMapMeta=function(id,bytes){}
	__proto.ParseChunkLayerData=function(){}
	__proto.ParseDownHillData=function(){}
	__proto.SetTopCoverCalcZOffset=function(s){}
	__proto.SetLinkLines=function(s){}
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


//class engine.scene.move.MoveRule
var MoveRule=(function(){
	function MoveRule(){
		this._object=null;
		this._isDestroyed=false;
		this._pathList=null;
		this._lastFrameTime=0;
		this._runSpeed=0;
		this._bCache=false;
		this._curMoveType=0;
		this._prevMoveType=0;
		this._moveEndPos=null;
		this._moveStartDir=-1;
		this._moveDistance=0;
		this._movePercent=0;
		this._curMoveDirection=0;
		this._directPt=null;
		this._moveStartPos=new Point$1();
	}

	__class(MoveRule,'engine.scene.move.MoveRule');
	var __proto=MoveRule.prototype;
	Laya.imps(__proto,{"engine.scene.move.IMoveRule":true})
	__proto.SetData=function(obj){}
	__proto.CheckMoveAbort=function(){}
	__proto.RunDirect=function(pixX,pixY){}
	__proto.Run=function(paths){}
	__proto._InitPath=function(paths){}
	__proto.OnFrame=function(curTime){}
	__proto.SetNewObjectPos=function(x,y){}
	__proto.IsMoving=function(){}
	__proto.Clear=function(){}
	__proto.OnRecycle=function(){}
	__proto.OnRevert=function(){}
	__proto.StopMove=function(){}
	__proto.MoveEnd=function(){}
	__proto.SetMoveSpeed=function(runspeed){}
	__proto.SetCurMoveType=function(type){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__getset(0,__proto,'isDestroyed',function(){});
	__getset(0,__proto,'curMoveType',function(){});
	__getset(0,__proto,'curMoveDirection',function(){});
	return MoveRule;
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
	__proto.SetData=function(obj){}
	__proto.destroy=function(){}
	__proto.ClearDebug=function(){}
	__proto.Move=function(type,gx,gy,time){}
	__proto.OnFrame=function(curtime){}
	__proto.Stop=function(){}
	__proto.CalcJumpHeight=function(){}
	__proto.isJumpType=function(type){}
	__getset(0,__proto,'isMoving',function(){});
	__getset(0,__proto,'isJump',function(){});
	__getset(0,__proto,'curJumpHeight',function(){});
	MBattleMoveRule.JUMP_HEIGHT_CALC_TYPE=1;
	return MBattleMoveRule;
})()


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


//class engine.tool.ToolBase
var ToolBase=(function(){
	function ToolBase(){}
	__class(ToolBase,'engine.tool.ToolBase');
	__getset(1,ToolBase,'serverMTime',function(){});
	ToolBase.INT=function(val){}
	ToolBase.GetTimer=function(){}
	ToolBase.RLog=function(s,t){
		(t===void 0)&& (t=false);
	}

	ToolBase.Log=function(s){}
	ToolBase.LogError=function(s){}
	ToolBase.LogErrorAndDebug=function(s){}
	ToolBase.LogAndDeubgThrow=function(s){}
	ToolBase.LogThrow=function(s){}
	ToolBase.GetStackTrace=function(pre){}
	ToolBase.MessageBox=function(s){}
	ToolBase.Assert=function(v,s){}
	ToolBase.GetTimerS=function(){}
	ToolBase.GetFrameTimerS=function(){}
	ToolBase.GetWinWidth=function(){}
	ToolBase.GetWinHeight=function(){}
	ToolBase.RandomInt=function(v1,v2){}
	ToolBase.RandomArray=function(arr){}
	ToolBase.RandomFloat=function(v1,v2){}
	ToolBase.RandomFloat2=function(v1,v2){}
	ToolBase.RandomBoolean=function(){}
	ToolBase.GetPowOf2Value=function(value){}
	ToolBase.ClampFloat=function(value,min,max){}
	ToolBase.ClampInt=function(value,min,max){}
	ToolBase.LerpPoint=function(start,end,per){}
	ToolBase.LerpValue=function(start,end,per){}
	ToolBase.DivFloorInt=function(value,mod){}
	ToolBase.CheckBitMask=function(value,mask){}
	ToolBase.ClearBitMask=function(value,mask){}
	ToolBase.AddBitMask=function(value,mask){}
	ToolBase.SetResRoot=function(animation,ui,sound,effect){}
	ToolBase.GetResAnimationURL=function(path){}
	ToolBase.GetResUIURL=function(path){}
	ToolBase.GetResSoundURL=function(path){}
	ToolBase.GetResEffectURL=function(path){}
	ToolBase.GetResURL=function(path){}
	ToolBase.GetResURLRoot=function(){}
	ToolBase.IsEqualPoint=function(pt1,pt2){}
	ToolBase.IsEqualPoint2=function(x1,y1,x2,y2){}
	ToolBase.IsContainsPoint=function(rect,pt){}
	ToolBase.isPowerOfTwo=function(value){}
	ToolBase.interpolate=function(pt1,pt2,f){}
	ToolBase.polar=function(len,angle){}
	ToolBase.CreatePowOf2Bitmapdata=function(old){}
	ToolBase.ParseFlagHead=function(value){}
	ToolBase.SortBubble=function(arr){}
	ToolBase.SortQuick=function(arr,prop,type,start,end){
		(type===void 0)&& (type=1);
		(start===void 0)&& (start=0);
		(end===void 0)&& (end=2147483647);
	}

	ToolBase.RemoveAllChildren=function(con,isdestroy){
		(isdestroy===void 0)&& (isdestroy=true);
	}

	ToolBase.Create3DRect=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
	}

	ToolBase.Create2DRect=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
	}

	ToolBase.Create2DRectSprite=function(w,h,color,alpha){
		(alpha===void 0)&& (alpha=1);
	}

	ToolBase.CloneDictionary=function(src,dst){}
	ToolBase.DegreeGetAngleByPoint=function(startx,starty,endx,endy){}
	ToolBase.DegreeAngleToRadian=function(angle){}
	ToolBase.DegreeRadianToAngle=function(radian){}
	ToolBase.DegreeDirToRadian=function(dir){}
	ToolBase.DegreeDirToAngle=function(dir){}
	ToolBase.getAngle=function(point,centerPt){}
	ToolBase.getRadian=function(point,centerPt){}
	ToolBase.PointEquals=function(a,b){}
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


//class engine.scene.data.MWeatherAreaData
var MWeatherAreaData=(function(){
	function MWeatherAreaData(){
		this._sizew=0;
		this._sizeh=0;
		this._numw=0;
		this._numh=0;
		this._hollowflag=[];
	}

	__class(MWeatherAreaData,'engine.scene.data.MWeatherAreaData');
	var __proto=MWeatherAreaData.prototype;
	__proto.ReadData=function(bytes){}
	__getset(0,__proto,'numh',function(){});
	__getset(0,__proto,'sizew',function(){});
	__getset(0,__proto,'numw',function(){});
	__getset(0,__proto,'sizeh',function(){});
	__getset(0,__proto,'hollowflag',function(){});
	return MWeatherAreaData;
})()


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
	}

	__class(ChunkLayerData,'engine.scene.data.ChunkLayerData');
	var __proto=ChunkLayerData.prototype;
	__proto.ReadData=function(bytes){}
	return ChunkLayerData;
})()


//class engine.animation.define.MAnimationDefine
var MAnimationDefine=(function(){
	function MAnimationDefine(){}
	__class(MAnimationDefine,'engine.animation.define.MAnimationDefine');
	MAnimationDefine.RESPACK_TYPE_2D=1;
	MAnimationDefine.RESPACK_TYPE_3D=2;
	return MAnimationDefine;
})()


//class engine.base.define.MDirection
var MDirection=(function(){
	function MDirection(){}
	__class(MDirection,'engine.base.define.MDirection');
	MDirection.IsValid=function(dir){}
	MDirection.ValidDir=function(dir,fixdir){
		(fixdir===void 0)&& (fixdir=0);
	}

	MDirection.GetObDir=function(dir){}
	MDirection.RandomDir=function(){}
	MDirection.GetDirOff=function(dir1,dir2){}
	MDirection.GetOffDir=function(dir,off){}
	MDirection.ToAngle=function(dir){}
	MDirection.GetDir=function(sx,sy,ex,ey){}
	MDirection.DirToNormalVector=function(dir){}
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


//class engine.loaders.MAnimationLoader
var MAnimationLoader=(function(){
	function MAnimationLoader(){}
	__class(MAnimationLoader,'engine.loaders.MAnimationLoader');
	var __proto=MAnimationLoader.prototype;
	__proto.GetDataName=function(compress){}
	__proto.GetDirName=function(compress,dir){}
	__proto.LoadBin=function(path,complete,loadalldir){
		(loadalldir===void 0)&& (loadalldir=false);
	}

	__proto.OnBinLoaded=function(compress,url,path,complete,loadalldir,content){}
	__proto.LoadTexture=function(compress,path,dir,complete){}
	__proto.OnTextureLoaded=function(compress,url,path,dir,complete,content){}
	__proto.ParseCompressTex=function(url,content){}
	__static(MAnimationLoader,
	['Ins',function(){return this.Ins=new MAnimationLoader();}
	]);
	return MAnimationLoader;
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
	}

	__class(Grid,'engine.scene.astar.Grid');
	var __proto=Grid.prototype;
	__proto.dispose=function(){}
	__proto.calculateLinks=function(linklinesHash,type){
		(type===void 0)&& (type=0);
	}

	__proto.getType=function(){}
	__proto.initNodeLink=function(node,type,linklines){}
	__proto.getNode=function(x,y){}
	__proto.setEndNode=function(x,y){}
	__proto.setStartNode=function(x,y){}
	__proto.setWalkable=function(x,y,value){}
	__proto.setDyWalkable=function(x,y,value){}
	__proto.setWalkbleFunc=function(x,y,value){}
	__proto.setCheckMonster=function(x,y,value){}
	__proto.setCheckPlayer=function(x,y,value){}
	__proto.findReplacer=function(fromNode,toNode,useBuriedDepth){}
	__proto.getNodeBuriedDepth=function(node,loopCount){
		(loopCount===void 0)&& (loopCount=10);
	}

	__proto.findReachableNode=function(x,y){}
	__getset(0,__proto,'numRows',function(){});
	__getset(0,__proto,'endNode',function(){});
	__getset(0,__proto,'numCols',function(){});
	__getset(0,__proto,'startNode',function(){});
	return Grid;
})()


//class engine.scene.chunk.PTileImageControl
var PTileImageControl=(function(){
	function PTileImageControl(){
		this._container=null;
		this._chunks=null;
		this._chunksURL=null;
		this._chunksShowTime=null;
		this._isDynamic=false;
		this._url=null;
		this._totalWidth=0;
		this._totalHeight=0;
		this._tileSizeW=0;
		this._tileSizeH=0;
		this._tileNumW=0;
		this._tileNumH=0;
		this.failIDXs=null;
		this._viewRc=new Rectangle();
	}

	__class(PTileImageControl,'engine.scene.chunk.PTileImageControl');
	var __proto=PTileImageControl.prototype;
	__proto.Init=function(container){}
	__proto.Dispose=function(){}
	__proto.SetData=function(url,totalw,totalh,tilew,tileh,scaleperX,scaleperY){}
	__proto.Clear=function(){}
	__proto.clearFailIDXs=function(){}
	__proto.IsClear=function(){}
	__proto.GetChunkUrls=function(sceneRect){}
	__proto.UpdateChunk=function(screenRect){}
	__proto.LoadChunk=function(cX,cY){}
	__proto.LoadChunkOK=function(cX,cY,url,t){}
	PTileImageControl.RELEASE_TIME=30 *1000;
	return PTileImageControl;
})()


//class engine.battle.MBattleUtil
var MBattleUtil=(function(){
	function MBattleUtil(){}
	__class(MBattleUtil,'engine.battle.MBattleUtil');
	MBattleUtil.GetFrontPt=function(gx,gy,dir,ret){}
	MBattleUtil.GetBackPt=function(gx,gy,dir,ret){}
	MBattleUtil.GetBackPix=function(gx,gy,dir,ret){}
	MBattleUtil.GridXToPixX=function(x){}
	MBattleUtil.GridYToPixY=function(y){}
	MBattleUtil.PixXToGridX=function(x){}
	MBattleUtil.PixYToGridY=function(y){}
	MBattleUtil.GRIDW=48;
	MBattleUtil.GRIDH=36;
	return MBattleUtil;
})()


//class engine.utils.MCUtil
var MCUtil=(function(){
	function MCUtil(){}
	__class(MCUtil,'engine.utils.MCUtil');
	MCUtil.AddChildOnly=function(con,dis){}
	MCUtil.RemoveSelf=function(mc){}
	MCUtil.RemoveAllChild=function(mc){}
	MCUtil.DisposeAllChild=function(mc){}
	MCUtil.DisposeArray=function(arr){}
	MCUtil.DisposeDisplay=function(display){}
	MCUtil.ToTop=function(mc){}
	MCUtil.ToBottom=function(mc){}
	MCUtil.GetRelativePos=function(curObj,parent){}
	MCUtil.ToCenter=function(curObj,h,v){
		(h===void 0)&& (h=true);
		(v===void 0)&& (v=true);
	}

	return MCUtil;
})()


//class engine.scene.grid.MapGridData
var MapGridData=(function(){
	function MapGridData(){
		this._width=0;
		this._height=0;
		this._curMapResId=0;
		this._gridWMax=0;
		this._gridHMax=0;
		this._grids=null;
		this._gridsDynamic=null;
		this._gridsExtra=null;
		this._pathFinderf=null;
		this._astarGrid=null;
		this._debugPath=null;
		this._endpt=null;
		this._gridSoundData=null;
	}

	__class(MapGridData,'engine.scene.grid.MapGridData');
	var __proto=MapGridData.prototype;
	__proto.Init=function(){}
	__proto.LoadMap=function(meta){}
	__proto.Clear=function(){}
	__proto.TryFloodFill=function(pt,expt,curfNum,maxfNum){
		(maxfNum===void 0)&& (maxfNum=10000);
	}

	__proto.TestTargetBound=function(pt,expt){}
	__proto.AstarFindPath=function(sx,sy,ex,ey){}
	__proto.SearchFixFunc=function(temppt){}
	__proto.FindPaths=function(start,end,co){}
	__proto.IsClear=function(){}
	__proto.Type=function(x,y){}
	__proto.TypeDy=function(x,y){}
	__proto.TypeEx=function(x,y){}
	__proto.GetExtraType=function(x,y){}
	__proto.GridTypeIsWork=function(type){}
	__proto.GridTypeIsWorkDy=function(type){}
	__proto.GridTypeIsCov=function(type){}
	__proto.GridTypeIsStop=function(type){}
	__proto.GridIsWorkWithBoard=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
	}

	__proto.GridIsWork=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
	}

	__proto.IsGridCanMove=function(x,y,isCheckObj){
		(isCheckObj===void 0)&& (isCheckObj=true);
	}

	__proto.GridIsCov=function(x,y){}
	__proto.CanMarkIsWalk=function(x,y){}
	__getset(0,__proto,'gridWMax',function(){});
	__getset(0,__proto,'gridHMax',function(){});
	__getset(0,__proto,'gridSoundData',function(){});
	MapGridData.NO_BLOCK=false;
	return MapGridData;
})()


//class engine.res.MSheetAnimationMgr
var MSheetAnimationMgr=(function(){
	function MSheetAnimationMgr(){
		this._callbackPrepareEnd=null;
		this._defautlResType=0;
		this._defautlResId=0;
		this._defaultResCount=0;
		this._sheetPackMap=new Object();
		this._loaderQueue=new Object();
	}

	__class(MSheetAnimationMgr,'engine.res.MSheetAnimationMgr');
	var __proto=MSheetAnimationMgr.prototype;
	__proto.GetResPack=function(anim,key){}
	__proto.OnBinLoaded=function(key,pack){}
	__proto.addResPack=function(key,pack){}
	__proto.PrepareDefaultAnimationRes=function(endcallback,restype,resid,loadaction){}
	__proto.DefaultAnimationLoaded=function(key,pack){}
	__proto.GetDefaultAnimation=function(action){}
	__proto.PreloadAnimation=function(restype,resid,action){}
	__proto.OnPreloadOne=function(key,pack){}
	__proto.GetResPakNum=function(){}
	__proto.validRes=function(){}
	__getset(0,__proto,'sheetPackMap',function(){});
	__static(MSheetAnimationMgr,
	['Ins',function(){return this.Ins=new MSheetAnimationMgr();}
	]);
	return MSheetAnimationMgr;
})()


//class engine.ui.utils.LayoutUtil
var LayoutUtil=(function(){
	function LayoutUtil(){}
	__class(LayoutUtil,'engine.ui.utils.LayoutUtil');
	LayoutUtil.GetLayoutPos=function(obj,layout,offx,offy){}
	LayoutUtil.LayoutTipPanel=function(target,comp){}
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


//class engine.scene.layer.MapSceneLayer
var MapSceneLayer=(function(){
	function MapSceneLayer(){
		this._curSceneH=0;
		this._curSceneW=0;
		this._sceneRoot=null;
		this._layerMap=null;
		this._layerBottom=null;
		this._layerMiddle=null;
		this._layerTop=null;
		this._lookTarget=null;
		this._screenSceneRect=null;
		this._map=null;
		this._isSceneMoving=false;
		this._shakeControl=null;
		this._realSceneScale=1;
		this._curShowScale=1;
		this._tweenStartTime=0;
		this._tweenStartValue=0;
		this._tweenTime=0;
		this._cameraRealPos=new Point$1();
		this._camraPosAreaRect=new Rectangle();
		this.pixOffPt=new Point$1();
	}

	__class(MapSceneLayer,'engine.scene.layer.MapSceneLayer');
	var __proto=MapSceneLayer.prototype;
	__proto.Init=function(map){}
	__proto.ChangeMap=function(meta){}
	__proto.ResizeHandler=function(){}
	__proto.Clear=function(){}
	__proto.IsClear=function(){}
	__proto.SetLookTarget=function(tar){}
	__proto.CheckLookTarget=function(tar){}
	__proto.CalcSceneRect=function(gridX,gridY){}
	__proto.LookTarget=function(){}
	__proto.OnWinResize=function(w,h){}
	__proto.OnFrame=function(curtime){}
	__proto.ApplyScale=function(){}
	__proto.GetScreenSceneRect=function(){}
	__proto.AddLayerMap=function(dis){}
	__proto.AddMiddle=function(dis){}
	__proto.AddTop=function(dis){}
	__proto.AddBottom=function(dis){}
	__proto.RemoveMiddle=function(dis){}
	__proto.RemoveTop=function(dis){}
	__proto.RemoveBottom=function(dis){}
	__proto.RemoveLayerMap=function(dis){}
	__proto.GetMiddle=function(){}
	__proto.SetSceneScale=function(value,tweenTime){}
	__getset(0,__proto,'layerMap',function(){});
	__getset(0,__proto,'layerBottom',function(){});
	__getset(0,__proto,'layerMiddle',function(){});
	__getset(0,__proto,'layerTop',function(){});
	__getset(0,__proto,'sceneRoot',function(){});
	__getset(0,__proto,'curShowScale',function(){});
	__getset(0,__proto,'shakeControl',function(){});
	MapSceneLayer.StopMove=false;
	MapSceneLayer.LAYER_TYPE_BOTTOM=-1;
	MapSceneLayer.LAYER_TYPE_MIDDLE=0;
	MapSceneLayer.LAYER_TYPE_TOP=1;
	return MapSceneLayer;
})()


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
	}

	__proto.play=function(timeOrLabel,loop){
		(timeOrLabel===void 0)&& (timeOrLabel=0);
		(loop===void 0)&& (loop=false);
	}

	__proto.OnComplete=function(){}
	__proto.destroy=function(){}
	TimelineExt.create=function(comp,compparams){}
	return TimelineExt;
})()


//class engine.base.data.long extends engine.base.data.Int64
var long=(function(_super){
	function long(value){
		long.__super.call(this);
		(value===void 0)&& (value=0);
	}

	__class(long,'engine.base.data.long',_super);
	var __proto=long.prototype;
	__proto.Clone=function(){}
	__proto.setValue=function(l,h){}
	__proto.rightShiftFill0=function(v){}
	__proto.leftShift=function(shift){}
	__proto.andInt=function(v){}
	__proto.and=function(v){}
	__proto.or=function(v){}
	__proto.makeHex=function(){}
	long.create=function(low){}
	long.create0=function(high,low){}
	long.create1=function(l){}
	long.valueOf=function(num){}
	return long;
})(Int64)


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


//class engine.base.data.ByteArray extends laya.utils.Byte
var ByteArray=(function(_super){
	function ByteArray(data){
		ByteArray.__super.call(this);
	}

	__class(ByteArray,'engine.base.data.ByteArray',_super);
	var __proto=ByteArray.prototype;
	__proto.uncompress=function(algorithm){
		(algorithm===void 0)&& (algorithm="zlib");
	}

	__proto.compress=function(algorithm){
		(algorithm===void 0)&& (algorithm="zlib");
	}

	__proto.GetByteArray=function(offset,dataLen){}
	__proto.readUTF=function(len){}
	__proto.readUTFBytes=function(len){
		(len===void 0)&& (len=-1);
	}

	__proto.readUTFBytesOld=function(len){
		(len===void 0)&& (len=-1);
	}

	__proto.readDouble=function(){}
	__proto.readFloat=function(){}
	__proto.readBytes=function(bytes,offset,length){
		(offset===void 0)&& (offset=0);
		(length===void 0)&& (length=0);
	}

	__proto.readInt=function(){}
	__proto.readShort=function(){}
	__proto.readUnsignedByte=function(){}
	__proto.readUnsignedInt=function(){}
	__proto.readUnsignedShort=function(){}
	__proto.writeFloat=function(x){}
	__proto.writeInt=function(value){}
	__proto.writeShort=function(value){}
	__proto.writeBytes=function(bytes,offset,length){
		(offset===void 0)&& (offset=0);
		(length===void 0)&& (length=0);
	}

	__proto.writeMultiByte=function(value,charSet){}
	__getset(0,__proto,'buffer',function(){});
	return ByteArray;
})(Byte)


//class engine.animation.MAnimationControlBase extends laya.display.Node
var MAnimationControlBase=(function(_super){
	function MAnimationControlBase(){
		this.loop=false;
		this.wrapMode=0;
		this._index=0;
		this._count=0;
		this._isPlaying=false;
		this._labels=null;
		this._isReverse=false;
		this._frameRateChanged=false;
		this._controlNode=null;
		this._actionName=null;
		MAnimationControlBase.__super.call(this);
		this._interval=Config.animationInterval;
	}

	__class(MAnimationControlBase,'engine.animation.MAnimationControlBase',_super);
	var __proto=MAnimationControlBase.prototype;
	__proto.play=function(start,loop,name){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		(name===void 0)&& (name="");
	}

	__proto._getFrameByLabel=function(label){}
	__proto._frameLoop=function(){}
	__proto._setControlNode=function(node){}
	__proto._setDisplay=function(value){}
	__proto._checkResumePlaying=function(){}
	__proto.stop=function(){}
	__proto.addLabel=function(label,index){}
	__proto.removeLabel=function(label){}
	__proto._removeLabelFromLabelList=function(list,label){}
	__proto.gotoAndStop=function(position){}
	__proto._displayToIndex=function(value){}
	__proto.clear=function(){}
	__getset(0,__proto,'interval',function(){},function(value){});
	__getset(0,__proto,'isPlaying',function(){});
	__getset(0,__proto,'index',function(){},function(value){});
	__getset(0,__proto,'count',function(){});
	MAnimationControlBase.WRAP_POSITIVE=0;
	MAnimationControlBase.WRAP_REVERSE=1;
	MAnimationControlBase.WRAP_PINGPONG=2;
	return MAnimationControlBase;
})(Node)


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
	__proto.Dispose=function(){}
	__proto.SetPixPt=function(px,py){}
	__proto.GetPixPt=function(){}
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	__getset(0,__proto,'isDestroyed',function(){});
	__getset(0,__proto,'decimalPixY',function(){});
	__getset(0,__proto,'pixX',function(){},function(value){});
	__getset(0,__proto,'pixY',function(){},function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'decimalPixX',function(){});
	__getset(0,__proto,'gridX',function(){});
	__getset(0,__proto,'gridY',function(){});
	return MSprite;
})(Sprite)


//class engine.ui.debug.tinyui.TinyPanel extends laya.display.Sprite
var TinyPanel=(function(_super){
	function TinyPanel(w,h){
		this._bakcW=0;
		this._bakcH=0;
		this.needShowMainPanelOnHide=false;
		TinyPanel.__super.call(this);
	}

	__class(TinyPanel,'engine.ui.debug.tinyui.TinyPanel',_super);
	var __proto=TinyPanel.prototype;
	__proto.UpdateBack=function(w,h){}
	__proto.Show=function(){}
	__proto.Hide=function(){}
	__proto.MouseDownHandler=function(e){}
	__proto.MouseUpHandler=function(e){}
	__getset(0,__proto,'bakcW',function(){});
	__getset(0,__proto,'bakcH',function(){});
	TinyPanel.ShowHideType=function(t,type){
		(type===void 0)&& (type=0);
	}

	__static(TinyPanel,
	['_panels',function(){return this._panels=new Object();}
	]);
	return TinyPanel;
})(Sprite)


//class engine.ui.debug.tinyui.TinyLabel extends laya.display.Sprite
var TinyLabel=(function(_super){
	function TinyLabel(){
		this._desText=null;
		this._editText=null;
		TinyLabel.__super.call(this);
	}

	__class(TinyLabel,'engine.ui.debug.tinyui.TinyLabel',_super);
	var __proto=TinyLabel.prototype;
	__proto.mouseDownHandler=function(e){}
	__getset(0,__proto,'des',null,function(value){});
	__getset(0,__proto,'text',function(){},function(value){});
	__getset(0,__proto,'editText',function(){});
	return TinyLabel;
})(Sprite)


//class engine.animation.MAnimationControl extends engine.animation.MAnimationControlBase
var MAnimationControl=(function(_super){
	function MAnimationControl(owner,endCaller,endMethod,frameCaller,frameMethod){
		this._owner=null;
		this._rnDdir=0;
		this._direction=0;
		this._resType=-1;
		this._resExtra=null;
		this._resId=-1;
		this._resChanged=false;
		this._defaultResPack=null;
		this._defaultSheet=null;
		this._resPack=null;
		this._sheet=null;
		this._playSpeed=1;
		this._isReverseAutoOver=false;
		this._isPart=false;
		this._isActiveAction=false;
		this._isActiveMode=false;
		this._partSortList=null;
		this._end_caller=null;
		this._end_method=null;
		this._frame_caller=null;
		this._frame_medthod=null;
		this._actionChangeHandler=null;
		this._actionChangeMap=null;
		this._virdir=null;
		MAnimationControl.__super.call(this);
		this._actType=EnumActionType.NONE;
	}

	__class(MAnimationControl,'engine.animation.MAnimationControl',_super);
	var __proto=MAnimationControl.prototype;
	Laya.imps(__proto,{"engine.base.interfaceclass.IDestroyObject":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){}
	__proto.DoAction=function(actType,dir){}
	__proto.SetDefaultResPack=function(respack){}
	__proto.SetResPack=function(respack){}
	__proto.UpdateVirDir=function(pack){}
	__proto.OnSheetReady=function(){}
	__proto.GetRenderFrames=function(){}
	__proto.OnResLoadToPlay=function(){}
	__proto.SetDirection=function(v){}
	__proto.SetPlaySpeed=function(v){}
	__proto.play=function(start,loop,name){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
		(name===void 0)&& (name="");
	}

	__proto.OnPlayEnd=function(){}
	__proto.OnFrameChange=function(idx){}
	__proto._frameLoop=function(){}
	__proto._displayToIndex=function(value){}
	__proto.UpdateInterval=function(value){}
	__proto.clear=function(){}
	__proto.GetActType=function(){}
	__proto.GetId=function(){}
	__proto.GetType=function(){}
	__proto.GetExtra=function(){}
	__proto.SetFrameCaller=function(caller,method){}
	__proto.SetEndCaller=function(caller,method){}
	__getset(0,__proto,'direction',function(){});
	__getset(0,__proto,'isPart',function(){},function(value){});
	__getset(0,__proto,'resPack',function(){});
	__getset(0,__proto,'isDestroyed',function(){});
	__getset(0,__proto,'isActiveAction',function(){},function(value){});
	__getset(0,__proto,'curSortValue',function(){});
	__getset(0,__proto,'defaultResPack',function(){});
	__getset(0,__proto,'sheet',function(){});
	__getset(0,__proto,'rendersheet',function(){});
	__getset(0,__proto,'resscale',function(){});
	__getset(0,__proto,'rnDdir',function(){});
	__getset(0,__proto,'allTime',function(){});
	__getset(0,__proto,'isReverseAutoOver',function(){},function(value){});
	__getset(0,__proto,'partSortList',function(){});
	__getset(0,__proto,'isActiveMode',function(){},function(value){});
	return MAnimationControl;
})(MAnimationControlBase)


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
	}

	__class(TinyButton,'engine.ui.debug.tinyui.TinyButton',_super);
	var __proto=TinyButton.prototype;
	__proto.ClickHandle=function(event){}
	__proto.UpdateShow=function(w,h,color){}
	__proto.MouseOverHandler=function(e){}
	__proto.MouseOutHandler=function(e){}
	__proto.MouseDownHandler=function(e){}
	__proto.MouseUpHandler=function(e){}
	__getset(0,__proto,'text',null,function(value){});
	__getset(0,__proto,'caller',function(){},function(value){});
	__getset(0,__proto,'clickFunc',function(){},function(value){});
	return TinyButton;
})(Sprite)


//class engine.templet.MSkeletonAnimation extends laya.display.Sprite
var MSkeletonAnimation=(function(_super){
	function MSkeletonAnimation(){
		this._templet=null;
		this._restype=0;
		this._filename=null;
		this._loadingkey=null;
		this._skeleton=null;
		MSkeletonAnimation.__super.call(this);
	}

	__class(MSkeletonAnimation,'engine.templet.MSkeletonAnimation',_super);
	var __proto=MSkeletonAnimation.prototype;
	__proto.destroy=function(d){
		(d===void 0)&& (d=true);
	}

	__proto.clear=function(){}
	__proto.SetData=function(restype,filename){}
	__proto.OnError=function(){}
	__proto.OnComplete=function(){}
	__proto.OnStopped=function(){}
	__proto.OnLabelEvent=function(e){}
	__getset(0,__proto,'loadingkey',function(){});
	__getset(0,__proto,'skeleton',function(){});
	__getset(0,__proto,'currAniIndex',function(){});
	__getset(0,__proto,'isParseComplete',function(){});
	return MSkeletonAnimation;
})(Sprite)


//class engine.pui.components.PScene extends laya.display.Scene
var PScene=(function(_super){
	function PScene(){
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		PScene.__super.call(this);
	}

	__class(PScene,'engine.pui.components.PScene',_super);
	var __proto=PScene.prototype;
	__proto.createChildren=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.onViewCreated=function(){}
	__proto.onOpened=function(param){}
	__proto.onClosed=function(type){}
	__proto.onOpen=function(param){}
	__proto.onClose=function(){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	__getset(0,__proto,'layer',function(){});
	return PScene;
})(Scene)


//class engine.animation.MAnimation2DGroup extends engine.layaex.container.MSprite
var MAnimation2DGroup=(function(_super){
	function MAnimation2DGroup(owner,endCaller,endMethod,frameCaller,frameMethod){
		this._ani=null;
		this._partAnimList=null;
		this._owner=null;
		this._end_caller=null;
		this._end_method=null;
		this._frame_caller=null;
		this._frame_medthod=null;
		MAnimation2DGroup.__super.call(this);
	}

	__class(MAnimation2DGroup,'engine.animation.MAnimation2DGroup',_super);
	var __proto=MAnimation2DGroup.prototype;
	Laya.imps(__proto,{"engine.animation.interfaces.IAnimationGroup":true})
	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap){}
	__proto.DoAction=function(actType,dir,loop){
		(loop===void 0)&& (loop=false);
	}

	__proto.BindPart=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){}
	__proto.RemovePart=function(resType,resId,resExtra){}
	__proto.RemoveAllPart=function(){}
	__proto.CheckPartSort=function(){}
	__proto.SortPartFunc=function(a,b){}
	__proto.SetPlaySpeed=function(v){}
	__proto.SetDirection=function(v){}
	__proto.SetAlpha=function(value){}
	__proto.Play=function(start,loop){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
	}

	__proto.Stop=function(){}
	__proto.Pause=function(pause){}
	__proto.GotoAndStop=function(idx){}
	__proto.GotoFrameIdx=function(idx){}
	__proto.GetFrameIdx=function(){}
	__proto.OnPlayEnd=function(){}
	__proto.OnFrameChange=function(idx){}
	__proto.clear=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__getset(0,__proto,'direction',function(){});
	__getset(0,__proto,'alpha',_super.prototype._$get_alpha,function(value){});
	__getset(0,__proto,'partAnimList',function(){});
	__getset(0,__proto,'ani',function(){});
	__getset(0,__proto,'isPlaying',function(){});
	__getset(0,__proto,'curAction',function(){});
	return MAnimation2DGroup;
})(MSprite)


//class engine.animation.MAnimation2D extends engine.layaex.container.MSprite
var MAnimation2D=(function(_super){
	function MAnimation2D(owner,endCaller,endMethod,frameCaller,frameMethod,group){
		this._controler=null;
		this._useDefault=true;
		this._repeatW=0;
		this._repeatH=0;
		this._loadingkey=null;
		this._stopAtIdx=-1;
		this._isloop=false;
		this._owner=null;
		this._group=null;
		this._isClear=false;
		this.isSingleDir=false;
		this._isShow=true;
		this._blend=null;
		this._resscale=1;
		this._renderFrames=null;
		MAnimation2D.__super.call(this);
	}

	__class(MAnimation2D,'engine.animation.MAnimation2D',_super);
	var __proto=MAnimation2D.prototype;
	Laya.imps(__proto,{"engine.res.IAnimationRes":true,"engine.animation.interfaces.IAnimation":true})
	__proto.clear=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.scale=function(sx,sy,speedMode){
		(speedMode===void 0)&& (speedMode=false);
	}

	__proto.SetData=function(resType,resId,resExtra,sortList,actionChangeMap,actionChangeHandler){}
	__proto.DoAction=function(actType,dir,loop){
		(loop===void 0)&& (loop=false);
	}

	__proto.LoadBin=function(){}
	__proto.OnBinLoaded=function(key,res){}
	__proto.OnBinFailed=function(key){}
	__proto.OnTextureLoaded=function(sheetDir){}
	__proto.OnTextureFailed=function(sheetDir){}
	__proto.SetDirection=function(v){}
	__proto.ClearAnimationPlay=function(){}
	__proto.UpdateRenderFrames=function(){}
	__proto.checkShowState=function(){}
	__proto.UpdateScale=function(){}
	__proto.SetPlaySpeed=function(v){}
	__proto.RenderFrame=function(value){}
	__proto.GetFrame=function(value){}
	__proto.SetRepeatSize=function(w,h){}
	__proto.Play=function(start,loop){
		(start===void 0)&& (start=0);
		(loop===void 0)&& (loop=true);
	}

	__proto.Stop=function(){}
	__proto.GotoAndStop=function(idx){}
	__proto.GotoFrameIdx=function(idx){}
	__proto.GetFrameIdx=function(){}
	__proto.CloneCurFrame=function(ret){}
	__proto.SetFrameCaller=function(caller,method){}
	__proto.SetEndCaller=function(caller,method){}
	__proto.GetActType=function(){}
	__proto.GetId=function(){}
	__proto.GetType=function(){}
	__proto.GetExtra=function(){}
	__getset(0,__proto,'scaleX',_super.prototype._$get_scaleX,function(value){});
	__getset(0,__proto,'isNeedDraw',function(){});
	__getset(0,__proto,'loop',function(){});
	__getset(0,__proto,'isActiveMode',function(){},function(value){});
	__getset(0,__proto,'scaleY',_super.prototype._$get_scaleY,function(value){});
	__getset(0,__proto,'isActiveAction',function(){},function(value){});
	__getset(0,__proto,'isPlaying',function(){});
	__getset(0,__proto,'direction',function(){});
	__getset(0,__proto,'isPart',function(){},function(value){});
	__getset(0,__proto,'isReverseAutoOver',function(){},function(value){});
	__getset(0,__proto,'renderDir',function(){});
	__getset(0,__proto,'curSortValue',function(){});
	__getset(0,__proto,'isRepeat',function(){});
	__getset(0,__proto,'curDirFrameIdx',function(){});
	__getset(0,__proto,'resPackType',function(){});
	__getset(0,__proto,'useDefault',function(){},function(value){});
	__getset(0,__proto,'stopAtIdx',function(){});
	__getset(0,__proto,'isPlayReverse',function(){},function(v){});
	__getset(0,__proto,'allTime',function(){});
	__getset(0,__proto,'isloop',function(){});
	__getset(0,__proto,'loadingkey',function(){});
	__getset(0,__proto,'isShow',function(){},function(value){});
	__getset(0,__proto,'controler',function(){});
	return MAnimation2D;
})(MSprite)


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
	}

	__proto.CheckLocalBounding=function(wx,wy){}
	__proto.CalcZOrder=function(){}
	__proto.SetLocalZOrder=function(value){}
	__proto.OnFrame=function(curtime){}
	__proto.GetGridPt=function(){}
	__proto.SetGridPt=function(gx,gy){}
	__getset(0,__proto,'isNonMouseHit',function(){});
	__getset(0,__proto,'pooltype',function(){},function(value){});
	__getset(0,__proto,'gid',function(){});
	__getset(0,__proto,'objectType',function(){});
	return SceneObjectBase;
})(MSprite)


//class engine.scene.chunk.MapChunkShow extends engine.layaex.container.MSprite
var MapChunkShow=(function(_super){
	function MapChunkShow(){
		this._map=null;
		this._meta=null;
		this._sceneWidth=0;
		this._sceneHeight=0;
		this._resId=0;
		this._loadChunkLock=true;
		this._chunkControl=null;
		this._thumbnail=null;
		MapChunkShow.__super.call(this);
	}

	__class(MapChunkShow,'engine.scene.chunk.MapChunkShow',_super);
	var __proto=MapChunkShow.prototype;
	Laya.imps(__proto,{"engine.base.tile.IMTitleContainer":true})
	__proto.Init=function(map){}
	__proto.Clear=function(){}
	__proto.reConnect=function(){}
	__proto.GetChunkUrls=function(sceneRect){}
	__proto.LoadChunk=function(cx,cy){}
	__proto.OnFrame=function(curtime){}
	__proto.ChangeMap=function(meta,$thumbnail){}
	__proto.SetLoadChunkLock=function(v){}
	__getset(0,__proto,'thumbnail',function(){});
	return MapChunkShow;
})(MSprite)


//class engine.pui.componentext.PGridGroup extends laya.ui.UIComponent
var PGridGroup=(function(_super){
	function PGridGroup(){
		this._layoutModel=0;
		this._lineMaxNum=-1;
		this._marginh=2;
		this._marginv=2;
		this._skin=null;
		this._gridW=0;
		this._gridH=0;
		PGridGroup.__super.call(this);
		this._grids=[];
	}

	__class(PGridGroup,'engine.pui.componentext.PGridGroup',_super);
	var __proto=PGridGroup.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.AddItem=function(data,param){}
	__proto.LayoutGroup=function(){}
	__proto._LayoutGroup=function(){}
	__proto.Clean=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'layoutModel',function(){},function(value){});
	__getset(0,__proto,'lineMaxNum',function(){},function(value){});
	__getset(0,__proto,'marginh',function(){},function(value){});
	__getset(0,__proto,'width',function(){},_super.prototype._$set_width);
	__getset(0,__proto,'marginv',function(){},function(value){});
	__getset(0,__proto,'skin',function(){},function(value){});
	__getset(0,__proto,'height',function(){},_super.prototype._$set_height);
	__getset(0,__proto,'gridW',null,function(value){});
	__getset(0,__proto,'gridH',null,function(value){});
	__getset(0,__proto,'grids',function(){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PGridGroup;
})(UIComponent)


//class engine.ui.debug.TinyMessageBox extends engine.ui.debug.tinyui.TinyPanel
var TinyMessageBox=(function(_super){
	function TinyMessageBox(){
		this._btnClose=null;
		this._txt=null;
		TinyMessageBox.__super.call(this);
	}

	__class(TinyMessageBox,'engine.ui.debug.TinyMessageBox',_super);
	var __proto=TinyMessageBox.prototype;
	__proto.SetData=function(txt){}
	__proto.CloseHandler=function(e){}
	TinyMessageBox.Show=function(txt){}
	return TinyMessageBox;
})(TinyPanel)


//class engine.templet.MTemplet extends laya.ani.bone.Templet
var MTemplet=(function(_super){
	function MTemplet(){
		MTemplet.__super.call(this);
	}

	__class(MTemplet,'engine.templet.MTemplet',_super);
	var __proto=MTemplet.prototype;
	__proto.destroy=function(){}
	__proto.loadAni=function(url){}
	__proto.onComplete=function(content){}
	__proto._textureComplete=function(){}
	__getset(0,__proto,'skBufferUrl',function(){});
	return MTemplet;
})(Templet)


//class engine.pui.components.PHTMLDivElement extends laya.html.dom.HTMLDivElement
var PHTMLDivElement=(function(_super){
	function PHTMLDivElement(){
		PHTMLDivElement.__super.call(this);
	}

	__class(PHTMLDivElement,'engine.pui.components.PHTMLDivElement',_super);
	var __proto=PHTMLDivElement.prototype;
	__proto._afterInited=function(){}
	__getset(0,__proto,'innerHTML',_super.prototype._$get_innerHTML,function(value){});
	return PHTMLDivElement;
})(HTMLDivElement)


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
	}

	__proto.OnBitmapLoaded=function(font){}
	__getset(0,__proto,'text',_super.prototype._$get_text,function(value){});
	__getset(0,__proto,'font',_super.prototype._$get_font,function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'initText',function(){},function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PText;
})(Text)


//class engine.pui.components.PView extends laya.ui.View
var PView=(function(_super){
	function PView(){
		this.hasDi=false;
		this.isModal=false;
		this.modalUnclose=false;
		this.isSimpleModal=false;
		this.modelCaller=null;
		this.modelMethod=null;
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		this._di=null;
		PView.__super.call(this);
	}

	__class(PView,'engine.pui.components.PView',_super);
	var __proto=PView.prototype;
	__proto.createChildren=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.onViewCreated=function(){}
	__proto.onOpened=function(param){}
	__proto.onClosed=function(type){}
	__proto.onOpen=function(param){}
	__proto.onClose=function(){}
	__proto.open=function(closeOther,param){
		(closeOther===void 0)&& (closeOther=true);
	}

	__proto.close=function(type){}
	__proto._onClick=function(e){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	__getset(0,__proto,'layer',function(){});
	return PView;
})(View)


//class engine.pui.components.PSlider extends laya.ui.Slider
var PSlider=(function(_super){
	function PSlider(skin){
		PSlider.__super.call(this);
	}

	__class(PSlider,'engine.pui.components.PSlider',_super);
	return PSlider;
})(Slider)


//class engine.pui.components.PClip extends laya.ui.Clip
var PClip=(function(_super){
	function PClip(url,clipX,clipY){
		PClip.__super.call(this);
		(clipX===void 0)&& (clipX=1);
		(clipY===void 0)&& (clipY=1);
	}

	__class(PClip,'engine.pui.components.PClip',_super);
	return PClip;
})(Clip)


//class engine.pui.components.PBox extends laya.ui.Box
var PBox=(function(_super){
	function PBox(){
		PBox.__super.call(this);
	}

	__class(PBox,'engine.pui.components.PBox',_super);
	var __proto=PBox.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PBox;
})(Box)


//class engine.pui.components.PHSlider extends laya.ui.Slider
var PHSlider=(function(_super){
	function PHSlider(skin){
		PHSlider.__super.call(this);
	}

	__class(PHSlider,'engine.pui.components.PHSlider',_super);
	return PHSlider;
})(Slider)


//class engine.pui.components.PComboBox extends laya.ui.ComboBox
var PComboBox=(function(_super){
	function PComboBox(skin,labels){
		PComboBox.__super.call(this);
	}

	__class(PComboBox,'engine.pui.components.PComboBox',_super);
	var __proto=PComboBox.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PComboBox;
})(ComboBox)


//class engine.pui.components.PLabel extends laya.ui.Label
var PLabel=(function(_super){
	function PLabel(text){
		PLabel.__super.call(this);
		(text===void 0)&& (text="");
	}

	__class(PLabel,'engine.pui.components.PLabel',_super);
	var __proto=PLabel.prototype;
	__proto.createChildren=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	__getset(0,__proto,'initText',function(){},function(value){});
	__getset(0,__proto,'textW',function(){});
	__getset(0,__proto,'textH',function(){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	return PLabel;
})(Label)


//class engine.pui.components.PImage extends laya.ui.Image
var PImage=(function(_super){
	function PImage(skin){
		this._initSkin=null;
		this._tipsHandler=null;
		PImage.__super.call(this);
	}

	__class(PImage,'engine.pui.components.PImage',_super);
	var __proto=PImage.prototype;
	__proto.SetTips=function(tipsData,tipPanel){}
	__proto.DisposeTips=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'skin',_super.prototype._$get_skin,function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PImage;
})(Image)


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
		PButton.__super.call(this);
		(label===void 0)&& (label="");
	}

	__class(PButton,'engine.pui.components.PButton',_super);
	var __proto=PButton.prototype;
	__proto.createChildren=function(){}
	__proto.createText=function(){}
	__proto.BeginFeedBack=function(){}
	__proto.EndFeedBack=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'stateNum',_super.prototype._$get_stateNum,function(value){});
	__getset(0,__proto,'isEnabled',function(){},function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PButton;
})(Button)


//class engine.pui.components.PScrollBar extends laya.ui.ScrollBar
var PScrollBar=(function(_super){
	function PScrollBar(skin){
		PScrollBar.__super.call(this);
	}

	__class(PScrollBar,'engine.pui.components.PScrollBar',_super);
	return PScrollBar;
})(ScrollBar)


//class engine.pui.components.PHScrollBar extends laya.ui.ScrollBar
var PHScrollBar=(function(_super){
	function PHScrollBar(){
		PHScrollBar.__super.call(this);;
	}

	__class(PHScrollBar,'engine.pui.components.PHScrollBar',_super);
	var __proto=PHScrollBar.prototype;
	__proto.initialize=function(){}
	return PHScrollBar;
})(ScrollBar)


//class engine.pui.components.PProgressBar extends laya.ui.ProgressBar
var PProgressBar=(function(_super){
	function PProgressBar(skin){
		PProgressBar.__super.call(this);
	}

	__class(PProgressBar,'engine.pui.components.PProgressBar',_super);
	var __proto=PProgressBar.prototype;
	__proto._skinLoaded=function(){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PProgressBar;
})(ProgressBar)


//class engine.pui.components.PVSlider extends engine.pui.components.PSlider
var PVSlider=(function(_super){
	function PVSlider(){
		PVSlider.__super.call(this);
	}

	__class(PVSlider,'engine.pui.components.PVSlider',_super);
	return PVSlider;
})(PSlider)


//class engine.pui.components.PCheckBox extends laya.ui.CheckBox
var PCheckBox=(function(_super){
	function PCheckBox(skin,label){
		this.preCheck=null;
		this.preCheckCaller=null;
		PCheckBox.__super.call(this);
		(label===void 0)&& (label="");
	}

	__class(PCheckBox,'engine.pui.components.PCheckBox',_super);
	var __proto=PCheckBox.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.createChildren=function(){}
	__proto.createText=function(){}
	__proto.onMouse=function(e){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PCheckBox;
})(CheckBox)


//class engine.pui.components.PRadio extends laya.ui.Radio
var PRadio=(function(_super){
	function PRadio(skin,label){
		this.tabBindPanel=null;
		this.tabOpenParam=null;
		this.tabTag=0;
		PRadio.__super.call(this);
		(label===void 0)&& (label="");
	}

	__class(PRadio,'engine.pui.components.PRadio',_super);
	var __proto=PRadio.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.initialize=function(){}
	__proto.onClick=function(e){}
	__proto.createText=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'btnAutoSize',null,function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PRadio;
})(Radio)


//class engine.pui.components.PFontClip extends laya.ui.FontClip
var PFontClip=(function(_super){
	function PFontClip(skin,sheet){
		PFontClip.__super.call(this);
	}

	__class(PFontClip,'engine.pui.components.PFontClip',_super);
	var __proto=PFontClip.prototype;
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PFontClip;
})(FontClip)


//class engine.pui.componentext.PGrid extends engine.pui.components.PImage
var PGrid=(function(_super){
	function PGrid(skin){
		this._gridType=0;
		this._gridId=0;
		this._iconWidth=0;
		this._iconHeight=0;
		this._coolDown=null;
		this._imgIcon=null;
		this._imgType=null;
		this._iconEff=null;
		this._topText=null;
		this._text=null;
		this._textOffx=0;
		this._textOffy=0;
		PGrid.__super.call(this);
		this._textLayout=4;
		this._backChilds=[];
		this._fixedChilds=[];
		this._topChild=[];
		this._flagChilds=[];
	}

	__class(PGrid,'engine.pui.componentext.PGrid',_super);
	var __proto=PGrid.prototype;
	__proto.initGrid=function(id,type){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.Clean=function(){}
	__proto.DisposeCoolDown=function(){}
	__proto.CooldownFinishHandler=function(event){}
	__proto.SetIcon=function(url,w,h){}
	__proto.SetIconType=function(url,w,h){
		(w===void 0)&& (w=38);
		(h===void 0)&& (h=38);
	}

	__proto.SetIconGray=function(value){}
	__proto.CloneGridIcon=function(){}
	__proto.DisposeIcon=function(){}
	__proto.DisposeIconEff=function(){}
	__proto.setTopText=function(str,color,strokeNum,strokeC){
		(color===void 0)&& (color="#79421C");
		(strokeNum===void 0)&& (strokeNum=1);
		(strokeC===void 0)&& (strokeC="#080808");
	}

	__proto.DisposeTopText=function(){}
	__proto.SetText=function(str,color){}
	__proto.SetTextLayout=function(type,offx,offy){
		(offx===void 0)&& (offx=0);
		(offy===void 0)&& (offy=0);
	}

	__proto.UpdateTextLayout=function(){}
	__proto.DisposeText=function(){}
	__proto.AddBackDisplay=function(child){}
	__proto.AddFixedDisplay=function(child){}
	__proto.AddTopDisplay=function(child){}
	__proto.AddFlagDisplay=function(child){}
	__proto.DisposeFlagDisplay=function(){}
	__proto.RemoveDisplay=function(child){}
	__proto.DisposeDisplay=function(){}
	__proto.DisposeFixDisplay=function(){}
	__proto.SortSubCom=function(){}
	__proto.ReleaySort=function(){}
	__proto.Clone=function(){}
	__getset(0,__proto,'isCoolDown',function(){});
	__getset(0,__proto,'coolDown',null,function($coolDown){});
	__getset(0,__proto,'text',function(){});
	__getset(0,__proto,'gridContent',function(){});
	__getset(0,__proto,'coolRemainTime',function(){});
	__getset(0,__proto,'iconEff',function(){},function(value){});
	__getset(0,__proto,'iconImg',function(){});
	__getset(0,__proto,'typeImg',function(){});
	__getset(0,__proto,'topText',function(){});
	__getset(0,__proto,'gridType',function(){});
	__getset(0,__proto,'gridId',function(){});
	__getset(0,__proto,'iconWidth',function(){},function(value){});
	__getset(0,__proto,'iconHeight',function(){},function(value){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	return PGrid;
})(PImage)


//class engine.pui.components.PTextInput extends laya.ui.TextInput
var PTextInput=(function(_super){
	function PTextInput(text){
		PTextInput.__super.call(this);
		(text===void 0)&& (text="");
	}

	__class(PTextInput,'engine.pui.components.PTextInput',_super);
	return PTextInput;
})(TextInput)


//class engine.pui.components.PVScrollBar extends engine.pui.components.PScrollBar
var PVScrollBar=(function(_super){
	function PVScrollBar(){
		PVScrollBar.__super.call(this);
	}

	__class(PVScrollBar,'engine.pui.components.PVScrollBar',_super);
	return PVScrollBar;
})(PScrollBar)


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


//class engine.pui.components.PPanel extends laya.ui.Panel
var PPanel=(function(_super){
	function PPanel(){
		this._fixContentWidth=-1;
		this._fixContentHeight=-1;
		this._trickModel=false;
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
		this._stopPage=false;
		this._scrollTween=null;
		PPanel.__super.call(this);
	}

	__class(PPanel,'engine.pui.components.PPanel',_super);
	var __proto=PPanel.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
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
	}

	__proto.SetStopPage=function(stopPage){}
	__proto.SetScrollButton=function(left,right,up,down){}
	__proto.DealScrollBtnEvent=function(add){}
	__proto.ClickHScroll=function(e){}
	__proto.ClickVScroll=function(e){}
	__proto._TweenScroll=function(isV,isLeft){}
	__proto.ClearScrollTween=function(){}
	__proto.OnVScrollEnd=function(){}
	__proto.OnHScrollEnd=function(){}
	__proto._ScrollEndFix=function(isV){}
	__proto.RemoveAllObject=function(doDispose){
		(doDispose===void 0)&& (doDispose=false);
	}

	__proto.GetAllObject=function(){}
	__proto.SetListCellData=function(list,lineNum,vMar,hMar,offX,offY,fixW,fixH){
		(lineNum===void 0)&& (lineNum=1);
		(vMar===void 0)&& (vMar=0);
		(hMar===void 0)&& (hMar=0);
		(offX===void 0)&& (offX=0);
		(offY===void 0)&& (offY=0);
		(fixW===void 0)&& (fixW=-1);
		(fixH===void 0)&& (fixH=-1);
	}

	__proto.LayoutCellData=function(sortHand,lineNum,vMar,hMar,offX,offY,fixW,fixH){
		(lineNum===void 0)&& (lineNum=1);
		(vMar===void 0)&& (vMar=0);
		(hMar===void 0)&& (hMar=0);
		(offX===void 0)&& (offX=0);
		(offY===void 0)&& (offY=0);
		(fixW===void 0)&& (fixW=-1);
		(fixH===void 0)&& (fixH=-1);
	}

	__proto.checkAllTrick=function(){}
	__proto.checkTrick=function(trick){}
	__proto.checkArrow=function(){}
	__proto.addChild=function(child){}
	__proto.addChildAt=function(child,index){}
	__proto.refresh=function(){}
	__proto.onScrollBarChange=function(scrollBar){}
	__proto._sizeChanged=function(){}
	__getset(0,__proto,'arrowDown',function(){});
	__getset(0,__proto,'contentWidth',function(){});
	__getset(0,__proto,'contentHeight',function(){});
	__getset(0,__proto,'trickModel',function(){},function(value){});
	__getset(0,__proto,'arrowUp',function(){});
	__getset(0,__proto,'arrowLeft',function(){});
	__getset(0,__proto,'arrowRight',function(){});
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'fixContentWidth',function(){},function(value){});
	__getset(0,__proto,'fixContentHeight',function(){},function(value){});
	__getset(0,__proto,'vScrollBarSkin',_super.prototype._$get_vScrollBarSkin,function(value){});
	__getset(0,__proto,'hScrollBarSkin',_super.prototype._$get_hScrollBarSkin,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
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


//class engine.pui.components.PDialog extends laya.ui.Dialog
var PDialog=(function(_super){
	function PDialog(){
		this._isViewCreated=false;
		this._callOpenParam=null;
		this._callOpen=false;
		this.modalUnclose=false;
		this.modelCaller=null;
		this.modelMethod=null;
		PDialog.__super.call(this);
	}

	__class(PDialog,'engine.pui.components.PDialog',_super);
	var __proto=PDialog.prototype;
	__proto.createChildren=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.onViewCreated=function(){}
	__proto.onOpened=function(param){}
	__proto.onClosed=function(type){}
	__proto.onOpen=function(param){}
	__proto.onClose=function(){}
	__proto.SetModelMaskUnClose=function(v){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
	__getset(0,__proto,'layer',function(){});
	return PDialog;
})(Dialog)


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
	__proto.createItem=function(skin,label){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
	}

	__proto.itemClick=function(index){}
	__proto.getSelectTag=function(){}
	__proto.getItemByTag=function(tag){}
	__proto.getTagIndex=function(tag){}
	__getset(0,__proto,'x',_super.prototype._$get_x,function(value){});
	__getset(0,__proto,'y',_super.prototype._$get_y,function(value){});
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
