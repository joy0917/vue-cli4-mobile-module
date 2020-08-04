import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/base.less' // 全局样式
import VConsole from 'vconsole'
import storage from 'store' // 本地存储
import { Popup, Card, Stepper, Button, Cell, CellGroup, Icon, Image, NavBar, CountDown, Dialog, Field, Form, Picker, Lazyload, List, Loading, Grid, GridItem, Col, Row, Overlay, RadioGroup, Radio, Toast, IndexBar, IndexAnchor, Swipe, SwipeItem, Tabbar, TabbarItem, Divider, DropdownMenu, DropdownItem } from 'vant'
require('promise.prototype.finally').shim() // 扩展Promise.finally方法

if (process.env.VUE_APP_ENV === 'test') {
  /* eslint-disable no-new */
  new VConsole()
}

Vue.config.productionTip = false
// 本地存储
Vue.prototype.$storage = storage

Vue.use(Button) // 按钮
Vue.use(Card) // 商品卡片
Vue.use(Cell) // 单元格
Vue.use(CellGroup)
Vue.use(Col) // 布局
Vue.use(Row)
Vue.use(CountDown) // 倒计时
Vue.use(Dialog) // 弹出框
Vue.use(Form) // 表单
Vue.use(Stepper) // 步进器（步进器组件需要放在输入框组件前面use，否则会导致输入框样式冲突）
Vue.use(Field) // 输入框
Vue.use(Grid) // 宫格
Vue.use(GridItem)
Vue.use(Image) // 图片
Vue.use(Icon) // 图标
Vue.use(IndexBar) // 索引栏
Vue.use(IndexAnchor)
Vue.use(Lazyload) // 懒加载
Vue.use(Lazyload, { lazyComponent: true }) // 懒加载
Vue.use(List) // 列表
Vue.use(Loading) // 加载
Vue.use(NavBar) // 导航栏
Vue.use(Overlay) // 遮罩层
Vue.use(Popup) // 弹出层
Vue.use(Picker) // 选择器
Vue.use(Radio) // 单选框
Vue.use(RadioGroup) // 单选框
Vue.use(Toast) // 轻提示
Vue.use(Swipe) // 轮播
Vue.use(SwipeItem) // 轮播
Vue.use(Tabbar) // 导航
Vue.use(TabbarItem) // 导航
Vue.use(Divider) // 分割线
Vue.use(DropdownMenu) // 下拉菜单
Vue.use(DropdownItem) // 下拉菜单

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
