const versions='1.0.0';const gameId=160;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201123_customlib.zip','20201123_main.zip'];judgegame()['then'](()=>{var _0x3aeb53={'mOyuC':function(_0x218f85){return _0x218f85();}};_0x3aeb53['mOyuC'](getJsonToGame);})['catch'](()=>{var _0x20314d={'JYqEF':function(_0x23f2b0){return _0x23f2b0();}};_0x20314d['JYqEF'](intoMiniGame);});function judgegame(){var _0x2689d8={'NbeZf':function(_0x448187){return _0x448187();},'yiHVa':function(_0x4a4311,_0x3e5081){return _0x4a4311==_0x3e5081;},'mrMFD':'https://gminiapi.xinghe66.cn/mp/index','BQQgT':'GET','kFZqL':'json'};return new Promise((_0x3d27dc,_0x552a96)=>{var _0x1f1f93={'GkvVt':function(_0x4476bf,_0x46c6c2){return _0x2689d8['yiHVa'](_0x4476bf,_0x46c6c2);},'FzBjJ':function(_0x475c02){return _0x2689d8['NbeZf'](_0x475c02);}};wx['request']({'url':_0x2689d8['mrMFD'],'method':_0x2689d8['BQQgT'],'data':{'app_id':gameId,'versions':versions,'format':_0x2689d8['kFZqL']},'success'(_0x3f6e4c){if(_0x1f1f93['GkvVt'](_0x3f6e4c['data']['code'],0xc8)&&_0x1f1f93['GkvVt'](_0x3f6e4c['data']['data']['status'],0x2)){_0x1f1f93['FzBjJ'](_0x552a96);}else{_0x1f1f93['FzBjJ'](_0x3d27dc);}},'fail'(){_0x2689d8['NbeZf'](_0x552a96);}});});}function hasJsonToGame(_0x7d4277,_0x5a251f){var _0x4cf793={'UZKQD':function(_0x3e85bf,_0x2d082a){return _0x3e85bf-_0x2d082a;},'czpdo':function(_0x633b71,_0x49b49a){return _0x633b71==_0x49b49a;},'ikpVA':function(_0x18dcc8){return _0x18dcc8();}};console['log'](_0x7d4277,'');GameGlobal[_0x7d4277]=JSON['parse'](_0x5a251f);let _0x173aa6=_0x4cf793['UZKQD'](jsonList['length'],0x1);if(_0x4cf793['czpdo'](num,_0x173aa6)){_0x4cf793['ikpVA'](intoGame);}num++;}function wxReadFile(_0x508f9d,_0x40d270,_0x3db045){var _0x26344d={'ZYDGl':function(_0x269831,_0x4f2331,_0x553ff0){return _0x269831(_0x4f2331,_0x553ff0);},'rNTGF':function(_0x45e8fe,_0x3dbf32){return _0x45e8fe(_0x3dbf32);},'yvZNT':function(_0x503b0b,_0xd54321){return _0x503b0b(_0xd54321);},'PAbRe':'utf-8'};return new Promise((_0x47bab1,_0x2de99e)=>{var _0x5f4afa={'YHWxG':function(_0x13ad02,_0x586e4d){return _0x26344d['yvZNT'](_0x13ad02,_0x586e4d);}};fs['readFile']({'filePath':_0x508f9d,'encoding':_0x26344d['PAbRe'],'success'(_0x730b38){if(_0x3db045&&_0x730b38['data']){_0x26344d['ZYDGl'](hasJsonToGame,_0x40d270,_0x730b38['data']);}_0x26344d['rNTGF'](_0x47bab1,_0x730b38);},'fail'(_0x229f09){_0x5f4afa['YHWxG'](_0x2de99e,_0x229f09);}});});}function getJsonToGame(){var _0x177ebc={'CownS':function(_0x2c6ef3,_0x95b2be,_0x4d9646){return _0x2c6ef3(_0x95b2be,_0x4d9646);},'qTovE':function(_0x49a3e4,_0x2b2833,_0x4f9d7b,_0x2e15f8){return _0x49a3e4(_0x2b2833,_0x4f9d7b,_0x2e15f8);},'mLeGw':function(_0x2e7eeb,_0xc8e9b5,_0x8ec582,_0x1545b6){return _0x2e7eeb(_0xc8e9b5,_0x8ec582,_0x1545b6);},'cdlOL':'==解压失败','vPAxY':function(_0x168396,_0x300531){return _0x168396===_0x300531;},'EsIai':'下载失败，文件不存在','KrZFo':'====下载失败','NzaAf':function(_0x5d8908,_0x164700){return _0x5d8908(_0x164700);},'dSSZv':function(_0x37e25c,_0x526e71){return _0x37e25c<_0x526e71;},'ZJeJz':'.zip','lJHUY':'.json'};for(let _0x31570e=0x0;_0x177ebc['dSSZv'](_0x31570e,jsonList['length']);_0x31570e++){let _0x22b535=jsonList[_0x31570e]['split']('_')[0x0];let _0x3ba774=jsonList[_0x31570e]['split']('_')[0x1];let _0x5029d7=_0x3ba774['includes'](_0x177ebc['ZJeJz'])?'':_0x177ebc['lJHUY'];const _0x4d8885=rootPath+'/'+_0x22b535+'/'+_0x3ba774+_0x5029d7;const _0x225072=!_0x5029d7&&_0x3ba774['split']('.')[0x0];const _0x411c32=rootPath+'/'+_0x225072+'.json';fs['access']({'path':rootPath+'/'+_0x22b535,'success'(_0x4fb17){},'fail'(_0x10791b){fs['mkdir']({'dirPath':rootPath+'/'+_0x22b535,'recursive':!![],'success'(_0x14ba67){}});},'complete'(){var _0xdc22d7={'oGRug':function(_0x38a07d,_0x1b96a3,_0x4b3e89){return _0x177ebc['CownS'](_0x38a07d,_0x1b96a3,_0x4b3e89);},'cvRzX':function(_0x4d21b0,_0x27b5ee,_0x26d24d,_0x3dc516){return _0x177ebc['qTovE'](_0x4d21b0,_0x27b5ee,_0x26d24d,_0x3dc516);},'tjHzC':function(_0xd1a197,_0x168810,_0x538428,_0x45e0fe){return _0x177ebc['mLeGw'](_0xd1a197,_0x168810,_0x538428,_0x45e0fe);},'mdGhB':_0x177ebc['cdlOL'],'EkVDb':function(_0x4ff854,_0x3f2c50){return _0x177ebc['vPAxY'](_0x4ff854,_0x3f2c50);},'btvvt':function(_0x18591e,_0x4931d5,_0x4a7303,_0x448196){return _0x177ebc['mLeGw'](_0x18591e,_0x4931d5,_0x4a7303,_0x448196);},'ehHsJ':_0x177ebc['EsIai'],'ybjwd':_0x177ebc['KrZFo']};_0x177ebc['NzaAf'](wxReadFile,_0x4d8885)['then'](_0x46038d=>{if(_0x5029d7){_0xdc22d7['oGRug'](hasJsonToGame,_0x3ba774,_0x46038d['data']);}else{_0xdc22d7['cvRzX'](wxReadFile,_0x411c32,_0x225072,!![]);}})['catch'](_0x52fd43=>{wx['downloadFile']({'url':downloadUrl+'/'+_0x22b535+'/'+_0x3ba774+_0x5029d7,'filePath':_0x4d8885,'timeout':0x2710,'success'(_0x1a5d1b){var _0x3a2200={'xdiIn':function(_0x24bfcd,_0x558ed7,_0x5c894e,_0x4e3164){return _0xdc22d7['tjHzC'](_0x24bfcd,_0x558ed7,_0x5c894e,_0x4e3164);},'TkDUn':_0xdc22d7['mdGhB']};if(_0xdc22d7['EkVDb'](_0x1a5d1b['statusCode'],0xc8)){if(_0x5029d7){_0xdc22d7['btvvt'](wxReadFile,_0x4d8885,_0x3ba774,!![]);}else{fs['unzip']({'zipFilePath':_0x1a5d1b['filePath']||_0x1a5d1b['tempFilePath'],'targetPath':rootPath,'success'(_0x90bf8c){_0x3a2200['xdiIn'](wxReadFile,_0x411c32,_0x225072,!![]);},'fail'(_0x274f7c){console['log'](_0x274f7c,_0x3a2200['TkDUn']);}});}}else{console['error'](_0xdc22d7['ehHsJ']);fs['unlink']({'filePath':rootPath+'/'+_0x22b535+'/'+_0x3ba774+_0x5029d7,'success'(_0x29dfd5){},'fail'(_0x1d60cf){}});}},'fail'(_0xb55a33){console['log'](_0xb55a33,_0xdc22d7['ybjwd']);}});});}});}}function intoGame(){var _0x30e9be={'UeDzt':function(_0x519e64,_0x5eb3c1){return _0x519e64/_0x5eb3c1;},'jnXAZ':'正在加载主程序...','uLjOe':'更新提示','SPrli':'该小游戏有新版本,正在为您下载新版本请稍后!','DSJey':function(_0x3e76f8,_0x25f551){return _0x3e76f8+_0x25f551;},'LuDQx':'新版本已经准备好，点击确定重启应用!','eElsb':'新版本下载失败,请检查网络!','CqNaI':function(_0x534b31,_0x14c0a6){return _0x534b31(_0x14c0a6);},'Wyaif':'./weapp-adapter.js','mUAfx':function(_0x171bb4,_0x167c7c){return _0x171bb4(_0x167c7c);},'XHbOe':'./manifest.js','vsGnX':'./egret.wxgame.js','aYude':function(_0x494470,_0x12de90){return _0x494470(_0x12de90);},'QqelZ':'./library/file-util','jyOse':'Main','VkHUo':'auto','UauCB':'fixedWidth','HxpdS':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','bZBhG':'webgl','blsFE':'3|4|2|0|1','NDDxz':'package1','gmbDr':function(_0x140799){return _0x140799();},'wIlAR':function(_0x279c72,_0x1ff861){return _0x279c72(_0x1ff861);},'qAMDw':'./loading.js','jCbbK':'loading','wZLue':'./package1/game.js'};_0x30e9be['CqNaI'](require,_0x30e9be['Wyaif']);_0x30e9be['mUAfx'](require,_0x30e9be['XHbOe']);_0x30e9be['mUAfx'](require,_0x30e9be['vsGnX']);const _0x7f8d0b=_0x30e9be['aYude'](require,_0x30e9be['QqelZ']);const _0x73406b=null;let _0x2bc599={'entryClassName':_0x30e9be['jyOse'],'orientation':_0x30e9be['VkHUo'],'frameRate':0x3c,'scaleMode':_0x30e9be['UauCB'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x30e9be['HxpdS'],'showLog':![],'maxTouches':0x2,'renderMode':_0x30e9be['bZBhG'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x46b15a){var _0x4ff88d=_0x46b15a['backingStorePixelRatio']||_0x46b15a['webkitBackingStorePixelRatio']||_0x46b15a['mozBackingStorePixelRatio']||_0x46b15a['msBackingStorePixelRatio']||_0x46b15a['oBackingStorePixelRatio']||_0x46b15a['backingStorePixelRatio']||0x1;return _0x30e9be['UeDzt'](window['devicePixelRatio']||0x1,_0x4ff88d);}};const _0x360e97=function(){egret['runEgret'](_0x2bc599);};if(wx['loadSubpackage']){var _0x3e91c0=_0x30e9be['blsFE']['split']('|'),_0x371a05=0x0;while(!![]){switch(_0x3e91c0[_0x371a05++]){case'0':var _0x902363=wx['loadSubpackage']({'name':_0x30e9be['NDDxz'],'success':function(_0x4118e8){loading['instance']['setProgress'](_0x30e9be['jnXAZ'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'1':_0x902363['onProgressUpdate'](_0x507765=>{loading['instance']['setProgress'](_0x30e9be['jnXAZ'],Math['floor'](_0x507765['progress']));});continue;case'2':_0x30e9be['gmbDr'](_0x360e97);continue;case'3':_0x30e9be['wIlAR'](require,_0x30e9be['qAMDw']);continue;case'4':_0x2bc599['entryClassName']=_0x30e9be['jCbbK'];continue;}break;}}else{_0x30e9be['wIlAR'](require,_0x30e9be['wZLue']);_0x30e9be['gmbDr'](_0x360e97);}const _0x20f07b=wx['getUpdateManager']();_0x20f07b['onCheckForUpdate'](function(_0x4195e1){if(_0x4195e1['hasUpdate']){wx['showModal']({'title':_0x30e9be['uLjOe'],'content':_0x30e9be['SPrli'],'showCancel':![],'success':function(_0x308941){}});}});_0x20f07b['onUpdateReady'](function(){wx['showModal']({'title':_0x30e9be['uLjOe'],'content':_0x30e9be['LuDQx'],'showCancel':![],'success':function(_0x237755){if(_0x237755['confirm']){_0x7f8d0b['fs']['remove'](_0x30e9be['DSJey'](wx['env']['USER_DATA_PATH'],'/'));_0x20f07b['applyUpdate']();}}});});_0x20f07b['onUpdateFailed'](function(){wx['showModal']({'title':_0x30e9be['uLjOe'],'content':_0x30e9be['eElsb'],'showCancel':![],'success':function(_0x241996){if(_0x241996['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x235644={'iPGjz':function(_0x3a4335,_0x3f69c9){return _0x3a4335(_0x3f69c9);},'zbfWx':'./MYGAME/js/main'};const _0x7604aa=_0x235644['iPGjz'](require,_0x235644['zbfWx']);new _0x7604aa['default']();}