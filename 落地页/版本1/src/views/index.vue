<template>
  <div class="home">
    <div class="box">
      <div class="top">这里是操控面板</div>
      <div class="main">
        <div class="left">
          <div>
            <el-radio-group v-model="radio" size="small" @change="changeModule">
              <el-radio-button v-for="(item, index) in componentList" :key="index" :label="item" ></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="center">
          <div class="preview">
            <component :is="radio"></component>
          </div>
        </div>
        <div class="right">
            <component :is="clickTypeList[clickType]"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import { mapState } from 'vuex'
export default {
  name: "Home",
  data() {
    return {
      radio: null,
      // 模板类型
      componentList: ["ModuleOne", "ModuleTwo"],
      // 按钮属性类型
      clickTypeList: ["BigImgType", "BtnType"]
    };
  },
  mounted() {

  },
  computed: {
    ...mapState(['clickType']),
  },
  methods: {
    changeModule() {
      console.log(this.radio, '====radio')
    }
  }
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
.box {
  .top {
    height: 46px;
    line-height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: solid 1px #969799;
    .control {
      flex: 1;
    }
    // background-color: black;
  }
  .main {
    width: 100%;
    position: absolute;
    top: 46px;
    bottom: 0px;
    left: 0px;
    display: flex;
    // width: 500px;
    .left {
      flex: 2;
      text-align: center;
      // background: green;
    }
    .center {
      border-left: solid 1px black;
      border-right: solid 1px black;
      flex: 6;
      background-color: #969799;
      .preview {
        height: calc(100% - 10px);
        width: 46%;
        background-color: white;
        margin: 0 auto;
        margin-top: 5px;
        border: solid 1px #969799;
        // border-radius: 5%;
      }
    }
    .right {
      flex: 2;
      // background-color: blue;
    }
  }
}
</style>
