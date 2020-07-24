import axios from 'axios'

export default function (config) {
  const instance = axios.create({
    baseURL:"data",
    timeout:5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    return err
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    return err
  })
  return instance(config)
}

