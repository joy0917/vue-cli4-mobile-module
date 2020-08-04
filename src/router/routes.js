import Main from '@/views/main'
/**
  * @description meta参数
  * @param {String} title 定义html文档的标题, 默认''
  * @param {Boolean} keepAlive 是否缓存页面数据 默认false
  */
export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home.vue')
  },
  {
    path: '/page',
    name: 'page',
    component: Main,
    meta: {
      title: '测试页面'
    },
    children: [
      {
        path: '/page/test',
        name: 'page_test',
        meta: {
          title: '测试页面1',
          keepAlive: true
        },
        component: () => import('@/views/page/test.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      title: '页面丢失'
    },
    component: () => import('@/views/error/error_404.vue')
  }
]
