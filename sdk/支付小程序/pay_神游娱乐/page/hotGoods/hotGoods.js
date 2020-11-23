var app    = getApp();
var common = require('../../util/util.js');
var detail = {
  data: [
    {
      title: "厨房用品",
      imageList: ["../../image/test.jpg","../../image/test1.jpg",
        "../../image/test2.jpg","../../image/test3.jpg"
      ],
      goodsList: [
        {
          goodsImg: "../../image/test.jpg",
          goodsName: "红牡丹",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "红牡丹 骨瓷餐具套装陶瓷碗碟盘套装碗具 28件 方形配置",
        },
        {
          goodsImg: "../../image/test1.jpg",
          goodsName: "德国不粘锅",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "弗欧（WOLL） 德国制造 不粘锅 蓝宝石系列 24cm 煎锅 平底锅 可煎牛排 炒菜锅 锅具",
        },{
          goodsImg: "../../image/test2.jpg",
          goodsName: "双立人刀具套装",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "双立人（ZWILLING）德国双立人刀具套装  厨房切菜刀多用刀不锈钢自营 2件套 38850-000-722 Enjoy",
        }
      ]
    },
    {
      title: "特色活动",
      imageList: ["../../image/test4.jpg","../../image/test5.jpg",
        "../../image/test1.jpg"
      ],
      goodsList: [
        {
          goodsImg: "../../image/test3.jpg",
          goodsName: "便携茶具",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "南山先生 便携茶具玻璃功夫茶具陶瓷办公旅行茶具日式茶具套装经纬快客杯 经纬旅行套装_禅风黑",
        },{
          goodsImg: "../../image/test.jpg",
          goodsName: "膳魔师焖烧罐",
          oldPrice: "299",
          sellPrice: "5",
          tagline: "THERMOS膳魔师焖烧罐470ml高真空不锈钢食物罐SK-3000 PK",
        },
      ]
    }
  ]
}
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    curNav: "0",
    circular: true,
  },
  onLoad: function() {
  },
  onHide: function() {
  },
  onShow: function() {
    var self   = this,
        info   = detail.data,
        info_des = info[0];
    self.setData({
      product: info,
      list: info_des,
      length: info.length
    });
  },
  switchTab: function(e) {
    var self  = this,
        index = e.currentTarget.dataset.index;
    var info  = detail.data[index];
    info.goodsList.forEach(function(value) {
      value.timer = common.formatTime(new Date(value.beginTime), "yyyy-MM-dd hh:mm");
      self.setData({
        list: info,
        curNav: index
      });
    });
  },
  getDetail: function(e) {
    var data       = e.currentTarget.dataset.value,
        goodsId = data.id;
    wx.navigateTo({
      url: "goodsDetail?goodsId=" + goodsId,
      success: function(res) {
      },
    })
  },
})