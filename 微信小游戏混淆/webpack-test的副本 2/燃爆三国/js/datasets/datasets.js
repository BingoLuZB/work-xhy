
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Bean=engine.base.data.Bean,ByteArray=engine.base.data.ByteArray,ByteBufferUtil=engine.base.data.ByteBufferUtil;
	var Dictionary=engine.base.container.Dictionary,JSONUtil=engine.supports.utils.JSONUtil,ToolBase=engine.tool.ToolBase;
/**
*Created by FreeMarker. DO NOT EDIT!!!
*地图类型
*/
//class datasets.container.Q_map_typeContainer
var Q_map_typeContainer=(function(){
	function Q_map_typeContainer(){}
	__class(Q_map_typeContainer,'datasets.container.Q_map_typeContainer');
	__getset(1,Q_map_typeContainer,'dict',function(){
		return Q_map_typeContainer._dict;
	});

	__getset(1,Q_map_typeContainer,'list',function(){
		return Q_map_typeContainer._list;
	});

	Q_map_typeContainer.SetData=function(bytes){
		Q_map_typeContainer._list.length=0;
		Q_map_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_map_type();
			bean.read(bytes);
			Q_map_typeContainer._list.push(bean);
			Q_map_typeContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_map_typeContainer.GetValue=function(key){
		return Q_map_typeContainer._dict[key.toString()];
	}

	Q_map_typeContainer._list=[];
	__static(Q_map_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_map_typeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*空城计参数
*/
//class datasets.container.Q_kongchengji_paramContainer
var Q_kongchengji_paramContainer=(function(){
	function Q_kongchengji_paramContainer(){}
	__class(Q_kongchengji_paramContainer,'datasets.container.Q_kongchengji_paramContainer');
	__getset(1,Q_kongchengji_paramContainer,'dict',function(){
		return Q_kongchengji_paramContainer._dict;
	});

	__getset(1,Q_kongchengji_paramContainer,'list',function(){
		return Q_kongchengji_paramContainer._list;
	});

	Q_kongchengji_paramContainer.SetData=function(bytes){
		Q_kongchengji_paramContainer._list.length=0;
		Q_kongchengji_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_kongchengji_param();
			bean.read(bytes);
			Q_kongchengji_paramContainer._list.push(bean);
			Q_kongchengji_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_kongchengji_paramContainer.GetValue=function(key){
		return Q_kongchengji_paramContainer._dict[key.toString()];
	}

	Q_kongchengji_paramContainer._list=[];
	__static(Q_kongchengji_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_kongchengji_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.container.Q_grow_gold_paramContainer
var Q_grow_gold_paramContainer=(function(){
	function Q_grow_gold_paramContainer(){}
	__class(Q_grow_gold_paramContainer,'datasets.container.Q_grow_gold_paramContainer');
	__getset(1,Q_grow_gold_paramContainer,'dict',function(){
		return Q_grow_gold_paramContainer._dict;
	});

	__getset(1,Q_grow_gold_paramContainer,'list',function(){
		return Q_grow_gold_paramContainer._list;
	});

	Q_grow_gold_paramContainer.SetData=function(bytes){
		Q_grow_gold_paramContainer._list.length=0;
		Q_grow_gold_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_grow_gold_param();
			bean.read(bytes);
			Q_grow_gold_paramContainer._list.push(bean);
			Q_grow_gold_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_grow_gold_paramContainer.GetValue=function(key){
		return Q_grow_gold_paramContainer._dict[key.toString()];
	}

	Q_grow_gold_paramContainer._list=[];
	__static(Q_grow_gold_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_grow_gold_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*洗练
*/
//class datasets.container.Q_xilianContainer
var Q_xilianContainer=(function(){
	function Q_xilianContainer(){}
	__class(Q_xilianContainer,'datasets.container.Q_xilianContainer');
	__getset(1,Q_xilianContainer,'dict',function(){
		return Q_xilianContainer._dict;
	});

	__getset(1,Q_xilianContainer,'list',function(){
		return Q_xilianContainer._list;
	});

	Q_xilianContainer.SetData=function(bytes){
		Q_xilianContainer._list.length=0;
		Q_xilianContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xilian();
			bean.read(bytes);
			Q_xilianContainer._list.push(bean);
			Q_xilianContainer._dict[String(bean.q_skill)]=bean;
		}
	}

	Q_xilianContainer.GetValue=function(key){
		return Q_xilianContainer._dict[key.toString()];
	}

	Q_xilianContainer._list=[];
	__static(Q_xilianContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xilianContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女强化
*/
//class datasets.container.Q_xuannv_qianghuaContainer
var Q_xuannv_qianghuaContainer=(function(){
	function Q_xuannv_qianghuaContainer(){}
	__class(Q_xuannv_qianghuaContainer,'datasets.container.Q_xuannv_qianghuaContainer');
	__getset(1,Q_xuannv_qianghuaContainer,'dict',function(){
		return Q_xuannv_qianghuaContainer._dict;
	});

	__getset(1,Q_xuannv_qianghuaContainer,'list',function(){
		return Q_xuannv_qianghuaContainer._list;
	});

	Q_xuannv_qianghuaContainer.SetData=function(bytes){
		Q_xuannv_qianghuaContainer._list.length=0;
		Q_xuannv_qianghuaContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xuannv_qianghua();
			bean.read(bytes);
			Q_xuannv_qianghuaContainer._list.push(bean);
			Q_xuannv_qianghuaContainer._dict[String(bean.q_grid)]=bean;
		}
	}

	Q_xuannv_qianghuaContainer.GetValue=function(key){
		return Q_xuannv_qianghuaContainer._dict[key.toString()];
	}

	Q_xuannv_qianghuaContainer._list=[];
	__static(Q_xuannv_qianghuaContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xuannv_qianghuaContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.container.Q_fit_paramContainer
var Q_fit_paramContainer=(function(){
	function Q_fit_paramContainer(){}
	__class(Q_fit_paramContainer,'datasets.container.Q_fit_paramContainer');
	__getset(1,Q_fit_paramContainer,'dict',function(){
		return Q_fit_paramContainer._dict;
	});

	__getset(1,Q_fit_paramContainer,'list',function(){
		return Q_fit_paramContainer._list;
	});

	Q_fit_paramContainer.SetData=function(bytes){
		Q_fit_paramContainer._list.length=0;
		Q_fit_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_param();
			bean.read(bytes);
			Q_fit_paramContainer._list.push(bean);
			Q_fit_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_paramContainer.GetValue=function(key){
		return Q_fit_paramContainer._dict[key.toString()];
	}

	Q_fit_paramContainer._list=[];
	__static(Q_fit_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*洗练类型
*/
//class datasets.container.Q_xilian_typeContainer
var Q_xilian_typeContainer=(function(){
	function Q_xilian_typeContainer(){}
	__class(Q_xilian_typeContainer,'datasets.container.Q_xilian_typeContainer');
	__getset(1,Q_xilian_typeContainer,'dict',function(){
		return Q_xilian_typeContainer._dict;
	});

	__getset(1,Q_xilian_typeContainer,'list',function(){
		return Q_xilian_typeContainer._list;
	});

	Q_xilian_typeContainer.SetData=function(bytes){
		Q_xilian_typeContainer._list.length=0;
		Q_xilian_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xilian_type();
			bean.read(bytes);
			Q_xilian_typeContainer._list.push(bean);
			Q_xilian_typeContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_xilian_typeContainer.GetValue=function(key){
		return Q_xilian_typeContainer._dict[key.toString()];
	}

	Q_xilian_typeContainer._list=[];
	__static(Q_xilian_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xilian_typeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜活动
*/
//class datasets.container.Q_rank_activityContainer
var Q_rank_activityContainer=(function(){
	function Q_rank_activityContainer(){}
	__class(Q_rank_activityContainer,'datasets.container.Q_rank_activityContainer');
	__getset(1,Q_rank_activityContainer,'dict',function(){
		return Q_rank_activityContainer._dict;
	});

	__getset(1,Q_rank_activityContainer,'list',function(){
		return Q_rank_activityContainer._list;
	});

	Q_rank_activityContainer.SetData=function(bytes){
		Q_rank_activityContainer._list.length=0;
		Q_rank_activityContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_rank_activity();
			bean.read(bytes);
			Q_rank_activityContainer._list.push(bean);
			Q_rank_activityContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_rank_activityContainer.GetValue=function(key){
		return Q_rank_activityContainer._dict[key.toString()];
	}

	Q_rank_activityContainer._list=[];
	__static(Q_rank_activityContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rank_activityContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活动数据库
*/
//class datasets.container.Q_huodong_panelContainer
var Q_huodong_panelContainer=(function(){
	function Q_huodong_panelContainer(){}
	__class(Q_huodong_panelContainer,'datasets.container.Q_huodong_panelContainer');
	__getset(1,Q_huodong_panelContainer,'dict',function(){
		return Q_huodong_panelContainer._dict;
	});

	__getset(1,Q_huodong_panelContainer,'list',function(){
		return Q_huodong_panelContainer._list;
	});

	Q_huodong_panelContainer.SetData=function(bytes){
		Q_huodong_panelContainer._list.length=0;
		Q_huodong_panelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_huodong_panel();
			bean.read(bytes);
			Q_huodong_panelContainer._list.push(bean);
			Q_huodong_panelContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_huodong_panelContainer.GetValue=function(key){
		return Q_huodong_panelContainer._dict[key.toString()];
	}

	Q_huodong_panelContainer._list=[];
	__static(Q_huodong_panelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_huodong_panelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女法器
*/
//class datasets.container.Q_xuannv_faqiContainer
var Q_xuannv_faqiContainer=(function(){
	function Q_xuannv_faqiContainer(){}
	__class(Q_xuannv_faqiContainer,'datasets.container.Q_xuannv_faqiContainer');
	__getset(1,Q_xuannv_faqiContainer,'dict',function(){
		return Q_xuannv_faqiContainer._dict;
	});

	__getset(1,Q_xuannv_faqiContainer,'list',function(){
		return Q_xuannv_faqiContainer._list;
	});

	Q_xuannv_faqiContainer.SetData=function(bytes){
		Q_xuannv_faqiContainer._list.length=0;
		Q_xuannv_faqiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xuannv_faqi();
			bean.read(bytes);
			Q_xuannv_faqiContainer._list.push(bean);
			Q_xuannv_faqiContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_xuannv_faqiContainer.GetValue=function(key){
		return Q_xuannv_faqiContainer._dict[key.toString()];
	}

	Q_xuannv_faqiContainer._list=[];
	__static(Q_xuannv_faqiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xuannv_faqiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*时装套装
*/
//class datasets.container.Q_fashion_suitContainer
var Q_fashion_suitContainer=(function(){
	function Q_fashion_suitContainer(){}
	__class(Q_fashion_suitContainer,'datasets.container.Q_fashion_suitContainer');
	__getset(1,Q_fashion_suitContainer,'dict',function(){
		return Q_fashion_suitContainer._dict;
	});

	__getset(1,Q_fashion_suitContainer,'list',function(){
		return Q_fashion_suitContainer._list;
	});

	Q_fashion_suitContainer.SetData=function(bytes){
		Q_fashion_suitContainer._list.length=0;
		Q_fashion_suitContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fashion_suit();
			bean.read(bytes);
			Q_fashion_suitContainer._list.push(bean);
			Q_fashion_suitContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fashion_suitContainer.GetValue=function(key){
		return Q_fashion_suitContainer._dict[key.toString()];
	}

	Q_fashion_suitContainer._list=[];
	__static(Q_fashion_suitContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fashion_suitContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动参数
*/
//class datasets.container.Q_special_activity_paramContainer
var Q_special_activity_paramContainer=(function(){
	function Q_special_activity_paramContainer(){}
	__class(Q_special_activity_paramContainer,'datasets.container.Q_special_activity_paramContainer');
	__getset(1,Q_special_activity_paramContainer,'dict',function(){
		return Q_special_activity_paramContainer._dict;
	});

	__getset(1,Q_special_activity_paramContainer,'list',function(){
		return Q_special_activity_paramContainer._list;
	});

	Q_special_activity_paramContainer.SetData=function(bytes){
		Q_special_activity_paramContainer._list.length=0;
		Q_special_activity_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_special_activity_param();
			bean.read(bytes);
			Q_special_activity_paramContainer._list.push(bean);
			Q_special_activity_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_special_activity_paramContainer.GetValue=function(key){
		return Q_special_activity_paramContainer._dict[key.toString()];
	}

	Q_special_activity_paramContainer._list=[];
	__static(Q_special_activity_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_special_activity_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*科举数据库
*/
//class datasets.container.Q_question_bankContainer
var Q_question_bankContainer=(function(){
	function Q_question_bankContainer(){}
	__class(Q_question_bankContainer,'datasets.container.Q_question_bankContainer');
	__getset(1,Q_question_bankContainer,'dict',function(){
		return Q_question_bankContainer._dict;
	});

	__getset(1,Q_question_bankContainer,'list',function(){
		return Q_question_bankContainer._list;
	});

	Q_question_bankContainer.SetData=function(bytes){
		Q_question_bankContainer._list.length=0;
		Q_question_bankContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_question_bank();
			bean.read(bytes);
			Q_question_bankContainer._list.push(bean);
			Q_question_bankContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_question_bankContainer.GetValue=function(key){
		return Q_question_bankContainer._dict[key.toString()];
	}

	Q_question_bankContainer._list=[];
	__static(Q_question_bankContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_question_bankContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女参数
*/
//class datasets.container.Q_xuannv_paramContainer
var Q_xuannv_paramContainer=(function(){
	function Q_xuannv_paramContainer(){}
	__class(Q_xuannv_paramContainer,'datasets.container.Q_xuannv_paramContainer');
	__getset(1,Q_xuannv_paramContainer,'dict',function(){
		return Q_xuannv_paramContainer._dict;
	});

	__getset(1,Q_xuannv_paramContainer,'list',function(){
		return Q_xuannv_paramContainer._list;
	});

	Q_xuannv_paramContainer.SetData=function(bytes){
		Q_xuannv_paramContainer._list.length=0;
		Q_xuannv_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xuannv_param();
			bean.read(bytes);
			Q_xuannv_paramContainer._list.push(bean);
			Q_xuannv_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_xuannv_paramContainer.GetValue=function(key){
		return Q_xuannv_paramContainer._dict[key.toString()];
	}

	Q_xuannv_paramContainer._list=[];
	__static(Q_xuannv_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xuannv_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物配置表
*/
//class datasets.container.Q_baowuContainer
var Q_baowuContainer=(function(){
	function Q_baowuContainer(){}
	__class(Q_baowuContainer,'datasets.container.Q_baowuContainer');
	__getset(1,Q_baowuContainer,'dict',function(){
		return Q_baowuContainer._dict;
	});

	__getset(1,Q_baowuContainer,'list',function(){
		return Q_baowuContainer._list;
	});

	Q_baowuContainer.SetData=function(bytes){
		Q_baowuContainer._list.length=0;
		Q_baowuContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_baowu();
			bean.read(bytes);
			Q_baowuContainer._list.push(bean);
			Q_baowuContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_baowuContainer.GetValue=function(key){
		return Q_baowuContainer._dict[key.toString()];
	}

	Q_baowuContainer._list=[];
	__static(Q_baowuContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_baowuContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将等级表
*/
//class datasets.container.Q_officer_levelContainer
var Q_officer_levelContainer=(function(){
	function Q_officer_levelContainer(){}
	__class(Q_officer_levelContainer,'datasets.container.Q_officer_levelContainer');
	__getset(1,Q_officer_levelContainer,'dict',function(){
		return Q_officer_levelContainer._dict;
	});

	__getset(1,Q_officer_levelContainer,'list',function(){
		return Q_officer_levelContainer._list;
	});

	Q_officer_levelContainer.SetData=function(bytes){
		Q_officer_levelContainer._list.length=0;
		Q_officer_levelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_level();
			bean.read(bytes);
			Q_officer_levelContainer._list.push(bean);
			Q_officer_levelContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_officer_levelContainer.GetValue=function(key){
		return Q_officer_levelContainer._dict[key.toString()];
	}

	Q_officer_levelContainer._list=[];
	__static(Q_officer_levelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_levelContainer;
})()


/**
*游戏模块数据管理中心
*@author Administrator
*/
//class datasets.GameDataMgr
var GameDataMgr=(function(){
	function GameDataMgr(){
		/**配置解析类**/
		this._cfg=null;
	}

	__class(GameDataMgr,'datasets.GameDataMgr');
	var __proto=GameDataMgr.prototype;
	/**
	*开始解析配置表
	*/
	__proto.SetConfig=function(bytes){
		this._cfg=new ConfigGroup(bytes);
	}

	__proto.Init=function(){
		GlobalData.Init();
	}

	/**
	*获取新功能开放表
	*@param id
	*@return
	*/
	__proto.GetNewFuncModel=function(id){
		return Q_newfuncContainer.dict[id.toString()];
	}

	/**新功能开放列表*/
	__proto.GetNewFuncList=function(){
		return Q_newfuncContainer.list;
	}

	/**
	*获取技能模版
	*@param modelId
	*@param level
	*@param isReal
	*@return
	*/
	__proto.getSkillModel=function(modelId){
		var skill=Q_skill_modelContainer.dict[modelId];
		return skill;
	}

	__getset(0,__proto,'cfg',function(){
		return this._cfg;
	});

	__static(GameDataMgr,
	['Ins',function(){return this.Ins=new GameDataMgr();}
	]);
	return GameDataMgr;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*试炼之塔表
*/
//class datasets.container.Q_towerContainer
var Q_towerContainer=(function(){
	function Q_towerContainer(){}
	__class(Q_towerContainer,'datasets.container.Q_towerContainer');
	__getset(1,Q_towerContainer,'dict',function(){
		return Q_towerContainer._dict;
	});

	__getset(1,Q_towerContainer,'list',function(){
		return Q_towerContainer._list;
	});

	Q_towerContainer.SetData=function(bytes){
		Q_towerContainer._list.length=0;
		Q_towerContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_tower();
			bean.read(bytes);
			Q_towerContainer._list.push(bean);
			Q_towerContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_towerContainer.GetValue=function(key){
		return Q_towerContainer._dict[key.toString()];
	}

	Q_towerContainer._list=[];
	__static(Q_towerContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_towerContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*锻造
*/
//class datasets.container.Q_duanzaoContainer
var Q_duanzaoContainer=(function(){
	function Q_duanzaoContainer(){}
	__class(Q_duanzaoContainer,'datasets.container.Q_duanzaoContainer');
	__getset(1,Q_duanzaoContainer,'dict',function(){
		return Q_duanzaoContainer._dict;
	});

	__getset(1,Q_duanzaoContainer,'list',function(){
		return Q_duanzaoContainer._list;
	});

	Q_duanzaoContainer.SetData=function(bytes){
		Q_duanzaoContainer._list.length=0;
		Q_duanzaoContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_duanzao();
			bean.read(bytes);
			Q_duanzaoContainer._list.push(bean);
			Q_duanzaoContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_duanzaoContainer.GetValue=function(key){
		return Q_duanzaoContainer._dict[key.toString()];
	}

	Q_duanzaoContainer._list=[];
	__static(Q_duanzaoContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_duanzaoContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军团首领
*/
//class datasets.container.Q_guild_boss_paramContainer
var Q_guild_boss_paramContainer=(function(){
	function Q_guild_boss_paramContainer(){}
	__class(Q_guild_boss_paramContainer,'datasets.container.Q_guild_boss_paramContainer');
	__getset(1,Q_guild_boss_paramContainer,'dict',function(){
		return Q_guild_boss_paramContainer._dict;
	});

	__getset(1,Q_guild_boss_paramContainer,'list',function(){
		return Q_guild_boss_paramContainer._list;
	});

	Q_guild_boss_paramContainer.SetData=function(bytes){
		Q_guild_boss_paramContainer._list.length=0;
		Q_guild_boss_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_boss_param();
			bean.read(bytes);
			Q_guild_boss_paramContainer._list.push(bean);
			Q_guild_boss_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guild_boss_paramContainer.GetValue=function(key){
		return Q_guild_boss_paramContainer._dict[key.toString()];
	}

	Q_guild_boss_paramContainer._list=[];
	__static(Q_guild_boss_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_boss_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*背景音乐
*/
//class datasets.container.Q_BGMContainer
var Q_BGMContainer=(function(){
	function Q_BGMContainer(){}
	__class(Q_BGMContainer,'datasets.container.Q_BGMContainer');
	__getset(1,Q_BGMContainer,'dict',function(){
		return Q_BGMContainer._dict;
	});

	__getset(1,Q_BGMContainer,'list',function(){
		return Q_BGMContainer._list;
	});

	Q_BGMContainer.SetData=function(bytes){
		Q_BGMContainer._list.length=0;
		Q_BGMContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_BGM();
			bean.read(bytes);
			Q_BGMContainer._list.push(bean);
			Q_BGMContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_BGMContainer.GetValue=function(key){
		return Q_BGMContainer._dict[key.toString()];
	}

	Q_BGMContainer._list=[];
	__static(Q_BGMContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_BGMContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*福利大厅参数
*/
//class datasets.container.Q_fuli_paramContainer
var Q_fuli_paramContainer=(function(){
	function Q_fuli_paramContainer(){}
	__class(Q_fuli_paramContainer,'datasets.container.Q_fuli_paramContainer');
	__getset(1,Q_fuli_paramContainer,'dict',function(){
		return Q_fuli_paramContainer._dict;
	});

	__getset(1,Q_fuli_paramContainer,'list',function(){
		return Q_fuli_paramContainer._list;
	});

	Q_fuli_paramContainer.SetData=function(bytes){
		Q_fuli_paramContainer._list.length=0;
		Q_fuli_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fuli_param();
			bean.read(bytes);
			Q_fuli_paramContainer._list.push(bean);
			Q_fuli_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fuli_paramContainer.GetValue=function(key){
		return Q_fuli_paramContainer._dict[key.toString()];
	}

	Q_fuli_paramContainer._list=[];
	__static(Q_fuli_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fuli_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*猎命
*/
//class datasets.container.Q_liemingContainer
var Q_liemingContainer=(function(){
	function Q_liemingContainer(){}
	__class(Q_liemingContainer,'datasets.container.Q_liemingContainer');
	__getset(1,Q_liemingContainer,'dict',function(){
		return Q_liemingContainer._dict;
	});

	__getset(1,Q_liemingContainer,'list',function(){
		return Q_liemingContainer._list;
	});

	Q_liemingContainer.SetData=function(bytes){
		Q_liemingContainer._list.length=0;
		Q_liemingContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_lieming();
			bean.read(bytes);
			Q_liemingContainer._list.push(bean);
			Q_liemingContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_liemingContainer.GetValue=function(key){
		return Q_liemingContainer._dict[key.toString()];
	}

	Q_liemingContainer._list=[];
	__static(Q_liemingContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_liemingContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令参数
*/
//class datasets.container.Q_sgling_paramContainer
var Q_sgling_paramContainer=(function(){
	function Q_sgling_paramContainer(){}
	__class(Q_sgling_paramContainer,'datasets.container.Q_sgling_paramContainer');
	__getset(1,Q_sgling_paramContainer,'dict',function(){
		return Q_sgling_paramContainer._dict;
	});

	__getset(1,Q_sgling_paramContainer,'list',function(){
		return Q_sgling_paramContainer._list;
	});

	Q_sgling_paramContainer.SetData=function(bytes){
		Q_sgling_paramContainer._list.length=0;
		Q_sgling_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_sgling_param();
			bean.read(bytes);
			Q_sgling_paramContainer._list.push(bean);
			Q_sgling_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_sgling_paramContainer.GetValue=function(key){
		return Q_sgling_paramContainer._dict[key.toString()];
	}

	Q_sgling_paramContainer._list=[];
	__static(Q_sgling_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_sgling_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物展示列表
*/
//class datasets.container.Q_monster_showContainer
var Q_monster_showContainer=(function(){
	function Q_monster_showContainer(){}
	__class(Q_monster_showContainer,'datasets.container.Q_monster_showContainer');
	__getset(1,Q_monster_showContainer,'dict',function(){
		return Q_monster_showContainer._dict;
	});

	__getset(1,Q_monster_showContainer,'list',function(){
		return Q_monster_showContainer._list;
	});

	Q_monster_showContainer.SetData=function(bytes){
		Q_monster_showContainer._list.length=0;
		Q_monster_showContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_monster_show();
			bean.read(bytes);
			Q_monster_showContainer._list.push(bean);
			Q_monster_showContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_monster_showContainer.GetValue=function(key){
		return Q_monster_showContainer._dict[key.toString()];
	}

	Q_monster_showContainer._list=[];
	__static(Q_monster_showContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_monster_showContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*觉醒
*/
//class datasets.container.Q_awakeningContainer
var Q_awakeningContainer=(function(){
	function Q_awakeningContainer(){}
	__class(Q_awakeningContainer,'datasets.container.Q_awakeningContainer');
	__getset(1,Q_awakeningContainer,'dict',function(){
		return Q_awakeningContainer._dict;
	});

	__getset(1,Q_awakeningContainer,'list',function(){
		return Q_awakeningContainer._list;
	});

	Q_awakeningContainer.SetData=function(bytes){
		Q_awakeningContainer._list.length=0;
		Q_awakeningContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_awakening();
			bean.read(bytes);
			Q_awakeningContainer._list.push(bean);
			Q_awakeningContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_awakeningContainer.GetValue=function(key){
		return Q_awakeningContainer._dict[key.toString()];
	}

	Q_awakeningContainer._list=[];
	__static(Q_awakeningContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_awakeningContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天配置
*/
//class datasets.container.Q_jiuchongtianContainer
var Q_jiuchongtianContainer=(function(){
	function Q_jiuchongtianContainer(){}
	__class(Q_jiuchongtianContainer,'datasets.container.Q_jiuchongtianContainer');
	__getset(1,Q_jiuchongtianContainer,'dict',function(){
		return Q_jiuchongtianContainer._dict;
	});

	__getset(1,Q_jiuchongtianContainer,'list',function(){
		return Q_jiuchongtianContainer._list;
	});

	Q_jiuchongtianContainer.SetData=function(bytes){
		Q_jiuchongtianContainer._list.length=0;
		Q_jiuchongtianContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_jiuchongtian();
			bean.read(bytes);
			Q_jiuchongtianContainer._list.push(bean);
			Q_jiuchongtianContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_jiuchongtianContainer.GetValue=function(key){
		return Q_jiuchongtianContainer._dict[key.toString()];
	}

	Q_jiuchongtianContainer._list=[];
	__static(Q_jiuchongtianContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_jiuchongtianContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门刷怪表
*/
//class datasets.container.Q_recommendContainer
var Q_recommendContainer=(function(){
	function Q_recommendContainer(){}
	__class(Q_recommendContainer,'datasets.container.Q_recommendContainer');
	__getset(1,Q_recommendContainer,'dict',function(){
		return Q_recommendContainer._dict;
	});

	__getset(1,Q_recommendContainer,'list',function(){
		return Q_recommendContainer._list;
	});

	Q_recommendContainer.SetData=function(bytes){
		Q_recommendContainer._list.length=0;
		Q_recommendContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_recommend();
			bean.read(bytes);
			Q_recommendContainer._list.push(bean);
			Q_recommendContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_recommendContainer.GetValue=function(key){
		return Q_recommendContainer._dict[key.toString()];
	}

	Q_recommendContainer._list=[];
	__static(Q_recommendContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_recommendContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*官位数据库
*/
//class datasets.container.Q_officialContainer
var Q_officialContainer=(function(){
	function Q_officialContainer(){}
	__class(Q_officialContainer,'datasets.container.Q_officialContainer');
	__getset(1,Q_officialContainer,'dict',function(){
		return Q_officialContainer._dict;
	});

	__getset(1,Q_officialContainer,'list',function(){
		return Q_officialContainer._list;
	});

	Q_officialContainer.SetData=function(bytes){
		Q_officialContainer._list.length=0;
		Q_officialContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_official();
			bean.read(bytes);
			Q_officialContainer._list.push(bean);
			Q_officialContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_officialContainer.GetValue=function(key){
		return Q_officialContainer._dict[key.toString()];
	}

	Q_officialContainer._list=[];
	__static(Q_officialContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officialContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战积分奖励
*/
//class datasets.container.Q_guildwar_jifenContainer
var Q_guildwar_jifenContainer=(function(){
	function Q_guildwar_jifenContainer(){}
	__class(Q_guildwar_jifenContainer,'datasets.container.Q_guildwar_jifenContainer');
	__getset(1,Q_guildwar_jifenContainer,'dict',function(){
		return Q_guildwar_jifenContainer._dict;
	});

	__getset(1,Q_guildwar_jifenContainer,'list',function(){
		return Q_guildwar_jifenContainer._list;
	});

	Q_guildwar_jifenContainer.SetData=function(bytes){
		Q_guildwar_jifenContainer._list.length=0;
		Q_guildwar_jifenContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guildwar_jifen();
			bean.read(bytes);
			Q_guildwar_jifenContainer._list.push(bean);
			Q_guildwar_jifenContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guildwar_jifenContainer.GetValue=function(key){
		return Q_guildwar_jifenContainer._dict[key.toString()];
	}

	Q_guildwar_jifenContainer._list=[];
	__static(Q_guildwar_jifenContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guildwar_jifenContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*拍卖变量参数
*/
//class datasets.container.Q_auction_paramContainer
var Q_auction_paramContainer=(function(){
	function Q_auction_paramContainer(){}
	__class(Q_auction_paramContainer,'datasets.container.Q_auction_paramContainer');
	__getset(1,Q_auction_paramContainer,'dict',function(){
		return Q_auction_paramContainer._dict;
	});

	__getset(1,Q_auction_paramContainer,'list',function(){
		return Q_auction_paramContainer._list;
	});

	Q_auction_paramContainer.SetData=function(bytes){
		Q_auction_paramContainer._list.length=0;
		Q_auction_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_auction_param();
			bean.read(bytes);
			Q_auction_paramContainer._list.push(bean);
			Q_auction_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_auction_paramContainer.GetValue=function(key){
		return Q_auction_paramContainer._dict[key.toString()];
	}

	Q_auction_paramContainer._list=[];
	__static(Q_auction_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_auction_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*词条
*/
//class datasets.container.Q_entryContainer
var Q_entryContainer=(function(){
	function Q_entryContainer(){}
	__class(Q_entryContainer,'datasets.container.Q_entryContainer');
	__getset(1,Q_entryContainer,'dict',function(){
		return Q_entryContainer._dict;
	});

	__getset(1,Q_entryContainer,'list',function(){
		return Q_entryContainer._list;
	});

	Q_entryContainer.SetData=function(bytes){
		Q_entryContainer._list.length=0;
		Q_entryContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_entry();
			bean.read(bytes);
			Q_entryContainer._list.push(bean);
			Q_entryContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_entryContainer.GetValue=function(key){
		return Q_entryContainer._dict[key.toString()];
	}

	Q_entryContainer._list=[];
	__static(Q_entryContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_entryContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*属性获取配置表
*/
//class datasets.container.Q_attr_growContainer
var Q_attr_growContainer=(function(){
	function Q_attr_growContainer(){}
	__class(Q_attr_growContainer,'datasets.container.Q_attr_growContainer');
	__getset(1,Q_attr_growContainer,'dict',function(){
		return Q_attr_growContainer._dict;
	});

	__getset(1,Q_attr_growContainer,'list',function(){
		return Q_attr_growContainer._list;
	});

	Q_attr_growContainer.SetData=function(bytes){
		Q_attr_growContainer._list.length=0;
		Q_attr_growContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_attr_grow();
			bean.read(bytes);
			Q_attr_growContainer._list.push(bean);
			Q_attr_growContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_attr_growContainer.GetValue=function(key){
		return Q_attr_growContainer._dict[key.toString()];
	}

	Q_attr_growContainer._list=[];
	__static(Q_attr_growContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_attr_growContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本参数
*/
//class datasets.container.Q_pata_paramContainer
var Q_pata_paramContainer=(function(){
	function Q_pata_paramContainer(){}
	__class(Q_pata_paramContainer,'datasets.container.Q_pata_paramContainer');
	__getset(1,Q_pata_paramContainer,'dict',function(){
		return Q_pata_paramContainer._dict;
	});

	__getset(1,Q_pata_paramContainer,'list',function(){
		return Q_pata_paramContainer._list;
	});

	Q_pata_paramContainer.SetData=function(bytes){
		Q_pata_paramContainer._list.length=0;
		Q_pata_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pata_param();
			bean.read(bytes);
			Q_pata_paramContainer._list.push(bean);
			Q_pata_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pata_paramContainer.GetValue=function(key){
		return Q_pata_paramContainer._dict[key.toString()];
	}

	Q_pata_paramContainer._list=[];
	__static(Q_pata_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pata_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*机器人
*/
//class datasets.container.Q_robotContainer
var Q_robotContainer=(function(){
	function Q_robotContainer(){}
	__class(Q_robotContainer,'datasets.container.Q_robotContainer');
	__getset(1,Q_robotContainer,'dict',function(){
		return Q_robotContainer._dict;
	});

	__getset(1,Q_robotContainer,'list',function(){
		return Q_robotContainer._list;
	});

	Q_robotContainer.SetData=function(bytes){
		Q_robotContainer._list.length=0;
		Q_robotContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_robot();
			bean.read(bytes);
			Q_robotContainer._list.push(bean);
			Q_robotContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_robotContainer.GetValue=function(key){
		return Q_robotContainer._dict[key.toString()];
	}

	Q_robotContainer._list=[];
	__static(Q_robotContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_robotContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*科举排名奖励
*/
//class datasets.container.Q_question_bank_rewardContainer
var Q_question_bank_rewardContainer=(function(){
	function Q_question_bank_rewardContainer(){}
	__class(Q_question_bank_rewardContainer,'datasets.container.Q_question_bank_rewardContainer');
	__getset(1,Q_question_bank_rewardContainer,'dict',function(){
		return Q_question_bank_rewardContainer._dict;
	});

	__getset(1,Q_question_bank_rewardContainer,'list',function(){
		return Q_question_bank_rewardContainer._list;
	});

	Q_question_bank_rewardContainer.SetData=function(bytes){
		Q_question_bank_rewardContainer._list.length=0;
		Q_question_bank_rewardContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_question_bank_reward();
			bean.read(bytes);
			Q_question_bank_rewardContainer._list.push(bean);
			Q_question_bank_rewardContainer._dict[String(bean.q_rank_min)]=bean;
		}
	}

	Q_question_bank_rewardContainer.GetValue=function(key){
		return Q_question_bank_rewardContainer._dict[key.toString()];
	}

	Q_question_bank_rewardContainer._list=[];
	__static(Q_question_bank_rewardContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_question_bank_rewardContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*录像馆变量表
*/
//class datasets.container.Q_video_paramContainer
var Q_video_paramContainer=(function(){
	function Q_video_paramContainer(){}
	__class(Q_video_paramContainer,'datasets.container.Q_video_paramContainer');
	__getset(1,Q_video_paramContainer,'dict',function(){
		return Q_video_paramContainer._dict;
	});

	__getset(1,Q_video_paramContainer,'list',function(){
		return Q_video_paramContainer._list;
	});

	Q_video_paramContainer.SetData=function(bytes){
		Q_video_paramContainer._list.length=0;
		Q_video_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_video_param();
			bean.read(bytes);
			Q_video_paramContainer._list.push(bean);
			Q_video_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_video_paramContainer.GetValue=function(key){
		return Q_video_paramContainer._dict[key.toString()];
	}

	Q_video_paramContainer._list=[];
	__static(Q_video_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_video_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物参数
*/
//class datasets.container.Q_pet_paramContainer
var Q_pet_paramContainer=(function(){
	function Q_pet_paramContainer(){}
	__class(Q_pet_paramContainer,'datasets.container.Q_pet_paramContainer');
	__getset(1,Q_pet_paramContainer,'dict',function(){
		return Q_pet_paramContainer._dict;
	});

	__getset(1,Q_pet_paramContainer,'list',function(){
		return Q_pet_paramContainer._list;
	});

	Q_pet_paramContainer.SetData=function(bytes){
		Q_pet_paramContainer._list.length=0;
		Q_pet_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pet_param();
			bean.read(bytes);
			Q_pet_paramContainer._list.push(bean);
			Q_pet_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pet_paramContainer.GetValue=function(key){
		return Q_pet_paramContainer._dict[key.toString()];
	}

	Q_pet_paramContainer._list=[];
	__static(Q_pet_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pet_paramContainer;
})()


/**
*全局游戏功能配置
*@author Administrator
*/
//class datasets.GlobalData
var GlobalData=(function(){
	function GlobalData(){}
	__class(GlobalData,'datasets.GlobalData');
	__getset(1,GlobalData,'YYMainIcoSortList',function(){
		if (!GlobalData.MainList){
			var cfg=Q_globalContainer.GetValue(190);
			if (cfg){
				GlobalData.MainList=JSONUtil.decode(cfg.q_value);
			}
			else {
				GlobalData.MainList=[];
			}
		}
		return GlobalData.MainList;
	});

	__getset(1,GlobalData,'newFuncSoundObj',function(){
		if (GlobalData._newFuncSoundObj==null)
			GlobalData._newFuncSoundObj=GlobalData.GetObj(151);
		return GlobalData._newFuncSoundObj;
	});

	__getset(1,GlobalData,'money2Gold',function(){
		if (GlobalData._money2Gold==0)
			GlobalData._money2Gold=Math.max(1,GlobalData.GetInt(137));
		return GlobalData._money2Gold;
	});

	__getset(1,GlobalData,'simBattleTaskID',function(){
		if (GlobalData._simBattleTaskID==0){
			var arr=JSONUtil.decode2(GlobalData.GetString(176));
			GlobalData._simBattleTaskID=parseInt(arr[0]);
			GlobalData._simFakeDunID=parseInt(arr[1]);
			GlobalData._simRealDunID=parseInt(arr[2]);
		}
		return GlobalData._simBattleTaskID;
	});

	__getset(1,GlobalData,'simFakeDunID',function(){
		if (GlobalData._simFakeDunID==0){
			var arr=JSONUtil.decode2(GlobalData.GetString(176));
			GlobalData._simBattleTaskID=parseInt(arr[0]);
			GlobalData._simFakeDunID=parseInt(arr[1]);
			GlobalData._simRealDunID=parseInt(arr[2]);
		}
		return GlobalData._simFakeDunID;
	});

	__getset(1,GlobalData,'simRealDunID',function(){
		if (GlobalData._simRealDunID==0){
			var arr=JSONUtil.decode2(GlobalData.GetString(176));
			GlobalData._simBattleTaskID=parseInt(arr[0]);
			GlobalData._simFakeDunID=parseInt(arr[1]);
			GlobalData._simRealDunID=parseInt(arr[2]);
		}
		return GlobalData._simRealDunID;
	});

	__getset(1,GlobalData,'maChaoTaskID',function(){
		if(GlobalData._maChaoTaskID==0)
			GlobalData._maChaoTaskID=parseInt(Q_globalContainer.GetValue(192).q_value);
		return GlobalData._maChaoTaskID;
	});

	__getset(1,GlobalData,'YYSubIcoSortList',function(){
		if (!GlobalData.SubList){
			var cfg=Q_globalContainer.GetValue(191);
			if (cfg){
				GlobalData.SubList=JSONUtil.decode(cfg.q_value);
			}
			else {
				GlobalData.SubList=[];
			}
		}
		return GlobalData.SubList;
	});

	GlobalData.Init=function(){
		try {
			var str=GlobalData.GetString(11);
			GlobalData.ONE_HERO_OPEN_LV=GlobalData.GetInt(11);
			str=GlobalData.GetString(12);
			GlobalData.TWO_HERO_OPEN_LV=GlobalData.GetInt(12);
		}
		catch (err){
			ToolBase.LogError("parse global excel error lastGet: "+GlobalData._lastGet);
		}
	}

	GlobalData.GetInt=function(id){
		GlobalData._lastGet=id;
		var data=Q_globalContainer.GetValue(id);
		if (data)
			return parseInt(data.q_value);
		return 0;
	}

	GlobalData.GetString=function(id){
		GlobalData._lastGet=id;
		var data=Q_globalContainer.GetValue(id);
		if (data)
			return data.q_value;
		return '';
	}

	GlobalData.GetArray=function(id){
		GlobalData._lastGet=id;
		var data=Q_globalContainer.GetValue(id);
		if (data)
			return JSONUtil.decode(data.q_value);
		return [];
	}

	GlobalData.GetObj=function(id){
		GlobalData._lastGet=id;
		var data=Q_globalContainer.GetValue(id);
		if (data)
			return JSONUtil.decode(data.q_value);
		return new Object();
	}

	GlobalData.getNoticeItems=function(noticeID){
		if (GlobalData.dicNoticeItem==null){
			GlobalData.dicNoticeItem=new Dictionary();
			var obj=GlobalData.GetObj(166);
			for (var key in obj){
				GlobalData.dicNoticeItem.set(key,obj[key]);
			}
		}
		return GlobalData.dicNoticeItem.get(noticeID);
	}

	GlobalData.getYYReward2=function(){
		if (!GlobalData.reDic2){
			GlobalData.reDic2=new Dictionary();
			var list=JSONUtil.decode(Q_globalContainer.GetValue(234).q_value);
			var len=list ? list.length :0;
			for (var i=0;i < len;++i){
				var key=list[i][0];
				var value=list[i][1];
				GlobalData.reDic2.set(key,value);
			}
		}
		return GlobalData.reDic2;
	}

	GlobalData.getYYReward=function(){
		if (!GlobalData.reDic){
			GlobalData.reDic=new Dictionary();
			var list=JSONUtil.decode(Q_globalContainer.GetValue(188).q_value);
			var len=list ? list.length :0;
			for (var i=0;i < len;++i){
				var key=list[i][0];
				var value=list[i][1];
				GlobalData.reDic.set(key,value);
			}
		}
		return GlobalData.reDic;
	}

	GlobalData.GetDelyFunid=function(){
		var data=Q_globalContainer.GetValue(204);
		if (data)
			return JSONUtil.decode(data.q_value);
		return [];
	}

	GlobalData._lastGet=0;
	GlobalData.BASE_RUN_TIME=150;
	GlobalData.ONE_HERO_ZS=0;
	GlobalData.ONE_HERO_LV=50;
	GlobalData.TWO_HERO_ZS=4;
	GlobalData.TWO_HERO_LV=0;
	GlobalData.Day_Help_Other=15;
	GlobalData.Day_Helped=16;
	GlobalData.Help_Reward=17;
	GlobalData.OpenAutoFigntPoint=135;
	GlobalData.Exchangeid=139;
	GlobalData.OpenAutoFightLV=140;
	GlobalData.ChargeToGold=143;
	GlobalData.LIGHTEQUIP=175;
	GlobalData.LOSSNOTIC=180;
	GlobalData.LOOPNOTIC=181;
	GlobalData.LOOPTIME=300;
	GlobalData.YYREARD=188;
	GlobalData.YYMAINSORTLIST=190;
	GlobalData.YYSUBSORTLIST=191;
	GlobalData.YYREARD2=234;
	GlobalData.ONE_HERO_OPEN_LV=0;
	GlobalData.TWO_HERO_OPEN_LV=0;
	GlobalData._newFuncSoundObj=null;
	GlobalData._money2Gold=0;
	GlobalData.dicNoticeItem=null;
	GlobalData._simBattleTaskID=0;
	GlobalData._simFakeDunID=0;
	GlobalData._simRealDunID=0;
	GlobalData._maChaoTaskID=0;
	GlobalData.reDic2=null;
	GlobalData.reDic=null;
	GlobalData.MainList=null;
	GlobalData.SubList=null;
	return GlobalData;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体装备
*/
//class datasets.container.Q_fit_equipmentContainer
var Q_fit_equipmentContainer=(function(){
	function Q_fit_equipmentContainer(){}
	__class(Q_fit_equipmentContainer,'datasets.container.Q_fit_equipmentContainer');
	__getset(1,Q_fit_equipmentContainer,'dict',function(){
		return Q_fit_equipmentContainer._dict;
	});

	__getset(1,Q_fit_equipmentContainer,'list',function(){
		return Q_fit_equipmentContainer._list;
	});

	Q_fit_equipmentContainer.SetData=function(bytes){
		Q_fit_equipmentContainer._list.length=0;
		Q_fit_equipmentContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_equipment();
			bean.read(bytes);
			Q_fit_equipmentContainer._list.push(bean);
			Q_fit_equipmentContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_equipmentContainer.GetValue=function(key){
		return Q_fit_equipmentContainer._dict[key.toString()];
	}

	Q_fit_equipmentContainer._list=[];
	__static(Q_fit_equipmentContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_equipmentContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*成就类型
*/
//class datasets.container.Q_achievement_typeContainer
var Q_achievement_typeContainer=(function(){
	function Q_achievement_typeContainer(){}
	__class(Q_achievement_typeContainer,'datasets.container.Q_achievement_typeContainer');
	__getset(1,Q_achievement_typeContainer,'dict',function(){
		return Q_achievement_typeContainer._dict;
	});

	__getset(1,Q_achievement_typeContainer,'list',function(){
		return Q_achievement_typeContainer._list;
	});

	Q_achievement_typeContainer.SetData=function(bytes){
		Q_achievement_typeContainer._list.length=0;
		Q_achievement_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_achievement_type();
			bean.read(bytes);
			Q_achievement_typeContainer._list.push(bean);
			Q_achievement_typeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_achievement_typeContainer.GetValue=function(key){
		return Q_achievement_typeContainer._dict[key.toString()];
	}

	Q_achievement_typeContainer._list=[];
	__static(Q_achievement_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_achievement_typeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体技能
*/
//class datasets.container.Q_fit_skillContainer
var Q_fit_skillContainer=(function(){
	function Q_fit_skillContainer(){}
	__class(Q_fit_skillContainer,'datasets.container.Q_fit_skillContainer');
	__getset(1,Q_fit_skillContainer,'dict',function(){
		return Q_fit_skillContainer._dict;
	});

	__getset(1,Q_fit_skillContainer,'list',function(){
		return Q_fit_skillContainer._list;
	});

	Q_fit_skillContainer.SetData=function(bytes){
		Q_fit_skillContainer._list.length=0;
		Q_fit_skillContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_skill();
			bean.read(bytes);
			Q_fit_skillContainer._list.push(bean);
			Q_fit_skillContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_skillContainer.GetValue=function(key){
		return Q_fit_skillContainer._dict[key.toString()];
	}

	Q_fit_skillContainer._list=[];
	__static(Q_fit_skillContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_skillContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体武器
*/
//class datasets.container.Q_fit_weaponContainer
var Q_fit_weaponContainer=(function(){
	function Q_fit_weaponContainer(){}
	__class(Q_fit_weaponContainer,'datasets.container.Q_fit_weaponContainer');
	__getset(1,Q_fit_weaponContainer,'dict',function(){
		return Q_fit_weaponContainer._dict;
	});

	__getset(1,Q_fit_weaponContainer,'list',function(){
		return Q_fit_weaponContainer._list;
	});

	Q_fit_weaponContainer.SetData=function(bytes){
		Q_fit_weaponContainer._list.length=0;
		Q_fit_weaponContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_weapon();
			bean.read(bytes);
			Q_fit_weaponContainer._list.push(bean);
			Q_fit_weaponContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_weaponContainer.GetValue=function(key){
		return Q_fit_weaponContainer._dict[key.toString()];
	}

	Q_fit_weaponContainer._list=[];
	__static(Q_fit_weaponContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_weaponContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物参数
*/
//class datasets.container.Q_handbook_parmContainer
var Q_handbook_parmContainer=(function(){
	function Q_handbook_parmContainer(){}
	__class(Q_handbook_parmContainer,'datasets.container.Q_handbook_parmContainer');
	__getset(1,Q_handbook_parmContainer,'dict',function(){
		return Q_handbook_parmContainer._dict;
	});

	__getset(1,Q_handbook_parmContainer,'list',function(){
		return Q_handbook_parmContainer._list;
	});

	Q_handbook_parmContainer.SetData=function(bytes){
		Q_handbook_parmContainer._list.length=0;
		Q_handbook_parmContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_handbook_parm();
			bean.read(bytes);
			Q_handbook_parmContainer._list.push(bean);
			Q_handbook_parmContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_handbook_parmContainer.GetValue=function(key){
		return Q_handbook_parmContainer._dict[key.toString()];
	}

	Q_handbook_parmContainer._list=[];
	__static(Q_handbook_parmContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_handbook_parmContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令任务
*/
//class datasets.container.Q_sglingContainer
var Q_sglingContainer=(function(){
	function Q_sglingContainer(){}
	__class(Q_sglingContainer,'datasets.container.Q_sglingContainer');
	__getset(1,Q_sglingContainer,'dict',function(){
		return Q_sglingContainer._dict;
	});

	__getset(1,Q_sglingContainer,'list',function(){
		return Q_sglingContainer._list;
	});

	Q_sglingContainer.SetData=function(bytes){
		Q_sglingContainer._list.length=0;
		Q_sglingContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_sgling();
			bean.read(bytes);
			Q_sglingContainer._list.push(bean);
			Q_sglingContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_sglingContainer.GetValue=function(key){
		return Q_sglingContainer._dict[key.toString()];
	}

	Q_sglingContainer._list=[];
	__static(Q_sglingContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_sglingContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师元素数据库
*/
//class datasets.container.Q_military_wakeupContainer
var Q_military_wakeupContainer=(function(){
	function Q_military_wakeupContainer(){}
	__class(Q_military_wakeupContainer,'datasets.container.Q_military_wakeupContainer');
	__getset(1,Q_military_wakeupContainer,'dict',function(){
		return Q_military_wakeupContainer._dict;
	});

	__getset(1,Q_military_wakeupContainer,'list',function(){
		return Q_military_wakeupContainer._list;
	});

	Q_military_wakeupContainer.SetData=function(bytes){
		Q_military_wakeupContainer._list.length=0;
		Q_military_wakeupContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_military_wakeup();
			bean.read(bytes);
			Q_military_wakeupContainer._list.push(bean);
			Q_military_wakeupContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_military_wakeupContainer.GetValue=function(key){
		return Q_military_wakeupContainer._dict[key.toString()];
	}

	Q_military_wakeupContainer._list=[];
	__static(Q_military_wakeupContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_military_wakeupContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*激活条件类型表
*/
//class datasets.container.Q_conditionContainer
var Q_conditionContainer=(function(){
	function Q_conditionContainer(){}
	__class(Q_conditionContainer,'datasets.container.Q_conditionContainer');
	__getset(1,Q_conditionContainer,'dict',function(){
		return Q_conditionContainer._dict;
	});

	__getset(1,Q_conditionContainer,'list',function(){
		return Q_conditionContainer._list;
	});

	Q_conditionContainer.SetData=function(bytes){
		Q_conditionContainer._list.length=0;
		Q_conditionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_condition();
			bean.read(bytes);
			Q_conditionContainer._list.push(bean);
			Q_conditionContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_conditionContainer.GetValue=function(key){
		return Q_conditionContainer._dict[key.toString()];
	}

	Q_conditionContainer._list=[];
	__static(Q_conditionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_conditionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*等级参数
*/
//class datasets.container.Q_level_paramContainer
var Q_level_paramContainer=(function(){
	function Q_level_paramContainer(){}
	__class(Q_level_paramContainer,'datasets.container.Q_level_paramContainer');
	__getset(1,Q_level_paramContainer,'dict',function(){
		return Q_level_paramContainer._dict;
	});

	__getset(1,Q_level_paramContainer,'list',function(){
		return Q_level_paramContainer._list;
	});

	Q_level_paramContainer.SetData=function(bytes){
		Q_level_paramContainer._list.length=0;
		Q_level_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_level_param();
			bean.read(bytes);
			Q_level_paramContainer._list.push(bean);
			Q_level_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_level_paramContainer.GetValue=function(key){
		return Q_level_paramContainer._dict[key.toString()];
	}

	Q_level_paramContainer._list=[];
	__static(Q_level_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_level_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值
*/
//class datasets.container.Q_rechargeContainer
var Q_rechargeContainer=(function(){
	function Q_rechargeContainer(){}
	__class(Q_rechargeContainer,'datasets.container.Q_rechargeContainer');
	__getset(1,Q_rechargeContainer,'dict',function(){
		return Q_rechargeContainer._dict;
	});

	__getset(1,Q_rechargeContainer,'list',function(){
		return Q_rechargeContainer._list;
	});

	Q_rechargeContainer.SetData=function(bytes){
		Q_rechargeContainer._list.length=0;
		Q_rechargeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_recharge();
			bean.read(bytes);
			Q_rechargeContainer._list.push(bean);
			Q_rechargeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_rechargeContainer.GetValue=function(key){
		return Q_rechargeContainer._dict[key.toString()];
	}

	Q_rechargeContainer._list=[];
	__static(Q_rechargeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rechargeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*寻宝参数
*/
//class datasets.container.Q_treasure_paramContainer
var Q_treasure_paramContainer=(function(){
	function Q_treasure_paramContainer(){}
	__class(Q_treasure_paramContainer,'datasets.container.Q_treasure_paramContainer');
	__getset(1,Q_treasure_paramContainer,'dict',function(){
		return Q_treasure_paramContainer._dict;
	});

	__getset(1,Q_treasure_paramContainer,'list',function(){
		return Q_treasure_paramContainer._list;
	});

	Q_treasure_paramContainer.SetData=function(bytes){
		Q_treasure_paramContainer._list.length=0;
		Q_treasure_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_treasure_param();
			bean.read(bytes);
			Q_treasure_paramContainer._list.push(bean);
			Q_treasure_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_treasure_paramContainer.GetValue=function(key){
		return Q_treasure_paramContainer._dict[key.toString()];
	}

	Q_treasure_paramContainer._list=[];
	__static(Q_treasure_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_treasure_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*站位
*/
//class datasets.container.Q_fight_positionContainer
var Q_fight_positionContainer=(function(){
	function Q_fight_positionContainer(){}
	__class(Q_fight_positionContainer,'datasets.container.Q_fight_positionContainer');
	__getset(1,Q_fight_positionContainer,'dict',function(){
		return Q_fight_positionContainer._dict;
	});

	__getset(1,Q_fight_positionContainer,'list',function(){
		return Q_fight_positionContainer._list;
	});

	Q_fight_positionContainer.SetData=function(bytes){
		Q_fight_positionContainer._list.length=0;
		Q_fight_positionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fight_position();
			bean.read(bytes);
			Q_fight_positionContainer._list.push(bean);
			Q_fight_positionContainer._dict[String(bean.q_position)]=bean;
		}
	}

	Q_fight_positionContainer.GetValue=function(key){
		return Q_fight_positionContainer._dict[key.toString()];
	}

	Q_fight_positionContainer._list=[];
	__static(Q_fight_positionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fight_positionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.container.Q_military_paramContainer
var Q_military_paramContainer=(function(){
	function Q_military_paramContainer(){}
	__class(Q_military_paramContainer,'datasets.container.Q_military_paramContainer');
	__getset(1,Q_military_paramContainer,'dict',function(){
		return Q_military_paramContainer._dict;
	});

	__getset(1,Q_military_paramContainer,'list',function(){
		return Q_military_paramContainer._list;
	});

	Q_military_paramContainer.SetData=function(bytes){
		Q_military_paramContainer._list.length=0;
		Q_military_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_military_param();
			bean.read(bytes);
			Q_military_paramContainer._list.push(bean);
			Q_military_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_military_paramContainer.GetValue=function(key){
		return Q_military_paramContainer._dict[key.toString()];
	}

	Q_military_paramContainer._list=[];
	__static(Q_military_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_military_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*团购参数
*/
//class datasets.container.Q_tuangou_paramContainer
var Q_tuangou_paramContainer=(function(){
	function Q_tuangou_paramContainer(){}
	__class(Q_tuangou_paramContainer,'datasets.container.Q_tuangou_paramContainer');
	__getset(1,Q_tuangou_paramContainer,'dict',function(){
		return Q_tuangou_paramContainer._dict;
	});

	__getset(1,Q_tuangou_paramContainer,'list',function(){
		return Q_tuangou_paramContainer._list;
	});

	Q_tuangou_paramContainer.SetData=function(bytes){
		Q_tuangou_paramContainer._list.length=0;
		Q_tuangou_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_tuangou_param();
			bean.read(bytes);
			Q_tuangou_paramContainer._list.push(bean);
			Q_tuangou_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_tuangou_paramContainer.GetValue=function(key){
		return Q_tuangou_paramContainer._dict[key.toString()];
	}

	Q_tuangou_paramContainer._list=[];
	__static(Q_tuangou_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_tuangou_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*章节表
*/
//class datasets.container.Q_chapterContainer
var Q_chapterContainer=(function(){
	function Q_chapterContainer(){}
	__class(Q_chapterContainer,'datasets.container.Q_chapterContainer');
	__getset(1,Q_chapterContainer,'dict',function(){
		return Q_chapterContainer._dict;
	});

	__getset(1,Q_chapterContainer,'list',function(){
		return Q_chapterContainer._list;
	});

	Q_chapterContainer.SetData=function(bytes){
		Q_chapterContainer._list.length=0;
		Q_chapterContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_chapter();
			bean.read(bytes);
			Q_chapterContainer._list.push(bean);
			Q_chapterContainer._dict[String(bean.q_end)]=bean;
		}
	}

	Q_chapterContainer.GetValue=function(key){
		return Q_chapterContainer._dict[key.toString()];
	}

	Q_chapterContainer._list=[];
	__static(Q_chapterContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_chapterContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*摇钱树
*/
//class datasets.container.Q_rollcoinContainer
var Q_rollcoinContainer=(function(){
	function Q_rollcoinContainer(){}
	__class(Q_rollcoinContainer,'datasets.container.Q_rollcoinContainer');
	__getset(1,Q_rollcoinContainer,'dict',function(){
		return Q_rollcoinContainer._dict;
	});

	__getset(1,Q_rollcoinContainer,'list',function(){
		return Q_rollcoinContainer._list;
	});

	Q_rollcoinContainer.SetData=function(bytes){
		Q_rollcoinContainer._list.length=0;
		Q_rollcoinContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_rollcoin();
			bean.read(bytes);
			Q_rollcoinContainer._list.push(bean);
			Q_rollcoinContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_rollcoinContainer.GetValue=function(key){
		return Q_rollcoinContainer._dict[key.toString()];
	}

	Q_rollcoinContainer._list=[];
	__static(Q_rollcoinContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rollcoinContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值展示(该表仅用于前端展示，并没有任何实际意义)
*/
//class datasets.container.Q_recharge_viewContainer
var Q_recharge_viewContainer=(function(){
	function Q_recharge_viewContainer(){}
	__class(Q_recharge_viewContainer,'datasets.container.Q_recharge_viewContainer');
	__getset(1,Q_recharge_viewContainer,'dict',function(){
		return Q_recharge_viewContainer._dict;
	});

	__getset(1,Q_recharge_viewContainer,'list',function(){
		return Q_recharge_viewContainer._list;
	});

	Q_recharge_viewContainer.SetData=function(bytes){
		Q_recharge_viewContainer._list.length=0;
		Q_recharge_viewContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_recharge_view();
			bean.read(bytes);
			Q_recharge_viewContainer._list.push(bean);
			Q_recharge_viewContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_recharge_viewContainer.GetValue=function(key){
		return Q_recharge_viewContainer._dict[key.toString()];
	}

	Q_recharge_viewContainer._list=[];
	__static(Q_recharge_viewContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_recharge_viewContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*功能预告表
*/
//class datasets.container.Q_newfunc_noticeContainer
var Q_newfunc_noticeContainer=(function(){
	function Q_newfunc_noticeContainer(){}
	__class(Q_newfunc_noticeContainer,'datasets.container.Q_newfunc_noticeContainer');
	__getset(1,Q_newfunc_noticeContainer,'dict',function(){
		return Q_newfunc_noticeContainer._dict;
	});

	__getset(1,Q_newfunc_noticeContainer,'list',function(){
		return Q_newfunc_noticeContainer._list;
	});

	Q_newfunc_noticeContainer.SetData=function(bytes){
		Q_newfunc_noticeContainer._list.length=0;
		Q_newfunc_noticeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_newfunc_notice();
			bean.read(bytes);
			Q_newfunc_noticeContainer._list.push(bean);
			Q_newfunc_noticeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_newfunc_noticeContainer.GetValue=function(key){
		return Q_newfunc_noticeContainer._dict[key.toString()];
	}

	Q_newfunc_noticeContainer._list=[];
	__static(Q_newfunc_noticeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_newfunc_noticeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*祥瑞权重数据库
*/
//class datasets.container.Q_weightContainer
var Q_weightContainer=(function(){
	function Q_weightContainer(){}
	__class(Q_weightContainer,'datasets.container.Q_weightContainer');
	__getset(1,Q_weightContainer,'dict',function(){
		return Q_weightContainer._dict;
	});

	__getset(1,Q_weightContainer,'list',function(){
		return Q_weightContainer._list;
	});

	Q_weightContainer.SetData=function(bytes){
		Q_weightContainer._list.length=0;
		Q_weightContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_weight();
			bean.read(bytes);
			Q_weightContainer._list.push(bean);
			Q_weightContainer._dict[String(bean.q_event_id)]=bean;
		}
	}

	Q_weightContainer.GetValue=function(key){
		return Q_weightContainer._dict[key.toString()];
	}

	Q_weightContainer._list=[];
	__static(Q_weightContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_weightContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*任务表(所有任务都这里)
*/
//class datasets.container.Q_mission_baseContainer
var Q_mission_baseContainer=(function(){
	function Q_mission_baseContainer(){}
	__class(Q_mission_baseContainer,'datasets.container.Q_mission_baseContainer');
	__getset(1,Q_mission_baseContainer,'dict',function(){
		return Q_mission_baseContainer._dict;
	});

	__getset(1,Q_mission_baseContainer,'list',function(){
		return Q_mission_baseContainer._list;
	});

	Q_mission_baseContainer.SetData=function(bytes){
		Q_mission_baseContainer._list.length=0;
		Q_mission_baseContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_mission_base();
			bean.read(bytes);
			Q_mission_baseContainer._list.push(bean);
			Q_mission_baseContainer._dict[String(bean.q_mission_id)]=bean;
		}
	}

	Q_mission_baseContainer.GetValue=function(key){
		return Q_mission_baseContainer._dict[key.toString()];
	}

	Q_mission_baseContainer._list=[];
	__static(Q_mission_baseContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_mission_baseContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜条件
*/
//class datasets.container.Q_rankContainer
var Q_rankContainer=(function(){
	function Q_rankContainer(){}
	__class(Q_rankContainer,'datasets.container.Q_rankContainer');
	__getset(1,Q_rankContainer,'dict',function(){
		return Q_rankContainer._dict;
	});

	__getset(1,Q_rankContainer,'list',function(){
		return Q_rankContainer._list;
	});

	Q_rankContainer.SetData=function(bytes){
		Q_rankContainer._list.length=0;
		Q_rankContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_rank();
			bean.read(bytes);
			Q_rankContainer._list.push(bean);
			Q_rankContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_rankContainer.GetValue=function(key){
		return Q_rankContainer._dict[key.toString()];
	}

	Q_rankContainer._list=[];
	__static(Q_rankContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rankContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动表
*/
//class datasets.container.Q_special_activityContainer
var Q_special_activityContainer=(function(){
	function Q_special_activityContainer(){}
	__class(Q_special_activityContainer,'datasets.container.Q_special_activityContainer');
	__getset(1,Q_special_activityContainer,'dict',function(){
		return Q_special_activityContainer._dict;
	});

	__getset(1,Q_special_activityContainer,'list',function(){
		return Q_special_activityContainer._list;
	});

	Q_special_activityContainer.SetData=function(bytes){
		Q_special_activityContainer._list.length=0;
		Q_special_activityContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_special_activity();
			bean.read(bytes);
			Q_special_activityContainer._list.push(bean);
			Q_special_activityContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_special_activityContainer.GetValue=function(key){
		return Q_special_activityContainer._dict[key.toString()];
	}

	Q_special_activityContainer._list=[];
	__static(Q_special_activityContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_special_activityContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特权卡
*/
//class datasets.container.Q_privilegeContainer
var Q_privilegeContainer=(function(){
	function Q_privilegeContainer(){}
	__class(Q_privilegeContainer,'datasets.container.Q_privilegeContainer');
	__getset(1,Q_privilegeContainer,'dict',function(){
		return Q_privilegeContainer._dict;
	});

	__getset(1,Q_privilegeContainer,'list',function(){
		return Q_privilegeContainer._list;
	});

	Q_privilegeContainer.SetData=function(bytes){
		Q_privilegeContainer._list.length=0;
		Q_privilegeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_privilege();
			bean.read(bytes);
			Q_privilegeContainer._list.push(bean);
			Q_privilegeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_privilegeContainer.GetValue=function(key){
		return Q_privilegeContainer._dict[key.toString()];
	}

	Q_privilegeContainer._list=[];
	__static(Q_privilegeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_privilegeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备参数
*/
//class datasets.container.Q_equip_paramContainer
var Q_equip_paramContainer=(function(){
	function Q_equip_paramContainer(){}
	__class(Q_equip_paramContainer,'datasets.container.Q_equip_paramContainer');
	__getset(1,Q_equip_paramContainer,'dict',function(){
		return Q_equip_paramContainer._dict;
	});

	__getset(1,Q_equip_paramContainer,'list',function(){
		return Q_equip_paramContainer._list;
	});

	Q_equip_paramContainer.SetData=function(bytes){
		Q_equip_paramContainer._list.length=0;
		Q_equip_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_equip_param();
			bean.read(bytes);
			Q_equip_paramContainer._list.push(bean);
			Q_equip_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_equip_paramContainer.GetValue=function(key){
		return Q_equip_paramContainer._dict[key.toString()];
	}

	Q_equip_paramContainer._list=[];
	__static(Q_equip_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_equip_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将蛮器数据库
*/
//class datasets.container.Q_officer_weaponContainer
var Q_officer_weaponContainer=(function(){
	function Q_officer_weaponContainer(){}
	__class(Q_officer_weaponContainer,'datasets.container.Q_officer_weaponContainer');
	__getset(1,Q_officer_weaponContainer,'dict',function(){
		return Q_officer_weaponContainer._dict;
	});

	__getset(1,Q_officer_weaponContainer,'list',function(){
		return Q_officer_weaponContainer._list;
	});

	Q_officer_weaponContainer.SetData=function(bytes){
		Q_officer_weaponContainer._list.length=0;
		Q_officer_weaponContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_weapon();
			bean.read(bytes);
			Q_officer_weaponContainer._list.push(bean);
			Q_officer_weaponContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_officer_weaponContainer.GetValue=function(key){
		return Q_officer_weaponContainer._dict[key.toString()];
	}

	Q_officer_weaponContainer._list=[];
	__static(Q_officer_weaponContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_weaponContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*背包参数
*/
//class datasets.container.Q_packet_paramContainer
var Q_packet_paramContainer=(function(){
	function Q_packet_paramContainer(){}
	__class(Q_packet_paramContainer,'datasets.container.Q_packet_paramContainer');
	__getset(1,Q_packet_paramContainer,'dict',function(){
		return Q_packet_paramContainer._dict;
	});

	__getset(1,Q_packet_paramContainer,'list',function(){
		return Q_packet_paramContainer._list;
	});

	Q_packet_paramContainer.SetData=function(bytes){
		Q_packet_paramContainer._list.length=0;
		Q_packet_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_packet_param();
			bean.read(bytes);
			Q_packet_paramContainer._list.push(bean);
			Q_packet_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_packet_paramContainer.GetValue=function(key){
		return Q_packet_paramContainer._dict[key.toString()];
	}

	Q_packet_paramContainer._list=[];
	__static(Q_packet_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_packet_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*觉醒配置表
*/
//class datasets.container.Q_wakeupContainer
var Q_wakeupContainer=(function(){
	function Q_wakeupContainer(){}
	__class(Q_wakeupContainer,'datasets.container.Q_wakeupContainer');
	__getset(1,Q_wakeupContainer,'dict',function(){
		return Q_wakeupContainer._dict;
	});

	__getset(1,Q_wakeupContainer,'list',function(){
		return Q_wakeupContainer._list;
	});

	Q_wakeupContainer.SetData=function(bytes){
		Q_wakeupContainer._list.length=0;
		Q_wakeupContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_wakeup();
			bean.read(bytes);
			Q_wakeupContainer._list.push(bean);
			Q_wakeupContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_wakeupContainer.GetValue=function(key){
		return Q_wakeupContainer._dict[key.toString()];
	}

	Q_wakeupContainer._list=[];
	__static(Q_wakeupContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_wakeupContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店类型
*/
//class datasets.container.Q_shop_typeContainer
var Q_shop_typeContainer=(function(){
	function Q_shop_typeContainer(){}
	__class(Q_shop_typeContainer,'datasets.container.Q_shop_typeContainer');
	__getset(1,Q_shop_typeContainer,'dict',function(){
		return Q_shop_typeContainer._dict;
	});

	__getset(1,Q_shop_typeContainer,'list',function(){
		return Q_shop_typeContainer._list;
	});

	Q_shop_typeContainer.SetData=function(bytes){
		Q_shop_typeContainer._list.length=0;
		Q_shop_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_shop_type();
			bean.read(bytes);
			Q_shop_typeContainer._list.push(bean);
			Q_shop_typeContainer._dict[String(bean.q_main_type)]=bean;
		}
	}

	Q_shop_typeContainer.GetValue=function(key){
		return Q_shop_typeContainer._dict[key.toString()];
	}

	Q_shop_typeContainer._list=[];
	__static(Q_shop_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_shop_typeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*红颜
*/
//class datasets.container.Q_hongyanContainer
var Q_hongyanContainer=(function(){
	function Q_hongyanContainer(){}
	__class(Q_hongyanContainer,'datasets.container.Q_hongyanContainer');
	__getset(1,Q_hongyanContainer,'dict',function(){
		return Q_hongyanContainer._dict;
	});

	__getset(1,Q_hongyanContainer,'list',function(){
		return Q_hongyanContainer._list;
	});

	Q_hongyanContainer.SetData=function(bytes){
		Q_hongyanContainer._list.length=0;
		Q_hongyanContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_hongyan();
			bean.read(bytes);
			Q_hongyanContainer._list.push(bean);
			Q_hongyanContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_hongyanContainer.GetValue=function(key){
		return Q_hongyanContainer._dict[key.toString()];
	}

	Q_hongyanContainer._list=[];
	__static(Q_hongyanContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_hongyanContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玩法描述
*/
//class datasets.container.Q_helpContainer
var Q_helpContainer=(function(){
	function Q_helpContainer(){}
	__class(Q_helpContainer,'datasets.container.Q_helpContainer');
	__getset(1,Q_helpContainer,'dict',function(){
		return Q_helpContainer._dict;
	});

	__getset(1,Q_helpContainer,'list',function(){
		return Q_helpContainer._list;
	});

	Q_helpContainer.SetData=function(bytes){
		Q_helpContainer._list.length=0;
		Q_helpContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_help();
			bean.read(bytes);
			Q_helpContainer._list.push(bean);
			Q_helpContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_helpContainer.GetValue=function(key){
		return Q_helpContainer._dict[key.toString()];
	}

	Q_helpContainer._list=[];
	__static(Q_helpContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_helpContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*铸纹
*/
//class datasets.container.Q_quenchContainer
var Q_quenchContainer=(function(){
	function Q_quenchContainer(){}
	__class(Q_quenchContainer,'datasets.container.Q_quenchContainer');
	__getset(1,Q_quenchContainer,'dict',function(){
		return Q_quenchContainer._dict;
	});

	__getset(1,Q_quenchContainer,'list',function(){
		return Q_quenchContainer._list;
	});

	Q_quenchContainer.SetData=function(bytes){
		Q_quenchContainer._list.length=0;
		Q_quenchContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_quench();
			bean.read(bytes);
			Q_quenchContainer._list.push(bean);
			Q_quenchContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_quenchContainer.GetValue=function(key){
		return Q_quenchContainer._dict[key.toString()];
	}

	Q_quenchContainer._list=[];
	__static(Q_quenchContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_quenchContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*勤王特供配置表
*/
//class datasets.container.Q_special_rewardContainer
var Q_special_rewardContainer=(function(){
	function Q_special_rewardContainer(){}
	__class(Q_special_rewardContainer,'datasets.container.Q_special_rewardContainer');
	__getset(1,Q_special_rewardContainer,'dict',function(){
		return Q_special_rewardContainer._dict;
	});

	__getset(1,Q_special_rewardContainer,'list',function(){
		return Q_special_rewardContainer._list;
	});

	Q_special_rewardContainer.SetData=function(bytes){
		Q_special_rewardContainer._list.length=0;
		Q_special_rewardContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_special_reward();
			bean.read(bytes);
			Q_special_rewardContainer._list.push(bean);
			Q_special_rewardContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_special_rewardContainer.GetValue=function(key){
		return Q_special_rewardContainer._dict[key.toString()];
	}

	Q_special_rewardContainer._list=[];
	__static(Q_special_rewardContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_special_rewardContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战斗日志
*/
//class datasets.container.Q_fight_logContainer
var Q_fight_logContainer=(function(){
	function Q_fight_logContainer(){}
	__class(Q_fight_logContainer,'datasets.container.Q_fight_logContainer');
	__getset(1,Q_fight_logContainer,'dict',function(){
		return Q_fight_logContainer._dict;
	});

	__getset(1,Q_fight_logContainer,'list',function(){
		return Q_fight_logContainer._list;
	});

	Q_fight_logContainer.SetData=function(bytes){
		Q_fight_logContainer._list.length=0;
		Q_fight_logContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fight_log();
			bean.read(bytes);
			Q_fight_logContainer._list.push(bean);
			Q_fight_logContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fight_logContainer.GetValue=function(key){
		return Q_fight_logContainer._dict[key.toString()];
	}

	Q_fight_logContainer._list=[];
	__static(Q_fight_logContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fight_logContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*条件推送表
*/
//class datasets.container.Q_tuisongContainer
var Q_tuisongContainer=(function(){
	function Q_tuisongContainer(){}
	__class(Q_tuisongContainer,'datasets.container.Q_tuisongContainer');
	__getset(1,Q_tuisongContainer,'dict',function(){
		return Q_tuisongContainer._dict;
	});

	__getset(1,Q_tuisongContainer,'list',function(){
		return Q_tuisongContainer._list;
	});

	Q_tuisongContainer.SetData=function(bytes){
		Q_tuisongContainer._list.length=0;
		Q_tuisongContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_tuisong();
			bean.read(bytes);
			Q_tuisongContainer._list.push(bean);
			Q_tuisongContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_tuisongContainer.GetValue=function(key){
		return Q_tuisongContainer._dict[key.toString()];
	}

	Q_tuisongContainer._list=[];
	__static(Q_tuisongContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_tuisongContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*姓名随机库
*/
//class datasets.container.Q_role_random_nameContainer
var Q_role_random_nameContainer=(function(){
	function Q_role_random_nameContainer(){}
	__class(Q_role_random_nameContainer,'datasets.container.Q_role_random_nameContainer');
	__getset(1,Q_role_random_nameContainer,'dict',function(){
		return Q_role_random_nameContainer._dict;
	});

	__getset(1,Q_role_random_nameContainer,'list',function(){
		return Q_role_random_nameContainer._list;
	});

	Q_role_random_nameContainer.SetData=function(bytes){
		Q_role_random_nameContainer._list.length=0;
		Q_role_random_nameContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_role_random_name();
			bean.read(bytes);
			Q_role_random_nameContainer._list.push(bean);
			Q_role_random_nameContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_role_random_nameContainer.GetValue=function(key){
		return Q_role_random_nameContainer._dict[key.toString()];
	}

	Q_role_random_nameContainer._list=[];
	__static(Q_role_random_nameContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_role_random_nameContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_amulet
*/
//class datasets.container.Q_amuletContainer
var Q_amuletContainer=(function(){
	function Q_amuletContainer(){}
	__class(Q_amuletContainer,'datasets.container.Q_amuletContainer');
	__getset(1,Q_amuletContainer,'dict',function(){
		return Q_amuletContainer._dict;
	});

	__getset(1,Q_amuletContainer,'list',function(){
		return Q_amuletContainer._list;
	});

	Q_amuletContainer.SetData=function(bytes){
		Q_amuletContainer._list.length=0;
		Q_amuletContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_amulet();
			bean.read(bytes);
			Q_amuletContainer._list.push(bean);
			Q_amuletContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_amuletContainer.GetValue=function(key){
		return Q_amuletContainer._dict[key.toString()];
	}

	Q_amuletContainer._list=[];
	__static(Q_amuletContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_amuletContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将
*/
//class datasets.container.Q_officerContainer
var Q_officerContainer=(function(){
	function Q_officerContainer(){}
	__class(Q_officerContainer,'datasets.container.Q_officerContainer');
	__getset(1,Q_officerContainer,'dict',function(){
		return Q_officerContainer._dict;
	});

	__getset(1,Q_officerContainer,'list',function(){
		return Q_officerContainer._list;
	});

	Q_officerContainer.SetData=function(bytes){
		Q_officerContainer._list.length=0;
		Q_officerContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer();
			bean.read(bytes);
			Q_officerContainer._list.push(bean);
			Q_officerContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_officerContainer.GetValue=function(key){
		return Q_officerContainer._dict[key.toString()];
	}

	Q_officerContainer._list=[];
	__static(Q_officerContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officerContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门任务参数
*/
//class datasets.container.Q_recommend_paramContainer
var Q_recommend_paramContainer=(function(){
	function Q_recommend_paramContainer(){}
	__class(Q_recommend_paramContainer,'datasets.container.Q_recommend_paramContainer');
	__getset(1,Q_recommend_paramContainer,'dict',function(){
		return Q_recommend_paramContainer._dict;
	});

	__getset(1,Q_recommend_paramContainer,'list',function(){
		return Q_recommend_paramContainer._list;
	});

	Q_recommend_paramContainer.SetData=function(bytes){
		Q_recommend_paramContainer._list.length=0;
		Q_recommend_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_recommend_param();
			bean.read(bytes);
			Q_recommend_paramContainer._list.push(bean);
			Q_recommend_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_recommend_paramContainer.GetValue=function(key){
		return Q_recommend_paramContainer._dict[key.toString()];
	}

	Q_recommend_paramContainer._list=[];
	__static(Q_recommend_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_recommend_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*巡城匹配
*/
//class datasets.container.Q_cityContainer
var Q_cityContainer=(function(){
	function Q_cityContainer(){}
	__class(Q_cityContainer,'datasets.container.Q_cityContainer');
	__getset(1,Q_cityContainer,'dict',function(){
		return Q_cityContainer._dict;
	});

	__getset(1,Q_cityContainer,'list',function(){
		return Q_cityContainer._list;
	});

	Q_cityContainer.SetData=function(bytes){
		Q_cityContainer._list.length=0;
		Q_cityContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_city();
			bean.read(bytes);
			Q_cityContainer._list.push(bean);
			Q_cityContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_cityContainer.GetValue=function(key){
		return Q_cityContainer._dict[key.toString()];
	}

	Q_cityContainer._list=[];
	__static(Q_cityContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_cityContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*组队副本参数
*/
//class datasets.container.Q_multiple_dungeon_paramContainer
var Q_multiple_dungeon_paramContainer=(function(){
	function Q_multiple_dungeon_paramContainer(){}
	__class(Q_multiple_dungeon_paramContainer,'datasets.container.Q_multiple_dungeon_paramContainer');
	__getset(1,Q_multiple_dungeon_paramContainer,'dict',function(){
		return Q_multiple_dungeon_paramContainer._dict;
	});

	__getset(1,Q_multiple_dungeon_paramContainer,'list',function(){
		return Q_multiple_dungeon_paramContainer._list;
	});

	Q_multiple_dungeon_paramContainer.SetData=function(bytes){
		Q_multiple_dungeon_paramContainer._list.length=0;
		Q_multiple_dungeon_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_multiple_dungeon_param();
			bean.read(bytes);
			Q_multiple_dungeon_paramContainer._list.push(bean);
			Q_multiple_dungeon_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_multiple_dungeon_paramContainer.GetValue=function(key){
		return Q_multiple_dungeon_paramContainer._dict[key.toString()];
	}

	Q_multiple_dungeon_paramContainer._list=[];
	__static(Q_multiple_dungeon_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_multiple_dungeon_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*注灵数据库
*/
//class datasets.container.Q_gequip_spiritContainer
var Q_gequip_spiritContainer=(function(){
	function Q_gequip_spiritContainer(){}
	__class(Q_gequip_spiritContainer,'datasets.container.Q_gequip_spiritContainer');
	__getset(1,Q_gequip_spiritContainer,'dict',function(){
		return Q_gequip_spiritContainer._dict;
	});

	__getset(1,Q_gequip_spiritContainer,'list',function(){
		return Q_gequip_spiritContainer._list;
	});

	Q_gequip_spiritContainer.SetData=function(bytes){
		Q_gequip_spiritContainer._list.length=0;
		Q_gequip_spiritContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_gequip_spirit();
			bean.read(bytes);
			Q_gequip_spiritContainer._list.push(bean);
			Q_gequip_spiritContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_gequip_spiritContainer.GetValue=function(key){
		return Q_gequip_spiritContainer._dict[key.toString()];
	}

	Q_gequip_spiritContainer._list=[];
	__static(Q_gequip_spiritContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_gequip_spiritContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*千里走单骑参数
*/
//class datasets.container.Q_yuanzheng_paramContainer
var Q_yuanzheng_paramContainer=(function(){
	function Q_yuanzheng_paramContainer(){}
	__class(Q_yuanzheng_paramContainer,'datasets.container.Q_yuanzheng_paramContainer');
	__getset(1,Q_yuanzheng_paramContainer,'dict',function(){
		return Q_yuanzheng_paramContainer._dict;
	});

	__getset(1,Q_yuanzheng_paramContainer,'list',function(){
		return Q_yuanzheng_paramContainer._list;
	});

	Q_yuanzheng_paramContainer.SetData=function(bytes){
		Q_yuanzheng_paramContainer._list.length=0;
		Q_yuanzheng_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_yuanzheng_param();
			bean.read(bytes);
			Q_yuanzheng_paramContainer._list.push(bean);
			Q_yuanzheng_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_yuanzheng_paramContainer.GetValue=function(key){
		return Q_yuanzheng_paramContainer._dict[key.toString()];
	}

	Q_yuanzheng_paramContainer._list=[];
	__static(Q_yuanzheng_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_yuanzheng_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能无视防御伤害数据库
*/
//class datasets.container.Q_effect_modelContainer
var Q_effect_modelContainer=(function(){
	function Q_effect_modelContainer(){}
	__class(Q_effect_modelContainer,'datasets.container.Q_effect_modelContainer');
	__getset(1,Q_effect_modelContainer,'dict',function(){
		return Q_effect_modelContainer._dict;
	});

	__getset(1,Q_effect_modelContainer,'list',function(){
		return Q_effect_modelContainer._list;
	});

	Q_effect_modelContainer.SetData=function(bytes){
		Q_effect_modelContainer._list.length=0;
		Q_effect_modelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_effect_model();
			bean.read(bytes);
			Q_effect_modelContainer._list.push(bean);
			Q_effect_modelContainer._dict[String(bean.q_effectid)]=bean;
		}
	}

	Q_effect_modelContainer.GetValue=function(key){
		return Q_effect_modelContainer._dict[key.toString()];
	}

	Q_effect_modelContainer._list=[];
	__static(Q_effect_modelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_effect_modelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将元脉数据库
*/
//class datasets.container.Q_officer_yuanmaiContainer
var Q_officer_yuanmaiContainer=(function(){
	function Q_officer_yuanmaiContainer(){}
	__class(Q_officer_yuanmaiContainer,'datasets.container.Q_officer_yuanmaiContainer');
	__getset(1,Q_officer_yuanmaiContainer,'dict',function(){
		return Q_officer_yuanmaiContainer._dict;
	});

	__getset(1,Q_officer_yuanmaiContainer,'list',function(){
		return Q_officer_yuanmaiContainer._list;
	});

	Q_officer_yuanmaiContainer.SetData=function(bytes){
		Q_officer_yuanmaiContainer._list.length=0;
		Q_officer_yuanmaiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_yuanmai();
			bean.read(bytes);
			Q_officer_yuanmaiContainer._list.push(bean);
			Q_officer_yuanmaiContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_officer_yuanmaiContainer.GetValue=function(key){
		return Q_officer_yuanmaiContainer._dict[key.toString()];
	}

	Q_officer_yuanmaiContainer._list=[];
	__static(Q_officer_yuanmaiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_yuanmaiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.container.Q_officer_paramContainer
var Q_officer_paramContainer=(function(){
	function Q_officer_paramContainer(){}
	__class(Q_officer_paramContainer,'datasets.container.Q_officer_paramContainer');
	__getset(1,Q_officer_paramContainer,'dict',function(){
		return Q_officer_paramContainer._dict;
	});

	__getset(1,Q_officer_paramContainer,'list',function(){
		return Q_officer_paramContainer._list;
	});

	Q_officer_paramContainer.SetData=function(bytes){
		Q_officer_paramContainer._list.length=0;
		Q_officer_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_param();
			bean.read(bytes);
			Q_officer_paramContainer._list.push(bean);
			Q_officer_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_officer_paramContainer.GetValue=function(key){
		return Q_officer_paramContainer._dict[key.toString()];
	}

	Q_officer_paramContainer._list=[];
	__static(Q_officer_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备打造
*/
//class datasets.container.Q_equipContainer
var Q_equipContainer=(function(){
	function Q_equipContainer(){}
	__class(Q_equipContainer,'datasets.container.Q_equipContainer');
	__getset(1,Q_equipContainer,'dict',function(){
		return Q_equipContainer._dict;
	});

	__getset(1,Q_equipContainer,'list',function(){
		return Q_equipContainer._list;
	});

	Q_equipContainer.SetData=function(bytes){
		Q_equipContainer._list.length=0;
		Q_equipContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_equip();
			bean.read(bytes);
			Q_equipContainer._list.push(bean);
			Q_equipContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_equipContainer.GetValue=function(key){
		return Q_equipContainer._dict[key.toString()];
	}

	Q_equipContainer._list=[];
	__static(Q_equipContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_equipContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店
*/
//class datasets.container.Q_shopContainer
var Q_shopContainer=(function(){
	function Q_shopContainer(){}
	__class(Q_shopContainer,'datasets.container.Q_shopContainer');
	__getset(1,Q_shopContainer,'dict',function(){
		return Q_shopContainer._dict;
	});

	__getset(1,Q_shopContainer,'list',function(){
		return Q_shopContainer._list;
	});

	Q_shopContainer.SetData=function(bytes){
		Q_shopContainer._list.length=0;
		Q_shopContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_shop();
			bean.read(bytes);
			Q_shopContainer._list.push(bean);
			Q_shopContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_shopContainer.GetValue=function(key){
		return Q_shopContainer._dict[key.toString()];
	}

	Q_shopContainer._list=[];
	__static(Q_shopContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_shopContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*镇守城池产出表
*/
//class datasets.container.Q_city_rewardContainer
var Q_city_rewardContainer=(function(){
	function Q_city_rewardContainer(){}
	__class(Q_city_rewardContainer,'datasets.container.Q_city_rewardContainer');
	__getset(1,Q_city_rewardContainer,'dict',function(){
		return Q_city_rewardContainer._dict;
	});

	__getset(1,Q_city_rewardContainer,'list',function(){
		return Q_city_rewardContainer._list;
	});

	Q_city_rewardContainer.SetData=function(bytes){
		Q_city_rewardContainer._list.length=0;
		Q_city_rewardContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_city_reward();
			bean.read(bytes);
			Q_city_rewardContainer._list.push(bean);
			Q_city_rewardContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_city_rewardContainer.GetValue=function(key){
		return Q_city_rewardContainer._dict[key.toString()];
	}

	Q_city_rewardContainer._list=[];
	__static(Q_city_rewardContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_city_rewardContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师天赋数据库
*/
//class datasets.container.Q_military_innateContainer
var Q_military_innateContainer=(function(){
	function Q_military_innateContainer(){}
	__class(Q_military_innateContainer,'datasets.container.Q_military_innateContainer');
	__getset(1,Q_military_innateContainer,'dict',function(){
		return Q_military_innateContainer._dict;
	});

	__getset(1,Q_military_innateContainer,'list',function(){
		return Q_military_innateContainer._list;
	});

	Q_military_innateContainer.SetData=function(bytes){
		Q_military_innateContainer._list.length=0;
		Q_military_innateContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_military_innate();
			bean.read(bytes);
			Q_military_innateContainer._list.push(bean);
			Q_military_innateContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_military_innateContainer.GetValue=function(key){
		return Q_military_innateContainer._dict[key.toString()];
	}

	Q_military_innateContainer._list=[];
	__static(Q_military_innateContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_military_innateContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*平定安邦任务
*/
//class datasets.container.Q_pingdingContainer
var Q_pingdingContainer=(function(){
	function Q_pingdingContainer(){}
	__class(Q_pingdingContainer,'datasets.container.Q_pingdingContainer');
	__getset(1,Q_pingdingContainer,'dict',function(){
		return Q_pingdingContainer._dict;
	});

	__getset(1,Q_pingdingContainer,'list',function(){
		return Q_pingdingContainer._list;
	});

	Q_pingdingContainer.SetData=function(bytes){
		Q_pingdingContainer._list.length=0;
		Q_pingdingContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pingding();
			bean.read(bytes);
			Q_pingdingContainer._list.push(bean);
			Q_pingdingContainer._dict[String(bean.q_mission_id)]=bean;
		}
	}

	Q_pingdingContainer.GetValue=function(key){
		return Q_pingdingContainer._dict[key.toString()];
	}

	Q_pingdingContainer._list=[];
	__static(Q_pingdingContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pingdingContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限定武将活动参数
*/
//class datasets.container.Q_limit_wu_jiang_paramContainer
var Q_limit_wu_jiang_paramContainer=(function(){
	function Q_limit_wu_jiang_paramContainer(){}
	__class(Q_limit_wu_jiang_paramContainer,'datasets.container.Q_limit_wu_jiang_paramContainer');
	__getset(1,Q_limit_wu_jiang_paramContainer,'dict',function(){
		return Q_limit_wu_jiang_paramContainer._dict;
	});

	__getset(1,Q_limit_wu_jiang_paramContainer,'list',function(){
		return Q_limit_wu_jiang_paramContainer._list;
	});

	Q_limit_wu_jiang_paramContainer.SetData=function(bytes){
		Q_limit_wu_jiang_paramContainer._list.length=0;
		Q_limit_wu_jiang_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_limit_wu_jiang_param();
			bean.read(bytes);
			Q_limit_wu_jiang_paramContainer._list.push(bean);
			Q_limit_wu_jiang_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_limit_wu_jiang_paramContainer.GetValue=function(key){
		return Q_limit_wu_jiang_paramContainer._dict[key.toString()];
	}

	Q_limit_wu_jiang_paramContainer._list=[];
	__static(Q_limit_wu_jiang_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_limit_wu_jiang_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爵位表
*/
//class datasets.container.Q_nobilityContainer
var Q_nobilityContainer=(function(){
	function Q_nobilityContainer(){}
	__class(Q_nobilityContainer,'datasets.container.Q_nobilityContainer');
	__getset(1,Q_nobilityContainer,'dict',function(){
		return Q_nobilityContainer._dict;
	});

	__getset(1,Q_nobilityContainer,'list',function(){
		return Q_nobilityContainer._list;
	});

	Q_nobilityContainer.SetData=function(bytes){
		Q_nobilityContainer._list.length=0;
		Q_nobilityContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_nobility();
			bean.read(bytes);
			Q_nobilityContainer._list.push(bean);
			Q_nobilityContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_nobilityContainer.GetValue=function(key){
		return Q_nobilityContainer._dict[key.toString()];
	}

	Q_nobilityContainer._list=[];
	__static(Q_nobilityContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_nobilityContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*组队副本
*/
//class datasets.container.Q_multiple_dungeonContainer
var Q_multiple_dungeonContainer=(function(){
	function Q_multiple_dungeonContainer(){}
	__class(Q_multiple_dungeonContainer,'datasets.container.Q_multiple_dungeonContainer');
	__getset(1,Q_multiple_dungeonContainer,'dict',function(){
		return Q_multiple_dungeonContainer._dict;
	});

	__getset(1,Q_multiple_dungeonContainer,'list',function(){
		return Q_multiple_dungeonContainer._list;
	});

	Q_multiple_dungeonContainer.SetData=function(bytes){
		Q_multiple_dungeonContainer._list.length=0;
		Q_multiple_dungeonContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_multiple_dungeon();
			bean.read(bytes);
			Q_multiple_dungeonContainer._list.push(bean);
			Q_multiple_dungeonContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_multiple_dungeonContainer.GetValue=function(key){
		return Q_multiple_dungeonContainer._dict[key.toString()];
	}

	Q_multiple_dungeonContainer._list=[];
	__static(Q_multiple_dungeonContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_multiple_dungeonContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_upgrade_type
*/
//class datasets.container.Q_upgrade_typeContainer
var Q_upgrade_typeContainer=(function(){
	function Q_upgrade_typeContainer(){}
	__class(Q_upgrade_typeContainer,'datasets.container.Q_upgrade_typeContainer');
	__getset(1,Q_upgrade_typeContainer,'dict',function(){
		return Q_upgrade_typeContainer._dict;
	});

	__getset(1,Q_upgrade_typeContainer,'list',function(){
		return Q_upgrade_typeContainer._list;
	});

	Q_upgrade_typeContainer.SetData=function(bytes){
		Q_upgrade_typeContainer._list.length=0;
		Q_upgrade_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_upgrade_type();
			bean.read(bytes);
			Q_upgrade_typeContainer._list.push(bean);
			Q_upgrade_typeContainer._dict[String(bean.q_config_id)]=bean;
		}
	}

	Q_upgrade_typeContainer.GetValue=function(key){
		return Q_upgrade_typeContainer._dict[key.toString()];
	}

	Q_upgrade_typeContainer._list=[];
	__static(Q_upgrade_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_upgrade_typeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*1
*/
//class datasets.container.Q_grow_goldContainer
var Q_grow_goldContainer=(function(){
	function Q_grow_goldContainer(){}
	__class(Q_grow_goldContainer,'datasets.container.Q_grow_goldContainer');
	__getset(1,Q_grow_goldContainer,'dict',function(){
		return Q_grow_goldContainer._dict;
	});

	__getset(1,Q_grow_goldContainer,'list',function(){
		return Q_grow_goldContainer._list;
	});

	Q_grow_goldContainer.SetData=function(bytes){
		Q_grow_goldContainer._list.length=0;
		Q_grow_goldContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_grow_gold();
			bean.read(bytes);
			Q_grow_goldContainer._list.push(bean);
			Q_grow_goldContainer._dict[String(bean.q_grow__level)]=bean;
		}
	}

	Q_grow_goldContainer.GetValue=function(key){
		return Q_grow_goldContainer._dict[key.toString()];
	}

	Q_grow_goldContainer._list=[];
	__static(Q_grow_goldContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_grow_goldContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将升星配置表
*/
//class datasets.container.Q_officer_starContainer
var Q_officer_starContainer=(function(){
	function Q_officer_starContainer(){}
	__class(Q_officer_starContainer,'datasets.container.Q_officer_starContainer');
	__getset(1,Q_officer_starContainer,'dict',function(){
		return Q_officer_starContainer._dict;
	});

	__getset(1,Q_officer_starContainer,'list',function(){
		return Q_officer_starContainer._list;
	});

	Q_officer_starContainer.SetData=function(bytes){
		Q_officer_starContainer._list.length=0;
		Q_officer_starContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_star();
			bean.read(bytes);
			Q_officer_starContainer._list.push(bean);
			Q_officer_starContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_officer_starContainer.GetValue=function(key){
		return Q_officer_starContainer._dict[key.toString()];
	}

	Q_officer_starContainer._list=[];
	__static(Q_officer_starContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_starContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本类型
*/
//class datasets.container.Q_pata_typeContainer
var Q_pata_typeContainer=(function(){
	function Q_pata_typeContainer(){}
	__class(Q_pata_typeContainer,'datasets.container.Q_pata_typeContainer');
	__getset(1,Q_pata_typeContainer,'dict',function(){
		return Q_pata_typeContainer._dict;
	});

	__getset(1,Q_pata_typeContainer,'list',function(){
		return Q_pata_typeContainer._list;
	});

	Q_pata_typeContainer.SetData=function(bytes){
		Q_pata_typeContainer._list.length=0;
		Q_pata_typeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pata_type();
			bean.read(bytes);
			Q_pata_typeContainer._list.push(bean);
			Q_pata_typeContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_pata_typeContainer.GetValue=function(key){
		return Q_pata_typeContainer._dict[key.toString()];
	}

	Q_pata_typeContainer._list=[];
	__static(Q_pata_typeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pata_typeContainer;
})()


/**Created by FreeMarker. DO NOT EDIT!!! */
//class datasets.ConfigGroup
var ConfigGroup=(function(){
	function ConfigGroup(buf){
		this.DATA_VERSION=0;
		this.cls=null;
		var ac=ByteBufferUtil.readString(buf);
		if (ac !="54616b48c72ebaf15541bafd7118b1c5"){
			throw new Error("expect version "+"54616b48c72ebaf15541bafd7118b1c5"+", actual version "+ac);
		}
		this.DATA_VERSION=ByteBufferUtil.readInt(buf);
		this.cls=[
		Q_shopContainer,
		Q_shop_typeContainer,
		Q_shop_paramContainer,
		Q_mapContainer,
		Q_map_typeContainer,
		Q_guildContainer,
		Q_guild_exchangeContainer,
		Q_guild_signContainer,
		Q_guild_guardContainer,
		Q_guild_paramContainer,
		Q_videoContainer,
		Q_video_paramContainer,
		Q_monsterContainer,
		Q_monster_showContainer,
		Q_monster_talkContainer,
		Q_achievementContainer,
		Q_achievement_typeContainer,
		Q_fight_logContainer,
		Q_fight_positionContainer,
		Q_team_fight_positionContainer,
		Q_fight_paramContainer,
		Q_skill_modelContainer,
		Q_skill_paramContainer,
		Q_newfuncContainer,
		Q_conditionContainer,
		Q_newfunc_noticeContainer,
		Q_robotContainer,
		Q_messageContainer,
		Q_itemContainer,
		Q_item_paramContainer,
		Q_fuliContainer,
		Q_rollcoinContainer,
		Q_fuli_paramContainer,
		Q_packet_paramContainer,
		Q_equipContainer,
		Q_equip_promoteContainer,
		Q_equip_suitContainer,
		Q_composeContainer,
		Q_equip_paramContainer,
		Q_pushContainer,
		Q_recommendContainer,
		Q_recommend_paramContainer,
		Q_recharge_viewContainer,
		Q_rechargeContainer,
		Q_duihuanContainer,
		Q_globalContainer,
		Q_grow_checkpointContainer,
		Q_grow_checkpoint_paramContainer,
		Q_treasureContainer,
		Q_treasure_paramContainer,
		Q_attr_growContainer,
		Q_grow_goldContainer,
		Q_grow_gold_paramContainer,
		Q_guideContainer,
		Q_guide_groupContainer,
		Q_tuisongContainer,
		Q_effect_modelContainer,
		Q_privilegeContainer,
		Q_special_activityContainer,
		Q_special_activity_paramContainer,
		Q_act_dabiao_turntableContainer,
		Q_act_wujiang_turntableContainer,
		Q_open_reward_FirstArmyContainer,
		Q_god_appearContainer,
		Q_meiwu_treasureContainer,
		Q_special_rewardContainer,
		Q_recharge_turntableContainer,
		Q_helpContainer,
		Q_BGMContainer,
		Q_installContainer,
		Q_zipContainer,
		Q_access_resourceContainer,
		Q_super_valueContainer,
		Q_super_value_paramContainer,
		Q_huodong_panelContainer,
		Q_common_war_tokenContainer,
		Q_common_war_token_paramContainer,
		Q_role_random_nameContainer,
		Q_awakeningContainer,
		Q_sglingContainer,
		Q_sgling_missionContainer,
		Q_sgling_paramContainer,
		Q_jiuchongtian_rank_timesContainer,
		Q_jiuchongtian_rank_prizeContainer,
		Q_jiuchongtian_score_prizeContainer,
		Q_jiuchongtianContainer,
		Q_mission_baseContainer,
		Q_guildwar_rankContainer,
		Q_guildwar_jifenContainer,
		Q_guildwar_paramContainer,
		Q_guild_bossContainer,
		Q_guild_boss_paramContainer,
		Q_cityContainer,
		Q_city_rewardContainer,
		Q_city_paramContainer,
		Q_dungeonContainer,
		Q_chapterContainer,
		Q_dungeon_paramContainer,
		Q_yuanzhengContainer,
		Q_yuanzheng_paramContainer,
		Q_tuangouContainer,
		Q_tuangou_paramContainer,
		Q_handbookContainer,
		Q_coordinatesContainer,
		Q_handbook_parmContainer,
		Q_shimenContainer,
		Q_shimen_paramContainer,
		Q_pingdingContainer,
		Q_pingding_paramContainer,
		Q_payloadContainer,
		Q_payload_paramContainer,
		Q_auctionContainer,
		Q_auction_paramContainer,
		Q_rank_paramContainer,
		Q_rankContainer,
		Q_rank_activityContainer,
		Q_rank_activity_prizeContainer,
		Q_activitiesContainer,
		Q_task_chibiContainer,
		Q_chibi_pramContainer,
		Q_pataContainer,
		Q_pata_typeContainer,
		Q_pata_paramContainer,
		Q_kingwarContainer,
		Q_kingwar_paramContainer,
		Q_kingwar_rankContainer,
		Q_xiangruiContainer,
		Q_weightContainer,
		Q_question_bankContainer,
		Q_question_bank_rewardContainer,
		Q_kongchengjiContainer,
		Q_kongchengji_paramContainer,
		Q_arena_paramContainer,
		Q_arena_segmentContainer,
		Q_multiple_dungeonContainer,
		Q_multiple_dungeon_paramContainer,
		Q_weedingContainer,
		Q_weeding_paramContainer,
		Q_qunyingContainer,
		Q_qunying_paramContainer,
		Q_towerContainer,
		Q_tower_paramContainer,
		Q_vipContainer,
		Q_militaryContainer,
		Q_military_levelContainer,
		Q_military_innateContainer,
		Q_military_wakeupContainer,
		Q_military_paramContainer,
		Q_fitContainer,
		Q_fit_skillContainer,
		Q_fit_equipmentContainer,
		Q_fit_equipment_groupContainer,
		Q_fit_weaponContainer,
		Q_fit_pinzhiContainer,
		Q_fit_paramContainer,
		Q_zhanwen_paramContainer,
		Q_totemContainer,
		Q_officialContainer,
		Q_baowuContainer,
		Q_baowu_peiyangContainer,
		Q_baowu_starContainer,
		Q_petContainer,
		Q_pet_groupContainer,
		Q_pet_levelContainer,
		Q_pet_paramContainer,
		Q_amuletContainer,
		Q_fashionContainer,
		Q_fashion_suitContainer,
		Q_xilianContainer,
		Q_xilian_typeContainer,
		Q_nobilityContainer,
		Q_nobility_paramContainer,
		Q_liemingContainer,
		Q_lieming_paramContainer,
		Q_xuannv_faqiContainer,
		Q_xuannv_feishengContainer,
		Q_xuannv_paramContainer,
		Q_xuannv_qianghuaContainer,
		Q_gequip_spiritContainer,
		Q_gequip_soulContainer,
		Q_gequip_suitContainer,
		Q_gequip_paramContainer,
		Q_entryContainer,
		Q_miji_gridContainer,
		Q_miji_paramContainer,
		Q_level_paramContainer,
		Q_hongyanContainer,
		Q_hongyan_levelContainer,
		Q_hongyan_paramContainer,
		Q_channelContainer,
		Q_officerContainer,
		Q_officer_levelContainer,
		Q_officer_juewuContainer,
		Q_officer_starContainer,
		Q_officer_yuanmaiContainer,
		Q_officer_weaponContainer,
		Q_officer_paramContainer,
		Q_duanzaoContainer,
		Q_duanzao_masterContainer,
		Q_duanzao_paramContainer,
		Q_zhuansheng_paramContainer,
		Q_upgradeContainer,
		Q_upgrade_paramContainer,
		Q_upgrade_typeContainer,
		Q_upgrade_giftContainer,
		Q_wakeupContainer,
		Q_quenchContainer,
		Q_addspiritContainer,
		Q_limit_wu_jiangContainer,
		Q_limit_wu_jiang_paramContainer,];
	}

	__class(ConfigGroup,'datasets.ConfigGroup');
	ConfigGroup.CODE_VERSION="54616b48c72ebaf15541bafd7118b1c5";
	return ConfigGroup;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶参数
*/
//class datasets.container.Q_upgrade_paramContainer
var Q_upgrade_paramContainer=(function(){
	function Q_upgrade_paramContainer(){}
	__class(Q_upgrade_paramContainer,'datasets.container.Q_upgrade_paramContainer');
	__getset(1,Q_upgrade_paramContainer,'dict',function(){
		return Q_upgrade_paramContainer._dict;
	});

	__getset(1,Q_upgrade_paramContainer,'list',function(){
		return Q_upgrade_paramContainer._list;
	});

	Q_upgrade_paramContainer.SetData=function(bytes){
		Q_upgrade_paramContainer._list.length=0;
		Q_upgrade_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_upgrade_param();
			bean.read(bytes);
			Q_upgrade_paramContainer._list.push(bean);
			Q_upgrade_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_upgrade_paramContainer.GetValue=function(key){
		return Q_upgrade_paramContainer._dict[key.toString()];
	}

	Q_upgrade_paramContainer._list=[];
	__static(Q_upgrade_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_upgrade_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爵位参数
*/
//class datasets.container.Q_nobility_paramContainer
var Q_nobility_paramContainer=(function(){
	function Q_nobility_paramContainer(){}
	__class(Q_nobility_paramContainer,'datasets.container.Q_nobility_paramContainer');
	__getset(1,Q_nobility_paramContainer,'dict',function(){
		return Q_nobility_paramContainer._dict;
	});

	__getset(1,Q_nobility_paramContainer,'list',function(){
		return Q_nobility_paramContainer._list;
	});

	Q_nobility_paramContainer.SetData=function(bytes){
		Q_nobility_paramContainer._list.length=0;
		Q_nobility_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_nobility_param();
			bean.read(bytes);
			Q_nobility_paramContainer._list.push(bean);
			Q_nobility_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_nobility_paramContainer.GetValue=function(key){
		return Q_nobility_paramContainer._dict[key.toString()];
	}

	Q_nobility_paramContainer._list=[];
	__static(Q_nobility_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_nobility_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*VIP
*/
//class datasets.container.Q_vipContainer
var Q_vipContainer=(function(){
	function Q_vipContainer(){}
	__class(Q_vipContainer,'datasets.container.Q_vipContainer');
	__getset(1,Q_vipContainer,'dict',function(){
		return Q_vipContainer._dict;
	});

	__getset(1,Q_vipContainer,'list',function(){
		return Q_vipContainer._list;
	});

	Q_vipContainer.SetData=function(bytes){
		Q_vipContainer._list.length=0;
		Q_vipContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_vip();
			bean.read(bytes);
			Q_vipContainer._list.push(bean);
			Q_vipContainer._dict[String(bean.q_vip_level)]=bean;
		}
	}

	Q_vipContainer.GetValue=function(key){
		return Q_vipContainer._dict[key.toString()];
	}

	Q_vipContainer._list=[];
	__static(Q_vipContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_vipContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*推送配置表
*/
//class datasets.container.Q_pushContainer
var Q_pushContainer=(function(){
	function Q_pushContainer(){}
	__class(Q_pushContainer,'datasets.container.Q_pushContainer');
	__getset(1,Q_pushContainer,'dict',function(){
		return Q_pushContainer._dict;
	});

	__getset(1,Q_pushContainer,'list',function(){
		return Q_pushContainer._list;
	});

	Q_pushContainer.SetData=function(bytes){
		Q_pushContainer._list.length=0;
		Q_pushContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_push();
			bean.read(bytes);
			Q_pushContainer._list.push(bean);
			Q_pushContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pushContainer.GetValue=function(key){
		return Q_pushContainer._dict[key.toString()];
	}

	Q_pushContainer._list=[];
	__static(Q_pushContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pushContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会守护每日奖励(蟠桃会)
*/
//class datasets.container.Q_guild_guardContainer
var Q_guild_guardContainer=(function(){
	function Q_guild_guardContainer(){}
	__class(Q_guild_guardContainer,'datasets.container.Q_guild_guardContainer');
	__getset(1,Q_guild_guardContainer,'dict',function(){
		return Q_guild_guardContainer._dict;
	});

	__getset(1,Q_guild_guardContainer,'list',function(){
		return Q_guild_guardContainer._list;
	});

	Q_guild_guardContainer.SetData=function(bytes){
		Q_guild_guardContainer._list.length=0;
		Q_guild_guardContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_guard();
			bean.read(bytes);
			Q_guild_guardContainer._list.push(bean);
			Q_guild_guardContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guild_guardContainer.GetValue=function(key){
		return Q_guild_guardContainer._dict[key.toString()];
	}

	Q_guild_guardContainer._list=[];
	__static(Q_guild_guardContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_guardContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会参数
*/
//class datasets.container.Q_guild_paramContainer
var Q_guild_paramContainer=(function(){
	function Q_guild_paramContainer(){}
	__class(Q_guild_paramContainer,'datasets.container.Q_guild_paramContainer');
	__getset(1,Q_guild_paramContainer,'dict',function(){
		return Q_guild_paramContainer._dict;
	});

	__getset(1,Q_guild_paramContainer,'list',function(){
		return Q_guild_paramContainer._list;
	});

	Q_guild_paramContainer.SetData=function(bytes){
		Q_guild_paramContainer._list.length=0;
		Q_guild_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_param();
			bean.read(bytes);
			Q_guild_paramContainer._list.push(bean);
			Q_guild_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guild_paramContainer.GetValue=function(key){
		return Q_guild_paramContainer._dict[key.toString()];
	}

	Q_guild_paramContainer._list=[];
	__static(Q_guild_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*道具参数
*/
//class datasets.container.Q_item_paramContainer
var Q_item_paramContainer=(function(){
	function Q_item_paramContainer(){}
	__class(Q_item_paramContainer,'datasets.container.Q_item_paramContainer');
	__getset(1,Q_item_paramContainer,'dict',function(){
		return Q_item_paramContainer._dict;
	});

	__getset(1,Q_item_paramContainer,'list',function(){
		return Q_item_paramContainer._list;
	});

	Q_item_paramContainer.SetData=function(bytes){
		Q_item_paramContainer._list.length=0;
		Q_item_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_item_param();
			bean.read(bytes);
			Q_item_paramContainer._list.push(bean);
			Q_item_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_item_paramContainer.GetValue=function(key){
		return Q_item_paramContainer._dict[key.toString()];
	}

	Q_item_paramContainer._list=[];
	__static(Q_item_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_item_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门任务参数
*/
//class datasets.container.Q_shimen_paramContainer
var Q_shimen_paramContainer=(function(){
	function Q_shimen_paramContainer(){}
	__class(Q_shimen_paramContainer,'datasets.container.Q_shimen_paramContainer');
	__getset(1,Q_shimen_paramContainer,'dict',function(){
		return Q_shimen_paramContainer._dict;
	});

	__getset(1,Q_shimen_paramContainer,'list',function(){
		return Q_shimen_paramContainer._list;
	});

	Q_shimen_paramContainer.SetData=function(bytes){
		Q_shimen_paramContainer._list.length=0;
		Q_shimen_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_shimen_param();
			bean.read(bytes);
			Q_shimen_paramContainer._list.push(bean);
			Q_shimen_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_shimen_paramContainer.GetValue=function(key){
		return Q_shimen_paramContainer._dict[key.toString()];
	}

	Q_shimen_paramContainer._list=[];
	__static(Q_shimen_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_shimen_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*试炼之塔参数
*/
//class datasets.container.Q_tower_paramContainer
var Q_tower_paramContainer=(function(){
	function Q_tower_paramContainer(){}
	__class(Q_tower_paramContainer,'datasets.container.Q_tower_paramContainer');
	__getset(1,Q_tower_paramContainer,'dict',function(){
		return Q_tower_paramContainer._dict;
	});

	__getset(1,Q_tower_paramContainer,'list',function(){
		return Q_tower_paramContainer._list;
	});

	Q_tower_paramContainer.SetData=function(bytes){
		Q_tower_paramContainer._list.length=0;
		Q_tower_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_tower_param();
			bean.read(bytes);
			Q_tower_paramContainer._list.push(bean);
			Q_tower_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_tower_paramContainer.GetValue=function(key){
		return Q_tower_paramContainer._dict[key.toString()];
	}

	Q_tower_paramContainer._list=[];
	__static(Q_tower_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_tower_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物列表
*/
//class datasets.container.Q_monster_talkContainer
var Q_monster_talkContainer=(function(){
	function Q_monster_talkContainer(){}
	__class(Q_monster_talkContainer,'datasets.container.Q_monster_talkContainer');
	__getset(1,Q_monster_talkContainer,'dict',function(){
		return Q_monster_talkContainer._dict;
	});

	__getset(1,Q_monster_talkContainer,'list',function(){
		return Q_monster_talkContainer._list;
	});

	Q_monster_talkContainer.SetData=function(bytes){
		Q_monster_talkContainer._list.length=0;
		Q_monster_talkContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_monster_talk();
			bean.read(bytes);
			Q_monster_talkContainer._list.push(bean);
			Q_monster_talkContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_monster_talkContainer.GetValue=function(key){
		return Q_monster_talkContainer._dict[key.toString()];
	}

	Q_monster_talkContainer._list=[];
	__static(Q_monster_talkContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_monster_talkContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者争霸排名
*/
//class datasets.container.Q_kingwar_rankContainer
var Q_kingwar_rankContainer=(function(){
	function Q_kingwar_rankContainer(){}
	__class(Q_kingwar_rankContainer,'datasets.container.Q_kingwar_rankContainer');
	__getset(1,Q_kingwar_rankContainer,'dict',function(){
		return Q_kingwar_rankContainer._dict;
	});

	__getset(1,Q_kingwar_rankContainer,'list',function(){
		return Q_kingwar_rankContainer._list;
	});

	Q_kingwar_rankContainer.SetData=function(bytes){
		Q_kingwar_rankContainer._list.length=0;
		Q_kingwar_rankContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_kingwar_rank();
			bean.read(bytes);
			Q_kingwar_rankContainer._list.push(bean);
			Q_kingwar_rankContainer._dict[String(bean.q_rank)]=bean;
		}
	}

	Q_kingwar_rankContainer.GetValue=function(key){
		return Q_kingwar_rankContainer._dict[key.toString()];
	}

	Q_kingwar_rankContainer._list=[];
	__static(Q_kingwar_rankContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_kingwar_rankContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*平定参数
*/
//class datasets.container.Q_pingding_paramContainer
var Q_pingding_paramContainer=(function(){
	function Q_pingding_paramContainer(){}
	__class(Q_pingding_paramContainer,'datasets.container.Q_pingding_paramContainer');
	__getset(1,Q_pingding_paramContainer,'dict',function(){
		return Q_pingding_paramContainer._dict;
	});

	__getset(1,Q_pingding_paramContainer,'list',function(){
		return Q_pingding_paramContainer._list;
	});

	Q_pingding_paramContainer.SetData=function(bytes){
		Q_pingding_paramContainer._list.length=0;
		Q_pingding_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pingding_param();
			bean.read(bytes);
			Q_pingding_paramContainer._list.push(bean);
			Q_pingding_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pingding_paramContainer.GetValue=function(key){
		return Q_pingding_paramContainer._dict[key.toString()];
	}

	Q_pingding_paramContainer._list=[];
	__static(Q_pingding_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pingding_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*拍卖变量参数
*/
//class datasets.container.Q_qunying_paramContainer
var Q_qunying_paramContainer=(function(){
	function Q_qunying_paramContainer(){}
	__class(Q_qunying_paramContainer,'datasets.container.Q_qunying_paramContainer');
	__getset(1,Q_qunying_paramContainer,'dict',function(){
		return Q_qunying_paramContainer._dict;
	});

	__getset(1,Q_qunying_paramContainer,'list',function(){
		return Q_qunying_paramContainer._list;
	});

	Q_qunying_paramContainer.SetData=function(bytes){
		Q_qunying_paramContainer._list.length=0;
		Q_qunying_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_qunying_param();
			bean.read(bytes);
			Q_qunying_paramContainer._list.push(bean);
			Q_qunying_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_qunying_paramContainer.GetValue=function(key){
		return Q_qunying_paramContainer._dict[key.toString()];
	}

	Q_qunying_paramContainer._list=[];
	__static(Q_qunying_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_qunying_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*达标有礼转盘配置表
*/
//class datasets.container.Q_act_dabiao_turntableContainer
var Q_act_dabiao_turntableContainer=(function(){
	function Q_act_dabiao_turntableContainer(){}
	__class(Q_act_dabiao_turntableContainer,'datasets.container.Q_act_dabiao_turntableContainer');
	__getset(1,Q_act_dabiao_turntableContainer,'dict',function(){
		return Q_act_dabiao_turntableContainer._dict;
	});

	__getset(1,Q_act_dabiao_turntableContainer,'list',function(){
		return Q_act_dabiao_turntableContainer._list;
	});

	Q_act_dabiao_turntableContainer.SetData=function(bytes){
		Q_act_dabiao_turntableContainer._list.length=0;
		Q_act_dabiao_turntableContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_act_dabiao_turntable();
			bean.read(bytes);
			Q_act_dabiao_turntableContainer._list.push(bean);
			Q_act_dabiao_turntableContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_act_dabiao_turntableContainer.GetValue=function(key){
		return Q_act_dabiao_turntableContainer._dict[key.toString()];
	}

	Q_act_dabiao_turntableContainer._list=[];
	__static(Q_act_dabiao_turntableContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_act_dabiao_turntableContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶
*/
//class datasets.container.Q_upgradeContainer
var Q_upgradeContainer=(function(){
	function Q_upgradeContainer(){}
	__class(Q_upgradeContainer,'datasets.container.Q_upgradeContainer');
	__getset(1,Q_upgradeContainer,'dict',function(){
		return Q_upgradeContainer._dict;
	});

	__getset(1,Q_upgradeContainer,'list',function(){
		return Q_upgradeContainer._list;
	});

	Q_upgradeContainer.SetData=function(bytes){
		Q_upgradeContainer._list.length=0;
		Q_upgradeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_upgrade();
			bean.read(bytes);
			Q_upgradeContainer._list.push(bean);
			Q_upgradeContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_upgradeContainer.GetValue=function(key){
		return Q_upgradeContainer._dict[key.toString()];
	}

	Q_upgradeContainer._list=[];
	__static(Q_upgradeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_upgradeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*地图数据类
*/
//class datasets.container.Q_mapContainer
var Q_mapContainer=(function(){
	function Q_mapContainer(){}
	__class(Q_mapContainer,'datasets.container.Q_mapContainer');
	__getset(1,Q_mapContainer,'dict',function(){
		return Q_mapContainer._dict;
	});

	__getset(1,Q_mapContainer,'list',function(){
		return Q_mapContainer._list;
	});

	Q_mapContainer.SetData=function(bytes){
		Q_mapContainer._list.length=0;
		Q_mapContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_map();
			bean.read(bytes);
			Q_mapContainer._list.push(bean);
			Q_mapContainer._dict[String(bean.q_map_id)]=bean;
		}
	}

	Q_mapContainer.GetValue=function(key){
		return Q_mapContainer._dict[key.toString()];
	}

	Q_mapContainer._list=[];
	__static(Q_mapContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_mapContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物升星配置表
*/
//class datasets.container.Q_baowu_starContainer
var Q_baowu_starContainer=(function(){
	function Q_baowu_starContainer(){}
	__class(Q_baowu_starContainer,'datasets.container.Q_baowu_starContainer');
	__getset(1,Q_baowu_starContainer,'dict',function(){
		return Q_baowu_starContainer._dict;
	});

	__getset(1,Q_baowu_starContainer,'list',function(){
		return Q_baowu_starContainer._list;
	});

	Q_baowu_starContainer.SetData=function(bytes){
		Q_baowu_starContainer._list.length=0;
		Q_baowu_starContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_baowu_star();
			bean.read(bytes);
			Q_baowu_starContainer._list.push(bean);
			Q_baowu_starContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_baowu_starContainer.GetValue=function(key){
		return Q_baowu_starContainer._dict[key.toString()];
	}

	Q_baowu_starContainer._list=[];
	__static(Q_baowu_starContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_baowu_starContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*资源获取途径表
*/
//class datasets.container.Q_access_resourceContainer
var Q_access_resourceContainer=(function(){
	function Q_access_resourceContainer(){}
	__class(Q_access_resourceContainer,'datasets.container.Q_access_resourceContainer');
	__getset(1,Q_access_resourceContainer,'dict',function(){
		return Q_access_resourceContainer._dict;
	});

	__getset(1,Q_access_resourceContainer,'list',function(){
		return Q_access_resourceContainer._list;
	});

	Q_access_resourceContainer.SetData=function(bytes){
		Q_access_resourceContainer._list.length=0;
		Q_access_resourceContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_access_resource();
			bean.read(bytes);
			Q_access_resourceContainer._list.push(bean);
			Q_access_resourceContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_access_resourceContainer.GetValue=function(key){
		return Q_access_resourceContainer._dict[key.toString()];
	}

	Q_access_resourceContainer._list=[];
	__static(Q_access_resourceContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_access_resourceContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*经脉数据库
*/
//class datasets.container.Q_channelContainer
var Q_channelContainer=(function(){
	function Q_channelContainer(){}
	__class(Q_channelContainer,'datasets.container.Q_channelContainer');
	__getset(1,Q_channelContainer,'dict',function(){
		return Q_channelContainer._dict;
	});

	__getset(1,Q_channelContainer,'list',function(){
		return Q_channelContainer._list;
	});

	Q_channelContainer.SetData=function(bytes){
		Q_channelContainer._list.length=0;
		Q_channelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_channel();
			bean.read(bytes);
			Q_channelContainer._list.push(bean);
			Q_channelContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_channelContainer.GetValue=function(key){
		return Q_channelContainer._dict[key.toString()];
	}

	Q_channelContainer._list=[];
	__static(Q_channelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_channelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女飞升
*/
//class datasets.container.Q_xuannv_feishengContainer
var Q_xuannv_feishengContainer=(function(){
	function Q_xuannv_feishengContainer(){}
	__class(Q_xuannv_feishengContainer,'datasets.container.Q_xuannv_feishengContainer');
	__getset(1,Q_xuannv_feishengContainer,'dict',function(){
		return Q_xuannv_feishengContainer._dict;
	});

	__getset(1,Q_xuannv_feishengContainer,'list',function(){
		return Q_xuannv_feishengContainer._list;
	});

	Q_xuannv_feishengContainer.SetData=function(bytes){
		Q_xuannv_feishengContainer._list.length=0;
		Q_xuannv_feishengContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xuannv_feisheng();
			bean.read(bytes);
			Q_xuannv_feishengContainer._list.push(bean);
			Q_xuannv_feishengContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_xuannv_feishengContainer.GetValue=function(key){
		return Q_xuannv_feishengContainer._dict[key.toString()];
	}

	Q_xuannv_feishengContainer._list=[];
	__static(Q_xuannv_feishengContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xuannv_feishengContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天排名奖励
*/
//class datasets.container.Q_jiuchongtian_rank_timesContainer
var Q_jiuchongtian_rank_timesContainer=(function(){
	function Q_jiuchongtian_rank_timesContainer(){}
	__class(Q_jiuchongtian_rank_timesContainer,'datasets.container.Q_jiuchongtian_rank_timesContainer');
	__getset(1,Q_jiuchongtian_rank_timesContainer,'dict',function(){
		return Q_jiuchongtian_rank_timesContainer._dict;
	});

	__getset(1,Q_jiuchongtian_rank_timesContainer,'list',function(){
		return Q_jiuchongtian_rank_timesContainer._list;
	});

	Q_jiuchongtian_rank_timesContainer.SetData=function(bytes){
		Q_jiuchongtian_rank_timesContainer._list.length=0;
		Q_jiuchongtian_rank_timesContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_jiuchongtian_rank_times();
			bean.read(bytes);
			Q_jiuchongtian_rank_timesContainer._list.push(bean);
			Q_jiuchongtian_rank_timesContainer._dict[String(bean.q_rank)]=bean;
		}
	}

	Q_jiuchongtian_rank_timesContainer.GetValue=function(key){
		return Q_jiuchongtian_rank_timesContainer._dict[key.toString()];
	}

	Q_jiuchongtian_rank_timesContainer._list=[];
	__static(Q_jiuchongtian_rank_timesContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_jiuchongtian_rank_timesContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*1
*/
//class datasets.container.Q_totemContainer
var Q_totemContainer=(function(){
	function Q_totemContainer(){}
	__class(Q_totemContainer,'datasets.container.Q_totemContainer');
	__getset(1,Q_totemContainer,'dict',function(){
		return Q_totemContainer._dict;
	});

	__getset(1,Q_totemContainer,'list',function(){
		return Q_totemContainer._list;
	});

	Q_totemContainer.SetData=function(bytes){
		Q_totemContainer._list.length=0;
		Q_totemContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_totem();
			bean.read(bytes);
			Q_totemContainer._list.push(bean);
			Q_totemContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_totemContainer.GetValue=function(key){
		return Q_totemContainer._dict[key.toString()];
	}

	Q_totemContainer._list=[];
	__static(Q_totemContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_totemContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*火烧赤壁
*/
//class datasets.container.Q_task_chibiContainer
var Q_task_chibiContainer=(function(){
	function Q_task_chibiContainer(){}
	__class(Q_task_chibiContainer,'datasets.container.Q_task_chibiContainer');
	__getset(1,Q_task_chibiContainer,'dict',function(){
		return Q_task_chibiContainer._dict;
	});

	__getset(1,Q_task_chibiContainer,'list',function(){
		return Q_task_chibiContainer._list;
	});

	Q_task_chibiContainer.SetData=function(bytes){
		Q_task_chibiContainer._list.length=0;
		Q_task_chibiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_task_chibi();
			bean.read(bytes);
			Q_task_chibiContainer._list.push(bean);
			Q_task_chibiContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_task_chibiContainer.GetValue=function(key){
		return Q_task_chibiContainer._dict[key.toString()];
	}

	Q_task_chibiContainer._list=[];
	__static(Q_task_chibiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_task_chibiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能基本信息配置数据表
*/
//class datasets.container.Q_skill_modelContainer
var Q_skill_modelContainer=(function(){
	function Q_skill_modelContainer(){}
	__class(Q_skill_modelContainer,'datasets.container.Q_skill_modelContainer');
	__getset(1,Q_skill_modelContainer,'dict',function(){
		return Q_skill_modelContainer._dict;
	});

	__getset(1,Q_skill_modelContainer,'list',function(){
		return Q_skill_modelContainer._list;
	});

	Q_skill_modelContainer.SetData=function(bytes){
		Q_skill_modelContainer._list.length=0;
		Q_skill_modelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_skill_model();
			bean.read(bytes);
			Q_skill_modelContainer._list.push(bean);
			Q_skill_modelContainer._dict[String(bean.q_skillID)]=bean;
		}
	}

	Q_skill_modelContainer.GetValue=function(key){
		return Q_skill_modelContainer._dict[key.toString()];
	}

	Q_skill_modelContainer._list=[];
	__static(Q_skill_modelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_skill_modelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*物品基本数据库表
*/
//class datasets.container.Q_itemContainer
var Q_itemContainer=(function(){
	function Q_itemContainer(){}
	__class(Q_itemContainer,'datasets.container.Q_itemContainer');
	__getset(1,Q_itemContainer,'dict',function(){
		return Q_itemContainer._dict;
	});

	__getset(1,Q_itemContainer,'list',function(){
		return Q_itemContainer._list;
	});

	Q_itemContainer.SetData=function(bytes){
		Q_itemContainer._list.length=0;
		Q_itemContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_item();
			bean.read(bytes);
			Q_itemContainer._list.push(bean);
			Q_itemContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_itemContainer.GetValue=function(key){
		return Q_itemContainer._dict[key.toString()];
	}

	Q_itemContainer._list=[];
	__static(Q_itemContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_itemContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*竞技场参数
*/
//class datasets.container.Q_arena_paramContainer
var Q_arena_paramContainer=(function(){
	function Q_arena_paramContainer(){}
	__class(Q_arena_paramContainer,'datasets.container.Q_arena_paramContainer');
	__getset(1,Q_arena_paramContainer,'dict',function(){
		return Q_arena_paramContainer._dict;
	});

	__getset(1,Q_arena_paramContainer,'list',function(){
		return Q_arena_paramContainer._list;
	});

	Q_arena_paramContainer.SetData=function(bytes){
		Q_arena_paramContainer._list.length=0;
		Q_arena_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_arena_param();
			bean.read(bytes);
			Q_arena_paramContainer._list.push(bean);
			Q_arena_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_arena_paramContainer.GetValue=function(key){
		return Q_arena_paramContainer._dict[key.toString()];
	}

	Q_arena_paramContainer._list=[];
	__static(Q_arena_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_arena_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*结婚全局
*/
//class datasets.container.Q_weeding_paramContainer
var Q_weeding_paramContainer=(function(){
	function Q_weeding_paramContainer(){}
	__class(Q_weeding_paramContainer,'datasets.container.Q_weeding_paramContainer');
	__getset(1,Q_weeding_paramContainer,'dict',function(){
		return Q_weeding_paramContainer._dict;
	});

	__getset(1,Q_weeding_paramContainer,'list',function(){
		return Q_weeding_paramContainer._list;
	});

	Q_weeding_paramContainer.SetData=function(bytes){
		Q_weeding_paramContainer._list.length=0;
		Q_weeding_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_weeding_param();
			bean.read(bytes);
			Q_weeding_paramContainer._list.push(bean);
			Q_weeding_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_weeding_paramContainer.GetValue=function(key){
		return Q_weeding_paramContainer._dict[key.toString()];
	}

	Q_weeding_paramContainer._list=[];
	__static(Q_weeding_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_weeding_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*超值补给表
*/
//class datasets.container.Q_super_valueContainer
var Q_super_valueContainer=(function(){
	function Q_super_valueContainer(){}
	__class(Q_super_valueContainer,'datasets.container.Q_super_valueContainer');
	__getset(1,Q_super_valueContainer,'dict',function(){
		return Q_super_valueContainer._dict;
	});

	__getset(1,Q_super_valueContainer,'list',function(){
		return Q_super_valueContainer._list;
	});

	Q_super_valueContainer.SetData=function(bytes){
		Q_super_valueContainer._list.length=0;
		Q_super_valueContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_super_value();
			bean.read(bytes);
			Q_super_valueContainer._list.push(bean);
			Q_super_valueContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_super_valueContainer.GetValue=function(key){
		return Q_super_valueContainer._dict[key.toString()];
	}

	Q_super_valueContainer._list=[];
	__static(Q_super_valueContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_super_valueContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*全局变量表
*/
//class datasets.container.Q_globalContainer
var Q_globalContainer=(function(){
	function Q_globalContainer(){}
	__class(Q_globalContainer,'datasets.container.Q_globalContainer');
	__getset(1,Q_globalContainer,'dict',function(){
		return Q_globalContainer._dict;
	});

	__getset(1,Q_globalContainer,'list',function(){
		return Q_globalContainer._list;
	});

	Q_globalContainer.SetData=function(bytes){
		Q_globalContainer._list.length=0;
		Q_globalContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_global();
			bean.read(bytes);
			Q_globalContainer._list.push(bean);
			Q_globalContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_globalContainer.GetValue=function(key){
		return Q_globalContainer._dict[key.toString()];
	}

	Q_globalContainer._list=[];
	__static(Q_globalContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_globalContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*押镖参数
*/
//class datasets.container.Q_payload_paramContainer
var Q_payload_paramContainer=(function(){
	function Q_payload_paramContainer(){}
	__class(Q_payload_paramContainer,'datasets.container.Q_payload_paramContainer');
	__getset(1,Q_payload_paramContainer,'dict',function(){
		return Q_payload_paramContainer._dict;
	});

	__getset(1,Q_payload_paramContainer,'list',function(){
		return Q_payload_paramContainer._list;
	});

	Q_payload_paramContainer.SetData=function(bytes){
		Q_payload_paramContainer._list.length=0;
		Q_payload_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_payload_param();
			bean.read(bytes);
			Q_payload_paramContainer._list.push(bean);
			Q_payload_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_payload_paramContainer.GetValue=function(key){
		return Q_payload_paramContainer._dict[key.toString()];
	}

	Q_payload_paramContainer._list=[];
	__static(Q_payload_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_payload_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战排名奖励
*/
//class datasets.container.Q_guildwar_rankContainer
var Q_guildwar_rankContainer=(function(){
	function Q_guildwar_rankContainer(){}
	__class(Q_guildwar_rankContainer,'datasets.container.Q_guildwar_rankContainer');
	__getset(1,Q_guildwar_rankContainer,'dict',function(){
		return Q_guildwar_rankContainer._dict;
	});

	__getset(1,Q_guildwar_rankContainer,'list',function(){
		return Q_guildwar_rankContainer._list;
	});

	Q_guildwar_rankContainer.SetData=function(bytes){
		Q_guildwar_rankContainer._list.length=0;
		Q_guildwar_rankContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guildwar_rank();
			bean.read(bytes);
			Q_guildwar_rankContainer._list.push(bean);
			Q_guildwar_rankContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guildwar_rankContainer.GetValue=function(key){
		return Q_guildwar_rankContainer._dict[key.toString()];
	}

	Q_guildwar_rankContainer._list=[];
	__static(Q_guildwar_rankContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guildwar_rankContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*功能开放表
*/
//class datasets.container.Q_newfuncContainer
var Q_newfuncContainer=(function(){
	function Q_newfuncContainer(){}
	__class(Q_newfuncContainer,'datasets.container.Q_newfuncContainer');
	__getset(1,Q_newfuncContainer,'dict',function(){
		return Q_newfuncContainer._dict;
	});

	__getset(1,Q_newfuncContainer,'list',function(){
		return Q_newfuncContainer._list;
	});

	Q_newfuncContainer.SetData=function(bytes){
		Q_newfuncContainer._list.length=0;
		Q_newfuncContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_newfunc();
			bean.read(bytes);
			Q_newfuncContainer._list.push(bean);
			Q_newfuncContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_newfuncContainer.GetValue=function(key){
		return Q_newfuncContainer._dict[key.toString()];
	}

	Q_newfuncContainer._list=[];
	__static(Q_newfuncContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_newfuncContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*道具参数
*/
//class datasets.container.Q_coordinatesContainer
var Q_coordinatesContainer=(function(){
	function Q_coordinatesContainer(){}
	__class(Q_coordinatesContainer,'datasets.container.Q_coordinatesContainer');
	__getset(1,Q_coordinatesContainer,'dict',function(){
		return Q_coordinatesContainer._dict;
	});

	__getset(1,Q_coordinatesContainer,'list',function(){
		return Q_coordinatesContainer._list;
	});

	Q_coordinatesContainer.SetData=function(bytes){
		Q_coordinatesContainer._list.length=0;
		Q_coordinatesContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_coordinates();
			bean.read(bytes);
			Q_coordinatesContainer._list.push(bean);
			Q_coordinatesContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_coordinatesContainer.GetValue=function(key){
		return Q_coordinatesContainer._dict[key.toString()];
	}

	Q_coordinatesContainer._list=[];
	__static(Q_coordinatesContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_coordinatesContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物列表
*/
//class datasets.container.Q_monsterContainer
var Q_monsterContainer=(function(){
	function Q_monsterContainer(){}
	__class(Q_monsterContainer,'datasets.container.Q_monsterContainer');
	__getset(1,Q_monsterContainer,'dict',function(){
		return Q_monsterContainer._dict;
	});

	__getset(1,Q_monsterContainer,'list',function(){
		return Q_monsterContainer._list;
	});

	Q_monsterContainer.SetData=function(bytes){
		Q_monsterContainer._list.length=0;
		Q_monsterContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_monster();
			bean.read(bytes);
			Q_monsterContainer._list.push(bean);
			Q_monsterContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_monsterContainer.GetValue=function(key){
		return Q_monsterContainer._dict[key.toString()];
	}

	Q_monsterContainer._list=[];
	__static(Q_monsterContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_monsterContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能参数
*/
//class datasets.container.Q_skill_paramContainer
var Q_skill_paramContainer=(function(){
	function Q_skill_paramContainer(){}
	__class(Q_skill_paramContainer,'datasets.container.Q_skill_paramContainer');
	__getset(1,Q_skill_paramContainer,'dict',function(){
		return Q_skill_paramContainer._dict;
	});

	__getset(1,Q_skill_paramContainer,'list',function(){
		return Q_skill_paramContainer._list;
	});

	Q_skill_paramContainer.SetData=function(bytes){
		Q_skill_paramContainer._list.length=0;
		Q_skill_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_skill_param();
			bean.read(bytes);
			Q_skill_paramContainer._list.push(bean);
			Q_skill_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_skill_paramContainer.GetValue=function(key){
		return Q_skill_paramContainer._dict[key.toString()];
	}

	Q_skill_paramContainer._list=[];
	__static(Q_skill_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_skill_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物缘分
*/
//class datasets.container.Q_pet_groupContainer
var Q_pet_groupContainer=(function(){
	function Q_pet_groupContainer(){}
	__class(Q_pet_groupContainer,'datasets.container.Q_pet_groupContainer');
	__getset(1,Q_pet_groupContainer,'dict',function(){
		return Q_pet_groupContainer._dict;
	});

	__getset(1,Q_pet_groupContainer,'list',function(){
		return Q_pet_groupContainer._list;
	});

	Q_pet_groupContainer.SetData=function(bytes){
		Q_pet_groupContainer._list.length=0;
		Q_pet_groupContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pet_group();
			bean.read(bytes);
			Q_pet_groupContainer._list.push(bean);
			Q_pet_groupContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pet_groupContainer.GetValue=function(key){
		return Q_pet_groupContainer._dict[key.toString()];
	}

	Q_pet_groupContainer._list=[];
	__static(Q_pet_groupContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pet_groupContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会签到(蟠桃会)
*/
//class datasets.container.Q_guild_signContainer
var Q_guild_signContainer=(function(){
	function Q_guild_signContainer(){}
	__class(Q_guild_signContainer,'datasets.container.Q_guild_signContainer');
	__getset(1,Q_guild_signContainer,'dict',function(){
		return Q_guild_signContainer._dict;
	});

	__getset(1,Q_guild_signContainer,'list',function(){
		return Q_guild_signContainer._list;
	});

	Q_guild_signContainer.SetData=function(bytes){
		Q_guild_signContainer._list.length=0;
		Q_guild_signContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_sign();
			bean.read(bytes);
			Q_guild_signContainer._list.push(bean);
			Q_guild_signContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guild_signContainer.GetValue=function(key){
		return Q_guild_signContainer._dict[key.toString()];
	}

	Q_guild_signContainer._list=[];
	__static(Q_guild_signContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_signContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*红颜等级表
*/
//class datasets.container.Q_hongyan_levelContainer
var Q_hongyan_levelContainer=(function(){
	function Q_hongyan_levelContainer(){}
	__class(Q_hongyan_levelContainer,'datasets.container.Q_hongyan_levelContainer');
	__getset(1,Q_hongyan_levelContainer,'dict',function(){
		return Q_hongyan_levelContainer._dict;
	});

	__getset(1,Q_hongyan_levelContainer,'list',function(){
		return Q_hongyan_levelContainer._list;
	});

	Q_hongyan_levelContainer.SetData=function(bytes){
		Q_hongyan_levelContainer._list.length=0;
		Q_hongyan_levelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_hongyan_level();
			bean.read(bytes);
			Q_hongyan_levelContainer._list.push(bean);
			Q_hongyan_levelContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_hongyan_levelContainer.GetValue=function(key){
		return Q_hongyan_levelContainer._dict[key.toString()];
	}

	Q_hongyan_levelContainer._list=[];
	__static(Q_hongyan_levelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_hongyan_levelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*通用战令表
*/
//class datasets.container.Q_common_war_tokenContainer
var Q_common_war_tokenContainer=(function(){
	function Q_common_war_tokenContainer(){}
	__class(Q_common_war_tokenContainer,'datasets.container.Q_common_war_tokenContainer');
	__getset(1,Q_common_war_tokenContainer,'dict',function(){
		return Q_common_war_tokenContainer._dict;
	});

	__getset(1,Q_common_war_tokenContainer,'list',function(){
		return Q_common_war_tokenContainer._list;
	});

	Q_common_war_tokenContainer.SetData=function(bytes){
		Q_common_war_tokenContainer._list.length=0;
		Q_common_war_tokenContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_common_war_token();
			bean.read(bytes);
			Q_common_war_tokenContainer._list.push(bean);
			Q_common_war_tokenContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_common_war_tokenContainer.GetValue=function(key){
		return Q_common_war_tokenContainer._dict[key.toString()];
	}

	Q_common_war_tokenContainer._list=[];
	__static(Q_common_war_tokenContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_common_war_tokenContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*站位
*/
//class datasets.container.Q_team_fight_positionContainer
var Q_team_fight_positionContainer=(function(){
	function Q_team_fight_positionContainer(){}
	__class(Q_team_fight_positionContainer,'datasets.container.Q_team_fight_positionContainer');
	__getset(1,Q_team_fight_positionContainer,'dict',function(){
		return Q_team_fight_positionContainer._dict;
	});

	__getset(1,Q_team_fight_positionContainer,'list',function(){
		return Q_team_fight_positionContainer._list;
	});

	Q_team_fight_positionContainer.SetData=function(bytes){
		Q_team_fight_positionContainer._list.length=0;
		Q_team_fight_positionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_team_fight_position();
			bean.read(bytes);
			Q_team_fight_positionContainer._list.push(bean);
			Q_team_fight_positionContainer._dict[String(bean.q_object_type)]=bean;
		}
	}

	Q_team_fight_positionContainer.GetValue=function(key){
		return Q_team_fight_positionContainer._dict[key.toString()];
	}

	Q_team_fight_positionContainer._list=[];
	__static(Q_team_fight_positionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_team_fight_positionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体装备套装属性
*/
//class datasets.container.Q_fit_equipment_groupContainer
var Q_fit_equipment_groupContainer=(function(){
	function Q_fit_equipment_groupContainer(){}
	__class(Q_fit_equipment_groupContainer,'datasets.container.Q_fit_equipment_groupContainer');
	__getset(1,Q_fit_equipment_groupContainer,'dict',function(){
		return Q_fit_equipment_groupContainer._dict;
	});

	__getset(1,Q_fit_equipment_groupContainer,'list',function(){
		return Q_fit_equipment_groupContainer._list;
	});

	Q_fit_equipment_groupContainer.SetData=function(bytes){
		Q_fit_equipment_groupContainer._list.length=0;
		Q_fit_equipment_groupContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_equipment_group();
			bean.read(bytes);
			Q_fit_equipment_groupContainer._list.push(bean);
			Q_fit_equipment_groupContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_equipment_groupContainer.GetValue=function(key){
		return Q_fit_equipment_groupContainer._dict[key.toString()];
	}

	Q_fit_equipment_groupContainer._list=[];
	__static(Q_fit_equipment_groupContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_equipment_groupContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活跃转盘配置表
*/
//class datasets.container.Q_open_active_turntableContainer
var Q_open_active_turntableContainer=(function(){
	function Q_open_active_turntableContainer(){}
	__class(Q_open_active_turntableContainer,'datasets.container.Q_open_active_turntableContainer');
	__getset(1,Q_open_active_turntableContainer,'dict',function(){
		return Q_open_active_turntableContainer._dict;
	});

	__getset(1,Q_open_active_turntableContainer,'list',function(){
		return Q_open_active_turntableContainer._list;
	});

	Q_open_active_turntableContainer.SetData=function(bytes){
		Q_open_active_turntableContainer._list.length=0;
		Q_open_active_turntableContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_open_active_turntable();
			bean.read(bytes);
			Q_open_active_turntableContainer._list.push(bean);
			Q_open_active_turntableContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_open_active_turntableContainer.GetValue=function(key){
		return Q_open_active_turntableContainer._dict[key.toString()];
	}

	Q_open_active_turntableContainer._list=[];
	__static(Q_open_active_turntableContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_open_active_turntableContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活动大厅
*/
//class datasets.container.Q_activitiesContainer
var Q_activitiesContainer=(function(){
	function Q_activitiesContainer(){}
	__class(Q_activitiesContainer,'datasets.container.Q_activitiesContainer');
	__getset(1,Q_activitiesContainer,'dict',function(){
		return Q_activitiesContainer._dict;
	});

	__getset(1,Q_activitiesContainer,'list',function(){
		return Q_activitiesContainer._list;
	});

	Q_activitiesContainer.SetData=function(bytes){
		Q_activitiesContainer._list.length=0;
		Q_activitiesContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_activities();
			bean.read(bytes);
			Q_activitiesContainer._list.push(bean);
			Q_activitiesContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_activitiesContainer.GetValue=function(key){
		return Q_activitiesContainer._dict[key.toString()];
	}

	Q_activitiesContainer._list=[];
	__static(Q_activitiesContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_activitiesContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*千里走单骑
*/
//class datasets.container.Q_yuanzhengContainer
var Q_yuanzhengContainer=(function(){
	function Q_yuanzhengContainer(){}
	__class(Q_yuanzhengContainer,'datasets.container.Q_yuanzhengContainer');
	__getset(1,Q_yuanzhengContainer,'dict',function(){
		return Q_yuanzhengContainer._dict;
	});

	__getset(1,Q_yuanzhengContainer,'list',function(){
		return Q_yuanzhengContainer._list;
	});

	Q_yuanzhengContainer.SetData=function(bytes){
		Q_yuanzhengContainer._list.length=0;
		Q_yuanzhengContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_yuanzheng();
			bean.read(bytes);
			Q_yuanzhengContainer._list.push(bean);
			Q_yuanzhengContainer._dict[String(bean.q_guanqia)]=bean;
		}
	}

	Q_yuanzhengContainer.GetValue=function(key){
		return Q_yuanzhengContainer._dict[key.toString()];
	}

	Q_yuanzhengContainer._list=[];
	__static(Q_yuanzhengContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_yuanzhengContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*套装数据库
*/
//class datasets.container.Q_gequip_suitContainer
var Q_gequip_suitContainer=(function(){
	function Q_gequip_suitContainer(){}
	__class(Q_gequip_suitContainer,'datasets.container.Q_gequip_suitContainer');
	__getset(1,Q_gequip_suitContainer,'dict',function(){
		return Q_gequip_suitContainer._dict;
	});

	__getset(1,Q_gequip_suitContainer,'list',function(){
		return Q_gequip_suitContainer._list;
	});

	Q_gequip_suitContainer.SetData=function(bytes){
		Q_gequip_suitContainer._list.length=0;
		Q_gequip_suitContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_gequip_suit();
			bean.read(bytes);
			Q_gequip_suitContainer._list.push(bean);
			Q_gequip_suitContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_gequip_suitContainer.GetValue=function(key){
		return Q_gequip_suitContainer._dict[key.toString()];
	}

	Q_gequip_suitContainer._list=[];
	__static(Q_gequip_suitContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_gequip_suitContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*兑换
*/
//class datasets.container.Q_duihuanContainer
var Q_duihuanContainer=(function(){
	function Q_duihuanContainer(){}
	__class(Q_duihuanContainer,'datasets.container.Q_duihuanContainer');
	__getset(1,Q_duihuanContainer,'dict',function(){
		return Q_duihuanContainer._dict;
	});

	__getset(1,Q_duihuanContainer,'list',function(){
		return Q_duihuanContainer._list;
	});

	Q_duihuanContainer.SetData=function(bytes){
		Q_duihuanContainer._list.length=0;
		Q_duihuanContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_duihuan();
			bean.read(bytes);
			Q_duihuanContainer._list.push(bean);
			Q_duihuanContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_duihuanContainer.GetValue=function(key){
		return Q_duihuanContainer._dict[key.toString()];
	}

	Q_duihuanContainer._list=[];
	__static(Q_duihuanContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_duihuanContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶豪礼
*/
//class datasets.container.Q_upgrade_giftContainer
var Q_upgrade_giftContainer=(function(){
	function Q_upgrade_giftContainer(){}
	__class(Q_upgrade_giftContainer,'datasets.container.Q_upgrade_giftContainer');
	__getset(1,Q_upgrade_giftContainer,'dict',function(){
		return Q_upgrade_giftContainer._dict;
	});

	__getset(1,Q_upgrade_giftContainer,'list',function(){
		return Q_upgrade_giftContainer._list;
	});

	Q_upgrade_giftContainer.SetData=function(bytes){
		Q_upgrade_giftContainer._list.length=0;
		Q_upgrade_giftContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_upgrade_gift();
			bean.read(bytes);
			Q_upgrade_giftContainer._list.push(bean);
			Q_upgrade_giftContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_upgrade_giftContainer.GetValue=function(key){
		return Q_upgrade_giftContainer._dict[key.toString()];
	}

	Q_upgrade_giftContainer._list=[];
	__static(Q_upgrade_giftContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_upgrade_giftContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_gequip_param
*/
//class datasets.container.Q_gequip_paramContainer
var Q_gequip_paramContainer=(function(){
	function Q_gequip_paramContainer(){}
	__class(Q_gequip_paramContainer,'datasets.container.Q_gequip_paramContainer');
	__getset(1,Q_gequip_paramContainer,'dict',function(){
		return Q_gequip_paramContainer._dict;
	});

	__getset(1,Q_gequip_paramContainer,'list',function(){
		return Q_gequip_paramContainer._list;
	});

	Q_gequip_paramContainer.SetData=function(bytes){
		Q_gequip_paramContainer._list.length=0;
		Q_gequip_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_gequip_param();
			bean.read(bytes);
			Q_gequip_paramContainer._list.push(bean);
			Q_gequip_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_gequip_paramContainer.GetValue=function(key){
		return Q_gequip_paramContainer._dict[key.toString()];
	}

	Q_gequip_paramContainer._list=[];
	__static(Q_gequip_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_gequip_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*巡城参数
*/
//class datasets.container.Q_city_paramContainer
var Q_city_paramContainer=(function(){
	function Q_city_paramContainer(){}
	__class(Q_city_paramContainer,'datasets.container.Q_city_paramContainer');
	__getset(1,Q_city_paramContainer,'dict',function(){
		return Q_city_paramContainer._dict;
	});

	__getset(1,Q_city_paramContainer,'list',function(){
		return Q_city_paramContainer._list;
	});

	Q_city_paramContainer.SetData=function(bytes){
		Q_city_paramContainer._list.length=0;
		Q_city_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_city_param();
			bean.read(bytes);
			Q_city_paramContainer._list.push(bean);
			Q_city_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_city_paramContainer.GetValue=function(key){
		return Q_city_paramContainer._dict[key.toString()];
	}

	Q_city_paramContainer._list=[];
	__static(Q_city_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_city_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*常驻内存资源
*/
//class datasets.container.Q_installContainer
var Q_installContainer=(function(){
	function Q_installContainer(){}
	__class(Q_installContainer,'datasets.container.Q_installContainer');
	__getset(1,Q_installContainer,'dict',function(){
		return Q_installContainer._dict;
	});

	__getset(1,Q_installContainer,'list',function(){
		return Q_installContainer._list;
	});

	Q_installContainer.SetData=function(bytes){
		Q_installContainer._list.length=0;
		Q_installContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_install();
			bean.read(bytes);
			Q_installContainer._list.push(bean);
			Q_installContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_installContainer.GetValue=function(key){
		return Q_installContainer._dict[key.toString()];
	}

	Q_installContainer._list=[];
	__static(Q_installContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_installContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者争霸段位数据库
*/
//class datasets.container.Q_kingwarContainer
var Q_kingwarContainer=(function(){
	function Q_kingwarContainer(){}
	__class(Q_kingwarContainer,'datasets.container.Q_kingwarContainer');
	__getset(1,Q_kingwarContainer,'dict',function(){
		return Q_kingwarContainer._dict;
	});

	__getset(1,Q_kingwarContainer,'list',function(){
		return Q_kingwarContainer._list;
	});

	Q_kingwarContainer.SetData=function(bytes){
		Q_kingwarContainer._list.length=0;
		Q_kingwarContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_kingwar();
			bean.read(bytes);
			Q_kingwarContainer._list.push(bean);
			Q_kingwarContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_kingwarContainer.GetValue=function(key){
		return Q_kingwarContainer._dict[key.toString()];
	}

	Q_kingwarContainer._list=[];
	__static(Q_kingwarContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_kingwarContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*时装
*/
//class datasets.container.Q_fashionContainer
var Q_fashionContainer=(function(){
	function Q_fashionContainer(){}
	__class(Q_fashionContainer,'datasets.container.Q_fashionContainer');
	__getset(1,Q_fashionContainer,'dict',function(){
		return Q_fashionContainer._dict;
	});

	__getset(1,Q_fashionContainer,'list',function(){
		return Q_fashionContainer._list;
	});

	Q_fashionContainer.SetData=function(bytes){
		Q_fashionContainer._list.length=0;
		Q_fashionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fashion();
			bean.read(bytes);
			Q_fashionContainer._list.push(bean);
			Q_fashionContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fashionContainer.GetValue=function(key){
		return Q_fashionContainer._dict[key.toString()];
	}

	Q_fashionContainer._list=[];
	__static(Q_fashionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fashionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*系统拍卖上架表
*/
//class datasets.container.Q_auctionContainer
var Q_auctionContainer=(function(){
	function Q_auctionContainer(){}
	__class(Q_auctionContainer,'datasets.container.Q_auctionContainer');
	__getset(1,Q_auctionContainer,'dict',function(){
		return Q_auctionContainer._dict;
	});

	__getset(1,Q_auctionContainer,'list',function(){
		return Q_auctionContainer._list;
	});

	Q_auctionContainer.SetData=function(bytes){
		Q_auctionContainer._list.length=0;
		Q_auctionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_auction();
			bean.read(bytes);
			Q_auctionContainer._list.push(bean);
			Q_auctionContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_auctionContainer.GetValue=function(key){
		return Q_auctionContainer._dict[key.toString()];
	}

	Q_auctionContainer._list=[];
	__static(Q_auctionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_auctionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*器魂数据库
*/
//class datasets.container.Q_gequip_soulContainer
var Q_gequip_soulContainer=(function(){
	function Q_gequip_soulContainer(){}
	__class(Q_gequip_soulContainer,'datasets.container.Q_gequip_soulContainer');
	__getset(1,Q_gequip_soulContainer,'dict',function(){
		return Q_gequip_soulContainer._dict;
	});

	__getset(1,Q_gequip_soulContainer,'list',function(){
		return Q_gequip_soulContainer._list;
	});

	Q_gequip_soulContainer.SetData=function(bytes){
		Q_gequip_soulContainer._list.length=0;
		Q_gequip_soulContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_gequip_soul();
			bean.read(bytes);
			Q_gequip_soulContainer._list.push(bean);
			Q_gequip_soulContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_gequip_soulContainer.GetValue=function(key){
		return Q_gequip_soulContainer._dict[key.toString()];
	}

	Q_gequip_soulContainer._list=[];
	__static(Q_gequip_soulContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_gequip_soulContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*文本
*/
//class datasets.container.Q_messageContainer
var Q_messageContainer=(function(){
	function Q_messageContainer(){}
	__class(Q_messageContainer,'datasets.container.Q_messageContainer');
	__getset(1,Q_messageContainer,'dict',function(){
		return Q_messageContainer._dict;
	});

	__getset(1,Q_messageContainer,'list',function(){
		return Q_messageContainer._list;
	});

	Q_messageContainer.SetData=function(bytes){
		Q_messageContainer._list.length=0;
		Q_messageContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_message();
			bean.read(bytes);
			Q_messageContainer._list.push(bean);
			Q_messageContainer._dict[String(bean.q_messageID)]=bean;
		}
	}

	Q_messageContainer.GetValue=function(key){
		return Q_messageContainer._dict[key.toString()];
	}

	Q_messageContainer._list=[];
	__static(Q_messageContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_messageContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限定武将活动
*/
//class datasets.container.Q_limit_wu_jiangContainer
var Q_limit_wu_jiangContainer=(function(){
	function Q_limit_wu_jiangContainer(){}
	__class(Q_limit_wu_jiangContainer,'datasets.container.Q_limit_wu_jiangContainer');
	__getset(1,Q_limit_wu_jiangContainer,'dict',function(){
		return Q_limit_wu_jiangContainer._dict;
	});

	__getset(1,Q_limit_wu_jiangContainer,'list',function(){
		return Q_limit_wu_jiangContainer._list;
	});

	Q_limit_wu_jiangContainer.SetData=function(bytes){
		Q_limit_wu_jiangContainer._list.length=0;
		Q_limit_wu_jiangContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_limit_wu_jiang();
			bean.read(bytes);
			Q_limit_wu_jiangContainer._list.push(bean);
			Q_limit_wu_jiangContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_limit_wu_jiangContainer.GetValue=function(key){
		return Q_limit_wu_jiangContainer._dict[key.toString()];
	}

	Q_limit_wu_jiangContainer._list=[];
	__static(Q_limit_wu_jiangContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_limit_wu_jiangContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备升品
*/
//class datasets.container.Q_equip_promoteContainer
var Q_equip_promoteContainer=(function(){
	function Q_equip_promoteContainer(){}
	__class(Q_equip_promoteContainer,'datasets.container.Q_equip_promoteContainer');
	__getset(1,Q_equip_promoteContainer,'dict',function(){
		return Q_equip_promoteContainer._dict;
	});

	__getset(1,Q_equip_promoteContainer,'list',function(){
		return Q_equip_promoteContainer._list;
	});

	Q_equip_promoteContainer.SetData=function(bytes){
		Q_equip_promoteContainer._list.length=0;
		Q_equip_promoteContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_equip_promote();
			bean.read(bytes);
			Q_equip_promoteContainer._list.push(bean);
			Q_equip_promoteContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_equip_promoteContainer.GetValue=function(key){
		return Q_equip_promoteContainer._dict[key.toString()];
	}

	Q_equip_promoteContainer._list=[];
	__static(Q_equip_promoteContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_equip_promoteContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*图鉴道具类型配置
*/
//class datasets.container.Q_handbookContainer
var Q_handbookContainer=(function(){
	function Q_handbookContainer(){}
	__class(Q_handbookContainer,'datasets.container.Q_handbookContainer');
	__getset(1,Q_handbookContainer,'dict',function(){
		return Q_handbookContainer._dict;
	});

	__getset(1,Q_handbookContainer,'list',function(){
		return Q_handbookContainer._list;
	});

	Q_handbookContainer.SetData=function(bytes){
		Q_handbookContainer._list.length=0;
		Q_handbookContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_handbook();
			bean.read(bytes);
			Q_handbookContainer._list.push(bean);
			Q_handbookContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_handbookContainer.GetValue=function(key){
		return Q_handbookContainer._dict[key.toString()];
	}

	Q_handbookContainer._list=[];
	__static(Q_handbookContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_handbookContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*资源获取途径表
*/
//class datasets.container.Q_guideContainer
var Q_guideContainer=(function(){
	function Q_guideContainer(){}
	__class(Q_guideContainer,'datasets.container.Q_guideContainer');
	__getset(1,Q_guideContainer,'dict',function(){
		return Q_guideContainer._dict;
	});

	__getset(1,Q_guideContainer,'list',function(){
		return Q_guideContainer._list;
	});

	Q_guideContainer.SetData=function(bytes){
		Q_guideContainer._list.length=0;
		Q_guideContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guide();
			bean.read(bytes);
			Q_guideContainer._list.push(bean);
			Q_guideContainer._dict[String(bean.q_guide_id)]=bean;
		}
	}

	Q_guideContainer.GetValue=function(key){
		return Q_guideContainer._dict[key.toString()];
	}

	Q_guideContainer._list=[];
	__static(Q_guideContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guideContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动参数
*/
//class datasets.container.Q_super_value_paramContainer
var Q_super_value_paramContainer=(function(){
	function Q_super_value_paramContainer(){}
	__class(Q_super_value_paramContainer,'datasets.container.Q_super_value_paramContainer');
	__getset(1,Q_super_value_paramContainer,'dict',function(){
		return Q_super_value_paramContainer._dict;
	});

	__getset(1,Q_super_value_paramContainer,'list',function(){
		return Q_super_value_paramContainer._list;
	});

	Q_super_value_paramContainer.SetData=function(bytes){
		Q_super_value_paramContainer._list.length=0;
		Q_super_value_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_super_value_param();
			bean.read(bytes);
			Q_super_value_paramContainer._list.push(bean);
			Q_super_value_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_super_value_paramContainer.GetValue=function(key){
		return Q_super_value_paramContainer._dict[key.toString()];
	}

	Q_super_value_paramContainer._list=[];
	__static(Q_super_value_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_super_value_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军团排名奖励
*/
//class datasets.container.Q_open_reward_FirstArmyContainer
var Q_open_reward_FirstArmyContainer=(function(){
	function Q_open_reward_FirstArmyContainer(){}
	__class(Q_open_reward_FirstArmyContainer,'datasets.container.Q_open_reward_FirstArmyContainer');
	__getset(1,Q_open_reward_FirstArmyContainer,'dict',function(){
		return Q_open_reward_FirstArmyContainer._dict;
	});

	__getset(1,Q_open_reward_FirstArmyContainer,'list',function(){
		return Q_open_reward_FirstArmyContainer._list;
	});

	Q_open_reward_FirstArmyContainer.SetData=function(bytes){
		Q_open_reward_FirstArmyContainer._list.length=0;
		Q_open_reward_FirstArmyContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_open_reward_FirstArmy();
			bean.read(bytes);
			Q_open_reward_FirstArmyContainer._list.push(bean);
			Q_open_reward_FirstArmyContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_open_reward_FirstArmyContainer.GetValue=function(key){
		return Q_open_reward_FirstArmyContainer._dict[key.toString()];
	}

	Q_open_reward_FirstArmyContainer._list=[];
	__static(Q_open_reward_FirstArmyContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_open_reward_FirstArmyContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*转生参数
*/
//class datasets.container.Q_zhuansheng_paramContainer
var Q_zhuansheng_paramContainer=(function(){
	function Q_zhuansheng_paramContainer(){}
	__class(Q_zhuansheng_paramContainer,'datasets.container.Q_zhuansheng_paramContainer');
	__getset(1,Q_zhuansheng_paramContainer,'dict',function(){
		return Q_zhuansheng_paramContainer._dict;
	});

	__getset(1,Q_zhuansheng_paramContainer,'list',function(){
		return Q_zhuansheng_paramContainer._list;
	});

	Q_zhuansheng_paramContainer.SetData=function(bytes){
		Q_zhuansheng_paramContainer._list.length=0;
		Q_zhuansheng_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_zhuansheng_param();
			bean.read(bytes);
			Q_zhuansheng_paramContainer._list.push(bean);
			Q_zhuansheng_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_zhuansheng_paramContainer.GetValue=function(key){
		return Q_zhuansheng_paramContainer._dict[key.toString()];
	}

	Q_zhuansheng_paramContainer._list=[];
	__static(Q_zhuansheng_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_zhuansheng_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*竞技场分段
*/
//class datasets.container.Q_arena_segmentContainer
var Q_arena_segmentContainer=(function(){
	function Q_arena_segmentContainer(){}
	__class(Q_arena_segmentContainer,'datasets.container.Q_arena_segmentContainer');
	__getset(1,Q_arena_segmentContainer,'dict',function(){
		return Q_arena_segmentContainer._dict;
	});

	__getset(1,Q_arena_segmentContainer,'list',function(){
		return Q_arena_segmentContainer._list;
	});

	Q_arena_segmentContainer.SetData=function(bytes){
		Q_arena_segmentContainer._list.length=0;
		Q_arena_segmentContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_arena_segment();
			bean.read(bytes);
			Q_arena_segmentContainer._list.push(bean);
			Q_arena_segmentContainer._dict[String(bean.q_segment)]=bean;
		}
	}

	Q_arena_segmentContainer.GetValue=function(key){
		return Q_arena_segmentContainer._dict[key.toString()];
	}

	Q_arena_segmentContainer._list=[];
	__static(Q_arena_segmentContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_arena_segmentContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者参数
*/
//class datasets.container.Q_kingwar_paramContainer
var Q_kingwar_paramContainer=(function(){
	function Q_kingwar_paramContainer(){}
	__class(Q_kingwar_paramContainer,'datasets.container.Q_kingwar_paramContainer');
	__getset(1,Q_kingwar_paramContainer,'dict',function(){
		return Q_kingwar_paramContainer._dict;
	});

	__getset(1,Q_kingwar_paramContainer,'list',function(){
		return Q_kingwar_paramContainer._list;
	});

	Q_kingwar_paramContainer.SetData=function(bytes){
		Q_kingwar_paramContainer._list.length=0;
		Q_kingwar_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_kingwar_param();
			bean.read(bytes);
			Q_kingwar_paramContainer._list.push(bean);
			Q_kingwar_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_kingwar_paramContainer.GetValue=function(key){
		return Q_kingwar_paramContainer._dict[key.toString()];
	}

	Q_kingwar_paramContainer._list=[];
	__static(Q_kingwar_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_kingwar_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_duanzao_master
*/
//class datasets.container.Q_duanzao_masterContainer
var Q_duanzao_masterContainer=(function(){
	function Q_duanzao_masterContainer(){}
	__class(Q_duanzao_masterContainer,'datasets.container.Q_duanzao_masterContainer');
	__getset(1,Q_duanzao_masterContainer,'dict',function(){
		return Q_duanzao_masterContainer._dict;
	});

	__getset(1,Q_duanzao_masterContainer,'list',function(){
		return Q_duanzao_masterContainer._list;
	});

	Q_duanzao_masterContainer.SetData=function(bytes){
		Q_duanzao_masterContainer._list.length=0;
		Q_duanzao_masterContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_duanzao_master();
			bean.read(bytes);
			Q_duanzao_masterContainer._list.push(bean);
			Q_duanzao_masterContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_duanzao_masterContainer.GetValue=function(key){
		return Q_duanzao_masterContainer._dict[key.toString()];
	}

	Q_duanzao_masterContainer._list=[];
	__static(Q_duanzao_masterContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_duanzao_masterContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本
*/
//class datasets.container.Q_pataContainer
var Q_pataContainer=(function(){
	function Q_pataContainer(){}
	__class(Q_pataContainer,'datasets.container.Q_pataContainer');
	__getset(1,Q_pataContainer,'dict',function(){
		return Q_pataContainer._dict;
	});

	__getset(1,Q_pataContainer,'list',function(){
		return Q_pataContainer._list;
	});

	Q_pataContainer.SetData=function(bytes){
		Q_pataContainer._list.length=0;
		Q_pataContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pata();
			bean.read(bytes);
			Q_pataContainer._list.push(bean);
			Q_pataContainer._dict[String(bean.q_layer)]=bean;
		}
	}

	Q_pataContainer.GetValue=function(key){
		return Q_pataContainer._dict[key.toString()];
	}

	Q_pataContainer._list=[];
	__static(Q_pataContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pataContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*秘籍参数
*/
//class datasets.container.Q_miji_paramContainer
var Q_miji_paramContainer=(function(){
	function Q_miji_paramContainer(){}
	__class(Q_miji_paramContainer,'datasets.container.Q_miji_paramContainer');
	__getset(1,Q_miji_paramContainer,'dict',function(){
		return Q_miji_paramContainer._dict;
	});

	__getset(1,Q_miji_paramContainer,'list',function(){
		return Q_miji_paramContainer._list;
	});

	Q_miji_paramContainer.SetData=function(bytes){
		Q_miji_paramContainer._list.length=0;
		Q_miji_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_miji_param();
			bean.read(bytes);
			Q_miji_paramContainer._list.push(bean);
			Q_miji_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_miji_paramContainer.GetValue=function(key){
		return Q_miji_paramContainer._dict[key.toString()];
	}

	Q_miji_paramContainer._list=[];
	__static(Q_miji_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_miji_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战参数
*/
//class datasets.container.Q_guildwar_paramContainer
var Q_guildwar_paramContainer=(function(){
	function Q_guildwar_paramContainer(){}
	__class(Q_guildwar_paramContainer,'datasets.container.Q_guildwar_paramContainer');
	__getset(1,Q_guildwar_paramContainer,'dict',function(){
		return Q_guildwar_paramContainer._dict;
	});

	__getset(1,Q_guildwar_paramContainer,'list',function(){
		return Q_guildwar_paramContainer._list;
	});

	Q_guildwar_paramContainer.SetData=function(bytes){
		Q_guildwar_paramContainer._list.length=0;
		Q_guildwar_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guildwar_param();
			bean.read(bytes);
			Q_guildwar_paramContainer._list.push(bean);
			Q_guildwar_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guildwar_paramContainer.GetValue=function(key){
		return Q_guildwar_paramContainer._dict[key.toString()];
	}

	Q_guildwar_paramContainer._list=[];
	__static(Q_guildwar_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guildwar_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体
*/
//class datasets.container.Q_fitContainer
var Q_fitContainer=(function(){
	function Q_fitContainer(){}
	__class(Q_fitContainer,'datasets.container.Q_fitContainer');
	__getset(1,Q_fitContainer,'dict',function(){
		return Q_fitContainer._dict;
	});

	__getset(1,Q_fitContainer,'list',function(){
		return Q_fitContainer._list;
	});

	Q_fitContainer.SetData=function(bytes){
		Q_fitContainer._list.length=0;
		Q_fitContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit();
			bean.read(bytes);
			Q_fitContainer._list.push(bean);
			Q_fitContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_fitContainer.GetValue=function(key){
		return Q_fitContainer._dict[key.toString()];
	}

	Q_fitContainer._list=[];
	__static(Q_fitContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fitContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*成就数据库
*/
//class datasets.container.Q_achievementContainer
var Q_achievementContainer=(function(){
	function Q_achievementContainer(){}
	__class(Q_achievementContainer,'datasets.container.Q_achievementContainer');
	__getset(1,Q_achievementContainer,'dict',function(){
		return Q_achievementContainer._dict;
	});

	__getset(1,Q_achievementContainer,'list',function(){
		return Q_achievementContainer._list;
	});

	Q_achievementContainer.SetData=function(bytes){
		Q_achievementContainer._list.length=0;
		Q_achievementContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_achievement();
			bean.read(bytes);
			Q_achievementContainer._list.push(bean);
			Q_achievementContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_achievementContainer.GetValue=function(key){
		return Q_achievementContainer._dict[key.toString()];
	}

	Q_achievementContainer._list=[];
	__static(Q_achievementContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_achievementContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体武器
*/
//class datasets.container.Q_fit_pinzhiContainer
var Q_fit_pinzhiContainer=(function(){
	function Q_fit_pinzhiContainer(){}
	__class(Q_fit_pinzhiContainer,'datasets.container.Q_fit_pinzhiContainer');
	__getset(1,Q_fit_pinzhiContainer,'dict',function(){
		return Q_fit_pinzhiContainer._dict;
	});

	__getset(1,Q_fit_pinzhiContainer,'list',function(){
		return Q_fit_pinzhiContainer._list;
	});

	Q_fit_pinzhiContainer.SetData=function(bytes){
		Q_fit_pinzhiContainer._list.length=0;
		Q_fit_pinzhiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fit_pinzhi();
			bean.read(bytes);
			Q_fit_pinzhiContainer._list.push(bean);
			Q_fit_pinzhiContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fit_pinzhiContainer.GetValue=function(key){
		return Q_fit_pinzhiContainer._dict[key.toString()];
	}

	Q_fit_pinzhiContainer._list=[];
	__static(Q_fit_pinzhiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fit_pinzhiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令
*/
//class datasets.container.Q_sgling_missionContainer
var Q_sgling_missionContainer=(function(){
	function Q_sgling_missionContainer(){}
	__class(Q_sgling_missionContainer,'datasets.container.Q_sgling_missionContainer');
	__getset(1,Q_sgling_missionContainer,'dict',function(){
		return Q_sgling_missionContainer._dict;
	});

	__getset(1,Q_sgling_missionContainer,'list',function(){
		return Q_sgling_missionContainer._list;
	});

	Q_sgling_missionContainer.SetData=function(bytes){
		Q_sgling_missionContainer._list.length=0;
		Q_sgling_missionContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_sgling_mission();
			bean.read(bytes);
			Q_sgling_missionContainer._list.push(bean);
			Q_sgling_missionContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_sgling_missionContainer.GetValue=function(key){
		return Q_sgling_missionContainer._dict[key.toString()];
	}

	Q_sgling_missionContainer._list=[];
	__static(Q_sgling_missionContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_sgling_missionContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备套装
*/
//class datasets.container.Q_equip_suitContainer
var Q_equip_suitContainer=(function(){
	function Q_equip_suitContainer(){}
	__class(Q_equip_suitContainer,'datasets.container.Q_equip_suitContainer');
	__getset(1,Q_equip_suitContainer,'dict',function(){
		return Q_equip_suitContainer._dict;
	});

	__getset(1,Q_equip_suitContainer,'list',function(){
		return Q_equip_suitContainer._list;
	});

	Q_equip_suitContainer.SetData=function(bytes){
		Q_equip_suitContainer._list.length=0;
		Q_equip_suitContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_equip_suit();
			bean.read(bytes);
			Q_equip_suitContainer._list.push(bean);
			Q_equip_suitContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_equip_suitContainer.GetValue=function(key){
		return Q_equip_suitContainer._dict[key.toString()];
	}

	Q_equip_suitContainer._list=[];
	__static(Q_equip_suitContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_equip_suitContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜参数
*/
//class datasets.container.Q_rank_paramContainer
var Q_rank_paramContainer=(function(){
	function Q_rank_paramContainer(){}
	__class(Q_rank_paramContainer,'datasets.container.Q_rank_paramContainer');
	__getset(1,Q_rank_paramContainer,'dict',function(){
		return Q_rank_paramContainer._dict;
	});

	__getset(1,Q_rank_paramContainer,'list',function(){
		return Q_rank_paramContainer._list;
	});

	Q_rank_paramContainer.SetData=function(bytes){
		Q_rank_paramContainer._list.length=0;
		Q_rank_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_rank_param();
			bean.read(bytes);
			Q_rank_paramContainer._list.push(bean);
			Q_rank_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_rank_paramContainer.GetValue=function(key){
		return Q_rank_paramContainer._dict[key.toString()];
	}

	Q_rank_paramContainer._list=[];
	__static(Q_rank_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rank_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店参数
*/
//class datasets.container.Q_shop_paramContainer
var Q_shop_paramContainer=(function(){
	function Q_shop_paramContainer(){}
	__class(Q_shop_paramContainer,'datasets.container.Q_shop_paramContainer');
	__getset(1,Q_shop_paramContainer,'dict',function(){
		return Q_shop_paramContainer._dict;
	});

	__getset(1,Q_shop_paramContainer,'list',function(){
		return Q_shop_paramContainer._list;
	});

	Q_shop_paramContainer.SetData=function(bytes){
		Q_shop_paramContainer._list.length=0;
		Q_shop_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_shop_param();
			bean.read(bytes);
			Q_shop_paramContainer._list.push(bean);
			Q_shop_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_shop_paramContainer.GetValue=function(key){
		return Q_shop_paramContainer._dict[key.toString()];
	}

	Q_shop_paramContainer._list=[];
	__static(Q_shop_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_shop_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本
*/
//class datasets.container.Q_dungeonContainer
var Q_dungeonContainer=(function(){
	function Q_dungeonContainer(){}
	__class(Q_dungeonContainer,'datasets.container.Q_dungeonContainer');
	__getset(1,Q_dungeonContainer,'dict',function(){
		return Q_dungeonContainer._dict;
	});

	__getset(1,Q_dungeonContainer,'list',function(){
		return Q_dungeonContainer._list;
	});

	Q_dungeonContainer.SetData=function(bytes){
		Q_dungeonContainer._list.length=0;
		Q_dungeonContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_dungeon();
			bean.read(bytes);
			Q_dungeonContainer._list.push(bean);
			Q_dungeonContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_dungeonContainer.GetValue=function(key){
		return Q_dungeonContainer._dict[key.toString()];
	}

	Q_dungeonContainer._list=[];
	__static(Q_dungeonContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_dungeonContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战纹参数
*/
//class datasets.container.Q_zhanwen_paramContainer
var Q_zhanwen_paramContainer=(function(){
	function Q_zhanwen_paramContainer(){}
	__class(Q_zhanwen_paramContainer,'datasets.container.Q_zhanwen_paramContainer');
	__getset(1,Q_zhanwen_paramContainer,'dict',function(){
		return Q_zhanwen_paramContainer._dict;
	});

	__getset(1,Q_zhanwen_paramContainer,'list',function(){
		return Q_zhanwen_paramContainer._list;
	});

	Q_zhanwen_paramContainer.SetData=function(bytes){
		Q_zhanwen_paramContainer._list.length=0;
		Q_zhanwen_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_zhanwen_param();
			bean.read(bytes);
			Q_zhanwen_paramContainer._list.push(bean);
			Q_zhanwen_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_zhanwen_paramContainer.GetValue=function(key){
		return Q_zhanwen_paramContainer._dict[key.toString()];
	}

	Q_zhanwen_paramContainer._list=[];
	__static(Q_zhanwen_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_zhanwen_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将觉悟数据库
*/
//class datasets.container.Q_officer_juewuContainer
var Q_officer_juewuContainer=(function(){
	function Q_officer_juewuContainer(){}
	__class(Q_officer_juewuContainer,'datasets.container.Q_officer_juewuContainer');
	__getset(1,Q_officer_juewuContainer,'dict',function(){
		return Q_officer_juewuContainer._dict;
	});

	__getset(1,Q_officer_juewuContainer,'list',function(){
		return Q_officer_juewuContainer._list;
	});

	Q_officer_juewuContainer.SetData=function(bytes){
		Q_officer_juewuContainer._list.length=0;
		Q_officer_juewuContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_officer_juewu();
			bean.read(bytes);
			Q_officer_juewuContainer._list.push(bean);
			Q_officer_juewuContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_officer_juewuContainer.GetValue=function(key){
		return Q_officer_juewuContainer._dict[key.toString()];
	}

	Q_officer_juewuContainer._list=[];
	__static(Q_officer_juewuContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_officer_juewuContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物升星配置表
*/
//class datasets.container.Q_baowu_peiyangContainer
var Q_baowu_peiyangContainer=(function(){
	function Q_baowu_peiyangContainer(){}
	__class(Q_baowu_peiyangContainer,'datasets.container.Q_baowu_peiyangContainer');
	__getset(1,Q_baowu_peiyangContainer,'dict',function(){
		return Q_baowu_peiyangContainer._dict;
	});

	__getset(1,Q_baowu_peiyangContainer,'list',function(){
		return Q_baowu_peiyangContainer._list;
	});

	Q_baowu_peiyangContainer.SetData=function(bytes){
		Q_baowu_peiyangContainer._list.length=0;
		Q_baowu_peiyangContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_baowu_peiyang();
			bean.read(bytes);
			Q_baowu_peiyangContainer._list.push(bean);
			Q_baowu_peiyangContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_baowu_peiyangContainer.GetValue=function(key){
		return Q_baowu_peiyangContainer._dict[key.toString()];
	}

	Q_baowu_peiyangContainer._list=[];
	__static(Q_baowu_peiyangContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_baowu_peiyangContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜活动奖励
*/
//class datasets.container.Q_rank_activity_prizeContainer
var Q_rank_activity_prizeContainer=(function(){
	function Q_rank_activity_prizeContainer(){}
	__class(Q_rank_activity_prizeContainer,'datasets.container.Q_rank_activity_prizeContainer');
	__getset(1,Q_rank_activity_prizeContainer,'dict',function(){
		return Q_rank_activity_prizeContainer._dict;
	});

	__getset(1,Q_rank_activity_prizeContainer,'list',function(){
		return Q_rank_activity_prizeContainer._list;
	});

	Q_rank_activity_prizeContainer.SetData=function(bytes){
		Q_rank_activity_prizeContainer._list.length=0;
		Q_rank_activity_prizeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_rank_activity_prize();
			bean.read(bytes);
			Q_rank_activity_prizeContainer._list.push(bean);
			Q_rank_activity_prizeContainer._dict[String(bean.q_activity)]=bean;
		}
	}

	Q_rank_activity_prizeContainer.GetValue=function(key){
		return Q_rank_activity_prizeContainer._dict[key.toString()];
	}

	Q_rank_activity_prizeContainer._list=[];
	__static(Q_rank_activity_prizeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_rank_activity_prizeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*神将现世配置表
*/
//class datasets.container.Q_god_appearContainer
var Q_god_appearContainer=(function(){
	function Q_god_appearContainer(){}
	__class(Q_god_appearContainer,'datasets.container.Q_god_appearContainer');
	__getset(1,Q_god_appearContainer,'dict',function(){
		return Q_god_appearContainer._dict;
	});

	__getset(1,Q_god_appearContainer,'list',function(){
		return Q_god_appearContainer._list;
	});

	Q_god_appearContainer.SetData=function(bytes){
		Q_god_appearContainer._list.length=0;
		Q_god_appearContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_god_appear();
			bean.read(bytes);
			Q_god_appearContainer._list.push(bean);
			Q_god_appearContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_god_appearContainer.GetValue=function(key){
		return Q_god_appearContainer._dict[key.toString()];
	}

	Q_god_appearContainer._list=[];
	__static(Q_god_appearContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_god_appearContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.container.Q_common_war_token_paramContainer
var Q_common_war_token_paramContainer=(function(){
	function Q_common_war_token_paramContainer(){}
	__class(Q_common_war_token_paramContainer,'datasets.container.Q_common_war_token_paramContainer');
	__getset(1,Q_common_war_token_paramContainer,'dict',function(){
		return Q_common_war_token_paramContainer._dict;
	});

	__getset(1,Q_common_war_token_paramContainer,'list',function(){
		return Q_common_war_token_paramContainer._list;
	});

	Q_common_war_token_paramContainer.SetData=function(bytes){
		Q_common_war_token_paramContainer._list.length=0;
		Q_common_war_token_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_common_war_token_param();
			bean.read(bytes);
			Q_common_war_token_paramContainer._list.push(bean);
			Q_common_war_token_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_common_war_token_paramContainer.GetValue=function(key){
		return Q_common_war_token_paramContainer._dict[key.toString()];
	}

	Q_common_war_token_paramContainer._list=[];
	__static(Q_common_war_token_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_common_war_token_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物
*/
//class datasets.container.Q_pet_levelContainer
var Q_pet_levelContainer=(function(){
	function Q_pet_levelContainer(){}
	__class(Q_pet_levelContainer,'datasets.container.Q_pet_levelContainer');
	__getset(1,Q_pet_levelContainer,'dict',function(){
		return Q_pet_levelContainer._dict;
	});

	__getset(1,Q_pet_levelContainer,'list',function(){
		return Q_pet_levelContainer._list;
	});

	Q_pet_levelContainer.SetData=function(bytes){
		Q_pet_levelContainer._list.length=0;
		Q_pet_levelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pet_level();
			bean.read(bytes);
			Q_pet_levelContainer._list.push(bean);
			Q_pet_levelContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_pet_levelContainer.GetValue=function(key){
		return Q_pet_levelContainer._dict[key.toString()];
	}

	Q_pet_levelContainer._list=[];
	__static(Q_pet_levelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_pet_levelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*秘籍格子开启
*/
//class datasets.container.Q_miji_gridContainer
var Q_miji_gridContainer=(function(){
	function Q_miji_gridContainer(){}
	__class(Q_miji_gridContainer,'datasets.container.Q_miji_gridContainer');
	__getset(1,Q_miji_gridContainer,'dict',function(){
		return Q_miji_gridContainer._dict;
	});

	__getset(1,Q_miji_gridContainer,'list',function(){
		return Q_miji_gridContainer._list;
	});

	Q_miji_gridContainer.SetData=function(bytes){
		Q_miji_gridContainer._list.length=0;
		Q_miji_gridContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_miji_grid();
			bean.read(bytes);
			Q_miji_gridContainer._list.push(bean);
			Q_miji_gridContainer._dict[String(bean.q_grid)]=bean;
		}
	}

	Q_miji_gridContainer.GetValue=function(key){
		return Q_miji_gridContainer._dict[key.toString()];
	}

	Q_miji_gridContainer._list=[];
	__static(Q_miji_gridContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_miji_gridContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会兑换
*/
//class datasets.container.Q_guild_exchangeContainer
var Q_guild_exchangeContainer=(function(){
	function Q_guild_exchangeContainer(){}
	__class(Q_guild_exchangeContainer,'datasets.container.Q_guild_exchangeContainer');
	__getset(1,Q_guild_exchangeContainer,'dict',function(){
		return Q_guild_exchangeContainer._dict;
	});

	__getset(1,Q_guild_exchangeContainer,'list',function(){
		return Q_guild_exchangeContainer._list;
	});

	Q_guild_exchangeContainer.SetData=function(bytes){
		Q_guild_exchangeContainer._list.length=0;
		Q_guild_exchangeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_exchange();
			bean.read(bytes);
			Q_guild_exchangeContainer._list.push(bean);
			Q_guild_exchangeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_guild_exchangeContainer.GetValue=function(key){
		return Q_guild_exchangeContainer._dict[key.toString()];
	}

	Q_guild_exchangeContainer._list=[];
	__static(Q_guild_exchangeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_exchangeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令任务
*/
//class datasets.container.Q_grow_checkpointContainer
var Q_grow_checkpointContainer=(function(){
	function Q_grow_checkpointContainer(){}
	__class(Q_grow_checkpointContainer,'datasets.container.Q_grow_checkpointContainer');
	__getset(1,Q_grow_checkpointContainer,'dict',function(){
		return Q_grow_checkpointContainer._dict;
	});

	__getset(1,Q_grow_checkpointContainer,'list',function(){
		return Q_grow_checkpointContainer._list;
	});

	Q_grow_checkpointContainer.SetData=function(bytes){
		Q_grow_checkpointContainer._list.length=0;
		Q_grow_checkpointContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_grow_checkpoint();
			bean.read(bytes);
			Q_grow_checkpointContainer._list.push(bean);
			Q_grow_checkpointContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_grow_checkpointContainer.GetValue=function(key){
		return Q_grow_checkpointContainer._dict[key.toString()];
	}

	Q_grow_checkpointContainer._list=[];
	__static(Q_grow_checkpointContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_grow_checkpointContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*猎命参数
*/
//class datasets.container.Q_lieming_paramContainer
var Q_lieming_paramContainer=(function(){
	function Q_lieming_paramContainer(){}
	__class(Q_lieming_paramContainer,'datasets.container.Q_lieming_paramContainer');
	__getset(1,Q_lieming_paramContainer,'dict',function(){
		return Q_lieming_paramContainer._dict;
	});

	__getset(1,Q_lieming_paramContainer,'list',function(){
		return Q_lieming_paramContainer._list;
	});

	Q_lieming_paramContainer.SetData=function(bytes){
		Q_lieming_paramContainer._list.length=0;
		Q_lieming_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_lieming_param();
			bean.read(bytes);
			Q_lieming_paramContainer._list.push(bean);
			Q_lieming_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_lieming_paramContainer.GetValue=function(key){
		return Q_lieming_paramContainer._dict[key.toString()];
	}

	Q_lieming_paramContainer._list=[];
	__static(Q_lieming_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_lieming_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*压缩纹理
*/
//class datasets.container.Q_zipContainer
var Q_zipContainer=(function(){
	function Q_zipContainer(){}
	__class(Q_zipContainer,'datasets.container.Q_zipContainer');
	__getset(1,Q_zipContainer,'dict',function(){
		return Q_zipContainer._dict;
	});

	__getset(1,Q_zipContainer,'list',function(){
		return Q_zipContainer._list;
	});

	Q_zipContainer.SetData=function(bytes){
		Q_zipContainer._list.length=0;
		Q_zipContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_zip();
			bean.read(bytes);
			Q_zipContainer._list.push(bean);
			Q_zipContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_zipContainer.GetValue=function(key){
		return Q_zipContainer._dict[key.toString()];
	}

	Q_zipContainer._list=[];
	__static(Q_zipContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_zipContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师
*/
//class datasets.container.Q_militaryContainer
var Q_militaryContainer=(function(){
	function Q_militaryContainer(){}
	__class(Q_militaryContainer,'datasets.container.Q_militaryContainer');
	__getset(1,Q_militaryContainer,'dict',function(){
		return Q_militaryContainer._dict;
	});

	__getset(1,Q_militaryContainer,'list',function(){
		return Q_militaryContainer._list;
	});

	Q_militaryContainer.SetData=function(bytes){
		Q_militaryContainer._list.length=0;
		Q_militaryContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_military();
			bean.read(bytes);
			Q_militaryContainer._list.push(bean);
			Q_militaryContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_militaryContainer.GetValue=function(key){
		return Q_militaryContainer._dict[key.toString()];
	}

	Q_militaryContainer._list=[];
	__static(Q_militaryContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_militaryContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天周排名奖励
*/
//class datasets.container.Q_jiuchongtian_rank_prizeContainer
var Q_jiuchongtian_rank_prizeContainer=(function(){
	function Q_jiuchongtian_rank_prizeContainer(){}
	__class(Q_jiuchongtian_rank_prizeContainer,'datasets.container.Q_jiuchongtian_rank_prizeContainer');
	__getset(1,Q_jiuchongtian_rank_prizeContainer,'dict',function(){
		return Q_jiuchongtian_rank_prizeContainer._dict;
	});

	__getset(1,Q_jiuchongtian_rank_prizeContainer,'list',function(){
		return Q_jiuchongtian_rank_prizeContainer._list;
	});

	Q_jiuchongtian_rank_prizeContainer.SetData=function(bytes){
		Q_jiuchongtian_rank_prizeContainer._list.length=0;
		Q_jiuchongtian_rank_prizeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_jiuchongtian_rank_prize();
			bean.read(bytes);
			Q_jiuchongtian_rank_prizeContainer._list.push(bean);
			Q_jiuchongtian_rank_prizeContainer._dict[String(bean.q_rank)]=bean;
		}
	}

	Q_jiuchongtian_rank_prizeContainer.GetValue=function(key){
		return Q_jiuchongtian_rank_prizeContainer._dict[key.toString()];
	}

	Q_jiuchongtian_rank_prizeContainer._list=[];
	__static(Q_jiuchongtian_rank_prizeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_jiuchongtian_rank_prizeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*押镖
*/
//class datasets.container.Q_payloadContainer
var Q_payloadContainer=(function(){
	function Q_payloadContainer(){}
	__class(Q_payloadContainer,'datasets.container.Q_payloadContainer');
	__getset(1,Q_payloadContainer,'dict',function(){
		return Q_payloadContainer._dict;
	});

	__getset(1,Q_payloadContainer,'list',function(){
		return Q_payloadContainer._list;
	});

	Q_payloadContainer.SetData=function(bytes){
		Q_payloadContainer._list.length=0;
		Q_payloadContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_payload();
			bean.read(bytes);
			Q_payloadContainer._list.push(bean);
			Q_payloadContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_payloadContainer.GetValue=function(key){
		return Q_payloadContainer._dict[key.toString()];
	}

	Q_payloadContainer._list=[];
	__static(Q_payloadContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_payloadContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限时目标
*/
//class datasets.container.Q_fuliContainer
var Q_fuliContainer=(function(){
	function Q_fuliContainer(){}
	__class(Q_fuliContainer,'datasets.container.Q_fuliContainer');
	__getset(1,Q_fuliContainer,'dict',function(){
		return Q_fuliContainer._dict;
	});

	__getset(1,Q_fuliContainer,'list',function(){
		return Q_fuliContainer._list;
	});

	Q_fuliContainer.SetData=function(bytes){
		Q_fuliContainer._list.length=0;
		Q_fuliContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fuli();
			bean.read(bytes);
			Q_fuliContainer._list.push(bean);
			Q_fuliContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fuliContainer.GetValue=function(key){
		return Q_fuliContainer._dict[key.toString()];
	}

	Q_fuliContainer._list=[];
	__static(Q_fuliContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fuliContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*指引组包
*/
//class datasets.container.Q_guide_groupContainer
var Q_guide_groupContainer=(function(){
	function Q_guide_groupContainer(){}
	__class(Q_guide_groupContainer,'datasets.container.Q_guide_groupContainer');
	__getset(1,Q_guide_groupContainer,'dict',function(){
		return Q_guide_groupContainer._dict;
	});

	__getset(1,Q_guide_groupContainer,'list',function(){
		return Q_guide_groupContainer._list;
	});

	Q_guide_groupContainer.SetData=function(bytes){
		Q_guide_groupContainer._list.length=0;
		Q_guide_groupContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guide_group();
			bean.read(bytes);
			Q_guide_groupContainer._list.push(bean);
			Q_guide_groupContainer._dict[String(bean.q_guide_id)]=bean;
		}
	}

	Q_guide_groupContainer.GetValue=function(key){
		return Q_guide_groupContainer._dict[key.toString()];
	}

	Q_guide_groupContainer._list=[];
	__static(Q_guide_groupContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guide_groupContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*祥瑞事件配置表
*/
//class datasets.container.Q_xiangruiContainer
var Q_xiangruiContainer=(function(){
	function Q_xiangruiContainer(){}
	__class(Q_xiangruiContainer,'datasets.container.Q_xiangruiContainer');
	__getset(1,Q_xiangruiContainer,'dict',function(){
		return Q_xiangruiContainer._dict;
	});

	__getset(1,Q_xiangruiContainer,'list',function(){
		return Q_xiangruiContainer._list;
	});

	Q_xiangruiContainer.SetData=function(bytes){
		Q_xiangruiContainer._list.length=0;
		Q_xiangruiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_xiangrui();
			bean.read(bytes);
			Q_xiangruiContainer._list.push(bean);
			Q_xiangruiContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_xiangruiContainer.GetValue=function(key){
		return Q_xiangruiContainer._dict[key.toString()];
	}

	Q_xiangruiContainer._list=[];
	__static(Q_xiangruiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_xiangruiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*结婚房屋表
*/
//class datasets.container.Q_weedingContainer
var Q_weedingContainer=(function(){
	function Q_weedingContainer(){}
	__class(Q_weedingContainer,'datasets.container.Q_weedingContainer');
	__getset(1,Q_weedingContainer,'dict',function(){
		return Q_weedingContainer._dict;
	});

	__getset(1,Q_weedingContainer,'list',function(){
		return Q_weedingContainer._list;
	});

	Q_weedingContainer.SetData=function(bytes){
		Q_weedingContainer._list.length=0;
		Q_weedingContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_weeding();
			bean.read(bytes);
			Q_weedingContainer._list.push(bean);
			Q_weedingContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_weedingContainer.GetValue=function(key){
		return Q_weedingContainer._dict[key.toString()];
	}

	Q_weedingContainer._list=[];
	__static(Q_weedingContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_weedingContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*郿坞秘宝数据库
*/
//class datasets.container.Q_meiwu_treasureContainer
var Q_meiwu_treasureContainer=(function(){
	function Q_meiwu_treasureContainer(){}
	__class(Q_meiwu_treasureContainer,'datasets.container.Q_meiwu_treasureContainer');
	__getset(1,Q_meiwu_treasureContainer,'dict',function(){
		return Q_meiwu_treasureContainer._dict;
	});

	__getset(1,Q_meiwu_treasureContainer,'list',function(){
		return Q_meiwu_treasureContainer._list;
	});

	Q_meiwu_treasureContainer.SetData=function(bytes){
		Q_meiwu_treasureContainer._list.length=0;
		Q_meiwu_treasureContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_meiwu_treasure();
			bean.read(bytes);
			Q_meiwu_treasureContainer._list.push(bean);
			Q_meiwu_treasureContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_meiwu_treasureContainer.GetValue=function(key){
		return Q_meiwu_treasureContainer._dict[key.toString()];
	}

	Q_meiwu_treasureContainer._list=[];
	__static(Q_meiwu_treasureContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_meiwu_treasureContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天积分达标奖励
*/
//class datasets.container.Q_jiuchongtian_score_prizeContainer
var Q_jiuchongtian_score_prizeContainer=(function(){
	function Q_jiuchongtian_score_prizeContainer(){}
	__class(Q_jiuchongtian_score_prizeContainer,'datasets.container.Q_jiuchongtian_score_prizeContainer');
	__getset(1,Q_jiuchongtian_score_prizeContainer,'dict',function(){
		return Q_jiuchongtian_score_prizeContainer._dict;
	});

	__getset(1,Q_jiuchongtian_score_prizeContainer,'list',function(){
		return Q_jiuchongtian_score_prizeContainer._list;
	});

	Q_jiuchongtian_score_prizeContainer.SetData=function(bytes){
		Q_jiuchongtian_score_prizeContainer._list.length=0;
		Q_jiuchongtian_score_prizeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_jiuchongtian_score_prize();
			bean.read(bytes);
			Q_jiuchongtian_score_prizeContainer._list.push(bean);
			Q_jiuchongtian_score_prizeContainer._dict[String(bean.q_score)]=bean;
		}
	}

	Q_jiuchongtian_score_prizeContainer.GetValue=function(key){
		return Q_jiuchongtian_score_prizeContainer._dict[key.toString()];
	}

	Q_jiuchongtian_score_prizeContainer._list=[];
	__static(Q_jiuchongtian_score_prizeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_jiuchongtian_score_prizeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*锻造参数
*/
//class datasets.container.Q_duanzao_paramContainer
var Q_duanzao_paramContainer=(function(){
	function Q_duanzao_paramContainer(){}
	__class(Q_duanzao_paramContainer,'datasets.container.Q_duanzao_paramContainer');
	__getset(1,Q_duanzao_paramContainer,'dict',function(){
		return Q_duanzao_paramContainer._dict;
	});

	__getset(1,Q_duanzao_paramContainer,'list',function(){
		return Q_duanzao_paramContainer._list;
	});

	Q_duanzao_paramContainer.SetData=function(bytes){
		Q_duanzao_paramContainer._list.length=0;
		Q_duanzao_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_duanzao_param();
			bean.read(bytes);
			Q_duanzao_paramContainer._list.push(bean);
			Q_duanzao_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_duanzao_paramContainer.GetValue=function(key){
		return Q_duanzao_paramContainer._dict[key.toString()];
	}

	Q_duanzao_paramContainer._list=[];
	__static(Q_duanzao_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_duanzao_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*火烧赤壁任务参数
*/
//class datasets.container.Q_chibi_pramContainer
var Q_chibi_pramContainer=(function(){
	function Q_chibi_pramContainer(){}
	__class(Q_chibi_pramContainer,'datasets.container.Q_chibi_pramContainer');
	__getset(1,Q_chibi_pramContainer,'dict',function(){
		return Q_chibi_pramContainer._dict;
	});

	__getset(1,Q_chibi_pramContainer,'list',function(){
		return Q_chibi_pramContainer._list;
	});

	Q_chibi_pramContainer.SetData=function(bytes){
		Q_chibi_pramContainer._list.length=0;
		Q_chibi_pramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_chibi_pram();
			bean.read(bytes);
			Q_chibi_pramContainer._list.push(bean);
			Q_chibi_pramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_chibi_pramContainer.GetValue=function(key){
		return Q_chibi_pramContainer._dict[key.toString()];
	}

	Q_chibi_pramContainer._list=[];
	__static(Q_chibi_pramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_chibi_pramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*录像馆配置表
*/
//class datasets.container.Q_videoContainer
var Q_videoContainer=(function(){
	function Q_videoContainer(){}
	__class(Q_videoContainer,'datasets.container.Q_videoContainer');
	__getset(1,Q_videoContainer,'dict',function(){
		return Q_videoContainer._dict;
	});

	__getset(1,Q_videoContainer,'list',function(){
		return Q_videoContainer._list;
	});

	Q_videoContainer.SetData=function(bytes){
		Q_videoContainer._list.length=0;
		Q_videoContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_video();
			bean.read(bytes);
			Q_videoContainer._list.push(bean);
			Q_videoContainer._dict[String(bean.q_type)]=bean;
		}
	}

	Q_videoContainer.GetValue=function(key){
		return Q_videoContainer._dict[key.toString()];
	}

	Q_videoContainer._list=[];
	__static(Q_videoContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_videoContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.container.Q_hongyan_paramContainer
var Q_hongyan_paramContainer=(function(){
	function Q_hongyan_paramContainer(){}
	__class(Q_hongyan_paramContainer,'datasets.container.Q_hongyan_paramContainer');
	__getset(1,Q_hongyan_paramContainer,'dict',function(){
		return Q_hongyan_paramContainer._dict;
	});

	__getset(1,Q_hongyan_paramContainer,'list',function(){
		return Q_hongyan_paramContainer._list;
	});

	Q_hongyan_paramContainer.SetData=function(bytes){
		Q_hongyan_paramContainer._list.length=0;
		Q_hongyan_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_hongyan_param();
			bean.read(bytes);
			Q_hongyan_paramContainer._list.push(bean);
			Q_hongyan_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_hongyan_paramContainer.GetValue=function(key){
		return Q_hongyan_paramContainer._dict[key.toString()];
	}

	Q_hongyan_paramContainer._list=[];
	__static(Q_hongyan_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_hongyan_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*群英会配置表
*/
//class datasets.container.Q_qunyingContainer
var Q_qunyingContainer=(function(){
	function Q_qunyingContainer(){}
	__class(Q_qunyingContainer,'datasets.container.Q_qunyingContainer');
	__getset(1,Q_qunyingContainer,'dict',function(){
		return Q_qunyingContainer._dict;
	});

	__getset(1,Q_qunyingContainer,'list',function(){
		return Q_qunyingContainer._list;
	});

	Q_qunyingContainer.SetData=function(bytes){
		Q_qunyingContainer._list.length=0;
		Q_qunyingContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_qunying();
			bean.read(bytes);
			Q_qunyingContainer._list.push(bean);
			Q_qunyingContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_qunyingContainer.GetValue=function(key){
		return Q_qunyingContainer._dict[key.toString()];
	}

	Q_qunyingContainer._list=[];
	__static(Q_qunyingContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_qunyingContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*点将转盘配置表
*/
//class datasets.container.Q_act_wujiang_turntableContainer
var Q_act_wujiang_turntableContainer=(function(){
	function Q_act_wujiang_turntableContainer(){}
	__class(Q_act_wujiang_turntableContainer,'datasets.container.Q_act_wujiang_turntableContainer');
	__getset(1,Q_act_wujiang_turntableContainer,'dict',function(){
		return Q_act_wujiang_turntableContainer._dict;
	});

	__getset(1,Q_act_wujiang_turntableContainer,'list',function(){
		return Q_act_wujiang_turntableContainer._list;
	});

	Q_act_wujiang_turntableContainer.SetData=function(bytes){
		Q_act_wujiang_turntableContainer._list.length=0;
		Q_act_wujiang_turntableContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_act_wujiang_turntable();
			bean.read(bytes);
			Q_act_wujiang_turntableContainer._list.push(bean);
			Q_act_wujiang_turntableContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_act_wujiang_turntableContainer.GetValue=function(key){
		return Q_act_wujiang_turntableContainer._dict[key.toString()];
	}

	Q_act_wujiang_turntableContainer._list=[];
	__static(Q_act_wujiang_turntableContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_act_wujiang_turntableContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会BOSS属性表
*/
//class datasets.container.Q_guild_bossContainer
var Q_guild_bossContainer=(function(){
	function Q_guild_bossContainer(){}
	__class(Q_guild_bossContainer,'datasets.container.Q_guild_bossContainer');
	__getset(1,Q_guild_bossContainer,'dict',function(){
		return Q_guild_bossContainer._dict;
	});

	__getset(1,Q_guild_bossContainer,'list',function(){
		return Q_guild_bossContainer._list;
	});

	Q_guild_bossContainer.SetData=function(bytes){
		Q_guild_bossContainer._list.length=0;
		Q_guild_bossContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild_boss();
			bean.read(bytes);
			Q_guild_bossContainer._list.push(bean);
			Q_guild_bossContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_guild_bossContainer.GetValue=function(key){
		return Q_guild_bossContainer._dict[key.toString()];
	}

	Q_guild_bossContainer._list=[];
	__static(Q_guild_bossContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guild_bossContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*空城计配置表
*/
//class datasets.container.Q_kongchengjiContainer
var Q_kongchengjiContainer=(function(){
	function Q_kongchengjiContainer(){}
	__class(Q_kongchengjiContainer,'datasets.container.Q_kongchengjiContainer');
	__getset(1,Q_kongchengjiContainer,'dict',function(){
		return Q_kongchengjiContainer._dict;
	});

	__getset(1,Q_kongchengjiContainer,'list',function(){
		return Q_kongchengjiContainer._list;
	});

	Q_kongchengjiContainer.SetData=function(bytes){
		Q_kongchengjiContainer._list.length=0;
		Q_kongchengjiContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_kongchengji();
			bean.read(bytes);
			Q_kongchengjiContainer._list.push(bean);
			Q_kongchengjiContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_kongchengjiContainer.GetValue=function(key){
		return Q_kongchengjiContainer._dict[key.toString()];
	}

	Q_kongchengjiContainer._list=[];
	__static(Q_kongchengjiContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_kongchengjiContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物
*/
//class datasets.container.Q_petContainer
var Q_petContainer=(function(){
	function Q_petContainer(){}
	__class(Q_petContainer,'datasets.container.Q_petContainer');
	__getset(1,Q_petContainer,'dict',function(){
		return Q_petContainer._dict;
	});

	__getset(1,Q_petContainer,'list',function(){
		return Q_petContainer._list;
	});

	Q_petContainer.SetData=function(bytes){
		Q_petContainer._list.length=0;
		Q_petContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_pet();
			bean.read(bytes);
			Q_petContainer._list.push(bean);
			Q_petContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_petContainer.GetValue=function(key){
		return Q_petContainer._dict[key.toString()];
	}

	Q_petContainer._list=[];
	__static(Q_petContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_petContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会数据库
*/
//class datasets.container.Q_guildContainer
var Q_guildContainer=(function(){
	function Q_guildContainer(){}
	__class(Q_guildContainer,'datasets.container.Q_guildContainer');
	__getset(1,Q_guildContainer,'dict',function(){
		return Q_guildContainer._dict;
	});

	__getset(1,Q_guildContainer,'list',function(){
		return Q_guildContainer._list;
	});

	Q_guildContainer.SetData=function(bytes){
		Q_guildContainer._list.length=0;
		Q_guildContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_guild();
			bean.read(bytes);
			Q_guildContainer._list.push(bean);
			Q_guildContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_guildContainer.GetValue=function(key){
		return Q_guildContainer._dict[key.toString()];
	}

	Q_guildContainer._list=[];
	__static(Q_guildContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_guildContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师等级表
*/
//class datasets.container.Q_military_levelContainer
var Q_military_levelContainer=(function(){
	function Q_military_levelContainer(){}
	__class(Q_military_levelContainer,'datasets.container.Q_military_levelContainer');
	__getset(1,Q_military_levelContainer,'dict',function(){
		return Q_military_levelContainer._dict;
	});

	__getset(1,Q_military_levelContainer,'list',function(){
		return Q_military_levelContainer._list;
	});

	Q_military_levelContainer.SetData=function(bytes){
		Q_military_levelContainer._list.length=0;
		Q_military_levelContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_military_level();
			bean.read(bytes);
			Q_military_levelContainer._list.push(bean);
			Q_military_levelContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_military_levelContainer.GetValue=function(key){
		return Q_military_levelContainer._dict[key.toString()];
	}

	Q_military_levelContainer._list=[];
	__static(Q_military_levelContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_military_levelContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*附灵
*/
//class datasets.container.Q_addspiritContainer
var Q_addspiritContainer=(function(){
	function Q_addspiritContainer(){}
	__class(Q_addspiritContainer,'datasets.container.Q_addspiritContainer');
	__getset(1,Q_addspiritContainer,'dict',function(){
		return Q_addspiritContainer._dict;
	});

	__getset(1,Q_addspiritContainer,'list',function(){
		return Q_addspiritContainer._list;
	});

	Q_addspiritContainer.SetData=function(bytes){
		Q_addspiritContainer._list.length=0;
		Q_addspiritContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_addspirit();
			bean.read(bytes);
			Q_addspiritContainer._list.push(bean);
			Q_addspiritContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_addspiritContainer.GetValue=function(key){
		return Q_addspiritContainer._dict[key.toString()];
	}

	Q_addspiritContainer._list=[];
	__static(Q_addspiritContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_addspiritContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战斗参数表
*/
//class datasets.container.Q_fight_paramContainer
var Q_fight_paramContainer=(function(){
	function Q_fight_paramContainer(){}
	__class(Q_fight_paramContainer,'datasets.container.Q_fight_paramContainer');
	__getset(1,Q_fight_paramContainer,'dict',function(){
		return Q_fight_paramContainer._dict;
	});

	__getset(1,Q_fight_paramContainer,'list',function(){
		return Q_fight_paramContainer._list;
	});

	Q_fight_paramContainer.SetData=function(bytes){
		Q_fight_paramContainer._list.length=0;
		Q_fight_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_fight_param();
			bean.read(bytes);
			Q_fight_paramContainer._list.push(bean);
			Q_fight_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_fight_paramContainer.GetValue=function(key){
		return Q_fight_paramContainer._dict[key.toString()];
	}

	Q_fight_paramContainer._list=[];
	__static(Q_fight_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_fight_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值返利转盘
*/
//class datasets.container.Q_recharge_turntableContainer
var Q_recharge_turntableContainer=(function(){
	function Q_recharge_turntableContainer(){}
	__class(Q_recharge_turntableContainer,'datasets.container.Q_recharge_turntableContainer');
	__getset(1,Q_recharge_turntableContainer,'dict',function(){
		return Q_recharge_turntableContainer._dict;
	});

	__getset(1,Q_recharge_turntableContainer,'list',function(){
		return Q_recharge_turntableContainer._list;
	});

	Q_recharge_turntableContainer.SetData=function(bytes){
		Q_recharge_turntableContainer._list.length=0;
		Q_recharge_turntableContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_recharge_turntable();
			bean.read(bytes);
			Q_recharge_turntableContainer._list.push(bean);
			Q_recharge_turntableContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_recharge_turntableContainer.GetValue=function(key){
		return Q_recharge_turntableContainer._dict[key.toString()];
	}

	Q_recharge_turntableContainer._list=[];
	__static(Q_recharge_turntableContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_recharge_turntableContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.container.Q_dungeon_paramContainer
var Q_dungeon_paramContainer=(function(){
	function Q_dungeon_paramContainer(){}
	__class(Q_dungeon_paramContainer,'datasets.container.Q_dungeon_paramContainer');
	__getset(1,Q_dungeon_paramContainer,'dict',function(){
		return Q_dungeon_paramContainer._dict;
	});

	__getset(1,Q_dungeon_paramContainer,'list',function(){
		return Q_dungeon_paramContainer._list;
	});

	Q_dungeon_paramContainer.SetData=function(bytes){
		Q_dungeon_paramContainer._list.length=0;
		Q_dungeon_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_dungeon_param();
			bean.read(bytes);
			Q_dungeon_paramContainer._list.push(bean);
			Q_dungeon_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_dungeon_paramContainer.GetValue=function(key){
		return Q_dungeon_paramContainer._dict[key.toString()];
	}

	Q_dungeon_paramContainer._list=[];
	__static(Q_dungeon_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_dungeon_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*团购表
*/
//class datasets.container.Q_tuangouContainer
var Q_tuangouContainer=(function(){
	function Q_tuangouContainer(){}
	__class(Q_tuangouContainer,'datasets.container.Q_tuangouContainer');
	__getset(1,Q_tuangouContainer,'dict',function(){
		return Q_tuangouContainer._dict;
	});

	__getset(1,Q_tuangouContainer,'list',function(){
		return Q_tuangouContainer._list;
	});

	Q_tuangouContainer.SetData=function(bytes){
		Q_tuangouContainer._list.length=0;
		Q_tuangouContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_tuangou();
			bean.read(bytes);
			Q_tuangouContainer._list.push(bean);
			Q_tuangouContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_tuangouContainer.GetValue=function(key){
		return Q_tuangouContainer._dict[key.toString()];
	}

	Q_tuangouContainer._list=[];
	__static(Q_tuangouContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_tuangouContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.container.Q_grow_checkpoint_paramContainer
var Q_grow_checkpoint_paramContainer=(function(){
	function Q_grow_checkpoint_paramContainer(){}
	__class(Q_grow_checkpoint_paramContainer,'datasets.container.Q_grow_checkpoint_paramContainer');
	__getset(1,Q_grow_checkpoint_paramContainer,'dict',function(){
		return Q_grow_checkpoint_paramContainer._dict;
	});

	__getset(1,Q_grow_checkpoint_paramContainer,'list',function(){
		return Q_grow_checkpoint_paramContainer._list;
	});

	Q_grow_checkpoint_paramContainer.SetData=function(bytes){
		Q_grow_checkpoint_paramContainer._list.length=0;
		Q_grow_checkpoint_paramContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_grow_checkpoint_param();
			bean.read(bytes);
			Q_grow_checkpoint_paramContainer._list.push(bean);
			Q_grow_checkpoint_paramContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_grow_checkpoint_paramContainer.GetValue=function(key){
		return Q_grow_checkpoint_paramContainer._dict[key.toString()];
	}

	Q_grow_checkpoint_paramContainer._list=[];
	__static(Q_grow_checkpoint_paramContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_grow_checkpoint_paramContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*寻宝
*/
//class datasets.container.Q_treasureContainer
var Q_treasureContainer=(function(){
	function Q_treasureContainer(){}
	__class(Q_treasureContainer,'datasets.container.Q_treasureContainer');
	__getset(1,Q_treasureContainer,'dict',function(){
		return Q_treasureContainer._dict;
	});

	__getset(1,Q_treasureContainer,'list',function(){
		return Q_treasureContainer._list;
	});

	Q_treasureContainer.SetData=function(bytes){
		Q_treasureContainer._list.length=0;
		Q_treasureContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_treasure();
			bean.read(bytes);
			Q_treasureContainer._list.push(bean);
			Q_treasureContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_treasureContainer.GetValue=function(key){
		return Q_treasureContainer._dict[key.toString()];
	}

	Q_treasureContainer._list=[];
	__static(Q_treasureContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_treasureContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合成
*/
//class datasets.container.Q_composeContainer
var Q_composeContainer=(function(){
	function Q_composeContainer(){}
	__class(Q_composeContainer,'datasets.container.Q_composeContainer');
	__getset(1,Q_composeContainer,'dict',function(){
		return Q_composeContainer._dict;
	});

	__getset(1,Q_composeContainer,'list',function(){
		return Q_composeContainer._list;
	});

	Q_composeContainer.SetData=function(bytes){
		Q_composeContainer._list.length=0;
		Q_composeContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_compose();
			bean.read(bytes);
			Q_composeContainer._list.push(bean);
			Q_composeContainer._dict[String(bean.q_id)]=bean;
		}
	}

	Q_composeContainer.GetValue=function(key){
		return Q_composeContainer._dict[key.toString()];
	}

	Q_composeContainer._list=[];
	__static(Q_composeContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_composeContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门刷怪表
*/
//class datasets.container.Q_shimenContainer
var Q_shimenContainer=(function(){
	function Q_shimenContainer(){}
	__class(Q_shimenContainer,'datasets.container.Q_shimenContainer');
	__getset(1,Q_shimenContainer,'dict',function(){
		return Q_shimenContainer._dict;
	});

	__getset(1,Q_shimenContainer,'list',function(){
		return Q_shimenContainer._list;
	});

	Q_shimenContainer.SetData=function(bytes){
		Q_shimenContainer._list.length=0;
		Q_shimenContainer._dict=new Object();
		var num=ByteBufferUtil.readInt(bytes);
		for (var i=0;i < num;i++){
			var bean=new Q_shimen();
			bean.read(bytes);
			Q_shimenContainer._list.push(bean);
			Q_shimenContainer._dict[String(bean.q_level)]=bean;
		}
	}

	Q_shimenContainer.GetValue=function(key){
		return Q_shimenContainer._dict[key.toString()];
	}

	Q_shimenContainer._list=[];
	__static(Q_shimenContainer,
	['_dict',function(){return this._dict=new Object();}
	]);
	return Q_shimenContainer;
})()


/**
*Created by FreeMarker. DO NOT EDIT!!!
*站位
*/
//class datasets.bean.Q_fight_position extends engine.base.data.Bean
var Q_fight_position=(function(_super){
	function Q_fight_position(){
		/**位置(11-15,21-25)*/
		this._q_position=0;
		/**可出战战斗对象类型(1宠物2军师3蛮将4玄女5红颜6怪物7英雄)*/
		this._q_object_type=0;
		/**该位置可设置对象数量 */
		this._q_size=0;
		/**激活条件 */
		this._q_condition=null;
		/**战力加成 */
		this._q_fight_power=null;
		/**推荐站位 */
		this._q_advise=0;
		Q_fight_position.__super.call(this);
	}

	__class(Q_fight_position,'datasets.bean.Q_fight_position',_super);
	var __proto=Q_fight_position.prototype;
	__proto.read=function(_buf){
		this._q_position=this.readInt(_buf);
		this._q_object_type=this.readInt(_buf);
		this._q_size=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_fight_power=this.readString(_buf);
		this._q_advise=this.readInt(_buf);
	}

	__getset(0,__proto,'q_position',function(){
		return this._q_position;
	});

	__getset(0,__proto,'q_object_type',function(){
		return this._q_object_type;
	});

	__getset(0,__proto,'q_size',function(){
		return this._q_size;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_fight_power',function(){
		return this._q_fight_power;
	});

	__getset(0,__proto,'q_advise',function(){
		return this._q_advise;
	});

	return Q_fight_position;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*猎命参数
*/
//class datasets.bean.Q_lieming_param extends engine.base.data.Bean
var Q_lieming_param=(function(_super){
	function Q_lieming_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_lieming_param.__super.call(this);
	}

	__class(Q_lieming_param,'datasets.bean.Q_lieming_param',_super);
	var __proto=Q_lieming_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_lieming_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物
*/
//class datasets.bean.Q_pet extends engine.base.data.Bean
var Q_pet=(function(_super){
	function Q_pet(){
		/**武将id */
		this._q_id=0;
		/**默认名称 */
		this._q_name=null;
		/**展示等级 */
		this._q_openday=0;
		/**最大等级 */
		this._q_level_max=0;
		/**展示资源编号 */
		this._q_model=0;
		/**品质(白绿蓝紫橙红金0123456)*/
		this._q_quality=0;
		/**主动技能ID */
		this._q_active_skill_id=null;
		/**被动技能 */
		this._q_passive_skill_num=null;
		/**基础属性加成 */
		this._q_base_attribute=null;
		/**等级属性 */
		this._q_level_attribute=null;
		/**等级属性公式，参数level */
		this._q_level_attribute_formula=null;
		/**资质道具 */
		this._q_zizhi_item=0;
		/**升星所需资质 [100,500,1000...] */
		this._q_zizhi_exp_max=null;
		/**每次提升资质 */
		this._q_zizhi_exp=0;
		/**资质上限 */
		this._q_zizhi_max=0;
		/**资质基础属性 */
		this._q_zizhi_attribute=null;
		/**资质属性公式，参数zizhi */
		this._q_zizhi_attribute_formula=null;
		/**阵营（0群 1魏 2蜀 3吴） */
		this._q_group=0;
		/**声音对白（调用音效id） */
		this._q_sound=0;
		/**职业定位（1武将2红颜3军师4蛮将） */
		this._q_job=0;
		/**武将属性继承万分比 quality 0未合体 1绿色合体 2蓝色合体 3紫色合体 4橙色合体 5红色合体 6彩色合体 */
		this._q_attribute_inherit=null;
		/**star 0初始 1 1星 2 2星 以此类推 */
		this._q_zizhi_show=null;
		/**star 0初始 1 1星 2 2星 以此类推 */
		this._q_zizhi_growth=null;
		/**职业定位（1武将2红颜3军师4蛮将） */
		this._q_zhiye=0;
		/**每周礼包中的介绍 */
		this._q_Introduction=null;
		Q_pet.__super.call(this);
	}

	__class(Q_pet,'datasets.bean.Q_pet',_super);
	var __proto=Q_pet.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_openday=this.readInt(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_active_skill_id=this.readString(_buf);
		this._q_passive_skill_num=this.readString(_buf);
		this._q_base_attribute=this.readString(_buf);
		this._q_level_attribute=this.readString(_buf);
		this._q_level_attribute_formula=this.readString(_buf);
		this._q_zizhi_item=this.readInt(_buf);
		this._q_zizhi_exp_max=this.readString(_buf);
		this._q_zizhi_exp=this.readInt(_buf);
		this._q_zizhi_max=this.readInt(_buf);
		this._q_zizhi_attribute=this.readString(_buf);
		this._q_zizhi_attribute_formula=this.readString(_buf);
		this._q_group=this.readInt(_buf);
		this._q_sound=this.readInt(_buf);
		this._q_job=this.readInt(_buf);
		this._q_attribute_inherit=this.readString(_buf);
		this._q_zizhi_show=this.readString(_buf);
		this._q_zizhi_growth=this.readString(_buf);
		this._q_zhiye=this.readInt(_buf);
		this._q_Introduction=this.readString(_buf);
	}

	__getset(0,__proto,'q_zizhi_max',function(){
		return this._q_zizhi_max;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_Introduction',function(){
		return this._q_Introduction;
	});

	__getset(0,__proto,'q_openday',function(){
		return this._q_openday;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_passive_skill_num',function(){
		return this._q_passive_skill_num;
	});

	__getset(0,__proto,'q_active_skill_id',function(){
		return this._q_active_skill_id;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula',function(){
		return this._q_zizhi_attribute_formula;
	});

	__getset(0,__proto,'q_level_attribute_formula',function(){
		return this._q_level_attribute_formula;
	});

	__getset(0,__proto,'q_base_attribute',function(){
		return this._q_base_attribute;
	});

	__getset(0,__proto,'q_zizhi_attribute',function(){
		return this._q_zizhi_attribute;
	});

	__getset(0,__proto,'q_level_attribute',function(){
		return this._q_level_attribute;
	});

	__getset(0,__proto,'q_zizhi_item',function(){
		return this._q_zizhi_item;
	});

	__getset(0,__proto,'q_zizhi_exp_max',function(){
		return this._q_zizhi_exp_max;
	});

	__getset(0,__proto,'q_zizhi_exp',function(){
		return this._q_zizhi_exp;
	});

	__getset(0,__proto,'q_job',function(){
		return this._q_job;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	__getset(0,__proto,'q_sound',function(){
		return this._q_sound;
	});

	__getset(0,__proto,'q_attribute_inherit',function(){
		return this._q_attribute_inherit;
	});

	__getset(0,__proto,'q_zizhi_show',function(){
		return this._q_zizhi_show;
	});

	__getset(0,__proto,'q_zizhi_growth',function(){
		return this._q_zizhi_growth;
	});

	__getset(0,__proto,'q_zhiye',function(){
		return this._q_zhiye;
	});

	return Q_pet;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*转生参数
*/
//class datasets.bean.Q_zhuansheng_param extends engine.base.data.Bean
var Q_zhuansheng_param=(function(_super){
	function Q_zhuansheng_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_zhuansheng_param.__super.call(this);
	}

	__class(Q_zhuansheng_param,'datasets.bean.Q_zhuansheng_param',_super);
	var __proto=Q_zhuansheng_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_zhuansheng_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*资源获取途径表
*/
//class datasets.bean.Q_access_resource extends engine.base.data.Bean
var Q_access_resource=(function(_super){
	function Q_access_resource(){
		/**编号 */
		this._q_id=0;
		/***/
		this._q_title=null;
		/**点击触发的客户端事件 */
		this._q_client_event=null;
		Q_access_resource.__super.call(this);
	}

	__class(Q_access_resource,'datasets.bean.Q_access_resource',_super);
	var __proto=Q_access_resource.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_title=this.readString(_buf);
		this._q_client_event=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_client_event',function(){
		return this._q_client_event;
	});

	__getset(0,__proto,'q_title',function(){
		return this._q_title;
	});

	return Q_access_resource;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*巡城参数
*/
//class datasets.bean.Q_city_param extends engine.base.data.Bean
var Q_city_param=(function(_super){
	function Q_city_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_city_param.__super.call(this);
	}

	__class(Q_city_param,'datasets.bean.Q_city_param',_super);
	var __proto=Q_city_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_city_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*等级参数
*/
//class datasets.bean.Q_level_param extends engine.base.data.Bean
var Q_level_param=(function(_super){
	function Q_level_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_level_param.__super.call(this);
	}

	__class(Q_level_param,'datasets.bean.Q_level_param',_super);
	var __proto=Q_level_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_level_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爵位参数
*/
//class datasets.bean.Q_nobility_param extends engine.base.data.Bean
var Q_nobility_param=(function(_super){
	function Q_nobility_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_nobility_param.__super.call(this);
	}

	__class(Q_nobility_param,'datasets.bean.Q_nobility_param',_super);
	var __proto=Q_nobility_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_nobility_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女参数
*/
//class datasets.bean.Q_xuannv_param extends engine.base.data.Bean
var Q_xuannv_param=(function(_super){
	function Q_xuannv_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_xuannv_param.__super.call(this);
	}

	__class(Q_xuannv_param,'datasets.bean.Q_xuannv_param',_super);
	var __proto=Q_xuannv_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_xuannv_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限定武将活动参数
*/
//class datasets.bean.Q_limit_wu_jiang_param extends engine.base.data.Bean
var Q_limit_wu_jiang_param=(function(_super){
	function Q_limit_wu_jiang_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_limit_wu_jiang_param.__super.call(this);
	}

	__class(Q_limit_wu_jiang_param,'datasets.bean.Q_limit_wu_jiang_param',_super);
	var __proto=Q_limit_wu_jiang_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_limit_wu_jiang_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*秘籍格子开启
*/
//class datasets.bean.Q_miji_grid extends engine.base.data.Bean
var Q_miji_grid=(function(_super){
	function Q_miji_grid(){
		/**格子数量 */
		this._q_grid=0;
		/**开启的转生等级 */
		this._q_zhuansheng=0;
		/**开启的等级 */
		this._q_level=0;
		Q_miji_grid.__super.call(this);
	}

	__class(Q_miji_grid,'datasets.bean.Q_miji_grid',_super);
	var __proto=Q_miji_grid.prototype;
	__proto.read=function(_buf){
		this._q_grid=this.readInt(_buf);
		this._q_zhuansheng=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
	}

	__getset(0,__proto,'q_grid',function(){
		return this._q_grid;
	});

	__getset(0,__proto,'q_zhuansheng',function(){
		return this._q_zhuansheng;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	return Q_miji_grid;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体装备
*/
//class datasets.bean.Q_fit_equipment extends engine.base.data.Bean
var Q_fit_equipment=(function(_super){
	function Q_fit_equipment(){
		/**q_id */
		this._q_id=0;
		/**部位id */
		this._q_grid=0;
		/**对应类型(对应合体类型） */
		this._q_type=0;
		/**开启所需条件（通用参数） */
		this._q_condistion=null;
		/**等级上限 */
		this._q_level_max=0;
		/**基础属性 */
		this._q_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**消耗公式 */
		this._q_cost=null;
		Q_fit_equipment.__super.call(this);
	}

	__class(Q_fit_equipment,'datasets.bean.Q_fit_equipment',_super);
	var __proto=Q_fit_equipment.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_grid=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_condistion=this.readString(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_grid',function(){
		return this._q_grid;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_condistion',function(){
		return this._q_condistion;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	return Q_fit_equipment;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_upgrade_type
*/
//class datasets.bean.Q_upgrade_type extends engine.base.data.Bean
var Q_upgrade_type=(function(_super){
	function Q_upgrade_type(){
		/***/
		this._q_config_id=0;
		/**进阶类型(1通灵 2兽魂 3坐骑 4翅膀 5神兵 6精灵 7玄女 8花辇 9灵气)*/
		this._q_type=0;
		/**进阶名称 */
		this._q_name=null;
		/**进阶技能 [激活阶数,激活技能] */
		this._q_skill=null;
		/**装备部位类型图标资源 */
		this._q_equiptype_icon=null;
		/**对应功能id */
		this._q_func=0;
		/**是否多角色(0-否 1-是)*/
		this._q_mulrole=0;
		/**属性丹道具 */
		this._q_id=0;
		/**暴击开放配置cron */
		this._q_cron=null;
		/**暴击开放配置相对时间 */
		this._q_offset_time=null;
		Q_upgrade_type.__super.call(this);
	}

	__class(Q_upgrade_type,'datasets.bean.Q_upgrade_type',_super);
	var __proto=Q_upgrade_type.prototype;
	__proto.read=function(_buf){
		this._q_config_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_skill=this.readString(_buf);
		this._q_equiptype_icon=this.readString(_buf);
		this._q_func=this.readInt(_buf);
		this._q_mulrole=this.readInt(_buf);
		this._q_id=this.readInt(_buf);
		this._q_cron=this.readString(_buf);
		this._q_offset_time=this.readString(_buf);
	}

	__getset(0,__proto,'q_mulrole',function(){
		return this._q_mulrole;
	});

	__getset(0,__proto,'q_equiptype_icon',function(){
		return this._q_equiptype_icon;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_config_id',function(){
		return this._q_config_id;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_func',function(){
		return this._q_func;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_cron',function(){
		return this._q_cron;
	});

	__getset(0,__proto,'q_offset_time',function(){
		return this._q_offset_time;
	});

	return Q_upgrade_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*科举数据库
*/
//class datasets.bean.Q_question_bank extends engine.base.data.Bean
var Q_question_bank=(function(_super){
	function Q_question_bank(){
		/**题目序号 */
		this._q_id=0;
		/**题目内容 */
		this._q_question=null;
		/**题目选项 */
		this._q_hoose=null;
		/**正确选项 */
		this._q_answer=0;
		Q_question_bank.__super.call(this);
	}

	__class(Q_question_bank,'datasets.bean.Q_question_bank',_super);
	var __proto=Q_question_bank.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_question=this.readString(_buf);
		this._q_hoose=this.readString(_buf);
		this._q_answer=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_hoose',function(){
		return this._q_hoose;
	});

	__getset(0,__proto,'q_question',function(){
		return this._q_question;
	});

	__getset(0,__proto,'q_answer',function(){
		return this._q_answer;
	});

	return Q_question_bank;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*寻宝
*/
//class datasets.bean.Q_treasure extends engine.base.data.Bean
var Q_treasure=(function(_super){
	function Q_treasure(){
		/**序号 */
		this._q_id=0;
		/**寻宝名称 */
		this._q_name=null;
		/**类型（1寻宝 2红颜寻宝 3扭蛋寻宝 4五虎上将） */
		this._q_type=0;
		/**关联的功能id */
		this._q_funcition=0;
		/**花费（选项1，选项2，选项3） */
		this._q_price=null;
		/**寻宝代币(选项,代币,数量） */
		this._q_daibi=null;
		/**寻宝次数 */
		this._q_number=null;
		/**寻宝等级min（1等级 2转生） */
		this._q_condition_min=null;
		/**寻宝等级max（1等级 2转生） */
		this._q_condition_max=null;
		/**最大幸运值(无则不填)*/
		this._q_max_luck=null;
		/**免费抽奖选项(1,2,3),没有则-1 */
		this._q_free=0;
		/**是否有限制次数[[选项，限制次数]，[选项，限制次数]] */
		this._q_limit=null;
		/**十连抽奖励（无则不填） */
		this._q_ten=null;
		/**幸运值满奖励 */
		this._q_luck_reward=null;
		/**必得的物品，如积分啥的 */
		this._q_mustGive=null;
		/**单人次数奖励 [[次数,掉落ID],[次数,掉落ID]……] */
		this._q_single=null;
		/**购买寻宝时赠送的银两 */
		this._q_present=null;
		/**个人次数奖励 [[[次数,掉落ID],[次数,掉落ID]……]],[[...]]] */
		this._q_service2=null;
		/***/
		this._q_cheat_formula=null;
		Q_treasure.__super.call(this);
	}

	__class(Q_treasure,'datasets.bean.Q_treasure',_super);
	var __proto=Q_treasure.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_funcition=this.readInt(_buf);
		this._q_price=this.readString(_buf);
		this._q_daibi=this.readString(_buf);
		this._q_number=this.readString(_buf);
		this._q_condition_min=this.readString(_buf);
		this._q_condition_max=this.readString(_buf);
		this._q_max_luck=this.readString(_buf);
		this._q_free=this.readInt(_buf);
		this._q_limit=this.readString(_buf);
		this._q_ten=this.readString(_buf);
		this._q_luck_reward=this.readString(_buf);
		this._q_mustGive=this.readString(_buf);
		this._q_single=this.readString(_buf);
		this._q_present=this.readString(_buf);
		this._q_service2=this.readString(_buf);
		this._q_cheat_formula=this.readString(_buf);
	}

	__getset(0,__proto,'q_number',function(){
		return this._q_number;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_condition_min',function(){
		return this._q_condition_min;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_daibi',function(){
		return this._q_daibi;
	});

	__getset(0,__proto,'q_funcition',function(){
		return this._q_funcition;
	});

	__getset(0,__proto,'q_price',function(){
		return this._q_price;
	});

	__getset(0,__proto,'q_max_luck',function(){
		return this._q_max_luck;
	});

	__getset(0,__proto,'q_condition_max',function(){
		return this._q_condition_max;
	});

	__getset(0,__proto,'q_free',function(){
		return this._q_free;
	});

	__getset(0,__proto,'q_present',function(){
		return this._q_present;
	});

	__getset(0,__proto,'q_ten',function(){
		return this._q_ten;
	});

	__getset(0,__proto,'q_limit',function(){
		return this._q_limit;
	});

	__getset(0,__proto,'q_luck_reward',function(){
		return this._q_luck_reward;
	});

	__getset(0,__proto,'q_mustGive',function(){
		return this._q_mustGive;
	});

	__getset(0,__proto,'q_single',function(){
		return this._q_single;
	});

	__getset(0,__proto,'q_service2',function(){
		return this._q_service2;
	});

	__getset(0,__proto,'q_cheat_formula',function(){
		return this._q_cheat_formula;
	});

	return Q_treasure;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女法器
*/
//class datasets.bean.Q_xuannv_faqi extends engine.base.data.Bean
var Q_xuannv_faqi=(function(_super){
	function Q_xuannv_faqi(){
		/**法器ID */
		this._q_id=0;
		/**法器名字 */
		this._q_name=null;
		/**开启条件（上一个洗练n次开启） */
		this._q_open=0;
		/**洗练类型(q_xilian.q_type)*/
		this._q_xilian_type=0;
		/**高级洗练类型(q_xilian.q_type)*/
		this._q_gaoji_xilian_type=0;
		/**初始技能ID */
		this._q_skill=null;
		Q_xuannv_faqi.__super.call(this);
	}

	__class(Q_xuannv_faqi,'datasets.bean.Q_xuannv_faqi',_super);
	var __proto=Q_xuannv_faqi.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_open=this.readInt(_buf);
		this._q_xilian_type=this.readInt(_buf);
		this._q_gaoji_xilian_type=this.readInt(_buf);
		this._q_skill=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_open',function(){
		return this._q_open;
	});

	__getset(0,__proto,'q_xilian_type',function(){
		return this._q_xilian_type;
	});

	__getset(0,__proto,'q_gaoji_xilian_type',function(){
		return this._q_gaoji_xilian_type;
	});

	return Q_xuannv_faqi;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*成就数据库
*/
//class datasets.bean.Q_achievement extends engine.base.data.Bean
var Q_achievement=(function(_super){
	function Q_achievement(){
		/**成就ID */
		this._q_id=0;
		/**成就名称 */
		this._q_name=null;
		/**任务类型 */
		this._q_attribute=0;
		/**参数字段 */
		this._q_target_str=null;
		/**成就奖励 */
		this._q_reward=null;
		Q_achievement.__super.call(this);
	}

	__class(Q_achievement,'datasets.bean.Q_achievement',_super);
	var __proto=Q_achievement.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_attribute=this.readInt(_buf);
		this._q_target_str=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_target_str',function(){
		return this._q_target_str;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_achievement;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物展示列表
*/
//class datasets.bean.Q_monster_show extends engine.base.data.Bean
var Q_monster_show=(function(_super){
	function Q_monster_show(){
		/**展示ID */
		this._q_id=0;
		/**怪物名字 */
		this._q_name=null;
		/**怪物造型资源编号 */
		this._q_resid=0;
		/**怪物对话 */
		this._q_talk=0;
		/**技能 */
		this._q_skill=null;
		/**阵营 */
		this._q_country=0;
		/**职业定位（1坦克 2单攻 3群攻 4辅助 5治疗） */
		this._q_job=0;
		/**品质 */
		this._q_quality=0;
		Q_monster_show.__super.call(this);
	}

	__class(Q_monster_show,'datasets.bean.Q_monster_show',_super);
	var __proto=Q_monster_show.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_resid=this.readInt(_buf);
		this._q_talk=this.readInt(_buf);
		this._q_skill=this.readString(_buf);
		this._q_country=this.readInt(_buf);
		this._q_job=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_job',function(){
		return this._q_job;
	});

	__getset(0,__proto,'q_resid',function(){
		return this._q_resid;
	});

	__getset(0,__proto,'q_talk',function(){
		return this._q_talk;
	});

	__getset(0,__proto,'q_country',function(){
		return this._q_country;
	});

	return Q_monster_show;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物参数
*/
//class datasets.bean.Q_handbook_parm extends engine.base.data.Bean
var Q_handbook_parm=(function(_super){
	function Q_handbook_parm(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_handbook_parm.__super.call(this);
	}

	__class(Q_handbook_parm,'datasets.bean.Q_handbook_parm',_super);
	var __proto=Q_handbook_parm.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_handbook_parm;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*章节表
*/
//class datasets.bean.Q_chapter extends engine.base.data.Bean
var Q_chapter=(function(_super){
	function Q_chapter(){
		/**结束关卡 */
		this._q_end=0;
		/**下一章id */
		this._q_next_id=0;
		/**章节id */
		this._q_chapter_id=0;
		/**章节名称 */
		this._q_name=null;
		/**场景ID */
		this._q_sceneid=0;
		/**章节奖励[[id,num],[id,num]...] */
		this._q_reward=null;
		/**挑战所需波数 */
		this._q_fight_number=0;
		/**机器人数量 */
		this._q_robot=0;
		Q_chapter.__super.call(this);
	}

	__class(Q_chapter,'datasets.bean.Q_chapter',_super);
	var __proto=Q_chapter.prototype;
	__proto.read=function(_buf){
		this._q_end=this.readInt(_buf);
		this._q_next_id=this.readInt(_buf);
		this._q_chapter_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_sceneid=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_fight_number=this.readInt(_buf);
		this._q_robot=this.readInt(_buf);
	}

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_chapter_id',function(){
		return this._q_chapter_id;
	});

	__getset(0,__proto,'q_end',function(){
		return this._q_end;
	});

	__getset(0,__proto,'q_next_id',function(){
		return this._q_next_id;
	});

	__getset(0,__proto,'q_sceneid',function(){
		return this._q_sceneid;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_robot',function(){
		return this._q_robot;
	});

	__getset(0,__proto,'q_fight_number',function(){
		return this._q_fight_number;
	});

	return Q_chapter;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店参数
*/
//class datasets.bean.Q_shop_param extends engine.base.data.Bean
var Q_shop_param=(function(_super){
	function Q_shop_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_shop_param.__super.call(this);
	}

	__class(Q_shop_param,'datasets.bean.Q_shop_param',_super);
	var __proto=Q_shop_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_shop_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本参数
*/
//class datasets.bean.Q_pata_param extends engine.base.data.Bean
var Q_pata_param=(function(_super){
	function Q_pata_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_pata_param.__super.call(this);
	}

	__class(Q_pata_param,'datasets.bean.Q_pata_param',_super);
	var __proto=Q_pata_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_pata_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体技能
*/
//class datasets.bean.Q_fit_skill extends engine.base.data.Bean
var Q_fit_skill=(function(_super){
	function Q_fit_skill(){
		/**技能id */
		this._q_id=0;
		/**所需合体（-1是主角） */
		this._q_group=null;
		/**关联技能表 */
		this._q_attribute=0;
		Q_fit_skill.__super.call(this);
	}

	__class(Q_fit_skill,'datasets.bean.Q_fit_skill',_super);
	var __proto=Q_fit_skill.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_group=this.readString(_buf);
		this._q_attribute=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_fit_skill;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会数据库
*/
//class datasets.bean.Q_guild extends engine.base.data.Bean
var Q_guild=(function(_super){
	function Q_guild(){
		/**帮会等级 */
		this._q_level=0;
		/**升级所需资金 */
		this._q_exp=0;
		/**最大玩家数量 */
		this._q_max_player=0;
		/**可升级帮会技能id */
		this._q_skill=null;
		/**关联配置技能等级限制 */
		this._q_skill_limit=0;
		/**关联军团副本id */
		this._q_corps_fuben=0;
		/**关联军团领地id */
		this._q_territory=0;
		/**创建所需 */
		this._q_create_cost=null;
		Q_guild.__super.call(this);
	}

	__class(Q_guild,'datasets.bean.Q_guild',_super);
	var __proto=Q_guild.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_max_player=this.readInt(_buf);
		this._q_skill=this.readString(_buf);
		this._q_skill_limit=this.readInt(_buf);
		this._q_corps_fuben=this.readInt(_buf);
		this._q_territory=this.readInt(_buf);
		this._q_create_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_corps_fuben',function(){
		return this._q_corps_fuben;
	});

	__getset(0,__proto,'q_max_player',function(){
		return this._q_max_player;
	});

	__getset(0,__proto,'q_skill_limit',function(){
		return this._q_skill_limit;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_territory',function(){
		return this._q_territory;
	});

	__getset(0,__proto,'q_create_cost',function(){
		return this._q_create_cost;
	});

	return Q_guild;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体武器
*/
//class datasets.bean.Q_fit_weapon extends engine.base.data.Bean
var Q_fit_weapon=(function(_super){
	function Q_fit_weapon(){
		/**q_id */
		this._q_id=0;
		/**品质类型 */
		this._q_type=0;
		/**品质星级 */
		this._q_level=0;
		/**属性 */
		this._q_attribute=null;
		/**对应等级消耗 */
		this._q_cost=null;
		/**关联特技id */
		this._q_skill=null;
		Q_fit_weapon.__super.call(this);
	}

	__class(Q_fit_weapon,'datasets.bean.Q_fit_weapon',_super);
	var __proto=Q_fit_weapon.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_skill=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	return Q_fit_weapon;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将觉悟数据库
*/
//class datasets.bean.Q_officer_juewu extends engine.base.data.Bean
var Q_officer_juewu=(function(_super){
	function Q_officer_juewu(){
		/**觉悟等级 */
		this._q_level=0;
		/**觉悟阶数 */
		this._q_jieshu=0;
		/**觉悟名称 */
		this._q_juewuName=null;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		Q_officer_juewu.__super.call(this);
	}

	__class(Q_officer_juewu,'datasets.bean.Q_officer_juewu',_super);
	var __proto=Q_officer_juewu.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_jieshu=this.readInt(_buf);
		this._q_juewuName=this.readString(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_jieshu',function(){
		return this._q_jieshu;
	});

	__getset(0,__proto,'q_juewuName',function(){
		return this._q_juewuName;
	});

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	return Q_officer_juewu;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体
*/
//class datasets.bean.Q_fit extends engine.base.data.Bean
var Q_fit=(function(_super){
	function Q_fit(){
		/**合体类型 */
		this._q_type=0;
		/**合体名称 */
		this._q_name=null;
		/**对应q_fight_position.q_position */
		this._q_fight_position=0;
		/**初始品质（1绿2蓝3紫4橙5红） */
		this._q_quality=0;
		/**开启所需vip条件 */
		this._q_vip=0;
		/**开启所需天数条件 */
		this._q_day=null;
		/**预告所需vip条件 */
		this._q_notice_vip=0;
		/**上阵所需条件 */
		this._q_set=0;
		/**合体被动技能（红色品质激活） */
		this._q_skill=0;
		/**合体关联的锻造大师id及参数系数 */
		this._q_duanzao=null;
		/**合体展示造型 */
		this._q_model=0;
		Q_fit.__super.call(this);
	}

	__class(Q_fit,'datasets.bean.Q_fit',_super);
	var __proto=Q_fit.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_fight_position=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_vip=this.readInt(_buf);
		this._q_day=this.readString(_buf);
		this._q_notice_vip=this.readInt(_buf);
		this._q_set=this.readInt(_buf);
		this._q_skill=this.readInt(_buf);
		this._q_duanzao=this.readString(_buf);
		this._q_model=this.readInt(_buf);
	}

	__getset(0,__proto,'q_notice_vip',function(){
		return this._q_notice_vip;
	});

	__getset(0,__proto,'q_day',function(){
		return this._q_day;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_fight_position',function(){
		return this._q_fight_position;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_vip',function(){
		return this._q_vip;
	});

	__getset(0,__proto,'q_set',function(){
		return this._q_set;
	});

	__getset(0,__proto,'q_duanzao',function(){
		return this._q_duanzao;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	return Q_fit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*平定安邦任务
*/
//class datasets.bean.Q_pingding extends engine.base.data.Bean
var Q_pingding=(function(_super){
	function Q_pingding(){
		/**任务标号 */
		this._q_mission_id=0;
		/**任务名称 */
		this._q_name=null;
		/**任务类型 */
		this._q_mission_type=0;
		/**任务目标参数[参数1,参数2...] */
		this._q_target_str=null;
		/**任务奖励 */
		this._q_reward=null;
		Q_pingding.__super.call(this);
	}

	__class(Q_pingding,'datasets.bean.Q_pingding',_super);
	var __proto=Q_pingding.prototype;
	__proto.read=function(_buf){
		this._q_mission_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_mission_type=this.readInt(_buf);
		this._q_target_str=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_mission_id',function(){
		return this._q_mission_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_mission_type',function(){
		return this._q_mission_type;
	});

	__getset(0,__proto,'q_target_str',function(){
		return this._q_target_str;
	});

	return Q_pingding;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*火烧赤壁
*/
//class datasets.bean.Q_task_chibi extends engine.base.data.Bean
var Q_task_chibi=(function(_super){
	function Q_task_chibi(){
		/**编号id */
		this._q_id=0;
		/**任务名字 */
		this._q_string_name=null;
		/**任务等级 */
		this._q_condition=null;
		/**转生等级min */
		this._q_level_min=0;
		/**转生等级max */
		this._q_level_max=0;
		/**任务类别(1c 2b 3a 4s)*/
		this._q_type=0;
		/**任务条件条件类型：1阵营(0群雄 1魏 2蜀 3吴 4任意） 2职业（0任意单位 1武将 2红颜 3军师 4蛮将） 3品质 （0无要求 1绿2蓝 3紫 4橙 5红）4数量 */
		this._q_mission_type=null;
		/**备注 */
		this._q_name=null;
		/**战力要求 */
		this._q_zhanli=0;
		/**必得奖励 */
		this._q_reward_1=null;
		/**完成奖励 */
		this._q_reward_2=null;
		/**完成所需时间 单位秒 */
		this._q_time=0;
		/**刷新权重 */
		this._q_rand=0;
		/***/
		this._q_limit_max=null;
		Q_task_chibi.__super.call(this);
	}

	__class(Q_task_chibi,'datasets.bean.Q_task_chibi',_super);
	var __proto=Q_task_chibi.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_string_name=this.readString(_buf);
		this._q_condition=this.readString(_buf);
		this._q_level_min=this.readInt(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_mission_type=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_zhanli=this.readInt(_buf);
		this._q_reward_1=this.readString(_buf);
		this._q_reward_2=this.readString(_buf);
		this._q_time=this.readInt(_buf);
		this._q_rand=this.readInt(_buf);
		this._q_limit_max=this.readString(_buf);
	}

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_rand',function(){
		return this._q_rand;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_string_name',function(){
		return this._q_string_name;
	});

	__getset(0,__proto,'q_mission_type',function(){
		return this._q_mission_type;
	});

	__getset(0,__proto,'q_reward_1',function(){
		return this._q_reward_1;
	});

	__getset(0,__proto,'q_level_min',function(){
		return this._q_level_min;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_zhanli',function(){
		return this._q_zhanli;
	});

	__getset(0,__proto,'q_reward_2',function(){
		return this._q_reward_2;
	});

	__getset(0,__proto,'q_time',function(){
		return this._q_time;
	});

	__getset(0,__proto,'q_limit_max',function(){
		return this._q_limit_max;
	});

	return Q_task_chibi;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*勤王特供配置表
*/
//class datasets.bean.Q_special_reward extends engine.base.data.Bean
var Q_special_reward=(function(_super){
	function Q_special_reward(){
		/**唯一ID */
		this._q_id=0;
		/**轮数 */
		this._q_cfg_index=0;
		/**基础奖励 */
		this._q_basis=null;
		/**自选奖励 */
		this._q_choose=null;
		/**充值ID */
		this._q_top_up=0;
		/**可购买次数 */
		this._q_buy_num=0;
		Q_special_reward.__super.call(this);
	}

	__class(Q_special_reward,'datasets.bean.Q_special_reward',_super);
	var __proto=Q_special_reward.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cfg_index=this.readInt(_buf);
		this._q_basis=this.readString(_buf);
		this._q_choose=this.readString(_buf);
		this._q_top_up=this.readInt(_buf);
		this._q_buy_num=this.readInt(_buf);
	}

	__getset(0,__proto,'q_choose',function(){
		return this._q_choose;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_cfg_index',function(){
		return this._q_cfg_index;
	});

	__getset(0,__proto,'q_basis',function(){
		return this._q_basis;
	});

	__getset(0,__proto,'q_buy_num',function(){
		return this._q_buy_num;
	});

	__getset(0,__proto,'q_top_up',function(){
		return this._q_top_up;
	});

	return Q_special_reward;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师元素数据库
*/
//class datasets.bean.Q_military_wakeup extends engine.base.data.Bean
var Q_military_wakeup=(function(_super){
	function Q_military_wakeup(){
		/**序列号 */
		this._q_id=0;
		/**经脉名称 */
		this._q_Name=null;
		/**元素等级 */
		this._q_level=0;
		/**元素种类 */
		this._q_type=0;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**消耗道具获得的经验 */
		this._q_cost_goods_exp=0;
		/**升级所需经验(0表示无法升级)*/
		this._q_exp=0;
		/**临时属性万分比公式(jingyan:经验)*/
		this._q_attribute_formula=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		/**升级所需觉醒等级 */
		this._q_wakeup_level=0;
		Q_military_wakeup.__super.call(this);
	}

	__class(Q_military_wakeup,'datasets.bean.Q_military_wakeup',_super);
	var __proto=Q_military_wakeup.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_Name=this.readString(_buf);
		this._q_level=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_cost_goods_exp=this.readInt(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
		this._q_wakeup_level=this.readInt(_buf);
	}

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_Name',function(){
		return this._q_Name;
	});

	__getset(0,__proto,'q_cost_goods_exp',function(){
		return this._q_cost_goods_exp;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_wakeup_level',function(){
		return this._q_wakeup_level;
	});

	return Q_military_wakeup;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爵位表
*/
//class datasets.bean.Q_nobility extends engine.base.data.Bean
var Q_nobility=(function(_super){
	function Q_nobility(){
		/**等级 */
		this._q_level=0;
		/**名称 */
		this._q_name=null;
		/**升级所需经验 */
		this._q_exp=0;
		/**品质颜色（0白色，1绿色，2蓝色，3紫色，4橙色，5红色，6金色） */
		this._q_quality=0;
		/**所需战斗力 */
		this._q_battle=0;
		/**所需活跃度 */
		this._q_activity=0;
		/**所需道具 */
		this._q_needitem=null;
		/**达标奖励 */
		this._q_true_reward=null;
		/**每日奖励 */
		this._q_faile_reward=null;
		/**等级属性 */
		this._q_level_attribute=null;
		Q_nobility.__super.call(this);
	}

	__class(Q_nobility,'datasets.bean.Q_nobility',_super);
	var __proto=Q_nobility.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_battle=this.readInt(_buf);
		this._q_activity=this.readInt(_buf);
		this._q_needitem=this.readString(_buf);
		this._q_true_reward=this.readString(_buf);
		this._q_faile_reward=this.readString(_buf);
		this._q_level_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_needitem',function(){
		return this._q_needitem;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_battle',function(){
		return this._q_battle;
	});

	__getset(0,__proto,'q_activity',function(){
		return this._q_activity;
	});

	__getset(0,__proto,'q_true_reward',function(){
		return this._q_true_reward;
	});

	__getset(0,__proto,'q_level_attribute',function(){
		return this._q_level_attribute;
	});

	__getset(0,__proto,'q_faile_reward',function(){
		return this._q_faile_reward;
	});

	return Q_nobility;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令
*/
//class datasets.bean.Q_sgling_mission extends engine.base.data.Bean
var Q_sgling_mission=(function(_super){
	function Q_sgling_mission(){
		/**任务id */
		this._q_id=0;
		/**任务名称 */
		this._q_name=null;
		/**任务类型（0通用 1第1周 2第2周 3第3周 4第4周） */
		this._q_type=0;
		/**任务子类型（1每日 2每周） */
		this._q_type_2=0;
		/**任务目标参数[参数1,参数2...] */
		this._q_target_str=null;
		/**打开的功能面板 */
		this._q_openfunc=0;
		/**三国令经验奖励 */
		this._q_reward=0;
		Q_sgling_mission.__super.call(this);
	}

	__class(Q_sgling_mission,'datasets.bean.Q_sgling_mission',_super);
	var __proto=Q_sgling_mission.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_type_2=this.readInt(_buf);
		this._q_target_str=this.readString(_buf);
		this._q_openfunc=this.readInt(_buf);
		this._q_reward=this.readInt(_buf);
	}

	__getset(0,__proto,'q_target_str',function(){
		return this._q_target_str;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_type_2',function(){
		return this._q_type_2;
	});

	__getset(0,__proto,'q_openfunc',function(){
		return this._q_openfunc;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_sgling_mission;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备升品
*/
//class datasets.bean.Q_equip_promote extends engine.base.data.Bean
var Q_equip_promote=(function(_super){
	function Q_equip_promote(){
		/**升品序号 */
		this._q_id=0;
		/**升品所需物品 */
		this._q_consume=null;
		/**属性加成 */
		this._q_attr_per=null;
		/**星级显示 0不显示 */
		this._q_star=0;
		/**升级后品质 */
		this._q_pinzhi=0;
		/**升品公告 messageID */
		this._q_notice=0;
		Q_equip_promote.__super.call(this);
	}

	__class(Q_equip_promote,'datasets.bean.Q_equip_promote',_super);
	var __proto=Q_equip_promote.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_consume=this.readString(_buf);
		this._q_attr_per=this.readString(_buf);
		this._q_star=this.readInt(_buf);
		this._q_pinzhi=this.readInt(_buf);
		this._q_notice=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	__getset(0,__proto,'q_star',function(){
		return this._q_star;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_attr_per',function(){
		return this._q_attr_per;
	});

	__getset(0,__proto,'q_pinzhi',function(){
		return this._q_pinzhi;
	});

	return Q_equip_promote;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*拍卖变量参数
*/
//class datasets.bean.Q_auction_param extends engine.base.data.Bean
var Q_auction_param=(function(_super){
	function Q_auction_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_auction_param.__super.call(this);
	}

	__class(Q_auction_param,'datasets.bean.Q_auction_param',_super);
	var __proto=Q_auction_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_auction_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*红颜等级表
*/
//class datasets.bean.Q_hongyan_level extends engine.base.data.Bean
var Q_hongyan_level=(function(_super){
	function Q_hongyan_level(){
		/**序号 */
		this._q_id=0;
		/**类型 */
		this._q_type=0;
		/**等级 */
		this._q_level=0;
		/**属性 */
		this._q_attr=null;
		/**升级所需进度 */
		this._q_uppro=0;
		Q_hongyan_level.__super.call(this);
	}

	__class(Q_hongyan_level,'datasets.bean.Q_hongyan_level',_super);
	var __proto=Q_hongyan_level.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_attr=this.readString(_buf);
		this._q_uppro=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_uppro',function(){
		return this._q_uppro;
	});

	return Q_hongyan_level;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*激活条件类型表
*/
//class datasets.bean.Q_condition extends engine.base.data.Bean
var Q_condition=(function(_super){
	function Q_condition(){
		/**编号 */
		this._q_type=0;
		/**描述 */
		this._q_describe=null;
		Q_condition.__super.call(this);
	}

	__class(Q_condition,'datasets.bean.Q_condition',_super);
	var __proto=Q_condition.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_describe=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_describe',function(){
		return this._q_describe;
	});

	return Q_condition;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*科举排名奖励
*/
//class datasets.bean.Q_question_bank_reward extends engine.base.data.Bean
var Q_question_bank_reward=(function(_super){
	function Q_question_bank_reward(){
		/**排名(小于等于该排名时获取的奖励,必须从小到大)*/
		this._q_rank_min=0;
		/***/
		this._q_rank_max=0;
		/**奖励 */
		this._q_prize=null;
		Q_question_bank_reward.__super.call(this);
	}

	__class(Q_question_bank_reward,'datasets.bean.Q_question_bank_reward',_super);
	var __proto=Q_question_bank_reward.prototype;
	__proto.read=function(_buf){
		this._q_rank_min=this.readInt(_buf);
		this._q_rank_max=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_rank_min',function(){
		return this._q_rank_min;
	});

	__getset(0,__proto,'q_rank_max',function(){
		return this._q_rank_max;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	return Q_question_bank_reward;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者参数
*/
//class datasets.bean.Q_kingwar_param extends engine.base.data.Bean
var Q_kingwar_param=(function(_super){
	function Q_kingwar_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_kingwar_param.__super.call(this);
	}

	__class(Q_kingwar_param,'datasets.bean.Q_kingwar_param',_super);
	var __proto=Q_kingwar_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_kingwar_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*文本
*/
//class datasets.bean.Q_message extends engine.base.data.Bean
var Q_message=(function(_super){
	function Q_message(){
		/**信息编号 */
		this._q_messageID=0;
		/**信息内容(%MY表示刀币图标，%MX表现星点图标)*/
		this._q_describe=null;
		/**信息提示表现类型（1.中央提示，2:跑马灯 3：一键提示 4：两键提示 5系统提示 6活动提示(自己可见)7军团公告） */
		this._q_notice_type=0;
		Q_message.__super.call(this);
	}

	__class(Q_message,'datasets.bean.Q_message',_super);
	var __proto=Q_message.prototype;
	__proto.read=function(_buf){
		this._q_messageID=this.readInt(_buf);
		this._q_describe=this.readString(_buf);
		this._q_notice_type=this.readInt(_buf);
	}

	__getset(0,__proto,'q_messageID',function(){
		return this._q_messageID;
	});

	__getset(0,__proto,'q_describe',function(){
		return this._q_describe;
	});

	__getset(0,__proto,'q_notice_type',function(){
		return this._q_notice_type;
	});

	return Q_message;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*结婚房屋表
*/
//class datasets.bean.Q_weeding extends engine.base.data.Bean
var Q_weeding=(function(_super){
	function Q_weeding(){
		/**品质等级 */
		this._q_level=0;
		/**名字 */
		this._q_name=null;
		/**等级上限 */
		this._q_level_limit=0;
		/**价格 */
		this._q_price=null;
		/**基础属性 */
		this._q_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**消耗公式 */
		this._q_cost=null;
		/**挂机经验金币收益万分比 */
		this._q_exp=0;
		/**每5分钟亲密度 */
		this._q_lovely=null;
		Q_weeding.__super.call(this);
	}

	__class(Q_weeding,'datasets.bean.Q_weeding',_super);
	var __proto=Q_weeding.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_level_limit=this.readInt(_buf);
		this._q_price=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_lovely=this.readString(_buf);
	}

	__getset(0,__proto,'q_level_limit',function(){
		return this._q_level_limit;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_lovely',function(){
		return this._q_lovely;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_price',function(){
		return this._q_price;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	return Q_weeding;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战参数
*/
//class datasets.bean.Q_guildwar_param extends engine.base.data.Bean
var Q_guildwar_param=(function(_super){
	function Q_guildwar_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_guildwar_param.__super.call(this);
	}

	__class(Q_guildwar_param,'datasets.bean.Q_guildwar_param',_super);
	var __proto=Q_guildwar_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_guildwar_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_amulet
*/
//class datasets.bean.Q_amulet extends engine.base.data.Bean
var Q_amulet=(function(_super){
	function Q_amulet(){
		/**等级 */
		this._q_id=0;
		/**护符名称 */
		this._q_name=null;
		/**本级护符属性 */
		this._q_attribute=null;
		/**护符升级所需完成的任务ID [id,id,id,id……] */
		this._q_targetTask=null;
		/**激活功能 [类型,值] 类型1:多角色 值1:第几角色 */
		this._q_activation=null;
		/**护符面板造型，关联面板造型id */
		this._q_picture=0;
		Q_amulet.__super.call(this);
	}

	__class(Q_amulet,'datasets.bean.Q_amulet',_super);
	var __proto=Q_amulet.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_targetTask=this.readString(_buf);
		this._q_activation=this.readString(_buf);
		this._q_picture=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_activation',function(){
		return this._q_activation;
	});

	__getset(0,__proto,'q_targetTask',function(){
		return this._q_targetTask;
	});

	__getset(0,__proto,'q_picture',function(){
		return this._q_picture;
	});

	return Q_amulet;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物缘分
*/
//class datasets.bean.Q_pet_group extends engine.base.data.Bean
var Q_pet_group=(function(_super){
	function Q_pet_group(){
		/**缘分id */
		this._q_id=0;
		/**分页卡 */
		this._q_tab=null;
		/**缘分名字 */
		this._q_name=null;
		/**武将组合[[类型，ID],[类型，ID]] 类型 1 武将 2红颜 3 军师 4蛮将 */
		this._q_combination=null;
		/**属性加成 */
		this._q_attribute=null;
		/**获取途径 */
		this._q_function=0;
		Q_pet_group.__super.call(this);
	}

	__class(Q_pet_group,'datasets.bean.Q_pet_group',_super);
	var __proto=Q_pet_group.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_tab=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_combination=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_function=this.readInt(_buf);
	}

	__getset(0,__proto,'q_combination',function(){
		return this._q_combination;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_tab',function(){
		return this._q_tab;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_function',function(){
		return this._q_function;
	});

	return Q_pet_group;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*资源获取途径表
*/
//class datasets.bean.Q_guide extends engine.base.data.Bean
var Q_guide=(function(_super){
	function Q_guide(){
		/**编号 */
		this._q_guide_id=0;
		/**接取任务id触发 */
		this._q_mission_id=0;
		/**完成任务id触发 */
		this._q_task_id=0;
		/**关卡触发id */
		this._q_guanqia=0;
		/**后续引导id */
		this._q_next_id=0;
		/**引导关联对白 */
		this._q_dialogue=null;
		/**等级触发条件 */
		this._q_guide_level=0;
		/**功能触发条件 */
		this._q_funcId=0;
		/**指引类型 */
		this._q_guide_type=0;
		Q_guide.__super.call(this);
	}

	__class(Q_guide,'datasets.bean.Q_guide',_super);
	var __proto=Q_guide.prototype;
	__proto.read=function(_buf){
		this._q_guide_id=this.readInt(_buf);
		this._q_mission_id=this.readInt(_buf);
		this._q_task_id=this.readInt(_buf);
		this._q_guanqia=this.readInt(_buf);
		this._q_next_id=this.readInt(_buf);
		this._q_dialogue=this.readString(_buf);
		this._q_guide_level=this.readInt(_buf);
		this._q_funcId=this.readInt(_buf);
		this._q_guide_type=this.readInt(_buf);
	}

	__getset(0,__proto,'q_guide_id',function(){
		return this._q_guide_id;
	});

	__getset(0,__proto,'q_mission_id',function(){
		return this._q_mission_id;
	});

	__getset(0,__proto,'q_guide_type',function(){
		return this._q_guide_type;
	});

	__getset(0,__proto,'q_task_id',function(){
		return this._q_task_id;
	});

	__getset(0,__proto,'q_dialogue',function(){
		return this._q_dialogue;
	});

	__getset(0,__proto,'q_guanqia',function(){
		return this._q_guanqia;
	});

	__getset(0,__proto,'q_next_id',function(){
		return this._q_next_id;
	});

	__getset(0,__proto,'q_guide_level',function(){
		return this._q_guide_level;
	});

	__getset(0,__proto,'q_funcId',function(){
		return this._q_funcId;
	});

	return Q_guide;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值展示(该表仅用于前端展示，并没有任何实际意义)
*/
//class datasets.bean.Q_recharge_view extends engine.base.data.Bean
var Q_recharge_view=(function(_super){
	function Q_recharge_view(){
		/**充值id */
		this._q_id=0;
		/**是否显示充值面板 0否1是 */
		this._q_see=0;
		Q_recharge_view.__super.call(this);
	}

	__class(Q_recharge_view,'datasets.bean.Q_recharge_view',_super);
	var __proto=Q_recharge_view.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_see=this.readInt(_buf);
	}

	__getset(0,__proto,'q_see',function(){
		return this._q_see;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	return Q_recharge_view;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战排名奖励
*/
//class datasets.bean.Q_guildwar_rank extends engine.base.data.Bean
var Q_guildwar_rank=(function(_super){
	function Q_guildwar_rank(){
		/**序列 */
		this._q_id=0;
		/**类型 1积分 2伤害 */
		this._q_type=0;
		/**排名 */
		this._q_rank=null;
		/**奖励字符串 */
		this._q_reward=null;
		Q_guildwar_rank.__super.call(this);
	}

	__class(Q_guildwar_rank,'datasets.bean.Q_guildwar_rank',_super);
	var __proto=Q_guildwar_rank.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_rank=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_guildwar_rank;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶豪礼
*/
//class datasets.bean.Q_upgrade_gift extends engine.base.data.Bean
var Q_upgrade_gift=(function(_super){
	function Q_upgrade_gift(){
		/**序号 */
		this._q_id=0;
		/**活动名称 */
		this._q_name=null;
		/**条件类型（无特殊意义，分类型排序用） */
		this._q_condition_type=0;
		/**领取条件 */
		this._q_condition=null;
		/**达成奖励 */
		this._q_reward=null;
		Q_upgrade_gift.__super.call(this);
	}

	__class(Q_upgrade_gift,'datasets.bean.Q_upgrade_gift',_super);
	var __proto=Q_upgrade_gift.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_condition_type=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_condition_type',function(){
		return this._q_condition_type;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_upgrade_gift;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玩法描述
*/
//class datasets.bean.Q_help extends engine.base.data.Bean
var Q_help=(function(_super){
	function Q_help(){
		/**前端面板名字 */
		this._q_id=0;
		/**功能对应资源url */
		this._q_url=null;
		/**显示问号 */
		this._q_showhelp=0;
		/**功能描述(可用html文字,不显示可不填)*/
		this._q_info=null;
		Q_help.__super.call(this);
	}

	__class(Q_help,'datasets.bean.Q_help',_super);
	var __proto=Q_help.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_url=this.readString(_buf);
		this._q_showhelp=this.readInt(_buf);
		this._q_info=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_url',function(){
		return this._q_url;
	});

	__getset(0,__proto,'q_showhelp',function(){
		return this._q_showhelp;
	});

	__getset(0,__proto,'q_info',function(){
		return this._q_info;
	});

	return Q_help;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*千里走单骑参数
*/
//class datasets.bean.Q_yuanzheng_param extends engine.base.data.Bean
var Q_yuanzheng_param=(function(_super){
	function Q_yuanzheng_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_yuanzheng_param.__super.call(this);
	}

	__class(Q_yuanzheng_param,'datasets.bean.Q_yuanzheng_param',_super);
	var __proto=Q_yuanzheng_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_yuanzheng_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*附灵
*/
//class datasets.bean.Q_addspirit extends engine.base.data.Bean
var Q_addspirit=(function(_super){
	function Q_addspirit(){
		/**序号 */
		this._q_id=0;
		/**部位 */
		this._q_type=0;
		/**阶数 */
		this._q_order=0;
		/**附灵名称 */
		this._q_name=null;
		/**属性 */
		this._q_attribute=null;
		/**技能 */
		this._q_skill=null;
		/**消耗材料 */
		this._q_cost=null;
		/**公告 */
		this._q_notice=null;
		Q_addspirit.__super.call(this);
	}

	__class(Q_addspirit,'datasets.bean.Q_addspirit',_super);
	var __proto=Q_addspirit.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_order=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_skill=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_notice=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_order',function(){
		return this._q_order;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	return Q_addspirit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.bean.Q_officer_param extends engine.base.data.Bean
var Q_officer_param=(function(_super){
	function Q_officer_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_officer_param.__super.call(this);
	}

	__class(Q_officer_param,'datasets.bean.Q_officer_param',_super);
	var __proto=Q_officer_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_officer_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*套装数据库
*/
//class datasets.bean.Q_gequip_suit extends engine.base.data.Bean
var Q_gequip_suit=(function(_super){
	function Q_gequip_suit(){
		/**序列号 */
		this._q_id=0;
		/**套装阶数 */
		this._q_level=0;
		/**套装件数 */
		this._q_suit_number=0;
		/**套装属性 [[[套装属性1]],[[套装属性2]]……] */
		this._q_attr=null;
		Q_gequip_suit.__super.call(this);
	}

	__class(Q_gequip_suit,'datasets.bean.Q_gequip_suit',_super);
	var __proto=Q_gequip_suit.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_suit_number=this.readInt(_buf);
		this._q_attr=this.readString(_buf);
	}

	__getset(0,__proto,'q_suit_number',function(){
		return this._q_suit_number;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	return Q_gequip_suit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天配置
*/
//class datasets.bean.Q_jiuchongtian extends engine.base.data.Bean
var Q_jiuchongtian=(function(_super){
	function Q_jiuchongtian(){
		/**层数 */
		this._q_id=0;
		/**副本id */
		this._q_dungeon=0;
		/**战斗胜利增加的积分 */
		this._q_integral_victory=0;
		/**战斗失败增加的积分 */
		this._q_integral_failure=0;
		/**战斗结束是否层数变化 [获胜升层,战败降层] */
		this._q_stage=null;
		/**每60秒获得的奖励 */
		this._q_reward=null;
		Q_jiuchongtian.__super.call(this);
	}

	__class(Q_jiuchongtian,'datasets.bean.Q_jiuchongtian',_super);
	var __proto=Q_jiuchongtian.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_dungeon=this.readInt(_buf);
		this._q_integral_victory=this.readInt(_buf);
		this._q_integral_failure=this.readInt(_buf);
		this._q_stage=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_integral_victory',function(){
		return this._q_integral_victory;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_stage',function(){
		return this._q_stage;
	});

	__getset(0,__proto,'q_dungeon',function(){
		return this._q_dungeon;
	});

	__getset(0,__proto,'q_integral_failure',function(){
		return this._q_integral_failure;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_jiuchongtian;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将
*/
//class datasets.bean.Q_officer extends engine.base.data.Bean
var Q_officer=(function(_super){
	function Q_officer(){
		/**军师id */
		this._q_id=0;
		/**默认名称 */
		this._q_name=null;
		/**声音对白（调用音效id） */
		this._q_sound=0;
		/**展示资源编号 */
		this._q_model=0;
		/**品质(白绿蓝紫橙红金0123456)*/
		this._q_quality=0;
		/**激活道具 */
		this._q_zizhi_item=0;
		/**主动技能ID */
		this._q_active_skill_id=0;
		/**被动技能id */
		this._q_passive_skill=null;
		/**被动技能上限 */
		this._q_passive_skill_num=0;
		/**基础属性加成 */
		this._q_base_attribute=null;
		/**品质基础属性 */
		this._q_zizhi_attribute=null;
		/**品质属性公式 */
		this._q_zizhi_attribute_formula=null;
		/**品质消耗公式 */
		this._q_zizhi_cost=null;
		/**阵营（0群 1魏 2蜀 3吴） */
		this._q_group=0;
		Q_officer.__super.call(this);
	}

	__class(Q_officer,'datasets.bean.Q_officer',_super);
	var __proto=Q_officer.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_sound=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_zizhi_item=this.readInt(_buf);
		this._q_active_skill_id=this.readInt(_buf);
		this._q_passive_skill=this.readString(_buf);
		this._q_passive_skill_num=this.readInt(_buf);
		this._q_base_attribute=this.readString(_buf);
		this._q_zizhi_attribute=this.readString(_buf);
		this._q_zizhi_attribute_formula=this.readString(_buf);
		this._q_zizhi_cost=this.readString(_buf);
		this._q_group=this.readInt(_buf);
	}

	__getset(0,__proto,'q_passive_skill',function(){
		return this._q_passive_skill;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_sound',function(){
		return this._q_sound;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_zizhi_item',function(){
		return this._q_zizhi_item;
	});

	__getset(0,__proto,'q_passive_skill_num',function(){
		return this._q_passive_skill_num;
	});

	__getset(0,__proto,'q_active_skill_id',function(){
		return this._q_active_skill_id;
	});

	__getset(0,__proto,'q_zizhi_cost',function(){
		return this._q_zizhi_cost;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula',function(){
		return this._q_zizhi_attribute_formula;
	});

	__getset(0,__proto,'q_base_attribute',function(){
		return this._q_base_attribute;
	});

	__getset(0,__proto,'q_zizhi_attribute',function(){
		return this._q_zizhi_attribute;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	return Q_officer;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*时装
*/
//class datasets.bean.Q_fashion extends engine.base.data.Bean
var Q_fashion=(function(_super){
	function Q_fashion(){
		/**时装id */
		this._q_id=0;
		/**时装类型（1衣服 2武器 3坐骑 4精灵，5称号，6翅膀，7光环，8守护） */
		this._q_type=0;
		/**名字 */
		this._q_name=null;
		/**激活属性 */
		this._q_attr=null;
		/**激活需要的道具 */
		this._q_need_goods=0;
		/**星级提升消耗 */
		this._q_zizhi_cost=null;
		/**最大星级（初始0星） */
		this._q_level_max=0;
		/**资质属性公式，参数zizhi */
		this._q_zizhi_attribute_formula=null;
		/**外观资源ID */
		this._q_show=null;
		/**获取途径（功能id） */
		this._q_fuction=0;
		/**时装栏显示控制（1为显示，0不显示） */
		this._q_display=0;
		/**觉醒属性（1通灵 2兽魂 3坐骑 4翅膀 5神兵 6精灵 7玄女 8符文 9秘核 10阵法 11灵气，万分比进阶属性比例） */
		this._q_attribute=null;
		/***/
		this._q_overtime=0;
		Q_fashion.__super.call(this);
	}

	__class(Q_fashion,'datasets.bean.Q_fashion',_super);
	var __proto=Q_fashion.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_attr=this.readString(_buf);
		this._q_need_goods=this.readInt(_buf);
		this._q_zizhi_cost=this.readString(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_zizhi_attribute_formula=this.readString(_buf);
		this._q_show=this.readString(_buf);
		this._q_fuction=this.readInt(_buf);
		this._q_display=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_overtime=this.readInt(_buf);
	}

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_display',function(){
		return this._q_display;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_show',function(){
		return this._q_show;
	});

	__getset(0,__proto,'q_need_goods',function(){
		return this._q_need_goods;
	});

	__getset(0,__proto,'q_zizhi_cost',function(){
		return this._q_zizhi_cost;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula',function(){
		return this._q_zizhi_attribute_formula;
	});

	__getset(0,__proto,'q_fuction',function(){
		return this._q_fuction;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_overtime',function(){
		return this._q_overtime;
	});

	return Q_fashion;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*竞技场参数
*/
//class datasets.bean.Q_arena_param extends engine.base.data.Bean
var Q_arena_param=(function(_super){
	function Q_arena_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_arena_param.__super.call(this);
	}

	__class(Q_arena_param,'datasets.bean.Q_arena_param',_super);
	var __proto=Q_arena_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_arena_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*道具参数
*/
//class datasets.bean.Q_item_param extends engine.base.data.Bean
var Q_item_param=(function(_super){
	function Q_item_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_item_param.__super.call(this);
	}

	__class(Q_item_param,'datasets.bean.Q_item_param',_super);
	var __proto=Q_item_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_item_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.bean.Q_grow_checkpoint_param extends engine.base.data.Bean
var Q_grow_checkpoint_param=(function(_super){
	function Q_grow_checkpoint_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_grow_checkpoint_param.__super.call(this);
	}

	__class(Q_grow_checkpoint_param,'datasets.bean.Q_grow_checkpoint_param',_super);
	var __proto=Q_grow_checkpoint_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_grow_checkpoint_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*平定参数
*/
//class datasets.bean.Q_pingding_param extends engine.base.data.Bean
var Q_pingding_param=(function(_super){
	function Q_pingding_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_pingding_param.__super.call(this);
	}

	__class(Q_pingding_param,'datasets.bean.Q_pingding_param',_super);
	var __proto=Q_pingding_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_pingding_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*站位
*/
//class datasets.bean.Q_team_fight_position extends engine.base.data.Bean
var Q_team_fight_position=(function(_super){
	function Q_team_fight_position(){
		/**第几个单位 */
		this._q_index=0;
		/**位置(11-15,21-25)*/
		this._q_position=0;
		Q_team_fight_position.__super.call(this);
	}

	__class(Q_team_fight_position,'datasets.bean.Q_team_fight_position',_super);
	var __proto=Q_team_fight_position.prototype;
	__proto.read=function(_buf){
		this._q_index=this.readInt(_buf);
		this._q_position=this.readInt(_buf);
	}

	__getset(0,__proto,'q_index',function(){
		return this._q_index;
	});

	__getset(0,__proto,'q_position',function(){
		return this._q_position;
	});

	return Q_team_fight_position;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女飞升
*/
//class datasets.bean.Q_xuannv_feisheng extends engine.base.data.Bean
var Q_xuannv_feisheng=(function(_super){
	function Q_xuannv_feisheng(){
		/**阶数 */
		this._q_level=0;
		/**阶段(1洗髓 2炼神 3飞升)*/
		this._q_stage=0;
		/**子阶段 */
		this._q_sub_stage=0;
		/**阶段名 */
		this._q_stage_name=null;
		Q_xuannv_feisheng.__super.call(this);
	}

	__class(Q_xuannv_feisheng,'datasets.bean.Q_xuannv_feisheng',_super);
	var __proto=Q_xuannv_feisheng.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_stage=this.readInt(_buf);
		this._q_sub_stage=this.readInt(_buf);
		this._q_stage_name=this.readString(_buf);
	}

	__getset(0,__proto,'q_stage_name',function(){
		return this._q_stage_name;
	});

	__getset(0,__proto,'q_stage',function(){
		return this._q_stage;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_sub_stage',function(){
		return this._q_sub_stage;
	});

	return Q_xuannv_feisheng;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*时装套装
*/
//class datasets.bean.Q_fashion_suit extends engine.base.data.Bean
var Q_fashion_suit=(function(_super){
	function Q_fashion_suit(){
		/**唯一ID */
		this._q_id=0;
		/**时装id */
		this._q_fashion_id=null;
		/**名字 */
		this._q_name=null;
		/**激活属性[[[数量],[属性id,属性],[属性id,属性]],[[数量],[属性id,属性],[属性id,属性]],[[数量],[属性id,属性],[属性id,属性]]] */
		this._q_attr=null;
		/**图标资源 */
		this._q_icon=0;
		Q_fashion_suit.__super.call(this);
	}

	__class(Q_fashion_suit,'datasets.bean.Q_fashion_suit',_super);
	var __proto=Q_fashion_suit.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_fashion_id=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_attr=this.readString(_buf);
		this._q_icon=this.readInt(_buf);
	}

	__getset(0,__proto,'q_icon',function(){
		return this._q_icon;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_fashion_id',function(){
		return this._q_fashion_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	return Q_fashion_suit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*功能预告表
*/
//class datasets.bean.Q_newfunc_notice extends engine.base.data.Bean
var Q_newfunc_notice=(function(_super){
	function Q_newfunc_notice(){
		/**编号id */
		this._q_id=0;
		/**功能名字 */
		this._q_string_name=null;
		/**新功能关联ID */
		this._q_newfunc_id=0;
		/**关卡数 */
		this._q_checkpoint=0;
		/**主界面预告文本（支持html */
		this._q_info1=null;
		/**tips界面（支持html） */
		this._q_info2=null;
		Q_newfunc_notice.__super.call(this);
	}

	__class(Q_newfunc_notice,'datasets.bean.Q_newfunc_notice',_super);
	var __proto=Q_newfunc_notice.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_string_name=this.readString(_buf);
		this._q_newfunc_id=this.readInt(_buf);
		this._q_checkpoint=this.readInt(_buf);
		this._q_info1=this.readString(_buf);
		this._q_info2=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_string_name',function(){
		return this._q_string_name;
	});

	__getset(0,__proto,'q_newfunc_id',function(){
		return this._q_newfunc_id;
	});

	__getset(0,__proto,'q_checkpoint',function(){
		return this._q_checkpoint;
	});

	__getset(0,__proto,'q_info1',function(){
		return this._q_info1;
	});

	__getset(0,__proto,'q_info2',function(){
		return this._q_info2;
	});

	return Q_newfunc_notice;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活动大厅
*/
//class datasets.bean.Q_activities extends engine.base.data.Bean
var Q_activities=(function(_super){
	function Q_activities(){
		/**活动ID */
		this._q_id=0;
		/**活动名称 */
		this._q_name=null;
		/**活动类型(1大厅 2押镖 3帮会BOSS 4九重天） */
		this._q_type=0;
		/**开始时间开启时间说明：-1每日开启模式-2每周开启模式-3每月开启模式；-1;18:20 代表每天18:20开启-2;3,5;12:20代表每周3周5 12:20开启-3;10,11;12:20代表每月10/11号12:20开启 */
		this._q_time_start=null;
		/**结束时间 开启时间说明：-1每日开启模式-2每周开启模式-3每月开启模式；-1;18:20 代表每天18:20开启-2;3,5;12:20代表每周3周5 12:20开启-3;10,11;12:20代表每月10/11号12:20开启 */
		this._q_time_end=null;
		/**状态持续时间，单位秒 */
		this._q_state_time=null;
		/**开服后多少天开启(下限)*/
		this._q_kaifu_min=0;
		/**需要等级(通用condition） */
		this._q_level=null;
		/**活动图片资源 */
		this._q_picture=null;
		/**活动开始前多少秒进行预告 */
		this._q_notice_time=0;
		/**活动预告图标资源 */
		this._q_notice_picture=null;
		/**奖励展示 */
		this._q_reward_show=null;
		/**活动说明tips()*/
		this._q_explain=null;
		/**副本ID */
		this._q_fuben_id=0;
		/**强制开启时间 */
		this._q_mandatory_open=0;
		Q_activities.__super.call(this);
	}

	__class(Q_activities,'datasets.bean.Q_activities',_super);
	var __proto=Q_activities.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_time_start=this.readString(_buf);
		this._q_time_end=this.readString(_buf);
		this._q_state_time=this.readString(_buf);
		this._q_kaifu_min=this.readInt(_buf);
		this._q_level=this.readString(_buf);
		this._q_picture=this.readString(_buf);
		this._q_notice_time=this.readInt(_buf);
		this._q_notice_picture=this.readString(_buf);
		this._q_reward_show=this.readString(_buf);
		this._q_explain=this.readString(_buf);
		this._q_fuben_id=this.readInt(_buf);
		this._q_mandatory_open=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_time_end',function(){
		return this._q_time_end;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_time_start',function(){
		return this._q_time_start;
	});

	__getset(0,__proto,'q_kaifu_min',function(){
		return this._q_kaifu_min;
	});

	__getset(0,__proto,'q_state_time',function(){
		return this._q_state_time;
	});

	__getset(0,__proto,'q_picture',function(){
		return this._q_picture;
	});

	__getset(0,__proto,'q_notice_time',function(){
		return this._q_notice_time;
	});

	__getset(0,__proto,'q_notice_picture',function(){
		return this._q_notice_picture;
	});

	__getset(0,__proto,'q_reward_show',function(){
		return this._q_reward_show;
	});

	__getset(0,__proto,'q_explain',function(){
		return this._q_explain;
	});

	__getset(0,__proto,'q_fuben_id',function(){
		return this._q_fuben_id;
	});

	__getset(0,__proto,'q_mandatory_open',function(){
		return this._q_mandatory_open;
	});

	return Q_activities;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*空城计参数
*/
//class datasets.bean.Q_kongchengji_param extends engine.base.data.Bean
var Q_kongchengji_param=(function(_super){
	function Q_kongchengji_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_kongchengji_param.__super.call(this);
	}

	__class(Q_kongchengji_param,'datasets.bean.Q_kongchengji_param',_super);
	var __proto=Q_kongchengji_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_kongchengji_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*物品基本数据库表
*/
//class datasets.bean.Q_item extends engine.base.data.Bean
var Q_item=(function(_super){
	function Q_item(){
		/**物品ID 1001000-2000000装备 2000001后道具 30000001后资源线装备 */
		this._q_id=0;
		/**物品名称(最大九个汉字。支持_后缀，后缀部分在客户端不予显示)（物品名称需要唯一，以便在爆率表中使用汉字） */
		this._q_name=null;
		/**类型 */
		this._q_type=0;
		/**分解类型（1装备分解 2金装分解 3红装分解 4法宝分解 5战纹分解 6御魂分解） */
		this._q_dispose_type=0;
		/**分解获得的物品列表,不填表示无法分解 */
		this._q_dispose=null;
		/**最大叠加数量（0或1均为不可叠加，最大可以填9999） */
		this._q_max=0;
		/**使用转升等级需求 */
		this._q_zhuansheng=0;
		/**物品等阶 */
		this._q_order=0;
		/**使用等级需求 */
		this._q_level=0;
		/**使用后打开面板编号 配置此字段后双击后不再使用道具，仅打开对应配置面板 */
		this._q_ui=null;
		/**物品天生的名字颜色（0白色，1绿色，2蓝色，3紫色，4橙色，5红色，6金色【热血装备】） */
		this._q_quality=0;
		/**<span style='color:#e56a10;'>温馨提示 红色 df2505</span> */
		this._q_describe=null;
		/**物品微图标资源编号 */
		this._q_icon=0;
		/**UI界面展示造型资源编号 */
		this._q_model=0;
		/**获取途径[1,2,3,4] */
		this._q_path=null;
		/**是否自动使用（1是，0否） */
		this._q_auto_use=0;
		/**道具是否可批量使用(0否，1是)*/
		this._q_whether_batch=0;
		/**参数 */
		this._q_param2=null;
		/**背包类型(0不存在于背包1装备2道具3咒术4秘宝)*/
		this._q_packet=0;
		/**参数 */
		this._q_param=null;
		/**属性丹类型 0全体加成 1单角色加成 */
		this._q_attr_kind=0;
		/**随机类道具tips剪影配置（根据tips文件里面的编号定） */
		this._q_randimg=0;
		/**运营道具战力展示 */
		this._q_comat_effectiveness=0;
		Q_item.__super.call(this);
	}

	__class(Q_item,'datasets.bean.Q_item',_super);
	var __proto=Q_item.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_dispose_type=this.readInt(_buf);
		this._q_dispose=this.readString(_buf);
		this._q_max=this.readInt(_buf);
		this._q_zhuansheng=this.readInt(_buf);
		this._q_order=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_ui=this.readString(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_describe=this.readString(_buf);
		this._q_icon=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_path=this.readString(_buf);
		this._q_auto_use=this.readInt(_buf);
		this._q_whether_batch=this.readInt(_buf);
		this._q_param2=this.readString(_buf);
		this._q_packet=this.readInt(_buf);
		this._q_param=this.readString(_buf);
		this._q_attr_kind=this.readInt(_buf);
		this._q_randimg=this.readInt(_buf);
		this._q_comat_effectiveness=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_dispose',function(){
		return this._q_dispose;
	});

	__getset(0,__proto,'q_comat_effectiveness',function(){
		return this._q_comat_effectiveness;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_randimg',function(){
		return this._q_randimg;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_dispose_type',function(){
		return this._q_dispose_type;
	});

	__getset(0,__proto,'q_max',function(){
		return this._q_max;
	});

	__getset(0,__proto,'q_auto_use',function(){
		return this._q_auto_use;
	});

	__getset(0,__proto,'q_zhuansheng',function(){
		return this._q_zhuansheng;
	});

	__getset(0,__proto,'q_order',function(){
		return this._q_order;
	});

	__getset(0,__proto,'q_ui',function(){
		return this._q_ui;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_describe',function(){
		return this._q_describe;
	});

	__getset(0,__proto,'q_icon',function(){
		return this._q_icon;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_path',function(){
		return this._q_path;
	});

	__getset(0,__proto,'q_whether_batch',function(){
		return this._q_whether_batch;
	});

	__getset(0,__proto,'q_param2',function(){
		return this._q_param2;
	});

	__getset(0,__proto,'q_packet',function(){
		return this._q_packet;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	__getset(0,__proto,'q_attr_kind',function(){
		return this._q_attr_kind;
	});

	return Q_item;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*道具参数
*/
//class datasets.bean.Q_coordinates extends engine.base.data.Bean
var Q_coordinates=(function(_super){
	function Q_coordinates(){
		/**套装id */
		this._q_id=0;
		/**等级 */
		this._q_level=0;
		/**套装属性 */
		this._q_value=null;
		/**数量 */
		this._q_quantity=0;
		/**阵营 */
		this._q_camp=0;
		Q_coordinates.__super.call(this);
	}

	__class(Q_coordinates,'datasets.bean.Q_coordinates',_super);
	var __proto=Q_coordinates.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_value=this.readString(_buf);
		this._q_quantity=this.readInt(_buf);
		this._q_camp=this.readInt(_buf);
	}

	__getset(0,__proto,'q_quantity',function(){
		return this._q_quantity;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	__getset(0,__proto,'q_camp',function(){
		return this._q_camp;
	});

	return Q_coordinates;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*郿坞秘宝数据库
*/
//class datasets.bean.Q_meiwu_treasure extends engine.base.data.Bean
var Q_meiwu_treasure=(function(_super){
	function Q_meiwu_treasure(){
		/**唯一ID */
		this._q_id=0;
		/**轮数 */
		this._q_cfg_index=0;
		/**层数 */
		this._q_floor=0;
		/**奖励 */
		this._q_reward=null;
		/**是否大奖 */
		this._q_super_reward=0;
		/**翻牌消耗 */
		this._q_cost=null;
		/**权重 */
		this._q_weight=0;
		Q_meiwu_treasure.__super.call(this);
	}

	__class(Q_meiwu_treasure,'datasets.bean.Q_meiwu_treasure',_super);
	var __proto=Q_meiwu_treasure.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cfg_index=this.readInt(_buf);
		this._q_floor=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_super_reward=this.readInt(_buf);
		this._q_cost=this.readString(_buf);
		this._q_weight=this.readInt(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_super_reward',function(){
		return this._q_super_reward;
	});

	__getset(0,__proto,'q_cfg_index',function(){
		return this._q_cfg_index;
	});

	__getset(0,__proto,'q_floor',function(){
		return this._q_floor;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_weight',function(){
		return this._q_weight;
	});

	return Q_meiwu_treasure;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*巡城匹配
*/
//class datasets.bean.Q_city extends engine.base.data.Bean
var Q_city=(function(_super){
	function Q_city(){
		/**区间段 */
		this._q_id=0;
		/**积分区间 */
		this._q_rank=null;
		/**挑战获胜道具奖励 */
		this._q_true_reward=null;
		/**挑战失败道具奖励 */
		this._q_faile_reward=null;
		/**击败失去积分 */
		this._q_lose=0;
		/**获胜积分 */
		this._q_win=0;
		Q_city.__super.call(this);
	}

	__class(Q_city,'datasets.bean.Q_city',_super);
	var __proto=Q_city.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_rank=this.readString(_buf);
		this._q_true_reward=this.readString(_buf);
		this._q_faile_reward=this.readString(_buf);
		this._q_lose=this.readInt(_buf);
		this._q_win=this.readInt(_buf);
	}

	__getset(0,__proto,'q_lose',function(){
		return this._q_lose;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	__getset(0,__proto,'q_win',function(){
		return this._q_win;
	});

	__getset(0,__proto,'q_true_reward',function(){
		return this._q_true_reward;
	});

	__getset(0,__proto,'q_faile_reward',function(){
		return this._q_faile_reward;
	});

	return Q_city;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门刷怪表
*/
//class datasets.bean.Q_shimen extends engine.base.data.Bean
var Q_shimen=(function(_super){
	function Q_shimen(){
		/**关卡 */
		this._q_level=0;
		/**怪物 */
		this._q_monster=null;
		Q_shimen.__super.call(this);
	}

	__class(Q_shimen,'datasets.bean.Q_shimen',_super);
	var __proto=Q_shimen.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_monster=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_monster',function(){
		return this._q_monster;
	});

	return Q_shimen;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*兑换
*/
//class datasets.bean.Q_duihuan extends engine.base.data.Bean
var Q_duihuan=(function(_super){
	function Q_duihuan(){
		/**唯一ID */
		this._q_id=0;
		/**兑换类型 */
		this._q_type=0;
		/**消耗道具 */
		this._q_src=null;
		/**获得道具 */
		this._q_dst=null;
		Q_duihuan.__super.call(this);
	}

	__class(Q_duihuan,'datasets.bean.Q_duihuan',_super);
	var __proto=Q_duihuan.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_src=this.readString(_buf);
		this._q_dst=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_src',function(){
		return this._q_src;
	});

	__getset(0,__proto,'q_dst',function(){
		return this._q_dst;
	});

	return Q_duihuan;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*条件推送表
*/
//class datasets.bean.Q_tuisong extends engine.base.data.Bean
var Q_tuisong=(function(_super){
	function Q_tuisong(){
		/**指引id */
		this._q_id=0;
		/**类型 */
		this._q_type=0;
		/**条件与类型对应type为1时表示当前第几关 */
		this._q_cond=null;
		/**新功能开放表上的id */
		this._q_funcid=0;
		/**描述内容 */
		this._q_desc=null;
		/**0表示当前登录只提示一次，1只要满足条件就会提示 */
		this._q_repeat=0;
		/**特殊情况额外添加参数 */
		this._q_parm=null;
		Q_tuisong.__super.call(this);
	}

	__class(Q_tuisong,'datasets.bean.Q_tuisong',_super);
	var __proto=Q_tuisong.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_cond=this.readString(_buf);
		this._q_funcid=this.readInt(_buf);
		this._q_desc=this.readString(_buf);
		this._q_repeat=this.readInt(_buf);
		this._q_parm=this.readString(_buf);
	}

	__getset(0,__proto,'q_desc',function(){
		return this._q_desc;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_cond',function(){
		return this._q_cond;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_repeat',function(){
		return this._q_repeat;
	});

	__getset(0,__proto,'q_funcid',function(){
		return this._q_funcid;
	});

	__getset(0,__proto,'q_parm',function(){
		return this._q_parm;
	});

	return Q_tuisong;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物
*/
//class datasets.bean.Q_pet_level extends engine.base.data.Bean
var Q_pet_level=(function(_super){
	function Q_pet_level(){
		/**等级 */
		this._q_id=0;
		/**属性加成 */
		this._q_attribute=null;
		/**消耗道具 */
		this._q_cost=null;
		Q_pet_level.__super.call(this);
	}

	__class(Q_pet_level,'datasets.bean.Q_pet_level',_super);
	var __proto=Q_pet_level.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_pet_level;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.bean.Q_common_war_token_param extends engine.base.data.Bean
var Q_common_war_token_param=(function(_super){
	function Q_common_war_token_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_common_war_token_param.__super.call(this);
	}

	__class(Q_common_war_token_param,'datasets.bean.Q_common_war_token_param',_super);
	var __proto=Q_common_war_token_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_common_war_token_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值返利转盘
*/
//class datasets.bean.Q_recharge_turntable extends engine.base.data.Bean
var Q_recharge_turntable=(function(_super){
	function Q_recharge_turntable(){
		/**唯一id */
		this._q_id=0;
		/**需要达到的充值 */
		this._q_recharge_need=0;
		/**基础奖励刀币 */
		this._q_gold_base=0;
		/**倍率配置，[[万分比倍率,权重]] */
		this._q_multiple=null;
		Q_recharge_turntable.__super.call(this);
	}

	__class(Q_recharge_turntable,'datasets.bean.Q_recharge_turntable',_super);
	var __proto=Q_recharge_turntable.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_recharge_need=this.readInt(_buf);
		this._q_gold_base=this.readInt(_buf);
		this._q_multiple=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_multiple',function(){
		return this._q_multiple;
	});

	__getset(0,__proto,'q_gold_base',function(){
		return this._q_gold_base;
	});

	__getset(0,__proto,'q_recharge_need',function(){
		return this._q_recharge_need;
	});

	return Q_recharge_turntable;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*竞技场分段
*/
//class datasets.bean.Q_arena_segment extends engine.base.data.Bean
var Q_arena_segment=(function(_super){
	function Q_arena_segment(){
		/**段 */
		this._q_segment=0;
		/**名次min */
		this._q_rank_min=0;
		/**名次max */
		this._q_rank_max=0;
		/**排名奖励(通用奖励字符串)*/
		this._q_rank_prize=null;
		/**每日奖励(通用奖励字符串)*/
		this._q_daily_prize=null;
		Q_arena_segment.__super.call(this);
	}

	__class(Q_arena_segment,'datasets.bean.Q_arena_segment',_super);
	var __proto=Q_arena_segment.prototype;
	__proto.read=function(_buf){
		this._q_segment=this.readInt(_buf);
		this._q_rank_min=this.readInt(_buf);
		this._q_rank_max=this.readInt(_buf);
		this._q_rank_prize=this.readString(_buf);
		this._q_daily_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_rank_max',function(){
		return this._q_rank_max;
	});

	__getset(0,__proto,'q_segment',function(){
		return this._q_segment;
	});

	__getset(0,__proto,'q_rank_min',function(){
		return this._q_rank_min;
	});

	__getset(0,__proto,'q_rank_prize',function(){
		return this._q_rank_prize;
	});

	__getset(0,__proto,'q_daily_prize',function(){
		return this._q_daily_prize;
	});

	return Q_arena_segment;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*拍卖变量参数
*/
//class datasets.bean.Q_qunying_param extends engine.base.data.Bean
var Q_qunying_param=(function(_super){
	function Q_qunying_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_qunying_param.__super.call(this);
	}

	__class(Q_qunying_param,'datasets.bean.Q_qunying_param',_super);
	var __proto=Q_qunying_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_qunying_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会BOSS属性表
*/
//class datasets.bean.Q_guild_boss extends engine.base.data.Bean
var Q_guild_boss=(function(_super){
	function Q_guild_boss(){
		/**等级 */
		this._q_level=0;
		/**怪物 */
		this._q_monster=null;
		Q_guild_boss.__super.call(this);
	}

	__class(Q_guild_boss,'datasets.bean.Q_guild_boss',_super);
	var __proto=Q_guild_boss.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_monster=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_monster',function(){
		return this._q_monster;
	});

	return Q_guild_boss;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*成就类型
*/
//class datasets.bean.Q_achievement_type extends engine.base.data.Bean
var Q_achievement_type=(function(_super){
	function Q_achievement_type(){
		/**成就类型ID */
		this._q_id=0;
		/**成就名称 */
		this._q_name=null;
		/**点击前往跳转界面 (空点击无响应)*/
		this._q_jump=null;
		Q_achievement_type.__super.call(this);
	}

	__class(Q_achievement_type,'datasets.bean.Q_achievement_type',_super);
	var __proto=Q_achievement_type.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_jump=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_jump',function(){
		return this._q_jump;
	});

	return Q_achievement_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*组队副本参数
*/
//class datasets.bean.Q_multiple_dungeon_param extends engine.base.data.Bean
var Q_multiple_dungeon_param=(function(_super){
	function Q_multiple_dungeon_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_multiple_dungeon_param.__super.call(this);
	}

	__class(Q_multiple_dungeon_param,'datasets.bean.Q_multiple_dungeon_param',_super);
	var __proto=Q_multiple_dungeon_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_multiple_dungeon_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜参数
*/
//class datasets.bean.Q_rank_param extends engine.base.data.Bean
var Q_rank_param=(function(_super){
	function Q_rank_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_rank_param.__super.call(this);
	}

	__class(Q_rank_param,'datasets.bean.Q_rank_param',_super);
	var __proto=Q_rank_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_rank_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师等级表
*/
//class datasets.bean.Q_military_level extends engine.base.data.Bean
var Q_military_level=(function(_super){
	function Q_military_level(){
		/**等级 */
		this._q_level=0;
		/**属性 */
		this._q_attr=null;
		/**升级进度 */
		this._q_pro=0;
		Q_military_level.__super.call(this);
	}

	__class(Q_military_level,'datasets.bean.Q_military_level',_super);
	var __proto=Q_military_level.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_attr=this.readString(_buf);
		this._q_pro=this.readInt(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_pro',function(){
		return this._q_pro;
	});

	return Q_military_level;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_duanzao_master
*/
//class datasets.bean.Q_duanzao_master extends engine.base.data.Bean
var Q_duanzao_master=(function(_super){
	function Q_duanzao_master(){
		/**等级 */
		this._q_level=null;
		/**锻造类型 */
		this._q_type=0;
		/**基础属性 */
		this._q_attribute=null;
		Q_duanzao_master.__super.call(this);
	}

	__class(Q_duanzao_master,'datasets.bean.Q_duanzao_master',_super);
	var __proto=Q_duanzao_master.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_duanzao_master;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*寻宝参数
*/
//class datasets.bean.Q_treasure_param extends engine.base.data.Bean
var Q_treasure_param=(function(_super){
	function Q_treasure_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_treasure_param.__super.call(this);
	}

	__class(Q_treasure_param,'datasets.bean.Q_treasure_param',_super);
	var __proto=Q_treasure_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_treasure_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店
*/
//class datasets.bean.Q_shop extends engine.base.data.Bean
var Q_shop=(function(_super){
	function Q_shop(){
		/**商品唯一ID */
		this._q_id=0;
		/**神秘商店是否特殊提示 */
		this._q_mystical_notice=0;
		Q_shop.__super.call(this);
	}

	__class(Q_shop,'datasets.bean.Q_shop',_super);
	var __proto=Q_shop.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_mystical_notice=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_mystical_notice',function(){
		return this._q_mystical_notice;
	});

	return Q_shop;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能基本信息配置数据表
*/
//class datasets.bean.Q_skill_model extends engine.base.data.Bean
var Q_skill_model=(function(_super){
	function Q_skill_model(){
		/**技能编号 */
		this._q_skillID=0;
		/**最大等级 */
		this._q_max_level=0;
		/**激活条件,格式通用激活条件 */
		this._q_active_condition=null;
		/**技能名称 */
		this._q_skillName=null;
		/**技能类型(1_角色技能 2-怪物技能 3-洗练技能 4-武将主动技能 5-宠物通灵 6-宠物兽魂 20灵气，21法阵)*/
		this._q_group=0;
		/**职业 */
		this._q_job=0;
		/**0-主动 1-被动 */
		this._q_passive=0;
		/**是否显示在面板上 */
		this._q_show=0;
		/**技能面板上的文字描述 */
		this._q_description=null;
		/**特性描述 */
		this._text=null;
		/**前摇 */
		this._q_forward=0;
		/**后摇 */
		this._q_back=0;
		/**升级提示文字 */
		this._q_show_notice=null;
		/**技能图标ICON */
		this._q_icon=null;
		/**技能音效 */
		this._q_sound=0;
		/**施法特效编号 */
		this._q_use_effect=0;
		/**复杂特效显示数据 */
		this._q_compact_effect=null;
		/**升级所需道具公式,[[-1,"100+floor(level/10.0)*100"],["2000101","1+floor(level/10.0)"]] */
		this._q_upgrade_item=null;
		/**技能喊话，配置资源名称 */
		this._q_talk=0;
		/**技能喊话，配置资源名不走触发称 */
		this._q_talk2=0;
		/**技能品质 1绿2蓝3紫4橙5红 */
		this._q_quality=0;
		/**0跑过去 1跳过去 2闪过去 3远程 4不动 */
		this._q_action=0;
		/**显示公式["公式1","公式2","公式n"] */
		this._q_formula=null;
		/**属性加成公式[["1","level*10+5"],["1","level*10+5"]] */
		this._q_attribute=null;
		/**是否显示拖影 0否1是 */
		this._q_shadow=false;
		/**缩放倍数（0不缩放 15缩放1.5） */
		this._q_scale=0;
		/**区分技能是buff还是主动技能（0buff，1主动技能） */
		this._q_discriminate=0;
		/**技能战力，配置处特殊处理，不配置走正常流程 */
		this._q_fightNum=null;
		Q_skill_model.__super.call(this);
	}

	__class(Q_skill_model,'datasets.bean.Q_skill_model',_super);
	var __proto=Q_skill_model.prototype;
	__proto.read=function(_buf){
		this._q_skillID=this.readInt(_buf);
		this._q_max_level=this.readInt(_buf);
		this._q_active_condition=this.readString(_buf);
		this._q_skillName=this.readString(_buf);
		this._q_group=this.readInt(_buf);
		this._q_job=this.readInt(_buf);
		this._q_passive=this.readInt(_buf);
		this._q_show=this.readInt(_buf);
		this._q_description=this.readString(_buf);
		this._text=this.readString(_buf);
		this._q_forward=this.readInt(_buf);
		this._q_back=this.readInt(_buf);
		this._q_show_notice=this.readString(_buf);
		this._q_icon=this.readString(_buf);
		this._q_sound=this.readInt(_buf);
		this._q_use_effect=this.readInt(_buf);
		this._q_compact_effect=this.readString(_buf);
		this._q_upgrade_item=this.readString(_buf);
		this._q_talk=this.readInt(_buf);
		this._q_talk2=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_action=this.readInt(_buf);
		this._q_formula=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_shadow=this.readBoolean(_buf);
		this._q_scale=this.readInt(_buf);
		this._q_discriminate=this.readInt(_buf);
		this._q_fightNum=this.readString(_buf);
	}

	__getset(0,__proto,'q_skillID',function(){
		return this._q_skillID;
	});

	__getset(0,__proto,'q_max_level',function(){
		return this._q_max_level;
	});

	__getset(0,__proto,'q_skillName',function(){
		return this._q_skillName;
	});

	__getset(0,__proto,'q_active_condition',function(){
		return this._q_active_condition;
	});

	__getset(0,__proto,'q_show',function(){
		return this._q_show;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	__getset(0,__proto,'q_job',function(){
		return this._q_job;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_passive',function(){
		return this._q_passive;
	});

	__getset(0,__proto,'q_description',function(){
		return this._q_description;
	});

	__getset(0,__proto,'text',function(){
		return this._text;
	});

	__getset(0,__proto,'q_forward',function(){
		return this._q_forward;
	});

	__getset(0,__proto,'q_back',function(){
		return this._q_back;
	});

	__getset(0,__proto,'q_show_notice',function(){
		return this._q_show_notice;
	});

	__getset(0,__proto,'q_icon',function(){
		return this._q_icon;
	});

	__getset(0,__proto,'q_sound',function(){
		return this._q_sound;
	});

	__getset(0,__proto,'q_use_effect',function(){
		return this._q_use_effect;
	});

	__getset(0,__proto,'q_compact_effect',function(){
		return this._q_compact_effect;
	});

	__getset(0,__proto,'q_upgrade_item',function(){
		return this._q_upgrade_item;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_talk',function(){
		return this._q_talk;
	});

	__getset(0,__proto,'q_talk2',function(){
		return this._q_talk2;
	});

	__getset(0,__proto,'q_fightNum',function(){
		return this._q_fightNum;
	});

	__getset(0,__proto,'q_action',function(){
		return this._q_action;
	});

	__getset(0,__proto,'q_formula',function(){
		return this._q_formula;
	});

	__getset(0,__proto,'q_shadow',function(){
		return this._q_shadow;
	});

	__getset(0,__proto,'q_scale',function(){
		return this._q_scale;
	});

	__getset(0,__proto,'q_discriminate',function(){
		return this._q_discriminate;
	});

	return Q_skill_model;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体装备套装属性
*/
//class datasets.bean.Q_fit_equipment_group extends engine.base.data.Bean
var Q_fit_equipment_group=(function(_super){
	function Q_fit_equipment_group(){
		/**q_id */
		this._q_id=0;
		/**所需道具id */
		this._q_item=null;
		/**名称 */
		this._q_name=null;
		/**套装属性 */
		this._q_attribute=null;
		Q_fit_equipment_group.__super.call(this);
	}

	__class(Q_fit_equipment_group,'datasets.bean.Q_fit_equipment_group',_super);
	var __proto=Q_fit_equipment_group.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_item=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_fit_equipment_group;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*词条
*/
//class datasets.bean.Q_entry extends engine.base.data.Bean
var Q_entry=(function(_super){
	function Q_entry(){
		/**词条ID */
		this._q_id=0;
		/**适用部位 */
		this._q_type=null;
		/**最大等级 */
		this._q_max_level=0;
		/**词条名称 */
		this._q_name=null;
		/**技能面板上的文字描述1 */
		this._q_description1=null;
		/**属性最小值显示公式 */
		this._q_formula_Nummin=null;
		/**属性最大值显示公式 */
		this._q_formula_Nummax=null;
		/**区间部分 */
		this._q_part=0;
		/**每个区间由小到大的权重 */
		this._q_weight=null;
		/**升级所需经验 */
		this._q_exp=null;
		/**词条升级（激活）消耗道具id */
		this._q_word=0;
		/**神铸消耗 */
		this._q_consume=null;
		/**对应技能表ID */
		this._q_skill_id=0;
		Q_entry.__super.call(this);
	}

	__class(Q_entry,'datasets.bean.Q_entry',_super);
	var __proto=Q_entry.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readString(_buf);
		this._q_max_level=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_description1=this.readString(_buf);
		this._q_formula_Nummin=this.readString(_buf);
		this._q_formula_Nummax=this.readString(_buf);
		this._q_part=this.readInt(_buf);
		this._q_weight=this.readString(_buf);
		this._q_exp=this.readString(_buf);
		this._q_word=this.readInt(_buf);
		this._q_consume=this.readString(_buf);
		this._q_skill_id=this.readInt(_buf);
	}

	__getset(0,__proto,'q_formula_Nummax',function(){
		return this._q_formula_Nummax;
	});

	__getset(0,__proto,'q_description1',function(){
		return this._q_description1;
	});

	__getset(0,__proto,'q_max_level',function(){
		return this._q_max_level;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_formula_Nummin',function(){
		return this._q_formula_Nummin;
	});

	__getset(0,__proto,'q_part',function(){
		return this._q_part;
	});

	__getset(0,__proto,'q_weight',function(){
		return this._q_weight;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_word',function(){
		return this._q_word;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_skill_id',function(){
		return this._q_skill_id;
	});

	return Q_entry;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能参数
*/
//class datasets.bean.Q_skill_param extends engine.base.data.Bean
var Q_skill_param=(function(_super){
	function Q_skill_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_skill_param.__super.call(this);
	}

	__class(Q_skill_param,'datasets.bean.Q_skill_param',_super);
	var __proto=Q_skill_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_skill_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*器魂数据库
*/
//class datasets.bean.Q_gequip_soul extends engine.base.data.Bean
var Q_gequip_soul=(function(_super){
	function Q_gequip_soul(){
		/**序号 */
		this._q_id=0;
		/**部位类型 */
		this._q_type=0;
		/**器魂等级上限 */
		this._q_level=0;
		/**器魂属性 */
		this._q_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**消耗公式 */
		this._q_cost=null;
		/**额外属性公式 */
		this._q_buff_id=null;
		/**激活所需道具 [id,数量] */
		this._q_item=null;
		Q_gequip_soul.__super.call(this);
	}

	__class(Q_gequip_soul,'datasets.bean.Q_gequip_soul',_super);
	var __proto=Q_gequip_soul.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_buff_id=this.readString(_buf);
		this._q_item=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_buff_id',function(){
		return this._q_buff_id;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	return Q_gequip_soul;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*注灵数据库
*/
//class datasets.bean.Q_gequip_spirit extends engine.base.data.Bean
var Q_gequip_spirit=(function(_super){
	function Q_gequip_spirit(){
		/**序号 */
		this._q_id=0;
		/**部位类型 */
		this._q_type=0;
		/**注灵等级上限 */
		this._q_level=0;
		/**注灵属性 */
		this._q_attr=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**注灵进度上限 */
		this._q_max_exp=0;
		/**单次注灵增加进度 */
		this._q_once_exp=0;
		/**成功几率 {最低注灵进度,"注灵成功率公式"}exp:当前注灵进度 max:注灵进度上限 需要达到最低注灵进度才会有成功几率 */
		this._q_success=null;
		Q_gequip_spirit.__super.call(this);
	}

	__class(Q_gequip_spirit,'datasets.bean.Q_gequip_spirit',_super);
	var __proto=Q_gequip_spirit.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_attr=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_max_exp=this.readInt(_buf);
		this._q_once_exp=this.readInt(_buf);
		this._q_success=this.readString(_buf);
	}

	__getset(0,__proto,'q_success',function(){
		return this._q_success;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_max_exp',function(){
		return this._q_max_exp;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_once_exp',function(){
		return this._q_once_exp;
	});

	return Q_gequip_spirit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*团购表
*/
//class datasets.bean.Q_tuangou extends engine.base.data.Bean
var Q_tuangou=(function(_super){
	function Q_tuangou(){
		/**唯一ID */
		this._q_id=0;
		/**所需人数 */
		this._q_num=0;
		/**金额(RMB)*/
		this._q_rmb=0;
		/**团购活动名称 */
		this._q_name=null;
		/**奖励 */
		this._q_prize=null;
		Q_tuangou.__super.call(this);
	}

	__class(Q_tuangou,'datasets.bean.Q_tuangou',_super);
	var __proto=Q_tuangou.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_num=this.readInt(_buf);
		this._q_rmb=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_num',function(){
		return this._q_num;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_rmb',function(){
		return this._q_rmb;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	return Q_tuangou;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*神将现世配置表
*/
//class datasets.bean.Q_god_appear extends engine.base.data.Bean
var Q_god_appear=(function(_super){
	function Q_god_appear(){
		/**唯一ID */
		this._q_id=0;
		/**轮数 */
		this._q_cfg_index=0;
		/**获取条件（1、[消费刀币，刀币数量] 2、[充值，金额]） */
		this._q_condition=null;
		/**奖励 */
		this._q_reward=null;
		Q_god_appear.__super.call(this);
	}

	__class(Q_god_appear,'datasets.bean.Q_god_appear',_super);
	var __proto=Q_god_appear.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cfg_index=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_cfg_index',function(){
		return this._q_cfg_index;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_god_appear;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*团购参数
*/
//class datasets.bean.Q_tuangou_param extends engine.base.data.Bean
var Q_tuangou_param=(function(_super){
	function Q_tuangou_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_tuangou_param.__super.call(this);
	}

	__class(Q_tuangou_param,'datasets.bean.Q_tuangou_param',_super);
	var __proto=Q_tuangou_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_tuangou_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备打造
*/
//class datasets.bean.Q_equip extends engine.base.data.Bean
var Q_equip=(function(_super){
	function Q_equip(){
		/**装备ID */
		this._q_id=0;
		/**打造消耗 */
		this._q_consume=null;
		/**合成获得物品 */
		this._q_get=null;
		/**打造公告 messageID */
		this._q_notice=0;
		Q_equip.__super.call(this);
	}

	__class(Q_equip,'datasets.bean.Q_equip',_super);
	var __proto=Q_equip.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_consume=this.readString(_buf);
		this._q_get=this.readString(_buf);
		this._q_notice=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_get',function(){
		return this._q_get;
	});

	return Q_equip;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合成
*/
//class datasets.bean.Q_compose extends engine.base.data.Bean
var Q_compose=(function(_super){
	function Q_compose(){
		/**合成序号 */
		this._q_id=0;
		/**合成分组 */
		this._q_group=0;
		/**分组名称 */
		this._q_group_name=null;
		/**合成名称 */
		this._q_name=null;
		/**合成消耗 */
		this._q_consume=null;
		/**合成获得物品 */
		this._q_get=null;
		/**合成公告 messageID */
		this._q_notice=0;
		Q_compose.__super.call(this);
	}

	__class(Q_compose,'datasets.bean.Q_compose',_super);
	var __proto=Q_compose.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_group=this.readInt(_buf);
		this._q_group_name=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_consume=this.readString(_buf);
		this._q_get=this.readString(_buf);
		this._q_notice=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	__getset(0,__proto,'q_group_name',function(){
		return this._q_group_name;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_get',function(){
		return this._q_get;
	});

	return Q_compose;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*技能无视防御伤害数据库
*/
//class datasets.bean.Q_effect_model extends engine.base.data.Bean
var Q_effect_model=(function(_super){
	function Q_effect_model(){
		/**特效编号 */
		this._q_effectid=0;
		/**特效数据 4起手 0命中 */
		this._q_effect=null;
		/**针对玩家技能：客户端同时允许出现的特效数量（0不限制） */
		this._q_max_count=0;
		Q_effect_model.__super.call(this);
	}

	__class(Q_effect_model,'datasets.bean.Q_effect_model',_super);
	var __proto=Q_effect_model.prototype;
	__proto.read=function(_buf){
		this._q_effectid=this.readInt(_buf);
		this._q_effect=this.readString(_buf);
		this._q_max_count=this.readInt(_buf);
	}

	__getset(0,__proto,'q_max_count',function(){
		return this._q_max_count;
	});

	__getset(0,__proto,'q_effectid',function(){
		return this._q_effectid;
	});

	__getset(0,__proto,'q_effect',function(){
		return this._q_effect;
	});

	return Q_effect_model;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*地图数据类
*/
//class datasets.bean.Q_map extends engine.base.data.Bean
var Q_map=(function(_super){
	function Q_map(){
		/**地图ID */
		this._q_map_id=0;
		/**地图中文名 */
		this._q_map_name=null;
		/**地图资源ID */
		this._q_mapresid=0;
		/**进入坐标点 */
		this._q_x=0;
		/**进入坐标点 */
		this._q_y=0;
		/**自动寻路点 */
		this._q_paths=null;
		/**师门任务刷怪坐标 */
		this._q_optimization=null;
		/**音乐关联（音乐资源编号_播放完后空闲秒数;音乐资源编号_播放完后空闲秒数)*/
		this._q_music=null;
		/**地图背景音乐类型（0城市 1热血 2抒情 3野外 4阴森 5新手村 6主城） */
		this._q_BGM_type=0;
		Q_map.__super.call(this);
	}

	__class(Q_map,'datasets.bean.Q_map',_super);
	var __proto=Q_map.prototype;
	__proto.read=function(_buf){
		this._q_map_id=this.readInt(_buf);
		this._q_map_name=this.readString(_buf);
		this._q_mapresid=this.readInt(_buf);
		this._q_x=this.readInt(_buf);
		this._q_y=this.readInt(_buf);
		this._q_paths=this.readString(_buf);
		this._q_optimization=this.readString(_buf);
		this._q_music=this.readString(_buf);
		this._q_BGM_type=this.readInt(_buf);
	}

	__getset(0,__proto,'q_paths',function(){
		return this._q_paths;
	});

	__getset(0,__proto,'q_x',function(){
		return this._q_x;
	});

	__getset(0,__proto,'q_map_id',function(){
		return this._q_map_id;
	});

	__getset(0,__proto,'q_map_name',function(){
		return this._q_map_name;
	});

	__getset(0,__proto,'q_mapresid',function(){
		return this._q_mapresid;
	});

	__getset(0,__proto,'q_music',function(){
		return this._q_music;
	});

	__getset(0,__proto,'q_optimization',function(){
		return this._q_optimization;
	});

	__getset(0,__proto,'q_y',function(){
		return this._q_y;
	});

	__getset(0,__proto,'q_BGM_type',function(){
		return this._q_BGM_type;
	});

	return Q_map;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备参数
*/
//class datasets.bean.Q_equip_param extends engine.base.data.Bean
var Q_equip_param=(function(_super){
	function Q_equip_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_equip_param.__super.call(this);
	}

	__class(Q_equip_param,'datasets.bean.Q_equip_param',_super);
	var __proto=Q_equip_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_equip_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会参数
*/
//class datasets.bean.Q_guild_param extends engine.base.data.Bean
var Q_guild_param=(function(_super){
	function Q_guild_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_guild_param.__super.call(this);
	}

	__class(Q_guild_param,'datasets.bean.Q_guild_param',_super);
	var __proto=Q_guild_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_guild_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*锻造
*/
//class datasets.bean.Q_duanzao extends engine.base.data.Bean
var Q_duanzao=(function(_super){
	function Q_duanzao(){
		/**锻造类型 */
		this._q_type=0;
		/**锻造参数 */
		this._q_param=null;
		/**装备部位 */
		this._q_grid=0;
		/**等级上限 */
		this._q_level_max=0;
		/**基础属性 */
		this._q_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**消耗公式 */
		this._q_cost=null;
		Q_duanzao.__super.call(this);
	}

	__class(Q_duanzao,'datasets.bean.Q_duanzao',_super);
	var __proto=Q_duanzao.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_param=this.readString(_buf);
		this._q_grid=this.readInt(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	__getset(0,__proto,'q_grid',function(){
		return this._q_grid;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_duanzao;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*图鉴道具类型配置
*/
//class datasets.bean.Q_handbook extends engine.base.data.Bean
var Q_handbook=(function(_super){
	function Q_handbook(){
		/**图鉴id */
		this._q_id=0;
		/**类型 1图鉴 2战魂 */
		this._q_type=0;
		/**图片id */
		this._q_pictrue=0;
		/**激活所需道具id */
		this._q_item=null;
		/**图鉴所在阵营 0群雄1魏2蜀3吴 0个人1全民2野外3至尊 */
		this._q_camp=0;
		/**图鉴名字 */
		this._q_name=null;
		/**升星消耗材料 */
		this._q_consume=null;
		/**基础属性 */
		this._q_attribute=null;
		/**升星属性 */
		this._q_star_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**物品天生的名字颜色（0白色，1绿色，2蓝色，3紫色，4橙色，5红色，） */
		this._q_quality=0;
		/**星级上限 */
		this._q_level_max=0;
		Q_handbook.__super.call(this);
	}

	__class(Q_handbook,'datasets.bean.Q_handbook',_super);
	var __proto=Q_handbook.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_pictrue=this.readInt(_buf);
		this._q_item=this.readString(_buf);
		this._q_camp=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_consume=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_star_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_level_max=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_pictrue',function(){
		return this._q_pictrue;
	});

	__getset(0,__proto,'q_star_attribute',function(){
		return this._q_star_attribute;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_camp',function(){
		return this._q_camp;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	return Q_handbook;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.bean.Q_hongyan_param extends engine.base.data.Bean
var Q_hongyan_param=(function(_super){
	function Q_hongyan_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_hongyan_param.__super.call(this);
	}

	__class(Q_hongyan_param,'datasets.bean.Q_hongyan_param',_super);
	var __proto=Q_hongyan_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_hongyan_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*秘籍参数
*/
//class datasets.bean.Q_miji_param extends engine.base.data.Bean
var Q_miji_param=(function(_super){
	function Q_miji_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_miji_param.__super.call(this);
	}

	__class(Q_miji_param,'datasets.bean.Q_miji_param',_super);
	var __proto=Q_miji_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_miji_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战纹参数
*/
//class datasets.bean.Q_zhanwen_param extends engine.base.data.Bean
var Q_zhanwen_param=(function(_super){
	function Q_zhanwen_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_zhanwen_param.__super.call(this);
	}

	__class(Q_zhanwen_param,'datasets.bean.Q_zhanwen_param',_super);
	var __proto=Q_zhanwen_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_zhanwen_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*点将转盘配置表
*/
//class datasets.bean.Q_act_wujiang_turntable extends engine.base.data.Bean
var Q_act_wujiang_turntable=(function(_super){
	function Q_act_wujiang_turntable(){
		/**唯一id */
		this._q_id=0;
		/**类型 */
		this._q_type=0;
		/**奖励,[道具id,数量] */
		this._q_reward=null;
		/***/
		this._q_cfg_index=0;
		Q_act_wujiang_turntable.__super.call(this);
	}

	__class(Q_act_wujiang_turntable,'datasets.bean.Q_act_wujiang_turntable',_super);
	var __proto=Q_act_wujiang_turntable.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_cfg_index=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_cfg_index',function(){
		return this._q_cfg_index;
	});

	return Q_act_wujiang_turntable;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会战积分奖励
*/
//class datasets.bean.Q_guildwar_jifen extends engine.base.data.Bean
var Q_guildwar_jifen=(function(_super){
	function Q_guildwar_jifen(){
		/**序号 */
		this._q_id=0;
		/**所需积分 */
		this._q_jifen=0;
		/**奖励字符串 */
		this._q_reward=null;
		Q_guildwar_jifen.__super.call(this);
	}

	__class(Q_guildwar_jifen,'datasets.bean.Q_guildwar_jifen',_super);
	var __proto=Q_guildwar_jifen.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_jifen=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_jifen',function(){
		return this._q_jifen;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_guildwar_jifen;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*福利大厅参数
*/
//class datasets.bean.Q_fuli_param extends engine.base.data.Bean
var Q_fuli_param=(function(_super){
	function Q_fuli_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_fuli_param.__super.call(this);
	}

	__class(Q_fuli_param,'datasets.bean.Q_fuli_param',_super);
	var __proto=Q_fuli_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_fuli_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师天赋数据库
*/
//class datasets.bean.Q_military_innate extends engine.base.data.Bean
var Q_military_innate=(function(_super){
	function Q_military_innate(){
		/**经脉点等级 */
		this._q_level=0;
		/**天赋阶数 */
		this._q_jieshu=0;
		/**经脉名称 */
		this._q_channelName=null;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		Q_military_innate.__super.call(this);
	}

	__class(Q_military_innate,'datasets.bean.Q_military_innate',_super);
	var __proto=Q_military_innate.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_jieshu=this.readInt(_buf);
		this._q_channelName=this.readString(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_channelName',function(){
		return this._q_channelName;
	});

	__getset(0,__proto,'q_jieshu',function(){
		return this._q_jieshu;
	});

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	return Q_military_innate;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*推送配置表
*/
//class datasets.bean.Q_push extends engine.base.data.Bean
var Q_push=(function(_super){
	function Q_push(){
		/**唯一ID */
		this._q_id=0;
		/**面板类型 */
		this._q_panel_type=0;
		/**出现的位子 */
		this._q_seat=0;
		/**托盘上展示(1怪物2武器3翅膀4坐骑5角色6称号7道具8守护9UI特效-1图片资源10宝物)*/
		this._q_show=null;
		/**展示名称 */
		this._q_name=null;
		/**物品框ID */
		this._q_item=null;
		/**美术字资源ID */
		this._q_art=0;
		/**跳转功能ID */
		this._q_jump=0;
		/**推送分组(1任务，2运营活动，3通用战令，4特殊处理） */
		this._q_grouping=null;
		/**消失条件(1任务，2运营活动，3通用战令） */
		this._q_disappear=0;
		Q_push.__super.call(this);
	}

	__class(Q_push,'datasets.bean.Q_push',_super);
	var __proto=Q_push.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_panel_type=this.readInt(_buf);
		this._q_seat=this.readInt(_buf);
		this._q_show=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_item=this.readString(_buf);
		this._q_art=this.readInt(_buf);
		this._q_jump=this.readInt(_buf);
		this._q_grouping=this.readString(_buf);
		this._q_disappear=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_seat',function(){
		return this._q_seat;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	__getset(0,__proto,'q_panel_type',function(){
		return this._q_panel_type;
	});

	__getset(0,__proto,'q_grouping',function(){
		return this._q_grouping;
	});

	__getset(0,__proto,'q_show',function(){
		return this._q_show;
	});

	__getset(0,__proto,'q_art',function(){
		return this._q_art;
	});

	__getset(0,__proto,'q_jump',function(){
		return this._q_jump;
	});

	__getset(0,__proto,'q_disappear',function(){
		return this._q_disappear;
	});

	return Q_push;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会兑换
*/
//class datasets.bean.Q_guild_exchange extends engine.base.data.Bean
var Q_guild_exchange=(function(_super){
	function Q_guild_exchange(){
		/**序列 */
		this._q_id=0;
		/**兑换显示物品 */
		this._q_exchange_itemshow=null;
		/**需要物品 */
		this._q_cost=null;
		/**随机权重 */
		this._q_rand=0;
		Q_guild_exchange.__super.call(this);
	}

	__class(Q_guild_exchange,'datasets.bean.Q_guild_exchange',_super);
	var __proto=Q_guild_exchange.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_exchange_itemshow=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_rand=this.readInt(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_exchange_itemshow',function(){
		return this._q_exchange_itemshow;
	});

	__getset(0,__proto,'q_rand',function(){
		return this._q_rand;
	});

	return Q_guild_exchange;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*铸纹
*/
//class datasets.bean.Q_quench extends engine.base.data.Bean
var Q_quench=(function(_super){
	function Q_quench(){
		/**序号 */
		this._q_id=0;
		/**部位 */
		this._q_type=0;
		/**阶数 */
		this._q_order=0;
		/**星级 */
		this._q_star=0;
		/**铸纹名称 */
		this._q_name=null;
		/**界面资源 */
		this._q_resouce=0;
		/**装备tips资源 */
		this._q_resouce_tip=0;
		/**属性 */
		this._q_attribute=null;
		/**技能 */
		this._q_skill=null;
		/**消耗材料 */
		this._q_cost=null;
		/**公告 */
		this._q_notice=null;
		Q_quench.__super.call(this);
	}

	__class(Q_quench,'datasets.bean.Q_quench',_super);
	var __proto=Q_quench.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_order=this.readInt(_buf);
		this._q_star=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_resouce=this.readInt(_buf);
		this._q_resouce_tip=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_skill=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_notice=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_resouce',function(){
		return this._q_resouce;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_resouce_tip',function(){
		return this._q_resouce_tip;
	});

	__getset(0,__proto,'q_order',function(){
		return this._q_order;
	});

	__getset(0,__proto,'q_star',function(){
		return this._q_star;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	return Q_quench;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*试炼之塔参数
*/
//class datasets.bean.Q_tower_param extends engine.base.data.Bean
var Q_tower_param=(function(_super){
	function Q_tower_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_tower_param.__super.call(this);
	}

	__class(Q_tower_param,'datasets.bean.Q_tower_param',_super);
	var __proto=Q_tower_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_tower_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*地图类型
*/
//class datasets.bean.Q_map_type extends engine.base.data.Bean
var Q_map_type=(function(_super){
	function Q_map_type(){
		/**类型 */
		this._q_type=0;
		/**是否允许自动爆发 */
		this._q_auto_baofa=false;
		Q_map_type.__super.call(this);
	}

	__class(Q_map_type,'datasets.bean.Q_map_type',_super);
	var __proto=Q_map_type.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_auto_baofa=this.readBoolean(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_auto_baofa',function(){
		return this._q_auto_baofa;
	});

	return Q_map_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*背景音乐
*/
//class datasets.bean.Q_BGM extends engine.base.data.Bean
var Q_BGM=(function(_super){
	function Q_BGM(){
		/**音乐ID */
		this._q_id=0;
		/**类型(0城市 1热血战斗 2抒情唯美 3野外 4阴森 5新手村 6主城） */
		this._q_type=0;
		/**资源编号 */
		this._q_resource=null;
		/**默认音量 */
		this._q_default_volume=0;
		/**最大音量 */
		this._q_maximum_volume=0;
		/**最小音量 */
		this._q_minimum_volume=0;
		/**音量缓动提升时间（毫秒） */
		this._q_volume_slow_lift_time=0;
		/**循环播放间隔时间（毫秒） */
		this._q_loop_playback_interval=0;
		Q_BGM.__super.call(this);
	}

	__class(Q_BGM,'datasets.bean.Q_BGM',_super);
	var __proto=Q_BGM.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_resource=this.readString(_buf);
		this._q_default_volume=this.readInt(_buf);
		this._q_maximum_volume=this.readInt(_buf);
		this._q_minimum_volume=this.readInt(_buf);
		this._q_volume_slow_lift_time=this.readInt(_buf);
		this._q_loop_playback_interval=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_default_volume',function(){
		return this._q_default_volume;
	});

	__getset(0,__proto,'q_resource',function(){
		return this._q_resource;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_maximum_volume',function(){
		return this._q_maximum_volume;
	});

	__getset(0,__proto,'q_minimum_volume',function(){
		return this._q_minimum_volume;
	});

	__getset(0,__proto,'q_volume_slow_lift_time',function(){
		return this._q_volume_slow_lift_time;
	});

	__getset(0,__proto,'q_loop_playback_interval',function(){
		return this._q_loop_playback_interval;
	});

	return Q_BGM;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战斗日志
*/
//class datasets.bean.Q_fight_log extends engine.base.data.Bean
var Q_fight_log=(function(_super){
	function Q_fight_log(){
		/**唯一ID */
		this._q_id=NaN;
		/**参数 */
		this._q_param=null;
		Q_fight_log.__super.call(this);
	}

	__class(Q_fight_log,'datasets.bean.Q_fight_log',_super);
	var __proto=Q_fight_log.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readNumber(_buf);
		this._q_param=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	return Q_fight_log;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*洗练
*/
//class datasets.bean.Q_xilian extends engine.base.data.Bean
var Q_xilian=(function(_super){
	function Q_xilian(){
		/**技能ID */
		this._q_skill=0;
		/**洗练类型 */
		this._q_type=0;
		Q_xilian.__super.call(this);
	}

	__class(Q_xilian,'datasets.bean.Q_xilian',_super);
	var __proto=Q_xilian.prototype;
	__proto.read=function(_buf){
		this._q_skill=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
	}

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	return Q_xilian;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本
*/
//class datasets.bean.Q_dungeon extends engine.base.data.Bean
var Q_dungeon=(function(_super){
	function Q_dungeon(){
		/**副本ID 1-5000挂机关卡 5001-6000材料副本 6001-7000个人BOSS副本 7001-8000全民BOSS副本 9001-9500至尊BOSS副本 9501-10000野外BOSS副本 10001-11000材料副本 11001-12000藏宝图爬塔副本 12001-13000通天塔爬塔副本 */
		this._q_id=0;
		/**副本名称 */
		this._q_name=null;
		/**跳过类型(0不可 1可以跳过） */
		this._q_skip_type=0;
		/**进入条件 */
		this._q_enter_condition=null;
		/**每日可挑战次数 */
		this._q_challenge_times_per_day=0;
		/**奖励展示 */
		this._q_prize_for_show=null;
		/**场景ID */
		this._q_scene_id=0;
		/**面板上展示的id */
		this._q_monster_show=0;
		/**扫荡条件(通用条件)*/
		this._q_saodang_condition=null;
		/**扫荡消耗 */
		this._q_saodang_cost=0;
		/**1关卡副本 2材料副本 3个人BOSS 4全民BOSS 5至尊BOSS 6野外BOSS */
		this._q_type=0;
		/**副本参数 */
		this._q_param=null;
		Q_dungeon.__super.call(this);
	}

	__class(Q_dungeon,'datasets.bean.Q_dungeon',_super);
	var __proto=Q_dungeon.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_skip_type=this.readInt(_buf);
		this._q_enter_condition=this.readString(_buf);
		this._q_challenge_times_per_day=this.readInt(_buf);
		this._q_prize_for_show=this.readString(_buf);
		this._q_scene_id=this.readInt(_buf);
		this._q_monster_show=this.readInt(_buf);
		this._q_saodang_condition=this.readString(_buf);
		this._q_saodang_cost=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_param=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_challenge_times_per_day',function(){
		return this._q_challenge_times_per_day;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_skip_type',function(){
		return this._q_skip_type;
	});

	__getset(0,__proto,'q_monster_show',function(){
		return this._q_monster_show;
	});

	__getset(0,__proto,'q_enter_condition',function(){
		return this._q_enter_condition;
	});

	__getset(0,__proto,'q_scene_id',function(){
		return this._q_scene_id;
	});

	__getset(0,__proto,'q_prize_for_show',function(){
		return this._q_prize_for_show;
	});

	__getset(0,__proto,'q_saodang_condition',function(){
		return this._q_saodang_condition;
	});

	__getset(0,__proto,'q_saodang_cost',function(){
		return this._q_saodang_cost;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	return Q_dungeon;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限定武将活动
*/
//class datasets.bean.Q_limit_wu_jiang extends engine.base.data.Bean
var Q_limit_wu_jiang=(function(_super){
	function Q_limit_wu_jiang(){
		/**序号 */
		this._q_id=0;
		/**道具id */
		this._q_itemid=0;
		/**单人数量上限 */
		this._q_userNum=0;
		/**单次min */
		this._q_onceMin=0;
		/**单次max */
		this._q_onceMax=0;
		/**权重 */
		this._q_weight=0;
		Q_limit_wu_jiang.__super.call(this);
	}

	__class(Q_limit_wu_jiang,'datasets.bean.Q_limit_wu_jiang',_super);
	var __proto=Q_limit_wu_jiang.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_itemid=this.readInt(_buf);
		this._q_userNum=this.readInt(_buf);
		this._q_onceMin=this.readInt(_buf);
		this._q_onceMax=this.readInt(_buf);
		this._q_weight=this.readInt(_buf);
	}

	__getset(0,__proto,'q_onceMin',function(){
		return this._q_onceMin;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_itemid',function(){
		return this._q_itemid;
	});

	__getset(0,__proto,'q_onceMax',function(){
		return this._q_onceMax;
	});

	__getset(0,__proto,'q_userNum',function(){
		return this._q_userNum;
	});

	__getset(0,__proto,'q_weight',function(){
		return this._q_weight;
	});

	return Q_limit_wu_jiang;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*系统拍卖上架表
*/
//class datasets.bean.Q_auction extends engine.base.data.Bean
var Q_auction=(function(_super){
	function Q_auction(){
		/**唯一ID */
		this._q_id=0;
		/**拍卖类型 1系统拍卖 2帮会拍卖 3个人拍卖 */
		this._q_shop_type=0;
		/**上架概率 */
		this._q_probability=0;
		/**道具ID */
		this._q_goods=0;
		/**道具数量 */
		this._q_goods_num=0;
		/**消耗货币类型(1元宝,2铜币,13战纹碎片)*/
		this._q_cost_type=0;
		/**起拍元宝 */
		this._q_cost_num=0;
		/**加价元宝 */
		this._q_markup_num=0;
		/**一口价元宝 */
		this._q_price=0;
		/**展示时间，单位秒 */
		this._q_show_time=0;
		/**竞价时间，单位秒 */
		this._q_bid_time=0;
		/**抢拍时间，单位秒 */
		this._q_take_time=0;
		Q_auction.__super.call(this);
	}

	__class(Q_auction,'datasets.bean.Q_auction',_super);
	var __proto=Q_auction.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_shop_type=this.readInt(_buf);
		this._q_probability=this.readInt(_buf);
		this._q_goods=this.readInt(_buf);
		this._q_goods_num=this.readInt(_buf);
		this._q_cost_type=this.readInt(_buf);
		this._q_cost_num=this.readInt(_buf);
		this._q_markup_num=this.readInt(_buf);
		this._q_price=this.readInt(_buf);
		this._q_show_time=this.readInt(_buf);
		this._q_bid_time=this.readInt(_buf);
		this._q_take_time=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_goods_num',function(){
		return this._q_goods_num;
	});

	__getset(0,__proto,'q_price',function(){
		return this._q_price;
	});

	__getset(0,__proto,'q_shop_type',function(){
		return this._q_shop_type;
	});

	__getset(0,__proto,'q_probability',function(){
		return this._q_probability;
	});

	__getset(0,__proto,'q_goods',function(){
		return this._q_goods;
	});

	__getset(0,__proto,'q_cost_type',function(){
		return this._q_cost_type;
	});

	__getset(0,__proto,'q_cost_num',function(){
		return this._q_cost_num;
	});

	__getset(0,__proto,'q_markup_num',function(){
		return this._q_markup_num;
	});

	__getset(0,__proto,'q_show_time',function(){
		return this._q_show_time;
	});

	__getset(0,__proto,'q_bid_time',function(){
		return this._q_bid_time;
	});

	__getset(0,__proto,'q_take_time',function(){
		return this._q_take_time;
	});

	return Q_auction;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*押镖
*/
//class datasets.bean.Q_payload extends engine.base.data.Bean
var Q_payload=(function(_super){
	function Q_payload(){
		/**矿工等级 */
		this._q_id=0;
		/**段位名称 */
		this._q_name=null;
		/**镖车模型 */
		this._q_model=0;
		/**挖矿时间(ms)*/
		this._q_time=0;
		/**奖励可被掠夺(通用奖励字符串)*/
		this._q_prize=null;
		/**每次掠夺奖励 */
		this._q_lveduo=null;
		/**成功率 */
		this._q_next_prop=0;
		/**是否广播 */
		this._q_broadcast=null;
		Q_payload.__super.call(this);
	}

	__class(Q_payload,'datasets.bean.Q_payload',_super);
	var __proto=Q_payload.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_model=this.readInt(_buf);
		this._q_time=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
		this._q_lveduo=this.readString(_buf);
		this._q_next_prop=this.readInt(_buf);
		this._q_broadcast=this.readString(_buf);
	}

	__getset(0,__proto,'q_next_prop',function(){
		return this._q_next_prop;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_lveduo',function(){
		return this._q_lveduo;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_broadcast',function(){
		return this._q_broadcast;
	});

	__getset(0,__proto,'q_time',function(){
		return this._q_time;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	return Q_payload;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天排名奖励
*/
//class datasets.bean.Q_jiuchongtian_rank_times extends engine.base.data.Bean
var Q_jiuchongtian_rank_times=(function(_super){
	function Q_jiuchongtian_rank_times(){
		/**排名(小于等于该排名时获取的奖励,必须从小到大)*/
		this._q_rank=0;
		/**奖励 */
		this._q_prize=null;
		Q_jiuchongtian_rank_times.__super.call(this);
	}

	__class(Q_jiuchongtian_rank_times,'datasets.bean.Q_jiuchongtian_rank_times',_super);
	var __proto=Q_jiuchongtian_rank_times.prototype;
	__proto.read=function(_buf){
		this._q_rank=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	return Q_jiuchongtian_rank_times;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*限时目标
*/
//class datasets.bean.Q_fuli extends engine.base.data.Bean
var Q_fuli=(function(_super){
	function Q_fuli(){
		/**ID */
		this._q_id=0;
		/**活动名称 */
		this._q_name=null;
		/**活动类型（1每日登陆 2福利签到 3百万元宝 4等级礼包 ） */
		this._q_type=0;
		/**领取条件 */
		this._q_condition=null;
		/**累计签到奖励 */
		this._q_reward=null;
		/**参数 */
		this._q_param=null;
		/***/
		this._q_icon=0;
		Q_fuli.__super.call(this);
	}

	__class(Q_fuli,'datasets.bean.Q_fuli',_super);
	var __proto=Q_fuli.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_param=this.readString(_buf);
		this._q_icon=this.readInt(_buf);
	}

	__getset(0,__proto,'q_icon',function(){
		return this._q_icon;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_fuli;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*背包参数
*/
//class datasets.bean.Q_packet_param extends engine.base.data.Bean
var Q_packet_param=(function(_super){
	function Q_packet_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_packet_param.__super.call(this);
	}

	__class(Q_packet_param,'datasets.bean.Q_packet_param',_super);
	var __proto=Q_packet_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_packet_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*摇钱树
*/
//class datasets.bean.Q_rollcoin extends engine.base.data.Bean
var Q_rollcoin=(function(_super){
	function Q_rollcoin(){
		/**兑换次数 */
		this._q_id=0;
		/**消耗元宝数量 */
		this._q_cost=0;
		/**兑换金币数量 */
		this._q_coin=0;
		/**额外奖励 */
		this._q_reward=null;
		/**加成信息(前端展示用，万分比） */
		this._q_coin_plus=0;
		Q_rollcoin.__super.call(this);
	}

	__class(Q_rollcoin,'datasets.bean.Q_rollcoin',_super);
	var __proto=Q_rollcoin.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cost=this.readInt(_buf);
		this._q_coin=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_coin_plus=this.readInt(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_coin',function(){
		return this._q_coin;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_coin_plus',function(){
		return this._q_coin_plus;
	});

	return Q_rollcoin;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*玄女强化
*/
//class datasets.bean.Q_xuannv_qianghua extends engine.base.data.Bean
var Q_xuannv_qianghua=(function(_super){
	function Q_xuannv_qianghua(){
		/**部位 */
		this._q_grid=0;
		/**等级上限 */
		this._q_level_max=0;
		/**基础属性 */
		this._q_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**消耗公式 */
		this._q_cost=null;
		Q_xuannv_qianghua.__super.call(this);
	}

	__class(Q_xuannv_qianghua,'datasets.bean.Q_xuannv_qianghua',_super);
	var __proto=Q_xuannv_qianghua.prototype;
	__proto.read=function(_buf){
		this._q_grid=this.readInt(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_grid',function(){
		return this._q_grid;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	return Q_xuannv_qianghua;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天周排名奖励
*/
//class datasets.bean.Q_jiuchongtian_rank_prize extends engine.base.data.Bean
var Q_jiuchongtian_rank_prize=(function(_super){
	function Q_jiuchongtian_rank_prize(){
		/**排名(小于等于该排名时获取的奖励,必须从小到大)*/
		this._q_rank=0;
		/**奖励 */
		this._q_prize=null;
		Q_jiuchongtian_rank_prize.__super.call(this);
	}

	__class(Q_jiuchongtian_rank_prize,'datasets.bean.Q_jiuchongtian_rank_prize',_super);
	var __proto=Q_jiuchongtian_rank_prize.prototype;
	__proto.read=function(_buf){
		this._q_rank=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	return Q_jiuchongtian_rank_prize;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*结婚全局
*/
//class datasets.bean.Q_weeding_param extends engine.base.data.Bean
var Q_weeding_param=(function(_super){
	function Q_weeding_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_weeding_param.__super.call(this);
	}

	__class(Q_weeding_param,'datasets.bean.Q_weeding_param',_super);
	var __proto=Q_weeding_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_weeding_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军师
*/
//class datasets.bean.Q_military extends engine.base.data.Bean
var Q_military=(function(_super){
	function Q_military(){
		/**军师id */
		this._q_id=0;
		/**默认名称 */
		this._q_name=null;
		/**声音对白（调用音效id） */
		this._q_sound=0;
		/**展示资源编号 */
		this._q_model=0;
		/**品质(白绿蓝紫橙红金0123456)*/
		this._q_quality=0;
		/**激活道具 */
		this._q_zizhi_item=0;
		/**主动技能ID */
		this._q_active_skill_id=0;
		/**被动技能id */
		this._q_passive_skill=null;
		/**被动技能上限 */
		this._q_passive_skill_num=0;
		/**基础属性加成 */
		this._q_base_attribute=null;
		/**品质基础属性 */
		this._q_zizhi_attribute=null;
		/**品质属性公式 */
		this._q_zizhi_attribute_formula=null;
		/**品质提升消耗 */
		this._q_zizhi_cost=null;
		/**军师对巡城时间缩短万分比 */
		this._q_city_time=0;
		/**军师巡城奖励 */
		this._q_city_reward=0;
		/**天命基础属性 */
		this._q_tianming_attribute=null;
		/**天命属性公式 */
		this._q_tianming_attribute_formula=null;
		/**天命等级上限 */
		this._q_tianming_level_max=0;
		/**天命升级进度 */
		this._q_tianming_exp_max=null;
		/**天赋icon */
		this._q_inborn_icon=0;
		/**阵营（0群 1魏 2蜀 3吴） */
		this._q_group=0;
		Q_military.__super.call(this);
	}

	__class(Q_military,'datasets.bean.Q_military',_super);
	var __proto=Q_military.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_sound=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_zizhi_item=this.readInt(_buf);
		this._q_active_skill_id=this.readInt(_buf);
		this._q_passive_skill=this.readString(_buf);
		this._q_passive_skill_num=this.readInt(_buf);
		this._q_base_attribute=this.readString(_buf);
		this._q_zizhi_attribute=this.readString(_buf);
		this._q_zizhi_attribute_formula=this.readString(_buf);
		this._q_zizhi_cost=this.readString(_buf);
		this._q_city_time=this.readInt(_buf);
		this._q_city_reward=this.readInt(_buf);
		this._q_tianming_attribute=this.readString(_buf);
		this._q_tianming_attribute_formula=this.readString(_buf);
		this._q_tianming_level_max=this.readInt(_buf);
		this._q_tianming_exp_max=this.readString(_buf);
		this._q_inborn_icon=this.readInt(_buf);
		this._q_group=this.readInt(_buf);
	}

	__getset(0,__proto,'q_passive_skill',function(){
		return this._q_passive_skill;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_tianming_attribute_formula',function(){
		return this._q_tianming_attribute_formula;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_sound',function(){
		return this._q_sound;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_zizhi_item',function(){
		return this._q_zizhi_item;
	});

	__getset(0,__proto,'q_tianming_attribute',function(){
		return this._q_tianming_attribute;
	});

	__getset(0,__proto,'q_passive_skill_num',function(){
		return this._q_passive_skill_num;
	});

	__getset(0,__proto,'q_active_skill_id',function(){
		return this._q_active_skill_id;
	});

	__getset(0,__proto,'q_zizhi_cost',function(){
		return this._q_zizhi_cost;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula',function(){
		return this._q_zizhi_attribute_formula;
	});

	__getset(0,__proto,'q_base_attribute',function(){
		return this._q_base_attribute;
	});

	__getset(0,__proto,'q_zizhi_attribute',function(){
		return this._q_zizhi_attribute;
	});

	__getset(0,__proto,'q_city_time',function(){
		return this._q_city_time;
	});

	__getset(0,__proto,'q_city_reward',function(){
		return this._q_city_reward;
	});

	__getset(0,__proto,'q_tianming_level_max',function(){
		return this._q_tianming_level_max;
	});

	__getset(0,__proto,'q_tianming_exp_max',function(){
		return this._q_tianming_exp_max;
	});

	__getset(0,__proto,'q_inborn_icon',function(){
		return this._q_inborn_icon;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	return Q_military;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*全局变量表
*/
//class datasets.bean.Q_global extends engine.base.data.Bean
var Q_global=(function(_super){
	function Q_global(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_global.__super.call(this);
	}

	__class(Q_global,'datasets.bean.Q_global',_super);
	var __proto=Q_global.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_global;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特权卡
*/
//class datasets.bean.Q_privilege extends engine.base.data.Bean
var Q_privilege=(function(_super){
	function Q_privilege(){
		/**编号 */
		this._q_id=0;
		/**名称 */
		this._q_tokenName=null;
		/**开通需充值（单位：RMB)*/
		this._q_price=0;
		/**持续时间（天，0永久） */
		this._q_day=0;
		/**每日可领元宝产量 */
		this._q_per_Gold=null;
		/**挂机额外收益（1经验 2铜币 万分比） */
		this._q_hang_up=null;
		/**背包容量增加 */
		this._q_bag_space=0;
		/**首次激活奖励 */
		this._q_gift=null;
		/**增加离线时间，单位秒 */
		this._q_offline_time=0;
		/**折扣充值id */
		this._q_discount_recharge_id=0;
		/**单次购买增加每日返利天数 */
		this._q_daliy_gift_days=0;
		Q_privilege.__super.call(this);
	}

	__class(Q_privilege,'datasets.bean.Q_privilege',_super);
	var __proto=Q_privilege.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_tokenName=this.readString(_buf);
		this._q_price=this.readInt(_buf);
		this._q_day=this.readInt(_buf);
		this._q_per_Gold=this.readString(_buf);
		this._q_hang_up=this.readString(_buf);
		this._q_bag_space=this.readInt(_buf);
		this._q_gift=this.readString(_buf);
		this._q_offline_time=this.readInt(_buf);
		this._q_discount_recharge_id=this.readInt(_buf);
		this._q_daliy_gift_days=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_tokenName',function(){
		return this._q_tokenName;
	});

	__getset(0,__proto,'q_price',function(){
		return this._q_price;
	});

	__getset(0,__proto,'q_day',function(){
		return this._q_day;
	});

	__getset(0,__proto,'q_hang_up',function(){
		return this._q_hang_up;
	});

	__getset(0,__proto,'q_gift',function(){
		return this._q_gift;
	});

	__getset(0,__proto,'q_per_Gold',function(){
		return this._q_per_Gold;
	});

	__getset(0,__proto,'q_offline_time',function(){
		return this._q_offline_time;
	});

	__getset(0,__proto,'q_bag_space',function(){
		return this._q_bag_space;
	});

	__getset(0,__proto,'q_discount_recharge_id',function(){
		return this._q_discount_recharge_id;
	});

	__getset(0,__proto,'q_daliy_gift_days',function(){
		return this._q_daliy_gift_days;
	});

	return Q_privilege;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*机器人
*/
//class datasets.bean.Q_robot extends engine.base.data.Bean
var Q_robot=(function(_super){
	function Q_robot(){
		/**英雄 */
		this._q_hero=null;
		/**宠物 */
		this._q_pet=null;
		/**军师 */
		this._q_adviser=null;
		/**蛮将 */
		this._q_general=null;
		/**玄女 */
		this._q_xuan_nv=null;
		/**红颜 */
		this._q_soul_boy=null;
		Q_robot.__super.call(this);
	}

	__class(Q_robot,'datasets.bean.Q_robot',_super);
	var __proto=Q_robot.prototype;
	__proto.read=function(_buf){
		this._q_hero=this.readString(_buf);
		this._q_pet=this.readString(_buf);
		this._q_adviser=this.readString(_buf);
		this._q_general=this.readString(_buf);
		this._q_xuan_nv=this.readString(_buf);
		this._q_soul_boy=this.readString(_buf);
	}

	__getset(0,__proto,'q_adviser',function(){
		return this._q_adviser;
	});

	__getset(0,__proto,'q_hero',function(){
		return this._q_hero;
	});

	__getset(0,__proto,'q_xuan_nv',function(){
		return this._q_xuan_nv;
	});

	__getset(0,__proto,'q_pet',function(){
		return this._q_pet;
	});

	__getset(0,__proto,'q_general',function(){
		return this._q_general;
	});

	__getset(0,__proto,'q_soul_boy',function(){
		return this._q_soul_boy;
	});

	return Q_robot;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令任务
*/
//class datasets.bean.Q_sgling extends engine.base.data.Bean
var Q_sgling=(function(_super){
	function Q_sgling(){
		/**等级 */
		this._q_id=0;
		/**升至所需经验 0升1 */
		this._q_exp=0;
		/**普通奖励（通用奖励字符串） */
		this._q_reward=null;
		/**高级奖励（通用奖励字符串） */
		this._q_reward_2=null;
		Q_sgling.__super.call(this);
	}

	__class(Q_sgling,'datasets.bean.Q_sgling',_super);
	var __proto=Q_sgling.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_reward_2=this.readString(_buf);
	}

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_reward_2',function(){
		return this._q_reward_2;
	});

	return Q_sgling;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宠物参数
*/
//class datasets.bean.Q_pet_param extends engine.base.data.Bean
var Q_pet_param=(function(_super){
	function Q_pet_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_pet_param.__super.call(this);
	}

	__class(Q_pet_param,'datasets.bean.Q_pet_param',_super);
	var __proto=Q_pet_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_pet_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将升星配置表
*/
//class datasets.bean.Q_officer_star extends engine.base.data.Bean
var Q_officer_star=(function(_super){
	function Q_officer_star(){
		/**序列号 */
		this._q_id=0;
		/**进阶类型(1通灵 2兽魂 3坐骑 4翅膀 5神兵 6精灵 7玄女 8符文 9秘核 10阵法 11灵气)*/
		this._q_type_level=0;
		/**觉醒等级 */
		this._q_level=0;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**升级获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		/**觉醒属性 */
		this._q_attribute=null;
		Q_officer_star.__super.call(this);
	}

	__class(Q_officer_star,'datasets.bean.Q_officer_star',_super);
	var __proto=Q_officer_star.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type_level=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type_level',function(){
		return this._q_type_level;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_officer_star;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*VIP
*/
//class datasets.bean.Q_vip extends engine.base.data.Bean
var Q_vip=(function(_super){
	function Q_vip(){
		/**vip等级 */
		this._q_vip_level=0;
		/**VIP经验（升级到该VIP等级所需要的vip，1RMB=1经验） */
		this._q_vip_exp=0;
		/**VIP特权描述 是下一条 */
		this._q_txt=null;
		/**vip等级礼包（配置礼包id） */
		this._q_gift=null;
		/**vip等级礼包购买消耗 */
		this._q_gift_cost=null;
		/**vip等级礼包 免费领取 */
		this._q_level_gift=null;
		/**免费礼包战力显示 */
		this._q_level_gift_power=0;
		/**面板资源（配置对应图片xml） */
		this._q_picture=null;
		/**材料副本额外次数 */
		this._q_material_dungeon_times=0;
		/**银两兑换次数 */
		this._q_gold_time=0;
		/**是否可创建帮会 */
		this._q_guild_creat=0;
		/**是否可自动熔炼（0否1是） */
		this._q_recove_auto=0;
		/**可挑战VIP副本id（[id,id])*/
		this._q_vip_boss=null;
		/**竞技场额外购买次数增加 */
		this._q_arena_time=0;
		/**全民boss额外次数增加 */
		this._q_wild_boss_times=0;
		/**是否可跳过全民BOSS（1是0否） */
		this._q_pass_boss=0;
		/**是否可复活全民BOSS（1是0否） */
		this._q_reborn_boss=0;
		/**是否提前解锁机关（玄女）系统 */
		this._q_unlock_monster=0;
		/**是否解锁3倍加速播放 */
		this._q_3time=0;
		/**远征次数额外增加 */
		this._q_yuanzheng=0;
		/**星宿幻境额外购买次数 */
		this._q_xingxiu=0;
		/**上古圣灵额外重置次数 */
		this._q_shanggu=0;
		/**镇守凌霄额外购买次数 */
		this._q_zhenshou=0;
		/**借东风每天任务数 */
		this._q_dongfeng=0;
		/**摇钱树次数 */
		this._q_yaoqian=0;
		/**是否提示 */
		this._q_notice=0;
		/**VIP面板预告字段 */
		this._q_vip_notice=0;
		/**vip预告模型id */
		this._q_vip_model=0;
		/**图标ID */
		this._q_ico=0;
		/**属性加成 */
		this._q_attribute=null;
		/**每日免费跳过次数 */
		this._q_free=0;
		/**快速战斗次数 */
		this._q_fast_fight=0;
		/**快速战斗单次恢复时间（s） */
		this._q_recovery_time=0;
		Q_vip.__super.call(this);
	}

	__class(Q_vip,'datasets.bean.Q_vip',_super);
	var __proto=Q_vip.prototype;
	__proto.read=function(_buf){
		this._q_vip_level=this.readInt(_buf);
		this._q_vip_exp=this.readInt(_buf);
		this._q_txt=this.readString(_buf);
		this._q_gift=this.readString(_buf);
		this._q_gift_cost=this.readString(_buf);
		this._q_level_gift=this.readString(_buf);
		this._q_level_gift_power=this.readInt(_buf);
		this._q_picture=this.readString(_buf);
		this._q_material_dungeon_times=this.readInt(_buf);
		this._q_gold_time=this.readInt(_buf);
		this._q_guild_creat=this.readInt(_buf);
		this._q_recove_auto=this.readInt(_buf);
		this._q_vip_boss=this.readString(_buf);
		this._q_arena_time=this.readInt(_buf);
		this._q_wild_boss_times=this.readInt(_buf);
		this._q_pass_boss=this.readInt(_buf);
		this._q_reborn_boss=this.readInt(_buf);
		this._q_unlock_monster=this.readInt(_buf);
		this._q_3time=this.readInt(_buf);
		this._q_yuanzheng=this.readInt(_buf);
		this._q_xingxiu=this.readInt(_buf);
		this._q_shanggu=this.readInt(_buf);
		this._q_zhenshou=this.readInt(_buf);
		this._q_dongfeng=this.readInt(_buf);
		this._q_yaoqian=this.readInt(_buf);
		this._q_notice=this.readInt(_buf);
		this._q_vip_notice=this.readInt(_buf);
		this._q_vip_model=this.readInt(_buf);
		this._q_ico=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_free=this.readInt(_buf);
		this._q_fast_fight=this.readInt(_buf);
		this._q_recovery_time=this.readInt(_buf);
	}

	__getset(0,__proto,'q_gold_time',function(){
		return this._q_gold_time;
	});

	__getset(0,__proto,'q_gift_cost',function(){
		return this._q_gift_cost;
	});

	__getset(0,__proto,'q_vip_level',function(){
		return this._q_vip_level;
	});

	__getset(0,__proto,'q_vip_exp',function(){
		return this._q_vip_exp;
	});

	__getset(0,__proto,'q_txt',function(){
		return this._q_txt;
	});

	__getset(0,__proto,'q_gift',function(){
		return this._q_gift;
	});

	__getset(0,__proto,'q_material_dungeon_times',function(){
		return this._q_material_dungeon_times;
	});

	__getset(0,__proto,'q_level_gift',function(){
		return this._q_level_gift;
	});

	__getset(0,__proto,'q_recovery_time',function(){
		return this._q_recovery_time;
	});

	__getset(0,__proto,'q_yuanzheng',function(){
		return this._q_yuanzheng;
	});

	__getset(0,__proto,'q_level_gift_power',function(){
		return this._q_level_gift_power;
	});

	__getset(0,__proto,'q_picture',function(){
		return this._q_picture;
	});

	__getset(0,__proto,'q_guild_creat',function(){
		return this._q_guild_creat;
	});

	__getset(0,__proto,'q_3time',function(){
		return this._q_3time;
	});

	__getset(0,__proto,'q_recove_auto',function(){
		return this._q_recove_auto;
	});

	__getset(0,__proto,'q_vip_boss',function(){
		return this._q_vip_boss;
	});

	__getset(0,__proto,'q_arena_time',function(){
		return this._q_arena_time;
	});

	__getset(0,__proto,'q_shanggu',function(){
		return this._q_shanggu;
	});

	__getset(0,__proto,'q_wild_boss_times',function(){
		return this._q_wild_boss_times;
	});

	__getset(0,__proto,'q_pass_boss',function(){
		return this._q_pass_boss;
	});

	__getset(0,__proto,'q_reborn_boss',function(){
		return this._q_reborn_boss;
	});

	__getset(0,__proto,'q_unlock_monster',function(){
		return this._q_unlock_monster;
	});

	__getset(0,__proto,'q_vip_notice',function(){
		return this._q_vip_notice;
	});

	__getset(0,__proto,'q_xingxiu',function(){
		return this._q_xingxiu;
	});

	__getset(0,__proto,'q_zhenshou',function(){
		return this._q_zhenshou;
	});

	__getset(0,__proto,'q_dongfeng',function(){
		return this._q_dongfeng;
	});

	__getset(0,__proto,'q_yaoqian',function(){
		return this._q_yaoqian;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	__getset(0,__proto,'q_vip_model',function(){
		return this._q_vip_model;
	});

	__getset(0,__proto,'q_fast_fight',function(){
		return this._q_fast_fight;
	});

	__getset(0,__proto,'q_ico',function(){
		return this._q_ico;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_free',function(){
		return this._q_free;
	});

	return Q_vip;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.bean.Q_military_param extends engine.base.data.Bean
var Q_military_param=(function(_super){
	function Q_military_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_military_param.__super.call(this);
	}

	__class(Q_military_param,'datasets.bean.Q_military_param',_super);
	var __proto=Q_military_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_military_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物配置表
*/
//class datasets.bean.Q_baowu extends engine.base.data.Bean
var Q_baowu=(function(_super){
	function Q_baowu(){
		/**宝物ID */
		this._q_id=0;
		/**宝物名称 */
		this._q_baowu_name=null;
		/**宝物列传 */
		this._q_baowu_story=null;
		/**宝物品质（2蓝色，3紫色，4橙色，5红色） */
		this._q_quality=0;
		/**宝物阵营（0群 1魏 2蜀 3吴） */
		this._q_zhengyin=0;
		/**宝物ICON */
		this._q_baowu_icon=0;
		/**宝物模型 */
		this._q_baowu_model=0;
		/**激活消耗 */
		this._q_consumption=null;
		/**激活特殊属性 */
		this._q_special_attribute=null;
		/**宝物技能 */
		this._q_skill=0;
		/**基础属性ID */
		this._q_basis_attr=null;
		/**模型缩放比例 */
		this._q_zoom=0;
		/**宝物激活提供的战斗力 */
		this._q_fighting=0;
		/**探宝界面缩放比例 */
		this._q_zoom2=0;
		/**宝物界面缩放比例 */
		this._q_zoom3=0;
		Q_baowu.__super.call(this);
	}

	__class(Q_baowu,'datasets.bean.Q_baowu',_super);
	var __proto=Q_baowu.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_baowu_name=this.readString(_buf);
		this._q_baowu_story=this.readString(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_zhengyin=this.readInt(_buf);
		this._q_baowu_icon=this.readInt(_buf);
		this._q_baowu_model=this.readInt(_buf);
		this._q_consumption=this.readString(_buf);
		this._q_special_attribute=this.readString(_buf);
		this._q_skill=this.readInt(_buf);
		this._q_basis_attr=this.readString(_buf);
		this._q_zoom=this.readInt(_buf);
		this._q_fighting=this.readInt(_buf);
		this._q_zoom2=this.readInt(_buf);
		this._q_zoom3=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_baowu_name',function(){
		return this._q_baowu_name;
	});

	__getset(0,__proto,'q_zoom3',function(){
		return this._q_zoom3;
	});

	__getset(0,__proto,'q_baowu_model',function(){
		return this._q_baowu_model;
	});

	__getset(0,__proto,'q_baowu_icon',function(){
		return this._q_baowu_icon;
	});

	__getset(0,__proto,'q_zhengyin',function(){
		return this._q_zhengyin;
	});

	__getset(0,__proto,'q_baowu_story',function(){
		return this._q_baowu_story;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_consumption',function(){
		return this._q_consumption;
	});

	__getset(0,__proto,'q_special_attribute',function(){
		return this._q_special_attribute;
	});

	__getset(0,__proto,'q_skill',function(){
		return this._q_skill;
	});

	__getset(0,__proto,'q_basis_attr',function(){
		return this._q_basis_attr;
	});

	__getset(0,__proto,'q_zoom',function(){
		return this._q_zoom;
	});

	__getset(0,__proto,'q_fighting',function(){
		return this._q_fighting;
	});

	__getset(0,__proto,'q_zoom2',function(){
		return this._q_zoom2;
	});

	return Q_baowu;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜条件
*/
//class datasets.bean.Q_rank extends engine.base.data.Bean
var Q_rank=(function(_super){
	function Q_rank(){
		/**排行榜类型 */
		this._q_type=0;
		/**排行榜名称 */
		this._q_name=null;
		/**上榜条件 */
		this._q_condition=null;
		Q_rank.__super.call(this);
	}

	__class(Q_rank,'datasets.bean.Q_rank',_super);
	var __proto=Q_rank.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_condition=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	return Q_rank;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*商店类型
*/
//class datasets.bean.Q_shop_type extends engine.base.data.Bean
var Q_shop_type=(function(_super){
	function Q_shop_type(){
		/**主类型 */
		this._q_main_type=0;
		/**次类型 */
		this._q_type=0;
		/**CRON类型限时 */
		this._q_cron=null;
		/**相对时间类型限时 */
		this._q_offset_time=null;
		/**分页名称 */
		this._q_name=null;
		/**关联功能id */
		this._q_funcition_id=0;
		/**描述提示 */
		this._q_desc=null;
		/**获取提示 */
		this._q_get_desc=null;
		/**获取途径道具id */
		this._q_get_id=0;
		/**配了功能id优先跳转 */
		this._q_cond=0;
		/**返还CRON类型限时 */
		this._q_return_cron=null;
		/**返还相对时间类型限时 */
		this._q_return_offset_time=null;
		Q_shop_type.__super.call(this);
	}

	__class(Q_shop_type,'datasets.bean.Q_shop_type',_super);
	var __proto=Q_shop_type.prototype;
	__proto.read=function(_buf){
		this._q_main_type=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_cron=this.readString(_buf);
		this._q_offset_time=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_funcition_id=this.readInt(_buf);
		this._q_desc=this.readString(_buf);
		this._q_get_desc=this.readString(_buf);
		this._q_get_id=this.readInt(_buf);
		this._q_cond=this.readInt(_buf);
		this._q_return_cron=this.readString(_buf);
		this._q_return_offset_time=this.readString(_buf);
	}

	__getset(0,__proto,'q_main_type',function(){
		return this._q_main_type;
	});

	__getset(0,__proto,'q_get_id',function(){
		return this._q_get_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_get_desc',function(){
		return this._q_get_desc;
	});

	__getset(0,__proto,'q_cron',function(){
		return this._q_cron;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_offset_time',function(){
		return this._q_offset_time;
	});

	__getset(0,__proto,'q_funcition_id',function(){
		return this._q_funcition_id;
	});

	__getset(0,__proto,'q_desc',function(){
		return this._q_desc;
	});

	__getset(0,__proto,'q_cond',function(){
		return this._q_cond;
	});

	__getset(0,__proto,'q_return_cron',function(){
		return this._q_return_cron;
	});

	__getset(0,__proto,'q_return_offset_time',function(){
		return this._q_return_offset_time;
	});

	return Q_shop_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门任务参数
*/
//class datasets.bean.Q_recommend_param extends engine.base.data.Bean
var Q_recommend_param=(function(_super){
	function Q_recommend_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_recommend_param.__super.call(this);
	}

	__class(Q_recommend_param,'datasets.bean.Q_recommend_param',_super);
	var __proto=Q_recommend_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_recommend_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*千里走单骑
*/
//class datasets.bean.Q_yuanzheng extends engine.base.data.Bean
var Q_yuanzheng=(function(_super){
	function Q_yuanzheng(){
		/**关卡 */
		this._q_guanqia=0;
		/**名字 */
		this._q_name=null;
		/**资源 */
		this._q_res=null;
		/**战利品(前端展示字符串)*/
		this._q_loot_client=null;
		Q_yuanzheng.__super.call(this);
	}

	__class(Q_yuanzheng,'datasets.bean.Q_yuanzheng',_super);
	var __proto=Q_yuanzheng.prototype;
	__proto.read=function(_buf){
		this._q_guanqia=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_res=this.readString(_buf);
		this._q_loot_client=this.readString(_buf);
	}

	__getset(0,__proto,'q_guanqia',function(){
		return this._q_guanqia;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_res',function(){
		return this._q_res;
	});

	__getset(0,__proto,'q_loot_client',function(){
		return this._q_loot_client;
	});

	return Q_yuanzheng;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*祥瑞权重数据库
*/
//class datasets.bean.Q_weight extends engine.base.data.Bean
var Q_weight=(function(_super){
	function Q_weight(){
		/**祥瑞事件ID */
		this._q_event_id=0;
		/**唯一ID */
		this._q_id=0;
		/**权重 */
		this._q_weight=0;
		Q_weight.__super.call(this);
	}

	__class(Q_weight,'datasets.bean.Q_weight',_super);
	var __proto=Q_weight.prototype;
	__proto.read=function(_buf){
		this._q_event_id=this.readInt(_buf);
		this._q_id=this.readInt(_buf);
		this._q_weight=this.readInt(_buf);
	}

	__getset(0,__proto,'q_event_id',function(){
		return this._q_event_id;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_weight',function(){
		return this._q_weight;
	});

	return Q_weight;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本
*/
//class datasets.bean.Q_pata extends engine.base.data.Bean
var Q_pata=(function(_super){
	function Q_pata(){
		/**层 */
		this._q_layer=0;
		/**1虎牢关（藏宝图） 2长坂坡（玲珑塔） 3铜雀台（勇闯天庭） 4华容道（华容道） 5三英战吕布 */
		this._q_type=0;
		/**副本名称 */
		this._q_name=null;
		/**挑战条件 */
		this._q_condition=null;
		/**跳过类型(0不可 1可以跳过） */
		this._q_skip_type=0;
		/**红点战力提示 */
		this._q_power=0;
		/**通关奖励 */
		this._q_prize=null;
		/**扫荡奖励 */
		this._q_moppingup_prize=null;
		/**怪物组 */
		this._q_monster_group=null;
		/**副本参数 */
		this._q_param=null;
		Q_pata.__super.call(this);
	}

	__class(Q_pata,'datasets.bean.Q_pata',_super);
	var __proto=Q_pata.prototype;
	__proto.read=function(_buf){
		this._q_layer=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_condition=this.readString(_buf);
		this._q_skip_type=this.readInt(_buf);
		this._q_power=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
		this._q_moppingup_prize=this.readString(_buf);
		this._q_monster_group=this.readString(_buf);
		this._q_param=this.readString(_buf);
	}

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_power',function(){
		return this._q_power;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_layer',function(){
		return this._q_layer;
	});

	__getset(0,__proto,'q_monster_group',function(){
		return this._q_monster_group;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_skip_type',function(){
		return this._q_skip_type;
	});

	__getset(0,__proto,'q_moppingup_prize',function(){
		return this._q_moppingup_prize;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	return Q_pata;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*爬塔副本类型
*/
//class datasets.bean.Q_pata_type extends engine.base.data.Bean
var Q_pata_type=(function(_super){
	function Q_pata_type(){
		/**类型 */
		this._q_type=0;
		/**开放配置cron */
		this._q_cron=null;
		/**开放配置相对时间 */
		this._q_offset_time=null;
		Q_pata_type.__super.call(this);
	}

	__class(Q_pata_type,'datasets.bean.Q_pata_type',_super);
	var __proto=Q_pata_type.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_cron=this.readString(_buf);
		this._q_offset_time=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_cron',function(){
		return this._q_cron;
	});

	__getset(0,__proto,'q_offset_time',function(){
		return this._q_offset_time;
	});

	return Q_pata_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将元脉数据库
*/
//class datasets.bean.Q_officer_yuanmai extends engine.base.data.Bean
var Q_officer_yuanmai=(function(_super){
	function Q_officer_yuanmai(){
		/**元脉等级 */
		this._q_level=0;
		/**元脉阶数 */
		this._q_jieshu=0;
		/**元脉名称 */
		this._q_yuanmailName=null;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		Q_officer_yuanmai.__super.call(this);
	}

	__class(Q_officer_yuanmai,'datasets.bean.Q_officer_yuanmai',_super);
	var __proto=Q_officer_yuanmai.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_jieshu=this.readInt(_buf);
		this._q_yuanmailName=this.readString(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_jieshu',function(){
		return this._q_jieshu;
	});

	__getset(0,__proto,'q_yuanmailName',function(){
		return this._q_yuanmailName;
	});

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	return Q_officer_yuanmai;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*觉醒
*/
//class datasets.bean.Q_awakening extends engine.base.data.Bean
var Q_awakening=(function(_super){
	function Q_awakening(){
		/**序号 */
		this._q_id=0;
		/**境界重数 */
		this._q_order=0;
		/**星级 */
		this._q_star=0;
		/**增加属性 */
		this._q_attribute=null;
		/**消耗材料数量[蓝将,紫将,橙将,红将] */
		this._q_cost_number=null;
		Q_awakening.__super.call(this);
	}

	__class(Q_awakening,'datasets.bean.Q_awakening',_super);
	var __proto=Q_awakening.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_order=this.readInt(_buf);
		this._q_star=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_cost_number=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost_number',function(){
		return this._q_cost_number;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_order',function(){
		return this._q_order;
	});

	__getset(0,__proto,'q_star',function(){
		return this._q_star;
	});

	return Q_awakening;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*合体武器
*/
//class datasets.bean.Q_fit_pinzhi extends engine.base.data.Bean
var Q_fit_pinzhi=(function(_super){
	function Q_fit_pinzhi(){
		/**q_id */
		this._q_id=0;
		/**品质（1绿2蓝3紫4橙5红） */
		this._q_quality=0;
		/**合体类型 */
		this._q_type=0;
		/**属性加成万分比 */
		this._q_multiple=0;
		/**额外属性加成 */
		this._q_attribute=null;
		Q_fit_pinzhi.__super.call(this);
	}

	__class(Q_fit_pinzhi,'datasets.bean.Q_fit_pinzhi',_super);
	var __proto=Q_fit_pinzhi.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_multiple=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_multiple',function(){
		return this._q_multiple;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_fit_pinzhi;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*经脉数据库
*/
//class datasets.bean.Q_channel extends engine.base.data.Bean
var Q_channel=(function(_super){
	function Q_channel(){
		/**经脉点等级 */
		this._q_level=0;
		/**经脉重数 */
		this._q_channelLevel=0;
		/**经脉名称 */
		this._q_channelName=null;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		Q_channel.__super.call(this);
	}

	__class(Q_channel,'datasets.bean.Q_channel',_super);
	var __proto=Q_channel.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_channelLevel=this.readInt(_buf);
		this._q_channelName=this.readString(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_channelLevel',function(){
		return this._q_channelLevel;
	});

	__getset(0,__proto,'q_channelName',function(){
		return this._q_channelName;
	});

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	return Q_channel;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会守护每日奖励(蟠桃会)
*/
//class datasets.bean.Q_guild_guard extends engine.base.data.Bean
var Q_guild_guard=(function(_super){
	function Q_guild_guard(){
		/**序列 */
		this._q_id=0;
		/**所需帮会活跃 */
		this._q_need=0;
		/**活跃奖励 */
		this._q_reward=null;
		Q_guild_guard.__super.call(this);
	}

	__class(Q_guild_guard,'datasets.bean.Q_guild_guard',_super);
	var __proto=Q_guild_guard.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_need=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_need',function(){
		return this._q_need;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_guild_guard;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活跃转盘配置表
*/
//class datasets.bean.Q_open_active_turntable extends engine.base.data.Bean
var Q_open_active_turntable=(function(_super){
	function Q_open_active_turntable(){
		/**唯一id */
		this._q_id=0;
		/**奖励,[道具id,数量] */
		this._q_reward=null;
		Q_open_active_turntable.__super.call(this);
	}

	__class(Q_open_active_turntable,'datasets.bean.Q_open_active_turntable',_super);
	var __proto=Q_open_active_turntable.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_open_active_turntable;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*q_gequip_param
*/
//class datasets.bean.Q_gequip_param extends engine.base.data.Bean
var Q_gequip_param=(function(_super){
	function Q_gequip_param(){
		/**序列id */
		this._q_id=0;
		/**值 */
		this._q_value=null;
		Q_gequip_param.__super.call(this);
	}

	__class(Q_gequip_param,'datasets.bean.Q_gequip_param',_super);
	var __proto=Q_gequip_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_gequip_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*1
*/
//class datasets.bean.Q_grow_gold extends engine.base.data.Bean
var Q_grow_gold=(function(_super){
	function Q_grow_gold(){
		/**序列号 */
		this._q_grow__level=0;
		/**类型（1登陆投资 2等级投资） */
		this._q_type=0;
		/**领取等级(通用条件） */
		this._q_condition=null;
		/**奖励信息（[道具id,数量]） */
		this._f_grow_reward=null;
		Q_grow_gold.__super.call(this);
	}

	__class(Q_grow_gold,'datasets.bean.Q_grow_gold',_super);
	var __proto=Q_grow_gold.prototype;
	__proto.read=function(_buf){
		this._q_grow__level=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._f_grow_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_grow__level',function(){
		return this._q_grow__level;
	});

	__getset(0,__proto,'f_grow_reward',function(){
		return this._f_grow_reward;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	return Q_grow_gold;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令任务
*/
//class datasets.bean.Q_grow_checkpoint extends engine.base.data.Bean
var Q_grow_checkpoint=(function(_super){
	function Q_grow_checkpoint(){
		/**等级 */
		this._q_id=0;
		/**领取条件(通用条件） */
		this._q_condition=null;
		/**普通奖励（通用奖励字符串） */
		this._q_reward=null;
		/**高级奖励（通用奖励字符串） */
		this._q_reward_2=null;
		Q_grow_checkpoint.__super.call(this);
	}

	__class(Q_grow_checkpoint,'datasets.bean.Q_grow_checkpoint',_super);
	var __proto=Q_grow_checkpoint.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_reward_2=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_reward_2',function(){
		return this._q_reward_2;
	});

	return Q_grow_checkpoint;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者争霸排名
*/
//class datasets.bean.Q_kingwar_rank extends engine.base.data.Bean
var Q_kingwar_rank=(function(_super){
	function Q_kingwar_rank(){
		/**排名 */
		this._q_rank=0;
		/**奖励 */
		this._q_prize=null;
		Q_kingwar_rank.__super.call(this);
	}

	__class(Q_kingwar_rank,'datasets.bean.Q_kingwar_rank',_super);
	var __proto=Q_kingwar_rank.prototype;
	__proto.read=function(_buf){
		this._q_rank=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	return Q_kingwar_rank;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动参数
*/
//class datasets.bean.Q_special_activity_param extends engine.base.data.Bean
var Q_special_activity_param=(function(_super){
	function Q_special_activity_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_special_activity_param.__super.call(this);
	}

	__class(Q_special_activity_param,'datasets.bean.Q_special_activity_param',_super);
	var __proto=Q_special_activity_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_special_activity_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*红颜
*/
//class datasets.bean.Q_hongyan extends engine.base.data.Bean
var Q_hongyan=(function(_super){
	function Q_hongyan(){
		/**女将id */
		this._q_id=0;
		/**默认名称 */
		this._q_name=null;
		/**声音对白（调用音效id） */
		this._q_sound=0;
		/**展示资源编号 */
		this._q_model=0;
		/**品质(白绿蓝紫橙红金0123456)*/
		this._q_quality=0;
		/**资质道具 */
		this._q_zizhi_item=0;
		/**主动技能ID */
		this._q_active_skill_id=0;
		/**被动技能上限 */
		this._q_passive_skill_num=0;
		/**基础属性加成 */
		this._q_base_attribute=null;
		/**御灵单部位升星所需数量 [1,2,3,4,5] */
		this._q_zizhi_exp_max=null;
		/**御灵部位解锁条件（[[部位id，品质id，数量],[部位id2，品质id，数量],[部位id3，品质id，数量],[部位id4，品质id，数量],[部位id5，品质id，数量]] )*/
		this._q_yuling_open=null;
		/**部位1御灵基础属性 */
		this._q_zizhi_attribute_1=null;
		/**部位1御灵属性公式，参数zizhi */
		this._q_zizhi_attribute_formula_1=null;
		/**部位2御灵基础属性 */
		this._q_zizhi_attribute_2=null;
		/**部位2御灵属性公式，参数zizhi */
		this._q_zizhi_attribute_formula_2=null;
		/**部位3御灵基础属性 */
		this._q_zizhi_attribute_3=null;
		/**部位3御灵属性公式，参数zizhi */
		this._q_zizhi_attribute_formula_3=null;
		/**部位4御灵基础属性 */
		this._q_zizhi_attribute_4=null;
		/**部位4御灵属性公式，参数zizhi */
		this._q_zizhi_attribute_formula_4=null;
		/**部位5御灵基础属性 */
		this._q_zizhi_attribute_5=null;
		/**部位5御灵属性公式，参数zizhi */
		this._q_zizhi_attribute_formula_5=null;
		/**阵营（0群 1魏 2蜀 3吴） */
		this._q_group=0;
		Q_hongyan.__super.call(this);
	}

	__class(Q_hongyan,'datasets.bean.Q_hongyan',_super);
	var __proto=Q_hongyan.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_sound=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_quality=this.readInt(_buf);
		this._q_zizhi_item=this.readInt(_buf);
		this._q_active_skill_id=this.readInt(_buf);
		this._q_passive_skill_num=this.readInt(_buf);
		this._q_base_attribute=this.readString(_buf);
		this._q_zizhi_exp_max=this.readString(_buf);
		this._q_yuling_open=this.readString(_buf);
		this._q_zizhi_attribute_1=this.readString(_buf);
		this._q_zizhi_attribute_formula_1=this.readString(_buf);
		this._q_zizhi_attribute_2=this.readString(_buf);
		this._q_zizhi_attribute_formula_2=this.readString(_buf);
		this._q_zizhi_attribute_3=this.readString(_buf);
		this._q_zizhi_attribute_formula_3=this.readString(_buf);
		this._q_zizhi_attribute_4=this.readString(_buf);
		this._q_zizhi_attribute_formula_4=this.readString(_buf);
		this._q_zizhi_attribute_5=this.readString(_buf);
		this._q_zizhi_attribute_formula_5=this.readString(_buf);
		this._q_group=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_quality',function(){
		return this._q_quality;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_sound',function(){
		return this._q_sound;
	});

	__getset(0,__proto,'q_zizhi_attribute_1',function(){
		return this._q_zizhi_attribute_1;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_zizhi_item',function(){
		return this._q_zizhi_item;
	});

	__getset(0,__proto,'q_passive_skill_num',function(){
		return this._q_passive_skill_num;
	});

	__getset(0,__proto,'q_active_skill_id',function(){
		return this._q_active_skill_id;
	});

	__getset(0,__proto,'q_zizhi_attribute_2',function(){
		return this._q_zizhi_attribute_2;
	});

	__getset(0,__proto,'q_base_attribute',function(){
		return this._q_base_attribute;
	});

	__getset(0,__proto,'q_zizhi_exp_max',function(){
		return this._q_zizhi_exp_max;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	__getset(0,__proto,'q_yuling_open',function(){
		return this._q_yuling_open;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula_1',function(){
		return this._q_zizhi_attribute_formula_1;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula_2',function(){
		return this._q_zizhi_attribute_formula_2;
	});

	__getset(0,__proto,'q_zizhi_attribute_3',function(){
		return this._q_zizhi_attribute_3;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula_3',function(){
		return this._q_zizhi_attribute_formula_3;
	});

	__getset(0,__proto,'q_zizhi_attribute_4',function(){
		return this._q_zizhi_attribute_4;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula_4',function(){
		return this._q_zizhi_attribute_formula_4;
	});

	__getset(0,__proto,'q_zizhi_attribute_5',function(){
		return this._q_zizhi_attribute_5;
	});

	__getset(0,__proto,'q_zizhi_attribute_formula_5',function(){
		return this._q_zizhi_attribute_formula_5;
	});

	return Q_hongyan;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*觉醒配置表
*/
//class datasets.bean.Q_wakeup extends engine.base.data.Bean
var Q_wakeup=(function(_super){
	function Q_wakeup(){
		/**序列号 */
		this._q_id=0;
		/**进阶类型(1通灵 2兽魂 3坐骑 4翅膀 5神兵 6精灵 7玄女 8符文 9秘核 10阵法 11灵气)*/
		this._q_type=0;
		/**觉醒等级 */
		this._q_level=0;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**升级获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		/**觉醒属性（1通灵 2兽魂 3坐骑 4翅膀 5神兵 6精灵 7玄女 8符文 9秘核 10阵法 11灵气，万分比进阶属性比例） */
		this._q_attribute=null;
		/**对应功能id */
		this._q_func=0;
		/**是否多角色(0-否 1-是)*/
		this._q_mulrole=0;
		Q_wakeup.__super.call(this);
	}

	__class(Q_wakeup,'datasets.bean.Q_wakeup',_super);
	var __proto=Q_wakeup.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_func=this.readInt(_buf);
		this._q_mulrole=this.readInt(_buf);
	}

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_mulrole',function(){
		return this._q_mulrole;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_func',function(){
		return this._q_func;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_wakeup;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶参数
*/
//class datasets.bean.Q_upgrade_param extends engine.base.data.Bean
var Q_upgrade_param=(function(_super){
	function Q_upgrade_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_upgrade_param.__super.call(this);
	}

	__class(Q_upgrade_param,'datasets.bean.Q_upgrade_param',_super);
	var __proto=Q_upgrade_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_upgrade_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物升星配置表
*/
//class datasets.bean.Q_baowu_peiyang extends engine.base.data.Bean
var Q_baowu_peiyang=(function(_super){
	function Q_baowu_peiyang(){
		/**宝物ID */
		this._q_id=0;
		/**培养等级 */
		this._q_level=0;
		/**培养消耗 */
		this._q_cost=null;
		/**突破消耗 */
		this._q_break_cost=null;
		/**随机属性，{"1":[100,150],"2":[10,100]}*/
		this._q_random_attr=null;
		/**最大属性，{"1":1000,"2":200}*/
		this._q_max_attr=null;
		Q_baowu_peiyang.__super.call(this);
	}

	__class(Q_baowu_peiyang,'datasets.bean.Q_baowu_peiyang',_super);
	var __proto=Q_baowu_peiyang.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_cost=this.readString(_buf);
		this._q_break_cost=this.readString(_buf);
		this._q_random_attr=this.readString(_buf);
		this._q_max_attr=this.readString(_buf);
	}

	__getset(0,__proto,'q_random_attr',function(){
		return this._q_random_attr;
	});

	__getset(0,__proto,'q_break_cost',function(){
		return this._q_break_cost;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_max_attr',function(){
		return this._q_max_attr;
	});

	return Q_baowu_peiyang;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*姓名随机库
*/
//class datasets.bean.Q_role_random_name extends engine.base.data.Bean
var Q_role_random_name=(function(_super){
	function Q_role_random_name(){
		/**表编号 */
		this._q_id=0;
		/**类型（1姓，2男名字，3女名字） */
		this._q_type=0;
		/**内容 */
		this._q_value=null;
		Q_role_random_name.__super.call(this);
	}

	__class(Q_role_random_name,'datasets.bean.Q_role_random_name',_super);
	var __proto=Q_role_random_name.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_role_random_name;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*押镖参数
*/
//class datasets.bean.Q_payload_param extends engine.base.data.Bean
var Q_payload_param=(function(_super){
	function Q_payload_param(){
		/**ID */
		this._q_id=0;
		/**参数 */
		this._q_value=null;
		Q_payload_param.__super.call(this);
	}

	__class(Q_payload_param,'datasets.bean.Q_payload_param',_super);
	var __proto=Q_payload_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_payload_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将蛮器数据库
*/
//class datasets.bean.Q_officer_weapon extends engine.base.data.Bean
var Q_officer_weapon=(function(_super){
	function Q_officer_weapon(){
		/**蛮器等级 */
		this._q_level=0;
		/**升级所需材料 格式道具id，数量 */
		this._q_activationCost=null;
		/**激活获得属性（[[属性类型，数量],[属性类型，数量]]） */
		this._q_activationProperty=null;
		/**特殊属性 */
		this._q_activationProperty_2=null;
		Q_officer_weapon.__super.call(this);
	}

	__class(Q_officer_weapon,'datasets.bean.Q_officer_weapon',_super);
	var __proto=Q_officer_weapon.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_activationCost=this.readString(_buf);
		this._q_activationProperty=this.readString(_buf);
		this._q_activationProperty_2=this.readString(_buf);
	}

	__getset(0,__proto,'q_activationProperty_2',function(){
		return this._q_activationProperty_2;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_activationProperty',function(){
		return this._q_activationProperty;
	});

	__getset(0,__proto,'q_activationCost',function(){
		return this._q_activationCost;
	});

	return Q_officer_weapon;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*官位数据库
*/
//class datasets.bean.Q_official extends engine.base.data.Bean
var Q_official=(function(_super){
	function Q_official(){
		/**序号 */
		this._q_id=0;
		/**活跃名称 */
		this._q_name=null;
		/**任务ID */
		this._q_task=0;
		/**找回活跃 */
		this._q_back_active=null;
		/**找回活跃消耗/单次 */
		this._q_back_active_cost=null;
		/**找回资源 */
		this._q_back_item=null;
		/**找回资源消耗/单次 */
		this._q_back_item_cost=null;
		/**关联功能id */
		this._q_funcition_id=0;
		Q_official.__super.call(this);
	}

	__class(Q_official,'datasets.bean.Q_official',_super);
	var __proto=Q_official.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_task=this.readInt(_buf);
		this._q_back_active=this.readString(_buf);
		this._q_back_active_cost=this.readString(_buf);
		this._q_back_item=this.readString(_buf);
		this._q_back_item_cost=this.readString(_buf);
		this._q_funcition_id=this.readInt(_buf);
	}

	__getset(0,__proto,'q_back_item_cost',function(){
		return this._q_back_item_cost;
	});

	__getset(0,__proto,'q_back_item',function(){
		return this._q_back_item;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_funcition_id',function(){
		return this._q_funcition_id;
	});

	__getset(0,__proto,'q_task',function(){
		return this._q_task;
	});

	__getset(0,__proto,'q_back_active',function(){
		return this._q_back_active;
	});

	__getset(0,__proto,'q_back_active_cost',function(){
		return this._q_back_active_cost;
	});

	return Q_official;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*1
*/
//class datasets.bean.Q_totem extends engine.base.data.Bean
var Q_totem=(function(_super){
	function Q_totem(){
		/**类型id */
		this._q_id=0;
		/**图腾名称 */
		this._q_name=null;
		/**激活所需道具信息 */
		this._q_item=null;
		/**等级上限 */
		this._q_level_max=0;
		/**升级所需经验(0表示无法升级)*/
		this._q_exp_max=null;
		/**基础属性 */
		this._q_upgrade_attribute=null;
		/**属性公式 */
		this._q_attribute_formula=null;
		/**临时属性万分比公式(jingyan:经验)*/
		this._q_attribute_formula_provisional=null;
		/**进阶所需道具id及数量 */
		this._q_upgrade_itemID=null;
		/**1倍经验，10倍经验，50倍经验值 */
		this._q_exp=null;
		/**5倍暴击概率，万分比 */
		this._q_Crit=null;
		/**突破所需图腾等级 */
		this._q_breakthrough=null;
		/**突破消耗信息 */
		this._q_break_item=null;
		/**突破基础属性公式 */
		this._q_break_attribute=null;
		/**突破属性公式 */
		this._q_break_attribute_formula=null;
		Q_totem.__super.call(this);
	}

	__class(Q_totem,'datasets.bean.Q_totem',_super);
	var __proto=Q_totem.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_item=this.readString(_buf);
		this._q_level_max=this.readInt(_buf);
		this._q_exp_max=this.readString(_buf);
		this._q_upgrade_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_attribute_formula_provisional=this.readString(_buf);
		this._q_upgrade_itemID=this.readString(_buf);
		this._q_exp=this.readString(_buf);
		this._q_Crit=this.readString(_buf);
		this._q_breakthrough=this.readString(_buf);
		this._q_break_item=this.readString(_buf);
		this._q_break_attribute=this.readString(_buf);
		this._q_break_attribute_formula=this.readString(_buf);
	}

	__getset(0,__proto,'q_upgrade_attribute',function(){
		return this._q_upgrade_attribute;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_level_max',function(){
		return this._q_level_max;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	__getset(0,__proto,'q_exp_max',function(){
		return this._q_exp_max;
	});

	__getset(0,__proto,'q_upgrade_itemID',function(){
		return this._q_upgrade_itemID;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_attribute_formula_provisional',function(){
		return this._q_attribute_formula_provisional;
	});

	__getset(0,__proto,'q_Crit',function(){
		return this._q_Crit;
	});

	__getset(0,__proto,'q_breakthrough',function(){
		return this._q_breakthrough;
	});

	__getset(0,__proto,'q_break_item',function(){
		return this._q_break_item;
	});

	__getset(0,__proto,'q_break_attribute',function(){
		return this._q_break_attribute;
	});

	__getset(0,__proto,'q_break_attribute_formula',function(){
		return this._q_break_attribute_formula;
	});

	return Q_totem;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*指引组包
*/
//class datasets.bean.Q_guide_group extends engine.base.data.Bean
var Q_guide_group=(function(_super){
	function Q_guide_group(){
		/**指引类型 */
		this._q_guide_id=0;
		/**指引配置 */
		this._q_guide_conter=null;
		Q_guide_group.__super.call(this);
	}

	__class(Q_guide_group,'datasets.bean.Q_guide_group',_super);
	var __proto=Q_guide_group.prototype;
	__proto.read=function(_buf){
		this._q_guide_id=this.readInt(_buf);
		this._q_guide_conter=this.readString(_buf);
	}

	__getset(0,__proto,'q_guide_id',function(){
		return this._q_guide_id;
	});

	__getset(0,__proto,'q_guide_conter',function(){
		return this._q_guide_conter;
	});

	return Q_guide_group;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*录像馆变量表
*/
//class datasets.bean.Q_video_param extends engine.base.data.Bean
var Q_video_param=(function(_super){
	function Q_video_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_video_param.__super.call(this);
	}

	__class(Q_video_param,'datasets.bean.Q_video_param',_super);
	var __proto=Q_video_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_video_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*帮会签到(蟠桃会)
*/
//class datasets.bean.Q_guild_sign extends engine.base.data.Bean
var Q_guild_sign=(function(_super){
	function Q_guild_sign(){
		/**序列 */
		this._q_id=0;
		/**签到消耗 */
		this._q_cost=null;
		/**签到奖励 */
		this._q_reward=null;
		Q_guild_sign.__super.call(this);
	}

	__class(Q_guild_sign,'datasets.bean.Q_guild_sign',_super);
	var __proto=Q_guild_sign.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cost=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_guild_sign;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*任务表(所有任务都这里)
*/
//class datasets.bean.Q_mission_base extends engine.base.data.Bean
var Q_mission_base=(function(_super){
	function Q_mission_base(){
		/**主线:10000-19999 限时:20000-29999 日常:30000-39999 */
		this._q_mission_id=0;
		/**1 主线 参数：下一个任务 2 平定安邦 参数：所需元宝 3 成就 4 军团守护 5 军团广场 6 护符 参数：所需vip等级 7 战令 参数：重置所需天数 8 官位 9 CRON类型限时任务 参数{"cron":"0 0 10 ? * 2","day":5,"kaifuMin":999,"kaifuMax":999,"hefuMin":999,"hefuMax":999,"panel":111}10 相对时间类型限时任务 参数{"type":1,"begin":5,"end":10,"panel":4455}1开服 2合服 11 实名认证任务 14 每天跨天时程序自动重置任务 */
		this._q_type=0;
		/**类型参数 */
		this._q_param=null;
		/**任务名称 */
		this._q_name=null;
		/**1 穿戴装备 目标参数，部位（0表示任意部位） 2 升级技能 目标参数（任意角色满足条件即可） 3 通关指定副本 关卡id参数 4 完成指定副本挑战 关卡类型id参数 5 角色提升至N级，目标参数 6 角色提升至N转，目标参数 7 前往新地图， 关卡参数 8 开启自动挑战 （点击视作完成，参数格式程序定） 9 挑战竞技场N次 目标参数 10 完成N次押镖 目标参数 11 熔炼装备 次数 12 完成N次师门任务 次数参数 13 完成N次组队副本 次数参数 14 通关指定爬塔副本 爬塔副本id参数 100 武将培养N次 次数参数 101 装备强化n次 次数参数 102 坐骑进阶n次 次数参数 103 翅膀进阶n次 次数参数 104 装备精炼n次 次数参数 105 守护培养n次 次数参数 */
		this._q_mission_type=0;
		/**剧情半身像对白[{"camp":1,"talk":[["a","曹操","今天天气不错"],["b","郭嘉","是的，主公"]]},{"camp":2,"talk":[["aa","刘备","赵子龙一身是胆"],["bb","赵云","谢主公夸奖"]]}] */
		this._q_dialogue=null;
		/**完成任务需求文字描述 */
		this._q_describe=null;
		/**打开的功能面板 */
		this._q_openfunc=0;
		/**任务目标参数[参数1,参数2...] */
		this._q_target_str=null;
		/**兑换参数 */
		this._q_exchange=null;
		/**可完成次数 */
		this._q_num=0;
		/**是否需要引导 */
		this._q_guide=0;
		/**任务奖励（通用奖励字符串） */
		this._q_reward=null;
		/**任务奖励 自适应装备投放 */
		this._q_reward2=null;
		/**是否自动完成(true,false)*/
		this._q_auto_finish=false;
		/**触发任务后持续时间 (秒)*/
		this._q_triggertime=0;
		/**成就类型 */
		this._q_achievement_type=0;
		/**推送礼包组id，互斥任务为同一个组id，在推送时不会同时冲突触发 */
		this._q_group=0;
		/**运营活动礼包战斗力展示配置 */
		this._q_fighting_capacity=null;
		Q_mission_base.__super.call(this);
	}

	__class(Q_mission_base,'datasets.bean.Q_mission_base',_super);
	var __proto=Q_mission_base.prototype;
	__proto.read=function(_buf){
		this._q_mission_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_param=this.readString(_buf);
		this._q_name=this.readString(_buf);
		this._q_mission_type=this.readInt(_buf);
		this._q_dialogue=this.readString(_buf);
		this._q_describe=this.readString(_buf);
		this._q_openfunc=this.readInt(_buf);
		this._q_target_str=this.readString(_buf);
		this._q_exchange=this.readString(_buf);
		this._q_num=this.readInt(_buf);
		this._q_guide=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
		this._q_reward2=this.readString(_buf);
		this._q_auto_finish=this.readBoolean(_buf);
		this._q_triggertime=this.readInt(_buf);
		this._q_achievement_type=this.readInt(_buf);
		this._q_group=this.readInt(_buf);
		this._q_fighting_capacity=this.readString(_buf);
	}

	__getset(0,__proto,'q_mission_id',function(){
		return this._q_mission_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_mission_type',function(){
		return this._q_mission_type;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_openfunc',function(){
		return this._q_openfunc;
	});

	__getset(0,__proto,'q_num',function(){
		return this._q_num;
	});

	__getset(0,__proto,'q_dialogue',function(){
		return this._q_dialogue;
	});

	__getset(0,__proto,'q_exchange',function(){
		return this._q_exchange;
	});

	__getset(0,__proto,'q_target_str',function(){
		return this._q_target_str;
	});

	__getset(0,__proto,'q_describe',function(){
		return this._q_describe;
	});

	__getset(0,__proto,'q_guide',function(){
		return this._q_guide;
	});

	__getset(0,__proto,'q_reward2',function(){
		return this._q_reward2;
	});

	__getset(0,__proto,'q_fighting_capacity',function(){
		return this._q_fighting_capacity;
	});

	__getset(0,__proto,'q_auto_finish',function(){
		return this._q_auto_finish;
	});

	__getset(0,__proto,'q_triggertime',function(){
		return this._q_triggertime;
	});

	__getset(0,__proto,'q_achievement_type',function(){
		return this._q_achievement_type;
	});

	__getset(0,__proto,'q_group',function(){
		return this._q_group;
	});

	return Q_mission_base;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门刷怪表
*/
//class datasets.bean.Q_recommend extends engine.base.data.Bean
var Q_recommend=(function(_super){
	function Q_recommend(){
		/**推荐ID */
		this._q_id=0;
		/**推荐类型 */
		this._q_type_id=0;
		/**推荐开启条件 */
		this._q_open=null;
		/**推荐结束条件 */
		this._q_end=null;
		/**推荐顺序，同类型数字越大越靠前 */
		this._q_type_sort=0;
		/**类型名字 */
		this._q_type_name=null;
		/**目标说明 */
		this._q_target_name=null;
		/**目标配置 1完成任务 2完成爬塔副本 */
		this._q_target=null;
		/**按钮类型 []无按钮，1跳转界面 2领取奖励 */
		this._q_btn_type=null;
		/**推荐奖励 */
		this._q_reward=null;
		/**完成积分 */
		this._q_integral=0;
		Q_recommend.__super.call(this);
	}

	__class(Q_recommend,'datasets.bean.Q_recommend',_super);
	var __proto=Q_recommend.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type_id=this.readInt(_buf);
		this._q_open=this.readString(_buf);
		this._q_end=this.readString(_buf);
		this._q_type_sort=this.readInt(_buf);
		this._q_type_name=this.readString(_buf);
		this._q_target_name=this.readString(_buf);
		this._q_target=this.readString(_buf);
		this._q_btn_type=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_integral=this.readInt(_buf);
	}

	__getset(0,__proto,'q_btn_type',function(){
		return this._q_btn_type;
	});

	__getset(0,__proto,'q_target',function(){
		return this._q_target;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type_id',function(){
		return this._q_type_id;
	});

	__getset(0,__proto,'q_open',function(){
		return this._q_open;
	});

	__getset(0,__proto,'q_end',function(){
		return this._q_end;
	});

	__getset(0,__proto,'q_target_name',function(){
		return this._q_target_name;
	});

	__getset(0,__proto,'q_type_sort',function(){
		return this._q_type_sort;
	});

	__getset(0,__proto,'q_type_name',function(){
		return this._q_type_name;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_integral',function(){
		return this._q_integral;
	});

	return Q_recommend;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*进阶
*/
//class datasets.bean.Q_upgrade extends engine.base.data.Bean
var Q_upgrade=(function(_super){
	function Q_upgrade(){
		/**进阶类型 */
		this._q_type=0;
		/**等级 */
		this._q_level=0;
		/**显示名称 */
		this._q_name=null;
		/**升级所需经验(0表示无法升级)*/
		this._q_exp=0;
		/**本级属性 */
		this._q_attribute=null;
		/**临时属性万分比公式(jingyan:经验)*/
		this._q_attribute_formula=null;
		/**消耗道具字符串 */
		this._q_cost_goods=null;
		/**消耗道具获得经验的概率(万分比)*/
		this._q_prop=0;
		/**时装id */
		this._q_show=0;
		Q_upgrade.__super.call(this);
	}

	__class(Q_upgrade,'datasets.bean.Q_upgrade',_super);
	var __proto=Q_upgrade.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_level=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_exp=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_attribute_formula=this.readString(_buf);
		this._q_cost_goods=this.readString(_buf);
		this._q_prop=this.readInt(_buf);
		this._q_show=this.readInt(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_prop',function(){
		return this._q_prop;
	});

	__getset(0,__proto,'q_exp',function(){
		return this._q_exp;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_attribute_formula',function(){
		return this._q_attribute_formula;
	});

	__getset(0,__proto,'q_cost_goods',function(){
		return this._q_cost_goods;
	});

	__getset(0,__proto,'q_show',function(){
		return this._q_show;
	});

	return Q_upgrade;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*洗练类型
*/
//class datasets.bean.Q_xilian_type extends engine.base.data.Bean
var Q_xilian_type=(function(_super){
	function Q_xilian_type(){
		/**类型 */
		this._q_type=0;
		/**洗练道具 */
		this._q_item=null;
		/**洗练次数对应星级 */
		this._q_star_times=null;
		/**锁定开销 */
		this._q_lock_cost=null;
		Q_xilian_type.__super.call(this);
	}

	__class(Q_xilian_type,'datasets.bean.Q_xilian_type',_super);
	var __proto=Q_xilian_type.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_item=this.readString(_buf);
		this._q_star_times=this.readString(_buf);
		this._q_lock_cost=this.readString(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_lock_cost',function(){
		return this._q_lock_cost;
	});

	__getset(0,__proto,'q_item',function(){
		return this._q_item;
	});

	__getset(0,__proto,'q_star_times',function(){
		return this._q_star_times;
	});

	return Q_xilian_type;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军团排名奖励
*/
//class datasets.bean.Q_open_reward_FirstArmy extends engine.base.data.Bean
var Q_open_reward_FirstArmy=(function(_super){
	function Q_open_reward_FirstArmy(){
		/**唯一id */
		this._q_id=0;
		/**区间排名最小值 */
		this._q_rank_min=0;
		/**区间排名最大值 */
		this._q_rank_max=0;
		/**团长奖励 */
		this._q_reward_high=null;
		/**团员奖励 */
		this._q_reward_normal=null;
		Q_open_reward_FirstArmy.__super.call(this);
	}

	__class(Q_open_reward_FirstArmy,'datasets.bean.Q_open_reward_FirstArmy',_super);
	var __proto=Q_open_reward_FirstArmy.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_rank_min=this.readInt(_buf);
		this._q_rank_max=this.readInt(_buf);
		this._q_reward_high=this.readString(_buf);
		this._q_reward_normal=this.readString(_buf);
	}

	__getset(0,__proto,'q_reward_normal',function(){
		return this._q_reward_normal;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_rank_min',function(){
		return this._q_rank_min;
	});

	__getset(0,__proto,'q_rank_max',function(){
		return this._q_rank_max;
	});

	__getset(0,__proto,'q_reward_high',function(){
		return this._q_reward_high;
	});

	return Q_open_reward_FirstArmy;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物列表
*/
//class datasets.bean.Q_monster extends engine.base.data.Bean
var Q_monster=(function(_super){
	function Q_monster(){
		/**怪物ID（ 1-5000挂机小怪 5001-10000挂机首领 10001-15000关卡小怪 15001-20000关卡首领 20001-21000材料小怪 21001-22000材料首领 22001-25000通天塔小怪25001-28000通天首领 28001-30000藏宝小怪 30001-32000藏宝首领 50001-51000个人小怪 51001-52000个人首领 52001-53000全民小怪 53001-54000全民首领 54001-55000野外小怪 55001-56000野外首领 56001-57000至尊小怪 57001-58000至尊首领 58001-59000师门小怪 59001-60000师门首领 60001-60100竞技场角色 60101-60200竞技场副将 60201-60300竞技场女将 60301-60400竞技场蛮将 60401-60500竞技场机关 60501-60600竞技场战兽 */
		this._q_id=0;
		/**属性[[属性1,10],[属性2,20]...] 1生命 2速度 3攻击 4防御 */
		this._q_attribute=null;
		Q_monster.__super.call(this);
	}

	__class(Q_monster,'datasets.bean.Q_monster',_super);
	var __proto=Q_monster.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_attribute=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	return Q_monster;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*超值补给表
*/
//class datasets.bean.Q_super_value extends engine.base.data.Bean
var Q_super_value=(function(_super){
	function Q_super_value(){
		/**活动唯一ID */
		this._q_id=0;
		/**通用激活条件 */
		this._q_condition=null;
		/**普通奖励 */
		this._q_reward=null;
		/**高级奖励 */
		this._q_best_reward=null;
		Q_super_value.__super.call(this);
	}

	__class(Q_super_value,'datasets.bean.Q_super_value',_super);
	var __proto=Q_super_value.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_best_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_best_reward',function(){
		return this._q_best_reward;
	});

	return Q_super_value;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜活动奖励
*/
//class datasets.bean.Q_rank_activity_prize extends engine.base.data.Bean
var Q_rank_activity_prize=(function(_super){
	function Q_rank_activity_prize(){
		/**活动 */
		this._q_activity=0;
		/**名次下限 */
		this._q_rank_min=0;
		/**名次上限 */
		this._q_rank_max=0;
		/**奖励 */
		this._q_prize=null;
		/**特殊奖励条件 */
		this._q_special_condition=null;
		/**特殊奖励 */
		this._q_special_prize=null;
		Q_rank_activity_prize.__super.call(this);
	}

	__class(Q_rank_activity_prize,'datasets.bean.Q_rank_activity_prize',_super);
	var __proto=Q_rank_activity_prize.prototype;
	__proto.read=function(_buf){
		this._q_activity=this.readInt(_buf);
		this._q_rank_min=this.readInt(_buf);
		this._q_rank_max=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
		this._q_special_condition=this.readString(_buf);
		this._q_special_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_rank_min',function(){
		return this._q_rank_min;
	});

	__getset(0,__proto,'q_activity',function(){
		return this._q_activity;
	});

	__getset(0,__proto,'q_special_condition',function(){
		return this._q_special_condition;
	});

	__getset(0,__proto,'q_rank_max',function(){
		return this._q_rank_max;
	});

	__getset(0,__proto,'q_special_prize',function(){
		return this._q_special_prize;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	return Q_rank_activity_prize;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*压缩纹理
*/
//class datasets.bean.Q_zip extends engine.base.data.Bean
var Q_zip=(function(_super){
	function Q_zip(){
		/**编号 */
		this._q_id=0;
		/**资源类型 */
		this._q_type=0;
		/**压缩类型(0压缩,1满足条件压缩)*/
		this._q_style=0;
		/**资源动作[1|5|6](1,5,6压缩)*/
		this._q_active=null;
		/**装备或者翅膀的阶数范围压缩([0|2]0至2压缩)*/
		this._q_rank=null;
		Q_zip.__super.call(this);
	}

	__class(Q_zip,'datasets.bean.Q_zip',_super);
	var __proto=Q_zip.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_style=this.readInt(_buf);
		this._q_active=this.readString(_buf);
		this._q_rank=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_style',function(){
		return this._q_style;
	});

	__getset(0,__proto,'q_rank',function(){
		return this._q_rank;
	});

	__getset(0,__proto,'q_active',function(){
		return this._q_active;
	});

	return Q_zip;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动参数
*/
//class datasets.bean.Q_super_value_param extends engine.base.data.Bean
var Q_super_value_param=(function(_super){
	function Q_super_value_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_super_value_param.__super.call(this);
	}

	__class(Q_super_value_param,'datasets.bean.Q_super_value_param',_super);
	var __proto=Q_super_value_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_super_value_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*活动数据库
*/
//class datasets.bean.Q_huodong_panel extends engine.base.data.Bean
var Q_huodong_panel=(function(_super){
	function Q_huodong_panel(){
		/**活动ID（不能重复）为避免重复，ID新增一个配置规则：为 YYMMDDID：例如 150824001表示15年8月24日配置的001ID的活动。老活动不变。新活动按照该规则来配置 */
		this._q_id=0;
		/**活动名称，显示在面板上的活动名字 */
		this._q_name=null;
		/**活动分组(1首充 2 8元礼包 3机关礼包，4军师礼包，5蛮将礼包，6直升一阶，7 0元礼包，8每日活动，9时装礼包，11限时挑战，12每日排行，13开服活动，14多档充值，15开服目标，21一元秒杀） */
		this._q_type_lingqu=0;
		/**按钮信息 res/sort/incity/infield/funcID/light */
		this._q_icon=null;
		/**活动所在的分页按钮icon */
		this._q_fenye_icon=0;
		/**参与通告 格式：[[1,1,1,1],[2,2,2,2]] 格式说明：[[通告类型,备用参数,通告对象参数,通告信息ID],[通告类型,备用参数,通告对象参数,通告信息ID]] 通告类型： 1：领取奖励触发通告 2：满足参与条件触发通告（例如：购买基金触发通告） 备用参数： 暂无意义（后期拓展，例如，指定领取次数才会触发通告） 通告对象参数： 1：全服通告 2：公会通告 通告信息ID： message表的模板ID */
		this._q_notice=null;
		/**参数 */
		this._q_param=null;
		/**活动是否推送：1，每次上限都会推送 2，每天第一次上线推送 为空，不推送。 */
		this._q_push=0;
		/**推送排序 */
		this._q_push_num=0;
		/**界面排序 */
		this._q_sort=0;
		Q_huodong_panel.__super.call(this);
	}

	__class(Q_huodong_panel,'datasets.bean.Q_huodong_panel',_super);
	var __proto=Q_huodong_panel.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type_lingqu=this.readInt(_buf);
		this._q_icon=this.readString(_buf);
		this._q_fenye_icon=this.readInt(_buf);
		this._q_notice=this.readString(_buf);
		this._q_param=this.readString(_buf);
		this._q_push=this.readInt(_buf);
		this._q_push_num=this.readInt(_buf);
		this._q_sort=this.readInt(_buf);
	}

	__getset(0,__proto,'q_fenye_icon',function(){
		return this._q_fenye_icon;
	});

	__getset(0,__proto,'q_icon',function(){
		return this._q_icon;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_push_num',function(){
		return this._q_push_num;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_type_lingqu',function(){
		return this._q_type_lingqu;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	__getset(0,__proto,'q_push',function(){
		return this._q_push;
	});

	__getset(0,__proto,'q_sort',function(){
		return this._q_sort;
	});

	return Q_huodong_panel;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*录像馆配置表
*/
//class datasets.bean.Q_video extends engine.base.data.Bean
var Q_video=(function(_super){
	function Q_video(){
		/**分类 */
		this._q_type=0;
		/**名称 */
		this._q_name=null;
		/**开放条件 */
		this._q_condistion=null;
		/**对应功能 */
		this._q_funcid=0;
		/**进入所需战力 */
		this._q_fight=0;
		/**进入所需点赞数 */
		this._q_like=0;
		/**列表最大数量 */
		this._q_max=0;
		Q_video.__super.call(this);
	}

	__class(Q_video,'datasets.bean.Q_video',_super);
	var __proto=Q_video.prototype;
	__proto.read=function(_buf){
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_condistion=this.readString(_buf);
		this._q_funcid=this.readInt(_buf);
		this._q_fight=this.readInt(_buf);
		this._q_like=this.readInt(_buf);
		this._q_max=this.readInt(_buf);
	}

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_like',function(){
		return this._q_like;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_condistion',function(){
		return this._q_condistion;
	});

	__getset(0,__proto,'q_funcid',function(){
		return this._q_funcid;
	});

	__getset(0,__proto,'q_max',function(){
		return this._q_max;
	});

	__getset(0,__proto,'q_fight',function(){
		return this._q_fight;
	});

	return Q_video;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*祥瑞事件配置表
*/
//class datasets.bean.Q_xiangrui extends engine.base.data.Bean
var Q_xiangrui=(function(_super){
	function Q_xiangrui(){
		/**唯一ID */
		this._q_id=0;
		/**祥瑞事件ID */
		this._q_event_id=0;
		/**事件类型 */
		this._q_type=0;
		/**奇遇人物 */
		this._q_figure=null;
		/**图片ID */
		this._q_picture_id=null;
		/**对话 */
		this._q_speak=null;
		/**选项（领取：-1） */
		this._q_parameter=null;
		/**进入步骤需要消耗 */
		this._q_consume=null;
		/**怪物ID */
		this._q_monster=null;
		/**奖励 */
		this._q_reward=null;
		Q_xiangrui.__super.call(this);
	}

	__class(Q_xiangrui,'datasets.bean.Q_xiangrui',_super);
	var __proto=Q_xiangrui.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_event_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_figure=this.readString(_buf);
		this._q_picture_id=this.readString(_buf);
		this._q_speak=this.readString(_buf);
		this._q_parameter=this.readString(_buf);
		this._q_consume=this.readString(_buf);
		this._q_monster=this.readString(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_parameter',function(){
		return this._q_parameter;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_event_id',function(){
		return this._q_event_id;
	});

	__getset(0,__proto,'q_monster',function(){
		return this._q_monster;
	});

	__getset(0,__proto,'q_consume',function(){
		return this._q_consume;
	});

	__getset(0,__proto,'q_speak',function(){
		return this._q_speak;
	});

	__getset(0,__proto,'q_figure',function(){
		return this._q_figure;
	});

	__getset(0,__proto,'q_picture_id',function(){
		return this._q_picture_id;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_xiangrui;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*女将参数
*/
//class datasets.bean.Q_fit_param extends engine.base.data.Bean
var Q_fit_param=(function(_super){
	function Q_fit_param(){
		/**参数id */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_fit_param.__super.call(this);
	}

	__class(Q_fit_param,'datasets.bean.Q_fit_param',_super);
	var __proto=Q_fit_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_fit_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*怪物列表
*/
//class datasets.bean.Q_monster_talk extends engine.base.data.Bean
var Q_monster_talk=(function(_super){
	function Q_monster_talk(){
		/**对话id */
		this._q_id=0;
		/**怪物对话 */
		this._q_talk=null;
		Q_monster_talk.__super.call(this);
	}

	__class(Q_monster_talk,'datasets.bean.Q_monster_talk',_super);
	var __proto=Q_monster_talk.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_talk=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_talk',function(){
		return this._q_talk;
	});

	return Q_monster_talk;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*通用战令表
*/
//class datasets.bean.Q_common_war_token extends engine.base.data.Bean
var Q_common_war_token=(function(_super){
	function Q_common_war_token(){
		/**序列号 */
		this._q_id=0;
		/**战令活动类型 */
		this._q_type=0;
		/**领取条件(通用条件） */
		this._q_condition=null;
		/**普通奖励（[道具id,数量]） */
		this._q_reward=null;
		/**高级奖励（[道具id,数量]） */
		this._q_reward_2=null;
		/**展示奖励 */
		this._q_show=0;
		Q_common_war_token.__super.call(this);
	}

	__class(Q_common_war_token,'datasets.bean.Q_common_war_token',_super);
	var __proto=Q_common_war_token.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_condition=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_reward_2=this.readString(_buf);
		this._q_show=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_reward_2',function(){
		return this._q_reward_2;
	});

	__getset(0,__proto,'q_show',function(){
		return this._q_show;
	});

	return Q_common_war_token;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*充值
*/
//class datasets.bean.Q_recharge extends engine.base.data.Bean
var Q_recharge=(function(_super){
	function Q_recharge(){
		/**活动商品id */
		this._q_id=0;
		/**关联充值id(前端展示用)*/
		this._q_recharge=0;
		/**人民币 */
		this._q_rmb=0;
		/**美元 */
		this._q_dollar=null;
		/**获得元宝 */
		this._q_gold=0;
		/**首冲该档位赠送元宝 */
		this._q_give=0;
		/**首冲返还(所有档位总共触发一次)*/
		this._q_first_give=0;
		/**是否是首充 1首充 */
		this._q_first_recharge=0;
		/**是否参与活动计算 */
		this._q_record=false;
		Q_recharge.__super.call(this);
	}

	__class(Q_recharge,'datasets.bean.Q_recharge',_super);
	var __proto=Q_recharge.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_recharge=this.readInt(_buf);
		this._q_rmb=this.readInt(_buf);
		this._q_dollar=this.readString(_buf);
		this._q_gold=this.readInt(_buf);
		this._q_give=this.readInt(_buf);
		this._q_first_give=this.readInt(_buf);
		this._q_first_recharge=this.readInt(_buf);
		this._q_record=this.readBoolean(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_record',function(){
		return this._q_record;
	});

	__getset(0,__proto,'q_recharge',function(){
		return this._q_recharge;
	});

	__getset(0,__proto,'q_give',function(){
		return this._q_give;
	});

	__getset(0,__proto,'q_rmb',function(){
		return this._q_rmb;
	});

	__getset(0,__proto,'q_first_recharge',function(){
		return this._q_first_recharge;
	});

	__getset(0,__proto,'q_dollar',function(){
		return this._q_dollar;
	});

	__getset(0,__proto,'q_gold',function(){
		return this._q_gold;
	});

	__getset(0,__proto,'q_first_give',function(){
		return this._q_first_give;
	});

	return Q_recharge;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*空城计配置表
*/
//class datasets.bean.Q_kongchengji extends engine.base.data.Bean
var Q_kongchengji=(function(_super){
	function Q_kongchengji(){
		/**序列号 */
		this._q_id=0;
		/**城池名称 */
		this._q_name=null;
		/**城池等级 */
		this._q_level=0;
		/**城池模型 */
		this._q_model=0;
		/**占领容积 */
		this._q_inside=0;
		/**占领计时收益,每60秒 */
		this._q_reward_time=null;
		/**占领结算收益 */
		this._q_reward=null;
		/**关联的普通怪物组 */
		this._q_monster=null;
		Q_kongchengji.__super.call(this);
	}

	__class(Q_kongchengji,'datasets.bean.Q_kongchengji',_super);
	var __proto=Q_kongchengji.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_level=this.readInt(_buf);
		this._q_model=this.readInt(_buf);
		this._q_inside=this.readInt(_buf);
		this._q_reward_time=this.readString(_buf);
		this._q_reward=this.readString(_buf);
		this._q_monster=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_reward_time',function(){
		return this._q_reward_time;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_inside',function(){
		return this._q_inside;
	});

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_model',function(){
		return this._q_model;
	});

	__getset(0,__proto,'q_monster',function(){
		return this._q_monster;
	});

	return Q_kongchengji;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*装备套装
*/
//class datasets.bean.Q_equip_suit extends engine.base.data.Bean
var Q_equip_suit=(function(_super){
	function Q_equip_suit(){
		/**套装序号 */
		this._q_id=0;
		/**套装名称 */
		this._q_name=null;
		/**套装装备 */
		this._q_equip=null;
		/**套装属性 */
		this._q_attr=null;
		/**激活套装公告 messageID [3件公告,6件公告,10件公告] */
		this._q_notice=null;
		Q_equip_suit.__super.call(this);
	}

	__class(Q_equip_suit,'datasets.bean.Q_equip_suit',_super);
	var __proto=Q_equip_suit.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_equip=this.readString(_buf);
		this._q_attr=this.readString(_buf);
		this._q_notice=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_equip',function(){
		return this._q_equip;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_notice',function(){
		return this._q_notice;
	});

	return Q_equip_suit;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*试炼之塔表
*/
//class datasets.bean.Q_tower extends engine.base.data.Bean
var Q_tower=(function(_super){
	function Q_tower(){
		/**唯一id */
		this._q_id=0;
		/**层 */
		this._q_layer=0;
		/**1昊天塔（魏国） 2坤山塔（蜀国） 3人皇塔（吴国） 4乱星塔（群雄） */
		this._q_type=0;
		/**副本名称 */
		this._q_name=null;
		/**副本模式：1普通模式 2困难模式 */
		this._q_pattern=0;
		/**武将上阵条件≥配置等级 */
		this._q_petLevel=0;
		/**跳过类型(0不可 1可以跳过） */
		this._q_skip_type=0;
		/**红点战力提示 */
		this._q_power=0;
		/**通关奖励 */
		this._q_prize=null;
		/**怪物组 */
		this._q_monster_group=null;
		/**副本参数 */
		this._q_param=null;
		Q_tower.__super.call(this);
	}

	__class(Q_tower,'datasets.bean.Q_tower',_super);
	var __proto=Q_tower.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_layer=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_pattern=this.readInt(_buf);
		this._q_petLevel=this.readInt(_buf);
		this._q_skip_type=this.readInt(_buf);
		this._q_power=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
		this._q_monster_group=this.readString(_buf);
		this._q_param=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_power',function(){
		return this._q_power;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_layer',function(){
		return this._q_layer;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_pattern',function(){
		return this._q_pattern;
	});

	__getset(0,__proto,'q_petLevel',function(){
		return this._q_petLevel;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_skip_type',function(){
		return this._q_skip_type;
	});

	__getset(0,__proto,'q_monster_group',function(){
		return this._q_monster_group;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	return Q_tower;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*火烧赤壁任务参数
*/
//class datasets.bean.Q_chibi_pram extends engine.base.data.Bean
var Q_chibi_pram=(function(_super){
	function Q_chibi_pram(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_chibi_pram.__super.call(this);
	}

	__class(Q_chibi_pram,'datasets.bean.Q_chibi_pram',_super);
	var __proto=Q_chibi_pram.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_chibi_pram;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*功能开放表
*/
//class datasets.bean.Q_newfunc extends engine.base.data.Bean
var Q_newfunc=(function(_super){
	function Q_newfunc(){
		/**编号id */
		this._q_id=0;
		/**功能名字 */
		this._q_string_name=null;
		/**通用激活条件 */
		this._q_condition=null;
		/**属性加成 */
		this._q_attribute=null;
		/**开启功能前是否显示入口（0是1否） */
		this._q_ifSee=0;
		/**通用预告条件 */
		this._q_notice_condition=0;
		/**是否手动激活功能 */
		this._q_manual=false;
		/**奖励字段 */
		this._q_reward=null;
		/**表现形式（0为不弹，1为弹出，2弹出tips框，3箭头指引，4弹新功能面板但是不弹功能面板） */
		this._q_show_panel=0;
		/**功能描述（支持html） */
		this._q_info=null;
		/**资源编号 */
		this._q_resource=null;
		/**预告资源编号 1序列帧 2jpg */
		this._q_notice_resource=null;
		/**是否永久屏蔽（0否1是） */
		this._q_close=0;
		Q_newfunc.__super.call(this);
	}

	__class(Q_newfunc,'datasets.bean.Q_newfunc',_super);
	var __proto=Q_newfunc.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_string_name=this.readString(_buf);
		this._q_condition=this.readString(_buf);
		this._q_attribute=this.readString(_buf);
		this._q_ifSee=this.readInt(_buf);
		this._q_notice_condition=this.readInt(_buf);
		this._q_manual=this.readBoolean(_buf);
		this._q_reward=this.readString(_buf);
		this._q_show_panel=this.readInt(_buf);
		this._q_info=this.readString(_buf);
		this._q_resource=this.readString(_buf);
		this._q_notice_resource=this.readString(_buf);
		this._q_close=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_condition',function(){
		return this._q_condition;
	});

	__getset(0,__proto,'q_string_name',function(){
		return this._q_string_name;
	});

	__getset(0,__proto,'q_notice_condition',function(){
		return this._q_notice_condition;
	});

	__getset(0,__proto,'q_attribute',function(){
		return this._q_attribute;
	});

	__getset(0,__proto,'q_show_panel',function(){
		return this._q_show_panel;
	});

	__getset(0,__proto,'q_ifSee',function(){
		return this._q_ifSee;
	});

	__getset(0,__proto,'q_close',function(){
		return this._q_close;
	});

	__getset(0,__proto,'q_manual',function(){
		return this._q_manual;
	});

	__getset(0,__proto,'q_notice_resource',function(){
		return this._q_notice_resource;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_info',function(){
		return this._q_info;
	});

	__getset(0,__proto,'q_resource',function(){
		return this._q_resource;
	});

	return Q_newfunc;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*达标有礼转盘配置表
*/
//class datasets.bean.Q_act_dabiao_turntable extends engine.base.data.Bean
var Q_act_dabiao_turntable=(function(_super){
	function Q_act_dabiao_turntable(){
		/**唯一id */
		this._q_id=0;
		/**相对于活动开启时间，第几天的 */
		this._q_day=0;
		/**奖励,[道具id,数量] */
		this._q_reward=null;
		Q_act_dabiao_turntable.__super.call(this);
	}

	__class(Q_act_dabiao_turntable,'datasets.bean.Q_act_dabiao_turntable',_super);
	var __proto=Q_act_dabiao_turntable.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_day=this.readInt(_buf);
		this._q_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_day',function(){
		return this._q_day;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	return Q_act_dabiao_turntable;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*王者争霸段位数据库
*/
//class datasets.bean.Q_kingwar extends engine.base.data.Bean
var Q_kingwar=(function(_super){
	function Q_kingwar(){
		/**序号 */
		this._q_id=0;
		/**段位名称 */
		this._q_name=null;
		/**段位最大等级 */
		this._q_next_id=0;
		/**每级升级所需星级 */
		this._q_star=0;
		/**周结算后段位ID */
		this._q_clearing_level=0;
		/**星级不足是否降段 0否1是 */
		this._q_downgrading=0;
		/**胜利奖励 */
		this._q_reward_victory=null;
		/**失败奖励 */
		this._q_reward_failure=null;
		/**结算奖励 */
		this._q_prize=null;
		Q_kingwar.__super.call(this);
	}

	__class(Q_kingwar,'datasets.bean.Q_kingwar',_super);
	var __proto=Q_kingwar.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_next_id=this.readInt(_buf);
		this._q_star=this.readInt(_buf);
		this._q_clearing_level=this.readInt(_buf);
		this._q_downgrading=this.readInt(_buf);
		this._q_reward_victory=this.readString(_buf);
		this._q_reward_failure=this.readString(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_next_id',function(){
		return this._q_next_id;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_star',function(){
		return this._q_star;
	});

	__getset(0,__proto,'q_reward_victory',function(){
		return this._q_reward_victory;
	});

	__getset(0,__proto,'q_clearing_level',function(){
		return this._q_clearing_level;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	__getset(0,__proto,'q_reward_failure',function(){
		return this._q_reward_failure;
	});

	__getset(0,__proto,'q_downgrading',function(){
		return this._q_downgrading;
	});

	return Q_kingwar;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*猎命
*/
//class datasets.bean.Q_lieming extends engine.base.data.Bean
var Q_lieming=(function(_super){
	function Q_lieming(){
		/**猎命等级 */
		this._q_id=0;
		/**猎命名称 */
		this._q_name=null;
		/**猎命金币付费（[道具id，数量]） */
		this._q_cost=null;
		/**猎命奖励id(配置奖励id关联奖励表） */
		this._q_reward=0;
		/**返回初始几率 */
		this._q_return_prop=0;
		/**维持不变几率 */
		this._q_stay_prop=0;
		/**提升1档几率 */
		this._q_up_prop=0;
		Q_lieming.__super.call(this);
	}

	__class(Q_lieming,'datasets.bean.Q_lieming',_super);
	var __proto=Q_lieming.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_reward=this.readInt(_buf);
		this._q_return_prop=this.readInt(_buf);
		this._q_stay_prop=this.readInt(_buf);
		this._q_up_prop=this.readInt(_buf);
	}

	__getset(0,__proto,'q_up_prop',function(){
		return this._q_up_prop;
	});

	__getset(0,__proto,'q_stay_prop',function(){
		return this._q_stay_prop;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_reward',function(){
		return this._q_reward;
	});

	__getset(0,__proto,'q_return_prop',function(){
		return this._q_return_prop;
	});

	return Q_lieming;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*军团首领
*/
//class datasets.bean.Q_guild_boss_param extends engine.base.data.Bean
var Q_guild_boss_param=(function(_super){
	function Q_guild_boss_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_guild_boss_param.__super.call(this);
	}

	__class(Q_guild_boss_param,'datasets.bean.Q_guild_boss_param',_super);
	var __proto=Q_guild_boss_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_guild_boss_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.bean.Q_dungeon_param extends engine.base.data.Bean
var Q_dungeon_param=(function(_super){
	function Q_dungeon_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_dungeon_param.__super.call(this);
	}

	__class(Q_dungeon_param,'datasets.bean.Q_dungeon_param',_super);
	var __proto=Q_dungeon_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_dungeon_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*蛮将等级表
*/
//class datasets.bean.Q_officer_level extends engine.base.data.Bean
var Q_officer_level=(function(_super){
	function Q_officer_level(){
		/**等级 */
		this._q_level=0;
		/**属性 */
		this._q_attr=null;
		/**升级进度 */
		this._q_pro=0;
		Q_officer_level.__super.call(this);
	}

	__class(Q_officer_level,'datasets.bean.Q_officer_level',_super);
	var __proto=Q_officer_level.prototype;
	__proto.read=function(_buf){
		this._q_level=this.readInt(_buf);
		this._q_attr=this.readString(_buf);
		this._q_pro=this.readInt(_buf);
	}

	__getset(0,__proto,'q_level',function(){
		return this._q_level;
	});

	__getset(0,__proto,'q_attr',function(){
		return this._q_attr;
	});

	__getset(0,__proto,'q_pro',function(){
		return this._q_pro;
	});

	return Q_officer_level;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*战斗参数表
*/
//class datasets.bean.Q_fight_param extends engine.base.data.Bean
var Q_fight_param=(function(_super){
	function Q_fight_param(){
		/**id */
		this._q_id=0;
		/**值 */
		this._q_value=null;
		Q_fight_param.__super.call(this);
	}

	__class(Q_fight_param,'datasets.bean.Q_fight_param',_super);
	var __proto=Q_fight_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_fight_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*镇守城池产出表
*/
//class datasets.bean.Q_city_reward extends engine.base.data.Bean
var Q_city_reward=(function(_super){
	function Q_city_reward(){
		/**等级 */
		this._q_id=0;
		/**升级消耗 */
		this._q_cost=null;
		/**建筑1产出 */
		this._q_bullding_1=null;
		/**建筑2产出 */
		this._q_bullding_2=null;
		/**建筑3产出 */
		this._q_bullding_3=null;
		/**建筑4产出 */
		this._q_bullding_4=null;
		Q_city_reward.__super.call(this);
	}

	__class(Q_city_reward,'datasets.bean.Q_city_reward',_super);
	var __proto=Q_city_reward.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cost=this.readString(_buf);
		this._q_bullding_1=this.readString(_buf);
		this._q_bullding_2=this.readString(_buf);
		this._q_bullding_3=this.readString(_buf);
		this._q_bullding_4=this.readString(_buf);
	}

	__getset(0,__proto,'q_bullding_1',function(){
		return this._q_bullding_1;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_bullding_2',function(){
		return this._q_bullding_2;
	});

	__getset(0,__proto,'q_bullding_3',function(){
		return this._q_bullding_3;
	});

	__getset(0,__proto,'q_bullding_4',function(){
		return this._q_bullding_4;
	});

	return Q_city_reward;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*常驻内存资源
*/
//class datasets.bean.Q_install extends engine.base.data.Bean
var Q_install=(function(_super){
	function Q_install(){
		/**编号 */
		this._q_id=0;
		/**0不卸载 1预加载（仅新手村进入）2(小于等级指定就不卸载)*/
		this._q_type=0;
		/**资源类型(0-序列帧 1-spine 2-ui） */
		this._q_keytype=0;
		/**资源关键字(基本等于资源路径)*/
		this._q_key=null;
		Q_install.__super.call(this);
	}

	__class(Q_install,'datasets.bean.Q_install',_super);
	var __proto=Q_install.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_keytype=this.readInt(_buf);
		this._q_key=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_key',function(){
		return this._q_key;
	});

	__getset(0,__proto,'q_keytype',function(){
		return this._q_keytype;
	});

	return Q_install;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*群英会配置表
*/
//class datasets.bean.Q_qunying extends engine.base.data.Bean
var Q_qunying=(function(_super){
	function Q_qunying(){
		/**序号 1 报名 2 N进16 3 16进8 4 8进4 5 4进2 6 2进1 7 结束 */
		this._q_id=0;
		/**名称 */
		this._q_name=null;
		/**胜出奖励 */
		this._q_win_reward=null;
		/**参与奖励 */
		this._q_join_reward=null;
		/**三个档次押注金额 */
		this._q_bet_gold=null;
		/**押注获胜奖励 */
		this._q_bet_reward=null;
		/**押注失败奖励 */
		this._q_lose_reward=null;
		Q_qunying.__super.call(this);
	}

	__class(Q_qunying,'datasets.bean.Q_qunying',_super);
	var __proto=Q_qunying.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_win_reward=this.readString(_buf);
		this._q_join_reward=this.readString(_buf);
		this._q_bet_gold=this.readString(_buf);
		this._q_bet_reward=this.readString(_buf);
		this._q_lose_reward=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_bet_reward',function(){
		return this._q_bet_reward;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_join_reward',function(){
		return this._q_join_reward;
	});

	__getset(0,__proto,'q_win_reward',function(){
		return this._q_win_reward;
	});

	__getset(0,__proto,'q_bet_gold',function(){
		return this._q_bet_gold;
	});

	__getset(0,__proto,'q_lose_reward',function(){
		return this._q_lose_reward;
	});

	return Q_qunying;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*属性获取配置表
*/
//class datasets.bean.Q_attr_grow extends engine.base.data.Bean
var Q_attr_grow=(function(_super){
	function Q_attr_grow(){
		/**唯一ID */
		this._q_id=0;
		/**属性ID */
		this._q_attr_id=0;
		/**功能参数 */
		this._q_fun_parameter=null;
		Q_attr_grow.__super.call(this);
	}

	__class(Q_attr_grow,'datasets.bean.Q_attr_grow',_super);
	var __proto=Q_attr_grow.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_attr_id=this.readInt(_buf);
		this._q_fun_parameter=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_fun_parameter',function(){
		return this._q_fun_parameter;
	});

	__getset(0,__proto,'q_attr_id',function(){
		return this._q_attr_id;
	});

	return Q_attr_grow;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*三国令参数
*/
//class datasets.bean.Q_sgling_param extends engine.base.data.Bean
var Q_sgling_param=(function(_super){
	function Q_sgling_param(){
		/**变量id */
		this._q_id=0;
		/**字符串变量值 */
		this._q_value=null;
		Q_sgling_param.__super.call(this);
	}

	__class(Q_sgling_param,'datasets.bean.Q_sgling_param',_super);
	var __proto=Q_sgling_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_sgling_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*组队副本
*/
//class datasets.bean.Q_multiple_dungeon extends engine.base.data.Bean
var Q_multiple_dungeon=(function(_super){
	function Q_multiple_dungeon(){
		/**组队副本id */
		this._q_id=0;
		/**副本名称 */
		this._q_name=null;
		/**类型 1组队副本 2逐鹿中原 3军团组队 */
		this._q_type=0;
		/**回合数 */
		this._q_round_num=0;
		/**进入条件 */
		this._q_enter_condition=null;
		/**每日可挑战次数 */
		this._q_challenge_times_per_day=0;
		/**奖励展示[[[通关奖励],[通关奖励],[[概率掉落],[概率掉落]]] */
		this._q_prize_for_show=null;
		/**怪物展示id(q_monster_show)*/
		this._q_show_monster=0;
		/**扫荡条件(通用条件)*/
		this._q_saodang_condition=null;
		/**扫荡消耗 */
		this._q_saodang_cost=0;
		/**首通奖励 */
		this._q_virgin_prize=null;
		/**第几回合可跳过 */
		this._q_skip_round=0;
		/**怪物信息 */
		this._q_monster=null;
		/**前端用 */
		this._q_chapter=0;
		Q_multiple_dungeon.__super.call(this);
	}

	__class(Q_multiple_dungeon,'datasets.bean.Q_multiple_dungeon',_super);
	var __proto=Q_multiple_dungeon.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_name=this.readString(_buf);
		this._q_type=this.readInt(_buf);
		this._q_round_num=this.readInt(_buf);
		this._q_enter_condition=this.readString(_buf);
		this._q_challenge_times_per_day=this.readInt(_buf);
		this._q_prize_for_show=this.readString(_buf);
		this._q_show_monster=this.readInt(_buf);
		this._q_saodang_condition=this.readString(_buf);
		this._q_saodang_cost=this.readInt(_buf);
		this._q_virgin_prize=this.readString(_buf);
		this._q_skip_round=this.readInt(_buf);
		this._q_monster=this.readString(_buf);
		this._q_chapter=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_challenge_times_per_day',function(){
		return this._q_challenge_times_per_day;
	});

	__getset(0,__proto,'q_name',function(){
		return this._q_name;
	});

	__getset(0,__proto,'q_show_monster',function(){
		return this._q_show_monster;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_saodang_condition',function(){
		return this._q_saodang_condition;
	});

	__getset(0,__proto,'q_round_num',function(){
		return this._q_round_num;
	});

	__getset(0,__proto,'q_enter_condition',function(){
		return this._q_enter_condition;
	});

	__getset(0,__proto,'q_prize_for_show',function(){
		return this._q_prize_for_show;
	});

	__getset(0,__proto,'q_saodang_cost',function(){
		return this._q_saodang_cost;
	});

	__getset(0,__proto,'q_virgin_prize',function(){
		return this._q_virgin_prize;
	});

	__getset(0,__proto,'q_skip_round',function(){
		return this._q_skip_round;
	});

	__getset(0,__proto,'q_monster',function(){
		return this._q_monster;
	});

	__getset(0,__proto,'q_chapter',function(){
		return this._q_chapter;
	});

	return Q_multiple_dungeon;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*锻造参数
*/
//class datasets.bean.Q_duanzao_param extends engine.base.data.Bean
var Q_duanzao_param=(function(_super){
	function Q_duanzao_param(){
		/**唯一ID */
		this._q_id=0;
		/**参数 */
		this._q_value=null;
		Q_duanzao_param.__super.call(this);
	}

	__class(Q_duanzao_param,'datasets.bean.Q_duanzao_param',_super);
	var __proto=Q_duanzao_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_duanzao_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*特殊活动表
*/
//class datasets.bean.Q_special_activity extends engine.base.data.Bean
var Q_special_activity=(function(_super){
	function Q_special_activity(){
		/**活动唯一ID */
		this._q_id=0;
		/**活动类型 */
		this._q_type=0;
		/**开放配置cron */
		this._q_cron=null;
		/**开放配置相对时间 */
		this._q_offset_time=null;
		/**开启轮数 */
		this._q_param=null;
		Q_special_activity.__super.call(this);
	}

	__class(Q_special_activity,'datasets.bean.Q_special_activity',_super);
	var __proto=Q_special_activity.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_type=this.readInt(_buf);
		this._q_cron=this.readString(_buf);
		this._q_offset_time=this.readString(_buf);
		this._q_param=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	__getset(0,__proto,'q_cron',function(){
		return this._q_cron;
	});

	__getset(0,__proto,'q_offset_time',function(){
		return this._q_offset_time;
	});

	__getset(0,__proto,'q_param',function(){
		return this._q_param;
	});

	return Q_special_activity;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*副本参数
*/
//class datasets.bean.Q_grow_gold_param extends engine.base.data.Bean
var Q_grow_gold_param=(function(_super){
	function Q_grow_gold_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_grow_gold_param.__super.call(this);
	}

	__class(Q_grow_gold_param,'datasets.bean.Q_grow_gold_param',_super);
	var __proto=Q_grow_gold_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_grow_gold_param;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*排行榜活动
*/
//class datasets.bean.Q_rank_activity extends engine.base.data.Bean
var Q_rank_activity=(function(_super){
	function Q_rank_activity(){
		/**活动唯一ID */
		this._q_id=0;
		/**开放配置cron */
		this._q_cron=null;
		/**开放配置相对时间 */
		this._q_offset_time=null;
		/**排行榜类型 */
		this._q_type=0;
		Q_rank_activity.__super.call(this);
	}

	__class(Q_rank_activity,'datasets.bean.Q_rank_activity',_super);
	var __proto=Q_rank_activity.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_cron=this.readString(_buf);
		this._q_offset_time=this.readString(_buf);
		this._q_type=this.readInt(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_cron',function(){
		return this._q_cron;
	});

	__getset(0,__proto,'q_offset_time',function(){
		return this._q_offset_time;
	});

	__getset(0,__proto,'q_type',function(){
		return this._q_type;
	});

	return Q_rank_activity;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*九重天积分达标奖励
*/
//class datasets.bean.Q_jiuchongtian_score_prize extends engine.base.data.Bean
var Q_jiuchongtian_score_prize=(function(_super){
	function Q_jiuchongtian_score_prize(){
		/**积分(大于该积分时获得的奖励，必须从大到小)*/
		this._q_score=0;
		/**奖励 */
		this._q_prize=null;
		Q_jiuchongtian_score_prize.__super.call(this);
	}

	__class(Q_jiuchongtian_score_prize,'datasets.bean.Q_jiuchongtian_score_prize',_super);
	var __proto=Q_jiuchongtian_score_prize.prototype;
	__proto.read=function(_buf){
		this._q_score=this.readInt(_buf);
		this._q_prize=this.readString(_buf);
	}

	__getset(0,__proto,'q_score',function(){
		return this._q_score;
	});

	__getset(0,__proto,'q_prize',function(){
		return this._q_prize;
	});

	return Q_jiuchongtian_score_prize;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*宝物升星配置表
*/
//class datasets.bean.Q_baowu_star extends engine.base.data.Bean
var Q_baowu_star=(function(_super){
	function Q_baowu_star(){
		/**宝物ID */
		this._q_id=0;
		/**星级 */
		this._q_star=0;
		/**属性 */
		this._q_star_attr=null;
		/**消耗，[[道具id,数量]] */
		this._q_cost=null;
		/**未上阵万分比 */
		this._q_bonus=0;
		/**前端显示技能ICON */
		this._q_skill_icon=0;
		/**前端显示技能名称 */
		this._q_skill_name=null;
		/**前端显示升星属性 */
		this._q_star_show=null;
		/**前端显示技能属性 */
		this._q_skill_show=null;
		/**每次升星提供的战力 */
		this._q_star_fighting=0;
		Q_baowu_star.__super.call(this);
	}

	__class(Q_baowu_star,'datasets.bean.Q_baowu_star',_super);
	var __proto=Q_baowu_star.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_star=this.readInt(_buf);
		this._q_star_attr=this.readString(_buf);
		this._q_cost=this.readString(_buf);
		this._q_bonus=this.readInt(_buf);
		this._q_skill_icon=this.readInt(_buf);
		this._q_skill_name=this.readString(_buf);
		this._q_star_show=this.readString(_buf);
		this._q_skill_show=this.readString(_buf);
		this._q_star_fighting=this.readInt(_buf);
	}

	__getset(0,__proto,'q_skill_name',function(){
		return this._q_skill_name;
	});

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_cost',function(){
		return this._q_cost;
	});

	__getset(0,__proto,'q_star_attr',function(){
		return this._q_star_attr;
	});

	__getset(0,__proto,'q_star',function(){
		return this._q_star;
	});

	__getset(0,__proto,'q_bonus',function(){
		return this._q_bonus;
	});

	__getset(0,__proto,'q_skill_icon',function(){
		return this._q_skill_icon;
	});

	__getset(0,__proto,'q_star_show',function(){
		return this._q_star_show;
	});

	__getset(0,__proto,'q_skill_show',function(){
		return this._q_skill_show;
	});

	__getset(0,__proto,'q_star_fighting',function(){
		return this._q_star_fighting;
	});

	return Q_baowu_star;
})(Bean)


/**
*Created by FreeMarker. DO NOT EDIT!!!
*师门任务参数
*/
//class datasets.bean.Q_shimen_param extends engine.base.data.Bean
var Q_shimen_param=(function(_super){
	function Q_shimen_param(){
		/**参数ID */
		this._q_id=0;
		/**参数值 */
		this._q_value=null;
		Q_shimen_param.__super.call(this);
	}

	__class(Q_shimen_param,'datasets.bean.Q_shimen_param',_super);
	var __proto=Q_shimen_param.prototype;
	__proto.read=function(_buf){
		this._q_id=this.readInt(_buf);
		this._q_value=this.readString(_buf);
	}

	__getset(0,__proto,'q_id',function(){
		return this._q_id;
	});

	__getset(0,__proto,'q_value',function(){
		return this._q_value;
	});

	return Q_shimen_param;
})(Bean)



})(window,document,Laya);
