import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Outlet from './components/Outlet';
import Exchanges from './components/Exchanges'
import CryptoCurrencies from './components/CryptoCurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Outlet>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/cryptocurrencies' element={<CryptoCurrencies/>} />
        <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
    </Outlet>
    </BrowserRouter>
  </>
);
