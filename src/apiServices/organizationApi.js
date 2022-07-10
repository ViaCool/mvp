import { ORGANIZATIONS, API_URL, REPORT } from './api_routes'
import axios from 'axios'
import axiosInstance from './axiosInstance'

export const UploadFileApi = async (organizationID, produceId, files) => {
  try {
    const formData = new FormData()
    files?.map(file => formData.append('files', file?.file))

    const { data } = await axios.post(
      `${API_URL}/${ORGANIZATIONS}/${organizationID}/files?produce_type_id=${produceId}&file_type_id=3`,
      formData,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage['authToken']}`
        }
      }
    )
    return { data }
  } catch (err) {
    return { error: err }
  }
}

export const getReports = async organizationID => {
  try {
    const { data } = await axiosInstance.get(
      `${ORGANIZATIONS}/${organizationID}/${REPORT}`
    )
    return data
  } catch (err) {
    return { error: err }
  }
}
