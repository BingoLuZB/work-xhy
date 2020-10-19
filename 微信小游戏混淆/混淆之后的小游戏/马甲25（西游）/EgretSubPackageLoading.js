class EgretSubPackageLoading extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    EgretSubPackageLoading.instance = this;
  }

  onAddToStage() {
    //显示加载
    this.showLoading('加载中...');

    //加载分包
    this.loadPackageIndex = 0;
    this.loadPackageNames = ["stage1","stage2"];
    this.loadSubpackage();
    
    window.__AddLoginBg();
  }

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
          success: function (res) {
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
      mask: true,
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