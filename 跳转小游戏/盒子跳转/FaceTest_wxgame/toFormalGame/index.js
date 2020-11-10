// 图片域名
const imgUrl = 'https://gministatic.xinghe66.cn/toMiniGameImg/xy'
// 展示的图片
const imgData = {
  url: `${imgUrl}/img1.png`,
  btn: `${imgUrl}/btn.png`
}
// 分享内容
const shareData = {
  title: '上线就送vip7，经典西游梦幻回合手游',
  imageUrl: `${imgUrl}/shareImg.png`
}
const gameAppid = 'wxf77abae3d7f8964c'


let isOnload = false
const {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync()
const canvas = wx.createCanvas()
const context = canvas.getContext('2d') // 创建一个 2d context


var image = wx.createImage()
var image2 = wx.createImage()
let clickX
let clickY

function draw() {
  console.log('draw')
  context.fillStyle = 'black' // 矩形颜色
  context.fillRect(0, 0, windowWidth, windowHeight)
  const gap = 0.1
  var imgX = canvas.width / 2 - imgData.width / 2
  var imgY = windowHeight * 0.7
  image2.src = imgData.btn
  image.src = imgData.url
  function drawImg() {
    context.clearRect(0, 0, windowWidth, windowHeight)
    // context.drawImage(image, imgX, imgY)
    context.drawImage(image, 0, 0, windowWidth, windowHeight)
    clickX = canvas.width / 2 - image2.width / 2
    clickY = windowHeight * 0.7
    context.drawImage(image2, clickX, clickY)
    // context.drawImage(image, 0, windowHeight * gap, windowWidth, windowHeight * (1 - 2 * gap))
  }
  if (!isOnload) {
    image.onload = function () {
      drawImg()
      isOnload = true
    }
  } else {
    drawImg()
  }

}


draw()
wx.onTouchStart((e) => {
  var touch = e.changedTouches[0]
  let x = touch.clientX
  let y = touch.clientY
  // console.log(x, y, clickX, clickY)
  if (clickX <= x && x <= clickX + image2.width && clickY <= y && y <= clickY + image2.height) {
    navMinigame()
  }
})
// 跳转小游戏
function navMinigame() {
  wx.navigateToMiniProgram({
    appId: gameAppid,
    fail() {
      navMinigame()
    }
  })
}

// 后台回来时重绘
wx.onShow(function (res) {
  console.log(321)
  requestAnimationFrame(function () {
    draw()
  });
});

// 分享
wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})
// 分享到朋友圈
wx.onShareTimeline(() => {
  return shareData
})
// 转发
wx.onShareAppMessage(() => {
  return shareData
})