import React, { useState } from 'react';
import './CoffeeProductsSection.css';

// Define product type
interface CoffeeProduct {
  id: number;
  name: string;
  origin: string;
  roastLevel: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  tags: string[];
  featured: boolean;
}

// Color mapping for roast levels
const getRoastColor = (roastLevel: string): string => {
  switch(roastLevel) {
    case 'Light':
      return '#c8a27a';
    case 'Medium':
      return '#a67c52';
    case 'Medium-Dark':
      return '#795548';
    case 'Dark':
      return '#5d4037';
    default:
      return '#a67c52';
  }
};

const CoffeeProductsSection: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  const filteredProducts = filter 
    ? coffeeProducts.filter(product => product.roastLevel === filter)
    : coffeeProducts;
  
  return (
    <div id="coffe_main_container">
      <div id="coffe_header_section">
        <div className="coffe_anim_title">
          <h1 id="coffe_main_title">
            <span className="coffe_icon"></span>
            Premium Coffee Collection
          </h1>
        </div>
        
        <div className="coffe_anim_subtitle">
          <h6 id="coffe_subtitle">
            Discover our carefully selected coffee beans from around the world
          </h6>
        </div>
        
        <div id="coffe_filter_section">
          <button 
            className={`coffe_filter_btn ${filter === null ? "coffe_filter_active" : ""}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {Array.from(new Set(coffeeProducts.map(p => p.roastLevel))).map(roast => (
            <button
              key={roast}
              className={`coffe_filter_btn ${filter === roast ? "coffe_filter_active" : ""}`}
              onClick={() => setFilter(roast as string)}
              style={{ 
                backgroundColor: filter === roast ? getRoastColor(roast as string) : 'transparent',
                borderColor: getRoastColor(roast as string),
                color: filter === roast ? 'white' : getRoastColor(roast as string)
              }}
            >
              {roast}
            </button>
          ))}
        </div>
      </div>
      
      <div id="coffe_products_grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="coffe_product_item">
            <div className="coffe_product_card">
              <div className="coffe_product_image_container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="coffe_product_image"
                />
                {product.featured && (
                  <span className="coffe_featured_badge">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="coffe_product_content">
                <div className="coffe_product_header">
                  <h2 className="coffe_product_title">{product.name}</h2>
                  <h6 className="coffe_product_price">${product.price}</h6>
                </div>
                
                <div className="coffe_product_tags_container">
                  <span className="coffe_origin_tag">{product.origin}</span>
                  <span 
                    className="coffe_roast_tag"
                    style={{ 
                      backgroundColor: getRoastColor(product.roastLevel)
                    }}
                  >
                    {product.roastLevel}
                  </span>
                </div>
                
                <p className="coffe_product_description">{product.description}</p>
                
                <div className="coffe_special_tags">
                  {product.tags.map(tag => (
                    <span key={tag} className="coffe_special_tag">{tag}</span>
                  ))}
                </div>
                
                <div className="coffe_rating_container">
                  <div className="coffe_rating">
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index} 
                        className={index < Math.floor(product.rating) ? "coffe_star_filled" : "coffe_star_empty"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="coffe_rating_value">({product.rating})</span>
                </div>
              </div>
              
              <div className="coffe_product_actions">
                <button className="coffe_add_cart_btn">
                  <span className="coffe_cart_icon"></span>
                  Add to Cart
                </button>
                <button
                  className={`coffe_fav_btn ${favorites.includes(product.id) ? "coffe_fav_active" : ""}`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <span className="coffe_heart_icon"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample data
const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roastLevel: "Light",
    price: 14.99,
    description: "Floral and fruity notes with a bright acidity and smooth finish. Perfect for pour-over methods.",
    rating: 4.8,
    image: "https://i.pinimg.com/474x/00/98/b5/0098b56a06408280ea23169d42374176.jpg",
    tags: ["Organic", "Single Origin"],
    featured: true
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Colombia",
    roastLevel: "Medium",
    price: 12.99,
    description: "Well-balanced with caramel sweetness, nutty undertones and a gentle acidity.",
    rating: 4.5,
    image: "https://i.pinimg.com/474x/00/98/b5/0098b56a06408280ea23169d42374176.jpg",
    tags: ["Fair Trade", "Bestseller"],
    featured: false
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    roastLevel: "Dark",
    price: 15.99,
    description: "Full-bodied with earthy, herbal notes and low acidity. Great for espresso blends.",
    rating: 4.7,
    image: "https://i.pinimg.com/474x/7f/98/92/7f98920e7c427ed9bd016003ddf27c57.jpg",
    tags: ["Organic", "Rich"],
    featured: true
  },
  {
    id: 4,
    name: "Kenyan AA",
    origin: "Kenya",
    roastLevel: "Medium",
    price: 16.99,
    description: "Bold, fruity profile with wine-like acidity and a sweet, complex finish.",
    rating: 4.9,
    image: "https://i.pinimg.com/474x/7f/98/92/7f98920e7c427ed9bd016003ddf27c57.jpg",
    tags: ["Premium", "Limited"],
    featured: false
  },
  {
    id: 5,
    name: "Guatemala Antigua",
    origin: "Guatemala",
    roastLevel: "Medium-Dark",
    price: 13.99,
    description: "Spicy and smoky with chocolate notes and a velvety body.",
    rating: 4.6,
    image: "https://i.pinimg.com/474x/00/98/b5/0098b56a06408280ea23169d42374176.jpg",
    tags: ["Highland", "Volcanic"],
    featured: false
  },
  {
    id: 6,
    name: "Costa Rica Tarrazu",
    origin: "Costa Rica",
    roastLevel: "Medium",
    price: 14.50,
    description: "Bright with citrus notes, clean flavor and a honey-like sweetness.",
    rating: 4.7,
    image: "https://source.unsplash.com/random/400x300/?coffee,costarica",
    tags: ["Sustainable", "Mountain"],
    featured: false
  }
];

export default CoffeeProductsSection;