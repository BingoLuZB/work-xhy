
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Bean=engine.base.data.Bean,BlendMode=laya.webgl.canvas.BlendMode,BlurFilter=laya.filters.BlurFilter;
	var Browser=laya.utils.Browser,ByteArray=engine.base.data.ByteArray,CallbackUtil=engine.utils.CallbackUtil;
	var ChibiBean=net.message.chibi.ChibiBean,ChibiTaskBean=net.message.chibi.ChibiTaskBean,ClassUtils=laya.utils.ClassUtils;
	var ColorFilter=laya.filters.ColorFilter,Dictionary=engine.base.container.Dictionary,EnumActionType=engine.animation.define.EnumActionType;
	var Event=laya.events.Event,EventCenter=boots.EventCenter,FaQiBean=net.message.xuannv.FaQiBean,FitEquipBean=net.message.fit.FitEquipBean;
	var GameCfg=boots.GameCfg,GameEvent=boots.GameEvent,GameFont=boots.GameFont,GlobalData=datasets.GlobalData;
	var GlowFilter=laya.filters.GlowFilter,GoodsBean=net.message.goods.GoodsBean,GoodsNumBean=net.message.goods.GoodsNumBean;
	var HTMLDivElement=laya.html.dom.HTMLDivElement,Handler=laya.utils.Handler,HashMap=engine.supports.utils.HashMap;
	var InitBean=net.message.login.InitBean,ItemBean=net.message.escort.ItemBean,JSONUtil=engine.supports.utils.JSONUtil;
	var Label=laya.ui.Label,LanUtil=engine.supports.utils.LanUtil,LayoutUtil=engine.ui.utils.LayoutUtil,Loader=laya.net.Loader;
	var MAnimation2D=engine.animation.MAnimation2D,MAnimationUtil=engine.res.MAnimationUtil,MDirection=engine.base.define.MDirection;
	var MSheetAnimationGC=engine.res.MSheetAnimationGC,MSkeletonAnimation=engine.templet.MSkeletonAnimation,MSprite=engine.layaex.container.MSprite;
	var MTweenFunc=engine.base.define.MTweenFunc,Matrix=laya.maths.Matrix,ObjectPool=engine.base.pool.ObjectPool;
	var PGrid=engine.pui.componentext.PGrid,PGridGroup=engine.pui.componentext.PGridGroup,PacketBean=net.message.packet.PacketBean;
	var Point$1=laya.maths.Point,Q_achievement_type=datasets.bean.Q_achievement_type,Q_achievement_typeContainer=datasets.container.Q_achievement_typeContainer;
	var Q_activities=datasets.bean.Q_activities,Q_activitiesContainer=datasets.container.Q_activitiesContainer;
	var Q_amuletContainer=datasets.container.Q_amuletContainer,Q_auction=datasets.bean.Q_auction,Q_auctionContainer=datasets.container.Q_auctionContainer;
	var Q_auction_param=datasets.bean.Q_auction_param,Q_auction_paramContainer=datasets.container.Q_auction_paramContainer;
	var Q_awakening=datasets.bean.Q_awakening,Q_awakeningContainer=datasets.container.Q_awakeningContainer,Q_chapter=datasets.bean.Q_chapter;
	var Q_chapterContainer=datasets.container.Q_chapterContainer,Q_compose=datasets.bean.Q_compose,Q_composeContainer=datasets.container.Q_composeContainer;
	var Q_dungeon_param=datasets.bean.Q_dungeon_param,Q_dungeon_paramContainer=datasets.container.Q_dungeon_paramContainer;
	var Q_effect_model=datasets.bean.Q_effect_model,Q_effect_modelContainer=datasets.container.Q_effect_modelContainer;
	var Q_equip=datasets.bean.Q_equip,Q_equipContainer=datasets.container.Q_equipContainer,Q_equip_promote=datasets.bean.Q_equip_promote;
	var Q_equip_promoteContainer=datasets.container.Q_equip_promoteContainer,Q_equip_suit=datasets.bean.Q_equip_suit;
	var Q_equip_suitContainer=datasets.container.Q_equip_suitContainer,Q_fashion=datasets.bean.Q_fashion,Q_fashionContainer=datasets.container.Q_fashionContainer;
	var Q_fight_paramContainer=datasets.container.Q_fight_paramContainer,Q_global=datasets.bean.Q_global,Q_globalContainer=datasets.container.Q_globalContainer;
	var Q_guide=datasets.bean.Q_guide,Q_guideContainer=datasets.container.Q_guideContainer,Q_guildwar_paramContainer=datasets.container.Q_guildwar_paramContainer;
	var Q_hongyan=datasets.bean.Q_hongyan,Q_hongyanContainer=datasets.container.Q_hongyanContainer,Q_hongyan_level=datasets.bean.Q_hongyan_level;
	var Q_hongyan_levelContainer=datasets.container.Q_hongyan_levelContainer,Q_install=datasets.bean.Q_install;
	var Q_installContainer=datasets.container.Q_installContainer,Q_item=datasets.bean.Q_item,Q_itemContainer=datasets.container.Q_itemContainer;
	var Q_jiuchongtian_rank_prize=datasets.bean.Q_jiuchongtian_rank_prize,Q_jiuchongtian_rank_times=datasets.bean.Q_jiuchongtian_rank_times;
	var Q_jiuchongtian_score_prize=datasets.bean.Q_jiuchongtian_score_prize,Q_kongchengji=datasets.bean.Q_kongchengji;
	var Q_kongchengjiContainer=datasets.container.Q_kongchengjiContainer,Q_kongchengji_paramContainer=datasets.container.Q_kongchengji_paramContainer;
	var Q_level_paramContainer=datasets.container.Q_level_paramContainer,Q_map=datasets.bean.Q_map,Q_mapContainer=datasets.container.Q_mapContainer;
	var Q_miji_grid=datasets.bean.Q_miji_grid,Q_miji_gridContainer=datasets.container.Q_miji_gridContainer,Q_miji_paramContainer=datasets.container.Q_miji_paramContainer;
	var Q_military=datasets.bean.Q_military,Q_militaryContainer=datasets.container.Q_militaryContainer,Q_mission_base=datasets.bean.Q_mission_base;
	var Q_mission_baseContainer=datasets.container.Q_mission_baseContainer,Q_monster=datasets.bean.Q_monster;
	var Q_monsterContainer=datasets.container.Q_monsterContainer,Q_monster_show=datasets.bean.Q_monster_show;
	var Q_monster_showContainer=datasets.container.Q_monster_showContainer,Q_monster_talk=datasets.bean.Q_monster_talk;
	var Q_monster_talkContainer=datasets.container.Q_monster_talkContainer,Q_newfuncContainer=datasets.container.Q_newfuncContainer;
	var Q_packet_paramContainer=datasets.container.Q_packet_paramContainer,Q_payload=datasets.bean.Q_payload;
	var Q_payloadContainer=datasets.container.Q_payloadContainer,Q_payload_param=datasets.bean.Q_payload_param;
	var Q_payload_paramContainer=datasets.container.Q_payload_paramContainer,Q_pet=datasets.bean.Q_pet,Q_petContainer=datasets.container.Q_petContainer;
	var Q_pet_group=datasets.bean.Q_pet_group,Q_pet_groupContainer=datasets.container.Q_pet_groupContainer,Q_pet_level=datasets.bean.Q_pet_level;
	var Q_pet_levelContainer=datasets.container.Q_pet_levelContainer,Q_pet_param=datasets.bean.Q_pet_param,Q_pet_paramContainer=datasets.container.Q_pet_paramContainer;
	var Q_question_bank=datasets.bean.Q_question_bank,Q_question_bankContainer=datasets.container.Q_question_bankContainer;
	var Q_question_bank_rewardContainer=datasets.container.Q_question_bank_rewardContainer,Q_rollcoin=datasets.bean.Q_rollcoin;
	var Q_skill_model=datasets.bean.Q_skill_model,Q_skill_modelContainer=datasets.container.Q_skill_modelContainer;
	var Q_treasureContainer=datasets.container.Q_treasureContainer,Q_treasure_paramContainer=datasets.container.Q_treasure_paramContainer;
	var Q_tuisong=datasets.bean.Q_tuisong,Q_upgrade=datasets.bean.Q_upgrade,Q_upgradeContainer=datasets.container.Q_upgradeContainer;
	var Q_upgrade_typeContainer=datasets.container.Q_upgrade_typeContainer,Q_xilian_typeContainer=datasets.container.Q_xilian_typeContainer;
	var Q_xuannv_faqiContainer=datasets.container.Q_xuannv_faqiContainer,Q_xuannv_feisheng=datasets.bean.Q_xuannv_feisheng;
	var Q_xuannv_feishengContainer=datasets.container.Q_xuannv_feishengContainer,Q_xuannv_paramContainer=datasets.container.Q_xuannv_paramContainer;
	var Q_zhanwen_paramContainer=datasets.container.Q_zhanwen_paramContainer,Q_zhuansheng_paramContainer=datasets.container.Q_zhuansheng_paramContainer;
	var Q_zip=datasets.bean.Q_zip,Q_zipContainer=datasets.container.Q_zipContainer,QuanMinBossDungeonBean=net.message.dungeon.QuanMinBossDungeonBean;
	var ResGetVideosMessage=net.message.video.ResGetVideosMessage,ResourceVersionEx=boots.ResourceVersionEx,SimplePool=engine.base.pool.spool.SimplePool;
	var SingleBean=net.message.marriage.SingleBean,SkillBean=net.message.skill.SkillBean,SoulBoyBean=net.message.soulboy.SoulBoyBean;
	var SoulMatch=net.message.soulboy.SoulMatch,SoulMatchHun=net.message.soulboy.SoulMatchHun,Sprite=laya.display.Sprite;
	var Text=laya.display.Text,Texture=laya.resource.Texture,Texture2D=laya.webgl.resource.Texture2D,ToolBase=engine.tool.ToolBase;
	var ToolMap=engine.tool.ToolMap,UITool=engine.utils.UITool,URL=laya.net.URL,VideoBean=net.message.video.VideoBean;
	var XiLianBean=net.message.xilian.XiLianBean,XuanNvBean=net.message.xuannv.XuanNvBean,YeWaiBossDungeonBean=net.message.dungeon.YeWaiBossDungeonBean;
	var ZhiZhunBossBean=net.message.dungeon.ZhiZhunBossBean,long=engine.base.data.long;
Laya.interface('enem.com.game.items.cfg.IItemConfig');
Laya.interface('enem.com.base.enter.proload.IPreloadTask');
/**
*飞升配置
*/
//class enem.com.game.gear.vo.GearFeisCfg
var GearFeisCfg=(function(){
	function GearFeisCfg(){
		this.stages=[];
	}

	__class(GearFeisCfg,'enem.com.game.gear.vo.GearFeisCfg');
	var __proto=GearFeisCfg.prototype;
	__proto.Init=function(){
		this.stages.length=0;
		var prestage=-1;
		var cfg;
		for (var i=0;i < Q_xuannv_feishengContainer.list.length;++i){
			var model=Q_xuannv_feishengContainer.list[i];
			if (model.q_stage > prestage){
				cfg=new GearFeisStageCfg();
				cfg.name=model.q_stage_name;
				cfg.stage=model.q_stage;
				cfg.start=model.q_level;
				prestage=model.q_stage;
				cfg.AddSub(model);
				this.stages.push(cfg);
			}
			else {
				cfg.AddSub(model);
				cfg.end=Math.max(model.q_level,cfg.end);
			}
		}
		if (cfg.end==0){
			cfg.end=GearFeisCfg.GetMaxLevel(10);
			cfg.subs[cfg.subs.length-1].end=cfg.end;
		}
	}

	/**获取阶段配置**/
	__proto.GetStageByLevel=function(level){
		for (var i=0;i < this.stages.length;++i){
			if (this.stages[i].Contains(level))return this.stages[i];
		}
		return null;
	}

	/**获取阶段配置**/
	__proto.GetStage=function(stage){
		for (var i=0;i < this.stages.length;++i){
			if (this.stages[i].stage==stage)return this.stages[i];
		}
		return null;
	}

	/**当前是哪个阶段**/
	__proto.curStage=function(level){
		return this.GetStageByLevel(level).stage;
	}

	GearFeisCfg.GetMaxLevel=function(type){
		return GearFeisCfg.GetConfig(type).maxlevel;
	}

	GearFeisCfg.GetConfig=function(type){
		if (GearFeisCfg._upgradeConfigs[type]==null){
			var cfg=new UpgradeConfig(type);
			GearFeisCfg._upgradeConfigs[type]=cfg;
		}
		return GearFeisCfg._upgradeConfigs[type];
	}

	GearFeisCfg._upgradeConfigs=[];
	return GearFeisCfg;
})()


//class enem.com.game.auction.AucEnum.QualityEnum
var QualityEnum=(function(){
	function QualityEnum(){}
	__class(QualityEnum,'enem.com.game.auction.AucEnum.QualityEnum');
	QualityEnum.AUCALL=-2;
	QualityEnum.AUCMY=-1;
	QualityEnum.BAISE=0;
	QualityEnum.LVSE=1;
	QualityEnum.LANSE=2;
	QualityEnum.ZISE=3;
	QualityEnum.CHENGSE=4;
	QualityEnum.HONGSE=5;
	QualityEnum.JINSE=6;
	return QualityEnum;
})()


/**
*物品tips打开类型
*
*@author Administrator
*/
//class enem.com.game.items.enum.EnumTipsOpen
var EnumTipsOpen=(function(){
	function EnumTipsOpen(){}
	__class(EnumTipsOpen,'enem.com.game.items.enum.EnumTipsOpen');
	EnumTipsOpen.SHOW=1;
	EnumTipsOpen.WEAR=2;
	EnumTipsOpen.BUY=3;
	EnumTipsOpen.FIT_EQUIP_SELECT=4;
	EnumTipsOpen.FIT_EQUIP_WEAR=5;
	return EnumTipsOpen;
})()


/**
*背包工具类
*/
//class enem.com.game.backpack.BackpackUtil
var BackpackUtil=(function(){
	function BackpackUtil(){}
	__class(BackpackUtil,'enem.com.game.backpack.BackpackUtil');
	BackpackUtil.ToKey=function(index,cfgid,ret){
		var model=Q_itemContainer.GetValue(cfgid);
		if (!model){
			return null;
		}
		return BackpackUtil.ToKey2(model.q_packet,index,ret);
	}

	BackpackUtil.ToKey2=function(packey,index,ret){
		if (!ret)ret=long.create0(packey,index);
		else ret.SetRawData(index,packey);
		return ret;
	}

	BackpackUtil.ToKeyLong=function(packey,index,ret){
		ret.SetRawData(index,packey);
		return ret;
	}

	BackpackUtil.AddItemGetNotice=function(mid,num,isChangeLayer,funcuse,func){
		(isChangeLayer===void 0)&& (isChangeLayer=false);
		func.apply(funcuse,[mid,num,-1,isChangeLayer])
	}

	BackpackUtil.GetMaxCapacity=function(){
		return parseInt(Q_packet_paramContainer.GetValue(5).q_value);
	}

	BackpackUtil.GetBaseCapacity=function(){
		return parseInt(Q_packet_paramContainer.GetValue(6).q_value);
	}

	BackpackUtil.GetUpCapacityNeedMoney=function(capacity,to){
		if (Browser.onMiniGame)
			return 1;
		var formula=Q_packet_paramContainer.GetValue(4).q_value;
		var ret=0;
		var base=BackpackUtil.GetBaseCapacity();
		while (capacity < to){
			ret+=FormulaUtil.Compute(formula,{capacity:capacity});
			capacity+=base;
		}
		return ret;
	}

	BackpackUtil.EquipSort=function(a,b){
		var q1=a.quality;
		var q2=a.quality;
		return q1 > q2 ?-1 :(q1 < q2 ? 1 :0);
	}

	BackpackUtil.ItemSort=function(a,b){
		var m1=a.modelId;
		var m2=b.modelId;
		return m1 > m2 ?-1 :(m1 < m2 ? 1 :0);
	}

	BackpackUtil.sortRag2=function(a,b){
		if ((a instanceof enem.com.game.items.obj.ItemZhoushu )){
			if ((b instanceof enem.com.game.items.obj.ItemZhoushu )){
				return BackpackUtil.ZhanWenSort(a,b);
			}
			else {
				return 1;
			}
		}
		else {
			if ((b instanceof enem.com.game.items.obj.ItemZhoushu )){
				return-1
			}
			else {
				return a.quality > b.quality ?-1 :1;
			}
		}
		return 0;
	}

	BackpackUtil.ZhanWenSort=function(a,b){
		var qa=a.quality;
		var qb=b.quality;
		var sa=a.style;
		var sb=b.style;
		var al=a.lv;
		var bl=b.lv;
		if (qa !=qb)
			return qa > qb ?-1 :1;
		if (sa !=sb)
			return sa > sb ?-1 :1;
		if (al !=bl)
			return al > bl ?-1 :1;
		return 0;
	}

	BackpackUtil.AutoRongLianCon=function(){
		return [90,true];
		if (Q_packet_paramContainer.GetValue(7).q_value){
			return JSONUtil.decode(Q_packet_paramContainer.GetValue(7).q_value);
		}
		return null;
	}

	BackpackUtil.getClipNeedNum=function(_item){
		var obj=JSONUtil.decode(Q_itemContainer.GetValue(_item.modelId).q_param);
		return obj?obj.need_num:0;
	}

	return BackpackUtil;
})()


//class enem.com.game.fashion.EnumFashion
var EnumFashion=(function(){
	function EnumFashion(){}
	__class(EnumFashion,'enem.com.game.fashion.EnumFashion');
	EnumFashion.fashion2FuncID=function(fashionType){
		switch (fashionType){
			case 1:
				return 0;
			case 2:
				return 138;
			case 3:
				return 12;
			case 4:
				return 17;
			case 5:
				return 24;
			case 6:
				return 13;
			case 7:
				return 36;
			case 8:
				return 35;
			case 9:
				return 43;
			case 10:
				return 199;
			case 11:
				return 198;
			case 12:
				return 41;
			}
		return 0;
	}

	EnumFashion.FASHION_TYPE_CLOTH=1;
	EnumFashion.FASHION_TYPE_WEAPON=2;
	EnumFashion.FASHION_TYPE_HORSE=3;
	EnumFashion.FASHION_TYPE_SPRITE=4;
	EnumFashion.FASHION_TYPE_TITLE=5;
	EnumFashion.FASHION_TYPE_WING=6;
	EnumFashion.FASHION_TYPE_RING=7;
	EnumFashion.FASHION_TYPE_GUARD=8;
	EnumFashion.FASHION_TYPE_GEAR_FW=9;
	EnumFashion.FASHION_TYPE_BEAUTY_LQ=10;
	EnumFashion.FASHION_TYPE_BEAUTY_FZ=11;
	EnumFashion.FASHION_TYPE_GEAR=12;
	__static(EnumFashion,
	['SINGLE_ROLE_TYPES',function(){return this.SINGLE_ROLE_TYPES=[3,4,7,8,9];}
	]);
	return EnumFashion;
})()


//class enem.com.game.gear.enums.EnumFaQi
var EnumFaQi=(function(){
	function EnumFaQi(){}
	__class(EnumFaQi,'enem.com.game.gear.enums.EnumFaQi');
	EnumFaQi.FAQI1=1;
	EnumFaQi.FAQI2=2;
	EnumFaQi.FAQI3=3;
	EnumFaQi.FAQI4=4;
	return EnumFaQi;
})()


//class enem.com.game.marriage.SinglePlayer
var SinglePlayer=(function(){
	function SinglePlayer(single){
		this._id=null;
		this._name=null;
		this._lv=0;
		this._power=0;
		this._type=0;
		//0--妻子1--丈夫
		this._dangci=0;
		this._gender=0;
		this._profess=0;
		this._id=single.uid;
		this._name=single.name;
		this._lv=single.lv;
		this._power=single.power.fValue;
		this._gender=single.gender;
		this._profess=single.profession;
	}

	__class(SinglePlayer,'enem.com.game.marriage.SinglePlayer');
	var __proto=SinglePlayer.prototype;
	__getset(0,__proto,'power',function(){
		return this._power;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
	});

	__getset(0,__proto,'lv',function(){
		return this._lv;
	});

	__getset(0,__proto,'gender',function(){
		return this._gender;
	});

	__getset(0,__proto,'id',function(){
		return this._id;
	});

	__getset(0,__proto,'type',function(){
		return this._type;
		},function(value){
		this._type=value;
	});

	__getset(0,__proto,'dangci',function(){
		return this._dangci;
		},function(value){
		this._dangci=value;
	});

	__getset(0,__proto,'profess',function(){
		return this._profess;
	});

	return SinglePlayer;
})()


//class enem.com.game.util.TextUtil
var TextUtil=(function(){
	function TextUtil(){}
	__class(TextUtil,'enem.com.game.util.TextUtil');
	TextUtil.FormatStr=function(str,params){
		if (str==null)
			return "";
		str=LanUtil.GetLanStr(str);
		var bHtml=TextUtil.isHtml(str);
		if (params !=null){
			var keyStr="{@}";
			var isNumRep=(str.indexOf(keyStr)==-1);
			var len=params.length;
			var param;
			var idxKey=0;
			var idxSpan=0;
			var idxSpanend=0;
			for (var i=0;i < len;++i){
				if (isNumRep)
					keyStr="{"+(i)+"}";
				param=params[i];
				if (bHtml){
					param=TextUtil.ToBrowserSpace(param);
					if (TextUtil.isHtml(param)){
						idxKey=str.indexOf(keyStr);
						if (idxKey !=-1){
							idxSpan=str.lastIndexOf("<span",idxKey);
							if (idxSpan !=-1){
								idxSpanend=str.lastIndexOf("</span>",idxKey);
								if (idxSpanend < idxSpan){
									idxSpanend=str.indexOf(">",idxSpan);
									if (idxSpanend !=-1){
										param="</span>"+param;
										param=param+str.substring(idxSpan,idxSpanend+1);
									}
								}
							}
						}
					}
				}
				str=str.replace(keyStr,param);
			}
		}
		return str;
	}

	TextUtil.ToBrowserSpace=function(str){
		if ((typeof str=='string')){
			if (TextUtil.isHtml(str)){
				return str;
			}
			else {
				str=str.replace(/\s/g,"&nbsp;");
			}
		}
		return str;
	}

	TextUtil.FixServerHtml=function(html,type){
		return "";
	}

	TextUtil.MIXHtmlStr=function(Arr){
		var Str="";
		for (var i=0;i < Arr.length;++i){
			Str+=TextUtil.ToHtml(
			Arr[i][0],
			Arr[i][1],
			Arr[i][2]);
		}
		return Str;
	}

	TextUtil.AttrTextToHtmlStr=function(lab,html,attrVo,isLeft){
		(isLeft===void 0)&& (isLeft=true);
		if (lab==null)
			return;
		if (html==null)
			html=new HTMLDivElement();
		lab.addChild(html);
		lab.text="";
		if (attrVo !=null)
			html.innerHTML=TextUtil.AttrHtmlStr(attrVo.GetNameString(false),attrVo.ToShowValue(),isLeft);
		else
		html.innerHTML="";
	}

	TextUtil.AttrHtmlStr=function(_name,_num,_fore,quality,fontSize){
		(_fore===void 0)&& (_fore=true);
		(quality===void 0)&& (quality=-1);
		(fontSize===void 0)&& (fontSize=24);
		var Str;
		if (_fore){
			Str=TextUtil.ToHtml("{@}",quality==-1 ? "#79421C" :ColorUtil$1.getQualityColor(quality),fontSize)+TextUtil.ToHtml("+{@}","#E51717",fontSize);
		}
		else {
			Str=TextUtil.ToHtml("{@}",quality==-1 ? "#79421C" :ColorUtil$1.getQualityColor(quality),fontSize)+TextUtil.ToHtml("+{@}","#099E09",fontSize);
		}
		return TextUtil.FormatStr(Str,[_name,_num]);
	}

	TextUtil.ItemNumsHtmlStr=function(_has,_use,size,sciene){
		(size===void 0)&& (size=24);
		(sciene===void 0)&& (sciene=false);
		var For_Str;
		var Bac_Str=TextUtil.GetHtmlStr("/"+(sciene ? TextUtil.FormatNum2(_use):_use.toString()),"#79421C",size);
		if (_has >=_use){
			For_Str=TextUtil.GetHtmlStr(TextUtil.FormatNum2(_has),"#099E09",size);
		}
		else {
			For_Str=TextUtil.GetHtmlStr(TextUtil.FormatNum2(_has),"#E51717",size);
		}
		return For_Str.concat(Bac_Str);
	}

	TextUtil.GetHtmlStr=function(str,color,size,isChangeLine,font){
		(color===void 0)&& (color="#ffffff");
		(size===void 0)&& (size=18);
		(isChangeLine===void 0)&& (isChangeLine=false);
		(font===void 0)&& (font=GameFont.DEFAULT);
		return TextUtil.ToHtml(str,color,size,false,null,isChangeLine,font);
	}

	TextUtil.ToHtml=function(str,color,size,bold,key,changeline,font){
		(color===void 0)&& (color="#ffffff");
		(size===void 0)&& (size=18);
		(bold===void 0)&& (bold=false);
		(changeline===void 0)&& (changeline=false);
		(font===void 0)&& (font=GameFont.DEFAULT);
		if (str==null)
			return "";
		str+="";
		str=TextUtil.ToBrowserSpace(str);
		if (!((typeof color=='string')))
			color=ColorUtil$1.NumToHtmlC(color);
		var lines=str.split(/\n|\r/);
		var htmlStr="";
		var lineStr;
		for(var $each_lineStr in lines){
			lineStr=lines[$each_lineStr];
			if (htmlStr !="")
				htmlStr+="<br/>";
			htmlStr+="<span style='color:"+color+";font:"+size+"px "+font+";storke:";
			if (bold)
				htmlStr+=" bold";
			htmlStr+="'";
			if (key !=null)
				htmlStr+=" href='"+key+"'";
			htmlStr+=">"+lineStr+"</span>";
		}
		if (changeline)
			htmlStr+="<br/>";
		return htmlStr;
	}

	TextUtil.ToHtmlMulti=function(htmls){
		var ret="";
		var html;
		for(var $each_html in htmls){
			html=htmls[$each_html];
			ret+=TextUtil.ToHtml(
			html.str,
			html["color"] !=null ? html["color"] :"#ffffff",
			html["size"] !=null ? html["size"] :16,
			html["bold"] !=null ? html["bold"] :false,
			html["key"] !=null ? html["key"] :null,
			html["br"] !=null ? html["br"] :false,
			html["font"] !=null ? html["font"] :GameFont.DEFAULT);
		}
		return ret;
	}

	TextUtil.GetImgUrl=function(str){
		var myPattern=/\//g;
		return str.replace(myPattern,"_");
	}

	TextUtil.isHtml=function(str){
		var reg=/<.*?>/g;
		return reg.test(str);
	}

	TextUtil.isCn=function(str){
		var reg=/^[一-龟]+$/;
		return reg.test(str);
	}

	TextUtil.isEn=function(str){
		var reg=/^[a-zA-Z]+$/;
		return reg.test(str);
	}

	TextUtil.isCnEn=function(str){
		var reg=/^[a-zA-Z一-龟0-9]+$/;
		return reg.test(str);
	}

	TextUtil.isNum=function(str){
		var reg=/^[0-9]+$/;
		return reg.test(str);
	}

	TextUtil.isExistNum=function(str){
		if (str){
			var reg=/[0-9]+/g;
			var arr=str.match(reg);
			return arr !=null && arr.length > 0;
		}
		return false;
	}

	TextUtil.RemoveHTMLTag=function(text){
		return text==null ? text :text.replace(/<.*?>/g,"");
	}

	TextUtil.GetDateStr=function(ms,showType,formatType,showZero){
		(formatType===void 0)&& (formatType=0x111111);
		(showZero===void 0)&& (showZero=false);
		var date=new Date();
		date.setTime(ms);
		return TextUtil.ToTimeFormatData(date,showType,formatType,showZero);
	}

	TextUtil.GetTimeSecStr=function(s,showType,formatType,showZero){
		(formatType===void 0)&& (formatType=0x111111);
		(showZero===void 0)&& (showZero=false);
		return TextUtil.GetTimeStr(s *1000,showType,formatType,showZero);
	}

	TextUtil.GetTimeStr=function(ms,showType,formatType,showZero){
		(formatType===void 0)&& (formatType=0x111111);
		(showZero===void 0)&& (showZero=false);
		var sec=Math.floor(ms / 1000);
		var min=Math.floor(sec / 60);
		sec-=min *60;
		var hour=Math.floor(min / 60);
		min-=hour *60;
		var day=Math.floor(hour / 24);
		hour-=day *24;
		var mon=Math.floor(day / 30);
		day-=mon *30;
		var year=Math.floor(mon / 12);
		mon-=year *12;
		return TextUtil.ToTimeFormat(formatType,showType,showZero,[year,mon,day,hour,min,sec]);
	}

	TextUtil.GetHoleDay=function(ms){
		if (TextUtil.openMTime !=0)
			return TextUtil.openMTime;
		var Day=new Date(ms);
		var _dat=new Date(Day.getFullYear(),Day.getMonth(),Day.getDate());
		var form=_dat.getTime();
		TextUtil.openMTime=form;
		return TextUtil.openMTime;
	}

	TextUtil.GetEndMTime=function(End,initBean){
		if(initBean==null)
			return 0;
		var OpenMTime=TextUtil.GetHoleDay(initBean.openServerTime.fValue);
		var EndMTime=OpenMTime+(End-1)*(24 *60 *60 *1000);
		return EndMTime;
	}

	TextUtil.ToTimeFormatData=function(date,showType,formatType,showZero){
		return TextUtil.ToTimeFormat(formatType,showType,showZero,[date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()]);
	}

	TextUtil.ToTimeFormat=function(formatType,showType,showZero,times){
		var showy=((formatType & 0x100000)==0x100000 && (showZero || times[0] !=0));
		var showmon=((formatType & 0x10000)==0x10000 && (showZero || times[1] !=0));
		var showd=((formatType & 0x1000)==0x1000 && (showZero || times[2] !=0));
		var showh=((formatType & 0x100)==0x100 && (showZero || times[3] !=0));
		var showmi=((formatType & 0x10)==0x10 && (showZero || times[4] !=0));
		var shows=((formatType & 0x1)==0x1);
		var year=times[0];
		var month=times[1];
		var day=times[2];
		var hour=showh ? (times[3] < 10 ? "0"+times[3] :times[3]):null;
		var min=showmi ? (times[4] < 10 ? "0"+times[4] :times[4]):null;
		var sec=(times[5] < 10 && (showmi || showh))? "0"+times[5] :times[5];
		if (showType==1){
			return (showy ? year+LangString.DATE_YEAR :"")
			+(showmon ? month+LangString.DATE_MONTH :"")
			+(showd ? day+LangString.DATE_DATE :"")
			+((showy || showmon || showd)? " " :"")
			+(showh ? hour+LangString.DATE_HOUR :"")
			+(showmi ? min+LangString.DATE_MINUTE :"")
			+(shows ? sec+LangString.DATE_SECOND :"");
		}
		else if (showType==2){
			return (showy ? year+LangString.DATE_YEAR :"")
			+(showmon ? month+LangString.DATE_MONTH :"")
			+(showd ? day+LangString.DATE_DATE :"")
			+((showy || showmon || showd)? " " :"")
			+(showh ? hour+(showmi ? ":" :""):"")
			+(showmi ? min+(shows ? ":" :""):"")
			+(shows ? sec :"");
		}
		else if (showType==3){
			return (showy ? year+"-" :"")
			+(showmon ? month+"-" :"")
			+(showd ? day+" " :"")
			+(showh ? hour+(showmi ? ":" :""):"")
			+(showmi ? min+(shows ? ":" :""):"")
			+(shows ? sec :"");
			}else if (showType==-3){
			return (showy ? year+"." :"")
			+(showmon ? month+"." :"")
			+(showd ? day+" " :"")
			+(showh ? hour+(showmi ? ":" :""):"")
			+(showmi ? min+(shows ? ":" :""):"")
			+(shows ? sec :"");
		}
		else if (showType==4){
			return (showy ? year+LangString.DATE_YEAR :"")
			+(showmon ? month+"个"+LangString.DATE_MONTH :"")
			+(showd ? day+"天" :"")
			+((showy || showmon || showd)? "" :"")
			+(showh ? hour+"时" :"")
			+(showmi ? min+LangString.DATE_MINUTE :"")
			+(shows ? sec+LangString.DATE_SECOND :"");
		}
		else if (showType==5){
			return (showy ? year+LangString.DATE_YEAR :"")
			+(showmon ? month+"个"+LangString.DATE_MONTH :"")
			+(showd ? day+"天" :"")
			+((showy || showmon || showd)? "" :"")
			+(showh ? hour+":" :"")
			+(showmi ? min+":" :"")
			+(shows ? sec+"" :"");
		}
		else if (showType==100){
			return (showd ? day+LangString.DATE_DAY :"")
			+(showh ? hour+LangString.DATE_HOUR2 :"");
		}
		else if (showType==101){
			return (showd ? day+LangString.DATE_DAY :"")
			+(showh ? hour+LangString.DATE_HOUR2 :"")
			+(showmi ? min+LangString.DATE_MINUTE :"")
		}
		else if (showType==102){
			return (showh ? hour+LangString.DATE_HOUR2 :"")
			+(showmi ? min+LangString.DATE_MINUTE :"")
		}
		else{
			return (showd ? day+LangString.DATE_DAY :"")
			+(showh ? hour+LangString.DATE_HOUR :"")
			+(showmi ? min+LangString.DATE_MINUTE :"")
			+(shows ? sec+LangString.DATE_SECOND :"");
		}
		return "";
	}

	TextUtil.GetWeekStr=function(week){
		switch (week){
			case 1 :
				return LangString.DATE_MON;
			case 2 :
				return LangString.DATE_TUE;
			case 3 :
				return LangString.DATE_WED;
			case 4 :
				return LangString.DATE_THU;
			case 5 :
				return LangString.DATE_FRI;
			case 6 :
				return LangString.DATE_TUE;
			case 7 :
				return LangString.DATE_SUN;
			default :
				return "";
			}
	}

	TextUtil.GetSecondsToNow=function(sec,serverTime){
		return sec-serverTime;
	}

	TextUtil.IsToday=function(date){
		var today=new Date();
		return today.getFullYear()==date.getFullYear()&& today.getMonth()==date.getMonth()&& today.getDate()==date.getDate();
	}

	TextUtil.IsServerToday=function(date,HeartStime){
		var today=new Date(HeartStime);
		return today.getFullYear()==date.getFullYear()&& today.getMonth()==date.getMonth()&& today.getDate()==date.getDate();
	}

	TextUtil.IsTomorrow=function(date){
		var last=new Date();
		last.setTime(date.getTime()-86400000);
		var today=new Date();
		return today.getFullYear()==last.getFullYear()&& today.getMonth()==last.getMonth()&& today.getDate()==last.getDate();
	}

	TextUtil.FormatNum=function(value){
		var ret=Math.floor((value / 100000000)*10)/ 10;
		if (ret < 1){
			ret=Math.floor((value / 10000)*10)/ 10;
			if (ret < 1)
				return value.toString();
			else
			return ret.toString()+LangString.U_WAN;
		}
		else
		return ret.toString()+LangString.U_YI;
	}

	TextUtil.FormatNum2=function(value){
		var ret=Math.floor((value / 100000000)*10 / 10);
		if (ret < 1){
			ret=Math.floor((value / 10000)*10 / 10);
			if (ret < 1)
				return value.toString();
			else
			return ret.toString()+LangString.U_WAN;
		}
		else
		return ret.toString()+LangString.U_YI;
	}

	TextUtil.FormatNum3=function(value,toFixed){
		var ret=Math.floor((value / 100000000)*10)/ 10;
		if (ret < 1){
			ret=Math.floor((value / 10000)*10)/ 10;
			if (ret < 1)
				return TextUtil.numToFixed(value,toFixed).toString();
			else
			return TextUtil.numToFixed(ret,toFixed).toString()+LangString.U_WAN;
		}
		else
		return TextUtil.numToFixed(ret,toFixed).toString()+LangString.U_YI;
	}

	TextUtil.ToByteArray=function(value){
		var byteArr=new ByteArray();
		byteArr.writeUTFBytes(value);
		byteArr.pos=0;
		return byteArr;
	}

	TextUtil.GetTextByteLen=function(str){
		var ba=TextUtil.ToByteArray(str);
		return ba.length;
	}

	TextUtil.numToFixed=function(num,toFixed){
		var multi=Math.pow(10,toFixed);
		return Math.floor(num *multi)/ multi;
	}

	TextUtil.getStrLength=function(str){
		var strArr=str.split("");
		var len=0;
		for (var i=0;i < strArr.length;i++){
			var s=strArr[i];
			if (TextUtil.isChinese(s))
				len+=2;
			else
			len+=1;
		}
		return len;
	}

	TextUtil.isChinese=function(str){
		var reg=/^.*[\u4E00-\u9FA5]+.*$/;
		return reg.test(str);
	}

	TextUtil.GetNumStr=function(v,len){
		var ret="0000"+v.toString();
		return ret.substr(ret.length-len,len);
	}

	TextUtil.GetSexStr=function(sex){
		return LanUtil.GetLanStr(sex==1 ? LangString.SEX_MALE :LangString.SEX_FEMALE);
	}

	TextUtil.changeHtmlFontSize=function(html,fontSize){
		if (html==null)
			return "";
		return html.replace(/fontSize:[0-9]*'/g, "fontSize:" + fontSize + "'");
	}

	TextUtil.ToChineseNumber=function(num){
		var ret="";
		if (num > 0){
			var lv=0;
			var ti=0;
			while (num > 0){
				ti=num % 10;
				if (lv % 4==0)
					ret=TextUtil._chineseLv2[lv / 4]+ret;
				if (ti > 0){
					if (lv % 4==1 && ti==1)
						ret=TextUtil._chineseLv[lv % 4]+ret;
					else
					ret=LangString.CHINESE_NUMBER[ti]+TextUtil._chineseLv[lv % 4]+ret;
				}
				else {
					ret=ret;
				}
				num=(num-ti)*0.1;
				lv+=1;
			}
		}
		else {
			ret=LangString.CHINESE_NUMBER[0];
		}
		return ret;
	}

	TextUtil.ToRomanNumber=function(n){
		if (n < 1 || n > LangString.ROME_NUMBER.length)
			return n.toString();
		return LangString.ROME_NUMBER[n-1];
	}

	TextUtil.getHtmlStr=function(content,quality,fontSize,bold){
		(fontSize===void 0)&& (fontSize=18);
		(bold===void 0)&& (bold=false);
		var str="";
		var color;
		if (quality >=6){
			var index=0;
			var len=content ? content.length :0;
			for (var i=0;i < len;i++){
				var s=content[i];
				color=ColorUtil$1.RAINBOW_COLORS[index % ColorUtil$1.RAINBOW_COLORS.length];
				index++;
				str+=enem.com.game.util.TextUtil.ToHtml(s,color,fontSize,bold);
			}
		}
		else {
			color=ColorUtil$1.getQualityColor(quality);
			str=enem.com.game.util.TextUtil.ToHtml(content,color,fontSize,bold);
		}
		return str;
	}

	TextUtil.getSnoName=function(sno,name){
		if(sno>0){
			return TextUtil.FormatStr("S{@}.{@}",[sno,name]);
			}else {
			return name;
		}
	}

	TextUtil.openMTime=0;
	TextUtil.MAGIC="0000";
	__static(TextUtil,
	['lineReg',function(){return this.lineReg=/\n|\r/;},'spaceReg',function(){return this.spaceReg=/\s/g;},'_chineseLv',function(){return this._chineseLv=["",LangString.U_SHI,LangString.U_BAI,LangString.U_QIAN];},'_chineseLv2',function(){return this._chineseLv2=["",LangString.U_WAN,LangString.U_YI,LangString.U_ZHAO];}
	]);
	return TextUtil;
})()


//class enem.com.game.redpoint.EnumRedPoint
var EnumRedPoint=(function(){
	function EnumRedPoint(){}
	__class(EnumRedPoint,'enem.com.game.redpoint.EnumRedPoint');
	EnumRedPoint.getFitGemKey=function(fitType,equType,gemType){
		return 1000*fitType+100*equType+gemType;
	}

	EnumRedPoint.fashionRoleID=function(heroID){
		switch (heroID){
			case 0:
			case 1:
				return 10051;
			case 2:
				return 10052;
			case 3:
				return 10053;
			}
		return 10051;
	}

	EnumRedPoint.ROLE=10;
	EnumRedPoint.BEAUTY_ACTIOVATION=20;
	EnumRedPoint.BEAUTY_LV=21;
	EnumRedPoint.BEAUTY_SKILL_UP=22;
	EnumRedPoint.BEAUTY_YUHUN=24;
	EnumRedPoint.BEAUTY_MINGGE=25;
	EnumRedPoint.BEAUTY_HECHENG=26;
	EnumRedPoint.BEAUTY_OPEN=27;
	EnumRedPoint.BEAUTY_SHUXIN=29;
	EnumRedPoint.BEAUTY_YUHUN_ID=31;
	EnumRedPoint.BEAUTY_SHUXINGDAN=32;
	EnumRedPoint.BEAUTY_FIGHT=33;
	EnumRedPoint.BEAUTY_DESTINY_EQUIP=34;
	EnumRedPoint.BEAUTY_DESTINY_UPGRADE=35;
	EnumRedPoint.VIP=40;
	EnumRedPoint.VIP_TEB=41;
	EnumRedPoint.VIP_TASK=42;
	EnumRedPoint.VIP_ACTIVE=43;
	EnumRedPoint.TYPE_ZHUANSHENG=50;
	EnumRedPoint.TYPE_ZHUANSHENG_DAN=51;
	EnumRedPoint.TYPE_QUAN_MIN_TIAO_ZHAN=60;
	EnumRedPoint.TYPE_TOUZIJIHUA=100;
	EnumRedPoint.TYPE_CHENGZHANGJIJIN=101;
	EnumRedPoint.TYPE_BINGFA=110;
	EnumRedPoint.TYPE_ZHOUSHU=120;
	EnumRedPoint.TYPE_ZHOUSHU_ITEM=121;
	EnumRedPoint.TYPE_ZHOUSHU_UP=122;
	EnumRedPoint.TYPE_DANYAO=130;
	EnumRedPoint.TYPE_JINGMAI=140;
	EnumRedPoint.TYPE_FIT_ACTIVE=150;
	EnumRedPoint.TYPE_FIT_CHOOSE=151;
	EnumRedPoint.TYPE_FIT_SKILL=152;
	EnumRedPoint.TYPE_FIT_DUN_SWEEP=160;
	EnumRedPoint.TYPE_FIT_DUN_PASS_REWARD=161;
	EnumRedPoint.TYPE_FIT_DUN_FIGHT=163;
	EnumRedPoint.PATROL_DOOR_HOLD_REWARD=170;
	EnumRedPoint.PATROL_DOOR_PATROL_REWARD=171;
	EnumRedPoint.PATROL_RANK=172;
	EnumRedPoint.PATROL_UPGRADE=173;
	EnumRedPoint.PATROL_MOBAI=174;
	EnumRedPoint.PATROL_CHALLENGE=175;
	EnumRedPoint.TYPE_FIT_GEM_WEAR=180;
	EnumRedPoint.TYPE_FIT_GEM_UPGRADE=181;
	EnumRedPoint.TYPE_FIT_DISPOSE=182;
	EnumRedPoint.TYPE_MX_BURNCHIBI=190;
	EnumRedPoint.TYPE_MX_BURNCHIBI_task=191;
	EnumRedPoint.TYPE_MX_BURNCHIBI_Raward=192;
	EnumRedPoint.TYPE_WING=2000;
	EnumRedPoint.TYPE_GOD_EQUIP=2010;
	EnumRedPoint.TYPE_XUNBAO=10000;
	EnumRedPoint.TYPE_JINGLING=10010;
	EnumRedPoint.TYPE_SHENBING=10020;
	EnumRedPoint.TYPE_GUILD=10030;
	EnumRedPoint.TYPE_ACHIEVEMENT=10040;
	EnumRedPoint.TYPE_FASHION=10050;
	EnumRedPoint.TYPE_FASHION_ROLE1=10051;
	EnumRedPoint.TYPE_FASHION_ROLE2=10052;
	EnumRedPoint.TYPE_FASHION_ROLE3=10053;
	EnumRedPoint.WAR_TOKEN_LV=10060;
	EnumRedPoint.WAR_TOKEN_TASK=10061;
	EnumRedPoint.ONLINE_GIFT=10062;
	return EnumRedPoint;
})()


//class enem.com.game.battle.common.enum.EnumRow
var EnumRow=(function(){
	function EnumRow(){}
	__class(EnumRow,'enem.com.game.battle.common.enum.EnumRow');
	EnumRow.BACK=2;
	EnumRow.FRONT=1;
	return EnumRow;
})()


//class enem.com.game.challenge.challengeboss.EnumChallengeBoss
var EnumChallengeBoss=(function(){
	function EnumChallengeBoss(){}
	__class(EnumChallengeBoss,'enem.com.game.challenge.challengeboss.EnumChallengeBoss');
	EnumChallengeBoss.BOSS_TYPE_JUNTUAN=1;
	EnumChallengeBoss.BOSS_TYPE_WORLD=2;
	EnumChallengeBoss.DUNGEON_ID_WORLD=15101;
	EnumChallengeBoss.DUNGEON_ID_JUNTUAN=15102;
	EnumChallengeBoss.YUNYING_ID_JUNTUAN=2101;
	EnumChallengeBoss.YUNYING_ID_WORLD=2102;
	EnumChallengeBoss.TIPS_NOTICE_WORLD=17;
	EnumChallengeBoss.TIPS_NOTICE_JUNTUAN=18;
	EnumChallengeBoss.RED_POINT_WORLD=2;
	EnumChallengeBoss.RED_POINT_JUNTUAN=1;
	EnumChallengeBoss.ALL_SERVER_BOSS_RES=10049;
	return EnumChallengeBoss;
})()


//class enem.com.game.battle.common.enum.EnumBattleType
var EnumBattleType=(function(){
	function EnumBattleType(){}
	__class(EnumBattleType,'enem.com.game.battle.common.enum.EnumBattleType');
	EnumBattleType.isInTeamCopyBattle=function(type){
		return EnumBattleType.TEAM_COPY_TYPES.indexOf(type)!=-1;
	}

	EnumBattleType.isDungeon=function(type){
		return EnumBattleType.DUNGGEON_TYPES.indexOf(type)!=-1;
	}

	EnumBattleType.isPataDungeon=function(type){
		return EnumBattleType.PATA_TYPES.indexOf(type)!=-1;
	}

	EnumBattleType.getBattleFuncID=function(type){
		switch (type){
			case 2:
				return 50;
			case 3:
				return 56;
			case 4:
				return 57;
			case 5:
				return 59;
			case 11:
				return 0;
			case 101:
				return 51;
			case 102:
				return 52;
			case 103:
				return 53;
			case 104:
				return 54;
			case 100:
				return 0;
			case 106:
				return 55;
			case 107:
				return 204;
			}
		return 0;
	}

	EnumBattleType.isGuildTeamBattle=function(type){
		return EnumBattleType.GUILDBATTLES.indexOf(type)!=-1;
	}

	EnumBattleType.GUAJI=0;
	EnumBattleType.GUANQIA=1;
	EnumBattleType.MATERIAL=2;
	EnumBattleType.M_SUB_RIDE=0;
	EnumBattleType.M_SUB_PET=1;
	EnumBattleType.M_SUB_JINGLIAN=2;
	EnumBattleType.M_SUB_DUANLIAN=3;
	EnumBattleType.M_SUB_GM=4;
	EnumBattleType.M_SUB_ELF=5;
	EnumBattleType.M_SUB_WEAPON=6;
	EnumBattleType.M_SUB_WING=7;
	EnumBattleType.M_SUB_RING=8;
	EnumBattleType.M_SUB_GUD=9;
	EnumBattleType.M_SUB_BEAUTY=10;
	EnumBattleType.PERSONALBOSS=3;
	EnumBattleType.WORLDBOSS=4;
	EnumBattleType.ZHIZUNBOSS=5;
	EnumBattleType.FIELDBOSS=6;
	EnumBattleType.ZHUJIU_PVE=7;
	EnumBattleType.DUNGEON_GUILD_BOSS=8;
	EnumBattleType.GUILD_TERRITORY=9;
	EnumBattleType.CHALLENGE_CAPTURE=11;
	EnumBattleType.QUAN_FU_BATTLE=12;
	EnumBattleType.OP_GUILD_BOSS=13;
	EnumBattleType.TIMEFIGHT=100;
	EnumBattleType.CANGBAOTU=101;
	EnumBattleType.LINGLONGTA=102;
	EnumBattleType.TIANTING=103;
	EnumBattleType.XIANGYAO=104;
	EnumBattleType.KAIFU=100;
	EnumBattleType.MANJIANG=106;
	EnumBattleType.FIT_PATA=107;
	EnumBattleType.XIANSHI_PATA=105;
	EnumBattleType.XIANSHI_PATA2=108;
	EnumBattleType.XIANSHI_PATA3=109;
	EnumBattleType.XIANSHI_PATA4=110;
	EnumBattleType.MARRIAGE_PATA=111;
	EnumBattleType.COPY_TEAM=201;
	EnumBattleType.ZHULU_TEAM=202;
	EnumBattleType.GUILD_TEAM=203;
	EnumBattleType.SHIMEN=1000;
	EnumBattleType.JJC=1001;
	EnumBattleType.YUANZHNEG=1002;
	EnumBattleType.ROBBERY=1003;
	EnumBattleType.REVENGE=1004;
	EnumBattleType.ZHUJIU_PVP=1005;
	EnumBattleType.WZZB=1006;
	EnumBattleType.TEAM_COPY=1007;
	EnumBattleType.GUILD_BOSS=1008;
	EnumBattleType.BUZHUO=1010;
	EnumBattleType.QYH=1012;
	EnumBattleType.HELP=1013;
	EnumBattleType.BOSSMASTER=1014;
	EnumBattleType.GUILD_BATTLE_DOOR=1015;
	EnumBattleType.GUILD_BATTLE_PVP=1016;
	EnumBattleType.GUILD_BATTLE_PVE=1017;
	EnumBattleType.GUILD_BATTLE_YUXI=1018;
	EnumBattleType.GUILD_BATTLE_PVE2=1019;
	EnumBattleType.PATROL=1020;
	EnumBattleType.EMPTY_CITY=1021;
	EnumBattleType.PATROL_REVENGE=1022;
	EnumBattleType.GUILD_BOSS_PVP=1030;
	EnumBattleType.VIDEO=1040;
	EnumBattleType.XIANGRUI=1050;
	EnumBattleType.TRIALTOWER=1060;
	EnumBattleType.FIGHT_REVIEW=10000;
	__static(EnumBattleType,
	['TEAM_COPY_TYPES',function(){return this.TEAM_COPY_TYPES=[1007,201,202,203];},'DUNGGEON_TYPES',function(){return this.DUNGGEON_TYPES=[1,2,3,4,5,7,8,11,6,9,12,13];},'PATA_TYPES',function(){return this.PATA_TYPES=[101,102,103,104,100,106,107];},'GUILDBATTLES',function(){return this.GUILDBATTLES=[1017,1018,1019];},'FAILURE_PROMPT_TYPES',function(){return this.FAILURE_PROMPT_TYPES=[1,3,102,101,103,107,104];}
	]);
	return EnumBattleType;
})()


//class enem.com.game.battle.common.EnumFightSetType
var EnumFightSetType=(function(){
	function EnumFightSetType(){}
	__class(EnumFightSetType,'enem.com.game.battle.common.EnumFightSetType');
	EnumFightSetType.PET=1;
	EnumFightSetType.JIGUAN=2;
	EnumFightSetType.HERO=3;
	EnumFightSetType.TREASURE=4;
	return EnumFightSetType;
})()


//class enem.com.game.marriage.MarriageEnum.EnumClicktype
var EnumClicktype=(function(){
	function EnumClicktype(){}
	__class(EnumClicktype,'enem.com.game.marriage.MarriageEnum.EnumClicktype');
	EnumClicktype.HUNYIN=0;
	EnumClicktype.FANGWU=1;
	EnumClicktype.SANSHENGSHI=2;
	return EnumClicktype;
})()


//class enem.com.game.pvp.event.PvpEvent
var PvpEvent=(function(){
	function PvpEvent(){}
	__class(PvpEvent,'enem.com.game.pvp.event.PvpEvent');
	PvpEvent.JJC_INFO="jjc_info";
	PvpEvent.JJC_BUY="jjc_buy";
	PvpEvent.JJC_RANK="jjc_rank";
	PvpEvent.JJC_CHALLENGE="jjc_challenge";
	PvpEvent.JJC_WZZB_FIGHT="JJC_WZZB_FIGHT";
	PvpEvent.JJC_WZZB_NOFIGHT="JJC_WZZB_NOFIGHT";
	PvpEvent.JJC_WZZB_WEEKRANK="JJC_WZZB_WEEKRANK";
	PvpEvent.JJC_WZZB_RANK="JJC_WZZB_RANK";
	PvpEvent.JJC_WZZB_MYDATA="JJC_WZZB_MYDATA";
	PvpEvent.JJC_WZZB_BUY="JJC_WZZB_BUY";
	PvpEvent.JJC_WZZB_BATEND="JJC_WZZB_BATEND";
	PvpEvent.JJC_QYH_JOIN="JJC_QYH_JOIN";
	PvpEvent.QYH_BETINFO="QYH_BETINFO";
	PvpEvent.QYH_FIGHTINFO="QYH_FIGHTINFO";
	PvpEvent.QYH_JOIN_SPC="QYH_JOIN_SPC";
	PvpEvent.JJC_QYH_JOIN_YEILD="JJC_QYH_JOIN_YEILD";
	PvpEvent.QYH_BET="QYH_BET";
	PvpEvent.QYH_YUGAO="QYH_YUGAO";
	PvpEvent.QYH_Chnage="QYH_Chnage";
	PvpEvent.WZZB_MODE="WZZB_MODE";
	PvpEvent.WZZB_MOBAI="WZZB_MOBAI";
	PvpEvent.QYH_MONEYERR="QYH_MONEYERR";
	return PvpEvent;
})()


/**
*属性排布参数
*/
//class enem.com.game.attribute.comp.AttributeParam
var AttributeParam=(function(){
	function AttributeParam(){
		/**水平间隔**/
		this.marW=5;
		/**垂直间隔**/
		this.marH=5;
		/**一行有几个**/
		this.col=1;
		/**字体大小**/
		this.size=22;
		/**属性是否要加空格**/
		this.blank=false;
		/**名与值之间的间隔**/
		this.inv=5;
		/**显示格式（临时+{@}）**/
		this.showFormat=null;
		/**value为0不显示**/
		this.ignoreZero=false;
		this.nColor="#79421C";
		this.vColor="#099E09";
	}

	__class(AttributeParam,'enem.com.game.attribute.comp.AttributeParam');
	var __proto=AttributeParam.prototype;
	__proto.reset=function(){
		this.marW=5;
		this.marH=5;
		this.col=1;
		this.size=22;
		this.nColor="#79421C";
		this.vColor="#099E09";
		this.blank=false;
		this.inv=5;
		this.showFormat=null;
		this.ignoreZero=false;
		return this;
	}

	/**
	*策划让改颜色，直接给了一个色字#FFECD2
	*用于咒术的当前描述
	***/
	__proto.SetColor=function(){
		this.vColor=this.nColor="#FFECD2";
	}

	__static(AttributeParam,
	['TEMP',function(){return this.TEMP=new AttributeParam();}
	]);
	return AttributeParam;
})()


/**
*装备位置枚举
*
*@author Administrator
*/
//class enem.com.game.items.enum.EnumEquipPos
var EnumEquipPos=(function(){
	function EnumEquipPos(){}
	__class(EnumEquipPos,'enem.com.game.items.enum.EnumEquipPos');
	EnumEquipPos.WEAPON=1;
	EnumEquipPos.HELMET=2;
	EnumEquipPos.NECKLACE=3;
	EnumEquipPos.CLOTHES=4;
	EnumEquipPos.HUFU=5;
	EnumEquipPos.BELT=6;
	EnumEquipPos.WRISTER=7;
	EnumEquipPos.RING=8;
	EnumEquipPos.PANTS=9;
	EnumEquipPos.SHOES=10;
	EnumEquipPos.MAX=12;
	EnumEquipPos.NORMALMAX=12;
	return EnumEquipPos;
})()


//class enem.com.game.marriage.MarriageEnum.EnumMarrid
var EnumMarrid=(function(){
	function EnumMarrid(){}
	__class(EnumMarrid,'enem.com.game.marriage.MarriageEnum.EnumMarrid');
	EnumMarrid.Domarrid=2;
	EnumMarrid.DONmarrid=1;
	EnumMarrid.PRICE=1;
	EnumMarrid.REWARD=2;
	EnumMarrid.Re_REWARD=3;
	EnumMarrid.MAXWEEDINGNUM=4;
	EnumMarrid.FLOWER=5;
	EnumMarrid.LVATTRIBUTE=10;
	EnumMarrid.NEWXTLV=15;
	EnumMarrid.LIJIN=17;
	return EnumMarrid;
})()


//class enem.com.game.yuntai.TunTaiEvent
var TunTaiEvent=(function(){
	function TunTaiEvent(){}
	__class(TunTaiEvent,'enem.com.game.yuntai.TunTaiEvent');
	TunTaiEvent.YUNTAI_INFO="yuntai_info";
	return TunTaiEvent;
})()


//class enem.com.game.battle.common.enum.EnumBattleGroup
var EnumBattleGroup=(function(){
	function EnumBattleGroup(){}
	__class(EnumBattleGroup,'enem.com.game.battle.common.enum.EnumBattleGroup');
	EnumBattleGroup.GetOB=function(group){
		if (group==1)
			return 2;
		else
		return 1;
	}

	EnumBattleGroup.FRIEND=1;
	EnumBattleGroup.ENEMY=2;
	return EnumBattleGroup;
})()


//class enem.com.game.gate.event.GateEvent
var GateEvent=(function(){
	function GateEvent(){}
	__class(GateEvent,'enem.com.game.gate.event.GateEvent');
	GateEvent.WAVE_CHANGE="gate_wave_change";
	GateEvent.AUTO_CHANGE="gate_auto_change";
	GateEvent.GATE_CHANGE="gate_gate_change";
	GateEvent.CHAPTER_REWARD_CHANGE="gate_chapter_reward_change";
	GateEvent.GATE_HELP="GATE_HELP";
	GateEvent.GATE_ONLINETIME="GATE_ONLINETIME";
	GateEvent.GATE_ONLINETIME_FRESH="GATE_ONLINETIME_FRESH";
	GateEvent.GATE_ONLINETIME_SUCESS="GATE_ONLINETIME_SUCESS";
	GateEvent.GATE_ONLINETIME_FLY="GATE_ONLINETIME_FLY";
	return GateEvent;
})()


/**
*飞升阶段的子阶段 （比如洗髓阶段的第一阶段）
*/
//class enem.com.game.gear.vo.GearFeisSubStageCfg
var GearFeisSubStageCfg=(function(){
	function GearFeisSubStageCfg(){
		// 子阶段id
		this.substage=0;
		// 开始阶数
		this.start=0;
		// 结束阶数
		this.end=0;
	}

	__class(GearFeisSubStageCfg,'enem.com.game.gear.vo.GearFeisSubStageCfg');
	var __proto=GearFeisSubStageCfg.prototype;
	__proto.Contains=function(level){
		return this.start <=level && this.end >=level;
	}

	return GearFeisSubStageCfg;
})()


//class enem.com.game.tips.EnumFuncTips
var EnumFuncTips=(function(){
	function EnumFuncTips(){}
	__class(EnumFuncTips,'enem.com.game.tips.EnumFuncTips');
	EnumFuncTips.MARRIAGE=1;
	EnumFuncTips.PETSKILL=2;
	EnumFuncTips.BEAUTY=3;
	EnumFuncTips.LIEMING=4;
	EnumFuncTips.JIGUAN=6;
	EnumFuncTips.QIANLI=7;
	EnumFuncTips.GEARHEXIN=8;
	EnumFuncTips.JDF=9;
	EnumFuncTips.THREE_COUNTRIES=12;
	EnumFuncTips.MARRIAGE_PATA=23;
	return EnumFuncTips;
})()


//class enem.com.game.stringfilter.TreeNode
var TreeNode=(function(){
	function TreeNode(){
		this.data=null;
		this._isLeaf=false;
		/**
		*是否是敏感词的词尾字，敏感词树的叶子节点必然是词尾字，父节点不一定是
		*/
		this.isEnd=false;
		this.parent=null;
		this.value=null;
		this.data={};
	}

	__class(TreeNode,'enem.com.game.stringfilter.TreeNode');
	var __proto=TreeNode.prototype;
	//end of Function
	__proto.getChild=function(name){
		return this.data[name];
	}

	//end of Function
	__proto.addChild=function(char){
		var node=new TreeNode;
		this.data[char]=node;
		node.value=char;
		node.parent=this;
		return node;
	}

	//end of Function
	__proto.getFullWord=function(){
		var rt=this.value;
		var node=this.parent;
		while (node){
			rt=node.value+rt;
			node=node.parent;
		}
		return rt;
	}

	/**
	*是否是叶子节点
	*/
	__getset(0,__proto,'isLeaf',function(){
		var index=0;
		for (var key in this.data){
			index++;
		}
		this._isLeaf=index==0;
		return this._isLeaf;
	});

	return TreeNode;
})()


//class enem.com.game.battle.common.enum.EnumFightSetType
var EnumFightSetType$1=(function(){
	function EnumFightSetType(){}
	__class(EnumFightSetType,'enem.com.game.battle.common.enum.EnumFightSetType',null,'EnumFightSetType$1');
	EnumFightSetType.getPetJob=function(qid){
		var q_pet=Q_petContainer.GetValue(qid);
		return q_pet !=null ? q_pet.q_job :0;
	}

	EnumFightSetType.objType2ServerType=function(objType,mid){
		switch (objType){
			case 1:;
				var job=EnumFightSetType.getPetJob(mid);
				if(job==1)
					return 1;
				else if(job==2)
				return 5;
				else if(job==3)
				return 2;
				else if(job==4)
				return 3;
				return 1;
			case 2:
				return 4;
			case 3:
				return 7;
			case 4:
				return 8;
			}
		return 0;
	}

	EnumFightSetType.PET=1;
	EnumFightSetType.JIGUAN=2;
	EnumFightSetType.HERO=3;
	EnumFightSetType.TREASURE=4;
	return EnumFightSetType;
})()


//class enem.com.game.battle.common.bean.ObjectInBattleBean
var ObjectInBattleBean=(function(){
	function ObjectInBattleBean(){
		/**第几排 */
		this.row=0;
		/**位置 */
		this.pos=0;
		/**唯一id */
		this.gid=0;
		/**配置id(英雄就是英雄id)*/
		this.mid=0;
		/**最大血量**/
		this.maxhp=0;
		/**当前血量 */
		this.curhp=0;
		/**当前护盾 */
		this.shield=0;
		/**当前护盾最大值 */
		this.shieldMax=NaN;
		/**是否合体**/
		this.isFit=false;
		/**合体品质**/
		this.fitQuality=0;
		/**q_monster_show qid**/
		this.monsterShowID=0;
		/**星星**/
		this.star=0;
	}

	__class(ObjectInBattleBean,'enem.com.game.battle.common.bean.ObjectInBattleBean');
	var __proto=ObjectInBattleBean.prototype;
	Laya.imps(__proto,{"engine.base.pool.spool.ISimplePool":true})
	__proto.clear=function(){
		this.row=this.pos=this.gid=this.mid=this.maxhp=this.curhp=this.fitQuality=this.monsterShowID=this.star=0;
		this.isFit=false;
	}

	__proto.Clone=function(){
		var clone=new ObjectInBattleBean();
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		return clone;
	}

	return ObjectInBattleBean;
})()


/**
*物品对象
*@author Administrator
*/
//class enem.com.game.items.obj.Item
var Item=(function(){
	function Item(){
		/**物品唯一Id*/
		this.itemId=null;
		/**物品模板Id*/
		this._modelId=0;
		/**物品数量*/
		this.num=0;
		/**是否绑定*/
		this.isBind=false;
		/**道具所在背包位置*/
		this.packetIndex=0;
		/**所属玩家 */
		this.ownerName=null;
		/**物品过期时间（真实） */
		this._overdueSec=0;
		/**配置物品过期时间点 */
		this._overdueSetTime=null;
		/**配置物品过期剩余秒 */
		this._overdueSetSec=0;
		/**能否批量使用*/
		this._isCanBatchUse=false;
		/**未知道具mid */
		this.unknowItemMid=0;
		this._giftItem=null;
		this._isFromServer=false;
		this.createtime=0;
		this._useTime=0;
		this._overuseSetTime=0;
		this._paramType=-1;
		this._paramLevel=-1;
		this._maxUseNum=-1;
		this._UpgradeType=-1;
		this._UpgrateLv=-1;
		this._Bflv=-1;
		this._Bftp=-1;
		;
	}

	__class(Item,'enem.com.game.items.obj.Item');
	var __proto=Item.prototype;
	Laya.imps(__proto,{"engine.ui.interfaces.IGridData":true})
	/**
	*设置配置的json
	*@param info
	*/
	__proto.SetJsonObject=function(jsono,numparam){
		this.itemId=new long();
		this.SetModelId(parseInt(jsono[0]));
		if ((typeof (jsono[1])=='string')){
			if (numparam==null)this.num=1;
			else this.num=Math.floor(FormulaUtil.Compute(jsono[1],numparam));
			}else {
			this.num=jsono[1]==null ? 1 :jsono[1];
		}
	}

	/**
	*设置服务器物品数据信息
	*@param info
	*/
	__proto.SetInfo=function(info){
		this.itemId=Item.ToKey(info.index,info.configID,this.itemId);
		this._isFromServer=info !=null;
		this.SetModelId(info.configID);
		this.num=info.num;
		this.isBind=false;
		this.packetIndex=info.index;
		this.createtime=info.createTime !=null?info.createTime.fValue :0;
	}

	/**
	*设置服务器物品数据信息
	*@param info
	*/
	__proto.SetFitEquipInfo=function(info){
		this.itemId=Item.ToKey(1,info.type,this.itemId);
		this._isFromServer=info !=null;
		this.SetModelId(info.item);
		this.num=1;
		this.isBind=false;
	}

	__proto.setInfo2=function(itemBean){
		this.SetModelId(itemBean.id);
		this.num=itemBean.num;
	}

	__proto.SetGoodNumBean=function(info){
		this.SetModelId(info.id);
		this.num=info.num;
	}

	__proto.SetModelId=function(mid){
		if (Q_itemContainer.GetValue(mid)==null){
			this.modelId=0;
			this.unknowItemMid=mid;
		}
		else {
			this.modelId=mid;
			this.unknowItemMid=0;
		}
		this._isCanBatchUse=this.model.q_whether_batch==1;
	}

	/**
	*物品是否过期
	*/
	__proto.isOverdue=function(serverTime){
		if (!this.hasOverdue)
			return false;
		if (this._overdueSec > 0 && TextUtil.GetSecondsToNow(this._overdueSec,serverTime)< 0)
			return true;
		return false;
	}

	__proto.SetForGrid=function(grid,param){
		var hasTip=true;
		if ((param instanceof Array)){
			hasTip=param[1];
			param=param[0];
		}
		if (hasTip){
			var tips=new ItemTipsData();
			tips.item=this;
		}
		GridUtil.SetItemGrid(grid,this,tips,param);
	}

	__proto.Clone=function(){
		var item=ItemFactory.Ins.Get(this.type);
		item.itemId=this.itemId;
		item.modelId=this.modelId;
		item.num=this.num;
		item.isBind=this.isBind;
		item.packetIndex=this.packetIndex;
		item._overdueSec=this._overdueSec;
		item.unknowItemMid=this.unknowItemMid;
		item.ownerName=this.ownerName;
		item.createtime=this.createtime;
		return item;
	}

	/**
	*合并物品，如果合并失败或者只合并了一部分返回剩余物品
	*@param item
	*@return
	*/
	__proto.Combine=function(item){
		if (this.isEquip || this.modelId !=item.modelId)
			return item;
		this.num+=item.num;
		return null;
	}

	__proto.Dec=function(item){
		if (this.isEquip || this.modelId !=item.modelId)
			return this;
		if (this.num > item.num){
			this.num-=item.num;
			return this;
		}
		else {
			return null;
		}
	}

	__proto.isShowRed=function(level,serverMTime,funuse,func){
		var ui=this.ui;
		if (ui > 0)
			return func.apply(funuse,[ui,false]);
		if (this.modelId==1039)
			return false;
		return this.isCanUse(level,serverMTime)&&this._isCanBatchUse;
	}

	__proto.isCanUse=function(level,serverMTime){
		if(this.hasOverUse){
			if(this.overuseSetTime <=serverMTime&& this.model.q_level <=level){
				return true;
			}
		}
		else{
			if(this.model.q_level <=level){
				return true;
			}
		}
		return false;
	}

	__getset(0,__proto,'colorStr',function(){
		return ColorUtil$1.getQualityColor(this.quality);
	});

	__getset(0,__proto,'modelId',function(){
		return this._modelId;
		},function(value){
		this._modelId=value;
	});

	__getset(0,__proto,'paramType',function(){
		if (this._paramType==-1){
			if (this.model.q_param){
				var obj=JSONUtil.decode(this.model.q_param);
				this._paramType=obj.type;
			}
			else {
				this._paramType=0;
			}
		}
		return this._paramType;
	});

	__getset(0,__proto,'model',function(){
		return Q_itemContainer.dict[this._modelId];
	});

	/**品质*/
	__getset(0,__proto,'quality',function(){
		return ItemUtil.GetItemQualityByItem(this);
	});

	__getset(0,__proto,'name',function(){
		return ItemUtil.GetItemNameByItem(this);
	});

	__getset(0,__proto,'packetType',function(){
		return this.model.q_packet;
	});

	__getset(0,__proto,'paramLevel',function(){
		if (this._paramLevel==-1){
			if (this.model.q_param){
				var obj=JSONUtil.decode(this.model.q_param);
				this._paramLevel=obj.hasOwnProperty("level")?obj.level:0;
			}
			else {
				this._paramLevel=0;
			}
		}
		return this._paramLevel;
	});

	/**佩戴部位*/
	__getset(0,__proto,'gridId',function(){
		var param=ItemConfigFactory.Ins.Get(this._modelId);
		if (param !=null && param["gridId"] !=null)
			return param["gridId"];
		return 0;
	});

	/**物品过期时间（真实）*/
	/**物品过期时间（真实）*/
	__getset(0,__proto,'overdueSec',function(){
		return this._overdueSec;
		},function(value){
		this._overdueSec=value;
	});

	__getset(0,__proto,'job',function(){
		var param=ItemConfigFactory.Ins.Get(this._modelId);
		if (param !=null && param["job"] !=null)
			return param["job"];
		return 0;
	});

	/**
	*带品质颜色的物品名字
	*/
	__getset(0,__proto,'name2',function(){
		return ItemUtil.GetItemNameByItem(this,true);
	});

	/**是否传世道具**/
	__getset(0,__proto,'isChuanShi',function(){
		return this.type==10;
	});

	/**最大使用数量**/
	__getset(0,__proto,'maxUseNum',function(){
		if (this._maxUseNum==-1){
			var model=this.model;
			if (model !=null && model.q_param){
				var obj=JSONUtil.decode(model.q_param);
				if (obj.hasOwnProperty("max"))
					this._maxUseNum=parseInt(obj.max);
			}
		}
		if (this._maxUseNum==-1)
			this._maxUseNum=0;
		return this._maxUseNum;
	});

	//==============================================================================类型
	__getset(0,__proto,'type',function(){
		var model=this.model;
		return model ? model.q_type :0;
	});

	/**是否装备道具**/
	__getset(0,__proto,'isEquip',function(){
		return ItemUtil.IsEquip(this.type);
	});

	/**是否战纹**/
	__getset(0,__proto,'isZhanWen',function(){
		return this.type==10;
	});

	/**使用道具需要的等级**/
	__getset(0,__proto,'level',function(){
		var model=this.model;
		return model ? model.q_level :0;
	});

	/**使用道具级数**/
	__getset(0,__proto,'rank',function(){
		var model=this.model;
		return model ? model.q_order :0;
	});

	/**使用道具需要的转生**/
	__getset(0,__proto,'zs',function(){
		var model=this.model;
		return model ? model.q_zhuansheng :0;
	});

	__getset(0,__proto,'Bflv',function(){
		if (this._Bflv==-1){
			var str=JSONUtil.decode(this.model.q_param);
			this._Bflv=str.level ? str.level :0;
		}
		return this._Bflv;
	});

	/**阶数*/
	__getset(0,__proto,'levelnum',function(){
		return 0;
	});

	/**是否可堆叠*/
	__getset(0,__proto,'isPileUp',function(){
		return this.model !=null && this.model.q_max > 1;
	});

	__getset(0,__proto,'ui',function(){
		var model=this.model;
		if (model.q_ui !=null && model.q_ui !="")
			return parseInt(model.q_ui);
		return 0;
	});

	/**是否有过期时间*/
	__getset(0,__proto,'hasOverdue',function(){
		return this._overdueSec > 0 || this._overdueSetSec !=0 || this._overdueSetTime !=null;
	});

	__getset(0,__proto,'giftItem',function(){
		if (this.model.q_param !=null){
			var obj=JSONUtil.decode(this.model.q_param);
			if (obj.hasOwnProperty("gift")){
				var arr=JSONUtil.decode(obj["gift"]);
				return ["经验",arr];
			}
		}
		return null;
	});

	/**是否有使用时间*/
	__getset(0,__proto,'hasOverUse',function(){
		if (this.model.q_param2){
			var obj=JSONUtil.decode(this.model.q_param2);
			this._useTime=obj.hasOwnProperty("overtime")?obj.overtime:0;
			if(this.createtime==0)
				this._useTime=0;
			this._overuseSetTime=this.createtime+this._useTime*1000;
		}
		return this._useTime >0;
	});

	__getset(0,__proto,'overuseSetTime',function(){
		if (this.model.q_param2){
			var obj=JSONUtil.decode(this.model.q_param2);
			this._useTime=obj.hasOwnProperty("overtime")?obj.overtime:0;
			if(this.createtime==0)
				this._useTime=0;
			this._overuseSetTime=this.createtime+this._useTime*1000;
		}
		return this._overuseSetTime;
	});

	/**能否批量使用**/
	__getset(0,__proto,'isCanBatchUse',function(){
		return this._isCanBatchUse;
	});

	/**配置对象**/
	__getset(0,__proto,'config',function(){
		return ItemConfigFactory.Ins.Get(this._modelId);
	});

	__getset(0,__proto,'isFromServer',function(){
		return this._isFromServer;
	});

	__getset(0,__proto,'HandBookAttr',function(){
		if (this.model.q_param){
			return AttributeUtil.JArrStrToAttList(this.model.q_param);
		}
		return null;
	});

	__getset(0,__proto,'UpgradeType',function(){
		if (this._UpgradeType==-1){
			var model=this.model;
			if (model.q_param){
				var obj=JSONUtil.decode(model.q_param);
				if (obj.hasOwnProperty("type"))
					this._UpgradeType=parseInt(obj.type);
			}
		}
		if (this._UpgradeType==-1)
			this._UpgradeType=0;
		return this._UpgradeType;
	});

	__getset(0,__proto,'Bftp',function(){
		if (this._Bftp==-1){
			var str=JSONUtil.decode(this.model.q_param);
			this._Bftp=str.type ? str.type :0;
		}
		return this._Bftp;
	});

	__getset(0,__proto,'UpgrateLv',function(){
		if (this._UpgrateLv==-1){
			var model=this.model;
			if (model.q_param){
				var obj=JSONUtil.decode(model.q_param);
				if (obj.hasOwnProperty("level"))
					this._UpgrateLv=parseInt(obj.level);
			}
		}
		if (this._UpgrateLv==-1)
			this._UpgrateLv=0;
		return this._UpgrateLv;
	});

	Item.ToKey=function(index,cfgid,ret){
		var model=Q_itemContainer.GetValue(cfgid);
		if (!model){
			return null;
		}
		return Item.ToKey2(model.q_packet,index,ret);
	}

	Item.ToKey2=function(packey,index,ret){
		if (!ret)ret=long.create0(packey,index);
		else ret.SetRawData(index,packey);
		return ret;
	}

	return Item;
})()


//class enem.com.game.battle.common.event.BattleEvent
var BattleEvent=(function(){
	function BattleEvent(){}
	__class(BattleEvent,'enem.com.game.battle.common.event.BattleEvent');
	BattleEvent.ENTER_VIEW_OVER="enter_view_over";
	BattleEvent.REAL_ENTER="real_enter";
	BattleEvent.REAL_QUIT="real_quit";
	BattleEvent.ROUND_CHANGE="round_change";
	BattleEvent.MONSTER_HP_CHANGE="boss_hp_change";
	return BattleEvent;
})()


/**
*道具工厂类 （所有特殊类型道具都有一个实现）
*/
//class enem.com.game.items.ItemFactory
var ItemFactory=(function(){
	function ItemFactory(){
		this.clss={};
	}

	__class(ItemFactory,'enem.com.game.items.ItemFactory');
	var __proto=ItemFactory.prototype;
	__proto.Init=function(){
		this.clss[4]=ItemEquip;
		this.clss[11]=ItemZhoushu;
		this.clss[17]=ItemHorseEquip;
		this.clss[22]=ItemUpgradeEquip;
		this.clss[31]=ItemYuHun;
		this.clss[32]=ItemMingGe;
		this.clss[42]=ItemFitEquip;
		this.clss[43]=ItemFitGem;
	}

	__proto.Get=function(type){
		var cls=this.clss[type];
		if (cls==null)
			cls=Item;
		return new cls();
	}

	__getset(1,ItemFactory,'Ins',function(){
		if (ItemFactory._ins==null){
			ItemFactory._ins=new ItemFactory();
			ItemFactory._ins.Init();
		}
		return ItemFactory._ins;
	});

	ItemFactory._ins=null;
	return ItemFactory;
})()


//class enem.com.game.task.events.TaskEvent
var TaskEvent=(function(){
	function TaskEvent(){}
	__class(TaskEvent,'enem.com.game.task.events.TaskEvent');
	TaskEvent.TASK_PROGRESS="task_progress";
	TaskEvent.TASK_NEW="task_new";
	return TaskEvent;
})()


//class enem.com.game.godequip.GodDate.GodBetterVo
var GodBetterVo=(function(){
	function GodBetterVo(id,idx,_pos){
		this.heroid=0;
		this.bagindx=0;
		this.pos=0;
		this.heroid=id;
		this.bagindx=idx;
		this.pos=_pos;
	}

	__class(GodBetterVo,'enem.com.game.godequip.GodDate.GodBetterVo');
	return GodBetterVo;
})()


//class enem.com.game.summon.EnumHuntType
var EnumHuntType=(function(){
	function EnumHuntType(){}
	__class(EnumHuntType,'enem.com.game.summon.EnumHuntType');
	EnumHuntType.XUNBAO_NORMAL_index=0;
	EnumHuntType.XUNBAO_ZHAOLING_index=1;
	EnumHuntType.XUNBAO_NIUDAN_index=2;
	EnumHuntType.XUNBAO_JUNSHI_index=3;
	EnumHuntType.XUNBAO_SPELL_index=5;
	EnumHuntType.XUNBAO_GodPray_index=6;
	return EnumHuntType;
})()


//class enem.com.game.forge.enum.EnumForgeType
var EnumForgeType=(function(){
	function EnumForgeType(){}
	__class(EnumForgeType,'enem.com.game.forge.enum.EnumForgeType');
	EnumForgeType.QIANGHUA=1;
	EnumForgeType.JINGLIAN=2;
	EnumForgeType.DUANLIAN=3;
	EnumForgeType.GEM=4;
	EnumForgeType.BAOQI=5;
	EnumForgeType.FIT_ART_WJ1=6;
	EnumForgeType.FIT_EQUIP=7;
	EnumForgeType.FIT_ART_WJ2=8;
	EnumForgeType.FIT_ART_WJ3=9;
	EnumForgeType.FIT_ART_HY=10;
	EnumForgeType.FIT_ART_JS=11;
	EnumForgeType.FIT_ART_MJ=12;
	return EnumForgeType;
})()


//class enem.com.game.player.bean.HeroExteriorBean
var HeroExteriorBean=(function(){
	function HeroExteriorBean(){
		/**名字 */
		this.name=null;
		/**性别[1:男性][2:女性] */
		this.gender=0;
		/**职业[1:战士][2:法师][3:道士][4:通用] */
		this.profession=0;
		/**坐骑 */
		this.horse=0;
		/**翅膀 */
		this.wing=0;
		/**盔甲 */
		this.armor=0;
		/**武器 */
		this.weapon=0;
		/**称号 */
		this.title=0;
		/**vip等级 */
		this.vip=0;
		/**军团名字**/
		this.guildName="";
		/**爵位**/
		this.juewei=0;
		/**精灵**/
		this.jingling=0;
		/**光环**/
		this.gh=0;
		/**守护**/
		this.sh=0;
		/**红颜法阵**/
		this.fz=0;
		/**红颜灵气**/
		this.lq=0;
		this.useSpriteSkin=false;
		this.useClothSkin=false;
		this.useWeaponSkin=false;
		this.useHorseSkin=false;
		this.useWingSkin=false;
	}

	__class(HeroExteriorBean,'enem.com.game.player.bean.HeroExteriorBean');
	var __proto=HeroExteriorBean.prototype;
	Laya.imps(__proto,{"engine.base.pool.spool.ISimplePool":true})
	__proto.clear=function(){
		this.name=this.guildName=null;
		this.gender=this.profession=this.horse=this.wing=this.armor=this.weapon=this.title=this.vip=this.juewei=this.jingling=this.gh=this.sh=0;
		this.useSpriteSkin=this.useClothSkin=this.useWeaponSkin=this.useHorseSkin=this.useWingSkin=false;
	}

	return HeroExteriorBean;
})()


/**
*物品类型枚举
*
*@author Administrator
*/
//class enem.com.game.items.enum.EnumItemType
var EnumItemType=(function(){
	function EnumItemType(){}
	__class(EnumItemType,'enem.com.game.items.enum.EnumItemType');
	EnumItemType.initName=function(){
		EnumItemType.typeIdName.put(43,"合体宝石");
		EnumItemType.typeIdName.put(11,"咒术");
		EnumItemType.typeIdName.put(32,"命格");
	}

	EnumItemType.typeGetChName=function(type){
		if (EnumItemType.typeIdName.length <=0){
			EnumItemType.initName();
		}
		if (EnumItemType.typeIdName.containsKey(type)){
			return EnumItemType.typeIdName.get(type);
		}
		return "小悦悦";
	}

	EnumItemType.GOLD=1;
	EnumItemType.MONEY=2;
	EnumItemType.NORMAL=3;
	EnumItemType.Equip=4;
	EnumItemType.WEIWANG=5;
	EnumItemType.ZHUANGSHENG=6;
	EnumItemType.DAN_YAO=8;
	EnumItemType.BIND_GOLD=9;
	EnumItemType.CHUANSHI=10;
	EnumItemType.ZHOUSHU=11;
	EnumItemType.ZHOUSHUJINGHUA=12;
	EnumItemType.BINGFA=13;
	EnumItemType.BINGHUN=14;
	EnumItemType.TUJIAN=15;
	EnumItemType.HORSE_CANYE=16;
	EnumItemType.HORSEEQUIP=17;
	EnumItemType.HORSEEQUIP_STARUP=18;
	EnumItemType.EXP=19;
	EnumItemType.UNLOCK_ZHANWENGRID=20;
	EnumItemType.UPGRADEQUIP=22;
	EnumItemType.PET_CARD=24;
	EnumItemType.SHUXINGDAN=25;
	EnumItemType.JINZCUT=26;
	EnumItemType.LINGZHUANG=27;
	EnumItemType.GONGXUN=28;
	EnumItemType.AUTONOTIC=30;
	EnumItemType.YUHUN=31;
	EnumItemType.MINGGE=32;
	EnumItemType.GUILD_CONTRIBUTION=34;
	EnumItemType.UPGRADE=36;
	EnumItemType.SAN_GUO_BI=37;
	EnumItemType.XUNBAO_JIFEN=38;
	EnumItemType.CHIP=39;
	EnumItemType.OPTION_GIFT=40;
	EnumItemType.EMPTY_CITY_SCORE=41;
	EnumItemType.FIT_EQUIP=42;
	EnumItemType.FIT_GEM=43;
	EnumItemType.PET_EXP=60;
	EnumItemType.TUJIANCARD=45;
	EnumItemType.GUDINGLIBAO=57;
	EnumItemType.TREASURE=69;
	EnumItemType.Spe_Delay=68;
	__static(EnumItemType,
	['typeIdName',function(){return this.typeIdName=new HashMap();}
	]);
	return EnumItemType;
})()


//class enem.com.base.enter.proload.EnumPreloadTaskStatus
var EnumPreloadTaskStatus=(function(){
	function EnumPreloadTaskStatus(){}
	__class(EnumPreloadTaskStatus,'enem.com.base.enter.proload.EnumPreloadTaskStatus');
	EnumPreloadTaskStatus.Waiting=1;
	EnumPreloadTaskStatus.Running=2;
	EnumPreloadTaskStatus.Complete=3;
	return EnumPreloadTaskStatus;
})()


/**
*战斗组
*/
//class enem.com.game.battle.common.bean.CBattleGroupBean
var CBattleGroupBean=(function(){
	function CBattleGroupBean(){
		// 光环
		this.ring=0;
		// 守护
		this.guard=0;
		//红颜法阵
		this.HY_fz=0;
		//红颜灵气
		this.HY_lq=0;
		this.seats=[];
	}

	__class(CBattleGroupBean,'enem.com.game.battle.common.bean.CBattleGroupBean');
	var __proto=CBattleGroupBean.prototype;
	//
	__proto.clear=function(){
		this.ring=this.guard=0;
		this.seats.forEach(function(seat){
			SimplePool.recover(seat);
		});
		this.seats.length=0;
	}

	__proto.AddBeans=function(beans){
		var _$this=this;
		if ((beans instanceof Array)){
			beans.forEach(function(bean){
				_$this.AddBean(bean);
			},this);
			}else{
			this.AddBean(beans);
		}
	}

	__proto.AddBean=function(bean){
		var seat;
		for (var i=0;i < this.seats.length;++i){
			if (this.seats[i].row==bean.row && this.seats[i].pos==bean.pos){
				seat=this.seats[i];
				break ;
			}
		}
		if (seat==null){
			seat=SimplePool.getItem(CBattleSeatBean);
			seat.row=bean.row;
			seat.pos=bean.pos;
			this.seats.push(seat);
		}
		seat.beans.push(bean);
	}

	__proto.GetSeat=function(row,pos){
		for (var i=0;i < this.seats.length;++i){
			if (this.seats[i].row==row && this.seats[i].pos==pos){
				return this.seats[i];
			}
		}
		return null;
	}

	// 根据类型分隔
	__proto.GetBeansByType=function(cls){
		var ret=[];
		this.seats.forEach(function(seat){
			seat.beans.forEach(function(bean){
				if (Laya.__typeof(bean,cls)){
					ret.push(bean);
				}
			});
		})
		return ret;
	}

	return CBattleGroupBean;
})()


//class enem.com.game.expedition.event.ExpeditionEvent
var ExpeditionEvent=(function(){
	function ExpeditionEvent(){}
	__class(ExpeditionEvent,'enem.com.game.expedition.event.ExpeditionEvent');
	ExpeditionEvent.YUANZHENG_GETINFO="yuanzheng_info";
	ExpeditionEvent.YUANZHENG_REFRESH_SKILL="yuanzheng_refresh_buff";
	ExpeditionEvent.YUANZHENG_BUY="yuanzheng_buy";
	ExpeditionEvent.YUANZHENG_RELIVE="yuanzheng_relive";
	ExpeditionEvent.YUANZHENG_RESET="yuanzheng_reset";
	ExpeditionEvent.YUANZHENG_TAKE_SKILL="yuanzheng_take_buff";
	ExpeditionEvent.YUANZHENG_TAKE_PRIZE="yuanzheng_take_prize";
	ExpeditionEvent.YUANZHENGTEAM="yuanzheng_teamconfig";
	ExpeditionEvent.YUANZHENG_CANCEL_AUTO="YUANZHENG_CANCEL_AUTO";
	return ExpeditionEvent;
})()


//class enem.com.game.auction.AucEnum.AucShopEnum
var AucShopEnum=(function(){
	function AucShopEnum(){}
	__class(AucShopEnum,'enem.com.game.auction.AucEnum.AucShopEnum');
	AucShopEnum.xitong=1;
	AucShopEnum.banghui=2;
	AucShopEnum.PERSON=3;
	return AucShopEnum;
})()


//class enem.com.game.guildbattle.EnumGuildBattle
var EnumGuildBattle=(function(){
	function EnumGuildBattle(){}
	__class(EnumGuildBattle,'enem.com.game.guildbattle.EnumGuildBattle');
	EnumGuildBattle.RANK_TYPE_SCORE=1;
	EnumGuildBattle.RANK_TYPE_DAMAGE=2;
	return EnumGuildBattle;
})()


/**对应的宝箱领取与否**/
//class enem.com.game.FuLidaTing.vo.UtrlGiftVo
var UtrlGiftVo=(function(){
	function UtrlGiftVo(data){
		this._IsTake=false;
		this._q_rollcoin=null;
		this._q_rollcoin=data;
	}

	__class(UtrlGiftVo,'enem.com.game.FuLidaTing.vo.UtrlGiftVo');
	var __proto=UtrlGiftVo.prototype;
	__getset(0,__proto,'IsTake',function(){
		return this._IsTake;
		},function(value){
		this._IsTake=value;
	});

	return UtrlGiftVo;
})()


/**
*邮件事件
*/
//class enem.com.game.mail.event.MailEvent
var MailEvent=(function(){
	function MailEvent(){}
	__class(MailEvent,'enem.com.game.mail.event.MailEvent');
	MailEvent.MAIL_ADD="mail_add";
	MailEvent.MAIL_DEL="mail_del";
	MailEvent.MAIL_READ="mail_read";
	MailEvent.MAIL_COLLECT="mail_collect";
	MailEvent.MAIL_UPDATE_LIST="MAIL_UPDATE_LIST";
	return MailEvent;
})()


//class enem.com.game.daily.officialpost.event.OfficialPostEvent
var OfficialPostEvent=(function(){
	function OfficialPostEvent(){}
	__class(OfficialPostEvent,'enem.com.game.daily.officialpost.event.OfficialPostEvent');
	OfficialPostEvent.OFFICIAL_UPDATE_ALL_INFO="OFFICIAL_UPDATE_ALL_INFO";
	OfficialPostEvent.OFFICIAL_UPDATE_ACTIVITY_VALUE="OFFICIAL_UPDATE_ACTIVITY_VALUE";
	OfficialPostEvent.OFFICIAL_UPDATE_ONE_INFO="OFFICIAL_UPDATE_ONE_INFO";
	OfficialPostEvent.OFFICIAL_UPDATE_LEVEL="OFFICIAL_UPDATE_LEVEL";
	OfficialPostEvent.OFFICIAL_UPDATE_BOX_GOT_STATE="OFFICIAL_UPDATE_BOX_GOT_STATE";
	OfficialPostEvent.OFFICIAL_UPDATE_ONE_RES_ITEM="OFFICIAL_UPDATE_ONE_RES_ITEM";
	OfficialPostEvent.OFFICIAL_UPDATE_ONE_EXPE_ITEM="OFFICIAL_UPDATE_ONE_EXPE_ITEM";
	OfficialPostEvent.OFFICIAL_BACK_ONE_RES_ITEM="OFFICIAL_BACK_ONE_RES_ITEM";
	OfficialPostEvent.OFFICIAL_BACK_ONE_EXPE_ITEM="OFFICIAL_BACK_ONE_EXPE_ITEM";
	OfficialPostEvent.OFFICIAL_TAKE_SUCCESS="OFFICIAL_TAKE_SUCCESS";
	return OfficialPostEvent;
})()


//class enem.com.game.xunbao.Enum.EnumXunBao
var EnumXunBao=(function(){
	function EnumXunBao(){}
	__class(EnumXunBao,'enem.com.game.xunbao.Enum.EnumXunBao');
	EnumXunBao.XUNBAOSHOW=1;
	EnumXunBao.XUNBAOFunc=1;
	EnumXunBao.XUNBAOSTAR=5;
	EnumXunBao.XUNBAOFIRST=8;
	EnumXunBao.XUNBAO_MAIN=1;
	EnumXunBao.XUNBAO_BEAUTY=2;
	EnumXunBao.XUNBAO_JUNSHI=3;
	EnumXunBao.XUNBAO_WUHU=4;
	EnumXunBao.XUNBAO_MAN=5;
	EnumXunBao.XUNBAO_SPELL=6;
	EnumXunBao.XUNBAO_Pray=7;
	EnumXunBao.XUNBAO_CELEBRATION=8;
	EnumXunBao.XUNBAO_DIANJIANG=9;
	EnumXunBao.XUNBAO_JIANG=11;
	EnumXunBao.XUNBAO_SHU=12;
	EnumXunBao.XUNBAO_WEI=13;
	EnumXunBao.XUNBAO_WU=14;
	EnumXunBao.XUNBAO_QUN=15;
	EnumXunBao.XUNBAO_SPE=16;
	EnumXunBao.XUNBAO_YunBao=17;
	return EnumXunBao;
})()


//class enem.com.game.gate.vo.ChapterSubVo
var ChapterSubVo=(function(){
	function ChapterSubVo(){
		this.start=0;
		this.end=0;
	}

	__class(ChapterSubVo,'enem.com.game.gate.vo.ChapterSubVo');
	return ChapterSubVo;
})()


/**
*骨骼动画
*/
//class enem.com.base.effect.UISkeleton
var UISkeleton=(function(){
	function UISkeleton(){
		this._ani=null;
		this._loop=false;
		this._isPlayed=false;
		this._playIndexOrName=null;
		this._isplaylist=true;
		// 播放完成自动销毁
		this._isEndPlayDispose=true;
		this._ani=new MSkeletonAnimation();
		this._ani.on("complete",this,this.onParseComplete);
		this._ani.on("stopped",this,this.onStoped);
	}

	__class(UISkeleton,'enem.com.base.effect.UISkeleton');
	var __proto=UISkeleton.prototype;
	__proto.SetData=function(restype,filename,loop){
		(loop===void 0)&& (loop=false);
		this._loop=loop;
		this._ani.SetData(restype,filename);
	}

	__proto.play=function(nameOrIndex){
		this._isPlayed=true;
		this._playIndexOrName=nameOrIndex;
		if (this._ani.isParseComplete){
			this._ani.skeleton.play(nameOrIndex,false);
		}
	}

	__proto.stop=function(){
		this._isPlayed=false;
		if (this._ani.isParseComplete){
			this._ani.skeleton.stop();
		}
	}

	__proto.onParseComplete=function(){
		if (this._isPlayed){
			this.play(this._playIndexOrName);
		}
	}

	__proto.onStoped=function(){
		var index=this._ani.currAniIndex;
		var num=this._ani.skeleton.getAnimNum();
		if(!this._loop){
			if (this._isEndPlayDispose && (index >=num-1 || !this._isplaylist)){
				this.destroy();
				return;
			}
		}
		if (this._isplaylist){
			index++;
			if (index > num-1){
				index=num-1;
			}
			this._ani.skeleton.play(index,false);
		}
		else{
			this._ani.skeleton.play(this._playIndexOrName,false);
		}
	}

	__proto.destroy=function(){
		if (this._ani){
			this._ani.destroy();
			this._ani=null;
		}
	}

	__getset(0,__proto,'ani',function(){
		return this._ani;
	});

	UISkeleton.Create=function(filename,loop,isplaylist,endDispose,blendMode,nameOrIndex){
		(loop===void 0)&& (loop=false);
		(isplaylist===void 0)&& (isplaylist=true);
		(endDispose===void 0)&& (endDispose=true);
		(blendMode===void 0)&& (blendMode="normal");
		(nameOrIndex===void 0)&& (nameOrIndex=0);
		var ret=new UISkeleton();
		ret.SetData(1000,filename,loop);
		ret._isEndPlayDispose=endDispose;
		ret._isplaylist=isplaylist;
		ret.play(nameOrIndex);
		ret.ani.blendMode=blendMode;
		return ret;
	}

	return UISkeleton;
})()


/**
*文本点击链接处理
*@author Administrator
*/
//class enem.com.game.util.LinkUtil
var LinkUtil=(function(){
	function LinkUtil(){}
	__class(LinkUtil,'enem.com.game.util.LinkUtil');
	LinkUtil.LinkDo=function(key){
		if (key=="" || key==null)
			return;
		var params=key.split("_");
	}

	return LinkUtil;
})()


/**
*提示ID
*/
//class enem.com.game.prompt.enum.EnumMessage
var EnumMessage=(function(){
	function EnumMessage(){}
	__class(EnumMessage,'enem.com.game.prompt.enum.EnumMessage');
	EnumMessage.GETEXP=1;
	EnumMessage.GETITEM=2;
	EnumMessage.YUANBAOBUZU=4;
	EnumMessage.COIN_NOTENOUGH=6;
	EnumMessage.SHUXINGDANBUZU=9;
	EnumMessage.JINENGSHUBUZU=10;
	EnumMessage.DAOJUBUZU=11;
	EnumMessage.TJBZ_WFJH=14;
	EnumMessage.CZZWKF=15;
	EnumMessage.YBBZ=16;
	EnumMessage.YLYM=19;
	EnumMessage.SKILL_BUCHAOGUORENWUDENGJI=100;
	EnumMessage.FUNC_NOTOPEN=101;
	EnumMessage.BOSS_YIJIBAI=132;
	EnumMessage.BOSS_BUY=133;
	EnumMessage.CBT_GET_NOTICE=134;
	EnumMessage.QXTGSYC=135;
	EnumMessage.YCTT_GET_NOTICE=137;
	EnumMessage.CHALLENGE_COUNT_BUZU=140;
	EnumMessage.JJC_GOUMAICISHU=141;
	EnumMessage.GATE_KILLMONSTER=110;
	EnumMessage.GATE_FIGHTING=118;
	EnumMessage.QUANMINBOSSSKIP=138;
	EnumMessage.REVENGE=155;
	EnumMessage.XLNCIKJS=256;
	EnumMessage.YZ_BKTZ=220;
	EnumMessage.YZ_QXWCTZ=221;
	EnumMessage.YZ_YLQ=222;
	EnumMessage.YZ_YCZ=223;
	EnumMessage.YZ_DWYM=224;
	EnumMessage.YZ_CZCSYYW=225;
	EnumMessage.YZ_CZTS=226;
	EnumMessage.YZ_FHTS=227;
	EnumMessage.YZ_XZSS=228;
	EnumMessage.XN_LTSB=257;
	EnumMessage.ZS_TJBZ=260;
	EnumMessage.ZS_SYCSBZ=261;
	EnumMessage.ZS_QNBZ=262;
	EnumMessage.LIEMIN_XIYOU=240;
	EnumMessage.LIEMIN_MAXLV=241;
	EnumMessage.PACIFY_PEACE_ONE_KEY_FINISH=270;
	EnumMessage.PACIFY_PEACE_ALL_TASK_FINISH=271;
	EnumMessage.WZZB_GOUMAICISHU=321;
	EnumMessage.QYH_APPLY_END=230;
	EnumMessage.NORMALERROR=13;
	EnumMessage.DAYAFTER=332;
	EnumMessage.LINGQUCHENGOGNG=330;
	EnumMessage.JUEWEIGAIN=352;
	EnumMessage.SHENZHUANGNULL=367;
	EnumMessage.POURSCHEDULE=368;
	EnumMessage.YUEKA=371;
	EnumMessage.ZHONSHENKA=372;
	EnumMessage.TREE=390;
	EnumMessage.ZERO=391;
	EnumMessage.TUJIAN_STAR=395;
	EnumMessage.TUJIAN_UNDES=397;
	EnumMessage.ACTSHOPSURE=398;
	EnumMessage.QuanMingBoss=440;
	EnumMessage.FIT_REPLACE=459;
	EnumMessage.VIP_CARD_TIP=490;
	return EnumMessage;
})()


/**
*通用条件类型
*/
//class enem.com.game.conditon.enum.EnumCondType
var EnumCondType=(function(){
	function EnumCondType(){}
	__class(EnumCondType,'enem.com.game.conditon.enum.EnumCondType');
	EnumCondType.LEVEL=1;
	EnumCondType.ZHUANSHENG=2;
	EnumCondType.VIP=3;
	EnumCondType.LOGINDAY=4;
	EnumCondType.GOLDWEAPON_PER=5;
	EnumCondType.OPENDAY=6;
	EnumCondType.FINISH_GUANQIA=7;
	EnumCondType.ACTIVE_GOD_WEAPON=8;
	EnumCondType.TASK=9;
	EnumCondType.HORSELV=10;
	EnumCondType.SHOUHUN=11;
	EnumCondType.TONGLING=12;
	EnumCondType.TONGGUANFUBEN=13;
	EnumCondType.XUANNV_LEVEL=14;
	EnumCondType.BEAUTY_LEVEL=15;
	EnumCondType.LINGQI_LEVEL=16;
	EnumCondType.HORSE=17;
	EnumCondType.WING_LEVEL=18;
	EnumCondType.GOD_WEAPON_LEVEL=19;
	EnumCondType.JINGLING_LEVEL=20;
	EnumCondType.FINISH_TEAMP_COPY=21;
	EnumCondType.FINISH_PATA_COPY=22;
	EnumCondType.GUILD_LEVEL=23;
	EnumCondType.CONGZHIJINE=24;
	EnumCondType.POWER=25;
	EnumCondType.JJCRANK=26;
	EnumCondType.LEIJIDAYS=27;
	EnumCondType.FUWEN=29;
	EnumCondType.ITEMNEED=30;
	EnumCondType.FUNC_OPEN=31;
	EnumCondType.UPGRADE_LV=32;
	EnumCondType.COSTDAOBI=39;
	EnumCondType.CHARGEDAYS=40;
	EnumCondType.TODAYCHARGE=41;
	EnumCondType.HONYANFAZHEN=42;
	EnumCondType.HONYANLINGQI=43;
	EnumCondType.HONYANALLLV=44;
	EnumCondType.MANALLLV=45;
	EnumCondType.JUNSHIALLLV=46;
	EnumCondType.INTRENSIFYLV=47;
	EnumCondType.REFINELV=48;
	EnumCondType.TRAINLV=49;
	EnumCondType.GMLV=50;
	EnumCondType.PETNUM=51;
	EnumCondType.BEAUTY_NUM=52;
	EnumCondType.JUNSHI_NUM=61;
	EnumCondType.MANJIANG_NUM=62;
	EnumCondType.ZHANLING_NUM=66;
	EnumCondType.ZHONGSHENKA=122;
	EnumCondType.FIRSTBUY=90;
	EnumCondType.BINGFU=200;
	EnumCondType.JUNLING=201;
	EnumCondType.JUNQI=202;
	EnumCondType.JUNYIN=203;
	return EnumCondType;
})()


//class enem.com.ui.vo.BloodBarVo
var BloodBarVo=(function(){
	function BloodBarVo(){
		// 血条背景
		this.HP_BAR_BG_BORDER=null;
		this.HP_BAR_BG_BG=null;
		// 血条红色
		this.HP_BAR_RED=null;
		// 血条绿色
		this.HP_BAR_GREEN=null;
		// 血条白色
		this.HP_BAR_BAI=null;
		// 中间分割线
		this.HP_BAR_SPLIT=null;
		// 蓝条背景
		this.MP_BAR_BG_BORDER=null;
		this.MP_BAR_BG_BG=null;
		// 蓝条
		this.MP_BAR=null;
		// 格挡值条
		this.PARRAY_BAR=null;
		// 怒气条
		this.ANGER_BAR=null;
	}

	__class(BloodBarVo,'enem.com.ui.vo.BloodBarVo');
	var __proto=BloodBarVo.prototype;
	__proto.DrawBloodBar=function(org,size,dttype){
		var matrix=new Matrix();
		if (this.HP_BAR_BG_BG==null){
			this.HP_BAR_BG_BORDER=Laya.loader.getRes("res/ui/image/battle/daxuetiaodiborder.png");
			this.HP_BAR_BG_BG=Laya.loader.getRes("res/ui/image/battle/daxuetiaodibg.png");
			this.HP_BAR_RED=Laya.loader.getRes("res/ui/image/battle/daxuetiaohongbar.png");
			this.HP_BAR_GREEN=Laya.loader.getRes("res/ui/image/battle/daxuetiaolvbar.png");
			this.HP_BAR_BAI=Laya.loader.getRes("res/ui/image/battle/dahudunbaibar.png");
			this.MP_BAR_BG_BORDER=Laya.loader.getRes("res/ui/image/battle/lantiaodiborder.png");
			this.MP_BAR_BG_BG=Laya.loader.getRes("res/ui/image/battle/lantiaodibg.png");
			this.MP_BAR=Laya.loader.getRes("res/ui/image/battle/lantiaobar.png");
		}
		if (dttype==0){
			this.drawOne(org,60+2,6+2,this.HP_BAR_BG_BORDER);
		}
		else if (dttype==10){
			this.drawOne(org,60,6,this.HP_BAR_BG_BG);
		}
		else if (dttype==20){
			this.drawOne(org,60 ,6,this.HP_BAR_GREEN);
		}
		else if (dttype==30){
			this.drawOne(org,60 ,6,this.HP_BAR_BAI);
		}
		else if (dttype==4){
		}
		else if (dttype==5){
		}
		else if (dttype==1){
		}
		else if (dttype==2){
			this.drawOne(org,60 ,2,this.MP_BAR);
		}
		else if (dttype==3){
			this.drawThree(org,60+2,4,this.MP_BAR_BG_BORDER,this.MP_BAR_BG_BG,this.MP_BAR_BG_BORDER);
		}
	}

	/**
	*画3个图
	*/
	__proto.drawThree=function(org,ew,eh,b1,b2,b3){
		org.graphics.clear();
		org.size(ew,eh);
		org.graphics.drawTexture(b1,0,0,b1.width,eh);
		org.graphics.drawTexture(b2,b1.width,0,(ew-b1.width-b3.width),eh);
		org.graphics.drawTexture(b3,ew-b3.width,b3.width,b3.width,eh);
	}

	/**
	*画一个图
	*/
	__proto.drawOne=function(org,ew,eh,b1){
		org.graphics.clear();
		org.size(ew,eh);
		org.graphics.drawTexture(b1,0,0,ew,eh);
	}

	__proto.drawSplit=function(org,tw,gw,gh,b){
		org.graphics.clear();
		org.size(tw,gh);
		var ap=Math.max(0,tw-60)/ (gw *2);
		gw=tw / (60 / gw+ap);
		var count=1;
		var offx=count *gw;
		while(offx < tw){
			offx-=b.width / 2;
			org.graphics.drawTexture(b,offx,0,b.width,gh);
			offx=++count *gw;
		}
	}

	__getset(1,BloodBarVo,'Ins',function(){
		if (BloodBarVo._ins==null)
			BloodBarVo._ins=new BloodBarVo();
		return BloodBarVo._ins;
	});

	BloodBarVo._ins=null;
	BloodBarVo.BAR_DEFAULT_W=60;
	BloodBarVo.GRID_W=13;
	BloodBarVo.GRID_H=6;
	BloodBarVo.GRID_BG_H=8;
	BloodBarVo.GRID_MP_H=2;
	BloodBarVo.GRID_MPBG_H=4;
	BloodBarVo.GRID_ANGER_H=3;
	BloodBarVo.LAB_H=16;
	BloodBarVo.DT_H_BG=0;
	BloodBarVo.DT_H_SPT=1;
	BloodBarVo.DT_M=2;
	BloodBarVo.DT_M_BG=3;
	BloodBarVo.DT_P=4;
	BloodBarVo.DT_A=5;
	BloodBarVo.DT_H_R_1=10;
	BloodBarVo.DT_H_G_1=20;
	BloodBarVo.DT_H_B_1=30;
	return BloodBarVo;
})()


/**火烧赤壁信息**/
//class enem.com.game.expedition.burnchibi.BurnChiBiInfo
var BurnChiBiInfo=(function(){
	function BurnChiBiInfo(){
		/**最大可以同时进行的任务 */
		this._maxDoingTaskNum=0;
		/**今日可以进行的任务数 */
		this._todayRemainTaskNum=0;
		/**下次恢复需要的时间 */
		this._recoverTimeStamp=0;
		/**可以接取的任务 */
		this._acceptTasks=null;
		/**正在进行的任务 */
		this._doingTasks=null;
		/**任务总次数 */
		this._times=0;
	}

	__class(BurnChiBiInfo,'enem.com.game.expedition.burnchibi.BurnChiBiInfo');
	var __proto=BurnChiBiInfo.prototype;
	/**
	*更新火烧赤壁信息
	*@param bean
	*/
	__proto.updateChiBi=function(bean){
		this._maxDoingTaskNum=bean.count;
		this._todayRemainTaskNum=bean.today;
		this._recoverTimeStamp=bean.time.fValue/1000;
		this._acceptTasks=bean.task;
		this._doingTasks=bean.onTask;
		this._times=bean.times;
		EventCenter.Event("BURN_CHI_BI_UPDATE_ALL_INFO");
	}

	/**
	*更新最大同时进行任务次数
	*@param num
	*/
	__proto.updateDoingTaskNum=function(num){
		this._maxDoingTaskNum=num;
		EventCenter.Event("BURN_CHI_BI_UPDATE_DOING_MAX_NUM");
	}

	/**
	*更新今日可以进行的任务数和下次恢复时间戳
	*@param num
	*@param timeStamp
	*/
	__proto.updateRemainTaskNum=function(num,timeStamp){
		this._todayRemainTaskNum=num;
		if(timeStamp !=null)
			this._recoverTimeStamp=timeStamp.fValue/1000;
		EventCenter.Event("BURN_CHI_BI_UPDATE_REMAIN_NUM");
	}

	/**
	*刷新任务列表
	*@param list
	*/
	__proto.updateAcceptTask=function(list){
		this._acceptTasks=list;
		EventCenter.Event("BURN_CHI_BI_UPDATE_ACCEPT_TASKS");
	}

	/**
	*开始做任务
	*@param taskBean
	*/
	__proto.startTask=function(taskBean){
		var len=this._acceptTasks!=null?this._acceptTasks.length:0;
		var bean;
		for(var i=0;i < len;i++){
			bean=this._acceptTasks[i];
			if(bean.qid==taskBean.qid){
				this._acceptTasks.splice(i,1);
				break ;
			}
		}
		if(this._doingTasks==null)
			this._doingTasks=[];
		this._doingTasks.push(taskBean);
		EventCenter.Event("BURN_CHI_BI_UPDATE_DOING_TASKS");
	}

	/**
	*完成任务
	*@param qid
	*/
	__proto.finishTask=function(qid){
		var len=this._doingTasks!=null?this._doingTasks.length:0;
		var bean;
		for(var i=0;i < len;i++){
			bean=this._doingTasks[i];
			if(bean.qid==qid){
				this._doingTasks.splice(i,1);
				break ;
			}
		}
		EventCenter.Event("BURN_CHI_BI_UPDATE_DOING_TASKS");
	}

	/**
	*获得正在做的任务
	*@param qid
	*@return
	*/
	__proto.getDoingTask=function(qid){
		if(this._doingTasks !=null){
			var bean;
			for(var $each_bean in this._doingTasks){
				bean=this._doingTasks[$each_bean];
				if(bean.qid==qid)
					return bean;
			}
		}
		return null;
	}

	/**获得当前正在做任务的数量**/
	__getset(0,__proto,'curDoingTaskNum',function(){
		return this._doingTasks!=null?this._doingTasks.length:0;
	});

	__getset(0,__proto,'maxDoingTaskNum',function(){
		return this._maxDoingTaskNum;
	});

	__getset(0,__proto,'times',function(){
		return this._times;
	});

	__getset(0,__proto,'todayRemainTaskNum',function(){
		return this._todayRemainTaskNum;
	});

	__getset(0,__proto,'acceptTasks',function(){
		return this._acceptTasks;
	});

	__getset(0,__proto,'recoverTimeStamp',function(){
		return this._recoverTimeStamp;
	});

	__getset(0,__proto,'doingTasks',function(){
		return this._doingTasks;
	});

	return BurnChiBiInfo;
})()


//class enem.com.game.skill.events.SkillRedEvent
var SkillRedEvent=(function(){
	function SkillRedEvent(){}
	__class(SkillRedEvent,'enem.com.game.skill.events.SkillRedEvent');
	SkillRedEvent.SKILL_MAIN_RED="skill_main_red";
	SkillRedEvent.SKILL_SKILL_RED="skill_skill_red";
	SkillRedEvent.SKILL_NEIGONG_RED="skill_neigong_red";
	SkillRedEvent.SKILL_JINGMAI_RED="skill_jingmai_red";
	return SkillRedEvent;
})()


//class enem.com.game.battle.common.bean.BattleBeizhan
var BattleBeizhan=(function(){
	function BattleBeizhan(){
		this.friends=new Dictionary();
		this.enemies=new Dictionary();
	}

	__class(BattleBeizhan,'enem.com.game.battle.common.bean.BattleBeizhan');
	var __proto=BattleBeizhan.prototype;
	__proto.Push=function(bean,group){
		var type=BattleBeizhan.ObjectBeanToObjectType(bean);
		var dic=group==1 ? this.friends :this.enemies;
		var arr=dic.get(type);
		if (arr==null){
			arr=[];
			dic.set(type,arr);
		}
		arr.push(bean);
	}

	__proto.PopByUID=function(uid,group){
		var ret;
		var bFind=false;
		var dic=group==1 ? this.friends :this.enemies;
		for (var i=0;i < dic.values.length;++i){
			var values=dic.values[i];
			for (var j=0;j < values.length;++j){
				if (values[j].gid==uid){
					ret=values[j];
					bFind=true;
					values.splice(j,1);
					break ;
				}
			}
			if (bFind)break ;
		}
		return ret;
	}

	__proto.Pop=function(type,group){
		var dic=group==1 ? this.friends :this.enemies;
		var arr=dic.get(type);
		if (arr==null || arr.length==0){
			return null;
			}else{
			return arr.shift();
		}
	}

	__proto.Clear=function(){
		this.friends.clear();
		this.enemies.clear();
	}

	BattleBeizhan.ObjectBeanToObjectType=function(bean){
		if ((bean instanceof enem.com.game.battle.common.bean.HeroInBattleBean ))return 1;
		else if ((bean instanceof enem.com.game.battle.common.bean.PetInBattleBean ))return 2;
		else if ((bean instanceof enem.com.game.battle.common.bean.HongYanInBattleBean ))return 4;
		else if ((bean instanceof enem.com.game.battle.common.bean.JiGuanInBattleBean ))return 3;
		else if ((bean instanceof enem.com.game.battle.common.bean.AdviserInBattleBean ))return 5;
		else if ((bean instanceof enem.com.game.battle.common.bean.MonsterInBattleBean ))return 0;
	}

	return BattleBeizhan;
})()


/**
*物品品质
*
*@author Administrator
*/
//class enem.com.game.items.enum.EnumItemQuality
var EnumItemQuality=(function(){
	function EnumItemQuality(){}
	__class(EnumItemQuality,'enem.com.game.items.enum.EnumItemQuality');
	EnumItemQuality.WHITE=0;
	EnumItemQuality.GREEN=1;
	EnumItemQuality.BLUE=2;
	EnumItemQuality.PURPLE=3;
	EnumItemQuality.ORANGE=4;
	EnumItemQuality.RED=5;
	EnumItemQuality.GOLD=6;
	return EnumItemQuality;
})()


//class enem.com.game.yunying.EnumYYType
var EnumYYType=(function(){
	function EnumYYType(){}
	__class(EnumYYType,'enem.com.game.yunying.EnumYYType');
	EnumYYType.JJCRANK=207;
	EnumYYType.TYPE_TASK=1;
	EnumYYType.TYPE_SHOP=2;
	EnumYYType.TYPE_DUNGEON=3;
	EnumYYType.TYPE_BOSS_SERVER=4;
	EnumYYType.TYPE_BOSS_GUILD=5;
	EnumYYType.TYPE_UPGRADE=6;
	EnumYYType.TYPE_RMB=7;
	EnumYYType.TYPE_PATA=8;
	EnumYYType.TYPE_TUANGOU=9;
	EnumYYType.TYPE_RANK=10;
	return EnumYYType;
})()


/**
*一些禁止开关控制
*@author Administrator
*
*/
//class enem.com.game.client.enum.EnumForbidType
var EnumForbidType=(function(){
	function EnumForbidType(){}
	__class(EnumForbidType,'enem.com.game.client.enum.EnumForbidType');
	EnumForbidType.MOUSE_ACTION=1;
	EnumForbidType.KEY_ACTION=2;
	EnumForbidType.ONHOOK=3;
	return EnumForbidType;
})()


//class enem.com.game.yunying.EnumYunYing
var EnumYunYing=(function(){
	function EnumYunYing(){}
	__class(EnumYunYing,'enem.com.game.yunying.EnumYunYing');
	EnumYunYing.SHOUCHONG=1;
	EnumYunYing.WUJIANBAO=2;
	EnumYunYing.JIGUANGIFT=3;
	EnumYunYing.JIGUANSKILLF=51;
	EnumYunYing.JIGUANGIFT2=4;
	EnumYunYing.JIGUANGIFT3=5;
	EnumYunYing.UPGRADEONE=6;
	EnumYunYing.ZEROGIFT=7;
	EnumYunYing.MEIRICHONGZHI=8;
	EnumYunYing.FASHIONACT=9;
	EnumYunYing.PATAACT=11;
	EnumYunYing.MEIRIPAIHANG=12;
	EnumYunYing.YUNYINGHUODONG=13;
	EnumYunYing.CHAOZHICHONG=14;
	EnumYunYing.KONGCHENGJI=15;
	EnumYunYing.CHALLENGE_CAPTURE=16;
	EnumYunYing.KUAFUBOSS=17;
	EnumYunYing.NEWTARGET=18;
	EnumYunYing.CELEBRATION=19;
	EnumYunYing.VERIFY=20;
	EnumYunYing.ONEGIFT=21;
	EnumYunYing.TurnedOne=22;
	EnumYunYing.ONEGIFT_MORE=23;
	EnumYunYing.ZHUANSHENG=24;
	EnumYunYing.TurnedOne_2=25;
	EnumYunYing.TurnedOne_3=26;
	EnumYunYing.TurnedOne_4=27;
	EnumYunYing.KAIFUGIFT=28;
	EnumYunYing.LNGENERAL_GIFT=29;
	EnumYunYing.Yuntai_GIFT=30;
	EnumYunYing.EIGHTSALE_GIFT=31;
	EnumYunYing.PATAACT1=32;
	EnumYunYing.PATAACT2=33;
	EnumYunYing.PetDianBing=52;
	EnumYunYing.ONETOUZHI=35;
	EnumYunYing.CHAOZHICHONG2=36;
	EnumYunYing.QINGDIAN=53;
	EnumYunYing.DIANJIANGLUN=54;
	EnumYunYing.ThREECENTWORLD=63;
	EnumYunYing.RankRecharge=65;
	EnumYunYing.RankConst=64;
	EnumYunYing.DongzuoZL=67;
	EnumYunYing.CHONGZHIFANLI=68;
	EnumYunYing.TianTianFanLi=1000;
	EnumYunYing.FRAMECELL_NORMAL=1;
	EnumYunYing.FRAMECELL_RANK=2;
	EnumYunYing.FRAMECELL_REC=3;
	EnumYunYing.FRAMECELL_ITEM=4;
	EnumYunYing.FRAMECELL_FIVE=5;
	EnumYunYing.FRAMECELL_EXCHANGE=6;
	EnumYunYing.FRAMECELL_SELFCHIOCE=7;
	EnumYunYing.FRAMECELL_GIFT=8;
	EnumYunYing.FRAMECELL_ONE=9;
	EnumYunYing.FRAMECELL_QINGDIANGIFT=10;
	EnumYunYing.FRAMECELL_BUY=11;
	EnumYunYing.FRAMECELL_ITEM_TIP=12;
	EnumYunYing.FRAMECELL_FANLI=13;
	EnumYunYing.SUB_PANEL_NORM_1=1;
	EnumYunYing.SUB_PANEL_RANK_2=2;
	EnumYunYing.SUB_PANEL_PATA_3=3;
	EnumYunYing.SUB_PANEL_TUAN_4=4;
	EnumYunYing.SUB_PANEL_NULL_5=5;
	EnumYunYing.SUB_PANEL_CHAR_6=6;
	EnumYunYing.SUB_PANEL_JTUA_7=7;
	EnumYunYing.SUB_PANEL_WORB_8=8;
	EnumYunYing.SUB_PANEL_UPGR_9=9;
	EnumYunYing.SUB_PANEL_SHOP_10=10;
	EnumYunYing.SUB_PANEL_NULL_11=11;
	EnumYunYing.SUB_PANEL_PAGE_12=12;
	EnumYunYing.SUB_PANEL_PAGE_13=13;
	EnumYunYing.SUB_PANEL_PAGE_14=14;
	EnumYunYing.SUB_PANEL_PAGE_15=15;
	EnumYunYing.SUB_PANEL_PAGE_16=16;
	EnumYunYing.SUB_PANEL_PAGE_17=17;
	EnumYunYing.SUB_PANEL_PAGE_18=18;
	EnumYunYing.SUB_PANEL_PAGE_30=30;
	EnumYunYing.SUB_PANEL_PAGE_31=31;
	EnumYunYing.SUB_PANEL_PAGE_32=32;
	EnumYunYing.SUB_PANEL_PAGE_33=33;
	EnumYunYing.SUB_PANEL_PAGE_20=20;
	EnumYunYing.SUB_PANEL_PAGE_21=21;
	EnumYunYing.SUB_PANEL_PAGE_22=22;
	EnumYunYing.SUB_PANEL_PAGE_23=23;
	EnumYunYing.SUB_PANEL_PAGE_24=24;
	EnumYunYing.SUB_PANEL_PAGE_25=25;
	EnumYunYing.SUB_PANEL_PAGE_26=26;
	EnumYunYing.SUB_PANEL_PAGE_28=28;
	EnumYunYing.SUB_PANEL_PAGE_29=29;
	EnumYunYing.SUB_PANEL_PAGE_40=40;
	EnumYunYing.SUB_PANEL_PAGE_53=53;
	EnumYunYing.SUB_PANEL_PAGE_54=54;
	EnumYunYing.SUB_PANEL_PAGE_55=55;
	EnumYunYing.SUB_PANEL_PAGE_56=56;
	EnumYunYing.RED_TO=1;
	EnumYunYing.RED_CAN=2;
	EnumYunYing.RED_FORBID=0;
	EnumYunYing.TAG_CEL_RECHARGE=200022;
	EnumYunYing.TAG_CEL_EXCHANGE=200023;
	EnumYunYing.TAG_CEL_TREASURE=200024;
	EnumYunYing.TAG_CEL_BUY=200025;
	EnumYunYing.TAG_CEL_DAILY_RECHARGE=200026;
	EnumYunYing.TAG_CEL_CONSUME_RANK=200027;
	EnumYunYing.TAG_CEL_EXCHANGE_SHOP_SHOW=200028;
	EnumYunYing.TAG_CEL_EXCHANGE_SHOP_LIST=200029;
	EnumYunYing.SUB_TYPE_GUILD_CHALLENGE=10048;
	EnumYunYing.SANFENTIANXIA_JUEBANSHIZHUANG=1143;
	EnumYunYing.ONE_SECKILL=103500;
	EnumYunYing.MEIRI_CHONGZHI=10111;
	EnumYunYing.MEIZHOU_CHONGZHI=10113;
	EnumYunYing.MEIYUE_CHONGZHI=10112;
	EnumYunYing.JUMPKEY=10036;
	EnumYunYing.JUMPKEY2=10032;
	EnumYunYing.SPECIAL_HANDING=3;
	EnumYunYing.ULTIMATE_REWARD=302;
	EnumYunYing.SPECARD=2050;
	return EnumYunYing;
})()


//class enem.com.game.vip.events.VipEvent
var VipEvent=(function(){
	function VipEvent(){}
	__class(VipEvent,'enem.com.game.vip.events.VipEvent');
	VipEvent.VIP_CHANGE="vip_change";
	VipEvent.VIPGET="VIPGET";
	return VipEvent;
})()


//class enem.com.game.FuLidaTing.events.MoveUpEvents
var MoveUpEvents=(function(){
	function MoveUpEvents(){}
	__class(MoveUpEvents,'enem.com.game.FuLidaTing.events.MoveUpEvents');
	MoveUpEvents.FLDT_MOVEUP="FLDT_MOVEUP";
	MoveUpEvents.INITDATE="INITDATE";
	MoveUpEvents.FULI_MEIRI_QIANDAO="FULI_MEIRI_QIANDAO";
	MoveUpEvents.FULI_MEIRI_LOGIN="FULI_MEIRI_LOGIN";
	MoveUpEvents.MRIRI_HAOLI="MRIRI_HAOLI";
	MoveUpEvents.YUANBAO_DENGJI="YUANBAO_DENGJI";
	MoveUpEvents.DENGJI_LIBAO="DENGJI_LIBAO";
	MoveUpEvents.BAOXIANG_YAOQIAN="BAOXIANG_YAOQIAN";
	MoveUpEvents.YAOYIYAO="YAOYIYAO";
	MoveUpEvents.LOGIN_SONGYUANBAO="LOGIN_SONGYUANBAO";
	MoveUpEvents.SHAKETIME="TIMESCHANGE";
	MoveUpEvents.CARDHAVE="CARDHAVE";
	MoveUpEvents.YUEKABUY="YUEKABUY";
	MoveUpEvents.ZHONGSHENKA="ZHONGSHENKA";
	MoveUpEvents.FIRST_GIFT_GET="FirstGiftGet";
	MoveUpEvents.recPraySelect="recPraySelect";
	MoveUpEvents.recPrayGift="recPrayGift";
	MoveUpEvents.recPrayGiftError="recPrayGiftError";
	return MoveUpEvents;
})()


//class enem.com.game.monster.MonsterUtil
var MonsterUtil$1=(function(){
	function MonsterUtil(){
		;
	}

	__class(MonsterUtil,'enem.com.game.monster.MonsterUtil',null,'MonsterUtil$1');
	MonsterUtil.GetMonsterName=function(showID){
		var show=Q_monster_showContainer.GetValue(showID);
		return show!=null?show.q_name:"";
	}

	MonsterUtil.GetMonsterCamp=function(showID){
		var show=Q_monster_showContainer.GetValue(showID);
		return show!=null?show.q_country:0;
	}

	MonsterUtil.GetMonsterQuality=function(showID){
		var show=Q_monster_showContainer.GetValue(showID);
		return show!=null?show.q_quality:0;
	}

	MonsterUtil.GetMonsterRingID=function(showID){
		return MonsterUtil.GetMonsterQuality(showID);
	}

	MonsterUtil.GetMonsterLv=function(mid){
		return 1;
	}

	MonsterUtil.getTalk=function(talkId){
		var talk=Q_monster_talkContainer.GetValue(talkId);
		return talk!=null?talk.q_talk:null;
	}

	MonsterUtil.GetMonsterResByShowId=function(showid){
		var show=Q_monster_showContainer.GetValue(showid);
		return show && show.q_resid;
	}

	MonsterUtil.GetMonsterAttrList=function(monsterID){
		var q_monster=Q_monsterContainer.GetValue(monsterID);
		if(q_monster !=null && q_monster.q_attribute !=null)
			return AttributeUtil.JArrStrToAttList(q_monster.q_attribute);
		return null;
	}

	MonsterUtil.GetMonsterResType=function(enumid){
		return 110;
	}

	MonsterUtil.MONSTER_TYPE_NORMAL=1;
	MonsterUtil.MONSTER_TYPE_ELITE=2;
	MonsterUtil.MONSTER_TYPE_BOSS=3;
	return MonsterUtil;
})()


//class enem.com.game.guild.EnumGuild
var EnumGuild=(function(){
	function EnumGuild(){}
	__class(EnumGuild,'enem.com.game.guild.EnumGuild');
	EnumGuild.TAB_HALL=0;
	EnumGuild.TAB_COPY=1;
	EnumGuild.TAB_SKILL=2;
	EnumGuild.TAB_SIGNIN=3;
	EnumGuild.GUARD_TAB_GUARD=0;
	EnumGuild.GUARD_TAB_REWARD=1;
	EnumGuild.LIST_TYPE_GUILD=1;
	EnumGuild.LIST_TYPE_APPLY=2;
	EnumGuild.LIST_TYPE_MEMBER=3;
	EnumGuild.POS_CHAIRMAN=1;
	EnumGuild.POS_VICE_CHAIRMAN=2;
	EnumGuild.POS_MEMBER=3;
	EnumGuild.AUTHORITY_APPROVAL=1;
	EnumGuild.AUTHORITY_MANAGER_POS=2;
	EnumGuild.AUTHORITY_KICK_MEMBER=3;
	EnumGuild.EVENT_TYPE_ADD=1;
	EnumGuild.EVENT_TYPE_QUIT=2;
	EnumGuild.EVENT_TYPE_KICK=3;
	EnumGuild.EVENT_TYPE_CELEBRATE=4;
	EnumGuild.EVENT_TYPE_CHANGE_POS=10;
	return EnumGuild;
})()


//class enem.com.game.newfunction.enum.EnumFuncID
var EnumFuncID=(function(){
	function EnumFuncID(){}
	__class(EnumFuncID,'enem.com.game.newfunction.enum.EnumFuncID');
	__getset(1,EnumFuncID,'NextDefineId',function(){
		return EnumFuncID.DEFINEID++;
	});

	EnumFuncID.isUpgradeFunc=function(funcID){
		return [35,36,12,13,138,17,41,43,44,45].indexOf(funcID)!=-1;
	}

	EnumFuncID.FuncName=function(id){
		return Q_newfuncContainer.GetValue(id).q_string_name;
	}

	EnumFuncID.GUANQIA=1;
	EnumFuncID.MAP=2;
	EnumFuncID.DAILY_LILIAN=3;
	EnumFuncID.DAILY_SHIMEN=4;
	EnumFuncID.DAILY_ANBANG=5;
	EnumFuncID.DAILY_XIANWEI=6;
	EnumFuncID.ACHIEVEMENT=8;
	EnumFuncID.VIP=9;
	EnumFuncID.RANK=10;
	EnumFuncID.SKILL=11;
	EnumFuncID.HORSE=12;
	EnumFuncID.WING=13;
	EnumFuncID.JM_JINGMAI=14;
	EnumFuncID.JM_DANYAO=15;
	EnumFuncID.JM_FUWEN=16;
	EnumFuncID.SHOUHU_JINGL=17;
	EnumFuncID.FASHION=23;
	EnumFuncID.TITLE=24;
	EnumFuncID.TAOZHUANG=25;
	EnumFuncID.SHENZHUANG=27;
	EnumFuncID.BINGFA=28;
	EnumFuncID.QIANGHUA=29;
	EnumFuncID.JINGLIAN=30;
	EnumFuncID.DUANLIAN=31;
	EnumFuncID.GEM=32;
	EnumFuncID.WUJIANG_LV=33;
	EnumFuncID.WUJIANG_AWAKEN=331;
	EnumFuncID.WUJIANG_SKILL=34;
	EnumFuncID.WUJIANG_TONGLING=35;
	EnumFuncID.WUJIANG_SHOUHUN=36;
	EnumFuncID.XUANNV_LV=41;
	EnumFuncID.XUANNV_FAQI=42;
	EnumFuncID.XUANNV_HUANIAN=43;
	EnumFuncID.XUANNV_LINGQI=44;
	EnumFuncID.XUANNV_FEISHENG=45;
	EnumFuncID.LINGT_LV=46;
	EnumFuncID.LINGT_YULING=47;
	EnumFuncID.LINGT_MINGGE=48;
	EnumFuncID.LINGT_HECHENG=49;
	EnumFuncID.FB_MAT=50;
	EnumFuncID.FB_CANGBAOTU=51;
	EnumFuncID.FB_LINGLONGTA=52;
	EnumFuncID.FB_TIANTING=53;
	EnumFuncID.FB_HRD=54;
	EnumFuncID.FB_XXHJ=55;
	EnumFuncID.BOSS_PERSONAL=56;
	EnumFuncID.BOSS_WORLD=57;
	EnumFuncID.BOSS_FIELD=58;
	EnumFuncID.BOSS_ZHIZUN=59;
	EnumFuncID.XIANSHANXUNBAO=60;
	EnumFuncID.CROSS_TEAM_COPY=61;
	EnumFuncID.CROSS_BOSS=62;
	EnumFuncID.CROSS_ZHU_LU_ZHONG_YUAN=63;
	EnumFuncID.MX_YUANZHENG=64;
	EnumFuncID.MX_BURNCHIBI=65;
	EnumFuncID.ACTIVITY_KEJU=68;
	EnumFuncID.ACTIVITY_CCJJ=69;
	EnumFuncID.GUILD_BOSS=70;
	EnumFuncID.ACTIVITY_JCT=71;
	EnumFuncID.GUILD_BATTLE=72;
	EnumFuncID.GUILD=76;
	EnumFuncID.JJ_JJC=77;
	EnumFuncID.JJ_QYH=78;
	EnumFuncID.JJ_WZZB=79;
	EnumFuncID.JJ_SGZC=80;
	EnumFuncID.FULIDATING=82;
	EnumFuncID.MALL=83;
	EnumFuncID.AUCTION=84;
	EnumFuncID.MARRIAGE=86;
	EnumFuncID.TOTEM=87;
	EnumFuncID.NIMIN=88;
	EnumFuncID.OPENSERVE=89;
	EnumFuncID.MEIRICHONGZHI=90;
	EnumFuncID.CHENGZHANGJIJIN=91;
	EnumFuncID.TOUZIJIHUA=91;
	EnumFuncID.XUNBAO=92;
	EnumFuncID.LOGIN_YUANBAO=93;
	EnumFuncID.ZHUANSHENG=95;
	EnumFuncID.BAG=97;
	EnumFuncID.RONGLIAN=98;
	EnumFuncID.ROLE=99;
	EnumFuncID.STANDFORCOIN=100;
	EnumFuncID.EQUIPSHOP=101;
	EnumFuncID.GOLDSHOP=102;
	EnumFuncID.LONGROADSHOP=104;
	EnumFuncID.GUILDSHOP=105;
	EnumFuncID.ARENA_SHOP=107;
	EnumFuncID.PET_SHOP=109;
	EnumFuncID.CROSS_ZHULU_SHOP=113;
	EnumFuncID.CCJJ_SHOP=115;
	EnumFuncID.CCJJ_ANSWER=116;
	EnumFuncID.YUANZHENGSHOP=117;
	EnumFuncID.BAIWANYUANBAO=119;
	EnumFuncID.FULIDATING_SIGN=118;
	EnumFuncID.FULIDATING_BAIWAN=119;
	EnumFuncID.FULIDATING_TREE=120;
	EnumFuncID.FULIDATING_YUEKA=121;
	EnumFuncID.FULIDATING_ZHONG=122;
	EnumFuncID.FULIDATING_SANGUO=123;
	EnumFuncID.FULIDATING_ACT=124;
	EnumFuncID.FULIDATING_ADV=125;
	EnumFuncID.GOD_LV=127;
	EnumFuncID.GOD_TIANFU=128;
	EnumFuncID.GOD_TIANMING=129;
	EnumFuncID.GOD_JUEXING=130;
	EnumFuncID.GOD_HECHENG=131;
	EnumFuncID.GOD_TUPO=132;
	EnumFuncID.GOD_BAOQI=133;
	EnumFuncID.GOD_SHENGSHOU=134;
	EnumFuncID.GOD_ZHULING=135;
	EnumFuncID.GOD_BINGHUN=136;
	EnumFuncID.GOD_TAOZHUANG=137;
	EnumFuncID.SHOUHU_SHENBING=138;
	EnumFuncID.GOD_SHENZHU=140;
	EnumFuncID.AMULET=141;
	EnumFuncID.MAIN_CITY=142;
	EnumFuncID.VICE_HERO=143;
	EnumFuncID.GUILD_TERRITORY=145;
	EnumFuncID.GUILD_DUNGEON=146;
	EnumFuncID.GUILD_SIGN=147;
	EnumFuncID.SUPERFIRSTBUY=149;
	EnumFuncID.ZHIZHENGYIJIE=150;
	EnumFuncID.BAYUANLIBAO=151;
	EnumFuncID.UPGRADEONE=152;
	EnumFuncID.GUILD_SKILL=153;
	EnumFuncID.GUILD_GUARD=154;
	EnumFuncID.JUNSHI=155;
	EnumFuncID.JUNSHI_UP=156;
	EnumFuncID.JUNSHI_FAQI=157;
	EnumFuncID.MANJIANG=160;
	EnumFuncID.MANJIANG_UP=161;
	EnumFuncID.MANJIANG_FAQI=162;
	EnumFuncID.MANJINAG_JUEWU=163;
	EnumFuncID.MANJINAG_JINGMAI=164;
	EnumFuncID.JIGUANWENSHI=165;
	EnumFuncID.ZERO_GIFT=166;
	EnumFuncID.WAR_TOKEN=169;
	EnumFuncID.ONLINE_GIFT=171;
	EnumFuncID.WAKE_UP_GUANGHUAN=172;
	EnumFuncID.WAKE_UP_SHOUHU=173;
	EnumFuncID.WAKE_UP_ZHUOQI=174;
	EnumFuncID.WAKE_UP_CHIBANG=175;
	EnumFuncID.WAKE_UP_SHENBING=176;
	EnumFuncID.WAKE_UP_JINGLING=177;
	EnumFuncID.WAKE_UP_FUWEN=178;
	EnumFuncID.WAKE_UP_MIHE=179;
	EnumFuncID.WAKE_UP_FEISHEN=180;
	EnumFuncID.ZHAOLING=181;
	EnumFuncID.MANJIANGXUNBAO=182;
	EnumFuncID.JUNSHIXUNBAO=183;
	EnumFuncID.JIFEN_SHOP=184;
	EnumFuncID.JUGUANWENSHI2=185;
	EnumFuncID.JUGUANWENSHI3=186;
	EnumFuncID.WUHUXUNBAO=187;
	EnumFuncID.QUNYING_SHOP=188;
	EnumFuncID.SPELLXUNBAO=194;
	EnumFuncID.JUNSHI_PATROL=195;
	EnumFuncID.EMPTY_CITY=196;
	EnumFuncID.QUAN_FU_TIAO_ZHAN=197;
	EnumFuncID.TUJIAN=197;
	EnumFuncID.HONGYANFAZHEN=198;
	EnumFuncID.HONYANLINQGI=199;
	EnumFuncID.WAKE_UP_HONGYANFAZHEN=200;
	EnumFuncID.WAKE_UP_HONGYANLINGQI=201;
	EnumFuncID.FIT=202;
	EnumFuncID.FIT_EQUIP=203;
	EnumFuncID.FB_FIT=204;
	EnumFuncID.ACTI_HALL=205;
	EnumFuncID.FIT_GEM=206;
	EnumFuncID.VIDEO_HALL=207;
	EnumFuncID.DISS_BAND=209;
	EnumFuncID.DISS_MISS=210;
	EnumFuncID.ONLINE_REWARD=211;
	EnumFuncID.MYSTERY_SHOP=213;
	EnumFuncID.XUNBAO_NEW=181;
	EnumFuncID.XUNBAO_DIANJIANGTAI=212;
	EnumFuncID.FIT_EQUIP_INTENSIFY=214;
	EnumFuncID.FAST_HANDUP=215;
	EnumFuncID.TURN_GIFT=216;
	EnumFuncID.KAIFU_GIFT=218;
	EnumFuncID.JIGUAN_CARD=219;
	EnumFuncID.SHOULING_SHOP=220;
	EnumFuncID.YUNTAI_TUHUA=221;
	EnumFuncID.QIYUAN_XUNBAO=222;
	EnumFuncID.TODAYTUIJIAN=223;
	EnumFuncID.ONE_FIRST=224;
	EnumFuncID.TIME_ZUOCHI=225;
	EnumFuncID.TIME_CAIWENJI=226;
	EnumFuncID.JINJIERANK=227;
	EnumFuncID.PRODUCEED=228;
	EnumFuncID.UPGRADEPRODUCETS=229;
	EnumFuncID.COMPOSE=230;
	EnumFuncID.BuildSuit=231;
	EnumFuncID.TODAY_RECOMMEND=223;
	EnumFuncID.BOSSZHANHUN=232;
	EnumFuncID.ONETOUZHI=233;
	EnumFuncID.DAOBIFANBEI=234;
	EnumFuncID.DAOBIMANPEN=235;
	EnumFuncID.CHAOJIBUJI=236;
	EnumFuncID.Xunbaojiang=238;
	EnumFuncID.XunbaoShu=239;
	EnumFuncID.XunbaoWei=240;
	EnumFuncID.XunbaoWu=241;
	EnumFuncID.XunbaoQun=242;
	EnumFuncID.JIGUANSKILL=243;
	EnumFuncID.ZHANLING=244;
	EnumFuncID.XunbaoSpe=245;
	EnumFuncID.TONGGUANYOULI=246;
	EnumFuncID.NEWKAIFULIBAO=247;
	EnumFuncID.RECHARGEAWARD=248;
	EnumFuncID.PETDIANBING=250;
	EnumFuncID.ACTIIVITYPUSH=253;
	EnumFuncID.PETACTIVE=251;
	EnumFuncID.PETSHANGCHENG=252;
	EnumFuncID.TRIALTOWER=254;
	EnumFuncID.TRIALTOWERCHILD=255;
	EnumFuncID.TREASURE=256;
	EnumFuncID.XunbaoYunbao=257;
	EnumFuncID.TREASUREPANEL=178000;
	EnumFuncID.TREASURECULTIVATE=178001;
	EnumFuncID.TREASURESATELLITE=178002;
	EnumFuncID.QIYUAN_MD=258;
	EnumFuncID.HuoYue_ZP=259;
	EnumFuncID.FirstArmy=260;
	EnumFuncID.ZongHengTX=261;
	EnumFuncID.Zundian_DL=262;
	EnumFuncID.EightOff_XB=263;
	EnumFuncID.DIANQIANLUN=267;
	EnumFuncID.YINGJIEZHUAN=268;
	EnumFuncID.FULIDATING_PRAY=264;
	EnumFuncID.FULIDATING_DOUBLEACTIVE=265;
	EnumFuncID.THREECENTWORLD=270;
	EnumFuncID.LEIJIHAOLI=271;
	EnumFuncID.JUEBANSHIZHUANG=272;
	EnumFuncID.MINGJIANGXIANLI=273;
	EnumFuncID.TongshuaiJinjian=269;
	EnumFuncID.ChongZhiFanLi=283;
	EnumFuncID.RechargeRank=275;
	EnumFuncID.CostRank=274;
	EnumFuncID.GodPetCome=276;
	EnumFuncID.CELEBRATION=10000;
	EnumFuncID.ONE_GIFT1=11000;
	EnumFuncID.ONE_GIFT2=11001;
	EnumFuncID.MARRIAGEPATA=11003;
	EnumFuncID.YunTaiXianShi=11002;
	EnumFuncID.Gongce_HD=12000;
	EnumFuncID.TASK=-1;
	EnumFuncID.BATTLE_SETTING=-2;
	EnumFuncID.AUTO_CHALLENGE=-3;
	EnumFuncID.SHIMEN_TASK_REFRESH=-4;
	EnumFuncID.UNLOCK_HERO=-5;
	EnumFuncID.MAIN_BOTTOM=-6;
	EnumFuncID.ACTIVITY_HALL=-7;
	EnumFuncID.RECHARGE=-8;
	EnumFuncID.ZHOUSHU_REPLACE=-9;
	EnumFuncID.FIT_CHOOSE=-10;
	EnumFuncID.ALERT_ONE=-11;
	EnumFuncID.FIT_DUN_FIGHT=-12;
	EnumFuncID.MAIN_TOP=-13;
	EnumFuncID.FIT_SKILL=-14;
	EnumFuncID.FIT_SKILL_SET=-15;
	EnumFuncID.FIT_SKILL_CHOOSE=-16;
	EnumFuncID.FIT_SKILL_CHOOSE_TIPS=-17;
	EnumFuncID.BUSINESS_1=-18;
	EnumFuncID.BUSINESS_2=-19;
	EnumFuncID.BATTLE_SET=-20;
	EnumFuncID.CAPTURE_SUCCESS=-21;
	EnumFuncID.FIELD_BOSS_ENTER=-22;
	EnumFuncID.YUANZHENG_TARGET=-23;
	EnumFuncID.GOD_JUNXING=-24;
	EnumFuncID.BATTLE_WIN=-25;
	EnumFuncID.Main_Fight=-26;
	EnumFuncID.EQUIP_Tip=-27;
	EnumFuncID.ALER_TWO=-28;
	EnumFuncID.DIS_MISS_TIP=-29;
	EnumFuncID.DIS_MISS_GIFT=-30;
	EnumFuncID.XUN_BAO_GIFT=-31;
	EnumFuncID.Compose_EquipForging=-32;
	EnumFuncID.Compose_EquipBag=-33;
	EnumFuncID.MAIN_RIGHT=-34;
	EnumFuncID.GATEBACK=-35;
	EnumFuncID.EscortChooce=-36;
	EnumFuncID.XUNBAO_CARD=-37;
	EnumFuncID.DEFINEID=10001;
	__static(EnumFuncID,
	['MANJIANG_STAR',function(){return this.MANJIANG_STAR=EnumFuncID.NextDefineId;},'BUZHUO',function(){return this.BUZHUO=EnumFuncID.NextDefineId;},'MAIL',function(){return this.MAIL=EnumFuncID.NextDefineId;},'CREATEHERO',function(){return this.CREATEHERO=EnumFuncID.NextDefineId;},'CHANGENAME',function(){return this.CHANGENAME=EnumFuncID.NextDefineId;},'BATTLESETTING',function(){return this.BATTLESETTING=EnumFuncID.NextDefineId;},'CHONGZHIHAOLI',function(){return this.CHONGZHIHAOLI=EnumFuncID.NextDefineId;},'SHOPMATERIAL',function(){return this.SHOPMATERIAL=EnumFuncID.NextDefineId;},'EMPTY_CITY_SHOP',function(){return this.EMPTY_CITY_SHOP=EnumFuncID.NextDefineId;},'HUNT_SHOP',function(){return this.HUNT_SHOP=EnumFuncID.NextDefineId;},'FASHI_ZUOJI',function(){return this.FASHI_ZUOJI=EnumFuncID.NextDefineId;},'FASHI_CHIBANG',function(){return this.FASHI_CHIBANG=EnumFuncID.NextDefineId;},'YUEKA',function(){return this.YUEKA=EnumFuncID.NextDefineId;},'ZHAOLING_GiftL',function(){return this.ZHAOLING_GiftL=EnumFuncID.NextDefineId;},'ZHAOLING_GiftH',function(){return this.ZHAOLING_GiftH=EnumFuncID.NextDefineId;},'JUNSHI_TIANFU',function(){return this.JUNSHI_TIANFU=EnumFuncID.NextDefineId;},'JUNSHI_TIANMIN',function(){return this.JUNSHI_TIANMIN=EnumFuncID.NextDefineId;},'JUNSHI_JUEXING',function(){return this.JUNSHI_JUEXING=EnumFuncID.NextDefineId;},'MANJIANG_PATA',function(){return this.MANJIANG_PATA=EnumFuncID.NextDefineId;},'TUJIAN_J',function(){return this.TUJIAN_J=EnumFuncID.NextDefineId;},'TUJIAN_S',function(){return this.TUJIAN_S=EnumFuncID.NextDefineId;},'TUJIAN_R',function(){return this.TUJIAN_R=EnumFuncID.NextDefineId;},'BAG_ITEM',function(){return this.BAG_ITEM=EnumFuncID.NextDefineId;},'WUJIANG_YUANFEN',function(){return this.WUJIANG_YUANFEN=EnumFuncID.NextDefineId;},'WUJIANG_TUJIAN',function(){return this.WUJIANG_TUJIAN=EnumFuncID.NextDefineId;},'WUJIANG_ZIZHI',function(){return this.WUJIANG_ZIZHI=EnumFuncID.NextDefineId;},'WUJIANG_ALLATTR',function(){return this.WUJIANG_ALLATTR=EnumFuncID.NextDefineId;},'MONSTER_ALLATTR',function(){return this.MONSTER_ALLATTR=EnumFuncID.NextDefineId;},'ZHENG_ZHAN',function(){return this.ZHENG_ZHAN=EnumFuncID.NextDefineId;},'VIP_GIFT',function(){return this.VIP_GIFT=EnumFuncID.NextDefineId;},'ZHANHUN',function(){return this.ZHANHUN=EnumFuncID.NextDefineId;},'LOOKATTR',function(){return this.LOOKATTR=EnumFuncID.NextDefineId;},'LOOKCHUZHAN',function(){return this.LOOKCHUZHAN=EnumFuncID.NextDefineId;},'NEVERCHECK',function(){return this.NEVERCHECK=[152,89,151,149];}
	]);
	return EnumFuncID;
})()


//class enem.com.game.player.equipUtil
var equipUtil=(function(){
	function equipUtil(){}
	__class(equipUtil,'enem.com.game.player.equipUtil');
	equipUtil.GetEquipVoByMid=function(mid){
		if(!equipUtil.equiphash.containsKey(mid)){
			var equip=Q_equipContainer.GetValue(mid);
			if(equip==null){
				return null;
			}
			equipUtil.equiphash.put(mid,new equipVo(mid));
		}
		return equipUtil.equiphash.get(mid);
	}

	equipUtil.GetEquippromoteVoByMid=function(mid){
		if(!equipUtil.equippromotehash.containsKey(mid)){
			var equip=Q_equip_promoteContainer.GetValue(mid);
			if(equip==null){
				return null;
			}
			equipUtil.equippromotehash.put(mid,new equippromoteVo(mid));
		}
		return equipUtil.equippromotehash.get(mid);
	}

	equipUtil.GetEquipComposeVoByMid=function(mid){
		if(!equipUtil.equipcomposehash.containsKey(mid)){
			var equip=Q_composeContainer.GetValue(mid);
			if(equip==null){
				return null;
			}
			equipUtil.equipcomposehash.put(mid,new equipComposeVo(mid));
		}
		return equipUtil.equipcomposehash.get(mid);
	}

	equipUtil.GetEquipComposeInfoByGroup=function(group){
		var listgroup;
		listgroup=equipUtil.equipComposeGroupDatahash.get(group);
		return listgroup
	}

	equipUtil.GetEquipComposeInfo=function(){
		if(equipUtil.equipComposeGrouphash==null){
			equipUtil.equipComposeGrouphash=new HashMap();
			equipUtil.equipComposeGroupDatahash=new HashMap();
			var list=Q_composeContainer.list;
			var value;
			for(var $each_value in list){
				value=list[$each_value];
				var equip=equipUtil.GetEquipComposeVoByMid(value.q_id);
				if(!equipUtil.equipComposeGrouphash.containsKey(equip.group)){
					equipUtil.equipComposeGrouphash.put(equip.group,equip.groupname);
				};
				var listgroup;
				if(!equipUtil.equipComposeGroupDatahash.containsKey(equip.group)){
					listgroup=[];
				}
				else{
					listgroup=equipUtil.equipComposeGroupDatahash.get(equip.group);
				}
				listgroup.push(equip)
				equipUtil.equipComposeGroupDatahash.put(equip.group,listgroup);
			}
		}
	}

	equipUtil.equipComposeGrouphash=null;
	equipUtil.equipComposeGroupDatahash=null;
	__static(equipUtil,
	['equiphash',function(){return this.equiphash=new HashMap();},'equippromotehash',function(){return this.equippromotehash=new HashMap();},'equipcomposehash',function(){return this.equipcomposehash=new HashMap();}
	]);
	return equipUtil;
})()


//class enem.com.game.uishowlinemgr.ShowLineEnum
var ShowLineEnum=(function(){
	function ShowLineEnum(){}
	__class(ShowLineEnum,'enem.com.game.uishowlinemgr.ShowLineEnum');
	ShowLineEnum.NEW_FUNC_NOTICE=1;
	ShowLineEnum.NEW_MISSION_NOTIC=2;
	ShowLineEnum.TALK="_talk";
	ShowLineEnum.NEWOPENFUNC="NEWOPENFUNC";
	return ShowLineEnum;
})()


//class enem.com.base.scene.data.EnumSceneObjectType
var EnumSceneObjectType=(function(){
	function EnumSceneObjectType(){}
	__class(EnumSceneObjectType,'enem.com.base.scene.data.EnumSceneObjectType');
	EnumSceneObjectType.MAINPLAYER=0;
	EnumSceneObjectType.PLAYER=1;
	EnumSceneObjectType.MONSTER=2;
	EnumSceneObjectType.PET=3;
	EnumSceneObjectType.ITEM=4;
	EnumSceneObjectType.NPC=5;
	EnumSceneObjectType.EFFECT=6;
	return EnumSceneObjectType;
})()


//class enem.com.game.attribute.Util.CurrencyVo
var CurrencyVo=(function(){
	function CurrencyVo(){
		/**货币类型枚举**/
		this.type=0;
		/**货币值**/
		this.value=0;
	}

	__class(CurrencyVo,'enem.com.game.attribute.Util.CurrencyVo');
	return CurrencyVo;
})()


/**
*数学常用扩展
*@author Administrator
*
*/
//class enem.com.game.util.MathExtUtil
var MathExtUtil=(function(){
	function MathExtUtil(){}
	__class(MathExtUtil,'enem.com.game.util.MathExtUtil');
	MathExtUtil.RotatePoint=function(center,edge,angle){
		var endX=(int)(center.x+(edge.x-center.x)*Math.cos(angle *Math.PI / 180)-(edge.y-center.y)*Math.sin(angle *Math.PI / 180));
		var endY=(int)(center.y+(edge.x-center.x)*Math.sin(angle *Math.PI / 180)+(edge.y-center.y)*Math.cos(angle *Math.PI / 180));
		return new Point$1(endX,endY);
	}

	MathExtUtil.GetBloodDirsByDir=function(curDir){
		var _floodArr=[curDir];
		for (var i=1;i < 8;++i){
			var dir=curDir;
			var dec=Math.floor((i+1)/ 2);
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

	MathExtUtil.CalcCanMoveEndPtByDir=function(ptb,dir,step){
		var temppt=Point$1.TEMP.setTo(ptb.x,ptb.y);
		var ret=new Point$1(ptb.x,ptb.y);
		for (var i=step;i > 0;--i){
			temppt.x+=ToolMap.DirectionOffsetX8[dir];
			temppt.y+=ToolMap.DirectionOffsetY8[dir];{
				ret.x=temppt.x;
				ret.y=temppt.y;
				break ;
			}
		}
		return ret;
	}

	MathExtUtil.isProbabilityTrigger=function(min,max,total){
		(total===void 0)&& (total=10000);
		var random=Math.random()*total;
		return random>=min && random<max;
	}

	MathExtUtil.isLongEqual=function(a,b){
		if(a==null || b==null)
			return false;
		return a.fValue==b.fValue;
	}

	MathExtUtil.createRanPos=function(center,totalR,counts,ran){
		(ran===void 0)&& (ran=30);
		var startA=Math.random()*Math.PI *2;
		var intervalA=Math.PI *2 / counts;
		var a=startA;
		var r=totalR;
		var x=0;
		var y=0;
		var arr=[];
		for (var i=0;i < counts;i++){
			a+=intervalA;
			x=center.x+Math.floor(Math.sin(a)*r+Math.random()*ran *2-ran);
			y=center.y+Math.floor((Math.cos(a)*r+Math.random()*ran *2-ran)*0.6);
			arr.splice(Math.random()*i,0,new Point$1(x,y));
		}
		return arr;
	}

	MathExtUtil.randomArr=function(arr){
		var outputArr=arr.slice();
		var i=outputArr.length;
		while (i){
			outputArr.push(outputArr.splice(Math.floor(Math.random()*i--),1));
		}
		return outputArr;
	}

	return MathExtUtil;
})()


/**
*不要有任何成员
*@author Administrator
*
*/
//class enem.com.game.newfunction.events.NewFunctionEvent
var NewFunctionEvent=(function(){
	function NewFunctionEvent(){}
	__class(NewFunctionEvent,'enem.com.game.newfunction.events.NewFunctionEvent');
	NewFunctionEvent.NEW_FUNCTION_CHECKALL_OVER="newFunctionCheckAllOver";
	NewFunctionEvent.NEW_FUNCTION_ACTIVED="newFunctionActived";
	NewFunctionEvent.NEW_FUNCTION_PREACTIVE="newFunctionPreActive";
	NewFunctionEvent.NEW_FUNCTION_ACTIVEBEGIN="newFunctionActiveBegin";
	NewFunctionEvent.NEW_FUNCTION_NOTICE="newFunctionNotice";
	NewFunctionEvent.NEW_FUNCTION_NOTICE_NO="newFunctionNoticeNo";
	return NewFunctionEvent;
})()


/**聊天玩家信息**/
//class enem.com.game.chat.vo.ChatPlayerVo
var ChatPlayerVo$1=(function(){
	function ChatPlayerVo($id,$name,$personal,$gender,$isOnLine){
		/**发起人ID */
		this._id=null;
		/**发起人名字 */
		this._name=null;
		/**发起人职业 */
		this._personal=0;
		/**发起人性别 */
		this._gender=0;
		/**是否在线**/
		this._isOnLine=false;
		this._id=$id;
		this._name=$name;
		this._personal=$personal;
		this._gender=$gender;
		this._isOnLine=$isOnLine;
	}

	__class(ChatPlayerVo,'enem.com.game.chat.vo.ChatPlayerVo',null,'ChatPlayerVo$1');
	var __proto=ChatPlayerVo.prototype;
	__getset(0,__proto,'gender',function(){
		return this._gender;
	});

	__getset(0,__proto,'id',function(){
		return this._id;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
	});

	__getset(0,__proto,'personal',function(){
		return this._personal;
	});

	__getset(0,__proto,'isOnLine',function(){
		return this._isOnLine;
		},function(onLine){
		this._isOnLine=onLine;
	});

	return ChatPlayerVo;
})()


//class enem.com.game.forge.event.ForgeEvent
var ForgeEvent=(function(){
	function ForgeEvent(){}
	__class(ForgeEvent,'enem.com.game.forge.event.ForgeEvent');
	ForgeEvent.DUANZAO="recv_duanzao";
	ForgeEvent.FORGEJIANTIG="FORGEJIANTIG";
	return ForgeEvent;
})()


/**
*任务目标类型
*/
//class enem.com.game.task.enum.EnumTargetType
var EnumTargetType=(function(){
	function EnumTargetType(){}
	__class(EnumTargetType,'enem.com.game.task.enum.EnumTargetType');
	EnumTargetType.EQUIP_TASK=1;
	EnumTargetType.LEVEL_TASK=2;
	EnumTargetType.FUBEN_TASK=3;
	EnumTargetType.APPOINT_DUPLICATE_TASK=4;
	EnumTargetType.TARGET_LV=5;
	EnumTargetType.ZHUANSHEN_TASK=6;
	EnumTargetType.A_NEWMAP=7;
	EnumTargetType.A_AUTOCHALLENGE=8;
	EnumTargetType.AREAN_TASK=9;
	EnumTargetType.ESCORT_TASK=10;
	EnumTargetType.RONG_LIAN_TASK=11;
	EnumTargetType.SHIMEN_TASK=12;
	EnumTargetType.TEAM_DUPLICATE_TASK=13;
	EnumTargetType.TOWER_TASK=14;
	EnumTargetType.TEAM_FIELD_TASK=15;
	EnumTargetType.LOGIN_TASK=16;
	EnumTargetType.PARTROL_TASK=18;
	EnumTargetType.COLLECT_TASK=19;
	EnumTargetType.EXCHANGE_TASK=20;
	EnumTargetType.BANQUET_TASK=21;
	EnumTargetType.LEGION_FUBEN_TASK=22;
	EnumTargetType.JJC_RANK=207;
	EnumTargetType.TARGET_DAOBICOSTNUM=254;
	EnumTargetType.VERIFY=296;
	return EnumTargetType;
})()


/**
*道具参数解析工厂类
*/
//class enem.com.game.items.ItemConfigFactory
var ItemConfigFactory=(function(){
	function ItemConfigFactory(){
		/**类型对应的解析类**/
		this.clss={};
		/**道具id对应的解析实例**/
		this.hash={};
		this.clss[4]=ItemConfigEquip;
		this.clss[13]=ItemConfigMiJi;
		this.clss[11]=ItemConfigZhoushu;
		this.clss[25]=ItemConfigShuxingdan;
		this.clss[22]=ItemConfigUpgradeEquip;
		this.clss[36]=ItemConfigUpgradeImm;
		this.clss[42]=ItemConfigFitEquip;
	}

	__class(ItemConfigFactory,'enem.com.game.items.ItemConfigFactory');
	var __proto=ItemConfigFactory.prototype;
	__proto.Get=function(mid){
		if (this.hash[mid] !=null)
			return this.hash[mid];
		var model=Q_itemContainer.GetValue(mid);
		if (model==null)
			return null;
		var type=model.q_type;
		var cls=this.clss[type];
		if (cls==null)
			cls=ItemConfigBase;
		var ret=new cls(type);
		ret.SetConfig(model);
		this.hash[mid]=ret;
		return ret;
	}

	__getset(1,ItemConfigFactory,'Ins',function(){
		if (ItemConfigFactory._ins==null)
			ItemConfigFactory._ins=new ItemConfigFactory();
		return ItemConfigFactory._ins;
	});

	ItemConfigFactory.GetScore=function(mid){
		var p=enem.com.game.items.ItemConfigFactory.Ins.Get(mid);
		if (p && p["score"] !=null)
			return p["score"];
		return 0;
	}

	ItemConfigFactory.GetGridId=function(mid){
		var p=enem.com.game.items.ItemConfigFactory.Ins.Get(mid);
		if (p && p["gridId"] !=null)
			return p["gridId"];
		return 0;
	}

	ItemConfigFactory.GetValue=function(mid){
		return enem.com.game.items.ItemConfigFactory.Ins.Get(mid).value;
	}

	ItemConfigFactory._ins=null;
	return ItemConfigFactory;
})()


//class enem.com.game.sound.EnumSound
var EnumSound=(function(){
	function EnumSound(){}
	__class(EnumSound,'enem.com.game.sound.EnumSound');
	EnumSound.UI_CLICK_UI=101;
	EnumSound.UI_FORGE=102;
	EnumSound.UI_UPGRADE_SKILL=103;
	EnumSound.UI_ONE_KEY_DRESS=104;
	EnumSound.UI_LEVEL_UP=105;
	EnumSound.UI_UPGRADE_PROGRESS=106;
	EnumSound.UI_GEM_UPGRADE=107;
	EnumSound.UI_RONGLIAN=108;
	EnumSound.UI_GET_CHENGZHUANG=109;
	EnumSound.UI_ACTIVE_ROLE=109;
	EnumSound.UI_ZHUBU_WUJIANG=109;
	return EnumSound;
})()


//class enem.com.game.bingfa.event.BingfaEvent
var BingfaEvent=(function(){
	function BingfaEvent(){}
	__class(BingfaEvent,'enem.com.game.bingfa.event.BingfaEvent');
	BingfaEvent.EXCHANGE="bingfa_exchange";
	BingfaEvent.LOCK="bingfa_lock";
	BingfaEvent.EMBED="bingfa_embed";
	BingfaEvent.USABLE="bingfa_usable";
	BingfaEvent.PUT="bingfa_put";
	return BingfaEvent;
})()


//class enem.com.game.player.equip.equipComposeVo
var equipComposeVo=(function(){
	function equipComposeVo(_modid){
		this.modid=0;
		this.consumeItem=null;
		this.group=0;
		this.groupname=null;
		this.name=null;
		this.noticeID=0;
		this.getItem=null;
		this.modid=_modid;
		var equip=Q_composeContainer.GetValue(this.modid);
		this.consumeItem=ItemUtil.JsonStringToItemList(equip.q_consume,0,{level:1});
		this.noticeID=equip.q_notice;
		this.group=equip.q_group;
		this.groupname=equip.q_group_name;
		this.getItem=ItemUtil.JsonStringToItemList(equip.q_get);
		this.name=equip.q_name;
	}

	__class(equipComposeVo,'enem.com.game.player.equip.equipComposeVo');
	return equipComposeVo;
})()


/**答题配置信息**/
//class enem.com.game.activity.answer.Util.AnswerData
var AnswerData=(function(){
	function AnswerData(cfg){
		this._q_question=null;
		this._questions=null;
		this._q_question=cfg;
	}

	__class(AnswerData,'enem.com.game.activity.answer.Util.AnswerData');
	var __proto=AnswerData.prototype;
	/**
	*获得（1，2，3，4）对应的答案
	*@param id
	*@return
	*/
	__proto.getAnswer=function(id){
		var index=id-1;
		var len=this.questions!=null?this.questions.length:0;
		return index>=0&&index<len?this.questions[index]:"";
	}

	__getset(0,__proto,'q_question',function(){
		return this._q_question;
	});

	__getset(0,__proto,'questions',function(){
		if(this._questions==null && this._q_question.q_hoose)
			this._questions=this._q_question.q_hoose.split(";");
		return this._questions;
	});

	return AnswerData;
})()


//class enem.com.game.player.enum.EnumJob
var EnumJob=(function(){
	function EnumJob(){}
	__class(EnumJob,'enem.com.game.player.enum.EnumJob');
	EnumJob.TONGYONG=0;
	EnumJob.ZS=1;
	EnumJob.FS=2;
	EnumJob.DS=3;
	return EnumJob;
})()


//class enem.com.game.lang.LangString
var LangString=(function(){
	function LangString(){}
	__class(LangString,'enem.com.game.lang.LangString');
	__static(LangString,
	['DATE_YEAR',function(){return this.DATE_YEAR=("年");},'DATE_MONTH',function(){return this.DATE_MONTH=("月");},'DATE_WEEK',function(){return this.DATE_WEEK=("周");},'DATE_DATE',function(){return this.DATE_DATE=("日");},'DATE_DAY',function(){return this.DATE_DAY=("天");},'DATE_HOUR',function(){return this.DATE_HOUR=("时");},'DATE_HOUR2',function(){return this.DATE_HOUR2=("小时");},'DATE_MINUTE',function(){return this.DATE_MINUTE=("分");},'DATE_MINUTE2',function(){return this.DATE_MINUTE2=("分钟");},'DATE_SECOND',function(){return this.DATE_SECOND=("秒");},'DATE_EVER_YEAR',function(){return this.DATE_EVER_YEAR=("每年");},'DATE_EVER_MONTH',function(){return this.DATE_EVER_MONTH=("每月");},'DATE_EVER_WEEK',function(){return this.DATE_EVER_WEEK=("每周");},'DATE_EVER_DAY',function(){return this.DATE_EVER_DAY=("每日");},'DATE_EVER_DAY2',function(){return this.DATE_EVER_DAY2=("每天");},'DATE_EVER_HOUR',function(){return this.DATE_EVER_HOUR=("每时");},'DATE_EVER_MINUTE',function(){return this.DATE_EVER_MINUTE=("每分");},'DATE_EVER_SECOND',function(){return this.DATE_EVER_SECOND=("每秒");},'DATE_MORNING',function(){return this.DATE_MORNING=("上午");},'DATE_AFTERNOON',function(){return this.DATE_AFTERNOON=("下午");},'DATE_TODAY',function(){return this.DATE_TODAY=("今天");},'DATE_TOMORROW',function(){return this.DATE_TOMORROW=("明天");},'DATE_MON',function(){return this.DATE_MON=("周一");},'DATE_TUE',function(){return this.DATE_TUE=("周二");},'DATE_WED',function(){return this.DATE_WED=("周三");},'DATE_THU',function(){return this.DATE_THU=("周四");},'DATE_FRI',function(){return this.DATE_FRI=("周五");},'DATE_SAT',function(){return this.DATE_SAT=("周六");},'DATE_SUN',function(){return this.DATE_SUN=("周日");},'U_SHI',function(){return this.U_SHI=("十");},'U_BAI',function(){return this.U_BAI=("百");},'U_QIAN',function(){return this.U_QIAN=("千");},'U_W',function(){return this.U_W=("W");},'U_WAN',function(){return this.U_WAN=("万");},'U_YI',function(){return this.U_YI=("亿");},'U_ZHAO',function(){return this.U_ZHAO=("兆");},'SEX_MALE',function(){return this.SEX_MALE=("男");},'SEX_FEMALE',function(){return this.SEX_FEMALE=("女");},'SEX_ALL',function(){return this.SEX_ALL=("通用");},'NAME_MAIN_GAME',function(){return this.NAME_MAIN_GAME=("战神道");},'NAME_GOLD',function(){return this.NAME_GOLD=("元宝");},'NAME_BIND_GOLD',function(){return this.NAME_BIND_GOLD=("绑定元宝");},'NAME_BIND_GOLD_S',function(){return this.NAME_BIND_GOLD_S=("绑元");},'NAME_BINDMONEY',function(){return this.NAME_BINDMONEY=("绑定银两");},'NAME_INNER_GOLD',function(){return this.NAME_INNER_GOLD=("内币");},'NAME_MONEY',function(){return this.NAME_MONEY=("银两");},'NAME_BINDGOLD',function(){return this.NAME_BINDGOLD=("钻石");},'NAME_BANGGONG',function(){return this.NAME_BANGGONG=("帮贡");},'NAME_EXP',function(){return this.NAME_EXP=("经验");},'NAME_LEVEL',function(){return this.NAME_LEVEL=("等级");},'NAME_LEVEL2',function(){return this.NAME_LEVEL2=("级");},'NAME_MYSTERYMAN',function(){return this.NAME_MYSTERYMAN=("神秘人");},'NAME_WO',function(){return this.NAME_WO=("我");},'CHINESE_NUMBER',function(){return this.CHINESE_NUMBER=["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];},'ROME_NUMBER',function(){return this.ROME_NUMBER=["Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ","Ⅵ","Ⅶ","Ⅷ","Ⅸ","Ⅹ","Ⅺ","Ⅻ"];},'NUMBER_LIST',function(){return this.NUMBER_LIST=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩"];}
	]);
	return LangString;
})()


//class enem.com.game.skill.trigger.SkillAttrAllFormula
var SkillAttrAllFormula=(function(){
	function SkillAttrAllFormula(){
		this.mid=0;
		this.formulas=[];
	}

	__class(SkillAttrAllFormula,'enem.com.game.skill.trigger.SkillAttrAllFormula');
	var __proto=SkillAttrAllFormula.prototype;
	__proto.SetData=function(json){
		var arr=JSONUtil.decode(json);
		this.formulas.length=0;
		for (var i=0;i < arr.length;++i){
			var f=new SkillAttrFormual$1();
			f.type=parseInt(arr[i][0]);
			f.formula=arr[i][1];
			this.formulas.push(f);
		}
	}

	__proto.GetAttrs=function(param){
		var ret=[];
		for (var i=0;i < this.formulas.length;++i){
			var vo=new AttributeVo();
			vo.type=this.formulas[i].type;
			vo.value=FormulaUtil.Compute(this.formulas[i].formula,param)| 0;
			ret.push(vo);
		}
		return ret;
	}

	return SkillAttrAllFormula;
})()


//class enem.com.game.guide.EnumGuide
var EnumGuide=(function(){
	function EnumGuide(){}
	__class(EnumGuide,'enem.com.game.guide.EnumGuide');
	EnumGuide.COND_TYPE_ACTIVE_PET=1;
	EnumGuide.COND_TYPE_ACTIVE_ROLE=2;
	EnumGuide.COND_TYPE_SECOND_ROLE_DRESS=3;
	EnumGuide.COND_TYPE_GUAQIA_AUTO_CHALLENGE=4;
	EnumGuide.COND_TYPE_CHECK_EXP=5;
	EnumGuide.COND_TYPE_FIT=6;
	EnumGuide.ID_ACTIVE_FIRST_WJ=200;
	EnumGuide.ID_ACTIVE_SECOND_WJ=220;
	EnumGuide.ID_ACTIVE_THIRD_WJ=226;
	EnumGuide.ID_GATE_AUTO=30;
	EnumGuide.ID_LEVEL80=103;
	EnumGuide.ID_CHALLENGE_SIM_BATTLE=106;
	EnumGuide.ID_FIT_ACTIVE=107;
	EnumGuide.ID_FIT_DUNGEON=108;
	EnumGuide.ID_WJ_UPGRADE_202=202;
	EnumGuide.ID_WJ_UPGRADE_212=212;
	EnumGuide.ID_WJ_UPGRADE_223=223;
	EnumGuide.ID_WJ_UPGRADE_227=227;
	EnumGuide.ID_WJ_UPGRADE_238=238;
	EnumGuide.ID_WJ_UPGRADE_255=255;
	EnumGuide.ID_WJ_UPGRADE_275=275;
	EnumGuide.ID_WJ_UPGRADE_295=295;
	EnumGuide.ID_HUO_SHAO_LIAN_YING=299;
	EnumGuide.ID_DRESS_FIT_EQUIP=314;
	EnumGuide.ID_ZHOU_SHU=315;
	EnumGuide.PROMPT_GUANQIA=1;
	EnumGuide.PROMPT_BUSINESS=2;
	__static(EnumGuide,
	['WJ_UPGRADE_IDS',function(){return this.WJ_UPGRADE_IDS=[202,212,223,227,238,255,275,295];}
	]);
	return EnumGuide;
})()


//class enem.com.game.player.equip.equipVo
var equipVo=(function(){
	function equipVo(_modid){
		this.modid=0;
		this.consumeItem=null;
		this.getItem=null;
		this.noticeID
		this.modid=_modid;
		var equip=Q_equipContainer.GetValue(this.modid);
		this.consumeItem=ItemUtil.JsonStringToItemList(equip.q_consume);
		this.getItem=ItemUtil.JsonStringToItemList(equip.q_get);
		this.noticeID=equip.q_notice;
	}

	__class(equipVo,'enem.com.game.player.equip.equipVo');
	return equipVo;
})()


/**活动工具类**/
//class enem.com.game.activity.Util.ActivityUtil
var ActivityUtil=(function(){
	function ActivityUtil(){}
	__class(ActivityUtil,'enem.com.game.activity.Util.ActivityUtil');
	ActivityUtil.getActivityType=function(activityID){
		var cfg=Q_activitiesContainer.GetValue(activityID);
		return cfg !=null ? cfg.q_type :0;
	}

	ActivityUtil.getActivityID=function(activityType){
		var list=Q_activitiesContainer.list;
		var cfg;
		for(var $each_cfg in list){
			cfg=list[$each_cfg];
			if (cfg.q_type==activityType)
				return cfg.q_id;
		}
		return 0;
	}

	ActivityUtil.getActivityName=function(activityID){
		var cfg=Q_activitiesContainer.GetValue(activityID);
		return cfg !=null ? cfg.q_name :"";
	}

	ActivityUtil.getActivityIcon=function(activityType){
		var mode=Q_activitiesContainer.GetValue(activityType);
		if (mode){
			return mode.q_picture;
		}
		return "1";
	}

	ActivityUtil.isActNotice=function(actID){
		var cfg=Q_activitiesContainer.GetValue(actID);
		return cfg !=null ? cfg.q_notice_time > 0 :false;
	}

	ActivityUtil.getActivityTips=function(id){
		return Q_activitiesContainer.GetValue(id).q_explain;
	}

	ActivityUtil.getActivityTime=function(id,addPer){
		(addPer===void 0)&& (addPer=true);
		var star="";
		var end="";
		var Star=Q_activitiesContainer.GetValue(id).q_time_start;
		var End=Q_activitiesContainer.GetValue(id).q_time_end;
		var _Star=Star.split(";");
		var _End=End.split(";");
		if (_Star[0]==-1){
			if (addPer)
				star+="每天";
			if (_Star[1]){
				star+=_Star[1];
			}
		}
		if (_End[0]==-1){
			if (addPer)
				end+="每天";
			if (_End[1]){
				end+=_End[1];
			}
		}
		return [star,end];
	}

	return ActivityUtil;
})()


//class enem.com.game.items.cfg.ItemConfigBase
var ItemConfigBase=(function(){
	function ItemConfigBase(type){
		this._objType=0;
		this._value=0;
		this._objType=type;
	}

	__class(ItemConfigBase,'enem.com.game.items.cfg.ItemConfigBase');
	var __proto=ItemConfigBase.prototype;
	Laya.imps(__proto,{"enem.com.game.items.cfg.IItemConfig":true})
	__proto.SetConfig=function(model){
		this._value=parseInt(model.q_param);
	}

	__getset(0,__proto,'objType',function(){
		return this._objType;
	});

	__getset(0,__proto,'value',function(){
		return this._value;
	});

	return ItemConfigBase;
})()


/**
*格式化公式字符串
*/
//class enem.com.game.util.FormulaUtil
var FormulaUtil=(function(){
	function FormulaUtil(){}
	__class(FormulaUtil,'enem.com.game.util.FormulaUtil');
	FormulaUtil.Compute=function(formula,params){
		try{
			return exprEval.Parser.parse(formula).evaluate(params);
		}
		catch(e){
		}
		if((typeof formula=='number')){
			return parseInt(formula);
		}
		return 1;
	}

	return FormulaUtil;
})()


/**
*物品枚举
*
*@author Administrator
*/
//class enem.com.game.items.enum.EnumItem
var EnumItem=(function(){
	function EnumItem(){}
	__class(EnumItem,'enem.com.game.items.enum.EnumItem');
	EnumItem.ITEM_GOLD=-1;
	EnumItem.ITEM_MONEY=-2;
	EnumItem.ITEM_EXP=-3;
	EnumItem.ITEM_BINDGOLD=-4;
	EnumItem.ITEM_SNAGUO=-5;
	EnumItem.ITEM_JIFEN=-6;
	EnumItem.ITEM_EMPTY_CITY_SCORE=-7;
	EnumItem.ITEM_JINJIAN=1314;
	EnumItem.ITEM_ZSD=1001;
	EnumItem.ITEM_SZSD=1002;
	EnumItem.SHENGWU_BASE=1228;
	EnumItem.SHENGJIA_BASE=1231;
	EnumItem.GUILD_CONTRIBUTION=1004;
	EnumItem.CUT_ORANGE=1005;
	EnumItem.ITEM_GUILD_MONEY=1010;
	EnumItem.ITEM_GUILD_CELEBRATE=1011;
	EnumItem.CHANGE_NAME_CARD=1039;
	EnumItem.TUJIAN_SUIPIAN=1300;
	EnumItem.VIP_EXP=1509;
	EnumItem.ZHANWEN_RANDOM=39101;
	EnumItem.HONGYAN_LINGQI_DRUG=1219;
	EnumItem.HONGYAN_FAZHEN_DRUG=1218;
	EnumItem.HORSE_DUP_DRUG=1220;
	EnumItem.SPRITE_DUP_DRUG=1221;
	EnumItem.WEAPON_DUP_DRUG=1222;
	EnumItem.GUARD_DUP_DRUG=1223;
	EnumItem.HALO_DUP_DRUG=1224;
	EnumItem.WING_DUP_DRUG=1225;
	EnumItem.RUNE_DUP_DRUG=1226;
	EnumItem.NUCLEUS_DUP_DRUG=1227;
	EnumItem.MINGKE_STONE=2022;
	EnumItem.HIGHT_MINGKE_STONE=2023;
	EnumItem.ZHULING_STONE=2024;
	EnumItem.GOD_EQUIP_SP=2025;
	EnumItem.GOD_EQUIP_SUIT_STONE=2026;
	EnumItem.GOD_EQUIP_POUR_SOUR_STONE=2000155;
	EnumItem.JINGMAI_DAN=2000008;
	EnumItem.TUPO_DAN=2000009;
	EnumItem.SKILLBOOK_WING=2000202;
	EnumItem.SKILLBOOK_SPRITE=2000207;
	EnumItem.SKILLBOOK_SHENBING=2000208;
	EnumItem.SHUXINGDAN_HORSE=2000301;
	EnumItem.SHUXINGDAN_WING=2000302;
	EnumItem.SHUXINGDAN_BEAUTY=2000305;
	EnumItem.SHUXINGDAN_GUARD=2000306;
	EnumItem.SHUXINGDAN_JINGLING=2000307;
	EnumItem.SHUXINGDAN_SHENBING=2000308;
	EnumItem.SHUXINGDAN_JIGUAN=2000309;
	EnumItem.SHUXINGDAN_FUWEN=2000311;
	EnumItem.SHUXINGDAN_MIHE=2000312;
	EnumItem.SHUXINGDAN_JUNSHI=2000313;
	EnumItem.YUHUN_SUIPIAN=2000013;
	EnumItem.JINJIEDAN_WING=2000104;
	EnumItem.ZHOUSHUJINGHUA=2000015;
	EnumItem.JINJIEDAN_JINGLING=2000109;
	EnumItem.JINJIEDAN_SHENBING=2000110;
	EnumItem.JINJIEDAN_BEAUTY=2000314;
	EnumItem.JUEXING_TUPO=2000401;
	EnumItem.JIGUAN_CARD_TIME=3706;
	EnumItem.JIGUAN_CARD=2008000;
	EnumItem.ZHUANSHI_CARD=3704;
	EnumItem.BEAUTY_SKILL_TONE=2000010;
	EnumItem.BEAUTY_UP_SKILL_TONE=2000011;
	EnumItem.BEAUTY_DEBRIS=2000012;
	EnumItem.BEAUTY_SOUL_FRAGMENTS=2000013;
	EnumItem.BEAUTY_ZI_MU_RIVER=2000014;
	EnumItem.BEAUTY_UP_DAN=2000102;
	EnumItem.BEAUTY_SHUXIN_DAN=2000314;
	EnumItem.BEAUTY_SHUXIN_=2006001;
	EnumItem.PATROL_UPGRADE_STONE=2000160;
	EnumItem.WUJIANG_JINENGSHI=2000004;
	EnumItem.WUJIANG_TEJISHI=2000005;
	__static(EnumItem,
	['DAN_S',function(){return this.DAN_S=[2000032,2000033,2000034,2000035,2000036,2000037,2000038,2000039];},'Arr',function(){return this.Arr=[50101,50102,50103,50104,50201,50202,50203,50204,50100];}
	]);
	return EnumItem;
})()


//class enem.com.ui.vo.ColorTransform
var ColorTransform=(function(){
	function ColorTransform(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset){
		this.redMultiplier=0;
		this.greenMultiplier=0;
		this.blueMultiplier=0;
		this.alphaMultiplier=0;
		this.redOffset=0;
		this.greenOffset=0;
		this.blueOffset=0;
		this.alphaOffset=0;
		(redMultiplier===void 0)&& (redMultiplier=1.0);
		(greenMultiplier===void 0)&& (greenMultiplier=1.0);
		(blueMultiplier===void 0)&& (blueMultiplier=1.0);
		(alphaMultiplier===void 0)&& (alphaMultiplier=1.0);
		(redOffset===void 0)&& (redOffset=0);
		(greenOffset===void 0)&& (greenOffset=0);
		(blueOffset===void 0)&& (blueOffset=0);
		(alphaOffset===void 0)&& (alphaOffset=0);
		this.redMultiplier=redMultiplier;
		this.greenMultiplier=greenMultiplier;
		this.blueMultiplier=blueMultiplier;
		this.alphaMultiplier=alphaMultiplier;
		this.redOffset=redOffset;
		this.greenOffset=greenOffset;
		this.blueOffset=blueOffset;
		this.alphaOffset=alphaOffset;
	}

	__class(ColorTransform,'enem.com.ui.vo.ColorTransform');
	var __proto=ColorTransform.prototype;
	__proto.concat=function(c){
		this.redMultiplier *=c.redMultiplier;
		this.greenMultiplier *=c.greenMultiplier;
		this.blueMultiplier *=c.blueMultiplier;
		this.alphaMultiplier *=c.alphaMultiplier;
		this.redOffset+=c.redOffset;
		this.greenOffset+=c.greenOffset;
		this.blueOffset+=c.blueOffset;
		this.alphaOffset+=c.alphaOffset;
	}

	__proto.ToArray=function(){
		return [
		this.redMultiplier,0,0,0,this.redOffset,
		0,this.greenMultiplier,0,0,this.greenOffset,
		0,0,this.blueMultiplier,0,this.blueOffset,
		0,0,0,this.alphaMultiplier,this.alphaOffset,];
	}

	return ColorTransform;
})()


//class enem.com.game.map.MapUtil
var MapUtil=(function(){
	function MapUtil(){}
	__class(MapUtil,'enem.com.game.map.MapUtil');
	MapUtil.GetMapName=function(mid){
		var model=Q_mapContainer.GetValue(mid);
		return model.q_map_name;
	}

	MapUtil.getMapEnterPos=function(mid){
		var pos=new Point$1(0,0);
		var model=Q_mapContainer.GetValue(mid);
		if (model !=null){
			pos.x=model.q_x;
			pos.y=model.q_y;
		}
		return pos;
	}

	MapUtil.getMapFieldBgm=function(mid){
		var model=Q_mapContainer.GetValue(mid);
		return model !=null ? parseInt(model.q_music):0;
	}

	MapUtil.getMapBattleBgm=function(mid){
		var model=Q_mapContainer.GetValue(mid);
		return model !=null ? model.q_BGM_type :0;
	}

	MapUtil.getMapCityBgm=function(mid){
		return 1001;
	}

	MapUtil.getMapEnterPos2=function(mid){
		return MapUtil.getMapEnterPos(mid);
	}

	MapUtil.getAlllist=function(){
		var _list=Q_chapterContainer.list;
		return _list;
	}

	MapUtil.getName=function(){
		var _list=Q_chapterContainer.list;
		var namelist=[];
		var curChapter=0;
		for (var i=0;i < _list.length;i++){
			if (_list[i].q_chapter_id > curChapter){
				curChapter=_list[i].q_chapter_id;
				namelist.push(_list[i].q_name);
			}
		}
		return namelist;
	}

	MapUtil.getIcon=function(){
		var _list=Q_chapterContainer.list;
		var iconlist=[];
		for (var i=0;i < _list.length;i++){
			if (iconlist[i] !=_list[i].q_chapter_id){
				iconlist.push(_list[i].q_chapter_id);
			}
		}
		return iconlist;
	}

	return MapUtil;
})()


//class enem.com.game.task.enum.EnumTask
var EnumTask=(function(){
	function EnumTask(){}
	__class(EnumTask,'enem.com.game.task.enum.EnumTask');
	EnumTask.isUpType=function(type){
		return EnumTask.UP_LIST.indexOf(type)!=-1;
	}

	EnumTask.CHAPTER=1;
	EnumTask.PING_DING_AN_BANG=2;
	EnumTask.ACHIEVE_TASK=3;
	EnumTask.GUILD_GUARD=4;
	EnumTask.GUILD_SQUARE=5;
	EnumTask.HU_FU=6;
	EnumTask.ZHAN_LING=7;
	EnumTask.GUAN_WEI=8;
	EnumTask.GUAN_WEI1=13;
	EnumTask.CRONTASK=9;
	EnumTask.TIMETASK=10;
	EnumTask.TIME_TRIGGER=11;
	EnumTask.GUIDE_AWARD=15;
	EnumTask.BUSINESS_PROMPT=12;
	EnumTask.PETE_DIANBING=16;
	EnumTask.PETE_LUNPAN=17;
	EnumTask.MINGJIANGXIANLI=18;
	EnumTask.TOBUY=16;
	EnumTask.LEIJI=17;
	EnumTask.ALLCHARGEDAY=23;
	EnumTask.MEIRICHONGZHI=222;
	EnumTask.LIANXUCHONGZHICELL=339;
	EnumTask.CHARGETYPE=253;
	EnumTask.COSTDAOBI=254;
	EnumTask.WEEKTYPE=297;
	EnumTask.MONTHTYPE=298;
	EnumTask.DAYTYPE=299;
	EnumTask.ONETOUZHITYPE=311;
	EnumTask.BuySeven=312;
	EnumTask.TenSpe=326;
	EnumTask.TenCom=327;
	EnumTask.JJCRANK=207;
	EnumTask.TREASURE=277;
	EnumTask.PETXIANLI1=334;
	EnumTask.PETXIANLI2=335;
	EnumTask.PETXIANLI3=336;
	EnumTask.ALLCHONG=300;
	EnumTask.NewWEEKTYPE1=338;
	EnumTask.UP_JV=204;
	EnumTask.UP_SB=205;
	EnumTask.UP_CB=203;
	EnumTask.UP_GH=226;
	EnumTask.UP_SH=227;
	EnumTask.UP_LQ=113;
	EnumTask.UP_FZ=112;
	EnumTask.UP_ZJ=202;
	EnumTask.UP_FW=264;
	EnumTask.UP_MH=263;
	__static(EnumTask,
	['UP_LIST',function(){return this.UP_LIST=[263,264,202,112,113,227,226,203,204,205];}
	]);
	return EnumTask;
})()


//class enem.com.game.guide.data.PromptData
var PromptData=(function(){
	function PromptData($cfg){
		this._cfg=null;
		/**范围下限**/
		this.minNum=0;
		/**范围上限**/
		this.maxNum=0;
		/**已播放次数**/
		this._showCount=0;
		/**是否二级确认弹窗**/
		this._isConfirm=false;
		/**运营活动q_type_lingqu集合**/
		this._businessTypes=null;
		this._cfg=$cfg;
		var type=this._cfg.q_type;
		if(type==1){
			if(this._cfg.q_cond){
				var condArr=JSONUtil.decode2(this._cfg.q_cond);
				this.minNum=condArr[0];
				this.maxNum=condArr[1];
			}
		}
		else if(type==2){
			this._isConfirm=this._cfg.q_desc!=null;
			if(this._cfg.q_parm)
				this._businessTypes=JSONUtil.decode2(this._cfg.q_parm);
		}
	}

	__class(PromptData,'enem.com.game.guide.data.PromptData');
	var __proto=PromptData.prototype;
	__proto.isInRange=function(num){
		return num >=this.minNum && num <=this.maxNum;
	}

	__proto.isHasBusiness=function(businessType){
		return this._businessTypes!=null && this._businessTypes.indexOf(businessType)!=-1;
	}

	__getset(0,__proto,'showCount',function(){
		return this._showCount;
		},function(value){
		this._showCount=value;
	});

	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__getset(0,__proto,'isRepeat',function(){
		return this._cfg.q_repeat>0;
	});

	__getset(0,__proto,'isConfirm',function(){
		return this._isConfirm;
	});

	__getset(0,__proto,'businessTypes',function(){
		return this._businessTypes;
	});

	return PromptData;
})()


//class enem.com.game.auction.Util.AutctionAttenDate
var AutctionAttenDate=(function(){
	function AutctionAttenDate(arr){
		this._main=0;
		this._sub=0;
		this._imgid=0;
		this._name="";
		this._quality=0;
		this._main=arr[0];
		this._sub=arr[1];
		this._imgid=arr[2];
		this._quality=arr[3];
		this._name=arr[4];
	}

	__class(AutctionAttenDate,'enem.com.game.auction.Util.AutctionAttenDate');
	var __proto=AutctionAttenDate.prototype;
	__getset(0,__proto,'main',function(){
		return this._main;
	});

	__getset(0,__proto,'sub',function(){
		return this._sub;
	});

	__getset(0,__proto,'imgid',function(){
		return this._imgid;
	});

	__getset(0,__proto,'quality',function(){
		return this._quality;
	});

	__getset(0,__proto,'name',function(){
		return this._name;
	});

	return AutctionAttenDate;
})()


/**
*飞升阶段
*/
//class enem.com.game.gear.vo.GearFeisStageCfg
var GearFeisStageCfg=(function(){
	function GearFeisStageCfg(){
		// 阶段id
		this.stage=0;
		// 阶段名字
		this.name=null;
		// 起始阶数
		this.start=0;
		// 阶数阶数
		this.end=0;
		this.subs=[];
	}

	__class(GearFeisStageCfg,'enem.com.game.gear.vo.GearFeisStageCfg');
	var __proto=GearFeisStageCfg.prototype;
	__proto.AddSub=function(model){
		var cfg=this.GetSub(model.q_sub_stage);
		if (cfg==null){
			cfg=new GearFeisSubStageCfg();
			cfg.substage=model.q_sub_stage;
			cfg.start=model.q_level;
			this.subs.push(cfg);
		}
		cfg.end=Math.max(model.q_level,cfg.end);
	}

	__proto.Contains=function(level){
		return this.start <=level && this.end >=level;
	}

	__proto.GetSubByLevel=function(level){
		for (var i=0;i < this.subs.length;++i){
			if (this.subs[i].Contains(level))return this.subs[i];
		}
		return null;
	}

	__proto.GetSub=function(substage){
		for (var i=0;i < this.subs.length;++i){
			if (this.subs[i].substage==substage)return this.subs[i];
		}
		return null;
	}

	/**
	*真实的阶数转成当前阶段的显示阶数
	*@param level
	*@return
	*26-26=0（starlv=26,curlv=26）
	*显示应该是1阶
	*26-26+1=1
	*/
	__proto.ToShowLevel=function(level){
		return level-this.start+1;
	}

	/**
	*子阶段索引转成真实的阶数
	*@param index
	*@return
	*/
	__proto.ToRealLevel=function(index){
		return this.start+index;
	}

	__getset(0,__proto,'numSubs',function(){
		return this.subs.length;
	});

	return GearFeisStageCfg;
})()


/**
*提示类型
*/
//class enem.com.game.prompt.enum.EnumAlertType
var EnumAlertType=(function(){
	function EnumAlertType(){}
	__class(EnumAlertType,'enem.com.game.prompt.enum.EnumAlertType');
	EnumAlertType.NORMAL=1;
	EnumAlertType.ADDFRIEND=2;
	EnumAlertType.SELL=3;
	EnumAlertType.XUNBAO=4;
	EnumAlertType.CANGBAOGE=4;
	EnumAlertType.REFRESH_ESCORT=5;
	EnumAlertType.ONE_KEY_REFRESH_ESCORT=6;
	EnumAlertType.IMME_FINISH_ESCORT=7;
	EnumAlertType.BURN_CHI_BI_BUY_TASK_NUM=8;
	EnumAlertType.GUILD_SQUARD_TASK_QUICK_FINISH=9;
	EnumAlertType.GUILD_SQUARD_TASK_RESET=10;
	EnumAlertType.TREE=11;
	EnumAlertType.STRATEGIST_PATROL_BUY_COUNT=12;
	EnumAlertType.EMPTY_CITY_CD=13;
	EnumAlertType.BU_KE_JING_JIA=250;
	EnumAlertType.PAIMAIEDUBUZU=251;
	EnumAlertType.YIJINGJINGJIA=252;
	EnumAlertType.JINGJIAFUFEIQUREN=253;
	EnumAlertType.YIKOUJIAFUFEIQUREN=254;
	EnumAlertType.BUY_SHOP=255;
	EnumAlertType.CREATE_GUILD=256;
	EnumAlertType.YUHUN_DECOMPOSE_ONE=257;
	EnumAlertType.YUHUN_DECOMPOSE_ALL=258;
	EnumAlertType.BEAUTY_UPGRADE=259;
	EnumAlertType.ZERO_GIFT=260;
	EnumAlertType.WAE_TOKEN=261;
	EnumAlertType.MANJIANG_PATA=262;
	EnumAlertType.WJ_REPLACE=263;
	EnumAlertType.FIT_XIAZHEN=264;
	EnumAlertType.GB_LEAVE=265;
	EnumAlertType.MYSTERY_STORE_REFRESH=270;
	EnumAlertType.MYSTERY_STORE_BUY=271;
	EnumAlertType.CELEBTATION_EXCHANGE=280;
	EnumAlertType.ACTSHOPSURE=398;
	EnumAlertType.Compose=399;
	EnumAlertType.UPGRADE_SYS_ID=100000;
	EnumAlertType.PET_LVUP=110000;
	EnumAlertType.MAN_LVUP=110001;
	EnumAlertType.JUNSHI_LVUP=110002;
	EnumAlertType.XUNBAO_SURE=200000;
	EnumAlertType.JUNSHI_TM=110003;
	__static(EnumAlertType,
	['DEFAULT_CHECK',function(){return this.DEFAULT_CHECK=LanUtil.GetLanStr("本次登陆不再提示");}
	]);
	return EnumAlertType;
})()


/**红颜配置信息**/
//class enem.com.game.beauty.BeautyData
var BeautyData=(function(){
	function BeautyData($cfg){
		this._cfg=null;
		/**激活道具**/
		this._activeItem=null;
		/**御灵升级需要的数量数组**/
		this._yuLingUpNeedNumArr=null;
		/**御灵解锁条件数组**/
		this._yuLingActiveCondArr=null;
		this._cfg=$cfg;
	}

	__class(BeautyData,'enem.com.game.beauty.BeautyData');
	var __proto=BeautyData.prototype;
	__proto.fightPower=function(level){
		return PowerUtil.GetAttListPower(this.attrList(level));
	}

	/**
	*等级属性
	*@param level
	*@return
	*/
	__proto.levelAttrList=function(level){
		var ret=BeautyData.GetLvAttr(this._cfg.q_id,level);
		return ret;
	}

	/**
	*获得当前的属性（基础属性+等级属性）
	*@param level
	*@return
	*/
	__proto.attrList=function(level){
		var list=this.baseAttrList;
		AttributeUtil.AttListAddToList(list,this.levelAttrList(level));
		return list;
	}

	/**
	*获得御灵指定部位升级需要的道具数量
	*@param partID
	*@return
	*/
	__proto.getYuLingUpNeed=function(partID){
		return partID >=1 && partID <=this.yuLingUpNeedNumArr.length ? this.yuLingUpNeedNumArr[partID-1] :0;
	}

	/**
	*获得御灵指定部位解锁的条件
	*@param partID
	*@return Point(品质，数量)
	*/
	__proto.getYuLingActiveCond=function(partID){
		var point=Point$1.TEMP.setTo(0,0);
		var temp;
		for (var i=0;i < this.yuLingActiveCondArr.length;i++){
			if (i==partID){
				temp=this.yuLingActiveCondArr[i];
				point.setTo(parseInt(temp[1]),parseInt(temp[2]));
				break ;
			}
		}
		return point;
	}

	/**
	*获得御灵指定部位的属性列表
	*@param partID
	*@param level
	*@return
	*/
	__proto.getYuLingPartAttrList=function(partID,level){
		switch (partID){
			case 0:
				return this.yuLingPart1AttrList(level);
			case 1:
				return this.yuLingPart2AttrList(level);
			case 2:
				return this.yuLingPart3AttrList(level);
			case 3:
				return this.yuLingPart4AttrList(level);
			case 4:
				return this.yuLingPart5AttrList(level);
			}
		return null;
	}

	__proto.yuLingPart1AttrList=function(level){
		var ratio=FormulaUtil.Compute(this._cfg.q_zizhi_attribute_formula_1,{level:level})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(this._cfg.q_zizhi_attribute_1,ratio);
		return ret;
	}

	__proto.yuLingPart2AttrList=function(level){
		var ratio=FormulaUtil.Compute(this._cfg.q_zizhi_attribute_formula_2,{level:level})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(this._cfg.q_zizhi_attribute_2,ratio);
		return ret;
	}

	__proto.yuLingPart3AttrList=function(level){
		var ratio=FormulaUtil.Compute(this._cfg.q_zizhi_attribute_formula_3,{level:level})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(this._cfg.q_zizhi_attribute_3,ratio);
		return ret;
	}

	__proto.yuLingPart4AttrList=function(level){
		var ratio=FormulaUtil.Compute(this._cfg.q_zizhi_attribute_formula_4,{level:level})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(this._cfg.q_zizhi_attribute_4,ratio);
		return ret;
	}

	__proto.yuLingPart5AttrList=function(level){
		var ratio=FormulaUtil.Compute(this._cfg.q_zizhi_attribute_formula_5,{level:level})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(this._cfg.q_zizhi_attribute_5,ratio);
		return ret;
	}

	/**基础属性**/
	__getset(0,__proto,'baseAttrList',function(){
		return AttributeUtil.jsonStrToList(this._cfg.q_base_attribute);
	});

	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__getset(0,__proto,'yuLingActiveCondArr',function(){
		if (this._yuLingActiveCondArr==null)
			this._yuLingActiveCondArr=JSONUtil.decode2(this._cfg.q_yuling_open);
		return this._yuLingActiveCondArr;
	});

	__getset(0,__proto,'activeItem',function(){
		if (this._activeItem==null)
			this._activeItem=ItemUtil.ItemIdToItem(this._cfg.q_zizhi_item,1);
		return this._activeItem;
	});

	__getset(0,__proto,'yuLingUpNeedNumArr',function(){
		if (this._yuLingUpNeedNumArr==null)
			this._yuLingUpNeedNumArr=JSONUtil.decode2(this._cfg.q_zizhi_exp_max);
		return this._yuLingUpNeedNumArr;
	});

	BeautyData.getMaxlv=function(){
		return 20;
	}

	BeautyData.GetLvAttr=function(petid,lv){
		lv=Math.max(1,lv);
		lv=Math.min(BeautyData.getMaxlv(),lv);
		var list=Q_hongyan_levelContainer.list;
		var len=list ? list.length :0;
		for (var i=0;i < len;++i){
			if (list[i].q_type==petid && list[i].q_level==lv){
				return AttributeUtil.jsonStrToList(list[i].q_attr);
			}
		}
		return null;
	}

	return BeautyData;
})()


//class enem.com.game.dungeon.EnumDungeon
var EnumDungeon=(function(){
	function EnumDungeon(){}
	__class(EnumDungeon,'enem.com.game.dungeon.EnumDungeon');
	EnumDungeon.GUANQIA=1;
	EnumDungeon.CAILIAO=2;
	EnumDungeon.GEREN_BOSS=3;
	EnumDungeon.QUANMING_BOSS=4;
	EnumDungeon.ZHIZUN_BOSS=5;
	EnumDungeon.YEWAI_BOSS=6;
	EnumDungeon.JIUCHONG_BOSS=7;
	EnumDungeon.TEAM_BOSS=8;
	EnumDungeon.LEGION_SQUARD=9;
	EnumDungeon.LEGION_BATTLE_SQUARD=10;
	EnumDungeon.MINGJIANGLV=11;
	EnumDungeon.QUANFUBOSS=12;
	EnumDungeon.QUANFUBOSS_GUILD=13;
	EnumDungeon.LEGION_BATTLE_MINION=14;
	EnumDungeon.LEGION_BATTLE_BOSS=15;
	EnumDungeon.MATERIAL_TYPE_HORSE=0;
	EnumDungeon.MATERIAL_TYPE_WUJIANG=1;
	EnumDungeon.MATERIAL_TYPE_JINGLIAN=2;
	EnumDungeon.MATERIAL_TYPE_DUANLIAN=3;
	EnumDungeon.MATERIAL_TYPE_GEM=4;
	EnumDungeon.MATERIAL_TYPE_SPRITE=5;
	EnumDungeon.MATERIAL_TYPE_WEAPON=6;
	EnumDungeon.MATERIAL_TYPE_WING=7;
	EnumDungeon.MATERIAL_TYPE_RING=8;
	EnumDungeon.MATERIAL_TYPE_GUARD=9;
	EnumDungeon.MATERIAL_TYPE_BEAUTY=10;
	EnumDungeon.DUN_ID_SERVER_CHALLENGE=15101;
	EnumDungeon.DUN_ID_GUILD_CHALLENGE=15102;
	return EnumDungeon;
})()


//class enem.com.game.newfunction.enum.EnumPanelID
var EnumPanelID=(function(){
	function EnumPanelID(){}
	__class(EnumPanelID,'enem.com.game.newfunction.enum.EnumPanelID');
	EnumPanelID.PanelID_n1=-1;
	EnumPanelID.PanelID_1=1;
	EnumPanelID.PanelID_2=2;
	EnumPanelID.PanelID_3=3;
	EnumPanelID.PanelID_4=4;
	EnumPanelID.PanelID_5=5;
	EnumPanelID.PanelID_6=6;
	EnumPanelID.PanelID_7=7;
	EnumPanelID.PanelID_8=8;
	EnumPanelID.PanelID_9=9;
	EnumPanelID.PanelID_10=10;
	EnumPanelID.PanelID_11=11;
	EnumPanelID.PanelID_12=12;
	EnumPanelID.PanelID_13=13;
	EnumPanelID.PanelID_14=14;
	EnumPanelID.PanelID_15=15;
	EnumPanelID.PanelID_16=16;
	EnumPanelID.PanelID_20=20;
	EnumPanelID.PanelID_21=21;
	EnumPanelID.PanelID_22=22;
	EnumPanelID.PanelID_23=23;
	EnumPanelID.PanelID_24=24;
	EnumPanelID.PanelID_25=25;
	EnumPanelID.PanelID_26=26;
	EnumPanelID.PanelID_27=27;
	EnumPanelID.PanelID_28=28;
	EnumPanelID.PanelID_29=29;
	EnumPanelID.PanelID_30=30;
	EnumPanelID.PanelID_31=31;
	EnumPanelID.PanelID_32=32;
	EnumPanelID.PanelID_33=33;
	EnumPanelID.PanelID_35=35;
	EnumPanelID.PanelID_36=36;
	EnumPanelID.PanelID_37=37;
	EnumPanelID.PanelID_38=38;
	EnumPanelID.PanelID_39=39;
	EnumPanelID.PanelID_40=40;
	EnumPanelID.PanelID_41=41;
	return EnumPanelID;
})()


//class enem.com.game.rank.event.RankEvent
var RankEvent=(function(){
	function RankEvent(){}
	__class(RankEvent,'enem.com.game.rank.event.RankEvent');
	RankEvent.RANK_INFO="rank_info";
	RankEvent.RANK_MOBAI="rank_mobai";
	RankEvent.RANK_PATA="rank_pata";
	RankEvent.RANK_POP="rank_pop";
	return RankEvent;
})()


//class enem.com.game.player.PlayerUtil
var PlayerUtil=(function(){
	function PlayerUtil(){}
	__class(PlayerUtil,'enem.com.game.player.PlayerUtil');
	/**副将1继承属性**/
	__getset(1,PlayerUtil,'role2InheritRatio',function(){
		if (PlayerUtil._role2InheritRatio==null)
			PlayerUtil._role2InheritRatio=JSONUtil.decode2(Q_level_paramContainer.GetValue(7).q_value);
		return PlayerUtil._role2InheritRatio;
	});

	/**副将2继承属性**/
	__getset(1,PlayerUtil,'role3InheritRatio',function(){
		if (PlayerUtil._role3InheritRatio==null)
			PlayerUtil._role3InheritRatio=JSONUtil.decode2(Q_level_paramContainer.GetValue(8).q_value);
		return PlayerUtil._role3InheritRatio;
	});

	/**手动升级所需人物等级**/
	__getset(1,PlayerUtil,'manualLevel',function(){
		return parseInt(Q_level_paramContainer.GetValue(9).q_value);
	});

	PlayerUtil.GetProfessionName=function(profession){
		if (profession==1)
			return TextUtil.FormatStr("战士");
		else if (profession==2)
		return TextUtil.FormatStr("法师");
		else if (profession==3)
		return TextUtil.FormatStr("道士");
		else
		return TextUtil.FormatStr("通用");
	}

	PlayerUtil.GetMaxLevel=function(zhuansheng){
		return FormulaUtil.Compute(Q_level_paramContainer.GetValue(5).q_value,{zhuansheng:zhuansheng});
	}

	PlayerUtil.GetLevelExp=function(level){
		return FormulaUtil.Compute(Q_level_paramContainer.GetValue(6).q_value,{level:level});
	}

	PlayerUtil.getAttrRatio=function(heroID,attrType){
		var arr;
		switch (heroID){
			case 1:
				return 1;
			case 2:
			case 3:
				arr=heroID==2 ? PlayerUtil.role2InheritRatio :PlayerUtil.role3InheritRatio;
				var temp;
				for(var $each_temp in arr){
					temp=arr[$each_temp];
					if (temp[0]==attrType)
						return temp[1] / 10000;
				}
				break ;
			}
		return 0;
	}

	PlayerUtil.GetZhuanShengAttribute=function(zhuansheng){
		var ratio=FormulaUtil.Compute(Q_zhuansheng_paramContainer.GetValue(5).q_value,{zhuansheng:zhuansheng})/ 10000;
		var ret=AttributeUtil.JArrStrToAttList(Q_zhuansheng_paramContainer.GetValue(4).q_value,ratio);
		return ret;
	}

	PlayerUtil.GetZhuanShengXiuWei=function(zhuansheng){
		return FormulaUtil.Compute(Q_zhuansheng_paramContainer.GetValue(2).q_value,{zhuansheng:zhuansheng});
	}

	PlayerUtil.IsMaxZhuanSheng=function(zs){
		return zs >=parseInt(Q_zhuansheng_paramContainer.GetValue(1).q_value);
	}

	PlayerUtil.GetMinLvToLv2XiuWei=function(){
		return parseInt(Q_zhuansheng_paramContainer.GetValue(3).q_value);
	}

	PlayerUtil.GetZhuanShengLv2XiuWei=function(index){
		var Arr=JSONUtil.decode2(Q_zhuansheng_paramContainer.GetValue(9).q_value);
		return Arr[index] ? Arr[index] :Arr[0];
	}

	PlayerUtil.GetXiuWeiExpCost=function(index){
		var Arr=JSONUtil.decode2(Q_zhuansheng_paramContainer.GetValue(12).q_value);
		return Arr[index] ? Arr[index] :Arr[0];
	}

	PlayerUtil.GetLevelShow=function(zs,level,hasji){
		(hasji===void 0)&& (hasji=true);
		var rein=zs;
		var sub=level;
		if (rein==0){
			if (hasji)
				return TextUtil.FormatStr("{@}级",[sub]);
			return sub.toString();
		}
		else {
			if (sub==0){
				return TextUtil.FormatStr("{@}转",[rein]);
			}
			else {
				if (hasji)
					return TextUtil.FormatStr("{@}转{@}级",[rein,sub]);
				else
				return TextUtil.FormatStr("{@}转{@}",[rein,sub]);
			}
		}
	}

	PlayerUtil.getLIGHTIMG=function(i){
		var q=Q_globalContainer.GetValue(175);
		if (q){
			var A=JSONUtil.decode(q.q_value);
			var id=(A && A[i])? A[i] :0;
			return TextUtil.FormatStr("res/ui/image/item_single/{@}.png",[id.toString()]);
		}
		return "";
	}

	PlayerUtil.getSuitNum=function(){
		var len=Q_equip_suitContainer.list.length;
		return len;
	}

	PlayerUtil.GetTabName=function(id){
		var equip_suit=Q_equip_suitContainer.GetValue(id);
		return equip_suit.q_name;
	}

	PlayerUtil.GetSuitForType=function(type){
		var equip_suit=Q_equip_suitContainer.GetValue(type);
		return equip_suit.q_equip;
	}

	PlayerUtil.GetAttribteForType=function(type){
		var equip_suit=Q_equip_suitContainer.GetValue(type);
		return equip_suit.q_attr;
	}

	PlayerUtil._role2InheritRatio=null;
	PlayerUtil._role3InheritRatio=null;
	return PlayerUtil;
})()


//class enem.com.base.effect.configs.enum.EnumBindPart
var EnumBindPart=(function(){
	function EnumBindPart(){}
	__class(EnumBindPart,'enem.com.base.effect.configs.enum.EnumBindPart');
	EnumBindPart.E_FOOT=0;
	EnumBindPart.E_WAIST=1;
	EnumBindPart.E_HEAD=2;
	return EnumBindPart;
})()


//class enem.com.game.battle.record.buff.RBuff
var RBuff=(function(){
	function RBuff(mid){
		// buffid
		this.mid=NaN;
		this._remainRound=0;
		this.mid=mid;
		this._remainRound=1;
	}

	__class(RBuff,'enem.com.game.battle.record.buff.RBuff');
	var __proto=RBuff.prototype;
	// 生效一波
	__proto.effect=function(){
		this._remainRound--;
	}

	// buff是否还有效
	__getset(0,__proto,'isValid',function(){
		return this._remainRound > 0;
	});

	__getset(0,__proto,'remainRound',function(){
		return this._remainRound;
	});

	return RBuff;
})()


//class enem.com.game.shop.enum.EnumShopType
var EnumShopType=(function(){
	function EnumShopType(){}
	__class(EnumShopType,'enem.com.game.shop.enum.EnumShopType');
	EnumShopType.ITEM=1;
	EnumShopType.BIND_GOLD=2;
	EnumShopType.BAOTA=3;
	EnumShopType.GUILD=4;
	EnumShopType.JINGJI=6;
	EnumShopType.JINGJIFULI=7;
	EnumShopType.YABIAO=14;
	EnumShopType.DATI=15;
	EnumShopType.YUANZHENG=16;
	EnumShopType.ZHULU=17;
	EnumShopType.MATERIAL=19;
	EnumShopType.EQU_S=21;
	EnumShopType.EQU_E=33;
	EnumShopType.SUB_JIFEN=1;
	EnumShopType.MYSTERY_STORE_MYSTERY=1;
	EnumShopType.MYSTERY_LIANJUN=2;
	EnumShopType.MYSTERY_YUNYOUSHANGREN=3;
	return EnumShopType;
})()


//class enem.com.game.team.EnumTeam
var EnumTeam=(function(){
	function EnumTeam(){}
	__class(EnumTeam,'enem.com.game.team.EnumTeam');
	EnumTeam.getPosSort=function(pos){
		switch (pos){
			case 1:
				return 0;
			case 2:
				return 1;
			}
		return 100;
	}

	EnumTeam.TYPE_GUILD_BATTLE=1;
	EnumTeam.TYPE_GUILD_MARRIAGE=2;
	EnumTeam.POS_LEADER=1;
	EnumTeam.POS_MEMBER=2;
	return EnumTeam;
})()


//class enem.com.game.chat.enum.EnumMainChatSizeType
var EnumMainChatSizeType=(function(){
	function EnumMainChatSizeType(){}
	__class(EnumMainChatSizeType,'enem.com.game.chat.enum.EnumMainChatSizeType');
	EnumMainChatSizeType.MIN=1;
	EnumMainChatSizeType.MAX=2;
	return EnumMainChatSizeType;
})()


//class enem.com.game.pet.event.PetEvent
var PetEvent=(function(){
	function PetEvent(){}
	__class(PetEvent,'enem.com.game.pet.event.PetEvent');
	PetEvent.ADD_YUANFEN="pet_add_yuanfen";
	PetEvent.ADD_PET="pet_add";
	PetEvent.CHANGE_NAME="pet_change_name";
	PetEvent.REPLACE_SKILL="pet_replace_skill";
	PetEvent.LEVEL_UP="pet_level_up";
	PetEvent.LEVEL_EXP="pet_level_exp";
	PetEvent.UPGRADE_STAR="pet_upgrade_star";
	PetEvent.UPGRADE_AWAKEN="pet_upgrade_awaken";
	PetEvent.XILIAN="pet_xilian";
	PetEvent.PET_SEL="pet_sel_change";
	PetEvent.WILDPET_UPDATE="pet_wildpet_update";
	PetEvent.GUNHUQU="GUNHUQU";
	PetEvent.SHOWDIFF="SHOWDIFF";
	PetEvent.PET_MOUSE_DOWN="PET_MOUSE_DOWN";
	PetEvent.PET_MOUSE_UP="PET_MOUSE_UP";
	PetEvent.PET_CHECK_SET_STATE="PET_CHECK_SET_STATE";
	PetEvent.SKILL_UP_INDEX="SKILL_UP_INDEX";
	PetEvent.SKILLCOSTERR="SKILLCOSTERR";
	PetEvent.HeadSlectChange="HeadSlectChange";
	PetEvent.HeadSlectLoadOver="HeadSlectLoadOver";
	PetEvent.PetCardChange="PetCardChange";
	PetEvent.ClickBackSkill="ClickBackSkill";
	PetEvent.PETLUNPAN_CHANGE="PETLUNPAN_CHANGE";
	PetEvent.ActDianJiangTurntable="ActDianJiangTurntable";
	PetEvent.PETLUNPAN_UPDATEE="PETLUNPAN_UPDATEE";
	PetEvent.CHONGZHIFANLIDAZHUANPAN="CHONGZHIFANLIDAZHUANPAN";
	return PetEvent;
})()


//class enem.com.game.pet.enums.EnumPet
var EnumPet=(function(){
	function EnumPet(){}
	__class(EnumPet,'enem.com.game.pet.enums.EnumPet');
	EnumPet.job2ServerType=function(job){
		switch (job){
			case 1:
				return 1;
			case 2:
				return 5;
			case 3:
				return 2;
			case 4:
				return 3;
			}
		return 0;
	}

	EnumPet.JOB_ALL=-1;
	EnumPet.JOB_WJ=1;
	EnumPet.JOB_HY=2;
	EnumPet.JOB_JS=3;
	EnumPet.JOB_MJ=4;
	EnumPet.CAMP_ALL=-1;
	EnumPet.CAMP_QUN=0;
	EnumPet.CAMP_WEI=1;
	EnumPet.CAMP_SHU=2;
	EnumPet.CAMP_WU=3;
	EnumPet.QUALITY_Shen=6;
	EnumPet.QUALITY_HONG=5;
	EnumPet.QUALITY_CHENG=4;
	EnumPet.QUALITY_ZI=3;
	EnumPet.QUALITY_LAN=2;
	return EnumPet;
})()


//class enem.com.game.pet.PetUtil
var PetUtil=(function(){
	function PetUtil(){}
	__class(PetUtil,'enem.com.game.pet.PetUtil');
	__getset(1,PetUtil,'starNeedID',function(){
		if(PetUtil._starNeedID==0)
			PetUtil._starNeedID=parseInt(Q_pet_paramContainer.GetValue(24).q_value);
		return PetUtil._starNeedID;
	});

	__getset(1,PetUtil,'activeSkillLvs',function(){
		if (PetUtil._activeSkillLvs==null)
			PetUtil._activeSkillLvs=JSONUtil.decode2(Q_pet_paramContainer.GetValue(14).q_value);
		return PetUtil._activeSkillLvs;
	});

	PetUtil.GetPetName=function(id){
		var cfg=Q_petContainer.GetValue(id);
		return cfg !=null ? cfg.q_name :"";
	}

	PetUtil.getpetId=function(id){
		var cfg=Q_petContainer.GetValue(id);
		if (cfg)return cfg.q_id;
		return Q_petContainer.list[0].q_id;
	}

	PetUtil.GetMode=function(id){
		var cfg=Q_petContainer.GetValue(id);
		if (!cfg){
			cfg=Q_petContainer.list[0];
		}
		return cfg.q_model;
	}

	PetUtil.getSound=function(qid){
		var cfg=Q_petContainer.GetValue(qid);
		return cfg !=null ? cfg.q_sound :0;
	}

	PetUtil.GetPetidByItemId=function(mid){
		for (var i=0;i < Q_petContainer.list.length;++i){
			if (Q_petContainer.list[i].q_zizhi_item==mid){
				return Q_petContainer.list[i].q_id;
			}
		}
		return 0;
	}

	PetUtil.GetPetidByItemId2=function(mid){
		if(PetUtil.itemidHash.values.length==0){
			for (var i=0;i < Q_petContainer.list.length;++i){
				PetUtil.itemidHash.put(Q_petContainer.list[i].q_zizhi_item,Q_petContainer.list[i].q_id);
			}
		};
		var petid=PetUtil.itemidHash.get(mid)==null ?0:PetUtil.itemidHash.get(mid);
		return petid;
	}

	PetUtil.getPetGroup=function(qid){
		var q_pet=Q_petContainer.GetValue(qid);
		return q_pet !=null ? q_pet.q_group :0;
	}

	PetUtil.getPetJob=function(qid){
		var q_pet=Q_petContainer.GetValue(qid);
		return q_pet !=null ? q_pet.q_job :0;
	}

	PetUtil.getPetZhiye=function(qid){
		var q_pet=Q_petContainer.GetValue(qid);
		return q_pet !=null ? q_pet.q_zhiye :0;
	}

	PetUtil.getPetQuality=function(qid){
		var q_pet=Q_petContainer.GetValue(qid);
		return q_pet !=null ? q_pet.q_quality :0;
	}

	PetUtil.GetPetRingID=function(mid){
		return PetUtil.GetQuality(mid);
	}

	PetUtil.getJobName=function(job){
		switch (job){
			case 1:
				return "武将";
			case 2:
				return "红颜";
			case 3:
				return "军师";
			case 4:
				return "蛮将";
			}
		return "";
	}

	PetUtil.GetPetIds=function(){
		var ret=[];
		for (var i=0;i < Q_petContainer.list.length;++i){
			ret.push(Q_petContainer.list[i].q_id);
		}
		return ret;
	}

	PetUtil.GetMaxLevel=function(petId){
		return Q_petContainer.GetValue(petId).q_level_max;
	}

	PetUtil.IsGodPet=function(petId){
		return PetUtil.GetQuality(petId)>=5;
	}

	PetUtil.GetLevelUpMaterial=function(level){
		var ret=JSONUtil.decode(Q_pet_levelContainer.GetValue(level).q_cost);
		return ret;
	}

	PetUtil.getExtraUpMaterial=function(level){
		if(PetUtil._extraUpmaterialObj==null)
			PetUtil._extraUpmaterialObj=JSONUtil.decode(Q_pet_paramContainer.GetValue(25).q_value);
		return PetUtil._extraUpmaterialObj[level];
	}

	PetUtil.GetMaxExp=function(level){
		return FormulaUtil.Compute(Q_pet_paramContainer.GetValue(1).q_value,{level:level});
	}

	PetUtil.GetQuality=function(id){
		var model=Q_petContainer.GetValue(id);
		if (model==null)return 0;
		return model.q_quality;
	}

	PetUtil.GetQualityColor=function(id){
		return ItemUtil.GetItemColorStr(PetUtil.GetQuality(id));
	}

	PetUtil.GetHeadUrl=function(id){
		var q_pet=Q_petContainer.GetValue(id);
		return "res/ui/image/head/pet/"+(q_pet !=null ? q_pet.q_model :0)+".png";
	}

	PetUtil.getCampURL=function(id){
		return "res/ui/sg_ui/general/camp_"+PetUtil.getPetGroup(id)+".png";;
	}

	PetUtil.GetHeadKuangUrl=function(id){
		return ResUrl.GetItemQualityKey(PetUtil.GetQuality(id));
	}

	PetUtil.ItemIdToPetId=function(mid){
		var list=Q_petContainer.list;
		for (var i=0;i < list.length;++i){
			if (list[i].q_zizhi_item==mid){
				return list[i].q_id;
			}
		}
		return 0;
	}

	PetUtil.ItemIdToId=function(mid){
		var list=Q_militaryContainer.list;
		for (var i=0;i < list.length;++i){
			if (list[i].q_zizhi_item==mid){
				return list[i].q_id;
			}
		}
		return 0;
	}

	PetUtil.GetJunShiName=function(id){
		var cfg=Q_militaryContainer.GetValue(id);
		return cfg !=null ? cfg.q_name :"";
	}

	PetUtil.GetJunShiModel=function(id){
		return Q_militaryContainer.GetValue(id).q_model;
	}

	PetUtil.GetJunShiBaseAttribute=function(id){
		var mode=Q_militaryContainer.GetValue(id);
		if (mode)
			return AttributeUtil.JArrStrToAttList(mode.q_base_attribute);
		return null;
	}

	PetUtil.GetPetBaseAttribute=function(id){
		var mode=Q_petContainer.GetValue(id);
		if (mode)
			return AttributeUtil.JArrStrToAttList(mode.q_base_attribute);
		return null;
	}

	PetUtil.GetPetLevelAttribute=function(id,level){
		var model2=Q_pet_levelContainer.GetValue(level);
		var extra=[];
		if (model2 !=null)
			extra=AttributeUtil.jsonStrToList(model2.q_attribute);
		return extra;
	}

	PetUtil.GetSkillQuality=function(petId,skill,level){
		var quality=1;
		if (PetUtil.IsZhudongSkill(petId,skill)){
			quality=PetUtil.GetQuality(petId);
			}else {
			quality=level-1==0 ? 1 :level-1;
		}
		return quality;
	}

	PetUtil.GetSkillQualityKuang=function(quality){
		return ResUrl.GetSkillQualityKuang(quality);
	}

	PetUtil.GetUnopenUrl=function(){
		return "res/ui/sg_ui/pet/ui_bm_weikaifang.png";
	}

	PetUtil.GetSkillUnlockLevel=function(index){
		var value=JSONUtil.decode(Q_pet_paramContainer.GetValue(14).q_value);
		return value && value[index] ? value[index] :0;
	}

	PetUtil.GetDefaultBeidong=function(petId){
		if (!PetUtil.Beidongs.get(petId)){
			var skills=JSONUtil.decode(Q_petContainer.GetValue(petId).q_passive_skill_num);
			var num=0;
			if(skills)
				num=skills.length;
			var ret=[];
			for (var i=0;i < num;++i){
				var bean=new SkillBean();
				bean.id=skills[i];
				bean.level=1;
				ret.push(bean);
			}
			PetUtil.Beidongs.set(petId,ret);
		}
		return PetUtil.Beidongs.get(petId);
	}

	PetUtil.GetZhudongId=function(petId){
		var cfg=Q_petContainer.GetValue(petId);
		if(cfg && cfg.q_active_skill_id){
			var arr=JSONUtil.decode2(cfg.q_active_skill_id);
			return arr!=null&&arr.length>0?arr[0]:0;
		}
		return 0;
	}

	PetUtil.IsZhudongSkill=function(petId,skillId){
		if (petId==0)return false;
		var mode=Q_petContainer.GetValue(petId);
		if (mode && mode.q_active_skill_id){
			var arr=JSONUtil.decode2(mode.q_active_skill_id);
			return arr.indexOf(skillId)!=-1;
		}
		return false;
	}

	PetUtil.GetXilianMaxStar=function(){
		return JSONUtil.decode(Q_pet_paramContainer.GetValue(9).q_value).length;
	}

	PetUtil.GetzizhiMat=function(id){
		var cfg=Q_petContainer.GetValue(id);
		return cfg ? cfg.q_zizhi_item :0;
	}

	PetUtil.starNeedNum=function(petID){
		var cfg=Q_petContainer.GetValue(petID);
		return cfg!=null?cfg.q_zizhi_exp:0;
	}

	PetUtil.GetziZhiExps=function(petId){
		if (PetUtil._ziZhiMaxExp[petId]==null){
			var arr=JSONUtil.decode(Q_petContainer.GetValue(petId).q_zizhi_exp_max);
			PetUtil._ziZhiMaxExp[petId]=arr;
		}
		return PetUtil._ziZhiMaxExp[petId];
	}

	PetUtil.GetziZhiMaxExp=function(petId,star){
		var arr=PetUtil.GetziZhiExps(petId);
		var param={level:star};
		return [arr[0],FormulaUtil.Compute(arr[1],param)];
	}

	PetUtil.GetziZhiMaxStar=function(petId){
		return Q_petContainer.GetValue(petId).q_zizhi_max;
	}

	PetUtil.IszizhiMaxStar=function(petId,star){
		return star >=PetUtil.GetziZhiMaxStar(petId);
	}

	PetUtil.GetIocnByStar=function(star){
		var petvalue=Q_pet_paramContainer.GetValue(28);
		var arr;
		if(petvalue)
			arr=JSONUtil.decode2(petvalue.q_value);
		if(arr==null)
			arr=[[1,1],[6,2],[11,3],[20,4],[30,5]];
		var len=arr?arr.length:0;
		for(var i=len-1;i >=0;i--){
			if(arr[i]&&star >=arr[i][0])
				return arr[i][1];
		}
		return 0;
	}

	PetUtil.GetzizhiAttribute=function(petId,star,exp){
		var model=Q_petContainer.GetValue(petId);
		var formula=model.q_zizhi_attribute_formula;
		var ratio=FormulaUtil.Compute(formula,{level:star,jingyan:exp})/ 10000;
		return AttributeUtil.JArrStrToAttList(model.q_zizhi_attribute,ratio);
	}

	PetUtil.TrialTowerGetzizhiAttribute=function(petId,star){
		var hash=enem.com.game.pet.PetUtil.zizhiSelf(petId);
		var len=hash.values.length;
		var nextarr;
		var ratio=NaN;
		for (var i=0;i < len;++i){
			if(i==star){
				nextarr=hash.get(i);
				ratio=(star+1)/ 1000;
			}
		}
		if (nextarr==null)
			return null;
		var ret=[];
		AttributeUtil.JArrToAttList(nextarr,ret,ratio);
		return ret;
	}

	PetUtil.TrialTowerGetAweakAttribute=function(petId,order,star){
		var model=Q_awakeningContainer.list;
		var awakeInfo;
		for (var i=0;i < model.length;++i){
			if(model[i].q_order==order&&model[i].q_star==star){
				awakeInfo=Q_awakeningContainer.GetValue(model[i].q_id);
			}
		};
		var quality=enem.com.game.pet.PetUtil.getPetQuality(petId);
		var obj=JSON.parse(awakeInfo.q_attribute);
		var itemArr=obj [quality+""];
		var ret=[];
		AttributeUtil.JArrToAttList(itemArr,ret,1);
		return ret;
	}

	PetUtil.getLevelAttrList=function(petID,level){
		var model=Q_petContainer.GetValue(petID);
		if (model==null)
			return null;
		var base=AttributeUtil.jsonStrToList(model.q_base_attribute);
		var model2=Q_pet_levelContainer.GetValue(level);
		var extra=[];
		if (model2 !=null){
			var attArr=JSONUtil.decode(model2.q_attribute);
			AttributeUtil.JArrToAttList(attArr[model.q_quality] ,extra);
		}
		AttributeUtil.AttListAddToList(base,extra);
		return base;
	}

	PetUtil.getPassiveSkillNum=function(petID){
		var cfg=Q_petContainer.GetValue(petID);
		return cfg !=null ? JSONUtil.decode(cfg.q_passive_skill_num).length :0;
	}

	PetUtil.getSkillIDs=function(petID){
		var cfg=Q_petContainer.GetValue(petID);
		return cfg!=null?JSONUtil.decode2(cfg.q_passive_skill_num):null;
	}

	PetUtil.willActiveSkillID=function(petID){}
	PetUtil.curActiveSkillID=function(petID,level){
		var index=-1;
		var len=PetUtil.activeSkillLvs!=null?PetUtil.activeSkillLvs.length:0;
		for(var i=0;i < len;i++){
			if(PetUtil.activeSkillLvs[i]==level){
				index=i;
				break ;
			}
		}
		return index;
	}

	PetUtil.GetJiHuoCostItem=function(petid){
		var Mid=Q_petContainer.GetValue(petid).q_zizhi_item;
		var _item=ItemUtil.ItemIdToItem(Mid,1);
		return _item;
	}

	PetUtil.GetPetIdByName=function(_name){
		for (var i=0;i < Q_petContainer.list.length;++i){
			if (Q_petContainer.list[i].q_name==_name){
				return Q_petContainer.list[i].q_id;
			}
		}
		return 0;
	}

	PetUtil.getPetSpecialEffID=function(petID){
		switch (petID){
			case 648:
				return 10603;
			case 649:
				return 10604;
			case 650:
				return 10601;
			case 651:
				return 10602;
			}
		return 0;
	}

	PetUtil.cardToPetID=function(mid){
		var list_p=Q_petContainer.list;
		var len=0;
		len=list_p ? list_p.length :0;
		var i=0;
		for (;i < len;++i){
			if (list_p[i].q_zizhi_item==mid){
				return list_p[i].q_id;
			}
		}
		return 0;
	}

	PetUtil.hasGroupType=function(type){
		var list=Q_pet_groupContainer.list;
		var cfg;
		for(var $each_cfg in list){
			cfg=list[$each_cfg];
			if(cfg.q_tab==type)
				return true;
		}
		return false;
	}

	PetUtil.getSkillCost1=function(lv,hi){
		(hi===void 0)&& (hi=false);
		var Id=hi ? 16 :15;
		var js=JSONUtil.decode(Q_pet_paramContainer.GetValue(Id).q_value);
		if (hi){
			if (PetUtil.Higid==0){
				PetUtil.Higid=js ? parseInt(js[0][0]):0;
				PetUtil.Higform=js ? js[0][1] :"";
			}
		}
		else {
			if (PetUtil.Lowid==0){
				PetUtil.Lowid=js ? parseInt(js[0][0]):0;
				PetUtil.Lowform=js ? js[0][1] :"";
			}
		};
		var id=hi ? PetUtil.Higid :PetUtil.Lowid;
		var Str=hi ? PetUtil.Higform :PetUtil.Lowform;
		var form=FormulaUtil.Compute(Str,{level:lv});
		return ItemUtil.ItemIdToItem(id,form);
	}

	PetUtil.GetPetDisMissItem=function(){
		var cfg=Q_pet_paramContainer.GetValue(23);
		if(cfg==null)return null;
		var arr=JSONUtil.decode2(cfg.q_value);
		var item=ItemUtil.ItemIdToItem(arr[0]);
		item.num=arr[1];
		return item;
	}

	PetUtil.GetPetDisMissStarItem=function(petId,star){
		var mid=0;
		var num=0;
		var arr;
		if((enem.com.game.pet.PetUtil.IszizhiMaxStar(petId,star))){
			arr=enem.com.game.pet.PetUtil.GetziZhiMaxExp(petId,star-1);
			mid=arr[0];
			num=arr[1];
		}
		else{
			arr=enem.com.game.pet.PetUtil.GetziZhiMaxExp(petId,star);
			mid=arr[0];
			num=arr[1];
		};
		var cfg=Q_pet_paramContainer.GetValue(24);
		var arr=JSONUtil.decode(cfg.q_value);
		var data=Q_petContainer.GetValue(petId);
		if(arr && data&& arr[data.q_quality] !=null)
			mid=arr[data.q_quality];
		var item=ItemUtil.ItemIdToItem(mid);
		item.num=num;
		return item;
	}

	PetUtil.GetLevelStarMaterial=function(q_id,level,v){
		var ret=PetUtil.GetLevelUpMaterial(1);
		if(level>1){
			for(var i=2;i < level;i++){
				ret=PetUtil.GetLeveladdMaterial(ret,i);
			}
		}
		else{
			ret=null;
			return PetUtil.GetStaraddMaterial(ret,q_id,v);
		}
		return PetUtil.GetStaraddMaterial(ret,q_id,v);
	}

	PetUtil.GetStaraddMaterial=function(ret,id,v){
		var star2=PetUtil.GetziZhiMaxStar(id);
		if(star2==0)return ret;
		var item=PetUtil.GetPetDisMissStarItem(id,v.star);
		if(item==null)return null;
		var num=0;
		var arr;
		for(var i=1;i <=v.star;i++){
			arr=enem.com.game.pet.PetUtil.GetziZhiMaxExp(id,i-1);
			num+=arr[1];
		}
		if(ret==null)
			ret=[];
		if(num >0)
			ret.push([item.modelId,num]);
		return ret;
	}

	PetUtil.GetLeveladdMaterial=function(ret,level){
		var arr=PetUtil.GetLevelUpMaterial(level);
		for(var value in ret){
			ret[value][0]=arr[value][0];
			ret[value][1]+=arr[value][1];
		}
		return ret;
	}

	PetUtil.GetdaibiMid=function(quality){
		var cfg=Q_pet_paramContainer.GetValue(24);
		if(cfg==null)return 0;
		var arr=JSONUtil.decode(cfg.q_value);
		return arr&& arr[quality]!=null ?arr[quality]:0;
	}

	PetUtil.GetShowStarNum=function(cur,maxstar){
		var cfg=Q_pet_paramContainer.GetValue(27);
		var arr;
		if(cfg)
			arr=JSONUtil.decode(cfg.q_value);
		if(arr==null)
			arr=[[0,"1"],[10,"2"],[20,"3"]];
		var len=arr?arr.length:0;
		var curmax=0;
		var next="0";
		var cur1=0;
		for(var i=len-1;i >=0;i--){
			if(arr[i] && arr[i][0]< cur){
				next=arr[i-1]?arr[i-1][1]:"0";
				curmax=arr[i+1]?(arr[i+1][0]-arr[i][0]):10;
				var cur2=cur%10;
				cur1=(cur2==0 && cur!=0)? 10:cur2;
				return [cur1,10 ,arr[i][1],next];
			}
		}
		return [cur%10,10,"1","0"];
	}

	PetUtil.GetPetRealShowStarNum=function(star){
		if(PetUtil.PataStarArr==null){
			var petdata=Q_pet_paramContainer.GetValue(33);
			PetUtil.PataStarArr=JSONUtil.decode(petdata.q_value);
		};
		var texing=0;
		var value;
		for(var $each_value in PetUtil.PataStarArr){
			value=PetUtil.PataStarArr[$each_value];
			if(value[1] > star){
				return texing;
			}
			else{
				texing=value[0];
			}
		}
		return texing;
	}

	PetUtil.GetPetShowStarByTengXing=function(quality){
		(quality===void 0)&& (quality=3);
		if(PetUtil.PataStarArr==null){
			var petdata=Q_pet_paramContainer.GetValue(33);
			PetUtil.PataStarArr=JSONUtil.decode(petdata.q_value);
			var petdata=Q_pet_paramContainer.GetValue(34);
			PetUtil.PataStarArr2=JSONUtil.decode(petdata.q_value);
		};
		var arr=PetUtil.PataStarArr;
		if(quality >=3)
			arr=PetUtil.PataStarArr2;
		return arr;
	}

	PetUtil.GetPetShowStarByTengXingNum=function(texing,quality){
		(quality===void 0)&& (quality=3);
		if(PetUtil.PataStarArr==null){
			var petdata=Q_pet_paramContainer.GetValue(33);
			PetUtil.PataStarArr=JSONUtil.decode(petdata.q_value);
			var petdata=Q_pet_paramContainer.GetValue(34);
			PetUtil.PataStarArr2=JSONUtil.decode(petdata.q_value);
		};
		var arr=PetUtil.PataStarArr;
		if(quality >=3)
			arr=PetUtil.PataStarArr2;
		var value;
		for(var $each_value in arr){
			value=arr[$each_value];
			if(value[0]==texing){
				return value[1];
			}
		}
		return 1;
	}

	PetUtil.zizhiStar=function(petid){
		if(PetUtil.zizhiHash!=null||PetUtil.zizhiHash.length!=0)
			PetUtil.zizhiHash.clear();
		var zizhi=Q_petContainer.GetValue(petid);
		var arr=JSONUtil.decode(zizhi.q_zizhi_show);
		for(var i=0;i<arr.length;i++){
			var obj=arr [i];
			PetUtil.zizhiHash.put(obj.quality,obj.prob)
		}
		return PetUtil.zizhiHash;
	}

	PetUtil.zizhiSelf=function(petid){
		if(PetUtil.zizhiSelfHash!=null||PetUtil.zizhiSelfHash.length!=0)
			PetUtil.zizhiSelfHash.clear();
		var zizhi=Q_petContainer.GetValue(petid);
		var arr=JSONUtil.decode(zizhi.q_zizhi_growth);
		for(var i=0;i<arr.length;i++){
			var obj=arr [i];
			PetUtil.zizhiSelfHash.put(obj.quality,obj.prob)
		}
		return PetUtil.zizhiSelfHash;
	}

	PetUtil.awakeningPetHash=function(order){
		if(PetUtil.awakeningHash.length!=0&&PetUtil.awakeningHash!=null){
			return PetUtil.awakenningOne(order);
		}
		else{
			var awakenning=Q_awakeningContainer.list;
			for(var j=0;j<awakenning.length;j++){
				if(PetUtil.awakeningHash.containsKey(awakenning[j].q_order)){
					var arr=PetUtil.awakeningHash.get(awakenning[j].q_order);
					arr.push(awakenning[j]);
				}
				else{
					var newArr=[];
					newArr.push(awakenning[j]);
					PetUtil.awakeningHash.put(awakenning[j].q_order,newArr);
				}
			}
		}
		return PetUtil.awakenningOne(order);
	}

	PetUtil.awakenningOne=function(order){
		if(PetUtil.awakeningHash.containsKey(order)){
			var arr=PetUtil.awakeningHash.get(order);
			return arr;
		}
	}

	PetUtil.isFullStar=function(awakeOrder,awakenStar){
		var awakenning=Q_awakeningContainer.list;
		for(var i=awakenning.length-1;i>=0;i--){
			return awakeOrder==awakenning[i].q_order&&awakenStar==awakenning[i].q_star;
		}
		return false;
	}

	PetUtil.isFullOrder=function(awakeOrder){
		var awakenning=Q_awakeningContainer.list;
		return awakeOrder==awakenning[awakenning.length-1].q_order;
	}

	PetUtil.awakenAttribute=function(awakeOrder,awakenStar,quality){
		var hash=new HashMap();
		var awakenning=Q_awakeningContainer.list;
		for(var i=0;i<awakenning.length;i++){
			if(awakenning[i].q_order==awakeOrder&&awakenning[i].q_star==awakenStar)
			{return hash;}
			else{
				var hasha=JSON.parse(awakenning[i].q_attribute);
				var str=JSON.stringify(hasha[quality]);
				var vos=AttributeUtil.JArrStrToAttList(str);
				if(vos.length==0)
					continue ;
				for(var l=0;l<vos.length;l++){
					if(hash.containsKey(vos[l].type)){
						var attr=hash.get(vos[l].type);
						attr.value=attr.value+vos[l].value;
					}
					else{
						hash.put(vos[l].type,vos[l]);
					}
				}
			}
		}
		return hash;
	}

	PetUtil.curAwakening=function(order,awakeSrar){
		var curAwakening=PetUtil.awakeningPetHash(order);
		for(var j=0;j<curAwakening.length;j++){
			if(curAwakening[j].q_star==awakeSrar)
				return curAwakening[j];
		}
		return null;
	}

	PetUtil.MATERIAL_FORMULA=null;
	PetUtil._extraUpmaterialObj=null;
	PetUtil._starNeedID=0;
	PetUtil._ziZhiMaxExp={};
	PetUtil._activeSkillLvs=null;
	PetUtil.Lowid=0;
	PetUtil.Lowform="";
	PetUtil.Higid=0;
	PetUtil.Higform="";
	PetUtil.PataStarArr=null;
	PetUtil.PataStarArr2=null;
	__static(PetUtil,
	['itemidHash',function(){return this.itemidHash=new HashMap();},'Beidongs',function(){return this.Beidongs=new Dictionary();},'zizhiHash',function(){return this.zizhiHash=new HashMap();},'zizhiSelfHash',function(){return this.zizhiSelfHash=new HashMap();},'awakeningHash',function(){return this.awakeningHash=new HashMap();}
	]);
	return PetUtil;
})()


//class enem.com.game.handbook.events.BookEvents
var BookEvents=(function(){
	function BookEvents(){}
	__class(BookEvents,'enem.com.game.handbook.events.BookEvents');
	BookEvents.BOOKJIHUO="BOOKJIHUO";
	BookEvents.BOOKSTAR="BOOKSTAR";
	BookEvents.BOOKDIS="BOOKDIS";
	BookEvents.BOOKSEL="BOOKSEL";
	BookEvents.BOOKRED="BOOKRED";
	return BookEvents;
})()


//class enem.com.game.battle.common.enum.EnumTalkTime
var EnumTalkTime=(function(){
	function EnumTalkTime(){}
	__class(EnumTalkTime,'enem.com.game.battle.common.enum.EnumTalkTime');
	EnumTalkTime.UER=0;
	EnumTalkTime.HIT=1;
	EnumTalkTime.DEAD=2;
	EnumTalkTime.ENTER=3;
	return EnumTalkTime;
})()


//class enem.com.game.expedition.burnchibi.EnumBurnChiBi
var EnumBurnChiBi=(function(){
	function EnumBurnChiBi(){}
	__class(EnumBurnChiBi,'enem.com.game.expedition.burnchibi.EnumBurnChiBi');
	EnumBurnChiBi.TAB_UNACCEPT_TASK=0;
	EnumBurnChiBi.TAB_ACCEPT_TASK=1;
	return EnumBurnChiBi;
})()


/**九重天排名奖励配置信息**/
//class enem.com.game.activity.data.NineHeavyRankPrizeData
var NineHeavyRankPrizeData=(function(){
	function NineHeavyRankPrizeData($cfg){
		this._cfg=null;
		this._rewards=null;
		/**最大排名（当最小和最大排名不一致时，说明这是个区间）**/
		this._Rank=0;
		this._cfg=$cfg;
		this._Rank=this._cfg.q_rank;
	}

	__class(NineHeavyRankPrizeData,'enem.com.game.activity.data.NineHeavyRankPrizeData');
	var __proto=NineHeavyRankPrizeData.prototype;
	/**
	*排名是否在当前区间内
	*@param rank
	*@return
	*/
	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__getset(0,__proto,'rewards',function(){
		if(this._rewards==null && this._cfg.q_prize)
			this._rewards=ItemUtil.JsonStringToItemList(this._cfg.q_prize);
		return this._rewards;
	});

	__getset(0,__proto,'Rank',function(){
		return this._Rank;
	});

	return NineHeavyRankPrizeData;
})()


//class enem.com.game.fit.general.EnumFit
var EnumFit=(function(){
	function EnumFit(){}
	__class(EnumFit,'enem.com.game.fit.general.EnumFit');
	EnumFit.getWjTypeByIdx=function(index){
		switch (index){
			case 0:
				return 1;
			case 1:
				return 2;
			case 2:
				return 3;
			}
		return 1;
	}

	EnumFit.isFitWJType=function(fitType){
		return fitType==1 || fitType==2 || fitType==3;
	}

	EnumFit.FIT_TYPE_WJ=-1;
	EnumFit.FIT_TYPE_JG=-2;
	EnumFit.FIT_EQUIP_ZS_WEAPON_NAME=6;
	EnumFit.FIT_EQUIP_ZS_WEAPON_ICON=7;
	EnumFit.FIT_EQUIP_SUIPIAN=1307;
	EnumFit.FIT_EQUIP_WUQI_SUIPIAN=1308;
	EnumFit.WEAPON_SHOW_TYPE_COMPOSE=1;
	EnumFit.WEAPON_SHOW_TYPE_STRENGTH=2;
	EnumFit.FIT_TYPE_WJ_1=1;
	EnumFit.FIT_TYPE_WJ_2=2;
	EnumFit.FIT_TYPE_WJ_3=3;
	EnumFit.FIT_TYPE_HY=4;
	EnumFit.FIT_TYPE_JS=5;
	EnumFit.FIT_TYPE_MJ=6;
	__static(EnumFit,
	['FIT_TYPES',function(){return this.FIT_TYPES=[1,2,3,4,5,6];}
	]);
	return EnumFit;
})()


/**护符管理类**/
//class enem.com.game.daily.amulet.AmuletUtil
var AmuletUtil=(function(){
	function AmuletUtil(){}
	__class(AmuletUtil,'enem.com.game.daily.amulet.AmuletUtil');
	__getset(1,AmuletUtil,'maxLevel',function(){
		return Q_amuletContainer.list.length;
	});

	return AmuletUtil;
})()


//class enem.com.base.GAME_COST
var GAME_COST=(function(){
	function GAME_COST(){}
	__class(GAME_COST,'enem.com.base.GAME_COST');
	GAME_COST.ANIM_EFF_HIT=0;
	GAME_COST.ANIM_EFF_LOCUS=1;
	GAME_COST.ANIM_EFF_OTHER=2;
	GAME_COST.ANIM_EFF_SCENE=3;
	GAME_COST.ANIM_EFF_UER=4;
	GAME_COST.ANIM_EFF_UI=5;
	GAME_COST.ANIM_EFF_WEP=6;
	GAME_COST.ANIM_EFF_BUFF=7;
	GAME_COST.ANIM_EFF_MONSTER=8;
	GAME_COST.ANIM_EFF_UI_TITLE=10;
	GAME_COST.ANIM_PLAYER_M=100;
	GAME_COST.ANIM_PLAYER_F=101;
	GAME_COST.ANIM_WEP_M=102;
	GAME_COST.ANIM_WEP_F=103;
	GAME_COST.ANIM_HORSE_HEAD=105;
	GAME_COST.ANIM_HORSE_BODY=106;
	GAME_COST.ANIM_PET=110;
	GAME_COST.ANIM_JINGL=111;
	GAME_COST.ANIM_WING=113;
	GAME_COST.ANIM_HAIR=114;
	GAME_COST.ANIM_FUNC_HORSE=116;
	GAME_COST.ANIM_FUNC_WING=117;
	GAME_COST.ANIM_FUNC_FASHION=118;
	GAME_COST.FASHION_HORSE=119;
	GAME_COST.FASHION_WING=120;
	GAME_COST.FASHION_SPRITE=121;
	GAME_COST.FASHION_WEAPON=122;
	GAME_COST.ANIM_RING=123;
	GAME_COST.FASHION_GEAR=124;
	GAME_COST.FASHION_TREASURE=125;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_ROLE_M=201;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_ROLE_F=202;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_WEP_M=203;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_WEP_F=204;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_MOUNT=205;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_WING_M=206;
	GAME_COST.ANIM_EFF_UI_ROLESHOW_WING_F=207;
	GAME_COST.ANIM_SHOUHU=208;
	GAME_COST.ANIM_SHOUHUN=209;
	GAME_COST.SK_SKELETON=1000;
	GAME_COST.SK_SKELETON_HALO=1001;
	return GAME_COST;
})()


//class enem.com.game.daily.pacifypeace.event.PacifyPeaceEvent
var PacifyPeaceEvent=(function(){
	function PacifyPeaceEvent(){}
	__class(PacifyPeaceEvent,'enem.com.game.daily.pacifypeace.event.PacifyPeaceEvent');
	PacifyPeaceEvent.PPE_RESET_ALL_TASK="PPE_RESET_ALL_TASK";
	PacifyPeaceEvent.PPE_UPDATE_TASKS="PPE_UPDATE_TASKS";
	PacifyPeaceEvent.PPE_UPDATE_ONE_TASK="PPE_UPDATE_ONE_TASK";
	PacifyPeaceEvent.PPE_UPDATE_REWARD_STATE="PPE_UPDATE_REWARD_STATE";
	PacifyPeaceEvent.PPE_SORT_TASK="PPE_SORT_TASK";
	return PacifyPeaceEvent;
})()


//class enem.com.game.auction.AuctionEvent.AucEvent
var AucEvent=(function(){
	function AucEvent(){}
	__class(AucEvent,'enem.com.game.auction.AuctionEvent.AucEvent');
	AucEvent.CHANGETYPE="GAIBIANPINJI";
	AucEvent.CHANGECOLOR="AUCCOLORCHANGE";
	AucEvent.AUCTIONTIME="AUCTIONTIME";
	AucEvent.AUCTIONDATACOME="AUCTIONDATACOME";
	AucEvent.AUCTIONSAVEBAR="AUCTIONSAVEBAR";
	AucEvent.AUCTIONDELONE="AUCTIONDELONE";
	AucEvent.AUCTIONCHAONE="AUCTIONCHAONE";
	AucEvent.CHANGE_BID="CHANGE_BID";
	AucEvent.CLOSE_COLOR_PANEL="CLOSE_COLOR_PANEL";
	AucEvent.AUCTION_CHANGE="AUCTION_CHANGE";
	AucEvent.AUCTION_NOTIC_CHANGE="AUCTION_NOTIC_CHANGE";
	return AucEvent;
})()


//class enem.com.base.effect.configs.model.base.NormalEffectModel
var NormalEffectModel=(function(){
	function NormalEffectModel(){
		// 配置id
		this._cfgid=0;
		// 特效id
		this._id=0;
		// 延迟释放
		this._delay=0;
		// 绑定部位
		this._part=0;
		// 所在层级
		this._layer=0;
		// 跟随对象(特效是不是要跟着人)
		this._follow=false;
		// 特效所在文件夹类型（弹道，施法，命中 etc）
		this._type=0;
		// 使用攻击者方向（否则使用默认方向）
		this._dir=false;
		// 是否循环特效
		this._loop=false;
		// 0-序列帧 1-骨骼动画 2-粒子
		this._renderType=0;
		// offx
		this._offX=0;
		// offy
		this._offY=0;
		// scalex
		this._scalex=NaN;
		// scaley
		this._scaley=NaN;
		// rotateType
		this._rotateType=0;
		// 播放速度
		this._playSpeed=NaN;
		// easeFunc
		this._easeFunc=null;
		// limit performance
		this._limitNum=0;
	}

	__class(NormalEffectModel,'enem.com.base.effect.configs.model.base.NormalEffectModel');
	var __proto=NormalEffectModel.prototype;
	__proto.Parse=function(data,limitNum){
		if (data==null)
			return;
		this._limitNum=limitNum;
		this._id=data.id !=null ? data.id :0;
		this._delay=data.delay !=null ? data.delay :0;
		this._part=data.part !=null ? data.part :1;
		this._layer=data.layer !=null ? data.layer :1;
		this._follow=data.follow !=null ? data.follow==1 :false;
		this._type=data.type !=null ? data.type :4;
		this._dir=data.dir !=null ? data.dir==1 :true;
		this._loop=data.loop !=null ? data.loop==1 :false;
		this._offX=data.offx !=null ? data.offx :0;
		this._offY=data.offy !=null ? data.offy :0;
		this._scalex=data.scalex !=null ? data.scalex :1;
		this._scaley=data.scaley !=null ? data.scaley :1;
		this._rotateType=data.rotate !=null ? data.rotate :0;
		if (data.render !=null)
			this._renderType=data.render;
		if (data.movetype !=null){
			var movetype=parseInt(data.movetype);
			if (movetype !=0){
				this._easeFunc=MTweenFunc.GetEaseFuncByID(movetype);
			}
		}
		this._playSpeed=data.speed !=null ? data.speed :1;
	}

	__getset(0,__proto,'follow',function(){
		return this._follow;
	});

	__getset(0,__proto,'scaley',function(){
		return this._scaley;
	});

	__getset(0,__proto,'delay',function(){
		return this._delay;
	});

	__getset(0,__proto,'id',function(){
		return this._id;
	});

	__getset(0,__proto,'part',function(){
		return this._part;
	});

	__getset(0,__proto,'dir',function(){
		return this._dir;
	});

	__getset(0,__proto,'layer',function(){
		return this._layer;
	});

	__getset(0,__proto,'type',function(){
		return this._type;
	});

	__getset(0,__proto,'offY',function(){
		return this._offY;
	});

	__getset(0,__proto,'scalex',function(){
		return this._scalex;
	});

	__getset(0,__proto,'loop',function(){
		return this._loop;
	});

	__getset(0,__proto,'offX',function(){
		return this._offX;
	});

	__getset(0,__proto,'rotateType',function(){
		return this._rotateType;
	});

	__getset(0,__proto,'moveFunc',function(){
		return this._easeFunc;
	});

	__getset(0,__proto,'playSpeed',function(){
		return this._playSpeed;
	});

	__getset(0,__proto,'cfgid',function(){
		return this._cfgid;
		},function(value){
		this._cfgid=value;
	});

	__getset(0,__proto,'limitNum',function(){
		return this._limitNum;
	});

	__getset(0,__proto,'renderType',function(){
		return this._renderType;
	});

	return NormalEffectModel;
})()


/**
*商城类型
*/
//class enem.com.game.shop.enum.EnumShopMainType
var EnumShopMainType=(function(){
	function EnumShopMainType(){}
	__class(EnumShopMainType,'enem.com.game.shop.enum.EnumShopMainType');
	EnumShopMainType.GOLD=1;
	EnumShopMainType.EQUIP=2;
	EnumShopMainType.DECREE=3;
	EnumShopMainType.JIFEN=4;
	EnumShopMainType.QUNYING=5;
	EnumShopMainType.EMPTY_CITY=6;
	EnumShopMainType.MYSTERY_STORE=11;
	EnumShopMainType.CELEBRATION_EXCHANGE=13;
	return EnumShopMainType;
})()


/**答题工具类**/
//class enem.com.game.activity.answer.Util.AnswerUtil
var AnswerUtil=(function(){
	function AnswerUtil(){}
	__class(AnswerUtil,'enem.com.game.activity.answer.Util.AnswerUtil');
	/**获得一个随机的题目ID**/
	__getset(1,AnswerUtil,'randomQuestionID',function(){
		var len=Q_question_bankContainer.list.length;
		return len>0?Math.floor(Math.random()*len)+1:0;
	});

	AnswerUtil.Getprize=function(rank){
		var len=Q_question_bank_rewardContainer.list.length;
		for(var i=0;i<len;++i){
			if(rank>=Q_question_bank_rewardContainer.list[i].q_rank_max && rank<=Q_question_bank_rewardContainer.list[i].q_rank_min){
				return Q_question_bank_rewardContainer.list[i].q_prize;
			}
		}
	}

	return AnswerUtil;
})()


//class enem.com.game.boss.events.BossEvent
var BossEvent=(function(){
	function BossEvent(){}
	__class(BossEvent,'enem.com.game.boss.events.BossEvent');
	BossEvent.BOSS_LIST="boss_list";
	BossEvent.BOSS_UPDATE="boss_update";
	BossEvent.BOSS_CHALLENGE_UPDATE="boss_challenge_update";
	BossEvent.BOSS_BUY_UPDATE="boss_buy_update";
	BossEvent.BOSS_RANKLIST="boss_rank";
	BossEvent.FIELD_BOSS_UPDATE="field_boss_update";
	BossEvent.BOSS_REBORN="BOSS_REBORN";
	BossEvent.BOSS_REBORNED="BOSS_REBORNED";
	BossEvent.BOSS_ZHIZUNINFO="BOSS_ZHIZUNINFO";
	return BossEvent;
})()


/**
*@author Administrator
*/
//class enem.com.game.items.ItemGridParam
var ItemGridParam=(function(){
	function ItemGridParam(){
		this.showNum=true;
		this.hasItemFlag=true;
		this.isAddEff=false;
		/**要不要显示品质边框 **/
		this.isShowQualityBorder=true;
		/**是否显示获得特效**/
		this.isShowGetEff=false;
		// 0方形 1圆形
		this.shapeType=0;
		// 强制显示最低的品质
		this.forceQuality=0;
		/**格子数量文本色值*/
		this.textColor=null;
		/**是否显示格子道具描述**/
		this.showDescTxt=true;
		/**道具描述类型 0-名字 1-xx等级 **/
		this.showDescType=0;
		/**道具描述间隔 **/
		this.showDescInv=2;
		/**是否需要描边**/
		this.DescStroke=false;
		/**是否加粗**/
		this.isBold=false;
		this.tipOpenType=0;
		this.isPetuse=true;
		/**区分人物道具Tips*/
		this.isStar=false;
		;
	}

	__class(ItemGridParam,'enem.com.game.items.ItemGridParam');
	var __proto=ItemGridParam.prototype;
	__proto.Reset=function(){
		this.showNum=true;
		this.hasItemFlag=true;
		this.isAddEff=true;
		this.isShowQualityBorder=true;
		this.isShowGetEff=false;
		this.shapeType=0;
		this.forceQuality=0;
		this.textColor=null;
		this.tipOpenType=0;
		this.showDescTxt=true;
		this.showDescType=0;
		this.showDescInv=2;
		this.DescStroke=false;
		this.isBold=false;
		this.isPetuse=true;
		this.isStar=false;
		return this;
	}

	ItemGridParam.Create=function(showNum,isAddEff,isShowBorder,isSellFlag){
		(showNum===void 0)&& (showNum=true);
		(isAddEff===void 0)&& (isAddEff=true);
		(isShowBorder===void 0)&& (isShowBorder=true);
		(isSellFlag===void 0)&& (isSellFlag=false);
		var ret=new ItemGridParam();
		ret.showNum=showNum;
		ret.isAddEff=isAddEff;
		ret.isShowQualityBorder=isShowBorder;
		return ret;
	}

	ItemGridParam.CreateShape=function(shapeType,isShowBorder){
		(shapeType===void 0)&& (shapeType=0);
		(isShowBorder===void 0)&& (isShowBorder=true);
		var ret=new ItemGridParam();
		ret.shapeType=shapeType;
		ret.isShowQualityBorder=isShowBorder;
		return ret;
	}

	ItemGridParam.CreateForceQuality=function(quality){
		var ret=new ItemGridParam();
		ret.forceQuality=quality;
		return ret;
	}

	__static(ItemGridParam,
	['TEMP',function(){return this.TEMP=new ItemGridParam();}
	]);
	return ItemGridParam;
})()


/**
*战斗对象类型
*/
//class enem.com.game.battle.common.enum.EnumBattleObjectType
var EnumBattleObjectType=(function(){
	function EnumBattleObjectType(){}
	__class(EnumBattleObjectType,'enem.com.game.battle.common.enum.EnumBattleObjectType');
	EnumBattleObjectType.MONSTER=0;
	EnumBattleObjectType.HERO=1;
	EnumBattleObjectType.WUJIANG=2;
	EnumBattleObjectType.JIGUAN=3;
	EnumBattleObjectType.HONGYAN=4;
	EnumBattleObjectType.ADVISER=5;
	EnumBattleObjectType.MANJIANG=6;
	EnumBattleObjectType.JINGLING=7;
	EnumBattleObjectType.TREASURE=8;
	return EnumBattleObjectType;
})()


//class enem.com.game.setting.event.SettingEvent
var SettingEvent=(function(){
	function SettingEvent(){}
	__class(SettingEvent,'enem.com.game.setting.event.SettingEvent');
	SettingEvent.INIT="setting_init";
	SettingEvent.PET_FIGHT="setting_pet_fight";
	SettingEvent.SKILL_SORT="setting_skill_sort";
	SettingEvent.AUTO_MELT="setting_auto_melt";
	SettingEvent.BOSSREFRESH="setting_boss_refresh";
	SettingEvent.AUCTIONS="AUCTIONS";
	SettingEvent.AUTO_AUTODISBAND="setting_auto_autodisband";
	return SettingEvent;
})()


//class enem.com.game.boss.bean.vo.quanMingBossInfo
var quanMingBossInfo=(function(){
	function quanMingBossInfo(){
		/**boss id**/
		this._bossID=0;
		/**boss血量**/
		this._bossHp=0;
		/**归属玩家**/
		this._belongPlayerName="";
		/**boss最大血量**/
		this._bossMaxHp=0;
	}

	__class(quanMingBossInfo,'enem.com.game.boss.bean.vo.quanMingBossInfo');
	var __proto=quanMingBossInfo.prototype;
	__proto.updateBossAllInfo=function($bossID,$bossHp,$bossMaxHp){
		this._bossID=$bossID;
		this._bossHp=$bossHp.fValue;
		if(this._bossHp < 0)
			this._bossHp=0;
		this._bossMaxHp=Math.max($bossMaxHp.fValue,1);
		EventCenter.Event("QUANMING_BOSS_UPDATE_BOSS_ALL_INFO");
	}

	__proto.updateBossHp=function($bossHp){
		this._bossHp=$bossHp.fValue;
		if(this._bossHp < 0)
			this._bossHp=0;
		EventCenter.Event("QUANMING_BOSS_UPDATE_BOSS_HP");
	}

	__proto.updatePanelInfo=function(belong,timeStamp){
		this._belongPlayerName=belong!=null?belong:"";
		EventCenter.Event("QUANMING_BOSS_UPDATE_PANEL_INFO");
	}

	__getset(0,__proto,'bossID',function(){
		return this._bossID;
	});

	__getset(0,__proto,'belongPlayerName',function(){
		return this._belongPlayerName;
	});

	__getset(0,__proto,'bossHp',function(){
		return this._bossHp;
	});

	__getset(0,__proto,'bossMaxHp',function(){
		return this._bossMaxHp;
	});

	return quanMingBossInfo;
})()


//class enem.com.base.scene.model.enum.EnumModelType
var EnumModelType=(function(){
	function EnumModelType(){}
	__class(EnumModelType,'enem.com.base.scene.model.enum.EnumModelType');
	EnumModelType.TYPE_CLOTH=1;
	EnumModelType.TYPE_WEAPON=2;
	EnumModelType.TYPE_WING=3;
	EnumModelType.TYPE_HORSE=5;
	return EnumModelType;
})()


/**
*战场bean（理论上是可以无限复用一个的）
*/
//class enem.com.game.battle.common.bean.CBattleBean
var CBattleBean=(function(){
	function CBattleBean(){
		/**总轮数**/
		this.roundmax=5;
		/**战斗类型 EnumBattleType**/
		this.type=0;
		/**第几回合显示跳过 0-不显示**/
		this.skip=0;
		/**最终回合数**/
		this.round=0;
		/**战斗结果**/
		this.win=false;
		/**记录列表**/
		this.records=[];
		/****/
		this.isPvp=false;
		this.enemies=new CBattleGroupBean();
		this.friends=new CBattleGroupBean();
	}

	__class(CBattleBean,'enem.com.game.battle.common.bean.CBattleBean');
	var __proto=CBattleBean.prototype;
	Laya.imps(__proto,{"engine.base.pool.spool.ISimplePool":true})
	__proto.clear=function(){
		this.enemies.clear();
		this.friends.clear();
		this.roundmax=5;
		this.type=0;
		this.skip=0;
		this.win=false;
		this.records.length=0;
	}

	return CBattleBean;
})()


//class enem.com.game.capsure.CapUtil
var CapUtil$1=(function(){
	function CapUtil(){}
	__class(CapUtil,'enem.com.game.capsure.CapUtil',null,'CapUtil$1');
	CapUtil.ShowGifts=function(TYPE){
		if(TYPE >=12)
			return ItemUtil.JsonStringToItemList(Q_treasure_paramContainer.GetValue(TYPE+990).q_value);
		else
		return ItemUtil.JsonStringToItemList(Q_treasure_paramContainer.GetValue(TYPE).q_value);
	}

	CapUtil.ShowSpeGifts=function(){
		return ItemUtil.JsonStringToItemList(Q_treasure_paramContainer.GetValue(27).q_value);
	}

	CapUtil.NeedFree=function(type){
		return Q_treasureContainer.GetValue(type).q_free !=-1;
	}

	return CapUtil;
})()


//class enem.com.game.pvp.enum.ArenaEnum
var ArenaEnum=(function(){
	function ArenaEnum(){}
	__class(ArenaEnum,'enem.com.game.pvp.enum.ArenaEnum');
	ArenaEnum.THISWEEK=1;
	ArenaEnum.LASTWEEK=2;
	ArenaEnum.ARENA_WZZB_COSTTYPE=2;
	ArenaEnum.ARENA_WZZB_ROUNDS=13;
	ArenaEnum.QYHIN=1;
	ArenaEnum.QYHOUT=2;
	ArenaEnum.QYHSHOWSTAKE=1;
	ArenaEnum.QYHSHOWWATCH=0;
	ArenaEnum.QYH_STAGE_1=-1;
	ArenaEnum.QYH_STAGE0=0;
	ArenaEnum.QYH_STAGE1=1;
	ArenaEnum.QYH_STAGE2=2;
	ArenaEnum.QYH_STAGE3=3;
	ArenaEnum.QYH_STAGE4=4;
	ArenaEnum.QYH_STAGE5=5;
	ArenaEnum.QYH_STAGE6=6;
	ArenaEnum.QYH_STAGE7=7;
	return ArenaEnum;
})()


//class enem.com.game.player.enum.EnumEquip
var EnumEquip=(function(){
	function EnumEquip(){}
	__class(EnumEquip,'enem.com.game.player.enum.EnumEquip');
	EnumEquip.WEAPON=1;
	EnumEquip.WEAR=4;
	EnumEquip.LIGHTWEAPON=11;
	EnumEquip.LIGHTWEAR=12;
	return EnumEquip;
})()


/**
*宠物类型（用于场景或者战场中取模板数据从哪里取）
*/
//class enem.com.game.pet.enums.EnumPetType
var EnumPetType=(function(){
	function EnumPetType(){}
	__class(EnumPetType,'enem.com.game.pet.enums.EnumPetType');
	EnumPetType.getSort=function(petType){
		switch (petType){
			case 1:
				return 1;
			case 2:
				return 2;
			case 3:
				return 5;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 6;
			}
		return 10000;
	}

	EnumPetType.WUJIANG=1;
	EnumPetType.BEAUTY=2;
	EnumPetType.XUANNV=3;
	EnumPetType.JUNSHI=4;
	EnumPetType.MANJIANG=5;
	EnumPetType.Treasure=6;
	return EnumPetType;
})()


//class enem.com.game.gear.events.GearEvent
var GearEvent=(function(){
	function GearEvent(){}
	__class(GearEvent,'enem.com.game.gear.events.GearEvent');
	GearEvent.REPLACE_SKILL="gear_replace_skill";
	GearEvent.XILIAN="gear_xilian";
	GearEvent.ATTR="gear_attr_change";
	GearEvent.QIANGHUA="gear_qianghua_change";
	GearEvent.CHANGE_SKILL="CHANGE_SKILL";
	return GearEvent;
})()


/*动态处理资源*/
//class enem.com.base.DynamicMemoryMgr
var DynamicMemoryMgr=(function(){
	function DynamicMemoryMgr(){
		/*全类型压缩 如所有的怪物*/
		this.typeKeys=[];
		/*全id压缩 如某个怪物资源id为1*/
		this.idKeys=[];
		/*动作压缩 具体某个资源的动作 如怪物的动作 攻击1*/
		this.actKeys=[];
		// UI资源处理
		this._foreverUI=["res/ui/image/battle","res/ui/image/sg_font"];
		this._unpackUrl="unpack.json";
		CallbackUtil.callbackUseCompressTexture=this.cbUseCompressTexture;
		CallbackUtil.callbackOutGC=this.checkGCUI;
	}

	__class(DynamicMemoryMgr,'enem.com.base.DynamicMemoryMgr');
	var __proto=DynamicMemoryMgr.prototype;
	__proto.init=function(){
		this.DynamicResData();
		this.ZipResData();
	}

	/*注册常驻资源*/
	__proto.DynamicResData=function(){
		var list=Q_installContainer.list;
		for (var i=0;i < list.length;++i){
			var data=list[i];
			if (data.q_keytype==2){
				if (data.q_type==0){
					this.addForeverUI(data.q_key);
				}
				}else{
				if (data.q_type==0){
					if (data.q_keytype==1){
						MSheetAnimationGC.Ins.RegisterForeverRes(data.q_key+".sk");
						}else{
						MSheetAnimationGC.Ins.RegisterForeverRes(data.q_key);
					}
				}
			}
		}
	}

	/*注册资源是否压缩*/
	__proto.ZipResData=function(){
		var list=Q_zipContainer.list;
		var data;
		for(var $each_data in list){
			data=list[$each_data];
			if(data.q_style==0)
				this.typeKeys.push(MAnimationUtil.RES_TYPE_MAP[data.q_type]);
			else if(data.q_style==1){
				var ranks=JSONUtil.decode2(data.q_rank);
				for(var r=ranks[0];r<=ranks[1];r++){
					var id=r;
					var acts=JSONUtil.decode2(data.q_active);
					if(acts){
						for(var i=0;i<acts.length;i++){
							var key=MAnimationUtil.ToKeyName(data.q_type,id,acts[i]);
							this.actKeys.push(key);
						}
					}
					else{
						var key=MAnimationUtil.ToShortKey(data.q_type,id);
						this.idKeys.push(key);
					}
				}
			}
		}
	}

	__proto.cbUseCompressTexture=function(key){
		return DynamicMemoryMgr.Ins.useCompress(key);
	}

	__proto.useCompress=function(key){
		return true;
		if (CallbackUtil.isLowMachine){
			return true;
		}
		if(this.actKeys.indexOf(key)>=0)
			return true;
		var index=key.lastIndexOf("/");
		var ids=key.substring(0,index);
		if(this.idKeys.indexOf(ids)>=0)
			return true;
		index=ids.lastIndexOf("/");
		var types=ids.substring(0,index);
		if(this.typeKeys.indexOf(types)>=0)
			return true;
		return false;
	}

	__proto.addForeverUI=function(key){
		this._foreverUI.push(key);
	}

	__proto.isForever=function(url){
		var f=this._foreverUI;
		var len=f.length;
		for (var i=0;i < len;++i){
			if (url.indexOf(f[i])==0){
				return true;
			}
		}
		return false;
	}

	__proto.checkGCUI=function(){
		DynamicMemoryMgr.Ins._checkGCUI();
	}

	__proto._checkGCUI=function(){
		var obj=Laya.loader.getRes(this._unpackUrl);
		if (obj){
			this.doGCUI();
			}else{
			Laya.loader.load(this._unpackUrl,Handler.create(this,this.doGCUI),null,"json");
		}
	}

	__proto.doGCUI=function(){
		var unpack=Laya.loader.getRes(this._unpackUrl);
		var cdn=URL.basePath;
		var hasVersion=ResourceVersionEx.manifest !=null;
		var urlResourcesMap=laya.resource.Resource._urlResourcesMap;
		var texConstructorName="laya.webgl.resource.Texture2D";
		var checkReleaseTexs=[];
		var alluigpu=0;
		var cangpu=0;
		var verurl;
		var nonverurl;
		for (var url in urlResourcesMap){
			var resList=urlResourcesMap[url];
			verurl=url.replace(cdn,"");
			nonverurl=verurl;
			if (hasVersion){
				nonverurl=verurl.substr(url.indexOf("/"));
			}
			for (var i=0;i < resList.length;++i){
				var v=resList[i];
				if (v.constructor.__className==texConstructorName){
					if (nonverurl.indexOf("res/ui")==0 || nonverurl.indexOf("res/atlas")==0){
						alluigpu+=v.gpuMemory;
						if (unpack.indexOf(nonverurl)!=-1 && !this.isForever(nonverurl)){
							checkReleaseTexs.push(v);
							cangpu+=v.gpuMemory;
						}
					}
				}
			}
		}
		if (cangpu < 52428800){
			console.log("ui memory:"+cangpu);
			return;
		};
		var releasegpu=0;
		var log="UI gc:\n";
		for (var i=0;i < checkReleaseTexs.length;++i){
			var tex=checkReleaseTexs[i];
			if (!tex.lock && tex.referenceCount==0){
				releasegpu+=tex.gpuMemory;
				var url=tex.url.replace(cdn,"");
				log+=url+"\n";
				Laya.loader.clearTextureRes(url);
			}
		}
		console.log("all:"+alluigpu+" can:"+cangpu+" release:"+releasegpu+"\n"+log);
	}

	__static(DynamicMemoryMgr,
	['Ins',function(){return this.Ins=new DynamicMemoryMgr();}
	]);
	return DynamicMemoryMgr;
})()


/**九重天积分奖励配置信息**/
//class enem.com.game.activity.data.NineHeavyScorePrizeData
var NineHeavyScorePrizeData=(function(){
	function NineHeavyScorePrizeData($cfg,lastScore){
		this._cfg=null;
		this._rewards=null;
		/**最小积分（当最小和最大积分不一致时，说明这是个区间）**/
		this._minScore=0;
		/**最大积分（当最小和最大积分不一致时，说明这是个区间）**/
		this._maxScore=0;
		this._cfg=$cfg;
		this._maxScore=lastScore>0?lastScore-1:-1;
		this._minScore=this._cfg.q_score;
	}

	__class(NineHeavyScorePrizeData,'enem.com.game.activity.data.NineHeavyScorePrizeData');
	var __proto=NineHeavyScorePrizeData.prototype;
	/**
	*积分是否在当前区间内
	*@param score
	*@return
	*/
	__proto.isInScoreRange=function(score){
		if(this._maxScore==-1)
			return score>=this._minScore;
		return score>=this._minScore && score<=this._maxScore;
	}

	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__getset(0,__proto,'rewards',function(){
		if(this._rewards==null && this._cfg.q_prize)
			this._rewards=ItemUtil.JsonStringToItemList(this._cfg.q_prize);
		return this._rewards;
	});

	return NineHeavyScorePrizeData;
})()


//class enem.com.game.xunbao.event.XunBaoEvent
var XunBaoEvent=(function(){
	function XunBaoEvent(){}
	__class(XunBaoEvent,'enem.com.game.xunbao.event.XunBaoEvent');
	XunBaoEvent.XBE_HUNT="XBE_HUNT";
	XunBaoEvent.XBE_HUNT2="XBE_HUNT2";
	XunBaoEvent.XBE_RECORD="XBE_RECORD";
	XunBaoEvent.XBE_STAR="XBE_STAR";
	XunBaoEvent.XBE_BTN_CHANGE="XBE_BTN_CHANGE";
	XunBaoEvent.XUNBAO_TAKEREWARD="XUNBAO_TAKEREWARD";
	XunBaoEvent.XUNBAO_TEN_AGAIN="XUNBAO_TEN_AGAIN";
	XunBaoEvent.RELOAD_REWARD="RELOAD_REWARD";
	XunBaoEvent.RELOAD_REWARDED="RELOAD_REWARDED";
	XunBaoEvent.XUNBAO_CHECK="XUNBAO_CHECK";
	XunBaoEvent.XUNBAO_SERVER="XUNBAO_SERVER";
	XunBaoEvent.XUNBAO_ANIM="XUNBAO_ANIM";
	XunBaoEvent.XUNBAO_SPECHANGEITEM="XUNBAO_SPECHANGEITEM";
	XunBaoEvent.XUNBAO_Count="XUNBAO_Count";
	return XunBaoEvent;
})()


/**
*关卡工具类
*/
//class enem.com.game.gate.GateUtil
var GateUtil=(function(){
	function GateUtil(){}
	__class(GateUtil,'enem.com.game.gate.GateUtil');
	GateUtil.GetChallengeInv=function(){
		if (GateUtil._ChallengeInvMin==0){
			var arr=JSONUtil.decode(Q_dungeon_paramContainer.GetValue(2).q_value);
			GateUtil._ChallengeInvMin=arr[0];
			GateUtil._ChallengeInvMax=arr[1];
		}
		return (Math.random()*(GateUtil._ChallengeInvMax-GateUtil._ChallengeInvMin)+GateUtil._ChallengeInvMin)| 0;
	}

	GateUtil.GetName=function(mid){
		var vo=GateUtil.GetChapterByDungeon(mid);
		if (vo==null)return "";
		var sub=vo.GetSubVo(mid);
		if (sub==null)return "";
		var name=Q_chapterContainer.GetValue(vo.GetSubVo(vo.start).end).q_name;
		return name+vo.GetSubIndex(mid)+"-"+(mid-sub.start+1);
	}

	GateUtil.GetShowPrize=function(){
		return Q_dungeon_paramContainer.GetValue(27).q_value;
	}

	GateUtil.GetSceneId=function(mid){
		var vo=GateUtil.GetChapterByDungeon(mid);
		if (vo==null)return 1001;
		var model=Q_chapterContainer.GetValue(vo.end);
		return model.q_sceneid;
	}

	GateUtil.InitChapter=function(){
		if (GateUtil.isInit)return;
		GateUtil.isInit=true;
		var list=Q_chapterContainer.list;
		var old=1;
		var start=1;
		var ids=[];
		for (var i=0;i < list.length;++i){
			if (list[i].q_chapter_id !=old){
				var vo=new ChapterVo();
				vo.chapterId=old;
				vo.SetData(start,ids);
				GateUtil.chaptersCfg.push(vo);
				start=list[i-1].q_end+1;
				old=list[i].q_chapter_id;
				ids.length=0;
				ids.push(list[i].q_end);
			}
			else{
				ids.push(list[i].q_end);
			}
		}
	}

	GateUtil.GetChapterScene=function(chapterId){
		var cvo=GateUtil.GetChapterByChapterId(chapterId);
		if (cvo==null)return 0;
		return cvo.scene;
	}

	GateUtil.GetDungeonWave=function(dungeonId){
		return Q_chapterContainer.GetValue(GateUtil.GetSubChapter(dungeonId).end).q_fight_number;
	}

	GateUtil.GetSubChapterReward=function(endDungeon){
		return Q_chapterContainer.GetValue(endDungeon).q_reward;
	}

	GateUtil.GetSubChapter=function(dungeonId){
		if (!GateUtil.isInit)GateUtil.InitChapter();
		for (var i=0;i < GateUtil.chaptersCfg.length;++i){
			if (GateUtil.chaptersCfg[i].Contain(dungeonId))
				return GateUtil.chaptersCfg[i].GetSubVo(dungeonId);
		}
		return null;
	}

	GateUtil.GetChapterByDungeon=function(dungeonId){
		if (!GateUtil.isInit)GateUtil.InitChapter();
		for (var i=0;i < GateUtil.chaptersCfg.length;++i){
			if (GateUtil.chaptersCfg[i].Contain(dungeonId))
				return GateUtil.chaptersCfg[i];
		}
		return null;
	}

	GateUtil.GetChapterByChapterId=function(chapterId){
		if (!GateUtil.isInit)GateUtil.InitChapter();
		for (var i=0;i < GateUtil.chaptersCfg.length;++i){
			if (GateUtil.chaptersCfg[i].chapterId==chapterId)
				return GateUtil.chaptersCfg[i];
		}
		return null;
	}

	GateUtil.BossCardJumpType=function(type){
		var mod=Q_globalContainer.GetValue(183);
		var arr=JSONUtil.decode2(mod.q_value);
		if(arr && arr.indexOf(type)>-1){
			return false;
		}
		return true;
	}

	GateUtil.GetName1=function(mid){
		var vo=GateUtil.GetChapterByDungeon(mid);
		if (vo==null)return "";
		var sub=vo.GetSubVo(mid);
		if (sub==null)return "";
		var name=Q_chapterContainer.GetValue(vo.GetSubVo(vo.start).end).q_name;
		return name+"第"+vo.GetSubIndex(mid)+"-"+(mid-sub.start+1)+"关";
	}

	GateUtil.BossJumpallpeopleskip=function(){
		var mod=Q_dungeon_paramContainer.GetValue(26);
		return parseInt(mod.q_value);
	}

	GateUtil.BossJumpVIPlevel=function(){
		var mod=Q_globalContainer.GetValue(197);
		return parseInt(mod.q_value);
	}

	GateUtil.BossJumpCardskip=function(){
		var mod=Q_globalContainer.GetValue(172);
		return parseInt(mod.q_value);
	}

	GateUtil.BossJumpPVPskip=function(){
		var mod=Q_globalContainer.GetValue(162);
		return parseInt(mod.q_value);
	}

	GateUtil.BossJumpfightskip=function(){
		var mod=Q_globalContainer.GetValue(164);
		return parseInt(mod.q_value);
	}

	GateUtil.pvpJumpType=function(type){
		var mod=Q_globalContainer.GetValue(196);
		var arr=JSONUtil.decode2(mod.q_value);
		if(arr && arr.indexOf(type)>-1){
			return true;
		}
		return false;
	}

	GateUtil._ChallengeInvMin=0;
	GateUtil._ChallengeInvMax=0;
	GateUtil.chaptersCfg=[];
	GateUtil.isInit=false;
	return GateUtil;
})()


//class enem.com.game.npc.enums.EnumNpcType
var EnumNpcType=(function(){
	function EnumNpcType(){}
	__class(EnumNpcType,'enem.com.game.npc.enums.EnumNpcType');
	EnumNpcType.SHIMEN=1;
	EnumNpcType.NINE_HEAVY=2;
	EnumNpcType.GUILD_BOSS_BOX=3;
	EnumNpcType.GUILD_BOSS=4;
	EnumNpcType.GUILD_TERRITORY_MONSTER=5;
	EnumNpcType.GUILD_TERRITORY_COLLECT=6;
	EnumNpcType.GUILD_BATTLE=7;
	EnumNpcType.GUILD_BATTLE_YX=8;
	EnumNpcType.QUANMING_BOSS=9;
	return EnumNpcType;
})()


//class enem.com.game.items.enum.EnumItemFlagType
var EnumItemFlagType=(function(){
	function EnumItemFlagType(){}
	__class(EnumItemFlagType,'enem.com.game.items.enum.EnumItemFlagType');
	EnumItemFlagType.FLAG_JOB=1;
	EnumItemFlagType.TIME_LIMIT=2;
	EnumItemFlagType.CHUANSHI=3;
	return EnumItemFlagType;
})()


//class enem.com.game.attribute.vo.AttributeVo
var AttributeVo=(function(){
	function AttributeVo(){
		this.type=0;
		this.value=NaN;
		/**多倍**/
		this.multi=1;
		this.multi=1;
	}

	__class(AttributeVo,'enem.com.game.attribute.vo.AttributeVo');
	var __proto=AttributeVo.prototype;
	/**
	*返回显示用的值
	*例如：万分比的返回xx%，非万分比的返回原值
	*/
	__proto.ToShowValue=function(){
		var curValue=Math.floor(this.value *this.multi);
		if (AttributeUtil.IsPercentAttr(this.type))
			return curValue / 100+"%";
		return curValue.toString();
	}

	/**
	*返回显示用的值（空值的情况）
	*例如：万分比的返回xx%，非万分比的返回原值
	*/
	__proto.ToShowEmptyValue=function(){
		var curValue=this.value *this.multi;
		if (AttributeUtil.IsPercentAttr(this.type))
			return "0%";
		return "0";
	}

	/**
	*
	*@param autoBlank 属性名字自动空格
	*@return
	*/
	__proto.GetNameString=function(autoBlank){
		(autoBlank===void 0)&& (autoBlank=true);
		return AttributeUtil.GetAttributeName(this.type,autoBlank);
	}

	__proto.Combin=function(vo){
		if (this.type !=vo.type)
			return;
		this.value=this.value *this.multi+vo.value *vo.multi;
		this.multi=1;
	}

	__proto.Clone=function(){
		var vo=new AttributeVo();
		vo.type=this.type;
		vo.value=this.value;
		vo.multi=this.multi;
		return vo;
	}

	/**仅仅返回属性的名称以及数值**/
	__proto.GetString3=function(autoBlank,char){
		(autoBlank===void 0)&& (autoBlank=true);
		(char===void 0)&& (char=":");
		return this.GetNameString(autoBlank)+char+this.ToShowValue();
	}

	/**仅仅返回属性的名称以及数值（空值的情况）**/
	__proto.GetEmptyString=function(autoBlank,char){
		(autoBlank===void 0)&& (autoBlank=true);
		(char===void 0)&& (char=":");
		return this.GetNameString(autoBlank)+char+this.ToShowEmptyValue();
	}

	__getset(0,__proto,'attrValue',function(){
		return this.value *this.multi;
	});

	return AttributeVo;
})()


/**
*位置bean
*/
//class enem.com.game.battle.common.bean.CBattleSeatBean
var CBattleSeatBean=(function(){
	function CBattleSeatBean(){
		this.row=0;
		this.pos=0;
		this.beans=[];
	}

	__class(CBattleSeatBean,'enem.com.game.battle.common.bean.CBattleSeatBean');
	var __proto=CBattleSeatBean.prototype;
	Laya.imps(__proto,{"engine.base.pool.spool.ISimplePool":true})
	__proto.clear=function(){
		this.row=this.pos=0;
		this.beans.forEach(function(bean){
			SimplePool.recover(bean);
		});
		this.beans.length=0;
	}

	return CBattleSeatBean;
})()


//class enem.com.game.FuLidaTing.Enum.Giftstation
var Giftstation=(function(){
	function Giftstation(){}
	__class(Giftstation,'enem.com.game.FuLidaTing.Enum.Giftstation');
	Giftstation.CAN=1;
	Giftstation.CANNT=-1;
	Giftstation.ALREADY_GOT=0;
	Giftstation.CAN_GET=1;
	Giftstation.CANNOT_GET=2;
	return Giftstation;
})()


/**玩家包vo**/
//class enem.com.game.common.bag.UseBagVo
var UseBagVo=(function(){
	function UseBagVo($type,$param){
		/**类型**/
		this._type=0;
		/**传参**/
		this._param=null;
		this._type=$type;
		this._param=$param;
	}

	__class(UseBagVo,'enem.com.game.common.bag.UseBagVo');
	var __proto=UseBagVo.prototype;
	__getset(0,__proto,'type',function(){
		return this._type;
	});

	__getset(0,__proto,'param',function(){
		return this._param;
	});

	return UseBagVo;
})()


//class enem.com.game.DungeonEvent.event.DungeonEvent
var DungeonEvent=(function(){
	function DungeonEvent(){}
	__class(DungeonEvent,'enem.com.game.DungeonEvent.event.DungeonEvent');
	DungeonEvent.UPDATE_TIMES="dungeon_update_times";
	DungeonEvent.UPDATE_CHALLENGED="dungeon_update_challenged";
	DungeonEvent.RES_GET_XXHJ_INFO="ResGetXXHJInfoMessage";
	DungeonEvent.RES_BUY_XXHJ_CHALLENGE_TIME="ResBuyXXHJChallengeTimeMessage";
	DungeonEvent.RES_TAKE_XXHJ_PRIZE="ResTakeXXHJPrizeMessage";
	DungeonEvent.RES_ONDAYEND="RES_ONDAYEND";
	DungeonEvent.UPDATE_MATERIAL_DUN_COMMEND="UPDATE_MATERIAL_DUN_COMMEND";
	return DungeonEvent;
})()


/**
*逻辑对象事件
*/
//class enem.com.game.battle.common.event.BattleDriverEvent
var BattleDriverEvent=(function(){
	function BattleDriverEvent(){}
	__class(BattleDriverEvent,'enem.com.game.battle.common.event.BattleDriverEvent');
	BattleDriverEvent.REC_CREATE_OBJECTS="logic_create_objects";
	BattleDriverEvent.REC_CREATE_ONE_OBJECT="logic_create_one_object";
	BattleDriverEvent.REC_GLOBAL_ACTION="rec_global_action";
	BattleDriverEvent.REC_SKILL_BB="rec_skill_bb";
	BattleDriverEvent.REC_SKILL_NAME="rec_skill_name";
	BattleDriverEvent.REC_SKILL_NAME2="rec_skill_name2";
	BattleDriverEvent.REC_USER="logic_rec_user";
	BattleDriverEvent.REC_HIT="logic_hit";
	BattleDriverEvent.REC_SHOW_DEAD_ACTION="REC_SHOW_DEAD_ACTION";
	BattleDriverEvent.REC_DEAD="logic_dead";
	BattleDriverEvent.REC_ROUND_CHANGE="logic_round_change";
	BattleDriverEvent.REC_ADD_BUFF="rec_add_buff";
	BattleDriverEvent.REC_DEL_BUFF="rec_del_buff";
	BattleDriverEvent.REC_TRIGER_BUFF="rec_trigger_buff";
	BattleDriverEvent.REC_HP_CHANGE="rec_hp_change";
	return BattleDriverEvent;
})()


//class enem.com.game.redpoint.EnumSubID
var EnumSubID=(function(){
	function EnumSubID(){}
	__class(EnumSubID,'enem.com.game.redpoint.EnumSubID');
	EnumSubID.GUILD_NORMAL_SKILL=0;
	EnumSubID.GUILD_HIGH_SKILL=1;
	return EnumSubID;
})()


/**平定安邦工具类**/
//class enem.com.game.daily.pacifypeace.PacifyPeaceUtil
var PacifyPeaceUtil=(function(){
	function PacifyPeaceUtil(){}
	__class(PacifyPeaceUtil,'enem.com.game.daily.pacifypeace.PacifyPeaceUtil');
	PacifyPeaceUtil.finishOneCost=function(index){
		if(PacifyPeaceUtil.finishCostArr==null)
			PacifyPeaceUtil.finishCostArr=JSONUtil.decode(GlobalData.GetString(134));
		var len=PacifyPeaceUtil.finishCostArr!=null?PacifyPeaceUtil.finishCostArr.length:0;
		return index>=0&&index<len?PacifyPeaceUtil.finishCostArr[index]:0;
	}

	PacifyPeaceUtil.listSort=function(voA,voB){
		if(voA.isGotReward==voB.isGotReward)
			return voA.id<voB.id?-1:(voA.id>voB.id?1:(voA.needCount<voB.needCount?-1:(voA.needCount>voB.needCount?1:0)));
		return voA.isGotReward?1:-1;
	}

	PacifyPeaceUtil.finishCostArr=null;
	return PacifyPeaceUtil;
})()


//class enem.com.game.duihuan.event.DuihuanEvent
var DuihuanEvent=(function(){
	function DuihuanEvent(){}
	__class(DuihuanEvent,'enem.com.game.duihuan.event.DuihuanEvent');
	DuihuanEvent.DUIHUAN="duihuan_back";
	return DuihuanEvent;
})()


/**
*聊天事件
*/
//class enem.com.game.chat.event.ChatEvent
var ChatEvent=(function(){
	function ChatEvent(){}
	__class(ChatEvent,'enem.com.game.chat.event.ChatEvent');
	ChatEvent.CHAT_MAINSIZE="chat_mainsize";
	ChatEvent.CHAT_CHANNELCHANGE="chat_channelchange";
	ChatEvent.CHAT_COOLDOWNCHANGE="chat_cooldownchange";
	ChatEvent.CHAT_ADDINFO="chat_addinfo";
	ChatEvent.CHAT_ADD_PRIVATE_PLAY="CHAT_ADD_PRIVATE_PLAY";
	ChatEvent.CHAT_REMOVE_PRIVATE_PLAY="CHAT_REMOVE_PRIVATE_PLAY";
	ChatEvent.CHAT_UPDATE_PRIVATE_STATE="CHAT_UPDATE_PRIVATE_STATE";
	ChatEvent.CHAT_ADD_PRIVATE_CHAT="CHAT_ADD_PRIVATE_CHAT";
	ChatEvent.CHAT_PLAYER_INFO="CHAT_PLAYER_INFO";
	ChatEvent.CHAT_UPDATE_PRIVATE_RED="CHAT_UPDATE_PRIVATE_RED";
	ChatEvent.CHAT_ON_OFF="CHAT_ON_OFF";
	ChatEvent.CHAT_INCD="CHAT_INCD";
	return ChatEvent;
})()


/**
*
*
*@author Administrator
*/
//class enem.com.game.util.FilterUtil
var FilterUtil=(function(){
	function FilterUtil(){}
	__class(FilterUtil,'enem.com.game.util.FilterUtil');
	FilterUtil.GetLightFilter=function(){
		if (FilterUtil._lightFilter==null){
			var matrix=[
			1.6,0,0,0,0,
			0,1.6,0,0,0,
			0,0,1.6,0,0,
			0,0,0,1,0];
			FilterUtil._lightFilter=new ColorFilter(matrix);
		}
		return FilterUtil._lightFilter;
	}

	FilterUtil.GetGrayFilter=function(){
		if (FilterUtil._grayFilter==null){
			var matrix=[
			0.3,0.59,0.11,0,0,
			0.3,0.59,0.11,0,0,
			0.3,0.59,0.11,0,0,
			0,0,0,1,0];
			FilterUtil._grayFilter=new ColorFilter(matrix);
		}
		return FilterUtil._grayFilter;
	}

	FilterUtil.getColorFilter=function(_color){
		var filter=new ColorFilter();
		filter.setColor(_color);
		return filter;
	}

	FilterUtil.GetBlueFilter=function(){
		if (FilterUtil._blueFilter==null){
			var matrix=[
			0.2,0,0,0,0,
			0,0.6,0,0,0,
			0,0,1.5,0,130,
			0,0,0,1,0];
			FilterUtil._blueFilter=new ColorFilter(matrix);
		}
		return FilterUtil._blueFilter;
	}

	FilterUtil.GetRedFilter=function(){
		if (FilterUtil._redFilter==null){
			var matrix=[
			1.5,0,0,0,120,
			0,0.4,0,0,0,
			0,0,0.3,0,0,
			0,0,0,1,0];
			FilterUtil._redFilter=new ColorFilter(matrix);
		}
		return FilterUtil._redFilter;
	}

	FilterUtil.GetBlackFilter=function(){
		if (FilterUtil._blackFilter==null){
			var matrix=[
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,1,0];
			FilterUtil._blackFilter=new ColorFilter(matrix);
		}
		return FilterUtil._blackFilter;
	}

	FilterUtil.GetHighLightFilter=function(){
		if (FilterUtil._highLightFilter==null){
			var matrix=[
			1.6,.6,0,0,-31.5,
			0.6,1.6,0,0,-31.5,
			0.1,0.2,1.6,0,-31.5,
			0,0,0,1,0];
			FilterUtil._highLightFilter=new ColorFilter(matrix);
		}
		return FilterUtil._highLightFilter;
	}

	FilterUtil.GetWeakLightFilter=function(){
		if (FilterUtil._weakLightFilter==null){
			var matrix=[
			1.3,.6,0,0,-31.5,
			0.6,1.3,0,0,-31.5,
			0.1,0.2,1.3,0,-31.5,
			0,0,0,1,0];
			FilterUtil._weakLightFilter=new ColorFilter(matrix);
		}
		return FilterUtil._weakLightFilter;
	}

	FilterUtil.GetYellowGlowFilter=function(){
		return FilterUtil.GetColorGlowFilter("#FFFF00");
	}

	FilterUtil.GetYellowGlowFilterBig=function(){
		return FilterUtil.GetColorGlowFilter("#FFFF00",8);
	}

	FilterUtil.GetBlueWriteGlowFilter=function(){
		return FilterUtil.GetColorGlowFilter("#BBFFFF",8);
	}

	FilterUtil.GetColorGlowFilter=function(color,blur){
		(blur===void 0)&& (blur=4);
		var key=color+"_"+blur;
		if (FilterUtil._colorMap[key]==null){
			var filter=new GlowFilter(color,blur,0,0);
			FilterUtil._colorMap[key]=filter;
			return filter;
		}
		else {
			return FilterUtil._colorMap[key];
		}
	}

	FilterUtil.GetBlurFilter=function(strength){
		if (FilterUtil._blurMap[strength]==null){
			var filter=new BlurFilter(strength);
			FilterUtil._blurMap[strength]=filter;
			return filter;
		}
		else {
			return FilterUtil._blurMap[strength];
		}
	}

	FilterUtil._lightFilter=null;
	FilterUtil._grayFilter=null;
	FilterUtil._blueFilter=null;
	FilterUtil._redFilter=null;
	FilterUtil._blackFilter=null;
	FilterUtil._highLightFilter=null;
	FilterUtil._weakLightFilter=null;
	__static(FilterUtil,
	['_colorMap',function(){return this._colorMap=new Object();},'_blurMap',function(){return this._blurMap=new Object();}
	]);
	return FilterUtil;
})()


//class enem.com.game.uishowlinemgr.ShowLineEvent
var ShowLineEvent=(function(){
	function ShowLineEvent(){}
	__class(ShowLineEvent,'enem.com.game.uishowlinemgr.ShowLineEvent');
	ShowLineEvent.SHOWLINE_CONTINUE="SHOWLINECONTINUE";
	return ShowLineEvent;
})()


//class enem.com.game.challenge.challengeboss.events.ChallengeBossEvent
var ChallengeBossEvent=(function(){
	function ChallengeBossEvent(){}
	__class(ChallengeBossEvent,'enem.com.game.challenge.challengeboss.events.ChallengeBossEvent');
	ChallengeBossEvent.UPDATE_BOSS_PANEL="UPDATE_BOSS_PANEL";
	ChallengeBossEvent.UPDATE_TIAO_ZHAN_COUNT="UPDATE_TIAO_ZHAN_COUNT";
	ChallengeBossEvent.UPDATE_TIAO_ZHAN_RANK="UPDATE_TIAO_ZHAN_RANK";
	return ChallengeBossEvent;
})()


//class enem.com.game.auction.AucEnum.AuctionTime
var AuctionTime=(function(){
	function AuctionTime(){}
	__class(AuctionTime,'enem.com.game.auction.AucEnum.AuctionTime');
	AuctionTime.ZHANSHI="展示阶段";
	AuctionTime.JINGPAI="竞拍阶段";
	AuctionTime.QIANGPAI="抢拍阶段";
	return AuctionTime;
})()


/**
*后端对象类型
*/
//class enem.com.game.battle.common.EnumServerType
var EnumServerType=(function(){
	function EnumServerType(){}
	__class(EnumServerType,'enem.com.game.battle.common.EnumServerType');
	EnumServerType.serverType2ObjType=function(serverType){
		switch (serverType){
			case 1:
			case 2:
			case 3:
			case 5:
				return 1;
			case 4:
				return 2;
			case 7:
				return 3;
			case 8:
				return 4;
			}
		return 0;
	}

	EnumServerType.PET=1;
	EnumServerType.JUNSHI=2;
	EnumServerType.MANJIANG=3;
	EnumServerType.JIGUAN=4;
	EnumServerType.HONGYAN=5;
	EnumServerType.MONSTER=6;
	EnumServerType.HERO=7;
	EnumServerType.TREASURE=8;
	return EnumServerType;
})()


//class enem.com.game.FuLidaTing.Enum.FuLiDaTingTypeEnum
var FuLiDaTingTypeEnum=(function(){
	function FuLiDaTingTypeEnum(){}
	__class(FuLiDaTingTypeEnum,'enem.com.game.FuLidaTing.Enum.FuLiDaTingTypeEnum');
	FuLiDaTingTypeEnum.MEIRIDENGLU=1;
	FuLiDaTingTypeEnum.FULIQIANDAO=2;
	FuLiDaTingTypeEnum.BAIWANYUANBAO=3;
	FuLiDaTingTypeEnum.DENGJILIBAO=4;
	FuLiDaTingTypeEnum.DENGLUSONG=5;
	FuLiDaTingTypeEnum.ADD_CHARGE=6;
	FuLiDaTingTypeEnum.ONLINE_GIFT=7;
	FuLiDaTingTypeEnum.YAOQIANSHU=11;
	FuLiDaTingTypeEnum.ONETOUZHI=12;
	FuLiDaTingTypeEnum.ZHONGSHENKA=122;
	FuLiDaTingTypeEnum.XIYOUFULI=14;
	FuLiDaTingTypeEnum.JIHUOMA=15;
	FuLiDaTingTypeEnum.YOUXIGONGGAO=16;
	FuLiDaTingTypeEnum.WEEKENDPRAY=17;
	FuLiDaTingTypeEnum.DOUBLEACTIVE=18;
	FuLiDaTingTypeEnum.VIPCONDITION=2;
	__static(FuLiDaTingTypeEnum,
	['YUEKA',function(){return this.YUEKA=EnumFuncID.YUEKA;}
	]);
	return FuLiDaTingTypeEnum;
})()


/**
*
*@author Administrator
*
*/
//class enem.com.game.util.ClassToolExt
var ClassToolExt=(function(){
	function ClassToolExt(){}
	__class(ClassToolExt,'enem.com.game.util.ClassToolExt');
	ClassToolExt.getClassName=function(tar){
		if ((typeof tar=='function'))return tar.name;
		return tar.constructor.__className;
	}

	ClassToolExt.getClassNameByClz=function(clz){
		return clz==null ? null :clz.__className;
	}

	ClassToolExt.getClassByName=function(className){
		return ClassUtils.getClass(className);
	}

	ClassToolExt.getClassByObject=function(tar){
		return ClassToolExt.getClassByName(ClassToolExt.getClassName(tar));
	}

	return ClassToolExt;
})()


/**平定安邦任务vo**/
//class enem.com.game.daily.pacifypeace.data.PacifyPeaceTaskVo
var PacifyPeaceTaskVo=(function(){
	function PacifyPeaceTaskVo($id,$curCount,$isGotReward,need){
		/**任务ID**/
		this._id=0;
		/**需要完成次数**/
		this._needCount=0;
		/**当前已完成次数**/
		this._curCount=0;
		/**是否奖励已领取**/
		this._isGotReward=false;
		this._id=$id;
		this._curCount=$curCount;
		this._needCount=need;
		this._isGotReward=$isGotReward;
	}

	__class(PacifyPeaceTaskVo,'enem.com.game.daily.pacifypeace.data.PacifyPeaceTaskVo');
	var __proto=PacifyPeaceTaskVo.prototype;
	/**是否条件已满足**/
	__getset(0,__proto,'isCondOk',function(){
		return this._curCount>=this._needCount;
	});

	/**获得立即完成花费**/
	__getset(0,__proto,'finishImmPay',function(){
		var cfg=Q_mission_baseContainer.GetValue(this._id);
		return cfg !=null ? parseInt(cfg.q_param):0;
	});

	__getset(0,__proto,'id',function(){
		return this._id;
		},function(value){
		this._id=value;
	});

	__getset(0,__proto,'curCount',function(){
		return this._curCount;
		},function(value){
		this._curCount=value;
	});

	__getset(0,__proto,'needCount',function(){
		return this._needCount;
		},function(value){
		this._needCount=value;
	});

	__getset(0,__proto,'isGotReward',function(){
		return this._isGotReward;
		},function(value){
		this._isGotReward=value;
	});

	__getset(0,__proto,'type',function(){
		var cfg=Q_mission_baseContainer.GetValue(this._id);
		return cfg !=null ? cfg.q_openfunc :0;
	});

	return PacifyPeaceTaskVo;
})()


//class enem.com.game.common.EnumComm
var EnumComm=(function(){
	function EnumComm(){}
	__class(EnumComm,'enem.com.game.common.EnumComm');
	EnumComm.getDelaySort=function(type){
		switch (type){
			case 1:
				return 0;
			case 2:
				return 100;
			case 3:
				return 100;
			case 4:
				return 1;
			case 5:
				return 0;
			case 9:
				return 0;
			case 6:
				return 0;
			case 7:
				return 2;
			case 8:
				return-1;
			case 10:
				return 3;
				break ;
			}
		return 100;
	}

	EnumComm.getDungeonID=function(type){
		switch (type){
			case 1:
				return parseInt(Q_guildwar_paramContainer.GetValue(3).q_value);
			case 2:
				return parseInt(Q_guildwar_paramContainer.GetValue(2).q_value);
			case 3:
				return parseInt(Q_guildwar_paramContainer.GetValue(21).q_value);
			}
		return 0;
	}

	EnumComm.USE_BAG_TYPE_BEAUTY=1;
	EnumComm.USE_BAG_TYPE_YUHUN=2;
	EnumComm.USE_BAG_TYPE_MINGGE=3;
	EnumComm.USE_BAG_TYPE_MINGGE_MAP=4;
	EnumComm.USE_BAG_TYPE_YUHUN_DECOMPOSE=5;
	EnumComm.USE_BAG_TYPE_FIT_GEM=6;
	EnumComm.USE_BAG_TYPE_BINGFA=7;
	EnumComm.DECOMPOSE_TYPE_YUHUN=1;
	EnumComm.DECOMPOSE_TYPE_MINGGE=2;
	EnumComm.TREASURE_TYPE_ZHULU=1;
	EnumComm.COLLECT_TYPE_GUILD_BOSS_BOX=1;
	EnumComm.COLLECT_TYPE_GUILD_TERRITORY_COLLECT=2;
	EnumComm.DELAY_SHOW_NEW_FUNC=1;
	EnumComm.DELAY_SHOW_TASK_TALK=2;
	EnumComm.DELAY_SHOW_GUIDE=3;
	EnumComm.DELAY_SHOW_CARD=4;
	EnumComm.DELAY_SHOW_REWARD=5;
	EnumComm.DELAY_SHOW_UPGRADE=6;
	EnumComm.DELAY_SHOW_GODEQUIP=7;
	EnumComm.DELAY_SHOW_BUSINESS_PROMPT=8;
	EnumComm.DELAY_SHOW_JIang=9;
	EnumComm.DELAY_SHOW_LuckJIang=10;
	EnumComm.DELAY_SHOW_TREASURECARD=11;
	EnumComm.REVIVE_GUILD_BOSS=1;
	EnumComm.REVIVE_GUILD_BATTLE=2;
	EnumComm.REVIVE_NINE_HEAVY=3;
	EnumComm.REVIVE_QUAN_MING=4;
	EnumComm.FATE_TYPE_WJ=1;
	EnumComm.FATE_TYPE_HY=2;
	EnumComm.FATE_TYPE_JS=3;
	EnumComm.FATE_TYPE_MJ=4;
	EnumComm.Q_WHITE=0;
	EnumComm.Q_GREEN=1;
	EnumComm.Q_BLUE=2;
	EnumComm.Q_PURPLE=3;
	EnumComm.Q_ORANGE=4;
	EnumComm.Q_RED=5;
	EnumComm.Q_GOLD=6;
	EnumComm.REVIEW_ARENA=1;
	EnumComm.REVIEW_KINGWAR=2;
	EnumComm.RESULT_SUCCESS=1;
	EnumComm.RESULT_SUCCESS_NOREWARD=2;
	EnumComm.RESULT_FAILURE=3;
	EnumComm.ERROR_PARAM_1=1;
	EnumComm.ERROR_PARAM_2=2;
	EnumComm.ERROR_PARAM_3=3;
	EnumComm.ERROR_PARAM_4=4;
	EnumComm.ERROR_PARAM_5=5;
	EnumComm.ERROR_PARAM_6=6;
	EnumComm.ERROR_PARAM_7=7;
	EnumComm.ERROR_PARAM_8=8;
	EnumComm.ERROR_PARAM_9=9;
	EnumComm.ERROR_PARAM_10=10;
	EnumComm.ERROR_PARAM_11=11;
	EnumComm.ERROR_PARAM_12=12;
	EnumComm.ERROR_PARAM_13=13;
	EnumComm.ERROR_PARAM_14=14;
	EnumComm.ERROR_PARAM_15=15;
	EnumComm.ERROR_PARAM_16=16;
	EnumComm.ERROR_PARAM_17=17;
	EnumComm.ERROR_PARAM_18=18;
	EnumComm.ERROR_PARAM_19=19;
	EnumComm.ERROR_PARAM_20=20;
	EnumComm.ERROR_PARAM_21=21;
	EnumComm.SCENE_GB_MONSTER=1;
	EnumComm.SCENE_GB_BOSS=2;
	EnumComm.SCENE_GB_YUXI=3;
	return EnumComm;
})()


/**
*道具变化原因
*/
//class enem.com.game.auction.backpack.enum.ReasonType
var ReasonType=(function(){
	function ReasonType(){}
	__class(ReasonType,'enem.com.game.auction.backpack.enum.ReasonType');
	ReasonType.GM=1;
	ReasonType.USE_GOODS=5;
	ReasonType.PUT_ON_EQUIP=9;
	ReasonType.HU_LAO_GUAN=172;
	ReasonType.LEVEL_TICK=17;
	ReasonType.REPLACE_ZHANWEN=35;
	ReasonType.REPLACE_BINGFA=40;
	ReasonType.GET_DUNGEON_PRIZE=68;
	ReasonType.TICK=74;
	ReasonType.XunBaoLuck=74;
	ReasonType.CHALLENGE_GUANQIA_BOSS=140;
	ReasonType.CHALLENGE_GUANQIA=141;
	ReasonType.QUANMINBOSS=166;
	ReasonType.FIELDBOSS=167;
	ReasonType.CHANG_BAN_PO=175;
	ReasonType.JJC=182;
	ReasonType.YUANZHENG=189;
	ReasonType.UPGRADE=131;
	ReasonType.WILD_CAPTURE=157;
	ReasonType.LEGION=206;
	ReasonType.XUNBAO=208;
	ReasonType.OPERATE_TASK=209;
	ReasonType.KINGWARREWARD=201;
	ReasonType.JUNSHI_PATROL=236;
	ReasonType.QUANFU_BOSS=239;
	ReasonType.CREATGUILD=245;
	ReasonType.GEREN_BOSS=254;
	ReasonType.ZIZUN_BOSS=246;
	ReasonType.DAOBIFANBEI=283;
	ReasonType.DAOBIMANPEN=284;
	ReasonType.XunBaoJiang=289;
	ReasonType.XunBaoJiang2=290;
	ReasonType.Zhaoxianling=299;
	ReasonType.XunBaoLuck2=101;
	ReasonType.USE_HERO_BOX=300;
	ReasonType.XIANGRUI=302;
	ReasonType.COMPOSE=278;
	ReasonType.ACT_DA_BIAO=304;
	ReasonType.ACT_DA_BIAO2=305;
	ReasonType.TEN_GIFT=312;
	ReasonType.CHONGZHIFANLITRUN=322;
	ReasonType.YunBaoGuan=309;
	__static(ReasonType,
	['NoNoticeReason',function(){return this.NoNoticeReason=[74,141,9,35,40,140,182,189,175,68,245];},'DelayReason',function(){return this.DelayReason=[172,166,167,68,254,206,246,140,239,201,236];},'AUCTIONS',function(){return this.AUCTIONS=[166,167,254,246,1];},'DIS_ShowIds',function(){return this.DIS_ShowIds=[278,101,299,289,290,300,74,309];}
	]);
	return ReasonType;
})()


//class enem.com.game.yunying.YunYingEvent
var YunYingEvent=(function(){
	function YunYingEvent(){}
	__class(YunYingEvent,'enem.com.game.yunying.YunYingEvent');
	YunYingEvent.YYUPDATE="YYUPDATE";
	YunYingEvent.SELTAG="SELTAG";
	YunYingEvent.YYSHOP="YYSHOP";
	YunYingEvent.YYSHOPTAKE="YYSHOPTAKE";
	YunYingEvent.CLOSETIPS="CLOSETIPS";
	YunYingEvent.YYUPDATEALL="YYUPDATEALL";
	YunYingEvent.YYTASKERR="YYTASKERR";
	YunYingEvent.UPDATE_CRIT_DAY="UPDATE_CRIT_DAY";
	YunYingEvent.TASKFORTEST="TASKFORTEST";
	YunYingEvent.PATACLICK="PATACLICK";
	YunYingEvent.YYUPDATE_TASK_SUCESS="YYUPDATE_TASK_SUCESS";
	YunYingEvent.YYUPDATE_TOP_RED="YYUPDATE_TOP_RED";
	YunYingEvent.YYUPDATE_ONEGIFT="YYUPDATE_ONEGIFT";
	YunYingEvent.YYUPDATE_SELFCHIOCE="YYUPDATE_EELFCHIOCE";
	YunYingEvent.SDK_CONCERN="SDK_CONCERN";
	YunYingEvent.SDK_CONCERNAWARD="SDK_CONCERNAWARD";
	YunYingEvent.SDK_SHARE="SDK_SHARE";
	YunYingEvent.SDK_SHAREAWARD="SDK_SHAREAWARD";
	return YunYingEvent;
})()


//class enem.com.game.newfunction.ModeVo
var ModeVo=(function(){
	function ModeVo(info){
		this.Res=null;
		this.Fix=null;
		if (!info)return;
		this.Res=JSONUtil.decode(info).res ? JSONUtil.decode(info).res :null;
		this.Fix=JSONUtil.decode(info).fix ? JSONUtil.decode(info).fix :null;
	}

	__class(ModeVo,'enem.com.game.newfunction.ModeVo');
	return ModeVo;
})()


//class enem.com.game.auction.AuctionUtil
var AuctionUtil$1=(function(){
	function AuctionUtil(){}
	__class(AuctionUtil,'enem.com.game.auction.AuctionUtil',null,'AuctionUtil$1');
	__getset(1,AuctionUtil,'TexF',function(){
		var mode=Q_auction_paramContainer.GetValue(16);
		if (mode && mode.q_value){
			return JSONUtil.decode(mode.q_value)[1];
		}
		return 0;
	});

	__getset(1,AuctionUtil,'NoticList',function(){
		var mode=Q_auction_paramContainer.GetValue(11);
		if (mode){
			var value=mode.q_value;
			if (value){
				return JSONUtil.decode(value);
			}
		}
		return null;
	});

	AuctionUtil.Price=function(Type){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (Type==_list[i].q_id){
				return TextUtil.FormatNum(_list[i].q_price);
			}
		}
	}

	AuctionUtil.ID_MarkUp=function(uid){
		return Q_auctionContainer.GetValue(uid).q_markup_num;
	}

	AuctionUtil.ID_TYPE=function(uid){
		return Q_auctionContainer.GetValue(uid).q_shop_type;
	}

	AuctionUtil.Bidding=function(Type){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (Type==_list[i].q_id){
				return TextUtil.FormatNum(_list[i].q_cost_num);
			}
		}
	}

	AuctionUtil.ShotTime=function(Type){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (Type==_list[i].q_id){
				return _list[i].q_show_time;
			}
		}
	}

	AuctionUtil.jinapaiTime=function(Type){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (Type==_list[i].q_id){
				return _list[i].q_bid_time;
			}
		}
	}

	AuctionUtil.qiangpaiTime=function(Type){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (Type==_list[i].q_id){
				return _list[i].q_take_time;
			}
		}
	}

	AuctionUtil.itemidtocosttype=function(id){
		var _list=Q_auctionContainer.list;
		for (var i=0;i < _list.length;++i){
			if (_list[i].q_goods==id){
				return _list[i].q_cost_type;
			}
		}
		return-1;
	}

	AuctionUtil.ID_TIME=function(uid){
		var times=[];
		var _time1=Q_auctionContainer.GetValue(uid).q_show_time *1000;
		times.push(_time1);
		var _time2=Q_auctionContainer.GetValue(uid).q_bid_time *1000;
		times.push(_time2);
		var _time3=Q_auctionContainer.GetValue(uid).q_take_time *1000;
		times.push(_time3);
		return times;
	}

	AuctionUtil.getPersonalMod=function(itemid){
		if (!AuctionUtil.perDic){
			AuctionUtil.perDic=new Dictionary();
			var list=Q_auctionContainer.list;
			var len=list ? list.length :0;
			for (var i=0;i < len;++i){
				if (list[i].q_shop_type==AucShopEnum.PERSON){
					var key=list[i].q_goods;
					if (!AuctionUtil.perDic.get(key)){
						AuctionUtil.perDic.set(key,list[i]);
					}
				}
			}
		}
		return AuctionUtil.perDic.get(itemid);
	}

	AuctionUtil.outTEX=function(cur){
		return Math.floor(cur *(10000-enem.com.game.auction.AuctionUtil.TexF)/ 10000);
	}

	AuctionUtil.perDic=null;
	return AuctionUtil;
})()


//class enem.com.game.challenge.emptycity.EmptyCityData
var EmptyCityData=(function(){
	function EmptyCityData($cfg){
		this._cfg=null;
		/**占领计时收益**/
		this._profitRewards=null;
		/**占领结算奖励**/
		this._holdRewards=null;
		this._cfg=$cfg;
	}

	__class(EmptyCityData,'enem.com.game.challenge.emptycity.EmptyCityData');
	var __proto=EmptyCityData.prototype;
	__getset(0,__proto,'profitRewards',function(){
		if(this._profitRewards==null)
			this._profitRewards=ItemUtil.JsonStringToItemList(this._cfg.q_reward_time);
		return this._profitRewards;
	});

	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__getset(0,__proto,'firstReward',function(){
		var list=this.profitRewards;
		return list!=null && list.length>0?list[0]:null;
	});

	__getset(0,__proto,'holdRewards',function(){
		if(this._holdRewards==null)
			this._holdRewards=ItemUtil.JsonStringToItemList(this._cfg.q_reward);
		return this._holdRewards;
	});

	return EmptyCityData;
})()


//class enem.com.base.effect.configs.enum.EnumEffectLayer
var EnumEffectLayer=(function(){
	function EnumEffectLayer(){}
	__class(EnumEffectLayer,'enem.com.base.effect.configs.enum.EnumEffectLayer');
	EnumEffectLayer.L_TOP=1;
	EnumEffectLayer.L_CENTER=0;
	EnumEffectLayer.L_BOTTOM=-1;
	return EnumEffectLayer;
})()


/**
*进阶系统类型
*/
//class enem.com.game.upgrade.enums.EnumUpgradeType
var EnumUpgradeType=(function(){
	function EnumUpgradeType(){}
	__class(EnumUpgradeType,'enem.com.game.upgrade.enums.EnumUpgradeType');
	EnumUpgradeType.TONGLING=1;
	EnumUpgradeType.SHOUHUN=2;
	EnumUpgradeType.HORSE=3;
	EnumUpgradeType.WING=4;
	EnumUpgradeType.SHENBIN=5;
	EnumUpgradeType.JINGLING=6;
	EnumUpgradeType.XUANNV=7;
	EnumUpgradeType.HUANIAN=8;
	EnumUpgradeType.LINGQI=9;
	EnumUpgradeType.FEISHENG=10;
	EnumUpgradeType.JUNSHI_BINGFU=11;
	EnumUpgradeType.JUNSHI_JUNLING=12;
	EnumUpgradeType.JUNSHI_JUNQI=13;
	EnumUpgradeType.JUNSHI_JUNYIN=14;
	EnumUpgradeType.HONGYAN_FAZHEN=15;
	EnumUpgradeType.HONGYAN_LINGQI=16;
	EnumUpgradeType.TOTEM=17;
	EnumUpgradeType.BEAUTY=18;
	__static(EnumUpgradeType,
	['MULTI_UPGRADES',function(){return this.MULTI_UPGRADES=[4,5];},'NEED_REAL_ILLUSION',function(){return this.NEED_REAL_ILLUSION=[3,4,5,6];},'NEED_SHOW_UPGRADE',function(){return this.NEED_SHOW_UPGRADE=[3,4,5,1,2,7,8,9,6,15,16];}
	]);
	return EnumUpgradeType;
})()


//class enem.com.game.crossserver.zhuluzhongyuan.EnumZhuLu
var EnumZhuLu=(function(){
	function EnumZhuLu(){}
	__class(EnumZhuLu,'enem.com.game.crossserver.zhuluzhongyuan.EnumZhuLu');
	EnumZhuLu.UI_TYPE_RECORD=0;
	EnumZhuLu.UI_TYPE_CHALLENGE=1;
	return EnumZhuLu;
})()


/**押镖（草船借箭）工具类**/
//class enem.com.game.activity.escort.EscortUtil
var EscortUtil=(function(){
	function EscortUtil(){}
	__class(EscortUtil,'enem.com.game.activity.escort.EscortUtil');
	/**快速完成花费元宝**/
	__getset(1,EscortUtil,'immefinishCostYB',function(){
		var cfg=Q_payload_paramContainer.GetValue(1);
		return cfg!=null?ItemUtil.JsonStringToItemList(cfg.q_value)[0]:null;
	});

	/**每天最大押镖次数**/
	__getset(1,EscortUtil,'maxEscortCount',function(){
		var cfg=Q_payload_paramContainer.GetValue(2);
		return cfg!=null?parseInt(cfg.q_value):0;
	});

	/**每天最大掠夺次数**/
	__getset(1,EscortUtil,'maxRobberyCount',function(){
		var cfg=Q_payload_paramContainer.GetValue(3);
		return cfg!=null?parseInt(cfg.q_value):0;
	});

	/**每日双倍时间段数组[[开始时,结束时],[开始时,结束时],...]**/
	__getset(1,EscortUtil,'doubleTimes',function(){
		var cfg=Q_payload_paramContainer.GetValue(7);
		var str=cfg!=null?cfg.q_value:"";
		var arr=str.split(";");
		var len=arr.length;
		var ret=[];
		for(var i=0;i < len;i++){
			ret.push(arr[i].split(","));
		}
		return ret;
	});

	/**最大每次押镖被掠夺次数**/
	__getset(1,EscortUtil,'maxRobbedCount',function(){
		var cfg=Q_payload_paramContainer.GetValue(6);
		return cfg!=null?parseInt(cfg.q_value):0;
	});

	/**刷新花费**/
	__getset(1,EscortUtil,'refreshCostYB',function(){
		var cfg=Q_payload_paramContainer.GetValue(4);
		return cfg!=null?ItemUtil.JsonStringToItemList(cfg.q_value)[0]:null;
	});

	/**被劫镖不会丢失的镖车等级**/
	__getset(1,EscortUtil,'noLoseLevel',function(){
		var cfg=Q_payload_paramContainer.GetValue(8);
		return cfg!=null?parseInt(cfg.q_value):0;
	});

	/**一键刷新花费**/
	__getset(1,EscortUtil,'oneKeyRefreshCostYB',function(){
		var cfg=Q_payload_paramContainer.GetValue(5);
		return cfg!=null?ItemUtil.JsonStringToItemList(cfg.q_value)[0]:null;
	});

	/**镖车最大等级**/
	__getset(1,EscortUtil,'maxLevel',function(){
		return Q_payloadContainer.list.length;
	});

	__getset(1,EscortUtil,'oneKeyNeedVip',function(){
		if(EscortUtil._oneKeyNeedVip==-1){
			var cfg=Q_payload_paramContainer.GetValue(11);
			EscortUtil._oneKeyNeedVip=cfg!=null?parseInt(cfg.q_value):0;
		}
		return EscortUtil._oneKeyNeedVip;
	});

	EscortUtil.isInHourRange=function(fromHour,toHour,curHour){
		if(toHour < fromHour)
			toHour+=24;
		return curHour>=fromHour && curHour<toHour;
	}

	EscortUtil.getEscortImgName=function(quality){
		switch (quality){
			case 1:
				return "chuan";
			case 2:
				return "chuan";
			case 3:
				return "chuan";
			case 4:
				return "chuan";
			case 5:
				return "chuan";
			}
		return "";
	}

	EscortUtil.getEscortName=function(level){
		var cfg=Q_payloadContainer.GetValue(level);
		return cfg!=null?cfg.q_name:"";
	}

	EscortUtil._oneKeyNeedVip=-1;
	return EscortUtil;
})()


//class enem.com.game.summon.enumsum.EnumSum
var EnumSum=(function(){
	function EnumSum(){}
	__class(EnumSum,'enem.com.game.summon.enumsum.EnumSum');
	EnumSum.GiftL=0;
	EnumSum.GiftH=1;
	EnumSum.Nor_Cost=0;
	EnumSum.Low_Cost=1;
	EnumSum.Hig_Cost=2;
	return EnumSum;
})()


/**
*升阶系统装备位置
*/
//class enem.com.game.items.enum.EnumUpgradeEquipPos
var EnumUpgradeEquipPos=(function(){
	function EnumUpgradeEquipPos(){}
	__class(EnumUpgradeEquipPos,'enem.com.game.items.enum.EnumUpgradeEquipPos');
	EnumUpgradeEquipPos.GRID1=1;
	EnumUpgradeEquipPos.GRID2=2;
	EnumUpgradeEquipPos.GRID3=3;
	EnumUpgradeEquipPos.GRID4=4;
	EnumUpgradeEquipPos.GRID5=5;
	EnumUpgradeEquipPos.GRID6=6;
	return EnumUpgradeEquipPos;
})()


/**
*格子类型枚举
*@author
*/
//class enem.com.game.player.enum.EnumGridType
var EnumGridType=(function(){
	function EnumGridType(){}
	__class(EnumGridType,'enem.com.game.player.enum.EnumGridType');
	EnumGridType.BACKPACK=0;
	EnumGridType.STORE=1;
	EnumGridType.SHOP=2;
	EnumGridType.EQUIP=3;
	EnumGridType.EQUIP_OTHER=4;
	EnumGridType.SHOWITEM=5;
	EnumGridType.INSCRIPT=6;
	EnumGridType.SKILL_KEY_SET=7;
	EnumGridType.INSCRIPTION_SET=8;
	EnumGridType.FIT_EQUIP=9;
	EnumGridType.SHENG_EQUIP=10;
	return EnumGridType;
})()


/**
*对应服务器端发过来的消息
*Attributes
*@author Administrator
*/
//class enem.com.game.attribute.data.AttributeData
var AttributeData=(function(){
	function AttributeData(){
		this._attrHash=new Dictionary();
	}

	__class(AttributeData,'enem.com.game.attribute.data.AttributeData');
	var __proto=AttributeData.prototype;
	__proto.GetValue=function(type){
		if (this._attrHash.get(type)==null)
			return 0;
		return this._attrHash.get(type);
	}

	/**
	*从属性数据拷贝
	*/
	__proto.UpdateFromAttrData=function(data){
		var hash=data._attrHash;
		var arr=hash.keys;
		for (var i=0;i < arr.length;++i){
			this.UpdateAttribute(arr[i],hash.get(arr[i]));
		}
	}

	/**
	*从json数据列表
	*/
	__proto.UpdateFromJsonObj=function(json){
		for (var i=0;i < json.length;++i){
			this.UpdateAttribute(json[i][0],json[i][1]);
		}
	}

	/**
	*使用服务器的属性列表来更新
	*返回改变了数据的属性列表
	*/
	__proto.UpdateFromServerList=function(list,needDiff){
		(needDiff===void 0)&& (needDiff=false);
		var ret;
		if (needDiff)
			ret=[];
		for (var i=0;i < list.length;++i){
			var diff=this.UpdateAttribute(i+1,list[i].fValue);
			if (needDiff && diff !=0){
				var vo=new AttributeVo();
				vo.type=i+1;
				vo.value=diff;
				ret.push(vo);
			}
		}
		return ret;
	}

	__proto.UpdateFromVos=function(vos){
		for (var i=0;i < vos.length;++i){
			this.UpdateAttribute(vos[i].type,vos[i].value);
		}
	}

	/**
	*更新属性
	*@param type 类型参见 EnumAttribute
	*@param value
	*@return 返回新数据和老数据的差值
	*/
	__proto.UpdateAttribute=function(type,value){
		var old=0;
		if (this._attrHash.get(type)!=null)
			old=this._attrHash.get(type);
		this._attrHash.set(type,value);
		return value-old;
	}

	/**
	*输出所有属性
	*/
	__proto.TraceAllAttr=function(){
		var ret="";
		var arr=this._attrHash.keys;
		for (var i=0;i < arr.length;++i){
			var v=this._attrHash.get(arr[i]);
			ret+="[t:"+arr[i]+" v:"+arr[i]+"]";
		}
		ToolBase.Log(ret);
	}

	/**
	*转到属性vo列表
	*@return
	*/
	__proto.ToAttriVoList=function(){
		var ret=[];
		var arr=this._attrHash.keys;
		for (var i=0;i < arr.length;++i){
			var v=this._attrHash.get(arr[i]);
			var vo=new AttributeVo();
			vo.type=arr[i];
			vo.value=v;
			ret.push(vo);
		}
		return ret;
	}

	__proto.ToIntList=function(){
		var ret=[];
		for (var i=0;i < 34;++i){
			if (this._attrHash.get(i+1)!=null)
				ret.push(long.create(this._attrHash.get(i+1)));
			else
			ret.push(long.create(0));
		}
		return ret;
	}

	/**属性列表**/
	__getset(0,__proto,'attrHash',function(){
		return this._attrHash;
	});

	return AttributeData;
})()


//class enem.com.game.godequip.EnumGodEquip
var EnumGodEquip=(function(){
	function EnumGodEquip(){}
	__class(EnumGodEquip,'enem.com.game.godequip.EnumGodEquip');
	EnumGodEquip.TAB_GODEQ=0;
	EnumGodEquip.TAB_REFINE=1;
	EnumGodEquip.TAB_LING=2;
	EnumGodEquip.TAB_SOUL=3;
	EnumGodEquip.TAB_SUIT=4;
	EnumGodEquip.TAB_SHENZHU=5;
	EnumGodEquip.OP_TYPE_JUEXING=1;
	EnumGodEquip.OP_TYPE_CUILIAN=2;
	EnumGodEquip.OP_TYPE_ZHULING=3;
	EnumGodEquip.OP_TYPE_BINGHUN=4;
	EnumGodEquip.OP_TYPE_SHENGJIE=5;
	EnumGodEquip.OP_TYPE_SHENZHU=6;
	EnumGodEquip.OP_TYPE_SHENZHULOCK=7;
	return EnumGodEquip;
})()


//class enem.com.game.totem.EnumTotem
var EnumTotem=(function(){
	function EnumTotem(){}
	__class(EnumTotem,'enem.com.game.totem.EnumTotem');
	EnumTotem.TOTEM_UPGRADE=0;
	EnumTotem.TOTEM_ZHENLING=1;
	EnumTotem.ZHENLING=2;
	EnumTotem.ZHENQI=3;
	return EnumTotem;
})()


//class enem.com.game.chat.enum.EnumChat
var EnumChat=(function(){
	function EnumChat(){}
	__class(EnumChat,'enem.com.game.chat.enum.EnumChat');
	EnumChat.CHAT_TYPE_NORMAL=0;
	EnumChat.CHAT_TYPE_CENTER=1;
	EnumChat.CHAT_TYPE_PAO_MA_DENG=2;
	EnumChat.CHAT_TYPE_ONE_BUTTON=3;
	EnumChat.CHAT_TYPE_TWO_BUTTON=4;
	EnumChat.CHAT_TYPE_SYSTEM=5;
	EnumChat.CHAT_TYPE_ACTIVITY_NOTICE=6;
	EnumChat.CHAT_TYPE_GUILD_NOTICE=7;
	EnumChat.CHANNEL_ALL=0;
	EnumChat.CHANNEL_SYSTEM=1;
	EnumChat.CHANNEL_WORLD=2;
	EnumChat.CHANNEL_GUILD=3;
	EnumChat.CHANNEL_PRIVATE=4;
	EnumChat.CHANNEL_MAX=5;
	EnumChat.SHOW_TYPE_WUJIANG=0;
	EnumChat.SHOW_TYPE_BEAUTY=1;
	EnumChat.SHOW_TYPE_EQUIP=2;
	EnumChat.SHOW_TYPE_JUNSHI=3;
	EnumChat.SHOW_TYPE_MANJIANG=4;
	EnumChat.NINE_HEAVY_SUCCESS=206;
	EnumChat.NINE_HEAVY_FAILURE=207;
	EnumChat.CHAT_SHOW=20;
	EnumChat.GuanQiaHelp=111;
	EnumChat.GuanQiaHelpGOOD=113;
	EnumChat.ESCORT_START=154;
	EnumChat.SHOW_TYPE_STAR=5;
	EnumChat.ESCORT_REVENGE=155;
	EnumChat.GANG_BOSS_FLUSH=163;
	EnumChat.GANG_BOSS_BORKEN=164;
	EnumChat.GANG_BOSS_DEAD=165;
	EnumChat.GUILD_BATTLE_RECRUIT=173;
	EnumChat.TEAM_DUPLICATE_CREATE=180;
	EnumChat.LIE_MING_GET=240;
	EnumChat.GANG_CREATE=293;
	EnumChat.GANG_HIRE=294;
	EnumChat.GUILD_TEAM_CREATE=306;
	EnumChat.GUILD_JOIN=310;
	EnumChat.MARRIAGE=344;
	EnumChat.FIRST_RECHARGE=370;
	EnumChat.FIRST_RECHARGE_EX=3701;
	EnumChat.MONTH_CARD=371;
	EnumChat.ALL_LIFE_CARD=372;
	EnumChat.XUNBAO=373;
	EnumChat.DROP_DOWN_ITEM=374;
	EnumChat.MULTI_RECHARGE=375;
	EnumChat.ACTIVE_VIP1=376;
	EnumChat.ACTIVE_VIP2_1=3761;
	EnumChat.ACTIVE_VIP6=377;
	EnumChat.ACTIVE_VIP12_1=3771;
	EnumChat.ACTIVE_VIP7=378;
	EnumChat.ACTIVE_VIP13_1=3781;
	EnumChat.ACTIVE_VIP8=379;
	EnumChat.ACTIVE_VIP14_1=3791;
	EnumChat.ACTIVE_VIP9=380;
	EnumChat.ACTIVE_VIP15_1=3801;
	EnumChat.ACTIVE_VIP10=381;
	EnumChat.ACTIVE_VIP16_1=3811;
	EnumChat.ACTIVE_VIP11=382;
	EnumChat.ACTIVE_VIP17_1=3821;
	EnumChat.ACTIVE_VIP12=383;
	EnumChat.ACTIVE_VIP18_1=3831;
	EnumChat.ACTIVE_VIP2=384;
	EnumChat.ACTIVE_VIP4_1=3841;
	EnumChat.ACTIVE_VIP3=385;
	EnumChat.ACTIVE_VIP5_1=3851;
	EnumChat.ACTIVE_VIP4=386;
	EnumChat.ACTIVE_VIP6_1=3861;
	EnumChat.ACTIVE_VIP5=387;
	EnumChat.ACTIVE_VIP8_1=3871;
	EnumChat.ACTIVE_VIP19=388;
	EnumChat.ACTIVE_VIP19_1=3881;
	EnumChat.ACTIVE_VIP20=389;
	EnumChat.ACTIVE_VIP20_1=3891;
	EnumChat.XUNBAO_JUNSHI=428;
	EnumChat.XUNBAO_HONYAN=429;
	EnumChat.XUNBAO_MANJIANG=430;
	EnumChat.XUNBAO_ZHOUSHU=431;
	EnumChat.SLIDING_BLOCKS=432;
	EnumChat.MANZUJINDI=451;
	EnumChat.EMPTY_CITY_OPEN=452;
	EnumChat.EMPTY_CITY_HOLD=453;
	EnumChat.XIANSHITIAOZHAN=454;
	EnumChat.WUHUHUNT=455;
	EnumChat.FIRST_RECHARGE_2=456;
	EnumChat.FIRST_RECHARGE_2_1=4561;
	EnumChat.FIRST_RECHARGE_3=457;
	EnumChat.FIRST_RECHARGE_3_1=4571;
	EnumChat.GIFTTUISONG1=486;
	EnumChat.GIFTTUISONG2=4861;
	EnumChat.BUY_CHARGE1=491;
	EnumChat.BUY_CHARGE2=4911;
	EnumChat.ONE_GIFT1=492;
	EnumChat.ONE_GIFT2=4921;
	EnumChat.ONE_GIFT_1=493;
	EnumChat.ONE_GIFT_2=4931;
	EnumChat.CHENGJIUTEQUAN=494;
	EnumChat.EQUIPPRODUCE=501;
	EnumChat.EQUIPSHENGPIN=502;
	EnumChat.PetXunbao1=510;
	EnumChat.PetXunbao2=5101;
	EnumChat.ITEMXunBao1=511;
	EnumChat.ITEMXunBao2=5111;
	EnumChat.EQUIPSUIT3=503;
	EnumChat.EQUIPSUIT6=504;
	EnumChat.EQUIPSUIT10=505;
	EnumChat.KONGCITY1=453;
	EnumChat.KONGCITY2=4531;
	EnumChat.MRTH_60_1=512;
	EnumChat.MRTH_60_2=5121;
	EnumChat.YY_TASK_513=513;
	EnumChat.YY_TASK_514=514;
	EnumChat.YY_TASK_515=515;
	EnumChat.YY_TASK_516=516;
	EnumChat.YY_TASK_517=517;
	EnumChat.YY_TASK_518=518;
	EnumChat.YY_TASK_519=519;
	EnumChat.YY_TASK_520=520;
	EnumChat.YY_TASK_521=521;
	EnumChat.YY_TASK_522=522;
	EnumChat.YY_TASK_5231=5231;
	EnumChat.YY_TASK_5241=5241;
	EnumChat.YY_TASK_5251=5251;
	EnumChat.YY_TASK_5261=5261;
	EnumChat.YY_TASK_5271=5271;
	EnumChat.YY_TASK_5281=5281;
	EnumChat.YY_TASK_5291=5291;
	EnumChat.YY_TASK_5301=5301;
	EnumChat.YY_TASK_5311=5311;
	EnumChat.YY_TASK_5321=5321;
	EnumChat.YY_TASK_533=533;
	EnumChat.YY_TASK_5331=5331;
	EnumChat.YY_TASK_534=534;
	EnumChat.YY_TASK_5341=5341;
	EnumChat.YY_TASK_535=535;
	EnumChat.YY_TASK_5351=5351;
	EnumChat.YY_TASK_536=536;
	EnumChat.YY_TASK_5361=5361;
	EnumChat.YY_TASK_537=537;
	EnumChat.YY_TASK_5371=5371;
	EnumChat.YY_TASK_538=538;
	EnumChat.YY_TASK_5381=5381;
	EnumChat.YY_TASK_539=539;
	EnumChat.YY_TASK_5391=5391;
	EnumChat.YY_TASK_540=540;
	EnumChat.YY_TASK_5401=5401;
	EnumChat.SHOW_ITEM=10000;
	EnumChat.LOOK_PLAYER=10001;
	EnumChat.YY_TASK_2=461;
	EnumChat.YY_TASK_3=462;
	EnumChat.YY_TASK_4=463;
	EnumChat.YY_SHOP_3=464;
	EnumChat.YY_TASK_6=465;
	EnumChat.YY_TASK_7=466;
	EnumChat.YY_TASK_8=467;
	EnumChat.YY_TASK_9=468;
	EnumChat.YY_TASK_10=469;
	EnumChat.YY_TASK_11=470;
	EnumChat.YY_SHOP_2=471;
	EnumChat.YY_TASK_12=472;
	EnumChat.YY_TASK_13=473;
	EnumChat.YY_TASK_14=474;
	EnumChat.YY_SHOP_1=475;
	EnumChat.YY_RANK_1=476;
	EnumChat.YY_TASK_477=477;
	EnumChat.YY_TASK_478=478;
	EnumChat.YY_TASK_479=479;
	EnumChat.YY_TASK_480=480;
	EnumChat.YY_TASK_481=481;
	EnumChat.YY_TASK_482=482;
	EnumChat.YY_TASK_483=483;
	EnumChat.YY_TASK_484=484;
	EnumChat.YY_TASK_485=485;
	__static(EnumChat,
	['NAME_ONE_IDs',function(){return this.NAME_ONE_IDs=[111,154,164,165,
		173,240,293,306,370,3701,371,372,373,
		374,375,376,377,378,379,380,381,382,383,
		384,385,386,387,453,
		3761,3771,3781,3791 ,3801 ,3811,
		3821,3831,3841,3851,3861,3871,
		388 ,3881 ,389 ,3891];},'NAME_TWO_IDs',function(){return this.NAME_TWO_IDs=[113,155,344];},'TWO_COLOR_IDs',function(){return this.TWO_COLOR_IDs=[180];},'YYMSG',function(){return this.YYMSG=[
		471,475,476,
		461,462,463,464,465,
		466,467,468,469,470,
		472,473,474,477,478,
		479,480,481,482,483,484,485];},'YY_AddLINK',function(){return this.YY_AddLINK=[
		461,462,464,465,
		485,466,467,468,
		469,470,471,472,
		473,474,475,477,
		478,479,480,484,
		481,482,483,];},'CHAT_TIPIDS1',function(){return this.CHAT_TIPIDS1=[
		373,455,428,429,430,
		431 ,374 ,240,511,5111,
		510,5101,512,5121,513,514,515,
		516,517,518,519,520,521,522,5231,5241,
		5251,5261,5271,5281,5291,5301,5311,5321,535,
		540];},'CHAT_TIPIDS2',function(){return this.CHAT_TIPIDS2=[
		486,4861,491,4911 ,492,4921,
		456,4561,457,4571,
		493,4931,370];},'CHAT_TIPIDS3',function(){return this.CHAT_TIPIDS3=[
		533,534,5331,5341];}
	]);
	return EnumChat;
})()


//class enem.com.game.totem.event.TotemEvent
var TotemEvent=(function(){
	function TotemEvent(){}
	__class(TotemEvent,'enem.com.game.totem.event.TotemEvent');
	TotemEvent.TUTEM_UPDATE="TUTEM_UPDATE";
	TotemEvent.TUTEM_EXPUP="TUTEM_EXPUP";
	TotemEvent.ITEMNO="ITEMNO";
	TotemEvent.COSTITEMS="COSTITEMS";
	return TotemEvent;
})()


/**
*
*@author Administrator
*/
//class enem.com.game.items.ItemTipsData
var ItemTipsData=(function(){
	function ItemTipsData(){
		this.heroVo=null;
		/**关闭时是否显示缓动**/
		this.isCloseShowEff=true;
		this._item=null;
		this.gridType=5;
		this.openType=1;
		this.profession=1;
		;
	}

	__class(ItemTipsData,'enem.com.game.items.ItemTipsData');
	var __proto=ItemTipsData.prototype;
	__proto.clone=function(){
		var itd=new ItemTipsData();
		itd.gridType=this.gridType;
		itd.openType=this.openType;
		itd.profession=this.profession;
		itd.heroVo=this.heroVo;
		itd.isCloseShowEff=this.isCloseShowEff;
		itd.item=this.item;
		return itd;
	}

	__getset(0,__proto,'item',function(){
		return this._item;
		},function(value){
		this._item=value;
	});

	__getset(0,__proto,'equip',function(){
		return this._item;
	});

	__getset(0,__proto,'fitEquip',function(){
		return this._item;
	});

	return ItemTipsData;
})()


//class enem.com.game.pata.EnumPata
var EnumPata=(function(){
	function EnumPata(){}
	__class(EnumPata,'enem.com.game.pata.EnumPata');
	EnumPata.TYPE_HULAOGUAN=1;
	EnumPata.TYPE_CHANGBANPO=2;
	EnumPata.TYPE_TONGQUETAI=3;
	EnumPata.TYPE_HUARONGDAO=4;
	EnumPata.TYPE_KAIFU=5;
	EnumPata.TYPE_MANZUJINDI=6;
	EnumPata.TYPE_BAGUASHILIAN=7;
	EnumPata.TYPE_KAIFU2=8;
	EnumPata.TYPE_KAIFU3=9;
	EnumPata.TYPE_HUNYIN=11;
	return EnumPata;
})()


//class enem.com.game.boss.bean.vo.OneFieldBossVo
var OneFieldBossVo=(function(){
	function OneFieldBossVo(){
		this.id=0;
		// 剩余血量
		this.hp=0;
		// 最大血量
		this.maxhp=0;
		// 逃跑时间
		this.excapeTime=0;
		this.excapeClientTime=0;
		// 下次刷新时间
		this.nextTime=0;
		// 消耗道具
		this.costItemID=0;
		this.costItemNum=0;
		this.ownerName=null;
		this.ownerProfession=0;
		this.ownerGender=0;
		this.escape=false;
		this.users=[];
	}

	__class(OneFieldBossVo,'enem.com.game.boss.bean.vo.OneFieldBossVo');
	var __proto=OneFieldBossVo.prototype;
	__proto.SetData=function(bean,serverMTime){
		this.id=bean.id;
		this.escape=bean.isTaopao==1;
		this.hp=bean.hp.fValue;
		this.maxhp=bean.maxHp.fValue;
		this.excapeTime=bean.taopaoTime *1000;
		this.excapeClientTime=Laya.timer.currTimer+(this.excapeTime-serverMTime)+500;
		this.nextTime=bean.xiaciTime *1000;
		this.ownerName=bean.ownerName;
		this.ownerProfession=bean.ownerProfession;
		this.ownerGender=bean.ownerGender
		this.costItemID=bean.costItem;
		this.costItemNum=bean.costNum;
		this.users=bean.users;
	}

	/**英雄头像图标URL*/
	__proto.GetHeroHeadIconKey=function(sex,prefession){
		var s=sex==1 ? 0 :1;
		if (!GameCfg.isMultiRole)
			prefession=2;
		return "res/ui/image/head/role/"+prefession+"_"+s+".png";
	}

	__proto.Get_ownerHead=function(){
		if (this.ownerName)
			return this.GetHeroHeadIconKey(this.ownerGender,this.ownerProfession);
		return null;
	}

	__getset(0,__proto,'isDead',function(){
		return this.hp==0;
	});

	return OneFieldBossVo;
})()


//class enem.com.game.bingfa.BingfaUtil
var BingfaUtil=(function(){
	function BingfaUtil(){}
	__class(BingfaUtil,'enem.com.game.bingfa.BingfaUtil');
	BingfaUtil.GetOpenDesc=function(idx){
		var model=Q_miji_gridContainer.GetValue(idx+1);
		return PlayerUtil.GetLevelShow(model.q_zhuansheng,model.q_level);
	}

	BingfaUtil.isGridOpen=function(idx,level,zslevel){
		var model=Q_miji_gridContainer.GetValue(idx+1);
		return level >=model.q_level && zslevel >=model.q_zhuansheng;
	}

	BingfaUtil.GetLockItem=function(num){
		var o=JSONUtil.decode(Q_miji_paramContainer.GetValue(1).q_value);
		return o[num-1];
	}

	BingfaUtil.GetMaxLockNum=function(){
		return parseInt(Q_miji_paramContainer.GetValue(2).q_value);
	}

	return BingfaUtil;
})()


//class enem.com.game.crossserver.EnumCrossServer
var EnumCrossServer=(function(){
	function EnumCrossServer(){}
	__class(EnumCrossServer,'enem.com.game.crossserver.EnumCrossServer');
	EnumCrossServer.TEAM_TYPE_TEAM=1;
	EnumCrossServer.TEAM_TYPE_ZHULU=2;
	EnumCrossServer.TEAM_TYPE_GUILD=3;
	EnumCrossServer.TEAM_STATE_NOT_OPEN=0;
	EnumCrossServer.TEAM_STATE_NO_TEAM=1;
	EnumCrossServer.TEAM_STATE_HAVE_TEAM=2;
	return EnumCrossServer;
})()


/**引导工具类**/
//class enem.com.game.guide.GuideUtil
var GuideUtil=(function(){
	function GuideUtil(){}
	__class(GuideUtil,'enem.com.game.guide.GuideUtil');
	GuideUtil.getGuideType=function(guideID){
		var cfg=Q_guideContainer.GetValue(guideID);
		return cfg!=null?cfg.q_guide_type:0;
	}

	return GuideUtil;
})()


//class enem.com.game.boss.bean.vo.FieldBossVo
var FieldBossVo=(function(){
	function FieldBossVo(){
		this.allbeans={};
	}

	__class(FieldBossVo,'enem.com.game.boss.bean.vo.FieldBossVo');
	var __proto=FieldBossVo.prototype;
	__proto.SetData=function(beans,serverMTime){
		this.allbeans={};
		for (var i=0;i < beans.length;++i){
			var v=new OneFieldBossVo();
			v.SetData(beans[i],serverMTime);
			this.allbeans[v.id]=v;
		}
	}

	__proto.UpdateBean=function(bean,serverMTime){
		if (this.allbeans[bean.id]==null){
			var vo=new OneFieldBossVo();
			vo.SetData(bean,serverMTime);
			this.allbeans[bean.id]=vo;
		}
		else{
			this.allbeans[bean.id].SetData(bean);
		}
	}

	return FieldBossVo;
})()


//class enem.com.game.marriage.MarriageEnum.MarriageEvent
var MarriageEvent=(function(){
	function MarriageEvent(){}
	__class(MarriageEvent,'enem.com.game.marriage.MarriageEnum.MarriageEvent');
	MarriageEvent.SINGLELISTCHANGE="SINGLELISTCHANGE";
	MarriageEvent.QIUHUNCHENGGNOGN="QIUHUNCHENGGNOGN";
	MarriageEvent.BEENASKED="BEENASKED";
	MarriageEvent.MARRYSUCCESD="MARRYSUCCESD";
	MarriageEvent.SONGHUA="SONGHUA";
	MarriageEvent.FANGWUBIANHUABIG="FANGWUBIANHUAPRO";
	MarriageEvent.FANGWUBIANHUALV="FANGWUBIANHUALV";
	MarriageEvent.FANGWUBIANHUALVEND="FANGWUBIANHUALVEND";
	MarriageEvent.YOURENJIEHUNLA="YOURENJIEHUNLA";
	MarriageEvent.GOLDNOTENOUGHP="GOLDNOTENOUGHP";
	MarriageEvent.XITEICLOSE="XITEICLOSE";
	MarriageEvent.GETWIFRSIKNERROR="GETWIFRSIKNSUCCSE";
	MarriageEvent.QIUHUNJUJUEWANLE="QIUHUNJUJUEWANLE";
	MarriageEvent.YOUJINDUKEYILINGQU="YOUJINDUKEYILINGQU";
	MarriageEvent.LINGQUDUIXIANGJINDU="LINGQUDUIXIANGJINDU";
	MarriageEvent.SONGHUASHIBAI="SONGHUASHIBAI";
	MarriageEvent.QINMIDUADD="QINMIDUADD";
	MarriageEvent.FANGWUSHENGJICUOWU="FANGWUSHENGJICUOWU";
	MarriageEvent.CHOOSESINGLE="CHOOSESINGLE";
	MarriageEvent.ClOSEPEPLE="ClOSEPEPLE";
	MarriageEvent.FLOWERHANDLER="FLOWERHANDLER";
	MarriageEvent.GETPATAINFO="GETPATAINFO";
	MarriageEvent.NEXTLAYERINFO="NEXTLAYERINFO";
	MarriageEvent.ShowRankNum=3;
	MarriageEvent.ShowMonsterNum=3;
	MarriageEvent.Pata_min_id=4001;
	return MarriageEvent;
})()


//class enem.com.ui.utils.ResUrl
var ResUrl=(function(){
	function ResUrl(){}
	__class(ResUrl,'enem.com.ui.utils.ResUrl');
	ResUrl.GetItemIconKey=function(mid){
		var resid=1013;
		var itemm=Q_itemContainer.GetValue(mid);
		if (itemm !=null){
			resid=itemm.q_icon;
		};
		var ret="res/ui/image/item_single/"+resid+".png";
		return ret;
	}

	ResUrl.GetItemIconKey2=function(mid){
		var resid=0;
		var itemm=Q_itemContainer.GetValue(mid);
		if (itemm !=null)
			resid=itemm.q_icon;
		var ret="res/ui/image/item_single/"+resid+".png";
		return resid !=0 ? ret :"";
	}

	ResUrl.getItemTypeURL=function(itemType){
		if(itemType==42)
			return "res/ui/sg_ui/cm/skill_type_4.png";
		return "";
	}

	ResUrl.GetEquipKindIcon=function(kind,gray){
		(gray===void 0)&& (gray=false);
		if (kind==EnumEquip.LIGHTWEAPON)return ResUrl.getLIGHTIMG(0);
		else if (kind==EnumEquip.LIGHTWEAR)return ResUrl.getLIGHTIMG(1);
		if (gray)
			return "res/ui/sg_ui/equip_icon/ui_icon_grey_equip_"+kind+".png";
		else
		return "res/ui/sg_ui/equip_icon/ui_icon_equip_"+kind+".png";
	}

	ResUrl.getLIGHTIMG=function(i){
		var q=Q_globalContainer.GetValue(175);
		if (q){
			var A=JSONUtil.decode(q.q_value);
			var id=(A && A[i])? A[i] :0;
			return TextUtil.FormatStr("res/ui/image/item_single/{@}.png",[id.toString()]);
		}
		return "";
	}

	ResUrl.GetMonsterHeadIconKey=function(res){
		return "res/ui/image/head/pet/ui_head_pet_"+res+".png";
	}

	ResUrl.GetHeroHeadIconKey=function(sex,prefession){
		var s=sex==1 ? 0 :1;
		if (!GameCfg.isMultiRole)
			prefession=2;
		return "res/ui/image/head/role/"+prefession+"_"+s+".png";
	}

	ResUrl.GetPrefessionIcon=function(prefession){
		return ResUrl.GetHeroHeadIconKey(0,prefession);
	}

	ResUrl.GetPrefessionIcon2=function(prefession){
		return ResUrl.GetPrefessionIcon(prefession);
	}

	ResUrl.GetPlayerHeadIconKey=function(sex){
		return ResUrl.GetHeroHeadIconKey(sex,1);
	}

	ResUrl.GetNpcHeadIconKey=function(mid){
		return "";
	}

	ResUrl.GetItemQualityKey=function(quality){
		return UITool.MakeUrl("res/ui/sg_ui/cm/grid_"+quality+".png");
	}

	ResUrl.GetSpecItemQualityKey=function(quality){
		var transQuality=5;
		if(quality==2){
			transQuality=4;
		}
		else if(quality==3){
			transQuality=2;
		}
		else if(quality==4){
			transQuality=3;
		}
		else if(quality==5){
			transQuality=1;
		}
		return UITool.MakeUrl("res/ui/sg_ui/openfun/img/tubiao-"+transQuality+".png");
	}

	ResUrl.GetItemQualityTipKuang=function(quality){
		return UITool.MakeUrl("res/ui/sg_ui/tips/tipstitlebg_"+quality+".png");
	}

	ResUrl.GetBuffImageKey=function(mid){
		return "";
	}

	ResUrl.GetSkillImageKey=function(resid){
		return "res/ui/image/skillIcon/"+resid+".png";
	}

	ResUrl.GetSkillImageKey2=function(skillID){
		var model=Q_skill_modelContainer.GetValue(skillID);
		if(model==null){
			return "";
		}
		return ResUrl.GetSkillImageKey(model.q_icon);
	}

	ResUrl.GetSkillQualityKuang=function(quality){
		if(quality==0)
			return "res/ui/sg_ui/cm/headbg.png";
		return "res/ui/sg_ui/cm/skill_bg_"+quality+".png";
	}

	ResUrl.GetAttributeImageKey=function(mid){
		return "";
	}

	ResUrl.getBeautyHeadIcon=function(res){
		return "res/ui/image/head/hongyan/"+res+".png";
	}

	ResUrl.getFashionTitleURL=function(res){
		return "res/ui/sg_ui/chenghao_image/"+res+".png";
	}

	ResUrl.getBeautyHeadIcon2=function(qid){
		var cfg=Q_hongyanContainer.GetValue(qid);
		return ResUrl.getBeautyHeadIcon(cfg.q_model);
	}

	ResUrl.getChatFaceUrl=function(id){
		return UITool.MakeUrl("res/ui/image/face/"+id+".png");
	}

	ResUrl.GetTitleIconKey=function(mid){
		return "";
	}

	ResUrl.GetXuanNv=function(lv){
		(lv===void 0)&& (lv=1);
		var SkinName="res/ui/image/head/xianlv/ui_head_xianlv_{@}.png";
		return TextUtil.FormatStr(SkinName,[lv]);
	}

	ResUrl.getPetJobIcon=function(job){
		switch (job){
			case 1:
				return "res/ui/sg_ui/general/anniu_05.png";
			case 2:
				return "res/ui/sg_ui/general/anniu_06.png";
			case 3:
				return "res/ui/sg_ui/general/anniu_07.png";
			case 4:
				return "res/ui/sg_ui/general/anniu_08.png";
			}
		return "";
	}

	__static(ResUrl,
	['ITEM_QUALITY_TIPKUANG',function(){return this.ITEM_QUALITY_TIPKUANG=["putong","lv","blue","zi","orange","red"];}
	]);
	return ResUrl;
})()


//class enem.com.game.achievement.event.AchievementEvent
var AchievementEvent=(function(){
	function AchievementEvent(){}
	__class(AchievementEvent,'enem.com.game.achievement.event.AchievementEvent');
	AchievementEvent.ACHIEVEMENTINIT="ACHIEVEMENTINIT";
	AchievementEvent.ACHIEVEMENTCOMP="ACHIEVEMENTCOMP";
	AchievementEvent.ACHIEVEMENTCHGE="ACHIEVEMENTCHGE";
	return AchievementEvent;
})()


//class enem.com.game.daily.officialpost.EnumOfficialPost
var EnumOfficialPost=(function(){
	function EnumOfficialPost(){}
	__class(EnumOfficialPost,'enem.com.game.daily.officialpost.EnumOfficialPost');
	EnumOfficialPost.TYPE_OFFICIAL=1;
	EnumOfficialPost.TYPE_GUILD=2;
	EnumOfficialPost.BACK_TYPE_RES=1;
	EnumOfficialPost.BACK_TYPE_EXPE=2;
	return EnumOfficialPost;
})()


//class enem.com.game.vido.VideoInfo
var VideoInfo=(function(){
	function VideoInfo($type){
		this.type=0;
		/**录像 */
		this._videos=null;
		/**今日已点赞的videoId */
		this._todayLikeVideo=null;
		this.type=$type;
	}

	__class(VideoInfo,'enem.com.game.vido.VideoInfo');
	var __proto=VideoInfo.prototype;
	__proto.update=function(msg){
		this._videos=msg.videos;
		this._todayLikeVideo=msg.todayLikeVideo;
		EventCenter.Event("VIDEO_HALL_GET_VIDEOS",this.type);
	}

	__proto.likeOneVideo=function(uid,num){
		if(this._videos !=null){
			var video;
			for(var $each_video in this._videos){
				video=this._videos[$each_video];
				if(MathExtUtil.isLongEqual(uid,video.videoId)){
					video.like=num;
					if(this._todayLikeVideo==null)
						this._todayLikeVideo=[];
					this._todayLikeVideo.push(uid);
					EventCenter.Event("VIDEO_HALL_UPDATE_ONE_LIKE_NUM",uid);
					break ;
				}
			}
		}
	}

	__proto.playOneVideo=function(uid,num){
		if(this._videos !=null){
			var video;
			for(var $each_video in this._videos){
				video=this._videos[$each_video];
				if(MathExtUtil.isLongEqual(uid,video.videoId)){
					video.play=num;
					EventCenter.Event("VIDEO_HALL_UPDATE_ONE_PLAY_NUM",uid);
					break ;
				}
			}
		}
	}

	__proto.isLiked=function(uid){
		if(this._todayLikeVideo !=null){
			var id;
			for(var $each_id in this._todayLikeVideo){
				id=this._todayLikeVideo[$each_id];
				if(MathExtUtil.isLongEqual(id,uid))
					return true;
			}
		}
		return false;
	}

	__getset(0,__proto,'videos',function(){
		return this._videos;
	});

	__getset(0,__proto,'todayLikeVideo',function(){
		return this._todayLikeVideo;
	});

	return VideoInfo;
})()


/**
*设置枚举
*/
//class enem.com.game.setting.enums.EnumSetting
var EnumSetting=(function(){
	function EnumSetting(){}
	__class(EnumSetting,'enem.com.game.setting.enums.EnumSetting');
	EnumSetting.AUCTIONS=-1;
	EnumSetting.PET=0;
	EnumSetting.SKILL1=1;
	EnumSetting.SKILL2=2;
	EnumSetting.SKILL3=3;
	EnumSetting.AUTOMELT=4;
	EnumSetting.BOSSREFRESH=5;
	EnumSetting.AUTODISBAND=6;
	EnumSetting.INFO_TYPE_OTHER_PLAYER=1;
	EnumSetting.INFO_TYPE_GUILD_PLAYER=2;
	EnumSetting.INFO_TYPE_CHAT_PLAYER=3;
	EnumSetting.SET_TYPE_BGM=1;
	EnumSetting.SET_TYPE_SOUND=2;
	EnumSetting.SET_TYPE_WING=11;
	EnumSetting.SET_TYPE_TITLE=12;
	EnumSetting.SET_TYPE_SPRITE=13;
	EnumSetting.SET_TYPE_GUARD=14;
	EnumSetting.SET_TYPE_HALO=15;
	EnumSetting.SET_TYPE_OTHER_PLAYER=16;
	EnumSetting.SET_TYPE_SPEED=17;
	EnumSetting.SET_TYPE_NEW_SERVER=1001;
	EnumSetting.SET_TYPE_VIP_NOTICE=1002;
	EnumSetting.SET_ACTIVITY_PUSH=1003;
	EnumSetting.BGM="bmg";
	EnumSetting.SOUND="sound";
	EnumSetting.WING="wing";
	EnumSetting.TITLE="title";
	EnumSetting.SPRITE="sprite";
	EnumSetting.GUARD="guard";
	EnumSetting.HALO="halo";
	EnumSetting.OTHER_PLAYER="otherplayer";
	EnumSetting.SPEED="speed";
	EnumSetting.ACTIVITY_PUSH="activitypush";
	return EnumSetting;
})()


//class enem.com.game.battle.data.FightFitSkill
var FightFitSkill=(function(){
	function FightFitSkill(){
		/**第几回合**/
		this.round=0;
		/**合体技能ID**/
		this.skillID=0;
		/**合体技能品质**/
		this.quality=0;
	}

	__class(FightFitSkill,'enem.com.game.battle.data.FightFitSkill');
	return FightFitSkill;
})()


//class enem.com.game.nimin.EnumNimin
var EnumNimin=(function(){
	function EnumNimin(){}
	__class(EnumNimin,'enem.com.game.nimin.EnumNimin');
	EnumNimin.EVENT_LV="EVENT_LV";
	EnumNimin.EVENT_BUY="EVENT_BUY";
	EnumNimin.EVENT_RECORD="EVENT_RECORD";
	EnumNimin.LIEMINGSHOP=1;
	return EnumNimin;
})()


/**
*技能特效配置管理器
*/
//class enem.com.base.effect.configs.SkillEffectCfgMgr
var SkillEffectCfgMgr=(function(){
	function SkillEffectCfgMgr(){
		this._normalEffectModel=null;
		this._cacheBuffModel=null;
		this._cacheSkillModel=null;
		this._cacheBuffModel=new Dictionary();
		this._cacheSkillModel=new Dictionary();
		this._normalEffectModel=new Dictionary();
	}

	__class(SkillEffectCfgMgr,'enem.com.base.effect.configs.SkillEffectCfgMgr');
	var __proto=SkillEffectCfgMgr.prototype;
	__proto.GetNormalModel=function(id){
		if (!id){
			id=1;
		};
		var ret=this._normalEffectModel.get(id);
		if (ret==null){
			var model=Q_effect_modelContainer.GetValue(id);
			if (model==null)
				return null;
			var code=model.q_effect.replace(/'/g, "\"");
			var o=JSONUtil.decode(code);
			ret=new NormalEffectModel();
			ret.cfgid=id;
			ret.Parse(o,model.q_max_count);
			this._normalEffectModel.set(id,ret);
		}
		return ret;
	}

	__getset(1,SkillEffectCfgMgr,'ins',function(){
		if (SkillEffectCfgMgr._ins==null)
			SkillEffectCfgMgr._ins=new SkillEffectCfgMgr();
		return SkillEffectCfgMgr._ins;
	});

	SkillEffectCfgMgr._ins=null;
	return SkillEffectCfgMgr;
})()


/**
*不要有任何成员
*@author Administrator
*
*/
//class enem.com.game.auction.backpack.events.BackpackEvent
var BackpackEvent=(function(){
	function BackpackEvent(){}
	__class(BackpackEvent,'enem.com.game.auction.backpack.events.BackpackEvent');
	BackpackEvent.ITEM_CHANGE="backpackItemChange";
	BackpackEvent.ITEM_ADD="backpackItemAdd";
	BackpackEvent.ITEM_DEL="backpackItemDel";
	BackpackEvent.EQUIP_PACKET_CAPACITY_CHANGE="equip_packey_capacity_change";
	BackpackEvent.BACKPACK_RED="backpackred";
	BackpackEvent.MELT_MSG_BACK="melt_msg_back";
	BackpackEvent.SHUXINGDAN_NUM="shuxingdan_use_num";
	BackpackEvent.ITEM_NUM_ADD="ITEM_NUM_ADD";
	BackpackEvent.ITEM_NUM_DEL="ITEM_NUM_DEL";
	BackpackEvent.ITEM_USEABLE_NOR="ITEM_USEABLE_NOR";
	return BackpackEvent;
})()


//class enem.com.game.achievement.Enum.AchiPanelFuncId
var AchiPanelFuncId=(function(){
	function AchiPanelFuncId(){}
	__class(AchiPanelFuncId,'enem.com.game.achievement.Enum.AchiPanelFuncId');
	AchiPanelFuncId.Share=0;
	AchiPanelFuncId.AchievementP=1;
	AchiPanelFuncId.CANTTAKE=1;
	AchiPanelFuncId.DONTTAKE=2;
	AchiPanelFuncId.ALRTAKE=0;
	__static(AchiPanelFuncId,
	['STATES',function(){return this.STATES=[2,1,0];}
	]);
	return AchiPanelFuncId;
})()


//class enem.com.game.gate.vo.GateVo
var GateVo=(function(){
	function GateVo(){
		// 当前已经到达的副本ID
		this.dungeonId=0;
		// 当前停留的副本ID(需要切地图的关卡，要手动操作才能切过去)
		this.curDungeonId=0;
		// 当前关卡每秒的金币
		this.copperPerSec=0;
		// 当前关卡每秒的经验
		this.expPerSec=0;
		// 下次挑战时间
		this.nextChallengeTime=0;
		// 打了几波小怪了
		this._curWave=0;
		// 至少打几波怪才能挑战
		this.maxWave=3;
		// 是否自动挑战boss关卡
		this.isAutoChallenge=false;
		this.rewardDungeons=[];
	}

	__class(GateVo,'enem.com.game.gate.vo.GateVo');
	var __proto=GateVo.prototype;
	__proto.UpdateNextTime=function(DEBUG_QUICK){
		var inv=GateUtil.GetChallengeInv()*1000;
		var diff=DEBUG_QUICK ? 0 :inv;
		this.nextChallengeTime=Laya.timer.currTimer+diff;
	}

	__proto.isBossGate=function(DEBUG_QUICK){
		if (DEBUG_QUICK)return true;
		return this._curWave >=this.maxWave && this.isAutoChallenge && this.curDungeonId==this.dungeonId;
	}

	/**
	*是否需要切换场景
	*@return
	*/
	__proto.IsNeedChangeScene=function(){
		return this.curScene !=this.nextScene;
	}

	__getset(0,__proto,'curWave',function(){
		return this._curWave;
		},function(value){
		this._curWave=value;
	});

	__getset(0,__proto,'curChapterId',function(){
		return GateUtil.GetChapterByDungeon(this.curDungeonId).chapterId;
	});

	__getset(0,__proto,'curScene',function(){
		return GateUtil.GetSceneId(this.curDungeonId);
	});

	__getset(0,__proto,'nextScene',function(){
		return GateUtil.GetSceneId(this.dungeonId);
	});

	return GateVo;
})()


/**引导配置信息**/
//class enem.com.game.guide.data.GuideData
var GuideData=(function(){
	function GuideData($cfg){
		this._cfg=null;
		this._cfg=$cfg;
	}

	__class(GuideData,'enem.com.game.guide.data.GuideData');
	var __proto=GuideData.prototype;
	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	return GuideData;
})()


/**
*冒字数据
*/
//class enem.com.game.battle.record.FightLogNum
var FightLogNum=(function(){
	function FightLogNum(){
		// 文字[name,w,h]
		this.word=null;
		// 数字前缀[name,w,h]
		this.num=null;
		// 是否百分比
		this.per=false;
		// 是否显示符号(0-不显示 1-正 2-负)
		this.symbol=0;
		// 缓动方式
		this.tween=0;
		// 时机：0-添加时 1-触发时
		this.time=1;
		// 冒字延迟
		this.delay=0;
		// 冒字时的震屏
		this.shake=false;
	}

	__class(FightLogNum,'enem.com.game.battle.record.FightLogNum');
	var __proto=FightLogNum.prototype;
	// [texiao,mz_word,mz_num,mz_symbol,mz_per,mz_delay,mz_shake,mz_time,buff,delay,hurt]
	__proto.SetData=function(arr){
		if (arr.length < 8)return;
		this.word=FightLogNum.getWords(arr[1]);
		this.num=FightLogNum.getNums(arr[2]);
		if (this.num){
			this.num=[this.num,30,40];
		}
		this.symbol=arr[3];
		this.per=arr[4]==1;
		this.delay=arr[5];
		this.shake=arr[6]==1;
		this.time=arr[7];
		this.tween=0;
	}

	FightLogNum.getWords=function(id){
		if (!FightLogNum._words){
			FightLogNum._words=JSONUtil.decode(Q_fight_paramContainer.GetValue(1).q_value);
		}
		return FightLogNum._words ? FightLogNum._words[id] :null;
	}

	FightLogNum.getNums=function(id){
		if (!FightLogNum._nums){
			FightLogNum._nums=JSONUtil.decode(Q_fight_paramContainer.GetValue(2).q_value);
		}
		return FightLogNum._nums ? FightLogNum._nums[id] :null;
	}

	FightLogNum._words=null;
	FightLogNum._nums=null;
	return FightLogNum;
})()


/**
*VIP礼包类型数据类
*/
//class enem.com.game.vip.vo.VipGiftGroupVo
var VipGiftGroupVo=(function(){
	function VipGiftGroupVo(type,state){
		this.groupType=0;
		this.awardState=0;
		this.groupType=type;
		this.awardState=state;
	}

	__class(VipGiftGroupVo,'enem.com.game.vip.vo.VipGiftGroupVo');
	return VipGiftGroupVo;
})()


//class enem.com.game.decree.DecreeEvent
var DecreeEvent=(function(){
	function DecreeEvent(){}
	__class(DecreeEvent,'enem.com.game.decree.DecreeEvent');
	DecreeEvent.RES_UPDATE_WAR_TOKEN="ResUpdateWarToken";
	DecreeEvent.RES_UPDATE_WAR_TOKEN_TASK="ResUpdateWarTokenTask";
	DecreeEvent.UPDATE_WAR_TOKEN_CELLCHANGEELEFT="UPDATE_WAR_TOKEN_CELLCHANGEELEFT";
	DecreeEvent.UPDATE_WAR_TOKEN_CELLCHANGERIGHT="UPDATE_WAR_TOKEN_CELLCHANGERIGHT";
	return DecreeEvent;
})()


/**
*单个背包数据
*/
//class enem.com.game.backpack.vo.BackpackVo
var BackpackVo=(function(){
	function BackpackVo(t){
		/**背包类型 1-装备 2-道具 3-战纹 4-秘宝**/
		this.type=0;
		/**真实包裹容量（包含vip增加的）**/
		this.capacity=0;
		this._isRed=false;
		this.itemsHash=new HashMap();
		this.gridHash=new HashMap();
		this.type=t;
	}

	__class(BackpackVo,'enem.com.game.backpack.vo.BackpackVo');
	var __proto=BackpackVo.prototype;
	__proto.Clear=function(){
		this.itemsHash.clear();
		this.gridHash.clear();
		this._isRed=false;
	}

	/**
	*获得指定合体宝石道具列表
	*@param types 排除的宝石类型
	*@return
	*/
	__proto.getFitGemItemList=function(types,curItem){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==43 && types.indexOf((item).gemType)==-1){
				if (!this.isSameFG(item,curItem)&& !this.isHasSameFG(list,item))
					list.push(item);
			}
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem3);
		return list;
	}

	__proto.isHasSameFG=function(list,item){
		if (list==null || item==null)
			return false;
		var temp;
		for(var $each_temp in list){
			temp=list[$each_temp];
			if (this.isSameFG(temp,item))
				return true;
		}
		return false;
	}

	__proto.isSameFG=function(temp,item){
		if (temp==null || item==null)
			return false;
		if ((temp).gemType==(item).gemType && temp.quality==item.quality && (temp).gemLevel==(item).gemLevel)
			return true;
		return false;
	}

	/**
	*获得指定御魂列表
	*@param partID
	*@return
	*/
	__proto.getYuHunItemList=function(partID){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==31 && (partID==-1 || (item).yhPartID==partID))
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem);
		return list;
	}

	/**
	*获得排除指定类型的御魂列表
	*@param partID
	*@return
	*/
	__proto.getYuHunItemList2=function(excludePartIDs){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==31 && (excludePartIDs==null || excludePartIDs.indexOf((item).yhPartID)==-1))
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem);
		return list;
	}

	/**
	*获得排除指定类型的御魂列表
	*@param types
	*@return
	*/
	__proto.getYuHunItemList3=function(excludePartIDs,curItem){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==31 && (excludePartIDs==null || excludePartIDs.indexOf((item).yhPartID)==-1)){
				if (!this.isSameYH(item,curItem)&& !this.isHasSameYH(list,item))
					list.push(item);
			}
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem);
		return list;
	}

	/**
	*获得指定御魂列表4
	*@param partID
	*@return
	*/
	__proto.getYuHunItemList4=function(partID,curItem){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==31 && (partID==-1 || (item).yhPartID==partID)){
				if (!this.isSameYH(item,curItem)&& !this.isHasSameYH(list,item))
					list.push(item);
			}
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem);
		return list;
	}

	/**
	*获得指定兵法列表
	*@param types
	*@return
	*/
	__proto.getBingFaItemList=function(types,curItem){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==13 && types.indexOf((ItemConfigFactory.Ins.Get(item.modelId)).type)==-1){
				if (!this.isSameBF(item,curItem)&& !this.isHasSameBF(list,item))
					list.push(item);
			}
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem4);
		return list;
	}

	/**
	*获得指定兵法列表2
	*@param types
	*@return
	*/
	__proto.getBingFaItemList2=function(types){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==13 && types.indexOf((ItemConfigFactory.Ins.Get(item.modelId)).type)==-1)
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem4);
		return list;
	}

	/**
	*获得指定兵法列表3
	*@param types
	*@return
	*/
	__proto.getBingFaItemList3=function(type){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==13 && type==(ItemConfigFactory.Ins.Get(item.modelId)).type)
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem4);
		return list;
	}

	__proto.isHasSameBF=function(list,item){
		if (list==null || item==null)
			return false;
		var temp;
		for(var $each_temp in list){
			temp=list[$each_temp];
			if (this.isSameBF(temp,item))
				return true;
		}
		return false;
	}

	__proto.isSameBF=function(temp,item){
		if (temp==null || item==null)
			return false;
		if ((ItemConfigFactory.Ins.Get(temp.modelId)).type==(ItemConfigFactory.Ins.Get(item.modelId)).type
			&& temp.quality==item.quality && (ItemConfigFactory.Ins.Get(temp.modelId)).level==(ItemConfigFactory.Ins.Get(item.modelId)).level)
		return true;
		return false;
	}

	/**咒术列表**/
	__proto.getZhoushuList=function(){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==11){
				list.push(item);
			}
		}
		return list;
	}

	__proto.getList=function(itemType){
		var list=[];
		var values=this.itemsHash.values;
		var len=values.length;
		var item;
		for(var i=0;i < len;i++){
			item=values[i];
			if (item.type==itemType){
				list.push(item);
			}
		}
		return list;
	}

	__proto.isHasSameYH=function(list,item){
		if (list==null || item==null)
			return false;
		var temp;
		for(var $each_temp in list){
			temp=list[$each_temp];
			if (this.isSameYH(temp,item))
				return true;
		}
		return false;
	}

	__proto.isSameYH=function(temp,item){
		if (temp==null || item==null)
			return false;
		if ((temp).yhPartID==(item).yhPartID && temp.quality==item.quality && (temp).yhLevel==(item).yhLevel)
			return true;
		return false;
	}

	/**
	*获得指定命格列表
	*@param types
	*@return
	*/
	__proto.getMingGeItemList=function(types){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==32 && types.indexOf((item).mgType)==-1)
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem2);
		return list;
	}

	/**
	*获得指定命格列表2
	*@param types
	*@return
	*/
	__proto.getMingGeItemList2=function(type){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==32 && type==(item).mgType)
				list.push(item);
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem2);
		return list;
	}

	/**
	*获得指定命格列表3
	*@param types
	*@return
	*/
	__proto.getMingGeItemList3=function(types,curItem){
		var list=[];
		var values=this.itemsHash.values;
		var item;
		for(var $each_item in values){
			item=values[$each_item];
			if (item.type==32 && types.indexOf((item).mgType)==-1){
				if (!this.isSameMG(item,curItem)&& !this.isHasSameMG(list,item))
					list.push(item);
			}
		}
		if (list.length > 1)
			list.sort(ItemUtil.sortItem2);
		return list;
	}

	__proto.isHasSameMG=function(list,item){
		if (list==null || item==null)
			return false;
		var temp;
		for(var $each_temp in list){
			temp=list[$each_temp];
			if (this.isSameMG(temp,item))
				return true;
		}
		return false;
	}

	__proto.isSameMG=function(temp,item){
		if (temp==null || item==null)
			return false;
		if ((temp).mgType==(item).mgType && temp.quality==item.quality && (temp).mgLevel==(item).mgLevel)
			return true;
		return false;
	}

	/**
	*获得指定秘宝道具列表
	*@param type
	*@param qualitys
	*@return
	*/
	__proto.getMiBaoItemList=function(type,qualitys){
		var list=[];
		if (qualitys.length > 0){
			var values=this.itemsHash.values;
			var item;
			for(var $each_item in values){
				item=values[$each_item];
				if (item.type==type && qualitys.indexOf(item.quality)!=-1)
					list.push(item);
			}
			if (list.length > 1){
				if (type==31)
					list.sort(ItemUtil.sortItem);
				else if (type==32)
				list.sort(ItemUtil.sortItem2);
				else
				list.sort(ItemUtil.SortItemFunc);
			}
		}
		return list;
	}

	/**
	*获得指定宠物武将卡道具列表
	*@param type
	*@param qualitys
	*@return
	*/
	__proto.getPetItemListByType=function(type){
		(type===void 0)&& (type=-1);
	}

	/**
	*设置道具数量
	*/
	__proto.SetItems=function(bean){
		this.Clear();
		this.capacity=bean.capacity;
		var items=bean.items;
		for (var i=0;i < items.length;++i){
			if (items[i].configID==2008000 ||items[i].configID==3704)
				continue ;
			var item=ItemUtil.ItemInfoToItem(items[i]);
			this.itemsHash.put(item.itemId.hexValue,item);
			this.gridHash.put(item.packetIndex,item);
			if (this.type==2){
				if (!this._isRed && item.isCanBatchUse)
					this._isRed=true;
			}
		}
	}

	/**
	*移除道具
	*/
	__proto.RemoveItem=function(item){
		this.itemsHash.remove(item.itemId.hexValue);
		this.gridHash.remove(item.packetIndex);
	}

	/**
	*添加道具
	*/
	__proto.AddItem=function(item){
		if (item.modelId==2008000 ||item.modelId==3706|| item.modelId==3704)
			return;
		this.itemsHash.put(item.itemId.hexValue,item);
		this.gridHash.put(item.packetIndex,item);
	}

	/**根据部位获取橙装**/
	__proto.GetChengEquip=function(job,kind,zs,lv){
		(zs===void 0)&& (zs=-1);
		(lv===void 0)&& (lv=-1);
		var Equips=this.GetEquipsByKindAndJob(job,kind,zs,lv);
		var ret=[];
		var len=Equips ? Equips.length :0;
		for (var i=0;i < len;++i){
			if (Equips[i].isOrange){
				ret.push(Equips[i]);
			}
		}
		return ret;
	}

	__proto.getAutoUseItems=function(serverMTime,level,func){
		var arr=this.itemsHash.values;
		var ret=[];
		for (var i=0;i < arr.length;++i){
			var itm=arr[i];
			if (itm.isCanBatchUse && (itm.type !=36||itm.modelId==1240)){
				if(itm.modelId==1039){
					continue ;
				}
				if(!itm.isCanUse(level,serverMTime))
					continue ;
				if(itm.type==39 && !func.apply(this,itm))
					continue ;
				ret.push(itm);
			}
		}
		return ret;
	}

	/**神装的同部位高级列表**/
	__proto.GetSameBetter=function(part,lv,force,level){
		(force===void 0)&& (force=false);
		(level===void 0)&& (level=0);
		var arr=this.itemsHash.values;
		var ret;
		var Lv=0;
		for (var i=0;i < arr.length;++i){
			var equ=arr[i];
			if (level >=equ.levelnum){
				Lv=ItemUtil.getGodlv(equ.modelId);
			}
			else{
				continue ;
			}
			if (equ.isGod && equ.grid==part){
				if (force && Lv >=lv)
					ret=equ;
				else if (!force && Lv > lv){
					ret=equ;
				}
			}
		}
		return ret;
	}

	/**
	*根据部位获取装备
	*@zs 转生等级
	*@lv 等级
	*/
	__proto.GetEquipsByKindAndJob=function(job,kind,zs,lv){
		(zs===void 0)&& (zs=-1);
		(lv===void 0)&& (lv=-1);
		var arr=this.itemsHash.values;
		var ret=[];
		for (var i=0;i < arr.length;++i){
			var equ=arr[i];
			if (zs !=-1 && lv !=-1){
				if (zs < equ.zs || lv < equ.level)
					continue ;
			}
			if (equ.gridId==kind){
				ret.push(equ);
			}
		}
		return ret;
	}

	/**
	*剩余格子数
	*/
	__proto.GetRemainNum=function(){
		return this.capacity-this.itemsHash.length;
	}

	__proto.ItemNums=function(){
		return this.itemsHash.length;
	}

	// 红点检测
	__proto.CheckRed=function(serverMTime,level,func,func2){
		this._isRed=false;
		if (this.type==1){
			this._isRed=this.GetRemainNum()<=30;
		}
		else if (this.type==2){
			var arr=this.itemsHash.values;
			var item;
			for (var i=0;i < arr.length;++i){
				item=arr [i];
				if (item.type==39){
					if (func.apply(this,[item])){
						this._isRed=true;
						break ;
					}
				}
				else{
					if (item.isShowRed(level,serverMTime,this,func2)){
						this._isRed=true;
						break ;
					}
				}
			}
		}
	}

	__getset(0,__proto,'isRed',function(){
		return this._isRed;
	});

	/**
	*背包是否满了
	*/
	__getset(0,__proto,'isFull',function(){
		return this.itemsHash.length >=this.capacity;
	});

	return BackpackVo;
})()


//class enem.com.game.trialTower.TrialTowerEvent
var TrialTowerEvent=(function(){
	function TrialTowerEvent(){}
	__class(TrialTowerEvent,'enem.com.game.trialTower.TrialTowerEvent');
	TrialTowerEvent.recTowerInfo="recTowerInfo";
	TrialTowerEvent.recTowerSelectInfo="recTowerSelectInfo";
	TrialTowerEvent.recTowerFightResult="recTowerFightResult";
	return TrialTowerEvent;
})()


//class enem.com.game.guild.GuildEvent
var GuildEvent=(function(){
	function GuildEvent(){}
	__class(GuildEvent,'enem.com.game.guild.GuildEvent');
	GuildEvent.BOOSCHANGE="guildbosschangestage";
	return GuildEvent;
})()


//class enem.com.game.fightpower.PowerUtil
var PowerUtil=(function(){
	function PowerUtil(){}
	__class(PowerUtil,'enem.com.game.fightpower.PowerUtil');
	PowerUtil.GetAttributeRate=function(aType){
		if (PowerUtil._attPowerHash==null){
			PowerUtil._attPowerHash=new Dictionary();
			var arr=JSONUtil.decode(GlobalData.GetString(37));
			for (var i=0;i < arr.length;i++){
				PowerUtil._attPowerHash.set(arr[i][0],arr[i][1]);
			}
		}
		if (PowerUtil._attPowerHash.get(aType)!=null)
			return PowerUtil._attPowerHash.get(aType);
		return PowerUtil._attPowerHash.get(aType);
	}

	PowerUtil.GetAttrPower=function(type,value,multi){
		(multi===void 0)&& (multi=1);
		return TextUtil.numToFixed(value*multi,0)*PowerUtil.GetAttributeRate(type);
	}

	PowerUtil.GetAttListPower=function(list){
		if (list==null)
			return 0;
		var list1=AttributeUtil.CombineSameAttr(list);
		var ret=0;
		for (var i=0;i < list1.length;++i){
			ret+=PowerUtil.GetAttrPower(list1[i].type,list1[i].value,list1[i].multi);
		}
		return Math.floor(ret);
	}

	PowerUtil._attPowerHash=null;
	return PowerUtil;
})()


/**
*包裹类型
*/
//class enem.com.game.auction.backpack.enum.EnumBackpackType
var EnumBackpackType=(function(){
	function EnumBackpackType(){}
	__class(EnumBackpackType,'enem.com.game.auction.backpack.enum.EnumBackpackType');
	EnumBackpackType.NO=0;
	EnumBackpackType.EQUIP=1;
	EnumBackpackType.ITEM=2;
	EnumBackpackType.ZHOUSHU=3;
	EnumBackpackType.MIBAO=4;
	EnumBackpackType.COMBINE=-1;
	return EnumBackpackType;
})()


/**
*升阶配置
*/
//class enem.com.game.upgrade.UpgradeConfig
var UpgradeConfig=(function(){
	function UpgradeConfig(t){
		this.type=0;
		this.maxlevel=0;
		this.level_config=new Dictionary();
		this.type=t;
		var list=Q_upgradeContainer.list;
		for (var i=0;i < list.length;++i){
			if (list[i].q_type==this.type){
				this.level_config.set(list[i].q_level,list[i]);
				this.maxlevel=Math.max(this.maxlevel,list[i].q_level);
			}
		}
	}

	__class(UpgradeConfig,'enem.com.game.upgrade.UpgradeConfig');
	var __proto=UpgradeConfig.prototype;
	__proto.GetModel=function(level){
		return this.level_config.get(level);
	}

	__proto.GetMode2=function(fashionID){
		var values=this.level_config.values;
		var cfg;
		for(var i=0;i < values.length;i++){
			cfg=values[i];
			if(cfg.q_show==fashionID)
				return cfg;
		}
		return null;
	}

	return UpgradeConfig;
})()


//class enem.com.game.zhoushu.event.ZhouShuEvent
var ZhouShuEvent=(function(){
	function ZhouShuEvent(){}
	__class(ZhouShuEvent,'enem.com.game.zhoushu.event.ZhouShuEvent');
	ZhouShuEvent.ZHOUSHU_DISPOSE="zhoushu_dispose";
	ZhouShuEvent.ZHOUSHU_REPLACE="zhoushu_replace";
	ZhouShuEvent.ZHOUSHU_UPGRADE="zhoushu_upgrade";
	ZhouShuEvent.ZHOUSHU_GRID_CHANGE="zhoushu_grid_change";
	return ZhouShuEvent;
})()


/**
*分解类型
*/
//class enem.com.game.items.enum.EnumDisposeType
var EnumDisposeType=(function(){
	function EnumDisposeType(){}
	__class(EnumDisposeType,'enem.com.game.items.enum.EnumDisposeType');
	EnumDisposeType.EQUIP=1;
	EnumDisposeType.JINZHUANG=2;
	EnumDisposeType.HONGZHUANG=3;
	EnumDisposeType.FABAO=4;
	EnumDisposeType.ZHOUSHU=5;
	EnumDisposeType.YUHUN=6;
	EnumDisposeType.FIT_GEM=7;
	EnumDisposeType.PET_DISBAND=8;
	return EnumDisposeType;
})()


/**
*数值型货币枚举
*/
//class enem.com.game.attribute.Util.EnumCurrency
var EnumCurrency=(function(){
	function EnumCurrency(){}
	__class(EnumCurrency,'enem.com.game.attribute.Util.EnumCurrency');
	EnumCurrency.toMID=function(type){
		if (EnumCurrency._currency_mid==null)EnumCurrency.MapItemAndCurrency();
		return EnumCurrency._currency_mid[type];
	}

	EnumCurrency.toCurrency=function(mid){
		if (EnumCurrency._currency_mid==null)EnumCurrency.MapItemAndCurrency();
		return EnumCurrency._mid_currency[mid];
	}

	EnumCurrency.isCurrency=function(mid){
		var c=EnumCurrency.toCurrency(mid);
		return c !=null;
	}

	EnumCurrency.MapItemAndCurrency=function(){
		if (EnumCurrency._currency_mid !=null)return;
		EnumCurrency._currency_mid={};
		EnumCurrency._mid_currency={};
		var itemtypes=[
		1,
		2,
		12,
		9,
		34,
		37,
		38,
		41,
		60];
		var currency=[
		1,
		2,
		3,
		9,
		12,
		10,
		11,
		7,
		13];
		var list=Q_itemContainer.list;
		for (var i=0;i < list.length;++i){
			var idx=itemtypes.indexOf(list[i].q_type);
			if (idx !=-1 && parseInt(list[i].q_param)==1){
				EnumCurrency._currency_mid[currency[idx]]=list[i].q_id;
				EnumCurrency._mid_currency[list[i].q_id]=currency[idx];
			}
		}
	}

	EnumCurrency.GOLD=1;
	EnumCurrency.MONEY=2;
	EnumCurrency.ZHOUSHUJINGHUA=3;
	EnumCurrency.EMPTY_CITY_SCORE=7;
	EnumCurrency.BIND_GOLD=9;
	EnumCurrency.SAN_GUO_BI=10;
	EnumCurrency.XUNBAO_JIFEN=11;
	EnumCurrency.GUILD_CONTRIBUTION=12;
	EnumCurrency.PET_EXP=13;
	EnumCurrency._currency_mid=null;
	EnumCurrency._mid_currency=null;
	return EnumCurrency;
})()


//class enem.com.game.lilian.event.ShimenEvent
var ShimenEvent=(function(){
	function ShimenEvent(){}
	__class(ShimenEvent,'enem.com.game.lilian.event.ShimenEvent');
	ShimenEvent.CHALLENGE_END="shimen_challege_end";
	ShimenEvent.STAR_CHANGE="shimen_star";
	ShimenEvent.GET_INFO="shimen_get_info";
	ShimenEvent.ROUND_PRIZE="shimen_round_prize";
	return ShimenEvent;
})()


/**
*@author Administrator
*/
//class enem.com.game.attribute.AttributeUtil
var AttributeUtil=(function(){
	function AttributeUtil(){}
	__class(AttributeUtil,'enem.com.game.attribute.AttributeUtil');
	AttributeUtil.GetAttributeName=function(type,autoBlank){
		(autoBlank===void 0)&& (autoBlank=true);
		var str;
		if ((typeof type=='string'))
			type=parseInt(type);
		switch (type){
			case 1 :
				str=TextUtil.FormatStr("生命");
				break ;
			case 2 :
				str=TextUtil.FormatStr("速度");
				break ;
			case 3 :
				str=TextUtil.FormatStr("攻击");
				break ;
			case 4 :
				str=TextUtil.FormatStr("防御");
				break ;
			case 5 :
				str=TextUtil.FormatStr("命中");
				break ;
			case 6 :
				str=TextUtil.FormatStr("闪避");
				break ;
			case 7 :
				str=TextUtil.FormatStr("暴击");
				break ;
			case 8 :
				str=TextUtil.FormatStr("抗暴");
				break ;
			case 9 :
				str=TextUtil.FormatStr("魂击");
				break ;
			case 10 :
				str=TextUtil.FormatStr("抗魂");
				break ;
			case 11 :
				str=TextUtil.FormatStr("无视防御");
				break ;
			case 12 :
				str=TextUtil.FormatStr("减免无视");
				break ;
			case 13 :
				str=TextUtil.FormatStr("伤害增加");
				break ;
			case 14 :
				str=TextUtil.FormatStr("伤害减少");
				break ;
			case 15 :
				str=TextUtil.FormatStr("伤害加成");
				break ;
			case 16 :
				str=TextUtil.FormatStr("伤害减免");
				break ;
			case 17 :
				str=TextUtil.FormatStr("暴伤加成");
				break ;
			case 18 :
				str=TextUtil.FormatStr("暴伤减免");
				break ;
			case 19 :
				str=TextUtil.FormatStr("PVP加伤");
				break ;
			case 20 :
				str=TextUtil.FormatStr("PVP减伤");
				break ;
			case 21 :
				str=TextUtil.FormatStr("PVE加伤");
				break ;
			case 22 :
				str=TextUtil.FormatStr("PVE减伤");
				break ;
			case 23 :
				str=TextUtil.FormatStr("经验加成");
				break ;
			case 24 :
				str=TextUtil.FormatStr("银两加成");
				break ;
			case 25 :
				str=TextUtil.FormatStr("经验收益");
				break ;
			case 26 :
				str=TextUtil.FormatStr("银两收益");
				break ;
			case 27 :
				str=TextUtil.FormatStr("武将加伤");
				break ;
			case 28 :
				str=TextUtil.FormatStr("武将减伤");
				break ;
			case 29 :
				str=TextUtil.FormatStr("红颜加伤");
				break ;
			case 30 :
				str=TextUtil.FormatStr("红颜减伤");
				break ;
			case 31 :
				str=TextUtil.FormatStr("军师加伤");
				break ;
			case 32 :
				str=TextUtil.FormatStr("军师减伤");
				break ;
			case 33 :
				str=TextUtil.FormatStr("蛮将加伤");
				break ;
			case 46 :
				str=TextUtil.FormatStr("灭蜀");
				break ;
			case 48 :
				str=TextUtil.FormatStr("灭吴");
				break ;
			case 47 :
				str=TextUtil.FormatStr("灭魏");
				break ;
			case 49 :
				str=TextUtil.FormatStr("灭群");
				break ;
			case 50 :
				str=TextUtil.FormatStr("抗蜀");
				break ;
			case 52 :
				str=TextUtil.FormatStr("抗吴");
				break ;
			case 51 :
				str=TextUtil.FormatStr("抗魏");
				break ;
			case 53 :
				str=TextUtil.FormatStr("抗群");
				break ;
			case 58 :
				str=TextUtil.FormatStr("试炼之塔主角上阵属性");
				break ;
			case 59 :
				str=TextUtil.FormatStr("试炼之塔机关上阵属性");
				break ;
			case 60 :
				str=TextUtil.FormatStr("试炼之塔魏国阵营武将上阵属性");
				break ;
			case 61 :
				str=TextUtil.FormatStr("试炼之塔蜀国阵营武将上阵属性");
				break ;
			case 62 :
				str=TextUtil.FormatStr("试炼之塔吴国阵营武将上阵属性");
				break ;
			case 63 :
				str=TextUtil.FormatStr("试炼之塔群雄阵营武将上阵属性");
				break ;
			default :
				break ;
			}
		return LanUtil.GetLanStr(str);
	}

	AttributeUtil.IsPercentAttr=function(type){
		return EnumAttribute.PERCENT_ATTRS.indexOf(type)!=-1;
	}

	AttributeUtil.IsNeedShow=function(type){
		return true;
	}

	AttributeUtil.JArrStrToAttList=function(str,ratio){
		(ratio===void 0)&& (ratio=1);
		var list=JSONUtil.decode(str);
		if (list==null)
			return null;
		var ret=[];
		AttributeUtil.JArrToAttList(list,ret,ratio);
		return ret;
	}

	AttributeUtil.JArrToAttList2=function(strList,ratio){
		(ratio===void 0)&& (ratio=1);
		var ret=[];
		AttributeUtil.JArrToAttList(strList,ret,ratio);
		return ret;
	}

	AttributeUtil.JArrStrToIntList=function(str){
		var list=JSONUtil.decode(str);
		if (list==null)
			return null;
		var ret=[];
		for (var i=0;i < 34;++i){
			ret.push(0);
		}
		for (var i=0;i < list.length;++i){
			ret[list[i][0]-1]=list[i][1];
		}
		return ret;
	}

	AttributeUtil.JArrStrToIntList2=function(str){
		var list=JSONUtil.decode(str);
		if (list==null)
			return null;
		var ret=[];
		for (var i=0;i < 34;++i){
			ret.push(long.create(0));
		}
		for (var i=0;i < list.length;++i){
			ret[list[i][0]-1]=long.create(list[i][1]);
		}
		return ret;
	}

	AttributeUtil.JArrToAttList=function(strList,attList,ratio){
		(ratio===void 0)&& (ratio=1);
		var attVo;
		var att;
		for(var $each_att in strList){
			att=strList[$each_att];
			if (att==null)
				continue ;
			attVo=new AttributeVo();
			attVo.type=att[0];
			attVo.value=Math.floor(att[1] *ratio);
			attList.push(attVo);
		}
	}

	AttributeUtil.JStrToAttribute=function(str){
		var obj=JSONUtil.decode(str);
		var attVo=new AttributeVo();
		attVo.type=Math.floor(obj[0]);
		attVo.value=Math.floor(obj[1]);
		return attVo;
	}

	AttributeUtil.JArrStrToAttDic=function(str){
		var list=JSONUtil.decode(str);
		if (list==null)
			return null;
		var ret=new Object();
		var attVo;
		var att;
		for(var $each_att in list){
			att=list[$each_att];
			if (att==null)
				continue ;
			attVo=new AttributeVo();
			attVo.type=parseInt(att[0]);
			attVo.value=parseInt(att[1]);
			ret[attVo.type]=attVo;
		}
		return ret;
	}

	AttributeUtil.JArrToAttDic=function(attri){
		if (attri==null)
			return null;
		var ret=new Object();
		var attVo;
		var $each_attVo;
		for($each_attVo in attri){
			attVo=attri[$each_attVo];
			if (attVo==null)
				continue ;
			ret[attVo.type]=attVo;
		}
		return ret;
	}

	AttributeUtil.AttListSub=function(minuend,sub){
		if (minuend==null || sub==null)
			return;
		var i=0;
		var minVo;
		var retVo;
		var vo;
		for(var $each_vo in sub){
			vo=sub[$each_vo];
			retVo=null;
			for (i=0;i < minuend.length;++i){
				minVo=minuend[i];
				if (retVo !=null){
					if (minVo.type==retVo.type){
						if (minVo.value < retVo.value){
							retVo.value-=minVo.value;
							continue ;
						}
						else {
							if (minVo.value > retVo.value)
								minVo.value-=retVo.value;
							else
							minuend.splice(i,1);
							break ;
						}
					}
				}
				if (minVo.type==vo.type){
					if (minVo.value < vo.value){
						retVo=minVo;
						retVo.value=vo.value-minVo.value;
						continue ;
					}
					else {
						if (minVo.value > vo.value)
							minVo.value-=vo.value;
						else
						minuend.splice(i,1);
						break ;
					}
				}
			}
		}
	}

	AttributeUtil.AttDicSub=function(minuend,sub){
		if (minuend==null || sub==null)
			return;
		var minVo;
		var retVo;
		var vo;
		for(var $each_vo in sub){
			vo=sub[$each_vo];
			retVo=null;
			var $each_minVo;
			for($each_minVo in minuend){
				minVo=minuend[$each_minVo];
				if (retVo !=null){
					if (minVo.type==retVo.type){
						if (minVo.value < retVo.value){
							retVo.value-=minVo.value;
							continue ;
						}
						else {
							if (minVo.value > retVo.value)
								minVo.value-=retVo.value;
							else
							delete minuend[minVo.type];
							break ;
						}
					}
				}
				if (minVo.type==vo.type){
					if (minVo.value < vo.value){
						retVo=minVo;
						retVo.value=vo.value-minVo.value;
						continue ;
					}
					else {
						if (minVo.value > vo.value)
							minVo.value-=vo.value;
						else
						delete minuend[minVo.type];
						break ;
					}
				}
			}
		}
	}

	AttributeUtil.AttListAddToDic=function(dic,list,useClone){
		(useClone===void 0)&& (useClone=false);
		var vo;
		for(var $each_vo in list){
			vo=list[$each_vo];
			if (dic[vo.type]==null){
				if (useClone){
					dic[vo.type]=vo.Clone();
				}
				else {
					dic[vo.type]=vo;
				}
			}
			else
			dic[vo.type].value+=vo.value;
		}
	}

	AttributeUtil.AttListAddToList=function(toList,list,useClone){
		(useClone===void 0)&& (useClone=false);
		if (toList==null || list==null)
			return;
		var isFind=false;
		var vo;
		for(var $each_vo in list){
			vo=list[$each_vo];
			isFind=false;
			var hasVo;
			for(var $each_hasVo in toList){
				hasVo=toList[$each_hasVo];
				if (hasVo.type==vo.type){
					isFind=true;
					hasVo.value=hasVo.value *hasVo.multi+vo.value *vo.multi;
					hasVo.multi=1;
					continue ;
				}
			}
			if (!isFind){
				if (useClone){
					toList.push(vo.Clone());
				}
				else {
					toList.push(vo);
				}
			}
		}
	}

	AttributeUtil.AttrListMulRatio=function(list,ratio,isnew){
		(isnew===void 0)&& (isnew=true);
		if (isnew){
			var ret=[];
			for (var i=0;i < list.length;++i){
				var vo=new AttributeVo();
				vo.type=list[i].type;
				vo.value=Math.floor(list[i].value *ratio);
				ret.push(vo);
			}
			return ret;
		}
		else {
			for (var i=0;i < list.length;++i){
				list[i].value=Math.floor(list[i].value *ratio);
			}
			return list;
		}
	}

	AttributeUtil.CombineSameAttr=function(list){
		var ret=[];
		var len=list?list.length:0;
		for (var i=0;i < len;++i){
			if(Browser.inWeChat)
				ret.push(list[i].Clone());
			else{
				var arr=ret.filter(f=function(item,index,arr){
					if (item.type==list[i].type)
						return true;
					return false;
				});
				if (arr.length > 0)
					arr[0].Combin(list[i]);
				else if(list[i]){
					ret.push(list[i].Clone());
				}
			}
		}
		return ret;
	}

	AttributeUtil.AddNewAttributeType=function(src,dst){
		var ret=src.concat();
		var needAdd=false;
		for (var i=0;i < dst.length;++i){
			needAdd=true;
			for (var j=0;j < src.length;++j){
				if (src[j].type==dst[i].type){
					needAdd=false;
					break ;
				}
			}
			if (needAdd){
				ret.push(dst[i].Clone());
				ret[ret.length-1].value=0;
			}
		}
		ret=AttributeUtil.SortAttrList(ret);
		return ret;
	}

	AttributeUtil.SortAttrList=function(list,compareF){
		if (compareF==null){
			return list.sort(function(i1,i2){
				if (i1.type < i2.type)
					return-1;
				else if (i1.type > i2.type)
				return 1;
				return 0;
			});
		}
		else {
			return list.sort(compareF);
		}
	}

	AttributeUtil.hashAddToHash=function(mainHash,addHash){
		var keys=addHash.keys;
		var val=0;
		var key;
		for(var $each_key in keys){
			key=keys[$each_key];
			if (mainHash.containsKey(key)){
				val=mainHash.getValue(key)+addHash.getValue(key);
				if (val==0)
					mainHash.remove(key);
				else
				mainHash.put(key,val);
			}
			else
			mainHash.put(key,addHash.getValue(key));
		}
	}

	AttributeUtil.AttDicMulVal=function(dic,val){
		var att;
		for(var $each_att in dic){
			att=dic[$each_att];
			att.value *=val;
		}
	}

	AttributeUtil.AttListMulVal=function(list,val){
		var att;
		for(var $each_att in list){
			att=list[$each_att];
			att.value *=val;
		}
	}

	AttributeUtil.AttListMulVal2=function(list,multi){
		if (list==null)
			return;
		var att;
		for(var $each_att in list){
			att=list[$each_att];
			att.multi *=multi;
		}
	}

	AttributeUtil.AttListToVos=function(list){
		var vos=[];
		if (list !=null){
			var vo;
			for (var i=0;i < list.length;++i){
				vo=new AttributeVo();
				vo.type=i+1;
				vo.value=list[i];
				vos.push(vo);
			}
		}
		return vos;
	}

	AttributeUtil.AttListToVos2=function(list){
		var vos=[];
		if (list !=null){
			var vo;
			for (var i=0;i < list.length;++i){
				vo=new AttributeVo();
				vo.type=i+1;
				vo.value=list[i].fValue;
				vos.push(vo);
			}
		}
		return vos;
	}

	AttributeUtil.AttrLongToNum=function(list){
		var vos=[];
		if (list !=null){
			for (var i=0;i < list.length;++i){
				var num=list[i].fValue;
				vos.push(num);
			}
		}
		return vos;
	}

	AttributeUtil.AttVosToIntList=function(list){
		var ret=EnumAttribute.ZeroList.concat();
		for (var i=0;i < list.length;++i){
			ret[list[i].type]=list[i].value;
		}
		return ret;
	}

	AttributeUtil.jsonStrToList=function(str,multi){
		(multi===void 0)&& (multi=1);
		if (str==null)
			return null;
		var list=[];
		var arr=JSONUtil.decode2(str);
		var len=arr.length;
		var vo;
		for (var i=0;i < len;i++){
			vo=new AttributeVo();
			vo.type=arr[i][0];
			vo.value=arr[i][1];
			vo.multi=multi;
			list.push(vo);
		}
		return list;
	}

	AttributeUtil.getAttrListNameArr=function(list,color,size){
		var arr=[];
		var len=list !=null ? list.length :0;
		for (var i=0;i < len;i++){
			arr.push(TextUtil.ToHtml(list[i].GetString3(),color,size));
		}
		return arr;
	}

	AttributeUtil.CloneAttrArr=function(src){
		var tar=[];
		var vo;
		for(var $each_vo in src){
			vo=src[$each_vo];
			var temp=vo.Clone();
			tar.push(temp);
		}
		return tar;
	}

	AttributeUtil.removeEmptyAttr=function(list,isNew){
		(isNew===void 0)&& (isNew=false);
		var len=list!=null?list.length:0;
		if(len==0)
			return list;
		var i=0;
		var vo;
		if(isNew){
			var vec=[];
			for(i=0;i < len;i++){
				vo=list[i];
				if(vo !=null && vo.attrValue !=0)
					vec.push(vo);
			}
			return vec;
		}
		for(i=len=1;i >=0;i--){
			vo=list[i];
			if(vo==null || vo.attrValue==0)
				list.splice(i,1);
		}
		return list;
	}

	AttributeUtil.getAttrValue=function(list,attrType){
		if (list !=null){
			var vo;
			for(var $each_vo in list){
				vo=list[$each_vo];
				if (vo.type==attrType)
					return vo.attrValue;
			}
		}
		return 0;
	}

	AttributeUtil.getpuerAttr=function(list){
		var len=list ? list.length :0;
		var Attri=[];
		for (var i=0;i < len;++i){
			if (list[i].value){
				Attri.push(list[i]);
			}
		}
		return Attri;
	}

	AttributeUtil.getBaseAttr=function(list){
		if (list && list.length > 4){
			return list.splice(0,4);
		}
		return list;
	}

	AttributeUtil.tsfAttrInt2long=function(list){
		var ret=[];
		if (list !=null){
			for (var i=0;i < list.length;i++){
				ret.push(long.create(list[i]));
			}
		}
		return ret;
	}

	AttributeUtil.AttrIsNull=function(list){
		if (list==null || list.length)return true;
		for (var i=0;i < list.length;++i){
			if (list[i].fValue !=0){
				return false;
			}
		}
		return true;
	}

	AttributeUtil.SuitAtt1=function(type,num){
		var Str=Q_equip_suitContainer.GetValue(type).q_attr;
		var attArr=JSONUtil.decode(Str);
		var Power=0;
		if(num>=3){
			var VecAt=AttributeUtil.JArrToAttList2(attArr[3]);
			Power+=AttributeUtil.GetAttListPower(VecAt);
		}
		if(num>=6){
			var VecAt=AttributeUtil.JArrToAttList2(attArr[6]);
			Power+=AttributeUtil.GetAttListPower(VecAt);
		}
		if(num>=10){
			var VecAt=AttributeUtil.JArrToAttList2(attArr[10]);
			Power+=AttributeUtil.GetAttListPower(VecAt);
		}
		return Power;
	}

	AttributeUtil.GetAttListPower=function(list){
		if (list==null)
			return 0;
		var list1=enem.com.game.attribute.AttributeUtil.CombineSameAttr(list);
		var ret=0;
		for (var i=0;i < list1.length;++i){
			ret+=AttributeUtil.GetAttrPower(list1[i].type,list1[i].value,list1[i].multi);
		}
		return Math.floor(ret);
	}

	AttributeUtil.GetAttrPower=function(type,value,multi){
		(multi===void 0)&& (multi=1);
		return TextUtil.numToFixed(value*multi,0)*AttributeUtil.GetAttributeRate(type);
	}

	AttributeUtil.GetAttributeRate=function(aType){
		if (AttributeUtil._attPowerHash==null){
			AttributeUtil._attPowerHash=new Dictionary();
			var arr=JSONUtil.decode(GlobalData.GetString(37));
			for (var i=0;i < arr.length;i++){
				AttributeUtil._attPowerHash.set(arr[i][0],arr[i][1]);
			}
		}
		if (AttributeUtil._attPowerHash.get(aType)!=null)
			return AttributeUtil._attPowerHash.get(aType);
		return AttributeUtil._attPowerHash.get(aType);
	}

	AttributeUtil.SuitAtt=function(type){
		var Str=Q_equip_suitContainer.GetValue(type).q_attr;
		var attArr=JSONUtil.decode(Str);
		return attArr;
	}

	AttributeUtil._attPowerHash=null;
	return AttributeUtil;
})()


//class enem.com.game.gear.vo.GearVo
var GearVo=(function(){
	function GearVo(){
		this.jihuoSkills=null;
		this.noJihuoSkills=null;
		this.needJihuoSkills=null;
		this.awaysSkills=null;
		this.lingzhuang=[];
		this.feishengQianghua=[];
		this.faqis=[];
		this.skills=[];
	}

	__class(GearVo,'enem.com.game.gear.vo.GearVo');
	var __proto=GearVo.prototype;
	__proto.SetData=function(bean){
		this.lingzhuang=bean.lingzhuang;
		this.feishengQianghua=bean.feishengQianghua;
		this.faqis=bean.faqis;
		this.setSkills(bean.skills);
	}

	__proto.setSkills=function(beans){
		this.skills=beans;
		this.jihuoSkills=[];
		this.noJihuoSkills=[];
		for(var i=0;i<this.skills.length;i++){
			this.jihuoSkills.push(this.skills[i].id);
		};
		var list=this.GetNeedJihuoSkills;
		for(var i=0;i<list.length;i++){
			if(this.jihuoSkills.indexOf(list[i])==-1){
				this.noJihuoSkills.push(list[i]);
			}
		}
		EventCenter.Event("CHANGE_SKILL");
	}

	__proto.ReplaceXilian=function(id,bean){
		var b=this.GetFaqi(id);
		b.xilian=bean;
	}

	__proto.ReplaceSkill=function(faqi,skills){
		var b=this.GetFaqi(faqi);
		b.xilian.skills=skills;
		b.xilian.xilianSkills.length=0;
	}

	__proto.GetFaqi=function(id){
		for (var i=0;i < this.faqis.length;++i){
			if (this.faqis[i].id==id){
				return this.faqis[i];
			}
		}
		return null;
	}

	__proto.getXiLianCount=function(id){
		for (var i=0;i < this.faqis.length;++i){
			if(this.faqis[i] !=null && this.faqis[i].id==id)
				return this.faqis[i].xilian.xilianTimes;
		}
		return 0;
	}

	/**
	*获取所有法器技能
	*@return
	*/
	__proto.GetFaQiUISkillBeans=function(){
		var ret=[];
		for (var i=0;i < this.faqis.length;++i){
			if(this.isFaqiOpen(i+1)){
				if(this.faqis[i].xilian !=null && this.faqis[i].xilian.skills !=null && this.faqis[i].xilian.skills.length >=4)
					ret.push(this.faqis[i].xilian.skills[3]);
				else
				ret.push(null);
			}
			else{
				ret.push(null);
			}
		}
		return ret;
	}

	/**
	*法器是否开放
	*@param id
	*@return
	*/
	__proto.isFaqiOpen=function(id){
		var num=Q_xuannv_faqiContainer.GetValue(id).q_open;
		if (num==0)return true;
		var vo=this.GetFaqi(id-1);
		return vo?vo.xilian.xilianTimes>=num:false;
	}

	__proto.GetMinGrid=function(){
		var g=1;
		var v=9999999;
		for (var i=0;i < this.feishengQianghua.length;++i){
			if (this.feishengQianghua[i] < v){
				g=i+1;
				v=this.feishengQianghua[i];
			}
		}
		return g;
	}

	__proto.GetForgeLevel=function(gridId){
		return this.feishengQianghua[gridId-1];
	}

	__getset(0,__proto,'JihuoSkills',function(){
		return this.jihuoSkills;
	});

	__getset(0,__proto,'NoJihuoSkills',function(){
		return this.noJihuoSkills;
	});

	__getset(0,__proto,'GetAwaysSkills',function(){
		if(this.awaysSkills==null){
			this.awaysSkills=JSONUtil.decode(Q_xuannv_paramContainer.GetValue(3).q_value);
		}
		return this.awaysSkills;
	});

	__getset(0,__proto,'GetNeedJihuoSkills',function(){
		if(this.needJihuoSkills==null){
			this.needJihuoSkills=JSONUtil.decode(Q_xuannv_paramContainer.GetValue(5).q_value);
		}
		return this.needJihuoSkills;
	});

	GearVo.RES_ID=3002;
	return GearVo;
})()


/**押镖（草船借箭）配置表data**/
//class enem.com.game.activity.data.EscortData
var EscortData=(function(){
	function EscortData(cfg){
		this._q_payload=null;
		/**押镖奖励**/
		this._rewards=null;
		/**抢劫奖励**/
		this._hijackRewards=null;
		this._q_payload=cfg;
	}

	__class(EscortData,'enem.com.game.activity.data.EscortData');
	var __proto=EscortData.prototype;
	__getset(0,__proto,'q_payload',function(){
		return this._q_payload;
	});

	__getset(0,__proto,'rewards',function(){
		if(this._rewards==null && this._q_payload.q_prize)
			this._rewards=ItemUtil.JsonStringToItemList(this._q_payload.q_prize);
		return this._rewards;
	});

	__getset(0,__proto,'hijackRewards',function(){
		if(this._hijackRewards==null && this._q_payload.q_lveduo)
			this._hijackRewards=ItemUtil.JsonStringToItemList(this._q_payload.q_lveduo);
		return this._hijackRewards;
	});

	return EscortData;
})()


//class enem.com.game.touzijihua.touzievent.TouZiEvents
var TouZiEvents=(function(){
	function TouZiEvents(){}
	__class(TouZiEvents,'enem.com.game.touzijihua.touzievent.TouZiEvents');
	TouZiEvents.TOUZICHANGE="TOUZICHANGE";
	return TouZiEvents;
})()


/**
*技能类型
**/
//class enem.com.game.skill.enums.EnumSkillType
var EnumSkillType=(function(){
	function EnumSkillType(){}
	__class(EnumSkillType,'enem.com.game.skill.enums.EnumSkillType');
	EnumSkillType.PLAYER=1;
	EnumSkillType.MONSTER=2;
	EnumSkillType.XILIAN=3;
	EnumSkillType.WUJIANG=4;
	EnumSkillType.TONGLING=5;
	EnumSkillType.SHOUHUN=6;
	EnumSkillType.HORSE=7;
	EnumSkillType.WING=8;
	EnumSkillType.SHENBIN=9;
	EnumSkillType.JINGLING=10;
	EnumSkillType.HUANIAN=11;
	EnumSkillType.LINGQI=12;
	EnumSkillType.XUANNV_ZHUDONG=13;
	EnumSkillType.JS_NO=1;
	return EnumSkillType;
})()


/**
*屏蔽字
*@author Raizo
*
*/
//class enem.com.game.stringfilter.MaskStringMgr
var MaskStringMgr$1=(function(){
	function MaskStringMgr(){
		this.initWordFilter();
	}

	__class(MaskStringMgr,'enem.com.game.stringfilter.MaskStringMgr',null,'MaskStringMgr$1');
	var __proto=MaskStringMgr.prototype;
	__proto.initWordFilter=function(){
		var arr=[];
		SensitiveWordFilter$1.regSensitiveWords(arr);
	}

	/**
	*检查聊天中否有字要屏蔽
	*@param info
	*@return
	*
	*/
	__proto.checkChatWords=function(info){
		return SensitiveWordFilter$1.containsBadWords(info);
	}

	/**
	*检查名字中是否有字要屏蔽
	*@param info
	*@return
	*
	*/
	__proto.checkNameWords=function(info){
		var result=SensitiveWordFilter$1.containsBadWords(info);
		if(!result){
			var i;
			for(var $each_i in MaskStringMgr.CHAT_FACE_WORD){
				i=MaskStringMgr.CHAT_FACE_WORD[$each_i];
				if(info.indexOf(i)!=-1){
					result=true;
					break ;
				}
			}
		}
		return result;
	}

	/**
	*得到屏蔽字
	*@param info 要屏蔽的字
	*@return
	*
	*/
	__proto.matchChatWords=function(msg){
		return SensitiveWordFilter$1.replaceSensitiveWord(msg);
	}

	/**
	*得到屏蔽字 (名字中要屏蔽 表情特殊符号)
	*@param info 要屏蔽的字
	*@return
	*
	*/
	__proto.matchNameWords=function(msg){
		var word=SensitiveWordFilter$1.replaceSensitiveWord(msg);
		var i;
		for(var $each_i in MaskStringMgr.CHAT_FACE_WORD){
			i=MaskStringMgr.CHAT_FACE_WORD[$each_i];
			var myPattern=new RegExp(i,'g');
			word=word.replace(myPattern,'*');
		}
		return word;
	}

	MaskStringMgr.GetInstance=function(){
		if(MaskStringMgr._instance==null){
			MaskStringMgr._instance=new MaskStringMgr();
		}
		return MaskStringMgr._instance;
	}

	MaskStringMgr._instance=null;
	__static(MaskStringMgr,
	['Ins',function(){return this.Ins=new MaskStringMgr();},'CHAT_FACE_WORD',function(){return this.CHAT_FACE_WORD=["#","<",">"];}
	]);
	return MaskStringMgr;
})()


//class enem.com.game.stringfilter.SensitiveWordFilter
var SensitiveWordFilter$1=(function(){
	function SensitiveWordFilter(){}
	__class(SensitiveWordFilter,'enem.com.game.stringfilter.SensitiveWordFilter',null,'SensitiveWordFilter$1');
	SensitiveWordFilter.regSensitiveWords=function(words){
		SensitiveWordFilter.treeRoot=new TreeNode();
		SensitiveWordFilter.treeRoot.value="";
		var words_len=words.length;
		for (var i=0;i < words_len;i++){
			var word=words[i];
			var len=word.length;
			var currentBranch=SensitiveWordFilter.treeRoot;
			for (var c=0;c < len;c++){
				var char=word.charAt(c);
				var tmp=currentBranch.getChild(char);
				if (tmp){
					currentBranch=tmp;
				}
				else{
					currentBranch=currentBranch.addChild(char);
				}
			}
			currentBranch.isEnd=true;
		}
	}

	SensitiveWordFilter.replaceSensitiveWord=function(dirtyWords){
		var char;
		var curTree=SensitiveWordFilter.treeRoot;
		var childTree;
		var curEndWordTree;
		var dirtyWord;
		var c=0;
		var endIndex=0;
		var headIndex=-1;
		while (c < dirtyWords.length){
			char=dirtyWords.charAt(c);
			childTree=curTree.getChild(char);
			if (childTree){
				if (childTree.isEnd){
					curEndWordTree=childTree;
					endIndex=c;
				}
				if (headIndex==-1){
					headIndex=c;
				}
				curTree=childTree;
				c++;
			}
			else{
				if (curEndWordTree){
					dirtyWord=curEndWordTree.getFullWord();
					dirtyWords=dirtyWords.replace(dirtyWord,SensitiveWordFilter.getReplaceWord(dirtyWord.length));
					c=endIndex;
				}
				else if (curTree !=SensitiveWordFilter.treeRoot){
					c=headIndex;
					headIndex=-1;
				}
				curTree=SensitiveWordFilter.treeRoot;
				curEndWordTree=null;
				c++;
			}
		}
		if (curEndWordTree){
			dirtyWord=curEndWordTree.getFullWord();
			dirtyWords=dirtyWords.replace(dirtyWord,SensitiveWordFilter.getReplaceWord(dirtyWord.length));
		}
		return dirtyWords;
	}

	SensitiveWordFilter.containsBadWords=function(dirtyWords){
		var char;
		var curTree=SensitiveWordFilter.treeRoot;
		var childTree;
		var curEndWordTree;
		var dirtyWord;
		var c=0;
		var endIndex=0;
		var headIndex=-1;
		while (c < dirtyWords.length){
			char=dirtyWords.charAt(c);
			childTree=curTree.getChild(char);
			if (childTree){
				if (childTree.isEnd){
					curEndWordTree=childTree;
					endIndex=c;
				}
				if (headIndex==-1){
					headIndex=c;
				}
				curTree=childTree;
				c++;
			}
			else{
				if (curEndWordTree){
					dirtyWord=curEndWordTree.getFullWord();
					dirtyWords=dirtyWords.replace(dirtyWord,SensitiveWordFilter.getReplaceWord(dirtyWord.length));
					c=endIndex;
					return true;
				}
				else if (curTree !=SensitiveWordFilter.treeRoot){
					c=headIndex;
					headIndex=-1;
				}
				curTree=SensitiveWordFilter.treeRoot;
				curEndWordTree=null;
				c++;
			}
		}
		if (curEndWordTree){
			return true;
			dirtyWord=curEndWordTree.getFullWord();
			dirtyWords=dirtyWords.replace(dirtyWord,SensitiveWordFilter.getReplaceWord(dirtyWord.length));
		}
		return false;
	}

	SensitiveWordFilter.getReplaceWord=function(len){
		var replaceWord="";
		for (var i=0;i < len;i++){
			replaceWord+="*";
		}
		return replaceWord;
	}

	SensitiveWordFilter.treeRoot=null;
	return SensitiveWordFilter;
})()


//class enem.com.game.duihuan.enums.EnumDuihuan
var EnumDuihuan=(function(){
	function EnumDuihuan(){}
	__class(EnumDuihuan,'enem.com.game.duihuan.enums.EnumDuihuan');
	EnumDuihuan.FEISHENG=1;
	return EnumDuihuan;
})()


/**
*@author Administrator
*/
//class enem.com.game.util.GridUtil
var GridUtil=(function(){
	function GridUtil(){}
	__class(GridUtil,'enem.com.game.util.GridUtil');
	/**获得飞升阶段id**/
	__getset(1,GridUtil,'fsStep',function(){
		if (GridUtil._fsStep==0){
			var list=Q_xuannv_feishengContainer.list;
			var cfg;
			for(var $each_cfg in list){
				cfg=list[$each_cfg];
				if (cfg.q_stage==3){
					GridUtil._fsStep=cfg.q_level-1;
					break ;
				}
			}
		}
		return GridUtil._fsStep;
	});

	GridUtil.SetItemGridByIdSimple=function(grid,mid,num,hasTip,showDesc){
		(hasTip===void 0)&& (hasTip=true);
		(showDesc===void 0)&& (showDesc=true);
		var item=ItemUtil.ItemIdToItem(mid,num);
		if (hasTip){
			var tips=new ItemTipsData();
			tips.item=item;
		};
		var extra=ItemGridParam.TEMP.Reset();
		extra.showDescTxt=showDesc;
		return GridUtil.SetItemGrid(grid,item,tips,extra);
	}

	GridUtil.SetItemGridById=function(grid,mid,num,extra,hasTip){
		(hasTip===void 0)&& (hasTip=true);
		var item=ItemUtil.ItemIdToItem(mid,num);
		if (hasTip){
			var tips=new ItemTipsData();
			tips.item=item;
		}
		return GridUtil.SetItemGrid(grid,item,tips,extra);
	}

	GridUtil.SetItemGridSimple=function(grid,item,hasTip,hasDesc){
		(hasTip===void 0)&& (hasTip=true);
		(hasDesc===void 0)&& (hasDesc=true);
		var tips;
		if (hasTip){
			tips=new ItemTipsData();
			tips.item=item;
		};
		var param;
		if (!hasDesc){
			param=ItemGridParam.TEMP.Reset();
			param.showDescTxt=false;
		}
		return GridUtil.SetItemGrid(grid,item,tips,param);
	}

	GridUtil.SetItemGrid=function(grid,item,varGet,extra){
		if (item==null)
			return false;
		if (extra==null)
			extra=ItemGridParam.TEMP.Reset();
		if (grid==null)
			return false;
		grid.Clean();
		grid.tag=item;
		GridUtil.SetItemGridIcon(grid,item,extra);
		GridUtil.SetQualityEff(grid,item,extra);
		GridUtil.SetGetEff(grid,extra.isShowGetEff);
		if (varGet !=null){
			if (extra.tipOpenType !=0)
				varGet.openType=extra.tipOpenType;
			grid.SetTips(varGet,ItemUtil.GetItemTips(item.modelId,extra.isPetuse));
		}
		if (item !=null && extra.hasItemFlag)
			GridUtil.AddItemFlag(grid,item,extra);
		if (extra.showNum)
			GridUtil.AddItemNum(grid,item.modelId,item.num,extra);
		if (extra.showDescTxt){
			if (extra.showDescType==0){
				if (item.name.length > 5){
					GridUtil.AddGridDescText(grid,item.name.slice(0,4)+"..",item.colorStr,extra.showDescInv,extra.DescStroke,extra.isBold);
					}else {
					GridUtil.AddGridDescText(grid,item.name,item.colorStr,extra.showDescInv,extra.DescStroke,extra.isBold);
				}
			}
			else
			GridUtil.AddGridDescText(grid,PlayerUtil.GetLevelShow(item.zs,item.level),"#FF7113",extra.showDescInv,extra.DescStroke,extra.isBold);
		}
		if (item.type==22){
			GridUtil.AddUpgradeEquipLab(grid,item);
		}
		return true;
	}

	GridUtil.SetGetEff=function(grid,isShow){
		if (isShow){
			var eff=UIEffect2D.CreateUI(10160);
			grid.addChild(eff);
			eff.pos(grid.width / 2,grid.height / 2)
		}
	}

	GridUtil.SetItemGridIcon=function(grid,item,extra){
		if (extra==null)
			extra=ItemGridParam.TEMP.Reset();
		var iconurl;
		var w=0;
		var h=0;
		if (item.modelId==EnumItem.ITEM_BINDGOLD){
			iconurl=ItemUtil.GetItemIconUrl(item.modelId);
			w=GridUtil.CalcIconSize(grid);
			h=w;
			}else {
			iconurl=ItemUtil.GetItemIconUrl(item.modelId);
			w=GridUtil.CalcIconSize(grid);
			h=w;
		}
		grid.SetIcon(iconurl,w,h);
		grid.SetIconType(ResUrl.getItemTypeURL(item!=null?item.type:0));
	}

	GridUtil.SetQualityEff=function(grid,item,extra){
		if (extra==null)
			extra=new ItemGridParam();
		var generalQuality=0;
		var itemequip=null;
		if (item.model !=null){
			var quality=item.quality;
			if (generalQuality !=0){
				quality=generalQuality;
			}
			if (extra.forceQuality > quality)
				quality=extra.forceQuality;
			if((item instanceof enem.com.game.items.obj.ItemEquip ))
				itemequip=item;
			var star=itemequip ? itemequip.star:0;
			var equip2=equipUtil.GetEquippromoteVoByMid(star);
			var showquality=equip2? equip2.showquality:0;
			if(showquality !=0)
				quality=showquality;
			if (extra.isShowQualityBorder){
				UITool.SetUIImage(grid,ResUrl.GetItemQualityKey(quality));
				}{
				GridUtil.AddGridEffect(grid,quality,extra.shapeType);
			}
		}
	}

	GridUtil.SetItemGridFlag=function(grid,item,extra){
		if (grid==null)
			return;
		grid.DisposeFlagDisplay();
		GridUtil.AddItemFlag(grid,item,extra);
		if (extra !=null && extra.showNum)
			GridUtil.AddItemNum(grid,item.modelId,item.num,extra);
	}

	GridUtil.AddGridEffect=function(grid,type,shapeType,showMaxSize){
		(shapeType===void 0)&& (shapeType=0);
		(showMaxSize===void 0)&& (showMaxSize=-1);
		var effId=0;
		var offX=0;
		var offY=0;
		if (type==1)
			effId=0;
		else if (type==2)
		effId=0;
		else if (type==3)
		effId=10122;
		else if (type==4)
		effId=10123;
		else if (type==5)
		effId=10124;
		else if (type==6)
		effId=10126;
		if (effId==0)
			return;
		var mode="add";
		if(type==5 || type==6)
			mode="normal";
		var eff=UIEffect2D.Create(5,effId,0,true,mode);
		if (eff==null)
			return;
		eff.x=grid.width *0.5-offX;
		eff.y=grid.height *0.5-offY;
		var scale=grid.width / 98;
		if (showMaxSize==-1)
			eff.scale(scale,scale);
		else
		eff.scale(scale,scale);
		grid.AddTopDisplay(eff);
	}

	GridUtil.AddItemFlag=function(grid,item,extra){
		var posX=0;
		var posY=0;
		var spr;
		var sx=grid.width / 94;
	}

	GridUtil.GetItemFlagImage=function(index,data){
		(data===void 0)&& (data=0);
		var spr=null;
		switch (index){
			case 1 :
				spr=UITool.GetSprite(ResUrl.GetPrefessionIcon(data),true,33,31);
				break ;
			case 2:
				spr=UITool.GetSprite("other/backpack/yishixiao.png",true,20,20);
				break ;
			case 3:
				spr=UITool.GetSprite("other/chuanshi/flag/"+data+".png",true,33,32);
				break ;
			}
		if (spr==null)
			spr=new Sprite();
		return spr;
	}

	GridUtil.AddItemNum=function(grid,mid,num,extra){
		if (num==0){
			return;
		}
		if (num > 1){
			var color=(extra !=null ? extra.textColor :"#ffffff");
			grid.SetTextLayout(4,-2,-1);
			grid.SetText(TextUtil.FormatNum(num),color);
			grid.text.strokeColor="#000000";
			grid.text.stroke=2;
		}
	}

	GridUtil.AddGridDescText=function(grid,desc,color,inv,stroke,isBold){
		(inv===void 0)&& (inv=2);
		(stroke===void 0)&& (stroke=true);
		(isBold===void 0)&& (isBold=false);
		var lab=new Text();
		lab.color=color;
		lab.fontSize=18;
		lab.align="center";
		lab.text=desc;
		lab.bold=isBold;
		lab.x=(grid.width-lab.width)/ 2;
		lab.y=(grid.height+inv);
		if (stroke){
			lab.stroke=2;
			lab.strokeColor="#3c1f08";
		}
		grid.AddFlagDisplay(lab);
	}

	GridUtil.AddUpgradeEquipLab=function(grid,item){
		var str="";
		if ((item instanceof enem.com.game.items.obj.ItemUpgradeEquip )&& (item).upgradeType==10)
			str=TextUtil.FormatStr("{@}阶",[Math.max(0,(item).jie-GridUtil.fsStep)]);
		else
		str=TextUtil.FormatStr("{@}阶",[item.UpgrateLv]);
		grid.setTopText(str,"#ffd200",1,"#080808");
	}

	GridUtil.CalcIconSize=function(grid){
		return Math.floor(grid.width / 94 *80);
	}

	GridUtil.SetItemGridSim=function(grid,item,openType,extra){
		(openType===void 0)&& (openType=1);
		var tips=new ItemTipsData();
		tips.openType=openType;
		tips.item=item;
		return GridUtil.SetItemGrid(grid,item,tips,extra);
	}

	GridUtil.ITEM_GRID_SIZE=94;
	GridUtil.ITEM_ICON_SIZE=80;
	GridUtil._fsStep=0;
	return GridUtil;
})()


//class enem.com.game.items.ItemUtil
var ItemUtil=(function(){
	function ItemUtil(){}
	__class(ItemUtil,'enem.com.game.items.ItemUtil');
	ItemUtil.ItemInfoToItem=function(info){
		var qItem=Q_itemContainer.GetValue(info.configID);
		if (qItem==null){
			ToolBase.Log("client dont has itemcfg [ItemInfoToItem]"+info.configID.toString());
			qItem=Q_itemContainer.GetValue(0);
			if (qItem==null)
				return null;
		};
		var ret=ItemFactory.Ins.Get(qItem.q_type);
		ret.SetInfo(info);
		return ret;
	}

	ItemUtil.FitItemInfoToItem=function(info){
		var qItem=Q_itemContainer.GetValue(info.item);
		if (qItem==null){
			ToolBase.Log("client dont has itemcfg [ItemInfoToItem]"+info.item.toString());
			qItem=Q_itemContainer.GetValue(0);
			if (qItem==null)
				return null;
		};
		var ret=ItemFactory.Ins.Get(qItem.q_type);
		ret.SetFitEquipInfo(info);
		return ret;
	}

	ItemUtil.ItemInfosToItems=function(itemInfos){
		var items=[];
		var item;
		for (var i=0;i < itemInfos.length;i++){
			item=enem.com.game.items.ItemUtil.ItemInfoToItem(itemInfos[i]);
			items.push(item);
		}
		return items;
	}

	ItemUtil.itemBeanToItem=function(bean){
		return ItemUtil.ItemIdToItem(bean.id,bean.num);
	}

	ItemUtil.itemBeansToItemList=function(beanList){
		var list=[];
		var len=beanList !=null ? beanList.length :0;
		var item;
		for (var i=0;i < len;i++){
			item=ItemUtil.itemBeanToItem(beanList[i]);
			if (item !=null)
				list.push(item);
		}
		return list;
	}

	ItemUtil.isItemEnough=function(item,funcuse,func){
		return item !=null ? ItemUtil.isItemEnough2(item.modelId,funcuse ,func,item.num):true;
	}

	ItemUtil.isItemEnough2=function(id,funcuse,func,num){
		(num===void 0)&& (num=1);
		var have=func.apply(funcuse,[id]);
		return have >=num;
	}

	ItemUtil.isItemsEnough=function(list,funcuse,func){
		if (list !=null){
			var item;
			for(var $each_item in list){
				item=list[$each_item];
				if (!ItemUtil.isItemEnough(item,funcuse,func))
					return false;
			}
		}
		return true;
	}

	ItemUtil.isItemsEnough3=function(ids,funcuse,func){
		if (ids !=null){
			if ((ids instanceof Array)){
				var id;
				for(var $each_id in ids){
					id=ids[$each_id];
					if (ItemUtil.isItemEnough2(id,funcuse,func))
						return true;
				}
			}
			if ((typeof ids=='string')){
				var arr=(ids).split(",");
				var id;
				for(var $each_id in arr){
					id=arr[$each_id];
					if (ItemUtil.isItemEnough2(id,funcuse,func))
						return true;
				}
			}
		}
		return false;
	}

	ItemUtil.GoodsNumToItem=function(info){
		var qItem=Q_itemContainer.GetValue(info.id);
		if (qItem==null){
			ToolBase.Log("client dont has itemcfg [ItemInfoToItem]"+info.id.toString());
			qItem=Q_itemContainer.GetValue(0);
			if (qItem==null)
				return null;
		};
		var ret=ItemFactory.Ins.Get(qItem.q_type);
		ret.SetGoodNumBean(info);
		return ret;
	}

	ItemUtil.GoodsNumsToItems=function(itemInfos){
		var items=[];
		var item;
		for (var i=0;i < itemInfos.length;i++){
			item=enem.com.game.items.ItemUtil.GoodsNumToItem(itemInfos[i]);
			items.push(item);
		}
		return items;
	}

	ItemUtil.ItemIdToItem=function(itemId,num,itemBind){
		(num===void 0)&& (num=1);
		(itemBind===void 0)&& (itemBind=0);
		var itemm=Q_itemContainer.GetValue(itemId);
		if (itemm==null)
			return null;
		var item=ItemFactory.Ins.Get(itemm.q_type);
		item.modelId=itemId;
		item.num=num;
		item.isBind=itemBind==1;
		return item;
	}

	ItemUtil.IsEquip=function(type){
		return type==4;
	}

	ItemUtil.IsCommonEquip=function(type,kind){
		if (!ItemUtil.IsEquip(type))
			return false;
		return kind==1 ||
		kind==4 ||
		kind==2 ||
		kind==3 ||
		kind==7 ||
		kind==8 ||
		kind==6 ||
		kind==10;
	}

	ItemUtil.IsCurrency=function(type){
		return ItemUtil.CURRENCY.indexOf(type)!=-1;
	}

	ItemUtil.IsOther=function(type){
		return !ItemUtil.IsEquip(type);
	}

	ItemUtil.IsZhanwen=function(type){
		return type==11;
	}

	ItemUtil.GetItemPacket=function(mid){
		var model=Q_itemContainer.GetValue(mid);
		if (model==null)
			return 0;
		return model.q_packet;
	}

	ItemUtil.GetItemNameByModel=function(model,showColor,size){
		(showColor===void 0)&& (showColor=false);
		(size===void 0)&& (size=18);
		if (model==null)
			return "?";
		var name=model.q_name;
		var pos=name.indexOf("_");
		if (pos !=-1)
			name=name.substr(0,pos);
		if (showColor){
			name=TextUtil.GetHtmlStr(name,ColorUtil$1.getQualityColor(model.q_quality),size);
		}
		return name;
	}

	ItemUtil.getItemName=function(qid){
		var q_item=Q_itemContainer.GetValue(qid);
		return q_item !=null ? q_item.q_name :"";
	}

	ItemUtil.GetItemNameByMId=function(mid,showColor,size){
		(showColor===void 0)&& (showColor=false);
		(size===void 0)&& (size=18);
		return ItemUtil.GetItemNameByModel(Q_itemContainer.GetValue(mid),showColor,size);
	}

	ItemUtil.GetItemNameByItem=function(item,showColor,size){
		(showColor===void 0)&& (showColor=false);
		(size===void 0)&& (size=18);
		if ((item instanceof enem.com.game.items.obj.ItemEquip )){
			return ItemUtil.GetItemNameByModel(item.model,showColor,size);
			}else {
			return ItemUtil.GetItemNameByModel(item.model,showColor,size);
		}
	}

	ItemUtil.GetItemQualityByItem=function(item){
		if ((item instanceof enem.com.game.items.obj.ItemEquip )){
			return ItemUtil.GetItemQualityByMod(item.model);
			}else {
			return ItemUtil.GetItemQualityByMod(item.model);
		}
	}

	ItemUtil.GetItemQualityByMid=function(mid){
		return ItemUtil.GetItemQualityByMod(Q_itemContainer.GetValue(mid));
	}

	ItemUtil.GetItemQualityByMod=function(model){
		if (model==null)
			return 0;
		return model.q_quality;
	}

	ItemUtil.GetItemQTDes=function(type){
		switch (type){
			case 1 :
				return "绿";
			case 2 :
				return "蓝";
			case 3 :
				return "紫";
			case 4 :
				return "橙";
			case 5 :
				return "红";
			case 6 :
				return "金";
			default :
				return "白";
			}
	}

	ItemUtil.GetItemQTDesAll=function(type){
		var Str="白";
		switch (type){
			case 1 :
				Str="绿";
				break ;
			case 2 :
				Str="蓝";
				break ;
			case 3 :
				Str="紫";
				break ;
			case 4 :
				Str="橙";
				break ;
			case 5 :
				Str="红";
				break ;
			case 6 :
				Str="金";
				break ;
			}
		return Str+"色品质";
	}

	ItemUtil.GetItemColorStrByMid=function(mid){
		return ColorUtil$1.getQualityColor(ItemUtil.GetItemQualityByMid(mid));
	}

	ItemUtil.GetItemColorStr=function(type){
		return ColorUtil$1.getQualityColor(type);
	}

	ItemUtil.GetItemIcon=function(id){
		return UITool.GetSprite(ItemUtil.GetItemIconUrl(id),true,80,80);
	}

	ItemUtil.GetItemIconUrl=function(id){
		return ResUrl.GetItemIconKey(id);
	}

	ItemUtil.GetEquipTypeStr=function(type){
		var str;
		switch (type){
			case 1 :
				str=TextUtil.FormatStr("武器");
				break ;
			case 4 :
				str=TextUtil.FormatStr("盔甲");
				break ;
			case 2 :
				str=TextUtil.FormatStr("头盔");
				break ;
			case 3 :
				str=TextUtil.FormatStr("项链");
				break ;
			case 7 :
				str=TextUtil.FormatStr("护腕");
				break ;
			case 8 :
				str=TextUtil.FormatStr("戒指");
				break ;
			case 6 :
				str=TextUtil.FormatStr("腰带");
				break ;
			case 10 :
				str=TextUtil.FormatStr("鞋子");
				break ;
			default :
				str=TextUtil.FormatStr("装备");
				break ;
			}
		return LanUtil.GetLanStr(str);
	}

	ItemUtil.GetItemKindByMid=function(mid){
		var p=ItemConfigFactory.Ins.Get(mid);
		if (p !=null && p["gridId"] !=null)
			return p["gridId"];
		return 0;
	}

	ItemUtil.GetItemTypeByMid=function(mid){
		var model=Q_itemContainer.GetValue(mid);
		if (model==null)
			return-1;
		return model.q_type;
	}

	ItemUtil.GetUseLevel=function(mid){
		var level=0;
		var itemm=Q_itemContainer.GetValue(mid);
		if (itemm !=null){
			level=itemm.q_level;
		}
		return level;
	}

	ItemUtil.GetUseZS=function(mid){
		var level=0;
		var itemm=Q_itemContainer.GetValue(mid);
		if (itemm !=null){
			level=itemm.q_zhuansheng;
		}
		return level;
	}

	ItemUtil.FilterOneItem=function(item,checkMask,o){
		var model=Q_itemContainer.GetValue(item.modelId);
		if (model==null)
			return null;
		if (((checkMask & 0x2)!=0)){
			var ckLevel=0;
			if (o !=null && o.hasOwnProperty("level"))
				ckLevel=o["level"];
			ckLevel=model.q_level;
			if (!(ckLevel >=model.q_level))
				return null;
		}
		return item;
	}

	ItemUtil.ItemsForGridGroupArr=function(list,gdg,gridparam){
		var Vec=[];
		var len=list ? list.length :0;
		for (var i=0;i < len;i++){
			Vec.push(list[i]);
		}
		ItemUtil.ItemsForGridGroupPure(Vec,gdg,gridparam);
	}

	ItemUtil.ItemsForGridGroupPure=function(filterdItems,gdg,gridparam){
		gdg.Clean();
		var Ishid=false;
		if (gridparam==null){
			gridparam=ItemGridParam.TEMP.Reset();
			Ishid=gridparam.showDescTxt;
			}else {
			Ishid=gridparam.showDescTxt;
		}
		if (filterdItems !=null){
			for (var i=0;i < filterdItems.length;++i){
				gridparam.showDescTxt=Ishid;
				if (ItemUtil.GetItemTypeByMid(filterdItems[i].modelId)==4){
					gridparam.showDescType=1;
					}else {
					gridparam.showDescType=0;
				}
				gdg.AddItem(filterdItems[i],gridparam);
			}
		}
	}

	ItemUtil.JsonStringForGridGroup=function(str,gdg,gridparam,numparam,checkMask){
		(checkMask===void 0)&& (checkMask=-1);
		if (checkMask==-1){
			checkMask=0x1;
		}
		ItemUtil.ItemsForGridGroupPure(ItemUtil.JsonStringToItemList(str,checkMask),gdg,gridparam);
	}

	ItemUtil.ItemsForGridGroup=function(items,gdg,gridparam,numparam,checkMask){
		(checkMask===void 0)&& (checkMask=-1);
		if (items==null)return;
		if (checkMask==-1){
			checkMask=0x1;
		};
		var filteritem=[];
		for (var i=0;i < items.length;++i){
			var numo=(numparam !=null && (numparam instanceof Array)? numparam[i] :numparam);
			if (ItemUtil.FilterOneItem(items[i],checkMask,numo))
				filteritem.push(items[i]);
		}
		ItemUtil.ItemsForGridGroupPure(filteritem,gdg,gridparam);
	}

	ItemUtil.CloneItemList=function(src){
		var ret=[];
		var item;
		for(var $each_item in src){
			item=src[$each_item];
			ret.push(item.Clone());
		}
		return ret;
	}

	ItemUtil.JsonStringToItemList=function(str,checkMask,numparam){
		(checkMask===void 0)&& (checkMask=0);
		var o=JSONUtil.decode(str);
		if (o==null)
			return null;
		return ItemUtil.ItemStrArrToItemList(o,checkMask,numparam);
	}

	ItemUtil.JsonStringToItemsList=function(str,checkMask,numparam){
		(checkMask===void 0)&& (checkMask=0);
		var o=JSONUtil.decode(str);
		if (o==null)
			return null;
		var ret=[];
		var len=o.length;
		for (var i=0;i < len;i++){
			ret.push(ItemUtil.ItemStrArrToItemList(o[i],checkMask,numparam));
		}
		return ret;
	}

	ItemUtil.ItemStrArrToItemList=function(o,checkMask,numparam){
		(checkMask===void 0)&& (checkMask=0);
		var ret=[];
		var pi=null;
		if ((o instanceof Array)){
			var arr=o;
			for (var i=0;i < arr.length;++i){
				var numo=(numparam !=null && (numparam instanceof Array))? numparam[i] :numparam;
				pi=ItemUtil.FilterOneItem(ItemUtil.JsonObjectToItem(arr[i],numo),checkMask);
				if (pi !=null){
					ret.push(pi);
				}
			}
			}else if ((typeof o=='object')){
			pi=ItemUtil.FilterOneItem(ItemUtil.JsonObjectToItem(o,numparam),checkMask);
			if (pi !=null){
				ret.push(pi);
			}
		}
		return ret;
	}

	ItemUtil.JsonStringToItem=function(str,numparam){
		return ItemUtil.JsonObjectToItem(JSONUtil.decode(str),numparam);
	}

	ItemUtil.JsonObjectToItem=function(o,numparam){
		var mid=o[0];
		var model=Q_itemContainer.GetValue(mid);
		if (model==null)
			model=Q_itemContainer.GetValue(0);
		var item=null;
		if (model !=null){
			item=ItemFactory.Ins.Get(model.q_type);
			item.SetJsonObject(o,numparam);
			}else {
			item=new Item();
		}
		return item;
	}

	ItemUtil.ItemsAdd=function(a,b){
		var ret=[];
		var retite=null;
		var combineLast=null;
		var itea;
		for(var $each_itea in a){
			itea=a[$each_itea];
			combineLast=itea;
			var $each_retite;
			for($each_retite in ret){
				retite=ret[$each_retite];
				combineLast=retite.Combine(itea);
				if (combineLast==null){
					break ;
				}
			}
			if (combineLast !=null){
				ret.push(combineLast);
			}
		}
		var iteb;
		for(var $each_iteb in b){
			iteb=b[$each_iteb];
			combineLast=iteb;
			var $each_retite;
			for($each_retite in ret){
				retite=ret[$each_retite];
				combineLast=retite.Combine(iteb);
				if (combineLast==null){
					break ;
				}
			}
			if (combineLast !=null){
				ret.push(combineLast);
			}
		}
		return ret;
	}

	ItemUtil.ItemsMul=function(a,mul){
		var ret=[];
		var retite=null;
		var combineLast=null;
		var itea;
		for(var $each_itea in a){
			itea=a[$each_itea];
			combineLast=itea;
			var $each_retite;
			for($each_retite in ret){
				retite=ret[$each_retite];
				combineLast=retite.Combine(combineLast);
				if (combineLast==null){
					break ;
				}
			}
			if (combineLast !=null){
				ret.push(combineLast);
			}
		}
		var $each_retite;
		for($each_retite in ret){
			retite=ret[$each_retite];
			retite.num=retite.num *mul;
		}
		return ret;
	}

	ItemUtil.ItemsCombine=function(a){
		var ret=[];
		var retite=null;
		var combineLast=null;
		var itea;
		for(var $each_itea in a){
			itea=a[$each_itea];
			combineLast=itea;
			var $each_retite;
			for($each_retite in ret){
				retite=ret[$each_retite];
				combineLast=retite.Combine(itea);
				if (combineLast==null){
					break ;
				}
			}
			if (combineLast !=null){
				ret.push(combineLast);
			}
		}
		return ret;
	}

	ItemUtil.ItemsDec=function(a,b){
		var aaa=ItemUtil.ItemsCombine(a);
		var bbb=ItemUtil.ItemsCombine(b);
		var combineLast=null;
		var ret=[];
		var itea;
		for(var $each_itea in aaa){
			itea=aaa[$each_itea];
			combineLast=itea;
			var iteb;
			for(var $each_iteb in bbb){
				iteb=bbb[$each_iteb];
				combineLast=itea.Dec(iteb);
				if (combineLast==null){
					break ;
				}
			}
			if (combineLast !=null){
				ret.push(combineLast);
			}
		}
		return ret;
	}

	ItemUtil.ItemsCombineClone=function(aItems,bItems){
		if (aItems==null || bItems==null)
			return null;
		var ret=[];
		var aItem;
		var bItem;
		var $each_aItem;
		for($each_aItem in aItems){
			aItem=aItems[$each_aItem];
			ret.push(aItem.Clone());
		};
		var rItem;
		var $each_bItem;
		for($each_bItem in bItems){
			bItem=bItems[$each_bItem];
			rItem=null;
			var $each_aItem;
			for($each_aItem in ret){
				aItem=ret[$each_aItem];
				rItem=aItem.Combine(bItem);
				if (rItem==null)
					break ;
			}
			if (rItem !=null)
				ret.push(bItem.Clone());
		}
		return ret;
	}

	ItemUtil.ItemsAddToItems=function(toItems,addItems){
		if (toItems==null || addItems==null)
			return;
		var item;
		var isAdd=false;
		var aItem;
		for(var $each_aItem in addItems){
			aItem=addItems[$each_aItem];
			if (aItem.isEquip){
				toItems.push(aItem);
				continue ;
			}
			isAdd=false;
			var $each_item;
			for($each_item in toItems){
				item=toItems[$each_item];
				if (aItem.modelId !=item.modelId)
					continue ;
				if (aItem.isBind !=item.isBind)
					continue ;
				item.num+=aItem.num;
				isAdd=true;
			}
			if (!isAdd)
				toItems.push(aItem);
		}
	}

	ItemUtil.GetItemDropIcon=function(mid,num){
		var ret=new MSprite();
		var url=ResUrl.GetItemIconKey(mid);
		ret.size(42,42);
		ret.graphics.loadImage(url,0,0,42,42);
		return ret;
	}

	ItemUtil.SortItemFunc=function(itemA,itemB){
		if (itemA==null || itemB==null)
			return 0;
		if (itemA.modelId < itemB.modelId)
			return-1;
		else if (itemA.modelId > itemB.modelId)
		return 1;
		else
		return 0;
	}

	ItemUtil.SortItemFunc2=function(itemA,itemB){
		if (itemA==null || itemB==null)
			return 0;
		if (itemA.levelnum > itemB.levelnum)
			return-1;
		else if (itemA.levelnum < itemB.levelnum)
		return 1;
		else
		return 0;
	}

	ItemUtil.sortItem=function(itemA,itemB){
		if (itemA.power > itemB.power)
			return 1;
		if (itemA.power < itemB.power)
			return-1;
		if (itemA.modelId < itemB.modelId)
			return-1;
		else if (itemA.modelId > itemB.modelId)
		return 1;
		return 0;
	}

	ItemUtil.sortItem2=function(itemA,itemB){
		if (itemA.power > itemB.power)
			return 1;
		if (itemA.power < itemB.power)
			return-1;
		if (itemA.modelId < itemB.modelId)
			return-1;
		else if (itemA.modelId > itemB.modelId)
		return 1;
		return 0;
	}

	ItemUtil.sortItem3=function(itemA,itemB){
		if (itemA.power > itemB.power)
			return 1;
		if (itemA.power < itemB.power)
			return-1;
		if (itemA.modelId < itemB.modelId)
			return-1;
		else if (itemA.modelId > itemB.modelId)
		return 1;
		return 0;
	}

	ItemUtil.sortItem4=function(itemA,itemB){
		var miJiA=ItemConfigFactory.Ins.Get(itemA.modelId);
		var miJiB=ItemConfigFactory.Ins.Get(itemB.modelId);
		if (miJiA.fightpower > miJiB.fightpower)
			return 1;
		if (miJiA.fightpower < miJiB.fightpower)
			return-1;
		if (itemA.modelId < itemB.modelId)
			return-1;
		else if (itemA.modelId > itemB.modelId)
		return 1;
		return 0;
	}

	ItemUtil.GetTypeItems=function(type){
		var ret=[];
		for (var i=0;i < Q_itemContainer.list.length;++i){
			var itype=Q_itemContainer.list[i].q_type;
			if (itype==type){
				ret.push(Q_itemContainer.list[i].q_id);
			}
		}
		if (ret.length > 1)
			ret.sort(Array.NUMERIC);
		return ret;
	}

	ItemUtil.GetItemTips=function(mid,boo){
		(boo===void 0)&& (boo=false);
		var model=Q_itemContainer.GetValue(mid);
		if (model==null){
			return "tips/ItemTipsPanel";
		};
		var randimg=model.q_randimg;
		var type=model.q_type;
		if (type==30 && randimg <=0){
			type=3;
		}
		if (type==43 || type==11){
			type=32;
		}
		if (type==22)
			return "tips/UpgradeEquipTipPanel";
		switch (type){
			case 4:{
					return "tips/EquipTipsPanel";
				}
			case 24:{
					if(boo)
					{return "tips/PetTipsPanel";}
					else{return "tips/ItemTipsPanel";}
				}
			case 31:
				return "tips/YuHunTipsPanel";
			case 32:
				return "tips/MingGeTipsPanel";
			case 39:
			case 30:
				return "tips/PetComposePanel";
			case 42:
				return "tips/FitEquipTipsPanel";
			case 45:
				return "illustrate/LllustarteCampCardTipsPanel";
			default :{
					if (FashionUtil.fashionNeedItems.indexOf(mid)!=-1)
						return "tips/FashionTipsPanel";
					return "tips/ItemTipsPanel";
				}
			}
		return "tips/ItemTipsPanel";
	}

	ItemUtil.GetItemWayById=function(mid){
		var Arr;
		if (Q_itemContainer.GetValue(mid)&& Q_itemContainer.GetValue(mid).q_path){
			Arr=JSONUtil.decode(Q_itemContainer.GetValue(mid).q_path);
		}
		return Arr;
	}

	ItemUtil.sortByMid=function(a,b){
		var acfg=(ItemConfigFactory.Ins.Get(a.modelId));
		var bcfg=(ItemConfigFactory.Ins.Get(b.modelId));
		if (acfg.level !=bcfg.level)return acfg.level < bcfg.level ?-1 :1;
		return 0;
	}

	ItemUtil.getDupItemID=function(upgradeType,lv,maxlv,vo){
		if (lv >=maxlv)return 0;
		var list=vo ? vo.getList(36):null;
		var len=list ? list.length :0;
		if (len)
			list.sort(ItemUtil.sortByMid);
		var istype=-1;
		for (var i=0;i < len;++i){
			var item=list[i];
			var cfg=(ItemConfigFactory.Ins.Get(item.modelId));
			if (cfg.type==upgradeType){
				istype=i;
				if (lv==cfg.level-1)
					return item.modelId;
				else if (lv < cfg.level-1)
				return item.modelId;
			}
		}
		if (len && istype !=-1){
			return list[istype].modelId;
		}
		return 0;
	}

	ItemUtil.IsCard=function(GoodId){
		return Q_itemContainer.GetValue(GoodId).q_type==24;
	}

	ItemUtil.IsCardTrea=function(GoodId){
		return Q_itemContainer.GetValue(GoodId).q_type==69;
	}

	ItemUtil.EquipBaseAttr=function(mid){
		var attr=[];
		if (Q_itemContainer.GetValue(mid).q_type==4){
			if (Q_itemContainer.GetValue(mid).q_param || JSONUtil.decode(Q_itemContainer.GetValue(mid).q_param).attr1)
				attr=AttributeUtil.JArrToAttList2(JSONUtil.decode(Q_itemContainer.GetValue(mid).q_param).attr1);
		}
		return attr;
	}

	ItemUtil.getGodlv=function(mid){
		var Str=mid.toString();
		var lv=Str[2]+Str[3];
		return parseInt(lv);
	}

	ItemUtil.getToUpgradeType=function(mid){
		var cfg=Q_itemContainer.GetValue(mid);
		var param=cfg !=null ? cfg.q_param :null;
		if (param !=null){
			var obj=JSONUtil.decode(Q_itemContainer.GetValue(mid).q_param);
			if (obj.hasOwnProperty("type"))
				return parseInt(obj.type);
		}
		return-1;
	}

	ItemUtil.getCondItems=function(mid){
		var info=Q_itemContainer.GetValue(mid);
		return ItemUtil.JsonStringToItemList(info.q_param);
	}

	ItemUtil.getItemUselimit=function(id){
		var info=Q_itemContainer.GetValue(id);
		if (info && info.q_param){
			var obj=JSONUtil.decode(info.q_param);
			if (obj.max){
				return obj.max;
			}
		}
		return 0;
	}

	ItemUtil.isTimeFashion=function(id){
		var Q=Q_itemContainer.GetValue(id);
		var str=Q.q_param2;
		if (str){
			var js=JSONUtil.decode(str);
			if (js.fashion){
				return [js.fashion];
			}
		}
		return null;
	}

	ItemUtil.getItem=function(list,itemID){
		if (list !=null){
			var item;
			for(var $each_item in list){
				item=list[$each_item];
				if (item.modelId==itemID)
					return item.num;
			}
		}
		return 0;
	}

	ItemUtil.OneToTwo=function(Str){
		var a=JSONUtil.decode2(Str);
		var StrEquips="[";
		for(var i=0;i<a.length;i++){
			StrEquips+="[";
			StrEquips+=a[i];
			StrEquips+="]";
			if(i!=a.length-1)
				StrEquips+=",";
		}
		StrEquips+="]";
		return StrEquips;
	}

	ItemUtil.ITEM_QT_WHITE=0;
	ItemUtil.ITEM_QT_GREEN=1;
	ItemUtil.ITEM_QT_BLUE=2;
	ItemUtil.ITEM_QT_PURPLE=3;
	ItemUtil.ITEM_QT_ORANGE=4;
	ItemUtil.ITEM_QT_RED=5;
	ItemUtil.ITEM_QT_GOLD=6;
	ItemUtil.CK_SEX_E=0x1;
	ItemUtil.CK_LEVEL_GE=0x2;
	__static(ItemUtil,
	['IMG_PIC',function(){return this.IMG_PIC=["","wuqi","yifu","toukui","xianglian","huwan","hutui","jiezhi","shoupei","yaodai","xiezi"];},'CURRENCY',function(){return this.CURRENCY=[1,2,5,6,12,15,19,21,22,23,24,25,26,27,28,29,30];}
	]);
	return ItemUtil;
})()


//class enem.com.game.challenge.emptycity.EmptyCityUtil
var EmptyCityUtil$1=(function(){
	function EmptyCityUtil(){}
	__class(EmptyCityUtil,'enem.com.game.challenge.emptycity.EmptyCityUtil',null,'EmptyCityUtil$1');
	__getset(1,EmptyCityUtil,'clearCDNeedItem',function(){
		if(EmptyCityUtil._clearCDNeedItem==null){
			var arr=JSONUtil.decode2(Q_kongchengji_paramContainer.GetValue(3).q_value);
			EmptyCityUtil._clearCDNeedItem=ItemUtil.ItemIdToItem(arr[0][0],arr[0][1]);
		}
		return EmptyCityUtil._clearCDNeedItem;
	});

	__getset(1,EmptyCityUtil,'normalRewardTime',function(){
		if(EmptyCityUtil._normalRewardTime==0)
			EmptyCityUtil._normalRewardTime=parseInt(Q_kongchengji_paramContainer.GetValue(5).q_value);
		return EmptyCityUtil._normalRewardTime;
	});

	__getset(1,EmptyCityUtil,'activeRewardTime',function(){
		if(EmptyCityUtil._activeRewardTime==0)
			EmptyCityUtil._activeRewardTime=parseInt(Q_kongchengji_paramContainer.GetValue(13).q_value);
		return EmptyCityUtil._activeRewardTime;
	});

	EmptyCityUtil.getCitySkin=function(city){
		var cfg=Q_kongchengjiContainer.GetValue(city);
		var skin=cfg!=null?cfg.q_model:0;
		return "res/ui/sg_ui/openfun/emptycity/"+skin+".png";
	}

	EmptyCityUtil.getCityCapacity=function(city){
		var cfg=Q_kongchengjiContainer.GetValue(city);
		return cfg!=null?cfg.q_inside:0;
	}

	EmptyCityUtil.getCityNameBg=function(city){
		var cfg=Q_kongchengjiContainer.GetValue(city);
		var level=cfg!=null?cfg.q_level:0;
		return "res/ui/sg_ui/openfun/emptycity/dengji-"+(5-level)+".png";
	}

	EmptyCityUtil.getCityName=function(city){
		var cfg=Q_kongchengjiContainer.GetValue(city);
		return cfg!=null?cfg.q_name:"";
	}

	EmptyCityUtil.getCityLevel=function(city){
		var cfg=Q_kongchengjiContainer.GetValue(city);
		return cfg!=null?cfg.q_level:0;
	}

	EmptyCityUtil.getNameBg=function(city){
		var capacity=EmptyCityUtil.getCityCapacity(city);
		if(capacity==3)
			return "res/ui/sg_ui/openfun/emptycity/3ren.png";
		if(capacity==2)
			return "res/ui/sg_ui/openfun/emptycity/2ren.png";
		return "res/ui/sg_ui/openfun/emptycity/1ren.png";
	}

	EmptyCityUtil.getYYObj=function(){
		return null;
	}

	EmptyCityUtil._clearCDNeedItem=null;
	EmptyCityUtil._normalRewardTime=0;
	EmptyCityUtil._activeRewardTime=0;
	return EmptyCityUtil;
})()


/**
*进阶事件
*/
//class enem.com.game.upgrade.event.UpgradeEvent
var UpgradeEvent=(function(){
	function UpgradeEvent(){}
	__class(UpgradeEvent,'enem.com.game.upgrade.event.UpgradeEvent');
	UpgradeEvent.UPGRADE="upgrade_recv";
	UpgradeEvent.EQUIP="upgrade_equip";
	UpgradeEvent.CANCEL_AUTO_STATE="CANCEL_AUTO_STATE";
	UpgradeEvent.UPGRADE_SUCC="UPGRADE_SUCC";
	UpgradeEvent.UPDATE_ALL_ILLUSION="UPDATE_ALL_ILLUSION";
	UpgradeEvent.UPDATE_ONE_ILLUSION="UPDATE_ONE_ILLUSION";
	UpgradeEvent.RES_COMMON_WAKEUP="ResCommonWakeUpMessage";
	UpgradeEvent.RES_UPGRADE_EQUIP="ResUpGradeEquipMessage";
	UpgradeEvent.RES_GIFT_INOF="RES_GIFT_INOF";
	return UpgradeEvent;
})()


/**
*属性枚举
*用于客户端和服务器对属性的识别
*这个要和服务器一致
*@author Administrator
*/
//class enem.com.game.attribute.Util.EnumAttribute
var EnumAttribute=(function(){
	function EnumAttribute(){}
	__class(EnumAttribute,'enem.com.game.attribute.Util.EnumAttribute');
	__getset(1,EnumAttribute,'ZeroList',function(){
		if (EnumAttribute._zeroList==null){
			EnumAttribute._zeroList=[];
			for (var i=1;i <=34;++i){
				EnumAttribute._zeroList.push(0);
			}
		}
		return EnumAttribute._zeroList;
	});

	EnumAttribute.isRoleAttr=function(type){
		return EnumAttribute.roleType.indexOf(type)>=0;
	}

	EnumAttribute.HP=1;
	EnumAttribute.SPEED=2;
	EnumAttribute.ATK=3;
	EnumAttribute.DEFENSE=4;
	EnumAttribute.HIT=5;
	EnumAttribute.DODGE=6;
	EnumAttribute.CRIT=7;
	EnumAttribute.CRIT_DEFENSE=8;
	EnumAttribute.SOUL=9;
	EnumAttribute.SOUL_DEFENSE=10;
	EnumAttribute.IGNORE_DEFENSE=11;
	EnumAttribute.IGNORE_DEFENSE_DECREASE=12;
	EnumAttribute.DAMAGE_INCREASE=13;
	EnumAttribute.DAMAGE_DECREASE=14;
	EnumAttribute.DAMAGE_INCREASE_PER=15;
	EnumAttribute.DAMAGE_DECREASE_PER=16;
	EnumAttribute.CRIT_DAMAGE_INCREASE_PER=17;
	EnumAttribute.CRIT_DAMAGE_DECREASE_PER=18;
	EnumAttribute.PVP_INCREASE_PER=19;
	EnumAttribute.PVP_DECREASE_PER=20;
	EnumAttribute.PVE_INCREASE_PER=21;
	EnumAttribute.PVE_DECREASE_PER=22;
	EnumAttribute.HANGUP_EXP=23;
	EnumAttribute.HANGUP_MONEY=24;
	EnumAttribute.HANGUP_EXP_PER=25;
	EnumAttribute.HANGUP_MONEY_PER=26;
	EnumAttribute.WJ_DAMAGE_INCREASE_PER=27;
	EnumAttribute.WJ_DAMAGE_DECREASE_PER=28;
	EnumAttribute.HY_DAMAGE_INCREASE_PER=29;
	EnumAttribute.HY_DAMAGE_DECREASE_PER=30;
	EnumAttribute.JS_DAMAGE_INCREASE_PER=31;
	EnumAttribute.JS_DAMAGE_DECREASE_PER=32;
	EnumAttribute.MJ_DAMAGE_INCREASE_PER=33;
	EnumAttribute.MJ_DAMAGE_DECREASE_PER=34;
	EnumAttribute.MS_DAMAGE_INCREASE_PER=46;
	EnumAttribute.MW_DAMAGE_INCREASE_PER=47;
	EnumAttribute.MWU_DAMAGE_INCREASE_PER=48;
	EnumAttribute.MQ_DAMAGE_INCREASE_PER=49;
	EnumAttribute.KS_DAMAGE_INCREASE_PER=50;
	EnumAttribute.KW_DAMAGE_DECREASE_PER=51;
	EnumAttribute.KWU_DAMAGE_DECREASE_PER=52;
	EnumAttribute.KQ_DAMAGE_DECREASE_PER=53;
	EnumAttribute.PL_DAMAGE_DECREASE_PER=58;
	EnumAttribute.JG_DAMAGE_DECREASE_PER=59;
	EnumAttribute.WZ_DAMAGE_DECREASE_PER=60;
	EnumAttribute.SZ_DAMAGE_DECREASE_PER=61;
	EnumAttribute.WUZ_DAMAGE_DECREASE_PER=62;
	EnumAttribute.QXZ_DAMAGE_DECREASE_PER=63;
	EnumAttribute.MAX=34;
	EnumAttribute.EQUIP_BASE=1000;
	EnumAttribute.EQUIP_WEAPON=1001;
	EnumAttribute.EQUIP_HELMET=1002;
	EnumAttribute.EQUIP_CLOTHES=1003;
	EnumAttribute.EQUIP_NECKLACE=1004;
	EnumAttribute.EQUIP_WRISTER=1005;
	EnumAttribute.EQUIP_BELT=1006;
	EnumAttribute.EQUIP_RING=1007;
	EnumAttribute.EQUIP_SHOES=1008;
	EnumAttribute._zeroList=null;
	__static(EnumAttribute,
	['ROLE_UNSHOW_ATTR',function(){return this.ROLE_UNSHOW_ATTR=[23,24,25,26,27,
		28,29,30,31,32,33,
		34,9,10,61,62,63,60,
		59,58];},'PERCENT_ATTRS',function(){return this.PERCENT_ATTRS=[15,16,17,18,
		19,20,21,22,25,26,27,
		28,29,30,31,32,33,
		34,11,12,46,48,47,49
		,50,52,51,53,58,59,60,
		61,62,63];},'roleType',function(){return this.roleType=[3,1,7];}
	]);
	return EnumAttribute;
})()


//class enem.com.game.skill.events.SkillEvent
var SkillEvent=(function(){
	function SkillEvent(){}
	__class(SkillEvent,'enem.com.game.skill.events.SkillEvent');
	SkillEvent.SKILL_CHANGE="skill_change";
	SkillEvent.SKILL_COOLDOWN_TIME="skill_cooldown";
	SkillEvent.SKILL_UPERROR="skill_uperror";
	return SkillEvent;
})()


//class enem.com.game.fashion.event.FashionEvent
var FashionEvent=(function(){
	function FashionEvent(){}
	__class(FashionEvent,'enem.com.game.fashion.event.FashionEvent');
	FashionEvent.FASHIONGOT="FASHIONGOT";
	FashionEvent.FASHIONWEAR="FASHIONWEAR";
	FashionEvent.FASHION_UPGRADE="FASHION_UPGRADE";
	return FashionEvent;
})()


//class enem.com.game.fit.fitequip.event.FitEquipEvent
var FitEquipEvent=(function(){
	function FitEquipEvent(){}
	__class(FitEquipEvent,'enem.com.game.fit.fitequip.event.FitEquipEvent');
	FitEquipEvent.UPDATE_SPEC_WEAPON_INFO="UPDATE_SPEC_WEAPON_INFO";
	FitEquipEvent.UPDATE_FIT_EQUIP_INFO="UPDATE_FIT_EQUIP_INFO";
	FitEquipEvent.RES_WEAR_EQUIP="RES_WEAR_EQUIP";
	FitEquipEvent.RES_LOCK_CHANGE="RES_LOCK_CHANGE";
	FitEquipEvent.UPDATE_EQUIP_STRENGTH_PANEL="UPDATE_EQUIP_STRENGTH_PANEL";
	FitEquipEvent.UPDATE_EQUIP_STRENGTH_MASTER="UPDATE_EQUIP_STRENGTH_MASTER";
	FitEquipEvent.RES_EQUIP_STRENGTH_RET="RES_EQUIP_STRENGTH_RET";
	FitEquipEvent.UPDATE_EQUIP_WEAR_RED_POINT="UPDATE_EQUIP_WEAR_RED_POINT";
	FitEquipEvent.UPDATE_EQUIP_STRENGTH_RED_POINT="UPDATE_EQUIP_STRENGTH_RED_POINT";
	FitEquipEvent.UPDATE_ZS_STRENGTH_RED_POINT="UPDATE_ZS_STRENGTH_RED_POINT";
	FitEquipEvent.UPDATE_FIT_EQUIP="UPDATE_FIT_EQUIP";
	return FitEquipEvent;
})()


//class enem.com.game.Collect.CollectMgr
var CollectMgr=(function(){
	function CollectMgr(){
		/**是否在采集中**/
		this._isCollecting=false;
	}

	__class(CollectMgr,'enem.com.game.Collect.CollectMgr');
	var __proto=CollectMgr.prototype;
	__getset(0,__proto,'isCollecting',function(){
		return this._isCollecting;
		},function(value){
		this._isCollecting=value;
	});

	__getset(1,CollectMgr,'ins',function(){
		if (CollectMgr._ins==null)
			CollectMgr._ins=new CollectMgr();
		return CollectMgr._ins;
	});

	CollectMgr._ins=null;
	return CollectMgr;
})()


//class enem.com.game.skill.trigger.SkillAttrFormual
var SkillAttrFormual$1=(function(){
	function SkillAttrFormual(){
		this.type=0;
		this.formula=null;
	}

	__class(SkillAttrFormual,'enem.com.game.skill.trigger.SkillAttrFormual',null,'SkillAttrFormual$1');
	return SkillAttrFormual;
})()


//class enem.com.game.battle.common.enum.EnumFightLogType
var EnumFightLogType=(function(){
	function EnumFightLogType(){}
	__class(EnumFightLogType,'enem.com.game.battle.common.enum.EnumFightLogType');
	EnumFightLogType.DAMAGE=4;
	return EnumFightLogType;
})()


//class enem.com.game.activity.data.NineHeavyWeekPrizeData
var NineHeavyWeekPrizeData=(function(){
	function NineHeavyWeekPrizeData($cfg){
		this._cfg=null;
		this._rewards=null;
		this._Rank=0;
		this._cfg=$cfg;
		this._Rank=this._cfg.q_rank;
		this._rewards=ItemUtil.JsonStringToItemList(this._cfg.q_prize);
	}

	__class(NineHeavyWeekPrizeData,'enem.com.game.activity.data.NineHeavyWeekPrizeData');
	var __proto=NineHeavyWeekPrizeData.prototype;
	__getset(0,__proto,'cfg',function(){
		return this._cfg;
		},function(value){
		this._cfg=value;
	});

	__getset(0,__proto,'rewards',function(){
		return this._rewards;
		},function(value){
		this._rewards=value;
	});

	__getset(0,__proto,'Rank',function(){
		return this._Rank;
	});

	return NineHeavyWeekPrizeData;
})()


/**
*至尊boss数据
*/
//class enem.com.game.boss.bean.vo.ZhiZunBossVo
var ZhiZunBossVo=(function(){
	function ZhiZunBossVo(){
		this.beans=[];
	}

	__class(ZhiZunBossVo,'enem.com.game.boss.bean.vo.ZhiZunBossVo');
	var __proto=ZhiZunBossVo.prototype;
	__proto.getCost=function(dungeonId){
		for (var i=0;i < this.beans.length;++i){
			if (this.beans[i].id==dungeonId){
				return this.beans[i].gold;
			}
		}
		return 0;
	}

	__proto.isGoldEnough=function(id,isNotice,vo,promptMgr){
		var bool=vo.GetCurrency(1)>=this.getCost(id);
		if(!bool && isNotice)
			promptMgr.ShowMessage(4);
		return bool;
	}

	return ZhiZunBossVo;
})()


/**
*超级对象池
*
*@author Administrator
*/
//class enem.com.base.pool.SuperPool
var SuperPool=(function(){
	function SuperPool(){}
	__class(SuperPool,'enem.com.base.pool.SuperPool');
	var __proto=SuperPool.prototype;
	__proto.PrintDebug=function(){
		var str="";
		for (var key in SuperPool.dic){
			str+=(key+":"+SuperPool.dic[key].count+"\n");
		}
		return str;
	}

	/**对象池最大缓存个数*/
	__getset(0,__proto,'maxCount',null,function(value){
		if (value < 0 || value==100)
			return;
		var pool;
		for(var $each_pool in SuperPool.dic){
			pool=SuperPool.dic[$each_pool];
			pool.maxCount=value;
		}
	});

	SuperPool.Push=function(obj){
		SuperPool.GetPool(obj).Push(obj);
	}

	SuperPool.Pop=function(c){
		return SuperPool.GetPool(c).Pop();
	}

	SuperPool.GetPool=function(obj){
		var name;
		if (Laya.__isClass(obj))
			name=ClassToolExt.getClassNameByClz(obj);
		else
		name=ClassToolExt.getClassName(obj);
		var pool=SuperPool.dic [name];
		if (pool==null){
			pool=new ObjectPool(100,ClassToolExt.getClassByName(name));
			SuperPool.dic[name]=pool;
		}
		return pool;
	}

	SuperPool.SetPoolMaxCount=function(cls,max){
		if (max < 0 || max==100)
			return;
		SuperPool.GetPool(cls).maxCount=max;
	}

	SuperPool.MAX_COUNT=100;
	__static(SuperPool,
	['dic',function(){return this.dic=new Dictionary();}
	]);
	return SuperPool;
})()


//class enem.com.game.newfunction.enum.EnumOpenType
var EnumOpenType=(function(){
	function EnumOpenType(){}
	__class(EnumOpenType,'enem.com.game.newfunction.enum.EnumOpenType');
	EnumOpenType.OPEN_NOTHING=0;
	EnumOpenType.OPEN_FUNC=1;
	EnumOpenType.OPEN_TYPE_ARROW=2;
	EnumOpenType.OPEN_TYPE_NEW_ARROW=3;
	EnumOpenType.OPEN_TIPS_BUT_FUN=4;
	EnumOpenType.OPEN_talk=1;
	EnumOpenType.OPEN_newfunc=2;
	EnumOpenType.Inbattle="inbattle";
	return EnumOpenType;
})()


/**
*逻辑战斗对象状态
*/
//class enem.com.game.battle.common.enum.EnumBattleLogicState
var EnumBattleLogicState=(function(){
	function EnumBattleLogicState(){}
	__class(EnumBattleLogicState,'enem.com.game.battle.common.enum.EnumBattleLogicState');
	EnumBattleLogicState.WAIT=1;
	EnumBattleLogicState.SKILLNAME=2;
	EnumBattleLogicState.QIANYAO=4;
	EnumBattleLogicState.HOUYAO=5;
	EnumBattleLogicState.DEAD=6;
	EnumBattleLogicState.WAIT_DEAD=7;
	return EnumBattleLogicState;
})()


//class enem.com.game.pata.events.PataEvent
var PataEvent=(function(){
	function PataEvent(){}
	__class(PataEvent,'enem.com.game.pata.events.PataEvent');
	PataEvent.CBT_UPDATE="cbt_update";
	PataEvent.CBT_PAGEPRIZE_UPDATE="cbt_pageprize_update";
	PataEvent.CBT_SAODANG="cbt_saodang";
	PataEvent.LLT_UPDATE="llt_update";
	PataEvent.LLT_SAODANG="llt_saodang";
	PataEvent.YCTT_UPDATE="yctt_update";
	PataEvent.YCTT_BOX_UPDATE="yctt_box_update";
	PataEvent.YCTT_SAODANG="yctt_saodang";
	PataEvent.XYCM_UPDATE="xycm_update";
	PataEvent.XYCM_BOX_UPDATE="xycm_box_update";
	PataEvent.PATAERRO="PATAERRO";
	return PataEvent;
})()


/**
*洗练工具类
*/
//class enem.com.game.XilianUtil.XilianUtil
var XilianUtil=(function(){
	function XilianUtil(){}
	__class(XilianUtil,'enem.com.game.XilianUtil.XilianUtil');
	XilianUtil.GetCostId=function(type){
		var temp=Q_xilian_typeContainer.GetValue(type).q_item;
		var array=JSONUtil.decode(temp);
		return array[0][0];
	}

	XilianUtil.GetCostId2=function(){
		return JSONUtil.decode(Q_pet_paramContainer.GetValue(4).q_value);
	}

	XilianUtil.GetCostId3=function(){
		return JSONUtil.decode(Q_pet_paramContainer.GetValue(5).q_value);
	}

	XilianUtil.GetLockCost=function(type){
		return JSONUtil.decode(Q_xilian_typeContainer.GetValue(type).q_lock_cost);
	}

	XilianUtil.GetStar=function(type,count){
		var star=0;
		var arr=JSONUtil.decode(Q_xilian_typeContainer.GetValue(type).q_star_times);
		for (var i=0;i < arr.length;++i){
			if (arr[i] > count)break ;
			star++;
		}
		return star;
	}

	return XilianUtil;
})()


//class enem.com.game.boss.bean.vo.OneWorldBossVo
var OneWorldBossVo=(function(){
	function OneWorldBossVo(){
		// id
		this.id=0;
		// 剩余血量
		this.hp=0;
		// 最大血量
		this.maxhp=0;
		// 重生时间
		this.reliveTime=0;
		// 争夺人数
		this.count=0;
	}

	__class(OneWorldBossVo,'enem.com.game.boss.bean.vo.OneWorldBossVo');
	var __proto=OneWorldBossVo.prototype;
	__proto.SetData=function(bean){
		this.id=bean.id;
		this.count=bean.count;
		this.hp=bean.hp.fValue;
		this.maxhp=bean.maxHp.fValue;
		if (bean.reliveTime > 0){
			this.reliveTime=(bean.reliveTime *1000);
			}else{
			this.reliveTime=0;
		}
	}

	__proto.isDead=function(serverMTime){
		return this.hp <=0 && this.reliveTime > serverMTime;
	}

	return OneWorldBossVo;
})()


//class enem.com.game.battle.common.EnumBattleBuffid
var EnumBattleBuffid=(function(){
	function EnumBattleBuffid(){}
	__class(EnumBattleBuffid,'enem.com.game.battle.common.EnumBattleBuffid');
	EnumBattleBuffid.CEN_MO=5368709121;
	EnumBattleBuffid.HUN_LUAN=5368709122;
	EnumBattleBuffid.ZHONG_DU=5368709130;
	EnumBattleBuffid.JIAN_LIAO=5368709135;
	EnumBattleBuffid.MA_BI=8589934600;
	EnumBattleBuffid.BAO_LU=8589934601;
	EnumBattleBuffid.DUO_SHAN=4294967298;
	return EnumBattleBuffid;
})()


//class enem.com.game.expedition.burnchibi.EnumBurnType
var EnumBurnType=(function(){
	function EnumBurnType(){}
	__class(EnumBurnType,'enem.com.game.expedition.burnchibi.EnumBurnType');
	EnumBurnType.ALL_IN=0;
	EnumBurnType.WUJIANG_IN=1;
	EnumBurnType.HONGYAN_IN=2;
	EnumBurnType.JUNSHI_IN=3;
	EnumBurnType.MANJIANG_IN=4;
	return EnumBurnType;
})()


//class enem.com.game.gate.vo.ChapterVo
var ChapterVo=(function(){
	function ChapterVo(){
		this.chapterId=0;
		this.subs=[];
	}

	__class(ChapterVo,'enem.com.game.gate.vo.ChapterVo');
	var __proto=ChapterVo.prototype;
	__proto.SetData=function(start,ids){
		for (var i=0;i < ids.length;++i){
			var sub=new ChapterSubVo();
			if (i==0){
				sub.start=start;
				}else{
				sub.start=ids[i-1]+1;
			}
			sub.end=ids[i];
			this.subs.push(sub);
		}
	}

	/**
	*获取子章节
	*@param dungeon
	*@return
	*/
	__proto.GetSubVo=function(dungeon){
		for (var i=0;i < this.subs.length;++i){
			if (dungeon >=this.subs[i].start && dungeon <=this.subs[i].end){
				return this.subs[i];
			}
		}
		return null;
	}

	// 获取子章节序号
	__proto.GetSubIndex=function(dungeon){
		for (var i=0;i < this.subs.length;++i){
			if (dungeon >=this.subs[i].start && dungeon <=this.subs[i].end){
				return i+1;
			}
		}
		return 0;
	}

	/**
	*本章节是否包含副本ID
	*@param dungeonId
	*@return
	*/
	__proto.Contain=function(dungeonId){
		return dungeonId >=this.start && dungeonId <=this.end;
	}

	__getset(0,__proto,'start',function(){
		return this.subs[0].start;
	});

	__getset(0,__proto,'end',function(){
		return this.subs[this.subs.length-1].end;
	});

	__getset(0,__proto,'scene',function(){
		var model=Q_chapterContainer.GetValue(this.end);
		return model.q_sceneid;
	});

	return ChapterVo;
})()


//class enem.com.game.boss.bean.vo.WorldBossVo
var WorldBossVo=(function(){
	function WorldBossVo(){
		// 可挑战次数
		this.challengeCount=0;
		// 最大挑战次数
		this.challengeMax=0;
		// 恢复时间
		this.recoverTime=0;
		// 今日已购买次数(跨天清)
		this.buyed=0;
		// 购买消耗
		this.buyCost=null;
		// 今日已立即复活次数
		this.relived=0;
		// 最大立即复活次数
		this.maxRelive=0;
		this._allbeans={};
	}

	__class(WorldBossVo,'enem.com.game.boss.bean.vo.WorldBossVo');
	var __proto=WorldBossVo.prototype;
	__proto.SetData=function(beans){
		this._allbeans={};
		for (var i=0;i < beans.length;++i){
			var vo=new OneWorldBossVo();
			vo.SetData(beans[i]);
			this._allbeans[beans[i].id]=vo;
		}
	}

	__proto.UpdateBean=function(bean){
		if (this._allbeans[bean.id]==null){
			var vo=new OneWorldBossVo();
			vo.SetData(bean);
			this._allbeans[bean.id]=vo;
		}
		else {
			this._allbeans[bean.id].SetData(bean);
		}
	}

	/**
	*还能买几次
	*/
	__proto.canBuyCount=function(WordBossTimes){
		return WordBossTimes-this.buyed;
	}

	/**
	*本次购买需要花费
	*@return
	*/
	__proto.GetCurBuyCost=function(WordBossTimes){
		if (this.canBuyCount(WordBossTimes)==0)return this.buyCost[this.buyCost.length-1];
		return this.buyCost[this.buyed];
	}

	/**复活消耗的道具**/
	__getset(0,__proto,'reliveItem',function(){
		return parseInt(Q_dungeon_paramContainer.GetValue(13).q_value);
	});

	/**
	*还能立即复活几次
	*/
	__getset(0,__proto,'canReliveCount',function(){
		return this.maxRelive-this.relived;
	});

	__getset(0,__proto,'allbeans',function(){
		return this._allbeans;
	});

	/**
	*买一次给几次挑战次数
	*/
	__getset(0,__proto,'buyOneGiveCount',function(){
		return parseInt(Q_dungeon_paramContainer.GetValue(7).q_value);
	});

	/**复活消耗的元宝**/
	__getset(0,__proto,'reliveGold',function(){
		return parseInt(Q_dungeon_paramContainer.GetValue(14).q_value);
	});

	return WorldBossVo;
})()


//class enem.com.ui.utils.ColorUtil
var ColorUtil$1=(function(){
	function ColorUtil(){}
	__class(ColorUtil,'enem.com.ui.utils.ColorUtil',null,'ColorUtil$1');
	ColorUtil.toInt=function(r,g,b){
		return (r << 16)+(g << 8)+b;
	}

	ColorUtil.splitRGB=function(color){
		return [color >> 16 & 0xff,color >> 8 & 0xff,color & 0xff];
	}

	ColorUtil.HtmlToNumC=function(c){
		if (c.indexOf("#")==-1)
			return 0;
		var n=parseInt(c.substr(1),16);
		if (isNaN(n))
			return 0;
		return Math.floor(n);
	}

	ColorUtil.NumToHtmlC=function(c){
		var ret=c.toString(16);
		while (ret.length < 6)
		ret="0"+ret;
		return "#"+ret;
	}

	ColorUtil.getQualityColor=function(quality,isDeep){
		(isDeep===void 0)&& (isDeep=false);
		switch (quality){
			case 0:
				return isDeep ? "#FFFFFF" :"#C3C3C3";
			case 1:
				return isDeep ? "#00F50C" :"#02C402";
			case 2:
				return isDeep ? "#00F0FF" :"#25ACf0";
			case 3:
				return isDeep ? "#FF00F6" :"#CB20EA";
			case 4:
				return isDeep ? "#FF7200" :"#FF7113";
			case 5:
				return isDeep ? "#E70101" :"#F71D1D";
			case 6:
				return isDeep ? "#FFFC00" :"#F9FF52";
			}
		return isDeep ? "#FFFFFF" :"#C3C3C3";
	}

	ColorUtil.getQualityName=function(quality){
		switch (quality){
			case 1:
				return "绿";
			case 2:
				return "蓝";
			case 3:
				return "紫";
			case 4:
				return "橙";
			case 5:
				return "红";
			case 6:
				return "金";
			}
		return "";
	}

	ColorUtil.getQualityName2=function(quality){
		switch (quality){
			case 1:
				return "绿色";
			case 2:
				return "蓝色";
			case 3:
				return "紫色";
			case 4:
				return "橙色";
			case 5:
				return "红色";
			case 6:
				return "金色";
			}
		return "";
	}

	ColorUtil.getHtmlStr=function(content,quality,fontSize,bold){
		(fontSize===void 0)&& (fontSize=18);
		(bold===void 0)&& (bold=false);
		var str="";
		var color;
		if (quality >=6){
			var index=0;
			var len=content ? content.length :0;
			for (var i=0;i < len;i++){
				var s=content[i];
				color=ColorUtil.RAINBOW_COLORS[index % ColorUtil.RAINBOW_COLORS.length];
				index++;
				str+=TextUtil.ToHtml(s,color,fontSize,bold);
			}
		}
		else {
			color=ColorUtil.getQualityColor(quality);
			str=TextUtil.ToHtml(content,color,fontSize,bold);
		}
		return str;
	}

	ColorUtil.getFilterbyType=function(type){
		switch(type){
			case 1:
				return new ColorFilter(ColorUtil.colorGalyMatrix);
				break
			case 2:
				return new ColorFilter(ColorUtil.colorRedMatrix);
				break ;
			case 3:
				return new ColorFilter(ColorUtil.colorBlueMatrix);
				break ;
			case 4:
				return new ColorFilter(ColorUtil.colorPurrleMatrix);
				break ;
			case 5:
				return new ColorFilter(ColorUtil.colorGreenMatrix);
				break ;
			}
	}

	ColorUtil.getFilterRed=function(speed){
		var colorRedMatrix=
		[
		0.5+0.5*(speed),0,0,0,0,
		0,0,0,0,0,
		0,0,0,0,0,
		0,0,0,1,0,];
		return new ColorFilter(colorRedMatrix);
	}

	ColorUtil.BLACK="#000000";
	ColorUtil.WHITE="#C3C3C3";
	ColorUtil.GREEN="#02C402";
	ColorUtil.BLUE="#25ACf0";
	ColorUtil.PURPLE="#CB20EA";
	ColorUtil.ORANGE="#FF7113";
	ColorUtil.RED="#F71D1D";
	ColorUtil.GOLD="#F9FF52";
	ColorUtil.WHITE_D="#FFFFFF";
	ColorUtil.GREEN_D="#00F50C";
	ColorUtil.BLUE_D="#00F0FF";
	ColorUtil.PURPLE_D="#FF00F6";
	ColorUtil.ORANGE_D="#FF7200";
	ColorUtil.RED_D="#E70101";
	ColorUtil.GOLD_D="#FFFC00";
	ColorUtil.FLESH="#FFECD2";
	ColorUtil.YELLOW="#EED28F";
	ColorUtil.GRAY="#C3C3C3";
	ColorUtil.BROWN="#79421C";
	ColorUtil.CHAT_CHANNEL="#ffc80b";
	ColorUtil.RARE_RED="#E51717";
	ColorUtil.AMPLE_GREEN="#099E09";
	ColorUtil.MERIDIANS_GREY="#808080";
	__static(ColorUtil,
	['RAINBOW_COLORS',function(){return this.RAINBOW_COLORS=["#F71D1D","#FF7113","#CB20EA","#25ACf0"];},'colorGalyMatrix',function(){return this.colorGalyMatrix=
		[
		0.3086,0.6094,0.0820,0,0,
		0.3086,0.6094,0.0820,0,0,
		0.3086,0.6094,0.0820,0,0,
		0,0,0,1,0,];},'colorRedMatrix',function(){return this.colorRedMatrix=
		[
		1,0,0,0,0,
		0,0,0,0,0,
		0,0,0,0,0,
		0,0,0,1,0,];},'colorBlueMatrix',function(){return this.colorBlueMatrix=
		[
		0,0,0,0,0,
		0,0.9,0,0,0,
		0,0,1,0,0,
		0,0,0,1,0,];},'colorPurrleMatrix',function(){return this.colorPurrleMatrix=
		[
		1,0,0,0,0,
		0,0,0,0,0,
		0,0,0.9,0,0,
		0,0,0,1,0,];},'colorGreenMatrix',function(){return this.colorGreenMatrix=
		[
		0,0,0,0,0,
		0,0.9 ,0,0,0,
		0,0,0.1,0,0,
		0,0,0,1,0,];}
	]);
	return ColorUtil;
})()


/**
*属性丹使用数量
*/
//class enem.com.game.backpack.vo.ShuxingdanUseVo
var ShuxingdanUseVo=(function(){
	function ShuxingdanUseVo(){
		this._useNum=new Dictionary();
	}

	__class(ShuxingdanUseVo,'enem.com.game.backpack.vo.ShuxingdanUseVo');
	var __proto=ShuxingdanUseVo.prototype;
	__proto.SetData=function(goods){
		this._useNum.clear();
		for (var i=0;i < goods.length;++i){
			this._useNum.set(goods[i].id,goods[i].num);
		}
	}

	__proto.UpdateNum=function(mid,num){
		this._useNum.set(mid,num);
	}

	__proto.GetNum=function(mid){
		if (this._useNum.get(mid)==null)return 0;
		return this._useNum.get(mid);
	}

	__proto.UpgradeTypeToAttri=function(type){
		var attri="";
		var Attri;
		if(Q_upgrade_typeContainer.GetValue(type)){
			if(Q_upgrade_typeContainer.GetValue(type).q_id){
				var _useID=Q_upgrade_typeContainer.GetValue(type).q_id;
				if(this._useNum.keys.indexOf(_useID)!=-1){
					var str=Q_itemContainer.GetValue(_useID).q_param;
					if(str&&str.length){
						attri=JSONUtil.decode(str).attribute;
						Attri=AttributeUtil.JArrStrToAttList(attri);
						return Attri;
					}
				}
			}
		}
		return Attri;
	}

	return ShuxingdanUseVo;
})()


//class enem.com.game.player.equip.equippromoteVo
var equippromoteVo=(function(){
	function equippromoteVo(_modid){
		this.modid=0;
		this.consumeItem=null;
		this.attper=null;
		this.noticeID=0;
		this.showstar=0;
		this.showquality=0;
		this.modid=_modid;
		var equip=Q_equip_promoteContainer.GetValue(this.modid);
		this.consumeItem=ItemUtil.JsonStringToItemList(equip.q_consume);
		this.noticeID=equip.q_notice;
		var param=JSONUtil.decode(equip.q_attr_per);
		var _arrVo=[];
		var i;
		for(var $each_i in param){
			i=param[$each_i];
			var vo=new AttributeVo();
			vo.type=i[0];
			vo.value=i[1];
			_arrVo.push(vo);
		}
		this.attper=_arrVo;
		this.showstar=equip.q_star;
		this.showquality=equip.q_pinzhi;
	}

	__class(equippromoteVo,'enem.com.game.player.equip.equippromoteVo');
	return equippromoteVo;
})()


//class enem.com.game.activity.escort.event.EscortEvent
var EscortEvent=(function(){
	function EscortEvent(){}
	__class(EscortEvent,'enem.com.game.activity.escort.event.EscortEvent');
	EscortEvent.ESCORT_INIT="ESCORT_INIT";
	EscortEvent.ESCORT_UPDATE_SHOW_LIST="ESCORT_UPDATE_SHOW_LIST";
	EscortEvent.ESCORT_UPDATE_LEVEL="ESCORT_UPDATE_LEVEL";
	EscortEvent.ESCORT_UPDATE_COUNT="ESCORT_UPDATE_COUNT";
	EscortEvent.ESCORT_REMOVE_ONE_SHOW="ESCORT_REMOVE_ONE_SHOW";
	EscortEvent.ESCORT_REMOVE_ONE_SHOW2="ESCORT_REMOVE_ONE_SHOW2";
	EscortEvent.ESCORT_UPDATE_ROBBED_RECORD="ESCORT_UPDATE_ROBBED_RECORD";
	EscortEvent.ESCORT_UPDATE_REVENGE_STATE="ESCORT_UPDATE_REVENGE_STATE";
	EscortEvent.ESCORT_UPDATE_REWARD_STATE="ESCORT_UPDATE_REWARD_STATE";
	EscortEvent.ESCORT_UPDATE_ESCORT_STATE="ESCORT_UPDATE_ESCORT_STATE";
	EscortEvent.ESCORT_UPDATE_ROBBED_STATE="ESCORT_UPDATE_ROBBED_STATE";
	return EscortEvent;
})()


/**时装工具类**/
//class enem.com.game.fashion.FashionUtil
var FashionUtil=(function(){
	function FashionUtil(){}
	__class(FashionUtil,'enem.com.game.fashion.FashionUtil');
	__getset(1,FashionUtil,'fashionNeedItems',function(){
		if (FashionUtil._fashionNeedItems==null){
			FashionUtil._fashionNeedItems=[];
			var list=Q_fashionContainer.list;
			var cfg;
			for(var $each_cfg in list){
				cfg=list[$each_cfg];
				if (cfg.q_display > 0 && cfg.q_need_goods > 0 && FashionUtil._fashionNeedItems.indexOf(cfg.q_need_goods)==-1)
					FashionUtil._fashionNeedItems.push(cfg.q_need_goods);
			}
		}
		return FashionUtil._fashionNeedItems;
	});

	FashionUtil.getFashionIdByNeedItem=function(itemID){
		var list=Q_fashionContainer.list;
		var cfg;
		for(var $each_cfg in list){
			cfg=list[$each_cfg];
			if (cfg.q_need_goods==itemID)
				return cfg.q_id;
		}
		return 0;
	}

	FashionUtil.getFashionType=function(qid){
		var cfg=Q_fashionContainer.GetValue(qid);
		return cfg !=null ? cfg.q_type :0;
	}

	FashionUtil.getFashionTypeByUpgrade=function(upgradeType){
		switch (upgradeType){
			case 3:
				return 3;
			case 4:
				return 6;
			case 5:
				return 2;
			case 6:
				return 4;
			case 1:
				return 7;
			case 2:
				return 8;
			case 8:
				return 9;
			case 15:
				return 11;
			case 16:
				return 10;
			case 7:
				return 12;
			}
		return 0;
	}

	FashionUtil.getFashionShowID=function(qid){
		var cfg;
		if (Q_fashionContainer.GetValue(qid))
			cfg=Q_fashionContainer.GetValue(qid);
		return cfg !=null ? parseInt(cfg.q_show):0;
	}

	FashionUtil.getFashionUpCost=function(qid){
		var cfg=Q_fashionContainer.GetValue(qid);
		if(cfg){
			return JSONUtil.decode(cfg.q_zizhi_cost)?JSONUtil.decode(cfg.q_zizhi_cost)[0]:null;
		}
	}

	FashionUtil.getFashionMaxLevel=function(qid){
		var cfg=Q_fashionContainer.GetValue(qid);
		return cfg !=null ? cfg.q_level_max :null;
	}

	FashionUtil._fashionNeedItems=null;
	return FashionUtil;
})()


/**
*商城相关事件
*/
//class enem.com.game.shop.event.ShopEvent
var ShopEvent=(function(){
	function ShopEvent(){}
	__class(ShopEvent,'enem.com.game.shop.event.ShopEvent');
	ShopEvent.SHOP_ALL_INFO="shop_all_info";
	ShopEvent.SHOP_ITEM_CHANGE="shop_item_change";
	ShopEvent.BUY_RETURN="shop_buy_return";
	ShopEvent.SHOP_DEL="SHOP_DEL";
	ShopEvent.SHOP_TITLE="SHOP_TITLE";
	return ShopEvent;
})()


//class enem.com.game.beauty.BeautyBean
var BeautyBean=(function(){
	function BeautyBean(){
		this._bean=null;
		/**御魂道具字典**/
		this.dicYuHunItem=null;
		this.dicYuHunItem=new Dictionary();
	}

	__class(BeautyBean,'enem.com.game.beauty.BeautyBean');
	var __proto=BeautyBean.prototype;
	__proto.update=function($bean){
		this._bean=$bean;
		this.dicYuHunItem.clear();
		if(this._bean.hun !=null){
			var smh;
			for(var $each_smh in this._bean.hun){
				smh=this._bean.hun[$each_smh];
				this.setYuHunItem(smh.index,smh.item,smh.lv,false);
			}
		}
		EventCenter.Event("BEAUTY_UPDATE_BEAUTY_BEAN",this._bean.configID);
		EventCenter.Event("BEAUTY_UPDATE_ALL_YUHUN_ITEM");
	}

	/**
	*设置御魂装备
	*@param grid
	*@param itemID
	*@param level
	*@param isNotice
	*/
	__proto.setYuHunItem=function(grid,itemID,level,isNotice){
		if(itemID==0)
			return;
		var item=this.getYuHunItem(grid);
		if(item==null){
			item=ItemUtil.ItemIdToItem(itemID,1);
			this.dicYuHunItem.set(grid,item);
		}
		item.modelId=itemID;
		item.yhLevel=level;
		item.initParams(true);
		if(isNotice)
			EventCenter.Event("BEAUTY_UPDATE_ONE_YUHUN_ITEM",[this._bean.configID,grid]);
	}

	/**
	*更新御魂装备
	*@param grid
	*@param level
	*/
	__proto.updateYuHunItem=function(grid,level){
		var item=this.getYuHunItem(grid);
		if(item !=null){
			item.yhLevel=level;
			EventCenter.Event("BEAUTY_UPDATE_ONE_YUHUN_ITEM",[this._bean.configID,grid]);
		}
	}

	/**
	*更新出战状态
	*@param type
	*@param position
	*/
	__proto.updateFightState=function(type,position){
		EventCenter.Event("BEAUTY_UPDATE_FIGHT_STATE",this._bean.configID);
	}

	/**
	*更新洗练技能
	*@param skill
	*/
	__proto.updateXiLianSkill=function(skills,count){
		(count===void 0)&& (count=-1);
		this._bean.readySkill=skills;
		if(count !=-1)
			this._bean.count=count;
		EventCenter.Event("BEAUTY_UPDATE_XILIAN_SKILL",this._bean.configID);
	}

	/**更新技能**/
	__proto.updateSkills=function(skills){
		this._bean.skill=skills;
		EventCenter.Event("BEAUTY_UPDATE_SKILLS",this._bean.configID);
	}

	/**
	*更新红颜等级进度
	*@param lv
	*@param progress
	*/
	__proto.updateProgress=function(lv,progress){
		var isUp=this._bean.lv!=lv;
		this._bean.lv=lv;
		this._bean.progress=progress;
		EventCenter.Event("BEAUTY_UPDATE_LEVEL_PROGRESS",[isUp,this._bean.configID]);
	}

	/**
	*更新红颜天赋进度
	*@param lv
	*@param progress
	*/
	__proto.updateTalentProgress=function(lv,progress){
		this._bean.talent.lv=lv;
		this._bean.talent.progress=progress;
		EventCenter.Event("BEAUTY_UPDATE_TALENT_PROGRESS",this._bean.configID);
	}

	/**
	*更新御灵等级
	*@param index
	*@param level
	*/
	__proto.updateYuLingLevel=function(index,level){
		var soulMath=this._bean.ling[index];
		if(soulMath==null){
			soulMath=new SoulMatch();
			soulMath.id=index+1;
			this._bean.ling[index]=soulMath;
		}
		soulMath.value=level;
		EventCenter.Event("BEAUTY_UPDATE_YU_LING_LEVEL",this._bean.configID);
	}

	/**
	*获得指定部位的御魂装备
	*@param grid
	*@return
	*/
	__proto.getYuHunItem=function(grid){
		return this.dicYuHunItem.get(grid);
	}

	/**
	*获得指定部位的御灵等级
	*@param partID
	*@return
	*/
	__proto.getYuLingLevel=function(partID){
		if(this._bean.ling !=null){
			var soulMath;
			for(var $each_soulMath in this._bean.ling){
				soulMath=this._bean.ling[$each_soulMath];
				if(soulMath.id==partID)
					return soulMath.value;
			}
		}
		return 0;
	}

	__getset(0,__proto,'bean',function(){
		return this._bean;
	});

	return BeautyBean;
})()


//class enem.com.game.zhoushu.ZhouShuUtil
var ZhouShuUtil=(function(){
	function ZhouShuUtil(){}
	__class(ZhouShuUtil,'enem.com.game.zhoushu.ZhouShuUtil');
	__getset(1,ZhouShuUtil,'MAXLV',function(){
		return parseInt(Q_zhanwen_paramContainer.GetValue(4).q_value);
	});

	ZhouShuUtil.GetZhanwenAttr=function(mid,level){
		(level===void 0)&& (level=1);
		var cfg=ItemConfigFactory.Ins.Get(mid);
		var attrs=cfg.attr;
		var formula=cfg.attr_formula;
		var radio=0;
		if (formula !=null){
			radio=FormulaUtil.Compute(formula,{level:level})/ 10000;
			for (var i=0;i < attrs.length;i++){
				attrs[i].value=Math.floor(attrs[i].value *radio);
			}
		};
		var grid=cfg.gridattr;
		if (grid !=null){
			for (i=0;i < grid.length;i++){
				formula=cfg.grid_formula[grid[i].type-1000];
				radio=FormulaUtil.Compute(formula,{level:level});
				grid[i].value=Math.floor(grid[i].value *radio);
			}
			AttributeUtil.AttListAddToList(attrs,grid);
		}
		return attrs;
	}

	ZhouShuUtil.GetZhanwenUpCost=function(mid,level){
		var formula=(ItemConfigFactory.Ins.Get(mid)).upgrade_formula;
		return FormulaUtil.Compute(formula,{level:level});
	}

	ZhouShuUtil.GetZhanwenType=function(mid){
		return (ItemConfigFactory.Ins.Get(mid)).type;
	}

	ZhouShuUtil.GetZhanWenJingHua=function(mid,lv){
		var formula=(ItemConfigFactory.Ins.Get(mid)).resolve_formula;
		if (formula==null)
			return 0;
		var num=FormulaUtil.Compute(formula,{level:lv});
		var percent=parseInt(Q_zhanwen_paramContainer.GetValue(1).q_value);
		return Math.floor(Math.floor(num *percent / 10000));
	}

	ZhouShuUtil.InitZhanWenType=function(type){
		if (ZhouShuUtil._CACHE_ZHANWEN_IDS[type]==null){
			var ret=[];
			var n="";
			var list=Q_itemContainer.list;
			for (var i=0;i < list.length;++i){
				if (list[i].q_type==11){
					var cfg=ItemConfigFactory.Ins.Get(list[i].q_id);
					if (cfg.type !=0 && cfg.type==type){
						ret.push(list[i].q_id);
						if (n==""){
							n=list[i].q_name;
						}
					}
				}
			}
			ZhouShuUtil._CACHE_ZHANWEN_IDS[type]={n:n,ids:ret};
		}
		return ZhouShuUtil._CACHE_ZHANWEN_IDS[type];
	}

	ZhouShuUtil.GetZhanwenIdsByType=function(type){
		var o=ZhouShuUtil._CACHE_ZHANWEN_IDS[type];
		if (o==null){
			o=ZhouShuUtil.InitZhanWenType(type);
		}
		return o.ids;
	}

	ZhouShuUtil.GetTongtiantaOpenTypes=function(layer){
		var str=Q_zhanwen_paramContainer.GetValue(3).q_value;
		var o=JSONUtil.decode(str);
		var ret=[];
		for (var i=0;i < o.length;++i){
			if (o[i][1] <=layer){
				ret.push(o[i][0]);
			}
		}
		return ret;
	}

	ZhouShuUtil.GetTypeNeedLayer=function(type){
		var str=Q_zhanwen_paramContainer.GetValue(3).q_value;
		var o=JSONUtil.decode(str);
		var ret=[];
		for (var i=0;i < o.length;++i){
			if (o[i][0]==type){
				return o[i][1];
			}
		}
		return 0;
	}

	ZhouShuUtil.GetOpenTypeLayers=function(){
		var str=Q_zhanwen_paramContainer.GetValue(3).q_value;
		var o=JSONUtil.decode(str);
		var ret=[];
		for (var i=0;i < o.length;++i){
			if (ret.indexOf(o[i][1])==-1){
				ret.push(o[i][1]);
			}
		}
		return ret;
	}

	ZhouShuUtil.GetCaoNeed=function(idx){
		var str=Q_zhanwen_paramContainer.GetValue(2).q_value;
		var arr=JSONUtil.decode(str);
		if (arr[idx]==null)
			return arr[arr.length-1];
		return arr[idx];
	}

	ZhouShuUtil.getKunag=function(quality){
		return TextUtil.FormatStr("res/ui/sg_ui/spell/{@}.png",[quality]);
	}

	ZhouShuUtil._CACHE_ZHANWEN_IDS={};
	return ZhouShuUtil;
})()


//class enem.com.game.yuntai.EnumYuntai
var EnumYuntai=(function(){
	function EnumYuntai(){}
	__class(EnumYuntai,'enem.com.game.yuntai.EnumYuntai');
	EnumYuntai.WEIGUO=28;
	EnumYuntai.SHUGUO=29;
	EnumYuntai.WUGUO=30;
	EnumYuntai.QUNXIONG=31;
	EnumYuntai.GUANQIA=14;
	EnumYuntai.SHILIAN=34;
	EnumYuntai.QUN=0;
	EnumYuntai.WEI=1;
	EnumYuntai.SHU=2;
	EnumYuntai.WU=3;
	EnumYuntai.Guan=4;
	EnumYuntai.LIAN=5;
	EnumYuntai.YUNTAI_TASK="yuntai_task";
	return EnumYuntai;
})()


//class enem.com.game.newfunction.enum.EnumFunTime
var EnumFunTime=(function(){
	function EnumFunTime(){}
	__class(EnumFunTime,'enem.com.game.newfunction.enum.EnumFunTime');
	EnumFunTime.NEW_FUNC_TIEM_OUT="NEWFUNCTIONTIMEOUT";
	EnumFunTime.NEW_FUNC_TIME_IN="NEWFUNCTIONTIMEIN";
	return EnumFunTime;
})()


//class enem.com.game.vido.EnumVideoHall
var EnumVideoHall=(function(){
	function EnumVideoHall(){}
	__class(EnumVideoHall,'enem.com.game.vido.EnumVideoHall');
	EnumVideoHall.getTypeName=function(type){
		switch (type){
			case 0:
				return "竞技场";
			case 1:
				return "草船借箭";
			case 2:
				return "煮酒论英雄";
			case 3:
				return "军团战";
			case 4:
				return "王者争霸";
			case 5:
				return "空城计";
			case 6:
				return "军师巡城";
			}
		return "";
	}

	EnumVideoHall.getTypeUrl=function(type){
		switch (type){
			case 0:
				return "res/ui/sg_ui/pvp/meishuzi_01.png";
			case 1:
				return "res/ui/sg_ui/pvp/meishuzi_02.png";
			case 2:
				return "res/ui/sg_ui/pvp/meishuzi_04.png";
			case 3:
				return "res/ui/sg_ui/pvp/meishuzi_05.png";
			case 4:
				return "res/ui/sg_ui/pvp/meishuzi_03.png";
			case 5:
				return "res/ui/sg_ui/pvp/meishuzi_07.png";
			case 6:
				return "res/ui/sg_ui/pvp/meishuzi_06.png";
			}
		return "";
	}

	EnumVideoHall.PAGE_TYPE_HOT=1;
	EnumVideoHall.PAGE_TYPE_ARENA=2;
	EnumVideoHall.PAGE_TYPE_ESCORT=3;
	EnumVideoHall.PAGE_TYPE_NINE_HEAVY=4;
	EnumVideoHall.PAGE_TYPE_GUILD_BATTLE=5;
	EnumVideoHall.PAGE_TYPE_KING_WAR=6;
	EnumVideoHall.PAGE_TYPE_PERSONAL=7;
	EnumVideoHall.PAGE_TYPE_EMPTY_CITY=8;
	EnumVideoHall.PAGE_TYPE_STRATEGIST_PATROL=9;
	EnumVideoHall.TYPE_ARENA=0;
	EnumVideoHall.TYPE_ESCORT=1;
	EnumVideoHall.TYPE_NINE_HEAVY=2;
	EnumVideoHall.TYPE_GUILD_BATTLE=3;
	EnumVideoHall.TYPE_KING_WAR=4;
	EnumVideoHall.TYPE_EMPTY_CITY=5;
	EnumVideoHall.TYPE_STRATEGIST_PATROL=6;
	return EnumVideoHall;
})()


//class enem.com.game.activity.EnumActivity
var EnumActivity=(function(){
	function EnumActivity(){}
	__class(EnumActivity,'enem.com.game.activity.EnumActivity');
	EnumActivity.OPEN_TYPE_ALL_DAY=0;
	EnumActivity.OPEN_TYPE_PER_DAY=-1;
	EnumActivity.OPEN_TYPE_PER_WEEK=-2;
	EnumActivity.OPEN_TYPE_PER_MONTH=-3;
	EnumActivity.ACTIVITY_TYPE_KJBS=1;
	EnumActivity.ACTIVITY_TYPE_CCJJ=2;
	EnumActivity.ACTIVITY_TYPE_JTSL=3;
	EnumActivity.ACTIVITY_TYPE_JCT=4;
	EnumActivity.ACTIVITY_TYPE_QYH=5;
	EnumActivity.ACTIVITY_TYPE_WZZB=6;
	EnumActivity.ACTIVITY_TYPE_GUILDBATTLE=7;
	EnumActivity.ACTIVITY_TYPE_OP_SERVER=11;
	EnumActivity.ACTIVITY_TYPE_OP_GUILD=12;
	EnumActivity.ACTIVITY_TYPE_OP_CITY=10;
	EnumActivity.ACTIVITY_TYPE_OP_TUANGOU=18;
	EnumActivity.ANSWER_STATE_QUESTION=0;
	EnumActivity.ANSWER_STATE_RESULT=1;
	EnumActivity.ANSWER_STATE_END=2;
	EnumActivity.ANWSER_CLICK="CLICKANWSER";
	EnumActivity.RANK_TYPE_NINE_HEAVY=1;
	EnumActivity.RANK_TYPE_GUILD_BOSS=2;
	EnumActivity.RANK_TYPE_WZZB=3;
	EnumActivity.REWARD_TYPE_NINE_HEAVY=1;
	__static(EnumActivity,
	['OPERATELIST',function(){return this.OPERATELIST=[11,12,10];}
	]);
	return EnumActivity;
})()


//class enem.com.game.player.enum.EnumSex
var EnumSex=(function(){
	function EnumSex(){}
	__class(EnumSex,'enem.com.game.player.enum.EnumSex');
	EnumSex.NORMAL=0;
	EnumSex.MALE=1;
	EnumSex.FEMALE=2;
	return EnumSex;
})()


/**
*超值多重好礼
***/
//class enem.com.game.touzijihua.enumtouzi.EnumReChargeType
var EnumReChargeType=(function(){
	function EnumReChargeType(){}
	__class(EnumReChargeType,'enem.com.game.touzijihua.enumtouzi.EnumReChargeType');
	EnumReChargeType.WEAPON=0;
	EnumReChargeType.Beauty=1;
	EnumReChargeType.WWAPON_FATION=2;
	EnumReChargeType.WING_FATION=3;
	EnumReChargeType.MOUNTS_FATION=4;
	EnumReChargeType.WEAR_FATION=5;
	EnumReChargeType.TITLE=6;
	EnumReChargeType.LIFE=1;
	EnumReChargeType.MONTH=2;
	EnumReChargeType.FIRST_6=3;
	EnumReChargeType.FIRST_30=4;
	EnumReChargeType.FIRST_98=5;
	EnumReChargeType.FIRST_198=6;
	return EnumReChargeType;
})()


//class enem.com.game.login.events.LoginEvent
var LoginEvent=(function(){
	function LoginEvent(){}
	__class(LoginEvent,'enem.com.game.login.events.LoginEvent');
	LoginEvent.LOGIN_FAIL="login_fail";
	LoginEvent.CREATE_FAIL="create_fail";
	LoginEvent.START_NEW_DAY="startNewDay";
	LoginEvent.NETWORKEVT_WIFI="NetWorkEvt_Wifi";
	return LoginEvent;
})()


//class enem.com.game.equip.events.EquipEvent
var EquipEvent=(function(){
	function EquipEvent(){}
	__class(EquipEvent,'enem.com.game.equip.events.EquipEvent');
	EquipEvent.WEAR="equipWear";
	EquipEvent.BETTEREQUIP="equip_betterequip";
	EquipEvent.MELTEQUIP="equip_meltequip";
	EquipEvent.CHUANSHI_UPDATE="chuanshi_update";
	EquipEvent.CHUANSHI_COMBINE="chuanshi_combie";
	EquipEvent.CHUANSHI_DESPOSE="chuanshi_despose";
	EquipEvent.GODEQUIP_COMPOSE="godequip_compose";
	EquipEvent.GODEQUIP_DISPOSE="godequip_dispose";
	EquipEvent.GODEQUIP_UPGRADE="godequip_upgrade";
	return EquipEvent;
})()


//class enem.com.game.achievement.Util.AchievementUtil
var AchievementUtil=(function(){
	function AchievementUtil(){}
	__class(AchievementUtil,'enem.com.game.achievement.Util.AchievementUtil');
	__getset(1,AchievementUtil,'achTypes',function(){
		if (AchievementUtil._achTypeList==null){
			AchievementUtil._achTypeList="";
			var arr=[];
			var list=Q_achievement_typeContainer.list;
			for (var i=0;i < list.length;i++){
				arr.push(list[i].q_name);
			}
			AchievementUtil._achTypeList=arr.join(",");
		}
		return AchievementUtil._achTypeList;
	});

	AchievementUtil.getAchJump=function(type){
		var cfg=Q_achievement_typeContainer.GetValue(type);
		return cfg !=null ? parseInt(cfg.q_jump):0;
	}

	AchievementUtil.getType=function(id){
		var cfg=Q_mission_baseContainer.GetValue(id);
		return cfg!=null?cfg.q_achievement_type:0;
	}

	AchievementUtil._achTypeList=null;
	return AchievementUtil;
})()


//class enem.com.game.HongBao.RedPacketEvents
var RedPacketEvents=(function(){
	function RedPacketEvents(){}
	__class(RedPacketEvents,'enem.com.game.HongBao.RedPacketEvents');
	RedPacketEvents.OPEN_REDPAC="OPEN_REDPAC";
	RedPacketEvents.CLOSE_REDPAC="CLOSE_REDPAC";
	RedPacketEvents.REMOVE_REDBAG="REMOVE_REDBAG";
	RedPacketEvents.RED_TIME_RUN="TIME_RUN";
	return RedPacketEvents;
})()


//class enem.com.game.expedition.EpUnitVo
var EpUnitVo=(function(){
	function EpUnitVo($type,$mid,$isFit){
		this._type=0;
		this._mid=0;
		this._isFit=false;
		this._type=$type;
		this._mid=$mid;
		this._isFit=$isFit;
	}

	__class(EpUnitVo,'enem.com.game.expedition.EpUnitVo');
	var __proto=EpUnitVo.prototype;
	__getset(0,__proto,'mid',function(){
		return this._mid;
		},function(value){
		this._mid=value;
	});

	__getset(0,__proto,'type',function(){
		return this._type;
		},function(value){
		this._type=value;
	});

	__getset(0,__proto,'isFit',function(){
		return this._isFit;
		},function(value){
		this._isFit=value;
	});

	return EpUnitVo;
})()


/**
*前端构建的npc场景数据
*/
//class enem.com.game.player.bean.NpcInSceneBean extends engine.base.data.Bean
var NpcInSceneBean=(function(_super){
	function NpcInSceneBean(){
		// 基础数据
		this.basic=null;
		// NPC类型(EnumNpcType)
		this.npctype=0;
		// 附加参数
		this.param=null;
		// 资源类型
		this.restype=0;
		this.cfgID=0;
		// 资源id
		this.resId=0;
		NpcInSceneBean.__super.call(this);
	}

	__class(NpcInSceneBean,'enem.com.game.player.bean.NpcInSceneBean',_super);
	return NpcInSceneBean;
})(Bean)


/**
*军师战斗数据
*/
//class enem.com.game.battle.common.bean.AdviserInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var AdviserInBattleBean=(function(_super){
	function AdviserInBattleBean(){
		AdviserInBattleBean.__super.call(this);;
	}

	__class(AdviserInBattleBean,'enem.com.game.battle.common.bean.AdviserInBattleBean',_super);
	return AdviserInBattleBean;
})(ObjectInBattleBean)


/**
*宝物数据
*/
//class enem.com.game.battle.common.bean.TreasureInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var TreasureInBattleBean=(function(_super){
	function TreasureInBattleBean(){
		TreasureInBattleBean.__super.call(this);;
	}

	__class(TreasureInBattleBean,'enem.com.game.battle.common.bean.TreasureInBattleBean',_super);
	var __proto=TreasureInBattleBean.prototype;
	__proto.clear=function(){
		_super.prototype.clear.call(this);
	}

	__proto.Clone=function(){
		var clone=new TreasureInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		return clone;
	}

	return TreasureInBattleBean;
})(ObjectInBattleBean)


/**
*装备对象
*@author Administrator
*/
//class enem.com.game.items.obj.ItemEquip extends enem.com.game.items.obj.Item
var ItemEquip=(function(_super){
	function ItemEquip(){
		this._power=0;
		this._levelnum=0;
		this._extraParams=null;
		this.Shen_Equip=1001500;
		//11-21神装分解修改
		this._baseAttr=null;
		this._bestAttr=null;
		this._attPowerHash=null;
		this._showstar=-1;
		ItemEquip.__super.call(this);
	}

	__class(ItemEquip,'enem.com.game.items.obj.ItemEquip',_super);
	var __proto=ItemEquip.prototype;
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		this._extraParams=info.extraParam;
		this._bestAttr=null;
		this._power=0;
		this.UpdateLevelNum();
	}

	__proto.SetJsonObject=function(jsono,numparam){
		_super.prototype.SetJsonObject.call(this,jsono,numparam);
		this._bestAttr=null;
		this._power=0;
		this.UpdateLevelNum();
	}

	__proto.UpdateLevelNum=function(){
		this._levelnum=this.level;
	}

	/**
	*比较哪个装备好
	*@return 1这个装备好 0相等-1equ好
	*/
	__proto.Compare=function(equ){
		if (equ==null)
			return 1;
		var score1=this.power;
		var score2=equ.power;
		if (score1 > score2)
			return 1;
		else if (score1 < score2)
		return-1;
		return 0;
	}

	__proto.Combine=function(item){
		return item;
	}

	/**
	*属性列表战斗力
	*/
	__proto.GetAttListPower=function(list){
		if (list==null)
			return 0;
		var list1=AttributeUtil.CombineSameAttr(list);
		var ret=0;
		for (var i=0;i < list1.length;++i){
			ret+=this.GetAttrPower(list1[i].type,list1[i].value,list1[i].multi);
		}
		return Math.floor(ret);
	}

	/**得到一个属性的战斗力*/
	__proto.GetAttrPower=function(type,value,multi){
		(multi===void 0)&& (multi=1);
		return TextUtil.numToFixed(value*multi,0)*this.GetAttributeRate(type);
	}

	// 获得一点属性所对应的战斗力数值
	__proto.GetAttributeRate=function(aType){
		if (this._attPowerHash==null){
			this._attPowerHash=new Dictionary();
			var arr=JSONUtil.decode(GlobalData.GetString(37));
			for (var i=0;i < arr.length;i++){
				this._attPowerHash.set(arr[i][0],arr[i][1]);
			}
		}
		if (this._attPowerHash.get(aType)!=null)
			return this._attPowerHash.get(aType);
		return this._attPowerHash.get(aType);
	}

	/**可穿戴**/
	__proto.Wearable=function(level){
		return level >=this.level;
	}

	__proto.CloneEquip=function(){
		var clone=this.Clone();
		clone._power=this._power;
		clone._levelnum=this._levelnum;
		clone._extraParams=this._extraParams;
		return clone;
	}

	/**极品属性*/
	__getset(0,__proto,'bestAtts',function(){
		if (this._bestAttr==null){
			this._bestAttr=[];
		}
		return this._bestAttr;
	});

	/**是否橙装**/
	__getset(0,__proto,'isOrange',function(){
		return this.quality==4;
	});

	/**阶数*/
	__getset(0,__proto,'levelnum',function(){
		return this._levelnum;
	});

	//神装和圣器进行区分11-23
	__getset(0,__proto,'isGod',function(){
		return (this.quality==6)&&(this.modelId>=this.Shen_Equip);
	});

	/**
	*评分
	*/
	__getset(0,__proto,'score',function(){
		return (this.config).score;
	});

	/**
	*穿戴后加的buff
	*/
	__getset(0,__proto,'buff',function(){
		return (this.config).buff;
	});

	/**
	*能否熔炼
	*/
	__getset(0,__proto,'isCanRongLian',function(){
		return this.model.q_dispose_type==1;
	});

	/**
	*基础属性
	*/
	__getset(0,__proto,'baseAttrs',function(){
		if (this._baseAttr==null)
			this._baseAttr=(this.config).attr1;
		if(this.grid==11 ||this.grid==12){
			var param=JSONUtil.decode(this.model.q_param);
			var curatt=FormulaUtil.Compute((param.attributeFormula),{level:this.extralevel})/10000+1;
			var _arrVo=[];
			var i;
			for(var $each_i in param.attr1){
				i=param.attr1[$each_i];
				var vo=new AttributeVo();
				vo.type=i[0];
				vo.value=i[1]*curatt;
				_arrVo.push(vo);
			}
			this._baseAttr=_arrVo;
		}
		return this._baseAttr;
	});

	/**装备属性战力**/
	__getset(0,__proto,'power',function(){
		if (this._power==0){
			var xx=[];
			AttributeUtil.AttListAddToList(xx,this.baseAttrs,true);
			AttributeUtil.AttListAddToList(xx,this.staratts,true);
			AttributeUtil.AttListAddToList(xx,this.bestAtts,true);
			this._power=this.GetAttListPower(xx);
		}
		return this._power;
	});

	__getset(0,__proto,'extralevel',function(){
		var lv=0;
		if(this.grid==11 ||this.grid==12){
			if (this._extraParams !=null){
				lv=this._extraParams[0] ?this._extraParams[0]:0;
			}
		}
		return lv;
	});

	__getset(0,__proto,'staratts',function(){
		var equip=equipUtil.GetEquippromoteVoByMid(this.star);
		var att=[];
		if(equip)
			att=equip.attper;
		return att;
	});

	/**装备部位**/
	__getset(0,__proto,'grid',function(){
		var part=(this.config).gridId;
		return part;
	});

	__getset(0,__proto,'star',function(){
		var star=0;
		if(this.grid !=11 ||this.grid !=12){
			if (this._extraParams!=null){
				star=this._extraParams[1] ?this._extraParams[1]:0;
			}
			if(this._extraParams && this._extraParams.length >=6){
				star=0;
			}
		}
		if(this._showstar !=-1){
			star=this._showstar;
		}
		return star;
		},function(value){
		this._showstar=value;
	});

	return ItemEquip;
})(Item)


//class enem.com.game.battle.common.bean.HeroInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var HeroInBattleBean=(function(_super){
	function HeroInBattleBean(){
		HeroInBattleBean.__super.call(this);
		this.exterior=new HeroExteriorBean();
	}

	__class(HeroInBattleBean,'enem.com.game.battle.common.bean.HeroInBattleBean',_super);
	var __proto=HeroInBattleBean.prototype;
	__proto.clear=function(){
		_super.prototype.clear.call(this);
		this.exterior.clear();
	}

	__proto.Clone=function(){
		var clone=new HeroInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		clone.exterior=this.exterior;
		return clone;
	}

	return HeroInBattleBean;
})(ObjectInBattleBean)


/**
*蛮将
*/
//class enem.com.game.battle.common.bean.GeneralInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var GeneralInBattleBean=(function(_super){
	function GeneralInBattleBean(){
		GeneralInBattleBean.__super.call(this);
	}

	__class(GeneralInBattleBean,'enem.com.game.battle.common.bean.GeneralInBattleBean',_super);
	var __proto=GeneralInBattleBean.prototype;
	__proto.Clone=function(){
		var clone=new GeneralInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		return clone;
	}

	return GeneralInBattleBean;
})(ObjectInBattleBean)


/**合体宝石**/
//class enem.com.game.items.obj.ItemFitGem extends enem.com.game.items.obj.Item
var ItemFitGem=(function(_super){
	function ItemFitGem(){
		/**宝石等级**/
		this._gemLevel=1;
		/**宝石最大等级**/
		this._gemMaxLevel=1;
		/**宝石类型**/
		this._gemType=-1;
		/**当前等级属性列表**/
		this._curAttrs=null;
		/**下一等级属性列表**/
		this._nextAttrs=null;
		/**特技属性**/
		this._specialAttrs=null;
		/**总属性（当前等级属性+特技属性）**/
		this._totalAttr=null;
		/**升级消耗道具**/
		this._upCostItem=null;
		/**分解获得道具**/
		this._decomposeGetItem=null;
		/**当前等级战力**/
		this._power=-1;
		this.isInit=false;
		ItemFitGem.__super.call(this);
	}

	__class(ItemFitGem,'enem.com.game.items.obj.ItemFitGem',_super);
	var __proto=ItemFitGem.prototype;
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		if (info.extraParam && info.extraParam.length > 0)
			this.gemLevel=info.extraParam[0];
	}

	__proto.initParams=function(isForce){
		if (!this.isInit || isForce){
			this.isInit=true;
			var obj=JSONUtil.decode(this.model.q_param);
			this._gemType=parseInt(obj.type);
			this._gemMaxLevel=parseInt(obj.maxlevel);
			this._curAttrs=ItemFitGem.getYuHunAttrList(obj.attr_formula,obj.attr,this.gemLevel);
			this._nextAttrs=ItemFitGem.getYuHunAttrList(obj.attr_formula,obj.attr,this.gemLevel+1);
			this._specialAttrs=AttributeUtil.JArrToAttList2(obj.attr2);
			this._upCostItem=ItemFitGem.getYuHunUpCost(obj.upgrade_formula,this.gemLevel);
			this._decomposeGetItem=ItemFitGem.getYuHunUpCost(obj.resolve_formula,this.gemLevel);
			this._totalAttr=[];
			AttributeUtil.AttListAddToList(this._totalAttr,this._curAttrs,true);
			AttributeUtil.AttListAddToList(this._totalAttr,this._specialAttrs,true);
			this._power=PowerUtil.GetAttListPower(this._totalAttr);
		}
	}

	__proto.Clone=function(){
		var ret=_super.prototype.Clone.call(this);
		ret.gemLevel=this.gemLevel;
		return ret;
	}

	__getset(0,__proto,'power',function(){
		this.initParams(false);
		return this._power;
	});

	__getset(0,__proto,'upCostItem',function(){
		this.initParams(false);
		return this._upCostItem;
	});

	__getset(0,__proto,'name',function(){
		if (this.gemLevel > 1)
			return ItemUtil.GetItemNameByItem(this)+" +"+this.gemLevel;
		return ItemUtil.GetItemNameByItem(this);
	});

	__getset(0,__proto,'gemType',function(){
		this.initParams(false);
		return this._gemType;
	});

	__getset(0,__proto,'curAttrs',function(){
		this.initParams(false);
		return this._curAttrs;
	});

	__getset(0,__proto,'specialAttrs',function(){
		this.initParams(false);
		return this._specialAttrs;
	});

	__getset(0,__proto,'nextAttrs',function(){
		this.initParams(false);
		return this._nextAttrs;
	});

	__getset(0,__proto,'totalAttr',function(){
		this.initParams(false);
		return this._totalAttr;
	});

	__getset(0,__proto,'decomposeGetItem',function(){
		this.initParams(false);
		return this._decomposeGetItem;
	});

	__getset(0,__proto,'modelId',_super.prototype._$get_modelId,function(value){
		Laya.superSet(Item,this,'modelId',value);
		this.initParams(true);
	});

	__getset(0,__proto,'gemLevel',function(){
		return Math.max(1,this._gemLevel);
		},function(value){
		if (value < 1)
			value=1;
		if (this._gemLevel !=value){
			this._gemLevel=value;
			this.initParams(true);
		}
	});

	__getset(0,__proto,'gemMaxLevel',function(){
		this.initParams(false);
		return Math.max(1,this._gemMaxLevel);
	});

	__getset(0,__proto,'level',function(){
		return this.gemLevel;
	});

	ItemFitGem.getYuHunAttrList=function(attrLevelStr,attrArr,level){
		var ratio=FormulaUtil.Compute(attrLevelStr,{level:level})/ 10000;
		var ret=AttributeUtil.JArrToAttList2(attrArr,ratio);
		return ret;
	}

	ItemFitGem.getYuHunUpCost=function(costStr,level){
		var index=costStr.indexOf(",");
		var id=parseInt(costStr.substr(0,index));
		var num=FormulaUtil.Compute(costStr.substr(index+1),{level:level});
		return ItemUtil.ItemIdToItem(id,Math.floor(num));
	}

	return ItemFitGem;
})(Item)


//class enem.com.game.player.bean.HeroInSceneBean extends engine.base.data.Bean
var HeroInSceneBean=(function(_super){
	function HeroInSceneBean(){
		this.isMainPlayer=false;
		/**类型（0：角色1，1：角色2，2：角色3）**/
		this.heroType=0;
		/**基础信息 */
		this.basic=null;
		/**外观 */
		this.exterior=null;
		HeroInSceneBean.__super.call(this);
	}

	__class(HeroInSceneBean,'enem.com.game.player.bean.HeroInSceneBean',_super);
	return HeroInSceneBean;
})(Bean)


/**
*武将战斗数据
*/
//class enem.com.game.battle.common.bean.PetInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var PetInBattleBean=(function(_super){
	function PetInBattleBean(){
		/**光环 */
		this.guanghuan=0;
		/**守护 */
		this.shouhu=0;
		/**0：第一武将，1：第二武将，2：第三武将**/
		this.battlePos=0;
		PetInBattleBean.__super.call(this);
	}

	__class(PetInBattleBean,'enem.com.game.battle.common.bean.PetInBattleBean',_super);
	var __proto=PetInBattleBean.prototype;
	__proto.clear=function(){
		_super.prototype.clear.call(this);
		this.guanghuan=this.shouhu=0;
	}

	__proto.Clone=function(){
		var clone=new PetInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		clone.guanghuan=this.guanghuan;
		clone.shouhu=this.shouhu;
		clone.battlePos=this.battlePos;
		return clone;
	}

	return PetInBattleBean;
})(ObjectInBattleBean)


//class enem.com.game.items.obj.ItemUpgradeEquip extends enem.com.game.items.obj.Item
var ItemUpgradeEquip=(function(_super){
	function ItemUpgradeEquip(){
		this.power=0;
		this._extraParams=null;
		this._bestAttr=null;
		ItemUpgradeEquip.__super.call(this);
	}

	__class(ItemUpgradeEquip,'enem.com.game.items.obj.ItemUpgradeEquip',_super);
	var __proto=ItemUpgradeEquip.prototype;
	__proto.SetInfo=function(goods){
		_super.prototype.SetInfo.call(this,goods);
		this._extraParams=goods.extraParam;
	}

	__proto.SetModelId=function(mid){
		_super.prototype.SetModelId.call(this,mid);
		this.power=PowerUtil.GetAttListPower(this.baseAttr)+PowerUtil.GetAttListPower(this.extraAttr);
	}

	__getset(0,__proto,'upgradeType',function(){
		return (ItemConfigFactory.Ins.Get(this._modelId)).type;
	});

	__getset(0,__proto,'extraAttr',function(){
		return (ItemConfigFactory.Ins.Get(this._modelId)).extraAttr;
	});

	__getset(0,__proto,'upgradeGridId',function(){
		return (ItemConfigFactory.Ins.Get(this._modelId)).gridId;
	});

	/**极品属性*/
	__getset(0,__proto,'bestAtts',function(){
		if (this._bestAttr==null){
			this._bestAttr=[];
			if(this._extraParams !=null){
				var params=this._extraParams;
				for (var i=0;i < params.length;i+=2){
					var vo=new AttributeVo();
					vo.type=params[i];
					vo.value=params[i+1];
					this._bestAttr.push(vo);
				}
			}
		}
		return this._bestAttr;
	});

	__getset(0,__proto,'baseAttr',function(){
		return (ItemConfigFactory.Ins.Get(this._modelId)).baseAttr;
	});

	__getset(0,__proto,'jie',function(){
		return (ItemConfigFactory.Ins.Get(this._modelId)).jie;
	});

	return ItemUpgradeEquip;
})(Item)


/**
*怪物战斗数据
*/
//class enem.com.game.battle.common.bean.MonsterInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var MonsterInBattleBean=(function(_super){
	function MonsterInBattleBean(){
		this.restype=0;
		this.resid=0;
		MonsterInBattleBean.__super.call(this);
	}

	__class(MonsterInBattleBean,'enem.com.game.battle.common.bean.MonsterInBattleBean',_super);
	var __proto=MonsterInBattleBean.prototype;
	__proto.clear=function(){
		_super.prototype.clear.call(this);
		this.restype=this.resid=0;
	}

	__proto.Clone=function(){
		var clone=new MonsterInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		clone.restype=this.restype;
		clone.resid=this.resid;
		return clone;
	}

	return MonsterInBattleBean;
})(ObjectInBattleBean)


//class enem.com.game.player.bean.PetInSceneBean extends engine.base.data.Bean
var PetInSceneBean=(function(_super){
	function PetInSceneBean(){
		this.basic=null;
		/**配置ID */
		this.mid=0;
		/**宠物类型 （EnumPetType） */
		this.type=0;
		/**爸爸 */
		this.parentID=0;
		/**通灵等级 */
		this.tongling=0;
		/**兽魂等级 */
		this.shouhun=0;
		/**武将战斗设置站位**/
		this.battlePos=0;
		/**是否是合体**/
		this.isFit=false;
		/**玄女-花撵 */
		this.huanian=0;
		/**玄女-灵气 */
		this.lingqi=0;
		/**精灵等级**/
		this.spriteLv=0;
		/**精灵皮肤**/
		this.spriteSkin=0;
		this.beautyFz=0;
		this.beautyLq=0;
		PetInSceneBean.__super.call(this);
	}

	__class(PetInSceneBean,'enem.com.game.player.bean.PetInSceneBean',_super);
	return PetInSceneBean;
})(Bean)


/**
*不要有任何成员
*@author Administrator
*
*/
//class enem.com.game.player.events.PlayerEvent extends laya.events.Event
var PlayerEvent=(function(_super){
	function PlayerEvent(){
		PlayerEvent.__super.call(this);;
	}

	__class(PlayerEvent,'enem.com.game.player.events.PlayerEvent',_super);
	PlayerEvent.GET_PLAYER_INFO="getPlayerInfo";
	PlayerEvent.GET_OTHER_PLAYER_INFO="getOtherPlayerInfo";
	PlayerEvent.HERO_ATTRIBUTE_CHANGE="hero_attribute_change";
	PlayerEvent.MAINPLAYER_EXP_CHANGE="mainplayer_exp_change";
	PlayerEvent.MAIN_PLAYER_LEVEL_CHANGE="mainplayer_level_change";
	PlayerEvent.MAIN_PLAYER_GOLD_CHANGE="mainplayer_gold_change";
	PlayerEvent.MAIN_PLAYER_BINDGOLD_CHANGE="mainplayer_bindgold_change";
	PlayerEvent.MAIN_PLAYER_MONEY_CHANGE="mainplayer_money_change";
	PlayerEvent.MAIN_PLAYER_ZHOUSHUJINGHUA="mainplayer_zhoushujinghua_change";
	PlayerEvent.MAIN_PLAYER_REIN_LEVEL="mainplayer_rein_level";
	PlayerEvent.MAIN_PLAYER_REIN_XIUWEI="mainplayer_rein_xiuwei";
	PlayerEvent.MAIN_PLAYER_SANGUOBI_CHANGE="mainplayer_sanguobi_change";
	PlayerEvent.MAIN_PLAYER_EMPTY_CITY_SCORE_CHANGE="MAIN_PLAYER_EMPTY_CITY_SCORE_CHANGE";
	PlayerEvent.MAIN_PLAYER_PET_EXP_CHANGE="MAIN_PLAYER_PET_EXP_CHANGE";
	PlayerEvent.MAIN_PLAYER_NAME_CHANGE="main_player_name_change";
	PlayerEvent.MAIN_PLAYER_CURRENCY_CHANGE="mainplayer_value_change";
	PlayerEvent.UPDATE_JINGLING_LEVEL="UPDATE_JINGLING_LEVEL";
	PlayerEvent.HERO_ADD="hero_add";
	PlayerEvent.HERO_ADD_ERROR="hero_add_error";
	PlayerEvent.ROLE_HERO_SELECT="hero_select";
	PlayerEvent.DAY_END="day_end";
	PlayerEvent.RES_EQUIP_ILLUSION="ResEquipIllusionMessage";
	PlayerEvent.ERR_ITEM="ERR_ITEM";
	PlayerEvent.EquipMaking="EquipMaking";
	PlayerEvent.EquipPromote="EquipPromote";
	PlayerEvent.EquipMakingStone="EquipMakingStone";
	PlayerEvent.RECSUITUPDATEINFO="RecSuitUpdateInfo";
	PlayerEvent.EquipMakingRed="EquipMakingRed";
	PlayerEvent.EquipPromoteRed="EquipPromoteRed";
	PlayerEvent.EquipMakingStoneRed="EquipMakingStoneRed";
	PlayerEvent.DAZAO_SUCCESS=0;
	PlayerEvent.SHENGPING_SUCCESS=1;
	PlayerEvent.HECHENG_UCCESS=2;
	PlayerEvent.Compose_Change="Compose_Change";
	return PlayerEvent;
})(Event)


/**命格装备**/
//class enem.com.game.items.obj.ItemMingGe extends enem.com.game.items.obj.Item
var ItemMingGe=(function(_super){
	function ItemMingGe(){
		/**命格等级**/
		this._mgLevel=1;
		/**命格类型**/
		this._mgType=-1;
		/**当前等级属性列表**/
		this._curAttrs=null;
		/**下一等级属性列表**/
		this._nextAttrs=null;
		/**升级消耗道具**/
		this._upCostItem=null;
		/**分解获得道具**/
		this._decomposeGetItem=null;
		/**当前等级战力**/
		this._power=-1;
		this.isInit=false;
		this.maxlv=0;
		ItemMingGe.__super.call(this);
	}

	__class(ItemMingGe,'enem.com.game.items.obj.ItemMingGe',_super);
	var __proto=ItemMingGe.prototype;
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		if (info.extraParam && info.extraParam.length > 0)
			this.mgLevel=info.extraParam[0];
	}

	__proto.initParams=function(isForce){
		if (!this.isInit || isForce){
			this.isInit=true;
			var obj=JSONUtil.decode(this.model.q_param);
			this._mgType=parseInt(obj.type);
			this._curAttrs=this.getYuHunAttrList(obj.attr_formula,obj.attr,this.mgLevel);
			this._nextAttrs=this.getYuHunAttrList(obj.attr_formula,obj.attr,this.mgLevel+1);
			this._upCostItem=this.getYuHunUpCost(obj.upgrade_formula,this.mgLevel);
			this._decomposeGetItem=this.getYuHunUpCost(obj.resolve_formula,this.mgLevel);
			this._power=PowerUtil.GetAttListPower(this._curAttrs);
			this.maxlv=obj.max_level;
		}
	}

	/**
	*获得御魂装备升级消耗
	*@param costStr 2000013,pow(level,2)
	*@param level
	*@return
	*/
	__proto.getYuHunUpCost=function(costStr,level){
		var index=costStr.indexOf(",");
		var id=parseInt(costStr.substr(0,index));
		var num=FormulaUtil.Compute(costStr.substr(index+1),{level:level});
		return ItemUtil.ItemIdToItem(id,Math.floor(num));
	}

	/**
	*获得御魂属性列表
	*@param attrLevelStr level*10000
	*@param attrArr [[1,150]]
	*@param level
	*@return
	*/
	__proto.getYuHunAttrList=function(attrLevelStr,attrArr,level){
		var ratio=FormulaUtil.Compute(attrLevelStr,{level:level})/ 10000;
		var ret=AttributeUtil.JArrToAttList2(attrArr,ratio);
		return ret;
	}

	__proto.Clone=function(){
		var ret=_super.prototype.Clone.call(this);
		ret.mgLevel=this.mgLevel;
		return ret;
	}

	__getset(0,__proto,'power',function(){
		this.initParams(false);
		return this._power;
	});

	__getset(0,__proto,'upCostItem',function(){
		this.initParams(false);
		return this._upCostItem;
	});

	__getset(0,__proto,'name',function(){
		if (this.mgLevel > 1)
			return ItemUtil.GetItemNameByItem(this)+" +"+this.mgLevel;
		return ItemUtil.GetItemNameByItem(this);
	});

	__getset(0,__proto,'mgLevel',function(){
		return Math.max(1,this._mgLevel);
		},function(value){
		if (value < 1)
			value=1;
		if (this._mgLevel !=value){
			this._mgLevel=value;
			this.initParams(true);
		}
	});

	__getset(0,__proto,'decomposeGetItem',function(){
		this.initParams(false);
		return this._decomposeGetItem;
	});

	__getset(0,__proto,'mgType',function(){
		this.initParams(false);
		return this._mgType;
	});

	__getset(0,__proto,'curAttrs',function(){
		this.initParams(false);
		return this._curAttrs;
	});

	__getset(0,__proto,'nextAttrs',function(){
		this.initParams(false);
		return this._nextAttrs;
	});

	__getset(0,__proto,'modelId',_super.prototype._$get_modelId,function(value){
		Laya.superSet(Item,this,'modelId',value);
		this.initParams(true);
	});

	__getset(0,__proto,'level',function(){
		return this.mgLevel;
	});

	return ItemMingGe;
})(Item)


/**御魂装备**/
//class enem.com.game.items.obj.ItemYuHun extends enem.com.game.items.obj.Item
var ItemYuHun=(function(_super){
	function ItemYuHun(){
		/**御魂等级**/
		this._yhLevel=0;
		/**御魂最大等级**/
		this._yhMaxLevel=1;
		/**御魂部位ID**/
		this._yhPartID=-1;
		/**当前等级属性列表**/
		this._curAttrs=null;
		/**下一等级属性列表**/
		this._nextAttrs=null;
		/**升级消耗道具**/
		this._upCostItem=null;
		/**分解获得道具**/
		this._decomposeGetItem=null;
		/**当前等级战力**/
		this._power=-1;
		this.isInit=false;
		ItemYuHun.__super.call(this);
	}

	__class(ItemYuHun,'enem.com.game.items.obj.ItemYuHun',_super);
	var __proto=ItemYuHun.prototype;
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		if (info.extraParam && info.extraParam.length > 0)
			this.yhLevel=info.extraParam[0];
	}

	__proto.initParams=function(isForce){
		if (!this.isInit || isForce){
			this.isInit=true;
			var obj=JSONUtil.decode(this.model.q_param);
			this._yhPartID=parseInt(obj.type);
			this._yhMaxLevel=parseInt(obj.max_level);
			this._curAttrs=enem.com.game.beauty.BeautyUtil.getYuHunAttrList(obj.attr_formula,obj.attr,this.yhLevel);
			this._nextAttrs=enem.com.game.beauty.BeautyUtil.getYuHunAttrList(obj.attr_formula,obj.attr,this.yhLevel+1);
			this._upCostItem=enem.com.game.beauty.BeautyUtil.getYuHunUpCost(obj.upgrade_formula,this.yhLevel);
			this._decomposeGetItem=enem.com.game.beauty.BeautyUtil.getYuHunUpCost(obj.resolve_formula,this.yhLevel);
			this._power=PowerUtil.GetAttListPower(this._curAttrs);
		}
	}

	__proto.Clone=function(){
		var ret=_super.prototype.Clone.call(this);
		ret.yhLevel=this.yhLevel;
		return ret;
	}

	__getset(0,__proto,'power',function(){
		this.initParams(false);
		return this._power;
	});

	__getset(0,__proto,'upCostItem',function(){
		this.initParams(false);
		return this._upCostItem;
	});

	__getset(0,__proto,'name',function(){
		if (this.yhLevel > 1)
			return ItemUtil.GetItemNameByItem(this)+" +"+this.yhLevel;
		return ItemUtil.GetItemNameByItem(this);
	});

	__getset(0,__proto,'yhPartID',function(){
		this.initParams(false);
		return this._yhPartID;
	});

	__getset(0,__proto,'curAttrs',function(){
		this.initParams(false);
		return this._curAttrs;
	});

	__getset(0,__proto,'yhMaxLevel',function(){
		this.initParams(false);
		return Math.max(1,this._yhMaxLevel);
	});

	__getset(0,__proto,'nextAttrs',function(){
		this.initParams(false);
		return this._nextAttrs;
	});

	__getset(0,__proto,'decomposeGetItem',function(){
		this.initParams(false);
		return this._decomposeGetItem;
	});

	__getset(0,__proto,'yhLevel',function(){
		return Math.max(1,this._yhLevel);
		},function(value){
		if (value < 1)
			value=1;
		if (this._yhLevel !=value){
			this._yhLevel=value;
			this.initParams(true);
		}
	});

	__getset(0,__proto,'level',function(){
		return this.yhLevel;
	});

	return ItemYuHun;
})(Item)


//class enem.com.game.items.obj.ItemZhoushu extends enem.com.game.items.obj.Item
var ItemZhoushu=(function(_super){
	function ItemZhoushu(){
		/**咒术等级**/
		this.lv=1;
		this._attrs=null;
		this._Nattrs=null;
		/**当前等级战力**/
		this._power=-1;
		ItemZhoushu.__super.call(this);
	}

	__class(ItemZhoushu,'enem.com.game.items.obj.ItemZhoushu',_super);
	var __proto=ItemZhoushu.prototype;
	/**
	*设置配置的json
	*@param info
	*/
	__proto.SetJsonObject=function(jsono,info){
		_super.prototype.SetJsonObject.call(this,jsono);
		if (jsono.paras !=null){}
			}
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		if (info.extraParam && info.extraParam.length > 0)
			this.lv=info.extraParam[0];
		this._attrs=ZhouShuUtil.GetZhanwenAttr(this.modelId,this.lv);
		this._power=PowerUtil.GetAttListPower(this.attrs);
		this._Nattrs=ZhouShuUtil.GetZhanwenAttr(this.modelId,this.lv+1);
	}

	__proto.Clone=function(){
		var ret=_super.prototype.Clone.call(this);
		ret.lv=this.lv;
		return ret;
	}

	__getset(0,__proto,'power',function(){
		this._power=PowerUtil.GetAttListPower(this.attrs);
		return this._power;
	});

	__getset(0,__proto,'style',function(){
		return ZhouShuUtil.GetZhanwenType(this.modelId);
	});

	__getset(0,__proto,'name',function(){
		return ItemUtil.GetItemNameByItem(this)+"Lv."+this.lv;
	});

	/**
	*带品质颜色的物品名字
	*/
	__getset(0,__proto,'name2',function(){
		return TextUtil.GetHtmlStr(this.name,ColorUtil$1.getQualityColor(ItemUtil.GetItemQualityByMod(this.model)));
	});

	__getset(0,__proto,'attrs',function(){
		this._attrs=ZhouShuUtil.GetZhanwenAttr(this.modelId,this.lv);
		return this._attrs;
	});

	__getset(0,__proto,'Nattrs',function(){
		if (this._Nattrs==null){
			this._Nattrs=ZhouShuUtil.GetZhanwenAttr(this.modelId,this.lv+1);
		}
		return this._Nattrs;
	});

	return ItemZhoushu;
})(Item)


//class enem.com.game.items.obj.ItemHorseEquip extends enem.com.game.items.obj.Item
var ItemHorseEquip=(function(_super){
	function ItemHorseEquip(){
		this.star=1;
		this._attrs=null;
		this._power=-1;
		ItemHorseEquip.__super.call(this);
	}

	__class(ItemHorseEquip,'enem.com.game.items.obj.ItemHorseEquip',_super);
	var __proto=ItemHorseEquip.prototype;
	__proto.SetInfo=function(info){
		_super.prototype.SetInfo.call(this,info);
		if(info.extraParam && info.extraParam.length>0)
			this.star=info.extraParam[0];
	}

	__proto.Clone=function(){
		var ret=_super.prototype.Clone.call(this);
		ret.star=this.star;
		return ret;
	}

	// _power=Mgr.fightPowerMgr.GetAttListPower(attrs);
	__getset(0,__proto,'attrs',function(){
		if(this._attrs==null){
		}
		return this._attrs;
	});

	__getset(0,__proto,'power',function(){
		if(this._attrs==null){
		}
		return this._power;
	});

	return ItemHorseEquip;
})(Item)


//class enem.com.game.items.cfg.ItemConfigShuxingdan extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigShuxingdan=(function(_super){
	function ItemConfigShuxingdan(type){
		this.max=0;
		this.type=0;
		this._attr=[];
		ItemConfigShuxingdan.__super.call(this,type);
	}

	__class(ItemConfigShuxingdan,'enem.com.game.items.cfg.ItemConfigShuxingdan',_super);
	var __proto=ItemConfigShuxingdan.prototype;
	__proto.SetConfig=function(model){
		if (model.q_param){
			var o=JSONUtil.decode(model.q_param);
			this._attr=AttributeUtil.JArrStrToAttList(o.attribute);
			this.max=o.max;
			this.type=o.type;
		}
	}

	__proto.GetAttribute=function(num){
		var ret=AttributeUtil.CloneAttrArr(this._attr);
		for (var i=0;i < ret.length;++i){
			ret[i].value *=num;
		}
		return ret;
	}

	return ItemConfigShuxingdan;
})(ItemConfigBase)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*场景中的对象
*/
//class enem.com.game.player.bean.ObjectInSceneBean extends engine.base.data.Bean
var ObjectInSceneBean=(function(_super){
	function ObjectInSceneBean(){
		/**唯一ID */
		this.ID=0;
		/**服务器ID**/
		this.uid=null;
		/**坐标 */
		this.position=0;
		ObjectInSceneBean.__super.call(this);
	}

	__class(ObjectInSceneBean,'enem.com.game.player.bean.ObjectInSceneBean',_super);
	return ObjectInSceneBean;
})(Bean)


/**
*红颜战斗数据
*/
//class enem.com.game.battle.common.bean.HongYanInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var HongYanInBattleBean=(function(_super){
	function HongYanInBattleBean(){
		this.lq=0;
		this.fz=0;
		HongYanInBattleBean.__super.call(this);
	}

	__class(HongYanInBattleBean,'enem.com.game.battle.common.bean.HongYanInBattleBean',_super);
	var __proto=HongYanInBattleBean.prototype;
	__proto.Clone=function(){
		var clone=new HongYanInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		clone.lq=this.lq;
		clone.fz=this.fz;
		return clone;
	}

	return HongYanInBattleBean;
})(ObjectInBattleBean)


//class enem.com.game.items.obj.ItemFitEquip extends enem.com.game.items.obj.Item
var ItemFitEquip=(function(_super){
	function ItemFitEquip(){
		this._power=0;
		this._levelnum=0;
		this._extraParams=null;
		this._disposeItems=null;
		this._bestAttr=null;
		this._baseAttr=null;
		ItemFitEquip.__super.call(this);
	}

	__class(ItemFitEquip,'enem.com.game.items.obj.ItemFitEquip',_super);
	var __proto=ItemFitEquip.prototype;
	__proto.SetFitEquipInfo=function(info){
		_super.prototype.SetFitEquipInfo.call(this,info);
		this._bestAttr=null;
		this._power=0;
		this.UpdateLevelNum();
		this._disposeItems=ItemUtil.JsonStringToItemList(this.model.q_dispose);
	}

	__proto.SetJsonObject=function(jsono,numparam){
		_super.prototype.SetJsonObject.call(this,jsono,numparam);
		this._bestAttr=null;
		this._power=0;
		this.UpdateLevelNum();
	}

	__proto.getDisposItems=function(){
		return this._disposeItems;
	}

	__proto.UpdateLevelNum=function(){
		this._levelnum=this.level;
	}

	/**
	*比较哪个装备好
	*@return 1这个装备好 0相等-1equ好
	*/
	__proto.Compare=function(equ){
		if (equ==null)
			return 1;
		var score1=this.power;
		var score2=equ.power;
		if (score1 > score2)
			return 1;
		else if (score1 < score2)
		return-1;
		return 0;
	}

	__proto.Combine=function(item){
		return item;
	}

	/**极品属性*/
	__getset(0,__proto,'bestAtts',function(){
		if (this._bestAttr==null){
			this._bestAttr=[];
			if (this._extraParams !=null){
				var params=this._extraParams;
				for (var i=0;i < params.length;i+=2){
					var vo=new AttributeVo();
					vo.type=params[i];
					vo.value=params[i+1];
					this._bestAttr.push(vo);
				}
			}
		}
		return this._bestAttr;
	});

	/**阶数*/
	__getset(0,__proto,'levelnum',function(){
		return this._levelnum;
	});

	__getset(0,__proto,'isGod',function(){
		return this.quality==5;
	});

	/**
	*评分
	*/
	__getset(0,__proto,'score',function(){
		return (this.config).score;
	});

	/**
	*穿戴后加的buff
	*/
	__getset(0,__proto,'buff',function(){
		return (this.config).buff;
	});

	/**
	*基础属性
	*/
	__getset(0,__proto,'baseAttrs',function(){
		if (this._baseAttr==null)
			this._baseAttr=(this.config).attr1;
		return this._baseAttr;
	});

	/**装备属性战力**/
	__getset(0,__proto,'power',function(){
		if (this._power==0){
			var xx=[];
			AttributeUtil.AttListAddToList(xx,this.baseAttrs,true);
			AttributeUtil.AttListAddToList(xx,this.bestAtts,true);
			this._power=PowerUtil.GetAttListPower(xx);
		}
		return this._power;
	});

	/**装备部位**/
	__getset(0,__proto,'grid',function(){
		var part=(this.config).gridId;
		return part;
	});

	return ItemFitEquip;
})(Item)


/**
*装备道具配置参数
*/
//class enem.com.game.items.cfg.ItemConfigEquip extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigEquip=(function(_super){
	function ItemConfigEquip(type){
		/**格子id**/
		this.gridId=0;
		/**穿戴后新增的buff**/
		this.buff=0;
		/**职业**/
		this.job=0;
		/**评分**/
		this.score=0;
		/**外观等级**/
		this.showlevel=0;
		/**适用id**/
		this.mid=0;
		// 分解获得的物品（暂时只解析橙装的，其他需要用再说）
		this.disposeItems=null;
		this._attr1=[];
		this._attr2=[];
		ItemConfigEquip.__super.call(this,type);
	}

	__class(ItemConfigEquip,'enem.com.game.items.cfg.ItemConfigEquip',_super);
	var __proto=ItemConfigEquip.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		if (!o || !o.grid){
			return;
		}
		this.mid=model.q_id;
		this.gridId=o.grid;
		AttributeUtil.JArrToAttList(o.attr1,this._attr1);
		AttributeUtil.JArrToAttList(o.attr2,this._attr2);
		this.buff=o.buff;
		this.job=o.job;
		this.score=o.score;
		this.showlevel=o.showLevel;
		if (model.q_dispose_type==2){
			this.disposeItems=ItemUtil.JsonStringToItemList(model.q_dispose);
		}
	}

	__getset(0,__proto,'attr1',function(){
		return AttributeUtil.CloneAttrArr(this._attr1);
	});

	__getset(0,__proto,'attr2',function(){
		return AttributeUtil.CloneAttrArr(this._attr2);
	});

	return ItemConfigEquip;
})(ItemConfigBase)


/**
*机关数据
*/
//class enem.com.game.battle.common.bean.JiGuanInBattleBean extends enem.com.game.battle.common.bean.ObjectInBattleBean
var JiGuanInBattleBean=(function(_super){
	function JiGuanInBattleBean(){
		this.fuwen=0;
		JiGuanInBattleBean.__super.call(this);
	}

	__class(JiGuanInBattleBean,'enem.com.game.battle.common.bean.JiGuanInBattleBean',_super);
	var __proto=JiGuanInBattleBean.prototype;
	__proto.clear=function(){
		_super.prototype.clear.call(this);
		this.fuwen=0;
	}

	__proto.Clone=function(){
		var clone=new JiGuanInBattleBean;
		clone.row=this.row;
		clone.pos=this.pos;
		clone.gid=this.gid;
		clone.mid=this.mid;
		clone.maxhp=this.maxhp;
		clone.curhp=this.curhp;
		clone.fitQuality=this.fitQuality;
		clone.monsterShowID=this.monsterShowID;
		clone.star=this.star;
		clone.isFit=this.isFit;
		clone.fuwen=this.fuwen;
		return clone;
	}

	return JiGuanInBattleBean;
})(ObjectInBattleBean)


/**
*咒术道具类型
*/
//class enem.com.game.items.cfg.ItemConfigZhoushu extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigZhoushu=(function(_super){
	function ItemConfigZhoushu(type){
		/**属性公式**/
		this.attr_formula=null;
		/**给对应格子增加属性**/
		this._gridattr=null;
		/**给对应格子增加属性的公式**/
		this._grid_formula=null;
		/**升级公式**/
		this.upgrade_formula=null;
		/**分解公式**/
		this.resolve_formula=null;
		/**type表示类型，同类型的战纹仅能装备一个**/
		this.type=0;
		this._attr=[];
		ItemConfigZhoushu.__super.call(this,type);
	}

	__class(ItemConfigZhoushu,'enem.com.game.items.cfg.ItemConfigZhoushu',_super);
	var __proto=ItemConfigZhoushu.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		AttributeUtil.JArrToAttList(o.attr,this._attr);
		this.attr_formula=o.attr_formula;
		this.upgrade_formula=o.upgrade_formula;
		this.resolve_formula=o.resolve_formula;
		this.type=o.type;
		if(o.grid2formula!=null){
			this._gridattr=[];
			for(var key in o.grid2formula){
				var vo=new AttributeVo();
				vo.type=parseInt(key)+1000;
				vo.value=1;
				this._gridattr.push(vo);
			}
			this._grid_formula=o.grid2formula;
		}
	}

	__getset(0,__proto,'attr',function(){
		return AttributeUtil.CloneAttrArr(this._attr);
	});

	__getset(0,__proto,'gridattr',function(){
		return AttributeUtil.CloneAttrArr(this._gridattr);
	});

	__getset(0,__proto,'grid_formula',function(){
		return this._grid_formula;
	});

	return ItemConfigZhoushu;
})(ItemConfigBase)


/**
*进阶直升丹道具
*/
//class enem.com.game.items.cfg.ItemConfigUpgradeImm extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigUpgradeImm=(function(_super){
	function ItemConfigUpgradeImm(type){
		this.mid=0;
		this.type=0;
		this.level=0;
		ItemConfigUpgradeImm.__super.call(this,type);
	}

	__class(ItemConfigUpgradeImm,'enem.com.game.items.cfg.ItemConfigUpgradeImm',_super);
	var __proto=ItemConfigUpgradeImm.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		if (o==null)return;
		this.type=o.type ? o.type :0;
		this.level=o.level ? o.level :0;
	}

	return ItemConfigUpgradeImm;
})(ItemConfigBase)


//class enem.com.game.items.cfg.ItemConfigFitEquip extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigFitEquip=(function(_super){
	function ItemConfigFitEquip(type){
		/**格子id**/
		this.gridId=0;
		/**穿戴后新增的buff**/
		this.buff=0;
		/**职业**/
		this.job=0;
		/**评分**/
		this.score=0;
		/**外观等级**/
		this.showlevel=0;
		// 分解获得的物品（暂时只解析橙装的，其他需要用再说）
		this.disposeItems=null;
		this._attr1=[];
		this._attr2=[];
		this._extraAttr=[];
		ItemConfigFitEquip.__super.call(this,type);
	}

	__class(ItemConfigFitEquip,'enem.com.game.items.cfg.ItemConfigFitEquip',_super);
	var __proto=ItemConfigFitEquip.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		if (!o || !o.grid){
			return;
		}
		this.gridId=o.grid;
		AttributeUtil.JArrToAttList(o.attr,this._attr1);
		AttributeUtil.JArrToAttList(o.extra_attr,this._extraAttr);
		this.buff=o.buff;
		this.job=o.job;
		this.score=o.score;
		this.showlevel=o.showLevel;
	}

	__getset(0,__proto,'attr1',function(){
		return AttributeUtil.CloneAttrArr(this._attr1);
	});

	__getset(0,__proto,'attr2',function(){
		return AttributeUtil.CloneAttrArr(this._attr2);
	});

	return ItemConfigFitEquip;
})(ItemConfigBase)


/**
*秘籍
*/
//class enem.com.game.items.cfg.ItemConfigMiJi extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigMiJi=(function(_super){
	function ItemConfigMiJi(type){
		/**评分**/
		this.score=0;
		/**添加的skill**/
		this.skill=0;
		/**秘籍类型**/
		this.type=0;
		/**秘籍加的战斗力**/
		this.fightpower=0;
		/**等级**/
		this.level=0;
		this.attrList=null;
		ItemConfigMiJi.__super.call(this,type);
	}

	__class(ItemConfigMiJi,'enem.com.game.items.cfg.ItemConfigMiJi',_super);
	var __proto=ItemConfigMiJi.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		this.score=o.score;
		this.skill=o.skill;
		this.type=o.type;
		this.fightpower=o.fightpower;
		this.level=o.level;
		this.attrList=this.getSkillBaseAttr(o.skill,1);
		this.fightpower+=PowerUtil.GetAttListPower(this.attrList);
	}

	__proto.getSkillBaseAttr=function(mid,lv){
		var mode=Q_skill_modelContainer.GetValue(mid);
		if (mode){
			var StrAttr=new SkillAttrAllFormula();
			StrAttr.SetData(mode.q_attribute);
			return StrAttr.GetAttrs({level:lv});
		}
		return null;
	}

	return ItemConfigMiJi;
})(ItemConfigBase)


/**
*升阶系统装备
*/
//class enem.com.game.items.cfg.ItemConfigUpgradeEquip extends enem.com.game.items.cfg.ItemConfigBase
var ItemConfigUpgradeEquip=(function(_super){
	function ItemConfigUpgradeEquip(type){
		// 升阶系统类型
		this.type=0;
		this.gridId=0;
		// 需要的系统阶数
		this.jie=0;
		this.baseAttr=[];
		this.extraAttr=[];
		ItemConfigUpgradeEquip.__super.call(this,type);
	}

	__class(ItemConfigUpgradeEquip,'enem.com.game.items.cfg.ItemConfigUpgradeEquip',_super);
	var __proto=ItemConfigUpgradeEquip.prototype;
	__proto.SetConfig=function(model){
		var o=JSONUtil.decode(model.q_param);
		this.type=o.type;
		AttributeUtil.JArrToAttList(o.attr,this.baseAttr);
		AttributeUtil.JArrToAttList(o.extra_attr,this.extraAttr);
		this.gridId=o.grid;
		this.jie=o.level;
	}

	return ItemConfigUpgradeEquip;
})(ItemConfigBase)


//class enem.com.game.manjiang.events.ManJiangEvent extends boots.GameEvent
var ManJiangEvent=(function(_super){
	function ManJiangEvent(){
		ManJiangEvent.__super.call(this);;
	}

	__class(ManJiangEvent,'enem.com.game.manjiang.events.ManJiangEvent',_super);
	ManJiangEvent.CLICK_HEAD="CLICK_HEAD";
	ManJiangEvent.MAN_JIHUO="MAN_JIHUO";
	ManJiangEvent.MAN_UP="MAN_UP";
	ManJiangEvent.MAN_UPERR="MAN_UPERR";
	ManJiangEvent.MAN_BREAK="MAN_BREAK";
	ManJiangEvent.MAN_FIGHT="MAN_FIGHT";
	ManJiangEvent.RADIO_CHANGE="RADIO_CHANGE";
	ManJiangEvent.MAN_FAQIUP="MAN_FAQIUP";
	ManJiangEvent.MAN_MAIUP="MAN_MAIUP";
	ManJiangEvent.MAN_JUEWUUP="MAN_JUEWUUP";
	ManJiangEvent.MAN_STARUP="MAN_STARUP";
	return ManJiangEvent;
})(GameEvent)


//class enem.com.game.godequip.GodEquipEvent.GodEvent extends boots.GameEvent
var GodEvent=(function(_super){
	function GodEvent(){
		GodEvent.__super.call(this);;
	}

	__class(GodEvent,'enem.com.game.godequip.GodEquipEvent.GodEvent',_super);
	GodEvent.GOD_SHENGJI="SHENGJI";
	GodEvent.GOD_CUILIAN="GOD_CUILIAN";
	GodEvent.GOD_SAVE="GOD_SAVE";
	GodEvent.GOD_SUIT="GOD_SUIT";
	GodEvent.GOD_REPLACE="GOD_REPLACE";
	GodEvent.GOD_POUR="GOD_POUR";
	GodEvent.GOD_SOUL="GOD_SOUL";
	GodEvent.GOD_SHENZHU="GOD_SHENZHU";
	GodEvent.GOD_SHENZHULOCK="GOD_SHENZHULOCK";
	return GodEvent;
})(GameEvent)


//class enem.com.game.junshi.event.JunShiEvent extends boots.GameEvent
var JunShiEvent=(function(_super){
	function JunShiEvent(){
		JunShiEvent.__super.call(this);;
	}

	__class(JunShiEvent,'enem.com.game.junshi.event.JunShiEvent',_super);
	JunShiEvent.JUNSHI_JIHUO="JUNSHI_JIHUO";
	JunShiEvent.JUNSHI_UP="JUNSHI_UP";
	JunShiEvent.JUNSHI_SUMOUNT="JUNSHI_SUMOUNT";
	JunShiEvent.JUNSHI_BREAKAUTO="JUNSHI_BREAKAUTO";
	JunShiEvent.JUNSHI_SETTING="JUNSHI_SETTING";
	JunShiEvent.JUNSHI_HEAD="JUNSHI_HEAD";
	JunShiEvent.JUNSHI_PAGE="JUNSHI_PAGE";
	JunShiEvent.JUNSHI_SINGLE="JUNSHI_SINGLE";
	JunShiEvent.JUNSHI_WAKEUP="JUNSHI_WAKEUP";
	JunShiEvent.JUNSHI_FAQI="JUNSHI_FAQI";
	JunShiEvent.JUNSHI_FAQI_AC="JUNSHI_FAQI_AC";
	JunShiEvent.JUNSHI_FAQI_UP="JUNSHI_FAQI_UP";
	JunShiEvent.JUNSHI_TM_UP="JUNSHI_TM_UP";
	JunShiEvent.JUNSHI_TM_ERR="JUNSHI_TM_ERR";
	JunShiEvent.JUNSHI_TF_UP="JUNSHI_TF_UP";
	JunShiEvent.JUNSHI_JUEXING_ONE="JUNSHI_JUEXING_ONE";
	JunShiEvent.JUNSHI_JUEXING_All="JUNSHI_JUEXING_All";
	JunShiEvent.MATERR="MATERR";
	return JunShiEvent;
})(GameEvent)


/**
*滚动面板诡计条目基类
*/
//class enem.com.game.common.PanelTrickBaseCtrl extends laya.display.Sprite
var PanelTrickBaseCtrl=(function(_super){
	function PanelTrickBaseCtrl(cls,w,h,param){
		this._cls=null;
		this._param=null;
		this._isInView=false;
		this._cell=null;
		PanelTrickBaseCtrl.__super.call(this);
		this._cls=cls;
		this._param=param;
		this.size(w,h);
	}

	__class(PanelTrickBaseCtrl,'enem.com.game.common.PanelTrickBaseCtrl',_super);
	var __proto=PanelTrickBaseCtrl.prototype;
	Laya.imps(__proto,{"engine.pui.scroll.IScrollTrickCell":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.LoseCell();
		this._cls=null;
		this._param=null;
		_super.prototype.destroy.call(this);
	}

	__proto.SetData=function(param){
		this._param=param;
		this.RefreshCell();
	}

	__proto.RefreshCell=function(){
		if (this._cell !=null){
			this._cell.onOpen(this._param);
		}
	}

	__proto.IsInView=function(){
		return this._isInView;
	}

	__proto.SetInView=function(v){
		this._isInView=v;
		if (v){
			this._cell=this.GetCell();
			this.addChild(this._cell);
			this.RefreshCell();
		}
		else{
			this.LoseCell();
		}
	}

	__proto.GetCell=function(){
		if (this._cell==null)this._cell=new this._cls();
		return this._cell;
	}

	__proto.LoseCell=function(){
		if (this._cell !=null){
			this._cell.destroy();
			this._cell=null;
		}
	}

	__getset(0,__proto,'param',function(){
		return this._param;
	});

	__getset(0,__proto,'cell',function(){
		return this._cell;
	});

	return PanelTrickBaseCtrl;
})(Sprite)


/**
*2d 界面特效
*@author Administrator
*/
//class enem.com.base.effect.view.UIEffect2D extends engine.layaex.container.MSprite
var UIEffect2D=(function(_super){
	function UIEffect2D(){
		this._loop=false;
		this._animation=null;
		// 为了克隆，把设置参数保存下来
		this._restype=0;
		this._resid=0;
		this._dir=0;
		// 播放完成自动
		this._isEndPlayDispose=true;
		this._autoRemoveTime=0;
		UIEffect2D.__super.call(this);
		this._animation=new MAnimation2D(null,this,this.OnAnimationPlayEnd);
		this._animation.useDefault=false;
		this.addChild(this._animation);
	}

	__class(UIEffect2D,'enem.com.base.effect.view.UIEffect2D',_super);
	var __proto=UIEffect2D.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if (this._animation){
			this._animation.destroy(destroyChild);
			this._animation=null;
		}
		Laya.timer.clear(this,this.OnFrame);
		laya.display.Sprite.prototype.destroy.call(this,destroyChild);
	}

	__proto.OnAnimationPlayEnd=function(){
		if (this._loop==false){
			if (this._isEndPlayDispose)
				this.destroy();
		}
	}

	__proto.SetAutoRemoveTime=function(ms){
		if (ms > 0){
			if (this.isDestroyed)
				return;
			this._autoRemoveTime=ToolBase.GetTimer()+ms;
			Laya.timer.loop(1,this,this.OnFrame);
		}
		else{
			Laya.timer.clear(this,this.OnFrame);
			this._autoRemoveTime=0;
		}
	}

	__proto.OnFrame=function(){
		if (this._autoRemoveTime !=0 && (Laya.timer.currTimer > this._autoRemoveTime)){
			this.Dispose();
		}
	}

	__getset(0,__proto,'isEndPlayDispose',function(){
		return this._isEndPlayDispose;
		},function(value){
		this._isEndPlayDispose=value;
	});

	__getset(0,__proto,'animation',function(){
		return this._animation;
	});

	UIEffect2D.Create=function(restype,id,dir,loop,blendMode,isUI){
		(dir===void 0)&& (dir=0);
		(loop===void 0)&& (loop=false);
		(blendMode===void 0)&& (blendMode="normal");
		(isUI===void 0)&& (isUI=false);
		var ret=new UIEffect2D();
		ret._loop=loop;
		ret._restype=restype;
		ret._resid=id;
		ret._dir=dir;
		ret._animation.SetData(restype,id);
		ret._animation.DoAction(isUI?100:0,dir,loop);
		ret.blendMode=blendMode;
		return ret;
	}

	UIEffect2D.CreateExtra=function(restype,id,dir,loop,isReverse){
		(dir===void 0)&& (dir=0);
		(loop===void 0)&& (loop=false);
		(isReverse===void 0)&& (isReverse=false);
		var ret=new UIEffect2D();
		ret._loop=loop;
		ret._restype=restype;
		ret._resid=id;
		ret._dir=dir;
		ret._animation.SetData(restype,id);
		ret._animation.isPlayReverse=isReverse;
		ret._animation.DoAction(0,dir,loop);
		return ret;
	}

	UIEffect2D.CreateUI=function(id,dir,loop,blendMode,isUI){
		(dir===void 0)&& (dir=0);
		(loop===void 0)&& (loop=false);
		(blendMode===void 0)&& (blendMode="add");
		(isUI===void 0)&& (isUI=false);
		return UIEffect2D.Create(5,id,dir,loop,blendMode,isUI);
	}

	return UIEffect2D;
})(MSprite)



})(window,document,Laya);
