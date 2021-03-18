var resDir = "https://cdnlytj.lkgame.com/game_space/lytj/download/20129_1/";

class EgretSubPackageLoading extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.__class__ = "EgretSubPackageLoading";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        EgretSubPackageLoading.instance = this;
        //var logLabel = new eui.Label();
        //egret.MainContext.instance.stage.addChild(logLabel);
        //var steps = [];
        window["logStep"] = function(stepName) {
            // steps.push([stepName, new Date().getTime()]);
            // if (steps.length>=2) {
            //     var ms = steps[steps.length-1][1]-steps[steps.length-2][1];
            //     var s = ms/1000;
            //     logLabel.text += steps[steps.length-2][0]+"-"+s+"秒\n";
            // }
        }
        // setInterval(()=>{
        //     egret.MainContext.instance.stage.addChild(logLabel);
        // }, 100);
    }

    onAddToStage() {
        window["__g_removeLoadBg"] = ()=>{
            this.parent.removeChild(this);
        }
        //悬浮球
        var self = this;
        var qingjs = require("./sdk/qingjs-wxapp.js");
        console.log("调用：qingjs.instance.onInit()");
        qingjs.instance.onInit(function (initResult) {
            // initResult.code  // 200 为成功，其他则失败
            // initResult.message  // 初始化结果描述
            if(initResult.code == 200){
                console.log("调用：qingjs.instance.showMenu()");
                qingjs.instance.showMenu({
                    stage: self.stage,  // ADDED_TO_STAGE回调中this.stage或egret.lifecycle.stage
                    entryIconX: 0,  // 可选
                    entryIconY: 0,  // 可选
                })
            }
            console.log("初始化结束回调数据");
            console.log(initResult);
        });

        
        var sw = this.stage.stageWidth;
        var sh = this.stage.stageHeight;
        var btnQuit = new eui.Button();
        btnQuit.width = sw;
        btnQuit.height = sw/30 * 3;
        btnQuit.y = sh * 0.6;
        var label = new eui.Label();
        label.text = "如长时间加载不成功，请点这里退出并重新进入游戏";
        label.size = sw/30;
        label.textColor = 0xffffff;
        label.horizontalCenter = 0;
        label.verticalCenter = 0;
        btnQuit.addChild(label);
        btnQuit.visible = false;
        this.addChild(btnQuit);
        btnQuit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchQuit, this);
        this.btnQuit = btnQuit;

        this.tidQuit = setTimeout(()=>{btnQuit.visible = true;}, 50*1000);

        var env = window["wx"];
        const res = env.getSystemInfoSync();
        var w = res.windowWidth;
        var h = res.windowHeight;
        var width = 580;
        var height = 930;
        var s = 1;
        if (w/h>width/height){
            s = (h/height * width)/w;
        }

        window["bgW"] = 2048;
        window["bgH"] = 1392;

        this.loaduis = []

        this.bg = new eui.Image();
        this.bg.source = resDir + "bg.jpg";
        this.bg.scaleX = s;
        this.bg.scaleY = s;
        this.bg.x = (this.stage.stageWidth - window["bgW"] * s)/2;
        this.bg.y = (this.stage.stageHeight - window["bgH"] * s)/2;
        this.addChild(this.bg);

        this.logo = new eui.Image();
        this.logo.source = resDir + "logo20129.png";
        this.logo.scaleX = s;
        this.logo.scaleY = s;
        this.logo.x = Math.max(0,(this.stage.stageWidth - width*s)/2);
        this.logo.y = Math.max(0,(this.stage.stageHeight - height*s)/4);
        this.addChild(this.logo);
        this.loaduis.push(this.logo);

        this.bottomGroup = new eui.Group();
        this.bottomGroup.width = width;
        this.bottomGroup.height = 190;
        this.bottomGroup.scaleX = s;
        this.bottomGroup.scaleY = s;
        this.bottomGroup.x = Math.max(0,(this.stage.stageWidth - width*s)/2);
        this.bottomGroup.y = this.stage.stageHeight - this.bottomGroup.height*s - Math.max(0,(this.stage.stageHeight - height*s)/2);
        this.addChild(this.bottomGroup);
        this.loaduis.push(this.bottomGroup);

        this.loadingtext = new eui.Label();
        this.loadingtext.textAlign = "center";
        this.loadingtext.verticalAlign = "middle";
        this.loadingtext.size = 18;
        this.loadingtext.width = width;
        this.loadingtext.x = 0;
        this.loadingtext.y = 20;
        this.loadingtext.textColor = 0xffff00;
        this.bottomGroup.addChild(this.loadingtext);

        this.barMask = new eui.Image();
        this.barMask.source = resDir + "progressBarMask.png";
        this.barMask.x = 46;
        this.barMask.y = 46;
        this.bottomGroup.addChild(this.barMask);

        this.bar = new eui.Image();
        this.bar.source = resDir + "progressBar.png";
        this.bar.x = 46;
        this.bar.y = 46;
        this.bottomGroup.addChild(this.bar);

        var loader = new egret.HttpRequest();
        loader.responseType = egret.HttpResponseType.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadJsonComplete, this);
        loader.open(resDir + "loading_pro_ani.json", egret.HttpMethod.GET);
        loader.send();

        this.warnInfo = new eui.Label();
        this.warnInfo.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适当游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
        this.warnInfo.textAlign = "center";
        this.warnInfo.verticalAlign = "middle";
        this.warnInfo.size = 16;
        this.warnInfo.width = width;
        this.warnInfo.x = 0;
        this.warnInfo.y = 80 + Math.max(0,(this.stage.stageHeight - height*s)/8);
        this.warnInfo.textColor = 0xffffff;
        this.bottomGroup.addChild(this.warnInfo);

        this.copyrighttext = new eui.Label();
        this.copyrighttext.text = "ISBN 978-7-900521-23-1 软著登记号：2014SR120728 出版单位：广西金海湾电子音像出版社有限公司 审批文号：新广出审【2016】55号 文网游备字：[2014]M-RPG144号 （署）网出证（桂）字第015号 著作权人：桂林力港网络科技股份有限公司";
        this.copyrighttext.textAlign = "left";
        this.copyrighttext.verticalAlign = "middle";
        this.copyrighttext.size = 13;
        this.copyrighttext.width = width-30;
        this.copyrighttext.x = 10;
        this.copyrighttext.y = 143 + Math.max(0,(this.stage.stageHeight - height*s)/5);
        this.copyrighttext.textColor = 0xffffff;
        // this.bottomGroup.addChild(this.copyrighttext);

        var prog1 = 0;
        var prog0 = 0;
        var curProg = 0;
        var beginTick = Date.now();
        var tempProg = [];
        function smoothProgress(curProgress)
        {
            var curTick = Date.now();
            if (curProgress)
            {
                var targetProg = curProgress[0];
                if (prog1!=targetProg) {
                    prog0 = curProg;
                    prog1 = targetProg;
                    beginTick = curTick;
                    tempProg[0] = prog0;
                    tempProg[1] = curProgress[1];
                }
                var f = (curTick-beginTick)/1000;
                if (f<0) {
                    curProg = prog0;
                } else if (f>=1) {
                    curProg = prog1;
                } else {
                    curProg = prog0+(prog1-prog0)*(1-(1-f)*(1-f)*(1-f));
                }
                tempProg[0] = curProg;
                return tempProg;
            }
            return null;
        }
   
        window['loadProgress'] = [0, "初始化"];
        window["gameResLoadInterval"] = setInterval(()=>{
            var loadProgress = smoothProgress(window['loadProgress']);
            if (window["gameLoaded"])
            {
                window["gameLoaded"] = false;// 只执行一次
                this.loadingtext.text = "(进入游戏中) - 100%";
                clearInterval(window["gameResLoadInterval"]);
                this.onResLoadFinish();
            }
            else
            {
                if (loadProgress)
                {
                    this.loadingtext.text = (loadProgress[1] || "正在加载")+" - "+Math.floor(loadProgress[0]).toString()+"%"
                }
            }
            if(loadProgress){
                this.bar.width = Math.min(100, Math.floor(loadProgress[0])) / 100 * 486;
                if(this.loading_pro_ani){
                    this.loading_pro_ani.x = 46 - 100 + this.bar.width;
                }
            }
        }, 100);
    }

    onTouchQuit() {
        wx.exitMiniProgram({
          success: (res) => {},
        })
    }

    onLoadJsonComplete(event) {
        var loader = event.target;
        this.data = JSON.parse(loader.response);

        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.onLoadTextureComplete, this);
        imageLoader.load(resDir + "loading_pro_ani.png");
    }

    onLoadTextureComplete(event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var bitmapData = loader.data;
        //创建纹理对象
        this.texture = new egret.Texture();
        this.texture.bitmapData = bitmapData;

        this.createMovieClip();
    }

    createMovieClip() {
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var loading_pro_ani = new egret.MovieClip(mcDataFactory.generateMovieClipData("loading_pro_ani"));
        this.bottomGroup.addChild(loading_pro_ani);
        //添加播放完成事件
        loading_pro_ani.addEventListener(egret.Event.COMPLETE, function (){
            // egret.log("COMPLETE");
        }, this);
        //添加循环播放完成事件
        loading_pro_ani.addEventListener(egret.Event.LOOP_COMPLETE, function (){
            // egret.log("LOOP_COMPLETE");
        }, this);
        //播放动画
        loading_pro_ani.gotoAndPlay("flash", -1);
        loading_pro_ani.x = 46-100;
        loading_pro_ani.y = 17;
        this.loading_pro_ani = loading_pro_ani;
    }

    setProgress(idx, res) {
        // iOS真机为totalBytesWriten 微信官方将于近期修复 2018.6.19
        let p = (res.totalBytesWritten || res.totalBytesWriten) / res.totalBytesExpectedToWrite;
        p = Math.max(0, p);
        p = Math.min(1, p);
        p = Math.floor(20*idx + 20*p);
        // console.log("初始化："+ p);
        window['loadProgress'] = [p, "初始化"];
    }

    onSuccess() {
        logStep("进入游戏主代码")
        const stage = this.stage;
        // 创建文档类，开发者需要根据自身项目更改
        const main = new Main();
        stage.addChild(main);
    }

    onResLoadFinish () {
        const stage = this.stage;
        // 只删除loaduis，背景图暂时不删除
        for (var i=0, c=this.loaduis.length; i<c; ++i) {
            var loadui = this.loaduis[i];
            loadui.parent.removeChild(loadui);
        }
        stage.addChildAt(this, 0);
        EgretSubPackageLoading.instance = null;
        // setInterval(()=>{
        //     var s = "";
        //     for (var i=0, c=stage.numChildren; i<c; ++i) {
        //         s += stage.getChildAt(i)["__class__"]+", ";
        //     }
        //     console.log(s);
        // }, 1000)
    }
}

window.EgretSubPackageLoading = EgretSubPackageLoading;