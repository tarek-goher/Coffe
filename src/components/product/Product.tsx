import React, { useState, useEffect } from 'react';
import './Products.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  isFeatured: boolean;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // محاكاة جلب البيانات من API
  useEffect(() => {
    // بيانات المنتجات
    const coffeeProducts: Product[] = [
      {
        id: 1,
        name: "اسبريسو عربي",
        category: "القهوة الساخنة",
        price: 15,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "قهوة اسبريسو مركزة محضرة من أجود أنواع البن العربي. مذاق قوي وغني.",
        rating: 4.8,
        isFeatured: true
      },
      {
        id: 2,
        name: "لاتيه بالكراميل",
        category: "القهوة الساخنة",
        price: 20,
        image: "https://i.pinimg.com/474x/7f/98/92/7f98920e7c427ed9bd016003ddf27c57.jpg",
        description: "قهوة اسبريسو ممزوجة بحليب مبخر وشراب الكراميل المحلى، مع طبقة من الكريمة.",
        rating: 4.5,
        isFeatured: true
      },
      {
        id: 3,
        name: "قهوة تركية",
        category: "القهوة الساخنة",
        price: 12,
        image: "https://i.pinimg.com/474x/61/af/a9/61afa93da177a65749b53506c6ff20a4.jpg",
        description: "قهوة تركية تقليدية محضرة على الرمل، بنكهة الهيل المميزة.",
        rating: 4.7,
        isFeatured: false
      },
      {
        id: 4,
        name: "كولد برو",
        category: "القهوة الباردة",
        price: 22,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "قهوة باردة مخمرة ببطء لمدة 24 ساعة، تقدم مع الثلج لمذاق منعش وقوي.",
        rating: 4.6,
        isFeatured: true
      },
      {
        id: 5,
        name: "فرابتشينو بالشوكولاتة",
        category: "القهوة الباردة",
        price: 25,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "مزيج من الاسبريسو والحليب والثلج المخفوق مع صوص الشوكولاتة والكريمة.",
        rating: 4.9,
        isFeatured: true
      },
      {
        id: 6,
        name: "شاي أخضر بالنعناع",
        category: "المشروبات الأخرى",
        price: 14,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "شاي أخضر عضوي مع أوراق النعناع الطازجة، مشروب منعش وصحي.",
        rating: 4.3,
        isFeatured: false
      },
      {
        id: 7,
        name: "كيكة الشوكولاتة",
        category: "الحلويات",
        price: 18,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "كيكة شوكولاتة داكنة طرية مع طبقة من الجاناش الغني.",
        rating: 4.7,
        isFeatured: false
      },
      {
        id: 8,
        name: "بن عربي (250 جرام)",
        category: "البن المحمص",
        price: 45,
        image: "https://i.pinimg.com/474x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
        description: "بن عربي محمص على الطريقة التقليدية، متوسط التحميص ونكهة غنية.",
        rating: 4.8,
        isFeatured: true
      }
    ];
    
    setProducts(coffeeProducts);
    setFilteredProducts(coffeeProducts);
    
    // تأثير التحميل
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  // تغيير الفئة
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'الكل') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // الحصول على جميع الفئات الفريدة
  const categories = ['الكل', ...Array.from(new Set(products.map(product => product.category)))];

  // فتح تفاصيل المنتج
  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  // إغلاق تفاصيل المنتج
  const closeProductDetails = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">منتجاتنا المميزة</h1>
        <p className="products-subtitle">
          تشكيلة متنوعة من أجود أنواع القهوة والمشروبات المعدة بعناية فائقة
        </p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`products-grid ${isLoaded ? 'loaded' : ''}`}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className={`product-card ${product.isFeatured ? 'featured' : ''}`}
            onClick={() => openProductDetails(product)}
          >
            <div className="product-image-container">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              {product.isFeatured && <span className="featured-badge">مميز</span>}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-footer">
                <div className="product-rating">
                  <span className="rating-star">★</span>
                  <span className="rating-value">{product.rating}</span>
                </div>
                <div className="product-price">{product.price} ريال</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* تفاصيل المنتج - نافذة منبثقة */}
      {selectedProduct && (
        <div className="product-detail-modal">
          <div className="modal-overlay" onClick={closeProductDetails}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeProductDetails}>×</button>
            
            <div className="product-detail-container">
              <div className="product-detail-image" style={{ backgroundImage: `url(${selectedProduct.image})` }}></div>
              
              <div className="product-detail-info">
                <h2 className="product-detail-name">{selectedProduct.name}</h2>
                <p className="product-detail-category">{selectedProduct.category}</p>
                <div className="product-detail-rating">
                  <span className="rating-stars">
                    {'★'.repeat(Math.floor(selectedProduct.rating))}
                    {'☆'.repeat(5 - Math.floor(selectedProduct.rating))}
                  </span>
                  <span className="rating-number">{selectedProduct.rating}</span>
                </div>
                <p className="product-detail-description">{selectedProduct.description}</p>
                <div className="product-detail-footer">
                  <div className="product-detail-price">{selectedProduct.price} ريال</div>
                  <button className="add-to-cart-button">
                    أضف للسلة
                    <span className="cart-icon">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;