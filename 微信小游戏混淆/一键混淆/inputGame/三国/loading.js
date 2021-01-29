class loading extends egret.DisplayObjectContainer {
  constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    this.offSet=0;
    loading.instance = this;
  }
  compTopOff(){
    let swidth = this.stage.stageWidth;
    let sheight = this.sheight = this.stage.stageHeight;
    let r = swidth / sheight;

    if (egret.Capabilities.isMobile) {
      if (r < 0.5382) {
        sheight=this.sheight = this.stage.stageWidth / 0.5633;
        this.offSet = (this.stage.stageHeight - sheight) * 0.5;
      }
    }
    this.y=this.offSet;
  }
  onAddToStage() {
    let self = this;
    self.compTopOff();

    self.progress = 0;
    self.load = 0;
    self.bg = new egret.Bitmap();
    self.addChild(self.bg);

    self.expBarBg = new egret.Bitmap();
    self.expBarBg.scale9Grid = new egret.Rectangle(50, 10, 10, 3);
    self.expBarBg.width = 640;
    self.expBarBg.height = 30;
    self.expBarBg.y = self.sheight * 0.85;
    self.addChild(self.expBarBg);

    self.expBar = new egret.Bitmap();
    self.expBar.x = 20;
    self.expBar.width = 600;
    self.expBar.height = 20;
    self.expBar.y = self.expBarBg.y + 5;
    self.addChild(self.expBar);

    self.loadTxt = new egret.Bitmap();
    self.addChild(self.loadTxt);
    self.loadTxt.x = 126;
    self.loadTxt.y = self.expBarBg.y - 25;
    
    self.horse = new egret.Bitmap();
    self.addChild(self.horse);
    self.horse.x = this.expBar.x + this.expBar.width-47;
    self.horse.y = this.expBarBg.y-49;
    // 加载背景icon资源
    let img_loader = new egret.ImageLoader();
    img_loader.addEventListener(egret.Event.COMPLETE, (evt) => {
      let loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      self.bg.texture = texture;
    }, self);
    img_loader.load('res/bg.jpg');

    let img_loadTxt = new egret.ImageLoader();
    img_loadTxt.addEventListener(egret.Event.COMPLETE, (evt) => {
      let loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      self.loadTxt.texture = texture;
    }, self);
    img_loadTxt.load('res/loadTxt.png');


    let img_expBar = new egret.ImageLoader();
    img_expBar.addEventListener(egret.Event.COMPLETE, (evt) => {
      let loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      self.expBar.texture = texture;
    }, self);
    img_expBar.load('res/expbar.png');

    let img_expBarBg = new egret.ImageLoader();
    img_expBarBg.addEventListener(egret.Event.COMPLETE, (evt) => {
      let loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      self.expBarBg.texture = texture;
    }, self);
    img_expBarBg.load('res/expbarBg.png');

    let img_horse = new egret.ImageLoader();
    img_horse.addEventListener(egret.Event.COMPLETE, (evt) => {
      let loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      self.horse.texture = texture;
    }, self);
    img_horse.load('res/horse.png');


    self.txt = new egret.TextField();
    self.txt.textAlign = egret.HorizontalAlign.CENTER;
    self.txt.width = this.stage.stageWidth;
    self.txt.text = "正在加载主程序...0%"
    self.txt.size = 20;
    self.txt.y = self.expBarBg.y + self.expBarBg.height * 1.5;
    self.addChild(self.txt);

    //提示信息
    self.promptTxt = new egret.TextField();
    self.promptTxt.size = 20;
    self.promptTxt.lineSpacing = 10;
    self.promptTxt.textAlign = egret.HorizontalAlign.CENTER;
    self.promptTxt.width = self.stage.stageWidth;
    self.promptTxt.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
    self.promptTxt.textColor = 0xffffff;
    self.promptTxt.y = self.sheight - 64;
    self.addChild(self.promptTxt);

    this.starBar();
  }
  
  setProgress(desc, progress) {
    this.txt.text = desc + Math.floor(progress) + "%";
  }

  onSuccess() {
    wx.gamestage = this.stage;
    require('./utils/platform.js');    
  }
  removed() {
    window.clearInterval(this.progressInterval);
    let self = this;
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }
  addToStage(parent) {
    if (!this.parent && this.parent != parent)
      parent.addChild(this);
    this.starBar();
  }
  starBar() {
    if (this.progressInterval > 0) {
      window.clearInterval(this.progressInterval);
    }
    this.progressInterval = window.setInterval((evt) => {
      if (this.expBar.width >= 600) {
        this.expBar.width = 0
      }
      this.expBar.width += 4;
      if (this.horse) {
        this.horse.x = this.expBar.x + this.expBar.width-47;
      }
    }, 50);
  }

  setVisible(value) {
    this.visible = value;
  }
}

window.loading = loading;