import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true
axios.defaults.timeout = 6000
axios.defaults.baseURL = '/api'
// get
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// post
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers.token = '7d31ad0d7b71fa149430420fdee0771a'
    return config
  },
  error => {
    return Promise.reject(error)
  })
