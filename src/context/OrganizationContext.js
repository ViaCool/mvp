import { createContext, useState } from 'react'

export const OrganizationContext = createContext()

const OrganizationContextProvider = ({ children }) => {
  const [Data, setData] = useState({})
  const SetData = data => setData(data)
  const value = {
    organization: Data,
    setOrganizationData: SetData
  }
  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}
export default OrganizationContextProvider