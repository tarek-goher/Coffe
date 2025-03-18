// HeroSection.tsx
<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Nav-bar/Nav';
=======
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import { useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    navigate("/Ourstore");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <section
        className={styles.heroSection}
        style={{
          backgroundImage: `url(https://i.pinimg.com/474x/01/29/c4/0129c41b7bff9bdf9d8808d7b2322365.jpg)`,
        }}
      >
        <div className={styles.heroOverlay}></div>
        <div
          className={`${styles.heroContent} ${isVisible ? styles.fadeIn : ""}`}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.line1}>Experience</span>
            <span className={styles.line2}>Exceptional Coffee</span>
          </h1>
          <p className={styles.heroDescription}>
            Carefully sourced and expertly roasted beans for the perfect cup
            every time
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.heroButtonPrimary}>Shop Now</button>
            <button
              onClick={handleButtonClick}
              className={styles.heroButtonSecondary}
            >
              Our Story
            </button>
          </div>
        </div>
        <div className={styles.heroScrolldown}>
          <div className={styles.scrollIcon}>
            <span></span>
          </div>
          <p>Scroll to explore</p>
        </div>
        <div
          className={`${styles.floatingElements} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.coffeeBean1}></div>
          <div className={styles.coffeeBean2}></div>
          <div className={styles.coffeeBean3}></div>
          <div className={styles.coffeeCup}></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
