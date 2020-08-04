import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store' // vuex
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 设置文档标题
  if (to.meta.title) document.title = to.meta.title

  // 跳转前存储路由
  if (from.name) {
    const { name, params, query } = from
    store.commit('setPrePath', { name, params, query })
  }

  // 跳转
  next()
})

export default router
