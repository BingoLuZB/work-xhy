const versions='1.0.0';const gameId=0x78;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/guanbao'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201110_customlib.zip','20201110_main.zip'];judgegame()['then'](()=>{var _0x630371={'AiXzs':function(_0x14cedb){return _0x14cedb();}};_0x630371['AiXzs'](getJsonToGame);})['catch'](()=>{var _0x3183c1={'onKvT':function(_0x2097df){return _0x2097df();}};_0x3183c1['onKvT'](intoMiniGame);});function judgegame(){var _0x172529={'rqNeJ':function(_0x246d34,_0x5589ed){return _0x246d34==_0x5589ed;},'nFaxL':function(_0x574adf){return _0x574adf();},'lZPwW':function(_0x5aa65a){return _0x5aa65a();},'HTUaT':'https://gminiapi.xinghe66.cn/mp/index','BGTau':'GET','LfuFL':'json'};return new Promise((_0x1e7349,_0x108ae6)=>{wx['request']({'url':_0x172529['HTUaT'],'method':_0x172529['BGTau'],'data':{'app_id':gameId,'versions':versions,'format':_0x172529['LfuFL']},'success'(_0x3095e3){if(_0x172529['rqNeJ'](_0x3095e3['data']['code'],0xc8)&&_0x172529['rqNeJ'](_0x3095e3['data']['data']['status'],0x2)){_0x172529['nFaxL'](_0x108ae6);}else{_0x172529['nFaxL'](_0x1e7349);}},'fail'(){_0x172529['lZPwW'](_0x108ae6);}});});}function hasJsonToGame(_0x53da66,_0x5d58ed){var _0x21b1cb={'ViKJQ':function(_0x2d205c,_0x3fa424){return _0x2d205c-_0x3fa424;},'RZWle':function(_0x237da3,_0x5af098){return _0x237da3==_0x5af098;},'etMfE':function(_0x14d9ed){return _0x14d9ed();}};console['log'](_0x53da66,'');GameGlobal[_0x53da66]=JSON['parse'](_0x5d58ed);let _0x8eb199=_0x21b1cb['ViKJQ'](jsonList['length'],0x1);if(_0x21b1cb['RZWle'](num,_0x8eb199)){_0x21b1cb['etMfE'](intoGame);}num++;}function wxReadFile(_0x4e6175,_0x4ce0ea,_0x4a4d40){var _0x4edda8={'SwLmW':function(_0x232241,_0x269598,_0x5e1640){return _0x232241(_0x269598,_0x5e1640);},'uyJNn':function(_0x17c2f2,_0x5402cc){return _0x17c2f2(_0x5402cc);},'MrBTU':'utf-8'};return new Promise((_0x481857,_0x1f80bb)=>{var _0x61e94={'fuIeH':function(_0x5004e2,_0x1ef007,_0xbbd2cd){return _0x4edda8['SwLmW'](_0x5004e2,_0x1ef007,_0xbbd2cd);},'oZlKE':function(_0x293d8c,_0x5d7d36){return _0x4edda8['uyJNn'](_0x293d8c,_0x5d7d36);},'XaiPJ':function(_0x595bcd,_0x428e5c){return _0x4edda8['uyJNn'](_0x595bcd,_0x428e5c);}};fs['readFile']({'filePath':_0x4e6175,'encoding':_0x4edda8['MrBTU'],'success'(_0x1b0209){if(_0x4a4d40&&_0x1b0209['data']){_0x61e94['fuIeH'](hasJsonToGame,_0x4ce0ea,_0x1b0209['data']);}_0x61e94['oZlKE'](_0x481857,_0x1b0209);},'fail'(_0x28b1c2){_0x61e94['XaiPJ'](_0x1f80bb,_0x28b1c2);}});});}function getJsonToGame(){var _0x2b230e={'XXWYg':function(_0x5269ff,_0x31b4c9,_0x4f6260,_0x1845ad){return _0x5269ff(_0x31b4c9,_0x4f6260,_0x1845ad);},'KnnzN':'==解压失败','tmLsA':function(_0x43b801,_0x43f99a){return _0x43b801===_0x43f99a;},'VFbRx':'下载失败，文件不存在','UUoGr':'====下载失败','WVoQU':function(_0x1e3ccb,_0x2d77f0,_0x466c9c){return _0x1e3ccb(_0x2d77f0,_0x466c9c);},'uLtAx':function(_0x2dfc74,_0x2ccd60,_0x4d3afc,_0x36bad0){return _0x2dfc74(_0x2ccd60,_0x4d3afc,_0x36bad0);},'CLZdH':function(_0x34c1bc,_0x2b9e60){return _0x34c1bc(_0x2b9e60);},'HnYAI':function(_0x550ebd,_0x48dbd5){return _0x550ebd<_0x48dbd5;},'Fukoc':'.zip','aAVeY':'.json'};for(let _0x495f8d=0x0;_0x2b230e['HnYAI'](_0x495f8d,jsonList['length']);_0x495f8d++){let _0x1162f6=jsonList[_0x495f8d]['split']('_')[0x0];let _0x172553=jsonList[_0x495f8d]['split']('_')[0x1];let _0x5df4c4=_0x172553['includes'](_0x2b230e['Fukoc'])?'':_0x2b230e['aAVeY'];const _0x1dcd8e=rootPath+'/'+_0x1162f6+'/'+_0x172553+_0x5df4c4;const _0x1b787b=!_0x5df4c4&&_0x172553['split']('.')[0x0];const _0x2384db=rootPath+'/'+_0x1b787b+'.json';fs['access']({'path':rootPath+'/'+_0x1162f6,'success'(_0x443d7c){},'fail'(_0x614e7d){fs['mkdir']({'dirPath':rootPath+'/'+_0x1162f6,'recursive':!![],'success'(_0x47996f){}});},'complete'(){var _0x216611={'bUTUm':function(_0x12a745,_0x1c4fa9,_0x1722a8){return _0x2b230e['WVoQU'](_0x12a745,_0x1c4fa9,_0x1722a8);},'qHHmT':function(_0x2dcc68,_0x4a8c2b,_0x2e0647,_0x717392){return _0x2b230e['uLtAx'](_0x2dcc68,_0x4a8c2b,_0x2e0647,_0x717392);}};_0x2b230e['CLZdH'](wxReadFile,_0x1dcd8e)['then'](_0x217d2b=>{if(_0x5df4c4){_0x216611['bUTUm'](hasJsonToGame,_0x172553,_0x217d2b['data']);}else{_0x216611['qHHmT'](wxReadFile,_0x2384db,_0x1b787b,!![]);}})['catch'](_0x47dd2e=>{var _0x419b88={'EQiJM':function(_0xa4aeff,_0xeb3131,_0x50ff39,_0x547dcc){return _0x2b230e['XXWYg'](_0xa4aeff,_0xeb3131,_0x50ff39,_0x547dcc);},'jjCyW':_0x2b230e['KnnzN'],'yEwsV':function(_0x518428,_0x402d76){return _0x2b230e['tmLsA'](_0x518428,_0x402d76);},'Cuuyv':_0x2b230e['VFbRx'],'LFGxg':_0x2b230e['UUoGr']};wx['downloadFile']({'url':downloadUrl+'/'+_0x1162f6+'/'+_0x172553+_0x5df4c4,'timeout':0x2710,'filePath':_0x1dcd8e,'success'(_0x35e3f0){var _0x39c2d5={'CxGrF':function(_0x6706e9,_0x2c3838,_0x5f01b1,_0x5e10c4){return _0x419b88['EQiJM'](_0x6706e9,_0x2c3838,_0x5f01b1,_0x5e10c4);},'QieDL':_0x419b88['jjCyW']};if(_0x419b88['yEwsV'](_0x35e3f0['statusCode'],0xc8)){if(_0x5df4c4){_0x419b88['EQiJM'](wxReadFile,_0x1dcd8e,_0x172553,!![]);}else{fs['unzip']({'zipFilePath':_0x35e3f0['filePath']||_0x35e3f0['tempFilePath'],'targetPath':rootPath,'success'(_0x25e231){_0x39c2d5['CxGrF'](wxReadFile,_0x2384db,_0x1b787b,!![]);},'fail'(_0x374909){console['log'](_0x374909,_0x39c2d5['QieDL']);}});}}else{console['error'](_0x419b88['Cuuyv']);fs['unlink']({'filePath':rootPath+'/'+_0x1162f6+'/'+_0x172553+_0x5df4c4,'success'(_0x3a9653){},'fail'(_0x57d5d){}});}},'fail'(_0x21bff0){console['log'](_0x21bff0,_0x419b88['LFGxg']);}});});}});}}function intoGame(){var _0x493839={'hmIkk':function(_0x4942a3,_0x43692b){return _0x4942a3/_0x43692b;},'FcXiw':'正在加载主程序...','fGKqP':'更新提示','xdJqU':'该小游戏有新版本,正在为您下载新版本请稍后!','viCLr':function(_0x301980,_0x454eee){return _0x301980+_0x454eee;},'VSFNo':'新版本已经准备好，点击确定重启应用!','LggXF':'新版本下载失败,请检查网络!','oBPtm':function(_0x3598d9,_0x593b0d){return _0x3598d9(_0x593b0d);},'FfNKE':'./weapp-adapter.js','dqNoj':'./manifest.js','TkRHZ':'./egret.wxgame.js','RXszC':'./library/file-util','yIzxq':'Main','GMyfd':'auto','tlqTU':'fixedWidth','XEpxZ':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','CqFEH':'webgl','tEgBU':'0|1|4|3|2','ZXrSX':'./loading.js','vFgEU':'loading','SyzmZ':'package1','QCLjo':function(_0x18a934){return _0x18a934();},'OUqWn':function(_0x2179df,_0x307d5f){return _0x2179df(_0x307d5f);},'AQGeC':'./package1/game.js','TDOhC':function(_0x22448d){return _0x22448d();}};_0x493839['oBPtm'](require,_0x493839['FfNKE']);_0x493839['oBPtm'](require,_0x493839['dqNoj']);_0x493839['oBPtm'](require,_0x493839['TkRHZ']);const _0x4a8215=_0x493839['oBPtm'](require,_0x493839['RXszC']);const _0x4d3e92=null;let _0x5ad7d5={'entryClassName':_0x493839['yIzxq'],'orientation':_0x493839['GMyfd'],'frameRate':0x3c,'scaleMode':_0x493839['tlqTU'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0x493839['XEpxZ'],'showLog':![],'maxTouches':0x2,'renderMode':_0x493839['CqFEH'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x30bb1d){var _0x3fe3cd=_0x30bb1d['backingStorePixelRatio']||_0x30bb1d['webkitBackingStorePixelRatio']||_0x30bb1d['mozBackingStorePixelRatio']||_0x30bb1d['msBackingStorePixelRatio']||_0x30bb1d['oBackingStorePixelRatio']||_0x30bb1d['backingStorePixelRatio']||0x1;return _0x493839['hmIkk'](window['devicePixelRatio']||0x1,_0x3fe3cd);}};const _0x4e521f=function(){egret['runEgret'](_0x5ad7d5);};if(wx['loadSubpackage']){var _0x4aa33d=_0x493839['tEgBU']['split']('|'),_0x48f520=0x0;while(!![]){switch(_0x4aa33d[_0x48f520++]){case'0':_0x493839['oBPtm'](require,_0x493839['ZXrSX']);continue;case'1':_0x5ad7d5['entryClassName']=_0x493839['vFgEU'];continue;case'2':_0x5cf609['onProgressUpdate'](_0xdfa135=>{loading['instance']['setProgress'](_0x493839['FcXiw'],Math['floor'](_0xdfa135['progress']));});continue;case'3':var _0x5cf609=wx['loadSubpackage']({'name':_0x493839['SyzmZ'],'success':function(_0x343022){loading['instance']['setProgress'](_0x493839['FcXiw'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'4':_0x493839['QCLjo'](_0x4e521f);continue;}break;}}else{_0x493839['OUqWn'](require,_0x493839['AQGeC']);_0x493839['TDOhC'](_0x4e521f);}const _0xcc177=wx['getUpdateManager']();_0xcc177['onCheckForUpdate'](function(_0x152595){if(_0x152595['hasUpdate']){wx['showModal']({'title':_0x493839['fGKqP'],'content':_0x493839['xdJqU'],'showCancel':![],'success':function(_0x5e81c9){}});}});_0xcc177['onUpdateReady'](function(){wx['showModal']({'title':_0x493839['fGKqP'],'content':_0x493839['VSFNo'],'showCancel':![],'success':function(_0x259e30){if(_0x259e30['confirm']){_0x4a8215['fs']['remove'](_0x493839['viCLr'](wx['env']['USER_DATA_PATH'],'/'));_0xcc177['applyUpdate']();}}});});_0xcc177['onUpdateFailed'](function(){wx['showModal']({'title':_0x493839['fGKqP'],'content':_0x493839['LggXF'],'showCancel':![],'success':function(_0x308c2f){if(_0x308c2f['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x5edd70={'hjDOc':function(_0x1d9b3f,_0x4fd4e5){return _0x1d9b3f(_0x4fd4e5);},'WUUnt':'./tree/js/main'};const _0x34e63e=_0x5edd70['hjDOc'](require,_0x5edd70['WUUnt']);new _0x34e63e['default']();}