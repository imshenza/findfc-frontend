// src/components/AdminHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/admin" className="back-btn">
            &#8592; Back
          </Link>
        </div>
        <div className="navbar__center">
          <Link to="/" className="navbar__logo">
            FIND-FC
          </Link>
        </div>
        <div className="navbar__right">
          <Link to="/login">
            <button className="navbar__button">Logout</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
