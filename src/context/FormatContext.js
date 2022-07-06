import { useState, createContext } from 'react'
export const FormatContext = createContext()

const FormatContextProvider = ({ children }) => {
  const [Data, setData] = useState({})
  const set_Data = data => setData(data)

  const value = {
    format: Data,
    setFormatData: set_Data
  }
  return (
    <FormatContext.Provider value={value}>{children}</FormatContext.Provider>
  )
}

export default FormatContextProvider
