import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home',meta: {title: '主页'},name: 'home',component: Home}
]

const router = new VueRouter({
  routes
})

export default router
