const versions='1.0.1';const gameId=0xe;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj14';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20200927_platform','20200927_assetsmanager','20200927_default','20200927_entry','20200927_particle','20200927_socket','20200927_tween','20200927_main.zip'];judgegame()['then'](()=>{var _0x40c0b9={'ZKLAv':function(_0x63a9e0){return _0x63a9e0();}};_0x40c0b9['ZKLAv'](getJsonToGame);})['catch'](()=>{var _0x3e6ccb={'DSroy':function(_0x1d6fbe){return _0x1d6fbe();}};_0x3e6ccb['DSroy'](intoMiniGame);});function judgegame(){var _0x1d4844={'rEGdS':function(_0x2215c8,_0x26b8b0){return _0x2215c8==_0x26b8b0;},'kQBPh':function(_0xd9771a,_0x1b1f2e){return _0xd9771a==_0x1b1f2e;},'bbxVx':function(_0x170dfd){return _0x170dfd();},'ewjAU':function(_0x2a2ec0){return _0x2a2ec0();},'fKYBI':'https://gminiapi.xinghe66.cn/mp/index','mbkXj':'GET','LFBxl':'json'};return new Promise((_0x50dbe9,_0x39831e)=>{var _0x6105ae={'CVdSl':function(_0x129a30){return _0x1d4844['ewjAU'](_0x129a30);}};wx['request']({'url':_0x1d4844['fKYBI'],'method':_0x1d4844['mbkXj'],'data':{'app_id':gameId,'versions':versions,'format':_0x1d4844['LFBxl']},'success'(_0x5d4850){if(_0x1d4844['rEGdS'](_0x5d4850['data']['code'],0xc8)&&_0x1d4844['kQBPh'](_0x5d4850['data']['data']['status'],0x2)){_0x1d4844['bbxVx'](_0x39831e);}else{_0x1d4844['bbxVx'](_0x50dbe9);}},'fail'(){_0x6105ae['CVdSl'](_0x39831e);}});});}function hasJsonToGame(_0x36cfee,_0x4e9260){var _0x1adf94={'juJCm':function(_0x1c4d69,_0x4b4112){return _0x1c4d69-_0x4b4112;},'saHAW':function(_0x2a1370,_0x3587a2){return _0x2a1370==_0x3587a2;},'xrAQh':function(_0x5f1920){return _0x5f1920();}};GameGlobal[_0x36cfee]=JSON['parse'](_0x4e9260);let _0x58e189=_0x1adf94['juJCm'](jsonList['length'],0x1);if(_0x1adf94['saHAW'](num,_0x58e189)){console['log'](0x15b3);_0x1adf94['xrAQh'](intoGame);}num++;}function wxReadFile(_0x2dd207,_0x59fd17,_0x1a4566){var _0x530582={'llOdZ':function(_0x40911e,_0x4ca736,_0x1234c5){return _0x40911e(_0x4ca736,_0x1234c5);},'NqQtX':function(_0x242e6c,_0x354495){return _0x242e6c(_0x354495);},'ClxHb':'utf-8'};return new Promise((_0x121b2a,_0x11fefa)=>{var _0x394305={'vuqrM':function(_0x377651,_0x21f5eb,_0x55851a){return _0x530582['llOdZ'](_0x377651,_0x21f5eb,_0x55851a);},'uFjvf':function(_0xcfa40a,_0x1a441b){return _0x530582['NqQtX'](_0xcfa40a,_0x1a441b);}};fs['readFile']({'filePath':_0x2dd207,'encoding':_0x530582['ClxHb'],'success'(_0x246eb3){if(_0x1a4566&&_0x246eb3['data']){_0x394305['vuqrM'](hasJsonToGame,_0x59fd17,_0x246eb3['data']);}_0x394305['uFjvf'](_0x121b2a,_0x246eb3);},'fail'(_0x406508){_0x394305['uFjvf'](_0x11fefa,_0x406508);}});});}function getJsonToGame(){var _0x5239f4={'zziKU':function(_0x512fb5,_0x3bd589,_0x521613){return _0x512fb5(_0x3bd589,_0x521613);},'XXlIO':function(_0x5a9a8a,_0x16bf69,_0x44bf97,_0x809d02){return _0x5a9a8a(_0x16bf69,_0x44bf97,_0x809d02);},'EQDkK':'==解压失败','fPZLt':function(_0x1e5b16,_0x5dadc2){return _0x1e5b16===_0x5dadc2;},'fjtMR':function(_0x139308,_0x34675f,_0x57ef2e,_0x4898c1){return _0x139308(_0x34675f,_0x57ef2e,_0x4898c1);},'DPkSQ':'下载失败，文件不存在','KzhIX':'====下载失败','MCjnw':function(_0x206b68,_0x9e0d58){return _0x206b68(_0x9e0d58);},'vuTFx':function(_0x4a0061,_0x2f3dbd){return _0x4a0061<_0x2f3dbd;},'TIBqL':'.zip','IYXXO':'.json'};for(let _0xbcfe61=0x0;_0x5239f4['vuTFx'](_0xbcfe61,jsonList['length']);_0xbcfe61++){let _0x390b77=jsonList[_0xbcfe61]['split']('_')[0x0];let _0x4a3ad8=jsonList[_0xbcfe61]['split']('_')[0x1];let _0x3f1b6b=_0x4a3ad8['includes'](_0x5239f4['TIBqL'])?'':_0x5239f4['IYXXO'];const _0x23cb41=rootPath+'/'+_0x390b77+'/'+_0x4a3ad8+_0x3f1b6b;const _0xd86d61=!_0x3f1b6b&&_0x4a3ad8['split']('.')[0x0];const _0x1ee2ec=rootPath+'/'+_0xd86d61+'.json';fs['access']({'path':rootPath+'/'+_0x390b77,'success'(_0x394bc5){},'fail'(_0x472904){fs['mkdir']({'dirPath':rootPath+'/'+_0x390b77,'recursive':!![],'success'(_0x4af7b7){}});},'complete'(){var _0xdf3568={'YOhNh':function(_0x31d1e9,_0x147586,_0x75c7e1,_0x306830){return _0x5239f4['XXlIO'](_0x31d1e9,_0x147586,_0x75c7e1,_0x306830);},'zRGOW':function(_0x31c8ff,_0x275ce2){return _0x5239f4['fPZLt'](_0x31c8ff,_0x275ce2);},'iDIwN':function(_0x732a8,_0x5ddd29,_0x2fd99a,_0xac9c21){return _0x5239f4['fjtMR'](_0x732a8,_0x5ddd29,_0x2fd99a,_0xac9c21);},'WDfjD':_0x5239f4['DPkSQ'],'JNOPZ':_0x5239f4['KzhIX']};_0x5239f4['MCjnw'](wxReadFile,_0x23cb41)['then'](_0xb1299=>{if(_0x3f1b6b){_0x5239f4['zziKU'](hasJsonToGame,_0x4a3ad8,_0xb1299);}else{_0x5239f4['XXlIO'](wxReadFile,_0x1ee2ec,_0xd86d61,!![]);}})['catch'](_0x655e53=>{var _0x81298a={'AppZf':_0x5239f4['EQDkK']};wx['downloadFile']({'url':downloadUrl+'/'+_0x390b77+'/'+_0x4a3ad8+_0x3f1b6b,'filePath':_0x23cb41,'success'(_0x580c66){var _0x5ec742={'gqXhn':function(_0x3dffa4,_0x23122b,_0x49f833,_0x5b5cdf){return _0xdf3568['YOhNh'](_0x3dffa4,_0x23122b,_0x49f833,_0x5b5cdf);}};if(_0xdf3568['zRGOW'](_0x580c66['statusCode'],0xc8)){if(_0x3f1b6b){_0xdf3568['iDIwN'](wxReadFile,_0x23cb41,_0x4a3ad8,!![]);}else{fs['unzip']({'zipFilePath':_0x580c66['filePath']||_0x580c66['tempFilePath'],'targetPath':rootPath,'success'(_0x57039f){_0x5ec742['gqXhn'](wxReadFile,_0x1ee2ec,_0xd86d61,!![]);},'fail'(_0x105783){console['log'](_0x105783,_0x81298a['AppZf']);}});}}else{console['error'](_0xdf3568['WDfjD']);fs['unlink']({'filePath':rootPath+'/'+_0x390b77+'/'+_0x4a3ad8+_0x3f1b6b,'success'(_0x3b5843){},'fail'(_0xeccea8){}});}},'fail'(_0x195964){console['log'](_0x195964,_0xdf3568['JNOPZ']);}});});}});}}function intoGame(){var _0x121959={'fVUXT':'ver.json','tQIpN':function(_0x3d7776,_0x30dc33){return _0x3d7776+_0x30dc33;},'sGZXh':'/ver.json','OZoqa':function(_0x3cb681,_0x171f8a){return _0x3cb681+_0x171f8a;},'QcBdb':function(_0x54991d,_0x4061be){return _0x54991d/_0x4061be;},'QQgNV':'Main','IXKzq':'auto','YKeZS':'fixedNarrow','DLouj':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','cQPsP':'webgl','TLChx':function(_0xfccb3e,_0x1da3b3){return _0xfccb3e(_0x1da3b3);},'HEKNz':'./library/userfilemgr.js','azgqo':function(_0x1bd576,_0x5bc28b){return _0x1bd576(_0x5bc28b);},'IqiZZ':'./weapp-adapter.js','cpJon':function(_0x30c5da,_0x541ea0){return _0x30c5da(_0x541ea0);},'ezAWP':'./senjin_wx_xxtx_littleGame.js','uQJOz':function(_0x59fd90,_0x890611){return _0x59fd90(_0x890611);},'iyYSA':'./platform.js','tXYNS':function(_0x2af643,_0x5162a4){return _0x2af643(_0x5162a4);},'GIFht':'./manifest.js','lXNpX':function(_0x17155f,_0x4c7a9c){return _0x17155f(_0x4c7a9c);},'qxcDY':'./egret.wxgame.js','oKoEu':function(_0x2f8f83,_0x12048d){return _0x2f8f83===_0x12048d;},'npXmE':'function','ABBCn':function(_0x3122e6,_0x1850fb){return _0x3122e6(_0x1850fb);},'wDtcN':'./library/image.js','WmjnT':function(_0x1fcbd0,_0x3816bd){return _0x1fcbd0(_0x3816bd);},'xouAj':'./library/text.js','qPEVr':function(_0x4978ec,_0x493b92){return _0x4978ec(_0x493b92);},'ilGbP':'./library/sound.js','JAQXa':'./library/binary.js','GpNuO':'https://z1c.h5eco.com/1/z1client/','gPPEq':'https://z1api.h5eco.com/','zMyLB':function(_0x4d6153,_0x30de2d){return _0x4d6153+_0x30de2d;},'TMedw':'/ev.json'};const {userfileMgr}=_0x121959['TLChx'](require,_0x121959['HEKNz']);_0x121959['azgqo'](require,_0x121959['IqiZZ']);_0x121959['cpJon'](require,_0x121959['ezAWP']);_0x121959['uQJOz'](require,_0x121959['iyYSA']);_0x121959['tXYNS'](require,_0x121959['GIFht']);_0x121959['lXNpX'](require,_0x121959['qxcDY']);if(_0x121959['oKoEu'](typeof wx['getUpdateManager'],_0x121959['npXmE'])){const _0x49e0c2=wx['getUpdateManager']();_0x49e0c2['onCheckForUpdate'](function(_0x5d4337){console['log']('-------',_0x5d4337);});_0x49e0c2['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x49e0c2['applyUpdate']();});_0x49e0c2['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x121959['ABBCn'](require,_0x121959['wDtcN']);_0x121959['WmjnT'](require,_0x121959['xouAj']);_0x121959['qPEVr'](require,_0x121959['ilGbP']);_0x121959['qPEVr'](require,_0x121959['JAQXa']);}window['alert']=console['error'];window['verData']={};window['urlParam']={'apptype':'3','root':_0x121959['GpNuO'],'apiRoot':_0x121959['gPPEq'],'reportRoot':'https://z1back.h5eco.com/','ev':0x50};window['getUrl']=_0x4e39ac=>{if(~_0x4e39ac['indexOf'](_0x121959['fVUXT']))return _0x121959['tQIpN'](_0x121959['tQIpN'](urlParam['root'],urlParam['gv']),_0x121959['sGZXh']);let _0x3765d0=urlParam['gv']||urlParam['ev'];return _0x121959['tQIpN'](_0x121959['tQIpN'](urlParam['root'],_0x3765d0?_0x121959['OZoqa'](verData[_0x4e39ac]||0x0,'/'):''),_0x4e39ac);};wx['request']({'url':_0x121959['zMyLB'](_0x121959['zMyLB'](urlParam['root'],urlParam['ev']),_0x121959['TMedw']),'success':_0x17b856=>window['verData']=_0x17b856['data'],'complete':()=>{var _0x4cb9f3={'AcXTU':function(_0x1199c4,_0x6000cd){return _0x121959['QcBdb'](_0x1199c4,_0x6000cd);}};egret['runEgret']({'entryClassName':_0x121959['QQgNV'],'orientation':_0x121959['IXKzq'],'frameRate':0x3c,'scaleMode':_0x121959['YKeZS'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x121959['DLouj'],'showLog':![],'maxTouches':0x2,'renderMode':_0x121959['cQPsP'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x2a0417){var _0x217523=_0x2a0417['backingStorePixelRatio']||_0x2a0417['webkitBackingStorePixelRatio']||_0x2a0417['mozBackingStorePixelRatio']||_0x2a0417['msBackingStorePixelRatio']||_0x2a0417['oBackingStorePixelRatio']||_0x2a0417['backingStorePixelRatio']||0x1;return _0x4cb9f3['AcXTU'](window['devicePixelRatio']||0x1,_0x217523);}});}});}function intoMiniGame(){var _0x47f8f7={'YjgQS':function(_0x24db49,_0x5125e0){return _0x24db49(_0x5125e0);},'ndvDK':'./MYGAME/js/main'};const _0x3fdb7a=_0x47f8f7['YjgQS'](require,_0x47f8f7['ndvDK']);new _0x3fdb7a['default']();}