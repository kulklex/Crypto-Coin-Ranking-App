import React, { useState, useEffect } from 'react';
import { Card, Col, Image, Row, Spin, Typography } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';

const {Title, Text} = Typography

const News = () => {
    const {data, isFetching} = useGetCryptoNewsQuery()
    

    const [news, setNews] = useState([]);

    
    useEffect(() => {
        setNews(data?.data)
    }, [data])


    if (isFetching) return <Spin size="large"/>


    return (<div>
        <br/>
        <Row gutter={[24, 24]} style={{margin: '10px'}}>
            {news?.map((singleNews, i) => (
                <Col xs={24} sm={12} lg={8} key={i} >
                    <Card hoverable>
                        <a href={singleNews?.url} target='_blank' rel="noreferrer">
                            <div className='news-image-container'>
                                <Title level={5}>
                                    {singleNews?.title}
                                </Title>
                                {singleNews?.thumbnail && <Image src={singleNews?.thumbnail} style={{height: '150px', width: '150px', borderRadius: '10%'}} alt="news" />}
                            </div>
                            <br/>
                            <>
                                {singleNews?.description?.substring(0, 100)}.....
                            </>
                            
                            <div >
                            <br/>
                                <Text>
                                    {moment(singleNews?.createdAt).startOf('ss').fromNow()}
                                </Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>);
}

export default News;
