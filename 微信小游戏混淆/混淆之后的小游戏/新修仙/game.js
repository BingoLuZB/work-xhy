const versions='1.0.2';const gameId=0x8;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/xinxiuxian';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201009_platform','20201009_entry','20201009_main.zip','20201009_egret','20200925_assetsmanager','20200925_default','20200925_particle','20200925_socket','20200925_tween'];judgegame()['then'](()=>{var _0x238457={'VLDhT':function(_0x4efabd){return _0x4efabd();}};_0x238457['VLDhT'](getJsonToGame);})['catch'](()=>{var _0x5ae069={'LeGMA':function(_0x13232e){return _0x13232e();}};_0x5ae069['LeGMA'](intoMiniGame);});function judgegame(){var _0x47b85b={'YRCdy':function(_0x4b7a72,_0xe6962e){return _0x4b7a72==_0xe6962e;},'WaPEj':function(_0x3411a9){return _0x3411a9();},'PUpry':'https://gminiapi.xinghe66.cn/mp/index','bVMie':'GET','EjQuQ':'json'};return new Promise((_0x5d4772,_0x197e73)=>{wx['request']({'url':_0x47b85b['PUpry'],'method':_0x47b85b['bVMie'],'data':{'app_id':gameId,'versions':versions,'format':_0x47b85b['EjQuQ']},'success'(_0xd7c21){if(_0x47b85b['YRCdy'](_0xd7c21['data']['code'],0xc8)&&_0x47b85b['YRCdy'](_0xd7c21['data']['data']['status'],0x2)){_0x47b85b['WaPEj'](_0x197e73);}else{_0x47b85b['WaPEj'](_0x5d4772);}},'fail'(){_0x47b85b['WaPEj'](_0x197e73);}});});}function hasJsonToGame(_0x515135,_0x2dea40){var _0xd59686={'HpSYR':function(_0x4f6c63,_0x59d15d){return _0x4f6c63-_0x59d15d;},'YhjiG':function(_0x56be96,_0x1d93f8){return _0x56be96==_0x1d93f8;},'VbNSL':function(_0x4733f1){return _0x4733f1();}};GameGlobal[_0x515135]=JSON['parse'](_0x2dea40);let _0x502e39=_0xd59686['HpSYR'](jsonList['length'],0x1);if(_0xd59686['YhjiG'](num,_0x502e39)){_0xd59686['VbNSL'](intoGame);}num++;}function wxReadFile(_0x15f9be,_0xd545f,_0x52a10d){var _0x6496fc={'FooUE':function(_0x209b0d,_0x7df3de,_0x7946d2){return _0x209b0d(_0x7df3de,_0x7946d2);},'cpfiL':function(_0x20f0cb,_0x4c06c0){return _0x20f0cb(_0x4c06c0);},'bCkKL':'utf-8'};return new Promise((_0x5250b5,_0x5afb28)=>{fs['readFile']({'filePath':_0x15f9be,'encoding':_0x6496fc['bCkKL'],'success'(_0x32d446){if(_0x52a10d&&_0x32d446['data']){_0x6496fc['FooUE'](hasJsonToGame,_0xd545f,_0x32d446['data']);}_0x6496fc['cpfiL'](_0x5250b5,_0x32d446);},'fail'(_0x151908){_0x6496fc['cpfiL'](_0x5afb28,_0x151908);}});});}function getJsonToGame(){var _0x22ebd2={'wGrIS':function(_0x36e497,_0x4ac544,_0xecb488){return _0x36e497(_0x4ac544,_0xecb488);},'VckFf':function(_0xcda27e,_0x3f888a,_0x3b4ed4,_0x25920d){return _0xcda27e(_0x3f888a,_0x3b4ed4,_0x25920d);},'mqGJH':'==解压失败','vlqkj':function(_0x373679,_0xf1439b){return _0x373679===_0xf1439b;},'EsQbd':'下载失败，文件不存在','NXbXQ':'====下载失败','Jupaa':function(_0x239455,_0x652df0){return _0x239455(_0x652df0);},'OhGnW':function(_0x2dca61,_0x4dfbbd){return _0x2dca61<_0x4dfbbd;},'TjWvP':'.zip','oAVQY':'.json'};for(let _0x1c85dd=0x0;_0x22ebd2['OhGnW'](_0x1c85dd,jsonList['length']);_0x1c85dd++){let _0x5ef84b=jsonList[_0x1c85dd]['split']('_')[0x0];let _0x51578d=jsonList[_0x1c85dd]['split']('_')[0x1];let _0x38492c=_0x51578d['includes'](_0x22ebd2['TjWvP'])?'':_0x22ebd2['oAVQY'];const _0x2f612d=rootPath+'/'+_0x5ef84b+'/'+_0x51578d+_0x38492c;const _0x7d5aa4=!_0x38492c&&_0x51578d['split']('.')[0x0];const _0x102f1d=rootPath+'/'+_0x7d5aa4+'.json';fs['access']({'path':rootPath+'/'+_0x5ef84b,'success'(_0xbd0cb3){},'fail'(_0x20e88b){fs['mkdir']({'dirPath':rootPath+'/'+_0x5ef84b,'recursive':!![],'success'(_0x475453){}});},'complete'(){var _0x296758={'dgVEC':function(_0x41bc62,_0x4cafab,_0x1cde0f){return _0x22ebd2['wGrIS'](_0x41bc62,_0x4cafab,_0x1cde0f);},'bFSyL':function(_0x56d08f,_0x1cfb78,_0x3aa129,_0xcde7a8){return _0x22ebd2['VckFf'](_0x56d08f,_0x1cfb78,_0x3aa129,_0xcde7a8);},'qPwaZ':_0x22ebd2['mqGJH'],'oQYEy':function(_0x2ff26f,_0x58169e){return _0x22ebd2['vlqkj'](_0x2ff26f,_0x58169e);},'TcAJX':_0x22ebd2['EsQbd'],'uHPQw':_0x22ebd2['NXbXQ']};_0x22ebd2['Jupaa'](wxReadFile,_0x2f612d)['then'](_0x126288=>{if(_0x38492c){_0x296758['dgVEC'](hasJsonToGame,_0x51578d,_0x126288['data']);}else{_0x296758['bFSyL'](wxReadFile,_0x102f1d,_0x7d5aa4,!![]);}})['catch'](_0x262ef5=>{var _0x455469={'jeDbL':function(_0x5b9ace,_0x19049a,_0x5cbd93,_0x303f92){return _0x296758['bFSyL'](_0x5b9ace,_0x19049a,_0x5cbd93,_0x303f92);},'gIbUC':_0x296758['qPwaZ'],'dzzUs':function(_0x3aec3d,_0x203c9f){return _0x296758['oQYEy'](_0x3aec3d,_0x203c9f);},'PTgXS':function(_0x3c1c07,_0x5f232a,_0xf5eb9,_0x17448d){return _0x296758['bFSyL'](_0x3c1c07,_0x5f232a,_0xf5eb9,_0x17448d);},'ySciK':_0x296758['TcAJX'],'WLDZh':_0x296758['uHPQw']};wx['downloadFile']({'url':downloadUrl+'/'+_0x5ef84b+'/'+_0x51578d+_0x38492c,'filePath':_0x2f612d,'success'(_0x4c0940){var _0xd6f86c={'Ibfpn':function(_0x47817a,_0x2f3b3b,_0x13f5c0,_0x2071dc){return _0x455469['jeDbL'](_0x47817a,_0x2f3b3b,_0x13f5c0,_0x2071dc);},'YROaC':_0x455469['gIbUC']};if(_0x455469['dzzUs'](_0x4c0940['statusCode'],0xc8)){if(_0x38492c){_0x455469['PTgXS'](wxReadFile,_0x2f612d,_0x51578d,!![]);}else{fs['unzip']({'zipFilePath':_0x4c0940['filePath']||_0x4c0940['tempFilePath'],'targetPath':rootPath,'success'(_0x36840c){_0xd6f86c['Ibfpn'](wxReadFile,_0x102f1d,_0x7d5aa4,!![]);},'fail'(_0x19c3a5){console['log'](_0x19c3a5,_0xd6f86c['YROaC']);}});}}else{console['error'](_0x455469['ySciK']);fs['unlink']({'filePath':rootPath+'/'+_0x5ef84b+'/'+_0x51578d+_0x38492c,'success'(_0xb257e9){},'fail'(_0x2471f2){}});}},'fail'(_0x5c787a){console['log'](_0x5c787a,_0x455469['WLDZh']);}});});}});}}function intoGame(){var _0x17a83b={'wGlvf':'ver.json','ObZmE':function(_0x36f9f1,_0x3a53d4){return _0x36f9f1+_0x3a53d4;},'GOkXQ':'/ver.json','stzFq':function(_0x55f77d,_0x1bf03a){return _0x55f77d+_0x1bf03a;},'FNzRt':function(_0x42ee0c,_0x393c6c){return _0x42ee0c+_0x393c6c;},'bkPNm':function(_0x380faf,_0x2e1c57){return _0x380faf/_0x2e1c57;},'aniOc':'Main','acHxy':'auto','xsFMP':'fixedNarrow','CtPgz':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','xSPIj':'webgl','sZlil':function(_0x162afa,_0x54af08){return _0x162afa(_0x54af08);},'IHAKm':'./library/userfilemgr.js','PNuSR':function(_0x2520c6,_0x19706a){return _0x2520c6(_0x19706a);},'QjIne':'./weapp-adapter.js','pFwsL':function(_0x1adb2a,_0x34acf6){return _0x1adb2a(_0x34acf6);},'TLfEW':'./senjin_wx_xxtx_littleGame.js','Qmbzg':function(_0x4d4ae7,_0x1d35b0){return _0x4d4ae7(_0x1d35b0);},'bojUf':'./platform.js','mLYbD':'./manifest.js','CVOYq':'./egret.wxgame.js','BxIZT':function(_0x13b3f9,_0x25071a){return _0x13b3f9===_0x25071a;},'nzBdn':'function','Ahojl':'./library/image.js','IWSmc':function(_0x42988d,_0x20c3ad){return _0x42988d(_0x20c3ad);},'dOOUy':'./library/text.js','eFGXn':'./library/sound.js','BGpDD':function(_0x30adde,_0x4d5f81){return _0x30adde(_0x4d5f81);},'pzvrw':'./library/binary.js','iXjwL':'https://z1c.h5eco.com/1/z1client/','rvOZc':'https://z1api.h5eco.com/','sKqfN':function(_0x1e265d,_0x3171dc){return _0x1e265d+_0x3171dc;},'mqDEa':'/ev.json'};const {userfileMgr}=_0x17a83b['sZlil'](require,_0x17a83b['IHAKm']);_0x17a83b['PNuSR'](require,_0x17a83b['QjIne']);_0x17a83b['pFwsL'](require,_0x17a83b['TLfEW']);_0x17a83b['Qmbzg'](require,_0x17a83b['bojUf']);_0x17a83b['Qmbzg'](require,_0x17a83b['mLYbD']);_0x17a83b['Qmbzg'](require,_0x17a83b['CVOYq']);if(_0x17a83b['BxIZT'](typeof wx['getUpdateManager'],_0x17a83b['nzBdn'])){const _0xdb315c=wx['getUpdateManager']();_0xdb315c['onCheckForUpdate'](function(_0x3f5100){console['log']('-------',_0x3f5100);});_0xdb315c['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0xdb315c['applyUpdate']();});_0xdb315c['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x17a83b['Qmbzg'](require,_0x17a83b['Ahojl']);_0x17a83b['IWSmc'](require,_0x17a83b['dOOUy']);_0x17a83b['IWSmc'](require,_0x17a83b['eFGXn']);_0x17a83b['BGpDD'](require,_0x17a83b['pzvrw']);}window['alert']=console['error'];window['verData']={};window['urlParam']={'apptype':'3','root':_0x17a83b['iXjwL'],'apiRoot':_0x17a83b['rvOZc'],'reportRoot':'https://z1back.h5eco.com/','ev':91};window['getUrl']=_0x59828b=>{if(~_0x59828b['indexOf'](_0x17a83b['wGlvf']))return _0x17a83b['ObZmE'](_0x17a83b['ObZmE'](urlParam['root'],urlParam['gv']),_0x17a83b['GOkXQ']);let _0x389228=urlParam['gv']||urlParam['ev'];return _0x17a83b['stzFq'](_0x17a83b['FNzRt'](urlParam['root'],_0x389228?_0x17a83b['FNzRt'](verData[_0x59828b]||0x0,'/'):''),_0x59828b);};wx['request']({'url':_0x17a83b['sKqfN'](_0x17a83b['sKqfN'](urlParam['root'],urlParam['ev']),_0x17a83b['mqDEa']),'success':_0x16d90b=>window['verData']=_0x16d90b['data'],'complete':()=>{egret['runEgret']({'entryClassName':_0x17a83b['aniOc'],'orientation':_0x17a83b['acHxy'],'frameRate':0x3c,'scaleMode':_0x17a83b['xsFMP'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x17a83b['CtPgz'],'showLog':![],'maxTouches':0x2,'renderMode':_0x17a83b['xSPIj'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x24a568){var _0x5004c7=_0x24a568['backingStorePixelRatio']||_0x24a568['webkitBackingStorePixelRatio']||_0x24a568['mozBackingStorePixelRatio']||_0x24a568['msBackingStorePixelRatio']||_0x24a568['oBackingStorePixelRatio']||_0x24a568['backingStorePixelRatio']||0x1;return _0x17a83b['bkPNm'](window['devicePixelRatio']||0x1,_0x5004c7);}});}});}function intoMiniGame(){var _0x14b671={'qmFcK':function(_0x445c29,_0x5665b4){return _0x445c29(_0x5665b4);},'kBxYJ':'./challenge/DoiBdmkpmain'};const _0xf44b7a=_0x14b671['qmFcK'](require,_0x14b671['kBxYJ']);new _0xf44b7a['default']();}