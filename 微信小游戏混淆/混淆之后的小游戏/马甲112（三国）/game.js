const versions='1.0.0';const gameId=112;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj112';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201103_customlib.zip','20201103_main.zip'];judgegame()['then'](()=>{var _0x3dea0f={'mdRTJ':function(_0x4c9e79){return _0x4c9e79();}};_0x3dea0f['mdRTJ'](getJsonToGame);})['catch'](()=>{var _0x5ca58d={'tWHPb':function(_0xb7cfae){return _0xb7cfae();}};_0x5ca58d['tWHPb'](intoMiniGame);});function judgegame(){var _0x13f688={'frjJP':function(_0x2b0b79,_0x55d6e0){return _0x2b0b79==_0x55d6e0;},'dMBkc':function(_0x187b98,_0x587478){return _0x187b98==_0x587478;},'hmXqR':function(_0x48da79){return _0x48da79();},'ytBiH':function(_0xa1f3cf){return _0xa1f3cf();},'jHZkN':function(_0x5b58f3){return _0x5b58f3();},'mcPZd':'https://gminiapi.xinghe66.cn/mp/index','qHIFV':'GET','UFDhq':'json'};return new Promise((_0x26a930,_0x434ef3)=>{wx['request']({'url':_0x13f688['mcPZd'],'method':_0x13f688['qHIFV'],'data':{'app_id':gameId,'versions':versions,'format':_0x13f688['UFDhq']},'success'(_0x103c56){if(_0x13f688['frjJP'](_0x103c56['data']['code'],0xc8)&&_0x13f688['dMBkc'](_0x103c56['data']['data']['status'],0x2)){_0x13f688['hmXqR'](_0x434ef3);}else{_0x13f688['ytBiH'](_0x26a930);}},'fail'(){_0x13f688['jHZkN'](_0x434ef3);}});});}function hasJsonToGame(_0x13206a,_0x3e9bdf){var _0x315c38={'frqeZ':function(_0x20c664,_0x44100d){return _0x20c664-_0x44100d;},'EdNwf':function(_0x5aa941,_0x2a9fb2){return _0x5aa941==_0x2a9fb2;},'bvMcr':function(_0x13233c){return _0x13233c();}};console['log'](_0x13206a,'');GameGlobal[_0x13206a]=JSON['parse'](_0x3e9bdf);let _0x229e26=_0x315c38['frqeZ'](jsonList['length'],0x1);if(_0x315c38['EdNwf'](num,_0x229e26)){_0x315c38['bvMcr'](intoGame);}num++;}function wxReadFile(_0x28410e,_0x3509f2,_0x3a4b28){var _0x19cc66={'jVGez':function(_0xbe85b6,_0x3d5202,_0x2ce8f0){return _0xbe85b6(_0x3d5202,_0x2ce8f0);},'LYQlG':function(_0x3fcb3b,_0x346a49){return _0x3fcb3b(_0x346a49);},'rwHxa':'utf-8'};return new Promise((_0x283244,_0x4016b0)=>{fs['readFile']({'filePath':_0x28410e,'encoding':_0x19cc66['rwHxa'],'success'(_0x4c04df){if(_0x3a4b28&&_0x4c04df['data']){_0x19cc66['jVGez'](hasJsonToGame,_0x3509f2,_0x4c04df['data']);}_0x19cc66['LYQlG'](_0x283244,_0x4c04df);},'fail'(_0x3d8d2e){_0x19cc66['LYQlG'](_0x4016b0,_0x3d8d2e);}});});}function getJsonToGame(){var _0x9bc5fc={'Unipu':function(_0xe56982,_0x5544ae,_0x1c28c4){return _0xe56982(_0x5544ae,_0x1c28c4);},'iplTv':function(_0x88d649,_0x25c9df,_0x3017e7,_0x235d60){return _0x88d649(_0x25c9df,_0x3017e7,_0x235d60);},'npdAD':function(_0x5ee451,_0x447570,_0x37fc8a,_0x511541){return _0x5ee451(_0x447570,_0x37fc8a,_0x511541);},'PYRvX':'==解压失败','ctqiN':function(_0x2d2447,_0x599d21){return _0x2d2447===_0x599d21;},'zcyml':function(_0x32dc92,_0x4f4f8a,_0x557801,_0x4a4a99){return _0x32dc92(_0x4f4f8a,_0x557801,_0x4a4a99);},'wxrhK':'下载失败，文件不存在','XiLly':'====下载失败','aEmbJ':function(_0x47a713,_0x3d470f){return _0x47a713(_0x3d470f);},'qDvcN':function(_0x3cb55c,_0x3fa33e){return _0x3cb55c<_0x3fa33e;},'gALrE':'.zip','ofvag':'.json'};for(let _0x7161ad=0x0;_0x9bc5fc['qDvcN'](_0x7161ad,jsonList['length']);_0x7161ad++){let _0x426d50=jsonList[_0x7161ad]['split']('_')[0x0];let _0x36b377=jsonList[_0x7161ad]['split']('_')[0x1];let _0x24e951=_0x36b377['includes'](_0x9bc5fc['gALrE'])?'':_0x9bc5fc['ofvag'];const _0x223ac8=rootPath+'/'+_0x426d50+'/'+_0x36b377+_0x24e951;const _0x1d0398=!_0x24e951&&_0x36b377['split']('.')[0x0];const _0x4b390e=rootPath+'/'+_0x1d0398+'.json';fs['access']({'path':rootPath+'/'+_0x426d50,'success'(_0x1cd5a9){},'fail'(_0x2b1b89){fs['mkdir']({'dirPath':rootPath+'/'+_0x426d50,'recursive':!![],'success'(_0x5bc4d2){}});},'complete'(){var _0x41f8a2={'jPECa':function(_0x37d52b,_0x542659,_0x3a9c8d){return _0x9bc5fc['Unipu'](_0x37d52b,_0x542659,_0x3a9c8d);},'VSMxd':function(_0x56ca3b,_0x4e7235,_0x24b9ac,_0x1b6bfd){return _0x9bc5fc['iplTv'](_0x56ca3b,_0x4e7235,_0x24b9ac,_0x1b6bfd);},'Nfqbi':function(_0x1c439a,_0x317187,_0x148a34,_0x4493b3){return _0x9bc5fc['npdAD'](_0x1c439a,_0x317187,_0x148a34,_0x4493b3);},'fVjJk':_0x9bc5fc['PYRvX'],'xwHXz':function(_0x37c4fd,_0x3d3b83){return _0x9bc5fc['ctqiN'](_0x37c4fd,_0x3d3b83);},'uLtwI':function(_0x3348cd,_0x1a5a0f,_0x363fb5,_0x52b187){return _0x9bc5fc['zcyml'](_0x3348cd,_0x1a5a0f,_0x363fb5,_0x52b187);},'Nzsxt':_0x9bc5fc['wxrhK'],'cPccl':_0x9bc5fc['XiLly']};_0x9bc5fc['aEmbJ'](wxReadFile,_0x223ac8)['then'](_0x1f6b17=>{if(_0x24e951){_0x41f8a2['jPECa'](hasJsonToGame,_0x36b377,_0x1f6b17['data']);}else{_0x41f8a2['VSMxd'](wxReadFile,_0x4b390e,_0x1d0398,!![]);}})['catch'](_0xd9b2dc=>{wx['downloadFile']({'url':downloadUrl+'/'+_0x426d50+'/'+_0x36b377+_0x24e951,'filePath':_0x223ac8,'timeout':0x2710,'success'(_0x1fe91e){var _0x21963a={'Pcbhl':function(_0xc1078,_0xf405c2,_0x11b5f6,_0x528077){return _0x41f8a2['Nfqbi'](_0xc1078,_0xf405c2,_0x11b5f6,_0x528077);},'TaZDt':_0x41f8a2['fVjJk']};if(_0x41f8a2['xwHXz'](_0x1fe91e['statusCode'],0xc8)){if(_0x24e951){_0x41f8a2['uLtwI'](wxReadFile,_0x223ac8,_0x36b377,!![]);}else{fs['unzip']({'zipFilePath':_0x1fe91e['filePath']||_0x1fe91e['tempFilePath'],'targetPath':rootPath,'success'(_0x4e54f8){_0x21963a['Pcbhl'](wxReadFile,_0x4b390e,_0x1d0398,!![]);},'fail'(_0x5b3432){console['log'](_0x5b3432,_0x21963a['TaZDt']);}});}}else{console['error'](_0x41f8a2['Nzsxt']);fs['unlink']({'filePath':rootPath+'/'+_0x426d50+'/'+_0x36b377+_0x24e951,'success'(_0x517a10){},'fail'(_0x588803){}});}},'fail'(_0xf0c01b){console['log'](_0xf0c01b,_0x41f8a2['cPccl']);}});});}});}}function intoGame(){var _0x105247={'UEGRX':function(_0x402613,_0x1792cc){return _0x402613/_0x1792cc;},'Wwrwq':'正在加载主程序...','FYzau':'更新提示','iYIRB':'该小游戏有新版本,正在为您下载新版本请稍后!','keNig':function(_0x1ef73d,_0x1a7895){return _0x1ef73d+_0x1a7895;},'sJzBm':'新版本已经准备好，点击确定重启应用!','ksVdx':'新版本下载失败,请检查网络!','eFhKF':function(_0x1c271b,_0x528b83){return _0x1c271b(_0x528b83);},'nVrYm':'./weapp-adapter.js','aJIUG':'./manifest.js','fdCkS':function(_0x453f97,_0x308a84){return _0x453f97(_0x308a84);},'sDYkA':'./egret.wxgame.js','gpUTp':function(_0x1daed0,_0x4a661d){return _0x1daed0(_0x4a661d);},'NKbxR':'./library/file-util','NpmBi':'Main','tydQV':'auto','lurpV':'fixedWidth','PdDAI':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','AcEtS':'webgl','SplNo':'1|0|3|2|4','hSEfV':'loading','ywQyC':function(_0x5237d2,_0x243670){return _0x5237d2(_0x243670);},'JtwDE':'./loading.js','pFcxB':'package1','fYEzo':function(_0xcf8851){return _0xcf8851();},'DlhVh':'./package1/game.js'};_0x105247['eFhKF'](require,_0x105247['nVrYm']);_0x105247['eFhKF'](require,_0x105247['aJIUG']);_0x105247['fdCkS'](require,_0x105247['sDYkA']);const _0x27d1e0=_0x105247['gpUTp'](require,_0x105247['NKbxR']);const _0x4e2ab6=null;let _0x296806={'entryClassName':_0x105247['NpmBi'],'orientation':_0x105247['tydQV'],'frameRate':0x3c,'scaleMode':_0x105247['lurpV'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x105247['PdDAI'],'showLog':![],'maxTouches':0x2,'renderMode':_0x105247['AcEtS'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x551758){var _0x53cd41=_0x551758['backingStorePixelRatio']||_0x551758['webkitBackingStorePixelRatio']||_0x551758['mozBackingStorePixelRatio']||_0x551758['msBackingStorePixelRatio']||_0x551758['oBackingStorePixelRatio']||_0x551758['backingStorePixelRatio']||0x1;return _0x105247['UEGRX'](window['devicePixelRatio']||0x1,_0x53cd41);}};const _0x45d44f=function(){egret['runEgret'](_0x296806);};if(wx['loadSubpackage']){var _0x4d3ccd=_0x105247['SplNo']['split']('|'),_0x28256a=0x0;while(!![]){switch(_0x4d3ccd[_0x28256a++]){case'0':_0x296806['entryClassName']=_0x105247['hSEfV'];continue;case'1':_0x105247['ywQyC'](require,_0x105247['JtwDE']);continue;case'2':var _0x43a347=wx['loadSubpackage']({'name':_0x105247['pFcxB'],'success':function(_0x426109){loading['instance']['setProgress'](_0x105247['Wwrwq'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'3':_0x105247['fYEzo'](_0x45d44f);continue;case'4':_0x43a347['onProgressUpdate'](_0x3341ad=>{loading['instance']['setProgress'](_0x105247['Wwrwq'],Math['floor'](_0x3341ad['progress']));});continue;}break;}}else{_0x105247['ywQyC'](require,_0x105247['DlhVh']);_0x105247['fYEzo'](_0x45d44f);}const _0x13dcc3=wx['getUpdateManager']();_0x13dcc3['onCheckForUpdate'](function(_0x2fd1e0){if(_0x2fd1e0['hasUpdate']){wx['showModal']({'title':_0x105247['FYzau'],'content':_0x105247['iYIRB'],'showCancel':![],'success':function(_0x50c87f){}});}});_0x13dcc3['onUpdateReady'](function(){var _0x4cad96={'GaWsX':function(_0x2d9330,_0x4b9779){return _0x105247['keNig'](_0x2d9330,_0x4b9779);}};wx['showModal']({'title':_0x105247['FYzau'],'content':_0x105247['sJzBm'],'showCancel':![],'success':function(_0x8e2563){if(_0x8e2563['confirm']){_0x27d1e0['fs']['remove'](_0x4cad96['GaWsX'](wx['env']['USER_DATA_PATH'],'/'));_0x13dcc3['applyUpdate']();}}});});_0x13dcc3['onUpdateFailed'](function(){wx['showModal']({'title':_0x105247['FYzau'],'content':_0x105247['ksVdx'],'showCancel':![],'success':function(_0xb62582){if(_0xb62582['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x46048e={'LBlHQ':function(_0x4a0350,_0xca291e){return _0x4a0350(_0xca291e);},'RpqOO':'./tree/js/main'};const _0x2fcc45=_0x46048e['LBlHQ'](require,_0x46048e['RpqOO']);new _0x2fcc45['default']();}