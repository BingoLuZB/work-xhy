import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moudule: {
      type: 0,
      content: [
        {
          title: 'BtnType',
          components: [
            {
              id: 'BtnType1',
              propertype: '点击属性',
              imgUrl: '按钮图片地址',
            }
          ] 
        },
        {
          title: 'BigImgType',
          components: [
            {
              id: 'BigImgType1',
              propertype: '点击属性',
              imgUrl: '背景图地址',
              companyName: '公司名',
              phone: '电话号码'
            }
          ] 
        },
      ]
    },
    clickProperty: {
      
    }
  },
  mutations: {
    changeType(state, val) {
      console.log(val, '====value')
      // state.clickType = val
    }
  },
  actions: {},
  modules: {}
});
