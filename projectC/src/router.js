import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "/projectC",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "projectC/home" */ `./components/HelloWorld.vue`)
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "projectC/test" */ `./components/Test.vue`)
    },
  ]
})
