import Vue from 'vue'
import App from './App.vue'
import api from '@/api'
import store from '@/store'
import router from '@/router'
import "font-awesome/css/font-awesome.min.css";
import Loading from './basecomponents/loading/loading';
import Toast from './basecomponents/toast/toast';
Vue.prototype.$toast=Toast;


Vue.use(Loading);


Vue.prototype.$api=api;
// console.log(process.env.NODE_ENV)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
