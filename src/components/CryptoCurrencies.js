import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Input, Row, Spin } from 'antd';

const CryptoCurrencies = () => {


    const {data ,  isFetching} = useGetCryptosQuery(100)
    
    const [cryptos, setCryptos] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState('');

    

    useEffect(() => {
        setCryptos(data?.data?.coins)

        
    const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))
    if (filteredData) console.log(filteredData)
    setCryptos(filteredData)
    }, [data, searchTerm])

    
    if (isFetching) return <Spin  size="large"  />

    return (
        <>
            <div className="search-crypto">
                <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>


            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((coin) => (
                    <Col  key={coin?.uuid} className='crypto-card' xs={24} sm={12} lg={6}  >
                        <Link to={`/crypto/${coin?.uuid}`}>
                            <Card title={`${coin?.rank}. ${coin?.name}`}
                                    extra={<img className='crypto-image' src={coin?.iconUrl} alt={`${coin?.name}`}/>} hoverable>
                                        <p>Price: {millify(coin?.price)}</p>
                                        <p>Market Cap: {millify(coin?.marketCap)}</p>
                                        <p>Daily Change: {millify(coin?.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>   
        </>
    );
}

export default CryptoCurrencies;
