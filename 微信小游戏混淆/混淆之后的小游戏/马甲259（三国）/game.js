const versions='1.0.0';const gameId=0x103;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201205_customlib.zip','20201205_main.zip'];judgegame()['then'](()=>{var _0x4509b1={'RFwSR':function(_0x5e60d1){return _0x5e60d1();}};_0x4509b1['RFwSR'](getJsonToGame);})['catch'](()=>{var _0x2517b2={'iChZM':function(_0x2e3791){return _0x2e3791();}};_0x2517b2['iChZM'](intoMiniGame);});function judgegame(){var _0x56325d={'AKCyL':function(_0x1dad70,_0x58f577){return _0x1dad70==_0x58f577;},'FQiAc':function(_0x2ee202){return _0x2ee202();},'grAib':'https://gminiapi.xinghe66.cn/mp/index','yEOJw':'GET','AfDha':'json'};return new Promise((_0x2116d2,_0x5a3b01)=>{var _0x1e77cd={'MiGew':function(_0x844489,_0x33dac3){return _0x56325d['AKCyL'](_0x844489,_0x33dac3);},'YVPXM':function(_0x354f9f){return _0x56325d['FQiAc'](_0x354f9f);}};wx['request']({'url':_0x56325d['grAib'],'method':_0x56325d['yEOJw'],'data':{'app_id':gameId,'versions':versions,'format':_0x56325d['AfDha']},'success'(_0x4799ba){if(_0x1e77cd['MiGew'](_0x4799ba['data']['code'],0xc8)&&_0x1e77cd['MiGew'](_0x4799ba['data']['data']['status'],0x2)){_0x1e77cd['YVPXM'](_0x5a3b01);}else{_0x1e77cd['YVPXM'](_0x2116d2);}},'fail'(){_0x1e77cd['YVPXM'](_0x5a3b01);}});});}function hasJsonToGame(_0x9ad45,_0x290e8c){var _0x401f85={'YalmO':function(_0x2ab06a,_0x5eabe6){return _0x2ab06a-_0x5eabe6;},'wjfXC':function(_0x28c4fe,_0x45b6b8){return _0x28c4fe==_0x45b6b8;},'Belmq':function(_0x3761a3){return _0x3761a3();}};console['log'](_0x9ad45,'');GameGlobal[_0x9ad45]=JSON['parse'](_0x290e8c);let _0x4fd0d3=_0x401f85['YalmO'](jsonList['length'],0x1);if(_0x401f85['wjfXC'](num,_0x4fd0d3)){_0x401f85['Belmq'](intoGame);}num++;}function wxReadFile(_0x595e2b,_0x30f904,_0x533d2f){var _0x547aca={'FQSQo':function(_0x20865c,_0x1ac38a,_0x4b0913){return _0x20865c(_0x1ac38a,_0x4b0913);},'WnffM':function(_0x4d5945,_0x2f322f){return _0x4d5945(_0x2f322f);},'NfIjY':function(_0x29324d,_0x17b057){return _0x29324d(_0x17b057);},'YNGui':'utf-8'};return new Promise((_0x5c5960,_0xcc56ac)=>{fs['readFile']({'filePath':_0x595e2b,'encoding':_0x547aca['YNGui'],'success'(_0x2d0f81){if(_0x533d2f&&_0x2d0f81['data']){_0x547aca['FQSQo'](hasJsonToGame,_0x30f904,_0x2d0f81['data']);}_0x547aca['WnffM'](_0x5c5960,_0x2d0f81);},'fail'(_0x1b66a5){_0x547aca['NfIjY'](_0xcc56ac,_0x1b66a5);}});});}function getJsonToGame(){var _0x340e8d={'AgJgm':function(_0x43f93f,_0x38144f,_0x4d7044){return _0x43f93f(_0x38144f,_0x4d7044);},'GdTLH':function(_0x26f383,_0xf300,_0x5d4bd2,_0x137aac){return _0x26f383(_0xf300,_0x5d4bd2,_0x137aac);},'ocHoP':'==解压失败','oRqyH':function(_0x156a50,_0x12a01b){return _0x156a50===_0x12a01b;},'ubKvR':'下载失败，文件不存在','tUnYd':'====下载失败','QVZCl':function(_0x5a20ba,_0x109ad6){return _0x5a20ba(_0x109ad6);},'gMywo':function(_0x2c3a2e,_0x3c86fe){return _0x2c3a2e<_0x3c86fe;},'NIfxO':'.zip','hpWyU':'.json'};for(let _0x78f5bc=0x0;_0x340e8d['gMywo'](_0x78f5bc,jsonList['length']);_0x78f5bc++){let _0xaf7a65=jsonList[_0x78f5bc]['split']('_')[0x0];let _0x2d2299=jsonList[_0x78f5bc]['split']('_')[0x1];let _0x4cceab=_0x2d2299['includes'](_0x340e8d['NIfxO'])?'':_0x340e8d['hpWyU'];const _0x19d04e=rootPath+'/'+_0xaf7a65+'/'+_0x2d2299+_0x4cceab;const _0x551b67=!_0x4cceab&&_0x2d2299['split']('.')[0x0];const _0x333752=rootPath+'/'+_0x551b67+'.json';fs['access']({'path':rootPath+'/'+_0xaf7a65,'success'(_0x128d3c){},'fail'(_0x21192b){fs['mkdir']({'dirPath':rootPath+'/'+_0xaf7a65,'recursive':!![],'success'(_0x5c7255){}});},'complete'(){var _0x4016f2={'MZZxy':function(_0x66fdee,_0x1451fb,_0x59d7d0,_0x70c346){return _0x340e8d['GdTLH'](_0x66fdee,_0x1451fb,_0x59d7d0,_0x70c346);},'EJwLF':_0x340e8d['ocHoP'],'TLfTb':function(_0x405e96,_0x34b8a5){return _0x340e8d['oRqyH'](_0x405e96,_0x34b8a5);},'HHuAS':function(_0x5a3a65,_0x3cc86f,_0x35e3c1,_0xfabeba){return _0x340e8d['GdTLH'](_0x5a3a65,_0x3cc86f,_0x35e3c1,_0xfabeba);},'ePoFX':_0x340e8d['ubKvR'],'rAKTA':_0x340e8d['tUnYd']};_0x340e8d['QVZCl'](wxReadFile,_0x19d04e)['then'](_0x29fe38=>{if(_0x4cceab){_0x340e8d['AgJgm'](hasJsonToGame,_0x2d2299,_0x29fe38['data']);}else{_0x340e8d['GdTLH'](wxReadFile,_0x333752,_0x551b67,!![]);}})['catch'](_0x54e3a7=>{var _0x29b35b={'WXPEy':function(_0x4cc041,_0x393681,_0x58dcd7,_0x451d30){return _0x4016f2['MZZxy'](_0x4cc041,_0x393681,_0x58dcd7,_0x451d30);},'ZmpNZ':_0x4016f2['EJwLF'],'MzIEs':function(_0x24d6c7,_0x1ae5c3){return _0x4016f2['TLfTb'](_0x24d6c7,_0x1ae5c3);},'sroLo':function(_0x5ab1c7,_0x1c407,_0x13360f,_0x457a49){return _0x4016f2['HHuAS'](_0x5ab1c7,_0x1c407,_0x13360f,_0x457a49);},'pwMPR':_0x4016f2['ePoFX'],'oOIRI':_0x4016f2['rAKTA']};wx['downloadFile']({'url':downloadUrl+'/'+_0xaf7a65+'/'+_0x2d2299+_0x4cceab,'filePath':_0x19d04e,'timeout':0x2710,'success'(_0x42525d){if(_0x29b35b['MzIEs'](_0x42525d['statusCode'],0xc8)){if(_0x4cceab){_0x29b35b['sroLo'](wxReadFile,_0x19d04e,_0x2d2299,!![]);}else{fs['unzip']({'zipFilePath':_0x42525d['filePath']||_0x42525d['tempFilePath'],'targetPath':rootPath,'success'(_0x39e305){_0x29b35b['WXPEy'](wxReadFile,_0x333752,_0x551b67,!![]);},'fail'(_0x9d3de8){console['log'](_0x9d3de8,_0x29b35b['ZmpNZ']);}});}}else{console['error'](_0x29b35b['pwMPR']);fs['unlink']({'filePath':rootPath+'/'+_0xaf7a65+'/'+_0x2d2299+_0x4cceab,'success'(_0x3605cd){},'fail'(_0x49ea6a){}});}},'fail'(_0xe096e2){console['log'](_0xe096e2,_0x29b35b['oOIRI']);}});});}});}}function intoGame(){var _0x3d22d3={'Fsnpj':function(_0x5a72f0,_0x3e4cdc){return _0x5a72f0/_0x3e4cdc;},'DpocC':'正在加载主程序...','zKOkH':'更新提示','aQtUr':'该小游戏有新版本,正在为您下载新版本请稍后!','uagiP':function(_0x3d8beb,_0x267632){return _0x3d8beb+_0x267632;},'fMxrk':'新版本已经准备好，点击确定重启应用!','WrRhr':'新版本下载失败,请检查网络!','wzeRe':function(_0x1872a7,_0x87290a){return _0x1872a7(_0x87290a);},'hmBYb':'./weapp-adapter.js','btBNn':function(_0x15e008,_0x2e0951){return _0x15e008(_0x2e0951);},'OGiIp':'./manifest.js','evQlv':function(_0x2c2758,_0x3c43be){return _0x2c2758(_0x3c43be);},'rgqHY':'./egret.wxgame.js','kFIEO':'./library/file-util','hwxOV':'Main','MYzoO':'auto','iKxeb':'fixedWidth','PSPuO':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','BtqeN':'webgl','kivYQ':'2|3|1|4|0','KIKsI':function(_0x388431){return _0x388431();},'wSmOe':function(_0x464511,_0x137b6d){return _0x464511(_0x137b6d);},'LZtuM':'./loading.js','CjgZQ':'loading','JAZry':'package1','XDWDf':function(_0x5d5f5d,_0x1e9ee8){return _0x5d5f5d(_0x1e9ee8);},'AmmGk':'./package1/game.js'};_0x3d22d3['wzeRe'](require,_0x3d22d3['hmBYb']);_0x3d22d3['btBNn'](require,_0x3d22d3['OGiIp']);_0x3d22d3['evQlv'](require,_0x3d22d3['rgqHY']);const _0x4935aa=_0x3d22d3['evQlv'](require,_0x3d22d3['kFIEO']);const _0x32318d=null;let _0x12d87c={'entryClassName':_0x3d22d3['hwxOV'],'orientation':_0x3d22d3['MYzoO'],'frameRate':0x3c,'scaleMode':_0x3d22d3['iKxeb'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x3d22d3['PSPuO'],'showLog':![],'maxTouches':0x2,'renderMode':_0x3d22d3['BtqeN'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x47ed28){var _0x1a4193=_0x47ed28['backingStorePixelRatio']||_0x47ed28['webkitBackingStorePixelRatio']||_0x47ed28['mozBackingStorePixelRatio']||_0x47ed28['msBackingStorePixelRatio']||_0x47ed28['oBackingStorePixelRatio']||_0x47ed28['backingStorePixelRatio']||0x1;return _0x3d22d3['Fsnpj'](window['devicePixelRatio']||0x1,_0x1a4193);}};const _0x2f62ad=function(){egret['runEgret'](_0x12d87c);};if(wx['loadSubpackage']){var _0x380505=_0x3d22d3['kivYQ']['split']('|'),_0x1cbb39=0x0;while(!![]){switch(_0x380505[_0x1cbb39++]){case'0':_0x3398bb['onProgressUpdate'](_0x24203a=>{loading['instance']['setProgress'](_0x3d22d3['DpocC'],Math['floor'](_0x24203a['progress']));});continue;case'1':_0x3d22d3['KIKsI'](_0x2f62ad);continue;case'2':_0x3d22d3['wSmOe'](require,_0x3d22d3['LZtuM']);continue;case'3':_0x12d87c['entryClassName']=_0x3d22d3['CjgZQ'];continue;case'4':var _0x3398bb=wx['loadSubpackage']({'name':_0x3d22d3['JAZry'],'success':function(_0x584a71){loading['instance']['setProgress'](_0x3d22d3['DpocC'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;}break;}}else{_0x3d22d3['XDWDf'](require,_0x3d22d3['AmmGk']);_0x3d22d3['KIKsI'](_0x2f62ad);}const _0x509d2b=wx['getUpdateManager']();_0x509d2b['onCheckForUpdate'](function(_0x32d509){if(_0x32d509['hasUpdate']){wx['showModal']({'title':_0x3d22d3['zKOkH'],'content':_0x3d22d3['aQtUr'],'showCancel':![],'success':function(_0x4d5d8c){}});}});_0x509d2b['onUpdateReady'](function(){var _0x2a64d1={'qDpJH':function(_0x2a978,_0x2f3fce){return _0x3d22d3['uagiP'](_0x2a978,_0x2f3fce);}};wx['showModal']({'title':_0x3d22d3['zKOkH'],'content':_0x3d22d3['fMxrk'],'showCancel':![],'success':function(_0x31aac4){if(_0x31aac4['confirm']){_0x4935aa['fs']['remove'](_0x2a64d1['qDpJH'](wx['env']['USER_DATA_PATH'],'/'));_0x509d2b['applyUpdate']();}}});});_0x509d2b['onUpdateFailed'](function(){wx['showModal']({'title':_0x3d22d3['zKOkH'],'content':_0x3d22d3['WrRhr'],'showCancel':![],'success':function(_0x3bc71e){if(_0x3bc71e['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x376da9={'JZfYf':function(_0x35309e,_0x38cd81){return _0x35309e(_0x38cd81);},'nvYAJ':'./MYGAME/js/main'};const _0x2a2b67=_0x376da9['JZfYf'](require,_0x376da9['nvYAJ']);new _0x2a2b67['default']();}