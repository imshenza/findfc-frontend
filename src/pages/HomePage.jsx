// src/pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Poster from '../components/Poster';
import './HomePage.css'; 
import Header from '../components/Header';

const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const options = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Study Materials', link: '/study-materials' },
    { id: 3, label: 'Gallery', link: '/gallery' },
    { id: 4, label: 'Maps', link: '/maps' }, // Add your maps link or route
  ];

  return (
    <div className="home">
      {/* Header */}
    <header>
      <div className="header-content">
        <div className="header-left">
          <button onClick={handleToggleOptions} className="more-options">
            <img src="/images/menu.png" alt="More Options" />
          </button>
          {showOptions && (
              <div className="options-overlay">
              <ul>
                {options.map((option) => (
                  <li key={option.id}>
                    <Link to={option.link}>{option.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="header-center">
          <h1 id="findfc">FIND-FC</h1>
        </div>
        <Link to="/login">
        <div className="header-right">
          <button className="login">Login</button>
        </div>
        </Link>
      </div>
    </header>

      {/* Posters */}
      <main>
        <h1 id='events'>TODAY'S EVENTS</h1>
        <div className="posters-section">
          {/* Display posters here */}
          <Poster imageUrl={"/images/img3.png"}  time="10:00 AM" venue="Venue 1" />
          <Poster imageUrl={"/images/img3.png"}  time="02:00 PM" venue="Venue 2" />
          <Poster imageUrl={"/images/img3.png"} time="02:00 PM" venue="Venue 3" />
          {/* Add more posters as needed */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
