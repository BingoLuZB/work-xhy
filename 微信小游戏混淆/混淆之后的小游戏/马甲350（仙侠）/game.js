const versions='1.0.0';const gameId=350;const downloadUrl='https://gministatic.xinghe66.cn/jzzx/mj'+gameId;const rootPath=wx['env']['USER_DATA_PATH'];const fs=wx['getFileSystemManager']();let num=0x0;var jsonList=['20201214_assetsmanager','20201214_default','20201214_entry','20201214_particle','20201214_socket','20201214_tween','20201214_main.zip','20201214_subpack.zip'];judgegame()['then'](()=>{var _0x3594fb={'hyJil':function(_0xc8e58a){return _0xc8e58a();}};_0x3594fb['hyJil'](getJsonToGame);})['catch'](()=>{var _0x8c2f25={'oPzRL':function(_0x51363a){return _0x51363a();}};_0x8c2f25['oPzRL'](intoMiniGame);});function judgegame(){var _0x5e382b={'WCDqc':function(_0x1c7873,_0x3f9137){return _0x1c7873==_0x3f9137;},'PWCVQ':function(_0x246ce4,_0x19d3c2){return _0x246ce4==_0x19d3c2;},'gvhSg':function(_0x11f397){return _0x11f397();},'YgVIT':'https://gminiapi.xinghe66.cn/mp/index','ofSTd':'GET','swchM':'json'};return new Promise((_0x239391,_0x317213)=>{wx['request']({'url':_0x5e382b['YgVIT'],'method':_0x5e382b['ofSTd'],'data':{'app_id':gameId,'versions':versions,'format':_0x5e382b['swchM']},'success'(_0x1df756){if(_0x5e382b['WCDqc'](_0x1df756['data']['code'],0xc8)&&_0x5e382b['PWCVQ'](_0x1df756['data']['data']['status'],0x2)){_0x5e382b['gvhSg'](_0x317213);}else{_0x5e382b['gvhSg'](_0x239391);}},'fail'(){_0x5e382b['gvhSg'](_0x317213);}});});}function hasJsonToGame(_0x3c8a60,_0x3e8684){var _0x57db30={'KnQfM':function(_0x26b443,_0x16fcaa){return _0x26b443-_0x16fcaa;},'KJYtn':function(_0x137da1,_0x2e60cc){return _0x137da1==_0x2e60cc;},'fKzVM':function(_0x519018){return _0x519018();}};GameGlobal[_0x3c8a60]=JSON['parse'](_0x3e8684);let _0x53369b=_0x57db30['KnQfM'](jsonList['length'],0x1);if(_0x57db30['KJYtn'](num,_0x53369b)){console['log'](0x15b3);_0x57db30['fKzVM'](intoGame);}num++;}function wxReadFile(_0x5093b9,_0x42cb6f,_0x4497c1){var _0x26cd3b={'XzrZJ':function(_0x166b22,_0x42249f){return _0x166b22(_0x42249f);},'Ejzpc':function(_0x8f1135,_0x489600,_0x900faa){return _0x8f1135(_0x489600,_0x900faa);},'Mpelt':function(_0x32362e,_0x14cf21){return _0x32362e(_0x14cf21);},'SKmTv':'utf-8'};return new Promise((_0x35bcc3,_0x1a204c)=>{var _0x566e96={'gQhUs':function(_0xf781fd,_0x127aa1,_0xd7e3ce){return _0x26cd3b['Ejzpc'](_0xf781fd,_0x127aa1,_0xd7e3ce);},'VkllD':function(_0x39cc5d,_0x461071){return _0x26cd3b['Mpelt'](_0x39cc5d,_0x461071);}};fs['readFile']({'filePath':_0x5093b9,'encoding':_0x26cd3b['SKmTv'],'success'(_0x184477){if(_0x4497c1&&_0x184477['data']){_0x566e96['gQhUs'](hasJsonToGame,_0x42cb6f,_0x184477['data']);}_0x566e96['VkllD'](_0x35bcc3,_0x184477);},'fail'(_0x14b853){_0x26cd3b['XzrZJ'](_0x1a204c,_0x14b853);}});});}function getJsonToGame(){var _0x53bc8d={'aDXTI':function(_0x47e043,_0xe42bf2,_0x12f6c0){return _0x47e043(_0xe42bf2,_0x12f6c0);},'rBEtM':function(_0xda9dcf,_0x5c872f,_0xc0a7e0,_0x292785){return _0xda9dcf(_0x5c872f,_0xc0a7e0,_0x292785);},'bSsuB':'==解压失败','rgjcB':'====下载失败','dnSNs':function(_0x15ebf0,_0x32f07b){return _0x15ebf0===_0x32f07b;},'uclIG':'下载失败，文件不存在','EzgkY':function(_0xd99aa5){return _0xd99aa5();},'TNrUU':function(_0x526e83,_0x484243){return _0x526e83(_0x484243);},'xLiwX':function(_0x17e76b,_0x47aa9f){return _0x17e76b<_0x47aa9f;},'sIaIJ':'.zip','TGSdr':'.json'};for(let _0x527ead=0x0;_0x53bc8d['xLiwX'](_0x527ead,jsonList['length']);_0x527ead++){let _0x2d5f63=jsonList[_0x527ead]['split']('_')[0x0];let _0x54dc3a=jsonList[_0x527ead]['split']('_')[0x1];let _0x3e0589=_0x54dc3a['includes'](_0x53bc8d['sIaIJ'])?'':_0x53bc8d['TGSdr'];const _0x3ef701=rootPath+'/'+_0x2d5f63+'/'+_0x54dc3a+_0x3e0589;const _0x53b43b=!_0x3e0589&&_0x54dc3a['split']('.')[0x0];const _0x462765=rootPath+'/'+_0x53b43b+'.json';fs['access']({'path':rootPath+'/'+_0x2d5f63,'success'(_0x118c2e){},'fail'(_0x565709){fs['mkdir']({'dirPath':rootPath+'/'+_0x2d5f63,'recursive':!![],'success'(_0x3a03e8){}});},'complete'(){var _0x384888={'ixTIs':function(_0xd74f71,_0x4076fe){return _0x53bc8d['dnSNs'](_0xd74f71,_0x4076fe);},'tgYJI':function(_0x1b52bd,_0x1759a1,_0x3b9695,_0x4e4804){return _0x53bc8d['rBEtM'](_0x1b52bd,_0x1759a1,_0x3b9695,_0x4e4804);},'wlyeF':_0x53bc8d['uclIG'],'sFITf':function(_0x56a3fc){return _0x53bc8d['EzgkY'](_0x56a3fc);}};_0x53bc8d['TNrUU'](wxReadFile,_0x3ef701)['then'](_0x4dc140=>{if(_0x3e0589){_0x53bc8d['aDXTI'](hasJsonToGame,_0x54dc3a,_0x4dc140['data']);}else{_0x53bc8d['rBEtM'](wxReadFile,_0x462765,_0x53b43b,!![]);}})['catch'](_0x4651d1=>{var _0x3674cf={'KxvGH':function(_0x4a6727,_0x59c7,_0x453081,_0x3ccb18){return _0x53bc8d['rBEtM'](_0x4a6727,_0x59c7,_0x453081,_0x3ccb18);},'FSrZP':_0x53bc8d['bSsuB'],'rarap':_0x53bc8d['rgjcB']};wx['downloadFile']({'url':downloadUrl+'/'+_0x2d5f63+'/'+_0x54dc3a+_0x3e0589,'timeout':0x2710,'filePath':_0x3ef701,'success'(_0x3ec03f){if(_0x384888['ixTIs'](_0x3ec03f['statusCode'],0xc8)){if(_0x3e0589){_0x384888['tgYJI'](wxReadFile,_0x3ef701,_0x54dc3a,!![]);}else{fs['unzip']({'zipFilePath':_0x3ec03f['filePath']||_0x3ec03f['tempFilePath'],'targetPath':rootPath,'success'(_0x22a9f1){_0x3674cf['KxvGH'](wxReadFile,_0x462765,_0x53b43b,!![]);},'fail'(_0x22ef05){console['log'](_0x22ef05,_0x3674cf['FSrZP']);}});}}else{console['error'](_0x384888['wlyeF']);fs['unlink']({'filePath':rootPath+'/'+_0x2d5f63+'/'+_0x54dc3a+_0x3e0589,'success'(_0x29b3c0){},'fail'(_0x198685){}});_0x384888['sFITf'](intoMiniGame);}},'fail'(_0x354312){console['log'](_0x354312,_0x3674cf['rarap']);}});});}});}}function intoGame(){var _0xb61ee5={'BMYNz':'ver.json','sDgkS':function(_0x5397c6,_0xde7e20){return _0x5397c6+_0xde7e20;},'tADCt':'/ver.json','UYTDq':function(_0x1f8de2,_0x444213){return _0x1f8de2+_0x444213;},'ULVJE':function(_0x50da03,_0x486577){return _0x50da03/_0x486577;},'riSMJ':'Main','WKVdN':'auto','adYHz':'fixedNarrow','RBlyg':'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9','vcQkz':'webgl','pnrxi':function(_0x5ec2c6,_0x20d019){return _0x5ec2c6(_0x20d019);},'SuVbJ':'./library/userfilemgr.js','qgNBa':'./weapp-adapter.js','FMFsT':function(_0x5d5730,_0x21abbe){return _0x5d5730(_0x21abbe);},'NoriH':'./senjin_wx_xxtx_littleGame.js','NnVgx':'./platform.js','qstcu':function(_0x4a34d7,_0x229ffc){return _0x4a34d7(_0x229ffc);},'CZfmF':'./manifest.js','quhMF':'./egret.wxgame.js','HklUA':function(_0x316897,_0x491efc){return _0x316897===_0x491efc;},'VYAnX':'function','AZdfs':'./library/image.js','OPAPb':function(_0x59922f,_0x2938e1){return _0x59922f(_0x2938e1);},'xbbpe':'./library/text.js','JQGFt':'./library/sound.js','kNduO':'./library/binary.js','TxxKJ':'https://z1c.h5eco.com/1/z1client/','TtAOA':'https://mzapi.h5eco.com/z1/','JQsOn':function(_0x4731e1,_0x42939b){return _0x4731e1+_0x42939b;},'mxdlj':function(_0x549022,_0x970e2a){return _0x549022+_0x970e2a;},'vcCxX':'/ev.json'};const {userfileMgr}=_0xb61ee5['pnrxi'](require,_0xb61ee5['SuVbJ']);_0xb61ee5['pnrxi'](require,_0xb61ee5['qgNBa']);_0xb61ee5['FMFsT'](require,_0xb61ee5['NoriH']);_0xb61ee5['FMFsT'](require,_0xb61ee5['NnVgx']);_0xb61ee5['qstcu'](require,_0xb61ee5['CZfmF']);_0xb61ee5['qstcu'](require,_0xb61ee5['quhMF']);if(_0xb61ee5['HklUA'](typeof wx['getUpdateManager'],_0xb61ee5['VYAnX'])){const _0x21ea69=wx['getUpdateManager']();_0x21ea69['onCheckForUpdate'](function(_0x358554){console['log']('-------',_0x358554);});_0x21ea69['onUpdateReady'](function(){console['log']('下载完成--更新版本');_0x21ea69['applyUpdate']();});_0x21ea69['onUpdateFailed'](function(){console['log']('更新版本网络异常');});}if(window['RES']&&RES['processor']){_0xb61ee5['qstcu'](require,_0xb61ee5['AZdfs']);_0xb61ee5['OPAPb'](require,_0xb61ee5['xbbpe']);_0xb61ee5['OPAPb'](require,_0xb61ee5['JQGFt']);_0xb61ee5['OPAPb'](require,_0xb61ee5['kNduO']);}window['alert']=console['error'];window['verData']={};window['evData']={};window['urlParam']={'apptype':'1','root':_0xb61ee5['TxxKJ'],'apiRoot':_0xb61ee5['TtAOA'],'reportRoot':'https://z1back.h5eco.com/','ev':0x68};window['getUrl']=_0x3524ea=>{if(~_0x3524ea['indexOf'](_0xb61ee5['BMYNz']))return _0xb61ee5['sDgkS'](_0xb61ee5['sDgkS'](urlParam['root'],urlParam['gv']),_0xb61ee5['tADCt']);let _0xcc3a4c=urlParam['gv']||urlParam['ev'];return _0xb61ee5['sDgkS'](_0xb61ee5['UYTDq'](urlParam['root'],_0xcc3a4c?_0xb61ee5['UYTDq'](evData[_0x3524ea]||verData[_0x3524ea]||0x0,'/'):''),_0x3524ea);};wx['request']({'url':_0xb61ee5['JQsOn'](_0xb61ee5['mxdlj'](urlParam['root'],urlParam['ev']),_0xb61ee5['vcCxX']),'success':_0x2114a4=>window['evData']=_0x2114a4['data'],'complete':()=>{egret['runEgret']({'entryClassName':_0xb61ee5['riSMJ'],'orientation':_0xb61ee5['WKVdN'],'frameRate':0x3c,'scaleMode':_0xb61ee5['adYHz'],'contentWidth':0x2d0,'contentHeight':0x500,'showFPS':![],'fpsStyles':_0xb61ee5['RBlyg'],'showLog':![],'maxTouches':0x2,'renderMode':_0xb61ee5['vcQkz'],'audioType':0x0,'calculateCanvasScaleFactor':function(_0x186b37){var _0x297ff9=_0x186b37['backingStorePixelRatio']||_0x186b37['webkitBackingStorePixelRatio']||_0x186b37['mozBackingStorePixelRatio']||_0x186b37['msBackingStorePixelRatio']||_0x186b37['oBackingStorePixelRatio']||_0x186b37['backingStorePixelRatio']||0x1;return _0xb61ee5['ULVJE'](window['devicePixelRatio']||0x1,_0x297ff9);}});}});}function intoMiniGame(){var _0x31257c={'dRAuN':function(_0x3b0cb1,_0x3981b4){return _0x3b0cb1(_0x3981b4);},'soJjQ':'./MYGAME/js/main'};const _0x407739=_0x31257c['dRAuN'](require,_0x31257c['soJjQ']);new _0x407739['default']();}