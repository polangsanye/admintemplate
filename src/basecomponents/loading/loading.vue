<template>
  <div class="lodingwrap" v-show="show">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name:'Loading',
  data(){
    return {
      show:false
    }
  },
}
</script>

<style lang="less" scoped>
  .lodingwrap{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    .loading{
      width: 50px;
      height: 50px;
      border-radius:100%;
      border: 2px white solid;
      border-right-color: #87CEEB;
      animation: rotateinfinet 1s linear infinite;
    }
  }
  @keyframes rotateinfinet{
    0%{
     transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
