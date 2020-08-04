import axios from 'axios'
import md5 from 'blueimp-md5' // md5加密
import { Toast } from 'vant'
let BASETIME = 0 // 记录服务器时间与本地时间的时间差

export default options => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_JAVA_PATH,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })

    // request 拦截器
    instance.interceptors.request.use(config => {
      // 接口验签
      let str = ''
      if (config.method === 'get') {
        if (Object.prototype.toString.call(config.params) === '[object Object]') {
          const keys = Object.keys(config.params)
          const keysSort = keys.sort()
          keysSort.forEach(v => {
            str = str + `&${v}=${config.params[v]}`
          })
          str = str.substr(1, str.length - 1)
        }
      } else {
        str = config.data ? JSON.stringify(config.data) : ''
      }
      const time = String(Date.parse(new Date()) + BASETIME).substr(0, 10)
      config.headers.sign = `${time}-` + (md5(`${str};${process.env.VUE_APP_JAVA_SIGN_KEY}-${time}`)).toLowerCase() // 校验参数
      return Promise.resolve(config)
    }, err => {
      return Promise.reject(err)
    })

    // response 拦截器
    instance.interceptors.response.use(res => {
      // 接口响应
      if (res.data.code === '200') {
        //
      } else if (res.data.code === '406') {
        const serverTime = Date.parse(new Date(res.headers.date))
        const localTime = Date.parse(new Date())
        BASETIME = serverTime - localTime
      } else {
        Toast(res.data.messages)
      }
      return Promise.resolve(res.data)
    }, err => {
      return Promise.reject(err)
    })

    // 请求处理
    instance(options).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}
