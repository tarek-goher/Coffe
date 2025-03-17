// ContactPage.tsx
import React, { useState, useEffect } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [animateMap, setAnimateMap] = useState(false);

  useEffect(() => {
    // Trigger map animation after component mounts
    setTimeout(() => {
      setAnimateMap(true);
    }, 800);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="coffee-bean-animation">
          <div className="bean bean-1"></div>
          <div className="bean bean-2"></div>
          <div className="bean bean-3"></div>
        </div>
        <h1>Get in Touch</h1>
        <div className="subtitle">We'd love to hear from you</div>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="form-input textarea"
                rows={5}
              ></textarea>
              <span className="input-highlight"></span>
            </div>

            <button type="submit" className="submit-button">
              {submitted ? 'Message Sent' : 'Send Message'}
              <span className="button-effect"></span>
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon location-icon"></div>
            <div className="info-text">
              <h3>Visit Us</h3>
              <p>123 Coffee Avenue, Arabica District</p>
              <p>Brew City, BC 10001</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon phone-icon"></div>
            <div className="info-text">
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>Monday - Friday: 9am - 5pm</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon email-icon"></div>
            <div className="info-text">
              <h3>Email Us</h3>
              <p>contact@luxurycoffee.com</p>
              <p>support@luxurycoffee.com</p>
            </div>
          </div>

          <div className="social-links">
            <div className="social-icon facebook"></div>
            <div className="social-icon instagram"></div>
            <div className="social-icon twitter"></div>
            <div className="social-icon pinterest"></div>
          </div>
        </div>
      </div>

      <div className={`map-container ${animateMap ? 'animate' : ''}`}>
        <div className="map-overlay">
          <div className="map-pin"></div>
          <div className="ripple-effect"></div>
        </div>
        <div className="map-placeholder"></div>
      </div>

      <div className="coffee-footer">
        <div className="coffee-cup">
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
          <div className="steam steam-3"></div>
        </div>
        <p>© {new Date().getFullYear()} Luxury Coffee Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactPage;