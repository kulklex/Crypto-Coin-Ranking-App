import React from 'react'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Outlet from './components/Outlet';
import Exchanges from './components/Exchanges'
import CryptoCurrencies from './components/CryptoCurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'
import HomePage from './components/HomePage';

export default function App() {
  return (
  <>
  <BrowserRouter>
    <Outlet>
      <Routes>        
        <Route path='/' element={<CryptoCurrencies/>} />
        <Route path='/rankings' element={<HomePage/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
    </Outlet>
  </BrowserRouter>
  </>
  )
}
