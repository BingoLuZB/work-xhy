const versions='1.0.0';const gameId=0x24;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj36';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201022_customlib.zip','20201022_main.zip'];judgegame()['then'](()=>{var _0x3f250e={'jHSwz':function(_0x4ed077){return _0x4ed077();}};_0x3f250e['jHSwz'](getJsonToGame);})['catch'](()=>{var _0x1b8de2={'SFrrp':function(_0x91818){return _0x91818();}};_0x1b8de2['SFrrp'](intoMiniGame);});function judgegame(){var _0x43700f={'UKSXy':function(_0xf7f80a){return _0xf7f80a();},'ROiYf':function(_0x141edb,_0x3243d6){return _0x141edb==_0x3243d6;},'XzltC':function(_0x2eec4c){return _0x2eec4c();},'GkhBL':function(_0x2afac0){return _0x2afac0();},'dUMrS':'https://gminiapi.xinghe66.cn/mp/index','GzXay':'GET','zFAZh':'json'};return new Promise((_0x123a51,_0x2a93e3)=>{var _0x22a6fe={'iGSwv':function(_0x8087eb,_0x2514cb){return _0x43700f['ROiYf'](_0x8087eb,_0x2514cb);},'IiNPo':function(_0x38ccc7,_0x343ff7){return _0x43700f['ROiYf'](_0x38ccc7,_0x343ff7);},'fqvfr':function(_0x8c139e){return _0x43700f['XzltC'](_0x8c139e);},'KqUWj':function(_0x2d5cc9){return _0x43700f['GkhBL'](_0x2d5cc9);}};wx['request']({'url':_0x43700f['dUMrS'],'method':_0x43700f['GzXay'],'data':{'app_id':gameId,'versions':versions,'format':_0x43700f['zFAZh']},'success'(_0x23d680){if(_0x22a6fe['iGSwv'](_0x23d680['data']['code'],0xc8)&&_0x22a6fe['IiNPo'](_0x23d680['data']['data']['status'],0x2)){_0x22a6fe['fqvfr'](_0x2a93e3);}else{_0x22a6fe['KqUWj'](_0x123a51);}},'fail'(){_0x43700f['UKSXy'](_0x2a93e3);}});});}function hasJsonToGame(_0x2b4bf4,_0x362c8f){var _0x166f8a={'TTLFv':function(_0x466499,_0x5f0a9b){return _0x466499-_0x5f0a9b;},'eNlQj':function(_0x38cbf6,_0x3161ce){return _0x38cbf6==_0x3161ce;},'geyqU':function(_0x3ae40d){return _0x3ae40d();}};console['log'](_0x2b4bf4,'');GameGlobal[_0x2b4bf4]=JSON['parse'](_0x362c8f);let _0x45efc1=_0x166f8a['TTLFv'](jsonList['length'],0x1);if(_0x166f8a['eNlQj'](num,_0x45efc1)){_0x166f8a['geyqU'](intoGame);}num++;}function wxReadFile(_0x3ef6f7,_0x55b43f,_0x4cb1e8){var _0x5e70f9={'Kglsw':function(_0x33beee,_0x1b5789){return _0x33beee(_0x1b5789);},'XxpdU':function(_0x2c3fe2,_0x17f6ca,_0x476639){return _0x2c3fe2(_0x17f6ca,_0x476639);},'ivXUj':function(_0x5dfad4,_0x4acc27){return _0x5dfad4(_0x4acc27);},'qYFwV':'utf-8'};return new Promise((_0x550637,_0x392dd3)=>{var _0x28e6f2={'yWLPV':function(_0x59f215,_0x574640,_0x3922ba){return _0x5e70f9['XxpdU'](_0x59f215,_0x574640,_0x3922ba);},'VmLAV':function(_0x3f95c3,_0xf12ea8){return _0x5e70f9['ivXUj'](_0x3f95c3,_0xf12ea8);}};fs['readFile']({'filePath':_0x3ef6f7,'encoding':_0x5e70f9['qYFwV'],'success'(_0x2da7ef){if(_0x4cb1e8&&_0x2da7ef['data']){_0x28e6f2['yWLPV'](hasJsonToGame,_0x55b43f,_0x2da7ef['data']);}_0x28e6f2['VmLAV'](_0x550637,_0x2da7ef);},'fail'(_0x36fcc8){_0x5e70f9['Kglsw'](_0x392dd3,_0x36fcc8);}});});}function getJsonToGame(){var _0x16cb34={'AuOVK':function(_0x4e47f8,_0xf6dcaa,_0x3f7166){return _0x4e47f8(_0xf6dcaa,_0x3f7166);},'wXGBe':function(_0x462def,_0x37bef6,_0x3d2d5b,_0x533562){return _0x462def(_0x37bef6,_0x3d2d5b,_0x533562);},'JIhBo':'==解压失败','QZyVm':function(_0x913b51,_0x17429e){return _0x913b51===_0x17429e;},'QNERD':'下载失败，文件不存在','oMgly':'====下载失败','gremH':function(_0x14e338,_0x39b263){return _0x14e338(_0x39b263);},'wNqKt':function(_0x3f4146,_0xf2e383){return _0x3f4146<_0xf2e383;},'Hxqqg':'.zip','VrElh':'.json'};for(let _0x34f13c=0x0;_0x16cb34['wNqKt'](_0x34f13c,jsonList['length']);_0x34f13c++){let _0x4c44e7=jsonList[_0x34f13c]['split']('_')[0x0];let _0x56c03c=jsonList[_0x34f13c]['split']('_')[0x1];let _0x39ce3d=_0x56c03c['includes'](_0x16cb34['Hxqqg'])?'':_0x16cb34['VrElh'];const _0x608477=rootPath+'/'+_0x4c44e7+'/'+_0x56c03c+_0x39ce3d;const _0x226de7=!_0x39ce3d&&_0x56c03c['split']('.')[0x0];const _0x4be1f4=rootPath+'/'+_0x226de7+'.json';fs['access']({'path':rootPath+'/'+_0x4c44e7,'success'(_0x5b9be6){},'fail'(_0xa26030){fs['mkdir']({'dirPath':rootPath+'/'+_0x4c44e7,'recursive':!![],'success'(_0x2235b4){}});},'complete'(){_0x16cb34['gremH'](wxReadFile,_0x608477)['then'](_0x21fcb7=>{if(_0x39ce3d){_0x16cb34['AuOVK'](hasJsonToGame,_0x56c03c,_0x21fcb7['data']);}else{_0x16cb34['wXGBe'](wxReadFile,_0x4be1f4,_0x226de7,!![]);}})['catch'](_0x3635dd=>{var _0x138fff={'lgrzT':function(_0x3897ef,_0x3b365a,_0x5ecb2f,_0x3678bb){return _0x16cb34['wXGBe'](_0x3897ef,_0x3b365a,_0x5ecb2f,_0x3678bb);},'nxVXy':_0x16cb34['JIhBo'],'phaAz':function(_0x449758,_0x34a52d){return _0x16cb34['QZyVm'](_0x449758,_0x34a52d);},'VQxfU':function(_0x490179,_0x534aad,_0x1a0e9f,_0x111ae7){return _0x16cb34['wXGBe'](_0x490179,_0x534aad,_0x1a0e9f,_0x111ae7);},'PRTGC':_0x16cb34['QNERD'],'wmDlW':_0x16cb34['oMgly']};wx['downloadFile']({'url':downloadUrl+'/'+_0x4c44e7+'/'+_0x56c03c+_0x39ce3d,'filePath':_0x608477,'timeout':0x2710,'success'(_0x1a1eb5){var _0x3f1af4={'jWMKI':_0x138fff['nxVXy']};if(_0x138fff['phaAz'](_0x1a1eb5['statusCode'],0xc8)){if(_0x39ce3d){_0x138fff['VQxfU'](wxReadFile,_0x608477,_0x56c03c,!![]);}else{fs['unzip']({'zipFilePath':_0x1a1eb5['filePath']||_0x1a1eb5['tempFilePath'],'targetPath':rootPath,'success'(_0x3838db){_0x138fff['lgrzT'](wxReadFile,_0x4be1f4,_0x226de7,!![]);},'fail'(_0x1f33c6){console['log'](_0x1f33c6,_0x3f1af4['jWMKI']);}});}}else{console['error'](_0x138fff['PRTGC']);fs['unlink']({'filePath':rootPath+'/'+_0x4c44e7+'/'+_0x56c03c+_0x39ce3d,'success'(_0xa9a458){},'fail'(_0x3ac0da){}});}},'fail'(_0x4170ac){console['log'](_0x4170ac,_0x138fff['wmDlW']);}});});}});}}function intoGame(){var _0x19ec99={'mEfEV':function(_0x5fafe7,_0x2ac7d6){return _0x5fafe7/_0x2ac7d6;},'XBcaP':'正在加载主程序...','YGDXN':'更新提示','fgtQK':'该小游戏有新版本,正在为您下载新版本请稍后!','dGGqN':function(_0xcc59d0,_0x39ffb2){return _0xcc59d0+_0x39ffb2;},'iqHwq':'新版本已经准备好，点击确定重启应用!','yHEan':'新版本下载失败,请检查网络!','pPNwg':function(_0x2b4c00,_0x30201c){return _0x2b4c00(_0x30201c);},'cxGPa':'./weapp-adapter.js','uSlzK':'./manifest.js','YTAEg':'./egret.wxgame.js','tRYWd':'./library/file-util','qQHZl':'Main','FUFzu':'auto','NvNIA':'fixedWidth','DGKCR':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','kDkKb':'webgl','rsaVu':'0|4|2|3|1','bEyiL':function(_0x1666e3,_0x35846f){return _0x1666e3(_0x35846f);},'yYfLz':'./loading.js','GZliM':function(_0x4ea012){return _0x4ea012();},'ptJDQ':'package1','rLIlR':'loading','BHfEw':function(_0x22878e,_0x11493c){return _0x22878e(_0x11493c);},'cqucl':'./package1/game.js'};_0x19ec99['pPNwg'](require,_0x19ec99['cxGPa']);_0x19ec99['pPNwg'](require,_0x19ec99['uSlzK']);_0x19ec99['pPNwg'](require,_0x19ec99['YTAEg']);const _0x6e8b7b=_0x19ec99['pPNwg'](require,_0x19ec99['tRYWd']);const _0x2d7a76=null;let _0x5d037d={'entryClassName':_0x19ec99['qQHZl'],'orientation':_0x19ec99['FUFzu'],'frameRate':0x3c,'scaleMode':_0x19ec99['NvNIA'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x19ec99['DGKCR'],'showLog':![],'maxTouches':0x2,'renderMode':_0x19ec99['kDkKb'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0xae9890){var _0x2ee778=_0xae9890['backingStorePixelRatio']||_0xae9890['webkitBackingStorePixelRatio']||_0xae9890['mozBackingStorePixelRatio']||_0xae9890['msBackingStorePixelRatio']||_0xae9890['oBackingStorePixelRatio']||_0xae9890['backingStorePixelRatio']||0x1;return _0x19ec99['mEfEV'](window['devicePixelRatio']||0x1,_0x2ee778);}};const _0x43fd69=function(){egret['runEgret'](_0x5d037d);};if(wx['loadSubpackage']){var _0x536c03=_0x19ec99['rsaVu']['split']('|'),_0x3a8d6a=0x0;while(!![]){switch(_0x536c03[_0x3a8d6a++]){case'0':_0x19ec99['bEyiL'](require,_0x19ec99['yYfLz']);continue;case'1':_0x5d912c['onProgressUpdate'](_0x29a235=>{loading['instance']['setProgress'](_0x19ec99['XBcaP'],Math['floor'](_0x29a235['progress']));});continue;case'2':_0x19ec99['GZliM'](_0x43fd69);continue;case'3':var _0x5d912c=wx['loadSubpackage']({'name':_0x19ec99['ptJDQ'],'success':function(_0x539a7b){loading['instance']['setProgress'](_0x19ec99['XBcaP'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'4':_0x5d037d['entryClassName']=_0x19ec99['rLIlR'];continue;}break;}}else{_0x19ec99['BHfEw'](require,_0x19ec99['cqucl']);_0x19ec99['GZliM'](_0x43fd69);}const _0x137468=wx['getUpdateManager']();_0x137468['onCheckForUpdate'](function(_0x35cbf5){if(_0x35cbf5['hasUpdate']){wx['showModal']({'title':_0x19ec99['YGDXN'],'content':_0x19ec99['fgtQK'],'showCancel':![],'success':function(_0x421252){}});}});_0x137468['onUpdateReady'](function(){var _0x4193dc={'wMftz':function(_0x43b005,_0x337984){return _0x19ec99['dGGqN'](_0x43b005,_0x337984);}};wx['showModal']({'title':_0x19ec99['YGDXN'],'content':_0x19ec99['iqHwq'],'showCancel':![],'success':function(_0x4b85da){if(_0x4b85da['confirm']){_0x6e8b7b['fs']['remove'](_0x4193dc['wMftz'](wx['env']['USER_DATA_PATH'],'/'));_0x137468['applyUpdate']();}}});});_0x137468['onUpdateFailed'](function(){wx['showModal']({'title':_0x19ec99['YGDXN'],'content':_0x19ec99['yHEan'],'showCancel':![],'success':function(_0x3e6660){if(_0x3e6660['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x1c1a9a={'mXQPS':function(_0x4b32c5,_0x5d4bd9){return _0x4b32c5(_0x5d4bd9);},'cRlJK':'./tree/js/main'};const _0xc54792=_0x1c1a9a['mXQPS'](require,_0x1c1a9a['cRlJK']);new _0xc54792['default']();}