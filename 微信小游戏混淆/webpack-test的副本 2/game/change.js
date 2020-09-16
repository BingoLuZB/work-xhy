var changeJudge = false
function changeGame(callBack) {
  let options = wx.getLaunchOptionsSync();
  let initData = {
    pid: 158,
    gid: 100154,
    mid: options.query.mid || "10000",
    p_mid: options.query.p_mid || 1,
    partner_data: '',
    tm: Date.parse(new Date())
  };
  // if (!wx.getStorageSync("p_mid") || !wx.getStorageSync("mid")) {
    let client_id = wx.getStorageSync('client_id');
    if (!client_id) {
      client_id = getClientId();
      wx.setStorageSync('client_id', client_id);
    }
    initData.client_id = client_id
    wx.login({
      success: res => {
        initData.partner_data = JSON.stringify({
          code: res.code
        })
        wx.request({
          url: "https://partner.kunyufun.com/api/v1/partner/init",
          data: initData,
          method: "post",
          success: function (res) {
            let resData = res.data
            if (resData.code == 200 && resData.data.device == 1) {
              wx.setStorageSync('p_mid', resData.data.p_mid);
              wx.setStorageSync('mid', resData.data.mid);
              // require("js/main.js")
              changeJudge = true
              wx.setStorageSync('changeJudge', changeJudge)
              require("./js/protobuf-library.min.js")
              require("./js/protobuf-bundles.min.js")
              require("./js/default.thm.min.js")
              callBack()
            } else {
              // require("js/main2.js")
              wx.setStorageSync('changeJudge', changeJudge)
              require("./js/default.thm.js")
              callBack()
            }

          },
          fail: function (res) {
              // require("js/main2.js")
              wx.setStorageSync('changeJudge', changeJudge)
              require("./js/default.thm.js")
              callBack()
          }
        })
      }
    })
  
  /**
   * 伪造client_id
   */
  function getClientId() {
    const myDate = new Date();
    let client_id = 'wx';
    const num = parseInt(Math.random() * (9999 - 1000 + 1) + 1000000, 10);
    client_id += myDate.getFullYear();
    client_id += '-' + (myDate.getMonth() + 1);
    client_id += '-' + myDate.getDate();
    client_id += '-' + myDate.getHours();
    client_id += '-' + myDate.getMinutes();
    client_id += '-' + myDate.getSeconds();
    client_id += '-' + num;
    return client_id;
  }

  function signData(queryObj) {
    const keyArr = Object.keys(queryObj);
    let str = '';
    keyArr.includes('sign') ? keyArr.splice(keyArr.findIndex(item => item === 'sign'), 1) : ''
    keyArr.sort();
    for (let i = 0; i < keyArr.length; i += 1) {
      if (queryObj[keyArr[i]] !== 0 && queryObj[keyArr[i]]) {
        str = `${str}&${keyArr[i]}=${queryObj[keyArr[i]]}`;
      }
    }
    return new md5().hex_md5(`${str.substr(1)}&`)
  }
}
window.changeJudge = changeJudge
window.changeGame = changeGame
