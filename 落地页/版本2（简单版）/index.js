//获取配置
let main, template, module
httpRequest({
    httpUrl: './config.json'
}, (res) => {
    let name = getUrlParmas('gameName')
    let obj = eval('(' + res + ')');
    let data = obj[name]
    main = data.main
    module = data.module
    template = data.template
    init()
})


// 初始化 排版
function init() {

    const image = template.image
    let imgList = []
    for (let i in image) {
        imgList.push(image[i])
    }

    const swiper = template.swiper
    let swiperList = []
    for (let i in swiper) {
        swiperList.push(swiper[i])
    }
    let arr = []
    // topBtn    顶部固定按钮 
    // img    普通大图 
    // swiper1    5张轮播图
    // bottomBtn   底部固定按钮

    const choose = new Map([
        // 顶部固定按钮 + 2张普通大图
        [1, [{
                name: 'topBtn',
                url: imgList[0],
                clickFn: () => {
                    skipFn()
                }
            },
            {
                name: 'img',
                url: imgList[1],
                clickFn: () => {
                    skipFn()
                }
            },
            {
                name: 'img',
                url: imgList[2],
                clickFn: () => {
                    skipFn()
                }
            }
        ]],
        // 5张轮播 + 普通大图 + 底部固定按钮
        [2, [{
                name: 'swiper1',
                swiperList: swiperList,
                clickFn: () => {
                    skipFn()
                }
            },
            {
                name: 'img',
                url: imgList[0],
                click: true,
                clickFn: () => {
                    skipFn()
                }
            },
            {
                name: 'bottomBtn',
                url: imgList[1],
                clickFn: () => {
                    skipFn()
                }
            },
        ]],
        // 双端 顶部固定按钮 + 普通大图
        [3, [{
                name: 'topBtn',
                url: imgList[0],
                clickFn: () => {
                    skipFn()
                }
            },
            {
                name: 'img',
                url: imgList[1],
                clickFn: () => {
                    skipFn()
                }
            },
        ]]
    ])
    arr = choose.get(parseInt(module))
    setModule(arr)
    addComFun()
}

// 添加其他公用的东西
function addComFun() {
    if (main.icp || main.copyright) {
        // 底部文字
        let div = `
                        <div id="elseFont" class="bh">
                            <div>${main.copyright}</div>
                            <div>${main.icp}</div>
                        </div>
                    `
        getId('module').insertAdjacentHTML('beforeEnd', div)
    }
    if (template.title) {
        document.title = template.title
    }
    if (template.download_type && parseInt(template.download_type) == 2) {
        // download_type: 1 按钮点击  2 全屏点击
        // 全屏点击
        getId('module').onclick = function (e) {
            skipFn()
        }
    }
    if (template.download_time && parseInt(template.download_time) !== 0) {
        setTimeout(() => {
            skipFn()
        }, template.download_time * 1000)
    }
}

// 获取id
function getId(id) {
    const obj = document.getElementById(id)
    return obj
}
// 添加点击事件
function addClick(id, cb) {
    getId(id).addEventListener('click', cb, true)
}

// 获取设备
function getEquipment() {
    let equipmentType = "";
    let agent = navigator.userAgent.toLowerCase();
    let android = agent.indexOf("android");
    let iphone = agent.indexOf("iphone");
    let ipad = agent.indexOf("ipad");
    if (android != -1) {
        equipmentType = "android";
    } else if (iphone != -1 || ipad != -1) {
        equipmentType = "ios";
    } else {
        equipmentType = "pc";
    }
    return equipmentType;
}
// 判断是否微信环境
function isWeixin() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    }
    return false;
};

// 跳转函数
function skipFn() {
    const android = template.android_download_url
    const ios = template.ios_download_url
    const notBoth = template.download_url
    if (isWeixin()) {
        getId('dimback').style.display = 'block'
    } else {
        if (android || ios || notBoth) {
            let url = ''
            if (android && ios) {
                // 双端
                url = getEquipment() == 'ios' ? ios : android
            } else {
                // 非双端
                url = notBoth
            }
            window.location.href = url
        }
    }
}

