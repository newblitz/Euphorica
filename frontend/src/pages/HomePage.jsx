import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Benefits />
      <Footer />
    </div>
  );
}

export default HomePage;
