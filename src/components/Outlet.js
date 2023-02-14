import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



export default function Outlet({children}) {
  return (
    <div className='app'>
        <div className='navbar'><Navbar/></div>
        <div className='main'>
          {children}
          <div className='footer'><Footer/></div>
        </div>
    </div>
  )
}
