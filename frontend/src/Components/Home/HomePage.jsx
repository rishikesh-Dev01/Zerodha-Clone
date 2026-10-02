import HeroSection from './HeroSection' 
import Awards from './Awards' 
import Stats from './Stats' 
import Pricing from './Pricing' 
import Education from './Education' 
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </div>
  )
}

export default HomePage