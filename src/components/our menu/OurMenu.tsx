// OurMenu.tsx
import React, { useState, useEffect } from 'react';
import './OurMenu.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Nav-bar/Nav';
import Footer from '../Footer/Fotter';
// import coffeeImage1 from '../assets/espresso.jpg';
// import coffeeImage2 from '../assets/cappuccino.jpg';
// import coffeeImage3 from '../assets/latte.jpg';
// import coffeeImage4 from '../assets/mocha.jpg';
// import coffeeImage5 from '../assets/americano.jpg';
// import coffeeImage6 from '../assets/cold-brew.jpg';
// import foodImage1 from '../assets/croissant.jpg';
// import foodImage2 from '../assets/sandwich.jpg';
// import foodImage3 from '../assets/cake.jpg';

const OurMenu: React.FC = () => {
    const navigate = useNavigate();
        

  const handleButtonClick = (): void => {
    navigate('/Ourstore'); 
  };
  const [activeCategory, setActiveCategory] = useState('espresso');
  const [isVisible, setIsVisible] = useState({
    header: false,
    categories: false,
    menu: false,
  });

  const categories = [
    // { id: 'all', name: ' A Drinks' },
    { id: 'espresso', name: 'Espresso Drinks' },
    { id: 'brew', name: 'Brewed Coffee' },
    { id: 'cold', name: 'Cold Drinks' },
    { id: 'food', name: 'Food & Pastries' },
    { id: 'seasonal', name: 'Seasonal Specials' },
  ];

  const menuItems = {
    espresso: [
      {
        id: 1,
        name: 'Espresso',
        description: 'A concentrated shot of coffee with a rich layer of crema',
        price: '$3.50',
        image: 'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: ['Signature', 'Strong'],
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and foam',
        price: '$4.50',
        image: 'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: ['Popular'],
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam',
        price: '$4.75',
        image:'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: [],
      },
      {
        id: 4,
        name: 'Mocha',
        description: 'Espresso with chocolate, steamed milk, and whipped cream',
        price: '$5.25',
        image: 'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: ['Sweet'],
      },
    ],
    brew: [
      {
        id: 5,
        name: 'Americano',
        description: 'Espresso diluted with hot water for a milder coffee',
        price: '$3.75',
        image: 'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: [],
      },
      {
        id: 6,
        name: 'Pour Over',
        description: 'Hand-poured water over freshly ground coffee for maximum flavor extraction',
        price: '$4.25',
        image: null,
        tags: ['Artisanal'],
      },
      {
        id: 7,
        name: 'French Press',
        description: 'Coarsely ground coffee steeped in hot water for a robust flavor',
        price: '$4.00',
        image: null,
        tags: ['Strong'],
      },
    ],
    cold: [
      {
        id: 8,
        name: 'Cold Brew',
        description: 'Coffee steeped in cold water for 12+ hours, smooth and less acidic',
        price: '$4.50',
        image: 'https://i.pinimg.com/474x/49/d9/e4/49d9e43777d79668b4d2c05d97b0696e.jpg',
        tags: ['Signature'],
      },
      {
        id: 9,
        name: 'Iced Latte',
        description: 'Espresso with cold milk over ice',
        price: '$5.00',
        image: null,
        tags: ['Refreshing'],
      },
      {
        id: 10,
        name: 'Frappuccino',
        description: 'Blended coffee with ice, milk, and your choice of flavors',
        price: '$5.75',
        image: null,
        tags: ['Sweet'],
      },
    ],
    food: [
      {
        id: 11,
        name: 'Butter Croissant',
        description: 'Flaky, buttery pastry baked fresh daily',
        price: '$3.50',
        image: 'https://i.pinimg.com/474x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg',
        tags: ['Bestseller'],
      },
      {
        id: 12,
        name: 'Avocado Sandwich',
        description: 'Avocado, arugula, tomato, and feta on sourdough bread',
        price: '$8.75',
        image: 'https://i.pinimg.com/474x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg',
        tags: ['Healthy'],
      },
      {
        id: 13,
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with a smooth ganache topping',
        price: '$6.25',
        image: 'https://i.pinimg.com/474x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg',
        tags: ['Sweet'],
      },
    ],
    seasonal: [
      {
        id: 14,
        name: 'Pumpkin Spice Latte',
        description: 'Espresso with steamed milk, pumpkin spice syrup, and nutmeg',
        price: '$5.50',
        image: null,
        tags: ['Limited Time', 'Seasonal'],
      },
      {
        id: 15,
        name: 'Mint Chocolate Mocha',
        description: 'Mocha with mint syrup and chocolate shavings',
        price: '$5.75',
        image: null,
        tags: ['Seasonal'],
      },
    ],
  };

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
      <div className="menu-container">
      <section id="header" className={`menu-header ${isVisible.header ? 'visible' : ''}`}>
        <h1>Our Menu</h1>
        <p>Discover our handcrafted coffee and delicious food selections</p>
      </section>

      <section id="categories" className={`menu-categories ${isVisible.categories ? 'visible' : ''}`}>
        <div className="categories-wrapper">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section id="menu" className={`menu-items ${isVisible.menu ? 'visible' : ''}`}>
        <div className="menu-grid">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div className="menu-item" key={item.id}>
              <div className="menu-item-content">
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                  <div className="menu-item-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="menu-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {item.image && (
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-features">
        <div className="feature">
          <div className="feature-icon">☕</div>
          <h3>Premium Beans</h3>
          <p>Ethically sourced from the finest coffee farms worldwide</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🌿</div>
          <h3>Organic Options</h3>
          <p>Organic and sustainably grown ingredients in all our products</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🥛</div>
          <h3>Milk Alternatives</h3>
          <p>Variety of non-dairy options available for all our drinks</p>
        </div>
      </section>

      <section className="menu-customization">
        <h2>Customize Your Drink</h2>
        <div className="customization-options">
          <div className="customization-group">
            <h3>Milk Options</h3>
            <ul>
              <li>Whole Milk</li>
              <li>2% Milk</li>
              <li>Skim Milk</li>
              <li>Almond Milk (+$0.75)</li>
              <li>Oat Milk (+$0.75)</li>
              <li>Soy Milk (+$0.75)</li>
            </ul>
          </div>
          <div className="customization-group">
            <h3>Flavors</h3>
            <ul>
              <li>Vanilla (+$0.50)</li>
              <li>Caramel (+$0.50)</li>
              <li>Hazelnut (+$0.50)</li>
              <li>Chocolate (+$0.50)</li>
              <li>Seasonal Flavors (+$0.75)</li>
            </ul>
          </div>
          <div className="customization-group">
            <h3>Extras</h3>
            <ul>
              <li>Extra Shot (+$1.00)</li>
              <li>Whipped Cream (+$0.50)</li>
              <li>Cold Foam (+$0.75)</li>
              <li>Cinnamon Topping</li>
              <li>Chocolate Drizzle (+$0.50)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="menu-cta">
        <h2>Order Now</h2>
        <p>Visit our store or order online for pickup and delivery</p>
        <div className="cta-buttons">
          <button  className="cta-button primary">Order Online</button>
          <button onClick={handleButtonClick} className="cta-button secondary">Find a Store</button>
        </div>
      </section>
    </div>

  </div>
  );
};

export default OurMenu;