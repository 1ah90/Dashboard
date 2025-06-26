import './HeroStyle.css';
import HeroNav from './HeroNav';
import HeroDashboard from './HeroDashboard'
function Hero() {
  return (
    <div className="hero">
      <HeroNav />
      <HeroDashboard/>
    </div>
  );
}

export default Hero;
