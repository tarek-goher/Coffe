import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate();
  const location = useLocation(); // لالتقاط المسار الحالي

  useEffect(() => {
    // عند التمرير للأسفل أو للأعلى في الصفحة
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // تحديث الرابط النشط بناءً على المسار الحالي
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/OurMenu') {
      setActiveLink('menu');
    } else if (path === '/Ourstore') {
      setActiveLink('coffee');
    } else if (path === '/locations') {
      setActiveLink('locations');
    } else if (path === '/contactus') {
      setActiveLink('contact');
    } else {
      setActiveLink('');
    }
  }, [location]); // سيُنفذ هذا الكود كلما تغير المسار

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName: string, path: string) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
    navigate(path); // التنقل باستخدام navigate
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="coffee-beans-bg"></div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={() => handleLinkClick('home', '/')}>
            <div className="logo-cup">
              <div className="cup-body">
                <div className="cup-steam">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="cup-handle"></div>
            </div>
            <span className="logo-text">{companyName}</span>
          </Link>
        </div>

        <div className="navbar-right">
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleLinkClick('home', '/')}
              >
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/OurMenu" 
                className={`nav-link ${activeLink === 'menu' ? 'active' : ''}`}
                onClick={() => handleLinkClick('menu', '/OurMenu')}
              >
                <span className="nav-text">Coffee Selection</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Ourstore" 
                className={`nav-link ${activeLink === 'coffee' ? 'active' : ''}`}
                onClick={() => handleLinkClick('coffee', '/Ourstore')}
              >
                <span className="nav-text">Our Story</span>
              </Link>
            </li>
            <li>
              <Link
                to="/locations" 
                className={`nav-link ${activeLink === 'locations' ? 'active' : ''}`}
                onClick={() => handleLinkClick('locations', '/locations')}
              >
                <span className="nav-text">About US</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contactus" 
                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => handleLinkClick('contact', '/contactus')}
              >
                <span className="nav-text">Contact Us</span>
              </Link>
            </li>
            <li className="nav-cta">
              <Link to="/order" className="order-button">
                <span className="order-text">Order Now</span>
                <span className="order-icon"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
