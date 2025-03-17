import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

// Define the structure of a testimonial
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

// Sample testimonial data
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVision Inc.",
    text: "Working with this team transformed our digital presence completely. The attention to detail and creative solutions provided exceeded our expectations. Highly recommended!",
    avatar: "https://i.pinimg.com/474x/2d/4c/9c/2d4c9c5773e4cb91edbdf4fbec8520a6.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateTech",
    text: "Outstanding service and brilliant execution. They understand business needs and deliver solutions that actually drive results. We've seen a 40% increase in engagement since implementation.",
    avatar: "https://i.pinimg.com/474x/2d/4c/9c/2d4c9c5773e4cb91edbdf4fbec8520a6.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Operations Manager",
    company: "GlobalSystems",
    text: "The team's professionalism and technical expertise are unmatched. They delivered on time and within budget, while maintaining exceptional quality throughout the project.",
    avatar: "https://i.pinimg.com/474x/2d/4c/9c/2d4c9c5773e4cb91edbdf4fbec8520a6.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    role: "Product Owner",
    company: "FutureSoft",
    text: "A true partner in our digital journey. Their collaborative approach and innovative thinking helped us overcome complex challenges and achieve our strategic goals.",
    avatar: "https://i.pinimg.com/474x/2d/4c/9c/2d4c9c5773e4cb91edbdf4fbec8520a6.jpg",
    rating: 5
  }
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={styles.tmsRatingContainer}>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={`${styles.tmsRatingStar} ${index < rating ? styles.tmsFilled : styles.tmsEmpty}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// Testimonial card component
const TestimonialCard: React.FC<{ testimonial: Testimonial; isActive: boolean }> = ({ testimonial, isActive }) => {
  return (
    <motion.div 
      className={`${styles.tmsCard} ${isActive ? styles.tmsActive : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 20, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.tmsQuoteIcon}>"</div>
      <p className={styles.tmsText}>{testimonial.text}</p>
      <div className={styles.tmsFooter}>
        <img src={testimonial.avatar} alt={testimonial.name} className={styles.tmsAvatar} />
        <div className={styles.tmsInfo}>
          <h4 className={styles.tmsName}>{testimonial.name}</h4>
          <p className={styles.tmsRole}>{testimonial.role}, {testimonial.company}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </motion.div>
  );
};

// Main testimonials section component
const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.tmsContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.tmsHeader}
      >
        <span className={styles.tmsSubtitle}>TESTIMONIALS</span>
        <h2 className={styles.tmsTitle}>What Our Clients Say</h2>
        <div className={styles.tmsDivider}></div>
      </motion.div>
      
      <div className={styles.tmsCardsContainer}>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            isActive={index === activeIndex} 
          />
        ))}
      </div>
      
      <div className={styles.tmsNavigation}>
        {testimonialData.map((_, index) => (
          <button
            key={index}
            className={`${styles.tmsDot} ${index === activeIndex ? styles.tmsActiveDot : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;