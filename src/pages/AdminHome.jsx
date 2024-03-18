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
          <Link to="/studyup">
          <button className="button">Study Materials</button>
          </Link>
          <Link to="/galleryup">
          <button className="button">Gallery</button>

          </Link>
        </div>
      
    );
  };

export default AdminHome;
