import React from 'react'
import AuthLayout from './components/layout/Auth'
import Login from './views/login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Routes,
  Route
} from 'react-router-dom'
import Predict from './views/predict/Predict'
import Layout from './components/layout/Layout'
import Settings from './views/settings/Settings'

function App () {
  const ProtectedRoute = ({ children }) => {
    if (!localStorage['authToken']) {
      return <Navigate to='/login' replace />
    }
    return children ? children : <Outlet />
  }

  return (
    <BrowserRouter basename='/app2'>
      <Routes>
        <Route path='/login' element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path='/' element={<Predict />} />
          <Route path='predict' element={<Predict />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
