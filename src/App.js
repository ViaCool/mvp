import React from 'react';
import AuthLayout from './components/layout/Auth';
import Login from './views/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Predict from './views/predict/Predict';
import Layout from './components/layout/Layout';
import Settings from './views/settings/Settings';
import DemoUploaded from './views/demo-uploaded/DemoUploaded';
import UploadProgress from './views/upload-progress/UploadProgress';

function App() {
  return (
    <BrowserRouter basename='/app2'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="predict" element={<Predict />} />
          <Route path="settings" element={<Settings />} />
          <Route path="demo-uploaded" element={<DemoUploaded />} />
          <Route path="demo-upload-progress" element={<UploadProgress />} />
        </Route>
        <Route path="/login" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
