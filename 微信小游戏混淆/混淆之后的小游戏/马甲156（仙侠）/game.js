const versions='1.0.0';const gameId=156;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201121_platform','20201121_assetsmanager','20201121_default','20201121_entry','20201121_particle','20201121_socket','20201121_tween','20201121_main.zip','20201121_subpack.zip'];judgegame()['then'](()=>{var _0x13be35={'RulZb':function(_0x35d47c){return _0x35d47c();}};_0x13be35['RulZb'](getJsonToGame);})['catch'](()=>{var _0x29806c={'wJQkY':function(_0x3d4673){return _0x3d4673();}};_0x29806c['wJQkY'](intoMiniGame);});function judgegame(){var _0x47faab={'FutiS':function(_0x54e73e){return _0x54e73e();},'WWPmg':function(_0x38564e,_0x26310c){return _0x38564e==_0x26310c;},'afWva':function(_0x18217d){return _0x18217d();},'bkxef':'https://gminiapi.xinghe66.cn/mp/index','lGbHd':'GET','TaRLo':'json'};return new Promise((_0xc38446,_0x69fa4e)=>{var _0x1aadc1={'AujHe':function(_0x3e7b30,_0x184b64){return _0x47faab['WWPmg'](_0x3e7b30,_0x184b64);},'ZZjba':function(_0x3f182d){return _0x47faab['afWva'](_0x3f182d);},'xfSZy':function(_0x330412){return _0x47faab['afWva'](_0x330412);}};wx['request']({'url':_0x47faab['bkxef'],'method':_0x47faab['lGbHd'],'data':{'app_id':gameId,'versions':versions,'format':_0x47faab['TaRLo']},'success'(_0x19a508){if(_0x1aadc1['AujHe'](_0x19a508['data']['code'],0xc8)&&_0x1aadc1['AujHe'](_0x19a508['data']['data']['status'],0x2)){_0x1aadc1['ZZjba'](_0x69fa4e);}else{_0x1aadc1['xfSZy'](_0xc38446);}},'fail'(){_0x47faab['FutiS'](_0x69fa4e);}});});}function hasJsonToGame(_0xcf3316,_0x16b52b){var _0x38b81f={'BLYqa':function(_0x24e92c,_0x4da3c4){return _0x24e92c-_0x4da3c4;},'FvzNC':function(_0x3e83bb,_0x91c67c){return _0x3e83bb==_0x91c67c;},'GURwk':function(_0x4779fc){return _0x4779fc();}};GameGlobal[_0xcf3316]=JSON['parse'](_0x16b52b);let _0x173c1c=_0x38b81f['BLYqa'](jsonList['length'],0x1);if(_0x38b81f['FvzNC'](num,_0x173c1c)){console['log'](0x15b3);_0x38b81f['GURwk'](intoGame);}num++;}function wxReadFile(_0xdf65e3,_0x346524,_0x219b37){var _0x42ed41={'fwJoT':function(_0x1b5b1a,_0x2b64c1,_0x3ea6fa){return _0x1b5b1a(_0x2b64c1,_0x3ea6fa);},'CKIBo':function(_0x278f2c,_0x24816d){return _0x278f2c(_0x24816d);},'XQahj':function(_0xdf6f14,_0x5aae1c){return _0xdf6f14(_0x5aae1c);},'MWmkU':'utf-8'};return new Promise((_0x55b7f6,_0x10a903)=>{fs['readFile']({'filePath':_0xdf65e3,'encoding':_0x42ed41['MWmkU'],'success'(_0x3fc093){if(_0x219b37&&_0x3fc093['data']){_0x42ed41['fwJoT'](hasJsonToGame,_0x346524,_0x3fc093['data']);}_0x42ed41['CKIBo'](_0x55b7f6,_0x3fc093);},'fail'(_0x4d911c){_0x42ed41['XQahj'](_0x10a903,_0x4d911c);}});});}function getJsonToGame(){var _0x3a7ebe={'Xowpl':function(_0x5bfb1d,_0x121112,_0x14b152,_0x338527){return _0x5bfb1d(_0x121112,_0x14b152,_0x338527);},'XfBqh':'==解压失败','YjLQL':function(_0x56a9c4,_0x33f0de){return _0x56a9c4===_0x33f0de;},'dWiSf':'下载失败，文件不存在','cXbez':function(_0x36fd97){return _0x36fd97();},'nqjZz':'====下载失败','ArfPr':function(_0x434f04,_0xb15d82,_0x18a68c){return _0x434f04(_0xb15d82,_0x18a68c);},'CpgnT':function(_0x1ed307,_0x24128d,_0x38a073,_0x50f58f){return _0x1ed307(_0x24128d,_0x38a073,_0x50f58f);},'OUwIq':function(_0x52f290,_0x585e1c){return _0x52f290(_0x585e1c);},'lXRKR':function(_0x2394e6,_0x1c6f47){return _0x2394e6<_0x1c6f47;},'KSzlc':'.zip','vnkUV':'.json'};for(let _0x4d8c4f=0x0;_0x3a7ebe['lXRKR'](_0x4d8c4f,jsonList['length']);_0x4d8c4f++){let _0x64a090=jsonList[_0x4d8c4f]['split']('_')[0x0];let _0x2b0d36=jsonList[_0x4d8c4f]['split']('_')[0x1];let _0x424d18=_0x2b0d36['includes'](_0x3a7ebe['KSzlc'])?'':_0x3a7ebe['vnkUV'];const _0x51d09c=rootPath+'/'+_0x64a090+'/'+_0x2b0d36+_0x424d18;const _0x4668f7=!_0x424d18&&_0x2b0d36['split']('.')[0x0];const _0x415978=rootPath+'/'+_0x4668f7+'.json';fs['access']({'path':rootPath+'/'+_0x64a090,'success'(_0x2fadb8){},'fail'(_0x56d628){fs['mkdir']({'dirPath':rootPath+'/'+_0x64a090,'recursive':!![],'success'(_0x3c453a){}});},'complete'(){var _0x35f83b={'Szlpf':function(_0xdcae80,_0x17ef1b,_0x2c9c64){return _0x3a7ebe['ArfPr'](_0xdcae80,_0x17ef1b,_0x2c9c64);},'SkKGL':function(_0x7f08c6,_0x24f450,_0x5b6a86,_0x1c9931){return _0x3a7ebe['CpgnT'](_0x7f08c6,_0x24f450,_0x5b6a86,_0x1c9931);}};_0x3a7ebe['OUwIq'](wxReadFile,_0x51d09c)['then'](_0x12fd7e=>{if(_0x424d18){_0x35f83b['Szlpf'](hasJsonToGame,_0x2b0d36,_0x12fd7e['data']);}else{_0x35f83b['SkKGL'](wxReadFile,_0x415978,_0x4668f7,!![]);}})['catch'](_0x24784a=>{var _0x5d13b8={'dKNzk':function(_0x223247,_0x61a227,_0x19afeb,_0x4afa37){return _0x3a7ebe['Xowpl'](_0x223247,_0x61a227,_0x19afeb,_0x4afa37);},'QQFrq':_0x3a7ebe['XfBqh'],'NcfmD':function(_0x5258c6,_0x13e0bb){return _0x3a7ebe['YjLQL'](_0x5258c6,_0x13e0bb);},'wMZpw':_0x3a7ebe['dWiSf'],'lZnsG':function(_0x12cb40){return _0x3a7ebe['cXbez'](_0x12cb40);},'HreTd':_0x3a7ebe['nqjZz']};wx['downloadFile']({'url':downloadUrl+'/'+_0x64a090+'/'+_0x2b0d36+_0x424d18,'timeout':0x2710,'filePath':_0x51d09c,'success'(_0x3f0763){var _0x4fea27={'fqzun':function(_0x488033,_0x2ddb1a,_0x35f6c9,_0x26557d){return _0x5d13b8['dKNzk'](_0x488033,_0x2ddb1a,_0x35f6c9,_0x26557d);},'GNNVG':_0x5d13b8['QQFrq']};if(_0x5d13b8['NcfmD'](_0x3f0763['statusCode'],0xc8)){if(_0x424d18){_0x5d13b8['dKNzk'](wxReadFile,_0x51d09c,_0x2b0d36,!![]);}else{fs['unzip']({'zipFilePath':_0x3f0763['filePath']||_0x3f0763['tempFilePath'],'targetPath':rootPath,'success'(_0x21eaac){_0x4fea27['fqzun'](wxReadFile,_0x415978,_0x4668f7,!![]);},'fail'(_0x4d4e9f){console['log'](_0x4d4e9f,_0x4fea27['GNNVG']);}});}}else{console['error'](_0x5d13b8['wMZpw']);fs['unlink']({'filePath':rootPath+'/'+_0x64a090+'/'+_0x2b0d36+_0x424d18,'success'(_0x586987){},'fail'(_0x3c6ef7){}});_0x5d13b8['lZnsG'](intoMiniGame);}},'fail'(_0x249fcf){console['log'](_0x249fcf,_0x5d13b8['HreTd']);}});});}});}}function intoGame(){var _0x54c059={'amDbS':'ver.json','PQaSY':function(_0x3c9a88,_0x2980b5){return _0x3c9a88+_0x2980b5;},'aFdxe':'/ver.json','stwjI':function(_0x34d992,_0x218153){return _0x34d992+_0x218153;},'toEmX':function(_0x271058,_0x4f9702){return _0x271058/_0x4f9702;},'yuHhk':'Main','ASLGO':'auto','bCDAr':'fixedNarrow','kjEOE':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','CgQEX':'webgl','AiiCQ':function(_0x1a6ae0,_0x5df8ff){return _0x1a6ae0(_0x5df8ff);},'xhUlQ':'./library/userfilemgr.js','sgyUA':function(_0x4a1aff,_0x41c2c1){return _0x4a1aff(_0x41c2c1);},'lXVby':'./weapp-adapter.js','uYNDj':'./senjin_wx_xxtx_littleGame.js','vYbPR':function(_0x5bb654,_0x215b16){return _0x5bb654(_0x215b16);},'wAvWY':'./platform.js','zwmqL':function(_0x3beb32,_0x5b24b8){return _0x3beb32(_0x5b24b8);},'XNxOa':'./manifest.js','Rryfp':'./egret.wxgame.js','QiymS':function(_0x5be69c,_0x42bc32){return _0x5be69c===_0x42bc32;},'aCNTG':'function','foDvL':'./library/image.js','NLpOk':'./library/text.js','NHJxf':function(_0x146a07,_0x200cb4){return _0x146a07(_0x200cb4);},'goBxA':'./library/sound.js','uYxeV':function(_0xb0fcb6,_0x862209){return _0xb0fcb6(_0x862209);},'emrWw':'./library/binary.js','kyxHj':'https://z1c.h5eco.com/1/z1client/','IKirb':'https://mzapi.h5eco.com/z1/','jpNDk':'/ev.json'};const {userfileMgr}=_0x54c059['AiiCQ'](require,_0x54c059['xhUlQ']);_0x54c059['sgyUA'](require,_0x54c059['lXVby']);_0x54c059['sgyUA'](require,_0x54c059['uYNDj']);_0x54c059['vYbPR'](require,_0x54c059['wAvWY']);_0x54c059['zwmqL'](require,_0x54c059['XNxOa']);_0x54c059['zwmqL'](require,_0x54c059['Rryfp']);if(_0x54c059['QiymS'](typeof wx['getUpdateManager'],_0x54c059['aCNTG'])){const _0x488039=wx['getUpdateManager']();_0x488039['onCheckForUpdate'](function(_0x2b0d8b){console['log']('-------',_0x2b0d8b);});_0x488039['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x488039['applyUpdate']();});_0x488039['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x54c059['zwmqL'](require,_0x54c059['foDvL']);_0x54c059['zwmqL'](require,_0x54c059['NLpOk']);_0x54c059['NHJxf'](require,_0x54c059['goBxA']);_0x54c059['uYxeV'](require,_0x54c059['emrWw']);}window['alert']=console['error'];window['verData']={};window['evData']={};window['urlParam']={'apptype':'3','root':_0x54c059['kyxHj'],'apiRoot':_0x54c059['IKirb'],'reportRoot':'https://z1back.h5eco.com/','ev':0x68};window['getUrl']=_0x58366a=>{if(~_0x58366a['indexOf'](_0x54c059['amDbS']))return _0x54c059['PQaSY'](_0x54c059['PQaSY'](urlParam['root'],urlParam['gv']),_0x54c059['aFdxe']);let _0x2ef5e2=urlParam['gv']||urlParam['ev'];return _0x54c059['PQaSY'](_0x54c059['PQaSY'](urlParam['root'],_0x2ef5e2?_0x54c059['stwjI'](evData[_0x58366a]||verData[_0x58366a]||0x0,'/'):''),_0x58366a);};wx['request']({'url':_0x54c059['stwjI'](_0x54c059['stwjI'](urlParam['root'],urlParam['ev']),_0x54c059['jpNDk']),'success':_0x4acba5=>window['evData']=_0x4acba5['data'],'complete':()=>{egret['runEgret']({'entryClassName':_0x54c059['yuHhk'],'orientation':_0x54c059['ASLGO'],'frameRate':0x3c,'scaleMode':_0x54c059['bCDAr'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x54c059['kjEOE'],'showLog':![],'maxTouches':0x2,'renderMode':_0x54c059['CgQEX'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x26cee4){var _0x16b71c=_0x26cee4['backingStorePixelRatio']||_0x26cee4['webkitBackingStorePixelRatio']||_0x26cee4['mozBackingStorePixelRatio']||_0x26cee4['msBackingStorePixelRatio']||_0x26cee4['oBackingStorePixelRatio']||_0x26cee4['backingStorePixelRatio']||0x1;return _0x54c059['toEmX'](window['devicePixelRatio']||0x1,_0x16b71c);}});}});}function intoMiniGame(){var _0x827ce5={'KRcWx':function(_0xce9457,_0x43bd54){return _0xce9457(_0x43bd54);},'mKMqe':'./MYGAME/js/main'};const _0x12c872=_0x827ce5['KRcWx'](require,_0x827ce5['mKMqe']);new _0x12c872['default']();}