const versions='1.0.0';const gameId=0x184;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/rbsg/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20210121_boot.zip','20210121_com.zip','20210121_net.zip','20210121_pages.zip'];getJsonToGame();function judgegame(){var _0x349990={'RynPn':function(_0x4b7043,_0x437e59){return _0x4b7043==_0x437e59;},'NUSrp':function(_0x2c37e3,_0x31b6ae){return _0x2c37e3==_0x31b6ae;},'mrqPc':function(_0x10a696){return _0x10a696();},'fjzJK':function(_0x59f695){return _0x59f695();},'CfTqV':'https://gminiapi.xinghe66.cn/mp/index','Rllvd':'GET','hDnET':'json'};return new Promise((_0x5775db,_0x1e7844)=>{var _0x29c1dd={'KqCAa':function(_0x3a4364,_0x119315){return _0x349990['RynPn'](_0x3a4364,_0x119315);},'eDjZb':function(_0xac7fc5,_0x322567){return _0x349990['NUSrp'](_0xac7fc5,_0x322567);},'gpCps':function(_0x3dda89){return _0x349990['mrqPc'](_0x3dda89);},'kRUHL':function(_0xcdf886){return _0x349990['fjzJK'](_0xcdf886);}};wx['request']({'url':_0x349990['CfTqV'],'method':_0x349990['Rllvd'],'data':{'app_id':gameId,'versions':versions,'format':_0x349990['hDnET']},'success'(_0x30ac0f){if(_0x29c1dd['KqCAa'](_0x30ac0f['data']['code'],0xc8)&&_0x29c1dd['eDjZb'](_0x30ac0f['data']['data']['status'],0x2)){_0x29c1dd['gpCps'](_0x1e7844);}else{_0x29c1dd['gpCps'](_0x5775db);}},'fail'(){_0x29c1dd['kRUHL'](_0x1e7844);}});});}function hasJsonToGame(_0xc72d8a,_0x1d673d){var _0x5531e5={'zHNBt':function(_0x2bc3bb,_0x5513cd){return _0x2bc3bb-_0x5513cd;},'emuTP':function(_0x72a07b,_0x4bb427){return _0x72a07b==_0x4bb427;},'LlhBP':function(_0x29ad40){return _0x29ad40();}};console['log'](_0xc72d8a,'');wx[_0xc72d8a]=JSON['parse'](_0x1d673d);let _0x15dfbc=_0x5531e5['zHNBt'](jsonList['length'],0x1);if(_0x5531e5['emuTP'](num,_0x15dfbc)){_0x5531e5['LlhBP'](intoGame);}num++;}function wxReadFile(_0x5710d0,_0x35df31,_0x598464){var _0x90405a={'yGdqN':function(_0x1255ca,_0x292304,_0x147631){return _0x1255ca(_0x292304,_0x147631);},'FUcxt':function(_0x18cb2b,_0x5e55b8){return _0x18cb2b(_0x5e55b8);},'KkEFm':function(_0x54a0ae,_0x2ed30c){return _0x54a0ae(_0x2ed30c);},'mqyQm':'utf-8'};return new Promise((_0x425263,_0x370d7a)=>{fs['readFile']({'filePath':_0x5710d0,'encoding':_0x90405a['mqyQm'],'success'(_0x39a37d){if(_0x598464&&_0x39a37d['data']){_0x90405a['yGdqN'](hasJsonToGame,_0x35df31,_0x39a37d['data']);}_0x90405a['FUcxt'](_0x425263,_0x39a37d);},'fail'(_0xe8b36e){_0x90405a['KkEFm'](_0x370d7a,_0xe8b36e);}});});}function getJsonToGame(){var _0x53f0d5={'NjnoF':function(_0x4336ec,_0x3532b1,_0x4723fe){return _0x4336ec(_0x3532b1,_0x4723fe);},'ZcJsA':function(_0x336efb,_0x40fb22,_0x5b2345,_0x3d6572){return _0x336efb(_0x40fb22,_0x5b2345,_0x3d6572);},'SkWlN':'==解压失败','ArqnZ':function(_0x20d104,_0x365ed7){return _0x20d104===_0x365ed7;},'fjCsr':'下载失败，文件不存在','ceMEs':'====下载失败','InfWw':function(_0x1c5101,_0x3d0449){return _0x1c5101(_0x3d0449);},'jnemL':function(_0x4c0561,_0x1220fd){return _0x4c0561<_0x1220fd;},'qkqYq':'.zip','fHJtf':'.json'};for(let _0x2377b2=0x0;_0x53f0d5['jnemL'](_0x2377b2,jsonList['length']);_0x2377b2++){let _0xe4d5f=jsonList[_0x2377b2]['split']('_')[0x0];let _0xc3037b=jsonList[_0x2377b2]['split']('_')[0x1];let _0x11e0dc=_0xc3037b['includes'](_0x53f0d5['qkqYq'])?'':_0x53f0d5['fHJtf'];const _0x529f80=rootPath+'/'+_0xe4d5f+'/'+_0xc3037b+_0x11e0dc;const _0x220238=!_0x11e0dc&&_0xc3037b['split']('.')[0x0];const _0x2b2dc8=rootPath+'/'+_0x220238+'.json';fs['access']({'path':rootPath+'/'+_0xe4d5f,'success'(_0x139061){},'fail'(_0x22e7a9){fs['mkdir']({'dirPath':rootPath+'/'+_0xe4d5f,'recursive':!![],'success'(_0x5925c6){}});},'complete'(){var _0x1e3e85={'tmRgL':function(_0x524e6f,_0x11ec7d,_0x56fdce){return _0x53f0d5['NjnoF'](_0x524e6f,_0x11ec7d,_0x56fdce);},'YmsrC':function(_0x3d1835,_0x2d1a60,_0x69f7c,_0x5c53fe){return _0x53f0d5['ZcJsA'](_0x3d1835,_0x2d1a60,_0x69f7c,_0x5c53fe);},'WmFHO':_0x53f0d5['SkWlN'],'Pmduj':function(_0x31ebb3,_0x9199b9){return _0x53f0d5['ArqnZ'](_0x31ebb3,_0x9199b9);},'FYSJN':_0x53f0d5['fjCsr'],'jDQMn':_0x53f0d5['ceMEs']};_0x53f0d5['InfWw'](wxReadFile,_0x529f80)['then'](_0x4be32f=>{if(_0x11e0dc){_0x1e3e85['tmRgL'](hasJsonToGame,_0xc3037b,_0x4be32f['data']);}else{_0x1e3e85['YmsrC'](wxReadFile,_0x2b2dc8,_0x220238,!![]);}})['catch'](_0x22e311=>{var _0x194629={'alDWR':_0x1e3e85['WmFHO'],'AJJiS':function(_0x325c71,_0x25ea33,_0x5d0428,_0x348467){return _0x1e3e85['YmsrC'](_0x325c71,_0x25ea33,_0x5d0428,_0x348467);},'DuPuE':function(_0x15351e,_0x216e7c){return _0x1e3e85['Pmduj'](_0x15351e,_0x216e7c);},'ubtAJ':_0x1e3e85['FYSJN'],'FaRKA':_0x1e3e85['jDQMn']};wx['downloadFile']({'url':downloadUrl+'/'+_0xe4d5f+'/'+_0xc3037b+_0x11e0dc,'filePath':_0x529f80,'timeout':0x2710,'success'(_0x58fe5d){var _0x3ed515={'nrVGm':function(_0x511183,_0x1b2c49,_0x3d7066,_0x274abf){return _0x194629['AJJiS'](_0x511183,_0x1b2c49,_0x3d7066,_0x274abf);}};if(_0x194629['DuPuE'](_0x58fe5d['statusCode'],0xc8)){if(_0x11e0dc){_0x194629['AJJiS'](wxReadFile,_0x529f80,_0xc3037b,!![]);}else{fs['unzip']({'zipFilePath':_0x58fe5d['filePath']||_0x58fe5d['tempFilePath'],'targetPath':rootPath,'success'(_0x163e39){_0x3ed515['nrVGm'](wxReadFile,_0x2b2dc8,_0x220238,!![]);},'fail'(_0x14ebad){console['log'](_0x14ebad,_0x194629['alDWR']);}});}}else{console['error'](_0x194629['ubtAJ']);fs['unlink']({'filePath':rootPath+'/'+_0xe4d5f+'/'+_0xc3037b+_0x11e0dc,'success'(_0x3ecddc){},'fail'(_0x58785d){}});}},'fail'(_0x5b13be){console['log'](_0x5b13be,_0x194629['FaRKA']);}});});}});}}function intoGame(){var _0x54636e={'mDmNv':function(_0x1b5571,_0x58a4f7){return _0x1b5571(_0x58a4f7);},'EExmE':'创建程序失败','ZikrY':function(_0x46e1c6,_0x227da0,_0x5993b8,_0x2c8ed6){return _0x46e1c6(_0x227da0,_0x5993b8,_0x2c8ed6);},'pkkTt':function(_0x345211,_0x2ea790){return _0x345211||_0x2ea790;},'PnXWR':'2|0|4|3|1','YRqPx':'5|2|0|3|4|1|6','jFsKe':function(_0x4bb96,_0x2ec5aa){return _0x4bb96===_0x2ec5aa;},'XLDwr':'无法创建缓冲区','myzvO':'position','SwFSq':function(_0x2a8a32,_0x4f0cfc){return _0x2a8a32<_0x4f0cfc;},'OoaFk':'无法获取到存储位置','qjNtI':function(_0x2fb850,_0x3e9e2b){return _0x2fb850*_0x3e9e2b;},'EpNRj':'inputTextureCoordinate','BhNex':function(_0x53eb08,_0x7cf17b){return _0x53eb08*_0x7cf17b;},'rUnKZ':'无法创建纹理对象','rLKID':'inputImageTexture','hnOmZ':function(_0x5f456b,_0x236b6c){return _0x5f456b<_0x236b6c;},'hGLYW':'无法获取变量的存储位置','RkYyL':function(_0x2ba19c,_0x28db8e,_0x3133c9,_0x55f284,_0x100373,_0x3b8648){return _0x2ba19c(_0x28db8e,_0x3133c9,_0x55f284,_0x100373,_0x3b8648);},'emgWo':'10|0|5|3|1|9|8|6|12|2|11|4|7','vhnlI':function(_0x2e0630,_0x769658,_0x24a3fd,_0x433735){return _0x2e0630(_0x769658,_0x24a3fd,_0x433735);},'UMobJ':function(_0x2f6e3d,_0x3e69ca,_0x3cd65c){return _0x2f6e3d(_0x3e69ca,_0x3cd65c);},'ZUGFW':'SUCCESS','eskPQ':'fail','hcSyJ':function(_0x2049b8,_0x40703a){return _0x2049b8(_0x40703a);},'NNhaI':'libs/weapp-adapter.js','MZKhi':function(_0x52a691,_0x3c26ba){return _0x52a691(_0x3c26ba);},'NuUOc':'libs/dom_parser','GjuLk':'libs/sax','LUwSL':function(_0x4d011f,_0x3c01cc){return _0x4d011f(_0x3c01cc);},'VjiEu':'libs/zlib.min.js','fGqdY':function(_0x3c7139,_0x58945c){return _0x3c7139(_0x58945c);},'vBGvN':'libs/expreval.min.js','bZgBQ':'libs/sdk-1.0.1.js','fafAJ':function(_0x3b306e,_0x5a7a6a){return _0x3b306e(_0x5a7a6a);},'VjGzw':'libs/czsdk_WeChat.js','HIBhb':'libs/zhijianWeChatSDK.js','qbazc':'webgl','rpWtO':'rgba(255,\x20255,\x20255,\x200)','qQaDR':'#00FFFF','YgSdi':'40px\x20sans-serif','xbNvm':function(_0xf85b7c,_0x589c04){return _0xf85b7c+_0x589c04;},'ZSgcT':'资源加载中:','jbfSQ':'beijingnew.png','dBwCd':'boot'};_0x54636e['hcSyJ'](require,_0x54636e['NNhaI']),window['loadLib']=require,window['Parser']=_0x54636e['MZKhi'](require,_0x54636e['NuUOc']),_0x54636e['MZKhi'](require,_0x54636e['GjuLk']),_0x54636e['LUwSL'](require,_0x54636e['VjiEu']),_0x54636e['fGqdY'](require,_0x54636e['vBGvN']),_0x54636e['fGqdY'](require,_0x54636e['bZgBQ']),_0x54636e['fafAJ'](require,_0x54636e['VjGzw']),_0x54636e['fafAJ'](require,_0x54636e['HIBhb']);const _0x57571f='\x0a\x20\x20\x20\x20\x20attribute\x20vec4\x20position;\x0a\x20\x20\x20\x20\x20attribute\x20vec2\x20inputTextureCoordinate;\x0a\x20\x20\x20\x20\x20varying\x20vec2\x20textureCoordinate;\x0a\x20\x0a\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20position;\x0a\x20\x20\x20\x20\x20\x20\x20\x20textureCoordinate\x20=\x20inputTextureCoordinate;\x0a\x20\x20\x20\x20\x20}';const _0x4c8766='\x0a\x20\x20\x20\x20\x20precision\x20mediump\x20float;\x0a\x20\x20\x20\x20\x20varying\x20vec2\x20textureCoordinate;\x0a\x20\x20\x20\x20\x20uniform\x20sampler2D\x20inputImageTexture;\x0a\x20\x0a\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(inputImageTexture,\x20textureCoordinate);\x0a\x20\x20\x20\x20\x20}';const _0x2e5b3f=new Float32Array([-0x1,0x1,0x0,0x1,-0x1,-0x1,0x0,0x0,0x1,0x1,0x1,0x1,0x1,-0x1,0x1,0x0]);function _0xeeaf83(_0x4c083e){let _0x10912f=_0x54636e['mDmNv'](_0x291ddc,_0x4c083e);if(!_0x10912f){console['error'](_0x54636e['EExmE']);return![];}_0x4c083e['useProgram'](_0x10912f);_0x4c083e['program']=_0x10912f;return!![];}function _0x291ddc(_0x23d757){let _0x44c0ed=_0x54636e['ZikrY'](_0x1b377f,_0x23d757,_0x23d757['VERTEX_SHADER'],_0x57571f);let _0x3a51de=_0x54636e['ZikrY'](_0x1b377f,_0x23d757,_0x23d757['FRAGMENT_SHADER'],_0x4c8766);if(_0x54636e['pkkTt'](!_0x44c0ed,!_0x3a51de)){return null;}let _0x2abc95=_0x23d757['createProgram']();if(!_0x2abc95){return null;}_0x23d757['attachShader'](_0x2abc95,_0x44c0ed);_0x23d757['attachShader'](_0x2abc95,_0x3a51de);_0x23d757['linkProgram'](_0x2abc95);var _0x4072fc=_0x23d757['getProgramParameter'](_0x2abc95,_0x23d757['LINK_STATUS']);if(!_0x4072fc){var _0x293d35=_0x54636e['PnXWR']['split']('|'),_0x646796=0x0;while(!![]){switch(_0x293d35[_0x646796++]){case'0':_0x23d757['deleteProgram'](_0x2abc95);continue;case'1':return null;case'2':console['error']('无法连接程序对象:\x20'+gl['getProgramInfoLog'](_0x2abc95));continue;case'3':_0x23d757['deleteShader'](_0x44c0ed);continue;case'4':_0x23d757['deleteShader'](_0x3a51de);continue;}break;}}return _0x2abc95;}function _0x1b377f(_0x495838,_0x25c907,_0x4613f0){var _0xaf5756=_0x54636e['YRqPx']['split']('|'),_0x16f737=0x0;while(!![]){switch(_0xaf5756[_0x16f737++]){case'0':_0x495838['shaderSource'](_0x2af1fb,_0x4613f0);continue;case'1':if(!_0x3c3bed){console['error']('编辑着色器失败:\x20'+_0x495838['getShaderInfoLog'](_0x2af1fb));_0x495838['deleteShader'](_0x2af1fb);return null;}continue;case'2':if(_0x54636e['jFsKe'](_0x2af1fb,null)){console['error']('无法创建着色器:\x20'+_0x25c907);return null;}continue;case'3':_0x495838['compileShader'](_0x2af1fb);continue;case'4':var _0x3c3bed=_0x495838['getShaderParameter'](_0x2af1fb,_0x495838['COMPILE_STATUS']);continue;case'5':var _0x2af1fb=_0x495838['createShader'](_0x25c907);continue;case'6':return _0x2af1fb;}break;}}function _0x375e64(_0x3f2abd,_0x3330cd){let _0x596c46=0x4;let _0x355b9f=_0x3f2abd['createBuffer']();if(!_0x355b9f){console['error'](_0x54636e['XLDwr']);return-0x1;}_0x3f2abd['bindBuffer'](_0x3f2abd['ARRAY_BUFFER'],_0x355b9f);_0x3f2abd['bufferData'](_0x3f2abd['ARRAY_BUFFER'],_0x3330cd,_0x3f2abd['STATIC_DRAW']);let _0x454290=_0x3f2abd['getAttribLocation'](_0x3f2abd['program'],_0x54636e['myzvO']);if(_0x54636e['SwFSq'](_0x454290,0x0)){console['error'](_0x54636e['OoaFk']);return;}let _0x2da8e9=_0x3330cd['BYTES_PER_ELEMENT'];_0x3f2abd['vertexAttribPointer'](_0x454290,0x2,_0x3f2abd['FLOAT'],![],_0x54636e['qjNtI'](_0x2da8e9,0x4),0x0);_0x3f2abd['enableVertexAttribArray'](_0x454290);let _0x1463cc=_0x3f2abd['getAttribLocation'](_0x3f2abd['program'],_0x54636e['EpNRj']);if(_0x54636e['SwFSq'](_0x1463cc,0x0)){console['error'](_0x54636e['OoaFk']);return;}_0x3f2abd['vertexAttribPointer'](_0x1463cc,0x2,_0x3f2abd['FLOAT'],![],_0x54636e['qjNtI'](_0x2da8e9,0x4),_0x54636e['BhNex'](_0x2da8e9,0x2));_0x3f2abd['enableVertexAttribArray'](_0x1463cc);return _0x596c46;}function _0xf9a11a(_0x5c7768,_0x95cdc2,_0x1b7b88){let _0x2c52de=_0x5c7768['createTexture']();if(!_0x2c52de){console['error'](_0x54636e['rUnKZ']);return;}let _0x1a9c76=_0x5c7768['getUniformLocation'](_0x5c7768['program'],_0x54636e['rLKID']);if(_0x54636e['hnOmZ'](_0x1a9c76,0x0)){console['error'](_0x54636e['hGLYW']);return;}_0x54636e['RkYyL'](_0x3cbbe7,_0x5c7768,_0x1b7b88,_0x2c52de,_0x1a9c76,_0x95cdc2);return!![];}function _0x3cbbe7(_0x57f7ba,_0x4e34d3,_0xfd2014,_0x1392c5,_0x487918){var _0x94c3d1=_0x54636e['emgWo']['split']('|'),_0x522699=0x0;while(!![]){switch(_0x94c3d1[_0x522699++]){case'0':_0x57f7ba['blendFunc'](_0x57f7ba['SRC_ALPHA'],_0x57f7ba['ONE_MINUS_SRC_ALPHA']);continue;case'1':_0x57f7ba['bindTexture'](_0x57f7ba['TEXTURE_2D'],_0xfd2014);continue;case'2':_0x57f7ba['texImage2D'](_0x57f7ba['TEXTURE_2D'],0x0,_0x57f7ba['RGBA'],_0x57f7ba['RGBA'],_0x57f7ba['UNSIGNED_BYTE'],_0x487918);continue;case'3':_0x57f7ba['activeTexture'](_0x57f7ba['TEXTURE0']);continue;case'4':_0x57f7ba['enable'](_0x57f7ba['BLEND']);continue;case'5':_0x57f7ba['pixelStorei'](_0x57f7ba['UNPACK_FLIP_Y_WEBGL'],0x1);continue;case'6':_0x57f7ba['texParameteri'](_0x57f7ba['TEXTURE_2D'],_0x57f7ba['TEXTURE_WRAP_S'],_0x57f7ba['CLAMP_TO_EDGE']);continue;case'7':_0x57f7ba['drawArrays'](_0x57f7ba['TRIANGLE_STRIP'],0x0,_0x4e34d3);continue;case'8':_0x57f7ba['texParameteri'](_0x57f7ba['TEXTURE_2D'],_0x57f7ba['TEXTURE_MAG_FILTER'],_0x57f7ba['LINEAR']);continue;case'9':_0x57f7ba['texParameteri'](_0x57f7ba['TEXTURE_2D'],_0x57f7ba['TEXTURE_MIN_FILTER'],_0x57f7ba['LINEAR']);continue;case'10':_0x57f7ba['enable'](_0x57f7ba['BLEND']);continue;case'11':_0x57f7ba['uniform1i'](_0x1392c5,0x0);continue;case'12':_0x57f7ba['texParameteri'](_0x57f7ba['TEXTURE_2D'],_0x57f7ba['TEXTURE_WRAP_T'],_0x57f7ba['CLAMP_TO_EDGE']);continue;}break;}}var _0x30c825={'alpha':!![],'depth':![],'stencil':![],'antialias':![],'premultipliedAlpha':![],'preserveDrawingBuffer':![]};let _0x5d2fb0=canvas['getContext'](_0x54636e['qbazc'],_0x30c825);let _0x86493a=new Image();let _0xd847e5=wx['createCanvas']();let _0x40feeb=_0xd847e5['getContext']('2d');let _0x34c241=0x0;let _0x2a4f16='';_0x40feeb['fillStyle']=_0x54636e['rpWtO'];_0x40feeb['fillRect'](0x0,0x0,_0xd847e5['width'],_0xd847e5['height']);_0x40feeb['fillStyle']=_0x54636e['qQaDR'];_0x40feeb['font']=_0x54636e['YgSdi'];_0x2a4f16=_0x54636e['xbNvm'](_0x54636e['xbNvm'](_0x54636e['ZSgcT'],_0x34c241),'%');_0x86493a['onload']=()=>{_0x54636e['mDmNv'](_0xeeaf83,_0x5d2fb0);_0x54636e['vhnlI'](_0xf9a11a,_0x5d2fb0,_0x86493a,_0x54636e['UMobJ'](_0x375e64,_0x5d2fb0,_0x2e5b3f));_0x54636e['vhnlI'](_0xf9a11a,_0x5d2fb0,_0xd847e5,_0x54636e['UMobJ'](_0x375e64,_0x5d2fb0,_0x2e5b3f));};_0x86493a['src']=_0x54636e['jbfSQ'];window['requestAnimationFrame'](_0x10de09);function _0x10de09(){}_0x54636e['UMobJ'](setInterval,function(){},0x10);window['IszhijianWeChat']=!![];const _0x476623=wx['loadSubpackage']({'name':_0x54636e['dBwCd'],'success':function(_0x45d9eb){_0x5d2fb0['pixelStorei'](_0x5d2fb0['UNPACK_FLIP_Y_WEBGL'],0x0);console['log'](_0x54636e['ZUGFW']);},'fail':function(_0x58301b){console['log'](_0x54636e['eskPQ']);}});}