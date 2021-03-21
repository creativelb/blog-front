import axios from 'axios';
import { baseURL } from '@/assets/js/constant';


let instance1 = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    type: '0'
  }
})

export function request(config) {
  let { url, method, params, data } = config;
  return instance1.request({
    url, method, params, data
  })
}

