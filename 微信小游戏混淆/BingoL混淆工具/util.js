const fs = require('fs');
const cp = require('child_process');

module.exports = {
    // windows 警告框
    showAlert(str) {
        cp.exec(`msg %username% ${str}`)
    },

    // 读取文件
    rf(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                err ? reject(err) : resolve(data)
            })
        })
    },
    // 写入文件
    wf(target, data, flag) {
        return new Promise((resolve, reject) => {
            fs.writeFile(target, data, {
                flag
            }, (err) => {
                err ? reject(err) : resolve()
            })
        })
    },
    // 字符串 过滤掉特殊字符跟中文
    checkStr(s) {
        var str = s.replace(/%/g, "").replace(/\+/g, "").replace(/\s/g, ""); //   %   +   \s 
        str = str.replace(/-/g, "").replace(/\*/g, "").replace(/\//g, ""); //   -   *   / 
        str = str.replace(/\&/g, "").replace(/!/g, "").replace(/\=/g, ""); //   &   !   = 
        str = str.replace(/\?/g, "").replace(/:/g, "").replace(/\|/g, ""); //   ?   :   | 
        str = str.replace(/\,/g, "").replace(/\./g, "").replace(/#/g, ""); //   ,   .   # 
        str = str.replace(/([^\u0000-\u00FF])/g, "") // 删除中文
        return str;
    },
    // 获取当前详细日期
    getDate(isToday) {
        var now = new Date(),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        if (isToday) {
            return y + (m < 10 ? "0" + m : m) + (d < 10 ? "0" + d : d)
        } else {
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        }
    }
}