const versions='1.0.0';const gameId=0x84;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201117_platform','20201117_assetsmanager','20201117_default','20201117_entry','20201117_particle','20201117_socket','20201117_tween','20201117_main.zip','20201117_subpack.zip'];judgegame()['then'](()=>{var _0x29c546={'iPThM':function(_0x43926a){return _0x43926a();}};_0x29c546['iPThM'](getJsonToGame);})['catch'](()=>{var _0x50622d={'WLaky':function(_0x28bb51){return _0x28bb51();}};_0x50622d['WLaky'](intoMiniGame);});function judgegame(){var _0x40238c={'ucVyD':function(_0x5d24bb,_0x14a4eb){return _0x5d24bb==_0x14a4eb;},'WrWlB':function(_0x324625){return _0x324625();},'Qkxvt':function(_0x1310dd){return _0x1310dd();},'gQLeh':'https://gminiapi.xinghe66.cn/mp/index','fZLKa':'GET','BISuT':'json'};return new Promise((_0x4a1361,_0xa79429)=>{var _0x836021={'uQoii':function(_0x2d88c2,_0x269b13){return _0x40238c['ucVyD'](_0x2d88c2,_0x269b13);},'YMJxc':function(_0x16fe1b){return _0x40238c['WrWlB'](_0x16fe1b);},'Yssmc':function(_0x574745){return _0x40238c['Qkxvt'](_0x574745);}};wx['request']({'url':_0x40238c['gQLeh'],'method':_0x40238c['fZLKa'],'data':{'app_id':gameId,'versions':versions,'format':_0x40238c['BISuT']},'success'(_0x490a3f){if(_0x836021['uQoii'](_0x490a3f['data']['code'],0xc8)&&_0x836021['uQoii'](_0x490a3f['data']['data']['status'],0x2)){_0x836021['YMJxc'](_0xa79429);}else{_0x836021['Yssmc'](_0x4a1361);}},'fail'(){_0x836021['Yssmc'](_0xa79429);}});});}function hasJsonToGame(_0x695ad9,_0x1623b4){var _0x3418a4={'vsHAw':function(_0x22dca8,_0x8b40cc){return _0x22dca8-_0x8b40cc;},'GuHrd':function(_0x50147d,_0x399e2b){return _0x50147d==_0x399e2b;},'tNLiV':function(_0x318758){return _0x318758();}};GameGlobal[_0x695ad9]=JSON['parse'](_0x1623b4);let _0x52301a=_0x3418a4['vsHAw'](jsonList['length'],0x1);if(_0x3418a4['GuHrd'](num,_0x52301a)){console['log'](0x15b3);_0x3418a4['tNLiV'](intoGame);}num++;}function wxReadFile(_0x41a81e,_0x5d47b2,_0x30b69b){var _0xf4f042={'BJQBq':function(_0x15114f,_0x566024,_0x7a85b4){return _0x15114f(_0x566024,_0x7a85b4);},'EWfzp':function(_0x52e145,_0xe97cce){return _0x52e145(_0xe97cce);},'oQhcm':function(_0x190800,_0x147475){return _0x190800(_0x147475);},'keMzc':'utf-8'};return new Promise((_0xbfa954,_0x163bae)=>{var _0x1113b6={'swgUg':function(_0xbdaa98,_0x15869a){return _0xf4f042['oQhcm'](_0xbdaa98,_0x15869a);}};fs['readFile']({'filePath':_0x41a81e,'encoding':_0xf4f042['keMzc'],'success'(_0x30ba38){if(_0x30b69b&&_0x30ba38['data']){_0xf4f042['BJQBq'](hasJsonToGame,_0x5d47b2,_0x30ba38['data']);}_0xf4f042['EWfzp'](_0xbfa954,_0x30ba38);},'fail'(_0x41aa6b){_0x1113b6['swgUg'](_0x163bae,_0x41aa6b);}});});}function getJsonToGame(){var _0xe6dad={'hWcoC':function(_0x479fd5,_0xc6210d,_0x50bdf6){return _0x479fd5(_0xc6210d,_0x50bdf6);},'yzKoF':function(_0x3a75c6,_0x3c5201,_0x520b60,_0x2f454c){return _0x3a75c6(_0x3c5201,_0x520b60,_0x2f454c);},'mTJRi':function(_0x1d44a6,_0x75c2f2,_0x4f29cd,_0x1cccf1){return _0x1d44a6(_0x75c2f2,_0x4f29cd,_0x1cccf1);},'BgebT':function(_0x4e117b,_0x23e743){return _0x4e117b===_0x23e743;},'Azjfg':'下载失败，文件不存在','yxQxo':function(_0xf3f7ea){return _0xf3f7ea();},'duDyd':'====下载失败','hxFhu':'==解压失败','JjvHi':function(_0x5580dc,_0x23cdb5){return _0x5580dc(_0x23cdb5);},'PXNeA':function(_0x2cb4a4,_0x2eab07){return _0x2cb4a4<_0x2eab07;},'nucva':'.zip','Yjdli':'.json'};for(let _0x2b8a1f=0x0;_0xe6dad['PXNeA'](_0x2b8a1f,jsonList['length']);_0x2b8a1f++){let _0xd4d29c=jsonList[_0x2b8a1f]['split']('_')[0x0];let _0x438808=jsonList[_0x2b8a1f]['split']('_')[0x1];let _0x344682=_0x438808['includes'](_0xe6dad['nucva'])?'':_0xe6dad['Yjdli'];const _0x1cceab=rootPath+'/'+_0xd4d29c+'/'+_0x438808+_0x344682;const _0x5e62d0=!_0x344682&&_0x438808['split']('.')[0x0];const _0xa28c08=rootPath+'/'+_0x5e62d0+'.json';fs['access']({'path':rootPath+'/'+_0xd4d29c,'success'(_0x45ac7c){},'fail'(_0x3b22a5){fs['mkdir']({'dirPath':rootPath+'/'+_0xd4d29c,'recursive':!![],'success'(_0x426254){}});},'complete'(){var _0x467d9d={'FOchQ':function(_0x42dbeb,_0x6b1311,_0x1f2540,_0x5733bd){return _0xe6dad['mTJRi'](_0x42dbeb,_0x6b1311,_0x1f2540,_0x5733bd);},'mzqPn':function(_0xf02f5f,_0x287b43){return _0xe6dad['BgebT'](_0xf02f5f,_0x287b43);},'HPueB':_0xe6dad['Azjfg'],'nxsuP':function(_0x14e23a){return _0xe6dad['yxQxo'](_0x14e23a);},'StBPu':_0xe6dad['duDyd'],'VEdCU':_0xe6dad['hxFhu']};_0xe6dad['JjvHi'](wxReadFile,_0x1cceab)['then'](_0xf05f6b=>{if(_0x344682){_0xe6dad['hWcoC'](hasJsonToGame,_0x438808,_0xf05f6b['data']);}else{_0xe6dad['yzKoF'](wxReadFile,_0xa28c08,_0x5e62d0,!![]);}})['catch'](_0x3dc49c=>{var _0x424364={'oSPMS':_0x467d9d['VEdCU']};wx['downloadFile']({'url':downloadUrl+'/'+_0xd4d29c+'/'+_0x438808+_0x344682,'timeout':0x2710,'filePath':_0x1cceab,'success'(_0xec46fe){var _0x14d948={'bDJNp':function(_0x5dce9f,_0x1c4053,_0x568c23,_0x36fb9c){return _0x467d9d['FOchQ'](_0x5dce9f,_0x1c4053,_0x568c23,_0x36fb9c);}};if(_0x467d9d['mzqPn'](_0xec46fe['statusCode'],0xc8)){if(_0x344682){_0x467d9d['FOchQ'](wxReadFile,_0x1cceab,_0x438808,!![]);}else{fs['unzip']({'zipFilePath':_0xec46fe['filePath']||_0xec46fe['tempFilePath'],'targetPath':rootPath,'success'(_0x5abcc4){_0x14d948['bDJNp'](wxReadFile,_0xa28c08,_0x5e62d0,!![]);},'fail'(_0x3e03d4){console['log'](_0x3e03d4,_0x424364['oSPMS']);}});}}else{console['error'](_0x467d9d['HPueB']);fs['unlink']({'filePath':rootPath+'/'+_0xd4d29c+'/'+_0x438808+_0x344682,'success'(_0x18f252){},'fail'(_0x3e735a){}});_0x467d9d['nxsuP'](intoMiniGame);}},'fail'(_0x5d253e){console['log'](_0x5d253e,_0x467d9d['StBPu']);}});});}});}}function intoGame(){var _0x5ab432={'HAxZK':'ver.json','IfCRh':function(_0x242206,_0x2da3f0){return _0x242206+_0x2da3f0;},'JLbNV':function(_0x278923,_0x458033){return _0x278923+_0x458033;},'cxOSY':'/ver.json','LNzFD':function(_0x42071b,_0x2c8acd){return _0x42071b+_0x2c8acd;},'WMCWQ':function(_0x246bd4,_0x3410ac){return _0x246bd4/_0x3410ac;},'YpqPm':'Main','QTCTL':'auto','WUDLV':'fixedNarrow','xUYDi':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','LKJgc':'webgl','brujH':function(_0x3f5693,_0x27af3e){return _0x3f5693(_0x27af3e);},'OSEIE':'./library/userfilemgr.js','AqkaL':'./weapp-adapter.js','oYNAz':function(_0x2ad3ef,_0x336a9f){return _0x2ad3ef(_0x336a9f);},'silkR':'./senjin_wx_xxtx_littleGame.js','OgJSe':function(_0x5d35bc,_0x2af603){return _0x5d35bc(_0x2af603);},'NKRQf':'./platform.js','sYOWj':'./manifest.js','fAtKm':function(_0x374147,_0x500af3){return _0x374147(_0x500af3);},'bnmUd':'./egret.wxgame.js','XmkHp':function(_0x1447e4,_0x51ad14){return _0x1447e4===_0x51ad14;},'HFsVr':'function','xHzoG':'./library/image.js','RzCmd':'./library/text.js','MZpYq':'./library/sound.js','EkcQQ':'./library/binary.js','oqUJd':'https://z1c.h5eco.com/1/z1client/','CtBtC':'https://mzapi.h5eco.com/z1/','NiCmJ':'/ev.json'};const {userfileMgr}=_0x5ab432['brujH'](require,_0x5ab432['OSEIE']);_0x5ab432['brujH'](require,_0x5ab432['AqkaL']);_0x5ab432['oYNAz'](require,_0x5ab432['silkR']);_0x5ab432['OgJSe'](require,_0x5ab432['NKRQf']);_0x5ab432['OgJSe'](require,_0x5ab432['sYOWj']);_0x5ab432['fAtKm'](require,_0x5ab432['bnmUd']);if(_0x5ab432['XmkHp'](typeof wx['getUpdateManager'],_0x5ab432['HFsVr'])){const _0x142b9d=wx['getUpdateManager']();_0x142b9d['onCheckForUpdate'](function(_0x5dc6a4){console['log']('-------',_0x5dc6a4);});_0x142b9d['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x142b9d['applyUpdate']();});_0x142b9d['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0x5ab432['fAtKm'](require,_0x5ab432['xHzoG']);_0x5ab432['fAtKm'](require,_0x5ab432['RzCmd']);_0x5ab432['fAtKm'](require,_0x5ab432['MZpYq']);_0x5ab432['fAtKm'](require,_0x5ab432['EkcQQ']);}window['alert']=console['error'];window['verData']={};window['evData']={};window['urlParam']={'apptype':'3','root':_0x5ab432['oqUJd'],'apiRoot':_0x5ab432['CtBtC'],'reportRoot':'https://z1back.h5eco.com/','ev':0x68};window['getUrl']=_0x3865c9=>{if(~_0x3865c9['indexOf'](_0x5ab432['HAxZK']))return _0x5ab432['IfCRh'](_0x5ab432['JLbNV'](urlParam['root'],urlParam['gv']),_0x5ab432['cxOSY']);let _0x369fc4=urlParam['gv']||urlParam['ev'];return _0x5ab432['LNzFD'](_0x5ab432['LNzFD'](urlParam['root'],_0x369fc4?_0x5ab432['LNzFD'](evData[_0x3865c9]||verData[_0x3865c9]||0x0,'/'):''),_0x3865c9);};wx['request']({'url':_0x5ab432['LNzFD'](_0x5ab432['LNzFD'](urlParam['root'],urlParam['ev']),_0x5ab432['NiCmJ']),'success':_0x2a9b9a=>window['evData']=_0x2a9b9a['data'],'complete':()=>{var _0x1e868d={'mddXh':function(_0x45d4f5,_0x13cf25){return _0x5ab432['WMCWQ'](_0x45d4f5,_0x13cf25);}};egret['runEgret']({'entryClassName':_0x5ab432['YpqPm'],'orientation':_0x5ab432['QTCTL'],'frameRate':0x3c,'scaleMode':_0x5ab432['WUDLV'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0x5ab432['xUYDi'],'showLog':![],'maxTouches':0x2,'renderMode':_0x5ab432['LKJgc'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x5d7f49){var _0x28b9e5=_0x5d7f49['backingStorePixelRatio']||_0x5d7f49['webkitBackingStorePixelRatio']||_0x5d7f49['mozBackingStorePixelRatio']||_0x5d7f49['msBackingStorePixelRatio']||_0x5d7f49['oBackingStorePixelRatio']||_0x5d7f49['backingStorePixelRatio']||0x1;return _0x1e868d['mddXh'](window['devicePixelRatio']||0x1,_0x28b9e5);}});}});}function intoMiniGame(){var _0x4dcddf={'DJiLO':function(_0x234683,_0x38710c){return _0x234683(_0x38710c);},'DiIWu':'./tree/js/main.js'};const _0x4792eb=_0x4dcddf['DJiLO'](require,_0x4dcddf['DiIWu']);new _0x4792eb['default']();}