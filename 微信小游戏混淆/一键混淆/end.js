const fs = require('fs');
const { showAlert } = require('./util.js')

let res = fs.readdirSync('./')
let delteArr = ['webpack.config', 'aftermath']

setTimeout(() => {
    showAlert('混淆执行完成！')
    delteArr.map((item, index, arr) => {
        res.map((item2, index2, arr2) => {
            if (item2.includes(item)) {
                fs.unlinkSync(item2)
            }
        })
    })
}, 3000)