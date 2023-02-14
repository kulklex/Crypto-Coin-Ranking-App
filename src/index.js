import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Outlet from './components/Outlet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Outlet>
      <Routes>
        <Route path='/' element={<App/>} />
      </Routes>
    </Outlet>
    </BrowserRouter>
  </>
);
