interface maintype {
    icp: string
    copyright: string
}

interface templateType {
    type: number
    image: {
        [key: string]: string
    }
    swiper?: {
        [key: string]: string
    }
    download_time: number
    title: string,
    download_url: string
    download_type: number
    android_download_url?: string
    ios_download_url?: string
}

interface configType {
    main: maintype
    template: templateType
    moduleNum: number
}

type objType = {
    name: string
    url?: string
    clickFn: (res?: any) => void | undefined
    swiperList?: string[]
    click?: boolean
}

let main: maintype
let template: templateType
let moduleNum: number

//获取配置
httpRequest({
    httpUrl: './config.json'
}, (res: unknown) => {
    let name = getUrlParmas('gameName')
    let obj = eval('(' + res + ')');
    let data: configType = obj[name as string]
    main = data.main
    moduleNum = data.moduleNum
    template = data.template
    init()
})


// 初始化 排版
function init(): void {

    const image = template.image
    let imgList: string[] = []
    for (let i in image) {
        imgList.push(image[i])
    }

    const swiper = template.swiper
    let swiperList: string[] = []
    for (let i in swiper) {
        swiperList.push(swiper[i])
    }
    let arr: any = []
    // topBtn    顶部固定按钮 
    // img    普通大图 
    // swiper1    5张轮播图
    // bottomBtn   底部固定按钮

    const choose: Map<number, objType[]> = new Map([
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
            swiperList,
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
    arr = choose.get(moduleNum)
    setModule(arr)
    addComFun()
}

// 添加其他公用的东西
function addComFun(): void {
    if (main.icp || main.copyright) {
        // 底部文字
        let div: string = `
                        <div id="elseFont" class="bh">
                            <div>${main.copyright}</div>
                            <div>${main.icp}</div>
                        </div>
                    `;
        (getId('module') as any).insertAdjacentHTML('beforeEnd', div)
    }
    if (template.title) {
        document.title = template.title
    }
    if (template.download_type && template.download_type == 2) {
        // download_type: 1 按钮点击  2 全屏点击
        // 全屏点击
        (getId('module') as HTMLElement).onclick = function (e) {
            skipFn()
        }
    }
    if (template.download_time && template.download_type !== 0) {
        setTimeout(() => {
            skipFn()
        }, (template.download_time as number) * 1000)
    }
}

// 获取id
function getId(id: string): HTMLElement | null {
    const obj = document.getElementById(id)
    return obj
}
// 添加点击事件
function addClick(id: string, cb: (res?: any) => void): void {
    (getId(id) as HTMLElement).addEventListener('click', cb, true)
}

// 获取设备
function getEquipment(): string {
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

// 跳转函数
function skipFn(): void {
    const android = template.android_download_url
    const ios = template.ios_download_url
    const notBoth = template.download_url
    if (android || ios || notBoth) {
        let url: string = ''
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

// 添加顶部按钮
function addTopBtn(obj: objType, i: number): void {
    let div: string = `
                    <div id="${obj.name}_${i}" class="bh topBtn">
                        <img src="${obj.url}" alt="">
                    </div>
                `;
    (getId('module') as any).insertAdjacentHTML('beforeEnd', div)
    if (template.download_type == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        (getId(`${obj.name}_${i}`) as HTMLElement).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加底部按钮
function addBottomBtn(obj: objType, i: number): void {
    let div: string = `
                    <div id="${obj.name}_${i}" class="bh bottomBtn">
                        <img src="${obj.url}" alt="">
                    </div>
                `;
    (getId('module') as any).insertAdjacentHTML('beforeEnd', div)
    if (template.download_type == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        (getId(`${obj.name}_${i}`) as HTMLElement).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加普通图片的div
function addImg(obj: objType, i: number): void {
    let div: string = `     
                    <div id="${obj.name}_${i}" class="bh sticky">
                        <img src="${obj.url}" alt="">
                    </div>
                        `;
    (getId('module') as any).insertAdjacentHTML('beforeEnd', div)
    if (template.download_type == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        (getId(`${obj.name}_${i}`) as HTMLElement).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 添加左右滑动的swiper
function addSwiper1(obj: objType, i: number): void {
    // let str = obj.swiperList.map((item, index) => {
    //    return all =`<div class="swiper-slide">
    //                 <img src="${item}" alt="">
    //             </div>`
    // })
    let str = ''
    for (let i = 0; i < (obj.swiperList as string[]).length; i++) {
        let img = `
            <div class="swiper-slide">
                <img src="${(obj.swiperList as string[])[i]}" alt="">
            </div>
        `
        str += img
    }
    let div: string = `
    <div id="${obj.name}_${i}" class="swiper_wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                ${str}
            </div>
        </div>
    </div>`;
    (getId('module') as any).insertAdjacentHTML('beforeEnd', div)
    if (template.download_type == 1 && obj.clickFn && typeof obj.clickFn == 'function') {
        ( getId(`${obj.name}_${i}`) as HTMLElement).onclick = function (e) {
            obj.clickFn()
        }
    }
}

// 动态添加div
function setModule(arr: objType[]): void {
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
function httpRequest(paramObj: {type?: string, dataType?: string, httpUrl?: string, async?: boolean, data?: any}, fun: (res?: any) => void, errFun?: (err?: any) => void): void {
    let xmlhttp: any;
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
function getUrlParmas(name: string): string | null {
    let reg: RegExp | null = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    let context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}