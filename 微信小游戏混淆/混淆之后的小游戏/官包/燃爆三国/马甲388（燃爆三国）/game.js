/*Obfuscated by JShaman.com*/const versions='1.0.1';const gameId=0x184;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/rbsg/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20210312_boot.zip','20210201_com.zip','20210201_net.zip','20210201_pages.zip','20210201_datasets.zip','20210201_enem.zip'];getJsonToGame();function judgegame(){return new Promise((_0x1dbdf4,_0x544ca5)=>{wx['request']({'url':'https://gminiapi.xinghe66.cn/mp/index','method':'GET','data':{'app_id':gameId,'versions':versions,'format':'json'},'success'(_0x168a82){if(_0x168a82['data']['code']==0xc8&&_0x168a82['data']['data']['status']==0x2){_0x544ca5();}else{_0x1dbdf4();}},'fail'(){_0x544ca5();}});});}function hasJsonToGame(_0xe9ccd2,_0x40e4ff){console['log'](_0xe9ccd2,'');wx[_0xe9ccd2]=JSON['parse'](_0x40e4ff);let _0x29663d=jsonList['length']-0x1;if(num==_0x29663d){intoGame();}num++;}function wxReadFile(_0x5b8328,_0x349463,_0x5861ec){return new Promise((_0x42081d,_0xf387a)=>{fs['readFile']({'filePath':_0x5b8328,'encoding':'utf-8','success'(_0x4b5bfe){if(_0x5861ec&&_0x4b5bfe['data']){hasJsonToGame(_0x349463,_0x4b5bfe['data']);}_0x42081d(_0x4b5bfe);},'fail'(_0x163185){_0xf387a(_0x163185);}});});}function getJsonToGame(){for(let _0x478280=0x0;_0x478280<jsonList['length'];_0x478280++){let _0x3521cb=jsonList[_0x478280]['split']('_')[0x0];let _0x35953f=jsonList[_0x478280]['split']('_')[0x1];let _0x1b8530=_0x35953f['includes']('.zip')?'':'.json';const _0x2daffe=rootPath+'/'+_0x3521cb+'/'+_0x35953f+_0x1b8530;const _0x3d87b2=!_0x1b8530&&_0x35953f['split']('.')[0x0];const _0x1d422b=rootPath+'/'+_0x3d87b2+'.json';fs['access']({'path':rootPath+'/'+_0x3521cb,'success'(_0x5a9036){},'fail'(_0x3c153a){fs['mkdir']({'dirPath':rootPath+'/'+_0x3521cb,'recursive':!![],'success'(_0x4cf1b7){}});},'complete'(){wxReadFile(_0x2daffe)['then'](_0x52ee96=>{if(_0x1b8530){hasJsonToGame(_0x35953f,_0x52ee96['data']);}else{wxReadFile(_0x1d422b,_0x3d87b2,!![]);}})['catch'](_0x1fdbb5=>{wx['downloadFile']({'url':downloadUrl+'/'+_0x3521cb+'/'+_0x35953f+_0x1b8530,'timeout':0x2710,'filePath':_0x2daffe,'success'(_0xd755fa){if(_0xd755fa['statusCode']===0xc8){if(_0x1b8530){wxReadFile(_0x2daffe,_0x35953f,!![]);}else{fs['unzip']({'zipFilePath':_0xd755fa['filePath']||_0xd755fa['tempFilePath'],'targetPath':rootPath,'success'(_0x16f461){wxReadFile(_0x1d422b,_0x3d87b2,!![]);},'fail'(_0x3a1512){console['log'](_0x3a1512,'==解压失败');}});}}else{console['error']('下载失败，文件不存在');fs['unlink']({'filePath':rootPath+'/'+_0x3521cb+'/'+_0x35953f+_0x1b8530,'success'(_0x22898b){},'fail'(_0x8e1d37){}});}},'fail'(_0x4b2ec0){console['log'](_0x4b2ec0,'====下载失败');}});});}});}}function intoGame(){require('libs/weapp-adapter.js'),window['loadLib']=require,window['Parser']=require('libs/dom_parser'),require('libs/sax'),require('libs/zlib.min.js'),require('libs/expreval.min.js'),require('libs/sdk-1.0.1.js'),require('libs/czsdk_WeChat.js'),require('libs/zhijianWeChatSDK.js');const _0x49cd11='\x0a\x20\x20\x20\x20\x20attribute\x20vec4\x20position;\x0a\x20\x20\x20\x20\x20attribute\x20vec2\x20inputTextureCoordinate;\x0a\x20\x20\x20\x20\x20varying\x20vec2\x20textureCoordinate;\x0a\x20\x0a\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20textureCoordinate\x20=\x20inputTextureCoordinate;\x0a\x20\x20\x20\x20\x20}';const _0x53dac8='\x0a\x20\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20\x20varying\x20vec2\x20textureCoordinate;\x0a\x20\x20\x20\x20\x20uniform\x20sampler2D\x20inputImageTexture;\x0a\x20\x0a\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(inputImageTexture,\x20textureCoordinate);\x0a\x20\x20\x20\x20\x20}';const _0x117cff=new Float32Array([-0x1,0x1,0x0,0x1,-0x1,-0x1,0x0,0x0,0x1,0x1,0x1,0x1,0x1,-0x1,0x1,0x0]);function _0x138648(_0x127939){let _0x293646=_0xcce1dc(_0x127939);if(!_0x293646){console['error']('创建程序失败');return![];}_0x127939['useProgram'](_0x293646);_0x127939['program']=_0x293646;return!![];}function _0xcce1dc(_0x4f8e26){let _0x111ab1=_0x1834c4(_0x4f8e26,_0x4f8e26['VERTEX_SHADER'],_0x49cd11);let _0x70b07a=_0x1834c4(_0x4f8e26,_0x4f8e26['FRAGMENT_SHADER'],_0x53dac8);if(!_0x111ab1||!_0x70b07a){return null;}let _0x4ca5a1=_0x4f8e26['createProgram']();if(!_0x4ca5a1){return null;}_0x4f8e26['attachShader'](_0x4ca5a1,_0x111ab1);_0x4f8e26['attachShader'](_0x4ca5a1,_0x70b07a);_0x4f8e26['linkProgram'](_0x4ca5a1);var _0x52b4c8=_0x4f8e26['getProgramParameter'](_0x4ca5a1,_0x4f8e26['LINK_STATUS']);if(!_0x52b4c8){console['error']('无法连接程序对象:\x20'+gl['getProgramInfoLog'](_0x4ca5a1));_0x4f8e26['deleteProgram'](_0x4ca5a1);_0x4f8e26['deleteShader'](_0x70b07a);_0x4f8e26['deleteShader'](_0x111ab1);return null;}return _0x4ca5a1;}function _0x1834c4(_0x4c0cf7,_0x303dc4,_0x4514e7){var _0x3af2bd=_0x4c0cf7['createShader'](_0x303dc4);if(_0x3af2bd===null){console['error']('无法创建着色器:\x20'+_0x303dc4);return null;}_0x4c0cf7['shaderSource'](_0x3af2bd,_0x4514e7);_0x4c0cf7['compileShader'](_0x3af2bd);var _0x2f9b53=_0x4c0cf7['getShaderParameter'](_0x3af2bd,_0x4c0cf7['COMPILE_STATUS']);if(!_0x2f9b53){console['error']('编辑着色器失败:\x20'+_0x4c0cf7['getShaderInfoLog'](_0x3af2bd));_0x4c0cf7['deleteShader'](_0x3af2bd);return null;}return _0x3af2bd;}function _0x470ac8(_0x198b54,_0xc28a52){let _0x2c1140=0x4;let _0x16f0cc=_0x198b54['createBuffer']();if(!_0x16f0cc){console['error']('无法创建缓冲区');return-0x1;}_0x198b54['bindBuffer'](_0x198b54['ARRAY_BUFFER'],_0x16f0cc);_0x198b54['bufferData'](_0x198b54['ARRAY_BUFFER'],_0xc28a52,_0x198b54['STATIC_DRAW']);let _0x5b9d9e=_0x198b54['getAttribLocation'](_0x198b54['program'],'position');if(_0x5b9d9e<0x0){console['error']('无法获取到存储位置');return;}let _0x3d715c=_0xc28a52['BYTES_PER_ELEMENT'];_0x198b54['vertexAttribPointer'](_0x5b9d9e,0x2,_0x198b54['FLOAT'],![],_0x3d715c*0x4,0x0);_0x198b54['enableVertexAttribArray'](_0x5b9d9e);let _0x43cff=_0x198b54['getAttribLocation'](_0x198b54['program'],'inputTextureCoordinate');if(_0x43cff<0x0){console['error']('无法获取到存储位置');return;}_0x198b54['vertexAttribPointer'](_0x43cff,0x2,_0x198b54['FLOAT'],![],_0x3d715c*0x4,_0x3d715c*0x2);_0x198b54['enableVertexAttribArray'](_0x43cff);return _0x2c1140;}function _0x3b181d(_0x1d01be,_0x7d2d41,_0xd81d4f){let _0xc622a3=_0x1d01be['createTexture']();if(!_0xc622a3){console['error']('无法创建纹理对象');return;}let _0x3fbb52=_0x1d01be['getUniformLocation'](_0x1d01be['program'],'inputImageTexture');if(_0x3fbb52<0x0){console['error']('无法获取变量的存储位置');return;}_0x29d73e(_0x1d01be,_0xd81d4f,_0xc622a3,_0x3fbb52,_0x7d2d41);return!![];}function _0x29d73e(_0x2f28b0,_0x14fae0,_0x255d9e,_0x261ecc,_0x9f126){_0x2f28b0['enable'](_0x2f28b0['BLEND']);_0x2f28b0['blendFunc'](_0x2f28b0['SRC_ALPHA'],_0x2f28b0['ONE_MINUS_SRC_ALPHA']);_0x2f28b0['pixelStorei'](_0x2f28b0['UNPACK_FLIP_Y_WEBGL'],0x1);_0x2f28b0['activeTexture'](_0x2f28b0['TEXTURE0']);_0x2f28b0['bindTexture'](_0x2f28b0['TEXTURE_2D'],_0x255d9e);_0x2f28b0['texParameteri'](_0x2f28b0['TEXTURE_2D'],_0x2f28b0['TEXTURE_MIN_FILTER'],_0x2f28b0['LINEAR']);_0x2f28b0['texParameteri'](_0x2f28b0['TEXTURE_2D'],_0x2f28b0['TEXTURE_MAG_FILTER'],_0x2f28b0['LINEAR']);_0x2f28b0['texParameteri'](_0x2f28b0['TEXTURE_2D'],_0x2f28b0['TEXTURE_WRAP_S'],_0x2f28b0['CLAMP_TO_EDGE']);_0x2f28b0['texParameteri'](_0x2f28b0['TEXTURE_2D'],_0x2f28b0['TEXTURE_WRAP_T'],_0x2f28b0['CLAMP_TO_EDGE']);_0x2f28b0['texImage2D'](_0x2f28b0['TEXTURE_2D'],0x0,_0x2f28b0['RGBA'],_0x2f28b0['RGBA'],_0x2f28b0['UNSIGNED_BYTE'],_0x9f126);_0x2f28b0['uniform1i'](_0x261ecc,0x0);_0x2f28b0['enable'](_0x2f28b0['BLEND']);_0x2f28b0['drawArrays'](_0x2f28b0['TRIANGLE_STRIP'],0x0,_0x14fae0);_0x2f28b0['pixelStorei'](_0x2f28b0['UNPACK_FLIP_Y_WEBGL'],0x0);}var _0x2d0a7b={'alpha':!![],'depth':![],'stencil':![],'antialias':![],'premultipliedAlpha':![],'preserveDrawingBuffer':![]};let _0xc33448=canvas['getContext']('webgl',_0x2d0a7b);let _0x170716=new Image();let _0xa25cd7=wx['createCanvas']();let _0x23e96d=_0xa25cd7['getContext']('2d');let _0x5461ac=0x0;let _0x32e384='';_0x23e96d['fillStyle']='rgba(255,\x20255,\x20255,\x200)';_0x23e96d['fillRect'](0x0,0x0,_0xa25cd7['width'],_0xa25cd7['height']);_0x23e96d['fillStyle']='#00FFFF';_0x23e96d['font']='40px\x20sans-serif';_0x32e384='资源加载中:'+_0x5461ac+'%';_0x170716['onload']=()=>{_0x138648(_0xc33448);_0x3b181d(_0xc33448,_0x170716,_0x470ac8(_0xc33448,_0x117cff));_0x3b181d(_0xc33448,_0xa25cd7,_0x470ac8(_0xc33448,_0x117cff));};_0x170716['src']='beijingnew.png';window['requestAnimationFrame'](_0x212f71);function _0x212f71(){}setInterval(function(){},0x10);window['release']=![];let _0x5ab2e1=__wxConfig['envVersion'];console['log']('envVersion-----------'+_0x5ab2e1);if(_0x5ab2e1=='release')window['release']=!![];window['IsMinG']=!![];window['IszhijianWeChat']=!![];window['BOOTVERSION']=0x9;const _0x1f4893=wx['loadSubpackage']({'name':'boot','success':function(_0x1c07be){console['log']('SUCCESS');},'fail':function(_0x49a2a0){console['log']('fail');}});}