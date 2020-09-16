class FirstLoading extends egret.DisplayObjectContainer {
  constructor() {
    super();
    FirstLoading.instance = this;
    this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  onAddToStage() {
    this.scrollbar();
    var path = wx.env.USER_DATA_PATH + "/special";
    this.isDirectory(path, this.loadingBg, this);
  }

  scrollbar() {
    var _self = this;
    let scrollBg = new egret.ImageLoader();
    scrollBg.crossOrigin = "anonymous";
    scrollBg.once(egret.Event.COMPLETE, _self.doScrollBg, _self);
    scrollBg.load("image/dl_bar_dqjd_di.png");
  }

  schedule(ratio, boo) {
    console.log('schedule', ratio)
    let _self = this;
    let tarWidth = _self.bgWidth * ratio;
    clearInterval(timer);
    let timer = setInterval(() => {
      if (_self.scr.width >= tarWidth) {
        clearInterval(timer);
      }
      _self.scr.width += 30;
      if (boo) {
        _self.scr.width = _self.bgWidth;
        clearInterval(timer);
        clearInterval(_self.timer2);
        _self.removeChild(_self.txt);
        _self.removeChild(_self.scr);
        _self.removeChild(_self.scrBg);
      }
    }, 15);
  }

  doScroll(evt) {
    let _self = this;
    let loader = evt.currentTarget;
    let stageH = _self.stage.stageHeight;
    let stageW = _self.stage.stageWidth;
    let bgTexture = new egret.Texture();
    bgTexture.bitmapData = loader.data;
    _self.bgWidth = stageW * .9 - 70;

    _self.scr = new egret.Bitmap();
    _self.scr.width = 0;
    _self.scr.height = 17;
    _self.scr.x = (stageW - _self.bgWidth) / 2 - 5;
    _self.scr.y = stageH * .85 + 4.5;
    _self.scr.texture = bgTexture;
    _self.addChildAt(_self.scr, 3);

    _self.schedule(0.8, false);

    let content = "载入中。。。";
    _self.txt = new egret.TextField();
    _self.addChildAt(_self.txt, 4);
    _self.txt.text = content;
    _self.txt.size = 19;
    _self.txt.bold = true;
    _self.txt.x = (stageW - _self.txt.width) / 2;
    _self.txt.y = stageH * .85 + 3;
    _self.txt.textColor = 0xFFFFFF;

    let index = 0;
    _self.timer2 = setInterval(function () {
      _self.txt.text = content.substring(0, 4 + index);
      index++;
      if (index >= 3) {
        index = 0;
      }
    }, 500);
  }

  doScrollBg(evt) {
    let _self = this;
    let loader = evt.currentTarget;
    let stageH = this.stage.stageHeight;
    let stageW = this.stage.stageWidth;
    let bgTexture = new egret.Texture();
    bgTexture.bitmapData = loader.data;
    _self.scrBg = new egret.Bitmap();
    _self.scrBg.width = stageW * .9;
    _self.scrBg.height = 26;
    _self.scrBg.x = (stageW - _self.scrBg.width) / 2;
    _self.scrBg.y = stageH * .85;
    _self.scrBg.texture = bgTexture;
    this.addChildAt(_self.scrBg, 2);

    let scroll = new egret.ImageLoader();
    scroll.crossOrigin = "anonymous";
    scroll.once(egret.Event.COMPLETE, _self.doScroll, _self);
    scroll.load("image/dl_bar_dqjd.png");
  }

  isDirectory(path, callback, callbackTarget) {
    var fsm = wx.getFileSystemManager();
    fsm.access({
      path: path,
      success: function (res) {
        callback.call(callbackTarget);
      },
      fail: function (res) {
        fsm.mkdir({
          dirPath: path,
          success: function (res) {
            callback.call(callbackTarget);
          },
          fail: function (res) {
            console.log("创建目录失败", res);
          }
        });
      }
    });
  }

  loadingBg() {
    this.onSuccess()
    var targetPath_bg = wx.env.USER_DATA_PATH + "/special/dl_bg_dqdt.jpg";
    this.isFile(targetPath_bg, "bg");
    var targetPath = wx.env.USER_DATA_PATH + "/special/dl_bg_dqrw.png";
    this.isFile(targetPath, "mdl");
  }

  isFile(targetPath, type) {
    var fsm = wx.getFileSystemManager();
    var _self = this;
    fsm.access({
      path: targetPath,
      success: function (res) {
        _self.loadBgImg(targetPath, type);
      },
      fail: function (res) {
        console.log("没缓存背景图片", res);
        if (type == "bg") {
          _self.loadBgImg("image/dl_bg_dqdt.jpg", type);
        } else if (type == "mdl") {
          _self.loadBgImg("image/dl_bg_dqrw.png", type);
        }
      }
    });
  }

  loadBgImg(path, type) {
    var _self = this;
    // 加载背景图资源
    let bgLoader = new egret.ImageLoader();
    bgLoader.crossOrigin = "anonymous";
    let index;
    if (type == "bg") {
      index = 0;
    } else if (type == "mdl") {
      index = 1;
      if (window._gameCfg_.logoPath) {
        var targetLogo = wx.env.USER_DATA_PATH + "/special/logo.png";
        this.isFile(targetLogo, "logo");
      }
    } else {
      index = -1;
    }
    bgLoader.once(egret.Event.COMPLETE, (ev) => {
      _self.loadBgComplete(ev, index);
    }, _self);
    bgLoader.load(path);
  }

  loadBgComplete(evt, index) {
    let _self = this;
    let loader = evt.currentTarget;
    let bgTexture = new egret.Texture();
    bgTexture.bitmapData = loader.data;
    let bg = new egret.Bitmap();
    if (index == 0) {
      bg.width = _self.stage.stageWidth;
      bg.height = _self.stage.stageHeight;
    } else {
      let stageH = _self.stage.stageHeight;
      let stageW = _self.stage.stageWidth;
      bg.height = stageH > 1280 ? 1280 : stageH;
      bg.width = stageW > 720 ? 720 : stageW;
      bg.x = (stageW - bg.width) / 2;
      bg.y = (stageH - bg.height) / 2;
    }
    bg.texture = bgTexture;
    if (index >= 0) {
      _self.addChildAt(bg, index);
    } else {
      _self.addChild(bg);
    }
  }

  setProgress(res) {
    // iOS真机为totalBytesWriten 微信官方将于近期修复 2018.6.19
    var p = res.totalBytesWritten || res.totalBytesWriten;
    var t = res.totalBytesExpectedToWrite;
    var s = Math.floor(p / t * 100);
    console.log(`分包加载中(${s}%)`);
  }

  onSuccess() {
    let _self = this;
    const stage = _self.stage;
    // 创建文档类，开发者需要根据自身项目更改
    const loginMain = new LoginMain();
    // 先加入Main界面，然后在延时去掉loading界面，避免中间出现闪屏
    stage.addChild(loginMain);
  }
}

window.FirstLoading = FirstLoading;