const imgData = {
  url: 'https://gministatic.xinghe66.cn/toMiniGameImg/sg/img1.png'
}
const gameAppid = 'wx4c7d04f5762ec903'

const {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync()
const canvas = wx.createCanvas()
const context = canvas.getContext('2d') // 创建一个 2d context


function draw() {
  context.fillStyle = 'black' // 矩形颜色
  context.fillRect(0, 0, windowWidth, windowHeight)
  const gap = 0.1
  var image = wx.createImage()
  var imgX = canvas.width / 2 - imgData.width / 2
  var imgY = windowHeight * 0.7
  image.src = imgData.url
  image.onload = function () {
    context.clearRect(0, 0, windowWidth, windowHeight)
    // context.drawImage(image, imgX, imgY)
    context.drawImage(image, 0, windowHeight*gap, windowWidth, windowHeight*(1- 2*gap))
  }
}


draw()
wx.onTouchStart((res) => {
  navMinigame()
})
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
  requestAnimationFrame(function () {
    draw()
  });
});