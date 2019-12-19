import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: "/projectA",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "projectA/home" */ `./components/HelloWorld.vue`)
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "projectA/test" */ `./components/Test.vue`)
    }
  ]
})
