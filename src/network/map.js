import axios from './axios'

export default function (url) {
  url = '/' + url
  return axios({
    url
  })
}
