const versions='1.0.0';const gameId=0x90;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201120_platform','20201120_assetsmanager','20201120_default','20201120_entry','20201120_particle','20201120_socket','20201120_tween','20201120_main.zip','20201120_subpack.zip'];judgegame()['then'](()=>{var _0x18a498={'guvkH':function(_0x243b30){return _0x243b30();}};_0x18a498['guvkH'](getJsonToGame);})['catch'](()=>{var _0x127b6e={'rxcLr':function(_0x22deb8){return _0x22deb8();}};_0x127b6e['rxcLr'](intoMiniGame);});function judgegame(){var _0x3b0232={'LtcUG':function(_0x2ce5a8,_0x55659f){return _0x2ce5a8==_0x55659f;},'RyZOz':function(_0x417d2d,_0x351c11){return _0x417d2d==_0x351c11;},'ctKVi':function(_0x44abdf){return _0x44abdf();},'dXtUI':'https://gminiapi.xinghe66.cn/mp/index','xpvVQ':'GET','HmUab':'json'};return new Promise((_0x52cc93,_0x4eada3)=>{var _0x520bf4={'XigMt':function(_0x3e2dfc,_0x1052e4){return _0x3b0232['LtcUG'](_0x3e2dfc,_0x1052e4);},'FPBrn':function(_0x5276f3,_0xbf6db2){return _0x3b0232['RyZOz'](_0x5276f3,_0xbf6db2);},'XZibM':function(_0x2c8205){return _0x3b0232['ctKVi'](_0x2c8205);}};wx['request']({'url':_0x3b0232['dXtUI'],'method':_0x3b0232['xpvVQ'],'data':{'app_id':gameId,'versions':versions,'format':_0x3b0232['HmUab']},'success'(_0x16fed3){if(_0x520bf4['XigMt'](_0x16fed3['data']['code'],0xc8)&&_0x520bf4['FPBrn'](_0x16fed3['data']['data']['status'],0x2)){_0x520bf4['XZibM'](_0x4eada3);}else{_0x520bf4['XZibM'](_0x52cc93);}},'fail'(){_0x520bf4['XZibM'](_0x4eada3);}});});}function hasJsonToGame(_0x1489d3,_0x14eb4a){var _0x2586f4={'dJLGP':function(_0x1f3b85,_0x2a8d8a){return _0x1f3b85-_0x2a8d8a;},'JwcRa':function(_0x434778,_0x289ecf){return _0x434778==_0x289ecf;},'yViFf':function(_0x1b20c2){return _0x1b20c2();}};GameGlobal[_0x1489d3]=JSON['parse'](_0x14eb4a);let _0x451d32=_0x2586f4['dJLGP'](jsonList['length'],0x1);if(_0x2586f4['JwcRa'](num,_0x451d32)){console['log'](0x15b3);_0x2586f4['yViFf'](intoGame);}num++;}function wxReadFile(_0x9a30b3,_0x44266e,_0x533bc1){var _0x16a669={'tJicK':function(_0x205542,_0x252ca3,_0x42a69c){return _0x205542(_0x252ca3,_0x42a69c);},'wWgPO':function(_0x2dfd06,_0x74d8f7){return _0x2dfd06(_0x74d8f7);},'iFJXY':'utf-8'};return new Promise((_0x4b7f2d,_0x418949)=>{var _0x24f002={'lsaFF':function(_0x504dcc,_0x291472){return _0x16a669['wWgPO'](_0x504dcc,_0x291472);}};fs['readFile']({'filePath':_0x9a30b3,'encoding':_0x16a669['iFJXY'],'success'(_0x96c704){if(_0x533bc1&&_0x96c704['data']){_0x16a669['tJicK'](hasJsonToGame,_0x44266e,_0x96c704['data']);}_0x16a669['wWgPO'](_0x4b7f2d,_0x96c704);},'fail'(_0x15fb94){_0x24f002['lsaFF'](_0x418949,_0x15fb94);}});});}function getJsonToGame(){var _0x450a31={'nTFQK':function(_0xee3aae,_0x2b6595,_0x41cfbf){return _0xee3aae(_0x2b6595,_0x41cfbf);},'rBxsc':function(_0x3f6caf,_0x2ddbc3,_0xd46984,_0x22ef0c){return _0x3f6caf(_0x2ddbc3,_0xd46984,_0x22ef0c);},'ZHxYK':function(_0x307201,_0x522963){return _0x307201===_0x522963;},'QCCBi':function(_0x14d667,_0xf5e1c6,_0x278743,_0x25daa0){return _0x14d667(_0xf5e1c6,_0x278743,_0x25daa0);},'hIaHK':'下载失败，文件不存在','LMXnL':function(_0x374410){return _0x374410();},'IGRlo':'==解压失败','AAnQL':'====下载失败','SOeFJ':function(_0x117850,_0x4a50dc){return _0x117850(_0x4a50dc);},'ARJWp':function(_0x42272c,_0x588056){return _0x42272c<_0x588056;},'JtAqo':'.zip','vRXje':'.json'};for(let _0x417d9d=0x0;_0x450a31['ARJWp'](_0x417d9d,jsonList['length']);_0x417d9d++){let _0x2fc0b6=jsonList[_0x417d9d]['split']('_')[0x0];let _0x3e84b6=jsonList[_0x417d9d]['split']('_')[0x1];let _0x3146fd=_0x3e84b6['includes'](_0x450a31['JtAqo'])?'':_0x450a31['vRXje'];const _0x540314=rootPath+'/'+_0x2fc0b6+'/'+_0x3e84b6+_0x3146fd;const _0x59c3f8=!_0x3146fd&&_0x3e84b6['split']('.')[0x0];const _0x3d3596=rootPath+'/'+_0x59c3f8+'.json';fs['access']({'path':rootPath+'/'+_0x2fc0b6,'success'(_0x4ba362){},'fail'(_0x1a4faf){fs['mkdir']({'dirPath':rootPath+'/'+_0x2fc0b6,'recursive':!![],'success'(_0x2392ab){}});},'complete'(){var _0xbde5f3={'lClqc':function(_0x453cc1,_0x166a55){return _0x450a31['ZHxYK'](_0x453cc1,_0x166a55);},'TmQmW':function(_0x4278fb,_0x42cb9b,_0x5e0e2a,_0x2a4b61){return _0x450a31['QCCBi'](_0x4278fb,_0x42cb9b,_0x5e0e2a,_0x2a4b61);},'RzdCL':_0x450a31['hIaHK'],'XxFAN':function(_0x5df5be){return _0x450a31['LMXnL'](_0x5df5be);},'UzfGV':_0x450a31['IGRlo'],'YyBWJ':_0x450a31['AAnQL']};_0x450a31['SOeFJ'](wxReadFile,_0x540314)['then'](_0x4aecb7=>{if(_0x3146fd){_0x450a31['nTFQK'](hasJsonToGame,_0x3e84b6,_0x4aecb7['data']);}else{_0x450a31['rBxsc'](wxReadFile,_0x3d3596,_0x59c3f8,!![]);}})['catch'](_0x120015=>{var _0x315a00={'vImBc':function(_0xcb8744,_0xf40511,_0x4f0487,_0x5e9702){return _0xbde5f3['TmQmW'](_0xcb8744,_0xf40511,_0x4f0487,_0x5e9702);},'moHGQ':_0xbde5f3['UzfGV'],'hypPA':_0xbde5f3['YyBWJ']};wx['downloadFile']({'url':downloadUrl+'/'+_0x2fc0b6+'/'+_0x3e84b6+_0x3146fd,'timeout':0x2710,'filePath':_0x540314,'success'(_0x6749ba){if(_0xbde5f3['lClqc'](_0x6749ba['statusCode'],0xc8)){if(_0x3146fd){_0xbde5f3['TmQmW'](wxReadFile,_0x540314,_0x3e84b6,!![]);}else{fs['unzip']({'zipFilePath':_0x6749ba['filePath']||_0x6749ba['tempFilePath'],'targetPath':rootPath,'success'(_0x284aae){_0x315a00['vImBc'](wxReadFile,_0x3d3596,_0x59c3f8,!![]);},'fail'(_0x8baa91){console['log'](_0x8baa91,_0x315a00['moHGQ']);}});}}else{console['error'](_0xbde5f3['RzdCL']);fs['unlink']({'filePath':rootPath+'/'+_0x2fc0b6+'/'+_0x3e84b6+_0x3146fd,'success'(_0x24348c){},'fail'(_0xb8edab){}});_0xbde5f3['XxFAN'](intoMiniGame);}},'fail'(_0x1d9880){console['log'](_0x1d9880,_0x315a00['hypPA']);}});});}});}}function intoGame(){var _0x28e2cb={'CBKGN':'ver.json','nvUgN':function(_0x93216a,_0x1310f8){return _0x93216a+_0x1310f8;},'yeYRe':'/ver.json','JOfwm':function(_0x41f497,_0xf1575d){return _0x41f497+_0xf1575d;},'okOSc':function(_0x344b38,_0x23649c){return _0x344b38+_0x23649c;},'YtEIt':function(_0x1935af,_0x26946d){return _0x1935af/_0x26946d;},'vBFXI':'Main','DerWR':'auto','jevTy':'fixedNarrow','VUuxV':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','DWeuG':'webgl','xBhOH':function(_0x399862,_0x4cd648){return _0x399862(_0x4cd648);},'gxkFS':'./library/userfilemgr.js','SjYNT':function(_0x4c59a4,_0x331bc4){return _0x4c59a4(_0x331bc4);},'REMNB':'./weapp-adapter.js','hkEXs':function(_0x1106e2,_0x16976d){return _0x1106e2(_0x16976d);},'NeNaa':'./senjin_wx_xxtx_littleGame.js','xPPFh':'./platform.js','NhkDO':function(_0x584879,_0x2edab9){return _0x584879(_0x2edab9);},'xXzdz':'./manifest.js','GPmcV':function(_0xc683a2,_0x350ce3){return _0xc683a2(_0x350ce3);},'EnEdR':'./egret.wxgame.js','gQlAp':function(_0x4892a7,_0x5948c8){return _0x4892a7===_0x5948c8;},'KXtYR':'function','HWKwo':'./library/image.js','gAELT':'./library/text.js','glYlE':function(_0xf36063,_0x453e24){return _0xf36063(_0x453e24);},'uIqtI':'./library/sound.js','KweTz':function(_0x54650a,_0x13efcc){return _0x54650a(_0x13efcc);},'VugMd':'./library/binary.js','QpsTz':'https://z1c.h5eco.com/1/z1client/','VKvph':'https://mzapi.h5eco.com/z1/','chXEy':'/ev.json'};const {userfileMgr}=_0x28e2cb['xBhOH'](require,_0x28e2cb['gxkFS']);_0x28e2cb['SjYNT'](require,_0x28e2cb['REMNB']);_0x28e2cb['hkEXs'](require,_0x28e2cb['NeNaa']);_0x28e2cb['hkEXs'](require,_0x28e2cb['xPPFh']);_0x28e2cb['NhkDO'](require,_0x28e2cb['xXzdz']);_0x28e2cb['GPmcV'](require,_0x28e2cb['EnEdR']);if(_0x28e2cb['gQlAp'](typeof wx['getUpdateManager'],_0x28e2cb['KXtYR'])){const _0x442047=wx['getUpdateManager']();_0x442047['onCheckForUpdate'](function(_0x2ea8de){console['log']('-------',_0x2ea8de);});_0x442047['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x442047['applyUpdate']();});_0x442047['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x28e2cb['GPmcV'](require,_0x28e2cb['HWKwo']);_0x28e2cb['GPmcV'](require,_0x28e2cb['gAELT']);_0x28e2cb['glYlE'](require,_0x28e2cb['uIqtI']);_0x28e2cb['KweTz'](require,_0x28e2cb['VugMd']);}window['alert']=console['error'];window['verData']={};window['evData']={};window['urlParam']={'apptype':'3','root':_0x28e2cb['QpsTz'],'apiRoot':_0x28e2cb['VKvph'],'reportRoot':'https://z1back.h5eco.com/','ev':0x68};window['getUrl']=_0x450890=>{if(~_0x450890['indexOf'](_0x28e2cb['CBKGN']))return _0x28e2cb['nvUgN'](_0x28e2cb['nvUgN'](urlParam['root'],urlParam['gv']),_0x28e2cb['yeYRe']);let _0x4d7566=urlParam['gv']||urlParam['ev'];return _0x28e2cb['JOfwm'](_0x28e2cb['okOSc'](urlParam['root'],_0x4d7566?_0x28e2cb['okOSc'](evData[_0x450890]||verData[_0x450890]||0x0,'/'):''),_0x450890);};wx['request']({'url':_0x28e2cb['okOSc'](_0x28e2cb['okOSc'](urlParam['root'],urlParam['ev']),_0x28e2cb['chXEy']),'success':_0x4a1e12=>window['evData']=_0x4a1e12['data'],'complete':()=>{var _0x5add3a={'NZYKF':function(_0x133d4b,_0x1bd957){return _0x28e2cb['YtEIt'](_0x133d4b,_0x1bd957);}};egret['runEgret']({'entryClassName':_0x28e2cb['vBFXI'],'orientation':_0x28e2cb['DerWR'],'frameRate':0x3c,'scaleMode':_0x28e2cb['jevTy'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x28e2cb['VUuxV'],'showLog':![],'maxTouches':0x2,'renderMode':_0x28e2cb['DWeuG'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x5eab4e){var _0x38c641=_0x5eab4e['backingStorePixelRatio']||_0x5eab4e['webkitBackingStorePixelRatio']||_0x5eab4e['mozBackingStorePixelRatio']||_0x5eab4e['msBackingStorePixelRatio']||_0x5eab4e['oBackingStorePixelRatio']||_0x5eab4e['backingStorePixelRatio']||0x1;return _0x5add3a['NZYKF'](window['devicePixelRatio']||0x1,_0x38c641);}});}});}function intoMiniGame(){var _0x5b11c7={'CtqYQ':function(_0x1acef0,_0x120c95){return _0x1acef0(_0x120c95);},'VcQfu':'./MYGAME/js/main'};const _0x47539e=_0x5b11c7['CtqYQ'](require,_0x5b11c7['VcQfu']);new _0x47539e['default']();}