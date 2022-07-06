import axios from 'axios'
import { API_URL } from './api_routes'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    if (localStorage['authToken']) {
      config.headers = {
        Authorization: `Bearer ${localStorage['authToken']}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosInstance