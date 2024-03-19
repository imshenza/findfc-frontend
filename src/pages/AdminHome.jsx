import React from 'react';
import './AdminHome.css';
import AdminHeader from '../components/AdminHeader';
import { Link } from "react-router-dom";

const AdminHome = () => 
  {
    return (
      <div>
        <AdminHeader/>
        <div className="button-container">
          <h1 className='page-heading'>Admin's Dashboard</h1><br /><br />
        <Link to="/posterup">
          <button className="button">Posters</button>
          </Link><br /><br />
          <Link to="/studyup">
          <button className="button">Study Materials</button>
          </Link><br /><br />
          <Link to="/galleryup">
          <button className="button">Gallery</button>

          </Link>
        </div>
          
        </div>
      
    );
  };

export default AdminHome;
