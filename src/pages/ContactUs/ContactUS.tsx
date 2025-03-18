// ContactPage.tsx
import React, { useState, useEffect } from "react";
import styles from "./ContactUS.module.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [animateMap, setAnimateMap] = useState(false);

  useEffect(() => {
    // Trigger map animation after component mounts
    setTimeout(() => {
      setAnimateMap(true);
    }, 800);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <div className={styles.coffeeBeanAnimation}>
          <div className={`${styles.bean} ${styles.bean1}`}></div>
          <div className={`${styles.bean} ${styles.bean2}`}></div>
          <div className={`${styles.bean} ${styles.bean3}`}></div>
        </div>
        <h1>Get in Touch</h1>
        <div className={styles.subtitle}>We'd love to hear from you</div>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={styles.formInput}
              />
              <span className={styles.inputHighlight}></span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={styles.formInput}
              />
              <span className={styles.inputHighlight}></span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={styles.formInput}
              />
              <span className={styles.inputHighlight}></span>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className={`${styles.formInput} ${styles.textarea}`}
                rows={5}
              ></textarea>
              <span className={styles.inputHighlight}></span>
            </div>

            <button type="submit" className={styles.submitButton}>
              {submitted ? "Message Sent" : "Send Message"}
              <span className={styles.buttonEffect}></span>
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.locationIcon}`}></div>
            <div className={styles.infoText}>
              <h3>Visit Us</h3>
              <p>123 Coffee Avenue, Arabica District</p>
              <p>Brew City, BC 10001</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.phoneIcon}`}></div>
            <div className={styles.infoText}>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p>Monday - Friday: 9am - 5pm</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.emailIcon}`}></div>
            <div className={styles.infoText}>
              <h3>Email Us</h3>
              <p>contact@luxurycoffee.com</p>
              <p>support@luxurycoffee.com</p>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <div className={`${styles.socialIcon} ${styles.facebook}`}></div>
            <div className={`${styles.socialIcon} ${styles.instagram}`}></div>
            <div className={`${styles.socialIcon} ${styles.twitter}`}></div>
            <div className={`${styles.socialIcon} ${styles.pinterest}`}></div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.mapContainer} ${animateMap ? styles.animate : ""}`}
      >
        <div className={styles.mapOverlay}>
          <div className={styles.mapPin}></div>
          <div className={styles.rippleEffect}></div>
        </div>
        <div className={styles.mapPlaceholder}></div>
      </div>

      <div className={styles.coffeeFooter}>
        <div className={styles.coffeeCup}>
          <div className={`${styles.steam} ${styles.steam1}`}></div>
          <div className={`${styles.steam} ${styles.steam2}`}></div>
          <div className={`${styles.steam} ${styles.steam3}`}></div>
        </div>
        <p>
          © {new Date().getFullYear()} Luxury Coffee Company. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
