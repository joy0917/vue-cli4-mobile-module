import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import page from './module/page'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    page
  }
})
