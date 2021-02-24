
const versions = '1.0.0';
const gameId = 338;
const downloadUrl = 'https://gministatic.xinghe66.cn/jsonList/RBSG/mj338';
const jsonList = ['20210224_jsts.zip', '20210224_boax.zip', , '20210224_boax.zip', '20210224_jsha.zip', , '20210224_xixi.zip'];
// config
const rootPath = wx.env.USER_DATA_PATH
const fs = wx.getFileSystemManager();
judgegame()
    .then(() => {
        // 进游戏
        intoGame()
    })
    .catch(() => {
        intoMiniGame()
    })

function getJsonName(str) {
    let name = jsonList.filter(item => item.includes(str))
    return name[0]
}

// 判断进壳还是进游戏
function judgegame() {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://gminiapi.xinghe66.cn/mp/index',
            method: 'GET',
            data: {
                app_id: gameId,
                versions,
                format: 'json'
            },
            success(res) {
                // status 2 提审状态
                if (res.data.code == 200 && res.data.data.status == 2) {
                    reject()
                } else {
                    resolve()
                }
            },
            fail() {
                reject()
            }
        })
    })
}

// 赋值json给全局
function hasJsonToGame(str, data, cb) {
    console.log(str, '')
    let res = JSON.parse(data)
    wx[str] = res
    cb && cb(res)
}

// 微信api 读取文件
function wxReadFile(filePath, str, toGame, cb) {
    function rf(sucFn, errFn) {
        fs.readFile({
            filePath,
            encoding: 'utf-8',
            success(res) {
                // console.log('读取成功')
                if (toGame && res.data) {
                    hasJsonToGame(str, res.data, cb)
                }
                sucFn && sucFn(res)
            },
            fail(err) {
                // console.log(err, '读取失败')
                errFn && errFn(err)
            }
        })
    }
    if (toGame) {
        rf()
    } else {
        return new Promise((resolve, reject) => {
            rf(resolve, reject)
        })
    }
}

// 拿到游戏的json
function getJsonToGame(fileName, cb) {
    // for (let i = 0; i < jsonList.length; i++) {
    let date = fileName.split('_')[0]
    let str = fileName.split('_')[1]
    let end = str.includes('.zip') ? '' : '.json'
    const path = `${rootPath}/${date}/${str}${end}`
    const zip2JsonName = !end && str.split('.')[0]
    const zip2JsonPath = `${rootPath}/${zip2JsonName}.json`

    fs.access({
        path: `${rootPath}/${date}`,
        success(res) {
            // console.log(res, '==目录存在')
        },
        fail(err) {
            // console.log('目录不存在')
            fs.mkdir({
                dirPath: `${rootPath}/${date}`,
                recursive: true,
                success(res) {
                    // console.log('目录创建成功')
                }
            })
        },
        complete() {
            wxReadFile(path)
                .then(res => {
                    // 有缓存，直接读取
                    if (end) {
                        // 如果是json文件，直接赋值给全局
                        hasJsonToGame(str, res.data, cb)
                    } else {
                        // 如果是zip文件，直接读取已经解压了的文件
                        wxReadFile(zip2JsonPath, zip2JsonName, true, cb)
                    }
                })
                .catch(err => {
                    // 没缓存，下载
                    wx.downloadFile({
                        url: `${downloadUrl}/${date}/${str}${end}`,
                        timeout: 10000,
                        filePath: path,
                        success(res) {
                            if (res.statusCode === 200) {
                                if (end) {
                                    // 如果是json的文件
                                    wxReadFile(path, str, true, cb)
                                } else {
                                    // 如果是zip的压缩文件
                                    fs.unzip({
                                        zipFilePath: res.filePath || res.tempFilePath,
                                        targetPath: rootPath,
                                        success(res) {
                                            // console.log(res, '解压成功')
                                            wxReadFile(zip2JsonPath, zip2JsonName, true, cb)
                                        },
                                        fail(err) {
                                            console.log(err, '==解压失败')
                                        }
                                    })
                                }
                            } else {
                                console.error('下载失败，文件不存在')
                                fs.unlink({
                                    filePath: `${rootPath}/${date}/${str}${end}`,
                                    success(res) {
                                        // console.log(res, '删除成功')
                                    },
                                    fail(err) {
                                        // console.log(err, '删除失败')
                                    }
                                })
                            }
                        },
                        fail(err) {
                            console.log(err, '====下载失败')
                        }
                    })
                })
        }
    })
    // }
}

