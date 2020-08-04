import axios from 'axios'
import { Toast } from 'vant'
import Qs from 'qs'

export default options => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.VUE_APP_PHP_PATH,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })

    // request 拦截器
    instance.interceptors.request.use(config => {
      // 序列化入参
      config.data = Qs.stringify(config.data)
      // 接口验签
      return Promise.resolve(config)
    }, error => {
      return Promise.reject(error)
    })

    // response 拦截器
    instance.interceptors.response.use(res => {
      // 接口响应
      if (res.data.code === 200) {
        //
      } else {
        Toast(res.data.msg)
      }
      return Promise.resolve(res.data)
    }, err => {
      return Promise.reject(err)
    })

    // 请求处理
    instance(options).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
