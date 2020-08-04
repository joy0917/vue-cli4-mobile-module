import storage from 'store' // 本地存储
export default {
  state: {
    prePath: storage.get('prePath') // 存储上一页路由
  },
  mutations: {
    setPrePath (state, data) {
      storage.set('prePath', data)
      state.prePath = data
    }
  }
}
