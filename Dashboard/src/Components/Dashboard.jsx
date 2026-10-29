import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import Positions from './Positions';
import Holding from './Holding';
import IPO from './IPO';
import Funds from './Funds';
import Summary from './Summary';
import WatchList from './WatchList';

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
        </Routes>
        </div>
    </div>
   
  )
}

export default Dashboard

 