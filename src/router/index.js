import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/slide',
      name: 'slide',
      meta: {
        title: '滑动'
      },
      component: () => import('../components/slide')
    },
    {
      path: '/',
      name: 'jiyan',
      meta: {
        title: '极验'
      },
      component: () => import('../components/jiyan.vue')
    },
  ]
})