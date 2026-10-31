import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import Positions from './Positions';
import Holding from './Holding';
import IPO from './IPO';
import Funds from './Funds';
import Summary from './Summary';
import WatchList from './WatchList';
import Apps from './Apps';
import Screener from './Screener';
import Gtt from '../OrdersPage/Gtt'
import Baskets from '../OrdersPage/Baskets'
import SIP from '../OrdersPage/SIP'
import Alerts from '../OrdersPage/Alerts'
// import All from '../HoldingPage/All'
import Equity from '../HoldingPage/Equity'
import MutualFunds from '../HoldingPage/MutualFunds'
import GovtSecurities from '../Iop&Bids/GovtSecurities';
import Auctions from '../Iop&Bids/Auctions';
import CorporateActions from '../Iop&Bids/CorporateActions';
import SSE from '../Iop&Bids/SSE';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <WatchList/>
        <div className="content">
        <Routes>
            <Route path="/" element={<Summary/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/holdings" element={<Holding/>} />
            <Route path="/positions" element={<Positions/>} />
            <Route path="/ipo" element={<IPO/>} />
            <Route path="/funds" element={<Funds/>} />
            <Route path="/apps" element={<Apps/>} />
            <Route path="/dashboard/screener" element={<Screener/>} />
            <Route path="/orders/gtt" element={<Gtt/>} />
            <Route path="/orders/baskets" element={<Baskets/>} />
            <Route path="/orders/sip" element={<SIP/>} />
            <Route path="/orders/alerts" element={<Alerts/>} />
            <Route path="/holdings/equity" element={<Equity/>} />
            <Route path="/holdings/mutualfund" element={<MutualFunds/>} />
            <Route path="/ipo/gsecs" element={<GovtSecurities/>} />
            <Route path="/ipo/auctions" element={<Auctions/>} />
            <Route path="/ipo/corporate-actions" element={<CorporateActions/>} />
            <Route path="/ipo/sse" element={<SSE/>} />

        </Routes>
        </div>
    </div>
   
  )
}

export default Dashboard

 