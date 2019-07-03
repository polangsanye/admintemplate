import LoadingComponent from './loading.vue';//先引入loading组件
const Loading = {}
Loading.install = function (Vue) {
  // 生成一个Vue的子类 同时这个子类也就是组件
  const LoadingConstructor = Vue.extend(LoadingComponent)
  // 生成一个该子类的实例
  const instance = new LoadingConstructor().$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  //注入vue的原型链
  Vue.prototype.$loading = {
    show() {
      instance.show = true
    },
    hide() {
      instance.show = false
    }
  }
}
export default Loading