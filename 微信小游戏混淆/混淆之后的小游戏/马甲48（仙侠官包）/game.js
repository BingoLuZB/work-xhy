const versions='1.0.0';const gameId=48;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj48';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201029_platform','20201029_assetsmanager','20201029_default','20201029_entry','20201029_eui','20201029_particle','20201029_socket','20201029_tween','20201029_main.zip'];judgegame()['then'](()=>{var _0x16c026={'cSCHf':function(_0x444fff){return _0x444fff();}};_0x16c026['cSCHf'](getJsonToGame);})['catch'](()=>{var _0x448480={'pidQu':function(_0x1d1fef){return _0x1d1fef();}};_0x448480['pidQu'](intoMiniGame);});function judgegame(){var _0x3f3b2b={'HbHTg':function(_0x44b187,_0x4bc92e){return _0x44b187==_0x4bc92e;},'qMSEk':function(_0x5a00d1,_0x3619a9){return _0x5a00d1==_0x3619a9;},'GwqCp':function(_0x10b915){return _0x10b915();},'eHnXp':'https://gminiapi.xinghe66.cn/mp/index','IdfVU':'GET','dpBQV':'json'};return new Promise((_0xd58721,_0xbdeca9)=>{var _0x159e77={'gUNtb':function(_0x5854eb,_0xb4a01d){return _0x3f3b2b['HbHTg'](_0x5854eb,_0xb4a01d);},'Lwlci':function(_0x485443,_0x2150cc){return _0x3f3b2b['qMSEk'](_0x485443,_0x2150cc);},'RoHqF':function(_0x536ff2){return _0x3f3b2b['GwqCp'](_0x536ff2);}};wx['request']({'url':_0x3f3b2b['eHnXp'],'method':_0x3f3b2b['IdfVU'],'data':{'app_id':gameId,'versions':versions,'format':_0x3f3b2b['dpBQV']},'success'(_0x29db9c){if(_0x159e77['gUNtb'](_0x29db9c['data']['code'],0xc8)&&_0x159e77['Lwlci'](_0x29db9c['data']['data']['status'],0x2)){_0x159e77['RoHqF'](_0xbdeca9);}else{_0x159e77['RoHqF'](_0xd58721);}},'fail'(){_0x159e77['RoHqF'](_0xbdeca9);}});});}function hasJsonToGame(_0x4ec375,_0xcc1216){var _0x4ac024={'FdkGd':function(_0x4e0cfa,_0x2b362d){return _0x4e0cfa-_0x2b362d;},'UebFv':function(_0x256c0d,_0x433795){return _0x256c0d==_0x433795;},'rfcCx':function(_0x3d1305){return _0x3d1305();}};GameGlobal[_0x4ec375]=JSON['parse'](_0xcc1216);let _0x4f6a15=_0x4ac024['FdkGd'](jsonList['length'],0x1);if(_0x4ac024['UebFv'](num,_0x4f6a15)){console['log'](0x15b3);_0x4ac024['rfcCx'](intoGame);}num++;}function wxReadFile(_0x116c8c,_0x4978de,_0x325864){var _0x50ecff={'ZtcdK':function(_0x1864ce,_0x1af06f,_0x112e8a){return _0x1864ce(_0x1af06f,_0x112e8a);},'zAZSh':function(_0x9a6d3e,_0x788a50){return _0x9a6d3e(_0x788a50);},'bgSCP':function(_0x1c5910,_0x3fc7cd){return _0x1c5910(_0x3fc7cd);},'TfxTr':'utf-8'};return new Promise((_0x154f28,_0x112e27)=>{var _0x325186={'ukUFi':function(_0x5b156f,_0x74bd43){return _0x50ecff['bgSCP'](_0x5b156f,_0x74bd43);}};fs['readFile']({'filePath':_0x116c8c,'encoding':_0x50ecff['TfxTr'],'success'(_0x29821d){if(_0x325864&&_0x29821d['data']){_0x50ecff['ZtcdK'](hasJsonToGame,_0x4978de,_0x29821d['data']);}_0x50ecff['zAZSh'](_0x154f28,_0x29821d);},'fail'(_0x445b5e){_0x325186['ukUFi'](_0x112e27,_0x445b5e);}});});}function getJsonToGame(){var _0x4900db={'uHEoc':function(_0x7dd55c,_0x21b2e5,_0x5debee){return _0x7dd55c(_0x21b2e5,_0x5debee);},'JizQn':function(_0x481284,_0x35cc20,_0x4c29b0,_0x4d3e18){return _0x481284(_0x35cc20,_0x4c29b0,_0x4d3e18);},'SlJjB':function(_0x467ca0,_0x31d6b6,_0x5b526a,_0x261148){return _0x467ca0(_0x31d6b6,_0x5b526a,_0x261148);},'gnPXI':'==解压失败','xOsbS':function(_0x1efcce,_0x1aedf4){return _0x1efcce===_0x1aedf4;},'zeagl':'下载失败，文件不存在','qdGel':function(_0x5e668c){return _0x5e668c();},'YdLDH':'====下载失败','GwNHX':function(_0x405b8b,_0x79d0ea){return _0x405b8b(_0x79d0ea);},'UEDZS':function(_0x400c5e,_0x2f99ea){return _0x400c5e<_0x2f99ea;},'QVJoN':'.zip','IrDHk':'.json'};for(let _0x391662=0x0;_0x4900db['UEDZS'](_0x391662,jsonList['length']);_0x391662++){let _0x55e197=jsonList[_0x391662]['split']('_')[0x0];let _0xb7a51e=jsonList[_0x391662]['split']('_')[0x1];let _0x59fb02=_0xb7a51e['includes'](_0x4900db['QVJoN'])?'':_0x4900db['IrDHk'];const _0x247c0f=rootPath+'/'+_0x55e197+'/'+_0xb7a51e+_0x59fb02;const _0xc7762b=!_0x59fb02&&_0xb7a51e['split']('.')[0x0];const _0x36b659=rootPath+'/'+_0xc7762b+'.json';fs['access']({'path':rootPath+'/'+_0x55e197,'success'(_0x72433b){},'fail'(_0x469fa2){fs['mkdir']({'dirPath':rootPath+'/'+_0x55e197,'recursive':!![],'success'(_0x373e64){}});},'complete'(){var _0x39eba6={'Yzzjs':function(_0x52cc49,_0x56392c,_0x7f9769,_0x42ae58){return _0x4900db['SlJjB'](_0x52cc49,_0x56392c,_0x7f9769,_0x42ae58);},'hvtYV':_0x4900db['gnPXI'],'vYqvE':function(_0x5416ec,_0x4832a1){return _0x4900db['xOsbS'](_0x5416ec,_0x4832a1);},'dMEiM':function(_0x4b8e31,_0x16071d,_0x2b892d,_0x5c5fa3){return _0x4900db['SlJjB'](_0x4b8e31,_0x16071d,_0x2b892d,_0x5c5fa3);},'UmnNY':_0x4900db['zeagl'],'uCbgS':function(_0x186434){return _0x4900db['qdGel'](_0x186434);},'WFwGV':_0x4900db['YdLDH']};_0x4900db['GwNHX'](wxReadFile,_0x247c0f)['then'](_0x4717d1=>{if(_0x59fb02){_0x4900db['uHEoc'](hasJsonToGame,_0xb7a51e,_0x4717d1['data']);}else{_0x4900db['JizQn'](wxReadFile,_0x36b659,_0xc7762b,!![]);}})['catch'](_0x372726=>{var _0x31685b={'daCcx':_0x39eba6['WFwGV']};wx['downloadFile']({'url':downloadUrl+'/'+_0x55e197+'/'+_0xb7a51e+_0x59fb02,'timeout':0x2710,'filePath':_0x247c0f,'success'(_0x2ffe9c){var _0x134c4b={'hHkSz':function(_0x1d9dc5,_0x232313,_0x2cc289,_0x2aeb1){return _0x39eba6['Yzzjs'](_0x1d9dc5,_0x232313,_0x2cc289,_0x2aeb1);},'jwtdL':_0x39eba6['hvtYV']};if(_0x39eba6['vYqvE'](_0x2ffe9c['statusCode'],0xc8)){if(_0x59fb02){_0x39eba6['dMEiM'](wxReadFile,_0x247c0f,_0xb7a51e,!![]);}else{fs['unzip']({'zipFilePath':_0x2ffe9c['filePath']||_0x2ffe9c['tempFilePath'],'targetPath':rootPath,'success'(_0x585778){_0x134c4b['hHkSz'](wxReadFile,_0x36b659,_0xc7762b,!![]);},'fail'(_0x19241c){console['log'](_0x19241c,_0x134c4b['jwtdL']);}});}}else{console['error'](_0x39eba6['UmnNY']);fs['unlink']({'filePath':rootPath+'/'+_0x55e197+'/'+_0xb7a51e+_0x59fb02,'success'(_0x423e14){},'fail'(_0x20bdd2){}});_0x39eba6['uCbgS'](intoMiniGame);}},'fail'(_0x5cd876){console['log'](_0x5cd876,_0x31685b['daCcx']);}});});}});}}function intoGame(){var _0x28e252={'PTDDW':'ver.json','nqzIM':function(_0x8516c1,_0x232424){return _0x8516c1+_0x232424;},'rmRPa':function(_0x129684,_0x2f61e9){return _0x129684+_0x2f61e9;},'lbAXP':'/ver.json','deiLs':function(_0x39d594,_0x3b3141){return _0x39d594+_0x3b3141;},'iIrxw':function(_0x39e9d7,_0xd95973){return _0x39e9d7/_0xd95973;},'JEPKh':'Main','xdDoJ':'auto','MHvQx':'fixedNarrow','hiNRO':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','DQkAP':'webgl','KfvCt':function(_0xc88348,_0x324fea){return _0xc88348(_0x324fea);},'MfycX':'./library/userfilemgr.js','syFDX':function(_0x9c6928,_0x29ca4b){return _0x9c6928(_0x29ca4b);},'pAxKh':'./weapp-adapter.js','YfEJK':'./senjin_wx_xxtx_littleGame.js','OblJt':function(_0x38a163,_0x1834a1){return _0x38a163(_0x1834a1);},'laVFb':'./platform.js','PYkve':'./manifest.js','lzuCD':function(_0x3ce0f7,_0x368aea){return _0x3ce0f7(_0x368aea);},'HSxxe':'./egret.wxgame.js','oxKCn':function(_0x40662c,_0x4a65a0){return _0x40662c===_0x4a65a0;},'xsjMd':'function','OSESo':'./library/image.js','aIMTd':'./library/text.js','FIqaP':'./library/sound.js','cklFV':'./library/binary.js','JSuPE':'https://z1c.h5eco.com/1/z1client/','vRqsO':'https://z1api.h5eco.com/','yyRzp':function(_0x5db0e9,_0x392748){return _0x5db0e9+_0x392748;},'boRGO':'/ev.json'};const {userfileMgr}=_0x28e252['KfvCt'](require,_0x28e252['MfycX']);_0x28e252['syFDX'](require,_0x28e252['pAxKh']);_0x28e252['syFDX'](require,_0x28e252['YfEJK']);_0x28e252['OblJt'](require,_0x28e252['laVFb']);_0x28e252['OblJt'](require,_0x28e252['PYkve']);_0x28e252['lzuCD'](require,_0x28e252['HSxxe']);if(_0x28e252['oxKCn'](typeof wx['getUpdateManager'],_0x28e252['xsjMd'])){const _0x1b84e2=wx['getUpdateManager']();_0x1b84e2['onCheckForUpdate'](function(_0x58370c){console['log']('-------',_0x58370c);});_0x1b84e2['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x1b84e2['applyUpdate']();});_0x1b84e2['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x28e252['lzuCD'](require,_0x28e252['OSESo']);_0x28e252['lzuCD'](require,_0x28e252['aIMTd']);_0x28e252['lzuCD'](require,_0x28e252['FIqaP']);_0x28e252['lzuCD'](require,_0x28e252['cklFV']);}window['alert']=console['error'];window['verData']={};window['urlParam']={'apptype':'3','root':_0x28e252['JSuPE'],'apiRoot':_0x28e252['vRqsO'],'reportRoot':'https://z1back.h5eco.com/','ev':0x5c};window['getUrl']=_0x31b9c4=>{if(~_0x31b9c4['indexOf'](_0x28e252['PTDDW']))return _0x28e252['nqzIM'](_0x28e252['rmRPa'](urlParam['root'],urlParam['gv']),_0x28e252['lbAXP']);let _0x20a064=urlParam['gv']||urlParam['ev'];return _0x28e252['rmRPa'](_0x28e252['rmRPa'](urlParam['root'],_0x20a064?_0x28e252['deiLs'](verData[_0x31b9c4]||0x0,'/'):''),_0x31b9c4);};wx['request']({'url':_0x28e252['deiLs'](_0x28e252['yyRzp'](urlParam['root'],urlParam['ev']),_0x28e252['boRGO']),'success':_0x3df697=>window['verData']=_0x3df697['data'],'complete':()=>{var _0x40eec4={'cNjAU':function(_0x3b213e,_0x4dab52){return _0x28e252['iIrxw'](_0x3b213e,_0x4dab52);}};egret['runEgret']({'entryClassName':_0x28e252['JEPKh'],'orientation':_0x28e252['xdDoJ'],'frameRate':0x3c,'scaleMode':_0x28e252['MHvQx'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x28e252['hiNRO'],'showLog':![],'maxTouches':0x2,'renderMode':_0x28e252['DQkAP'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x5be99c){var _0x48084a=_0x5be99c['backingStorePixelRatio']||_0x5be99c['webkitBackingStorePixelRatio']||_0x5be99c['mozBackingStorePixelRatio']||_0x5be99c['msBackingStorePixelRatio']||_0x5be99c['oBackingStorePixelRatio']||_0x5be99c['backingStorePixelRatio']||0x1;return _0x40eec4['cNjAU'](window['devicePixelRatio']||0x1,_0x48084a);}});}});}function intoMiniGame(){var _0x84de3={'RoViC':function(_0x4bd858,_0x2b7c23){return _0x4bd858(_0x2b7c23);},'wcZRL':'./MYGAME/js/main'};const _0x269009=_0x84de3['RoViC'](require,_0x84de3['wcZRL']);new _0x269009['default']();}