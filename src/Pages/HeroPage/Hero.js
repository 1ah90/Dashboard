import HeroNav from './HeroNav';
import HeroDashboard from './HeroDashboard';
function Hero() {
  return (
    <div className="bg-white my-2 p-5 rounded-xl">
      <HeroNav />
      <HeroDashboard />
    </div>
  );
}

export default Hero;
