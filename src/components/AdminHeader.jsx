// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import "./Header.css"
const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div><nav className="navbar"><div className="navbar__left">
    <Link to="/admin">
  <h6 id='btn'>BACK</h6>
    
    </Link>
    </div>
    <div className="navbar__center">
    <Link to="/" className="navbar__logo">findfc</Link>
  </div>
  <div className="navbar__right">
    <Link to='/login'>
      <button className="navbar__button">Login</button>
    </Link>
  </div>
</nav></div>
      

     
    
  );
};

export default AdminHeader;
