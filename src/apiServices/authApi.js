import axios from 'axios'
import { API_URL, LOGIN, USER_ME } from './api_routes'
import axiosInstance from './axiosInstance'

export const loginApi = async ({ username, password }) => {
  try {
    const res = await axios.post(
      `${API_URL}/${LOGIN}`,
      new URLSearchParams({
        username: username,
        password: password
      })
    )
    localStorage.setItem('authToken', res?.data?.access_token)
    return res
  } catch (err) {
    localStorage.clear()
    return {
      error: err
    }
  }
}
export const userApi = async () => {
  try {
    const res = await axiosInstance.get(USER_ME)
    return res
  } catch (err) {
    return {
      error: err
    }
  }
}


