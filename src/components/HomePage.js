import React from 'react';
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Typography, Row, Col, Statistic, Spin} from 'antd'
import CryptoLimit from './CryptoLimit';
import NewsLimit from './NewsLimit';


import {useGetCryptosQuery} from '../services/cryptoApi'


const {Title} = Typography

const HomePage = () => {
    const screen = window.screen.width
    
    const {data, isFetching} = useGetCryptosQuery(10)
    
    const globalStats = data?.data?.stats



    if(isFetching) return <Spin size="large"/>

    return (
        <div style={{margin: '15px'}}>
            <Title level={2} className='heading'>Global Crypto Stats</Title>   
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
                <Col span={12}><Statistic title="Total Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={ screen > 600 ? 2 : 5} className='home-title'>Top 10 Cryptocurrencies {screen > 600 ? 'in the world' : ''}</Title>
                <Typography.Text className='show-more'><Link to="/">Show More</Link></Typography.Text>
            </div>
            <CryptoLimit  />

            {/* <div className="home-heading-container">
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <p  className='show-more'><Link to="/news">Show More</Link></p>
            </div>
            <NewsLimit/> */}
        </div>
    );
}

export default HomePage;
