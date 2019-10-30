import Vue from 'vue'
import VueRouter from 'vue-router'
import denglu from '../pages/denglu'
import buju from '../pages/manager/buju'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: denglu
  },
  {
    path: '/buju',
    name:'buju',
    component: buju,
    children:[
      {
        path: 'wode',
        component: ()=>import('../pages/manager/wode'),
      },
      {
        path: 'dingdan',
        component: ()=>import('../pages/manager/dingdan.vue')
      },
      {
        path: 'shouye',
        component: ()=>import('../pages/manager/shouye.vue')
      }
    ]
  },
  {
    path: '/address',
    component: ()=>import('../pages/manager/address.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
