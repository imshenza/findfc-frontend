// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Import your CSS file

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
          {isOpen && (
            <button className="navbar__close-btn" onClick={toggleMenu}>
              X
            </button>
          )}
        </div>
      </div>
      <div className="navbar__center">
        <Link to="/" className="navbar__logo">FIND-FC</Link>
      </div>
      <div className="navbar__right">
        <Link to='/login'>
          <button className="navbar__button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
