const versions='1.0.2';const gameId=0x7;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/xinxianxia';const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201009_platform','20200925_assetsmanager','20200925_default','20201009_entry','20200925_particle','20200925_socket','20200925_tween','20201009_main.zip'];judgegame()['then'](()=>{var _0xcf2d8b={'WhwFG':function(_0x5dd71c){return _0x5dd71c();}};_0xcf2d8b['WhwFG'](getJsonToGame);})['catch'](()=>{var _0x15a4d5={'pdBfv':function(_0x1cd154){return _0x1cd154();}};_0x15a4d5['pdBfv'](intoMiniGame);});function judgegame(){var _0x30d8d4={'tHgkp':function(_0x39908c,_0x4a4acc){return _0x39908c==_0x4a4acc;},'EiFor':function(_0x57f6f7){return _0x57f6f7();},'gJMvN':'https://gminiapi.xinghe66.cn/mp/index','irIyv':'GET','GyXqO':'json'};return new Promise((_0x1b52d7,_0x31dd75)=>{var _0x468acd={'JXikC':function(_0x27275e,_0x51b18c){return _0x30d8d4['tHgkp'](_0x27275e,_0x51b18c);},'TrAqF':function(_0x94d3db,_0x480d2b){return _0x30d8d4['tHgkp'](_0x94d3db,_0x480d2b);},'lMTkM':function(_0x16ce04){return _0x30d8d4['EiFor'](_0x16ce04);},'ancCI':function(_0x1e285d){return _0x30d8d4['EiFor'](_0x1e285d);}};wx['request']({'url':_0x30d8d4['gJMvN'],'method':_0x30d8d4['irIyv'],'data':{'app_id':gameId,'versions':versions,'format':_0x30d8d4['GyXqO']},'success'(_0x1b47c4){if(_0x468acd['JXikC'](_0x1b47c4['data']['code'],0xc8)&&_0x468acd['TrAqF'](_0x1b47c4['data']['data']['status'],0x2)){_0x468acd['lMTkM'](_0x31dd75);}else{_0x468acd['lMTkM'](_0x1b52d7);}},'fail'(){_0x468acd['ancCI'](_0x31dd75);}});});}function hasJsonToGame(_0x52d6bd,_0x43a0af){var _0x117731={'twjcJ':function(_0x2cf018,_0x59429c){return _0x2cf018-_0x59429c;},'YdTDO':function(_0x2e4629,_0x288dbe){return _0x2e4629==_0x288dbe;},'Omtwj':function(_0x3dee44){return _0x3dee44();}};GameGlobal[_0x52d6bd]=JSON['parse'](_0x43a0af);let _0x16eedb=_0x117731['twjcJ'](jsonList['length'],0x1);if(_0x117731['YdTDO'](num,_0x16eedb)){console['log'](0x15b3);_0x117731['Omtwj'](intoGame);}num++;}function wxReadFile(_0x3e4275,_0xf7dc99,_0x2c5bf3){var _0x92950e={'ZrRMn':function(_0x4d8df6,_0x5192ea,_0x155b1b){return _0x4d8df6(_0x5192ea,_0x155b1b);},'XzbMq':function(_0x1addf7,_0x44e7ba){return _0x1addf7(_0x44e7ba);},'konse':'utf-8'};return new Promise((_0x28a3a7,_0x5916af)=>{fs['readFile']({'filePath':_0x3e4275,'encoding':_0x92950e['konse'],'success'(_0x3b9920){if(_0x2c5bf3&&_0x3b9920['data']){_0x92950e['ZrRMn'](hasJsonToGame,_0xf7dc99,_0x3b9920['data']);}_0x92950e['XzbMq'](_0x28a3a7,_0x3b9920);},'fail'(_0xf69bc5){_0x92950e['XzbMq'](_0x5916af,_0xf69bc5);}});});}function getJsonToGame(){var _0x24adbb={'aSJzn':function(_0x271c40,_0x5f1df1,_0xb1b843){return _0x271c40(_0x5f1df1,_0xb1b843);},'AJryo':function(_0x2c4a4c,_0x47ecce,_0x399ba5,_0x217dce){return _0x2c4a4c(_0x47ecce,_0x399ba5,_0x217dce);},'QRGAF':function(_0x4e62d8,_0x2593bd){return _0x4e62d8===_0x2593bd;},'Aswqy':'下载失败，文件不存在','QXehu':'====下载失败','YcIcw':'==解压失败','ZUaMp':function(_0x7453da,_0x376a3a){return _0x7453da(_0x376a3a);},'crPRP':function(_0x4bb77c,_0x26ff30){return _0x4bb77c<_0x26ff30;},'FtjkJ':'.zip','JtRVf':'.json'};for(let _0x4986d2=0x0;_0x24adbb['crPRP'](_0x4986d2,jsonList['length']);_0x4986d2++){let _0x424817=jsonList[_0x4986d2]['split']('_')[0x0];let _0x4dc9e4=jsonList[_0x4986d2]['split']('_')[0x1];let _0x2cc074=_0x4dc9e4['includes'](_0x24adbb['FtjkJ'])?'':_0x24adbb['JtRVf'];const _0x208b27=rootPath+'/'+_0x424817+'/'+_0x4dc9e4+_0x2cc074;const _0x4092dd=!_0x2cc074&&_0x4dc9e4['split']('.')[0x0];const _0x11b1ee=rootPath+'/'+_0x4092dd+'.json';fs['access']({'path':rootPath+'/'+_0x424817,'success'(_0x8921fb){},'fail'(_0x4ff2b7){fs['mkdir']({'dirPath':rootPath+'/'+_0x424817,'recursive':!![],'success'(_0x373ced){}});},'complete'(){var _0x26d9b5={'AkzJD':function(_0x2a9f98,_0x6d37d,_0x334183,_0x283deb){return _0x24adbb['AJryo'](_0x2a9f98,_0x6d37d,_0x334183,_0x283deb);},'pYkfF':function(_0x3eb8b1,_0x87bb8d){return _0x24adbb['QRGAF'](_0x3eb8b1,_0x87bb8d);},'tTlEY':_0x24adbb['Aswqy'],'nURMr':_0x24adbb['QXehu'],'FdwYt':_0x24adbb['YcIcw']};_0x24adbb['ZUaMp'](wxReadFile,_0x208b27)['then'](_0x116d55=>{if(_0x2cc074){_0x24adbb['aSJzn'](hasJsonToGame,_0x4dc9e4,_0x116d55['data']);}else{_0x24adbb['AJryo'](wxReadFile,_0x11b1ee,_0x4092dd,!![]);}})['catch'](_0x2fc649=>{var _0x5d2b46={'DyvMR':_0x26d9b5['FdwYt']};wx['downloadFile']({'url':downloadUrl+'/'+_0x424817+'/'+_0x4dc9e4+_0x2cc074,'filePath':_0x208b27,'success'(_0x2bb43f){var _0x34bf22={'JByab':function(_0x3a1221,_0x22b116,_0xce6ab3,_0x52288b){return _0x26d9b5['AkzJD'](_0x3a1221,_0x22b116,_0xce6ab3,_0x52288b);}};if(_0x26d9b5['pYkfF'](_0x2bb43f['statusCode'],0xc8)){if(_0x2cc074){_0x26d9b5['AkzJD'](wxReadFile,_0x208b27,_0x4dc9e4,!![]);}else{fs['unzip']({'zipFilePath':_0x2bb43f['filePath']||_0x2bb43f['tempFilePath'],'targetPath':rootPath,'success'(_0x46571b){_0x34bf22['JByab'](wxReadFile,_0x11b1ee,_0x4092dd,!![]);},'fail'(_0x2d7cb9){console['log'](_0x2d7cb9,_0x5d2b46['DyvMR']);}});}}else{console['error'](_0x26d9b5['tTlEY']);fs['unlink']({'filePath':rootPath+'/'+_0x424817+'/'+_0x4dc9e4+_0x2cc074,'success'(_0x456d3e){},'fail'(_0x2a94df){}});}},'fail'(_0x9d55ab){console['log'](_0x9d55ab,_0x26d9b5['nURMr']);}});});}});}}function intoGame(){var _0x4c1781={'NTBxD':'ver.json','DKxuu':function(_0x53e760,_0x4d061a){return _0x53e760+_0x4d061a;},'ICWmB':'/ver.json','yvVIM':function(_0x353240,_0x714bae){return _0x353240+_0x714bae;},'atdyf':function(_0x3f4b33,_0x519969){return _0x3f4b33/_0x519969;},'DIbWu':'Main','LXKXC':'auto','GppAW':'fixedNarrow','fQXeJ':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','Jatds':'webgl','XjaYf':function(_0x56a3bc,_0x25a9b1){return _0x56a3bc(_0x25a9b1);},'qGSSy':'./library/userfilemgr.js','fqqLV':'./weapp-adapter.js','UyENL':'./senjin_wx_xxtx_littleGame.js','PHclS':'./platform.js','OlrEj':'./manifest.js','fupbt':function(_0x1c5605,_0xe46be8){return _0x1c5605(_0xe46be8);},'zEUCj':'./egret.wxgame.js','TryqX':function(_0x575f47,_0xe425b){return _0x575f47===_0xe425b;},'QXXBg':'function','Xdpcr':'./library/image.js','oXTGf':function(_0x3ff947,_0x10dd84){return _0x3ff947(_0x10dd84);},'FvPvY':'./library/text.js','hpCVx':'./library/sound.js','kMjbU':function(_0x56795c,_0x1eb9c6){return _0x56795c(_0x1eb9c6);},'aqlRy':'./library/binary.js','OUgrr':'https://z1c.h5eco.com/1/z1client/','JSema':'https://z1api.h5eco.com/','tiMZa':function(_0x9ce0d2,_0x219027){return _0x9ce0d2+_0x219027;},'abpsS':'/ev.json'};const {userfileMgr}=_0x4c1781['XjaYf'](require,_0x4c1781['qGSSy']);_0x4c1781['XjaYf'](require,_0x4c1781['fqqLV']);_0x4c1781['XjaYf'](require,_0x4c1781['UyENL']);_0x4c1781['XjaYf'](require,_0x4c1781['PHclS']);_0x4c1781['XjaYf'](require,_0x4c1781['OlrEj']);_0x4c1781['fupbt'](require,_0x4c1781['zEUCj']);if(_0x4c1781['TryqX'](typeof wx['getUpdateManager'],_0x4c1781['QXXBg'])){const _0x97037=wx['getUpdateManager']();_0x97037['onCheckForUpdate'](function(_0x69e1cb){console['log']('-------',_0x69e1cb);});_0x97037['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x97037['applyUpdate']();});_0x97037['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x4c1781['fupbt'](require,_0x4c1781['Xdpcr']);_0x4c1781['oXTGf'](require,_0x4c1781['FvPvY']);_0x4c1781['oXTGf'](require,_0x4c1781['hpCVx']);_0x4c1781['kMjbU'](require,_0x4c1781['aqlRy']);}window['alert']=console['error'];window['verData']={};window['urlParam']={'apptype':'3','root':_0x4c1781['OUgrr'],'apiRoot':_0x4c1781['JSema'],'reportRoot':'https://z1back.h5eco.com/','ev':0x5b};window['getUrl']=_0x42d4d7=>{if(~_0x42d4d7['indexOf'](_0x4c1781['NTBxD']))return _0x4c1781['DKxuu'](_0x4c1781['DKxuu'](urlParam['root'],urlParam['gv']),_0x4c1781['ICWmB']);let _0x50eacc=urlParam['gv']||urlParam['ev'];return _0x4c1781['DKxuu'](_0x4c1781['yvVIM'](urlParam['root'],_0x50eacc?_0x4c1781['yvVIM'](verData[_0x42d4d7]||0x0,'/'):''),_0x42d4d7);};wx['request']({'url':_0x4c1781['tiMZa'](_0x4c1781['tiMZa'](urlParam['root'],urlParam['ev']),_0x4c1781['abpsS']),'success':_0x5b26a5=>window['verData']=_0x5b26a5['data'],'complete':()=>{egret['runEgret']({'entryClassName':_0x4c1781['DIbWu'],'orientation':_0x4c1781['LXKXC'],'frameRate':0x3c,'scaleMode':_0x4c1781['GppAW'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x4c1781['fQXeJ'],'showLog':![],'maxTouches':0x2,'renderMode':_0x4c1781['Jatds'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x5baea1){var _0x5a52bd=_0x5baea1['backingStorePixelRatio']||_0x5baea1['webkitBackingStorePixelRatio']||_0x5baea1['mozBackingStorePixelRatio']||_0x5baea1['msBackingStorePixelRatio']||_0x5baea1['oBackingStorePixelRatio']||_0x5baea1['backingStorePixelRatio']||0x1;return _0x4c1781['atdyf'](window['devicePixelRatio']||0x1,_0x5a52bd);}});}});}function intoMiniGame(){var _0x9250ca={'kCLMJ':function(_0x5b33d9,_0x26f4bd){return _0x5b33d9(_0x26f4bd);},'gKszu':'./tree/js/main'};const _0x34b19a=_0x9250ca['kCLMJ'](require,_0x9250ca['gKszu']);new _0x34b19a['default']();}