wx.getJsonName = getJsonName
wx.getJsonToGame = getJsonToGame

function intoGame() {
    require("libs/weapp-adapter.js"),
window.loadLib=require, 
window.Parser = require("libs/dom_parser"), 
require("libs/sax"),
require("libs/zlib.min.js"),
require("libs/expreval.min.js"),
//require("libs/laya.js"),

//require("libs/sg.js"),
//require("libs/xiyougamesdk/xiyougamesdk.js"),
//require("libs/xiyougamesdk/config.js"),
//require("libs/xiyougamesdk/utils/common.js"),
//require("libs/xiyougamesdk/utils/event.js"),
//require("libs/qqSDK.js"),

//require("libs/mpsdk.js"),
//require("libs/WeChatMiniGameSDK.js")

//require("libs/CzSDK.js"),
//require("libs/zhijianMiniGameSDK.js"),

require("libs/sdk-1.0.1.js"),
require("libs/czsdk_WeChat.js"),
require("libs/zhijianWeChatSDK.js");



//-------------------------------------------------------------------------------WEG部分

 // 顶点着色器
 const VSHADER_SOURCE = `
     attribute vec4 position;
     attribute vec2 inputTextureCoordinate;
     varying vec2 textureCoordinate;
 
     void main() {
        gl_Position = position;
        textureCoordinate = inputTextureCoordinate;
     }`
 
 // 片元着色器
 const FSHADER_SOURCE = `
     precision mediump float;
     varying vec2 textureCoordinate;
     uniform sampler2D inputImageTexture;
 
     void main() {
        gl_FragColor = texture2D(inputImageTexture, textureCoordinate);
     }`
 
 // canvas位置
 const canvasSizes = new Float32Array([
   -1, 1, 0.0, 1.0,
   -1, -1, 0.0, 0.0,
   1, 1, 1.0, 1.0,
   1, -1, 1.0, 0.0
 ])
 
 /**
  * 初始化着色器
  */
 function initShaders(webgl) {
   let program = createProgram(webgl)
 
   if (!program) {
     console.error('创建程序失败')
     return false
   }
 
   webgl.useProgram(program)
   webgl.program = program
 
   return true
 }
 
 /**
  * 创建程序
  */
 function createProgram(webgl) {
 
   // 创建着色器对象
   let vertexShader = loadShader(webgl, webgl.VERTEX_SHADER, VSHADER_SOURCE)
   let fragmentShader = loadShader(webgl, webgl.FRAGMENT_SHADER, FSHADER_SOURCE)
 
   if (!vertexShader || !fragmentShader) {
     return null
   }
 
   // 创建程序对象
   let program = webgl.createProgram()
   if (!program) {
     return null
   }
 
   // 为程序对象分配顶点着色器和片元着色器
   webgl.attachShader(program, vertexShader)
   webgl.attachShader(program, fragmentShader)
 
   // 连接着色器
   webgl.linkProgram(program)
 
   // 检查连接
   var linked = webgl.getProgramParameter(program, webgl.LINK_STATUS)
   if (!linked) {
     console.error(`无法连接程序对象: ${gl.getProgramInfoLog(program)}`)
     webgl.deleteProgram(program)
     webgl.deleteShader(fragmentShader)
     webgl.deleteShader(vertexShader)
     return null
   }
 
   return program
 }
 
 /**
  * 加载着色器
  */
 function loadShader(webgl, type, source) {
   // 创建着色器对象
   var shader = webgl.createShader(type)
   if (shader === null) {
     console.error(`无法创建着色器: ${type}`)
     return null
   }
 
   // 设置着色器源代码
   webgl.shaderSource(shader, source)
   // 编译着色器
   webgl.compileShader(shader)
 
   // 检查着色器的编译状态
   var compiled = webgl.getShaderParameter(shader, webgl.COMPILE_STATUS)
   if (!compiled) {
     console.error(`编辑着色器失败: ${webgl.getShaderInfoLog(shader)}`)
     webgl.deleteShader(shader)
     return null
   }
 
   return shader
 }
 
 /**
  * 初始化顶点缓冲区
  */
 function initVertexBuffers(webgl, verticesSizes) {
   let n = 4
 
   let vertexSizeBuffer = webgl.createBuffer()
   if (!vertexSizeBuffer) {
     console.error('无法创建缓冲区')
     return -1
   }
 
   webgl.bindBuffer(webgl.ARRAY_BUFFER, vertexSizeBuffer)
   webgl.bufferData(webgl.ARRAY_BUFFER, verticesSizes, webgl.STATIC_DRAW)
 
   let position = webgl.getAttribLocation(webgl.program, 'position')
 
   if (position < 0) {
     console.error('无法获取到存储位置')
     return
   }
 
   // 获取数组一个值所占的字节数
   let fsize = verticesSizes.BYTES_PER_ELEMENT
 
   // 将顶点坐标的位置赋值
   webgl.vertexAttribPointer(position, 2, webgl.FLOAT, false, fsize * 4, 0)
   webgl.enableVertexAttribArray(position)
 
   // 将顶点的纹理坐标分配给inputTextureCoordinate并开启它
   let inputTextureCoordinate = webgl.getAttribLocation(webgl.program, 'inputTextureCoordinate')
 
   if (inputTextureCoordinate < 0) {
     console.error('无法获取到存储位置')
     return
   }
 
   // 将纹理坐标赋值
   webgl.vertexAttribPointer(inputTextureCoordinate, 2, webgl.FLOAT, false, fsize * 4, fsize * 2)
   webgl.enableVertexAttribArray(inputTextureCoordinate)
 
   return n
 }
 
 /**
  * 初始化纹理
  */
 function initTextures(webgl, image, n) {
   // 创建纹理对象
   let texture = webgl.createTexture()
 
   if (!texture) {
     console.error('无法创建纹理对象')
     return
   }
 
   // 获取inputImageTexture的存储位置
   let inputImageTexture = webgl.getUniformLocation(webgl.program, 'inputImageTexture')
 
   if (inputImageTexture < 0) {
     console.error('无法获取变量的存储位置')
     return
   }
 
   // 加载纹理
   loadTexture(webgl, n, texture, inputImageTexture, image)
 
   return true
 }
 
 /**
  * 加载纹理
  */
 function loadTexture(webgl, n, texture, inputImageTexture, image) {
   webgl.enable(webgl.BLEND);
   webgl.blendFunc(webgl.SRC_ALPHA, webgl.ONE_MINUS_SRC_ALPHA);
   // 对纹理图像进行y轴反转
   webgl.pixelStorei(webgl.UNPACK_FLIP_Y_WEBGL, 1)
 
   // 开启0号纹理单元
   webgl.activeTexture(webgl.TEXTURE0)
 
   // 向target绑定纹理对象
   webgl.bindTexture(webgl.TEXTURE_2D, texture)
 
   // 配置纹理参数
   webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR)
   webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR)
   webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE)
   webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE)
 
   // 配置纹理图像
   webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, image)
 
   // 将0号纹理传递给着色器
   webgl.uniform1i(inputImageTexture, 0)
 
   // 打开混合使之透明
   webgl.enable(webgl.BLEND)
 
   // 绘制
   webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, n)

   webgl.pixelStorei(webgl.UNPACK_FLIP_Y_WEBGL, 0)
 }
 
 
 // let game = wx.createCanvas()
 // let webgl = game.getContext('webgl')
 var context_options = {
   alpha: true, //this enables an alpha channnel in rendering buffer
   depth: false,
   stencil: false,
   antialias: false,
   premultipliedAlpha: false,
   preserveDrawingBuffer: false
 };
 let webgl = canvas.getContext('webgl', context_options)
 let image = new Image()
 let aCanvas = wx.createCanvas()
 let aCtx = aCanvas.getContext('2d')
 let toalpro=0
 let textsrc=""
 aCtx.fillStyle = 'rgba(255, 255, 255, 0)';
 aCtx.fillRect(0,0,aCanvas.width,aCanvas.height)
 aCtx.fillStyle = "#00FFFF"
 aCtx.font="40px sans-serif";
 textsrc= '资源加载中:'+toalpro+'%'
