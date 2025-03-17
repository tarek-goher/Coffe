// OurStory.tsx
import React, { useEffect, useState } from 'react';
import './OurStory.css';
import Navbar from '../Nav-bar/Nav';
import Footer from '../Footer/Fotter';
// import storyImage1 from '../assets/coffee-farm.jpg';
// import storyImage2 from '../assets/coffee-roasting.jpg';
// import storyImage3 from '../assets/coffee-shop.jpg';
// import founderImage from '../assets/founder.jpg';

const OurStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    section1: false,
    section2: false,
    section3: false,
    timeline: false,
    founder: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
         <div>
            <Navbar companyName={'Coffee Company'}/>
        </div>
        <div className="our-story-container">
      <section id="header" className={`story-header ${isVisible.header ? 'visible' : ''}`}>
        <h1>Our Story</h1>
        <p>A journey of passion, quality, and community</p>
      </section>

      <section id="section1" className={`story-section ${isVisible.section1 ? 'visible' : ''}`}>
        <div className="story-content">
          <h2>From Bean to Cup</h2>
          <p>
            Founded in 2010, our coffee company began with a simple mission: to bring exceptional coffee to people who appreciate quality and craftsmanship. What started as a small roasting operation in a garage has grown into a beloved brand with a commitment to sustainability, quality, and community.
          </p>
          <p>
            We believe that great coffee begins at the source. That's why we personally visit farms across the globe, forming direct relationships with growers who share our passion for exceptional coffee. By working directly with farmers, we ensure fair prices and sustainable practices while securing the finest beans for our customers.
          </p>
        </div>
        <div className="story-image">
          <img src='https://i.pinimg.com/736x/ea/05/05/ea0505bdfad22263d9276e01b479e533.jpg' alt="Coffee farm" />
        </div>
      </section>

      <section id="section2" className={`story-section reverse ${isVisible.section2 ? 'visible' : ''}`}>
        <div className="story-image">
          <img src='https://i.pinimg.com/736x/ea/05/05/ea0505bdfad22263d9276e01b479e533.jpg' alt="Coffee roasting" />
        </div>
        <div className="story-content">
          <h2>The Art of Roasting</h2>
          <p>
            Our master roasters have spent decades perfecting their craft. With a combination of traditional techniques and modern technology, we bring out the unique flavor profile of each bean variety. Every batch is roasted with precision and care, ensuring consistency and excellence in every cup.
          </p>
          <p>
            We believe in small-batch roasting to maintain quality control and freshness. This approach allows us to adapt to each coffee's unique characteristics, bringing out its best flavors and aromas. It's a labor-intensive process, but we believe the difference in taste is worth every extra minute.
          </p>
        </div>
      </section>

      <section id="section3" className={`story-section ${isVisible.section3 ? 'visible' : ''}`}>
        <div className="story-content">
          <h2>Community & Culture</h2>
          <p>
            More than just a product, our coffee is about creating spaces where people can connect, collaborate, and create. Our cafés are designed to be welcoming environments where communities can thrive. We host regular events, from coffee tastings to local art exhibitions, fostering a culture of creativity and connection.
          </p>
          <p>
            We also believe in giving back. Through our community outreach programs, we support local initiatives and global sustainability projects. From funding educational programs in coffee-growing regions to supporting local environmental efforts, we're committed to making a positive impact beyond the cup.
          </p>
        </div>
        <div className="story-image">
          <img src='https://i.pinimg.com/736x/ea/05/05/ea0505bdfad22263d9276e01b479e533.jpg' alt="Coffee shop" />
        </div>
      </section>

      <section id="timeline" className={`story-timeline ${isVisible.timeline ? 'visible' : ''}`}>
        <h2>Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2010</h3>
              <p>Founded in a small garage with a single roaster and a dream</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2012</h3>
              <p>Opened our first café, bringing our freshly roasted beans directly to customers</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Established direct trade relationships with farmers in Colombia and Ethiopia</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2018</h3>
              <p>Expanded to five locations and launched our online store</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020</h3>
              <p>Certified as a B Corporation, recognizing our commitment to social and environmental responsibility</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Today</h3>
              <p>Continuing to grow while staying true to our values of quality, sustainability, and community</p>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className={`story-founder ${isVisible.founder ? 'visible' : ''}`}>
        <div className="founder-content">
          <h2>Meet Our Founder</h2>
          <p>
            "I started this company with a simple belief: that great coffee could change people's days, and that by supporting the right farming practices, we could change lives. Every cup we serve is a reflection of that belief."
          </p>
          <p className="founder-name">- Asmaa abdelAziz, Founder</p>
        </div>
        <div className="founder-image">
          <img src='https://i.pinimg.com/474x/fa/e4/63/fae4638cf653273b3d1fe5d7fc8641ec.jpg' alt="Sarah Johnson, Founder" />
        </div>
      </section>

      <section className="story-values">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-item">
            <div className="value-icon">🌿</div>
            <h3>Sustainability</h3>
            <p>We're committed to environmentally responsible practices throughout our supply chain.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h3>Community</h3>
            <p>We believe in creating spaces where people can connect and relationships can flourish.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">✨</div>
            <h3>Quality</h3>
            <p>We never compromise on excellence, from bean selection to the final cup.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We're always exploring new ways to improve our coffee and customer experience.</p>
          </div>
        </div>
      </section>

      <section className="story-cta">
        <h2>Join Our Story</h2>
        <p>Visit one of our locations or shop online to experience the difference quality makes.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Find a Store</button>
          <button className="cta-button secondary">Shop Online</button>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default OurStory;