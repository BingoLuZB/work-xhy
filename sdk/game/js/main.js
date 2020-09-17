import Player     from './player/index'
import Enemy      from './npc/enemy'
import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import Sdk        from './runtime/sdk'
import DataBus    from './databus'
import SDK        from './sdk/sdk-1.0.1'
import NewGame    from './newGame/js/main'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()

const codeCanvas = wx.createCanvas()
codeCanvas.height = window.innerHeight
codeCanvas.width = window.innerWidth

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0

    this.restart()

    this.init()

    this.sdk = new Sdk()
    // setTimeout(() => {
    //   const r = Math.random()
    //   console.log(r)
    //   if (r < 0.5) {
    //     new NewGame()
    //   } else {
    //     // 维护当前requestAnimationFrame的id
    //     this.aniId = 0

    //     this.restart()

    //     this.init()
    //   }
    // }, 2000)
  }

  init() {
    const options = wx.getLaunchOptionsSync()
    console.log('options', options)
    // let button = wx.createUserInfoButton({
    //   type: 'text',
    //   text: '上传用户信息',
    //   style: {
    //     left: 30,
    //     top: 6,
    //     width: 120,
    //     height: 32,
    //     lineHeight: 32,
    //     backgroundColor: '#ff0000',
    //     color: '#ffffff',
    //     textAlign: 'center',
    //     fontSize: 14,
    //     borderRadius: 4
    //   }
    // })
    // button.onTap(res => {
    //   SDK.pay({
    //     data: {
    //       'order-currency': 'CNY',
    //       'order-cp_order_id': '10001',
    //       'order-product_price': 0.01,
    //       'order-product_id': '1000000001',
    //       'order-product_cnt': 1,
    //       'order-product_name': '金币',
    //       'order-product_desc': '金币',
    //       'order-ext': '',
    //       'role-event': '',
    //       'role-server_id': '',
    //       'role-server_name': '',
    //       'role-role_id': '',
    //       'role-role_name': '',
    //       'role-role_level': 0,
    //       'role-role_vip': 0
    //     },
    //     canvas: canvas,
    //     offscreen: codeCanvas
    //   }).then(res => {
    //     console.log(res)
    //   }, err => {
    //     console.log(err)
    //   })
    //   // SDK.updateSelfInfo({
    //   //   data: {
    //   //     raw_data: res.rawData,
    //   //     signature: res.signature,
    //   //     encrypted_data: res.encryptedData,
    //   //     iv: res.iv
    //   //   }
    //   // }).then(res => {
    //   //   console.log(res)

    //   //   SDK.pay({
    //   //     data: {
    //   //       'order-currency': 'CNY',
    //   //       'order-cp_order_id': '10001',
    //   //       'order-product_price': 0.01,
    //   //       'order-product_id': '1000000001',
    //   //       'order-product_cnt': 1,
    //   //       'order-product_name': '金币',
    //   //       'order-product_desc': '金币',
    //   //       'order-ext': '',
    //   //       'role-event': '',
    //   //       'role-server_id': '',
    //   //       'role-server_name': '',
    //   //       'role-role_id': '',
    //   //       'role-role_name': '',
    //   //       'role-role_level': 0,
    //   //       'role-role_vip': 0
    //   //     },
    //   //     canvas: canvas,
    //   //     offscreen: codeCanvas
    //   //   }).then(res => {
    //   //     console.log(res)
    //   //   }, err => {
    //   //     console.log(err)
    //   //   })
    //   // }, err => {
    //   //   console.log(err)
    //   // })
    // })
    // SDK 初始化及登录
    SDK.init({
      app_id: 1,
      mp_id: 'wxd22d224f3a133a5c',
      debug: true
    }).then(() => {
      SDK.login({
        data: {
           state: options.query.state || options.query.scene || ""
        }
      }).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })

      SDK.getShareInfo({
        data: {
          path: ''
        }
      }).then(res => {
        console.log('shareInfo', res)
        wx.onShareAppMessage(() => {
          return {
            title: res.data.title,
            imageUrl: res.data.image,
            query: "state=" + res.data.state
          }
        })
        wx.showShareMenu()
      })

      SDK.checkMsg({
        data: {
          content: '224234fdfdfd'
        }
      }).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })      
    })
  }

  restart() {
    databus.reset()

    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )

    this.bg       = new BackGround(ctx)
    this.player   = new Player(ctx)
    this.gameinfo = new GameInfo()
    this.music    = new Music()

    this.bindLoop     = this.loop.bind(this)
    this.hasEventBind = false

    // 清除上一局的动画
    window.cancelAnimationFrame(this.aniId);

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  /**
   * 随着帧数变化的敌机生成逻辑
   * 帧数取模定义成生成的频率
   */
  enemyGenerate() {
    if ( databus.frame % 30 === 0 ) {
      let enemy = databus.pool.getItemByClass('enemy', Enemy)
      enemy.init(6)
      databus.enemys.push(enemy)
    }
  }

  // 全局碰撞检测
  collisionDetection() {
    let that = this

    databus.bullets.forEach((bullet) => {
      for ( let i = 0, il = databus.enemys.length; i < il;i++ ) {
        let enemy = databus.enemys[i]

        if ( !enemy.isPlaying && enemy.isCollideWith(bullet) ) {
          enemy.playAnimation()
          that.music.playExplosion()

          bullet.visible = false
          databus.score  += 1

          break
        }
      }
    })

    for ( let i = 0, il = databus.enemys.length; i < il;i++ ) {
      let enemy = databus.enemys[i]

      if ( this.player.isCollideWith(enemy) ) {
        databus.gameOver = true

        break
      }
    }
  }

  // 游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
     e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    let area = this.gameinfo.btnArea

    if (   x >= area.startX
        && x <= area.endX
        && y >= area.startY
        && y <= area.endY  )
      this.restart()
  }

  sdkEventHandler(e) {
    var t = this;
    e.preventDefault();
    var n = e.touches[0], a = n.clientX, r = n.clientY, o = this.sdk, i = o.payBtn, s = o.paying;
    o.balanceBtn, o.getBalance, o.navigatorBtn, o.hasNavigator;
    a >= i.startX && a <= i.endX && r >= i.startY && r <= i.endY && !s && (this.sdk.paying = !0, 
    setTimeout(function() {
        t.sdk.paying = !1;
    }, 1e3), SDK.pay({
        data: {
            "order-currency": "CNY",
            "order-cp_order_id": "10001",
            "order-product_price": 1,
            "order-product_id": "1000000001",
            "order-product_cnt": 10,
            "order-product_name": "金币",
            "order-product_desc": "金币",
            "order-ext": "",
            "role-event": "",
            "role-server_id": "11",
            "role-server_name": "测试11服",
            "role-combat_num": 99,
            "role-role_id": "",
            "role-role_name": "",
            "role-role_level": 0,
            "role-role_vip": 0
        },
        canvas: canvas,
        offscreen: codeCanvas
    }).then(function(e) {
        console.log("pay", e), wx.setStorageSync("orderId", e.data.order_id), t.sdk.paying = !1;
    }, function(e) {
        console.log("pay", e), t.sdk.paying = !1;
    }))
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)
    this.sdk.renderBtn(ctx)

    canvas.addEventListener("touchstart", this.sdkEventHandler.bind(this))

    databus.bullets
          .concat(databus.enemys)
          .forEach((item) => {
              item.drawToCanvas(ctx)
            })

    this.player.drawToCanvas(ctx)

    databus.animations.forEach((ani) => {
      if ( ani.isPlaying ) {
        ani.aniRender(ctx)
      }
    })

    this.gameinfo.renderGameScore(ctx, databus.score)

    // 游戏结束停止帧循环
    if ( databus.gameOver ) {
      this.gameinfo.renderGameOver(ctx, databus.score)

      if ( !this.hasEventBind ) {
        this.hasEventBind = true
        this.touchHandler = this.touchEventHandler.bind(this)
        canvas.addEventListener('touchstart', this.touchHandler)
      }
    }

    ctx.drawImage(codeCanvas, 0, 0)
  }

  // 游戏逻辑更新主函数
  update() {
    if ( databus.gameOver )
      return;

    this.bg.update()

    databus.bullets
           .concat(databus.enemys)
           .forEach((item) => {
              item.update()
            })

    this.enemyGenerate()

    this.collisionDetection()

    if ( databus.frame % 20 === 0 ) {
      this.player.shoot()
      this.music.playShoot()
    }
  }

  // 实现游戏帧循环
  loop() {
    databus.frame++

    this.update()
    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}
