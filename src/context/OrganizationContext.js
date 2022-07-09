import { createContext, useState } from 'react'

export const OrganizationContext = createContext()

const OrganizationContextProvider = ({ children }) => {
  const [Data, setData] = useState({})
  const [Files, setFiles] = useState([])
  const [FileReports, setFileReports] = useState([])
  const pushFileReport = fileReport =>
    setFileReports([...FileReports, fileReport])
  const SetData = data => setData(data)
  const pushFiles = file => setFiles([...Files, file])
  const value = {
    organization: Data,
    FileReports,
    Files,
    pushFiles,
    pushFileReport,
    setOrganizationData: SetData
  }
  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}
export default OrganizationContextProvider
