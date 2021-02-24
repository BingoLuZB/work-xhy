export default class zhijianWeChatSDK {
    constructor() {
        this.restart();
    }
    restart() {
        this.addSdkListener();
    }
    addSdkListener() {
        wx.onShareAppMessage(() => {
            return {
                title: '燃爆三国，2020最火爆的三国，登录就送VIP+元宝',
                imageUrl: 'https://res-rbsg.oclkj.com/sharebeijing.png',
            }
        })
    }

    zhijianWeChatSDKInit()
    {
        this.czsdk_WeChat = new czsdk_WeChat({
            channelType: "mingriwx",
            gameAbb: "rbsg",
            app_id:388,
            mem_id:'wxe09eec343bef6b51'
        });
        console.log("zhijianWeChatSDKInit--------------");
    }

    loginCallBackData = {};
    //sdk登录
    SDKLogin()
    {
        this.czsdk_WeChat.toLogin(function(code, data) {
            window.zhijianWeChat.loginCallBackData=data;
            console.log("WeChatMiniGame登录返回的状态--------------"+code);
            console.log("WeChatMiniGame登录返回的参数--------------"+JSON.stringify(data));
            //code：1为成功,其他为失败
            //data：返回json字符串
        });
    }

    payCallBackCata = {};
    //sdk支付
    SDKPay(payParams)
    {
        this.czsdk_WeChat.toPay(payParams, function(code, data) {
            window.zhijianWeChat.payCallBackCata=data;
            console.log("WeChatMiniGame支付返回的状态--------------"+code);
            console.log("WeChatMiniGame支付返回的参数--------------"+JSON.stringify(data));
            //code：1为成功,其他为失败
            //data：返回json字符串
        });
    }

    //sdk上报信息
    SDKReport(type,reportData)
    {
        //type类型：
        //创⻆⻆⾊ creatRole
        //进⼊游戏 enterGame
        //更新⻆⾊信息 updateRole
        this.czsdk_WeChat.uploadRole2g(type, reportData, function(code, data) {
            console.log("WeChatMiniGame上报信息返回的状态--------------"+code);
            console.log("WeChatMiniGame上报信息返回的参数--------------"+JSON.stringify(data));
            //失败才返回信息
        });
    }

    // //sdk分享
    // SDKShare()
    // {
    //     //title: 分享标题
    //     //imageUrl: 分享图⽚url
    //     //回调函数code为1成功，0为失败
    //     var title='燃爆三国，2020最火爆的三国，登录就送VIP+元宝';
    //     var imageUrl='https://res-rbsg.oclkj.com/sharebeijing.png';
    //     this.czsdk_WeChat.share(title, imageUrl, function(code, data) {
    //         console.log("WeChatMiniGame分享返回的状态--------------"+code);
    //         console.log("WeChatMiniGame分享返回的参数--------------"+JSON.stringify(data));
    //         //失败才返回信息
    //     });
    // }

    //右上角设置里面分享功能
    SDKShare()
    {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
    }

    //保持常亮状态
    SDKkeepScreenOn()
    {
        wx.setKeepScreenOn({
            keepScreenOn: true
        })
    }

    // //获取系统信息
    // SDKgetSystemInfo()
    // {
    //     bl.getSystemInfo({
    //         success (res) {
    //             console.log("getSystemInfo--------------------获取系统信息"+JSON.stringify(res));
    //         },
    //         fail (e) {
    //             console.log("getSystemInfo--------------------获取系统信息失败"+JSON.stringify(e));
    //         }
    //     })
    // }
}
let zhijianWeChat = new zhijianWeChatSDK();
window.zhijianWeChat = zhijianWeChat;