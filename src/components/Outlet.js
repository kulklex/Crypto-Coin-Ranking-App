import React from 'react'
import Navbar from './Navbar'
import { Layout } from 'antd'



export default function Outlet({children}) {
  return (
    <div className='app'>
        <div className='navbar'><Navbar/></div>
        <div className='main'>
         <Layout> 
          {children}
          <br/>
          </Layout>
        </div>
    </div>
  )
}
