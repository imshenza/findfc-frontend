import React from 'react';
import './UploadComponent.css';
import AdminHeader from './src/admin/AdminHeader';
import { Link } from 'react-router-dom';


const UploadComponentstudy = () => {
  return (
    <div><AdminHeader />
    <div className="button-container">
      <Link to="/posterupload">
      <button className="button">Upload New</button></Link>
      <button className="button">View Uploaded</button>
    </div></div>
  )
}

export default UploadComponentstudy
