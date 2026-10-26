import HeroSection from './HeroSection' 
import Awards from './Awards' 
import Stats from './Stats' 
import Pricing from './Pricing' 
import Education from './Education' 
import OpenAccount from '../OpenAccount';

 

const HomePage = () => {
  return (
    <div>
        
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
    </div>
  )
}

export default HomePage