// main.js
import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import mytoast from "./toast.vue"; // 引入刚才的 toast 组件

let ToastConstructor = Vue.extend(mytoast); // 这个在前面的前置知识内容里面有讲到
let instance;

const Toast = function(options={}) {
  instance = new ToastConstructor({
    data:options //这里的 data 会传到 toast.vue 组件中的 data 中，当然也可以写在 props 里
  }).$mount(); // 渲染组件
  document.body.appendChild(instance.$el); // 挂载到 body 下
};

// 以下就是在 Toast 函数中拓展 ["success", "error"] 这两个方法
["success", "error"].forEach(type => {
  Toast[type] = options => {
    options.type = type;
    return Toast(options);
  };
});


export default Toast;


