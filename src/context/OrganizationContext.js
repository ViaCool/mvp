import { createContext, useState } from 'react'

export const OrganizationContext = createContext()

const OrganizationContextProvider = ({ children }) => {
  const [Data, setData] = useState({})
  const [Files, setFiles] = useState([])
  const [reports, setReports] = useState([])
  const [UploadResponse, setUploadResponse] = useState([])
  const setFilesResponse = fileRes => setUploadResponse(fileRes)
  const SetData = data => setData(data)
  const setReport = report => setReports(report)
  const delReport = reportID =>
    setReports(reports.filter(r => r.id !== reportID))
  const pushFiles = file => setFiles([...Files, file])
  const clearFiles = () => setFiles([])
  const removeFile = id => setFiles(Files?.filter(file => file.id !== id))
  const value = {
    organization: Data,
    UploadResponse,
    Files,
    reports,
    clearFiles,
    pushFiles,
    setReport,
    delReport,
    removeFile,
    setFilesResponse,
    setOrganizationData: SetData
  }
  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}
export default OrganizationContextProvider
