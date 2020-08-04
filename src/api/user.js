import axios_php from './axios_php.js'

//
export const wxConfig = data => {
  return axios_php({
    url: '/wx/config',
    method: 'post',
    data
  })
}

//
export const getUserWxInfo = () => {
  return axios_php({
    url: '/wx/userinfo',
    method: 'get'
  })
}
