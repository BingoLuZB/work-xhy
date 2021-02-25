var app    = getApp();
var common = require('../../util/util.js');
var detail = {
  data: [
    {
      title: "厨房用品",
      goodsList: [
        {
          goodsImg: "../../image/test4.jpg",
          goodsName: "不粘炒锅",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "美的（Midea）典雅金麦饭石色涂层不粘炒锅家用炒锅电磁炉煤气灶适用炒菜锅平底锅煎锅 送竹铲",
        },
        {
          goodsImg: "../../image/test3.jpg",
          goodsName: "炊大皇 炒锅",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "炊大皇 炒锅 304不锈钢炒菜锅32cm 不粘锅 平底锅 可用不锈钢锅铲  可立盖 燃气煤气灶电磁炉通用",
        },{
          goodsImg: "../../image/test1.jpg",
          goodsName: "碗碟套装",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "新品个性韩式陶瓷餐具套装碗盘筷子北欧碗碟套装46头简约家用送礼 冷色 46头",
        }
      ]
    },
    {
      title: "特色活动",
      goodsList: [
        {
          goodsImg: "../../image/test5.jpg",
          goodsName: "珐琅铸铁锅",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "Staub 法国进口 珐琅铸铁锅 24cm 汤锅炖锅",
        },{
          goodsImg: "../../image/test2.jpg",
          goodsName: "美斯尼茶具套装",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "美斯尼 整套茶具套装玻璃加厚耐热玻璃茶壶泡茶壶功夫茶具配件带竹木茶盘公道杯小品杯茶漏茶虑器 整套茶具",
        },
      ]
    }
  ]
}
Page({
  data: {
    curNav: "0"
  },
  switchTab: function(e) {
    var self  = this,
        index = e.currentTarget.dataset.index,
        info = detail.data[index];
      self.setData({
        list: info,
        curNav: index,
      });
  },
  onLoad: function() {
    var self  = this,
        index = 0,
        info = detail.data;
    self.setData({
      product: info,
      list: info[index],
    });
  },
  onShow: function() {
  },
  getDetail: function(e) {
    var data       = e.currentTarget.dataset.value;
  }
})