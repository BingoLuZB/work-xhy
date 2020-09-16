class EgretSubPackageLoading extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        EgretSubPackageLoading.instance = this;
        this.scheId = undefined
        this.shape = undefined
        this.bg = undefined
    }

    onAddToStage() {
        const content = wx.getFileSystemManager().readFileSync("bg_dengluditu.jpg");
        egret.BitmapData.create("arraybuffer", content, (bitmapData) => {
            let texture = new egret.Texture();
            texture.bitmapData = bitmapData;
            this.bg = new egret.Bitmap(texture);
            this.bg.x = -(texture.textureWidth - egret.MainContext.instance.stage.stageWidth)/2
            this.bg.y = -(texture.textureHeight - egret.MainContext.instance.stage.stageHeight)/2
            egret.MainContext.instance.stage.addChildAt(this.bg, 0);
        })

        let txt = new egret.TextField();
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.lineSpacing = 6
        txt.italic = true
        txt.width = egret.MainContext.instance.stage.stageWidth;
        txt.y = egret.MainContext.instance.stage.stageHeight/10*9 + 50;
        txt.textColor = 0xffffff;
        txt.size = 23;
        txt.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。"
        this.addChild(txt);

        this.shape = new egret.Shape();
        this.addChild(this.shape);
        this.shape.graphics.beginFill(0xffe072, 1);
        this.shape.graphics.lineStyle(10, 0xffe072, 1);

        let startPos = undefined;
        this.shape.graphics.moveTo(egret.MainContext.instance.stage.stageWidth/4*1, egret.MainContext.instance.stage.stageHeight/8*7);
        
        
        this.txt = new egret.TextField();
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = egret.MainContext.instance.stage.stageHeight/8*7 - 50;
        this.txt.textColor = 0xffffff;
        this.txt.size = 23;
        this.addChild(this.txt);

        let step = 0
        let tips = ["载入中.", "载入中..", "载入中..."]
        this.scheId = egret.setInterval(()=>{
            this.txt.text = tips[step % 3]
            step = step + 1
        }, this, 500)
    }

    setProgress(res) {
        // iOS真机为totalBytesWriten 微信官方将于近期修复 2018.6.19
        console.log("EgretSubPackageLoading", res.progress)
        let percent = res.progress > 100 ? 1 : res.progress/100;
        // 微信的分包回调的百分比会超出1
        this.shape.graphics.lineTo(egret.MainContext.instance.stage.stageWidth/4*1 + egret.MainContext.instance.stage.stageWidth/2 * percent, egret.MainContext.instance.stage.stageHeight/8*7);
        // this.txt.text = `${res.totalBytesWritten || res.totalBytesWriten} / ${res.totalBytesExpectedToWrite}`;
    }

    onSuccess() {
        egret.clearInterval(this.scheId)
        this.scheId = 0
        const stage = egret.MainContext.instance.stage;
        stage.removeChild(this);
        console.log("EgretSubPackageLoading all done")
        // 创建文档类，开发者需要根据自身项目更改
        const main = new Main();
        stage.addChild(main);
    }

    onDestory() {
        if(this.bg && this.bg.parent){
            this.bg.parent.removeChild(this.bg)
        }
        EgretSubPackageLoading.instance = undefined
    }
}

window.EgretSubPackageLoading = EgretSubPackageLoading;