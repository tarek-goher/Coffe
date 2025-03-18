// Footer.tsx
import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <footer id={styles.luxuryFooter} className={isVisible ? styles.visible : ''}>
      <div id={styles.footerWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6F4E37" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,165.3C672,171,768,149,864,160C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div id={styles.footerContent}>
        <div id={styles.footerLogo}>
          <div id={styles.coffeeBeanIcon}>
            <div id={styles.beanBody}></div>
            <div id={styles.beanLine}></div>
          </div>
          <h2 id={styles.footerTitle}>Luxury Coffee Co.</h2>
        </div>

        <div id={styles.footerColumns}>
          <div id={styles.aboutColumn}>
            <h3 id={styles.aboutTitle}>About Us</h3>
            <p id={styles.aboutText}>We pride ourselves on sourcing the finest coffee beans from around the world and crafting exceptional coffee experiences that delight the senses.</p>
            <div id={styles.subscribeBanner}>
              <input id={styles.emailInput} type="email" placeholder="Your email" />
              <button id={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>

          <div id={styles.linksColumn}>
            <h3 id={styles.linksTitle}>Quick Links</h3>
            <ul id={styles.linksList}>
              <li id={styles.linkItem1}><a href="#">Our Story</a></li>
              <li id={styles.linkItem2}><a href="#">Coffee Selection</a></li>
              <li id={styles.linkItem3}><a href="#">Brewing Guide</a></li>
              <li id={styles.linkItem4}><a href="#">Locations</a></li>
              {/* <li id={styles.linkItem5}><a href="#">Careers</a></li> */}
            </ul>
          </div>

          <div id={styles.contactColumn}>
            <h3 id={styles.contactTitle}>Contact Us</h3>
            <div id={styles.contactItem1} className="contactItem">
              <div id={styles.addressIcon}></div>
              <p>123 Coffee Avenue, Arabica District</p>
            </div>
            <div id={styles.contactItem2} className="contactItem">
              <div id={styles.phoneIcon}></div>
              <p>+1 (555) 123-4567</p>
            </div>
            <div id={styles.contactItem3} className="contactItem">
              <div id={styles.emailIcon}></div>
              <p>contact@luxurycoffee.com</p>
            </div>
          </div>
        </div>

        {/* <div id={styles.socialBar}>
          <div id={styles.socialTitle}>Follow Us</div>
          <div id={styles.socialIcons}>
            <a href="#" id={styles.facebookIcon} className="socialIcon"></a>
            <a href="#" id={styles.instagramIcon} className="socialIcon"></a>
            <a href="#" id={styles.twitterIcon} className="socialIcon"></a>
            <a href="#" id={styles.pinterestIcon} className="socialIcon"></a>
          </div>
        </div> */}

        <div id={styles.footerBottom}>
          <div id={styles.footerNav}>
            <a href="#" id={styles.navItem1}>Privacy Policy</a>
            <a href="#" id={styles.navItem2}>Terms of Service</a>
            <a href="#" id={styles.navItem3}>Sitemap</a>
          </div>
          <div id={styles.copyright}>
            <p id={styles.copyrightText}>© {new Date().getFullYear()} Luxury Coffee Company. All rights reserved.</p>
          </div>
          <div id={styles.coffeeAnimation}>
            <div id={styles.coffeeMug}></div>
            <div id={styles.steamWrapper}>
              <div id={styles.steam1} className="steam"></div>
              <div id={styles.steam2} className="steam"></div>
              <div id={styles.steam3} className="steam"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;