import React, { useState } from 'react';
import styles from './CoffeeProductsSection.module.css';

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
    <div id={styles.coffeMainContainer}>
      <div id={styles.coffeHeaderSection}>
        <div className={styles.coffeAnimTitle}>
          <h1 id={styles.coffeMainTitle}>
            <span className={styles.coffeIcon}></span>
            Premium Coffee Collection
          </h1>
        </div>
        
        <div className={styles.coffeAnimSubtitle}>
          <h6 id={styles.coffeSubtitle}>
            Discover our carefully selected coffee beans from around the world
          </h6>
        </div>
        
        <div id={styles.coffeFilterSection}>
          <button 
            className={`${styles.coffeFilterBtn} ${filter === null ? styles.coffeFilterActive : ""}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {Array.from(new Set(coffeeProducts.map(p => p.roastLevel))).map(roast => (
            <button
              key={roast}
              className={`${styles.coffeFilterBtn} ${filter === roast ? styles.coffeFilterActive : ""}`}
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
      
      <div id={styles.coffeProductsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.coffeProductItem}>
            <div className={styles.coffeProductCard}>
              <div className={styles.coffeProductImageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.coffeProductImage}
                />
                {product.featured && (
                  <span className={styles.coffeFeaturedBadge}>
                    Featured
                  </span>
                )}
              </div>
              
              <div className={styles.coffeProductContent}>
                <div className={styles.coffeProductHeader}>
                  <h2 className={styles.coffeProductTitle}>{product.name}</h2>
                  <h6 className={styles.coffeProductPrice}>${product.price}</h6>
                </div>
                
                <div className={styles.coffeProductTagsContainer}>
                  <span className={styles.coffeOriginTag}>{product.origin}</span>
                  <span 
                    className={styles.coffeRoastTag}
                    style={{ 
                      backgroundColor: getRoastColor(product.roastLevel)
                    }}
                  >
                    {product.roastLevel}
                  </span>
                </div>
                
                <p className={styles.coffeProductDescription}>{product.description}</p>
                
                <div className={styles.coffeSpecialTags}>
                  {product.tags.map(tag => (
                    <span key={tag} className={styles.coffeSpecialTag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.coffeRatingContainer}>
                  <div className={styles.coffeRating}>
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index} 
                        className={index < Math.floor(product.rating) ? styles.coffeStarFilled : styles.coffeStarEmpty}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className={styles.coffeRatingValue}>({product.rating})</span>
                </div>
              </div>
              
              <div className={styles.coffeProductActions}>
                <button className={styles.coffeAddCartBtn}>
                  <span className={styles.coffeCartIcon}></span>
                  Add to Cart
                </button>
                <button
                  className={`${styles.coffeFavBtn} ${favorites.includes(product.id) ? styles.coffeFavActive : ""}`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <span className={styles.coffeHeartIcon}></span>
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