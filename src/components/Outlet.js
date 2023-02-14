import React from 'react'
import Navbar from './Navbar'
import { Footer } from 'antd/es/layout/layout'



export default function Outlet({children}) {
  return (
    <div className='app'>
        <div className='navbar'><Navbar/></div>
        <div className='main'>{children}</div>
        <div className='footer'><Footer/></div>
    </div>
  )
}
