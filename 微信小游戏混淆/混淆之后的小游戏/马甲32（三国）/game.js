const versions='1.0.1';const gameId=0x20;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj32';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201019_customlib.zip','20201019_main.zip'];judgegame()['then'](()=>{var _0x571b74={'WpjqQ':function(_0x41b422){return _0x41b422();}};_0x571b74['WpjqQ'](getJsonToGame);})['catch'](()=>{var _0x3353df={'hORhm':function(_0x3631ad){return _0x3631ad();}};_0x3353df['hORhm'](intoMiniGame);});function judgegame(){var _0x4232d4={'oCGLW':function(_0xe181b8,_0x89d331){return _0xe181b8==_0x89d331;},'mAabu':function(_0x3434f1){return _0x3434f1();},'NXRFW':function(_0x4fe8ba){return _0x4fe8ba();},'KeqYh':'https://gminiapi.xinghe66.cn/mp/index','iKOTJ':'GET','rOEOY':'json'};return new Promise((_0x3f4a46,_0x330937)=>{var _0x5d7448={'sUgwO':function(_0x1d2c66,_0x3f340d){return _0x4232d4['oCGLW'](_0x1d2c66,_0x3f340d);},'CbKKX':function(_0x2b7a28){return _0x4232d4['mAabu'](_0x2b7a28);},'KcMbf':function(_0x4234f2){return _0x4232d4['NXRFW'](_0x4234f2);}};wx['request']({'url':_0x4232d4['KeqYh'],'method':_0x4232d4['iKOTJ'],'data':{'app_id':gameId,'versions':versions,'format':_0x4232d4['rOEOY']},'success'(_0x5b7d2d){if(_0x5d7448['sUgwO'](_0x5b7d2d['data']['code'],0xc8)&&_0x5d7448['sUgwO'](_0x5b7d2d['data']['data']['status'],0x2)){_0x5d7448['CbKKX'](_0x330937);}else{_0x5d7448['KcMbf'](_0x3f4a46);}},'fail'(){_0x5d7448['KcMbf'](_0x330937);}});});}function hasJsonToGame(_0xa64b01,_0x48d3d3){var _0x28ce62={'BdQar':function(_0x1bc81b,_0x4e6ef7){return _0x1bc81b-_0x4e6ef7;},'JcXZY':function(_0x5bffa6,_0x1fa977){return _0x5bffa6==_0x1fa977;},'Kaanu':function(_0x5d5274){return _0x5d5274();}};console['log'](_0xa64b01,'');GameGlobal[_0xa64b01]=JSON['parse'](_0x48d3d3);let _0x209697=_0x28ce62['BdQar'](jsonList['length'],0x1);if(_0x28ce62['JcXZY'](num,_0x209697)){_0x28ce62['Kaanu'](intoGame);}num++;}function wxReadFile(_0x3178e3,_0x30d7dc,_0x4298bf){var _0x4d11c1={'fwmDS':function(_0x2eca8e,_0x6827d7,_0x31b433){return _0x2eca8e(_0x6827d7,_0x31b433);},'oIDAh':function(_0x47857d,_0x465d44){return _0x47857d(_0x465d44);},'kUsju':'utf-8'};return new Promise((_0x25325c,_0x2c911e)=>{var _0x5b74f={'bpnah':function(_0xfab7dd,_0x597082,_0x2a9a76){return _0x4d11c1['fwmDS'](_0xfab7dd,_0x597082,_0x2a9a76);},'qeWdY':function(_0x6ad6c6,_0x4a1330){return _0x4d11c1['oIDAh'](_0x6ad6c6,_0x4a1330);},'GoVCI':function(_0x2af175,_0x267539){return _0x4d11c1['oIDAh'](_0x2af175,_0x267539);}};fs['readFile']({'filePath':_0x3178e3,'encoding':_0x4d11c1['kUsju'],'success'(_0x23d5a6){if(_0x4298bf&&_0x23d5a6['data']){_0x5b74f['bpnah'](hasJsonToGame,_0x30d7dc,_0x23d5a6['data']);}_0x5b74f['qeWdY'](_0x25325c,_0x23d5a6);},'fail'(_0x3a7700){_0x5b74f['GoVCI'](_0x2c911e,_0x3a7700);}});});}function getJsonToGame(){var _0x14640f={'ExTjD':function(_0x4a8efe,_0x3fd91a,_0x3ef840){return _0x4a8efe(_0x3fd91a,_0x3ef840);},'dawnH':function(_0x1196e7,_0x5b3d0b,_0x4e1cd4,_0x4144be){return _0x1196e7(_0x5b3d0b,_0x4e1cd4,_0x4144be);},'msNgc':'==解压失败','DPPHY':'====下载失败','dhoBi':function(_0xb0a98a,_0x4277fc,_0x5ed892,_0x29b38e){return _0xb0a98a(_0x4277fc,_0x5ed892,_0x29b38e);},'cclGo':function(_0x16a79f,_0x2472ca){return _0x16a79f===_0x2472ca;},'TnhDN':'下载失败，文件不存在','TiwSP':function(_0xae0386,_0xe59a5f){return _0xae0386(_0xe59a5f);},'RNUEm':function(_0xd9674c,_0x1a2e60){return _0xd9674c<_0x1a2e60;},'hTzmo':'.zip','fimQa':'.json'};for(let _0x20cfac=0x0;_0x14640f['RNUEm'](_0x20cfac,jsonList['length']);_0x20cfac++){let _0x5cd9f5=jsonList[_0x20cfac]['split']('_')[0x0];let _0x5c3c05=jsonList[_0x20cfac]['split']('_')[0x1];let _0x117aa5=_0x5c3c05['includes'](_0x14640f['hTzmo'])?'':_0x14640f['fimQa'];const _0x42d93c=rootPath+'/'+_0x5cd9f5+'/'+_0x5c3c05+_0x117aa5;const _0x454f9f=!_0x117aa5&&_0x5c3c05['split']('.')[0x0];const _0x45d3fb=rootPath+'/'+_0x454f9f+'.json';fs['access']({'path':rootPath+'/'+_0x5cd9f5,'success'(_0x31c86e){},'fail'(_0x39201e){fs['mkdir']({'dirPath':rootPath+'/'+_0x5cd9f5,'recursive':!![],'success'(_0x250122){}});},'complete'(){var _0x45aecf={'qFxlt':function(_0x423db4,_0x3bfbbb,_0x228076,_0x1c4ebd){return _0x14640f['dhoBi'](_0x423db4,_0x3bfbbb,_0x228076,_0x1c4ebd);},'XEEHS':function(_0x54cce1,_0x13d6b9){return _0x14640f['cclGo'](_0x54cce1,_0x13d6b9);},'Ieokh':function(_0x555c11,_0x315343,_0x4d9fbc,_0x7d811b){return _0x14640f['dhoBi'](_0x555c11,_0x315343,_0x4d9fbc,_0x7d811b);},'HeQqq':_0x14640f['TnhDN']};_0x14640f['TiwSP'](wxReadFile,_0x42d93c)['then'](_0x9abb36=>{if(_0x117aa5){_0x14640f['ExTjD'](hasJsonToGame,_0x5c3c05,_0x9abb36['data']);}else{_0x14640f['dawnH'](wxReadFile,_0x45d3fb,_0x454f9f,!![]);}})['catch'](_0x2f5496=>{var _0x4878d4={'jaiee':_0x14640f['msNgc'],'uuZmM':_0x14640f['DPPHY']};wx['downloadFile']({'url':downloadUrl+'/'+_0x5cd9f5+'/'+_0x5c3c05+_0x117aa5,'filePath':_0x42d93c,'success'(_0x584475){var _0x103d02={'PcFZO':function(_0x3d13dd,_0x2bfb3e,_0x35b526,_0x21b66f){return _0x45aecf['qFxlt'](_0x3d13dd,_0x2bfb3e,_0x35b526,_0x21b66f);}};if(_0x45aecf['XEEHS'](_0x584475['statusCode'],0xc8)){if(_0x117aa5){_0x45aecf['Ieokh'](wxReadFile,_0x42d93c,_0x5c3c05,!![]);}else{fs['unzip']({'zipFilePath':_0x584475['filePath']||_0x584475['tempFilePath'],'targetPath':rootPath,'success'(_0x23c998){_0x103d02['PcFZO'](wxReadFile,_0x45d3fb,_0x454f9f,!![]);},'fail'(_0x427f9d){console['log'](_0x427f9d,_0x4878d4['jaiee']);}});}}else{console['error'](_0x45aecf['HeQqq']);fs['unlink']({'filePath':rootPath+'/'+_0x5cd9f5+'/'+_0x5c3c05+_0x117aa5,'success'(_0x1f4e1f){},'fail'(_0x55d632){}});}},'fail'(_0x410e26){console['log'](_0x410e26,_0x4878d4['uuZmM']);}});});}});}}function intoGame(){var _0x2fd128={'MHQrh':function(_0x5406a5,_0xd58ceb){return _0x5406a5/_0xd58ceb;},'RAFRW':'正在加载主程序...','IksoE':'更新提示','qBmMH':'该小游戏有新版本,正在为您下载新版本请稍后!','fQYMY':function(_0x51df60,_0x331f26){return _0x51df60+_0x331f26;},'wCcbw':'新版本已经准备好，点击确定重启应用!','Fegdm':'新版本下载失败,请检查网络!','NjTSl':function(_0x52572d,_0x187f10){return _0x52572d(_0x187f10);},'TakMb':'./weapp-adapter.js','sLXxS':'./manifest.js','twrGK':'./egret.wxgame.js','tNpeF':function(_0x405a45,_0x3c81f0){return _0x405a45(_0x3c81f0);},'YKBuC':'./library/file-util','Gdvcx':'Main','qSbCn':'auto','RHpnU':'fixedWidth','NsVLB':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','qKEPY':'webgl','FGXyg':'3|4|2|0|1','qeIbm':'package1','Sipzw':function(_0x489bc4){return _0x489bc4();},'LONZP':'./loading.js','VwRMY':'loading','iiBMZ':'./package1/game.js','AzKap':function(_0x5444be){return _0x5444be();}};_0x2fd128['NjTSl'](require,_0x2fd128['TakMb']);_0x2fd128['NjTSl'](require,_0x2fd128['sLXxS']);_0x2fd128['NjTSl'](require,_0x2fd128['twrGK']);const _0x182330=_0x2fd128['tNpeF'](require,_0x2fd128['YKBuC']);const _0x3cfb2a=null;let _0x564add={'entryClassName':_0x2fd128['Gdvcx'],'orientation':_0x2fd128['qSbCn'],'frameRate':0x3c,'scaleMode':_0x2fd128['RHpnU'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x2fd128['NsVLB'],'showLog':![],'maxTouches':0x2,'renderMode':_0x2fd128['qKEPY'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x329c41){var _0x3ccffb=_0x329c41['backingStorePixelRatio']||_0x329c41['webkitBackingStorePixelRatio']||_0x329c41['mozBackingStorePixelRatio']||_0x329c41['msBackingStorePixelRatio']||_0x329c41['oBackingStorePixelRatio']||_0x329c41['backingStorePixelRatio']||0x1;return _0x2fd128['MHQrh'](window['devicePixelRatio']||0x1,_0x3ccffb);}};const _0x3af263=function(){egret['runEgret'](_0x564add);};if(wx['loadSubpackage']){var _0x4ff080=_0x2fd128['FGXyg']['split']('|'),_0x394d5f=0x0;while(!![]){switch(_0x4ff080[_0x394d5f++]){case'0':var _0x1de6ca=wx['loadSubpackage']({'name':_0x2fd128['qeIbm'],'success':function(_0x4ca086){loading['instance']['setProgress'](_0x2fd128['RAFRW'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'1':_0x1de6ca['onProgressUpdate'](_0x325f1b=>{loading['instance']['setProgress'](_0x2fd128['RAFRW'],Math['floor'](_0x325f1b['progress']));});continue;case'2':_0x2fd128['Sipzw'](_0x3af263);continue;case'3':_0x2fd128['tNpeF'](require,_0x2fd128['LONZP']);continue;case'4':_0x564add['entryClassName']=_0x2fd128['VwRMY'];continue;}break;}}else{_0x2fd128['tNpeF'](require,_0x2fd128['iiBMZ']);_0x2fd128['AzKap'](_0x3af263);}const _0x4eafac=wx['getUpdateManager']();_0x4eafac['onCheckForUpdate'](function(_0x4ede97){if(_0x4ede97['hasUpdate']){wx['showModal']({'title':_0x2fd128['IksoE'],'content':_0x2fd128['qBmMH'],'showCancel':![],'success':function(_0x1a977f){}});}});_0x4eafac['onUpdateReady'](function(){var _0x40f0c3={'FAibF':function(_0xfc0266,_0x1f0f10){return _0x2fd128['fQYMY'](_0xfc0266,_0x1f0f10);}};wx['showModal']({'title':_0x2fd128['IksoE'],'content':_0x2fd128['wCcbw'],'showCancel':![],'success':function(_0x10bbec){if(_0x10bbec['confirm']){_0x182330['fs']['remove'](_0x40f0c3['FAibF'](wx['env']['USER_DATA_PATH'],'/'));_0x4eafac['applyUpdate']();}}});});_0x4eafac['onUpdateFailed'](function(){wx['showModal']({'title':_0x2fd128['IksoE'],'content':_0x2fd128['Fegdm'],'showCancel':![],'success':function(_0x4a96a4){if(_0x4a96a4['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x395415={'eXBzR':function(_0x366d92,_0x3bd6c0){return _0x366d92(_0x3bd6c0);},'NOElR':'./tree/js/main'};const _0x441e12=_0x395415['eXBzR'](require,_0x395415['NOElR']);new _0x441e12['default']();}