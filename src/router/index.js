import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
   
    path: '/',
    
    redirect: '/dashboard'
  },
  {
   
    meta: {
      title: 'Panel de Control'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('🚀 ~ file: index.js ~ line 95 ~ scrollBehavior ~ to, from', to, from)
    return savedPosition || { top: 0 }
  }
})

export default router
