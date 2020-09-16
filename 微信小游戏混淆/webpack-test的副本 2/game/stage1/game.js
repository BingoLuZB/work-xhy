console.log('this is game')
console.log(wx.getStorageSync('changeJudge'), '=====changeJudge')
if (wx.getStorageSync('changeJudge')) {
  require("main.js")
} else {
  require("main2.js")
}
wx.removeStorageSync('changeJudge')