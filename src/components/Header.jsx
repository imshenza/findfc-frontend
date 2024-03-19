// // src/components/Header.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
// import "./Header.css"
// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="mobile-header">
//         <div className="menu-icon" onClick={toggleMenu}>
//           ☰
//         </div>
//         <div className="logo">
//           FIND-FC
//         </div>
//         <div className="login-button">
//           <Link to="/login">
//             <button id='login-button'>LOGIN</button>
//           </Link>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="menu">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/study-materials" onClick={toggleMenu}>
//          <div className="item-icon">
//          <img src="public\images\books.svg" alt="" />
//           Study Materials
//          </div>
//           </Link>
//           <Link to="/gallery" onClick={toggleMenu}>
//           <div className="item-icon"><img src="public\images\gallery.png" alt="" />
//             Gallery</div>
//           </Link>
//           <Link to="/map" onClick={toggleMenu}>
//           <div className="item-icon">
//           <img src="public\images\map.png" alt="" />
//             Map
//           </div>
//           </Link>
//           <div className="close-icon" onClick={toggleMenu}>
//           ☰
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import './Header.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsOpen(false); // Close the menu when a tab is clicked
  };

  useEffect(() => {
    const path = location.pathname;
    setActiveTab(path === '/' ? 'findfc' : path.substr(1));
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </span>
      </div>
      <div className="navbar__center">
        <Link to="/" className="navbar__logo">findfc</Link>
      </div>
      <div className="navbar__right">
        <Link to='/login'>
        <button className="navbar__button">Login</button>
        </Link>
        
      </div>
      <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar__list">
          <li
            className={`navbar__item ${activeTab === 'findfc' ? 'active' : ''}`}
            onClick={() => handleTabClick('findfc')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`navbar__item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => handleTabClick('gallery')}
          >
            <Link to="/gallery">Gallery</Link>
          </li>
          <li
            className={`navbar__item ${activeTab === 'study-materials' ? 'active' : ''}`}
            onClick={() => handleTabClick('study-materials')}
          >
            <Link to="/study-materials">Study Materials</Link>
          </li>
          <li
            className={`navbar__item ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => handleTabClick('map')}
          >
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
