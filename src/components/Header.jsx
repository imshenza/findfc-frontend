// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import "./Header.css"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="mobile-header">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className="logo">
          FIND-FC
        </div>
        <div className="login-button">
          <Link to="/login">
            <button id='login-button'>LOGIN</button>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="menu">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/study-materials" onClick={toggleMenu}>
         <div className="item-icon">
         <img src="public\images\books.svg" alt="" />
          Study Materials
         </div>
          </Link>
          <Link to="/gallery" onClick={toggleMenu}>
          <div className="item-icon"><img src="public\images\gallery.png" alt="" />
            Gallery</div>
          </Link>
          <Link to="/map" onClick={toggleMenu}>
          <div className="item-icon">
          <img src="public\images\map.png" alt="" />
            Map
          </div>
          </Link>
          <div className="close-icon" onClick={toggleMenu}>
          ☰
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
