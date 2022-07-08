import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import UserContextProvider from './context/UserContext'
import FormatContextProvider from './context/FormatContext'
import OrganizationContextProvider from './context/OrganizationContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <FormatContextProvider>
        <OrganizationContextProvider>
          <App />
        </OrganizationContextProvider>
      </FormatContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
