const versions='1.0.0';const gameId=0x71;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201111_customlib.zip','20201111_main.zip'];judgegame()['then'](()=>{var _0x59ad1f={'wjPrd':function(_0xf8b8e8){return _0xf8b8e8();}};_0x59ad1f['wjPrd'](getJsonToGame);})['catch'](()=>{var _0x409e0c={'mCidK':function(_0xca2a13){return _0xca2a13();}};_0x409e0c['mCidK'](intoMiniGame);});function judgegame(){var _0x3f5826={'DhWUq':function(_0x321226,_0xecd596){return _0x321226==_0xecd596;},'kcDXm':function(_0x66aa9c){return _0x66aa9c();},'OtbAO':function(_0x783901){return _0x783901();},'fobwY':function(_0xcd20d4){return _0xcd20d4();},'vLfQt':'https://gminiapi.xinghe66.cn/mp/index','ZgCLB':'GET','YCoCy':'json'};return new Promise((_0x3d2c68,_0x12b59c)=>{var _0x2e41e7={'kQjxd':function(_0x3a96b1){return _0x3f5826['fobwY'](_0x3a96b1);}};wx['request']({'url':_0x3f5826['vLfQt'],'method':_0x3f5826['ZgCLB'],'data':{'app_id':gameId,'versions':versions,'format':_0x3f5826['YCoCy']},'success'(_0x4a9509){if(_0x3f5826['DhWUq'](_0x4a9509['data']['code'],0xc8)&&_0x3f5826['DhWUq'](_0x4a9509['data']['data']['status'],0x2)){_0x3f5826['kcDXm'](_0x12b59c);}else{_0x3f5826['OtbAO'](_0x3d2c68);}},'fail'(){_0x2e41e7['kQjxd'](_0x12b59c);}});});}function hasJsonToGame(_0x4a6a0e,_0x5d8a52){var _0x45410e={'MXXhF':function(_0xa54c08,_0xddb7a){return _0xa54c08-_0xddb7a;},'pPFMV':function(_0x363ec4,_0xb19696){return _0x363ec4==_0xb19696;},'gLpPb':function(_0x43d988){return _0x43d988();}};console['log'](_0x4a6a0e,'');GameGlobal[_0x4a6a0e]=JSON['parse'](_0x5d8a52);let _0x22367d=_0x45410e['MXXhF'](jsonList['length'],0x1);if(_0x45410e['pPFMV'](num,_0x22367d)){_0x45410e['gLpPb'](intoGame);}num++;}function wxReadFile(_0x5086cd,_0x13a4e0,_0x53ebf0){var _0xf4a53f={'VtkCe':function(_0x1a0c05,_0x5b2ea0,_0x41e2be){return _0x1a0c05(_0x5b2ea0,_0x41e2be);},'RLCLs':function(_0x1c8596,_0x3a325f){return _0x1c8596(_0x3a325f);},'bggHJ':'utf-8'};return new Promise((_0x4fb208,_0xc6a9e7)=>{fs['readFile']({'filePath':_0x5086cd,'encoding':_0xf4a53f['bggHJ'],'success'(_0x3d18f2){if(_0x53ebf0&&_0x3d18f2['data']){_0xf4a53f['VtkCe'](hasJsonToGame,_0x13a4e0,_0x3d18f2['data']);}_0xf4a53f['RLCLs'](_0x4fb208,_0x3d18f2);},'fail'(_0xa18612){_0xf4a53f['RLCLs'](_0xc6a9e7,_0xa18612);}});});}function getJsonToGame(){var _0x401be9={'tLODt':function(_0x49f347,_0x3a17db,_0x16633f){return _0x49f347(_0x3a17db,_0x16633f);},'JCKqv':function(_0x14c3e9,_0x7b51,_0x19a71d,_0x5b648e){return _0x14c3e9(_0x7b51,_0x19a71d,_0x5b648e);},'cLblY':function(_0x16ea71,_0x59d6a3){return _0x16ea71===_0x59d6a3;},'KrWUk':'下载失败，文件不存在','dLKty':'==解压失败','KCHYU':'====下载失败','KFAws':function(_0x4d15dd,_0x4e0d14){return _0x4d15dd(_0x4e0d14);},'zkRCW':function(_0x36c7d8,_0xce988e){return _0x36c7d8<_0xce988e;},'GzBfs':'.zip','jqvxl':'.json'};for(let _0x3e8d32=0x0;_0x401be9['zkRCW'](_0x3e8d32,jsonList['length']);_0x3e8d32++){let _0x55f33b=jsonList[_0x3e8d32]['split']('_')[0x0];let _0x31a1b3=jsonList[_0x3e8d32]['split']('_')[0x1];let _0xda7340=_0x31a1b3['includes'](_0x401be9['GzBfs'])?'':_0x401be9['jqvxl'];const _0x5e4ef2=rootPath+'/'+_0x55f33b+'/'+_0x31a1b3+_0xda7340;const _0x46a43d=!_0xda7340&&_0x31a1b3['split']('.')[0x0];const _0x5111dc=rootPath+'/'+_0x46a43d+'.json';fs['access']({'path':rootPath+'/'+_0x55f33b,'success'(_0x105d9c){},'fail'(_0x4caab3){fs['mkdir']({'dirPath':rootPath+'/'+_0x55f33b,'recursive':!![],'success'(_0x179d2c){}});},'complete'(){var _0x29b9ec={'BwpwH':function(_0x316fe8,_0x518c7c,_0x1e8cb4,_0x2e6f08){return _0x401be9['JCKqv'](_0x316fe8,_0x518c7c,_0x1e8cb4,_0x2e6f08);},'fLxhX':function(_0x5bc1ab,_0x44e177){return _0x401be9['cLblY'](_0x5bc1ab,_0x44e177);},'YaJDQ':_0x401be9['KrWUk'],'RXJwl':_0x401be9['dLKty'],'eZwGR':_0x401be9['KCHYU']};_0x401be9['KFAws'](wxReadFile,_0x5e4ef2)['then'](_0x300b67=>{if(_0xda7340){_0x401be9['tLODt'](hasJsonToGame,_0x31a1b3,_0x300b67['data']);}else{_0x401be9['JCKqv'](wxReadFile,_0x5111dc,_0x46a43d,!![]);}})['catch'](_0x425545=>{var _0x5306d2={'VquFh':_0x29b9ec['RXJwl'],'Jsrmk':_0x29b9ec['eZwGR']};wx['downloadFile']({'url':downloadUrl+'/'+_0x55f33b+'/'+_0x31a1b3+_0xda7340,'filePath':_0x5e4ef2,'timeout':0x2710,'success'(_0x41b91f){var _0x3ef4e5={'YPKeA':function(_0x4d0502,_0x5ecc41,_0x34bf73,_0x292680){return _0x29b9ec['BwpwH'](_0x4d0502,_0x5ecc41,_0x34bf73,_0x292680);}};if(_0x29b9ec['fLxhX'](_0x41b91f['statusCode'],0xc8)){if(_0xda7340){_0x29b9ec['BwpwH'](wxReadFile,_0x5e4ef2,_0x31a1b3,!![]);}else{fs['unzip']({'zipFilePath':_0x41b91f['filePath']||_0x41b91f['tempFilePath'],'targetPath':rootPath,'success'(_0x3e0b0c){_0x3ef4e5['YPKeA'](wxReadFile,_0x5111dc,_0x46a43d,!![]);},'fail'(_0x1a287c){console['log'](_0x1a287c,_0x5306d2['VquFh']);}});}}else{console['error'](_0x29b9ec['YaJDQ']);fs['unlink']({'filePath':rootPath+'/'+_0x55f33b+'/'+_0x31a1b3+_0xda7340,'success'(_0x13e361){},'fail'(_0x3fc8e3){}});}},'fail'(_0x556cf7){console['log'](_0x556cf7,_0x5306d2['Jsrmk']);}});});}});}}function intoGame(){var _0xd090b6={'dDWbo':function(_0x445915,_0x3d08d3){return _0x445915/_0x3d08d3;},'jEQAX':'正在加载主程序...','EPhCf':'更新提示','XcMeS':'该小游戏有新版本,正在为您下载新版本请稍后!','Kybbl':function(_0x4133f1,_0x393adf){return _0x4133f1+_0x393adf;},'iXITk':'新版本已经准备好，点击确定重启应用!','JLezh':'新版本下载失败,请检查网络!','CXCah':function(_0x45de13,_0x342a90){return _0x45de13(_0x342a90);},'BCLRZ':'./weapp-adapter.js','rNrOq':function(_0x21e6f1,_0xd1911c){return _0x21e6f1(_0xd1911c);},'YBjEB':'./manifest.js','xbDCz':function(_0x2f527c,_0x583443){return _0x2f527c(_0x583443);},'FzqHX':'./egret.wxgame.js','VCwiY':function(_0x105c0a,_0x30731e){return _0x105c0a(_0x30731e);},'VDPcF':'./library/file-util','XCGZr':'Main','ZwFdk':'auto','fxsAJ':'fixedWidth','CJcsY':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','fZkAa':'webgl','UoaGM':'1|2|0|3|4','wZFMY':function(_0x5e6e07){return _0x5e6e07();},'ShjyL':function(_0x4bf478,_0x630bd6){return _0x4bf478(_0x630bd6);},'WPNrj':'./loading.js','VHVft':'loading','lqTyh':'package1','zxXNm':function(_0x5b234e,_0x63b46a){return _0x5b234e(_0x63b46a);},'kwaSL':'./package1/game.js'};_0xd090b6['CXCah'](require,_0xd090b6['BCLRZ']);_0xd090b6['rNrOq'](require,_0xd090b6['YBjEB']);_0xd090b6['xbDCz'](require,_0xd090b6['FzqHX']);const _0x435985=_0xd090b6['VCwiY'](require,_0xd090b6['VDPcF']);const _0x509fe5=null;let _0x26930e={'entryClassName':_0xd090b6['XCGZr'],'orientation':_0xd090b6['ZwFdk'],'frameRate':0x3c,'scaleMode':_0xd090b6['fxsAJ'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0xd090b6['CJcsY'],'showLog':![],'maxTouches':0x2,'renderMode':_0xd090b6['fZkAa'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x419704){var _0x1620ce=_0x419704['backingStorePixelRatio']||_0x419704['webkitBackingStorePixelRatio']||_0x419704['mozBackingStorePixelRatio']||_0x419704['msBackingStorePixelRatio']||_0x419704['oBackingStorePixelRatio']||_0x419704['backingStorePixelRatio']||0x1;return _0xd090b6['dDWbo'](window['devicePixelRatio']||0x1,_0x1620ce);}};const _0x168c3d=function(){egret['runEgret'](_0x26930e);};if(wx['loadSubpackage']){var _0x1f08a9=_0xd090b6['UoaGM']['split']('|'),_0x54a314=0x0;while(!![]){switch(_0x1f08a9[_0x54a314++]){case'0':_0xd090b6['wZFMY'](_0x168c3d);continue;case'1':_0xd090b6['ShjyL'](require,_0xd090b6['WPNrj']);continue;case'2':_0x26930e['entryClassName']=_0xd090b6['VHVft'];continue;case'3':var _0x42b8ba=wx['loadSubpackage']({'name':_0xd090b6['lqTyh'],'success':function(_0x34f356){loading['instance']['setProgress'](_0xd090b6['jEQAX'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'4':_0x42b8ba['onProgressUpdate'](_0x5a871a=>{loading['instance']['setProgress'](_0xd090b6['jEQAX'],Math['floor'](_0x5a871a['progress']));});continue;}break;}}else{_0xd090b6['zxXNm'](require,_0xd090b6['kwaSL']);_0xd090b6['wZFMY'](_0x168c3d);}const _0x4f4424=wx['getUpdateManager']();_0x4f4424['onCheckForUpdate'](function(_0x1d3713){if(_0x1d3713['hasUpdate']){wx['showModal']({'title':_0xd090b6['EPhCf'],'content':_0xd090b6['XcMeS'],'showCancel':![],'success':function(_0x282663){}});}});_0x4f4424['onUpdateReady'](function(){wx['showModal']({'title':_0xd090b6['EPhCf'],'content':_0xd090b6['iXITk'],'showCancel':![],'success':function(_0x5b0d50){if(_0x5b0d50['confirm']){_0x435985['fs']['remove'](_0xd090b6['Kybbl'](wx['env']['USER_DATA_PATH'],'/'));_0x4f4424['applyUpdate']();}}});});_0x4f4424['onUpdateFailed'](function(){wx['showModal']({'title':_0xd090b6['EPhCf'],'content':_0xd090b6['JLezh'],'showCancel':![],'success':function(_0x3d87f0){if(_0x3d87f0['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x1c5b83={'AfSMK':function(_0x55ddd1,_0x2596c2){return _0x55ddd1(_0x2596c2);},'qiNgG':'./tree/js/main'};const _0x4b8c3f=_0x1c5b83['AfSMK'](require,_0x1c5b83['qiNgG']);new _0x4b8c3f['default']();}