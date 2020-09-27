/**
 * 渠道：森金小游戏
 * 最后修改时间： 20200915
 * 备注：支付的使用米大师则可以不先触发用户点击时间，原支付跳转到另外一个小程序支付
 * */

 var huoSdk = require('sdk-1.0.1.js');

var MirInterRuntime = (function () {
    var MirInterRuntime = {};


    wx.showShareMenu({
        withShareTicket: true
    });

    MirInterRuntime.h5_config = ({
        share: {
            imgurl: "",
            title: "",
            message: "",
        },
        jh_config: {
            domian: "https://agent1.ijunhai.com",//以商务提供的为准
            user_id: "",
            channel_id: "8573",//以商务提供的为准
            game_id: "245",//以商务提供的为准
            game_channel_id: "115444",//以商务提供的为准
            time: "",
            token: "",
            l_h5_sign: "",
        },
        jh_api: {
            login: "/loginH5/checkLogin",
            getExtra: "/loginH5/getLoginExtraInfo",
            pay: "/payH5/getPayUrl",
        },
    });

    MirInterRuntime.junhai_init = (function (callback, data) {

        //加载Mirror 渠道文件
        console.log('开始加载渠道文件');
        // 继续执行
        try {
            //自己初始化
            console.log('自己初始化');
            MirInterRuntime.h5_check_init(function (obj) {
                callback(obj);
            }, data);

        } catch (e) {
            // alert(e.message);
            console.log(e.message);
            var return_message = {
                "ret": 0,
                "msg": "初始化失败",
                "content": {}
            }
            // alert(JSON.stringify(return_message));
            callback(return_message);
        }
    });

    //初始化
    MirInterRuntime.h5_check_init = (function (callback, data) {

        // MirInterRuntime.config.shareinfo = data.shareinfo;

        console.log('渠道初始化');
        var post_params = {};
        post_params.ac = 'get_config';
        var channel_id = MirInterRuntime.h5_config.jh_config.channel_id;
        var game_id = MirInterRuntime.h5_config.jh_config.game_id;
        var game_channel_id = MirInterRuntime.h5_config.jh_config.game_channel_id;
        var url = MirInterRuntime.h5_config.jh_config.domian + MirInterRuntime.h5_config.jh_api.getExtra + "/channel_id/" + channel_id + "/game_id/" + game_id + "/game_channel_id/" + game_channel_id;
        var the_header = {
            'content-type': 'application/x-www-form-urlencoded'
        };
        wx.request({
            url: url,
            data: post_params,
            method: 'POST',
            header: the_header,
            dataType: 'json',
            success: function (data) {
                var the_data = data.data;
                if (the_data.ret != "1") {
                    var return_message = {
                        ret: 0,
                        msg: 'fail',
                        content: {}
                    };
                    callback(return_message);
                    return;
                }
                var the_content = the_data.content;
                console.log('开始调用渠道的初始化');
                huoSdk.init({
                    app_id: 6,
                    mp_id: 'wx92bddf441f89bf9a'
                }).then(res => {
                    console.log(res);
                    var return_message = {
                        ret: 1,
                        msg: '初始化成功',
                        content: {}
                    };
                    callback(return_message);
                    return;
                })
            },
        });
        return;
    });

    MirInterRuntime.h5_login = (function (callback) {

        let opts = wx.getLaunchOptionsSync();
        huoSdk.login({
            data: {
                // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                state: opts.query.state || opts.query.scene || ''
            }
        }).then(res => {
            // do something
            console.log('sdk login', res.data);
            var post_params = {};
            post_params['mg_mem_id'] = res.data.mg_mem_id;
            post_params['mem_id'] = res.data.mem_id;
            post_params['cp_user_token'] = res.data.cp_user_token;
            MirInterRuntime.h5_config.jh_config.is_pay = res.data.check;

            console.log("== wx.login ==========")
            var channel_id = MirInterRuntime.h5_config.jh_config.channel_id;
            var game_id = MirInterRuntime.h5_config.jh_config.game_id;
            var game_channel_id = MirInterRuntime.h5_config.jh_config.game_channel_id;
            var url = MirInterRuntime.h5_config.jh_config.domian + MirInterRuntime.h5_config.jh_api.login + "/channel_id/" + channel_id + "/game_id/" + game_id + "/game_channel_id/" + game_channel_id;
            var the_header = {
                'content-type': 'application/x-www-form-urlencoded'
            };
            wx.request({
                url: url,
                data: post_params,
                method: 'POST',
                header: the_header,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    var the_data = data.data;
                    if (the_data.ret != "1") {
                        callback(the_data);
                    }

                    MirInterRuntime.h5_config.jh_config.user_id = the_data.content.user_id;
                    MirInterRuntime.h5_config.jh_config.token = the_data.content.token;
                    MirInterRuntime.h5_config.jh_config.game_id = the_data.content.game_id;
                    MirInterRuntime.h5_config.jh_config.channel_id = the_data.content.channel_id;
                    MirInterRuntime.h5_config.jh_config.game_channel_id = the_data.content.game_channel_id;
                    MirInterRuntime.h5_config.jh_config.time = the_data.content.time;
                    MirInterRuntime.h5_config.jh_config.l_h5_sign = the_data.content.l_h5_sign;

                    if (MirInterRuntime.h5_config.jh_config.user_id) {
                        var the_content = {
                            "user_id": MirInterRuntime.h5_config.jh_config.user_id,
                            "token": MirInterRuntime.h5_config.jh_config.token,
                            "game_id": MirInterRuntime.h5_config.jh_config.game_id,
                            "channel_id": MirInterRuntime.h5_config.jh_config.channel_id,
                            "game_channel_id": MirInterRuntime.h5_config.jh_config.game_channel_id,
                            "time": MirInterRuntime.h5_config.jh_config.time,
                            "l_h5_sign": MirInterRuntime.h5_config.jh_config.l_h5_sign,
                        };
                        var return_message = {
                            "ret": 1,
                            "msg": "获取玩家信息成功",
                            "content": the_content,
                        };
                        callback(return_message);
                    } else {
                        var return_message = {
                            ret: 0,
                            msg: "获取玩家信息失败",
                            content: null,
                        };
                        callback(return_message);
                    };
                },
            });

        })
    });

    MirInterRuntime.check_h5_pay = (function () {
        var can_pay = true;
        if (MirInterRuntime.h5_config.jh_config.is_pay == '0') {
            can_pay = false;
        };
        var return_message = {
            "min_payment": 1,
            "max_payment": null,
            'can_pay': can_pay
        };
        return return_message;
    });

    //支付接口
    MirInterRuntime.h5_pay = (function (order, extra, signature, callback) {
        window.tmp_order = order;
        window.tmp_extra = extra;
        window.tmp_signature = signature;
        window.tmp_cp_callback = callback;


        console.log('开始准备下单');
        var channel_id = MirInterRuntime.h5_config.jh_config.channel_id;
        var game_id = MirInterRuntime.h5_config.jh_config.game_id;
        var game_channel_id = MirInterRuntime.h5_config.jh_config.game_channel_id;
        var pay_url = MirInterRuntime.h5_config.jh_config.domian + MirInterRuntime.h5_config.jh_api.pay + "/channel_id/" + channel_id + "/game_id/" + game_id + "/game_channel_id/" + game_channel_id;
        var post_params = {
            order_data: JSON.stringify(order),
            extra_data: JSON.stringify(extra),
            channel_id: MirInterRuntime.h5_config.jh_config.channel_id,
            game_id: MirInterRuntime.h5_config.jh_config.game_id,
            game_channel_id: MirInterRuntime.h5_config.jh_config.game_channel_id,
            user_id: extra['user_id'],
            time: extra['time'],
            sign: signature,
        };
        var the_header = {
            'content-type': 'application/x-www-form-urlencoded'
        };
        wx.request({
            url: pay_url,
            data: post_params,
            method: 'POST',
            header: the_header,
            dataType: 'json',
            success: function (data) {
                console.info(data);
                var the_data = data.data;
                if (the_data.ret != "1") {
                    var return_message = {
                        "ret": 0,
                        "msg": "支付失败",
                        "content": null,
                    };
                    callback(return_message);
                    return;
                }
                var the_content = the_data.content;
                console.log("the_content");
                console.log(the_content);
                huoSdk.pay({
                    data: the_content
                }).then(res => {
                    console.log({
                        data: the_content
                    });
                    console.log(res);
                })
                return;
            },
        });
    });

    MirInterRuntime.check_h5_share = (function () {
        return {
            share_type: 1
        };
    });

    MirInterRuntime.h5_share = (function (sharemsg, callback) {

        var info = window.onShowInfo || window.launchInfo;

        var share_info = {
            title: sharemsg.shareinfo.title,
            imageUrl: sharemsg.shareinfo.qzone_img_url,
            query: ''
        }
        huoSdk.getShareInfo({}).then(res => {

            var return_message = {
                ret: 1,
                type: "share",
                result: "success",
            }

            // 小游戏
            wx.onShareAppMessage(function () {
                return share_info;
            })
            callback(return_message);
            wx.showShareMenu()
        })

    });

    MirInterRuntime.cp_notify_junhai = (function (info) {
		info = info.data;
        var type = info.base_data.action;
      var data_base = info.base_data;
      var data_extend = info.extend_data;

        switch (type) {
            case "loginEvent":
                if (data_base.is_new == true) {
                    //创角
                    huoSdk.updateRoleInfo({
                        data: {
                            'role-event': 'create',
                            'role-server_id': data_base.server,
                            'role-server_name': data_base.server_name,
                            'role-role_id': data_base.role_id,
                            'role-role_name': data_base.role_name,
                            'role-role_level': data_extend.level,
                            'role-role_vip': data_extend.vip_level,
                            'role-combat_num': data_extend.score,
                            'role-onlineTime': data_extend.role_create_time,
                        }
                    }).then(res => {
                        // do something
                    }, err => {
                        // handle error
                    })
                } else {
                    //登录
                    huoSdk.updateRoleInfo({
                        data: {
                            'role-event': 'online',
                            'role-server_id': data_base.server,
                          'role-server_name': data_base.server_name,
                            'role-role_id': data_base.role_id,
                            'role-role_name': data_base.role_name,
                            'role-role_level': data_extend.level,
                            'role-role_vip': data_extend.vip_level,
                            'role-combat_num': data_extend.score,
                            'role-onlineTime': data_extend.role_create_time,
                        }
                    }).then(res => {
                        // do something
                    }, err => {
                        // handle error
                    })
                }
                break;
            case "levelEvent":
                //升级
                huoSdk.updateRoleInfo({
                    data: {
                        'role-event': 'levelup',
                        'role-server_id': data_base.server,
                      'role-server_name': data_base.server_name,
                        'role-role_id': data_base.role_id,
                        'role-role_name': data_base.role_name,
                        'role-role_level': data_extend.level,
                        'role-role_vip': data_extend.vip_level,
                        'role-combat_num': data_extend.score,
                        'role-onlineTime': data_extend.role_create_time,
                    }
                }).then(res => {
                    // do something
                }, err => {
                    // handle error
                })
                break;
            default:
                console.log('info');
                break;
        }
    });

    return MirInterRuntime;
})();

window.MirInterRuntime = MirInterRuntime;