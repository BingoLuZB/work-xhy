const versions='1.0.1';const gameId=0x7d;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj'+0x7d;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201111_platform','20201111_assetsmanager','20201111_default','20201221_entry','20201111_particle','20201111_socket','20201111_tween','20210118_main.zip','20210118_subpack.zip'];judgegame()['then'](()=>{var _0x55d54f={'FaIcF':function(_0x18a60d){return _0x18a60d();}};_0x55d54f['FaIcF'](getJsonToGame);})['catch'](()=>{var _0x3c9696={'OOiPJ':function(_0x2959b5){return _0x2959b5();}};_0x3c9696['OOiPJ'](intoMiniGame);});function judgegame(){var _0x224a1a={'xmTxq':function(_0x6d99a6,_0x965d01){return _0x6d99a6==_0x965d01;},'YuDRR':function(_0x195056,_0x42c421){return _0x195056==_0x42c421;},'Ibnch':function(_0x1d13eb){return _0x1d13eb();},'jfvId':function(_0x380549){return _0x380549();},'mrJEW':function(_0x453bee){return _0x453bee();},'zhQvZ':'https://gminiapi.xinghe66.cn/mp/index','gMUVo':'GET','SrwHw':'json'};return new Promise((_0x1f4bd2,_0x2c6c15)=>{var _0xa8a181={'aVpqt':function(_0x360a50){return _0x224a1a['mrJEW'](_0x360a50);}};wx['request']({'url':_0x224a1a['zhQvZ'],'method':_0x224a1a['gMUVo'],'data':{'app_id':gameId,'versions':versions,'format':_0x224a1a['SrwHw']},'success'(_0x245c07){if(_0x224a1a['xmTxq'](_0x245c07['data']['code'],0xc8)&&_0x224a1a['YuDRR'](_0x245c07['data']['data']['status'],0x2)){_0x224a1a['Ibnch'](_0x2c6c15);}else{_0x224a1a['jfvId'](_0x1f4bd2);}},'fail'(){_0xa8a181['aVpqt'](_0x2c6c15);}});});}function hasJsonToGame(_0x39dfbe,_0x42be1e){var _0x2017a4={'HRqkv':function(_0x171084,_0x22a512){return _0x171084-_0x22a512;},'FscEk':function(_0xaed513,_0x45f7ca){return _0xaed513==_0x45f7ca;},'hwxql':function(_0x11d77a){return _0x11d77a();}};GameGlobal[_0x39dfbe]=JSON['parse'](_0x42be1e);let _0x23d1aa=_0x2017a4['HRqkv'](jsonList['length'],0x1);if(_0x2017a4['FscEk'](num,_0x23d1aa)){console['log'](0x15b3);_0x2017a4['hwxql'](intoGame);}num++;}function wxReadFile(_0x2a957f,_0x2b57f7,_0x3d5961){var _0x37e4da={'pNMNH':function(_0x40af91,_0x2024c6,_0x85ea72){return _0x40af91(_0x2024c6,_0x85ea72);},'WLDpg':function(_0x47a6ed,_0x1c951c){return _0x47a6ed(_0x1c951c);},'ZoZEk':'utf-8'};return new Promise((_0x333ed0,_0x4facf4)=>{var _0x110982={'spuAi':function(_0x50f17e,_0x6f4e50,_0x553867){return _0x37e4da['pNMNH'](_0x50f17e,_0x6f4e50,_0x553867);},'sBGLH':function(_0x3872d6,_0xfcdc0b){return _0x37e4da['WLDpg'](_0x3872d6,_0xfcdc0b);},'yZauA':function(_0x2a152b,_0x268389){return _0x37e4da['WLDpg'](_0x2a152b,_0x268389);}};fs['readFile']({'filePath':_0x2a957f,'encoding':_0x37e4da['ZoZEk'],'success'(_0x1a137a){if(_0x3d5961&&_0x1a137a['data']){_0x110982['spuAi'](hasJsonToGame,_0x2b57f7,_0x1a137a['data']);}_0x110982['sBGLH'](_0x333ed0,_0x1a137a);},'fail'(_0x3d8644){_0x110982['yZauA'](_0x4facf4,_0x3d8644);}});});}function getJsonToGame(){var _0x29c2ef={'dviPV':function(_0x1e87ce,_0x4ae0ba,_0x433ab3){return _0x1e87ce(_0x4ae0ba,_0x433ab3);},'FHFtO':function(_0x22a306,_0x4e6616,_0x2f3b4a,_0x3afd4d){return _0x22a306(_0x4e6616,_0x2f3b4a,_0x3afd4d);},'JrFNE':'====下载失败','jZjbM':'==解压失败','Wesly':function(_0x3c2e6f,_0x1166c9,_0x536c89,_0x44b8d2){return _0x3c2e6f(_0x1166c9,_0x536c89,_0x44b8d2);},'vIHJe':function(_0x34bd36,_0x528b58){return _0x34bd36===_0x528b58;},'kNRBK':'下载失败，文件不存在','ktKom':function(_0x66fd7e){return _0x66fd7e();},'BgtYf':function(_0x4df803,_0x40328b){return _0x4df803(_0x40328b);},'cERYR':function(_0x5c2b6f,_0x3caa51){return _0x5c2b6f<_0x3caa51;},'FDOdJ':'.zip','XwJjr':'.json'};for(let _0x18ab5d=0x0;_0x29c2ef['cERYR'](_0x18ab5d,jsonList['length']);_0x18ab5d++){let _0x4d279a=jsonList[_0x18ab5d]['split']('_')[0x0];let _0x4dec7b=jsonList[_0x18ab5d]['split']('_')[0x1];let _0x1588d2=_0x4dec7b['includes'](_0x29c2ef['FDOdJ'])?'':_0x29c2ef['XwJjr'];const _0x57ab5e=rootPath+'/'+_0x4d279a+'/'+_0x4dec7b+_0x1588d2;const _0x4bed4c=!_0x1588d2&&_0x4dec7b['split']('.')[0x0];const _0x3265a8=rootPath+'/'+_0x4bed4c+'.json';fs['access']({'path':rootPath+'/'+_0x4d279a,'success'(_0x22627a){},'fail'(_0x4504fe){fs['mkdir']({'dirPath':rootPath+'/'+_0x4d279a,'recursive':!![],'success'(_0x58d2a2){}});},'complete'(){var _0x13e192={'Sfjfm':function(_0x2d0af1,_0x1781e4,_0x2b1214){return _0x29c2ef['dviPV'](_0x2d0af1,_0x1781e4,_0x2b1214);},'cnukM':function(_0x35a677,_0x3023fb,_0x15be82,_0x21512f){return _0x29c2ef['FHFtO'](_0x35a677,_0x3023fb,_0x15be82,_0x21512f);},'zzNuy':_0x29c2ef['JrFNE'],'ahzpK':_0x29c2ef['jZjbM'],'BUycb':function(_0x5550ae,_0x333a73,_0x19828f,_0x413c72){return _0x29c2ef['Wesly'](_0x5550ae,_0x333a73,_0x19828f,_0x413c72);},'iRbPj':function(_0x2fcdf2,_0x4b8dca){return _0x29c2ef['vIHJe'](_0x2fcdf2,_0x4b8dca);},'RVoCm':_0x29c2ef['kNRBK'],'THiGt':function(_0xdafe24){return _0x29c2ef['ktKom'](_0xdafe24);}};_0x29c2ef['BgtYf'](wxReadFile,_0x57ab5e)['then'](_0x246e73=>{if(_0x1588d2){_0x13e192['Sfjfm'](hasJsonToGame,_0x4dec7b,_0x246e73['data']);}else{_0x13e192['cnukM'](wxReadFile,_0x3265a8,_0x4bed4c,!![]);}})['catch'](_0x3c0fc2=>{var _0x2b4633={'SgjDP':_0x13e192['ahzpK'],'rwUMg':function(_0x4264a6,_0x405393,_0x10ce8b,_0x603e5e){return _0x13e192['BUycb'](_0x4264a6,_0x405393,_0x10ce8b,_0x603e5e);},'VnCfg':function(_0x20f386,_0x8258f9){return _0x13e192['iRbPj'](_0x20f386,_0x8258f9);},'pVian':_0x13e192['RVoCm'],'lGrTd':function(_0x4bca85){return _0x13e192['THiGt'](_0x4bca85);}};wx['downloadFile']({'url':downloadUrl+'/'+_0x4d279a+'/'+_0x4dec7b+_0x1588d2,'timeout':0x2710,'filePath':_0x57ab5e,'success'(_0x58d984){var _0x45c45e={'tPHHo':function(_0x34d5ce,_0x1d3624,_0xdd87c6,_0x215f1e){return _0x2b4633['rwUMg'](_0x34d5ce,_0x1d3624,_0xdd87c6,_0x215f1e);}};if(_0x2b4633['VnCfg'](_0x58d984['statusCode'],0xc8)){if(_0x1588d2){_0x2b4633['rwUMg'](wxReadFile,_0x57ab5e,_0x4dec7b,!![]);}else{fs['unzip']({'zipFilePath':_0x58d984['filePath']||_0x58d984['tempFilePath'],'targetPath':rootPath,'success'(_0x14aed0){_0x45c45e['tPHHo'](wxReadFile,_0x3265a8,_0x4bed4c,!![]);},'fail'(_0x12cba8){console['log'](_0x12cba8,_0x2b4633['SgjDP']);}});}}else{console['error'](_0x2b4633['pVian']);fs['unlink']({'filePath':rootPath+'/'+_0x4d279a+'/'+_0x4dec7b+_0x1588d2,'success'(_0x556857){},'fail'(_0x898cd2){}});_0x2b4633['lGrTd'](intoMiniGame);}},'fail'(_0x4716b1){console['log'](_0x4716b1,_0x13e192['zzNuy']);}});});}});}}function intoGame(){var _0x35fb44={'YOWOQ':'ver.json','MXGpO':function(_0x16c092,_0x3f0ef7){return _0x16c092+_0x3f0ef7;},'SsOFT':function(_0x14ef40,_0xf3ee7){return _0x14ef40+_0xf3ee7;},'EqMVK':'/ver.json','spwSC':function(_0x25069b,_0x3576b9){return _0x25069b/_0x3576b9;},'FWLIs':'Main','qJoNu':'auto','AHqnh':'fixedNarrow','PgsNu':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','VEcza':'webgl','amuWa':function(_0x3a6c0c,_0x2d917d){return _0x3a6c0c(_0x2d917d);},'CiiLo':'./library/userfilemgr.js','CSRmg':function(_0x2a2a92,_0x6332bc){return _0x2a2a92(_0x6332bc);},'UPhBA':'./weapp-adapter.js','QlFxs':'./senjin_wx_xxtx_littleGame.js','fZtNf':function(_0x3fcd87,_0x43748d){return _0x3fcd87(_0x43748d);},'xPnod':'./platform.js','sZaQJ':function(_0x133c98,_0x44249a){return _0x133c98(_0x44249a);},'YduIk':'./manifest.js','BmhRo':function(_0x3bbc8b,_0x3b7125){return _0x3bbc8b(_0x3b7125);},'wbgRS':'./egret.wxgame.js','DNsNn':function(_0x3535ba,_0x4ba5d5){return _0x3535ba===_0x4ba5d5;},'eNVse':'function','lbPdV':'./library/image.js','BSoOZ':function(_0x4f89df,_0x429f38){return _0x4f89df(_0x429f38);},'OUgDZ':'./library/text.js','fAIQQ':function(_0x26ba01,_0x252f91){return _0x26ba01(_0x252f91);},'xvDIK':'./library/sound.js','EnMEE':function(_0x4132d7,_0x4d6447){return _0x4132d7(_0x4d6447);},'Vqcpv':'./library/binary.js','CpndQ':'https://z1c.h5eco.com/1/z1client/','eAtze':'https://mzapi.h5eco.com/z1/','aQnDf':'/ev.json'};const {userfileMgr}=_0x35fb44['amuWa'](require,_0x35fb44['CiiLo']);_0x35fb44['CSRmg'](require,_0x35fb44['UPhBA']);_0x35fb44['CSRmg'](require,_0x35fb44['QlFxs']);_0x35fb44['fZtNf'](require,_0x35fb44['xPnod']);_0x35fb44['sZaQJ'](require,_0x35fb44['YduIk']);_0x35fb44['BmhRo'](require,_0x35fb44['wbgRS']);if(_0x35fb44['DNsNn'](typeof wx['getUpdateManager'],_0x35fb44['eNVse'])){const _0x5f128b=wx['getUpdateManager']();_0x5f128b['onCheckForUpdate'](function(_0x42b3d1){console['log']('-------',_0x42b3d1);});_0x5f128b['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x5f128b['applyUpdate']();});_0x5f128b['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x35fb44['BmhRo'](require,_0x35fb44['lbPdV']);_0x35fb44['BSoOZ'](require,_0x35fb44['OUgDZ']);_0x35fb44['fAIQQ'](require,_0x35fb44['xvDIK']);_0x35fb44['EnMEE'](require,_0x35fb44['Vqcpv']);}window['alert']=console['error'];window['verData']={};window['urlParam']={'apptype':'3','root':_0x35fb44['CpndQ'],'apiRoot':_0x35fb44['eAtze'],'reportRoot':'https://z1back.h5eco.com/','ev':0x87};window['getUrl']=_0x21e7f1=>{if(~_0x21e7f1['indexOf'](_0x35fb44['YOWOQ']))return _0x35fb44['MXGpO'](_0x35fb44['SsOFT'](urlParam['root'],urlParam['gv']),_0x35fb44['EqMVK']);let _0x4f0fb4=urlParam['gv']||urlParam['ev'];return _0x35fb44['SsOFT'](_0x35fb44['SsOFT'](urlParam['root'],_0x4f0fb4?_0x35fb44['SsOFT'](verData[_0x21e7f1]||0x0,'/'):''),_0x21e7f1);};wx['request']({'url':_0x35fb44['SsOFT'](_0x35fb44['SsOFT'](urlParam['root'],urlParam['ev']),_0x35fb44['aQnDf']),'success':_0x342ffe=>window['verData']=_0x342ffe['data'],'complete':()=>{var _0x37683d={'DmkrU':function(_0x382d61,_0x5ae35c){return _0x35fb44['spwSC'](_0x382d61,_0x5ae35c);}};egret['runEgret']({'entryClassName':_0x35fb44['FWLIs'],'orientation':_0x35fb44['qJoNu'],'frameRate':0x3c,'scaleMode':_0x35fb44['AHqnh'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x35fb44['PgsNu'],'showLog':![],'maxTouches':0x2,'renderMode':_0x35fb44['VEcza'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0xfadd9f){var _0x5903e4=_0xfadd9f['backingStorePixelRatio']||_0xfadd9f['webkitBackingStorePixelRatio']||_0xfadd9f['mozBackingStorePixelRatio']||_0xfadd9f['msBackingStorePixelRatio']||_0xfadd9f['oBackingStorePixelRatio']||_0xfadd9f['backingStorePixelRatio']||0x1;return _0x37683d['DmkrU'](window['devicePixelRatio']||0x1,_0x5903e4);}});}});}function intoMiniGame(){var _0x2d1dce={'FAiTA':function(_0x2a8d61,_0x42638d){return _0x2a8d61(_0x42638d);},'bmNYr':'./MYGAME/js/main'};const _0x4630ba=_0x2d1dce['FAiTA'](require,_0x2d1dce['bmNYr']);new _0x4630ba['default']();}