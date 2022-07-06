import { useState, createContext } from 'react'
export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const setUser = data => setUserData(data)

  const value = {
    user: userData,
    setUser
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider
