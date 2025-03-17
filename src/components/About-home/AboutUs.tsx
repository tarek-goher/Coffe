// AboutUs.tsx
import React, { useEffect, useRef } from 'react';
import styles from './AboutUs.module.css';

interface AboutUsProps {
  companyName?: string;
  yearFounded?: number;
  description?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  companyName = "Arabica Excellence",
  yearFounded = 2015,
  description = "We offer the finest coffee varieties from around the world. Our company was founded on the principles of quality, sustainability, and passion for coffee. We carefully select coffee beans from farms that follow sustainable agricultural practices, and roast them by expert hands to highlight their unique flavors."
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  // Create an array of refs correctly
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    if (titleRef.current) {
      sectionObserver.observe(titleRef.current);
    }
    
    // Observe each image ref individually
    const imageRefs = [imageRef1.current, imageRef2.current, imageRef3.current, imageRef4.current];
    imageRefs.forEach(ref => {
      if (ref) sectionObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} ref={titleRef}>
          <span className={styles.highlight}>About</span> Us
        </h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h3 className={styles.companyName}>{companyName}</h3>
            <p className={styles.since}>Established in {yearFounded}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h4>Exceptional Quality</h4>
                <p>We select the best coffee beans from distinguished farms around the world</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Environmental Sustainability</h4>
                <p>We commit to sustainable business practices that protect the environment and farmers</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h4>Passion and Creativity</h4>
                <p>We are passionate experts in the art of coffee roasting and innovative preparation methods</p>
              </div>
            </div>
            <button className={styles.learnMoreBtn}>Learn More About Us</button>
          </div>
          
          <div className={styles.imageGrid}>
            <div 
              className={`${styles.imageBox} ${styles.image1}`}
              ref={imageRef1}>
              <div className={styles.imageOverlay}></div>
            </div>
            <div 
              className={`${styles.imageBox} ${styles.image2}`}
              ref={imageRef2}>
              <div className={styles.imageOverlay}></div>
            </div>
            <div 
              className={`${styles.imageBox} ${styles.image3}`}
              ref={imageRef3}>
              <div className={styles.imageOverlay}></div>
            </div>
            <div 
              className={`${styles.imageBox} ${styles.image4}`}
              ref={imageRef4}>
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;