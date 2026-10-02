import React from 'react'
import BrokerageCalculator from './Brokerage.calculator';
import PricingPage from './PricingPage';

const Home = () => {
  return (
    <div>
        <BrokerageCalculator/>
        <PricingPage/>
    </div>
  )
}

export default Home