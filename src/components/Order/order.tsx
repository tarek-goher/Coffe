import React, { useState, useEffect } from 'react';
import  './order.medule.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface OrderItem {
  item: CoffeeItem;
  quantity: number;
  size: 'small' | 'medium' | 'large';
  notes: string;
}

const OrderPage: React.FC = () => {
  const [coffeeItems, setCoffeeItems] = useState<CoffeeItem[]>([]);
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Simulated data loading
  useEffect(() => {
    // In a real application, this would be an API call
    setTimeout(() => {
      setCoffeeItems([
        {
          id: 1,
          name: 'Espresso',
          description: 'Rich and intense coffee experience',
          price: 3.5,
          image: 'https://i.pinimg.com/474x/bf/4b/71/bf4b71cddb1452285c671cdddd4c2c19.jpg',
          category: 'espresso'
        },
        {
          id: 2,
          name: 'Cappuccino',
          description: 'Espresso with steamed milk and foam',
          price: 4.5,
                   image: 'https://i.pinimg.com/474x/bf/4b/71/bf4b71cddb1452285c671cdddd4c2c19.jpg',
          category: 'milk-based'
        },
        {
          id: 3,
          name: 'Latte',
          description: 'Smooth espresso with plenty of steamed milk',
          price: 4.75,
          image: 'https://i.pinimg.com/474x/bf/4b/71/bf4b71cddb1452285c671cdddd4c2c19.jpg',
          category: 'milk-based'
        },
        {
          id: 4,
          name: 'Americano',
          description: 'Espresso diluted with hot water',
          price: 3.25,
                   image: 'https://i.pinimg.com/474x/bf/4b/71/bf4b71cddb1452285c671cdddd4c2c19.jpg',
                    category: 'espresso'
        },
        {
          id: 5,
          name: 'Mocha',
          description: 'Espresso with chocolate and steamed milk',
          price: 5.25,
                   image: 'https://i.pinimg.com/474x/bf/4b/71/bf4b71cddb1452285c671cdddd4c2c19.jpg',
          category: 'specialty'
        },
        {
          id: 6,
          name: 'Cold Brew',
          description: 'Smooth, slow-brewed cold coffee',
          price: 4.95,
          image: 'https://i.pinimg.com/474x/70/d2/38/70d2383504c90a25cbd4e4bbf6780fc0.jpg',
          category: 'cold'
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { id: 'all', name: 'All Coffee' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'milk-based', name: 'Milk Based' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'cold', name: 'Cold Brew' }
  ];

  const addToCart = (item: CoffeeItem) => {
    const newItem: OrderItem = {
      item,
      quantity: 1,
      size: 'medium',
      notes: ''
    };
    
    setCart([...cart, newItem]);
    
    // Animation effect
    const element = document.getElementById(`coffee-item-${item.id}`);
    if (element) {
      element.classList.add('added-to-cart');
      setTimeout(() => {
        element.classList.remove('added-to-cart');
      }, 500);
    }
  };

  const updateCartItem = (index: number, updates: Partial<OrderItem>) => {
    const updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], ...updates };
    setCart(updatedCart);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const sizeMultiplier = item.size === 'small' ? 0.8 : item.size === 'large' ? 1.2 : 1;
      return sum + (item.item.price * sizeMultiplier * item.quantity);
    }, 0);
  };

  const filteredItems = coffeeItems.filter(item => 
    (activeCategory === 'all' || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="order-page">
      <header className="order-header">
        <div className="logo-container">
          <h1>Brew Haven</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search our coffee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          <span className="material-icons">   <AddShoppingCartOutlinedIcon/>  </span>
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </div>
      </header>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <main className="order-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading our delicious coffee options...</p>
          </div>
        ) : (
          <div className="coffee-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div 
                  className="coffee-item" 
                  key={item.id} 
                  id={`coffee-item-${item.id}`}
                >
                  <div className="coffee-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="coffee-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <div className="price-action">
                      <p className="price">${item.price.toFixed(2)}</p>
                      <button className="add-to-cart" onClick={() => addToCart(item)}>
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No coffee items found. Try a different search term or category.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Order</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your order is empty</p>
            <button className="start-order" onClick={() => setIsCartOpen(false)}>
              Start Ordering
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((orderItem, index) => (
                <div className="cart-item" key={index}>
                  <div className="cart-item-info">
                    <h4>{orderItem.item.name}</h4>
                    <div className="item-options">
                      <div className="size-selector">
                        <span>Size:</span>
                        <div className="size-buttons">
                          {['small', 'medium', 'large'].map((size) => (
                            <button
                              key={size}
                              className={`size-button ${orderItem.size === size ? 'selected' : ''}`}
                              onClick={() => updateCartItem(index, { size: size as 'small' | 'medium' | 'large' })}
                            >
                              {size.charAt(0).toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="quantity-selector">
                        <button 
                          className="quantity-btn" 
                          onClick={() => {
                            if (orderItem.quantity > 1) {
                              updateCartItem(index, { quantity: orderItem.quantity - 1 });
                            }
                          }}
                        >
                          -
                        </button>
                        <span>{orderItem.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateCartItem(index, { quantity: orderItem.quantity + 1 })}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <textarea
                      className="item-notes"
                      placeholder="Special instructions..."
                      value={orderItem.notes}
                      onChange={(e) => updateCartItem(index, { notes: e.target.value })}
                    />
                  </div>
                  
                  <div className="cart-item-actions">
                    <p className="item-price">
                      ${(orderItem.item.price * (orderItem.size === 'small' ? 0.8 : orderItem.size === 'large' ? 1.2 : 1) * orderItem.quantity).toFixed(2)}
                    </p>
                    <button className="remove-item" onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
              </div>
              
              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;