const versions='1.0.0';const gameId=0x23;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj35';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201022_customlib.zip','20201022_main.zip'];judgegame()['then'](()=>{var _0x5594e9={'XKRug':function(_0x5bb479){return _0x5bb479();}};_0x5594e9['XKRug'](getJsonToGame);})['catch'](()=>{var _0x3ea1fe={'YebYs':function(_0x6ee2c5){return _0x6ee2c5();}};_0x3ea1fe['YebYs'](intoMiniGame);});function judgegame(){var _0x26e4eb={'bptau':function(_0x2b424f){return _0x2b424f();},'LaSkc':function(_0x55f522,_0x53d5b0){return _0x55f522==_0x53d5b0;},'EzZcM':'https://gminiapi.xinghe66.cn/mp/index','ugSYH':'GET','EmXvq':'json'};return new Promise((_0x3bb948,_0x470683)=>{var _0x100b66={'VFXyd':function(_0x3dc66c,_0x2238a5){return _0x26e4eb['LaSkc'](_0x3dc66c,_0x2238a5);},'mHQbK':function(_0x1240a2){return _0x26e4eb['bptau'](_0x1240a2);}};wx['request']({'url':_0x26e4eb['EzZcM'],'method':_0x26e4eb['ugSYH'],'data':{'app_id':gameId,'versions':versions,'format':_0x26e4eb['EmXvq']},'success'(_0x3e9558){if(_0x100b66['VFXyd'](_0x3e9558['data']['code'],0xc8)&&_0x100b66['VFXyd'](_0x3e9558['data']['data']['status'],0x2)){_0x100b66['mHQbK'](_0x470683);}else{_0x100b66['mHQbK'](_0x3bb948);}},'fail'(){_0x26e4eb['bptau'](_0x470683);}});});}function hasJsonToGame(_0x1b1cda,_0x28e8ea){var _0x463d1c={'pFQso':function(_0x4b1cc2,_0x2b14e9){return _0x4b1cc2-_0x2b14e9;},'UAeDI':function(_0x53aa19,_0x824594){return _0x53aa19==_0x824594;},'TLyDG':function(_0xd38fe){return _0xd38fe();}};console['log'](_0x1b1cda,'');GameGlobal[_0x1b1cda]=JSON['parse'](_0x28e8ea);let _0x523605=_0x463d1c['pFQso'](jsonList['length'],0x1);if(_0x463d1c['UAeDI'](num,_0x523605)){_0x463d1c['TLyDG'](intoGame);}num++;}function wxReadFile(_0x448b52,_0x147d44,_0x2720b3){var _0x11bac0={'LsDDc':function(_0x5ccf84,_0x9ea47a){return _0x5ccf84(_0x9ea47a);},'vevzB':function(_0x8f4c08,_0x3c51e2,_0x5e5b8d){return _0x8f4c08(_0x3c51e2,_0x5e5b8d);},'GAhdf':'utf-8'};return new Promise((_0x5b8fa5,_0x5019ad)=>{var _0x198b2a={'FxHPT':function(_0x63704b,_0x2f459a,_0x79d7d){return _0x11bac0['vevzB'](_0x63704b,_0x2f459a,_0x79d7d);},'ZZQBm':function(_0x1bdbfa,_0x2c01d4){return _0x11bac0['LsDDc'](_0x1bdbfa,_0x2c01d4);}};fs['readFile']({'filePath':_0x448b52,'encoding':_0x11bac0['GAhdf'],'success'(_0x450bd6){if(_0x2720b3&&_0x450bd6['data']){_0x198b2a['FxHPT'](hasJsonToGame,_0x147d44,_0x450bd6['data']);}_0x198b2a['ZZQBm'](_0x5b8fa5,_0x450bd6);},'fail'(_0x32a1fe){_0x11bac0['LsDDc'](_0x5019ad,_0x32a1fe);}});});}function getJsonToGame(){var _0x562517={'jKdbQ':function(_0x38f7cf,_0x2a91af,_0x19a5a8,_0x155dc1){return _0x38f7cf(_0x2a91af,_0x19a5a8,_0x155dc1);},'XuyTm':'====下载失败','VWTHn':function(_0x549889,_0x173d21,_0x2c47ac){return _0x549889(_0x173d21,_0x2c47ac);},'HGVeI':function(_0x3b9695,_0x193d8d,_0x187e72,_0x65aef5){return _0x3b9695(_0x193d8d,_0x187e72,_0x65aef5);},'HhTDv':'==解压失败','QbtwH':function(_0x2a517e,_0x3fca57){return _0x2a517e===_0x3fca57;},'vhLNI':'下载失败，文件不存在','IoVWe':function(_0x27b0c8,_0xc05ed5){return _0x27b0c8(_0xc05ed5);},'mgccN':function(_0x35faf4,_0x271ec9){return _0x35faf4<_0x271ec9;},'adRGV':'.zip','zWYQG':'.json'};for(let _0x18ebe9=0x0;_0x562517['mgccN'](_0x18ebe9,jsonList['length']);_0x18ebe9++){let _0x43f689=jsonList[_0x18ebe9]['split']('_')[0x0];let _0x14a778=jsonList[_0x18ebe9]['split']('_')[0x1];let _0x45754a=_0x14a778['includes'](_0x562517['adRGV'])?'':_0x562517['zWYQG'];const _0xadc3e7=rootPath+'/'+_0x43f689+'/'+_0x14a778+_0x45754a;const _0x2dde66=!_0x45754a&&_0x14a778['split']('.')[0x0];const _0x1e2832=rootPath+'/'+_0x2dde66+'.json';fs['access']({'path':rootPath+'/'+_0x43f689,'success'(_0x231f0c){},'fail'(_0x5c3672){fs['mkdir']({'dirPath':rootPath+'/'+_0x43f689,'recursive':!![],'success'(_0x4d99ba){}});},'complete'(){var _0x147790={'aTAFS':function(_0x10f248,_0x15c00b,_0x5ae0c7){return _0x562517['VWTHn'](_0x10f248,_0x15c00b,_0x5ae0c7);},'uuMzQ':function(_0x41668f,_0x26bc73,_0x2fe851,_0x4c5214){return _0x562517['HGVeI'](_0x41668f,_0x26bc73,_0x2fe851,_0x4c5214);},'qlYVp':_0x562517['HhTDv'],'qefwU':function(_0x1b2c7b,_0x1148b7){return _0x562517['QbtwH'](_0x1b2c7b,_0x1148b7);},'pkLSV':_0x562517['vhLNI']};_0x562517['IoVWe'](wxReadFile,_0xadc3e7)['then'](_0x3dbc4d=>{if(_0x45754a){_0x147790['aTAFS'](hasJsonToGame,_0x14a778,_0x3dbc4d['data']);}else{_0x147790['uuMzQ'](wxReadFile,_0x1e2832,_0x2dde66,!![]);}})['catch'](_0x33faae=>{var _0x3be0c0={'tjPVW':function(_0x32b32c,_0x54a437,_0x4d0f39,_0x42f54b){return _0x562517['jKdbQ'](_0x32b32c,_0x54a437,_0x4d0f39,_0x42f54b);},'JXFcv':_0x562517['XuyTm']};wx['downloadFile']({'url':downloadUrl+'/'+_0x43f689+'/'+_0x14a778+_0x45754a,'filePath':_0xadc3e7,'timeout':0x2710,'success'(_0x17a501){var _0x2d1a19={'fOtaS':_0x147790['qlYVp']};if(_0x147790['qefwU'](_0x17a501['statusCode'],0xc8)){if(_0x45754a){_0x147790['uuMzQ'](wxReadFile,_0xadc3e7,_0x14a778,!![]);}else{fs['unzip']({'zipFilePath':_0x17a501['filePath']||_0x17a501['tempFilePath'],'targetPath':rootPath,'success'(_0x358f84){_0x3be0c0['tjPVW'](wxReadFile,_0x1e2832,_0x2dde66,!![]);},'fail'(_0x20f9f5){console['log'](_0x20f9f5,_0x2d1a19['fOtaS']);}});}}else{console['error'](_0x147790['pkLSV']);fs['unlink']({'filePath':rootPath+'/'+_0x43f689+'/'+_0x14a778+_0x45754a,'success'(_0xd74628){},'fail'(_0x254c31){}});}},'fail'(_0x1f9dd9){console['log'](_0x1f9dd9,_0x3be0c0['JXFcv']);}});});}});}}function intoGame(){var _0x1552a7={'uXjZi':function(_0x41f5d4,_0x5028a0){return _0x41f5d4/_0x5028a0;},'KtRRh':'正在加载主程序...','LoPEB':'更新提示','roGHq':'该小游戏有新版本,正在为您下载新版本请稍后!','uYcnf':function(_0x3e7710,_0x25b122){return _0x3e7710+_0x25b122;},'lttsE':'新版本已经准备好，点击确定重启应用!','epIHx':'新版本下载失败,请检查网络!','ZJCYk':function(_0x425f44,_0x4ef54e){return _0x425f44(_0x4ef54e);},'gDbBH':'./weapp-adapter.js','jxzdQ':function(_0x17518c,_0x18353b){return _0x17518c(_0x18353b);},'gQVmP':'./manifest.js','yBwKN':'./egret.wxgame.js','bXESi':'./library/file-util','UWKZq':'Main','nibYa':'auto','UBuPr':'fixedWidth','sYHfx':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','ixKli':'webgl','PvdJF':'4|0|3|2|1','TElNY':'loading','jJnvc':'package1','mMCQV':function(_0x329964){return _0x329964();},'XwXwv':'./loading.js','tBaPS':'./package1/game.js'};_0x1552a7['ZJCYk'](require,_0x1552a7['gDbBH']);_0x1552a7['jxzdQ'](require,_0x1552a7['gQVmP']);_0x1552a7['jxzdQ'](require,_0x1552a7['yBwKN']);const _0x43f3fd=_0x1552a7['jxzdQ'](require,_0x1552a7['bXESi']);const _0x4cfc2e=null;let _0x4f26fa={'entryClassName':_0x1552a7['UWKZq'],'orientation':_0x1552a7['nibYa'],'frameRate':0x3c,'scaleMode':_0x1552a7['UBuPr'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x1552a7['sYHfx'],'showLog':![],'maxTouches':0x2,'renderMode':_0x1552a7['ixKli'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x3fa44d){var _0x19916c=_0x3fa44d['backingStorePixelRatio']||_0x3fa44d['webkitBackingStorePixelRatio']||_0x3fa44d['mozBackingStorePixelRatio']||_0x3fa44d['msBackingStorePixelRatio']||_0x3fa44d['oBackingStorePixelRatio']||_0x3fa44d['backingStorePixelRatio']||0x1;return _0x1552a7['uXjZi'](window['devicePixelRatio']||0x1,_0x19916c);}};const _0xeeec0f=function(){egret['runEgret'](_0x4f26fa);};if(wx['loadSubpackage']){var _0x2fd630=_0x1552a7['PvdJF']['split']('|'),_0x4424b1=0x0;while(!![]){switch(_0x2fd630[_0x4424b1++]){case'0':_0x4f26fa['entryClassName']=_0x1552a7['TElNY'];continue;case'1':_0x4fc541['onProgressUpdate'](_0x154bc5=>{loading['instance']['setProgress'](_0x1552a7['KtRRh'],Math['floor'](_0x154bc5['progress']));});continue;case'2':var _0x4fc541=wx['loadSubpackage']({'name':_0x1552a7['jJnvc'],'success':function(_0x1acbdd){loading['instance']['setProgress'](_0x1552a7['KtRRh'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'3':_0x1552a7['mMCQV'](_0xeeec0f);continue;case'4':_0x1552a7['jxzdQ'](require,_0x1552a7['XwXwv']);continue;}break;}}else{_0x1552a7['jxzdQ'](require,_0x1552a7['tBaPS']);_0x1552a7['mMCQV'](_0xeeec0f);}const _0x14aebc=wx['getUpdateManager']();_0x14aebc['onCheckForUpdate'](function(_0x20458d){if(_0x20458d['hasUpdate']){wx['showModal']({'title':_0x1552a7['LoPEB'],'content':_0x1552a7['roGHq'],'showCancel':![],'success':function(_0x1d656a){}});}});_0x14aebc['onUpdateReady'](function(){var _0xc3a637={'TpgQN':function(_0x4f1247,_0x3e5042){return _0x1552a7['uYcnf'](_0x4f1247,_0x3e5042);}};wx['showModal']({'title':_0x1552a7['LoPEB'],'content':_0x1552a7['lttsE'],'showCancel':![],'success':function(_0x55c748){if(_0x55c748['confirm']){_0x43f3fd['fs']['remove'](_0xc3a637['TpgQN'](wx['env']['USER_DATA_PATH'],'/'));_0x14aebc['applyUpdate']();}}});});_0x14aebc['onUpdateFailed'](function(){wx['showModal']({'title':_0x1552a7['LoPEB'],'content':_0x1552a7['epIHx'],'showCancel':![],'success':function(_0xd4bcba){if(_0xd4bcba['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x34ec17={'NBSKf':function(_0x529dec,_0x41b8e8){return _0x529dec(_0x41b8e8);},'cEsnY':'./tree/js/main'};const _0x594993=_0x34ec17['NBSKf'](require,_0x34ec17['cEsnY']);new _0x594993['default']();}