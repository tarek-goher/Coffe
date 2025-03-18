import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import { Link, useNavigate, NavLink } from "react-router-dom";

interface NavbarProps {
  companyName: string;
}

const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // عند التمرير للأسفل أو للأعلى في الصفحة
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path); // التنقل باستخدام navigate
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.coffeeBeansBg}></div>
      <div className="container mx-auto">
        <div className={styles.navbarLogo}>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <div className={styles.logoCup}>
              <div className={styles.cupBody}>
                <div className={styles.cupSteam}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.cupHandle}></div>
            </div>
            <span className={styles.logoText}>{companyName}</span>
          </Link>
        </div>

        <div className={`${styles.navbarRight} md:block! hidden!`}>
          <ul className={`${styles.navbarLinks} ${isMenuOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => handleLinkClick("/")}
              >
                <span className={styles.navText}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coffeselect"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => handleLinkClick("/coffeselect")}
              >
                <span className={styles.navText}>Coffee Selection</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourstory"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => handleLinkClick("/ourstory")}
              >
                <span className={styles.navText}>Our Story</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => handleLinkClick("/locations")}
              >
<<<<<<< Updated upstream
                <span className="nav-text">About US</span>
              </Link>
=======
                <span className={styles.navText}>Locations</span>
              </NavLink>
>>>>>>> Stashed changes
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={() => handleLinkClick("/contact")}
              >
<<<<<<< Updated upstream
                <span className="nav-text">Contact Us</span>
              </Link>
=======
                <span className={styles.navText}>Contact</span>
              </NavLink>
>>>>>>> Stashed changes
            </li>
            <li className={styles.navCta}>
              <Link to="/order" className={styles.orderButton}>
                <span className={styles.orderText}>Order Now</span>
                <span className={styles.orderIcon}></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.menuLine} ${isMenuOpen ? styles.active : ""}`}></div>
          <div className={`${styles.menuLine} ${isMenuOpen ? styles.active : ""}`}></div>
          <div className={`${styles.menuLine} ${isMenuOpen ? styles.active : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
