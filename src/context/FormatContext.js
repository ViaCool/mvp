import { useState, createContext } from 'react'
export const FormatContext = createContext()

const FormatContextProvider = ({ children }) => {
  const [Data, setData] = useState({})
  const [produceTypes, setProduceType] = useState([])
  const [selectedProduceType, setSelectedProduceType] = useState(null)
  const set_Data = data => setData(data)
  const setProduceTypes = producetypes => setProduceType(producetypes)
  const SetSelectedProduceType = selectedPType => {
    setSelectedProduceType(selectedPType)
  }
  const value = {
    format: Data,
    produceTypes,
    selectedProduceTypeId: selectedProduceType,
    selectedProduceType:
      produceTypes[
        produceTypes?.findIndex(type => type?.value === selectedProduceType)
      ]?.name,
    setFormatData: set_Data,
    setProduceTypes,
    SetSelectedProduceType
  }
  return (
    <FormatContext.Provider value={value}>{children}</FormatContext.Provider>
  )
}

export default FormatContextProvider
