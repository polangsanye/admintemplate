<template>
  <div class="login">
    <div class="ver">
      <drag-verify
        @passcallback="passcallback"
        :width="width"
        :height="height"
        :text="text"
        :success-text="successText"
        :background="background"
        :progress-bar-bg="progressBarBg"
        :completed-bg="completedBg"
        :handler-bg="handlerBg"
        :handler-icon="handlerIcon"
        :text-size="textSize"
        :success-icon="successIcon"
        ref="Verify"
      ></drag-verify>
    </div>
  </div>
</template>

<script>
import dragVerify from "vue-drag-verify";
export default {
  name: "login",
  create() {},
  mounted() {
    // console.log(this.$route);
  },
  watch:{
    '$route'(to,from){
      // to 是从本页要去的页面路由的信息
      // from 是本页路由信息
      console.log(to,from)
    }
  },
  components: {
    dragVerify
  },
  data() {
    return {
      show: true,
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 320,
      height: 42,
      textSize: "18px",
      isCircle: "true"
    };
  },
  methods: {
    // 滑动完成消失
    passcallback(data) {
      // console.log(this.$refs.Verify.isMoving);
      console.log(this.$refs.Verify.isPassing);
    }
  }
};
</script>

<style>
.ver {
  padding: 10px;
}
</style>

