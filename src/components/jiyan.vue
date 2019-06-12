<template>
  <div class="box">
    <div id="geetest"></div>
    <button class="login_btn" @click="loginHandler">登录</button>
  </div>
</template>
<script>
import { Promise } from "q";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      geetestObj: {}
    };
  },
  created() {
   
  },
  methods: {
//     {
//     "error_no": 0,
//     "data": {
//         "success": 1,
//         "gt": "37ca5631edd1e882721808d35163b3ad",
//         "challenge": "2df4904f10c0a3f07fc5b60a429d5ef5"
//     }
// }
    // 登陆
    loginHandler() {
      this.$http
        .geetestinfo()//获取  gt success challenge
        .then(this.init_geetest)// 吊起极验验证弹窗 获取 geetest_challenge， geetest_validate， geetest_seccode
        .then(this.loginsure)//服务端再次验证 然后登陆成功
        .catch(err => {
          console.log(err);
        });
    },
    loginsure(params) {
      this.$http
        .login(params)
        .then(res => {
          if (res.error_no === 0) {
            // 登陆成功后,返回之前访问的页面
            // this.$router.go(-1);
            // 将返回的数据赋值给变量data
            // let data = res.data;
            // 通过for-in循环来遍历data,将data中每个字典对象,存储到cookie
            // for (let key in data) {
            //   this.$cookies.set(key, data[key]);
            // }
            // 分发actions中声明的方法
            // this.$store.dispatch("getUser", data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    init_geetest(res) {
      return new Promise((resolve, rejet) => {
        data = res.data;
        initGeetest(
          {
            // 以下配置参数来自服务端 SDK
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success,
            new_captcha: true,
            product: "bind",
            width: "100%"
          },
          captchaObj => {
            console.log(captchaObj);
            // 这里可以调用验证实例 captchaObj 的实例方法
            captchaObj.appendTo("#geetest");
            // 这里调用了 onSuccess 方法，该方法介绍见下文
            captchaObj.onSuccess(() => {
              var result = captchaObj.getValidate();
              console.log(result);
              let params = {
                geetest_challenge: result.geetest_challenge,
                geetest_seccode: result.geetest_seccode,
                geetest_validate: result.geetest_validate,
                // username: this.username,
                // password: this.password
              };
              reslove(params);
              // this.geetestObj = result;
            });
          }
        );
      });
    },
    
  }
};
</script>



