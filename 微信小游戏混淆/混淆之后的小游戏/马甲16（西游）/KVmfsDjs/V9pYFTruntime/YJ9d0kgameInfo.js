var a9_0x5bce=['renderGameStart','renderGamePlaying','renderGameOver','fillStyle','black','fillRect','globalAlpha','render','#ffffff','font','15px\x20Arial','height','width','drawImage','18px\x20Arial','fillText','恭喜！您用','finalTime','完成了拼图！','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/puzzle-easy.jpg','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/puzzle-middle.jpg','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/start.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/easy.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/middle.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/hard.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/help.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/puzzle-help.png','640','907','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/wrap.png','https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/replay.png','screenWidth','imgStart','screenHeight','btnMiddle','btnHard','timeBanner','contentPaddingTop','btnReplay','contentPadding','contentWidth','hintContent','btnHint','helpContent','tap','gameOver','tapGamePlaying','tapGameOver','tapGameStart','btnEasy','isTapped','stage','gameStart','puzzleImg','getMap','length','pieces','startTime','now','src','showHelp','reset','showHint'];(function(_0x41fa82,_0x26d86e){var _0x87c801=function(_0x47dab0){while(--_0x47dab0){_0x41fa82['push'](_0x41fa82['shift']());}};_0x87c801(++_0x26d86e);}(a9_0x5bce,0x91));var a9_0x14c9=function(_0x20018b,_0x1b7d27){_0x20018b=_0x20018b-0x0;var _0x557539=a9_0x5bce[_0x20018b];return _0x557539;};import a9_0x42ef24 from'../p3vKahdatabus';import a9_0x3703e8 from'../FoyKh5base/kIqVctbutton';import a9_0x2fab33 from'../KeKJ7cmodels/bQehdKpiece';import a9_0x3fab18 from'./PPdhklgameMap';let databus=new a9_0x42ef24();let gameMap=new a9_0x3fab18();const helpButtonPadding=0xf;const PUZZLE_EASY_SRC=a9_0x14c9('0x0');const PUZZLE_EASY_WIDTH=0x3e8;const PUZZLE_EASY_HEIGHT=0x3e8;const PUZZLE_MIDDLE_SRC=a9_0x14c9('0x1');const PUZZLE_MIDDLE_WIDTH=0x3e8;const PUZZLE_MIDDLE_HEIGHT=0x3e8;const PUZZLE_HARD_SRC='https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/puzzle-hard.jpg';const PUZZLE_HARD_WIDTH=0x3e8;const PUZZLE_HARD_HEIGHT=0x3e8;const IMG_START_SRC=a9_0x14c9('0x2');const IMG_START_WIDTH=0x320;const IMG_START_HEIGHT=0x3e8;const IMG_EASY_SRC=a9_0x14c9('0x3');const IMG_EASY_WIDTH=0x190;const IMG_EASY_HEIGHT=0xc8;const IMG_MIDDLE_SRC=a9_0x14c9('0x4');const IMG_MIDDLE_WIDTH=0x190;const IMG_MIDDLE_HEIGHT=0xc8;const IMG_HARD_SRC=a9_0x14c9('0x5');const IMG_HARD_WIDTH=0x190;const IMG_HARD_HEIGHT=0xc8;const IMG_TIME_SRC='https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/time_bg.png';const IMG_TIME_WIDTH=0x190;const IMG_TIME_HEIGHT=0xc8;const IMG_HELP_SRC=a9_0x14c9('0x6');const IMG_HELP_WIDTH=0x12c;const IMG_HELP_HEIGHT=0xc8;const IMG_HELP_CONTENT_SRC=a9_0x14c9('0x7');const IMG_HELP_CONTENT_WIDTH=a9_0x14c9('0x8');const IMG_HELP_CONTENT_HEIGHT=a9_0x14c9('0x9');const IMG_HINT_SRC='https://h5.kunyufun.com/h5Sdk/v1/waistcoatImg/sliding_puzzle/hint.png';const IMG_HINT_WIDTH=0x12c;const IMG_HINT_HEIGHT=0xc8;const IMG_HINT_CONTENT_SRC=a9_0x14c9('0xa');const IMG_HINT_CONTENT_WIDTH=0x12c;const IMG_HINT_CONTENT_HEIGHT=0x12c;const IMG_REPLAY_SRC=a9_0x14c9('0xb');const IMG_REPLAY_WIDTH=0x12c;const IMG_REPLAY_HEIGHT=0xc8;let instance;export default class GameInfo{constructor(){if(instance){return instance;}instance=this;let imgStartRatio=databus[a9_0x14c9('0xc')]*0.8/IMG_START_WIDTH;this[a9_0x14c9('0xd')]=new a9_0x3703e8(IMG_START_SRC,(databus['screenWidth']-imgStartRatio*IMG_START_WIDTH)/0x2,(databus[a9_0x14c9('0xe')]-imgStartRatio*IMG_START_HEIGHT)/0x2,imgStartRatio*IMG_START_WIDTH,imgStartRatio*IMG_START_HEIGHT);let btnRatio=databus['screenWidth']*0.4/IMG_EASY_WIDTH;this['btnEasy']=new a9_0x3703e8(IMG_EASY_SRC,(databus[a9_0x14c9('0xc')]-btnRatio*IMG_EASY_WIDTH)/0x2,(databus[a9_0x14c9('0xe')]-btnRatio*IMG_EASY_HEIGHT)/0x2-btnRatio*IMG_EASY_HEIGHT*1.5,btnRatio*IMG_EASY_WIDTH,btnRatio*IMG_EASY_HEIGHT);this[a9_0x14c9('0xf')]=new a9_0x3703e8(IMG_MIDDLE_SRC,(databus[a9_0x14c9('0xc')]-btnRatio*IMG_MIDDLE_WIDTH)/0x2,(databus[a9_0x14c9('0xe')]-btnRatio*IMG_MIDDLE_HEIGHT)/0x2,btnRatio*IMG_MIDDLE_WIDTH,btnRatio*IMG_MIDDLE_HEIGHT);this[a9_0x14c9('0x10')]=new a9_0x3703e8(IMG_HARD_SRC,(databus[a9_0x14c9('0xc')]-btnRatio*IMG_HARD_WIDTH)/0x2,(databus['screenHeight']-btnRatio*IMG_HARD_HEIGHT)/0x2+btnRatio*IMG_HARD_HEIGHT*1.5,btnRatio*IMG_HARD_WIDTH,btnRatio*IMG_HARD_HEIGHT);let timeRatio=databus[a9_0x14c9('0xc')]*0.16/IMG_TIME_WIDTH;this[a9_0x14c9('0x11')]=new a9_0x3703e8(IMG_TIME_SRC,databus['contentPadding'],databus[a9_0x14c9('0x12')]-(timeRatio*IMG_TIME_HEIGHT+helpButtonPadding),timeRatio*IMG_TIME_WIDTH,timeRatio*IMG_TIME_HEIGHT);let replayRatio=databus['screenWidth']*0.12/IMG_REPLAY_WIDTH;this[a9_0x14c9('0x13')]=new a9_0x3703e8(IMG_REPLAY_SRC,databus[a9_0x14c9('0x14')]+databus[a9_0x14c9('0x15')]-replayRatio*IMG_REPLAY_WIDTH,databus[a9_0x14c9('0x12')]-(replayRatio*IMG_REPLAY_HEIGHT+helpButtonPadding),replayRatio*IMG_REPLAY_WIDTH,replayRatio*IMG_REPLAY_HEIGHT);let hintRatio=databus['screenWidth']*0.12/IMG_HINT_WIDTH;this['btnHint']=new a9_0x3703e8(IMG_HINT_SRC,this[a9_0x14c9('0x13')]['x']-(hintRatio*IMG_HINT_WIDTH+0xa),databus[a9_0x14c9('0x12')]-(hintRatio*IMG_HINT_HEIGHT+helpButtonPadding),hintRatio*IMG_HINT_WIDTH,hintRatio*IMG_HINT_HEIGHT);let hintContentRatio=databus[a9_0x14c9('0x15')]*0.6/IMG_HINT_CONTENT_WIDTH;this[a9_0x14c9('0x16')]=new a9_0x3703e8(IMG_HINT_CONTENT_SRC,databus[a9_0x14c9('0x14')]+databus[a9_0x14c9('0x15')]-hintContentRatio*IMG_HINT_CONTENT_WIDTH,databus[a9_0x14c9('0x12')]-(hintContentRatio*IMG_HINT_CONTENT_HEIGHT+helpButtonPadding),hintContentRatio*IMG_HINT_CONTENT_WIDTH,hintContentRatio*IMG_HINT_CONTENT_HEIGHT);let helpRatio=databus[a9_0x14c9('0xc')]*0.12/IMG_HELP_WIDTH;this['btnHelp']=new a9_0x3703e8(IMG_HELP_SRC,this[a9_0x14c9('0x17')]['x']-(helpRatio*IMG_HELP_WIDTH+0xa),databus[a9_0x14c9('0x12')]-(helpRatio*IMG_HELP_HEIGHT+helpButtonPadding),helpRatio*IMG_HELP_WIDTH,helpRatio*IMG_HELP_HEIGHT);let helpContentHeight=databus[a9_0x14c9('0xc')]/IMG_HELP_CONTENT_WIDTH*IMG_HELP_CONTENT_HEIGHT;this[a9_0x14c9('0x18')]=new a9_0x3703e8(IMG_HELP_CONTENT_SRC,0x0,databus[a9_0x14c9('0xe')]-helpContentHeight,databus[a9_0x14c9('0xc')],helpContentHeight);}[a9_0x14c9('0x19')](event){if(!databus['gameStart']){return this['tapGameStart'](event);}if(!databus[a9_0x14c9('0x1a')]){return this[a9_0x14c9('0x1b')](event);}return this[a9_0x14c9('0x1c')](event);}[a9_0x14c9('0x1d')](event){if(this[a9_0x14c9('0x1e')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x20')]=0x3;databus[a9_0x14c9('0x21')]=!![];databus[a9_0x14c9('0x22')]={'src':PUZZLE_EASY_SRC,'width':PUZZLE_EASY_WIDTH,'height':PUZZLE_EASY_HEIGHT};}else if(this['btnMiddle'][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x20')]=0x4;databus[a9_0x14c9('0x21')]=!![];databus[a9_0x14c9('0x22')]={'src':PUZZLE_MIDDLE_SRC,'width':PUZZLE_MIDDLE_WIDTH,'height':PUZZLE_MIDDLE_HEIGHT};}else if(this[a9_0x14c9('0x10')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x20')]=0x5;databus['gameStart']=!![];databus[a9_0x14c9('0x22')]={'src':PUZZLE_HARD_SRC,'width':PUZZLE_HARD_WIDTH,'height':PUZZLE_HARD_HEIGHT};}else{return;}databus['emptyPosition']=databus['stage']*databus['stage']-0x1;let randomMap=gameMap[a9_0x14c9('0x23')](databus[a9_0x14c9('0x20')]);for(let i=0x0;i<randomMap[a9_0x14c9('0x24')];i++){let position=randomMap[i]-0x1;databus[a9_0x14c9('0x25')]['push'](new a9_0x2fab33(i,position,databus[a9_0x14c9('0x20')]));}databus[a9_0x14c9('0x26')]=Date[a9_0x14c9('0x27')]();this[a9_0x14c9('0x22')]=new Image();this['puzzleImg'][a9_0x14c9('0x28')]=databus[a9_0x14c9('0x22')][a9_0x14c9('0x28')];}[a9_0x14c9('0x1b')](event){if(databus[a9_0x14c9('0x29')]&&this[a9_0x14c9('0x18')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x29')]=![];return;}if(databus['showHint']&&this[a9_0x14c9('0x16')]['isTapped'](event['x'],event['y'])){databus['showHint']=![];return;}if(this[a9_0x14c9('0x13')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x2a')]();return;}if(this['btnHelp'][a9_0x14c9('0x1f')](event['x'],event['y'])){databus['showHelp']=!![];return;}if(this[a9_0x14c9('0x17')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus[a9_0x14c9('0x2b')]=!![];}}['tapGameOver'](event){if(this[a9_0x14c9('0x13')][a9_0x14c9('0x1f')](event['x'],event['y'])){databus['reset']();}}['render'](ctx){if(!databus[a9_0x14c9('0x21')]){return this[a9_0x14c9('0x2c')](ctx);}if(!databus[a9_0x14c9('0x1a')]){return this[a9_0x14c9('0x2d')](ctx);}return this[a9_0x14c9('0x2e')](ctx);}[a9_0x14c9('0x2c')](ctx){ctx[a9_0x14c9('0x2f')]=a9_0x14c9('0x30');ctx['globalAlpha']=0.6;ctx[a9_0x14c9('0x31')](0x0,0x0,databus[a9_0x14c9('0xc')],databus['screenHeight']);ctx[a9_0x14c9('0x32')]=0x1;this[a9_0x14c9('0xd')]['render'](ctx);this['btnEasy'][a9_0x14c9('0x33')](ctx);this['btnMiddle'][a9_0x14c9('0x33')](ctx);this[a9_0x14c9('0x10')][a9_0x14c9('0x33')](ctx);}[a9_0x14c9('0x2d')](ctx){this[a9_0x14c9('0x11')]['render'](ctx);ctx[a9_0x14c9('0x2f')]=a9_0x14c9('0x34');ctx[a9_0x14c9('0x35')]=a9_0x14c9('0x36');ctx['fillText'](databus['getCurrentTime'](),this[a9_0x14c9('0x11')]['x']+(this[a9_0x14c9('0x11')]['width']/0x2-0x12),this[a9_0x14c9('0x11')]['y']+(this[a9_0x14c9('0x11')][a9_0x14c9('0x37')]/0x2+0x5));this['btnHelp'][a9_0x14c9('0x33')](ctx);this[a9_0x14c9('0x17')][a9_0x14c9('0x33')](ctx);this[a9_0x14c9('0x13')][a9_0x14c9('0x33')](ctx);if(databus[a9_0x14c9('0x29')]){ctx[a9_0x14c9('0x2f')]=a9_0x14c9('0x30');ctx[a9_0x14c9('0x32')]=0.6;ctx[a9_0x14c9('0x31')](0x0,0x0,databus[a9_0x14c9('0xc')],databus[a9_0x14c9('0xe')]);ctx[a9_0x14c9('0x32')]=0x1;this['helpContent'][a9_0x14c9('0x33')](ctx);}if(databus[a9_0x14c9('0x2b')]){ctx['drawImage'](this['puzzleImg'],this[a9_0x14c9('0x16')]['x'],this['hintContent']['y'],this[a9_0x14c9('0x16')][a9_0x14c9('0x38')],this[a9_0x14c9('0x16')][a9_0x14c9('0x37')]);this[a9_0x14c9('0x16')][a9_0x14c9('0x33')](ctx);}}[a9_0x14c9('0x2e')](ctx,score){ctx[a9_0x14c9('0x39')](this[a9_0x14c9('0x22')],databus[a9_0x14c9('0x14')],databus['contentPaddingTop'],databus[a9_0x14c9('0x15')],databus[a9_0x14c9('0x15')]);this[a9_0x14c9('0x13')][a9_0x14c9('0x33')](ctx);ctx['fillStyle']=a9_0x14c9('0x30');ctx['globalAlpha']=0.6;ctx[a9_0x14c9('0x31')](databus[a9_0x14c9('0x14')],databus[a9_0x14c9('0x12')],databus['contentWidth'],0x32);ctx['globalAlpha']=0x1;ctx[a9_0x14c9('0x2f')]='#ffffff';ctx[a9_0x14c9('0x35')]=a9_0x14c9('0x3a');ctx[a9_0x14c9('0x3b')](a9_0x14c9('0x3c')+databus[a9_0x14c9('0x3d')]+a9_0x14c9('0x3e'),databus[a9_0x14c9('0x14')]+0xa,databus[a9_0x14c9('0x12')]+0x1e);}}