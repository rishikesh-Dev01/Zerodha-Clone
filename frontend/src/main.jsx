import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './Components/Home/HomePage.jsx';
import Signup from './Components/Signup/Signup.jsx';
import AboutPage from './Components/About/AboutPage.jsx';
import ProductPage from './Components/Products/ProductPage.jsx';
import Pricing from './Components/Pricing/PricingPage.jsx';
import SupportPage from './Components/Support/SupportPage.jsx'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './Components/NotFound.jsx';


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
)
