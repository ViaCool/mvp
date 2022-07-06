import { FORMATS } from './api_routes'
import axiosInstance from './axiosInstance'

export const formatsApi = async () => {
  try {
    const res = await axiosInstance.get(FORMATS)
    return res
  } catch (err) {
    return {
      error: err
    }
  }
}
