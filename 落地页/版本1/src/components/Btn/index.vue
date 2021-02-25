<template>
  <div class="btn" @click="btnClick">
    这里是大btn
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Btn',
    data() {
        return {

        }
    },
    methods: {
      ...mapMutations(['changeType']),
      btnClick() {
        this.changeType(1)
      }
    }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  background-color: green;
  width: 100%;
  height: 100px;
}
</style>