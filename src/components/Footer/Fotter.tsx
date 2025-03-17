// Footer.tsx
import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <footer id="luxuryFooter" className={isVisible ? 'visible' : ''}>
      <div id="footerWave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6F4E37" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,165.3C672,171,768,149,864,160C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div id="footerContent">
        <div id="footerLogo">
          <div id="coffeeBeanIcon">
            <div id="beanBody"></div>
            <div id="beanLine"></div>
          </div>
          <h2 id="footerTitle">Luxury Coffee Co.</h2>
        </div>

        <div id="footerColumns">
          <div id="aboutColumn">
            <h3 id="aboutTitle">About Us</h3>
            <p id="aboutText">We pride ourselves on sourcing the finest coffee beans from around the world and crafting exceptional coffee experiences that delight the senses.</p>
            <div id="subscribeBanner">
              <input id="emailInput" type="email" placeholder="Your email" />
              <button id="subscribeButton">Subscribe</button>
            </div>
          </div>

          <div id="linksColumn">
            <h3 id="linksTitle">Quick Links</h3>
            <ul id="linksList">
              <li id="linkItem1"><a href="#">Our Story</a></li>
              <li id="linkItem2"><a href="#">Coffee Selection</a></li>
              <li id="linkItem3"><a href="#">Brewing Guide</a></li>
              <li id="linkItem4"><a href="#">Locations</a></li>
              {/* <li id="linkItem5"><a href="#">Careers</a></li> */}
            </ul>
          </div>

          <div id="contactColumn">
            <h3 id="contactTitle">Contact Us</h3>
            <div id="contactItem1" className="contactItem">
              <div id="addressIcon"></div>
              <p>123 Coffee Avenue, Arabica District</p>
            </div>
            <div id="contactItem2" className="contactItem">
              <div id="phoneIcon"></div>
              <p>+1 (555) 123-4567</p>
            </div>
            <div id="contactItem3" className="contactItem">
              <div id="emailIcon"></div>
              <p>contact@luxurycoffee.com</p>
            </div>
          </div>
        </div>

        {/* <div id="socialBar">
          <div id="socialTitle">Follow Us</div>
          <div id="socialIcons">
            <a href="#" id="facebookIcon" className="socialIcon"></a>
            <a href="#" id="instagramIcon" className="socialIcon"></a>
            <a href="#" id="twitterIcon" className="socialIcon"></a>
            <a href="#" id="pinterestIcon" className="socialIcon"></a>
          </div>
        </div> */}

        <div id="footerBottom">
          <div id="footerNav">
            <a href="#" id="navItem1">Privacy Policy</a>
            <a href="#" id="navItem2">Terms of Service</a>
            <a href="#" id="navItem3">Sitemap</a>
          </div>
          <div id="copyright">
            <p id="copyrightText">© {new Date().getFullYear()} Luxury Coffee Company. All rights reserved.</p>
          </div>
          <div id="coffeeAnimation">
            <div id="coffeeMug"></div>
            <div id="steamWrapper">
              <div id="steam1" className="steam"></div>
              <div id="steam2" className="steam"></div>
              <div id="steam3" className="steam"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;