import React from 'react';
import './AdminHome.css';
import AdminHeader from '../components/AdminHeader';
import { Link } from "react-router-dom";

const AdminHome = () => 
  {
    return (
      <div>
        <AdminHeader/>
          <Link to="/posterup">
          <button className="button">Posters</button>
          </Link>
          <button className="button">Study Materials</button>
          <button className="button">Gallery</button>
        </div>
      
    );
  };

export default AdminHome;
