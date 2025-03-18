import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';

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
    <div className={styles.productsContainer}>
      <div className={styles.productsHeader}>
        <h1 className={styles.productsTitle}>منتجاتنا المميزة</h1>
        <p className={styles.productsSubtitle}>
          تشكيلة متنوعة من أجود أنواع القهوة والمشروبات المعدة بعناية فائقة
        </p>
      </div>

      <div className={styles.categoryFilter}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`${styles.productsGrid} ${isLoaded ? styles.loaded : ''}`}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className={`${styles.productCard} ${product.isFeatured ? styles.featured : ''}`}
            onClick={() => openProductDetails(product)}
          >
            <div className={styles.productImageContainer}>
              <div className={styles.productImage} style={{ backgroundImage: `url(${product.image})` }}></div>
              {product.isFeatured && <span className={styles.featuredBadge}>مميز</span>}
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productCategory}>{product.category}</p>
              <div className={styles.productFooter}>
                <div className={styles.productRating}>
                  <span className={styles.ratingStar}>★</span>
                  <span className={styles.ratingValue}>{product.rating}</span>
                </div>
                <div className={styles.productPrice}>{product.price} ريال</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* تفاصيل المنتج - نافذة منبثقة */}
      {selectedProduct && (
        <div className={styles.productDetailModal}>
          <div className={styles.modalOverlay} onClick={closeProductDetails}></div>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeProductDetails}>×</button>
            
            <div className={styles.productDetailContainer}>
              <div className={styles.productDetailImage} style={{ backgroundImage: `url(${selectedProduct.image})` }}></div>
              
              <div className={styles.productDetailInfo}>
                <h2 className={styles.productDetailName}>{selectedProduct.name}</h2>
                <p className={styles.productDetailCategory}>{selectedProduct.category}</p>
                <div className={styles.productDetailRating}>
                  <span className={styles.ratingStars}>
                    {'★'.repeat(Math.floor(selectedProduct.rating))}
                    {'☆'.repeat(5 - Math.floor(selectedProduct.rating))}
                  </span>
                  <span className={styles.ratingNumber}>{selectedProduct.rating}</span>
                </div>
                <p className={styles.productDetailDescription}>{selectedProduct.description}</p>
                <div className={styles.productDetailFooter}>
                  <div className={styles.productDetailPrice}>{selectedProduct.price} ريال</div>
                  <button className={styles.addToCartButton}>
                    أضف للسلة
                    <span className={styles.cartIcon}>🛒</span>
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