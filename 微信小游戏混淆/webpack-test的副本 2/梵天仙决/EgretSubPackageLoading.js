class EgretSubPackageLoading extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    EgretSubPackageLoading.instance = this;
  }

  onAddToStage() {
    // var loader = new egret.ImageLoader();
    // loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    // var url = "./images/loading.jpg";
    // loader.load(url);

    // this.txt = new egret.TextField();
    // this.txt.textAlign = egret.HorizontalAlign.CENTER;
    // this.txt.width = this.stage.stageWidth;
    // this.txt.y = this.stage.stageHeight - this.txt.size >> 1;
    // this.txt.textColor = 0xff0000;
    // this.addChild(this.txt);

    this.bg = new eui.Image;
    if (this.stage) {
      this.bg.height = this.stage.stageHeight;
      this.bg.width = this.stage.stageWidth;
    } else {
      this.bg.height = 2048;
      this.bg.width = 1024;
    }

    this.bg.horizontalCenter = 0;
    this.bg.verticalCenter = 0;
    this.addChild(this.bg);
    this.bg.source = "images/loading_bg.jpg";

    //显示加载
    this.showLoading('加载中...');

    //加载分包
    this.loadPackageIndex = 0;
    this.loadPackageNames = ["stage1","stage2"];
    this.loadSubpackage();
  }

  // onLoadComplete(event) {
  //   const stage = this.stage;
  //   var loader = event.target;
  //   var bitmapData = loader.data;
  //   var texture = new egret.Texture();
  //   texture.bitmapData = bitmapData;
  //   var img = new egret.Bitmap(texture);
  //   var rect = new egret.Rectangle(0, 0, 580, 2);
  //   img.scale9Grid = rect;
  //   if (stage) {
  //     img.height = stage.stageHeight;
  //     img.width = stage.stageWidth;
  //   } else {
  //     img.height = 580;
  //     img.width = 930;
  //   }
  //   this.addChild(img);
  // }

  loadSubpackage() {
    var packName = this.loadPackageNames[this.loadPackageIndex];
    if (!packName) {
      this.onSuccess();
      return;
    }

    let task = wx.loadSubpackage({
      // 开发者根据自身需求更改
      name: packName,
      success: function (res) {
        var main = EgretSubPackageLoading.instance;
        main.loadPackageIndex++;
        main.loadSubpackage();
      },
      fail: function (res) {
        var main = EgretSubPackageLoading.instance;
        //隐藏加载
        main.hideLoading();
        wx.showModal({
          title: '提示',
          content: "网络异常，是否重试?(w1)",
          showCancel: false,
          confirmText: "重试",
          success(res) {
            if (res.confirm) {
              //显示加载
              main.showLoading('加载中...');
              main.loadSubpackage();
            }
          }
        })
      }
    });

    task.onProgressUpdate(res => {
      EgretSubPackageLoading.instance.setProgress(res);
    })
  }

  setProgress(res) {
    // iOS真机为totalBytesWriten 微信官方将于近期修复 2018.6.19
    // this.txt.text = `${res.totalBytesWritten || res.totalBytesWriten} / ${res.totalBytesExpectedToWrite}`;
    console.log(res.progress);
  }

  showLoading(txt) {
    //显示加载
    wx.showLoading({
      title: txt,
      mask: true
    });
  }

  hideLoading() {
    //隐藏加载
    wx.hideLoading();
  }

  onSuccess() {
    //隐藏加载
    this.hideLoading();

    const stage = this.stage;
    stage.removeChild(this);
    EgretSubPackageLoading.instance = null;
    // 创建文档类，开发者需要根据自身项目更改
    const main = new Main();
    stage.addChild(main);
  }
}

window.EgretSubPackageLoading = EgretSubPackageLoading;