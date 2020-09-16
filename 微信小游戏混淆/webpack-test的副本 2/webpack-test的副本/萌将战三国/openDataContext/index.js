/**
 * 增加来自主域的监听函数
 */
function addOpenDataContextListener() {
  console.log('增加监听函数')
  wx.onMessage((data) => {
    console.log(data);    
  });
}
addOpenDataContextListener();



