import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Row, Col } from 'antd';
import { Chart ,registerables } from 'chart.js';
import moment from 'moment';

Chart.register(...registerables)


const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = []
    const coinTimeStamp = []
   
    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i]?.price)
        coinTimeStamp.push(moment.unix(coinHistory?.data?.history[i]?.timestamp).format("YY/MM/DD"))
    } 


    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
    // const options = {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: `${coinName} Line Chart`,
    //       },
    //     },
    //   };
      
    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: {currentPrice}</Title>
                </Col>
            </Row>   
            <Line data={data} options={options}/>
        </>
    );
}

export default LineChart;
