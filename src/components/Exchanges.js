import React from 'react';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';



const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {


  const exchangesList = [
    { uuid:"1", rank: "1", name: "Binance", iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/binance.svg", volume: "22.4", numberOfMarkets: "1.2K", marketShare: "20" },
    { uuid:"2", rank: "2", name: "BitMart", iconUrl: "https://cdn.coinranking.com/0KoAUbthl/bitmart.svg", volume: "7.6", numberOfMarkets: "1.1K", marketShare: "6.8" },
    { uuid:"3", rank: "3", name: "Bitstamp", iconUrl: "https://cdn.coinranking.com/hZIwj0Exu/bitstamp.svg", volume: "7.4", numberOfMarkets: "1K", marketShare: "6.6" },
    { uuid:"4", rank: "4", name: "Bitget", iconUrl: "https://cdn.coinranking.com/1B3imEFOi/Bitget.png", volume: "6.7", numberOfMarkets: "980", marketShare: "6" },
    { uuid:"5", rank: "5", name: "OKx", iconUrl: "https://cdn.coinranking.com/xcZdYtX6E/okx.png", volume: "6.2", numberOfMarkets: "790", marketShare: "5.5" },
    { uuid:"6", rank: "6", name: "Huobi Global", iconUrl: "https://cdn.coinranking.com/ryFpQe0c7/ht.svg", volume: "5.3", numberOfMarkets: "770", marketShare: "4.8" },
    { uuid:"7", rank: "7", name: "Coinbase Pro", iconUrl: "https://cdn.coinranking.com/eTtnk9dDn/coinbase.svg", volume: "4.4", numberOfMarkets: "630", marketShare: "3.9" },
    { uuid:"8", rank: "8", name: "Bit Global", iconUrl: "https://cdn.coinranking.com/Vy0kVcwxw/bitglobal.png", volume: "3.9", numberOfMarkets: "598", marketShare: "3.5" },
    { uuid:"9", rank: "9", name: "BitFlyer", iconUrl: "https://cdn.coinranking.com/iGTwIBIAF/bitflyer.svg", volume: "3.5", numberOfMarkets: "590", marketShare: "3.3" },
    { uuid:"10", rank: "10", name: "Bithumb", iconUrl: "https://cdn.coinranking.com/HJC5VoKWl/Bithumb.svg", volume: "3.2", numberOfMarkets: "482", marketShare: "3.2" },
    { uuid:"11", rank: "11", name: "Coinone", iconUrl: "https://cdn.coinranking.com/-DAwlYwgb/coinone.svg", volume: "2.9", numberOfMarkets: "63", marketShare: "1.2" },
    { uuid:"12", rank: "12", name: "BitBank", iconUrl: "https://cdn.coinranking.com/3jvWLuZB8/bitbank.svg", volume: "2.3", numberOfMarkets: "162", marketShare: "4.5" },
    { uuid:"13", rank: "13", name: "OKCoin", iconUrl: "https://cdn.coinranking.com/QtywTnjyY/okcoin.png", volume: "2.2", numberOfMarkets: "259", marketShare: "2.3" },
    { uuid:"14", rank: "14", name: "Changelly PRO", iconUrl: "https://cdn.coinranking.com/AvbhQzPFY/changelly-pro.png", volume: "1.8", numberOfMarkets: "191", marketShare: "2.6" },
    { uuid:"15", rank: "15", name: "Bybit", iconUrl: "https://cdn.coinranking.com/iTGvYmzJq/bybit-logo.png", volume: "1.3", numberOfMarkets: "185", marketShare: "1.9" },
    { uuid:"16", rank: "16", name: "Upbit", iconUrl: "https://cdn.coinranking.com/d5MynJaPK/upbit.svg", volume: "1.2", numberOfMarkets: "185", marketShare: "1.8" },
    { uuid:"17", rank: "17", name: "DigiFinex", iconUrl: "https://cdn.coinranking.com/oXtSB9uNs/digi.png", volume: "1.1", numberOfMarkets: "146", marketShare: "1.7" },
    { uuid:"18", rank: "18", name: "Gate.io", iconUrl: "https://cdn.coinranking.com/aEeq9dvUz/gateio.png", volume: "1.0", numberOfMarkets: "121", marketShare: "1.4" },
    { uuid:"19", rank: "19", name: "Kucoin", iconUrl: "https://cdn.coinranking.com/A-hAjR-hN/kucoin.png", volume: "0.9", numberOfMarkets: "166", marketShare: "1.3" },
    { uuid:"20", rank: "20", name: "Kraken", iconUrl: "https://cdn.coinranking.com/jqjP32iqz/kraken.svg", volume: "0.7", numberOfMarkets: "188", marketShare: "1.1" },
    
]

 

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc" +
   "volutpat maximus malesuada. Phasellus vestibulum risus sit amet ex blandit, id tincidunt" +
   "libero volutpat.Aenean at odio eget ligula dapibus volutpat. Quisque molestie orci eu feugiat "+
    "tincidunt. Nam cursus sem eleifend urna porta eleifend. Interdum et malesuada fames ac "+
    "ante ipsum primis in faucibus. Donec ac consequat mi. Ut tristique aliquet libero vel lacinia."+
     "Nulla sit amet quam id felis euismod mollis ac ut sapien. Cras efficitur felis nec metus consequat"+
      "sollicitudin. Donec feugiat quam ac quam pellentesque, et consectetur nisl pulvinar. In interdum,"+
       "velit nec elementum egestas, tellus enim tristique tellus, vitae facilisis nisl massa vel enim."+
       " Vivamus ut ipsum justo. Vestibulum at aliquam metus, in pharetra neque. Nulla ac viverra arcu. "+
        "Cras vitae orci rhoncus, aliquam sapien sit amet, tempor sem"

  return (
    <div>
      <br/>  
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <br/>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col key={exchange.uuid} span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${exchange?.volume}B</Col>
                    <Col span={6}>{exchange?.numberOfMarkets}</Col>
                    <Col span={6}>{exchange?.marketShare}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(`${loremIpsum}`)}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;