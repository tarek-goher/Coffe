// HeroSection.tsx
import React, { useEffect, useState } from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Nav-bar/Nav';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
        

  const handleButtonClick = (): void => {
    navigate('/Ourstore'); }

    
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
       
    <section className="hero-section" style={{ backgroundImage: `url(https://i.pinimg.com/474x/01/29/c4/0129c41b7bff9bdf9d8808d7b2322365.jpg)` }}>
      <div className="hero-overlay"></div>
      <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          <span className="line-1">Experience</span>
          <span className="line-2">Exceptional Coffee</span>
        </h1>
        <p className="hero-description">
          Carefully sourced and expertly roasted beans for the perfect cup every time
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Shop Now</button>
          <button onClick={handleButtonClick} className="hero-button secondary">Our Story</button>
        </div>
      </div>
      <div className="hero-scrolldown">
        <div className="scroll-icon">
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
      <div className={`floating-elements ${isVisible ? 'visible' : ''}`}>
        <div className="coffee-bean bean-1"></div>
        <div className="coffee-bean bean-2"></div>
        <div className="coffee-bean bean-3"></div>
        <div className="coffee-cup"></div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;