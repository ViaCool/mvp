import axios from 'axios'
import { API_URL, LOGIN } from './api_routes'

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
export const logout = () => localStorage.removeItem('authToken')
