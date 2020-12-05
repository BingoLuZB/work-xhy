window.__require=function e(t,n,i){function c(s,r){if(!n[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+s+"'")}}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){return c(t[s][1][e]||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<i.length;s++)c(i[s]);return c}({ConfigLoader:[function(e,t,n){"use strict";cc._RF.push(t,"b8611MIPhFDzqox8X/ctcS+","ConfigLoader");var i={LoadJSON:function(e,t){var n="JSON/"+e;cc.loader.loadRes(n,function(e,n){e?cc.log(e):t&&t(n.json)})}};t.exports=i,cc._RF.pop()},{}],Global:[function(e,t,n){"use strict";cc._RF.push(t,"0e2e3Y5GrlJ8oLIdYHxlAY5","Global");t.exports={EnemyCount:null,EnemyLast:null,EnemyType:0,LevelNum:0},cc._RF.pop()},{}],"bullet-mgr":[function(e,t,n){"use strict";cc._RF.push(t,"3b671QhMrhFl4cZyp25bmUe","bullet-mgr"),cc.Class({extends:cc.Component,properties:function(){return{bullet:cc.Prefab,player:cc.Node}},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.pool=new cc.NodePool("bullet");for(var e=0;e<100;e++)this.pool.put(cc.instantiate(this.bullet))},start:function(){},schedule_createBullet:function(){this.schedule(this.createManyBullet,.2)},off_schedule_createBullet:function(){this.unschedule(this.createManyBullet)},createManyBullet:function(){var e=this.player.x,t=this.player.y+80;this.createOneBullet(e,t),this.createOneBullet(e+45,t),this.createOneBullet(e-45,t)},createOneBullet:function(e,t){var n=this.pool.get(this.pool);n||(this.pool.put(cc.instantiate(this.bullet)),n=this.pool.get(this.pool)),n.parent=this.node,n.x=e,n.y=t}}),cc._RF.pop()},{}],bullet:[function(e,t,n){"use strict";cc._RF.push(t,"11fa0Gd9etKSbETF69aeHl+","bullet"),cc.Class({extends:cc.Component,properties:{speed:800,pool:null},reuse:function(e){this.pool=e},onCollisionEnter:function(e,t){this.pool.put(this.node)},update:function(e){this.node.y+=this.speed*e,this.node.y>960&&this.pool.put(this.node)}}),cc._RF.pop()},{}],"camera-bk":[function(e,t,n){"use strict";cc._RF.push(t,"02a37aW+bxDuYBMnkOkWhjq","camera-bk"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],"enemy-mgr":[function(e,t,n){"use strict";cc._RF.push(t,"b7e47Sc/llD7LlA12t1l+OI","enemy-mgr");var i=e("Global");cc.Class({extends:cc.Component,properties:function(){return{enemy:cc.Prefab,ProgressBar:cc.ProgressBar,Enemy_Label:cc.Label,GameOverUI:cc.Node}},onLoad:function(){},start:function(){},ProgressSchedule:function(){if(i.EnemyLast>0){var e=i.EnemyLast/i.EnemyCount;cc.log(e),this.ProgressBar.progress=e,this.Enemy_Label.string=100*e+"%"}else 0===i.EnemyLast&&(cc.log("\u606d\u559c\u8fc7\u5173"),this.off_ProgressSchedule(),this.ProgressBar.progress=0,this.Enemy_Label.string="0%")},off_ProgressSchedule:function(){this.unschedule(this.ProgressSchedule)},schedule_createEnemy:function(e){this.schedule(this.createOneEnemy,2,e-1,.5),this.schedule(this.ProgressSchedule,.1)},off_schedule_createEnemy:function(){this.unschedule(this.createOneEnemy)},createOneEnemy:function(){var e=cc.instantiate(this.enemy);e.parent=this.node,e.x=600*Math.random()-300,e.y=960},update:function(e){}}),cc._RF.pop()},{Global:"Global"}],enemy:[function(e,t,n){"use strict";cc._RF.push(t,"3aaefAhRKJOvrwKPIT3sCQk","enemy");var i=e("Global");cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.dir=Math.random()>.5?1:-1,this.speed_x=50+Math.floor(120*Math.random()),this.speed_y=20+Math.floor(50*Math.random()),this.hp=40+Math.floor(20*Math.random())},start:function(){this.hpLab=this.node.getComponentInChildren(cc.Label),this.hpLab.string=this.hp+""},onCollisionEnter:function(e,t){this.hp-=1,0===this.hp&&(this.node.destroy(),i.EnemyLast-=1),this.hpLab.string=this.hp+""},update:function(e){this.node.x+=this.speed_x*e*this.dir,this.node.x<-cc.winSize.width/2+this.node.width/2&&(this.dir=1),this.node.x>cc.winSize.width/2-this.node.width/2&&(this.dir=-1),this.node.y-=this.speed_y*e,this.node.y<-1e3&&(this.node.y=1e3)}}),cc._RF.pop()},{Global:"Global"}],getData:[function(e,t,n){"use strict";cc._RF.push(t,"ef0fcRRbctJD5kBDbhriTfy","getData");var i=e("Global"),c=e("ConfigLoader");cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.loadGame(0)},loadGame:function(e){c.LoadJSON("Gamelist",function(t){cc.log(t),cc.log("\u8bfb\u53d6JSON\u6570\u636e\u6210\u529f"),i.EnemyCount=t[e].EnemyCount,i.EnemyLast=t[e].EnemyCount})},start:function(){}}),cc._RF.pop()},{ConfigLoader:"ConfigLoader",Global:"Global"}],player:[function(e,t,n){"use strict";cc._RF.push(t,"89087nfjNVK5JKahmVZZj/S","player"),cc.Class({extends:cc.Component,properties:function(){return{GameOverUI:cc.Node,restart:cc.Node,engines:[cc.Node],bullet_mgr:e("bullet-mgr")}},onLoad:function(){this.Fly=this.node.getChildByName("Fly"),this.Animation=this.node.getComponent(cc.Animation),this.EngineAction()},EngineAction:function(){var e=cc.repeatForever(cc.rotateBy(.5,360)),t=cc.repeatForever(cc.rotateBy(.5,-360));this.engines[0].runAction(e),this.engines[1].runAction(t)},OverAction:function(){var e=this,t=cc.spawn(cc.fadeOut(1),cc.callFunc(function(){e.Animation.play().repeatCount=1}));this.Fly.runAction(t)},onCollisionEnter:function(e,t){1==e.tag&&(cc.log("\u6e38\u620f\u7ed3\u675f"),this.GameOverUI.active=!0,this.bullet_mgr.off_schedule_createBullet(),this.OverAction())},start:function(){}}),cc._RF.pop()},{"bullet-mgr":"bullet-mgr"}],"touch-move":[function(e,t,n){"use strict";cc._RF.push(t,"67d21+0HSZC8YQquLvoDPdg","touch-move");var i=e("Global");cc.Class({extends:cc.Component,properties:function(){return{player:cc.Node,UI:cc.Node,bullet_mgr:e("bullet-mgr"),enemy_mgr:e("enemy-mgr"),moveAnimation:[cc.Animation],GameOverUI:cc.Node,coinLight:cc.Sprite}},CoinLight:function(){this.coinLight.fillRange>-1?this.coinLight.fillRange-=.01:-1===this.coinLight.fillRange&&(this.coinLight.fillRange=0,this.coin_count+=3,this.coin_light_label.string=this.coin_count+"")},BackButton:function(){cc.director.loadScene("game")},onLoad:function(){this.coin_total=0,this.coin_count=0,this.coin_light_label=cc.find("Canvas/UI/Coin/coin/coin_count").getComponent(cc.Label),this.schedule(this.CoinLight,.05),this.coinLight.fillRange=0,this.bg=cc.find("Canvas/Background/bg"),this.isPlaying=!0,this.isOver=!1,this.levelInit(),this.tishi=cc.find("Canvas/UI/tishi");var e=cc.repeatForever(cc.sequence(cc.rotateBy(.3,4),cc.rotateBy(.6,-8),cc.rotateBy(.3,4),cc.delayTime(.5)));this.tishi.runAction(e)},ProBar:function(e){this.Progress=cc.find("Canvas/ProGress");var t=cc.fadeIn(1),n=cc.fadeOut(1);"in"===e?this.Progress.runAction(t):"out"===e&&this.Progress.runAction(n)},levelInit:function(){this.progressBar=cc.find("Canvas/ProGress/progressBarNode/ProgressBar").getComponent(cc.ProgressBar),this.progressBar.progress=1,this.Level=cc.find("Canvas/Level"),this.z_L=cc.find("Canvas/Level/z_l"),this.z4=cc.find("Canvas/Level/z4"),this.z_m=cc.find("Canvas/Level/z_m"),this.z5=cc.find("Canvas/Level/z5"),this.z_r=cc.find("Canvas/Level/z_r")},levelChange:function(e){var t=this;this.L=this.z_L,this.M=this.z_m,this.R=this.z_r;var n=cc.moveTo(2,this.R.position),i=cc.spawn(cc.scaleTo(2,.5,.5),cc.moveTo(2,this.L.position)),c=cc.spawn(cc.scaleTo(2,1,1),cc.moveTo(2,this.M.position)),o=cc.sequence(c,cc.callFunc(function(){t.L=t.z_m,t.M=t.z_r,t.R=t.z_L})),s=cc.spawn(cc.scaleTo(2,1,1),cc.moveTo(2,0,340),cc.callFunc(function(){t.ProBar("out")}));this.Level.parent=cc.find("Canvas/GameOver"),this.Level.runAction(s),this.L.runAction(n),this.M.runAction(i),this.R.runAction(o),e&&e()},LevelScale:function(){var e=this,t=cc.spawn(cc.scaleTo(2,.5,.5),cc.moveBy(2,0,620),cc.callFunc(function(){e.ProBar("in"),e.enemy_mgr.schedule_createEnemy(i.EnemyCount)}));this.isPlaying&&this.Level.runAction(t)},BGAction:function(e){var t=cc.fadeIn(1),n=cc.fadeOut(1);"in"===e?this.bg.runAction(t):"out"===e&&this.bg.runAction(n)},EventMove:function(e){var t=this,n=e.getDelta();this.player.x+=n.x,this.player.y+=n.y,0===i.EnemyLast&&!1===this.isOver&&(this.isOver=!0,this.isOver&&this.levelChange(function(){cc.log("\u7ed3\u675f\u52a8\u4f5c"),t.GameOverUI.active=!0})),this.GameOverUI.active&&(this.node.off("touchmove",this.EventMove,this),this.enemy_mgr.off_schedule_createEnemy())},EventStart:function(e){this.BGAction("out"),this.unschedule(this.CoinLight),this.UI.active=!1,this.bullet_mgr.schedule_createBullet(),this.moveAnimation[0].pause(),this.moveAnimation[1].pause(),this.LevelScale(),this.isPlaying=!1},EventEnd:function(e){this.BGAction("in"),this.bullet_mgr.off_schedule_createBullet()},start:function(){this.node.on("touchmove",this.EventMove,this),this.node.on("touchstart",this.EventStart,this),this.node.on("touchend",this.EventEnd,this)},update:function(e){this.player.x<-cc.winSize.width/2?this.player.x=-cc.winSize.width/2+this.player.width/2:this.player.x>cc.winSize.width/2&&(this.player.x=cc.winSize.width/2-this.player.width/2),this.player.y<-cc.winSize.height/2?this.player.y=-cc.winSize.height/2+this.player.height/2:this.player.y>cc.winSize.height/2&&(this.player.y=cc.winSize.height/2-this.player.height/2)}}),cc._RF.pop()},{Global:"Global","bullet-mgr":"bullet-mgr","enemy-mgr":"enemy-mgr"}]},{},["ConfigLoader","Global","bullet-mgr","bullet","camera-bk","enemy-mgr","enemy","getData","player","touch-move"]);