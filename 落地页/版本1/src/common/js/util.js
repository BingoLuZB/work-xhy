export default {
  /**
   * 解析url参数
   * @example ?id=123&a=c
   * @return obj{id:123,a:b}
   */
  urlParser: function () {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
      arr.forEach((item) => {
        let tempArr = item.substring(1).split('=');
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      })
    }
    return obj;
  },
  // 获取设备
  detect() {
    var equipmentType = "";
    var agent = navigator.userAgent.toLowerCase();
    var android = agent.indexOf("android");
    var iphone = agent.indexOf("iphone");
    var ipad = agent.indexOf("ipad");
    if (android != -1) {
      equipmentType = "android";
    } else if (iphone != -1 || ipad != -1) {
      equipmentType = "ios";
    } else {
      equipmentType = "pc";
    }
    return equipmentType;
  },
  // 生成idfa
  getIdfa() {
    const myDate = new Date();
    let idfa = 'h5';
    const num = parseInt(Math.random() * (9999999999 - 1), 10);
    idfa += myDate.getFullYear();
    idfa += '-' + (myDate.getMonth() + 1);
    idfa += '-' + myDate.getDate();
    idfa += '-' + myDate.getHours();
    idfa += '-' + myDate.getMinutes();
    idfa += '-' + myDate.getSeconds();
    idfa += '-' + num;
    localStorage.setItem('bhIdfa', idfa);
    return idfa;
  },
  /*
      url参数取值
      @param name 参数名
      @return  参数名对应的值
   */
  getQueryString: function (name) {
    var url = window.location.hash;
    var index = url.indexOf('?');
    url = url.substr(index + 1);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  },

  /**
   * 时间戳格式化
   * @timestamp  时间戳
   * @format  日期格式 例：yyyy-MM-dd hh:mm:ss
   * @return yyyy-MM-dd hh:mm:ss
   * @author: wu
   */
  formatDate: function (inDate, fmt) {
    if (typeof inDate == 'string') {
      inDate = inDate && parseInt(inDate)
    }
    if (!inDate || inDate <= 0) {
      return 0;
    }
    var date = new Date(inDate);
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds() //毫秒
    };
    if (!this.isNotEmpty(fmt)) {
      fmt = 'yyyy-MM-dd hh:mm:ss';
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  },
  /**
   * 设置/清除LocalStorage
   * @param {[type]} key   [键名]
   * @param {[type]} value [键值]
   * @param {[type]} days  [保存的时间（天）]
   */
  setLocalStorage: function (key, value, days) {
    // 设置过期原则
    if (!value) {
      localStorage.removeItem(key)
    } else {
      var Days = days || 6.5; // 默认保留6.5天
      var exp = new Date();
      localStorage[key] = JSON.stringify({
        value,
        setTime: exp.getTime() + Days * 24 * 60 * 60 * 1000
      })
    }
  },
  // 获取LocalStorage
  getLocalStorage: function (name) {
    try {
      let o = JSON.parse(localStorage[name])
      if (!o || o.expires < Date.now()) {
        return null
      } else {
        return o.value
      }
    } catch (e) {
      // 兼容其他localstorage 
      // console.log(e)
      return localStorage[name]
    } finally {}
  },

  /**
   * 获取cokie值
   * @name  key键名
   * @format   例：getCookie(token)
   * @return  	2323sxcsf2342sdf
   */
  getCookie: function (name) {
    var strcookie = document.cookie; //获取cookie字符串
    var arrcookie = strcookie.split("; "); //分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      if (arr[0] == name) {
        return arr[1];
      }
    }
    return "";
  },

  /**
   * 设定cokie值
   * @name  s20是代表20秒，h是指小时，如12小时则是：h12 ，d是天数，30天则：d30
   * @format   例：setCookie('token',2312,'d1')
   * @return  	null
   * @author: zhong
   */
  setCookie: function (name, value, time) {
    // var strsec = this.getsec(time);
    // var exp = new Date();
    // exp.setTime(exp.getTime() + strsec * 1);
    // document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    var Days = time || 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

  },
  /**
   * 清除cookie
   * @param {要清除的cookie，不传默认全部清除} key 
   */
  clearCookie(key) {
    if (key) {
      document.cookie = key + "=0;expires=" + new Date(0).toUTCString() + ";path=/";
    } else {
      var keys = document.cookie.match(/[^ =;]+(?=)/g);
      console.log(keys, '====key')
      if (keys) {
        for (var i = keys.length; i--;) {
          document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString() + ";path=/";
        }
      }
    }
  },

  /**
   * 节流
   * @param {*节流回调函数} fn 
   * @param {*触发间隔} delay 
   */
  throttle(func, delay) {
    var timer = null;
    return function () {
      let context = this;
      let args = arguments;
      if (!timer) {
        console.log(666666)
        timer = setTimeout( () => {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    }
  },
  /**
   * 是否手机
   * @name  key键名
   * @format   例：isMoblie('13711111111')
   * @return  	注：不正确时返回 true
   */
  isMoblie: function (value) {
    return !/^1\d{10}$/.test(value);
  },


  /**
   * 算出几个月之后的时间
   * @date  date的值例如 2017-08-03 13:14
   * @mon  多少个月
   * @return  返回几个月后的日期 如2017/09/03 13:14
   */
  activeTime: function (date, mon) {
    // date的值例如 2017-08-03 13:14
    var arr = date.split('-');
    var year = arr[0]; //获取日期的年份
    var month = arr[1]; //获取日期的月份

    var newarr = arr[2].split(" ");
    var day = newarr[0]; //获取日期的日
    var time = newarr[1]; //获取日期的分秒

    //var days = new Date(year, month, 0);
    //days = days.getDate(); //获取当前日期中的月的天数

    var year2 = year;
    var month2 = parseInt(month) + mon
    if (month2 >= 13) {
      year2 = parseInt(year2) + 1;
      month2 = month2 - 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    if (month2 < 10) {
      month2 = '0' + month2;
    }

    var t2 = year2 + '/' + month2 + '/' + day2 + ' ' + time;
    return t2;
  },
  /**
   * 去除字符串两边的空格
   */
  trim: function (str) {
    if (str == "") return "";
    if (!str) return;
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },

  /**
   * 保留两位小数(四舍五入)
   * @inNum 转换的数字
   */
  returnFloat: function (inNum) {
    var num = Math.round(parseFloat(inNum) * 100) / 100;
    var xsd = num.toString().split(".");
    if (xsd.length == 1) {
      num = num.toString() + ".00";
      return num;
    }
    if (xsd.length > 1) {
      if (xsd[1].length < 2) {
        num = num.toString() + "0";
      }
      return num;
    }
  },




  /**
   * 是否为空
   * @param str
   * @returns {boolean}
   */
  isNotEmpty: function (str) {
    if (str != '' && str != null && typeof str != 'undefined') {
      return true;
    }
    console.warn('argument format is wrong');
    return false;
  },

  /**
   * 倒计时
   * @time 时间戳
   * @timeId  定时器名称
   */
  getRTime: function (time, timeId) {
    var t = new Date(time).getTime();
    var d = 0,
      h = 0,
      m = 0,
      s = 0;
    if (t >= 0) {
      d = Math.floor(t / 1000 / 60 / 60 / 24);
      h = Math.floor(t / 1000 / 60 / 60 % 24);
      m = Math.floor(t / 1000 / 60 % 60);
      s = Math.floor(t / 1000 % 60);
    } else {
      if (timeId) {
        clearInterval(timeId);
      }
      return {
        'days': '00',
        'hours': '00',
        'minutes': '00',
        'seconds': '00'
      }
    }
    var obj = {
      'days': checkTime(d),
      'hours': checkTime(h),
      'minutes': checkTime(m),
      'seconds': checkTime(s)
    }

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    return obj;
  },


  /**
   * 判断是否在微信中打开
   * @return  boolean  true 是
   * @author: zlf
   */
  is_wexin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },

  /**
   * 只能输入英文大小写，中文字符
   */
  onlyInputChEn(val) {
    let regExp = /^[A-Za-z\u4e00-\u9fa5]+$/
    if (regExp.test(val)) {
      return true
    }
    return false
  },
  /**
   * 只能输入字母，数字
   * @param {*} val 
   */
  onlyInputEnNum(val) {
    let regExp = /^[0-9a-zA-Z]+$/
    if (regExp.test(val)) {
      return true
    }
    return false
  },

  /**
   * 伪造client_id
   */
  getClientId() {
    const myDate = new Date();
    let client_id = "BHplatform";
    const num = parseInt(Math.random() * (9999 - 1000 + 1) + 1000000, 10);
    client_id += myDate.getFullYear();
    client_id += "-" + (myDate.getMonth() + 1);
    client_id += "-" + myDate.getDate();
    client_id += "-" + myDate.getHours();
    client_id += "-" + myDate.getMinutes();
    client_id += "-" + myDate.getSeconds();
    client_id += "-" + num;
    return client_id;
  },


  // 获取时间戳
  getTm() {
    let tmp = Date.parse(new Date())
    if (tmp) {
      tmp = tmp.toString().substr(0, 10);
    } else {
      tmp = Math.round(new Date().getTime() / 1000)
    }
    return tmp;
  },
  // 判断安卓
  isAndroid() {
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
      if (window.ShowFitness !== undefined) return true;
    }
    return false;
  },
  // 判断设备为 ios
  isIos() {
    var u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
      return true;
    }
    return false;
  },
  // 参数排序
  querySort(queryObj) {
    const keyArr = Object.keys(queryObj);
    let str = '';
    // 兼容低端安卓机
    if (!Array.prototype.findIndex) {
      Array.prototype.findIndex = function (predicate) {
        if (this == null) {
          throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
        return -1;
      };
    }
    keyArr.indexOf('sign') > -1 ? keyArr.splice(keyArr.findIndex(item => item === 'sign'), 1) : ''
    keyArr.sort();
    for (let i = 0; i < keyArr.length; i += 1) {
      if (queryObj[keyArr[i]] !== 0 && queryObj[keyArr[i]]) {
        str = `${str}&${keyArr[i]}=${queryObj[keyArr[i]]}`;
      }
    }
    return `${str.substr(1)}&`;
  },
}