const versions='1.0.0';const gameId=0x26;const downloadUrl='https://gministatic.xinghe66.cn/jsonList/sg/guanbao38';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201026_customlib.zip','20201026_main.zip'];judgegame()['then'](()=>{var _0xe9119e={'LpHmT':function(_0x37bb8f){return _0x37bb8f();}};_0xe9119e['LpHmT'](getJsonToGame);})['catch'](()=>{var _0x3c1022={'IjfBK':function(_0x5077d8){return _0x5077d8();}};_0x3c1022['IjfBK'](intoMiniGame);});function judgegame(){var _0x49741a={'DQCga':function(_0x5c0d82,_0x41d813){return _0x5c0d82==_0x41d813;},'TDEvI':function(_0x15c837){return _0x15c837();},'kbkkI':'https://gminiapi.xinghe66.cn/mp/index','XEvfo':'GET','BrNMe':'json'};return new Promise((_0x2c27c9,_0x3fbe12)=>{var _0x11e5a0={'ZbGHn':function(_0x3abf8f,_0x26d60b){return _0x49741a['DQCga'](_0x3abf8f,_0x26d60b);},'gSvQg':function(_0x25cd85){return _0x49741a['TDEvI'](_0x25cd85);}};wx['request']({'url':_0x49741a['kbkkI'],'method':_0x49741a['XEvfo'],'data':{'app_id':gameId,'versions':versions,'format':_0x49741a['BrNMe']},'success'(_0x203004){if(_0x11e5a0['ZbGHn'](_0x203004['data']['code'],0xc8)&&_0x11e5a0['ZbGHn'](_0x203004['data']['data']['status'],0x2)){_0x11e5a0['gSvQg'](_0x3fbe12);}else{_0x11e5a0['gSvQg'](_0x2c27c9);}},'fail'(){_0x11e5a0['gSvQg'](_0x3fbe12);}});});}function hasJsonToGame(_0x2a015e,_0xcd274d){var _0x3a0f76={'ntIhj':function(_0x176e32,_0x44e8cd){return _0x176e32-_0x44e8cd;},'GorPU':function(_0x191567,_0xcdebeb){return _0x191567==_0xcdebeb;},'eUoAx':function(_0x5b2b12){return _0x5b2b12();}};console['log'](_0x2a015e,'');GameGlobal[_0x2a015e]=JSON['parse'](_0xcd274d);let _0x830146=_0x3a0f76['ntIhj'](jsonList['length'],0x1);if(_0x3a0f76['GorPU'](num,_0x830146)){_0x3a0f76['eUoAx'](intoGame);}num++;}function wxReadFile(_0x4b8aea,_0x1419d1,_0x4be016){var _0x3f35c0={'GNWXV':function(_0x238e54,_0x16eb8d,_0x3d40b4){return _0x238e54(_0x16eb8d,_0x3d40b4);},'Jjuaq':function(_0xaff71e,_0x38fd72){return _0xaff71e(_0x38fd72);},'GUwKx':function(_0x1730b7,_0x578bf5){return _0x1730b7(_0x578bf5);},'bmdQJ':'utf-8'};return new Promise((_0x55ed31,_0x268888)=>{var _0x2aa81b={'FnZrH':function(_0x5a27a3,_0x37fe54,_0x4784b9){return _0x3f35c0['GNWXV'](_0x5a27a3,_0x37fe54,_0x4784b9);},'VXHFe':function(_0x3666d2,_0x498b20){return _0x3f35c0['Jjuaq'](_0x3666d2,_0x498b20);},'bJDKs':function(_0x3b5270,_0x83bc11){return _0x3f35c0['GUwKx'](_0x3b5270,_0x83bc11);}};fs['readFile']({'filePath':_0x4b8aea,'encoding':_0x3f35c0['bmdQJ'],'success'(_0x132f00){if(_0x4be016&&_0x132f00['data']){_0x2aa81b['FnZrH'](hasJsonToGame,_0x1419d1,_0x132f00['data']);}_0x2aa81b['VXHFe'](_0x55ed31,_0x132f00);},'fail'(_0x33ea1e){_0x2aa81b['bJDKs'](_0x268888,_0x33ea1e);}});});}function getJsonToGame(){var _0x5b6b9b={'QkyCH':function(_0x430609,_0x1e1bc0,_0x19a608){return _0x430609(_0x1e1bc0,_0x19a608);},'PGSoq':function(_0x57e4c6,_0xb22977,_0x369207,_0x4e3f1d){return _0x57e4c6(_0xb22977,_0x369207,_0x4e3f1d);},'gnxAY':'==解压失败','syMdW':'====下载失败','lkhyJ':function(_0x3166ef,_0x26f23f,_0x5846d2,_0x1e5ac9){return _0x3166ef(_0x26f23f,_0x5846d2,_0x1e5ac9);},'yftUB':function(_0x2c46e2,_0x4cefdf){return _0x2c46e2===_0x4cefdf;},'jAOsK':function(_0x528467,_0x52b43b,_0x19526b,_0x260e58){return _0x528467(_0x52b43b,_0x19526b,_0x260e58);},'iTuCu':'下载失败，文件不存在','WAkaK':function(_0x47683e,_0x262f67){return _0x47683e(_0x262f67);},'hvNBt':function(_0x2e207f,_0x4f6c7c){return _0x2e207f<_0x4f6c7c;},'PZtsX':'.zip','uHUmo':'.json'};for(let _0x532aa0=0x0;_0x5b6b9b['hvNBt'](_0x532aa0,jsonList['length']);_0x532aa0++){let _0x2db686=jsonList[_0x532aa0]['split']('_')[0x0];let _0x1875b5=jsonList[_0x532aa0]['split']('_')[0x1];let _0x2f6498=_0x1875b5['includes'](_0x5b6b9b['PZtsX'])?'':_0x5b6b9b['uHUmo'];const _0x49144d=rootPath+'/'+_0x2db686+'/'+_0x1875b5+_0x2f6498;const _0x17114b=!_0x2f6498&&_0x1875b5['split']('.')[0x0];const _0x225dbe=rootPath+'/'+_0x17114b+'.json';fs['access']({'path':rootPath+'/'+_0x2db686,'success'(_0x391202){},'fail'(_0x51acbe){fs['mkdir']({'dirPath':rootPath+'/'+_0x2db686,'recursive':!![],'success'(_0x3c0d69){}});},'complete'(){var _0x2608c9={'jCQkJ':function(_0x3911f4,_0x216718,_0x7ed3ce,_0x475af5){return _0x5b6b9b['lkhyJ'](_0x3911f4,_0x216718,_0x7ed3ce,_0x475af5);},'yWQSo':function(_0x29b619,_0x495aa1){return _0x5b6b9b['yftUB'](_0x29b619,_0x495aa1);},'suHJK':function(_0x16e83c,_0x493ec4,_0x2b84d1,_0x1c8399){return _0x5b6b9b['jAOsK'](_0x16e83c,_0x493ec4,_0x2b84d1,_0x1c8399);},'ebWve':_0x5b6b9b['iTuCu']};_0x5b6b9b['WAkaK'](wxReadFile,_0x49144d)['then'](_0x49978c=>{if(_0x2f6498){_0x5b6b9b['QkyCH'](hasJsonToGame,_0x1875b5,_0x49978c['data']);}else{_0x5b6b9b['PGSoq'](wxReadFile,_0x225dbe,_0x17114b,!![]);}})['catch'](_0x168779=>{var _0x4ffb17={'rbNyB':_0x5b6b9b['gnxAY'],'ZnaAz':_0x5b6b9b['syMdW']};wx['downloadFile']({'url':downloadUrl+'/'+_0x2db686+'/'+_0x1875b5+_0x2f6498,'timeout':0x2710,'filePath':_0x49144d,'success'(_0x3832c7){var _0x15c891={'NGeDH':function(_0x103846,_0x4ab83f,_0x2d9efe,_0x97faa3){return _0x2608c9['jCQkJ'](_0x103846,_0x4ab83f,_0x2d9efe,_0x97faa3);}};if(_0x2608c9['yWQSo'](_0x3832c7['statusCode'],0xc8)){if(_0x2f6498){_0x2608c9['suHJK'](wxReadFile,_0x49144d,_0x1875b5,!![]);}else{fs['unzip']({'zipFilePath':_0x3832c7['filePath']||_0x3832c7['tempFilePath'],'targetPath':rootPath,'success'(_0x9fd90a){_0x15c891['NGeDH'](wxReadFile,_0x225dbe,_0x17114b,!![]);},'fail'(_0x5361b9){console['log'](_0x5361b9,_0x4ffb17['rbNyB']);}});}}else{console['error'](_0x2608c9['ebWve']);fs['unlink']({'filePath':rootPath+'/'+_0x2db686+'/'+_0x1875b5+_0x2f6498,'success'(_0x2304d2){},'fail'(_0x1b38e5){}});}},'fail'(_0x5aa96d){console['log'](_0x5aa96d,_0x4ffb17['ZnaAz']);}});});}});}}function intoGame(){var _0xc63883={'ImGZA':function(_0x2f75f2,_0x1f33bc){return _0x2f75f2/_0x1f33bc;},'seIXm':'正在加载主程序...','hvxjY':'更新提示','JIxni':'该小游戏有新版本,正在为您下载新版本请稍后!','sblha':function(_0x7c0d,_0x3acc49){return _0x7c0d+_0x3acc49;},'FLjhV':'新版本已经准备好，点击确定重启应用!','lWrPg':'新版本下载失败,请检查网络!','tMkGu':function(_0x44ed2a,_0x16aeb1){return _0x44ed2a(_0x16aeb1);},'atqhB':'./weapp-adapter.js','XyTOX':'./manifest.js','URRKP':'./egret.wxgame.js','akdAN':function(_0x32c131,_0x3c87a6){return _0x32c131(_0x3c87a6);},'pYdKh':'./library/file-util','rZtOw':'Main','IHaJe':'auto','tAKeW':'fixedWidth','yBdtM':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.5','oPoFt':'webgl','XpdIY':'4|3|1|0|2','iFpXc':'package1','MIXEF':function(_0x116827){return _0x116827();},'twCYG':'loading','XdeGW':'./loading.js','hCGMQ':'./package1/game.js','SSfMd':function(_0x34ee8d){return _0x34ee8d();}};_0xc63883['tMkGu'](require,_0xc63883['atqhB']);_0xc63883['tMkGu'](require,_0xc63883['XyTOX']);_0xc63883['tMkGu'](require,_0xc63883['URRKP']);const _0x292a34=_0xc63883['akdAN'](require,_0xc63883['pYdKh']);const _0x47baa1=null;let _0x12a654={'entryClassName':_0xc63883['rZtOw'],'orientation':_0xc63883['IHaJe'],'frameRate':0x3c,'scaleMode':_0xc63883['tAKeW'],'contentWidth':0x280,'contentHeight':0x470,'showFPS':![],'fpsStyles':_0xc63883['yBdtM'],'showLog':![],'maxTouches':0x2,'renderMode':_0xc63883['oPoFt'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x21ad40){var _0x23dfed=_0x21ad40['backingStorePixelRatio']||_0x21ad40['webkitBackingStorePixelRatio']||_0x21ad40['mozBackingStorePixelRatio']||_0x21ad40['msBackingStorePixelRatio']||_0x21ad40['oBackingStorePixelRatio']||_0x21ad40['backingStorePixelRatio']||0x1;return _0xc63883['ImGZA'](window['devicePixelRatio']||0x1,_0x23dfed);}};const _0x275a58=function(){egret['runEgret'](_0x12a654);};if(wx['loadSubpackage']){var _0x2ad999=_0xc63883['XpdIY']['split']('|'),_0x4dab35=0x0;while(!![]){switch(_0x2ad999[_0x4dab35++]){case'0':var _0x12d84b=wx['loadSubpackage']({'name':_0xc63883['iFpXc'],'success':function(_0x23f2fc){loading['instance']['setProgress'](_0xc63883['seIXm'],Math['floor'](0x64));loading['instance']['onSuccess']();}});continue;case'1':_0xc63883['MIXEF'](_0x275a58);continue;case'2':_0x12d84b['onProgressUpdate'](_0x13c762=>{loading['instance']['setProgress'](_0xc63883['seIXm'],Math['floor'](_0x13c762['progress']));});continue;case'3':_0x12a654['entryClassName']=_0xc63883['twCYG'];continue;case'4':_0xc63883['akdAN'](require,_0xc63883['XdeGW']);continue;}break;}}else{_0xc63883['akdAN'](require,_0xc63883['hCGMQ']);_0xc63883['SSfMd'](_0x275a58);}const _0x46c018=wx['getUpdateManager']();_0x46c018['onCheckForUpdate'](function(_0x1a667b){if(_0x1a667b['hasUpdate']){wx['showModal']({'title':_0xc63883['hvxjY'],'content':_0xc63883['JIxni'],'showCancel':![],'success':function(_0x198535){}});}});_0x46c018['onUpdateReady'](function(){var _0x78838f={'DblwD':function(_0x1b07b7,_0x223719){return _0xc63883['sblha'](_0x1b07b7,_0x223719);}};wx['showModal']({'title':_0xc63883['hvxjY'],'content':_0xc63883['FLjhV'],'showCancel':![],'success':function(_0x47bbf6){if(_0x47bbf6['confirm']){_0x292a34['fs']['remove'](_0x78838f['DblwD'](wx['env']['USER_DATA_PATH'],'/'));_0x46c018['applyUpdate']();}}});});_0x46c018['onUpdateFailed'](function(){wx['showModal']({'title':_0xc63883['hvxjY'],'content':_0xc63883['lWrPg'],'showCancel':![],'success':function(_0x5a9875){if(_0x5a9875['confirm']){wx['exitMiniProgram']();}}});});}function intoMiniGame(){var _0x3d573d={'IxSsY':function(_0x21b58b,_0x121c1f){return _0x21b58b(_0x121c1f);},'ngifb':'./tree/js/main'};const _0x43cd13=_0x3d573d['IxSsY'](require,_0x3d573d['ngifb']);new _0x43cd13['default']();}