//  aCtx.fillText(
//    textsrc,
//    200,
//    200,
//  )
 image.onload = () => {
    initShaders(webgl)
    initTextures(webgl, image, initVertexBuffers(webgl, canvasSizes))
    initTextures(webgl, aCanvas, initVertexBuffers(webgl, canvasSizes))
 }

  image.src = 'beijingnew.png'
  window.requestAnimationFrame(loop)
 
  function loop() {
//   toalpro +=50;
//   if( toalpro>500)
//       toalpro =50;
// //    aCtx.fillStyle = "#00FFFF"
   
// //    //aCtx.clearRect(10, 100, 500, 25)
// //    aCtx.fillRect(10, 100,toalpro, 25)
// //    aCtx.draw();

   
//     textsrc= '资源加载中:'+toalpro+'%'

//    aCtx.fillText(
//     textsrc,
//     10,
//     200,
//   )
//   window.requestAnimationFrame(loop)
 }
//  var image2 = new Image()
//  var imgX = 0
//  var imgY = 500
//  image2.src = 'probar1.png'
//  image2.onload = function () {
   
//   // aCtx.clearRect(imgX, imgY,image2.width, image2.height)
//   // aCtx.drawImage(image2, imgX, imgY++)
  
//  }
 
//  var image3 = new Image()
//  var imgX3 = 0
//  var imgY3 = 700
//  image3.src = 'probar2.png'
//  image3.onload = function () {
   
