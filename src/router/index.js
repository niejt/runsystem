import Vue from 'vue'
import VueRouter from 'vue-router'
// import auth from '../utils/auth.js'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') }
]

const router = new VueRouter({
  routes
})
// 路由守卫拦截
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/login') return next()
  // 获取token
  // const token = auth.getToken()
  // if (!token) return next('/login')
  next()
})

export default router
