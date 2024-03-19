// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import "./AdminHeader.css"
const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="mobile-header">
        <Link to="/admin">
        <div className="back-button">
        back
        </div>
        </Link>
        <div className="logo">
          FIND-FC
        </div>
        <div className="login-button">
          <Link to="/login">
            <button id='login-button' onClick=''>LOGOUT</button>
          </Link>
        </div>
      </div>

     
    </header>
  );
};

export default AdminHeader;