//   // aCtx.clearRect(imgX3, imgY3,image3.width, image3.height)
//   // aCtx.drawImage(image3, imgX3, imgY3)
  
//  }
setInterval(function(){
  // aCtx.clearRect(imgX3, imgY3,image3.width, image3.height)
  // aCtx.drawImage(image3, imgX3, imgY3++)
}, 16)

//-------------------------------------------小游戏启动项配置
//是否是正式版本
window.release= false;
let version = __wxConfig.envVersion;
console.log('envVersion-----------'+version);
if(version=="release")
  window.release= true;
//是否是小游戏
window.IsMinG= true;
//指尖微信为true
window.IszhijianWeChat= true;
//boot版本
window.BOOTVERSION=9;
const loadTask = wx.loadSubpackage({
  name: 'boot', 
  success: function(res) {
    // 分包加载成功后通过 success 回调
	//loadSubpackages(0);
    console.log("SUCCESS");
	//loadSubpackages(0);
  },
  fail: function(res) {
    console.log("fail")
    // 分包加载失败通过 fail 回调
  }
})

// GameGlobal.srclist=[];
// GameGlobal.srclist.push('engine');
// GameGlobal.srclist.push('datasets');
// GameGlobal.srclist.push('net');
// GameGlobal.srclist.push('pages');

// GameGlobal.srclist.push('enem');
// GameGlobal.srclist.push('com');
// GameGlobal.srcindex=0;

// function loadSubpackages(index) {
//   wx.loadSubpackage({
//     name: GameGlobal.srclist[index], 
//     success: function(res) {
//      // 分包加载成功后通过 success 回调
//       GameGlobal.srcindex++;
//       if(index ==0)
//       {
//        for(var i=1;i < GameGlobal.srclist.length -2;i++)
//        {
//          loadSubpackages(i);
//         }
//       }
//       if(GameGlobal.srcindex  >=GameGlobal.srclist.length -2  &&GameGlobal.srcindex <=GameGlobal.srclist.length -1)
//       {
//        loadSubpackages(GameGlobal.srcindex);
//       } 
//       console.log("SUCCESS")
//    },
//     fail: function(res) {
//      console.log("fail")
//       //分包加载失败通过 fail 回调
//     }
//   })
// }


}
function intoMiniGame () {
    
}
