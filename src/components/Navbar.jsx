import React from 'react'
import {  Button, Menu, Typography, Avatar  } from 'antd'
import {  HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined  } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>CryptoCoin</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
        </div>
    </div>
  )
}