// 添加顶部按钮
function addTopBtn(obj, i) {
    let div = `
                    <div id="${obj.name}_${i}" class="bh topBtn">
                        <img src="${obj.url}" alt="">
                    </div>
                `
    getId('module').insertAdjacentHTML('beforeEnd', div)
    if (parseInt(template.download_type) == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        getId(`${obj.name}_${i}`).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加底部按钮
function addBottomBtn(obj, i) {
    let div = `
                    <div id="${obj.name}_${i}" class="bh bottomBtn">
                        <img src="${obj.url}" alt="">
                    </div>
                `
    getId('module').insertAdjacentHTML('beforeEnd', div)
    if (parseInt(template.download_type) == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        getId(`${obj.name}_${i}`).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加普通图片的div
function addImg(obj, i) {
    let div = `     
                    <div id="${obj.name}_${i}" class="bh sticky">
                        <img src="${obj.url}" alt="">
                    </div>
                        `
    getId('module').insertAdjacentHTML('beforeEnd', div)
    if (parseInt(template.download_type) == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        getId(`${obj.name}_${i}`).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加左右滑动的swiper
function addSwiper1(obj, i) {
    // let str = obj.swiperList.map((item, index) => {
    //    return all =`<div class="swiper-slide">
    //                 <img src="${item}" alt="">
    //             </div>`
    // })
    let str = ''
    for (let i = 0; i < obj.swiperList.length; i++) {
        let img = `
            <div class="swiper-slide">
                <img src="${obj.swiperList[i]}" alt="">
            </div>
        `
        str += img
    }
    let div = `
    <div id="${obj.name}_${i}" class="swiper_wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                ${str}
            </div>
        </div>
    </div>`
    getId('module').insertAdjacentHTML('beforeEnd', div)
    if (parseInt(template.download_type) == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        getId(`${obj.name}_${i}`).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 动态添加div
function setModule(arr) {
    for (let i = 0; i < arr.length; i++) {
        let target = arr[i]
        switch (target.name) {
            case 'topBtn':
                addTopBtn(target, i)
                break;
            case 'bottomBtn':
                addBottomBtn(target, i)
                break;
            case 'img':
                addImg(target, i)
                break;
            case 'swiper1':
                addSwiper1(target, i)
                break
        }
    }
}

// 请求
function httpRequest(paramObj, fun, errFun) {
    let xmlhttp = null;
    /*创建XMLHttpRequest对象，
     *老版本的 Internet Explorer（IE5 和 IE6）使用 ActiveX 对象：new ActiveXObject("Microsoft.XMLHTTP")
     * */
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    /*判断是否支持请求*/
    if (xmlhttp == null) {
        alert('你的浏览器不支持XMLHttp');
        return;
    }
    /*请求方式，并且转换为大写*/
    let httpType = (paramObj.type || 'GET').toUpperCase();
    /*数据类型*/
    let dataType = paramObj.dataType || 'json';
    /*请求接口*/
    let httpUrl = paramObj.httpUrl || '';
    /*是否异步请求*/
    let async = paramObj.async || true;
    /*请求参数--post请求参数格式为：foo=bar&lorem=ipsum*/
    let paramData = paramObj.data || [];
    let requestData = '';
    for (let name in paramData) {
        requestData += name + '=' + paramData[name] + '&';
    }
    requestData = requestData == '' ? '' : requestData.substring(0, requestData.length - 1);

    /*请求接收*/
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            /*成功回调函数*/
            fun(xmlhttp.responseText);
        } else {
            /*失败回调函数*/
            errFun;
        }
    }

    /*接口连接，先判断连接类型是post还是get*/
    if (httpType == 'GET') {
        xmlhttp.open("GET", httpUrl, async);
        xmlhttp.send(null);
    } else if (httpType == 'POST') {
        xmlhttp.open("POST", httpUrl, async);
        //发送合适的请求头信息
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(requestData);
    }
}

// 获取url上的参数
function getUrlParmas(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    let context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}