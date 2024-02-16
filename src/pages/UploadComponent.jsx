import React from 'react';
import './UploadComponent.css';
import AdminHeader from '../components/AdminHeader';

const UploadComponent = () => {
  return (
    <div>
      <AdminHeader />
      <div className="button-container">
        <button className="button">Upload New</button>
        <button className="button">View Uploaded</button>
      </div>
    </div>
  );
};

export default UploadComponent;
